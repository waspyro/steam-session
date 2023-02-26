/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CContentBuilderInitDepotBuildRequest {
  appid: number;
  depotid: number;
  workshopItemid: string;
  forLocalCs: boolean;
  targetBranch: string;
}

export interface CContentBuilderInitDepotBuildResponse {
  baselineManifestid: string;
  chunkSize: number;
  aesKey: Buffer;
  rsaKey: Buffer;
  urlHost: string;
  offsetDetectionEnabled: boolean;
  offsetDetectionMinCleanChunk: number;
  offsetDetectionBlastRadiusPre: number;
  offsetDetectionBlastRadiusPost: number;
  offsetDetectionMaxDistancePre: number;
  offsetDetectionMaxDistancePost: number;
}

export interface CContentBuilderStartDepotUploadRequest {
  appid: number;
  depotid: number;
  workshopItemid: string;
  forLocalCs: boolean;
  baselineManifestid: string;
  manifestSize: number;
}

export interface CContentBuilderStartDepotUploadResponse {
  depotBuildHandle: string;
}

export interface CContentBuilderGetMissingDepotChunksRequest {
  appid: number;
  depotBuildHandle: string;
}

export interface CContentBuilderGetMissingDepotChunksResponse {
  missingChunks: CContentBuilderGetMissingDepotChunksResponse_Chunks[];
  totalMissingChunks: number;
  totalMissingBytes: string;
}

export interface CContentBuilderGetMissingDepotChunksResponse_Chunks {
  sha: Buffer;
}

export interface CContentBuilderFinishDepotUploadRequest {
  appid: number;
  depotBuildHandle: string;
}

export interface CContentBuilderFinishDepotUploadResponse {
  manifestid: string;
  prevReused: boolean;
}

export interface CContentBuilderCommitAppBuildRequest {
  appid: number;
  depotManifests: CContentBuilderCommitAppBuildRequest_Depots[];
  buildNotes: string;
  liveBranch: string;
}

export interface CContentBuilderCommitAppBuildRequest_Depots {
  depotid: number;
  manifestid: string;
}

export interface CContentBuilderCommitAppBuildResponse {
  buildid: number;
}

export interface CContentBuilderSignInstallScriptRequest {
  appid: number;
  depotid: number;
  installScript: string;
}

export interface CContentBuilderSignInstallScriptResponse {
  signedInstallScript: string;
}

function createBaseCContentBuilderInitDepotBuildRequest(): CContentBuilderInitDepotBuildRequest {
  return { appid: 0, depotid: 0, workshopItemid: "0", forLocalCs: false, targetBranch: "" };
}

export const CContentBuilderInitDepotBuildRequest = {
  encode(message: CContentBuilderInitDepotBuildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.workshopItemid !== "0") {
      writer.uint32(24).uint64(message.workshopItemid);
    }
    if (message.forLocalCs === true) {
      writer.uint32(32).bool(message.forLocalCs);
    }
    if (message.targetBranch !== "") {
      writer.uint32(42).string(message.targetBranch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderInitDepotBuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderInitDepotBuildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotid = reader.uint32();
          break;
        case 3:
          message.workshopItemid = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.forLocalCs = reader.bool();
          break;
        case 5:
          message.targetBranch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderInitDepotBuildRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      workshopItemid: isSet(object.workshopItemid) ? String(object.workshopItemid) : "0",
      forLocalCs: isSet(object.forLocalCs) ? Boolean(object.forLocalCs) : false,
      targetBranch: isSet(object.targetBranch) ? String(object.targetBranch) : "",
    };
  },

  toJSON(message: CContentBuilderInitDepotBuildRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.workshopItemid !== undefined && (obj.workshopItemid = message.workshopItemid);
    message.forLocalCs !== undefined && (obj.forLocalCs = message.forLocalCs);
    message.targetBranch !== undefined && (obj.targetBranch = message.targetBranch);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderInitDepotBuildRequest>, I>>(
    base?: I,
  ): CContentBuilderInitDepotBuildRequest {
    return CContentBuilderInitDepotBuildRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderInitDepotBuildRequest>, I>>(
    object: I,
  ): CContentBuilderInitDepotBuildRequest {
    const message = createBaseCContentBuilderInitDepotBuildRequest();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.workshopItemid = object.workshopItemid ?? "0";
    message.forLocalCs = object.forLocalCs ?? false;
    message.targetBranch = object.targetBranch ?? "";
    return message;
  },
};

function createBaseCContentBuilderInitDepotBuildResponse(): CContentBuilderInitDepotBuildResponse {
  return {
    baselineManifestid: "0",
    chunkSize: 0,
    aesKey: Buffer.alloc(0),
    rsaKey: Buffer.alloc(0),
    urlHost: "",
    offsetDetectionEnabled: false,
    offsetDetectionMinCleanChunk: 0,
    offsetDetectionBlastRadiusPre: 0,
    offsetDetectionBlastRadiusPost: 0,
    offsetDetectionMaxDistancePre: 0,
    offsetDetectionMaxDistancePost: 0,
  };
}

export const CContentBuilderInitDepotBuildResponse = {
  encode(message: CContentBuilderInitDepotBuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baselineManifestid !== "0") {
      writer.uint32(8).uint64(message.baselineManifestid);
    }
    if (message.chunkSize !== 0) {
      writer.uint32(16).uint32(message.chunkSize);
    }
    if (message.aesKey.length !== 0) {
      writer.uint32(26).bytes(message.aesKey);
    }
    if (message.rsaKey.length !== 0) {
      writer.uint32(34).bytes(message.rsaKey);
    }
    if (message.urlHost !== "") {
      writer.uint32(42).string(message.urlHost);
    }
    if (message.offsetDetectionEnabled === true) {
      writer.uint32(48).bool(message.offsetDetectionEnabled);
    }
    if (message.offsetDetectionMinCleanChunk !== 0) {
      writer.uint32(56).uint32(message.offsetDetectionMinCleanChunk);
    }
    if (message.offsetDetectionBlastRadiusPre !== 0) {
      writer.uint32(64).uint32(message.offsetDetectionBlastRadiusPre);
    }
    if (message.offsetDetectionBlastRadiusPost !== 0) {
      writer.uint32(72).uint32(message.offsetDetectionBlastRadiusPost);
    }
    if (message.offsetDetectionMaxDistancePre !== 0) {
      writer.uint32(80).uint32(message.offsetDetectionMaxDistancePre);
    }
    if (message.offsetDetectionMaxDistancePost !== 0) {
      writer.uint32(88).uint32(message.offsetDetectionMaxDistancePost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderInitDepotBuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderInitDepotBuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baselineManifestid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.chunkSize = reader.uint32();
          break;
        case 3:
          message.aesKey = reader.bytes() as Buffer;
          break;
        case 4:
          message.rsaKey = reader.bytes() as Buffer;
          break;
        case 5:
          message.urlHost = reader.string();
          break;
        case 6:
          message.offsetDetectionEnabled = reader.bool();
          break;
        case 7:
          message.offsetDetectionMinCleanChunk = reader.uint32();
          break;
        case 8:
          message.offsetDetectionBlastRadiusPre = reader.uint32();
          break;
        case 9:
          message.offsetDetectionBlastRadiusPost = reader.uint32();
          break;
        case 10:
          message.offsetDetectionMaxDistancePre = reader.uint32();
          break;
        case 11:
          message.offsetDetectionMaxDistancePost = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderInitDepotBuildResponse {
    return {
      baselineManifestid: isSet(object.baselineManifestid) ? String(object.baselineManifestid) : "0",
      chunkSize: isSet(object.chunkSize) ? Number(object.chunkSize) : 0,
      aesKey: isSet(object.aesKey) ? Buffer.from(bytesFromBase64(object.aesKey)) : Buffer.alloc(0),
      rsaKey: isSet(object.rsaKey) ? Buffer.from(bytesFromBase64(object.rsaKey)) : Buffer.alloc(0),
      urlHost: isSet(object.urlHost) ? String(object.urlHost) : "",
      offsetDetectionEnabled: isSet(object.offsetDetectionEnabled) ? Boolean(object.offsetDetectionEnabled) : false,
      offsetDetectionMinCleanChunk: isSet(object.offsetDetectionMinCleanChunk)
        ? Number(object.offsetDetectionMinCleanChunk)
        : 0,
      offsetDetectionBlastRadiusPre: isSet(object.offsetDetectionBlastRadiusPre)
        ? Number(object.offsetDetectionBlastRadiusPre)
        : 0,
      offsetDetectionBlastRadiusPost: isSet(object.offsetDetectionBlastRadiusPost)
        ? Number(object.offsetDetectionBlastRadiusPost)
        : 0,
      offsetDetectionMaxDistancePre: isSet(object.offsetDetectionMaxDistancePre)
        ? Number(object.offsetDetectionMaxDistancePre)
        : 0,
      offsetDetectionMaxDistancePost: isSet(object.offsetDetectionMaxDistancePost)
        ? Number(object.offsetDetectionMaxDistancePost)
        : 0,
    };
  },

  toJSON(message: CContentBuilderInitDepotBuildResponse): unknown {
    const obj: any = {};
    message.baselineManifestid !== undefined && (obj.baselineManifestid = message.baselineManifestid);
    message.chunkSize !== undefined && (obj.chunkSize = Math.round(message.chunkSize));
    message.aesKey !== undefined &&
      (obj.aesKey = base64FromBytes(message.aesKey !== undefined ? message.aesKey : Buffer.alloc(0)));
    message.rsaKey !== undefined &&
      (obj.rsaKey = base64FromBytes(message.rsaKey !== undefined ? message.rsaKey : Buffer.alloc(0)));
    message.urlHost !== undefined && (obj.urlHost = message.urlHost);
    message.offsetDetectionEnabled !== undefined && (obj.offsetDetectionEnabled = message.offsetDetectionEnabled);
    message.offsetDetectionMinCleanChunk !== undefined &&
      (obj.offsetDetectionMinCleanChunk = Math.round(message.offsetDetectionMinCleanChunk));
    message.offsetDetectionBlastRadiusPre !== undefined &&
      (obj.offsetDetectionBlastRadiusPre = Math.round(message.offsetDetectionBlastRadiusPre));
    message.offsetDetectionBlastRadiusPost !== undefined &&
      (obj.offsetDetectionBlastRadiusPost = Math.round(message.offsetDetectionBlastRadiusPost));
    message.offsetDetectionMaxDistancePre !== undefined &&
      (obj.offsetDetectionMaxDistancePre = Math.round(message.offsetDetectionMaxDistancePre));
    message.offsetDetectionMaxDistancePost !== undefined &&
      (obj.offsetDetectionMaxDistancePost = Math.round(message.offsetDetectionMaxDistancePost));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderInitDepotBuildResponse>, I>>(
    base?: I,
  ): CContentBuilderInitDepotBuildResponse {
    return CContentBuilderInitDepotBuildResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderInitDepotBuildResponse>, I>>(
    object: I,
  ): CContentBuilderInitDepotBuildResponse {
    const message = createBaseCContentBuilderInitDepotBuildResponse();
    message.baselineManifestid = object.baselineManifestid ?? "0";
    message.chunkSize = object.chunkSize ?? 0;
    message.aesKey = object.aesKey ?? Buffer.alloc(0);
    message.rsaKey = object.rsaKey ?? Buffer.alloc(0);
    message.urlHost = object.urlHost ?? "";
    message.offsetDetectionEnabled = object.offsetDetectionEnabled ?? false;
    message.offsetDetectionMinCleanChunk = object.offsetDetectionMinCleanChunk ?? 0;
    message.offsetDetectionBlastRadiusPre = object.offsetDetectionBlastRadiusPre ?? 0;
    message.offsetDetectionBlastRadiusPost = object.offsetDetectionBlastRadiusPost ?? 0;
    message.offsetDetectionMaxDistancePre = object.offsetDetectionMaxDistancePre ?? 0;
    message.offsetDetectionMaxDistancePost = object.offsetDetectionMaxDistancePost ?? 0;
    return message;
  },
};

function createBaseCContentBuilderStartDepotUploadRequest(): CContentBuilderStartDepotUploadRequest {
  return { appid: 0, depotid: 0, workshopItemid: "0", forLocalCs: false, baselineManifestid: "0", manifestSize: 0 };
}

export const CContentBuilderStartDepotUploadRequest = {
  encode(message: CContentBuilderStartDepotUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.workshopItemid !== "0") {
      writer.uint32(24).uint64(message.workshopItemid);
    }
    if (message.forLocalCs === true) {
      writer.uint32(32).bool(message.forLocalCs);
    }
    if (message.baselineManifestid !== "0") {
      writer.uint32(40).uint64(message.baselineManifestid);
    }
    if (message.manifestSize !== 0) {
      writer.uint32(48).uint32(message.manifestSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderStartDepotUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderStartDepotUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotid = reader.uint32();
          break;
        case 3:
          message.workshopItemid = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.forLocalCs = reader.bool();
          break;
        case 5:
          message.baselineManifestid = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.manifestSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderStartDepotUploadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      workshopItemid: isSet(object.workshopItemid) ? String(object.workshopItemid) : "0",
      forLocalCs: isSet(object.forLocalCs) ? Boolean(object.forLocalCs) : false,
      baselineManifestid: isSet(object.baselineManifestid) ? String(object.baselineManifestid) : "0",
      manifestSize: isSet(object.manifestSize) ? Number(object.manifestSize) : 0,
    };
  },

  toJSON(message: CContentBuilderStartDepotUploadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.workshopItemid !== undefined && (obj.workshopItemid = message.workshopItemid);
    message.forLocalCs !== undefined && (obj.forLocalCs = message.forLocalCs);
    message.baselineManifestid !== undefined && (obj.baselineManifestid = message.baselineManifestid);
    message.manifestSize !== undefined && (obj.manifestSize = Math.round(message.manifestSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderStartDepotUploadRequest>, I>>(
    base?: I,
  ): CContentBuilderStartDepotUploadRequest {
    return CContentBuilderStartDepotUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderStartDepotUploadRequest>, I>>(
    object: I,
  ): CContentBuilderStartDepotUploadRequest {
    const message = createBaseCContentBuilderStartDepotUploadRequest();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.workshopItemid = object.workshopItemid ?? "0";
    message.forLocalCs = object.forLocalCs ?? false;
    message.baselineManifestid = object.baselineManifestid ?? "0";
    message.manifestSize = object.manifestSize ?? 0;
    return message;
  },
};

function createBaseCContentBuilderStartDepotUploadResponse(): CContentBuilderStartDepotUploadResponse {
  return { depotBuildHandle: "0" };
}

export const CContentBuilderStartDepotUploadResponse = {
  encode(message: CContentBuilderStartDepotUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotBuildHandle !== "0") {
      writer.uint32(8).uint64(message.depotBuildHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderStartDepotUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderStartDepotUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotBuildHandle = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderStartDepotUploadResponse {
    return { depotBuildHandle: isSet(object.depotBuildHandle) ? String(object.depotBuildHandle) : "0" };
  },

  toJSON(message: CContentBuilderStartDepotUploadResponse): unknown {
    const obj: any = {};
    message.depotBuildHandle !== undefined && (obj.depotBuildHandle = message.depotBuildHandle);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderStartDepotUploadResponse>, I>>(
    base?: I,
  ): CContentBuilderStartDepotUploadResponse {
    return CContentBuilderStartDepotUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderStartDepotUploadResponse>, I>>(
    object: I,
  ): CContentBuilderStartDepotUploadResponse {
    const message = createBaseCContentBuilderStartDepotUploadResponse();
    message.depotBuildHandle = object.depotBuildHandle ?? "0";
    return message;
  },
};

function createBaseCContentBuilderGetMissingDepotChunksRequest(): CContentBuilderGetMissingDepotChunksRequest {
  return { appid: 0, depotBuildHandle: "0" };
}

export const CContentBuilderGetMissingDepotChunksRequest = {
  encode(message: CContentBuilderGetMissingDepotChunksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotBuildHandle !== "0") {
      writer.uint32(16).uint64(message.depotBuildHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderGetMissingDepotChunksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderGetMissingDepotChunksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotBuildHandle = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderGetMissingDepotChunksRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotBuildHandle: isSet(object.depotBuildHandle) ? String(object.depotBuildHandle) : "0",
    };
  },

  toJSON(message: CContentBuilderGetMissingDepotChunksRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotBuildHandle !== undefined && (obj.depotBuildHandle = message.depotBuildHandle);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksRequest>, I>>(
    base?: I,
  ): CContentBuilderGetMissingDepotChunksRequest {
    return CContentBuilderGetMissingDepotChunksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksRequest>, I>>(
    object: I,
  ): CContentBuilderGetMissingDepotChunksRequest {
    const message = createBaseCContentBuilderGetMissingDepotChunksRequest();
    message.appid = object.appid ?? 0;
    message.depotBuildHandle = object.depotBuildHandle ?? "0";
    return message;
  },
};

function createBaseCContentBuilderGetMissingDepotChunksResponse(): CContentBuilderGetMissingDepotChunksResponse {
  return { missingChunks: [], totalMissingChunks: 0, totalMissingBytes: "0" };
}

export const CContentBuilderGetMissingDepotChunksResponse = {
  encode(message: CContentBuilderGetMissingDepotChunksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.missingChunks) {
      CContentBuilderGetMissingDepotChunksResponse_Chunks.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalMissingChunks !== 0) {
      writer.uint32(16).uint32(message.totalMissingChunks);
    }
    if (message.totalMissingBytes !== "0") {
      writer.uint32(24).uint64(message.totalMissingBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderGetMissingDepotChunksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderGetMissingDepotChunksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missingChunks.push(
            CContentBuilderGetMissingDepotChunksResponse_Chunks.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.totalMissingChunks = reader.uint32();
          break;
        case 3:
          message.totalMissingBytes = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderGetMissingDepotChunksResponse {
    return {
      missingChunks: Array.isArray(object?.missingChunks)
        ? object.missingChunks.map((e: any) => CContentBuilderGetMissingDepotChunksResponse_Chunks.fromJSON(e))
        : [],
      totalMissingChunks: isSet(object.totalMissingChunks) ? Number(object.totalMissingChunks) : 0,
      totalMissingBytes: isSet(object.totalMissingBytes) ? String(object.totalMissingBytes) : "0",
    };
  },

  toJSON(message: CContentBuilderGetMissingDepotChunksResponse): unknown {
    const obj: any = {};
    if (message.missingChunks) {
      obj.missingChunks = message.missingChunks.map((e) =>
        e ? CContentBuilderGetMissingDepotChunksResponse_Chunks.toJSON(e) : undefined
      );
    } else {
      obj.missingChunks = [];
    }
    message.totalMissingChunks !== undefined && (obj.totalMissingChunks = Math.round(message.totalMissingChunks));
    message.totalMissingBytes !== undefined && (obj.totalMissingBytes = message.totalMissingBytes);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksResponse>, I>>(
    base?: I,
  ): CContentBuilderGetMissingDepotChunksResponse {
    return CContentBuilderGetMissingDepotChunksResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksResponse>, I>>(
    object: I,
  ): CContentBuilderGetMissingDepotChunksResponse {
    const message = createBaseCContentBuilderGetMissingDepotChunksResponse();
    message.missingChunks =
      object.missingChunks?.map((e) => CContentBuilderGetMissingDepotChunksResponse_Chunks.fromPartial(e)) || [];
    message.totalMissingChunks = object.totalMissingChunks ?? 0;
    message.totalMissingBytes = object.totalMissingBytes ?? "0";
    return message;
  },
};

function createBaseCContentBuilderGetMissingDepotChunksResponse_Chunks(): CContentBuilderGetMissingDepotChunksResponse_Chunks {
  return { sha: Buffer.alloc(0) };
}

export const CContentBuilderGetMissingDepotChunksResponse_Chunks = {
  encode(
    message: CContentBuilderGetMissingDepotChunksResponse_Chunks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sha.length !== 0) {
      writer.uint32(10).bytes(message.sha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderGetMissingDepotChunksResponse_Chunks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderGetMissingDepotChunksResponse_Chunks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sha = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderGetMissingDepotChunksResponse_Chunks {
    return { sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0) };
  },

  toJSON(message: CContentBuilderGetMissingDepotChunksResponse_Chunks): unknown {
    const obj: any = {};
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksResponse_Chunks>, I>>(
    base?: I,
  ): CContentBuilderGetMissingDepotChunksResponse_Chunks {
    return CContentBuilderGetMissingDepotChunksResponse_Chunks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderGetMissingDepotChunksResponse_Chunks>, I>>(
    object: I,
  ): CContentBuilderGetMissingDepotChunksResponse_Chunks {
    const message = createBaseCContentBuilderGetMissingDepotChunksResponse_Chunks();
    message.sha = object.sha ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCContentBuilderFinishDepotUploadRequest(): CContentBuilderFinishDepotUploadRequest {
  return { appid: 0, depotBuildHandle: "0" };
}

export const CContentBuilderFinishDepotUploadRequest = {
  encode(message: CContentBuilderFinishDepotUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotBuildHandle !== "0") {
      writer.uint32(16).uint64(message.depotBuildHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderFinishDepotUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderFinishDepotUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotBuildHandle = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderFinishDepotUploadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotBuildHandle: isSet(object.depotBuildHandle) ? String(object.depotBuildHandle) : "0",
    };
  },

  toJSON(message: CContentBuilderFinishDepotUploadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotBuildHandle !== undefined && (obj.depotBuildHandle = message.depotBuildHandle);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderFinishDepotUploadRequest>, I>>(
    base?: I,
  ): CContentBuilderFinishDepotUploadRequest {
    return CContentBuilderFinishDepotUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderFinishDepotUploadRequest>, I>>(
    object: I,
  ): CContentBuilderFinishDepotUploadRequest {
    const message = createBaseCContentBuilderFinishDepotUploadRequest();
    message.appid = object.appid ?? 0;
    message.depotBuildHandle = object.depotBuildHandle ?? "0";
    return message;
  },
};

function createBaseCContentBuilderFinishDepotUploadResponse(): CContentBuilderFinishDepotUploadResponse {
  return { manifestid: "0", prevReused: false };
}

export const CContentBuilderFinishDepotUploadResponse = {
  encode(message: CContentBuilderFinishDepotUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manifestid !== "0") {
      writer.uint32(8).uint64(message.manifestid);
    }
    if (message.prevReused === true) {
      writer.uint32(16).bool(message.prevReused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderFinishDepotUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderFinishDepotUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manifestid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.prevReused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderFinishDepotUploadResponse {
    return {
      manifestid: isSet(object.manifestid) ? String(object.manifestid) : "0",
      prevReused: isSet(object.prevReused) ? Boolean(object.prevReused) : false,
    };
  },

  toJSON(message: CContentBuilderFinishDepotUploadResponse): unknown {
    const obj: any = {};
    message.manifestid !== undefined && (obj.manifestid = message.manifestid);
    message.prevReused !== undefined && (obj.prevReused = message.prevReused);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderFinishDepotUploadResponse>, I>>(
    base?: I,
  ): CContentBuilderFinishDepotUploadResponse {
    return CContentBuilderFinishDepotUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderFinishDepotUploadResponse>, I>>(
    object: I,
  ): CContentBuilderFinishDepotUploadResponse {
    const message = createBaseCContentBuilderFinishDepotUploadResponse();
    message.manifestid = object.manifestid ?? "0";
    message.prevReused = object.prevReused ?? false;
    return message;
  },
};

function createBaseCContentBuilderCommitAppBuildRequest(): CContentBuilderCommitAppBuildRequest {
  return { appid: 0, depotManifests: [], buildNotes: "", liveBranch: "" };
}

export const CContentBuilderCommitAppBuildRequest = {
  encode(message: CContentBuilderCommitAppBuildRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    for (const v of message.depotManifests) {
      CContentBuilderCommitAppBuildRequest_Depots.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.buildNotes !== "") {
      writer.uint32(34).string(message.buildNotes);
    }
    if (message.liveBranch !== "") {
      writer.uint32(42).string(message.liveBranch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderCommitAppBuildRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderCommitAppBuildRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotManifests.push(CContentBuilderCommitAppBuildRequest_Depots.decode(reader, reader.uint32()));
          break;
        case 4:
          message.buildNotes = reader.string();
          break;
        case 5:
          message.liveBranch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderCommitAppBuildRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotManifests: Array.isArray(object?.depotManifests)
        ? object.depotManifests.map((e: any) => CContentBuilderCommitAppBuildRequest_Depots.fromJSON(e))
        : [],
      buildNotes: isSet(object.buildNotes) ? String(object.buildNotes) : "",
      liveBranch: isSet(object.liveBranch) ? String(object.liveBranch) : "",
    };
  },

  toJSON(message: CContentBuilderCommitAppBuildRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.depotManifests) {
      obj.depotManifests = message.depotManifests.map((e) =>
        e ? CContentBuilderCommitAppBuildRequest_Depots.toJSON(e) : undefined
      );
    } else {
      obj.depotManifests = [];
    }
    message.buildNotes !== undefined && (obj.buildNotes = message.buildNotes);
    message.liveBranch !== undefined && (obj.liveBranch = message.liveBranch);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildRequest>, I>>(
    base?: I,
  ): CContentBuilderCommitAppBuildRequest {
    return CContentBuilderCommitAppBuildRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildRequest>, I>>(
    object: I,
  ): CContentBuilderCommitAppBuildRequest {
    const message = createBaseCContentBuilderCommitAppBuildRequest();
    message.appid = object.appid ?? 0;
    message.depotManifests =
      object.depotManifests?.map((e) => CContentBuilderCommitAppBuildRequest_Depots.fromPartial(e)) || [];
    message.buildNotes = object.buildNotes ?? "";
    message.liveBranch = object.liveBranch ?? "";
    return message;
  },
};

function createBaseCContentBuilderCommitAppBuildRequest_Depots(): CContentBuilderCommitAppBuildRequest_Depots {
  return { depotid: 0, manifestid: "0" };
}

export const CContentBuilderCommitAppBuildRequest_Depots = {
  encode(message: CContentBuilderCommitAppBuildRequest_Depots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotid !== 0) {
      writer.uint32(8).uint32(message.depotid);
    }
    if (message.manifestid !== "0") {
      writer.uint32(16).uint64(message.manifestid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderCommitAppBuildRequest_Depots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderCommitAppBuildRequest_Depots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotid = reader.uint32();
          break;
        case 2:
          message.manifestid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderCommitAppBuildRequest_Depots {
    return {
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      manifestid: isSet(object.manifestid) ? String(object.manifestid) : "0",
    };
  },

  toJSON(message: CContentBuilderCommitAppBuildRequest_Depots): unknown {
    const obj: any = {};
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.manifestid !== undefined && (obj.manifestid = message.manifestid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildRequest_Depots>, I>>(
    base?: I,
  ): CContentBuilderCommitAppBuildRequest_Depots {
    return CContentBuilderCommitAppBuildRequest_Depots.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildRequest_Depots>, I>>(
    object: I,
  ): CContentBuilderCommitAppBuildRequest_Depots {
    const message = createBaseCContentBuilderCommitAppBuildRequest_Depots();
    message.depotid = object.depotid ?? 0;
    message.manifestid = object.manifestid ?? "0";
    return message;
  },
};

function createBaseCContentBuilderCommitAppBuildResponse(): CContentBuilderCommitAppBuildResponse {
  return { buildid: 0 };
}

export const CContentBuilderCommitAppBuildResponse = {
  encode(message: CContentBuilderCommitAppBuildResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buildid !== 0) {
      writer.uint32(8).uint32(message.buildid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderCommitAppBuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderCommitAppBuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderCommitAppBuildResponse {
    return { buildid: isSet(object.buildid) ? Number(object.buildid) : 0 };
  },

  toJSON(message: CContentBuilderCommitAppBuildResponse): unknown {
    const obj: any = {};
    message.buildid !== undefined && (obj.buildid = Math.round(message.buildid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildResponse>, I>>(
    base?: I,
  ): CContentBuilderCommitAppBuildResponse {
    return CContentBuilderCommitAppBuildResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderCommitAppBuildResponse>, I>>(
    object: I,
  ): CContentBuilderCommitAppBuildResponse {
    const message = createBaseCContentBuilderCommitAppBuildResponse();
    message.buildid = object.buildid ?? 0;
    return message;
  },
};

function createBaseCContentBuilderSignInstallScriptRequest(): CContentBuilderSignInstallScriptRequest {
  return { appid: 0, depotid: 0, installScript: "" };
}

export const CContentBuilderSignInstallScriptRequest = {
  encode(message: CContentBuilderSignInstallScriptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.installScript !== "") {
      writer.uint32(26).string(message.installScript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderSignInstallScriptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderSignInstallScriptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotid = reader.uint32();
          break;
        case 3:
          message.installScript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderSignInstallScriptRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      installScript: isSet(object.installScript) ? String(object.installScript) : "",
    };
  },

  toJSON(message: CContentBuilderSignInstallScriptRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.installScript !== undefined && (obj.installScript = message.installScript);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderSignInstallScriptRequest>, I>>(
    base?: I,
  ): CContentBuilderSignInstallScriptRequest {
    return CContentBuilderSignInstallScriptRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderSignInstallScriptRequest>, I>>(
    object: I,
  ): CContentBuilderSignInstallScriptRequest {
    const message = createBaseCContentBuilderSignInstallScriptRequest();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.installScript = object.installScript ?? "";
    return message;
  },
};

function createBaseCContentBuilderSignInstallScriptResponse(): CContentBuilderSignInstallScriptResponse {
  return { signedInstallScript: "" };
}

export const CContentBuilderSignInstallScriptResponse = {
  encode(message: CContentBuilderSignInstallScriptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedInstallScript !== "") {
      writer.uint32(10).string(message.signedInstallScript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentBuilderSignInstallScriptResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentBuilderSignInstallScriptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedInstallScript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentBuilderSignInstallScriptResponse {
    return { signedInstallScript: isSet(object.signedInstallScript) ? String(object.signedInstallScript) : "" };
  },

  toJSON(message: CContentBuilderSignInstallScriptResponse): unknown {
    const obj: any = {};
    message.signedInstallScript !== undefined && (obj.signedInstallScript = message.signedInstallScript);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentBuilderSignInstallScriptResponse>, I>>(
    base?: I,
  ): CContentBuilderSignInstallScriptResponse {
    return CContentBuilderSignInstallScriptResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentBuilderSignInstallScriptResponse>, I>>(
    object: I,
  ): CContentBuilderSignInstallScriptResponse {
    const message = createBaseCContentBuilderSignInstallScriptResponse();
    message.signedInstallScript = object.signedInstallScript ?? "";
    return message;
  },
};

export interface ContentBuilder {
  InitDepotBuild(request: CContentBuilderInitDepotBuildRequest): Promise<CContentBuilderInitDepotBuildResponse>;
  StartDepotUpload(request: CContentBuilderStartDepotUploadRequest): Promise<CContentBuilderStartDepotUploadResponse>;
  GetMissingDepotChunks(
    request: CContentBuilderGetMissingDepotChunksRequest,
  ): Promise<CContentBuilderGetMissingDepotChunksResponse>;
  FinishDepotUpload(
    request: CContentBuilderFinishDepotUploadRequest,
  ): Promise<CContentBuilderFinishDepotUploadResponse>;
  CommitAppBuild(request: CContentBuilderCommitAppBuildRequest): Promise<CContentBuilderCommitAppBuildResponse>;
  SignInstallScript(
    request: CContentBuilderSignInstallScriptRequest,
  ): Promise<CContentBuilderSignInstallScriptResponse>;
}

export class ContentBuilderClientImpl implements ContentBuilder {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ContentBuilder";
    this.rpc = rpc;
    this.InitDepotBuild = this.InitDepotBuild.bind(this);
    this.StartDepotUpload = this.StartDepotUpload.bind(this);
    this.GetMissingDepotChunks = this.GetMissingDepotChunks.bind(this);
    this.FinishDepotUpload = this.FinishDepotUpload.bind(this);
    this.CommitAppBuild = this.CommitAppBuild.bind(this);
    this.SignInstallScript = this.SignInstallScript.bind(this);
  }
  InitDepotBuild(request: CContentBuilderInitDepotBuildRequest): Promise<CContentBuilderInitDepotBuildResponse> {
    const data = CContentBuilderInitDepotBuildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitDepotBuild", data);
    return promise.then((data) => CContentBuilderInitDepotBuildResponse.decode(new _m0.Reader(data)));
  }

  StartDepotUpload(request: CContentBuilderStartDepotUploadRequest): Promise<CContentBuilderStartDepotUploadResponse> {
    const data = CContentBuilderStartDepotUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartDepotUpload", data);
    return promise.then((data) => CContentBuilderStartDepotUploadResponse.decode(new _m0.Reader(data)));
  }

  GetMissingDepotChunks(
    request: CContentBuilderGetMissingDepotChunksRequest,
  ): Promise<CContentBuilderGetMissingDepotChunksResponse> {
    const data = CContentBuilderGetMissingDepotChunksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMissingDepotChunks", data);
    return promise.then((data) => CContentBuilderGetMissingDepotChunksResponse.decode(new _m0.Reader(data)));
  }

  FinishDepotUpload(
    request: CContentBuilderFinishDepotUploadRequest,
  ): Promise<CContentBuilderFinishDepotUploadResponse> {
    const data = CContentBuilderFinishDepotUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishDepotUpload", data);
    return promise.then((data) => CContentBuilderFinishDepotUploadResponse.decode(new _m0.Reader(data)));
  }

  CommitAppBuild(request: CContentBuilderCommitAppBuildRequest): Promise<CContentBuilderCommitAppBuildResponse> {
    const data = CContentBuilderCommitAppBuildRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommitAppBuild", data);
    return promise.then((data) => CContentBuilderCommitAppBuildResponse.decode(new _m0.Reader(data)));
  }

  SignInstallScript(
    request: CContentBuilderSignInstallScriptRequest,
  ): Promise<CContentBuilderSignInstallScriptResponse> {
    const data = CContentBuilderSignInstallScriptRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignInstallScript", data);
    return promise.then((data) => CContentBuilderSignInstallScriptResponse.decode(new _m0.Reader(data)));
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
