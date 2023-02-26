/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CVideoClientGetVideoURLRequest {
  videoId: string;
  clientCellid: number;
}

export interface CVideoClientGetVideoURLResponse {
  videoId: string;
  videoUrl: string;
}

export interface VideoBookmark {
  appId: number;
  playbackPositionInSeconds: number;
  videoTrackId: string;
  audioTrackId: string;
  timedtextTrackId: string;
  lastModified: number;
  hideFromWatchHistory: boolean;
  hideFromLibrary: boolean;
}

export interface CVideoSetVideoBookmarkNotification {
  bookmarks: VideoBookmark[];
}

export interface CVideoGetVideoBookmarksRequest {
  appids: number[];
  updatedSince: number;
}

export interface CVideoGetVideoBookmarksResponse {
  bookmarks: VideoBookmark[];
}

export interface CVideoUnlockedH264Notification {
  encryptionKey: Buffer;
}

export interface CFovasVideoClientGetOPFSettingsRequest {
  appId: number;
  clientCellid: number;
}

export interface CFovasVideoClientGetOPFSettingsResponse {
  appId: number;
  opfSettings: string;
}

function createBaseCVideoClientGetVideoURLRequest(): CVideoClientGetVideoURLRequest {
  return { videoId: "0", clientCellid: 0 };
}

export const CVideoClientGetVideoURLRequest = {
  encode(message: CVideoClientGetVideoURLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.videoId !== "0") {
      writer.uint32(8).uint64(message.videoId);
    }
    if (message.clientCellid !== 0) {
      writer.uint32(16).uint32(message.clientCellid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoClientGetVideoURLRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoClientGetVideoURLRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.videoId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.clientCellid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoClientGetVideoURLRequest {
    return {
      videoId: isSet(object.videoId) ? String(object.videoId) : "0",
      clientCellid: isSet(object.clientCellid) ? Number(object.clientCellid) : 0,
    };
  },

  toJSON(message: CVideoClientGetVideoURLRequest): unknown {
    const obj: any = {};
    message.videoId !== undefined && (obj.videoId = message.videoId);
    message.clientCellid !== undefined && (obj.clientCellid = Math.round(message.clientCellid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoClientGetVideoURLRequest>, I>>(base?: I): CVideoClientGetVideoURLRequest {
    return CVideoClientGetVideoURLRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoClientGetVideoURLRequest>, I>>(
    object: I,
  ): CVideoClientGetVideoURLRequest {
    const message = createBaseCVideoClientGetVideoURLRequest();
    message.videoId = object.videoId ?? "0";
    message.clientCellid = object.clientCellid ?? 0;
    return message;
  },
};

function createBaseCVideoClientGetVideoURLResponse(): CVideoClientGetVideoURLResponse {
  return { videoId: "0", videoUrl: "" };
}

export const CVideoClientGetVideoURLResponse = {
  encode(message: CVideoClientGetVideoURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.videoId !== "0") {
      writer.uint32(8).uint64(message.videoId);
    }
    if (message.videoUrl !== "") {
      writer.uint32(18).string(message.videoUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoClientGetVideoURLResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoClientGetVideoURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.videoId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.videoUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoClientGetVideoURLResponse {
    return {
      videoId: isSet(object.videoId) ? String(object.videoId) : "0",
      videoUrl: isSet(object.videoUrl) ? String(object.videoUrl) : "",
    };
  },

  toJSON(message: CVideoClientGetVideoURLResponse): unknown {
    const obj: any = {};
    message.videoId !== undefined && (obj.videoId = message.videoId);
    message.videoUrl !== undefined && (obj.videoUrl = message.videoUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoClientGetVideoURLResponse>, I>>(base?: I): CVideoClientGetVideoURLResponse {
    return CVideoClientGetVideoURLResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoClientGetVideoURLResponse>, I>>(
    object: I,
  ): CVideoClientGetVideoURLResponse {
    const message = createBaseCVideoClientGetVideoURLResponse();
    message.videoId = object.videoId ?? "0";
    message.videoUrl = object.videoUrl ?? "";
    return message;
  },
};

function createBaseVideoBookmark(): VideoBookmark {
  return {
    appId: 0,
    playbackPositionInSeconds: 0,
    videoTrackId: "0",
    audioTrackId: "0",
    timedtextTrackId: "0",
    lastModified: 0,
    hideFromWatchHistory: false,
    hideFromLibrary: false,
  };
}

export const VideoBookmark = {
  encode(message: VideoBookmark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.playbackPositionInSeconds !== 0) {
      writer.uint32(16).uint32(message.playbackPositionInSeconds);
    }
    if (message.videoTrackId !== "0") {
      writer.uint32(24).uint64(message.videoTrackId);
    }
    if (message.audioTrackId !== "0") {
      writer.uint32(32).uint64(message.audioTrackId);
    }
    if (message.timedtextTrackId !== "0") {
      writer.uint32(40).uint64(message.timedtextTrackId);
    }
    if (message.lastModified !== 0) {
      writer.uint32(48).uint32(message.lastModified);
    }
    if (message.hideFromWatchHistory === true) {
      writer.uint32(56).bool(message.hideFromWatchHistory);
    }
    if (message.hideFromLibrary === true) {
      writer.uint32(64).bool(message.hideFromLibrary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoBookmark {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoBookmark();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.playbackPositionInSeconds = reader.uint32();
          break;
        case 3:
          message.videoTrackId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.audioTrackId = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.timedtextTrackId = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.lastModified = reader.uint32();
          break;
        case 7:
          message.hideFromWatchHistory = reader.bool();
          break;
        case 8:
          message.hideFromLibrary = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VideoBookmark {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      playbackPositionInSeconds: isSet(object.playbackPositionInSeconds) ? Number(object.playbackPositionInSeconds) : 0,
      videoTrackId: isSet(object.videoTrackId) ? String(object.videoTrackId) : "0",
      audioTrackId: isSet(object.audioTrackId) ? String(object.audioTrackId) : "0",
      timedtextTrackId: isSet(object.timedtextTrackId) ? String(object.timedtextTrackId) : "0",
      lastModified: isSet(object.lastModified) ? Number(object.lastModified) : 0,
      hideFromWatchHistory: isSet(object.hideFromWatchHistory) ? Boolean(object.hideFromWatchHistory) : false,
      hideFromLibrary: isSet(object.hideFromLibrary) ? Boolean(object.hideFromLibrary) : false,
    };
  },

  toJSON(message: VideoBookmark): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.playbackPositionInSeconds !== undefined &&
      (obj.playbackPositionInSeconds = Math.round(message.playbackPositionInSeconds));
    message.videoTrackId !== undefined && (obj.videoTrackId = message.videoTrackId);
    message.audioTrackId !== undefined && (obj.audioTrackId = message.audioTrackId);
    message.timedtextTrackId !== undefined && (obj.timedtextTrackId = message.timedtextTrackId);
    message.lastModified !== undefined && (obj.lastModified = Math.round(message.lastModified));
    message.hideFromWatchHistory !== undefined && (obj.hideFromWatchHistory = message.hideFromWatchHistory);
    message.hideFromLibrary !== undefined && (obj.hideFromLibrary = message.hideFromLibrary);
    return obj;
  },

  create<I extends Exact<DeepPartial<VideoBookmark>, I>>(base?: I): VideoBookmark {
    return VideoBookmark.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VideoBookmark>, I>>(object: I): VideoBookmark {
    const message = createBaseVideoBookmark();
    message.appId = object.appId ?? 0;
    message.playbackPositionInSeconds = object.playbackPositionInSeconds ?? 0;
    message.videoTrackId = object.videoTrackId ?? "0";
    message.audioTrackId = object.audioTrackId ?? "0";
    message.timedtextTrackId = object.timedtextTrackId ?? "0";
    message.lastModified = object.lastModified ?? 0;
    message.hideFromWatchHistory = object.hideFromWatchHistory ?? false;
    message.hideFromLibrary = object.hideFromLibrary ?? false;
    return message;
  },
};

function createBaseCVideoSetVideoBookmarkNotification(): CVideoSetVideoBookmarkNotification {
  return { bookmarks: [] };
}

export const CVideoSetVideoBookmarkNotification = {
  encode(message: CVideoSetVideoBookmarkNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bookmarks) {
      VideoBookmark.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoSetVideoBookmarkNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoSetVideoBookmarkNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookmarks.push(VideoBookmark.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoSetVideoBookmarkNotification {
    return {
      bookmarks: Array.isArray(object?.bookmarks) ? object.bookmarks.map((e: any) => VideoBookmark.fromJSON(e)) : [],
    };
  },

  toJSON(message: CVideoSetVideoBookmarkNotification): unknown {
    const obj: any = {};
    if (message.bookmarks) {
      obj.bookmarks = message.bookmarks.map((e) => e ? VideoBookmark.toJSON(e) : undefined);
    } else {
      obj.bookmarks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoSetVideoBookmarkNotification>, I>>(
    base?: I,
  ): CVideoSetVideoBookmarkNotification {
    return CVideoSetVideoBookmarkNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoSetVideoBookmarkNotification>, I>>(
    object: I,
  ): CVideoSetVideoBookmarkNotification {
    const message = createBaseCVideoSetVideoBookmarkNotification();
    message.bookmarks = object.bookmarks?.map((e) => VideoBookmark.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCVideoGetVideoBookmarksRequest(): CVideoGetVideoBookmarksRequest {
  return { appids: [], updatedSince: 0 };
}

export const CVideoGetVideoBookmarksRequest = {
  encode(message: CVideoGetVideoBookmarksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.updatedSince !== 0) {
      writer.uint32(16).uint32(message.updatedSince);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoGetVideoBookmarksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoGetVideoBookmarksRequest();
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
          message.updatedSince = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoGetVideoBookmarksRequest {
    return {
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
      updatedSince: isSet(object.updatedSince) ? Number(object.updatedSince) : 0,
    };
  },

  toJSON(message: CVideoGetVideoBookmarksRequest): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    message.updatedSince !== undefined && (obj.updatedSince = Math.round(message.updatedSince));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoGetVideoBookmarksRequest>, I>>(base?: I): CVideoGetVideoBookmarksRequest {
    return CVideoGetVideoBookmarksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoGetVideoBookmarksRequest>, I>>(
    object: I,
  ): CVideoGetVideoBookmarksRequest {
    const message = createBaseCVideoGetVideoBookmarksRequest();
    message.appids = object.appids?.map((e) => e) || [];
    message.updatedSince = object.updatedSince ?? 0;
    return message;
  },
};

function createBaseCVideoGetVideoBookmarksResponse(): CVideoGetVideoBookmarksResponse {
  return { bookmarks: [] };
}

export const CVideoGetVideoBookmarksResponse = {
  encode(message: CVideoGetVideoBookmarksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bookmarks) {
      VideoBookmark.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoGetVideoBookmarksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoGetVideoBookmarksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookmarks.push(VideoBookmark.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoGetVideoBookmarksResponse {
    return {
      bookmarks: Array.isArray(object?.bookmarks) ? object.bookmarks.map((e: any) => VideoBookmark.fromJSON(e)) : [],
    };
  },

  toJSON(message: CVideoGetVideoBookmarksResponse): unknown {
    const obj: any = {};
    if (message.bookmarks) {
      obj.bookmarks = message.bookmarks.map((e) => e ? VideoBookmark.toJSON(e) : undefined);
    } else {
      obj.bookmarks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoGetVideoBookmarksResponse>, I>>(base?: I): CVideoGetVideoBookmarksResponse {
    return CVideoGetVideoBookmarksResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoGetVideoBookmarksResponse>, I>>(
    object: I,
  ): CVideoGetVideoBookmarksResponse {
    const message = createBaseCVideoGetVideoBookmarksResponse();
    message.bookmarks = object.bookmarks?.map((e) => VideoBookmark.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCVideoUnlockedH264Notification(): CVideoUnlockedH264Notification {
  return { encryptionKey: Buffer.alloc(0) };
}

export const CVideoUnlockedH264Notification = {
  encode(message: CVideoUnlockedH264Notification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptionKey.length !== 0) {
      writer.uint32(10).bytes(message.encryptionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoUnlockedH264Notification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoUnlockedH264Notification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoUnlockedH264Notification {
    return {
      encryptionKey: isSet(object.encryptionKey) ? Buffer.from(bytesFromBase64(object.encryptionKey)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CVideoUnlockedH264Notification): unknown {
    const obj: any = {};
    message.encryptionKey !== undefined &&
      (obj.encryptionKey = base64FromBytes(
        message.encryptionKey !== undefined ? message.encryptionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoUnlockedH264Notification>, I>>(base?: I): CVideoUnlockedH264Notification {
    return CVideoUnlockedH264Notification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoUnlockedH264Notification>, I>>(
    object: I,
  ): CVideoUnlockedH264Notification {
    const message = createBaseCVideoUnlockedH264Notification();
    message.encryptionKey = object.encryptionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCFovasVideoClientGetOPFSettingsRequest(): CFovasVideoClientGetOPFSettingsRequest {
  return { appId: 0, clientCellid: 0 };
}

export const CFovasVideoClientGetOPFSettingsRequest = {
  encode(message: CFovasVideoClientGetOPFSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.clientCellid !== 0) {
      writer.uint32(16).uint32(message.clientCellid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFovasVideoClientGetOPFSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFovasVideoClientGetOPFSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.clientCellid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFovasVideoClientGetOPFSettingsRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      clientCellid: isSet(object.clientCellid) ? Number(object.clientCellid) : 0,
    };
  },

  toJSON(message: CFovasVideoClientGetOPFSettingsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.clientCellid !== undefined && (obj.clientCellid = Math.round(message.clientCellid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFovasVideoClientGetOPFSettingsRequest>, I>>(
    base?: I,
  ): CFovasVideoClientGetOPFSettingsRequest {
    return CFovasVideoClientGetOPFSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFovasVideoClientGetOPFSettingsRequest>, I>>(
    object: I,
  ): CFovasVideoClientGetOPFSettingsRequest {
    const message = createBaseCFovasVideoClientGetOPFSettingsRequest();
    message.appId = object.appId ?? 0;
    message.clientCellid = object.clientCellid ?? 0;
    return message;
  },
};

function createBaseCFovasVideoClientGetOPFSettingsResponse(): CFovasVideoClientGetOPFSettingsResponse {
  return { appId: 0, opfSettings: "" };
}

export const CFovasVideoClientGetOPFSettingsResponse = {
  encode(message: CFovasVideoClientGetOPFSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.opfSettings !== "") {
      writer.uint32(18).string(message.opfSettings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFovasVideoClientGetOPFSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFovasVideoClientGetOPFSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.opfSettings = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFovasVideoClientGetOPFSettingsResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      opfSettings: isSet(object.opfSettings) ? String(object.opfSettings) : "",
    };
  },

  toJSON(message: CFovasVideoClientGetOPFSettingsResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.opfSettings !== undefined && (obj.opfSettings = message.opfSettings);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFovasVideoClientGetOPFSettingsResponse>, I>>(
    base?: I,
  ): CFovasVideoClientGetOPFSettingsResponse {
    return CFovasVideoClientGetOPFSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFovasVideoClientGetOPFSettingsResponse>, I>>(
    object: I,
  ): CFovasVideoClientGetOPFSettingsResponse {
    const message = createBaseCFovasVideoClientGetOPFSettingsResponse();
    message.appId = object.appId ?? 0;
    message.opfSettings = object.opfSettings ?? "";
    return message;
  },
};

export interface Video {
  ClientGetVideoURL(request: CVideoClientGetVideoURLRequest): Promise<CVideoClientGetVideoURLResponse>;
  SetVideoBookmark(request: CVideoSetVideoBookmarkNotification): Promise<NoResponse>;
  GetVideoBookmarks(request: CVideoGetVideoBookmarksRequest): Promise<CVideoGetVideoBookmarksResponse>;
}

export class VideoClientImpl implements Video {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Video";
    this.rpc = rpc;
    this.ClientGetVideoURL = this.ClientGetVideoURL.bind(this);
    this.SetVideoBookmark = this.SetVideoBookmark.bind(this);
    this.GetVideoBookmarks = this.GetVideoBookmarks.bind(this);
  }
  ClientGetVideoURL(request: CVideoClientGetVideoURLRequest): Promise<CVideoClientGetVideoURLResponse> {
    const data = CVideoClientGetVideoURLRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetVideoURL", data);
    return promise.then((data) => CVideoClientGetVideoURLResponse.decode(new _m0.Reader(data)));
  }

  SetVideoBookmark(request: CVideoSetVideoBookmarkNotification): Promise<NoResponse> {
    const data = CVideoSetVideoBookmarkNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetVideoBookmark", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  GetVideoBookmarks(request: CVideoGetVideoBookmarksRequest): Promise<CVideoGetVideoBookmarksResponse> {
    const data = CVideoGetVideoBookmarksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetVideoBookmarks", data);
    return promise.then((data) => CVideoGetVideoBookmarksResponse.decode(new _m0.Reader(data)));
  }
}

export interface VideoClient {
  NotifyUnlockedH264(request: CVideoUnlockedH264Notification): Promise<NoResponse>;
}

export class VideoClientClientImpl implements VideoClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "VideoClient";
    this.rpc = rpc;
    this.NotifyUnlockedH264 = this.NotifyUnlockedH264.bind(this);
  }
  NotifyUnlockedH264(request: CVideoUnlockedH264Notification): Promise<NoResponse> {
    const data = CVideoUnlockedH264Notification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyUnlockedH264", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface FovasVideo {
  ClientGetOPFSettings(
    request: CFovasVideoClientGetOPFSettingsRequest,
  ): Promise<CFovasVideoClientGetOPFSettingsResponse>;
}

export class FovasVideoClientImpl implements FovasVideo {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "FovasVideo";
    this.rpc = rpc;
    this.ClientGetOPFSettings = this.ClientGetOPFSettings.bind(this);
  }
  ClientGetOPFSettings(
    request: CFovasVideoClientGetOPFSettingsRequest,
  ): Promise<CFovasVideoClientGetOPFSettingsResponse> {
    const data = CFovasVideoClientGetOPFSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetOPFSettings", data);
    return promise.then((data) => CFovasVideoClientGetOPFSettingsResponse.decode(new _m0.Reader(data)));
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
