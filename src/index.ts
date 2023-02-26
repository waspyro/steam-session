import CookieStore from "cookie-store";
import SteamProtoAuthentication from "./SteamProtoAuthentication";
import {EGuardType, IActorActions, obj, RequestOpts, SessionEnv} from "./types";
import {webBrowser} from "./GenerateRequestEnvironment";
import {encryptPasswordWithPublicKey, formDataFromObject, getSuccessfulJson} from "./utils";
import totp from 'steam-totp'
import {BadProtobufResponse} from "./Errors";
import {
    CAuthenticationAllowedConfirmation,
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
} from "./protots/steammessages_auth.steamclient";
import {randomBytes} from "crypto";

export default class SteamSession {
    env: SessionEnv
    cookies: CookieStore

    constructor(env: SessionEnv) {
        this.env = env
        this.cookies = new CookieStore()
    }

    request = (url: URL | string, opts: RequestOpts = {}): Promise<Response> => {
        if(typeof url === 'string') url = new URL(url)
        opts.headers = Object.assign({}, opts.headers, this.env.requestHeaders)
        if(opts.cookiesSet !== 'manual') opts.headers.cookie = this.cookies.get(url).toString()
        if(!opts.redirect) opts.redirect = 'manual'
        return fetch(url, opts).then(resp => {
            if(opts.cookiesSave !== 'manual')
                this.cookies.addFromFetchResponse(resp, url as URL) //why 😭
            return resp
        })
    }


    authentication = new SteamProtoAuthentication(this.request)

    getPasswordRSAPublicKey = this.authentication.getPasswordRSAPublicKey

    beginAuthSessionViaCredentials = (accountName, encryptedPassword, encryptionTimestamp) =>
        this.authentication.beginAuthSessionViaCredentials({
            accountName, encryptedPassword, encryptionTimestamp,
            websiteId: this.env.websiteId,
            platformType: this.env.device.platformType,
            deviceDetails: this.env.device,
            deviceFriendlyName: this.env.device.deviceFriendlyName,
            rememberLogin: true,
            guardData: "", language: 0, persistence: undefined,
        }).catch(e => {
            if(e instanceof BadProtobufResponse && e.eresult === 5) //todo steam enums?
                throw new Error('Password is wrong')
            else throw e
        })

    private UpdateSessionWithCode = (
        ctx: CAuthenticationBeginAuthSessionViaCredentialsResponse,
        codeType: EGuardType.EmailCode | EGuardType.DeviceCode
    ) => (code: string) => this.authentication.updateAuthSessionWithSteamGuardCode({
            steamid: ctx.steamid,
            clientId: ctx.clientId,
            codeType: Number(codeType), //why 😭
            code
        })

    private CheckDeviceOrSendEmail = (ctx: CAuthenticationBeginAuthSessionViaCredentialsResponse) => () =>
        this.request('https://login.steampowered.com/jwt/checkdevice/'+ctx.steamid, {
            method: 'POST',
            body: formDataFromObject({steamid: ctx.steamid, clientid: ctx.clientId})
        }).then(getSuccessfulJson).then(res => {
            return res.success && res.result !== 8
        })

    private transformGuardsToObject = (guards: CAuthenticationAllowedConfirmation[]):
        {[key in EGuardType]?: string | true} => {
        const guardsObject = {}
        for(const guard of guards)
            guardsObject[guard.confirmationType] =
                guard.associatedMessage || true
        return guardsObject
    }

    private createActions(
        guards: obj,
        context: CAuthenticationBeginAuthSessionViaCredentialsResponse
    ): IActorActions {
        if(guards[EGuardType.DeviceCode]) return {
            submitDeviceCode: this.UpdateSessionWithCode(context, EGuardType.DeviceCode),
            //todo: confirmViaMobileSession
        }
        if(guards[EGuardType.EmailCode] || guards[EGuardType.MachineToken]) return {
            checkDeviceOrSendEmail: this.CheckDeviceOrSendEmail(context),
            submitEmailCode: this.UpdateSessionWithCode(context, EGuardType.EmailCode)
        }
        return {}
    }

    private pollUntilResults = async (context: CAuthenticationBeginAuthSessionViaCredentialsResponse, pollOptions) => {
        if(pollOptions.delay > 0) await new Promise(r => setTimeout(r, pollOptions.delay))
        while(--pollOptions.tries > 0) {
            const results = await this.authentication.pollAuthSessionStatus({
                clientId: context.clientId,
                requestId: context.requestId,
                tokenToRevoke: '0'
            })
            //todo: declined by other party?
            if(results.refreshToken || results.accessToken) return {
                refreshToken: results.refreshToken,
                accessToken: results.accessToken
            }
            if(results.newClientId) context.clientId = results.newClientId
            await new Promise(resolve => setTimeout(resolve,  pollOptions.interval))
        }
        return null
    }

    getJWTViaCredentials = async (accountName, password, actor: (
        actions: ReturnType<SteamSession['createActions']>,
        guards: {[key in EGuardType]?: string | true},
        pollOptions: {delay: number, interval: number, tries: number},
        steamid: string
    ) => Promise<false | void>) => {
        const key = await this.getPasswordRSAPublicKey({accountName})
        const encryptedPassword = encryptPasswordWithPublicKey(key, password)
        const context = await this.beginAuthSessionViaCredentials(accountName, encryptedPassword, key.timestamp)
        const guards = this.transformGuardsToObject(context.allowedConfirmations)
        const actions = this.createActions(guards, context)
        const pollOptions = {delay: 0, interval: context.interval * 1000, tries: 100}
        if(await actor(actions, guards, pollOptions, context.steamid) === false) return null
        return this.pollUntilResults(context, pollOptions)
    }

    private createSessionidCookie = (domain = '.') => this.cookies.add({
        name: 'sessionid', value: randomBytes(12).toString('hex'),
        path: '/', domain, samesite: 'None'
    }).value

    getSessionidCookieValue(domain = '.', create = true) {
        const sessionid = this.cookies.get({hostname: domain}).find(c => c.name === 'sessionid')?.value
        if(!sessionid && create) return this.createSessionidCookie(domain)
        return sessionid
    }

    async refreshCookies(refreshToken) {
        const sessionid = this.getSessionidCookieValue()
        const fd = formDataFromObject({
            nonce: refreshToken, sessionid,
            redir: 'https://steamcommunity.com/login/home/?goto='
        })

        const {steamID, transfer_info} = await this.request(
            'https://login.steampowered.com/jwt/finalizelogin',
            {method: 'POST', body: fd}
        ).then(getSuccessfulJson)

        const accessCookie = await Promise.any(transfer_info.map(async el => {
            el.params.steamID = steamID
            const response = await this.request(el.url, {
                body: formDataFromObject(el.params),
                method: 'POST',
                cookiesSave: 'manual'
            })
            const body = await response.json()
            const cookies = CookieStore.parseFromFetchResponse(response, {hostname: '.'})
            const accessCookie = cookies.find(c => c.name === 'steamLoginSecure')
            if(!accessCookie) throw new Error('no access cookie')
            return accessCookie
        }))
        return this.cookies.add(accessCookie).value
    }

    me = () => this.request('https://steamcommunity.com/my').then(res => {
        const location = res.headers.get('location')
        const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
        if(!profileUrl) return null
        return res.text().then(() => [profileUrl[0], profileUrl[3], profileUrl[2]])
    })

}
