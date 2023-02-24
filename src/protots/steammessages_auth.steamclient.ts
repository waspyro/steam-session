/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ESessionPersistence, eSessionPersistenceFromJSON, eSessionPersistenceToJSON } from "./enums";
import { CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export enum EAuthTokenPlatformType {
  k_EAuthTokenPlatformType_Unknown = 0,
  k_EAuthTokenPlatformType_SteamClient = 1,
  k_EAuthTokenPlatformType_WebBrowser = 2,
  k_EAuthTokenPlatformType_MobileApp = 3,
  UNRECOGNIZED = -1,
}

export function eAuthTokenPlatformTypeFromJSON(object: any): EAuthTokenPlatformType {
  switch (object) {
    case 0:
    case "k_EAuthTokenPlatformType_Unknown":
      return EAuthTokenPlatformType.k_EAuthTokenPlatformType_Unknown;
    case 1:
    case "k_EAuthTokenPlatformType_SteamClient":
      return EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient;
    case 2:
    case "k_EAuthTokenPlatformType_WebBrowser":
      return EAuthTokenPlatformType.k_EAuthTokenPlatformType_WebBrowser;
    case 3:
    case "k_EAuthTokenPlatformType_MobileApp":
      return EAuthTokenPlatformType.k_EAuthTokenPlatformType_MobileApp;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAuthTokenPlatformType.UNRECOGNIZED;
  }
}

export function eAuthTokenPlatformTypeToJSON(object: EAuthTokenPlatformType): string {
  switch (object) {
    case EAuthTokenPlatformType.k_EAuthTokenPlatformType_Unknown:
      return "k_EAuthTokenPlatformType_Unknown";
    case EAuthTokenPlatformType.k_EAuthTokenPlatformType_SteamClient:
      return "k_EAuthTokenPlatformType_SteamClient";
    case EAuthTokenPlatformType.k_EAuthTokenPlatformType_WebBrowser:
      return "k_EAuthTokenPlatformType_WebBrowser";
    case EAuthTokenPlatformType.k_EAuthTokenPlatformType_MobileApp:
      return "k_EAuthTokenPlatformType_MobileApp";
    case EAuthTokenPlatformType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAuthSessionGuardType {
  k_EAuthSessionGuardType_Unknown = 0,
  k_EAuthSessionGuardType_None = 1,
  k_EAuthSessionGuardType_EmailCode = 2,
  k_EAuthSessionGuardType_DeviceCode = 3,
  k_EAuthSessionGuardType_DeviceConfirmation = 4,
  k_EAuthSessionGuardType_EmailConfirmation = 5,
  k_EAuthSessionGuardType_MachineToken = 6,
  UNRECOGNIZED = -1,
}

export function eAuthSessionGuardTypeFromJSON(object: any): EAuthSessionGuardType {
  switch (object) {
    case 0:
    case "k_EAuthSessionGuardType_Unknown":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_Unknown;
    case 1:
    case "k_EAuthSessionGuardType_None":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_None;
    case 2:
    case "k_EAuthSessionGuardType_EmailCode":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode;
    case 3:
    case "k_EAuthSessionGuardType_DeviceCode":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode;
    case 4:
    case "k_EAuthSessionGuardType_DeviceConfirmation":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation;
    case 5:
    case "k_EAuthSessionGuardType_EmailConfirmation":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation;
    case 6:
    case "k_EAuthSessionGuardType_MachineToken":
      return EAuthSessionGuardType.k_EAuthSessionGuardType_MachineToken;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAuthSessionGuardType.UNRECOGNIZED;
  }
}

export function eAuthSessionGuardTypeToJSON(object: EAuthSessionGuardType): string {
  switch (object) {
    case EAuthSessionGuardType.k_EAuthSessionGuardType_Unknown:
      return "k_EAuthSessionGuardType_Unknown";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_None:
      return "k_EAuthSessionGuardType_None";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode:
      return "k_EAuthSessionGuardType_EmailCode";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode:
      return "k_EAuthSessionGuardType_DeviceCode";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation:
      return "k_EAuthSessionGuardType_DeviceConfirmation";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation:
      return "k_EAuthSessionGuardType_EmailConfirmation";
    case EAuthSessionGuardType.k_EAuthSessionGuardType_MachineToken:
      return "k_EAuthSessionGuardType_MachineToken";
    case EAuthSessionGuardType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAuthSessionSecurityHistory {
  k_EAuthSessionSecurityHistory_Invalid = 0,
  k_EAuthSessionSecurityHistory_UsedPreviously = 1,
  k_EAuthSessionSecurityHistory_NoPriorHistory = 2,
  UNRECOGNIZED = -1,
}

export function eAuthSessionSecurityHistoryFromJSON(object: any): EAuthSessionSecurityHistory {
  switch (object) {
    case 0:
    case "k_EAuthSessionSecurityHistory_Invalid":
      return EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_Invalid;
    case 1:
    case "k_EAuthSessionSecurityHistory_UsedPreviously":
      return EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_UsedPreviously;
    case 2:
    case "k_EAuthSessionSecurityHistory_NoPriorHistory":
      return EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_NoPriorHistory;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAuthSessionSecurityHistory.UNRECOGNIZED;
  }
}

export function eAuthSessionSecurityHistoryToJSON(object: EAuthSessionSecurityHistory): string {
  switch (object) {
    case EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_Invalid:
      return "k_EAuthSessionSecurityHistory_Invalid";
    case EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_UsedPreviously:
      return "k_EAuthSessionSecurityHistory_UsedPreviously";
    case EAuthSessionSecurityHistory.k_EAuthSessionSecurityHistory_NoPriorHistory:
      return "k_EAuthSessionSecurityHistory_NoPriorHistory";
    case EAuthSessionSecurityHistory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAuthTokenRevokeAction {
  k_EAuthTokenRevokeLogout = 0,
  k_EAuthTokenRevokePermanent = 1,
  k_EAuthTokenRevokeReplaced = 2,
  k_EAuthTokenRevokeSupport = 3,
  k_EAuthTokenRevokeConsume = 4,
  UNRECOGNIZED = -1,
}

export function eAuthTokenRevokeActionFromJSON(object: any): EAuthTokenRevokeAction {
  switch (object) {
    case 0:
    case "k_EAuthTokenRevokeLogout":
      return EAuthTokenRevokeAction.k_EAuthTokenRevokeLogout;
    case 1:
    case "k_EAuthTokenRevokePermanent":
      return EAuthTokenRevokeAction.k_EAuthTokenRevokePermanent;
    case 2:
    case "k_EAuthTokenRevokeReplaced":
      return EAuthTokenRevokeAction.k_EAuthTokenRevokeReplaced;
    case 3:
    case "k_EAuthTokenRevokeSupport":
      return EAuthTokenRevokeAction.k_EAuthTokenRevokeSupport;
    case 4:
    case "k_EAuthTokenRevokeConsume":
      return EAuthTokenRevokeAction.k_EAuthTokenRevokeConsume;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAuthTokenRevokeAction.UNRECOGNIZED;
  }
}

export function eAuthTokenRevokeActionToJSON(object: EAuthTokenRevokeAction): string {
  switch (object) {
    case EAuthTokenRevokeAction.k_EAuthTokenRevokeLogout:
      return "k_EAuthTokenRevokeLogout";
    case EAuthTokenRevokeAction.k_EAuthTokenRevokePermanent:
      return "k_EAuthTokenRevokePermanent";
    case EAuthTokenRevokeAction.k_EAuthTokenRevokeReplaced:
      return "k_EAuthTokenRevokeReplaced";
    case EAuthTokenRevokeAction.k_EAuthTokenRevokeSupport:
      return "k_EAuthTokenRevokeSupport";
    case EAuthTokenRevokeAction.k_EAuthTokenRevokeConsume:
      return "k_EAuthTokenRevokeConsume";
    case EAuthTokenRevokeAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAuthTokenState {
  k_EAuthTokenState_Invalid = 0,
  k_EAuthTokenState_New = 1,
  k_EAuthTokenState_Confirmed = 2,
  k_EAuthTokenState_Issued = 3,
  k_EAuthTokenState_Denied = 4,
  k_EAuthTokenState_LoggedOut = 5,
  k_EAuthTokenState_Consumed = 6,
  k_EAuthTokenState_Revoked = 99,
  UNRECOGNIZED = -1,
}

export function eAuthTokenStateFromJSON(object: any): EAuthTokenState {
  switch (object) {
    case 0:
    case "k_EAuthTokenState_Invalid":
      return EAuthTokenState.k_EAuthTokenState_Invalid;
    case 1:
    case "k_EAuthTokenState_New":
      return EAuthTokenState.k_EAuthTokenState_New;
    case 2:
    case "k_EAuthTokenState_Confirmed":
      return EAuthTokenState.k_EAuthTokenState_Confirmed;
    case 3:
    case "k_EAuthTokenState_Issued":
      return EAuthTokenState.k_EAuthTokenState_Issued;
    case 4:
    case "k_EAuthTokenState_Denied":
      return EAuthTokenState.k_EAuthTokenState_Denied;
    case 5:
    case "k_EAuthTokenState_LoggedOut":
      return EAuthTokenState.k_EAuthTokenState_LoggedOut;
    case 6:
    case "k_EAuthTokenState_Consumed":
      return EAuthTokenState.k_EAuthTokenState_Consumed;
    case 99:
    case "k_EAuthTokenState_Revoked":
      return EAuthTokenState.k_EAuthTokenState_Revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAuthTokenState.UNRECOGNIZED;
  }
}

export function eAuthTokenStateToJSON(object: EAuthTokenState): string {
  switch (object) {
    case EAuthTokenState.k_EAuthTokenState_Invalid:
      return "k_EAuthTokenState_Invalid";
    case EAuthTokenState.k_EAuthTokenState_New:
      return "k_EAuthTokenState_New";
    case EAuthTokenState.k_EAuthTokenState_Confirmed:
      return "k_EAuthTokenState_Confirmed";
    case EAuthTokenState.k_EAuthTokenState_Issued:
      return "k_EAuthTokenState_Issued";
    case EAuthTokenState.k_EAuthTokenState_Denied:
      return "k_EAuthTokenState_Denied";
    case EAuthTokenState.k_EAuthTokenState_LoggedOut:
      return "k_EAuthTokenState_LoggedOut";
    case EAuthTokenState.k_EAuthTokenState_Consumed:
      return "k_EAuthTokenState_Consumed";
    case EAuthTokenState.k_EAuthTokenState_Revoked:
      return "k_EAuthTokenState_Revoked";
    case EAuthTokenState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CAuthenticationGetPasswordRSAPublicKeyRequest {
  accountName: string;
}

export interface CAuthenticationGetPasswordRSAPublicKeyResponse {
  publickeyMod: string;
  publickeyExp: string;
  timestamp: number;
}

export interface CAuthenticationDeviceDetails {
  deviceFriendlyName: string;
  platformType: EAuthTokenPlatformType;
  osType: number;
  gamingDeviceType: number;
}

export interface CAuthenticationBeginAuthSessionViaQRRequest {
  deviceFriendlyName: string;
  platformType: EAuthTokenPlatformType;
  deviceDetails: CAuthenticationDeviceDetails | undefined;
  websiteId: string;
}

export interface CAuthenticationAllowedConfirmation {
  confirmationType: EAuthSessionGuardType;
  associatedMessage: string;
}

export interface CAuthenticationBeginAuthSessionViaQRResponse {
  clientId: number;
  challengeUrl: string;
  requestId: Buffer;
  interval: number;
  allowedConfirmations: CAuthenticationAllowedConfirmation[];
  version: number;
}

export interface CAuthenticationBeginAuthSessionViaCredentialsRequest {
  deviceFriendlyName: string;
  accountName: string;
  encryptedPassword: string;
  encryptionTimestamp: number;
  rememberLogin: boolean;
  platformType: EAuthTokenPlatformType;
  persistence: ESessionPersistence;
  websiteId: string;
  deviceDetails: CAuthenticationDeviceDetails | undefined;
  guardData: string;
  language: number;
}

export interface CAuthenticationBeginAuthSessionViaCredentialsResponse {
  clientId: number;
  requestId: Buffer;
  interval: number;
  allowedConfirmations: CAuthenticationAllowedConfirmation[];
  steamid: number;
  weakToken: string;
  agreementSessionUrl: string;
  extendedErrorMessage: string;
}

export interface CAuthenticationPollAuthSessionStatusRequest {
  clientId: number;
  requestId: Buffer;
  tokenToRevoke: number;
}

export interface CAuthenticationPollAuthSessionStatusResponse {
  newClientId: number;
  newChallengeUrl: string;
  refreshToken: string;
  accessToken: string;
  hadRemoteInteraction: boolean;
  accountName: string;
  newGuardData: string;
  agreementSessionUrl: string;
}

export interface CAuthenticationGetAuthSessionInfoRequest {
  clientId: number;
}

export interface CAuthenticationGetAuthSessionInfoResponse {
  ip: string;
  geoloc: string;
  city: string;
  state: string;
  country: string;
  platformType: EAuthTokenPlatformType;
  deviceFriendlyName: string;
  version: number;
  loginHistory: EAuthSessionSecurityHistory;
  requestorLocationMismatch: boolean;
  highUsageLogin: boolean;
  requestedPersistence: ESessionPersistence;
}

export interface CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
  version: number;
  clientId: number;
  steamid: number;
  signature: Buffer;
  confirm: boolean;
  persistence: ESessionPersistence;
}

export interface CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
}

export interface CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
  clientId: number;
  steamid: number;
  code: string;
  codeType: EAuthSessionGuardType;
}

export interface CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
  agreementSessionUrl: string;
}

export interface CAuthenticationAccessTokenGenerateForAppRequest {
  refreshToken: string;
  steamid: number;
}

export interface CAuthenticationAccessTokenGenerateForAppResponse {
  accessToken: string;
}

export interface CAuthenticationRefreshTokenEnumerateRequest {
}

export interface CAuthenticationRefreshTokenEnumerateResponse {
  refreshTokens: CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription[];
  requestingToken: number;
}

export interface CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
  time: number;
  ip: CMsgIPAddress | undefined;
  locale: string;
  country: string;
  state: string;
  city: string;
}

export interface CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
  tokenId: number;
  tokenDescription: string;
  timeUpdated: number;
  platformType: EAuthTokenPlatformType;
  loggedIn: boolean;
  osPlatform: number;
  authType: number;
  gamingDeviceType: number;
  firstSeen: CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent | undefined;
  lastSeen: CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent | undefined;
  osType: number;
}

export interface CAuthenticationGetAuthSessionsForAccountRequest {
}

export interface CAuthenticationGetAuthSessionsForAccountResponse {
  clientIds: number[];
}

export interface CAuthenticationMigrateMobileSessionRequest {
  steamid: number;
  token: string;
  signature: string;
}

export interface CAuthenticationMigrateMobileSessionResponse {
  refreshToken: string;
  accessToken: string;
}

export interface CAuthenticationRefreshTokenRevokeRequest {
  tokenId: number;
  steamid: number;
  revokeAction: EAuthTokenRevokeAction;
  signature: Buffer;
}

export interface CAuthenticationRefreshTokenRevokeResponse {
}

export interface CAuthenticationSupportQueryRefreshTokensByAccountRequest {
  steamid: number;
  includeRevokedTokens: boolean;
}

export interface CSupportRefreshTokenDescription {
  tokenId: number;
  tokenDescription: string;
  timeUpdated: number;
  platformType: EAuthTokenPlatformType;
  tokenState: EAuthTokenState;
  ownerSteamid: number;
  osPlatform: number;
  osType: number;
  authType: number;
  gamingDeviceType: number;
  firstSeen: CSupportRefreshTokenDescription_TokenUsageEvent | undefined;
  lastSeen: CSupportRefreshTokenDescription_TokenUsageEvent | undefined;
}

export interface CSupportRefreshTokenDescription_TokenUsageEvent {
  time: number;
  ip: CMsgIPAddress | undefined;
  country: string;
  state: string;
  city: string;
}

export interface CAuthenticationSupportQueryRefreshTokensByAccountResponse {
  refreshTokens: CSupportRefreshTokenDescription[];
  lastTokenReset: number;
}

export interface CAuthenticationSupportQueryRefreshTokenByIDRequest {
  tokenId: number;
}

export interface CAuthenticationSupportQueryRefreshTokenByIDResponse {
  refreshTokens: CSupportRefreshTokenDescription[];
}

export interface CAuthenticationSupportRevokeTokenRequest {
  tokenId: number;
  steamid: number;
}

export interface CAuthenticationSupportRevokeTokenResponse {
}

export interface CAuthenticationSupportGetTokenHistoryRequest {
  tokenId: number;
}

export interface CSupportRefreshTokenAudit {
  action: number;
  time: number;
  ip: CMsgIPAddress | undefined;
  actor: number;
}

export interface CAuthenticationSupportGetTokenHistoryResponse {
  history: CSupportRefreshTokenAudit[];
}

export interface CCloudGamingCreateNonceRequest {
  platform: string;
  appid: number;
}

export interface CCloudGamingCreateNonceResponse {
  nonce: string;
  expiry: number;
}

export interface CCloudGamingGetTimeRemainingRequest {
  platform: string;
  appidList: number[];
}

export interface CCloudGamingTimeRemaining {
  appid: number;
  minutesRemaining: number;
}

export interface CCloudGamingGetTimeRemainingResponse {
  entries: CCloudGamingTimeRemaining[];
}

function createBaseCAuthenticationGetPasswordRSAPublicKeyRequest(): CAuthenticationGetPasswordRSAPublicKeyRequest {
  return { accountName: "" };
}

export const CAuthenticationGetPasswordRSAPublicKeyRequest = {
  encode(message: CAuthenticationGetPasswordRSAPublicKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountName !== "") {
      writer.uint32(10).string(message.accountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetPasswordRSAPublicKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetPasswordRSAPublicKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationGetPasswordRSAPublicKeyRequest {
    return { accountName: isSet(object.accountName) ? String(object.accountName) : "" };
  },

  toJSON(message: CAuthenticationGetPasswordRSAPublicKeyRequest): unknown {
    const obj: any = {};
    message.accountName !== undefined && (obj.accountName = message.accountName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetPasswordRSAPublicKeyRequest>, I>>(
    base?: I,
  ): CAuthenticationGetPasswordRSAPublicKeyRequest {
    return CAuthenticationGetPasswordRSAPublicKeyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetPasswordRSAPublicKeyRequest>, I>>(
    object: I,
  ): CAuthenticationGetPasswordRSAPublicKeyRequest {
    const message = createBaseCAuthenticationGetPasswordRSAPublicKeyRequest();
    message.accountName = object.accountName ?? "";
    return message;
  },
};

function createBaseCAuthenticationGetPasswordRSAPublicKeyResponse(): CAuthenticationGetPasswordRSAPublicKeyResponse {
  return { publickeyMod: "", publickeyExp: "", timestamp: 0 };
}

export const CAuthenticationGetPasswordRSAPublicKeyResponse = {
  encode(
    message: CAuthenticationGetPasswordRSAPublicKeyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publickeyMod !== "") {
      writer.uint32(10).string(message.publickeyMod);
    }
    if (message.publickeyExp !== "") {
      writer.uint32(18).string(message.publickeyExp);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetPasswordRSAPublicKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetPasswordRSAPublicKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publickeyMod = reader.string();
          break;
        case 2:
          message.publickeyExp = reader.string();
          break;
        case 3:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationGetPasswordRSAPublicKeyResponse {
    return {
      publickeyMod: isSet(object.publickeyMod) ? String(object.publickeyMod) : "",
      publickeyExp: isSet(object.publickeyExp) ? String(object.publickeyExp) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CAuthenticationGetPasswordRSAPublicKeyResponse): unknown {
    const obj: any = {};
    message.publickeyMod !== undefined && (obj.publickeyMod = message.publickeyMod);
    message.publickeyExp !== undefined && (obj.publickeyExp = message.publickeyExp);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetPasswordRSAPublicKeyResponse>, I>>(
    base?: I,
  ): CAuthenticationGetPasswordRSAPublicKeyResponse {
    return CAuthenticationGetPasswordRSAPublicKeyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetPasswordRSAPublicKeyResponse>, I>>(
    object: I,
  ): CAuthenticationGetPasswordRSAPublicKeyResponse {
    const message = createBaseCAuthenticationGetPasswordRSAPublicKeyResponse();
    message.publickeyMod = object.publickeyMod ?? "";
    message.publickeyExp = object.publickeyExp ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCAuthenticationDeviceDetails(): CAuthenticationDeviceDetails {
  return { deviceFriendlyName: "", platformType: 0, osType: 0, gamingDeviceType: 0 };
}

export const CAuthenticationDeviceDetails = {
  encode(message: CAuthenticationDeviceDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceFriendlyName !== "") {
      writer.uint32(10).string(message.deviceFriendlyName);
    }
    if (message.platformType !== 0) {
      writer.uint32(16).int32(message.platformType);
    }
    if (message.osType !== 0) {
      writer.uint32(24).int32(message.osType);
    }
    if (message.gamingDeviceType !== 0) {
      writer.uint32(32).uint32(message.gamingDeviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationDeviceDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationDeviceDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceFriendlyName = reader.string();
          break;
        case 2:
          message.platformType = reader.int32() as any;
          break;
        case 3:
          message.osType = reader.int32();
          break;
        case 4:
          message.gamingDeviceType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationDeviceDetails {
    return {
      deviceFriendlyName: isSet(object.deviceFriendlyName) ? String(object.deviceFriendlyName) : "",
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      osType: isSet(object.osType) ? Number(object.osType) : 0,
      gamingDeviceType: isSet(object.gamingDeviceType) ? Number(object.gamingDeviceType) : 0,
    };
  },

  toJSON(message: CAuthenticationDeviceDetails): unknown {
    const obj: any = {};
    message.deviceFriendlyName !== undefined && (obj.deviceFriendlyName = message.deviceFriendlyName);
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    message.gamingDeviceType !== undefined && (obj.gamingDeviceType = Math.round(message.gamingDeviceType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationDeviceDetails>, I>>(base?: I): CAuthenticationDeviceDetails {
    return CAuthenticationDeviceDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationDeviceDetails>, I>>(object: I): CAuthenticationDeviceDetails {
    const message = createBaseCAuthenticationDeviceDetails();
    message.deviceFriendlyName = object.deviceFriendlyName ?? "";
    message.platformType = object.platformType ?? 0;
    message.osType = object.osType ?? 0;
    message.gamingDeviceType = object.gamingDeviceType ?? 0;
    return message;
  },
};

function createBaseCAuthenticationBeginAuthSessionViaQRRequest(): CAuthenticationBeginAuthSessionViaQRRequest {
  return { deviceFriendlyName: "", platformType: 0, deviceDetails: undefined, websiteId: "" };
}

export const CAuthenticationBeginAuthSessionViaQRRequest = {
  encode(message: CAuthenticationBeginAuthSessionViaQRRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceFriendlyName !== "") {
      writer.uint32(10).string(message.deviceFriendlyName);
    }
    if (message.platformType !== 0) {
      writer.uint32(16).int32(message.platformType);
    }
    if (message.deviceDetails !== undefined) {
      CAuthenticationDeviceDetails.encode(message.deviceDetails, writer.uint32(26).fork()).ldelim();
    }
    if (message.websiteId !== "") {
      writer.uint32(34).string(message.websiteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationBeginAuthSessionViaQRRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationBeginAuthSessionViaQRRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceFriendlyName = reader.string();
          break;
        case 2:
          message.platformType = reader.int32() as any;
          break;
        case 3:
          message.deviceDetails = CAuthenticationDeviceDetails.decode(reader, reader.uint32());
          break;
        case 4:
          message.websiteId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationBeginAuthSessionViaQRRequest {
    return {
      deviceFriendlyName: isSet(object.deviceFriendlyName) ? String(object.deviceFriendlyName) : "",
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      deviceDetails: isSet(object.deviceDetails)
        ? CAuthenticationDeviceDetails.fromJSON(object.deviceDetails)
        : undefined,
      websiteId: isSet(object.websiteId) ? String(object.websiteId) : "",
    };
  },

  toJSON(message: CAuthenticationBeginAuthSessionViaQRRequest): unknown {
    const obj: any = {};
    message.deviceFriendlyName !== undefined && (obj.deviceFriendlyName = message.deviceFriendlyName);
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.deviceDetails !== undefined && (obj.deviceDetails = message.deviceDetails
      ? CAuthenticationDeviceDetails.toJSON(message.deviceDetails)
      : undefined);
    message.websiteId !== undefined && (obj.websiteId = message.websiteId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaQRRequest>, I>>(
    base?: I,
  ): CAuthenticationBeginAuthSessionViaQRRequest {
    return CAuthenticationBeginAuthSessionViaQRRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaQRRequest>, I>>(
    object: I,
  ): CAuthenticationBeginAuthSessionViaQRRequest {
    const message = createBaseCAuthenticationBeginAuthSessionViaQRRequest();
    message.deviceFriendlyName = object.deviceFriendlyName ?? "";
    message.platformType = object.platformType ?? 0;
    message.deviceDetails = (object.deviceDetails !== undefined && object.deviceDetails !== null)
      ? CAuthenticationDeviceDetails.fromPartial(object.deviceDetails)
      : undefined;
    message.websiteId = object.websiteId ?? "";
    return message;
  },
};

function createBaseCAuthenticationAllowedConfirmation(): CAuthenticationAllowedConfirmation {
  return { confirmationType: 0, associatedMessage: "" };
}

export const CAuthenticationAllowedConfirmation = {
  encode(message: CAuthenticationAllowedConfirmation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirmationType !== 0) {
      writer.uint32(8).int32(message.confirmationType);
    }
    if (message.associatedMessage !== "") {
      writer.uint32(18).string(message.associatedMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationAllowedConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationAllowedConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirmationType = reader.int32() as any;
          break;
        case 2:
          message.associatedMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationAllowedConfirmation {
    return {
      confirmationType: isSet(object.confirmationType) ? eAuthSessionGuardTypeFromJSON(object.confirmationType) : 0,
      associatedMessage: isSet(object.associatedMessage) ? String(object.associatedMessage) : "",
    };
  },

  toJSON(message: CAuthenticationAllowedConfirmation): unknown {
    const obj: any = {};
    message.confirmationType !== undefined &&
      (obj.confirmationType = eAuthSessionGuardTypeToJSON(message.confirmationType));
    message.associatedMessage !== undefined && (obj.associatedMessage = message.associatedMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationAllowedConfirmation>, I>>(
    base?: I,
  ): CAuthenticationAllowedConfirmation {
    return CAuthenticationAllowedConfirmation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationAllowedConfirmation>, I>>(
    object: I,
  ): CAuthenticationAllowedConfirmation {
    const message = createBaseCAuthenticationAllowedConfirmation();
    message.confirmationType = object.confirmationType ?? 0;
    message.associatedMessage = object.associatedMessage ?? "";
    return message;
  },
};

function createBaseCAuthenticationBeginAuthSessionViaQRResponse(): CAuthenticationBeginAuthSessionViaQRResponse {
  return {
    clientId: 0,
    challengeUrl: "",
    requestId: Buffer.alloc(0),
    interval: 0,
    allowedConfirmations: [],
    version: 0,
  };
}

export const CAuthenticationBeginAuthSessionViaQRResponse = {
  encode(message: CAuthenticationBeginAuthSessionViaQRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.challengeUrl !== "") {
      writer.uint32(18).string(message.challengeUrl);
    }
    if (message.requestId.length !== 0) {
      writer.uint32(26).bytes(message.requestId);
    }
    if (message.interval !== 0) {
      writer.uint32(37).float(message.interval);
    }
    for (const v of message.allowedConfirmations) {
      CAuthenticationAllowedConfirmation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(48).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationBeginAuthSessionViaQRResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationBeginAuthSessionViaQRResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.challengeUrl = reader.string();
          break;
        case 3:
          message.requestId = reader.bytes() as Buffer;
          break;
        case 4:
          message.interval = reader.float();
          break;
        case 5:
          message.allowedConfirmations.push(CAuthenticationAllowedConfirmation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.version = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationBeginAuthSessionViaQRResponse {
    return {
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      challengeUrl: isSet(object.challengeUrl) ? String(object.challengeUrl) : "",
      requestId: isSet(object.requestId) ? Buffer.from(bytesFromBase64(object.requestId)) : Buffer.alloc(0),
      interval: isSet(object.interval) ? Number(object.interval) : 0,
      allowedConfirmations: Array.isArray(object?.allowedConfirmations)
        ? object.allowedConfirmations.map((e: any) => CAuthenticationAllowedConfirmation.fromJSON(e))
        : [],
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CAuthenticationBeginAuthSessionViaQRResponse): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.challengeUrl !== undefined && (obj.challengeUrl = message.challengeUrl);
    message.requestId !== undefined &&
      (obj.requestId = base64FromBytes(message.requestId !== undefined ? message.requestId : Buffer.alloc(0)));
    message.interval !== undefined && (obj.interval = message.interval);
    if (message.allowedConfirmations) {
      obj.allowedConfirmations = message.allowedConfirmations.map((e) =>
        e ? CAuthenticationAllowedConfirmation.toJSON(e) : undefined
      );
    } else {
      obj.allowedConfirmations = [];
    }
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaQRResponse>, I>>(
    base?: I,
  ): CAuthenticationBeginAuthSessionViaQRResponse {
    return CAuthenticationBeginAuthSessionViaQRResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaQRResponse>, I>>(
    object: I,
  ): CAuthenticationBeginAuthSessionViaQRResponse {
    const message = createBaseCAuthenticationBeginAuthSessionViaQRResponse();
    message.clientId = object.clientId ?? 0;
    message.challengeUrl = object.challengeUrl ?? "";
    message.requestId = object.requestId ?? Buffer.alloc(0);
    message.interval = object.interval ?? 0;
    message.allowedConfirmations =
      object.allowedConfirmations?.map((e) => CAuthenticationAllowedConfirmation.fromPartial(e)) || [];
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCAuthenticationBeginAuthSessionViaCredentialsRequest(): CAuthenticationBeginAuthSessionViaCredentialsRequest {
  return {
    deviceFriendlyName: "",
    accountName: "",
    encryptedPassword: "",
    encryptionTimestamp: 0,
    rememberLogin: false,
    platformType: 0,
    persistence: 0,
    websiteId: "",
    deviceDetails: undefined,
    guardData: "",
    language: 0,
  };
}

export const CAuthenticationBeginAuthSessionViaCredentialsRequest = {
  encode(
    message: CAuthenticationBeginAuthSessionViaCredentialsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deviceFriendlyName !== "") {
      writer.uint32(10).string(message.deviceFriendlyName);
    }
    if (message.accountName !== "") {
      writer.uint32(18).string(message.accountName);
    }
    if (message.encryptedPassword !== "") {
      writer.uint32(26).string(message.encryptedPassword);
    }
    if (message.encryptionTimestamp !== 0) {
      writer.uint32(32).uint64(message.encryptionTimestamp);
    }
    if (message.rememberLogin === true) {
      writer.uint32(40).bool(message.rememberLogin);
    }
    if (message.platformType !== 0) {
      writer.uint32(48).int32(message.platformType);
    }
    if (message.persistence !== 0) {
      writer.uint32(56).int32(message.persistence);
    }
    if (message.websiteId !== "") {
      writer.uint32(66).string(message.websiteId);
    }
    if (message.deviceDetails !== undefined) {
      CAuthenticationDeviceDetails.encode(message.deviceDetails, writer.uint32(74).fork()).ldelim();
    }
    if (message.guardData !== "") {
      writer.uint32(82).string(message.guardData);
    }
    if (message.language !== 0) {
      writer.uint32(88).uint32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationBeginAuthSessionViaCredentialsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationBeginAuthSessionViaCredentialsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceFriendlyName = reader.string();
          break;
        case 2:
          message.accountName = reader.string();
          break;
        case 3:
          message.encryptedPassword = reader.string();
          break;
        case 4:
          message.encryptionTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.rememberLogin = reader.bool();
          break;
        case 6:
          message.platformType = reader.int32() as any;
          break;
        case 7:
          message.persistence = reader.int32() as any;
          break;
        case 8:
          message.websiteId = reader.string();
          break;
        case 9:
          message.deviceDetails = CAuthenticationDeviceDetails.decode(reader, reader.uint32());
          break;
        case 10:
          message.guardData = reader.string();
          break;
        case 11:
          message.language = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationBeginAuthSessionViaCredentialsRequest {
    return {
      deviceFriendlyName: isSet(object.deviceFriendlyName) ? String(object.deviceFriendlyName) : "",
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      encryptedPassword: isSet(object.encryptedPassword) ? String(object.encryptedPassword) : "",
      encryptionTimestamp: isSet(object.encryptionTimestamp) ? Number(object.encryptionTimestamp) : 0,
      rememberLogin: isSet(object.rememberLogin) ? Boolean(object.rememberLogin) : false,
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      persistence: isSet(object.persistence) ? eSessionPersistenceFromJSON(object.persistence) : 0,
      websiteId: isSet(object.websiteId) ? String(object.websiteId) : "",
      deviceDetails: isSet(object.deviceDetails)
        ? CAuthenticationDeviceDetails.fromJSON(object.deviceDetails)
        : undefined,
      guardData: isSet(object.guardData) ? String(object.guardData) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CAuthenticationBeginAuthSessionViaCredentialsRequest): unknown {
    const obj: any = {};
    message.deviceFriendlyName !== undefined && (obj.deviceFriendlyName = message.deviceFriendlyName);
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.encryptedPassword !== undefined && (obj.encryptedPassword = message.encryptedPassword);
    message.encryptionTimestamp !== undefined && (obj.encryptionTimestamp = Math.round(message.encryptionTimestamp));
    message.rememberLogin !== undefined && (obj.rememberLogin = message.rememberLogin);
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.persistence !== undefined && (obj.persistence = eSessionPersistenceToJSON(message.persistence));
    message.websiteId !== undefined && (obj.websiteId = message.websiteId);
    message.deviceDetails !== undefined && (obj.deviceDetails = message.deviceDetails
      ? CAuthenticationDeviceDetails.toJSON(message.deviceDetails)
      : undefined);
    message.guardData !== undefined && (obj.guardData = message.guardData);
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaCredentialsRequest>, I>>(
    base?: I,
  ): CAuthenticationBeginAuthSessionViaCredentialsRequest {
    return CAuthenticationBeginAuthSessionViaCredentialsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaCredentialsRequest>, I>>(
    object: I,
  ): CAuthenticationBeginAuthSessionViaCredentialsRequest {
    const message = createBaseCAuthenticationBeginAuthSessionViaCredentialsRequest();
    message.deviceFriendlyName = object.deviceFriendlyName ?? "";
    message.accountName = object.accountName ?? "";
    message.encryptedPassword = object.encryptedPassword ?? "";
    message.encryptionTimestamp = object.encryptionTimestamp ?? 0;
    message.rememberLogin = object.rememberLogin ?? false;
    message.platformType = object.platformType ?? 0;
    message.persistence = object.persistence ?? 0;
    message.websiteId = object.websiteId ?? "";
    message.deviceDetails = (object.deviceDetails !== undefined && object.deviceDetails !== null)
      ? CAuthenticationDeviceDetails.fromPartial(object.deviceDetails)
      : undefined;
    message.guardData = object.guardData ?? "";
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCAuthenticationBeginAuthSessionViaCredentialsResponse(): CAuthenticationBeginAuthSessionViaCredentialsResponse {
  return {
    clientId: 0,
    requestId: Buffer.alloc(0),
    interval: 0,
    allowedConfirmations: [],
    steamid: 0,
    weakToken: "",
    agreementSessionUrl: "",
    extendedErrorMessage: "",
  };
}

export const CAuthenticationBeginAuthSessionViaCredentialsResponse = {
  encode(
    message: CAuthenticationBeginAuthSessionViaCredentialsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.requestId.length !== 0) {
      writer.uint32(18).bytes(message.requestId);
    }
    if (message.interval !== 0) {
      writer.uint32(29).float(message.interval);
    }
    for (const v of message.allowedConfirmations) {
      CAuthenticationAllowedConfirmation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.steamid !== 0) {
      writer.uint32(40).uint64(message.steamid);
    }
    if (message.weakToken !== "") {
      writer.uint32(50).string(message.weakToken);
    }
    if (message.agreementSessionUrl !== "") {
      writer.uint32(58).string(message.agreementSessionUrl);
    }
    if (message.extendedErrorMessage !== "") {
      writer.uint32(66).string(message.extendedErrorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationBeginAuthSessionViaCredentialsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationBeginAuthSessionViaCredentialsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestId = reader.bytes() as Buffer;
          break;
        case 3:
          message.interval = reader.float();
          break;
        case 4:
          message.allowedConfirmations.push(CAuthenticationAllowedConfirmation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.weakToken = reader.string();
          break;
        case 7:
          message.agreementSessionUrl = reader.string();
          break;
        case 8:
          message.extendedErrorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationBeginAuthSessionViaCredentialsResponse {
    return {
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      requestId: isSet(object.requestId) ? Buffer.from(bytesFromBase64(object.requestId)) : Buffer.alloc(0),
      interval: isSet(object.interval) ? Number(object.interval) : 0,
      allowedConfirmations: Array.isArray(object?.allowedConfirmations)
        ? object.allowedConfirmations.map((e: any) => CAuthenticationAllowedConfirmation.fromJSON(e))
        : [],
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      weakToken: isSet(object.weakToken) ? String(object.weakToken) : "",
      agreementSessionUrl: isSet(object.agreementSessionUrl) ? String(object.agreementSessionUrl) : "",
      extendedErrorMessage: isSet(object.extendedErrorMessage) ? String(object.extendedErrorMessage) : "",
    };
  },

  toJSON(message: CAuthenticationBeginAuthSessionViaCredentialsResponse): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.requestId !== undefined &&
      (obj.requestId = base64FromBytes(message.requestId !== undefined ? message.requestId : Buffer.alloc(0)));
    message.interval !== undefined && (obj.interval = message.interval);
    if (message.allowedConfirmations) {
      obj.allowedConfirmations = message.allowedConfirmations.map((e) =>
        e ? CAuthenticationAllowedConfirmation.toJSON(e) : undefined
      );
    } else {
      obj.allowedConfirmations = [];
    }
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.weakToken !== undefined && (obj.weakToken = message.weakToken);
    message.agreementSessionUrl !== undefined && (obj.agreementSessionUrl = message.agreementSessionUrl);
    message.extendedErrorMessage !== undefined && (obj.extendedErrorMessage = message.extendedErrorMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaCredentialsResponse>, I>>(
    base?: I,
  ): CAuthenticationBeginAuthSessionViaCredentialsResponse {
    return CAuthenticationBeginAuthSessionViaCredentialsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationBeginAuthSessionViaCredentialsResponse>, I>>(
    object: I,
  ): CAuthenticationBeginAuthSessionViaCredentialsResponse {
    const message = createBaseCAuthenticationBeginAuthSessionViaCredentialsResponse();
    message.clientId = object.clientId ?? 0;
    message.requestId = object.requestId ?? Buffer.alloc(0);
    message.interval = object.interval ?? 0;
    message.allowedConfirmations =
      object.allowedConfirmations?.map((e) => CAuthenticationAllowedConfirmation.fromPartial(e)) || [];
    message.steamid = object.steamid ?? 0;
    message.weakToken = object.weakToken ?? "";
    message.agreementSessionUrl = object.agreementSessionUrl ?? "";
    message.extendedErrorMessage = object.extendedErrorMessage ?? "";
    return message;
  },
};

function createBaseCAuthenticationPollAuthSessionStatusRequest(): CAuthenticationPollAuthSessionStatusRequest {
  return { clientId: 0, requestId: Buffer.alloc(0), tokenToRevoke: 0 };
}

export const CAuthenticationPollAuthSessionStatusRequest = {
  encode(message: CAuthenticationPollAuthSessionStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.requestId.length !== 0) {
      writer.uint32(18).bytes(message.requestId);
    }
    if (message.tokenToRevoke !== 0) {
      writer.uint32(25).fixed64(message.tokenToRevoke);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationPollAuthSessionStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationPollAuthSessionStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestId = reader.bytes() as Buffer;
          break;
        case 3:
          message.tokenToRevoke = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationPollAuthSessionStatusRequest {
    return {
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      requestId: isSet(object.requestId) ? Buffer.from(bytesFromBase64(object.requestId)) : Buffer.alloc(0),
      tokenToRevoke: isSet(object.tokenToRevoke) ? Number(object.tokenToRevoke) : 0,
    };
  },

  toJSON(message: CAuthenticationPollAuthSessionStatusRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.requestId !== undefined &&
      (obj.requestId = base64FromBytes(message.requestId !== undefined ? message.requestId : Buffer.alloc(0)));
    message.tokenToRevoke !== undefined && (obj.tokenToRevoke = Math.round(message.tokenToRevoke));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationPollAuthSessionStatusRequest>, I>>(
    base?: I,
  ): CAuthenticationPollAuthSessionStatusRequest {
    return CAuthenticationPollAuthSessionStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationPollAuthSessionStatusRequest>, I>>(
    object: I,
  ): CAuthenticationPollAuthSessionStatusRequest {
    const message = createBaseCAuthenticationPollAuthSessionStatusRequest();
    message.clientId = object.clientId ?? 0;
    message.requestId = object.requestId ?? Buffer.alloc(0);
    message.tokenToRevoke = object.tokenToRevoke ?? 0;
    return message;
  },
};

function createBaseCAuthenticationPollAuthSessionStatusResponse(): CAuthenticationPollAuthSessionStatusResponse {
  return {
    newClientId: 0,
    newChallengeUrl: "",
    refreshToken: "",
    accessToken: "",
    hadRemoteInteraction: false,
    accountName: "",
    newGuardData: "",
    agreementSessionUrl: "",
  };
}

export const CAuthenticationPollAuthSessionStatusResponse = {
  encode(message: CAuthenticationPollAuthSessionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newClientId !== 0) {
      writer.uint32(8).uint64(message.newClientId);
    }
    if (message.newChallengeUrl !== "") {
      writer.uint32(18).string(message.newChallengeUrl);
    }
    if (message.refreshToken !== "") {
      writer.uint32(26).string(message.refreshToken);
    }
    if (message.accessToken !== "") {
      writer.uint32(34).string(message.accessToken);
    }
    if (message.hadRemoteInteraction === true) {
      writer.uint32(40).bool(message.hadRemoteInteraction);
    }
    if (message.accountName !== "") {
      writer.uint32(50).string(message.accountName);
    }
    if (message.newGuardData !== "") {
      writer.uint32(58).string(message.newGuardData);
    }
    if (message.agreementSessionUrl !== "") {
      writer.uint32(66).string(message.agreementSessionUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationPollAuthSessionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationPollAuthSessionStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newClientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.newChallengeUrl = reader.string();
          break;
        case 3:
          message.refreshToken = reader.string();
          break;
        case 4:
          message.accessToken = reader.string();
          break;
        case 5:
          message.hadRemoteInteraction = reader.bool();
          break;
        case 6:
          message.accountName = reader.string();
          break;
        case 7:
          message.newGuardData = reader.string();
          break;
        case 8:
          message.agreementSessionUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationPollAuthSessionStatusResponse {
    return {
      newClientId: isSet(object.newClientId) ? Number(object.newClientId) : 0,
      newChallengeUrl: isSet(object.newChallengeUrl) ? String(object.newChallengeUrl) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      hadRemoteInteraction: isSet(object.hadRemoteInteraction) ? Boolean(object.hadRemoteInteraction) : false,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      newGuardData: isSet(object.newGuardData) ? String(object.newGuardData) : "",
      agreementSessionUrl: isSet(object.agreementSessionUrl) ? String(object.agreementSessionUrl) : "",
    };
  },

  toJSON(message: CAuthenticationPollAuthSessionStatusResponse): unknown {
    const obj: any = {};
    message.newClientId !== undefined && (obj.newClientId = Math.round(message.newClientId));
    message.newChallengeUrl !== undefined && (obj.newChallengeUrl = message.newChallengeUrl);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.hadRemoteInteraction !== undefined && (obj.hadRemoteInteraction = message.hadRemoteInteraction);
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.newGuardData !== undefined && (obj.newGuardData = message.newGuardData);
    message.agreementSessionUrl !== undefined && (obj.agreementSessionUrl = message.agreementSessionUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationPollAuthSessionStatusResponse>, I>>(
    base?: I,
  ): CAuthenticationPollAuthSessionStatusResponse {
    return CAuthenticationPollAuthSessionStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationPollAuthSessionStatusResponse>, I>>(
    object: I,
  ): CAuthenticationPollAuthSessionStatusResponse {
    const message = createBaseCAuthenticationPollAuthSessionStatusResponse();
    message.newClientId = object.newClientId ?? 0;
    message.newChallengeUrl = object.newChallengeUrl ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.accessToken = object.accessToken ?? "";
    message.hadRemoteInteraction = object.hadRemoteInteraction ?? false;
    message.accountName = object.accountName ?? "";
    message.newGuardData = object.newGuardData ?? "";
    message.agreementSessionUrl = object.agreementSessionUrl ?? "";
    return message;
  },
};

function createBaseCAuthenticationGetAuthSessionInfoRequest(): CAuthenticationGetAuthSessionInfoRequest {
  return { clientId: 0 };
}

export const CAuthenticationGetAuthSessionInfoRequest = {
  encode(message: CAuthenticationGetAuthSessionInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetAuthSessionInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetAuthSessionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationGetAuthSessionInfoRequest {
    return { clientId: isSet(object.clientId) ? Number(object.clientId) : 0 };
  },

  toJSON(message: CAuthenticationGetAuthSessionInfoRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionInfoRequest>, I>>(
    base?: I,
  ): CAuthenticationGetAuthSessionInfoRequest {
    return CAuthenticationGetAuthSessionInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionInfoRequest>, I>>(
    object: I,
  ): CAuthenticationGetAuthSessionInfoRequest {
    const message = createBaseCAuthenticationGetAuthSessionInfoRequest();
    message.clientId = object.clientId ?? 0;
    return message;
  },
};

function createBaseCAuthenticationGetAuthSessionInfoResponse(): CAuthenticationGetAuthSessionInfoResponse {
  return {
    ip: "",
    geoloc: "",
    city: "",
    state: "",
    country: "",
    platformType: 0,
    deviceFriendlyName: "",
    version: 0,
    loginHistory: 0,
    requestorLocationMismatch: false,
    highUsageLogin: false,
    requestedPersistence: 0,
  };
}

export const CAuthenticationGetAuthSessionInfoResponse = {
  encode(message: CAuthenticationGetAuthSessionInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.geoloc !== "") {
      writer.uint32(18).string(message.geoloc);
    }
    if (message.city !== "") {
      writer.uint32(26).string(message.city);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.country !== "") {
      writer.uint32(42).string(message.country);
    }
    if (message.platformType !== 0) {
      writer.uint32(48).int32(message.platformType);
    }
    if (message.deviceFriendlyName !== "") {
      writer.uint32(58).string(message.deviceFriendlyName);
    }
    if (message.version !== 0) {
      writer.uint32(64).int32(message.version);
    }
    if (message.loginHistory !== 0) {
      writer.uint32(72).int32(message.loginHistory);
    }
    if (message.requestorLocationMismatch === true) {
      writer.uint32(80).bool(message.requestorLocationMismatch);
    }
    if (message.highUsageLogin === true) {
      writer.uint32(88).bool(message.highUsageLogin);
    }
    if (message.requestedPersistence !== 0) {
      writer.uint32(96).int32(message.requestedPersistence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetAuthSessionInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetAuthSessionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        case 2:
          message.geoloc = reader.string();
          break;
        case 3:
          message.city = reader.string();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.country = reader.string();
          break;
        case 6:
          message.platformType = reader.int32() as any;
          break;
        case 7:
          message.deviceFriendlyName = reader.string();
          break;
        case 8:
          message.version = reader.int32();
          break;
        case 9:
          message.loginHistory = reader.int32() as any;
          break;
        case 10:
          message.requestorLocationMismatch = reader.bool();
          break;
        case 11:
          message.highUsageLogin = reader.bool();
          break;
        case 12:
          message.requestedPersistence = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationGetAuthSessionInfoResponse {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      geoloc: isSet(object.geoloc) ? String(object.geoloc) : "",
      city: isSet(object.city) ? String(object.city) : "",
      state: isSet(object.state) ? String(object.state) : "",
      country: isSet(object.country) ? String(object.country) : "",
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      deviceFriendlyName: isSet(object.deviceFriendlyName) ? String(object.deviceFriendlyName) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      loginHistory: isSet(object.loginHistory) ? eAuthSessionSecurityHistoryFromJSON(object.loginHistory) : 0,
      requestorLocationMismatch: isSet(object.requestorLocationMismatch)
        ? Boolean(object.requestorLocationMismatch)
        : false,
      highUsageLogin: isSet(object.highUsageLogin) ? Boolean(object.highUsageLogin) : false,
      requestedPersistence: isSet(object.requestedPersistence)
        ? eSessionPersistenceFromJSON(object.requestedPersistence)
        : 0,
    };
  },

  toJSON(message: CAuthenticationGetAuthSessionInfoResponse): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.geoloc !== undefined && (obj.geoloc = message.geoloc);
    message.city !== undefined && (obj.city = message.city);
    message.state !== undefined && (obj.state = message.state);
    message.country !== undefined && (obj.country = message.country);
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.deviceFriendlyName !== undefined && (obj.deviceFriendlyName = message.deviceFriendlyName);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.loginHistory !== undefined && (obj.loginHistory = eAuthSessionSecurityHistoryToJSON(message.loginHistory));
    message.requestorLocationMismatch !== undefined &&
      (obj.requestorLocationMismatch = message.requestorLocationMismatch);
    message.highUsageLogin !== undefined && (obj.highUsageLogin = message.highUsageLogin);
    message.requestedPersistence !== undefined &&
      (obj.requestedPersistence = eSessionPersistenceToJSON(message.requestedPersistence));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionInfoResponse>, I>>(
    base?: I,
  ): CAuthenticationGetAuthSessionInfoResponse {
    return CAuthenticationGetAuthSessionInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionInfoResponse>, I>>(
    object: I,
  ): CAuthenticationGetAuthSessionInfoResponse {
    const message = createBaseCAuthenticationGetAuthSessionInfoResponse();
    message.ip = object.ip ?? "";
    message.geoloc = object.geoloc ?? "";
    message.city = object.city ?? "";
    message.state = object.state ?? "";
    message.country = object.country ?? "";
    message.platformType = object.platformType ?? 0;
    message.deviceFriendlyName = object.deviceFriendlyName ?? "";
    message.version = object.version ?? 0;
    message.loginHistory = object.loginHistory ?? 0;
    message.requestorLocationMismatch = object.requestorLocationMismatch ?? false;
    message.highUsageLogin = object.highUsageLogin ?? false;
    message.requestedPersistence = object.requestedPersistence ?? 0;
    return message;
  },
};

function createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationRequest(): CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
  return { version: 0, clientId: 0, steamid: 0, signature: Buffer.alloc(0), confirm: false, persistence: 0 };
}

export const CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest = {
  encode(
    message: CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.clientId !== 0) {
      writer.uint32(16).uint64(message.clientId);
    }
    if (message.steamid !== 0) {
      writer.uint32(25).fixed64(message.steamid);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.confirm === true) {
      writer.uint32(40).bool(message.confirm);
    }
    if (message.persistence !== 0) {
      writer.uint32(48).int32(message.persistence);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int32();
          break;
        case 2:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.signature = reader.bytes() as Buffer;
          break;
        case 5:
          message.confirm = reader.bool();
          break;
        case 6:
          message.persistence = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      confirm: isSet(object.confirm) ? Boolean(object.confirm) : false,
      persistence: isSet(object.persistence) ? eSessionPersistenceFromJSON(object.persistence) : 0,
    };
  },

  toJSON(message: CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.confirm !== undefined && (obj.confirm = message.confirm);
    message.persistence !== undefined && (obj.persistence = eSessionPersistenceToJSON(message.persistence));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest>, I>>(
    base?: I,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
    return CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest>, I>>(
    object: I,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest {
    const message = createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationRequest();
    message.version = object.version ?? 0;
    message.clientId = object.clientId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.signature = object.signature ?? Buffer.alloc(0);
    message.confirm = object.confirm ?? false;
    message.persistence = object.persistence ?? 0;
    return message;
  },
};

function createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationResponse(): CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
  return {};
}

export const CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse = {
  encode(
    _: CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
    return {};
  },

  toJSON(_: CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse>, I>>(
    base?: I,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
    return CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse>, I>>(
    _: I,
  ): CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse {
    const message = createBaseCAuthenticationUpdateAuthSessionWithMobileConfirmationResponse();
    return message;
  },
};

function createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest(): CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
  return { clientId: 0, steamid: 0, code: "", codeType: 0 };
}

export const CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest = {
  encode(
    message: CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.codeType !== 0) {
      writer.uint32(32).int32(message.codeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.codeType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
    return {
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      codeType: isSet(object.codeType) ? eAuthSessionGuardTypeFromJSON(object.codeType) : 0,
    };
  },

  toJSON(message: CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.code !== undefined && (obj.code = message.code);
    message.codeType !== undefined && (obj.codeType = eAuthSessionGuardTypeToJSON(message.codeType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest>, I>>(
    base?: I,
  ): CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
    return CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest>, I>>(
    object: I,
  ): CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest {
    const message = createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest();
    message.clientId = object.clientId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.code = object.code ?? "";
    message.codeType = object.codeType ?? 0;
    return message;
  },
};

function createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse(): CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
  return { agreementSessionUrl: "" };
}

export const CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse = {
  encode(
    message: CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.agreementSessionUrl !== "") {
      writer.uint32(58).string(message.agreementSessionUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.agreementSessionUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
    return { agreementSessionUrl: isSet(object.agreementSessionUrl) ? String(object.agreementSessionUrl) : "" };
  },

  toJSON(message: CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse): unknown {
    const obj: any = {};
    message.agreementSessionUrl !== undefined && (obj.agreementSessionUrl = message.agreementSessionUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse>, I>>(
    base?: I,
  ): CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
    return CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse>, I>>(
    object: I,
  ): CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse {
    const message = createBaseCAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse();
    message.agreementSessionUrl = object.agreementSessionUrl ?? "";
    return message;
  },
};

function createBaseCAuthenticationAccessTokenGenerateForAppRequest(): CAuthenticationAccessTokenGenerateForAppRequest {
  return { refreshToken: "", steamid: 0 };
}

export const CAuthenticationAccessTokenGenerateForAppRequest = {
  encode(
    message: CAuthenticationAccessTokenGenerateForAppRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationAccessTokenGenerateForAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationAccessTokenGenerateForAppRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshToken = reader.string();
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationAccessTokenGenerateForAppRequest {
    return {
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CAuthenticationAccessTokenGenerateForAppRequest): unknown {
    const obj: any = {};
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationAccessTokenGenerateForAppRequest>, I>>(
    base?: I,
  ): CAuthenticationAccessTokenGenerateForAppRequest {
    return CAuthenticationAccessTokenGenerateForAppRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationAccessTokenGenerateForAppRequest>, I>>(
    object: I,
  ): CAuthenticationAccessTokenGenerateForAppRequest {
    const message = createBaseCAuthenticationAccessTokenGenerateForAppRequest();
    message.refreshToken = object.refreshToken ?? "";
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCAuthenticationAccessTokenGenerateForAppResponse(): CAuthenticationAccessTokenGenerateForAppResponse {
  return { accessToken: "" };
}

export const CAuthenticationAccessTokenGenerateForAppResponse = {
  encode(
    message: CAuthenticationAccessTokenGenerateForAppResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationAccessTokenGenerateForAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationAccessTokenGenerateForAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationAccessTokenGenerateForAppResponse {
    return { accessToken: isSet(object.accessToken) ? String(object.accessToken) : "" };
  },

  toJSON(message: CAuthenticationAccessTokenGenerateForAppResponse): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationAccessTokenGenerateForAppResponse>, I>>(
    base?: I,
  ): CAuthenticationAccessTokenGenerateForAppResponse {
    return CAuthenticationAccessTokenGenerateForAppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationAccessTokenGenerateForAppResponse>, I>>(
    object: I,
  ): CAuthenticationAccessTokenGenerateForAppResponse {
    const message = createBaseCAuthenticationAccessTokenGenerateForAppResponse();
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenEnumerateRequest(): CAuthenticationRefreshTokenEnumerateRequest {
  return {};
}

export const CAuthenticationRefreshTokenEnumerateRequest = {
  encode(_: CAuthenticationRefreshTokenEnumerateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationRefreshTokenEnumerateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenEnumerateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CAuthenticationRefreshTokenEnumerateRequest {
    return {};
  },

  toJSON(_: CAuthenticationRefreshTokenEnumerateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateRequest>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenEnumerateRequest {
    return CAuthenticationRefreshTokenEnumerateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateRequest>, I>>(
    _: I,
  ): CAuthenticationRefreshTokenEnumerateRequest {
    const message = createBaseCAuthenticationRefreshTokenEnumerateRequest();
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenEnumerateResponse(): CAuthenticationRefreshTokenEnumerateResponse {
  return { refreshTokens: [], requestingToken: 0 };
}

export const CAuthenticationRefreshTokenEnumerateResponse = {
  encode(message: CAuthenticationRefreshTokenEnumerateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.refreshTokens) {
      CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.requestingToken !== 0) {
      writer.uint32(17).fixed64(message.requestingToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationRefreshTokenEnumerateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokens.push(
            CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.requestingToken = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationRefreshTokenEnumerateResponse {
    return {
      refreshTokens: Array.isArray(object?.refreshTokens)
        ? object.refreshTokens.map((e: any) =>
          CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.fromJSON(e)
        )
        : [],
      requestingToken: isSet(object.requestingToken) ? Number(object.requestingToken) : 0,
    };
  },

  toJSON(message: CAuthenticationRefreshTokenEnumerateResponse): unknown {
    const obj: any = {};
    if (message.refreshTokens) {
      obj.refreshTokens = message.refreshTokens.map((e) =>
        e ? CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.toJSON(e) : undefined
      );
    } else {
      obj.refreshTokens = [];
    }
    message.requestingToken !== undefined && (obj.requestingToken = Math.round(message.requestingToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenEnumerateResponse {
    return CAuthenticationRefreshTokenEnumerateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse>, I>>(
    object: I,
  ): CAuthenticationRefreshTokenEnumerateResponse {
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse();
    message.refreshTokens =
      object.refreshTokens?.map((e) =>
        CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.fromPartial(e)
      ) || [];
    message.requestingToken = object.requestingToken ?? 0;
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent(): CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
  return { time: 0, ip: undefined, locale: "", country: "", state: "", city: "" };
}

export const CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent = {
  encode(
    message: CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.ip !== undefined) {
      CMsgIPAddress.encode(message.ip, writer.uint32(18).fork()).ldelim();
    }
    if (message.locale !== "") {
      writer.uint32(26).string(message.locale);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.city !== "") {
      writer.uint32(50).string(message.city);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.uint32();
          break;
        case 2:
          message.ip = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 3:
          message.locale = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.city = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      ip: isSet(object.ip) ? CMsgIPAddress.fromJSON(object.ip) : undefined,
      locale: isSet(object.locale) ? String(object.locale) : "",
      country: isSet(object.country) ? String(object.country) : "",
      state: isSet(object.state) ? String(object.state) : "",
      city: isSet(object.city) ? String(object.city) : "",
    };
  },

  toJSON(message: CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.ip !== undefined && (obj.ip = message.ip ? CMsgIPAddress.toJSON(message.ip) : undefined);
    message.locale !== undefined && (obj.locale = message.locale);
    message.country !== undefined && (obj.country = message.country);
    message.state !== undefined && (obj.state = message.state);
    message.city !== undefined && (obj.city = message.city);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
    return CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent>, I>>(
    object: I,
  ): CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent {
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent();
    message.time = object.time ?? 0;
    message.ip = (object.ip !== undefined && object.ip !== null) ? CMsgIPAddress.fromPartial(object.ip) : undefined;
    message.locale = object.locale ?? "";
    message.country = object.country ?? "";
    message.state = object.state ?? "";
    message.city = object.city ?? "";
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription(): CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
  return {
    tokenId: 0,
    tokenDescription: "",
    timeUpdated: 0,
    platformType: 0,
    loggedIn: false,
    osPlatform: 0,
    authType: 0,
    gamingDeviceType: 0,
    firstSeen: undefined,
    lastSeen: undefined,
    osType: 0,
  };
}

export const CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription = {
  encode(
    message: CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    if (message.tokenDescription !== "") {
      writer.uint32(18).string(message.tokenDescription);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(24).uint32(message.timeUpdated);
    }
    if (message.platformType !== 0) {
      writer.uint32(32).int32(message.platformType);
    }
    if (message.loggedIn === true) {
      writer.uint32(40).bool(message.loggedIn);
    }
    if (message.osPlatform !== 0) {
      writer.uint32(48).uint32(message.osPlatform);
    }
    if (message.authType !== 0) {
      writer.uint32(56).uint32(message.authType);
    }
    if (message.gamingDeviceType !== 0) {
      writer.uint32(64).uint32(message.gamingDeviceType);
    }
    if (message.firstSeen !== undefined) {
      CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.encode(message.firstSeen, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.lastSeen !== undefined) {
      CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.encode(message.lastSeen, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.osType !== 0) {
      writer.uint32(88).int32(message.osType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.tokenDescription = reader.string();
          break;
        case 3:
          message.timeUpdated = reader.uint32();
          break;
        case 4:
          message.platformType = reader.int32() as any;
          break;
        case 5:
          message.loggedIn = reader.bool();
          break;
        case 6:
          message.osPlatform = reader.uint32();
          break;
        case 7:
          message.authType = reader.uint32();
          break;
        case 8:
          message.gamingDeviceType = reader.uint32();
          break;
        case 9:
          message.firstSeen = CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 10:
          message.lastSeen = CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.osType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
    return {
      tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0,
      tokenDescription: isSet(object.tokenDescription) ? String(object.tokenDescription) : "",
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      loggedIn: isSet(object.loggedIn) ? Boolean(object.loggedIn) : false,
      osPlatform: isSet(object.osPlatform) ? Number(object.osPlatform) : 0,
      authType: isSet(object.authType) ? Number(object.authType) : 0,
      gamingDeviceType: isSet(object.gamingDeviceType) ? Number(object.gamingDeviceType) : 0,
      firstSeen: isSet(object.firstSeen)
        ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.fromJSON(object.firstSeen)
        : undefined,
      lastSeen: isSet(object.lastSeen)
        ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.fromJSON(object.lastSeen)
        : undefined,
      osType: isSet(object.osType) ? Number(object.osType) : 0,
    };
  },

  toJSON(message: CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    message.tokenDescription !== undefined && (obj.tokenDescription = message.tokenDescription);
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.loggedIn !== undefined && (obj.loggedIn = message.loggedIn);
    message.osPlatform !== undefined && (obj.osPlatform = Math.round(message.osPlatform));
    message.authType !== undefined && (obj.authType = Math.round(message.authType));
    message.gamingDeviceType !== undefined && (obj.gamingDeviceType = Math.round(message.gamingDeviceType));
    message.firstSeen !== undefined && (obj.firstSeen = message.firstSeen
      ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.toJSON(message.firstSeen)
      : undefined);
    message.lastSeen !== undefined && (obj.lastSeen = message.lastSeen
      ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.toJSON(message.lastSeen)
      : undefined);
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
    return CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription>, I>>(
    object: I,
  ): CAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription {
    const message = createBaseCAuthenticationRefreshTokenEnumerateResponse_RefreshTokenDescription();
    message.tokenId = object.tokenId ?? 0;
    message.tokenDescription = object.tokenDescription ?? "";
    message.timeUpdated = object.timeUpdated ?? 0;
    message.platformType = object.platformType ?? 0;
    message.loggedIn = object.loggedIn ?? false;
    message.osPlatform = object.osPlatform ?? 0;
    message.authType = object.authType ?? 0;
    message.gamingDeviceType = object.gamingDeviceType ?? 0;
    message.firstSeen = (object.firstSeen !== undefined && object.firstSeen !== null)
      ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.fromPartial(object.firstSeen)
      : undefined;
    message.lastSeen = (object.lastSeen !== undefined && object.lastSeen !== null)
      ? CAuthenticationRefreshTokenEnumerateResponse_TokenUsageEvent.fromPartial(object.lastSeen)
      : undefined;
    message.osType = object.osType ?? 0;
    return message;
  },
};

function createBaseCAuthenticationGetAuthSessionsForAccountRequest(): CAuthenticationGetAuthSessionsForAccountRequest {
  return {};
}

export const CAuthenticationGetAuthSessionsForAccountRequest = {
  encode(_: CAuthenticationGetAuthSessionsForAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetAuthSessionsForAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetAuthSessionsForAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CAuthenticationGetAuthSessionsForAccountRequest {
    return {};
  },

  toJSON(_: CAuthenticationGetAuthSessionsForAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionsForAccountRequest>, I>>(
    base?: I,
  ): CAuthenticationGetAuthSessionsForAccountRequest {
    return CAuthenticationGetAuthSessionsForAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionsForAccountRequest>, I>>(
    _: I,
  ): CAuthenticationGetAuthSessionsForAccountRequest {
    const message = createBaseCAuthenticationGetAuthSessionsForAccountRequest();
    return message;
  },
};

function createBaseCAuthenticationGetAuthSessionsForAccountResponse(): CAuthenticationGetAuthSessionsForAccountResponse {
  return { clientIds: [] };
}

export const CAuthenticationGetAuthSessionsForAccountResponse = {
  encode(
    message: CAuthenticationGetAuthSessionsForAccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.clientIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationGetAuthSessionsForAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationGetAuthSessionsForAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.clientIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.clientIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationGetAuthSessionsForAccountResponse {
    return { clientIds: Array.isArray(object?.clientIds) ? object.clientIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CAuthenticationGetAuthSessionsForAccountResponse): unknown {
    const obj: any = {};
    if (message.clientIds) {
      obj.clientIds = message.clientIds.map((e) => Math.round(e));
    } else {
      obj.clientIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionsForAccountResponse>, I>>(
    base?: I,
  ): CAuthenticationGetAuthSessionsForAccountResponse {
    return CAuthenticationGetAuthSessionsForAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationGetAuthSessionsForAccountResponse>, I>>(
    object: I,
  ): CAuthenticationGetAuthSessionsForAccountResponse {
    const message = createBaseCAuthenticationGetAuthSessionsForAccountResponse();
    message.clientIds = object.clientIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCAuthenticationMigrateMobileSessionRequest(): CAuthenticationMigrateMobileSessionRequest {
  return { steamid: 0, token: "", signature: "" };
}

export const CAuthenticationMigrateMobileSessionRequest = {
  encode(message: CAuthenticationMigrateMobileSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationMigrateMobileSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationMigrateMobileSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationMigrateMobileSessionRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      token: isSet(object.token) ? String(object.token) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: CAuthenticationMigrateMobileSessionRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.token !== undefined && (obj.token = message.token);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationMigrateMobileSessionRequest>, I>>(
    base?: I,
  ): CAuthenticationMigrateMobileSessionRequest {
    return CAuthenticationMigrateMobileSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationMigrateMobileSessionRequest>, I>>(
    object: I,
  ): CAuthenticationMigrateMobileSessionRequest {
    const message = createBaseCAuthenticationMigrateMobileSessionRequest();
    message.steamid = object.steamid ?? 0;
    message.token = object.token ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseCAuthenticationMigrateMobileSessionResponse(): CAuthenticationMigrateMobileSessionResponse {
  return { refreshToken: "", accessToken: "" };
}

export const CAuthenticationMigrateMobileSessionResponse = {
  encode(message: CAuthenticationMigrateMobileSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    if (message.accessToken !== "") {
      writer.uint32(18).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationMigrateMobileSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationMigrateMobileSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshToken = reader.string();
          break;
        case 2:
          message.accessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationMigrateMobileSessionResponse {
    return {
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
    };
  },

  toJSON(message: CAuthenticationMigrateMobileSessionResponse): unknown {
    const obj: any = {};
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationMigrateMobileSessionResponse>, I>>(
    base?: I,
  ): CAuthenticationMigrateMobileSessionResponse {
    return CAuthenticationMigrateMobileSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationMigrateMobileSessionResponse>, I>>(
    object: I,
  ): CAuthenticationMigrateMobileSessionResponse {
    const message = createBaseCAuthenticationMigrateMobileSessionResponse();
    message.refreshToken = object.refreshToken ?? "";
    message.accessToken = object.accessToken ?? "";
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenRevokeRequest(): CAuthenticationRefreshTokenRevokeRequest {
  return { tokenId: 0, steamid: 0, revokeAction: 0, signature: Buffer.alloc(0) };
}

export const CAuthenticationRefreshTokenRevokeRequest = {
  encode(message: CAuthenticationRefreshTokenRevokeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.revokeAction !== 0) {
      writer.uint32(24).int32(message.revokeAction);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationRefreshTokenRevokeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenRevokeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.revokeAction = reader.int32() as any;
          break;
        case 4:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationRefreshTokenRevokeRequest {
    return {
      tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      revokeAction: isSet(object.revokeAction) ? eAuthTokenRevokeActionFromJSON(object.revokeAction) : 0,
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CAuthenticationRefreshTokenRevokeRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.revokeAction !== undefined && (obj.revokeAction = eAuthTokenRevokeActionToJSON(message.revokeAction));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenRevokeRequest>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenRevokeRequest {
    return CAuthenticationRefreshTokenRevokeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenRevokeRequest>, I>>(
    object: I,
  ): CAuthenticationRefreshTokenRevokeRequest {
    const message = createBaseCAuthenticationRefreshTokenRevokeRequest();
    message.tokenId = object.tokenId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.revokeAction = object.revokeAction ?? 0;
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCAuthenticationRefreshTokenRevokeResponse(): CAuthenticationRefreshTokenRevokeResponse {
  return {};
}

export const CAuthenticationRefreshTokenRevokeResponse = {
  encode(_: CAuthenticationRefreshTokenRevokeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationRefreshTokenRevokeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRefreshTokenRevokeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CAuthenticationRefreshTokenRevokeResponse {
    return {};
  },

  toJSON(_: CAuthenticationRefreshTokenRevokeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRefreshTokenRevokeResponse>, I>>(
    base?: I,
  ): CAuthenticationRefreshTokenRevokeResponse {
    return CAuthenticationRefreshTokenRevokeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRefreshTokenRevokeResponse>, I>>(
    _: I,
  ): CAuthenticationRefreshTokenRevokeResponse {
    const message = createBaseCAuthenticationRefreshTokenRevokeResponse();
    return message;
  },
};

function createBaseCAuthenticationSupportQueryRefreshTokensByAccountRequest(): CAuthenticationSupportQueryRefreshTokensByAccountRequest {
  return { steamid: 0, includeRevokedTokens: false };
}

export const CAuthenticationSupportQueryRefreshTokensByAccountRequest = {
  encode(
    message: CAuthenticationSupportQueryRefreshTokensByAccountRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeRevokedTokens === true) {
      writer.uint32(16).bool(message.includeRevokedTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportQueryRefreshTokensByAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportQueryRefreshTokensByAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.includeRevokedTokens = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportQueryRefreshTokensByAccountRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      includeRevokedTokens: isSet(object.includeRevokedTokens) ? Boolean(object.includeRevokedTokens) : false,
    };
  },

  toJSON(message: CAuthenticationSupportQueryRefreshTokensByAccountRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.includeRevokedTokens !== undefined && (obj.includeRevokedTokens = message.includeRevokedTokens);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokensByAccountRequest>, I>>(
    base?: I,
  ): CAuthenticationSupportQueryRefreshTokensByAccountRequest {
    return CAuthenticationSupportQueryRefreshTokensByAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokensByAccountRequest>, I>>(
    object: I,
  ): CAuthenticationSupportQueryRefreshTokensByAccountRequest {
    const message = createBaseCAuthenticationSupportQueryRefreshTokensByAccountRequest();
    message.steamid = object.steamid ?? 0;
    message.includeRevokedTokens = object.includeRevokedTokens ?? false;
    return message;
  },
};

function createBaseCSupportRefreshTokenDescription(): CSupportRefreshTokenDescription {
  return {
    tokenId: 0,
    tokenDescription: "",
    timeUpdated: 0,
    platformType: 0,
    tokenState: 0,
    ownerSteamid: 0,
    osPlatform: 0,
    osType: 0,
    authType: 0,
    gamingDeviceType: 0,
    firstSeen: undefined,
    lastSeen: undefined,
  };
}

export const CSupportRefreshTokenDescription = {
  encode(message: CSupportRefreshTokenDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    if (message.tokenDescription !== "") {
      writer.uint32(18).string(message.tokenDescription);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(24).uint32(message.timeUpdated);
    }
    if (message.platformType !== 0) {
      writer.uint32(32).int32(message.platformType);
    }
    if (message.tokenState !== 0) {
      writer.uint32(40).int32(message.tokenState);
    }
    if (message.ownerSteamid !== 0) {
      writer.uint32(49).fixed64(message.ownerSteamid);
    }
    if (message.osPlatform !== 0) {
      writer.uint32(56).uint32(message.osPlatform);
    }
    if (message.osType !== 0) {
      writer.uint32(64).int32(message.osType);
    }
    if (message.authType !== 0) {
      writer.uint32(72).uint32(message.authType);
    }
    if (message.gamingDeviceType !== 0) {
      writer.uint32(80).uint32(message.gamingDeviceType);
    }
    if (message.firstSeen !== undefined) {
      CSupportRefreshTokenDescription_TokenUsageEvent.encode(message.firstSeen, writer.uint32(90).fork()).ldelim();
    }
    if (message.lastSeen !== undefined) {
      CSupportRefreshTokenDescription_TokenUsageEvent.encode(message.lastSeen, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSupportRefreshTokenDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSupportRefreshTokenDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.tokenDescription = reader.string();
          break;
        case 3:
          message.timeUpdated = reader.uint32();
          break;
        case 4:
          message.platformType = reader.int32() as any;
          break;
        case 5:
          message.tokenState = reader.int32() as any;
          break;
        case 6:
          message.ownerSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 7:
          message.osPlatform = reader.uint32();
          break;
        case 8:
          message.osType = reader.int32();
          break;
        case 9:
          message.authType = reader.uint32();
          break;
        case 10:
          message.gamingDeviceType = reader.uint32();
          break;
        case 11:
          message.firstSeen = CSupportRefreshTokenDescription_TokenUsageEvent.decode(reader, reader.uint32());
          break;
        case 12:
          message.lastSeen = CSupportRefreshTokenDescription_TokenUsageEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSupportRefreshTokenDescription {
    return {
      tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0,
      tokenDescription: isSet(object.tokenDescription) ? String(object.tokenDescription) : "",
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      platformType: isSet(object.platformType) ? eAuthTokenPlatformTypeFromJSON(object.platformType) : 0,
      tokenState: isSet(object.tokenState) ? eAuthTokenStateFromJSON(object.tokenState) : 0,
      ownerSteamid: isSet(object.ownerSteamid) ? Number(object.ownerSteamid) : 0,
      osPlatform: isSet(object.osPlatform) ? Number(object.osPlatform) : 0,
      osType: isSet(object.osType) ? Number(object.osType) : 0,
      authType: isSet(object.authType) ? Number(object.authType) : 0,
      gamingDeviceType: isSet(object.gamingDeviceType) ? Number(object.gamingDeviceType) : 0,
      firstSeen: isSet(object.firstSeen)
        ? CSupportRefreshTokenDescription_TokenUsageEvent.fromJSON(object.firstSeen)
        : undefined,
      lastSeen: isSet(object.lastSeen)
        ? CSupportRefreshTokenDescription_TokenUsageEvent.fromJSON(object.lastSeen)
        : undefined,
    };
  },

  toJSON(message: CSupportRefreshTokenDescription): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    message.tokenDescription !== undefined && (obj.tokenDescription = message.tokenDescription);
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.platformType !== undefined && (obj.platformType = eAuthTokenPlatformTypeToJSON(message.platformType));
    message.tokenState !== undefined && (obj.tokenState = eAuthTokenStateToJSON(message.tokenState));
    message.ownerSteamid !== undefined && (obj.ownerSteamid = Math.round(message.ownerSteamid));
    message.osPlatform !== undefined && (obj.osPlatform = Math.round(message.osPlatform));
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    message.authType !== undefined && (obj.authType = Math.round(message.authType));
    message.gamingDeviceType !== undefined && (obj.gamingDeviceType = Math.round(message.gamingDeviceType));
    message.firstSeen !== undefined && (obj.firstSeen = message.firstSeen
      ? CSupportRefreshTokenDescription_TokenUsageEvent.toJSON(message.firstSeen)
      : undefined);
    message.lastSeen !== undefined && (obj.lastSeen = message.lastSeen
      ? CSupportRefreshTokenDescription_TokenUsageEvent.toJSON(message.lastSeen)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSupportRefreshTokenDescription>, I>>(base?: I): CSupportRefreshTokenDescription {
    return CSupportRefreshTokenDescription.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSupportRefreshTokenDescription>, I>>(
    object: I,
  ): CSupportRefreshTokenDescription {
    const message = createBaseCSupportRefreshTokenDescription();
    message.tokenId = object.tokenId ?? 0;
    message.tokenDescription = object.tokenDescription ?? "";
    message.timeUpdated = object.timeUpdated ?? 0;
    message.platformType = object.platformType ?? 0;
    message.tokenState = object.tokenState ?? 0;
    message.ownerSteamid = object.ownerSteamid ?? 0;
    message.osPlatform = object.osPlatform ?? 0;
    message.osType = object.osType ?? 0;
    message.authType = object.authType ?? 0;
    message.gamingDeviceType = object.gamingDeviceType ?? 0;
    message.firstSeen = (object.firstSeen !== undefined && object.firstSeen !== null)
      ? CSupportRefreshTokenDescription_TokenUsageEvent.fromPartial(object.firstSeen)
      : undefined;
    message.lastSeen = (object.lastSeen !== undefined && object.lastSeen !== null)
      ? CSupportRefreshTokenDescription_TokenUsageEvent.fromPartial(object.lastSeen)
      : undefined;
    return message;
  },
};

function createBaseCSupportRefreshTokenDescription_TokenUsageEvent(): CSupportRefreshTokenDescription_TokenUsageEvent {
  return { time: 0, ip: undefined, country: "", state: "", city: "" };
}

export const CSupportRefreshTokenDescription_TokenUsageEvent = {
  encode(
    message: CSupportRefreshTokenDescription_TokenUsageEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.ip !== undefined) {
      CMsgIPAddress.encode(message.ip, writer.uint32(18).fork()).ldelim();
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.city !== "") {
      writer.uint32(42).string(message.city);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSupportRefreshTokenDescription_TokenUsageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSupportRefreshTokenDescription_TokenUsageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.uint32();
          break;
        case 2:
          message.ip = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.city = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSupportRefreshTokenDescription_TokenUsageEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      ip: isSet(object.ip) ? CMsgIPAddress.fromJSON(object.ip) : undefined,
      country: isSet(object.country) ? String(object.country) : "",
      state: isSet(object.state) ? String(object.state) : "",
      city: isSet(object.city) ? String(object.city) : "",
    };
  },

  toJSON(message: CSupportRefreshTokenDescription_TokenUsageEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.ip !== undefined && (obj.ip = message.ip ? CMsgIPAddress.toJSON(message.ip) : undefined);
    message.country !== undefined && (obj.country = message.country);
    message.state !== undefined && (obj.state = message.state);
    message.city !== undefined && (obj.city = message.city);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSupportRefreshTokenDescription_TokenUsageEvent>, I>>(
    base?: I,
  ): CSupportRefreshTokenDescription_TokenUsageEvent {
    return CSupportRefreshTokenDescription_TokenUsageEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSupportRefreshTokenDescription_TokenUsageEvent>, I>>(
    object: I,
  ): CSupportRefreshTokenDescription_TokenUsageEvent {
    const message = createBaseCSupportRefreshTokenDescription_TokenUsageEvent();
    message.time = object.time ?? 0;
    message.ip = (object.ip !== undefined && object.ip !== null) ? CMsgIPAddress.fromPartial(object.ip) : undefined;
    message.country = object.country ?? "";
    message.state = object.state ?? "";
    message.city = object.city ?? "";
    return message;
  },
};

function createBaseCAuthenticationSupportQueryRefreshTokensByAccountResponse(): CAuthenticationSupportQueryRefreshTokensByAccountResponse {
  return { refreshTokens: [], lastTokenReset: 0 };
}

export const CAuthenticationSupportQueryRefreshTokensByAccountResponse = {
  encode(
    message: CAuthenticationSupportQueryRefreshTokensByAccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.refreshTokens) {
      CSupportRefreshTokenDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTokenReset !== 0) {
      writer.uint32(16).int32(message.lastTokenReset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportQueryRefreshTokensByAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportQueryRefreshTokensByAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokens.push(CSupportRefreshTokenDescription.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastTokenReset = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportQueryRefreshTokensByAccountResponse {
    return {
      refreshTokens: Array.isArray(object?.refreshTokens)
        ? object.refreshTokens.map((e: any) => CSupportRefreshTokenDescription.fromJSON(e))
        : [],
      lastTokenReset: isSet(object.lastTokenReset) ? Number(object.lastTokenReset) : 0,
    };
  },

  toJSON(message: CAuthenticationSupportQueryRefreshTokensByAccountResponse): unknown {
    const obj: any = {};
    if (message.refreshTokens) {
      obj.refreshTokens = message.refreshTokens.map((e) => e ? CSupportRefreshTokenDescription.toJSON(e) : undefined);
    } else {
      obj.refreshTokens = [];
    }
    message.lastTokenReset !== undefined && (obj.lastTokenReset = Math.round(message.lastTokenReset));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokensByAccountResponse>, I>>(
    base?: I,
  ): CAuthenticationSupportQueryRefreshTokensByAccountResponse {
    return CAuthenticationSupportQueryRefreshTokensByAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokensByAccountResponse>, I>>(
    object: I,
  ): CAuthenticationSupportQueryRefreshTokensByAccountResponse {
    const message = createBaseCAuthenticationSupportQueryRefreshTokensByAccountResponse();
    message.refreshTokens = object.refreshTokens?.map((e) => CSupportRefreshTokenDescription.fromPartial(e)) || [];
    message.lastTokenReset = object.lastTokenReset ?? 0;
    return message;
  },
};

function createBaseCAuthenticationSupportQueryRefreshTokenByIDRequest(): CAuthenticationSupportQueryRefreshTokenByIDRequest {
  return { tokenId: 0 };
}

export const CAuthenticationSupportQueryRefreshTokenByIDRequest = {
  encode(
    message: CAuthenticationSupportQueryRefreshTokenByIDRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportQueryRefreshTokenByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportQueryRefreshTokenByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportQueryRefreshTokenByIDRequest {
    return { tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0 };
  },

  toJSON(message: CAuthenticationSupportQueryRefreshTokenByIDRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokenByIDRequest>, I>>(
    base?: I,
  ): CAuthenticationSupportQueryRefreshTokenByIDRequest {
    return CAuthenticationSupportQueryRefreshTokenByIDRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokenByIDRequest>, I>>(
    object: I,
  ): CAuthenticationSupportQueryRefreshTokenByIDRequest {
    const message = createBaseCAuthenticationSupportQueryRefreshTokenByIDRequest();
    message.tokenId = object.tokenId ?? 0;
    return message;
  },
};

function createBaseCAuthenticationSupportQueryRefreshTokenByIDResponse(): CAuthenticationSupportQueryRefreshTokenByIDResponse {
  return { refreshTokens: [] };
}

export const CAuthenticationSupportQueryRefreshTokenByIDResponse = {
  encode(
    message: CAuthenticationSupportQueryRefreshTokenByIDResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.refreshTokens) {
      CSupportRefreshTokenDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportQueryRefreshTokenByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportQueryRefreshTokenByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refreshTokens.push(CSupportRefreshTokenDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportQueryRefreshTokenByIDResponse {
    return {
      refreshTokens: Array.isArray(object?.refreshTokens)
        ? object.refreshTokens.map((e: any) => CSupportRefreshTokenDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAuthenticationSupportQueryRefreshTokenByIDResponse): unknown {
    const obj: any = {};
    if (message.refreshTokens) {
      obj.refreshTokens = message.refreshTokens.map((e) => e ? CSupportRefreshTokenDescription.toJSON(e) : undefined);
    } else {
      obj.refreshTokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokenByIDResponse>, I>>(
    base?: I,
  ): CAuthenticationSupportQueryRefreshTokenByIDResponse {
    return CAuthenticationSupportQueryRefreshTokenByIDResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportQueryRefreshTokenByIDResponse>, I>>(
    object: I,
  ): CAuthenticationSupportQueryRefreshTokenByIDResponse {
    const message = createBaseCAuthenticationSupportQueryRefreshTokenByIDResponse();
    message.refreshTokens = object.refreshTokens?.map((e) => CSupportRefreshTokenDescription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCAuthenticationSupportRevokeTokenRequest(): CAuthenticationSupportRevokeTokenRequest {
  return { tokenId: 0, steamid: 0 };
}

export const CAuthenticationSupportRevokeTokenRequest = {
  encode(message: CAuthenticationSupportRevokeTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportRevokeTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportRevokeTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportRevokeTokenRequest {
    return {
      tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CAuthenticationSupportRevokeTokenRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportRevokeTokenRequest>, I>>(
    base?: I,
  ): CAuthenticationSupportRevokeTokenRequest {
    return CAuthenticationSupportRevokeTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportRevokeTokenRequest>, I>>(
    object: I,
  ): CAuthenticationSupportRevokeTokenRequest {
    const message = createBaseCAuthenticationSupportRevokeTokenRequest();
    message.tokenId = object.tokenId ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCAuthenticationSupportRevokeTokenResponse(): CAuthenticationSupportRevokeTokenResponse {
  return {};
}

export const CAuthenticationSupportRevokeTokenResponse = {
  encode(_: CAuthenticationSupportRevokeTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportRevokeTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportRevokeTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CAuthenticationSupportRevokeTokenResponse {
    return {};
  },

  toJSON(_: CAuthenticationSupportRevokeTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportRevokeTokenResponse>, I>>(
    base?: I,
  ): CAuthenticationSupportRevokeTokenResponse {
    return CAuthenticationSupportRevokeTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportRevokeTokenResponse>, I>>(
    _: I,
  ): CAuthenticationSupportRevokeTokenResponse {
    const message = createBaseCAuthenticationSupportRevokeTokenResponse();
    return message;
  },
};

function createBaseCAuthenticationSupportGetTokenHistoryRequest(): CAuthenticationSupportGetTokenHistoryRequest {
  return { tokenId: 0 };
}

export const CAuthenticationSupportGetTokenHistoryRequest = {
  encode(message: CAuthenticationSupportGetTokenHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== 0) {
      writer.uint32(9).fixed64(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportGetTokenHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportGetTokenHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportGetTokenHistoryRequest {
    return { tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0 };
  },

  toJSON(message: CAuthenticationSupportGetTokenHistoryRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportGetTokenHistoryRequest>, I>>(
    base?: I,
  ): CAuthenticationSupportGetTokenHistoryRequest {
    return CAuthenticationSupportGetTokenHistoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportGetTokenHistoryRequest>, I>>(
    object: I,
  ): CAuthenticationSupportGetTokenHistoryRequest {
    const message = createBaseCAuthenticationSupportGetTokenHistoryRequest();
    message.tokenId = object.tokenId ?? 0;
    return message;
  },
};

function createBaseCSupportRefreshTokenAudit(): CSupportRefreshTokenAudit {
  return { action: 0, time: 0, ip: undefined, actor: 0 };
}

export const CSupportRefreshTokenAudit = {
  encode(message: CSupportRefreshTokenAudit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.time !== 0) {
      writer.uint32(16).uint32(message.time);
    }
    if (message.ip !== undefined) {
      CMsgIPAddress.encode(message.ip, writer.uint32(26).fork()).ldelim();
    }
    if (message.actor !== 0) {
      writer.uint32(33).fixed64(message.actor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSupportRefreshTokenAudit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSupportRefreshTokenAudit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32();
          break;
        case 2:
          message.time = reader.uint32();
          break;
        case 3:
          message.ip = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 4:
          message.actor = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSupportRefreshTokenAudit {
    return {
      action: isSet(object.action) ? Number(object.action) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      ip: isSet(object.ip) ? CMsgIPAddress.fromJSON(object.ip) : undefined,
      actor: isSet(object.actor) ? Number(object.actor) : 0,
    };
  },

  toJSON(message: CSupportRefreshTokenAudit): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = Math.round(message.action));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.ip !== undefined && (obj.ip = message.ip ? CMsgIPAddress.toJSON(message.ip) : undefined);
    message.actor !== undefined && (obj.actor = Math.round(message.actor));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSupportRefreshTokenAudit>, I>>(base?: I): CSupportRefreshTokenAudit {
    return CSupportRefreshTokenAudit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSupportRefreshTokenAudit>, I>>(object: I): CSupportRefreshTokenAudit {
    const message = createBaseCSupportRefreshTokenAudit();
    message.action = object.action ?? 0;
    message.time = object.time ?? 0;
    message.ip = (object.ip !== undefined && object.ip !== null) ? CMsgIPAddress.fromPartial(object.ip) : undefined;
    message.actor = object.actor ?? 0;
    return message;
  },
};

function createBaseCAuthenticationSupportGetTokenHistoryResponse(): CAuthenticationSupportGetTokenHistoryResponse {
  return { history: [] };
}

export const CAuthenticationSupportGetTokenHistoryResponse = {
  encode(message: CAuthenticationSupportGetTokenHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.history) {
      CSupportRefreshTokenAudit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationSupportGetTokenHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationSupportGetTokenHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(CSupportRefreshTokenAudit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationSupportGetTokenHistoryResponse {
    return {
      history: Array.isArray(object?.history)
        ? object.history.map((e: any) => CSupportRefreshTokenAudit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAuthenticationSupportGetTokenHistoryResponse): unknown {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map((e) => e ? CSupportRefreshTokenAudit.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationSupportGetTokenHistoryResponse>, I>>(
    base?: I,
  ): CAuthenticationSupportGetTokenHistoryResponse {
    return CAuthenticationSupportGetTokenHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationSupportGetTokenHistoryResponse>, I>>(
    object: I,
  ): CAuthenticationSupportGetTokenHistoryResponse {
    const message = createBaseCAuthenticationSupportGetTokenHistoryResponse();
    message.history = object.history?.map((e) => CSupportRefreshTokenAudit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudGamingCreateNonceRequest(): CCloudGamingCreateNonceRequest {
  return { platform: "", appid: 0 };
}

export const CCloudGamingCreateNonceRequest = {
  encode(message: CCloudGamingCreateNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGamingCreateNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGamingCreateNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.string();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGamingCreateNonceRequest {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CCloudGamingCreateNonceRequest): unknown {
    const obj: any = {};
    message.platform !== undefined && (obj.platform = message.platform);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGamingCreateNonceRequest>, I>>(base?: I): CCloudGamingCreateNonceRequest {
    return CCloudGamingCreateNonceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGamingCreateNonceRequest>, I>>(
    object: I,
  ): CCloudGamingCreateNonceRequest {
    const message = createBaseCCloudGamingCreateNonceRequest();
    message.platform = object.platform ?? "";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCCloudGamingCreateNonceResponse(): CCloudGamingCreateNonceResponse {
  return { nonce: "", expiry: 0 };
}

export const CCloudGamingCreateNonceResponse = {
  encode(message: CCloudGamingCreateNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    if (message.expiry !== 0) {
      writer.uint32(16).uint32(message.expiry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGamingCreateNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGamingCreateNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        case 2:
          message.expiry = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGamingCreateNonceResponse {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
    };
  },

  toJSON(message: CCloudGamingCreateNonceResponse): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGamingCreateNonceResponse>, I>>(base?: I): CCloudGamingCreateNonceResponse {
    return CCloudGamingCreateNonceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGamingCreateNonceResponse>, I>>(
    object: I,
  ): CCloudGamingCreateNonceResponse {
    const message = createBaseCCloudGamingCreateNonceResponse();
    message.nonce = object.nonce ?? "";
    message.expiry = object.expiry ?? 0;
    return message;
  },
};

function createBaseCCloudGamingGetTimeRemainingRequest(): CCloudGamingGetTimeRemainingRequest {
  return { platform: "", appidList: [] };
}

export const CCloudGamingGetTimeRemainingRequest = {
  encode(message: CCloudGamingGetTimeRemainingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    writer.uint32(18).fork();
    for (const v of message.appidList) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGamingGetTimeRemainingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGamingGetTimeRemainingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appidList.push(reader.uint32());
            }
          } else {
            message.appidList.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGamingGetTimeRemainingRequest {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      appidList: Array.isArray(object?.appidList) ? object.appidList.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CCloudGamingGetTimeRemainingRequest): unknown {
    const obj: any = {};
    message.platform !== undefined && (obj.platform = message.platform);
    if (message.appidList) {
      obj.appidList = message.appidList.map((e) => Math.round(e));
    } else {
      obj.appidList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGamingGetTimeRemainingRequest>, I>>(
    base?: I,
  ): CCloudGamingGetTimeRemainingRequest {
    return CCloudGamingGetTimeRemainingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGamingGetTimeRemainingRequest>, I>>(
    object: I,
  ): CCloudGamingGetTimeRemainingRequest {
    const message = createBaseCCloudGamingGetTimeRemainingRequest();
    message.platform = object.platform ?? "";
    message.appidList = object.appidList?.map((e) => e) || [];
    return message;
  },
};

function createBaseCCloudGamingTimeRemaining(): CCloudGamingTimeRemaining {
  return { appid: 0, minutesRemaining: 0 };
}

export const CCloudGamingTimeRemaining = {
  encode(message: CCloudGamingTimeRemaining, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.minutesRemaining !== 0) {
      writer.uint32(16).uint32(message.minutesRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGamingTimeRemaining {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGamingTimeRemaining();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.minutesRemaining = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGamingTimeRemaining {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      minutesRemaining: isSet(object.minutesRemaining) ? Number(object.minutesRemaining) : 0,
    };
  },

  toJSON(message: CCloudGamingTimeRemaining): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.minutesRemaining !== undefined && (obj.minutesRemaining = Math.round(message.minutesRemaining));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGamingTimeRemaining>, I>>(base?: I): CCloudGamingTimeRemaining {
    return CCloudGamingTimeRemaining.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGamingTimeRemaining>, I>>(object: I): CCloudGamingTimeRemaining {
    const message = createBaseCCloudGamingTimeRemaining();
    message.appid = object.appid ?? 0;
    message.minutesRemaining = object.minutesRemaining ?? 0;
    return message;
  },
};

function createBaseCCloudGamingGetTimeRemainingResponse(): CCloudGamingGetTimeRemainingResponse {
  return { entries: [] };
}

export const CCloudGamingGetTimeRemainingResponse = {
  encode(message: CCloudGamingGetTimeRemainingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CCloudGamingTimeRemaining.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGamingGetTimeRemainingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGamingGetTimeRemainingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.entries.push(CCloudGamingTimeRemaining.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGamingGetTimeRemainingResponse {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CCloudGamingTimeRemaining.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudGamingGetTimeRemainingResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CCloudGamingTimeRemaining.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGamingGetTimeRemainingResponse>, I>>(
    base?: I,
  ): CCloudGamingGetTimeRemainingResponse {
    return CCloudGamingGetTimeRemainingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGamingGetTimeRemainingResponse>, I>>(
    object: I,
  ): CCloudGamingGetTimeRemainingResponse {
    const message = createBaseCCloudGamingGetTimeRemainingResponse();
    message.entries = object.entries?.map((e) => CCloudGamingTimeRemaining.fromPartial(e)) || [];
    return message;
  },
};

export interface Authentication {
  GetPasswordRSAPublicKey(
    request: CAuthenticationGetPasswordRSAPublicKeyRequest,
  ): Promise<CAuthenticationGetPasswordRSAPublicKeyResponse>;
  BeginAuthSessionViaQR(
    request: CAuthenticationBeginAuthSessionViaQRRequest,
  ): Promise<CAuthenticationBeginAuthSessionViaQRResponse>;
  BeginAuthSessionViaCredentials(
    request: CAuthenticationBeginAuthSessionViaCredentialsRequest,
  ): Promise<CAuthenticationBeginAuthSessionViaCredentialsResponse>;
  PollAuthSessionStatus(
    request: CAuthenticationPollAuthSessionStatusRequest,
  ): Promise<CAuthenticationPollAuthSessionStatusResponse>;
  GetAuthSessionInfo(
    request: CAuthenticationGetAuthSessionInfoRequest,
  ): Promise<CAuthenticationGetAuthSessionInfoResponse>;
  UpdateAuthSessionWithMobileConfirmation(
    request: CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
  ): Promise<CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse>;
  UpdateAuthSessionWithSteamGuardCode(
    request: CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
  ): Promise<CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse>;
  GenerateAccessTokenForApp(
    request: CAuthenticationAccessTokenGenerateForAppRequest,
  ): Promise<CAuthenticationAccessTokenGenerateForAppResponse>;
  EnumerateTokens(
    request: CAuthenticationRefreshTokenEnumerateRequest,
  ): Promise<CAuthenticationRefreshTokenEnumerateResponse>;
  GetAuthSessionsForAccount(
    request: CAuthenticationGetAuthSessionsForAccountRequest,
  ): Promise<CAuthenticationGetAuthSessionsForAccountResponse>;
  MigrateMobileSession(
    request: CAuthenticationMigrateMobileSessionRequest,
  ): Promise<CAuthenticationMigrateMobileSessionResponse>;
  RevokeRefreshToken(
    request: CAuthenticationRefreshTokenRevokeRequest,
  ): Promise<CAuthenticationRefreshTokenRevokeResponse>;
}

export class AuthenticationClientImpl implements Authentication {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Authentication";
    this.rpc = rpc;
    this.GetPasswordRSAPublicKey = this.GetPasswordRSAPublicKey.bind(this);
    this.BeginAuthSessionViaQR = this.BeginAuthSessionViaQR.bind(this);
    this.BeginAuthSessionViaCredentials = this.BeginAuthSessionViaCredentials.bind(this);
    this.PollAuthSessionStatus = this.PollAuthSessionStatus.bind(this);
    this.GetAuthSessionInfo = this.GetAuthSessionInfo.bind(this);
    this.UpdateAuthSessionWithMobileConfirmation = this.UpdateAuthSessionWithMobileConfirmation.bind(this);
    this.UpdateAuthSessionWithSteamGuardCode = this.UpdateAuthSessionWithSteamGuardCode.bind(this);
    this.GenerateAccessTokenForApp = this.GenerateAccessTokenForApp.bind(this);
    this.EnumerateTokens = this.EnumerateTokens.bind(this);
    this.GetAuthSessionsForAccount = this.GetAuthSessionsForAccount.bind(this);
    this.MigrateMobileSession = this.MigrateMobileSession.bind(this);
    this.RevokeRefreshToken = this.RevokeRefreshToken.bind(this);
  }
  GetPasswordRSAPublicKey(
    request: CAuthenticationGetPasswordRSAPublicKeyRequest,
  ): Promise<CAuthenticationGetPasswordRSAPublicKeyResponse> {
    const data = CAuthenticationGetPasswordRSAPublicKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPasswordRSAPublicKey", data);
    return promise.then((data) => CAuthenticationGetPasswordRSAPublicKeyResponse.decode(new _m0.Reader(data)));
  }

  BeginAuthSessionViaQR(
    request: CAuthenticationBeginAuthSessionViaQRRequest,
  ): Promise<CAuthenticationBeginAuthSessionViaQRResponse> {
    const data = CAuthenticationBeginAuthSessionViaQRRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginAuthSessionViaQR", data);
    return promise.then((data) => CAuthenticationBeginAuthSessionViaQRResponse.decode(new _m0.Reader(data)));
  }

  BeginAuthSessionViaCredentials(
    request: CAuthenticationBeginAuthSessionViaCredentialsRequest,
  ): Promise<CAuthenticationBeginAuthSessionViaCredentialsResponse> {
    const data = CAuthenticationBeginAuthSessionViaCredentialsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginAuthSessionViaCredentials", data);
    return promise.then((data) => CAuthenticationBeginAuthSessionViaCredentialsResponse.decode(new _m0.Reader(data)));
  }

  PollAuthSessionStatus(
    request: CAuthenticationPollAuthSessionStatusRequest,
  ): Promise<CAuthenticationPollAuthSessionStatusResponse> {
    const data = CAuthenticationPollAuthSessionStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PollAuthSessionStatus", data);
    return promise.then((data) => CAuthenticationPollAuthSessionStatusResponse.decode(new _m0.Reader(data)));
  }

  GetAuthSessionInfo(
    request: CAuthenticationGetAuthSessionInfoRequest,
  ): Promise<CAuthenticationGetAuthSessionInfoResponse> {
    const data = CAuthenticationGetAuthSessionInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAuthSessionInfo", data);
    return promise.then((data) => CAuthenticationGetAuthSessionInfoResponse.decode(new _m0.Reader(data)));
  }

  UpdateAuthSessionWithMobileConfirmation(
    request: CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest,
  ): Promise<CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse> {
    const data = CAuthenticationUpdateAuthSessionWithMobileConfirmationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAuthSessionWithMobileConfirmation", data);
    return promise.then((data) =>
      CAuthenticationUpdateAuthSessionWithMobileConfirmationResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateAuthSessionWithSteamGuardCode(
    request: CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest,
  ): Promise<CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse> {
    const data = CAuthenticationUpdateAuthSessionWithSteamGuardCodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAuthSessionWithSteamGuardCode", data);
    return promise.then((data) =>
      CAuthenticationUpdateAuthSessionWithSteamGuardCodeResponse.decode(new _m0.Reader(data))
    );
  }

  GenerateAccessTokenForApp(
    request: CAuthenticationAccessTokenGenerateForAppRequest,
  ): Promise<CAuthenticationAccessTokenGenerateForAppResponse> {
    const data = CAuthenticationAccessTokenGenerateForAppRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GenerateAccessTokenForApp", data);
    return promise.then((data) => CAuthenticationAccessTokenGenerateForAppResponse.decode(new _m0.Reader(data)));
  }

  EnumerateTokens(
    request: CAuthenticationRefreshTokenEnumerateRequest,
  ): Promise<CAuthenticationRefreshTokenEnumerateResponse> {
    const data = CAuthenticationRefreshTokenEnumerateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnumerateTokens", data);
    return promise.then((data) => CAuthenticationRefreshTokenEnumerateResponse.decode(new _m0.Reader(data)));
  }

  GetAuthSessionsForAccount(
    request: CAuthenticationGetAuthSessionsForAccountRequest,
  ): Promise<CAuthenticationGetAuthSessionsForAccountResponse> {
    const data = CAuthenticationGetAuthSessionsForAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAuthSessionsForAccount", data);
    return promise.then((data) => CAuthenticationGetAuthSessionsForAccountResponse.decode(new _m0.Reader(data)));
  }

  MigrateMobileSession(
    request: CAuthenticationMigrateMobileSessionRequest,
  ): Promise<CAuthenticationMigrateMobileSessionResponse> {
    const data = CAuthenticationMigrateMobileSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MigrateMobileSession", data);
    return promise.then((data) => CAuthenticationMigrateMobileSessionResponse.decode(new _m0.Reader(data)));
  }

  RevokeRefreshToken(
    request: CAuthenticationRefreshTokenRevokeRequest,
  ): Promise<CAuthenticationRefreshTokenRevokeResponse> {
    const data = CAuthenticationRefreshTokenRevokeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeRefreshToken", data);
    return promise.then((data) => CAuthenticationRefreshTokenRevokeResponse.decode(new _m0.Reader(data)));
  }
}

export interface AuthenticationSupport {
  QueryRefreshTokensByAccount(
    request: CAuthenticationSupportQueryRefreshTokensByAccountRequest,
  ): Promise<CAuthenticationSupportQueryRefreshTokensByAccountResponse>;
  QueryRefreshTokenByID(
    request: CAuthenticationSupportQueryRefreshTokenByIDRequest,
  ): Promise<CAuthenticationSupportQueryRefreshTokenByIDResponse>;
  RevokeToken(request: CAuthenticationSupportRevokeTokenRequest): Promise<CAuthenticationSupportRevokeTokenResponse>;
  GetTokenHistory(
    request: CAuthenticationSupportGetTokenHistoryRequest,
  ): Promise<CAuthenticationSupportGetTokenHistoryResponse>;
}

export class AuthenticationSupportClientImpl implements AuthenticationSupport {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AuthenticationSupport";
    this.rpc = rpc;
    this.QueryRefreshTokensByAccount = this.QueryRefreshTokensByAccount.bind(this);
    this.QueryRefreshTokenByID = this.QueryRefreshTokenByID.bind(this);
    this.RevokeToken = this.RevokeToken.bind(this);
    this.GetTokenHistory = this.GetTokenHistory.bind(this);
  }
  QueryRefreshTokensByAccount(
    request: CAuthenticationSupportQueryRefreshTokensByAccountRequest,
  ): Promise<CAuthenticationSupportQueryRefreshTokensByAccountResponse> {
    const data = CAuthenticationSupportQueryRefreshTokensByAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryRefreshTokensByAccount", data);
    return promise.then((data) =>
      CAuthenticationSupportQueryRefreshTokensByAccountResponse.decode(new _m0.Reader(data))
    );
  }

  QueryRefreshTokenByID(
    request: CAuthenticationSupportQueryRefreshTokenByIDRequest,
  ): Promise<CAuthenticationSupportQueryRefreshTokenByIDResponse> {
    const data = CAuthenticationSupportQueryRefreshTokenByIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryRefreshTokenByID", data);
    return promise.then((data) => CAuthenticationSupportQueryRefreshTokenByIDResponse.decode(new _m0.Reader(data)));
  }

  RevokeToken(request: CAuthenticationSupportRevokeTokenRequest): Promise<CAuthenticationSupportRevokeTokenResponse> {
    const data = CAuthenticationSupportRevokeTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeToken", data);
    return promise.then((data) => CAuthenticationSupportRevokeTokenResponse.decode(new _m0.Reader(data)));
  }

  GetTokenHistory(
    request: CAuthenticationSupportGetTokenHistoryRequest,
  ): Promise<CAuthenticationSupportGetTokenHistoryResponse> {
    const data = CAuthenticationSupportGetTokenHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTokenHistory", data);
    return promise.then((data) => CAuthenticationSupportGetTokenHistoryResponse.decode(new _m0.Reader(data)));
  }
}

export interface CloudGaming {
  CreateNonce(request: CCloudGamingCreateNonceRequest): Promise<CCloudGamingCreateNonceResponse>;
  GetTimeRemaining(request: CCloudGamingGetTimeRemainingRequest): Promise<CCloudGamingGetTimeRemainingResponse>;
}

export class CloudGamingClientImpl implements CloudGaming {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "CloudGaming";
    this.rpc = rpc;
    this.CreateNonce = this.CreateNonce.bind(this);
    this.GetTimeRemaining = this.GetTimeRemaining.bind(this);
  }
  CreateNonce(request: CCloudGamingCreateNonceRequest): Promise<CCloudGamingCreateNonceResponse> {
    const data = CCloudGamingCreateNonceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateNonce", data);
    return promise.then((data) => CCloudGamingCreateNonceResponse.decode(new _m0.Reader(data)));
  }

  GetTimeRemaining(request: CCloudGamingGetTimeRemainingRequest): Promise<CCloudGamingGetTimeRemainingResponse> {
    const data = CCloudGamingGetTimeRemainingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTimeRemaining", data);
    return promise.then((data) => CCloudGamingGetTimeRemainingResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
