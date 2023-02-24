/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientUpdateUserGameInfo {
  steamidIdgs: number;
  gameid: number;
  gameIp: number;
  gamePort: number;
  token: Buffer;
}

export interface CMsgClientRichPresenceUpload {
  richPresenceKv: Buffer;
  steamidBroadcast: number[];
}

export interface CMsgClientRichPresenceRequest {
  steamidRequest: number[];
}

export interface CMsgClientRichPresenceInfo {
  richPresence: CMsgClientRichPresenceInfo_RichPresence[];
}

export interface CMsgClientRichPresenceInfo_RichPresence {
  steamidUser: number;
  richPresenceKv: Buffer;
}

export interface CMsgClientCheckFileSignature {
  appId: number;
}

export interface CMsgClientCheckFileSignatureResponse {
  appId: number;
  pid: number;
  eresult: number;
  filename: string;
  esignatureresult: number;
  shaFile: Buffer;
  signatureheader: Buffer;
  filesize: number;
  getlasterror: number;
  evalvesignaturecheckdetail: number;
}

export interface CMsgClientReadMachineAuth {
  filename: string;
  offset: number;
  cubtoread: number;
}

export interface CMsgClientReadMachineAuthResponse {
  filename: string;
  eresult: number;
  filesize: number;
  shaFile: Buffer;
  getlasterror: number;
  offset: number;
  cubread: number;
  bytesRead: Buffer;
  filenameSentry: string;
}

export interface CMsgClientUpdateMachineAuth {
  filename: string;
  offset: number;
  cubtowrite: number;
  bytes: Buffer;
  otpType: number;
  otpIdentifier: string;
  otpSharedsecret: Buffer;
  otpTimedrift: number;
}

export interface CMsgClientUpdateMachineAuthResponse {
  filename: string;
  eresult: number;
  filesize: number;
  shaFile: Buffer;
  getlasterror: number;
  offset: number;
  cubwrote: number;
  otpType: number;
  otpValue: number;
  otpIdentifier: string;
}

export interface CMsgClientRequestMachineAuth {
  filename: string;
  eresultSentryfile: number;
  filesize: number;
  shaSentryfile: Buffer;
  lockAccountAction: number;
  otpType: number;
  otpIdentifier: string;
  otpSharedsecret: Buffer;
  otpValue: number;
  machineName: string;
  machineNameUserchosen: string;
}

export interface CMsgClientRequestMachineAuthResponse {
  eresult: number;
}

export interface CMsgClientRegisterKey {
  key: string;
}

export interface CMsgClientPurchaseResponse {
  eresult: number;
  purchaseResultDetails: number;
  purchaseReceiptInfo: Buffer;
}

export interface CMsgClientActivateOEMLicense {
  biosManufacturer: string;
  biosSerialnumber: string;
  licenseFile: Buffer;
  mainboardManufacturer: string;
  mainboardProduct: string;
  mainboardSerialnumber: string;
}

export interface CMsgClientRegisterOEMMachine {
  oemRegisterFile: Buffer;
}

export interface CMsgClientRegisterOEMMachineResponse {
  eresult: number;
}

export interface CMsgClientPurchaseWithMachineID {
  packageId: number;
  machineInfo: Buffer;
}

export interface CMsgTradingInitiateTradeRequest {
  tradeRequestId: number;
  otherSteamid: number;
  otherName: string;
}

export interface CMsgTradingInitiateTradeResponse {
  response: number;
  tradeRequestId: number;
  otherSteamid: number;
  steamguardRequiredDays: number;
  newDeviceCooldownDays: number;
  defaultPasswordResetProbationDays: number;
  passwordResetProbationDays: number;
  defaultEmailChangeProbationDays: number;
  emailChangeProbationDays: number;
}

export interface CMsgTradingCancelTradeRequest {
  otherSteamid: number;
}

export interface CMsgTradingStartSession {
  otherSteamid: number;
}

export interface CMsgClientGetCDNAuthToken {
  depotId: number;
  hostName: string;
  appId: number;
}

export interface CMsgClientGetDepotDecryptionKey {
  depotId: number;
  appId: number;
}

export interface CMsgClientGetDepotDecryptionKeyResponse {
  eresult: number;
  depotId: number;
  depotEncryptionKey: Buffer;
}

export interface CMsgClientCheckAppBetaPassword {
  appId: number;
  betapassword: string;
  language: number;
}

export interface CMsgClientCheckAppBetaPasswordResponse {
  eresult: number;
  betapasswords: CMsgClientCheckAppBetaPasswordResponse_BetaPassword[];
}

export interface CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
  betaname: string;
  betapassword: string;
  betadescription: string;
}

export interface CMsgClientGetCDNAuthTokenResponse {
  eresult: number;
  token: string;
  expirationTime: number;
}

export interface CMsgDownloadRateStatistics {
  cellId: number;
  stats: CMsgDownloadRateStatistics_StatsInfo[];
  throttlingKbps: number;
  steamRealm: number;
}

export interface CMsgDownloadRateStatistics_StatsInfo {
  sourceType: number;
  sourceId: number;
  seconds: number;
  bytes: number;
  hostName: string;
  microseconds: number;
  usedIpv6: boolean;
  proxied: boolean;
}

export interface CMsgClientRequestAccountData {
  accountOrEmail: string;
  action: number;
}

export interface CMsgClientRequestAccountDataResponse {
  action: number;
  eresult: number;
  accountName: string;
  ctMatches: number;
  accountNameSuggestion1: string;
  accountNameSuggestion2: string;
  accountNameSuggestion3: string;
}

export interface CMsgClientUGSGetGlobalStats {
  gameid: number;
  historyDaysRequested: number;
  timeLastRequested: number;
  firstDayCached: number;
  daysCached: number;
}

export interface CMsgClientUGSGetGlobalStatsResponse {
  eresult: number;
  timestamp: number;
  dayCurrent: number;
  days: CMsgClientUGSGetGlobalStatsResponse_Day[];
}

export interface CMsgClientUGSGetGlobalStatsResponse_Day {
  dayId: number;
  stats: CMsgClientUGSGetGlobalStatsResponse_Day_Stat[];
}

export interface CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
  statId: number;
  data: number;
}

export interface CMsgClientRedeemGuestPass {
  guestPassId: number;
}

export interface CMsgClientRedeemGuestPassResponse {
  eresult: number;
  packageId: number;
  mustOwnAppid: number;
}

export interface CMsgClientGetClanActivityCounts {
  steamidClans: number[];
}

export interface CMsgClientGetClanActivityCountsResponse {
  eresult: number;
}

export interface CMsgClientOGSReportString {
  accumulated: boolean;
  sessionid: number;
  severity: number;
  formatter: string;
  varargs: Buffer;
}

export interface CMsgClientOGSReportBug {
  sessionid: number;
  bugtext: string;
  screenshot: Buffer;
}

export interface CMsgClientSentLogs {
}

export interface CMsgGCClient {
  appid: number;
  msgtype: number;
  payload: Buffer;
  steamid: number;
  gcname: string;
  ip: number;
}

export interface CMsgClientRequestFreeLicense {
  appids: number[];
}

export interface CMsgClientRequestFreeLicenseResponse {
  eresult: number;
  grantedPackageids: number[];
  grantedAppids: number[];
}

export interface CMsgDRMDownloadRequestWithCrashData {
  downloadFlags: number;
  downloadTypesKnown: number;
  guidDrm: Buffer;
  guidSplit: Buffer;
  guidMerge: Buffer;
  moduleName: string;
  modulePath: string;
  crashData: Buffer;
}

export interface CMsgDRMDownloadResponse {
  eresult: number;
  appId: number;
  blobDownloadType: number;
  mergeGuid: Buffer;
  downloadFileDfsIp: number;
  downloadFileDfsPort: number;
  downloadFileUrl: string;
  modulePath: string;
}

export interface CMsgDRMFinalResult {
  eResult: number;
  appId: number;
  blobDownloadType: number;
  errorDetail: number;
  mergeGuid: Buffer;
  downloadFileDfsIp: number;
  downloadFileDfsPort: number;
  downloadFileUrl: string;
}

export interface CMsgClientDPCheckSpecialSurvey {
  surveyId: number;
}

export interface CMsgClientDPCheckSpecialSurveyResponse {
  eResult: number;
  state: number;
  name: string;
  customUrl: string;
  includeSoftware: boolean;
  token: Buffer;
}

export interface CMsgClientDPSendSpecialSurveyResponse {
  surveyId: number;
  data: Buffer;
}

export interface CMsgClientDPSendSpecialSurveyResponseReply {
  eResult: number;
  token: Buffer;
}

export interface CMsgClientRequestForgottenPasswordEmail {
  accountName: string;
  passwordTried: string;
}

export interface CMsgClientRequestForgottenPasswordEmailResponse {
  eResult: number;
  useSecretQuestion: boolean;
}

export interface CMsgClientItemAnnouncements {
  countNewItems: number;
  unseenItems: CMsgClientItemAnnouncements_UnseenItem[];
}

export interface CMsgClientItemAnnouncements_UnseenItem {
  appid: number;
  contextId: number;
  assetId: number;
  amount: number;
  rtime32Gained: number;
  sourceAppid: number;
}

export interface CMsgClientRequestItemAnnouncements {
}

export interface CMsgClientUserNotifications {
  notifications: CMsgClientUserNotifications_Notification[];
}

export interface CMsgClientUserNotifications_Notification {
  userNotificationType: number;
  count: number;
}

export interface CMsgClientCommentNotifications {
  countNewComments: number;
  countNewCommentsOwner: number;
  countNewCommentsSubscriptions: number;
}

export interface CMsgClientRequestCommentNotifications {
}

export interface CMsgClientOfflineMessageNotification {
  offlineMessages: number;
  friendsWithOfflineMessages: number[];
}

export interface CMsgClientRequestOfflineMessageCount {
}

export interface CMsgClientChatGetFriendMessageHistory {
  steamid: number;
}

export interface CMsgClientChatGetFriendMessageHistoryResponse {
  steamid: number;
  success: number;
  messages: CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage[];
}

export interface CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
  accountid: number;
  timestamp: number;
  message: string;
  unread: boolean;
}

export interface CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
}

export interface CMsgClientFSGetFriendsSteamLevels {
  accountids: number[];
}

export interface CMsgClientFSGetFriendsSteamLevelsResponse {
  friends: CMsgClientFSGetFriendsSteamLevelsResponse_Friend[];
}

export interface CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
  accountid: number;
  level: number;
}

export interface CMsgClientEmailAddrInfo {
  emailAddress: string;
  emailIsValidated: boolean;
  emailValidationChanged: boolean;
  credentialChangeRequiresCode: boolean;
  passwordOrSecretqaChangeRequiresCode: boolean;
}

export interface CMsgCREItemVoteSummary {
  publishedFileIds: CMsgCREItemVoteSummary_PublishedFileId[];
}

export interface CMsgCREItemVoteSummary_PublishedFileId {
  publishedFileId: number;
}

export interface CMsgCREItemVoteSummaryResponse {
  eresult: number;
  itemVoteSummaries: CMsgCREItemVoteSummaryResponse_ItemVoteSummary[];
}

export interface CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
  publishedFileId: number;
  votesFor: number;
  votesAgainst: number;
  reports: number;
  score: number;
}

export interface CMsgCREUpdateUserPublishedItemVote {
  publishedFileId: number;
  voteUp: boolean;
}

export interface CMsgCREUpdateUserPublishedItemVoteResponse {
  eresult: number;
}

export interface CMsgCREGetUserPublishedItemVoteDetails {
  publishedFileIds: CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId[];
}

export interface CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
  publishedFileId: number;
}

export interface CMsgCREGetUserPublishedItemVoteDetailsResponse {
  eresult: number;
  userItemVoteDetails: CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail[];
}

export interface CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
  publishedFileId: number;
  vote: number;
}

export interface CMsgFSGetFollowerCount {
  steamId: number;
}

export interface CMsgFSGetFollowerCountResponse {
  eresult: number;
  count: number;
}

export interface CMsgFSGetIsFollowing {
  steamId: number;
}

export interface CMsgFSGetIsFollowingResponse {
  eresult: number;
  isFollowing: boolean;
}

export interface CMsgFSEnumerateFollowingList {
  startIndex: number;
}

export interface CMsgFSEnumerateFollowingListResponse {
  eresult: number;
  totalResults: number;
  steamIds: number[];
}

export interface CMsgDPGetNumberOfCurrentPlayers {
  appid: number;
}

export interface CMsgDPGetNumberOfCurrentPlayersResponse {
  eresult: number;
  playerCount: number;
}

export interface CMsgClientFriendUserStatusPublished {
  friendSteamid: number;
  appid: number;
  statusText: string;
}

export interface CMsgClientServiceMethodLegacy {
  methodName: string;
  serializedMethod: Buffer;
  isNotification: boolean;
}

export interface CMsgClientServiceMethodLegacyResponse {
  methodName: string;
  serializedMethodResponse: Buffer;
}

export interface CMsgClientUIMode {
  uimode: number;
  chatMode: number;
}

export interface CMsgClientVanityURLChangedNotification {
  vanityUrl: string;
}

export interface CMsgClientAuthorizeLocalDeviceRequest {
  deviceDescription: string;
  ownerAccountId: number;
  localDeviceToken: number;
}

export interface CMsgClientAuthorizeLocalDevice {
  eresult: number;
  ownerAccountId: number;
  authedDeviceToken: number;
}

export interface CMsgClientAuthorizeLocalDeviceNotification {
  eresult: number;
  ownerAccountId: number;
  localDeviceToken: number;
}

export interface CMsgClientDeauthorizeDeviceRequest {
  deauthorizationAccountId: number;
  deauthorizationDeviceToken: number;
}

export interface CMsgClientDeauthorizeDevice {
  eresult: number;
  deauthorizationAccountId: number;
}

export interface CMsgClientUseLocalDeviceAuthorizations {
  authorizationAccountId: number[];
  deviceTokens: CMsgClientUseLocalDeviceAuthorizations_DeviceToken[];
}

export interface CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
  ownerAccountId: number;
  tokenId: number;
}

export interface CMsgClientGetAuthorizedDevices {
}

export interface CMsgClientGetAuthorizedDevicesResponse {
  eresult: number;
  authorizedDevice: CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice[];
}

export interface CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
  authDeviceToken: number;
  deviceName: string;
  lastAccessTime: number;
  borrowerId: number;
  isPending: boolean;
  appPlayed: number;
}

export interface CMsgClientSharedLibraryLockStatus {
  lockedLibrary: CMsgClientSharedLibraryLockStatus_LockedLibrary[];
  ownLibraryLockedBy: number;
}

export interface CMsgClientSharedLibraryLockStatus_LockedLibrary {
  ownerId: number;
  lockedBy: number;
}

export interface CMsgClientSharedLibraryStopPlaying {
  secondsLeft: number;
  stopApps: CMsgClientSharedLibraryStopPlaying_StopApp[];
}

export interface CMsgClientSharedLibraryStopPlaying_StopApp {
  appId: number;
  ownerId: number;
}

export interface CMsgClientServiceCall {
  sysidRouting: Buffer;
  callHandle: number;
  moduleCrc: number;
  moduleHash: Buffer;
  functionId: number;
  cubOutputMax: number;
  flags: number;
  callparameter: Buffer;
  pingOnly: boolean;
  maxOutstandingCalls: number;
  appId: number;
}

export interface CMsgClientServiceModule {
  moduleCrc: number;
  moduleHash: Buffer;
  moduleContent: Buffer;
}

export interface CMsgClientServiceCallResponse {
  sysidRouting: Buffer;
  callHandle: number;
  moduleCrc: number;
  moduleHash: Buffer;
  ecallresult: number;
  resultContent: Buffer;
  osVersionInfo: Buffer;
  systemInfo: Buffer;
  loadAddress: number;
  exceptionRecord: Buffer;
  portableOsVersionInfo: Buffer;
  portableSystemInfo: Buffer;
  wasConverted: boolean;
  internalResult: number;
  currentCount: number;
  lastCallHandle: number;
  lastCallModuleCrc: number;
  lastCallSysidRouting: Buffer;
  lastEcallresult: number;
  lastCallissueDelta: number;
  lastCallcompleteDelta: number;
}

export interface CMsgAMUnlockH264 {
  appid: number;
  platform: number;
  reason: number;
}

export interface CMsgAMUnlockH264Response {
  eresult: number;
  encryptionKey: Buffer;
}

export interface CMsgClientPlayingSessionState {
  playingBlocked: boolean;
  playingApp: number;
}

export interface CMsgClientKickPlayingSession {
  onlyStopGame: boolean;
}

export interface CMsgClientVoiceCallPreAuthorize {
  callerSteamid: number;
  receiverSteamid: number;
  callerId: number;
  hangup: boolean;
}

export interface CMsgClientVoiceCallPreAuthorizeResponse {
  callerSteamid: number;
  receiverSteamid: number;
  eresult: number;
  callerId: number;
}

export interface CMsgBadgeCraftedNotification {
  appid: number;
  badgeLevel: number;
}

export interface CMsgClientStartPeerContentServer {
  steamid: number;
  clientRemoteId: number;
  appId: number;
  currentBuildId: number;
}

export interface CMsgClientStartPeerContentServerResponse {
  result: number;
  serverPort: number;
}

export interface CMsgClientGetPeerContentInfo {
  steamid: number;
  clientRemoteId: number;
}

export interface CMsgClientGetPeerContentInfoResponse {
  result: number;
  apps: number[];
}

function createBaseCMsgClientUpdateUserGameInfo(): CMsgClientUpdateUserGameInfo {
  return { steamidIdgs: 0, gameid: 0, gameIp: 0, gamePort: 0, token: Buffer.alloc(0) };
}

export const CMsgClientUpdateUserGameInfo = {
  encode(message: CMsgClientUpdateUserGameInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidIdgs !== 0) {
      writer.uint32(9).fixed64(message.steamidIdgs);
    }
    if (message.gameid !== 0) {
      writer.uint32(17).fixed64(message.gameid);
    }
    if (message.gameIp !== 0) {
      writer.uint32(24).uint32(message.gameIp);
    }
    if (message.gamePort !== 0) {
      writer.uint32(32).uint32(message.gamePort);
    }
    if (message.token.length !== 0) {
      writer.uint32(42).bytes(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUpdateUserGameInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUpdateUserGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidIdgs = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.gameid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.gameIp = reader.uint32();
          break;
        case 4:
          message.gamePort = reader.uint32();
          break;
        case 5:
          message.token = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUpdateUserGameInfo {
    return {
      steamidIdgs: isSet(object.steamidIdgs) ? Number(object.steamidIdgs) : 0,
      gameid: isSet(object.gameid) ? Number(object.gameid) : 0,
      gameIp: isSet(object.gameIp) ? Number(object.gameIp) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientUpdateUserGameInfo): unknown {
    const obj: any = {};
    message.steamidIdgs !== undefined && (obj.steamidIdgs = Math.round(message.steamidIdgs));
    message.gameid !== undefined && (obj.gameid = Math.round(message.gameid));
    message.gameIp !== undefined && (obj.gameIp = Math.round(message.gameIp));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUpdateUserGameInfo>, I>>(base?: I): CMsgClientUpdateUserGameInfo {
    return CMsgClientUpdateUserGameInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUpdateUserGameInfo>, I>>(object: I): CMsgClientUpdateUserGameInfo {
    const message = createBaseCMsgClientUpdateUserGameInfo();
    message.steamidIdgs = object.steamidIdgs ?? 0;
    message.gameid = object.gameid ?? 0;
    message.gameIp = object.gameIp ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.token = object.token ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientRichPresenceUpload(): CMsgClientRichPresenceUpload {
  return { richPresenceKv: Buffer.alloc(0), steamidBroadcast: [] };
}

export const CMsgClientRichPresenceUpload = {
  encode(message: CMsgClientRichPresenceUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.richPresenceKv.length !== 0) {
      writer.uint32(10).bytes(message.richPresenceKv);
    }
    writer.uint32(18).fork();
    for (const v of message.steamidBroadcast) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRichPresenceUpload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRichPresenceUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.richPresenceKv = reader.bytes() as Buffer;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidBroadcast.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.steamidBroadcast.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRichPresenceUpload {
    return {
      richPresenceKv: isSet(object.richPresenceKv)
        ? Buffer.from(bytesFromBase64(object.richPresenceKv))
        : Buffer.alloc(0),
      steamidBroadcast: Array.isArray(object?.steamidBroadcast)
        ? object.steamidBroadcast.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgClientRichPresenceUpload): unknown {
    const obj: any = {};
    message.richPresenceKv !== undefined &&
      (obj.richPresenceKv = base64FromBytes(
        message.richPresenceKv !== undefined ? message.richPresenceKv : Buffer.alloc(0),
      ));
    if (message.steamidBroadcast) {
      obj.steamidBroadcast = message.steamidBroadcast.map((e) => Math.round(e));
    } else {
      obj.steamidBroadcast = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRichPresenceUpload>, I>>(base?: I): CMsgClientRichPresenceUpload {
    return CMsgClientRichPresenceUpload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRichPresenceUpload>, I>>(object: I): CMsgClientRichPresenceUpload {
    const message = createBaseCMsgClientRichPresenceUpload();
    message.richPresenceKv = object.richPresenceKv ?? Buffer.alloc(0);
    message.steamidBroadcast = object.steamidBroadcast?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientRichPresenceRequest(): CMsgClientRichPresenceRequest {
  return { steamidRequest: [] };
}

export const CMsgClientRichPresenceRequest = {
  encode(message: CMsgClientRichPresenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.steamidRequest) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRichPresenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRichPresenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidRequest.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.steamidRequest.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRichPresenceRequest {
    return {
      steamidRequest: Array.isArray(object?.steamidRequest) ? object.steamidRequest.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientRichPresenceRequest): unknown {
    const obj: any = {};
    if (message.steamidRequest) {
      obj.steamidRequest = message.steamidRequest.map((e) => Math.round(e));
    } else {
      obj.steamidRequest = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRichPresenceRequest>, I>>(base?: I): CMsgClientRichPresenceRequest {
    return CMsgClientRichPresenceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRichPresenceRequest>, I>>(
    object: I,
  ): CMsgClientRichPresenceRequest {
    const message = createBaseCMsgClientRichPresenceRequest();
    message.steamidRequest = object.steamidRequest?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientRichPresenceInfo(): CMsgClientRichPresenceInfo {
  return { richPresence: [] };
}

export const CMsgClientRichPresenceInfo = {
  encode(message: CMsgClientRichPresenceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.richPresence) {
      CMsgClientRichPresenceInfo_RichPresence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRichPresenceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRichPresenceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.richPresence.push(CMsgClientRichPresenceInfo_RichPresence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRichPresenceInfo {
    return {
      richPresence: Array.isArray(object?.richPresence)
        ? object.richPresence.map((e: any) => CMsgClientRichPresenceInfo_RichPresence.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientRichPresenceInfo): unknown {
    const obj: any = {};
    if (message.richPresence) {
      obj.richPresence = message.richPresence.map((e) =>
        e ? CMsgClientRichPresenceInfo_RichPresence.toJSON(e) : undefined
      );
    } else {
      obj.richPresence = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRichPresenceInfo>, I>>(base?: I): CMsgClientRichPresenceInfo {
    return CMsgClientRichPresenceInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRichPresenceInfo>, I>>(object: I): CMsgClientRichPresenceInfo {
    const message = createBaseCMsgClientRichPresenceInfo();
    message.richPresence = object.richPresence?.map((e) => CMsgClientRichPresenceInfo_RichPresence.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCMsgClientRichPresenceInfo_RichPresence(): CMsgClientRichPresenceInfo_RichPresence {
  return { steamidUser: 0, richPresenceKv: Buffer.alloc(0) };
}

export const CMsgClientRichPresenceInfo_RichPresence = {
  encode(message: CMsgClientRichPresenceInfo_RichPresence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidUser !== 0) {
      writer.uint32(9).fixed64(message.steamidUser);
    }
    if (message.richPresenceKv.length !== 0) {
      writer.uint32(18).bytes(message.richPresenceKv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRichPresenceInfo_RichPresence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRichPresenceInfo_RichPresence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidUser = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.richPresenceKv = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRichPresenceInfo_RichPresence {
    return {
      steamidUser: isSet(object.steamidUser) ? Number(object.steamidUser) : 0,
      richPresenceKv: isSet(object.richPresenceKv)
        ? Buffer.from(bytesFromBase64(object.richPresenceKv))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientRichPresenceInfo_RichPresence): unknown {
    const obj: any = {};
    message.steamidUser !== undefined && (obj.steamidUser = Math.round(message.steamidUser));
    message.richPresenceKv !== undefined &&
      (obj.richPresenceKv = base64FromBytes(
        message.richPresenceKv !== undefined ? message.richPresenceKv : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRichPresenceInfo_RichPresence>, I>>(
    base?: I,
  ): CMsgClientRichPresenceInfo_RichPresence {
    return CMsgClientRichPresenceInfo_RichPresence.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRichPresenceInfo_RichPresence>, I>>(
    object: I,
  ): CMsgClientRichPresenceInfo_RichPresence {
    const message = createBaseCMsgClientRichPresenceInfo_RichPresence();
    message.steamidUser = object.steamidUser ?? 0;
    message.richPresenceKv = object.richPresenceKv ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientCheckFileSignature(): CMsgClientCheckFileSignature {
  return { appId: 0 };
}

export const CMsgClientCheckFileSignature = {
  encode(message: CMsgClientCheckFileSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCheckFileSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCheckFileSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCheckFileSignature {
    return { appId: isSet(object.appId) ? Number(object.appId) : 0 };
  },

  toJSON(message: CMsgClientCheckFileSignature): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCheckFileSignature>, I>>(base?: I): CMsgClientCheckFileSignature {
    return CMsgClientCheckFileSignature.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCheckFileSignature>, I>>(object: I): CMsgClientCheckFileSignature {
    const message = createBaseCMsgClientCheckFileSignature();
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientCheckFileSignatureResponse(): CMsgClientCheckFileSignatureResponse {
  return {
    appId: 0,
    pid: 0,
    eresult: 0,
    filename: "",
    esignatureresult: 0,
    shaFile: Buffer.alloc(0),
    signatureheader: Buffer.alloc(0),
    filesize: 0,
    getlasterror: 0,
    evalvesignaturecheckdetail: 0,
  };
}

export const CMsgClientCheckFileSignatureResponse = {
  encode(message: CMsgClientCheckFileSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.pid !== 0) {
      writer.uint32(16).uint32(message.pid);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).uint32(message.eresult);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    if (message.esignatureresult !== 0) {
      writer.uint32(40).uint32(message.esignatureresult);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(50).bytes(message.shaFile);
    }
    if (message.signatureheader.length !== 0) {
      writer.uint32(58).bytes(message.signatureheader);
    }
    if (message.filesize !== 0) {
      writer.uint32(64).uint32(message.filesize);
    }
    if (message.getlasterror !== 0) {
      writer.uint32(72).uint32(message.getlasterror);
    }
    if (message.evalvesignaturecheckdetail !== 0) {
      writer.uint32(80).uint32(message.evalvesignaturecheckdetail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCheckFileSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCheckFileSignatureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.pid = reader.uint32();
          break;
        case 3:
          message.eresult = reader.uint32();
          break;
        case 4:
          message.filename = reader.string();
          break;
        case 5:
          message.esignatureresult = reader.uint32();
          break;
        case 6:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 7:
          message.signatureheader = reader.bytes() as Buffer;
          break;
        case 8:
          message.filesize = reader.uint32();
          break;
        case 9:
          message.getlasterror = reader.uint32();
          break;
        case 10:
          message.evalvesignaturecheckdetail = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCheckFileSignatureResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      esignatureresult: isSet(object.esignatureresult) ? Number(object.esignatureresult) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      signatureheader: isSet(object.signatureheader)
        ? Buffer.from(bytesFromBase64(object.signatureheader))
        : Buffer.alloc(0),
      filesize: isSet(object.filesize) ? Number(object.filesize) : 0,
      getlasterror: isSet(object.getlasterror) ? Number(object.getlasterror) : 0,
      evalvesignaturecheckdetail: isSet(object.evalvesignaturecheckdetail)
        ? Number(object.evalvesignaturecheckdetail)
        : 0,
    };
  },

  toJSON(message: CMsgClientCheckFileSignatureResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.filename !== undefined && (obj.filename = message.filename);
    message.esignatureresult !== undefined && (obj.esignatureresult = Math.round(message.esignatureresult));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.signatureheader !== undefined &&
      (obj.signatureheader = base64FromBytes(
        message.signatureheader !== undefined ? message.signatureheader : Buffer.alloc(0),
      ));
    message.filesize !== undefined && (obj.filesize = Math.round(message.filesize));
    message.getlasterror !== undefined && (obj.getlasterror = Math.round(message.getlasterror));
    message.evalvesignaturecheckdetail !== undefined &&
      (obj.evalvesignaturecheckdetail = Math.round(message.evalvesignaturecheckdetail));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCheckFileSignatureResponse>, I>>(
    base?: I,
  ): CMsgClientCheckFileSignatureResponse {
    return CMsgClientCheckFileSignatureResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCheckFileSignatureResponse>, I>>(
    object: I,
  ): CMsgClientCheckFileSignatureResponse {
    const message = createBaseCMsgClientCheckFileSignatureResponse();
    message.appId = object.appId ?? 0;
    message.pid = object.pid ?? 0;
    message.eresult = object.eresult ?? 0;
    message.filename = object.filename ?? "";
    message.esignatureresult = object.esignatureresult ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.signatureheader = object.signatureheader ?? Buffer.alloc(0);
    message.filesize = object.filesize ?? 0;
    message.getlasterror = object.getlasterror ?? 0;
    message.evalvesignaturecheckdetail = object.evalvesignaturecheckdetail ?? 0;
    return message;
  },
};

function createBaseCMsgClientReadMachineAuth(): CMsgClientReadMachineAuth {
  return { filename: "", offset: 0, cubtoread: 0 };
}

export const CMsgClientReadMachineAuth = {
  encode(message: CMsgClientReadMachineAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint32(message.offset);
    }
    if (message.cubtoread !== 0) {
      writer.uint32(24).uint32(message.cubtoread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientReadMachineAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientReadMachineAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.offset = reader.uint32();
          break;
        case 3:
          message.cubtoread = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientReadMachineAuth {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      cubtoread: isSet(object.cubtoread) ? Number(object.cubtoread) : 0,
    };
  },

  toJSON(message: CMsgClientReadMachineAuth): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.cubtoread !== undefined && (obj.cubtoread = Math.round(message.cubtoread));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientReadMachineAuth>, I>>(base?: I): CMsgClientReadMachineAuth {
    return CMsgClientReadMachineAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientReadMachineAuth>, I>>(object: I): CMsgClientReadMachineAuth {
    const message = createBaseCMsgClientReadMachineAuth();
    message.filename = object.filename ?? "";
    message.offset = object.offset ?? 0;
    message.cubtoread = object.cubtoread ?? 0;
    return message;
  },
};

function createBaseCMsgClientReadMachineAuthResponse(): CMsgClientReadMachineAuthResponse {
  return {
    filename: "",
    eresult: 0,
    filesize: 0,
    shaFile: Buffer.alloc(0),
    getlasterror: 0,
    offset: 0,
    cubread: 0,
    bytesRead: Buffer.alloc(0),
    filenameSentry: "",
  };
}

export const CMsgClientReadMachineAuthResponse = {
  encode(message: CMsgClientReadMachineAuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.filesize !== 0) {
      writer.uint32(24).uint32(message.filesize);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(34).bytes(message.shaFile);
    }
    if (message.getlasterror !== 0) {
      writer.uint32(40).uint32(message.getlasterror);
    }
    if (message.offset !== 0) {
      writer.uint32(48).uint32(message.offset);
    }
    if (message.cubread !== 0) {
      writer.uint32(56).uint32(message.cubread);
    }
    if (message.bytesRead.length !== 0) {
      writer.uint32(66).bytes(message.bytesRead);
    }
    if (message.filenameSentry !== "") {
      writer.uint32(74).string(message.filenameSentry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientReadMachineAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientReadMachineAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.filesize = reader.uint32();
          break;
        case 4:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 5:
          message.getlasterror = reader.uint32();
          break;
        case 6:
          message.offset = reader.uint32();
          break;
        case 7:
          message.cubread = reader.uint32();
          break;
        case 8:
          message.bytesRead = reader.bytes() as Buffer;
          break;
        case 9:
          message.filenameSentry = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientReadMachineAuthResponse {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      filesize: isSet(object.filesize) ? Number(object.filesize) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      getlasterror: isSet(object.getlasterror) ? Number(object.getlasterror) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      cubread: isSet(object.cubread) ? Number(object.cubread) : 0,
      bytesRead: isSet(object.bytesRead) ? Buffer.from(bytesFromBase64(object.bytesRead)) : Buffer.alloc(0),
      filenameSentry: isSet(object.filenameSentry) ? String(object.filenameSentry) : "",
    };
  },

  toJSON(message: CMsgClientReadMachineAuthResponse): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.filesize !== undefined && (obj.filesize = Math.round(message.filesize));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.getlasterror !== undefined && (obj.getlasterror = Math.round(message.getlasterror));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.cubread !== undefined && (obj.cubread = Math.round(message.cubread));
    message.bytesRead !== undefined &&
      (obj.bytesRead = base64FromBytes(message.bytesRead !== undefined ? message.bytesRead : Buffer.alloc(0)));
    message.filenameSentry !== undefined && (obj.filenameSentry = message.filenameSentry);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientReadMachineAuthResponse>, I>>(
    base?: I,
  ): CMsgClientReadMachineAuthResponse {
    return CMsgClientReadMachineAuthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientReadMachineAuthResponse>, I>>(
    object: I,
  ): CMsgClientReadMachineAuthResponse {
    const message = createBaseCMsgClientReadMachineAuthResponse();
    message.filename = object.filename ?? "";
    message.eresult = object.eresult ?? 0;
    message.filesize = object.filesize ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.getlasterror = object.getlasterror ?? 0;
    message.offset = object.offset ?? 0;
    message.cubread = object.cubread ?? 0;
    message.bytesRead = object.bytesRead ?? Buffer.alloc(0);
    message.filenameSentry = object.filenameSentry ?? "";
    return message;
  },
};

function createBaseCMsgClientUpdateMachineAuth(): CMsgClientUpdateMachineAuth {
  return {
    filename: "",
    offset: 0,
    cubtowrite: 0,
    bytes: Buffer.alloc(0),
    otpType: 0,
    otpIdentifier: "",
    otpSharedsecret: Buffer.alloc(0),
    otpTimedrift: 0,
  };
}

export const CMsgClientUpdateMachineAuth = {
  encode(message: CMsgClientUpdateMachineAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint32(message.offset);
    }
    if (message.cubtowrite !== 0) {
      writer.uint32(24).uint32(message.cubtowrite);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(34).bytes(message.bytes);
    }
    if (message.otpType !== 0) {
      writer.uint32(40).uint32(message.otpType);
    }
    if (message.otpIdentifier !== "") {
      writer.uint32(50).string(message.otpIdentifier);
    }
    if (message.otpSharedsecret.length !== 0) {
      writer.uint32(58).bytes(message.otpSharedsecret);
    }
    if (message.otpTimedrift !== 0) {
      writer.uint32(64).uint32(message.otpTimedrift);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUpdateMachineAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUpdateMachineAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.offset = reader.uint32();
          break;
        case 3:
          message.cubtowrite = reader.uint32();
          break;
        case 4:
          message.bytes = reader.bytes() as Buffer;
          break;
        case 5:
          message.otpType = reader.uint32();
          break;
        case 6:
          message.otpIdentifier = reader.string();
          break;
        case 7:
          message.otpSharedsecret = reader.bytes() as Buffer;
          break;
        case 8:
          message.otpTimedrift = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUpdateMachineAuth {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      cubtowrite: isSet(object.cubtowrite) ? Number(object.cubtowrite) : 0,
      bytes: isSet(object.bytes) ? Buffer.from(bytesFromBase64(object.bytes)) : Buffer.alloc(0),
      otpType: isSet(object.otpType) ? Number(object.otpType) : 0,
      otpIdentifier: isSet(object.otpIdentifier) ? String(object.otpIdentifier) : "",
      otpSharedsecret: isSet(object.otpSharedsecret)
        ? Buffer.from(bytesFromBase64(object.otpSharedsecret))
        : Buffer.alloc(0),
      otpTimedrift: isSet(object.otpTimedrift) ? Number(object.otpTimedrift) : 0,
    };
  },

  toJSON(message: CMsgClientUpdateMachineAuth): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.cubtowrite !== undefined && (obj.cubtowrite = Math.round(message.cubtowrite));
    message.bytes !== undefined &&
      (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : Buffer.alloc(0)));
    message.otpType !== undefined && (obj.otpType = Math.round(message.otpType));
    message.otpIdentifier !== undefined && (obj.otpIdentifier = message.otpIdentifier);
    message.otpSharedsecret !== undefined &&
      (obj.otpSharedsecret = base64FromBytes(
        message.otpSharedsecret !== undefined ? message.otpSharedsecret : Buffer.alloc(0),
      ));
    message.otpTimedrift !== undefined && (obj.otpTimedrift = Math.round(message.otpTimedrift));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUpdateMachineAuth>, I>>(base?: I): CMsgClientUpdateMachineAuth {
    return CMsgClientUpdateMachineAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUpdateMachineAuth>, I>>(object: I): CMsgClientUpdateMachineAuth {
    const message = createBaseCMsgClientUpdateMachineAuth();
    message.filename = object.filename ?? "";
    message.offset = object.offset ?? 0;
    message.cubtowrite = object.cubtowrite ?? 0;
    message.bytes = object.bytes ?? Buffer.alloc(0);
    message.otpType = object.otpType ?? 0;
    message.otpIdentifier = object.otpIdentifier ?? "";
    message.otpSharedsecret = object.otpSharedsecret ?? Buffer.alloc(0);
    message.otpTimedrift = object.otpTimedrift ?? 0;
    return message;
  },
};

function createBaseCMsgClientUpdateMachineAuthResponse(): CMsgClientUpdateMachineAuthResponse {
  return {
    filename: "",
    eresult: 0,
    filesize: 0,
    shaFile: Buffer.alloc(0),
    getlasterror: 0,
    offset: 0,
    cubwrote: 0,
    otpType: 0,
    otpValue: 0,
    otpIdentifier: "",
  };
}

export const CMsgClientUpdateMachineAuthResponse = {
  encode(message: CMsgClientUpdateMachineAuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.filesize !== 0) {
      writer.uint32(24).uint32(message.filesize);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(34).bytes(message.shaFile);
    }
    if (message.getlasterror !== 0) {
      writer.uint32(40).uint32(message.getlasterror);
    }
    if (message.offset !== 0) {
      writer.uint32(48).uint32(message.offset);
    }
    if (message.cubwrote !== 0) {
      writer.uint32(56).uint32(message.cubwrote);
    }
    if (message.otpType !== 0) {
      writer.uint32(64).int32(message.otpType);
    }
    if (message.otpValue !== 0) {
      writer.uint32(72).uint32(message.otpValue);
    }
    if (message.otpIdentifier !== "") {
      writer.uint32(82).string(message.otpIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUpdateMachineAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUpdateMachineAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.filesize = reader.uint32();
          break;
        case 4:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 5:
          message.getlasterror = reader.uint32();
          break;
        case 6:
          message.offset = reader.uint32();
          break;
        case 7:
          message.cubwrote = reader.uint32();
          break;
        case 8:
          message.otpType = reader.int32();
          break;
        case 9:
          message.otpValue = reader.uint32();
          break;
        case 10:
          message.otpIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUpdateMachineAuthResponse {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      filesize: isSet(object.filesize) ? Number(object.filesize) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      getlasterror: isSet(object.getlasterror) ? Number(object.getlasterror) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      cubwrote: isSet(object.cubwrote) ? Number(object.cubwrote) : 0,
      otpType: isSet(object.otpType) ? Number(object.otpType) : 0,
      otpValue: isSet(object.otpValue) ? Number(object.otpValue) : 0,
      otpIdentifier: isSet(object.otpIdentifier) ? String(object.otpIdentifier) : "",
    };
  },

  toJSON(message: CMsgClientUpdateMachineAuthResponse): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.filesize !== undefined && (obj.filesize = Math.round(message.filesize));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.getlasterror !== undefined && (obj.getlasterror = Math.round(message.getlasterror));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.cubwrote !== undefined && (obj.cubwrote = Math.round(message.cubwrote));
    message.otpType !== undefined && (obj.otpType = Math.round(message.otpType));
    message.otpValue !== undefined && (obj.otpValue = Math.round(message.otpValue));
    message.otpIdentifier !== undefined && (obj.otpIdentifier = message.otpIdentifier);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUpdateMachineAuthResponse>, I>>(
    base?: I,
  ): CMsgClientUpdateMachineAuthResponse {
    return CMsgClientUpdateMachineAuthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUpdateMachineAuthResponse>, I>>(
    object: I,
  ): CMsgClientUpdateMachineAuthResponse {
    const message = createBaseCMsgClientUpdateMachineAuthResponse();
    message.filename = object.filename ?? "";
    message.eresult = object.eresult ?? 0;
    message.filesize = object.filesize ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.getlasterror = object.getlasterror ?? 0;
    message.offset = object.offset ?? 0;
    message.cubwrote = object.cubwrote ?? 0;
    message.otpType = object.otpType ?? 0;
    message.otpValue = object.otpValue ?? 0;
    message.otpIdentifier = object.otpIdentifier ?? "";
    return message;
  },
};

function createBaseCMsgClientRequestMachineAuth(): CMsgClientRequestMachineAuth {
  return {
    filename: "",
    eresultSentryfile: 0,
    filesize: 0,
    shaSentryfile: Buffer.alloc(0),
    lockAccountAction: 0,
    otpType: 0,
    otpIdentifier: "",
    otpSharedsecret: Buffer.alloc(0),
    otpValue: 0,
    machineName: "",
    machineNameUserchosen: "",
  };
}

export const CMsgClientRequestMachineAuth = {
  encode(message: CMsgClientRequestMachineAuth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.eresultSentryfile !== 0) {
      writer.uint32(16).uint32(message.eresultSentryfile);
    }
    if (message.filesize !== 0) {
      writer.uint32(24).uint32(message.filesize);
    }
    if (message.shaSentryfile.length !== 0) {
      writer.uint32(34).bytes(message.shaSentryfile);
    }
    if (message.lockAccountAction !== 0) {
      writer.uint32(48).int32(message.lockAccountAction);
    }
    if (message.otpType !== 0) {
      writer.uint32(56).uint32(message.otpType);
    }
    if (message.otpIdentifier !== "") {
      writer.uint32(66).string(message.otpIdentifier);
    }
    if (message.otpSharedsecret.length !== 0) {
      writer.uint32(74).bytes(message.otpSharedsecret);
    }
    if (message.otpValue !== 0) {
      writer.uint32(80).uint32(message.otpValue);
    }
    if (message.machineName !== "") {
      writer.uint32(90).string(message.machineName);
    }
    if (message.machineNameUserchosen !== "") {
      writer.uint32(98).string(message.machineNameUserchosen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestMachineAuth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestMachineAuth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.eresultSentryfile = reader.uint32();
          break;
        case 3:
          message.filesize = reader.uint32();
          break;
        case 4:
          message.shaSentryfile = reader.bytes() as Buffer;
          break;
        case 6:
          message.lockAccountAction = reader.int32();
          break;
        case 7:
          message.otpType = reader.uint32();
          break;
        case 8:
          message.otpIdentifier = reader.string();
          break;
        case 9:
          message.otpSharedsecret = reader.bytes() as Buffer;
          break;
        case 10:
          message.otpValue = reader.uint32();
          break;
        case 11:
          message.machineName = reader.string();
          break;
        case 12:
          message.machineNameUserchosen = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestMachineAuth {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      eresultSentryfile: isSet(object.eresultSentryfile) ? Number(object.eresultSentryfile) : 0,
      filesize: isSet(object.filesize) ? Number(object.filesize) : 0,
      shaSentryfile: isSet(object.shaSentryfile) ? Buffer.from(bytesFromBase64(object.shaSentryfile)) : Buffer.alloc(0),
      lockAccountAction: isSet(object.lockAccountAction) ? Number(object.lockAccountAction) : 0,
      otpType: isSet(object.otpType) ? Number(object.otpType) : 0,
      otpIdentifier: isSet(object.otpIdentifier) ? String(object.otpIdentifier) : "",
      otpSharedsecret: isSet(object.otpSharedsecret)
        ? Buffer.from(bytesFromBase64(object.otpSharedsecret))
        : Buffer.alloc(0),
      otpValue: isSet(object.otpValue) ? Number(object.otpValue) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      machineNameUserchosen: isSet(object.machineNameUserchosen) ? String(object.machineNameUserchosen) : "",
    };
  },

  toJSON(message: CMsgClientRequestMachineAuth): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.eresultSentryfile !== undefined && (obj.eresultSentryfile = Math.round(message.eresultSentryfile));
    message.filesize !== undefined && (obj.filesize = Math.round(message.filesize));
    message.shaSentryfile !== undefined &&
      (obj.shaSentryfile = base64FromBytes(
        message.shaSentryfile !== undefined ? message.shaSentryfile : Buffer.alloc(0),
      ));
    message.lockAccountAction !== undefined && (obj.lockAccountAction = Math.round(message.lockAccountAction));
    message.otpType !== undefined && (obj.otpType = Math.round(message.otpType));
    message.otpIdentifier !== undefined && (obj.otpIdentifier = message.otpIdentifier);
    message.otpSharedsecret !== undefined &&
      (obj.otpSharedsecret = base64FromBytes(
        message.otpSharedsecret !== undefined ? message.otpSharedsecret : Buffer.alloc(0),
      ));
    message.otpValue !== undefined && (obj.otpValue = Math.round(message.otpValue));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.machineNameUserchosen !== undefined && (obj.machineNameUserchosen = message.machineNameUserchosen);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestMachineAuth>, I>>(base?: I): CMsgClientRequestMachineAuth {
    return CMsgClientRequestMachineAuth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestMachineAuth>, I>>(object: I): CMsgClientRequestMachineAuth {
    const message = createBaseCMsgClientRequestMachineAuth();
    message.filename = object.filename ?? "";
    message.eresultSentryfile = object.eresultSentryfile ?? 0;
    message.filesize = object.filesize ?? 0;
    message.shaSentryfile = object.shaSentryfile ?? Buffer.alloc(0);
    message.lockAccountAction = object.lockAccountAction ?? 0;
    message.otpType = object.otpType ?? 0;
    message.otpIdentifier = object.otpIdentifier ?? "";
    message.otpSharedsecret = object.otpSharedsecret ?? Buffer.alloc(0);
    message.otpValue = object.otpValue ?? 0;
    message.machineName = object.machineName ?? "";
    message.machineNameUserchosen = object.machineNameUserchosen ?? "";
    return message;
  },
};

function createBaseCMsgClientRequestMachineAuthResponse(): CMsgClientRequestMachineAuthResponse {
  return { eresult: 0 };
}

export const CMsgClientRequestMachineAuthResponse = {
  encode(message: CMsgClientRequestMachineAuthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestMachineAuthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestMachineAuthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestMachineAuthResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientRequestMachineAuthResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestMachineAuthResponse>, I>>(
    base?: I,
  ): CMsgClientRequestMachineAuthResponse {
    return CMsgClientRequestMachineAuthResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestMachineAuthResponse>, I>>(
    object: I,
  ): CMsgClientRequestMachineAuthResponse {
    const message = createBaseCMsgClientRequestMachineAuthResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientRegisterKey(): CMsgClientRegisterKey {
  return { key: "" };
}

export const CMsgClientRegisterKey = {
  encode(message: CMsgClientRegisterKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRegisterKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRegisterKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRegisterKey {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: CMsgClientRegisterKey): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRegisterKey>, I>>(base?: I): CMsgClientRegisterKey {
    return CMsgClientRegisterKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRegisterKey>, I>>(object: I): CMsgClientRegisterKey {
    const message = createBaseCMsgClientRegisterKey();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseCMsgClientPurchaseResponse(): CMsgClientPurchaseResponse {
  return { eresult: 0, purchaseResultDetails: 0, purchaseReceiptInfo: Buffer.alloc(0) };
}

export const CMsgClientPurchaseResponse = {
  encode(message: CMsgClientPurchaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.purchaseResultDetails !== 0) {
      writer.uint32(16).int32(message.purchaseResultDetails);
    }
    if (message.purchaseReceiptInfo.length !== 0) {
      writer.uint32(26).bytes(message.purchaseReceiptInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPurchaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPurchaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.purchaseResultDetails = reader.int32();
          break;
        case 3:
          message.purchaseReceiptInfo = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPurchaseResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      purchaseResultDetails: isSet(object.purchaseResultDetails) ? Number(object.purchaseResultDetails) : 0,
      purchaseReceiptInfo: isSet(object.purchaseReceiptInfo)
        ? Buffer.from(bytesFromBase64(object.purchaseReceiptInfo))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientPurchaseResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.purchaseResultDetails !== undefined &&
      (obj.purchaseResultDetails = Math.round(message.purchaseResultDetails));
    message.purchaseReceiptInfo !== undefined &&
      (obj.purchaseReceiptInfo = base64FromBytes(
        message.purchaseReceiptInfo !== undefined ? message.purchaseReceiptInfo : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPurchaseResponse>, I>>(base?: I): CMsgClientPurchaseResponse {
    return CMsgClientPurchaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPurchaseResponse>, I>>(object: I): CMsgClientPurchaseResponse {
    const message = createBaseCMsgClientPurchaseResponse();
    message.eresult = object.eresult ?? 0;
    message.purchaseResultDetails = object.purchaseResultDetails ?? 0;
    message.purchaseReceiptInfo = object.purchaseReceiptInfo ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientActivateOEMLicense(): CMsgClientActivateOEMLicense {
  return {
    biosManufacturer: "",
    biosSerialnumber: "",
    licenseFile: Buffer.alloc(0),
    mainboardManufacturer: "",
    mainboardProduct: "",
    mainboardSerialnumber: "",
  };
}

export const CMsgClientActivateOEMLicense = {
  encode(message: CMsgClientActivateOEMLicense, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.biosManufacturer !== "") {
      writer.uint32(10).string(message.biosManufacturer);
    }
    if (message.biosSerialnumber !== "") {
      writer.uint32(18).string(message.biosSerialnumber);
    }
    if (message.licenseFile.length !== 0) {
      writer.uint32(26).bytes(message.licenseFile);
    }
    if (message.mainboardManufacturer !== "") {
      writer.uint32(34).string(message.mainboardManufacturer);
    }
    if (message.mainboardProduct !== "") {
      writer.uint32(42).string(message.mainboardProduct);
    }
    if (message.mainboardSerialnumber !== "") {
      writer.uint32(50).string(message.mainboardSerialnumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientActivateOEMLicense {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientActivateOEMLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.biosManufacturer = reader.string();
          break;
        case 2:
          message.biosSerialnumber = reader.string();
          break;
        case 3:
          message.licenseFile = reader.bytes() as Buffer;
          break;
        case 4:
          message.mainboardManufacturer = reader.string();
          break;
        case 5:
          message.mainboardProduct = reader.string();
          break;
        case 6:
          message.mainboardSerialnumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientActivateOEMLicense {
    return {
      biosManufacturer: isSet(object.biosManufacturer) ? String(object.biosManufacturer) : "",
      biosSerialnumber: isSet(object.biosSerialnumber) ? String(object.biosSerialnumber) : "",
      licenseFile: isSet(object.licenseFile) ? Buffer.from(bytesFromBase64(object.licenseFile)) : Buffer.alloc(0),
      mainboardManufacturer: isSet(object.mainboardManufacturer) ? String(object.mainboardManufacturer) : "",
      mainboardProduct: isSet(object.mainboardProduct) ? String(object.mainboardProduct) : "",
      mainboardSerialnumber: isSet(object.mainboardSerialnumber) ? String(object.mainboardSerialnumber) : "",
    };
  },

  toJSON(message: CMsgClientActivateOEMLicense): unknown {
    const obj: any = {};
    message.biosManufacturer !== undefined && (obj.biosManufacturer = message.biosManufacturer);
    message.biosSerialnumber !== undefined && (obj.biosSerialnumber = message.biosSerialnumber);
    message.licenseFile !== undefined &&
      (obj.licenseFile = base64FromBytes(message.licenseFile !== undefined ? message.licenseFile : Buffer.alloc(0)));
    message.mainboardManufacturer !== undefined && (obj.mainboardManufacturer = message.mainboardManufacturer);
    message.mainboardProduct !== undefined && (obj.mainboardProduct = message.mainboardProduct);
    message.mainboardSerialnumber !== undefined && (obj.mainboardSerialnumber = message.mainboardSerialnumber);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientActivateOEMLicense>, I>>(base?: I): CMsgClientActivateOEMLicense {
    return CMsgClientActivateOEMLicense.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientActivateOEMLicense>, I>>(object: I): CMsgClientActivateOEMLicense {
    const message = createBaseCMsgClientActivateOEMLicense();
    message.biosManufacturer = object.biosManufacturer ?? "";
    message.biosSerialnumber = object.biosSerialnumber ?? "";
    message.licenseFile = object.licenseFile ?? Buffer.alloc(0);
    message.mainboardManufacturer = object.mainboardManufacturer ?? "";
    message.mainboardProduct = object.mainboardProduct ?? "";
    message.mainboardSerialnumber = object.mainboardSerialnumber ?? "";
    return message;
  },
};

function createBaseCMsgClientRegisterOEMMachine(): CMsgClientRegisterOEMMachine {
  return { oemRegisterFile: Buffer.alloc(0) };
}

export const CMsgClientRegisterOEMMachine = {
  encode(message: CMsgClientRegisterOEMMachine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oemRegisterFile.length !== 0) {
      writer.uint32(10).bytes(message.oemRegisterFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRegisterOEMMachine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRegisterOEMMachine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oemRegisterFile = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRegisterOEMMachine {
    return {
      oemRegisterFile: isSet(object.oemRegisterFile)
        ? Buffer.from(bytesFromBase64(object.oemRegisterFile))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientRegisterOEMMachine): unknown {
    const obj: any = {};
    message.oemRegisterFile !== undefined &&
      (obj.oemRegisterFile = base64FromBytes(
        message.oemRegisterFile !== undefined ? message.oemRegisterFile : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRegisterOEMMachine>, I>>(base?: I): CMsgClientRegisterOEMMachine {
    return CMsgClientRegisterOEMMachine.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRegisterOEMMachine>, I>>(object: I): CMsgClientRegisterOEMMachine {
    const message = createBaseCMsgClientRegisterOEMMachine();
    message.oemRegisterFile = object.oemRegisterFile ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientRegisterOEMMachineResponse(): CMsgClientRegisterOEMMachineResponse {
  return { eresult: 0 };
}

export const CMsgClientRegisterOEMMachineResponse = {
  encode(message: CMsgClientRegisterOEMMachineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRegisterOEMMachineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRegisterOEMMachineResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRegisterOEMMachineResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientRegisterOEMMachineResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRegisterOEMMachineResponse>, I>>(
    base?: I,
  ): CMsgClientRegisterOEMMachineResponse {
    return CMsgClientRegisterOEMMachineResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRegisterOEMMachineResponse>, I>>(
    object: I,
  ): CMsgClientRegisterOEMMachineResponse {
    const message = createBaseCMsgClientRegisterOEMMachineResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientPurchaseWithMachineID(): CMsgClientPurchaseWithMachineID {
  return { packageId: 0, machineInfo: Buffer.alloc(0) };
}

export const CMsgClientPurchaseWithMachineID = {
  encode(message: CMsgClientPurchaseWithMachineID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageId !== 0) {
      writer.uint32(8).uint32(message.packageId);
    }
    if (message.machineInfo.length !== 0) {
      writer.uint32(18).bytes(message.machineInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPurchaseWithMachineID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPurchaseWithMachineID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageId = reader.uint32();
          break;
        case 2:
          message.machineInfo = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPurchaseWithMachineID {
    return {
      packageId: isSet(object.packageId) ? Number(object.packageId) : 0,
      machineInfo: isSet(object.machineInfo) ? Buffer.from(bytesFromBase64(object.machineInfo)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientPurchaseWithMachineID): unknown {
    const obj: any = {};
    message.packageId !== undefined && (obj.packageId = Math.round(message.packageId));
    message.machineInfo !== undefined &&
      (obj.machineInfo = base64FromBytes(message.machineInfo !== undefined ? message.machineInfo : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPurchaseWithMachineID>, I>>(base?: I): CMsgClientPurchaseWithMachineID {
    return CMsgClientPurchaseWithMachineID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPurchaseWithMachineID>, I>>(
    object: I,
  ): CMsgClientPurchaseWithMachineID {
    const message = createBaseCMsgClientPurchaseWithMachineID();
    message.packageId = object.packageId ?? 0;
    message.machineInfo = object.machineInfo ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgTradingInitiateTradeRequest(): CMsgTradingInitiateTradeRequest {
  return { tradeRequestId: 0, otherSteamid: 0, otherName: "" };
}

export const CMsgTradingInitiateTradeRequest = {
  encode(message: CMsgTradingInitiateTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeRequestId !== 0) {
      writer.uint32(8).uint32(message.tradeRequestId);
    }
    if (message.otherSteamid !== 0) {
      writer.uint32(16).uint64(message.otherSteamid);
    }
    if (message.otherName !== "") {
      writer.uint32(26).string(message.otherName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTradingInitiateTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTradingInitiateTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeRequestId = reader.uint32();
          break;
        case 2:
          message.otherSteamid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.otherName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTradingInitiateTradeRequest {
    return {
      tradeRequestId: isSet(object.tradeRequestId) ? Number(object.tradeRequestId) : 0,
      otherSteamid: isSet(object.otherSteamid) ? Number(object.otherSteamid) : 0,
      otherName: isSet(object.otherName) ? String(object.otherName) : "",
    };
  },

  toJSON(message: CMsgTradingInitiateTradeRequest): unknown {
    const obj: any = {};
    message.tradeRequestId !== undefined && (obj.tradeRequestId = Math.round(message.tradeRequestId));
    message.otherSteamid !== undefined && (obj.otherSteamid = Math.round(message.otherSteamid));
    message.otherName !== undefined && (obj.otherName = message.otherName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTradingInitiateTradeRequest>, I>>(base?: I): CMsgTradingInitiateTradeRequest {
    return CMsgTradingInitiateTradeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTradingInitiateTradeRequest>, I>>(
    object: I,
  ): CMsgTradingInitiateTradeRequest {
    const message = createBaseCMsgTradingInitiateTradeRequest();
    message.tradeRequestId = object.tradeRequestId ?? 0;
    message.otherSteamid = object.otherSteamid ?? 0;
    message.otherName = object.otherName ?? "";
    return message;
  },
};

function createBaseCMsgTradingInitiateTradeResponse(): CMsgTradingInitiateTradeResponse {
  return {
    response: 0,
    tradeRequestId: 0,
    otherSteamid: 0,
    steamguardRequiredDays: 0,
    newDeviceCooldownDays: 0,
    defaultPasswordResetProbationDays: 0,
    passwordResetProbationDays: 0,
    defaultEmailChangeProbationDays: 0,
    emailChangeProbationDays: 0,
  };
}

export const CMsgTradingInitiateTradeResponse = {
  encode(message: CMsgTradingInitiateTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).uint32(message.response);
    }
    if (message.tradeRequestId !== 0) {
      writer.uint32(16).uint32(message.tradeRequestId);
    }
    if (message.otherSteamid !== 0) {
      writer.uint32(24).uint64(message.otherSteamid);
    }
    if (message.steamguardRequiredDays !== 0) {
      writer.uint32(32).uint32(message.steamguardRequiredDays);
    }
    if (message.newDeviceCooldownDays !== 0) {
      writer.uint32(40).uint32(message.newDeviceCooldownDays);
    }
    if (message.defaultPasswordResetProbationDays !== 0) {
      writer.uint32(48).uint32(message.defaultPasswordResetProbationDays);
    }
    if (message.passwordResetProbationDays !== 0) {
      writer.uint32(56).uint32(message.passwordResetProbationDays);
    }
    if (message.defaultEmailChangeProbationDays !== 0) {
      writer.uint32(64).uint32(message.defaultEmailChangeProbationDays);
    }
    if (message.emailChangeProbationDays !== 0) {
      writer.uint32(72).uint32(message.emailChangeProbationDays);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTradingInitiateTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTradingInitiateTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.uint32();
          break;
        case 2:
          message.tradeRequestId = reader.uint32();
          break;
        case 3:
          message.otherSteamid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.steamguardRequiredDays = reader.uint32();
          break;
        case 5:
          message.newDeviceCooldownDays = reader.uint32();
          break;
        case 6:
          message.defaultPasswordResetProbationDays = reader.uint32();
          break;
        case 7:
          message.passwordResetProbationDays = reader.uint32();
          break;
        case 8:
          message.defaultEmailChangeProbationDays = reader.uint32();
          break;
        case 9:
          message.emailChangeProbationDays = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTradingInitiateTradeResponse {
    return {
      response: isSet(object.response) ? Number(object.response) : 0,
      tradeRequestId: isSet(object.tradeRequestId) ? Number(object.tradeRequestId) : 0,
      otherSteamid: isSet(object.otherSteamid) ? Number(object.otherSteamid) : 0,
      steamguardRequiredDays: isSet(object.steamguardRequiredDays) ? Number(object.steamguardRequiredDays) : 0,
      newDeviceCooldownDays: isSet(object.newDeviceCooldownDays) ? Number(object.newDeviceCooldownDays) : 0,
      defaultPasswordResetProbationDays: isSet(object.defaultPasswordResetProbationDays)
        ? Number(object.defaultPasswordResetProbationDays)
        : 0,
      passwordResetProbationDays: isSet(object.passwordResetProbationDays)
        ? Number(object.passwordResetProbationDays)
        : 0,
      defaultEmailChangeProbationDays: isSet(object.defaultEmailChangeProbationDays)
        ? Number(object.defaultEmailChangeProbationDays)
        : 0,
      emailChangeProbationDays: isSet(object.emailChangeProbationDays) ? Number(object.emailChangeProbationDays) : 0,
    };
  },

  toJSON(message: CMsgTradingInitiateTradeResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = Math.round(message.response));
    message.tradeRequestId !== undefined && (obj.tradeRequestId = Math.round(message.tradeRequestId));
    message.otherSteamid !== undefined && (obj.otherSteamid = Math.round(message.otherSteamid));
    message.steamguardRequiredDays !== undefined &&
      (obj.steamguardRequiredDays = Math.round(message.steamguardRequiredDays));
    message.newDeviceCooldownDays !== undefined &&
      (obj.newDeviceCooldownDays = Math.round(message.newDeviceCooldownDays));
    message.defaultPasswordResetProbationDays !== undefined &&
      (obj.defaultPasswordResetProbationDays = Math.round(message.defaultPasswordResetProbationDays));
    message.passwordResetProbationDays !== undefined &&
      (obj.passwordResetProbationDays = Math.round(message.passwordResetProbationDays));
    message.defaultEmailChangeProbationDays !== undefined &&
      (obj.defaultEmailChangeProbationDays = Math.round(message.defaultEmailChangeProbationDays));
    message.emailChangeProbationDays !== undefined &&
      (obj.emailChangeProbationDays = Math.round(message.emailChangeProbationDays));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTradingInitiateTradeResponse>, I>>(
    base?: I,
  ): CMsgTradingInitiateTradeResponse {
    return CMsgTradingInitiateTradeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTradingInitiateTradeResponse>, I>>(
    object: I,
  ): CMsgTradingInitiateTradeResponse {
    const message = createBaseCMsgTradingInitiateTradeResponse();
    message.response = object.response ?? 0;
    message.tradeRequestId = object.tradeRequestId ?? 0;
    message.otherSteamid = object.otherSteamid ?? 0;
    message.steamguardRequiredDays = object.steamguardRequiredDays ?? 0;
    message.newDeviceCooldownDays = object.newDeviceCooldownDays ?? 0;
    message.defaultPasswordResetProbationDays = object.defaultPasswordResetProbationDays ?? 0;
    message.passwordResetProbationDays = object.passwordResetProbationDays ?? 0;
    message.defaultEmailChangeProbationDays = object.defaultEmailChangeProbationDays ?? 0;
    message.emailChangeProbationDays = object.emailChangeProbationDays ?? 0;
    return message;
  },
};

function createBaseCMsgTradingCancelTradeRequest(): CMsgTradingCancelTradeRequest {
  return { otherSteamid: 0 };
}

export const CMsgTradingCancelTradeRequest = {
  encode(message: CMsgTradingCancelTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.otherSteamid !== 0) {
      writer.uint32(8).uint64(message.otherSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTradingCancelTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTradingCancelTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otherSteamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTradingCancelTradeRequest {
    return { otherSteamid: isSet(object.otherSteamid) ? Number(object.otherSteamid) : 0 };
  },

  toJSON(message: CMsgTradingCancelTradeRequest): unknown {
    const obj: any = {};
    message.otherSteamid !== undefined && (obj.otherSteamid = Math.round(message.otherSteamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTradingCancelTradeRequest>, I>>(base?: I): CMsgTradingCancelTradeRequest {
    return CMsgTradingCancelTradeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTradingCancelTradeRequest>, I>>(
    object: I,
  ): CMsgTradingCancelTradeRequest {
    const message = createBaseCMsgTradingCancelTradeRequest();
    message.otherSteamid = object.otherSteamid ?? 0;
    return message;
  },
};

function createBaseCMsgTradingStartSession(): CMsgTradingStartSession {
  return { otherSteamid: 0 };
}

export const CMsgTradingStartSession = {
  encode(message: CMsgTradingStartSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.otherSteamid !== 0) {
      writer.uint32(8).uint64(message.otherSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTradingStartSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTradingStartSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.otherSteamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTradingStartSession {
    return { otherSteamid: isSet(object.otherSteamid) ? Number(object.otherSteamid) : 0 };
  },

  toJSON(message: CMsgTradingStartSession): unknown {
    const obj: any = {};
    message.otherSteamid !== undefined && (obj.otherSteamid = Math.round(message.otherSteamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTradingStartSession>, I>>(base?: I): CMsgTradingStartSession {
    return CMsgTradingStartSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTradingStartSession>, I>>(object: I): CMsgTradingStartSession {
    const message = createBaseCMsgTradingStartSession();
    message.otherSteamid = object.otherSteamid ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetCDNAuthToken(): CMsgClientGetCDNAuthToken {
  return { depotId: 0, hostName: "", appId: 0 };
}

export const CMsgClientGetCDNAuthToken = {
  encode(message: CMsgClientGetCDNAuthToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.hostName !== "") {
      writer.uint32(18).string(message.hostName);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetCDNAuthToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetCDNAuthToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.hostName = reader.string();
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetCDNAuthToken {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientGetCDNAuthToken): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetCDNAuthToken>, I>>(base?: I): CMsgClientGetCDNAuthToken {
    return CMsgClientGetCDNAuthToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetCDNAuthToken>, I>>(object: I): CMsgClientGetCDNAuthToken {
    const message = createBaseCMsgClientGetCDNAuthToken();
    message.depotId = object.depotId ?? 0;
    message.hostName = object.hostName ?? "";
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetDepotDecryptionKey(): CMsgClientGetDepotDecryptionKey {
  return { depotId: 0, appId: 0 };
}

export const CMsgClientGetDepotDecryptionKey = {
  encode(message: CMsgClientGetDepotDecryptionKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetDepotDecryptionKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetDepotDecryptionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetDepotDecryptionKey {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientGetDepotDecryptionKey): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetDepotDecryptionKey>, I>>(base?: I): CMsgClientGetDepotDecryptionKey {
    return CMsgClientGetDepotDecryptionKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetDepotDecryptionKey>, I>>(
    object: I,
  ): CMsgClientGetDepotDecryptionKey {
    const message = createBaseCMsgClientGetDepotDecryptionKey();
    message.depotId = object.depotId ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetDepotDecryptionKeyResponse(): CMsgClientGetDepotDecryptionKeyResponse {
  return { eresult: 0, depotId: 0, depotEncryptionKey: Buffer.alloc(0) };
}

export const CMsgClientGetDepotDecryptionKeyResponse = {
  encode(message: CMsgClientGetDepotDecryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.depotId !== 0) {
      writer.uint32(16).uint32(message.depotId);
    }
    if (message.depotEncryptionKey.length !== 0) {
      writer.uint32(26).bytes(message.depotEncryptionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetDepotDecryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetDepotDecryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.depotId = reader.uint32();
          break;
        case 3:
          message.depotEncryptionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetDepotDecryptionKeyResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      depotEncryptionKey: isSet(object.depotEncryptionKey)
        ? Buffer.from(bytesFromBase64(object.depotEncryptionKey))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientGetDepotDecryptionKeyResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.depotEncryptionKey !== undefined &&
      (obj.depotEncryptionKey = base64FromBytes(
        message.depotEncryptionKey !== undefined ? message.depotEncryptionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetDepotDecryptionKeyResponse>, I>>(
    base?: I,
  ): CMsgClientGetDepotDecryptionKeyResponse {
    return CMsgClientGetDepotDecryptionKeyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetDepotDecryptionKeyResponse>, I>>(
    object: I,
  ): CMsgClientGetDepotDecryptionKeyResponse {
    const message = createBaseCMsgClientGetDepotDecryptionKeyResponse();
    message.eresult = object.eresult ?? 0;
    message.depotId = object.depotId ?? 0;
    message.depotEncryptionKey = object.depotEncryptionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientCheckAppBetaPassword(): CMsgClientCheckAppBetaPassword {
  return { appId: 0, betapassword: "", language: 0 };
}

export const CMsgClientCheckAppBetaPassword = {
  encode(message: CMsgClientCheckAppBetaPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.betapassword !== "") {
      writer.uint32(18).string(message.betapassword);
    }
    if (message.language !== 0) {
      writer.uint32(24).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCheckAppBetaPassword {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCheckAppBetaPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.betapassword = reader.string();
          break;
        case 3:
          message.language = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCheckAppBetaPassword {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      betapassword: isSet(object.betapassword) ? String(object.betapassword) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CMsgClientCheckAppBetaPassword): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.betapassword !== undefined && (obj.betapassword = message.betapassword);
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPassword>, I>>(base?: I): CMsgClientCheckAppBetaPassword {
    return CMsgClientCheckAppBetaPassword.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPassword>, I>>(
    object: I,
  ): CMsgClientCheckAppBetaPassword {
    const message = createBaseCMsgClientCheckAppBetaPassword();
    message.appId = object.appId ?? 0;
    message.betapassword = object.betapassword ?? "";
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCMsgClientCheckAppBetaPasswordResponse(): CMsgClientCheckAppBetaPasswordResponse {
  return { eresult: 0, betapasswords: [] };
}

export const CMsgClientCheckAppBetaPasswordResponse = {
  encode(message: CMsgClientCheckAppBetaPasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.betapasswords) {
      CMsgClientCheckAppBetaPasswordResponse_BetaPassword.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCheckAppBetaPasswordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCheckAppBetaPasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 4:
          message.betapasswords.push(
            CMsgClientCheckAppBetaPasswordResponse_BetaPassword.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCheckAppBetaPasswordResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      betapasswords: Array.isArray(object?.betapasswords)
        ? object.betapasswords.map((e: any) => CMsgClientCheckAppBetaPasswordResponse_BetaPassword.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientCheckAppBetaPasswordResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.betapasswords) {
      obj.betapasswords = message.betapasswords.map((e) =>
        e ? CMsgClientCheckAppBetaPasswordResponse_BetaPassword.toJSON(e) : undefined
      );
    } else {
      obj.betapasswords = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPasswordResponse>, I>>(
    base?: I,
  ): CMsgClientCheckAppBetaPasswordResponse {
    return CMsgClientCheckAppBetaPasswordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPasswordResponse>, I>>(
    object: I,
  ): CMsgClientCheckAppBetaPasswordResponse {
    const message = createBaseCMsgClientCheckAppBetaPasswordResponse();
    message.eresult = object.eresult ?? 0;
    message.betapasswords =
      object.betapasswords?.map((e) => CMsgClientCheckAppBetaPasswordResponse_BetaPassword.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientCheckAppBetaPasswordResponse_BetaPassword(): CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
  return { betaname: "", betapassword: "", betadescription: "" };
}

export const CMsgClientCheckAppBetaPasswordResponse_BetaPassword = {
  encode(
    message: CMsgClientCheckAppBetaPasswordResponse_BetaPassword,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.betaname !== "") {
      writer.uint32(10).string(message.betaname);
    }
    if (message.betapassword !== "") {
      writer.uint32(18).string(message.betapassword);
    }
    if (message.betadescription !== "") {
      writer.uint32(26).string(message.betadescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCheckAppBetaPasswordResponse_BetaPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.betaname = reader.string();
          break;
        case 2:
          message.betapassword = reader.string();
          break;
        case 3:
          message.betadescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
    return {
      betaname: isSet(object.betaname) ? String(object.betaname) : "",
      betapassword: isSet(object.betapassword) ? String(object.betapassword) : "",
      betadescription: isSet(object.betadescription) ? String(object.betadescription) : "",
    };
  },

  toJSON(message: CMsgClientCheckAppBetaPasswordResponse_BetaPassword): unknown {
    const obj: any = {};
    message.betaname !== undefined && (obj.betaname = message.betaname);
    message.betapassword !== undefined && (obj.betapassword = message.betapassword);
    message.betadescription !== undefined && (obj.betadescription = message.betadescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPasswordResponse_BetaPassword>, I>>(
    base?: I,
  ): CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
    return CMsgClientCheckAppBetaPasswordResponse_BetaPassword.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCheckAppBetaPasswordResponse_BetaPassword>, I>>(
    object: I,
  ): CMsgClientCheckAppBetaPasswordResponse_BetaPassword {
    const message = createBaseCMsgClientCheckAppBetaPasswordResponse_BetaPassword();
    message.betaname = object.betaname ?? "";
    message.betapassword = object.betapassword ?? "";
    message.betadescription = object.betadescription ?? "";
    return message;
  },
};

function createBaseCMsgClientGetCDNAuthTokenResponse(): CMsgClientGetCDNAuthTokenResponse {
  return { eresult: 0, token: "", expirationTime: 0 };
}

export const CMsgClientGetCDNAuthTokenResponse = {
  encode(message: CMsgClientGetCDNAuthTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(24).uint32(message.expirationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetCDNAuthTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetCDNAuthTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.expirationTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetCDNAuthTokenResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      token: isSet(object.token) ? String(object.token) : "",
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
    };
  },

  toJSON(message: CMsgClientGetCDNAuthTokenResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.token !== undefined && (obj.token = message.token);
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetCDNAuthTokenResponse>, I>>(
    base?: I,
  ): CMsgClientGetCDNAuthTokenResponse {
    return CMsgClientGetCDNAuthTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetCDNAuthTokenResponse>, I>>(
    object: I,
  ): CMsgClientGetCDNAuthTokenResponse {
    const message = createBaseCMsgClientGetCDNAuthTokenResponse();
    message.eresult = object.eresult ?? 0;
    message.token = object.token ?? "";
    message.expirationTime = object.expirationTime ?? 0;
    return message;
  },
};

function createBaseCMsgDownloadRateStatistics(): CMsgDownloadRateStatistics {
  return { cellId: 0, stats: [], throttlingKbps: 0, steamRealm: 0 };
}

export const CMsgDownloadRateStatistics = {
  encode(message: CMsgDownloadRateStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    for (const v of message.stats) {
      CMsgDownloadRateStatistics_StatsInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.throttlingKbps !== 0) {
      writer.uint32(24).uint32(message.throttlingKbps);
    }
    if (message.steamRealm !== 0) {
      writer.uint32(32).uint32(message.steamRealm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDownloadRateStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDownloadRateStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.stats.push(CMsgDownloadRateStatistics_StatsInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.throttlingKbps = reader.uint32();
          break;
        case 4:
          message.steamRealm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDownloadRateStatistics {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgDownloadRateStatistics_StatsInfo.fromJSON(e))
        : [],
      throttlingKbps: isSet(object.throttlingKbps) ? Number(object.throttlingKbps) : 0,
      steamRealm: isSet(object.steamRealm) ? Number(object.steamRealm) : 0,
    };
  },

  toJSON(message: CMsgDownloadRateStatistics): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgDownloadRateStatistics_StatsInfo.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    message.throttlingKbps !== undefined && (obj.throttlingKbps = Math.round(message.throttlingKbps));
    message.steamRealm !== undefined && (obj.steamRealm = Math.round(message.steamRealm));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDownloadRateStatistics>, I>>(base?: I): CMsgDownloadRateStatistics {
    return CMsgDownloadRateStatistics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDownloadRateStatistics>, I>>(object: I): CMsgDownloadRateStatistics {
    const message = createBaseCMsgDownloadRateStatistics();
    message.cellId = object.cellId ?? 0;
    message.stats = object.stats?.map((e) => CMsgDownloadRateStatistics_StatsInfo.fromPartial(e)) || [];
    message.throttlingKbps = object.throttlingKbps ?? 0;
    message.steamRealm = object.steamRealm ?? 0;
    return message;
  },
};

function createBaseCMsgDownloadRateStatistics_StatsInfo(): CMsgDownloadRateStatistics_StatsInfo {
  return {
    sourceType: 0,
    sourceId: 0,
    seconds: 0,
    bytes: 0,
    hostName: "",
    microseconds: 0,
    usedIpv6: false,
    proxied: false,
  };
}

export const CMsgDownloadRateStatistics_StatsInfo = {
  encode(message: CMsgDownloadRateStatistics_StatsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceType !== 0) {
      writer.uint32(8).uint32(message.sourceType);
    }
    if (message.sourceId !== 0) {
      writer.uint32(16).uint32(message.sourceId);
    }
    if (message.seconds !== 0) {
      writer.uint32(24).uint32(message.seconds);
    }
    if (message.bytes !== 0) {
      writer.uint32(32).uint64(message.bytes);
    }
    if (message.hostName !== "") {
      writer.uint32(42).string(message.hostName);
    }
    if (message.microseconds !== 0) {
      writer.uint32(48).uint64(message.microseconds);
    }
    if (message.usedIpv6 === true) {
      writer.uint32(56).bool(message.usedIpv6);
    }
    if (message.proxied === true) {
      writer.uint32(64).bool(message.proxied);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDownloadRateStatistics_StatsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDownloadRateStatistics_StatsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceType = reader.uint32();
          break;
        case 2:
          message.sourceId = reader.uint32();
          break;
        case 3:
          message.seconds = reader.uint32();
          break;
        case 4:
          message.bytes = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.hostName = reader.string();
          break;
        case 6:
          message.microseconds = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.usedIpv6 = reader.bool();
          break;
        case 8:
          message.proxied = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDownloadRateStatistics_StatsInfo {
    return {
      sourceType: isSet(object.sourceType) ? Number(object.sourceType) : 0,
      sourceId: isSet(object.sourceId) ? Number(object.sourceId) : 0,
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
      bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      microseconds: isSet(object.microseconds) ? Number(object.microseconds) : 0,
      usedIpv6: isSet(object.usedIpv6) ? Boolean(object.usedIpv6) : false,
      proxied: isSet(object.proxied) ? Boolean(object.proxied) : false,
    };
  },

  toJSON(message: CMsgDownloadRateStatistics_StatsInfo): unknown {
    const obj: any = {};
    message.sourceType !== undefined && (obj.sourceType = Math.round(message.sourceType));
    message.sourceId !== undefined && (obj.sourceId = Math.round(message.sourceId));
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.microseconds !== undefined && (obj.microseconds = Math.round(message.microseconds));
    message.usedIpv6 !== undefined && (obj.usedIpv6 = message.usedIpv6);
    message.proxied !== undefined && (obj.proxied = message.proxied);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDownloadRateStatistics_StatsInfo>, I>>(
    base?: I,
  ): CMsgDownloadRateStatistics_StatsInfo {
    return CMsgDownloadRateStatistics_StatsInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDownloadRateStatistics_StatsInfo>, I>>(
    object: I,
  ): CMsgDownloadRateStatistics_StatsInfo {
    const message = createBaseCMsgDownloadRateStatistics_StatsInfo();
    message.sourceType = object.sourceType ?? 0;
    message.sourceId = object.sourceId ?? 0;
    message.seconds = object.seconds ?? 0;
    message.bytes = object.bytes ?? 0;
    message.hostName = object.hostName ?? "";
    message.microseconds = object.microseconds ?? 0;
    message.usedIpv6 = object.usedIpv6 ?? false;
    message.proxied = object.proxied ?? false;
    return message;
  },
};

function createBaseCMsgClientRequestAccountData(): CMsgClientRequestAccountData {
  return { accountOrEmail: "", action: 0 };
}

export const CMsgClientRequestAccountData = {
  encode(message: CMsgClientRequestAccountData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountOrEmail !== "") {
      writer.uint32(10).string(message.accountOrEmail);
    }
    if (message.action !== 0) {
      writer.uint32(16).uint32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestAccountData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestAccountData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountOrEmail = reader.string();
          break;
        case 2:
          message.action = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestAccountData {
    return {
      accountOrEmail: isSet(object.accountOrEmail) ? String(object.accountOrEmail) : "",
      action: isSet(object.action) ? Number(object.action) : 0,
    };
  },

  toJSON(message: CMsgClientRequestAccountData): unknown {
    const obj: any = {};
    message.accountOrEmail !== undefined && (obj.accountOrEmail = message.accountOrEmail);
    message.action !== undefined && (obj.action = Math.round(message.action));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestAccountData>, I>>(base?: I): CMsgClientRequestAccountData {
    return CMsgClientRequestAccountData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestAccountData>, I>>(object: I): CMsgClientRequestAccountData {
    const message = createBaseCMsgClientRequestAccountData();
    message.accountOrEmail = object.accountOrEmail ?? "";
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseCMsgClientRequestAccountDataResponse(): CMsgClientRequestAccountDataResponse {
  return {
    action: 0,
    eresult: 0,
    accountName: "",
    ctMatches: 0,
    accountNameSuggestion1: "",
    accountNameSuggestion2: "",
    accountNameSuggestion3: "",
  };
}

export const CMsgClientRequestAccountDataResponse = {
  encode(message: CMsgClientRequestAccountDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).uint32(message.action);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.accountName !== "") {
      writer.uint32(26).string(message.accountName);
    }
    if (message.ctMatches !== 0) {
      writer.uint32(32).uint32(message.ctMatches);
    }
    if (message.accountNameSuggestion1 !== "") {
      writer.uint32(42).string(message.accountNameSuggestion1);
    }
    if (message.accountNameSuggestion2 !== "") {
      writer.uint32(50).string(message.accountNameSuggestion2);
    }
    if (message.accountNameSuggestion3 !== "") {
      writer.uint32(58).string(message.accountNameSuggestion3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestAccountDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestAccountDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.uint32();
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.accountName = reader.string();
          break;
        case 4:
          message.ctMatches = reader.uint32();
          break;
        case 5:
          message.accountNameSuggestion1 = reader.string();
          break;
        case 6:
          message.accountNameSuggestion2 = reader.string();
          break;
        case 7:
          message.accountNameSuggestion3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestAccountDataResponse {
    return {
      action: isSet(object.action) ? Number(object.action) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      ctMatches: isSet(object.ctMatches) ? Number(object.ctMatches) : 0,
      accountNameSuggestion1: isSet(object.accountNameSuggestion1) ? String(object.accountNameSuggestion1) : "",
      accountNameSuggestion2: isSet(object.accountNameSuggestion2) ? String(object.accountNameSuggestion2) : "",
      accountNameSuggestion3: isSet(object.accountNameSuggestion3) ? String(object.accountNameSuggestion3) : "",
    };
  },

  toJSON(message: CMsgClientRequestAccountDataResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = Math.round(message.action));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.ctMatches !== undefined && (obj.ctMatches = Math.round(message.ctMatches));
    message.accountNameSuggestion1 !== undefined && (obj.accountNameSuggestion1 = message.accountNameSuggestion1);
    message.accountNameSuggestion2 !== undefined && (obj.accountNameSuggestion2 = message.accountNameSuggestion2);
    message.accountNameSuggestion3 !== undefined && (obj.accountNameSuggestion3 = message.accountNameSuggestion3);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestAccountDataResponse>, I>>(
    base?: I,
  ): CMsgClientRequestAccountDataResponse {
    return CMsgClientRequestAccountDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestAccountDataResponse>, I>>(
    object: I,
  ): CMsgClientRequestAccountDataResponse {
    const message = createBaseCMsgClientRequestAccountDataResponse();
    message.action = object.action ?? 0;
    message.eresult = object.eresult ?? 0;
    message.accountName = object.accountName ?? "";
    message.ctMatches = object.ctMatches ?? 0;
    message.accountNameSuggestion1 = object.accountNameSuggestion1 ?? "";
    message.accountNameSuggestion2 = object.accountNameSuggestion2 ?? "";
    message.accountNameSuggestion3 = object.accountNameSuggestion3 ?? "";
    return message;
  },
};

function createBaseCMsgClientUGSGetGlobalStats(): CMsgClientUGSGetGlobalStats {
  return { gameid: 0, historyDaysRequested: 0, timeLastRequested: 0, firstDayCached: 0, daysCached: 0 };
}

export const CMsgClientUGSGetGlobalStats = {
  encode(message: CMsgClientUGSGetGlobalStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameid !== 0) {
      writer.uint32(8).uint64(message.gameid);
    }
    if (message.historyDaysRequested !== 0) {
      writer.uint32(16).uint32(message.historyDaysRequested);
    }
    if (message.timeLastRequested !== 0) {
      writer.uint32(29).fixed32(message.timeLastRequested);
    }
    if (message.firstDayCached !== 0) {
      writer.uint32(32).uint32(message.firstDayCached);
    }
    if (message.daysCached !== 0) {
      writer.uint32(40).uint32(message.daysCached);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUGSGetGlobalStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUGSGetGlobalStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.historyDaysRequested = reader.uint32();
          break;
        case 3:
          message.timeLastRequested = reader.fixed32();
          break;
        case 4:
          message.firstDayCached = reader.uint32();
          break;
        case 5:
          message.daysCached = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUGSGetGlobalStats {
    return {
      gameid: isSet(object.gameid) ? Number(object.gameid) : 0,
      historyDaysRequested: isSet(object.historyDaysRequested) ? Number(object.historyDaysRequested) : 0,
      timeLastRequested: isSet(object.timeLastRequested) ? Number(object.timeLastRequested) : 0,
      firstDayCached: isSet(object.firstDayCached) ? Number(object.firstDayCached) : 0,
      daysCached: isSet(object.daysCached) ? Number(object.daysCached) : 0,
    };
  },

  toJSON(message: CMsgClientUGSGetGlobalStats): unknown {
    const obj: any = {};
    message.gameid !== undefined && (obj.gameid = Math.round(message.gameid));
    message.historyDaysRequested !== undefined && (obj.historyDaysRequested = Math.round(message.historyDaysRequested));
    message.timeLastRequested !== undefined && (obj.timeLastRequested = Math.round(message.timeLastRequested));
    message.firstDayCached !== undefined && (obj.firstDayCached = Math.round(message.firstDayCached));
    message.daysCached !== undefined && (obj.daysCached = Math.round(message.daysCached));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStats>, I>>(base?: I): CMsgClientUGSGetGlobalStats {
    return CMsgClientUGSGetGlobalStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStats>, I>>(object: I): CMsgClientUGSGetGlobalStats {
    const message = createBaseCMsgClientUGSGetGlobalStats();
    message.gameid = object.gameid ?? 0;
    message.historyDaysRequested = object.historyDaysRequested ?? 0;
    message.timeLastRequested = object.timeLastRequested ?? 0;
    message.firstDayCached = object.firstDayCached ?? 0;
    message.daysCached = object.daysCached ?? 0;
    return message;
  },
};

function createBaseCMsgClientUGSGetGlobalStatsResponse(): CMsgClientUGSGetGlobalStatsResponse {
  return { eresult: 0, timestamp: 0, dayCurrent: 0, days: [] };
}

export const CMsgClientUGSGetGlobalStatsResponse = {
  encode(message: CMsgClientUGSGetGlobalStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.timestamp !== 0) {
      writer.uint32(21).fixed32(message.timestamp);
    }
    if (message.dayCurrent !== 0) {
      writer.uint32(24).int32(message.dayCurrent);
    }
    for (const v of message.days) {
      CMsgClientUGSGetGlobalStatsResponse_Day.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUGSGetGlobalStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.timestamp = reader.fixed32();
          break;
        case 3:
          message.dayCurrent = reader.int32();
          break;
        case 4:
          message.days.push(CMsgClientUGSGetGlobalStatsResponse_Day.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUGSGetGlobalStatsResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      dayCurrent: isSet(object.dayCurrent) ? Number(object.dayCurrent) : 0,
      days: Array.isArray(object?.days)
        ? object.days.map((e: any) => CMsgClientUGSGetGlobalStatsResponse_Day.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUGSGetGlobalStatsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.dayCurrent !== undefined && (obj.dayCurrent = Math.round(message.dayCurrent));
    if (message.days) {
      obj.days = message.days.map((e) => e ? CMsgClientUGSGetGlobalStatsResponse_Day.toJSON(e) : undefined);
    } else {
      obj.days = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse>, I>>(
    base?: I,
  ): CMsgClientUGSGetGlobalStatsResponse {
    return CMsgClientUGSGetGlobalStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse>, I>>(
    object: I,
  ): CMsgClientUGSGetGlobalStatsResponse {
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse();
    message.eresult = object.eresult ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.dayCurrent = object.dayCurrent ?? 0;
    message.days = object.days?.map((e) => CMsgClientUGSGetGlobalStatsResponse_Day.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientUGSGetGlobalStatsResponse_Day(): CMsgClientUGSGetGlobalStatsResponse_Day {
  return { dayId: 0, stats: [] };
}

export const CMsgClientUGSGetGlobalStatsResponse_Day = {
  encode(message: CMsgClientUGSGetGlobalStatsResponse_Day, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dayId !== 0) {
      writer.uint32(8).uint32(message.dayId);
    }
    for (const v of message.stats) {
      CMsgClientUGSGetGlobalStatsResponse_Day_Stat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUGSGetGlobalStatsResponse_Day {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse_Day();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dayId = reader.uint32();
          break;
        case 2:
          message.stats.push(CMsgClientUGSGetGlobalStatsResponse_Day_Stat.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUGSGetGlobalStatsResponse_Day {
    return {
      dayId: isSet(object.dayId) ? Number(object.dayId) : 0,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgClientUGSGetGlobalStatsResponse_Day_Stat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUGSGetGlobalStatsResponse_Day): unknown {
    const obj: any = {};
    message.dayId !== undefined && (obj.dayId = Math.round(message.dayId));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgClientUGSGetGlobalStatsResponse_Day_Stat.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse_Day>, I>>(
    base?: I,
  ): CMsgClientUGSGetGlobalStatsResponse_Day {
    return CMsgClientUGSGetGlobalStatsResponse_Day.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse_Day>, I>>(
    object: I,
  ): CMsgClientUGSGetGlobalStatsResponse_Day {
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse_Day();
    message.dayId = object.dayId ?? 0;
    message.stats = object.stats?.map((e) => CMsgClientUGSGetGlobalStatsResponse_Day_Stat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientUGSGetGlobalStatsResponse_Day_Stat(): CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
  return { statId: 0, data: 0 };
}

export const CMsgClientUGSGetGlobalStatsResponse_Day_Stat = {
  encode(message: CMsgClientUGSGetGlobalStatsResponse_Day_Stat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).int32(message.statId);
    }
    if (message.data !== 0) {
      writer.uint32(16).int64(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse_Day_Stat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.int32();
          break;
        case 2:
          message.data = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      data: isSet(object.data) ? Number(object.data) : 0,
    };
  },

  toJSON(message: CMsgClientUGSGetGlobalStatsResponse_Day_Stat): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.data !== undefined && (obj.data = Math.round(message.data));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse_Day_Stat>, I>>(
    base?: I,
  ): CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
    return CMsgClientUGSGetGlobalStatsResponse_Day_Stat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUGSGetGlobalStatsResponse_Day_Stat>, I>>(
    object: I,
  ): CMsgClientUGSGetGlobalStatsResponse_Day_Stat {
    const message = createBaseCMsgClientUGSGetGlobalStatsResponse_Day_Stat();
    message.statId = object.statId ?? 0;
    message.data = object.data ?? 0;
    return message;
  },
};

function createBaseCMsgClientRedeemGuestPass(): CMsgClientRedeemGuestPass {
  return { guestPassId: 0 };
}

export const CMsgClientRedeemGuestPass = {
  encode(message: CMsgClientRedeemGuestPass, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guestPassId !== 0) {
      writer.uint32(9).fixed64(message.guestPassId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRedeemGuestPass {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRedeemGuestPass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guestPassId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRedeemGuestPass {
    return { guestPassId: isSet(object.guestPassId) ? Number(object.guestPassId) : 0 };
  },

  toJSON(message: CMsgClientRedeemGuestPass): unknown {
    const obj: any = {};
    message.guestPassId !== undefined && (obj.guestPassId = Math.round(message.guestPassId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRedeemGuestPass>, I>>(base?: I): CMsgClientRedeemGuestPass {
    return CMsgClientRedeemGuestPass.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRedeemGuestPass>, I>>(object: I): CMsgClientRedeemGuestPass {
    const message = createBaseCMsgClientRedeemGuestPass();
    message.guestPassId = object.guestPassId ?? 0;
    return message;
  },
};

function createBaseCMsgClientRedeemGuestPassResponse(): CMsgClientRedeemGuestPassResponse {
  return { eresult: 0, packageId: 0, mustOwnAppid: 0 };
}

export const CMsgClientRedeemGuestPassResponse = {
  encode(message: CMsgClientRedeemGuestPassResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.packageId !== 0) {
      writer.uint32(16).uint32(message.packageId);
    }
    if (message.mustOwnAppid !== 0) {
      writer.uint32(24).uint32(message.mustOwnAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRedeemGuestPassResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRedeemGuestPassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          message.packageId = reader.uint32();
          break;
        case 3:
          message.mustOwnAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRedeemGuestPassResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      packageId: isSet(object.packageId) ? Number(object.packageId) : 0,
      mustOwnAppid: isSet(object.mustOwnAppid) ? Number(object.mustOwnAppid) : 0,
    };
  },

  toJSON(message: CMsgClientRedeemGuestPassResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.packageId !== undefined && (obj.packageId = Math.round(message.packageId));
    message.mustOwnAppid !== undefined && (obj.mustOwnAppid = Math.round(message.mustOwnAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRedeemGuestPassResponse>, I>>(
    base?: I,
  ): CMsgClientRedeemGuestPassResponse {
    return CMsgClientRedeemGuestPassResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRedeemGuestPassResponse>, I>>(
    object: I,
  ): CMsgClientRedeemGuestPassResponse {
    const message = createBaseCMsgClientRedeemGuestPassResponse();
    message.eresult = object.eresult ?? 0;
    message.packageId = object.packageId ?? 0;
    message.mustOwnAppid = object.mustOwnAppid ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetClanActivityCounts(): CMsgClientGetClanActivityCounts {
  return { steamidClans: [] };
}

export const CMsgClientGetClanActivityCounts = {
  encode(message: CMsgClientGetClanActivityCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.steamidClans) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClanActivityCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClanActivityCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidClans.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.steamidClans.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClanActivityCounts {
    return { steamidClans: Array.isArray(object?.steamidClans) ? object.steamidClans.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgClientGetClanActivityCounts): unknown {
    const obj: any = {};
    if (message.steamidClans) {
      obj.steamidClans = message.steamidClans.map((e) => Math.round(e));
    } else {
      obj.steamidClans = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClanActivityCounts>, I>>(base?: I): CMsgClientGetClanActivityCounts {
    return CMsgClientGetClanActivityCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClanActivityCounts>, I>>(
    object: I,
  ): CMsgClientGetClanActivityCounts {
    const message = createBaseCMsgClientGetClanActivityCounts();
    message.steamidClans = object.steamidClans?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientGetClanActivityCountsResponse(): CMsgClientGetClanActivityCountsResponse {
  return { eresult: 0 };
}

export const CMsgClientGetClanActivityCountsResponse = {
  encode(message: CMsgClientGetClanActivityCountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClanActivityCountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClanActivityCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClanActivityCountsResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientGetClanActivityCountsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClanActivityCountsResponse>, I>>(
    base?: I,
  ): CMsgClientGetClanActivityCountsResponse {
    return CMsgClientGetClanActivityCountsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClanActivityCountsResponse>, I>>(
    object: I,
  ): CMsgClientGetClanActivityCountsResponse {
    const message = createBaseCMsgClientGetClanActivityCountsResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientOGSReportString(): CMsgClientOGSReportString {
  return { accumulated: false, sessionid: 0, severity: 0, formatter: "", varargs: Buffer.alloc(0) };
}

export const CMsgClientOGSReportString = {
  encode(message: CMsgClientOGSReportString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accumulated === true) {
      writer.uint32(8).bool(message.accumulated);
    }
    if (message.sessionid !== 0) {
      writer.uint32(16).uint64(message.sessionid);
    }
    if (message.severity !== 0) {
      writer.uint32(24).int32(message.severity);
    }
    if (message.formatter !== "") {
      writer.uint32(34).string(message.formatter);
    }
    if (message.varargs.length !== 0) {
      writer.uint32(42).bytes(message.varargs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientOGSReportString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientOGSReportString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accumulated = reader.bool();
          break;
        case 2:
          message.sessionid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.severity = reader.int32();
          break;
        case 4:
          message.formatter = reader.string();
          break;
        case 5:
          message.varargs = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientOGSReportString {
    return {
      accumulated: isSet(object.accumulated) ? Boolean(object.accumulated) : false,
      sessionid: isSet(object.sessionid) ? Number(object.sessionid) : 0,
      severity: isSet(object.severity) ? Number(object.severity) : 0,
      formatter: isSet(object.formatter) ? String(object.formatter) : "",
      varargs: isSet(object.varargs) ? Buffer.from(bytesFromBase64(object.varargs)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientOGSReportString): unknown {
    const obj: any = {};
    message.accumulated !== undefined && (obj.accumulated = message.accumulated);
    message.sessionid !== undefined && (obj.sessionid = Math.round(message.sessionid));
    message.severity !== undefined && (obj.severity = Math.round(message.severity));
    message.formatter !== undefined && (obj.formatter = message.formatter);
    message.varargs !== undefined &&
      (obj.varargs = base64FromBytes(message.varargs !== undefined ? message.varargs : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientOGSReportString>, I>>(base?: I): CMsgClientOGSReportString {
    return CMsgClientOGSReportString.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientOGSReportString>, I>>(object: I): CMsgClientOGSReportString {
    const message = createBaseCMsgClientOGSReportString();
    message.accumulated = object.accumulated ?? false;
    message.sessionid = object.sessionid ?? 0;
    message.severity = object.severity ?? 0;
    message.formatter = object.formatter ?? "";
    message.varargs = object.varargs ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientOGSReportBug(): CMsgClientOGSReportBug {
  return { sessionid: 0, bugtext: "", screenshot: Buffer.alloc(0) };
}

export const CMsgClientOGSReportBug = {
  encode(message: CMsgClientOGSReportBug, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== 0) {
      writer.uint32(8).uint64(message.sessionid);
    }
    if (message.bugtext !== "") {
      writer.uint32(18).string(message.bugtext);
    }
    if (message.screenshot.length !== 0) {
      writer.uint32(26).bytes(message.screenshot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientOGSReportBug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientOGSReportBug();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bugtext = reader.string();
          break;
        case 3:
          message.screenshot = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientOGSReportBug {
    return {
      sessionid: isSet(object.sessionid) ? Number(object.sessionid) : 0,
      bugtext: isSet(object.bugtext) ? String(object.bugtext) : "",
      screenshot: isSet(object.screenshot) ? Buffer.from(bytesFromBase64(object.screenshot)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientOGSReportBug): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = Math.round(message.sessionid));
    message.bugtext !== undefined && (obj.bugtext = message.bugtext);
    message.screenshot !== undefined &&
      (obj.screenshot = base64FromBytes(message.screenshot !== undefined ? message.screenshot : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientOGSReportBug>, I>>(base?: I): CMsgClientOGSReportBug {
    return CMsgClientOGSReportBug.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientOGSReportBug>, I>>(object: I): CMsgClientOGSReportBug {
    const message = createBaseCMsgClientOGSReportBug();
    message.sessionid = object.sessionid ?? 0;
    message.bugtext = object.bugtext ?? "";
    message.screenshot = object.screenshot ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientSentLogs(): CMsgClientSentLogs {
  return {};
}

export const CMsgClientSentLogs = {
  encode(_: CMsgClientSentLogs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSentLogs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSentLogs();
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

  fromJSON(_: any): CMsgClientSentLogs {
    return {};
  },

  toJSON(_: CMsgClientSentLogs): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSentLogs>, I>>(base?: I): CMsgClientSentLogs {
    return CMsgClientSentLogs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSentLogs>, I>>(_: I): CMsgClientSentLogs {
    const message = createBaseCMsgClientSentLogs();
    return message;
  },
};

function createBaseCMsgGCClient(): CMsgGCClient {
  return { appid: 0, msgtype: 0, payload: Buffer.alloc(0), steamid: 0, gcname: "", ip: 0 };
}

export const CMsgGCClient = {
  encode(message: CMsgGCClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.msgtype !== 0) {
      writer.uint32(16).uint32(message.msgtype);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.steamid !== 0) {
      writer.uint32(33).fixed64(message.steamid);
    }
    if (message.gcname !== "") {
      writer.uint32(42).string(message.gcname);
    }
    if (message.ip !== 0) {
      writer.uint32(48).uint32(message.ip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGCClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGCClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.msgtype = reader.uint32();
          break;
        case 3:
          message.payload = reader.bytes() as Buffer;
          break;
        case 4:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.gcname = reader.string();
          break;
        case 6:
          message.ip = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGCClient {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      msgtype: isSet(object.msgtype) ? Number(object.msgtype) : 0,
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      gcname: isSet(object.gcname) ? String(object.gcname) : "",
      ip: isSet(object.ip) ? Number(object.ip) : 0,
    };
  },

  toJSON(message: CMsgGCClient): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.msgtype !== undefined && (obj.msgtype = Math.round(message.msgtype));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.gcname !== undefined && (obj.gcname = message.gcname);
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGCClient>, I>>(base?: I): CMsgGCClient {
    return CMsgGCClient.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGCClient>, I>>(object: I): CMsgGCClient {
    const message = createBaseCMsgGCClient();
    message.appid = object.appid ?? 0;
    message.msgtype = object.msgtype ?? 0;
    message.payload = object.payload ?? Buffer.alloc(0);
    message.steamid = object.steamid ?? 0;
    message.gcname = object.gcname ?? "";
    message.ip = object.ip ?? 0;
    return message;
  },
};

function createBaseCMsgClientRequestFreeLicense(): CMsgClientRequestFreeLicense {
  return { appids: [] };
}

export const CMsgClientRequestFreeLicense = {
  encode(message: CMsgClientRequestFreeLicense, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestFreeLicense {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestFreeLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appids.push(reader.uint32());
            }
          } else {
            message.appids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestFreeLicense {
    return { appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgClientRequestFreeLicense): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestFreeLicense>, I>>(base?: I): CMsgClientRequestFreeLicense {
    return CMsgClientRequestFreeLicense.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestFreeLicense>, I>>(object: I): CMsgClientRequestFreeLicense {
    const message = createBaseCMsgClientRequestFreeLicense();
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientRequestFreeLicenseResponse(): CMsgClientRequestFreeLicenseResponse {
  return { eresult: 0, grantedPackageids: [], grantedAppids: [] };
}

export const CMsgClientRequestFreeLicenseResponse = {
  encode(message: CMsgClientRequestFreeLicenseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    writer.uint32(18).fork();
    for (const v of message.grantedPackageids) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.grantedAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestFreeLicenseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestFreeLicenseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grantedPackageids.push(reader.uint32());
            }
          } else {
            message.grantedPackageids.push(reader.uint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.grantedAppids.push(reader.uint32());
            }
          } else {
            message.grantedAppids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestFreeLicenseResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      grantedPackageids: Array.isArray(object?.grantedPackageids)
        ? object.grantedPackageids.map((e: any) => Number(e))
        : [],
      grantedAppids: Array.isArray(object?.grantedAppids) ? object.grantedAppids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientRequestFreeLicenseResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.grantedPackageids) {
      obj.grantedPackageids = message.grantedPackageids.map((e) => Math.round(e));
    } else {
      obj.grantedPackageids = [];
    }
    if (message.grantedAppids) {
      obj.grantedAppids = message.grantedAppids.map((e) => Math.round(e));
    } else {
      obj.grantedAppids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestFreeLicenseResponse>, I>>(
    base?: I,
  ): CMsgClientRequestFreeLicenseResponse {
    return CMsgClientRequestFreeLicenseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestFreeLicenseResponse>, I>>(
    object: I,
  ): CMsgClientRequestFreeLicenseResponse {
    const message = createBaseCMsgClientRequestFreeLicenseResponse();
    message.eresult = object.eresult ?? 0;
    message.grantedPackageids = object.grantedPackageids?.map((e) => e) || [];
    message.grantedAppids = object.grantedAppids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgDRMDownloadRequestWithCrashData(): CMsgDRMDownloadRequestWithCrashData {
  return {
    downloadFlags: 0,
    downloadTypesKnown: 0,
    guidDrm: Buffer.alloc(0),
    guidSplit: Buffer.alloc(0),
    guidMerge: Buffer.alloc(0),
    moduleName: "",
    modulePath: "",
    crashData: Buffer.alloc(0),
  };
}

export const CMsgDRMDownloadRequestWithCrashData = {
  encode(message: CMsgDRMDownloadRequestWithCrashData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downloadFlags !== 0) {
      writer.uint32(8).uint32(message.downloadFlags);
    }
    if (message.downloadTypesKnown !== 0) {
      writer.uint32(16).uint32(message.downloadTypesKnown);
    }
    if (message.guidDrm.length !== 0) {
      writer.uint32(26).bytes(message.guidDrm);
    }
    if (message.guidSplit.length !== 0) {
      writer.uint32(34).bytes(message.guidSplit);
    }
    if (message.guidMerge.length !== 0) {
      writer.uint32(42).bytes(message.guidMerge);
    }
    if (message.moduleName !== "") {
      writer.uint32(50).string(message.moduleName);
    }
    if (message.modulePath !== "") {
      writer.uint32(58).string(message.modulePath);
    }
    if (message.crashData.length !== 0) {
      writer.uint32(66).bytes(message.crashData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDRMDownloadRequestWithCrashData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDRMDownloadRequestWithCrashData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downloadFlags = reader.uint32();
          break;
        case 2:
          message.downloadTypesKnown = reader.uint32();
          break;
        case 3:
          message.guidDrm = reader.bytes() as Buffer;
          break;
        case 4:
          message.guidSplit = reader.bytes() as Buffer;
          break;
        case 5:
          message.guidMerge = reader.bytes() as Buffer;
          break;
        case 6:
          message.moduleName = reader.string();
          break;
        case 7:
          message.modulePath = reader.string();
          break;
        case 8:
          message.crashData = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDRMDownloadRequestWithCrashData {
    return {
      downloadFlags: isSet(object.downloadFlags) ? Number(object.downloadFlags) : 0,
      downloadTypesKnown: isSet(object.downloadTypesKnown) ? Number(object.downloadTypesKnown) : 0,
      guidDrm: isSet(object.guidDrm) ? Buffer.from(bytesFromBase64(object.guidDrm)) : Buffer.alloc(0),
      guidSplit: isSet(object.guidSplit) ? Buffer.from(bytesFromBase64(object.guidSplit)) : Buffer.alloc(0),
      guidMerge: isSet(object.guidMerge) ? Buffer.from(bytesFromBase64(object.guidMerge)) : Buffer.alloc(0),
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      modulePath: isSet(object.modulePath) ? String(object.modulePath) : "",
      crashData: isSet(object.crashData) ? Buffer.from(bytesFromBase64(object.crashData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgDRMDownloadRequestWithCrashData): unknown {
    const obj: any = {};
    message.downloadFlags !== undefined && (obj.downloadFlags = Math.round(message.downloadFlags));
    message.downloadTypesKnown !== undefined && (obj.downloadTypesKnown = Math.round(message.downloadTypesKnown));
    message.guidDrm !== undefined &&
      (obj.guidDrm = base64FromBytes(message.guidDrm !== undefined ? message.guidDrm : Buffer.alloc(0)));
    message.guidSplit !== undefined &&
      (obj.guidSplit = base64FromBytes(message.guidSplit !== undefined ? message.guidSplit : Buffer.alloc(0)));
    message.guidMerge !== undefined &&
      (obj.guidMerge = base64FromBytes(message.guidMerge !== undefined ? message.guidMerge : Buffer.alloc(0)));
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.modulePath !== undefined && (obj.modulePath = message.modulePath);
    message.crashData !== undefined &&
      (obj.crashData = base64FromBytes(message.crashData !== undefined ? message.crashData : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDRMDownloadRequestWithCrashData>, I>>(
    base?: I,
  ): CMsgDRMDownloadRequestWithCrashData {
    return CMsgDRMDownloadRequestWithCrashData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDRMDownloadRequestWithCrashData>, I>>(
    object: I,
  ): CMsgDRMDownloadRequestWithCrashData {
    const message = createBaseCMsgDRMDownloadRequestWithCrashData();
    message.downloadFlags = object.downloadFlags ?? 0;
    message.downloadTypesKnown = object.downloadTypesKnown ?? 0;
    message.guidDrm = object.guidDrm ?? Buffer.alloc(0);
    message.guidSplit = object.guidSplit ?? Buffer.alloc(0);
    message.guidMerge = object.guidMerge ?? Buffer.alloc(0);
    message.moduleName = object.moduleName ?? "";
    message.modulePath = object.modulePath ?? "";
    message.crashData = object.crashData ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgDRMDownloadResponse(): CMsgDRMDownloadResponse {
  return {
    eresult: 0,
    appId: 0,
    blobDownloadType: 0,
    mergeGuid: Buffer.alloc(0),
    downloadFileDfsIp: 0,
    downloadFileDfsPort: 0,
    downloadFileUrl: "",
    modulePath: "",
  };
}

export const CMsgDRMDownloadResponse = {
  encode(message: CMsgDRMDownloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.blobDownloadType !== 0) {
      writer.uint32(24).uint32(message.blobDownloadType);
    }
    if (message.mergeGuid.length !== 0) {
      writer.uint32(34).bytes(message.mergeGuid);
    }
    if (message.downloadFileDfsIp !== 0) {
      writer.uint32(40).uint32(message.downloadFileDfsIp);
    }
    if (message.downloadFileDfsPort !== 0) {
      writer.uint32(48).uint32(message.downloadFileDfsPort);
    }
    if (message.downloadFileUrl !== "") {
      writer.uint32(58).string(message.downloadFileUrl);
    }
    if (message.modulePath !== "") {
      writer.uint32(66).string(message.modulePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDRMDownloadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDRMDownloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.blobDownloadType = reader.uint32();
          break;
        case 4:
          message.mergeGuid = reader.bytes() as Buffer;
          break;
        case 5:
          message.downloadFileDfsIp = reader.uint32();
          break;
        case 6:
          message.downloadFileDfsPort = reader.uint32();
          break;
        case 7:
          message.downloadFileUrl = reader.string();
          break;
        case 8:
          message.modulePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDRMDownloadResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      blobDownloadType: isSet(object.blobDownloadType) ? Number(object.blobDownloadType) : 0,
      mergeGuid: isSet(object.mergeGuid) ? Buffer.from(bytesFromBase64(object.mergeGuid)) : Buffer.alloc(0),
      downloadFileDfsIp: isSet(object.downloadFileDfsIp) ? Number(object.downloadFileDfsIp) : 0,
      downloadFileDfsPort: isSet(object.downloadFileDfsPort) ? Number(object.downloadFileDfsPort) : 0,
      downloadFileUrl: isSet(object.downloadFileUrl) ? String(object.downloadFileUrl) : "",
      modulePath: isSet(object.modulePath) ? String(object.modulePath) : "",
    };
  },

  toJSON(message: CMsgDRMDownloadResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.blobDownloadType !== undefined && (obj.blobDownloadType = Math.round(message.blobDownloadType));
    message.mergeGuid !== undefined &&
      (obj.mergeGuid = base64FromBytes(message.mergeGuid !== undefined ? message.mergeGuid : Buffer.alloc(0)));
    message.downloadFileDfsIp !== undefined && (obj.downloadFileDfsIp = Math.round(message.downloadFileDfsIp));
    message.downloadFileDfsPort !== undefined && (obj.downloadFileDfsPort = Math.round(message.downloadFileDfsPort));
    message.downloadFileUrl !== undefined && (obj.downloadFileUrl = message.downloadFileUrl);
    message.modulePath !== undefined && (obj.modulePath = message.modulePath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDRMDownloadResponse>, I>>(base?: I): CMsgDRMDownloadResponse {
    return CMsgDRMDownloadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDRMDownloadResponse>, I>>(object: I): CMsgDRMDownloadResponse {
    const message = createBaseCMsgDRMDownloadResponse();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.blobDownloadType = object.blobDownloadType ?? 0;
    message.mergeGuid = object.mergeGuid ?? Buffer.alloc(0);
    message.downloadFileDfsIp = object.downloadFileDfsIp ?? 0;
    message.downloadFileDfsPort = object.downloadFileDfsPort ?? 0;
    message.downloadFileUrl = object.downloadFileUrl ?? "";
    message.modulePath = object.modulePath ?? "";
    return message;
  },
};

function createBaseCMsgDRMFinalResult(): CMsgDRMFinalResult {
  return {
    eResult: 0,
    appId: 0,
    blobDownloadType: 0,
    errorDetail: 0,
    mergeGuid: Buffer.alloc(0),
    downloadFileDfsIp: 0,
    downloadFileDfsPort: 0,
    downloadFileUrl: "",
  };
}

export const CMsgDRMFinalResult = {
  encode(message: CMsgDRMFinalResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eResult !== 0) {
      writer.uint32(8).uint32(message.eResult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.blobDownloadType !== 0) {
      writer.uint32(24).uint32(message.blobDownloadType);
    }
    if (message.errorDetail !== 0) {
      writer.uint32(32).uint32(message.errorDetail);
    }
    if (message.mergeGuid.length !== 0) {
      writer.uint32(42).bytes(message.mergeGuid);
    }
    if (message.downloadFileDfsIp !== 0) {
      writer.uint32(48).uint32(message.downloadFileDfsIp);
    }
    if (message.downloadFileDfsPort !== 0) {
      writer.uint32(56).uint32(message.downloadFileDfsPort);
    }
    if (message.downloadFileUrl !== "") {
      writer.uint32(66).string(message.downloadFileUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDRMFinalResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDRMFinalResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eResult = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.blobDownloadType = reader.uint32();
          break;
        case 4:
          message.errorDetail = reader.uint32();
          break;
        case 5:
          message.mergeGuid = reader.bytes() as Buffer;
          break;
        case 6:
          message.downloadFileDfsIp = reader.uint32();
          break;
        case 7:
          message.downloadFileDfsPort = reader.uint32();
          break;
        case 8:
          message.downloadFileUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDRMFinalResult {
    return {
      eResult: isSet(object.eResult) ? Number(object.eResult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      blobDownloadType: isSet(object.blobDownloadType) ? Number(object.blobDownloadType) : 0,
      errorDetail: isSet(object.errorDetail) ? Number(object.errorDetail) : 0,
      mergeGuid: isSet(object.mergeGuid) ? Buffer.from(bytesFromBase64(object.mergeGuid)) : Buffer.alloc(0),
      downloadFileDfsIp: isSet(object.downloadFileDfsIp) ? Number(object.downloadFileDfsIp) : 0,
      downloadFileDfsPort: isSet(object.downloadFileDfsPort) ? Number(object.downloadFileDfsPort) : 0,
      downloadFileUrl: isSet(object.downloadFileUrl) ? String(object.downloadFileUrl) : "",
    };
  },

  toJSON(message: CMsgDRMFinalResult): unknown {
    const obj: any = {};
    message.eResult !== undefined && (obj.eResult = Math.round(message.eResult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.blobDownloadType !== undefined && (obj.blobDownloadType = Math.round(message.blobDownloadType));
    message.errorDetail !== undefined && (obj.errorDetail = Math.round(message.errorDetail));
    message.mergeGuid !== undefined &&
      (obj.mergeGuid = base64FromBytes(message.mergeGuid !== undefined ? message.mergeGuid : Buffer.alloc(0)));
    message.downloadFileDfsIp !== undefined && (obj.downloadFileDfsIp = Math.round(message.downloadFileDfsIp));
    message.downloadFileDfsPort !== undefined && (obj.downloadFileDfsPort = Math.round(message.downloadFileDfsPort));
    message.downloadFileUrl !== undefined && (obj.downloadFileUrl = message.downloadFileUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDRMFinalResult>, I>>(base?: I): CMsgDRMFinalResult {
    return CMsgDRMFinalResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDRMFinalResult>, I>>(object: I): CMsgDRMFinalResult {
    const message = createBaseCMsgDRMFinalResult();
    message.eResult = object.eResult ?? 0;
    message.appId = object.appId ?? 0;
    message.blobDownloadType = object.blobDownloadType ?? 0;
    message.errorDetail = object.errorDetail ?? 0;
    message.mergeGuid = object.mergeGuid ?? Buffer.alloc(0);
    message.downloadFileDfsIp = object.downloadFileDfsIp ?? 0;
    message.downloadFileDfsPort = object.downloadFileDfsPort ?? 0;
    message.downloadFileUrl = object.downloadFileUrl ?? "";
    return message;
  },
};

function createBaseCMsgClientDPCheckSpecialSurvey(): CMsgClientDPCheckSpecialSurvey {
  return { surveyId: 0 };
}

export const CMsgClientDPCheckSpecialSurvey = {
  encode(message: CMsgClientDPCheckSpecialSurvey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveyId !== 0) {
      writer.uint32(8).uint32(message.surveyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDPCheckSpecialSurvey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDPCheckSpecialSurvey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surveyId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDPCheckSpecialSurvey {
    return { surveyId: isSet(object.surveyId) ? Number(object.surveyId) : 0 };
  },

  toJSON(message: CMsgClientDPCheckSpecialSurvey): unknown {
    const obj: any = {};
    message.surveyId !== undefined && (obj.surveyId = Math.round(message.surveyId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDPCheckSpecialSurvey>, I>>(base?: I): CMsgClientDPCheckSpecialSurvey {
    return CMsgClientDPCheckSpecialSurvey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDPCheckSpecialSurvey>, I>>(
    object: I,
  ): CMsgClientDPCheckSpecialSurvey {
    const message = createBaseCMsgClientDPCheckSpecialSurvey();
    message.surveyId = object.surveyId ?? 0;
    return message;
  },
};

function createBaseCMsgClientDPCheckSpecialSurveyResponse(): CMsgClientDPCheckSpecialSurveyResponse {
  return { eResult: 0, state: 0, name: "", customUrl: "", includeSoftware: false, token: Buffer.alloc(0) };
}

export const CMsgClientDPCheckSpecialSurveyResponse = {
  encode(message: CMsgClientDPCheckSpecialSurveyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eResult !== 0) {
      writer.uint32(8).uint32(message.eResult);
    }
    if (message.state !== 0) {
      writer.uint32(16).uint32(message.state);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.customUrl !== "") {
      writer.uint32(34).string(message.customUrl);
    }
    if (message.includeSoftware === true) {
      writer.uint32(40).bool(message.includeSoftware);
    }
    if (message.token.length !== 0) {
      writer.uint32(50).bytes(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDPCheckSpecialSurveyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDPCheckSpecialSurveyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eResult = reader.uint32();
          break;
        case 2:
          message.state = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.customUrl = reader.string();
          break;
        case 5:
          message.includeSoftware = reader.bool();
          break;
        case 6:
          message.token = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDPCheckSpecialSurveyResponse {
    return {
      eResult: isSet(object.eResult) ? Number(object.eResult) : 0,
      state: isSet(object.state) ? Number(object.state) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      customUrl: isSet(object.customUrl) ? String(object.customUrl) : "",
      includeSoftware: isSet(object.includeSoftware) ? Boolean(object.includeSoftware) : false,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientDPCheckSpecialSurveyResponse): unknown {
    const obj: any = {};
    message.eResult !== undefined && (obj.eResult = Math.round(message.eResult));
    message.state !== undefined && (obj.state = Math.round(message.state));
    message.name !== undefined && (obj.name = message.name);
    message.customUrl !== undefined && (obj.customUrl = message.customUrl);
    message.includeSoftware !== undefined && (obj.includeSoftware = message.includeSoftware);
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDPCheckSpecialSurveyResponse>, I>>(
    base?: I,
  ): CMsgClientDPCheckSpecialSurveyResponse {
    return CMsgClientDPCheckSpecialSurveyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDPCheckSpecialSurveyResponse>, I>>(
    object: I,
  ): CMsgClientDPCheckSpecialSurveyResponse {
    const message = createBaseCMsgClientDPCheckSpecialSurveyResponse();
    message.eResult = object.eResult ?? 0;
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.customUrl = object.customUrl ?? "";
    message.includeSoftware = object.includeSoftware ?? false;
    message.token = object.token ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientDPSendSpecialSurveyResponse(): CMsgClientDPSendSpecialSurveyResponse {
  return { surveyId: 0, data: Buffer.alloc(0) };
}

export const CMsgClientDPSendSpecialSurveyResponse = {
  encode(message: CMsgClientDPSendSpecialSurveyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveyId !== 0) {
      writer.uint32(8).uint32(message.surveyId);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDPSendSpecialSurveyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDPSendSpecialSurveyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surveyId = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDPSendSpecialSurveyResponse {
    return {
      surveyId: isSet(object.surveyId) ? Number(object.surveyId) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientDPSendSpecialSurveyResponse): unknown {
    const obj: any = {};
    message.surveyId !== undefined && (obj.surveyId = Math.round(message.surveyId));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDPSendSpecialSurveyResponse>, I>>(
    base?: I,
  ): CMsgClientDPSendSpecialSurveyResponse {
    return CMsgClientDPSendSpecialSurveyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDPSendSpecialSurveyResponse>, I>>(
    object: I,
  ): CMsgClientDPSendSpecialSurveyResponse {
    const message = createBaseCMsgClientDPSendSpecialSurveyResponse();
    message.surveyId = object.surveyId ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientDPSendSpecialSurveyResponseReply(): CMsgClientDPSendSpecialSurveyResponseReply {
  return { eResult: 0, token: Buffer.alloc(0) };
}

export const CMsgClientDPSendSpecialSurveyResponseReply = {
  encode(message: CMsgClientDPSendSpecialSurveyResponseReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eResult !== 0) {
      writer.uint32(8).uint32(message.eResult);
    }
    if (message.token.length !== 0) {
      writer.uint32(18).bytes(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDPSendSpecialSurveyResponseReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDPSendSpecialSurveyResponseReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eResult = reader.uint32();
          break;
        case 2:
          message.token = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDPSendSpecialSurveyResponseReply {
    return {
      eResult: isSet(object.eResult) ? Number(object.eResult) : 0,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientDPSendSpecialSurveyResponseReply): unknown {
    const obj: any = {};
    message.eResult !== undefined && (obj.eResult = Math.round(message.eResult));
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDPSendSpecialSurveyResponseReply>, I>>(
    base?: I,
  ): CMsgClientDPSendSpecialSurveyResponseReply {
    return CMsgClientDPSendSpecialSurveyResponseReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDPSendSpecialSurveyResponseReply>, I>>(
    object: I,
  ): CMsgClientDPSendSpecialSurveyResponseReply {
    const message = createBaseCMsgClientDPSendSpecialSurveyResponseReply();
    message.eResult = object.eResult ?? 0;
    message.token = object.token ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientRequestForgottenPasswordEmail(): CMsgClientRequestForgottenPasswordEmail {
  return { accountName: "", passwordTried: "" };
}

export const CMsgClientRequestForgottenPasswordEmail = {
  encode(message: CMsgClientRequestForgottenPasswordEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountName !== "") {
      writer.uint32(10).string(message.accountName);
    }
    if (message.passwordTried !== "") {
      writer.uint32(18).string(message.passwordTried);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestForgottenPasswordEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestForgottenPasswordEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountName = reader.string();
          break;
        case 2:
          message.passwordTried = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestForgottenPasswordEmail {
    return {
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      passwordTried: isSet(object.passwordTried) ? String(object.passwordTried) : "",
    };
  },

  toJSON(message: CMsgClientRequestForgottenPasswordEmail): unknown {
    const obj: any = {};
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.passwordTried !== undefined && (obj.passwordTried = message.passwordTried);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestForgottenPasswordEmail>, I>>(
    base?: I,
  ): CMsgClientRequestForgottenPasswordEmail {
    return CMsgClientRequestForgottenPasswordEmail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestForgottenPasswordEmail>, I>>(
    object: I,
  ): CMsgClientRequestForgottenPasswordEmail {
    const message = createBaseCMsgClientRequestForgottenPasswordEmail();
    message.accountName = object.accountName ?? "";
    message.passwordTried = object.passwordTried ?? "";
    return message;
  },
};

function createBaseCMsgClientRequestForgottenPasswordEmailResponse(): CMsgClientRequestForgottenPasswordEmailResponse {
  return { eResult: 0, useSecretQuestion: false };
}

export const CMsgClientRequestForgottenPasswordEmailResponse = {
  encode(
    message: CMsgClientRequestForgottenPasswordEmailResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eResult !== 0) {
      writer.uint32(8).uint32(message.eResult);
    }
    if (message.useSecretQuestion === true) {
      writer.uint32(16).bool(message.useSecretQuestion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestForgottenPasswordEmailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestForgottenPasswordEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eResult = reader.uint32();
          break;
        case 2:
          message.useSecretQuestion = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestForgottenPasswordEmailResponse {
    return {
      eResult: isSet(object.eResult) ? Number(object.eResult) : 0,
      useSecretQuestion: isSet(object.useSecretQuestion) ? Boolean(object.useSecretQuestion) : false,
    };
  },

  toJSON(message: CMsgClientRequestForgottenPasswordEmailResponse): unknown {
    const obj: any = {};
    message.eResult !== undefined && (obj.eResult = Math.round(message.eResult));
    message.useSecretQuestion !== undefined && (obj.useSecretQuestion = message.useSecretQuestion);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestForgottenPasswordEmailResponse>, I>>(
    base?: I,
  ): CMsgClientRequestForgottenPasswordEmailResponse {
    return CMsgClientRequestForgottenPasswordEmailResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestForgottenPasswordEmailResponse>, I>>(
    object: I,
  ): CMsgClientRequestForgottenPasswordEmailResponse {
    const message = createBaseCMsgClientRequestForgottenPasswordEmailResponse();
    message.eResult = object.eResult ?? 0;
    message.useSecretQuestion = object.useSecretQuestion ?? false;
    return message;
  },
};

function createBaseCMsgClientItemAnnouncements(): CMsgClientItemAnnouncements {
  return { countNewItems: 0, unseenItems: [] };
}

export const CMsgClientItemAnnouncements = {
  encode(message: CMsgClientItemAnnouncements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countNewItems !== 0) {
      writer.uint32(8).uint32(message.countNewItems);
    }
    for (const v of message.unseenItems) {
      CMsgClientItemAnnouncements_UnseenItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientItemAnnouncements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientItemAnnouncements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countNewItems = reader.uint32();
          break;
        case 2:
          message.unseenItems.push(CMsgClientItemAnnouncements_UnseenItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientItemAnnouncements {
    return {
      countNewItems: isSet(object.countNewItems) ? Number(object.countNewItems) : 0,
      unseenItems: Array.isArray(object?.unseenItems)
        ? object.unseenItems.map((e: any) => CMsgClientItemAnnouncements_UnseenItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientItemAnnouncements): unknown {
    const obj: any = {};
    message.countNewItems !== undefined && (obj.countNewItems = Math.round(message.countNewItems));
    if (message.unseenItems) {
      obj.unseenItems = message.unseenItems.map((e) =>
        e ? CMsgClientItemAnnouncements_UnseenItem.toJSON(e) : undefined
      );
    } else {
      obj.unseenItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientItemAnnouncements>, I>>(base?: I): CMsgClientItemAnnouncements {
    return CMsgClientItemAnnouncements.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientItemAnnouncements>, I>>(object: I): CMsgClientItemAnnouncements {
    const message = createBaseCMsgClientItemAnnouncements();
    message.countNewItems = object.countNewItems ?? 0;
    message.unseenItems = object.unseenItems?.map((e) => CMsgClientItemAnnouncements_UnseenItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientItemAnnouncements_UnseenItem(): CMsgClientItemAnnouncements_UnseenItem {
  return { appid: 0, contextId: 0, assetId: 0, amount: 0, rtime32Gained: 0, sourceAppid: 0 };
}

export const CMsgClientItemAnnouncements_UnseenItem = {
  encode(message: CMsgClientItemAnnouncements_UnseenItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.contextId !== 0) {
      writer.uint32(16).uint64(message.contextId);
    }
    if (message.assetId !== 0) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.rtime32Gained !== 0) {
      writer.uint32(45).fixed32(message.rtime32Gained);
    }
    if (message.sourceAppid !== 0) {
      writer.uint32(48).uint32(message.sourceAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientItemAnnouncements_UnseenItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientItemAnnouncements_UnseenItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.contextId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.assetId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.rtime32Gained = reader.fixed32();
          break;
        case 6:
          message.sourceAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientItemAnnouncements_UnseenItem {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      contextId: isSet(object.contextId) ? Number(object.contextId) : 0,
      assetId: isSet(object.assetId) ? Number(object.assetId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      rtime32Gained: isSet(object.rtime32Gained) ? Number(object.rtime32Gained) : 0,
      sourceAppid: isSet(object.sourceAppid) ? Number(object.sourceAppid) : 0,
    };
  },

  toJSON(message: CMsgClientItemAnnouncements_UnseenItem): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.contextId !== undefined && (obj.contextId = Math.round(message.contextId));
    message.assetId !== undefined && (obj.assetId = Math.round(message.assetId));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.rtime32Gained !== undefined && (obj.rtime32Gained = Math.round(message.rtime32Gained));
    message.sourceAppid !== undefined && (obj.sourceAppid = Math.round(message.sourceAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientItemAnnouncements_UnseenItem>, I>>(
    base?: I,
  ): CMsgClientItemAnnouncements_UnseenItem {
    return CMsgClientItemAnnouncements_UnseenItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientItemAnnouncements_UnseenItem>, I>>(
    object: I,
  ): CMsgClientItemAnnouncements_UnseenItem {
    const message = createBaseCMsgClientItemAnnouncements_UnseenItem();
    message.appid = object.appid ?? 0;
    message.contextId = object.contextId ?? 0;
    message.assetId = object.assetId ?? 0;
    message.amount = object.amount ?? 0;
    message.rtime32Gained = object.rtime32Gained ?? 0;
    message.sourceAppid = object.sourceAppid ?? 0;
    return message;
  },
};

function createBaseCMsgClientRequestItemAnnouncements(): CMsgClientRequestItemAnnouncements {
  return {};
}

export const CMsgClientRequestItemAnnouncements = {
  encode(_: CMsgClientRequestItemAnnouncements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestItemAnnouncements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestItemAnnouncements();
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

  fromJSON(_: any): CMsgClientRequestItemAnnouncements {
    return {};
  },

  toJSON(_: CMsgClientRequestItemAnnouncements): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestItemAnnouncements>, I>>(
    base?: I,
  ): CMsgClientRequestItemAnnouncements {
    return CMsgClientRequestItemAnnouncements.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestItemAnnouncements>, I>>(
    _: I,
  ): CMsgClientRequestItemAnnouncements {
    const message = createBaseCMsgClientRequestItemAnnouncements();
    return message;
  },
};

function createBaseCMsgClientUserNotifications(): CMsgClientUserNotifications {
  return { notifications: [] };
}

export const CMsgClientUserNotifications = {
  encode(message: CMsgClientUserNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.notifications) {
      CMsgClientUserNotifications_Notification.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUserNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUserNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notifications.push(CMsgClientUserNotifications_Notification.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUserNotifications {
    return {
      notifications: Array.isArray(object?.notifications)
        ? object.notifications.map((e: any) => CMsgClientUserNotifications_Notification.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUserNotifications): unknown {
    const obj: any = {};
    if (message.notifications) {
      obj.notifications = message.notifications.map((e) =>
        e ? CMsgClientUserNotifications_Notification.toJSON(e) : undefined
      );
    } else {
      obj.notifications = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUserNotifications>, I>>(base?: I): CMsgClientUserNotifications {
    return CMsgClientUserNotifications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUserNotifications>, I>>(object: I): CMsgClientUserNotifications {
    const message = createBaseCMsgClientUserNotifications();
    message.notifications = object.notifications?.map((e) => CMsgClientUserNotifications_Notification.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCMsgClientUserNotifications_Notification(): CMsgClientUserNotifications_Notification {
  return { userNotificationType: 0, count: 0 };
}

export const CMsgClientUserNotifications_Notification = {
  encode(message: CMsgClientUserNotifications_Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userNotificationType !== 0) {
      writer.uint32(8).uint32(message.userNotificationType);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUserNotifications_Notification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUserNotifications_Notification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userNotificationType = reader.uint32();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUserNotifications_Notification {
    return {
      userNotificationType: isSet(object.userNotificationType) ? Number(object.userNotificationType) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CMsgClientUserNotifications_Notification): unknown {
    const obj: any = {};
    message.userNotificationType !== undefined && (obj.userNotificationType = Math.round(message.userNotificationType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUserNotifications_Notification>, I>>(
    base?: I,
  ): CMsgClientUserNotifications_Notification {
    return CMsgClientUserNotifications_Notification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUserNotifications_Notification>, I>>(
    object: I,
  ): CMsgClientUserNotifications_Notification {
    const message = createBaseCMsgClientUserNotifications_Notification();
    message.userNotificationType = object.userNotificationType ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCMsgClientCommentNotifications(): CMsgClientCommentNotifications {
  return { countNewComments: 0, countNewCommentsOwner: 0, countNewCommentsSubscriptions: 0 };
}

export const CMsgClientCommentNotifications = {
  encode(message: CMsgClientCommentNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countNewComments !== 0) {
      writer.uint32(8).uint32(message.countNewComments);
    }
    if (message.countNewCommentsOwner !== 0) {
      writer.uint32(16).uint32(message.countNewCommentsOwner);
    }
    if (message.countNewCommentsSubscriptions !== 0) {
      writer.uint32(24).uint32(message.countNewCommentsSubscriptions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCommentNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCommentNotifications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countNewComments = reader.uint32();
          break;
        case 2:
          message.countNewCommentsOwner = reader.uint32();
          break;
        case 3:
          message.countNewCommentsSubscriptions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCommentNotifications {
    return {
      countNewComments: isSet(object.countNewComments) ? Number(object.countNewComments) : 0,
      countNewCommentsOwner: isSet(object.countNewCommentsOwner) ? Number(object.countNewCommentsOwner) : 0,
      countNewCommentsSubscriptions: isSet(object.countNewCommentsSubscriptions)
        ? Number(object.countNewCommentsSubscriptions)
        : 0,
    };
  },

  toJSON(message: CMsgClientCommentNotifications): unknown {
    const obj: any = {};
    message.countNewComments !== undefined && (obj.countNewComments = Math.round(message.countNewComments));
    message.countNewCommentsOwner !== undefined &&
      (obj.countNewCommentsOwner = Math.round(message.countNewCommentsOwner));
    message.countNewCommentsSubscriptions !== undefined &&
      (obj.countNewCommentsSubscriptions = Math.round(message.countNewCommentsSubscriptions));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCommentNotifications>, I>>(base?: I): CMsgClientCommentNotifications {
    return CMsgClientCommentNotifications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCommentNotifications>, I>>(
    object: I,
  ): CMsgClientCommentNotifications {
    const message = createBaseCMsgClientCommentNotifications();
    message.countNewComments = object.countNewComments ?? 0;
    message.countNewCommentsOwner = object.countNewCommentsOwner ?? 0;
    message.countNewCommentsSubscriptions = object.countNewCommentsSubscriptions ?? 0;
    return message;
  },
};

function createBaseCMsgClientRequestCommentNotifications(): CMsgClientRequestCommentNotifications {
  return {};
}

export const CMsgClientRequestCommentNotifications = {
  encode(_: CMsgClientRequestCommentNotifications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestCommentNotifications {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestCommentNotifications();
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

  fromJSON(_: any): CMsgClientRequestCommentNotifications {
    return {};
  },

  toJSON(_: CMsgClientRequestCommentNotifications): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestCommentNotifications>, I>>(
    base?: I,
  ): CMsgClientRequestCommentNotifications {
    return CMsgClientRequestCommentNotifications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestCommentNotifications>, I>>(
    _: I,
  ): CMsgClientRequestCommentNotifications {
    const message = createBaseCMsgClientRequestCommentNotifications();
    return message;
  },
};

function createBaseCMsgClientOfflineMessageNotification(): CMsgClientOfflineMessageNotification {
  return { offlineMessages: 0, friendsWithOfflineMessages: [] };
}

export const CMsgClientOfflineMessageNotification = {
  encode(message: CMsgClientOfflineMessageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offlineMessages !== 0) {
      writer.uint32(8).uint32(message.offlineMessages);
    }
    writer.uint32(18).fork();
    for (const v of message.friendsWithOfflineMessages) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientOfflineMessageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientOfflineMessageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offlineMessages = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.friendsWithOfflineMessages.push(reader.uint32());
            }
          } else {
            message.friendsWithOfflineMessages.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientOfflineMessageNotification {
    return {
      offlineMessages: isSet(object.offlineMessages) ? Number(object.offlineMessages) : 0,
      friendsWithOfflineMessages: Array.isArray(object?.friendsWithOfflineMessages)
        ? object.friendsWithOfflineMessages.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CMsgClientOfflineMessageNotification): unknown {
    const obj: any = {};
    message.offlineMessages !== undefined && (obj.offlineMessages = Math.round(message.offlineMessages));
    if (message.friendsWithOfflineMessages) {
      obj.friendsWithOfflineMessages = message.friendsWithOfflineMessages.map((e) => Math.round(e));
    } else {
      obj.friendsWithOfflineMessages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientOfflineMessageNotification>, I>>(
    base?: I,
  ): CMsgClientOfflineMessageNotification {
    return CMsgClientOfflineMessageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientOfflineMessageNotification>, I>>(
    object: I,
  ): CMsgClientOfflineMessageNotification {
    const message = createBaseCMsgClientOfflineMessageNotification();
    message.offlineMessages = object.offlineMessages ?? 0;
    message.friendsWithOfflineMessages = object.friendsWithOfflineMessages?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientRequestOfflineMessageCount(): CMsgClientRequestOfflineMessageCount {
  return {};
}

export const CMsgClientRequestOfflineMessageCount = {
  encode(_: CMsgClientRequestOfflineMessageCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestOfflineMessageCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestOfflineMessageCount();
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

  fromJSON(_: any): CMsgClientRequestOfflineMessageCount {
    return {};
  },

  toJSON(_: CMsgClientRequestOfflineMessageCount): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestOfflineMessageCount>, I>>(
    base?: I,
  ): CMsgClientRequestOfflineMessageCount {
    return CMsgClientRequestOfflineMessageCount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestOfflineMessageCount>, I>>(
    _: I,
  ): CMsgClientRequestOfflineMessageCount {
    const message = createBaseCMsgClientRequestOfflineMessageCount();
    return message;
  },
};

function createBaseCMsgClientChatGetFriendMessageHistory(): CMsgClientChatGetFriendMessageHistory {
  return { steamid: 0 };
}

export const CMsgClientChatGetFriendMessageHistory = {
  encode(message: CMsgClientChatGetFriendMessageHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChatGetFriendMessageHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChatGetFriendMessageHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChatGetFriendMessageHistory {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CMsgClientChatGetFriendMessageHistory): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistory>, I>>(
    base?: I,
  ): CMsgClientChatGetFriendMessageHistory {
    return CMsgClientChatGetFriendMessageHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistory>, I>>(
    object: I,
  ): CMsgClientChatGetFriendMessageHistory {
    const message = createBaseCMsgClientChatGetFriendMessageHistory();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCMsgClientChatGetFriendMessageHistoryResponse(): CMsgClientChatGetFriendMessageHistoryResponse {
  return { steamid: 0, success: 0, messages: [] };
}

export const CMsgClientChatGetFriendMessageHistoryResponse = {
  encode(message: CMsgClientChatGetFriendMessageHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.success !== 0) {
      writer.uint32(16).uint32(message.success);
    }
    for (const v of message.messages) {
      CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChatGetFriendMessageHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChatGetFriendMessageHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.success = reader.uint32();
          break;
        case 3:
          message.messages.push(
            CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChatGetFriendMessageHistoryResponse {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      success: isSet(object.success) ? Number(object.success) : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientChatGetFriendMessageHistoryResponse): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.success !== undefined && (obj.success = Math.round(message.success));
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryResponse>, I>>(
    base?: I,
  ): CMsgClientChatGetFriendMessageHistoryResponse {
    return CMsgClientChatGetFriendMessageHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryResponse>, I>>(
    object: I,
  ): CMsgClientChatGetFriendMessageHistoryResponse {
    const message = createBaseCMsgClientChatGetFriendMessageHistoryResponse();
    message.steamid = object.steamid ?? 0;
    message.success = object.success ?? 0;
    message.messages =
      object.messages?.map((e) => CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientChatGetFriendMessageHistoryResponse_FriendMessage(): CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
  return { accountid: 0, timestamp: 0, message: "", unread: false };
}

export const CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage = {
  encode(
    message: CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.unread === true) {
      writer.uint32(32).bool(message.unread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChatGetFriendMessageHistoryResponse_FriendMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.unread = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      unread: isSet(object.unread) ? Boolean(object.unread) : false,
    };
  },

  toJSON(message: CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.message !== undefined && (obj.message = message.message);
    message.unread !== undefined && (obj.unread = message.unread);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage>, I>>(
    base?: I,
  ): CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
    return CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage>, I>>(
    object: I,
  ): CMsgClientChatGetFriendMessageHistoryResponse_FriendMessage {
    const message = createBaseCMsgClientChatGetFriendMessageHistoryResponse_FriendMessage();
    message.accountid = object.accountid ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.message = object.message ?? "";
    message.unread = object.unread ?? false;
    return message;
  },
};

function createBaseCMsgClientChatGetFriendMessageHistoryForOfflineMessages(): CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
  return {};
}

export const CMsgClientChatGetFriendMessageHistoryForOfflineMessages = {
  encode(
    _: CMsgClientChatGetFriendMessageHistoryForOfflineMessages,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChatGetFriendMessageHistoryForOfflineMessages();
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

  fromJSON(_: any): CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
    return {};
  },

  toJSON(_: CMsgClientChatGetFriendMessageHistoryForOfflineMessages): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryForOfflineMessages>, I>>(
    base?: I,
  ): CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
    return CMsgClientChatGetFriendMessageHistoryForOfflineMessages.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientChatGetFriendMessageHistoryForOfflineMessages>, I>>(
    _: I,
  ): CMsgClientChatGetFriendMessageHistoryForOfflineMessages {
    const message = createBaseCMsgClientChatGetFriendMessageHistoryForOfflineMessages();
    return message;
  },
};

function createBaseCMsgClientFSGetFriendsSteamLevels(): CMsgClientFSGetFriendsSteamLevels {
  return { accountids: [] };
}

export const CMsgClientFSGetFriendsSteamLevels = {
  encode(message: CMsgClientFSGetFriendsSteamLevels, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.accountids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientFSGetFriendsSteamLevels {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientFSGetFriendsSteamLevels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountids.push(reader.uint32());
            }
          } else {
            message.accountids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientFSGetFriendsSteamLevels {
    return { accountids: Array.isArray(object?.accountids) ? object.accountids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgClientFSGetFriendsSteamLevels): unknown {
    const obj: any = {};
    if (message.accountids) {
      obj.accountids = message.accountids.map((e) => Math.round(e));
    } else {
      obj.accountids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevels>, I>>(
    base?: I,
  ): CMsgClientFSGetFriendsSteamLevels {
    return CMsgClientFSGetFriendsSteamLevels.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevels>, I>>(
    object: I,
  ): CMsgClientFSGetFriendsSteamLevels {
    const message = createBaseCMsgClientFSGetFriendsSteamLevels();
    message.accountids = object.accountids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientFSGetFriendsSteamLevelsResponse(): CMsgClientFSGetFriendsSteamLevelsResponse {
  return { friends: [] };
}

export const CMsgClientFSGetFriendsSteamLevelsResponse = {
  encode(message: CMsgClientFSGetFriendsSteamLevelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.friends) {
      CMsgClientFSGetFriendsSteamLevelsResponse_Friend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientFSGetFriendsSteamLevelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientFSGetFriendsSteamLevelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friends.push(CMsgClientFSGetFriendsSteamLevelsResponse_Friend.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientFSGetFriendsSteamLevelsResponse {
    return {
      friends: Array.isArray(object?.friends)
        ? object.friends.map((e: any) => CMsgClientFSGetFriendsSteamLevelsResponse_Friend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientFSGetFriendsSteamLevelsResponse): unknown {
    const obj: any = {};
    if (message.friends) {
      obj.friends = message.friends.map((e) =>
        e ? CMsgClientFSGetFriendsSteamLevelsResponse_Friend.toJSON(e) : undefined
      );
    } else {
      obj.friends = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevelsResponse>, I>>(
    base?: I,
  ): CMsgClientFSGetFriendsSteamLevelsResponse {
    return CMsgClientFSGetFriendsSteamLevelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevelsResponse>, I>>(
    object: I,
  ): CMsgClientFSGetFriendsSteamLevelsResponse {
    const message = createBaseCMsgClientFSGetFriendsSteamLevelsResponse();
    message.friends = object.friends?.map((e) => CMsgClientFSGetFriendsSteamLevelsResponse_Friend.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientFSGetFriendsSteamLevelsResponse_Friend(): CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
  return { accountid: 0, level: 0 };
}

export const CMsgClientFSGetFriendsSteamLevelsResponse_Friend = {
  encode(
    message: CMsgClientFSGetFriendsSteamLevelsResponse_Friend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientFSGetFriendsSteamLevelsResponse_Friend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CMsgClientFSGetFriendsSteamLevelsResponse_Friend): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevelsResponse_Friend>, I>>(
    base?: I,
  ): CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
    return CMsgClientFSGetFriendsSteamLevelsResponse_Friend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientFSGetFriendsSteamLevelsResponse_Friend>, I>>(
    object: I,
  ): CMsgClientFSGetFriendsSteamLevelsResponse_Friend {
    const message = createBaseCMsgClientFSGetFriendsSteamLevelsResponse_Friend();
    message.accountid = object.accountid ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCMsgClientEmailAddrInfo(): CMsgClientEmailAddrInfo {
  return {
    emailAddress: "",
    emailIsValidated: false,
    emailValidationChanged: false,
    credentialChangeRequiresCode: false,
    passwordOrSecretqaChangeRequiresCode: false,
  };
}

export const CMsgClientEmailAddrInfo = {
  encode(message: CMsgClientEmailAddrInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emailAddress !== "") {
      writer.uint32(10).string(message.emailAddress);
    }
    if (message.emailIsValidated === true) {
      writer.uint32(16).bool(message.emailIsValidated);
    }
    if (message.emailValidationChanged === true) {
      writer.uint32(24).bool(message.emailValidationChanged);
    }
    if (message.credentialChangeRequiresCode === true) {
      writer.uint32(32).bool(message.credentialChangeRequiresCode);
    }
    if (message.passwordOrSecretqaChangeRequiresCode === true) {
      writer.uint32(40).bool(message.passwordOrSecretqaChangeRequiresCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientEmailAddrInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientEmailAddrInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emailAddress = reader.string();
          break;
        case 2:
          message.emailIsValidated = reader.bool();
          break;
        case 3:
          message.emailValidationChanged = reader.bool();
          break;
        case 4:
          message.credentialChangeRequiresCode = reader.bool();
          break;
        case 5:
          message.passwordOrSecretqaChangeRequiresCode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientEmailAddrInfo {
    return {
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      emailIsValidated: isSet(object.emailIsValidated) ? Boolean(object.emailIsValidated) : false,
      emailValidationChanged: isSet(object.emailValidationChanged) ? Boolean(object.emailValidationChanged) : false,
      credentialChangeRequiresCode: isSet(object.credentialChangeRequiresCode)
        ? Boolean(object.credentialChangeRequiresCode)
        : false,
      passwordOrSecretqaChangeRequiresCode: isSet(object.passwordOrSecretqaChangeRequiresCode)
        ? Boolean(object.passwordOrSecretqaChangeRequiresCode)
        : false,
    };
  },

  toJSON(message: CMsgClientEmailAddrInfo): unknown {
    const obj: any = {};
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.emailIsValidated !== undefined && (obj.emailIsValidated = message.emailIsValidated);
    message.emailValidationChanged !== undefined && (obj.emailValidationChanged = message.emailValidationChanged);
    message.credentialChangeRequiresCode !== undefined &&
      (obj.credentialChangeRequiresCode = message.credentialChangeRequiresCode);
    message.passwordOrSecretqaChangeRequiresCode !== undefined &&
      (obj.passwordOrSecretqaChangeRequiresCode = message.passwordOrSecretqaChangeRequiresCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientEmailAddrInfo>, I>>(base?: I): CMsgClientEmailAddrInfo {
    return CMsgClientEmailAddrInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientEmailAddrInfo>, I>>(object: I): CMsgClientEmailAddrInfo {
    const message = createBaseCMsgClientEmailAddrInfo();
    message.emailAddress = object.emailAddress ?? "";
    message.emailIsValidated = object.emailIsValidated ?? false;
    message.emailValidationChanged = object.emailValidationChanged ?? false;
    message.credentialChangeRequiresCode = object.credentialChangeRequiresCode ?? false;
    message.passwordOrSecretqaChangeRequiresCode = object.passwordOrSecretqaChangeRequiresCode ?? false;
    return message;
  },
};

function createBaseCMsgCREItemVoteSummary(): CMsgCREItemVoteSummary {
  return { publishedFileIds: [] };
}

export const CMsgCREItemVoteSummary = {
  encode(message: CMsgCREItemVoteSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.publishedFileIds) {
      CMsgCREItemVoteSummary_PublishedFileId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREItemVoteSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREItemVoteSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileIds.push(CMsgCREItemVoteSummary_PublishedFileId.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREItemVoteSummary {
    return {
      publishedFileIds: Array.isArray(object?.publishedFileIds)
        ? object.publishedFileIds.map((e: any) => CMsgCREItemVoteSummary_PublishedFileId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCREItemVoteSummary): unknown {
    const obj: any = {};
    if (message.publishedFileIds) {
      obj.publishedFileIds = message.publishedFileIds.map((e) =>
        e ? CMsgCREItemVoteSummary_PublishedFileId.toJSON(e) : undefined
      );
    } else {
      obj.publishedFileIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREItemVoteSummary>, I>>(base?: I): CMsgCREItemVoteSummary {
    return CMsgCREItemVoteSummary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREItemVoteSummary>, I>>(object: I): CMsgCREItemVoteSummary {
    const message = createBaseCMsgCREItemVoteSummary();
    message.publishedFileIds =
      object.publishedFileIds?.map((e) => CMsgCREItemVoteSummary_PublishedFileId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCREItemVoteSummary_PublishedFileId(): CMsgCREItemVoteSummary_PublishedFileId {
  return { publishedFileId: 0 };
}

export const CMsgCREItemVoteSummary_PublishedFileId = {
  encode(message: CMsgCREItemVoteSummary_PublishedFileId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREItemVoteSummary_PublishedFileId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREItemVoteSummary_PublishedFileId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREItemVoteSummary_PublishedFileId {
    return { publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0 };
  },

  toJSON(message: CMsgCREItemVoteSummary_PublishedFileId): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREItemVoteSummary_PublishedFileId>, I>>(
    base?: I,
  ): CMsgCREItemVoteSummary_PublishedFileId {
    return CMsgCREItemVoteSummary_PublishedFileId.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREItemVoteSummary_PublishedFileId>, I>>(
    object: I,
  ): CMsgCREItemVoteSummary_PublishedFileId {
    const message = createBaseCMsgCREItemVoteSummary_PublishedFileId();
    message.publishedFileId = object.publishedFileId ?? 0;
    return message;
  },
};

function createBaseCMsgCREItemVoteSummaryResponse(): CMsgCREItemVoteSummaryResponse {
  return { eresult: 0, itemVoteSummaries: [] };
}

export const CMsgCREItemVoteSummaryResponse = {
  encode(message: CMsgCREItemVoteSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.itemVoteSummaries) {
      CMsgCREItemVoteSummaryResponse_ItemVoteSummary.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREItemVoteSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREItemVoteSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.itemVoteSummaries.push(
            CMsgCREItemVoteSummaryResponse_ItemVoteSummary.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREItemVoteSummaryResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      itemVoteSummaries: Array.isArray(object?.itemVoteSummaries)
        ? object.itemVoteSummaries.map((e: any) => CMsgCREItemVoteSummaryResponse_ItemVoteSummary.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCREItemVoteSummaryResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.itemVoteSummaries) {
      obj.itemVoteSummaries = message.itemVoteSummaries.map((e) =>
        e ? CMsgCREItemVoteSummaryResponse_ItemVoteSummary.toJSON(e) : undefined
      );
    } else {
      obj.itemVoteSummaries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREItemVoteSummaryResponse>, I>>(base?: I): CMsgCREItemVoteSummaryResponse {
    return CMsgCREItemVoteSummaryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREItemVoteSummaryResponse>, I>>(
    object: I,
  ): CMsgCREItemVoteSummaryResponse {
    const message = createBaseCMsgCREItemVoteSummaryResponse();
    message.eresult = object.eresult ?? 0;
    message.itemVoteSummaries =
      object.itemVoteSummaries?.map((e) => CMsgCREItemVoteSummaryResponse_ItemVoteSummary.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCREItemVoteSummaryResponse_ItemVoteSummary(): CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
  return { publishedFileId: 0, votesFor: 0, votesAgainst: 0, reports: 0, score: 0 };
}

export const CMsgCREItemVoteSummaryResponse_ItemVoteSummary = {
  encode(
    message: CMsgCREItemVoteSummaryResponse_ItemVoteSummary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.votesFor !== 0) {
      writer.uint32(16).int32(message.votesFor);
    }
    if (message.votesAgainst !== 0) {
      writer.uint32(24).int32(message.votesAgainst);
    }
    if (message.reports !== 0) {
      writer.uint32(32).int32(message.reports);
    }
    if (message.score !== 0) {
      writer.uint32(45).float(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREItemVoteSummaryResponse_ItemVoteSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.votesFor = reader.int32();
          break;
        case 3:
          message.votesAgainst = reader.int32();
          break;
        case 4:
          message.reports = reader.int32();
          break;
        case 5:
          message.score = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      votesFor: isSet(object.votesFor) ? Number(object.votesFor) : 0,
      votesAgainst: isSet(object.votesAgainst) ? Number(object.votesAgainst) : 0,
      reports: isSet(object.reports) ? Number(object.reports) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: CMsgCREItemVoteSummaryResponse_ItemVoteSummary): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.votesFor !== undefined && (obj.votesFor = Math.round(message.votesFor));
    message.votesAgainst !== undefined && (obj.votesAgainst = Math.round(message.votesAgainst));
    message.reports !== undefined && (obj.reports = Math.round(message.reports));
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREItemVoteSummaryResponse_ItemVoteSummary>, I>>(
    base?: I,
  ): CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
    return CMsgCREItemVoteSummaryResponse_ItemVoteSummary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREItemVoteSummaryResponse_ItemVoteSummary>, I>>(
    object: I,
  ): CMsgCREItemVoteSummaryResponse_ItemVoteSummary {
    const message = createBaseCMsgCREItemVoteSummaryResponse_ItemVoteSummary();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.votesFor = object.votesFor ?? 0;
    message.votesAgainst = object.votesAgainst ?? 0;
    message.reports = object.reports ?? 0;
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseCMsgCREUpdateUserPublishedItemVote(): CMsgCREUpdateUserPublishedItemVote {
  return { publishedFileId: 0, voteUp: false };
}

export const CMsgCREUpdateUserPublishedItemVote = {
  encode(message: CMsgCREUpdateUserPublishedItemVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.voteUp === true) {
      writer.uint32(16).bool(message.voteUp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREUpdateUserPublishedItemVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREUpdateUserPublishedItemVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.voteUp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREUpdateUserPublishedItemVote {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      voteUp: isSet(object.voteUp) ? Boolean(object.voteUp) : false,
    };
  },

  toJSON(message: CMsgCREUpdateUserPublishedItemVote): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.voteUp !== undefined && (obj.voteUp = message.voteUp);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREUpdateUserPublishedItemVote>, I>>(
    base?: I,
  ): CMsgCREUpdateUserPublishedItemVote {
    return CMsgCREUpdateUserPublishedItemVote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREUpdateUserPublishedItemVote>, I>>(
    object: I,
  ): CMsgCREUpdateUserPublishedItemVote {
    const message = createBaseCMsgCREUpdateUserPublishedItemVote();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.voteUp = object.voteUp ?? false;
    return message;
  },
};

function createBaseCMsgCREUpdateUserPublishedItemVoteResponse(): CMsgCREUpdateUserPublishedItemVoteResponse {
  return { eresult: 0 };
}

export const CMsgCREUpdateUserPublishedItemVoteResponse = {
  encode(message: CMsgCREUpdateUserPublishedItemVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREUpdateUserPublishedItemVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREUpdateUserPublishedItemVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREUpdateUserPublishedItemVoteResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgCREUpdateUserPublishedItemVoteResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREUpdateUserPublishedItemVoteResponse>, I>>(
    base?: I,
  ): CMsgCREUpdateUserPublishedItemVoteResponse {
    return CMsgCREUpdateUserPublishedItemVoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREUpdateUserPublishedItemVoteResponse>, I>>(
    object: I,
  ): CMsgCREUpdateUserPublishedItemVoteResponse {
    const message = createBaseCMsgCREUpdateUserPublishedItemVoteResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgCREGetUserPublishedItemVoteDetails(): CMsgCREGetUserPublishedItemVoteDetails {
  return { publishedFileIds: [] };
}

export const CMsgCREGetUserPublishedItemVoteDetails = {
  encode(message: CMsgCREGetUserPublishedItemVoteDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.publishedFileIds) {
      CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREGetUserPublishedItemVoteDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileIds.push(
            CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREGetUserPublishedItemVoteDetails {
    return {
      publishedFileIds: Array.isArray(object?.publishedFileIds)
        ? object.publishedFileIds.map((e: any) => CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCREGetUserPublishedItemVoteDetails): unknown {
    const obj: any = {};
    if (message.publishedFileIds) {
      obj.publishedFileIds = message.publishedFileIds.map((e) =>
        e ? CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.toJSON(e) : undefined
      );
    } else {
      obj.publishedFileIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetails>, I>>(
    base?: I,
  ): CMsgCREGetUserPublishedItemVoteDetails {
    return CMsgCREGetUserPublishedItemVoteDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetails>, I>>(
    object: I,
  ): CMsgCREGetUserPublishedItemVoteDetails {
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetails();
    message.publishedFileIds =
      object.publishedFileIds?.map((e) => CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCREGetUserPublishedItemVoteDetails_PublishedFileId(): CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
  return { publishedFileId: 0 };
}

export const CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId = {
  encode(
    message: CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetails_PublishedFileId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
    return { publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0 };
  },

  toJSON(message: CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId>, I>>(
    base?: I,
  ): CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
    return CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId>, I>>(
    object: I,
  ): CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetails_PublishedFileId();
    message.publishedFileId = object.publishedFileId ?? 0;
    return message;
  },
};

function createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse(): CMsgCREGetUserPublishedItemVoteDetailsResponse {
  return { eresult: 0, userItemVoteDetails: [] };
}

export const CMsgCREGetUserPublishedItemVoteDetailsResponse = {
  encode(
    message: CMsgCREGetUserPublishedItemVoteDetailsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.userItemVoteDetails) {
      CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCREGetUserPublishedItemVoteDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.userItemVoteDetails.push(
            CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREGetUserPublishedItemVoteDetailsResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      userItemVoteDetails: Array.isArray(object?.userItemVoteDetails)
        ? object.userItemVoteDetails.map((e: any) =>
          CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgCREGetUserPublishedItemVoteDetailsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.userItemVoteDetails) {
      obj.userItemVoteDetails = message.userItemVoteDetails.map((e) =>
        e ? CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.toJSON(e) : undefined
      );
    } else {
      obj.userItemVoteDetails = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetailsResponse>, I>>(
    base?: I,
  ): CMsgCREGetUserPublishedItemVoteDetailsResponse {
    return CMsgCREGetUserPublishedItemVoteDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetailsResponse>, I>>(
    object: I,
  ): CMsgCREGetUserPublishedItemVoteDetailsResponse {
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse();
    message.eresult = object.eresult ?? 0;
    message.userItemVoteDetails =
      object.userItemVoteDetails?.map((e) =>
        CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail(): CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
  return { publishedFileId: 0, vote: 0 };
}

export const CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail = {
  encode(
    message: CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.vote !== 0) {
      writer.uint32(16).int32(message.vote);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.vote = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      vote: isSet(object.vote) ? Number(object.vote) : 0,
    };
  },

  toJSON(message: CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.vote !== undefined && (obj.vote = Math.round(message.vote));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail>, I>>(
    base?: I,
  ): CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
    return CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail>, I>>(
    object: I,
  ): CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
    const message = createBaseCMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.vote = object.vote ?? 0;
    return message;
  },
};

function createBaseCMsgFSGetFollowerCount(): CMsgFSGetFollowerCount {
  return { steamId: 0 };
}

export const CMsgFSGetFollowerCount = {
  encode(message: CMsgFSGetFollowerCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSGetFollowerCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSGetFollowerCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSGetFollowerCount {
    return { steamId: isSet(object.steamId) ? Number(object.steamId) : 0 };
  },

  toJSON(message: CMsgFSGetFollowerCount): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSGetFollowerCount>, I>>(base?: I): CMsgFSGetFollowerCount {
    return CMsgFSGetFollowerCount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSGetFollowerCount>, I>>(object: I): CMsgFSGetFollowerCount {
    const message = createBaseCMsgFSGetFollowerCount();
    message.steamId = object.steamId ?? 0;
    return message;
  },
};

function createBaseCMsgFSGetFollowerCountResponse(): CMsgFSGetFollowerCountResponse {
  return { eresult: 0, count: 0 };
}

export const CMsgFSGetFollowerCountResponse = {
  encode(message: CMsgFSGetFollowerCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSGetFollowerCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSGetFollowerCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSGetFollowerCountResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CMsgFSGetFollowerCountResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSGetFollowerCountResponse>, I>>(base?: I): CMsgFSGetFollowerCountResponse {
    return CMsgFSGetFollowerCountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSGetFollowerCountResponse>, I>>(
    object: I,
  ): CMsgFSGetFollowerCountResponse {
    const message = createBaseCMsgFSGetFollowerCountResponse();
    message.eresult = object.eresult ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCMsgFSGetIsFollowing(): CMsgFSGetIsFollowing {
  return { steamId: 0 };
}

export const CMsgFSGetIsFollowing = {
  encode(message: CMsgFSGetIsFollowing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSGetIsFollowing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSGetIsFollowing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSGetIsFollowing {
    return { steamId: isSet(object.steamId) ? Number(object.steamId) : 0 };
  },

  toJSON(message: CMsgFSGetIsFollowing): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSGetIsFollowing>, I>>(base?: I): CMsgFSGetIsFollowing {
    return CMsgFSGetIsFollowing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSGetIsFollowing>, I>>(object: I): CMsgFSGetIsFollowing {
    const message = createBaseCMsgFSGetIsFollowing();
    message.steamId = object.steamId ?? 0;
    return message;
  },
};

function createBaseCMsgFSGetIsFollowingResponse(): CMsgFSGetIsFollowingResponse {
  return { eresult: 0, isFollowing: false };
}

export const CMsgFSGetIsFollowingResponse = {
  encode(message: CMsgFSGetIsFollowingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.isFollowing === true) {
      writer.uint32(16).bool(message.isFollowing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSGetIsFollowingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSGetIsFollowingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.isFollowing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSGetIsFollowingResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      isFollowing: isSet(object.isFollowing) ? Boolean(object.isFollowing) : false,
    };
  },

  toJSON(message: CMsgFSGetIsFollowingResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.isFollowing !== undefined && (obj.isFollowing = message.isFollowing);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSGetIsFollowingResponse>, I>>(base?: I): CMsgFSGetIsFollowingResponse {
    return CMsgFSGetIsFollowingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSGetIsFollowingResponse>, I>>(object: I): CMsgFSGetIsFollowingResponse {
    const message = createBaseCMsgFSGetIsFollowingResponse();
    message.eresult = object.eresult ?? 0;
    message.isFollowing = object.isFollowing ?? false;
    return message;
  },
};

function createBaseCMsgFSEnumerateFollowingList(): CMsgFSEnumerateFollowingList {
  return { startIndex: 0 };
}

export const CMsgFSEnumerateFollowingList = {
  encode(message: CMsgFSEnumerateFollowingList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startIndex !== 0) {
      writer.uint32(8).uint32(message.startIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSEnumerateFollowingList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSEnumerateFollowingList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSEnumerateFollowingList {
    return { startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0 };
  },

  toJSON(message: CMsgFSEnumerateFollowingList): unknown {
    const obj: any = {};
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSEnumerateFollowingList>, I>>(base?: I): CMsgFSEnumerateFollowingList {
    return CMsgFSEnumerateFollowingList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSEnumerateFollowingList>, I>>(object: I): CMsgFSEnumerateFollowingList {
    const message = createBaseCMsgFSEnumerateFollowingList();
    message.startIndex = object.startIndex ?? 0;
    return message;
  },
};

function createBaseCMsgFSEnumerateFollowingListResponse(): CMsgFSEnumerateFollowingListResponse {
  return { eresult: 0, totalResults: 0, steamIds: [] };
}

export const CMsgFSEnumerateFollowingListResponse = {
  encode(message: CMsgFSEnumerateFollowingListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.totalResults !== 0) {
      writer.uint32(16).int32(message.totalResults);
    }
    writer.uint32(26).fork();
    for (const v of message.steamIds) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFSEnumerateFollowingListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFSEnumerateFollowingListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.totalResults = reader.int32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamIds.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.steamIds.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFSEnumerateFollowingListResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
      steamIds: Array.isArray(object?.steamIds) ? object.steamIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgFSEnumerateFollowingListResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    if (message.steamIds) {
      obj.steamIds = message.steamIds.map((e) => Math.round(e));
    } else {
      obj.steamIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFSEnumerateFollowingListResponse>, I>>(
    base?: I,
  ): CMsgFSEnumerateFollowingListResponse {
    return CMsgFSEnumerateFollowingListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFSEnumerateFollowingListResponse>, I>>(
    object: I,
  ): CMsgFSEnumerateFollowingListResponse {
    const message = createBaseCMsgFSEnumerateFollowingListResponse();
    message.eresult = object.eresult ?? 0;
    message.totalResults = object.totalResults ?? 0;
    message.steamIds = object.steamIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgDPGetNumberOfCurrentPlayers(): CMsgDPGetNumberOfCurrentPlayers {
  return { appid: 0 };
}

export const CMsgDPGetNumberOfCurrentPlayers = {
  encode(message: CMsgDPGetNumberOfCurrentPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPGetNumberOfCurrentPlayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPGetNumberOfCurrentPlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDPGetNumberOfCurrentPlayers {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgDPGetNumberOfCurrentPlayers): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDPGetNumberOfCurrentPlayers>, I>>(base?: I): CMsgDPGetNumberOfCurrentPlayers {
    return CMsgDPGetNumberOfCurrentPlayers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDPGetNumberOfCurrentPlayers>, I>>(
    object: I,
  ): CMsgDPGetNumberOfCurrentPlayers {
    const message = createBaseCMsgDPGetNumberOfCurrentPlayers();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgDPGetNumberOfCurrentPlayersResponse(): CMsgDPGetNumberOfCurrentPlayersResponse {
  return { eresult: 0, playerCount: 0 };
}

export const CMsgDPGetNumberOfCurrentPlayersResponse = {
  encode(message: CMsgDPGetNumberOfCurrentPlayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.playerCount !== 0) {
      writer.uint32(16).int32(message.playerCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDPGetNumberOfCurrentPlayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDPGetNumberOfCurrentPlayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.playerCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDPGetNumberOfCurrentPlayersResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      playerCount: isSet(object.playerCount) ? Number(object.playerCount) : 0,
    };
  },

  toJSON(message: CMsgDPGetNumberOfCurrentPlayersResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.playerCount !== undefined && (obj.playerCount = Math.round(message.playerCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDPGetNumberOfCurrentPlayersResponse>, I>>(
    base?: I,
  ): CMsgDPGetNumberOfCurrentPlayersResponse {
    return CMsgDPGetNumberOfCurrentPlayersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDPGetNumberOfCurrentPlayersResponse>, I>>(
    object: I,
  ): CMsgDPGetNumberOfCurrentPlayersResponse {
    const message = createBaseCMsgDPGetNumberOfCurrentPlayersResponse();
    message.eresult = object.eresult ?? 0;
    message.playerCount = object.playerCount ?? 0;
    return message;
  },
};

function createBaseCMsgClientFriendUserStatusPublished(): CMsgClientFriendUserStatusPublished {
  return { friendSteamid: 0, appid: 0, statusText: "" };
}

export const CMsgClientFriendUserStatusPublished = {
  encode(message: CMsgClientFriendUserStatusPublished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendSteamid !== 0) {
      writer.uint32(9).fixed64(message.friendSteamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.statusText !== "") {
      writer.uint32(26).string(message.statusText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientFriendUserStatusPublished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientFriendUserStatusPublished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friendSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.statusText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientFriendUserStatusPublished {
    return {
      friendSteamid: isSet(object.friendSteamid) ? Number(object.friendSteamid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      statusText: isSet(object.statusText) ? String(object.statusText) : "",
    };
  },

  toJSON(message: CMsgClientFriendUserStatusPublished): unknown {
    const obj: any = {};
    message.friendSteamid !== undefined && (obj.friendSteamid = Math.round(message.friendSteamid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.statusText !== undefined && (obj.statusText = message.statusText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientFriendUserStatusPublished>, I>>(
    base?: I,
  ): CMsgClientFriendUserStatusPublished {
    return CMsgClientFriendUserStatusPublished.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientFriendUserStatusPublished>, I>>(
    object: I,
  ): CMsgClientFriendUserStatusPublished {
    const message = createBaseCMsgClientFriendUserStatusPublished();
    message.friendSteamid = object.friendSteamid ?? 0;
    message.appid = object.appid ?? 0;
    message.statusText = object.statusText ?? "";
    return message;
  },
};

function createBaseCMsgClientServiceMethodLegacy(): CMsgClientServiceMethodLegacy {
  return { methodName: "", serializedMethod: Buffer.alloc(0), isNotification: false };
}

export const CMsgClientServiceMethodLegacy = {
  encode(message: CMsgClientServiceMethodLegacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.methodName !== "") {
      writer.uint32(10).string(message.methodName);
    }
    if (message.serializedMethod.length !== 0) {
      writer.uint32(18).bytes(message.serializedMethod);
    }
    if (message.isNotification === true) {
      writer.uint32(24).bool(message.isNotification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServiceMethodLegacy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServiceMethodLegacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methodName = reader.string();
          break;
        case 2:
          message.serializedMethod = reader.bytes() as Buffer;
          break;
        case 3:
          message.isNotification = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServiceMethodLegacy {
    return {
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      serializedMethod: isSet(object.serializedMethod)
        ? Buffer.from(bytesFromBase64(object.serializedMethod))
        : Buffer.alloc(0),
      isNotification: isSet(object.isNotification) ? Boolean(object.isNotification) : false,
    };
  },

  toJSON(message: CMsgClientServiceMethodLegacy): unknown {
    const obj: any = {};
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.serializedMethod !== undefined &&
      (obj.serializedMethod = base64FromBytes(
        message.serializedMethod !== undefined ? message.serializedMethod : Buffer.alloc(0),
      ));
    message.isNotification !== undefined && (obj.isNotification = message.isNotification);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServiceMethodLegacy>, I>>(base?: I): CMsgClientServiceMethodLegacy {
    return CMsgClientServiceMethodLegacy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServiceMethodLegacy>, I>>(
    object: I,
  ): CMsgClientServiceMethodLegacy {
    const message = createBaseCMsgClientServiceMethodLegacy();
    message.methodName = object.methodName ?? "";
    message.serializedMethod = object.serializedMethod ?? Buffer.alloc(0);
    message.isNotification = object.isNotification ?? false;
    return message;
  },
};

function createBaseCMsgClientServiceMethodLegacyResponse(): CMsgClientServiceMethodLegacyResponse {
  return { methodName: "", serializedMethodResponse: Buffer.alloc(0) };
}

export const CMsgClientServiceMethodLegacyResponse = {
  encode(message: CMsgClientServiceMethodLegacyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.methodName !== "") {
      writer.uint32(10).string(message.methodName);
    }
    if (message.serializedMethodResponse.length !== 0) {
      writer.uint32(18).bytes(message.serializedMethodResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServiceMethodLegacyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServiceMethodLegacyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.methodName = reader.string();
          break;
        case 2:
          message.serializedMethodResponse = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServiceMethodLegacyResponse {
    return {
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      serializedMethodResponse: isSet(object.serializedMethodResponse)
        ? Buffer.from(bytesFromBase64(object.serializedMethodResponse))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientServiceMethodLegacyResponse): unknown {
    const obj: any = {};
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.serializedMethodResponse !== undefined &&
      (obj.serializedMethodResponse = base64FromBytes(
        message.serializedMethodResponse !== undefined ? message.serializedMethodResponse : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServiceMethodLegacyResponse>, I>>(
    base?: I,
  ): CMsgClientServiceMethodLegacyResponse {
    return CMsgClientServiceMethodLegacyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServiceMethodLegacyResponse>, I>>(
    object: I,
  ): CMsgClientServiceMethodLegacyResponse {
    const message = createBaseCMsgClientServiceMethodLegacyResponse();
    message.methodName = object.methodName ?? "";
    message.serializedMethodResponse = object.serializedMethodResponse ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientUIMode(): CMsgClientUIMode {
  return { uimode: 0, chatMode: 0 };
}

export const CMsgClientUIMode = {
  encode(message: CMsgClientUIMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uimode !== 0) {
      writer.uint32(8).uint32(message.uimode);
    }
    if (message.chatMode !== 0) {
      writer.uint32(16).uint32(message.chatMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUIMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUIMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uimode = reader.uint32();
          break;
        case 2:
          message.chatMode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUIMode {
    return {
      uimode: isSet(object.uimode) ? Number(object.uimode) : 0,
      chatMode: isSet(object.chatMode) ? Number(object.chatMode) : 0,
    };
  },

  toJSON(message: CMsgClientUIMode): unknown {
    const obj: any = {};
    message.uimode !== undefined && (obj.uimode = Math.round(message.uimode));
    message.chatMode !== undefined && (obj.chatMode = Math.round(message.chatMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUIMode>, I>>(base?: I): CMsgClientUIMode {
    return CMsgClientUIMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUIMode>, I>>(object: I): CMsgClientUIMode {
    const message = createBaseCMsgClientUIMode();
    message.uimode = object.uimode ?? 0;
    message.chatMode = object.chatMode ?? 0;
    return message;
  },
};

function createBaseCMsgClientVanityURLChangedNotification(): CMsgClientVanityURLChangedNotification {
  return { vanityUrl: "" };
}

export const CMsgClientVanityURLChangedNotification = {
  encode(message: CMsgClientVanityURLChangedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vanityUrl !== "") {
      writer.uint32(10).string(message.vanityUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientVanityURLChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientVanityURLChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vanityUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientVanityURLChangedNotification {
    return { vanityUrl: isSet(object.vanityUrl) ? String(object.vanityUrl) : "" };
  },

  toJSON(message: CMsgClientVanityURLChangedNotification): unknown {
    const obj: any = {};
    message.vanityUrl !== undefined && (obj.vanityUrl = message.vanityUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientVanityURLChangedNotification>, I>>(
    base?: I,
  ): CMsgClientVanityURLChangedNotification {
    return CMsgClientVanityURLChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientVanityURLChangedNotification>, I>>(
    object: I,
  ): CMsgClientVanityURLChangedNotification {
    const message = createBaseCMsgClientVanityURLChangedNotification();
    message.vanityUrl = object.vanityUrl ?? "";
    return message;
  },
};

function createBaseCMsgClientAuthorizeLocalDeviceRequest(): CMsgClientAuthorizeLocalDeviceRequest {
  return { deviceDescription: "", ownerAccountId: 0, localDeviceToken: 0 };
}

export const CMsgClientAuthorizeLocalDeviceRequest = {
  encode(message: CMsgClientAuthorizeLocalDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceDescription !== "") {
      writer.uint32(10).string(message.deviceDescription);
    }
    if (message.ownerAccountId !== 0) {
      writer.uint32(16).uint32(message.ownerAccountId);
    }
    if (message.localDeviceToken !== 0) {
      writer.uint32(24).uint64(message.localDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAuthorizeLocalDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAuthorizeLocalDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceDescription = reader.string();
          break;
        case 2:
          message.ownerAccountId = reader.uint32();
          break;
        case 3:
          message.localDeviceToken = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAuthorizeLocalDeviceRequest {
    return {
      deviceDescription: isSet(object.deviceDescription) ? String(object.deviceDescription) : "",
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      localDeviceToken: isSet(object.localDeviceToken) ? Number(object.localDeviceToken) : 0,
    };
  },

  toJSON(message: CMsgClientAuthorizeLocalDeviceRequest): unknown {
    const obj: any = {};
    message.deviceDescription !== undefined && (obj.deviceDescription = message.deviceDescription);
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.localDeviceToken !== undefined && (obj.localDeviceToken = Math.round(message.localDeviceToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDeviceRequest>, I>>(
    base?: I,
  ): CMsgClientAuthorizeLocalDeviceRequest {
    return CMsgClientAuthorizeLocalDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDeviceRequest>, I>>(
    object: I,
  ): CMsgClientAuthorizeLocalDeviceRequest {
    const message = createBaseCMsgClientAuthorizeLocalDeviceRequest();
    message.deviceDescription = object.deviceDescription ?? "";
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.localDeviceToken = object.localDeviceToken ?? 0;
    return message;
  },
};

function createBaseCMsgClientAuthorizeLocalDevice(): CMsgClientAuthorizeLocalDevice {
  return { eresult: 0, ownerAccountId: 0, authedDeviceToken: 0 };
}

export const CMsgClientAuthorizeLocalDevice = {
  encode(message: CMsgClientAuthorizeLocalDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.ownerAccountId !== 0) {
      writer.uint32(16).uint32(message.ownerAccountId);
    }
    if (message.authedDeviceToken !== 0) {
      writer.uint32(24).uint64(message.authedDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAuthorizeLocalDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAuthorizeLocalDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.ownerAccountId = reader.uint32();
          break;
        case 3:
          message.authedDeviceToken = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAuthorizeLocalDevice {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      authedDeviceToken: isSet(object.authedDeviceToken) ? Number(object.authedDeviceToken) : 0,
    };
  },

  toJSON(message: CMsgClientAuthorizeLocalDevice): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.authedDeviceToken !== undefined && (obj.authedDeviceToken = Math.round(message.authedDeviceToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDevice>, I>>(base?: I): CMsgClientAuthorizeLocalDevice {
    return CMsgClientAuthorizeLocalDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDevice>, I>>(
    object: I,
  ): CMsgClientAuthorizeLocalDevice {
    const message = createBaseCMsgClientAuthorizeLocalDevice();
    message.eresult = object.eresult ?? 0;
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.authedDeviceToken = object.authedDeviceToken ?? 0;
    return message;
  },
};

function createBaseCMsgClientAuthorizeLocalDeviceNotification(): CMsgClientAuthorizeLocalDeviceNotification {
  return { eresult: 0, ownerAccountId: 0, localDeviceToken: 0 };
}

export const CMsgClientAuthorizeLocalDeviceNotification = {
  encode(message: CMsgClientAuthorizeLocalDeviceNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.ownerAccountId !== 0) {
      writer.uint32(16).uint32(message.ownerAccountId);
    }
    if (message.localDeviceToken !== 0) {
      writer.uint32(24).uint64(message.localDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAuthorizeLocalDeviceNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAuthorizeLocalDeviceNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.ownerAccountId = reader.uint32();
          break;
        case 3:
          message.localDeviceToken = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAuthorizeLocalDeviceNotification {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      localDeviceToken: isSet(object.localDeviceToken) ? Number(object.localDeviceToken) : 0,
    };
  },

  toJSON(message: CMsgClientAuthorizeLocalDeviceNotification): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.localDeviceToken !== undefined && (obj.localDeviceToken = Math.round(message.localDeviceToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDeviceNotification>, I>>(
    base?: I,
  ): CMsgClientAuthorizeLocalDeviceNotification {
    return CMsgClientAuthorizeLocalDeviceNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAuthorizeLocalDeviceNotification>, I>>(
    object: I,
  ): CMsgClientAuthorizeLocalDeviceNotification {
    const message = createBaseCMsgClientAuthorizeLocalDeviceNotification();
    message.eresult = object.eresult ?? 0;
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.localDeviceToken = object.localDeviceToken ?? 0;
    return message;
  },
};

function createBaseCMsgClientDeauthorizeDeviceRequest(): CMsgClientDeauthorizeDeviceRequest {
  return { deauthorizationAccountId: 0, deauthorizationDeviceToken: 0 };
}

export const CMsgClientDeauthorizeDeviceRequest = {
  encode(message: CMsgClientDeauthorizeDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deauthorizationAccountId !== 0) {
      writer.uint32(8).uint32(message.deauthorizationAccountId);
    }
    if (message.deauthorizationDeviceToken !== 0) {
      writer.uint32(16).uint64(message.deauthorizationDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDeauthorizeDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDeauthorizeDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deauthorizationAccountId = reader.uint32();
          break;
        case 2:
          message.deauthorizationDeviceToken = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDeauthorizeDeviceRequest {
    return {
      deauthorizationAccountId: isSet(object.deauthorizationAccountId) ? Number(object.deauthorizationAccountId) : 0,
      deauthorizationDeviceToken: isSet(object.deauthorizationDeviceToken)
        ? Number(object.deauthorizationDeviceToken)
        : 0,
    };
  },

  toJSON(message: CMsgClientDeauthorizeDeviceRequest): unknown {
    const obj: any = {};
    message.deauthorizationAccountId !== undefined &&
      (obj.deauthorizationAccountId = Math.round(message.deauthorizationAccountId));
    message.deauthorizationDeviceToken !== undefined &&
      (obj.deauthorizationDeviceToken = Math.round(message.deauthorizationDeviceToken));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDeauthorizeDeviceRequest>, I>>(
    base?: I,
  ): CMsgClientDeauthorizeDeviceRequest {
    return CMsgClientDeauthorizeDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDeauthorizeDeviceRequest>, I>>(
    object: I,
  ): CMsgClientDeauthorizeDeviceRequest {
    const message = createBaseCMsgClientDeauthorizeDeviceRequest();
    message.deauthorizationAccountId = object.deauthorizationAccountId ?? 0;
    message.deauthorizationDeviceToken = object.deauthorizationDeviceToken ?? 0;
    return message;
  },
};

function createBaseCMsgClientDeauthorizeDevice(): CMsgClientDeauthorizeDevice {
  return { eresult: 0, deauthorizationAccountId: 0 };
}

export const CMsgClientDeauthorizeDevice = {
  encode(message: CMsgClientDeauthorizeDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.deauthorizationAccountId !== 0) {
      writer.uint32(16).uint32(message.deauthorizationAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDeauthorizeDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDeauthorizeDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.deauthorizationAccountId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDeauthorizeDevice {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      deauthorizationAccountId: isSet(object.deauthorizationAccountId) ? Number(object.deauthorizationAccountId) : 0,
    };
  },

  toJSON(message: CMsgClientDeauthorizeDevice): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.deauthorizationAccountId !== undefined &&
      (obj.deauthorizationAccountId = Math.round(message.deauthorizationAccountId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDeauthorizeDevice>, I>>(base?: I): CMsgClientDeauthorizeDevice {
    return CMsgClientDeauthorizeDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDeauthorizeDevice>, I>>(object: I): CMsgClientDeauthorizeDevice {
    const message = createBaseCMsgClientDeauthorizeDevice();
    message.eresult = object.eresult ?? 0;
    message.deauthorizationAccountId = object.deauthorizationAccountId ?? 0;
    return message;
  },
};

function createBaseCMsgClientUseLocalDeviceAuthorizations(): CMsgClientUseLocalDeviceAuthorizations {
  return { authorizationAccountId: [], deviceTokens: [] };
}

export const CMsgClientUseLocalDeviceAuthorizations = {
  encode(message: CMsgClientUseLocalDeviceAuthorizations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.authorizationAccountId) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.deviceTokens) {
      CMsgClientUseLocalDeviceAuthorizations_DeviceToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUseLocalDeviceAuthorizations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUseLocalDeviceAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.authorizationAccountId.push(reader.uint32());
            }
          } else {
            message.authorizationAccountId.push(reader.uint32());
          }
          break;
        case 2:
          message.deviceTokens.push(CMsgClientUseLocalDeviceAuthorizations_DeviceToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUseLocalDeviceAuthorizations {
    return {
      authorizationAccountId: Array.isArray(object?.authorizationAccountId)
        ? object.authorizationAccountId.map((e: any) => Number(e))
        : [],
      deviceTokens: Array.isArray(object?.deviceTokens)
        ? object.deviceTokens.map((e: any) => CMsgClientUseLocalDeviceAuthorizations_DeviceToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUseLocalDeviceAuthorizations): unknown {
    const obj: any = {};
    if (message.authorizationAccountId) {
      obj.authorizationAccountId = message.authorizationAccountId.map((e) => Math.round(e));
    } else {
      obj.authorizationAccountId = [];
    }
    if (message.deviceTokens) {
      obj.deviceTokens = message.deviceTokens.map((e) =>
        e ? CMsgClientUseLocalDeviceAuthorizations_DeviceToken.toJSON(e) : undefined
      );
    } else {
      obj.deviceTokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUseLocalDeviceAuthorizations>, I>>(
    base?: I,
  ): CMsgClientUseLocalDeviceAuthorizations {
    return CMsgClientUseLocalDeviceAuthorizations.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUseLocalDeviceAuthorizations>, I>>(
    object: I,
  ): CMsgClientUseLocalDeviceAuthorizations {
    const message = createBaseCMsgClientUseLocalDeviceAuthorizations();
    message.authorizationAccountId = object.authorizationAccountId?.map((e) => e) || [];
    message.deviceTokens =
      object.deviceTokens?.map((e) => CMsgClientUseLocalDeviceAuthorizations_DeviceToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientUseLocalDeviceAuthorizations_DeviceToken(): CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
  return { ownerAccountId: 0, tokenId: 0 };
}

export const CMsgClientUseLocalDeviceAuthorizations_DeviceToken = {
  encode(
    message: CMsgClientUseLocalDeviceAuthorizations_DeviceToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ownerAccountId !== 0) {
      writer.uint32(8).uint32(message.ownerAccountId);
    }
    if (message.tokenId !== 0) {
      writer.uint32(16).uint64(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUseLocalDeviceAuthorizations_DeviceToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAccountId = reader.uint32();
          break;
        case 2:
          message.tokenId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
    return {
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      tokenId: isSet(object.tokenId) ? Number(object.tokenId) : 0,
    };
  },

  toJSON(message: CMsgClientUseLocalDeviceAuthorizations_DeviceToken): unknown {
    const obj: any = {};
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.tokenId !== undefined && (obj.tokenId = Math.round(message.tokenId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUseLocalDeviceAuthorizations_DeviceToken>, I>>(
    base?: I,
  ): CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
    return CMsgClientUseLocalDeviceAuthorizations_DeviceToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUseLocalDeviceAuthorizations_DeviceToken>, I>>(
    object: I,
  ): CMsgClientUseLocalDeviceAuthorizations_DeviceToken {
    const message = createBaseCMsgClientUseLocalDeviceAuthorizations_DeviceToken();
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.tokenId = object.tokenId ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetAuthorizedDevices(): CMsgClientGetAuthorizedDevices {
  return {};
}

export const CMsgClientGetAuthorizedDevices = {
  encode(_: CMsgClientGetAuthorizedDevices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetAuthorizedDevices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetAuthorizedDevices();
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

  fromJSON(_: any): CMsgClientGetAuthorizedDevices {
    return {};
  },

  toJSON(_: CMsgClientGetAuthorizedDevices): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevices>, I>>(base?: I): CMsgClientGetAuthorizedDevices {
    return CMsgClientGetAuthorizedDevices.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevices>, I>>(_: I): CMsgClientGetAuthorizedDevices {
    const message = createBaseCMsgClientGetAuthorizedDevices();
    return message;
  },
};

function createBaseCMsgClientGetAuthorizedDevicesResponse(): CMsgClientGetAuthorizedDevicesResponse {
  return { eresult: 0, authorizedDevice: [] };
}

export const CMsgClientGetAuthorizedDevicesResponse = {
  encode(message: CMsgClientGetAuthorizedDevicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.authorizedDevice) {
      CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetAuthorizedDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetAuthorizedDevicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.authorizedDevice.push(
            CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetAuthorizedDevicesResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      authorizedDevice: Array.isArray(object?.authorizedDevice)
        ? object.authorizedDevice.map((e: any) => CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientGetAuthorizedDevicesResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.authorizedDevice) {
      obj.authorizedDevice = message.authorizedDevice.map((e) =>
        e ? CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.toJSON(e) : undefined
      );
    } else {
      obj.authorizedDevice = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevicesResponse>, I>>(
    base?: I,
  ): CMsgClientGetAuthorizedDevicesResponse {
    return CMsgClientGetAuthorizedDevicesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevicesResponse>, I>>(
    object: I,
  ): CMsgClientGetAuthorizedDevicesResponse {
    const message = createBaseCMsgClientGetAuthorizedDevicesResponse();
    message.eresult = object.eresult ?? 0;
    message.authorizedDevice =
      object.authorizedDevice?.map((e) => CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice(): CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
  return { authDeviceToken: 0, deviceName: "", lastAccessTime: 0, borrowerId: 0, isPending: false, appPlayed: 0 };
}

export const CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice = {
  encode(
    message: CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authDeviceToken !== 0) {
      writer.uint32(8).uint64(message.authDeviceToken);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.lastAccessTime !== 0) {
      writer.uint32(24).uint32(message.lastAccessTime);
    }
    if (message.borrowerId !== 0) {
      writer.uint32(32).uint32(message.borrowerId);
    }
    if (message.isPending === true) {
      writer.uint32(40).bool(message.isPending);
    }
    if (message.appPlayed !== 0) {
      writer.uint32(48).uint32(message.appPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authDeviceToken = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.lastAccessTime = reader.uint32();
          break;
        case 4:
          message.borrowerId = reader.uint32();
          break;
        case 5:
          message.isPending = reader.bool();
          break;
        case 6:
          message.appPlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
    return {
      authDeviceToken: isSet(object.authDeviceToken) ? Number(object.authDeviceToken) : 0,
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      lastAccessTime: isSet(object.lastAccessTime) ? Number(object.lastAccessTime) : 0,
      borrowerId: isSet(object.borrowerId) ? Number(object.borrowerId) : 0,
      isPending: isSet(object.isPending) ? Boolean(object.isPending) : false,
      appPlayed: isSet(object.appPlayed) ? Number(object.appPlayed) : 0,
    };
  },

  toJSON(message: CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice): unknown {
    const obj: any = {};
    message.authDeviceToken !== undefined && (obj.authDeviceToken = Math.round(message.authDeviceToken));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.lastAccessTime !== undefined && (obj.lastAccessTime = Math.round(message.lastAccessTime));
    message.borrowerId !== undefined && (obj.borrowerId = Math.round(message.borrowerId));
    message.isPending !== undefined && (obj.isPending = message.isPending);
    message.appPlayed !== undefined && (obj.appPlayed = Math.round(message.appPlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice>, I>>(
    base?: I,
  ): CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
    return CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice>, I>>(
    object: I,
  ): CMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice {
    const message = createBaseCMsgClientGetAuthorizedDevicesResponse_AuthorizedDevice();
    message.authDeviceToken = object.authDeviceToken ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.lastAccessTime = object.lastAccessTime ?? 0;
    message.borrowerId = object.borrowerId ?? 0;
    message.isPending = object.isPending ?? false;
    message.appPlayed = object.appPlayed ?? 0;
    return message;
  },
};

function createBaseCMsgClientSharedLibraryLockStatus(): CMsgClientSharedLibraryLockStatus {
  return { lockedLibrary: [], ownLibraryLockedBy: 0 };
}

export const CMsgClientSharedLibraryLockStatus = {
  encode(message: CMsgClientSharedLibraryLockStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockedLibrary) {
      CMsgClientSharedLibraryLockStatus_LockedLibrary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.ownLibraryLockedBy !== 0) {
      writer.uint32(16).uint32(message.ownLibraryLockedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSharedLibraryLockStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSharedLibraryLockStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockedLibrary.push(CMsgClientSharedLibraryLockStatus_LockedLibrary.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ownLibraryLockedBy = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSharedLibraryLockStatus {
    return {
      lockedLibrary: Array.isArray(object?.lockedLibrary)
        ? object.lockedLibrary.map((e: any) => CMsgClientSharedLibraryLockStatus_LockedLibrary.fromJSON(e))
        : [],
      ownLibraryLockedBy: isSet(object.ownLibraryLockedBy) ? Number(object.ownLibraryLockedBy) : 0,
    };
  },

  toJSON(message: CMsgClientSharedLibraryLockStatus): unknown {
    const obj: any = {};
    if (message.lockedLibrary) {
      obj.lockedLibrary = message.lockedLibrary.map((e) =>
        e ? CMsgClientSharedLibraryLockStatus_LockedLibrary.toJSON(e) : undefined
      );
    } else {
      obj.lockedLibrary = [];
    }
    message.ownLibraryLockedBy !== undefined && (obj.ownLibraryLockedBy = Math.round(message.ownLibraryLockedBy));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSharedLibraryLockStatus>, I>>(
    base?: I,
  ): CMsgClientSharedLibraryLockStatus {
    return CMsgClientSharedLibraryLockStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSharedLibraryLockStatus>, I>>(
    object: I,
  ): CMsgClientSharedLibraryLockStatus {
    const message = createBaseCMsgClientSharedLibraryLockStatus();
    message.lockedLibrary =
      object.lockedLibrary?.map((e) => CMsgClientSharedLibraryLockStatus_LockedLibrary.fromPartial(e)) || [];
    message.ownLibraryLockedBy = object.ownLibraryLockedBy ?? 0;
    return message;
  },
};

function createBaseCMsgClientSharedLibraryLockStatus_LockedLibrary(): CMsgClientSharedLibraryLockStatus_LockedLibrary {
  return { ownerId: 0, lockedBy: 0 };
}

export const CMsgClientSharedLibraryLockStatus_LockedLibrary = {
  encode(
    message: CMsgClientSharedLibraryLockStatus_LockedLibrary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ownerId !== 0) {
      writer.uint32(8).uint32(message.ownerId);
    }
    if (message.lockedBy !== 0) {
      writer.uint32(16).uint32(message.lockedBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSharedLibraryLockStatus_LockedLibrary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSharedLibraryLockStatus_LockedLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerId = reader.uint32();
          break;
        case 2:
          message.lockedBy = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSharedLibraryLockStatus_LockedLibrary {
    return {
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
      lockedBy: isSet(object.lockedBy) ? Number(object.lockedBy) : 0,
    };
  },

  toJSON(message: CMsgClientSharedLibraryLockStatus_LockedLibrary): unknown {
    const obj: any = {};
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    message.lockedBy !== undefined && (obj.lockedBy = Math.round(message.lockedBy));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSharedLibraryLockStatus_LockedLibrary>, I>>(
    base?: I,
  ): CMsgClientSharedLibraryLockStatus_LockedLibrary {
    return CMsgClientSharedLibraryLockStatus_LockedLibrary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSharedLibraryLockStatus_LockedLibrary>, I>>(
    object: I,
  ): CMsgClientSharedLibraryLockStatus_LockedLibrary {
    const message = createBaseCMsgClientSharedLibraryLockStatus_LockedLibrary();
    message.ownerId = object.ownerId ?? 0;
    message.lockedBy = object.lockedBy ?? 0;
    return message;
  },
};

function createBaseCMsgClientSharedLibraryStopPlaying(): CMsgClientSharedLibraryStopPlaying {
  return { secondsLeft: 0, stopApps: [] };
}

export const CMsgClientSharedLibraryStopPlaying = {
  encode(message: CMsgClientSharedLibraryStopPlaying, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondsLeft !== 0) {
      writer.uint32(8).int32(message.secondsLeft);
    }
    for (const v of message.stopApps) {
      CMsgClientSharedLibraryStopPlaying_StopApp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSharedLibraryStopPlaying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSharedLibraryStopPlaying();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsLeft = reader.int32();
          break;
        case 2:
          message.stopApps.push(CMsgClientSharedLibraryStopPlaying_StopApp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSharedLibraryStopPlaying {
    return {
      secondsLeft: isSet(object.secondsLeft) ? Number(object.secondsLeft) : 0,
      stopApps: Array.isArray(object?.stopApps)
        ? object.stopApps.map((e: any) => CMsgClientSharedLibraryStopPlaying_StopApp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientSharedLibraryStopPlaying): unknown {
    const obj: any = {};
    message.secondsLeft !== undefined && (obj.secondsLeft = Math.round(message.secondsLeft));
    if (message.stopApps) {
      obj.stopApps = message.stopApps.map((e) => e ? CMsgClientSharedLibraryStopPlaying_StopApp.toJSON(e) : undefined);
    } else {
      obj.stopApps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSharedLibraryStopPlaying>, I>>(
    base?: I,
  ): CMsgClientSharedLibraryStopPlaying {
    return CMsgClientSharedLibraryStopPlaying.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSharedLibraryStopPlaying>, I>>(
    object: I,
  ): CMsgClientSharedLibraryStopPlaying {
    const message = createBaseCMsgClientSharedLibraryStopPlaying();
    message.secondsLeft = object.secondsLeft ?? 0;
    message.stopApps = object.stopApps?.map((e) => CMsgClientSharedLibraryStopPlaying_StopApp.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientSharedLibraryStopPlaying_StopApp(): CMsgClientSharedLibraryStopPlaying_StopApp {
  return { appId: 0, ownerId: 0 };
}

export const CMsgClientSharedLibraryStopPlaying_StopApp = {
  encode(message: CMsgClientSharedLibraryStopPlaying_StopApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.ownerId !== 0) {
      writer.uint32(16).uint32(message.ownerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSharedLibraryStopPlaying_StopApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSharedLibraryStopPlaying_StopApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.ownerId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSharedLibraryStopPlaying_StopApp {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
    };
  },

  toJSON(message: CMsgClientSharedLibraryStopPlaying_StopApp): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSharedLibraryStopPlaying_StopApp>, I>>(
    base?: I,
  ): CMsgClientSharedLibraryStopPlaying_StopApp {
    return CMsgClientSharedLibraryStopPlaying_StopApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSharedLibraryStopPlaying_StopApp>, I>>(
    object: I,
  ): CMsgClientSharedLibraryStopPlaying_StopApp {
    const message = createBaseCMsgClientSharedLibraryStopPlaying_StopApp();
    message.appId = object.appId ?? 0;
    message.ownerId = object.ownerId ?? 0;
    return message;
  },
};

function createBaseCMsgClientServiceCall(): CMsgClientServiceCall {
  return {
    sysidRouting: Buffer.alloc(0),
    callHandle: 0,
    moduleCrc: 0,
    moduleHash: Buffer.alloc(0),
    functionId: 0,
    cubOutputMax: 0,
    flags: 0,
    callparameter: Buffer.alloc(0),
    pingOnly: false,
    maxOutstandingCalls: 0,
    appId: 0,
  };
}

export const CMsgClientServiceCall = {
  encode(message: CMsgClientServiceCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sysidRouting.length !== 0) {
      writer.uint32(10).bytes(message.sysidRouting);
    }
    if (message.callHandle !== 0) {
      writer.uint32(16).uint32(message.callHandle);
    }
    if (message.moduleCrc !== 0) {
      writer.uint32(24).uint32(message.moduleCrc);
    }
    if (message.moduleHash.length !== 0) {
      writer.uint32(34).bytes(message.moduleHash);
    }
    if (message.functionId !== 0) {
      writer.uint32(40).uint32(message.functionId);
    }
    if (message.cubOutputMax !== 0) {
      writer.uint32(48).uint32(message.cubOutputMax);
    }
    if (message.flags !== 0) {
      writer.uint32(56).uint32(message.flags);
    }
    if (message.callparameter.length !== 0) {
      writer.uint32(66).bytes(message.callparameter);
    }
    if (message.pingOnly === true) {
      writer.uint32(72).bool(message.pingOnly);
    }
    if (message.maxOutstandingCalls !== 0) {
      writer.uint32(80).uint32(message.maxOutstandingCalls);
    }
    if (message.appId !== 0) {
      writer.uint32(88).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServiceCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServiceCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sysidRouting = reader.bytes() as Buffer;
          break;
        case 2:
          message.callHandle = reader.uint32();
          break;
        case 3:
          message.moduleCrc = reader.uint32();
          break;
        case 4:
          message.moduleHash = reader.bytes() as Buffer;
          break;
        case 5:
          message.functionId = reader.uint32();
          break;
        case 6:
          message.cubOutputMax = reader.uint32();
          break;
        case 7:
          message.flags = reader.uint32();
          break;
        case 8:
          message.callparameter = reader.bytes() as Buffer;
          break;
        case 9:
          message.pingOnly = reader.bool();
          break;
        case 10:
          message.maxOutstandingCalls = reader.uint32();
          break;
        case 11:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServiceCall {
    return {
      sysidRouting: isSet(object.sysidRouting) ? Buffer.from(bytesFromBase64(object.sysidRouting)) : Buffer.alloc(0),
      callHandle: isSet(object.callHandle) ? Number(object.callHandle) : 0,
      moduleCrc: isSet(object.moduleCrc) ? Number(object.moduleCrc) : 0,
      moduleHash: isSet(object.moduleHash) ? Buffer.from(bytesFromBase64(object.moduleHash)) : Buffer.alloc(0),
      functionId: isSet(object.functionId) ? Number(object.functionId) : 0,
      cubOutputMax: isSet(object.cubOutputMax) ? Number(object.cubOutputMax) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      callparameter: isSet(object.callparameter) ? Buffer.from(bytesFromBase64(object.callparameter)) : Buffer.alloc(0),
      pingOnly: isSet(object.pingOnly) ? Boolean(object.pingOnly) : false,
      maxOutstandingCalls: isSet(object.maxOutstandingCalls) ? Number(object.maxOutstandingCalls) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientServiceCall): unknown {
    const obj: any = {};
    message.sysidRouting !== undefined &&
      (obj.sysidRouting = base64FromBytes(message.sysidRouting !== undefined ? message.sysidRouting : Buffer.alloc(0)));
    message.callHandle !== undefined && (obj.callHandle = Math.round(message.callHandle));
    message.moduleCrc !== undefined && (obj.moduleCrc = Math.round(message.moduleCrc));
    message.moduleHash !== undefined &&
      (obj.moduleHash = base64FromBytes(message.moduleHash !== undefined ? message.moduleHash : Buffer.alloc(0)));
    message.functionId !== undefined && (obj.functionId = Math.round(message.functionId));
    message.cubOutputMax !== undefined && (obj.cubOutputMax = Math.round(message.cubOutputMax));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.callparameter !== undefined &&
      (obj.callparameter = base64FromBytes(
        message.callparameter !== undefined ? message.callparameter : Buffer.alloc(0),
      ));
    message.pingOnly !== undefined && (obj.pingOnly = message.pingOnly);
    message.maxOutstandingCalls !== undefined && (obj.maxOutstandingCalls = Math.round(message.maxOutstandingCalls));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServiceCall>, I>>(base?: I): CMsgClientServiceCall {
    return CMsgClientServiceCall.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServiceCall>, I>>(object: I): CMsgClientServiceCall {
    const message = createBaseCMsgClientServiceCall();
    message.sysidRouting = object.sysidRouting ?? Buffer.alloc(0);
    message.callHandle = object.callHandle ?? 0;
    message.moduleCrc = object.moduleCrc ?? 0;
    message.moduleHash = object.moduleHash ?? Buffer.alloc(0);
    message.functionId = object.functionId ?? 0;
    message.cubOutputMax = object.cubOutputMax ?? 0;
    message.flags = object.flags ?? 0;
    message.callparameter = object.callparameter ?? Buffer.alloc(0);
    message.pingOnly = object.pingOnly ?? false;
    message.maxOutstandingCalls = object.maxOutstandingCalls ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientServiceModule(): CMsgClientServiceModule {
  return { moduleCrc: 0, moduleHash: Buffer.alloc(0), moduleContent: Buffer.alloc(0) };
}

export const CMsgClientServiceModule = {
  encode(message: CMsgClientServiceModule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleCrc !== 0) {
      writer.uint32(8).uint32(message.moduleCrc);
    }
    if (message.moduleHash.length !== 0) {
      writer.uint32(18).bytes(message.moduleHash);
    }
    if (message.moduleContent.length !== 0) {
      writer.uint32(26).bytes(message.moduleContent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServiceModule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServiceModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleCrc = reader.uint32();
          break;
        case 2:
          message.moduleHash = reader.bytes() as Buffer;
          break;
        case 3:
          message.moduleContent = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServiceModule {
    return {
      moduleCrc: isSet(object.moduleCrc) ? Number(object.moduleCrc) : 0,
      moduleHash: isSet(object.moduleHash) ? Buffer.from(bytesFromBase64(object.moduleHash)) : Buffer.alloc(0),
      moduleContent: isSet(object.moduleContent) ? Buffer.from(bytesFromBase64(object.moduleContent)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientServiceModule): unknown {
    const obj: any = {};
    message.moduleCrc !== undefined && (obj.moduleCrc = Math.round(message.moduleCrc));
    message.moduleHash !== undefined &&
      (obj.moduleHash = base64FromBytes(message.moduleHash !== undefined ? message.moduleHash : Buffer.alloc(0)));
    message.moduleContent !== undefined &&
      (obj.moduleContent = base64FromBytes(
        message.moduleContent !== undefined ? message.moduleContent : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServiceModule>, I>>(base?: I): CMsgClientServiceModule {
    return CMsgClientServiceModule.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServiceModule>, I>>(object: I): CMsgClientServiceModule {
    const message = createBaseCMsgClientServiceModule();
    message.moduleCrc = object.moduleCrc ?? 0;
    message.moduleHash = object.moduleHash ?? Buffer.alloc(0);
    message.moduleContent = object.moduleContent ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientServiceCallResponse(): CMsgClientServiceCallResponse {
  return {
    sysidRouting: Buffer.alloc(0),
    callHandle: 0,
    moduleCrc: 0,
    moduleHash: Buffer.alloc(0),
    ecallresult: 0,
    resultContent: Buffer.alloc(0),
    osVersionInfo: Buffer.alloc(0),
    systemInfo: Buffer.alloc(0),
    loadAddress: 0,
    exceptionRecord: Buffer.alloc(0),
    portableOsVersionInfo: Buffer.alloc(0),
    portableSystemInfo: Buffer.alloc(0),
    wasConverted: false,
    internalResult: 0,
    currentCount: 0,
    lastCallHandle: 0,
    lastCallModuleCrc: 0,
    lastCallSysidRouting: Buffer.alloc(0),
    lastEcallresult: 0,
    lastCallissueDelta: 0,
    lastCallcompleteDelta: 0,
  };
}

export const CMsgClientServiceCallResponse = {
  encode(message: CMsgClientServiceCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sysidRouting.length !== 0) {
      writer.uint32(10).bytes(message.sysidRouting);
    }
    if (message.callHandle !== 0) {
      writer.uint32(16).uint32(message.callHandle);
    }
    if (message.moduleCrc !== 0) {
      writer.uint32(24).uint32(message.moduleCrc);
    }
    if (message.moduleHash.length !== 0) {
      writer.uint32(34).bytes(message.moduleHash);
    }
    if (message.ecallresult !== 0) {
      writer.uint32(40).uint32(message.ecallresult);
    }
    if (message.resultContent.length !== 0) {
      writer.uint32(50).bytes(message.resultContent);
    }
    if (message.osVersionInfo.length !== 0) {
      writer.uint32(58).bytes(message.osVersionInfo);
    }
    if (message.systemInfo.length !== 0) {
      writer.uint32(66).bytes(message.systemInfo);
    }
    if (message.loadAddress !== 0) {
      writer.uint32(73).fixed64(message.loadAddress);
    }
    if (message.exceptionRecord.length !== 0) {
      writer.uint32(82).bytes(message.exceptionRecord);
    }
    if (message.portableOsVersionInfo.length !== 0) {
      writer.uint32(90).bytes(message.portableOsVersionInfo);
    }
    if (message.portableSystemInfo.length !== 0) {
      writer.uint32(98).bytes(message.portableSystemInfo);
    }
    if (message.wasConverted === true) {
      writer.uint32(104).bool(message.wasConverted);
    }
    if (message.internalResult !== 0) {
      writer.uint32(112).uint32(message.internalResult);
    }
    if (message.currentCount !== 0) {
      writer.uint32(120).uint32(message.currentCount);
    }
    if (message.lastCallHandle !== 0) {
      writer.uint32(128).uint32(message.lastCallHandle);
    }
    if (message.lastCallModuleCrc !== 0) {
      writer.uint32(136).uint32(message.lastCallModuleCrc);
    }
    if (message.lastCallSysidRouting.length !== 0) {
      writer.uint32(146).bytes(message.lastCallSysidRouting);
    }
    if (message.lastEcallresult !== 0) {
      writer.uint32(152).uint32(message.lastEcallresult);
    }
    if (message.lastCallissueDelta !== 0) {
      writer.uint32(160).uint32(message.lastCallissueDelta);
    }
    if (message.lastCallcompleteDelta !== 0) {
      writer.uint32(168).uint32(message.lastCallcompleteDelta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServiceCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServiceCallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sysidRouting = reader.bytes() as Buffer;
          break;
        case 2:
          message.callHandle = reader.uint32();
          break;
        case 3:
          message.moduleCrc = reader.uint32();
          break;
        case 4:
          message.moduleHash = reader.bytes() as Buffer;
          break;
        case 5:
          message.ecallresult = reader.uint32();
          break;
        case 6:
          message.resultContent = reader.bytes() as Buffer;
          break;
        case 7:
          message.osVersionInfo = reader.bytes() as Buffer;
          break;
        case 8:
          message.systemInfo = reader.bytes() as Buffer;
          break;
        case 9:
          message.loadAddress = longToNumber(reader.fixed64() as Long);
          break;
        case 10:
          message.exceptionRecord = reader.bytes() as Buffer;
          break;
        case 11:
          message.portableOsVersionInfo = reader.bytes() as Buffer;
          break;
        case 12:
          message.portableSystemInfo = reader.bytes() as Buffer;
          break;
        case 13:
          message.wasConverted = reader.bool();
          break;
        case 14:
          message.internalResult = reader.uint32();
          break;
        case 15:
          message.currentCount = reader.uint32();
          break;
        case 16:
          message.lastCallHandle = reader.uint32();
          break;
        case 17:
          message.lastCallModuleCrc = reader.uint32();
          break;
        case 18:
          message.lastCallSysidRouting = reader.bytes() as Buffer;
          break;
        case 19:
          message.lastEcallresult = reader.uint32();
          break;
        case 20:
          message.lastCallissueDelta = reader.uint32();
          break;
        case 21:
          message.lastCallcompleteDelta = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServiceCallResponse {
    return {
      sysidRouting: isSet(object.sysidRouting) ? Buffer.from(bytesFromBase64(object.sysidRouting)) : Buffer.alloc(0),
      callHandle: isSet(object.callHandle) ? Number(object.callHandle) : 0,
      moduleCrc: isSet(object.moduleCrc) ? Number(object.moduleCrc) : 0,
      moduleHash: isSet(object.moduleHash) ? Buffer.from(bytesFromBase64(object.moduleHash)) : Buffer.alloc(0),
      ecallresult: isSet(object.ecallresult) ? Number(object.ecallresult) : 0,
      resultContent: isSet(object.resultContent) ? Buffer.from(bytesFromBase64(object.resultContent)) : Buffer.alloc(0),
      osVersionInfo: isSet(object.osVersionInfo) ? Buffer.from(bytesFromBase64(object.osVersionInfo)) : Buffer.alloc(0),
      systemInfo: isSet(object.systemInfo) ? Buffer.from(bytesFromBase64(object.systemInfo)) : Buffer.alloc(0),
      loadAddress: isSet(object.loadAddress) ? Number(object.loadAddress) : 0,
      exceptionRecord: isSet(object.exceptionRecord)
        ? Buffer.from(bytesFromBase64(object.exceptionRecord))
        : Buffer.alloc(0),
      portableOsVersionInfo: isSet(object.portableOsVersionInfo)
        ? Buffer.from(bytesFromBase64(object.portableOsVersionInfo))
        : Buffer.alloc(0),
      portableSystemInfo: isSet(object.portableSystemInfo)
        ? Buffer.from(bytesFromBase64(object.portableSystemInfo))
        : Buffer.alloc(0),
      wasConverted: isSet(object.wasConverted) ? Boolean(object.wasConverted) : false,
      internalResult: isSet(object.internalResult) ? Number(object.internalResult) : 0,
      currentCount: isSet(object.currentCount) ? Number(object.currentCount) : 0,
      lastCallHandle: isSet(object.lastCallHandle) ? Number(object.lastCallHandle) : 0,
      lastCallModuleCrc: isSet(object.lastCallModuleCrc) ? Number(object.lastCallModuleCrc) : 0,
      lastCallSysidRouting: isSet(object.lastCallSysidRouting)
        ? Buffer.from(bytesFromBase64(object.lastCallSysidRouting))
        : Buffer.alloc(0),
      lastEcallresult: isSet(object.lastEcallresult) ? Number(object.lastEcallresult) : 0,
      lastCallissueDelta: isSet(object.lastCallissueDelta) ? Number(object.lastCallissueDelta) : 0,
      lastCallcompleteDelta: isSet(object.lastCallcompleteDelta) ? Number(object.lastCallcompleteDelta) : 0,
    };
  },

  toJSON(message: CMsgClientServiceCallResponse): unknown {
    const obj: any = {};
    message.sysidRouting !== undefined &&
      (obj.sysidRouting = base64FromBytes(message.sysidRouting !== undefined ? message.sysidRouting : Buffer.alloc(0)));
    message.callHandle !== undefined && (obj.callHandle = Math.round(message.callHandle));
    message.moduleCrc !== undefined && (obj.moduleCrc = Math.round(message.moduleCrc));
    message.moduleHash !== undefined &&
      (obj.moduleHash = base64FromBytes(message.moduleHash !== undefined ? message.moduleHash : Buffer.alloc(0)));
    message.ecallresult !== undefined && (obj.ecallresult = Math.round(message.ecallresult));
    message.resultContent !== undefined &&
      (obj.resultContent = base64FromBytes(
        message.resultContent !== undefined ? message.resultContent : Buffer.alloc(0),
      ));
    message.osVersionInfo !== undefined &&
      (obj.osVersionInfo = base64FromBytes(
        message.osVersionInfo !== undefined ? message.osVersionInfo : Buffer.alloc(0),
      ));
    message.systemInfo !== undefined &&
      (obj.systemInfo = base64FromBytes(message.systemInfo !== undefined ? message.systemInfo : Buffer.alloc(0)));
    message.loadAddress !== undefined && (obj.loadAddress = Math.round(message.loadAddress));
    message.exceptionRecord !== undefined &&
      (obj.exceptionRecord = base64FromBytes(
        message.exceptionRecord !== undefined ? message.exceptionRecord : Buffer.alloc(0),
      ));
    message.portableOsVersionInfo !== undefined &&
      (obj.portableOsVersionInfo = base64FromBytes(
        message.portableOsVersionInfo !== undefined ? message.portableOsVersionInfo : Buffer.alloc(0),
      ));
    message.portableSystemInfo !== undefined &&
      (obj.portableSystemInfo = base64FromBytes(
        message.portableSystemInfo !== undefined ? message.portableSystemInfo : Buffer.alloc(0),
      ));
    message.wasConverted !== undefined && (obj.wasConverted = message.wasConverted);
    message.internalResult !== undefined && (obj.internalResult = Math.round(message.internalResult));
    message.currentCount !== undefined && (obj.currentCount = Math.round(message.currentCount));
    message.lastCallHandle !== undefined && (obj.lastCallHandle = Math.round(message.lastCallHandle));
    message.lastCallModuleCrc !== undefined && (obj.lastCallModuleCrc = Math.round(message.lastCallModuleCrc));
    message.lastCallSysidRouting !== undefined &&
      (obj.lastCallSysidRouting = base64FromBytes(
        message.lastCallSysidRouting !== undefined ? message.lastCallSysidRouting : Buffer.alloc(0),
      ));
    message.lastEcallresult !== undefined && (obj.lastEcallresult = Math.round(message.lastEcallresult));
    message.lastCallissueDelta !== undefined && (obj.lastCallissueDelta = Math.round(message.lastCallissueDelta));
    message.lastCallcompleteDelta !== undefined &&
      (obj.lastCallcompleteDelta = Math.round(message.lastCallcompleteDelta));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServiceCallResponse>, I>>(base?: I): CMsgClientServiceCallResponse {
    return CMsgClientServiceCallResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServiceCallResponse>, I>>(
    object: I,
  ): CMsgClientServiceCallResponse {
    const message = createBaseCMsgClientServiceCallResponse();
    message.sysidRouting = object.sysidRouting ?? Buffer.alloc(0);
    message.callHandle = object.callHandle ?? 0;
    message.moduleCrc = object.moduleCrc ?? 0;
    message.moduleHash = object.moduleHash ?? Buffer.alloc(0);
    message.ecallresult = object.ecallresult ?? 0;
    message.resultContent = object.resultContent ?? Buffer.alloc(0);
    message.osVersionInfo = object.osVersionInfo ?? Buffer.alloc(0);
    message.systemInfo = object.systemInfo ?? Buffer.alloc(0);
    message.loadAddress = object.loadAddress ?? 0;
    message.exceptionRecord = object.exceptionRecord ?? Buffer.alloc(0);
    message.portableOsVersionInfo = object.portableOsVersionInfo ?? Buffer.alloc(0);
    message.portableSystemInfo = object.portableSystemInfo ?? Buffer.alloc(0);
    message.wasConverted = object.wasConverted ?? false;
    message.internalResult = object.internalResult ?? 0;
    message.currentCount = object.currentCount ?? 0;
    message.lastCallHandle = object.lastCallHandle ?? 0;
    message.lastCallModuleCrc = object.lastCallModuleCrc ?? 0;
    message.lastCallSysidRouting = object.lastCallSysidRouting ?? Buffer.alloc(0);
    message.lastEcallresult = object.lastEcallresult ?? 0;
    message.lastCallissueDelta = object.lastCallissueDelta ?? 0;
    message.lastCallcompleteDelta = object.lastCallcompleteDelta ?? 0;
    return message;
  },
};

function createBaseCMsgAMUnlockH264(): CMsgAMUnlockH264 {
  return { appid: 0, platform: 0, reason: 0 };
}

export const CMsgAMUnlockH264 = {
  encode(message: CMsgAMUnlockH264, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.platform !== 0) {
      writer.uint32(16).int32(message.platform);
    }
    if (message.reason !== 0) {
      writer.uint32(24).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMUnlockH264 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMUnlockH264();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.platform = reader.int32();
          break;
        case 3:
          message.reason = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAMUnlockH264 {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      platform: isSet(object.platform) ? Number(object.platform) : 0,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
    };
  },

  toJSON(message: CMsgAMUnlockH264): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.platform !== undefined && (obj.platform = Math.round(message.platform));
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAMUnlockH264>, I>>(base?: I): CMsgAMUnlockH264 {
    return CMsgAMUnlockH264.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMUnlockH264>, I>>(object: I): CMsgAMUnlockH264 {
    const message = createBaseCMsgAMUnlockH264();
    message.appid = object.appid ?? 0;
    message.platform = object.platform ?? 0;
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseCMsgAMUnlockH264Response(): CMsgAMUnlockH264Response {
  return { eresult: 0, encryptionKey: Buffer.alloc(0) };
}

export const CMsgAMUnlockH264Response = {
  encode(message: CMsgAMUnlockH264Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.encryptionKey.length !== 0) {
      writer.uint32(18).bytes(message.encryptionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAMUnlockH264Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAMUnlockH264Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.encryptionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAMUnlockH264Response {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      encryptionKey: isSet(object.encryptionKey) ? Buffer.from(bytesFromBase64(object.encryptionKey)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgAMUnlockH264Response): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.encryptionKey !== undefined &&
      (obj.encryptionKey = base64FromBytes(
        message.encryptionKey !== undefined ? message.encryptionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAMUnlockH264Response>, I>>(base?: I): CMsgAMUnlockH264Response {
    return CMsgAMUnlockH264Response.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAMUnlockH264Response>, I>>(object: I): CMsgAMUnlockH264Response {
    const message = createBaseCMsgAMUnlockH264Response();
    message.eresult = object.eresult ?? 0;
    message.encryptionKey = object.encryptionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientPlayingSessionState(): CMsgClientPlayingSessionState {
  return { playingBlocked: false, playingApp: 0 };
}

export const CMsgClientPlayingSessionState = {
  encode(message: CMsgClientPlayingSessionState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playingBlocked === true) {
      writer.uint32(16).bool(message.playingBlocked);
    }
    if (message.playingApp !== 0) {
      writer.uint32(24).uint32(message.playingApp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPlayingSessionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPlayingSessionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.playingBlocked = reader.bool();
          break;
        case 3:
          message.playingApp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPlayingSessionState {
    return {
      playingBlocked: isSet(object.playingBlocked) ? Boolean(object.playingBlocked) : false,
      playingApp: isSet(object.playingApp) ? Number(object.playingApp) : 0,
    };
  },

  toJSON(message: CMsgClientPlayingSessionState): unknown {
    const obj: any = {};
    message.playingBlocked !== undefined && (obj.playingBlocked = message.playingBlocked);
    message.playingApp !== undefined && (obj.playingApp = Math.round(message.playingApp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPlayingSessionState>, I>>(base?: I): CMsgClientPlayingSessionState {
    return CMsgClientPlayingSessionState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPlayingSessionState>, I>>(
    object: I,
  ): CMsgClientPlayingSessionState {
    const message = createBaseCMsgClientPlayingSessionState();
    message.playingBlocked = object.playingBlocked ?? false;
    message.playingApp = object.playingApp ?? 0;
    return message;
  },
};

function createBaseCMsgClientKickPlayingSession(): CMsgClientKickPlayingSession {
  return { onlyStopGame: false };
}

export const CMsgClientKickPlayingSession = {
  encode(message: CMsgClientKickPlayingSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onlyStopGame === true) {
      writer.uint32(8).bool(message.onlyStopGame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientKickPlayingSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientKickPlayingSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onlyStopGame = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientKickPlayingSession {
    return { onlyStopGame: isSet(object.onlyStopGame) ? Boolean(object.onlyStopGame) : false };
  },

  toJSON(message: CMsgClientKickPlayingSession): unknown {
    const obj: any = {};
    message.onlyStopGame !== undefined && (obj.onlyStopGame = message.onlyStopGame);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientKickPlayingSession>, I>>(base?: I): CMsgClientKickPlayingSession {
    return CMsgClientKickPlayingSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientKickPlayingSession>, I>>(object: I): CMsgClientKickPlayingSession {
    const message = createBaseCMsgClientKickPlayingSession();
    message.onlyStopGame = object.onlyStopGame ?? false;
    return message;
  },
};

function createBaseCMsgClientVoiceCallPreAuthorize(): CMsgClientVoiceCallPreAuthorize {
  return { callerSteamid: 0, receiverSteamid: 0, callerId: 0, hangup: false };
}

export const CMsgClientVoiceCallPreAuthorize = {
  encode(message: CMsgClientVoiceCallPreAuthorize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callerSteamid !== 0) {
      writer.uint32(9).fixed64(message.callerSteamid);
    }
    if (message.receiverSteamid !== 0) {
      writer.uint32(17).fixed64(message.receiverSteamid);
    }
    if (message.callerId !== 0) {
      writer.uint32(24).int32(message.callerId);
    }
    if (message.hangup === true) {
      writer.uint32(32).bool(message.hangup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientVoiceCallPreAuthorize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientVoiceCallPreAuthorize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callerSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.receiverSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.callerId = reader.int32();
          break;
        case 4:
          message.hangup = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientVoiceCallPreAuthorize {
    return {
      callerSteamid: isSet(object.callerSteamid) ? Number(object.callerSteamid) : 0,
      receiverSteamid: isSet(object.receiverSteamid) ? Number(object.receiverSteamid) : 0,
      callerId: isSet(object.callerId) ? Number(object.callerId) : 0,
      hangup: isSet(object.hangup) ? Boolean(object.hangup) : false,
    };
  },

  toJSON(message: CMsgClientVoiceCallPreAuthorize): unknown {
    const obj: any = {};
    message.callerSteamid !== undefined && (obj.callerSteamid = Math.round(message.callerSteamid));
    message.receiverSteamid !== undefined && (obj.receiverSteamid = Math.round(message.receiverSteamid));
    message.callerId !== undefined && (obj.callerId = Math.round(message.callerId));
    message.hangup !== undefined && (obj.hangup = message.hangup);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientVoiceCallPreAuthorize>, I>>(base?: I): CMsgClientVoiceCallPreAuthorize {
    return CMsgClientVoiceCallPreAuthorize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientVoiceCallPreAuthorize>, I>>(
    object: I,
  ): CMsgClientVoiceCallPreAuthorize {
    const message = createBaseCMsgClientVoiceCallPreAuthorize();
    message.callerSteamid = object.callerSteamid ?? 0;
    message.receiverSteamid = object.receiverSteamid ?? 0;
    message.callerId = object.callerId ?? 0;
    message.hangup = object.hangup ?? false;
    return message;
  },
};

function createBaseCMsgClientVoiceCallPreAuthorizeResponse(): CMsgClientVoiceCallPreAuthorizeResponse {
  return { callerSteamid: 0, receiverSteamid: 0, eresult: 0, callerId: 0 };
}

export const CMsgClientVoiceCallPreAuthorizeResponse = {
  encode(message: CMsgClientVoiceCallPreAuthorizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.callerSteamid !== 0) {
      writer.uint32(9).fixed64(message.callerSteamid);
    }
    if (message.receiverSteamid !== 0) {
      writer.uint32(17).fixed64(message.receiverSteamid);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    if (message.callerId !== 0) {
      writer.uint32(32).int32(message.callerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientVoiceCallPreAuthorizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientVoiceCallPreAuthorizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callerSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.receiverSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        case 4:
          message.callerId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientVoiceCallPreAuthorizeResponse {
    return {
      callerSteamid: isSet(object.callerSteamid) ? Number(object.callerSteamid) : 0,
      receiverSteamid: isSet(object.receiverSteamid) ? Number(object.receiverSteamid) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      callerId: isSet(object.callerId) ? Number(object.callerId) : 0,
    };
  },

  toJSON(message: CMsgClientVoiceCallPreAuthorizeResponse): unknown {
    const obj: any = {};
    message.callerSteamid !== undefined && (obj.callerSteamid = Math.round(message.callerSteamid));
    message.receiverSteamid !== undefined && (obj.receiverSteamid = Math.round(message.receiverSteamid));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.callerId !== undefined && (obj.callerId = Math.round(message.callerId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientVoiceCallPreAuthorizeResponse>, I>>(
    base?: I,
  ): CMsgClientVoiceCallPreAuthorizeResponse {
    return CMsgClientVoiceCallPreAuthorizeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientVoiceCallPreAuthorizeResponse>, I>>(
    object: I,
  ): CMsgClientVoiceCallPreAuthorizeResponse {
    const message = createBaseCMsgClientVoiceCallPreAuthorizeResponse();
    message.callerSteamid = object.callerSteamid ?? 0;
    message.receiverSteamid = object.receiverSteamid ?? 0;
    message.eresult = object.eresult ?? 0;
    message.callerId = object.callerId ?? 0;
    return message;
  },
};

function createBaseCMsgBadgeCraftedNotification(): CMsgBadgeCraftedNotification {
  return { appid: 0, badgeLevel: 0 };
}

export const CMsgBadgeCraftedNotification = {
  encode(message: CMsgBadgeCraftedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.badgeLevel !== 0) {
      writer.uint32(16).uint32(message.badgeLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBadgeCraftedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBadgeCraftedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.badgeLevel = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBadgeCraftedNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      badgeLevel: isSet(object.badgeLevel) ? Number(object.badgeLevel) : 0,
    };
  },

  toJSON(message: CMsgBadgeCraftedNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.badgeLevel !== undefined && (obj.badgeLevel = Math.round(message.badgeLevel));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBadgeCraftedNotification>, I>>(base?: I): CMsgBadgeCraftedNotification {
    return CMsgBadgeCraftedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBadgeCraftedNotification>, I>>(object: I): CMsgBadgeCraftedNotification {
    const message = createBaseCMsgBadgeCraftedNotification();
    message.appid = object.appid ?? 0;
    message.badgeLevel = object.badgeLevel ?? 0;
    return message;
  },
};

function createBaseCMsgClientStartPeerContentServer(): CMsgClientStartPeerContentServer {
  return { steamid: 0, clientRemoteId: 0, appId: 0, currentBuildId: 0 };
}

export const CMsgClientStartPeerContentServer = {
  encode(message: CMsgClientStartPeerContentServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clientRemoteId !== 0) {
      writer.uint32(17).fixed64(message.clientRemoteId);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.currentBuildId !== 0) {
      writer.uint32(32).uint32(message.currentBuildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStartPeerContentServer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStartPeerContentServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.clientRemoteId = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.currentBuildId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStartPeerContentServer {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      clientRemoteId: isSet(object.clientRemoteId) ? Number(object.clientRemoteId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      currentBuildId: isSet(object.currentBuildId) ? Number(object.currentBuildId) : 0,
    };
  },

  toJSON(message: CMsgClientStartPeerContentServer): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.clientRemoteId !== undefined && (obj.clientRemoteId = Math.round(message.clientRemoteId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.currentBuildId !== undefined && (obj.currentBuildId = Math.round(message.currentBuildId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStartPeerContentServer>, I>>(
    base?: I,
  ): CMsgClientStartPeerContentServer {
    return CMsgClientStartPeerContentServer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStartPeerContentServer>, I>>(
    object: I,
  ): CMsgClientStartPeerContentServer {
    const message = createBaseCMsgClientStartPeerContentServer();
    message.steamid = object.steamid ?? 0;
    message.clientRemoteId = object.clientRemoteId ?? 0;
    message.appId = object.appId ?? 0;
    message.currentBuildId = object.currentBuildId ?? 0;
    return message;
  },
};

function createBaseCMsgClientStartPeerContentServerResponse(): CMsgClientStartPeerContentServerResponse {
  return { result: 0, serverPort: 0 };
}

export const CMsgClientStartPeerContentServerResponse = {
  encode(message: CMsgClientStartPeerContentServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.serverPort !== 0) {
      writer.uint32(16).uint32(message.serverPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStartPeerContentServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStartPeerContentServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.serverPort = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStartPeerContentServerResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0,
    };
  },

  toJSON(message: CMsgClientStartPeerContentServerResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStartPeerContentServerResponse>, I>>(
    base?: I,
  ): CMsgClientStartPeerContentServerResponse {
    return CMsgClientStartPeerContentServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStartPeerContentServerResponse>, I>>(
    object: I,
  ): CMsgClientStartPeerContentServerResponse {
    const message = createBaseCMsgClientStartPeerContentServerResponse();
    message.result = object.result ?? 0;
    message.serverPort = object.serverPort ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetPeerContentInfo(): CMsgClientGetPeerContentInfo {
  return { steamid: 0, clientRemoteId: 0 };
}

export const CMsgClientGetPeerContentInfo = {
  encode(message: CMsgClientGetPeerContentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clientRemoteId !== 0) {
      writer.uint32(17).fixed64(message.clientRemoteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetPeerContentInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetPeerContentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.clientRemoteId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetPeerContentInfo {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      clientRemoteId: isSet(object.clientRemoteId) ? Number(object.clientRemoteId) : 0,
    };
  },

  toJSON(message: CMsgClientGetPeerContentInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.clientRemoteId !== undefined && (obj.clientRemoteId = Math.round(message.clientRemoteId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetPeerContentInfo>, I>>(base?: I): CMsgClientGetPeerContentInfo {
    return CMsgClientGetPeerContentInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetPeerContentInfo>, I>>(object: I): CMsgClientGetPeerContentInfo {
    const message = createBaseCMsgClientGetPeerContentInfo();
    message.steamid = object.steamid ?? 0;
    message.clientRemoteId = object.clientRemoteId ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetPeerContentInfoResponse(): CMsgClientGetPeerContentInfoResponse {
  return { result: 0, apps: [] };
}

export const CMsgClientGetPeerContentInfoResponse = {
  encode(message: CMsgClientGetPeerContentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.apps) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetPeerContentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetPeerContentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.apps.push(reader.uint32());
            }
          } else {
            message.apps.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetPeerContentInfoResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientGetPeerContentInfoResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.apps) {
      obj.apps = message.apps.map((e) => Math.round(e));
    } else {
      obj.apps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetPeerContentInfoResponse>, I>>(
    base?: I,
  ): CMsgClientGetPeerContentInfoResponse {
    return CMsgClientGetPeerContentInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetPeerContentInfoResponse>, I>>(
    object: I,
  ): CMsgClientGetPeerContentInfoResponse {
    const message = createBaseCMsgClientGetPeerContentInfoResponse();
    message.result = object.result ?? 0;
    message.apps = object.apps?.map((e) => e) || [];
    return message;
  },
};

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
