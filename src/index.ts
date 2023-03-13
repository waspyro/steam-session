import CookieStore from "cookie-store";
import SteamProtoAuthentication from "./SteamProtoAuthentication";
import {
    EGuardType,
    IActorActions,
    obj,
    PollContext,
    PollingOptions,
    RequestOpts,
    SessionEnv,
    SessionSignatureData,
    SteamSessionTokens, TokenRefresher
} from "./types";
import Listenable from "listenable";
import {createHmac, randomBytes} from "crypto";
import {PersistormInstance} from "persistorm";
import totp from 'steam-totp'

import {clientWindows, mobileIOS, webBrowser} from "./GenerateRequestEnvironment";
import {
    decodeJWT,
    drainFetchResponse,
    encryptPasswordWithPublicKey,
    formDataFromObject, getJWTExpMcLeft,
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
        public env: SessionEnv = webBrowser(),
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
        const refreshTokenExpTimeLeft = getJWTExpMcLeft(this.tokens.refresh)
        if(refreshTokenExpTimeLeft < 1000 * 60) await this.tokenRefresher(this)

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

    updateEnv(env: SessionEnv = this.env) {
        this.env = env
        this.events.env.emit(this.env)
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
            language: 0,
            persistence: ESessionPersistence.k_ESessionPersistence_Persistent,
            guardData: "", //???
            qosLevel: 0 //???
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

    updateTokens = (tokens: {refreshToken: string | undefined, accessToken: string | undefined}) => {
        //todo fixme
        //todo: set steamid
        const updated: {refresh: string | null, access: string | null} = {} as {refresh: string | null, access: string | null}
        if(tokens.refreshToken !== undefined) updated.refresh = this.tokens.refresh = tokens.refreshToken
        if(tokens.accessToken !== undefined) updated.access = this.tokens.access = tokens.accessToken
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
        env: new Listenable<SessionEnv>()
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
        if(getJWTExpMcLeft(this.tokens.access) < 1000 * 60) await this.updateAccessToken()
        if(!steamid) steamid = decodeJWT(this.tokens.access).sub
        return this.authentication.updateAuthSessionWithMobileConfirmation({
            signature: SteamSession.createSessionSignature(sharedSecret, version, clientId, steamid),
            clientId, confirm, persistence, steamid, version
        }, this.tokens.access)
    }

    async updateAccessToken() {
        if(getJWTExpMcLeft(this.tokens.refresh) < 1000 * 60) await this.tokenRefresher(this)
        return this.authentication.generateAccessTokenForApp({
            refreshToken: this.tokens.refresh,
            steamid: decodeJWT(this.tokens.refresh).sub
        }).then(this.updateTokens)
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

    me = async (): Promise<[string, string, "profiles" | "id"]> => {
        const res = await this.request('https://steamcommunity.com/my')
        const location = res.headers.get('location')
        const profileUrl = location.match(/steamcommunity\.com(\/(id|profiles)\/([^\/]+))/)
        if(!profileUrl) return null
        drainFetchResponse(res)
        return [profileUrl[0], profileUrl[3], profileUrl[2] as "profiles" | "id"]
    }

    getAccessCookieValue() { //todo: multiple hostnames different cookies
        return this.cookies.get({hostname: '.'})
            .find(c => c.name === 'steamLoginSecure')?.value || null
    }

    static env = {webBrowser, mobileIOS, clientWindows}

    static restore = async (store: PersistormInstance, newEnv = webBrowser, cookieStore?: CookieStore, fetcher = fetch)
        : Promise<SteamSession> => {
        if(!cookieStore) {
            cookieStore = new CookieStore()
            const restored = await cookieStore.usePersistentStorage(store.col('cookies'))
        }
        let [refresh, access, env] = await store.getm(['refresh', 'access', 'env'])
        if(!env) {
           env = newEnv()
           await store.set('env', env)
        }
        const session = new SteamSession(env, cookieStore, fetcher, {refresh, access})
        session.events.token.on(store.seto)
        session.events.env.on(env => store.set('env', env))
        return session
    }

    static getJWTExpMcLeft = getJWTExpMcLeft

    #refreshCookiesIntervalTimerRef = null
    startCookiesRefreshInterval = async (timeOffsetMc = 1000 * 60 * 60) => {
        this.#refreshCookiesIntervalTimerRef = true
        const checkAndRefresh = async () => {
            const accessCookieTimeLeft = getJWTExpMcLeft(this.getAccessCookieValue())
            if(accessCookieTimeLeft < timeOffsetMc) await this.refreshCookies().then(checkAndRefresh)
            else if(this.#refreshCookiesIntervalTimerRef !== null)
                this.#refreshCookiesIntervalTimerRef = setTimeout(checkAndRefresh, accessCookieTimeLeft)
        }
        return checkAndRefresh()
    }

    stopCookiesRefreshInterval = () => {
        if(!this.#refreshCookiesIntervalTimerRef === null) return false
        if(this.#refreshCookiesIntervalTimerRef) clearTimeout(this.#refreshCookiesIntervalTimerRef)
        this.#refreshCookiesIntervalTimerRef = null
        return true
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

    static generateAndSubmitDeviceCodeActor = (sharedSecret: string) => {
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

    static CredentialsRefresher = (login: string, password: string, sharedSecret: string) => (session: SteamSession) =>
            session.getJWTViaCredentials(login, password, SteamSession.generateAndSubmitDeviceCodeActor(sharedSecret))

    static MobileSessionRefresher = (mobileSession: SteamSession, sharedSecret: string) =>
        (sessionToRefresh: SteamSession) => sessionToRefresh
            .getJWTViaQR(resp => mobileSession.approveSession(resp, sharedSecret))

    private static refresherNotSet =  async () => {throw new Error(
        'Refresh token requires update and tokenRefresher method not set. ' +
        'Actualize refresh token manually or patch tokenRefresher method with your updater function to automatically ' +
        'update refresh token when required.'
    )}

}