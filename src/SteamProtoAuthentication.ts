import {
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

    // GetAuthSessionInfo
    // GenerateAccessTokenForApp
    // EnumerateTokens
    // GetAuthSessionsForAccount
    // MigrateMobileSession
    // RevokeRefreshToken

}
