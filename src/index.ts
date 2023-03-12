import CookieStore from "cookie-store";
import SteamProtoAuthentication from "./SteamProtoAuthentication";
import {
    EGuardType,
    IActorActions,
    obj, PollContext, PollingOptions,
    RequestOpts,
    SessionEnv,
    SessionSignatureData,
    SteamSessionTokens
} from "./types";
import Listenable from "listenable";
import {createHmac, randomBytes} from "crypto";

import {clientWindows, mobileIOS, webBrowser} from "./GenerateRequestEnvironment";
import {
    encryptPasswordWithPublicKey,
    formDataFromObject,
    getSuccessfulResponseJson,
} from "./utils";
import {BadProtobufResponse} from "./Errors";
import {
    CAuthenticationAllowedConfirmation,
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
} from "./protots/steammessages_auth.steamclient";
import {CookieData} from "cookie-store/dist/types";
import {ESessionPersistence} from "./protots/enums";

export default class SteamSession {
    constructor(
        public readonly env: SessionEnv = webBrowser(),
        public readonly cookies: CookieStore = new CookieStore(),
        private fetcher = fetch,
        public tokens: SteamSessionTokens = {refresh: null, access: null}
    ) {}

    request = (url: URL | string, opts: RequestOpts = {}): Promise<Response> => {
        if(typeof url === 'string') url = new URL(url)
        opts.headers = Object.assign({}, opts.headers, this.env.requestHeaders)
        let cookiesUsed = null
        if(opts.cookiesSet !== 'manual') {
            cookiesUsed = this.cookies.get(url)
            opts.headers.cookie = cookiesUsed.toString()
        }
        if(!opts.redirect) opts.redirect = 'manual'
        this.events.request.emit([url, opts, cookiesUsed])
        return this.fetcher(url, opts).then(resp => {
            const newCookies = opts.cookiesSave === 'manual' ? null
                : this.cookies.addFromFetchResponse(resp, url as URL) //why 😭
            this.events.response.emit([url as URL, opts, cookiesUsed, resp, newCookies])
            return resp
        })
    }

    async refreshCookies() {
        if(!this.tokens.refresh) throw new Error('refresh token required to refresh cookies')

        const sessionid = this.getSessionidCookieValue()
        const fd = formDataFromObject({
            nonce: this.tokens.refresh, sessionid,
            redir: 'https://steamcommunity.com/login/home/?goto='
        })

        const {steamID, transfer_info} = await this.request(
            'https://login.steampowered.com/jwt/finalizelogin',
            {method: 'POST', body: fd}
        ).then(getSuccessfulResponseJson)

        const accessCookie = await Promise.any(transfer_info.map(async el => {
            el.params.steamID = steamID
            const response = await this.request(el.url, {
                body: formDataFromObject(el.params),
                method: 'POST',
                cookiesSave: 'manual'
            })
            response.text().then() //draining a buffer
            const cookies = CookieStore.parseFromFetchResponse(response, {hostname: '.'}) //todo: multiple hostnames different cookies
            const accessCookie = cookies.find(c => c.name === 'steamLoginSecure')
            if(!accessCookie) throw new Error('no access cookie')
            return accessCookie
        }))
        return this.cookies.add(accessCookie).value
    }

    private authentication = new SteamProtoAuthentication(this.request)

    private getPasswordRSAPublicKey = this.authentication.getPasswordRSAPublicKey

    private beginAuthSessionViaCredentials = (accountName, encryptedPassword, encryptionTimestamp) =>
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
        }).then(getSuccessfulResponseJson).then(res => {
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
        }
        if(guards[EGuardType.EmailCode] || guards[EGuardType.MachineToken]) return {
            checkDeviceOrSendEmail: this.CheckDeviceOrSendEmail(context),
            submitEmailCode: this.UpdateSessionWithCode(context, EGuardType.EmailCode)
        }
        return {}
    }

    private pollUntilResults = async (context: PollContext, pollingOptions: PollingOptions) => {
        if(pollingOptions.delay > 0) await new Promise(r => setTimeout(r, pollingOptions.delay))

        while(--pollingOptions.tries > 0) {
            const results = await this.authentication.pollAuthSessionStatus({
                clientId: context.clientId,
                requestId: context.requestId,
                tokenToRevoke: '0'
            })
            //todo: declined by other party?
            if(results.refreshToken) return this.tokens = {
                refresh: results.refreshToken,
                access: results.accessToken
            }
            if(results.newClientId) context.clientId = results.newClientId
            await new Promise(resolve => setTimeout(resolve, pollingOptions.interval))
        }

        return null
    }

    public events = {
        request: new Listenable<[URL, RequestOpts, (CookieData[] | null)]>(),
        response: new Listenable<[URL, RequestOpts, (CookieData[] | null), Response, (CookieData[] | null)]>(),
        token: new Listenable<SteamSessionTokens>()
    }

    getJWTViaCredentials = async (accountName: string, password: string, actor?: (
        actions: ReturnType<SteamSession['createActions']>,
        guards: {[key in EGuardType]?: string | true},
        pollOptions: {delay: number, interval: number, tries: number},
        steamid: string, context: CAuthenticationBeginAuthSessionViaCredentialsResponse
    ) => Promise<false | any>) => {
        const key = await this.getPasswordRSAPublicKey({accountName})
        const encryptedPassword = encryptPasswordWithPublicKey(key, password)
        const context = await this.beginAuthSessionViaCredentials(accountName, encryptedPassword, key.timestamp)
        const guards = this.transformGuardsToObject(context.allowedConfirmations)
        const actions = this.createActions(guards, context)
        const pollOptions = {delay: 0, interval: context.interval * 1000, tries: 100}
        if(!actor && Object.keys(actions).length) throw new Error('actions are required but actor not set')
        else if(await actor(actions, guards, pollOptions, context.steamid, context) === false) return null
        return this.pollUntilResults(context, pollOptions)
    }

    private beginAuthSessionViaQr = () => //todo: check value for different environments
        this.authentication.beginAuthSessionViaQR({
            deviceFriendlyName: '',
            platformType: 0,
            deviceDetails: this.env.device,
            websiteId: 'Store'
        })

    getJWTViaQR = async (actor: (
            resp: Awaited<ReturnType<SteamSession['beginAuthSessionViaQr']>>,
            pollOptsions: {delay: number, interval: number, tries: number}
    ) => false | any) => {
        const resp = await this.beginAuthSessionViaQr()
        const pollOptions = {delay: 0, interval: resp.interval * 1000, tries: 100}
        if(await actor(resp, pollOptions) === false) return null
        return this.pollUntilResults(resp, pollOptions)
    }

    approveSession = async (
        {clientId, version = 1, steamid}: SessionSignatureData,
        sharedSecret: string,
        confirm: boolean = true,
        persistence: ESessionPersistence = ESessionPersistence.k_ESessionPersistence_Persistent
    ) => {
        if(!this.tokens.access) throw new Error('access token required to approve session')
        return this.authentication.updateAuthSessionWithMobileConfirmation({
            signature: SteamSession.createSessionSignature(sharedSecret, version, clientId, steamid),
            clientId, confirm, persistence, steamid, version
        }, this.tokens.access)
    }

    private static createSessionSignature = (sharedSecret: string, version, clientId, steamid) => {
        const signatureData = Buffer.alloc(2 + 8 + 8)
        signatureData.writeUInt16LE(version, 0)
        signatureData.writeBigUInt64LE(BigInt(clientId), 2)
        signatureData.writeBigUInt64LE(BigInt(steamid), 10)

        return createHmac('sha256', Buffer.from(sharedSecret, 'base64'))
            .update(signatureData)
            .digest()
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

    me = () => this.request('https://steamcommunity.com/my').then(res => {
        const location = res.headers.get('location')
        const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
        if(!profileUrl) return null
        return res.text().then(() => [profileUrl[0], profileUrl[3], profileUrl[2]])
    })

    getAccessCookieValue() { //todo: multiple hostnames different cookies
        return this.cookies.get({hostname: '.'})
            .find(c => c.name === 'steamLoginSecure')?.value || null
    }

    static env = {webBrowser, mobileIOS, clientWindows}

}
