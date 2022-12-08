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
import os from 'os'

export default class SteamSession {
  cookies = new SteamSessionCookieStore() //todo temporary cookies
  proto = new ProtoRequests(this)
  env = null
  refreshToken = null
  accessToken = null

  setEnv(newEnv) {
    this.env = newEnv;
    this.#onEnvSet && this.#onEnvSet(newEnv)
    return newEnv
  }

  setRefreshToken(newToken) {
    this.refreshToken = newToken;
    this.#onRefreshTokenSet && this.#onRefreshTokenSet(newToken)
    return newToken
  }

  //todo ignore response cookies
  request(url, opts = {}) {
    if(url.constructor !== URL) url = new URL(url)
    if(opts.qs) url.search = new URLSearchParams(opts.qs)
    else if(opts.form) opts.body = new URLSearchParams(opts.form)
    else if(opts.fd) opts.body = formDataFromObject(opts.fd)
    opts.headers = Object.assign({}, opts.headers, this.env.headers)
    opts.cookies = this.cookies.get(url).assign(this.env.cookies, opts.cookies)
    this.onrequest && this.onrequest(url, opts)
    opts.headers.cookie = opts.cookies.toString()
    opts.redirect = 'manual'
    const processRequest = (url, opts) => fetch(url, opts).then(async response => {
      response.rawHeaders = response.headers.raw()
      response.cookies = this.cookies.setFromHeaders(response.rawHeaders, url)
      this.onresponse && this.onresponse(url, opts, response)
      if(opts.followRedirects !== undefined && (response.status === 301 || response.status === 302)) {
        let newLocation = response.rawHeaders.location?.[0]
        if(!newLocation) throw new Error('redirect without location header')
        newLocation = new URL(newLocation)
        opts.headers.cookie = this.cookies.get(newLocation)
        if(opts.followRedirects--) return processRequest(newLocation, opts)
        else throw new Error('no more redirects')
      }
      return response
    })
    return processRequest(url, opts)
  }

  //todo abort controller
  async pollUntilResults({clientId, requestId, interval, delay = 0, attempts = 100}) {
    if(delay) await new Promise(resolve => setTimeout(resolve, delay))
    while (attempts--) {
      const results = await this.proto.pollAuthSessionStatus(clientId, requestId)
      if(results.refreshToken || results.accessToken) {
        this.setRefreshToken(results.refreshToken)
        return results
      }
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

  async refreshCookies(refreshToken, domains) { //todo: domains "all", "any"
    domains = domains || ['store.steampowered.com', 'steamcommunity.com']
    refreshToken = refreshToken || this.refreshToken
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
    const refreshTokenPath = Path.join(path, 'refresh.jwt')
    const envPath = Path.join(path, 'env.json')
    const restored = {}
    restored.cookies = await this.cookies.useCookiesSaveLocation(path)
    if(this.env) await fs.writeFile(envPath, this.env)
    else await fs.readFile(envPath, 'utf8')
      .then(env => restored.env = this.setEnv(JSON.parse(env)))
      .catch(e => null)
    if(this.refreshToken) await fs.writeFile(refreshTokenPath, this.refreshToken)
    else await fs.readFile(refreshTokenPath, 'utf8')
      .then(refreshToken => restored.refreshToken = this.setRefreshToken(refreshToken))
      .catch(e => null)

    this.#onEnvSet = newEnv => fs.writeFile(envPath, JSON.stringify(newEnv))
    this.#onRefreshTokenSet = newRefreshToken => fs.writeFile(refreshTokenPath, newRefreshToken)

    return restored
  }

  async useStorageDriver(driver) {
    const restored = {}
    const cookiesCollection = driver.col('cookies')
    if(cookiesCollection.init) await cookiesCollection.init()
    restored.cookies = await this.cookies.useStorageDriver(cookiesCollection)
    if(this.env) await driver.set('env', this.env)
    else await driver.get('env')
      .then((env) => restored.env = this.setEnv(env))
    if(this.refreshToken) await driver.set('refreshToken', this.refreshToken)
    else await driver.get('refreshToken')
      .then((refreshToken) => restored.refreshToken = this.setRefreshToken(refreshToken))

    this.#onEnvSet = env => driver.set({env})
    this.#onRefreshTokenSet = refreshToken => driver.set({refreshToken})
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
  #onRefreshTokenSet = null

  getTimeLeftTillRefreshTokenExpire(refreshToken, subTime = 1000 * 60 * 60 * 24 * 7) {
    if(!refreshToken) {
      refreshToken = this.refreshToken
      if(!refreshToken) return 0
    }
    return decodeJWT(refreshToken).exp * 1000 - Date.now() - subTime
  }

  isRefreshTokenExpired(refreshToken, subTime = 1000 * 60 * 60 * 24 * 7) {
    return this.getTimeLeftTillRefreshTokenExpire(refreshToken, subTime) <= 0
  }

  //todo: some initial function to validate subTime value and return promise if update is required
  //todo: only then this function should iterate itself
  startRefreshInterval(subTime = 1000 * 60 * 60 * 12) { //half a day
    const mcTillUpdateRequired = this.cookies.getTimeLeftUntilExpiration(subTime)
    if(mcTillUpdateRequired <= 0)
      this.refreshCookies().then(() =>
         setTimeout(() => this.startRefreshInterval(subTime), subTime))
    else setTimeout(() => this.startRefreshInterval(subTime), mcTillUpdateRequired)
  }

  async init(login, password, actor, type = 'web', storage, debug = {}) {
    await this.useStorageDriver(storage)
    if(debug.requests) this.onrequest = url => console.log(type, '> ', url.toString())
    if(debug.cookies) {
      this.cookies.on('set', cookie => console.log(type, '+cookie', cookie.domain, cookie.name))
      this.cookies.on('del', cookie => console.log(type, '-cookie', cookie.domain, cookie.name))
    }
    await this.useStorageDriver(storage)
    if(!this.env) switch (type) {
      case 'web': this.setEnv(webBrowser()); break
      case 'mobile': this.setEnv(mobileIOS()); break
      case 'client': this.setEnv(clientWindows()); break
    }
    if(this.isRefreshTokenExpired()) await this.getJWTViaCredentials(login, password, actor)
    if(this.cookies.isExpired()) await this.refreshCookies()
    this.startRefreshInterval()
    return this
  }

  static decodeJwt = decodeJWT
  static prompt = prompt.Promise

  static defaultActor = defaultActor
  static deviceCodeActor = deviceCodeActor
  static deviceCodePromptActor = deviceCodePromptActor
  static emailCodePromptActor = emailCodePromptActor
  static expectNoGuardActor = expectNoGuardActor
  static expectConfirmViaDeviceActor = expectConfirmViaDeviceActor
  //not decided still which is better
  static actors = {
    default: defaultActor,
    deviceCode: deviceCodeActor,
    deviceCodePrompt: deviceCodePromptActor,
    emailCodePrompt: emailCodePromptActor,
    expectNoGuard: expectNoGuardActor,
    expectConfirmViaDevice: expectConfirmViaDeviceActor
  }
  static webBrowserEnv = webBrowser
  static mobileIOSEnv = mobileIOS
  static clientWindowsEnd = clientWindows
  static env = {webBrowser, mobileIOS, clientWindows}
}