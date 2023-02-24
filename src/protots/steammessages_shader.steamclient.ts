/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CShaderRegisterShaderRequest {
  appid: number;
  gpuDesc: string;
  driverDesc: string;
  shaders: CShaderRegisterShaderRequest_Shader[];
}

export interface CShaderRegisterShaderRequest_Shader {
  cacheKeySha: Buffer;
  shaderCodeSha: Buffer;
}

export interface CShaderRegisterShaderResponse {
  requestedCodeids: number[];
}

export interface CShaderSendShaderRequest {
  appid: number;
  shaders: CShaderSendShaderRequest_ShaderCode[];
}

export interface CShaderSendShaderRequest_ShaderCode {
  shaderCodeSha: Buffer;
  shaderCode: Buffer;
}

export interface CShaderSendShaderResponse {
}

export interface CShaderGetBucketManifestRequest {
  appid: number;
  gpuDesc: string;
  driverDesc: string;
}

export interface CShaderGetBucketManifestResponse {
  manifestid: number;
  depotsize: number;
  bucketid: number;
}

export interface CShaderGetStaleBucketRequest {
  gpuDesc: string;
  driverDesc: string;
}

export interface CShaderGetStaleBucketResponse {
  bucketid: number;
  appid: number;
  manifestid: number;
  gpuDesc: string;
  driverDesc: string;
  depotEncryptionKey: Buffer;
}

export interface CShaderReportExternalBuildRequest {
  appid: number;
  gpuDesc: string;
  driverDesc: string;
  manifestid: number;
  sourceGpuDesc: string;
  sourceDriverDesc: string;
  depotsize: number;
}

export interface CShaderReportExternalBuildResponse {
}

function createBaseCShaderRegisterShaderRequest(): CShaderRegisterShaderRequest {
  return { appid: 0, gpuDesc: "", driverDesc: "", shaders: [] };
}

export const CShaderRegisterShaderRequest = {
  encode(message: CShaderRegisterShaderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gpuDesc !== "") {
      writer.uint32(18).string(message.gpuDesc);
    }
    if (message.driverDesc !== "") {
      writer.uint32(26).string(message.driverDesc);
    }
    for (const v of message.shaders) {
      CShaderRegisterShaderRequest_Shader.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderRegisterShaderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderRegisterShaderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.gpuDesc = reader.string();
          break;
        case 3:
          message.driverDesc = reader.string();
          break;
        case 4:
          message.shaders.push(CShaderRegisterShaderRequest_Shader.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderRegisterShaderRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gpuDesc: isSet(object.gpuDesc) ? String(object.gpuDesc) : "",
      driverDesc: isSet(object.driverDesc) ? String(object.driverDesc) : "",
      shaders: Array.isArray(object?.shaders)
        ? object.shaders.map((e: any) => CShaderRegisterShaderRequest_Shader.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CShaderRegisterShaderRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gpuDesc !== undefined && (obj.gpuDesc = message.gpuDesc);
    message.driverDesc !== undefined && (obj.driverDesc = message.driverDesc);
    if (message.shaders) {
      obj.shaders = message.shaders.map((e) => e ? CShaderRegisterShaderRequest_Shader.toJSON(e) : undefined);
    } else {
      obj.shaders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderRegisterShaderRequest>, I>>(base?: I): CShaderRegisterShaderRequest {
    return CShaderRegisterShaderRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderRegisterShaderRequest>, I>>(object: I): CShaderRegisterShaderRequest {
    const message = createBaseCShaderRegisterShaderRequest();
    message.appid = object.appid ?? 0;
    message.gpuDesc = object.gpuDesc ?? "";
    message.driverDesc = object.driverDesc ?? "";
    message.shaders = object.shaders?.map((e) => CShaderRegisterShaderRequest_Shader.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCShaderRegisterShaderRequest_Shader(): CShaderRegisterShaderRequest_Shader {
  return { cacheKeySha: Buffer.alloc(0), shaderCodeSha: Buffer.alloc(0) };
}

export const CShaderRegisterShaderRequest_Shader = {
  encode(message: CShaderRegisterShaderRequest_Shader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cacheKeySha.length !== 0) {
      writer.uint32(10).bytes(message.cacheKeySha);
    }
    if (message.shaderCodeSha.length !== 0) {
      writer.uint32(18).bytes(message.shaderCodeSha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderRegisterShaderRequest_Shader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderRegisterShaderRequest_Shader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cacheKeySha = reader.bytes() as Buffer;
          break;
        case 2:
          message.shaderCodeSha = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderRegisterShaderRequest_Shader {
    return {
      cacheKeySha: isSet(object.cacheKeySha) ? Buffer.from(bytesFromBase64(object.cacheKeySha)) : Buffer.alloc(0),
      shaderCodeSha: isSet(object.shaderCodeSha) ? Buffer.from(bytesFromBase64(object.shaderCodeSha)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CShaderRegisterShaderRequest_Shader): unknown {
    const obj: any = {};
    message.cacheKeySha !== undefined &&
      (obj.cacheKeySha = base64FromBytes(message.cacheKeySha !== undefined ? message.cacheKeySha : Buffer.alloc(0)));
    message.shaderCodeSha !== undefined &&
      (obj.shaderCodeSha = base64FromBytes(
        message.shaderCodeSha !== undefined ? message.shaderCodeSha : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderRegisterShaderRequest_Shader>, I>>(
    base?: I,
  ): CShaderRegisterShaderRequest_Shader {
    return CShaderRegisterShaderRequest_Shader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderRegisterShaderRequest_Shader>, I>>(
    object: I,
  ): CShaderRegisterShaderRequest_Shader {
    const message = createBaseCShaderRegisterShaderRequest_Shader();
    message.cacheKeySha = object.cacheKeySha ?? Buffer.alloc(0);
    message.shaderCodeSha = object.shaderCodeSha ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCShaderRegisterShaderResponse(): CShaderRegisterShaderResponse {
  return { requestedCodeids: [] };
}

export const CShaderRegisterShaderResponse = {
  encode(message: CShaderRegisterShaderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.requestedCodeids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderRegisterShaderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderRegisterShaderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestedCodeids.push(reader.uint32());
            }
          } else {
            message.requestedCodeids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderRegisterShaderResponse {
    return {
      requestedCodeids: Array.isArray(object?.requestedCodeids)
        ? object.requestedCodeids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CShaderRegisterShaderResponse): unknown {
    const obj: any = {};
    if (message.requestedCodeids) {
      obj.requestedCodeids = message.requestedCodeids.map((e) => Math.round(e));
    } else {
      obj.requestedCodeids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderRegisterShaderResponse>, I>>(base?: I): CShaderRegisterShaderResponse {
    return CShaderRegisterShaderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderRegisterShaderResponse>, I>>(
    object: I,
  ): CShaderRegisterShaderResponse {
    const message = createBaseCShaderRegisterShaderResponse();
    message.requestedCodeids = object.requestedCodeids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCShaderSendShaderRequest(): CShaderSendShaderRequest {
  return { appid: 0, shaders: [] };
}

export const CShaderSendShaderRequest = {
  encode(message: CShaderSendShaderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    for (const v of message.shaders) {
      CShaderSendShaderRequest_ShaderCode.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderSendShaderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderSendShaderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.shaders.push(CShaderSendShaderRequest_ShaderCode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderSendShaderRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      shaders: Array.isArray(object?.shaders)
        ? object.shaders.map((e: any) => CShaderSendShaderRequest_ShaderCode.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CShaderSendShaderRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.shaders) {
      obj.shaders = message.shaders.map((e) => e ? CShaderSendShaderRequest_ShaderCode.toJSON(e) : undefined);
    } else {
      obj.shaders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderSendShaderRequest>, I>>(base?: I): CShaderSendShaderRequest {
    return CShaderSendShaderRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderSendShaderRequest>, I>>(object: I): CShaderSendShaderRequest {
    const message = createBaseCShaderSendShaderRequest();
    message.appid = object.appid ?? 0;
    message.shaders = object.shaders?.map((e) => CShaderSendShaderRequest_ShaderCode.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCShaderSendShaderRequest_ShaderCode(): CShaderSendShaderRequest_ShaderCode {
  return { shaderCodeSha: Buffer.alloc(0), shaderCode: Buffer.alloc(0) };
}

export const CShaderSendShaderRequest_ShaderCode = {
  encode(message: CShaderSendShaderRequest_ShaderCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shaderCodeSha.length !== 0) {
      writer.uint32(10).bytes(message.shaderCodeSha);
    }
    if (message.shaderCode.length !== 0) {
      writer.uint32(18).bytes(message.shaderCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderSendShaderRequest_ShaderCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderSendShaderRequest_ShaderCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shaderCodeSha = reader.bytes() as Buffer;
          break;
        case 2:
          message.shaderCode = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderSendShaderRequest_ShaderCode {
    return {
      shaderCodeSha: isSet(object.shaderCodeSha) ? Buffer.from(bytesFromBase64(object.shaderCodeSha)) : Buffer.alloc(0),
      shaderCode: isSet(object.shaderCode) ? Buffer.from(bytesFromBase64(object.shaderCode)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CShaderSendShaderRequest_ShaderCode): unknown {
    const obj: any = {};
    message.shaderCodeSha !== undefined &&
      (obj.shaderCodeSha = base64FromBytes(
        message.shaderCodeSha !== undefined ? message.shaderCodeSha : Buffer.alloc(0),
      ));
    message.shaderCode !== undefined &&
      (obj.shaderCode = base64FromBytes(message.shaderCode !== undefined ? message.shaderCode : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderSendShaderRequest_ShaderCode>, I>>(
    base?: I,
  ): CShaderSendShaderRequest_ShaderCode {
    return CShaderSendShaderRequest_ShaderCode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderSendShaderRequest_ShaderCode>, I>>(
    object: I,
  ): CShaderSendShaderRequest_ShaderCode {
    const message = createBaseCShaderSendShaderRequest_ShaderCode();
    message.shaderCodeSha = object.shaderCodeSha ?? Buffer.alloc(0);
    message.shaderCode = object.shaderCode ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCShaderSendShaderResponse(): CShaderSendShaderResponse {
  return {};
}

export const CShaderSendShaderResponse = {
  encode(_: CShaderSendShaderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderSendShaderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderSendShaderResponse();
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

  fromJSON(_: any): CShaderSendShaderResponse {
    return {};
  },

  toJSON(_: CShaderSendShaderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderSendShaderResponse>, I>>(base?: I): CShaderSendShaderResponse {
    return CShaderSendShaderResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderSendShaderResponse>, I>>(_: I): CShaderSendShaderResponse {
    const message = createBaseCShaderSendShaderResponse();
    return message;
  },
};

function createBaseCShaderGetBucketManifestRequest(): CShaderGetBucketManifestRequest {
  return { appid: 0, gpuDesc: "", driverDesc: "" };
}

export const CShaderGetBucketManifestRequest = {
  encode(message: CShaderGetBucketManifestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gpuDesc !== "") {
      writer.uint32(18).string(message.gpuDesc);
    }
    if (message.driverDesc !== "") {
      writer.uint32(26).string(message.driverDesc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderGetBucketManifestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderGetBucketManifestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.gpuDesc = reader.string();
          break;
        case 3:
          message.driverDesc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderGetBucketManifestRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gpuDesc: isSet(object.gpuDesc) ? String(object.gpuDesc) : "",
      driverDesc: isSet(object.driverDesc) ? String(object.driverDesc) : "",
    };
  },

  toJSON(message: CShaderGetBucketManifestRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gpuDesc !== undefined && (obj.gpuDesc = message.gpuDesc);
    message.driverDesc !== undefined && (obj.driverDesc = message.driverDesc);
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderGetBucketManifestRequest>, I>>(base?: I): CShaderGetBucketManifestRequest {
    return CShaderGetBucketManifestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderGetBucketManifestRequest>, I>>(
    object: I,
  ): CShaderGetBucketManifestRequest {
    const message = createBaseCShaderGetBucketManifestRequest();
    message.appid = object.appid ?? 0;
    message.gpuDesc = object.gpuDesc ?? "";
    message.driverDesc = object.driverDesc ?? "";
    return message;
  },
};

function createBaseCShaderGetBucketManifestResponse(): CShaderGetBucketManifestResponse {
  return { manifestid: 0, depotsize: 0, bucketid: 0 };
}

export const CShaderGetBucketManifestResponse = {
  encode(message: CShaderGetBucketManifestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manifestid !== 0) {
      writer.uint32(8).uint64(message.manifestid);
    }
    if (message.depotsize !== 0) {
      writer.uint32(16).uint64(message.depotsize);
    }
    if (message.bucketid !== 0) {
      writer.uint32(24).uint64(message.bucketid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderGetBucketManifestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderGetBucketManifestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manifestid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.depotsize = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.bucketid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderGetBucketManifestResponse {
    return {
      manifestid: isSet(object.manifestid) ? Number(object.manifestid) : 0,
      depotsize: isSet(object.depotsize) ? Number(object.depotsize) : 0,
      bucketid: isSet(object.bucketid) ? Number(object.bucketid) : 0,
    };
  },

  toJSON(message: CShaderGetBucketManifestResponse): unknown {
    const obj: any = {};
    message.manifestid !== undefined && (obj.manifestid = Math.round(message.manifestid));
    message.depotsize !== undefined && (obj.depotsize = Math.round(message.depotsize));
    message.bucketid !== undefined && (obj.bucketid = Math.round(message.bucketid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderGetBucketManifestResponse>, I>>(
    base?: I,
  ): CShaderGetBucketManifestResponse {
    return CShaderGetBucketManifestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderGetBucketManifestResponse>, I>>(
    object: I,
  ): CShaderGetBucketManifestResponse {
    const message = createBaseCShaderGetBucketManifestResponse();
    message.manifestid = object.manifestid ?? 0;
    message.depotsize = object.depotsize ?? 0;
    message.bucketid = object.bucketid ?? 0;
    return message;
  },
};

function createBaseCShaderGetStaleBucketRequest(): CShaderGetStaleBucketRequest {
  return { gpuDesc: "", driverDesc: "" };
}

export const CShaderGetStaleBucketRequest = {
  encode(message: CShaderGetStaleBucketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuDesc !== "") {
      writer.uint32(10).string(message.gpuDesc);
    }
    if (message.driverDesc !== "") {
      writer.uint32(18).string(message.driverDesc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderGetStaleBucketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderGetStaleBucketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuDesc = reader.string();
          break;
        case 2:
          message.driverDesc = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderGetStaleBucketRequest {
    return {
      gpuDesc: isSet(object.gpuDesc) ? String(object.gpuDesc) : "",
      driverDesc: isSet(object.driverDesc) ? String(object.driverDesc) : "",
    };
  },

  toJSON(message: CShaderGetStaleBucketRequest): unknown {
    const obj: any = {};
    message.gpuDesc !== undefined && (obj.gpuDesc = message.gpuDesc);
    message.driverDesc !== undefined && (obj.driverDesc = message.driverDesc);
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderGetStaleBucketRequest>, I>>(base?: I): CShaderGetStaleBucketRequest {
    return CShaderGetStaleBucketRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderGetStaleBucketRequest>, I>>(object: I): CShaderGetStaleBucketRequest {
    const message = createBaseCShaderGetStaleBucketRequest();
    message.gpuDesc = object.gpuDesc ?? "";
    message.driverDesc = object.driverDesc ?? "";
    return message;
  },
};

function createBaseCShaderGetStaleBucketResponse(): CShaderGetStaleBucketResponse {
  return { bucketid: 0, appid: 0, manifestid: 0, gpuDesc: "", driverDesc: "", depotEncryptionKey: Buffer.alloc(0) };
}

export const CShaderGetStaleBucketResponse = {
  encode(message: CShaderGetStaleBucketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bucketid !== 0) {
      writer.uint32(8).uint64(message.bucketid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.manifestid !== 0) {
      writer.uint32(24).uint64(message.manifestid);
    }
    if (message.gpuDesc !== "") {
      writer.uint32(34).string(message.gpuDesc);
    }
    if (message.driverDesc !== "") {
      writer.uint32(42).string(message.driverDesc);
    }
    if (message.depotEncryptionKey.length !== 0) {
      writer.uint32(50).bytes(message.depotEncryptionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderGetStaleBucketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderGetStaleBucketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bucketid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.manifestid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.gpuDesc = reader.string();
          break;
        case 5:
          message.driverDesc = reader.string();
          break;
        case 6:
          message.depotEncryptionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderGetStaleBucketResponse {
    return {
      bucketid: isSet(object.bucketid) ? Number(object.bucketid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      manifestid: isSet(object.manifestid) ? Number(object.manifestid) : 0,
      gpuDesc: isSet(object.gpuDesc) ? String(object.gpuDesc) : "",
      driverDesc: isSet(object.driverDesc) ? String(object.driverDesc) : "",
      depotEncryptionKey: isSet(object.depotEncryptionKey)
        ? Buffer.from(bytesFromBase64(object.depotEncryptionKey))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CShaderGetStaleBucketResponse): unknown {
    const obj: any = {};
    message.bucketid !== undefined && (obj.bucketid = Math.round(message.bucketid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.manifestid !== undefined && (obj.manifestid = Math.round(message.manifestid));
    message.gpuDesc !== undefined && (obj.gpuDesc = message.gpuDesc);
    message.driverDesc !== undefined && (obj.driverDesc = message.driverDesc);
    message.depotEncryptionKey !== undefined &&
      (obj.depotEncryptionKey = base64FromBytes(
        message.depotEncryptionKey !== undefined ? message.depotEncryptionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderGetStaleBucketResponse>, I>>(base?: I): CShaderGetStaleBucketResponse {
    return CShaderGetStaleBucketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderGetStaleBucketResponse>, I>>(
    object: I,
  ): CShaderGetStaleBucketResponse {
    const message = createBaseCShaderGetStaleBucketResponse();
    message.bucketid = object.bucketid ?? 0;
    message.appid = object.appid ?? 0;
    message.manifestid = object.manifestid ?? 0;
    message.gpuDesc = object.gpuDesc ?? "";
    message.driverDesc = object.driverDesc ?? "";
    message.depotEncryptionKey = object.depotEncryptionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCShaderReportExternalBuildRequest(): CShaderReportExternalBuildRequest {
  return {
    appid: 0,
    gpuDesc: "",
    driverDesc: "",
    manifestid: 0,
    sourceGpuDesc: "",
    sourceDriverDesc: "",
    depotsize: 0,
  };
}

export const CShaderReportExternalBuildRequest = {
  encode(message: CShaderReportExternalBuildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gpuDesc !== "") {
      writer.uint32(18).string(message.gpuDesc);
    }
    if (message.driverDesc !== "") {
      writer.uint32(26).string(message.driverDesc);
    }
    if (message.manifestid !== 0) {
      writer.uint32(32).uint64(message.manifestid);
    }
    if (message.sourceGpuDesc !== "") {
      writer.uint32(42).string(message.sourceGpuDesc);
    }
    if (message.sourceDriverDesc !== "") {
      writer.uint32(50).string(message.sourceDriverDesc);
    }
    if (message.depotsize !== 0) {
      writer.uint32(56).uint64(message.depotsize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderReportExternalBuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderReportExternalBuildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.gpuDesc = reader.string();
          break;
        case 3:
          message.driverDesc = reader.string();
          break;
        case 4:
          message.manifestid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sourceGpuDesc = reader.string();
          break;
        case 6:
          message.sourceDriverDesc = reader.string();
          break;
        case 7:
          message.depotsize = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShaderReportExternalBuildRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gpuDesc: isSet(object.gpuDesc) ? String(object.gpuDesc) : "",
      driverDesc: isSet(object.driverDesc) ? String(object.driverDesc) : "",
      manifestid: isSet(object.manifestid) ? Number(object.manifestid) : 0,
      sourceGpuDesc: isSet(object.sourceGpuDesc) ? String(object.sourceGpuDesc) : "",
      sourceDriverDesc: isSet(object.sourceDriverDesc) ? String(object.sourceDriverDesc) : "",
      depotsize: isSet(object.depotsize) ? Number(object.depotsize) : 0,
    };
  },

  toJSON(message: CShaderReportExternalBuildRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gpuDesc !== undefined && (obj.gpuDesc = message.gpuDesc);
    message.driverDesc !== undefined && (obj.driverDesc = message.driverDesc);
    message.manifestid !== undefined && (obj.manifestid = Math.round(message.manifestid));
    message.sourceGpuDesc !== undefined && (obj.sourceGpuDesc = message.sourceGpuDesc);
    message.sourceDriverDesc !== undefined && (obj.sourceDriverDesc = message.sourceDriverDesc);
    message.depotsize !== undefined && (obj.depotsize = Math.round(message.depotsize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderReportExternalBuildRequest>, I>>(
    base?: I,
  ): CShaderReportExternalBuildRequest {
    return CShaderReportExternalBuildRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderReportExternalBuildRequest>, I>>(
    object: I,
  ): CShaderReportExternalBuildRequest {
    const message = createBaseCShaderReportExternalBuildRequest();
    message.appid = object.appid ?? 0;
    message.gpuDesc = object.gpuDesc ?? "";
    message.driverDesc = object.driverDesc ?? "";
    message.manifestid = object.manifestid ?? 0;
    message.sourceGpuDesc = object.sourceGpuDesc ?? "";
    message.sourceDriverDesc = object.sourceDriverDesc ?? "";
    message.depotsize = object.depotsize ?? 0;
    return message;
  },
};

function createBaseCShaderReportExternalBuildResponse(): CShaderReportExternalBuildResponse {
  return {};
}

export const CShaderReportExternalBuildResponse = {
  encode(_: CShaderReportExternalBuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShaderReportExternalBuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShaderReportExternalBuildResponse();
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

  fromJSON(_: any): CShaderReportExternalBuildResponse {
    return {};
  },

  toJSON(_: CShaderReportExternalBuildResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CShaderReportExternalBuildResponse>, I>>(
    base?: I,
  ): CShaderReportExternalBuildResponse {
    return CShaderReportExternalBuildResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShaderReportExternalBuildResponse>, I>>(
    _: I,
  ): CShaderReportExternalBuildResponse {
    const message = createBaseCShaderReportExternalBuildResponse();
    return message;
  },
};

export interface Shader {
  RegisterShader(request: CShaderRegisterShaderRequest): Promise<CShaderRegisterShaderResponse>;
  SendShader(request: CShaderSendShaderRequest): Promise<CShaderSendShaderResponse>;
  GetBucketManifest(request: CShaderGetBucketManifestRequest): Promise<CShaderGetBucketManifestResponse>;
  GetStaleBucket(request: CShaderGetStaleBucketRequest): Promise<CShaderGetStaleBucketResponse>;
  ReportExternalBuild(request: CShaderReportExternalBuildRequest): Promise<CShaderReportExternalBuildResponse>;
}

export class ShaderClientImpl implements Shader {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Shader";
    this.rpc = rpc;
    this.RegisterShader = this.RegisterShader.bind(this);
    this.SendShader = this.SendShader.bind(this);
    this.GetBucketManifest = this.GetBucketManifest.bind(this);
    this.GetStaleBucket = this.GetStaleBucket.bind(this);
    this.ReportExternalBuild = this.ReportExternalBuild.bind(this);
  }
  RegisterShader(request: CShaderRegisterShaderRequest): Promise<CShaderRegisterShaderResponse> {
    const data = CShaderRegisterShaderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterShader", data);
    return promise.then((data) => CShaderRegisterShaderResponse.decode(new _m0.Reader(data)));
  }

  SendShader(request: CShaderSendShaderRequest): Promise<CShaderSendShaderResponse> {
    const data = CShaderSendShaderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendShader", data);
    return promise.then((data) => CShaderSendShaderResponse.decode(new _m0.Reader(data)));
  }

  GetBucketManifest(request: CShaderGetBucketManifestRequest): Promise<CShaderGetBucketManifestResponse> {
    const data = CShaderGetBucketManifestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBucketManifest", data);
    return promise.then((data) => CShaderGetBucketManifestResponse.decode(new _m0.Reader(data)));
  }

  GetStaleBucket(request: CShaderGetStaleBucketRequest): Promise<CShaderGetStaleBucketResponse> {
    const data = CShaderGetStaleBucketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStaleBucket", data);
    return promise.then((data) => CShaderGetStaleBucketResponse.decode(new _m0.Reader(data)));
  }

  ReportExternalBuild(request: CShaderReportExternalBuildRequest): Promise<CShaderReportExternalBuildResponse> {
    const data = CShaderReportExternalBuildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportExternalBuild", data);
    return promise.then((data) => CShaderReportExternalBuildResponse.decode(new _m0.Reader(data)));
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
