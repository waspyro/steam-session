import {BadHTTPStatusResponseError, BadProtobufResponse} from "./Errors";
import {Key, hex2b64} from 'node-bignumber'

export const getSuccessfulProtoResponseBuffer = (response: Response): Promise<Buffer> => {
    if(!response.ok) throw new BadHTTPStatusResponseError(response)
    const protoError = response.headers.get('x-eresult')
    if(protoError !== undefined && protoError !== '1')
        throw new BadProtobufResponse(response, protoError)
    return response.arrayBuffer().then(ab => Buffer.from(ab))
}

export const getSuccessfulJson = (response: Response) => {
    if(!response.ok) throw new BadHTTPStatusResponseError(response)
    return response.json()
}

export const rand = (min: number, max: number) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

export const decodeJWT = (token: string): string => JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())

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

export const Listenable = <T>() => {
    const listeners = []
    const emit = (args: T) => {for (let i = 0; i < listeners.length; ++i) listeners[i](args)}
    const on = (cb: (args: T) => void) => listeners.push(cb)
    const off = (cb: (args: T) => void) => listeners.filter(el => el !== cb).length
    return {on, off, emit}
}