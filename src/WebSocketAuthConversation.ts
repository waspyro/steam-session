import {EMsg} from "./protots/enums_clientserver";
import {CMsgProtoBufHeader} from "./protots/steammessages_base";
import {CMsg} from "./extra/types";
import {createNewJobid} from "./utils";
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
import SteamSocket from "./SteamSocket";
import SteamSession from "./SteamSession";

export default class WebSocketSteamAuthConversation {
    ws: SteamSocket
    constructor(private session: SteamSession) {
        this.ws = session.ws
        this.ws.routeHandlers.set(EMsg.k_EMsgServiceMethodResponse, this.processNonAuthedMessageResponse)
    }

    processNonAuthedMessageResponse = (message: Buffer, header: CMsgProtoBufHeader) => {
        console.log('got response')
        this.ws.expectedResponses.get(header.jobidTarget)?.(message)
    }

    NonAuthedProtoMessage = <REQ extends CMsg, RES extends CMsg>(
        version: number, method: string, req: REQ, res: RES
    ) => (
        data: Parameters<REQ['encode']>[0]
    ): Promise<ReturnType<RES['decode']>> => {
        const job = createNewJobid()
        this.ws.sendProtoMessage(EMsg.k_EMsgServiceMethodCallFromClientNonAuthed, req, data, {
            jobidSource: job,
            targetJobName: `Authentication.${method}#${version}`
        })
        return this.ws.getResponse(job).then(res.decode)
    }

    getPasswordRSAPublicKey = this.NonAuthedProtoMessage(
        1, 'GetPasswordRSAPublicKey',
        CAuthenticationGetPasswordRSAPublicKeyRequest,
        CAuthenticationGetPasswordRSAPublicKeyResponse
    )

    beginAuthSessionViaCredentials = this.NonAuthedProtoMessage(
        1, 'BeginAuthSessionViaCredentials',
        CAuthenticationBeginAuthSessionViaCredentialsRequest,
        CAuthenticationBeginAuthSessionViaCredentialsResponse,
    )

    updateAuthSessionWithSteamGuardCode = this.NonAuthedProtoMessage(
        1, 'UpdateAuthSessionWithSteamGuardCode',
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
        CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse
    )

    pollAuthSessionStatus = this.NonAuthedProtoMessage(
        1, 'PollAuthSessionStatus',
        CAuthenticationPollAuthSessionStatusRequest,
        CAuthenticationPollAuthSessionStatusResponse
    )

    beginAuthSessionViaQR = this.NonAuthedProtoMessage(
        1, 'BeginAuthSessionViaQR',
        CAuthenticationBeginAuthSessionViaQRRequest,
        CAuthenticationBeginAuthSessionViaQRResponse
    )

    generateAccessTokenForApp = this.NonAuthedProtoMessage(
        1, 'GenerateAccessTokenForApp',
        CAuthenticationAccessTokenGenerateForAppRequest,
        CAuthenticationAccessTokenGenerateForAppResponse
    )

}