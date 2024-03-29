import {
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
    EAuthTokenPlatformType
} from "../protobuf/steammessages_auth.steamclient";
import type SteamSession from '../constructs/SteamSession'
import {RequestInit} from "undici";
import {Response} from "undici";
import CookieStore from "cookie-keeper";
import {CookieData} from "cookie-keeper/dist/types";
import {PersistormInstance} from 'persistorm'


export type fn = (...args: any[]) => any
export type obj = Record<string, any>

export type Patch<T, Props> = Omit<T, keyof Props> & Props;
export type RequestOpts = Patch<RequestInit, {
    autoCookies?: Boolean,
    appendCookies?: Boolean | Record<string, string | null | undefined | false>,
    rejectSetCookies?: Boolean | string[]
    followRedirects?: number
    headers?: {cookie?: string, [key: string]: string}
}>

export type ResponseWithSetCookies = Response & {setCookies: CookieData[]}

export enum EGuardType {
    Unknown = 0,
    None = 1,
    EmailCode = 2,
    DeviceCode = 3,
    DeviceConfirmation = 4,
    EmailConfirmation = 5,
    MachineToken = 6,
    UNRECOGNIZED = -1,
}

export type EGuardMap = {[key in EGuardType]?: string | true}

export type SessionEnv<BUFFER=Buffer>  = {
    websiteId: 'Community' | 'Mobile' | 'Client',
    cookies: obj,
    httpHeaders: {
        'user-agent': string
    },
    authProtoHeaders: {
        'origin'?: string,
        'referer'?: string,
        'user-agent'?: string
    },
    device: {
        deviceFriendlyName: string,
        platformType: EAuthTokenPlatformType,
        osType: null | EOSType | number,
        gamingDeviceType: null | number,
        clientCount: number,
        machineId: BUFFER
    },
    meta: {
        updated: number
    } & obj

}

export type CMsg = {encode: fn, decode: fn}

export type RT_UpdateSessionWithCode = ReturnType<SteamSession['UpdateSessionWithCodeAction']>
export type RT_CheckDeviceOrSendEmail = ReturnType<SteamSession['CheckDeviceOrSendEmailAction']>
export interface IActorActions {
    submitDeviceCode?: RT_UpdateSessionWithCode
    submitEmailCode?: RT_UpdateSessionWithCode
    checkDeviceOrSendEmail?: RT_CheckDeviceOrSendEmail
}
export interface IPollOptions {
    delay: number,
    interval: number,
    tries: number
}

export type SessionSignatureData = {clientId: string, version?: number, steamid?: string}
export type SteamSessionTokensFullName = {refreshToken?: string | null, accessToken?: string | null}
export type SteamSessionTokens = {refresh?: null | string, access?: null | string}

export type PollContext = {clientId: string, requestId: Buffer}
export type PollingOptions = {delay: number, tries: number, interval: number}

export type SteamJwtData = {
    iss: string,
    sub: string, //stemaid
    aud: ('web'|'renew'|'derive'|'mobile'|'client'|string)[]
    exp: number,
    nbf: number,
    iat: number,
    jti: string,
    oat: number,
    per: number,
    ip_subject: string,
    ip_confirmer: string
}

export type TokenRefresher = (session: SteamSession) => Promise<any>

export enum EOSType {
    'Web' = -700,
    'IOSUnknown' = -600,
    'IOS1' = -599,
    'IOS2' = -598,
    'IOS3' = -597,
    'IOS4' = -596,
    'IOS5' = -595,
    'IOS6' = -594,
    'IOS6_1' = -593,
    'IOS7' = -592,
    'IOS7_1' = -591,
    'IOS8' = -590,
    'IOS8_1' = -589,
    'IOS8_2' = -588,
    'IOS8_3' = -587,
    'IOS8_4' = -586,
    'IOS9' = -585,
    'IOS9_1' = -584,
    'IOS9_2' = -583,
    'IOS9_3' = -582,
    'IOS10' = -581,
    'IOS10_1' = -580,
    'IOS10_2' = -579,
    'IOS10_3' = -578,
    'IOS11' = -577,
    'IOS11_1' = -576,
    'IOS11_2' = -575,
    'IOS11_3' = -574,
    'IOS11_4' = -573,
    'IOS12' = -572,
    'IOS12_1' = -571,
    'AndroidUnknown' = -500,
    'Android6' = -499,
    'Android7' = -498,
    'Android8' = -497,
    'Android9' = -496,
    'UMQ' = -400,
    'PS3' = -300,
    'LinuxUnknown' = -203,
    'Linux22' = -202,
    'Linux24' = -201,
    'Linux26' = -200,
    'Linux32' = -199,
    'Linux35' = -198,
    'Linux36' = -197,
    'Linux310' = -196,
    'Linux316' = -195,
    'Linux318' = -194,
    'Linux3x' = -193,
    'Linux4x' = -192,
    'Linux41' = -191,
    'Linux44' = -190,
    'Linux49' = -189,
    'Linux414' = -188,
    'Linux419' = -187,
    'Linux5x' = -186,
    'Linux54' = -185,
    'Linux6x' = -184,
    'Linux7x' = -183,
    'Linux510' = -182,
    'MacOSUnknown' = -102,
    'LinuxMax' = -101,
    'MacOS104' = -101,
    'MacOS105' = -100,
    'MacOS1058' = -99,
    'MacOS106' = -95,
    'MacOS1063' = -94,
    'MacOS1064_slgu' = -93,
    'MacOS1067' = -92,
    'MacOS107' = -90,
    'MacOS108' = -89,
    'MacOS109' = -88,
    'MacOS1010' = -87,
    'MacOS1011' = -86,
    'MacOS1012' = -85,
    'Macos1013' = -84,
    'Macos1014' = -83,
    'Macos1015' = -82,
    'MacOS1016' = -81,
    'MacOS11' = -80,
    'MacOS111' = -79,
    'MacOS1017' = -78,
    'MacOS12' = -77,
    'MacOS13' = -76,
    'MacOSMax' = -1,
    'Unknown' = -1,
    'WinUnknown' = 0,
    'Win311' = 1,
    'Win95' = 2,
    'Win98' = 3,
    'WinME' = 4,
    'WinNT' = 5,
    'Win200' = 6,
    'Win2000' = 6,
    'WinXP' = 7,
    'Win2003' = 8,
    'WinVista' = 9,
    'Win7' = 10,
    'Windows7' = 10,
    'Win2008' = 11,
    'Win2012' = 12,
    'Win8' = 13,
    'Windows8' = 13,
    'Win81' = 14,
    'Windows81' = 14,
    'Win2012R2' = 15,
    'Win10' = 16,
    'Windows10' = 16,
    'Win2016' = 17,
    'Win2019' = 18,
    'Win2022' = 19,
    'Win11' = 20,
    'WinMAX' = 21
}

export type CmsList = {
    endpoint: string,
    legacy_endpoint: string,
    type: 'netfilter' | 'websockets',
    dc: string,
    realm: 'steamglobal',
    load: number,
    wtd_load: number
}

export type SteamSessionConstructorParams = {
    env?: SessionEnv,
    cookieStore?: CookieStore,
    tokens?: SteamSessionTokensFullName,
    proxy?: URL | string,
    refresher?: TokenRefresher
}

export type SteamSessionRestoreConstructorParams = {
    store: PersistormInstance,
    env: (oldEnv?: SessionEnv) => SessionEnv,
} & Omit<SteamSessionConstructorParams, 'env'> & obj

export type UndiciResponse = Response

export type JWTCredentialsActor = (
  actions: IActorActions,
  guards: EGuardMap,
  pollOptions: IPollOptions,
  steamid: string,
  context: CAuthenticationBeginAuthSessionViaCredentialsResponse
) => Promise<false | any>