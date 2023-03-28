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
    CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
    CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse,
} from "./protots/steammessages_auth.steamclient";
import {CMsg} from "./extra/types";
import {GetDecodedFetchResponse} from "./utils";
import SteamSession from "./SteamSession";

export default class HttpAuthConversation {

    constructor(private session: SteamSession) {}

    public readonly baseUrl = 'https://api.steampowered.com/IAuthenticationService/'
    Url = (interfaceMethod: string, version = 1) => new URL(interfaceMethod + '/v' + version, this.baseUrl)

    protected Conversation = <ACCESS extends void | string = void, REQ extends CMsg = CMsg, RES extends CMsg = CMsg>
    (requestMethod: 'GET' | 'POST', version = 1, method: string, request: REQ, response: RES) =>
        requestMethod === 'GET'
            ? (data: Parameters<REQ['encode']>[0]): Promise<ReturnType<RES['decode']>> => {
                const url = this.Url(method, version)
                const encodedData = request.encode(data).finish().toString('base64')
                url.searchParams.set('input_protobuf_encoded', encodedData)
                return this.session.request(url, {headers: this.session.env.authProtoHeaders})
                    .then(GetDecodedFetchResponse(response))
            }
            : (data: Parameters<REQ['encode']>[0], accessToken: ACCESS): Promise<ReturnType<RES['decode']>> => {
                const url = this.Url(method, version)
                if(typeof accessToken === 'string') url.searchParams.set('access_token', accessToken)
                const fd = new FormData()
                fd.set('input_protobuf_encoded', request.encode(data).finish().toString('base64'))
                return this.session.request(url, {body: fd, method: 'POST', headers: this.session.env.authProtoHeaders})
                    .then(GetDecodedFetchResponse(response))
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

    beginAuthSessionViaQR = this.Conversation(
        'POST', 1, 'BeginAuthSessionViaQR',
        CAuthenticationBeginAuthSessionViaQRRequest,
        CAuthenticationBeginAuthSessionViaQRResponse
    )

    updateAuthSessionWithMobileConfirmation = this.Conversation< //i really tried to do this without generics...
        string,
        typeof CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
        typeof CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse>
    (
        'POST', 1, 'UpdateAuthSessionWithMobileConfirmation',
        CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
        CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse
    )

    generateAccessTokenForApp = this.Conversation(
        'POST', 1, 'GenerateAccessTokenForApp',
        CAuthenticationAccessTokenGenerateForAppRequest,
        CAuthenticationAccessTokenGenerateForAppResponse
    )

    // GetAuthSessionInfo
    // EnumerateTokens
    // GetAuthSessionsForAccount
    // MigrateMobileSession
    // RevokeRefreshToken

}