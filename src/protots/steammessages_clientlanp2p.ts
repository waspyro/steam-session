/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientLANP2PRequestChunks {
  chunkKeys: CMsgClientLANP2PRequestChunks_ChunkKey[];
}

export interface CMsgClientLANP2PRequestChunks_ChunkKey {
  depotId: number;
  sha: Buffer;
}

export interface CMsgClientLANP2PRequestChunksResponse {
  chunkResponses: CMsgClientLANP2PRequestChunksResponse_ChunkData[];
}

export interface CMsgClientLANP2PRequestChunksResponse_ChunkData {
  result: number;
  depotId: number;
  sha: Buffer;
  chunkData: Buffer;
  encrypted: boolean;
  compressed: boolean;
}

export interface CMsgClientPeerChunkRequest {
  appId: number;
  depotId: number;
  sha: Buffer;
}

export interface CMsgClientPeerChunkResponse {
  result: number;
  appId: number;
  depotId: number;
  sha: Buffer;
  encrypted: boolean;
  compressed: boolean;
  chunkData: Buffer;
}

function createBaseCMsgClientLANP2PRequestChunks(): CMsgClientLANP2PRequestChunks {
  return { chunkKeys: [] };
}

export const CMsgClientLANP2PRequestChunks = {
  encode(message: CMsgClientLANP2PRequestChunks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunkKeys) {
      CMsgClientLANP2PRequestChunks_ChunkKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLANP2PRequestChunks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLANP2PRequestChunks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkKeys.push(CMsgClientLANP2PRequestChunks_ChunkKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLANP2PRequestChunks {
    return {
      chunkKeys: Array.isArray(object?.chunkKeys)
        ? object.chunkKeys.map((e: any) => CMsgClientLANP2PRequestChunks_ChunkKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientLANP2PRequestChunks): unknown {
    const obj: any = {};
    if (message.chunkKeys) {
      obj.chunkKeys = message.chunkKeys.map((e) => e ? CMsgClientLANP2PRequestChunks_ChunkKey.toJSON(e) : undefined);
    } else {
      obj.chunkKeys = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunks>, I>>(base?: I): CMsgClientLANP2PRequestChunks {
    return CMsgClientLANP2PRequestChunks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunks>, I>>(
    object: I,
  ): CMsgClientLANP2PRequestChunks {
    const message = createBaseCMsgClientLANP2PRequestChunks();
    message.chunkKeys = object.chunkKeys?.map((e) => CMsgClientLANP2PRequestChunks_ChunkKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientLANP2PRequestChunks_ChunkKey(): CMsgClientLANP2PRequestChunks_ChunkKey {
  return { depotId: 0, sha: Buffer.alloc(0) };
}

export const CMsgClientLANP2PRequestChunks_ChunkKey = {
  encode(message: CMsgClientLANP2PRequestChunks_ChunkKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.sha.length !== 0) {
      writer.uint32(18).bytes(message.sha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLANP2PRequestChunks_ChunkKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLANP2PRequestChunks_ChunkKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.sha = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLANP2PRequestChunks_ChunkKey {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientLANP2PRequestChunks_ChunkKey): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunks_ChunkKey>, I>>(
    base?: I,
  ): CMsgClientLANP2PRequestChunks_ChunkKey {
    return CMsgClientLANP2PRequestChunks_ChunkKey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunks_ChunkKey>, I>>(
    object: I,
  ): CMsgClientLANP2PRequestChunks_ChunkKey {
    const message = createBaseCMsgClientLANP2PRequestChunks_ChunkKey();
    message.depotId = object.depotId ?? 0;
    message.sha = object.sha ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientLANP2PRequestChunksResponse(): CMsgClientLANP2PRequestChunksResponse {
  return { chunkResponses: [] };
}

export const CMsgClientLANP2PRequestChunksResponse = {
  encode(message: CMsgClientLANP2PRequestChunksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chunkResponses) {
      CMsgClientLANP2PRequestChunksResponse_ChunkData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLANP2PRequestChunksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLANP2PRequestChunksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkResponses.push(CMsgClientLANP2PRequestChunksResponse_ChunkData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLANP2PRequestChunksResponse {
    return {
      chunkResponses: Array.isArray(object?.chunkResponses)
        ? object.chunkResponses.map((e: any) => CMsgClientLANP2PRequestChunksResponse_ChunkData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientLANP2PRequestChunksResponse): unknown {
    const obj: any = {};
    if (message.chunkResponses) {
      obj.chunkResponses = message.chunkResponses.map((e) =>
        e ? CMsgClientLANP2PRequestChunksResponse_ChunkData.toJSON(e) : undefined
      );
    } else {
      obj.chunkResponses = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunksResponse>, I>>(
    base?: I,
  ): CMsgClientLANP2PRequestChunksResponse {
    return CMsgClientLANP2PRequestChunksResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunksResponse>, I>>(
    object: I,
  ): CMsgClientLANP2PRequestChunksResponse {
    const message = createBaseCMsgClientLANP2PRequestChunksResponse();
    message.chunkResponses =
      object.chunkResponses?.map((e) => CMsgClientLANP2PRequestChunksResponse_ChunkData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientLANP2PRequestChunksResponse_ChunkData(): CMsgClientLANP2PRequestChunksResponse_ChunkData {
  return {
    result: 0,
    depotId: 0,
    sha: Buffer.alloc(0),
    chunkData: Buffer.alloc(0),
    encrypted: false,
    compressed: false,
  };
}

export const CMsgClientLANP2PRequestChunksResponse_ChunkData = {
  encode(
    message: CMsgClientLANP2PRequestChunksResponse_ChunkData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.depotId !== 0) {
      writer.uint32(16).uint32(message.depotId);
    }
    if (message.sha.length !== 0) {
      writer.uint32(26).bytes(message.sha);
    }
    if (message.chunkData.length !== 0) {
      writer.uint32(34).bytes(message.chunkData);
    }
    if (message.encrypted === true) {
      writer.uint32(40).bool(message.encrypted);
    }
    if (message.compressed === true) {
      writer.uint32(48).bool(message.compressed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLANP2PRequestChunksResponse_ChunkData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLANP2PRequestChunksResponse_ChunkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.depotId = reader.uint32();
          break;
        case 3:
          message.sha = reader.bytes() as Buffer;
          break;
        case 4:
          message.chunkData = reader.bytes() as Buffer;
          break;
        case 5:
          message.encrypted = reader.bool();
          break;
        case 6:
          message.compressed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLANP2PRequestChunksResponse_ChunkData {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
      chunkData: isSet(object.chunkData) ? Buffer.from(bytesFromBase64(object.chunkData)) : Buffer.alloc(0),
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
      compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
    };
  },

  toJSON(message: CMsgClientLANP2PRequestChunksResponse_ChunkData): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    message.chunkData !== undefined &&
      (obj.chunkData = base64FromBytes(message.chunkData !== undefined ? message.chunkData : Buffer.alloc(0)));
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.compressed !== undefined && (obj.compressed = message.compressed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunksResponse_ChunkData>, I>>(
    base?: I,
  ): CMsgClientLANP2PRequestChunksResponse_ChunkData {
    return CMsgClientLANP2PRequestChunksResponse_ChunkData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLANP2PRequestChunksResponse_ChunkData>, I>>(
    object: I,
  ): CMsgClientLANP2PRequestChunksResponse_ChunkData {
    const message = createBaseCMsgClientLANP2PRequestChunksResponse_ChunkData();
    message.result = object.result ?? 0;
    message.depotId = object.depotId ?? 0;
    message.sha = object.sha ?? Buffer.alloc(0);
    message.chunkData = object.chunkData ?? Buffer.alloc(0);
    message.encrypted = object.encrypted ?? false;
    message.compressed = object.compressed ?? false;
    return message;
  },
};

function createBaseCMsgClientPeerChunkRequest(): CMsgClientPeerChunkRequest {
  return { appId: 0, depotId: 0, sha: Buffer.alloc(0) };
}

export const CMsgClientPeerChunkRequest = {
  encode(message: CMsgClientPeerChunkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.depotId !== 0) {
      writer.uint32(16).uint32(message.depotId);
    }
    if (message.sha.length !== 0) {
      writer.uint32(26).bytes(message.sha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPeerChunkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPeerChunkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.depotId = reader.uint32();
          break;
        case 3:
          message.sha = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPeerChunkRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientPeerChunkRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPeerChunkRequest>, I>>(base?: I): CMsgClientPeerChunkRequest {
    return CMsgClientPeerChunkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPeerChunkRequest>, I>>(object: I): CMsgClientPeerChunkRequest {
    const message = createBaseCMsgClientPeerChunkRequest();
    message.appId = object.appId ?? 0;
    message.depotId = object.depotId ?? 0;
    message.sha = object.sha ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientPeerChunkResponse(): CMsgClientPeerChunkResponse {
  return {
    result: 0,
    appId: 0,
    depotId: 0,
    sha: Buffer.alloc(0),
    encrypted: false,
    compressed: false,
    chunkData: Buffer.alloc(0),
  };
}

export const CMsgClientPeerChunkResponse = {
  encode(message: CMsgClientPeerChunkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.depotId !== 0) {
      writer.uint32(24).uint32(message.depotId);
    }
    if (message.sha.length !== 0) {
      writer.uint32(34).bytes(message.sha);
    }
    if (message.encrypted === true) {
      writer.uint32(40).bool(message.encrypted);
    }
    if (message.compressed === true) {
      writer.uint32(48).bool(message.compressed);
    }
    if (message.chunkData.length !== 0) {
      writer.uint32(58).bytes(message.chunkData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPeerChunkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPeerChunkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.depotId = reader.uint32();
          break;
        case 4:
          message.sha = reader.bytes() as Buffer;
          break;
        case 5:
          message.encrypted = reader.bool();
          break;
        case 6:
          message.compressed = reader.bool();
          break;
        case 7:
          message.chunkData = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPeerChunkResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
      compressed: isSet(object.compressed) ? Boolean(object.compressed) : false,
      chunkData: isSet(object.chunkData) ? Buffer.from(bytesFromBase64(object.chunkData)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientPeerChunkResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    message.compressed !== undefined && (obj.compressed = message.compressed);
    message.chunkData !== undefined &&
      (obj.chunkData = base64FromBytes(message.chunkData !== undefined ? message.chunkData : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPeerChunkResponse>, I>>(base?: I): CMsgClientPeerChunkResponse {
    return CMsgClientPeerChunkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPeerChunkResponse>, I>>(object: I): CMsgClientPeerChunkResponse {
    const message = createBaseCMsgClientPeerChunkResponse();
    message.result = object.result ?? 0;
    message.appId = object.appId ?? 0;
    message.depotId = object.depotId ?? 0;
    message.sha = object.sha ?? Buffer.alloc(0);
    message.encrypted = object.encrypted ?? false;
    message.compressed = object.compressed ?? false;
    message.chunkData = object.chunkData ?? Buffer.alloc(0);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
