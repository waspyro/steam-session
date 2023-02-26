import {getSuccessfulProtoResponseBuffer} from "./utils";
import {fn} from './types'

export default class SteamProtoConversation {

    constructor(
        private rpc: typeof fetch,
        public readonly baseUrl: string
    ) {}

    url = (interfaceMethod: string, version = 1) => new URL(interfaceMethod + '/v' + version, this.baseUrl)

    protected Conversation = <REQ extends {encode: fn}, RES extends {decode: fn}>
    (requestMethod: 'GET' | 'POST', version = 1, method: string, request: REQ, response: RES) =>
        requestMethod === 'GET'
            ? (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> => {
                const url = this.url(method)
                const encodedData = request.encode(data).finish().toString('base64')
                url.searchParams.set('input_protobuf_encoded', encodedData)
                return this.rpc(url)
                    .then(getSuccessfulProtoResponseBuffer)
                    .then(response.decode)
            }
            : (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> => {
                const url = this.url(method)
                const fd = new FormData()
                fd.set('input_protobuf_encoded', request.encode(data).finish().toString('base64'))
                return this.rpc(url, {body: fd, method: 'POST'})
                    .then(getSuccessfulProtoResponseBuffer)
                    .then(response.decode)
            }
}