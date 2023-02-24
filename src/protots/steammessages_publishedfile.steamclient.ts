/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  EBanContentCheckResult,
  eBanContentCheckResultFromJSON,
  eBanContentCheckResultToJSON,
} from "./steammessages_base";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EPublishedFileRevision {
  k_EPublishedFileRevision_Default = 0,
  k_EPublishedFileRevision_Latest = 1,
  k_EPublishedFileRevision_ApprovedSnapshot = 2,
  k_EPublishedFileRevision_ApprovedSnapshot_China = 3,
  k_EPublishedFileRevision_RejectedSnapshot = 4,
  k_EPublishedFileRevision_RejectedSnapshot_China = 5,
  UNRECOGNIZED = -1,
}

export function ePublishedFileRevisionFromJSON(object: any): EPublishedFileRevision {
  switch (object) {
    case 0:
    case "k_EPublishedFileRevision_Default":
      return EPublishedFileRevision.k_EPublishedFileRevision_Default;
    case 1:
    case "k_EPublishedFileRevision_Latest":
      return EPublishedFileRevision.k_EPublishedFileRevision_Latest;
    case 2:
    case "k_EPublishedFileRevision_ApprovedSnapshot":
      return EPublishedFileRevision.k_EPublishedFileRevision_ApprovedSnapshot;
    case 3:
    case "k_EPublishedFileRevision_ApprovedSnapshot_China":
      return EPublishedFileRevision.k_EPublishedFileRevision_ApprovedSnapshot_China;
    case 4:
    case "k_EPublishedFileRevision_RejectedSnapshot":
      return EPublishedFileRevision.k_EPublishedFileRevision_RejectedSnapshot;
    case 5:
    case "k_EPublishedFileRevision_RejectedSnapshot_China":
      return EPublishedFileRevision.k_EPublishedFileRevision_RejectedSnapshot_China;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileRevision.UNRECOGNIZED;
  }
}

export function ePublishedFileRevisionToJSON(object: EPublishedFileRevision): string {
  switch (object) {
    case EPublishedFileRevision.k_EPublishedFileRevision_Default:
      return "k_EPublishedFileRevision_Default";
    case EPublishedFileRevision.k_EPublishedFileRevision_Latest:
      return "k_EPublishedFileRevision_Latest";
    case EPublishedFileRevision.k_EPublishedFileRevision_ApprovedSnapshot:
      return "k_EPublishedFileRevision_ApprovedSnapshot";
    case EPublishedFileRevision.k_EPublishedFileRevision_ApprovedSnapshot_China:
      return "k_EPublishedFileRevision_ApprovedSnapshot_China";
    case EPublishedFileRevision.k_EPublishedFileRevision_RejectedSnapshot:
      return "k_EPublishedFileRevision_RejectedSnapshot";
    case EPublishedFileRevision.k_EPublishedFileRevision_RejectedSnapshot_China:
      return "k_EPublishedFileRevision_RejectedSnapshot_China";
    case EPublishedFileRevision.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPublishedFileForSaleStatus {
  k_PFFSS_NotForSale = 0,
  k_PFFSS_PendingApproval = 1,
  k_PFFSS_ApprovedForSale = 2,
  k_PFFSS_RejectedForSale = 3,
  k_PFFSS_NoLongerForSale = 4,
  k_PFFSS_TentativeApproval = 5,
  UNRECOGNIZED = -1,
}

export function ePublishedFileForSaleStatusFromJSON(object: any): EPublishedFileForSaleStatus {
  switch (object) {
    case 0:
    case "k_PFFSS_NotForSale":
      return EPublishedFileForSaleStatus.k_PFFSS_NotForSale;
    case 1:
    case "k_PFFSS_PendingApproval":
      return EPublishedFileForSaleStatus.k_PFFSS_PendingApproval;
    case 2:
    case "k_PFFSS_ApprovedForSale":
      return EPublishedFileForSaleStatus.k_PFFSS_ApprovedForSale;
    case 3:
    case "k_PFFSS_RejectedForSale":
      return EPublishedFileForSaleStatus.k_PFFSS_RejectedForSale;
    case 4:
    case "k_PFFSS_NoLongerForSale":
      return EPublishedFileForSaleStatus.k_PFFSS_NoLongerForSale;
    case 5:
    case "k_PFFSS_TentativeApproval":
      return EPublishedFileForSaleStatus.k_PFFSS_TentativeApproval;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileForSaleStatus.UNRECOGNIZED;
  }
}

export function ePublishedFileForSaleStatusToJSON(object: EPublishedFileForSaleStatus): string {
  switch (object) {
    case EPublishedFileForSaleStatus.k_PFFSS_NotForSale:
      return "k_PFFSS_NotForSale";
    case EPublishedFileForSaleStatus.k_PFFSS_PendingApproval:
      return "k_PFFSS_PendingApproval";
    case EPublishedFileForSaleStatus.k_PFFSS_ApprovedForSale:
      return "k_PFFSS_ApprovedForSale";
    case EPublishedFileForSaleStatus.k_PFFSS_RejectedForSale:
      return "k_PFFSS_RejectedForSale";
    case EPublishedFileForSaleStatus.k_PFFSS_NoLongerForSale:
      return "k_PFFSS_NoLongerForSale";
    case EPublishedFileForSaleStatus.k_PFFSS_TentativeApproval:
      return "k_PFFSS_TentativeApproval";
    case EPublishedFileForSaleStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CPublishedFileVoteRequest {
  publishedfileid: number;
  voteUp: boolean;
}

export interface CPublishedFileVoteResponse {
}

export interface CPublishedFileSubscribeRequest {
  publishedfileid: number;
  listType: number;
  appid: number;
  notifyClient: boolean;
}

export interface CPublishedFileSubscribeResponse {
}

export interface CPublishedFileUnsubscribeRequest {
  publishedfileid: number;
  listType: number;
  appid: number;
  notifyClient: boolean;
}

export interface CPublishedFileUnsubscribeResponse {
}

export interface CPublishedFileCanSubscribeRequest {
  publishedfileid: number;
}

export interface CPublishedFileCanSubscribeResponse {
  canSubscribe: boolean;
}

export interface CPublishedFileGetSubSectionDataRequest {
  publishedfileid: number;
  forTableOfContents: boolean;
  specificSectionid: number;
  desiredRevision: EPublishedFileRevision;
}

export interface PublishedFileSubSection {
  sectionid: number;
  title: string;
  descriptionText: string;
  sortOrder: number;
}

export interface CPublishedFileGetSubSectionDataResponse {
  subSections: PublishedFileSubSection[];
}

export interface CPublishedFilePublishRequest {
  appid: number;
  consumerAppid: number;
  cloudfilename: string;
  previewCloudfilename: string;
  title: string;
  fileDescription: string;
  fileType: number;
  consumerShortcutName: string;
  youtubeUsername: string;
  youtubeVideoid: string;
  visibility: number;
  redirectUri: string;
  tags: string[];
  collectionType: string;
  gameType: string;
  url: string;
}

export interface CPublishedFilePublishResponse {
  publishedfileid: number;
  redirectUri: string;
}

export interface CPublishedFileGetDetailsRequest {
  publishedfileids: number[];
  includetags: boolean;
  includeadditionalpreviews: boolean;
  includechildren: boolean;
  includekvtags: boolean;
  includevotes: boolean;
  shortDescription: boolean;
  includeforsaledata: boolean;
  includemetadata: boolean;
  language: number;
  returnPlaytimeStats: number;
  appid: number;
  stripDescriptionBbcode: boolean;
  desiredRevision: EPublishedFileRevision;
  includereactions: boolean;
}

export interface PublishedFileDetails {
  result: number;
  publishedfileid: number;
  creator: number;
  creatorAppid: number;
  consumerAppid: number;
  consumerShortcutid: number;
  filename: string;
  fileSize: number;
  previewFileSize: number;
  fileUrl: string;
  previewUrl: string;
  youtubevideoid: string;
  url: string;
  hcontentFile: number;
  hcontentPreview: number;
  title: string;
  fileDescription: string;
  shortDescription: string;
  timeCreated: number;
  timeUpdated: number;
  visibility: number;
  flags: number;
  workshopFile: boolean;
  workshopAccepted: boolean;
  showSubscribeAll: boolean;
  numCommentsDeveloper: number;
  numCommentsPublic: number;
  banned: boolean;
  banReason: string;
  banner: number;
  canBeDeleted: boolean;
  incompatible: boolean;
  appName: string;
  fileType: number;
  canSubscribe: boolean;
  subscriptions: number;
  favorited: number;
  followers: number;
  lifetimeSubscriptions: number;
  lifetimeFavorited: number;
  lifetimeFollowers: number;
  lifetimePlaytime: number;
  lifetimePlaytimeSessions: number;
  views: number;
  imageWidth: number;
  imageHeight: number;
  imageUrl: string;
  spoilerTag: boolean;
  shortcutid: number;
  shortcutname: string;
  numChildren: number;
  numReports: number;
  previews: PublishedFileDetails_Preview[];
  tags: PublishedFileDetails_Tag[];
  children: PublishedFileDetails_Child[];
  kvtags: PublishedFileDetails_KVTag[];
  voteData: PublishedFileDetails_VoteData | undefined;
  playtimeStats: PublishedFileDetails_PlaytimeStats | undefined;
  timeSubscribed: number;
  forSaleData: PublishedFileDetails_ForSaleData | undefined;
  metadata: string;
  language: number;
  maybeInappropriateSex: boolean;
  maybeInappropriateViolence: boolean;
  revisionChangeNumber: number;
  revision: EPublishedFileRevision;
  availableRevisions: EPublishedFileRevision[];
  reactions: PublishedFileDetails_Reaction[];
  banTextCheckResult: EBanContentCheckResult;
}

export interface PublishedFileDetails_Tag {
  tag: string;
  adminonly: boolean;
  displayName: string;
}

export interface PublishedFileDetails_Preview {
  previewid: number;
  sortorder: number;
  url: string;
  size: number;
  filename: string;
  youtubevideoid: string;
  previewType: number;
  externalReference: string;
}

export interface PublishedFileDetails_Child {
  publishedfileid: number;
  sortorder: number;
  fileType: number;
}

export interface PublishedFileDetails_KVTag {
  key: string;
  value: string;
}

export interface PublishedFileDetails_VoteData {
  score: number;
  votesUp: number;
  votesDown: number;
}

export interface PublishedFileDetails_ForSaleData {
  isForSale: boolean;
  priceCategory: number;
  estatus: EPublishedFileForSaleStatus;
  priceCategoryFloor: number;
  priceIsPayWhatYouWant: boolean;
  discountPercentage: number;
}

export interface PublishedFileDetails_PlaytimeStats {
  playtimeSeconds: number;
  numSessions: number;
}

export interface PublishedFileDetails_Reaction {
  reactionid: number;
  count: number;
}

export interface CPublishedFileGetDetailsResponse {
  publishedfiledetails: PublishedFileDetails[];
}

export interface CPublishedFileGetItemInfoRequest {
  appid: number;
  lastTimeUpdated: number;
  workshopItems: CPublishedFileGetItemInfoRequest_WorkshopItem[];
}

export interface CPublishedFileGetItemInfoRequest_WorkshopItem {
  publishedFileId: number;
  timeUpdated: number;
  desiredRevision: EPublishedFileRevision;
}

export interface CPublishedFileGetItemInfoResponse {
  updateTime: number;
  workshopItems: CPublishedFileGetItemInfoResponse_WorkshopItemInfo[];
  privateItems: number[];
}

export interface CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
  publishedFileId: number;
  timeUpdated: number;
  manifestId: number;
  flags: number;
}

export interface CPublishedFileGetUserFilesRequest {
  steamid: number;
  appid: number;
  page: number;
  numperpage: number;
  type: string;
  sortmethod: string;
  privacy: number;
  requiredtags: string[];
  excludedtags: string[];
  requiredKvTags: CPublishedFileGetUserFilesRequest_KVTag[];
  filetype: number;
  creatorAppid: number;
  matchCloudFilename: string;
  cacheMaxAgeSeconds: number;
  language: number;
  taggroups: CPublishedFileGetUserFilesRequest_TagGroup[];
  totalonly: boolean;
  idsOnly: boolean;
  returnVoteData: boolean;
  returnTags: boolean;
  returnKvTags: boolean;
  returnPreviews: boolean;
  returnChildren: boolean;
  returnShortDescription: boolean;
  returnForSaleData: boolean;
  returnMetadata: boolean;
  returnPlaytimeStats: number;
  stripDescriptionBbcode: boolean;
  returnReactions: boolean;
  startindexOverride: number;
  desiredRevision: EPublishedFileRevision;
  returnApps: boolean;
}

export interface CPublishedFileGetUserFilesRequest_KVTag {
  key: string;
  value: string;
}

export interface CPublishedFileGetUserFilesRequest_TagGroup {
  tags: string[];
}

export interface CPublishedFileGetUserFilesResponse {
  total: number;
  startindex: number;
  publishedfiledetails: PublishedFileDetails[];
  apps: CPublishedFileGetUserFilesResponse_App[];
}

export interface CPublishedFileGetUserFilesResponse_App {
  appid: number;
  name: string;
  shortcutid: number;
  private: boolean;
}

export interface CPublishedFileAreFilesInSubscriptionListRequest {
  appid: number;
  publishedfileids: number[];
  listtype: number;
  filetype: number;
  workshopfiletype: number;
}

export interface CPublishedFileAreFilesInSubscriptionListResponse {
  files: CPublishedFileAreFilesInSubscriptionListResponse_InList[];
}

export interface CPublishedFileAreFilesInSubscriptionListResponse_InList {
  publishedfileid: number;
  inlist: boolean;
}

export interface CPublishedFileUpdateRequest {
  appid: number;
  publishedfileid: number;
  title: string;
  fileDescription: string;
  visibility: number;
  tags: string[];
  filename: string;
  previewFilename: string;
  spoilerTag: boolean;
  imageWidth: number;
  imageHeight: number;
}

export interface CPublishedFileUpdateResponse {
}

export interface CPublishedFileDeleteRequest {
  publishedfileid: number;
}

export interface CPublishedFileDeleteResponse {
}

export interface CPublishedFileGetChangeHistoryEntryRequest {
  publishedfileid: number;
  timestamp: number;
  language: number;
}

export interface CPublishedFileGetChangeHistoryEntryResponse {
  changeDescription: string;
  language: number;
}

export interface CPublishedFileGetChangeHistoryRequest {
  publishedfileid: number;
  totalOnly: boolean;
  startindex: number;
  count: number;
  language: number;
}

export interface CPublishedFileGetChangeHistoryResponse {
  changes: CPublishedFileGetChangeHistoryResponse_ChangeLog[];
  total: number;
}

export interface CPublishedFileGetChangeHistoryResponse_ChangeLog {
  timestamp: number;
  changeDescription: string;
  language: number;
}

export interface CPublishedFileRefreshVotingQueueRequest {
  appid: number;
  matchingFileType: number;
  tags: string[];
  matchAllTags: boolean;
  excludedTags: string[];
  desiredQueueSize: number;
  desiredRevision: EPublishedFileRevision;
}

export interface CPublishedFileRefreshVotingQueueResponse {
}

export interface CPublishedFileQueryFilesRequest {
  queryType: number;
  page: number;
  cursor: string;
  numperpage: number;
  creatorAppid: number;
  appid: number;
  requiredtags: string[];
  excludedtags: string[];
  matchAllTags: boolean;
  requiredFlags: string[];
  omittedFlags: string[];
  searchText: string;
  filetype: number;
  childPublishedfileid: number;
  days: number;
  includeRecentVotesOnly: boolean;
  cacheMaxAgeSeconds: number;
  language: number;
  requiredKvTags: CPublishedFileQueryFilesRequest_KVTag[];
  taggroups: CPublishedFileQueryFilesRequest_TagGroup[];
  dateRangeCreated: CPublishedFileQueryFilesRequest_DateRange | undefined;
  dateRangeUpdated: CPublishedFileQueryFilesRequest_DateRange | undefined;
  totalonly: boolean;
  idsOnly: boolean;
  returnVoteData: boolean;
  returnTags: boolean;
  returnKvTags: boolean;
  returnPreviews: boolean;
  returnChildren: boolean;
  returnShortDescription: boolean;
  returnForSaleData: boolean;
  returnMetadata: boolean;
  returnPlaytimeStats: number;
  returnDetails: boolean;
  stripDescriptionBbcode: boolean;
  desiredRevision: EPublishedFileRevision;
  returnReactions: boolean;
}

export interface CPublishedFileQueryFilesRequest_KVTag {
  key: string;
  value: string;
}

export interface CPublishedFileQueryFilesRequest_TagGroup {
  tags: string[];
}

export interface CPublishedFileQueryFilesRequest_DateRange {
  timestampStart: number;
  timestampEnd: number;
}

export interface CPublishedFileQueryFilesResponse {
  total: number;
  publishedfiledetails: PublishedFileDetails[];
  nextCursor: string;
}

export interface CPublishedFileAddAppRelationshipRequest {
  publishedfileid: number;
  appid: number;
  relationship: number;
}

export interface CPublishedFileAddAppRelationshipResponse {
}

export interface CPublishedFileRemoveAppRelationshipRequest {
  publishedfileid: number;
  appid: number;
  relationship: number;
}

export interface CPublishedFileRemoveAppRelationshipResponse {
}

export interface CPublishedFileGetAppRelationshipsRequest {
  publishedfileid: number;
}

export interface CPublishedFileGetAppRelationshipsResponse {
  appRelationships: CPublishedFileGetAppRelationshipsResponse_AppRelationship[];
}

export interface CPublishedFileGetAppRelationshipsResponse_AppRelationship {
  appid: number;
  relationship: number;
}

export interface CPublishedFileGetAppRelationshipsBatchedRequest {
  publishedfileids: number[];
  filterRelationship: number;
}

export interface CPublishedFileGetAppRelationshipsBatchedResponse {
  relationships: CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship[];
}

export interface CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
  appid: number;
  relationship: number;
}

export interface CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
  publishedfileid: number;
  result: number;
  appRelationships: CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship[];
}

export interface CPublishedFileStartPlaytimeTrackingRequest {
  appid: number;
  publishedfileids: number[];
}

export interface CPublishedFileStartPlaytimeTrackingResponse {
}

export interface CPublishedFileStopPlaytimeTrackingRequest {
  appid: number;
  publishedfileids: number[];
}

export interface CPublishedFileStopPlaytimeTrackingResponse {
}

export interface CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
  appid: number;
}

export interface CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
}

export interface CPublishedFileSetPlaytimeForControllerConfigsRequest {
  appid: number;
  controllerConfigUsage: CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage[];
}

export interface CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
  publishedfileid: number;
  secondsActive: number;
}

export interface CPublishedFileSetPlaytimeForControllerConfigsResponse {
}

export interface CPublishedFileAddChildRequest {
  publishedfileid: number;
  childPublishedfileid: number;
}

export interface CPublishedFileAddChildResponse {
}

export interface CPublishedFileRemoveChildRequest {
  publishedfileid: number;
  childPublishedfileid: number;
}

export interface CPublishedFileRemoveChildResponse {
}

export interface CPublishedFileGetUserVoteSummaryRequest {
  publishedfileids: number[];
}

export interface CPublishedFileGetUserVoteSummaryResponse {
  summaries: CPublishedFileGetUserVoteSummaryResponse_VoteSummary[];
}

export interface CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
  publishedfileid: number;
  voteFor: boolean;
  voteAgainst: boolean;
  reported: boolean;
}

export interface CPublishedFileGetItemChangesRequest {
  appid: number;
  lastTimeUpdated: number;
  numItemsMax: number;
}

export interface CPublishedFileGetItemChangesResponse {
  updateTime: number;
  workshopItems: CPublishedFileGetItemChangesResponse_WorkshopItemInfo[];
}

export interface CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
  publishedFileId: number;
  timeUpdated: number;
  manifestId: number;
}

export interface CPublishedFileFileSubscribedNotification {
  publishedFileId: number;
  appId: number;
  fileHcontent: number;
  fileSize: number;
  rtimeSubscribed: number;
  isDepotContent: boolean;
  rtimeUpdated: number;
  revisions: CPublishedFileFileSubscribedNotification_RevisionData[];
}

export interface CPublishedFileFileSubscribedNotification_RevisionData {
  revision: EPublishedFileRevision;
  fileHcontent: number;
  rtimeUpdated: number;
}

export interface CPublishedFileFileUnsubscribedNotification {
  publishedFileId: number;
  appId: number;
}

export interface CPublishedFileFileDeletedClientNotification {
  publishedFileId: number;
  appId: number;
}

function createBaseCPublishedFileVoteRequest(): CPublishedFileVoteRequest {
  return { publishedfileid: 0, voteUp: false };
}

export const CPublishedFileVoteRequest = {
  encode(message: CPublishedFileVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.voteUp === true) {
      writer.uint32(16).bool(message.voteUp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): CPublishedFileVoteRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      voteUp: isSet(object.voteUp) ? Boolean(object.voteUp) : false,
    };
  },

  toJSON(message: CPublishedFileVoteRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.voteUp !== undefined && (obj.voteUp = message.voteUp);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileVoteRequest>, I>>(base?: I): CPublishedFileVoteRequest {
    return CPublishedFileVoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileVoteRequest>, I>>(object: I): CPublishedFileVoteRequest {
    const message = createBaseCPublishedFileVoteRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.voteUp = object.voteUp ?? false;
    return message;
  },
};

function createBaseCPublishedFileVoteResponse(): CPublishedFileVoteResponse {
  return {};
}

export const CPublishedFileVoteResponse = {
  encode(_: CPublishedFileVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileVoteResponse();
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

  fromJSON(_: any): CPublishedFileVoteResponse {
    return {};
  },

  toJSON(_: CPublishedFileVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileVoteResponse>, I>>(base?: I): CPublishedFileVoteResponse {
    return CPublishedFileVoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileVoteResponse>, I>>(_: I): CPublishedFileVoteResponse {
    const message = createBaseCPublishedFileVoteResponse();
    return message;
  },
};

function createBaseCPublishedFileSubscribeRequest(): CPublishedFileSubscribeRequest {
  return { publishedfileid: 0, listType: 0, appid: 0, notifyClient: false };
}

export const CPublishedFileSubscribeRequest = {
  encode(message: CPublishedFileSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.listType !== 0) {
      writer.uint32(16).uint32(message.listType);
    }
    if (message.appid !== 0) {
      writer.uint32(24).int32(message.appid);
    }
    if (message.notifyClient === true) {
      writer.uint32(32).bool(message.notifyClient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.listType = reader.uint32();
          break;
        case 3:
          message.appid = reader.int32();
          break;
        case 4:
          message.notifyClient = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileSubscribeRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      listType: isSet(object.listType) ? Number(object.listType) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      notifyClient: isSet(object.notifyClient) ? Boolean(object.notifyClient) : false,
    };
  },

  toJSON(message: CPublishedFileSubscribeRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.listType !== undefined && (obj.listType = Math.round(message.listType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.notifyClient !== undefined && (obj.notifyClient = message.notifyClient);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileSubscribeRequest>, I>>(base?: I): CPublishedFileSubscribeRequest {
    return CPublishedFileSubscribeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileSubscribeRequest>, I>>(
    object: I,
  ): CPublishedFileSubscribeRequest {
    const message = createBaseCPublishedFileSubscribeRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.listType = object.listType ?? 0;
    message.appid = object.appid ?? 0;
    message.notifyClient = object.notifyClient ?? false;
    return message;
  },
};

function createBaseCPublishedFileSubscribeResponse(): CPublishedFileSubscribeResponse {
  return {};
}

export const CPublishedFileSubscribeResponse = {
  encode(_: CPublishedFileSubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSubscribeResponse();
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

  fromJSON(_: any): CPublishedFileSubscribeResponse {
    return {};
  },

  toJSON(_: CPublishedFileSubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileSubscribeResponse>, I>>(base?: I): CPublishedFileSubscribeResponse {
    return CPublishedFileSubscribeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileSubscribeResponse>, I>>(_: I): CPublishedFileSubscribeResponse {
    const message = createBaseCPublishedFileSubscribeResponse();
    return message;
  },
};

function createBaseCPublishedFileUnsubscribeRequest(): CPublishedFileUnsubscribeRequest {
  return { publishedfileid: 0, listType: 0, appid: 0, notifyClient: false };
}

export const CPublishedFileUnsubscribeRequest = {
  encode(message: CPublishedFileUnsubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.listType !== 0) {
      writer.uint32(16).uint32(message.listType);
    }
    if (message.appid !== 0) {
      writer.uint32(24).int32(message.appid);
    }
    if (message.notifyClient === true) {
      writer.uint32(32).bool(message.notifyClient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUnsubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUnsubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.listType = reader.uint32();
          break;
        case 3:
          message.appid = reader.int32();
          break;
        case 4:
          message.notifyClient = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileUnsubscribeRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      listType: isSet(object.listType) ? Number(object.listType) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      notifyClient: isSet(object.notifyClient) ? Boolean(object.notifyClient) : false,
    };
  },

  toJSON(message: CPublishedFileUnsubscribeRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.listType !== undefined && (obj.listType = Math.round(message.listType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.notifyClient !== undefined && (obj.notifyClient = message.notifyClient);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileUnsubscribeRequest>, I>>(
    base?: I,
  ): CPublishedFileUnsubscribeRequest {
    return CPublishedFileUnsubscribeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileUnsubscribeRequest>, I>>(
    object: I,
  ): CPublishedFileUnsubscribeRequest {
    const message = createBaseCPublishedFileUnsubscribeRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.listType = object.listType ?? 0;
    message.appid = object.appid ?? 0;
    message.notifyClient = object.notifyClient ?? false;
    return message;
  },
};

function createBaseCPublishedFileUnsubscribeResponse(): CPublishedFileUnsubscribeResponse {
  return {};
}

export const CPublishedFileUnsubscribeResponse = {
  encode(_: CPublishedFileUnsubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUnsubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUnsubscribeResponse();
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

  fromJSON(_: any): CPublishedFileUnsubscribeResponse {
    return {};
  },

  toJSON(_: CPublishedFileUnsubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileUnsubscribeResponse>, I>>(
    base?: I,
  ): CPublishedFileUnsubscribeResponse {
    return CPublishedFileUnsubscribeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileUnsubscribeResponse>, I>>(
    _: I,
  ): CPublishedFileUnsubscribeResponse {
    const message = createBaseCPublishedFileUnsubscribeResponse();
    return message;
  },
};

function createBaseCPublishedFileCanSubscribeRequest(): CPublishedFileCanSubscribeRequest {
  return { publishedfileid: 0 };
}

export const CPublishedFileCanSubscribeRequest = {
  encode(message: CPublishedFileCanSubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileCanSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileCanSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileCanSubscribeRequest {
    return { publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0 };
  },

  toJSON(message: CPublishedFileCanSubscribeRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileCanSubscribeRequest>, I>>(
    base?: I,
  ): CPublishedFileCanSubscribeRequest {
    return CPublishedFileCanSubscribeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileCanSubscribeRequest>, I>>(
    object: I,
  ): CPublishedFileCanSubscribeRequest {
    const message = createBaseCPublishedFileCanSubscribeRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileCanSubscribeResponse(): CPublishedFileCanSubscribeResponse {
  return { canSubscribe: false };
}

export const CPublishedFileCanSubscribeResponse = {
  encode(message: CPublishedFileCanSubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.canSubscribe === true) {
      writer.uint32(8).bool(message.canSubscribe);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileCanSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileCanSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canSubscribe = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileCanSubscribeResponse {
    return { canSubscribe: isSet(object.canSubscribe) ? Boolean(object.canSubscribe) : false };
  },

  toJSON(message: CPublishedFileCanSubscribeResponse): unknown {
    const obj: any = {};
    message.canSubscribe !== undefined && (obj.canSubscribe = message.canSubscribe);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileCanSubscribeResponse>, I>>(
    base?: I,
  ): CPublishedFileCanSubscribeResponse {
    return CPublishedFileCanSubscribeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileCanSubscribeResponse>, I>>(
    object: I,
  ): CPublishedFileCanSubscribeResponse {
    const message = createBaseCPublishedFileCanSubscribeResponse();
    message.canSubscribe = object.canSubscribe ?? false;
    return message;
  },
};

function createBaseCPublishedFileGetSubSectionDataRequest(): CPublishedFileGetSubSectionDataRequest {
  return { publishedfileid: 0, forTableOfContents: false, specificSectionid: 0, desiredRevision: 0 };
}

export const CPublishedFileGetSubSectionDataRequest = {
  encode(message: CPublishedFileGetSubSectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.forTableOfContents === true) {
      writer.uint32(16).bool(message.forTableOfContents);
    }
    if (message.specificSectionid !== 0) {
      writer.uint32(24).uint64(message.specificSectionid);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(32).int32(message.desiredRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetSubSectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetSubSectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.forTableOfContents = reader.bool();
          break;
        case 3:
          message.specificSectionid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.desiredRevision = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetSubSectionDataRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      forTableOfContents: isSet(object.forTableOfContents) ? Boolean(object.forTableOfContents) : false,
      specificSectionid: isSet(object.specificSectionid) ? Number(object.specificSectionid) : 0,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
    };
  },

  toJSON(message: CPublishedFileGetSubSectionDataRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.forTableOfContents !== undefined && (obj.forTableOfContents = message.forTableOfContents);
    message.specificSectionid !== undefined && (obj.specificSectionid = Math.round(message.specificSectionid));
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetSubSectionDataRequest>, I>>(
    base?: I,
  ): CPublishedFileGetSubSectionDataRequest {
    return CPublishedFileGetSubSectionDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetSubSectionDataRequest>, I>>(
    object: I,
  ): CPublishedFileGetSubSectionDataRequest {
    const message = createBaseCPublishedFileGetSubSectionDataRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.forTableOfContents = object.forTableOfContents ?? false;
    message.specificSectionid = object.specificSectionid ?? 0;
    message.desiredRevision = object.desiredRevision ?? 0;
    return message;
  },
};

function createBasePublishedFileSubSection(): PublishedFileSubSection {
  return { sectionid: 0, title: "", descriptionText: "", sortOrder: 0 };
}

export const PublishedFileSubSection = {
  encode(message: PublishedFileSubSection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sectionid !== 0) {
      writer.uint32(8).uint64(message.sectionid);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.descriptionText !== "") {
      writer.uint32(26).string(message.descriptionText);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(32).uint32(message.sortOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileSubSection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileSubSection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sectionid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.descriptionText = reader.string();
          break;
        case 4:
          message.sortOrder = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileSubSection {
    return {
      sectionid: isSet(object.sectionid) ? Number(object.sectionid) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      descriptionText: isSet(object.descriptionText) ? String(object.descriptionText) : "",
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
    };
  },

  toJSON(message: PublishedFileSubSection): unknown {
    const obj: any = {};
    message.sectionid !== undefined && (obj.sectionid = Math.round(message.sectionid));
    message.title !== undefined && (obj.title = message.title);
    message.descriptionText !== undefined && (obj.descriptionText = message.descriptionText);
    message.sortOrder !== undefined && (obj.sortOrder = Math.round(message.sortOrder));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileSubSection>, I>>(base?: I): PublishedFileSubSection {
    return PublishedFileSubSection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileSubSection>, I>>(object: I): PublishedFileSubSection {
    const message = createBasePublishedFileSubSection();
    message.sectionid = object.sectionid ?? 0;
    message.title = object.title ?? "";
    message.descriptionText = object.descriptionText ?? "";
    message.sortOrder = object.sortOrder ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetSubSectionDataResponse(): CPublishedFileGetSubSectionDataResponse {
  return { subSections: [] };
}

export const CPublishedFileGetSubSectionDataResponse = {
  encode(message: CPublishedFileGetSubSectionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subSections) {
      PublishedFileSubSection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetSubSectionDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetSubSectionDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subSections.push(PublishedFileSubSection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetSubSectionDataResponse {
    return {
      subSections: Array.isArray(object?.subSections)
        ? object.subSections.map((e: any) => PublishedFileSubSection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetSubSectionDataResponse): unknown {
    const obj: any = {};
    if (message.subSections) {
      obj.subSections = message.subSections.map((e) => e ? PublishedFileSubSection.toJSON(e) : undefined);
    } else {
      obj.subSections = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetSubSectionDataResponse>, I>>(
    base?: I,
  ): CPublishedFileGetSubSectionDataResponse {
    return CPublishedFileGetSubSectionDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetSubSectionDataResponse>, I>>(
    object: I,
  ): CPublishedFileGetSubSectionDataResponse {
    const message = createBaseCPublishedFileGetSubSectionDataResponse();
    message.subSections = object.subSections?.map((e) => PublishedFileSubSection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFilePublishRequest(): CPublishedFilePublishRequest {
  return {
    appid: 0,
    consumerAppid: 0,
    cloudfilename: "",
    previewCloudfilename: "",
    title: "",
    fileDescription: "",
    fileType: 0,
    consumerShortcutName: "",
    youtubeUsername: "",
    youtubeVideoid: "",
    visibility: 0,
    redirectUri: "",
    tags: [],
    collectionType: "",
    gameType: "",
    url: "",
  };
}

export const CPublishedFilePublishRequest = {
  encode(message: CPublishedFilePublishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.consumerAppid !== 0) {
      writer.uint32(16).uint32(message.consumerAppid);
    }
    if (message.cloudfilename !== "") {
      writer.uint32(26).string(message.cloudfilename);
    }
    if (message.previewCloudfilename !== "") {
      writer.uint32(34).string(message.previewCloudfilename);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(50).string(message.fileDescription);
    }
    if (message.fileType !== 0) {
      writer.uint32(56).uint32(message.fileType);
    }
    if (message.consumerShortcutName !== "") {
      writer.uint32(66).string(message.consumerShortcutName);
    }
    if (message.youtubeUsername !== "") {
      writer.uint32(74).string(message.youtubeUsername);
    }
    if (message.youtubeVideoid !== "") {
      writer.uint32(82).string(message.youtubeVideoid);
    }
    if (message.visibility !== 0) {
      writer.uint32(88).uint32(message.visibility);
    }
    if (message.redirectUri !== "") {
      writer.uint32(98).string(message.redirectUri);
    }
    for (const v of message.tags) {
      writer.uint32(106).string(v!);
    }
    if (message.collectionType !== "") {
      writer.uint32(114).string(message.collectionType);
    }
    if (message.gameType !== "") {
      writer.uint32(122).string(message.gameType);
    }
    if (message.url !== "") {
      writer.uint32(130).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFilePublishRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFilePublishRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.consumerAppid = reader.uint32();
          break;
        case 3:
          message.cloudfilename = reader.string();
          break;
        case 4:
          message.previewCloudfilename = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.fileDescription = reader.string();
          break;
        case 7:
          message.fileType = reader.uint32();
          break;
        case 8:
          message.consumerShortcutName = reader.string();
          break;
        case 9:
          message.youtubeUsername = reader.string();
          break;
        case 10:
          message.youtubeVideoid = reader.string();
          break;
        case 11:
          message.visibility = reader.uint32();
          break;
        case 12:
          message.redirectUri = reader.string();
          break;
        case 13:
          message.tags.push(reader.string());
          break;
        case 14:
          message.collectionType = reader.string();
          break;
        case 15:
          message.gameType = reader.string();
          break;
        case 16:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFilePublishRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      consumerAppid: isSet(object.consumerAppid) ? Number(object.consumerAppid) : 0,
      cloudfilename: isSet(object.cloudfilename) ? String(object.cloudfilename) : "",
      previewCloudfilename: isSet(object.previewCloudfilename) ? String(object.previewCloudfilename) : "",
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
      consumerShortcutName: isSet(object.consumerShortcutName) ? String(object.consumerShortcutName) : "",
      youtubeUsername: isSet(object.youtubeUsername) ? String(object.youtubeUsername) : "",
      youtubeVideoid: isSet(object.youtubeVideoid) ? String(object.youtubeVideoid) : "",
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      redirectUri: isSet(object.redirectUri) ? String(object.redirectUri) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      collectionType: isSet(object.collectionType) ? String(object.collectionType) : "",
      gameType: isSet(object.gameType) ? String(object.gameType) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CPublishedFilePublishRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.consumerAppid !== undefined && (obj.consumerAppid = Math.round(message.consumerAppid));
    message.cloudfilename !== undefined && (obj.cloudfilename = message.cloudfilename);
    message.previewCloudfilename !== undefined && (obj.previewCloudfilename = message.previewCloudfilename);
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    message.consumerShortcutName !== undefined && (obj.consumerShortcutName = message.consumerShortcutName);
    message.youtubeUsername !== undefined && (obj.youtubeUsername = message.youtubeUsername);
    message.youtubeVideoid !== undefined && (obj.youtubeVideoid = message.youtubeVideoid);
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.redirectUri !== undefined && (obj.redirectUri = message.redirectUri);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.collectionType !== undefined && (obj.collectionType = message.collectionType);
    message.gameType !== undefined && (obj.gameType = message.gameType);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFilePublishRequest>, I>>(base?: I): CPublishedFilePublishRequest {
    return CPublishedFilePublishRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFilePublishRequest>, I>>(object: I): CPublishedFilePublishRequest {
    const message = createBaseCPublishedFilePublishRequest();
    message.appid = object.appid ?? 0;
    message.consumerAppid = object.consumerAppid ?? 0;
    message.cloudfilename = object.cloudfilename ?? "";
    message.previewCloudfilename = object.previewCloudfilename ?? "";
    message.title = object.title ?? "";
    message.fileDescription = object.fileDescription ?? "";
    message.fileType = object.fileType ?? 0;
    message.consumerShortcutName = object.consumerShortcutName ?? "";
    message.youtubeUsername = object.youtubeUsername ?? "";
    message.youtubeVideoid = object.youtubeVideoid ?? "";
    message.visibility = object.visibility ?? 0;
    message.redirectUri = object.redirectUri ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.collectionType = object.collectionType ?? "";
    message.gameType = object.gameType ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCPublishedFilePublishResponse(): CPublishedFilePublishResponse {
  return { publishedfileid: 0, redirectUri: "" };
}

export const CPublishedFilePublishResponse = {
  encode(message: CPublishedFilePublishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.redirectUri !== "") {
      writer.uint32(18).string(message.redirectUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFilePublishResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFilePublishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.redirectUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFilePublishResponse {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      redirectUri: isSet(object.redirectUri) ? String(object.redirectUri) : "",
    };
  },

  toJSON(message: CPublishedFilePublishResponse): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.redirectUri !== undefined && (obj.redirectUri = message.redirectUri);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFilePublishResponse>, I>>(base?: I): CPublishedFilePublishResponse {
    return CPublishedFilePublishResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFilePublishResponse>, I>>(
    object: I,
  ): CPublishedFilePublishResponse {
    const message = createBaseCPublishedFilePublishResponse();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.redirectUri = object.redirectUri ?? "";
    return message;
  },
};

function createBaseCPublishedFileGetDetailsRequest(): CPublishedFileGetDetailsRequest {
  return {
    publishedfileids: [],
    includetags: false,
    includeadditionalpreviews: false,
    includechildren: false,
    includekvtags: false,
    includevotes: false,
    shortDescription: false,
    includeforsaledata: false,
    includemetadata: false,
    language: 0,
    returnPlaytimeStats: 0,
    appid: 0,
    stripDescriptionBbcode: false,
    desiredRevision: 0,
    includereactions: false,
  };
}

export const CPublishedFileGetDetailsRequest = {
  encode(message: CPublishedFileGetDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.publishedfileids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.includetags === true) {
      writer.uint32(16).bool(message.includetags);
    }
    if (message.includeadditionalpreviews === true) {
      writer.uint32(24).bool(message.includeadditionalpreviews);
    }
    if (message.includechildren === true) {
      writer.uint32(32).bool(message.includechildren);
    }
    if (message.includekvtags === true) {
      writer.uint32(40).bool(message.includekvtags);
    }
    if (message.includevotes === true) {
      writer.uint32(48).bool(message.includevotes);
    }
    if (message.shortDescription === true) {
      writer.uint32(64).bool(message.shortDescription);
    }
    if (message.includeforsaledata === true) {
      writer.uint32(80).bool(message.includeforsaledata);
    }
    if (message.includemetadata === true) {
      writer.uint32(88).bool(message.includemetadata);
    }
    if (message.language !== 0) {
      writer.uint32(96).int32(message.language);
    }
    if (message.returnPlaytimeStats !== 0) {
      writer.uint32(104).uint32(message.returnPlaytimeStats);
    }
    if (message.appid !== 0) {
      writer.uint32(112).uint32(message.appid);
    }
    if (message.stripDescriptionBbcode === true) {
      writer.uint32(120).bool(message.stripDescriptionBbcode);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(128).int32(message.desiredRevision);
    }
    if (message.includereactions === true) {
      writer.uint32(136).bool(message.includereactions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        case 2:
          message.includetags = reader.bool();
          break;
        case 3:
          message.includeadditionalpreviews = reader.bool();
          break;
        case 4:
          message.includechildren = reader.bool();
          break;
        case 5:
          message.includekvtags = reader.bool();
          break;
        case 6:
          message.includevotes = reader.bool();
          break;
        case 8:
          message.shortDescription = reader.bool();
          break;
        case 10:
          message.includeforsaledata = reader.bool();
          break;
        case 11:
          message.includemetadata = reader.bool();
          break;
        case 12:
          message.language = reader.int32();
          break;
        case 13:
          message.returnPlaytimeStats = reader.uint32();
          break;
        case 14:
          message.appid = reader.uint32();
          break;
        case 15:
          message.stripDescriptionBbcode = reader.bool();
          break;
        case 16:
          message.desiredRevision = reader.int32() as any;
          break;
        case 17:
          message.includereactions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetDetailsRequest {
    return {
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
      includetags: isSet(object.includetags) ? Boolean(object.includetags) : false,
      includeadditionalpreviews: isSet(object.includeadditionalpreviews)
        ? Boolean(object.includeadditionalpreviews)
        : false,
      includechildren: isSet(object.includechildren) ? Boolean(object.includechildren) : false,
      includekvtags: isSet(object.includekvtags) ? Boolean(object.includekvtags) : false,
      includevotes: isSet(object.includevotes) ? Boolean(object.includevotes) : false,
      shortDescription: isSet(object.shortDescription) ? Boolean(object.shortDescription) : false,
      includeforsaledata: isSet(object.includeforsaledata) ? Boolean(object.includeforsaledata) : false,
      includemetadata: isSet(object.includemetadata) ? Boolean(object.includemetadata) : false,
      language: isSet(object.language) ? Number(object.language) : 0,
      returnPlaytimeStats: isSet(object.returnPlaytimeStats) ? Number(object.returnPlaytimeStats) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      stripDescriptionBbcode: isSet(object.stripDescriptionBbcode) ? Boolean(object.stripDescriptionBbcode) : false,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
      includereactions: isSet(object.includereactions) ? Boolean(object.includereactions) : false,
    };
  },

  toJSON(message: CPublishedFileGetDetailsRequest): unknown {
    const obj: any = {};
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    message.includetags !== undefined && (obj.includetags = message.includetags);
    message.includeadditionalpreviews !== undefined &&
      (obj.includeadditionalpreviews = message.includeadditionalpreviews);
    message.includechildren !== undefined && (obj.includechildren = message.includechildren);
    message.includekvtags !== undefined && (obj.includekvtags = message.includekvtags);
    message.includevotes !== undefined && (obj.includevotes = message.includevotes);
    message.shortDescription !== undefined && (obj.shortDescription = message.shortDescription);
    message.includeforsaledata !== undefined && (obj.includeforsaledata = message.includeforsaledata);
    message.includemetadata !== undefined && (obj.includemetadata = message.includemetadata);
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.returnPlaytimeStats !== undefined && (obj.returnPlaytimeStats = Math.round(message.returnPlaytimeStats));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.stripDescriptionBbcode !== undefined && (obj.stripDescriptionBbcode = message.stripDescriptionBbcode);
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    message.includereactions !== undefined && (obj.includereactions = message.includereactions);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetDetailsRequest>, I>>(base?: I): CPublishedFileGetDetailsRequest {
    return CPublishedFileGetDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetDetailsRequest>, I>>(
    object: I,
  ): CPublishedFileGetDetailsRequest {
    const message = createBaseCPublishedFileGetDetailsRequest();
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    message.includetags = object.includetags ?? false;
    message.includeadditionalpreviews = object.includeadditionalpreviews ?? false;
    message.includechildren = object.includechildren ?? false;
    message.includekvtags = object.includekvtags ?? false;
    message.includevotes = object.includevotes ?? false;
    message.shortDescription = object.shortDescription ?? false;
    message.includeforsaledata = object.includeforsaledata ?? false;
    message.includemetadata = object.includemetadata ?? false;
    message.language = object.language ?? 0;
    message.returnPlaytimeStats = object.returnPlaytimeStats ?? 0;
    message.appid = object.appid ?? 0;
    message.stripDescriptionBbcode = object.stripDescriptionBbcode ?? false;
    message.desiredRevision = object.desiredRevision ?? 0;
    message.includereactions = object.includereactions ?? false;
    return message;
  },
};

function createBasePublishedFileDetails(): PublishedFileDetails {
  return {
    result: 0,
    publishedfileid: 0,
    creator: 0,
    creatorAppid: 0,
    consumerAppid: 0,
    consumerShortcutid: 0,
    filename: "",
    fileSize: 0,
    previewFileSize: 0,
    fileUrl: "",
    previewUrl: "",
    youtubevideoid: "",
    url: "",
    hcontentFile: 0,
    hcontentPreview: 0,
    title: "",
    fileDescription: "",
    shortDescription: "",
    timeCreated: 0,
    timeUpdated: 0,
    visibility: 0,
    flags: 0,
    workshopFile: false,
    workshopAccepted: false,
    showSubscribeAll: false,
    numCommentsDeveloper: 0,
    numCommentsPublic: 0,
    banned: false,
    banReason: "",
    banner: 0,
    canBeDeleted: false,
    incompatible: false,
    appName: "",
    fileType: 0,
    canSubscribe: false,
    subscriptions: 0,
    favorited: 0,
    followers: 0,
    lifetimeSubscriptions: 0,
    lifetimeFavorited: 0,
    lifetimeFollowers: 0,
    lifetimePlaytime: 0,
    lifetimePlaytimeSessions: 0,
    views: 0,
    imageWidth: 0,
    imageHeight: 0,
    imageUrl: "",
    spoilerTag: false,
    shortcutid: 0,
    shortcutname: "",
    numChildren: 0,
    numReports: 0,
    previews: [],
    tags: [],
    children: [],
    kvtags: [],
    voteData: undefined,
    playtimeStats: undefined,
    timeSubscribed: 0,
    forSaleData: undefined,
    metadata: "",
    language: 0,
    maybeInappropriateSex: false,
    maybeInappropriateViolence: false,
    revisionChangeNumber: 0,
    revision: 0,
    availableRevisions: [],
    reactions: [],
    banTextCheckResult: 0,
  };
}

export const PublishedFileDetails = {
  encode(message: PublishedFileDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.publishedfileid !== 0) {
      writer.uint32(16).uint64(message.publishedfileid);
    }
    if (message.creator !== 0) {
      writer.uint32(25).fixed64(message.creator);
    }
    if (message.creatorAppid !== 0) {
      writer.uint32(32).uint32(message.creatorAppid);
    }
    if (message.consumerAppid !== 0) {
      writer.uint32(40).uint32(message.consumerAppid);
    }
    if (message.consumerShortcutid !== 0) {
      writer.uint32(48).uint32(message.consumerShortcutid);
    }
    if (message.filename !== "") {
      writer.uint32(58).string(message.filename);
    }
    if (message.fileSize !== 0) {
      writer.uint32(64).uint64(message.fileSize);
    }
    if (message.previewFileSize !== 0) {
      writer.uint32(72).uint64(message.previewFileSize);
    }
    if (message.fileUrl !== "") {
      writer.uint32(82).string(message.fileUrl);
    }
    if (message.previewUrl !== "") {
      writer.uint32(90).string(message.previewUrl);
    }
    if (message.youtubevideoid !== "") {
      writer.uint32(98).string(message.youtubevideoid);
    }
    if (message.url !== "") {
      writer.uint32(106).string(message.url);
    }
    if (message.hcontentFile !== 0) {
      writer.uint32(113).fixed64(message.hcontentFile);
    }
    if (message.hcontentPreview !== 0) {
      writer.uint32(121).fixed64(message.hcontentPreview);
    }
    if (message.title !== "") {
      writer.uint32(130).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(138).string(message.fileDescription);
    }
    if (message.shortDescription !== "") {
      writer.uint32(146).string(message.shortDescription);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(152).uint32(message.timeCreated);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(160).uint32(message.timeUpdated);
    }
    if (message.visibility !== 0) {
      writer.uint32(168).uint32(message.visibility);
    }
    if (message.flags !== 0) {
      writer.uint32(176).uint32(message.flags);
    }
    if (message.workshopFile === true) {
      writer.uint32(184).bool(message.workshopFile);
    }
    if (message.workshopAccepted === true) {
      writer.uint32(192).bool(message.workshopAccepted);
    }
    if (message.showSubscribeAll === true) {
      writer.uint32(200).bool(message.showSubscribeAll);
    }
    if (message.numCommentsDeveloper !== 0) {
      writer.uint32(208).int32(message.numCommentsDeveloper);
    }
    if (message.numCommentsPublic !== 0) {
      writer.uint32(216).int32(message.numCommentsPublic);
    }
    if (message.banned === true) {
      writer.uint32(224).bool(message.banned);
    }
    if (message.banReason !== "") {
      writer.uint32(234).string(message.banReason);
    }
    if (message.banner !== 0) {
      writer.uint32(241).fixed64(message.banner);
    }
    if (message.canBeDeleted === true) {
      writer.uint32(248).bool(message.canBeDeleted);
    }
    if (message.incompatible === true) {
      writer.uint32(256).bool(message.incompatible);
    }
    if (message.appName !== "") {
      writer.uint32(266).string(message.appName);
    }
    if (message.fileType !== 0) {
      writer.uint32(272).uint32(message.fileType);
    }
    if (message.canSubscribe === true) {
      writer.uint32(280).bool(message.canSubscribe);
    }
    if (message.subscriptions !== 0) {
      writer.uint32(288).uint32(message.subscriptions);
    }
    if (message.favorited !== 0) {
      writer.uint32(296).uint32(message.favorited);
    }
    if (message.followers !== 0) {
      writer.uint32(304).uint32(message.followers);
    }
    if (message.lifetimeSubscriptions !== 0) {
      writer.uint32(312).uint32(message.lifetimeSubscriptions);
    }
    if (message.lifetimeFavorited !== 0) {
      writer.uint32(320).uint32(message.lifetimeFavorited);
    }
    if (message.lifetimeFollowers !== 0) {
      writer.uint32(328).uint32(message.lifetimeFollowers);
    }
    if (message.lifetimePlaytime !== 0) {
      writer.uint32(496).uint64(message.lifetimePlaytime);
    }
    if (message.lifetimePlaytimeSessions !== 0) {
      writer.uint32(504).uint64(message.lifetimePlaytimeSessions);
    }
    if (message.views !== 0) {
      writer.uint32(336).uint32(message.views);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(344).uint32(message.imageWidth);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(352).uint32(message.imageHeight);
    }
    if (message.imageUrl !== "") {
      writer.uint32(362).string(message.imageUrl);
    }
    if (message.spoilerTag === true) {
      writer.uint32(368).bool(message.spoilerTag);
    }
    if (message.shortcutid !== 0) {
      writer.uint32(376).uint32(message.shortcutid);
    }
    if (message.shortcutname !== "") {
      writer.uint32(386).string(message.shortcutname);
    }
    if (message.numChildren !== 0) {
      writer.uint32(392).uint32(message.numChildren);
    }
    if (message.numReports !== 0) {
      writer.uint32(400).uint32(message.numReports);
    }
    for (const v of message.previews) {
      PublishedFileDetails_Preview.encode(v!, writer.uint32(410).fork()).ldelim();
    }
    for (const v of message.tags) {
      PublishedFileDetails_Tag.encode(v!, writer.uint32(418).fork()).ldelim();
    }
    for (const v of message.children) {
      PublishedFileDetails_Child.encode(v!, writer.uint32(426).fork()).ldelim();
    }
    for (const v of message.kvtags) {
      PublishedFileDetails_KVTag.encode(v!, writer.uint32(434).fork()).ldelim();
    }
    if (message.voteData !== undefined) {
      PublishedFileDetails_VoteData.encode(message.voteData, writer.uint32(442).fork()).ldelim();
    }
    if (message.playtimeStats !== undefined) {
      PublishedFileDetails_PlaytimeStats.encode(message.playtimeStats, writer.uint32(514).fork()).ldelim();
    }
    if (message.timeSubscribed !== 0) {
      writer.uint32(448).uint32(message.timeSubscribed);
    }
    if (message.forSaleData !== undefined) {
      PublishedFileDetails_ForSaleData.encode(message.forSaleData, writer.uint32(458).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(466).string(message.metadata);
    }
    if (message.language !== 0) {
      writer.uint32(488).int32(message.language);
    }
    if (message.maybeInappropriateSex === true) {
      writer.uint32(520).bool(message.maybeInappropriateSex);
    }
    if (message.maybeInappropriateViolence === true) {
      writer.uint32(528).bool(message.maybeInappropriateViolence);
    }
    if (message.revisionChangeNumber !== 0) {
      writer.uint32(536).uint64(message.revisionChangeNumber);
    }
    if (message.revision !== 0) {
      writer.uint32(544).int32(message.revision);
    }
    writer.uint32(554).fork();
    for (const v of message.availableRevisions) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.reactions) {
      PublishedFileDetails_Reaction.encode(v!, writer.uint32(562).fork()).ldelim();
    }
    if (message.banTextCheckResult !== 0) {
      writer.uint32(568).int32(message.banTextCheckResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.creator = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.creatorAppid = reader.uint32();
          break;
        case 5:
          message.consumerAppid = reader.uint32();
          break;
        case 6:
          message.consumerShortcutid = reader.uint32();
          break;
        case 7:
          message.filename = reader.string();
          break;
        case 8:
          message.fileSize = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.previewFileSize = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.fileUrl = reader.string();
          break;
        case 11:
          message.previewUrl = reader.string();
          break;
        case 12:
          message.youtubevideoid = reader.string();
          break;
        case 13:
          message.url = reader.string();
          break;
        case 14:
          message.hcontentFile = longToNumber(reader.fixed64() as Long);
          break;
        case 15:
          message.hcontentPreview = longToNumber(reader.fixed64() as Long);
          break;
        case 16:
          message.title = reader.string();
          break;
        case 17:
          message.fileDescription = reader.string();
          break;
        case 18:
          message.shortDescription = reader.string();
          break;
        case 19:
          message.timeCreated = reader.uint32();
          break;
        case 20:
          message.timeUpdated = reader.uint32();
          break;
        case 21:
          message.visibility = reader.uint32();
          break;
        case 22:
          message.flags = reader.uint32();
          break;
        case 23:
          message.workshopFile = reader.bool();
          break;
        case 24:
          message.workshopAccepted = reader.bool();
          break;
        case 25:
          message.showSubscribeAll = reader.bool();
          break;
        case 26:
          message.numCommentsDeveloper = reader.int32();
          break;
        case 27:
          message.numCommentsPublic = reader.int32();
          break;
        case 28:
          message.banned = reader.bool();
          break;
        case 29:
          message.banReason = reader.string();
          break;
        case 30:
          message.banner = longToNumber(reader.fixed64() as Long);
          break;
        case 31:
          message.canBeDeleted = reader.bool();
          break;
        case 32:
          message.incompatible = reader.bool();
          break;
        case 33:
          message.appName = reader.string();
          break;
        case 34:
          message.fileType = reader.uint32();
          break;
        case 35:
          message.canSubscribe = reader.bool();
          break;
        case 36:
          message.subscriptions = reader.uint32();
          break;
        case 37:
          message.favorited = reader.uint32();
          break;
        case 38:
          message.followers = reader.uint32();
          break;
        case 39:
          message.lifetimeSubscriptions = reader.uint32();
          break;
        case 40:
          message.lifetimeFavorited = reader.uint32();
          break;
        case 41:
          message.lifetimeFollowers = reader.uint32();
          break;
        case 62:
          message.lifetimePlaytime = longToNumber(reader.uint64() as Long);
          break;
        case 63:
          message.lifetimePlaytimeSessions = longToNumber(reader.uint64() as Long);
          break;
        case 42:
          message.views = reader.uint32();
          break;
        case 43:
          message.imageWidth = reader.uint32();
          break;
        case 44:
          message.imageHeight = reader.uint32();
          break;
        case 45:
          message.imageUrl = reader.string();
          break;
        case 46:
          message.spoilerTag = reader.bool();
          break;
        case 47:
          message.shortcutid = reader.uint32();
          break;
        case 48:
          message.shortcutname = reader.string();
          break;
        case 49:
          message.numChildren = reader.uint32();
          break;
        case 50:
          message.numReports = reader.uint32();
          break;
        case 51:
          message.previews.push(PublishedFileDetails_Preview.decode(reader, reader.uint32()));
          break;
        case 52:
          message.tags.push(PublishedFileDetails_Tag.decode(reader, reader.uint32()));
          break;
        case 53:
          message.children.push(PublishedFileDetails_Child.decode(reader, reader.uint32()));
          break;
        case 54:
          message.kvtags.push(PublishedFileDetails_KVTag.decode(reader, reader.uint32()));
          break;
        case 55:
          message.voteData = PublishedFileDetails_VoteData.decode(reader, reader.uint32());
          break;
        case 64:
          message.playtimeStats = PublishedFileDetails_PlaytimeStats.decode(reader, reader.uint32());
          break;
        case 56:
          message.timeSubscribed = reader.uint32();
          break;
        case 57:
          message.forSaleData = PublishedFileDetails_ForSaleData.decode(reader, reader.uint32());
          break;
        case 58:
          message.metadata = reader.string();
          break;
        case 61:
          message.language = reader.int32();
          break;
        case 65:
          message.maybeInappropriateSex = reader.bool();
          break;
        case 66:
          message.maybeInappropriateViolence = reader.bool();
          break;
        case 67:
          message.revisionChangeNumber = longToNumber(reader.uint64() as Long);
          break;
        case 68:
          message.revision = reader.int32() as any;
          break;
        case 69:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.availableRevisions.push(reader.int32() as any);
            }
          } else {
            message.availableRevisions.push(reader.int32() as any);
          }
          break;
        case 70:
          message.reactions.push(PublishedFileDetails_Reaction.decode(reader, reader.uint32()));
          break;
        case 71:
          message.banTextCheckResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      creator: isSet(object.creator) ? Number(object.creator) : 0,
      creatorAppid: isSet(object.creatorAppid) ? Number(object.creatorAppid) : 0,
      consumerAppid: isSet(object.consumerAppid) ? Number(object.consumerAppid) : 0,
      consumerShortcutid: isSet(object.consumerShortcutid) ? Number(object.consumerShortcutid) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      previewFileSize: isSet(object.previewFileSize) ? Number(object.previewFileSize) : 0,
      fileUrl: isSet(object.fileUrl) ? String(object.fileUrl) : "",
      previewUrl: isSet(object.previewUrl) ? String(object.previewUrl) : "",
      youtubevideoid: isSet(object.youtubevideoid) ? String(object.youtubevideoid) : "",
      url: isSet(object.url) ? String(object.url) : "",
      hcontentFile: isSet(object.hcontentFile) ? Number(object.hcontentFile) : 0,
      hcontentPreview: isSet(object.hcontentPreview) ? Number(object.hcontentPreview) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      shortDescription: isSet(object.shortDescription) ? String(object.shortDescription) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      workshopFile: isSet(object.workshopFile) ? Boolean(object.workshopFile) : false,
      workshopAccepted: isSet(object.workshopAccepted) ? Boolean(object.workshopAccepted) : false,
      showSubscribeAll: isSet(object.showSubscribeAll) ? Boolean(object.showSubscribeAll) : false,
      numCommentsDeveloper: isSet(object.numCommentsDeveloper) ? Number(object.numCommentsDeveloper) : 0,
      numCommentsPublic: isSet(object.numCommentsPublic) ? Number(object.numCommentsPublic) : 0,
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
      banReason: isSet(object.banReason) ? String(object.banReason) : "",
      banner: isSet(object.banner) ? Number(object.banner) : 0,
      canBeDeleted: isSet(object.canBeDeleted) ? Boolean(object.canBeDeleted) : false,
      incompatible: isSet(object.incompatible) ? Boolean(object.incompatible) : false,
      appName: isSet(object.appName) ? String(object.appName) : "",
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
      canSubscribe: isSet(object.canSubscribe) ? Boolean(object.canSubscribe) : false,
      subscriptions: isSet(object.subscriptions) ? Number(object.subscriptions) : 0,
      favorited: isSet(object.favorited) ? Number(object.favorited) : 0,
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      lifetimeSubscriptions: isSet(object.lifetimeSubscriptions) ? Number(object.lifetimeSubscriptions) : 0,
      lifetimeFavorited: isSet(object.lifetimeFavorited) ? Number(object.lifetimeFavorited) : 0,
      lifetimeFollowers: isSet(object.lifetimeFollowers) ? Number(object.lifetimeFollowers) : 0,
      lifetimePlaytime: isSet(object.lifetimePlaytime) ? Number(object.lifetimePlaytime) : 0,
      lifetimePlaytimeSessions: isSet(object.lifetimePlaytimeSessions) ? Number(object.lifetimePlaytimeSessions) : 0,
      views: isSet(object.views) ? Number(object.views) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      spoilerTag: isSet(object.spoilerTag) ? Boolean(object.spoilerTag) : false,
      shortcutid: isSet(object.shortcutid) ? Number(object.shortcutid) : 0,
      shortcutname: isSet(object.shortcutname) ? String(object.shortcutname) : "",
      numChildren: isSet(object.numChildren) ? Number(object.numChildren) : 0,
      numReports: isSet(object.numReports) ? Number(object.numReports) : 0,
      previews: Array.isArray(object?.previews)
        ? object.previews.map((e: any) => PublishedFileDetails_Preview.fromJSON(e))
        : [],
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => PublishedFileDetails_Tag.fromJSON(e)) : [],
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => PublishedFileDetails_Child.fromJSON(e))
        : [],
      kvtags: Array.isArray(object?.kvtags)
        ? object.kvtags.map((e: any) => PublishedFileDetails_KVTag.fromJSON(e))
        : [],
      voteData: isSet(object.voteData) ? PublishedFileDetails_VoteData.fromJSON(object.voteData) : undefined,
      playtimeStats: isSet(object.playtimeStats)
        ? PublishedFileDetails_PlaytimeStats.fromJSON(object.playtimeStats)
        : undefined,
      timeSubscribed: isSet(object.timeSubscribed) ? Number(object.timeSubscribed) : 0,
      forSaleData: isSet(object.forSaleData)
        ? PublishedFileDetails_ForSaleData.fromJSON(object.forSaleData)
        : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
      maybeInappropriateSex: isSet(object.maybeInappropriateSex) ? Boolean(object.maybeInappropriateSex) : false,
      maybeInappropriateViolence: isSet(object.maybeInappropriateViolence)
        ? Boolean(object.maybeInappropriateViolence)
        : false,
      revisionChangeNumber: isSet(object.revisionChangeNumber) ? Number(object.revisionChangeNumber) : 0,
      revision: isSet(object.revision) ? ePublishedFileRevisionFromJSON(object.revision) : 0,
      availableRevisions: Array.isArray(object?.availableRevisions)
        ? object.availableRevisions.map((e: any) => ePublishedFileRevisionFromJSON(e))
        : [],
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => PublishedFileDetails_Reaction.fromJSON(e))
        : [],
      banTextCheckResult: isSet(object.banTextCheckResult)
        ? eBanContentCheckResultFromJSON(object.banTextCheckResult)
        : 0,
    };
  },

  toJSON(message: PublishedFileDetails): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.creator !== undefined && (obj.creator = Math.round(message.creator));
    message.creatorAppid !== undefined && (obj.creatorAppid = Math.round(message.creatorAppid));
    message.consumerAppid !== undefined && (obj.consumerAppid = Math.round(message.consumerAppid));
    message.consumerShortcutid !== undefined && (obj.consumerShortcutid = Math.round(message.consumerShortcutid));
    message.filename !== undefined && (obj.filename = message.filename);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.previewFileSize !== undefined && (obj.previewFileSize = Math.round(message.previewFileSize));
    message.fileUrl !== undefined && (obj.fileUrl = message.fileUrl);
    message.previewUrl !== undefined && (obj.previewUrl = message.previewUrl);
    message.youtubevideoid !== undefined && (obj.youtubevideoid = message.youtubevideoid);
    message.url !== undefined && (obj.url = message.url);
    message.hcontentFile !== undefined && (obj.hcontentFile = Math.round(message.hcontentFile));
    message.hcontentPreview !== undefined && (obj.hcontentPreview = Math.round(message.hcontentPreview));
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.shortDescription !== undefined && (obj.shortDescription = message.shortDescription);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.workshopFile !== undefined && (obj.workshopFile = message.workshopFile);
    message.workshopAccepted !== undefined && (obj.workshopAccepted = message.workshopAccepted);
    message.showSubscribeAll !== undefined && (obj.showSubscribeAll = message.showSubscribeAll);
    message.numCommentsDeveloper !== undefined && (obj.numCommentsDeveloper = Math.round(message.numCommentsDeveloper));
    message.numCommentsPublic !== undefined && (obj.numCommentsPublic = Math.round(message.numCommentsPublic));
    message.banned !== undefined && (obj.banned = message.banned);
    message.banReason !== undefined && (obj.banReason = message.banReason);
    message.banner !== undefined && (obj.banner = Math.round(message.banner));
    message.canBeDeleted !== undefined && (obj.canBeDeleted = message.canBeDeleted);
    message.incompatible !== undefined && (obj.incompatible = message.incompatible);
    message.appName !== undefined && (obj.appName = message.appName);
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    message.canSubscribe !== undefined && (obj.canSubscribe = message.canSubscribe);
    message.subscriptions !== undefined && (obj.subscriptions = Math.round(message.subscriptions));
    message.favorited !== undefined && (obj.favorited = Math.round(message.favorited));
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.lifetimeSubscriptions !== undefined &&
      (obj.lifetimeSubscriptions = Math.round(message.lifetimeSubscriptions));
    message.lifetimeFavorited !== undefined && (obj.lifetimeFavorited = Math.round(message.lifetimeFavorited));
    message.lifetimeFollowers !== undefined && (obj.lifetimeFollowers = Math.round(message.lifetimeFollowers));
    message.lifetimePlaytime !== undefined && (obj.lifetimePlaytime = Math.round(message.lifetimePlaytime));
    message.lifetimePlaytimeSessions !== undefined &&
      (obj.lifetimePlaytimeSessions = Math.round(message.lifetimePlaytimeSessions));
    message.views !== undefined && (obj.views = Math.round(message.views));
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined && (obj.imageHeight = Math.round(message.imageHeight));
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.spoilerTag !== undefined && (obj.spoilerTag = message.spoilerTag);
    message.shortcutid !== undefined && (obj.shortcutid = Math.round(message.shortcutid));
    message.shortcutname !== undefined && (obj.shortcutname = message.shortcutname);
    message.numChildren !== undefined && (obj.numChildren = Math.round(message.numChildren));
    message.numReports !== undefined && (obj.numReports = Math.round(message.numReports));
    if (message.previews) {
      obj.previews = message.previews.map((e) => e ? PublishedFileDetails_Preview.toJSON(e) : undefined);
    } else {
      obj.previews = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? PublishedFileDetails_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) => e ? PublishedFileDetails_Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    if (message.kvtags) {
      obj.kvtags = message.kvtags.map((e) => e ? PublishedFileDetails_KVTag.toJSON(e) : undefined);
    } else {
      obj.kvtags = [];
    }
    message.voteData !== undefined &&
      (obj.voteData = message.voteData ? PublishedFileDetails_VoteData.toJSON(message.voteData) : undefined);
    message.playtimeStats !== undefined && (obj.playtimeStats = message.playtimeStats
      ? PublishedFileDetails_PlaytimeStats.toJSON(message.playtimeStats)
      : undefined);
    message.timeSubscribed !== undefined && (obj.timeSubscribed = Math.round(message.timeSubscribed));
    message.forSaleData !== undefined &&
      (obj.forSaleData = message.forSaleData
        ? PublishedFileDetails_ForSaleData.toJSON(message.forSaleData)
        : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.maybeInappropriateSex !== undefined && (obj.maybeInappropriateSex = message.maybeInappropriateSex);
    message.maybeInappropriateViolence !== undefined &&
      (obj.maybeInappropriateViolence = message.maybeInappropriateViolence);
    message.revisionChangeNumber !== undefined && (obj.revisionChangeNumber = Math.round(message.revisionChangeNumber));
    message.revision !== undefined && (obj.revision = ePublishedFileRevisionToJSON(message.revision));
    if (message.availableRevisions) {
      obj.availableRevisions = message.availableRevisions.map((e) => ePublishedFileRevisionToJSON(e));
    } else {
      obj.availableRevisions = [];
    }
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) => e ? PublishedFileDetails_Reaction.toJSON(e) : undefined);
    } else {
      obj.reactions = [];
    }
    message.banTextCheckResult !== undefined &&
      (obj.banTextCheckResult = eBanContentCheckResultToJSON(message.banTextCheckResult));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails>, I>>(base?: I): PublishedFileDetails {
    return PublishedFileDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails>, I>>(object: I): PublishedFileDetails {
    const message = createBasePublishedFileDetails();
    message.result = object.result ?? 0;
    message.publishedfileid = object.publishedfileid ?? 0;
    message.creator = object.creator ?? 0;
    message.creatorAppid = object.creatorAppid ?? 0;
    message.consumerAppid = object.consumerAppid ?? 0;
    message.consumerShortcutid = object.consumerShortcutid ?? 0;
    message.filename = object.filename ?? "";
    message.fileSize = object.fileSize ?? 0;
    message.previewFileSize = object.previewFileSize ?? 0;
    message.fileUrl = object.fileUrl ?? "";
    message.previewUrl = object.previewUrl ?? "";
    message.youtubevideoid = object.youtubevideoid ?? "";
    message.url = object.url ?? "";
    message.hcontentFile = object.hcontentFile ?? 0;
    message.hcontentPreview = object.hcontentPreview ?? 0;
    message.title = object.title ?? "";
    message.fileDescription = object.fileDescription ?? "";
    message.shortDescription = object.shortDescription ?? "";
    message.timeCreated = object.timeCreated ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.visibility = object.visibility ?? 0;
    message.flags = object.flags ?? 0;
    message.workshopFile = object.workshopFile ?? false;
    message.workshopAccepted = object.workshopAccepted ?? false;
    message.showSubscribeAll = object.showSubscribeAll ?? false;
    message.numCommentsDeveloper = object.numCommentsDeveloper ?? 0;
    message.numCommentsPublic = object.numCommentsPublic ?? 0;
    message.banned = object.banned ?? false;
    message.banReason = object.banReason ?? "";
    message.banner = object.banner ?? 0;
    message.canBeDeleted = object.canBeDeleted ?? false;
    message.incompatible = object.incompatible ?? false;
    message.appName = object.appName ?? "";
    message.fileType = object.fileType ?? 0;
    message.canSubscribe = object.canSubscribe ?? false;
    message.subscriptions = object.subscriptions ?? 0;
    message.favorited = object.favorited ?? 0;
    message.followers = object.followers ?? 0;
    message.lifetimeSubscriptions = object.lifetimeSubscriptions ?? 0;
    message.lifetimeFavorited = object.lifetimeFavorited ?? 0;
    message.lifetimeFollowers = object.lifetimeFollowers ?? 0;
    message.lifetimePlaytime = object.lifetimePlaytime ?? 0;
    message.lifetimePlaytimeSessions = object.lifetimePlaytimeSessions ?? 0;
    message.views = object.views ?? 0;
    message.imageWidth = object.imageWidth ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    message.imageUrl = object.imageUrl ?? "";
    message.spoilerTag = object.spoilerTag ?? false;
    message.shortcutid = object.shortcutid ?? 0;
    message.shortcutname = object.shortcutname ?? "";
    message.numChildren = object.numChildren ?? 0;
    message.numReports = object.numReports ?? 0;
    message.previews = object.previews?.map((e) => PublishedFileDetails_Preview.fromPartial(e)) || [];
    message.tags = object.tags?.map((e) => PublishedFileDetails_Tag.fromPartial(e)) || [];
    message.children = object.children?.map((e) => PublishedFileDetails_Child.fromPartial(e)) || [];
    message.kvtags = object.kvtags?.map((e) => PublishedFileDetails_KVTag.fromPartial(e)) || [];
    message.voteData = (object.voteData !== undefined && object.voteData !== null)
      ? PublishedFileDetails_VoteData.fromPartial(object.voteData)
      : undefined;
    message.playtimeStats = (object.playtimeStats !== undefined && object.playtimeStats !== null)
      ? PublishedFileDetails_PlaytimeStats.fromPartial(object.playtimeStats)
      : undefined;
    message.timeSubscribed = object.timeSubscribed ?? 0;
    message.forSaleData = (object.forSaleData !== undefined && object.forSaleData !== null)
      ? PublishedFileDetails_ForSaleData.fromPartial(object.forSaleData)
      : undefined;
    message.metadata = object.metadata ?? "";
    message.language = object.language ?? 0;
    message.maybeInappropriateSex = object.maybeInappropriateSex ?? false;
    message.maybeInappropriateViolence = object.maybeInappropriateViolence ?? false;
    message.revisionChangeNumber = object.revisionChangeNumber ?? 0;
    message.revision = object.revision ?? 0;
    message.availableRevisions = object.availableRevisions?.map((e) => e) || [];
    message.reactions = object.reactions?.map((e) => PublishedFileDetails_Reaction.fromPartial(e)) || [];
    message.banTextCheckResult = object.banTextCheckResult ?? 0;
    return message;
  },
};

function createBasePublishedFileDetails_Tag(): PublishedFileDetails_Tag {
  return { tag: "", adminonly: false, displayName: "" };
}

export const PublishedFileDetails_Tag = {
  encode(message: PublishedFileDetails_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.adminonly === true) {
      writer.uint32(16).bool(message.adminonly);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.adminonly = reader.bool();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Tag {
    return {
      tag: isSet(object.tag) ? String(object.tag) : "",
      adminonly: isSet(object.adminonly) ? Boolean(object.adminonly) : false,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: PublishedFileDetails_Tag): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.adminonly !== undefined && (obj.adminonly = message.adminonly);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_Tag>, I>>(base?: I): PublishedFileDetails_Tag {
    return PublishedFileDetails_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_Tag>, I>>(object: I): PublishedFileDetails_Tag {
    const message = createBasePublishedFileDetails_Tag();
    message.tag = object.tag ?? "";
    message.adminonly = object.adminonly ?? false;
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBasePublishedFileDetails_Preview(): PublishedFileDetails_Preview {
  return {
    previewid: 0,
    sortorder: 0,
    url: "",
    size: 0,
    filename: "",
    youtubevideoid: "",
    previewType: 0,
    externalReference: "",
  };
}

export const PublishedFileDetails_Preview = {
  encode(message: PublishedFileDetails_Preview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.previewid !== 0) {
      writer.uint32(8).uint64(message.previewid);
    }
    if (message.sortorder !== 0) {
      writer.uint32(16).uint32(message.sortorder);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.size !== 0) {
      writer.uint32(32).uint32(message.size);
    }
    if (message.filename !== "") {
      writer.uint32(42).string(message.filename);
    }
    if (message.youtubevideoid !== "") {
      writer.uint32(50).string(message.youtubevideoid);
    }
    if (message.previewType !== 0) {
      writer.uint32(56).uint32(message.previewType);
    }
    if (message.externalReference !== "") {
      writer.uint32(66).string(message.externalReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Preview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Preview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previewid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sortorder = reader.uint32();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.size = reader.uint32();
          break;
        case 5:
          message.filename = reader.string();
          break;
        case 6:
          message.youtubevideoid = reader.string();
          break;
        case 7:
          message.previewType = reader.uint32();
          break;
        case 8:
          message.externalReference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Preview {
    return {
      previewid: isSet(object.previewid) ? Number(object.previewid) : 0,
      sortorder: isSet(object.sortorder) ? Number(object.sortorder) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      youtubevideoid: isSet(object.youtubevideoid) ? String(object.youtubevideoid) : "",
      previewType: isSet(object.previewType) ? Number(object.previewType) : 0,
      externalReference: isSet(object.externalReference) ? String(object.externalReference) : "",
    };
  },

  toJSON(message: PublishedFileDetails_Preview): unknown {
    const obj: any = {};
    message.previewid !== undefined && (obj.previewid = Math.round(message.previewid));
    message.sortorder !== undefined && (obj.sortorder = Math.round(message.sortorder));
    message.url !== undefined && (obj.url = message.url);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.filename !== undefined && (obj.filename = message.filename);
    message.youtubevideoid !== undefined && (obj.youtubevideoid = message.youtubevideoid);
    message.previewType !== undefined && (obj.previewType = Math.round(message.previewType));
    message.externalReference !== undefined && (obj.externalReference = message.externalReference);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_Preview>, I>>(base?: I): PublishedFileDetails_Preview {
    return PublishedFileDetails_Preview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_Preview>, I>>(object: I): PublishedFileDetails_Preview {
    const message = createBasePublishedFileDetails_Preview();
    message.previewid = object.previewid ?? 0;
    message.sortorder = object.sortorder ?? 0;
    message.url = object.url ?? "";
    message.size = object.size ?? 0;
    message.filename = object.filename ?? "";
    message.youtubevideoid = object.youtubevideoid ?? "";
    message.previewType = object.previewType ?? 0;
    message.externalReference = object.externalReference ?? "";
    return message;
  },
};

function createBasePublishedFileDetails_Child(): PublishedFileDetails_Child {
  return { publishedfileid: 0, sortorder: 0, fileType: 0 };
}

export const PublishedFileDetails_Child = {
  encode(message: PublishedFileDetails_Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.sortorder !== 0) {
      writer.uint32(16).uint32(message.sortorder);
    }
    if (message.fileType !== 0) {
      writer.uint32(24).uint32(message.fileType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Child {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Child();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sortorder = reader.uint32();
          break;
        case 3:
          message.fileType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_Child {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      sortorder: isSet(object.sortorder) ? Number(object.sortorder) : 0,
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_Child): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.sortorder !== undefined && (obj.sortorder = Math.round(message.sortorder));
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_Child>, I>>(base?: I): PublishedFileDetails_Child {
    return PublishedFileDetails_Child.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_Child>, I>>(object: I): PublishedFileDetails_Child {
    const message = createBasePublishedFileDetails_Child();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.sortorder = object.sortorder ?? 0;
    message.fileType = object.fileType ?? 0;
    return message;
  },
};

function createBasePublishedFileDetails_KVTag(): PublishedFileDetails_KVTag {
  return { key: "", value: "" };
}

export const PublishedFileDetails_KVTag = {
  encode(message: PublishedFileDetails_KVTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_KVTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_KVTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_KVTag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: PublishedFileDetails_KVTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_KVTag>, I>>(base?: I): PublishedFileDetails_KVTag {
    return PublishedFileDetails_KVTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_KVTag>, I>>(object: I): PublishedFileDetails_KVTag {
    const message = createBasePublishedFileDetails_KVTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePublishedFileDetails_VoteData(): PublishedFileDetails_VoteData {
  return { score: 0, votesUp: 0, votesDown: 0 };
}

export const PublishedFileDetails_VoteData = {
  encode(message: PublishedFileDetails_VoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    if (message.votesUp !== 0) {
      writer.uint32(16).uint32(message.votesUp);
    }
    if (message.votesDown !== 0) {
      writer.uint32(24).uint32(message.votesDown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_VoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_VoteData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.float();
          break;
        case 2:
          message.votesUp = reader.uint32();
          break;
        case 3:
          message.votesDown = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_VoteData {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      votesUp: isSet(object.votesUp) ? Number(object.votesUp) : 0,
      votesDown: isSet(object.votesDown) ? Number(object.votesDown) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_VoteData): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.votesUp !== undefined && (obj.votesUp = Math.round(message.votesUp));
    message.votesDown !== undefined && (obj.votesDown = Math.round(message.votesDown));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_VoteData>, I>>(base?: I): PublishedFileDetails_VoteData {
    return PublishedFileDetails_VoteData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_VoteData>, I>>(
    object: I,
  ): PublishedFileDetails_VoteData {
    const message = createBasePublishedFileDetails_VoteData();
    message.score = object.score ?? 0;
    message.votesUp = object.votesUp ?? 0;
    message.votesDown = object.votesDown ?? 0;
    return message;
  },
};

function createBasePublishedFileDetails_ForSaleData(): PublishedFileDetails_ForSaleData {
  return {
    isForSale: false,
    priceCategory: 0,
    estatus: 0,
    priceCategoryFloor: 0,
    priceIsPayWhatYouWant: false,
    discountPercentage: 0,
  };
}

export const PublishedFileDetails_ForSaleData = {
  encode(message: PublishedFileDetails_ForSaleData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isForSale === true) {
      writer.uint32(8).bool(message.isForSale);
    }
    if (message.priceCategory !== 0) {
      writer.uint32(16).uint32(message.priceCategory);
    }
    if (message.estatus !== 0) {
      writer.uint32(24).int32(message.estatus);
    }
    if (message.priceCategoryFloor !== 0) {
      writer.uint32(32).uint32(message.priceCategoryFloor);
    }
    if (message.priceIsPayWhatYouWant === true) {
      writer.uint32(40).bool(message.priceIsPayWhatYouWant);
    }
    if (message.discountPercentage !== 0) {
      writer.uint32(48).uint32(message.discountPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_ForSaleData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_ForSaleData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isForSale = reader.bool();
          break;
        case 2:
          message.priceCategory = reader.uint32();
          break;
        case 3:
          message.estatus = reader.int32() as any;
          break;
        case 4:
          message.priceCategoryFloor = reader.uint32();
          break;
        case 5:
          message.priceIsPayWhatYouWant = reader.bool();
          break;
        case 6:
          message.discountPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_ForSaleData {
    return {
      isForSale: isSet(object.isForSale) ? Boolean(object.isForSale) : false,
      priceCategory: isSet(object.priceCategory) ? Number(object.priceCategory) : 0,
      estatus: isSet(object.estatus) ? ePublishedFileForSaleStatusFromJSON(object.estatus) : 0,
      priceCategoryFloor: isSet(object.priceCategoryFloor) ? Number(object.priceCategoryFloor) : 0,
      priceIsPayWhatYouWant: isSet(object.priceIsPayWhatYouWant) ? Boolean(object.priceIsPayWhatYouWant) : false,
      discountPercentage: isSet(object.discountPercentage) ? Number(object.discountPercentage) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_ForSaleData): unknown {
    const obj: any = {};
    message.isForSale !== undefined && (obj.isForSale = message.isForSale);
    message.priceCategory !== undefined && (obj.priceCategory = Math.round(message.priceCategory));
    message.estatus !== undefined && (obj.estatus = ePublishedFileForSaleStatusToJSON(message.estatus));
    message.priceCategoryFloor !== undefined && (obj.priceCategoryFloor = Math.round(message.priceCategoryFloor));
    message.priceIsPayWhatYouWant !== undefined && (obj.priceIsPayWhatYouWant = message.priceIsPayWhatYouWant);
    message.discountPercentage !== undefined && (obj.discountPercentage = Math.round(message.discountPercentage));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_ForSaleData>, I>>(
    base?: I,
  ): PublishedFileDetails_ForSaleData {
    return PublishedFileDetails_ForSaleData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_ForSaleData>, I>>(
    object: I,
  ): PublishedFileDetails_ForSaleData {
    const message = createBasePublishedFileDetails_ForSaleData();
    message.isForSale = object.isForSale ?? false;
    message.priceCategory = object.priceCategory ?? 0;
    message.estatus = object.estatus ?? 0;
    message.priceCategoryFloor = object.priceCategoryFloor ?? 0;
    message.priceIsPayWhatYouWant = object.priceIsPayWhatYouWant ?? false;
    message.discountPercentage = object.discountPercentage ?? 0;
    return message;
  },
};

function createBasePublishedFileDetails_PlaytimeStats(): PublishedFileDetails_PlaytimeStats {
  return { playtimeSeconds: 0, numSessions: 0 };
}

export const PublishedFileDetails_PlaytimeStats = {
  encode(message: PublishedFileDetails_PlaytimeStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playtimeSeconds !== 0) {
      writer.uint32(8).uint64(message.playtimeSeconds);
    }
    if (message.numSessions !== 0) {
      writer.uint32(16).uint64(message.numSessions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_PlaytimeStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_PlaytimeStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playtimeSeconds = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.numSessions = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishedFileDetails_PlaytimeStats {
    return {
      playtimeSeconds: isSet(object.playtimeSeconds) ? Number(object.playtimeSeconds) : 0,
      numSessions: isSet(object.numSessions) ? Number(object.numSessions) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_PlaytimeStats): unknown {
    const obj: any = {};
    message.playtimeSeconds !== undefined && (obj.playtimeSeconds = Math.round(message.playtimeSeconds));
    message.numSessions !== undefined && (obj.numSessions = Math.round(message.numSessions));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_PlaytimeStats>, I>>(
    base?: I,
  ): PublishedFileDetails_PlaytimeStats {
    return PublishedFileDetails_PlaytimeStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_PlaytimeStats>, I>>(
    object: I,
  ): PublishedFileDetails_PlaytimeStats {
    const message = createBasePublishedFileDetails_PlaytimeStats();
    message.playtimeSeconds = object.playtimeSeconds ?? 0;
    message.numSessions = object.numSessions ?? 0;
    return message;
  },
};

function createBasePublishedFileDetails_Reaction(): PublishedFileDetails_Reaction {
  return { reactionid: 0, count: 0 };
}

export const PublishedFileDetails_Reaction = {
  encode(message: PublishedFileDetails_Reaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reactionid !== 0) {
      writer.uint32(8).uint32(message.reactionid);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishedFileDetails_Reaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishedFileDetails_Reaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactionid = reader.uint32();
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

  fromJSON(object: any): PublishedFileDetails_Reaction {
    return {
      reactionid: isSet(object.reactionid) ? Number(object.reactionid) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: PublishedFileDetails_Reaction): unknown {
    const obj: any = {};
    message.reactionid !== undefined && (obj.reactionid = Math.round(message.reactionid));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishedFileDetails_Reaction>, I>>(base?: I): PublishedFileDetails_Reaction {
    return PublishedFileDetails_Reaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishedFileDetails_Reaction>, I>>(
    object: I,
  ): PublishedFileDetails_Reaction {
    const message = createBasePublishedFileDetails_Reaction();
    message.reactionid = object.reactionid ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetDetailsResponse(): CPublishedFileGetDetailsResponse {
  return { publishedfiledetails: [] };
}

export const CPublishedFileGetDetailsResponse = {
  encode(message: CPublishedFileGetDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.publishedfiledetails) {
      PublishedFileDetails.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfiledetails.push(PublishedFileDetails.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetDetailsResponse {
    return {
      publishedfiledetails: Array.isArray(object?.publishedfiledetails)
        ? object.publishedfiledetails.map((e: any) => PublishedFileDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetDetailsResponse): unknown {
    const obj: any = {};
    if (message.publishedfiledetails) {
      obj.publishedfiledetails = message.publishedfiledetails.map((e) =>
        e ? PublishedFileDetails.toJSON(e) : undefined
      );
    } else {
      obj.publishedfiledetails = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetDetailsResponse>, I>>(
    base?: I,
  ): CPublishedFileGetDetailsResponse {
    return CPublishedFileGetDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetDetailsResponse>, I>>(
    object: I,
  ): CPublishedFileGetDetailsResponse {
    const message = createBaseCPublishedFileGetDetailsResponse();
    message.publishedfiledetails = object.publishedfiledetails?.map((e) => PublishedFileDetails.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileGetItemInfoRequest(): CPublishedFileGetItemInfoRequest {
  return { appid: 0, lastTimeUpdated: 0, workshopItems: [] };
}

export const CPublishedFileGetItemInfoRequest = {
  encode(message: CPublishedFileGetItemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.lastTimeUpdated !== 0) {
      writer.uint32(16).uint32(message.lastTimeUpdated);
    }
    for (const v of message.workshopItems) {
      CPublishedFileGetItemInfoRequest_WorkshopItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.lastTimeUpdated = reader.uint32();
          break;
        case 3:
          message.workshopItems.push(CPublishedFileGetItemInfoRequest_WorkshopItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemInfoRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      lastTimeUpdated: isSet(object.lastTimeUpdated) ? Number(object.lastTimeUpdated) : 0,
      workshopItems: Array.isArray(object?.workshopItems)
        ? object.workshopItems.map((e: any) => CPublishedFileGetItemInfoRequest_WorkshopItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetItemInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.lastTimeUpdated !== undefined && (obj.lastTimeUpdated = Math.round(message.lastTimeUpdated));
    if (message.workshopItems) {
      obj.workshopItems = message.workshopItems.map((e) =>
        e ? CPublishedFileGetItemInfoRequest_WorkshopItem.toJSON(e) : undefined
      );
    } else {
      obj.workshopItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemInfoRequest>, I>>(
    base?: I,
  ): CPublishedFileGetItemInfoRequest {
    return CPublishedFileGetItemInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemInfoRequest>, I>>(
    object: I,
  ): CPublishedFileGetItemInfoRequest {
    const message = createBaseCPublishedFileGetItemInfoRequest();
    message.appid = object.appid ?? 0;
    message.lastTimeUpdated = object.lastTimeUpdated ?? 0;
    message.workshopItems =
      object.workshopItems?.map((e) => CPublishedFileGetItemInfoRequest_WorkshopItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileGetItemInfoRequest_WorkshopItem(): CPublishedFileGetItemInfoRequest_WorkshopItem {
  return { publishedFileId: 0, timeUpdated: 0, desiredRevision: 0 };
}

export const CPublishedFileGetItemInfoRequest_WorkshopItem = {
  encode(message: CPublishedFileGetItemInfoRequest_WorkshopItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(16).uint32(message.timeUpdated);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(24).int32(message.desiredRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemInfoRequest_WorkshopItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemInfoRequest_WorkshopItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.timeUpdated = reader.uint32();
          break;
        case 3:
          message.desiredRevision = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemInfoRequest_WorkshopItem {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
    };
  },

  toJSON(message: CPublishedFileGetItemInfoRequest_WorkshopItem): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemInfoRequest_WorkshopItem>, I>>(
    base?: I,
  ): CPublishedFileGetItemInfoRequest_WorkshopItem {
    return CPublishedFileGetItemInfoRequest_WorkshopItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemInfoRequest_WorkshopItem>, I>>(
    object: I,
  ): CPublishedFileGetItemInfoRequest_WorkshopItem {
    const message = createBaseCPublishedFileGetItemInfoRequest_WorkshopItem();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.desiredRevision = object.desiredRevision ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetItemInfoResponse(): CPublishedFileGetItemInfoResponse {
  return { updateTime: 0, workshopItems: [], privateItems: [] };
}

export const CPublishedFileGetItemInfoResponse = {
  encode(message: CPublishedFileGetItemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateTime !== 0) {
      writer.uint32(8).uint32(message.updateTime);
    }
    for (const v of message.workshopItems) {
      CPublishedFileGetItemInfoResponse_WorkshopItemInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.privateItems) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateTime = reader.uint32();
          break;
        case 2:
          message.workshopItems.push(
            CPublishedFileGetItemInfoResponse_WorkshopItemInfo.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.privateItems.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.privateItems.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemInfoResponse {
    return {
      updateTime: isSet(object.updateTime) ? Number(object.updateTime) : 0,
      workshopItems: Array.isArray(object?.workshopItems)
        ? object.workshopItems.map((e: any) => CPublishedFileGetItemInfoResponse_WorkshopItemInfo.fromJSON(e))
        : [],
      privateItems: Array.isArray(object?.privateItems) ? object.privateItems.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPublishedFileGetItemInfoResponse): unknown {
    const obj: any = {};
    message.updateTime !== undefined && (obj.updateTime = Math.round(message.updateTime));
    if (message.workshopItems) {
      obj.workshopItems = message.workshopItems.map((e) =>
        e ? CPublishedFileGetItemInfoResponse_WorkshopItemInfo.toJSON(e) : undefined
      );
    } else {
      obj.workshopItems = [];
    }
    if (message.privateItems) {
      obj.privateItems = message.privateItems.map((e) => Math.round(e));
    } else {
      obj.privateItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemInfoResponse>, I>>(
    base?: I,
  ): CPublishedFileGetItemInfoResponse {
    return CPublishedFileGetItemInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemInfoResponse>, I>>(
    object: I,
  ): CPublishedFileGetItemInfoResponse {
    const message = createBaseCPublishedFileGetItemInfoResponse();
    message.updateTime = object.updateTime ?? 0;
    message.workshopItems =
      object.workshopItems?.map((e) => CPublishedFileGetItemInfoResponse_WorkshopItemInfo.fromPartial(e)) || [];
    message.privateItems = object.privateItems?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileGetItemInfoResponse_WorkshopItemInfo(): CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
  return { publishedFileId: 0, timeUpdated: 0, manifestId: 0, flags: 0 };
}

export const CPublishedFileGetItemInfoResponse_WorkshopItemInfo = {
  encode(
    message: CPublishedFileGetItemInfoResponse_WorkshopItemInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(16).uint32(message.timeUpdated);
    }
    if (message.manifestId !== 0) {
      writer.uint32(25).fixed64(message.manifestId);
    }
    if (message.flags !== 0) {
      writer.uint32(32).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemInfoResponse_WorkshopItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.timeUpdated = reader.uint32();
          break;
        case 3:
          message.manifestId = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      manifestId: isSet(object.manifestId) ? Number(object.manifestId) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CPublishedFileGetItemInfoResponse_WorkshopItemInfo): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.manifestId !== undefined && (obj.manifestId = Math.round(message.manifestId));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemInfoResponse_WorkshopItemInfo>, I>>(
    base?: I,
  ): CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
    return CPublishedFileGetItemInfoResponse_WorkshopItemInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemInfoResponse_WorkshopItemInfo>, I>>(
    object: I,
  ): CPublishedFileGetItemInfoResponse_WorkshopItemInfo {
    const message = createBaseCPublishedFileGetItemInfoResponse_WorkshopItemInfo();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.manifestId = object.manifestId ?? 0;
    message.flags = object.flags ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetUserFilesRequest(): CPublishedFileGetUserFilesRequest {
  return {
    steamid: 0,
    appid: 0,
    page: 0,
    numperpage: 0,
    type: "",
    sortmethod: "",
    privacy: 0,
    requiredtags: [],
    excludedtags: [],
    requiredKvTags: [],
    filetype: 0,
    creatorAppid: 0,
    matchCloudFilename: "",
    cacheMaxAgeSeconds: 0,
    language: 0,
    taggroups: [],
    totalonly: false,
    idsOnly: false,
    returnVoteData: false,
    returnTags: false,
    returnKvTags: false,
    returnPreviews: false,
    returnChildren: false,
    returnShortDescription: false,
    returnForSaleData: false,
    returnMetadata: false,
    returnPlaytimeStats: 0,
    stripDescriptionBbcode: false,
    returnReactions: false,
    startindexOverride: 0,
    desiredRevision: 0,
    returnApps: false,
  };
}

export const CPublishedFileGetUserFilesRequest = {
  encode(message: CPublishedFileGetUserFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.page !== 0) {
      writer.uint32(32).uint32(message.page);
    }
    if (message.numperpage !== 0) {
      writer.uint32(40).uint32(message.numperpage);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.sortmethod !== "") {
      writer.uint32(58).string(message.sortmethod);
    }
    if (message.privacy !== 0) {
      writer.uint32(72).uint32(message.privacy);
    }
    for (const v of message.requiredtags) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.excludedtags) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.requiredKvTags) {
      CPublishedFileGetUserFilesRequest_KVTag.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.filetype !== 0) {
      writer.uint32(112).uint32(message.filetype);
    }
    if (message.creatorAppid !== 0) {
      writer.uint32(120).uint32(message.creatorAppid);
    }
    if (message.matchCloudFilename !== "") {
      writer.uint32(130).string(message.matchCloudFilename);
    }
    if (message.cacheMaxAgeSeconds !== 0) {
      writer.uint32(216).uint32(message.cacheMaxAgeSeconds);
    }
    if (message.language !== 0) {
      writer.uint32(232).int32(message.language);
    }
    for (const v of message.taggroups) {
      CPublishedFileGetUserFilesRequest_TagGroup.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    if (message.totalonly === true) {
      writer.uint32(136).bool(message.totalonly);
    }
    if (message.idsOnly === true) {
      writer.uint32(144).bool(message.idsOnly);
    }
    if (message.returnVoteData === true) {
      writer.uint32(152).bool(message.returnVoteData);
    }
    if (message.returnTags === true) {
      writer.uint32(160).bool(message.returnTags);
    }
    if (message.returnKvTags === true) {
      writer.uint32(168).bool(message.returnKvTags);
    }
    if (message.returnPreviews === true) {
      writer.uint32(176).bool(message.returnPreviews);
    }
    if (message.returnChildren === true) {
      writer.uint32(184).bool(message.returnChildren);
    }
    if (message.returnShortDescription === true) {
      writer.uint32(192).bool(message.returnShortDescription);
    }
    if (message.returnForSaleData === true) {
      writer.uint32(208).bool(message.returnForSaleData);
    }
    if (message.returnMetadata === true) {
      writer.uint32(224).bool(message.returnMetadata);
    }
    if (message.returnPlaytimeStats !== 0) {
      writer.uint32(248).uint32(message.returnPlaytimeStats);
    }
    if (message.stripDescriptionBbcode === true) {
      writer.uint32(256).bool(message.stripDescriptionBbcode);
    }
    if (message.returnReactions === true) {
      writer.uint32(280).bool(message.returnReactions);
    }
    if (message.startindexOverride !== 0) {
      writer.uint32(200).uint32(message.startindexOverride);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(264).int32(message.desiredRevision);
    }
    if (message.returnApps === true) {
      writer.uint32(288).bool(message.returnApps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 4:
          message.page = reader.uint32();
          break;
        case 5:
          message.numperpage = reader.uint32();
          break;
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.sortmethod = reader.string();
          break;
        case 9:
          message.privacy = reader.uint32();
          break;
        case 10:
          message.requiredtags.push(reader.string());
          break;
        case 11:
          message.excludedtags.push(reader.string());
          break;
        case 30:
          message.requiredKvTags.push(CPublishedFileGetUserFilesRequest_KVTag.decode(reader, reader.uint32()));
          break;
        case 14:
          message.filetype = reader.uint32();
          break;
        case 15:
          message.creatorAppid = reader.uint32();
          break;
        case 16:
          message.matchCloudFilename = reader.string();
          break;
        case 27:
          message.cacheMaxAgeSeconds = reader.uint32();
          break;
        case 29:
          message.language = reader.int32();
          break;
        case 34:
          message.taggroups.push(CPublishedFileGetUserFilesRequest_TagGroup.decode(reader, reader.uint32()));
          break;
        case 17:
          message.totalonly = reader.bool();
          break;
        case 18:
          message.idsOnly = reader.bool();
          break;
        case 19:
          message.returnVoteData = reader.bool();
          break;
        case 20:
          message.returnTags = reader.bool();
          break;
        case 21:
          message.returnKvTags = reader.bool();
          break;
        case 22:
          message.returnPreviews = reader.bool();
          break;
        case 23:
          message.returnChildren = reader.bool();
          break;
        case 24:
          message.returnShortDescription = reader.bool();
          break;
        case 26:
          message.returnForSaleData = reader.bool();
          break;
        case 28:
          message.returnMetadata = reader.bool();
          break;
        case 31:
          message.returnPlaytimeStats = reader.uint32();
          break;
        case 32:
          message.stripDescriptionBbcode = reader.bool();
          break;
        case 35:
          message.returnReactions = reader.bool();
          break;
        case 25:
          message.startindexOverride = reader.uint32();
          break;
        case 33:
          message.desiredRevision = reader.int32() as any;
          break;
        case 36:
          message.returnApps = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      numperpage: isSet(object.numperpage) ? Number(object.numperpage) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      sortmethod: isSet(object.sortmethod) ? String(object.sortmethod) : "",
      privacy: isSet(object.privacy) ? Number(object.privacy) : 0,
      requiredtags: Array.isArray(object?.requiredtags) ? object.requiredtags.map((e: any) => String(e)) : [],
      excludedtags: Array.isArray(object?.excludedtags) ? object.excludedtags.map((e: any) => String(e)) : [],
      requiredKvTags: Array.isArray(object?.requiredKvTags)
        ? object.requiredKvTags.map((e: any) => CPublishedFileGetUserFilesRequest_KVTag.fromJSON(e))
        : [],
      filetype: isSet(object.filetype) ? Number(object.filetype) : 0,
      creatorAppid: isSet(object.creatorAppid) ? Number(object.creatorAppid) : 0,
      matchCloudFilename: isSet(object.matchCloudFilename) ? String(object.matchCloudFilename) : "",
      cacheMaxAgeSeconds: isSet(object.cacheMaxAgeSeconds) ? Number(object.cacheMaxAgeSeconds) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
      taggroups: Array.isArray(object?.taggroups)
        ? object.taggroups.map((e: any) => CPublishedFileGetUserFilesRequest_TagGroup.fromJSON(e))
        : [],
      totalonly: isSet(object.totalonly) ? Boolean(object.totalonly) : false,
      idsOnly: isSet(object.idsOnly) ? Boolean(object.idsOnly) : false,
      returnVoteData: isSet(object.returnVoteData) ? Boolean(object.returnVoteData) : false,
      returnTags: isSet(object.returnTags) ? Boolean(object.returnTags) : false,
      returnKvTags: isSet(object.returnKvTags) ? Boolean(object.returnKvTags) : false,
      returnPreviews: isSet(object.returnPreviews) ? Boolean(object.returnPreviews) : false,
      returnChildren: isSet(object.returnChildren) ? Boolean(object.returnChildren) : false,
      returnShortDescription: isSet(object.returnShortDescription) ? Boolean(object.returnShortDescription) : false,
      returnForSaleData: isSet(object.returnForSaleData) ? Boolean(object.returnForSaleData) : false,
      returnMetadata: isSet(object.returnMetadata) ? Boolean(object.returnMetadata) : false,
      returnPlaytimeStats: isSet(object.returnPlaytimeStats) ? Number(object.returnPlaytimeStats) : 0,
      stripDescriptionBbcode: isSet(object.stripDescriptionBbcode) ? Boolean(object.stripDescriptionBbcode) : false,
      returnReactions: isSet(object.returnReactions) ? Boolean(object.returnReactions) : false,
      startindexOverride: isSet(object.startindexOverride) ? Number(object.startindexOverride) : 0,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
      returnApps: isSet(object.returnApps) ? Boolean(object.returnApps) : false,
    };
  },

  toJSON(message: CPublishedFileGetUserFilesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.numperpage !== undefined && (obj.numperpage = Math.round(message.numperpage));
    message.type !== undefined && (obj.type = message.type);
    message.sortmethod !== undefined && (obj.sortmethod = message.sortmethod);
    message.privacy !== undefined && (obj.privacy = Math.round(message.privacy));
    if (message.requiredtags) {
      obj.requiredtags = message.requiredtags.map((e) => e);
    } else {
      obj.requiredtags = [];
    }
    if (message.excludedtags) {
      obj.excludedtags = message.excludedtags.map((e) => e);
    } else {
      obj.excludedtags = [];
    }
    if (message.requiredKvTags) {
      obj.requiredKvTags = message.requiredKvTags.map((e) =>
        e ? CPublishedFileGetUserFilesRequest_KVTag.toJSON(e) : undefined
      );
    } else {
      obj.requiredKvTags = [];
    }
    message.filetype !== undefined && (obj.filetype = Math.round(message.filetype));
    message.creatorAppid !== undefined && (obj.creatorAppid = Math.round(message.creatorAppid));
    message.matchCloudFilename !== undefined && (obj.matchCloudFilename = message.matchCloudFilename);
    message.cacheMaxAgeSeconds !== undefined && (obj.cacheMaxAgeSeconds = Math.round(message.cacheMaxAgeSeconds));
    message.language !== undefined && (obj.language = Math.round(message.language));
    if (message.taggroups) {
      obj.taggroups = message.taggroups.map((e) =>
        e ? CPublishedFileGetUserFilesRequest_TagGroup.toJSON(e) : undefined
      );
    } else {
      obj.taggroups = [];
    }
    message.totalonly !== undefined && (obj.totalonly = message.totalonly);
    message.idsOnly !== undefined && (obj.idsOnly = message.idsOnly);
    message.returnVoteData !== undefined && (obj.returnVoteData = message.returnVoteData);
    message.returnTags !== undefined && (obj.returnTags = message.returnTags);
    message.returnKvTags !== undefined && (obj.returnKvTags = message.returnKvTags);
    message.returnPreviews !== undefined && (obj.returnPreviews = message.returnPreviews);
    message.returnChildren !== undefined && (obj.returnChildren = message.returnChildren);
    message.returnShortDescription !== undefined && (obj.returnShortDescription = message.returnShortDescription);
    message.returnForSaleData !== undefined && (obj.returnForSaleData = message.returnForSaleData);
    message.returnMetadata !== undefined && (obj.returnMetadata = message.returnMetadata);
    message.returnPlaytimeStats !== undefined && (obj.returnPlaytimeStats = Math.round(message.returnPlaytimeStats));
    message.stripDescriptionBbcode !== undefined && (obj.stripDescriptionBbcode = message.stripDescriptionBbcode);
    message.returnReactions !== undefined && (obj.returnReactions = message.returnReactions);
    message.startindexOverride !== undefined && (obj.startindexOverride = Math.round(message.startindexOverride));
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    message.returnApps !== undefined && (obj.returnApps = message.returnApps);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest>, I>>(
    base?: I,
  ): CPublishedFileGetUserFilesRequest {
    return CPublishedFileGetUserFilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest>, I>>(
    object: I,
  ): CPublishedFileGetUserFilesRequest {
    const message = createBaseCPublishedFileGetUserFilesRequest();
    message.steamid = object.steamid ?? 0;
    message.appid = object.appid ?? 0;
    message.page = object.page ?? 0;
    message.numperpage = object.numperpage ?? 0;
    message.type = object.type ?? "";
    message.sortmethod = object.sortmethod ?? "";
    message.privacy = object.privacy ?? 0;
    message.requiredtags = object.requiredtags?.map((e) => e) || [];
    message.excludedtags = object.excludedtags?.map((e) => e) || [];
    message.requiredKvTags =
      object.requiredKvTags?.map((e) => CPublishedFileGetUserFilesRequest_KVTag.fromPartial(e)) || [];
    message.filetype = object.filetype ?? 0;
    message.creatorAppid = object.creatorAppid ?? 0;
    message.matchCloudFilename = object.matchCloudFilename ?? "";
    message.cacheMaxAgeSeconds = object.cacheMaxAgeSeconds ?? 0;
    message.language = object.language ?? 0;
    message.taggroups = object.taggroups?.map((e) => CPublishedFileGetUserFilesRequest_TagGroup.fromPartial(e)) || [];
    message.totalonly = object.totalonly ?? false;
    message.idsOnly = object.idsOnly ?? false;
    message.returnVoteData = object.returnVoteData ?? false;
    message.returnTags = object.returnTags ?? false;
    message.returnKvTags = object.returnKvTags ?? false;
    message.returnPreviews = object.returnPreviews ?? false;
    message.returnChildren = object.returnChildren ?? false;
    message.returnShortDescription = object.returnShortDescription ?? false;
    message.returnForSaleData = object.returnForSaleData ?? false;
    message.returnMetadata = object.returnMetadata ?? false;
    message.returnPlaytimeStats = object.returnPlaytimeStats ?? 0;
    message.stripDescriptionBbcode = object.stripDescriptionBbcode ?? false;
    message.returnReactions = object.returnReactions ?? false;
    message.startindexOverride = object.startindexOverride ?? 0;
    message.desiredRevision = object.desiredRevision ?? 0;
    message.returnApps = object.returnApps ?? false;
    return message;
  },
};

function createBaseCPublishedFileGetUserFilesRequest_KVTag(): CPublishedFileGetUserFilesRequest_KVTag {
  return { key: "", value: "" };
}

export const CPublishedFileGetUserFilesRequest_KVTag = {
  encode(message: CPublishedFileGetUserFilesRequest_KVTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesRequest_KVTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesRequest_KVTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesRequest_KVTag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CPublishedFileGetUserFilesRequest_KVTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest_KVTag>, I>>(
    base?: I,
  ): CPublishedFileGetUserFilesRequest_KVTag {
    return CPublishedFileGetUserFilesRequest_KVTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest_KVTag>, I>>(
    object: I,
  ): CPublishedFileGetUserFilesRequest_KVTag {
    const message = createBaseCPublishedFileGetUserFilesRequest_KVTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCPublishedFileGetUserFilesRequest_TagGroup(): CPublishedFileGetUserFilesRequest_TagGroup {
  return { tags: [] };
}

export const CPublishedFileGetUserFilesRequest_TagGroup = {
  encode(message: CPublishedFileGetUserFilesRequest_TagGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesRequest_TagGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesRequest_TagGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesRequest_TagGroup {
    return { tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CPublishedFileGetUserFilesRequest_TagGroup): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest_TagGroup>, I>>(
    base?: I,
  ): CPublishedFileGetUserFilesRequest_TagGroup {
    return CPublishedFileGetUserFilesRequest_TagGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserFilesRequest_TagGroup>, I>>(
    object: I,
  ): CPublishedFileGetUserFilesRequest_TagGroup {
    const message = createBaseCPublishedFileGetUserFilesRequest_TagGroup();
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileGetUserFilesResponse(): CPublishedFileGetUserFilesResponse {
  return { total: 0, startindex: 0, publishedfiledetails: [], apps: [] };
}

export const CPublishedFileGetUserFilesResponse = {
  encode(message: CPublishedFileGetUserFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.startindex !== 0) {
      writer.uint32(16).uint32(message.startindex);
    }
    for (const v of message.publishedfiledetails) {
      PublishedFileDetails.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.apps) {
      CPublishedFileGetUserFilesResponse_App.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.startindex = reader.uint32();
          break;
        case 3:
          message.publishedfiledetails.push(PublishedFileDetails.decode(reader, reader.uint32()));
          break;
        case 4:
          message.apps.push(CPublishedFileGetUserFilesResponse_App.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesResponse {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      startindex: isSet(object.startindex) ? Number(object.startindex) : 0,
      publishedfiledetails: Array.isArray(object?.publishedfiledetails)
        ? object.publishedfiledetails.map((e: any) => PublishedFileDetails.fromJSON(e))
        : [],
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CPublishedFileGetUserFilesResponse_App.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetUserFilesResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.startindex !== undefined && (obj.startindex = Math.round(message.startindex));
    if (message.publishedfiledetails) {
      obj.publishedfiledetails = message.publishedfiledetails.map((e) =>
        e ? PublishedFileDetails.toJSON(e) : undefined
      );
    } else {
      obj.publishedfiledetails = [];
    }
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CPublishedFileGetUserFilesResponse_App.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserFilesResponse>, I>>(
    base?: I,
  ): CPublishedFileGetUserFilesResponse {
    return CPublishedFileGetUserFilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserFilesResponse>, I>>(
    object: I,
  ): CPublishedFileGetUserFilesResponse {
    const message = createBaseCPublishedFileGetUserFilesResponse();
    message.total = object.total ?? 0;
    message.startindex = object.startindex ?? 0;
    message.publishedfiledetails = object.publishedfiledetails?.map((e) => PublishedFileDetails.fromPartial(e)) || [];
    message.apps = object.apps?.map((e) => CPublishedFileGetUserFilesResponse_App.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileGetUserFilesResponse_App(): CPublishedFileGetUserFilesResponse_App {
  return { appid: 0, name: "", shortcutid: 0, private: false };
}

export const CPublishedFileGetUserFilesResponse_App = {
  encode(message: CPublishedFileGetUserFilesResponse_App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.shortcutid !== 0) {
      writer.uint32(24).uint32(message.shortcutid);
    }
    if (message.private === true) {
      writer.uint32(32).bool(message.private);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserFilesResponse_App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserFilesResponse_App();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.shortcutid = reader.uint32();
          break;
        case 4:
          message.private = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserFilesResponse_App {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      shortcutid: isSet(object.shortcutid) ? Number(object.shortcutid) : 0,
      private: isSet(object.private) ? Boolean(object.private) : false,
    };
  },

  toJSON(message: CPublishedFileGetUserFilesResponse_App): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.shortcutid !== undefined && (obj.shortcutid = Math.round(message.shortcutid));
    message.private !== undefined && (obj.private = message.private);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserFilesResponse_App>, I>>(
    base?: I,
  ): CPublishedFileGetUserFilesResponse_App {
    return CPublishedFileGetUserFilesResponse_App.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserFilesResponse_App>, I>>(
    object: I,
  ): CPublishedFileGetUserFilesResponse_App {
    const message = createBaseCPublishedFileGetUserFilesResponse_App();
    message.appid = object.appid ?? 0;
    message.name = object.name ?? "";
    message.shortcutid = object.shortcutid ?? 0;
    message.private = object.private ?? false;
    return message;
  },
};

function createBaseCPublishedFileAreFilesInSubscriptionListRequest(): CPublishedFileAreFilesInSubscriptionListRequest {
  return { appid: 0, publishedfileids: [], listtype: 0, filetype: 0, workshopfiletype: 0 };
}

export const CPublishedFileAreFilesInSubscriptionListRequest = {
  encode(
    message: CPublishedFileAreFilesInSubscriptionListRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    writer.uint32(18).fork();
    for (const v of message.publishedfileids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.listtype !== 0) {
      writer.uint32(24).uint32(message.listtype);
    }
    if (message.filetype !== 0) {
      writer.uint32(32).uint32(message.filetype);
    }
    if (message.workshopfiletype !== 0) {
      writer.uint32(40).uint32(message.workshopfiletype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAreFilesInSubscriptionListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAreFilesInSubscriptionListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        case 3:
          message.listtype = reader.uint32();
          break;
        case 4:
          message.filetype = reader.uint32();
          break;
        case 5:
          message.workshopfiletype = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileAreFilesInSubscriptionListRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
      listtype: isSet(object.listtype) ? Number(object.listtype) : 0,
      filetype: isSet(object.filetype) ? Number(object.filetype) : 0,
      workshopfiletype: isSet(object.workshopfiletype) ? Number(object.workshopfiletype) : 0,
    };
  },

  toJSON(message: CPublishedFileAreFilesInSubscriptionListRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    message.listtype !== undefined && (obj.listtype = Math.round(message.listtype));
    message.filetype !== undefined && (obj.filetype = Math.round(message.filetype));
    message.workshopfiletype !== undefined && (obj.workshopfiletype = Math.round(message.workshopfiletype));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListRequest>, I>>(
    base?: I,
  ): CPublishedFileAreFilesInSubscriptionListRequest {
    return CPublishedFileAreFilesInSubscriptionListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListRequest>, I>>(
    object: I,
  ): CPublishedFileAreFilesInSubscriptionListRequest {
    const message = createBaseCPublishedFileAreFilesInSubscriptionListRequest();
    message.appid = object.appid ?? 0;
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    message.listtype = object.listtype ?? 0;
    message.filetype = object.filetype ?? 0;
    message.workshopfiletype = object.workshopfiletype ?? 0;
    return message;
  },
};

function createBaseCPublishedFileAreFilesInSubscriptionListResponse(): CPublishedFileAreFilesInSubscriptionListResponse {
  return { files: [] };
}

export const CPublishedFileAreFilesInSubscriptionListResponse = {
  encode(
    message: CPublishedFileAreFilesInSubscriptionListResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.files) {
      CPublishedFileAreFilesInSubscriptionListResponse_InList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAreFilesInSubscriptionListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAreFilesInSubscriptionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(CPublishedFileAreFilesInSubscriptionListResponse_InList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileAreFilesInSubscriptionListResponse {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => CPublishedFileAreFilesInSubscriptionListResponse_InList.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileAreFilesInSubscriptionListResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? CPublishedFileAreFilesInSubscriptionListResponse_InList.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListResponse>, I>>(
    base?: I,
  ): CPublishedFileAreFilesInSubscriptionListResponse {
    return CPublishedFileAreFilesInSubscriptionListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListResponse>, I>>(
    object: I,
  ): CPublishedFileAreFilesInSubscriptionListResponse {
    const message = createBaseCPublishedFileAreFilesInSubscriptionListResponse();
    message.files = object.files?.map((e) => CPublishedFileAreFilesInSubscriptionListResponse_InList.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCPublishedFileAreFilesInSubscriptionListResponse_InList(): CPublishedFileAreFilesInSubscriptionListResponse_InList {
  return { publishedfileid: 0, inlist: false };
}

export const CPublishedFileAreFilesInSubscriptionListResponse_InList = {
  encode(
    message: CPublishedFileAreFilesInSubscriptionListResponse_InList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(9).fixed64(message.publishedfileid);
    }
    if (message.inlist === true) {
      writer.uint32(16).bool(message.inlist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAreFilesInSubscriptionListResponse_InList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAreFilesInSubscriptionListResponse_InList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.inlist = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileAreFilesInSubscriptionListResponse_InList {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      inlist: isSet(object.inlist) ? Boolean(object.inlist) : false,
    };
  },

  toJSON(message: CPublishedFileAreFilesInSubscriptionListResponse_InList): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.inlist !== undefined && (obj.inlist = message.inlist);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListResponse_InList>, I>>(
    base?: I,
  ): CPublishedFileAreFilesInSubscriptionListResponse_InList {
    return CPublishedFileAreFilesInSubscriptionListResponse_InList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAreFilesInSubscriptionListResponse_InList>, I>>(
    object: I,
  ): CPublishedFileAreFilesInSubscriptionListResponse_InList {
    const message = createBaseCPublishedFileAreFilesInSubscriptionListResponse_InList();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.inlist = object.inlist ?? false;
    return message;
  },
};

function createBaseCPublishedFileUpdateRequest(): CPublishedFileUpdateRequest {
  return {
    appid: 0,
    publishedfileid: 0,
    title: "",
    fileDescription: "",
    visibility: 0,
    tags: [],
    filename: "",
    previewFilename: "",
    spoilerTag: false,
    imageWidth: 0,
    imageHeight: 0,
  };
}

export const CPublishedFileUpdateRequest = {
  encode(message: CPublishedFileUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.publishedfileid !== 0) {
      writer.uint32(17).fixed64(message.publishedfileid);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.fileDescription !== "") {
      writer.uint32(34).string(message.fileDescription);
    }
    if (message.visibility !== 0) {
      writer.uint32(40).uint32(message.visibility);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.filename !== "") {
      writer.uint32(58).string(message.filename);
    }
    if (message.previewFilename !== "") {
      writer.uint32(66).string(message.previewFilename);
    }
    if (message.spoilerTag === true) {
      writer.uint32(80).bool(message.spoilerTag);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(120).uint32(message.imageWidth);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(128).uint32(message.imageHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.fileDescription = reader.string();
          break;
        case 5:
          message.visibility = reader.uint32();
          break;
        case 6:
          message.tags.push(reader.string());
          break;
        case 7:
          message.filename = reader.string();
          break;
        case 8:
          message.previewFilename = reader.string();
          break;
        case 10:
          message.spoilerTag = reader.bool();
          break;
        case 15:
          message.imageWidth = reader.uint32();
          break;
        case 16:
          message.imageHeight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileUpdateRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      fileDescription: isSet(object.fileDescription) ? String(object.fileDescription) : "",
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      filename: isSet(object.filename) ? String(object.filename) : "",
      previewFilename: isSet(object.previewFilename) ? String(object.previewFilename) : "",
      spoilerTag: isSet(object.spoilerTag) ? Boolean(object.spoilerTag) : false,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
    };
  },

  toJSON(message: CPublishedFileUpdateRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.title !== undefined && (obj.title = message.title);
    message.fileDescription !== undefined && (obj.fileDescription = message.fileDescription);
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.filename !== undefined && (obj.filename = message.filename);
    message.previewFilename !== undefined && (obj.previewFilename = message.previewFilename);
    message.spoilerTag !== undefined && (obj.spoilerTag = message.spoilerTag);
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined && (obj.imageHeight = Math.round(message.imageHeight));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileUpdateRequest>, I>>(base?: I): CPublishedFileUpdateRequest {
    return CPublishedFileUpdateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileUpdateRequest>, I>>(object: I): CPublishedFileUpdateRequest {
    const message = createBaseCPublishedFileUpdateRequest();
    message.appid = object.appid ?? 0;
    message.publishedfileid = object.publishedfileid ?? 0;
    message.title = object.title ?? "";
    message.fileDescription = object.fileDescription ?? "";
    message.visibility = object.visibility ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.filename = object.filename ?? "";
    message.previewFilename = object.previewFilename ?? "";
    message.spoilerTag = object.spoilerTag ?? false;
    message.imageWidth = object.imageWidth ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    return message;
  },
};

function createBaseCPublishedFileUpdateResponse(): CPublishedFileUpdateResponse {
  return {};
}

export const CPublishedFileUpdateResponse = {
  encode(_: CPublishedFileUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileUpdateResponse();
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

  fromJSON(_: any): CPublishedFileUpdateResponse {
    return {};
  },

  toJSON(_: CPublishedFileUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileUpdateResponse>, I>>(base?: I): CPublishedFileUpdateResponse {
    return CPublishedFileUpdateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileUpdateResponse>, I>>(_: I): CPublishedFileUpdateResponse {
    const message = createBaseCPublishedFileUpdateResponse();
    return message;
  },
};

function createBaseCPublishedFileDeleteRequest(): CPublishedFileDeleteRequest {
  return { publishedfileid: 0 };
}

export const CPublishedFileDeleteRequest = {
  encode(message: CPublishedFileDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(9).fixed64(message.publishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileDeleteRequest {
    return { publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0 };
  },

  toJSON(message: CPublishedFileDeleteRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileDeleteRequest>, I>>(base?: I): CPublishedFileDeleteRequest {
    return CPublishedFileDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileDeleteRequest>, I>>(object: I): CPublishedFileDeleteRequest {
    const message = createBaseCPublishedFileDeleteRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileDeleteResponse(): CPublishedFileDeleteResponse {
  return {};
}

export const CPublishedFileDeleteResponse = {
  encode(_: CPublishedFileDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileDeleteResponse();
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

  fromJSON(_: any): CPublishedFileDeleteResponse {
    return {};
  },

  toJSON(_: CPublishedFileDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileDeleteResponse>, I>>(base?: I): CPublishedFileDeleteResponse {
    return CPublishedFileDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileDeleteResponse>, I>>(_: I): CPublishedFileDeleteResponse {
    const message = createBaseCPublishedFileDeleteResponse();
    return message;
  },
};

function createBaseCPublishedFileGetChangeHistoryEntryRequest(): CPublishedFileGetChangeHistoryEntryRequest {
  return { publishedfileid: 0, timestamp: 0, language: 0 };
}

export const CPublishedFileGetChangeHistoryEntryRequest = {
  encode(message: CPublishedFileGetChangeHistoryEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(9).fixed64(message.publishedfileid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.language !== 0) {
      writer.uint32(24).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetChangeHistoryEntryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetChangeHistoryEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.timestamp = reader.uint32();
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

  fromJSON(object: any): CPublishedFileGetChangeHistoryEntryRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CPublishedFileGetChangeHistoryEntryRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryEntryRequest>, I>>(
    base?: I,
  ): CPublishedFileGetChangeHistoryEntryRequest {
    return CPublishedFileGetChangeHistoryEntryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryEntryRequest>, I>>(
    object: I,
  ): CPublishedFileGetChangeHistoryEntryRequest {
    const message = createBaseCPublishedFileGetChangeHistoryEntryRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetChangeHistoryEntryResponse(): CPublishedFileGetChangeHistoryEntryResponse {
  return { changeDescription: "", language: 0 };
}

export const CPublishedFileGetChangeHistoryEntryResponse = {
  encode(message: CPublishedFileGetChangeHistoryEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeDescription !== "") {
      writer.uint32(10).string(message.changeDescription);
    }
    if (message.language !== 0) {
      writer.uint32(16).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetChangeHistoryEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetChangeHistoryEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changeDescription = reader.string();
          break;
        case 2:
          message.language = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetChangeHistoryEntryResponse {
    return {
      changeDescription: isSet(object.changeDescription) ? String(object.changeDescription) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CPublishedFileGetChangeHistoryEntryResponse): unknown {
    const obj: any = {};
    message.changeDescription !== undefined && (obj.changeDescription = message.changeDescription);
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryEntryResponse>, I>>(
    base?: I,
  ): CPublishedFileGetChangeHistoryEntryResponse {
    return CPublishedFileGetChangeHistoryEntryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryEntryResponse>, I>>(
    object: I,
  ): CPublishedFileGetChangeHistoryEntryResponse {
    const message = createBaseCPublishedFileGetChangeHistoryEntryResponse();
    message.changeDescription = object.changeDescription ?? "";
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetChangeHistoryRequest(): CPublishedFileGetChangeHistoryRequest {
  return { publishedfileid: 0, totalOnly: false, startindex: 0, count: 0, language: 0 };
}

export const CPublishedFileGetChangeHistoryRequest = {
  encode(message: CPublishedFileGetChangeHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(9).fixed64(message.publishedfileid);
    }
    if (message.totalOnly === true) {
      writer.uint32(16).bool(message.totalOnly);
    }
    if (message.startindex !== 0) {
      writer.uint32(24).uint32(message.startindex);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.language !== 0) {
      writer.uint32(40).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetChangeHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetChangeHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.totalOnly = reader.bool();
          break;
        case 3:
          message.startindex = reader.uint32();
          break;
        case 4:
          message.count = reader.uint32();
          break;
        case 5:
          message.language = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetChangeHistoryRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      totalOnly: isSet(object.totalOnly) ? Boolean(object.totalOnly) : false,
      startindex: isSet(object.startindex) ? Number(object.startindex) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CPublishedFileGetChangeHistoryRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.totalOnly !== undefined && (obj.totalOnly = message.totalOnly);
    message.startindex !== undefined && (obj.startindex = Math.round(message.startindex));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryRequest>, I>>(
    base?: I,
  ): CPublishedFileGetChangeHistoryRequest {
    return CPublishedFileGetChangeHistoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryRequest>, I>>(
    object: I,
  ): CPublishedFileGetChangeHistoryRequest {
    const message = createBaseCPublishedFileGetChangeHistoryRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.totalOnly = object.totalOnly ?? false;
    message.startindex = object.startindex ?? 0;
    message.count = object.count ?? 0;
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetChangeHistoryResponse(): CPublishedFileGetChangeHistoryResponse {
  return { changes: [], total: 0 };
}

export const CPublishedFileGetChangeHistoryResponse = {
  encode(message: CPublishedFileGetChangeHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.changes) {
      CPublishedFileGetChangeHistoryResponse_ChangeLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== 0) {
      writer.uint32(16).uint32(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetChangeHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetChangeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes.push(CPublishedFileGetChangeHistoryResponse_ChangeLog.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetChangeHistoryResponse {
    return {
      changes: Array.isArray(object?.changes)
        ? object.changes.map((e: any) => CPublishedFileGetChangeHistoryResponse_ChangeLog.fromJSON(e))
        : [],
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: CPublishedFileGetChangeHistoryResponse): unknown {
    const obj: any = {};
    if (message.changes) {
      obj.changes = message.changes.map((e) =>
        e ? CPublishedFileGetChangeHistoryResponse_ChangeLog.toJSON(e) : undefined
      );
    } else {
      obj.changes = [];
    }
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryResponse>, I>>(
    base?: I,
  ): CPublishedFileGetChangeHistoryResponse {
    return CPublishedFileGetChangeHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryResponse>, I>>(
    object: I,
  ): CPublishedFileGetChangeHistoryResponse {
    const message = createBaseCPublishedFileGetChangeHistoryResponse();
    message.changes = object.changes?.map((e) => CPublishedFileGetChangeHistoryResponse_ChangeLog.fromPartial(e)) || [];
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetChangeHistoryResponse_ChangeLog(): CPublishedFileGetChangeHistoryResponse_ChangeLog {
  return { timestamp: 0, changeDescription: "", language: 0 };
}

export const CPublishedFileGetChangeHistoryResponse_ChangeLog = {
  encode(
    message: CPublishedFileGetChangeHistoryResponse_ChangeLog,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.changeDescription !== "") {
      writer.uint32(18).string(message.changeDescription);
    }
    if (message.language !== 0) {
      writer.uint32(24).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetChangeHistoryResponse_ChangeLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetChangeHistoryResponse_ChangeLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint32();
          break;
        case 2:
          message.changeDescription = reader.string();
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

  fromJSON(object: any): CPublishedFileGetChangeHistoryResponse_ChangeLog {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      changeDescription: isSet(object.changeDescription) ? String(object.changeDescription) : "",
      language: isSet(object.language) ? Number(object.language) : 0,
    };
  },

  toJSON(message: CPublishedFileGetChangeHistoryResponse_ChangeLog): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.changeDescription !== undefined && (obj.changeDescription = message.changeDescription);
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryResponse_ChangeLog>, I>>(
    base?: I,
  ): CPublishedFileGetChangeHistoryResponse_ChangeLog {
    return CPublishedFileGetChangeHistoryResponse_ChangeLog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetChangeHistoryResponse_ChangeLog>, I>>(
    object: I,
  ): CPublishedFileGetChangeHistoryResponse_ChangeLog {
    const message = createBaseCPublishedFileGetChangeHistoryResponse_ChangeLog();
    message.timestamp = object.timestamp ?? 0;
    message.changeDescription = object.changeDescription ?? "";
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPublishedFileRefreshVotingQueueRequest(): CPublishedFileRefreshVotingQueueRequest {
  return {
    appid: 0,
    matchingFileType: 0,
    tags: [],
    matchAllTags: false,
    excludedTags: [],
    desiredQueueSize: 0,
    desiredRevision: 0,
  };
}

export const CPublishedFileRefreshVotingQueueRequest = {
  encode(message: CPublishedFileRefreshVotingQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.matchingFileType !== 0) {
      writer.uint32(16).uint32(message.matchingFileType);
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    if (message.matchAllTags === true) {
      writer.uint32(32).bool(message.matchAllTags);
    }
    for (const v of message.excludedTags) {
      writer.uint32(42).string(v!);
    }
    if (message.desiredQueueSize !== 0) {
      writer.uint32(48).uint32(message.desiredQueueSize);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(64).int32(message.desiredRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRefreshVotingQueueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRefreshVotingQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.matchingFileType = reader.uint32();
          break;
        case 3:
          message.tags.push(reader.string());
          break;
        case 4:
          message.matchAllTags = reader.bool();
          break;
        case 5:
          message.excludedTags.push(reader.string());
          break;
        case 6:
          message.desiredQueueSize = reader.uint32();
          break;
        case 8:
          message.desiredRevision = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileRefreshVotingQueueRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      matchingFileType: isSet(object.matchingFileType) ? Number(object.matchingFileType) : 0,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      matchAllTags: isSet(object.matchAllTags) ? Boolean(object.matchAllTags) : false,
      excludedTags: Array.isArray(object?.excludedTags) ? object.excludedTags.map((e: any) => String(e)) : [],
      desiredQueueSize: isSet(object.desiredQueueSize) ? Number(object.desiredQueueSize) : 0,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
    };
  },

  toJSON(message: CPublishedFileRefreshVotingQueueRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.matchingFileType !== undefined && (obj.matchingFileType = Math.round(message.matchingFileType));
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.matchAllTags !== undefined && (obj.matchAllTags = message.matchAllTags);
    if (message.excludedTags) {
      obj.excludedTags = message.excludedTags.map((e) => e);
    } else {
      obj.excludedTags = [];
    }
    message.desiredQueueSize !== undefined && (obj.desiredQueueSize = Math.round(message.desiredQueueSize));
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRefreshVotingQueueRequest>, I>>(
    base?: I,
  ): CPublishedFileRefreshVotingQueueRequest {
    return CPublishedFileRefreshVotingQueueRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRefreshVotingQueueRequest>, I>>(
    object: I,
  ): CPublishedFileRefreshVotingQueueRequest {
    const message = createBaseCPublishedFileRefreshVotingQueueRequest();
    message.appid = object.appid ?? 0;
    message.matchingFileType = object.matchingFileType ?? 0;
    message.tags = object.tags?.map((e) => e) || [];
    message.matchAllTags = object.matchAllTags ?? false;
    message.excludedTags = object.excludedTags?.map((e) => e) || [];
    message.desiredQueueSize = object.desiredQueueSize ?? 0;
    message.desiredRevision = object.desiredRevision ?? 0;
    return message;
  },
};

function createBaseCPublishedFileRefreshVotingQueueResponse(): CPublishedFileRefreshVotingQueueResponse {
  return {};
}

export const CPublishedFileRefreshVotingQueueResponse = {
  encode(_: CPublishedFileRefreshVotingQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRefreshVotingQueueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRefreshVotingQueueResponse();
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

  fromJSON(_: any): CPublishedFileRefreshVotingQueueResponse {
    return {};
  },

  toJSON(_: CPublishedFileRefreshVotingQueueResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRefreshVotingQueueResponse>, I>>(
    base?: I,
  ): CPublishedFileRefreshVotingQueueResponse {
    return CPublishedFileRefreshVotingQueueResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRefreshVotingQueueResponse>, I>>(
    _: I,
  ): CPublishedFileRefreshVotingQueueResponse {
    const message = createBaseCPublishedFileRefreshVotingQueueResponse();
    return message;
  },
};

function createBaseCPublishedFileQueryFilesRequest(): CPublishedFileQueryFilesRequest {
  return {
    queryType: 0,
    page: 0,
    cursor: "",
    numperpage: 0,
    creatorAppid: 0,
    appid: 0,
    requiredtags: [],
    excludedtags: [],
    matchAllTags: false,
    requiredFlags: [],
    omittedFlags: [],
    searchText: "",
    filetype: 0,
    childPublishedfileid: 0,
    days: 0,
    includeRecentVotesOnly: false,
    cacheMaxAgeSeconds: 0,
    language: 0,
    requiredKvTags: [],
    taggroups: [],
    dateRangeCreated: undefined,
    dateRangeUpdated: undefined,
    totalonly: false,
    idsOnly: false,
    returnVoteData: false,
    returnTags: false,
    returnKvTags: false,
    returnPreviews: false,
    returnChildren: false,
    returnShortDescription: false,
    returnForSaleData: false,
    returnMetadata: false,
    returnPlaytimeStats: 0,
    returnDetails: false,
    stripDescriptionBbcode: false,
    desiredRevision: 0,
    returnReactions: false,
  };
}

export const CPublishedFileQueryFilesRequest = {
  encode(message: CPublishedFileQueryFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryType !== 0) {
      writer.uint32(8).uint32(message.queryType);
    }
    if (message.page !== 0) {
      writer.uint32(16).uint32(message.page);
    }
    if (message.cursor !== "") {
      writer.uint32(314).string(message.cursor);
    }
    if (message.numperpage !== 0) {
      writer.uint32(24).uint32(message.numperpage);
    }
    if (message.creatorAppid !== 0) {
      writer.uint32(32).uint32(message.creatorAppid);
    }
    if (message.appid !== 0) {
      writer.uint32(40).uint32(message.appid);
    }
    for (const v of message.requiredtags) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.excludedtags) {
      writer.uint32(58).string(v!);
    }
    if (message.matchAllTags === true) {
      writer.uint32(64).bool(message.matchAllTags);
    }
    for (const v of message.requiredFlags) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.omittedFlags) {
      writer.uint32(82).string(v!);
    }
    if (message.searchText !== "") {
      writer.uint32(90).string(message.searchText);
    }
    if (message.filetype !== 0) {
      writer.uint32(96).uint32(message.filetype);
    }
    if (message.childPublishedfileid !== 0) {
      writer.uint32(105).fixed64(message.childPublishedfileid);
    }
    if (message.days !== 0) {
      writer.uint32(112).uint32(message.days);
    }
    if (message.includeRecentVotesOnly === true) {
      writer.uint32(120).bool(message.includeRecentVotesOnly);
    }
    if (message.cacheMaxAgeSeconds !== 0) {
      writer.uint32(248).uint32(message.cacheMaxAgeSeconds);
    }
    if (message.language !== 0) {
      writer.uint32(264).int32(message.language);
    }
    for (const v of message.requiredKvTags) {
      CPublishedFileQueryFilesRequest_KVTag.encode(v!, writer.uint32(274).fork()).ldelim();
    }
    for (const v of message.taggroups) {
      CPublishedFileQueryFilesRequest_TagGroup.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    if (message.dateRangeCreated !== undefined) {
      CPublishedFileQueryFilesRequest_DateRange.encode(message.dateRangeCreated, writer.uint32(354).fork()).ldelim();
    }
    if (message.dateRangeUpdated !== undefined) {
      CPublishedFileQueryFilesRequest_DateRange.encode(message.dateRangeUpdated, writer.uint32(362).fork()).ldelim();
    }
    if (message.totalonly === true) {
      writer.uint32(128).bool(message.totalonly);
    }
    if (message.idsOnly === true) {
      writer.uint32(280).bool(message.idsOnly);
    }
    if (message.returnVoteData === true) {
      writer.uint32(136).bool(message.returnVoteData);
    }
    if (message.returnTags === true) {
      writer.uint32(144).bool(message.returnTags);
    }
    if (message.returnKvTags === true) {
      writer.uint32(152).bool(message.returnKvTags);
    }
    if (message.returnPreviews === true) {
      writer.uint32(160).bool(message.returnPreviews);
    }
    if (message.returnChildren === true) {
      writer.uint32(168).bool(message.returnChildren);
    }
    if (message.returnShortDescription === true) {
      writer.uint32(176).bool(message.returnShortDescription);
    }
    if (message.returnForSaleData === true) {
      writer.uint32(240).bool(message.returnForSaleData);
    }
    if (message.returnMetadata === true) {
      writer.uint32(256).bool(message.returnMetadata);
    }
    if (message.returnPlaytimeStats !== 0) {
      writer.uint32(288).uint32(message.returnPlaytimeStats);
    }
    if (message.returnDetails === true) {
      writer.uint32(296).bool(message.returnDetails);
    }
    if (message.stripDescriptionBbcode === true) {
      writer.uint32(304).bool(message.stripDescriptionBbcode);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(320).int32(message.desiredRevision);
    }
    if (message.returnReactions === true) {
      writer.uint32(344).bool(message.returnReactions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileQueryFilesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileQueryFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryType = reader.uint32();
          break;
        case 2:
          message.page = reader.uint32();
          break;
        case 39:
          message.cursor = reader.string();
          break;
        case 3:
          message.numperpage = reader.uint32();
          break;
        case 4:
          message.creatorAppid = reader.uint32();
          break;
        case 5:
          message.appid = reader.uint32();
          break;
        case 6:
          message.requiredtags.push(reader.string());
          break;
        case 7:
          message.excludedtags.push(reader.string());
          break;
        case 8:
          message.matchAllTags = reader.bool();
          break;
        case 9:
          message.requiredFlags.push(reader.string());
          break;
        case 10:
          message.omittedFlags.push(reader.string());
          break;
        case 11:
          message.searchText = reader.string();
          break;
        case 12:
          message.filetype = reader.uint32();
          break;
        case 13:
          message.childPublishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 14:
          message.days = reader.uint32();
          break;
        case 15:
          message.includeRecentVotesOnly = reader.bool();
          break;
        case 31:
          message.cacheMaxAgeSeconds = reader.uint32();
          break;
        case 33:
          message.language = reader.int32();
          break;
        case 34:
          message.requiredKvTags.push(CPublishedFileQueryFilesRequest_KVTag.decode(reader, reader.uint32()));
          break;
        case 42:
          message.taggroups.push(CPublishedFileQueryFilesRequest_TagGroup.decode(reader, reader.uint32()));
          break;
        case 44:
          message.dateRangeCreated = CPublishedFileQueryFilesRequest_DateRange.decode(reader, reader.uint32());
          break;
        case 45:
          message.dateRangeUpdated = CPublishedFileQueryFilesRequest_DateRange.decode(reader, reader.uint32());
          break;
        case 16:
          message.totalonly = reader.bool();
          break;
        case 35:
          message.idsOnly = reader.bool();
          break;
        case 17:
          message.returnVoteData = reader.bool();
          break;
        case 18:
          message.returnTags = reader.bool();
          break;
        case 19:
          message.returnKvTags = reader.bool();
          break;
        case 20:
          message.returnPreviews = reader.bool();
          break;
        case 21:
          message.returnChildren = reader.bool();
          break;
        case 22:
          message.returnShortDescription = reader.bool();
          break;
        case 30:
          message.returnForSaleData = reader.bool();
          break;
        case 32:
          message.returnMetadata = reader.bool();
          break;
        case 36:
          message.returnPlaytimeStats = reader.uint32();
          break;
        case 37:
          message.returnDetails = reader.bool();
          break;
        case 38:
          message.stripDescriptionBbcode = reader.bool();
          break;
        case 40:
          message.desiredRevision = reader.int32() as any;
          break;
        case 43:
          message.returnReactions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileQueryFilesRequest {
    return {
      queryType: isSet(object.queryType) ? Number(object.queryType) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      cursor: isSet(object.cursor) ? String(object.cursor) : "",
      numperpage: isSet(object.numperpage) ? Number(object.numperpage) : 0,
      creatorAppid: isSet(object.creatorAppid) ? Number(object.creatorAppid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      requiredtags: Array.isArray(object?.requiredtags) ? object.requiredtags.map((e: any) => String(e)) : [],
      excludedtags: Array.isArray(object?.excludedtags) ? object.excludedtags.map((e: any) => String(e)) : [],
      matchAllTags: isSet(object.matchAllTags) ? Boolean(object.matchAllTags) : false,
      requiredFlags: Array.isArray(object?.requiredFlags) ? object.requiredFlags.map((e: any) => String(e)) : [],
      omittedFlags: Array.isArray(object?.omittedFlags) ? object.omittedFlags.map((e: any) => String(e)) : [],
      searchText: isSet(object.searchText) ? String(object.searchText) : "",
      filetype: isSet(object.filetype) ? Number(object.filetype) : 0,
      childPublishedfileid: isSet(object.childPublishedfileid) ? Number(object.childPublishedfileid) : 0,
      days: isSet(object.days) ? Number(object.days) : 0,
      includeRecentVotesOnly: isSet(object.includeRecentVotesOnly) ? Boolean(object.includeRecentVotesOnly) : false,
      cacheMaxAgeSeconds: isSet(object.cacheMaxAgeSeconds) ? Number(object.cacheMaxAgeSeconds) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
      requiredKvTags: Array.isArray(object?.requiredKvTags)
        ? object.requiredKvTags.map((e: any) => CPublishedFileQueryFilesRequest_KVTag.fromJSON(e))
        : [],
      taggroups: Array.isArray(object?.taggroups)
        ? object.taggroups.map((e: any) => CPublishedFileQueryFilesRequest_TagGroup.fromJSON(e))
        : [],
      dateRangeCreated: isSet(object.dateRangeCreated)
        ? CPublishedFileQueryFilesRequest_DateRange.fromJSON(object.dateRangeCreated)
        : undefined,
      dateRangeUpdated: isSet(object.dateRangeUpdated)
        ? CPublishedFileQueryFilesRequest_DateRange.fromJSON(object.dateRangeUpdated)
        : undefined,
      totalonly: isSet(object.totalonly) ? Boolean(object.totalonly) : false,
      idsOnly: isSet(object.idsOnly) ? Boolean(object.idsOnly) : false,
      returnVoteData: isSet(object.returnVoteData) ? Boolean(object.returnVoteData) : false,
      returnTags: isSet(object.returnTags) ? Boolean(object.returnTags) : false,
      returnKvTags: isSet(object.returnKvTags) ? Boolean(object.returnKvTags) : false,
      returnPreviews: isSet(object.returnPreviews) ? Boolean(object.returnPreviews) : false,
      returnChildren: isSet(object.returnChildren) ? Boolean(object.returnChildren) : false,
      returnShortDescription: isSet(object.returnShortDescription) ? Boolean(object.returnShortDescription) : false,
      returnForSaleData: isSet(object.returnForSaleData) ? Boolean(object.returnForSaleData) : false,
      returnMetadata: isSet(object.returnMetadata) ? Boolean(object.returnMetadata) : false,
      returnPlaytimeStats: isSet(object.returnPlaytimeStats) ? Number(object.returnPlaytimeStats) : 0,
      returnDetails: isSet(object.returnDetails) ? Boolean(object.returnDetails) : false,
      stripDescriptionBbcode: isSet(object.stripDescriptionBbcode) ? Boolean(object.stripDescriptionBbcode) : false,
      desiredRevision: isSet(object.desiredRevision) ? ePublishedFileRevisionFromJSON(object.desiredRevision) : 0,
      returnReactions: isSet(object.returnReactions) ? Boolean(object.returnReactions) : false,
    };
  },

  toJSON(message: CPublishedFileQueryFilesRequest): unknown {
    const obj: any = {};
    message.queryType !== undefined && (obj.queryType = Math.round(message.queryType));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.cursor !== undefined && (obj.cursor = message.cursor);
    message.numperpage !== undefined && (obj.numperpage = Math.round(message.numperpage));
    message.creatorAppid !== undefined && (obj.creatorAppid = Math.round(message.creatorAppid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.requiredtags) {
      obj.requiredtags = message.requiredtags.map((e) => e);
    } else {
      obj.requiredtags = [];
    }
    if (message.excludedtags) {
      obj.excludedtags = message.excludedtags.map((e) => e);
    } else {
      obj.excludedtags = [];
    }
    message.matchAllTags !== undefined && (obj.matchAllTags = message.matchAllTags);
    if (message.requiredFlags) {
      obj.requiredFlags = message.requiredFlags.map((e) => e);
    } else {
      obj.requiredFlags = [];
    }
    if (message.omittedFlags) {
      obj.omittedFlags = message.omittedFlags.map((e) => e);
    } else {
      obj.omittedFlags = [];
    }
    message.searchText !== undefined && (obj.searchText = message.searchText);
    message.filetype !== undefined && (obj.filetype = Math.round(message.filetype));
    message.childPublishedfileid !== undefined && (obj.childPublishedfileid = Math.round(message.childPublishedfileid));
    message.days !== undefined && (obj.days = Math.round(message.days));
    message.includeRecentVotesOnly !== undefined && (obj.includeRecentVotesOnly = message.includeRecentVotesOnly);
    message.cacheMaxAgeSeconds !== undefined && (obj.cacheMaxAgeSeconds = Math.round(message.cacheMaxAgeSeconds));
    message.language !== undefined && (obj.language = Math.round(message.language));
    if (message.requiredKvTags) {
      obj.requiredKvTags = message.requiredKvTags.map((e) =>
        e ? CPublishedFileQueryFilesRequest_KVTag.toJSON(e) : undefined
      );
    } else {
      obj.requiredKvTags = [];
    }
    if (message.taggroups) {
      obj.taggroups = message.taggroups.map((e) => e ? CPublishedFileQueryFilesRequest_TagGroup.toJSON(e) : undefined);
    } else {
      obj.taggroups = [];
    }
    message.dateRangeCreated !== undefined && (obj.dateRangeCreated = message.dateRangeCreated
      ? CPublishedFileQueryFilesRequest_DateRange.toJSON(message.dateRangeCreated)
      : undefined);
    message.dateRangeUpdated !== undefined && (obj.dateRangeUpdated = message.dateRangeUpdated
      ? CPublishedFileQueryFilesRequest_DateRange.toJSON(message.dateRangeUpdated)
      : undefined);
    message.totalonly !== undefined && (obj.totalonly = message.totalonly);
    message.idsOnly !== undefined && (obj.idsOnly = message.idsOnly);
    message.returnVoteData !== undefined && (obj.returnVoteData = message.returnVoteData);
    message.returnTags !== undefined && (obj.returnTags = message.returnTags);
    message.returnKvTags !== undefined && (obj.returnKvTags = message.returnKvTags);
    message.returnPreviews !== undefined && (obj.returnPreviews = message.returnPreviews);
    message.returnChildren !== undefined && (obj.returnChildren = message.returnChildren);
    message.returnShortDescription !== undefined && (obj.returnShortDescription = message.returnShortDescription);
    message.returnForSaleData !== undefined && (obj.returnForSaleData = message.returnForSaleData);
    message.returnMetadata !== undefined && (obj.returnMetadata = message.returnMetadata);
    message.returnPlaytimeStats !== undefined && (obj.returnPlaytimeStats = Math.round(message.returnPlaytimeStats));
    message.returnDetails !== undefined && (obj.returnDetails = message.returnDetails);
    message.stripDescriptionBbcode !== undefined && (obj.stripDescriptionBbcode = message.stripDescriptionBbcode);
    message.desiredRevision !== undefined &&
      (obj.desiredRevision = ePublishedFileRevisionToJSON(message.desiredRevision));
    message.returnReactions !== undefined && (obj.returnReactions = message.returnReactions);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest>, I>>(base?: I): CPublishedFileQueryFilesRequest {
    return CPublishedFileQueryFilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest>, I>>(
    object: I,
  ): CPublishedFileQueryFilesRequest {
    const message = createBaseCPublishedFileQueryFilesRequest();
    message.queryType = object.queryType ?? 0;
    message.page = object.page ?? 0;
    message.cursor = object.cursor ?? "";
    message.numperpage = object.numperpage ?? 0;
    message.creatorAppid = object.creatorAppid ?? 0;
    message.appid = object.appid ?? 0;
    message.requiredtags = object.requiredtags?.map((e) => e) || [];
    message.excludedtags = object.excludedtags?.map((e) => e) || [];
    message.matchAllTags = object.matchAllTags ?? false;
    message.requiredFlags = object.requiredFlags?.map((e) => e) || [];
    message.omittedFlags = object.omittedFlags?.map((e) => e) || [];
    message.searchText = object.searchText ?? "";
    message.filetype = object.filetype ?? 0;
    message.childPublishedfileid = object.childPublishedfileid ?? 0;
    message.days = object.days ?? 0;
    message.includeRecentVotesOnly = object.includeRecentVotesOnly ?? false;
    message.cacheMaxAgeSeconds = object.cacheMaxAgeSeconds ?? 0;
    message.language = object.language ?? 0;
    message.requiredKvTags = object.requiredKvTags?.map((e) => CPublishedFileQueryFilesRequest_KVTag.fromPartial(e)) ||
      [];
    message.taggroups = object.taggroups?.map((e) => CPublishedFileQueryFilesRequest_TagGroup.fromPartial(e)) || [];
    message.dateRangeCreated = (object.dateRangeCreated !== undefined && object.dateRangeCreated !== null)
      ? CPublishedFileQueryFilesRequest_DateRange.fromPartial(object.dateRangeCreated)
      : undefined;
    message.dateRangeUpdated = (object.dateRangeUpdated !== undefined && object.dateRangeUpdated !== null)
      ? CPublishedFileQueryFilesRequest_DateRange.fromPartial(object.dateRangeUpdated)
      : undefined;
    message.totalonly = object.totalonly ?? false;
    message.idsOnly = object.idsOnly ?? false;
    message.returnVoteData = object.returnVoteData ?? false;
    message.returnTags = object.returnTags ?? false;
    message.returnKvTags = object.returnKvTags ?? false;
    message.returnPreviews = object.returnPreviews ?? false;
    message.returnChildren = object.returnChildren ?? false;
    message.returnShortDescription = object.returnShortDescription ?? false;
    message.returnForSaleData = object.returnForSaleData ?? false;
    message.returnMetadata = object.returnMetadata ?? false;
    message.returnPlaytimeStats = object.returnPlaytimeStats ?? 0;
    message.returnDetails = object.returnDetails ?? false;
    message.stripDescriptionBbcode = object.stripDescriptionBbcode ?? false;
    message.desiredRevision = object.desiredRevision ?? 0;
    message.returnReactions = object.returnReactions ?? false;
    return message;
  },
};

function createBaseCPublishedFileQueryFilesRequest_KVTag(): CPublishedFileQueryFilesRequest_KVTag {
  return { key: "", value: "" };
}

export const CPublishedFileQueryFilesRequest_KVTag = {
  encode(message: CPublishedFileQueryFilesRequest_KVTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileQueryFilesRequest_KVTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileQueryFilesRequest_KVTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileQueryFilesRequest_KVTag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CPublishedFileQueryFilesRequest_KVTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_KVTag>, I>>(
    base?: I,
  ): CPublishedFileQueryFilesRequest_KVTag {
    return CPublishedFileQueryFilesRequest_KVTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_KVTag>, I>>(
    object: I,
  ): CPublishedFileQueryFilesRequest_KVTag {
    const message = createBaseCPublishedFileQueryFilesRequest_KVTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCPublishedFileQueryFilesRequest_TagGroup(): CPublishedFileQueryFilesRequest_TagGroup {
  return { tags: [] };
}

export const CPublishedFileQueryFilesRequest_TagGroup = {
  encode(message: CPublishedFileQueryFilesRequest_TagGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileQueryFilesRequest_TagGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileQueryFilesRequest_TagGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileQueryFilesRequest_TagGroup {
    return { tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CPublishedFileQueryFilesRequest_TagGroup): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_TagGroup>, I>>(
    base?: I,
  ): CPublishedFileQueryFilesRequest_TagGroup {
    return CPublishedFileQueryFilesRequest_TagGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_TagGroup>, I>>(
    object: I,
  ): CPublishedFileQueryFilesRequest_TagGroup {
    const message = createBaseCPublishedFileQueryFilesRequest_TagGroup();
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileQueryFilesRequest_DateRange(): CPublishedFileQueryFilesRequest_DateRange {
  return { timestampStart: 0, timestampEnd: 0 };
}

export const CPublishedFileQueryFilesRequest_DateRange = {
  encode(message: CPublishedFileQueryFilesRequest_DateRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestampStart !== 0) {
      writer.uint32(8).uint32(message.timestampStart);
    }
    if (message.timestampEnd !== 0) {
      writer.uint32(16).uint32(message.timestampEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileQueryFilesRequest_DateRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileQueryFilesRequest_DateRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestampStart = reader.uint32();
          break;
        case 2:
          message.timestampEnd = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileQueryFilesRequest_DateRange {
    return {
      timestampStart: isSet(object.timestampStart) ? Number(object.timestampStart) : 0,
      timestampEnd: isSet(object.timestampEnd) ? Number(object.timestampEnd) : 0,
    };
  },

  toJSON(message: CPublishedFileQueryFilesRequest_DateRange): unknown {
    const obj: any = {};
    message.timestampStart !== undefined && (obj.timestampStart = Math.round(message.timestampStart));
    message.timestampEnd !== undefined && (obj.timestampEnd = Math.round(message.timestampEnd));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_DateRange>, I>>(
    base?: I,
  ): CPublishedFileQueryFilesRequest_DateRange {
    return CPublishedFileQueryFilesRequest_DateRange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileQueryFilesRequest_DateRange>, I>>(
    object: I,
  ): CPublishedFileQueryFilesRequest_DateRange {
    const message = createBaseCPublishedFileQueryFilesRequest_DateRange();
    message.timestampStart = object.timestampStart ?? 0;
    message.timestampEnd = object.timestampEnd ?? 0;
    return message;
  },
};

function createBaseCPublishedFileQueryFilesResponse(): CPublishedFileQueryFilesResponse {
  return { total: 0, publishedfiledetails: [], nextCursor: "" };
}

export const CPublishedFileQueryFilesResponse = {
  encode(message: CPublishedFileQueryFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    for (const v of message.publishedfiledetails) {
      PublishedFileDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextCursor !== "") {
      writer.uint32(26).string(message.nextCursor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileQueryFilesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileQueryFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.publishedfiledetails.push(PublishedFileDetails.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextCursor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileQueryFilesResponse {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      publishedfiledetails: Array.isArray(object?.publishedfiledetails)
        ? object.publishedfiledetails.map((e: any) => PublishedFileDetails.fromJSON(e))
        : [],
      nextCursor: isSet(object.nextCursor) ? String(object.nextCursor) : "",
    };
  },

  toJSON(message: CPublishedFileQueryFilesResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    if (message.publishedfiledetails) {
      obj.publishedfiledetails = message.publishedfiledetails.map((e) =>
        e ? PublishedFileDetails.toJSON(e) : undefined
      );
    } else {
      obj.publishedfiledetails = [];
    }
    message.nextCursor !== undefined && (obj.nextCursor = message.nextCursor);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileQueryFilesResponse>, I>>(
    base?: I,
  ): CPublishedFileQueryFilesResponse {
    return CPublishedFileQueryFilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileQueryFilesResponse>, I>>(
    object: I,
  ): CPublishedFileQueryFilesResponse {
    const message = createBaseCPublishedFileQueryFilesResponse();
    message.total = object.total ?? 0;
    message.publishedfiledetails = object.publishedfiledetails?.map((e) => PublishedFileDetails.fromPartial(e)) || [];
    message.nextCursor = object.nextCursor ?? "";
    return message;
  },
};

function createBaseCPublishedFileAddAppRelationshipRequest(): CPublishedFileAddAppRelationshipRequest {
  return { publishedfileid: 0, appid: 0, relationship: 0 };
}

export const CPublishedFileAddAppRelationshipRequest = {
  encode(message: CPublishedFileAddAppRelationshipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.relationship !== 0) {
      writer.uint32(24).uint32(message.relationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAddAppRelationshipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAddAppRelationshipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.relationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileAddAppRelationshipRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      relationship: isSet(object.relationship) ? Number(object.relationship) : 0,
    };
  },

  toJSON(message: CPublishedFileAddAppRelationshipRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.relationship !== undefined && (obj.relationship = Math.round(message.relationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAddAppRelationshipRequest>, I>>(
    base?: I,
  ): CPublishedFileAddAppRelationshipRequest {
    return CPublishedFileAddAppRelationshipRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAddAppRelationshipRequest>, I>>(
    object: I,
  ): CPublishedFileAddAppRelationshipRequest {
    const message = createBaseCPublishedFileAddAppRelationshipRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.appid = object.appid ?? 0;
    message.relationship = object.relationship ?? 0;
    return message;
  },
};

function createBaseCPublishedFileAddAppRelationshipResponse(): CPublishedFileAddAppRelationshipResponse {
  return {};
}

export const CPublishedFileAddAppRelationshipResponse = {
  encode(_: CPublishedFileAddAppRelationshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAddAppRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAddAppRelationshipResponse();
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

  fromJSON(_: any): CPublishedFileAddAppRelationshipResponse {
    return {};
  },

  toJSON(_: CPublishedFileAddAppRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAddAppRelationshipResponse>, I>>(
    base?: I,
  ): CPublishedFileAddAppRelationshipResponse {
    return CPublishedFileAddAppRelationshipResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAddAppRelationshipResponse>, I>>(
    _: I,
  ): CPublishedFileAddAppRelationshipResponse {
    const message = createBaseCPublishedFileAddAppRelationshipResponse();
    return message;
  },
};

function createBaseCPublishedFileRemoveAppRelationshipRequest(): CPublishedFileRemoveAppRelationshipRequest {
  return { publishedfileid: 0, appid: 0, relationship: 0 };
}

export const CPublishedFileRemoveAppRelationshipRequest = {
  encode(message: CPublishedFileRemoveAppRelationshipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.relationship !== 0) {
      writer.uint32(24).uint32(message.relationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRemoveAppRelationshipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRemoveAppRelationshipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.relationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileRemoveAppRelationshipRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      relationship: isSet(object.relationship) ? Number(object.relationship) : 0,
    };
  },

  toJSON(message: CPublishedFileRemoveAppRelationshipRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.relationship !== undefined && (obj.relationship = Math.round(message.relationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRemoveAppRelationshipRequest>, I>>(
    base?: I,
  ): CPublishedFileRemoveAppRelationshipRequest {
    return CPublishedFileRemoveAppRelationshipRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRemoveAppRelationshipRequest>, I>>(
    object: I,
  ): CPublishedFileRemoveAppRelationshipRequest {
    const message = createBaseCPublishedFileRemoveAppRelationshipRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.appid = object.appid ?? 0;
    message.relationship = object.relationship ?? 0;
    return message;
  },
};

function createBaseCPublishedFileRemoveAppRelationshipResponse(): CPublishedFileRemoveAppRelationshipResponse {
  return {};
}

export const CPublishedFileRemoveAppRelationshipResponse = {
  encode(_: CPublishedFileRemoveAppRelationshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRemoveAppRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRemoveAppRelationshipResponse();
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

  fromJSON(_: any): CPublishedFileRemoveAppRelationshipResponse {
    return {};
  },

  toJSON(_: CPublishedFileRemoveAppRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRemoveAppRelationshipResponse>, I>>(
    base?: I,
  ): CPublishedFileRemoveAppRelationshipResponse {
    return CPublishedFileRemoveAppRelationshipResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRemoveAppRelationshipResponse>, I>>(
    _: I,
  ): CPublishedFileRemoveAppRelationshipResponse {
    const message = createBaseCPublishedFileRemoveAppRelationshipResponse();
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsRequest(): CPublishedFileGetAppRelationshipsRequest {
  return { publishedfileid: 0 };
}

export const CPublishedFileGetAppRelationshipsRequest = {
  encode(message: CPublishedFileGetAppRelationshipsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetAppRelationshipsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsRequest {
    return { publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0 };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsRequest>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsRequest {
    return CPublishedFileGetAppRelationshipsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsRequest>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsRequest {
    const message = createBaseCPublishedFileGetAppRelationshipsRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsResponse(): CPublishedFileGetAppRelationshipsResponse {
  return { appRelationships: [] };
}

export const CPublishedFileGetAppRelationshipsResponse = {
  encode(message: CPublishedFileGetAppRelationshipsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appRelationships) {
      CPublishedFileGetAppRelationshipsResponse_AppRelationship.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetAppRelationshipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.appRelationships.push(
            CPublishedFileGetAppRelationshipsResponse_AppRelationship.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsResponse {
    return {
      appRelationships: Array.isArray(object?.appRelationships)
        ? object.appRelationships.map((e: any) => CPublishedFileGetAppRelationshipsResponse_AppRelationship.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsResponse): unknown {
    const obj: any = {};
    if (message.appRelationships) {
      obj.appRelationships = message.appRelationships.map((e) =>
        e ? CPublishedFileGetAppRelationshipsResponse_AppRelationship.toJSON(e) : undefined
      );
    } else {
      obj.appRelationships = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsResponse>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsResponse {
    return CPublishedFileGetAppRelationshipsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsResponse>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsResponse {
    const message = createBaseCPublishedFileGetAppRelationshipsResponse();
    message.appRelationships =
      object.appRelationships?.map((e) => CPublishedFileGetAppRelationshipsResponse_AppRelationship.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsResponse_AppRelationship(): CPublishedFileGetAppRelationshipsResponse_AppRelationship {
  return { appid: 0, relationship: 0 };
}

export const CPublishedFileGetAppRelationshipsResponse_AppRelationship = {
  encode(
    message: CPublishedFileGetAppRelationshipsResponse_AppRelationship,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.relationship !== 0) {
      writer.uint32(16).uint32(message.relationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetAppRelationshipsResponse_AppRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsResponse_AppRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.relationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsResponse_AppRelationship {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      relationship: isSet(object.relationship) ? Number(object.relationship) : 0,
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsResponse_AppRelationship): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.relationship !== undefined && (obj.relationship = Math.round(message.relationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsResponse_AppRelationship>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsResponse_AppRelationship {
    return CPublishedFileGetAppRelationshipsResponse_AppRelationship.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsResponse_AppRelationship>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsResponse_AppRelationship {
    const message = createBaseCPublishedFileGetAppRelationshipsResponse_AppRelationship();
    message.appid = object.appid ?? 0;
    message.relationship = object.relationship ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsBatchedRequest(): CPublishedFileGetAppRelationshipsBatchedRequest {
  return { publishedfileids: [], filterRelationship: 0 };
}

export const CPublishedFileGetAppRelationshipsBatchedRequest = {
  encode(
    message: CPublishedFileGetAppRelationshipsBatchedRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.publishedfileids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.filterRelationship !== 0) {
      writer.uint32(16).uint32(message.filterRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetAppRelationshipsBatchedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          message.filterRelationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsBatchedRequest {
    return {
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
      filterRelationship: isSet(object.filterRelationship) ? Number(object.filterRelationship) : 0,
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsBatchedRequest): unknown {
    const obj: any = {};
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    message.filterRelationship !== undefined && (obj.filterRelationship = Math.round(message.filterRelationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedRequest>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsBatchedRequest {
    return CPublishedFileGetAppRelationshipsBatchedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedRequest>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsBatchedRequest {
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedRequest();
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    message.filterRelationship = object.filterRelationship ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsBatchedResponse(): CPublishedFileGetAppRelationshipsBatchedResponse {
  return { relationships: [] };
}

export const CPublishedFileGetAppRelationshipsBatchedResponse = {
  encode(
    message: CPublishedFileGetAppRelationshipsBatchedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.relationships) {
      CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetAppRelationshipsBatchedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relationships.push(
            CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsBatchedResponse {
    return {
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) =>
          CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsBatchedResponse): unknown {
    const obj: any = {};
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.toJSON(e) : undefined
      );
    } else {
      obj.relationships = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsBatchedResponse {
    return CPublishedFileGetAppRelationshipsBatchedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsBatchedResponse {
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse();
    message.relationships =
      object.relationships?.map((e) =>
        CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship(): CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
  return { appid: 0, relationship: 0 };
}

export const CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship = {
  encode(
    message: CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.relationship !== 0) {
      writer.uint32(16).uint32(message.relationship);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.relationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      relationship: isSet(object.relationship) ? Number(object.relationship) : 0,
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.relationship !== undefined && (obj.relationship = Math.round(message.relationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship>, I>>(
    base?: I,
  ): CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
    return CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship>, I>>(
    object: I,
  ): CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship {
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship();
    message.appid = object.appid ?? 0;
    message.relationship = object.relationship ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship(): CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
  return { publishedfileid: 0, result: 0, appRelationships: [] };
}

export const CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship = {
  encode(
    message: CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.result !== 0) {
      writer.uint32(16).uint32(message.result);
    }
    for (const v of message.appRelationships) {
      CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.result = reader.uint32();
          break;
        case 3:
          message.appRelationships.push(
            CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
      appRelationships: Array.isArray(object?.appRelationships)
        ? object.appRelationships.map((e: any) =>
          CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.appRelationships) {
      obj.appRelationships = message.appRelationships.map((e) =>
        e ? CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.toJSON(e) : undefined
      );
    } else {
      obj.appRelationships = [];
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship>, I>,
  >(base?: I): CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
    return CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship>, I>,
  >(object: I): CPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship {
    const message = createBaseCPublishedFileGetAppRelationshipsBatchedResponse_PublishedFileAppRelationship();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.result = object.result ?? 0;
    message.appRelationships =
      object.appRelationships?.map((e) =>
        CPublishedFileGetAppRelationshipsBatchedResponse_AppRelationship.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPublishedFileStartPlaytimeTrackingRequest(): CPublishedFileStartPlaytimeTrackingRequest {
  return { appid: 0, publishedfileids: [] };
}

export const CPublishedFileStartPlaytimeTrackingRequest = {
  encode(message: CPublishedFileStartPlaytimeTrackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    writer.uint32(18).fork();
    for (const v of message.publishedfileids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStartPlaytimeTrackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStartPlaytimeTrackingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileStartPlaytimeTrackingRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileStartPlaytimeTrackingRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStartPlaytimeTrackingRequest>, I>>(
    base?: I,
  ): CPublishedFileStartPlaytimeTrackingRequest {
    return CPublishedFileStartPlaytimeTrackingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStartPlaytimeTrackingRequest>, I>>(
    object: I,
  ): CPublishedFileStartPlaytimeTrackingRequest {
    const message = createBaseCPublishedFileStartPlaytimeTrackingRequest();
    message.appid = object.appid ?? 0;
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileStartPlaytimeTrackingResponse(): CPublishedFileStartPlaytimeTrackingResponse {
  return {};
}

export const CPublishedFileStartPlaytimeTrackingResponse = {
  encode(_: CPublishedFileStartPlaytimeTrackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStartPlaytimeTrackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStartPlaytimeTrackingResponse();
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

  fromJSON(_: any): CPublishedFileStartPlaytimeTrackingResponse {
    return {};
  },

  toJSON(_: CPublishedFileStartPlaytimeTrackingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStartPlaytimeTrackingResponse>, I>>(
    base?: I,
  ): CPublishedFileStartPlaytimeTrackingResponse {
    return CPublishedFileStartPlaytimeTrackingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStartPlaytimeTrackingResponse>, I>>(
    _: I,
  ): CPublishedFileStartPlaytimeTrackingResponse {
    const message = createBaseCPublishedFileStartPlaytimeTrackingResponse();
    return message;
  },
};

function createBaseCPublishedFileStopPlaytimeTrackingRequest(): CPublishedFileStopPlaytimeTrackingRequest {
  return { appid: 0, publishedfileids: [] };
}

export const CPublishedFileStopPlaytimeTrackingRequest = {
  encode(message: CPublishedFileStopPlaytimeTrackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    writer.uint32(18).fork();
    for (const v of message.publishedfileids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStopPlaytimeTrackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStopPlaytimeTrackingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileStopPlaytimeTrackingRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileStopPlaytimeTrackingRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingRequest>, I>>(
    base?: I,
  ): CPublishedFileStopPlaytimeTrackingRequest {
    return CPublishedFileStopPlaytimeTrackingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingRequest>, I>>(
    object: I,
  ): CPublishedFileStopPlaytimeTrackingRequest {
    const message = createBaseCPublishedFileStopPlaytimeTrackingRequest();
    message.appid = object.appid ?? 0;
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileStopPlaytimeTrackingResponse(): CPublishedFileStopPlaytimeTrackingResponse {
  return {};
}

export const CPublishedFileStopPlaytimeTrackingResponse = {
  encode(_: CPublishedFileStopPlaytimeTrackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStopPlaytimeTrackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStopPlaytimeTrackingResponse();
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

  fromJSON(_: any): CPublishedFileStopPlaytimeTrackingResponse {
    return {};
  },

  toJSON(_: CPublishedFileStopPlaytimeTrackingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingResponse>, I>>(
    base?: I,
  ): CPublishedFileStopPlaytimeTrackingResponse {
    return CPublishedFileStopPlaytimeTrackingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingResponse>, I>>(
    _: I,
  ): CPublishedFileStopPlaytimeTrackingResponse {
    const message = createBaseCPublishedFileStopPlaytimeTrackingResponse();
    return message;
  },
};

function createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsRequest(): CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
  return { appid: 0 };
}

export const CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest = {
  encode(
    message: CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsRequest();
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

  fromJSON(object: any): CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest>, I>>(
    base?: I,
  ): CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
    return CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest>, I>>(
    object: I,
  ): CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest {
    const message = createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsResponse(): CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
  return {};
}

export const CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse = {
  encode(
    _: CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsResponse();
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

  fromJSON(_: any): CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
    return {};
  },

  toJSON(_: CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse>, I>>(
    base?: I,
  ): CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
    return CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse>, I>>(
    _: I,
  ): CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse {
    const message = createBaseCPublishedFileStopPlaytimeTrackingForAllAppItemsResponse();
    return message;
  },
};

function createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest(): CPublishedFileSetPlaytimeForControllerConfigsRequest {
  return { appid: 0, controllerConfigUsage: [] };
}

export const CPublishedFileSetPlaytimeForControllerConfigsRequest = {
  encode(
    message: CPublishedFileSetPlaytimeForControllerConfigsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    for (const v of message.controllerConfigUsage) {
      CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.encode(v!, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSetPlaytimeForControllerConfigsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.controllerConfigUsage.push(
            CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileSetPlaytimeForControllerConfigsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      controllerConfigUsage: Array.isArray(object?.controllerConfigUsage)
        ? object.controllerConfigUsage.map((e: any) =>
          CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPublishedFileSetPlaytimeForControllerConfigsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.controllerConfigUsage) {
      obj.controllerConfigUsage = message.controllerConfigUsage.map((e) =>
        e ? CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.toJSON(e) : undefined
      );
    } else {
      obj.controllerConfigUsage = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsRequest>, I>>(
    base?: I,
  ): CPublishedFileSetPlaytimeForControllerConfigsRequest {
    return CPublishedFileSetPlaytimeForControllerConfigsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsRequest>, I>>(
    object: I,
  ): CPublishedFileSetPlaytimeForControllerConfigsRequest {
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest();
    message.appid = object.appid ?? 0;
    message.controllerConfigUsage =
      object.controllerConfigUsage?.map((e) =>
        CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage(): CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
  return { publishedfileid: 0, secondsActive: 0 };
}

export const CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage = {
  encode(
    message: CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.secondsActive !== 0) {
      writer.uint32(21).float(message.secondsActive);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.secondsActive = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      secondsActive: isSet(object.secondsActive) ? Number(object.secondsActive) : 0,
    };
  },

  toJSON(message: CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.secondsActive !== undefined && (obj.secondsActive = message.secondsActive);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage>, I>>(
    base?: I,
  ): CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
    return CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage>, I>,
  >(object: I): CPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage {
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsRequest_ControllerConfigUsage();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.secondsActive = object.secondsActive ?? 0;
    return message;
  },
};

function createBaseCPublishedFileSetPlaytimeForControllerConfigsResponse(): CPublishedFileSetPlaytimeForControllerConfigsResponse {
  return {};
}

export const CPublishedFileSetPlaytimeForControllerConfigsResponse = {
  encode(
    _: CPublishedFileSetPlaytimeForControllerConfigsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileSetPlaytimeForControllerConfigsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsResponse();
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

  fromJSON(_: any): CPublishedFileSetPlaytimeForControllerConfigsResponse {
    return {};
  },

  toJSON(_: CPublishedFileSetPlaytimeForControllerConfigsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsResponse>, I>>(
    base?: I,
  ): CPublishedFileSetPlaytimeForControllerConfigsResponse {
    return CPublishedFileSetPlaytimeForControllerConfigsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileSetPlaytimeForControllerConfigsResponse>, I>>(
    _: I,
  ): CPublishedFileSetPlaytimeForControllerConfigsResponse {
    const message = createBaseCPublishedFileSetPlaytimeForControllerConfigsResponse();
    return message;
  },
};

function createBaseCPublishedFileAddChildRequest(): CPublishedFileAddChildRequest {
  return { publishedfileid: 0, childPublishedfileid: 0 };
}

export const CPublishedFileAddChildRequest = {
  encode(message: CPublishedFileAddChildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.childPublishedfileid !== 0) {
      writer.uint32(16).uint64(message.childPublishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAddChildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAddChildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.childPublishedfileid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileAddChildRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      childPublishedfileid: isSet(object.childPublishedfileid) ? Number(object.childPublishedfileid) : 0,
    };
  },

  toJSON(message: CPublishedFileAddChildRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.childPublishedfileid !== undefined && (obj.childPublishedfileid = Math.round(message.childPublishedfileid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAddChildRequest>, I>>(base?: I): CPublishedFileAddChildRequest {
    return CPublishedFileAddChildRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAddChildRequest>, I>>(
    object: I,
  ): CPublishedFileAddChildRequest {
    const message = createBaseCPublishedFileAddChildRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.childPublishedfileid = object.childPublishedfileid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileAddChildResponse(): CPublishedFileAddChildResponse {
  return {};
}

export const CPublishedFileAddChildResponse = {
  encode(_: CPublishedFileAddChildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileAddChildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileAddChildResponse();
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

  fromJSON(_: any): CPublishedFileAddChildResponse {
    return {};
  },

  toJSON(_: CPublishedFileAddChildResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileAddChildResponse>, I>>(base?: I): CPublishedFileAddChildResponse {
    return CPublishedFileAddChildResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileAddChildResponse>, I>>(_: I): CPublishedFileAddChildResponse {
    const message = createBaseCPublishedFileAddChildResponse();
    return message;
  },
};

function createBaseCPublishedFileRemoveChildRequest(): CPublishedFileRemoveChildRequest {
  return { publishedfileid: 0, childPublishedfileid: 0 };
}

export const CPublishedFileRemoveChildRequest = {
  encode(message: CPublishedFileRemoveChildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    if (message.childPublishedfileid !== 0) {
      writer.uint32(16).uint64(message.childPublishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRemoveChildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRemoveChildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.childPublishedfileid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileRemoveChildRequest {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      childPublishedfileid: isSet(object.childPublishedfileid) ? Number(object.childPublishedfileid) : 0,
    };
  },

  toJSON(message: CPublishedFileRemoveChildRequest): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.childPublishedfileid !== undefined && (obj.childPublishedfileid = Math.round(message.childPublishedfileid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRemoveChildRequest>, I>>(
    base?: I,
  ): CPublishedFileRemoveChildRequest {
    return CPublishedFileRemoveChildRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRemoveChildRequest>, I>>(
    object: I,
  ): CPublishedFileRemoveChildRequest {
    const message = createBaseCPublishedFileRemoveChildRequest();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.childPublishedfileid = object.childPublishedfileid ?? 0;
    return message;
  },
};

function createBaseCPublishedFileRemoveChildResponse(): CPublishedFileRemoveChildResponse {
  return {};
}

export const CPublishedFileRemoveChildResponse = {
  encode(_: CPublishedFileRemoveChildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileRemoveChildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileRemoveChildResponse();
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

  fromJSON(_: any): CPublishedFileRemoveChildResponse {
    return {};
  },

  toJSON(_: CPublishedFileRemoveChildResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileRemoveChildResponse>, I>>(
    base?: I,
  ): CPublishedFileRemoveChildResponse {
    return CPublishedFileRemoveChildResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileRemoveChildResponse>, I>>(
    _: I,
  ): CPublishedFileRemoveChildResponse {
    const message = createBaseCPublishedFileRemoveChildResponse();
    return message;
  },
};

function createBaseCPublishedFileGetUserVoteSummaryRequest(): CPublishedFileGetUserVoteSummaryRequest {
  return { publishedfileids: [] };
}

export const CPublishedFileGetUserVoteSummaryRequest = {
  encode(message: CPublishedFileGetUserVoteSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.publishedfileids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserVoteSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserVoteSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.publishedfileids.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserVoteSummaryRequest {
    return {
      publishedfileids: Array.isArray(object?.publishedfileids)
        ? object.publishedfileids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetUserVoteSummaryRequest): unknown {
    const obj: any = {};
    if (message.publishedfileids) {
      obj.publishedfileids = message.publishedfileids.map((e) => Math.round(e));
    } else {
      obj.publishedfileids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryRequest>, I>>(
    base?: I,
  ): CPublishedFileGetUserVoteSummaryRequest {
    return CPublishedFileGetUserVoteSummaryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryRequest>, I>>(
    object: I,
  ): CPublishedFileGetUserVoteSummaryRequest {
    const message = createBaseCPublishedFileGetUserVoteSummaryRequest();
    message.publishedfileids = object.publishedfileids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPublishedFileGetUserVoteSummaryResponse(): CPublishedFileGetUserVoteSummaryResponse {
  return { summaries: [] };
}

export const CPublishedFileGetUserVoteSummaryResponse = {
  encode(message: CPublishedFileGetUserVoteSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.summaries) {
      CPublishedFileGetUserVoteSummaryResponse_VoteSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserVoteSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserVoteSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(CPublishedFileGetUserVoteSummaryResponse_VoteSummary.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserVoteSummaryResponse {
    return {
      summaries: Array.isArray(object?.summaries)
        ? object.summaries.map((e: any) => CPublishedFileGetUserVoteSummaryResponse_VoteSummary.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetUserVoteSummaryResponse): unknown {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map((e) =>
        e ? CPublishedFileGetUserVoteSummaryResponse_VoteSummary.toJSON(e) : undefined
      );
    } else {
      obj.summaries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryResponse>, I>>(
    base?: I,
  ): CPublishedFileGetUserVoteSummaryResponse {
    return CPublishedFileGetUserVoteSummaryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryResponse>, I>>(
    object: I,
  ): CPublishedFileGetUserVoteSummaryResponse {
    const message = createBaseCPublishedFileGetUserVoteSummaryResponse();
    message.summaries =
      object.summaries?.map((e) => CPublishedFileGetUserVoteSummaryResponse_VoteSummary.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileGetUserVoteSummaryResponse_VoteSummary(): CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
  return { publishedfileid: 0, voteFor: false, voteAgainst: false, reported: false };
}

export const CPublishedFileGetUserVoteSummaryResponse_VoteSummary = {
  encode(
    message: CPublishedFileGetUserVoteSummaryResponse_VoteSummary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedfileid !== 0) {
      writer.uint32(9).fixed64(message.publishedfileid);
    }
    if (message.voteFor === true) {
      writer.uint32(16).bool(message.voteFor);
    }
    if (message.voteAgainst === true) {
      writer.uint32(24).bool(message.voteAgainst);
    }
    if (message.reported === true) {
      writer.uint32(32).bool(message.reported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetUserVoteSummaryResponse_VoteSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.voteFor = reader.bool();
          break;
        case 3:
          message.voteAgainst = reader.bool();
          break;
        case 4:
          message.reported = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
    return {
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      voteFor: isSet(object.voteFor) ? Boolean(object.voteFor) : false,
      voteAgainst: isSet(object.voteAgainst) ? Boolean(object.voteAgainst) : false,
      reported: isSet(object.reported) ? Boolean(object.reported) : false,
    };
  },

  toJSON(message: CPublishedFileGetUserVoteSummaryResponse_VoteSummary): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.voteFor !== undefined && (obj.voteFor = message.voteFor);
    message.voteAgainst !== undefined && (obj.voteAgainst = message.voteAgainst);
    message.reported !== undefined && (obj.reported = message.reported);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryResponse_VoteSummary>, I>>(
    base?: I,
  ): CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
    return CPublishedFileGetUserVoteSummaryResponse_VoteSummary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetUserVoteSummaryResponse_VoteSummary>, I>>(
    object: I,
  ): CPublishedFileGetUserVoteSummaryResponse_VoteSummary {
    const message = createBaseCPublishedFileGetUserVoteSummaryResponse_VoteSummary();
    message.publishedfileid = object.publishedfileid ?? 0;
    message.voteFor = object.voteFor ?? false;
    message.voteAgainst = object.voteAgainst ?? false;
    message.reported = object.reported ?? false;
    return message;
  },
};

function createBaseCPublishedFileGetItemChangesRequest(): CPublishedFileGetItemChangesRequest {
  return { appid: 0, lastTimeUpdated: 0, numItemsMax: 0 };
}

export const CPublishedFileGetItemChangesRequest = {
  encode(message: CPublishedFileGetItemChangesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.lastTimeUpdated !== 0) {
      writer.uint32(16).uint32(message.lastTimeUpdated);
    }
    if (message.numItemsMax !== 0) {
      writer.uint32(24).uint32(message.numItemsMax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemChangesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemChangesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.lastTimeUpdated = reader.uint32();
          break;
        case 3:
          message.numItemsMax = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemChangesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      lastTimeUpdated: isSet(object.lastTimeUpdated) ? Number(object.lastTimeUpdated) : 0,
      numItemsMax: isSet(object.numItemsMax) ? Number(object.numItemsMax) : 0,
    };
  },

  toJSON(message: CPublishedFileGetItemChangesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.lastTimeUpdated !== undefined && (obj.lastTimeUpdated = Math.round(message.lastTimeUpdated));
    message.numItemsMax !== undefined && (obj.numItemsMax = Math.round(message.numItemsMax));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemChangesRequest>, I>>(
    base?: I,
  ): CPublishedFileGetItemChangesRequest {
    return CPublishedFileGetItemChangesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemChangesRequest>, I>>(
    object: I,
  ): CPublishedFileGetItemChangesRequest {
    const message = createBaseCPublishedFileGetItemChangesRequest();
    message.appid = object.appid ?? 0;
    message.lastTimeUpdated = object.lastTimeUpdated ?? 0;
    message.numItemsMax = object.numItemsMax ?? 0;
    return message;
  },
};

function createBaseCPublishedFileGetItemChangesResponse(): CPublishedFileGetItemChangesResponse {
  return { updateTime: 0, workshopItems: [] };
}

export const CPublishedFileGetItemChangesResponse = {
  encode(message: CPublishedFileGetItemChangesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateTime !== 0) {
      writer.uint32(8).uint32(message.updateTime);
    }
    for (const v of message.workshopItems) {
      CPublishedFileGetItemChangesResponse_WorkshopItemInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemChangesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemChangesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateTime = reader.uint32();
          break;
        case 2:
          message.workshopItems.push(
            CPublishedFileGetItemChangesResponse_WorkshopItemInfo.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemChangesResponse {
    return {
      updateTime: isSet(object.updateTime) ? Number(object.updateTime) : 0,
      workshopItems: Array.isArray(object?.workshopItems)
        ? object.workshopItems.map((e: any) => CPublishedFileGetItemChangesResponse_WorkshopItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileGetItemChangesResponse): unknown {
    const obj: any = {};
    message.updateTime !== undefined && (obj.updateTime = Math.round(message.updateTime));
    if (message.workshopItems) {
      obj.workshopItems = message.workshopItems.map((e) =>
        e ? CPublishedFileGetItemChangesResponse_WorkshopItemInfo.toJSON(e) : undefined
      );
    } else {
      obj.workshopItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemChangesResponse>, I>>(
    base?: I,
  ): CPublishedFileGetItemChangesResponse {
    return CPublishedFileGetItemChangesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemChangesResponse>, I>>(
    object: I,
  ): CPublishedFileGetItemChangesResponse {
    const message = createBaseCPublishedFileGetItemChangesResponse();
    message.updateTime = object.updateTime ?? 0;
    message.workshopItems =
      object.workshopItems?.map((e) => CPublishedFileGetItemChangesResponse_WorkshopItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileGetItemChangesResponse_WorkshopItemInfo(): CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
  return { publishedFileId: 0, timeUpdated: 0, manifestId: 0 };
}

export const CPublishedFileGetItemChangesResponse_WorkshopItemInfo = {
  encode(
    message: CPublishedFileGetItemChangesResponse_WorkshopItemInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(16).uint32(message.timeUpdated);
    }
    if (message.manifestId !== 0) {
      writer.uint32(25).fixed64(message.manifestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileGetItemChangesResponse_WorkshopItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.timeUpdated = reader.uint32();
          break;
        case 3:
          message.manifestId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      manifestId: isSet(object.manifestId) ? Number(object.manifestId) : 0,
    };
  },

  toJSON(message: CPublishedFileGetItemChangesResponse_WorkshopItemInfo): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.manifestId !== undefined && (obj.manifestId = Math.round(message.manifestId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileGetItemChangesResponse_WorkshopItemInfo>, I>>(
    base?: I,
  ): CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
    return CPublishedFileGetItemChangesResponse_WorkshopItemInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileGetItemChangesResponse_WorkshopItemInfo>, I>>(
    object: I,
  ): CPublishedFileGetItemChangesResponse_WorkshopItemInfo {
    const message = createBaseCPublishedFileGetItemChangesResponse_WorkshopItemInfo();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.manifestId = object.manifestId ?? 0;
    return message;
  },
};

function createBaseCPublishedFileFileSubscribedNotification(): CPublishedFileFileSubscribedNotification {
  return {
    publishedFileId: 0,
    appId: 0,
    fileHcontent: 0,
    fileSize: 0,
    rtimeSubscribed: 0,
    isDepotContent: false,
    rtimeUpdated: 0,
    revisions: [],
  };
}

export const CPublishedFileFileSubscribedNotification = {
  encode(message: CPublishedFileFileSubscribedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.fileHcontent !== 0) {
      writer.uint32(25).fixed64(message.fileHcontent);
    }
    if (message.fileSize !== 0) {
      writer.uint32(32).uint32(message.fileSize);
    }
    if (message.rtimeSubscribed !== 0) {
      writer.uint32(40).uint32(message.rtimeSubscribed);
    }
    if (message.isDepotContent === true) {
      writer.uint32(48).bool(message.isDepotContent);
    }
    if (message.rtimeUpdated !== 0) {
      writer.uint32(56).uint32(message.rtimeUpdated);
    }
    for (const v of message.revisions) {
      CPublishedFileFileSubscribedNotification_RevisionData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileFileSubscribedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileFileSubscribedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.fileHcontent = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.fileSize = reader.uint32();
          break;
        case 5:
          message.rtimeSubscribed = reader.uint32();
          break;
        case 6:
          message.isDepotContent = reader.bool();
          break;
        case 7:
          message.rtimeUpdated = reader.uint32();
          break;
        case 8:
          message.revisions.push(CPublishedFileFileSubscribedNotification_RevisionData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileFileSubscribedNotification {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileHcontent: isSet(object.fileHcontent) ? Number(object.fileHcontent) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rtimeSubscribed: isSet(object.rtimeSubscribed) ? Number(object.rtimeSubscribed) : 0,
      isDepotContent: isSet(object.isDepotContent) ? Boolean(object.isDepotContent) : false,
      rtimeUpdated: isSet(object.rtimeUpdated) ? Number(object.rtimeUpdated) : 0,
      revisions: Array.isArray(object?.revisions)
        ? object.revisions.map((e: any) => CPublishedFileFileSubscribedNotification_RevisionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPublishedFileFileSubscribedNotification): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileHcontent !== undefined && (obj.fileHcontent = Math.round(message.fileHcontent));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rtimeSubscribed !== undefined && (obj.rtimeSubscribed = Math.round(message.rtimeSubscribed));
    message.isDepotContent !== undefined && (obj.isDepotContent = message.isDepotContent);
    message.rtimeUpdated !== undefined && (obj.rtimeUpdated = Math.round(message.rtimeUpdated));
    if (message.revisions) {
      obj.revisions = message.revisions.map((e) =>
        e ? CPublishedFileFileSubscribedNotification_RevisionData.toJSON(e) : undefined
      );
    } else {
      obj.revisions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileFileSubscribedNotification>, I>>(
    base?: I,
  ): CPublishedFileFileSubscribedNotification {
    return CPublishedFileFileSubscribedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileFileSubscribedNotification>, I>>(
    object: I,
  ): CPublishedFileFileSubscribedNotification {
    const message = createBaseCPublishedFileFileSubscribedNotification();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.appId = object.appId ?? 0;
    message.fileHcontent = object.fileHcontent ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.rtimeSubscribed = object.rtimeSubscribed ?? 0;
    message.isDepotContent = object.isDepotContent ?? false;
    message.rtimeUpdated = object.rtimeUpdated ?? 0;
    message.revisions =
      object.revisions?.map((e) => CPublishedFileFileSubscribedNotification_RevisionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPublishedFileFileSubscribedNotification_RevisionData(): CPublishedFileFileSubscribedNotification_RevisionData {
  return { revision: 0, fileHcontent: 0, rtimeUpdated: 0 };
}

export const CPublishedFileFileSubscribedNotification_RevisionData = {
  encode(
    message: CPublishedFileFileSubscribedNotification_RevisionData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.revision !== 0) {
      writer.uint32(8).int32(message.revision);
    }
    if (message.fileHcontent !== 0) {
      writer.uint32(17).fixed64(message.fileHcontent);
    }
    if (message.rtimeUpdated !== 0) {
      writer.uint32(24).uint32(message.rtimeUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileFileSubscribedNotification_RevisionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileFileSubscribedNotification_RevisionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revision = reader.int32() as any;
          break;
        case 2:
          message.fileHcontent = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.rtimeUpdated = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPublishedFileFileSubscribedNotification_RevisionData {
    return {
      revision: isSet(object.revision) ? ePublishedFileRevisionFromJSON(object.revision) : 0,
      fileHcontent: isSet(object.fileHcontent) ? Number(object.fileHcontent) : 0,
      rtimeUpdated: isSet(object.rtimeUpdated) ? Number(object.rtimeUpdated) : 0,
    };
  },

  toJSON(message: CPublishedFileFileSubscribedNotification_RevisionData): unknown {
    const obj: any = {};
    message.revision !== undefined && (obj.revision = ePublishedFileRevisionToJSON(message.revision));
    message.fileHcontent !== undefined && (obj.fileHcontent = Math.round(message.fileHcontent));
    message.rtimeUpdated !== undefined && (obj.rtimeUpdated = Math.round(message.rtimeUpdated));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileFileSubscribedNotification_RevisionData>, I>>(
    base?: I,
  ): CPublishedFileFileSubscribedNotification_RevisionData {
    return CPublishedFileFileSubscribedNotification_RevisionData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileFileSubscribedNotification_RevisionData>, I>>(
    object: I,
  ): CPublishedFileFileSubscribedNotification_RevisionData {
    const message = createBaseCPublishedFileFileSubscribedNotification_RevisionData();
    message.revision = object.revision ?? 0;
    message.fileHcontent = object.fileHcontent ?? 0;
    message.rtimeUpdated = object.rtimeUpdated ?? 0;
    return message;
  },
};

function createBaseCPublishedFileFileUnsubscribedNotification(): CPublishedFileFileUnsubscribedNotification {
  return { publishedFileId: 0, appId: 0 };
}

export const CPublishedFileFileUnsubscribedNotification = {
  encode(message: CPublishedFileFileUnsubscribedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileFileUnsubscribedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileFileUnsubscribedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CPublishedFileFileUnsubscribedNotification {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CPublishedFileFileUnsubscribedNotification): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileFileUnsubscribedNotification>, I>>(
    base?: I,
  ): CPublishedFileFileUnsubscribedNotification {
    return CPublishedFileFileUnsubscribedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileFileUnsubscribedNotification>, I>>(
    object: I,
  ): CPublishedFileFileUnsubscribedNotification {
    const message = createBaseCPublishedFileFileUnsubscribedNotification();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCPublishedFileFileDeletedClientNotification(): CPublishedFileFileDeletedClientNotification {
  return { publishedFileId: 0, appId: 0 };
}

export const CPublishedFileFileDeletedClientNotification = {
  encode(message: CPublishedFileFileDeletedClientNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== 0) {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPublishedFileFileDeletedClientNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPublishedFileFileDeletedClientNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CPublishedFileFileDeletedClientNotification {
    return {
      publishedFileId: isSet(object.publishedFileId) ? Number(object.publishedFileId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CPublishedFileFileDeletedClientNotification): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = Math.round(message.publishedFileId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPublishedFileFileDeletedClientNotification>, I>>(
    base?: I,
  ): CPublishedFileFileDeletedClientNotification {
    return CPublishedFileFileDeletedClientNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPublishedFileFileDeletedClientNotification>, I>>(
    object: I,
  ): CPublishedFileFileDeletedClientNotification {
    const message = createBaseCPublishedFileFileDeletedClientNotification();
    message.publishedFileId = object.publishedFileId ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

export interface PublishedFile {
  Vote(request: CPublishedFileVoteRequest): Promise<CPublishedFileVoteResponse>;
  Subscribe(request: CPublishedFileSubscribeRequest): Promise<CPublishedFileSubscribeResponse>;
  Unsubscribe(request: CPublishedFileUnsubscribeRequest): Promise<CPublishedFileUnsubscribeResponse>;
  CanSubscribe(request: CPublishedFileCanSubscribeRequest): Promise<CPublishedFileCanSubscribeResponse>;
  GetSubSectionData(request: CPublishedFileGetSubSectionDataRequest): Promise<CPublishedFileGetSubSectionDataResponse>;
  Publish(request: CPublishedFilePublishRequest): Promise<CPublishedFilePublishResponse>;
  GetDetails(request: CPublishedFileGetDetailsRequest): Promise<CPublishedFileGetDetailsResponse>;
  GetItemInfo(request: CPublishedFileGetItemInfoRequest): Promise<CPublishedFileGetItemInfoResponse>;
  GetUserFiles(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse>;
  GetUserFileCount(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse>;
  AreFilesInSubscriptionList(
    request: CPublishedFileAreFilesInSubscriptionListRequest,
  ): Promise<CPublishedFileAreFilesInSubscriptionListResponse>;
  Update(request: CPublishedFileUpdateRequest): Promise<CPublishedFileUpdateResponse>;
  Delete(request: CPublishedFileDeleteRequest): Promise<CPublishedFileDeleteResponse>;
  GetChangeHistoryEntry(
    request: CPublishedFileGetChangeHistoryEntryRequest,
  ): Promise<CPublishedFileGetChangeHistoryEntryResponse>;
  GetChangeHistory(request: CPublishedFileGetChangeHistoryRequest): Promise<CPublishedFileGetChangeHistoryResponse>;
  RefreshVotingQueue(
    request: CPublishedFileRefreshVotingQueueRequest,
  ): Promise<CPublishedFileRefreshVotingQueueResponse>;
  QueryFiles(request: CPublishedFileQueryFilesRequest): Promise<CPublishedFileQueryFilesResponse>;
  AddAppRelationship(
    request: CPublishedFileAddAppRelationshipRequest,
  ): Promise<CPublishedFileAddAppRelationshipResponse>;
  RemoveAppRelationship(
    request: CPublishedFileRemoveAppRelationshipRequest,
  ): Promise<CPublishedFileRemoveAppRelationshipResponse>;
  GetAppRelationships(
    request: CPublishedFileGetAppRelationshipsRequest,
  ): Promise<CPublishedFileGetAppRelationshipsResponse>;
  GetAppRelationshipsBatched(
    request: CPublishedFileGetAppRelationshipsBatchedRequest,
  ): Promise<CPublishedFileGetAppRelationshipsBatchedResponse>;
  StartPlaytimeTracking(
    request: CPublishedFileStartPlaytimeTrackingRequest,
  ): Promise<CPublishedFileStartPlaytimeTrackingResponse>;
  StopPlaytimeTracking(
    request: CPublishedFileStopPlaytimeTrackingRequest,
  ): Promise<CPublishedFileStopPlaytimeTrackingResponse>;
  StopPlaytimeTrackingForAllAppItems(
    request: CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest,
  ): Promise<CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse>;
  SetPlaytimeForControllerConfigs(
    request: CPublishedFileSetPlaytimeForControllerConfigsRequest,
  ): Promise<CPublishedFileSetPlaytimeForControllerConfigsResponse>;
  AddChild(request: CPublishedFileAddChildRequest): Promise<CPublishedFileAddChildResponse>;
  RemoveChild(request: CPublishedFileRemoveChildRequest): Promise<CPublishedFileRemoveChildResponse>;
  GetUserVoteSummary(
    request: CPublishedFileGetUserVoteSummaryRequest,
  ): Promise<CPublishedFileGetUserVoteSummaryResponse>;
  GetItemChanges(request: CPublishedFileGetItemChangesRequest): Promise<CPublishedFileGetItemChangesResponse>;
}

export class PublishedFileClientImpl implements PublishedFile {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PublishedFile";
    this.rpc = rpc;
    this.Vote = this.Vote.bind(this);
    this.Subscribe = this.Subscribe.bind(this);
    this.Unsubscribe = this.Unsubscribe.bind(this);
    this.CanSubscribe = this.CanSubscribe.bind(this);
    this.GetSubSectionData = this.GetSubSectionData.bind(this);
    this.Publish = this.Publish.bind(this);
    this.GetDetails = this.GetDetails.bind(this);
    this.GetItemInfo = this.GetItemInfo.bind(this);
    this.GetUserFiles = this.GetUserFiles.bind(this);
    this.GetUserFileCount = this.GetUserFileCount.bind(this);
    this.AreFilesInSubscriptionList = this.AreFilesInSubscriptionList.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
    this.GetChangeHistoryEntry = this.GetChangeHistoryEntry.bind(this);
    this.GetChangeHistory = this.GetChangeHistory.bind(this);
    this.RefreshVotingQueue = this.RefreshVotingQueue.bind(this);
    this.QueryFiles = this.QueryFiles.bind(this);
    this.AddAppRelationship = this.AddAppRelationship.bind(this);
    this.RemoveAppRelationship = this.RemoveAppRelationship.bind(this);
    this.GetAppRelationships = this.GetAppRelationships.bind(this);
    this.GetAppRelationshipsBatched = this.GetAppRelationshipsBatched.bind(this);
    this.StartPlaytimeTracking = this.StartPlaytimeTracking.bind(this);
    this.StopPlaytimeTracking = this.StopPlaytimeTracking.bind(this);
    this.StopPlaytimeTrackingForAllAppItems = this.StopPlaytimeTrackingForAllAppItems.bind(this);
    this.SetPlaytimeForControllerConfigs = this.SetPlaytimeForControllerConfigs.bind(this);
    this.AddChild = this.AddChild.bind(this);
    this.RemoveChild = this.RemoveChild.bind(this);
    this.GetUserVoteSummary = this.GetUserVoteSummary.bind(this);
    this.GetItemChanges = this.GetItemChanges.bind(this);
  }
  Vote(request: CPublishedFileVoteRequest): Promise<CPublishedFileVoteResponse> {
    const data = CPublishedFileVoteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Vote", data);
    return promise.then((data) => CPublishedFileVoteResponse.decode(new _m0.Reader(data)));
  }

  Subscribe(request: CPublishedFileSubscribeRequest): Promise<CPublishedFileSubscribeResponse> {
    const data = CPublishedFileSubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Subscribe", data);
    return promise.then((data) => CPublishedFileSubscribeResponse.decode(new _m0.Reader(data)));
  }

  Unsubscribe(request: CPublishedFileUnsubscribeRequest): Promise<CPublishedFileUnsubscribeResponse> {
    const data = CPublishedFileUnsubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Unsubscribe", data);
    return promise.then((data) => CPublishedFileUnsubscribeResponse.decode(new _m0.Reader(data)));
  }

  CanSubscribe(request: CPublishedFileCanSubscribeRequest): Promise<CPublishedFileCanSubscribeResponse> {
    const data = CPublishedFileCanSubscribeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CanSubscribe", data);
    return promise.then((data) => CPublishedFileCanSubscribeResponse.decode(new _m0.Reader(data)));
  }

  GetSubSectionData(request: CPublishedFileGetSubSectionDataRequest): Promise<CPublishedFileGetSubSectionDataResponse> {
    const data = CPublishedFileGetSubSectionDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSubSectionData", data);
    return promise.then((data) => CPublishedFileGetSubSectionDataResponse.decode(new _m0.Reader(data)));
  }

  Publish(request: CPublishedFilePublishRequest): Promise<CPublishedFilePublishResponse> {
    const data = CPublishedFilePublishRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Publish", data);
    return promise.then((data) => CPublishedFilePublishResponse.decode(new _m0.Reader(data)));
  }

  GetDetails(request: CPublishedFileGetDetailsRequest): Promise<CPublishedFileGetDetailsResponse> {
    const data = CPublishedFileGetDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDetails", data);
    return promise.then((data) => CPublishedFileGetDetailsResponse.decode(new _m0.Reader(data)));
  }

  GetItemInfo(request: CPublishedFileGetItemInfoRequest): Promise<CPublishedFileGetItemInfoResponse> {
    const data = CPublishedFileGetItemInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetItemInfo", data);
    return promise.then((data) => CPublishedFileGetItemInfoResponse.decode(new _m0.Reader(data)));
  }

  GetUserFiles(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse> {
    const data = CPublishedFileGetUserFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserFiles", data);
    return promise.then((data) => CPublishedFileGetUserFilesResponse.decode(new _m0.Reader(data)));
  }

  GetUserFileCount(request: CPublishedFileGetUserFilesRequest): Promise<CPublishedFileGetUserFilesResponse> {
    const data = CPublishedFileGetUserFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserFileCount", data);
    return promise.then((data) => CPublishedFileGetUserFilesResponse.decode(new _m0.Reader(data)));
  }

  AreFilesInSubscriptionList(
    request: CPublishedFileAreFilesInSubscriptionListRequest,
  ): Promise<CPublishedFileAreFilesInSubscriptionListResponse> {
    const data = CPublishedFileAreFilesInSubscriptionListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AreFilesInSubscriptionList", data);
    return promise.then((data) => CPublishedFileAreFilesInSubscriptionListResponse.decode(new _m0.Reader(data)));
  }

  Update(request: CPublishedFileUpdateRequest): Promise<CPublishedFileUpdateResponse> {
    const data = CPublishedFileUpdateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Update", data);
    return promise.then((data) => CPublishedFileUpdateResponse.decode(new _m0.Reader(data)));
  }

  Delete(request: CPublishedFileDeleteRequest): Promise<CPublishedFileDeleteResponse> {
    const data = CPublishedFileDeleteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => CPublishedFileDeleteResponse.decode(new _m0.Reader(data)));
  }

  GetChangeHistoryEntry(
    request: CPublishedFileGetChangeHistoryEntryRequest,
  ): Promise<CPublishedFileGetChangeHistoryEntryResponse> {
    const data = CPublishedFileGetChangeHistoryEntryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChangeHistoryEntry", data);
    return promise.then((data) => CPublishedFileGetChangeHistoryEntryResponse.decode(new _m0.Reader(data)));
  }

  GetChangeHistory(request: CPublishedFileGetChangeHistoryRequest): Promise<CPublishedFileGetChangeHistoryResponse> {
    const data = CPublishedFileGetChangeHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChangeHistory", data);
    return promise.then((data) => CPublishedFileGetChangeHistoryResponse.decode(new _m0.Reader(data)));
  }

  RefreshVotingQueue(
    request: CPublishedFileRefreshVotingQueueRequest,
  ): Promise<CPublishedFileRefreshVotingQueueResponse> {
    const data = CPublishedFileRefreshVotingQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RefreshVotingQueue", data);
    return promise.then((data) => CPublishedFileRefreshVotingQueueResponse.decode(new _m0.Reader(data)));
  }

  QueryFiles(request: CPublishedFileQueryFilesRequest): Promise<CPublishedFileQueryFilesResponse> {
    const data = CPublishedFileQueryFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryFiles", data);
    return promise.then((data) => CPublishedFileQueryFilesResponse.decode(new _m0.Reader(data)));
  }

  AddAppRelationship(
    request: CPublishedFileAddAppRelationshipRequest,
  ): Promise<CPublishedFileAddAppRelationshipResponse> {
    const data = CPublishedFileAddAppRelationshipRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddAppRelationship", data);
    return promise.then((data) => CPublishedFileAddAppRelationshipResponse.decode(new _m0.Reader(data)));
  }

  RemoveAppRelationship(
    request: CPublishedFileRemoveAppRelationshipRequest,
  ): Promise<CPublishedFileRemoveAppRelationshipResponse> {
    const data = CPublishedFileRemoveAppRelationshipRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAppRelationship", data);
    return promise.then((data) => CPublishedFileRemoveAppRelationshipResponse.decode(new _m0.Reader(data)));
  }

  GetAppRelationships(
    request: CPublishedFileGetAppRelationshipsRequest,
  ): Promise<CPublishedFileGetAppRelationshipsResponse> {
    const data = CPublishedFileGetAppRelationshipsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAppRelationships", data);
    return promise.then((data) => CPublishedFileGetAppRelationshipsResponse.decode(new _m0.Reader(data)));
  }

  GetAppRelationshipsBatched(
    request: CPublishedFileGetAppRelationshipsBatchedRequest,
  ): Promise<CPublishedFileGetAppRelationshipsBatchedResponse> {
    const data = CPublishedFileGetAppRelationshipsBatchedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAppRelationshipsBatched", data);
    return promise.then((data) => CPublishedFileGetAppRelationshipsBatchedResponse.decode(new _m0.Reader(data)));
  }

  StartPlaytimeTracking(
    request: CPublishedFileStartPlaytimeTrackingRequest,
  ): Promise<CPublishedFileStartPlaytimeTrackingResponse> {
    const data = CPublishedFileStartPlaytimeTrackingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartPlaytimeTracking", data);
    return promise.then((data) => CPublishedFileStartPlaytimeTrackingResponse.decode(new _m0.Reader(data)));
  }

  StopPlaytimeTracking(
    request: CPublishedFileStopPlaytimeTrackingRequest,
  ): Promise<CPublishedFileStopPlaytimeTrackingResponse> {
    const data = CPublishedFileStopPlaytimeTrackingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopPlaytimeTracking", data);
    return promise.then((data) => CPublishedFileStopPlaytimeTrackingResponse.decode(new _m0.Reader(data)));
  }

  StopPlaytimeTrackingForAllAppItems(
    request: CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest,
  ): Promise<CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse> {
    const data = CPublishedFileStopPlaytimeTrackingForAllAppItemsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StopPlaytimeTrackingForAllAppItems", data);
    return promise.then((data) =>
      CPublishedFileStopPlaytimeTrackingForAllAppItemsResponse.decode(new _m0.Reader(data))
    );
  }

  SetPlaytimeForControllerConfigs(
    request: CPublishedFileSetPlaytimeForControllerConfigsRequest,
  ): Promise<CPublishedFileSetPlaytimeForControllerConfigsResponse> {
    const data = CPublishedFileSetPlaytimeForControllerConfigsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetPlaytimeForControllerConfigs", data);
    return promise.then((data) => CPublishedFileSetPlaytimeForControllerConfigsResponse.decode(new _m0.Reader(data)));
  }

  AddChild(request: CPublishedFileAddChildRequest): Promise<CPublishedFileAddChildResponse> {
    const data = CPublishedFileAddChildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddChild", data);
    return promise.then((data) => CPublishedFileAddChildResponse.decode(new _m0.Reader(data)));
  }

  RemoveChild(request: CPublishedFileRemoveChildRequest): Promise<CPublishedFileRemoveChildResponse> {
    const data = CPublishedFileRemoveChildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveChild", data);
    return promise.then((data) => CPublishedFileRemoveChildResponse.decode(new _m0.Reader(data)));
  }

  GetUserVoteSummary(
    request: CPublishedFileGetUserVoteSummaryRequest,
  ): Promise<CPublishedFileGetUserVoteSummaryResponse> {
    const data = CPublishedFileGetUserVoteSummaryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserVoteSummary", data);
    return promise.then((data) => CPublishedFileGetUserVoteSummaryResponse.decode(new _m0.Reader(data)));
  }

  GetItemChanges(request: CPublishedFileGetItemChangesRequest): Promise<CPublishedFileGetItemChangesResponse> {
    const data = CPublishedFileGetItemChangesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetItemChanges", data);
    return promise.then((data) => CPublishedFileGetItemChangesResponse.decode(new _m0.Reader(data)));
  }
}

export interface PublishedFileClient {
  NotifyFileSubscribed(request: CPublishedFileFileSubscribedNotification): Promise<NoResponse>;
  NotifyFileUnsubscribed(request: CPublishedFileFileUnsubscribedNotification): Promise<NoResponse>;
  NotifyFileDeleted(request: CPublishedFileFileDeletedClientNotification): Promise<NoResponse>;
}

export class PublishedFileClientClientImpl implements PublishedFileClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PublishedFileClient";
    this.rpc = rpc;
    this.NotifyFileSubscribed = this.NotifyFileSubscribed.bind(this);
    this.NotifyFileUnsubscribed = this.NotifyFileUnsubscribed.bind(this);
    this.NotifyFileDeleted = this.NotifyFileDeleted.bind(this);
  }
  NotifyFileSubscribed(request: CPublishedFileFileSubscribedNotification): Promise<NoResponse> {
    const data = CPublishedFileFileSubscribedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyFileSubscribed", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyFileUnsubscribed(request: CPublishedFileFileUnsubscribedNotification): Promise<NoResponse> {
    const data = CPublishedFileFileUnsubscribedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyFileUnsubscribed", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyFileDeleted(request: CPublishedFileFileDeletedClientNotification): Promise<NoResponse> {
    const data = CPublishedFileFileDeletedClientNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyFileDeleted", data);
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
