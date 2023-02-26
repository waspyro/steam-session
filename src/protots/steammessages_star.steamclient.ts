/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum ESTARGlyphWriteResult {
  k_E_STAR_GlyphWriteResult_Success = 0,
  k_E_STAR_GlyphWriteResult_InvalidMessage = 1,
  k_E_STAR_GlyphWriteResult_InvalidJSON = 2,
  k_E_STAR_GlyphWriteResult_SQLError = 3,
  UNRECOGNIZED = -1,
}

export function eSTARGlyphWriteResultFromJSON(object: any): ESTARGlyphWriteResult {
  switch (object) {
    case 0:
    case "k_E_STAR_GlyphWriteResult_Success":
      return ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_Success;
    case 1:
    case "k_E_STAR_GlyphWriteResult_InvalidMessage":
      return ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_InvalidMessage;
    case 2:
    case "k_E_STAR_GlyphWriteResult_InvalidJSON":
      return ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_InvalidJSON;
    case 3:
    case "k_E_STAR_GlyphWriteResult_SQLError":
      return ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_SQLError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESTARGlyphWriteResult.UNRECOGNIZED;
  }
}

export function eSTARGlyphWriteResultToJSON(object: ESTARGlyphWriteResult): string {
  switch (object) {
    case ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_Success:
      return "k_E_STAR_GlyphWriteResult_Success";
    case ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_InvalidMessage:
      return "k_E_STAR_GlyphWriteResult_InvalidMessage";
    case ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_InvalidJSON:
      return "k_E_STAR_GlyphWriteResult_InvalidJSON";
    case ESTARGlyphWriteResult.k_E_STAR_GlyphWriteResult_SQLError:
      return "k_E_STAR_GlyphWriteResult_SQLError";
    case ESTARGlyphWriteResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CSTARKeyValueQuery {
  key: string;
  value: string;
}

export interface CSTARGlyphQueryParams {
  bundleId: string;
  queries: CSTARKeyValueQuery[];
}

export interface CSTARReadGlyphDataRequest {
  queryParams: CSTARGlyphQueryParams | undefined;
  lastModifiedTimeLowerLimit: string;
}

export interface CSTARGlyphData {
  glyphGuid: Buffer;
  glyphLastModified: string;
  glyphJsonData: string;
}

export interface CSTARWriteGlyphDataRequest {
  bundleId: string;
  glyphData: CSTARGlyphData[];
}

export interface CSTARRequest {
  readGlyphData: CSTARReadGlyphDataRequest | undefined;
  writeGlyphData: CSTARWriteGlyphDataRequest | undefined;
}

export interface CSTARReadGlyphDataResponse {
  bundleId: string;
  glyphData: CSTARGlyphData[];
}

export interface CSTARWriteGlyphDataResponse {
  result: ESTARGlyphWriteResult[];
}

export interface CSTARResponse {
  readGlyphData: CSTARReadGlyphDataResponse | undefined;
  writeGlyphData: CSTARWriteGlyphDataResponse | undefined;
}

function createBaseCSTARKeyValueQuery(): CSTARKeyValueQuery {
  return { key: "", value: "" };
}

export const CSTARKeyValueQuery = {
  encode(message: CSTARKeyValueQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARKeyValueQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARKeyValueQuery();
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

  fromJSON(object: any): CSTARKeyValueQuery {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CSTARKeyValueQuery): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARKeyValueQuery>, I>>(base?: I): CSTARKeyValueQuery {
    return CSTARKeyValueQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARKeyValueQuery>, I>>(object: I): CSTARKeyValueQuery {
    const message = createBaseCSTARKeyValueQuery();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCSTARGlyphQueryParams(): CSTARGlyphQueryParams {
  return { bundleId: "0", queries: [] };
}

export const CSTARGlyphQueryParams = {
  encode(message: CSTARGlyphQueryParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundleId !== "0") {
      writer.uint32(8).uint64(message.bundleId);
    }
    for (const v of message.queries) {
      CSTARKeyValueQuery.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARGlyphQueryParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARGlyphQueryParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.queries.push(CSTARKeyValueQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARGlyphQueryParams {
    return {
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "0",
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => CSTARKeyValueQuery.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSTARGlyphQueryParams): unknown {
    const obj: any = {};
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    if (message.queries) {
      obj.queries = message.queries.map((e) => e ? CSTARKeyValueQuery.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARGlyphQueryParams>, I>>(base?: I): CSTARGlyphQueryParams {
    return CSTARGlyphQueryParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARGlyphQueryParams>, I>>(object: I): CSTARGlyphQueryParams {
    const message = createBaseCSTARGlyphQueryParams();
    message.bundleId = object.bundleId ?? "0";
    message.queries = object.queries?.map((e) => CSTARKeyValueQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSTARReadGlyphDataRequest(): CSTARReadGlyphDataRequest {
  return { queryParams: undefined, lastModifiedTimeLowerLimit: "" };
}

export const CSTARReadGlyphDataRequest = {
  encode(message: CSTARReadGlyphDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryParams !== undefined) {
      CSTARGlyphQueryParams.encode(message.queryParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastModifiedTimeLowerLimit !== "") {
      writer.uint32(18).string(message.lastModifiedTimeLowerLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARReadGlyphDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARReadGlyphDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryParams = CSTARGlyphQueryParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastModifiedTimeLowerLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARReadGlyphDataRequest {
    return {
      queryParams: isSet(object.queryParams) ? CSTARGlyphQueryParams.fromJSON(object.queryParams) : undefined,
      lastModifiedTimeLowerLimit: isSet(object.lastModifiedTimeLowerLimit)
        ? String(object.lastModifiedTimeLowerLimit)
        : "",
    };
  },

  toJSON(message: CSTARReadGlyphDataRequest): unknown {
    const obj: any = {};
    message.queryParams !== undefined &&
      (obj.queryParams = message.queryParams ? CSTARGlyphQueryParams.toJSON(message.queryParams) : undefined);
    message.lastModifiedTimeLowerLimit !== undefined &&
      (obj.lastModifiedTimeLowerLimit = message.lastModifiedTimeLowerLimit);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARReadGlyphDataRequest>, I>>(base?: I): CSTARReadGlyphDataRequest {
    return CSTARReadGlyphDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARReadGlyphDataRequest>, I>>(object: I): CSTARReadGlyphDataRequest {
    const message = createBaseCSTARReadGlyphDataRequest();
    message.queryParams = (object.queryParams !== undefined && object.queryParams !== null)
      ? CSTARGlyphQueryParams.fromPartial(object.queryParams)
      : undefined;
    message.lastModifiedTimeLowerLimit = object.lastModifiedTimeLowerLimit ?? "";
    return message;
  },
};

function createBaseCSTARGlyphData(): CSTARGlyphData {
  return { glyphGuid: Buffer.alloc(0), glyphLastModified: "", glyphJsonData: "" };
}

export const CSTARGlyphData = {
  encode(message: CSTARGlyphData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.glyphGuid.length !== 0) {
      writer.uint32(10).bytes(message.glyphGuid);
    }
    if (message.glyphLastModified !== "") {
      writer.uint32(18).string(message.glyphLastModified);
    }
    if (message.glyphJsonData !== "") {
      writer.uint32(26).string(message.glyphJsonData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARGlyphData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARGlyphData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.glyphGuid = reader.bytes() as Buffer;
          break;
        case 2:
          message.glyphLastModified = reader.string();
          break;
        case 3:
          message.glyphJsonData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARGlyphData {
    return {
      glyphGuid: isSet(object.glyphGuid) ? Buffer.from(bytesFromBase64(object.glyphGuid)) : Buffer.alloc(0),
      glyphLastModified: isSet(object.glyphLastModified) ? String(object.glyphLastModified) : "",
      glyphJsonData: isSet(object.glyphJsonData) ? String(object.glyphJsonData) : "",
    };
  },

  toJSON(message: CSTARGlyphData): unknown {
    const obj: any = {};
    message.glyphGuid !== undefined &&
      (obj.glyphGuid = base64FromBytes(message.glyphGuid !== undefined ? message.glyphGuid : Buffer.alloc(0)));
    message.glyphLastModified !== undefined && (obj.glyphLastModified = message.glyphLastModified);
    message.glyphJsonData !== undefined && (obj.glyphJsonData = message.glyphJsonData);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARGlyphData>, I>>(base?: I): CSTARGlyphData {
    return CSTARGlyphData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARGlyphData>, I>>(object: I): CSTARGlyphData {
    const message = createBaseCSTARGlyphData();
    message.glyphGuid = object.glyphGuid ?? Buffer.alloc(0);
    message.glyphLastModified = object.glyphLastModified ?? "";
    message.glyphJsonData = object.glyphJsonData ?? "";
    return message;
  },
};

function createBaseCSTARWriteGlyphDataRequest(): CSTARWriteGlyphDataRequest {
  return { bundleId: "0", glyphData: [] };
}

export const CSTARWriteGlyphDataRequest = {
  encode(message: CSTARWriteGlyphDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundleId !== "0") {
      writer.uint32(8).uint64(message.bundleId);
    }
    for (const v of message.glyphData) {
      CSTARGlyphData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARWriteGlyphDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARWriteGlyphDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.glyphData.push(CSTARGlyphData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARWriteGlyphDataRequest {
    return {
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "0",
      glyphData: Array.isArray(object?.glyphData) ? object.glyphData.map((e: any) => CSTARGlyphData.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSTARWriteGlyphDataRequest): unknown {
    const obj: any = {};
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    if (message.glyphData) {
      obj.glyphData = message.glyphData.map((e) => e ? CSTARGlyphData.toJSON(e) : undefined);
    } else {
      obj.glyphData = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARWriteGlyphDataRequest>, I>>(base?: I): CSTARWriteGlyphDataRequest {
    return CSTARWriteGlyphDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARWriteGlyphDataRequest>, I>>(object: I): CSTARWriteGlyphDataRequest {
    const message = createBaseCSTARWriteGlyphDataRequest();
    message.bundleId = object.bundleId ?? "0";
    message.glyphData = object.glyphData?.map((e) => CSTARGlyphData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSTARRequest(): CSTARRequest {
  return { readGlyphData: undefined, writeGlyphData: undefined };
}

export const CSTARRequest = {
  encode(message: CSTARRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readGlyphData !== undefined) {
      CSTARReadGlyphDataRequest.encode(message.readGlyphData, writer.uint32(10).fork()).ldelim();
    }
    if (message.writeGlyphData !== undefined) {
      CSTARWriteGlyphDataRequest.encode(message.writeGlyphData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.readGlyphData = CSTARReadGlyphDataRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.writeGlyphData = CSTARWriteGlyphDataRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARRequest {
    return {
      readGlyphData: isSet(object.readGlyphData) ? CSTARReadGlyphDataRequest.fromJSON(object.readGlyphData) : undefined,
      writeGlyphData: isSet(object.writeGlyphData)
        ? CSTARWriteGlyphDataRequest.fromJSON(object.writeGlyphData)
        : undefined,
    };
  },

  toJSON(message: CSTARRequest): unknown {
    const obj: any = {};
    message.readGlyphData !== undefined &&
      (obj.readGlyphData = message.readGlyphData ? CSTARReadGlyphDataRequest.toJSON(message.readGlyphData) : undefined);
    message.writeGlyphData !== undefined && (obj.writeGlyphData = message.writeGlyphData
      ? CSTARWriteGlyphDataRequest.toJSON(message.writeGlyphData)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARRequest>, I>>(base?: I): CSTARRequest {
    return CSTARRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARRequest>, I>>(object: I): CSTARRequest {
    const message = createBaseCSTARRequest();
    message.readGlyphData = (object.readGlyphData !== undefined && object.readGlyphData !== null)
      ? CSTARReadGlyphDataRequest.fromPartial(object.readGlyphData)
      : undefined;
    message.writeGlyphData = (object.writeGlyphData !== undefined && object.writeGlyphData !== null)
      ? CSTARWriteGlyphDataRequest.fromPartial(object.writeGlyphData)
      : undefined;
    return message;
  },
};

function createBaseCSTARReadGlyphDataResponse(): CSTARReadGlyphDataResponse {
  return { bundleId: "0", glyphData: [] };
}

export const CSTARReadGlyphDataResponse = {
  encode(message: CSTARReadGlyphDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundleId !== "0") {
      writer.uint32(8).uint64(message.bundleId);
    }
    for (const v of message.glyphData) {
      CSTARGlyphData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARReadGlyphDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARReadGlyphDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.glyphData.push(CSTARGlyphData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARReadGlyphDataResponse {
    return {
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "0",
      glyphData: Array.isArray(object?.glyphData) ? object.glyphData.map((e: any) => CSTARGlyphData.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSTARReadGlyphDataResponse): unknown {
    const obj: any = {};
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    if (message.glyphData) {
      obj.glyphData = message.glyphData.map((e) => e ? CSTARGlyphData.toJSON(e) : undefined);
    } else {
      obj.glyphData = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARReadGlyphDataResponse>, I>>(base?: I): CSTARReadGlyphDataResponse {
    return CSTARReadGlyphDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARReadGlyphDataResponse>, I>>(object: I): CSTARReadGlyphDataResponse {
    const message = createBaseCSTARReadGlyphDataResponse();
    message.bundleId = object.bundleId ?? "0";
    message.glyphData = object.glyphData?.map((e) => CSTARGlyphData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSTARWriteGlyphDataResponse(): CSTARWriteGlyphDataResponse {
  return { result: [] };
}

export const CSTARWriteGlyphDataResponse = {
  encode(message: CSTARWriteGlyphDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.result) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARWriteGlyphDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARWriteGlyphDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.result.push(reader.int32() as any);
            }
          } else {
            message.result.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARWriteGlyphDataResponse {
    return {
      result: Array.isArray(object?.result) ? object.result.map((e: any) => eSTARGlyphWriteResultFromJSON(e)) : [],
    };
  },

  toJSON(message: CSTARWriteGlyphDataResponse): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) => eSTARGlyphWriteResultToJSON(e));
    } else {
      obj.result = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARWriteGlyphDataResponse>, I>>(base?: I): CSTARWriteGlyphDataResponse {
    return CSTARWriteGlyphDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARWriteGlyphDataResponse>, I>>(object: I): CSTARWriteGlyphDataResponse {
    const message = createBaseCSTARWriteGlyphDataResponse();
    message.result = object.result?.map((e) => e) || [];
    return message;
  },
};

function createBaseCSTARResponse(): CSTARResponse {
  return { readGlyphData: undefined, writeGlyphData: undefined };
}

export const CSTARResponse = {
  encode(message: CSTARResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.readGlyphData !== undefined) {
      CSTARReadGlyphDataResponse.encode(message.readGlyphData, writer.uint32(10).fork()).ldelim();
    }
    if (message.writeGlyphData !== undefined) {
      CSTARWriteGlyphDataResponse.encode(message.writeGlyphData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSTARResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSTARResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.readGlyphData = CSTARReadGlyphDataResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.writeGlyphData = CSTARWriteGlyphDataResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSTARResponse {
    return {
      readGlyphData: isSet(object.readGlyphData)
        ? CSTARReadGlyphDataResponse.fromJSON(object.readGlyphData)
        : undefined,
      writeGlyphData: isSet(object.writeGlyphData)
        ? CSTARWriteGlyphDataResponse.fromJSON(object.writeGlyphData)
        : undefined,
    };
  },

  toJSON(message: CSTARResponse): unknown {
    const obj: any = {};
    message.readGlyphData !== undefined &&
      (obj.readGlyphData = message.readGlyphData
        ? CSTARReadGlyphDataResponse.toJSON(message.readGlyphData)
        : undefined);
    message.writeGlyphData !== undefined && (obj.writeGlyphData = message.writeGlyphData
      ? CSTARWriteGlyphDataResponse.toJSON(message.writeGlyphData)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSTARResponse>, I>>(base?: I): CSTARResponse {
    return CSTARResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSTARResponse>, I>>(object: I): CSTARResponse {
    const message = createBaseCSTARResponse();
    message.readGlyphData = (object.readGlyphData !== undefined && object.readGlyphData !== null)
      ? CSTARReadGlyphDataResponse.fromPartial(object.readGlyphData)
      : undefined;
    message.writeGlyphData = (object.writeGlyphData !== undefined && object.writeGlyphData !== null)
      ? CSTARWriteGlyphDataResponse.fromPartial(object.writeGlyphData)
      : undefined;
    return message;
  },
};

export interface STAR {
  ProcessMessage(request: CSTARRequest): Promise<CSTARResponse>;
}

export class STARClientImpl implements STAR {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "STAR";
    this.rpc = rpc;
    this.ProcessMessage = this.ProcessMessage.bind(this);
  }
  ProcessMessage(request: CSTARRequest): Promise<CSTARResponse> {
    const data = CSTARRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProcessMessage", data);
    return promise.then((data) => CSTARResponse.decode(new _m0.Reader(data)));
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
