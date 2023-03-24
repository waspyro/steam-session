import {getSuccessfulResponseJson} from "./utils";
import {CMsg, CmsList} from "./extra/types";
import WebSocket from "ws";
import {EMsg} from "./protots/enums_clientserver";
import {CMsgMulti, CMsgProtoBufHeader} from "./protots/steammessages_base";
import {promisify} from "util";
import Zlib from "zlib";
import {randomBytes} from "crypto";
import {
    CAuthenticationAccessTokenGenerateForAppRequest,
    CAuthenticationAccessTokenGenerateForAppResponse,
    CAuthenticationBeginAuthSessionViaCredentialsRequest,
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
    CAuthenticationBeginAuthSessionViaQRRequest,
    CAuthenticationBeginAuthSessionViaQRResponse,
    CAuthenticationGetPasswordRSAPublicKeyRequest,
    CAuthenticationGetPasswordRSAPublicKeyResponse,
    CAuthenticationPollAuthSessionStatusRequest,
    CAuthenticationPollAuthSessionStatusResponse,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse
} from "./protots/steammessages_auth.steamclient";
import {CMsgClientHello} from "./protots/steammessages_clientserver_login";

const gunzip = promisify(Zlib.gunzip)
const PROTOCOL_VERSION = 65580
const PROTO_MASK = 0x80000000

export default class SteamProtoNonAuthedWsConversation {
    jobs = new Map
    socket: WebSocket

    getCms = () => fetch('https://api.steampowered.com/ISteamDirectory/' +
        'GetCMListForConnect/v0001/?cellid=0&format=json')
        .then(getSuccessfulResponseJson)
        .then(json => {
            if(!json?.response?.serverlist?.length) throw new Error('failed to get cm list')
            return this.getFirstWebSocketAddr(json.response.serverlist as CmsList[])
        })

    getFirstWebSocketAddr = (cms: CmsList[]) : string | undefined =>
        cms.find(el => el.realm === 'steamglobal' && el.type === 'websockets')?.endpoint

    #initPromise = null
    socketInit = (): Promise<WebSocket> => {
        if(this.#initPromise) return this.#initPromise
        this.#initPromise = this.getCms().then(addr => new Promise((resolve, reject) => {
            this.socket = new WebSocket('wss://'+addr+'/cmsocket/')
            this.socket.once('open', () => {
                this.socket.on('message', this.handleResponseMessage)
                this.helloMessage()
                resolve(this.socket)
                this.#initPromise = null
            })
        }))
        return this.#initPromise
    }

    expectedResponses = new Map
    getResponse = (id: string, timeout: number = 5000) => new Promise((resolve, reject) => {
        const timer = setTimeout(reject, timeout)
        this.expectedResponses.set(id, message => {
            clearTimeout(timer)
            resolve(message)
        })
    }).finally(() => this.expectedResponses.delete(id))

    handleResponseMessage = async (msg: Buffer) => {
        const rawEmsg = msg.readUInt32LE(0)
        const emsg = rawEmsg & ~PROTO_MASK
        const headerLength = msg.readUInt32LE(4)
        const headerBuffer = msg.subarray(8, 8 + headerLength)
        const header = CMsgProtoBufHeader.decode(headerBuffer)
        const dataBuffer = msg.subarray(8 + headerLength)
        switch (emsg) {
            case EMsg.k_EMsgMulti: {
                const data = CMsgMulti.decode(dataBuffer)
                let body = data.sizeUnzipped
                    ? await gunzip(data.messageBody)
                    : data.messageBody
                while(body.length > 0) {
                    const chunkSize = body.readUInt32LE(0)
                    this.handleResponseMessage(body.subarray(4, 4 + chunkSize))
                    body = body.subarray(4 + chunkSize)
                }
            } break;

            case EMsg.k_EMsgServiceMethodResponse: {
                const jobId = header.jobidTarget
                if(this.expectedResponses.has(jobId)) this.expectedResponses.get(jobId)([header, dataBuffer])
            } break;

            default: {
                console.log('unknown message', emsg, header, dataBuffer.toString())
            }

        }
    }

    sendMessage = async <MSG extends CMsg = CMsg>
    (emsg: EMsg, proto: MSG, header: CMsgProtoBufHeader, message: Parameters<MSG['encode']>[0]) => {
        const encodedHeaderData = CMsgProtoBufHeader.encode(header).finish()
        const headerBuffer = Buffer.alloc(8)
        headerBuffer.writeUInt32LE((Number(emsg) | PROTO_MASK) >>> 0, 0)
        headerBuffer.writeUInt32LE(encodedHeaderData.length, 4)
        const encodedData = proto.encode(message).finish()
        if(!this.socket || this.socket.readyState !== WebSocket.OPEN) await this.socketInit()
        this.socket.send(Buffer.concat([headerBuffer, encodedHeaderData, encodedData]))
    }

    NonAuthedMessage = <REQ extends CMsg = CMsg, RES extends CMsg = CMsg>
    (version: number, method: string, req: REQ, res: RES) =>
    (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> => {
        const headers = createHeaders({
            jobidSource: createNewJobid(),
            targetJobName: `Authentication.${method}#${version}`
        })
        this.sendMessage(EMsg.k_EMsgServiceMethodCallFromClientNonAuthed, req, headers, data)
        return this.getResponse(headers.jobidSource)
            .then(([header, buffer]) => res.decode(buffer))
    }

    helloMessage = () =>
        this.sendMessage(EMsg.k_EMsgClientHello, CMsgClientHello, emptyHeaders, {protocolVersion: PROTOCOL_VERSION})

    getPasswordRSAPublicKey = this.NonAuthedMessage(
        1, 'GetPasswordRSAPublicKey',
        CAuthenticationGetPasswordRSAPublicKeyRequest,
        CAuthenticationGetPasswordRSAPublicKeyResponse
    )

    beginAuthSessionViaCredentials = this.NonAuthedMessage(
        1, 'BeginAuthSessionViaCredentials',
        CAuthenticationBeginAuthSessionViaCredentialsRequest,
        CAuthenticationBeginAuthSessionViaCredentialsResponse,
    )

    updateAuthSessionWithSteamGuardCode = this.NonAuthedMessage(
        1, 'UpdateAuthSessionWithSteamGuardCode',
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse
    )

    pollAuthSessionStatus = this.NonAuthedMessage(
        1, 'PollAuthSessionStatus',
        CAuthenticationPollAuthSessionStatusRequest,
        CAuthenticationPollAuthSessionStatusResponse
    )

    beginAuthSessionViaQR = this.NonAuthedMessage(
        1, 'BeginAuthSessionViaQR',
        CAuthenticationBeginAuthSessionViaQRRequest,
        CAuthenticationBeginAuthSessionViaQRResponse
    )

    generateAccessTokenForApp = this.NonAuthedMessage(
        1, 'GenerateAccessTokenForApp',
        CAuthenticationAccessTokenGenerateForAppRequest,
        CAuthenticationAccessTokenGenerateForAppResponse
    )

}

const emptyHeaders = {
    steamid: '0',
    clientSessionid: 0,
    routingAppid: 0,
    jobidSource: '0',
    jobidTarget: '0',
    targetJobName: '',
    seqNum: 0,
    eresult: 0,
    errorMessage: '',
    authAccountFlags: 0,
    tokenSource: 0,
    adminSpoofingUser: false,
    transportError: 0,
    messageid: '0',
    publisherGroupId: 0,
    sysid: 0,
    traceTag: '0',
    webapiKeyId: 0,
    isFromExternalSource: false,
    forwardToSysid: [],
    cmSysid: 0,
    launcherType: 0,
    realm: 1,
    timeoutMs: 0,
    debugSource: '',
    debugSourceStringIndex: 0,
    tokenId: '0',
    routingGc: undefined,
    ip: undefined,
    ipV6: undefined
}

const createHeaders = (props: Partial<typeof emptyHeaders>) => Object.assign({}, emptyHeaders, props)

const createNewJobid = () => {
    const jobIdBuffer = randomBytes(8)
    jobIdBuffer[0] &= 0x7f
    return jobIdBuffer.readBigInt64BE(0).toString(10)
}
