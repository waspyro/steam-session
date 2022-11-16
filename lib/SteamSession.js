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
//todo: fix this mess
//todo: client and mobile logins support

export default class SteamSession {
  static generateEnv = {webBrowser, mobileIOS, clientWindows}

  cookies = new SteamSessionCookieStore() //todo temporary cookies
  proto = new ProtoRequests(this)
  env = null //should be private really
  set env(newEnv) {
    this.env = newEnv
    this.#onEnvSet && this.#onEnvSet(newEnv)
  }

  constructor(env) {
    if(env !== null) this.env = env || webBrowser()
  }

  //todo extra listeners, pullers (returnValue)?
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
  async pollUntilResults(clientId, requestId, interval, delay = 0, attempts = Infinity) {
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

  delayPollOptions = {delay: 5, tries: 100}
  instantPoll = {delay: 0, tries: 3}

  #actions = {
    1: ['noAction', Promise.resolve(this.instantPoll)],
    2: ['submitEmailAuthCode', ctx => code => this.proto.submitEmailAuthCode(ctx.clientId, ctx.steamid, code)
      .then(() => this.instantPoll)],
    3: ['submitDeviceCode', ctx => code => this.proto.submitMobileAuthCode(ctx.clientId, ctx.steamid, code)
      .then(() => this.instantPoll)],
    4: ['confirmOnDevice', Promise.resolve(this.delayPollOptions)],
    5: ['confirmWithEmail', Promise.resolve(this.delayPollOptions)],
    6: ['machineTokenLogon', Promise.resolve(this.instantPoll)]
  }

  async getNewJWT(login, password, actor = defaultActor) { //todo codeless // = totp.getAuthCode(creds[2])
    const {publickeyMod, timestamp, publickeyExp} = await this.proto.getPasswordRSA(login)
    const encryptedPassword = encryptPasswordWithPublicKey(publickeyMod, publickeyExp, password)
    const ctx = await this.proto.beginAuthSessionViaCredentials({
      accountName: login, encryptedPassword, encryptionTimestamp: timestamp
    }) //{clientId, requestId, allowedConfirmations, steamid, interval, weak_token}

    const actions = {}
    const contexts = {}
    for(const {confirmationType, associatedMessage = null} of ctx.allowedConfirmations) {
      const confirmationName = this.#actions[confirmationType][0]
      if(!confirmationName) throw new Error('unknown confirmation type')
      if(typeof this.#actions[confirmationType][1] === 'function') {
        actions[confirmationName] = this.#actions[confirmationType][1](ctx)
      } else {
        actions[confirmationName] = this.#actions[confirmationType][1]
      }
      contexts[confirmationName] = associatedMessage
    }

    let actionRequired = true
    const pollOptions = Object.assign({interval: ctx.interval * 1000}, this.instantPoll)

    if(actions.noAction) actionRequired = false
    else if(actions.submitEmailAuthCode || actions.machineTokenLogon)
      actionRequired = !await this.checkDevice(ctx.clientId, ctx.steamid)
        .then(res => res.success && res.result !== 8)
    if(actionRequired) await Promise.resolve(actor(actions)).then(suggestedPollOptions => {
      if(typeof suggestedPollOptions !== "object") return
      Object.assign(pollOptions, suggestedPollOptions)
    })

    return this.pollUntilResults(ctx.clientId, ctx.requestId, pollOptions.interval, pollOptions.delay, pollOptions.tries)
  }
  //todo: sometime poll returns newClientId and newChallengeUrl. handle it somehow?

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

  me() {
    return this.request('https://steamcommunity.com/my').then(res => {
      const location = res.headers.get('location')
      const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
      if(!profileUrl) return null
      return [profileUrl[0], profileUrl[3], profileUrl[2]]
    })
  }

  isLoggedIn() {
    return this.me().then(location => !!location)
  }

  async useSessionSaveLocation(...path) {
    path = Path.join(path)
    const envPath = Path.join(path, 'env.json')
    const restoredCookies = await this.cookies.useCookiesSaveLocation(...path)
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

  startCookiesRefreshInterval(subTime = 1000 * 60 * 60 * 12) {
    let mcTillUpdateRequired = subTime
    this.cookies.forEach(cookie => {
      if(cookie.name === 'steamLoginSecure') {
        const mcLeftTillExpiration = decodeJWT(cookie.value).exp * 1000 - Date.now() - subTime
        if(mcLeftTillExpiration < mcTillUpdateRequired) mcTillUpdateRequired = mcLeftTillExpiration
      }
    })
    if(mcTillUpdateRequired <= 0)
      this.refreshCookies().then(() => setTimeout(() => this.startCookiesRefreshInterval(subTime), subTime))
    else setTimeout(() => this.startCookiesRefreshInterval(subTime), mcTillUpdateRequired)
  }

  static decodeJwt = decodeJWT
  static prompt = prompt.Promise
}

const submitCodeUntilRight = (message, submit) => {
  return function tryToSubmitCode() {
    return prompt.Promise(message)
      .then(submit)
      .catch(({error}) => {
        if(error.code !== 88) throw new Error('unknown error code:' + error.code)
        return tryToSubmitCode()
      })
  }()
}

const logMessageAndAwaitConfirmation = (message, action) => {
  console.log(message)
  return action
}

const defaultActor = (actions, ctx) => {
  // if(actions.noAction)
  //   return actions.noAction()
  if(actions.submitEmailCode) //todo email resend handler
    return submitCodeUntilRight(`email code from ${ctx.submitEmailCode}:` , actions.submitEmailCode)
  if(actions.submitDeviceCode)
    return submitCodeUntilRight('mobile code: ', actions.submitDeviceCode)
  if(actions.confirmOnDevice)
    return logMessageAndAwaitConfirmation('awaiting device confirmation', actions.confirmOnDevice)
  if(actions.confirmWithEmail)
    return logMessageAndAwaitConfirmation('awaiting email confirmation', actions.confirmWithEmail)
}