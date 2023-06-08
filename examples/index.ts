import SteamSession from "../src";
import {EGuardMap, EGuardType, IActorActions, IPollOptions} from "../src/common/types";
import {WebBrowser} from "../src/constructs/RequestEnvironments";
import {decodeSteamJWT, getSuccessfulResponseJson} from "../src/common/utils";

const {clientWindows, webBrowser, mobileIOS, clientMacOS} = SteamSession.env
const credentials = ['login', 'password', 'sharedSecret'] as const
const proxy = {mobile: 'socks5://localhost:1337', web: 'http://localhost:6969'}

async function minimalExample() {
    const session = new SteamSession({env: clientMacOS()})
    const sessionJwtTokens = await session.getJWTViaCredentials(credentials[0], credentials[1], credentials[2]
        ? SteamSession.GenerateAndSubmitDeviceCodeActor(credentials[2]) : undefined)
    const steamLoginSecureCookieValue = await session.refreshCookies()
    console.log('is client token:', decodeSteamJWT(sessionJwtTokens.access).aud.includes('client'))
}

async function manualExample() {
    const mobile = new SteamSession({env: mobileIOS()})
    const web = new SteamSession({env: webBrowser()})

    const mobileTokens = mobile.getJWTViaCredentials(credentials[0], credentials[1], async (
        actions: IActorActions, guards: EGuardMap, pollOptions: IPollOptions, steamid: string
    ) => {
        if(guards[EGuardType.None]) return //no guards are presented so we can start polling right away

        if(actions.checkDeviceOrSendEmail) {
            //i am currently have no way to test this but this should work something like so:
            await actions.checkDeviceOrSendEmail()
            console.log('email hint:', guards[EGuardType.EmailCode])
            const code = await Promise.resolve('obtain code via prompt or else...')
            await actions.submitEmailCode(code) //try catch to check if code is correct
        } else if (actions.submitDeviceCode) {
            const code = await Promise.resolve('generate or obtain code other way')
            await actions.submitDeviceCode(code) //try catch to check if code is correct
        }
        //you can also change poll options before resolving this function if you wish (you probably don't)
        pollOptions.delay = 1000
        pollOptions.tries = 1
        pollOptions.interval = 5000
        //when this function is resolved polling starts automatically
    })

    const webTokens = await web.getJWTViaQR(data => mobile.approveSession(data, credentials[2]))
    const accessCookieValue = await web.refreshCookies()
}


async function automaticExampleWithProxy() {
    const mobileSession = new SteamSession({
        env: mobileIOS(), proxy: proxy.mobile,
        refresher: SteamSession.CredentialsRefresher(...credentials),
        tokens: {refreshToken: undefined, accessToken: undefined} //you can reuse tokes if you have saved them
    })
    const webSession = new SteamSession({
        env: WebBrowser(), proxy: proxy.web,
        refresher: SteamSession.MobileSessionRefresher(mobileSession, credentials[2])
    })

    //check what requests were made on each session
    useEventsLoggersForSession(mobileSession, 'mobile')
    useEventsLoggersForSession(webSession, 'web')

    //this will check if access token (cookie) is actual and if it's not, update it via refresher we set above
    const mySellListings = await webSession //.refreshCookies() or ->
        .authorizedRequest('https://steamcommunity.com/market/mylistings/render/?query=&start=0&count=10')
        .then(getSuccessfulResponseJson) //fetch api
    console.log('successfully got sell listings: ', mySellListings?.success || false)
    //as result
    //1. mobile session will be updated via credentials
    //2. webSession will be authorized via mobile session
    //3. steamLoginSecure cookie (access token) will be refreshed via refreshToken
    const webSessionAccessCookieToken = decodeSteamJWT(webSession.getAccessCookieValue())
    console.log('ip address of your "web" proxy', webSessionAccessCookieToken.ip_subject)
    console.log('ip address of your "mobile" proxy', webSessionAccessCookieToken.ip_confirmer)

    const request = webSession.authorizedRequest //.bind not required
    //all cookies are handled based on the domain which the request is made to,
    //except "sessionid" and "steamLoginSecure" – those are send on every request for convenience
    //so be careful and not send request somewhere outside steam:
    // request('https://steamcommunity.com')
    // request('https://store.steampowered.com')
    // request('https://google.com') 🗿
    // request('https://help.steampowered.com')
    // request('https://steam.tv')
}

const useEventsLoggersForSession = (session, prefix) => {
    session.events.request.on(([url]) => console.log(prefix, '>', url.toString()))
    //you can save this somewhere and restore next time
    session.events.token.on((tokens) => console.log(prefix, 'JWT obtained', tokens))
    session.cookies.events.set.on(([cookie]) => console.log(prefix, '+', cookie.name))
    session.cookies.events.del.on(([cookie]) => console.log(prefix, '-', cookie.name))
    return session
}