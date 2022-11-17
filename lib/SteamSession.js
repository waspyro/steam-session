import fetch from "node-fetch";
import formDataFromObject from "./formDataFromObject.js";
import prompt from "./utils/prompt.js";
import decodeJWT from "./utils/decodeJWT.js";
import ProtoRequests from "./ProtoRequests.js";
import encryptPasswordWithPublicKey from "./utils/encryptPasswordWithPublicKey.js";
import {webBrowser, mobileIOS, clientWindows} from "./utils/genRequestEnv.js";
import SteamSessionCookieStore from "./SteamSessionCookieStore.js";
import * as Path from "path";
import fs from 'fs/promises'
import EGuardName from "./enums/EGuardName.js";
import {
  defaultActor, deviceCodeActor, deviceCodePromptActor,
  expectConfirmViaDeviceActor, emailCodePromptActor,
  expectNoGuardActor
} from "./actors.js";

export default class SteamSession {
  cookies = new SteamSessionCookieStore() //todo temporary cookies
  proto = new ProtoRequests(this)
  env = null

  set env(newEnv) {
    this.env = newEnv
    this.#onEnvSet && this.#onEnvSet(newEnv)
  }

  constructor(env) {
    if(env !== null) this.env = env || webBrowser()
  }

  //todo temporary extra request cookies
  //todo ignore response cookies
  request(url, opts = {}) {
    if(url.constructor !== URL) url = new URL(url)
    if(opts.qs) url.search = new URLSearchParams(opts.qs)
    else if(opts.form) opts.body = new URLSearchParams(opts.form)
    else if(opts.fd) opts.body = formDataFromObject(opts.fd)
    opts.headers = Object.assign({}, opts.headers, this.env.headers)
    opts.cookies = this.cookies.get(url)
    this.onrequest && this.onrequest(url, opts)
    opts.headers.cookie = opts.cookies.toString()
    opts.redirect = 'manual'
    return fetch(url, opts).then(async response => {
      response.rawHeaders = response.headers.raw()
      response.cookies = this.cookies.setFromHeaders(response.rawHeaders, url)
      if(opts.followRedirects !== undefined && (response.status === 301 || response.status === 302)) {
        const newLocation = response.rawHeaders.location
        if(!newLocation) throw new Error('redirect without location header')
        if(opts.followRedirects--) return fetch(newLocation, opts)
        else throw new Error('no more redirects')
      }
      this.onresponse && this.onresponse(url, opts, response)
      return response
    })
  }

  //todo abort controller
  async pollUntilResults({clientId, requestId, interval, delay = 0, attempts = 100}) {
    if(delay) await new Promise(resolve => setTimeout(resolve, delay))
    while (attempts--) {
      const results = await this.proto.pollAuthSessionStatus(clientId, requestId)
      if(results.refreshToken || results.accessToken) return results
      if(results.newClientId) clientId = results.newClientId
      await new Promise(resolve => setTimeout(resolve, interval))
    }
    throw new Error('no more attempts')
  }

  async checkDevice(clientid, steamid) {
    return this.request('https://login.steampowered.com/jwt/checkdevice/'+steamid, {
      method: 'POST',
      fd: {clientid, steamid}
    }).then(resp => resp.json())
  }

  async encryptPasswordAndBeginAuthSessionViaCredentials(login, password) {
    const {publickeyMod, timestamp, publickeyExp} = await this.proto.getPasswordRSA(login)
    const encryptedPassword = encryptPasswordWithPublicKey(publickeyMod, publickeyExp, password)
    return this.proto.beginAuthSessionViaCredentials({
      accountName: login, encryptedPassword, encryptionTimestamp: timestamp
    }).catch(e => {
      if(e.error.code === 5) throw new Error('wrong password')
      else throw new Error(JSON.stringify(e.error))
    })
  }

  #setShortPollOptions = ctx => {ctx.delay = 0; ctx.attempts = 3; return true}

  #checkDeviceOrSendEmailAction = ctx => () => this.#setShortPollOptions(ctx) &&
    this.checkDevice(ctx.clientId, ctx.steamid)
      .then(res => !(res.success && res.result !== 8))
  #submitMobileCodeAction = ctx => code => this.#setShortPollOptions(ctx) &&
    this.proto.submitMobileAuthCode(ctx.clientId, ctx.steamid, code)
  #submitEmailCodeAction = ctx => code => this.#setShortPollOptions(ctx) &&
    this.proto.submitEmailAuthCode(ctx.clientId, ctx.steamid, code)

  #getGuardsFromAllowedConfirmations(allowedConfirmations) {
    const guards = {}
    for(const {confirmationType, associatedMessage = null} of allowedConfirmations) {
      const guardName = EGuardName[confirmationType]
      guards[guardName] = associatedMessage || true
    }
    return guards
  }

  #createActions(guards, ctx) {
    const actions = {}

    if(guards.submitEmailCode || guards.submitMachineToken) { //??
      actions.checkDeviceOrSendEmail = this.#checkDeviceOrSendEmailAction(ctx)
      actions.submitEmailCode = this.#submitEmailCodeAction(ctx)
    }

    if(guards.submitDeviceCode) {
      actions.submitDeviceCode = this.#submitMobileCodeAction(ctx)
    }

    return actions
  }

  //todo array of actors. iterate until some actor return true. ex: [noAction, confirmOnDevice, confirmViaDeviceCode, ...]
  async getJWTViaCredentials(login, password, actor = defaultActor) {
    const ctx = await this.encryptPasswordAndBeginAuthSessionViaCredentials(login, password)
    ctx.interval *= 1000; ctx.delay = ctx.interval
    const guards = this.#getGuardsFromAllowedConfirmations(ctx.allowedConfirmations)
    const actions = this.#createActions(guards, ctx)
    await actor(actions, guards, ctx) //todo abort controller, interval options and staff as return value
    return this.pollUntilResults(ctx)
  }

  async refreshCookies(refreshToken, domains) {
    domains = domains || ['store.steampowered.com', 'steamcommunity.com']
    refreshToken = refreshToken || this.cookies.getRefreshToken()
    if(!refreshToken) throw new Error('refresh token is required to update cookies')

    const sessionid = this.cookies.getSessionIDCookie().value
    const fd = {nonce: refreshToken, sessionid, redir: 'https://steamcommunity.com/login/home/?goto='}
    const opts = {fd, method: 'POST'}
    let {steamID, transfer_info} = await this.request('https://login.steampowered.com/jwt/finalizelogin', opts)
      .then(r => r.json())
    if(!steamID || !transfer_info) throw new Error('malformed response')
    transfer_info = transfer_info.filter(el => domains.includes((el.url = new URL(el.url)).hostname))
    if(transfer_info.length !== domains.length) throw new Error('cannot refresh cookies for some of required domains')
    return Promise.all(transfer_info.map(async el => {
      el.params.steamID = steamID
      const opts = {fd: el.params, method: 'POST'}
      const response = await this.request(el.url, opts)
      const body = await response.json()
      el.success = body.result
      el.cookies = response.cookies
      return el
    }))
  }

  me = () => this.request('https://steamcommunity.com/my').then(res => {
    const location = res.headers.get('location')
    const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
    if(!profileUrl) return null
    return [profileUrl[0], profileUrl[3], profileUrl[2]]
  })

  isLoggedIn = () => this.me().then(location => !!location)

  async useSessionSaveLocation(...path) {
    path = Path.join(...path)
    const envPath = Path.join(path, 'env.json')
    const restoredCookies = await this.cookies.useCookiesSaveLocation(path)
    const restoredEnv = await fs.readFile(envPath, 'utf8')
      .then(JSON.parse)
      .catch(() => null)
    if(restoredEnv) this.env = restoredEnv
    else if(this.env) await fs.writeFile(envPath, JSON.stringify(this.env))
    this.#onEnvSet = newEnv => fs.writeFile(envPath, JSON.stringify(newEnv))
    return {restoredCookies, restoredEnv}
  }

  //todo
  listeners = {
    'request': [],
    'response': [],
    'refreshToken': [],
    'accessToken': []
  }

  onrequest = null
  onresponse = null
  onrefreshtoken = null
  onaccesstoken = null
  #onEnvSet = null

  getTimeLeftTillRefreshTokenExpire(refreshToken, considerExpiredIfTimeLeftMc = 1000 * 60 * 60 * 24 * 7) {
    if(!refreshToken) {
      refreshToken = this.cookies.getRefreshToken()
      if(!refreshToken) return 0
    }
    return decodeJWT(refreshToken).exp * 1000 - Date.now() - considerExpiredIfTimeLeftMc
  }

  isRefreshTokenExpired(refreshToken, considerExpiredIfTimeLeftMc = 1000 * 60 * 60 * 24 * 7) {
    return this.getTimeLeftTillRefreshTokenExpire(refreshToken, considerExpiredIfTimeLeftMc) <= 0
  }

  async startCookiesRefreshInterval(subTime = 1000 * 60 * 60 * 12) {
    let mcTillUpdateRequired = this.cookies.getTimeLeftUntilExpiration(subTime)

    if(mcTillUpdateRequired <= 0) {
      await this.refreshCookies()
      mcTillUpdateRequired = subTime
    }

     setTimeout(() => this.startCookiesRefreshInterval(subTime), mcTillUpdateRequired)
  }

  static decodeJwt = decodeJWT
  static prompt = prompt.Promise

  static defaultActor = defaultActor
  static deviceCodeActor = deviceCodeActor
  static deviceCodePromptActor = deviceCodePromptActor
  static emailCodePromptActor = emailCodePromptActor
  static expectNoGuardActor = expectNoGuardActor
  static expectConfirmViaDeviceActor = expectConfirmViaDeviceActor

  static webBrowserEnv = webBrowser
  static mobileIOSEnv = mobileIOS
  static clientWindowsEnd = clientWindows
  //not decided still which is better
  static env = {webBrowser, mobileIOS, clientWindows}
}