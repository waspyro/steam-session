examples

```javascript
import SteamSession from "./src/index";
import {EGuardType} from "./src/types";

const credentials = ['login', 'password', 'sharedSecret']

async function minimalExample() {
    const session = new SteamSession(SteamSession.env.clientWindows())
    const sessionJwtTokens = await session.getJWTViaCredentials(credentials[0], credentials[1], credentials[2]
        ? SteamSession.GenerateAndSubmitDeviceCodeActor(credentials[2])
        : undefined)
    const steamLoginSecureCookieValue = await session.refreshCookies()
}

async function manualExample() {
    const mobile = new SteamSession(SteamSession.env.mobileIOS())
    const web = new SteamSession(SteamSession.env.webBrowser())

    const mobileTokens = mobile.getJWTViaCredentials(credentials[0], credentials[1], async (actions, guards, pollOptions) => {
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


async function automaticExample() {
    const mobileSession = new SteamSession(SteamSession.env.mobileIOS())
        .setTokenRefresher(SteamSession.CredentialsRefresher(...credentials))
    const webSession = new SteamSession(SteamSession.env.webBrowser())
        .setTokenRefresher(SteamSession.MobileSessionRefresher(mobileSession, credentials[2]))

    useEventsLoggersForSession(mobileSession, 'mobile')
    useEventsLoggersForSession(webSession, 'web')

    await webSession.startCookiesRefreshInterval()

    const tokens = {
        mobile: mobileSession.tokens,   //since it is an object reference it will always be actual,
        web: {                          //on other hand you should not change it manually, so you may want to have a copy
            access: webSession.tokens.access,
            refresh: webSession.tokens.refresh
        },
        cookie: webSession.getAccessCookieValue()
    }

    //you can also now make authorized requests to steam related domains with fetch-like api,
    //response's set-cookie and access cookie refreshing will be handled for you automatically
    const steamHTTPRequest = webSession.request //.bind(session) not required
    steamHTTPRequest('https://steamcommunity.com/dev')
        .then(res => res.text())
        .then(/*scrape web api key*/)
    steamHTTPRequest('https://store.steampowered.com/cart/', {
        body: new URLSearchParams({
            action: 'add_to_cart',
            sessionid: webSession.getSessionidCookieValue(),
            subid: '36'
        })
    }).then(/*do something with response*/)
}

const useEventsLoggersForSession = (session, prefix) => {
    session.events.request.on(([url]) => console.log(prefix, '>', url.toString()))
    session.events.token.on((tokens) => console.log(prefix, 'JWT obtained', tokens))
    session.cookies.events.set.on(([cookie]) => console.log(prefix, '+', cookie.name))
    session.cookies.events.del.on(([cookie]) => console.log(prefix, '-', cookie.name))
    return session
}
