/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EContentDeltaChunkDataLocation {
  k_EContentDeltaChunkDataLocationInProtobuf = 0,
  k_EContentDeltaChunkDataLocationAfterProtobuf = 1,
  UNRECOGNIZED = -1,
}

export function eContentDeltaChunkDataLocationFromJSON(object: any): EContentDeltaChunkDataLocation {
  switch (object) {
    case 0:
    case "k_EContentDeltaChunkDataLocationInProtobuf":
      return EContentDeltaChunkDataLocation.k_EContentDeltaChunkDataLocationInProtobuf;
    case 1:
    case "k_EContentDeltaChunkDataLocationAfterProtobuf":
      return EContentDeltaChunkDataLocation.k_EContentDeltaChunkDataLocationAfterProtobuf;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EContentDeltaChunkDataLocation.UNRECOGNIZED;
  }
}

export function eContentDeltaChunkDataLocationToJSON(object: EContentDeltaChunkDataLocation): string {
  switch (object) {
    case EContentDeltaChunkDataLocation.k_EContentDeltaChunkDataLocationInProtobuf:
      return "k_EContentDeltaChunkDataLocationInProtobuf";
    case EContentDeltaChunkDataLocation.k_EContentDeltaChunkDataLocationAfterProtobuf:
      return "k_EContentDeltaChunkDataLocationAfterProtobuf";
    case EContentDeltaChunkDataLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ContentManifestPayload {
  mappings: ContentManifestPayload_FileMapping[];
}

export interface ContentManifestPayload_FileMapping {
  filename: string;
  size: string;
  flags: number;
  shaFilename: Buffer;
  shaContent: Buffer;
  chunks: ContentManifestPayload_FileMapping_ChunkData[];
  linktarget: string;
}

export interface ContentManifestPayload_FileMapping_ChunkData {
  sha: Buffer;
  crc: number;
  offset: string;
  cbOriginal: number;
  cbCompressed: number;
}

export interface ContentManifestMetadata {
  depotId: number;
  gidManifest: string;
  creationTime: number;
  filenamesEncrypted: boolean;
  cbDiskOriginal: string;
  cbDiskCompressed: string;
  uniqueChunks: number;
  crcEncrypted: number;
  crcClear: number;
}

export interface ContentManifestSignature {
  signature: Buffer;
}

export interface ContentDeltaChunks {
  depotId: number;
  manifestIdSource: string;
  manifestIdTarget: string;
  deltaChunks: ContentDeltaChunks_DeltaChunk[];
  chunkDataLocation: EContentDeltaChunkDataLocation;
}

export interface ContentDeltaChunks_DeltaChunk {
  shaSource: Buffer;
  shaTarget: Buffer;
  sizeOriginal: number;
  patchMethod: number;
  chunk: Buffer;
  sizeDelta: number;
}

function createBaseContentManifestPayload(): ContentManifestPayload {
  return { mappings: [] };
}

export const ContentManifestPayload = {
  encode(message: ContentManifestPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mappings) {
      ContentManifestPayload_FileMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentManifestPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentManifestPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mappings.push(ContentManifestPayload_FileMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentManifestPayload {
    return {
      mappings: Array.isArray(object?.mappings)
        ? object.mappings.map((e: any) => ContentManifestPayload_FileMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContentManifestPayload): unknown {
    const obj: any = {};
    if (message.mappings) {
      obj.mappings = message.mappings.map((e) => e ? ContentManifestPayload_FileMapping.toJSON(e) : undefined);
    } else {
      obj.mappings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentManifestPayload>, I>>(base?: I): ContentManifestPayload {
    return ContentManifestPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentManifestPayload>, I>>(object: I): ContentManifestPayload {
    const message = createBaseContentManifestPayload();
    message.mappings = object.mappings?.map((e) => ContentManifestPayload_FileMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContentManifestPayload_FileMapping(): ContentManifestPayload_FileMapping {
  return {
    filename: "",
    size: "0",
    flags: 0,
    shaFilename: Buffer.alloc(0),
    shaContent: Buffer.alloc(0),
    chunks: [],
    linktarget: "",
  };
}

export const ContentManifestPayload_FileMapping = {
  encode(message: ContentManifestPayload_FileMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.size !== "0") {
      writer.uint32(16).uint64(message.size);
    }
    if (message.flags !== 0) {
      writer.uint32(24).uint32(message.flags);
    }
    if (message.shaFilename.length !== 0) {
      writer.uint32(34).bytes(message.shaFilename);
    }
    if (message.shaContent.length !== 0) {
      writer.uint32(42).bytes(message.shaContent);
    }
    for (const v of message.chunks) {
      ContentManifestPayload_FileMapping_ChunkData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.linktarget !== "") {
      writer.uint32(58).string(message.linktarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentManifestPayload_FileMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentManifestPayload_FileMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.size = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.flags = reader.uint32();
          break;
        case 4:
          message.shaFilename = reader.bytes() as Buffer;
          break;
        case 5:
          message.shaContent = reader.bytes() as Buffer;
          break;
        case 6:
          message.chunks.push(ContentManifestPayload_FileMapping_ChunkData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.linktarget = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentManifestPayload_FileMapping {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      shaFilename: isSet(object.shaFilename) ? Buffer.from(bytesFromBase64(object.shaFilename)) : Buffer.alloc(0),
      shaContent: isSet(object.shaContent) ? Buffer.from(bytesFromBase64(object.shaContent)) : Buffer.alloc(0),
      chunks: Array.isArray(object?.chunks)
        ? object.chunks.map((e: any) => ContentManifestPayload_FileMapping_ChunkData.fromJSON(e))
        : [],
      linktarget: isSet(object.linktarget) ? String(object.linktarget) : "",
    };
  },

  toJSON(message: ContentManifestPayload_FileMapping): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.size !== undefined && (obj.size = message.size);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.shaFilename !== undefined &&
      (obj.shaFilename = base64FromBytes(message.shaFilename !== undefined ? message.shaFilename : Buffer.alloc(0)));
    message.shaContent !== undefined &&
      (obj.shaContent = base64FromBytes(message.shaContent !== undefined ? message.shaContent : Buffer.alloc(0)));
    if (message.chunks) {
      obj.chunks = message.chunks.map((e) => e ? ContentManifestPayload_FileMapping_ChunkData.toJSON(e) : undefined);
    } else {
      obj.chunks = [];
    }
    message.linktarget !== undefined && (obj.linktarget = message.linktarget);
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentManifestPayload_FileMapping>, I>>(
    base?: I,
  ): ContentManifestPayload_FileMapping {
    return ContentManifestPayload_FileMapping.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentManifestPayload_FileMapping>, I>>(
    object: I,
  ): ContentManifestPayload_FileMapping {
    const message = createBaseContentManifestPayload_FileMapping();
    message.filename = object.filename ?? "";
    message.size = object.size ?? "0";
    message.flags = object.flags ?? 0;
    message.shaFilename = object.shaFilename ?? Buffer.alloc(0);
    message.shaContent = object.shaContent ?? Buffer.alloc(0);
    message.chunks = object.chunks?.map((e) => ContentManifestPayload_FileMapping_ChunkData.fromPartial(e)) || [];
    message.linktarget = object.linktarget ?? "";
    return message;
  },
};

function createBaseContentManifestPayload_FileMapping_ChunkData(): ContentManifestPayload_FileMapping_ChunkData {
  return { sha: Buffer.alloc(0), crc: 0, offset: "0", cbOriginal: 0, cbCompressed: 0 };
}

export const ContentManifestPayload_FileMapping_ChunkData = {
  encode(message: ContentManifestPayload_FileMapping_ChunkData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sha.length !== 0) {
      writer.uint32(10).bytes(message.sha);
    }
    if (message.crc !== 0) {
      writer.uint32(21).fixed32(message.crc);
    }
    if (message.offset !== "0") {
      writer.uint32(24).uint64(message.offset);
    }
    if (message.cbOriginal !== 0) {
      writer.uint32(32).uint32(message.cbOriginal);
    }
    if (message.cbCompressed !== 0) {
      writer.uint32(40).uint32(message.cbCompressed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentManifestPayload_FileMapping_ChunkData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentManifestPayload_FileMapping_ChunkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sha = reader.bytes() as Buffer;
          break;
        case 2:
          message.crc = reader.fixed32();
          break;
        case 3:
          message.offset = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.cbOriginal = reader.uint32();
          break;
        case 5:
          message.cbCompressed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentManifestPayload_FileMapping_ChunkData {
    return {
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
      crc: isSet(object.crc) ? Number(object.crc) : 0,
      offset: isSet(object.offset) ? String(object.offset) : "0",
      cbOriginal: isSet(object.cbOriginal) ? Number(object.cbOriginal) : 0,
      cbCompressed: isSet(object.cbCompressed) ? Number(object.cbCompressed) : 0,
    };
  },

  toJSON(message: ContentManifestPayload_FileMapping_ChunkData): unknown {
    const obj: any = {};
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    message.crc !== undefined && (obj.crc = Math.round(message.crc));
    message.offset !== undefined && (obj.offset = message.offset);
    message.cbOriginal !== undefined && (obj.cbOriginal = Math.round(message.cbOriginal));
    message.cbCompressed !== undefined && (obj.cbCompressed = Math.round(message.cbCompressed));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentManifestPayload_FileMapping_ChunkData>, I>>(
    base?: I,
  ): ContentManifestPayload_FileMapping_ChunkData {
    return ContentManifestPayload_FileMapping_ChunkData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentManifestPayload_FileMapping_ChunkData>, I>>(
    object: I,
  ): ContentManifestPayload_FileMapping_ChunkData {
    const message = createBaseContentManifestPayload_FileMapping_ChunkData();
    message.sha = object.sha ?? Buffer.alloc(0);
    message.crc = object.crc ?? 0;
    message.offset = object.offset ?? "0";
    message.cbOriginal = object.cbOriginal ?? 0;
    message.cbCompressed = object.cbCompressed ?? 0;
    return message;
  },
};

function createBaseContentManifestMetadata(): ContentManifestMetadata {
  return {
    depotId: 0,
    gidManifest: "0",
    creationTime: 0,
    filenamesEncrypted: false,
    cbDiskOriginal: "0",
    cbDiskCompressed: "0",
    uniqueChunks: 0,
    crcEncrypted: 0,
    crcClear: 0,
  };
}

export const ContentManifestMetadata = {
  encode(message: ContentManifestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.gidManifest !== "0") {
      writer.uint32(16).uint64(message.gidManifest);
    }
    if (message.creationTime !== 0) {
      writer.uint32(24).uint32(message.creationTime);
    }
    if (message.filenamesEncrypted === true) {
      writer.uint32(32).bool(message.filenamesEncrypted);
    }
    if (message.cbDiskOriginal !== "0") {
      writer.uint32(40).uint64(message.cbDiskOriginal);
    }
    if (message.cbDiskCompressed !== "0") {
      writer.uint32(48).uint64(message.cbDiskCompressed);
    }
    if (message.uniqueChunks !== 0) {
      writer.uint32(56).uint32(message.uniqueChunks);
    }
    if (message.crcEncrypted !== 0) {
      writer.uint32(64).uint32(message.crcEncrypted);
    }
    if (message.crcClear !== 0) {
      writer.uint32(72).uint32(message.crcClear);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentManifestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentManifestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.gidManifest = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.creationTime = reader.uint32();
          break;
        case 4:
          message.filenamesEncrypted = reader.bool();
          break;
        case 5:
          message.cbDiskOriginal = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.cbDiskCompressed = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.uniqueChunks = reader.uint32();
          break;
        case 8:
          message.crcEncrypted = reader.uint32();
          break;
        case 9:
          message.crcClear = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentManifestMetadata {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      gidManifest: isSet(object.gidManifest) ? String(object.gidManifest) : "0",
      creationTime: isSet(object.creationTime) ? Number(object.creationTime) : 0,
      filenamesEncrypted: isSet(object.filenamesEncrypted) ? Boolean(object.filenamesEncrypted) : false,
      cbDiskOriginal: isSet(object.cbDiskOriginal) ? String(object.cbDiskOriginal) : "0",
      cbDiskCompressed: isSet(object.cbDiskCompressed) ? String(object.cbDiskCompressed) : "0",
      uniqueChunks: isSet(object.uniqueChunks) ? Number(object.uniqueChunks) : 0,
      crcEncrypted: isSet(object.crcEncrypted) ? Number(object.crcEncrypted) : 0,
      crcClear: isSet(object.crcClear) ? Number(object.crcClear) : 0,
    };
  },

  toJSON(message: ContentManifestMetadata): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.gidManifest !== undefined && (obj.gidManifest = message.gidManifest);
    message.creationTime !== undefined && (obj.creationTime = Math.round(message.creationTime));
    message.filenamesEncrypted !== undefined && (obj.filenamesEncrypted = message.filenamesEncrypted);
    message.cbDiskOriginal !== undefined && (obj.cbDiskOriginal = message.cbDiskOriginal);
    message.cbDiskCompressed !== undefined && (obj.cbDiskCompressed = message.cbDiskCompressed);
    message.uniqueChunks !== undefined && (obj.uniqueChunks = Math.round(message.uniqueChunks));
    message.crcEncrypted !== undefined && (obj.crcEncrypted = Math.round(message.crcEncrypted));
    message.crcClear !== undefined && (obj.crcClear = Math.round(message.crcClear));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentManifestMetadata>, I>>(base?: I): ContentManifestMetadata {
    return ContentManifestMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentManifestMetadata>, I>>(object: I): ContentManifestMetadata {
    const message = createBaseContentManifestMetadata();
    message.depotId = object.depotId ?? 0;
    message.gidManifest = object.gidManifest ?? "0";
    message.creationTime = object.creationTime ?? 0;
    message.filenamesEncrypted = object.filenamesEncrypted ?? false;
    message.cbDiskOriginal = object.cbDiskOriginal ?? "0";
    message.cbDiskCompressed = object.cbDiskCompressed ?? "0";
    message.uniqueChunks = object.uniqueChunks ?? 0;
    message.crcEncrypted = object.crcEncrypted ?? 0;
    message.crcClear = object.crcClear ?? 0;
    return message;
  },
};

function createBaseContentManifestSignature(): ContentManifestSignature {
  return { signature: Buffer.alloc(0) };
}

export const ContentManifestSignature = {
  encode(message: ContentManifestSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentManifestSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentManifestSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentManifestSignature {
    return { signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0) };
  },

  toJSON(message: ContentManifestSignature): unknown {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentManifestSignature>, I>>(base?: I): ContentManifestSignature {
    return ContentManifestSignature.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentManifestSignature>, I>>(object: I): ContentManifestSignature {
    const message = createBaseContentManifestSignature();
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseContentDeltaChunks(): ContentDeltaChunks {
  return { depotId: 0, manifestIdSource: "0", manifestIdTarget: "0", deltaChunks: [], chunkDataLocation: 0 };
}

export const ContentDeltaChunks = {
  encode(message: ContentDeltaChunks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.manifestIdSource !== "0") {
      writer.uint32(16).uint64(message.manifestIdSource);
    }
    if (message.manifestIdTarget !== "0") {
      writer.uint32(24).uint64(message.manifestIdTarget);
    }
    for (const v of message.deltaChunks) {
      ContentDeltaChunks_DeltaChunk.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.chunkDataLocation !== 0) {
      writer.uint32(40).int32(message.chunkDataLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentDeltaChunks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentDeltaChunks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.manifestIdSource = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.manifestIdTarget = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.deltaChunks.push(ContentDeltaChunks_DeltaChunk.decode(reader, reader.uint32()));
          break;
        case 5:
          message.chunkDataLocation = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentDeltaChunks {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      manifestIdSource: isSet(object.manifestIdSource) ? String(object.manifestIdSource) : "0",
      manifestIdTarget: isSet(object.manifestIdTarget) ? String(object.manifestIdTarget) : "0",
      deltaChunks: Array.isArray(object?.deltaChunks)
        ? object.deltaChunks.map((e: any) => ContentDeltaChunks_DeltaChunk.fromJSON(e))
        : [],
      chunkDataLocation: isSet(object.chunkDataLocation)
        ? eContentDeltaChunkDataLocationFromJSON(object.chunkDataLocation)
        : 0,
    };
  },

  toJSON(message: ContentDeltaChunks): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.manifestIdSource !== undefined && (obj.manifestIdSource = message.manifestIdSource);
    message.manifestIdTarget !== undefined && (obj.manifestIdTarget = message.manifestIdTarget);
    if (message.deltaChunks) {
      obj.deltaChunks = message.deltaChunks.map((e) => e ? ContentDeltaChunks_DeltaChunk.toJSON(e) : undefined);
    } else {
      obj.deltaChunks = [];
    }
    message.chunkDataLocation !== undefined &&
      (obj.chunkDataLocation = eContentDeltaChunkDataLocationToJSON(message.chunkDataLocation));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentDeltaChunks>, I>>(base?: I): ContentDeltaChunks {
    return ContentDeltaChunks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentDeltaChunks>, I>>(object: I): ContentDeltaChunks {
    const message = createBaseContentDeltaChunks();
    message.depotId = object.depotId ?? 0;
    message.manifestIdSource = object.manifestIdSource ?? "0";
    message.manifestIdTarget = object.manifestIdTarget ?? "0";
    message.deltaChunks = object.deltaChunks?.map((e) => ContentDeltaChunks_DeltaChunk.fromPartial(e)) || [];
    message.chunkDataLocation = object.chunkDataLocation ?? 0;
    return message;
  },
};

function createBaseContentDeltaChunks_DeltaChunk(): ContentDeltaChunks_DeltaChunk {
  return {
    shaSource: Buffer.alloc(0),
    shaTarget: Buffer.alloc(0),
    sizeOriginal: 0,
    patchMethod: 0,
    chunk: Buffer.alloc(0),
    sizeDelta: 0,
  };
}

export const ContentDeltaChunks_DeltaChunk = {
  encode(message: ContentDeltaChunks_DeltaChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shaSource.length !== 0) {
      writer.uint32(10).bytes(message.shaSource);
    }
    if (message.shaTarget.length !== 0) {
      writer.uint32(18).bytes(message.shaTarget);
    }
    if (message.sizeOriginal !== 0) {
      writer.uint32(24).uint32(message.sizeOriginal);
    }
    if (message.patchMethod !== 0) {
      writer.uint32(32).uint32(message.patchMethod);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(42).bytes(message.chunk);
    }
    if (message.sizeDelta !== 0) {
      writer.uint32(48).uint32(message.sizeDelta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentDeltaChunks_DeltaChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentDeltaChunks_DeltaChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shaSource = reader.bytes() as Buffer;
          break;
        case 2:
          message.shaTarget = reader.bytes() as Buffer;
          break;
        case 3:
          message.sizeOriginal = reader.uint32();
          break;
        case 4:
          message.patchMethod = reader.uint32();
          break;
        case 5:
          message.chunk = reader.bytes() as Buffer;
          break;
        case 6:
          message.sizeDelta = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentDeltaChunks_DeltaChunk {
    return {
      shaSource: isSet(object.shaSource) ? Buffer.from(bytesFromBase64(object.shaSource)) : Buffer.alloc(0),
      shaTarget: isSet(object.shaTarget) ? Buffer.from(bytesFromBase64(object.shaTarget)) : Buffer.alloc(0),
      sizeOriginal: isSet(object.sizeOriginal) ? Number(object.sizeOriginal) : 0,
      patchMethod: isSet(object.patchMethod) ? Number(object.patchMethod) : 0,
      chunk: isSet(object.chunk) ? Buffer.from(bytesFromBase64(object.chunk)) : Buffer.alloc(0),
      sizeDelta: isSet(object.sizeDelta) ? Number(object.sizeDelta) : 0,
    };
  },

  toJSON(message: ContentDeltaChunks_DeltaChunk): unknown {
    const obj: any = {};
    message.shaSource !== undefined &&
      (obj.shaSource = base64FromBytes(message.shaSource !== undefined ? message.shaSource : Buffer.alloc(0)));
    message.shaTarget !== undefined &&
      (obj.shaTarget = base64FromBytes(message.shaTarget !== undefined ? message.shaTarget : Buffer.alloc(0)));
    message.sizeOriginal !== undefined && (obj.sizeOriginal = Math.round(message.sizeOriginal));
    message.patchMethod !== undefined && (obj.patchMethod = Math.round(message.patchMethod));
    message.chunk !== undefined &&
      (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : Buffer.alloc(0)));
    message.sizeDelta !== undefined && (obj.sizeDelta = Math.round(message.sizeDelta));
    return obj;
  },

  create<I extends Exact<DeepPartial<ContentDeltaChunks_DeltaChunk>, I>>(base?: I): ContentDeltaChunks_DeltaChunk {
    return ContentDeltaChunks_DeltaChunk.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ContentDeltaChunks_DeltaChunk>, I>>(
    object: I,
  ): ContentDeltaChunks_DeltaChunk {
    const message = createBaseContentDeltaChunks_DeltaChunk();
    message.shaSource = object.shaSource ?? Buffer.alloc(0);
    message.shaTarget = object.shaTarget ?? Buffer.alloc(0);
    message.sizeOriginal = object.sizeOriginal ?? 0;
    message.patchMethod = object.patchMethod ?? 0;
    message.chunk = object.chunk ?? Buffer.alloc(0);
    message.sizeDelta = object.sizeDelta ?? 0;
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
