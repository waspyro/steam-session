import {
    CAuthenticationBeginAuthSessionViaCredentialsRequest,
    CAuthenticationBeginAuthSessionViaCredentialsResponse,
    CAuthenticationGetPasswordRSAPublicKeyRequest,
    CAuthenticationGetPasswordRSAPublicKeyResponse,
    CAuthenticationPollAuthSessionStatusRequest,
    CAuthenticationPollAuthSessionStatusResponse,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
    CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse,
} from "./protots/steammessages_auth.steamclient";
import SteamProtoConversation from "./SteamProtoConversation";

export default class SteamProtoAuthentication extends SteamProtoConversation {

    constructor(request: typeof fetch = fetch) {
        super(request, 'https://api.steampowered.com/IAuthenticationService/')
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