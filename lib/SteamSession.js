import {CookieStore} from 'cookie-store'
import fetch from "node-fetch";
import formDataFromObject from "./formDataFromObject.js";
import * as proto from './proto/handlers.js'
import {hex2b64, Key as RSAKey} from 'node-bignumber';
import {randomBytes} from "crypto";
import prompt from "./utils/prompt.js";
import Path from "path";
import decodeJWT from "./utils/decodeJWT.js";

//todo: fix this mess
//todo: client and mobile logins support
export default class SteamSession {
  cookies = new CookieStore()

  headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
  }

  //todo manual redirect control
  //todo extra listeners, pullers (returnValue)?
  //todo temporary extra request cookies
  //todo ignore response cookies
  request(url, opts = {}) {
    if(url.constructor !== URL) url = new URL(url)
    if(opts.qs) url.search = new URLSearchParams(opts.qs)
    else if(opts.form) opts.body = new URLSearchParams(opts.form)
    else if(opts.fd) opts.body = formDataFromObject(opts.fd)
    opts.headers = Object.assign({}, opts.headers, this.headers)
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

  protoRequest = async (proto, ...data) => {
    const payload = proto.req(...data)
    const opts = {method: proto.method, headers: this.#communityHeaders}
    const requestBody = {input_protobuf_encoded: payload}
    if(proto.method === 'GET') opts.qs = requestBody
    else opts.fd = requestBody
    const response = await this.request(proto.url, opts)
    const responseData = await response.arrayBuffer().then(arrayBuffer => proto.res(Buffer.from(arrayBuffer)))
    const responseError = {code: response.headers.get('x-eresult')}
    if(responseError.code === undefined || responseError.code === '1') return responseData
    responseError.code = Number(responseError.code)
    throw {error: responseError, data: responseData}
  }

  createSessionIDCookie() {
    return this.cookies.set({
      name: 'sessionid',
      value: randomBytes(12).toString('hex'),
      path: '/',
      secure: true,
      samesite: 'None',
      domain: '.'
    })
  }

  getSessionIDCookie(domain = '.', create = true) {
    const sessionidCookie = this.cookies.get(domain).get('sessionid')
    if(create && !sessionidCookie) return this.createSessionIDCookie()
    return sessionidCookie
  }

  #communityHeaders = {
    'Origin': 'https://steamcommunity.com',
    'Referer': 'https://steamcommunity.com/'
  }

  /**
   *
   * @param login
   * @returns {Promise<*>}
   */
  getPasswordRSA = this.protoRequest.bind(this, proto.getPasswordRsaPubKey)

  /**
   *
   * @param publickeyMod
   * @param publickeyExp
   * @param password
   * @returns {*}
   */
  encryptPasswordWithPublicKey(publickeyMod, publickeyExp, password) {
    const key = new RSAKey()
    key.setPublic(publickeyMod, publickeyExp)
    return hex2b64(key.encrypt(password))
  }

  /**
   *
   * @param login
   * @param encryptedPassword
   * @param encryptedPasswordTimestamp
   * @returns {Promise<*>}
   */
  beginAuthSessionViaCredentials = this.protoRequest.bind(this, proto.beginAuthSessionViaCredentials)

  /**
   *
   * @param clientid
   * @param steamid
   * @param code
   * @returns {Promise<*>}
   */
  submitMobileAuthCode = (clientid, steamid, code) =>
    this.protoRequest(proto.updateAuthSessionWithSteamGuardCode, clientid, steamid, code, 3)


  submitEmailAuthCode = (clientid, steamid, code) =>
    this.protoRequest(proto.updateAuthSessionWithSteamGuardCode, clientid, steamid, code, 2)
  /**
   *
   * @param clientid
   * @param requestid
   */
  pollAuthSessionStatus = this.protoRequest.bind(this, proto.pollAuthSessionStatus)

  //todo abort controller
  async pollUntilResults(clientId, requestId, interval, delay = 0, attempts = Infinity) {
    if(delay) await new Promise(resolve => setTimeout(resolve, delay))
    while (attempts--) {
      const results = await this.pollAuthSessionStatus(clientId, requestId)
      if(results.refreshToken) return results
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
    2: ['sendEmailWithGuardCode', ctx => code => this.submitEmailAuthCode(ctx.clientId, ctx.steamid, code)
      .then(() => this.instantPoll)],
    3: ['submitDeviceCode', ctx => code => this.submitMobileAuthCode(ctx.clientId, ctx.steamid, code)
      .then(() => this.instantPoll)],
    4: ['confirmOnDevice', Promise.resolve(this.delayPollOptions)],
    5: ['confirmWithEmail', Promise.resolve(this.delayPollOptions)],
    6: ['machineTokenLogon', Promise.resolve(this.instantPoll)]
  }

  async getNewJWT(login, password, actor = defaultActor) { //todo codeless // = totp.getAuthCode(creds[2])
    const {publickeyMod, timestamp, publickeyExp} = await this.getPasswordRSA(login)
    const encryptedPassword = this.encryptPasswordWithPublicKey(publickeyMod, publickeyExp, password)
    const ctx = await this.beginAuthSessionViaCredentials(login, encryptedPassword, timestamp) //{clientId, requestId, allowedConfirmations, steamid, interval, weak_token}
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
    else if(actions.sendEmailWithGuardCode || actions.machineTokenLogon)
      await this.checkDevice(ctx.clientId, ctx.steamid)
        .then(res => actionRequired = res.success && res.result !== 8)

    if(actionRequired) await Promise.resolve(actor(actions)).then(suggestedPollOptions => {
      if(typeof suggestedPollOptions !== "object") return
      Object.assign(pollOptions, suggestedPollOptions)
    })

    return this.pollUntilResults(ctx.clientId, ctx.requestId, pollOptions.interval, pollOptions.delay, pollOptions.tries)
  }
  //todo: sometime poll returns newClientId and newChallengeUrl. handle it somehow?

  async refreshCookies(refreshToken, domains) {
    domains = domains || ['store.steampowered.com', 'steamcommunity.com']
    refreshToken = refreshToken || this.getRefreshTokenFromCookies()
    if(!refreshToken) throw new Error('refresh token is required to update cookies')

    const sessionid = this.getSessionIDCookie().value
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

  async useSessionSaveLocation(...path) { //todo
    //should store user-agent this cookies associated with
    // path = Path.join(...path)
    // const cookiesStorePath = Path.join(path, 'cookies')
    // const sessionStorePath = Path.join(path, 'session')
    await this.cookies.useCookiesSaveLocation(...path)
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
  #onHeadersSet = null

  getRefreshTokenFromCookies() {
    return this.cookies.knownDomainStores?.['login.steampowered.com']?.get('steamRefresh_steam')?.value.split('%7C%7C')[1]
  }

  getTimeLeftTillRefreshTokenExpire(refreshToken, considerExpiredIfTimeLeftMc = 1000 * 60 * 60 * 24 * 7) {
    if(!refreshToken) {
      refreshToken = this.getRefreshTokenFromCookies()
      if(!refreshToken) return 0
    }
    return decodeJWT(refreshToken).exp * 1000 - Date.now() - considerExpiredIfTimeLeftMc
  }

  isRefreshTokenExpired(refreshToken, considerExpiredIfTimeLeftMc = 1000 * 60 * 60 * 24 * 7) {
    return this.getTimeLeftTillRefreshTokenExpire(refreshToken, considerExpiredIfTimeLeftMc) <= 0
  }

  getCookiesExpTimeLeft(subTime = 1000 * 60 * 60 * 12) {
    let mcTillUpdateRequired = 0
    this.cookies.forEach(cookie => {
      if(cookie.name === 'steamLoginSecure') {
        const mcLeftTillExpiration = decodeJWT(cookie.value).exp * 1000 - Date.now() - subTime
        if(mcLeftTillExpiration > mcTillUpdateRequired) mcTillUpdateRequired = mcLeftTillExpiration
      }
    })
    return mcTillUpdateRequired
  }

  isCookiesExpired(subTime) {
    return this.getCookiesExpTimeLeft(subTime) <= 0
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