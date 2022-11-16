import CookieStore from "cookie-store";
import {randomBytes} from "crypto";
import decodeJWT from "./utils/decodeJWT.js";

export default class SteamSessionCookieStore extends CookieStore {

  createSessionIDCookie() {
    return this.set({
      name: 'sessionid',
      value: randomBytes(12).toString('hex'),
      path: '/',
      secure: true,
      samesite: 'None',
      domain: '.'
    })
  }

  getSessionIDCookie(domain = '.', create = true) {
    const sessionidCookie = this.get({hostname: domain}).get('sessionid')
    if(create && !sessionidCookie) return this.createSessionIDCookie()
    return sessionidCookie
  }

  getRefreshTokenCookie() {
    return this.cookies.knownDomainStores?.['login.steampowered.com']?.get('steamRefresh_steam')
  }

  getRefreshToken() {
    const refreshCookie = this.getRefreshTokenCookie()
    return refreshCookie.value.split('%7C%7C')[1] || null
  }

  getMostExpiredCookeMc() {
    let mostExpiredCookieMc = Infinity
    this.forEach(cookie => {
      if(cookie.name === 'steamLoginSecure') {
        const exp = decodeJWT(cookie.value).exp * 1000
        if(exp < mostExpiredCookieMc) mostExpiredCookieMc = exp
      }
    })
    return mostExpiredCookieMc === Infinity ? null : mostExpiredCookieMc
  }

  getTimeLeftUntilExpiration(subTime = 1000 * 60 * 60 * 12) {
    return this.getMostExpiredCookeMc() - Date.now() - subTime
  }

  isExpired(subTime) {
    return this.getTimeLeftUntilExpiration(subTime) <= 0
  }

}