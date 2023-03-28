import {CMsg, CmsList} from "./extra/types";
import WebSocket from "ws";
import {EMsg} from "./protots/enums_clientserver";
import {CMsgMulti, CMsgProtoBufHeader} from "./protots/steammessages_base";
import {gunzipSync} from "zlib";
import SteamSession from "./SteamSession";
import {createSteamProtoHeaders, getSuccessfulResponseJson} from "./utils";
import {CMsgClientHello} from "./protots/steammessages_clientserver_login";

const PROTOCOL_VERSION = 65580
const PROTO_MASK = 0x80000000

export default class SteamSocket {

    constructor(private session: SteamSession) {}

    getCms = () => this.session.request('https://api.steampowered.com/s/' +
        'GetCMListForConnect/v0001/?cellid=0&format=json', {headers: this.session.env.httpHeaders})
        .then(getSuccessfulResponseJson)
        .then(json => {
            if(!json?.response?.serverlist?.length) throw new Error('failed to get cm list')
            return json.response.serverlist as CmsList[]
        })

    getCmToConnect = () : Promise<string | undefined> => this.getCms()
        .then(cms => cms.find(el => el.realm === 'steamglobal' && el.type === 'websockets')?.endpoint) //todo

    // private currentSocketEndpoint: string | null //todo to not repeat same endpoint if reconnecting
    private socket: WebSocket | null = null
    #initPromise = null
    socketInit = (): Promise<WebSocket> => { //todo proxy
        if(this.socket && this.socket.readyState === WebSocket.OPEN) return Promise.resolve(this.socket)
        if(this.#initPromise) return this.#initPromise
        this.#initPromise = this.getCmToConnect().then(addr => new Promise((resolve, reject) => {
            this.socket = new WebSocket('wss://'+addr+'/cmsocket/', {
                headers: this.session.env.authProtoHeaders,
                // agent
            }) //todo timeout
            this.socket.once('open', () => {
                this.socket.on('message', this.handleResponseMessage)
                this.sendHelloMessage()
                resolve(this.socket)
                this.#initPromise = null
            })
        }))
        return this.#initPromise
    }

    expectedResponses = new Map
    getResponse = (id: string, timeout: number = 5000) => {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                this.expectedResponses.delete(id)
                reject(new Error('response timed out'))
            }, timeout)
            this.expectedResponses.set(id, message => {
                this.expectedResponses.delete(id)
                clearTimeout(timer)
                resolve(message)
            })
        })
    }

    handleResponseMessage = (msg: Buffer) => {
        const rawEmsg = msg.readUInt32LE(0)
        const emsg = rawEmsg & ~PROTO_MASK
        const headerLength = msg.readUInt32LE(4)
        const headerBuffer = msg.subarray(8, 8 + headerLength)
        const header = CMsgProtoBufHeader.decode(headerBuffer)
        const dataBuffer = msg.subarray(8 + headerLength)
        this.routeResponseMessage(emsg, header, dataBuffer)
    }

    routeResponseMessage(emsg: number, header: CMsgProtoBufHeader, data: Buffer) {
        if(this.routeHandlers.has('every')) this.routeHandlers.get('every')(data, header)
        if(this.routeHandlers.has(emsg)) this.routeHandlers.get(emsg)(data, header)
        else if(this.routeHandlers.has('unhandled')) this.routeHandlers.get('unhandled')(data, header)
    }

    private processMulitMessageResponse = (msg: Buffer, header: CMsgProtoBufHeader) => {
        const data = CMsgMulti.decode(msg)
        let body = data.sizeUnzipped
            ? gunzipSync(data.messageBody)
            : data.messageBody
        while(body.length > 0) {
            const chunkSize = body.readUInt32LE(0)
            this.handleResponseMessage(body.subarray(4, 4 + chunkSize))
            body = body.subarray(4 + chunkSize)
        }
    }

    routeHandlers = new Map<number | 'every' | 'unhandled', (data: Buffer, header: CMsgProtoBufHeader) => void>([
        [EMsg.k_EMsgMulti, this.processMulitMessageResponse]
        //todo: reconnect message handler
    ])
    //todo: message decoder – only one and emits decoded event and can be set from outside
    //todo: message handlers – any number of listeners doing what they want with decoded data?

    sendMessage = async (message: Buffer) => { //todo: emit event optionally with decoded proto data (next arg)
        if(!this.socket || this.socket.readyState !== WebSocket.OPEN) await this.socketInit()
        this.socket.send(message)
    }

    sendProtoMessage = <MSG extends CMsg = CMsg> (
        emsg: EMsg, proto: MSG,
        message: Parameters<MSG['encode']>[0],
        headers?: Parameters<typeof createSteamProtoHeaders>[0]
    ) => {
        const headersDataEncodedBuf = CMsgProtoBufHeader.encode(createSteamProtoHeaders(headers)).finish()
        const headersBuf = Buffer.alloc(8)
        headersBuf.writeUInt32LE((Number(emsg) | PROTO_MASK) >>> 0, 0)
        headersBuf.writeUInt32LE(headersDataEncodedBuf.length, 4)
        const messageDataEncodedBuf = proto.encode(message).finish()
        const finalMessage = Buffer.concat([headersBuf, headersDataEncodedBuf, messageDataEncodedBuf])
        return this.sendMessage(finalMessage)
    }

    sendHelloMessage = () =>
        this.sendProtoMessage(EMsg.k_EMsgClientHello, CMsgClientHello, {protocolVersion: PROTOCOL_VERSION})

}

