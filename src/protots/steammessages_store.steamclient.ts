/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CStorePageFilter } from "./contenthubs";
import {
  EProvideDeckFeedbackPreference,
  eProvideDeckFeedbackPreferenceFromJSON,
  eProvideDeckFeedbackPreferenceToJSON,
  ESteamDeckCompatibilityFeedback,
  eSteamDeckCompatibilityFeedbackFromJSON,
  eSteamDeckCompatibilityFeedbackToJSON,
} from "./enums";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EStoreDiscoveryQueueType {
  k_EStoreDiscoveryQueueTypeNew = 0,
  k_EStoreDiscoveryQueueTypeComingSoon = 1,
  k_EStoreDiscoveryQueueTypeRecommended = 2,
  k_EStoreDiscoveryQueueTypeEveryNewRelease = 3,
  k_EStoreDiscoveryQueueTypeMLRecommender = 5,
  k_EStoreDiscoveryQueueTypeWishlistOnSale = 6,
  k_EStoreDiscoveryQueueTypeDLC = 7,
  k_EStoreDiscoveryQueueTypeDLCOnSale = 8,
  k_EStoreDiscoveryQueueTypeRecommendedComingSoon = 9,
  k_EStoreDiscoveryQueueTypeRecommendedFree = 10,
  k_EStoreDiscoveryQueueTypeRecommendedOnSale = 11,
  k_EStoreDiscoveryQueueTypeRecommendedDemos = 12,
  k_EStoreDiscoveryQueueTypeDLCNewReleases = 13,
  k_EStoreDiscoveryQueueTypeDLCTopSellers = 14,
  k_EStoreDiscoveryQueueTypeMAX = 15,
  UNRECOGNIZED = -1,
}

export function eStoreDiscoveryQueueTypeFromJSON(object: any): EStoreDiscoveryQueueType {
  switch (object) {
    case 0:
    case "k_EStoreDiscoveryQueueTypeNew":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeNew;
    case 1:
    case "k_EStoreDiscoveryQueueTypeComingSoon":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeComingSoon;
    case 2:
    case "k_EStoreDiscoveryQueueTypeRecommended":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommended;
    case 3:
    case "k_EStoreDiscoveryQueueTypeEveryNewRelease":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeEveryNewRelease;
    case 5:
    case "k_EStoreDiscoveryQueueTypeMLRecommender":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeMLRecommender;
    case 6:
    case "k_EStoreDiscoveryQueueTypeWishlistOnSale":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeWishlistOnSale;
    case 7:
    case "k_EStoreDiscoveryQueueTypeDLC":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLC;
    case 8:
    case "k_EStoreDiscoveryQueueTypeDLCOnSale":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCOnSale;
    case 9:
    case "k_EStoreDiscoveryQueueTypeRecommendedComingSoon":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedComingSoon;
    case 10:
    case "k_EStoreDiscoveryQueueTypeRecommendedFree":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedFree;
    case 11:
    case "k_EStoreDiscoveryQueueTypeRecommendedOnSale":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedOnSale;
    case 12:
    case "k_EStoreDiscoveryQueueTypeRecommendedDemos":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedDemos;
    case 13:
    case "k_EStoreDiscoveryQueueTypeDLCNewReleases":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCNewReleases;
    case 14:
    case "k_EStoreDiscoveryQueueTypeDLCTopSellers":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCTopSellers;
    case 15:
    case "k_EStoreDiscoveryQueueTypeMAX":
      return EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeMAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStoreDiscoveryQueueType.UNRECOGNIZED;
  }
}

export function eStoreDiscoveryQueueTypeToJSON(object: EStoreDiscoveryQueueType): string {
  switch (object) {
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeNew:
      return "k_EStoreDiscoveryQueueTypeNew";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeComingSoon:
      return "k_EStoreDiscoveryQueueTypeComingSoon";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommended:
      return "k_EStoreDiscoveryQueueTypeRecommended";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeEveryNewRelease:
      return "k_EStoreDiscoveryQueueTypeEveryNewRelease";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeMLRecommender:
      return "k_EStoreDiscoveryQueueTypeMLRecommender";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeWishlistOnSale:
      return "k_EStoreDiscoveryQueueTypeWishlistOnSale";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLC:
      return "k_EStoreDiscoveryQueueTypeDLC";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCOnSale:
      return "k_EStoreDiscoveryQueueTypeDLCOnSale";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedComingSoon:
      return "k_EStoreDiscoveryQueueTypeRecommendedComingSoon";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedFree:
      return "k_EStoreDiscoveryQueueTypeRecommendedFree";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedOnSale:
      return "k_EStoreDiscoveryQueueTypeRecommendedOnSale";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeRecommendedDemos:
      return "k_EStoreDiscoveryQueueTypeRecommendedDemos";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCNewReleases:
      return "k_EStoreDiscoveryQueueTypeDLCNewReleases";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeDLCTopSellers:
      return "k_EStoreDiscoveryQueueTypeDLCTopSellers";
    case EStoreDiscoveryQueueType.k_EStoreDiscoveryQueueTypeMAX:
      return "k_EStoreDiscoveryQueueTypeMAX";
    case EStoreDiscoveryQueueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPlaytestStatus {
  k_ETesterStatusNone = 0,
  k_ETesterStatusPending = 1,
  k_ETesterStatusInvited = 2,
  k_ETesterStatusGranted = 3,
  UNRECOGNIZED = -1,
}

export function ePlaytestStatusFromJSON(object: any): EPlaytestStatus {
  switch (object) {
    case 0:
    case "k_ETesterStatusNone":
      return EPlaytestStatus.k_ETesterStatusNone;
    case 1:
    case "k_ETesterStatusPending":
      return EPlaytestStatus.k_ETesterStatusPending;
    case 2:
    case "k_ETesterStatusInvited":
      return EPlaytestStatus.k_ETesterStatusInvited;
    case 3:
    case "k_ETesterStatusGranted":
      return EPlaytestStatus.k_ETesterStatusGranted;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPlaytestStatus.UNRECOGNIZED;
  }
}

export function ePlaytestStatusToJSON(object: EPlaytestStatus): string {
  switch (object) {
    case EPlaytestStatus.k_ETesterStatusNone:
      return "k_ETesterStatusNone";
    case EPlaytestStatus.k_ETesterStatusPending:
      return "k_ETesterStatusPending";
    case EPlaytestStatus.k_ETesterStatusInvited:
      return "k_ETesterStatusInvited";
    case EPlaytestStatus.k_ETesterStatusGranted:
      return "k_ETesterStatusGranted";
    case EPlaytestStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EUserReviewScorePreference {
  k_EUserReviewScorePreference_Unset = 0,
  k_EUserReviewScorePreference_IncludeAll = 1,
  k_EUserReviewScorePreference_ExcludeBombs = 2,
  UNRECOGNIZED = -1,
}

export function eUserReviewScorePreferenceFromJSON(object: any): EUserReviewScorePreference {
  switch (object) {
    case 0:
    case "k_EUserReviewScorePreference_Unset":
      return EUserReviewScorePreference.k_EUserReviewScorePreference_Unset;
    case 1:
    case "k_EUserReviewScorePreference_IncludeAll":
      return EUserReviewScorePreference.k_EUserReviewScorePreference_IncludeAll;
    case 2:
    case "k_EUserReviewScorePreference_ExcludeBombs":
      return EUserReviewScorePreference.k_EUserReviewScorePreference_ExcludeBombs;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EUserReviewScorePreference.UNRECOGNIZED;
  }
}

export function eUserReviewScorePreferenceToJSON(object: EUserReviewScorePreference): string {
  switch (object) {
    case EUserReviewScorePreference.k_EUserReviewScorePreference_Unset:
      return "k_EUserReviewScorePreference_Unset";
    case EUserReviewScorePreference.k_EUserReviewScorePreference_IncludeAll:
      return "k_EUserReviewScorePreference_IncludeAll";
    case EUserReviewScorePreference.k_EUserReviewScorePreference_ExcludeBombs:
      return "k_EUserReviewScorePreference_ExcludeBombs";
    case EUserReviewScorePreference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CStoreRegisterCDKeyRequest {
  activationCode: string;
  purchasePlatform: number;
  isRequestFromClient: boolean;
}

export interface CStorePurchaseReceiptInfo {
  transactionid: number;
  packageid: number;
  purchaseStatus: number;
  resultDetail: number;
  transactionTime: number;
  paymentMethod: number;
  basePrice: number;
  totalDiscount: number;
  tax: number;
  shipping: number;
  currencyCode: number;
  countryCode: string;
  errorHeadline: string;
  errorString: string;
  errorLinkText: string;
  errorLinkUrl: string;
  errorAppid: number;
  lineItems: CStorePurchaseReceiptInfo_LineItem[];
}

export interface CStorePurchaseReceiptInfo_LineItem {
  packageid: number;
  appid: number;
  lineItemDescription: string;
}

export interface CStoreRegisterCDKeyResponse {
  purchaseResultDetails: number;
  purchaseReceiptInfo: CStorePurchaseReceiptInfo | undefined;
}

export interface CStoreGetMostPopularTagsRequest {
  language: string;
}

export interface CStoreGetMostPopularTagsResponse {
  tags: CStoreGetMostPopularTagsResponse_Tag[];
}

export interface CStoreGetMostPopularTagsResponse_Tag {
  tagid: number;
  name: string;
}

export interface CStoreGetLocalizedNameForTagsRequest {
  language: string;
  tagids: number[];
}

export interface CStoreGetLocalizedNameForTagsResponse {
  tags: CStoreGetLocalizedNameForTagsResponse_Tag[];
}

export interface CStoreGetLocalizedNameForTagsResponse_Tag {
  tagid: number;
  englishName: string;
  name: string;
  normalizedName: string;
}

export interface CStoreDiscoveryQueueSettings {
  osWin: boolean;
  osMac: boolean;
  osLinux: boolean;
  fullControllerSupport: boolean;
  nativeSteamController: boolean;
  includeComingSoon: boolean;
  excludedTagids: number[];
  excludeEarlyAccess: boolean;
  excludeVideos: boolean;
  excludeSoftware: boolean;
  excludeDlc: boolean;
  excludeSoundtracks: boolean;
  featuredTagids: number[];
}

export interface CStoreGetDiscoveryQueueRequest {
  queueType: EStoreDiscoveryQueueType;
  countryCode: string;
  rebuildQueue: boolean;
  settingsChanged: boolean;
  settings: CStoreDiscoveryQueueSettings | undefined;
  rebuildQueueIfStale: boolean;
  ignoreUserPreferences: boolean;
  noExperimentalResults: boolean;
  experimentalCohort: number;
  debugGetSolrQuery: boolean;
  storePageFilter: CStorePageFilter | undefined;
}

export interface CStoreGetDiscoveryQueueResponse {
  appids: number[];
  countryCode: string;
  settings: CStoreDiscoveryQueueSettings | undefined;
  skipped: number;
  exhausted: boolean;
  experimentalCohort: number;
  debugSolrQuery: string;
}

export interface CStoreGetDiscoveryQueueSettingsRequest {
  queueType: EStoreDiscoveryQueueType;
  storePageFilter: CStorePageFilter | undefined;
}

export interface CStoreGetDiscoveryQueueSettingsResponse {
  countryCode: string;
  settings: CStoreDiscoveryQueueSettings | undefined;
}

export interface CStoreSkipDiscoveryQueueItemRequest {
  queueType: EStoreDiscoveryQueueType;
  appid: number;
  storePageFilter: CStorePageFilter | undefined;
}

export interface CStoreSkipDiscoveryQueueItemResponse {
}

export interface CStoreGetUserGameInterestStateRequest {
  appid: number;
  storeAppid: number;
  betaAppid: number;
}

export interface CStoreGetUserGameInterestStateResponse {
  owned: boolean;
  wishlist: boolean;
  ignored: boolean;
  following: boolean;
  inQueues: EStoreDiscoveryQueueType[];
  queuesWithSkip: EStoreDiscoveryQueueType[];
  queueItemsRemaining: number[];
  queueItemsNextAppid: number[];
  temporarilyOwned: boolean;
  queues: CStoreGetUserGameInterestStateResponse_InQueue[];
  ignoredReason: number;
  betaStatus: EPlaytestStatus;
}

export interface CStoreGetUserGameInterestStateResponse_InQueue {
  type: EStoreDiscoveryQueueType;
  skipped: boolean;
  itemsRemaining: number;
  nextAppid: number;
  experimentalCohort: number;
}

export interface CStoreGetDiscoveryQueueSkippedAppsRequest {
  steamid: number;
  queueType: EStoreDiscoveryQueueType;
  storePageFilter: CStorePageFilter | undefined;
}

export interface CStoreGetDiscoveryQueueSkippedAppsResponse {
  appids: number[];
}

export interface CStoreGetStorePreferencesRequest {
}

export interface CStoreUserPreferences {
  primaryLanguage: number;
  secondaryLanguages: number;
  platformWindows: boolean;
  platformMac: boolean;
  platformLinux: boolean;
  timestampUpdated: number;
  hideStoreBroadcast: boolean;
  reviewScorePreference: EUserReviewScorePreference;
  timestampContentDescriptorPreferencesUpdated: number;
  provideDeckFeedback: EProvideDeckFeedbackPreference;
  additionalLanguages: string;
}

export interface CStoreUserTagPreferences {
  tagsToExclude: CStoreUserTagPreferences_Tag[];
}

export interface CStoreUserTagPreferences_Tag {
  tagid: number;
  name: string;
  timestampAdded: number;
}

export interface CStoreUserContentDescriptorPreferences {
  contentDescriptorsToExclude: CStoreUserContentDescriptorPreferences_ContentDescriptor[];
}

export interface CStoreUserContentDescriptorPreferences_ContentDescriptor {
  contentDescriptorid: number;
  timestampAdded: number;
}

export interface CStoreGetStorePreferencesResponse {
  preferences: CStoreUserPreferences | undefined;
  tagPreferences: CStoreUserTagPreferences | undefined;
  contentDescriptorPreferences: CStoreUserContentDescriptorPreferences | undefined;
}

export interface CStoreGetTrendingAppsAmongFriendsRequest {
  numApps: number;
  numTopFriends: number;
}

export interface CStoreGetTrendingAppsAmongFriendsResponse {
  trendingApps: CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData[];
}

export interface CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
  appid: number;
  steamidsTopFriends: number[];
  totalFriends: number;
}

export interface CSteamDeckCompatibilitySetFeedbackRequest {
  appid: number;
  feedback: ESteamDeckCompatibilityFeedback;
}

export interface CSteamDeckCompatibilitySetFeedbackResponse {
}

export interface CSteamDeckCompatibilityShouldPromptRequest {
  appid: number;
}

export interface CSteamDeckCompatibilityShouldPromptResponse {
  prompt: boolean;
  feedbackEligible: boolean;
  existingFeedback: ESteamDeckCompatibilityFeedback;
}

export interface CStoreStorePreferencesChangedNotification {
  preferences: CStoreUserPreferences | undefined;
  tagPreferences: CStoreUserTagPreferences | undefined;
  contentDescriptorPreferences: CStoreUserContentDescriptorPreferences | undefined;
}

function createBaseCStoreRegisterCDKeyRequest(): CStoreRegisterCDKeyRequest {
  return { activationCode: "", purchasePlatform: 0, isRequestFromClient: false };
}

export const CStoreRegisterCDKeyRequest = {
  encode(message: CStoreRegisterCDKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activationCode !== "") {
      writer.uint32(10).string(message.activationCode);
    }
    if (message.purchasePlatform !== 0) {
      writer.uint32(16).int32(message.purchasePlatform);
    }
    if (message.isRequestFromClient === true) {
      writer.uint32(24).bool(message.isRequestFromClient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreRegisterCDKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreRegisterCDKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activationCode = reader.string();
          break;
        case 2:
          message.purchasePlatform = reader.int32();
          break;
        case 3:
          message.isRequestFromClient = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreRegisterCDKeyRequest {
    return {
      activationCode: isSet(object.activationCode) ? String(object.activationCode) : "",
      purchasePlatform: isSet(object.purchasePlatform) ? Number(object.purchasePlatform) : 0,
      isRequestFromClient: isSet(object.isRequestFromClient) ? Boolean(object.isRequestFromClient) : false,
    };
  },

  toJSON(message: CStoreRegisterCDKeyRequest): unknown {
    const obj: any = {};
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    message.purchasePlatform !== undefined && (obj.purchasePlatform = Math.round(message.purchasePlatform));
    message.isRequestFromClient !== undefined && (obj.isRequestFromClient = message.isRequestFromClient);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreRegisterCDKeyRequest>, I>>(base?: I): CStoreRegisterCDKeyRequest {
    return CStoreRegisterCDKeyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreRegisterCDKeyRequest>, I>>(object: I): CStoreRegisterCDKeyRequest {
    const message = createBaseCStoreRegisterCDKeyRequest();
    message.activationCode = object.activationCode ?? "";
    message.purchasePlatform = object.purchasePlatform ?? 0;
    message.isRequestFromClient = object.isRequestFromClient ?? false;
    return message;
  },
};

function createBaseCStorePurchaseReceiptInfo(): CStorePurchaseReceiptInfo {
  return {
    transactionid: 0,
    packageid: 0,
    purchaseStatus: 0,
    resultDetail: 0,
    transactionTime: 0,
    paymentMethod: 0,
    basePrice: 0,
    totalDiscount: 0,
    tax: 0,
    shipping: 0,
    currencyCode: 0,
    countryCode: "",
    errorHeadline: "",
    errorString: "",
    errorLinkText: "",
    errorLinkUrl: "",
    errorAppid: 0,
    lineItems: [],
  };
}

export const CStorePurchaseReceiptInfo = {
  encode(message: CStorePurchaseReceiptInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionid !== 0) {
      writer.uint32(8).uint64(message.transactionid);
    }
    if (message.packageid !== 0) {
      writer.uint32(16).uint32(message.packageid);
    }
    if (message.purchaseStatus !== 0) {
      writer.uint32(24).uint32(message.purchaseStatus);
    }
    if (message.resultDetail !== 0) {
      writer.uint32(32).uint32(message.resultDetail);
    }
    if (message.transactionTime !== 0) {
      writer.uint32(40).uint32(message.transactionTime);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(48).uint32(message.paymentMethod);
    }
    if (message.basePrice !== 0) {
      writer.uint32(56).uint64(message.basePrice);
    }
    if (message.totalDiscount !== 0) {
      writer.uint32(64).uint64(message.totalDiscount);
    }
    if (message.tax !== 0) {
      writer.uint32(72).uint64(message.tax);
    }
    if (message.shipping !== 0) {
      writer.uint32(80).uint64(message.shipping);
    }
    if (message.currencyCode !== 0) {
      writer.uint32(88).uint32(message.currencyCode);
    }
    if (message.countryCode !== "") {
      writer.uint32(98).string(message.countryCode);
    }
    if (message.errorHeadline !== "") {
      writer.uint32(106).string(message.errorHeadline);
    }
    if (message.errorString !== "") {
      writer.uint32(114).string(message.errorString);
    }
    if (message.errorLinkText !== "") {
      writer.uint32(122).string(message.errorLinkText);
    }
    if (message.errorLinkUrl !== "") {
      writer.uint32(130).string(message.errorLinkUrl);
    }
    if (message.errorAppid !== 0) {
      writer.uint32(136).uint32(message.errorAppid);
    }
    for (const v of message.lineItems) {
      CStorePurchaseReceiptInfo_LineItem.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePurchaseReceiptInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePurchaseReceiptInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.packageid = reader.uint32();
          break;
        case 3:
          message.purchaseStatus = reader.uint32();
          break;
        case 4:
          message.resultDetail = reader.uint32();
          break;
        case 5:
          message.transactionTime = reader.uint32();
          break;
        case 6:
          message.paymentMethod = reader.uint32();
          break;
        case 7:
          message.basePrice = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.totalDiscount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.tax = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.shipping = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.currencyCode = reader.uint32();
          break;
        case 12:
          message.countryCode = reader.string();
          break;
        case 13:
          message.errorHeadline = reader.string();
          break;
        case 14:
          message.errorString = reader.string();
          break;
        case 15:
          message.errorLinkText = reader.string();
          break;
        case 16:
          message.errorLinkUrl = reader.string();
          break;
        case 17:
          message.errorAppid = reader.uint32();
          break;
        case 18:
          message.lineItems.push(CStorePurchaseReceiptInfo_LineItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePurchaseReceiptInfo {
    return {
      transactionid: isSet(object.transactionid) ? Number(object.transactionid) : 0,
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      purchaseStatus: isSet(object.purchaseStatus) ? Number(object.purchaseStatus) : 0,
      resultDetail: isSet(object.resultDetail) ? Number(object.resultDetail) : 0,
      transactionTime: isSet(object.transactionTime) ? Number(object.transactionTime) : 0,
      paymentMethod: isSet(object.paymentMethod) ? Number(object.paymentMethod) : 0,
      basePrice: isSet(object.basePrice) ? Number(object.basePrice) : 0,
      totalDiscount: isSet(object.totalDiscount) ? Number(object.totalDiscount) : 0,
      tax: isSet(object.tax) ? Number(object.tax) : 0,
      shipping: isSet(object.shipping) ? Number(object.shipping) : 0,
      currencyCode: isSet(object.currencyCode) ? Number(object.currencyCode) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      errorHeadline: isSet(object.errorHeadline) ? String(object.errorHeadline) : "",
      errorString: isSet(object.errorString) ? String(object.errorString) : "",
      errorLinkText: isSet(object.errorLinkText) ? String(object.errorLinkText) : "",
      errorLinkUrl: isSet(object.errorLinkUrl) ? String(object.errorLinkUrl) : "",
      errorAppid: isSet(object.errorAppid) ? Number(object.errorAppid) : 0,
      lineItems: Array.isArray(object?.lineItems)
        ? object.lineItems.map((e: any) => CStorePurchaseReceiptInfo_LineItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStorePurchaseReceiptInfo): unknown {
    const obj: any = {};
    message.transactionid !== undefined && (obj.transactionid = Math.round(message.transactionid));
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.purchaseStatus !== undefined && (obj.purchaseStatus = Math.round(message.purchaseStatus));
    message.resultDetail !== undefined && (obj.resultDetail = Math.round(message.resultDetail));
    message.transactionTime !== undefined && (obj.transactionTime = Math.round(message.transactionTime));
    message.paymentMethod !== undefined && (obj.paymentMethod = Math.round(message.paymentMethod));
    message.basePrice !== undefined && (obj.basePrice = Math.round(message.basePrice));
    message.totalDiscount !== undefined && (obj.totalDiscount = Math.round(message.totalDiscount));
    message.tax !== undefined && (obj.tax = Math.round(message.tax));
    message.shipping !== undefined && (obj.shipping = Math.round(message.shipping));
    message.currencyCode !== undefined && (obj.currencyCode = Math.round(message.currencyCode));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.errorHeadline !== undefined && (obj.errorHeadline = message.errorHeadline);
    message.errorString !== undefined && (obj.errorString = message.errorString);
    message.errorLinkText !== undefined && (obj.errorLinkText = message.errorLinkText);
    message.errorLinkUrl !== undefined && (obj.errorLinkUrl = message.errorLinkUrl);
    message.errorAppid !== undefined && (obj.errorAppid = Math.round(message.errorAppid));
    if (message.lineItems) {
      obj.lineItems = message.lineItems.map((e) => e ? CStorePurchaseReceiptInfo_LineItem.toJSON(e) : undefined);
    } else {
      obj.lineItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePurchaseReceiptInfo>, I>>(base?: I): CStorePurchaseReceiptInfo {
    return CStorePurchaseReceiptInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePurchaseReceiptInfo>, I>>(object: I): CStorePurchaseReceiptInfo {
    const message = createBaseCStorePurchaseReceiptInfo();
    message.transactionid = object.transactionid ?? 0;
    message.packageid = object.packageid ?? 0;
    message.purchaseStatus = object.purchaseStatus ?? 0;
    message.resultDetail = object.resultDetail ?? 0;
    message.transactionTime = object.transactionTime ?? 0;
    message.paymentMethod = object.paymentMethod ?? 0;
    message.basePrice = object.basePrice ?? 0;
    message.totalDiscount = object.totalDiscount ?? 0;
    message.tax = object.tax ?? 0;
    message.shipping = object.shipping ?? 0;
    message.currencyCode = object.currencyCode ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.errorHeadline = object.errorHeadline ?? "";
    message.errorString = object.errorString ?? "";
    message.errorLinkText = object.errorLinkText ?? "";
    message.errorLinkUrl = object.errorLinkUrl ?? "";
    message.errorAppid = object.errorAppid ?? 0;
    message.lineItems = object.lineItems?.map((e) => CStorePurchaseReceiptInfo_LineItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStorePurchaseReceiptInfo_LineItem(): CStorePurchaseReceiptInfo_LineItem {
  return { packageid: 0, appid: 0, lineItemDescription: "" };
}

export const CStorePurchaseReceiptInfo_LineItem = {
  encode(message: CStorePurchaseReceiptInfo_LineItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.lineItemDescription !== "") {
      writer.uint32(26).string(message.lineItemDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePurchaseReceiptInfo_LineItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePurchaseReceiptInfo_LineItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.uint32();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.lineItemDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePurchaseReceiptInfo_LineItem {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      lineItemDescription: isSet(object.lineItemDescription) ? String(object.lineItemDescription) : "",
    };
  },

  toJSON(message: CStorePurchaseReceiptInfo_LineItem): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.lineItemDescription !== undefined && (obj.lineItemDescription = message.lineItemDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePurchaseReceiptInfo_LineItem>, I>>(
    base?: I,
  ): CStorePurchaseReceiptInfo_LineItem {
    return CStorePurchaseReceiptInfo_LineItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePurchaseReceiptInfo_LineItem>, I>>(
    object: I,
  ): CStorePurchaseReceiptInfo_LineItem {
    const message = createBaseCStorePurchaseReceiptInfo_LineItem();
    message.packageid = object.packageid ?? 0;
    message.appid = object.appid ?? 0;
    message.lineItemDescription = object.lineItemDescription ?? "";
    return message;
  },
};

function createBaseCStoreRegisterCDKeyResponse(): CStoreRegisterCDKeyResponse {
  return { purchaseResultDetails: 0, purchaseReceiptInfo: undefined };
}

export const CStoreRegisterCDKeyResponse = {
  encode(message: CStoreRegisterCDKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaseResultDetails !== 0) {
      writer.uint32(8).int32(message.purchaseResultDetails);
    }
    if (message.purchaseReceiptInfo !== undefined) {
      CStorePurchaseReceiptInfo.encode(message.purchaseReceiptInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreRegisterCDKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreRegisterCDKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseResultDetails = reader.int32();
          break;
        case 2:
          message.purchaseReceiptInfo = CStorePurchaseReceiptInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreRegisterCDKeyResponse {
    return {
      purchaseResultDetails: isSet(object.purchaseResultDetails) ? Number(object.purchaseResultDetails) : 0,
      purchaseReceiptInfo: isSet(object.purchaseReceiptInfo)
        ? CStorePurchaseReceiptInfo.fromJSON(object.purchaseReceiptInfo)
        : undefined,
    };
  },

  toJSON(message: CStoreRegisterCDKeyResponse): unknown {
    const obj: any = {};
    message.purchaseResultDetails !== undefined &&
      (obj.purchaseResultDetails = Math.round(message.purchaseResultDetails));
    message.purchaseReceiptInfo !== undefined && (obj.purchaseReceiptInfo = message.purchaseReceiptInfo
      ? CStorePurchaseReceiptInfo.toJSON(message.purchaseReceiptInfo)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreRegisterCDKeyResponse>, I>>(base?: I): CStoreRegisterCDKeyResponse {
    return CStoreRegisterCDKeyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreRegisterCDKeyResponse>, I>>(object: I): CStoreRegisterCDKeyResponse {
    const message = createBaseCStoreRegisterCDKeyResponse();
    message.purchaseResultDetails = object.purchaseResultDetails ?? 0;
    message.purchaseReceiptInfo = (object.purchaseReceiptInfo !== undefined && object.purchaseReceiptInfo !== null)
      ? CStorePurchaseReceiptInfo.fromPartial(object.purchaseReceiptInfo)
      : undefined;
    return message;
  },
};

function createBaseCStoreGetMostPopularTagsRequest(): CStoreGetMostPopularTagsRequest {
  return { language: "" };
}

export const CStoreGetMostPopularTagsRequest = {
  encode(message: CStoreGetMostPopularTagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetMostPopularTagsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetMostPopularTagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetMostPopularTagsRequest {
    return { language: isSet(object.language) ? String(object.language) : "" };
  },

  toJSON(message: CStoreGetMostPopularTagsRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetMostPopularTagsRequest>, I>>(base?: I): CStoreGetMostPopularTagsRequest {
    return CStoreGetMostPopularTagsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetMostPopularTagsRequest>, I>>(
    object: I,
  ): CStoreGetMostPopularTagsRequest {
    const message = createBaseCStoreGetMostPopularTagsRequest();
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCStoreGetMostPopularTagsResponse(): CStoreGetMostPopularTagsResponse {
  return { tags: [] };
}

export const CStoreGetMostPopularTagsResponse = {
  encode(message: CStoreGetMostPopularTagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      CStoreGetMostPopularTagsResponse_Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetMostPopularTagsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetMostPopularTagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(CStoreGetMostPopularTagsResponse_Tag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetMostPopularTagsResponse {
    return {
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => CStoreGetMostPopularTagsResponse_Tag.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreGetMostPopularTagsResponse): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? CStoreGetMostPopularTagsResponse_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetMostPopularTagsResponse>, I>>(
    base?: I,
  ): CStoreGetMostPopularTagsResponse {
    return CStoreGetMostPopularTagsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetMostPopularTagsResponse>, I>>(
    object: I,
  ): CStoreGetMostPopularTagsResponse {
    const message = createBaseCStoreGetMostPopularTagsResponse();
    message.tags = object.tags?.map((e) => CStoreGetMostPopularTagsResponse_Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreGetMostPopularTagsResponse_Tag(): CStoreGetMostPopularTagsResponse_Tag {
  return { tagid: 0, name: "" };
}

export const CStoreGetMostPopularTagsResponse_Tag = {
  encode(message: CStoreGetMostPopularTagsResponse_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tagid !== 0) {
      writer.uint32(8).uint32(message.tagid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetMostPopularTagsResponse_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetMostPopularTagsResponse_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetMostPopularTagsResponse_Tag {
    return {
      tagid: isSet(object.tagid) ? Number(object.tagid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CStoreGetMostPopularTagsResponse_Tag): unknown {
    const obj: any = {};
    message.tagid !== undefined && (obj.tagid = Math.round(message.tagid));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetMostPopularTagsResponse_Tag>, I>>(
    base?: I,
  ): CStoreGetMostPopularTagsResponse_Tag {
    return CStoreGetMostPopularTagsResponse_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetMostPopularTagsResponse_Tag>, I>>(
    object: I,
  ): CStoreGetMostPopularTagsResponse_Tag {
    const message = createBaseCStoreGetMostPopularTagsResponse_Tag();
    message.tagid = object.tagid ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCStoreGetLocalizedNameForTagsRequest(): CStoreGetLocalizedNameForTagsRequest {
  return { language: "", tagids: [] };
}

export const CStoreGetLocalizedNameForTagsRequest = {
  encode(message: CStoreGetLocalizedNameForTagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    writer.uint32(18).fork();
    for (const v of message.tagids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetLocalizedNameForTagsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetLocalizedNameForTagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tagids.push(reader.uint32());
            }
          } else {
            message.tagids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetLocalizedNameForTagsRequest {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      tagids: Array.isArray(object?.tagids) ? object.tagids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CStoreGetLocalizedNameForTagsRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    if (message.tagids) {
      obj.tagids = message.tagids.map((e) => Math.round(e));
    } else {
      obj.tagids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsRequest>, I>>(
    base?: I,
  ): CStoreGetLocalizedNameForTagsRequest {
    return CStoreGetLocalizedNameForTagsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsRequest>, I>>(
    object: I,
  ): CStoreGetLocalizedNameForTagsRequest {
    const message = createBaseCStoreGetLocalizedNameForTagsRequest();
    message.language = object.language ?? "";
    message.tagids = object.tagids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCStoreGetLocalizedNameForTagsResponse(): CStoreGetLocalizedNameForTagsResponse {
  return { tags: [] };
}

export const CStoreGetLocalizedNameForTagsResponse = {
  encode(message: CStoreGetLocalizedNameForTagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tags) {
      CStoreGetLocalizedNameForTagsResponse_Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetLocalizedNameForTagsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetLocalizedNameForTagsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(CStoreGetLocalizedNameForTagsResponse_Tag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetLocalizedNameForTagsResponse {
    return {
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => CStoreGetLocalizedNameForTagsResponse_Tag.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreGetLocalizedNameForTagsResponse): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? CStoreGetLocalizedNameForTagsResponse_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsResponse>, I>>(
    base?: I,
  ): CStoreGetLocalizedNameForTagsResponse {
    return CStoreGetLocalizedNameForTagsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsResponse>, I>>(
    object: I,
  ): CStoreGetLocalizedNameForTagsResponse {
    const message = createBaseCStoreGetLocalizedNameForTagsResponse();
    message.tags = object.tags?.map((e) => CStoreGetLocalizedNameForTagsResponse_Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreGetLocalizedNameForTagsResponse_Tag(): CStoreGetLocalizedNameForTagsResponse_Tag {
  return { tagid: 0, englishName: "", name: "", normalizedName: "" };
}

export const CStoreGetLocalizedNameForTagsResponse_Tag = {
  encode(message: CStoreGetLocalizedNameForTagsResponse_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tagid !== 0) {
      writer.uint32(8).uint32(message.tagid);
    }
    if (message.englishName !== "") {
      writer.uint32(18).string(message.englishName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.normalizedName !== "") {
      writer.uint32(34).string(message.normalizedName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetLocalizedNameForTagsResponse_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetLocalizedNameForTagsResponse_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagid = reader.uint32();
          break;
        case 2:
          message.englishName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.normalizedName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetLocalizedNameForTagsResponse_Tag {
    return {
      tagid: isSet(object.tagid) ? Number(object.tagid) : 0,
      englishName: isSet(object.englishName) ? String(object.englishName) : "",
      name: isSet(object.name) ? String(object.name) : "",
      normalizedName: isSet(object.normalizedName) ? String(object.normalizedName) : "",
    };
  },

  toJSON(message: CStoreGetLocalizedNameForTagsResponse_Tag): unknown {
    const obj: any = {};
    message.tagid !== undefined && (obj.tagid = Math.round(message.tagid));
    message.englishName !== undefined && (obj.englishName = message.englishName);
    message.name !== undefined && (obj.name = message.name);
    message.normalizedName !== undefined && (obj.normalizedName = message.normalizedName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsResponse_Tag>, I>>(
    base?: I,
  ): CStoreGetLocalizedNameForTagsResponse_Tag {
    return CStoreGetLocalizedNameForTagsResponse_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetLocalizedNameForTagsResponse_Tag>, I>>(
    object: I,
  ): CStoreGetLocalizedNameForTagsResponse_Tag {
    const message = createBaseCStoreGetLocalizedNameForTagsResponse_Tag();
    message.tagid = object.tagid ?? 0;
    message.englishName = object.englishName ?? "";
    message.name = object.name ?? "";
    message.normalizedName = object.normalizedName ?? "";
    return message;
  },
};

function createBaseCStoreDiscoveryQueueSettings(): CStoreDiscoveryQueueSettings {
  return {
    osWin: false,
    osMac: false,
    osLinux: false,
    fullControllerSupport: false,
    nativeSteamController: false,
    includeComingSoon: false,
    excludedTagids: [],
    excludeEarlyAccess: false,
    excludeVideos: false,
    excludeSoftware: false,
    excludeDlc: false,
    excludeSoundtracks: false,
    featuredTagids: [],
  };
}

export const CStoreDiscoveryQueueSettings = {
  encode(message: CStoreDiscoveryQueueSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.osWin === true) {
      writer.uint32(32).bool(message.osWin);
    }
    if (message.osMac === true) {
      writer.uint32(40).bool(message.osMac);
    }
    if (message.osLinux === true) {
      writer.uint32(48).bool(message.osLinux);
    }
    if (message.fullControllerSupport === true) {
      writer.uint32(56).bool(message.fullControllerSupport);
    }
    if (message.nativeSteamController === true) {
      writer.uint32(64).bool(message.nativeSteamController);
    }
    if (message.includeComingSoon === true) {
      writer.uint32(72).bool(message.includeComingSoon);
    }
    writer.uint32(82).fork();
    for (const v of message.excludedTagids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.excludeEarlyAccess === true) {
      writer.uint32(88).bool(message.excludeEarlyAccess);
    }
    if (message.excludeVideos === true) {
      writer.uint32(96).bool(message.excludeVideos);
    }
    if (message.excludeSoftware === true) {
      writer.uint32(104).bool(message.excludeSoftware);
    }
    if (message.excludeDlc === true) {
      writer.uint32(112).bool(message.excludeDlc);
    }
    if (message.excludeSoundtracks === true) {
      writer.uint32(120).bool(message.excludeSoundtracks);
    }
    writer.uint32(130).fork();
    for (const v of message.featuredTagids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreDiscoveryQueueSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreDiscoveryQueueSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.osWin = reader.bool();
          break;
        case 5:
          message.osMac = reader.bool();
          break;
        case 6:
          message.osLinux = reader.bool();
          break;
        case 7:
          message.fullControllerSupport = reader.bool();
          break;
        case 8:
          message.nativeSteamController = reader.bool();
          break;
        case 9:
          message.includeComingSoon = reader.bool();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.excludedTagids.push(reader.uint32());
            }
          } else {
            message.excludedTagids.push(reader.uint32());
          }
          break;
        case 11:
          message.excludeEarlyAccess = reader.bool();
          break;
        case 12:
          message.excludeVideos = reader.bool();
          break;
        case 13:
          message.excludeSoftware = reader.bool();
          break;
        case 14:
          message.excludeDlc = reader.bool();
          break;
        case 15:
          message.excludeSoundtracks = reader.bool();
          break;
        case 16:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.featuredTagids.push(reader.uint32());
            }
          } else {
            message.featuredTagids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreDiscoveryQueueSettings {
    return {
      osWin: isSet(object.osWin) ? Boolean(object.osWin) : false,
      osMac: isSet(object.osMac) ? Boolean(object.osMac) : false,
      osLinux: isSet(object.osLinux) ? Boolean(object.osLinux) : false,
      fullControllerSupport: isSet(object.fullControllerSupport) ? Boolean(object.fullControllerSupport) : false,
      nativeSteamController: isSet(object.nativeSteamController) ? Boolean(object.nativeSteamController) : false,
      includeComingSoon: isSet(object.includeComingSoon) ? Boolean(object.includeComingSoon) : false,
      excludedTagids: Array.isArray(object?.excludedTagids) ? object.excludedTagids.map((e: any) => Number(e)) : [],
      excludeEarlyAccess: isSet(object.excludeEarlyAccess) ? Boolean(object.excludeEarlyAccess) : false,
      excludeVideos: isSet(object.excludeVideos) ? Boolean(object.excludeVideos) : false,
      excludeSoftware: isSet(object.excludeSoftware) ? Boolean(object.excludeSoftware) : false,
      excludeDlc: isSet(object.excludeDlc) ? Boolean(object.excludeDlc) : false,
      excludeSoundtracks: isSet(object.excludeSoundtracks) ? Boolean(object.excludeSoundtracks) : false,
      featuredTagids: Array.isArray(object?.featuredTagids) ? object.featuredTagids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CStoreDiscoveryQueueSettings): unknown {
    const obj: any = {};
    message.osWin !== undefined && (obj.osWin = message.osWin);
    message.osMac !== undefined && (obj.osMac = message.osMac);
    message.osLinux !== undefined && (obj.osLinux = message.osLinux);
    message.fullControllerSupport !== undefined && (obj.fullControllerSupport = message.fullControllerSupport);
    message.nativeSteamController !== undefined && (obj.nativeSteamController = message.nativeSteamController);
    message.includeComingSoon !== undefined && (obj.includeComingSoon = message.includeComingSoon);
    if (message.excludedTagids) {
      obj.excludedTagids = message.excludedTagids.map((e) => Math.round(e));
    } else {
      obj.excludedTagids = [];
    }
    message.excludeEarlyAccess !== undefined && (obj.excludeEarlyAccess = message.excludeEarlyAccess);
    message.excludeVideos !== undefined && (obj.excludeVideos = message.excludeVideos);
    message.excludeSoftware !== undefined && (obj.excludeSoftware = message.excludeSoftware);
    message.excludeDlc !== undefined && (obj.excludeDlc = message.excludeDlc);
    message.excludeSoundtracks !== undefined && (obj.excludeSoundtracks = message.excludeSoundtracks);
    if (message.featuredTagids) {
      obj.featuredTagids = message.featuredTagids.map((e) => Math.round(e));
    } else {
      obj.featuredTagids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreDiscoveryQueueSettings>, I>>(base?: I): CStoreDiscoveryQueueSettings {
    return CStoreDiscoveryQueueSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreDiscoveryQueueSettings>, I>>(object: I): CStoreDiscoveryQueueSettings {
    const message = createBaseCStoreDiscoveryQueueSettings();
    message.osWin = object.osWin ?? false;
    message.osMac = object.osMac ?? false;
    message.osLinux = object.osLinux ?? false;
    message.fullControllerSupport = object.fullControllerSupport ?? false;
    message.nativeSteamController = object.nativeSteamController ?? false;
    message.includeComingSoon = object.includeComingSoon ?? false;
    message.excludedTagids = object.excludedTagids?.map((e) => e) || [];
    message.excludeEarlyAccess = object.excludeEarlyAccess ?? false;
    message.excludeVideos = object.excludeVideos ?? false;
    message.excludeSoftware = object.excludeSoftware ?? false;
    message.excludeDlc = object.excludeDlc ?? false;
    message.excludeSoundtracks = object.excludeSoundtracks ?? false;
    message.featuredTagids = object.featuredTagids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueRequest(): CStoreGetDiscoveryQueueRequest {
  return {
    queueType: 0,
    countryCode: "",
    rebuildQueue: false,
    settingsChanged: false,
    settings: undefined,
    rebuildQueueIfStale: false,
    ignoreUserPreferences: false,
    noExperimentalResults: false,
    experimentalCohort: 0,
    debugGetSolrQuery: false,
    storePageFilter: undefined,
  };
}

export const CStoreGetDiscoveryQueueRequest = {
  encode(message: CStoreGetDiscoveryQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueType !== 0) {
      writer.uint32(8).int32(message.queueType);
    }
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.rebuildQueue === true) {
      writer.uint32(24).bool(message.rebuildQueue);
    }
    if (message.settingsChanged === true) {
      writer.uint32(32).bool(message.settingsChanged);
    }
    if (message.settings !== undefined) {
      CStoreDiscoveryQueueSettings.encode(message.settings, writer.uint32(42).fork()).ldelim();
    }
    if (message.rebuildQueueIfStale === true) {
      writer.uint32(48).bool(message.rebuildQueueIfStale);
    }
    if (message.ignoreUserPreferences === true) {
      writer.uint32(64).bool(message.ignoreUserPreferences);
    }
    if (message.noExperimentalResults === true) {
      writer.uint32(72).bool(message.noExperimentalResults);
    }
    if (message.experimentalCohort !== 0) {
      writer.uint32(80).uint32(message.experimentalCohort);
    }
    if (message.debugGetSolrQuery === true) {
      writer.uint32(88).bool(message.debugGetSolrQuery);
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queueType = reader.int32() as any;
          break;
        case 2:
          message.countryCode = reader.string();
          break;
        case 3:
          message.rebuildQueue = reader.bool();
          break;
        case 4:
          message.settingsChanged = reader.bool();
          break;
        case 5:
          message.settings = CStoreDiscoveryQueueSettings.decode(reader, reader.uint32());
          break;
        case 6:
          message.rebuildQueueIfStale = reader.bool();
          break;
        case 8:
          message.ignoreUserPreferences = reader.bool();
          break;
        case 9:
          message.noExperimentalResults = reader.bool();
          break;
        case 10:
          message.experimentalCohort = reader.uint32();
          break;
        case 11:
          message.debugGetSolrQuery = reader.bool();
          break;
        case 12:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetDiscoveryQueueRequest {
    return {
      queueType: isSet(object.queueType) ? eStoreDiscoveryQueueTypeFromJSON(object.queueType) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      rebuildQueue: isSet(object.rebuildQueue) ? Boolean(object.rebuildQueue) : false,
      settingsChanged: isSet(object.settingsChanged) ? Boolean(object.settingsChanged) : false,
      settings: isSet(object.settings) ? CStoreDiscoveryQueueSettings.fromJSON(object.settings) : undefined,
      rebuildQueueIfStale: isSet(object.rebuildQueueIfStale) ? Boolean(object.rebuildQueueIfStale) : false,
      ignoreUserPreferences: isSet(object.ignoreUserPreferences) ? Boolean(object.ignoreUserPreferences) : false,
      noExperimentalResults: isSet(object.noExperimentalResults) ? Boolean(object.noExperimentalResults) : false,
      experimentalCohort: isSet(object.experimentalCohort) ? Number(object.experimentalCohort) : 0,
      debugGetSolrQuery: isSet(object.debugGetSolrQuery) ? Boolean(object.debugGetSolrQuery) : false,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
    };
  },

  toJSON(message: CStoreGetDiscoveryQueueRequest): unknown {
    const obj: any = {};
    message.queueType !== undefined && (obj.queueType = eStoreDiscoveryQueueTypeToJSON(message.queueType));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.rebuildQueue !== undefined && (obj.rebuildQueue = message.rebuildQueue);
    message.settingsChanged !== undefined && (obj.settingsChanged = message.settingsChanged);
    message.settings !== undefined &&
      (obj.settings = message.settings ? CStoreDiscoveryQueueSettings.toJSON(message.settings) : undefined);
    message.rebuildQueueIfStale !== undefined && (obj.rebuildQueueIfStale = message.rebuildQueueIfStale);
    message.ignoreUserPreferences !== undefined && (obj.ignoreUserPreferences = message.ignoreUserPreferences);
    message.noExperimentalResults !== undefined && (obj.noExperimentalResults = message.noExperimentalResults);
    message.experimentalCohort !== undefined && (obj.experimentalCohort = Math.round(message.experimentalCohort));
    message.debugGetSolrQuery !== undefined && (obj.debugGetSolrQuery = message.debugGetSolrQuery);
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueRequest>, I>>(base?: I): CStoreGetDiscoveryQueueRequest {
    return CStoreGetDiscoveryQueueRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueRequest>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueRequest {
    const message = createBaseCStoreGetDiscoveryQueueRequest();
    message.queueType = object.queueType ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.rebuildQueue = object.rebuildQueue ?? false;
    message.settingsChanged = object.settingsChanged ?? false;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? CStoreDiscoveryQueueSettings.fromPartial(object.settings)
      : undefined;
    message.rebuildQueueIfStale = object.rebuildQueueIfStale ?? false;
    message.ignoreUserPreferences = object.ignoreUserPreferences ?? false;
    message.noExperimentalResults = object.noExperimentalResults ?? false;
    message.experimentalCohort = object.experimentalCohort ?? 0;
    message.debugGetSolrQuery = object.debugGetSolrQuery ?? false;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueResponse(): CStoreGetDiscoveryQueueResponse {
  return {
    appids: [],
    countryCode: "",
    settings: undefined,
    skipped: 0,
    exhausted: false,
    experimentalCohort: 0,
    debugSolrQuery: "",
  };
}

export const CStoreGetDiscoveryQueueResponse = {
  encode(message: CStoreGetDiscoveryQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.settings !== undefined) {
      CStoreDiscoveryQueueSettings.encode(message.settings, writer.uint32(26).fork()).ldelim();
    }
    if (message.skipped !== 0) {
      writer.uint32(32).int32(message.skipped);
    }
    if (message.exhausted === true) {
      writer.uint32(40).bool(message.exhausted);
    }
    if (message.experimentalCohort !== 0) {
      writer.uint32(48).uint32(message.experimentalCohort);
    }
    if (message.debugSolrQuery !== "") {
      writer.uint32(58).string(message.debugSolrQuery);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appids.push(reader.uint32());
            }
          } else {
            message.appids.push(reader.uint32());
          }
          break;
        case 2:
          message.countryCode = reader.string();
          break;
        case 3:
          message.settings = CStoreDiscoveryQueueSettings.decode(reader, reader.uint32());
          break;
        case 4:
          message.skipped = reader.int32();
          break;
        case 5:
          message.exhausted = reader.bool();
          break;
        case 6:
          message.experimentalCohort = reader.uint32();
          break;
        case 7:
          message.debugSolrQuery = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetDiscoveryQueueResponse {
    return {
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      settings: isSet(object.settings) ? CStoreDiscoveryQueueSettings.fromJSON(object.settings) : undefined,
      skipped: isSet(object.skipped) ? Number(object.skipped) : 0,
      exhausted: isSet(object.exhausted) ? Boolean(object.exhausted) : false,
      experimentalCohort: isSet(object.experimentalCohort) ? Number(object.experimentalCohort) : 0,
      debugSolrQuery: isSet(object.debugSolrQuery) ? String(object.debugSolrQuery) : "",
    };
  },

  toJSON(message: CStoreGetDiscoveryQueueResponse): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.settings !== undefined &&
      (obj.settings = message.settings ? CStoreDiscoveryQueueSettings.toJSON(message.settings) : undefined);
    message.skipped !== undefined && (obj.skipped = Math.round(message.skipped));
    message.exhausted !== undefined && (obj.exhausted = message.exhausted);
    message.experimentalCohort !== undefined && (obj.experimentalCohort = Math.round(message.experimentalCohort));
    message.debugSolrQuery !== undefined && (obj.debugSolrQuery = message.debugSolrQuery);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueResponse>, I>>(base?: I): CStoreGetDiscoveryQueueResponse {
    return CStoreGetDiscoveryQueueResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueResponse>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueResponse {
    const message = createBaseCStoreGetDiscoveryQueueResponse();
    message.appids = object.appids?.map((e) => e) || [];
    message.countryCode = object.countryCode ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? CStoreDiscoveryQueueSettings.fromPartial(object.settings)
      : undefined;
    message.skipped = object.skipped ?? 0;
    message.exhausted = object.exhausted ?? false;
    message.experimentalCohort = object.experimentalCohort ?? 0;
    message.debugSolrQuery = object.debugSolrQuery ?? "";
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueSettingsRequest(): CStoreGetDiscoveryQueueSettingsRequest {
  return { queueType: 0, storePageFilter: undefined };
}

export const CStoreGetDiscoveryQueueSettingsRequest = {
  encode(message: CStoreGetDiscoveryQueueSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueType !== 0) {
      writer.uint32(8).int32(message.queueType);
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queueType = reader.int32() as any;
          break;
        case 2:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetDiscoveryQueueSettingsRequest {
    return {
      queueType: isSet(object.queueType) ? eStoreDiscoveryQueueTypeFromJSON(object.queueType) : 0,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
    };
  },

  toJSON(message: CStoreGetDiscoveryQueueSettingsRequest): unknown {
    const obj: any = {};
    message.queueType !== undefined && (obj.queueType = eStoreDiscoveryQueueTypeToJSON(message.queueType));
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSettingsRequest>, I>>(
    base?: I,
  ): CStoreGetDiscoveryQueueSettingsRequest {
    return CStoreGetDiscoveryQueueSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSettingsRequest>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueSettingsRequest {
    const message = createBaseCStoreGetDiscoveryQueueSettingsRequest();
    message.queueType = object.queueType ?? 0;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueSettingsResponse(): CStoreGetDiscoveryQueueSettingsResponse {
  return { countryCode: "", settings: undefined };
}

export const CStoreGetDiscoveryQueueSettingsResponse = {
  encode(message: CStoreGetDiscoveryQueueSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    if (message.settings !== undefined) {
      CStoreDiscoveryQueueSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countryCode = reader.string();
          break;
        case 2:
          message.settings = CStoreDiscoveryQueueSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetDiscoveryQueueSettingsResponse {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      settings: isSet(object.settings) ? CStoreDiscoveryQueueSettings.fromJSON(object.settings) : undefined,
    };
  },

  toJSON(message: CStoreGetDiscoveryQueueSettingsResponse): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.settings !== undefined &&
      (obj.settings = message.settings ? CStoreDiscoveryQueueSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSettingsResponse>, I>>(
    base?: I,
  ): CStoreGetDiscoveryQueueSettingsResponse {
    return CStoreGetDiscoveryQueueSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSettingsResponse>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueSettingsResponse {
    const message = createBaseCStoreGetDiscoveryQueueSettingsResponse();
    message.countryCode = object.countryCode ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? CStoreDiscoveryQueueSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseCStoreSkipDiscoveryQueueItemRequest(): CStoreSkipDiscoveryQueueItemRequest {
  return { queueType: 0, appid: 0, storePageFilter: undefined };
}

export const CStoreSkipDiscoveryQueueItemRequest = {
  encode(message: CStoreSkipDiscoveryQueueItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queueType !== 0) {
      writer.uint32(8).int32(message.queueType);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreSkipDiscoveryQueueItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreSkipDiscoveryQueueItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queueType = reader.int32() as any;
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreSkipDiscoveryQueueItemRequest {
    return {
      queueType: isSet(object.queueType) ? eStoreDiscoveryQueueTypeFromJSON(object.queueType) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
    };
  },

  toJSON(message: CStoreSkipDiscoveryQueueItemRequest): unknown {
    const obj: any = {};
    message.queueType !== undefined && (obj.queueType = eStoreDiscoveryQueueTypeToJSON(message.queueType));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreSkipDiscoveryQueueItemRequest>, I>>(
    base?: I,
  ): CStoreSkipDiscoveryQueueItemRequest {
    return CStoreSkipDiscoveryQueueItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreSkipDiscoveryQueueItemRequest>, I>>(
    object: I,
  ): CStoreSkipDiscoveryQueueItemRequest {
    const message = createBaseCStoreSkipDiscoveryQueueItemRequest();
    message.queueType = object.queueType ?? 0;
    message.appid = object.appid ?? 0;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    return message;
  },
};

function createBaseCStoreSkipDiscoveryQueueItemResponse(): CStoreSkipDiscoveryQueueItemResponse {
  return {};
}

export const CStoreSkipDiscoveryQueueItemResponse = {
  encode(_: CStoreSkipDiscoveryQueueItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreSkipDiscoveryQueueItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreSkipDiscoveryQueueItemResponse();
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

  fromJSON(_: any): CStoreSkipDiscoveryQueueItemResponse {
    return {};
  },

  toJSON(_: CStoreSkipDiscoveryQueueItemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreSkipDiscoveryQueueItemResponse>, I>>(
    base?: I,
  ): CStoreSkipDiscoveryQueueItemResponse {
    return CStoreSkipDiscoveryQueueItemResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreSkipDiscoveryQueueItemResponse>, I>>(
    _: I,
  ): CStoreSkipDiscoveryQueueItemResponse {
    const message = createBaseCStoreSkipDiscoveryQueueItemResponse();
    return message;
  },
};

function createBaseCStoreGetUserGameInterestStateRequest(): CStoreGetUserGameInterestStateRequest {
  return { appid: 0, storeAppid: 0, betaAppid: 0 };
}

export const CStoreGetUserGameInterestStateRequest = {
  encode(message: CStoreGetUserGameInterestStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.storeAppid !== 0) {
      writer.uint32(16).uint32(message.storeAppid);
    }
    if (message.betaAppid !== 0) {
      writer.uint32(24).uint32(message.betaAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetUserGameInterestStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetUserGameInterestStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.storeAppid = reader.uint32();
          break;
        case 3:
          message.betaAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetUserGameInterestStateRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      storeAppid: isSet(object.storeAppid) ? Number(object.storeAppid) : 0,
      betaAppid: isSet(object.betaAppid) ? Number(object.betaAppid) : 0,
    };
  },

  toJSON(message: CStoreGetUserGameInterestStateRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.storeAppid !== undefined && (obj.storeAppid = Math.round(message.storeAppid));
    message.betaAppid !== undefined && (obj.betaAppid = Math.round(message.betaAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateRequest>, I>>(
    base?: I,
  ): CStoreGetUserGameInterestStateRequest {
    return CStoreGetUserGameInterestStateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateRequest>, I>>(
    object: I,
  ): CStoreGetUserGameInterestStateRequest {
    const message = createBaseCStoreGetUserGameInterestStateRequest();
    message.appid = object.appid ?? 0;
    message.storeAppid = object.storeAppid ?? 0;
    message.betaAppid = object.betaAppid ?? 0;
    return message;
  },
};

function createBaseCStoreGetUserGameInterestStateResponse(): CStoreGetUserGameInterestStateResponse {
  return {
    owned: false,
    wishlist: false,
    ignored: false,
    following: false,
    inQueues: [],
    queuesWithSkip: [],
    queueItemsRemaining: [],
    queueItemsNextAppid: [],
    temporarilyOwned: false,
    queues: [],
    ignoredReason: 0,
    betaStatus: 0,
  };
}

export const CStoreGetUserGameInterestStateResponse = {
  encode(message: CStoreGetUserGameInterestStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owned === true) {
      writer.uint32(8).bool(message.owned);
    }
    if (message.wishlist === true) {
      writer.uint32(16).bool(message.wishlist);
    }
    if (message.ignored === true) {
      writer.uint32(24).bool(message.ignored);
    }
    if (message.following === true) {
      writer.uint32(32).bool(message.following);
    }
    writer.uint32(42).fork();
    for (const v of message.inQueues) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.queuesWithSkip) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.queueItemsRemaining) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.queueItemsNextAppid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.temporarilyOwned === true) {
      writer.uint32(72).bool(message.temporarilyOwned);
    }
    for (const v of message.queues) {
      CStoreGetUserGameInterestStateResponse_InQueue.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.ignoredReason !== 0) {
      writer.uint32(88).int32(message.ignoredReason);
    }
    if (message.betaStatus !== 0) {
      writer.uint32(96).int32(message.betaStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetUserGameInterestStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetUserGameInterestStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owned = reader.bool();
          break;
        case 2:
          message.wishlist = reader.bool();
          break;
        case 3:
          message.ignored = reader.bool();
          break;
        case 4:
          message.following = reader.bool();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inQueues.push(reader.int32() as any);
            }
          } else {
            message.inQueues.push(reader.int32() as any);
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.queuesWithSkip.push(reader.int32() as any);
            }
          } else {
            message.queuesWithSkip.push(reader.int32() as any);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.queueItemsRemaining.push(reader.int32());
            }
          } else {
            message.queueItemsRemaining.push(reader.int32());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.queueItemsNextAppid.push(reader.uint32());
            }
          } else {
            message.queueItemsNextAppid.push(reader.uint32());
          }
          break;
        case 9:
          message.temporarilyOwned = reader.bool();
          break;
        case 10:
          message.queues.push(CStoreGetUserGameInterestStateResponse_InQueue.decode(reader, reader.uint32()));
          break;
        case 11:
          message.ignoredReason = reader.int32();
          break;
        case 12:
          message.betaStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetUserGameInterestStateResponse {
    return {
      owned: isSet(object.owned) ? Boolean(object.owned) : false,
      wishlist: isSet(object.wishlist) ? Boolean(object.wishlist) : false,
      ignored: isSet(object.ignored) ? Boolean(object.ignored) : false,
      following: isSet(object.following) ? Boolean(object.following) : false,
      inQueues: Array.isArray(object?.inQueues)
        ? object.inQueues.map((e: any) => eStoreDiscoveryQueueTypeFromJSON(e))
        : [],
      queuesWithSkip: Array.isArray(object?.queuesWithSkip)
        ? object.queuesWithSkip.map((e: any) => eStoreDiscoveryQueueTypeFromJSON(e))
        : [],
      queueItemsRemaining: Array.isArray(object?.queueItemsRemaining)
        ? object.queueItemsRemaining.map((e: any) => Number(e))
        : [],
      queueItemsNextAppid: Array.isArray(object?.queueItemsNextAppid)
        ? object.queueItemsNextAppid.map((e: any) => Number(e))
        : [],
      temporarilyOwned: isSet(object.temporarilyOwned) ? Boolean(object.temporarilyOwned) : false,
      queues: Array.isArray(object?.queues)
        ? object.queues.map((e: any) => CStoreGetUserGameInterestStateResponse_InQueue.fromJSON(e))
        : [],
      ignoredReason: isSet(object.ignoredReason) ? Number(object.ignoredReason) : 0,
      betaStatus: isSet(object.betaStatus) ? ePlaytestStatusFromJSON(object.betaStatus) : 0,
    };
  },

  toJSON(message: CStoreGetUserGameInterestStateResponse): unknown {
    const obj: any = {};
    message.owned !== undefined && (obj.owned = message.owned);
    message.wishlist !== undefined && (obj.wishlist = message.wishlist);
    message.ignored !== undefined && (obj.ignored = message.ignored);
    message.following !== undefined && (obj.following = message.following);
    if (message.inQueues) {
      obj.inQueues = message.inQueues.map((e) => eStoreDiscoveryQueueTypeToJSON(e));
    } else {
      obj.inQueues = [];
    }
    if (message.queuesWithSkip) {
      obj.queuesWithSkip = message.queuesWithSkip.map((e) => eStoreDiscoveryQueueTypeToJSON(e));
    } else {
      obj.queuesWithSkip = [];
    }
    if (message.queueItemsRemaining) {
      obj.queueItemsRemaining = message.queueItemsRemaining.map((e) => Math.round(e));
    } else {
      obj.queueItemsRemaining = [];
    }
    if (message.queueItemsNextAppid) {
      obj.queueItemsNextAppid = message.queueItemsNextAppid.map((e) => Math.round(e));
    } else {
      obj.queueItemsNextAppid = [];
    }
    message.temporarilyOwned !== undefined && (obj.temporarilyOwned = message.temporarilyOwned);
    if (message.queues) {
      obj.queues = message.queues.map((e) => e ? CStoreGetUserGameInterestStateResponse_InQueue.toJSON(e) : undefined);
    } else {
      obj.queues = [];
    }
    message.ignoredReason !== undefined && (obj.ignoredReason = Math.round(message.ignoredReason));
    message.betaStatus !== undefined && (obj.betaStatus = ePlaytestStatusToJSON(message.betaStatus));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateResponse>, I>>(
    base?: I,
  ): CStoreGetUserGameInterestStateResponse {
    return CStoreGetUserGameInterestStateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateResponse>, I>>(
    object: I,
  ): CStoreGetUserGameInterestStateResponse {
    const message = createBaseCStoreGetUserGameInterestStateResponse();
    message.owned = object.owned ?? false;
    message.wishlist = object.wishlist ?? false;
    message.ignored = object.ignored ?? false;
    message.following = object.following ?? false;
    message.inQueues = object.inQueues?.map((e) => e) || [];
    message.queuesWithSkip = object.queuesWithSkip?.map((e) => e) || [];
    message.queueItemsRemaining = object.queueItemsRemaining?.map((e) => e) || [];
    message.queueItemsNextAppid = object.queueItemsNextAppid?.map((e) => e) || [];
    message.temporarilyOwned = object.temporarilyOwned ?? false;
    message.queues = object.queues?.map((e) => CStoreGetUserGameInterestStateResponse_InQueue.fromPartial(e)) || [];
    message.ignoredReason = object.ignoredReason ?? 0;
    message.betaStatus = object.betaStatus ?? 0;
    return message;
  },
};

function createBaseCStoreGetUserGameInterestStateResponse_InQueue(): CStoreGetUserGameInterestStateResponse_InQueue {
  return { type: 0, skipped: false, itemsRemaining: 0, nextAppid: 0, experimentalCohort: 0 };
}

export const CStoreGetUserGameInterestStateResponse_InQueue = {
  encode(
    message: CStoreGetUserGameInterestStateResponse_InQueue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.skipped === true) {
      writer.uint32(16).bool(message.skipped);
    }
    if (message.itemsRemaining !== 0) {
      writer.uint32(24).int32(message.itemsRemaining);
    }
    if (message.nextAppid !== 0) {
      writer.uint32(32).uint32(message.nextAppid);
    }
    if (message.experimentalCohort !== 0) {
      writer.uint32(40).uint32(message.experimentalCohort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetUserGameInterestStateResponse_InQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetUserGameInterestStateResponse_InQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.skipped = reader.bool();
          break;
        case 3:
          message.itemsRemaining = reader.int32();
          break;
        case 4:
          message.nextAppid = reader.uint32();
          break;
        case 5:
          message.experimentalCohort = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetUserGameInterestStateResponse_InQueue {
    return {
      type: isSet(object.type) ? eStoreDiscoveryQueueTypeFromJSON(object.type) : 0,
      skipped: isSet(object.skipped) ? Boolean(object.skipped) : false,
      itemsRemaining: isSet(object.itemsRemaining) ? Number(object.itemsRemaining) : 0,
      nextAppid: isSet(object.nextAppid) ? Number(object.nextAppid) : 0,
      experimentalCohort: isSet(object.experimentalCohort) ? Number(object.experimentalCohort) : 0,
    };
  },

  toJSON(message: CStoreGetUserGameInterestStateResponse_InQueue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eStoreDiscoveryQueueTypeToJSON(message.type));
    message.skipped !== undefined && (obj.skipped = message.skipped);
    message.itemsRemaining !== undefined && (obj.itemsRemaining = Math.round(message.itemsRemaining));
    message.nextAppid !== undefined && (obj.nextAppid = Math.round(message.nextAppid));
    message.experimentalCohort !== undefined && (obj.experimentalCohort = Math.round(message.experimentalCohort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateResponse_InQueue>, I>>(
    base?: I,
  ): CStoreGetUserGameInterestStateResponse_InQueue {
    return CStoreGetUserGameInterestStateResponse_InQueue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetUserGameInterestStateResponse_InQueue>, I>>(
    object: I,
  ): CStoreGetUserGameInterestStateResponse_InQueue {
    const message = createBaseCStoreGetUserGameInterestStateResponse_InQueue();
    message.type = object.type ?? 0;
    message.skipped = object.skipped ?? false;
    message.itemsRemaining = object.itemsRemaining ?? 0;
    message.nextAppid = object.nextAppid ?? 0;
    message.experimentalCohort = object.experimentalCohort ?? 0;
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueSkippedAppsRequest(): CStoreGetDiscoveryQueueSkippedAppsRequest {
  return { steamid: 0, queueType: 0, storePageFilter: undefined };
}

export const CStoreGetDiscoveryQueueSkippedAppsRequest = {
  encode(message: CStoreGetDiscoveryQueueSkippedAppsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.queueType !== 0) {
      writer.uint32(16).int32(message.queueType);
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueSkippedAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueSkippedAppsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.queueType = reader.int32() as any;
          break;
        case 3:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetDiscoveryQueueSkippedAppsRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      queueType: isSet(object.queueType) ? eStoreDiscoveryQueueTypeFromJSON(object.queueType) : 0,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
    };
  },

  toJSON(message: CStoreGetDiscoveryQueueSkippedAppsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.queueType !== undefined && (obj.queueType = eStoreDiscoveryQueueTypeToJSON(message.queueType));
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSkippedAppsRequest>, I>>(
    base?: I,
  ): CStoreGetDiscoveryQueueSkippedAppsRequest {
    return CStoreGetDiscoveryQueueSkippedAppsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSkippedAppsRequest>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueSkippedAppsRequest {
    const message = createBaseCStoreGetDiscoveryQueueSkippedAppsRequest();
    message.steamid = object.steamid ?? 0;
    message.queueType = object.queueType ?? 0;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    return message;
  },
};

function createBaseCStoreGetDiscoveryQueueSkippedAppsResponse(): CStoreGetDiscoveryQueueSkippedAppsResponse {
  return { appids: [] };
}

export const CStoreGetDiscoveryQueueSkippedAppsResponse = {
  encode(message: CStoreGetDiscoveryQueueSkippedAppsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetDiscoveryQueueSkippedAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetDiscoveryQueueSkippedAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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

  fromJSON(object: any): CStoreGetDiscoveryQueueSkippedAppsResponse {
    return { appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CStoreGetDiscoveryQueueSkippedAppsResponse): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSkippedAppsResponse>, I>>(
    base?: I,
  ): CStoreGetDiscoveryQueueSkippedAppsResponse {
    return CStoreGetDiscoveryQueueSkippedAppsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetDiscoveryQueueSkippedAppsResponse>, I>>(
    object: I,
  ): CStoreGetDiscoveryQueueSkippedAppsResponse {
    const message = createBaseCStoreGetDiscoveryQueueSkippedAppsResponse();
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCStoreGetStorePreferencesRequest(): CStoreGetStorePreferencesRequest {
  return {};
}

export const CStoreGetStorePreferencesRequest = {
  encode(_: CStoreGetStorePreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetStorePreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetStorePreferencesRequest();
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

  fromJSON(_: any): CStoreGetStorePreferencesRequest {
    return {};
  },

  toJSON(_: CStoreGetStorePreferencesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetStorePreferencesRequest>, I>>(
    base?: I,
  ): CStoreGetStorePreferencesRequest {
    return CStoreGetStorePreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetStorePreferencesRequest>, I>>(
    _: I,
  ): CStoreGetStorePreferencesRequest {
    const message = createBaseCStoreGetStorePreferencesRequest();
    return message;
  },
};

function createBaseCStoreUserPreferences(): CStoreUserPreferences {
  return {
    primaryLanguage: 0,
    secondaryLanguages: 0,
    platformWindows: false,
    platformMac: false,
    platformLinux: false,
    timestampUpdated: 0,
    hideStoreBroadcast: false,
    reviewScorePreference: 0,
    timestampContentDescriptorPreferencesUpdated: 0,
    provideDeckFeedback: 0,
    additionalLanguages: "",
  };
}

export const CStoreUserPreferences = {
  encode(message: CStoreUserPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.primaryLanguage !== 0) {
      writer.uint32(8).int32(message.primaryLanguage);
    }
    if (message.secondaryLanguages !== 0) {
      writer.uint32(16).uint32(message.secondaryLanguages);
    }
    if (message.platformWindows === true) {
      writer.uint32(24).bool(message.platformWindows);
    }
    if (message.platformMac === true) {
      writer.uint32(32).bool(message.platformMac);
    }
    if (message.platformLinux === true) {
      writer.uint32(40).bool(message.platformLinux);
    }
    if (message.timestampUpdated !== 0) {
      writer.uint32(64).uint32(message.timestampUpdated);
    }
    if (message.hideStoreBroadcast === true) {
      writer.uint32(72).bool(message.hideStoreBroadcast);
    }
    if (message.reviewScorePreference !== 0) {
      writer.uint32(80).int32(message.reviewScorePreference);
    }
    if (message.timestampContentDescriptorPreferencesUpdated !== 0) {
      writer.uint32(88).int32(message.timestampContentDescriptorPreferencesUpdated);
    }
    if (message.provideDeckFeedback !== 0) {
      writer.uint32(96).int32(message.provideDeckFeedback);
    }
    if (message.additionalLanguages !== "") {
      writer.uint32(106).string(message.additionalLanguages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreUserPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreUserPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryLanguage = reader.int32();
          break;
        case 2:
          message.secondaryLanguages = reader.uint32();
          break;
        case 3:
          message.platformWindows = reader.bool();
          break;
        case 4:
          message.platformMac = reader.bool();
          break;
        case 5:
          message.platformLinux = reader.bool();
          break;
        case 8:
          message.timestampUpdated = reader.uint32();
          break;
        case 9:
          message.hideStoreBroadcast = reader.bool();
          break;
        case 10:
          message.reviewScorePreference = reader.int32() as any;
          break;
        case 11:
          message.timestampContentDescriptorPreferencesUpdated = reader.int32();
          break;
        case 12:
          message.provideDeckFeedback = reader.int32() as any;
          break;
        case 13:
          message.additionalLanguages = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreUserPreferences {
    return {
      primaryLanguage: isSet(object.primaryLanguage) ? Number(object.primaryLanguage) : 0,
      secondaryLanguages: isSet(object.secondaryLanguages) ? Number(object.secondaryLanguages) : 0,
      platformWindows: isSet(object.platformWindows) ? Boolean(object.platformWindows) : false,
      platformMac: isSet(object.platformMac) ? Boolean(object.platformMac) : false,
      platformLinux: isSet(object.platformLinux) ? Boolean(object.platformLinux) : false,
      timestampUpdated: isSet(object.timestampUpdated) ? Number(object.timestampUpdated) : 0,
      hideStoreBroadcast: isSet(object.hideStoreBroadcast) ? Boolean(object.hideStoreBroadcast) : false,
      reviewScorePreference: isSet(object.reviewScorePreference)
        ? eUserReviewScorePreferenceFromJSON(object.reviewScorePreference)
        : 0,
      timestampContentDescriptorPreferencesUpdated: isSet(object.timestampContentDescriptorPreferencesUpdated)
        ? Number(object.timestampContentDescriptorPreferencesUpdated)
        : 0,
      provideDeckFeedback: isSet(object.provideDeckFeedback)
        ? eProvideDeckFeedbackPreferenceFromJSON(object.provideDeckFeedback)
        : 0,
      additionalLanguages: isSet(object.additionalLanguages) ? String(object.additionalLanguages) : "",
    };
  },

  toJSON(message: CStoreUserPreferences): unknown {
    const obj: any = {};
    message.primaryLanguage !== undefined && (obj.primaryLanguage = Math.round(message.primaryLanguage));
    message.secondaryLanguages !== undefined && (obj.secondaryLanguages = Math.round(message.secondaryLanguages));
    message.platformWindows !== undefined && (obj.platformWindows = message.platformWindows);
    message.platformMac !== undefined && (obj.platformMac = message.platformMac);
    message.platformLinux !== undefined && (obj.platformLinux = message.platformLinux);
    message.timestampUpdated !== undefined && (obj.timestampUpdated = Math.round(message.timestampUpdated));
    message.hideStoreBroadcast !== undefined && (obj.hideStoreBroadcast = message.hideStoreBroadcast);
    message.reviewScorePreference !== undefined &&
      (obj.reviewScorePreference = eUserReviewScorePreferenceToJSON(message.reviewScorePreference));
    message.timestampContentDescriptorPreferencesUpdated !== undefined &&
      (obj.timestampContentDescriptorPreferencesUpdated = Math.round(
        message.timestampContentDescriptorPreferencesUpdated,
      ));
    message.provideDeckFeedback !== undefined &&
      (obj.provideDeckFeedback = eProvideDeckFeedbackPreferenceToJSON(message.provideDeckFeedback));
    message.additionalLanguages !== undefined && (obj.additionalLanguages = message.additionalLanguages);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreUserPreferences>, I>>(base?: I): CStoreUserPreferences {
    return CStoreUserPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreUserPreferences>, I>>(object: I): CStoreUserPreferences {
    const message = createBaseCStoreUserPreferences();
    message.primaryLanguage = object.primaryLanguage ?? 0;
    message.secondaryLanguages = object.secondaryLanguages ?? 0;
    message.platformWindows = object.platformWindows ?? false;
    message.platformMac = object.platformMac ?? false;
    message.platformLinux = object.platformLinux ?? false;
    message.timestampUpdated = object.timestampUpdated ?? 0;
    message.hideStoreBroadcast = object.hideStoreBroadcast ?? false;
    message.reviewScorePreference = object.reviewScorePreference ?? 0;
    message.timestampContentDescriptorPreferencesUpdated = object.timestampContentDescriptorPreferencesUpdated ?? 0;
    message.provideDeckFeedback = object.provideDeckFeedback ?? 0;
    message.additionalLanguages = object.additionalLanguages ?? "";
    return message;
  },
};

function createBaseCStoreUserTagPreferences(): CStoreUserTagPreferences {
  return { tagsToExclude: [] };
}

export const CStoreUserTagPreferences = {
  encode(message: CStoreUserTagPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tagsToExclude) {
      CStoreUserTagPreferences_Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreUserTagPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreUserTagPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagsToExclude.push(CStoreUserTagPreferences_Tag.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreUserTagPreferences {
    return {
      tagsToExclude: Array.isArray(object?.tagsToExclude)
        ? object.tagsToExclude.map((e: any) => CStoreUserTagPreferences_Tag.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreUserTagPreferences): unknown {
    const obj: any = {};
    if (message.tagsToExclude) {
      obj.tagsToExclude = message.tagsToExclude.map((e) => e ? CStoreUserTagPreferences_Tag.toJSON(e) : undefined);
    } else {
      obj.tagsToExclude = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreUserTagPreferences>, I>>(base?: I): CStoreUserTagPreferences {
    return CStoreUserTagPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreUserTagPreferences>, I>>(object: I): CStoreUserTagPreferences {
    const message = createBaseCStoreUserTagPreferences();
    message.tagsToExclude = object.tagsToExclude?.map((e) => CStoreUserTagPreferences_Tag.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreUserTagPreferences_Tag(): CStoreUserTagPreferences_Tag {
  return { tagid: 0, name: "", timestampAdded: 0 };
}

export const CStoreUserTagPreferences_Tag = {
  encode(message: CStoreUserTagPreferences_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tagid !== 0) {
      writer.uint32(8).uint32(message.tagid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.timestampAdded !== 0) {
      writer.uint32(24).uint32(message.timestampAdded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreUserTagPreferences_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreUserTagPreferences_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.timestampAdded = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreUserTagPreferences_Tag {
    return {
      tagid: isSet(object.tagid) ? Number(object.tagid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      timestampAdded: isSet(object.timestampAdded) ? Number(object.timestampAdded) : 0,
    };
  },

  toJSON(message: CStoreUserTagPreferences_Tag): unknown {
    const obj: any = {};
    message.tagid !== undefined && (obj.tagid = Math.round(message.tagid));
    message.name !== undefined && (obj.name = message.name);
    message.timestampAdded !== undefined && (obj.timestampAdded = Math.round(message.timestampAdded));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreUserTagPreferences_Tag>, I>>(base?: I): CStoreUserTagPreferences_Tag {
    return CStoreUserTagPreferences_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreUserTagPreferences_Tag>, I>>(object: I): CStoreUserTagPreferences_Tag {
    const message = createBaseCStoreUserTagPreferences_Tag();
    message.tagid = object.tagid ?? 0;
    message.name = object.name ?? "";
    message.timestampAdded = object.timestampAdded ?? 0;
    return message;
  },
};

function createBaseCStoreUserContentDescriptorPreferences(): CStoreUserContentDescriptorPreferences {
  return { contentDescriptorsToExclude: [] };
}

export const CStoreUserContentDescriptorPreferences = {
  encode(message: CStoreUserContentDescriptorPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contentDescriptorsToExclude) {
      CStoreUserContentDescriptorPreferences_ContentDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreUserContentDescriptorPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreUserContentDescriptorPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentDescriptorsToExclude.push(
            CStoreUserContentDescriptorPreferences_ContentDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreUserContentDescriptorPreferences {
    return {
      contentDescriptorsToExclude: Array.isArray(object?.contentDescriptorsToExclude)
        ? object.contentDescriptorsToExclude.map((e: any) =>
          CStoreUserContentDescriptorPreferences_ContentDescriptor.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CStoreUserContentDescriptorPreferences): unknown {
    const obj: any = {};
    if (message.contentDescriptorsToExclude) {
      obj.contentDescriptorsToExclude = message.contentDescriptorsToExclude.map((e) =>
        e ? CStoreUserContentDescriptorPreferences_ContentDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.contentDescriptorsToExclude = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreUserContentDescriptorPreferences>, I>>(
    base?: I,
  ): CStoreUserContentDescriptorPreferences {
    return CStoreUserContentDescriptorPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreUserContentDescriptorPreferences>, I>>(
    object: I,
  ): CStoreUserContentDescriptorPreferences {
    const message = createBaseCStoreUserContentDescriptorPreferences();
    message.contentDescriptorsToExclude =
      object.contentDescriptorsToExclude?.map((e) =>
        CStoreUserContentDescriptorPreferences_ContentDescriptor.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCStoreUserContentDescriptorPreferences_ContentDescriptor(): CStoreUserContentDescriptorPreferences_ContentDescriptor {
  return { contentDescriptorid: 0, timestampAdded: 0 };
}

export const CStoreUserContentDescriptorPreferences_ContentDescriptor = {
  encode(
    message: CStoreUserContentDescriptorPreferences_ContentDescriptor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contentDescriptorid !== 0) {
      writer.uint32(8).uint32(message.contentDescriptorid);
    }
    if (message.timestampAdded !== 0) {
      writer.uint32(16).uint32(message.timestampAdded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreUserContentDescriptorPreferences_ContentDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreUserContentDescriptorPreferences_ContentDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contentDescriptorid = reader.uint32();
          break;
        case 2:
          message.timestampAdded = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreUserContentDescriptorPreferences_ContentDescriptor {
    return {
      contentDescriptorid: isSet(object.contentDescriptorid) ? Number(object.contentDescriptorid) : 0,
      timestampAdded: isSet(object.timestampAdded) ? Number(object.timestampAdded) : 0,
    };
  },

  toJSON(message: CStoreUserContentDescriptorPreferences_ContentDescriptor): unknown {
    const obj: any = {};
    message.contentDescriptorid !== undefined && (obj.contentDescriptorid = Math.round(message.contentDescriptorid));
    message.timestampAdded !== undefined && (obj.timestampAdded = Math.round(message.timestampAdded));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreUserContentDescriptorPreferences_ContentDescriptor>, I>>(
    base?: I,
  ): CStoreUserContentDescriptorPreferences_ContentDescriptor {
    return CStoreUserContentDescriptorPreferences_ContentDescriptor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreUserContentDescriptorPreferences_ContentDescriptor>, I>>(
    object: I,
  ): CStoreUserContentDescriptorPreferences_ContentDescriptor {
    const message = createBaseCStoreUserContentDescriptorPreferences_ContentDescriptor();
    message.contentDescriptorid = object.contentDescriptorid ?? 0;
    message.timestampAdded = object.timestampAdded ?? 0;
    return message;
  },
};

function createBaseCStoreGetStorePreferencesResponse(): CStoreGetStorePreferencesResponse {
  return { preferences: undefined, tagPreferences: undefined, contentDescriptorPreferences: undefined };
}

export const CStoreGetStorePreferencesResponse = {
  encode(message: CStoreGetStorePreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CStoreUserPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    if (message.tagPreferences !== undefined) {
      CStoreUserTagPreferences.encode(message.tagPreferences, writer.uint32(18).fork()).ldelim();
    }
    if (message.contentDescriptorPreferences !== undefined) {
      CStoreUserContentDescriptorPreferences.encode(message.contentDescriptorPreferences, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetStorePreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetStorePreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = CStoreUserPreferences.decode(reader, reader.uint32());
          break;
        case 2:
          message.tagPreferences = CStoreUserTagPreferences.decode(reader, reader.uint32());
          break;
        case 3:
          message.contentDescriptorPreferences = CStoreUserContentDescriptorPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetStorePreferencesResponse {
    return {
      preferences: isSet(object.preferences) ? CStoreUserPreferences.fromJSON(object.preferences) : undefined,
      tagPreferences: isSet(object.tagPreferences)
        ? CStoreUserTagPreferences.fromJSON(object.tagPreferences)
        : undefined,
      contentDescriptorPreferences: isSet(object.contentDescriptorPreferences)
        ? CStoreUserContentDescriptorPreferences.fromJSON(object.contentDescriptorPreferences)
        : undefined,
    };
  },

  toJSON(message: CStoreGetStorePreferencesResponse): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CStoreUserPreferences.toJSON(message.preferences) : undefined);
    message.tagPreferences !== undefined &&
      (obj.tagPreferences = message.tagPreferences
        ? CStoreUserTagPreferences.toJSON(message.tagPreferences)
        : undefined);
    message.contentDescriptorPreferences !== undefined &&
      (obj.contentDescriptorPreferences = message.contentDescriptorPreferences
        ? CStoreUserContentDescriptorPreferences.toJSON(message.contentDescriptorPreferences)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetStorePreferencesResponse>, I>>(
    base?: I,
  ): CStoreGetStorePreferencesResponse {
    return CStoreGetStorePreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetStorePreferencesResponse>, I>>(
    object: I,
  ): CStoreGetStorePreferencesResponse {
    const message = createBaseCStoreGetStorePreferencesResponse();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CStoreUserPreferences.fromPartial(object.preferences)
      : undefined;
    message.tagPreferences = (object.tagPreferences !== undefined && object.tagPreferences !== null)
      ? CStoreUserTagPreferences.fromPartial(object.tagPreferences)
      : undefined;
    message.contentDescriptorPreferences =
      (object.contentDescriptorPreferences !== undefined && object.contentDescriptorPreferences !== null)
        ? CStoreUserContentDescriptorPreferences.fromPartial(object.contentDescriptorPreferences)
        : undefined;
    return message;
  },
};

function createBaseCStoreGetTrendingAppsAmongFriendsRequest(): CStoreGetTrendingAppsAmongFriendsRequest {
  return { numApps: 0, numTopFriends: 0 };
}

export const CStoreGetTrendingAppsAmongFriendsRequest = {
  encode(message: CStoreGetTrendingAppsAmongFriendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numApps !== 0) {
      writer.uint32(8).uint32(message.numApps);
    }
    if (message.numTopFriends !== 0) {
      writer.uint32(16).uint32(message.numTopFriends);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetTrendingAppsAmongFriendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetTrendingAppsAmongFriendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numApps = reader.uint32();
          break;
        case 2:
          message.numTopFriends = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetTrendingAppsAmongFriendsRequest {
    return {
      numApps: isSet(object.numApps) ? Number(object.numApps) : 0,
      numTopFriends: isSet(object.numTopFriends) ? Number(object.numTopFriends) : 0,
    };
  },

  toJSON(message: CStoreGetTrendingAppsAmongFriendsRequest): unknown {
    const obj: any = {};
    message.numApps !== undefined && (obj.numApps = Math.round(message.numApps));
    message.numTopFriends !== undefined && (obj.numTopFriends = Math.round(message.numTopFriends));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsRequest>, I>>(
    base?: I,
  ): CStoreGetTrendingAppsAmongFriendsRequest {
    return CStoreGetTrendingAppsAmongFriendsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsRequest>, I>>(
    object: I,
  ): CStoreGetTrendingAppsAmongFriendsRequest {
    const message = createBaseCStoreGetTrendingAppsAmongFriendsRequest();
    message.numApps = object.numApps ?? 0;
    message.numTopFriends = object.numTopFriends ?? 0;
    return message;
  },
};

function createBaseCStoreGetTrendingAppsAmongFriendsResponse(): CStoreGetTrendingAppsAmongFriendsResponse {
  return { trendingApps: [] };
}

export const CStoreGetTrendingAppsAmongFriendsResponse = {
  encode(message: CStoreGetTrendingAppsAmongFriendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trendingApps) {
      CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetTrendingAppsAmongFriendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetTrendingAppsAmongFriendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trendingApps.push(
            CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetTrendingAppsAmongFriendsResponse {
    return {
      trendingApps: Array.isArray(object?.trendingApps)
        ? object.trendingApps.map((e: any) => CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreGetTrendingAppsAmongFriendsResponse): unknown {
    const obj: any = {};
    if (message.trendingApps) {
      obj.trendingApps = message.trendingApps.map((e) =>
        e ? CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.toJSON(e) : undefined
      );
    } else {
      obj.trendingApps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsResponse>, I>>(
    base?: I,
  ): CStoreGetTrendingAppsAmongFriendsResponse {
    return CStoreGetTrendingAppsAmongFriendsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsResponse>, I>>(
    object: I,
  ): CStoreGetTrendingAppsAmongFriendsResponse {
    const message = createBaseCStoreGetTrendingAppsAmongFriendsResponse();
    message.trendingApps =
      object.trendingApps?.map((e) => CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData(): CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
  return { appid: 0, steamidsTopFriends: [], totalFriends: 0 };
}

export const CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData = {
  encode(
    message: CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    writer.uint32(18).fork();
    for (const v of message.steamidsTopFriends) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.totalFriends !== 0) {
      writer.uint32(24).uint32(message.totalFriends);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData();
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
              message.steamidsTopFriends.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.steamidsTopFriends.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.totalFriends = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamidsTopFriends: Array.isArray(object?.steamidsTopFriends)
        ? object.steamidsTopFriends.map((e: any) => Number(e))
        : [],
      totalFriends: isSet(object.totalFriends) ? Number(object.totalFriends) : 0,
    };
  },

  toJSON(message: CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.steamidsTopFriends) {
      obj.steamidsTopFriends = message.steamidsTopFriends.map((e) => Math.round(e));
    } else {
      obj.steamidsTopFriends = [];
    }
    message.totalFriends !== undefined && (obj.totalFriends = Math.round(message.totalFriends));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData>, I>>(
    base?: I,
  ): CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
    return CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData>, I>>(
    object: I,
  ): CStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData {
    const message = createBaseCStoreGetTrendingAppsAmongFriendsResponse_TrendingAppData();
    message.appid = object.appid ?? 0;
    message.steamidsTopFriends = object.steamidsTopFriends?.map((e) => e) || [];
    message.totalFriends = object.totalFriends ?? 0;
    return message;
  },
};

function createBaseCSteamDeckCompatibilitySetFeedbackRequest(): CSteamDeckCompatibilitySetFeedbackRequest {
  return { appid: 0, feedback: 0 };
}

export const CSteamDeckCompatibilitySetFeedbackRequest = {
  encode(message: CSteamDeckCompatibilitySetFeedbackRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.feedback !== 0) {
      writer.uint32(16).int32(message.feedback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamDeckCompatibilitySetFeedbackRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamDeckCompatibilitySetFeedbackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.feedback = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamDeckCompatibilitySetFeedbackRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      feedback: isSet(object.feedback) ? eSteamDeckCompatibilityFeedbackFromJSON(object.feedback) : 0,
    };
  },

  toJSON(message: CSteamDeckCompatibilitySetFeedbackRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.feedback !== undefined && (obj.feedback = eSteamDeckCompatibilityFeedbackToJSON(message.feedback));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamDeckCompatibilitySetFeedbackRequest>, I>>(
    base?: I,
  ): CSteamDeckCompatibilitySetFeedbackRequest {
    return CSteamDeckCompatibilitySetFeedbackRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamDeckCompatibilitySetFeedbackRequest>, I>>(
    object: I,
  ): CSteamDeckCompatibilitySetFeedbackRequest {
    const message = createBaseCSteamDeckCompatibilitySetFeedbackRequest();
    message.appid = object.appid ?? 0;
    message.feedback = object.feedback ?? 0;
    return message;
  },
};

function createBaseCSteamDeckCompatibilitySetFeedbackResponse(): CSteamDeckCompatibilitySetFeedbackResponse {
  return {};
}

export const CSteamDeckCompatibilitySetFeedbackResponse = {
  encode(_: CSteamDeckCompatibilitySetFeedbackResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamDeckCompatibilitySetFeedbackResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamDeckCompatibilitySetFeedbackResponse();
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

  fromJSON(_: any): CSteamDeckCompatibilitySetFeedbackResponse {
    return {};
  },

  toJSON(_: CSteamDeckCompatibilitySetFeedbackResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamDeckCompatibilitySetFeedbackResponse>, I>>(
    base?: I,
  ): CSteamDeckCompatibilitySetFeedbackResponse {
    return CSteamDeckCompatibilitySetFeedbackResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamDeckCompatibilitySetFeedbackResponse>, I>>(
    _: I,
  ): CSteamDeckCompatibilitySetFeedbackResponse {
    const message = createBaseCSteamDeckCompatibilitySetFeedbackResponse();
    return message;
  },
};

function createBaseCSteamDeckCompatibilityShouldPromptRequest(): CSteamDeckCompatibilityShouldPromptRequest {
  return { appid: 0 };
}

export const CSteamDeckCompatibilityShouldPromptRequest = {
  encode(message: CSteamDeckCompatibilityShouldPromptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamDeckCompatibilityShouldPromptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamDeckCompatibilityShouldPromptRequest();
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

  fromJSON(object: any): CSteamDeckCompatibilityShouldPromptRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CSteamDeckCompatibilityShouldPromptRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamDeckCompatibilityShouldPromptRequest>, I>>(
    base?: I,
  ): CSteamDeckCompatibilityShouldPromptRequest {
    return CSteamDeckCompatibilityShouldPromptRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamDeckCompatibilityShouldPromptRequest>, I>>(
    object: I,
  ): CSteamDeckCompatibilityShouldPromptRequest {
    const message = createBaseCSteamDeckCompatibilityShouldPromptRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCSteamDeckCompatibilityShouldPromptResponse(): CSteamDeckCompatibilityShouldPromptResponse {
  return { prompt: false, feedbackEligible: false, existingFeedback: 0 };
}

export const CSteamDeckCompatibilityShouldPromptResponse = {
  encode(message: CSteamDeckCompatibilityShouldPromptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prompt === true) {
      writer.uint32(8).bool(message.prompt);
    }
    if (message.feedbackEligible === true) {
      writer.uint32(16).bool(message.feedbackEligible);
    }
    if (message.existingFeedback !== 0) {
      writer.uint32(24).int32(message.existingFeedback);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamDeckCompatibilityShouldPromptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamDeckCompatibilityShouldPromptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prompt = reader.bool();
          break;
        case 2:
          message.feedbackEligible = reader.bool();
          break;
        case 3:
          message.existingFeedback = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamDeckCompatibilityShouldPromptResponse {
    return {
      prompt: isSet(object.prompt) ? Boolean(object.prompt) : false,
      feedbackEligible: isSet(object.feedbackEligible) ? Boolean(object.feedbackEligible) : false,
      existingFeedback: isSet(object.existingFeedback)
        ? eSteamDeckCompatibilityFeedbackFromJSON(object.existingFeedback)
        : 0,
    };
  },

  toJSON(message: CSteamDeckCompatibilityShouldPromptResponse): unknown {
    const obj: any = {};
    message.prompt !== undefined && (obj.prompt = message.prompt);
    message.feedbackEligible !== undefined && (obj.feedbackEligible = message.feedbackEligible);
    message.existingFeedback !== undefined &&
      (obj.existingFeedback = eSteamDeckCompatibilityFeedbackToJSON(message.existingFeedback));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamDeckCompatibilityShouldPromptResponse>, I>>(
    base?: I,
  ): CSteamDeckCompatibilityShouldPromptResponse {
    return CSteamDeckCompatibilityShouldPromptResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamDeckCompatibilityShouldPromptResponse>, I>>(
    object: I,
  ): CSteamDeckCompatibilityShouldPromptResponse {
    const message = createBaseCSteamDeckCompatibilityShouldPromptResponse();
    message.prompt = object.prompt ?? false;
    message.feedbackEligible = object.feedbackEligible ?? false;
    message.existingFeedback = object.existingFeedback ?? 0;
    return message;
  },
};

function createBaseCStoreStorePreferencesChangedNotification(): CStoreStorePreferencesChangedNotification {
  return { preferences: undefined, tagPreferences: undefined, contentDescriptorPreferences: undefined };
}

export const CStoreStorePreferencesChangedNotification = {
  encode(message: CStoreStorePreferencesChangedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CStoreUserPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    if (message.tagPreferences !== undefined) {
      CStoreUserTagPreferences.encode(message.tagPreferences, writer.uint32(18).fork()).ldelim();
    }
    if (message.contentDescriptorPreferences !== undefined) {
      CStoreUserContentDescriptorPreferences.encode(message.contentDescriptorPreferences, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreStorePreferencesChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreStorePreferencesChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = CStoreUserPreferences.decode(reader, reader.uint32());
          break;
        case 2:
          message.tagPreferences = CStoreUserTagPreferences.decode(reader, reader.uint32());
          break;
        case 3:
          message.contentDescriptorPreferences = CStoreUserContentDescriptorPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreStorePreferencesChangedNotification {
    return {
      preferences: isSet(object.preferences) ? CStoreUserPreferences.fromJSON(object.preferences) : undefined,
      tagPreferences: isSet(object.tagPreferences)
        ? CStoreUserTagPreferences.fromJSON(object.tagPreferences)
        : undefined,
      contentDescriptorPreferences: isSet(object.contentDescriptorPreferences)
        ? CStoreUserContentDescriptorPreferences.fromJSON(object.contentDescriptorPreferences)
        : undefined,
    };
  },

  toJSON(message: CStoreStorePreferencesChangedNotification): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CStoreUserPreferences.toJSON(message.preferences) : undefined);
    message.tagPreferences !== undefined &&
      (obj.tagPreferences = message.tagPreferences
        ? CStoreUserTagPreferences.toJSON(message.tagPreferences)
        : undefined);
    message.contentDescriptorPreferences !== undefined &&
      (obj.contentDescriptorPreferences = message.contentDescriptorPreferences
        ? CStoreUserContentDescriptorPreferences.toJSON(message.contentDescriptorPreferences)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreStorePreferencesChangedNotification>, I>>(
    base?: I,
  ): CStoreStorePreferencesChangedNotification {
    return CStoreStorePreferencesChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreStorePreferencesChangedNotification>, I>>(
    object: I,
  ): CStoreStorePreferencesChangedNotification {
    const message = createBaseCStoreStorePreferencesChangedNotification();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CStoreUserPreferences.fromPartial(object.preferences)
      : undefined;
    message.tagPreferences = (object.tagPreferences !== undefined && object.tagPreferences !== null)
      ? CStoreUserTagPreferences.fromPartial(object.tagPreferences)
      : undefined;
    message.contentDescriptorPreferences =
      (object.contentDescriptorPreferences !== undefined && object.contentDescriptorPreferences !== null)
        ? CStoreUserContentDescriptorPreferences.fromPartial(object.contentDescriptorPreferences)
        : undefined;
    return message;
  },
};

export interface Store {
  RegisterCDKey(request: CStoreRegisterCDKeyRequest): Promise<CStoreRegisterCDKeyResponse>;
  GetMostPopularTags(request: CStoreGetMostPopularTagsRequest): Promise<CStoreGetMostPopularTagsResponse>;
  GetLocalizedNameForTags(
    request: CStoreGetLocalizedNameForTagsRequest,
  ): Promise<CStoreGetLocalizedNameForTagsResponse>;
  GetDiscoveryQueue(request: CStoreGetDiscoveryQueueRequest): Promise<CStoreGetDiscoveryQueueResponse>;
  GetDiscoveryQueueSettings(
    request: CStoreGetDiscoveryQueueSettingsRequest,
  ): Promise<CStoreGetDiscoveryQueueSettingsResponse>;
  SkipDiscoveryQueueItem(request: CStoreSkipDiscoveryQueueItemRequest): Promise<CStoreSkipDiscoveryQueueItemResponse>;
  GetUserGameInterestState(
    request: CStoreGetUserGameInterestStateRequest,
  ): Promise<CStoreGetUserGameInterestStateResponse>;
  GetDiscoveryQueueSkippedApps(
    request: CStoreGetDiscoveryQueueSkippedAppsRequest,
  ): Promise<CStoreGetDiscoveryQueueSkippedAppsResponse>;
  GetStorePreferences(request: CStoreGetStorePreferencesRequest): Promise<CStoreGetStorePreferencesResponse>;
  GetTrendingAppsAmongFriends(
    request: CStoreGetTrendingAppsAmongFriendsRequest,
  ): Promise<CStoreGetTrendingAppsAmongFriendsResponse>;
  SetCompatibilityFeedback(
    request: CSteamDeckCompatibilitySetFeedbackRequest,
  ): Promise<CSteamDeckCompatibilitySetFeedbackResponse>;
  ShouldPromptForCompatibilityFeedback(
    request: CSteamDeckCompatibilityShouldPromptRequest,
  ): Promise<CSteamDeckCompatibilityShouldPromptResponse>;
}

export class StoreClientImpl implements Store {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Store";
    this.rpc = rpc;
    this.RegisterCDKey = this.RegisterCDKey.bind(this);
    this.GetMostPopularTags = this.GetMostPopularTags.bind(this);
    this.GetLocalizedNameForTags = this.GetLocalizedNameForTags.bind(this);
    this.GetDiscoveryQueue = this.GetDiscoveryQueue.bind(this);
    this.GetDiscoveryQueueSettings = this.GetDiscoveryQueueSettings.bind(this);
    this.SkipDiscoveryQueueItem = this.SkipDiscoveryQueueItem.bind(this);
    this.GetUserGameInterestState = this.GetUserGameInterestState.bind(this);
    this.GetDiscoveryQueueSkippedApps = this.GetDiscoveryQueueSkippedApps.bind(this);
    this.GetStorePreferences = this.GetStorePreferences.bind(this);
    this.GetTrendingAppsAmongFriends = this.GetTrendingAppsAmongFriends.bind(this);
    this.SetCompatibilityFeedback = this.SetCompatibilityFeedback.bind(this);
    this.ShouldPromptForCompatibilityFeedback = this.ShouldPromptForCompatibilityFeedback.bind(this);
  }
  RegisterCDKey(request: CStoreRegisterCDKeyRequest): Promise<CStoreRegisterCDKeyResponse> {
    const data = CStoreRegisterCDKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterCDKey", data);
    return promise.then((data) => CStoreRegisterCDKeyResponse.decode(new _m0.Reader(data)));
  }

  GetMostPopularTags(request: CStoreGetMostPopularTagsRequest): Promise<CStoreGetMostPopularTagsResponse> {
    const data = CStoreGetMostPopularTagsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMostPopularTags", data);
    return promise.then((data) => CStoreGetMostPopularTagsResponse.decode(new _m0.Reader(data)));
  }

  GetLocalizedNameForTags(
    request: CStoreGetLocalizedNameForTagsRequest,
  ): Promise<CStoreGetLocalizedNameForTagsResponse> {
    const data = CStoreGetLocalizedNameForTagsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLocalizedNameForTags", data);
    return promise.then((data) => CStoreGetLocalizedNameForTagsResponse.decode(new _m0.Reader(data)));
  }

  GetDiscoveryQueue(request: CStoreGetDiscoveryQueueRequest): Promise<CStoreGetDiscoveryQueueResponse> {
    const data = CStoreGetDiscoveryQueueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDiscoveryQueue", data);
    return promise.then((data) => CStoreGetDiscoveryQueueResponse.decode(new _m0.Reader(data)));
  }

  GetDiscoveryQueueSettings(
    request: CStoreGetDiscoveryQueueSettingsRequest,
  ): Promise<CStoreGetDiscoveryQueueSettingsResponse> {
    const data = CStoreGetDiscoveryQueueSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDiscoveryQueueSettings", data);
    return promise.then((data) => CStoreGetDiscoveryQueueSettingsResponse.decode(new _m0.Reader(data)));
  }

  SkipDiscoveryQueueItem(request: CStoreSkipDiscoveryQueueItemRequest): Promise<CStoreSkipDiscoveryQueueItemResponse> {
    const data = CStoreSkipDiscoveryQueueItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SkipDiscoveryQueueItem", data);
    return promise.then((data) => CStoreSkipDiscoveryQueueItemResponse.decode(new _m0.Reader(data)));
  }

  GetUserGameInterestState(
    request: CStoreGetUserGameInterestStateRequest,
  ): Promise<CStoreGetUserGameInterestStateResponse> {
    const data = CStoreGetUserGameInterestStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserGameInterestState", data);
    return promise.then((data) => CStoreGetUserGameInterestStateResponse.decode(new _m0.Reader(data)));
  }

  GetDiscoveryQueueSkippedApps(
    request: CStoreGetDiscoveryQueueSkippedAppsRequest,
  ): Promise<CStoreGetDiscoveryQueueSkippedAppsResponse> {
    const data = CStoreGetDiscoveryQueueSkippedAppsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDiscoveryQueueSkippedApps", data);
    return promise.then((data) => CStoreGetDiscoveryQueueSkippedAppsResponse.decode(new _m0.Reader(data)));
  }

  GetStorePreferences(request: CStoreGetStorePreferencesRequest): Promise<CStoreGetStorePreferencesResponse> {
    const data = CStoreGetStorePreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStorePreferences", data);
    return promise.then((data) => CStoreGetStorePreferencesResponse.decode(new _m0.Reader(data)));
  }

  GetTrendingAppsAmongFriends(
    request: CStoreGetTrendingAppsAmongFriendsRequest,
  ): Promise<CStoreGetTrendingAppsAmongFriendsResponse> {
    const data = CStoreGetTrendingAppsAmongFriendsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTrendingAppsAmongFriends", data);
    return promise.then((data) => CStoreGetTrendingAppsAmongFriendsResponse.decode(new _m0.Reader(data)));
  }

  SetCompatibilityFeedback(
    request: CSteamDeckCompatibilitySetFeedbackRequest,
  ): Promise<CSteamDeckCompatibilitySetFeedbackResponse> {
    const data = CSteamDeckCompatibilitySetFeedbackRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCompatibilityFeedback", data);
    return promise.then((data) => CSteamDeckCompatibilitySetFeedbackResponse.decode(new _m0.Reader(data)));
  }

  ShouldPromptForCompatibilityFeedback(
    request: CSteamDeckCompatibilityShouldPromptRequest,
  ): Promise<CSteamDeckCompatibilityShouldPromptResponse> {
    const data = CSteamDeckCompatibilityShouldPromptRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ShouldPromptForCompatibilityFeedback", data);
    return promise.then((data) => CSteamDeckCompatibilityShouldPromptResponse.decode(new _m0.Reader(data)));
  }
}

export interface StoreClient {
  NotifyStorePreferencesChanged(request: CStoreStorePreferencesChangedNotification): Promise<NoResponse>;
}

export class StoreClientClientImpl implements StoreClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "StoreClient";
    this.rpc = rpc;
    this.NotifyStorePreferencesChanged = this.NotifyStorePreferencesChanged.bind(this);
  }
  NotifyStorePreferencesChanged(request: CStoreStorePreferencesChangedNotification): Promise<NoResponse> {
    const data = CStoreStorePreferencesChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyStorePreferencesChanged", data);
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
