import {
    CAuthenticationBeginAuthSessionViaCredentialsRequest,
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
    CAuthenticationGetPasswordRSAPublicKeyRequest,
    CAuthenticationGetPasswordRSAPublicKeyResponse,
    CAuthenticationPollAuthSessionStatusRequest,
    CAuthenticationPollAuthSessionStatusResponse,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse,
    EAuthTokenPlatformType
} from "./protots/steammessages_auth.steamclient";
import {Properties} from "protobufjs";

type fn = (...args: any[]) => any

const getSuccessfulResponseBuffer = (response: Response): Promise<Buffer> => {
    if(!response.ok) throw new BadResponseHTTPStatusError(response)
    const protoError = response.headers.get('x-eresult')
    if(protoError !== undefined && protoError !== '1')
        throw new BadResponseProtobuffErrror(response, protoError)
    return response.arrayBuffer().then(Buffer.from)
}

//TODO: generic SteamProtoConversation class
class Authentification {

    constructor(protected request: typeof fetch = fetch) {}

    static readonly urlBase = 'https://api.steampowered.com/IAuthenticationService/'

    static readonly url = (interfaceMethod: string, version = 1) =>
        new URL(interfaceMethod + '/v' + version, Authentification.urlBase)

    private Conversation = <REQ extends {encode: fn}, RES extends {decode: fn}>
    (requestMethod: 'GET' | 'POST', version = 1, method: string, request: REQ, response: RES) =>
        requestMethod === 'GET'
            ? (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> =>
            {
                const url = Authentification.url(method)
                const encodedData = request.encode(data).finish().toString('base64')
                url.searchParams.set('input_protobuf_encoded', encodedData)
                return this.request(url)
                    .then(getSuccessfulResponseBuffer)
                    .then(response.decode)
            }
            : (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> =>
            {
                const url = Authentification.url(method)
                const fd = new FormData()
                fd.set('input_protobuf_encoded', request.encode(data).finish().toString('base64'))
                return this.request(url, {body: fd})
                    .then(getSuccessfulResponseBuffer)
                    .then(response.decode)
            }

    getPasswordRSAPublicKey = this.Conversation(
        'GET', 1, 'GetPasswordRSAPublicKey',
        CAuthenticationGetPasswordRSAPublicKeyRequest,
        CAuthenticationGetPasswordRSAPublicKeyResponse
    )

    beginAuthSessionViaCredentials = this.Conversation(
        'POST', 1, 'BeginAuthSessionViaCredentials',
        CAuthenticationBeginAuthSessionViaCredentialsRequest,
        CAuthenticationBeginAuthSessionViaCredentialsResponse,
    )

    updateAuthSessionWithSteamGuardCode = this.Conversation(
        'POST', 1, 'UpdateAuthSessionWithSteamGuardCode',
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse
    )

    pollAuthSessionStatus = this.Conversation(
        'POST', 1, 'PollAuthSessionStatus',
        CAuthenticationPollAuthSessionStatusRequest,
        CAuthenticationPollAuthSessionStatusResponse
    )

    // BeginAuthSessionViaQR
    // GetAuthSessionInfo
    // UpdateAuthSessionWithMobileConfirmation
    // GenerateAccessTokenForApp
    // EnumerateTokens
    // GetAuthSessionsForAccount
    // MigrateMobileSession
    // RevokeRefreshToken

}

class BadResponse extends Error {
    response
    constructor(response, message = 'Bad Response') {
        super(message);
        this.response = response
    }
}

class BadResponseHTTPStatusError extends BadResponse {
    constructor(response: Response) {
        super(response, 'Response status code does not indicate success: ' +
            response.status + ' ' + response.statusText
        )
    }
}

class BadResponseProtobuffErrror extends BadResponse {
    eresult: number
    constructor(response: Response, eresult: string | number) {
        super(response, 'Protobuff response code does not indicate success ' + eresult);
        this.eresult = Number(eresult)
    }
}

const encodeB64 = message => (message.encode(message).finish() as Buffer).toString('base64')