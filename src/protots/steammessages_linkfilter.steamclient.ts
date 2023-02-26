/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CCommunityGetLinkFilterHashPrefixesRequest {
  hitType: number;
  count: number;
  start: string;
}

export interface CCommunityGetLinkFilterHashPrefixesResponse {
  hashPrefixes: number[];
}

export interface CCommunityGetLinkFilterHashesRequest {
  hitType: number;
  count: number;
  start: string;
}

export interface CCommunityGetLinkFilterHashesResponse {
  hashes: Buffer[];
}

export interface CCommunityGetLinkFilterListVersionRequest {
  hitType: number;
}

export interface CCommunityGetLinkFilterListVersionResponse {
  version: string;
  count: string;
}

function createBaseCCommunityGetLinkFilterHashPrefixesRequest(): CCommunityGetLinkFilterHashPrefixesRequest {
  return { hitType: 0, count: 0, start: "0" };
}

export const CCommunityGetLinkFilterHashPrefixesRequest = {
  encode(message: CCommunityGetLinkFilterHashPrefixesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hitType !== 0) {
      writer.uint32(8).uint32(message.hitType);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.start !== "0") {
      writer.uint32(24).uint64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterHashPrefixesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterHashPrefixesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hitType = reader.uint32();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.start = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterHashPrefixesRequest {
    return {
      hitType: isSet(object.hitType) ? Number(object.hitType) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      start: isSet(object.start) ? String(object.start) : "0",
    };
  },

  toJSON(message: CCommunityGetLinkFilterHashPrefixesRequest): unknown {
    const obj: any = {};
    message.hitType !== undefined && (obj.hitType = Math.round(message.hitType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.start !== undefined && (obj.start = message.start);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashPrefixesRequest>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterHashPrefixesRequest {
    return CCommunityGetLinkFilterHashPrefixesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashPrefixesRequest>, I>>(
    object: I,
  ): CCommunityGetLinkFilterHashPrefixesRequest {
    const message = createBaseCCommunityGetLinkFilterHashPrefixesRequest();
    message.hitType = object.hitType ?? 0;
    message.count = object.count ?? 0;
    message.start = object.start ?? "0";
    return message;
  },
};

function createBaseCCommunityGetLinkFilterHashPrefixesResponse(): CCommunityGetLinkFilterHashPrefixesResponse {
  return { hashPrefixes: [] };
}

export const CCommunityGetLinkFilterHashPrefixesResponse = {
  encode(message: CCommunityGetLinkFilterHashPrefixesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.hashPrefixes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterHashPrefixesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterHashPrefixesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.hashPrefixes.push(reader.uint32());
            }
          } else {
            message.hashPrefixes.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterHashPrefixesResponse {
    return { hashPrefixes: Array.isArray(object?.hashPrefixes) ? object.hashPrefixes.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CCommunityGetLinkFilterHashPrefixesResponse): unknown {
    const obj: any = {};
    if (message.hashPrefixes) {
      obj.hashPrefixes = message.hashPrefixes.map((e) => Math.round(e));
    } else {
      obj.hashPrefixes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashPrefixesResponse>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterHashPrefixesResponse {
    return CCommunityGetLinkFilterHashPrefixesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashPrefixesResponse>, I>>(
    object: I,
  ): CCommunityGetLinkFilterHashPrefixesResponse {
    const message = createBaseCCommunityGetLinkFilterHashPrefixesResponse();
    message.hashPrefixes = object.hashPrefixes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCCommunityGetLinkFilterHashesRequest(): CCommunityGetLinkFilterHashesRequest {
  return { hitType: 0, count: 0, start: "0" };
}

export const CCommunityGetLinkFilterHashesRequest = {
  encode(message: CCommunityGetLinkFilterHashesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hitType !== 0) {
      writer.uint32(8).uint32(message.hitType);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.start !== "0") {
      writer.uint32(24).uint64(message.start);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterHashesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterHashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hitType = reader.uint32();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.start = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterHashesRequest {
    return {
      hitType: isSet(object.hitType) ? Number(object.hitType) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      start: isSet(object.start) ? String(object.start) : "0",
    };
  },

  toJSON(message: CCommunityGetLinkFilterHashesRequest): unknown {
    const obj: any = {};
    message.hitType !== undefined && (obj.hitType = Math.round(message.hitType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.start !== undefined && (obj.start = message.start);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashesRequest>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterHashesRequest {
    return CCommunityGetLinkFilterHashesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashesRequest>, I>>(
    object: I,
  ): CCommunityGetLinkFilterHashesRequest {
    const message = createBaseCCommunityGetLinkFilterHashesRequest();
    message.hitType = object.hitType ?? 0;
    message.count = object.count ?? 0;
    message.start = object.start ?? "0";
    return message;
  },
};

function createBaseCCommunityGetLinkFilterHashesResponse(): CCommunityGetLinkFilterHashesResponse {
  return { hashes: [] };
}

export const CCommunityGetLinkFilterHashesResponse = {
  encode(message: CCommunityGetLinkFilterHashesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hashes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterHashesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterHashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashes.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterHashesResponse {
    return {
      hashes: Array.isArray(object?.hashes) ? object.hashes.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: CCommunityGetLinkFilterHashesResponse): unknown {
    const obj: any = {};
    if (message.hashes) {
      obj.hashes = message.hashes.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.hashes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashesResponse>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterHashesResponse {
    return CCommunityGetLinkFilterHashesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterHashesResponse>, I>>(
    object: I,
  ): CCommunityGetLinkFilterHashesResponse {
    const message = createBaseCCommunityGetLinkFilterHashesResponse();
    message.hashes = object.hashes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCCommunityGetLinkFilterListVersionRequest(): CCommunityGetLinkFilterListVersionRequest {
  return { hitType: 0 };
}

export const CCommunityGetLinkFilterListVersionRequest = {
  encode(message: CCommunityGetLinkFilterListVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hitType !== 0) {
      writer.uint32(8).uint32(message.hitType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterListVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterListVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hitType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterListVersionRequest {
    return { hitType: isSet(object.hitType) ? Number(object.hitType) : 0 };
  },

  toJSON(message: CCommunityGetLinkFilterListVersionRequest): unknown {
    const obj: any = {};
    message.hitType !== undefined && (obj.hitType = Math.round(message.hitType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterListVersionRequest>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterListVersionRequest {
    return CCommunityGetLinkFilterListVersionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterListVersionRequest>, I>>(
    object: I,
  ): CCommunityGetLinkFilterListVersionRequest {
    const message = createBaseCCommunityGetLinkFilterListVersionRequest();
    message.hitType = object.hitType ?? 0;
    return message;
  },
};

function createBaseCCommunityGetLinkFilterListVersionResponse(): CCommunityGetLinkFilterListVersionResponse {
  return { version: "", count: "0" };
}

export const CCommunityGetLinkFilterListVersionResponse = {
  encode(message: CCommunityGetLinkFilterListVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.count !== "0") {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCommunityGetLinkFilterListVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCommunityGetLinkFilterListVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.count = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCommunityGetLinkFilterListVersionResponse {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      count: isSet(object.count) ? String(object.count) : "0",
    };
  },

  toJSON(message: CCommunityGetLinkFilterListVersionResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCommunityGetLinkFilterListVersionResponse>, I>>(
    base?: I,
  ): CCommunityGetLinkFilterListVersionResponse {
    return CCommunityGetLinkFilterListVersionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCommunityGetLinkFilterListVersionResponse>, I>>(
    object: I,
  ): CCommunityGetLinkFilterListVersionResponse {
    const message = createBaseCCommunityGetLinkFilterListVersionResponse();
    message.version = object.version ?? "";
    message.count = object.count ?? "0";
    return message;
  },
};

export interface CommunityLinkFilter {
  GetLinkFilterHashPrefixes(
    request: CCommunityGetLinkFilterHashPrefixesRequest,
  ): Promise<CCommunityGetLinkFilterHashPrefixesResponse>;
  GetLinkFilterHashes(request: CCommunityGetLinkFilterHashesRequest): Promise<CCommunityGetLinkFilterHashesResponse>;
  GetLinkFilterListVersion(
    request: CCommunityGetLinkFilterListVersionRequest,
  ): Promise<CCommunityGetLinkFilterListVersionResponse>;
}

export class CommunityLinkFilterClientImpl implements CommunityLinkFilter {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "CommunityLinkFilter";
    this.rpc = rpc;
    this.GetLinkFilterHashPrefixes = this.GetLinkFilterHashPrefixes.bind(this);
    this.GetLinkFilterHashes = this.GetLinkFilterHashes.bind(this);
    this.GetLinkFilterListVersion = this.GetLinkFilterListVersion.bind(this);
  }
  GetLinkFilterHashPrefixes(
    request: CCommunityGetLinkFilterHashPrefixesRequest,
  ): Promise<CCommunityGetLinkFilterHashPrefixesResponse> {
    const data = CCommunityGetLinkFilterHashPrefixesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLinkFilterHashPrefixes", data);
    return promise.then((data) => CCommunityGetLinkFilterHashPrefixesResponse.decode(new _m0.Reader(data)));
  }

  GetLinkFilterHashes(request: CCommunityGetLinkFilterHashesRequest): Promise<CCommunityGetLinkFilterHashesResponse> {
    const data = CCommunityGetLinkFilterHashesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLinkFilterHashes", data);
    return promise.then((data) => CCommunityGetLinkFilterHashesResponse.decode(new _m0.Reader(data)));
  }

  GetLinkFilterListVersion(
    request: CCommunityGetLinkFilterListVersionRequest,
  ): Promise<CCommunityGetLinkFilterListVersionResponse> {
    const data = CCommunityGetLinkFilterListVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLinkFilterListVersion", data);
    return promise.then((data) => CCommunityGetLinkFilterListVersionResponse.decode(new _m0.Reader(data)));
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
