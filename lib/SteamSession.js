import CookieStore from 'cookie-store'
import fetch from "node-fetch";
import formDataFromObject from "./formDataFromObject.js";
import * as proto from './proto/handlers.js'
import {hex2b64, Key as RSAKey} from 'node-bignumber';
import {randomBytes} from "crypto";

export default class SteamSession {

  constructor() {
    this.cookies = new CookieStore()
  }

  headers = {}
  onrequest = null
  onresponse = null

  //todo manual redirect control
  //todo extra listeners, pullers (returnValue)?
  //todo temporary extra request cookies
  //todo ignore response cookies
  request(url, opts = {}) {
    if(url.constructor !== URL) url = new URL(url)
    if(opts.qs) url.search = new URLSearchParams(opts.qs)
    if(opts.fd) opts.body = formDataFromObject(opts.fd)
    opts.headers = Object.assign({}, opts.headers, this.headers)
    opts.cookies = this.cookies.get(url)
    this.onrequest && this.onrequest(url, opts)
    opts.headers.cookie = opts.cookies.toString()
    return fetch(url, opts).then(response => {
      response.cookies = this.cookies.setFromHeaders(response.headers.raw(), url)
      this.onresponse && this.onresponse(url, opts, response)
      return response
    })
  }

  protoRequest = (proto, ...data) => {
    const payload = proto.req(...data)
    const opts = {method: proto.method, headers: this.#communityHeaders}
    const requestBody = {input_protobuf_encoded: payload}
    if(proto.method === 'GET') opts.qs = requestBody
    else opts.fd = requestBody
    return this.request(proto.url, opts)
      .then(res => res.arrayBuffer())
      .then(arrayBuffer => proto.res(Buffer.from(arrayBuffer)))
  }

  generateSessionID() {
    return randomBytes(12).toString('hex')
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

  /**
   *
   * @param clientid
   * @param requestid
   */
  pollAuthSessionStatus = this.protoRequest.bind(this, proto.pollAuthSessionStatus)

  async getNewJWT(login, password, code) { //todo codeless // = totp.getAuthCode(creds[2])
    const {publickeyMod, timestamp, publickeyExp} = await this.getPasswordRSA(login)
    const encryptedPassword = this.encryptPasswordWithPublicKey(publickeyMod, publickeyExp, password)
    const {clientId, requestId, allowedConfirmations, steamid} = await
      this.beginAuthSessionViaCredentials(login, encryptedPassword, timestamp)
    if(!allowedConfirmations.find(e => e.confirmationType === 3)) throw new Error('no code confirmation')
    await this.submitMobileAuthCode(clientId, steamid, code)
    const {refreshToken, accessToken} = await this.pollAuthSessionStatus(clientId, requestId)
    if(!refreshToken || !accessToken) throw new Error('unable to get tokens') //todo: mb poll some more times
    return {refreshToken, accessToken, steamid}
  }

  async refreshCookies(refreshToken, sessionid, domains = ['store.steampowered.com', 'steamcommunity.com']) {
    const fd = {nonce: refreshToken, sessionid, redir: 'https://steamcommunity.com/login/home/?goto='}
    const opts = {fd, method: 'POST'}
    let {steamID, transfer_info} = await this.request('https://login.steampowered.com/jwt/finalizelogin', opts)
      .then(r => r.json())
    if(!steamID || !transfer_info) throw new Error('malformed response')
    transfer_info = transfer_info.filter(el => domains.includes((el.url = new URL(el.url)).hostname))
    if(transfer_info.length !== domains.length) throw new Error('cannot refresh cookies for some of required domains')
    return Promise.all(transfer_info.map(el => {
      el.params.steamID = steamID
      const opts = {fd: el.params, method: 'POST'}
      return this.request(el.url, opts)
        .then(response => {
          el.cookies = response.cookies
          return response.json()
        }).then(data => {
          el.success = data.result
          return el
        })
    }))
  }

}