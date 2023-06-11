import CookieStore from "cookie-store";
import HttpAuthConversation from "./HttpAuthConversation";
import {
    EGuardMap,
    EGuardType,
    IActorActions,
    IPollOptions,
    obj,
    PollContext,
    PollingOptions,
    RequestOpts,
    ResponseWithSetCookies,
    SessionEnv,
    SessionSignatureData,
    SteamSessionConstructorParams, SteamSessionRestoreConstructorParams,
    SteamSessionTokens,
    SteamSessionTokensFullName,
    TokenRefresher
} from "../common/types";
import Listenable from "listenable";
import totp from 'steam-totp'
import {ClientMacOS, ClientWindows, MobileIOS, WebBrowser} from "./RequestEnvironments";
import {
    createSessionidCookie,
    createSteamSessionSignature,
    decodeSteamJWT,
    drainFetchResponse,
    encryptPasswordWithPublicKey,
    formDataFromObject,
    getJWTExpMcLeft,
    getSuccessfulJsonFromResponse,
    isExpired,
    socksDispatcherFromUrl,
    transformGuardsArrayToObjectWithContext,
} from "../common/utils";
import {BadParamError, BadProtobufResponse, MalformedResponse} from "./Errors";
import {
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
    ETokenRenewalType
} from "../protobuf/steammessages_auth.steamclient";
import {ESessionPersistence} from "../protobuf/enums";
import WebSocketAuthConversation from "./WebSocketAuthConversation";
import SteamSocket from "./SteamSocket";
import {Dispatcher, fetch, ProxyAgent, Response} from "undici";
import {HttpsProxyAgent} from "https-proxy-agent";
import {SocksProxyAgent} from "socks-proxy-agent";
import {CarryJar} from "cookie-store/dist/CarryJar";

export default class SteamSession {
    constructor({env, cookieStore, refresher, tokens, proxy}: SteamSessionConstructorParams = {}) {
        this.env = env ?? WebBrowser()
        this.cookies = cookieStore ?? new CookieStore()
        this.updateSessionidCookieValue()
        this.updateAccessCookieExpiration()
        tokens    && this.updateTokens(tokens)
        refresher && this.setTokenRefresher(refresher)
        proxy     && this.useProxy(proxy)

        if(env.websiteId !== 'Mobile') this.approveSession = SteamSession.disabledApproveSession

        this.authentication = env.websiteId === 'Client'
            ? new WebSocketAuthConversation(this)
            : new HttpAuthConversation(this)
    }

    env: SessionEnv
    cookies: CookieStore

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

    fetchDispatcher: Dispatcher
    wsAgent: HttpsProxyAgent | SocksProxyAgent

    useProxy(url: string | URL) {
        if(typeof url === 'string') url = new URL(url)
        switch (url.protocol) {
            case 'https:':
            case 'http:': {
                this.fetchDispatcher = new ProxyAgent(url.toString())
                this.wsAgent = new HttpsProxyAgent(url)
            }
            break;
            case 'socks4:':
            case 'socks5:': {
                this.fetchDispatcher = socksDispatcherFromUrl(url)
                this.wsAgent = new SocksProxyAgent(url)
            }
            break;
            default: throw new BadParamError('url', ['https:', 'http:', 'socks4:', 'socks5:'], url.protocol)
        }
    }

    disableHttpProxy() {
        this.fetchDispatcher = undefined
        this.wsAgent = undefined
    }

    //todo: cleanup, split logic for setting default opts, cookies set | save, request, response
    request = async (url: URL | string, opts: RequestOpts = {}): Promise<ResponseWithSetCookies> => {
        if(typeof url === 'string') url = new URL(url)
        opts.dispatcher = this.fetchDispatcher
        opts.headers = Object.assign({}, opts.headers, this.env.httpHeaders)

        if(!opts.redirect) opts.redirect = 'manual'
        if(opts.followRedirects === undefined) opts.followRedirects = 2
        if(opts.autoCookies === undefined) opts.autoCookies = true
        if(opts.appendCookies === undefined) opts.appendCookies = true

        let cookiesUsed: CarryJar | null = null
        if(opts.autoCookies && opts.appendCookies) { //true false []
            cookiesUsed = this.cookies.get(url)
            if(typeof opts.appendCookies === 'object')
                for(const k in opts.appendCookies)
                    if(opts.appendCookies[k]) cookiesUsed.set(k, opts.appendCookies[k])
                    else cookiesUsed.delete(k)
            opts.headers.cookie = cookiesUsed.toString()
        }

        this.events.request.emit([url, opts, cookiesUsed])

        const resp = await fetch(url, opts) as ResponseWithSetCookies
        resp.setCookies = CookieStore.parseSetCookies(resp.headers.getSetCookie(), url)

        if(opts.autoCookies && opts.rejectSetCookies !== true) { //undefined false true []
            const cookiesToReject = Array.isArray(opts.rejectSetCookies)
              ? opts.rejectSetCookies // []
              : [] //undefined false
            for(const cookie of resp.setCookies)
                if(!cookiesToReject.includes(cookie.name))
                    this.cookies.add(cookie)
        }


        this.events.response.emit([url as URL, opts, cookiesUsed, resp])
        if(resp.status === 302 && resp.headers.has('location') && opts.followRedirects-- > 0)
            return this.request(resp.headers.get('location'), opts) //.redirected not working, 302 not needed

        return resp
    }

    authorizedRequest = (url: URL | string, opts: RequestOpts = {}): Promise<Response> => {
        return isExpired(this.expiration.cookie)
            ? this.refreshCookies().then(() => this.request(url, opts))
            : this.request(url, opts)
    }

    //we can await this.tokenRefresher(this) from here, but I don't want to use async function for it
    getRefreshTokenIfUpdated = (): null | string => isExpired(this.expiration.refresh) ? null : this.tokens.refresh
    getAccessTokenIfUpdated  = (): null | string => isExpired(this.expiration.access)  ? null : this.tokens.access

    async refreshCookies() {
        const fd = formDataFromObject({
            nonce: this.getRefreshTokenIfUpdated() || await this.updateRefreshToken(),
            sessionid: this.sessionid,
            redir: 'https://steamcommunity.com/login/home/?goto='
        })

        const json: any = await this.request(
            'https://login.steampowered.com/jwt/finalizelogin',
            {method: 'POST', body: fd, headers: this.env.authProtoHeaders}
        ).then(getSuccessfulJsonFromResponse)

        if(typeof json !== 'object' || !json.transfer_info)
            throw new MalformedResponse(json, {transfer_info: Array})

        return Promise.any(json.transfer_info.map(async el => {
            el.params.steamID = json.steamID || this.steamid
            const response = await this.request(el.url, {
                body: formDataFromObject(el.params),
                method: 'POST',
            }).then(drainFetchResponse)
            const cookies = response.headers.getSetCookie() //todo: multiple hostnames different cookies
            const accessCookie = cookies.find(c => c.startsWith('steamLoginSecure'))
            if(!accessCookie) throw new Error('Missing access cookie')
            return accessCookie
        })).then((accessCookieString: string) => {
            const accessCookie = CookieStore.parseSetCookie(accessCookieString, {hostname: '.'})
            const token = this.cookies.add(accessCookie).value
            this.updateAccessCookieExpiration(token)
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
                const decoded = decodeSteamJWT(refreshToken)
                this.expiration.refresh = decoded.exp * 1000
                if(!this.steamid) this.steamid = decoded.sub
            } else {
                this.expiration.refresh = 0
            }
        }
        if(accessToken !== undefined) {
            updated.access = this.tokens.access = accessToken
            if(accessToken !== null) {
                this.expiration.access = decodeSteamJWT(refreshToken).exp * 1000
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
        request: new Listenable<[URL, RequestOpts, (CarryJar | null)]>(),
        response: new Listenable<[URL, RequestOpts, (CarryJar | null), ResponseWithSetCookies]>(),
        token: new Listenable<SteamSessionTokens>(),
        env: new Listenable<SessionEnv>(),
    }

    getJWTViaCredentials = async (accountName: string, password: string, actor?: (
        actions: IActorActions,
        guards: EGuardMap,
        pollOptions: IPollOptions,
        steamid: string, context: CAuthenticationBeginAuthSessionViaCredentialsResponse
    ) => Promise<false | any>) => {
        const key = await this.authentication.getPasswordRSAPublicKey({accountName})
        const encryptedPassword = encryptPasswordWithPublicKey(key, password)
        const context = await this.beginAuthSessionViaCredentials(accountName, encryptedPassword, key.timestamp)
        const guards = transformGuardsArrayToObjectWithContext(context.allowedConfirmations)
        const actions = this.createActions(guards, context)
        const pollOptions = {delay: 0, interval: context.interval * 1000, tries: 100}
        if(!actor && Object.keys(actions).length) throw new Error('actions are required but actor not set')
        else if(actor && await actor(actions, guards, pollOptions, context.steamid, context) === false) return null
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

    private static disabledApproveSession = () => {
        throw new Error('"approveSession" method should only be used in Mobile environment') //is it?
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
            const accessToken = this.getAccessTokenIfUpdated() //but we'll check anyway
            if(!force && accessToken) return this.tokens.access
        }
        return this.authentication.generateAccessTokenForApp({
            refreshToken, steamid: this.steamid, renewalType: ETokenRenewalType.k_ETokenRenewalType_Allow
        }).then(value => this.updateTokens(value).access)
    }

    updateSessionidCookieValue(domain = '.', create = true) {
        let sessionidCookieValue = this.cookies.get({hostname: domain}).get('sessionid')
        if(create && !sessionidCookieValue)
            sessionidCookieValue = this.cookies.add(createSessionidCookie(domain)).value
        if(sessionidCookieValue)
            this.sessionid = sessionidCookieValue
        return this.sessionid
    }

    getSessionidCookieValue(domain = '.', create = true) {
        const sessionid = this.cookies.get({hostname: domain}).get('sessionid')
        if(create && !sessionid) return this.cookies.add(createSessionidCookie(domain)).value
        return sessionid
    }

    me = async (): Promise<[url: string, id: string, type: "profiles" | "id"]> => {
        const res = await this.authorizedRequest('https://steamcommunity.com/my', {followRedirects: 0})
            .then(drainFetchResponse)
        const location = res.headers.get('location')
        const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
        if(!profileUrl) return null
        return [profileUrl[0], profileUrl[3], profileUrl[2] as "profiles" | "id"]
    }

    getAccessCookieValue(): string | null { //todo: multiple hostnames different cookies
        return this.cookies.get({hostname: '.'}).get('steamLoginSecure') || null
    }

    updateAccessCookieExpiration(cookieValue?: string) {
        const accessCookieValue = cookieValue || this.getAccessCookieValue()
        if(accessCookieValue) return this.expiration.cookie = decodeSteamJWT(accessCookieValue).exp * 1000
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
        'Refresh token needs to be updated, and tokenRefresher method isn’t set. ' +
        'You can either update it manually, or .setTokenRefresher(), so it\'s automatically updated if missed or expired'
    )}

    static createSessionidCookie = createSessionidCookie
    static getJWTExpMcLeft = getJWTExpMcLeft
    static env = {webBrowser: WebBrowser, mobileIOS: MobileIOS, clientWindows: ClientWindows, clientMacOS: ClientMacOS}

    static restore = async (
        {store, env, forceNewEnv = false, ...params}: SteamSessionRestoreConstructorParams,
    ): Promise<SteamSession> => {
        if(!params.cookieStore) {
            params.cookieStore = new CookieStore()
            await params.cookieStore.usePersistentStorage(store.col('cookies'))
        }
        const [refreshToken, accessToken, oldEnv] = await store.getm(['refresh', 'access', 'env'])
        params.tokens = {refreshToken, accessToken}
        if(!forceNewEnv && oldEnv) {
            params.env = oldEnv
        } else {
            params.env = env()
            await store.set('env', params.env)
        }
        const session = new SteamSession(params)
        session.events.token.on(store.seto)
        session.events.env.on(env => store.set('env', env)) //if user decides to change env on the fly
        return session
    }

}