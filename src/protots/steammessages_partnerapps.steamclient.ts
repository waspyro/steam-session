/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CPartnerAppsRequestUploadTokenRequest {
  filename: string;
  appid: number;
}

export interface CPartnerAppsRequestUploadTokenResponse {
  uploadToken: string;
  location: string;
  routingId: string;
}

export interface CPartnerAppsFinishUploadRequest {
  uploadToken: string;
  routingId: string;
  appId: number;
}

export interface CPartnerAppsFinishUploadKVSignResponse {
  signedInstallscript: string;
}

export interface CPartnerAppsFinishUploadLegacyDRMRequest {
  uploadToken: string;
  routingId: string;
  appId: number;
  flags: number;
  toolName: string;
}

export interface CPartnerAppsFinishUploadLegacyDRMResponse {
  fileId: string;
}

export interface CPartnerAppsFinishUploadResponse {
}

export interface CPartnerAppsFinishUploadDepotRequest {
  uploadToken: string;
  routingId: string;
  appId: number;
  depotId: number;
  buildFlags: number;
}

export interface CPartnerAppsFinishUploadDepotResponse {
  buildRoutingId: string;
}

export interface CPartnerAppsGetDepotBuildResultRequest {
  uploadToken: string;
  routingId: string;
}

export interface CPartnerAppsGetDepotBuildResultResponse {
  manifestId: string;
  errorMsg: string;
}

export interface CPartnerAppsFindDRMUploadsRequest {
  appId: number;
}

export interface CPartnerAppsExistingDRMUpload {
  fileId: string;
  appId: number;
  actorId: number;
  suppliedName: string;
  flags: number;
  modType: string;
  timestamp: number;
  origFileId: string;
}

export interface CPartnerAppsFindDRMUploadsResponse {
  uploads: CPartnerAppsExistingDRMUpload[];
}

export interface CPartnerAppsDownloadRequest {
  fileId: string;
  appId: number;
}

export interface CPartnerAppsDownloadResponse {
  downloadUrl: string;
  appId: number;
}

function createBaseCPartnerAppsRequestUploadTokenRequest(): CPartnerAppsRequestUploadTokenRequest {
  return { filename: "", appid: 0 };
}

export const CPartnerAppsRequestUploadTokenRequest = {
  encode(message: CPartnerAppsRequestUploadTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsRequestUploadTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsRequestUploadTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filename = reader.string();
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

  fromJSON(object: any): CPartnerAppsRequestUploadTokenRequest {
    return {
      filename: isSet(object.filename) ? String(object.filename) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CPartnerAppsRequestUploadTokenRequest): unknown {
    const obj: any = {};
    message.filename !== undefined && (obj.filename = message.filename);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsRequestUploadTokenRequest>, I>>(
    base?: I,
  ): CPartnerAppsRequestUploadTokenRequest {
    return CPartnerAppsRequestUploadTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsRequestUploadTokenRequest>, I>>(
    object: I,
  ): CPartnerAppsRequestUploadTokenRequest {
    const message = createBaseCPartnerAppsRequestUploadTokenRequest();
    message.filename = object.filename ?? "";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPartnerAppsRequestUploadTokenResponse(): CPartnerAppsRequestUploadTokenResponse {
  return { uploadToken: "0", location: "", routingId: "0" };
}

export const CPartnerAppsRequestUploadTokenResponse = {
  encode(message: CPartnerAppsRequestUploadTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "0") {
      writer.uint32(8).uint64(message.uploadToken);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    if (message.routingId !== "0") {
      writer.uint32(24).uint64(message.routingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsRequestUploadTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsRequestUploadTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.location = reader.string();
          break;
        case 3:
          message.routingId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsRequestUploadTokenResponse {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "0",
      location: isSet(object.location) ? String(object.location) : "",
      routingId: isSet(object.routingId) ? String(object.routingId) : "0",
    };
  },

  toJSON(message: CPartnerAppsRequestUploadTokenResponse): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.location !== undefined && (obj.location = message.location);
    message.routingId !== undefined && (obj.routingId = message.routingId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsRequestUploadTokenResponse>, I>>(
    base?: I,
  ): CPartnerAppsRequestUploadTokenResponse {
    return CPartnerAppsRequestUploadTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsRequestUploadTokenResponse>, I>>(
    object: I,
  ): CPartnerAppsRequestUploadTokenResponse {
    const message = createBaseCPartnerAppsRequestUploadTokenResponse();
    message.uploadToken = object.uploadToken ?? "0";
    message.location = object.location ?? "";
    message.routingId = object.routingId ?? "0";
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadRequest(): CPartnerAppsFinishUploadRequest {
  return { uploadToken: "0", routingId: "0", appId: 0 };
}

export const CPartnerAppsFinishUploadRequest = {
  encode(message: CPartnerAppsFinishUploadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "0") {
      writer.uint32(8).uint64(message.uploadToken);
    }
    if (message.routingId !== "0") {
      writer.uint32(16).uint64(message.routingId);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.routingId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadRequest {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "0",
      routingId: isSet(object.routingId) ? String(object.routingId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CPartnerAppsFinishUploadRequest): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.routingId !== undefined && (obj.routingId = message.routingId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadRequest>, I>>(base?: I): CPartnerAppsFinishUploadRequest {
    return CPartnerAppsFinishUploadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadRequest>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadRequest {
    const message = createBaseCPartnerAppsFinishUploadRequest();
    message.uploadToken = object.uploadToken ?? "0";
    message.routingId = object.routingId ?? "0";
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadKVSignResponse(): CPartnerAppsFinishUploadKVSignResponse {
  return { signedInstallscript: "" };
}

export const CPartnerAppsFinishUploadKVSignResponse = {
  encode(message: CPartnerAppsFinishUploadKVSignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedInstallscript !== "") {
      writer.uint32(10).string(message.signedInstallscript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadKVSignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadKVSignResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedInstallscript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadKVSignResponse {
    return { signedInstallscript: isSet(object.signedInstallscript) ? String(object.signedInstallscript) : "" };
  },

  toJSON(message: CPartnerAppsFinishUploadKVSignResponse): unknown {
    const obj: any = {};
    message.signedInstallscript !== undefined && (obj.signedInstallscript = message.signedInstallscript);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadKVSignResponse>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadKVSignResponse {
    return CPartnerAppsFinishUploadKVSignResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadKVSignResponse>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadKVSignResponse {
    const message = createBaseCPartnerAppsFinishUploadKVSignResponse();
    message.signedInstallscript = object.signedInstallscript ?? "";
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadLegacyDRMRequest(): CPartnerAppsFinishUploadLegacyDRMRequest {
  return { uploadToken: "0", routingId: "0", appId: 0, flags: 0, toolName: "" };
}

export const CPartnerAppsFinishUploadLegacyDRMRequest = {
  encode(message: CPartnerAppsFinishUploadLegacyDRMRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "0") {
      writer.uint32(8).uint64(message.uploadToken);
    }
    if (message.routingId !== "0") {
      writer.uint32(16).uint64(message.routingId);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.flags !== 0) {
      writer.uint32(32).uint32(message.flags);
    }
    if (message.toolName !== "") {
      writer.uint32(42).string(message.toolName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadLegacyDRMRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadLegacyDRMRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.routingId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.flags = reader.uint32();
          break;
        case 5:
          message.toolName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadLegacyDRMRequest {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "0",
      routingId: isSet(object.routingId) ? String(object.routingId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      toolName: isSet(object.toolName) ? String(object.toolName) : "",
    };
  },

  toJSON(message: CPartnerAppsFinishUploadLegacyDRMRequest): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.routingId !== undefined && (obj.routingId = message.routingId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.toolName !== undefined && (obj.toolName = message.toolName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadLegacyDRMRequest>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadLegacyDRMRequest {
    return CPartnerAppsFinishUploadLegacyDRMRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadLegacyDRMRequest>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadLegacyDRMRequest {
    const message = createBaseCPartnerAppsFinishUploadLegacyDRMRequest();
    message.uploadToken = object.uploadToken ?? "0";
    message.routingId = object.routingId ?? "0";
    message.appId = object.appId ?? 0;
    message.flags = object.flags ?? 0;
    message.toolName = object.toolName ?? "";
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadLegacyDRMResponse(): CPartnerAppsFinishUploadLegacyDRMResponse {
  return { fileId: "" };
}

export const CPartnerAppsFinishUploadLegacyDRMResponse = {
  encode(message: CPartnerAppsFinishUploadLegacyDRMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileId !== "") {
      writer.uint32(10).string(message.fileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadLegacyDRMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadLegacyDRMResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadLegacyDRMResponse {
    return { fileId: isSet(object.fileId) ? String(object.fileId) : "" };
  },

  toJSON(message: CPartnerAppsFinishUploadLegacyDRMResponse): unknown {
    const obj: any = {};
    message.fileId !== undefined && (obj.fileId = message.fileId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadLegacyDRMResponse>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadLegacyDRMResponse {
    return CPartnerAppsFinishUploadLegacyDRMResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadLegacyDRMResponse>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadLegacyDRMResponse {
    const message = createBaseCPartnerAppsFinishUploadLegacyDRMResponse();
    message.fileId = object.fileId ?? "";
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadResponse(): CPartnerAppsFinishUploadResponse {
  return {};
}

export const CPartnerAppsFinishUploadResponse = {
  encode(_: CPartnerAppsFinishUploadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadResponse();
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

  fromJSON(_: any): CPartnerAppsFinishUploadResponse {
    return {};
  },

  toJSON(_: CPartnerAppsFinishUploadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadResponse>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadResponse {
    return CPartnerAppsFinishUploadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadResponse>, I>>(
    _: I,
  ): CPartnerAppsFinishUploadResponse {
    const message = createBaseCPartnerAppsFinishUploadResponse();
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadDepotRequest(): CPartnerAppsFinishUploadDepotRequest {
  return { uploadToken: "0", routingId: "0", appId: 0, depotId: 0, buildFlags: 0 };
}

export const CPartnerAppsFinishUploadDepotRequest = {
  encode(message: CPartnerAppsFinishUploadDepotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "0") {
      writer.uint32(8).uint64(message.uploadToken);
    }
    if (message.routingId !== "0") {
      writer.uint32(16).uint64(message.routingId);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.depotId !== 0) {
      writer.uint32(32).uint32(message.depotId);
    }
    if (message.buildFlags !== 0) {
      writer.uint32(40).uint32(message.buildFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadDepotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadDepotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.routingId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.depotId = reader.uint32();
          break;
        case 5:
          message.buildFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadDepotRequest {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "0",
      routingId: isSet(object.routingId) ? String(object.routingId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      buildFlags: isSet(object.buildFlags) ? Number(object.buildFlags) : 0,
    };
  },

  toJSON(message: CPartnerAppsFinishUploadDepotRequest): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.routingId !== undefined && (obj.routingId = message.routingId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.buildFlags !== undefined && (obj.buildFlags = Math.round(message.buildFlags));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadDepotRequest>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadDepotRequest {
    return CPartnerAppsFinishUploadDepotRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadDepotRequest>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadDepotRequest {
    const message = createBaseCPartnerAppsFinishUploadDepotRequest();
    message.uploadToken = object.uploadToken ?? "0";
    message.routingId = object.routingId ?? "0";
    message.appId = object.appId ?? 0;
    message.depotId = object.depotId ?? 0;
    message.buildFlags = object.buildFlags ?? 0;
    return message;
  },
};

function createBaseCPartnerAppsFinishUploadDepotResponse(): CPartnerAppsFinishUploadDepotResponse {
  return { buildRoutingId: "0" };
}

export const CPartnerAppsFinishUploadDepotResponse = {
  encode(message: CPartnerAppsFinishUploadDepotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buildRoutingId !== "0") {
      writer.uint32(8).uint64(message.buildRoutingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFinishUploadDepotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFinishUploadDepotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildRoutingId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFinishUploadDepotResponse {
    return { buildRoutingId: isSet(object.buildRoutingId) ? String(object.buildRoutingId) : "0" };
  },

  toJSON(message: CPartnerAppsFinishUploadDepotResponse): unknown {
    const obj: any = {};
    message.buildRoutingId !== undefined && (obj.buildRoutingId = message.buildRoutingId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFinishUploadDepotResponse>, I>>(
    base?: I,
  ): CPartnerAppsFinishUploadDepotResponse {
    return CPartnerAppsFinishUploadDepotResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFinishUploadDepotResponse>, I>>(
    object: I,
  ): CPartnerAppsFinishUploadDepotResponse {
    const message = createBaseCPartnerAppsFinishUploadDepotResponse();
    message.buildRoutingId = object.buildRoutingId ?? "0";
    return message;
  },
};

function createBaseCPartnerAppsGetDepotBuildResultRequest(): CPartnerAppsGetDepotBuildResultRequest {
  return { uploadToken: "0", routingId: "0" };
}

export const CPartnerAppsGetDepotBuildResultRequest = {
  encode(message: CPartnerAppsGetDepotBuildResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uploadToken !== "0") {
      writer.uint32(8).uint64(message.uploadToken);
    }
    if (message.routingId !== "0") {
      writer.uint32(16).uint64(message.routingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsGetDepotBuildResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsGetDepotBuildResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploadToken = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.routingId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsGetDepotBuildResultRequest {
    return {
      uploadToken: isSet(object.uploadToken) ? String(object.uploadToken) : "0",
      routingId: isSet(object.routingId) ? String(object.routingId) : "0",
    };
  },

  toJSON(message: CPartnerAppsGetDepotBuildResultRequest): unknown {
    const obj: any = {};
    message.uploadToken !== undefined && (obj.uploadToken = message.uploadToken);
    message.routingId !== undefined && (obj.routingId = message.routingId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsGetDepotBuildResultRequest>, I>>(
    base?: I,
  ): CPartnerAppsGetDepotBuildResultRequest {
    return CPartnerAppsGetDepotBuildResultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsGetDepotBuildResultRequest>, I>>(
    object: I,
  ): CPartnerAppsGetDepotBuildResultRequest {
    const message = createBaseCPartnerAppsGetDepotBuildResultRequest();
    message.uploadToken = object.uploadToken ?? "0";
    message.routingId = object.routingId ?? "0";
    return message;
  },
};

function createBaseCPartnerAppsGetDepotBuildResultResponse(): CPartnerAppsGetDepotBuildResultResponse {
  return { manifestId: "0", errorMsg: "" };
}

export const CPartnerAppsGetDepotBuildResultResponse = {
  encode(message: CPartnerAppsGetDepotBuildResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.manifestId !== "0") {
      writer.uint32(8).uint64(message.manifestId);
    }
    if (message.errorMsg !== "") {
      writer.uint32(18).string(message.errorMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsGetDepotBuildResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsGetDepotBuildResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manifestId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.errorMsg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsGetDepotBuildResultResponse {
    return {
      manifestId: isSet(object.manifestId) ? String(object.manifestId) : "0",
      errorMsg: isSet(object.errorMsg) ? String(object.errorMsg) : "",
    };
  },

  toJSON(message: CPartnerAppsGetDepotBuildResultResponse): unknown {
    const obj: any = {};
    message.manifestId !== undefined && (obj.manifestId = message.manifestId);
    message.errorMsg !== undefined && (obj.errorMsg = message.errorMsg);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsGetDepotBuildResultResponse>, I>>(
    base?: I,
  ): CPartnerAppsGetDepotBuildResultResponse {
    return CPartnerAppsGetDepotBuildResultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsGetDepotBuildResultResponse>, I>>(
    object: I,
  ): CPartnerAppsGetDepotBuildResultResponse {
    const message = createBaseCPartnerAppsGetDepotBuildResultResponse();
    message.manifestId = object.manifestId ?? "0";
    message.errorMsg = object.errorMsg ?? "";
    return message;
  },
};

function createBaseCPartnerAppsFindDRMUploadsRequest(): CPartnerAppsFindDRMUploadsRequest {
  return { appId: 0 };
}

export const CPartnerAppsFindDRMUploadsRequest = {
  encode(message: CPartnerAppsFindDRMUploadsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).int32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFindDRMUploadsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFindDRMUploadsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFindDRMUploadsRequest {
    return { appId: isSet(object.appId) ? Number(object.appId) : 0 };
  },

  toJSON(message: CPartnerAppsFindDRMUploadsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFindDRMUploadsRequest>, I>>(
    base?: I,
  ): CPartnerAppsFindDRMUploadsRequest {
    return CPartnerAppsFindDRMUploadsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFindDRMUploadsRequest>, I>>(
    object: I,
  ): CPartnerAppsFindDRMUploadsRequest {
    const message = createBaseCPartnerAppsFindDRMUploadsRequest();
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCPartnerAppsExistingDRMUpload(): CPartnerAppsExistingDRMUpload {
  return { fileId: "", appId: 0, actorId: 0, suppliedName: "", flags: 0, modType: "", timestamp: 0, origFileId: "" };
}

export const CPartnerAppsExistingDRMUpload = {
  encode(message: CPartnerAppsExistingDRMUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileId !== "") {
      writer.uint32(10).string(message.fileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.actorId !== 0) {
      writer.uint32(24).int32(message.actorId);
    }
    if (message.suppliedName !== "") {
      writer.uint32(42).string(message.suppliedName);
    }
    if (message.flags !== 0) {
      writer.uint32(48).uint32(message.flags);
    }
    if (message.modType !== "") {
      writer.uint32(58).string(message.modType);
    }
    if (message.timestamp !== 0) {
      writer.uint32(69).fixed32(message.timestamp);
    }
    if (message.origFileId !== "") {
      writer.uint32(74).string(message.origFileId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsExistingDRMUpload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsExistingDRMUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileId = reader.string();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.actorId = reader.int32();
          break;
        case 5:
          message.suppliedName = reader.string();
          break;
        case 6:
          message.flags = reader.uint32();
          break;
        case 7:
          message.modType = reader.string();
          break;
        case 8:
          message.timestamp = reader.fixed32();
          break;
        case 9:
          message.origFileId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsExistingDRMUpload {
    return {
      fileId: isSet(object.fileId) ? String(object.fileId) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      actorId: isSet(object.actorId) ? Number(object.actorId) : 0,
      suppliedName: isSet(object.suppliedName) ? String(object.suppliedName) : "",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      modType: isSet(object.modType) ? String(object.modType) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      origFileId: isSet(object.origFileId) ? String(object.origFileId) : "",
    };
  },

  toJSON(message: CPartnerAppsExistingDRMUpload): unknown {
    const obj: any = {};
    message.fileId !== undefined && (obj.fileId = message.fileId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.actorId !== undefined && (obj.actorId = Math.round(message.actorId));
    message.suppliedName !== undefined && (obj.suppliedName = message.suppliedName);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.modType !== undefined && (obj.modType = message.modType);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.origFileId !== undefined && (obj.origFileId = message.origFileId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsExistingDRMUpload>, I>>(base?: I): CPartnerAppsExistingDRMUpload {
    return CPartnerAppsExistingDRMUpload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsExistingDRMUpload>, I>>(
    object: I,
  ): CPartnerAppsExistingDRMUpload {
    const message = createBaseCPartnerAppsExistingDRMUpload();
    message.fileId = object.fileId ?? "";
    message.appId = object.appId ?? 0;
    message.actorId = object.actorId ?? 0;
    message.suppliedName = object.suppliedName ?? "";
    message.flags = object.flags ?? 0;
    message.modType = object.modType ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.origFileId = object.origFileId ?? "";
    return message;
  },
};

function createBaseCPartnerAppsFindDRMUploadsResponse(): CPartnerAppsFindDRMUploadsResponse {
  return { uploads: [] };
}

export const CPartnerAppsFindDRMUploadsResponse = {
  encode(message: CPartnerAppsFindDRMUploadsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uploads) {
      CPartnerAppsExistingDRMUpload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsFindDRMUploadsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsFindDRMUploadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploads.push(CPartnerAppsExistingDRMUpload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsFindDRMUploadsResponse {
    return {
      uploads: Array.isArray(object?.uploads)
        ? object.uploads.map((e: any) => CPartnerAppsExistingDRMUpload.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPartnerAppsFindDRMUploadsResponse): unknown {
    const obj: any = {};
    if (message.uploads) {
      obj.uploads = message.uploads.map((e) => e ? CPartnerAppsExistingDRMUpload.toJSON(e) : undefined);
    } else {
      obj.uploads = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsFindDRMUploadsResponse>, I>>(
    base?: I,
  ): CPartnerAppsFindDRMUploadsResponse {
    return CPartnerAppsFindDRMUploadsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsFindDRMUploadsResponse>, I>>(
    object: I,
  ): CPartnerAppsFindDRMUploadsResponse {
    const message = createBaseCPartnerAppsFindDRMUploadsResponse();
    message.uploads = object.uploads?.map((e) => CPartnerAppsExistingDRMUpload.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPartnerAppsDownloadRequest(): CPartnerAppsDownloadRequest {
  return { fileId: "", appId: 0 };
}

export const CPartnerAppsDownloadRequest = {
  encode(message: CPartnerAppsDownloadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fileId !== "") {
      writer.uint32(10).string(message.fileId);
    }
    if (message.appId !== 0) {
      writer.uint32(16).int32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsDownloadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsDownloadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileId = reader.string();
          break;
        case 2:
          message.appId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsDownloadRequest {
    return {
      fileId: isSet(object.fileId) ? String(object.fileId) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CPartnerAppsDownloadRequest): unknown {
    const obj: any = {};
    message.fileId !== undefined && (obj.fileId = message.fileId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsDownloadRequest>, I>>(base?: I): CPartnerAppsDownloadRequest {
    return CPartnerAppsDownloadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsDownloadRequest>, I>>(object: I): CPartnerAppsDownloadRequest {
    const message = createBaseCPartnerAppsDownloadRequest();
    message.fileId = object.fileId ?? "";
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCPartnerAppsDownloadResponse(): CPartnerAppsDownloadResponse {
  return { downloadUrl: "", appId: 0 };
}

export const CPartnerAppsDownloadResponse = {
  encode(message: CPartnerAppsDownloadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downloadUrl !== "") {
      writer.uint32(10).string(message.downloadUrl);
    }
    if (message.appId !== 0) {
      writer.uint32(16).int32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartnerAppsDownloadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartnerAppsDownloadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.downloadUrl = reader.string();
          break;
        case 2:
          message.appId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartnerAppsDownloadResponse {
    return {
      downloadUrl: isSet(object.downloadUrl) ? String(object.downloadUrl) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CPartnerAppsDownloadResponse): unknown {
    const obj: any = {};
    message.downloadUrl !== undefined && (obj.downloadUrl = message.downloadUrl);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartnerAppsDownloadResponse>, I>>(base?: I): CPartnerAppsDownloadResponse {
    return CPartnerAppsDownloadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartnerAppsDownloadResponse>, I>>(object: I): CPartnerAppsDownloadResponse {
    const message = createBaseCPartnerAppsDownloadResponse();
    message.downloadUrl = object.downloadUrl ?? "";
    message.appId = object.appId ?? 0;
    return message;
  },
};

export interface PartnerApps {
  RequestKVSignUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse>;
  RequestDRMUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse>;
  RequestCEGUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse>;
  RequestDepotUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse>;
  FinishUploadKVSign(request: CPartnerAppsFinishUploadRequest): Promise<CPartnerAppsFinishUploadKVSignResponse>;
  FinishUploadDRMUpload(
    request: CPartnerAppsFinishUploadLegacyDRMRequest,
  ): Promise<CPartnerAppsFinishUploadLegacyDRMResponse>;
  FinishUploadCEGUpload(request: CPartnerAppsFinishUploadRequest): Promise<CPartnerAppsFinishUploadResponse>;
  FinishUploadDepotUpload(
    request: CPartnerAppsFinishUploadDepotRequest,
  ): Promise<CPartnerAppsFinishUploadDepotResponse>;
  GetDepotBuildResult(
    request: CPartnerAppsGetDepotBuildResultRequest,
  ): Promise<CPartnerAppsGetDepotBuildResultResponse>;
  FindDRMUploads(request: CPartnerAppsFindDRMUploadsRequest): Promise<CPartnerAppsFindDRMUploadsResponse>;
  Download(request: CPartnerAppsDownloadRequest): Promise<CPartnerAppsDownloadResponse>;
}

export class PartnerAppsClientImpl implements PartnerApps {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PartnerApps";
    this.rpc = rpc;
    this.RequestKVSignUploadToken = this.RequestKVSignUploadToken.bind(this);
    this.RequestDRMUploadToken = this.RequestDRMUploadToken.bind(this);
    this.RequestCEGUploadToken = this.RequestCEGUploadToken.bind(this);
    this.RequestDepotUploadToken = this.RequestDepotUploadToken.bind(this);
    this.FinishUploadKVSign = this.FinishUploadKVSign.bind(this);
    this.FinishUploadDRMUpload = this.FinishUploadDRMUpload.bind(this);
    this.FinishUploadCEGUpload = this.FinishUploadCEGUpload.bind(this);
    this.FinishUploadDepotUpload = this.FinishUploadDepotUpload.bind(this);
    this.GetDepotBuildResult = this.GetDepotBuildResult.bind(this);
    this.FindDRMUploads = this.FindDRMUploads.bind(this);
    this.Download = this.Download.bind(this);
  }
  RequestKVSignUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse> {
    const data = CPartnerAppsRequestUploadTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestKVSignUploadToken", data);
    return promise.then((data) => CPartnerAppsRequestUploadTokenResponse.decode(new _m0.Reader(data)));
  }

  RequestDRMUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse> {
    const data = CPartnerAppsRequestUploadTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestDRMUploadToken", data);
    return promise.then((data) => CPartnerAppsRequestUploadTokenResponse.decode(new _m0.Reader(data)));
  }

  RequestCEGUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse> {
    const data = CPartnerAppsRequestUploadTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestCEGUploadToken", data);
    return promise.then((data) => CPartnerAppsRequestUploadTokenResponse.decode(new _m0.Reader(data)));
  }

  RequestDepotUploadToken(
    request: CPartnerAppsRequestUploadTokenRequest,
  ): Promise<CPartnerAppsRequestUploadTokenResponse> {
    const data = CPartnerAppsRequestUploadTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestDepotUploadToken", data);
    return promise.then((data) => CPartnerAppsRequestUploadTokenResponse.decode(new _m0.Reader(data)));
  }

  FinishUploadKVSign(request: CPartnerAppsFinishUploadRequest): Promise<CPartnerAppsFinishUploadKVSignResponse> {
    const data = CPartnerAppsFinishUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishUploadKVSign", data);
    return promise.then((data) => CPartnerAppsFinishUploadKVSignResponse.decode(new _m0.Reader(data)));
  }

  FinishUploadDRMUpload(
    request: CPartnerAppsFinishUploadLegacyDRMRequest,
  ): Promise<CPartnerAppsFinishUploadLegacyDRMResponse> {
    const data = CPartnerAppsFinishUploadLegacyDRMRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishUploadDRMUpload", data);
    return promise.then((data) => CPartnerAppsFinishUploadLegacyDRMResponse.decode(new _m0.Reader(data)));
  }

  FinishUploadCEGUpload(request: CPartnerAppsFinishUploadRequest): Promise<CPartnerAppsFinishUploadResponse> {
    const data = CPartnerAppsFinishUploadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishUploadCEGUpload", data);
    return promise.then((data) => CPartnerAppsFinishUploadResponse.decode(new _m0.Reader(data)));
  }

  FinishUploadDepotUpload(
    request: CPartnerAppsFinishUploadDepotRequest,
  ): Promise<CPartnerAppsFinishUploadDepotResponse> {
    const data = CPartnerAppsFinishUploadDepotRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinishUploadDepotUpload", data);
    return promise.then((data) => CPartnerAppsFinishUploadDepotResponse.decode(new _m0.Reader(data)));
  }

  GetDepotBuildResult(
    request: CPartnerAppsGetDepotBuildResultRequest,
  ): Promise<CPartnerAppsGetDepotBuildResultResponse> {
    const data = CPartnerAppsGetDepotBuildResultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDepotBuildResult", data);
    return promise.then((data) => CPartnerAppsGetDepotBuildResultResponse.decode(new _m0.Reader(data)));
  }

  FindDRMUploads(request: CPartnerAppsFindDRMUploadsRequest): Promise<CPartnerAppsFindDRMUploadsResponse> {
    const data = CPartnerAppsFindDRMUploadsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindDRMUploads", data);
    return promise.then((data) => CPartnerAppsFindDRMUploadsResponse.decode(new _m0.Reader(data)));
  }

  Download(request: CPartnerAppsDownloadRequest): Promise<CPartnerAppsDownloadResponse> {
    const data = CPartnerAppsDownloadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Download", data);
    return promise.then((data) => CPartnerAppsDownloadResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
