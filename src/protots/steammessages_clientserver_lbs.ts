/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientLBSSetScore {
  appId: number;
  leaderboardId: number;
  score: number;
  details: Buffer;
  uploadScoreMethod: number;
}

export interface CMsgClientLBSSetScoreResponse {
  eresult: number;
  leaderboardEntryCount: number;
  scoreChanged: boolean;
  globalRankPrevious: number;
  globalRankNew: number;
}

export interface CMsgClientLBSSetUGC {
  appId: number;
  leaderboardId: number;
  ugcId: number;
}

export interface CMsgClientLBSSetUGCResponse {
  eresult: number;
}

export interface CMsgClientLBSFindOrCreateLB {
  appId: number;
  leaderboardSortMethod: number;
  leaderboardDisplayType: number;
  createIfNotFound: boolean;
  leaderboardName: string;
}

export interface CMsgClientLBSFindOrCreateLBResponse {
  eresult: number;
  leaderboardId: number;
  leaderboardEntryCount: number;
  leaderboardSortMethod: number;
  leaderboardDisplayType: number;
  leaderboardName: string;
}

export interface CMsgClientLBSGetLBEntries {
  appId: number;
  leaderboardId: number;
  rangeStart: number;
  rangeEnd: number;
  leaderboardDataRequest: number;
  steamids: number[];
}

export interface CMsgClientLBSGetLBEntriesResponse {
  eresult: number;
  leaderboardEntryCount: number;
  entries: CMsgClientLBSGetLBEntriesResponse_Entry[];
}

export interface CMsgClientLBSGetLBEntriesResponse_Entry {
  steamIdUser: number;
  globalRank: number;
  score: number;
  details: Buffer;
  ugcId: number;
}

function createBaseCMsgClientLBSSetScore(): CMsgClientLBSSetScore {
  return { appId: 0, leaderboardId: 0, score: 0, details: Buffer.alloc(0), uploadScoreMethod: 0 };
}

export const CMsgClientLBSSetScore = {
  encode(message: CMsgClientLBSSetScore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.leaderboardId !== 0) {
      writer.uint32(16).int32(message.leaderboardId);
    }
    if (message.score !== 0) {
      writer.uint32(24).int32(message.score);
    }
    if (message.details.length !== 0) {
      writer.uint32(34).bytes(message.details);
    }
    if (message.uploadScoreMethod !== 0) {
      writer.uint32(40).int32(message.uploadScoreMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSSetScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSSetScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.leaderboardId = reader.int32();
          break;
        case 3:
          message.score = reader.int32();
          break;
        case 4:
          message.details = reader.bytes() as Buffer;
          break;
        case 5:
          message.uploadScoreMethod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSSetScore {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      leaderboardId: isSet(object.leaderboardId) ? Number(object.leaderboardId) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      details: isSet(object.details) ? Buffer.from(bytesFromBase64(object.details)) : Buffer.alloc(0),
      uploadScoreMethod: isSet(object.uploadScoreMethod) ? Number(object.uploadScoreMethod) : 0,
    };
  },

  toJSON(message: CMsgClientLBSSetScore): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.leaderboardId !== undefined && (obj.leaderboardId = Math.round(message.leaderboardId));
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.details !== undefined &&
      (obj.details = base64FromBytes(message.details !== undefined ? message.details : Buffer.alloc(0)));
    message.uploadScoreMethod !== undefined && (obj.uploadScoreMethod = Math.round(message.uploadScoreMethod));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSSetScore>, I>>(base?: I): CMsgClientLBSSetScore {
    return CMsgClientLBSSetScore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSSetScore>, I>>(object: I): CMsgClientLBSSetScore {
    const message = createBaseCMsgClientLBSSetScore();
    message.appId = object.appId ?? 0;
    message.leaderboardId = object.leaderboardId ?? 0;
    message.score = object.score ?? 0;
    message.details = object.details ?? Buffer.alloc(0);
    message.uploadScoreMethod = object.uploadScoreMethod ?? 0;
    return message;
  },
};

function createBaseCMsgClientLBSSetScoreResponse(): CMsgClientLBSSetScoreResponse {
  return { eresult: 0, leaderboardEntryCount: 0, scoreChanged: false, globalRankPrevious: 0, globalRankNew: 0 };
}

export const CMsgClientLBSSetScoreResponse = {
  encode(message: CMsgClientLBSSetScoreResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.leaderboardEntryCount !== 0) {
      writer.uint32(16).int32(message.leaderboardEntryCount);
    }
    if (message.scoreChanged === true) {
      writer.uint32(24).bool(message.scoreChanged);
    }
    if (message.globalRankPrevious !== 0) {
      writer.uint32(32).int32(message.globalRankPrevious);
    }
    if (message.globalRankNew !== 0) {
      writer.uint32(40).int32(message.globalRankNew);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSSetScoreResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSSetScoreResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.leaderboardEntryCount = reader.int32();
          break;
        case 3:
          message.scoreChanged = reader.bool();
          break;
        case 4:
          message.globalRankPrevious = reader.int32();
          break;
        case 5:
          message.globalRankNew = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSSetScoreResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      leaderboardEntryCount: isSet(object.leaderboardEntryCount) ? Number(object.leaderboardEntryCount) : 0,
      scoreChanged: isSet(object.scoreChanged) ? Boolean(object.scoreChanged) : false,
      globalRankPrevious: isSet(object.globalRankPrevious) ? Number(object.globalRankPrevious) : 0,
      globalRankNew: isSet(object.globalRankNew) ? Number(object.globalRankNew) : 0,
    };
  },

  toJSON(message: CMsgClientLBSSetScoreResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.leaderboardEntryCount !== undefined &&
      (obj.leaderboardEntryCount = Math.round(message.leaderboardEntryCount));
    message.scoreChanged !== undefined && (obj.scoreChanged = message.scoreChanged);
    message.globalRankPrevious !== undefined && (obj.globalRankPrevious = Math.round(message.globalRankPrevious));
    message.globalRankNew !== undefined && (obj.globalRankNew = Math.round(message.globalRankNew));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSSetScoreResponse>, I>>(base?: I): CMsgClientLBSSetScoreResponse {
    return CMsgClientLBSSetScoreResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSSetScoreResponse>, I>>(
    object: I,
  ): CMsgClientLBSSetScoreResponse {
    const message = createBaseCMsgClientLBSSetScoreResponse();
    message.eresult = object.eresult ?? 0;
    message.leaderboardEntryCount = object.leaderboardEntryCount ?? 0;
    message.scoreChanged = object.scoreChanged ?? false;
    message.globalRankPrevious = object.globalRankPrevious ?? 0;
    message.globalRankNew = object.globalRankNew ?? 0;
    return message;
  },
};

function createBaseCMsgClientLBSSetUGC(): CMsgClientLBSSetUGC {
  return { appId: 0, leaderboardId: 0, ugcId: 0 };
}

export const CMsgClientLBSSetUGC = {
  encode(message: CMsgClientLBSSetUGC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.leaderboardId !== 0) {
      writer.uint32(16).int32(message.leaderboardId);
    }
    if (message.ugcId !== 0) {
      writer.uint32(25).fixed64(message.ugcId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSSetUGC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSSetUGC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.leaderboardId = reader.int32();
          break;
        case 3:
          message.ugcId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSSetUGC {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      leaderboardId: isSet(object.leaderboardId) ? Number(object.leaderboardId) : 0,
      ugcId: isSet(object.ugcId) ? Number(object.ugcId) : 0,
    };
  },

  toJSON(message: CMsgClientLBSSetUGC): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.leaderboardId !== undefined && (obj.leaderboardId = Math.round(message.leaderboardId));
    message.ugcId !== undefined && (obj.ugcId = Math.round(message.ugcId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSSetUGC>, I>>(base?: I): CMsgClientLBSSetUGC {
    return CMsgClientLBSSetUGC.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSSetUGC>, I>>(object: I): CMsgClientLBSSetUGC {
    const message = createBaseCMsgClientLBSSetUGC();
    message.appId = object.appId ?? 0;
    message.leaderboardId = object.leaderboardId ?? 0;
    message.ugcId = object.ugcId ?? 0;
    return message;
  },
};

function createBaseCMsgClientLBSSetUGCResponse(): CMsgClientLBSSetUGCResponse {
  return { eresult: 0 };
}

export const CMsgClientLBSSetUGCResponse = {
  encode(message: CMsgClientLBSSetUGCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSSetUGCResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSSetUGCResponse();
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

  fromJSON(object: any): CMsgClientLBSSetUGCResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientLBSSetUGCResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSSetUGCResponse>, I>>(base?: I): CMsgClientLBSSetUGCResponse {
    return CMsgClientLBSSetUGCResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSSetUGCResponse>, I>>(object: I): CMsgClientLBSSetUGCResponse {
    const message = createBaseCMsgClientLBSSetUGCResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientLBSFindOrCreateLB(): CMsgClientLBSFindOrCreateLB {
  return {
    appId: 0,
    leaderboardSortMethod: 0,
    leaderboardDisplayType: 0,
    createIfNotFound: false,
    leaderboardName: "",
  };
}

export const CMsgClientLBSFindOrCreateLB = {
  encode(message: CMsgClientLBSFindOrCreateLB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.leaderboardSortMethod !== 0) {
      writer.uint32(16).int32(message.leaderboardSortMethod);
    }
    if (message.leaderboardDisplayType !== 0) {
      writer.uint32(24).int32(message.leaderboardDisplayType);
    }
    if (message.createIfNotFound === true) {
      writer.uint32(32).bool(message.createIfNotFound);
    }
    if (message.leaderboardName !== "") {
      writer.uint32(42).string(message.leaderboardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSFindOrCreateLB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSFindOrCreateLB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.leaderboardSortMethod = reader.int32();
          break;
        case 3:
          message.leaderboardDisplayType = reader.int32();
          break;
        case 4:
          message.createIfNotFound = reader.bool();
          break;
        case 5:
          message.leaderboardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSFindOrCreateLB {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      leaderboardSortMethod: isSet(object.leaderboardSortMethod) ? Number(object.leaderboardSortMethod) : 0,
      leaderboardDisplayType: isSet(object.leaderboardDisplayType) ? Number(object.leaderboardDisplayType) : 0,
      createIfNotFound: isSet(object.createIfNotFound) ? Boolean(object.createIfNotFound) : false,
      leaderboardName: isSet(object.leaderboardName) ? String(object.leaderboardName) : "",
    };
  },

  toJSON(message: CMsgClientLBSFindOrCreateLB): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.leaderboardSortMethod !== undefined &&
      (obj.leaderboardSortMethod = Math.round(message.leaderboardSortMethod));
    message.leaderboardDisplayType !== undefined &&
      (obj.leaderboardDisplayType = Math.round(message.leaderboardDisplayType));
    message.createIfNotFound !== undefined && (obj.createIfNotFound = message.createIfNotFound);
    message.leaderboardName !== undefined && (obj.leaderboardName = message.leaderboardName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSFindOrCreateLB>, I>>(base?: I): CMsgClientLBSFindOrCreateLB {
    return CMsgClientLBSFindOrCreateLB.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSFindOrCreateLB>, I>>(object: I): CMsgClientLBSFindOrCreateLB {
    const message = createBaseCMsgClientLBSFindOrCreateLB();
    message.appId = object.appId ?? 0;
    message.leaderboardSortMethod = object.leaderboardSortMethod ?? 0;
    message.leaderboardDisplayType = object.leaderboardDisplayType ?? 0;
    message.createIfNotFound = object.createIfNotFound ?? false;
    message.leaderboardName = object.leaderboardName ?? "";
    return message;
  },
};

function createBaseCMsgClientLBSFindOrCreateLBResponse(): CMsgClientLBSFindOrCreateLBResponse {
  return {
    eresult: 0,
    leaderboardId: 0,
    leaderboardEntryCount: 0,
    leaderboardSortMethod: 0,
    leaderboardDisplayType: 0,
    leaderboardName: "",
  };
}

export const CMsgClientLBSFindOrCreateLBResponse = {
  encode(message: CMsgClientLBSFindOrCreateLBResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.leaderboardId !== 0) {
      writer.uint32(16).int32(message.leaderboardId);
    }
    if (message.leaderboardEntryCount !== 0) {
      writer.uint32(24).int32(message.leaderboardEntryCount);
    }
    if (message.leaderboardSortMethod !== 0) {
      writer.uint32(32).int32(message.leaderboardSortMethod);
    }
    if (message.leaderboardDisplayType !== 0) {
      writer.uint32(40).int32(message.leaderboardDisplayType);
    }
    if (message.leaderboardName !== "") {
      writer.uint32(50).string(message.leaderboardName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSFindOrCreateLBResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSFindOrCreateLBResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.leaderboardId = reader.int32();
          break;
        case 3:
          message.leaderboardEntryCount = reader.int32();
          break;
        case 4:
          message.leaderboardSortMethod = reader.int32();
          break;
        case 5:
          message.leaderboardDisplayType = reader.int32();
          break;
        case 6:
          message.leaderboardName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSFindOrCreateLBResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      leaderboardId: isSet(object.leaderboardId) ? Number(object.leaderboardId) : 0,
      leaderboardEntryCount: isSet(object.leaderboardEntryCount) ? Number(object.leaderboardEntryCount) : 0,
      leaderboardSortMethod: isSet(object.leaderboardSortMethod) ? Number(object.leaderboardSortMethod) : 0,
      leaderboardDisplayType: isSet(object.leaderboardDisplayType) ? Number(object.leaderboardDisplayType) : 0,
      leaderboardName: isSet(object.leaderboardName) ? String(object.leaderboardName) : "",
    };
  },

  toJSON(message: CMsgClientLBSFindOrCreateLBResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.leaderboardId !== undefined && (obj.leaderboardId = Math.round(message.leaderboardId));
    message.leaderboardEntryCount !== undefined &&
      (obj.leaderboardEntryCount = Math.round(message.leaderboardEntryCount));
    message.leaderboardSortMethod !== undefined &&
      (obj.leaderboardSortMethod = Math.round(message.leaderboardSortMethod));
    message.leaderboardDisplayType !== undefined &&
      (obj.leaderboardDisplayType = Math.round(message.leaderboardDisplayType));
    message.leaderboardName !== undefined && (obj.leaderboardName = message.leaderboardName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSFindOrCreateLBResponse>, I>>(
    base?: I,
  ): CMsgClientLBSFindOrCreateLBResponse {
    return CMsgClientLBSFindOrCreateLBResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSFindOrCreateLBResponse>, I>>(
    object: I,
  ): CMsgClientLBSFindOrCreateLBResponse {
    const message = createBaseCMsgClientLBSFindOrCreateLBResponse();
    message.eresult = object.eresult ?? 0;
    message.leaderboardId = object.leaderboardId ?? 0;
    message.leaderboardEntryCount = object.leaderboardEntryCount ?? 0;
    message.leaderboardSortMethod = object.leaderboardSortMethod ?? 0;
    message.leaderboardDisplayType = object.leaderboardDisplayType ?? 0;
    message.leaderboardName = object.leaderboardName ?? "";
    return message;
  },
};

function createBaseCMsgClientLBSGetLBEntries(): CMsgClientLBSGetLBEntries {
  return { appId: 0, leaderboardId: 0, rangeStart: 0, rangeEnd: 0, leaderboardDataRequest: 0, steamids: [] };
}

export const CMsgClientLBSGetLBEntries = {
  encode(message: CMsgClientLBSGetLBEntries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).int32(message.appId);
    }
    if (message.leaderboardId !== 0) {
      writer.uint32(16).int32(message.leaderboardId);
    }
    if (message.rangeStart !== 0) {
      writer.uint32(24).int32(message.rangeStart);
    }
    if (message.rangeEnd !== 0) {
      writer.uint32(32).int32(message.rangeEnd);
    }
    if (message.leaderboardDataRequest !== 0) {
      writer.uint32(40).int32(message.leaderboardDataRequest);
    }
    writer.uint32(50).fork();
    for (const v of message.steamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSGetLBEntries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSGetLBEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.int32();
          break;
        case 2:
          message.leaderboardId = reader.int32();
          break;
        case 3:
          message.rangeStart = reader.int32();
          break;
        case 4:
          message.rangeEnd = reader.int32();
          break;
        case 5:
          message.leaderboardDataRequest = reader.int32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamids.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.steamids.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSGetLBEntries {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      leaderboardId: isSet(object.leaderboardId) ? Number(object.leaderboardId) : 0,
      rangeStart: isSet(object.rangeStart) ? Number(object.rangeStart) : 0,
      rangeEnd: isSet(object.rangeEnd) ? Number(object.rangeEnd) : 0,
      leaderboardDataRequest: isSet(object.leaderboardDataRequest) ? Number(object.leaderboardDataRequest) : 0,
      steamids: Array.isArray(object?.steamids) ? object.steamids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientLBSGetLBEntries): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.leaderboardId !== undefined && (obj.leaderboardId = Math.round(message.leaderboardId));
    message.rangeStart !== undefined && (obj.rangeStart = Math.round(message.rangeStart));
    message.rangeEnd !== undefined && (obj.rangeEnd = Math.round(message.rangeEnd));
    message.leaderboardDataRequest !== undefined &&
      (obj.leaderboardDataRequest = Math.round(message.leaderboardDataRequest));
    if (message.steamids) {
      obj.steamids = message.steamids.map((e) => Math.round(e));
    } else {
      obj.steamids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntries>, I>>(base?: I): CMsgClientLBSGetLBEntries {
    return CMsgClientLBSGetLBEntries.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntries>, I>>(object: I): CMsgClientLBSGetLBEntries {
    const message = createBaseCMsgClientLBSGetLBEntries();
    message.appId = object.appId ?? 0;
    message.leaderboardId = object.leaderboardId ?? 0;
    message.rangeStart = object.rangeStart ?? 0;
    message.rangeEnd = object.rangeEnd ?? 0;
    message.leaderboardDataRequest = object.leaderboardDataRequest ?? 0;
    message.steamids = object.steamids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientLBSGetLBEntriesResponse(): CMsgClientLBSGetLBEntriesResponse {
  return { eresult: 0, leaderboardEntryCount: 0, entries: [] };
}

export const CMsgClientLBSGetLBEntriesResponse = {
  encode(message: CMsgClientLBSGetLBEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.leaderboardEntryCount !== 0) {
      writer.uint32(16).int32(message.leaderboardEntryCount);
    }
    for (const v of message.entries) {
      CMsgClientLBSGetLBEntriesResponse_Entry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSGetLBEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSGetLBEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.leaderboardEntryCount = reader.int32();
          break;
        case 3:
          message.entries.push(CMsgClientLBSGetLBEntriesResponse_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSGetLBEntriesResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      leaderboardEntryCount: isSet(object.leaderboardEntryCount) ? Number(object.leaderboardEntryCount) : 0,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CMsgClientLBSGetLBEntriesResponse_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientLBSGetLBEntriesResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.leaderboardEntryCount !== undefined &&
      (obj.leaderboardEntryCount = Math.round(message.leaderboardEntryCount));
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgClientLBSGetLBEntriesResponse_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntriesResponse>, I>>(
    base?: I,
  ): CMsgClientLBSGetLBEntriesResponse {
    return CMsgClientLBSGetLBEntriesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntriesResponse>, I>>(
    object: I,
  ): CMsgClientLBSGetLBEntriesResponse {
    const message = createBaseCMsgClientLBSGetLBEntriesResponse();
    message.eresult = object.eresult ?? 0;
    message.leaderboardEntryCount = object.leaderboardEntryCount ?? 0;
    message.entries = object.entries?.map((e) => CMsgClientLBSGetLBEntriesResponse_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientLBSGetLBEntriesResponse_Entry(): CMsgClientLBSGetLBEntriesResponse_Entry {
  return { steamIdUser: 0, globalRank: 0, score: 0, details: Buffer.alloc(0), ugcId: 0 };
}

export const CMsgClientLBSGetLBEntriesResponse_Entry = {
  encode(message: CMsgClientLBSGetLBEntriesResponse_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdUser !== 0) {
      writer.uint32(9).fixed64(message.steamIdUser);
    }
    if (message.globalRank !== 0) {
      writer.uint32(16).int32(message.globalRank);
    }
    if (message.score !== 0) {
      writer.uint32(24).int32(message.score);
    }
    if (message.details.length !== 0) {
      writer.uint32(34).bytes(message.details);
    }
    if (message.ugcId !== 0) {
      writer.uint32(41).fixed64(message.ugcId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLBSGetLBEntriesResponse_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLBSGetLBEntriesResponse_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdUser = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.globalRank = reader.int32();
          break;
        case 3:
          message.score = reader.int32();
          break;
        case 4:
          message.details = reader.bytes() as Buffer;
          break;
        case 5:
          message.ugcId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLBSGetLBEntriesResponse_Entry {
    return {
      steamIdUser: isSet(object.steamIdUser) ? Number(object.steamIdUser) : 0,
      globalRank: isSet(object.globalRank) ? Number(object.globalRank) : 0,
      score: isSet(object.score) ? Number(object.score) : 0,
      details: isSet(object.details) ? Buffer.from(bytesFromBase64(object.details)) : Buffer.alloc(0),
      ugcId: isSet(object.ugcId) ? Number(object.ugcId) : 0,
    };
  },

  toJSON(message: CMsgClientLBSGetLBEntriesResponse_Entry): unknown {
    const obj: any = {};
    message.steamIdUser !== undefined && (obj.steamIdUser = Math.round(message.steamIdUser));
    message.globalRank !== undefined && (obj.globalRank = Math.round(message.globalRank));
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.details !== undefined &&
      (obj.details = base64FromBytes(message.details !== undefined ? message.details : Buffer.alloc(0)));
    message.ugcId !== undefined && (obj.ugcId = Math.round(message.ugcId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntriesResponse_Entry>, I>>(
    base?: I,
  ): CMsgClientLBSGetLBEntriesResponse_Entry {
    return CMsgClientLBSGetLBEntriesResponse_Entry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLBSGetLBEntriesResponse_Entry>, I>>(
    object: I,
  ): CMsgClientLBSGetLBEntriesResponse_Entry {
    const message = createBaseCMsgClientLBSGetLBEntriesResponse_Entry();
    message.steamIdUser = object.steamIdUser ?? 0;
    message.globalRank = object.globalRank ?? 0;
    message.score = object.score ?? 0;
    message.details = object.details ?? Buffer.alloc(0);
    message.ugcId = object.ugcId ?? 0;
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
