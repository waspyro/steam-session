/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CStorePageFilter } from "./contenthubs";
import {
  ESteamDeckCompatibilityCategory,
  eSteamDeckCompatibilityCategoryFromJSON,
  eSteamDeckCompatibilityCategoryToJSON,
} from "./enums";
import { EContentDescriptorID, eContentDescriptorIDFromJSON, eContentDescriptorIDToJSON } from "./enums_productinfo";

export const protobufPackage = "";

export enum EStoreItemType {
  k_EStoreItemType_Invalid = -1,
  k_EStoreItemType_App = 0,
  k_EStoreItemType_Package = 1,
  k_EStoreItemType_Bundle = 2,
  k_EStoreItemType_Mtx = 3,
  k_EStoreItemType_Tag = 4,
  k_EStoreItemType_Creator = 5,
  UNRECOGNIZED = -1,
}

export function eStoreItemTypeFromJSON(object: any): EStoreItemType {
  switch (object) {
    case -1:
    case "k_EStoreItemType_Invalid":
      return EStoreItemType.k_EStoreItemType_Invalid;
    case 0:
    case "k_EStoreItemType_App":
      return EStoreItemType.k_EStoreItemType_App;
    case 1:
    case "k_EStoreItemType_Package":
      return EStoreItemType.k_EStoreItemType_Package;
    case 2:
    case "k_EStoreItemType_Bundle":
      return EStoreItemType.k_EStoreItemType_Bundle;
    case 3:
    case "k_EStoreItemType_Mtx":
      return EStoreItemType.k_EStoreItemType_Mtx;
    case 4:
    case "k_EStoreItemType_Tag":
      return EStoreItemType.k_EStoreItemType_Tag;
    case 5:
    case "k_EStoreItemType_Creator":
      return EStoreItemType.k_EStoreItemType_Creator;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStoreItemType.UNRECOGNIZED;
  }
}

export function eStoreItemTypeToJSON(object: EStoreItemType): string {
  switch (object) {
    case EStoreItemType.k_EStoreItemType_Invalid:
      return "k_EStoreItemType_Invalid";
    case EStoreItemType.k_EStoreItemType_App:
      return "k_EStoreItemType_App";
    case EStoreItemType.k_EStoreItemType_Package:
      return "k_EStoreItemType_Package";
    case EStoreItemType.k_EStoreItemType_Bundle:
      return "k_EStoreItemType_Bundle";
    case EStoreItemType.k_EStoreItemType_Mtx:
      return "k_EStoreItemType_Mtx";
    case EStoreItemType.k_EStoreItemType_Tag:
      return "k_EStoreItemType_Tag";
    case EStoreItemType.k_EStoreItemType_Creator:
      return "k_EStoreItemType_Creator";
    case EStoreItemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStoreAppType {
  k_EStoreAppType_Game = 0,
  k_EStoreAppType_Demo = 1,
  k_EStoreAppType_Mod = 2,
  k_EStoreAppType_Movie = 3,
  k_EStoreAppType_DLC = 4,
  k_EStoreAppType_Guide = 5,
  k_EStoreAppType_Software = 6,
  k_EStoreAppType_Video = 7,
  k_EStoreAppType_Series = 8,
  k_EStoreAppType_Episode = 9,
  k_EStoreAppType_Hardware = 10,
  k_EStoreAppType_Music = 11,
  k_EStoreAppType_Beta = 12,
  k_EStoreAppType_Tool = 13,
  k_EStoreAppType_Advertising = 14,
  UNRECOGNIZED = -1,
}

export function eStoreAppTypeFromJSON(object: any): EStoreAppType {
  switch (object) {
    case 0:
    case "k_EStoreAppType_Game":
      return EStoreAppType.k_EStoreAppType_Game;
    case 1:
    case "k_EStoreAppType_Demo":
      return EStoreAppType.k_EStoreAppType_Demo;
    case 2:
    case "k_EStoreAppType_Mod":
      return EStoreAppType.k_EStoreAppType_Mod;
    case 3:
    case "k_EStoreAppType_Movie":
      return EStoreAppType.k_EStoreAppType_Movie;
    case 4:
    case "k_EStoreAppType_DLC":
      return EStoreAppType.k_EStoreAppType_DLC;
    case 5:
    case "k_EStoreAppType_Guide":
      return EStoreAppType.k_EStoreAppType_Guide;
    case 6:
    case "k_EStoreAppType_Software":
      return EStoreAppType.k_EStoreAppType_Software;
    case 7:
    case "k_EStoreAppType_Video":
      return EStoreAppType.k_EStoreAppType_Video;
    case 8:
    case "k_EStoreAppType_Series":
      return EStoreAppType.k_EStoreAppType_Series;
    case 9:
    case "k_EStoreAppType_Episode":
      return EStoreAppType.k_EStoreAppType_Episode;
    case 10:
    case "k_EStoreAppType_Hardware":
      return EStoreAppType.k_EStoreAppType_Hardware;
    case 11:
    case "k_EStoreAppType_Music":
      return EStoreAppType.k_EStoreAppType_Music;
    case 12:
    case "k_EStoreAppType_Beta":
      return EStoreAppType.k_EStoreAppType_Beta;
    case 13:
    case "k_EStoreAppType_Tool":
      return EStoreAppType.k_EStoreAppType_Tool;
    case 14:
    case "k_EStoreAppType_Advertising":
      return EStoreAppType.k_EStoreAppType_Advertising;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStoreAppType.UNRECOGNIZED;
  }
}

export function eStoreAppTypeToJSON(object: EStoreAppType): string {
  switch (object) {
    case EStoreAppType.k_EStoreAppType_Game:
      return "k_EStoreAppType_Game";
    case EStoreAppType.k_EStoreAppType_Demo:
      return "k_EStoreAppType_Demo";
    case EStoreAppType.k_EStoreAppType_Mod:
      return "k_EStoreAppType_Mod";
    case EStoreAppType.k_EStoreAppType_Movie:
      return "k_EStoreAppType_Movie";
    case EStoreAppType.k_EStoreAppType_DLC:
      return "k_EStoreAppType_DLC";
    case EStoreAppType.k_EStoreAppType_Guide:
      return "k_EStoreAppType_Guide";
    case EStoreAppType.k_EStoreAppType_Software:
      return "k_EStoreAppType_Software";
    case EStoreAppType.k_EStoreAppType_Video:
      return "k_EStoreAppType_Video";
    case EStoreAppType.k_EStoreAppType_Series:
      return "k_EStoreAppType_Series";
    case EStoreAppType.k_EStoreAppType_Episode:
      return "k_EStoreAppType_Episode";
    case EStoreAppType.k_EStoreAppType_Hardware:
      return "k_EStoreAppType_Hardware";
    case EStoreAppType.k_EStoreAppType_Music:
      return "k_EStoreAppType_Music";
    case EStoreAppType.k_EStoreAppType_Beta:
      return "k_EStoreAppType_Beta";
    case EStoreAppType.k_EStoreAppType_Tool:
      return "k_EStoreAppType_Tool";
    case EStoreAppType.k_EStoreAppType_Advertising:
      return "k_EStoreAppType_Advertising";
    case EStoreAppType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EUserReviewScore {
  k_EUserReviewScore_None = 0,
  k_EUserReviewScore_OverwhelminglyNegative = 1,
  k_EUserReviewScore_VeryNegative = 2,
  k_EUserReviewScore_Negative = 3,
  k_EUserReviewScore_MostlyNegative = 4,
  k_EUserReviewScore_Mixed = 5,
  k_EUserReviewScore_MostlyPositive = 6,
  k_EUserReviewScore_Positive = 7,
  k_EUserReviewScore_VeryPositive = 8,
  k_EUserReviewScore_OverwhelminglyPositive = 9,
  UNRECOGNIZED = -1,
}

export function eUserReviewScoreFromJSON(object: any): EUserReviewScore {
  switch (object) {
    case 0:
    case "k_EUserReviewScore_None":
      return EUserReviewScore.k_EUserReviewScore_None;
    case 1:
    case "k_EUserReviewScore_OverwhelminglyNegative":
      return EUserReviewScore.k_EUserReviewScore_OverwhelminglyNegative;
    case 2:
    case "k_EUserReviewScore_VeryNegative":
      return EUserReviewScore.k_EUserReviewScore_VeryNegative;
    case 3:
    case "k_EUserReviewScore_Negative":
      return EUserReviewScore.k_EUserReviewScore_Negative;
    case 4:
    case "k_EUserReviewScore_MostlyNegative":
      return EUserReviewScore.k_EUserReviewScore_MostlyNegative;
    case 5:
    case "k_EUserReviewScore_Mixed":
      return EUserReviewScore.k_EUserReviewScore_Mixed;
    case 6:
    case "k_EUserReviewScore_MostlyPositive":
      return EUserReviewScore.k_EUserReviewScore_MostlyPositive;
    case 7:
    case "k_EUserReviewScore_Positive":
      return EUserReviewScore.k_EUserReviewScore_Positive;
    case 8:
    case "k_EUserReviewScore_VeryPositive":
      return EUserReviewScore.k_EUserReviewScore_VeryPositive;
    case 9:
    case "k_EUserReviewScore_OverwhelminglyPositive":
      return EUserReviewScore.k_EUserReviewScore_OverwhelminglyPositive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EUserReviewScore.UNRECOGNIZED;
  }
}

export function eUserReviewScoreToJSON(object: EUserReviewScore): string {
  switch (object) {
    case EUserReviewScore.k_EUserReviewScore_None:
      return "k_EUserReviewScore_None";
    case EUserReviewScore.k_EUserReviewScore_OverwhelminglyNegative:
      return "k_EUserReviewScore_OverwhelminglyNegative";
    case EUserReviewScore.k_EUserReviewScore_VeryNegative:
      return "k_EUserReviewScore_VeryNegative";
    case EUserReviewScore.k_EUserReviewScore_Negative:
      return "k_EUserReviewScore_Negative";
    case EUserReviewScore.k_EUserReviewScore_MostlyNegative:
      return "k_EUserReviewScore_MostlyNegative";
    case EUserReviewScore.k_EUserReviewScore_Mixed:
      return "k_EUserReviewScore_Mixed";
    case EUserReviewScore.k_EUserReviewScore_MostlyPositive:
      return "k_EUserReviewScore_MostlyPositive";
    case EUserReviewScore.k_EUserReviewScore_Positive:
      return "k_EUserReviewScore_Positive";
    case EUserReviewScore.k_EUserReviewScore_VeryPositive:
      return "k_EUserReviewScore_VeryPositive";
    case EUserReviewScore.k_EUserReviewScore_OverwhelminglyPositive:
      return "k_EUserReviewScore_OverwhelminglyPositive";
    case EUserReviewScore.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStoreCategoryType {
  k_EStoreCategoryType_Category = 0,
  k_EStoreCategoryType_SupportedPlayers = 1,
  k_EStoreCategoryType_Feature = 2,
  k_EStoreCategoryType_ControllerSupport = 3,
  k_EStoreCategoryType_CloudGaming = 4,
  k_EStoreCategoryType_MAX = 5,
  UNRECOGNIZED = -1,
}

export function eStoreCategoryTypeFromJSON(object: any): EStoreCategoryType {
  switch (object) {
    case 0:
    case "k_EStoreCategoryType_Category":
      return EStoreCategoryType.k_EStoreCategoryType_Category;
    case 1:
    case "k_EStoreCategoryType_SupportedPlayers":
      return EStoreCategoryType.k_EStoreCategoryType_SupportedPlayers;
    case 2:
    case "k_EStoreCategoryType_Feature":
      return EStoreCategoryType.k_EStoreCategoryType_Feature;
    case 3:
    case "k_EStoreCategoryType_ControllerSupport":
      return EStoreCategoryType.k_EStoreCategoryType_ControllerSupport;
    case 4:
    case "k_EStoreCategoryType_CloudGaming":
      return EStoreCategoryType.k_EStoreCategoryType_CloudGaming;
    case 5:
    case "k_EStoreCategoryType_MAX":
      return EStoreCategoryType.k_EStoreCategoryType_MAX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStoreCategoryType.UNRECOGNIZED;
  }
}

export function eStoreCategoryTypeToJSON(object: EStoreCategoryType): string {
  switch (object) {
    case EStoreCategoryType.k_EStoreCategoryType_Category:
      return "k_EStoreCategoryType_Category";
    case EStoreCategoryType.k_EStoreCategoryType_SupportedPlayers:
      return "k_EStoreCategoryType_SupportedPlayers";
    case EStoreCategoryType.k_EStoreCategoryType_Feature:
      return "k_EStoreCategoryType_Feature";
    case EStoreCategoryType.k_EStoreCategoryType_ControllerSupport:
      return "k_EStoreCategoryType_ControllerSupport";
    case EStoreCategoryType.k_EStoreCategoryType_CloudGaming:
      return "k_EStoreCategoryType_CloudGaming";
    case EStoreCategoryType.k_EStoreCategoryType_MAX:
      return "k_EStoreCategoryType_MAX";
    case EStoreCategoryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StoreItemID {
  appid: number;
  packageid: number;
  bundleid: number;
  tagid: number;
  creatorid: number;
}

export interface StoreBrowseContext {
  language: string;
  elanguage: number;
  countryCode: string;
  steamRealm: number;
}

export interface StoreBrowseItemDataRequest {
  includeAssets: boolean;
  includeRelease: boolean;
  includePlatforms: boolean;
  includeAllPurchaseOptions: boolean;
  includeScreenshots: boolean;
  includeTrailers: boolean;
  includeRatings: boolean;
  includeTagCount: number;
  includeReviews: boolean;
  includeBasicInfo: boolean;
  includeSupportedLanguages: boolean;
}

export interface CStoreBrowseGetItemsRequest {
  ids: StoreItemID[];
  context: StoreBrowseContext | undefined;
  dataRequest: StoreBrowseItemDataRequest | undefined;
}

export interface StoreGameRating {
  type: string;
  rating: string;
  descriptors: string[];
  interactiveElements: string;
  requiredAge: number;
  useAgeGate: boolean;
  imageUrl: string;
  imageTarget: string;
}

export interface StoreItem {
  itemType: EStoreItemType;
  id: number;
  success: number;
  visible: boolean;
  unvailableForCountryRestriction: boolean;
  name: string;
  storeUrlPath: string;
  appid: number;
  type: EStoreAppType;
  includedTypes: EStoreAppType[];
  includedAppids: number[];
  isFree: boolean;
  isEarlyAccess: boolean;
  relatedItems: StoreItem_RelatedItems | undefined;
  contentDescriptorids: EContentDescriptorID[];
  tagids: number[];
  categories: StoreItem_Categories | undefined;
  reviews: StoreItem_Reviews | undefined;
  basicInfo: StoreItem_BasicInfo | undefined;
  tags: StoreItem_Tag[];
  assets: StoreItem_Assets | undefined;
  release: StoreItem_ReleaseInfo | undefined;
  platforms: StoreItem_Platforms | undefined;
  gameRating: StoreGameRating | undefined;
  bestPurchaseOption: StoreItem_PurchaseOption | undefined;
  purchaseOptions: StoreItem_PurchaseOption[];
  accessories: StoreItem_PurchaseOption[];
  screenshots: StoreItem_Screenshots | undefined;
  trailers: StoreItem_Trailers | undefined;
  supportedLanguages: StoreItem_SupportedLanguage[];
  storeUrlPathOverride: string;
  freeWeekend: StoreItem_FreeWeekend | undefined;
  unlisted: boolean;
  gameCount: number;
}

export interface StoreItem_RelatedItems {
  parentAppid: number;
}

export interface StoreItem_Categories {
  supportedPlayerCategoryids: number[];
  featureCategoryids: number[];
  controllerCategoryids: number[];
}

export interface StoreItem_Reviews {
  summaryFiltered: StoreItem_Reviews_StoreReviewSummary | undefined;
  summaryUnfiltered: StoreItem_Reviews_StoreReviewSummary | undefined;
}

export interface StoreItem_Reviews_StoreReviewSummary {
  reviewCount: number;
  percentPositive: number;
  reviewScore: EUserReviewScore;
  reviewScoreLabel: string;
}

export interface StoreItem_BasicInfo {
  shortDescription: string;
  publishers: StoreItem_BasicInfo_CreatorHomeLink[];
  developers: StoreItem_BasicInfo_CreatorHomeLink[];
  franchises: StoreItem_BasicInfo_CreatorHomeLink[];
  capsuleHeadline: string;
}

export interface StoreItem_BasicInfo_CreatorHomeLink {
  name: string;
  creatorClanAccountId: number;
}

export interface StoreItem_Tag {
  tagid: number;
  weight: number;
}

export interface StoreItem_Assets {
  assetUrlFormat: string;
  mainCapsule: string;
  smallCapsule: string;
  header: string;
  packageHeader: string;
  pageBackground: string;
  heroCapsule: string;
  heroCapsule2x: string;
  libraryCapsule: string;
  libraryCapsule2x: string;
  libraryHero: string;
  libraryHero2x: string;
  communityIcon: string;
  clanAvatar: string;
}

export interface StoreItem_ReleaseInfo {
  steamReleaseDate: number;
  originalReleaseDate: number;
  originalSteamReleaseDate: number;
  isComingSoon: boolean;
  isPreload: boolean;
  customReleaseDateMessage: string;
  isAbridgedReleaseDate: boolean;
  comingSoonDisplay: string;
  isEarlyAccess: boolean;
  macReleaseDate: number;
  linuxReleaseDate: number;
}

export interface StoreItem_Platforms {
  windows: boolean;
  mac: boolean;
  steamosLinux: boolean;
  vrSupport: StoreItem_Platforms_VRSupport | undefined;
  steamDeckCompatCategory: ESteamDeckCompatibilityCategory;
}

export interface StoreItem_Platforms_VRSupport {
  vrhmd: boolean;
  vrhmdOnly: boolean;
  htcVive: boolean;
  oculusRift: boolean;
  windowsMr: boolean;
  valveIndex: boolean;
}

export interface StoreItem_PurchaseOption {
  packageid: number;
  bundleid: number;
  purchaseOptionName: string;
  finalPriceInCents: string;
  originalPriceInCents: string;
  userFinalPriceInCents: string;
  formattedFinalPrice: string;
  formattedOriginalPrice: string;
  discountPct: number;
  userDiscountPct: number;
  bundleDiscountPct: number;
  activeDiscounts: StoreItem_PurchaseOption_Discount[];
  userActiveDiscounts: StoreItem_PurchaseOption_Discount[];
  inactiveDiscounts: StoreItem_PurchaseOption_Discount[];
  userCanPurchase: boolean;
  userCanPurchaseAsGift: boolean;
  isCommercialLicense: boolean;
  shouldSuppressDiscountPct: boolean;
}

export interface StoreItem_PurchaseOption_Discount {
  discountAmount: string;
  discountDescription: string;
  discountEndDate: number;
}

export interface StoreItem_Screenshots {
  allAgesScreenshots: StoreItem_Screenshots_Screenshot[];
  matureContentScreenshots: StoreItem_Screenshots_Screenshot[];
}

export interface StoreItem_Screenshots_Screenshot {
  filename: string;
  ordinal: number;
}

export interface StoreItem_Trailers {
  highlights: StoreItem_Trailers_Trailer[];
  otherTrailers: StoreItem_Trailers_Trailer[];
}

export interface StoreItem_Trailers_VideoSource {
  filename: string;
  type: string;
}

export interface StoreItem_Trailers_Trailer {
  trailerName: string;
  trailerUrlFormat: string;
  trailer480p: StoreItem_Trailers_VideoSource[];
  trailerMax: StoreItem_Trailers_VideoSource[];
  microtrailer: StoreItem_Trailers_VideoSource[];
  screenshotMedium: string;
  screenshotFull: string;
  trailerBaseId: number;
}

export interface StoreItem_SupportedLanguage {
  elanguage: number;
  supported: boolean;
  fullAudio: boolean;
  subtitles: boolean;
}

export interface StoreItem_FreeWeekend {
  startTime: number;
  endTime: number;
  text: string;
}

export interface CStoreBrowseGetItemsResponse {
  storeItems: StoreItem[];
}

export interface CStoreBrowseGetStoreCategoriesRequest {
  language: string;
  elanguage: number;
}

export interface CStoreBrowseGetStoreCategoriesResponse {
  categories: CStoreBrowseGetStoreCategoriesResponse_Category[];
}

export interface CStoreBrowseGetStoreCategoriesResponse_Category {
  categoryid: number;
  type: EStoreCategoryType;
  internalName: string;
  displayName: string;
  imageUrl: string;
  showInSearch: boolean;
}

export interface CStoreBrowseGetDLCForAppsRequest {
  context: StoreBrowseContext | undefined;
  storePageFilter: CStorePageFilter | undefined;
  appids: StoreItemID[];
  steamid: string;
}

export interface CStoreBrowseGetDLCForAppsResponse {
  dlcData: CStoreBrowseGetDLCForAppsResponse_DLCData[];
  playtime: CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp[];
}

export interface CStoreBrowseGetDLCForAppsResponse_DLCData {
  appid: number;
  parentappid: number;
  releaseDate: number;
  comingSoon: boolean;
  price: string;
  discount: number;
  free: boolean;
}

export interface CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
  appid: number;
  playtime: number;
  lastPlayed: number;
}

export interface CStoreBrowseGetDLCForAppsSolrRequest {
  context: StoreBrowseContext | undefined;
  appids: number[];
  flavor: string;
  count: number;
  storePageFilter: CStorePageFilter | undefined;
}

export interface CStoreBrowseGetDLCForAppsSolrResponse {
  dlcLists: CStoreBrowseGetDLCForAppsSolrResponse_DLCList[];
}

export interface CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
  parentAppid: number;
  dlcAppids: number[];
}

function createBaseStoreItemID(): StoreItemID {
  return { appid: 0, packageid: 0, bundleid: 0, tagid: 0, creatorid: 0 };
}

export const StoreItemID = {
  encode(message: StoreItemID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.packageid !== 0) {
      writer.uint32(16).uint32(message.packageid);
    }
    if (message.bundleid !== 0) {
      writer.uint32(24).uint32(message.bundleid);
    }
    if (message.tagid !== 0) {
      writer.uint32(32).uint32(message.tagid);
    }
    if (message.creatorid !== 0) {
      writer.uint32(40).uint32(message.creatorid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItemID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItemID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.packageid = reader.uint32();
          break;
        case 3:
          message.bundleid = reader.uint32();
          break;
        case 4:
          message.tagid = reader.uint32();
          break;
        case 5:
          message.creatorid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItemID {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      bundleid: isSet(object.bundleid) ? Number(object.bundleid) : 0,
      tagid: isSet(object.tagid) ? Number(object.tagid) : 0,
      creatorid: isSet(object.creatorid) ? Number(object.creatorid) : 0,
    };
  },

  toJSON(message: StoreItemID): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.bundleid !== undefined && (obj.bundleid = Math.round(message.bundleid));
    message.tagid !== undefined && (obj.tagid = Math.round(message.tagid));
    message.creatorid !== undefined && (obj.creatorid = Math.round(message.creatorid));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItemID>, I>>(base?: I): StoreItemID {
    return StoreItemID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItemID>, I>>(object: I): StoreItemID {
    const message = createBaseStoreItemID();
    message.appid = object.appid ?? 0;
    message.packageid = object.packageid ?? 0;
    message.bundleid = object.bundleid ?? 0;
    message.tagid = object.tagid ?? 0;
    message.creatorid = object.creatorid ?? 0;
    return message;
  },
};

function createBaseStoreBrowseContext(): StoreBrowseContext {
  return { language: "", elanguage: 0, countryCode: "", steamRealm: 0 };
}

export const StoreBrowseContext = {
  encode(message: StoreBrowseContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    if (message.elanguage !== 0) {
      writer.uint32(16).int32(message.elanguage);
    }
    if (message.countryCode !== "") {
      writer.uint32(26).string(message.countryCode);
    }
    if (message.steamRealm !== 0) {
      writer.uint32(32).int32(message.steamRealm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreBrowseContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreBrowseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        case 2:
          message.elanguage = reader.int32();
          break;
        case 3:
          message.countryCode = reader.string();
          break;
        case 4:
          message.steamRealm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreBrowseContext {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      elanguage: isSet(object.elanguage) ? Number(object.elanguage) : 0,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      steamRealm: isSet(object.steamRealm) ? Number(object.steamRealm) : 0,
    };
  },

  toJSON(message: StoreBrowseContext): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    message.elanguage !== undefined && (obj.elanguage = Math.round(message.elanguage));
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.steamRealm !== undefined && (obj.steamRealm = Math.round(message.steamRealm));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreBrowseContext>, I>>(base?: I): StoreBrowseContext {
    return StoreBrowseContext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreBrowseContext>, I>>(object: I): StoreBrowseContext {
    const message = createBaseStoreBrowseContext();
    message.language = object.language ?? "";
    message.elanguage = object.elanguage ?? 0;
    message.countryCode = object.countryCode ?? "";
    message.steamRealm = object.steamRealm ?? 0;
    return message;
  },
};

function createBaseStoreBrowseItemDataRequest(): StoreBrowseItemDataRequest {
  return {
    includeAssets: false,
    includeRelease: false,
    includePlatforms: false,
    includeAllPurchaseOptions: false,
    includeScreenshots: false,
    includeTrailers: false,
    includeRatings: false,
    includeTagCount: 0,
    includeReviews: false,
    includeBasicInfo: false,
    includeSupportedLanguages: false,
  };
}

export const StoreBrowseItemDataRequest = {
  encode(message: StoreBrowseItemDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includeAssets === true) {
      writer.uint32(8).bool(message.includeAssets);
    }
    if (message.includeRelease === true) {
      writer.uint32(16).bool(message.includeRelease);
    }
    if (message.includePlatforms === true) {
      writer.uint32(24).bool(message.includePlatforms);
    }
    if (message.includeAllPurchaseOptions === true) {
      writer.uint32(32).bool(message.includeAllPurchaseOptions);
    }
    if (message.includeScreenshots === true) {
      writer.uint32(40).bool(message.includeScreenshots);
    }
    if (message.includeTrailers === true) {
      writer.uint32(48).bool(message.includeTrailers);
    }
    if (message.includeRatings === true) {
      writer.uint32(56).bool(message.includeRatings);
    }
    if (message.includeTagCount !== 0) {
      writer.uint32(64).int32(message.includeTagCount);
    }
    if (message.includeReviews === true) {
      writer.uint32(72).bool(message.includeReviews);
    }
    if (message.includeBasicInfo === true) {
      writer.uint32(80).bool(message.includeBasicInfo);
    }
    if (message.includeSupportedLanguages === true) {
      writer.uint32(88).bool(message.includeSupportedLanguages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreBrowseItemDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreBrowseItemDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeAssets = reader.bool();
          break;
        case 2:
          message.includeRelease = reader.bool();
          break;
        case 3:
          message.includePlatforms = reader.bool();
          break;
        case 4:
          message.includeAllPurchaseOptions = reader.bool();
          break;
        case 5:
          message.includeScreenshots = reader.bool();
          break;
        case 6:
          message.includeTrailers = reader.bool();
          break;
        case 7:
          message.includeRatings = reader.bool();
          break;
        case 8:
          message.includeTagCount = reader.int32();
          break;
        case 9:
          message.includeReviews = reader.bool();
          break;
        case 10:
          message.includeBasicInfo = reader.bool();
          break;
        case 11:
          message.includeSupportedLanguages = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreBrowseItemDataRequest {
    return {
      includeAssets: isSet(object.includeAssets) ? Boolean(object.includeAssets) : false,
      includeRelease: isSet(object.includeRelease) ? Boolean(object.includeRelease) : false,
      includePlatforms: isSet(object.includePlatforms) ? Boolean(object.includePlatforms) : false,
      includeAllPurchaseOptions: isSet(object.includeAllPurchaseOptions)
        ? Boolean(object.includeAllPurchaseOptions)
        : false,
      includeScreenshots: isSet(object.includeScreenshots) ? Boolean(object.includeScreenshots) : false,
      includeTrailers: isSet(object.includeTrailers) ? Boolean(object.includeTrailers) : false,
      includeRatings: isSet(object.includeRatings) ? Boolean(object.includeRatings) : false,
      includeTagCount: isSet(object.includeTagCount) ? Number(object.includeTagCount) : 0,
      includeReviews: isSet(object.includeReviews) ? Boolean(object.includeReviews) : false,
      includeBasicInfo: isSet(object.includeBasicInfo) ? Boolean(object.includeBasicInfo) : false,
      includeSupportedLanguages: isSet(object.includeSupportedLanguages)
        ? Boolean(object.includeSupportedLanguages)
        : false,
    };
  },

  toJSON(message: StoreBrowseItemDataRequest): unknown {
    const obj: any = {};
    message.includeAssets !== undefined && (obj.includeAssets = message.includeAssets);
    message.includeRelease !== undefined && (obj.includeRelease = message.includeRelease);
    message.includePlatforms !== undefined && (obj.includePlatforms = message.includePlatforms);
    message.includeAllPurchaseOptions !== undefined &&
      (obj.includeAllPurchaseOptions = message.includeAllPurchaseOptions);
    message.includeScreenshots !== undefined && (obj.includeScreenshots = message.includeScreenshots);
    message.includeTrailers !== undefined && (obj.includeTrailers = message.includeTrailers);
    message.includeRatings !== undefined && (obj.includeRatings = message.includeRatings);
    message.includeTagCount !== undefined && (obj.includeTagCount = Math.round(message.includeTagCount));
    message.includeReviews !== undefined && (obj.includeReviews = message.includeReviews);
    message.includeBasicInfo !== undefined && (obj.includeBasicInfo = message.includeBasicInfo);
    message.includeSupportedLanguages !== undefined &&
      (obj.includeSupportedLanguages = message.includeSupportedLanguages);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreBrowseItemDataRequest>, I>>(base?: I): StoreBrowseItemDataRequest {
    return StoreBrowseItemDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreBrowseItemDataRequest>, I>>(object: I): StoreBrowseItemDataRequest {
    const message = createBaseStoreBrowseItemDataRequest();
    message.includeAssets = object.includeAssets ?? false;
    message.includeRelease = object.includeRelease ?? false;
    message.includePlatforms = object.includePlatforms ?? false;
    message.includeAllPurchaseOptions = object.includeAllPurchaseOptions ?? false;
    message.includeScreenshots = object.includeScreenshots ?? false;
    message.includeTrailers = object.includeTrailers ?? false;
    message.includeRatings = object.includeRatings ?? false;
    message.includeTagCount = object.includeTagCount ?? 0;
    message.includeReviews = object.includeReviews ?? false;
    message.includeBasicInfo = object.includeBasicInfo ?? false;
    message.includeSupportedLanguages = object.includeSupportedLanguages ?? false;
    return message;
  },
};

function createBaseCStoreBrowseGetItemsRequest(): CStoreBrowseGetItemsRequest {
  return { ids: [], context: undefined, dataRequest: undefined };
}

export const CStoreBrowseGetItemsRequest = {
  encode(message: CStoreBrowseGetItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      StoreItemID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.context !== undefined) {
      StoreBrowseContext.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataRequest !== undefined) {
      StoreBrowseItemDataRequest.encode(message.dataRequest, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(StoreItemID.decode(reader, reader.uint32()));
          break;
        case 2:
          message.context = StoreBrowseContext.decode(reader, reader.uint32());
          break;
        case 3:
          message.dataRequest = StoreBrowseItemDataRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetItemsRequest {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => StoreItemID.fromJSON(e)) : [],
      context: isSet(object.context) ? StoreBrowseContext.fromJSON(object.context) : undefined,
      dataRequest: isSet(object.dataRequest) ? StoreBrowseItemDataRequest.fromJSON(object.dataRequest) : undefined,
    };
  },

  toJSON(message: CStoreBrowseGetItemsRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e ? StoreItemID.toJSON(e) : undefined);
    } else {
      obj.ids = [];
    }
    message.context !== undefined &&
      (obj.context = message.context ? StoreBrowseContext.toJSON(message.context) : undefined);
    message.dataRequest !== undefined &&
      (obj.dataRequest = message.dataRequest ? StoreBrowseItemDataRequest.toJSON(message.dataRequest) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetItemsRequest>, I>>(base?: I): CStoreBrowseGetItemsRequest {
    return CStoreBrowseGetItemsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetItemsRequest>, I>>(object: I): CStoreBrowseGetItemsRequest {
    const message = createBaseCStoreBrowseGetItemsRequest();
    message.ids = object.ids?.map((e) => StoreItemID.fromPartial(e)) || [];
    message.context = (object.context !== undefined && object.context !== null)
      ? StoreBrowseContext.fromPartial(object.context)
      : undefined;
    message.dataRequest = (object.dataRequest !== undefined && object.dataRequest !== null)
      ? StoreBrowseItemDataRequest.fromPartial(object.dataRequest)
      : undefined;
    return message;
  },
};

function createBaseStoreGameRating(): StoreGameRating {
  return {
    type: "",
    rating: "",
    descriptors: [],
    interactiveElements: "",
    requiredAge: 0,
    useAgeGate: false,
    imageUrl: "",
    imageTarget: "",
  };
}

export const StoreGameRating = {
  encode(message: StoreGameRating, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.rating !== "") {
      writer.uint32(18).string(message.rating);
    }
    for (const v of message.descriptors) {
      writer.uint32(26).string(v!);
    }
    if (message.interactiveElements !== "") {
      writer.uint32(34).string(message.interactiveElements);
    }
    if (message.requiredAge !== 0) {
      writer.uint32(80).int32(message.requiredAge);
    }
    if (message.useAgeGate === true) {
      writer.uint32(88).bool(message.useAgeGate);
    }
    if (message.imageUrl !== "") {
      writer.uint32(162).string(message.imageUrl);
    }
    if (message.imageTarget !== "") {
      writer.uint32(170).string(message.imageTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreGameRating {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreGameRating();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.rating = reader.string();
          break;
        case 3:
          message.descriptors.push(reader.string());
          break;
        case 4:
          message.interactiveElements = reader.string();
          break;
        case 10:
          message.requiredAge = reader.int32();
          break;
        case 11:
          message.useAgeGate = reader.bool();
          break;
        case 20:
          message.imageUrl = reader.string();
          break;
        case 21:
          message.imageTarget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreGameRating {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      rating: isSet(object.rating) ? String(object.rating) : "",
      descriptors: Array.isArray(object?.descriptors) ? object.descriptors.map((e: any) => String(e)) : [],
      interactiveElements: isSet(object.interactiveElements) ? String(object.interactiveElements) : "",
      requiredAge: isSet(object.requiredAge) ? Number(object.requiredAge) : 0,
      useAgeGate: isSet(object.useAgeGate) ? Boolean(object.useAgeGate) : false,
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      imageTarget: isSet(object.imageTarget) ? String(object.imageTarget) : "",
    };
  },

  toJSON(message: StoreGameRating): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.rating !== undefined && (obj.rating = message.rating);
    if (message.descriptors) {
      obj.descriptors = message.descriptors.map((e) => e);
    } else {
      obj.descriptors = [];
    }
    message.interactiveElements !== undefined && (obj.interactiveElements = message.interactiveElements);
    message.requiredAge !== undefined && (obj.requiredAge = Math.round(message.requiredAge));
    message.useAgeGate !== undefined && (obj.useAgeGate = message.useAgeGate);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.imageTarget !== undefined && (obj.imageTarget = message.imageTarget);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreGameRating>, I>>(base?: I): StoreGameRating {
    return StoreGameRating.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreGameRating>, I>>(object: I): StoreGameRating {
    const message = createBaseStoreGameRating();
    message.type = object.type ?? "";
    message.rating = object.rating ?? "";
    message.descriptors = object.descriptors?.map((e) => e) || [];
    message.interactiveElements = object.interactiveElements ?? "";
    message.requiredAge = object.requiredAge ?? 0;
    message.useAgeGate = object.useAgeGate ?? false;
    message.imageUrl = object.imageUrl ?? "";
    message.imageTarget = object.imageTarget ?? "";
    return message;
  },
};

function createBaseStoreItem(): StoreItem {
  return {
    itemType: 0,
    id: 0,
    success: 0,
    visible: false,
    unvailableForCountryRestriction: false,
    name: "",
    storeUrlPath: "",
    appid: 0,
    type: 0,
    includedTypes: [],
    includedAppids: [],
    isFree: false,
    isEarlyAccess: false,
    relatedItems: undefined,
    contentDescriptorids: [],
    tagids: [],
    categories: undefined,
    reviews: undefined,
    basicInfo: undefined,
    tags: [],
    assets: undefined,
    release: undefined,
    platforms: undefined,
    gameRating: undefined,
    bestPurchaseOption: undefined,
    purchaseOptions: [],
    accessories: [],
    screenshots: undefined,
    trailers: undefined,
    supportedLanguages: [],
    storeUrlPathOverride: "",
    freeWeekend: undefined,
    unlisted: false,
    gameCount: 0,
  };
}

export const StoreItem = {
  encode(message: StoreItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemType !== 0) {
      writer.uint32(8).int32(message.itemType);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.success !== 0) {
      writer.uint32(24).uint32(message.success);
    }
    if (message.visible === true) {
      writer.uint32(32).bool(message.visible);
    }
    if (message.unvailableForCountryRestriction === true) {
      writer.uint32(40).bool(message.unvailableForCountryRestriction);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.storeUrlPath !== "") {
      writer.uint32(58).string(message.storeUrlPath);
    }
    if (message.appid !== 0) {
      writer.uint32(72).uint32(message.appid);
    }
    if (message.type !== 0) {
      writer.uint32(80).int32(message.type);
    }
    writer.uint32(90).fork();
    for (const v of message.includedTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(98).fork();
    for (const v of message.includedAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.isFree === true) {
      writer.uint32(104).bool(message.isFree);
    }
    if (message.isEarlyAccess === true) {
      writer.uint32(112).bool(message.isEarlyAccess);
    }
    if (message.relatedItems !== undefined) {
      StoreItem_RelatedItems.encode(message.relatedItems, writer.uint32(122).fork()).ldelim();
    }
    writer.uint32(162).fork();
    for (const v of message.contentDescriptorids) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(170).fork();
    for (const v of message.tagids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.categories !== undefined) {
      StoreItem_Categories.encode(message.categories, writer.uint32(178).fork()).ldelim();
    }
    if (message.reviews !== undefined) {
      StoreItem_Reviews.encode(message.reviews, writer.uint32(186).fork()).ldelim();
    }
    if (message.basicInfo !== undefined) {
      StoreItem_BasicInfo.encode(message.basicInfo, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.tags) {
      StoreItem_Tag.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.assets !== undefined) {
      StoreItem_Assets.encode(message.assets, writer.uint32(242).fork()).ldelim();
    }
    if (message.release !== undefined) {
      StoreItem_ReleaseInfo.encode(message.release, writer.uint32(250).fork()).ldelim();
    }
    if (message.platforms !== undefined) {
      StoreItem_Platforms.encode(message.platforms, writer.uint32(258).fork()).ldelim();
    }
    if (message.gameRating !== undefined) {
      StoreGameRating.encode(message.gameRating, writer.uint32(266).fork()).ldelim();
    }
    if (message.bestPurchaseOption !== undefined) {
      StoreItem_PurchaseOption.encode(message.bestPurchaseOption, writer.uint32(322).fork()).ldelim();
    }
    for (const v of message.purchaseOptions) {
      StoreItem_PurchaseOption.encode(v!, writer.uint32(330).fork()).ldelim();
    }
    for (const v of message.accessories) {
      StoreItem_PurchaseOption.encode(v!, writer.uint32(338).fork()).ldelim();
    }
    if (message.screenshots !== undefined) {
      StoreItem_Screenshots.encode(message.screenshots, writer.uint32(402).fork()).ldelim();
    }
    if (message.trailers !== undefined) {
      StoreItem_Trailers.encode(message.trailers, writer.uint32(410).fork()).ldelim();
    }
    for (const v of message.supportedLanguages) {
      StoreItem_SupportedLanguage.encode(v!, writer.uint32(418).fork()).ldelim();
    }
    if (message.storeUrlPathOverride !== "") {
      writer.uint32(426).string(message.storeUrlPathOverride);
    }
    if (message.freeWeekend !== undefined) {
      StoreItem_FreeWeekend.encode(message.freeWeekend, writer.uint32(434).fork()).ldelim();
    }
    if (message.unlisted === true) {
      writer.uint32(440).bool(message.unlisted);
    }
    if (message.gameCount !== 0) {
      writer.uint32(448).uint32(message.gameCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemType = reader.int32() as any;
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.success = reader.uint32();
          break;
        case 4:
          message.visible = reader.bool();
          break;
        case 5:
          message.unvailableForCountryRestriction = reader.bool();
          break;
        case 6:
          message.name = reader.string();
          break;
        case 7:
          message.storeUrlPath = reader.string();
          break;
        case 9:
          message.appid = reader.uint32();
          break;
        case 10:
          message.type = reader.int32() as any;
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.includedTypes.push(reader.int32() as any);
            }
          } else {
            message.includedTypes.push(reader.int32() as any);
          }
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.includedAppids.push(reader.uint32());
            }
          } else {
            message.includedAppids.push(reader.uint32());
          }
          break;
        case 13:
          message.isFree = reader.bool();
          break;
        case 14:
          message.isEarlyAccess = reader.bool();
          break;
        case 15:
          message.relatedItems = StoreItem_RelatedItems.decode(reader, reader.uint32());
          break;
        case 20:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contentDescriptorids.push(reader.int32() as any);
            }
          } else {
            message.contentDescriptorids.push(reader.int32() as any);
          }
          break;
        case 21:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tagids.push(reader.uint32());
            }
          } else {
            message.tagids.push(reader.uint32());
          }
          break;
        case 22:
          message.categories = StoreItem_Categories.decode(reader, reader.uint32());
          break;
        case 23:
          message.reviews = StoreItem_Reviews.decode(reader, reader.uint32());
          break;
        case 24:
          message.basicInfo = StoreItem_BasicInfo.decode(reader, reader.uint32());
          break;
        case 25:
          message.tags.push(StoreItem_Tag.decode(reader, reader.uint32()));
          break;
        case 30:
          message.assets = StoreItem_Assets.decode(reader, reader.uint32());
          break;
        case 31:
          message.release = StoreItem_ReleaseInfo.decode(reader, reader.uint32());
          break;
        case 32:
          message.platforms = StoreItem_Platforms.decode(reader, reader.uint32());
          break;
        case 33:
          message.gameRating = StoreGameRating.decode(reader, reader.uint32());
          break;
        case 40:
          message.bestPurchaseOption = StoreItem_PurchaseOption.decode(reader, reader.uint32());
          break;
        case 41:
          message.purchaseOptions.push(StoreItem_PurchaseOption.decode(reader, reader.uint32()));
          break;
        case 42:
          message.accessories.push(StoreItem_PurchaseOption.decode(reader, reader.uint32()));
          break;
        case 50:
          message.screenshots = StoreItem_Screenshots.decode(reader, reader.uint32());
          break;
        case 51:
          message.trailers = StoreItem_Trailers.decode(reader, reader.uint32());
          break;
        case 52:
          message.supportedLanguages.push(StoreItem_SupportedLanguage.decode(reader, reader.uint32()));
          break;
        case 53:
          message.storeUrlPathOverride = reader.string();
          break;
        case 54:
          message.freeWeekend = StoreItem_FreeWeekend.decode(reader, reader.uint32());
          break;
        case 55:
          message.unlisted = reader.bool();
          break;
        case 56:
          message.gameCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem {
    return {
      itemType: isSet(object.itemType) ? eStoreItemTypeFromJSON(object.itemType) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
      success: isSet(object.success) ? Number(object.success) : 0,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      unvailableForCountryRestriction: isSet(object.unvailableForCountryRestriction)
        ? Boolean(object.unvailableForCountryRestriction)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      storeUrlPath: isSet(object.storeUrlPath) ? String(object.storeUrlPath) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      type: isSet(object.type) ? eStoreAppTypeFromJSON(object.type) : 0,
      includedTypes: Array.isArray(object?.includedTypes)
        ? object.includedTypes.map((e: any) => eStoreAppTypeFromJSON(e))
        : [],
      includedAppids: Array.isArray(object?.includedAppids) ? object.includedAppids.map((e: any) => Number(e)) : [],
      isFree: isSet(object.isFree) ? Boolean(object.isFree) : false,
      isEarlyAccess: isSet(object.isEarlyAccess) ? Boolean(object.isEarlyAccess) : false,
      relatedItems: isSet(object.relatedItems) ? StoreItem_RelatedItems.fromJSON(object.relatedItems) : undefined,
      contentDescriptorids: Array.isArray(object?.contentDescriptorids)
        ? object.contentDescriptorids.map((e: any) => eContentDescriptorIDFromJSON(e))
        : [],
      tagids: Array.isArray(object?.tagids) ? object.tagids.map((e: any) => Number(e)) : [],
      categories: isSet(object.categories) ? StoreItem_Categories.fromJSON(object.categories) : undefined,
      reviews: isSet(object.reviews) ? StoreItem_Reviews.fromJSON(object.reviews) : undefined,
      basicInfo: isSet(object.basicInfo) ? StoreItem_BasicInfo.fromJSON(object.basicInfo) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => StoreItem_Tag.fromJSON(e)) : [],
      assets: isSet(object.assets) ? StoreItem_Assets.fromJSON(object.assets) : undefined,
      release: isSet(object.release) ? StoreItem_ReleaseInfo.fromJSON(object.release) : undefined,
      platforms: isSet(object.platforms) ? StoreItem_Platforms.fromJSON(object.platforms) : undefined,
      gameRating: isSet(object.gameRating) ? StoreGameRating.fromJSON(object.gameRating) : undefined,
      bestPurchaseOption: isSet(object.bestPurchaseOption)
        ? StoreItem_PurchaseOption.fromJSON(object.bestPurchaseOption)
        : undefined,
      purchaseOptions: Array.isArray(object?.purchaseOptions)
        ? object.purchaseOptions.map((e: any) => StoreItem_PurchaseOption.fromJSON(e))
        : [],
      accessories: Array.isArray(object?.accessories)
        ? object.accessories.map((e: any) => StoreItem_PurchaseOption.fromJSON(e))
        : [],
      screenshots: isSet(object.screenshots) ? StoreItem_Screenshots.fromJSON(object.screenshots) : undefined,
      trailers: isSet(object.trailers) ? StoreItem_Trailers.fromJSON(object.trailers) : undefined,
      supportedLanguages: Array.isArray(object?.supportedLanguages)
        ? object.supportedLanguages.map((e: any) => StoreItem_SupportedLanguage.fromJSON(e))
        : [],
      storeUrlPathOverride: isSet(object.storeUrlPathOverride) ? String(object.storeUrlPathOverride) : "",
      freeWeekend: isSet(object.freeWeekend) ? StoreItem_FreeWeekend.fromJSON(object.freeWeekend) : undefined,
      unlisted: isSet(object.unlisted) ? Boolean(object.unlisted) : false,
      gameCount: isSet(object.gameCount) ? Number(object.gameCount) : 0,
    };
  },

  toJSON(message: StoreItem): unknown {
    const obj: any = {};
    message.itemType !== undefined && (obj.itemType = eStoreItemTypeToJSON(message.itemType));
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.success !== undefined && (obj.success = Math.round(message.success));
    message.visible !== undefined && (obj.visible = message.visible);
    message.unvailableForCountryRestriction !== undefined &&
      (obj.unvailableForCountryRestriction = message.unvailableForCountryRestriction);
    message.name !== undefined && (obj.name = message.name);
    message.storeUrlPath !== undefined && (obj.storeUrlPath = message.storeUrlPath);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.type !== undefined && (obj.type = eStoreAppTypeToJSON(message.type));
    if (message.includedTypes) {
      obj.includedTypes = message.includedTypes.map((e) => eStoreAppTypeToJSON(e));
    } else {
      obj.includedTypes = [];
    }
    if (message.includedAppids) {
      obj.includedAppids = message.includedAppids.map((e) => Math.round(e));
    } else {
      obj.includedAppids = [];
    }
    message.isFree !== undefined && (obj.isFree = message.isFree);
    message.isEarlyAccess !== undefined && (obj.isEarlyAccess = message.isEarlyAccess);
    message.relatedItems !== undefined &&
      (obj.relatedItems = message.relatedItems ? StoreItem_RelatedItems.toJSON(message.relatedItems) : undefined);
    if (message.contentDescriptorids) {
      obj.contentDescriptorids = message.contentDescriptorids.map((e) => eContentDescriptorIDToJSON(e));
    } else {
      obj.contentDescriptorids = [];
    }
    if (message.tagids) {
      obj.tagids = message.tagids.map((e) => Math.round(e));
    } else {
      obj.tagids = [];
    }
    message.categories !== undefined &&
      (obj.categories = message.categories ? StoreItem_Categories.toJSON(message.categories) : undefined);
    message.reviews !== undefined &&
      (obj.reviews = message.reviews ? StoreItem_Reviews.toJSON(message.reviews) : undefined);
    message.basicInfo !== undefined &&
      (obj.basicInfo = message.basicInfo ? StoreItem_BasicInfo.toJSON(message.basicInfo) : undefined);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? StoreItem_Tag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.assets !== undefined && (obj.assets = message.assets ? StoreItem_Assets.toJSON(message.assets) : undefined);
    message.release !== undefined &&
      (obj.release = message.release ? StoreItem_ReleaseInfo.toJSON(message.release) : undefined);
    message.platforms !== undefined &&
      (obj.platforms = message.platforms ? StoreItem_Platforms.toJSON(message.platforms) : undefined);
    message.gameRating !== undefined &&
      (obj.gameRating = message.gameRating ? StoreGameRating.toJSON(message.gameRating) : undefined);
    message.bestPurchaseOption !== undefined && (obj.bestPurchaseOption = message.bestPurchaseOption
      ? StoreItem_PurchaseOption.toJSON(message.bestPurchaseOption)
      : undefined);
    if (message.purchaseOptions) {
      obj.purchaseOptions = message.purchaseOptions.map((e) => e ? StoreItem_PurchaseOption.toJSON(e) : undefined);
    } else {
      obj.purchaseOptions = [];
    }
    if (message.accessories) {
      obj.accessories = message.accessories.map((e) => e ? StoreItem_PurchaseOption.toJSON(e) : undefined);
    } else {
      obj.accessories = [];
    }
    message.screenshots !== undefined &&
      (obj.screenshots = message.screenshots ? StoreItem_Screenshots.toJSON(message.screenshots) : undefined);
    message.trailers !== undefined &&
      (obj.trailers = message.trailers ? StoreItem_Trailers.toJSON(message.trailers) : undefined);
    if (message.supportedLanguages) {
      obj.supportedLanguages = message.supportedLanguages.map((e) =>
        e ? StoreItem_SupportedLanguage.toJSON(e) : undefined
      );
    } else {
      obj.supportedLanguages = [];
    }
    message.storeUrlPathOverride !== undefined && (obj.storeUrlPathOverride = message.storeUrlPathOverride);
    message.freeWeekend !== undefined &&
      (obj.freeWeekend = message.freeWeekend ? StoreItem_FreeWeekend.toJSON(message.freeWeekend) : undefined);
    message.unlisted !== undefined && (obj.unlisted = message.unlisted);
    message.gameCount !== undefined && (obj.gameCount = Math.round(message.gameCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem>, I>>(base?: I): StoreItem {
    return StoreItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem>, I>>(object: I): StoreItem {
    const message = createBaseStoreItem();
    message.itemType = object.itemType ?? 0;
    message.id = object.id ?? 0;
    message.success = object.success ?? 0;
    message.visible = object.visible ?? false;
    message.unvailableForCountryRestriction = object.unvailableForCountryRestriction ?? false;
    message.name = object.name ?? "";
    message.storeUrlPath = object.storeUrlPath ?? "";
    message.appid = object.appid ?? 0;
    message.type = object.type ?? 0;
    message.includedTypes = object.includedTypes?.map((e) => e) || [];
    message.includedAppids = object.includedAppids?.map((e) => e) || [];
    message.isFree = object.isFree ?? false;
    message.isEarlyAccess = object.isEarlyAccess ?? false;
    message.relatedItems = (object.relatedItems !== undefined && object.relatedItems !== null)
      ? StoreItem_RelatedItems.fromPartial(object.relatedItems)
      : undefined;
    message.contentDescriptorids = object.contentDescriptorids?.map((e) => e) || [];
    message.tagids = object.tagids?.map((e) => e) || [];
    message.categories = (object.categories !== undefined && object.categories !== null)
      ? StoreItem_Categories.fromPartial(object.categories)
      : undefined;
    message.reviews = (object.reviews !== undefined && object.reviews !== null)
      ? StoreItem_Reviews.fromPartial(object.reviews)
      : undefined;
    message.basicInfo = (object.basicInfo !== undefined && object.basicInfo !== null)
      ? StoreItem_BasicInfo.fromPartial(object.basicInfo)
      : undefined;
    message.tags = object.tags?.map((e) => StoreItem_Tag.fromPartial(e)) || [];
    message.assets = (object.assets !== undefined && object.assets !== null)
      ? StoreItem_Assets.fromPartial(object.assets)
      : undefined;
    message.release = (object.release !== undefined && object.release !== null)
      ? StoreItem_ReleaseInfo.fromPartial(object.release)
      : undefined;
    message.platforms = (object.platforms !== undefined && object.platforms !== null)
      ? StoreItem_Platforms.fromPartial(object.platforms)
      : undefined;
    message.gameRating = (object.gameRating !== undefined && object.gameRating !== null)
      ? StoreGameRating.fromPartial(object.gameRating)
      : undefined;
    message.bestPurchaseOption = (object.bestPurchaseOption !== undefined && object.bestPurchaseOption !== null)
      ? StoreItem_PurchaseOption.fromPartial(object.bestPurchaseOption)
      : undefined;
    message.purchaseOptions = object.purchaseOptions?.map((e) => StoreItem_PurchaseOption.fromPartial(e)) || [];
    message.accessories = object.accessories?.map((e) => StoreItem_PurchaseOption.fromPartial(e)) || [];
    message.screenshots = (object.screenshots !== undefined && object.screenshots !== null)
      ? StoreItem_Screenshots.fromPartial(object.screenshots)
      : undefined;
    message.trailers = (object.trailers !== undefined && object.trailers !== null)
      ? StoreItem_Trailers.fromPartial(object.trailers)
      : undefined;
    message.supportedLanguages = object.supportedLanguages?.map((e) => StoreItem_SupportedLanguage.fromPartial(e)) ||
      [];
    message.storeUrlPathOverride = object.storeUrlPathOverride ?? "";
    message.freeWeekend = (object.freeWeekend !== undefined && object.freeWeekend !== null)
      ? StoreItem_FreeWeekend.fromPartial(object.freeWeekend)
      : undefined;
    message.unlisted = object.unlisted ?? false;
    message.gameCount = object.gameCount ?? 0;
    return message;
  },
};

function createBaseStoreItem_RelatedItems(): StoreItem_RelatedItems {
  return { parentAppid: 0 };
}

export const StoreItem_RelatedItems = {
  encode(message: StoreItem_RelatedItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parentAppid !== 0) {
      writer.uint32(8).uint32(message.parentAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_RelatedItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_RelatedItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_RelatedItems {
    return { parentAppid: isSet(object.parentAppid) ? Number(object.parentAppid) : 0 };
  },

  toJSON(message: StoreItem_RelatedItems): unknown {
    const obj: any = {};
    message.parentAppid !== undefined && (obj.parentAppid = Math.round(message.parentAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_RelatedItems>, I>>(base?: I): StoreItem_RelatedItems {
    return StoreItem_RelatedItems.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_RelatedItems>, I>>(object: I): StoreItem_RelatedItems {
    const message = createBaseStoreItem_RelatedItems();
    message.parentAppid = object.parentAppid ?? 0;
    return message;
  },
};

function createBaseStoreItem_Categories(): StoreItem_Categories {
  return { supportedPlayerCategoryids: [], featureCategoryids: [], controllerCategoryids: [] };
}

export const StoreItem_Categories = {
  encode(message: StoreItem_Categories, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.supportedPlayerCategoryids) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.featureCategoryids) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.controllerCategoryids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Categories {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Categories();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedPlayerCategoryids.push(reader.uint32());
            }
          } else {
            message.supportedPlayerCategoryids.push(reader.uint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.featureCategoryids.push(reader.uint32());
            }
          } else {
            message.featureCategoryids.push(reader.uint32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.controllerCategoryids.push(reader.uint32());
            }
          } else {
            message.controllerCategoryids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Categories {
    return {
      supportedPlayerCategoryids: Array.isArray(object?.supportedPlayerCategoryids)
        ? object.supportedPlayerCategoryids.map((e: any) => Number(e))
        : [],
      featureCategoryids: Array.isArray(object?.featureCategoryids)
        ? object.featureCategoryids.map((e: any) => Number(e))
        : [],
      controllerCategoryids: Array.isArray(object?.controllerCategoryids)
        ? object.controllerCategoryids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: StoreItem_Categories): unknown {
    const obj: any = {};
    if (message.supportedPlayerCategoryids) {
      obj.supportedPlayerCategoryids = message.supportedPlayerCategoryids.map((e) => Math.round(e));
    } else {
      obj.supportedPlayerCategoryids = [];
    }
    if (message.featureCategoryids) {
      obj.featureCategoryids = message.featureCategoryids.map((e) => Math.round(e));
    } else {
      obj.featureCategoryids = [];
    }
    if (message.controllerCategoryids) {
      obj.controllerCategoryids = message.controllerCategoryids.map((e) => Math.round(e));
    } else {
      obj.controllerCategoryids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Categories>, I>>(base?: I): StoreItem_Categories {
    return StoreItem_Categories.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Categories>, I>>(object: I): StoreItem_Categories {
    const message = createBaseStoreItem_Categories();
    message.supportedPlayerCategoryids = object.supportedPlayerCategoryids?.map((e) => e) || [];
    message.featureCategoryids = object.featureCategoryids?.map((e) => e) || [];
    message.controllerCategoryids = object.controllerCategoryids?.map((e) => e) || [];
    return message;
  },
};

function createBaseStoreItem_Reviews(): StoreItem_Reviews {
  return { summaryFiltered: undefined, summaryUnfiltered: undefined };
}

export const StoreItem_Reviews = {
  encode(message: StoreItem_Reviews, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summaryFiltered !== undefined) {
      StoreItem_Reviews_StoreReviewSummary.encode(message.summaryFiltered, writer.uint32(10).fork()).ldelim();
    }
    if (message.summaryUnfiltered !== undefined) {
      StoreItem_Reviews_StoreReviewSummary.encode(message.summaryUnfiltered, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Reviews {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Reviews();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaryFiltered = StoreItem_Reviews_StoreReviewSummary.decode(reader, reader.uint32());
          break;
        case 2:
          message.summaryUnfiltered = StoreItem_Reviews_StoreReviewSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Reviews {
    return {
      summaryFiltered: isSet(object.summaryFiltered)
        ? StoreItem_Reviews_StoreReviewSummary.fromJSON(object.summaryFiltered)
        : undefined,
      summaryUnfiltered: isSet(object.summaryUnfiltered)
        ? StoreItem_Reviews_StoreReviewSummary.fromJSON(object.summaryUnfiltered)
        : undefined,
    };
  },

  toJSON(message: StoreItem_Reviews): unknown {
    const obj: any = {};
    message.summaryFiltered !== undefined && (obj.summaryFiltered = message.summaryFiltered
      ? StoreItem_Reviews_StoreReviewSummary.toJSON(message.summaryFiltered)
      : undefined);
    message.summaryUnfiltered !== undefined && (obj.summaryUnfiltered = message.summaryUnfiltered
      ? StoreItem_Reviews_StoreReviewSummary.toJSON(message.summaryUnfiltered)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Reviews>, I>>(base?: I): StoreItem_Reviews {
    return StoreItem_Reviews.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Reviews>, I>>(object: I): StoreItem_Reviews {
    const message = createBaseStoreItem_Reviews();
    message.summaryFiltered = (object.summaryFiltered !== undefined && object.summaryFiltered !== null)
      ? StoreItem_Reviews_StoreReviewSummary.fromPartial(object.summaryFiltered)
      : undefined;
    message.summaryUnfiltered = (object.summaryUnfiltered !== undefined && object.summaryUnfiltered !== null)
      ? StoreItem_Reviews_StoreReviewSummary.fromPartial(object.summaryUnfiltered)
      : undefined;
    return message;
  },
};

function createBaseStoreItem_Reviews_StoreReviewSummary(): StoreItem_Reviews_StoreReviewSummary {
  return { reviewCount: 0, percentPositive: 0, reviewScore: 0, reviewScoreLabel: "" };
}

export const StoreItem_Reviews_StoreReviewSummary = {
  encode(message: StoreItem_Reviews_StoreReviewSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reviewCount !== 0) {
      writer.uint32(8).uint32(message.reviewCount);
    }
    if (message.percentPositive !== 0) {
      writer.uint32(16).int32(message.percentPositive);
    }
    if (message.reviewScore !== 0) {
      writer.uint32(24).int32(message.reviewScore);
    }
    if (message.reviewScoreLabel !== "") {
      writer.uint32(34).string(message.reviewScoreLabel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Reviews_StoreReviewSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Reviews_StoreReviewSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reviewCount = reader.uint32();
          break;
        case 2:
          message.percentPositive = reader.int32();
          break;
        case 3:
          message.reviewScore = reader.int32() as any;
          break;
        case 4:
          message.reviewScoreLabel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Reviews_StoreReviewSummary {
    return {
      reviewCount: isSet(object.reviewCount) ? Number(object.reviewCount) : 0,
      percentPositive: isSet(object.percentPositive) ? Number(object.percentPositive) : 0,
      reviewScore: isSet(object.reviewScore) ? eUserReviewScoreFromJSON(object.reviewScore) : 0,
      reviewScoreLabel: isSet(object.reviewScoreLabel) ? String(object.reviewScoreLabel) : "",
    };
  },

  toJSON(message: StoreItem_Reviews_StoreReviewSummary): unknown {
    const obj: any = {};
    message.reviewCount !== undefined && (obj.reviewCount = Math.round(message.reviewCount));
    message.percentPositive !== undefined && (obj.percentPositive = Math.round(message.percentPositive));
    message.reviewScore !== undefined && (obj.reviewScore = eUserReviewScoreToJSON(message.reviewScore));
    message.reviewScoreLabel !== undefined && (obj.reviewScoreLabel = message.reviewScoreLabel);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Reviews_StoreReviewSummary>, I>>(
    base?: I,
  ): StoreItem_Reviews_StoreReviewSummary {
    return StoreItem_Reviews_StoreReviewSummary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Reviews_StoreReviewSummary>, I>>(
    object: I,
  ): StoreItem_Reviews_StoreReviewSummary {
    const message = createBaseStoreItem_Reviews_StoreReviewSummary();
    message.reviewCount = object.reviewCount ?? 0;
    message.percentPositive = object.percentPositive ?? 0;
    message.reviewScore = object.reviewScore ?? 0;
    message.reviewScoreLabel = object.reviewScoreLabel ?? "";
    return message;
  },
};

function createBaseStoreItem_BasicInfo(): StoreItem_BasicInfo {
  return { shortDescription: "", publishers: [], developers: [], franchises: [], capsuleHeadline: "" };
}

export const StoreItem_BasicInfo = {
  encode(message: StoreItem_BasicInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shortDescription !== "") {
      writer.uint32(10).string(message.shortDescription);
    }
    for (const v of message.publishers) {
      StoreItem_BasicInfo_CreatorHomeLink.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.developers) {
      StoreItem_BasicInfo_CreatorHomeLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.franchises) {
      StoreItem_BasicInfo_CreatorHomeLink.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.capsuleHeadline !== "") {
      writer.uint32(42).string(message.capsuleHeadline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_BasicInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_BasicInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shortDescription = reader.string();
          break;
        case 2:
          message.publishers.push(StoreItem_BasicInfo_CreatorHomeLink.decode(reader, reader.uint32()));
          break;
        case 3:
          message.developers.push(StoreItem_BasicInfo_CreatorHomeLink.decode(reader, reader.uint32()));
          break;
        case 4:
          message.franchises.push(StoreItem_BasicInfo_CreatorHomeLink.decode(reader, reader.uint32()));
          break;
        case 5:
          message.capsuleHeadline = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_BasicInfo {
    return {
      shortDescription: isSet(object.shortDescription) ? String(object.shortDescription) : "",
      publishers: Array.isArray(object?.publishers)
        ? object.publishers.map((e: any) => StoreItem_BasicInfo_CreatorHomeLink.fromJSON(e))
        : [],
      developers: Array.isArray(object?.developers)
        ? object.developers.map((e: any) => StoreItem_BasicInfo_CreatorHomeLink.fromJSON(e))
        : [],
      franchises: Array.isArray(object?.franchises)
        ? object.franchises.map((e: any) => StoreItem_BasicInfo_CreatorHomeLink.fromJSON(e))
        : [],
      capsuleHeadline: isSet(object.capsuleHeadline) ? String(object.capsuleHeadline) : "",
    };
  },

  toJSON(message: StoreItem_BasicInfo): unknown {
    const obj: any = {};
    message.shortDescription !== undefined && (obj.shortDescription = message.shortDescription);
    if (message.publishers) {
      obj.publishers = message.publishers.map((e) => e ? StoreItem_BasicInfo_CreatorHomeLink.toJSON(e) : undefined);
    } else {
      obj.publishers = [];
    }
    if (message.developers) {
      obj.developers = message.developers.map((e) => e ? StoreItem_BasicInfo_CreatorHomeLink.toJSON(e) : undefined);
    } else {
      obj.developers = [];
    }
    if (message.franchises) {
      obj.franchises = message.franchises.map((e) => e ? StoreItem_BasicInfo_CreatorHomeLink.toJSON(e) : undefined);
    } else {
      obj.franchises = [];
    }
    message.capsuleHeadline !== undefined && (obj.capsuleHeadline = message.capsuleHeadline);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_BasicInfo>, I>>(base?: I): StoreItem_BasicInfo {
    return StoreItem_BasicInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_BasicInfo>, I>>(object: I): StoreItem_BasicInfo {
    const message = createBaseStoreItem_BasicInfo();
    message.shortDescription = object.shortDescription ?? "";
    message.publishers = object.publishers?.map((e) => StoreItem_BasicInfo_CreatorHomeLink.fromPartial(e)) || [];
    message.developers = object.developers?.map((e) => StoreItem_BasicInfo_CreatorHomeLink.fromPartial(e)) || [];
    message.franchises = object.franchises?.map((e) => StoreItem_BasicInfo_CreatorHomeLink.fromPartial(e)) || [];
    message.capsuleHeadline = object.capsuleHeadline ?? "";
    return message;
  },
};

function createBaseStoreItem_BasicInfo_CreatorHomeLink(): StoreItem_BasicInfo_CreatorHomeLink {
  return { name: "", creatorClanAccountId: 0 };
}

export const StoreItem_BasicInfo_CreatorHomeLink = {
  encode(message: StoreItem_BasicInfo_CreatorHomeLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.creatorClanAccountId !== 0) {
      writer.uint32(16).uint32(message.creatorClanAccountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_BasicInfo_CreatorHomeLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_BasicInfo_CreatorHomeLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.creatorClanAccountId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_BasicInfo_CreatorHomeLink {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      creatorClanAccountId: isSet(object.creatorClanAccountId) ? Number(object.creatorClanAccountId) : 0,
    };
  },

  toJSON(message: StoreItem_BasicInfo_CreatorHomeLink): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.creatorClanAccountId !== undefined && (obj.creatorClanAccountId = Math.round(message.creatorClanAccountId));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_BasicInfo_CreatorHomeLink>, I>>(
    base?: I,
  ): StoreItem_BasicInfo_CreatorHomeLink {
    return StoreItem_BasicInfo_CreatorHomeLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_BasicInfo_CreatorHomeLink>, I>>(
    object: I,
  ): StoreItem_BasicInfo_CreatorHomeLink {
    const message = createBaseStoreItem_BasicInfo_CreatorHomeLink();
    message.name = object.name ?? "";
    message.creatorClanAccountId = object.creatorClanAccountId ?? 0;
    return message;
  },
};

function createBaseStoreItem_Tag(): StoreItem_Tag {
  return { tagid: 0, weight: 0 };
}

export const StoreItem_Tag = {
  encode(message: StoreItem_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tagid !== 0) {
      writer.uint32(8).uint32(message.tagid);
    }
    if (message.weight !== 0) {
      writer.uint32(16).uint32(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagid = reader.uint32();
          break;
        case 2:
          message.weight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Tag {
    return {
      tagid: isSet(object.tagid) ? Number(object.tagid) : 0,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: StoreItem_Tag): unknown {
    const obj: any = {};
    message.tagid !== undefined && (obj.tagid = Math.round(message.tagid));
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Tag>, I>>(base?: I): StoreItem_Tag {
    return StoreItem_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Tag>, I>>(object: I): StoreItem_Tag {
    const message = createBaseStoreItem_Tag();
    message.tagid = object.tagid ?? 0;
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseStoreItem_Assets(): StoreItem_Assets {
  return {
    assetUrlFormat: "",
    mainCapsule: "",
    smallCapsule: "",
    header: "",
    packageHeader: "",
    pageBackground: "",
    heroCapsule: "",
    heroCapsule2x: "",
    libraryCapsule: "",
    libraryCapsule2x: "",
    libraryHero: "",
    libraryHero2x: "",
    communityIcon: "",
    clanAvatar: "",
  };
}

export const StoreItem_Assets = {
  encode(message: StoreItem_Assets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetUrlFormat !== "") {
      writer.uint32(10).string(message.assetUrlFormat);
    }
    if (message.mainCapsule !== "") {
      writer.uint32(18).string(message.mainCapsule);
    }
    if (message.smallCapsule !== "") {
      writer.uint32(26).string(message.smallCapsule);
    }
    if (message.header !== "") {
      writer.uint32(34).string(message.header);
    }
    if (message.packageHeader !== "") {
      writer.uint32(42).string(message.packageHeader);
    }
    if (message.pageBackground !== "") {
      writer.uint32(50).string(message.pageBackground);
    }
    if (message.heroCapsule !== "") {
      writer.uint32(58).string(message.heroCapsule);
    }
    if (message.heroCapsule2x !== "") {
      writer.uint32(66).string(message.heroCapsule2x);
    }
    if (message.libraryCapsule !== "") {
      writer.uint32(74).string(message.libraryCapsule);
    }
    if (message.libraryCapsule2x !== "") {
      writer.uint32(82).string(message.libraryCapsule2x);
    }
    if (message.libraryHero !== "") {
      writer.uint32(90).string(message.libraryHero);
    }
    if (message.libraryHero2x !== "") {
      writer.uint32(98).string(message.libraryHero2x);
    }
    if (message.communityIcon !== "") {
      writer.uint32(106).string(message.communityIcon);
    }
    if (message.clanAvatar !== "") {
      writer.uint32(114).string(message.clanAvatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Assets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Assets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetUrlFormat = reader.string();
          break;
        case 2:
          message.mainCapsule = reader.string();
          break;
        case 3:
          message.smallCapsule = reader.string();
          break;
        case 4:
          message.header = reader.string();
          break;
        case 5:
          message.packageHeader = reader.string();
          break;
        case 6:
          message.pageBackground = reader.string();
          break;
        case 7:
          message.heroCapsule = reader.string();
          break;
        case 8:
          message.heroCapsule2x = reader.string();
          break;
        case 9:
          message.libraryCapsule = reader.string();
          break;
        case 10:
          message.libraryCapsule2x = reader.string();
          break;
        case 11:
          message.libraryHero = reader.string();
          break;
        case 12:
          message.libraryHero2x = reader.string();
          break;
        case 13:
          message.communityIcon = reader.string();
          break;
        case 14:
          message.clanAvatar = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Assets {
    return {
      assetUrlFormat: isSet(object.assetUrlFormat) ? String(object.assetUrlFormat) : "",
      mainCapsule: isSet(object.mainCapsule) ? String(object.mainCapsule) : "",
      smallCapsule: isSet(object.smallCapsule) ? String(object.smallCapsule) : "",
      header: isSet(object.header) ? String(object.header) : "",
      packageHeader: isSet(object.packageHeader) ? String(object.packageHeader) : "",
      pageBackground: isSet(object.pageBackground) ? String(object.pageBackground) : "",
      heroCapsule: isSet(object.heroCapsule) ? String(object.heroCapsule) : "",
      heroCapsule2x: isSet(object.heroCapsule2x) ? String(object.heroCapsule2x) : "",
      libraryCapsule: isSet(object.libraryCapsule) ? String(object.libraryCapsule) : "",
      libraryCapsule2x: isSet(object.libraryCapsule2x) ? String(object.libraryCapsule2x) : "",
      libraryHero: isSet(object.libraryHero) ? String(object.libraryHero) : "",
      libraryHero2x: isSet(object.libraryHero2x) ? String(object.libraryHero2x) : "",
      communityIcon: isSet(object.communityIcon) ? String(object.communityIcon) : "",
      clanAvatar: isSet(object.clanAvatar) ? String(object.clanAvatar) : "",
    };
  },

  toJSON(message: StoreItem_Assets): unknown {
    const obj: any = {};
    message.assetUrlFormat !== undefined && (obj.assetUrlFormat = message.assetUrlFormat);
    message.mainCapsule !== undefined && (obj.mainCapsule = message.mainCapsule);
    message.smallCapsule !== undefined && (obj.smallCapsule = message.smallCapsule);
    message.header !== undefined && (obj.header = message.header);
    message.packageHeader !== undefined && (obj.packageHeader = message.packageHeader);
    message.pageBackground !== undefined && (obj.pageBackground = message.pageBackground);
    message.heroCapsule !== undefined && (obj.heroCapsule = message.heroCapsule);
    message.heroCapsule2x !== undefined && (obj.heroCapsule2x = message.heroCapsule2x);
    message.libraryCapsule !== undefined && (obj.libraryCapsule = message.libraryCapsule);
    message.libraryCapsule2x !== undefined && (obj.libraryCapsule2x = message.libraryCapsule2x);
    message.libraryHero !== undefined && (obj.libraryHero = message.libraryHero);
    message.libraryHero2x !== undefined && (obj.libraryHero2x = message.libraryHero2x);
    message.communityIcon !== undefined && (obj.communityIcon = message.communityIcon);
    message.clanAvatar !== undefined && (obj.clanAvatar = message.clanAvatar);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Assets>, I>>(base?: I): StoreItem_Assets {
    return StoreItem_Assets.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Assets>, I>>(object: I): StoreItem_Assets {
    const message = createBaseStoreItem_Assets();
    message.assetUrlFormat = object.assetUrlFormat ?? "";
    message.mainCapsule = object.mainCapsule ?? "";
    message.smallCapsule = object.smallCapsule ?? "";
    message.header = object.header ?? "";
    message.packageHeader = object.packageHeader ?? "";
    message.pageBackground = object.pageBackground ?? "";
    message.heroCapsule = object.heroCapsule ?? "";
    message.heroCapsule2x = object.heroCapsule2x ?? "";
    message.libraryCapsule = object.libraryCapsule ?? "";
    message.libraryCapsule2x = object.libraryCapsule2x ?? "";
    message.libraryHero = object.libraryHero ?? "";
    message.libraryHero2x = object.libraryHero2x ?? "";
    message.communityIcon = object.communityIcon ?? "";
    message.clanAvatar = object.clanAvatar ?? "";
    return message;
  },
};

function createBaseStoreItem_ReleaseInfo(): StoreItem_ReleaseInfo {
  return {
    steamReleaseDate: 0,
    originalReleaseDate: 0,
    originalSteamReleaseDate: 0,
    isComingSoon: false,
    isPreload: false,
    customReleaseDateMessage: "",
    isAbridgedReleaseDate: false,
    comingSoonDisplay: "",
    isEarlyAccess: false,
    macReleaseDate: 0,
    linuxReleaseDate: 0,
  };
}

export const StoreItem_ReleaseInfo = {
  encode(message: StoreItem_ReleaseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamReleaseDate !== 0) {
      writer.uint32(8).uint32(message.steamReleaseDate);
    }
    if (message.originalReleaseDate !== 0) {
      writer.uint32(16).uint32(message.originalReleaseDate);
    }
    if (message.originalSteamReleaseDate !== 0) {
      writer.uint32(24).uint32(message.originalSteamReleaseDate);
    }
    if (message.isComingSoon === true) {
      writer.uint32(32).bool(message.isComingSoon);
    }
    if (message.isPreload === true) {
      writer.uint32(40).bool(message.isPreload);
    }
    if (message.customReleaseDateMessage !== "") {
      writer.uint32(50).string(message.customReleaseDateMessage);
    }
    if (message.isAbridgedReleaseDate === true) {
      writer.uint32(56).bool(message.isAbridgedReleaseDate);
    }
    if (message.comingSoonDisplay !== "") {
      writer.uint32(66).string(message.comingSoonDisplay);
    }
    if (message.isEarlyAccess === true) {
      writer.uint32(80).bool(message.isEarlyAccess);
    }
    if (message.macReleaseDate !== 0) {
      writer.uint32(160).uint32(message.macReleaseDate);
    }
    if (message.linuxReleaseDate !== 0) {
      writer.uint32(168).uint32(message.linuxReleaseDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_ReleaseInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_ReleaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamReleaseDate = reader.uint32();
          break;
        case 2:
          message.originalReleaseDate = reader.uint32();
          break;
        case 3:
          message.originalSteamReleaseDate = reader.uint32();
          break;
        case 4:
          message.isComingSoon = reader.bool();
          break;
        case 5:
          message.isPreload = reader.bool();
          break;
        case 6:
          message.customReleaseDateMessage = reader.string();
          break;
        case 7:
          message.isAbridgedReleaseDate = reader.bool();
          break;
        case 8:
          message.comingSoonDisplay = reader.string();
          break;
        case 10:
          message.isEarlyAccess = reader.bool();
          break;
        case 20:
          message.macReleaseDate = reader.uint32();
          break;
        case 21:
          message.linuxReleaseDate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_ReleaseInfo {
    return {
      steamReleaseDate: isSet(object.steamReleaseDate) ? Number(object.steamReleaseDate) : 0,
      originalReleaseDate: isSet(object.originalReleaseDate) ? Number(object.originalReleaseDate) : 0,
      originalSteamReleaseDate: isSet(object.originalSteamReleaseDate) ? Number(object.originalSteamReleaseDate) : 0,
      isComingSoon: isSet(object.isComingSoon) ? Boolean(object.isComingSoon) : false,
      isPreload: isSet(object.isPreload) ? Boolean(object.isPreload) : false,
      customReleaseDateMessage: isSet(object.customReleaseDateMessage) ? String(object.customReleaseDateMessage) : "",
      isAbridgedReleaseDate: isSet(object.isAbridgedReleaseDate) ? Boolean(object.isAbridgedReleaseDate) : false,
      comingSoonDisplay: isSet(object.comingSoonDisplay) ? String(object.comingSoonDisplay) : "",
      isEarlyAccess: isSet(object.isEarlyAccess) ? Boolean(object.isEarlyAccess) : false,
      macReleaseDate: isSet(object.macReleaseDate) ? Number(object.macReleaseDate) : 0,
      linuxReleaseDate: isSet(object.linuxReleaseDate) ? Number(object.linuxReleaseDate) : 0,
    };
  },

  toJSON(message: StoreItem_ReleaseInfo): unknown {
    const obj: any = {};
    message.steamReleaseDate !== undefined && (obj.steamReleaseDate = Math.round(message.steamReleaseDate));
    message.originalReleaseDate !== undefined && (obj.originalReleaseDate = Math.round(message.originalReleaseDate));
    message.originalSteamReleaseDate !== undefined &&
      (obj.originalSteamReleaseDate = Math.round(message.originalSteamReleaseDate));
    message.isComingSoon !== undefined && (obj.isComingSoon = message.isComingSoon);
    message.isPreload !== undefined && (obj.isPreload = message.isPreload);
    message.customReleaseDateMessage !== undefined && (obj.customReleaseDateMessage = message.customReleaseDateMessage);
    message.isAbridgedReleaseDate !== undefined && (obj.isAbridgedReleaseDate = message.isAbridgedReleaseDate);
    message.comingSoonDisplay !== undefined && (obj.comingSoonDisplay = message.comingSoonDisplay);
    message.isEarlyAccess !== undefined && (obj.isEarlyAccess = message.isEarlyAccess);
    message.macReleaseDate !== undefined && (obj.macReleaseDate = Math.round(message.macReleaseDate));
    message.linuxReleaseDate !== undefined && (obj.linuxReleaseDate = Math.round(message.linuxReleaseDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_ReleaseInfo>, I>>(base?: I): StoreItem_ReleaseInfo {
    return StoreItem_ReleaseInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_ReleaseInfo>, I>>(object: I): StoreItem_ReleaseInfo {
    const message = createBaseStoreItem_ReleaseInfo();
    message.steamReleaseDate = object.steamReleaseDate ?? 0;
    message.originalReleaseDate = object.originalReleaseDate ?? 0;
    message.originalSteamReleaseDate = object.originalSteamReleaseDate ?? 0;
    message.isComingSoon = object.isComingSoon ?? false;
    message.isPreload = object.isPreload ?? false;
    message.customReleaseDateMessage = object.customReleaseDateMessage ?? "";
    message.isAbridgedReleaseDate = object.isAbridgedReleaseDate ?? false;
    message.comingSoonDisplay = object.comingSoonDisplay ?? "";
    message.isEarlyAccess = object.isEarlyAccess ?? false;
    message.macReleaseDate = object.macReleaseDate ?? 0;
    message.linuxReleaseDate = object.linuxReleaseDate ?? 0;
    return message;
  },
};

function createBaseStoreItem_Platforms(): StoreItem_Platforms {
  return { windows: false, mac: false, steamosLinux: false, vrSupport: undefined, steamDeckCompatCategory: 0 };
}

export const StoreItem_Platforms = {
  encode(message: StoreItem_Platforms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.windows === true) {
      writer.uint32(8).bool(message.windows);
    }
    if (message.mac === true) {
      writer.uint32(16).bool(message.mac);
    }
    if (message.steamosLinux === true) {
      writer.uint32(24).bool(message.steamosLinux);
    }
    if (message.vrSupport !== undefined) {
      StoreItem_Platforms_VRSupport.encode(message.vrSupport, writer.uint32(82).fork()).ldelim();
    }
    if (message.steamDeckCompatCategory !== 0) {
      writer.uint32(88).int32(message.steamDeckCompatCategory);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Platforms {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Platforms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windows = reader.bool();
          break;
        case 2:
          message.mac = reader.bool();
          break;
        case 3:
          message.steamosLinux = reader.bool();
          break;
        case 10:
          message.vrSupport = StoreItem_Platforms_VRSupport.decode(reader, reader.uint32());
          break;
        case 11:
          message.steamDeckCompatCategory = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Platforms {
    return {
      windows: isSet(object.windows) ? Boolean(object.windows) : false,
      mac: isSet(object.mac) ? Boolean(object.mac) : false,
      steamosLinux: isSet(object.steamosLinux) ? Boolean(object.steamosLinux) : false,
      vrSupport: isSet(object.vrSupport) ? StoreItem_Platforms_VRSupport.fromJSON(object.vrSupport) : undefined,
      steamDeckCompatCategory: isSet(object.steamDeckCompatCategory)
        ? eSteamDeckCompatibilityCategoryFromJSON(object.steamDeckCompatCategory)
        : 0,
    };
  },

  toJSON(message: StoreItem_Platforms): unknown {
    const obj: any = {};
    message.windows !== undefined && (obj.windows = message.windows);
    message.mac !== undefined && (obj.mac = message.mac);
    message.steamosLinux !== undefined && (obj.steamosLinux = message.steamosLinux);
    message.vrSupport !== undefined &&
      (obj.vrSupport = message.vrSupport ? StoreItem_Platforms_VRSupport.toJSON(message.vrSupport) : undefined);
    message.steamDeckCompatCategory !== undefined &&
      (obj.steamDeckCompatCategory = eSteamDeckCompatibilityCategoryToJSON(message.steamDeckCompatCategory));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Platforms>, I>>(base?: I): StoreItem_Platforms {
    return StoreItem_Platforms.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Platforms>, I>>(object: I): StoreItem_Platforms {
    const message = createBaseStoreItem_Platforms();
    message.windows = object.windows ?? false;
    message.mac = object.mac ?? false;
    message.steamosLinux = object.steamosLinux ?? false;
    message.vrSupport = (object.vrSupport !== undefined && object.vrSupport !== null)
      ? StoreItem_Platforms_VRSupport.fromPartial(object.vrSupport)
      : undefined;
    message.steamDeckCompatCategory = object.steamDeckCompatCategory ?? 0;
    return message;
  },
};

function createBaseStoreItem_Platforms_VRSupport(): StoreItem_Platforms_VRSupport {
  return { vrhmd: false, vrhmdOnly: false, htcVive: false, oculusRift: false, windowsMr: false, valveIndex: false };
}

export const StoreItem_Platforms_VRSupport = {
  encode(message: StoreItem_Platforms_VRSupport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vrhmd === true) {
      writer.uint32(8).bool(message.vrhmd);
    }
    if (message.vrhmdOnly === true) {
      writer.uint32(16).bool(message.vrhmdOnly);
    }
    if (message.htcVive === true) {
      writer.uint32(320).bool(message.htcVive);
    }
    if (message.oculusRift === true) {
      writer.uint32(328).bool(message.oculusRift);
    }
    if (message.windowsMr === true) {
      writer.uint32(336).bool(message.windowsMr);
    }
    if (message.valveIndex === true) {
      writer.uint32(344).bool(message.valveIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Platforms_VRSupport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Platforms_VRSupport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vrhmd = reader.bool();
          break;
        case 2:
          message.vrhmdOnly = reader.bool();
          break;
        case 40:
          message.htcVive = reader.bool();
          break;
        case 41:
          message.oculusRift = reader.bool();
          break;
        case 42:
          message.windowsMr = reader.bool();
          break;
        case 43:
          message.valveIndex = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Platforms_VRSupport {
    return {
      vrhmd: isSet(object.vrhmd) ? Boolean(object.vrhmd) : false,
      vrhmdOnly: isSet(object.vrhmdOnly) ? Boolean(object.vrhmdOnly) : false,
      htcVive: isSet(object.htcVive) ? Boolean(object.htcVive) : false,
      oculusRift: isSet(object.oculusRift) ? Boolean(object.oculusRift) : false,
      windowsMr: isSet(object.windowsMr) ? Boolean(object.windowsMr) : false,
      valveIndex: isSet(object.valveIndex) ? Boolean(object.valveIndex) : false,
    };
  },

  toJSON(message: StoreItem_Platforms_VRSupport): unknown {
    const obj: any = {};
    message.vrhmd !== undefined && (obj.vrhmd = message.vrhmd);
    message.vrhmdOnly !== undefined && (obj.vrhmdOnly = message.vrhmdOnly);
    message.htcVive !== undefined && (obj.htcVive = message.htcVive);
    message.oculusRift !== undefined && (obj.oculusRift = message.oculusRift);
    message.windowsMr !== undefined && (obj.windowsMr = message.windowsMr);
    message.valveIndex !== undefined && (obj.valveIndex = message.valveIndex);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Platforms_VRSupport>, I>>(base?: I): StoreItem_Platforms_VRSupport {
    return StoreItem_Platforms_VRSupport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Platforms_VRSupport>, I>>(
    object: I,
  ): StoreItem_Platforms_VRSupport {
    const message = createBaseStoreItem_Platforms_VRSupport();
    message.vrhmd = object.vrhmd ?? false;
    message.vrhmdOnly = object.vrhmdOnly ?? false;
    message.htcVive = object.htcVive ?? false;
    message.oculusRift = object.oculusRift ?? false;
    message.windowsMr = object.windowsMr ?? false;
    message.valveIndex = object.valveIndex ?? false;
    return message;
  },
};

function createBaseStoreItem_PurchaseOption(): StoreItem_PurchaseOption {
  return {
    packageid: 0,
    bundleid: 0,
    purchaseOptionName: "",
    finalPriceInCents: "0",
    originalPriceInCents: "0",
    userFinalPriceInCents: "0",
    formattedFinalPrice: "",
    formattedOriginalPrice: "",
    discountPct: 0,
    userDiscountPct: 0,
    bundleDiscountPct: 0,
    activeDiscounts: [],
    userActiveDiscounts: [],
    inactiveDiscounts: [],
    userCanPurchase: false,
    userCanPurchaseAsGift: false,
    isCommercialLicense: false,
    shouldSuppressDiscountPct: false,
  };
}

export const StoreItem_PurchaseOption = {
  encode(message: StoreItem_PurchaseOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).int32(message.packageid);
    }
    if (message.bundleid !== 0) {
      writer.uint32(16).int32(message.bundleid);
    }
    if (message.purchaseOptionName !== "") {
      writer.uint32(26).string(message.purchaseOptionName);
    }
    if (message.finalPriceInCents !== "0") {
      writer.uint32(40).int64(message.finalPriceInCents);
    }
    if (message.originalPriceInCents !== "0") {
      writer.uint32(48).int64(message.originalPriceInCents);
    }
    if (message.userFinalPriceInCents !== "0") {
      writer.uint32(56).int64(message.userFinalPriceInCents);
    }
    if (message.formattedFinalPrice !== "") {
      writer.uint32(66).string(message.formattedFinalPrice);
    }
    if (message.formattedOriginalPrice !== "") {
      writer.uint32(74).string(message.formattedOriginalPrice);
    }
    if (message.discountPct !== 0) {
      writer.uint32(80).int32(message.discountPct);
    }
    if (message.userDiscountPct !== 0) {
      writer.uint32(88).int32(message.userDiscountPct);
    }
    if (message.bundleDiscountPct !== 0) {
      writer.uint32(96).int32(message.bundleDiscountPct);
    }
    for (const v of message.activeDiscounts) {
      StoreItem_PurchaseOption_Discount.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.userActiveDiscounts) {
      StoreItem_PurchaseOption_Discount.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.inactiveDiscounts) {
      StoreItem_PurchaseOption_Discount.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.userCanPurchase === true) {
      writer.uint32(240).bool(message.userCanPurchase);
    }
    if (message.userCanPurchaseAsGift === true) {
      writer.uint32(248).bool(message.userCanPurchaseAsGift);
    }
    if (message.isCommercialLicense === true) {
      writer.uint32(320).bool(message.isCommercialLicense);
    }
    if (message.shouldSuppressDiscountPct === true) {
      writer.uint32(328).bool(message.shouldSuppressDiscountPct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_PurchaseOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_PurchaseOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.int32();
          break;
        case 2:
          message.bundleid = reader.int32();
          break;
        case 3:
          message.purchaseOptionName = reader.string();
          break;
        case 5:
          message.finalPriceInCents = longToString(reader.int64() as Long);
          break;
        case 6:
          message.originalPriceInCents = longToString(reader.int64() as Long);
          break;
        case 7:
          message.userFinalPriceInCents = longToString(reader.int64() as Long);
          break;
        case 8:
          message.formattedFinalPrice = reader.string();
          break;
        case 9:
          message.formattedOriginalPrice = reader.string();
          break;
        case 10:
          message.discountPct = reader.int32();
          break;
        case 11:
          message.userDiscountPct = reader.int32();
          break;
        case 12:
          message.bundleDiscountPct = reader.int32();
          break;
        case 20:
          message.activeDiscounts.push(StoreItem_PurchaseOption_Discount.decode(reader, reader.uint32()));
          break;
        case 21:
          message.userActiveDiscounts.push(StoreItem_PurchaseOption_Discount.decode(reader, reader.uint32()));
          break;
        case 22:
          message.inactiveDiscounts.push(StoreItem_PurchaseOption_Discount.decode(reader, reader.uint32()));
          break;
        case 30:
          message.userCanPurchase = reader.bool();
          break;
        case 31:
          message.userCanPurchaseAsGift = reader.bool();
          break;
        case 40:
          message.isCommercialLicense = reader.bool();
          break;
        case 41:
          message.shouldSuppressDiscountPct = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_PurchaseOption {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      bundleid: isSet(object.bundleid) ? Number(object.bundleid) : 0,
      purchaseOptionName: isSet(object.purchaseOptionName) ? String(object.purchaseOptionName) : "",
      finalPriceInCents: isSet(object.finalPriceInCents) ? String(object.finalPriceInCents) : "0",
      originalPriceInCents: isSet(object.originalPriceInCents) ? String(object.originalPriceInCents) : "0",
      userFinalPriceInCents: isSet(object.userFinalPriceInCents) ? String(object.userFinalPriceInCents) : "0",
      formattedFinalPrice: isSet(object.formattedFinalPrice) ? String(object.formattedFinalPrice) : "",
      formattedOriginalPrice: isSet(object.formattedOriginalPrice) ? String(object.formattedOriginalPrice) : "",
      discountPct: isSet(object.discountPct) ? Number(object.discountPct) : 0,
      userDiscountPct: isSet(object.userDiscountPct) ? Number(object.userDiscountPct) : 0,
      bundleDiscountPct: isSet(object.bundleDiscountPct) ? Number(object.bundleDiscountPct) : 0,
      activeDiscounts: Array.isArray(object?.activeDiscounts)
        ? object.activeDiscounts.map((e: any) => StoreItem_PurchaseOption_Discount.fromJSON(e))
        : [],
      userActiveDiscounts: Array.isArray(object?.userActiveDiscounts)
        ? object.userActiveDiscounts.map((e: any) => StoreItem_PurchaseOption_Discount.fromJSON(e))
        : [],
      inactiveDiscounts: Array.isArray(object?.inactiveDiscounts)
        ? object.inactiveDiscounts.map((e: any) => StoreItem_PurchaseOption_Discount.fromJSON(e))
        : [],
      userCanPurchase: isSet(object.userCanPurchase) ? Boolean(object.userCanPurchase) : false,
      userCanPurchaseAsGift: isSet(object.userCanPurchaseAsGift) ? Boolean(object.userCanPurchaseAsGift) : false,
      isCommercialLicense: isSet(object.isCommercialLicense) ? Boolean(object.isCommercialLicense) : false,
      shouldSuppressDiscountPct: isSet(object.shouldSuppressDiscountPct)
        ? Boolean(object.shouldSuppressDiscountPct)
        : false,
    };
  },

  toJSON(message: StoreItem_PurchaseOption): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.bundleid !== undefined && (obj.bundleid = Math.round(message.bundleid));
    message.purchaseOptionName !== undefined && (obj.purchaseOptionName = message.purchaseOptionName);
    message.finalPriceInCents !== undefined && (obj.finalPriceInCents = message.finalPriceInCents);
    message.originalPriceInCents !== undefined && (obj.originalPriceInCents = message.originalPriceInCents);
    message.userFinalPriceInCents !== undefined && (obj.userFinalPriceInCents = message.userFinalPriceInCents);
    message.formattedFinalPrice !== undefined && (obj.formattedFinalPrice = message.formattedFinalPrice);
    message.formattedOriginalPrice !== undefined && (obj.formattedOriginalPrice = message.formattedOriginalPrice);
    message.discountPct !== undefined && (obj.discountPct = Math.round(message.discountPct));
    message.userDiscountPct !== undefined && (obj.userDiscountPct = Math.round(message.userDiscountPct));
    message.bundleDiscountPct !== undefined && (obj.bundleDiscountPct = Math.round(message.bundleDiscountPct));
    if (message.activeDiscounts) {
      obj.activeDiscounts = message.activeDiscounts.map((e) =>
        e ? StoreItem_PurchaseOption_Discount.toJSON(e) : undefined
      );
    } else {
      obj.activeDiscounts = [];
    }
    if (message.userActiveDiscounts) {
      obj.userActiveDiscounts = message.userActiveDiscounts.map((e) =>
        e ? StoreItem_PurchaseOption_Discount.toJSON(e) : undefined
      );
    } else {
      obj.userActiveDiscounts = [];
    }
    if (message.inactiveDiscounts) {
      obj.inactiveDiscounts = message.inactiveDiscounts.map((e) =>
        e ? StoreItem_PurchaseOption_Discount.toJSON(e) : undefined
      );
    } else {
      obj.inactiveDiscounts = [];
    }
    message.userCanPurchase !== undefined && (obj.userCanPurchase = message.userCanPurchase);
    message.userCanPurchaseAsGift !== undefined && (obj.userCanPurchaseAsGift = message.userCanPurchaseAsGift);
    message.isCommercialLicense !== undefined && (obj.isCommercialLicense = message.isCommercialLicense);
    message.shouldSuppressDiscountPct !== undefined &&
      (obj.shouldSuppressDiscountPct = message.shouldSuppressDiscountPct);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_PurchaseOption>, I>>(base?: I): StoreItem_PurchaseOption {
    return StoreItem_PurchaseOption.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_PurchaseOption>, I>>(object: I): StoreItem_PurchaseOption {
    const message = createBaseStoreItem_PurchaseOption();
    message.packageid = object.packageid ?? 0;
    message.bundleid = object.bundleid ?? 0;
    message.purchaseOptionName = object.purchaseOptionName ?? "";
    message.finalPriceInCents = object.finalPriceInCents ?? "0";
    message.originalPriceInCents = object.originalPriceInCents ?? "0";
    message.userFinalPriceInCents = object.userFinalPriceInCents ?? "0";
    message.formattedFinalPrice = object.formattedFinalPrice ?? "";
    message.formattedOriginalPrice = object.formattedOriginalPrice ?? "";
    message.discountPct = object.discountPct ?? 0;
    message.userDiscountPct = object.userDiscountPct ?? 0;
    message.bundleDiscountPct = object.bundleDiscountPct ?? 0;
    message.activeDiscounts = object.activeDiscounts?.map((e) => StoreItem_PurchaseOption_Discount.fromPartial(e)) ||
      [];
    message.userActiveDiscounts =
      object.userActiveDiscounts?.map((e) => StoreItem_PurchaseOption_Discount.fromPartial(e)) || [];
    message.inactiveDiscounts =
      object.inactiveDiscounts?.map((e) => StoreItem_PurchaseOption_Discount.fromPartial(e)) || [];
    message.userCanPurchase = object.userCanPurchase ?? false;
    message.userCanPurchaseAsGift = object.userCanPurchaseAsGift ?? false;
    message.isCommercialLicense = object.isCommercialLicense ?? false;
    message.shouldSuppressDiscountPct = object.shouldSuppressDiscountPct ?? false;
    return message;
  },
};

function createBaseStoreItem_PurchaseOption_Discount(): StoreItem_PurchaseOption_Discount {
  return { discountAmount: "0", discountDescription: "", discountEndDate: 0 };
}

export const StoreItem_PurchaseOption_Discount = {
  encode(message: StoreItem_PurchaseOption_Discount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.discountAmount !== "0") {
      writer.uint32(8).int64(message.discountAmount);
    }
    if (message.discountDescription !== "") {
      writer.uint32(18).string(message.discountDescription);
    }
    if (message.discountEndDate !== 0) {
      writer.uint32(24).uint32(message.discountEndDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_PurchaseOption_Discount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_PurchaseOption_Discount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discountAmount = longToString(reader.int64() as Long);
          break;
        case 2:
          message.discountDescription = reader.string();
          break;
        case 3:
          message.discountEndDate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_PurchaseOption_Discount {
    return {
      discountAmount: isSet(object.discountAmount) ? String(object.discountAmount) : "0",
      discountDescription: isSet(object.discountDescription) ? String(object.discountDescription) : "",
      discountEndDate: isSet(object.discountEndDate) ? Number(object.discountEndDate) : 0,
    };
  },

  toJSON(message: StoreItem_PurchaseOption_Discount): unknown {
    const obj: any = {};
    message.discountAmount !== undefined && (obj.discountAmount = message.discountAmount);
    message.discountDescription !== undefined && (obj.discountDescription = message.discountDescription);
    message.discountEndDate !== undefined && (obj.discountEndDate = Math.round(message.discountEndDate));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_PurchaseOption_Discount>, I>>(
    base?: I,
  ): StoreItem_PurchaseOption_Discount {
    return StoreItem_PurchaseOption_Discount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_PurchaseOption_Discount>, I>>(
    object: I,
  ): StoreItem_PurchaseOption_Discount {
    const message = createBaseStoreItem_PurchaseOption_Discount();
    message.discountAmount = object.discountAmount ?? "0";
    message.discountDescription = object.discountDescription ?? "";
    message.discountEndDate = object.discountEndDate ?? 0;
    return message;
  },
};

function createBaseStoreItem_Screenshots(): StoreItem_Screenshots {
  return { allAgesScreenshots: [], matureContentScreenshots: [] };
}

export const StoreItem_Screenshots = {
  encode(message: StoreItem_Screenshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allAgesScreenshots) {
      StoreItem_Screenshots_Screenshot.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.matureContentScreenshots) {
      StoreItem_Screenshots_Screenshot.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Screenshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Screenshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.allAgesScreenshots.push(StoreItem_Screenshots_Screenshot.decode(reader, reader.uint32()));
          break;
        case 3:
          message.matureContentScreenshots.push(StoreItem_Screenshots_Screenshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Screenshots {
    return {
      allAgesScreenshots: Array.isArray(object?.allAgesScreenshots)
        ? object.allAgesScreenshots.map((e: any) => StoreItem_Screenshots_Screenshot.fromJSON(e))
        : [],
      matureContentScreenshots: Array.isArray(object?.matureContentScreenshots)
        ? object.matureContentScreenshots.map((e: any) => StoreItem_Screenshots_Screenshot.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StoreItem_Screenshots): unknown {
    const obj: any = {};
    if (message.allAgesScreenshots) {
      obj.allAgesScreenshots = message.allAgesScreenshots.map((e) =>
        e ? StoreItem_Screenshots_Screenshot.toJSON(e) : undefined
      );
    } else {
      obj.allAgesScreenshots = [];
    }
    if (message.matureContentScreenshots) {
      obj.matureContentScreenshots = message.matureContentScreenshots.map((e) =>
        e ? StoreItem_Screenshots_Screenshot.toJSON(e) : undefined
      );
    } else {
      obj.matureContentScreenshots = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Screenshots>, I>>(base?: I): StoreItem_Screenshots {
    return StoreItem_Screenshots.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Screenshots>, I>>(object: I): StoreItem_Screenshots {
    const message = createBaseStoreItem_Screenshots();
    message.allAgesScreenshots =
      object.allAgesScreenshots?.map((e) => StoreItem_Screenshots_Screenshot.fromPartial(e)) || [];
    message.matureContentScreenshots =
      object.matureContentScreenshots?.map((e) => StoreItem_Screenshots_Screenshot.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStoreItem_Screenshots_Screenshot(): StoreItem_Screenshots_Screenshot {
  return { filename: "", ordinal: 0 };
}

export const StoreItem_Screenshots_Screenshot = {
  encode(message: StoreItem_Screenshots_Screenshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.ordinal !== 0) {
      writer.uint32(16).int32(message.ordinal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Screenshots_Screenshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Screenshots_Screenshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.ordinal = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Screenshots_Screenshot {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
    };
  },

  toJSON(message: StoreItem_Screenshots_Screenshot): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Screenshots_Screenshot>, I>>(
    base?: I,
  ): StoreItem_Screenshots_Screenshot {
    return StoreItem_Screenshots_Screenshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Screenshots_Screenshot>, I>>(
    object: I,
  ): StoreItem_Screenshots_Screenshot {
    const message = createBaseStoreItem_Screenshots_Screenshot();
    message.filename = object.filename ?? "";
    message.ordinal = object.ordinal ?? 0;
    return message;
  },
};

function createBaseStoreItem_Trailers(): StoreItem_Trailers {
  return { highlights: [], otherTrailers: [] };
}

export const StoreItem_Trailers = {
  encode(message: StoreItem_Trailers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.highlights) {
      StoreItem_Trailers_Trailer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.otherTrailers) {
      StoreItem_Trailers_Trailer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Trailers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Trailers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.highlights.push(StoreItem_Trailers_Trailer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.otherTrailers.push(StoreItem_Trailers_Trailer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Trailers {
    return {
      highlights: Array.isArray(object?.highlights)
        ? object.highlights.map((e: any) => StoreItem_Trailers_Trailer.fromJSON(e))
        : [],
      otherTrailers: Array.isArray(object?.otherTrailers)
        ? object.otherTrailers.map((e: any) => StoreItem_Trailers_Trailer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StoreItem_Trailers): unknown {
    const obj: any = {};
    if (message.highlights) {
      obj.highlights = message.highlights.map((e) => e ? StoreItem_Trailers_Trailer.toJSON(e) : undefined);
    } else {
      obj.highlights = [];
    }
    if (message.otherTrailers) {
      obj.otherTrailers = message.otherTrailers.map((e) => e ? StoreItem_Trailers_Trailer.toJSON(e) : undefined);
    } else {
      obj.otherTrailers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Trailers>, I>>(base?: I): StoreItem_Trailers {
    return StoreItem_Trailers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Trailers>, I>>(object: I): StoreItem_Trailers {
    const message = createBaseStoreItem_Trailers();
    message.highlights = object.highlights?.map((e) => StoreItem_Trailers_Trailer.fromPartial(e)) || [];
    message.otherTrailers = object.otherTrailers?.map((e) => StoreItem_Trailers_Trailer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStoreItem_Trailers_VideoSource(): StoreItem_Trailers_VideoSource {
  return { filename: "", type: "" };
}

export const StoreItem_Trailers_VideoSource = {
  encode(message: StoreItem_Trailers_VideoSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Trailers_VideoSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Trailers_VideoSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Trailers_VideoSource {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: StoreItem_Trailers_VideoSource): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Trailers_VideoSource>, I>>(base?: I): StoreItem_Trailers_VideoSource {
    return StoreItem_Trailers_VideoSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Trailers_VideoSource>, I>>(
    object: I,
  ): StoreItem_Trailers_VideoSource {
    const message = createBaseStoreItem_Trailers_VideoSource();
    message.filename = object.filename ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseStoreItem_Trailers_Trailer(): StoreItem_Trailers_Trailer {
  return {
    trailerName: "",
    trailerUrlFormat: "",
    trailer480p: [],
    trailerMax: [],
    microtrailer: [],
    screenshotMedium: "",
    screenshotFull: "",
    trailerBaseId: 0,
  };
}

export const StoreItem_Trailers_Trailer = {
  encode(message: StoreItem_Trailers_Trailer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trailerName !== "") {
      writer.uint32(10).string(message.trailerName);
    }
    if (message.trailerUrlFormat !== "") {
      writer.uint32(18).string(message.trailerUrlFormat);
    }
    for (const v of message.trailer480p) {
      StoreItem_Trailers_VideoSource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.trailerMax) {
      StoreItem_Trailers_VideoSource.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.microtrailer) {
      StoreItem_Trailers_VideoSource.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.screenshotMedium !== "") {
      writer.uint32(82).string(message.screenshotMedium);
    }
    if (message.screenshotFull !== "") {
      writer.uint32(90).string(message.screenshotFull);
    }
    if (message.trailerBaseId !== 0) {
      writer.uint32(96).int32(message.trailerBaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_Trailers_Trailer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_Trailers_Trailer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trailerName = reader.string();
          break;
        case 2:
          message.trailerUrlFormat = reader.string();
          break;
        case 3:
          message.trailer480p.push(StoreItem_Trailers_VideoSource.decode(reader, reader.uint32()));
          break;
        case 4:
          message.trailerMax.push(StoreItem_Trailers_VideoSource.decode(reader, reader.uint32()));
          break;
        case 5:
          message.microtrailer.push(StoreItem_Trailers_VideoSource.decode(reader, reader.uint32()));
          break;
        case 10:
          message.screenshotMedium = reader.string();
          break;
        case 11:
          message.screenshotFull = reader.string();
          break;
        case 12:
          message.trailerBaseId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_Trailers_Trailer {
    return {
      trailerName: isSet(object.trailerName) ? String(object.trailerName) : "",
      trailerUrlFormat: isSet(object.trailerUrlFormat) ? String(object.trailerUrlFormat) : "",
      trailer480p: Array.isArray(object?.trailer480p)
        ? object.trailer480p.map((e: any) => StoreItem_Trailers_VideoSource.fromJSON(e))
        : [],
      trailerMax: Array.isArray(object?.trailerMax)
        ? object.trailerMax.map((e: any) => StoreItem_Trailers_VideoSource.fromJSON(e))
        : [],
      microtrailer: Array.isArray(object?.microtrailer)
        ? object.microtrailer.map((e: any) => StoreItem_Trailers_VideoSource.fromJSON(e))
        : [],
      screenshotMedium: isSet(object.screenshotMedium) ? String(object.screenshotMedium) : "",
      screenshotFull: isSet(object.screenshotFull) ? String(object.screenshotFull) : "",
      trailerBaseId: isSet(object.trailerBaseId) ? Number(object.trailerBaseId) : 0,
    };
  },

  toJSON(message: StoreItem_Trailers_Trailer): unknown {
    const obj: any = {};
    message.trailerName !== undefined && (obj.trailerName = message.trailerName);
    message.trailerUrlFormat !== undefined && (obj.trailerUrlFormat = message.trailerUrlFormat);
    if (message.trailer480p) {
      obj.trailer480p = message.trailer480p.map((e) => e ? StoreItem_Trailers_VideoSource.toJSON(e) : undefined);
    } else {
      obj.trailer480p = [];
    }
    if (message.trailerMax) {
      obj.trailerMax = message.trailerMax.map((e) => e ? StoreItem_Trailers_VideoSource.toJSON(e) : undefined);
    } else {
      obj.trailerMax = [];
    }
    if (message.microtrailer) {
      obj.microtrailer = message.microtrailer.map((e) => e ? StoreItem_Trailers_VideoSource.toJSON(e) : undefined);
    } else {
      obj.microtrailer = [];
    }
    message.screenshotMedium !== undefined && (obj.screenshotMedium = message.screenshotMedium);
    message.screenshotFull !== undefined && (obj.screenshotFull = message.screenshotFull);
    message.trailerBaseId !== undefined && (obj.trailerBaseId = Math.round(message.trailerBaseId));
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_Trailers_Trailer>, I>>(base?: I): StoreItem_Trailers_Trailer {
    return StoreItem_Trailers_Trailer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_Trailers_Trailer>, I>>(object: I): StoreItem_Trailers_Trailer {
    const message = createBaseStoreItem_Trailers_Trailer();
    message.trailerName = object.trailerName ?? "";
    message.trailerUrlFormat = object.trailerUrlFormat ?? "";
    message.trailer480p = object.trailer480p?.map((e) => StoreItem_Trailers_VideoSource.fromPartial(e)) || [];
    message.trailerMax = object.trailerMax?.map((e) => StoreItem_Trailers_VideoSource.fromPartial(e)) || [];
    message.microtrailer = object.microtrailer?.map((e) => StoreItem_Trailers_VideoSource.fromPartial(e)) || [];
    message.screenshotMedium = object.screenshotMedium ?? "";
    message.screenshotFull = object.screenshotFull ?? "";
    message.trailerBaseId = object.trailerBaseId ?? 0;
    return message;
  },
};

function createBaseStoreItem_SupportedLanguage(): StoreItem_SupportedLanguage {
  return { elanguage: 0, supported: false, fullAudio: false, subtitles: false };
}

export const StoreItem_SupportedLanguage = {
  encode(message: StoreItem_SupportedLanguage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.elanguage !== 0) {
      writer.uint32(8).int32(message.elanguage);
    }
    if (message.supported === true) {
      writer.uint32(16).bool(message.supported);
    }
    if (message.fullAudio === true) {
      writer.uint32(24).bool(message.fullAudio);
    }
    if (message.subtitles === true) {
      writer.uint32(32).bool(message.subtitles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_SupportedLanguage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_SupportedLanguage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elanguage = reader.int32();
          break;
        case 2:
          message.supported = reader.bool();
          break;
        case 3:
          message.fullAudio = reader.bool();
          break;
        case 4:
          message.subtitles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_SupportedLanguage {
    return {
      elanguage: isSet(object.elanguage) ? Number(object.elanguage) : 0,
      supported: isSet(object.supported) ? Boolean(object.supported) : false,
      fullAudio: isSet(object.fullAudio) ? Boolean(object.fullAudio) : false,
      subtitles: isSet(object.subtitles) ? Boolean(object.subtitles) : false,
    };
  },

  toJSON(message: StoreItem_SupportedLanguage): unknown {
    const obj: any = {};
    message.elanguage !== undefined && (obj.elanguage = Math.round(message.elanguage));
    message.supported !== undefined && (obj.supported = message.supported);
    message.fullAudio !== undefined && (obj.fullAudio = message.fullAudio);
    message.subtitles !== undefined && (obj.subtitles = message.subtitles);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_SupportedLanguage>, I>>(base?: I): StoreItem_SupportedLanguage {
    return StoreItem_SupportedLanguage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_SupportedLanguage>, I>>(object: I): StoreItem_SupportedLanguage {
    const message = createBaseStoreItem_SupportedLanguage();
    message.elanguage = object.elanguage ?? 0;
    message.supported = object.supported ?? false;
    message.fullAudio = object.fullAudio ?? false;
    message.subtitles = object.subtitles ?? false;
    return message;
  },
};

function createBaseStoreItem_FreeWeekend(): StoreItem_FreeWeekend {
  return { startTime: 0, endTime: 0, text: "" };
}

export const StoreItem_FreeWeekend = {
  encode(message: StoreItem_FreeWeekend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(8).uint32(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(16).uint32(message.endTime);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreItem_FreeWeekend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreItem_FreeWeekend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = reader.uint32();
          break;
        case 2:
          message.endTime = reader.uint32();
          break;
        case 3:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreItem_FreeWeekend {
    return {
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: StoreItem_FreeWeekend): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.endTime !== undefined && (obj.endTime = Math.round(message.endTime));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<StoreItem_FreeWeekend>, I>>(base?: I): StoreItem_FreeWeekend {
    return StoreItem_FreeWeekend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoreItem_FreeWeekend>, I>>(object: I): StoreItem_FreeWeekend {
    const message = createBaseStoreItem_FreeWeekend();
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCStoreBrowseGetItemsResponse(): CStoreBrowseGetItemsResponse {
  return { storeItems: [] };
}

export const CStoreBrowseGetItemsResponse = {
  encode(message: CStoreBrowseGetItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storeItems) {
      StoreItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeItems.push(StoreItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetItemsResponse {
    return {
      storeItems: Array.isArray(object?.storeItems) ? object.storeItems.map((e: any) => StoreItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: CStoreBrowseGetItemsResponse): unknown {
    const obj: any = {};
    if (message.storeItems) {
      obj.storeItems = message.storeItems.map((e) => e ? StoreItem.toJSON(e) : undefined);
    } else {
      obj.storeItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetItemsResponse>, I>>(base?: I): CStoreBrowseGetItemsResponse {
    return CStoreBrowseGetItemsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetItemsResponse>, I>>(object: I): CStoreBrowseGetItemsResponse {
    const message = createBaseCStoreBrowseGetItemsResponse();
    message.storeItems = object.storeItems?.map((e) => StoreItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreBrowseGetStoreCategoriesRequest(): CStoreBrowseGetStoreCategoriesRequest {
  return { language: "", elanguage: 0 };
}

export const CStoreBrowseGetStoreCategoriesRequest = {
  encode(message: CStoreBrowseGetStoreCategoriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    if (message.elanguage !== 0) {
      writer.uint32(16).int32(message.elanguage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetStoreCategoriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetStoreCategoriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        case 2:
          message.elanguage = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetStoreCategoriesRequest {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      elanguage: isSet(object.elanguage) ? Number(object.elanguage) : 0,
    };
  },

  toJSON(message: CStoreBrowseGetStoreCategoriesRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    message.elanguage !== undefined && (obj.elanguage = Math.round(message.elanguage));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesRequest>, I>>(
    base?: I,
  ): CStoreBrowseGetStoreCategoriesRequest {
    return CStoreBrowseGetStoreCategoriesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesRequest>, I>>(
    object: I,
  ): CStoreBrowseGetStoreCategoriesRequest {
    const message = createBaseCStoreBrowseGetStoreCategoriesRequest();
    message.language = object.language ?? "";
    message.elanguage = object.elanguage ?? 0;
    return message;
  },
};

function createBaseCStoreBrowseGetStoreCategoriesResponse(): CStoreBrowseGetStoreCategoriesResponse {
  return { categories: [] };
}

export const CStoreBrowseGetStoreCategoriesResponse = {
  encode(message: CStoreBrowseGetStoreCategoriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.categories) {
      CStoreBrowseGetStoreCategoriesResponse_Category.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetStoreCategoriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetStoreCategoriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categories.push(CStoreBrowseGetStoreCategoriesResponse_Category.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetStoreCategoriesResponse {
    return {
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => CStoreBrowseGetStoreCategoriesResponse_Category.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreBrowseGetStoreCategoriesResponse): unknown {
    const obj: any = {};
    if (message.categories) {
      obj.categories = message.categories.map((e) =>
        e ? CStoreBrowseGetStoreCategoriesResponse_Category.toJSON(e) : undefined
      );
    } else {
      obj.categories = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesResponse>, I>>(
    base?: I,
  ): CStoreBrowseGetStoreCategoriesResponse {
    return CStoreBrowseGetStoreCategoriesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesResponse>, I>>(
    object: I,
  ): CStoreBrowseGetStoreCategoriesResponse {
    const message = createBaseCStoreBrowseGetStoreCategoriesResponse();
    message.categories =
      object.categories?.map((e) => CStoreBrowseGetStoreCategoriesResponse_Category.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreBrowseGetStoreCategoriesResponse_Category(): CStoreBrowseGetStoreCategoriesResponse_Category {
  return { categoryid: 0, type: 0, internalName: "", displayName: "", imageUrl: "", showInSearch: false };
}

export const CStoreBrowseGetStoreCategoriesResponse_Category = {
  encode(
    message: CStoreBrowseGetStoreCategoriesResponse_Category,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.categoryid !== 0) {
      writer.uint32(8).uint32(message.categoryid);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.internalName !== "") {
      writer.uint32(26).string(message.internalName);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    if (message.imageUrl !== "") {
      writer.uint32(42).string(message.imageUrl);
    }
    if (message.showInSearch === true) {
      writer.uint32(48).bool(message.showInSearch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetStoreCategoriesResponse_Category {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetStoreCategoriesResponse_Category();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryid = reader.uint32();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.internalName = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 5:
          message.imageUrl = reader.string();
          break;
        case 6:
          message.showInSearch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetStoreCategoriesResponse_Category {
    return {
      categoryid: isSet(object.categoryid) ? Number(object.categoryid) : 0,
      type: isSet(object.type) ? eStoreCategoryTypeFromJSON(object.type) : 0,
      internalName: isSet(object.internalName) ? String(object.internalName) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      showInSearch: isSet(object.showInSearch) ? Boolean(object.showInSearch) : false,
    };
  },

  toJSON(message: CStoreBrowseGetStoreCategoriesResponse_Category): unknown {
    const obj: any = {};
    message.categoryid !== undefined && (obj.categoryid = Math.round(message.categoryid));
    message.type !== undefined && (obj.type = eStoreCategoryTypeToJSON(message.type));
    message.internalName !== undefined && (obj.internalName = message.internalName);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.showInSearch !== undefined && (obj.showInSearch = message.showInSearch);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesResponse_Category>, I>>(
    base?: I,
  ): CStoreBrowseGetStoreCategoriesResponse_Category {
    return CStoreBrowseGetStoreCategoriesResponse_Category.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetStoreCategoriesResponse_Category>, I>>(
    object: I,
  ): CStoreBrowseGetStoreCategoriesResponse_Category {
    const message = createBaseCStoreBrowseGetStoreCategoriesResponse_Category();
    message.categoryid = object.categoryid ?? 0;
    message.type = object.type ?? 0;
    message.internalName = object.internalName ?? "";
    message.displayName = object.displayName ?? "";
    message.imageUrl = object.imageUrl ?? "";
    message.showInSearch = object.showInSearch ?? false;
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsRequest(): CStoreBrowseGetDLCForAppsRequest {
  return { context: undefined, storePageFilter: undefined, appids: [], steamid: "0" };
}

export const CStoreBrowseGetDLCForAppsRequest = {
  encode(message: CStoreBrowseGetDLCForAppsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.context !== undefined) {
      StoreBrowseContext.encode(message.context, writer.uint32(10).fork()).ldelim();
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.appids) {
      StoreItemID.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.steamid !== "0") {
      writer.uint32(32).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = StoreBrowseContext.decode(reader, reader.uint32());
          break;
        case 2:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        case 3:
          message.appids.push(StoreItemID.decode(reader, reader.uint32()));
          break;
        case 4:
          message.steamid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsRequest {
    return {
      context: isSet(object.context) ? StoreBrowseContext.fromJSON(object.context) : undefined,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => StoreItemID.fromJSON(e)) : [],
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsRequest): unknown {
    const obj: any = {};
    message.context !== undefined &&
      (obj.context = message.context ? StoreBrowseContext.toJSON(message.context) : undefined);
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    if (message.appids) {
      obj.appids = message.appids.map((e) => e ? StoreItemID.toJSON(e) : undefined);
    } else {
      obj.appids = [];
    }
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsRequest>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsRequest {
    return CStoreBrowseGetDLCForAppsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsRequest>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsRequest {
    const message = createBaseCStoreBrowseGetDLCForAppsRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? StoreBrowseContext.fromPartial(object.context)
      : undefined;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    message.appids = object.appids?.map((e) => StoreItemID.fromPartial(e)) || [];
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsResponse(): CStoreBrowseGetDLCForAppsResponse {
  return { dlcData: [], playtime: [] };
}

export const CStoreBrowseGetDLCForAppsResponse = {
  encode(message: CStoreBrowseGetDLCForAppsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dlcData) {
      CStoreBrowseGetDLCForAppsResponse_DLCData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.playtime) {
      CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dlcData.push(CStoreBrowseGetDLCForAppsResponse_DLCData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.playtime.push(CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsResponse {
    return {
      dlcData: Array.isArray(object?.dlcData)
        ? object.dlcData.map((e: any) => CStoreBrowseGetDLCForAppsResponse_DLCData.fromJSON(e))
        : [],
      playtime: Array.isArray(object?.playtime)
        ? object.playtime.map((e: any) => CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsResponse): unknown {
    const obj: any = {};
    if (message.dlcData) {
      obj.dlcData = message.dlcData.map((e) => e ? CStoreBrowseGetDLCForAppsResponse_DLCData.toJSON(e) : undefined);
    } else {
      obj.dlcData = [];
    }
    if (message.playtime) {
      obj.playtime = message.playtime.map((e) =>
        e ? CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.toJSON(e) : undefined
      );
    } else {
      obj.playtime = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsResponse {
    return CStoreBrowseGetDLCForAppsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsResponse {
    const message = createBaseCStoreBrowseGetDLCForAppsResponse();
    message.dlcData = object.dlcData?.map((e) => CStoreBrowseGetDLCForAppsResponse_DLCData.fromPartial(e)) || [];
    message.playtime = object.playtime?.map((e) => CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsResponse_DLCData(): CStoreBrowseGetDLCForAppsResponse_DLCData {
  return { appid: 0, parentappid: 0, releaseDate: 0, comingSoon: false, price: "0", discount: 0, free: false };
}

export const CStoreBrowseGetDLCForAppsResponse_DLCData = {
  encode(message: CStoreBrowseGetDLCForAppsResponse_DLCData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.parentappid !== 0) {
      writer.uint32(16).uint32(message.parentappid);
    }
    if (message.releaseDate !== 0) {
      writer.uint32(24).uint32(message.releaseDate);
    }
    if (message.comingSoon === true) {
      writer.uint32(32).bool(message.comingSoon);
    }
    if (message.price !== "0") {
      writer.uint32(40).int64(message.price);
    }
    if (message.discount !== 0) {
      writer.uint32(48).uint32(message.discount);
    }
    if (message.free === true) {
      writer.uint32(56).bool(message.free);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsResponse_DLCData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsResponse_DLCData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.parentappid = reader.uint32();
          break;
        case 3:
          message.releaseDate = reader.uint32();
          break;
        case 4:
          message.comingSoon = reader.bool();
          break;
        case 5:
          message.price = longToString(reader.int64() as Long);
          break;
        case 6:
          message.discount = reader.uint32();
          break;
        case 7:
          message.free = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsResponse_DLCData {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      parentappid: isSet(object.parentappid) ? Number(object.parentappid) : 0,
      releaseDate: isSet(object.releaseDate) ? Number(object.releaseDate) : 0,
      comingSoon: isSet(object.comingSoon) ? Boolean(object.comingSoon) : false,
      price: isSet(object.price) ? String(object.price) : "0",
      discount: isSet(object.discount) ? Number(object.discount) : 0,
      free: isSet(object.free) ? Boolean(object.free) : false,
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsResponse_DLCData): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.parentappid !== undefined && (obj.parentappid = Math.round(message.parentappid));
    message.releaseDate !== undefined && (obj.releaseDate = Math.round(message.releaseDate));
    message.comingSoon !== undefined && (obj.comingSoon = message.comingSoon);
    message.price !== undefined && (obj.price = message.price);
    message.discount !== undefined && (obj.discount = Math.round(message.discount));
    message.free !== undefined && (obj.free = message.free);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse_DLCData>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsResponse_DLCData {
    return CStoreBrowseGetDLCForAppsResponse_DLCData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse_DLCData>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsResponse_DLCData {
    const message = createBaseCStoreBrowseGetDLCForAppsResponse_DLCData();
    message.appid = object.appid ?? 0;
    message.parentappid = object.parentappid ?? 0;
    message.releaseDate = object.releaseDate ?? 0;
    message.comingSoon = object.comingSoon ?? false;
    message.price = object.price ?? "0";
    message.discount = object.discount ?? 0;
    message.free = object.free ?? false;
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsResponse_PlaytimeForApp(): CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
  return { appid: 0, playtime: 0, lastPlayed: 0 };
}

export const CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp = {
  encode(
    message: CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.playtime !== 0) {
      writer.uint32(16).uint32(message.playtime);
    }
    if (message.lastPlayed !== 0) {
      writer.uint32(24).uint32(message.lastPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsResponse_PlaytimeForApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.playtime = reader.uint32();
          break;
        case 3:
          message.lastPlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      playtime: isSet(object.playtime) ? Number(object.playtime) : 0,
      lastPlayed: isSet(object.lastPlayed) ? Number(object.lastPlayed) : 0,
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.playtime !== undefined && (obj.playtime = Math.round(message.playtime));
    message.lastPlayed !== undefined && (obj.lastPlayed = Math.round(message.lastPlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
    return CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsResponse_PlaytimeForApp {
    const message = createBaseCStoreBrowseGetDLCForAppsResponse_PlaytimeForApp();
    message.appid = object.appid ?? 0;
    message.playtime = object.playtime ?? 0;
    message.lastPlayed = object.lastPlayed ?? 0;
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsSolrRequest(): CStoreBrowseGetDLCForAppsSolrRequest {
  return { context: undefined, appids: [], flavor: "", count: 0, storePageFilter: undefined };
}

export const CStoreBrowseGetDLCForAppsSolrRequest = {
  encode(message: CStoreBrowseGetDLCForAppsSolrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.context !== undefined) {
      StoreBrowseContext.encode(message.context, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.flavor !== "") {
      writer.uint32(26).string(message.flavor);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.storePageFilter !== undefined) {
      CStorePageFilter.encode(message.storePageFilter, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsSolrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsSolrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context = StoreBrowseContext.decode(reader, reader.uint32());
          break;
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
        case 3:
          message.flavor = reader.string();
          break;
        case 4:
          message.count = reader.uint32();
          break;
        case 5:
          message.storePageFilter = CStorePageFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsSolrRequest {
    return {
      context: isSet(object.context) ? StoreBrowseContext.fromJSON(object.context) : undefined,
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
      flavor: isSet(object.flavor) ? String(object.flavor) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      storePageFilter: isSet(object.storePageFilter) ? CStorePageFilter.fromJSON(object.storePageFilter) : undefined,
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsSolrRequest): unknown {
    const obj: any = {};
    message.context !== undefined &&
      (obj.context = message.context ? StoreBrowseContext.toJSON(message.context) : undefined);
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    message.flavor !== undefined && (obj.flavor = message.flavor);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.storePageFilter !== undefined &&
      (obj.storePageFilter = message.storePageFilter ? CStorePageFilter.toJSON(message.storePageFilter) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrRequest>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsSolrRequest {
    return CStoreBrowseGetDLCForAppsSolrRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrRequest>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsSolrRequest {
    const message = createBaseCStoreBrowseGetDLCForAppsSolrRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? StoreBrowseContext.fromPartial(object.context)
      : undefined;
    message.appids = object.appids?.map((e) => e) || [];
    message.flavor = object.flavor ?? "";
    message.count = object.count ?? 0;
    message.storePageFilter = (object.storePageFilter !== undefined && object.storePageFilter !== null)
      ? CStorePageFilter.fromPartial(object.storePageFilter)
      : undefined;
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsSolrResponse(): CStoreBrowseGetDLCForAppsSolrResponse {
  return { dlcLists: [] };
}

export const CStoreBrowseGetDLCForAppsSolrResponse = {
  encode(message: CStoreBrowseGetDLCForAppsSolrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dlcLists) {
      CStoreBrowseGetDLCForAppsSolrResponse_DLCList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsSolrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsSolrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dlcLists.push(CStoreBrowseGetDLCForAppsSolrResponse_DLCList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsSolrResponse {
    return {
      dlcLists: Array.isArray(object?.dlcLists)
        ? object.dlcLists.map((e: any) => CStoreBrowseGetDLCForAppsSolrResponse_DLCList.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsSolrResponse): unknown {
    const obj: any = {};
    if (message.dlcLists) {
      obj.dlcLists = message.dlcLists.map((e) =>
        e ? CStoreBrowseGetDLCForAppsSolrResponse_DLCList.toJSON(e) : undefined
      );
    } else {
      obj.dlcLists = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrResponse>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsSolrResponse {
    return CStoreBrowseGetDLCForAppsSolrResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrResponse>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsSolrResponse {
    const message = createBaseCStoreBrowseGetDLCForAppsSolrResponse();
    message.dlcLists = object.dlcLists?.map((e) => CStoreBrowseGetDLCForAppsSolrResponse_DLCList.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStoreBrowseGetDLCForAppsSolrResponse_DLCList(): CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
  return { parentAppid: 0, dlcAppids: [] };
}

export const CStoreBrowseGetDLCForAppsSolrResponse_DLCList = {
  encode(message: CStoreBrowseGetDLCForAppsSolrResponse_DLCList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parentAppid !== 0) {
      writer.uint32(8).uint32(message.parentAppid);
    }
    writer.uint32(18).fork();
    for (const v of message.dlcAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStoreBrowseGetDLCForAppsSolrResponse_DLCList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parentAppid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dlcAppids.push(reader.uint32());
            }
          } else {
            message.dlcAppids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
    return {
      parentAppid: isSet(object.parentAppid) ? Number(object.parentAppid) : 0,
      dlcAppids: Array.isArray(object?.dlcAppids) ? object.dlcAppids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CStoreBrowseGetDLCForAppsSolrResponse_DLCList): unknown {
    const obj: any = {};
    message.parentAppid !== undefined && (obj.parentAppid = Math.round(message.parentAppid));
    if (message.dlcAppids) {
      obj.dlcAppids = message.dlcAppids.map((e) => Math.round(e));
    } else {
      obj.dlcAppids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrResponse_DLCList>, I>>(
    base?: I,
  ): CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
    return CStoreBrowseGetDLCForAppsSolrResponse_DLCList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStoreBrowseGetDLCForAppsSolrResponse_DLCList>, I>>(
    object: I,
  ): CStoreBrowseGetDLCForAppsSolrResponse_DLCList {
    const message = createBaseCStoreBrowseGetDLCForAppsSolrResponse_DLCList();
    message.parentAppid = object.parentAppid ?? 0;
    message.dlcAppids = object.dlcAppids?.map((e) => e) || [];
    return message;
  },
};

export interface StoreBrowse {
  GetItems(request: CStoreBrowseGetItemsRequest): Promise<CStoreBrowseGetItemsResponse>;
  GetStoreCategories(request: CStoreBrowseGetStoreCategoriesRequest): Promise<CStoreBrowseGetStoreCategoriesResponse>;
  GetDLCForApps(request: CStoreBrowseGetDLCForAppsRequest): Promise<CStoreBrowseGetDLCForAppsResponse>;
  GetDLCForAppsSolr(request: CStoreBrowseGetDLCForAppsSolrRequest): Promise<CStoreBrowseGetDLCForAppsSolrResponse>;
}

export class StoreBrowseClientImpl implements StoreBrowse {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "StoreBrowse";
    this.rpc = rpc;
    this.GetItems = this.GetItems.bind(this);
    this.GetStoreCategories = this.GetStoreCategories.bind(this);
    this.GetDLCForApps = this.GetDLCForApps.bind(this);
    this.GetDLCForAppsSolr = this.GetDLCForAppsSolr.bind(this);
  }
  GetItems(request: CStoreBrowseGetItemsRequest): Promise<CStoreBrowseGetItemsResponse> {
    const data = CStoreBrowseGetItemsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetItems", data);
    return promise.then((data) => CStoreBrowseGetItemsResponse.decode(new _m0.Reader(data)));
  }

  GetStoreCategories(request: CStoreBrowseGetStoreCategoriesRequest): Promise<CStoreBrowseGetStoreCategoriesResponse> {
    const data = CStoreBrowseGetStoreCategoriesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStoreCategories", data);
    return promise.then((data) => CStoreBrowseGetStoreCategoriesResponse.decode(new _m0.Reader(data)));
  }

  GetDLCForApps(request: CStoreBrowseGetDLCForAppsRequest): Promise<CStoreBrowseGetDLCForAppsResponse> {
    const data = CStoreBrowseGetDLCForAppsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDLCForApps", data);
    return promise.then((data) => CStoreBrowseGetDLCForAppsResponse.decode(new _m0.Reader(data)));
  }

  GetDLCForAppsSolr(request: CStoreBrowseGetDLCForAppsSolrRequest): Promise<CStoreBrowseGetDLCForAppsSolrResponse> {
    const data = CStoreBrowseGetDLCForAppsSolrRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDLCForAppsSolr", data);
    return promise.then((data) => CStoreBrowseGetDLCForAppsSolrResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
