import {EOSType, SessionEnv} from "./types";
import {rand} from "./utils";
import {EAuthTokenPlatformType} from "./protots/steammessages_auth.steamclient";

export const webBrowser = (userAgent = defaultWebUAMacOS): SessionEnv => {
    return {
        websiteId: 'Community',
        cookies: {},
        requestHeaders: {
            'user-agent': userAgent
        },
        authProtoHeaders: {
            'origin': 'https://steamcommunity.com',
            'referer': 'https://steamcommunity.com/'
        },
        device: {
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_WebBrowser,
            gamingDeviceType: 0, //??
            osType: 0, //??
            deviceFriendlyName: userAgent,
        }
    }
}

export const clientWindows = (
    friendlyDeviceName: string = getRandomWindowsDeviceName(),
    windowsVersion: EOSType = EOSType.Windows10,
    country = 'US',
    language = 'english',
    userAgent = defaultWindowsClientUA
): SessionEnv => {
    const qs = {
        IN_CLIENT: 'true',
        WEBSITE_ID: 'Client',
        LOCAL_HOSTNAME: friendlyDeviceName,
        WEBAPI_BASE_URL: 'https://api.steampowered.com/',
        STORE_BASE_URL: 'https://store.steampowered.com/',
        USE_POPUPS: 'true',
        DEV_MODE: 'false',
        LANGUAGE: language,
        PLATFORM: 'windows',
        COUNTRY: country,
        LAUNCHER_TYPE: '0',
        IN_LOGIN: 'true'
    }

    const origin = 'https://steamloopback.host'
    const referer = new URL('https://steamloopback.host/index.html')
    referer.search = new URLSearchParams(qs).toString()

    return {
        websiteId: 'Client',
        cookies: [],
        requestHeaders: {
            'user-agent': userAgent
        },
        authProtoHeaders: {
            'origin': origin,
            'referer': referer.toString()
        },
        device: {
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
            gamingDeviceType: 1,
            osType: windowsVersion,
            deviceFriendlyName: userAgent,
        }
    }
}

export const mobileIOS = (
    deviceFriendlyName = getRandomIOSDeviceName(),
    userAgent = defaultIOSClientUA,
    osVersion = EOSType.IOS12,
): SessionEnv => {
    return {
        websiteId: 'Mobile',
        cookies: {
            'mobileClient': 'ios',
            'mobileClientVersion': '777777 3.0.0'
        },
        requestHeaders: {
            'user-agent': userAgent,
        },
        authProtoHeaders: {},
        device: {
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_MobileApp,
            gamingDeviceType: null,
            osType: osVersion,
            deviceFriendlyName
        }
    }
}

const ENG_APB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function getRandomWindowsDeviceName() {
    let output = 'DESKTOP-';
    for(let i = 0; i < 7; i++) output += ENG_APB[rand(0, ENG_APB.length-1)]
    return output;
}

function getRandomIOSDeviceName() {
    return 'iPhone ' + rand(5, 14)
}

const defaultWebUAMacOS = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
const defaultWebUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
const defaultWindowsClientUA = 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US; Valve Steam Client/default/1665786434; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
const defaultIOSClientUA = 'Steam%20Mobile/7617469 CFNetwork/1399 Darwin/22.1.0'