import {BadHTTPStatusResponseError, BadJSONResponse, BadProtobufResponse} from "./Errors";
import {Key, hex2b64} from 'node-bignumber'
import {CMsg, EGuardType, SteamJwtData} from "./extra/types";
import {CAuthenticationAllowedConfirmation} from "./protots/steammessages_auth.steamclient";
import {createHmac, randomBytes} from "crypto";
import {emptySteamSocketHeaders} from "./extra/assets";

export const getSuccessfulProtoResponseBuffer = (response: Response): Promise<Buffer> => {
    if(!response.ok) throw new BadHTTPStatusResponseError(response)
    const protoError = response.headers.get('x-eresult')
    if(protoError !== undefined && protoError !== '1')
        throw new BadProtobufResponse(response, protoError)
    return response.arrayBuffer().then(ab => Buffer.from(ab))
}

export const getSuccessfulResponseJson = (response: Response) => {
    if(!response.ok) throw new BadHTTPStatusResponseError(response)
    return response.json()
}

const defaultSuccessValues = {undefined: true, true: true, 1: true}
export const getSuccessfulJsonFromResponse = (
    response: Response,
    checkField: string = 'success',
    successValues = defaultSuccessValues
) => getSuccessfulResponseJson(response).then(json => {
    if(!successValues[json[checkField]]) throw new BadJSONResponse(response, json, checkField, successValues)
    else return json
})

export const rand = (min: number, max: number = min) => Math.round(min - 0.5 + Math.random() * (max - min + 1))
export const randel = (arr: any[]) => arr[rand(0, arr.length-1)]

export const decodeJWT = (token: string): SteamJwtData =>
    JSON.parse(Buffer.from(token.split('.', 2)[1], 'base64').toString())

export const encryptPasswordWithPublicKey = ({publickeyMod, publickeyExp}, password) => {
    const key = new Key()
    key.setPublic(publickeyMod, publickeyExp)
    return hex2b64(key.encrypt(password))
}

export const formDataFromObject = (o: Record<string, string>) => {
    const fd = new FormData()
    for(const key in o) fd.set(key, o[key])
    return fd
}

export const drainFetchResponse = (res: Response): Response => {
    res.text().then()
    return res
}

export const getJWTExpMcLeft = (jwt?: string) => {
    if (!jwt) return -Infinity
    const decoded = decodeJWT(jwt)
    return (decoded.exp * 1000) - Date.now()
}

export const transformGuardsArrayToObjectWithContext =
    (guards: CAuthenticationAllowedConfirmation[]):
    {[key in EGuardType]?: string | true} => {
    const guardsObject = {}
    for(const guard of guards)
        guardsObject[guard.confirmationType] =
            guard.associatedMessage || true
    return guardsObject
}

export const createSessionidCookie = (domain: string) => ({
    name: 'sessionid', value: randomBytes(12).toString('hex'),
    path: '/', domain, samesite: 'None'
})

export const createSteamSessionSignature = (sharedSecret: string, version, clientId, steamid) => {
    const signatureData = Buffer.alloc(2 + 8 + 8)
    signatureData.writeUInt16LE(version, 0)
    signatureData.writeBigUInt64LE(BigInt(clientId), 2)
    signatureData.writeBigUInt64LE(BigInt(steamid), 10)

    return createHmac('sha256', Buffer.from(sharedSecret, 'base64'))
        .update(signatureData)
        .digest()
}

export const GetDecodedFetchResponse = (message: CMsg) => resp =>
    getSuccessfulProtoResponseBuffer(resp).then(message.decode)

export const createSteamProtoHeaders = (props: Partial<typeof emptySteamSocketHeaders>) =>
    Object.assign({}, emptySteamSocketHeaders, props)

export const createNewJobid = () => {
    const jobIdBuffer = randomBytes(8)
    jobIdBuffer[0] &= 0x7f
    return jobIdBuffer.readBigInt64BE(0).toString(10)
}

const FIVE_MIN = 1000 * 60 * 5
export const isExpired = (exp: number) => Date.now() > exp - FIVE_MIN