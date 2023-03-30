import {EOSType, SessionEnv} from "./extra/types";
import {rand, randel} from "./utils";
import {EAuthTokenPlatformType} from "./protots/steammessages_auth.steamclient";
import {
    defaultIOSClientUA,
    defaultMacOSClientUA,
    defaultWebUAMacOS,
    defaultWindowsClientUA,
    ENG_APB, ipadOSHttpUA, ipadOSProtoClientUA,
    macModels,
    topNames
} from "./extra/assets";

export const WebBrowser = (userAgent = defaultWebUAMacOS): SessionEnv => {
    return {
        websiteId: 'Community',
        cookies: {},
        httpHeaders: {
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

export const ClientMacOS = (
    deviceFriendlyName: string = getRandomMACOsDeviceName(),
    webUA: string = defaultMacOSClientUA,
    osType: number | EOSType = -75,
) => { //vractive=0; connectedDevices=0;
    const env: SessionEnv = {
        websiteId: 'Client',
        cookies: {},
        httpHeaders: {
            "user-agent": webUA,
        },
        authProtoHeaders: {
            "user-agent": 'Valve/Steam HTTP Client 1.0' //ua used for "upgrade" request
        },
        device: {
            deviceFriendlyName,
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient,
            osType: Number(osType),
            gamingDeviceType: 1
        }
    }
    return env
}

export const ClientWindows = (
    friendlyDeviceName: string = getRandomWindowsDeviceName(),
    windowsVersion: EOSType = EOSType.Windows10,
    country = 'US',
    language = '0',
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
        cookies: {},
        httpHeaders: {
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

export const MobileIOS = (
    deviceFriendlyName = getRandomIOSDeviceName(),
    protoAgent = randel([defaultIOSClientUA, ipadOSProtoClientUA]),
    httpAgent = ipadOSHttpUA,
    osVersion = randel([-571, -570, -569, -568]), //EOSType.IOS12
): SessionEnv => {
    return {
        websiteId: 'Mobile',
        cookies: {
            'mobileClient': 'ios',
            'mobileClientVersion': '777777 ' + randel(['3.0.0', '3.1.0'])
        },
        httpHeaders: {
            'user-agent': httpAgent,
        },
        authProtoHeaders: {
            'user-agent': protoAgent
        },
        device: {
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_MobileApp,
            gamingDeviceType: null,
            osType: osVersion,
            deviceFriendlyName
        }
    }
}

export function getRandomWindowsDeviceName() {
    let output = 'DESKTOP-';
    for(let i = 0; i < 7; i++) output += ENG_APB[rand(0, ENG_APB.length-1)]
    return output;
}

export function getRandomIOSDeviceName() {
    return 'iPhone ' + rand(5, 14)
}

export function getRandomMACOsDeviceName() {
    return `${randel(topNames)}'s-`+randel(macModels)
}

