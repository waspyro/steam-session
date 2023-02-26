/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EBroadcastWatchLocation {
  k_EBroadcastWatchLocation_Invalid = 0,
  k_EBroadcastWatchLocation_SteamTV_Tab = 1,
  k_EBroadcastWatchLocation_SteamTV_WatchParty = 2,
  k_EBroadcastWatchLocation_Chat_Tab = 3,
  k_EBroadcastWatchLocation_Chat_WatchParty = 4,
  k_EBroadcastWatchLocation_CommunityPage = 5,
  k_EBroadcastWatchLocation_StoreAppPage = 6,
  k_EBroadcastWatchLocation_InGame = 7,
  k_EBroadcastWatchLocation_BigPicture = 8,
  k_EBroadcastWatchLocation_SalesPage = 9,
  k_EBroadcastWatchLocation_CuratorPage = 10,
  k_EBroadcastWatchLocation_DeveloperPage = 11,
  k_EBroadcastWatchLocation_Chat_Friends = 12,
  k_EBroadcastWatchLocation_SteamTV_Web = 13,
  UNRECOGNIZED = -1,
}

export function eBroadcastWatchLocationFromJSON(object: any): EBroadcastWatchLocation {
  switch (object) {
    case 0:
    case "k_EBroadcastWatchLocation_Invalid":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_Invalid;
    case 1:
    case "k_EBroadcastWatchLocation_SteamTV_Tab":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_Tab;
    case 2:
    case "k_EBroadcastWatchLocation_SteamTV_WatchParty":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_WatchParty;
    case 3:
    case "k_EBroadcastWatchLocation_Chat_Tab":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_Tab;
    case 4:
    case "k_EBroadcastWatchLocation_Chat_WatchParty":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_WatchParty;
    case 5:
    case "k_EBroadcastWatchLocation_CommunityPage":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_CommunityPage;
    case 6:
    case "k_EBroadcastWatchLocation_StoreAppPage":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_StoreAppPage;
    case 7:
    case "k_EBroadcastWatchLocation_InGame":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_InGame;
    case 8:
    case "k_EBroadcastWatchLocation_BigPicture":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_BigPicture;
    case 9:
    case "k_EBroadcastWatchLocation_SalesPage":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_SalesPage;
    case 10:
    case "k_EBroadcastWatchLocation_CuratorPage":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_CuratorPage;
    case 11:
    case "k_EBroadcastWatchLocation_DeveloperPage":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_DeveloperPage;
    case 12:
    case "k_EBroadcastWatchLocation_Chat_Friends":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_Friends;
    case 13:
    case "k_EBroadcastWatchLocation_SteamTV_Web":
      return EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_Web;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBroadcastWatchLocation.UNRECOGNIZED;
  }
}

export function eBroadcastWatchLocationToJSON(object: EBroadcastWatchLocation): string {
  switch (object) {
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_Invalid:
      return "k_EBroadcastWatchLocation_Invalid";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_Tab:
      return "k_EBroadcastWatchLocation_SteamTV_Tab";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_WatchParty:
      return "k_EBroadcastWatchLocation_SteamTV_WatchParty";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_Tab:
      return "k_EBroadcastWatchLocation_Chat_Tab";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_WatchParty:
      return "k_EBroadcastWatchLocation_Chat_WatchParty";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_CommunityPage:
      return "k_EBroadcastWatchLocation_CommunityPage";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_StoreAppPage:
      return "k_EBroadcastWatchLocation_StoreAppPage";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_InGame:
      return "k_EBroadcastWatchLocation_InGame";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_BigPicture:
      return "k_EBroadcastWatchLocation_BigPicture";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_SalesPage:
      return "k_EBroadcastWatchLocation_SalesPage";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_CuratorPage:
      return "k_EBroadcastWatchLocation_CuratorPage";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_DeveloperPage:
      return "k_EBroadcastWatchLocation_DeveloperPage";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_Chat_Friends:
      return "k_EBroadcastWatchLocation_Chat_Friends";
    case EBroadcastWatchLocation.k_EBroadcastWatchLocation_SteamTV_Web:
      return "k_EBroadcastWatchLocation_SteamTV_Web";
    case EBroadcastWatchLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EBroadcastChatPermission {
  k_EBroadcastChatPermissionPublic = 0,
  k_EBroadcastChatPermissionOwnsApp = 1,
  UNRECOGNIZED = -1,
}

export function eBroadcastChatPermissionFromJSON(object: any): EBroadcastChatPermission {
  switch (object) {
    case 0:
    case "k_EBroadcastChatPermissionPublic":
      return EBroadcastChatPermission.k_EBroadcastChatPermissionPublic;
    case 1:
    case "k_EBroadcastChatPermissionOwnsApp":
      return EBroadcastChatPermission.k_EBroadcastChatPermissionOwnsApp;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBroadcastChatPermission.UNRECOGNIZED;
  }
}

export function eBroadcastChatPermissionToJSON(object: EBroadcastChatPermission): string {
  switch (object) {
    case EBroadcastChatPermission.k_EBroadcastChatPermissionPublic:
      return "k_EBroadcastChatPermissionPublic";
    case EBroadcastChatPermission.k_EBroadcastChatPermissionOwnsApp:
      return "k_EBroadcastChatPermissionOwnsApp";
    case EBroadcastChatPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CBroadcastBeginBroadcastSessionRequest {
  permission: number;
  gameid: string;
  clientInstanceId: string;
  title: string;
  cellid: number;
  rtmpToken: string;
  thumbnailUpload: boolean;
  clientBeta: string;
  sysid: number;
  allowWebrtc: boolean;
}

export interface CBroadcastBeginBroadcastSessionResponse {
  broadcastId: string;
  thumbnailUploadAddress: string;
  thumbnailUploadToken: string;
  thumbnailIntervalSeconds: number;
  heartbeatIntervalSeconds: number;
}

export interface CBroadcastEndBroadcastSessionRequest {
  broadcastId: string;
}

export interface CBroadcastEndBroadcastSessionResponse {
}

export interface CBroadcastStartBroadcastUploadRequest {
  broadcastId: string;
  cellid: number;
  asRtmp: boolean;
  delaySeconds: number;
  rtmpToken: string;
  uploadIpAddress: number;
  isReplay: boolean;
  sysid: number;
}

export interface CBroadcastStartBroadcastUploadResponse {
  uploadToken: string;
  uploadAddress: string;
  broadcastUploadId: string;
  enableReplay: boolean;
  httpAddress: string;
}

export interface CBroadcastNotifyBroadcastUploadStopNotification {
  broadcastUploadId: string;
  uploadResult: number;
}

export interface CBroadcastWatchBroadcastRequest {
  steamid: string;
  existingBroadcastId: string;
  viewerToken: string;
  clientCell: number;
  watchLocation: EBroadcastWatchLocation;
  isWebrtc: boolean;
}

export interface CBroadcastWatchBroadcastResponse {
  response: CBroadcastWatchBroadcastResponse_EWatchResponse;
  mpdUrl: string;
  broadcastId: string;
  gameid: string;
  title: string;
  numViewers: number;
  permission: number;
  isRtmp: boolean;
  secondsDelay: number;
  viewerToken: string;
  hlsM3u8MasterUrl: string;
  heartbeatInterval: number;
  thumbnailUrl: string;
  isWebrtc: boolean;
  webrtcSessionId: string;
  webrtcOfferSdp: string;
  webrtcTurnServer: string;
  isReplay: boolean;
  duration: number;
  cdnAuthUrlParameters: string;
}

export enum CBroadcastWatchBroadcastResponse_EWatchResponse {
  k_EWatchResponseReady = 1,
  k_EWatchResponseNotAvailable = 2,
  k_EWatchResponseWaitingForApproval = 3,
  k_EWatchResponseWaitingForStart = 4,
  k_EWatchResponseInvalidSession = 5,
  k_EWatchResponseTooManyBroadcasts = 6,
  k_EWatchResponseWaitingForReconnect = 7,
  k_EWatchResponseSystemNotSupported = 8,
  k_EWatchResponseUserRestricted = 9,
  k_EWatchResponseClientOutOfDate = 10,
  k_EWatchResponsePoorUploadQuality = 11,
  k_EWatchResponseMissingSubscription = 12,
  UNRECOGNIZED = -1,
}

export function cBroadcastWatchBroadcastResponse_EWatchResponseFromJSON(
  object: any,
): CBroadcastWatchBroadcastResponse_EWatchResponse {
  switch (object) {
    case 1:
    case "k_EWatchResponseReady":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseReady;
    case 2:
    case "k_EWatchResponseNotAvailable":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseNotAvailable;
    case 3:
    case "k_EWatchResponseWaitingForApproval":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForApproval;
    case 4:
    case "k_EWatchResponseWaitingForStart":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForStart;
    case 5:
    case "k_EWatchResponseInvalidSession":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseInvalidSession;
    case 6:
    case "k_EWatchResponseTooManyBroadcasts":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseTooManyBroadcasts;
    case 7:
    case "k_EWatchResponseWaitingForReconnect":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForReconnect;
    case 8:
    case "k_EWatchResponseSystemNotSupported":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseSystemNotSupported;
    case 9:
    case "k_EWatchResponseUserRestricted":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseUserRestricted;
    case 10:
    case "k_EWatchResponseClientOutOfDate":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseClientOutOfDate;
    case 11:
    case "k_EWatchResponsePoorUploadQuality":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponsePoorUploadQuality;
    case 12:
    case "k_EWatchResponseMissingSubscription":
      return CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseMissingSubscription;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CBroadcastWatchBroadcastResponse_EWatchResponse.UNRECOGNIZED;
  }
}

export function cBroadcastWatchBroadcastResponse_EWatchResponseToJSON(
  object: CBroadcastWatchBroadcastResponse_EWatchResponse,
): string {
  switch (object) {
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseReady:
      return "k_EWatchResponseReady";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseNotAvailable:
      return "k_EWatchResponseNotAvailable";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForApproval:
      return "k_EWatchResponseWaitingForApproval";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForStart:
      return "k_EWatchResponseWaitingForStart";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseInvalidSession:
      return "k_EWatchResponseInvalidSession";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseTooManyBroadcasts:
      return "k_EWatchResponseTooManyBroadcasts";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseWaitingForReconnect:
      return "k_EWatchResponseWaitingForReconnect";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseSystemNotSupported:
      return "k_EWatchResponseSystemNotSupported";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseUserRestricted:
      return "k_EWatchResponseUserRestricted";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseClientOutOfDate:
      return "k_EWatchResponseClientOutOfDate";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponsePoorUploadQuality:
      return "k_EWatchResponsePoorUploadQuality";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.k_EWatchResponseMissingSubscription:
      return "k_EWatchResponseMissingSubscription";
    case CBroadcastWatchBroadcastResponse_EWatchResponse.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CBroadcastHeartbeatBroadcastNotification {
  steamid: string;
  broadcastId: string;
  viewerToken: string;
  representation: number;
}

export interface CBroadcastStopWatchingBroadcastNotification {
  steamid: string;
  broadcastId: string;
  viewerToken: string;
}

export interface CBroadcastGetBroadcastStatusRequest {
  steamid: string;
  broadcastId: string;
}

export interface CBroadcastGetBroadcastStatusResponse {
  gameid: string;
  title: string;
  numViewers: number;
  permission: number;
  isRtmp: boolean;
  secondsDelay: number;
  isPublisher: boolean;
  thumbnailUrl: string;
  updateInterval: number;
  isUploading: boolean;
  duration: number;
  isReplay: boolean;
  isCapturingVod: boolean;
  isStoreWhitelisted: boolean;
}

export interface CBroadcastGetBroadcastThumbnailRequest {
  steamid: string;
  broadcastId: string;
}

export interface CBroadcastGetBroadcastThumbnailResponse {
  thumbnailUrl: string;
  updateInterval: number;
  numViewers: number;
  duration: number;
}

export interface CBroadcastInviteToBroadcastRequest {
  steamid: string;
  approvalResponse: boolean;
}

export interface CBroadcastInviteToBroadcastResponse {
  success: boolean;
}

export interface CBroadcastSendBroadcastStateToServerRequest {
  permission: number;
  gameid: string;
  title: string;
  gameDataConfig: string;
}

export interface CBroadcastSendBroadcastStateToServerResponse {
}

export interface CBroadcastNotifyBroadcastSessionHeartbeatNotification {
  broadcastId: string;
}

export interface CBroadcastGetBroadcastChatInfoRequest {
  steamid: string;
  broadcastId: string;
  clientIp: number;
  clientCell: number;
}

export interface CBroadcastGetBroadcastChatInfoResponse {
  chatId: string;
  viewUrlTemplate: string;
  flairGroupIds: number[];
}

export interface CBroadcastPostChatMessageRequest {
  chatId: string;
  message: string;
  instanceId: number;
  language: number;
  countryCode: string;
}

export interface CBroadcastPostChatMessageResponse {
  personaName: string;
  inGame: boolean;
  result: number;
  cooldownTimeSeconds: number;
}

export interface CBroadcastUpdateChatMessageFlairRequest {
  chatId: string;
  flair: string;
}

export interface CBroadcastUpdateChatMessageFlairResponse {
  result: number;
  chatId: string;
  flair: string;
}

export interface CBroadcastMuteBroadcastChatUserRequest {
  chatId: string;
  userSteamid: string;
  muted: boolean;
}

export interface CBroadcastMuteBroadcastChatUserResponse {
}

export interface CBroadcastRemoveUserChatTextRequest {
  chatId: string;
  userSteamid: string;
}

export interface CBroadcastRemoveUserChatTextResponse {
}

export interface CBroadcastGetBroadcastChatUserNamesRequest {
  chatId: string;
  userSteamid: string[];
}

export interface CBroadcastGetBroadcastChatUserNamesResponse {
  personaNames: CBroadcastGetBroadcastChatUserNamesResponse_PersonaName[];
}

export interface CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
  steamId: string;
  persona: string;
}

export interface CBroadcastStartBuildClipRequest {
  steamid: string;
  broadcastSessionId: string;
  firstSegment: number;
  numSegments: number;
  clipDescription: string;
}

export interface CBroadcastStartBuildClipResponse {
  broadcastClipId: string;
}

export interface CBroadcastGetBuildClipStatusRequest {
  broadcastClipId: string;
}

export interface CBroadcastGetBuildClipStatusResponse {
}

export interface CBroadcastSetClipDetailsRequest {
  broadcastClipId: string;
  startTime: number;
  endTime: number;
  videoDescription: string;
}

export interface CBroadcastSetClipDetailsResponse {
}

export interface CBroadcastGetClipDetailsRequest {
  broadcastClipId: string;
}

export interface CBroadcastGetClipDetailsResponse {
  broadcastClipId: string;
  videoId: string;
  channelId: string;
  appId: number;
  accountidBroadcaster: number;
  accountidClipmaker: number;
  videoDescription: string;
  startTime: number;
  lengthMilliseconds: number;
  thumbnailPath: string;
}

export interface CBroadcastSetRTMPInfoRequest {
  broadcastPermission: number;
  updateToken: boolean;
  broadcastDelay: number;
  appId: number;
  requiredAppId: number;
  broadcastChatPermission: EBroadcastChatPermission;
  broadcastBuffer: number;
  steamid: string;
  chatRateLimit: number;
  enableReplay: boolean;
  isPartnerChatOnly: boolean;
  wordbanList: string;
}

export interface CBroadcastSetRTMPInfoResponse {
}

export interface CBroadcastGetRTMPInfoRequest {
  ip: number;
  steamid: string;
}

export interface CBroadcastGetRTMPInfoResponse {
  broadcastPermission: number;
  rtmpHost: string;
  rtmpToken: string;
  broadcastDelay: number;
  appId: number;
  requiredAppId: number;
  broadcastChatPermission: EBroadcastChatPermission;
  broadcastBuffer: number;
  steamid: string;
  chatRateLimit: number;
  enableReplay: boolean;
  isPartnerChatOnly: boolean;
  wordbanList: string;
}

export interface CBroadcastWebRTCHaveTURNServerNotification {
  broadcastSessionId: string;
  turnServer: string;
}

export interface CBroadcastWebRTCStartResultRequest {
  webrtcSessionId: string;
  started: boolean;
  offer: string;
  resolutionX: number;
  resolutionY: number;
  fps: number;
}

export interface CBroadcastWebRTCStartResultResponse {
}

export interface CBroadcastWebRTCStoppedRequest {
  webrtcSessionId: string;
}

export interface CBroadcastWebRTCStoppedResponse {
}

export interface CBroadcastWebRTCSetAnswerRequest {
  broadcasterSteamid: string;
  webrtcSessionId: string;
  answer: string;
}

export interface CBroadcastWebRTCSetAnswerResponse {
}

export interface CBroadcastWebRTCLookupTURNServerRequest {
  cellid: number;
}

export interface CBroadcastWebRTCLookupTURNServerResponse {
  turnServer: string;
}

export interface CBroadcastWebRTCCandidate {
  sdpMid: string;
  sdpMlineIndex: number;
  candidate: string;
}

export interface CBroadcastWebRTCAddHostCandidateRequest {
  webrtcSessionId: string;
  candidate: CBroadcastWebRTCCandidate | undefined;
}

export interface CBroadcastWebRTCAddHostCandidateResponse {
}

export interface CBroadcastWebRTCAddViewerCandidateRequest {
  broadcasterSteamid: string;
  webrtcSessionId: string;
  candidate: CBroadcastWebRTCCandidate | undefined;
}

export interface CBroadcastWebRTCAddViewerCandidateResponse {
}

export interface CBroadcastWebRTCGetHostCandidatesRequest {
  broadcasterSteamid: string;
  webrtcSessionId: string;
  candidateGeneration: number;
}

export interface CBroadcastWebRTCGetHostCandidatesResponse {
  candidateGeneration: number;
  candidates: CBroadcastWebRTCCandidate[];
}

export interface CBroadcastGetBroadcastUploadStatsRequest {
  rowLimit: number;
  startTime: number;
  uploadId: string;
  steamid: string;
  sessionId: string;
}

export interface CBroadcastGetBroadcastUploadStatsResponse {
  uploadStats: CBroadcastGetBroadcastUploadStatsResponse_UploadStats[];
}

export interface CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
  uploadResult: number;
  timeStopped: number;
  secondsUploaded: number;
  maxViewers: number;
  resolutionX: number;
  resolutionY: number;
  avgBandwidth: number;
  totalBytes: string;
  appId: number;
  totalUniqueViewers: number;
  totalSecondsWatched: string;
  timeStarted: number;
  uploadId: string;
  localAddress: string;
  remoteAddress: string;
  framesPerSecond: number;
  numRepresentations: number;
  appName: string;
  isReplay: boolean;
  sessionId: string;
}

export interface CBroadcastGetBroadcastViewerStatsRequest {
  uploadId: string;
  steamid: string;
}

export interface CBroadcastGetBroadcastViewerStatsResponse {
  viewerStats: CBroadcastGetBroadcastViewerStatsResponse_ViewerStats[];
  countryStats: CBroadcastGetBroadcastViewerStatsResponse_CountryStats[];
}

export interface CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
  time: number;
  numViewers: number;
}

export interface CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
  countryCode: string;
  numViewers: number;
}

export interface CBroadcastBroadcastViewerStateNotification {
  steamid: string;
  state: CBroadcastBroadcastViewerStateNotification_EViewerState;
}

export enum CBroadcastBroadcastViewerStateNotification_EViewerState {
  k_EViewerNeedsApproval = 1,
  k_EViewerWatching = 2,
  k_EViewerLeft = 3,
  UNRECOGNIZED = -1,
}

export function cBroadcastBroadcastViewerStateNotification_EViewerStateFromJSON(
  object: any,
): CBroadcastBroadcastViewerStateNotification_EViewerState {
  switch (object) {
    case 1:
    case "k_EViewerNeedsApproval":
      return CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerNeedsApproval;
    case 2:
    case "k_EViewerWatching":
      return CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerWatching;
    case 3:
    case "k_EViewerLeft":
      return CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerLeft;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CBroadcastBroadcastViewerStateNotification_EViewerState.UNRECOGNIZED;
  }
}

export function cBroadcastBroadcastViewerStateNotification_EViewerStateToJSON(
  object: CBroadcastBroadcastViewerStateNotification_EViewerState,
): string {
  switch (object) {
    case CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerNeedsApproval:
      return "k_EViewerNeedsApproval";
    case CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerWatching:
      return "k_EViewerWatching";
    case CBroadcastBroadcastViewerStateNotification_EViewerState.k_EViewerLeft:
      return "k_EViewerLeft";
    case CBroadcastBroadcastViewerStateNotification_EViewerState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CBroadcastWaitingBroadcastViewerNotification {
  broadcastId: string;
}

export interface CBroadcastBroadcastUploadStartedNotification {
  broadcastId: string;
  uploadToken: string;
  uploadAddress: string;
  httpAddress: string;
  broadcastUploadId: string;
  heartbeatIntervalSeconds: number;
  isRtmp: boolean;
}

export interface CBroadcastStopBroadcastUploadNotification {
  broadcastId: string;
  broadcastRelayId: string;
  uploadResult: number;
  tooManyPoorUploads: boolean;
}

export interface CBroadcastSessionClosedNotification {
  broadcastId: string;
}

export interface CBroadcastViewerBroadcastInviteNotification {
  broadcasterSteamid: string;
}

export interface CBroadcastBroadcastStatusNotification {
  broadcastId: string;
  numViewers: number;
}

export interface CBroadcastBroadcastChannelLiveNotification {
  broadcastChannelId: string;
  broadcastChannelName: string;
  broadcastChannelAvatar: string;
}

export interface CBroadcastSendThumbnailToRelayNotification {
  thumbnailUploadToken: string;
  thumbnailBroadcastSessionId: string;
  thumbnailData: Buffer;
  thumbnailWidth: number;
  thumbnailHeight: number;
}

export interface CBroadcastWebRTCNeedTURNServerNotification {
  broadcastSessionId: string;
}

export interface CBroadcastWebRTCStartNotification {
  broadcastSessionId: string;
  webrtcSessionId: string;
  viewerSteamid: string;
  viewerToken: string;
}

export interface CBroadcastWebRTCSetAnswerNotification {
  broadcastSessionId: string;
  webrtcSessionId: string;
  answer: string;
}

export interface CBroadcastWebRTCAddViewerCandidateNotification {
  broadcastSessionId: string;
  webrtcSessionId: string;
  candidate: CBroadcastWebRTCCandidate | undefined;
}

function createBaseCBroadcastBeginBroadcastSessionRequest(): CBroadcastBeginBroadcastSessionRequest {
  return {
    permission: 0,
    gameid: "0",
    clientInstanceId: "0",
    title: "",
    cellid: 0,
    rtmpToken: "0",
    thumbnailUpload: false,
    clientBeta: "",
    sysid: 0,
    allowWebrtc: false,
  };
}

export const CBroadcastBeginBroadcastSessionRequest = {
  encode(message: CBroadcastBeginBroadcastSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.gameid !== "0") {
      writer.uint32(16).uint64(message.gameid);
    }
    if (message.clientInstanceId !== "0") {
      writer.uint32(24).uint64(message.clientInstanceId);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.cellid !== 0) {
      writer.uint32(40).uint32(message.cellid);
    }
    if (message.rtmpToken !== "0") {
      writer.uint32(48).uint64(message.rtmpToken);
    }
    if (message.thumbnailUpload === true) {
      writer.uint32(56).bool(message.thumbnailUpload);
    }
    if (message.clientBeta !== "") {
      writer.uint32(66).string(message.clientBeta);
    }
    if (message.sysid !== 0) {
      writer.uint32(72).uint32(message.sysid);
    }
    if (message.allowWebrtc === true) {
      writer.uint32(80).bool(message.allowWebrtc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBeginBroadcastSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBeginBroadcastSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 2:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.clientInstanceId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.cellid = reader.uint32();
          break;
        case 6:
          message.rtmpToken = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.thumbnailUpload = reader.bool();
          break;
        case 8:
          message.clientBeta = reader.string();
          break;
        case 9:
          message.sysid = reader.uint32();
          break;
        case 10:
          message.allowWebrtc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBeginBroadcastSessionRequest {
    return {
      permission: isSet(object.permission) ? Number(object.permission) : 0,
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      clientInstanceId: isSet(object.clientInstanceId) ? String(object.clientInstanceId) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      rtmpToken: isSet(object.rtmpToken) ? String(object.rtmpToken) : "0",
      thumbnailUpload: isSet(object.thumbnailUpload) ? Boolean(object.thumbnailUpload) : false,
      clientBeta: isSet(object.clientBeta) ? String(object.clientBeta) : "",
      sysid: isSet(object.sysid) ? Number(object.sysid) : 0,
      allowWebrtc: isSet(object.allowWebrtc) ? Boolean(object.allowWebrtc) : false,
    };
  },

  toJSON(message: CBroadcastBeginBroadcastSessionRequest): unknown {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = Math.round(message.permission));
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.clientInstanceId !== undefined && (obj.clientInstanceId = message.clientInstanceId);
    message.title !== undefined && (obj.title = message.title);
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.rtmpToken !== undefined && (obj.rtmpToken = message.rtmpToken);
    message.thumbnailUpload !== undefined && (obj.thumbnailUpload = message.thumbnailUpload);
    message.clientBeta !== undefined && (obj.clientBeta = message.clientBeta);
    message.sysid !== undefined && (obj.sysid = Math.round(message.sysid));
    message.allowWebrtc !== undefined && (obj.allowWebrtc = message.allowWebrtc);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBeginBroadcastSessionRequest>, I>>(
    base?: I,
  ): CBroadcastBeginBroadcastSessionRequest {
    return CBroadcastBeginBroadcastSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBeginBroadcastSessionRequest>, I>>(
    object: I,
  ): CBroadcastBeginBroadcastSessionRequest {
    const message = createBaseCBroadcastBeginBroadcastSessionRequest();
    message.permission = object.permission ?? 0;
    message.gameid = object.gameid ?? "0";
    message.clientInstanceId = object.clientInstanceId ?? "0";
    message.title = object.title ?? "";
    message.cellid = object.cellid ?? 0;
    message.rtmpToken = object.rtmpToken ?? "0";
    message.thumbnailUpload = object.thumbnailUpload ?? false;
    message.clientBeta = object.clientBeta ?? "";
    message.sysid = object.sysid ?? 0;
    message.allowWebrtc = object.allowWebrtc ?? false;
    return message;
  },
};

function createBaseCBroadcastBeginBroadcastSessionResponse(): CBroadcastBeginBroadcastSessionResponse {
  return {
    broadcastId: "0",
    thumbnailUploadAddress: "",
    thumbnailUploadToken: "",
    thumbnailIntervalSeconds: 0,
    heartbeatIntervalSeconds: 0,
  };
}

export const CBroadcastBeginBroadcastSessionResponse = {
  encode(message: CBroadcastBeginBroadcastSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    if (message.thumbnailUploadAddress !== "") {
      writer.uint32(18).string(message.thumbnailUploadAddress);
    }
    if (message.thumbnailUploadToken !== "") {
      writer.uint32(26).string(message.thumbnailUploadToken);
    }
    if (message.thumbnailIntervalSeconds !== 0) {
      writer.uint32(32).uint32(message.thumbnailIntervalSeconds);
    }
    if (message.heartbeatIntervalSeconds !== 0) {
      writer.uint32(40).uint32(message.heartbeatIntervalSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBeginBroadcastSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBeginBroadcastSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.thumbnailUploadAddress = reader.string();
          break;
        case 3:
          message.thumbnailUploadToken = reader.string();
          break;
        case 4:
          message.thumbnailIntervalSeconds = reader.uint32();
          break;
        case 5:
          message.heartbeatIntervalSeconds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBeginBroadcastSessionResponse {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      thumbnailUploadAddress: isSet(object.thumbnailUploadAddress) ? String(object.thumbnailUploadAddress) : "",
      thumbnailUploadToken: isSet(object.thumbnailUploadToken) ? String(object.thumbnailUploadToken) : "",
      thumbnailIntervalSeconds: isSet(object.thumbnailIntervalSeconds) ? Number(object.thumbnailIntervalSeconds) : 0,
      heartbeatIntervalSeconds: isSet(object.heartbeatIntervalSeconds) ? Number(object.heartbeatIntervalSeconds) : 0,
    };
  },

  toJSON(message: CBroadcastBeginBroadcastSessionResponse): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.thumbnailUploadAddress !== undefined && (obj.thumbnailUploadAddress = message.thumbnailUploadAddress);
    message.thumbnailUploadToken !== undefined && (obj.thumbnailUploadToken = message.thumbnailUploadToken);
    message.thumbnailIntervalSeconds !== undefined &&
      (obj.thumbnailIntervalSeconds = Math.round(message.thumbnailIntervalSeconds));
    message.heartbeatIntervalSeconds !== undefined &&
      (obj.heartbeatIntervalSeconds = Math.round(message.heartbeatIntervalSeconds));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBeginBroadcastSessionResponse>, I>>(
    base?: I,
  ): CBroadcastBeginBroadcastSessionResponse {
    return CBroadcastBeginBroadcastSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBeginBroadcastSessionResponse>, I>>(
    object: I,
  ): CBroadcastBeginBroadcastSessionResponse {
    const message = createBaseCBroadcastBeginBroadcastSessionResponse();
    message.broadcastId = object.broadcastId ?? "0";
    message.thumbnailUploadAddress = object.thumbnailUploadAddress ?? "";
    message.thumbnailUploadToken = object.thumbnailUploadToken ?? "";
    message.thumbnailIntervalSeconds = object.thumbnailIntervalSeconds ?? 0;
    message.heartbeatIntervalSeconds = object.heartbeatIntervalSeconds ?? 0;
    return message;
  },
};

function createBaseCBroadcastEndBroadcastSessionRequest(): CBroadcastEndBroadcastSessionRequest {
  return { broadcastId: "0" };
}

export const CBroadcastEndBroadcastSessionRequest = {
  encode(message: CBroadcastEndBroadcastSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastEndBroadcastSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastEndBroadcastSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastEndBroadcastSessionRequest {
    return { broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0" };
  },

  toJSON(message: CBroadcastEndBroadcastSessionRequest): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastEndBroadcastSessionRequest>, I>>(
    base?: I,
  ): CBroadcastEndBroadcastSessionRequest {
    return CBroadcastEndBroadcastSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastEndBroadcastSessionRequest>, I>>(
    object: I,
  ): CBroadcastEndBroadcastSessionRequest {
    const message = createBaseCBroadcastEndBroadcastSessionRequest();
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastEndBroadcastSessionResponse(): CBroadcastEndBroadcastSessionResponse {
  return {};
}

export const CBroadcastEndBroadcastSessionResponse = {
  encode(_: CBroadcastEndBroadcastSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastEndBroadcastSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastEndBroadcastSessionResponse();
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

  fromJSON(_: any): CBroadcastEndBroadcastSessionResponse {
    return {};
  },

  toJSON(_: CBroadcastEndBroadcastSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastEndBroadcastSessionResponse>, I>>(
    base?: I,
  ): CBroadcastEndBroadcastSessionResponse {
    return CBroadcastEndBroadcastSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastEndBroadcastSessionResponse>, I>>(
    _: I,
  ): CBroadcastEndBroadcastSessionResponse {
    const message = createBaseCBroadcastEndBroadcastSessionResponse();
    return message;
  },
};

function createBaseCBroadcastStartBroadcastUploadRequest(): CBroadcastStartBroadcastUploadRequest {
  return {
    broadcastId: "0",
    cellid: 0,
    asRtmp: false,
    delaySeconds: 0,
    rtmpToken: "0",
    uploadIpAddress: 0,
    isReplay: false,
    sysid: 0,
  };
}

export const CBroadcastStartBroadcastUploadRequest = {
  encode(message: CBroadcastStartBroadcastUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    if (message.cellid !== 0) {
      writer.uint32(16).uint32(message.cellid);
    }
    if (message.asRtmp === true) {
      writer.uint32(24).bool(message.asRtmp);
    }
    if (message.delaySeconds !== 0) {
      writer.uint32(32).uint32(message.delaySeconds);
    }
    if (message.rtmpToken !== "0") {
      writer.uint32(40).uint64(message.rtmpToken);
    }
    if (message.uploadIpAddress !== 0) {
      writer.uint32(48).uint32(message.uploadIpAddress);
    }
    if (message.isReplay === true) {
      writer.uint32(56).bool(message.isReplay);
    }
    if (message.sysid !== 0) {
      writer.uint32(64).uint32(message.sysid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStartBroadcastUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStartBroadcastUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.cellid = reader.uint32();
          break;
        case 3:
          message.asRtmp = reader.bool();
          break;
        case 4:
          message.delaySeconds = reader.uint32();
          break;
        case 5:
          message.rtmpToken = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.uploadIpAddress = reader.uint32();
          break;
        case 7:
          message.isReplay = reader.bool();
          break;
        case 8:
          message.sysid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStartBroadcastUploadRequest {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      asRtmp: isSet(object.asRtmp) ? Boolean(object.asRtmp) : false,
      delaySeconds: isSet(object.delaySeconds) ? Number(object.delaySeconds) : 0,
      rtmpToken: isSet(object.rtmpToken) ? String(object.rtmpToken) : "0",
      uploadIpAddress: isSet(object.uploadIpAddress) ? Number(object.uploadIpAddress) : 0,
      isReplay: isSet(object.isReplay) ? Boolean(object.isReplay) : false,
      sysid: isSet(object.sysid) ? Number(object.sysid) : 0,
    };
  },

  toJSON(message: CBroadcastStartBroadcastUploadRequest): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.asRtmp !== undefined && (obj.asRtmp = message.asRtmp);
    message.delaySeconds !== undefined && (obj.delaySeconds = Math.round(message.delaySeconds));
    message.rtmpToken !== undefined && (obj.rtmpToken = message.rtmpToken);
    message.uploadIpAddress !== undefined && (obj.uploadIpAddress = Math.round(message.uploadIpAddress));
    message.isReplay !== undefined && (obj.isReplay = message.isReplay);
    message.sysid !== undefined && (obj.sysid = Math.round(message.sysid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStartBroadcastUploadRequest>, I>>(
    base?: I,
  ): CBroadcastStartBroadcastUploadRequest {
    return CBroadcastStartBroadcastUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStartBroadcastUploadRequest>, I>>(
    object: I,
  ): CBroadcastStartBroadcastUploadRequest {
    const message = createBaseCBroadcastStartBroadcastUploadRequest();
    message.broadcastId = object.broadcastId ?? "0";
    message.cellid = object.cellid ?? 0;
    message.asRtmp = object.asRtmp ?? false;
    message.delaySeconds = object.delaySeconds ?? 0;
    message.rtmpToken = object.rtmpToken ?? "0";
    message.uploadIpAddress = object.uploadIpAddress ?? 0;
    message.isReplay = object.isReplay ?? false;
    message.sysid = object.sysid ?? 0;
    return message;
  },
};

function createBaseCBroadcastStartBroadcastUploadResponse(): CBroadcastStartBroadcastUploadResponse {
  return { uploadToken: "", uploadAddress: "", broadcastUploadId: "0", enableReplay: false, httpAddress: "" };
}

export const CBroadcastStartBroadcastUploadResponse = {
  encode(message: CBroadcastStartBroadcastUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "") {
      writer.uint32(10).string(message.uploadToken);
    }
    if (message.uploadAddress !== "") {
      writer.uint32(18).string(message.uploadAddress);
    }
    if (message.broadcastUploadId !== "0") {
      writer.uint32(25).fixed64(message.broadcastUploadId);
    }
    if (message.enableReplay === true) {
      writer.uint32(48).bool(message.enableReplay);
    }
    if (message.httpAddress !== "") {
      writer.uint32(58).string(message.httpAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStartBroadcastUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStartBroadcastUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = reader.string();
          break;
        case 2:
          message.uploadAddress = reader.string();
          break;
        case 3:
          message.broadcastUploadId = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.enableReplay = reader.bool();
          break;
        case 7:
          message.httpAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStartBroadcastUploadResponse {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "",
      uploadAddress: isSet(object.uploadAddress) ? String(object.uploadAddress) : "",
      broadcastUploadId: isSet(object.broadcastUploadId) ? String(object.broadcastUploadId) : "0",
      enableReplay: isSet(object.enableReplay) ? Boolean(object.enableReplay) : false,
      httpAddress: isSet(object.httpAddress) ? String(object.httpAddress) : "",
    };
  },

  toJSON(message: CBroadcastStartBroadcastUploadResponse): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.uploadAddress !== undefined && (obj.uploadAddress = message.uploadAddress);
    message.broadcastUploadId !== undefined && (obj.broadcastUploadId = message.broadcastUploadId);
    message.enableReplay !== undefined && (obj.enableReplay = message.enableReplay);
    message.httpAddress !== undefined && (obj.httpAddress = message.httpAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStartBroadcastUploadResponse>, I>>(
    base?: I,
  ): CBroadcastStartBroadcastUploadResponse {
    return CBroadcastStartBroadcastUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStartBroadcastUploadResponse>, I>>(
    object: I,
  ): CBroadcastStartBroadcastUploadResponse {
    const message = createBaseCBroadcastStartBroadcastUploadResponse();
    message.uploadToken = object.uploadToken ?? "";
    message.uploadAddress = object.uploadAddress ?? "";
    message.broadcastUploadId = object.broadcastUploadId ?? "0";
    message.enableReplay = object.enableReplay ?? false;
    message.httpAddress = object.httpAddress ?? "";
    return message;
  },
};

function createBaseCBroadcastNotifyBroadcastUploadStopNotification(): CBroadcastNotifyBroadcastUploadStopNotification {
  return { broadcastUploadId: "0", uploadResult: 0 };
}

export const CBroadcastNotifyBroadcastUploadStopNotification = {
  encode(
    message: CBroadcastNotifyBroadcastUploadStopNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.broadcastUploadId !== "0") {
      writer.uint32(9).fixed64(message.broadcastUploadId);
    }
    if (message.uploadResult !== 0) {
      writer.uint32(16).uint32(message.uploadResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastNotifyBroadcastUploadStopNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastNotifyBroadcastUploadStopNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastUploadId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.uploadResult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastNotifyBroadcastUploadStopNotification {
    return {
      broadcastUploadId: isSet(object.broadcastUploadId) ? String(object.broadcastUploadId) : "0",
      uploadResult: isSet(object.uploadResult) ? Number(object.uploadResult) : 0,
    };
  },

  toJSON(message: CBroadcastNotifyBroadcastUploadStopNotification): unknown {
    const obj: any = {};
    message.broadcastUploadId !== undefined && (obj.broadcastUploadId = message.broadcastUploadId);
    message.uploadResult !== undefined && (obj.uploadResult = Math.round(message.uploadResult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastNotifyBroadcastUploadStopNotification>, I>>(
    base?: I,
  ): CBroadcastNotifyBroadcastUploadStopNotification {
    return CBroadcastNotifyBroadcastUploadStopNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastNotifyBroadcastUploadStopNotification>, I>>(
    object: I,
  ): CBroadcastNotifyBroadcastUploadStopNotification {
    const message = createBaseCBroadcastNotifyBroadcastUploadStopNotification();
    message.broadcastUploadId = object.broadcastUploadId ?? "0";
    message.uploadResult = object.uploadResult ?? 0;
    return message;
  },
};

function createBaseCBroadcastWatchBroadcastRequest(): CBroadcastWatchBroadcastRequest {
  return { steamid: "0", existingBroadcastId: "0", viewerToken: "0", clientCell: 0, watchLocation: 0, isWebrtc: false };
}

export const CBroadcastWatchBroadcastRequest = {
  encode(message: CBroadcastWatchBroadcastRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.existingBroadcastId !== "0") {
      writer.uint32(17).fixed64(message.existingBroadcastId);
    }
    if (message.viewerToken !== "0") {
      writer.uint32(25).fixed64(message.viewerToken);
    }
    if (message.clientCell !== 0) {
      writer.uint32(40).uint32(message.clientCell);
    }
    if (message.watchLocation !== 0) {
      writer.uint32(48).int32(message.watchLocation);
    }
    if (message.isWebrtc === true) {
      writer.uint32(56).bool(message.isWebrtc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWatchBroadcastRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWatchBroadcastRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.existingBroadcastId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.viewerToken = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.clientCell = reader.uint32();
          break;
        case 6:
          message.watchLocation = reader.int32() as any;
          break;
        case 7:
          message.isWebrtc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWatchBroadcastRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      existingBroadcastId: isSet(object.existingBroadcastId) ? String(object.existingBroadcastId) : "0",
      viewerToken: isSet(object.viewerToken) ? String(object.viewerToken) : "0",
      clientCell: isSet(object.clientCell) ? Number(object.clientCell) : 0,
      watchLocation: isSet(object.watchLocation) ? eBroadcastWatchLocationFromJSON(object.watchLocation) : 0,
      isWebrtc: isSet(object.isWebrtc) ? Boolean(object.isWebrtc) : false,
    };
  },

  toJSON(message: CBroadcastWatchBroadcastRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.existingBroadcastId !== undefined && (obj.existingBroadcastId = message.existingBroadcastId);
    message.viewerToken !== undefined && (obj.viewerToken = message.viewerToken);
    message.clientCell !== undefined && (obj.clientCell = Math.round(message.clientCell));
    message.watchLocation !== undefined && (obj.watchLocation = eBroadcastWatchLocationToJSON(message.watchLocation));
    message.isWebrtc !== undefined && (obj.isWebrtc = message.isWebrtc);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWatchBroadcastRequest>, I>>(base?: I): CBroadcastWatchBroadcastRequest {
    return CBroadcastWatchBroadcastRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWatchBroadcastRequest>, I>>(
    object: I,
  ): CBroadcastWatchBroadcastRequest {
    const message = createBaseCBroadcastWatchBroadcastRequest();
    message.steamid = object.steamid ?? "0";
    message.existingBroadcastId = object.existingBroadcastId ?? "0";
    message.viewerToken = object.viewerToken ?? "0";
    message.clientCell = object.clientCell ?? 0;
    message.watchLocation = object.watchLocation ?? 0;
    message.isWebrtc = object.isWebrtc ?? false;
    return message;
  },
};

function createBaseCBroadcastWatchBroadcastResponse(): CBroadcastWatchBroadcastResponse {
  return {
    response: 1,
    mpdUrl: "",
    broadcastId: "0",
    gameid: "0",
    title: "",
    numViewers: 0,
    permission: 0,
    isRtmp: false,
    secondsDelay: 0,
    viewerToken: "0",
    hlsM3u8MasterUrl: "",
    heartbeatInterval: 0,
    thumbnailUrl: "",
    isWebrtc: false,
    webrtcSessionId: "0",
    webrtcOfferSdp: "",
    webrtcTurnServer: "",
    isReplay: false,
    duration: 0,
    cdnAuthUrlParameters: "",
  };
}

export const CBroadcastWatchBroadcastResponse = {
  encode(message: CBroadcastWatchBroadcastResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 1) {
      writer.uint32(8).int32(message.response);
    }
    if (message.mpdUrl !== "") {
      writer.uint32(18).string(message.mpdUrl);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(25).fixed64(message.broadcastId);
    }
    if (message.gameid !== "0") {
      writer.uint32(32).uint64(message.gameid);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.numViewers !== 0) {
      writer.uint32(48).uint32(message.numViewers);
    }
    if (message.permission !== 0) {
      writer.uint32(56).int32(message.permission);
    }
    if (message.isRtmp === true) {
      writer.uint32(64).bool(message.isRtmp);
    }
    if (message.secondsDelay !== 0) {
      writer.uint32(72).int32(message.secondsDelay);
    }
    if (message.viewerToken !== "0") {
      writer.uint32(81).fixed64(message.viewerToken);
    }
    if (message.hlsM3u8MasterUrl !== "") {
      writer.uint32(90).string(message.hlsM3u8MasterUrl);
    }
    if (message.heartbeatInterval !== 0) {
      writer.uint32(96).int32(message.heartbeatInterval);
    }
    if (message.thumbnailUrl !== "") {
      writer.uint32(106).string(message.thumbnailUrl);
    }
    if (message.isWebrtc === true) {
      writer.uint32(112).bool(message.isWebrtc);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(121).fixed64(message.webrtcSessionId);
    }
    if (message.webrtcOfferSdp !== "") {
      writer.uint32(130).string(message.webrtcOfferSdp);
    }
    if (message.webrtcTurnServer !== "") {
      writer.uint32(138).string(message.webrtcTurnServer);
    }
    if (message.isReplay === true) {
      writer.uint32(144).bool(message.isReplay);
    }
    if (message.duration !== 0) {
      writer.uint32(152).int32(message.duration);
    }
    if (message.cdnAuthUrlParameters !== "") {
      writer.uint32(162).string(message.cdnAuthUrlParameters);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWatchBroadcastResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWatchBroadcastResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.int32() as any;
          break;
        case 2:
          message.mpdUrl = reader.string();
          break;
        case 3:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.numViewers = reader.uint32();
          break;
        case 7:
          message.permission = reader.int32();
          break;
        case 8:
          message.isRtmp = reader.bool();
          break;
        case 9:
          message.secondsDelay = reader.int32();
          break;
        case 10:
          message.viewerToken = longToString(reader.fixed64() as Long);
          break;
        case 11:
          message.hlsM3u8MasterUrl = reader.string();
          break;
        case 12:
          message.heartbeatInterval = reader.int32();
          break;
        case 13:
          message.thumbnailUrl = reader.string();
          break;
        case 14:
          message.isWebrtc = reader.bool();
          break;
        case 15:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 16:
          message.webrtcOfferSdp = reader.string();
          break;
        case 17:
          message.webrtcTurnServer = reader.string();
          break;
        case 18:
          message.isReplay = reader.bool();
          break;
        case 19:
          message.duration = reader.int32();
          break;
        case 20:
          message.cdnAuthUrlParameters = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWatchBroadcastResponse {
    return {
      response: isSet(object.response) ? cBroadcastWatchBroadcastResponse_EWatchResponseFromJSON(object.response) : 1,
      mpdUrl: isSet(object.mpdUrl) ? String(object.mpdUrl) : "",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
      permission: isSet(object.permission) ? Number(object.permission) : 0,
      isRtmp: isSet(object.isRtmp) ? Boolean(object.isRtmp) : false,
      secondsDelay: isSet(object.secondsDelay) ? Number(object.secondsDelay) : 0,
      viewerToken: isSet(object.viewerToken) ? String(object.viewerToken) : "0",
      hlsM3u8MasterUrl: isSet(object.hlsM3u8MasterUrl) ? String(object.hlsM3u8MasterUrl) : "",
      heartbeatInterval: isSet(object.heartbeatInterval) ? Number(object.heartbeatInterval) : 0,
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      isWebrtc: isSet(object.isWebrtc) ? Boolean(object.isWebrtc) : false,
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      webrtcOfferSdp: isSet(object.webrtcOfferSdp) ? String(object.webrtcOfferSdp) : "",
      webrtcTurnServer: isSet(object.webrtcTurnServer) ? String(object.webrtcTurnServer) : "",
      isReplay: isSet(object.isReplay) ? Boolean(object.isReplay) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      cdnAuthUrlParameters: isSet(object.cdnAuthUrlParameters) ? String(object.cdnAuthUrlParameters) : "",
    };
  },

  toJSON(message: CBroadcastWatchBroadcastResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = cBroadcastWatchBroadcastResponse_EWatchResponseToJSON(message.response));
    message.mpdUrl !== undefined && (obj.mpdUrl = message.mpdUrl);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.title !== undefined && (obj.title = message.title);
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    message.permission !== undefined && (obj.permission = Math.round(message.permission));
    message.isRtmp !== undefined && (obj.isRtmp = message.isRtmp);
    message.secondsDelay !== undefined && (obj.secondsDelay = Math.round(message.secondsDelay));
    message.viewerToken !== undefined && (obj.viewerToken = message.viewerToken);
    message.hlsM3u8MasterUrl !== undefined && (obj.hlsM3u8MasterUrl = message.hlsM3u8MasterUrl);
    message.heartbeatInterval !== undefined && (obj.heartbeatInterval = Math.round(message.heartbeatInterval));
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.isWebrtc !== undefined && (obj.isWebrtc = message.isWebrtc);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.webrtcOfferSdp !== undefined && (obj.webrtcOfferSdp = message.webrtcOfferSdp);
    message.webrtcTurnServer !== undefined && (obj.webrtcTurnServer = message.webrtcTurnServer);
    message.isReplay !== undefined && (obj.isReplay = message.isReplay);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.cdnAuthUrlParameters !== undefined && (obj.cdnAuthUrlParameters = message.cdnAuthUrlParameters);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWatchBroadcastResponse>, I>>(
    base?: I,
  ): CBroadcastWatchBroadcastResponse {
    return CBroadcastWatchBroadcastResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWatchBroadcastResponse>, I>>(
    object: I,
  ): CBroadcastWatchBroadcastResponse {
    const message = createBaseCBroadcastWatchBroadcastResponse();
    message.response = object.response ?? 1;
    message.mpdUrl = object.mpdUrl ?? "";
    message.broadcastId = object.broadcastId ?? "0";
    message.gameid = object.gameid ?? "0";
    message.title = object.title ?? "";
    message.numViewers = object.numViewers ?? 0;
    message.permission = object.permission ?? 0;
    message.isRtmp = object.isRtmp ?? false;
    message.secondsDelay = object.secondsDelay ?? 0;
    message.viewerToken = object.viewerToken ?? "0";
    message.hlsM3u8MasterUrl = object.hlsM3u8MasterUrl ?? "";
    message.heartbeatInterval = object.heartbeatInterval ?? 0;
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.isWebrtc = object.isWebrtc ?? false;
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.webrtcOfferSdp = object.webrtcOfferSdp ?? "";
    message.webrtcTurnServer = object.webrtcTurnServer ?? "";
    message.isReplay = object.isReplay ?? false;
    message.duration = object.duration ?? 0;
    message.cdnAuthUrlParameters = object.cdnAuthUrlParameters ?? "";
    return message;
  },
};

function createBaseCBroadcastHeartbeatBroadcastNotification(): CBroadcastHeartbeatBroadcastNotification {
  return { steamid: "0", broadcastId: "0", viewerToken: "0", representation: 0 };
}

export const CBroadcastHeartbeatBroadcastNotification = {
  encode(message: CBroadcastHeartbeatBroadcastNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(17).fixed64(message.broadcastId);
    }
    if (message.viewerToken !== "0") {
      writer.uint32(25).fixed64(message.viewerToken);
    }
    if (message.representation !== 0) {
      writer.uint32(32).uint32(message.representation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastHeartbeatBroadcastNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastHeartbeatBroadcastNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.viewerToken = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.representation = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastHeartbeatBroadcastNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      viewerToken: isSet(object.viewerToken) ? String(object.viewerToken) : "0",
      representation: isSet(object.representation) ? Number(object.representation) : 0,
    };
  },

  toJSON(message: CBroadcastHeartbeatBroadcastNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.viewerToken !== undefined && (obj.viewerToken = message.viewerToken);
    message.representation !== undefined && (obj.representation = Math.round(message.representation));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastHeartbeatBroadcastNotification>, I>>(
    base?: I,
  ): CBroadcastHeartbeatBroadcastNotification {
    return CBroadcastHeartbeatBroadcastNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastHeartbeatBroadcastNotification>, I>>(
    object: I,
  ): CBroadcastHeartbeatBroadcastNotification {
    const message = createBaseCBroadcastHeartbeatBroadcastNotification();
    message.steamid = object.steamid ?? "0";
    message.broadcastId = object.broadcastId ?? "0";
    message.viewerToken = object.viewerToken ?? "0";
    message.representation = object.representation ?? 0;
    return message;
  },
};

function createBaseCBroadcastStopWatchingBroadcastNotification(): CBroadcastStopWatchingBroadcastNotification {
  return { steamid: "0", broadcastId: "0", viewerToken: "0" };
}

export const CBroadcastStopWatchingBroadcastNotification = {
  encode(message: CBroadcastStopWatchingBroadcastNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(17).fixed64(message.broadcastId);
    }
    if (message.viewerToken !== "0") {
      writer.uint32(25).fixed64(message.viewerToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStopWatchingBroadcastNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStopWatchingBroadcastNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.viewerToken = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStopWatchingBroadcastNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      viewerToken: isSet(object.viewerToken) ? String(object.viewerToken) : "0",
    };
  },

  toJSON(message: CBroadcastStopWatchingBroadcastNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.viewerToken !== undefined && (obj.viewerToken = message.viewerToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStopWatchingBroadcastNotification>, I>>(
    base?: I,
  ): CBroadcastStopWatchingBroadcastNotification {
    return CBroadcastStopWatchingBroadcastNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStopWatchingBroadcastNotification>, I>>(
    object: I,
  ): CBroadcastStopWatchingBroadcastNotification {
    const message = createBaseCBroadcastStopWatchingBroadcastNotification();
    message.steamid = object.steamid ?? "0";
    message.broadcastId = object.broadcastId ?? "0";
    message.viewerToken = object.viewerToken ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastStatusRequest(): CBroadcastGetBroadcastStatusRequest {
  return { steamid: "0", broadcastId: "0" };
}

export const CBroadcastGetBroadcastStatusRequest = {
  encode(message: CBroadcastGetBroadcastStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(17).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastStatusRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
    };
  },

  toJSON(message: CBroadcastGetBroadcastStatusRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastStatusRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastStatusRequest {
    return CBroadcastGetBroadcastStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastStatusRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastStatusRequest {
    const message = createBaseCBroadcastGetBroadcastStatusRequest();
    message.steamid = object.steamid ?? "0";
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastStatusResponse(): CBroadcastGetBroadcastStatusResponse {
  return {
    gameid: "0",
    title: "",
    numViewers: 0,
    permission: 0,
    isRtmp: false,
    secondsDelay: 0,
    isPublisher: false,
    thumbnailUrl: "",
    updateInterval: 0,
    isUploading: false,
    duration: 0,
    isReplay: false,
    isCapturingVod: false,
    isStoreWhitelisted: false,
  };
}

export const CBroadcastGetBroadcastStatusResponse = {
  encode(message: CBroadcastGetBroadcastStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameid !== "0") {
      writer.uint32(8).uint64(message.gameid);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.numViewers !== 0) {
      writer.uint32(24).uint32(message.numViewers);
    }
    if (message.permission !== 0) {
      writer.uint32(32).int32(message.permission);
    }
    if (message.isRtmp === true) {
      writer.uint32(40).bool(message.isRtmp);
    }
    if (message.secondsDelay !== 0) {
      writer.uint32(48).int32(message.secondsDelay);
    }
    if (message.isPublisher === true) {
      writer.uint32(56).bool(message.isPublisher);
    }
    if (message.thumbnailUrl !== "") {
      writer.uint32(66).string(message.thumbnailUrl);
    }
    if (message.updateInterval !== 0) {
      writer.uint32(72).int32(message.updateInterval);
    }
    if (message.isUploading === true) {
      writer.uint32(80).bool(message.isUploading);
    }
    if (message.duration !== 0) {
      writer.uint32(88).uint32(message.duration);
    }
    if (message.isReplay === true) {
      writer.uint32(96).bool(message.isReplay);
    }
    if (message.isCapturingVod === true) {
      writer.uint32(104).bool(message.isCapturingVod);
    }
    if (message.isStoreWhitelisted === true) {
      writer.uint32(112).bool(message.isStoreWhitelisted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.numViewers = reader.uint32();
          break;
        case 4:
          message.permission = reader.int32();
          break;
        case 5:
          message.isRtmp = reader.bool();
          break;
        case 6:
          message.secondsDelay = reader.int32();
          break;
        case 7:
          message.isPublisher = reader.bool();
          break;
        case 8:
          message.thumbnailUrl = reader.string();
          break;
        case 9:
          message.updateInterval = reader.int32();
          break;
        case 10:
          message.isUploading = reader.bool();
          break;
        case 11:
          message.duration = reader.uint32();
          break;
        case 12:
          message.isReplay = reader.bool();
          break;
        case 13:
          message.isCapturingVod = reader.bool();
          break;
        case 14:
          message.isStoreWhitelisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastStatusResponse {
    return {
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
      permission: isSet(object.permission) ? Number(object.permission) : 0,
      isRtmp: isSet(object.isRtmp) ? Boolean(object.isRtmp) : false,
      secondsDelay: isSet(object.secondsDelay) ? Number(object.secondsDelay) : 0,
      isPublisher: isSet(object.isPublisher) ? Boolean(object.isPublisher) : false,
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      updateInterval: isSet(object.updateInterval) ? Number(object.updateInterval) : 0,
      isUploading: isSet(object.isUploading) ? Boolean(object.isUploading) : false,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      isReplay: isSet(object.isReplay) ? Boolean(object.isReplay) : false,
      isCapturingVod: isSet(object.isCapturingVod) ? Boolean(object.isCapturingVod) : false,
      isStoreWhitelisted: isSet(object.isStoreWhitelisted) ? Boolean(object.isStoreWhitelisted) : false,
    };
  },

  toJSON(message: CBroadcastGetBroadcastStatusResponse): unknown {
    const obj: any = {};
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.title !== undefined && (obj.title = message.title);
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    message.permission !== undefined && (obj.permission = Math.round(message.permission));
    message.isRtmp !== undefined && (obj.isRtmp = message.isRtmp);
    message.secondsDelay !== undefined && (obj.secondsDelay = Math.round(message.secondsDelay));
    message.isPublisher !== undefined && (obj.isPublisher = message.isPublisher);
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.updateInterval !== undefined && (obj.updateInterval = Math.round(message.updateInterval));
    message.isUploading !== undefined && (obj.isUploading = message.isUploading);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.isReplay !== undefined && (obj.isReplay = message.isReplay);
    message.isCapturingVod !== undefined && (obj.isCapturingVod = message.isCapturingVod);
    message.isStoreWhitelisted !== undefined && (obj.isStoreWhitelisted = message.isStoreWhitelisted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastStatusResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastStatusResponse {
    return CBroadcastGetBroadcastStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastStatusResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastStatusResponse {
    const message = createBaseCBroadcastGetBroadcastStatusResponse();
    message.gameid = object.gameid ?? "0";
    message.title = object.title ?? "";
    message.numViewers = object.numViewers ?? 0;
    message.permission = object.permission ?? 0;
    message.isRtmp = object.isRtmp ?? false;
    message.secondsDelay = object.secondsDelay ?? 0;
    message.isPublisher = object.isPublisher ?? false;
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.updateInterval = object.updateInterval ?? 0;
    message.isUploading = object.isUploading ?? false;
    message.duration = object.duration ?? 0;
    message.isReplay = object.isReplay ?? false;
    message.isCapturingVod = object.isCapturingVod ?? false;
    message.isStoreWhitelisted = object.isStoreWhitelisted ?? false;
    return message;
  },
};

function createBaseCBroadcastGetBroadcastThumbnailRequest(): CBroadcastGetBroadcastThumbnailRequest {
  return { steamid: "0", broadcastId: "0" };
}

export const CBroadcastGetBroadcastThumbnailRequest = {
  encode(message: CBroadcastGetBroadcastThumbnailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(17).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastThumbnailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastThumbnailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastThumbnailRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
    };
  },

  toJSON(message: CBroadcastGetBroadcastThumbnailRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastThumbnailRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastThumbnailRequest {
    return CBroadcastGetBroadcastThumbnailRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastThumbnailRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastThumbnailRequest {
    const message = createBaseCBroadcastGetBroadcastThumbnailRequest();
    message.steamid = object.steamid ?? "0";
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastThumbnailResponse(): CBroadcastGetBroadcastThumbnailResponse {
  return { thumbnailUrl: "", updateInterval: 0, numViewers: 0, duration: 0 };
}

export const CBroadcastGetBroadcastThumbnailResponse = {
  encode(message: CBroadcastGetBroadcastThumbnailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thumbnailUrl !== "") {
      writer.uint32(10).string(message.thumbnailUrl);
    }
    if (message.updateInterval !== 0) {
      writer.uint32(16).int32(message.updateInterval);
    }
    if (message.numViewers !== 0) {
      writer.uint32(24).int32(message.numViewers);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastThumbnailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastThumbnailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.thumbnailUrl = reader.string();
          break;
        case 2:
          message.updateInterval = reader.int32();
          break;
        case 3:
          message.numViewers = reader.int32();
          break;
        case 4:
          message.duration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastThumbnailResponse {
    return {
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      updateInterval: isSet(object.updateInterval) ? Number(object.updateInterval) : 0,
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CBroadcastGetBroadcastThumbnailResponse): unknown {
    const obj: any = {};
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.updateInterval !== undefined && (obj.updateInterval = Math.round(message.updateInterval));
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastThumbnailResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastThumbnailResponse {
    return CBroadcastGetBroadcastThumbnailResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastThumbnailResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastThumbnailResponse {
    const message = createBaseCBroadcastGetBroadcastThumbnailResponse();
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.updateInterval = object.updateInterval ?? 0;
    message.numViewers = object.numViewers ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseCBroadcastInviteToBroadcastRequest(): CBroadcastInviteToBroadcastRequest {
  return { steamid: "0", approvalResponse: false };
}

export const CBroadcastInviteToBroadcastRequest = {
  encode(message: CBroadcastInviteToBroadcastRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.approvalResponse === true) {
      writer.uint32(16).bool(message.approvalResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastInviteToBroadcastRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastInviteToBroadcastRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.approvalResponse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastInviteToBroadcastRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      approvalResponse: isSet(object.approvalResponse) ? Boolean(object.approvalResponse) : false,
    };
  },

  toJSON(message: CBroadcastInviteToBroadcastRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.approvalResponse !== undefined && (obj.approvalResponse = message.approvalResponse);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastInviteToBroadcastRequest>, I>>(
    base?: I,
  ): CBroadcastInviteToBroadcastRequest {
    return CBroadcastInviteToBroadcastRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastInviteToBroadcastRequest>, I>>(
    object: I,
  ): CBroadcastInviteToBroadcastRequest {
    const message = createBaseCBroadcastInviteToBroadcastRequest();
    message.steamid = object.steamid ?? "0";
    message.approvalResponse = object.approvalResponse ?? false;
    return message;
  },
};

function createBaseCBroadcastInviteToBroadcastResponse(): CBroadcastInviteToBroadcastResponse {
  return { success: false };
}

export const CBroadcastInviteToBroadcastResponse = {
  encode(message: CBroadcastInviteToBroadcastResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastInviteToBroadcastResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastInviteToBroadcastResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastInviteToBroadcastResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CBroadcastInviteToBroadcastResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastInviteToBroadcastResponse>, I>>(
    base?: I,
  ): CBroadcastInviteToBroadcastResponse {
    return CBroadcastInviteToBroadcastResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastInviteToBroadcastResponse>, I>>(
    object: I,
  ): CBroadcastInviteToBroadcastResponse {
    const message = createBaseCBroadcastInviteToBroadcastResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseCBroadcastSendBroadcastStateToServerRequest(): CBroadcastSendBroadcastStateToServerRequest {
  return { permission: 0, gameid: "0", title: "", gameDataConfig: "" };
}

export const CBroadcastSendBroadcastStateToServerRequest = {
  encode(message: CBroadcastSendBroadcastStateToServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.gameid !== "0") {
      writer.uint32(16).uint64(message.gameid);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.gameDataConfig !== "") {
      writer.uint32(34).string(message.gameDataConfig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSendBroadcastStateToServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSendBroadcastStateToServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 2:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.gameDataConfig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastSendBroadcastStateToServerRequest {
    return {
      permission: isSet(object.permission) ? Number(object.permission) : 0,
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      title: isSet(object.title) ? String(object.title) : "",
      gameDataConfig: isSet(object.gameDataConfig) ? String(object.gameDataConfig) : "",
    };
  },

  toJSON(message: CBroadcastSendBroadcastStateToServerRequest): unknown {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = Math.round(message.permission));
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.title !== undefined && (obj.title = message.title);
    message.gameDataConfig !== undefined && (obj.gameDataConfig = message.gameDataConfig);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSendBroadcastStateToServerRequest>, I>>(
    base?: I,
  ): CBroadcastSendBroadcastStateToServerRequest {
    return CBroadcastSendBroadcastStateToServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSendBroadcastStateToServerRequest>, I>>(
    object: I,
  ): CBroadcastSendBroadcastStateToServerRequest {
    const message = createBaseCBroadcastSendBroadcastStateToServerRequest();
    message.permission = object.permission ?? 0;
    message.gameid = object.gameid ?? "0";
    message.title = object.title ?? "";
    message.gameDataConfig = object.gameDataConfig ?? "";
    return message;
  },
};

function createBaseCBroadcastSendBroadcastStateToServerResponse(): CBroadcastSendBroadcastStateToServerResponse {
  return {};
}

export const CBroadcastSendBroadcastStateToServerResponse = {
  encode(_: CBroadcastSendBroadcastStateToServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSendBroadcastStateToServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSendBroadcastStateToServerResponse();
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

  fromJSON(_: any): CBroadcastSendBroadcastStateToServerResponse {
    return {};
  },

  toJSON(_: CBroadcastSendBroadcastStateToServerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSendBroadcastStateToServerResponse>, I>>(
    base?: I,
  ): CBroadcastSendBroadcastStateToServerResponse {
    return CBroadcastSendBroadcastStateToServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSendBroadcastStateToServerResponse>, I>>(
    _: I,
  ): CBroadcastSendBroadcastStateToServerResponse {
    const message = createBaseCBroadcastSendBroadcastStateToServerResponse();
    return message;
  },
};

function createBaseCBroadcastNotifyBroadcastSessionHeartbeatNotification(): CBroadcastNotifyBroadcastSessionHeartbeatNotification {
  return { broadcastId: "0" };
}

export const CBroadcastNotifyBroadcastSessionHeartbeatNotification = {
  encode(
    message: CBroadcastNotifyBroadcastSessionHeartbeatNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastNotifyBroadcastSessionHeartbeatNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastNotifyBroadcastSessionHeartbeatNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastNotifyBroadcastSessionHeartbeatNotification {
    return { broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0" };
  },

  toJSON(message: CBroadcastNotifyBroadcastSessionHeartbeatNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastNotifyBroadcastSessionHeartbeatNotification>, I>>(
    base?: I,
  ): CBroadcastNotifyBroadcastSessionHeartbeatNotification {
    return CBroadcastNotifyBroadcastSessionHeartbeatNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastNotifyBroadcastSessionHeartbeatNotification>, I>>(
    object: I,
  ): CBroadcastNotifyBroadcastSessionHeartbeatNotification {
    const message = createBaseCBroadcastNotifyBroadcastSessionHeartbeatNotification();
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastChatInfoRequest(): CBroadcastGetBroadcastChatInfoRequest {
  return { steamid: "0", broadcastId: "0", clientIp: 0, clientCell: 0 };
}

export const CBroadcastGetBroadcastChatInfoRequest = {
  encode(message: CBroadcastGetBroadcastChatInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastId !== "0") {
      writer.uint32(17).fixed64(message.broadcastId);
    }
    if (message.clientIp !== 0) {
      writer.uint32(24).uint32(message.clientIp);
    }
    if (message.clientCell !== 0) {
      writer.uint32(32).uint32(message.clientCell);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastChatInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastChatInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.clientIp = reader.uint32();
          break;
        case 4:
          message.clientCell = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastChatInfoRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      clientIp: isSet(object.clientIp) ? Number(object.clientIp) : 0,
      clientCell: isSet(object.clientCell) ? Number(object.clientCell) : 0,
    };
  },

  toJSON(message: CBroadcastGetBroadcastChatInfoRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.clientIp !== undefined && (obj.clientIp = Math.round(message.clientIp));
    message.clientCell !== undefined && (obj.clientCell = Math.round(message.clientCell));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatInfoRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastChatInfoRequest {
    return CBroadcastGetBroadcastChatInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatInfoRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastChatInfoRequest {
    const message = createBaseCBroadcastGetBroadcastChatInfoRequest();
    message.steamid = object.steamid ?? "0";
    message.broadcastId = object.broadcastId ?? "0";
    message.clientIp = object.clientIp ?? 0;
    message.clientCell = object.clientCell ?? 0;
    return message;
  },
};

function createBaseCBroadcastGetBroadcastChatInfoResponse(): CBroadcastGetBroadcastChatInfoResponse {
  return { chatId: "0", viewUrlTemplate: "", flairGroupIds: [] };
}

export const CBroadcastGetBroadcastChatInfoResponse = {
  encode(message: CBroadcastGetBroadcastChatInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.viewUrlTemplate !== "") {
      writer.uint32(26).string(message.viewUrlTemplate);
    }
    writer.uint32(34).fork();
    for (const v of message.flairGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastChatInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastChatInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.viewUrlTemplate = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flairGroupIds.push(reader.uint32());
            }
          } else {
            message.flairGroupIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastChatInfoResponse {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      viewUrlTemplate: isSet(object.viewUrlTemplate) ? String(object.viewUrlTemplate) : "",
      flairGroupIds: Array.isArray(object?.flairGroupIds) ? object.flairGroupIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CBroadcastGetBroadcastChatInfoResponse): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.viewUrlTemplate !== undefined && (obj.viewUrlTemplate = message.viewUrlTemplate);
    if (message.flairGroupIds) {
      obj.flairGroupIds = message.flairGroupIds.map((e) => Math.round(e));
    } else {
      obj.flairGroupIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatInfoResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastChatInfoResponse {
    return CBroadcastGetBroadcastChatInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatInfoResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastChatInfoResponse {
    const message = createBaseCBroadcastGetBroadcastChatInfoResponse();
    message.chatId = object.chatId ?? "0";
    message.viewUrlTemplate = object.viewUrlTemplate ?? "";
    message.flairGroupIds = object.flairGroupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCBroadcastPostChatMessageRequest(): CBroadcastPostChatMessageRequest {
  return { chatId: "0", message: "", instanceId: 0, language: 0, countryCode: "" };
}

export const CBroadcastPostChatMessageRequest = {
  encode(message: CBroadcastPostChatMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.instanceId !== 0) {
      writer.uint32(24).uint32(message.instanceId);
    }
    if (message.language !== 0) {
      writer.uint32(32).uint32(message.language);
    }
    if (message.countryCode !== "") {
      writer.uint32(42).string(message.countryCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastPostChatMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastPostChatMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.instanceId = reader.uint32();
          break;
        case 4:
          message.language = reader.uint32();
          break;
        case 5:
          message.countryCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastPostChatMessageRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      message: isSet(object.message) ? String(object.message) : "",
      instanceId: isSet(object.instanceId) ? Number(object.instanceId) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
    };
  },

  toJSON(message: CBroadcastPostChatMessageRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.message !== undefined && (obj.message = message.message);
    message.instanceId !== undefined && (obj.instanceId = Math.round(message.instanceId));
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastPostChatMessageRequest>, I>>(
    base?: I,
  ): CBroadcastPostChatMessageRequest {
    return CBroadcastPostChatMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastPostChatMessageRequest>, I>>(
    object: I,
  ): CBroadcastPostChatMessageRequest {
    const message = createBaseCBroadcastPostChatMessageRequest();
    message.chatId = object.chatId ?? "0";
    message.message = object.message ?? "";
    message.instanceId = object.instanceId ?? 0;
    message.language = object.language ?? 0;
    message.countryCode = object.countryCode ?? "";
    return message;
  },
};

function createBaseCBroadcastPostChatMessageResponse(): CBroadcastPostChatMessageResponse {
  return { personaName: "", inGame: false, result: 0, cooldownTimeSeconds: 0 };
}

export const CBroadcastPostChatMessageResponse = {
  encode(message: CBroadcastPostChatMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.personaName !== "") {
      writer.uint32(10).string(message.personaName);
    }
    if (message.inGame === true) {
      writer.uint32(16).bool(message.inGame);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    if (message.cooldownTimeSeconds !== 0) {
      writer.uint32(32).int32(message.cooldownTimeSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastPostChatMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastPostChatMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personaName = reader.string();
          break;
        case 2:
          message.inGame = reader.bool();
          break;
        case 3:
          message.result = reader.int32();
          break;
        case 4:
          message.cooldownTimeSeconds = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastPostChatMessageResponse {
    return {
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      inGame: isSet(object.inGame) ? Boolean(object.inGame) : false,
      result: isSet(object.result) ? Number(object.result) : 0,
      cooldownTimeSeconds: isSet(object.cooldownTimeSeconds) ? Number(object.cooldownTimeSeconds) : 0,
    };
  },

  toJSON(message: CBroadcastPostChatMessageResponse): unknown {
    const obj: any = {};
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.inGame !== undefined && (obj.inGame = message.inGame);
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.cooldownTimeSeconds !== undefined && (obj.cooldownTimeSeconds = Math.round(message.cooldownTimeSeconds));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastPostChatMessageResponse>, I>>(
    base?: I,
  ): CBroadcastPostChatMessageResponse {
    return CBroadcastPostChatMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastPostChatMessageResponse>, I>>(
    object: I,
  ): CBroadcastPostChatMessageResponse {
    const message = createBaseCBroadcastPostChatMessageResponse();
    message.personaName = object.personaName ?? "";
    message.inGame = object.inGame ?? false;
    message.result = object.result ?? 0;
    message.cooldownTimeSeconds = object.cooldownTimeSeconds ?? 0;
    return message;
  },
};

function createBaseCBroadcastUpdateChatMessageFlairRequest(): CBroadcastUpdateChatMessageFlairRequest {
  return { chatId: "0", flair: "" };
}

export const CBroadcastUpdateChatMessageFlairRequest = {
  encode(message: CBroadcastUpdateChatMessageFlairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.flair !== "") {
      writer.uint32(18).string(message.flair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastUpdateChatMessageFlairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastUpdateChatMessageFlairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.flair = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastUpdateChatMessageFlairRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      flair: isSet(object.flair) ? String(object.flair) : "",
    };
  },

  toJSON(message: CBroadcastUpdateChatMessageFlairRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.flair !== undefined && (obj.flair = message.flair);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastUpdateChatMessageFlairRequest>, I>>(
    base?: I,
  ): CBroadcastUpdateChatMessageFlairRequest {
    return CBroadcastUpdateChatMessageFlairRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastUpdateChatMessageFlairRequest>, I>>(
    object: I,
  ): CBroadcastUpdateChatMessageFlairRequest {
    const message = createBaseCBroadcastUpdateChatMessageFlairRequest();
    message.chatId = object.chatId ?? "0";
    message.flair = object.flair ?? "";
    return message;
  },
};

function createBaseCBroadcastUpdateChatMessageFlairResponse(): CBroadcastUpdateChatMessageFlairResponse {
  return { result: 0, chatId: "0", flair: "" };
}

export const CBroadcastUpdateChatMessageFlairResponse = {
  encode(message: CBroadcastUpdateChatMessageFlairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.chatId !== "0") {
      writer.uint32(17).fixed64(message.chatId);
    }
    if (message.flair !== "") {
      writer.uint32(26).string(message.flair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastUpdateChatMessageFlairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastUpdateChatMessageFlairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;
        case 2:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.flair = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastUpdateChatMessageFlairResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      flair: isSet(object.flair) ? String(object.flair) : "",
    };
  },

  toJSON(message: CBroadcastUpdateChatMessageFlairResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.flair !== undefined && (obj.flair = message.flair);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastUpdateChatMessageFlairResponse>, I>>(
    base?: I,
  ): CBroadcastUpdateChatMessageFlairResponse {
    return CBroadcastUpdateChatMessageFlairResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastUpdateChatMessageFlairResponse>, I>>(
    object: I,
  ): CBroadcastUpdateChatMessageFlairResponse {
    const message = createBaseCBroadcastUpdateChatMessageFlairResponse();
    message.result = object.result ?? 0;
    message.chatId = object.chatId ?? "0";
    message.flair = object.flair ?? "";
    return message;
  },
};

function createBaseCBroadcastMuteBroadcastChatUserRequest(): CBroadcastMuteBroadcastChatUserRequest {
  return { chatId: "0", userSteamid: "0", muted: false };
}

export const CBroadcastMuteBroadcastChatUserRequest = {
  encode(message: CBroadcastMuteBroadcastChatUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.userSteamid !== "0") {
      writer.uint32(17).fixed64(message.userSteamid);
    }
    if (message.muted === true) {
      writer.uint32(24).bool(message.muted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastMuteBroadcastChatUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastMuteBroadcastChatUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.userSteamid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.muted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastMuteBroadcastChatUserRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      userSteamid: isSet(object.userSteamid) ? String(object.userSteamid) : "0",
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
    };
  },

  toJSON(message: CBroadcastMuteBroadcastChatUserRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.userSteamid !== undefined && (obj.userSteamid = message.userSteamid);
    message.muted !== undefined && (obj.muted = message.muted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastMuteBroadcastChatUserRequest>, I>>(
    base?: I,
  ): CBroadcastMuteBroadcastChatUserRequest {
    return CBroadcastMuteBroadcastChatUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastMuteBroadcastChatUserRequest>, I>>(
    object: I,
  ): CBroadcastMuteBroadcastChatUserRequest {
    const message = createBaseCBroadcastMuteBroadcastChatUserRequest();
    message.chatId = object.chatId ?? "0";
    message.userSteamid = object.userSteamid ?? "0";
    message.muted = object.muted ?? false;
    return message;
  },
};

function createBaseCBroadcastMuteBroadcastChatUserResponse(): CBroadcastMuteBroadcastChatUserResponse {
  return {};
}

export const CBroadcastMuteBroadcastChatUserResponse = {
  encode(_: CBroadcastMuteBroadcastChatUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastMuteBroadcastChatUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastMuteBroadcastChatUserResponse();
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

  fromJSON(_: any): CBroadcastMuteBroadcastChatUserResponse {
    return {};
  },

  toJSON(_: CBroadcastMuteBroadcastChatUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastMuteBroadcastChatUserResponse>, I>>(
    base?: I,
  ): CBroadcastMuteBroadcastChatUserResponse {
    return CBroadcastMuteBroadcastChatUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastMuteBroadcastChatUserResponse>, I>>(
    _: I,
  ): CBroadcastMuteBroadcastChatUserResponse {
    const message = createBaseCBroadcastMuteBroadcastChatUserResponse();
    return message;
  },
};

function createBaseCBroadcastRemoveUserChatTextRequest(): CBroadcastRemoveUserChatTextRequest {
  return { chatId: "0", userSteamid: "0" };
}

export const CBroadcastRemoveUserChatTextRequest = {
  encode(message: CBroadcastRemoveUserChatTextRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.userSteamid !== "0") {
      writer.uint32(17).fixed64(message.userSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastRemoveUserChatTextRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastRemoveUserChatTextRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.userSteamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastRemoveUserChatTextRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      userSteamid: isSet(object.userSteamid) ? String(object.userSteamid) : "0",
    };
  },

  toJSON(message: CBroadcastRemoveUserChatTextRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.userSteamid !== undefined && (obj.userSteamid = message.userSteamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastRemoveUserChatTextRequest>, I>>(
    base?: I,
  ): CBroadcastRemoveUserChatTextRequest {
    return CBroadcastRemoveUserChatTextRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastRemoveUserChatTextRequest>, I>>(
    object: I,
  ): CBroadcastRemoveUserChatTextRequest {
    const message = createBaseCBroadcastRemoveUserChatTextRequest();
    message.chatId = object.chatId ?? "0";
    message.userSteamid = object.userSteamid ?? "0";
    return message;
  },
};

function createBaseCBroadcastRemoveUserChatTextResponse(): CBroadcastRemoveUserChatTextResponse {
  return {};
}

export const CBroadcastRemoveUserChatTextResponse = {
  encode(_: CBroadcastRemoveUserChatTextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastRemoveUserChatTextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastRemoveUserChatTextResponse();
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

  fromJSON(_: any): CBroadcastRemoveUserChatTextResponse {
    return {};
  },

  toJSON(_: CBroadcastRemoveUserChatTextResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastRemoveUserChatTextResponse>, I>>(
    base?: I,
  ): CBroadcastRemoveUserChatTextResponse {
    return CBroadcastRemoveUserChatTextResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastRemoveUserChatTextResponse>, I>>(
    _: I,
  ): CBroadcastRemoveUserChatTextResponse {
    const message = createBaseCBroadcastRemoveUserChatTextResponse();
    return message;
  },
};

function createBaseCBroadcastGetBroadcastChatUserNamesRequest(): CBroadcastGetBroadcastChatUserNamesRequest {
  return { chatId: "0", userSteamid: [] };
}

export const CBroadcastGetBroadcastChatUserNamesRequest = {
  encode(message: CBroadcastGetBroadcastChatUserNamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== "0") {
      writer.uint32(9).fixed64(message.chatId);
    }
    writer.uint32(18).fork();
    for (const v of message.userSteamid) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastChatUserNamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastChatUserNamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userSteamid.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.userSteamid.push(longToString(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastChatUserNamesRequest {
    return {
      chatId: isSet(object.chatId) ? String(object.chatId) : "0",
      userSteamid: Array.isArray(object?.userSteamid) ? object.userSteamid.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CBroadcastGetBroadcastChatUserNamesRequest): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    if (message.userSteamid) {
      obj.userSteamid = message.userSteamid.map((e) => e);
    } else {
      obj.userSteamid = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastChatUserNamesRequest {
    return CBroadcastGetBroadcastChatUserNamesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastChatUserNamesRequest {
    const message = createBaseCBroadcastGetBroadcastChatUserNamesRequest();
    message.chatId = object.chatId ?? "0";
    message.userSteamid = object.userSteamid?.map((e) => e) || [];
    return message;
  },
};

function createBaseCBroadcastGetBroadcastChatUserNamesResponse(): CBroadcastGetBroadcastChatUserNamesResponse {
  return { personaNames: [] };
}

export const CBroadcastGetBroadcastChatUserNamesResponse = {
  encode(message: CBroadcastGetBroadcastChatUserNamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.personaNames) {
      CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastChatUserNamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastChatUserNamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personaNames.push(
            CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastChatUserNamesResponse {
    return {
      personaNames: Array.isArray(object?.personaNames)
        ? object.personaNames.map((e: any) => CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CBroadcastGetBroadcastChatUserNamesResponse): unknown {
    const obj: any = {};
    if (message.personaNames) {
      obj.personaNames = message.personaNames.map((e) =>
        e ? CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.toJSON(e) : undefined
      );
    } else {
      obj.personaNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastChatUserNamesResponse {
    return CBroadcastGetBroadcastChatUserNamesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastChatUserNamesResponse {
    const message = createBaseCBroadcastGetBroadcastChatUserNamesResponse();
    message.personaNames =
      object.personaNames?.map((e) => CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCBroadcastGetBroadcastChatUserNamesResponse_PersonaName(): CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
  return { steamId: "0", persona: "" };
}

export const CBroadcastGetBroadcastChatUserNamesResponse_PersonaName = {
  encode(
    message: CBroadcastGetBroadcastChatUserNamesResponse_PersonaName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.persona !== "") {
      writer.uint32(18).string(message.persona);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastChatUserNamesResponse_PersonaName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.persona = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      persona: isSet(object.persona) ? String(object.persona) : "",
    };
  },

  toJSON(message: CBroadcastGetBroadcastChatUserNamesResponse_PersonaName): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.persona !== undefined && (obj.persona = message.persona);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesResponse_PersonaName>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
    return CBroadcastGetBroadcastChatUserNamesResponse_PersonaName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastChatUserNamesResponse_PersonaName>, I>>(
    object: I,
  ): CBroadcastGetBroadcastChatUserNamesResponse_PersonaName {
    const message = createBaseCBroadcastGetBroadcastChatUserNamesResponse_PersonaName();
    message.steamId = object.steamId ?? "0";
    message.persona = object.persona ?? "";
    return message;
  },
};

function createBaseCBroadcastStartBuildClipRequest(): CBroadcastStartBuildClipRequest {
  return { steamid: "0", broadcastSessionId: "0", firstSegment: 0, numSegments: 0, clipDescription: "" };
}

export const CBroadcastStartBuildClipRequest = {
  encode(message: CBroadcastStartBuildClipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.broadcastSessionId !== "0") {
      writer.uint32(17).fixed64(message.broadcastSessionId);
    }
    if (message.firstSegment !== 0) {
      writer.uint32(24).int32(message.firstSegment);
    }
    if (message.numSegments !== 0) {
      writer.uint32(32).int32(message.numSegments);
    }
    if (message.clipDescription !== "") {
      writer.uint32(42).string(message.clipDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStartBuildClipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStartBuildClipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.firstSegment = reader.int32();
          break;
        case 4:
          message.numSegments = reader.int32();
          break;
        case 5:
          message.clipDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStartBuildClipRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0",
      firstSegment: isSet(object.firstSegment) ? Number(object.firstSegment) : 0,
      numSegments: isSet(object.numSegments) ? Number(object.numSegments) : 0,
      clipDescription: isSet(object.clipDescription) ? String(object.clipDescription) : "",
    };
  },

  toJSON(message: CBroadcastStartBuildClipRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    message.firstSegment !== undefined && (obj.firstSegment = Math.round(message.firstSegment));
    message.numSegments !== undefined && (obj.numSegments = Math.round(message.numSegments));
    message.clipDescription !== undefined && (obj.clipDescription = message.clipDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStartBuildClipRequest>, I>>(base?: I): CBroadcastStartBuildClipRequest {
    return CBroadcastStartBuildClipRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStartBuildClipRequest>, I>>(
    object: I,
  ): CBroadcastStartBuildClipRequest {
    const message = createBaseCBroadcastStartBuildClipRequest();
    message.steamid = object.steamid ?? "0";
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    message.firstSegment = object.firstSegment ?? 0;
    message.numSegments = object.numSegments ?? 0;
    message.clipDescription = object.clipDescription ?? "";
    return message;
  },
};

function createBaseCBroadcastStartBuildClipResponse(): CBroadcastStartBuildClipResponse {
  return { broadcastClipId: "0" };
}

export const CBroadcastStartBuildClipResponse = {
  encode(message: CBroadcastStartBuildClipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== "0") {
      writer.uint32(9).fixed64(message.broadcastClipId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStartBuildClipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStartBuildClipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStartBuildClipResponse {
    return { broadcastClipId: isSet(object.broadcastClipId) ? String(object.broadcastClipId) : "0" };
  },

  toJSON(message: CBroadcastStartBuildClipResponse): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = message.broadcastClipId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStartBuildClipResponse>, I>>(
    base?: I,
  ): CBroadcastStartBuildClipResponse {
    return CBroadcastStartBuildClipResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStartBuildClipResponse>, I>>(
    object: I,
  ): CBroadcastStartBuildClipResponse {
    const message = createBaseCBroadcastStartBuildClipResponse();
    message.broadcastClipId = object.broadcastClipId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBuildClipStatusRequest(): CBroadcastGetBuildClipStatusRequest {
  return { broadcastClipId: "0" };
}

export const CBroadcastGetBuildClipStatusRequest = {
  encode(message: CBroadcastGetBuildClipStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== "0") {
      writer.uint32(9).fixed64(message.broadcastClipId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBuildClipStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBuildClipStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBuildClipStatusRequest {
    return { broadcastClipId: isSet(object.broadcastClipId) ? String(object.broadcastClipId) : "0" };
  },

  toJSON(message: CBroadcastGetBuildClipStatusRequest): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = message.broadcastClipId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBuildClipStatusRequest>, I>>(
    base?: I,
  ): CBroadcastGetBuildClipStatusRequest {
    return CBroadcastGetBuildClipStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBuildClipStatusRequest>, I>>(
    object: I,
  ): CBroadcastGetBuildClipStatusRequest {
    const message = createBaseCBroadcastGetBuildClipStatusRequest();
    message.broadcastClipId = object.broadcastClipId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBuildClipStatusResponse(): CBroadcastGetBuildClipStatusResponse {
  return {};
}

export const CBroadcastGetBuildClipStatusResponse = {
  encode(_: CBroadcastGetBuildClipStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBuildClipStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBuildClipStatusResponse();
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

  fromJSON(_: any): CBroadcastGetBuildClipStatusResponse {
    return {};
  },

  toJSON(_: CBroadcastGetBuildClipStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBuildClipStatusResponse>, I>>(
    base?: I,
  ): CBroadcastGetBuildClipStatusResponse {
    return CBroadcastGetBuildClipStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBuildClipStatusResponse>, I>>(
    _: I,
  ): CBroadcastGetBuildClipStatusResponse {
    const message = createBaseCBroadcastGetBuildClipStatusResponse();
    return message;
  },
};

function createBaseCBroadcastSetClipDetailsRequest(): CBroadcastSetClipDetailsRequest {
  return { broadcastClipId: "0", startTime: 0, endTime: 0, videoDescription: "" };
}

export const CBroadcastSetClipDetailsRequest = {
  encode(message: CBroadcastSetClipDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== "0") {
      writer.uint32(8).uint64(message.broadcastClipId);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).uint32(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(24).uint32(message.endTime);
    }
    if (message.videoDescription !== "") {
      writer.uint32(34).string(message.videoDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSetClipDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSetClipDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.startTime = reader.uint32();
          break;
        case 3:
          message.endTime = reader.uint32();
          break;
        case 4:
          message.videoDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastSetClipDetailsRequest {
    return {
      broadcastClipId: isSet(object.broadcastClipId) ? String(object.broadcastClipId) : "0",
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      videoDescription: isSet(object.videoDescription) ? String(object.videoDescription) : "",
    };
  },

  toJSON(message: CBroadcastSetClipDetailsRequest): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = message.broadcastClipId);
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    message.videoDescription !== undefined && (obj.videoDescription = message.videoDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSetClipDetailsRequest>, I>>(base?: I): CBroadcastSetClipDetailsRequest {
    return CBroadcastSetClipDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSetClipDetailsRequest>, I>>(
    object: I,
  ): CBroadcastSetClipDetailsRequest {
    const message = createBaseCBroadcastSetClipDetailsRequest();
    message.broadcastClipId = object.broadcastClipId ?? "0";
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.videoDescription = object.videoDescription ?? "";
    return message;
  },
};

function createBaseCBroadcastSetClipDetailsResponse(): CBroadcastSetClipDetailsResponse {
  return {};
}

export const CBroadcastSetClipDetailsResponse = {
  encode(_: CBroadcastSetClipDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSetClipDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSetClipDetailsResponse();
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

  fromJSON(_: any): CBroadcastSetClipDetailsResponse {
    return {};
  },

  toJSON(_: CBroadcastSetClipDetailsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSetClipDetailsResponse>, I>>(
    base?: I,
  ): CBroadcastSetClipDetailsResponse {
    return CBroadcastSetClipDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSetClipDetailsResponse>, I>>(
    _: I,
  ): CBroadcastSetClipDetailsResponse {
    const message = createBaseCBroadcastSetClipDetailsResponse();
    return message;
  },
};

function createBaseCBroadcastGetClipDetailsRequest(): CBroadcastGetClipDetailsRequest {
  return { broadcastClipId: "0" };
}

export const CBroadcastGetClipDetailsRequest = {
  encode(message: CBroadcastGetClipDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== "0") {
      writer.uint32(8).uint64(message.broadcastClipId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetClipDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetClipDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetClipDetailsRequest {
    return { broadcastClipId: isSet(object.broadcastClipId) ? String(object.broadcastClipId) : "0" };
  },

  toJSON(message: CBroadcastGetClipDetailsRequest): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = message.broadcastClipId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetClipDetailsRequest>, I>>(base?: I): CBroadcastGetClipDetailsRequest {
    return CBroadcastGetClipDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetClipDetailsRequest>, I>>(
    object: I,
  ): CBroadcastGetClipDetailsRequest {
    const message = createBaseCBroadcastGetClipDetailsRequest();
    message.broadcastClipId = object.broadcastClipId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetClipDetailsResponse(): CBroadcastGetClipDetailsResponse {
  return {
    broadcastClipId: "0",
    videoId: "0",
    channelId: "0",
    appId: 0,
    accountidBroadcaster: 0,
    accountidClipmaker: 0,
    videoDescription: "",
    startTime: 0,
    lengthMilliseconds: 0,
    thumbnailPath: "",
  };
}

export const CBroadcastGetClipDetailsResponse = {
  encode(message: CBroadcastGetClipDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== "0") {
      writer.uint32(8).uint64(message.broadcastClipId);
    }
    if (message.videoId !== "0") {
      writer.uint32(16).uint64(message.videoId);
    }
    if (message.channelId !== "0") {
      writer.uint32(24).uint64(message.channelId);
    }
    if (message.appId !== 0) {
      writer.uint32(32).uint32(message.appId);
    }
    if (message.accountidBroadcaster !== 0) {
      writer.uint32(40).uint32(message.accountidBroadcaster);
    }
    if (message.accountidClipmaker !== 0) {
      writer.uint32(48).uint32(message.accountidClipmaker);
    }
    if (message.videoDescription !== "") {
      writer.uint32(58).string(message.videoDescription);
    }
    if (message.startTime !== 0) {
      writer.uint32(64).uint32(message.startTime);
    }
    if (message.lengthMilliseconds !== 0) {
      writer.uint32(72).uint32(message.lengthMilliseconds);
    }
    if (message.thumbnailPath !== "") {
      writer.uint32(82).string(message.thumbnailPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetClipDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetClipDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.videoId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.channelId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.appId = reader.uint32();
          break;
        case 5:
          message.accountidBroadcaster = reader.uint32();
          break;
        case 6:
          message.accountidClipmaker = reader.uint32();
          break;
        case 7:
          message.videoDescription = reader.string();
          break;
        case 8:
          message.startTime = reader.uint32();
          break;
        case 9:
          message.lengthMilliseconds = reader.uint32();
          break;
        case 10:
          message.thumbnailPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetClipDetailsResponse {
    return {
      broadcastClipId: isSet(object.broadcastClipId) ? String(object.broadcastClipId) : "0",
      videoId: isSet(object.videoId) ? String(object.videoId) : "0",
      channelId: isSet(object.channelId) ? String(object.channelId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      accountidBroadcaster: isSet(object.accountidBroadcaster) ? Number(object.accountidBroadcaster) : 0,
      accountidClipmaker: isSet(object.accountidClipmaker) ? Number(object.accountidClipmaker) : 0,
      videoDescription: isSet(object.videoDescription) ? String(object.videoDescription) : "",
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      lengthMilliseconds: isSet(object.lengthMilliseconds) ? Number(object.lengthMilliseconds) : 0,
      thumbnailPath: isSet(object.thumbnailPath) ? String(object.thumbnailPath) : "",
    };
  },

  toJSON(message: CBroadcastGetClipDetailsResponse): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = message.broadcastClipId);
    message.videoId !== undefined && (obj.videoId = message.videoId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.accountidBroadcaster !== undefined && (obj.accountidBroadcaster = Math.round(message.accountidBroadcaster));
    message.accountidClipmaker !== undefined && (obj.accountidClipmaker = Math.round(message.accountidClipmaker));
    message.videoDescription !== undefined && (obj.videoDescription = message.videoDescription);
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.lengthMilliseconds !== undefined && (obj.lengthMilliseconds = Math.round(message.lengthMilliseconds));
    message.thumbnailPath !== undefined && (obj.thumbnailPath = message.thumbnailPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetClipDetailsResponse>, I>>(
    base?: I,
  ): CBroadcastGetClipDetailsResponse {
    return CBroadcastGetClipDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetClipDetailsResponse>, I>>(
    object: I,
  ): CBroadcastGetClipDetailsResponse {
    const message = createBaseCBroadcastGetClipDetailsResponse();
    message.broadcastClipId = object.broadcastClipId ?? "0";
    message.videoId = object.videoId ?? "0";
    message.channelId = object.channelId ?? "0";
    message.appId = object.appId ?? 0;
    message.accountidBroadcaster = object.accountidBroadcaster ?? 0;
    message.accountidClipmaker = object.accountidClipmaker ?? 0;
    message.videoDescription = object.videoDescription ?? "";
    message.startTime = object.startTime ?? 0;
    message.lengthMilliseconds = object.lengthMilliseconds ?? 0;
    message.thumbnailPath = object.thumbnailPath ?? "";
    return message;
  },
};

function createBaseCBroadcastSetRTMPInfoRequest(): CBroadcastSetRTMPInfoRequest {
  return {
    broadcastPermission: 0,
    updateToken: false,
    broadcastDelay: 0,
    appId: 0,
    requiredAppId: 0,
    broadcastChatPermission: 0,
    broadcastBuffer: 0,
    steamid: "0",
    chatRateLimit: 0,
    enableReplay: false,
    isPartnerChatOnly: false,
    wordbanList: "",
  };
}

export const CBroadcastSetRTMPInfoRequest = {
  encode(message: CBroadcastSetRTMPInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastPermission !== 0) {
      writer.uint32(8).int32(message.broadcastPermission);
    }
    if (message.updateToken === true) {
      writer.uint32(16).bool(message.updateToken);
    }
    if (message.broadcastDelay !== 0) {
      writer.uint32(24).int32(message.broadcastDelay);
    }
    if (message.appId !== 0) {
      writer.uint32(32).uint32(message.appId);
    }
    if (message.requiredAppId !== 0) {
      writer.uint32(40).uint32(message.requiredAppId);
    }
    if (message.broadcastChatPermission !== 0) {
      writer.uint32(48).int32(message.broadcastChatPermission);
    }
    if (message.broadcastBuffer !== 0) {
      writer.uint32(56).int32(message.broadcastBuffer);
    }
    if (message.steamid !== "0") {
      writer.uint32(65).fixed64(message.steamid);
    }
    if (message.chatRateLimit !== 0) {
      writer.uint32(72).uint32(message.chatRateLimit);
    }
    if (message.enableReplay === true) {
      writer.uint32(80).bool(message.enableReplay);
    }
    if (message.isPartnerChatOnly === true) {
      writer.uint32(88).bool(message.isPartnerChatOnly);
    }
    if (message.wordbanList !== "") {
      writer.uint32(98).string(message.wordbanList);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSetRTMPInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSetRTMPInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastPermission = reader.int32();
          break;
        case 2:
          message.updateToken = reader.bool();
          break;
        case 3:
          message.broadcastDelay = reader.int32();
          break;
        case 4:
          message.appId = reader.uint32();
          break;
        case 5:
          message.requiredAppId = reader.uint32();
          break;
        case 6:
          message.broadcastChatPermission = reader.int32() as any;
          break;
        case 7:
          message.broadcastBuffer = reader.int32();
          break;
        case 8:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 9:
          message.chatRateLimit = reader.uint32();
          break;
        case 10:
          message.enableReplay = reader.bool();
          break;
        case 11:
          message.isPartnerChatOnly = reader.bool();
          break;
        case 12:
          message.wordbanList = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastSetRTMPInfoRequest {
    return {
      broadcastPermission: isSet(object.broadcastPermission) ? Number(object.broadcastPermission) : 0,
      updateToken: isSet(object.updateToken) ? Boolean(object.updateToken) : false,
      broadcastDelay: isSet(object.broadcastDelay) ? Number(object.broadcastDelay) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      requiredAppId: isSet(object.requiredAppId) ? Number(object.requiredAppId) : 0,
      broadcastChatPermission: isSet(object.broadcastChatPermission)
        ? eBroadcastChatPermissionFromJSON(object.broadcastChatPermission)
        : 0,
      broadcastBuffer: isSet(object.broadcastBuffer) ? Number(object.broadcastBuffer) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      chatRateLimit: isSet(object.chatRateLimit) ? Number(object.chatRateLimit) : 0,
      enableReplay: isSet(object.enableReplay) ? Boolean(object.enableReplay) : false,
      isPartnerChatOnly: isSet(object.isPartnerChatOnly) ? Boolean(object.isPartnerChatOnly) : false,
      wordbanList: isSet(object.wordbanList) ? String(object.wordbanList) : "",
    };
  },

  toJSON(message: CBroadcastSetRTMPInfoRequest): unknown {
    const obj: any = {};
    message.broadcastPermission !== undefined && (obj.broadcastPermission = Math.round(message.broadcastPermission));
    message.updateToken !== undefined && (obj.updateToken = message.updateToken);
    message.broadcastDelay !== undefined && (obj.broadcastDelay = Math.round(message.broadcastDelay));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.requiredAppId !== undefined && (obj.requiredAppId = Math.round(message.requiredAppId));
    message.broadcastChatPermission !== undefined &&
      (obj.broadcastChatPermission = eBroadcastChatPermissionToJSON(message.broadcastChatPermission));
    message.broadcastBuffer !== undefined && (obj.broadcastBuffer = Math.round(message.broadcastBuffer));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.chatRateLimit !== undefined && (obj.chatRateLimit = Math.round(message.chatRateLimit));
    message.enableReplay !== undefined && (obj.enableReplay = message.enableReplay);
    message.isPartnerChatOnly !== undefined && (obj.isPartnerChatOnly = message.isPartnerChatOnly);
    message.wordbanList !== undefined && (obj.wordbanList = message.wordbanList);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSetRTMPInfoRequest>, I>>(base?: I): CBroadcastSetRTMPInfoRequest {
    return CBroadcastSetRTMPInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSetRTMPInfoRequest>, I>>(object: I): CBroadcastSetRTMPInfoRequest {
    const message = createBaseCBroadcastSetRTMPInfoRequest();
    message.broadcastPermission = object.broadcastPermission ?? 0;
    message.updateToken = object.updateToken ?? false;
    message.broadcastDelay = object.broadcastDelay ?? 0;
    message.appId = object.appId ?? 0;
    message.requiredAppId = object.requiredAppId ?? 0;
    message.broadcastChatPermission = object.broadcastChatPermission ?? 0;
    message.broadcastBuffer = object.broadcastBuffer ?? 0;
    message.steamid = object.steamid ?? "0";
    message.chatRateLimit = object.chatRateLimit ?? 0;
    message.enableReplay = object.enableReplay ?? false;
    message.isPartnerChatOnly = object.isPartnerChatOnly ?? false;
    message.wordbanList = object.wordbanList ?? "";
    return message;
  },
};

function createBaseCBroadcastSetRTMPInfoResponse(): CBroadcastSetRTMPInfoResponse {
  return {};
}

export const CBroadcastSetRTMPInfoResponse = {
  encode(_: CBroadcastSetRTMPInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSetRTMPInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSetRTMPInfoResponse();
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

  fromJSON(_: any): CBroadcastSetRTMPInfoResponse {
    return {};
  },

  toJSON(_: CBroadcastSetRTMPInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSetRTMPInfoResponse>, I>>(base?: I): CBroadcastSetRTMPInfoResponse {
    return CBroadcastSetRTMPInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSetRTMPInfoResponse>, I>>(_: I): CBroadcastSetRTMPInfoResponse {
    const message = createBaseCBroadcastSetRTMPInfoResponse();
    return message;
  },
};

function createBaseCBroadcastGetRTMPInfoRequest(): CBroadcastGetRTMPInfoRequest {
  return { ip: 0, steamid: "0" };
}

export const CBroadcastGetRTMPInfoRequest = {
  encode(message: CBroadcastGetRTMPInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(8).uint32(message.ip);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetRTMPInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetRTMPInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.uint32();
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetRTMPInfoRequest {
    return {
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CBroadcastGetRTMPInfoRequest): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetRTMPInfoRequest>, I>>(base?: I): CBroadcastGetRTMPInfoRequest {
    return CBroadcastGetRTMPInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetRTMPInfoRequest>, I>>(object: I): CBroadcastGetRTMPInfoRequest {
    const message = createBaseCBroadcastGetRTMPInfoRequest();
    message.ip = object.ip ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetRTMPInfoResponse(): CBroadcastGetRTMPInfoResponse {
  return {
    broadcastPermission: 0,
    rtmpHost: "",
    rtmpToken: "",
    broadcastDelay: 0,
    appId: 0,
    requiredAppId: 0,
    broadcastChatPermission: 0,
    broadcastBuffer: 0,
    steamid: "0",
    chatRateLimit: 0,
    enableReplay: false,
    isPartnerChatOnly: false,
    wordbanList: "",
  };
}

export const CBroadcastGetRTMPInfoResponse = {
  encode(message: CBroadcastGetRTMPInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastPermission !== 0) {
      writer.uint32(8).int32(message.broadcastPermission);
    }
    if (message.rtmpHost !== "") {
      writer.uint32(18).string(message.rtmpHost);
    }
    if (message.rtmpToken !== "") {
      writer.uint32(26).string(message.rtmpToken);
    }
    if (message.broadcastDelay !== 0) {
      writer.uint32(32).int32(message.broadcastDelay);
    }
    if (message.appId !== 0) {
      writer.uint32(40).uint32(message.appId);
    }
    if (message.requiredAppId !== 0) {
      writer.uint32(48).uint32(message.requiredAppId);
    }
    if (message.broadcastChatPermission !== 0) {
      writer.uint32(56).int32(message.broadcastChatPermission);
    }
    if (message.broadcastBuffer !== 0) {
      writer.uint32(64).int32(message.broadcastBuffer);
    }
    if (message.steamid !== "0") {
      writer.uint32(73).fixed64(message.steamid);
    }
    if (message.chatRateLimit !== 0) {
      writer.uint32(80).uint32(message.chatRateLimit);
    }
    if (message.enableReplay === true) {
      writer.uint32(88).bool(message.enableReplay);
    }
    if (message.isPartnerChatOnly === true) {
      writer.uint32(96).bool(message.isPartnerChatOnly);
    }
    if (message.wordbanList !== "") {
      writer.uint32(106).string(message.wordbanList);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetRTMPInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetRTMPInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastPermission = reader.int32();
          break;
        case 2:
          message.rtmpHost = reader.string();
          break;
        case 3:
          message.rtmpToken = reader.string();
          break;
        case 4:
          message.broadcastDelay = reader.int32();
          break;
        case 5:
          message.appId = reader.uint32();
          break;
        case 6:
          message.requiredAppId = reader.uint32();
          break;
        case 7:
          message.broadcastChatPermission = reader.int32() as any;
          break;
        case 8:
          message.broadcastBuffer = reader.int32();
          break;
        case 9:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 10:
          message.chatRateLimit = reader.uint32();
          break;
        case 11:
          message.enableReplay = reader.bool();
          break;
        case 12:
          message.isPartnerChatOnly = reader.bool();
          break;
        case 13:
          message.wordbanList = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetRTMPInfoResponse {
    return {
      broadcastPermission: isSet(object.broadcastPermission) ? Number(object.broadcastPermission) : 0,
      rtmpHost: isSet(object.rtmpHost) ? String(object.rtmpHost) : "",
      rtmpToken: isSet(object.rtmpToken) ? String(object.rtmpToken) : "",
      broadcastDelay: isSet(object.broadcastDelay) ? Number(object.broadcastDelay) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      requiredAppId: isSet(object.requiredAppId) ? Number(object.requiredAppId) : 0,
      broadcastChatPermission: isSet(object.broadcastChatPermission)
        ? eBroadcastChatPermissionFromJSON(object.broadcastChatPermission)
        : 0,
      broadcastBuffer: isSet(object.broadcastBuffer) ? Number(object.broadcastBuffer) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      chatRateLimit: isSet(object.chatRateLimit) ? Number(object.chatRateLimit) : 0,
      enableReplay: isSet(object.enableReplay) ? Boolean(object.enableReplay) : false,
      isPartnerChatOnly: isSet(object.isPartnerChatOnly) ? Boolean(object.isPartnerChatOnly) : false,
      wordbanList: isSet(object.wordbanList) ? String(object.wordbanList) : "",
    };
  },

  toJSON(message: CBroadcastGetRTMPInfoResponse): unknown {
    const obj: any = {};
    message.broadcastPermission !== undefined && (obj.broadcastPermission = Math.round(message.broadcastPermission));
    message.rtmpHost !== undefined && (obj.rtmpHost = message.rtmpHost);
    message.rtmpToken !== undefined && (obj.rtmpToken = message.rtmpToken);
    message.broadcastDelay !== undefined && (obj.broadcastDelay = Math.round(message.broadcastDelay));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.requiredAppId !== undefined && (obj.requiredAppId = Math.round(message.requiredAppId));
    message.broadcastChatPermission !== undefined &&
      (obj.broadcastChatPermission = eBroadcastChatPermissionToJSON(message.broadcastChatPermission));
    message.broadcastBuffer !== undefined && (obj.broadcastBuffer = Math.round(message.broadcastBuffer));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.chatRateLimit !== undefined && (obj.chatRateLimit = Math.round(message.chatRateLimit));
    message.enableReplay !== undefined && (obj.enableReplay = message.enableReplay);
    message.isPartnerChatOnly !== undefined && (obj.isPartnerChatOnly = message.isPartnerChatOnly);
    message.wordbanList !== undefined && (obj.wordbanList = message.wordbanList);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetRTMPInfoResponse>, I>>(base?: I): CBroadcastGetRTMPInfoResponse {
    return CBroadcastGetRTMPInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetRTMPInfoResponse>, I>>(
    object: I,
  ): CBroadcastGetRTMPInfoResponse {
    const message = createBaseCBroadcastGetRTMPInfoResponse();
    message.broadcastPermission = object.broadcastPermission ?? 0;
    message.rtmpHost = object.rtmpHost ?? "";
    message.rtmpToken = object.rtmpToken ?? "";
    message.broadcastDelay = object.broadcastDelay ?? 0;
    message.appId = object.appId ?? 0;
    message.requiredAppId = object.requiredAppId ?? 0;
    message.broadcastChatPermission = object.broadcastChatPermission ?? 0;
    message.broadcastBuffer = object.broadcastBuffer ?? 0;
    message.steamid = object.steamid ?? "0";
    message.chatRateLimit = object.chatRateLimit ?? 0;
    message.enableReplay = object.enableReplay ?? false;
    message.isPartnerChatOnly = object.isPartnerChatOnly ?? false;
    message.wordbanList = object.wordbanList ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCHaveTURNServerNotification(): CBroadcastWebRTCHaveTURNServerNotification {
  return { broadcastSessionId: "0", turnServer: "" };
}

export const CBroadcastWebRTCHaveTURNServerNotification = {
  encode(message: CBroadcastWebRTCHaveTURNServerNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastSessionId !== "0") {
      writer.uint32(9).fixed64(message.broadcastSessionId);
    }
    if (message.turnServer !== "") {
      writer.uint32(18).string(message.turnServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCHaveTURNServerNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCHaveTURNServerNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.turnServer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCHaveTURNServerNotification {
    return {
      broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0",
      turnServer: isSet(object.turnServer) ? String(object.turnServer) : "",
    };
  },

  toJSON(message: CBroadcastWebRTCHaveTURNServerNotification): unknown {
    const obj: any = {};
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    message.turnServer !== undefined && (obj.turnServer = message.turnServer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCHaveTURNServerNotification>, I>>(
    base?: I,
  ): CBroadcastWebRTCHaveTURNServerNotification {
    return CBroadcastWebRTCHaveTURNServerNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCHaveTURNServerNotification>, I>>(
    object: I,
  ): CBroadcastWebRTCHaveTURNServerNotification {
    const message = createBaseCBroadcastWebRTCHaveTURNServerNotification();
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    message.turnServer = object.turnServer ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCStartResultRequest(): CBroadcastWebRTCStartResultRequest {
  return { webrtcSessionId: "0", started: false, offer: "", resolutionX: 0, resolutionY: 0, fps: 0 };
}

export const CBroadcastWebRTCStartResultRequest = {
  encode(message: CBroadcastWebRTCStartResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webrtcSessionId !== "0") {
      writer.uint32(9).fixed64(message.webrtcSessionId);
    }
    if (message.started === true) {
      writer.uint32(16).bool(message.started);
    }
    if (message.offer !== "") {
      writer.uint32(26).string(message.offer);
    }
    if (message.resolutionX !== 0) {
      writer.uint32(32).uint32(message.resolutionX);
    }
    if (message.resolutionY !== 0) {
      writer.uint32(40).uint32(message.resolutionY);
    }
    if (message.fps !== 0) {
      writer.uint32(48).uint32(message.fps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCStartResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCStartResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.started = reader.bool();
          break;
        case 3:
          message.offer = reader.string();
          break;
        case 4:
          message.resolutionX = reader.uint32();
          break;
        case 5:
          message.resolutionY = reader.uint32();
          break;
        case 6:
          message.fps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCStartResultRequest {
    return {
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      started: isSet(object.started) ? Boolean(object.started) : false,
      offer: isSet(object.offer) ? String(object.offer) : "",
      resolutionX: isSet(object.resolutionX) ? Number(object.resolutionX) : 0,
      resolutionY: isSet(object.resolutionY) ? Number(object.resolutionY) : 0,
      fps: isSet(object.fps) ? Number(object.fps) : 0,
    };
  },

  toJSON(message: CBroadcastWebRTCStartResultRequest): unknown {
    const obj: any = {};
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.started !== undefined && (obj.started = message.started);
    message.offer !== undefined && (obj.offer = message.offer);
    message.resolutionX !== undefined && (obj.resolutionX = Math.round(message.resolutionX));
    message.resolutionY !== undefined && (obj.resolutionY = Math.round(message.resolutionY));
    message.fps !== undefined && (obj.fps = Math.round(message.fps));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCStartResultRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCStartResultRequest {
    return CBroadcastWebRTCStartResultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCStartResultRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCStartResultRequest {
    const message = createBaseCBroadcastWebRTCStartResultRequest();
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.started = object.started ?? false;
    message.offer = object.offer ?? "";
    message.resolutionX = object.resolutionX ?? 0;
    message.resolutionY = object.resolutionY ?? 0;
    message.fps = object.fps ?? 0;
    return message;
  },
};

function createBaseCBroadcastWebRTCStartResultResponse(): CBroadcastWebRTCStartResultResponse {
  return {};
}

export const CBroadcastWebRTCStartResultResponse = {
  encode(_: CBroadcastWebRTCStartResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCStartResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCStartResultResponse();
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

  fromJSON(_: any): CBroadcastWebRTCStartResultResponse {
    return {};
  },

  toJSON(_: CBroadcastWebRTCStartResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCStartResultResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCStartResultResponse {
    return CBroadcastWebRTCStartResultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCStartResultResponse>, I>>(
    _: I,
  ): CBroadcastWebRTCStartResultResponse {
    const message = createBaseCBroadcastWebRTCStartResultResponse();
    return message;
  },
};

function createBaseCBroadcastWebRTCStoppedRequest(): CBroadcastWebRTCStoppedRequest {
  return { webrtcSessionId: "0" };
}

export const CBroadcastWebRTCStoppedRequest = {
  encode(message: CBroadcastWebRTCStoppedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webrtcSessionId !== "0") {
      writer.uint32(9).fixed64(message.webrtcSessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCStoppedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCStoppedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCStoppedRequest {
    return { webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0" };
  },

  toJSON(message: CBroadcastWebRTCStoppedRequest): unknown {
    const obj: any = {};
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCStoppedRequest>, I>>(base?: I): CBroadcastWebRTCStoppedRequest {
    return CBroadcastWebRTCStoppedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCStoppedRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCStoppedRequest {
    const message = createBaseCBroadcastWebRTCStoppedRequest();
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    return message;
  },
};

function createBaseCBroadcastWebRTCStoppedResponse(): CBroadcastWebRTCStoppedResponse {
  return {};
}

export const CBroadcastWebRTCStoppedResponse = {
  encode(_: CBroadcastWebRTCStoppedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCStoppedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCStoppedResponse();
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

  fromJSON(_: any): CBroadcastWebRTCStoppedResponse {
    return {};
  },

  toJSON(_: CBroadcastWebRTCStoppedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCStoppedResponse>, I>>(base?: I): CBroadcastWebRTCStoppedResponse {
    return CBroadcastWebRTCStoppedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCStoppedResponse>, I>>(_: I): CBroadcastWebRTCStoppedResponse {
    const message = createBaseCBroadcastWebRTCStoppedResponse();
    return message;
  },
};

function createBaseCBroadcastWebRTCSetAnswerRequest(): CBroadcastWebRTCSetAnswerRequest {
  return { broadcasterSteamid: "0", webrtcSessionId: "0", answer: "" };
}

export const CBroadcastWebRTCSetAnswerRequest = {
  encode(message: CBroadcastWebRTCSetAnswerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcasterSteamid !== "0") {
      writer.uint32(9).fixed64(message.broadcasterSteamid);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.answer !== "") {
      writer.uint32(26).string(message.answer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCSetAnswerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCSetAnswerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasterSteamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.answer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCSetAnswerRequest {
    return {
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? String(object.broadcasterSteamid) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      answer: isSet(object.answer) ? String(object.answer) : "",
    };
  },

  toJSON(message: CBroadcastWebRTCSetAnswerRequest): unknown {
    const obj: any = {};
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = message.broadcasterSteamid);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.answer !== undefined && (obj.answer = message.answer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCSetAnswerRequest {
    return CBroadcastWebRTCSetAnswerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCSetAnswerRequest {
    const message = createBaseCBroadcastWebRTCSetAnswerRequest();
    message.broadcasterSteamid = object.broadcasterSteamid ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.answer = object.answer ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCSetAnswerResponse(): CBroadcastWebRTCSetAnswerResponse {
  return {};
}

export const CBroadcastWebRTCSetAnswerResponse = {
  encode(_: CBroadcastWebRTCSetAnswerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCSetAnswerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCSetAnswerResponse();
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

  fromJSON(_: any): CBroadcastWebRTCSetAnswerResponse {
    return {};
  },

  toJSON(_: CBroadcastWebRTCSetAnswerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCSetAnswerResponse {
    return CBroadcastWebRTCSetAnswerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerResponse>, I>>(
    _: I,
  ): CBroadcastWebRTCSetAnswerResponse {
    const message = createBaseCBroadcastWebRTCSetAnswerResponse();
    return message;
  },
};

function createBaseCBroadcastWebRTCLookupTURNServerRequest(): CBroadcastWebRTCLookupTURNServerRequest {
  return { cellid: 0 };
}

export const CBroadcastWebRTCLookupTURNServerRequest = {
  encode(message: CBroadcastWebRTCLookupTURNServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellid !== 0) {
      writer.uint32(8).uint32(message.cellid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCLookupTURNServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCLookupTURNServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCLookupTURNServerRequest {
    return { cellid: isSet(object.cellid) ? Number(object.cellid) : 0 };
  },

  toJSON(message: CBroadcastWebRTCLookupTURNServerRequest): unknown {
    const obj: any = {};
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCLookupTURNServerRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCLookupTURNServerRequest {
    return CBroadcastWebRTCLookupTURNServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCLookupTURNServerRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCLookupTURNServerRequest {
    const message = createBaseCBroadcastWebRTCLookupTURNServerRequest();
    message.cellid = object.cellid ?? 0;
    return message;
  },
};

function createBaseCBroadcastWebRTCLookupTURNServerResponse(): CBroadcastWebRTCLookupTURNServerResponse {
  return { turnServer: "" };
}

export const CBroadcastWebRTCLookupTURNServerResponse = {
  encode(message: CBroadcastWebRTCLookupTURNServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.turnServer !== "") {
      writer.uint32(10).string(message.turnServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCLookupTURNServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCLookupTURNServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turnServer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCLookupTURNServerResponse {
    return { turnServer: isSet(object.turnServer) ? String(object.turnServer) : "" };
  },

  toJSON(message: CBroadcastWebRTCLookupTURNServerResponse): unknown {
    const obj: any = {};
    message.turnServer !== undefined && (obj.turnServer = message.turnServer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCLookupTURNServerResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCLookupTURNServerResponse {
    return CBroadcastWebRTCLookupTURNServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCLookupTURNServerResponse>, I>>(
    object: I,
  ): CBroadcastWebRTCLookupTURNServerResponse {
    const message = createBaseCBroadcastWebRTCLookupTURNServerResponse();
    message.turnServer = object.turnServer ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCCandidate(): CBroadcastWebRTCCandidate {
  return { sdpMid: "", sdpMlineIndex: 0, candidate: "" };
}

export const CBroadcastWebRTCCandidate = {
  encode(message: CBroadcastWebRTCCandidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdpMid !== "") {
      writer.uint32(10).string(message.sdpMid);
    }
    if (message.sdpMlineIndex !== 0) {
      writer.uint32(16).int32(message.sdpMlineIndex);
    }
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCCandidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCCandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sdpMid = reader.string();
          break;
        case 2:
          message.sdpMlineIndex = reader.int32();
          break;
        case 3:
          message.candidate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCCandidate {
    return {
      sdpMid: isSet(object.sdpMid) ? String(object.sdpMid) : "",
      sdpMlineIndex: isSet(object.sdpMlineIndex) ? Number(object.sdpMlineIndex) : 0,
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
    };
  },

  toJSON(message: CBroadcastWebRTCCandidate): unknown {
    const obj: any = {};
    message.sdpMid !== undefined && (obj.sdpMid = message.sdpMid);
    message.sdpMlineIndex !== undefined && (obj.sdpMlineIndex = Math.round(message.sdpMlineIndex));
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCCandidate>, I>>(base?: I): CBroadcastWebRTCCandidate {
    return CBroadcastWebRTCCandidate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCCandidate>, I>>(object: I): CBroadcastWebRTCCandidate {
    const message = createBaseCBroadcastWebRTCCandidate();
    message.sdpMid = object.sdpMid ?? "";
    message.sdpMlineIndex = object.sdpMlineIndex ?? 0;
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCAddHostCandidateRequest(): CBroadcastWebRTCAddHostCandidateRequest {
  return { webrtcSessionId: "0", candidate: undefined };
}

export const CBroadcastWebRTCAddHostCandidateRequest = {
  encode(message: CBroadcastWebRTCAddHostCandidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webrtcSessionId !== "0") {
      writer.uint32(9).fixed64(message.webrtcSessionId);
    }
    if (message.candidate !== undefined) {
      CBroadcastWebRTCCandidate.encode(message.candidate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCAddHostCandidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCAddHostCandidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.candidate = CBroadcastWebRTCCandidate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCAddHostCandidateRequest {
    return {
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      candidate: isSet(object.candidate) ? CBroadcastWebRTCCandidate.fromJSON(object.candidate) : undefined,
    };
  },

  toJSON(message: CBroadcastWebRTCAddHostCandidateRequest): unknown {
    const obj: any = {};
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.candidate !== undefined &&
      (obj.candidate = message.candidate ? CBroadcastWebRTCCandidate.toJSON(message.candidate) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCAddHostCandidateRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCAddHostCandidateRequest {
    return CBroadcastWebRTCAddHostCandidateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCAddHostCandidateRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCAddHostCandidateRequest {
    const message = createBaseCBroadcastWebRTCAddHostCandidateRequest();
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.candidate = (object.candidate !== undefined && object.candidate !== null)
      ? CBroadcastWebRTCCandidate.fromPartial(object.candidate)
      : undefined;
    return message;
  },
};

function createBaseCBroadcastWebRTCAddHostCandidateResponse(): CBroadcastWebRTCAddHostCandidateResponse {
  return {};
}

export const CBroadcastWebRTCAddHostCandidateResponse = {
  encode(_: CBroadcastWebRTCAddHostCandidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCAddHostCandidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCAddHostCandidateResponse();
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

  fromJSON(_: any): CBroadcastWebRTCAddHostCandidateResponse {
    return {};
  },

  toJSON(_: CBroadcastWebRTCAddHostCandidateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCAddHostCandidateResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCAddHostCandidateResponse {
    return CBroadcastWebRTCAddHostCandidateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCAddHostCandidateResponse>, I>>(
    _: I,
  ): CBroadcastWebRTCAddHostCandidateResponse {
    const message = createBaseCBroadcastWebRTCAddHostCandidateResponse();
    return message;
  },
};

function createBaseCBroadcastWebRTCAddViewerCandidateRequest(): CBroadcastWebRTCAddViewerCandidateRequest {
  return { broadcasterSteamid: "0", webrtcSessionId: "0", candidate: undefined };
}

export const CBroadcastWebRTCAddViewerCandidateRequest = {
  encode(message: CBroadcastWebRTCAddViewerCandidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcasterSteamid !== "0") {
      writer.uint32(9).fixed64(message.broadcasterSteamid);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.candidate !== undefined) {
      CBroadcastWebRTCCandidate.encode(message.candidate, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCAddViewerCandidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCAddViewerCandidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasterSteamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.candidate = CBroadcastWebRTCCandidate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCAddViewerCandidateRequest {
    return {
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? String(object.broadcasterSteamid) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      candidate: isSet(object.candidate) ? CBroadcastWebRTCCandidate.fromJSON(object.candidate) : undefined,
    };
  },

  toJSON(message: CBroadcastWebRTCAddViewerCandidateRequest): unknown {
    const obj: any = {};
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = message.broadcasterSteamid);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.candidate !== undefined &&
      (obj.candidate = message.candidate ? CBroadcastWebRTCCandidate.toJSON(message.candidate) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCAddViewerCandidateRequest {
    return CBroadcastWebRTCAddViewerCandidateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCAddViewerCandidateRequest {
    const message = createBaseCBroadcastWebRTCAddViewerCandidateRequest();
    message.broadcasterSteamid = object.broadcasterSteamid ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.candidate = (object.candidate !== undefined && object.candidate !== null)
      ? CBroadcastWebRTCCandidate.fromPartial(object.candidate)
      : undefined;
    return message;
  },
};

function createBaseCBroadcastWebRTCAddViewerCandidateResponse(): CBroadcastWebRTCAddViewerCandidateResponse {
  return {};
}

export const CBroadcastWebRTCAddViewerCandidateResponse = {
  encode(_: CBroadcastWebRTCAddViewerCandidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCAddViewerCandidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCAddViewerCandidateResponse();
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

  fromJSON(_: any): CBroadcastWebRTCAddViewerCandidateResponse {
    return {};
  },

  toJSON(_: CBroadcastWebRTCAddViewerCandidateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCAddViewerCandidateResponse {
    return CBroadcastWebRTCAddViewerCandidateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateResponse>, I>>(
    _: I,
  ): CBroadcastWebRTCAddViewerCandidateResponse {
    const message = createBaseCBroadcastWebRTCAddViewerCandidateResponse();
    return message;
  },
};

function createBaseCBroadcastWebRTCGetHostCandidatesRequest(): CBroadcastWebRTCGetHostCandidatesRequest {
  return { broadcasterSteamid: "0", webrtcSessionId: "0", candidateGeneration: 0 };
}

export const CBroadcastWebRTCGetHostCandidatesRequest = {
  encode(message: CBroadcastWebRTCGetHostCandidatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcasterSteamid !== "0") {
      writer.uint32(9).fixed64(message.broadcasterSteamid);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.candidateGeneration !== 0) {
      writer.uint32(24).uint32(message.candidateGeneration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCGetHostCandidatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCGetHostCandidatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasterSteamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.candidateGeneration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCGetHostCandidatesRequest {
    return {
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? String(object.broadcasterSteamid) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      candidateGeneration: isSet(object.candidateGeneration) ? Number(object.candidateGeneration) : 0,
    };
  },

  toJSON(message: CBroadcastWebRTCGetHostCandidatesRequest): unknown {
    const obj: any = {};
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = message.broadcasterSteamid);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.candidateGeneration !== undefined && (obj.candidateGeneration = Math.round(message.candidateGeneration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCGetHostCandidatesRequest>, I>>(
    base?: I,
  ): CBroadcastWebRTCGetHostCandidatesRequest {
    return CBroadcastWebRTCGetHostCandidatesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCGetHostCandidatesRequest>, I>>(
    object: I,
  ): CBroadcastWebRTCGetHostCandidatesRequest {
    const message = createBaseCBroadcastWebRTCGetHostCandidatesRequest();
    message.broadcasterSteamid = object.broadcasterSteamid ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.candidateGeneration = object.candidateGeneration ?? 0;
    return message;
  },
};

function createBaseCBroadcastWebRTCGetHostCandidatesResponse(): CBroadcastWebRTCGetHostCandidatesResponse {
  return { candidateGeneration: 0, candidates: [] };
}

export const CBroadcastWebRTCGetHostCandidatesResponse = {
  encode(message: CBroadcastWebRTCGetHostCandidatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.candidateGeneration !== 0) {
      writer.uint32(8).uint32(message.candidateGeneration);
    }
    for (const v of message.candidates) {
      CBroadcastWebRTCCandidate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCGetHostCandidatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCGetHostCandidatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candidateGeneration = reader.uint32();
          break;
        case 2:
          message.candidates.push(CBroadcastWebRTCCandidate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCGetHostCandidatesResponse {
    return {
      candidateGeneration: isSet(object.candidateGeneration) ? Number(object.candidateGeneration) : 0,
      candidates: Array.isArray(object?.candidates)
        ? object.candidates.map((e: any) => CBroadcastWebRTCCandidate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CBroadcastWebRTCGetHostCandidatesResponse): unknown {
    const obj: any = {};
    message.candidateGeneration !== undefined && (obj.candidateGeneration = Math.round(message.candidateGeneration));
    if (message.candidates) {
      obj.candidates = message.candidates.map((e) => e ? CBroadcastWebRTCCandidate.toJSON(e) : undefined);
    } else {
      obj.candidates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCGetHostCandidatesResponse>, I>>(
    base?: I,
  ): CBroadcastWebRTCGetHostCandidatesResponse {
    return CBroadcastWebRTCGetHostCandidatesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCGetHostCandidatesResponse>, I>>(
    object: I,
  ): CBroadcastWebRTCGetHostCandidatesResponse {
    const message = createBaseCBroadcastWebRTCGetHostCandidatesResponse();
    message.candidateGeneration = object.candidateGeneration ?? 0;
    message.candidates = object.candidates?.map((e) => CBroadcastWebRTCCandidate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCBroadcastGetBroadcastUploadStatsRequest(): CBroadcastGetBroadcastUploadStatsRequest {
  return { rowLimit: 0, startTime: 0, uploadId: "0", steamid: "0", sessionId: "0" };
}

export const CBroadcastGetBroadcastUploadStatsRequest = {
  encode(message: CBroadcastGetBroadcastUploadStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rowLimit !== 0) {
      writer.uint32(8).uint32(message.rowLimit);
    }
    if (message.startTime !== 0) {
      writer.uint32(16).uint32(message.startTime);
    }
    if (message.uploadId !== "0") {
      writer.uint32(24).uint64(message.uploadId);
    }
    if (message.steamid !== "0") {
      writer.uint32(33).fixed64(message.steamid);
    }
    if (message.sessionId !== "0") {
      writer.uint32(40).uint64(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastUploadStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastUploadStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rowLimit = reader.uint32();
          break;
        case 2:
          message.startTime = reader.uint32();
          break;
        case 3:
          message.uploadId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.sessionId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastUploadStatsRequest {
    return {
      rowLimit: isSet(object.rowLimit) ? Number(object.rowLimit) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      uploadId: isSet(object.uploadId) ? String(object.uploadId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
    };
  },

  toJSON(message: CBroadcastGetBroadcastUploadStatsRequest): unknown {
    const obj: any = {};
    message.rowLimit !== undefined && (obj.rowLimit = Math.round(message.rowLimit));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.uploadId !== undefined && (obj.uploadId = message.uploadId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastUploadStatsRequest {
    return CBroadcastGetBroadcastUploadStatsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastUploadStatsRequest {
    const message = createBaseCBroadcastGetBroadcastUploadStatsRequest();
    message.rowLimit = object.rowLimit ?? 0;
    message.startTime = object.startTime ?? 0;
    message.uploadId = object.uploadId ?? "0";
    message.steamid = object.steamid ?? "0";
    message.sessionId = object.sessionId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastUploadStatsResponse(): CBroadcastGetBroadcastUploadStatsResponse {
  return { uploadStats: [] };
}

export const CBroadcastGetBroadcastUploadStatsResponse = {
  encode(message: CBroadcastGetBroadcastUploadStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uploadStats) {
      CBroadcastGetBroadcastUploadStatsResponse_UploadStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastUploadStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastUploadStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadStats.push(
            CBroadcastGetBroadcastUploadStatsResponse_UploadStats.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastUploadStatsResponse {
    return {
      uploadStats: Array.isArray(object?.uploadStats)
        ? object.uploadStats.map((e: any) => CBroadcastGetBroadcastUploadStatsResponse_UploadStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CBroadcastGetBroadcastUploadStatsResponse): unknown {
    const obj: any = {};
    if (message.uploadStats) {
      obj.uploadStats = message.uploadStats.map((e) =>
        e ? CBroadcastGetBroadcastUploadStatsResponse_UploadStats.toJSON(e) : undefined
      );
    } else {
      obj.uploadStats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastUploadStatsResponse {
    return CBroadcastGetBroadcastUploadStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastUploadStatsResponse {
    const message = createBaseCBroadcastGetBroadcastUploadStatsResponse();
    message.uploadStats =
      object.uploadStats?.map((e) => CBroadcastGetBroadcastUploadStatsResponse_UploadStats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCBroadcastGetBroadcastUploadStatsResponse_UploadStats(): CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
  return {
    uploadResult: 0,
    timeStopped: 0,
    secondsUploaded: 0,
    maxViewers: 0,
    resolutionX: 0,
    resolutionY: 0,
    avgBandwidth: 0,
    totalBytes: "0",
    appId: 0,
    totalUniqueViewers: 0,
    totalSecondsWatched: "0",
    timeStarted: 0,
    uploadId: "0",
    localAddress: "",
    remoteAddress: "",
    framesPerSecond: 0,
    numRepresentations: 0,
    appName: "",
    isReplay: false,
    sessionId: "0",
  };
}

export const CBroadcastGetBroadcastUploadStatsResponse_UploadStats = {
  encode(
    message: CBroadcastGetBroadcastUploadStatsResponse_UploadStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uploadResult !== 0) {
      writer.uint32(8).uint32(message.uploadResult);
    }
    if (message.timeStopped !== 0) {
      writer.uint32(16).uint32(message.timeStopped);
    }
    if (message.secondsUploaded !== 0) {
      writer.uint32(24).uint32(message.secondsUploaded);
    }
    if (message.maxViewers !== 0) {
      writer.uint32(32).uint32(message.maxViewers);
    }
    if (message.resolutionX !== 0) {
      writer.uint32(40).uint32(message.resolutionX);
    }
    if (message.resolutionY !== 0) {
      writer.uint32(48).uint32(message.resolutionY);
    }
    if (message.avgBandwidth !== 0) {
      writer.uint32(56).uint32(message.avgBandwidth);
    }
    if (message.totalBytes !== "0") {
      writer.uint32(64).uint64(message.totalBytes);
    }
    if (message.appId !== 0) {
      writer.uint32(72).uint32(message.appId);
    }
    if (message.totalUniqueViewers !== 0) {
      writer.uint32(80).uint32(message.totalUniqueViewers);
    }
    if (message.totalSecondsWatched !== "0") {
      writer.uint32(88).uint64(message.totalSecondsWatched);
    }
    if (message.timeStarted !== 0) {
      writer.uint32(96).uint32(message.timeStarted);
    }
    if (message.uploadId !== "0") {
      writer.uint32(104).uint64(message.uploadId);
    }
    if (message.localAddress !== "") {
      writer.uint32(114).string(message.localAddress);
    }
    if (message.remoteAddress !== "") {
      writer.uint32(122).string(message.remoteAddress);
    }
    if (message.framesPerSecond !== 0) {
      writer.uint32(128).uint32(message.framesPerSecond);
    }
    if (message.numRepresentations !== 0) {
      writer.uint32(136).uint32(message.numRepresentations);
    }
    if (message.appName !== "") {
      writer.uint32(146).string(message.appName);
    }
    if (message.isReplay === true) {
      writer.uint32(152).bool(message.isReplay);
    }
    if (message.sessionId !== "0") {
      writer.uint32(160).uint64(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastUploadStatsResponse_UploadStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadResult = reader.uint32();
          break;
        case 2:
          message.timeStopped = reader.uint32();
          break;
        case 3:
          message.secondsUploaded = reader.uint32();
          break;
        case 4:
          message.maxViewers = reader.uint32();
          break;
        case 5:
          message.resolutionX = reader.uint32();
          break;
        case 6:
          message.resolutionY = reader.uint32();
          break;
        case 7:
          message.avgBandwidth = reader.uint32();
          break;
        case 8:
          message.totalBytes = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.appId = reader.uint32();
          break;
        case 10:
          message.totalUniqueViewers = reader.uint32();
          break;
        case 11:
          message.totalSecondsWatched = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.timeStarted = reader.uint32();
          break;
        case 13:
          message.uploadId = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.localAddress = reader.string();
          break;
        case 15:
          message.remoteAddress = reader.string();
          break;
        case 16:
          message.framesPerSecond = reader.uint32();
          break;
        case 17:
          message.numRepresentations = reader.uint32();
          break;
        case 18:
          message.appName = reader.string();
          break;
        case 19:
          message.isReplay = reader.bool();
          break;
        case 20:
          message.sessionId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
    return {
      uploadResult: isSet(object.uploadResult) ? Number(object.uploadResult) : 0,
      timeStopped: isSet(object.timeStopped) ? Number(object.timeStopped) : 0,
      secondsUploaded: isSet(object.secondsUploaded) ? Number(object.secondsUploaded) : 0,
      maxViewers: isSet(object.maxViewers) ? Number(object.maxViewers) : 0,
      resolutionX: isSet(object.resolutionX) ? Number(object.resolutionX) : 0,
      resolutionY: isSet(object.resolutionY) ? Number(object.resolutionY) : 0,
      avgBandwidth: isSet(object.avgBandwidth) ? Number(object.avgBandwidth) : 0,
      totalBytes: isSet(object.totalBytes) ? String(object.totalBytes) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      totalUniqueViewers: isSet(object.totalUniqueViewers) ? Number(object.totalUniqueViewers) : 0,
      totalSecondsWatched: isSet(object.totalSecondsWatched) ? String(object.totalSecondsWatched) : "0",
      timeStarted: isSet(object.timeStarted) ? Number(object.timeStarted) : 0,
      uploadId: isSet(object.uploadId) ? String(object.uploadId) : "0",
      localAddress: isSet(object.localAddress) ? String(object.localAddress) : "",
      remoteAddress: isSet(object.remoteAddress) ? String(object.remoteAddress) : "",
      framesPerSecond: isSet(object.framesPerSecond) ? Number(object.framesPerSecond) : 0,
      numRepresentations: isSet(object.numRepresentations) ? Number(object.numRepresentations) : 0,
      appName: isSet(object.appName) ? String(object.appName) : "",
      isReplay: isSet(object.isReplay) ? Boolean(object.isReplay) : false,
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
    };
  },

  toJSON(message: CBroadcastGetBroadcastUploadStatsResponse_UploadStats): unknown {
    const obj: any = {};
    message.uploadResult !== undefined && (obj.uploadResult = Math.round(message.uploadResult));
    message.timeStopped !== undefined && (obj.timeStopped = Math.round(message.timeStopped));
    message.secondsUploaded !== undefined && (obj.secondsUploaded = Math.round(message.secondsUploaded));
    message.maxViewers !== undefined && (obj.maxViewers = Math.round(message.maxViewers));
    message.resolutionX !== undefined && (obj.resolutionX = Math.round(message.resolutionX));
    message.resolutionY !== undefined && (obj.resolutionY = Math.round(message.resolutionY));
    message.avgBandwidth !== undefined && (obj.avgBandwidth = Math.round(message.avgBandwidth));
    message.totalBytes !== undefined && (obj.totalBytes = message.totalBytes);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.totalUniqueViewers !== undefined && (obj.totalUniqueViewers = Math.round(message.totalUniqueViewers));
    message.totalSecondsWatched !== undefined && (obj.totalSecondsWatched = message.totalSecondsWatched);
    message.timeStarted !== undefined && (obj.timeStarted = Math.round(message.timeStarted));
    message.uploadId !== undefined && (obj.uploadId = message.uploadId);
    message.localAddress !== undefined && (obj.localAddress = message.localAddress);
    message.remoteAddress !== undefined && (obj.remoteAddress = message.remoteAddress);
    message.framesPerSecond !== undefined && (obj.framesPerSecond = Math.round(message.framesPerSecond));
    message.numRepresentations !== undefined && (obj.numRepresentations = Math.round(message.numRepresentations));
    message.appName !== undefined && (obj.appName = message.appName);
    message.isReplay !== undefined && (obj.isReplay = message.isReplay);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsResponse_UploadStats>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
    return CBroadcastGetBroadcastUploadStatsResponse_UploadStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastUploadStatsResponse_UploadStats>, I>>(
    object: I,
  ): CBroadcastGetBroadcastUploadStatsResponse_UploadStats {
    const message = createBaseCBroadcastGetBroadcastUploadStatsResponse_UploadStats();
    message.uploadResult = object.uploadResult ?? 0;
    message.timeStopped = object.timeStopped ?? 0;
    message.secondsUploaded = object.secondsUploaded ?? 0;
    message.maxViewers = object.maxViewers ?? 0;
    message.resolutionX = object.resolutionX ?? 0;
    message.resolutionY = object.resolutionY ?? 0;
    message.avgBandwidth = object.avgBandwidth ?? 0;
    message.totalBytes = object.totalBytes ?? "0";
    message.appId = object.appId ?? 0;
    message.totalUniqueViewers = object.totalUniqueViewers ?? 0;
    message.totalSecondsWatched = object.totalSecondsWatched ?? "0";
    message.timeStarted = object.timeStarted ?? 0;
    message.uploadId = object.uploadId ?? "0";
    message.localAddress = object.localAddress ?? "";
    message.remoteAddress = object.remoteAddress ?? "";
    message.framesPerSecond = object.framesPerSecond ?? 0;
    message.numRepresentations = object.numRepresentations ?? 0;
    message.appName = object.appName ?? "";
    message.isReplay = object.isReplay ?? false;
    message.sessionId = object.sessionId ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastViewerStatsRequest(): CBroadcastGetBroadcastViewerStatsRequest {
  return { uploadId: "0", steamid: "0" };
}

export const CBroadcastGetBroadcastViewerStatsRequest = {
  encode(message: CBroadcastGetBroadcastViewerStatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadId !== "0") {
      writer.uint32(8).uint64(message.uploadId);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastViewerStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastViewerStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastViewerStatsRequest {
    return {
      uploadId: isSet(object.uploadId) ? String(object.uploadId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CBroadcastGetBroadcastViewerStatsRequest): unknown {
    const obj: any = {};
    message.uploadId !== undefined && (obj.uploadId = message.uploadId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsRequest>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastViewerStatsRequest {
    return CBroadcastGetBroadcastViewerStatsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsRequest>, I>>(
    object: I,
  ): CBroadcastGetBroadcastViewerStatsRequest {
    const message = createBaseCBroadcastGetBroadcastViewerStatsRequest();
    message.uploadId = object.uploadId ?? "0";
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCBroadcastGetBroadcastViewerStatsResponse(): CBroadcastGetBroadcastViewerStatsResponse {
  return { viewerStats: [], countryStats: [] };
}

export const CBroadcastGetBroadcastViewerStatsResponse = {
  encode(message: CBroadcastGetBroadcastViewerStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.viewerStats) {
      CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.countryStats) {
      CBroadcastGetBroadcastViewerStatsResponse_CountryStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastViewerStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.viewerStats.push(
            CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.countryStats.push(
            CBroadcastGetBroadcastViewerStatsResponse_CountryStats.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastViewerStatsResponse {
    return {
      viewerStats: Array.isArray(object?.viewerStats)
        ? object.viewerStats.map((e: any) => CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.fromJSON(e))
        : [],
      countryStats: Array.isArray(object?.countryStats)
        ? object.countryStats.map((e: any) => CBroadcastGetBroadcastViewerStatsResponse_CountryStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CBroadcastGetBroadcastViewerStatsResponse): unknown {
    const obj: any = {};
    if (message.viewerStats) {
      obj.viewerStats = message.viewerStats.map((e) =>
        e ? CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.toJSON(e) : undefined
      );
    } else {
      obj.viewerStats = [];
    }
    if (message.countryStats) {
      obj.countryStats = message.countryStats.map((e) =>
        e ? CBroadcastGetBroadcastViewerStatsResponse_CountryStats.toJSON(e) : undefined
      );
    } else {
      obj.countryStats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastViewerStatsResponse {
    return CBroadcastGetBroadcastViewerStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse>, I>>(
    object: I,
  ): CBroadcastGetBroadcastViewerStatsResponse {
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse();
    message.viewerStats =
      object.viewerStats?.map((e) => CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.fromPartial(e)) || [];
    message.countryStats =
      object.countryStats?.map((e) => CBroadcastGetBroadcastViewerStatsResponse_CountryStats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCBroadcastGetBroadcastViewerStatsResponse_ViewerStats(): CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
  return { time: 0, numViewers: 0 };
}

export const CBroadcastGetBroadcastViewerStatsResponse_ViewerStats = {
  encode(
    message: CBroadcastGetBroadcastViewerStatsResponse_ViewerStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.numViewers !== 0) {
      writer.uint32(16).uint32(message.numViewers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse_ViewerStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.uint32();
          break;
        case 2:
          message.numViewers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
    };
  },

  toJSON(message: CBroadcastGetBroadcastViewerStatsResponse_ViewerStats): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse_ViewerStats>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
    return CBroadcastGetBroadcastViewerStatsResponse_ViewerStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse_ViewerStats>, I>>(
    object: I,
  ): CBroadcastGetBroadcastViewerStatsResponse_ViewerStats {
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse_ViewerStats();
    message.time = object.time ?? 0;
    message.numViewers = object.numViewers ?? 0;
    return message;
  },
};

function createBaseCBroadcastGetBroadcastViewerStatsResponse_CountryStats(): CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
  return { countryCode: "", numViewers: 0 };
}

export const CBroadcastGetBroadcastViewerStatsResponse_CountryStats = {
  encode(
    message: CBroadcastGetBroadcastViewerStatsResponse_CountryStats,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    if (message.numViewers !== 0) {
      writer.uint32(16).uint32(message.numViewers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse_CountryStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countryCode = reader.string();
          break;
        case 2:
          message.numViewers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
    };
  },

  toJSON(message: CBroadcastGetBroadcastViewerStatsResponse_CountryStats): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse_CountryStats>, I>>(
    base?: I,
  ): CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
    return CBroadcastGetBroadcastViewerStatsResponse_CountryStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastGetBroadcastViewerStatsResponse_CountryStats>, I>>(
    object: I,
  ): CBroadcastGetBroadcastViewerStatsResponse_CountryStats {
    const message = createBaseCBroadcastGetBroadcastViewerStatsResponse_CountryStats();
    message.countryCode = object.countryCode ?? "";
    message.numViewers = object.numViewers ?? 0;
    return message;
  },
};

function createBaseCBroadcastBroadcastViewerStateNotification(): CBroadcastBroadcastViewerStateNotification {
  return { steamid: "0", state: 1 };
}

export const CBroadcastBroadcastViewerStateNotification = {
  encode(message: CBroadcastBroadcastViewerStateNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.state !== 1) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBroadcastViewerStateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBroadcastViewerStateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBroadcastViewerStateNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      state: isSet(object.state) ? cBroadcastBroadcastViewerStateNotification_EViewerStateFromJSON(object.state) : 1,
    };
  },

  toJSON(message: CBroadcastBroadcastViewerStateNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.state !== undefined &&
      (obj.state = cBroadcastBroadcastViewerStateNotification_EViewerStateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBroadcastViewerStateNotification>, I>>(
    base?: I,
  ): CBroadcastBroadcastViewerStateNotification {
    return CBroadcastBroadcastViewerStateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBroadcastViewerStateNotification>, I>>(
    object: I,
  ): CBroadcastBroadcastViewerStateNotification {
    const message = createBaseCBroadcastBroadcastViewerStateNotification();
    message.steamid = object.steamid ?? "0";
    message.state = object.state ?? 1;
    return message;
  },
};

function createBaseCBroadcastWaitingBroadcastViewerNotification(): CBroadcastWaitingBroadcastViewerNotification {
  return { broadcastId: "0" };
}

export const CBroadcastWaitingBroadcastViewerNotification = {
  encode(message: CBroadcastWaitingBroadcastViewerNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWaitingBroadcastViewerNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWaitingBroadcastViewerNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWaitingBroadcastViewerNotification {
    return { broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0" };
  },

  toJSON(message: CBroadcastWaitingBroadcastViewerNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWaitingBroadcastViewerNotification>, I>>(
    base?: I,
  ): CBroadcastWaitingBroadcastViewerNotification {
    return CBroadcastWaitingBroadcastViewerNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWaitingBroadcastViewerNotification>, I>>(
    object: I,
  ): CBroadcastWaitingBroadcastViewerNotification {
    const message = createBaseCBroadcastWaitingBroadcastViewerNotification();
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastBroadcastUploadStartedNotification(): CBroadcastBroadcastUploadStartedNotification {
  return {
    broadcastId: "0",
    uploadToken: "",
    uploadAddress: "",
    httpAddress: "",
    broadcastUploadId: "0",
    heartbeatIntervalSeconds: 0,
    isRtmp: false,
  };
}

export const CBroadcastBroadcastUploadStartedNotification = {
  encode(message: CBroadcastBroadcastUploadStartedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    if (message.uploadToken !== "") {
      writer.uint32(18).string(message.uploadToken);
    }
    if (message.uploadAddress !== "") {
      writer.uint32(26).string(message.uploadAddress);
    }
    if (message.httpAddress !== "") {
      writer.uint32(34).string(message.httpAddress);
    }
    if (message.broadcastUploadId !== "0") {
      writer.uint32(41).fixed64(message.broadcastUploadId);
    }
    if (message.heartbeatIntervalSeconds !== 0) {
      writer.uint32(48).uint32(message.heartbeatIntervalSeconds);
    }
    if (message.isRtmp === true) {
      writer.uint32(56).bool(message.isRtmp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBroadcastUploadStartedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBroadcastUploadStartedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.uploadToken = reader.string();
          break;
        case 3:
          message.uploadAddress = reader.string();
          break;
        case 4:
          message.httpAddress = reader.string();
          break;
        case 5:
          message.broadcastUploadId = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.heartbeatIntervalSeconds = reader.uint32();
          break;
        case 7:
          message.isRtmp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBroadcastUploadStartedNotification {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "",
      uploadAddress: isSet(object.uploadAddress) ? String(object.uploadAddress) : "",
      httpAddress: isSet(object.httpAddress) ? String(object.httpAddress) : "",
      broadcastUploadId: isSet(object.broadcastUploadId) ? String(object.broadcastUploadId) : "0",
      heartbeatIntervalSeconds: isSet(object.heartbeatIntervalSeconds) ? Number(object.heartbeatIntervalSeconds) : 0,
      isRtmp: isSet(object.isRtmp) ? Boolean(object.isRtmp) : false,
    };
  },

  toJSON(message: CBroadcastBroadcastUploadStartedNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.uploadAddress !== undefined && (obj.uploadAddress = message.uploadAddress);
    message.httpAddress !== undefined && (obj.httpAddress = message.httpAddress);
    message.broadcastUploadId !== undefined && (obj.broadcastUploadId = message.broadcastUploadId);
    message.heartbeatIntervalSeconds !== undefined &&
      (obj.heartbeatIntervalSeconds = Math.round(message.heartbeatIntervalSeconds));
    message.isRtmp !== undefined && (obj.isRtmp = message.isRtmp);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBroadcastUploadStartedNotification>, I>>(
    base?: I,
  ): CBroadcastBroadcastUploadStartedNotification {
    return CBroadcastBroadcastUploadStartedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBroadcastUploadStartedNotification>, I>>(
    object: I,
  ): CBroadcastBroadcastUploadStartedNotification {
    const message = createBaseCBroadcastBroadcastUploadStartedNotification();
    message.broadcastId = object.broadcastId ?? "0";
    message.uploadToken = object.uploadToken ?? "";
    message.uploadAddress = object.uploadAddress ?? "";
    message.httpAddress = object.httpAddress ?? "";
    message.broadcastUploadId = object.broadcastUploadId ?? "0";
    message.heartbeatIntervalSeconds = object.heartbeatIntervalSeconds ?? 0;
    message.isRtmp = object.isRtmp ?? false;
    return message;
  },
};

function createBaseCBroadcastStopBroadcastUploadNotification(): CBroadcastStopBroadcastUploadNotification {
  return { broadcastId: "0", broadcastRelayId: "0", uploadResult: 0, tooManyPoorUploads: false };
}

export const CBroadcastStopBroadcastUploadNotification = {
  encode(message: CBroadcastStopBroadcastUploadNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    if (message.broadcastRelayId !== "0") {
      writer.uint32(17).fixed64(message.broadcastRelayId);
    }
    if (message.uploadResult !== 0) {
      writer.uint32(24).uint32(message.uploadResult);
    }
    if (message.tooManyPoorUploads === true) {
      writer.uint32(32).bool(message.tooManyPoorUploads);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastStopBroadcastUploadNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastStopBroadcastUploadNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastRelayId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.uploadResult = reader.uint32();
          break;
        case 4:
          message.tooManyPoorUploads = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastStopBroadcastUploadNotification {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      broadcastRelayId: isSet(object.broadcastRelayId) ? String(object.broadcastRelayId) : "0",
      uploadResult: isSet(object.uploadResult) ? Number(object.uploadResult) : 0,
      tooManyPoorUploads: isSet(object.tooManyPoorUploads) ? Boolean(object.tooManyPoorUploads) : false,
    };
  },

  toJSON(message: CBroadcastStopBroadcastUploadNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.broadcastRelayId !== undefined && (obj.broadcastRelayId = message.broadcastRelayId);
    message.uploadResult !== undefined && (obj.uploadResult = Math.round(message.uploadResult));
    message.tooManyPoorUploads !== undefined && (obj.tooManyPoorUploads = message.tooManyPoorUploads);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastStopBroadcastUploadNotification>, I>>(
    base?: I,
  ): CBroadcastStopBroadcastUploadNotification {
    return CBroadcastStopBroadcastUploadNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastStopBroadcastUploadNotification>, I>>(
    object: I,
  ): CBroadcastStopBroadcastUploadNotification {
    const message = createBaseCBroadcastStopBroadcastUploadNotification();
    message.broadcastId = object.broadcastId ?? "0";
    message.broadcastRelayId = object.broadcastRelayId ?? "0";
    message.uploadResult = object.uploadResult ?? 0;
    message.tooManyPoorUploads = object.tooManyPoorUploads ?? false;
    return message;
  },
};

function createBaseCBroadcastSessionClosedNotification(): CBroadcastSessionClosedNotification {
  return { broadcastId: "0" };
}

export const CBroadcastSessionClosedNotification = {
  encode(message: CBroadcastSessionClosedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSessionClosedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSessionClosedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastSessionClosedNotification {
    return { broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0" };
  },

  toJSON(message: CBroadcastSessionClosedNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSessionClosedNotification>, I>>(
    base?: I,
  ): CBroadcastSessionClosedNotification {
    return CBroadcastSessionClosedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSessionClosedNotification>, I>>(
    object: I,
  ): CBroadcastSessionClosedNotification {
    const message = createBaseCBroadcastSessionClosedNotification();
    message.broadcastId = object.broadcastId ?? "0";
    return message;
  },
};

function createBaseCBroadcastViewerBroadcastInviteNotification(): CBroadcastViewerBroadcastInviteNotification {
  return { broadcasterSteamid: "0" };
}

export const CBroadcastViewerBroadcastInviteNotification = {
  encode(message: CBroadcastViewerBroadcastInviteNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcasterSteamid !== "0") {
      writer.uint32(9).fixed64(message.broadcasterSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastViewerBroadcastInviteNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastViewerBroadcastInviteNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasterSteamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastViewerBroadcastInviteNotification {
    return { broadcasterSteamid: isSet(object.broadcasterSteamid) ? String(object.broadcasterSteamid) : "0" };
  },

  toJSON(message: CBroadcastViewerBroadcastInviteNotification): unknown {
    const obj: any = {};
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = message.broadcasterSteamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastViewerBroadcastInviteNotification>, I>>(
    base?: I,
  ): CBroadcastViewerBroadcastInviteNotification {
    return CBroadcastViewerBroadcastInviteNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastViewerBroadcastInviteNotification>, I>>(
    object: I,
  ): CBroadcastViewerBroadcastInviteNotification {
    const message = createBaseCBroadcastViewerBroadcastInviteNotification();
    message.broadcasterSteamid = object.broadcasterSteamid ?? "0";
    return message;
  },
};

function createBaseCBroadcastBroadcastStatusNotification(): CBroadcastBroadcastStatusNotification {
  return { broadcastId: "0", numViewers: 0 };
}

export const CBroadcastBroadcastStatusNotification = {
  encode(message: CBroadcastBroadcastStatusNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastId !== "0") {
      writer.uint32(9).fixed64(message.broadcastId);
    }
    if (message.numViewers !== 0) {
      writer.uint32(16).int32(message.numViewers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBroadcastStatusNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBroadcastStatusNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.numViewers = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBroadcastStatusNotification {
    return {
      broadcastId: isSet(object.broadcastId) ? String(object.broadcastId) : "0",
      numViewers: isSet(object.numViewers) ? Number(object.numViewers) : 0,
    };
  },

  toJSON(message: CBroadcastBroadcastStatusNotification): unknown {
    const obj: any = {};
    message.broadcastId !== undefined && (obj.broadcastId = message.broadcastId);
    message.numViewers !== undefined && (obj.numViewers = Math.round(message.numViewers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBroadcastStatusNotification>, I>>(
    base?: I,
  ): CBroadcastBroadcastStatusNotification {
    return CBroadcastBroadcastStatusNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBroadcastStatusNotification>, I>>(
    object: I,
  ): CBroadcastBroadcastStatusNotification {
    const message = createBaseCBroadcastBroadcastStatusNotification();
    message.broadcastId = object.broadcastId ?? "0";
    message.numViewers = object.numViewers ?? 0;
    return message;
  },
};

function createBaseCBroadcastBroadcastChannelLiveNotification(): CBroadcastBroadcastChannelLiveNotification {
  return { broadcastChannelId: "0", broadcastChannelName: "", broadcastChannelAvatar: "" };
}

export const CBroadcastBroadcastChannelLiveNotification = {
  encode(message: CBroadcastBroadcastChannelLiveNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== "0") {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.broadcastChannelName !== "") {
      writer.uint32(18).string(message.broadcastChannelName);
    }
    if (message.broadcastChannelAvatar !== "") {
      writer.uint32(26).string(message.broadcastChannelAvatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastBroadcastChannelLiveNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastBroadcastChannelLiveNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.broadcastChannelName = reader.string();
          break;
        case 3:
          message.broadcastChannelAvatar = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastBroadcastChannelLiveNotification {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? String(object.broadcastChannelId) : "0",
      broadcastChannelName: isSet(object.broadcastChannelName) ? String(object.broadcastChannelName) : "",
      broadcastChannelAvatar: isSet(object.broadcastChannelAvatar) ? String(object.broadcastChannelAvatar) : "",
    };
  },

  toJSON(message: CBroadcastBroadcastChannelLiveNotification): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = message.broadcastChannelId);
    message.broadcastChannelName !== undefined && (obj.broadcastChannelName = message.broadcastChannelName);
    message.broadcastChannelAvatar !== undefined && (obj.broadcastChannelAvatar = message.broadcastChannelAvatar);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastBroadcastChannelLiveNotification>, I>>(
    base?: I,
  ): CBroadcastBroadcastChannelLiveNotification {
    return CBroadcastBroadcastChannelLiveNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastBroadcastChannelLiveNotification>, I>>(
    object: I,
  ): CBroadcastBroadcastChannelLiveNotification {
    const message = createBaseCBroadcastBroadcastChannelLiveNotification();
    message.broadcastChannelId = object.broadcastChannelId ?? "0";
    message.broadcastChannelName = object.broadcastChannelName ?? "";
    message.broadcastChannelAvatar = object.broadcastChannelAvatar ?? "";
    return message;
  },
};

function createBaseCBroadcastSendThumbnailToRelayNotification(): CBroadcastSendThumbnailToRelayNotification {
  return {
    thumbnailUploadToken: "",
    thumbnailBroadcastSessionId: "0",
    thumbnailData: Buffer.alloc(0),
    thumbnailWidth: 0,
    thumbnailHeight: 0,
  };
}

export const CBroadcastSendThumbnailToRelayNotification = {
  encode(message: CBroadcastSendThumbnailToRelayNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.thumbnailUploadToken !== "") {
      writer.uint32(10).string(message.thumbnailUploadToken);
    }
    if (message.thumbnailBroadcastSessionId !== "0") {
      writer.uint32(17).fixed64(message.thumbnailBroadcastSessionId);
    }
    if (message.thumbnailData.length !== 0) {
      writer.uint32(26).bytes(message.thumbnailData);
    }
    if (message.thumbnailWidth !== 0) {
      writer.uint32(32).uint32(message.thumbnailWidth);
    }
    if (message.thumbnailHeight !== 0) {
      writer.uint32(40).uint32(message.thumbnailHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastSendThumbnailToRelayNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastSendThumbnailToRelayNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.thumbnailUploadToken = reader.string();
          break;
        case 2:
          message.thumbnailBroadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.thumbnailData = reader.bytes() as Buffer;
          break;
        case 4:
          message.thumbnailWidth = reader.uint32();
          break;
        case 5:
          message.thumbnailHeight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastSendThumbnailToRelayNotification {
    return {
      thumbnailUploadToken: isSet(object.thumbnailUploadToken) ? String(object.thumbnailUploadToken) : "",
      thumbnailBroadcastSessionId: isSet(object.thumbnailBroadcastSessionId)
        ? String(object.thumbnailBroadcastSessionId)
        : "0",
      thumbnailData: isSet(object.thumbnailData) ? Buffer.from(bytesFromBase64(object.thumbnailData)) : Buffer.alloc(0),
      thumbnailWidth: isSet(object.thumbnailWidth) ? Number(object.thumbnailWidth) : 0,
      thumbnailHeight: isSet(object.thumbnailHeight) ? Number(object.thumbnailHeight) : 0,
    };
  },

  toJSON(message: CBroadcastSendThumbnailToRelayNotification): unknown {
    const obj: any = {};
    message.thumbnailUploadToken !== undefined && (obj.thumbnailUploadToken = message.thumbnailUploadToken);
    message.thumbnailBroadcastSessionId !== undefined &&
      (obj.thumbnailBroadcastSessionId = message.thumbnailBroadcastSessionId);
    message.thumbnailData !== undefined &&
      (obj.thumbnailData = base64FromBytes(
        message.thumbnailData !== undefined ? message.thumbnailData : Buffer.alloc(0),
      ));
    message.thumbnailWidth !== undefined && (obj.thumbnailWidth = Math.round(message.thumbnailWidth));
    message.thumbnailHeight !== undefined && (obj.thumbnailHeight = Math.round(message.thumbnailHeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastSendThumbnailToRelayNotification>, I>>(
    base?: I,
  ): CBroadcastSendThumbnailToRelayNotification {
    return CBroadcastSendThumbnailToRelayNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastSendThumbnailToRelayNotification>, I>>(
    object: I,
  ): CBroadcastSendThumbnailToRelayNotification {
    const message = createBaseCBroadcastSendThumbnailToRelayNotification();
    message.thumbnailUploadToken = object.thumbnailUploadToken ?? "";
    message.thumbnailBroadcastSessionId = object.thumbnailBroadcastSessionId ?? "0";
    message.thumbnailData = object.thumbnailData ?? Buffer.alloc(0);
    message.thumbnailWidth = object.thumbnailWidth ?? 0;
    message.thumbnailHeight = object.thumbnailHeight ?? 0;
    return message;
  },
};

function createBaseCBroadcastWebRTCNeedTURNServerNotification(): CBroadcastWebRTCNeedTURNServerNotification {
  return { broadcastSessionId: "0" };
}

export const CBroadcastWebRTCNeedTURNServerNotification = {
  encode(message: CBroadcastWebRTCNeedTURNServerNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastSessionId !== "0") {
      writer.uint32(9).fixed64(message.broadcastSessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCNeedTURNServerNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCNeedTURNServerNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCNeedTURNServerNotification {
    return { broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0" };
  },

  toJSON(message: CBroadcastWebRTCNeedTURNServerNotification): unknown {
    const obj: any = {};
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCNeedTURNServerNotification>, I>>(
    base?: I,
  ): CBroadcastWebRTCNeedTURNServerNotification {
    return CBroadcastWebRTCNeedTURNServerNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCNeedTURNServerNotification>, I>>(
    object: I,
  ): CBroadcastWebRTCNeedTURNServerNotification {
    const message = createBaseCBroadcastWebRTCNeedTURNServerNotification();
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    return message;
  },
};

function createBaseCBroadcastWebRTCStartNotification(): CBroadcastWebRTCStartNotification {
  return { broadcastSessionId: "0", webrtcSessionId: "0", viewerSteamid: "0", viewerToken: "0" };
}

export const CBroadcastWebRTCStartNotification = {
  encode(message: CBroadcastWebRTCStartNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastSessionId !== "0") {
      writer.uint32(9).fixed64(message.broadcastSessionId);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.viewerSteamid !== "0") {
      writer.uint32(25).fixed64(message.viewerSteamid);
    }
    if (message.viewerToken !== "0") {
      writer.uint32(33).fixed64(message.viewerToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCStartNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCStartNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.viewerSteamid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.viewerToken = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCStartNotification {
    return {
      broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      viewerSteamid: isSet(object.viewerSteamid) ? String(object.viewerSteamid) : "0",
      viewerToken: isSet(object.viewerToken) ? String(object.viewerToken) : "0",
    };
  },

  toJSON(message: CBroadcastWebRTCStartNotification): unknown {
    const obj: any = {};
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.viewerSteamid !== undefined && (obj.viewerSteamid = message.viewerSteamid);
    message.viewerToken !== undefined && (obj.viewerToken = message.viewerToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCStartNotification>, I>>(
    base?: I,
  ): CBroadcastWebRTCStartNotification {
    return CBroadcastWebRTCStartNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCStartNotification>, I>>(
    object: I,
  ): CBroadcastWebRTCStartNotification {
    const message = createBaseCBroadcastWebRTCStartNotification();
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.viewerSteamid = object.viewerSteamid ?? "0";
    message.viewerToken = object.viewerToken ?? "0";
    return message;
  },
};

function createBaseCBroadcastWebRTCSetAnswerNotification(): CBroadcastWebRTCSetAnswerNotification {
  return { broadcastSessionId: "0", webrtcSessionId: "0", answer: "" };
}

export const CBroadcastWebRTCSetAnswerNotification = {
  encode(message: CBroadcastWebRTCSetAnswerNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastSessionId !== "0") {
      writer.uint32(9).fixed64(message.broadcastSessionId);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.answer !== "") {
      writer.uint32(26).string(message.answer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCSetAnswerNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCSetAnswerNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.answer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCSetAnswerNotification {
    return {
      broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      answer: isSet(object.answer) ? String(object.answer) : "",
    };
  },

  toJSON(message: CBroadcastWebRTCSetAnswerNotification): unknown {
    const obj: any = {};
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.answer !== undefined && (obj.answer = message.answer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerNotification>, I>>(
    base?: I,
  ): CBroadcastWebRTCSetAnswerNotification {
    return CBroadcastWebRTCSetAnswerNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCSetAnswerNotification>, I>>(
    object: I,
  ): CBroadcastWebRTCSetAnswerNotification {
    const message = createBaseCBroadcastWebRTCSetAnswerNotification();
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.answer = object.answer ?? "";
    return message;
  },
};

function createBaseCBroadcastWebRTCAddViewerCandidateNotification(): CBroadcastWebRTCAddViewerCandidateNotification {
  return { broadcastSessionId: "0", webrtcSessionId: "0", candidate: undefined };
}

export const CBroadcastWebRTCAddViewerCandidateNotification = {
  encode(
    message: CBroadcastWebRTCAddViewerCandidateNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.broadcastSessionId !== "0") {
      writer.uint32(9).fixed64(message.broadcastSessionId);
    }
    if (message.webrtcSessionId !== "0") {
      writer.uint32(17).fixed64(message.webrtcSessionId);
    }
    if (message.candidate !== undefined) {
      CBroadcastWebRTCCandidate.encode(message.candidate, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CBroadcastWebRTCAddViewerCandidateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCBroadcastWebRTCAddViewerCandidateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.webrtcSessionId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.candidate = CBroadcastWebRTCCandidate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CBroadcastWebRTCAddViewerCandidateNotification {
    return {
      broadcastSessionId: isSet(object.broadcastSessionId) ? String(object.broadcastSessionId) : "0",
      webrtcSessionId: isSet(object.webrtcSessionId) ? String(object.webrtcSessionId) : "0",
      candidate: isSet(object.candidate) ? CBroadcastWebRTCCandidate.fromJSON(object.candidate) : undefined,
    };
  },

  toJSON(message: CBroadcastWebRTCAddViewerCandidateNotification): unknown {
    const obj: any = {};
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = message.broadcastSessionId);
    message.webrtcSessionId !== undefined && (obj.webrtcSessionId = message.webrtcSessionId);
    message.candidate !== undefined &&
      (obj.candidate = message.candidate ? CBroadcastWebRTCCandidate.toJSON(message.candidate) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateNotification>, I>>(
    base?: I,
  ): CBroadcastWebRTCAddViewerCandidateNotification {
    return CBroadcastWebRTCAddViewerCandidateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CBroadcastWebRTCAddViewerCandidateNotification>, I>>(
    object: I,
  ): CBroadcastWebRTCAddViewerCandidateNotification {
    const message = createBaseCBroadcastWebRTCAddViewerCandidateNotification();
    message.broadcastSessionId = object.broadcastSessionId ?? "0";
    message.webrtcSessionId = object.webrtcSessionId ?? "0";
    message.candidate = (object.candidate !== undefined && object.candidate !== null)
      ? CBroadcastWebRTCCandidate.fromPartial(object.candidate)
      : undefined;
    return message;
  },
};

export interface Broadcast {
  BeginBroadcastSession(
    request: CBroadcastBeginBroadcastSessionRequest,
  ): Promise<CBroadcastBeginBroadcastSessionResponse>;
  EndBroadcastSession(request: CBroadcastEndBroadcastSessionRequest): Promise<CBroadcastEndBroadcastSessionResponse>;
  StartBroadcastUpload(request: CBroadcastStartBroadcastUploadRequest): Promise<CBroadcastStartBroadcastUploadResponse>;
  NotifyBroadcastUploadStop(request: CBroadcastNotifyBroadcastUploadStopNotification): Promise<NoResponse>;
  WatchBroadcast(request: CBroadcastWatchBroadcastRequest): Promise<CBroadcastWatchBroadcastResponse>;
  HeartbeatBroadcast(request: CBroadcastHeartbeatBroadcastNotification): Promise<NoResponse>;
  StopWatchingBroadcast(request: CBroadcastStopWatchingBroadcastNotification): Promise<NoResponse>;
  GetBroadcastStatus(request: CBroadcastGetBroadcastStatusRequest): Promise<CBroadcastGetBroadcastStatusResponse>;
  GetBroadcastThumbnail(
    request: CBroadcastGetBroadcastThumbnailRequest,
  ): Promise<CBroadcastGetBroadcastThumbnailResponse>;
  InviteToBroadcast(request: CBroadcastInviteToBroadcastRequest): Promise<CBroadcastInviteToBroadcastResponse>;
  SendBroadcastStateToServer(
    request: CBroadcastSendBroadcastStateToServerRequest,
  ): Promise<CBroadcastSendBroadcastStateToServerResponse>;
  NotifyBroadcastSessionHeartbeat(request: CBroadcastNotifyBroadcastSessionHeartbeatNotification): Promise<NoResponse>;
  GetBroadcastChatInfo(request: CBroadcastGetBroadcastChatInfoRequest): Promise<CBroadcastGetBroadcastChatInfoResponse>;
  PostChatMessage(request: CBroadcastPostChatMessageRequest): Promise<CBroadcastPostChatMessageResponse>;
  UpdateChatMessageFlair(
    request: CBroadcastUpdateChatMessageFlairRequest,
  ): Promise<CBroadcastUpdateChatMessageFlairResponse>;
  MuteBroadcastChatUser(
    request: CBroadcastMuteBroadcastChatUserRequest,
  ): Promise<CBroadcastMuteBroadcastChatUserResponse>;
  RemoveUserChatText(request: CBroadcastRemoveUserChatTextRequest): Promise<CBroadcastRemoveUserChatTextResponse>;
  GetBroadcastChatUserNames(
    request: CBroadcastGetBroadcastChatUserNamesRequest,
  ): Promise<CBroadcastGetBroadcastChatUserNamesResponse>;
  StartBuildClip(request: CBroadcastStartBuildClipRequest): Promise<CBroadcastStartBuildClipResponse>;
  GetBuildClipStatus(request: CBroadcastGetBuildClipStatusRequest): Promise<CBroadcastGetBuildClipStatusResponse>;
  SetClipDetails(request: CBroadcastSetClipDetailsRequest): Promise<CBroadcastSetClipDetailsResponse>;
  GetClipDetails(request: CBroadcastGetClipDetailsRequest): Promise<CBroadcastGetClipDetailsResponse>;
  SetRTMPInfo(request: CBroadcastSetRTMPInfoRequest): Promise<CBroadcastSetRTMPInfoResponse>;
  GetRTMPInfo(request: CBroadcastGetRTMPInfoRequest): Promise<CBroadcastGetRTMPInfoResponse>;
  NotifyWebRTCHaveTURNServer(request: CBroadcastWebRTCHaveTURNServerNotification): Promise<NoResponse>;
  WebRTCStartResult(request: CBroadcastWebRTCStartResultRequest): Promise<CBroadcastWebRTCStartResultResponse>;
  WebRTCStopped(request: CBroadcastWebRTCStoppedRequest): Promise<CBroadcastWebRTCStoppedResponse>;
  WebRTCSetAnswer(request: CBroadcastWebRTCSetAnswerRequest): Promise<CBroadcastWebRTCSetAnswerResponse>;
  WebRTCLookupTURNServer(
    request: CBroadcastWebRTCLookupTURNServerRequest,
  ): Promise<CBroadcastWebRTCLookupTURNServerResponse>;
  WebRTCAddHostCandidate(
    request: CBroadcastWebRTCAddHostCandidateRequest,
  ): Promise<CBroadcastWebRTCAddHostCandidateResponse>;
  WebRTCAddViewerCandidate(
    request: CBroadcastWebRTCAddViewerCandidateRequest,
  ): Promise<CBroadcastWebRTCAddViewerCandidateResponse>;
  WebRTCGetHostCandidates(
    request: CBroadcastWebRTCGetHostCandidatesRequest,
  ): Promise<CBroadcastWebRTCGetHostCandidatesResponse>;
  GetBroadcastUploadStats(
    request: CBroadcastGetBroadcastUploadStatsRequest,
  ): Promise<CBroadcastGetBroadcastUploadStatsResponse>;
  GetBroadcastViewerStats(
    request: CBroadcastGetBroadcastViewerStatsRequest,
  ): Promise<CBroadcastGetBroadcastViewerStatsResponse>;
}

export class BroadcastClientImpl implements Broadcast {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Broadcast";
    this.rpc = rpc;
    this.BeginBroadcastSession = this.BeginBroadcastSession.bind(this);
    this.EndBroadcastSession = this.EndBroadcastSession.bind(this);
    this.StartBroadcastUpload = this.StartBroadcastUpload.bind(this);
    this.NotifyBroadcastUploadStop = this.NotifyBroadcastUploadStop.bind(this);
    this.WatchBroadcast = this.WatchBroadcast.bind(this);
    this.HeartbeatBroadcast = this.HeartbeatBroadcast.bind(this);
    this.StopWatchingBroadcast = this.StopWatchingBroadcast.bind(this);
    this.GetBroadcastStatus = this.GetBroadcastStatus.bind(this);
    this.GetBroadcastThumbnail = this.GetBroadcastThumbnail.bind(this);
    this.InviteToBroadcast = this.InviteToBroadcast.bind(this);
    this.SendBroadcastStateToServer = this.SendBroadcastStateToServer.bind(this);
    this.NotifyBroadcastSessionHeartbeat = this.NotifyBroadcastSessionHeartbeat.bind(this);
    this.GetBroadcastChatInfo = this.GetBroadcastChatInfo.bind(this);
    this.PostChatMessage = this.PostChatMessage.bind(this);
    this.UpdateChatMessageFlair = this.UpdateChatMessageFlair.bind(this);
    this.MuteBroadcastChatUser = this.MuteBroadcastChatUser.bind(this);
    this.RemoveUserChatText = this.RemoveUserChatText.bind(this);
    this.GetBroadcastChatUserNames = this.GetBroadcastChatUserNames.bind(this);
    this.StartBuildClip = this.StartBuildClip.bind(this);
    this.GetBuildClipStatus = this.GetBuildClipStatus.bind(this);
    this.SetClipDetails = this.SetClipDetails.bind(this);
    this.GetClipDetails = this.GetClipDetails.bind(this);
    this.SetRTMPInfo = this.SetRTMPInfo.bind(this);
    this.GetRTMPInfo = this.GetRTMPInfo.bind(this);
    this.NotifyWebRTCHaveTURNServer = this.NotifyWebRTCHaveTURNServer.bind(this);
    this.WebRTCStartResult = this.WebRTCStartResult.bind(this);
    this.WebRTCStopped = this.WebRTCStopped.bind(this);
    this.WebRTCSetAnswer = this.WebRTCSetAnswer.bind(this);
    this.WebRTCLookupTURNServer = this.WebRTCLookupTURNServer.bind(this);
    this.WebRTCAddHostCandidate = this.WebRTCAddHostCandidate.bind(this);
    this.WebRTCAddViewerCandidate = this.WebRTCAddViewerCandidate.bind(this);
    this.WebRTCGetHostCandidates = this.WebRTCGetHostCandidates.bind(this);
    this.GetBroadcastUploadStats = this.GetBroadcastUploadStats.bind(this);
    this.GetBroadcastViewerStats = this.GetBroadcastViewerStats.bind(this);
  }
  BeginBroadcastSession(
    request: CBroadcastBeginBroadcastSessionRequest,
  ): Promise<CBroadcastBeginBroadcastSessionResponse> {
    const data = CBroadcastBeginBroadcastSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginBroadcastSession", data);
    return promise.then((data) => CBroadcastBeginBroadcastSessionResponse.decode(new _m0.Reader(data)));
  }

  EndBroadcastSession(request: CBroadcastEndBroadcastSessionRequest): Promise<CBroadcastEndBroadcastSessionResponse> {
    const data = CBroadcastEndBroadcastSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EndBroadcastSession", data);
    return promise.then((data) => CBroadcastEndBroadcastSessionResponse.decode(new _m0.Reader(data)));
  }

  StartBroadcastUpload(
    request: CBroadcastStartBroadcastUploadRequest,
  ): Promise<CBroadcastStartBroadcastUploadResponse> {
    const data = CBroadcastStartBroadcastUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartBroadcastUpload", data);
    return promise.then((data) => CBroadcastStartBroadcastUploadResponse.decode(new _m0.Reader(data)));
  }

  NotifyBroadcastUploadStop(request: CBroadcastNotifyBroadcastUploadStopNotification): Promise<NoResponse> {
    const data = CBroadcastNotifyBroadcastUploadStopNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastUploadStop", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  WatchBroadcast(request: CBroadcastWatchBroadcastRequest): Promise<CBroadcastWatchBroadcastResponse> {
    const data = CBroadcastWatchBroadcastRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WatchBroadcast", data);
    return promise.then((data) => CBroadcastWatchBroadcastResponse.decode(new _m0.Reader(data)));
  }

  HeartbeatBroadcast(request: CBroadcastHeartbeatBroadcastNotification): Promise<NoResponse> {
    const data = CBroadcastHeartbeatBroadcastNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "HeartbeatBroadcast", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  StopWatchingBroadcast(request: CBroadcastStopWatchingBroadcastNotification): Promise<NoResponse> {
    const data = CBroadcastStopWatchingBroadcastNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopWatchingBroadcast", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastStatus(request: CBroadcastGetBroadcastStatusRequest): Promise<CBroadcastGetBroadcastStatusResponse> {
    const data = CBroadcastGetBroadcastStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastStatus", data);
    return promise.then((data) => CBroadcastGetBroadcastStatusResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastThumbnail(
    request: CBroadcastGetBroadcastThumbnailRequest,
  ): Promise<CBroadcastGetBroadcastThumbnailResponse> {
    const data = CBroadcastGetBroadcastThumbnailRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastThumbnail", data);
    return promise.then((data) => CBroadcastGetBroadcastThumbnailResponse.decode(new _m0.Reader(data)));
  }

  InviteToBroadcast(request: CBroadcastInviteToBroadcastRequest): Promise<CBroadcastInviteToBroadcastResponse> {
    const data = CBroadcastInviteToBroadcastRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InviteToBroadcast", data);
    return promise.then((data) => CBroadcastInviteToBroadcastResponse.decode(new _m0.Reader(data)));
  }

  SendBroadcastStateToServer(
    request: CBroadcastSendBroadcastStateToServerRequest,
  ): Promise<CBroadcastSendBroadcastStateToServerResponse> {
    const data = CBroadcastSendBroadcastStateToServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendBroadcastStateToServer", data);
    return promise.then((data) => CBroadcastSendBroadcastStateToServerResponse.decode(new _m0.Reader(data)));
  }

  NotifyBroadcastSessionHeartbeat(request: CBroadcastNotifyBroadcastSessionHeartbeatNotification): Promise<NoResponse> {
    const data = CBroadcastNotifyBroadcastSessionHeartbeatNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastSessionHeartbeat", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChatInfo(
    request: CBroadcastGetBroadcastChatInfoRequest,
  ): Promise<CBroadcastGetBroadcastChatInfoResponse> {
    const data = CBroadcastGetBroadcastChatInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChatInfo", data);
    return promise.then((data) => CBroadcastGetBroadcastChatInfoResponse.decode(new _m0.Reader(data)));
  }

  PostChatMessage(request: CBroadcastPostChatMessageRequest): Promise<CBroadcastPostChatMessageResponse> {
    const data = CBroadcastPostChatMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostChatMessage", data);
    return promise.then((data) => CBroadcastPostChatMessageResponse.decode(new _m0.Reader(data)));
  }

  UpdateChatMessageFlair(
    request: CBroadcastUpdateChatMessageFlairRequest,
  ): Promise<CBroadcastUpdateChatMessageFlairResponse> {
    const data = CBroadcastUpdateChatMessageFlairRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateChatMessageFlair", data);
    return promise.then((data) => CBroadcastUpdateChatMessageFlairResponse.decode(new _m0.Reader(data)));
  }

  MuteBroadcastChatUser(
    request: CBroadcastMuteBroadcastChatUserRequest,
  ): Promise<CBroadcastMuteBroadcastChatUserResponse> {
    const data = CBroadcastMuteBroadcastChatUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MuteBroadcastChatUser", data);
    return promise.then((data) => CBroadcastMuteBroadcastChatUserResponse.decode(new _m0.Reader(data)));
  }

  RemoveUserChatText(request: CBroadcastRemoveUserChatTextRequest): Promise<CBroadcastRemoveUserChatTextResponse> {
    const data = CBroadcastRemoveUserChatTextRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveUserChatText", data);
    return promise.then((data) => CBroadcastRemoveUserChatTextResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChatUserNames(
    request: CBroadcastGetBroadcastChatUserNamesRequest,
  ): Promise<CBroadcastGetBroadcastChatUserNamesResponse> {
    const data = CBroadcastGetBroadcastChatUserNamesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChatUserNames", data);
    return promise.then((data) => CBroadcastGetBroadcastChatUserNamesResponse.decode(new _m0.Reader(data)));
  }

  StartBuildClip(request: CBroadcastStartBuildClipRequest): Promise<CBroadcastStartBuildClipResponse> {
    const data = CBroadcastStartBuildClipRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartBuildClip", data);
    return promise.then((data) => CBroadcastStartBuildClipResponse.decode(new _m0.Reader(data)));
  }

  GetBuildClipStatus(request: CBroadcastGetBuildClipStatusRequest): Promise<CBroadcastGetBuildClipStatusResponse> {
    const data = CBroadcastGetBuildClipStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBuildClipStatus", data);
    return promise.then((data) => CBroadcastGetBuildClipStatusResponse.decode(new _m0.Reader(data)));
  }

  SetClipDetails(request: CBroadcastSetClipDetailsRequest): Promise<CBroadcastSetClipDetailsResponse> {
    const data = CBroadcastSetClipDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetClipDetails", data);
    return promise.then((data) => CBroadcastSetClipDetailsResponse.decode(new _m0.Reader(data)));
  }

  GetClipDetails(request: CBroadcastGetClipDetailsRequest): Promise<CBroadcastGetClipDetailsResponse> {
    const data = CBroadcastGetClipDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClipDetails", data);
    return promise.then((data) => CBroadcastGetClipDetailsResponse.decode(new _m0.Reader(data)));
  }

  SetRTMPInfo(request: CBroadcastSetRTMPInfoRequest): Promise<CBroadcastSetRTMPInfoResponse> {
    const data = CBroadcastSetRTMPInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetRTMPInfo", data);
    return promise.then((data) => CBroadcastSetRTMPInfoResponse.decode(new _m0.Reader(data)));
  }

  GetRTMPInfo(request: CBroadcastGetRTMPInfoRequest): Promise<CBroadcastGetRTMPInfoResponse> {
    const data = CBroadcastGetRTMPInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRTMPInfo", data);
    return promise.then((data) => CBroadcastGetRTMPInfoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWebRTCHaveTURNServer(request: CBroadcastWebRTCHaveTURNServerNotification): Promise<NoResponse> {
    const data = CBroadcastWebRTCHaveTURNServerNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWebRTCHaveTURNServer", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  WebRTCStartResult(request: CBroadcastWebRTCStartResultRequest): Promise<CBroadcastWebRTCStartResultResponse> {
    const data = CBroadcastWebRTCStartResultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCStartResult", data);
    return promise.then((data) => CBroadcastWebRTCStartResultResponse.decode(new _m0.Reader(data)));
  }

  WebRTCStopped(request: CBroadcastWebRTCStoppedRequest): Promise<CBroadcastWebRTCStoppedResponse> {
    const data = CBroadcastWebRTCStoppedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCStopped", data);
    return promise.then((data) => CBroadcastWebRTCStoppedResponse.decode(new _m0.Reader(data)));
  }

  WebRTCSetAnswer(request: CBroadcastWebRTCSetAnswerRequest): Promise<CBroadcastWebRTCSetAnswerResponse> {
    const data = CBroadcastWebRTCSetAnswerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCSetAnswer", data);
    return promise.then((data) => CBroadcastWebRTCSetAnswerResponse.decode(new _m0.Reader(data)));
  }

  WebRTCLookupTURNServer(
    request: CBroadcastWebRTCLookupTURNServerRequest,
  ): Promise<CBroadcastWebRTCLookupTURNServerResponse> {
    const data = CBroadcastWebRTCLookupTURNServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCLookupTURNServer", data);
    return promise.then((data) => CBroadcastWebRTCLookupTURNServerResponse.decode(new _m0.Reader(data)));
  }

  WebRTCAddHostCandidate(
    request: CBroadcastWebRTCAddHostCandidateRequest,
  ): Promise<CBroadcastWebRTCAddHostCandidateResponse> {
    const data = CBroadcastWebRTCAddHostCandidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCAddHostCandidate", data);
    return promise.then((data) => CBroadcastWebRTCAddHostCandidateResponse.decode(new _m0.Reader(data)));
  }

  WebRTCAddViewerCandidate(
    request: CBroadcastWebRTCAddViewerCandidateRequest,
  ): Promise<CBroadcastWebRTCAddViewerCandidateResponse> {
    const data = CBroadcastWebRTCAddViewerCandidateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCAddViewerCandidate", data);
    return promise.then((data) => CBroadcastWebRTCAddViewerCandidateResponse.decode(new _m0.Reader(data)));
  }

  WebRTCGetHostCandidates(
    request: CBroadcastWebRTCGetHostCandidatesRequest,
  ): Promise<CBroadcastWebRTCGetHostCandidatesResponse> {
    const data = CBroadcastWebRTCGetHostCandidatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "WebRTCGetHostCandidates", data);
    return promise.then((data) => CBroadcastWebRTCGetHostCandidatesResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastUploadStats(
    request: CBroadcastGetBroadcastUploadStatsRequest,
  ): Promise<CBroadcastGetBroadcastUploadStatsResponse> {
    const data = CBroadcastGetBroadcastUploadStatsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastUploadStats", data);
    return promise.then((data) => CBroadcastGetBroadcastUploadStatsResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastViewerStats(
    request: CBroadcastGetBroadcastViewerStatsRequest,
  ): Promise<CBroadcastGetBroadcastViewerStatsResponse> {
    const data = CBroadcastGetBroadcastViewerStatsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastViewerStats", data);
    return promise.then((data) => CBroadcastGetBroadcastViewerStatsResponse.decode(new _m0.Reader(data)));
  }
}

export interface BroadcastClient {
  NotifyBroadcastViewerState(request: CBroadcastBroadcastViewerStateNotification): Promise<NoResponse>;
  NotifyWaitingBroadcastViewer(request: CBroadcastWaitingBroadcastViewerNotification): Promise<NoResponse>;
  NotifyBroadcastUploadStarted(request: CBroadcastBroadcastUploadStartedNotification): Promise<NoResponse>;
  NotifyStopBroadcastUpload(request: CBroadcastStopBroadcastUploadNotification): Promise<NoResponse>;
  NotifySessionClosed(request: CBroadcastSessionClosedNotification): Promise<NoResponse>;
  NotifyViewerBroadcastInvite(request: CBroadcastViewerBroadcastInviteNotification): Promise<NoResponse>;
  NotifyBroadcastStatus(request: CBroadcastBroadcastStatusNotification): Promise<NoResponse>;
  NotifyBroadcastChannelLive(request: CBroadcastBroadcastChannelLiveNotification): Promise<NoResponse>;
  SendThumbnailToRelay(request: CBroadcastSendThumbnailToRelayNotification): Promise<NoResponse>;
  NotifyWebRTCNeedTURNServer(request: CBroadcastWebRTCNeedTURNServerNotification): Promise<NoResponse>;
  NotifyWebRTCStart(request: CBroadcastWebRTCStartNotification): Promise<NoResponse>;
  NotifyWebRTCSetAnswer(request: CBroadcastWebRTCSetAnswerNotification): Promise<NoResponse>;
  NotifyWebRTCAddViewerCandidate(request: CBroadcastWebRTCAddViewerCandidateNotification): Promise<NoResponse>;
}

export class BroadcastClientClientImpl implements BroadcastClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "BroadcastClient";
    this.rpc = rpc;
    this.NotifyBroadcastViewerState = this.NotifyBroadcastViewerState.bind(this);
    this.NotifyWaitingBroadcastViewer = this.NotifyWaitingBroadcastViewer.bind(this);
    this.NotifyBroadcastUploadStarted = this.NotifyBroadcastUploadStarted.bind(this);
    this.NotifyStopBroadcastUpload = this.NotifyStopBroadcastUpload.bind(this);
    this.NotifySessionClosed = this.NotifySessionClosed.bind(this);
    this.NotifyViewerBroadcastInvite = this.NotifyViewerBroadcastInvite.bind(this);
    this.NotifyBroadcastStatus = this.NotifyBroadcastStatus.bind(this);
    this.NotifyBroadcastChannelLive = this.NotifyBroadcastChannelLive.bind(this);
    this.SendThumbnailToRelay = this.SendThumbnailToRelay.bind(this);
    this.NotifyWebRTCNeedTURNServer = this.NotifyWebRTCNeedTURNServer.bind(this);
    this.NotifyWebRTCStart = this.NotifyWebRTCStart.bind(this);
    this.NotifyWebRTCSetAnswer = this.NotifyWebRTCSetAnswer.bind(this);
    this.NotifyWebRTCAddViewerCandidate = this.NotifyWebRTCAddViewerCandidate.bind(this);
  }
  NotifyBroadcastViewerState(request: CBroadcastBroadcastViewerStateNotification): Promise<NoResponse> {
    const data = CBroadcastBroadcastViewerStateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastViewerState", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWaitingBroadcastViewer(request: CBroadcastWaitingBroadcastViewerNotification): Promise<NoResponse> {
    const data = CBroadcastWaitingBroadcastViewerNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWaitingBroadcastViewer", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyBroadcastUploadStarted(request: CBroadcastBroadcastUploadStartedNotification): Promise<NoResponse> {
    const data = CBroadcastBroadcastUploadStartedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastUploadStarted", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyStopBroadcastUpload(request: CBroadcastStopBroadcastUploadNotification): Promise<NoResponse> {
    const data = CBroadcastStopBroadcastUploadNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyStopBroadcastUpload", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifySessionClosed(request: CBroadcastSessionClosedNotification): Promise<NoResponse> {
    const data = CBroadcastSessionClosedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifySessionClosed", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyViewerBroadcastInvite(request: CBroadcastViewerBroadcastInviteNotification): Promise<NoResponse> {
    const data = CBroadcastViewerBroadcastInviteNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyViewerBroadcastInvite", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyBroadcastStatus(request: CBroadcastBroadcastStatusNotification): Promise<NoResponse> {
    const data = CBroadcastBroadcastStatusNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastStatus", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyBroadcastChannelLive(request: CBroadcastBroadcastChannelLiveNotification): Promise<NoResponse> {
    const data = CBroadcastBroadcastChannelLiveNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyBroadcastChannelLive", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SendThumbnailToRelay(request: CBroadcastSendThumbnailToRelayNotification): Promise<NoResponse> {
    const data = CBroadcastSendThumbnailToRelayNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendThumbnailToRelay", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWebRTCNeedTURNServer(request: CBroadcastWebRTCNeedTURNServerNotification): Promise<NoResponse> {
    const data = CBroadcastWebRTCNeedTURNServerNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWebRTCNeedTURNServer", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWebRTCStart(request: CBroadcastWebRTCStartNotification): Promise<NoResponse> {
    const data = CBroadcastWebRTCStartNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWebRTCStart", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWebRTCSetAnswer(request: CBroadcastWebRTCSetAnswerNotification): Promise<NoResponse> {
    const data = CBroadcastWebRTCSetAnswerNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWebRTCSetAnswer", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyWebRTCAddViewerCandidate(request: CBroadcastWebRTCAddViewerCandidateNotification): Promise<NoResponse> {
    const data = CBroadcastWebRTCAddViewerCandidateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyWebRTCAddViewerCandidate", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
