import {EOSType, obj, SessionEnv} from "../common/types";
import {rand, randel} from "../common/utils";
import {EAuthTokenPlatformType} from "../protobuf/steammessages_auth.steamclient";
import {
    defaultIOSClientUA,
    defaultMacOSClientUA,
    defaultWindowsClientUA,
    ENG_APB, ipadOSHttpUA, ipadOSProtoClientUA,
    macModels,
    topNames
} from "../common/assets";
import UserAgent from "user-agents";

type WebBrowserMeta = {
    viewport: {
        height: number,
        width: number
    },
}

export const WebBrowser = (
  userAgent?: string,
  extraHttpHeaders: obj = {},
  meta: WebBrowserMeta = {} as any
): SessionEnv<WebBrowserMeta> => {
    const {userAgent: defaultUA, viewportHeight, viewportWidth} = new UserAgent({deviceCategory: 'desktop'}).data
    if(!userAgent) userAgent = defaultUA
    extraHttpHeaders['user-agent'] = userAgent
    if(!meta.viewport) meta.viewport = {} as any
    if(!meta.viewport.height) meta.viewport.height = viewportHeight
    if(!meta.viewport.width) meta.viewport.width = viewportWidth
    return {
        websiteId: 'Community',
        cookies: {},
        httpHeaders: extraHttpHeaders as {'user-agent': string},
        authProtoHeaders: {
            'origin': 'https://steamcommunity.com',
            'referer': 'https://steamcommunity.com/'
        },
        device: {
            platformType: EAuthTokenPlatformType.k_EAuthTokenPlatformType_WebBrowser,
            gamingDeviceType: 0, //??
            osType: 0, //??
            deviceFriendlyName: userAgent as string,
            clientCount: 0,
            machineId: Buffer.alloc(0),
        },
        meta,
        updated: Date.now()
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
            gamingDeviceType: 1,
            clientCount: 0,
            machineId: new Buffer(0)
        },
        meta: {},
        updated: Date.now()
    }
    return env
}

export const ClientWindows = (
    friendlyDeviceName: string = getRandomWindowsDeviceName(),
    windowsVersion: EOSType = EOSType.Windows10,
    country = 'US',
    language = '0',
    userAgent = defaultWindowsClientUA,
    ignoreWarn = false
): SessionEnv => {
    if(!ignoreWarn) console.warn('windows client env currently may not work. supply your own (typeof SessionEnv) env value or use ClientMacOS env') //todo
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
            clientCount: 0,
            machineId: new Buffer(0)
        },
        meta: {},
        updated: Date.now()
    }
}

type MobileMeta = {
    deviceid: string
}

export const MobileIOS = (
  meta: MobileMeta = {} as any,
  deviceFriendlyName = getRandomIOSDeviceName(),
  protoAgent = randel([defaultIOSClientUA, ipadOSProtoClientUA]),
  httpAgent = ipadOSHttpUA,
  osVersion = randel([-571, -570, -569, -568]), //EOSType.IOS12
): SessionEnv<MobileMeta> => {
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
            deviceFriendlyName,
            clientCount: 0,
            machineId: Buffer.alloc(0)
        },
        meta,
        updated: Date.now()
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

