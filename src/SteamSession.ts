import CookieStore from "cookie-store";
import HttpAuthConversation from "./HttpAuthConversation";
import {
    EGuardType,
    IActorActions,
    obj,
    PollContext,
    PollingOptions,
    RequestOpts,
    SessionEnv,
    SessionSignatureData,
    SteamSessionTokens, SteamSessionTokensFullName, TokenRefresher
} from "./extra/types";
import Listenable from "listenable";
import {PersistormInstance} from "persistorm";
import totp from 'steam-totp'

import {ClientMacOS, ClientWindows, MobileIOS, WebBrowser} from "./RequestEnvironments";
import {
    createSessionidCookie, createSteamSessionSignature,
    decodeJWT,
    drainFetchResponse,
    encryptPasswordWithPublicKey,
    formDataFromObject, getJWTExpMcLeft, getSuccessfulJsonFromResponse,
    isExpired, transformGuardsArrayToObjectWithContext,
} from "./utils";
import {BadProtobufResponse, MalformedResponse} from "./Errors";
import {CAuthenticationBeginAuthSessionViaCredentialsResponse} from "./protots/steammessages_auth.steamclient";
import {CookieData} from "cookie-store/dist/types";
import {ESessionPersistence} from "./protots/enums";
import WebSocketAuthConversation from "./WebSocketAuthConversation";
import SteamSocket from "./SteamSocket";

export default class SteamSession {
    constructor(
        public env: SessionEnv = WebBrowser(),
        public readonly cookies: CookieStore = new CookieStore(),
        tokens?: SteamSessionTokensFullName
    ) {
        this.authentication = env.websiteId === 'Client'
            ? new WebSocketAuthConversation(this)
            : new HttpAuthConversation(this)

        if(env.websiteId !== 'Mobile') this.approveSession = () => {
            throw new Error('"approveSession" method should only be used in Mobile environment') //is it?
        }

        if(tokens) this.updateTokens(tokens)
        const cookie = this.getAccessCookieValue()
        if(cookie) this.expiration.cookie = decodeJWT(cookie).exp * 1000
        this.sessionid = this.getSessionidCookieValue()
    }

    tokens: SteamSessionTokens = {
        refresh: null,
        access: null,
    }

    expiration = {
        refresh: 0,
        access: 0,
        cookie: 0
    }

    sessionid: string
    steamid: string = null

    ws = new SteamSocket(this)

    request = (url: URL | string, opts: RequestOpts = {}): Promise<Response> => {
        if(typeof url === 'string') url = new URL(url)
        opts.headers = Object.assign({}, opts.headers, this.env.httpHeaders)
        let cookiesUsed = null
        if(opts.cookiesSet !== 'manual') {
            cookiesUsed = this.cookies.get(url)
            opts.headers.cookie = cookiesUsed.toString()
        }
        if(!opts.redirect) opts.redirect = 'manual'
        if(opts.followRedirects === undefined) opts.followRedirects = 2
        this.events.request.emit([url, opts, cookiesUsed])
        return fetch(url, opts).then(resp => {
            const newCookies = opts.cookiesSave === 'manual' ? null
                : this.cookies.addFromFetchResponse(resp, url as URL) //why 😭
            this.events.response.emit([url as URL, opts, cookiesUsed, resp, newCookies])
            if(resp.redirected && opts.followRedirects--) return this.request(resp.url, opts)
            return resp
        })
    }

    authorizedRequest = (url: URL | string, opts: RequestOpts = {}): Promise<Response> => {
        return isExpired(this.expiration.cookie)
            ? this.refreshCookies().then(() => this.request(url, opts))
            : this.request(url, opts)
    }

    //we can await this.tokenRefresher(this) from here but i dont want to use async function for it
    getRefreshTokenIfUpdated = (): null | string => isExpired(this.expiration.refresh) ? null : this.tokens.refresh
    getAccessTokenIfUpdated  = (): null | string => isExpired(this.expiration.access)  ? null : this.tokens.access

    async refreshCookies() {
        const fd = formDataFromObject({
            nonce: this.getRefreshTokenIfUpdated() || await this.updateRefreshToken(),
            sessionid: this.sessionid,
            redir: 'https://steamcommunity.com/login/home/?goto='
        })

        const json = await this.request(
            'https://login.steampowered.com/jwt/finalizelogin',
            {method: 'POST', body: fd, headers: this.env.authProtoHeaders}
        ).then(getSuccessfulJsonFromResponse)

        if(!json.transfer_info) throw new MalformedResponse(json, {transfer_info: Array})

        return Promise.any(json.transfer_info.map(async el => {
            el.params.steamID = json.steamID || this.steamid
            const response = await this.request(el.url, {
                body: formDataFromObject(el.params),
                method: 'POST', cookiesSave: 'manual'
            }).then(drainFetchResponse)
            const cookies = CookieStore.parseFromFetchResponse(response, {hostname: '.'}) //todo: multiple hostnames different cookies
            const accessCookie = cookies.find(c => c.name === 'steamLoginSecure')
            if(!accessCookie) throw new Error('Access cookie missing')
            return accessCookie
        })).then(cookie => {
            const token = this.cookies.add(cookie).value
            this.expiration.cookie = decodeJWT(token).exp * 1000
            return token
        })
    }

    updateEnv(env: SessionEnv = this.env) {
        this.env = env
        this.events.env.emit(this.env)
    }

    private readonly authentication: HttpAuthConversation | WebSocketAuthConversation

    private beginAuthSessionViaCredentials = (accountName, encryptedPassword, encryptionTimestamp) => {
        return this.authentication.beginAuthSessionViaCredentials({
            accountName, encryptedPassword, encryptionTimestamp,
            websiteId: this.env.websiteId,
            platformType: this.env.device.platformType,
            deviceDetails: this.env.device,
            deviceFriendlyName: this.env.device.deviceFriendlyName,
            rememberLogin: true,
            language: 0,
            persistence: ESessionPersistence.k_ESessionPersistence_Persistent,
            guardData: "", //???
            qosLevel: 0 //???
        }).catch(e => {
            if(e instanceof BadProtobufResponse && e.eresult === 5) //todo steam enums?
                throw new Error('Password is wrong')
            else throw e
        })
    }

    private UpdateSessionWithCodeAction = (
        ctx: CAuthenticationBeginAuthSessionViaCredentialsResponse,
        codeType: EGuardType.EmailCode | EGuardType.DeviceCode
    ) => (code: string) => this.authentication.updateAuthSessionWithSteamGuardCode({
        steamid: ctx.steamid,
        clientId: ctx.clientId,
        codeType: Number(codeType), //why 😭
        code
    })

    private CheckDeviceOrSendEmailAction = (ctx: CAuthenticationBeginAuthSessionViaCredentialsResponse) => () =>
        this.request('https://login.steampowered.com/jwt/checkdevice/'+ctx.steamid, {
            method: 'POST',
            body: formDataFromObject({steamid: ctx.steamid, clientid: ctx.clientId})
        }).then(getSuccessfulJsonFromResponse).then(res => {
            return res.result !== 8
        })

    private createActions(
        guards: obj,
        context: CAuthenticationBeginAuthSessionViaCredentialsResponse
    ): IActorActions {
        if(guards[EGuardType.DeviceCode]) return {
            submitDeviceCode: this.UpdateSessionWithCodeAction(context, EGuardType.DeviceCode),
        }
        if(guards[EGuardType.EmailCode] || guards[EGuardType.MachineToken]) return {
            checkDeviceOrSendEmail: this.CheckDeviceOrSendEmailAction(context),
            submitEmailCode: this.UpdateSessionWithCodeAction(context, EGuardType.EmailCode)
        }
        return {}
    }

    updateTokens = ({refreshToken, accessToken}: SteamSessionTokensFullName) => {
        const updated: SteamSessionTokens = {}
        if(refreshToken !== undefined) {
            updated.refresh = this.tokens.refresh = refreshToken
            if(refreshToken !== null) {
                const decoded = decodeJWT(refreshToken)
                this.expiration.refresh = decoded.exp * 1000
                if(!this.steamid) this.steamid = decoded.sub
            } else {
                this.expiration.refresh = 0
            }
        }
        if(accessToken !== undefined) {
            updated.access = this.tokens.access = accessToken
            if(accessToken !== null) {
                this.expiration.access = decodeJWT(refreshToken).exp * 1000
            } else {
                this.expiration.access = 0
            }
        }
        this.events.token.emit(updated)
        return this.tokens
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
            if(results.refreshToken) return this.updateTokens(results)
            if(results.newClientId) context.clientId = results.newClientId
            await new Promise(resolve => setTimeout(resolve, pollingOptions.interval))
        }

        return null
    }

    readonly events = {
        request: new Listenable<[URL, RequestOpts, (CookieData[] | null)]>(),
        response: new Listenable<[URL, RequestOpts, (CookieData[] | null), Response, (CookieData[] | null)]>(),
        token: new Listenable<SteamSessionTokens>(),
        env: new Listenable<SessionEnv>(),
    }

    getJWTViaCredentials = async (accountName: string, password: string, actor?: (
        actions: ReturnType<SteamSession['createActions']>,
        guards: {[key in EGuardType]?: string | true},
        pollOptions: {delay: number, interval: number, tries: number},
        steamid: string, context: CAuthenticationBeginAuthSessionViaCredentialsResponse
    ) => Promise<false | any>) => {
        const key = await this.authentication.getPasswordRSAPublicKey({accountName})
        const encryptedPassword = encryptPasswordWithPublicKey(key, password)
        const context = await this.beginAuthSessionViaCredentials(accountName, encryptedPassword, key.timestamp)
        const guards = transformGuardsArrayToObjectWithContext(context.allowedConfirmations)
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
    ) => null | any) => {
        const resp = await this.beginAuthSessionViaQr()
        const pollOptions = {delay: 0, interval: resp.interval * 1000, tries: 100}
        if(await actor(resp, pollOptions) === null) return null
        return this.pollUntilResults(resp, pollOptions)
    }

    approveSession = async (
        {clientId, version = 1, steamid}: SessionSignatureData,
        sharedSecret: string,
        confirm: boolean = true,
        persistence: ESessionPersistence = ESessionPersistence.k_ESessionPersistence_Persistent
    ) => {
        const accessToken = this.getAccessTokenIfUpdated() || await this.updateAccessToken()
        if(!steamid) steamid = this.steamid
        return (this.authentication as HttpAuthConversation).updateAuthSessionWithMobileConfirmation({
            signature: createSteamSessionSignature(sharedSecret, version, clientId, steamid),
            clientId, confirm, persistence, steamid, version
        }, accessToken)
    }

    updateAccessToken = async (force = false): Promise<string> => {
        const refreshToken = this.getRefreshTokenIfUpdated()
        if(!refreshToken) {
            await this.updateRefreshToken() //initial refresher should update both tokens
            const accessToken = this.getAccessTokenIfUpdated() //but we'll check anyways
            if(!force && accessToken) return this.tokens.access
        }
        return this.authentication.generateAccessTokenForApp({
            refreshToken, steamid: this.steamid
        }).then(value => this.updateTokens(value).access)
    }

    getSessionidCookieValue(domain = '.', create = true) {
        const sessionid = this.cookies.get({hostname: domain}).find(c => c.name === 'sessionid')?.value
        if(create && !sessionid) return this.cookies.add(createSessionidCookie(domain)).value
        return sessionid
    }

    me = async (): Promise<[string, string, "profiles" | "id"]> => {
        const res = await this.authorizedRequest('https://steamcommunity.com/my').then(drainFetchResponse)
        const location = res.headers.get('location')
        const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
        if(!profileUrl) return null
        return [profileUrl[0], profileUrl[3], profileUrl[2] as "profiles" | "id"]
    }

    getAccessCookieValue() { //todo: multiple hostnames different cookies
        return this.cookies.get({hostname: '.'})
            .find(c => c.name === 'steamLoginSecure')?.value || null
    }

    #refreshCookiesIntervalTimerRef = null
    startCookiesRefreshInterval = (timeOffsetMc = 1000 * 60 * 60): Promise<SteamSession> => {
        this.#refreshCookiesIntervalTimerRef = true
        const checkAndRefresh = async () => {
            const accessCookieTimeLeft = getJWTExpMcLeft(this.getAccessCookieValue())
            if(accessCookieTimeLeft < timeOffsetMc)
                return this.refreshCookies().then(checkAndRefresh)
            if(this.#refreshCookiesIntervalTimerRef !== null)
                this.#refreshCookiesIntervalTimerRef = setTimeout(checkAndRefresh, accessCookieTimeLeft)
        }
        return checkAndRefresh().then(() => this)
    }

    stopCookiesRefreshInterval = () => {
        if(!this.#refreshCookiesIntervalTimerRef === null) return false
        if(this.#refreshCookiesIntervalTimerRef) clearTimeout(this.#refreshCookiesIntervalTimerRef)
        this.#refreshCookiesIntervalTimerRef = null
        return true
    }

    updateRefreshToken() {
        return this.tokenRefresher(this).then(() => this.tokens.refresh)
    }

    private tokenRefresher: TokenRefresher = SteamSession.refresherNotSet

    setTokenRefresher = (refresher: TokenRefresher) => {
        this.tokenRefresher = refresher
        return this
    }

    unsetTokenRefresher = () => {
        this.tokenRefresher = SteamSession.refresherNotSet
        return this
    }

    static GenerateAndSubmitDeviceCodeActor = (sharedSecret: string) => {
        let oldCode = null, tries = 3;
        const submitCodeActor = async (actions: IActorActions) => {
            if (!actions.submitDeviceCode) throw new Error('Missing submitDeviceCode action')
            const newCode = totp.generateAuthCode(sharedSecret)
            if(!tries--) throw new Error('no more tries left')
            if(newCode === oldCode) return new Promise(resolve => setTimeout(resolve, 30_000))
                .then(() => submitCodeActor(actions))
            return actions.submitDeviceCode(oldCode = newCode).then(res => {
                tries = 3
                return res
            }).catch(e => {
                if(!tries) throw e
                return submitCodeActor(actions)
            })
        }
        return submitCodeActor
    }

    static CredentialsRefresher = (login: string, password: string, sharedSecret?: string) =>
        (session: SteamSession) => session.getJWTViaCredentials(
            login, password,
            sharedSecret && SteamSession.GenerateAndSubmitDeviceCodeActor(sharedSecret))

    static MobileSessionRefresher = (mobileSession: SteamSession, sharedSecret: string) =>
        (sessionToRefresh: SteamSession) => sessionToRefresh
            .getJWTViaQR(resp => mobileSession.approveSession(resp, sharedSecret))

    private static refresherNotSet =  async () => {throw new Error(
        'Refresh token requires update and tokenRefresher method not set. ' +
        'Actualize refresh token manually or patch tokenRefresher method with your updater function to automatically ' +
        'update refresh token when required.'
    )}

    static createSessionidCookie = createSessionidCookie
    static getJWTExpMcLeft = getJWTExpMcLeft
    static env = {webBrowser: WebBrowser, mobileIOS: MobileIOS, clientWindows: ClientWindows, clientMacOS: ClientMacOS}

    static restore = async (
        store: PersistormInstance,
        newEnv: (...args: any[]) => SessionEnv = WebBrowser,
        cookieStore?: CookieStore
    ): Promise<SteamSession> => {
        if(!cookieStore) {
            cookieStore = new CookieStore()
            await cookieStore.usePersistentStorage(store.col('cookies'))
        }
        let [refreshToken, accessToken, env] = await store.getm(['refresh', 'access', 'env'])
        if(!env) {
            env = newEnv()
            await store.set('env', env)
        }
        const session = new SteamSession(env, cookieStore, {refreshToken, accessToken})
        session.events.token.on(store.seto)
        session.events.env.on(env => store.set('env', env))
        return session
    }

}

