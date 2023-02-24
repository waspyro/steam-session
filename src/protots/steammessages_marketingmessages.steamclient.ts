/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./steammessages_storebrowse.steamclient";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EMarketingMessageType {
  k_EMarketingMessageInvalid = 0,
  k_EMarketingMessageNowAvailable = 1,
  k_EMarketingMessageWeekendDeal = 2,
  k_EMarketingMessagePrePurchase = 3,
  k_EMarketingMessagePlayNow = 4,
  k_EMarketingMessagePreloadNow = 5,
  k_EMarketingMessageGeneral = 6,
  k_EMarketingMessageDemoQuit = 7,
  k_EMarketingMessageGifting = 8,
  k_EMarketingMessageEJsKorner = 9,
  UNRECOGNIZED = -1,
}

export function eMarketingMessageTypeFromJSON(object: any): EMarketingMessageType {
  switch (object) {
    case 0:
    case "k_EMarketingMessageInvalid":
      return EMarketingMessageType.k_EMarketingMessageInvalid;
    case 1:
    case "k_EMarketingMessageNowAvailable":
      return EMarketingMessageType.k_EMarketingMessageNowAvailable;
    case 2:
    case "k_EMarketingMessageWeekendDeal":
      return EMarketingMessageType.k_EMarketingMessageWeekendDeal;
    case 3:
    case "k_EMarketingMessagePrePurchase":
      return EMarketingMessageType.k_EMarketingMessagePrePurchase;
    case 4:
    case "k_EMarketingMessagePlayNow":
      return EMarketingMessageType.k_EMarketingMessagePlayNow;
    case 5:
    case "k_EMarketingMessagePreloadNow":
      return EMarketingMessageType.k_EMarketingMessagePreloadNow;
    case 6:
    case "k_EMarketingMessageGeneral":
      return EMarketingMessageType.k_EMarketingMessageGeneral;
    case 7:
    case "k_EMarketingMessageDemoQuit":
      return EMarketingMessageType.k_EMarketingMessageDemoQuit;
    case 8:
    case "k_EMarketingMessageGifting":
      return EMarketingMessageType.k_EMarketingMessageGifting;
    case 9:
    case "k_EMarketingMessageEJsKorner":
      return EMarketingMessageType.k_EMarketingMessageEJsKorner;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMarketingMessageType.UNRECOGNIZED;
  }
}

export function eMarketingMessageTypeToJSON(object: EMarketingMessageType): string {
  switch (object) {
    case EMarketingMessageType.k_EMarketingMessageInvalid:
      return "k_EMarketingMessageInvalid";
    case EMarketingMessageType.k_EMarketingMessageNowAvailable:
      return "k_EMarketingMessageNowAvailable";
    case EMarketingMessageType.k_EMarketingMessageWeekendDeal:
      return "k_EMarketingMessageWeekendDeal";
    case EMarketingMessageType.k_EMarketingMessagePrePurchase:
      return "k_EMarketingMessagePrePurchase";
    case EMarketingMessageType.k_EMarketingMessagePlayNow:
      return "k_EMarketingMessagePlayNow";
    case EMarketingMessageType.k_EMarketingMessagePreloadNow:
      return "k_EMarketingMessagePreloadNow";
    case EMarketingMessageType.k_EMarketingMessageGeneral:
      return "k_EMarketingMessageGeneral";
    case EMarketingMessageType.k_EMarketingMessageDemoQuit:
      return "k_EMarketingMessageDemoQuit";
    case EMarketingMessageType.k_EMarketingMessageGifting:
      return "k_EMarketingMessageGifting";
    case EMarketingMessageType.k_EMarketingMessageEJsKorner:
      return "k_EMarketingMessageEJsKorner";
    case EMarketingMessageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EMarketingMessageVisibility {
  k_EMarketingMessageVisibleBeta = 1,
  k_EMarketingMessageVisiblePublic = 2,
  UNRECOGNIZED = -1,
}

export function eMarketingMessageVisibilityFromJSON(object: any): EMarketingMessageVisibility {
  switch (object) {
    case 1:
    case "k_EMarketingMessageVisibleBeta":
      return EMarketingMessageVisibility.k_EMarketingMessageVisibleBeta;
    case 2:
    case "k_EMarketingMessageVisiblePublic":
      return EMarketingMessageVisibility.k_EMarketingMessageVisiblePublic;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMarketingMessageVisibility.UNRECOGNIZED;
  }
}

export function eMarketingMessageVisibilityToJSON(object: EMarketingMessageVisibility): string {
  switch (object) {
    case EMarketingMessageVisibility.k_EMarketingMessageVisibleBeta:
      return "k_EMarketingMessageVisibleBeta";
    case EMarketingMessageVisibility.k_EMarketingMessageVisiblePublic:
      return "k_EMarketingMessageVisiblePublic";
    case EMarketingMessageVisibility.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EMarketingMessageAssociationType {
  k_EMarketingMessageNoAssociation = 0,
  k_EMarketingMessageAppAssociation = 1,
  k_EMarketingMessageSubscriptionAssociation = 2,
  k_EMarketingMessagePublisherAssociation = 3,
  k_EMarketingMessageGenreAssociation = 4,
  k_EMarketingMessageBundleAssociation = 5,
  UNRECOGNIZED = -1,
}

export function eMarketingMessageAssociationTypeFromJSON(object: any): EMarketingMessageAssociationType {
  switch (object) {
    case 0:
    case "k_EMarketingMessageNoAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessageNoAssociation;
    case 1:
    case "k_EMarketingMessageAppAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessageAppAssociation;
    case 2:
    case "k_EMarketingMessageSubscriptionAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessageSubscriptionAssociation;
    case 3:
    case "k_EMarketingMessagePublisherAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessagePublisherAssociation;
    case 4:
    case "k_EMarketingMessageGenreAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessageGenreAssociation;
    case 5:
    case "k_EMarketingMessageBundleAssociation":
      return EMarketingMessageAssociationType.k_EMarketingMessageBundleAssociation;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMarketingMessageAssociationType.UNRECOGNIZED;
  }
}

export function eMarketingMessageAssociationTypeToJSON(object: EMarketingMessageAssociationType): string {
  switch (object) {
    case EMarketingMessageAssociationType.k_EMarketingMessageNoAssociation:
      return "k_EMarketingMessageNoAssociation";
    case EMarketingMessageAssociationType.k_EMarketingMessageAppAssociation:
      return "k_EMarketingMessageAppAssociation";
    case EMarketingMessageAssociationType.k_EMarketingMessageSubscriptionAssociation:
      return "k_EMarketingMessageSubscriptionAssociation";
    case EMarketingMessageAssociationType.k_EMarketingMessagePublisherAssociation:
      return "k_EMarketingMessagePublisherAssociation";
    case EMarketingMessageAssociationType.k_EMarketingMessageGenreAssociation:
      return "k_EMarketingMessageGenreAssociation";
    case EMarketingMessageAssociationType.k_EMarketingMessageBundleAssociation:
      return "k_EMarketingMessageBundleAssociation";
    case EMarketingMessageAssociationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EMarketingMessageLookupType {
  k_EMarketingMessageLookupInvalid = 0,
  k_EMarketingMessageLookupByGID = 1,
  k_EMarketingMessageLookupActive = 2,
  k_EMarketingMessageLookupByTitleWithType = 3,
  k_EMarketingMessageLookupByGIDList = 4,
  UNRECOGNIZED = -1,
}

export function eMarketingMessageLookupTypeFromJSON(object: any): EMarketingMessageLookupType {
  switch (object) {
    case 0:
    case "k_EMarketingMessageLookupInvalid":
      return EMarketingMessageLookupType.k_EMarketingMessageLookupInvalid;
    case 1:
    case "k_EMarketingMessageLookupByGID":
      return EMarketingMessageLookupType.k_EMarketingMessageLookupByGID;
    case 2:
    case "k_EMarketingMessageLookupActive":
      return EMarketingMessageLookupType.k_EMarketingMessageLookupActive;
    case 3:
    case "k_EMarketingMessageLookupByTitleWithType":
      return EMarketingMessageLookupType.k_EMarketingMessageLookupByTitleWithType;
    case 4:
    case "k_EMarketingMessageLookupByGIDList":
      return EMarketingMessageLookupType.k_EMarketingMessageLookupByGIDList;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMarketingMessageLookupType.UNRECOGNIZED;
  }
}

export function eMarketingMessageLookupTypeToJSON(object: EMarketingMessageLookupType): string {
  switch (object) {
    case EMarketingMessageLookupType.k_EMarketingMessageLookupInvalid:
      return "k_EMarketingMessageLookupInvalid";
    case EMarketingMessageLookupType.k_EMarketingMessageLookupByGID:
      return "k_EMarketingMessageLookupByGID";
    case EMarketingMessageLookupType.k_EMarketingMessageLookupActive:
      return "k_EMarketingMessageLookupActive";
    case EMarketingMessageLookupType.k_EMarketingMessageLookupByTitleWithType:
      return "k_EMarketingMessageLookupByTitleWithType";
    case EMarketingMessageLookupType.k_EMarketingMessageLookupByGIDList:
      return "k_EMarketingMessageLookupByGIDList";
    case EMarketingMessageLookupType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMarketingMessagesGetActiveMarketingMessagesRequest {
  country: string;
}

export interface CMarketingMessageProto {
  gid: number;
  title: string;
  type: EMarketingMessageType;
  visibility: EMarketingMessageVisibility;
  priority: number;
  associationType: EMarketingMessageAssociationType;
  associatedId: number;
  associatedName: string;
  startDate: number;
  endDate: number;
  countryAllow: string;
  countryDeny: string;
  ownershipRestrictionsOverridden: boolean;
  mustOwnAppid: number;
  mustNotOwnAppid: number;
  mustOwnPackageid: number;
  mustNotOwnPackageid: number;
  mustHaveLaunchedAppid: number;
  additionalRestrictions: string;
  templateType: string;
  templateVars: string;
  flags: number;
  creatorName: string;
  templateVarsJson: string;
  additionalRestrictionsJson: string;
}

export interface CMarketingMessagesGetActiveMarketingMessagesResponse {
  messages: CMarketingMessageProto[];
  timeNextMessageAge: number;
}

export interface CMarketingMessagesGetMarketingMessagesForUserRequest {
  includeSeenMessages: boolean;
  countryCode: string;
  elanguage: number;
  operatingSystem: number;
  clientPackageVersion: number;
  context: StoreBrowseContext | undefined;
  dataRequest: StoreBrowseItemDataRequest | undefined;
}

export interface CDisplayMarketingMessage {
  gid: number;
  title: string;
  type: EMarketingMessageType;
  associatedItemId: StoreItemID | undefined;
  associatedItem: StoreItem | undefined;
  associatedName: string;
  templateType: string;
  templateVarsJson: string;
}

export interface CMarketingMessagesGetMarketingMessagesForUserResponse {
  messages: CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser[];
}

export interface CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
  alreadySeen: boolean;
  message: CDisplayMarketingMessage | undefined;
}

export interface CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
  countryCode: string;
  elanguage: number;
  operatingSystem: number;
  clientPackageVersion: number;
}

export interface CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
  hasPendingMessages: boolean;
  pendingMessageCount: number;
}

export interface CMarketingMessagesGetDisplayMarketingMessageRequest {
  gid: number;
  context: StoreBrowseContext | undefined;
  dataRequest: StoreBrowseItemDataRequest | undefined;
}

export interface CMarketingMessagesGetDisplayMarketingMessageResponse {
  message: CDisplayMarketingMessage | undefined;
}

export interface CMarketingMessagesMarkMessageSeenNotification {
  gid: number;
}

export interface CMarketingMessagesGetMarketingMessageRequest {
  gid: number;
}

export interface CMarketingMessagesGetMarketingMessageResponse {
  message: CMarketingMessageProto | undefined;
}

export interface CMarketingMessagesCreateMarketingMessageRequest {
  message: CMarketingMessageProto | undefined;
  fromJson: boolean;
}

export interface CMarketingMessagesCreateMarketingMessageResponse {
  gid: number;
}

export interface CMarketingMessagesUpdateMarketingMessageRequest {
  gid: number;
  message: CMarketingMessageProto | undefined;
  fromJson: boolean;
}

export interface CMarketingMessagesUpdateMarketingMessageResponse {
}

export interface CMarketingMessagesDeleteMarketingMessageRequest {
  gid: number;
}

export interface CMarketingMessagesDeleteMarketingMessageResponse {
}

export interface CMarketingMessagesFindMarketingMessagesRequest {
  lookupType: EMarketingMessageLookupType;
  gid: number;
  messageType: EMarketingMessageType;
  gidlist: number[];
  title: string;
}

export interface CMarketingMessagesFindMarketingMessagesResponse {
  messages: CMarketingMessageProto[];
}

function createBaseCMarketingMessagesGetActiveMarketingMessagesRequest(): CMarketingMessagesGetActiveMarketingMessagesRequest {
  return { country: "" };
}

export const CMarketingMessagesGetActiveMarketingMessagesRequest = {
  encode(
    message: CMarketingMessagesGetActiveMarketingMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetActiveMarketingMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetActiveMarketingMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetActiveMarketingMessagesRequest {
    return { country: isSet(object.country) ? String(object.country) : "" };
  },

  toJSON(message: CMarketingMessagesGetActiveMarketingMessagesRequest): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetActiveMarketingMessagesRequest>, I>>(
    base?: I,
  ): CMarketingMessagesGetActiveMarketingMessagesRequest {
    return CMarketingMessagesGetActiveMarketingMessagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetActiveMarketingMessagesRequest>, I>>(
    object: I,
  ): CMarketingMessagesGetActiveMarketingMessagesRequest {
    const message = createBaseCMarketingMessagesGetActiveMarketingMessagesRequest();
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseCMarketingMessageProto(): CMarketingMessageProto {
  return {
    gid: 0,
    title: "",
    type: 0,
    visibility: 1,
    priority: 0,
    associationType: 0,
    associatedId: 0,
    associatedName: "",
    startDate: 0,
    endDate: 0,
    countryAllow: "",
    countryDeny: "",
    ownershipRestrictionsOverridden: false,
    mustOwnAppid: 0,
    mustNotOwnAppid: 0,
    mustOwnPackageid: 0,
    mustNotOwnPackageid: 0,
    mustHaveLaunchedAppid: 0,
    additionalRestrictions: "",
    templateType: "",
    templateVars: "",
    flags: 0,
    creatorName: "",
    templateVarsJson: "",
    additionalRestrictionsJson: "",
  };
}

export const CMarketingMessageProto = {
  encode(message: CMarketingMessageProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.visibility !== 1) {
      writer.uint32(32).int32(message.visibility);
    }
    if (message.priority !== 0) {
      writer.uint32(40).uint32(message.priority);
    }
    if (message.associationType !== 0) {
      writer.uint32(48).int32(message.associationType);
    }
    if (message.associatedId !== 0) {
      writer.uint32(56).uint32(message.associatedId);
    }
    if (message.associatedName !== "") {
      writer.uint32(66).string(message.associatedName);
    }
    if (message.startDate !== 0) {
      writer.uint32(72).uint32(message.startDate);
    }
    if (message.endDate !== 0) {
      writer.uint32(80).uint32(message.endDate);
    }
    if (message.countryAllow !== "") {
      writer.uint32(90).string(message.countryAllow);
    }
    if (message.countryDeny !== "") {
      writer.uint32(98).string(message.countryDeny);
    }
    if (message.ownershipRestrictionsOverridden === true) {
      writer.uint32(104).bool(message.ownershipRestrictionsOverridden);
    }
    if (message.mustOwnAppid !== 0) {
      writer.uint32(112).uint32(message.mustOwnAppid);
    }
    if (message.mustNotOwnAppid !== 0) {
      writer.uint32(120).uint32(message.mustNotOwnAppid);
    }
    if (message.mustOwnPackageid !== 0) {
      writer.uint32(128).uint32(message.mustOwnPackageid);
    }
    if (message.mustNotOwnPackageid !== 0) {
      writer.uint32(136).uint32(message.mustNotOwnPackageid);
    }
    if (message.mustHaveLaunchedAppid !== 0) {
      writer.uint32(144).uint32(message.mustHaveLaunchedAppid);
    }
    if (message.additionalRestrictions !== "") {
      writer.uint32(154).string(message.additionalRestrictions);
    }
    if (message.templateType !== "") {
      writer.uint32(162).string(message.templateType);
    }
    if (message.templateVars !== "") {
      writer.uint32(170).string(message.templateVars);
    }
    if (message.flags !== 0) {
      writer.uint32(176).uint32(message.flags);
    }
    if (message.creatorName !== "") {
      writer.uint32(186).string(message.creatorName);
    }
    if (message.templateVarsJson !== "") {
      writer.uint32(194).string(message.templateVarsJson);
    }
    if (message.additionalRestrictionsJson !== "") {
      writer.uint32(202).string(message.additionalRestrictionsJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessageProto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessageProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.visibility = reader.int32() as any;
          break;
        case 5:
          message.priority = reader.uint32();
          break;
        case 6:
          message.associationType = reader.int32() as any;
          break;
        case 7:
          message.associatedId = reader.uint32();
          break;
        case 8:
          message.associatedName = reader.string();
          break;
        case 9:
          message.startDate = reader.uint32();
          break;
        case 10:
          message.endDate = reader.uint32();
          break;
        case 11:
          message.countryAllow = reader.string();
          break;
        case 12:
          message.countryDeny = reader.string();
          break;
        case 13:
          message.ownershipRestrictionsOverridden = reader.bool();
          break;
        case 14:
          message.mustOwnAppid = reader.uint32();
          break;
        case 15:
          message.mustNotOwnAppid = reader.uint32();
          break;
        case 16:
          message.mustOwnPackageid = reader.uint32();
          break;
        case 17:
          message.mustNotOwnPackageid = reader.uint32();
          break;
        case 18:
          message.mustHaveLaunchedAppid = reader.uint32();
          break;
        case 19:
          message.additionalRestrictions = reader.string();
          break;
        case 20:
          message.templateType = reader.string();
          break;
        case 21:
          message.templateVars = reader.string();
          break;
        case 22:
          message.flags = reader.uint32();
          break;
        case 23:
          message.creatorName = reader.string();
          break;
        case 24:
          message.templateVarsJson = reader.string();
          break;
        case 25:
          message.additionalRestrictionsJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessageProto {
    return {
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      type: isSet(object.type) ? eMarketingMessageTypeFromJSON(object.type) : 0,
      visibility: isSet(object.visibility) ? eMarketingMessageVisibilityFromJSON(object.visibility) : 1,
      priority: isSet(object.priority) ? Number(object.priority) : 0,
      associationType: isSet(object.associationType)
        ? eMarketingMessageAssociationTypeFromJSON(object.associationType)
        : 0,
      associatedId: isSet(object.associatedId) ? Number(object.associatedId) : 0,
      associatedName: isSet(object.associatedName) ? String(object.associatedName) : "",
      startDate: isSet(object.startDate) ? Number(object.startDate) : 0,
      endDate: isSet(object.endDate) ? Number(object.endDate) : 0,
      countryAllow: isSet(object.countryAllow) ? String(object.countryAllow) : "",
      countryDeny: isSet(object.countryDeny) ? String(object.countryDeny) : "",
      ownershipRestrictionsOverridden: isSet(object.ownershipRestrictionsOverridden)
        ? Boolean(object.ownershipRestrictionsOverridden)
        : false,
      mustOwnAppid: isSet(object.mustOwnAppid) ? Number(object.mustOwnAppid) : 0,
      mustNotOwnAppid: isSet(object.mustNotOwnAppid) ? Number(object.mustNotOwnAppid) : 0,
      mustOwnPackageid: isSet(object.mustOwnPackageid) ? Number(object.mustOwnPackageid) : 0,
      mustNotOwnPackageid: isSet(object.mustNotOwnPackageid) ? Number(object.mustNotOwnPackageid) : 0,
      mustHaveLaunchedAppid: isSet(object.mustHaveLaunchedAppid) ? Number(object.mustHaveLaunchedAppid) : 0,
      additionalRestrictions: isSet(object.additionalRestrictions) ? String(object.additionalRestrictions) : "",
      templateType: isSet(object.templateType) ? String(object.templateType) : "",
      templateVars: isSet(object.templateVars) ? String(object.templateVars) : "",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      creatorName: isSet(object.creatorName) ? String(object.creatorName) : "",
      templateVarsJson: isSet(object.templateVarsJson) ? String(object.templateVarsJson) : "",
      additionalRestrictionsJson: isSet(object.additionalRestrictionsJson)
        ? String(object.additionalRestrictionsJson)
        : "",
    };
  },

  toJSON(message: CMarketingMessageProto): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.title !== undefined && (obj.title = message.title);
    message.type !== undefined && (obj.type = eMarketingMessageTypeToJSON(message.type));
    message.visibility !== undefined && (obj.visibility = eMarketingMessageVisibilityToJSON(message.visibility));
    message.priority !== undefined && (obj.priority = Math.round(message.priority));
    message.associationType !== undefined &&
      (obj.associationType = eMarketingMessageAssociationTypeToJSON(message.associationType));
    message.associatedId !== undefined && (obj.associatedId = Math.round(message.associatedId));
    message.associatedName !== undefined && (obj.associatedName = message.associatedName);
    message.startDate !== undefined && (obj.startDate = Math.round(message.startDate));
    message.endDate !== undefined && (obj.endDate = Math.round(message.endDate));
    message.countryAllow !== undefined && (obj.countryAllow = message.countryAllow);
    message.countryDeny !== undefined && (obj.countryDeny = message.countryDeny);
    message.ownershipRestrictionsOverridden !== undefined &&
      (obj.ownershipRestrictionsOverridden = message.ownershipRestrictionsOverridden);
    message.mustOwnAppid !== undefined && (obj.mustOwnAppid = Math.round(message.mustOwnAppid));
    message.mustNotOwnAppid !== undefined && (obj.mustNotOwnAppid = Math.round(message.mustNotOwnAppid));
    message.mustOwnPackageid !== undefined && (obj.mustOwnPackageid = Math.round(message.mustOwnPackageid));
    message.mustNotOwnPackageid !== undefined && (obj.mustNotOwnPackageid = Math.round(message.mustNotOwnPackageid));
    message.mustHaveLaunchedAppid !== undefined &&
      (obj.mustHaveLaunchedAppid = Math.round(message.mustHaveLaunchedAppid));
    message.additionalRestrictions !== undefined && (obj.additionalRestrictions = message.additionalRestrictions);
    message.templateType !== undefined && (obj.templateType = message.templateType);
    message.templateVars !== undefined && (obj.templateVars = message.templateVars);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.creatorName !== undefined && (obj.creatorName = message.creatorName);
    message.templateVarsJson !== undefined && (obj.templateVarsJson = message.templateVarsJson);
    message.additionalRestrictionsJson !== undefined &&
      (obj.additionalRestrictionsJson = message.additionalRestrictionsJson);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessageProto>, I>>(base?: I): CMarketingMessageProto {
    return CMarketingMessageProto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessageProto>, I>>(object: I): CMarketingMessageProto {
    const message = createBaseCMarketingMessageProto();
    message.gid = object.gid ?? 0;
    message.title = object.title ?? "";
    message.type = object.type ?? 0;
    message.visibility = object.visibility ?? 1;
    message.priority = object.priority ?? 0;
    message.associationType = object.associationType ?? 0;
    message.associatedId = object.associatedId ?? 0;
    message.associatedName = object.associatedName ?? "";
    message.startDate = object.startDate ?? 0;
    message.endDate = object.endDate ?? 0;
    message.countryAllow = object.countryAllow ?? "";
    message.countryDeny = object.countryDeny ?? "";
    message.ownershipRestrictionsOverridden = object.ownershipRestrictionsOverridden ?? false;
    message.mustOwnAppid = object.mustOwnAppid ?? 0;
    message.mustNotOwnAppid = object.mustNotOwnAppid ?? 0;
    message.mustOwnPackageid = object.mustOwnPackageid ?? 0;
    message.mustNotOwnPackageid = object.mustNotOwnPackageid ?? 0;
    message.mustHaveLaunchedAppid = object.mustHaveLaunchedAppid ?? 0;
    message.additionalRestrictions = object.additionalRestrictions ?? "";
    message.templateType = object.templateType ?? "";
    message.templateVars = object.templateVars ?? "";
    message.flags = object.flags ?? 0;
    message.creatorName = object.creatorName ?? "";
    message.templateVarsJson = object.templateVarsJson ?? "";
    message.additionalRestrictionsJson = object.additionalRestrictionsJson ?? "";
    return message;
  },
};

function createBaseCMarketingMessagesGetActiveMarketingMessagesResponse(): CMarketingMessagesGetActiveMarketingMessagesResponse {
  return { messages: [], timeNextMessageAge: 0 };
}

export const CMarketingMessagesGetActiveMarketingMessagesResponse = {
  encode(
    message: CMarketingMessagesGetActiveMarketingMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      CMarketingMessageProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeNextMessageAge !== 0) {
      writer.uint32(16).uint32(message.timeNextMessageAge);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetActiveMarketingMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetActiveMarketingMessagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(CMarketingMessageProto.decode(reader, reader.uint32()));
          break;
        case 2:
          message.timeNextMessageAge = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetActiveMarketingMessagesResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CMarketingMessageProto.fromJSON(e))
        : [],
      timeNextMessageAge: isSet(object.timeNextMessageAge) ? Number(object.timeNextMessageAge) : 0,
    };
  },

  toJSON(message: CMarketingMessagesGetActiveMarketingMessagesResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? CMarketingMessageProto.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.timeNextMessageAge !== undefined && (obj.timeNextMessageAge = Math.round(message.timeNextMessageAge));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetActiveMarketingMessagesResponse>, I>>(
    base?: I,
  ): CMarketingMessagesGetActiveMarketingMessagesResponse {
    return CMarketingMessagesGetActiveMarketingMessagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetActiveMarketingMessagesResponse>, I>>(
    object: I,
  ): CMarketingMessagesGetActiveMarketingMessagesResponse {
    const message = createBaseCMarketingMessagesGetActiveMarketingMessagesResponse();
    message.messages = object.messages?.map((e) => CMarketingMessageProto.fromPartial(e)) || [];
    message.timeNextMessageAge = object.timeNextMessageAge ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesGetMarketingMessagesForUserRequest(): CMarketingMessagesGetMarketingMessagesForUserRequest {
  return {
    includeSeenMessages: false,
    countryCode: "",
    elanguage: 0,
    operatingSystem: 0,
    clientPackageVersion: 0,
    context: undefined,
    dataRequest: undefined,
  };
}

export const CMarketingMessagesGetMarketingMessagesForUserRequest = {
  encode(
    message: CMarketingMessagesGetMarketingMessagesForUserRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.includeSeenMessages === true) {
      writer.uint32(8).bool(message.includeSeenMessages);
    }
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.elanguage !== 0) {
      writer.uint32(24).int32(message.elanguage);
    }
    if (message.operatingSystem !== 0) {
      writer.uint32(32).int32(message.operatingSystem);
    }
    if (message.clientPackageVersion !== 0) {
      writer.uint32(40).int32(message.clientPackageVersion);
    }
    if (message.context !== undefined) {
      StoreBrowseContext.encode(message.context, writer.uint32(50).fork()).ldelim();
    }
    if (message.dataRequest !== undefined) {
      StoreBrowseItemDataRequest.encode(message.dataRequest, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetMarketingMessagesForUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeSeenMessages = reader.bool();
          break;
        case 2:
          message.countryCode = reader.string();
          break;
        case 3:
          message.elanguage = reader.int32();
          break;
        case 4:
          message.operatingSystem = reader.int32();
          break;
        case 5:
          message.clientPackageVersion = reader.int32();
          break;
        case 6:
          message.context = StoreBrowseContext.decode(reader, reader.uint32());
          break;
        case 7:
          message.dataRequest = StoreBrowseItemDataRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetMarketingMessagesForUserRequest {
    return {
      includeSeenMessages: isSet(object.includeSeenMessages) ? Boolean(object.includeSeenMessages) : false,
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      elanguage: isSet(object.elanguage) ? Number(object.elanguage) : 0,
      operatingSystem: isSet(object.operatingSystem) ? Number(object.operatingSystem) : 0,
      clientPackageVersion: isSet(object.clientPackageVersion) ? Number(object.clientPackageVersion) : 0,
      context: isSet(object.context) ? StoreBrowseContext.fromJSON(object.context) : undefined,
      dataRequest: isSet(object.dataRequest) ? StoreBrowseItemDataRequest.fromJSON(object.dataRequest) : undefined,
    };
  },

  toJSON(message: CMarketingMessagesGetMarketingMessagesForUserRequest): unknown {
    const obj: any = {};
    message.includeSeenMessages !== undefined && (obj.includeSeenMessages = message.includeSeenMessages);
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.elanguage !== undefined && (obj.elanguage = Math.round(message.elanguage));
    message.operatingSystem !== undefined && (obj.operatingSystem = Math.round(message.operatingSystem));
    message.clientPackageVersion !== undefined && (obj.clientPackageVersion = Math.round(message.clientPackageVersion));
    message.context !== undefined &&
      (obj.context = message.context ? StoreBrowseContext.toJSON(message.context) : undefined);
    message.dataRequest !== undefined &&
      (obj.dataRequest = message.dataRequest ? StoreBrowseItemDataRequest.toJSON(message.dataRequest) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserRequest>, I>>(
    base?: I,
  ): CMarketingMessagesGetMarketingMessagesForUserRequest {
    return CMarketingMessagesGetMarketingMessagesForUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserRequest>, I>>(
    object: I,
  ): CMarketingMessagesGetMarketingMessagesForUserRequest {
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserRequest();
    message.includeSeenMessages = object.includeSeenMessages ?? false;
    message.countryCode = object.countryCode ?? "";
    message.elanguage = object.elanguage ?? 0;
    message.operatingSystem = object.operatingSystem ?? 0;
    message.clientPackageVersion = object.clientPackageVersion ?? 0;
    message.context = (object.context !== undefined && object.context !== null)
      ? StoreBrowseContext.fromPartial(object.context)
      : undefined;
    message.dataRequest = (object.dataRequest !== undefined && object.dataRequest !== null)
      ? StoreBrowseItemDataRequest.fromPartial(object.dataRequest)
      : undefined;
    return message;
  },
};

function createBaseCDisplayMarketingMessage(): CDisplayMarketingMessage {
  return {
    gid: 0,
    title: "",
    type: 0,
    associatedItemId: undefined,
    associatedItem: undefined,
    associatedName: "",
    templateType: "",
    templateVarsJson: "",
  };
}

export const CDisplayMarketingMessage = {
  encode(message: CDisplayMarketingMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.associatedItemId !== undefined) {
      StoreItemID.encode(message.associatedItemId, writer.uint32(34).fork()).ldelim();
    }
    if (message.associatedItem !== undefined) {
      StoreItem.encode(message.associatedItem, writer.uint32(42).fork()).ldelim();
    }
    if (message.associatedName !== "") {
      writer.uint32(50).string(message.associatedName);
    }
    if (message.templateType !== "") {
      writer.uint32(82).string(message.templateType);
    }
    if (message.templateVarsJson !== "") {
      writer.uint32(90).string(message.templateVarsJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDisplayMarketingMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDisplayMarketingMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.associatedItemId = StoreItemID.decode(reader, reader.uint32());
          break;
        case 5:
          message.associatedItem = StoreItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.associatedName = reader.string();
          break;
        case 10:
          message.templateType = reader.string();
          break;
        case 11:
          message.templateVarsJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDisplayMarketingMessage {
    return {
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      type: isSet(object.type) ? eMarketingMessageTypeFromJSON(object.type) : 0,
      associatedItemId: isSet(object.associatedItemId) ? StoreItemID.fromJSON(object.associatedItemId) : undefined,
      associatedItem: isSet(object.associatedItem) ? StoreItem.fromJSON(object.associatedItem) : undefined,
      associatedName: isSet(object.associatedName) ? String(object.associatedName) : "",
      templateType: isSet(object.templateType) ? String(object.templateType) : "",
      templateVarsJson: isSet(object.templateVarsJson) ? String(object.templateVarsJson) : "",
    };
  },

  toJSON(message: CDisplayMarketingMessage): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.title !== undefined && (obj.title = message.title);
    message.type !== undefined && (obj.type = eMarketingMessageTypeToJSON(message.type));
    message.associatedItemId !== undefined &&
      (obj.associatedItemId = message.associatedItemId ? StoreItemID.toJSON(message.associatedItemId) : undefined);
    message.associatedItem !== undefined &&
      (obj.associatedItem = message.associatedItem ? StoreItem.toJSON(message.associatedItem) : undefined);
    message.associatedName !== undefined && (obj.associatedName = message.associatedName);
    message.templateType !== undefined && (obj.templateType = message.templateType);
    message.templateVarsJson !== undefined && (obj.templateVarsJson = message.templateVarsJson);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDisplayMarketingMessage>, I>>(base?: I): CDisplayMarketingMessage {
    return CDisplayMarketingMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDisplayMarketingMessage>, I>>(object: I): CDisplayMarketingMessage {
    const message = createBaseCDisplayMarketingMessage();
    message.gid = object.gid ?? 0;
    message.title = object.title ?? "";
    message.type = object.type ?? 0;
    message.associatedItemId = (object.associatedItemId !== undefined && object.associatedItemId !== null)
      ? StoreItemID.fromPartial(object.associatedItemId)
      : undefined;
    message.associatedItem = (object.associatedItem !== undefined && object.associatedItem !== null)
      ? StoreItem.fromPartial(object.associatedItem)
      : undefined;
    message.associatedName = object.associatedName ?? "";
    message.templateType = object.templateType ?? "";
    message.templateVarsJson = object.templateVarsJson ?? "";
    return message;
  },
};

function createBaseCMarketingMessagesGetMarketingMessagesForUserResponse(): CMarketingMessagesGetMarketingMessagesForUserResponse {
  return { messages: [] };
}

export const CMarketingMessagesGetMarketingMessagesForUserResponse = {
  encode(
    message: CMarketingMessagesGetMarketingMessagesForUserResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetMarketingMessagesForUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(
            CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.decode(
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

  fromJSON(object: any): CMarketingMessagesGetMarketingMessagesForUserResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) =>
          CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMarketingMessagesGetMarketingMessagesForUserResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserResponse>, I>>(
    base?: I,
  ): CMarketingMessagesGetMarketingMessagesForUserResponse {
    return CMarketingMessagesGetMarketingMessagesForUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserResponse>, I>>(
    object: I,
  ): CMarketingMessagesGetMarketingMessagesForUserResponse {
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserResponse();
    message.messages =
      object.messages?.map((e) =>
        CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser(): CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
  return { alreadySeen: false, message: undefined };
}

export const CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser = {
  encode(
    message: CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.alreadySeen === true) {
      writer.uint32(8).bool(message.alreadySeen);
    }
    if (message.message !== undefined) {
      CDisplayMarketingMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alreadySeen = reader.bool();
          break;
        case 2:
          message.message = CDisplayMarketingMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
    return {
      alreadySeen: isSet(object.alreadySeen) ? Boolean(object.alreadySeen) : false,
      message: isSet(object.message) ? CDisplayMarketingMessage.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser): unknown {
    const obj: any = {};
    message.alreadySeen !== undefined && (obj.alreadySeen = message.alreadySeen);
    message.message !== undefined &&
      (obj.message = message.message ? CDisplayMarketingMessage.toJSON(message.message) : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser>, I>,
  >(base?: I): CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
    return CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser>, I>,
  >(object: I): CMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser {
    const message = createBaseCMarketingMessagesGetMarketingMessagesForUserResponse_MarketingMessageForUser();
    message.alreadySeen = object.alreadySeen ?? false;
    message.message = (object.message !== undefined && object.message !== null)
      ? CDisplayMarketingMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesRequest(): CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
  return { countryCode: "", elanguage: 0, operatingSystem: 0, clientPackageVersion: 0 };
}

export const CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest = {
  encode(
    message: CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(18).string(message.countryCode);
    }
    if (message.elanguage !== 0) {
      writer.uint32(24).int32(message.elanguage);
    }
    if (message.operatingSystem !== 0) {
      writer.uint32(32).int32(message.operatingSystem);
    }
    if (message.clientPackageVersion !== 0) {
      writer.uint32(40).int32(message.clientPackageVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.countryCode = reader.string();
          break;
        case 3:
          message.elanguage = reader.int32();
          break;
        case 4:
          message.operatingSystem = reader.int32();
          break;
        case 5:
          message.clientPackageVersion = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
    return {
      countryCode: isSet(object.countryCode) ? String(object.countryCode) : "",
      elanguage: isSet(object.elanguage) ? Number(object.elanguage) : 0,
      operatingSystem: isSet(object.operatingSystem) ? Number(object.operatingSystem) : 0,
      clientPackageVersion: isSet(object.clientPackageVersion) ? Number(object.clientPackageVersion) : 0,
    };
  },

  toJSON(message: CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    message.elanguage !== undefined && (obj.elanguage = Math.round(message.elanguage));
    message.operatingSystem !== undefined && (obj.operatingSystem = Math.round(message.operatingSystem));
    message.clientPackageVersion !== undefined && (obj.clientPackageVersion = Math.round(message.clientPackageVersion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest>, I>>(
    base?: I,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
    return CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest>, I>>(
    object: I,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest {
    const message = createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesRequest();
    message.countryCode = object.countryCode ?? "";
    message.elanguage = object.elanguage ?? 0;
    message.operatingSystem = object.operatingSystem ?? 0;
    message.clientPackageVersion = object.clientPackageVersion ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesResponse(): CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
  return { hasPendingMessages: false, pendingMessageCount: 0 };
}

export const CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse = {
  encode(
    message: CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hasPendingMessages === true) {
      writer.uint32(8).bool(message.hasPendingMessages);
    }
    if (message.pendingMessageCount !== 0) {
      writer.uint32(16).int32(message.pendingMessageCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasPendingMessages = reader.bool();
          break;
        case 2:
          message.pendingMessageCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
    return {
      hasPendingMessages: isSet(object.hasPendingMessages) ? Boolean(object.hasPendingMessages) : false,
      pendingMessageCount: isSet(object.pendingMessageCount) ? Number(object.pendingMessageCount) : 0,
    };
  },

  toJSON(message: CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse): unknown {
    const obj: any = {};
    message.hasPendingMessages !== undefined && (obj.hasPendingMessages = message.hasPendingMessages);
    message.pendingMessageCount !== undefined && (obj.pendingMessageCount = Math.round(message.pendingMessageCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse>, I>>(
    base?: I,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
    return CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse>, I>>(
    object: I,
  ): CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse {
    const message = createBaseCMarketingMessagesDoesUserHavePendingMarketingMessagesResponse();
    message.hasPendingMessages = object.hasPendingMessages ?? false;
    message.pendingMessageCount = object.pendingMessageCount ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesGetDisplayMarketingMessageRequest(): CMarketingMessagesGetDisplayMarketingMessageRequest {
  return { gid: 0, context: undefined, dataRequest: undefined };
}

export const CMarketingMessagesGetDisplayMarketingMessageRequest = {
  encode(
    message: CMarketingMessagesGetDisplayMarketingMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.context !== undefined) {
      StoreBrowseContext.encode(message.context, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataRequest !== undefined) {
      StoreBrowseItemDataRequest.encode(message.dataRequest, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetDisplayMarketingMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetDisplayMarketingMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CMarketingMessagesGetDisplayMarketingMessageRequest {
    return {
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      context: isSet(object.context) ? StoreBrowseContext.fromJSON(object.context) : undefined,
      dataRequest: isSet(object.dataRequest) ? StoreBrowseItemDataRequest.fromJSON(object.dataRequest) : undefined,
    };
  },

  toJSON(message: CMarketingMessagesGetDisplayMarketingMessageRequest): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.context !== undefined &&
      (obj.context = message.context ? StoreBrowseContext.toJSON(message.context) : undefined);
    message.dataRequest !== undefined &&
      (obj.dataRequest = message.dataRequest ? StoreBrowseItemDataRequest.toJSON(message.dataRequest) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetDisplayMarketingMessageRequest>, I>>(
    base?: I,
  ): CMarketingMessagesGetDisplayMarketingMessageRequest {
    return CMarketingMessagesGetDisplayMarketingMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetDisplayMarketingMessageRequest>, I>>(
    object: I,
  ): CMarketingMessagesGetDisplayMarketingMessageRequest {
    const message = createBaseCMarketingMessagesGetDisplayMarketingMessageRequest();
    message.gid = object.gid ?? 0;
    message.context = (object.context !== undefined && object.context !== null)
      ? StoreBrowseContext.fromPartial(object.context)
      : undefined;
    message.dataRequest = (object.dataRequest !== undefined && object.dataRequest !== null)
      ? StoreBrowseItemDataRequest.fromPartial(object.dataRequest)
      : undefined;
    return message;
  },
};

function createBaseCMarketingMessagesGetDisplayMarketingMessageResponse(): CMarketingMessagesGetDisplayMarketingMessageResponse {
  return { message: undefined };
}

export const CMarketingMessagesGetDisplayMarketingMessageResponse = {
  encode(
    message: CMarketingMessagesGetDisplayMarketingMessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      CDisplayMarketingMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetDisplayMarketingMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetDisplayMarketingMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = CDisplayMarketingMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetDisplayMarketingMessageResponse {
    return { message: isSet(object.message) ? CDisplayMarketingMessage.fromJSON(object.message) : undefined };
  },

  toJSON(message: CMarketingMessagesGetDisplayMarketingMessageResponse): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message ? CDisplayMarketingMessage.toJSON(message.message) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetDisplayMarketingMessageResponse>, I>>(
    base?: I,
  ): CMarketingMessagesGetDisplayMarketingMessageResponse {
    return CMarketingMessagesGetDisplayMarketingMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetDisplayMarketingMessageResponse>, I>>(
    object: I,
  ): CMarketingMessagesGetDisplayMarketingMessageResponse {
    const message = createBaseCMarketingMessagesGetDisplayMarketingMessageResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? CDisplayMarketingMessage.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCMarketingMessagesMarkMessageSeenNotification(): CMarketingMessagesMarkMessageSeenNotification {
  return { gid: 0 };
}

export const CMarketingMessagesMarkMessageSeenNotification = {
  encode(message: CMarketingMessagesMarkMessageSeenNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesMarkMessageSeenNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesMarkMessageSeenNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesMarkMessageSeenNotification {
    return { gid: isSet(object.gid) ? Number(object.gid) : 0 };
  },

  toJSON(message: CMarketingMessagesMarkMessageSeenNotification): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesMarkMessageSeenNotification>, I>>(
    base?: I,
  ): CMarketingMessagesMarkMessageSeenNotification {
    return CMarketingMessagesMarkMessageSeenNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesMarkMessageSeenNotification>, I>>(
    object: I,
  ): CMarketingMessagesMarkMessageSeenNotification {
    const message = createBaseCMarketingMessagesMarkMessageSeenNotification();
    message.gid = object.gid ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesGetMarketingMessageRequest(): CMarketingMessagesGetMarketingMessageRequest {
  return { gid: 0 };
}

export const CMarketingMessagesGetMarketingMessageRequest = {
  encode(message: CMarketingMessagesGetMarketingMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetMarketingMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetMarketingMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetMarketingMessageRequest {
    return { gid: isSet(object.gid) ? Number(object.gid) : 0 };
  },

  toJSON(message: CMarketingMessagesGetMarketingMessageRequest): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessageRequest>, I>>(
    base?: I,
  ): CMarketingMessagesGetMarketingMessageRequest {
    return CMarketingMessagesGetMarketingMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessageRequest>, I>>(
    object: I,
  ): CMarketingMessagesGetMarketingMessageRequest {
    const message = createBaseCMarketingMessagesGetMarketingMessageRequest();
    message.gid = object.gid ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesGetMarketingMessageResponse(): CMarketingMessagesGetMarketingMessageResponse {
  return { message: undefined };
}

export const CMarketingMessagesGetMarketingMessageResponse = {
  encode(message: CMarketingMessagesGetMarketingMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      CMarketingMessageProto.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesGetMarketingMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesGetMarketingMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = CMarketingMessageProto.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesGetMarketingMessageResponse {
    return { message: isSet(object.message) ? CMarketingMessageProto.fromJSON(object.message) : undefined };
  },

  toJSON(message: CMarketingMessagesGetMarketingMessageResponse): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message ? CMarketingMessageProto.toJSON(message.message) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessageResponse>, I>>(
    base?: I,
  ): CMarketingMessagesGetMarketingMessageResponse {
    return CMarketingMessagesGetMarketingMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesGetMarketingMessageResponse>, I>>(
    object: I,
  ): CMarketingMessagesGetMarketingMessageResponse {
    const message = createBaseCMarketingMessagesGetMarketingMessageResponse();
    message.message = (object.message !== undefined && object.message !== null)
      ? CMarketingMessageProto.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCMarketingMessagesCreateMarketingMessageRequest(): CMarketingMessagesCreateMarketingMessageRequest {
  return { message: undefined, fromJson: false };
}

export const CMarketingMessagesCreateMarketingMessageRequest = {
  encode(
    message: CMarketingMessagesCreateMarketingMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      CMarketingMessageProto.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    if (message.fromJson === true) {
      writer.uint32(16).bool(message.fromJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesCreateMarketingMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesCreateMarketingMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = CMarketingMessageProto.decode(reader, reader.uint32());
          break;
        case 2:
          message.fromJson = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesCreateMarketingMessageRequest {
    return {
      message: isSet(object.message) ? CMarketingMessageProto.fromJSON(object.message) : undefined,
      fromJson: isSet(object.fromJson) ? Boolean(object.fromJson) : false,
    };
  },

  toJSON(message: CMarketingMessagesCreateMarketingMessageRequest): unknown {
    const obj: any = {};
    message.message !== undefined &&
      (obj.message = message.message ? CMarketingMessageProto.toJSON(message.message) : undefined);
    message.fromJson !== undefined && (obj.fromJson = message.fromJson);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesCreateMarketingMessageRequest>, I>>(
    base?: I,
  ): CMarketingMessagesCreateMarketingMessageRequest {
    return CMarketingMessagesCreateMarketingMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesCreateMarketingMessageRequest>, I>>(
    object: I,
  ): CMarketingMessagesCreateMarketingMessageRequest {
    const message = createBaseCMarketingMessagesCreateMarketingMessageRequest();
    message.message = (object.message !== undefined && object.message !== null)
      ? CMarketingMessageProto.fromPartial(object.message)
      : undefined;
    message.fromJson = object.fromJson ?? false;
    return message;
  },
};

function createBaseCMarketingMessagesCreateMarketingMessageResponse(): CMarketingMessagesCreateMarketingMessageResponse {
  return { gid: 0 };
}

export const CMarketingMessagesCreateMarketingMessageResponse = {
  encode(
    message: CMarketingMessagesCreateMarketingMessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesCreateMarketingMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesCreateMarketingMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesCreateMarketingMessageResponse {
    return { gid: isSet(object.gid) ? Number(object.gid) : 0 };
  },

  toJSON(message: CMarketingMessagesCreateMarketingMessageResponse): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesCreateMarketingMessageResponse>, I>>(
    base?: I,
  ): CMarketingMessagesCreateMarketingMessageResponse {
    return CMarketingMessagesCreateMarketingMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesCreateMarketingMessageResponse>, I>>(
    object: I,
  ): CMarketingMessagesCreateMarketingMessageResponse {
    const message = createBaseCMarketingMessagesCreateMarketingMessageResponse();
    message.gid = object.gid ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesUpdateMarketingMessageRequest(): CMarketingMessagesUpdateMarketingMessageRequest {
  return { gid: 0, message: undefined, fromJson: false };
}

export const CMarketingMessagesUpdateMarketingMessageRequest = {
  encode(
    message: CMarketingMessagesUpdateMarketingMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.message !== undefined) {
      CMarketingMessageProto.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    if (message.fromJson === true) {
      writer.uint32(24).bool(message.fromJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesUpdateMarketingMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesUpdateMarketingMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.message = CMarketingMessageProto.decode(reader, reader.uint32());
          break;
        case 3:
          message.fromJson = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesUpdateMarketingMessageRequest {
    return {
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      message: isSet(object.message) ? CMarketingMessageProto.fromJSON(object.message) : undefined,
      fromJson: isSet(object.fromJson) ? Boolean(object.fromJson) : false,
    };
  },

  toJSON(message: CMarketingMessagesUpdateMarketingMessageRequest): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.message !== undefined &&
      (obj.message = message.message ? CMarketingMessageProto.toJSON(message.message) : undefined);
    message.fromJson !== undefined && (obj.fromJson = message.fromJson);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesUpdateMarketingMessageRequest>, I>>(
    base?: I,
  ): CMarketingMessagesUpdateMarketingMessageRequest {
    return CMarketingMessagesUpdateMarketingMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesUpdateMarketingMessageRequest>, I>>(
    object: I,
  ): CMarketingMessagesUpdateMarketingMessageRequest {
    const message = createBaseCMarketingMessagesUpdateMarketingMessageRequest();
    message.gid = object.gid ?? 0;
    message.message = (object.message !== undefined && object.message !== null)
      ? CMarketingMessageProto.fromPartial(object.message)
      : undefined;
    message.fromJson = object.fromJson ?? false;
    return message;
  },
};

function createBaseCMarketingMessagesUpdateMarketingMessageResponse(): CMarketingMessagesUpdateMarketingMessageResponse {
  return {};
}

export const CMarketingMessagesUpdateMarketingMessageResponse = {
  encode(_: CMarketingMessagesUpdateMarketingMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesUpdateMarketingMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesUpdateMarketingMessageResponse();
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

  fromJSON(_: any): CMarketingMessagesUpdateMarketingMessageResponse {
    return {};
  },

  toJSON(_: CMarketingMessagesUpdateMarketingMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesUpdateMarketingMessageResponse>, I>>(
    base?: I,
  ): CMarketingMessagesUpdateMarketingMessageResponse {
    return CMarketingMessagesUpdateMarketingMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesUpdateMarketingMessageResponse>, I>>(
    _: I,
  ): CMarketingMessagesUpdateMarketingMessageResponse {
    const message = createBaseCMarketingMessagesUpdateMarketingMessageResponse();
    return message;
  },
};

function createBaseCMarketingMessagesDeleteMarketingMessageRequest(): CMarketingMessagesDeleteMarketingMessageRequest {
  return { gid: 0 };
}

export const CMarketingMessagesDeleteMarketingMessageRequest = {
  encode(
    message: CMarketingMessagesDeleteMarketingMessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gid !== 0) {
      writer.uint32(9).fixed64(message.gid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesDeleteMarketingMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesDeleteMarketingMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesDeleteMarketingMessageRequest {
    return { gid: isSet(object.gid) ? Number(object.gid) : 0 };
  },

  toJSON(message: CMarketingMessagesDeleteMarketingMessageRequest): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesDeleteMarketingMessageRequest>, I>>(
    base?: I,
  ): CMarketingMessagesDeleteMarketingMessageRequest {
    return CMarketingMessagesDeleteMarketingMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesDeleteMarketingMessageRequest>, I>>(
    object: I,
  ): CMarketingMessagesDeleteMarketingMessageRequest {
    const message = createBaseCMarketingMessagesDeleteMarketingMessageRequest();
    message.gid = object.gid ?? 0;
    return message;
  },
};

function createBaseCMarketingMessagesDeleteMarketingMessageResponse(): CMarketingMessagesDeleteMarketingMessageResponse {
  return {};
}

export const CMarketingMessagesDeleteMarketingMessageResponse = {
  encode(_: CMarketingMessagesDeleteMarketingMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesDeleteMarketingMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesDeleteMarketingMessageResponse();
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

  fromJSON(_: any): CMarketingMessagesDeleteMarketingMessageResponse {
    return {};
  },

  toJSON(_: CMarketingMessagesDeleteMarketingMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesDeleteMarketingMessageResponse>, I>>(
    base?: I,
  ): CMarketingMessagesDeleteMarketingMessageResponse {
    return CMarketingMessagesDeleteMarketingMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesDeleteMarketingMessageResponse>, I>>(
    _: I,
  ): CMarketingMessagesDeleteMarketingMessageResponse {
    const message = createBaseCMarketingMessagesDeleteMarketingMessageResponse();
    return message;
  },
};

function createBaseCMarketingMessagesFindMarketingMessagesRequest(): CMarketingMessagesFindMarketingMessagesRequest {
  return { lookupType: 0, gid: 0, messageType: 0, gidlist: [], title: "" };
}

export const CMarketingMessagesFindMarketingMessagesRequest = {
  encode(
    message: CMarketingMessagesFindMarketingMessagesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.lookupType !== 0) {
      writer.uint32(8).int32(message.lookupType);
    }
    if (message.gid !== 0) {
      writer.uint32(17).fixed64(message.gid);
    }
    if (message.messageType !== 0) {
      writer.uint32(24).int32(message.messageType);
    }
    writer.uint32(34).fork();
    for (const v of message.gidlist) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesFindMarketingMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesFindMarketingMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lookupType = reader.int32() as any;
          break;
        case 2:
          message.gid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.messageType = reader.int32() as any;
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gidlist.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.gidlist.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        case 5:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesFindMarketingMessagesRequest {
    return {
      lookupType: isSet(object.lookupType) ? eMarketingMessageLookupTypeFromJSON(object.lookupType) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      messageType: isSet(object.messageType) ? eMarketingMessageTypeFromJSON(object.messageType) : 0,
      gidlist: Array.isArray(object?.gidlist) ? object.gidlist.map((e: any) => Number(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CMarketingMessagesFindMarketingMessagesRequest): unknown {
    const obj: any = {};
    message.lookupType !== undefined && (obj.lookupType = eMarketingMessageLookupTypeToJSON(message.lookupType));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.messageType !== undefined && (obj.messageType = eMarketingMessageTypeToJSON(message.messageType));
    if (message.gidlist) {
      obj.gidlist = message.gidlist.map((e) => Math.round(e));
    } else {
      obj.gidlist = [];
    }
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesFindMarketingMessagesRequest>, I>>(
    base?: I,
  ): CMarketingMessagesFindMarketingMessagesRequest {
    return CMarketingMessagesFindMarketingMessagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesFindMarketingMessagesRequest>, I>>(
    object: I,
  ): CMarketingMessagesFindMarketingMessagesRequest {
    const message = createBaseCMarketingMessagesFindMarketingMessagesRequest();
    message.lookupType = object.lookupType ?? 0;
    message.gid = object.gid ?? 0;
    message.messageType = object.messageType ?? 0;
    message.gidlist = object.gidlist?.map((e) => e) || [];
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCMarketingMessagesFindMarketingMessagesResponse(): CMarketingMessagesFindMarketingMessagesResponse {
  return { messages: [] };
}

export const CMarketingMessagesFindMarketingMessagesResponse = {
  encode(
    message: CMarketingMessagesFindMarketingMessagesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      CMarketingMessageProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMarketingMessagesFindMarketingMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMarketingMessagesFindMarketingMessagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(CMarketingMessageProto.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMarketingMessagesFindMarketingMessagesResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CMarketingMessageProto.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMarketingMessagesFindMarketingMessagesResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? CMarketingMessageProto.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMarketingMessagesFindMarketingMessagesResponse>, I>>(
    base?: I,
  ): CMarketingMessagesFindMarketingMessagesResponse {
    return CMarketingMessagesFindMarketingMessagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMarketingMessagesFindMarketingMessagesResponse>, I>>(
    object: I,
  ): CMarketingMessagesFindMarketingMessagesResponse {
    const message = createBaseCMarketingMessagesFindMarketingMessagesResponse();
    message.messages = object.messages?.map((e) => CMarketingMessageProto.fromPartial(e)) || [];
    return message;
  },
};

export interface MarketingMessages {
  GetActiveMarketingMessages(
    request: CMarketingMessagesGetActiveMarketingMessagesRequest,
  ): Promise<CMarketingMessagesGetActiveMarketingMessagesResponse>;
  GetMarketingMessagesForUser(
    request: CMarketingMessagesGetMarketingMessagesForUserRequest,
  ): Promise<CMarketingMessagesGetMarketingMessagesForUserResponse>;
  DoesUserHavePendingMarketingMessages(
    request: CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest,
  ): Promise<CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse>;
  GetDisplayMarketingMessage(
    request: CMarketingMessagesGetDisplayMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetDisplayMarketingMessageResponse>;
  GetDisplayMarketingMessageAdmin(
    request: CMarketingMessagesGetDisplayMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetDisplayMarketingMessageResponse>;
  MarkMessageSeen(request: CMarketingMessagesMarkMessageSeenNotification): Promise<NoResponse>;
  GetMarketingMessage(
    request: CMarketingMessagesGetMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetMarketingMessageResponse>;
  CreateMarketingMessage(
    request: CMarketingMessagesCreateMarketingMessageRequest,
  ): Promise<CMarketingMessagesCreateMarketingMessageResponse>;
  UpdateMarketingMessage(
    request: CMarketingMessagesUpdateMarketingMessageRequest,
  ): Promise<CMarketingMessagesUpdateMarketingMessageResponse>;
  DeleteMarketingMessage(
    request: CMarketingMessagesDeleteMarketingMessageRequest,
  ): Promise<CMarketingMessagesDeleteMarketingMessageResponse>;
  FindMarketingMessages(
    request: CMarketingMessagesFindMarketingMessagesRequest,
  ): Promise<CMarketingMessagesFindMarketingMessagesResponse>;
}

export class MarketingMessagesClientImpl implements MarketingMessages {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "MarketingMessages";
    this.rpc = rpc;
    this.GetActiveMarketingMessages = this.GetActiveMarketingMessages.bind(this);
    this.GetMarketingMessagesForUser = this.GetMarketingMessagesForUser.bind(this);
    this.DoesUserHavePendingMarketingMessages = this.DoesUserHavePendingMarketingMessages.bind(this);
    this.GetDisplayMarketingMessage = this.GetDisplayMarketingMessage.bind(this);
    this.GetDisplayMarketingMessageAdmin = this.GetDisplayMarketingMessageAdmin.bind(this);
    this.MarkMessageSeen = this.MarkMessageSeen.bind(this);
    this.GetMarketingMessage = this.GetMarketingMessage.bind(this);
    this.CreateMarketingMessage = this.CreateMarketingMessage.bind(this);
    this.UpdateMarketingMessage = this.UpdateMarketingMessage.bind(this);
    this.DeleteMarketingMessage = this.DeleteMarketingMessage.bind(this);
    this.FindMarketingMessages = this.FindMarketingMessages.bind(this);
  }
  GetActiveMarketingMessages(
    request: CMarketingMessagesGetActiveMarketingMessagesRequest,
  ): Promise<CMarketingMessagesGetActiveMarketingMessagesResponse> {
    const data = CMarketingMessagesGetActiveMarketingMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetActiveMarketingMessages", data);
    return promise.then((data) => CMarketingMessagesGetActiveMarketingMessagesResponse.decode(new _m0.Reader(data)));
  }

  GetMarketingMessagesForUser(
    request: CMarketingMessagesGetMarketingMessagesForUserRequest,
  ): Promise<CMarketingMessagesGetMarketingMessagesForUserResponse> {
    const data = CMarketingMessagesGetMarketingMessagesForUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMarketingMessagesForUser", data);
    return promise.then((data) => CMarketingMessagesGetMarketingMessagesForUserResponse.decode(new _m0.Reader(data)));
  }

  DoesUserHavePendingMarketingMessages(
    request: CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest,
  ): Promise<CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse> {
    const data = CMarketingMessagesDoesUserHavePendingMarketingMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DoesUserHavePendingMarketingMessages", data);
    return promise.then((data) =>
      CMarketingMessagesDoesUserHavePendingMarketingMessagesResponse.decode(new _m0.Reader(data))
    );
  }

  GetDisplayMarketingMessage(
    request: CMarketingMessagesGetDisplayMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetDisplayMarketingMessageResponse> {
    const data = CMarketingMessagesGetDisplayMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDisplayMarketingMessage", data);
    return promise.then((data) => CMarketingMessagesGetDisplayMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  GetDisplayMarketingMessageAdmin(
    request: CMarketingMessagesGetDisplayMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetDisplayMarketingMessageResponse> {
    const data = CMarketingMessagesGetDisplayMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDisplayMarketingMessageAdmin", data);
    return promise.then((data) => CMarketingMessagesGetDisplayMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  MarkMessageSeen(request: CMarketingMessagesMarkMessageSeenNotification): Promise<NoResponse> {
    const data = CMarketingMessagesMarkMessageSeenNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "MarkMessageSeen", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  GetMarketingMessage(
    request: CMarketingMessagesGetMarketingMessageRequest,
  ): Promise<CMarketingMessagesGetMarketingMessageResponse> {
    const data = CMarketingMessagesGetMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMarketingMessage", data);
    return promise.then((data) => CMarketingMessagesGetMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  CreateMarketingMessage(
    request: CMarketingMessagesCreateMarketingMessageRequest,
  ): Promise<CMarketingMessagesCreateMarketingMessageResponse> {
    const data = CMarketingMessagesCreateMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateMarketingMessage", data);
    return promise.then((data) => CMarketingMessagesCreateMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  UpdateMarketingMessage(
    request: CMarketingMessagesUpdateMarketingMessageRequest,
  ): Promise<CMarketingMessagesUpdateMarketingMessageResponse> {
    const data = CMarketingMessagesUpdateMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMarketingMessage", data);
    return promise.then((data) => CMarketingMessagesUpdateMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  DeleteMarketingMessage(
    request: CMarketingMessagesDeleteMarketingMessageRequest,
  ): Promise<CMarketingMessagesDeleteMarketingMessageResponse> {
    const data = CMarketingMessagesDeleteMarketingMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteMarketingMessage", data);
    return promise.then((data) => CMarketingMessagesDeleteMarketingMessageResponse.decode(new _m0.Reader(data)));
  }

  FindMarketingMessages(
    request: CMarketingMessagesFindMarketingMessagesRequest,
  ): Promise<CMarketingMessagesFindMarketingMessagesResponse> {
    const data = CMarketingMessagesFindMarketingMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindMarketingMessages", data);
    return promise.then((data) => CMarketingMessagesFindMarketingMessagesResponse.decode(new _m0.Reader(data)));
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
