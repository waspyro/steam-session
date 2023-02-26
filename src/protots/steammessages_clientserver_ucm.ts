/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientUCMAddScreenshot {
  appid: number;
  filename: string;
  thumbname: string;
  vrFilename: string;
  rtime32Created: number;
  width: number;
  height: number;
  permissions: number;
  caption: string;
  shortcutName: string;
  tag: CMsgClientUCMAddScreenshot_Tag[];
  taggedSteamid: string[];
  spoilerTag: boolean;
  taggedPublishedfileid: string[];
}

export interface CMsgClientUCMAddScreenshot_Tag {
  tagName: string;
  tagValue: string;
}

export interface CMsgClientUCMAddScreenshotResponse {
  eresult: number;
  screenshotid: string;
}

export interface CMsgClientUCMDeleteScreenshot {
  screenshotid: string;
}

export interface CMsgClientUCMDeleteScreenshotResponse {
  eresult: number;
}

export interface CMsgClientUCMPublishFile {
  appId: number;
  fileName: string;
  previewFileName: string;
  consumerAppId: number;
  title: string;
  description: string;
  tags: string[];
  workshopFile: boolean;
  visibility: number;
  fileType: number;
  url: string;
  videoProvider: number;
  videoAccountName: string;
  videoIdentifier: string;
  inProgress: boolean;
}

export interface CMsgClientUCMPublishFileResponse {
  eresult: number;
  publishedFileId: string;
  needsWorkshopLegalAgreementAcceptance: boolean;
}

export interface CMsgClientUCMUpdatePublishedFile {
  appId: number;
  publishedFileId: string;
  fileName: string;
  previewFileName: string;
  title: string;
  description: string;
  tags: string[];
  visibility: number;
  updateFile: boolean;
  updatePreviewFile: boolean;
  updateTitle: boolean;
  updateDescription: boolean;
  updateTags: boolean;
  updateVisibility: boolean;
  changeDescription: string;
  updateUrl: boolean;
  url: string;
  updateContentManifest: boolean;
  contentManifest: string;
  metadata: string;
  updateMetadata: boolean;
  language: number;
  removedKvtags: string[];
  kvtags: CMsgClientUCMUpdatePublishedFile_KeyValueTag[];
  previews: CMsgClientUCMUpdatePublishedFile_AdditionalPreview[];
  previewsToRemove: number[];
  clearInProgress: boolean;
  removeAllKvtags: boolean;
}

export interface CMsgClientUCMUpdatePublishedFile_KeyValueTag {
  key: string;
  value: string;
}

export interface CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
  originalFileName: string;
  internalFileName: string;
  videoid: string;
  previewType: number;
  updateIndex: number;
}

export interface CMsgClientUCMUpdatePublishedFileResponse {
  eresult: number;
  needsWorkshopLegalAgreementAcceptance: boolean;
}

export interface CMsgClientUCMDeletePublishedFile {
  publishedFileId: string;
  appId: number;
}

export interface CMsgClientUCMDeletePublishedFileResponse {
  eresult: number;
}

export interface CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
  appId: number;
  startIndex: number;
  startTime: number;
  desiredRevision: number;
}

export interface CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
  eresult: number;
  subscribedFiles: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId[];
  totalResults: number;
}

export interface CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
  publishedFileId: string;
  rtime32Subscribed: number;
  appid: number;
  fileHcontent: string;
  fileSize: number;
  rtime32LastUpdated: number;
  isDepotContent: boolean;
}

export interface CMsgClientUCMPublishedFileUpdated {
  publishedFileId: string;
  appId: number;
  timeUpdated: number;
  hcontent: string;
  fileSize: number;
  isDepotContent: boolean;
  revision: number;
}

export interface CMsgClientWorkshopItemChangesRequest {
  appId: number;
  lastTimeUpdated: number;
  numItemsNeeded: number;
}

export interface CMsgClientWorkshopItemChangesResponse {
  eresult: number;
  updateTime: number;
  workshopItems: CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo[];
}

export interface CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
  publishedFileId: string;
  timeUpdated: number;
  manifestId: string;
}

export interface CMsgClientUCMSetUserPublishedFileAction {
  publishedFileId: string;
  appId: number;
  action: number;
}

export interface CMsgClientUCMSetUserPublishedFileActionResponse {
  eresult: number;
}

export interface CMsgClientUCMEnumeratePublishedFilesByUserAction {
  appId: number;
  startIndex: number;
  action: number;
}

export interface CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
  eresult: number;
  publishedFiles: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId[];
  totalResults: number;
}

export interface CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
  publishedFileId: string;
  rtimeTimeStamp: number;
}

export interface CMsgClientScreenshotsChanged {
}

function createBaseCMsgClientUCMAddScreenshot(): CMsgClientUCMAddScreenshot {
  return {
    appid: 0,
    filename: "",
    thumbname: "",
    vrFilename: "",
    rtime32Created: 0,
    width: 0,
    height: 0,
    permissions: 0,
    caption: "",
    shortcutName: "",
    tag: [],
    taggedSteamid: [],
    spoilerTag: false,
    taggedPublishedfileid: [],
  };
}

export const CMsgClientUCMAddScreenshot = {
  encode(message: CMsgClientUCMAddScreenshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    if (message.thumbname !== "") {
      writer.uint32(26).string(message.thumbname);
    }
    if (message.vrFilename !== "") {
      writer.uint32(114).string(message.vrFilename);
    }
    if (message.rtime32Created !== 0) {
      writer.uint32(37).fixed32(message.rtime32Created);
    }
    if (message.width !== 0) {
      writer.uint32(40).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(48).uint32(message.height);
    }
    if (message.permissions !== 0) {
      writer.uint32(56).uint32(message.permissions);
    }
    if (message.caption !== "") {
      writer.uint32(66).string(message.caption);
    }
    if (message.shortcutName !== "") {
      writer.uint32(74).string(message.shortcutName);
    }
    for (const v of message.tag) {
      CMsgClientUCMAddScreenshot_Tag.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    writer.uint32(90).fork();
    for (const v of message.taggedSteamid) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.spoilerTag === true) {
      writer.uint32(96).bool(message.spoilerTag);
    }
    writer.uint32(106).fork();
    for (const v of message.taggedPublishedfileid) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMAddScreenshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMAddScreenshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.filename = reader.string();
          break;
        case 3:
          message.thumbname = reader.string();
          break;
        case 14:
          message.vrFilename = reader.string();
          break;
        case 4:
          message.rtime32Created = reader.fixed32();
          break;
        case 5:
          message.width = reader.uint32();
          break;
        case 6:
          message.height = reader.uint32();
          break;
        case 7:
          message.permissions = reader.uint32();
          break;
        case 8:
          message.caption = reader.string();
          break;
        case 9:
          message.shortcutName = reader.string();
          break;
        case 10:
          message.tag.push(CMsgClientUCMAddScreenshot_Tag.decode(reader, reader.uint32()));
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.taggedSteamid.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.taggedSteamid.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 12:
          message.spoilerTag = reader.bool();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.taggedPublishedfileid.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.taggedPublishedfileid.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMAddScreenshot {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      thumbname: isSet(object.thumbname) ? String(object.thumbname) : "",
      vrFilename: isSet(object.vrFilename) ? String(object.vrFilename) : "",
      rtime32Created: isSet(object.rtime32Created) ? Number(object.rtime32Created) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      permissions: isSet(object.permissions) ? Number(object.permissions) : 0,
      caption: isSet(object.caption) ? String(object.caption) : "",
      shortcutName: isSet(object.shortcutName) ? String(object.shortcutName) : "",
      tag: Array.isArray(object?.tag) ? object.tag.map((e: any) => CMsgClientUCMAddScreenshot_Tag.fromJSON(e)) : [],
      taggedSteamid: Array.isArray(object?.taggedSteamid) ? object.taggedSteamid.map((e: any) => String(e)) : [],
      spoilerTag: isSet(object.spoilerTag) ? Boolean(object.spoilerTag) : false,
      taggedPublishedfileid: Array.isArray(object?.taggedPublishedfileid)
        ? object.taggedPublishedfileid.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUCMAddScreenshot): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.filename !== undefined && (obj.filename = message.filename);
    message.thumbname !== undefined && (obj.thumbname = message.thumbname);
    message.vrFilename !== undefined && (obj.vrFilename = message.vrFilename);
    message.rtime32Created !== undefined && (obj.rtime32Created = Math.round(message.rtime32Created));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.permissions !== undefined && (obj.permissions = Math.round(message.permissions));
    message.caption !== undefined && (obj.caption = message.caption);
    message.shortcutName !== undefined && (obj.shortcutName = message.shortcutName);
    if (message.tag) {
      obj.tag = message.tag.map((e) => e ? CMsgClientUCMAddScreenshot_Tag.toJSON(e) : undefined);
    } else {
      obj.tag = [];
    }
    if (message.taggedSteamid) {
      obj.taggedSteamid = message.taggedSteamid.map((e) => e);
    } else {
      obj.taggedSteamid = [];
    }
    message.spoilerTag !== undefined && (obj.spoilerTag = message.spoilerTag);
    if (message.taggedPublishedfileid) {
      obj.taggedPublishedfileid = message.taggedPublishedfileid.map((e) => e);
    } else {
      obj.taggedPublishedfileid = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshot>, I>>(base?: I): CMsgClientUCMAddScreenshot {
    return CMsgClientUCMAddScreenshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshot>, I>>(object: I): CMsgClientUCMAddScreenshot {
    const message = createBaseCMsgClientUCMAddScreenshot();
    message.appid = object.appid ?? 0;
    message.filename = object.filename ?? "";
    message.thumbname = object.thumbname ?? "";
    message.vrFilename = object.vrFilename ?? "";
    message.rtime32Created = object.rtime32Created ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.permissions = object.permissions ?? 0;
    message.caption = object.caption ?? "";
    message.shortcutName = object.shortcutName ?? "";
    message.tag = object.tag?.map((e) => CMsgClientUCMAddScreenshot_Tag.fromPartial(e)) || [];
    message.taggedSteamid = object.taggedSteamid?.map((e) => e) || [];
    message.spoilerTag = object.spoilerTag ?? false;
    message.taggedPublishedfileid = object.taggedPublishedfileid?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientUCMAddScreenshot_Tag(): CMsgClientUCMAddScreenshot_Tag {
  return { tagName: "", tagValue: "" };
}

export const CMsgClientUCMAddScreenshot_Tag = {
  encode(message: CMsgClientUCMAddScreenshot_Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tagName !== "") {
      writer.uint32(10).string(message.tagName);
    }
    if (message.tagValue !== "") {
      writer.uint32(18).string(message.tagValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMAddScreenshot_Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMAddScreenshot_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tagName = reader.string();
          break;
        case 2:
          message.tagValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMAddScreenshot_Tag {
    return {
      tagName: isSet(object.tagName) ? String(object.tagName) : "",
      tagValue: isSet(object.tagValue) ? String(object.tagValue) : "",
    };
  },

  toJSON(message: CMsgClientUCMAddScreenshot_Tag): unknown {
    const obj: any = {};
    message.tagName !== undefined && (obj.tagName = message.tagName);
    message.tagValue !== undefined && (obj.tagValue = message.tagValue);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshot_Tag>, I>>(base?: I): CMsgClientUCMAddScreenshot_Tag {
    return CMsgClientUCMAddScreenshot_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshot_Tag>, I>>(
    object: I,
  ): CMsgClientUCMAddScreenshot_Tag {
    const message = createBaseCMsgClientUCMAddScreenshot_Tag();
    message.tagName = object.tagName ?? "";
    message.tagValue = object.tagValue ?? "";
    return message;
  },
};

function createBaseCMsgClientUCMAddScreenshotResponse(): CMsgClientUCMAddScreenshotResponse {
  return { eresult: 0, screenshotid: "0" };
}

export const CMsgClientUCMAddScreenshotResponse = {
  encode(message: CMsgClientUCMAddScreenshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.screenshotid !== "0") {
      writer.uint32(17).fixed64(message.screenshotid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMAddScreenshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMAddScreenshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.screenshotid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMAddScreenshotResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      screenshotid: isSet(object.screenshotid) ? String(object.screenshotid) : "0",
    };
  },

  toJSON(message: CMsgClientUCMAddScreenshotResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.screenshotid !== undefined && (obj.screenshotid = message.screenshotid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshotResponse>, I>>(
    base?: I,
  ): CMsgClientUCMAddScreenshotResponse {
    return CMsgClientUCMAddScreenshotResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMAddScreenshotResponse>, I>>(
    object: I,
  ): CMsgClientUCMAddScreenshotResponse {
    const message = createBaseCMsgClientUCMAddScreenshotResponse();
    message.eresult = object.eresult ?? 0;
    message.screenshotid = object.screenshotid ?? "0";
    return message;
  },
};

function createBaseCMsgClientUCMDeleteScreenshot(): CMsgClientUCMDeleteScreenshot {
  return { screenshotid: "0" };
}

export const CMsgClientUCMDeleteScreenshot = {
  encode(message: CMsgClientUCMDeleteScreenshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenshotid !== "0") {
      writer.uint32(9).fixed64(message.screenshotid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMDeleteScreenshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMDeleteScreenshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenshotid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMDeleteScreenshot {
    return { screenshotid: isSet(object.screenshotid) ? String(object.screenshotid) : "0" };
  },

  toJSON(message: CMsgClientUCMDeleteScreenshot): unknown {
    const obj: any = {};
    message.screenshotid !== undefined && (obj.screenshotid = message.screenshotid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMDeleteScreenshot>, I>>(base?: I): CMsgClientUCMDeleteScreenshot {
    return CMsgClientUCMDeleteScreenshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMDeleteScreenshot>, I>>(
    object: I,
  ): CMsgClientUCMDeleteScreenshot {
    const message = createBaseCMsgClientUCMDeleteScreenshot();
    message.screenshotid = object.screenshotid ?? "0";
    return message;
  },
};

function createBaseCMsgClientUCMDeleteScreenshotResponse(): CMsgClientUCMDeleteScreenshotResponse {
  return { eresult: 0 };
}

export const CMsgClientUCMDeleteScreenshotResponse = {
  encode(message: CMsgClientUCMDeleteScreenshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMDeleteScreenshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMDeleteScreenshotResponse();
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

  fromJSON(object: any): CMsgClientUCMDeleteScreenshotResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientUCMDeleteScreenshotResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMDeleteScreenshotResponse>, I>>(
    base?: I,
  ): CMsgClientUCMDeleteScreenshotResponse {
    return CMsgClientUCMDeleteScreenshotResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMDeleteScreenshotResponse>, I>>(
    object: I,
  ): CMsgClientUCMDeleteScreenshotResponse {
    const message = createBaseCMsgClientUCMDeleteScreenshotResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMPublishFile(): CMsgClientUCMPublishFile {
  return {
    appId: 0,
    fileName: "",
    previewFileName: "",
    consumerAppId: 0,
    title: "",
    description: "",
    tags: [],
    workshopFile: false,
    visibility: 0,
    fileType: 0,
    url: "",
    videoProvider: 0,
    videoAccountName: "",
    videoIdentifier: "",
    inProgress: false,
  };
}

export const CMsgClientUCMPublishFile = {
  encode(message: CMsgClientUCMPublishFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    if (message.previewFileName !== "") {
      writer.uint32(26).string(message.previewFileName);
    }
    if (message.consumerAppId !== 0) {
      writer.uint32(32).uint32(message.consumerAppId);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.workshopFile === true) {
      writer.uint32(72).bool(message.workshopFile);
    }
    if (message.visibility !== 0) {
      writer.uint32(80).int32(message.visibility);
    }
    if (message.fileType !== 0) {
      writer.uint32(88).uint32(message.fileType);
    }
    if (message.url !== "") {
      writer.uint32(98).string(message.url);
    }
    if (message.videoProvider !== 0) {
      writer.uint32(104).uint32(message.videoProvider);
    }
    if (message.videoAccountName !== "") {
      writer.uint32(114).string(message.videoAccountName);
    }
    if (message.videoIdentifier !== "") {
      writer.uint32(122).string(message.videoIdentifier);
    }
    if (message.inProgress === true) {
      writer.uint32(128).bool(message.inProgress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMPublishFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMPublishFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.fileName = reader.string();
          break;
        case 3:
          message.previewFileName = reader.string();
          break;
        case 4:
          message.consumerAppId = reader.uint32();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        case 9:
          message.workshopFile = reader.bool();
          break;
        case 10:
          message.visibility = reader.int32();
          break;
        case 11:
          message.fileType = reader.uint32();
          break;
        case 12:
          message.url = reader.string();
          break;
        case 13:
          message.videoProvider = reader.uint32();
          break;
        case 14:
          message.videoAccountName = reader.string();
          break;
        case 15:
          message.videoIdentifier = reader.string();
          break;
        case 16:
          message.inProgress = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMPublishFile {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      previewFileName: isSet(object.previewFileName) ? String(object.previewFileName) : "",
      consumerAppId: isSet(object.consumerAppId) ? Number(object.consumerAppId) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      workshopFile: isSet(object.workshopFile) ? Boolean(object.workshopFile) : false,
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      fileType: isSet(object.fileType) ? Number(object.fileType) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      videoProvider: isSet(object.videoProvider) ? Number(object.videoProvider) : 0,
      videoAccountName: isSet(object.videoAccountName) ? String(object.videoAccountName) : "",
      videoIdentifier: isSet(object.videoIdentifier) ? String(object.videoIdentifier) : "",
      inProgress: isSet(object.inProgress) ? Boolean(object.inProgress) : false,
    };
  },

  toJSON(message: CMsgClientUCMPublishFile): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.previewFileName !== undefined && (obj.previewFileName = message.previewFileName);
    message.consumerAppId !== undefined && (obj.consumerAppId = Math.round(message.consumerAppId));
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.workshopFile !== undefined && (obj.workshopFile = message.workshopFile);
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.fileType !== undefined && (obj.fileType = Math.round(message.fileType));
    message.url !== undefined && (obj.url = message.url);
    message.videoProvider !== undefined && (obj.videoProvider = Math.round(message.videoProvider));
    message.videoAccountName !== undefined && (obj.videoAccountName = message.videoAccountName);
    message.videoIdentifier !== undefined && (obj.videoIdentifier = message.videoIdentifier);
    message.inProgress !== undefined && (obj.inProgress = message.inProgress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMPublishFile>, I>>(base?: I): CMsgClientUCMPublishFile {
    return CMsgClientUCMPublishFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMPublishFile>, I>>(object: I): CMsgClientUCMPublishFile {
    const message = createBaseCMsgClientUCMPublishFile();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    message.previewFileName = object.previewFileName ?? "";
    message.consumerAppId = object.consumerAppId ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.workshopFile = object.workshopFile ?? false;
    message.visibility = object.visibility ?? 0;
    message.fileType = object.fileType ?? 0;
    message.url = object.url ?? "";
    message.videoProvider = object.videoProvider ?? 0;
    message.videoAccountName = object.videoAccountName ?? "";
    message.videoIdentifier = object.videoIdentifier ?? "";
    message.inProgress = object.inProgress ?? false;
    return message;
  },
};

function createBaseCMsgClientUCMPublishFileResponse(): CMsgClientUCMPublishFileResponse {
  return { eresult: 0, publishedFileId: "0", needsWorkshopLegalAgreementAcceptance: false };
}

export const CMsgClientUCMPublishFileResponse = {
  encode(message: CMsgClientUCMPublishFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.publishedFileId !== "0") {
      writer.uint32(17).fixed64(message.publishedFileId);
    }
    if (message.needsWorkshopLegalAgreementAcceptance === true) {
      writer.uint32(24).bool(message.needsWorkshopLegalAgreementAcceptance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMPublishFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMPublishFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.needsWorkshopLegalAgreementAcceptance = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMPublishFileResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      needsWorkshopLegalAgreementAcceptance: isSet(object.needsWorkshopLegalAgreementAcceptance)
        ? Boolean(object.needsWorkshopLegalAgreementAcceptance)
        : false,
    };
  },

  toJSON(message: CMsgClientUCMPublishFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.needsWorkshopLegalAgreementAcceptance !== undefined &&
      (obj.needsWorkshopLegalAgreementAcceptance = message.needsWorkshopLegalAgreementAcceptance);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMPublishFileResponse>, I>>(
    base?: I,
  ): CMsgClientUCMPublishFileResponse {
    return CMsgClientUCMPublishFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMPublishFileResponse>, I>>(
    object: I,
  ): CMsgClientUCMPublishFileResponse {
    const message = createBaseCMsgClientUCMPublishFileResponse();
    message.eresult = object.eresult ?? 0;
    message.publishedFileId = object.publishedFileId ?? "0";
    message.needsWorkshopLegalAgreementAcceptance = object.needsWorkshopLegalAgreementAcceptance ?? false;
    return message;
  },
};

function createBaseCMsgClientUCMUpdatePublishedFile(): CMsgClientUCMUpdatePublishedFile {
  return {
    appId: 0,
    publishedFileId: "0",
    fileName: "",
    previewFileName: "",
    title: "",
    description: "",
    tags: [],
    visibility: 0,
    updateFile: false,
    updatePreviewFile: false,
    updateTitle: false,
    updateDescription: false,
    updateTags: false,
    updateVisibility: false,
    changeDescription: "",
    updateUrl: false,
    url: "",
    updateContentManifest: false,
    contentManifest: "0",
    metadata: "",
    updateMetadata: false,
    language: 0,
    removedKvtags: [],
    kvtags: [],
    previews: [],
    previewsToRemove: [],
    clearInProgress: false,
    removeAllKvtags: false,
  };
}

export const CMsgClientUCMUpdatePublishedFile = {
  encode(message: CMsgClientUCMUpdatePublishedFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.publishedFileId !== "0") {
      writer.uint32(17).fixed64(message.publishedFileId);
    }
    if (message.fileName !== "") {
      writer.uint32(26).string(message.fileName);
    }
    if (message.previewFileName !== "") {
      writer.uint32(34).string(message.previewFileName);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    if (message.visibility !== 0) {
      writer.uint32(64).int32(message.visibility);
    }
    if (message.updateFile === true) {
      writer.uint32(72).bool(message.updateFile);
    }
    if (message.updatePreviewFile === true) {
      writer.uint32(80).bool(message.updatePreviewFile);
    }
    if (message.updateTitle === true) {
      writer.uint32(88).bool(message.updateTitle);
    }
    if (message.updateDescription === true) {
      writer.uint32(96).bool(message.updateDescription);
    }
    if (message.updateTags === true) {
      writer.uint32(104).bool(message.updateTags);
    }
    if (message.updateVisibility === true) {
      writer.uint32(112).bool(message.updateVisibility);
    }
    if (message.changeDescription !== "") {
      writer.uint32(122).string(message.changeDescription);
    }
    if (message.updateUrl === true) {
      writer.uint32(128).bool(message.updateUrl);
    }
    if (message.url !== "") {
      writer.uint32(138).string(message.url);
    }
    if (message.updateContentManifest === true) {
      writer.uint32(144).bool(message.updateContentManifest);
    }
    if (message.contentManifest !== "0") {
      writer.uint32(153).fixed64(message.contentManifest);
    }
    if (message.metadata !== "") {
      writer.uint32(162).string(message.metadata);
    }
    if (message.updateMetadata === true) {
      writer.uint32(168).bool(message.updateMetadata);
    }
    if (message.language !== 0) {
      writer.uint32(176).int32(message.language);
    }
    for (const v of message.removedKvtags) {
      writer.uint32(186).string(v!);
    }
    for (const v of message.kvtags) {
      CMsgClientUCMUpdatePublishedFile_KeyValueTag.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.previews) {
      CMsgClientUCMUpdatePublishedFile_AdditionalPreview.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    writer.uint32(210).fork();
    for (const v of message.previewsToRemove) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.clearInProgress === true) {
      writer.uint32(216).bool(message.clearInProgress);
    }
    if (message.removeAllKvtags === true) {
      writer.uint32(224).bool(message.removeAllKvtags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMUpdatePublishedFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMUpdatePublishedFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.fileName = reader.string();
          break;
        case 4:
          message.previewFileName = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        case 7:
          message.tags.push(reader.string());
          break;
        case 8:
          message.visibility = reader.int32();
          break;
        case 9:
          message.updateFile = reader.bool();
          break;
        case 10:
          message.updatePreviewFile = reader.bool();
          break;
        case 11:
          message.updateTitle = reader.bool();
          break;
        case 12:
          message.updateDescription = reader.bool();
          break;
        case 13:
          message.updateTags = reader.bool();
          break;
        case 14:
          message.updateVisibility = reader.bool();
          break;
        case 15:
          message.changeDescription = reader.string();
          break;
        case 16:
          message.updateUrl = reader.bool();
          break;
        case 17:
          message.url = reader.string();
          break;
        case 18:
          message.updateContentManifest = reader.bool();
          break;
        case 19:
          message.contentManifest = longToString(reader.fixed64() as Long);
          break;
        case 20:
          message.metadata = reader.string();
          break;
        case 21:
          message.updateMetadata = reader.bool();
          break;
        case 22:
          message.language = reader.int32();
          break;
        case 23:
          message.removedKvtags.push(reader.string());
          break;
        case 24:
          message.kvtags.push(CMsgClientUCMUpdatePublishedFile_KeyValueTag.decode(reader, reader.uint32()));
          break;
        case 25:
          message.previews.push(CMsgClientUCMUpdatePublishedFile_AdditionalPreview.decode(reader, reader.uint32()));
          break;
        case 26:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.previewsToRemove.push(reader.int32());
            }
          } else {
            message.previewsToRemove.push(reader.int32());
          }
          break;
        case 27:
          message.clearInProgress = reader.bool();
          break;
        case 28:
          message.removeAllKvtags = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMUpdatePublishedFile {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      previewFileName: isSet(object.previewFileName) ? String(object.previewFileName) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      visibility: isSet(object.visibility) ? Number(object.visibility) : 0,
      updateFile: isSet(object.updateFile) ? Boolean(object.updateFile) : false,
      updatePreviewFile: isSet(object.updatePreviewFile) ? Boolean(object.updatePreviewFile) : false,
      updateTitle: isSet(object.updateTitle) ? Boolean(object.updateTitle) : false,
      updateDescription: isSet(object.updateDescription) ? Boolean(object.updateDescription) : false,
      updateTags: isSet(object.updateTags) ? Boolean(object.updateTags) : false,
      updateVisibility: isSet(object.updateVisibility) ? Boolean(object.updateVisibility) : false,
      changeDescription: isSet(object.changeDescription) ? String(object.changeDescription) : "",
      updateUrl: isSet(object.updateUrl) ? Boolean(object.updateUrl) : false,
      url: isSet(object.url) ? String(object.url) : "",
      updateContentManifest: isSet(object.updateContentManifest) ? Boolean(object.updateContentManifest) : false,
      contentManifest: isSet(object.contentManifest) ? String(object.contentManifest) : "0",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      updateMetadata: isSet(object.updateMetadata) ? Boolean(object.updateMetadata) : false,
      language: isSet(object.language) ? Number(object.language) : 0,
      removedKvtags: Array.isArray(object?.removedKvtags) ? object.removedKvtags.map((e: any) => String(e)) : [],
      kvtags: Array.isArray(object?.kvtags)
        ? object.kvtags.map((e: any) => CMsgClientUCMUpdatePublishedFile_KeyValueTag.fromJSON(e))
        : [],
      previews: Array.isArray(object?.previews)
        ? object.previews.map((e: any) => CMsgClientUCMUpdatePublishedFile_AdditionalPreview.fromJSON(e))
        : [],
      previewsToRemove: Array.isArray(object?.previewsToRemove)
        ? object.previewsToRemove.map((e: any) => Number(e))
        : [],
      clearInProgress: isSet(object.clearInProgress) ? Boolean(object.clearInProgress) : false,
      removeAllKvtags: isSet(object.removeAllKvtags) ? Boolean(object.removeAllKvtags) : false,
    };
  },

  toJSON(message: CMsgClientUCMUpdatePublishedFile): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.previewFileName !== undefined && (obj.previewFileName = message.previewFileName);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.visibility !== undefined && (obj.visibility = Math.round(message.visibility));
    message.updateFile !== undefined && (obj.updateFile = message.updateFile);
    message.updatePreviewFile !== undefined && (obj.updatePreviewFile = message.updatePreviewFile);
    message.updateTitle !== undefined && (obj.updateTitle = message.updateTitle);
    message.updateDescription !== undefined && (obj.updateDescription = message.updateDescription);
    message.updateTags !== undefined && (obj.updateTags = message.updateTags);
    message.updateVisibility !== undefined && (obj.updateVisibility = message.updateVisibility);
    message.changeDescription !== undefined && (obj.changeDescription = message.changeDescription);
    message.updateUrl !== undefined && (obj.updateUrl = message.updateUrl);
    message.url !== undefined && (obj.url = message.url);
    message.updateContentManifest !== undefined && (obj.updateContentManifest = message.updateContentManifest);
    message.contentManifest !== undefined && (obj.contentManifest = message.contentManifest);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.updateMetadata !== undefined && (obj.updateMetadata = message.updateMetadata);
    message.language !== undefined && (obj.language = Math.round(message.language));
    if (message.removedKvtags) {
      obj.removedKvtags = message.removedKvtags.map((e) => e);
    } else {
      obj.removedKvtags = [];
    }
    if (message.kvtags) {
      obj.kvtags = message.kvtags.map((e) => e ? CMsgClientUCMUpdatePublishedFile_KeyValueTag.toJSON(e) : undefined);
    } else {
      obj.kvtags = [];
    }
    if (message.previews) {
      obj.previews = message.previews.map((e) =>
        e ? CMsgClientUCMUpdatePublishedFile_AdditionalPreview.toJSON(e) : undefined
      );
    } else {
      obj.previews = [];
    }
    if (message.previewsToRemove) {
      obj.previewsToRemove = message.previewsToRemove.map((e) => Math.round(e));
    } else {
      obj.previewsToRemove = [];
    }
    message.clearInProgress !== undefined && (obj.clearInProgress = message.clearInProgress);
    message.removeAllKvtags !== undefined && (obj.removeAllKvtags = message.removeAllKvtags);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile>, I>>(
    base?: I,
  ): CMsgClientUCMUpdatePublishedFile {
    return CMsgClientUCMUpdatePublishedFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile>, I>>(
    object: I,
  ): CMsgClientUCMUpdatePublishedFile {
    const message = createBaseCMsgClientUCMUpdatePublishedFile();
    message.appId = object.appId ?? 0;
    message.publishedFileId = object.publishedFileId ?? "0";
    message.fileName = object.fileName ?? "";
    message.previewFileName = object.previewFileName ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.visibility = object.visibility ?? 0;
    message.updateFile = object.updateFile ?? false;
    message.updatePreviewFile = object.updatePreviewFile ?? false;
    message.updateTitle = object.updateTitle ?? false;
    message.updateDescription = object.updateDescription ?? false;
    message.updateTags = object.updateTags ?? false;
    message.updateVisibility = object.updateVisibility ?? false;
    message.changeDescription = object.changeDescription ?? "";
    message.updateUrl = object.updateUrl ?? false;
    message.url = object.url ?? "";
    message.updateContentManifest = object.updateContentManifest ?? false;
    message.contentManifest = object.contentManifest ?? "0";
    message.metadata = object.metadata ?? "";
    message.updateMetadata = object.updateMetadata ?? false;
    message.language = object.language ?? 0;
    message.removedKvtags = object.removedKvtags?.map((e) => e) || [];
    message.kvtags = object.kvtags?.map((e) => CMsgClientUCMUpdatePublishedFile_KeyValueTag.fromPartial(e)) || [];
    message.previews = object.previews?.map((e) => CMsgClientUCMUpdatePublishedFile_AdditionalPreview.fromPartial(e)) ||
      [];
    message.previewsToRemove = object.previewsToRemove?.map((e) => e) || [];
    message.clearInProgress = object.clearInProgress ?? false;
    message.removeAllKvtags = object.removeAllKvtags ?? false;
    return message;
  },
};

function createBaseCMsgClientUCMUpdatePublishedFile_KeyValueTag(): CMsgClientUCMUpdatePublishedFile_KeyValueTag {
  return { key: "", value: "" };
}

export const CMsgClientUCMUpdatePublishedFile_KeyValueTag = {
  encode(message: CMsgClientUCMUpdatePublishedFile_KeyValueTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMUpdatePublishedFile_KeyValueTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMUpdatePublishedFile_KeyValueTag();
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

  fromJSON(object: any): CMsgClientUCMUpdatePublishedFile_KeyValueTag {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CMsgClientUCMUpdatePublishedFile_KeyValueTag): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile_KeyValueTag>, I>>(
    base?: I,
  ): CMsgClientUCMUpdatePublishedFile_KeyValueTag {
    return CMsgClientUCMUpdatePublishedFile_KeyValueTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile_KeyValueTag>, I>>(
    object: I,
  ): CMsgClientUCMUpdatePublishedFile_KeyValueTag {
    const message = createBaseCMsgClientUCMUpdatePublishedFile_KeyValueTag();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCMsgClientUCMUpdatePublishedFile_AdditionalPreview(): CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
  return { originalFileName: "", internalFileName: "", videoid: "", previewType: 0, updateIndex: 0 };
}

export const CMsgClientUCMUpdatePublishedFile_AdditionalPreview = {
  encode(
    message: CMsgClientUCMUpdatePublishedFile_AdditionalPreview,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.originalFileName !== "") {
      writer.uint32(10).string(message.originalFileName);
    }
    if (message.internalFileName !== "") {
      writer.uint32(18).string(message.internalFileName);
    }
    if (message.videoid !== "") {
      writer.uint32(26).string(message.videoid);
    }
    if (message.previewType !== 0) {
      writer.uint32(32).uint32(message.previewType);
    }
    if (message.updateIndex !== 0) {
      writer.uint32(40).int32(message.updateIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMUpdatePublishedFile_AdditionalPreview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalFileName = reader.string();
          break;
        case 2:
          message.internalFileName = reader.string();
          break;
        case 3:
          message.videoid = reader.string();
          break;
        case 4:
          message.previewType = reader.uint32();
          break;
        case 5:
          message.updateIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
    return {
      originalFileName: isSet(object.originalFileName) ? String(object.originalFileName) : "",
      internalFileName: isSet(object.internalFileName) ? String(object.internalFileName) : "",
      videoid: isSet(object.videoid) ? String(object.videoid) : "",
      previewType: isSet(object.previewType) ? Number(object.previewType) : 0,
      updateIndex: isSet(object.updateIndex) ? Number(object.updateIndex) : 0,
    };
  },

  toJSON(message: CMsgClientUCMUpdatePublishedFile_AdditionalPreview): unknown {
    const obj: any = {};
    message.originalFileName !== undefined && (obj.originalFileName = message.originalFileName);
    message.internalFileName !== undefined && (obj.internalFileName = message.internalFileName);
    message.videoid !== undefined && (obj.videoid = message.videoid);
    message.previewType !== undefined && (obj.previewType = Math.round(message.previewType));
    message.updateIndex !== undefined && (obj.updateIndex = Math.round(message.updateIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile_AdditionalPreview>, I>>(
    base?: I,
  ): CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
    return CMsgClientUCMUpdatePublishedFile_AdditionalPreview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFile_AdditionalPreview>, I>>(
    object: I,
  ): CMsgClientUCMUpdatePublishedFile_AdditionalPreview {
    const message = createBaseCMsgClientUCMUpdatePublishedFile_AdditionalPreview();
    message.originalFileName = object.originalFileName ?? "";
    message.internalFileName = object.internalFileName ?? "";
    message.videoid = object.videoid ?? "";
    message.previewType = object.previewType ?? 0;
    message.updateIndex = object.updateIndex ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMUpdatePublishedFileResponse(): CMsgClientUCMUpdatePublishedFileResponse {
  return { eresult: 0, needsWorkshopLegalAgreementAcceptance: false };
}

export const CMsgClientUCMUpdatePublishedFileResponse = {
  encode(message: CMsgClientUCMUpdatePublishedFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.needsWorkshopLegalAgreementAcceptance === true) {
      writer.uint32(16).bool(message.needsWorkshopLegalAgreementAcceptance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMUpdatePublishedFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMUpdatePublishedFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.needsWorkshopLegalAgreementAcceptance = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMUpdatePublishedFileResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      needsWorkshopLegalAgreementAcceptance: isSet(object.needsWorkshopLegalAgreementAcceptance)
        ? Boolean(object.needsWorkshopLegalAgreementAcceptance)
        : false,
    };
  },

  toJSON(message: CMsgClientUCMUpdatePublishedFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.needsWorkshopLegalAgreementAcceptance !== undefined &&
      (obj.needsWorkshopLegalAgreementAcceptance = message.needsWorkshopLegalAgreementAcceptance);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFileResponse>, I>>(
    base?: I,
  ): CMsgClientUCMUpdatePublishedFileResponse {
    return CMsgClientUCMUpdatePublishedFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMUpdatePublishedFileResponse>, I>>(
    object: I,
  ): CMsgClientUCMUpdatePublishedFileResponse {
    const message = createBaseCMsgClientUCMUpdatePublishedFileResponse();
    message.eresult = object.eresult ?? 0;
    message.needsWorkshopLegalAgreementAcceptance = object.needsWorkshopLegalAgreementAcceptance ?? false;
    return message;
  },
};

function createBaseCMsgClientUCMDeletePublishedFile(): CMsgClientUCMDeletePublishedFile {
  return { publishedFileId: "0", appId: 0 };
}

export const CMsgClientUCMDeletePublishedFile = {
  encode(message: CMsgClientUCMDeletePublishedFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMDeletePublishedFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMDeletePublishedFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): CMsgClientUCMDeletePublishedFile {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientUCMDeletePublishedFile): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMDeletePublishedFile>, I>>(
    base?: I,
  ): CMsgClientUCMDeletePublishedFile {
    return CMsgClientUCMDeletePublishedFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMDeletePublishedFile>, I>>(
    object: I,
  ): CMsgClientUCMDeletePublishedFile {
    const message = createBaseCMsgClientUCMDeletePublishedFile();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMDeletePublishedFileResponse(): CMsgClientUCMDeletePublishedFileResponse {
  return { eresult: 0 };
}

export const CMsgClientUCMDeletePublishedFileResponse = {
  encode(message: CMsgClientUCMDeletePublishedFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMDeletePublishedFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMDeletePublishedFileResponse();
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

  fromJSON(object: any): CMsgClientUCMDeletePublishedFileResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientUCMDeletePublishedFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMDeletePublishedFileResponse>, I>>(
    base?: I,
  ): CMsgClientUCMDeletePublishedFileResponse {
    return CMsgClientUCMDeletePublishedFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMDeletePublishedFileResponse>, I>>(
    object: I,
  ): CMsgClientUCMDeletePublishedFileResponse {
    const message = createBaseCMsgClientUCMDeletePublishedFileResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdates(): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
  return { appId: 0, startIndex: 0, startTime: 0, desiredRevision: 0 };
}

export const CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates = {
  encode(
    message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.startIndex !== 0) {
      writer.uint32(16).uint32(message.startIndex);
    }
    if (message.startTime !== 0) {
      writer.uint32(29).fixed32(message.startTime);
    }
    if (message.desiredRevision !== 0) {
      writer.uint32(32).uint32(message.desiredRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.startIndex = reader.uint32();
          break;
        case 3:
          message.startTime = reader.fixed32();
          break;
        case 4:
          message.desiredRevision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      desiredRevision: isSet(object.desiredRevision) ? Number(object.desiredRevision) : 0,
    };
  },

  toJSON(message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.desiredRevision !== undefined && (obj.desiredRevision = Math.round(message.desiredRevision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates>, I>>(
    base?: I,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
    return CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates>, I>>(
    object: I,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdates();
    message.appId = object.appId ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.startTime = object.startTime ?? 0;
    message.desiredRevision = object.desiredRevision ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse(): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
  return { eresult: 0, subscribedFiles: [], totalResults: 0 };
}

export const CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse = {
  encode(
    message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.subscribedFiles) {
      CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.encode(v!, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.totalResults !== 0) {
      writer.uint32(24).uint32(message.totalResults);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.subscribedFiles.push(
            CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        case 3:
          message.totalResults = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      subscribedFiles: Array.isArray(object?.subscribedFiles)
        ? object.subscribedFiles.map((e: any) =>
          CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.fromJSON(e)
        )
        : [],
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
    };
  },

  toJSON(message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.subscribedFiles) {
      obj.subscribedFiles = message.subscribedFiles.map((e) =>
        e ? CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.toJSON(e) : undefined
      );
    } else {
      obj.subscribedFiles = [];
    }
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse>, I>>(
    base?: I,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
    return CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse>, I>>(
    object: I,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse();
    message.eresult = object.eresult ?? 0;
    message.subscribedFiles =
      object.subscribedFiles?.map((e) =>
        CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.fromPartial(e)
      ) || [];
    message.totalResults = object.totalResults ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId(): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
  return {
    publishedFileId: "0",
    rtime32Subscribed: 0,
    appid: 0,
    fileHcontent: "0",
    fileSize: 0,
    rtime32LastUpdated: 0,
    isDepotContent: false,
  };
}

export const CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId = {
  encode(
    message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.rtime32Subscribed !== 0) {
      writer.uint32(21).fixed32(message.rtime32Subscribed);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    if (message.fileHcontent !== "0") {
      writer.uint32(33).fixed64(message.fileHcontent);
    }
    if (message.fileSize !== 0) {
      writer.uint32(40).uint32(message.fileSize);
    }
    if (message.rtime32LastUpdated !== 0) {
      writer.uint32(53).fixed32(message.rtime32LastUpdated);
    }
    if (message.isDepotContent === true) {
      writer.uint32(56).bool(message.isDepotContent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.rtime32Subscribed = reader.fixed32();
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        case 4:
          message.fileHcontent = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.fileSize = reader.uint32();
          break;
        case 6:
          message.rtime32LastUpdated = reader.fixed32();
          break;
        case 7:
          message.isDepotContent = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      rtime32Subscribed: isSet(object.rtime32Subscribed) ? Number(object.rtime32Subscribed) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileHcontent: isSet(object.fileHcontent) ? String(object.fileHcontent) : "0",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rtime32LastUpdated: isSet(object.rtime32LastUpdated) ? Number(object.rtime32LastUpdated) : 0,
      isDepotContent: isSet(object.isDepotContent) ? Boolean(object.isDepotContent) : false,
    };
  },

  toJSON(message: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.rtime32Subscribed !== undefined && (obj.rtime32Subscribed = Math.round(message.rtime32Subscribed));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileHcontent !== undefined && (obj.fileHcontent = message.fileHcontent);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rtime32LastUpdated !== undefined && (obj.rtime32LastUpdated = Math.round(message.rtime32LastUpdated));
    message.isDepotContent !== undefined && (obj.isDepotContent = message.isDepotContent);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId>, I>>(
    base?: I,
  ): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
    return CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId>, I>,
  >(object: I): CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId {
    const message = createBaseCMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse_PublishedFileId();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.rtime32Subscribed = object.rtime32Subscribed ?? 0;
    message.appid = object.appid ?? 0;
    message.fileHcontent = object.fileHcontent ?? "0";
    message.fileSize = object.fileSize ?? 0;
    message.rtime32LastUpdated = object.rtime32LastUpdated ?? 0;
    message.isDepotContent = object.isDepotContent ?? false;
    return message;
  },
};

function createBaseCMsgClientUCMPublishedFileUpdated(): CMsgClientUCMPublishedFileUpdated {
  return {
    publishedFileId: "0",
    appId: 0,
    timeUpdated: 0,
    hcontent: "0",
    fileSize: 0,
    isDepotContent: false,
    revision: 0,
  };
}

export const CMsgClientUCMPublishedFileUpdated = {
  encode(message: CMsgClientUCMPublishedFileUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(24).uint32(message.timeUpdated);
    }
    if (message.hcontent !== "0") {
      writer.uint32(33).fixed64(message.hcontent);
    }
    if (message.fileSize !== 0) {
      writer.uint32(45).fixed32(message.fileSize);
    }
    if (message.isDepotContent === true) {
      writer.uint32(48).bool(message.isDepotContent);
    }
    if (message.revision !== 0) {
      writer.uint32(56).uint32(message.revision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMPublishedFileUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMPublishedFileUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.timeUpdated = reader.uint32();
          break;
        case 4:
          message.hcontent = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.fileSize = reader.fixed32();
          break;
        case 6:
          message.isDepotContent = reader.bool();
          break;
        case 7:
          message.revision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMPublishedFileUpdated {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      hcontent: isSet(object.hcontent) ? String(object.hcontent) : "0",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      isDepotContent: isSet(object.isDepotContent) ? Boolean(object.isDepotContent) : false,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
    };
  },

  toJSON(message: CMsgClientUCMPublishedFileUpdated): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.hcontent !== undefined && (obj.hcontent = message.hcontent);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.isDepotContent !== undefined && (obj.isDepotContent = message.isDepotContent);
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMPublishedFileUpdated>, I>>(
    base?: I,
  ): CMsgClientUCMPublishedFileUpdated {
    return CMsgClientUCMPublishedFileUpdated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMPublishedFileUpdated>, I>>(
    object: I,
  ): CMsgClientUCMPublishedFileUpdated {
    const message = createBaseCMsgClientUCMPublishedFileUpdated();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.appId = object.appId ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.hcontent = object.hcontent ?? "0";
    message.fileSize = object.fileSize ?? 0;
    message.isDepotContent = object.isDepotContent ?? false;
    message.revision = object.revision ?? 0;
    return message;
  },
};

function createBaseCMsgClientWorkshopItemChangesRequest(): CMsgClientWorkshopItemChangesRequest {
  return { appId: 0, lastTimeUpdated: 0, numItemsNeeded: 0 };
}

export const CMsgClientWorkshopItemChangesRequest = {
  encode(message: CMsgClientWorkshopItemChangesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.lastTimeUpdated !== 0) {
      writer.uint32(16).uint32(message.lastTimeUpdated);
    }
    if (message.numItemsNeeded !== 0) {
      writer.uint32(24).uint32(message.numItemsNeeded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWorkshopItemChangesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWorkshopItemChangesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.lastTimeUpdated = reader.uint32();
          break;
        case 3:
          message.numItemsNeeded = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWorkshopItemChangesRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      lastTimeUpdated: isSet(object.lastTimeUpdated) ? Number(object.lastTimeUpdated) : 0,
      numItemsNeeded: isSet(object.numItemsNeeded) ? Number(object.numItemsNeeded) : 0,
    };
  },

  toJSON(message: CMsgClientWorkshopItemChangesRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.lastTimeUpdated !== undefined && (obj.lastTimeUpdated = Math.round(message.lastTimeUpdated));
    message.numItemsNeeded !== undefined && (obj.numItemsNeeded = Math.round(message.numItemsNeeded));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesRequest>, I>>(
    base?: I,
  ): CMsgClientWorkshopItemChangesRequest {
    return CMsgClientWorkshopItemChangesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesRequest>, I>>(
    object: I,
  ): CMsgClientWorkshopItemChangesRequest {
    const message = createBaseCMsgClientWorkshopItemChangesRequest();
    message.appId = object.appId ?? 0;
    message.lastTimeUpdated = object.lastTimeUpdated ?? 0;
    message.numItemsNeeded = object.numItemsNeeded ?? 0;
    return message;
  },
};

function createBaseCMsgClientWorkshopItemChangesResponse(): CMsgClientWorkshopItemChangesResponse {
  return { eresult: 0, updateTime: 0, workshopItems: [] };
}

export const CMsgClientWorkshopItemChangesResponse = {
  encode(message: CMsgClientWorkshopItemChangesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.updateTime !== 0) {
      writer.uint32(16).uint32(message.updateTime);
    }
    for (const v of message.workshopItems) {
      CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWorkshopItemChangesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWorkshopItemChangesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.updateTime = reader.uint32();
          break;
        case 5:
          message.workshopItems.push(
            CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWorkshopItemChangesResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      updateTime: isSet(object.updateTime) ? Number(object.updateTime) : 0,
      workshopItems: Array.isArray(object?.workshopItems)
        ? object.workshopItems.map((e: any) => CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientWorkshopItemChangesResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.updateTime !== undefined && (obj.updateTime = Math.round(message.updateTime));
    if (message.workshopItems) {
      obj.workshopItems = message.workshopItems.map((e) =>
        e ? CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.toJSON(e) : undefined
      );
    } else {
      obj.workshopItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesResponse>, I>>(
    base?: I,
  ): CMsgClientWorkshopItemChangesResponse {
    return CMsgClientWorkshopItemChangesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesResponse>, I>>(
    object: I,
  ): CMsgClientWorkshopItemChangesResponse {
    const message = createBaseCMsgClientWorkshopItemChangesResponse();
    message.eresult = object.eresult ?? 0;
    message.updateTime = object.updateTime ?? 0;
    message.workshopItems =
      object.workshopItems?.map((e) => CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientWorkshopItemChangesResponse_WorkshopItemInfo(): CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
  return { publishedFileId: "0", timeUpdated: 0, manifestId: "0" };
}

export const CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo = {
  encode(
    message: CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(16).uint32(message.timeUpdated);
    }
    if (message.manifestId !== "0") {
      writer.uint32(25).fixed64(message.manifestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWorkshopItemChangesResponse_WorkshopItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.timeUpdated = reader.uint32();
          break;
        case 3:
          message.manifestId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      manifestId: isSet(object.manifestId) ? String(object.manifestId) : "0",
    };
  },

  toJSON(message: CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    message.manifestId !== undefined && (obj.manifestId = message.manifestId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo>, I>>(
    base?: I,
  ): CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
    return CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo>, I>>(
    object: I,
  ): CMsgClientWorkshopItemChangesResponse_WorkshopItemInfo {
    const message = createBaseCMsgClientWorkshopItemChangesResponse_WorkshopItemInfo();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.timeUpdated = object.timeUpdated ?? 0;
    message.manifestId = object.manifestId ?? "0";
    return message;
  },
};

function createBaseCMsgClientUCMSetUserPublishedFileAction(): CMsgClientUCMSetUserPublishedFileAction {
  return { publishedFileId: "0", appId: 0, action: 0 };
}

export const CMsgClientUCMSetUserPublishedFileAction = {
  encode(message: CMsgClientUCMSetUserPublishedFileAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMSetUserPublishedFileAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMSetUserPublishedFileAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.action = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMSetUserPublishedFileAction {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
    };
  },

  toJSON(message: CMsgClientUCMSetUserPublishedFileAction): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.action !== undefined && (obj.action = Math.round(message.action));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMSetUserPublishedFileAction>, I>>(
    base?: I,
  ): CMsgClientUCMSetUserPublishedFileAction {
    return CMsgClientUCMSetUserPublishedFileAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMSetUserPublishedFileAction>, I>>(
    object: I,
  ): CMsgClientUCMSetUserPublishedFileAction {
    const message = createBaseCMsgClientUCMSetUserPublishedFileAction();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.appId = object.appId ?? 0;
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMSetUserPublishedFileActionResponse(): CMsgClientUCMSetUserPublishedFileActionResponse {
  return { eresult: 0 };
}

export const CMsgClientUCMSetUserPublishedFileActionResponse = {
  encode(
    message: CMsgClientUCMSetUserPublishedFileActionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMSetUserPublishedFileActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMSetUserPublishedFileActionResponse();
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

  fromJSON(object: any): CMsgClientUCMSetUserPublishedFileActionResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientUCMSetUserPublishedFileActionResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMSetUserPublishedFileActionResponse>, I>>(
    base?: I,
  ): CMsgClientUCMSetUserPublishedFileActionResponse {
    return CMsgClientUCMSetUserPublishedFileActionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMSetUserPublishedFileActionResponse>, I>>(
    object: I,
  ): CMsgClientUCMSetUserPublishedFileActionResponse {
    const message = createBaseCMsgClientUCMSetUserPublishedFileActionResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumeratePublishedFilesByUserAction(): CMsgClientUCMEnumeratePublishedFilesByUserAction {
  return { appId: 0, startIndex: 0, action: 0 };
}

export const CMsgClientUCMEnumeratePublishedFilesByUserAction = {
  encode(
    message: CMsgClientUCMEnumeratePublishedFilesByUserAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.startIndex !== 0) {
      writer.uint32(16).uint32(message.startIndex);
    }
    if (message.action !== 0) {
      writer.uint32(24).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMEnumeratePublishedFilesByUserAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.startIndex = reader.uint32();
          break;
        case 3:
          message.action = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumeratePublishedFilesByUserAction {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
      action: isSet(object.action) ? Number(object.action) : 0,
    };
  },

  toJSON(message: CMsgClientUCMEnumeratePublishedFilesByUserAction): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    message.action !== undefined && (obj.action = Math.round(message.action));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserAction>, I>>(
    base?: I,
  ): CMsgClientUCMEnumeratePublishedFilesByUserAction {
    return CMsgClientUCMEnumeratePublishedFilesByUserAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserAction>, I>>(
    object: I,
  ): CMsgClientUCMEnumeratePublishedFilesByUserAction {
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserAction();
    message.appId = object.appId ?? 0;
    message.startIndex = object.startIndex ?? 0;
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse(): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
  return { eresult: 0, publishedFiles: [], totalResults: 0 };
}

export const CMsgClientUCMEnumeratePublishedFilesByUserActionResponse = {
  encode(
    message: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.publishedFiles) {
      CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.encode(v!, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.totalResults !== 0) {
      writer.uint32(24).uint32(message.totalResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.publishedFiles.push(
            CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.totalResults = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      publishedFiles: Array.isArray(object?.publishedFiles)
        ? object.publishedFiles.map((e: any) =>
          CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.fromJSON(e)
        )
        : [],
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
    };
  },

  toJSON(message: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.publishedFiles) {
      obj.publishedFiles = message.publishedFiles.map((e) =>
        e ? CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.toJSON(e) : undefined
      );
    } else {
      obj.publishedFiles = [];
    }
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserActionResponse>, I>>(
    base?: I,
  ): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
    return CMsgClientUCMEnumeratePublishedFilesByUserActionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserActionResponse>, I>>(
    object: I,
  ): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse();
    message.eresult = object.eresult ?? 0;
    message.publishedFiles =
      object.publishedFiles?.map((e) =>
        CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.fromPartial(e)
      ) || [];
    message.totalResults = object.totalResults ?? 0;
    return message;
  },
};

function createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId(): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
  return { publishedFileId: "0", rtimeTimeStamp: 0 };
}

export const CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId = {
  encode(
    message: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedFileId !== "0") {
      writer.uint32(9).fixed64(message.publishedFileId);
    }
    if (message.rtimeTimeStamp !== 0) {
      writer.uint32(21).fixed32(message.rtimeTimeStamp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedFileId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.rtimeTimeStamp = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
    return {
      publishedFileId: isSet(object.publishedFileId) ? String(object.publishedFileId) : "0",
      rtimeTimeStamp: isSet(object.rtimeTimeStamp) ? Number(object.rtimeTimeStamp) : 0,
    };
  },

  toJSON(message: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId): unknown {
    const obj: any = {};
    message.publishedFileId !== undefined && (obj.publishedFileId = message.publishedFileId);
    message.rtimeTimeStamp !== undefined && (obj.rtimeTimeStamp = Math.round(message.rtimeTimeStamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId>, I>>(
    base?: I,
  ): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
    return CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId>, I>,
  >(object: I): CMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId {
    const message = createBaseCMsgClientUCMEnumeratePublishedFilesByUserActionResponse_PublishedFileId();
    message.publishedFileId = object.publishedFileId ?? "0";
    message.rtimeTimeStamp = object.rtimeTimeStamp ?? 0;
    return message;
  },
};

function createBaseCMsgClientScreenshotsChanged(): CMsgClientScreenshotsChanged {
  return {};
}

export const CMsgClientScreenshotsChanged = {
  encode(_: CMsgClientScreenshotsChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientScreenshotsChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientScreenshotsChanged();
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

  fromJSON(_: any): CMsgClientScreenshotsChanged {
    return {};
  },

  toJSON(_: CMsgClientScreenshotsChanged): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientScreenshotsChanged>, I>>(base?: I): CMsgClientScreenshotsChanged {
    return CMsgClientScreenshotsChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientScreenshotsChanged>, I>>(_: I): CMsgClientScreenshotsChanged {
    const message = createBaseCMsgClientScreenshotsChanged();
    return message;
  },
};

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
