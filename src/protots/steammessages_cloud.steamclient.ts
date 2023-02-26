/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ECloudStoragePersistState,
  eCloudStoragePersistStateFromJSON,
  eCloudStoragePersistStateToJSON,
  EPublishedFileStorageSystem,
  ePublishedFileStorageSystemFromJSON,
  ePublishedFileStorageSystemToJSON,
} from "./enums";
import { CCloudPendingRemoteOperation } from "./steammessages_client_objects";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CCloudClientLogUploadCheckNotification {
  clientId: string;
}

export interface CCloudClientLogUploadCompleteNotification {
  clientId: string;
  requestId: string;
}

export interface CCloudGetUploadServerInfoRequest {
  appid: number;
}

export interface CCloudGetUploadServerInfoResponse {
  serverUrl: string;
}

export interface CCloudBeginHTTPUploadRequest {
  appid: number;
  fileSize: number;
  filename: string;
  fileSha: string;
  isPublic: boolean;
  platformsToSync: string[];
  requestHeadersNames: string[];
  requestHeadersValues: string[];
  uploadBatchId: string;
}

export interface CCloudBeginHTTPUploadResponse {
  ugcid: string;
  timestamp: number;
  urlHost: string;
  urlPath: string;
  useHttps: boolean;
  requestHeaders: CCloudBeginHTTPUploadResponse_HTTPHeaders[];
}

export interface CCloudBeginHTTPUploadResponse_HTTPHeaders {
  name: string;
  value: string;
}

export interface CCloudCommitHTTPUploadRequest {
  transferSucceeded: boolean;
  appid: number;
  fileSha: string;
  filename: string;
}

export interface CCloudCommitHTTPUploadResponse {
  fileCommitted: boolean;
}

export interface CCloudBeginUGCUploadRequest {
  appid: number;
  fileSize: number;
  filename: string;
  fileSha: string;
  contentType: string;
}

export interface CCloudBeginUGCUploadResponse {
  storageSystem: EPublishedFileStorageSystem;
  ugcid: string;
  timestamp: number;
  urlHost: string;
  urlPath: string;
  useHttps: boolean;
  requestHeaders: CCloudBeginUGCUploadResponse_HTTPHeaders[];
}

export interface CCloudBeginUGCUploadResponse_HTTPHeaders {
  name: string;
  value: string;
}

export interface CCloudCommitUGCUploadRequest {
  transferSucceeded: boolean;
  appid: number;
  ugcid: string;
}

export interface CCloudCommitUGCUploadResponse {
  fileCommitted: boolean;
}

export interface CCloudGetFileDetailsRequest {
  ugcid: string;
  appid: number;
}

export interface CCloudUserFile {
  appid: number;
  ugcid: string;
  filename: string;
  timestamp: string;
  fileSize: number;
  url: string;
  steamidCreator: string;
  flags: number;
  platformsToSync: string[];
  fileSha: string;
}

export interface CCloudGetFileDetailsResponse {
  details: CCloudUserFile | undefined;
}

export interface CCloudEnumerateUserFilesRequest {
  appid: number;
  extendedDetails: boolean;
  count: number;
  startIndex: number;
}

export interface CCloudEnumerateUserFilesResponse {
  files: CCloudUserFile[];
  totalFiles: number;
}

export interface CCloudDeleteRequest {
  filename: string;
  appid: number;
  uploadBatchId: string;
}

export interface CCloudDeleteResponse {
}

export interface CCloudGetClientEncryptionKeyRequest {
}

export interface CCloudGetClientEncryptionKeyResponse {
  key: Buffer;
  crc: number;
}

export interface CCloudCDNReportNotification {
  steamid: string;
  url: string;
  success: boolean;
  httpStatusCode: number;
  expectedBytes: string;
  receivedBytes: string;
  duration: number;
}

export interface CCloudExternalStorageTransferReportNotification {
  host: string;
  path: string;
  isUpload: boolean;
  success: boolean;
  httpStatusCode: number;
  bytesExpected: string;
  bytesActual: string;
  durationMs: number;
  cellid: number;
  proxied: boolean;
  ipv6Local: boolean;
  ipv6Remote: boolean;
  timeToConnectMs: number;
  timeToSendReqMs: number;
  timeToFirstByteMs: number;
  timeToLastByteMs: number;
}

export interface CCloudBeginAppUploadBatchRequest {
  appid: number;
  machineName: string;
  filesToUpload: string[];
  filesToDelete: string[];
  clientId: string;
  appBuildId: string;
}

export interface CCloudBeginAppUploadBatchResponse {
  batchId: string;
  appChangeNumber: string;
}

export interface CCloudCompleteAppUploadBatchNotification {
  appid: number;
  batchId: string;
  batchEresult: number;
}

export interface CCloudCompleteAppUploadBatchRequest {
  appid: number;
  batchId: string;
  batchEresult: number;
}

export interface CCloudCompleteAppUploadBatchResponse {
}

export interface CCloudClientBeginFileUploadRequest {
  appid: number;
  fileSize: number;
  rawFileSize: number;
  fileSha: Buffer;
  timeStamp: string;
  filename: string;
  platformsToSync: number;
  cellId: number;
  canEncrypt: boolean;
  isSharedFile: boolean;
  deprecatedRealm: number;
  uploadBatchId: string;
}

export interface ClientCloudFileUploadBlockDetails {
  urlHost: string;
  urlPath: string;
  useHttps: boolean;
  httpMethod: number;
  requestHeaders: ClientCloudFileUploadBlockDetails_HTTPHeaders[];
  blockOffset: string;
  blockLength: number;
  explicitBodyData: Buffer;
  mayParallelize: boolean;
}

export interface ClientCloudFileUploadBlockDetails_HTTPHeaders {
  name: string;
  value: string;
}

export interface CCloudClientBeginFileUploadResponse {
  encryptFile: boolean;
  blockRequests: ClientCloudFileUploadBlockDetails[];
}

export interface CCloudClientCommitFileUploadRequest {
  transferSucceeded: boolean;
  appid: number;
  fileSha: Buffer;
  filename: string;
}

export interface CCloudClientCommitFileUploadResponse {
  fileCommitted: boolean;
}

export interface CCloudClientFileDownloadRequest {
  appid: number;
  filename: string;
  realm: number;
}

export interface CCloudClientFileDownloadResponse {
  appid: number;
  fileSize: number;
  rawFileSize: number;
  shaFile: Buffer;
  timeStamp: string;
  isExplicitDelete: boolean;
  urlHost: string;
  urlPath: string;
  useHttps: boolean;
  requestHeaders: CCloudClientFileDownloadResponse_HTTPHeaders[];
  encrypted: boolean;
}

export interface CCloudClientFileDownloadResponse_HTTPHeaders {
  name: string;
  value: string;
}

export interface CCloudClientDeleteFileRequest {
  appid: number;
  filename: string;
  isExplicitDelete: boolean;
  uploadBatchId: string;
}

export interface CCloudClientDeleteFileResponse {
}

export interface CCloudClientConflictResolutionNotification {
  appid: number;
  choseLocalFiles: boolean;
}

export interface CCloudEnumerateUserAppsRequest {
}

export interface CCloudEnumerateUserAppsResponse {
  apps: CCloudEnumerateUserAppsResponse_Apps[];
}

export interface CCloudEnumerateUserAppsResponse_Apps {
  appid: number;
  totalcount: number;
  totalsize: string;
}

export interface CCloudGetAppFileChangelistRequest {
  appid: number;
  syncedChangeNumber: string;
}

export interface CCloudAppFileInfo {
  fileName: string;
  shaFile: Buffer;
  timeStamp: string;
  rawFileSize: number;
  persistState: ECloudStoragePersistState;
  platformsToSync: number;
  pathPrefixIndex: number;
  machineNameIndex: number;
}

export interface CCloudGetAppFileChangelistResponse {
  currentChangeNumber: string;
  files: CCloudAppFileInfo[];
  isOnlyDelta: boolean;
  pathPrefixes: string[];
  machineNames: string[];
  appBuildidHwm: string;
}

export interface CCloudAppSessionSuspendRequest {
  appid: number;
  clientId: string;
  machineName: string;
  cloudSyncCompleted: boolean;
}

export interface CCloudAppSessionSuspendResponse {
}

export interface CCloudAppSessionResumeRequest {
  appid: number;
  clientId: string;
}

export interface CCloudAppSessionResumeResponse {
}

export interface CCloudAppLaunchIntentRequest {
  appid: number;
  clientId: string;
  machineName: string;
  ignorePendingOperations: boolean;
}

export interface CCloudAppLaunchIntentResponse {
  pendingRemoteOperations: CCloudPendingRemoteOperation[];
}

export interface CCloudAppExitSyncDoneNotification {
  appid: number;
  clientId: string;
  uploadsCompleted: boolean;
  uploadsRequired: boolean;
}

export interface CCloudClientGetAppQuotaUsageRequest {
  appid: number;
}

export interface CCloudClientGetAppQuotaUsageResponse {
  existingFiles: number;
  existingBytes: string;
  maxNumFiles: number;
  maxNumBytes: string;
}

export interface CCloudAppCloudStateChangeNotification {
  appid: number;
  appChangeNumber: string;
}

export interface CCloudClientLogUploadRequestNotification {
  requestId: string;
}

function createBaseCCloudClientLogUploadCheckNotification(): CCloudClientLogUploadCheckNotification {
  return { clientId: "0" };
}

export const CCloudClientLogUploadCheckNotification = {
  encode(message: CCloudClientLogUploadCheckNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "0") {
      writer.uint32(8).uint64(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientLogUploadCheckNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientLogUploadCheckNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientLogUploadCheckNotification {
    return { clientId: isSet(object.clientId) ? String(object.clientId) : "0" };
  },

  toJSON(message: CCloudClientLogUploadCheckNotification): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientLogUploadCheckNotification>, I>>(
    base?: I,
  ): CCloudClientLogUploadCheckNotification {
    return CCloudClientLogUploadCheckNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientLogUploadCheckNotification>, I>>(
    object: I,
  ): CCloudClientLogUploadCheckNotification {
    const message = createBaseCCloudClientLogUploadCheckNotification();
    message.clientId = object.clientId ?? "0";
    return message;
  },
};

function createBaseCCloudClientLogUploadCompleteNotification(): CCloudClientLogUploadCompleteNotification {
  return { clientId: "0", requestId: "0" };
}

export const CCloudClientLogUploadCompleteNotification = {
  encode(message: CCloudClientLogUploadCompleteNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "0") {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.requestId !== "0") {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientLogUploadCompleteNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientLogUploadCompleteNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.requestId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientLogUploadCompleteNotification {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      requestId: isSet(object.requestId) ? String(object.requestId) : "0",
    };
  },

  toJSON(message: CCloudClientLogUploadCompleteNotification): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientLogUploadCompleteNotification>, I>>(
    base?: I,
  ): CCloudClientLogUploadCompleteNotification {
    return CCloudClientLogUploadCompleteNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientLogUploadCompleteNotification>, I>>(
    object: I,
  ): CCloudClientLogUploadCompleteNotification {
    const message = createBaseCCloudClientLogUploadCompleteNotification();
    message.clientId = object.clientId ?? "0";
    message.requestId = object.requestId ?? "0";
    return message;
  },
};

function createBaseCCloudGetUploadServerInfoRequest(): CCloudGetUploadServerInfoRequest {
  return { appid: 0 };
}

export const CCloudGetUploadServerInfoRequest = {
  encode(message: CCloudGetUploadServerInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetUploadServerInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetUploadServerInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetUploadServerInfoRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CCloudGetUploadServerInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetUploadServerInfoRequest>, I>>(
    base?: I,
  ): CCloudGetUploadServerInfoRequest {
    return CCloudGetUploadServerInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetUploadServerInfoRequest>, I>>(
    object: I,
  ): CCloudGetUploadServerInfoRequest {
    const message = createBaseCCloudGetUploadServerInfoRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCCloudGetUploadServerInfoResponse(): CCloudGetUploadServerInfoResponse {
  return { serverUrl: "" };
}

export const CCloudGetUploadServerInfoResponse = {
  encode(message: CCloudGetUploadServerInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverUrl !== "") {
      writer.uint32(10).string(message.serverUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetUploadServerInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetUploadServerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetUploadServerInfoResponse {
    return { serverUrl: isSet(object.serverUrl) ? String(object.serverUrl) : "" };
  },

  toJSON(message: CCloudGetUploadServerInfoResponse): unknown {
    const obj: any = {};
    message.serverUrl !== undefined && (obj.serverUrl = message.serverUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetUploadServerInfoResponse>, I>>(
    base?: I,
  ): CCloudGetUploadServerInfoResponse {
    return CCloudGetUploadServerInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetUploadServerInfoResponse>, I>>(
    object: I,
  ): CCloudGetUploadServerInfoResponse {
    const message = createBaseCCloudGetUploadServerInfoResponse();
    message.serverUrl = object.serverUrl ?? "";
    return message;
  },
};

function createBaseCCloudBeginHTTPUploadRequest(): CCloudBeginHTTPUploadRequest {
  return {
    appid: 0,
    fileSize: 0,
    filename: "",
    fileSha: "",
    isPublic: false,
    platformsToSync: [],
    requestHeadersNames: [],
    requestHeadersValues: [],
    uploadBatchId: "0",
  };
}

export const CCloudBeginHTTPUploadRequest = {
  encode(message: CCloudBeginHTTPUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).uint32(message.fileSize);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.fileSha !== "") {
      writer.uint32(34).string(message.fileSha);
    }
    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }
    for (const v of message.platformsToSync) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.requestHeadersNames) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.requestHeadersValues) {
      writer.uint32(66).string(v!);
    }
    if (message.uploadBatchId !== "0") {
      writer.uint32(72).uint64(message.uploadBatchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginHTTPUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginHTTPUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.fileSize = reader.uint32();
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.fileSha = reader.string();
          break;
        case 5:
          message.isPublic = reader.bool();
          break;
        case 6:
          message.platformsToSync.push(reader.string());
          break;
        case 7:
          message.requestHeadersNames.push(reader.string());
          break;
        case 8:
          message.requestHeadersValues.push(reader.string());
          break;
        case 9:
          message.uploadBatchId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginHTTPUploadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      fileSha: isSet(object.fileSha) ? String(object.fileSha) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
      platformsToSync: Array.isArray(object?.platformsToSync) ? object.platformsToSync.map((e: any) => String(e)) : [],
      requestHeadersNames: Array.isArray(object?.requestHeadersNames)
        ? object.requestHeadersNames.map((e: any) => String(e))
        : [],
      requestHeadersValues: Array.isArray(object?.requestHeadersValues)
        ? object.requestHeadersValues.map((e: any) => String(e))
        : [],
      uploadBatchId: isSet(object.uploadBatchId) ? String(object.uploadBatchId) : "0",
    };
  },

  toJSON(message: CCloudBeginHTTPUploadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.filename !== undefined && (obj.filename = message.filename);
    message.fileSha !== undefined && (obj.fileSha = message.fileSha);
    message.isPublic !== undefined && (obj.isPublic = message.isPublic);
    if (message.platformsToSync) {
      obj.platformsToSync = message.platformsToSync.map((e) => e);
    } else {
      obj.platformsToSync = [];
    }
    if (message.requestHeadersNames) {
      obj.requestHeadersNames = message.requestHeadersNames.map((e) => e);
    } else {
      obj.requestHeadersNames = [];
    }
    if (message.requestHeadersValues) {
      obj.requestHeadersValues = message.requestHeadersValues.map((e) => e);
    } else {
      obj.requestHeadersValues = [];
    }
    message.uploadBatchId !== undefined && (obj.uploadBatchId = message.uploadBatchId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginHTTPUploadRequest>, I>>(base?: I): CCloudBeginHTTPUploadRequest {
    return CCloudBeginHTTPUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginHTTPUploadRequest>, I>>(object: I): CCloudBeginHTTPUploadRequest {
    const message = createBaseCCloudBeginHTTPUploadRequest();
    message.appid = object.appid ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.filename = object.filename ?? "";
    message.fileSha = object.fileSha ?? "";
    message.isPublic = object.isPublic ?? false;
    message.platformsToSync = object.platformsToSync?.map((e) => e) || [];
    message.requestHeadersNames = object.requestHeadersNames?.map((e) => e) || [];
    message.requestHeadersValues = object.requestHeadersValues?.map((e) => e) || [];
    message.uploadBatchId = object.uploadBatchId ?? "0";
    return message;
  },
};

function createBaseCCloudBeginHTTPUploadResponse(): CCloudBeginHTTPUploadResponse {
  return { ugcid: "0", timestamp: 0, urlHost: "", urlPath: "", useHttps: false, requestHeaders: [] };
}

export const CCloudBeginHTTPUploadResponse = {
  encode(message: CCloudBeginHTTPUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ugcid !== "0") {
      writer.uint32(9).fixed64(message.ugcid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(21).fixed32(message.timestamp);
    }
    if (message.urlHost !== "") {
      writer.uint32(26).string(message.urlHost);
    }
    if (message.urlPath !== "") {
      writer.uint32(34).string(message.urlPath);
    }
    if (message.useHttps === true) {
      writer.uint32(40).bool(message.useHttps);
    }
    for (const v of message.requestHeaders) {
      CCloudBeginHTTPUploadResponse_HTTPHeaders.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginHTTPUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginHTTPUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ugcid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.timestamp = reader.fixed32();
          break;
        case 3:
          message.urlHost = reader.string();
          break;
        case 4:
          message.urlPath = reader.string();
          break;
        case 5:
          message.useHttps = reader.bool();
          break;
        case 6:
          message.requestHeaders.push(CCloudBeginHTTPUploadResponse_HTTPHeaders.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginHTTPUploadResponse {
    return {
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      urlHost: isSet(object.urlHost) ? String(object.urlHost) : "",
      urlPath: isSet(object.urlPath) ? String(object.urlPath) : "",
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      requestHeaders: Array.isArray(object?.requestHeaders)
        ? object.requestHeaders.map((e: any) => CCloudBeginHTTPUploadResponse_HTTPHeaders.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudBeginHTTPUploadResponse): unknown {
    const obj: any = {};
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.urlHost !== undefined && (obj.urlHost = message.urlHost);
    message.urlPath !== undefined && (obj.urlPath = message.urlPath);
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    if (message.requestHeaders) {
      obj.requestHeaders = message.requestHeaders.map((e) =>
        e ? CCloudBeginHTTPUploadResponse_HTTPHeaders.toJSON(e) : undefined
      );
    } else {
      obj.requestHeaders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginHTTPUploadResponse>, I>>(base?: I): CCloudBeginHTTPUploadResponse {
    return CCloudBeginHTTPUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginHTTPUploadResponse>, I>>(
    object: I,
  ): CCloudBeginHTTPUploadResponse {
    const message = createBaseCCloudBeginHTTPUploadResponse();
    message.ugcid = object.ugcid ?? "0";
    message.timestamp = object.timestamp ?? 0;
    message.urlHost = object.urlHost ?? "";
    message.urlPath = object.urlPath ?? "";
    message.useHttps = object.useHttps ?? false;
    message.requestHeaders =
      object.requestHeaders?.map((e) => CCloudBeginHTTPUploadResponse_HTTPHeaders.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudBeginHTTPUploadResponse_HTTPHeaders(): CCloudBeginHTTPUploadResponse_HTTPHeaders {
  return { name: "", value: "" };
}

export const CCloudBeginHTTPUploadResponse_HTTPHeaders = {
  encode(message: CCloudBeginHTTPUploadResponse_HTTPHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginHTTPUploadResponse_HTTPHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginHTTPUploadResponse_HTTPHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): CCloudBeginHTTPUploadResponse_HTTPHeaders {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CCloudBeginHTTPUploadResponse_HTTPHeaders): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginHTTPUploadResponse_HTTPHeaders>, I>>(
    base?: I,
  ): CCloudBeginHTTPUploadResponse_HTTPHeaders {
    return CCloudBeginHTTPUploadResponse_HTTPHeaders.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginHTTPUploadResponse_HTTPHeaders>, I>>(
    object: I,
  ): CCloudBeginHTTPUploadResponse_HTTPHeaders {
    const message = createBaseCCloudBeginHTTPUploadResponse_HTTPHeaders();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCCloudCommitHTTPUploadRequest(): CCloudCommitHTTPUploadRequest {
  return { transferSucceeded: false, appid: 0, fileSha: "", filename: "" };
}

export const CCloudCommitHTTPUploadRequest = {
  encode(message: CCloudCommitHTTPUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferSucceeded === true) {
      writer.uint32(8).bool(message.transferSucceeded);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.fileSha !== "") {
      writer.uint32(26).string(message.fileSha);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCommitHTTPUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCommitHTTPUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferSucceeded = reader.bool();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.fileSha = reader.string();
          break;
        case 4:
          message.filename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCommitHTTPUploadRequest {
    return {
      transferSucceeded: isSet(object.transferSucceeded) ? Boolean(object.transferSucceeded) : false,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSha: isSet(object.fileSha) ? String(object.fileSha) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
    };
  },

  toJSON(message: CCloudCommitHTTPUploadRequest): unknown {
    const obj: any = {};
    message.transferSucceeded !== undefined && (obj.transferSucceeded = message.transferSucceeded);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSha !== undefined && (obj.fileSha = message.fileSha);
    message.filename !== undefined && (obj.filename = message.filename);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCommitHTTPUploadRequest>, I>>(base?: I): CCloudCommitHTTPUploadRequest {
    return CCloudCommitHTTPUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCommitHTTPUploadRequest>, I>>(
    object: I,
  ): CCloudCommitHTTPUploadRequest {
    const message = createBaseCCloudCommitHTTPUploadRequest();
    message.transferSucceeded = object.transferSucceeded ?? false;
    message.appid = object.appid ?? 0;
    message.fileSha = object.fileSha ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseCCloudCommitHTTPUploadResponse(): CCloudCommitHTTPUploadResponse {
  return { fileCommitted: false };
}

export const CCloudCommitHTTPUploadResponse = {
  encode(message: CCloudCommitHTTPUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileCommitted === true) {
      writer.uint32(8).bool(message.fileCommitted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCommitHTTPUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCommitHTTPUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileCommitted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCommitHTTPUploadResponse {
    return { fileCommitted: isSet(object.fileCommitted) ? Boolean(object.fileCommitted) : false };
  },

  toJSON(message: CCloudCommitHTTPUploadResponse): unknown {
    const obj: any = {};
    message.fileCommitted !== undefined && (obj.fileCommitted = message.fileCommitted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCommitHTTPUploadResponse>, I>>(base?: I): CCloudCommitHTTPUploadResponse {
    return CCloudCommitHTTPUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCommitHTTPUploadResponse>, I>>(
    object: I,
  ): CCloudCommitHTTPUploadResponse {
    const message = createBaseCCloudCommitHTTPUploadResponse();
    message.fileCommitted = object.fileCommitted ?? false;
    return message;
  },
};

function createBaseCCloudBeginUGCUploadRequest(): CCloudBeginUGCUploadRequest {
  return { appid: 0, fileSize: 0, filename: "", fileSha: "", contentType: "" };
}

export const CCloudBeginUGCUploadRequest = {
  encode(message: CCloudBeginUGCUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).uint32(message.fileSize);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.fileSha !== "") {
      writer.uint32(34).string(message.fileSha);
    }
    if (message.contentType !== "") {
      writer.uint32(42).string(message.contentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginUGCUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginUGCUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.fileSize = reader.uint32();
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.fileSha = reader.string();
          break;
        case 5:
          message.contentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginUGCUploadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      fileSha: isSet(object.fileSha) ? String(object.fileSha) : "",
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
    };
  },

  toJSON(message: CCloudBeginUGCUploadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.filename !== undefined && (obj.filename = message.filename);
    message.fileSha !== undefined && (obj.fileSha = message.fileSha);
    message.contentType !== undefined && (obj.contentType = message.contentType);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginUGCUploadRequest>, I>>(base?: I): CCloudBeginUGCUploadRequest {
    return CCloudBeginUGCUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginUGCUploadRequest>, I>>(object: I): CCloudBeginUGCUploadRequest {
    const message = createBaseCCloudBeginUGCUploadRequest();
    message.appid = object.appid ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.filename = object.filename ?? "";
    message.fileSha = object.fileSha ?? "";
    message.contentType = object.contentType ?? "";
    return message;
  },
};

function createBaseCCloudBeginUGCUploadResponse(): CCloudBeginUGCUploadResponse {
  return { storageSystem: 0, ugcid: "0", timestamp: 0, urlHost: "", urlPath: "", useHttps: false, requestHeaders: [] };
}

export const CCloudBeginUGCUploadResponse = {
  encode(message: CCloudBeginUGCUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storageSystem !== 0) {
      writer.uint32(8).int32(message.storageSystem);
    }
    if (message.ugcid !== "0") {
      writer.uint32(17).fixed64(message.ugcid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(29).fixed32(message.timestamp);
    }
    if (message.urlHost !== "") {
      writer.uint32(34).string(message.urlHost);
    }
    if (message.urlPath !== "") {
      writer.uint32(42).string(message.urlPath);
    }
    if (message.useHttps === true) {
      writer.uint32(48).bool(message.useHttps);
    }
    for (const v of message.requestHeaders) {
      CCloudBeginUGCUploadResponse_HTTPHeaders.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginUGCUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginUGCUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageSystem = reader.int32() as any;
          break;
        case 2:
          message.ugcid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.timestamp = reader.fixed32();
          break;
        case 4:
          message.urlHost = reader.string();
          break;
        case 5:
          message.urlPath = reader.string();
          break;
        case 6:
          message.useHttps = reader.bool();
          break;
        case 7:
          message.requestHeaders.push(CCloudBeginUGCUploadResponse_HTTPHeaders.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginUGCUploadResponse {
    return {
      storageSystem: isSet(object.storageSystem) ? ePublishedFileStorageSystemFromJSON(object.storageSystem) : 0,
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      urlHost: isSet(object.urlHost) ? String(object.urlHost) : "",
      urlPath: isSet(object.urlPath) ? String(object.urlPath) : "",
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      requestHeaders: Array.isArray(object?.requestHeaders)
        ? object.requestHeaders.map((e: any) => CCloudBeginUGCUploadResponse_HTTPHeaders.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudBeginUGCUploadResponse): unknown {
    const obj: any = {};
    message.storageSystem !== undefined &&
      (obj.storageSystem = ePublishedFileStorageSystemToJSON(message.storageSystem));
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.urlHost !== undefined && (obj.urlHost = message.urlHost);
    message.urlPath !== undefined && (obj.urlPath = message.urlPath);
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    if (message.requestHeaders) {
      obj.requestHeaders = message.requestHeaders.map((e) =>
        e ? CCloudBeginUGCUploadResponse_HTTPHeaders.toJSON(e) : undefined
      );
    } else {
      obj.requestHeaders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginUGCUploadResponse>, I>>(base?: I): CCloudBeginUGCUploadResponse {
    return CCloudBeginUGCUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginUGCUploadResponse>, I>>(object: I): CCloudBeginUGCUploadResponse {
    const message = createBaseCCloudBeginUGCUploadResponse();
    message.storageSystem = object.storageSystem ?? 0;
    message.ugcid = object.ugcid ?? "0";
    message.timestamp = object.timestamp ?? 0;
    message.urlHost = object.urlHost ?? "";
    message.urlPath = object.urlPath ?? "";
    message.useHttps = object.useHttps ?? false;
    message.requestHeaders =
      object.requestHeaders?.map((e) => CCloudBeginUGCUploadResponse_HTTPHeaders.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudBeginUGCUploadResponse_HTTPHeaders(): CCloudBeginUGCUploadResponse_HTTPHeaders {
  return { name: "", value: "" };
}

export const CCloudBeginUGCUploadResponse_HTTPHeaders = {
  encode(message: CCloudBeginUGCUploadResponse_HTTPHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginUGCUploadResponse_HTTPHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginUGCUploadResponse_HTTPHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): CCloudBeginUGCUploadResponse_HTTPHeaders {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CCloudBeginUGCUploadResponse_HTTPHeaders): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginUGCUploadResponse_HTTPHeaders>, I>>(
    base?: I,
  ): CCloudBeginUGCUploadResponse_HTTPHeaders {
    return CCloudBeginUGCUploadResponse_HTTPHeaders.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginUGCUploadResponse_HTTPHeaders>, I>>(
    object: I,
  ): CCloudBeginUGCUploadResponse_HTTPHeaders {
    const message = createBaseCCloudBeginUGCUploadResponse_HTTPHeaders();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCCloudCommitUGCUploadRequest(): CCloudCommitUGCUploadRequest {
  return { transferSucceeded: false, appid: 0, ugcid: "0" };
}

export const CCloudCommitUGCUploadRequest = {
  encode(message: CCloudCommitUGCUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferSucceeded === true) {
      writer.uint32(8).bool(message.transferSucceeded);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.ugcid !== "0") {
      writer.uint32(25).fixed64(message.ugcid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCommitUGCUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCommitUGCUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferSucceeded = reader.bool();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.ugcid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCommitUGCUploadRequest {
    return {
      transferSucceeded: isSet(object.transferSucceeded) ? Boolean(object.transferSucceeded) : false,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
    };
  },

  toJSON(message: CCloudCommitUGCUploadRequest): unknown {
    const obj: any = {};
    message.transferSucceeded !== undefined && (obj.transferSucceeded = message.transferSucceeded);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCommitUGCUploadRequest>, I>>(base?: I): CCloudCommitUGCUploadRequest {
    return CCloudCommitUGCUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCommitUGCUploadRequest>, I>>(object: I): CCloudCommitUGCUploadRequest {
    const message = createBaseCCloudCommitUGCUploadRequest();
    message.transferSucceeded = object.transferSucceeded ?? false;
    message.appid = object.appid ?? 0;
    message.ugcid = object.ugcid ?? "0";
    return message;
  },
};

function createBaseCCloudCommitUGCUploadResponse(): CCloudCommitUGCUploadResponse {
  return { fileCommitted: false };
}

export const CCloudCommitUGCUploadResponse = {
  encode(message: CCloudCommitUGCUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileCommitted === true) {
      writer.uint32(8).bool(message.fileCommitted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCommitUGCUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCommitUGCUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileCommitted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCommitUGCUploadResponse {
    return { fileCommitted: isSet(object.fileCommitted) ? Boolean(object.fileCommitted) : false };
  },

  toJSON(message: CCloudCommitUGCUploadResponse): unknown {
    const obj: any = {};
    message.fileCommitted !== undefined && (obj.fileCommitted = message.fileCommitted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCommitUGCUploadResponse>, I>>(base?: I): CCloudCommitUGCUploadResponse {
    return CCloudCommitUGCUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCommitUGCUploadResponse>, I>>(
    object: I,
  ): CCloudCommitUGCUploadResponse {
    const message = createBaseCCloudCommitUGCUploadResponse();
    message.fileCommitted = object.fileCommitted ?? false;
    return message;
  },
};

function createBaseCCloudGetFileDetailsRequest(): CCloudGetFileDetailsRequest {
  return { ugcid: "0", appid: 0 };
}

export const CCloudGetFileDetailsRequest = {
  encode(message: CCloudGetFileDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ugcid !== "0") {
      writer.uint32(8).uint64(message.ugcid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetFileDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetFileDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ugcid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetFileDetailsRequest {
    return {
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CCloudGetFileDetailsRequest): unknown {
    const obj: any = {};
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetFileDetailsRequest>, I>>(base?: I): CCloudGetFileDetailsRequest {
    return CCloudGetFileDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetFileDetailsRequest>, I>>(object: I): CCloudGetFileDetailsRequest {
    const message = createBaseCCloudGetFileDetailsRequest();
    message.ugcid = object.ugcid ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCCloudUserFile(): CCloudUserFile {
  return {
    appid: 0,
    ugcid: "0",
    filename: "",
    timestamp: "0",
    fileSize: 0,
    url: "",
    steamidCreator: "0",
    flags: 0,
    platformsToSync: [],
    fileSha: "",
  };
}

export const CCloudUserFile = {
  encode(message: CCloudUserFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.ugcid !== "0") {
      writer.uint32(16).uint64(message.ugcid);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.timestamp !== "0") {
      writer.uint32(32).uint64(message.timestamp);
    }
    if (message.fileSize !== 0) {
      writer.uint32(40).uint32(message.fileSize);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.steamidCreator !== "0") {
      writer.uint32(57).fixed64(message.steamidCreator);
    }
    if (message.flags !== 0) {
      writer.uint32(64).uint32(message.flags);
    }
    for (const v of message.platformsToSync) {
      writer.uint32(74).string(v!);
    }
    if (message.fileSha !== "") {
      writer.uint32(82).string(message.fileSha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudUserFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudUserFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.ugcid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.timestamp = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.fileSize = reader.uint32();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.steamidCreator = longToString(reader.fixed64() as Long);
          break;
        case 8:
          message.flags = reader.uint32();
          break;
        case 9:
          message.platformsToSync.push(reader.string());
          break;
        case 10:
          message.fileSha = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudUserFile {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      ugcid: isSet(object.ugcid) ? String(object.ugcid) : "0",
      filename: isSet(object.filename) ? String(object.filename) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      steamidCreator: isSet(object.steamidCreator) ? String(object.steamidCreator) : "0",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      platformsToSync: Array.isArray(object?.platformsToSync) ? object.platformsToSync.map((e: any) => String(e)) : [],
      fileSha: isSet(object.fileSha) ? String(object.fileSha) : "",
    };
  },

  toJSON(message: CCloudUserFile): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.ugcid !== undefined && (obj.ugcid = message.ugcid);
    message.filename !== undefined && (obj.filename = message.filename);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.url !== undefined && (obj.url = message.url);
    message.steamidCreator !== undefined && (obj.steamidCreator = message.steamidCreator);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    if (message.platformsToSync) {
      obj.platformsToSync = message.platformsToSync.map((e) => e);
    } else {
      obj.platformsToSync = [];
    }
    message.fileSha !== undefined && (obj.fileSha = message.fileSha);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudUserFile>, I>>(base?: I): CCloudUserFile {
    return CCloudUserFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudUserFile>, I>>(object: I): CCloudUserFile {
    const message = createBaseCCloudUserFile();
    message.appid = object.appid ?? 0;
    message.ugcid = object.ugcid ?? "0";
    message.filename = object.filename ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.fileSize = object.fileSize ?? 0;
    message.url = object.url ?? "";
    message.steamidCreator = object.steamidCreator ?? "0";
    message.flags = object.flags ?? 0;
    message.platformsToSync = object.platformsToSync?.map((e) => e) || [];
    message.fileSha = object.fileSha ?? "";
    return message;
  },
};

function createBaseCCloudGetFileDetailsResponse(): CCloudGetFileDetailsResponse {
  return { details: undefined };
}

export const CCloudGetFileDetailsResponse = {
  encode(message: CCloudGetFileDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      CCloudUserFile.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetFileDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetFileDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.details = CCloudUserFile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetFileDetailsResponse {
    return { details: isSet(object.details) ? CCloudUserFile.fromJSON(object.details) : undefined };
  },

  toJSON(message: CCloudGetFileDetailsResponse): unknown {
    const obj: any = {};
    message.details !== undefined &&
      (obj.details = message.details ? CCloudUserFile.toJSON(message.details) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetFileDetailsResponse>, I>>(base?: I): CCloudGetFileDetailsResponse {
    return CCloudGetFileDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetFileDetailsResponse>, I>>(object: I): CCloudGetFileDetailsResponse {
    const message = createBaseCCloudGetFileDetailsResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? CCloudUserFile.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseCCloudEnumerateUserFilesRequest(): CCloudEnumerateUserFilesRequest {
  return { appid: 0, extendedDetails: false, count: 0, startIndex: 0 };
}

export const CCloudEnumerateUserFilesRequest = {
  encode(message: CCloudEnumerateUserFilesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.extendedDetails === true) {
      writer.uint32(16).bool(message.extendedDetails);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.startIndex !== 0) {
      writer.uint32(32).uint32(message.startIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserFilesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserFilesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.extendedDetails = reader.bool();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        case 4:
          message.startIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserFilesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      extendedDetails: isSet(object.extendedDetails) ? Boolean(object.extendedDetails) : false,
      count: isSet(object.count) ? Number(object.count) : 0,
      startIndex: isSet(object.startIndex) ? Number(object.startIndex) : 0,
    };
  },

  toJSON(message: CCloudEnumerateUserFilesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.extendedDetails !== undefined && (obj.extendedDetails = message.extendedDetails);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.startIndex !== undefined && (obj.startIndex = Math.round(message.startIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudEnumerateUserFilesRequest>, I>>(base?: I): CCloudEnumerateUserFilesRequest {
    return CCloudEnumerateUserFilesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudEnumerateUserFilesRequest>, I>>(
    object: I,
  ): CCloudEnumerateUserFilesRequest {
    const message = createBaseCCloudEnumerateUserFilesRequest();
    message.appid = object.appid ?? 0;
    message.extendedDetails = object.extendedDetails ?? false;
    message.count = object.count ?? 0;
    message.startIndex = object.startIndex ?? 0;
    return message;
  },
};

function createBaseCCloudEnumerateUserFilesResponse(): CCloudEnumerateUserFilesResponse {
  return { files: [], totalFiles: 0 };
}

export const CCloudEnumerateUserFilesResponse = {
  encode(message: CCloudEnumerateUserFilesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.files) {
      CCloudUserFile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalFiles !== 0) {
      writer.uint32(16).uint32(message.totalFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserFilesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserFilesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(CCloudUserFile.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalFiles = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserFilesResponse {
    return {
      files: Array.isArray(object?.files) ? object.files.map((e: any) => CCloudUserFile.fromJSON(e)) : [],
      totalFiles: isSet(object.totalFiles) ? Number(object.totalFiles) : 0,
    };
  },

  toJSON(message: CCloudEnumerateUserFilesResponse): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e ? CCloudUserFile.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.totalFiles !== undefined && (obj.totalFiles = Math.round(message.totalFiles));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudEnumerateUserFilesResponse>, I>>(
    base?: I,
  ): CCloudEnumerateUserFilesResponse {
    return CCloudEnumerateUserFilesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudEnumerateUserFilesResponse>, I>>(
    object: I,
  ): CCloudEnumerateUserFilesResponse {
    const message = createBaseCCloudEnumerateUserFilesResponse();
    message.files = object.files?.map((e) => CCloudUserFile.fromPartial(e)) || [];
    message.totalFiles = object.totalFiles ?? 0;
    return message;
  },
};

function createBaseCCloudDeleteRequest(): CCloudDeleteRequest {
  return { filename: "", appid: 0, uploadBatchId: "0" };
}

export const CCloudDeleteRequest = {
  encode(message: CCloudDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.uploadBatchId !== "0") {
      writer.uint32(24).uint64(message.uploadBatchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.uploadBatchId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudDeleteRequest {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      uploadBatchId: isSet(object.uploadBatchId) ? String(object.uploadBatchId) : "0",
    };
  },

  toJSON(message: CCloudDeleteRequest): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.uploadBatchId !== undefined && (obj.uploadBatchId = message.uploadBatchId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudDeleteRequest>, I>>(base?: I): CCloudDeleteRequest {
    return CCloudDeleteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudDeleteRequest>, I>>(object: I): CCloudDeleteRequest {
    const message = createBaseCCloudDeleteRequest();
    message.filename = object.filename ?? "";
    message.appid = object.appid ?? 0;
    message.uploadBatchId = object.uploadBatchId ?? "0";
    return message;
  },
};

function createBaseCCloudDeleteResponse(): CCloudDeleteResponse {
  return {};
}

export const CCloudDeleteResponse = {
  encode(_: CCloudDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudDeleteResponse();
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

  fromJSON(_: any): CCloudDeleteResponse {
    return {};
  },

  toJSON(_: CCloudDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudDeleteResponse>, I>>(base?: I): CCloudDeleteResponse {
    return CCloudDeleteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudDeleteResponse>, I>>(_: I): CCloudDeleteResponse {
    const message = createBaseCCloudDeleteResponse();
    return message;
  },
};

function createBaseCCloudGetClientEncryptionKeyRequest(): CCloudGetClientEncryptionKeyRequest {
  return {};
}

export const CCloudGetClientEncryptionKeyRequest = {
  encode(_: CCloudGetClientEncryptionKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetClientEncryptionKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetClientEncryptionKeyRequest();
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

  fromJSON(_: any): CCloudGetClientEncryptionKeyRequest {
    return {};
  },

  toJSON(_: CCloudGetClientEncryptionKeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetClientEncryptionKeyRequest>, I>>(
    base?: I,
  ): CCloudGetClientEncryptionKeyRequest {
    return CCloudGetClientEncryptionKeyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetClientEncryptionKeyRequest>, I>>(
    _: I,
  ): CCloudGetClientEncryptionKeyRequest {
    const message = createBaseCCloudGetClientEncryptionKeyRequest();
    return message;
  },
};

function createBaseCCloudGetClientEncryptionKeyResponse(): CCloudGetClientEncryptionKeyResponse {
  return { key: Buffer.alloc(0), crc: 0 };
}

export const CCloudGetClientEncryptionKeyResponse = {
  encode(message: CCloudGetClientEncryptionKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.crc !== 0) {
      writer.uint32(16).int32(message.crc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetClientEncryptionKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetClientEncryptionKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes() as Buffer;
          break;
        case 2:
          message.crc = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetClientEncryptionKeyResponse {
    return {
      key: isSet(object.key) ? Buffer.from(bytesFromBase64(object.key)) : Buffer.alloc(0),
      crc: isSet(object.crc) ? Number(object.crc) : 0,
    };
  },

  toJSON(message: CCloudGetClientEncryptionKeyResponse): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : Buffer.alloc(0)));
    message.crc !== undefined && (obj.crc = Math.round(message.crc));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetClientEncryptionKeyResponse>, I>>(
    base?: I,
  ): CCloudGetClientEncryptionKeyResponse {
    return CCloudGetClientEncryptionKeyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetClientEncryptionKeyResponse>, I>>(
    object: I,
  ): CCloudGetClientEncryptionKeyResponse {
    const message = createBaseCCloudGetClientEncryptionKeyResponse();
    message.key = object.key ?? Buffer.alloc(0);
    message.crc = object.crc ?? 0;
    return message;
  },
};

function createBaseCCloudCDNReportNotification(): CCloudCDNReportNotification {
  return {
    steamid: "0",
    url: "",
    success: false,
    httpStatusCode: 0,
    expectedBytes: "0",
    receivedBytes: "0",
    duration: 0,
  };
}

export const CCloudCDNReportNotification = {
  encode(message: CCloudCDNReportNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.success === true) {
      writer.uint32(24).bool(message.success);
    }
    if (message.httpStatusCode !== 0) {
      writer.uint32(32).uint32(message.httpStatusCode);
    }
    if (message.expectedBytes !== "0") {
      writer.uint32(40).uint64(message.expectedBytes);
    }
    if (message.receivedBytes !== "0") {
      writer.uint32(48).uint64(message.receivedBytes);
    }
    if (message.duration !== 0) {
      writer.uint32(56).uint32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCDNReportNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCDNReportNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.success = reader.bool();
          break;
        case 4:
          message.httpStatusCode = reader.uint32();
          break;
        case 5:
          message.expectedBytes = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.receivedBytes = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.duration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCDNReportNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      url: isSet(object.url) ? String(object.url) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      httpStatusCode: isSet(object.httpStatusCode) ? Number(object.httpStatusCode) : 0,
      expectedBytes: isSet(object.expectedBytes) ? String(object.expectedBytes) : "0",
      receivedBytes: isSet(object.receivedBytes) ? String(object.receivedBytes) : "0",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CCloudCDNReportNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.url !== undefined && (obj.url = message.url);
    message.success !== undefined && (obj.success = message.success);
    message.httpStatusCode !== undefined && (obj.httpStatusCode = Math.round(message.httpStatusCode));
    message.expectedBytes !== undefined && (obj.expectedBytes = message.expectedBytes);
    message.receivedBytes !== undefined && (obj.receivedBytes = message.receivedBytes);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCDNReportNotification>, I>>(base?: I): CCloudCDNReportNotification {
    return CCloudCDNReportNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCDNReportNotification>, I>>(object: I): CCloudCDNReportNotification {
    const message = createBaseCCloudCDNReportNotification();
    message.steamid = object.steamid ?? "0";
    message.url = object.url ?? "";
    message.success = object.success ?? false;
    message.httpStatusCode = object.httpStatusCode ?? 0;
    message.expectedBytes = object.expectedBytes ?? "0";
    message.receivedBytes = object.receivedBytes ?? "0";
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseCCloudExternalStorageTransferReportNotification(): CCloudExternalStorageTransferReportNotification {
  return {
    host: "",
    path: "",
    isUpload: false,
    success: false,
    httpStatusCode: 0,
    bytesExpected: "0",
    bytesActual: "0",
    durationMs: 0,
    cellid: 0,
    proxied: false,
    ipv6Local: false,
    ipv6Remote: false,
    timeToConnectMs: 0,
    timeToSendReqMs: 0,
    timeToFirstByteMs: 0,
    timeToLastByteMs: 0,
  };
}

export const CCloudExternalStorageTransferReportNotification = {
  encode(
    message: CCloudExternalStorageTransferReportNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.isUpload === true) {
      writer.uint32(24).bool(message.isUpload);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.httpStatusCode !== 0) {
      writer.uint32(40).uint32(message.httpStatusCode);
    }
    if (message.bytesExpected !== "0") {
      writer.uint32(48).uint64(message.bytesExpected);
    }
    if (message.bytesActual !== "0") {
      writer.uint32(56).uint64(message.bytesActual);
    }
    if (message.durationMs !== 0) {
      writer.uint32(64).uint32(message.durationMs);
    }
    if (message.cellid !== 0) {
      writer.uint32(72).uint32(message.cellid);
    }
    if (message.proxied === true) {
      writer.uint32(80).bool(message.proxied);
    }
    if (message.ipv6Local === true) {
      writer.uint32(88).bool(message.ipv6Local);
    }
    if (message.ipv6Remote === true) {
      writer.uint32(96).bool(message.ipv6Remote);
    }
    if (message.timeToConnectMs !== 0) {
      writer.uint32(104).uint32(message.timeToConnectMs);
    }
    if (message.timeToSendReqMs !== 0) {
      writer.uint32(112).uint32(message.timeToSendReqMs);
    }
    if (message.timeToFirstByteMs !== 0) {
      writer.uint32(120).uint32(message.timeToFirstByteMs);
    }
    if (message.timeToLastByteMs !== 0) {
      writer.uint32(128).uint32(message.timeToLastByteMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudExternalStorageTransferReportNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudExternalStorageTransferReportNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.isUpload = reader.bool();
          break;
        case 4:
          message.success = reader.bool();
          break;
        case 5:
          message.httpStatusCode = reader.uint32();
          break;
        case 6:
          message.bytesExpected = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.bytesActual = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.durationMs = reader.uint32();
          break;
        case 9:
          message.cellid = reader.uint32();
          break;
        case 10:
          message.proxied = reader.bool();
          break;
        case 11:
          message.ipv6Local = reader.bool();
          break;
        case 12:
          message.ipv6Remote = reader.bool();
          break;
        case 13:
          message.timeToConnectMs = reader.uint32();
          break;
        case 14:
          message.timeToSendReqMs = reader.uint32();
          break;
        case 15:
          message.timeToFirstByteMs = reader.uint32();
          break;
        case 16:
          message.timeToLastByteMs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudExternalStorageTransferReportNotification {
    return {
      host: isSet(object.host) ? String(object.host) : "",
      path: isSet(object.path) ? String(object.path) : "",
      isUpload: isSet(object.isUpload) ? Boolean(object.isUpload) : false,
      success: isSet(object.success) ? Boolean(object.success) : false,
      httpStatusCode: isSet(object.httpStatusCode) ? Number(object.httpStatusCode) : 0,
      bytesExpected: isSet(object.bytesExpected) ? String(object.bytesExpected) : "0",
      bytesActual: isSet(object.bytesActual) ? String(object.bytesActual) : "0",
      durationMs: isSet(object.durationMs) ? Number(object.durationMs) : 0,
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      proxied: isSet(object.proxied) ? Boolean(object.proxied) : false,
      ipv6Local: isSet(object.ipv6Local) ? Boolean(object.ipv6Local) : false,
      ipv6Remote: isSet(object.ipv6Remote) ? Boolean(object.ipv6Remote) : false,
      timeToConnectMs: isSet(object.timeToConnectMs) ? Number(object.timeToConnectMs) : 0,
      timeToSendReqMs: isSet(object.timeToSendReqMs) ? Number(object.timeToSendReqMs) : 0,
      timeToFirstByteMs: isSet(object.timeToFirstByteMs) ? Number(object.timeToFirstByteMs) : 0,
      timeToLastByteMs: isSet(object.timeToLastByteMs) ? Number(object.timeToLastByteMs) : 0,
    };
  },

  toJSON(message: CCloudExternalStorageTransferReportNotification): unknown {
    const obj: any = {};
    message.host !== undefined && (obj.host = message.host);
    message.path !== undefined && (obj.path = message.path);
    message.isUpload !== undefined && (obj.isUpload = message.isUpload);
    message.success !== undefined && (obj.success = message.success);
    message.httpStatusCode !== undefined && (obj.httpStatusCode = Math.round(message.httpStatusCode));
    message.bytesExpected !== undefined && (obj.bytesExpected = message.bytesExpected);
    message.bytesActual !== undefined && (obj.bytesActual = message.bytesActual);
    message.durationMs !== undefined && (obj.durationMs = Math.round(message.durationMs));
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.proxied !== undefined && (obj.proxied = message.proxied);
    message.ipv6Local !== undefined && (obj.ipv6Local = message.ipv6Local);
    message.ipv6Remote !== undefined && (obj.ipv6Remote = message.ipv6Remote);
    message.timeToConnectMs !== undefined && (obj.timeToConnectMs = Math.round(message.timeToConnectMs));
    message.timeToSendReqMs !== undefined && (obj.timeToSendReqMs = Math.round(message.timeToSendReqMs));
    message.timeToFirstByteMs !== undefined && (obj.timeToFirstByteMs = Math.round(message.timeToFirstByteMs));
    message.timeToLastByteMs !== undefined && (obj.timeToLastByteMs = Math.round(message.timeToLastByteMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudExternalStorageTransferReportNotification>, I>>(
    base?: I,
  ): CCloudExternalStorageTransferReportNotification {
    return CCloudExternalStorageTransferReportNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudExternalStorageTransferReportNotification>, I>>(
    object: I,
  ): CCloudExternalStorageTransferReportNotification {
    const message = createBaseCCloudExternalStorageTransferReportNotification();
    message.host = object.host ?? "";
    message.path = object.path ?? "";
    message.isUpload = object.isUpload ?? false;
    message.success = object.success ?? false;
    message.httpStatusCode = object.httpStatusCode ?? 0;
    message.bytesExpected = object.bytesExpected ?? "0";
    message.bytesActual = object.bytesActual ?? "0";
    message.durationMs = object.durationMs ?? 0;
    message.cellid = object.cellid ?? 0;
    message.proxied = object.proxied ?? false;
    message.ipv6Local = object.ipv6Local ?? false;
    message.ipv6Remote = object.ipv6Remote ?? false;
    message.timeToConnectMs = object.timeToConnectMs ?? 0;
    message.timeToSendReqMs = object.timeToSendReqMs ?? 0;
    message.timeToFirstByteMs = object.timeToFirstByteMs ?? 0;
    message.timeToLastByteMs = object.timeToLastByteMs ?? 0;
    return message;
  },
};

function createBaseCCloudBeginAppUploadBatchRequest(): CCloudBeginAppUploadBatchRequest {
  return { appid: 0, machineName: "", filesToUpload: [], filesToDelete: [], clientId: "0", appBuildId: "0" };
}

export const CCloudBeginAppUploadBatchRequest = {
  encode(message: CCloudBeginAppUploadBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.machineName !== "") {
      writer.uint32(18).string(message.machineName);
    }
    for (const v of message.filesToUpload) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.filesToDelete) {
      writer.uint32(34).string(v!);
    }
    if (message.clientId !== "0") {
      writer.uint32(40).uint64(message.clientId);
    }
    if (message.appBuildId !== "0") {
      writer.uint32(48).uint64(message.appBuildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginAppUploadBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginAppUploadBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.machineName = reader.string();
          break;
        case 3:
          message.filesToUpload.push(reader.string());
          break;
        case 4:
          message.filesToDelete.push(reader.string());
          break;
        case 5:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.appBuildId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginAppUploadBatchRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      filesToUpload: Array.isArray(object?.filesToUpload) ? object.filesToUpload.map((e: any) => String(e)) : [],
      filesToDelete: Array.isArray(object?.filesToDelete) ? object.filesToDelete.map((e: any) => String(e)) : [],
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      appBuildId: isSet(object.appBuildId) ? String(object.appBuildId) : "0",
    };
  },

  toJSON(message: CCloudBeginAppUploadBatchRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    if (message.filesToUpload) {
      obj.filesToUpload = message.filesToUpload.map((e) => e);
    } else {
      obj.filesToUpload = [];
    }
    if (message.filesToDelete) {
      obj.filesToDelete = message.filesToDelete.map((e) => e);
    } else {
      obj.filesToDelete = [];
    }
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.appBuildId !== undefined && (obj.appBuildId = message.appBuildId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginAppUploadBatchRequest>, I>>(
    base?: I,
  ): CCloudBeginAppUploadBatchRequest {
    return CCloudBeginAppUploadBatchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginAppUploadBatchRequest>, I>>(
    object: I,
  ): CCloudBeginAppUploadBatchRequest {
    const message = createBaseCCloudBeginAppUploadBatchRequest();
    message.appid = object.appid ?? 0;
    message.machineName = object.machineName ?? "";
    message.filesToUpload = object.filesToUpload?.map((e) => e) || [];
    message.filesToDelete = object.filesToDelete?.map((e) => e) || [];
    message.clientId = object.clientId ?? "0";
    message.appBuildId = object.appBuildId ?? "0";
    return message;
  },
};

function createBaseCCloudBeginAppUploadBatchResponse(): CCloudBeginAppUploadBatchResponse {
  return { batchId: "0", appChangeNumber: "0" };
}

export const CCloudBeginAppUploadBatchResponse = {
  encode(message: CCloudBeginAppUploadBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchId !== "0") {
      writer.uint32(8).uint64(message.batchId);
    }
    if (message.appChangeNumber !== "0") {
      writer.uint32(32).uint64(message.appChangeNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudBeginAppUploadBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudBeginAppUploadBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.appChangeNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudBeginAppUploadBatchResponse {
    return {
      batchId: isSet(object.batchId) ? String(object.batchId) : "0",
      appChangeNumber: isSet(object.appChangeNumber) ? String(object.appChangeNumber) : "0",
    };
  },

  toJSON(message: CCloudBeginAppUploadBatchResponse): unknown {
    const obj: any = {};
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.appChangeNumber !== undefined && (obj.appChangeNumber = message.appChangeNumber);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudBeginAppUploadBatchResponse>, I>>(
    base?: I,
  ): CCloudBeginAppUploadBatchResponse {
    return CCloudBeginAppUploadBatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudBeginAppUploadBatchResponse>, I>>(
    object: I,
  ): CCloudBeginAppUploadBatchResponse {
    const message = createBaseCCloudBeginAppUploadBatchResponse();
    message.batchId = object.batchId ?? "0";
    message.appChangeNumber = object.appChangeNumber ?? "0";
    return message;
  },
};

function createBaseCCloudCompleteAppUploadBatchNotification(): CCloudCompleteAppUploadBatchNotification {
  return { appid: 0, batchId: "0", batchEresult: 0 };
}

export const CCloudCompleteAppUploadBatchNotification = {
  encode(message: CCloudCompleteAppUploadBatchNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.batchId !== "0") {
      writer.uint32(16).uint64(message.batchId);
    }
    if (message.batchEresult !== 0) {
      writer.uint32(24).uint32(message.batchEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCompleteAppUploadBatchNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCompleteAppUploadBatchNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.batchId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.batchEresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCompleteAppUploadBatchNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      batchId: isSet(object.batchId) ? String(object.batchId) : "0",
      batchEresult: isSet(object.batchEresult) ? Number(object.batchEresult) : 0,
    };
  },

  toJSON(message: CCloudCompleteAppUploadBatchNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.batchEresult !== undefined && (obj.batchEresult = Math.round(message.batchEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchNotification>, I>>(
    base?: I,
  ): CCloudCompleteAppUploadBatchNotification {
    return CCloudCompleteAppUploadBatchNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchNotification>, I>>(
    object: I,
  ): CCloudCompleteAppUploadBatchNotification {
    const message = createBaseCCloudCompleteAppUploadBatchNotification();
    message.appid = object.appid ?? 0;
    message.batchId = object.batchId ?? "0";
    message.batchEresult = object.batchEresult ?? 0;
    return message;
  },
};

function createBaseCCloudCompleteAppUploadBatchRequest(): CCloudCompleteAppUploadBatchRequest {
  return { appid: 0, batchId: "0", batchEresult: 0 };
}

export const CCloudCompleteAppUploadBatchRequest = {
  encode(message: CCloudCompleteAppUploadBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.batchId !== "0") {
      writer.uint32(16).uint64(message.batchId);
    }
    if (message.batchEresult !== 0) {
      writer.uint32(24).uint32(message.batchEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCompleteAppUploadBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCompleteAppUploadBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.batchId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.batchEresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudCompleteAppUploadBatchRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      batchId: isSet(object.batchId) ? String(object.batchId) : "0",
      batchEresult: isSet(object.batchEresult) ? Number(object.batchEresult) : 0,
    };
  },

  toJSON(message: CCloudCompleteAppUploadBatchRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.batchEresult !== undefined && (obj.batchEresult = Math.round(message.batchEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchRequest>, I>>(
    base?: I,
  ): CCloudCompleteAppUploadBatchRequest {
    return CCloudCompleteAppUploadBatchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchRequest>, I>>(
    object: I,
  ): CCloudCompleteAppUploadBatchRequest {
    const message = createBaseCCloudCompleteAppUploadBatchRequest();
    message.appid = object.appid ?? 0;
    message.batchId = object.batchId ?? "0";
    message.batchEresult = object.batchEresult ?? 0;
    return message;
  },
};

function createBaseCCloudCompleteAppUploadBatchResponse(): CCloudCompleteAppUploadBatchResponse {
  return {};
}

export const CCloudCompleteAppUploadBatchResponse = {
  encode(_: CCloudCompleteAppUploadBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudCompleteAppUploadBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudCompleteAppUploadBatchResponse();
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

  fromJSON(_: any): CCloudCompleteAppUploadBatchResponse {
    return {};
  },

  toJSON(_: CCloudCompleteAppUploadBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchResponse>, I>>(
    base?: I,
  ): CCloudCompleteAppUploadBatchResponse {
    return CCloudCompleteAppUploadBatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudCompleteAppUploadBatchResponse>, I>>(
    _: I,
  ): CCloudCompleteAppUploadBatchResponse {
    const message = createBaseCCloudCompleteAppUploadBatchResponse();
    return message;
  },
};

function createBaseCCloudClientBeginFileUploadRequest(): CCloudClientBeginFileUploadRequest {
  return {
    appid: 0,
    fileSize: 0,
    rawFileSize: 0,
    fileSha: Buffer.alloc(0),
    timeStamp: "0",
    filename: "",
    platformsToSync: 0,
    cellId: 0,
    canEncrypt: false,
    isSharedFile: false,
    deprecatedRealm: 0,
    uploadBatchId: "0",
  };
}

export const CCloudClientBeginFileUploadRequest = {
  encode(message: CCloudClientBeginFileUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.fileSize !== 0) {
      writer.uint32(16).uint32(message.fileSize);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(24).uint32(message.rawFileSize);
    }
    if (message.fileSha.length !== 0) {
      writer.uint32(34).bytes(message.fileSha);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(40).uint64(message.timeStamp);
    }
    if (message.filename !== "") {
      writer.uint32(50).string(message.filename);
    }
    if (message.platformsToSync !== 0) {
      writer.uint32(56).uint32(message.platformsToSync);
    }
    if (message.cellId !== 0) {
      writer.uint32(72).uint32(message.cellId);
    }
    if (message.canEncrypt === true) {
      writer.uint32(80).bool(message.canEncrypt);
    }
    if (message.isSharedFile === true) {
      writer.uint32(88).bool(message.isSharedFile);
    }
    if (message.deprecatedRealm !== 0) {
      writer.uint32(96).uint32(message.deprecatedRealm);
    }
    if (message.uploadBatchId !== "0") {
      writer.uint32(104).uint64(message.uploadBatchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientBeginFileUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientBeginFileUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.fileSize = reader.uint32();
          break;
        case 3:
          message.rawFileSize = reader.uint32();
          break;
        case 4:
          message.fileSha = reader.bytes() as Buffer;
          break;
        case 5:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.filename = reader.string();
          break;
        case 7:
          message.platformsToSync = reader.uint32();
          break;
        case 9:
          message.cellId = reader.uint32();
          break;
        case 10:
          message.canEncrypt = reader.bool();
          break;
        case 11:
          message.isSharedFile = reader.bool();
          break;
        case 12:
          message.deprecatedRealm = reader.uint32();
          break;
        case 13:
          message.uploadBatchId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientBeginFileUploadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      fileSha: isSet(object.fileSha) ? Buffer.from(bytesFromBase64(object.fileSha)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      filename: isSet(object.filename) ? String(object.filename) : "",
      platformsToSync: isSet(object.platformsToSync) ? Number(object.platformsToSync) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      canEncrypt: isSet(object.canEncrypt) ? Boolean(object.canEncrypt) : false,
      isSharedFile: isSet(object.isSharedFile) ? Boolean(object.isSharedFile) : false,
      deprecatedRealm: isSet(object.deprecatedRealm) ? Number(object.deprecatedRealm) : 0,
      uploadBatchId: isSet(object.uploadBatchId) ? String(object.uploadBatchId) : "0",
    };
  },

  toJSON(message: CCloudClientBeginFileUploadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.fileSha !== undefined &&
      (obj.fileSha = base64FromBytes(message.fileSha !== undefined ? message.fileSha : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.filename !== undefined && (obj.filename = message.filename);
    message.platformsToSync !== undefined && (obj.platformsToSync = Math.round(message.platformsToSync));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.canEncrypt !== undefined && (obj.canEncrypt = message.canEncrypt);
    message.isSharedFile !== undefined && (obj.isSharedFile = message.isSharedFile);
    message.deprecatedRealm !== undefined && (obj.deprecatedRealm = Math.round(message.deprecatedRealm));
    message.uploadBatchId !== undefined && (obj.uploadBatchId = message.uploadBatchId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientBeginFileUploadRequest>, I>>(
    base?: I,
  ): CCloudClientBeginFileUploadRequest {
    return CCloudClientBeginFileUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientBeginFileUploadRequest>, I>>(
    object: I,
  ): CCloudClientBeginFileUploadRequest {
    const message = createBaseCCloudClientBeginFileUploadRequest();
    message.appid = object.appid ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.rawFileSize = object.rawFileSize ?? 0;
    message.fileSha = object.fileSha ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.filename = object.filename ?? "";
    message.platformsToSync = object.platformsToSync ?? 0;
    message.cellId = object.cellId ?? 0;
    message.canEncrypt = object.canEncrypt ?? false;
    message.isSharedFile = object.isSharedFile ?? false;
    message.deprecatedRealm = object.deprecatedRealm ?? 0;
    message.uploadBatchId = object.uploadBatchId ?? "0";
    return message;
  },
};

function createBaseClientCloudFileUploadBlockDetails(): ClientCloudFileUploadBlockDetails {
  return {
    urlHost: "",
    urlPath: "",
    useHttps: false,
    httpMethod: 0,
    requestHeaders: [],
    blockOffset: "0",
    blockLength: 0,
    explicitBodyData: Buffer.alloc(0),
    mayParallelize: false,
  };
}

export const ClientCloudFileUploadBlockDetails = {
  encode(message: ClientCloudFileUploadBlockDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.urlHost !== "") {
      writer.uint32(10).string(message.urlHost);
    }
    if (message.urlPath !== "") {
      writer.uint32(18).string(message.urlPath);
    }
    if (message.useHttps === true) {
      writer.uint32(24).bool(message.useHttps);
    }
    if (message.httpMethod !== 0) {
      writer.uint32(32).int32(message.httpMethod);
    }
    for (const v of message.requestHeaders) {
      ClientCloudFileUploadBlockDetails_HTTPHeaders.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.blockOffset !== "0") {
      writer.uint32(48).uint64(message.blockOffset);
    }
    if (message.blockLength !== 0) {
      writer.uint32(56).uint32(message.blockLength);
    }
    if (message.explicitBodyData.length !== 0) {
      writer.uint32(66).bytes(message.explicitBodyData);
    }
    if (message.mayParallelize === true) {
      writer.uint32(72).bool(message.mayParallelize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientCloudFileUploadBlockDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientCloudFileUploadBlockDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.urlHost = reader.string();
          break;
        case 2:
          message.urlPath = reader.string();
          break;
        case 3:
          message.useHttps = reader.bool();
          break;
        case 4:
          message.httpMethod = reader.int32();
          break;
        case 5:
          message.requestHeaders.push(ClientCloudFileUploadBlockDetails_HTTPHeaders.decode(reader, reader.uint32()));
          break;
        case 6:
          message.blockOffset = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.blockLength = reader.uint32();
          break;
        case 8:
          message.explicitBodyData = reader.bytes() as Buffer;
          break;
        case 9:
          message.mayParallelize = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientCloudFileUploadBlockDetails {
    return {
      urlHost: isSet(object.urlHost) ? String(object.urlHost) : "",
      urlPath: isSet(object.urlPath) ? String(object.urlPath) : "",
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      httpMethod: isSet(object.httpMethod) ? Number(object.httpMethod) : 0,
      requestHeaders: Array.isArray(object?.requestHeaders)
        ? object.requestHeaders.map((e: any) => ClientCloudFileUploadBlockDetails_HTTPHeaders.fromJSON(e))
        : [],
      blockOffset: isSet(object.blockOffset) ? String(object.blockOffset) : "0",
      blockLength: isSet(object.blockLength) ? Number(object.blockLength) : 0,
      explicitBodyData: isSet(object.explicitBodyData)
        ? Buffer.from(bytesFromBase64(object.explicitBodyData))
        : Buffer.alloc(0),
      mayParallelize: isSet(object.mayParallelize) ? Boolean(object.mayParallelize) : false,
    };
  },

  toJSON(message: ClientCloudFileUploadBlockDetails): unknown {
    const obj: any = {};
    message.urlHost !== undefined && (obj.urlHost = message.urlHost);
    message.urlPath !== undefined && (obj.urlPath = message.urlPath);
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    message.httpMethod !== undefined && (obj.httpMethod = Math.round(message.httpMethod));
    if (message.requestHeaders) {
      obj.requestHeaders = message.requestHeaders.map((e) =>
        e ? ClientCloudFileUploadBlockDetails_HTTPHeaders.toJSON(e) : undefined
      );
    } else {
      obj.requestHeaders = [];
    }
    message.blockOffset !== undefined && (obj.blockOffset = message.blockOffset);
    message.blockLength !== undefined && (obj.blockLength = Math.round(message.blockLength));
    message.explicitBodyData !== undefined &&
      (obj.explicitBodyData = base64FromBytes(
        message.explicitBodyData !== undefined ? message.explicitBodyData : Buffer.alloc(0),
      ));
    message.mayParallelize !== undefined && (obj.mayParallelize = message.mayParallelize);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientCloudFileUploadBlockDetails>, I>>(
    base?: I,
  ): ClientCloudFileUploadBlockDetails {
    return ClientCloudFileUploadBlockDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClientCloudFileUploadBlockDetails>, I>>(
    object: I,
  ): ClientCloudFileUploadBlockDetails {
    const message = createBaseClientCloudFileUploadBlockDetails();
    message.urlHost = object.urlHost ?? "";
    message.urlPath = object.urlPath ?? "";
    message.useHttps = object.useHttps ?? false;
    message.httpMethod = object.httpMethod ?? 0;
    message.requestHeaders =
      object.requestHeaders?.map((e) => ClientCloudFileUploadBlockDetails_HTTPHeaders.fromPartial(e)) || [];
    message.blockOffset = object.blockOffset ?? "0";
    message.blockLength = object.blockLength ?? 0;
    message.explicitBodyData = object.explicitBodyData ?? Buffer.alloc(0);
    message.mayParallelize = object.mayParallelize ?? false;
    return message;
  },
};

function createBaseClientCloudFileUploadBlockDetails_HTTPHeaders(): ClientCloudFileUploadBlockDetails_HTTPHeaders {
  return { name: "", value: "" };
}

export const ClientCloudFileUploadBlockDetails_HTTPHeaders = {
  encode(message: ClientCloudFileUploadBlockDetails_HTTPHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientCloudFileUploadBlockDetails_HTTPHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientCloudFileUploadBlockDetails_HTTPHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): ClientCloudFileUploadBlockDetails_HTTPHeaders {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ClientCloudFileUploadBlockDetails_HTTPHeaders): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientCloudFileUploadBlockDetails_HTTPHeaders>, I>>(
    base?: I,
  ): ClientCloudFileUploadBlockDetails_HTTPHeaders {
    return ClientCloudFileUploadBlockDetails_HTTPHeaders.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClientCloudFileUploadBlockDetails_HTTPHeaders>, I>>(
    object: I,
  ): ClientCloudFileUploadBlockDetails_HTTPHeaders {
    const message = createBaseClientCloudFileUploadBlockDetails_HTTPHeaders();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCCloudClientBeginFileUploadResponse(): CCloudClientBeginFileUploadResponse {
  return { encryptFile: false, blockRequests: [] };
}

export const CCloudClientBeginFileUploadResponse = {
  encode(message: CCloudClientBeginFileUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptFile === true) {
      writer.uint32(8).bool(message.encryptFile);
    }
    for (const v of message.blockRequests) {
      ClientCloudFileUploadBlockDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientBeginFileUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientBeginFileUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptFile = reader.bool();
          break;
        case 2:
          message.blockRequests.push(ClientCloudFileUploadBlockDetails.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientBeginFileUploadResponse {
    return {
      encryptFile: isSet(object.encryptFile) ? Boolean(object.encryptFile) : false,
      blockRequests: Array.isArray(object?.blockRequests)
        ? object.blockRequests.map((e: any) => ClientCloudFileUploadBlockDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudClientBeginFileUploadResponse): unknown {
    const obj: any = {};
    message.encryptFile !== undefined && (obj.encryptFile = message.encryptFile);
    if (message.blockRequests) {
      obj.blockRequests = message.blockRequests.map((e) => e ? ClientCloudFileUploadBlockDetails.toJSON(e) : undefined);
    } else {
      obj.blockRequests = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientBeginFileUploadResponse>, I>>(
    base?: I,
  ): CCloudClientBeginFileUploadResponse {
    return CCloudClientBeginFileUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientBeginFileUploadResponse>, I>>(
    object: I,
  ): CCloudClientBeginFileUploadResponse {
    const message = createBaseCCloudClientBeginFileUploadResponse();
    message.encryptFile = object.encryptFile ?? false;
    message.blockRequests = object.blockRequests?.map((e) => ClientCloudFileUploadBlockDetails.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudClientCommitFileUploadRequest(): CCloudClientCommitFileUploadRequest {
  return { transferSucceeded: false, appid: 0, fileSha: Buffer.alloc(0), filename: "" };
}

export const CCloudClientCommitFileUploadRequest = {
  encode(message: CCloudClientCommitFileUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transferSucceeded === true) {
      writer.uint32(8).bool(message.transferSucceeded);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.fileSha.length !== 0) {
      writer.uint32(26).bytes(message.fileSha);
    }
    if (message.filename !== "") {
      writer.uint32(34).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientCommitFileUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientCommitFileUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferSucceeded = reader.bool();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.fileSha = reader.bytes() as Buffer;
          break;
        case 4:
          message.filename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientCommitFileUploadRequest {
    return {
      transferSucceeded: isSet(object.transferSucceeded) ? Boolean(object.transferSucceeded) : false,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSha: isSet(object.fileSha) ? Buffer.from(bytesFromBase64(object.fileSha)) : Buffer.alloc(0),
      filename: isSet(object.filename) ? String(object.filename) : "",
    };
  },

  toJSON(message: CCloudClientCommitFileUploadRequest): unknown {
    const obj: any = {};
    message.transferSucceeded !== undefined && (obj.transferSucceeded = message.transferSucceeded);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSha !== undefined &&
      (obj.fileSha = base64FromBytes(message.fileSha !== undefined ? message.fileSha : Buffer.alloc(0)));
    message.filename !== undefined && (obj.filename = message.filename);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientCommitFileUploadRequest>, I>>(
    base?: I,
  ): CCloudClientCommitFileUploadRequest {
    return CCloudClientCommitFileUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientCommitFileUploadRequest>, I>>(
    object: I,
  ): CCloudClientCommitFileUploadRequest {
    const message = createBaseCCloudClientCommitFileUploadRequest();
    message.transferSucceeded = object.transferSucceeded ?? false;
    message.appid = object.appid ?? 0;
    message.fileSha = object.fileSha ?? Buffer.alloc(0);
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseCCloudClientCommitFileUploadResponse(): CCloudClientCommitFileUploadResponse {
  return { fileCommitted: false };
}

export const CCloudClientCommitFileUploadResponse = {
  encode(message: CCloudClientCommitFileUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileCommitted === true) {
      writer.uint32(8).bool(message.fileCommitted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientCommitFileUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientCommitFileUploadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileCommitted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientCommitFileUploadResponse {
    return { fileCommitted: isSet(object.fileCommitted) ? Boolean(object.fileCommitted) : false };
  },

  toJSON(message: CCloudClientCommitFileUploadResponse): unknown {
    const obj: any = {};
    message.fileCommitted !== undefined && (obj.fileCommitted = message.fileCommitted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientCommitFileUploadResponse>, I>>(
    base?: I,
  ): CCloudClientCommitFileUploadResponse {
    return CCloudClientCommitFileUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientCommitFileUploadResponse>, I>>(
    object: I,
  ): CCloudClientCommitFileUploadResponse {
    const message = createBaseCCloudClientCommitFileUploadResponse();
    message.fileCommitted = object.fileCommitted ?? false;
    return message;
  },
};

function createBaseCCloudClientFileDownloadRequest(): CCloudClientFileDownloadRequest {
  return { appid: 0, filename: "", realm: 0 };
}

export const CCloudClientFileDownloadRequest = {
  encode(message: CCloudClientFileDownloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    if (message.realm !== 0) {
      writer.uint32(24).uint32(message.realm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientFileDownloadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientFileDownloadRequest();
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
          message.realm = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientFileDownloadRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      realm: isSet(object.realm) ? Number(object.realm) : 0,
    };
  },

  toJSON(message: CCloudClientFileDownloadRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.filename !== undefined && (obj.filename = message.filename);
    message.realm !== undefined && (obj.realm = Math.round(message.realm));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientFileDownloadRequest>, I>>(base?: I): CCloudClientFileDownloadRequest {
    return CCloudClientFileDownloadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientFileDownloadRequest>, I>>(
    object: I,
  ): CCloudClientFileDownloadRequest {
    const message = createBaseCCloudClientFileDownloadRequest();
    message.appid = object.appid ?? 0;
    message.filename = object.filename ?? "";
    message.realm = object.realm ?? 0;
    return message;
  },
};

function createBaseCCloudClientFileDownloadResponse(): CCloudClientFileDownloadResponse {
  return {
    appid: 0,
    fileSize: 0,
    rawFileSize: 0,
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    isExplicitDelete: false,
    urlHost: "",
    urlPath: "",
    useHttps: false,
    requestHeaders: [],
    encrypted: false,
  };
}

export const CCloudClientFileDownloadResponse = {
  encode(message: CCloudClientFileDownloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
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
    if (message.isExplicitDelete === true) {
      writer.uint32(48).bool(message.isExplicitDelete);
    }
    if (message.urlHost !== "") {
      writer.uint32(58).string(message.urlHost);
    }
    if (message.urlPath !== "") {
      writer.uint32(66).string(message.urlPath);
    }
    if (message.useHttps === true) {
      writer.uint32(72).bool(message.useHttps);
    }
    for (const v of message.requestHeaders) {
      CCloudClientFileDownloadResponse_HTTPHeaders.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.encrypted === true) {
      writer.uint32(88).bool(message.encrypted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientFileDownloadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientFileDownloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
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
          message.isExplicitDelete = reader.bool();
          break;
        case 7:
          message.urlHost = reader.string();
          break;
        case 8:
          message.urlPath = reader.string();
          break;
        case 9:
          message.useHttps = reader.bool();
          break;
        case 10:
          message.requestHeaders.push(CCloudClientFileDownloadResponse_HTTPHeaders.decode(reader, reader.uint32()));
          break;
        case 11:
          message.encrypted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientFileDownloadResponse {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
      urlHost: isSet(object.urlHost) ? String(object.urlHost) : "",
      urlPath: isSet(object.urlPath) ? String(object.urlPath) : "",
      useHttps: isSet(object.useHttps) ? Boolean(object.useHttps) : false,
      requestHeaders: Array.isArray(object?.requestHeaders)
        ? object.requestHeaders.map((e: any) => CCloudClientFileDownloadResponse_HTTPHeaders.fromJSON(e))
        : [],
      encrypted: isSet(object.encrypted) ? Boolean(object.encrypted) : false,
    };
  },

  toJSON(message: CCloudClientFileDownloadResponse): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    message.urlHost !== undefined && (obj.urlHost = message.urlHost);
    message.urlPath !== undefined && (obj.urlPath = message.urlPath);
    message.useHttps !== undefined && (obj.useHttps = message.useHttps);
    if (message.requestHeaders) {
      obj.requestHeaders = message.requestHeaders.map((e) =>
        e ? CCloudClientFileDownloadResponse_HTTPHeaders.toJSON(e) : undefined
      );
    } else {
      obj.requestHeaders = [];
    }
    message.encrypted !== undefined && (obj.encrypted = message.encrypted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientFileDownloadResponse>, I>>(
    base?: I,
  ): CCloudClientFileDownloadResponse {
    return CCloudClientFileDownloadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientFileDownloadResponse>, I>>(
    object: I,
  ): CCloudClientFileDownloadResponse {
    const message = createBaseCCloudClientFileDownloadResponse();
    message.appid = object.appid ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.rawFileSize = object.rawFileSize ?? 0;
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    message.urlHost = object.urlHost ?? "";
    message.urlPath = object.urlPath ?? "";
    message.useHttps = object.useHttps ?? false;
    message.requestHeaders =
      object.requestHeaders?.map((e) => CCloudClientFileDownloadResponse_HTTPHeaders.fromPartial(e)) || [];
    message.encrypted = object.encrypted ?? false;
    return message;
  },
};

function createBaseCCloudClientFileDownloadResponse_HTTPHeaders(): CCloudClientFileDownloadResponse_HTTPHeaders {
  return { name: "", value: "" };
}

export const CCloudClientFileDownloadResponse_HTTPHeaders = {
  encode(message: CCloudClientFileDownloadResponse_HTTPHeaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientFileDownloadResponse_HTTPHeaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientFileDownloadResponse_HTTPHeaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): CCloudClientFileDownloadResponse_HTTPHeaders {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CCloudClientFileDownloadResponse_HTTPHeaders): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientFileDownloadResponse_HTTPHeaders>, I>>(
    base?: I,
  ): CCloudClientFileDownloadResponse_HTTPHeaders {
    return CCloudClientFileDownloadResponse_HTTPHeaders.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientFileDownloadResponse_HTTPHeaders>, I>>(
    object: I,
  ): CCloudClientFileDownloadResponse_HTTPHeaders {
    const message = createBaseCCloudClientFileDownloadResponse_HTTPHeaders();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCCloudClientDeleteFileRequest(): CCloudClientDeleteFileRequest {
  return { appid: 0, filename: "", isExplicitDelete: false, uploadBatchId: "0" };
}

export const CCloudClientDeleteFileRequest = {
  encode(message: CCloudClientDeleteFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    if (message.isExplicitDelete === true) {
      writer.uint32(24).bool(message.isExplicitDelete);
    }
    if (message.uploadBatchId !== "0") {
      writer.uint32(32).uint64(message.uploadBatchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientDeleteFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientDeleteFileRequest();
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
          message.isExplicitDelete = reader.bool();
          break;
        case 4:
          message.uploadBatchId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientDeleteFileRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      isExplicitDelete: isSet(object.isExplicitDelete) ? Boolean(object.isExplicitDelete) : false,
      uploadBatchId: isSet(object.uploadBatchId) ? String(object.uploadBatchId) : "0",
    };
  },

  toJSON(message: CCloudClientDeleteFileRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.filename !== undefined && (obj.filename = message.filename);
    message.isExplicitDelete !== undefined && (obj.isExplicitDelete = message.isExplicitDelete);
    message.uploadBatchId !== undefined && (obj.uploadBatchId = message.uploadBatchId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientDeleteFileRequest>, I>>(base?: I): CCloudClientDeleteFileRequest {
    return CCloudClientDeleteFileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientDeleteFileRequest>, I>>(
    object: I,
  ): CCloudClientDeleteFileRequest {
    const message = createBaseCCloudClientDeleteFileRequest();
    message.appid = object.appid ?? 0;
    message.filename = object.filename ?? "";
    message.isExplicitDelete = object.isExplicitDelete ?? false;
    message.uploadBatchId = object.uploadBatchId ?? "0";
    return message;
  },
};

function createBaseCCloudClientDeleteFileResponse(): CCloudClientDeleteFileResponse {
  return {};
}

export const CCloudClientDeleteFileResponse = {
  encode(_: CCloudClientDeleteFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientDeleteFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientDeleteFileResponse();
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

  fromJSON(_: any): CCloudClientDeleteFileResponse {
    return {};
  },

  toJSON(_: CCloudClientDeleteFileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientDeleteFileResponse>, I>>(base?: I): CCloudClientDeleteFileResponse {
    return CCloudClientDeleteFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientDeleteFileResponse>, I>>(_: I): CCloudClientDeleteFileResponse {
    const message = createBaseCCloudClientDeleteFileResponse();
    return message;
  },
};

function createBaseCCloudClientConflictResolutionNotification(): CCloudClientConflictResolutionNotification {
  return { appid: 0, choseLocalFiles: false };
}

export const CCloudClientConflictResolutionNotification = {
  encode(message: CCloudClientConflictResolutionNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.choseLocalFiles === true) {
      writer.uint32(16).bool(message.choseLocalFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientConflictResolutionNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientConflictResolutionNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.choseLocalFiles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientConflictResolutionNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      choseLocalFiles: isSet(object.choseLocalFiles) ? Boolean(object.choseLocalFiles) : false,
    };
  },

  toJSON(message: CCloudClientConflictResolutionNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.choseLocalFiles !== undefined && (obj.choseLocalFiles = message.choseLocalFiles);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientConflictResolutionNotification>, I>>(
    base?: I,
  ): CCloudClientConflictResolutionNotification {
    return CCloudClientConflictResolutionNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientConflictResolutionNotification>, I>>(
    object: I,
  ): CCloudClientConflictResolutionNotification {
    const message = createBaseCCloudClientConflictResolutionNotification();
    message.appid = object.appid ?? 0;
    message.choseLocalFiles = object.choseLocalFiles ?? false;
    return message;
  },
};

function createBaseCCloudEnumerateUserAppsRequest(): CCloudEnumerateUserAppsRequest {
  return {};
}

export const CCloudEnumerateUserAppsRequest = {
  encode(_: CCloudEnumerateUserAppsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserAppsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserAppsRequest();
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

  fromJSON(_: any): CCloudEnumerateUserAppsRequest {
    return {};
  },

  toJSON(_: CCloudEnumerateUserAppsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudEnumerateUserAppsRequest>, I>>(base?: I): CCloudEnumerateUserAppsRequest {
    return CCloudEnumerateUserAppsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudEnumerateUserAppsRequest>, I>>(_: I): CCloudEnumerateUserAppsRequest {
    const message = createBaseCCloudEnumerateUserAppsRequest();
    return message;
  },
};

function createBaseCCloudEnumerateUserAppsResponse(): CCloudEnumerateUserAppsResponse {
  return { apps: [] };
}

export const CCloudEnumerateUserAppsResponse = {
  encode(message: CCloudEnumerateUserAppsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      CCloudEnumerateUserAppsResponse_Apps.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserAppsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apps.push(CCloudEnumerateUserAppsResponse_Apps.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserAppsResponse {
    return {
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CCloudEnumerateUserAppsResponse_Apps.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudEnumerateUserAppsResponse): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CCloudEnumerateUserAppsResponse_Apps.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudEnumerateUserAppsResponse>, I>>(base?: I): CCloudEnumerateUserAppsResponse {
    return CCloudEnumerateUserAppsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudEnumerateUserAppsResponse>, I>>(
    object: I,
  ): CCloudEnumerateUserAppsResponse {
    const message = createBaseCCloudEnumerateUserAppsResponse();
    message.apps = object.apps?.map((e) => CCloudEnumerateUserAppsResponse_Apps.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudEnumerateUserAppsResponse_Apps(): CCloudEnumerateUserAppsResponse_Apps {
  return { appid: 0, totalcount: 0, totalsize: "0" };
}

export const CCloudEnumerateUserAppsResponse_Apps = {
  encode(message: CCloudEnumerateUserAppsResponse_Apps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.totalcount !== 0) {
      writer.uint32(16).int32(message.totalcount);
    }
    if (message.totalsize !== "0") {
      writer.uint32(24).int64(message.totalsize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudEnumerateUserAppsResponse_Apps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudEnumerateUserAppsResponse_Apps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.totalcount = reader.int32();
          break;
        case 3:
          message.totalsize = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudEnumerateUserAppsResponse_Apps {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      totalcount: isSet(object.totalcount) ? Number(object.totalcount) : 0,
      totalsize: isSet(object.totalsize) ? String(object.totalsize) : "0",
    };
  },

  toJSON(message: CCloudEnumerateUserAppsResponse_Apps): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.totalcount !== undefined && (obj.totalcount = Math.round(message.totalcount));
    message.totalsize !== undefined && (obj.totalsize = message.totalsize);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudEnumerateUserAppsResponse_Apps>, I>>(
    base?: I,
  ): CCloudEnumerateUserAppsResponse_Apps {
    return CCloudEnumerateUserAppsResponse_Apps.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudEnumerateUserAppsResponse_Apps>, I>>(
    object: I,
  ): CCloudEnumerateUserAppsResponse_Apps {
    const message = createBaseCCloudEnumerateUserAppsResponse_Apps();
    message.appid = object.appid ?? 0;
    message.totalcount = object.totalcount ?? 0;
    message.totalsize = object.totalsize ?? "0";
    return message;
  },
};

function createBaseCCloudGetAppFileChangelistRequest(): CCloudGetAppFileChangelistRequest {
  return { appid: 0, syncedChangeNumber: "0" };
}

export const CCloudGetAppFileChangelistRequest = {
  encode(message: CCloudGetAppFileChangelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.syncedChangeNumber !== "0") {
      writer.uint32(16).uint64(message.syncedChangeNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetAppFileChangelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetAppFileChangelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.syncedChangeNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetAppFileChangelistRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      syncedChangeNumber: isSet(object.syncedChangeNumber) ? String(object.syncedChangeNumber) : "0",
    };
  },

  toJSON(message: CCloudGetAppFileChangelistRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.syncedChangeNumber !== undefined && (obj.syncedChangeNumber = message.syncedChangeNumber);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetAppFileChangelistRequest>, I>>(
    base?: I,
  ): CCloudGetAppFileChangelistRequest {
    return CCloudGetAppFileChangelistRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetAppFileChangelistRequest>, I>>(
    object: I,
  ): CCloudGetAppFileChangelistRequest {
    const message = createBaseCCloudGetAppFileChangelistRequest();
    message.appid = object.appid ?? 0;
    message.syncedChangeNumber = object.syncedChangeNumber ?? "0";
    return message;
  },
};

function createBaseCCloudAppFileInfo(): CCloudAppFileInfo {
  return {
    fileName: "",
    shaFile: Buffer.alloc(0),
    timeStamp: "0",
    rawFileSize: 0,
    persistState: 0,
    platformsToSync: 0,
    pathPrefixIndex: 0,
    machineNameIndex: 0,
  };
}

export const CCloudAppFileInfo = {
  encode(message: CCloudAppFileInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    if (message.shaFile.length !== 0) {
      writer.uint32(18).bytes(message.shaFile);
    }
    if (message.timeStamp !== "0") {
      writer.uint32(24).uint64(message.timeStamp);
    }
    if (message.rawFileSize !== 0) {
      writer.uint32(32).uint32(message.rawFileSize);
    }
    if (message.persistState !== 0) {
      writer.uint32(40).int32(message.persistState);
    }
    if (message.platformsToSync !== 0) {
      writer.uint32(48).uint32(message.platformsToSync);
    }
    if (message.pathPrefixIndex !== 0) {
      writer.uint32(56).uint32(message.pathPrefixIndex);
    }
    if (message.machineNameIndex !== 0) {
      writer.uint32(64).uint32(message.machineNameIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppFileInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppFileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        case 2:
          message.shaFile = reader.bytes() as Buffer;
          break;
        case 3:
          message.timeStamp = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.rawFileSize = reader.uint32();
          break;
        case 5:
          message.persistState = reader.int32() as any;
          break;
        case 6:
          message.platformsToSync = reader.uint32();
          break;
        case 7:
          message.pathPrefixIndex = reader.uint32();
          break;
        case 8:
          message.machineNameIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppFileInfo {
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : "",
      shaFile: isSet(object.shaFile) ? Buffer.from(bytesFromBase64(object.shaFile)) : Buffer.alloc(0),
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "0",
      rawFileSize: isSet(object.rawFileSize) ? Number(object.rawFileSize) : 0,
      persistState: isSet(object.persistState) ? eCloudStoragePersistStateFromJSON(object.persistState) : 0,
      platformsToSync: isSet(object.platformsToSync) ? Number(object.platformsToSync) : 0,
      pathPrefixIndex: isSet(object.pathPrefixIndex) ? Number(object.pathPrefixIndex) : 0,
      machineNameIndex: isSet(object.machineNameIndex) ? Number(object.machineNameIndex) : 0,
    };
  },

  toJSON(message: CCloudAppFileInfo): unknown {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    message.shaFile !== undefined &&
      (obj.shaFile = base64FromBytes(message.shaFile !== undefined ? message.shaFile : Buffer.alloc(0)));
    message.timeStamp !== undefined && (obj.timeStamp = message.timeStamp);
    message.rawFileSize !== undefined && (obj.rawFileSize = Math.round(message.rawFileSize));
    message.persistState !== undefined && (obj.persistState = eCloudStoragePersistStateToJSON(message.persistState));
    message.platformsToSync !== undefined && (obj.platformsToSync = Math.round(message.platformsToSync));
    message.pathPrefixIndex !== undefined && (obj.pathPrefixIndex = Math.round(message.pathPrefixIndex));
    message.machineNameIndex !== undefined && (obj.machineNameIndex = Math.round(message.machineNameIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppFileInfo>, I>>(base?: I): CCloudAppFileInfo {
    return CCloudAppFileInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppFileInfo>, I>>(object: I): CCloudAppFileInfo {
    const message = createBaseCCloudAppFileInfo();
    message.fileName = object.fileName ?? "";
    message.shaFile = object.shaFile ?? Buffer.alloc(0);
    message.timeStamp = object.timeStamp ?? "0";
    message.rawFileSize = object.rawFileSize ?? 0;
    message.persistState = object.persistState ?? 0;
    message.platformsToSync = object.platformsToSync ?? 0;
    message.pathPrefixIndex = object.pathPrefixIndex ?? 0;
    message.machineNameIndex = object.machineNameIndex ?? 0;
    return message;
  },
};

function createBaseCCloudGetAppFileChangelistResponse(): CCloudGetAppFileChangelistResponse {
  return {
    currentChangeNumber: "0",
    files: [],
    isOnlyDelta: false,
    pathPrefixes: [],
    machineNames: [],
    appBuildidHwm: "0",
  };
}

export const CCloudGetAppFileChangelistResponse = {
  encode(message: CCloudGetAppFileChangelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentChangeNumber !== "0") {
      writer.uint32(8).uint64(message.currentChangeNumber);
    }
    for (const v of message.files) {
      CCloudAppFileInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isOnlyDelta === true) {
      writer.uint32(24).bool(message.isOnlyDelta);
    }
    for (const v of message.pathPrefixes) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.machineNames) {
      writer.uint32(42).string(v!);
    }
    if (message.appBuildidHwm !== "0") {
      writer.uint32(48).uint64(message.appBuildidHwm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudGetAppFileChangelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudGetAppFileChangelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentChangeNumber = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.files.push(CCloudAppFileInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.isOnlyDelta = reader.bool();
          break;
        case 4:
          message.pathPrefixes.push(reader.string());
          break;
        case 5:
          message.machineNames.push(reader.string());
          break;
        case 6:
          message.appBuildidHwm = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudGetAppFileChangelistResponse {
    return {
      currentChangeNumber: isSet(object.currentChangeNumber) ? String(object.currentChangeNumber) : "0",
      files: Array.isArray(object?.files) ? object.files.map((e: any) => CCloudAppFileInfo.fromJSON(e)) : [],
      isOnlyDelta: isSet(object.isOnlyDelta) ? Boolean(object.isOnlyDelta) : false,
      pathPrefixes: Array.isArray(object?.pathPrefixes) ? object.pathPrefixes.map((e: any) => String(e)) : [],
      machineNames: Array.isArray(object?.machineNames) ? object.machineNames.map((e: any) => String(e)) : [],
      appBuildidHwm: isSet(object.appBuildidHwm) ? String(object.appBuildidHwm) : "0",
    };
  },

  toJSON(message: CCloudGetAppFileChangelistResponse): unknown {
    const obj: any = {};
    message.currentChangeNumber !== undefined && (obj.currentChangeNumber = message.currentChangeNumber);
    if (message.files) {
      obj.files = message.files.map((e) => e ? CCloudAppFileInfo.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.isOnlyDelta !== undefined && (obj.isOnlyDelta = message.isOnlyDelta);
    if (message.pathPrefixes) {
      obj.pathPrefixes = message.pathPrefixes.map((e) => e);
    } else {
      obj.pathPrefixes = [];
    }
    if (message.machineNames) {
      obj.machineNames = message.machineNames.map((e) => e);
    } else {
      obj.machineNames = [];
    }
    message.appBuildidHwm !== undefined && (obj.appBuildidHwm = message.appBuildidHwm);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudGetAppFileChangelistResponse>, I>>(
    base?: I,
  ): CCloudGetAppFileChangelistResponse {
    return CCloudGetAppFileChangelistResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudGetAppFileChangelistResponse>, I>>(
    object: I,
  ): CCloudGetAppFileChangelistResponse {
    const message = createBaseCCloudGetAppFileChangelistResponse();
    message.currentChangeNumber = object.currentChangeNumber ?? "0";
    message.files = object.files?.map((e) => CCloudAppFileInfo.fromPartial(e)) || [];
    message.isOnlyDelta = object.isOnlyDelta ?? false;
    message.pathPrefixes = object.pathPrefixes?.map((e) => e) || [];
    message.machineNames = object.machineNames?.map((e) => e) || [];
    message.appBuildidHwm = object.appBuildidHwm ?? "0";
    return message;
  },
};

function createBaseCCloudAppSessionSuspendRequest(): CCloudAppSessionSuspendRequest {
  return { appid: 0, clientId: "0", machineName: "", cloudSyncCompleted: false };
}

export const CCloudAppSessionSuspendRequest = {
  encode(message: CCloudAppSessionSuspendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.clientId !== "0") {
      writer.uint32(16).uint64(message.clientId);
    }
    if (message.machineName !== "") {
      writer.uint32(26).string(message.machineName);
    }
    if (message.cloudSyncCompleted === true) {
      writer.uint32(32).bool(message.cloudSyncCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppSessionSuspendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppSessionSuspendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.machineName = reader.string();
          break;
        case 4:
          message.cloudSyncCompleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppSessionSuspendRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      cloudSyncCompleted: isSet(object.cloudSyncCompleted) ? Boolean(object.cloudSyncCompleted) : false,
    };
  },

  toJSON(message: CCloudAppSessionSuspendRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.cloudSyncCompleted !== undefined && (obj.cloudSyncCompleted = message.cloudSyncCompleted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppSessionSuspendRequest>, I>>(base?: I): CCloudAppSessionSuspendRequest {
    return CCloudAppSessionSuspendRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppSessionSuspendRequest>, I>>(
    object: I,
  ): CCloudAppSessionSuspendRequest {
    const message = createBaseCCloudAppSessionSuspendRequest();
    message.appid = object.appid ?? 0;
    message.clientId = object.clientId ?? "0";
    message.machineName = object.machineName ?? "";
    message.cloudSyncCompleted = object.cloudSyncCompleted ?? false;
    return message;
  },
};

function createBaseCCloudAppSessionSuspendResponse(): CCloudAppSessionSuspendResponse {
  return {};
}

export const CCloudAppSessionSuspendResponse = {
  encode(_: CCloudAppSessionSuspendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppSessionSuspendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppSessionSuspendResponse();
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

  fromJSON(_: any): CCloudAppSessionSuspendResponse {
    return {};
  },

  toJSON(_: CCloudAppSessionSuspendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppSessionSuspendResponse>, I>>(base?: I): CCloudAppSessionSuspendResponse {
    return CCloudAppSessionSuspendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppSessionSuspendResponse>, I>>(_: I): CCloudAppSessionSuspendResponse {
    const message = createBaseCCloudAppSessionSuspendResponse();
    return message;
  },
};

function createBaseCCloudAppSessionResumeRequest(): CCloudAppSessionResumeRequest {
  return { appid: 0, clientId: "0" };
}

export const CCloudAppSessionResumeRequest = {
  encode(message: CCloudAppSessionResumeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.clientId !== "0") {
      writer.uint32(16).uint64(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppSessionResumeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppSessionResumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppSessionResumeRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
    };
  },

  toJSON(message: CCloudAppSessionResumeRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppSessionResumeRequest>, I>>(base?: I): CCloudAppSessionResumeRequest {
    return CCloudAppSessionResumeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppSessionResumeRequest>, I>>(
    object: I,
  ): CCloudAppSessionResumeRequest {
    const message = createBaseCCloudAppSessionResumeRequest();
    message.appid = object.appid ?? 0;
    message.clientId = object.clientId ?? "0";
    return message;
  },
};

function createBaseCCloudAppSessionResumeResponse(): CCloudAppSessionResumeResponse {
  return {};
}

export const CCloudAppSessionResumeResponse = {
  encode(_: CCloudAppSessionResumeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppSessionResumeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppSessionResumeResponse();
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

  fromJSON(_: any): CCloudAppSessionResumeResponse {
    return {};
  },

  toJSON(_: CCloudAppSessionResumeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppSessionResumeResponse>, I>>(base?: I): CCloudAppSessionResumeResponse {
    return CCloudAppSessionResumeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppSessionResumeResponse>, I>>(_: I): CCloudAppSessionResumeResponse {
    const message = createBaseCCloudAppSessionResumeResponse();
    return message;
  },
};

function createBaseCCloudAppLaunchIntentRequest(): CCloudAppLaunchIntentRequest {
  return { appid: 0, clientId: "0", machineName: "", ignorePendingOperations: false };
}

export const CCloudAppLaunchIntentRequest = {
  encode(message: CCloudAppLaunchIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.clientId !== "0") {
      writer.uint32(16).uint64(message.clientId);
    }
    if (message.machineName !== "") {
      writer.uint32(26).string(message.machineName);
    }
    if (message.ignorePendingOperations === true) {
      writer.uint32(32).bool(message.ignorePendingOperations);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppLaunchIntentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppLaunchIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.machineName = reader.string();
          break;
        case 4:
          message.ignorePendingOperations = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppLaunchIntentRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      ignorePendingOperations: isSet(object.ignorePendingOperations) ? Boolean(object.ignorePendingOperations) : false,
    };
  },

  toJSON(message: CCloudAppLaunchIntentRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.ignorePendingOperations !== undefined && (obj.ignorePendingOperations = message.ignorePendingOperations);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppLaunchIntentRequest>, I>>(base?: I): CCloudAppLaunchIntentRequest {
    return CCloudAppLaunchIntentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppLaunchIntentRequest>, I>>(object: I): CCloudAppLaunchIntentRequest {
    const message = createBaseCCloudAppLaunchIntentRequest();
    message.appid = object.appid ?? 0;
    message.clientId = object.clientId ?? "0";
    message.machineName = object.machineName ?? "";
    message.ignorePendingOperations = object.ignorePendingOperations ?? false;
    return message;
  },
};

function createBaseCCloudAppLaunchIntentResponse(): CCloudAppLaunchIntentResponse {
  return { pendingRemoteOperations: [] };
}

export const CCloudAppLaunchIntentResponse = {
  encode(message: CCloudAppLaunchIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingRemoteOperations) {
      CCloudPendingRemoteOperation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppLaunchIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppLaunchIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingRemoteOperations.push(CCloudPendingRemoteOperation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppLaunchIntentResponse {
    return {
      pendingRemoteOperations: Array.isArray(object?.pendingRemoteOperations)
        ? object.pendingRemoteOperations.map((e: any) => CCloudPendingRemoteOperation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CCloudAppLaunchIntentResponse): unknown {
    const obj: any = {};
    if (message.pendingRemoteOperations) {
      obj.pendingRemoteOperations = message.pendingRemoteOperations.map((e) =>
        e ? CCloudPendingRemoteOperation.toJSON(e) : undefined
      );
    } else {
      obj.pendingRemoteOperations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppLaunchIntentResponse>, I>>(base?: I): CCloudAppLaunchIntentResponse {
    return CCloudAppLaunchIntentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppLaunchIntentResponse>, I>>(
    object: I,
  ): CCloudAppLaunchIntentResponse {
    const message = createBaseCCloudAppLaunchIntentResponse();
    message.pendingRemoteOperations =
      object.pendingRemoteOperations?.map((e) => CCloudPendingRemoteOperation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCCloudAppExitSyncDoneNotification(): CCloudAppExitSyncDoneNotification {
  return { appid: 0, clientId: "0", uploadsCompleted: false, uploadsRequired: false };
}

export const CCloudAppExitSyncDoneNotification = {
  encode(message: CCloudAppExitSyncDoneNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.clientId !== "0") {
      writer.uint32(16).uint64(message.clientId);
    }
    if (message.uploadsCompleted === true) {
      writer.uint32(24).bool(message.uploadsCompleted);
    }
    if (message.uploadsRequired === true) {
      writer.uint32(32).bool(message.uploadsRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppExitSyncDoneNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppExitSyncDoneNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.uploadsCompleted = reader.bool();
          break;
        case 4:
          message.uploadsRequired = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppExitSyncDoneNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      uploadsCompleted: isSet(object.uploadsCompleted) ? Boolean(object.uploadsCompleted) : false,
      uploadsRequired: isSet(object.uploadsRequired) ? Boolean(object.uploadsRequired) : false,
    };
  },

  toJSON(message: CCloudAppExitSyncDoneNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.uploadsCompleted !== undefined && (obj.uploadsCompleted = message.uploadsCompleted);
    message.uploadsRequired !== undefined && (obj.uploadsRequired = message.uploadsRequired);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppExitSyncDoneNotification>, I>>(
    base?: I,
  ): CCloudAppExitSyncDoneNotification {
    return CCloudAppExitSyncDoneNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppExitSyncDoneNotification>, I>>(
    object: I,
  ): CCloudAppExitSyncDoneNotification {
    const message = createBaseCCloudAppExitSyncDoneNotification();
    message.appid = object.appid ?? 0;
    message.clientId = object.clientId ?? "0";
    message.uploadsCompleted = object.uploadsCompleted ?? false;
    message.uploadsRequired = object.uploadsRequired ?? false;
    return message;
  },
};

function createBaseCCloudClientGetAppQuotaUsageRequest(): CCloudClientGetAppQuotaUsageRequest {
  return { appid: 0 };
}

export const CCloudClientGetAppQuotaUsageRequest = {
  encode(message: CCloudClientGetAppQuotaUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientGetAppQuotaUsageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientGetAppQuotaUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientGetAppQuotaUsageRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CCloudClientGetAppQuotaUsageRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientGetAppQuotaUsageRequest>, I>>(
    base?: I,
  ): CCloudClientGetAppQuotaUsageRequest {
    return CCloudClientGetAppQuotaUsageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientGetAppQuotaUsageRequest>, I>>(
    object: I,
  ): CCloudClientGetAppQuotaUsageRequest {
    const message = createBaseCCloudClientGetAppQuotaUsageRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCCloudClientGetAppQuotaUsageResponse(): CCloudClientGetAppQuotaUsageResponse {
  return { existingFiles: 0, existingBytes: "0", maxNumFiles: 0, maxNumBytes: "0" };
}

export const CCloudClientGetAppQuotaUsageResponse = {
  encode(message: CCloudClientGetAppQuotaUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.existingFiles !== 0) {
      writer.uint32(8).uint32(message.existingFiles);
    }
    if (message.existingBytes !== "0") {
      writer.uint32(16).uint64(message.existingBytes);
    }
    if (message.maxNumFiles !== 0) {
      writer.uint32(24).uint32(message.maxNumFiles);
    }
    if (message.maxNumBytes !== "0") {
      writer.uint32(32).uint64(message.maxNumBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientGetAppQuotaUsageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientGetAppQuotaUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.existingFiles = reader.uint32();
          break;
        case 2:
          message.existingBytes = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.maxNumFiles = reader.uint32();
          break;
        case 4:
          message.maxNumBytes = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientGetAppQuotaUsageResponse {
    return {
      existingFiles: isSet(object.existingFiles) ? Number(object.existingFiles) : 0,
      existingBytes: isSet(object.existingBytes) ? String(object.existingBytes) : "0",
      maxNumFiles: isSet(object.maxNumFiles) ? Number(object.maxNumFiles) : 0,
      maxNumBytes: isSet(object.maxNumBytes) ? String(object.maxNumBytes) : "0",
    };
  },

  toJSON(message: CCloudClientGetAppQuotaUsageResponse): unknown {
    const obj: any = {};
    message.existingFiles !== undefined && (obj.existingFiles = Math.round(message.existingFiles));
    message.existingBytes !== undefined && (obj.existingBytes = message.existingBytes);
    message.maxNumFiles !== undefined && (obj.maxNumFiles = Math.round(message.maxNumFiles));
    message.maxNumBytes !== undefined && (obj.maxNumBytes = message.maxNumBytes);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientGetAppQuotaUsageResponse>, I>>(
    base?: I,
  ): CCloudClientGetAppQuotaUsageResponse {
    return CCloudClientGetAppQuotaUsageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientGetAppQuotaUsageResponse>, I>>(
    object: I,
  ): CCloudClientGetAppQuotaUsageResponse {
    const message = createBaseCCloudClientGetAppQuotaUsageResponse();
    message.existingFiles = object.existingFiles ?? 0;
    message.existingBytes = object.existingBytes ?? "0";
    message.maxNumFiles = object.maxNumFiles ?? 0;
    message.maxNumBytes = object.maxNumBytes ?? "0";
    return message;
  },
};

function createBaseCCloudAppCloudStateChangeNotification(): CCloudAppCloudStateChangeNotification {
  return { appid: 0, appChangeNumber: "0" };
}

export const CCloudAppCloudStateChangeNotification = {
  encode(message: CCloudAppCloudStateChangeNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.appChangeNumber !== "0") {
      writer.uint32(16).uint64(message.appChangeNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudAppCloudStateChangeNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudAppCloudStateChangeNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.appChangeNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudAppCloudStateChangeNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      appChangeNumber: isSet(object.appChangeNumber) ? String(object.appChangeNumber) : "0",
    };
  },

  toJSON(message: CCloudAppCloudStateChangeNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.appChangeNumber !== undefined && (obj.appChangeNumber = message.appChangeNumber);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudAppCloudStateChangeNotification>, I>>(
    base?: I,
  ): CCloudAppCloudStateChangeNotification {
    return CCloudAppCloudStateChangeNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudAppCloudStateChangeNotification>, I>>(
    object: I,
  ): CCloudAppCloudStateChangeNotification {
    const message = createBaseCCloudAppCloudStateChangeNotification();
    message.appid = object.appid ?? 0;
    message.appChangeNumber = object.appChangeNumber ?? "0";
    return message;
  },
};

function createBaseCCloudClientLogUploadRequestNotification(): CCloudClientLogUploadRequestNotification {
  return { requestId: "0" };
}

export const CCloudClientLogUploadRequestNotification = {
  encode(message: CCloudClientLogUploadRequestNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "0") {
      writer.uint32(8).uint64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudClientLogUploadRequestNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudClientLogUploadRequestNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudClientLogUploadRequestNotification {
    return { requestId: isSet(object.requestId) ? String(object.requestId) : "0" };
  },

  toJSON(message: CCloudClientLogUploadRequestNotification): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudClientLogUploadRequestNotification>, I>>(
    base?: I,
  ): CCloudClientLogUploadRequestNotification {
    return CCloudClientLogUploadRequestNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudClientLogUploadRequestNotification>, I>>(
    object: I,
  ): CCloudClientLogUploadRequestNotification {
    const message = createBaseCCloudClientLogUploadRequestNotification();
    message.requestId = object.requestId ?? "0";
    return message;
  },
};

export interface Cloud {
  ClientLogUploadCheck(request: CCloudClientLogUploadCheckNotification): Promise<NoResponse>;
  ClientLogUploadComplete(request: CCloudClientLogUploadCompleteNotification): Promise<NoResponse>;
  GetUploadServerInfo(request: CCloudGetUploadServerInfoRequest): Promise<CCloudGetUploadServerInfoResponse>;
  BeginHTTPUpload(request: CCloudBeginHTTPUploadRequest): Promise<CCloudBeginHTTPUploadResponse>;
  CommitHTTPUpload(request: CCloudCommitHTTPUploadRequest): Promise<CCloudCommitHTTPUploadResponse>;
  BeginUGCUpload(request: CCloudBeginUGCUploadRequest): Promise<CCloudBeginUGCUploadResponse>;
  CommitUGCUpload(request: CCloudCommitUGCUploadRequest): Promise<CCloudCommitUGCUploadResponse>;
  GetFileDetails(request: CCloudGetFileDetailsRequest): Promise<CCloudGetFileDetailsResponse>;
  EnumerateUserFiles(request: CCloudEnumerateUserFilesRequest): Promise<CCloudEnumerateUserFilesResponse>;
  Delete(request: CCloudDeleteRequest): Promise<CCloudDeleteResponse>;
  GetClientEncryptionKey(request: CCloudGetClientEncryptionKeyRequest): Promise<CCloudGetClientEncryptionKeyResponse>;
  CDNReport(request: CCloudCDNReportNotification): Promise<NoResponse>;
  ExternalStorageTransferReport(request: CCloudExternalStorageTransferReportNotification): Promise<NoResponse>;
  BeginAppUploadBatch(request: CCloudBeginAppUploadBatchRequest): Promise<CCloudBeginAppUploadBatchResponse>;
  CompleteAppUploadBatch(request: CCloudCompleteAppUploadBatchNotification): Promise<NoResponse>;
  CompleteAppUploadBatchBlocking(
    request: CCloudCompleteAppUploadBatchRequest,
  ): Promise<CCloudCompleteAppUploadBatchResponse>;
  ClientBeginFileUpload(request: CCloudClientBeginFileUploadRequest): Promise<CCloudClientBeginFileUploadResponse>;
  ClientCommitFileUpload(request: CCloudClientCommitFileUploadRequest): Promise<CCloudClientCommitFileUploadResponse>;
  ClientFileDownload(request: CCloudClientFileDownloadRequest): Promise<CCloudClientFileDownloadResponse>;
  ClientDeleteFile(request: CCloudClientDeleteFileRequest): Promise<CCloudClientDeleteFileResponse>;
  ClientConflictResolution(request: CCloudClientConflictResolutionNotification): Promise<NoResponse>;
  EnumerateUserApps(request: CCloudEnumerateUserAppsRequest): Promise<CCloudEnumerateUserAppsResponse>;
  GetAppFileChangelist(request: CCloudGetAppFileChangelistRequest): Promise<CCloudGetAppFileChangelistResponse>;
  SuspendAppSession(request: CCloudAppSessionSuspendRequest): Promise<CCloudAppSessionSuspendResponse>;
  ResumeAppSession(request: CCloudAppSessionResumeRequest): Promise<CCloudAppSessionResumeResponse>;
  SignalAppLaunchIntent(request: CCloudAppLaunchIntentRequest): Promise<CCloudAppLaunchIntentResponse>;
  SignalAppExitSyncDone(request: CCloudAppExitSyncDoneNotification): Promise<NoResponse>;
  ClientGetAppQuotaUsage(request: CCloudClientGetAppQuotaUsageRequest): Promise<CCloudClientGetAppQuotaUsageResponse>;
}

export class CloudClientImpl implements Cloud {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Cloud";
    this.rpc = rpc;
    this.ClientLogUploadCheck = this.ClientLogUploadCheck.bind(this);
    this.ClientLogUploadComplete = this.ClientLogUploadComplete.bind(this);
    this.GetUploadServerInfo = this.GetUploadServerInfo.bind(this);
    this.BeginHTTPUpload = this.BeginHTTPUpload.bind(this);
    this.CommitHTTPUpload = this.CommitHTTPUpload.bind(this);
    this.BeginUGCUpload = this.BeginUGCUpload.bind(this);
    this.CommitUGCUpload = this.CommitUGCUpload.bind(this);
    this.GetFileDetails = this.GetFileDetails.bind(this);
    this.EnumerateUserFiles = this.EnumerateUserFiles.bind(this);
    this.Delete = this.Delete.bind(this);
    this.GetClientEncryptionKey = this.GetClientEncryptionKey.bind(this);
    this.CDNReport = this.CDNReport.bind(this);
    this.ExternalStorageTransferReport = this.ExternalStorageTransferReport.bind(this);
    this.BeginAppUploadBatch = this.BeginAppUploadBatch.bind(this);
    this.CompleteAppUploadBatch = this.CompleteAppUploadBatch.bind(this);
    this.CompleteAppUploadBatchBlocking = this.CompleteAppUploadBatchBlocking.bind(this);
    this.ClientBeginFileUpload = this.ClientBeginFileUpload.bind(this);
    this.ClientCommitFileUpload = this.ClientCommitFileUpload.bind(this);
    this.ClientFileDownload = this.ClientFileDownload.bind(this);
    this.ClientDeleteFile = this.ClientDeleteFile.bind(this);
    this.ClientConflictResolution = this.ClientConflictResolution.bind(this);
    this.EnumerateUserApps = this.EnumerateUserApps.bind(this);
    this.GetAppFileChangelist = this.GetAppFileChangelist.bind(this);
    this.SuspendAppSession = this.SuspendAppSession.bind(this);
    this.ResumeAppSession = this.ResumeAppSession.bind(this);
    this.SignalAppLaunchIntent = this.SignalAppLaunchIntent.bind(this);
    this.SignalAppExitSyncDone = this.SignalAppExitSyncDone.bind(this);
    this.ClientGetAppQuotaUsage = this.ClientGetAppQuotaUsage.bind(this);
  }
  ClientLogUploadCheck(request: CCloudClientLogUploadCheckNotification): Promise<NoResponse> {
    const data = CCloudClientLogUploadCheckNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientLogUploadCheck", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientLogUploadComplete(request: CCloudClientLogUploadCompleteNotification): Promise<NoResponse> {
    const data = CCloudClientLogUploadCompleteNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientLogUploadComplete", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  GetUploadServerInfo(request: CCloudGetUploadServerInfoRequest): Promise<CCloudGetUploadServerInfoResponse> {
    const data = CCloudGetUploadServerInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUploadServerInfo", data);
    return promise.then((data) => CCloudGetUploadServerInfoResponse.decode(new _m0.Reader(data)));
  }

  BeginHTTPUpload(request: CCloudBeginHTTPUploadRequest): Promise<CCloudBeginHTTPUploadResponse> {
    const data = CCloudBeginHTTPUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginHTTPUpload", data);
    return promise.then((data) => CCloudBeginHTTPUploadResponse.decode(new _m0.Reader(data)));
  }

  CommitHTTPUpload(request: CCloudCommitHTTPUploadRequest): Promise<CCloudCommitHTTPUploadResponse> {
    const data = CCloudCommitHTTPUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommitHTTPUpload", data);
    return promise.then((data) => CCloudCommitHTTPUploadResponse.decode(new _m0.Reader(data)));
  }

  BeginUGCUpload(request: CCloudBeginUGCUploadRequest): Promise<CCloudBeginUGCUploadResponse> {
    const data = CCloudBeginUGCUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginUGCUpload", data);
    return promise.then((data) => CCloudBeginUGCUploadResponse.decode(new _m0.Reader(data)));
  }

  CommitUGCUpload(request: CCloudCommitUGCUploadRequest): Promise<CCloudCommitUGCUploadResponse> {
    const data = CCloudCommitUGCUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CommitUGCUpload", data);
    return promise.then((data) => CCloudCommitUGCUploadResponse.decode(new _m0.Reader(data)));
  }

  GetFileDetails(request: CCloudGetFileDetailsRequest): Promise<CCloudGetFileDetailsResponse> {
    const data = CCloudGetFileDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFileDetails", data);
    return promise.then((data) => CCloudGetFileDetailsResponse.decode(new _m0.Reader(data)));
  }

  EnumerateUserFiles(request: CCloudEnumerateUserFilesRequest): Promise<CCloudEnumerateUserFilesResponse> {
    const data = CCloudEnumerateUserFilesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnumerateUserFiles", data);
    return promise.then((data) => CCloudEnumerateUserFilesResponse.decode(new _m0.Reader(data)));
  }

  Delete(request: CCloudDeleteRequest): Promise<CCloudDeleteResponse> {
    const data = CCloudDeleteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => CCloudDeleteResponse.decode(new _m0.Reader(data)));
  }

  GetClientEncryptionKey(request: CCloudGetClientEncryptionKeyRequest): Promise<CCloudGetClientEncryptionKeyResponse> {
    const data = CCloudGetClientEncryptionKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClientEncryptionKey", data);
    return promise.then((data) => CCloudGetClientEncryptionKeyResponse.decode(new _m0.Reader(data)));
  }

  CDNReport(request: CCloudCDNReportNotification): Promise<NoResponse> {
    const data = CCloudCDNReportNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "CDNReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ExternalStorageTransferReport(request: CCloudExternalStorageTransferReportNotification): Promise<NoResponse> {
    const data = CCloudExternalStorageTransferReportNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExternalStorageTransferReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  BeginAppUploadBatch(request: CCloudBeginAppUploadBatchRequest): Promise<CCloudBeginAppUploadBatchResponse> {
    const data = CCloudBeginAppUploadBatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "BeginAppUploadBatch", data);
    return promise.then((data) => CCloudBeginAppUploadBatchResponse.decode(new _m0.Reader(data)));
  }

  CompleteAppUploadBatch(request: CCloudCompleteAppUploadBatchNotification): Promise<NoResponse> {
    const data = CCloudCompleteAppUploadBatchNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "CompleteAppUploadBatch", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  CompleteAppUploadBatchBlocking(
    request: CCloudCompleteAppUploadBatchRequest,
  ): Promise<CCloudCompleteAppUploadBatchResponse> {
    const data = CCloudCompleteAppUploadBatchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CompleteAppUploadBatchBlocking", data);
    return promise.then((data) => CCloudCompleteAppUploadBatchResponse.decode(new _m0.Reader(data)));
  }

  ClientBeginFileUpload(request: CCloudClientBeginFileUploadRequest): Promise<CCloudClientBeginFileUploadResponse> {
    const data = CCloudClientBeginFileUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientBeginFileUpload", data);
    return promise.then((data) => CCloudClientBeginFileUploadResponse.decode(new _m0.Reader(data)));
  }

  ClientCommitFileUpload(request: CCloudClientCommitFileUploadRequest): Promise<CCloudClientCommitFileUploadResponse> {
    const data = CCloudClientCommitFileUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientCommitFileUpload", data);
    return promise.then((data) => CCloudClientCommitFileUploadResponse.decode(new _m0.Reader(data)));
  }

  ClientFileDownload(request: CCloudClientFileDownloadRequest): Promise<CCloudClientFileDownloadResponse> {
    const data = CCloudClientFileDownloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientFileDownload", data);
    return promise.then((data) => CCloudClientFileDownloadResponse.decode(new _m0.Reader(data)));
  }

  ClientDeleteFile(request: CCloudClientDeleteFileRequest): Promise<CCloudClientDeleteFileResponse> {
    const data = CCloudClientDeleteFileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientDeleteFile", data);
    return promise.then((data) => CCloudClientDeleteFileResponse.decode(new _m0.Reader(data)));
  }

  ClientConflictResolution(request: CCloudClientConflictResolutionNotification): Promise<NoResponse> {
    const data = CCloudClientConflictResolutionNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientConflictResolution", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  EnumerateUserApps(request: CCloudEnumerateUserAppsRequest): Promise<CCloudEnumerateUserAppsResponse> {
    const data = CCloudEnumerateUserAppsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnumerateUserApps", data);
    return promise.then((data) => CCloudEnumerateUserAppsResponse.decode(new _m0.Reader(data)));
  }

  GetAppFileChangelist(request: CCloudGetAppFileChangelistRequest): Promise<CCloudGetAppFileChangelistResponse> {
    const data = CCloudGetAppFileChangelistRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAppFileChangelist", data);
    return promise.then((data) => CCloudGetAppFileChangelistResponse.decode(new _m0.Reader(data)));
  }

  SuspendAppSession(request: CCloudAppSessionSuspendRequest): Promise<CCloudAppSessionSuspendResponse> {
    const data = CCloudAppSessionSuspendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SuspendAppSession", data);
    return promise.then((data) => CCloudAppSessionSuspendResponse.decode(new _m0.Reader(data)));
  }

  ResumeAppSession(request: CCloudAppSessionResumeRequest): Promise<CCloudAppSessionResumeResponse> {
    const data = CCloudAppSessionResumeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResumeAppSession", data);
    return promise.then((data) => CCloudAppSessionResumeResponse.decode(new _m0.Reader(data)));
  }

  SignalAppLaunchIntent(request: CCloudAppLaunchIntentRequest): Promise<CCloudAppLaunchIntentResponse> {
    const data = CCloudAppLaunchIntentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignalAppLaunchIntent", data);
    return promise.then((data) => CCloudAppLaunchIntentResponse.decode(new _m0.Reader(data)));
  }

  SignalAppExitSyncDone(request: CCloudAppExitSyncDoneNotification): Promise<NoResponse> {
    const data = CCloudAppExitSyncDoneNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignalAppExitSyncDone", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientGetAppQuotaUsage(request: CCloudClientGetAppQuotaUsageRequest): Promise<CCloudClientGetAppQuotaUsageResponse> {
    const data = CCloudClientGetAppQuotaUsageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetAppQuotaUsage", data);
    return promise.then((data) => CCloudClientGetAppQuotaUsageResponse.decode(new _m0.Reader(data)));
  }
}

export interface CloudClient {
  NotifyAppStateChange(request: CCloudAppCloudStateChangeNotification): Promise<NoResponse>;
  ClientLogUploadRequest(request: CCloudClientLogUploadRequestNotification): Promise<NoResponse>;
}

export class CloudClientClientImpl implements CloudClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "CloudClient";
    this.rpc = rpc;
    this.NotifyAppStateChange = this.NotifyAppStateChange.bind(this);
    this.ClientLogUploadRequest = this.ClientLogUploadRequest.bind(this);
  }
  NotifyAppStateChange(request: CCloudAppCloudStateChangeNotification): Promise<NoResponse> {
    const data = CCloudAppCloudStateChangeNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyAppStateChange", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientLogUploadRequest(request: CCloudClientLogUploadRequestNotification): Promise<NoResponse> {
    const data = CCloudClientLogUploadRequestNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientLogUploadRequest", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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
