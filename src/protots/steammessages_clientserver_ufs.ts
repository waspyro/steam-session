/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientUFSUploadFileRequest {
  appId: number;
  fileSize: number;
  rawFileSize: number;
  shaFile: Buffer;
  timeStamp: string;
  fileName: string;
  platformsToSyncDeprecated: number;
  platformsToSync: number;
  cellId: number;
  canEncrypt: boolean;
}

export interface CMsgClientUFSUploadFileResponse {
  eresult: number;
  shaFile: Buffer;
  useHttp: boolean;
  httpHost: string;
  httpUrl: string;
  kvHeaders: Buffer;
  useHttps: boolean;
  encryptFile: boolean;
}

export interface CMsgClientUFSUploadCommit {
  files: CMsgClientUFSUploadCommit_File[];
}

export interface CMsgClientUFSUploadCommit_File {
  eresult: number;
  appId: number;
  shaFile: Buffer;
  cubFile: number;
  fileName: string;
}

export interface CMsgClientUFSUploadCommitResponse {
  files: CMsgClientUFSUploadCommitResponse_File[];
}

export interface CMsgClientUFSUploadCommitResponse_File {
  eresult: number;
  appId: number;
  shaFile: Buffer;
}

export interface CMsgClientUFSFileChunk {
  shaFile: Buffer;
  fileStart: number;
  data: Buffer;
}

export interface CMsgClientUFSTransferHeartbeat {
}

export interface CMsgClientUFSUploadFileFinished {
  eresult: number;
  shaFile: Buffer;
}

export interface CMsgClientUFSDeleteFileRequest {
  appId: number;
  fileName: string;
  isExplicitDelete: boolean;
}

export interface CMsgClientUFSDeleteFileResponse {
  eresult: number;
  fileName: string;
}

export interface CMsgClientUFSGetFileListForApp {
  appsToQuery: number[];
  sendPathPrefixes: boolean;
}

export interface CMsgClientUFSGetFileListForAppResponse {
  files: CMsgClientUFSGetFileListForAppResponse_File[];
  pathPrefixes: string[];
}

export interface CMsgClientUFSGetFileListForAppResponse_File {
  appId: number;
  fileName: string;
  shaFile: Buffer;
  timeStamp: string;
  rawFileSize: number;
  isExplicitDelete: boolean;
  platformsToSync: number;
  pathPrefixIndex: number;
}

export interface CMsgClientUFSDownloadRequest {
  appId: number;
  fileName: string;
  canHandleHttp: boolean;
}

export interface CMsgClientUFSDownloadResponse {
  eresult: number;
  appId: number;
  fileSize: number;
  rawFileSize: number;
  shaFile: Buffer;
  timeStamp: string;
  isExplicitDelete: boolean;
  useHttp: boolean;
  httpHost: string;
  httpUrl: string;
  kvHeaders: Buffer;
  useHttps: boolean;
  encrypted: boolean;
}

export interface CMsgClientUFSLoginRequest {
  protocolVersion: number;
  amSessionToken: string;
  apps: number[];
}

export interface CMsgClientUFSLoginResponse {
  eresult: number;
}

export interface CMsgClientUFSGetUGCDetails {
  hcontent: string;
}

export interface CMsgClientUFSGetUGCDetailsResponse {
  eresult: number;
  url: string;
  appId: number;
  filename: string;
  steamidCreator: string;
  fileSize: number;
  compressedFileSize: number;
  rangecheckHost: string;
  fileEncodedSha1: string;
}

export interface CMsgClientUFSGetSingleFileInfo {
  appId: number;
  fileName: string;
}

export interface CMsgClientUFSGetSingleFileInfoResponse {
  eresult: number;
  appId: number;
  fileName: string;
  shaFile: Buffer;
  timeStamp: string;
  rawFileSize: number;
  isExplicitDelete: boolean;
}

export interface CMsgClientUFSShareFile {
  appId: number;
  fileName: string;
}

export interface CMsgClientUFSShareFileResponse {
  eresult: number;
  hcontent: string;
}

function createBaseCMsgClientUFSUploadFileRequest(): CMsgClientUFSUploadFileRequest {
  return {
    appId: 0,
    fileSize: 0,
    rawFileSize: 0,
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    fileName: "",
    platformsToSyncDeprecated: 0,
    platformsToSync: 0,
    cellId: 0,
    canEncrypt: false,
  };
}

export const CMsgClientUFSUploadFileRequest = {
  encode(message: CMsgClientUFSUploadFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).uint32(message.fileSize);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(24).uint32(message.rawFileSize);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(34).bytes(message.shaFile);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(40).uint64(message.timeStamp);
    }
    if (message.fileName !== "") {
      writer.uint32(50).string(message.fileName);
    }
    if (message.platformsToSyncDeprecated !== 0) {
      writer.uint32(56).uint32(message.platformsToSyncDeprecated);
    }
    if (message.platformsToSync !== 0) {
      writer.uint32(64).uint32(message.platformsToSync);
    }
    if (message.cellId !== 0) {
      writer.uint32(72).uint32(message.cellId);
    }
    if (message.canEncrypt === true) {
      writer.uint32(80).bool(message.canEncrypt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.fileSize = reader.uint32();
          break;
        case 3:
          message.rawFileSize = reader.uint32();
          break;
        case 4:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 5:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.fileName = reader.string();
          break;
        case 7:
          message.platformsToSyncDeprecated = reader.uint32();
          break;
        case 8:
          message.platformsToSync = reader.uint32();
          break;
        case 9:
          message.cellId = reader.uint32();
          break;
        case 10:
          message.canEncrypt = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadFileRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      platformsToSyncDeprecated: isSet(object.platformsToSyncDeprecated) ? Number(object.platformsToSyncDeprecated) : 0,
      platformsToSync: isSet(object.platformsToSync) ? Number(object.platformsToSync) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      canEncrypt: isSet(object.canEncrypt) ? Boolean(object.canEncrypt) : false,
    };
  },

  toJSON(message: CMsgClientUFSUploadFileRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.platformsToSyncDeprecated !== undefined &&
      (obj.platformsToSyncDeprecated = Math.round(message.platformsToSyncDeprecated));
    message.platformsToSync !== undefined && (obj.platformsToSync = Math.round(message.platformsToSync));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.canEncrypt !== undefined && (obj.canEncrypt = message.canEncrypt);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadFileRequest>, I>>(base?: I): CMsgClientUFSUploadFileRequest {
    return CMsgClientUFSUploadFileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadFileRequest>, I>>(
    object: I,
  ): CMsgClientUFSUploadFileRequest {
    const message = createBaseCMsgClientUFSUploadFileRequest();
    message.appId = object.appId ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.rawFileSize = object.rawFileSize ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.fileName = object.fileName ?? "";
    message.platformsToSyncDeprecated = object.platformsToSyncDeprecated ?? 0;
    message.platformsToSync = object.platformsToSync ?? 0;
    message.cellId = object.cellId ?? 0;
    message.canEncrypt = object.canEncrypt ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSUploadFileResponse(): CMsgClientUFSUploadFileResponse {
  return {
    eresult: 0,
    shaFile: Buffer.alloc(0),
    useHttp: false,
    httpHost: "",
    httpUrl: "",
    kvHeaders: Buffer.alloc(0),
    useHttps: false,
    encryptFile: false,
  };
}

export const CMsgClientUFSUploadFileResponse = {
  encode(message: CMsgClientUFSUploadFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(18).bytes(message.shaFile);
    }
    if (message.useHttp === true) {
      writer.uint32(24).bool(message.useHttp);
    }
    if (message.httpHost !== "") {
      writer.uint32(34).string(message.httpHost);
    }
    if (message.httpUrl !== "") {
      writer.uint32(42).string(message.httpUrl);
    }
    if (message.kvHeaders.length !== 0) {
      writer.uint32(50).bytes(message.kvHeaders);
    }
    if (message.useHttps === true) {
      writer.uint32(56).bool(message.useHttps);
    }
    if (message.encryptFile === true) {
      writer.uint32(64).bool(message.encryptFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 3:
          message.useHttp = reader.bool();
          break;
        case 4:
          message.httpHost = reader.string();
          break;
        case 5:
          message.httpUrl = reader.string();
          break;
        case 6:
          message.kvHeaders = reader.bytes() as Buffer;
          break;
        case 7:
          message.useHttps = reader.bool();
          break;
        case 8:
          message.encryptFile = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadFileResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      useHttp: isSet(object.useHttp) ? Boolean(object.useHttp) : false,
      httpHost: isSet(object.httpHost) ? String(object.httpHost) : "",
      httpUrl: isSet(object.httpUrl) ? String(object.httpUrl) : "",
      kvHeaders: isSet(object.kvHeaders) ? Buffer.from(bytesFromBase64(object.kvHeaders)) : Buffer.alloc(0),
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      encryptFile: isSet(object.encryptFile) ? Boolean(object.encryptFile) : false,
    };
  },

  toJSON(message: CMsgClientUFSUploadFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.useHttp !== undefined && (obj.useHttp = message.useHttp);
    message.httpHost !== undefined && (obj.httpHost = message.httpHost);
    message.httpUrl !== undefined && (obj.httpUrl = message.httpUrl);
    message.kvHeaders !== undefined &&
      (obj.kvHeaders = base64FromBytes(message.kvHeaders !== undefined ? message.kvHeaders : Buffer.alloc(0)));
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    message.encryptFile !== undefined && (obj.encryptFile = message.encryptFile);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadFileResponse>, I>>(base?: I): CMsgClientUFSUploadFileResponse {
    return CMsgClientUFSUploadFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadFileResponse>, I>>(
    object: I,
  ): CMsgClientUFSUploadFileResponse {
    const message = createBaseCMsgClientUFSUploadFileResponse();
    message.eresult = object.eresult ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.useHttp = object.useHttp ?? false;
    message.httpHost = object.httpHost ?? "";
    message.httpUrl = object.httpUrl ?? "";
    message.kvHeaders = object.kvHeaders ?? Buffer.alloc(0);
    message.useHttps = object.useHttps ?? false;
    message.encryptFile = object.encryptFile ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSUploadCommit(): CMsgClientUFSUploadCommit {
  return { files: [] };
}

export const CMsgClientUFSUploadCommit = {
  encode(message: CMsgClientUFSUploadCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      CMsgClientUFSUploadCommit_File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(CMsgClientUFSUploadCommit_File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadCommit {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => CMsgClientUFSUploadCommit_File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUFSUploadCommit): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? CMsgClientUFSUploadCommit_File.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadCommit>, I>>(base?: I): CMsgClientUFSUploadCommit {
    return CMsgClientUFSUploadCommit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadCommit>, I>>(object: I): CMsgClientUFSUploadCommit {
    const message = createBaseCMsgClientUFSUploadCommit();
    message.files = object.files?.map((e) => CMsgClientUFSUploadCommit_File.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientUFSUploadCommit_File(): CMsgClientUFSUploadCommit_File {
  return { eresult: 0, appId: 0, shaFile: Buffer.alloc(0), cubFile: 0, fileName: "" };
}

export const CMsgClientUFSUploadCommit_File = {
  encode(message: CMsgClientUFSUploadCommit_File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(26).bytes(message.shaFile);
    }
    if (message.cubFile !== 0) {
      writer.uint32(32).uint32(message.cubFile);
    }
    if (message.fileName !== "") {
      writer.uint32(42).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadCommit_File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadCommit_File();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 4:
          message.cubFile = reader.uint32();
          break;
        case 5:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadCommit_File {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      cubFile: isSet(object.cubFile) ? Number(object.cubFile) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
    };
  },

  toJSON(message: CMsgClientUFSUploadCommit_File): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.cubFile !== undefined && (obj.cubFile = Math.round(message.cubFile));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadCommit_File>, I>>(base?: I): CMsgClientUFSUploadCommit_File {
    return CMsgClientUFSUploadCommit_File.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadCommit_File>, I>>(
    object: I,
  ): CMsgClientUFSUploadCommit_File {
    const message = createBaseCMsgClientUFSUploadCommit_File();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.cubFile = object.cubFile ?? 0;
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCMsgClientUFSUploadCommitResponse(): CMsgClientUFSUploadCommitResponse {
  return { files: [] };
}

export const CMsgClientUFSUploadCommitResponse = {
  encode(message: CMsgClientUFSUploadCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      CMsgClientUFSUploadCommitResponse_File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(CMsgClientUFSUploadCommitResponse_File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadCommitResponse {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => CMsgClientUFSUploadCommitResponse_File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientUFSUploadCommitResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? CMsgClientUFSUploadCommitResponse_File.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadCommitResponse>, I>>(
    base?: I,
  ): CMsgClientUFSUploadCommitResponse {
    return CMsgClientUFSUploadCommitResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadCommitResponse>, I>>(
    object: I,
  ): CMsgClientUFSUploadCommitResponse {
    const message = createBaseCMsgClientUFSUploadCommitResponse();
    message.files = object.files?.map((e) => CMsgClientUFSUploadCommitResponse_File.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientUFSUploadCommitResponse_File(): CMsgClientUFSUploadCommitResponse_File {
  return { eresult: 0, appId: 0, shaFile: Buffer.alloc(0) };
}

export const CMsgClientUFSUploadCommitResponse_File = {
  encode(message: CMsgClientUFSUploadCommitResponse_File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(26).bytes(message.shaFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadCommitResponse_File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadCommitResponse_File();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.shaFile = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadCommitResponse_File {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientUFSUploadCommitResponse_File): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadCommitResponse_File>, I>>(
    base?: I,
  ): CMsgClientUFSUploadCommitResponse_File {
    return CMsgClientUFSUploadCommitResponse_File.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadCommitResponse_File>, I>>(
    object: I,
  ): CMsgClientUFSUploadCommitResponse_File {
    const message = createBaseCMsgClientUFSUploadCommitResponse_File();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientUFSFileChunk(): CMsgClientUFSFileChunk {
  return { shaFile: Buffer.alloc(0), fileStart: 0, data: Buffer.alloc(0) };
}

export const CMsgClientUFSFileChunk = {
  encode(message: CMsgClientUFSFileChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shaFile.length !== 0) {
      writer.uint32(10).bytes(message.shaFile);
    }
    if (message.fileStart !== 0) {
      writer.uint32(16).uint32(message.fileStart);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSFileChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSFileChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 2:
          message.fileStart = reader.uint32();
          break;
        case 3:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSFileChunk {
    return {
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      fileStart: isSet(object.fileStart) ? Number(object.fileStart) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientUFSFileChunk): unknown {
    const obj: any = {};
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.fileStart !== undefined && (obj.fileStart = Math.round(message.fileStart));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSFileChunk>, I>>(base?: I): CMsgClientUFSFileChunk {
    return CMsgClientUFSFileChunk.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSFileChunk>, I>>(object: I): CMsgClientUFSFileChunk {
    const message = createBaseCMsgClientUFSFileChunk();
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.fileStart = object.fileStart ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientUFSTransferHeartbeat(): CMsgClientUFSTransferHeartbeat {
  return {};
}

export const CMsgClientUFSTransferHeartbeat = {
  encode(_: CMsgClientUFSTransferHeartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSTransferHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSTransferHeartbeat();
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

  fromJSON(_: any): CMsgClientUFSTransferHeartbeat {
    return {};
  },

  toJSON(_: CMsgClientUFSTransferHeartbeat): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSTransferHeartbeat>, I>>(base?: I): CMsgClientUFSTransferHeartbeat {
    return CMsgClientUFSTransferHeartbeat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSTransferHeartbeat>, I>>(_: I): CMsgClientUFSTransferHeartbeat {
    const message = createBaseCMsgClientUFSTransferHeartbeat();
    return message;
  },
};

function createBaseCMsgClientUFSUploadFileFinished(): CMsgClientUFSUploadFileFinished {
  return { eresult: 0, shaFile: Buffer.alloc(0) };
}

export const CMsgClientUFSUploadFileFinished = {
  encode(message: CMsgClientUFSUploadFileFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(18).bytes(message.shaFile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSUploadFileFinished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSUploadFileFinished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.shaFile = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSUploadFileFinished {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientUFSUploadFileFinished): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSUploadFileFinished>, I>>(base?: I): CMsgClientUFSUploadFileFinished {
    return CMsgClientUFSUploadFileFinished.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSUploadFileFinished>, I>>(
    object: I,
  ): CMsgClientUFSUploadFileFinished {
    const message = createBaseCMsgClientUFSUploadFileFinished();
    message.eresult = object.eresult ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientUFSDeleteFileRequest(): CMsgClientUFSDeleteFileRequest {
  return { appId: 0, fileName: "", isExplicitDelete: false };
}

export const CMsgClientUFSDeleteFileRequest = {
  encode(message: CMsgClientUFSDeleteFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    if (message.isExplicitDelete === true) {
      writer.uint32(24).bool(message.isExplicitDelete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSDeleteFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSDeleteFileRequest();
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
          message.isExplicitDelete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSDeleteFileRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
    };
  },

  toJSON(message: CMsgClientUFSDeleteFileRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSDeleteFileRequest>, I>>(base?: I): CMsgClientUFSDeleteFileRequest {
    return CMsgClientUFSDeleteFileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSDeleteFileRequest>, I>>(
    object: I,
  ): CMsgClientUFSDeleteFileRequest {
    const message = createBaseCMsgClientUFSDeleteFileRequest();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSDeleteFileResponse(): CMsgClientUFSDeleteFileResponse {
  return { eresult: 0, fileName: "" };
}

export const CMsgClientUFSDeleteFileResponse = {
  encode(message: CMsgClientUFSDeleteFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSDeleteFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSDeleteFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSDeleteFileResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
    };
  },

  toJSON(message: CMsgClientUFSDeleteFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSDeleteFileResponse>, I>>(base?: I): CMsgClientUFSDeleteFileResponse {
    return CMsgClientUFSDeleteFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSDeleteFileResponse>, I>>(
    object: I,
  ): CMsgClientUFSDeleteFileResponse {
    const message = createBaseCMsgClientUFSDeleteFileResponse();
    message.eresult = object.eresult ?? 0;
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCMsgClientUFSGetFileListForApp(): CMsgClientUFSGetFileListForApp {
  return { appsToQuery: [], sendPathPrefixes: false };
}

export const CMsgClientUFSGetFileListForApp = {
  encode(message: CMsgClientUFSGetFileListForApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appsToQuery) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.sendPathPrefixes === true) {
      writer.uint32(16).bool(message.sendPathPrefixes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetFileListForApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetFileListForApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appsToQuery.push(reader.uint32());
            }
          } else {
            message.appsToQuery.push(reader.uint32());
          }
          break;
        case 2:
          message.sendPathPrefixes = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetFileListForApp {
    return {
      appsToQuery: Array.isArray(object?.appsToQuery) ? object.appsToQuery.map((e: any) => Number(e)) : [],
      sendPathPrefixes: isSet(object.sendPathPrefixes) ? Boolean(object.sendPathPrefixes) : false,
    };
  },

  toJSON(message: CMsgClientUFSGetFileListForApp): unknown {
    const obj: any = {};
    if (message.appsToQuery) {
      obj.appsToQuery = message.appsToQuery.map((e) => Math.round(e));
    } else {
      obj.appsToQuery = [];
    }
    message.sendPathPrefixes !== undefined && (obj.sendPathPrefixes = message.sendPathPrefixes);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForApp>, I>>(base?: I): CMsgClientUFSGetFileListForApp {
    return CMsgClientUFSGetFileListForApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForApp>, I>>(
    object: I,
  ): CMsgClientUFSGetFileListForApp {
    const message = createBaseCMsgClientUFSGetFileListForApp();
    message.appsToQuery = object.appsToQuery?.map((e) => e) || [];
    message.sendPathPrefixes = object.sendPathPrefixes ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSGetFileListForAppResponse(): CMsgClientUFSGetFileListForAppResponse {
  return { files: [], pathPrefixes: [] };
}

export const CMsgClientUFSGetFileListForAppResponse = {
  encode(message: CMsgClientUFSGetFileListForAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      CMsgClientUFSGetFileListForAppResponse_File.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pathPrefixes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetFileListForAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetFileListForAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(CMsgClientUFSGetFileListForAppResponse_File.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pathPrefixes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetFileListForAppResponse {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => CMsgClientUFSGetFileListForAppResponse_File.fromJSON(e))
        : [],
      pathPrefixes: Array.isArray(object?.pathPrefixes) ? object.pathPrefixes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgClientUFSGetFileListForAppResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? CMsgClientUFSGetFileListForAppResponse_File.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    if (message.pathPrefixes) {
      obj.pathPrefixes = message.pathPrefixes.map((e) => e);
    } else {
      obj.pathPrefixes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForAppResponse>, I>>(
    base?: I,
  ): CMsgClientUFSGetFileListForAppResponse {
    return CMsgClientUFSGetFileListForAppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForAppResponse>, I>>(
    object: I,
  ): CMsgClientUFSGetFileListForAppResponse {
    const message = createBaseCMsgClientUFSGetFileListForAppResponse();
    message.files = object.files?.map((e) => CMsgClientUFSGetFileListForAppResponse_File.fromPartial(e)) || [];
    message.pathPrefixes = object.pathPrefixes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientUFSGetFileListForAppResponse_File(): CMsgClientUFSGetFileListForAppResponse_File {
  return {
    appId: 0,
    fileName: "",
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    rawFileSize: 0,
    isExplicitDelete: false,
    platformsToSync: 0,
    pathPrefixIndex: 0,
  };
}

export const CMsgClientUFSGetFileListForAppResponse_File = {
  encode(message: CMsgClientUFSGetFileListForAppResponse_File, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(26).bytes(message.shaFile);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(32).uint64(message.timeStamp);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(40).uint32(message.rawFileSize);
    }
    if (message.isExplicitDelete === true) {
      writer.uint32(48).bool(message.isExplicitDelete);
    }
    if (message.platformsToSync !== 0) {
      writer.uint32(56).uint32(message.platformsToSync);
    }
    if (message.pathPrefixIndex !== 0) {
      writer.uint32(64).uint32(message.pathPrefixIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetFileListForAppResponse_File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetFileListForAppResponse_File();
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
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 4:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.rawFileSize = reader.uint32();
          break;
        case 6:
          message.isExplicitDelete = reader.bool();
          break;
        case 7:
          message.platformsToSync = reader.uint32();
          break;
        case 8:
          message.pathPrefixIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetFileListForAppResponse_File {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
      platformsToSync: isSet(object.platformsToSync) ? Number(object.platformsToSync) : 0,
      pathPrefixIndex: isSet(object.pathPrefixIndex) ? Number(object.pathPrefixIndex) : 0,
    };
  },

  toJSON(message: CMsgClientUFSGetFileListForAppResponse_File): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    message.platformsToSync !== undefined && (obj.platformsToSync = Math.round(message.platformsToSync));
    message.pathPrefixIndex !== undefined && (obj.pathPrefixIndex = Math.round(message.pathPrefixIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForAppResponse_File>, I>>(
    base?: I,
  ): CMsgClientUFSGetFileListForAppResponse_File {
    return CMsgClientUFSGetFileListForAppResponse_File.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetFileListForAppResponse_File>, I>>(
    object: I,
  ): CMsgClientUFSGetFileListForAppResponse_File {
    const message = createBaseCMsgClientUFSGetFileListForAppResponse_File();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.rawFileSize = object.rawFileSize ?? 0;
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    message.platformsToSync = object.platformsToSync ?? 0;
    message.pathPrefixIndex = object.pathPrefixIndex ?? 0;
    return message;
  },
};

function createBaseCMsgClientUFSDownloadRequest(): CMsgClientUFSDownloadRequest {
  return { appId: 0, fileName: "", canHandleHttp: false };
}

export const CMsgClientUFSDownloadRequest = {
  encode(message: CMsgClientUFSDownloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    if (message.canHandleHttp === true) {
      writer.uint32(24).bool(message.canHandleHttp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSDownloadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSDownloadRequest();
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
          message.canHandleHttp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSDownloadRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      canHandleHttp: isSet(object.canHandleHttp) ? Boolean(object.canHandleHttp) : false,
    };
  },

  toJSON(message: CMsgClientUFSDownloadRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.canHandleHttp !== undefined && (obj.canHandleHttp = message.canHandleHttp);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSDownloadRequest>, I>>(base?: I): CMsgClientUFSDownloadRequest {
    return CMsgClientUFSDownloadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSDownloadRequest>, I>>(object: I): CMsgClientUFSDownloadRequest {
    const message = createBaseCMsgClientUFSDownloadRequest();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    message.canHandleHttp = object.canHandleHttp ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSDownloadResponse(): CMsgClientUFSDownloadResponse {
  return {
    eresult: 0,
    appId: 0,
    fileSize: 0,
    rawFileSize: 0,
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    isExplicitDelete: false,
    useHttp: false,
    httpHost: "",
    httpUrl: "",
    kvHeaders: Buffer.alloc(0),
    useHttps: false,
    encrypted: false,
  };
}

export const CMsgClientUFSDownloadResponse = {
  encode(message: CMsgClientUFSDownloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).uint32(message.fileSize);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(32).uint32(message.rawFileSize);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(42).bytes(message.shaFile);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(48).uint64(message.timeStamp);
    }
    if (message.isExplicitDelete === true) {
      writer.uint32(56).bool(message.isExplicitDelete);
    }
    if (message.useHttp === true) {
      writer.uint32(64).bool(message.useHttp);
    }
    if (message.httpHost !== "") {
      writer.uint32(74).string(message.httpHost);
    }
    if (message.httpUrl !== "") {
      writer.uint32(82).string(message.httpUrl);
    }
    if (message.kvHeaders.length !== 0) {
      writer.uint32(90).bytes(message.kvHeaders);
    }
    if (message.useHttps === true) {
      writer.uint32(96).bool(message.useHttps);
    }
    if (message.encrypted === true) {
      writer.uint32(104).bool(message.encrypted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSDownloadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSDownloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.fileSize = reader.uint32();
          break;
        case 4:
          message.rawFileSize = reader.uint32();
          break;
        case 5:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 6:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.isExplicitDelete = reader.bool();
          break;
        case 8:
          message.useHttp = reader.bool();
          break;
        case 9:
          message.httpHost = reader.string();
          break;
        case 10:
          message.httpUrl = reader.string();
          break;
        case 11:
          message.kvHeaders = reader.bytes() as Buffer;
          break;
        case 12:
          message.useHttps = reader.bool();
          break;
        case 13:
          message.encrypted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSDownloadResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
      useHttp: isSet(object.useHttp) ? Boolean(object.useHttp) : false,
      httpHost: isSet(object.httpHost) ? String(object.httpHost) : "",
      httpUrl: isSet(object.httpUrl) ? String(object.httpUrl) : "",
      kvHeaders: isSet(object.kvHeaders) ? Buffer.from(bytesFromBase64(object.kvHeaders)) : Buffer.alloc(0),
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
    };
  },

  toJSON(message: CMsgClientUFSDownloadResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    message.useHttp !== undefined && (obj.useHttp = message.useHttp);
    message.httpHost !== undefined && (obj.httpHost = message.httpHost);
    message.httpUrl !== undefined && (obj.httpUrl = message.httpUrl);
    message.kvHeaders !== undefined &&
      (obj.kvHeaders = base64FromBytes(message.kvHeaders !== undefined ? message.kvHeaders : Buffer.alloc(0)));
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSDownloadResponse>, I>>(base?: I): CMsgClientUFSDownloadResponse {
    return CMsgClientUFSDownloadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSDownloadResponse>, I>>(
    object: I,
  ): CMsgClientUFSDownloadResponse {
    const message = createBaseCMsgClientUFSDownloadResponse();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.rawFileSize = object.rawFileSize ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    message.useHttp = object.useHttp ?? false;
    message.httpHost = object.httpHost ?? "";
    message.httpUrl = object.httpUrl ?? "";
    message.kvHeaders = object.kvHeaders ?? Buffer.alloc(0);
    message.useHttps = object.useHttps ?? false;
    message.encrypted = object.encrypted ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSLoginRequest(): CMsgClientUFSLoginRequest {
  return { protocolVersion: 0, amSessionToken: "0", apps: [] };
}

export const CMsgClientUFSLoginRequest = {
  encode(message: CMsgClientUFSLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== 0) {
      writer.uint32(8).uint32(message.protocolVersion);
    }
    if (message.amSessionToken !== "0") {
      writer.uint32(16).uint64(message.amSessionToken);
    }
    writer.uint32(26).fork();
    for (const v of message.apps) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSLoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = reader.uint32();
          break;
        case 2:
          message.amSessionToken = longToString(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.apps.push(reader.uint32());
            }
          } else {
            message.apps.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSLoginRequest {
    return {
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      amSessionToken: isSet(object.amSessionToken) ? String(object.amSessionToken) : "0",
      apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientUFSLoginRequest): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.amSessionToken !== undefined && (obj.amSessionToken = message.amSessionToken);
    if (message.apps) {
      obj.apps = message.apps.map((e) => Math.round(e));
    } else {
      obj.apps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSLoginRequest>, I>>(base?: I): CMsgClientUFSLoginRequest {
    return CMsgClientUFSLoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSLoginRequest>, I>>(object: I): CMsgClientUFSLoginRequest {
    const message = createBaseCMsgClientUFSLoginRequest();
    message.protocolVersion = object.protocolVersion ?? 0;
    message.amSessionToken = object.amSessionToken ?? "0";
    message.apps = object.apps?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientUFSLoginResponse(): CMsgClientUFSLoginResponse {
  return { eresult: 0 };
}

export const CMsgClientUFSLoginResponse = {
  encode(message: CMsgClientUFSLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSLoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSLoginResponse();
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

  fromJSON(object: any): CMsgClientUFSLoginResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientUFSLoginResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSLoginResponse>, I>>(base?: I): CMsgClientUFSLoginResponse {
    return CMsgClientUFSLoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSLoginResponse>, I>>(object: I): CMsgClientUFSLoginResponse {
    const message = createBaseCMsgClientUFSLoginResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientUFSGetUGCDetails(): CMsgClientUFSGetUGCDetails {
  return { hcontent: "0" };
}

export const CMsgClientUFSGetUGCDetails = {
  encode(message: CMsgClientUFSGetUGCDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hcontent !== "0") {
      writer.uint32(9).fixed64(message.hcontent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetUGCDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetUGCDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hcontent = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetUGCDetails {
    return { hcontent: isSet(object.hcontent) ? String(object.hcontent) : "0" };
  },

  toJSON(message: CMsgClientUFSGetUGCDetails): unknown {
    const obj: any = {};
    message.hcontent !== undefined && (obj.hcontent = message.hcontent);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetUGCDetails>, I>>(base?: I): CMsgClientUFSGetUGCDetails {
    return CMsgClientUFSGetUGCDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetUGCDetails>, I>>(object: I): CMsgClientUFSGetUGCDetails {
    const message = createBaseCMsgClientUFSGetUGCDetails();
    message.hcontent = object.hcontent ?? "0";
    return message;
  },
};

function createBaseCMsgClientUFSGetUGCDetailsResponse(): CMsgClientUFSGetUGCDetailsResponse {
  return {
    eresult: 0,
    url: "",
    appId: 0,
    filename: "",
    steamidCreator: "0",
    fileSize: 0,
    compressedFileSize: 0,
    rangecheckHost: "",
    fileEncodedSha1: "",
  };
}

export const CMsgClientUFSGetUGCDetailsResponse = {
  encode(message: CMsgClientUFSGetUGCDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    if (message.steamidCreator !== "0") {
      writer.uint32(41).fixed64(message.steamidCreator);
    }
    if (message.fileSize !== 0) {
      writer.uint32(48).uint32(message.fileSize);
    }
    if (message.compressedFileSize !== 0) {
      writer.uint32(56).uint32(message.compressedFileSize);
    }
    if (message.rangecheckHost !== "") {
      writer.uint32(66).string(message.rangecheckHost);
    }
    if (message.fileEncodedSha1 !== "") {
      writer.uint32(74).string(message.fileEncodedSha1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetUGCDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetUGCDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.filename = reader.string();
          break;
        case 5:
          message.steamidCreator = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.fileSize = reader.uint32();
          break;
        case 7:
          message.compressedFileSize = reader.uint32();
          break;
        case 8:
          message.rangecheckHost = reader.string();
          break;
        case 9:
          message.fileEncodedSha1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetUGCDetailsResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      steamidCreator: isSet(object.steamidCreator) ? String(object.steamidCreator) : "0",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      compressedFileSize: isSet(object.compressedFileSize) ? Number(object.compressedFileSize) : 0,
      rangecheckHost: isSet(object.rangecheckHost) ? String(object.rangecheckHost) : "",
      fileEncodedSha1: isSet(object.fileEncodedSha1) ? String(object.fileEncodedSha1) : "",
    };
  },

  toJSON(message: CMsgClientUFSGetUGCDetailsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.url !== undefined && (obj.url = message.url);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.filename !== undefined && (obj.filename = message.filename);
    message.steamidCreator !== undefined && (obj.steamidCreator = message.steamidCreator);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.compressedFileSize !== undefined && (obj.compressedFileSize = Math.round(message.compressedFileSize));
    message.rangecheckHost !== undefined && (obj.rangecheckHost = message.rangecheckHost);
    message.fileEncodedSha1 !== undefined && (obj.fileEncodedSha1 = message.fileEncodedSha1);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetUGCDetailsResponse>, I>>(
    base?: I,
  ): CMsgClientUFSGetUGCDetailsResponse {
    return CMsgClientUFSGetUGCDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetUGCDetailsResponse>, I>>(
    object: I,
  ): CMsgClientUFSGetUGCDetailsResponse {
    const message = createBaseCMsgClientUFSGetUGCDetailsResponse();
    message.eresult = object.eresult ?? 0;
    message.url = object.url ?? "";
    message.appId = object.appId ?? 0;
    message.filename = object.filename ?? "";
    message.steamidCreator = object.steamidCreator ?? "0";
    message.fileSize = object.fileSize ?? 0;
    message.compressedFileSize = object.compressedFileSize ?? 0;
    message.rangecheckHost = object.rangecheckHost ?? "";
    message.fileEncodedSha1 = object.fileEncodedSha1 ?? "";
    return message;
  },
};

function createBaseCMsgClientUFSGetSingleFileInfo(): CMsgClientUFSGetSingleFileInfo {
  return { appId: 0, fileName: "" };
}

export const CMsgClientUFSGetSingleFileInfo = {
  encode(message: CMsgClientUFSGetSingleFileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetSingleFileInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetSingleFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetSingleFileInfo {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
    };
  },

  toJSON(message: CMsgClientUFSGetSingleFileInfo): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetSingleFileInfo>, I>>(base?: I): CMsgClientUFSGetSingleFileInfo {
    return CMsgClientUFSGetSingleFileInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetSingleFileInfo>, I>>(
    object: I,
  ): CMsgClientUFSGetSingleFileInfo {
    const message = createBaseCMsgClientUFSGetSingleFileInfo();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCMsgClientUFSGetSingleFileInfoResponse(): CMsgClientUFSGetSingleFileInfoResponse {
  return {
    eresult: 0,
    appId: 0,
    fileName: "",
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    rawFileSize: 0,
    isExplicitDelete: false,
  };
}

export const CMsgClientUFSGetSingleFileInfoResponse = {
  encode(message: CMsgClientUFSGetSingleFileInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(26).string(message.fileName);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(34).bytes(message.shaFile);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(40).uint64(message.timeStamp);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(48).uint32(message.rawFileSize);
    }
    if (message.isExplicitDelete === true) {
      writer.uint32(56).bool(message.isExplicitDelete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSGetSingleFileInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSGetSingleFileInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.fileName = reader.string();
          break;
        case 4:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 5:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.rawFileSize = reader.uint32();
          break;
        case 7:
          message.isExplicitDelete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSGetSingleFileInfoResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
    };
  },

  toJSON(message: CMsgClientUFSGetSingleFileInfoResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSGetSingleFileInfoResponse>, I>>(
    base?: I,
  ): CMsgClientUFSGetSingleFileInfoResponse {
    return CMsgClientUFSGetSingleFileInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSGetSingleFileInfoResponse>, I>>(
    object: I,
  ): CMsgClientUFSGetSingleFileInfoResponse {
    const message = createBaseCMsgClientUFSGetSingleFileInfoResponse();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.rawFileSize = object.rawFileSize ?? 0;
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    return message;
  },
};

function createBaseCMsgClientUFSShareFile(): CMsgClientUFSShareFile {
  return { appId: 0, fileName: "" };
}

export const CMsgClientUFSShareFile = {
  encode(message: CMsgClientUFSShareFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSShareFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSShareFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSShareFile {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
    };
  },

  toJSON(message: CMsgClientUFSShareFile): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSShareFile>, I>>(base?: I): CMsgClientUFSShareFile {
    return CMsgClientUFSShareFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSShareFile>, I>>(object: I): CMsgClientUFSShareFile {
    const message = createBaseCMsgClientUFSShareFile();
    message.appId = object.appId ?? 0;
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCMsgClientUFSShareFileResponse(): CMsgClientUFSShareFileResponse {
  return { eresult: 0, hcontent: "0" };
}

export const CMsgClientUFSShareFileResponse = {
  encode(message: CMsgClientUFSShareFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.hcontent !== "0") {
      writer.uint32(17).fixed64(message.hcontent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUFSShareFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUFSShareFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.hcontent = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUFSShareFileResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      hcontent: isSet(object.hcontent) ? String(object.hcontent) : "0",
    };
  },

  toJSON(message: CMsgClientUFSShareFileResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.hcontent !== undefined && (obj.hcontent = message.hcontent);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUFSShareFileResponse>, I>>(base?: I): CMsgClientUFSShareFileResponse {
    return CMsgClientUFSShareFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUFSShareFileResponse>, I>>(
    object: I,
  ): CMsgClientUFSShareFileResponse {
    const message = createBaseCMsgClientUFSShareFileResponse();
    message.eresult = object.eresult ?? 0;
    message.hcontent = object.hcontent ?? "0";
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
