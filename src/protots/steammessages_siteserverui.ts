/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SiteServerUILoginRequest {
  username: string;
  password: string;
  steamguardcode: string;
  rememberPassword: boolean;
}

export interface SiteServerUILoginResponse {
  logonState: number;
  logonEresult: number;
}

export interface SiteServerUILoginStatusRequest {
}

export interface SiteServerUILoginStatusResponse {
  username: string;
  cachedCredentials: boolean;
  logonState: number;
  logonEresult: number;
}

export interface SiteServerUICancelLoginRequest {
}

export interface SiteServerUICancelLoginResponse {
  logonState: number;
  logonEresult: number;
}

export interface SiteServerUILogoutRequest {
}

export interface SiteServerUILogoutResponse {
  logonState: number;
  logoutEresult: number;
}

export interface SiteServerUIQuitRequest {
  restart: boolean;
}

export interface SiteServerUIQuitResponse {
}

export interface SiteServerUIStatusRequest {
}

export interface SiteServerUIStatusResponse {
  logonState: number;
  logonEresult: number;
  connected: boolean;
  cacheEnabled: boolean;
  acctStatus: number;
}

export interface SiteServerUIGetLanguageRequest {
}

export interface SiteServerUIGetLanguageResponse {
  language: string;
}

export interface SiteServerUISetLanguageRequest {
  language: string;
}

export interface SiteServerUISetLanguageResponse {
}

export interface SiteServerUIClientStatusRequest {
}

export interface SiteServerUIClientStatusResponse {
  clients: SiteServerUIClientStatusResponse_ClientInfo[];
  payments: SiteServerUIClientStatusResponse_Payment[];
}

export interface SiteServerUIClientStatusResponse_ClientInfo {
  ip: number;
  hostname: string;
  connected: boolean;
  instanceId: number;
}

export interface SiteServerUIClientStatusResponse_Payment {
  transid: number;
  steamid: number;
  amount: string;
  timeCreated: number;
  purchaseStatus: number;
  hostname: string;
  personaName: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface SiteServerUIContentCacheStatusRequest {
}

export interface SiteServerUIContentCacheStatusResponse {
  enabled: boolean;
  port: number;
  cacheLocation: string;
  maxSizeGb: number;
  p2pEnabled: boolean;
  explicitIpAddress: string;
  externalProcess: boolean;
  currentSizeGb: number;
  currentBw: number;
  totalBytesServed: number;
}

export interface SiteServerUIContentCacheConfigRequest {
  enabled: boolean;
  port: number;
  cacheLocation: string;
  maxSizeGb: number;
  p2pEnabled: boolean;
  externalProcess: boolean;
  explicitIpAddress: string;
}

export interface SiteServerUIContentCacheConfigResponse {
}

function createBaseSiteServerUILoginRequest(): SiteServerUILoginRequest {
  return { username: "", password: "", steamguardcode: "", rememberPassword: false };
}

export const SiteServerUILoginRequest = {
  encode(message: SiteServerUILoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.steamguardcode !== "") {
      writer.uint32(26).string(message.steamguardcode);
    }
    if (message.rememberPassword === true) {
      writer.uint32(32).bool(message.rememberPassword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        case 3:
          message.steamguardcode = reader.string();
          break;
        case 4:
          message.rememberPassword = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUILoginRequest {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      steamguardcode: isSet(object.steamguardcode) ? String(object.steamguardcode) : "",
      rememberPassword: isSet(object.rememberPassword) ? Boolean(object.rememberPassword) : false,
    };
  },

  toJSON(message: SiteServerUILoginRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.steamguardcode !== undefined && (obj.steamguardcode = message.steamguardcode);
    message.rememberPassword !== undefined && (obj.rememberPassword = message.rememberPassword);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILoginRequest>, I>>(base?: I): SiteServerUILoginRequest {
    return SiteServerUILoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILoginRequest>, I>>(object: I): SiteServerUILoginRequest {
    const message = createBaseSiteServerUILoginRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.steamguardcode = object.steamguardcode ?? "";
    message.rememberPassword = object.rememberPassword ?? false;
    return message;
  },
};

function createBaseSiteServerUILoginResponse(): SiteServerUILoginResponse {
  return { logonState: 0, logonEresult: 0 };
}

export const SiteServerUILoginResponse = {
  encode(message: SiteServerUILoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logonState !== 0) {
      writer.uint32(8).int32(message.logonState);
    }
    if (message.logonEresult !== 0) {
      writer.uint32(16).int32(message.logonEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logonState = reader.int32();
          break;
        case 2:
          message.logonEresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUILoginResponse {
    return {
      logonState: isSet(object.logonState) ? Number(object.logonState) : 0,
      logonEresult: isSet(object.logonEresult) ? Number(object.logonEresult) : 0,
    };
  },

  toJSON(message: SiteServerUILoginResponse): unknown {
    const obj: any = {};
    message.logonState !== undefined && (obj.logonState = Math.round(message.logonState));
    message.logonEresult !== undefined && (obj.logonEresult = Math.round(message.logonEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILoginResponse>, I>>(base?: I): SiteServerUILoginResponse {
    return SiteServerUILoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILoginResponse>, I>>(object: I): SiteServerUILoginResponse {
    const message = createBaseSiteServerUILoginResponse();
    message.logonState = object.logonState ?? 0;
    message.logonEresult = object.logonEresult ?? 0;
    return message;
  },
};

function createBaseSiteServerUILoginStatusRequest(): SiteServerUILoginStatusRequest {
  return {};
}

export const SiteServerUILoginStatusRequest = {
  encode(_: SiteServerUILoginStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILoginStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILoginStatusRequest();
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

  fromJSON(_: any): SiteServerUILoginStatusRequest {
    return {};
  },

  toJSON(_: SiteServerUILoginStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILoginStatusRequest>, I>>(base?: I): SiteServerUILoginStatusRequest {
    return SiteServerUILoginStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILoginStatusRequest>, I>>(_: I): SiteServerUILoginStatusRequest {
    const message = createBaseSiteServerUILoginStatusRequest();
    return message;
  },
};

function createBaseSiteServerUILoginStatusResponse(): SiteServerUILoginStatusResponse {
  return { username: "", cachedCredentials: false, logonState: 0, logonEresult: 0 };
}

export const SiteServerUILoginStatusResponse = {
  encode(message: SiteServerUILoginStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.cachedCredentials === true) {
      writer.uint32(16).bool(message.cachedCredentials);
    }
    if (message.logonState !== 0) {
      writer.uint32(24).int32(message.logonState);
    }
    if (message.logonEresult !== 0) {
      writer.uint32(32).int32(message.logonEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILoginStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILoginStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.cachedCredentials = reader.bool();
          break;
        case 3:
          message.logonState = reader.int32();
          break;
        case 4:
          message.logonEresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUILoginStatusResponse {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      cachedCredentials: isSet(object.cachedCredentials) ? Boolean(object.cachedCredentials) : false,
      logonState: isSet(object.logonState) ? Number(object.logonState) : 0,
      logonEresult: isSet(object.logonEresult) ? Number(object.logonEresult) : 0,
    };
  },

  toJSON(message: SiteServerUILoginStatusResponse): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.cachedCredentials !== undefined && (obj.cachedCredentials = message.cachedCredentials);
    message.logonState !== undefined && (obj.logonState = Math.round(message.logonState));
    message.logonEresult !== undefined && (obj.logonEresult = Math.round(message.logonEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILoginStatusResponse>, I>>(base?: I): SiteServerUILoginStatusResponse {
    return SiteServerUILoginStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILoginStatusResponse>, I>>(
    object: I,
  ): SiteServerUILoginStatusResponse {
    const message = createBaseSiteServerUILoginStatusResponse();
    message.username = object.username ?? "";
    message.cachedCredentials = object.cachedCredentials ?? false;
    message.logonState = object.logonState ?? 0;
    message.logonEresult = object.logonEresult ?? 0;
    return message;
  },
};

function createBaseSiteServerUICancelLoginRequest(): SiteServerUICancelLoginRequest {
  return {};
}

export const SiteServerUICancelLoginRequest = {
  encode(_: SiteServerUICancelLoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUICancelLoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUICancelLoginRequest();
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

  fromJSON(_: any): SiteServerUICancelLoginRequest {
    return {};
  },

  toJSON(_: SiteServerUICancelLoginRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUICancelLoginRequest>, I>>(base?: I): SiteServerUICancelLoginRequest {
    return SiteServerUICancelLoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUICancelLoginRequest>, I>>(_: I): SiteServerUICancelLoginRequest {
    const message = createBaseSiteServerUICancelLoginRequest();
    return message;
  },
};

function createBaseSiteServerUICancelLoginResponse(): SiteServerUICancelLoginResponse {
  return { logonState: 0, logonEresult: 0 };
}

export const SiteServerUICancelLoginResponse = {
  encode(message: SiteServerUICancelLoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logonState !== 0) {
      writer.uint32(8).int32(message.logonState);
    }
    if (message.logonEresult !== 0) {
      writer.uint32(16).int32(message.logonEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUICancelLoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUICancelLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logonState = reader.int32();
          break;
        case 2:
          message.logonEresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUICancelLoginResponse {
    return {
      logonState: isSet(object.logonState) ? Number(object.logonState) : 0,
      logonEresult: isSet(object.logonEresult) ? Number(object.logonEresult) : 0,
    };
  },

  toJSON(message: SiteServerUICancelLoginResponse): unknown {
    const obj: any = {};
    message.logonState !== undefined && (obj.logonState = Math.round(message.logonState));
    message.logonEresult !== undefined && (obj.logonEresult = Math.round(message.logonEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUICancelLoginResponse>, I>>(base?: I): SiteServerUICancelLoginResponse {
    return SiteServerUICancelLoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUICancelLoginResponse>, I>>(
    object: I,
  ): SiteServerUICancelLoginResponse {
    const message = createBaseSiteServerUICancelLoginResponse();
    message.logonState = object.logonState ?? 0;
    message.logonEresult = object.logonEresult ?? 0;
    return message;
  },
};

function createBaseSiteServerUILogoutRequest(): SiteServerUILogoutRequest {
  return {};
}

export const SiteServerUILogoutRequest = {
  encode(_: SiteServerUILogoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILogoutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILogoutRequest();
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

  fromJSON(_: any): SiteServerUILogoutRequest {
    return {};
  },

  toJSON(_: SiteServerUILogoutRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILogoutRequest>, I>>(base?: I): SiteServerUILogoutRequest {
    return SiteServerUILogoutRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILogoutRequest>, I>>(_: I): SiteServerUILogoutRequest {
    const message = createBaseSiteServerUILogoutRequest();
    return message;
  },
};

function createBaseSiteServerUILogoutResponse(): SiteServerUILogoutResponse {
  return { logonState: 0, logoutEresult: 0 };
}

export const SiteServerUILogoutResponse = {
  encode(message: SiteServerUILogoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logonState !== 0) {
      writer.uint32(8).int32(message.logonState);
    }
    if (message.logoutEresult !== 0) {
      writer.uint32(16).int32(message.logoutEresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUILogoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUILogoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logonState = reader.int32();
          break;
        case 2:
          message.logoutEresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUILogoutResponse {
    return {
      logonState: isSet(object.logonState) ? Number(object.logonState) : 0,
      logoutEresult: isSet(object.logoutEresult) ? Number(object.logoutEresult) : 0,
    };
  },

  toJSON(message: SiteServerUILogoutResponse): unknown {
    const obj: any = {};
    message.logonState !== undefined && (obj.logonState = Math.round(message.logonState));
    message.logoutEresult !== undefined && (obj.logoutEresult = Math.round(message.logoutEresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUILogoutResponse>, I>>(base?: I): SiteServerUILogoutResponse {
    return SiteServerUILogoutResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUILogoutResponse>, I>>(object: I): SiteServerUILogoutResponse {
    const message = createBaseSiteServerUILogoutResponse();
    message.logonState = object.logonState ?? 0;
    message.logoutEresult = object.logoutEresult ?? 0;
    return message;
  },
};

function createBaseSiteServerUIQuitRequest(): SiteServerUIQuitRequest {
  return { restart: false };
}

export const SiteServerUIQuitRequest = {
  encode(message: SiteServerUIQuitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.restart === true) {
      writer.uint32(8).bool(message.restart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIQuitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIQuitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.restart = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIQuitRequest {
    return { restart: isSet(object.restart) ? Boolean(object.restart) : false };
  },

  toJSON(message: SiteServerUIQuitRequest): unknown {
    const obj: any = {};
    message.restart !== undefined && (obj.restart = message.restart);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIQuitRequest>, I>>(base?: I): SiteServerUIQuitRequest {
    return SiteServerUIQuitRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIQuitRequest>, I>>(object: I): SiteServerUIQuitRequest {
    const message = createBaseSiteServerUIQuitRequest();
    message.restart = object.restart ?? false;
    return message;
  },
};

function createBaseSiteServerUIQuitResponse(): SiteServerUIQuitResponse {
  return {};
}

export const SiteServerUIQuitResponse = {
  encode(_: SiteServerUIQuitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIQuitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIQuitResponse();
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

  fromJSON(_: any): SiteServerUIQuitResponse {
    return {};
  },

  toJSON(_: SiteServerUIQuitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIQuitResponse>, I>>(base?: I): SiteServerUIQuitResponse {
    return SiteServerUIQuitResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIQuitResponse>, I>>(_: I): SiteServerUIQuitResponse {
    const message = createBaseSiteServerUIQuitResponse();
    return message;
  },
};

function createBaseSiteServerUIStatusRequest(): SiteServerUIStatusRequest {
  return {};
}

export const SiteServerUIStatusRequest = {
  encode(_: SiteServerUIStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIStatusRequest();
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

  fromJSON(_: any): SiteServerUIStatusRequest {
    return {};
  },

  toJSON(_: SiteServerUIStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIStatusRequest>, I>>(base?: I): SiteServerUIStatusRequest {
    return SiteServerUIStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIStatusRequest>, I>>(_: I): SiteServerUIStatusRequest {
    const message = createBaseSiteServerUIStatusRequest();
    return message;
  },
};

function createBaseSiteServerUIStatusResponse(): SiteServerUIStatusResponse {
  return { logonState: 0, logonEresult: 0, connected: false, cacheEnabled: false, acctStatus: 0 };
}

export const SiteServerUIStatusResponse = {
  encode(message: SiteServerUIStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logonState !== 0) {
      writer.uint32(8).int32(message.logonState);
    }
    if (message.logonEresult !== 0) {
      writer.uint32(16).int32(message.logonEresult);
    }
    if (message.connected === true) {
      writer.uint32(24).bool(message.connected);
    }
    if (message.cacheEnabled === true) {
      writer.uint32(32).bool(message.cacheEnabled);
    }
    if (message.acctStatus !== 0) {
      writer.uint32(40).int32(message.acctStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logonState = reader.int32();
          break;
        case 2:
          message.logonEresult = reader.int32();
          break;
        case 3:
          message.connected = reader.bool();
          break;
        case 4:
          message.cacheEnabled = reader.bool();
          break;
        case 5:
          message.acctStatus = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIStatusResponse {
    return {
      logonState: isSet(object.logonState) ? Number(object.logonState) : 0,
      logonEresult: isSet(object.logonEresult) ? Number(object.logonEresult) : 0,
      connected: isSet(object.connected) ? Boolean(object.connected) : false,
      cacheEnabled: isSet(object.cacheEnabled) ? Boolean(object.cacheEnabled) : false,
      acctStatus: isSet(object.acctStatus) ? Number(object.acctStatus) : 0,
    };
  },

  toJSON(message: SiteServerUIStatusResponse): unknown {
    const obj: any = {};
    message.logonState !== undefined && (obj.logonState = Math.round(message.logonState));
    message.logonEresult !== undefined && (obj.logonEresult = Math.round(message.logonEresult));
    message.connected !== undefined && (obj.connected = message.connected);
    message.cacheEnabled !== undefined && (obj.cacheEnabled = message.cacheEnabled);
    message.acctStatus !== undefined && (obj.acctStatus = Math.round(message.acctStatus));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIStatusResponse>, I>>(base?: I): SiteServerUIStatusResponse {
    return SiteServerUIStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIStatusResponse>, I>>(object: I): SiteServerUIStatusResponse {
    const message = createBaseSiteServerUIStatusResponse();
    message.logonState = object.logonState ?? 0;
    message.logonEresult = object.logonEresult ?? 0;
    message.connected = object.connected ?? false;
    message.cacheEnabled = object.cacheEnabled ?? false;
    message.acctStatus = object.acctStatus ?? 0;
    return message;
  },
};

function createBaseSiteServerUIGetLanguageRequest(): SiteServerUIGetLanguageRequest {
  return {};
}

export const SiteServerUIGetLanguageRequest = {
  encode(_: SiteServerUIGetLanguageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIGetLanguageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIGetLanguageRequest();
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

  fromJSON(_: any): SiteServerUIGetLanguageRequest {
    return {};
  },

  toJSON(_: SiteServerUIGetLanguageRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIGetLanguageRequest>, I>>(base?: I): SiteServerUIGetLanguageRequest {
    return SiteServerUIGetLanguageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIGetLanguageRequest>, I>>(_: I): SiteServerUIGetLanguageRequest {
    const message = createBaseSiteServerUIGetLanguageRequest();
    return message;
  },
};

function createBaseSiteServerUIGetLanguageResponse(): SiteServerUIGetLanguageResponse {
  return { language: "" };
}

export const SiteServerUIGetLanguageResponse = {
  encode(message: SiteServerUIGetLanguageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIGetLanguageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIGetLanguageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIGetLanguageResponse {
    return { language: isSet(object.language) ? String(object.language) : "" };
  },

  toJSON(message: SiteServerUIGetLanguageResponse): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIGetLanguageResponse>, I>>(base?: I): SiteServerUIGetLanguageResponse {
    return SiteServerUIGetLanguageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIGetLanguageResponse>, I>>(
    object: I,
  ): SiteServerUIGetLanguageResponse {
    const message = createBaseSiteServerUIGetLanguageResponse();
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseSiteServerUISetLanguageRequest(): SiteServerUISetLanguageRequest {
  return { language: "" };
}

export const SiteServerUISetLanguageRequest = {
  encode(message: SiteServerUISetLanguageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUISetLanguageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUISetLanguageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUISetLanguageRequest {
    return { language: isSet(object.language) ? String(object.language) : "" };
  },

  toJSON(message: SiteServerUISetLanguageRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUISetLanguageRequest>, I>>(base?: I): SiteServerUISetLanguageRequest {
    return SiteServerUISetLanguageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUISetLanguageRequest>, I>>(
    object: I,
  ): SiteServerUISetLanguageRequest {
    const message = createBaseSiteServerUISetLanguageRequest();
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseSiteServerUISetLanguageResponse(): SiteServerUISetLanguageResponse {
  return {};
}

export const SiteServerUISetLanguageResponse = {
  encode(_: SiteServerUISetLanguageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUISetLanguageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUISetLanguageResponse();
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

  fromJSON(_: any): SiteServerUISetLanguageResponse {
    return {};
  },

  toJSON(_: SiteServerUISetLanguageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUISetLanguageResponse>, I>>(base?: I): SiteServerUISetLanguageResponse {
    return SiteServerUISetLanguageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUISetLanguageResponse>, I>>(_: I): SiteServerUISetLanguageResponse {
    const message = createBaseSiteServerUISetLanguageResponse();
    return message;
  },
};

function createBaseSiteServerUIClientStatusRequest(): SiteServerUIClientStatusRequest {
  return {};
}

export const SiteServerUIClientStatusRequest = {
  encode(_: SiteServerUIClientStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIClientStatusRequest();
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

  fromJSON(_: any): SiteServerUIClientStatusRequest {
    return {};
  },

  toJSON(_: SiteServerUIClientStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIClientStatusRequest>, I>>(base?: I): SiteServerUIClientStatusRequest {
    return SiteServerUIClientStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIClientStatusRequest>, I>>(_: I): SiteServerUIClientStatusRequest {
    const message = createBaseSiteServerUIClientStatusRequest();
    return message;
  },
};

function createBaseSiteServerUIClientStatusResponse(): SiteServerUIClientStatusResponse {
  return { clients: [], payments: [] };
}

export const SiteServerUIClientStatusResponse = {
  encode(message: SiteServerUIClientStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      SiteServerUIClientStatusResponse_ClientInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.payments) {
      SiteServerUIClientStatusResponse_Payment.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIClientStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.clients.push(SiteServerUIClientStatusResponse_ClientInfo.decode(reader, reader.uint32()));
          break;
        case 5:
          message.payments.push(SiteServerUIClientStatusResponse_Payment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIClientStatusResponse {
    return {
      clients: Array.isArray(object?.clients)
        ? object.clients.map((e: any) => SiteServerUIClientStatusResponse_ClientInfo.fromJSON(e))
        : [],
      payments: Array.isArray(object?.payments)
        ? object.payments.map((e: any) => SiteServerUIClientStatusResponse_Payment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SiteServerUIClientStatusResponse): unknown {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map((e) => e ? SiteServerUIClientStatusResponse_ClientInfo.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.payments) {
      obj.payments = message.payments.map((e) => e ? SiteServerUIClientStatusResponse_Payment.toJSON(e) : undefined);
    } else {
      obj.payments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse>, I>>(
    base?: I,
  ): SiteServerUIClientStatusResponse {
    return SiteServerUIClientStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse>, I>>(
    object: I,
  ): SiteServerUIClientStatusResponse {
    const message = createBaseSiteServerUIClientStatusResponse();
    message.clients = object.clients?.map((e) => SiteServerUIClientStatusResponse_ClientInfo.fromPartial(e)) || [];
    message.payments = object.payments?.map((e) => SiteServerUIClientStatusResponse_Payment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSiteServerUIClientStatusResponse_ClientInfo(): SiteServerUIClientStatusResponse_ClientInfo {
  return { ip: 0, hostname: "", connected: false, instanceId: 0 };
}

export const SiteServerUIClientStatusResponse_ClientInfo = {
  encode(message: SiteServerUIClientStatusResponse_ClientInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(8).uint32(message.ip);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    if (message.connected === true) {
      writer.uint32(24).bool(message.connected);
    }
    if (message.instanceId !== 0) {
      writer.uint32(32).uint64(message.instanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIClientStatusResponse_ClientInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIClientStatusResponse_ClientInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.uint32();
          break;
        case 2:
          message.hostname = reader.string();
          break;
        case 3:
          message.connected = reader.bool();
          break;
        case 4:
          message.instanceId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIClientStatusResponse_ClientInfo {
    return {
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      connected: isSet(object.connected) ? Boolean(object.connected) : false,
      instanceId: isSet(object.instanceId) ? Number(object.instanceId) : 0,
    };
  },

  toJSON(message: SiteServerUIClientStatusResponse_ClientInfo): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.connected !== undefined && (obj.connected = message.connected);
    message.instanceId !== undefined && (obj.instanceId = Math.round(message.instanceId));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse_ClientInfo>, I>>(
    base?: I,
  ): SiteServerUIClientStatusResponse_ClientInfo {
    return SiteServerUIClientStatusResponse_ClientInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse_ClientInfo>, I>>(
    object: I,
  ): SiteServerUIClientStatusResponse_ClientInfo {
    const message = createBaseSiteServerUIClientStatusResponse_ClientInfo();
    message.ip = object.ip ?? 0;
    message.hostname = object.hostname ?? "";
    message.connected = object.connected ?? false;
    message.instanceId = object.instanceId ?? 0;
    return message;
  },
};

function createBaseSiteServerUIClientStatusResponse_Payment(): SiteServerUIClientStatusResponse_Payment {
  return {
    transid: 0,
    steamid: 0,
    amount: "",
    timeCreated: 0,
    purchaseStatus: 0,
    hostname: "",
    personaName: "",
    profileUrl: "",
    avatarUrl: "",
  };
}

export const SiteServerUIClientStatusResponse_Payment = {
  encode(message: SiteServerUIClientStatusResponse_Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transid !== 0) {
      writer.uint32(8).uint64(message.transid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(32).int32(message.timeCreated);
    }
    if (message.purchaseStatus !== 0) {
      writer.uint32(40).int32(message.purchaseStatus);
    }
    if (message.hostname !== "") {
      writer.uint32(50).string(message.hostname);
    }
    if (message.personaName !== "") {
      writer.uint32(58).string(message.personaName);
    }
    if (message.profileUrl !== "") {
      writer.uint32(66).string(message.profileUrl);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(74).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIClientStatusResponse_Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIClientStatusResponse_Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.timeCreated = reader.int32();
          break;
        case 5:
          message.purchaseStatus = reader.int32();
          break;
        case 6:
          message.hostname = reader.string();
          break;
        case 7:
          message.personaName = reader.string();
          break;
        case 8:
          message.profileUrl = reader.string();
          break;
        case 9:
          message.avatarUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIClientStatusResponse_Payment {
    return {
      transid: isSet(object.transid) ? Number(object.transid) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      amount: isSet(object.amount) ? String(object.amount) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      purchaseStatus: isSet(object.purchaseStatus) ? Number(object.purchaseStatus) : 0,
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      profileUrl: isSet(object.profileUrl) ? String(object.profileUrl) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: SiteServerUIClientStatusResponse_Payment): unknown {
    const obj: any = {};
    message.transid !== undefined && (obj.transid = Math.round(message.transid));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.amount !== undefined && (obj.amount = message.amount);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.purchaseStatus !== undefined && (obj.purchaseStatus = Math.round(message.purchaseStatus));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.profileUrl !== undefined && (obj.profileUrl = message.profileUrl);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse_Payment>, I>>(
    base?: I,
  ): SiteServerUIClientStatusResponse_Payment {
    return SiteServerUIClientStatusResponse_Payment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIClientStatusResponse_Payment>, I>>(
    object: I,
  ): SiteServerUIClientStatusResponse_Payment {
    const message = createBaseSiteServerUIClientStatusResponse_Payment();
    message.transid = object.transid ?? 0;
    message.steamid = object.steamid ?? 0;
    message.amount = object.amount ?? "";
    message.timeCreated = object.timeCreated ?? 0;
    message.purchaseStatus = object.purchaseStatus ?? 0;
    message.hostname = object.hostname ?? "";
    message.personaName = object.personaName ?? "";
    message.profileUrl = object.profileUrl ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseSiteServerUIContentCacheStatusRequest(): SiteServerUIContentCacheStatusRequest {
  return {};
}

export const SiteServerUIContentCacheStatusRequest = {
  encode(_: SiteServerUIContentCacheStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIContentCacheStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIContentCacheStatusRequest();
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

  fromJSON(_: any): SiteServerUIContentCacheStatusRequest {
    return {};
  },

  toJSON(_: SiteServerUIContentCacheStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIContentCacheStatusRequest>, I>>(
    base?: I,
  ): SiteServerUIContentCacheStatusRequest {
    return SiteServerUIContentCacheStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIContentCacheStatusRequest>, I>>(
    _: I,
  ): SiteServerUIContentCacheStatusRequest {
    const message = createBaseSiteServerUIContentCacheStatusRequest();
    return message;
  },
};

function createBaseSiteServerUIContentCacheStatusResponse(): SiteServerUIContentCacheStatusResponse {
  return {
    enabled: false,
    port: 0,
    cacheLocation: "",
    maxSizeGb: 0,
    p2pEnabled: false,
    explicitIpAddress: "",
    externalProcess: false,
    currentSizeGb: 0,
    currentBw: 0,
    totalBytesServed: 0,
  };
}

export const SiteServerUIContentCacheStatusResponse = {
  encode(message: SiteServerUIContentCacheStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.cacheLocation !== "") {
      writer.uint32(26).string(message.cacheLocation);
    }
    if (message.maxSizeGb !== 0) {
      writer.uint32(32).uint32(message.maxSizeGb);
    }
    if (message.p2pEnabled === true) {
      writer.uint32(40).bool(message.p2pEnabled);
    }
    if (message.explicitIpAddress !== "") {
      writer.uint32(74).string(message.explicitIpAddress);
    }
    if (message.externalProcess === true) {
      writer.uint32(80).bool(message.externalProcess);
    }
    if (message.currentSizeGb !== 0) {
      writer.uint32(48).uint32(message.currentSizeGb);
    }
    if (message.currentBw !== 0) {
      writer.uint32(56).uint64(message.currentBw);
    }
    if (message.totalBytesServed !== 0) {
      writer.uint32(64).uint64(message.totalBytesServed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIContentCacheStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIContentCacheStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.cacheLocation = reader.string();
          break;
        case 4:
          message.maxSizeGb = reader.uint32();
          break;
        case 5:
          message.p2pEnabled = reader.bool();
          break;
        case 9:
          message.explicitIpAddress = reader.string();
          break;
        case 10:
          message.externalProcess = reader.bool();
          break;
        case 6:
          message.currentSizeGb = reader.uint32();
          break;
        case 7:
          message.currentBw = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.totalBytesServed = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIContentCacheStatusResponse {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      port: isSet(object.port) ? Number(object.port) : 0,
      cacheLocation: isSet(object.cacheLocation) ? String(object.cacheLocation) : "",
      maxSizeGb: isSet(object.maxSizeGb) ? Number(object.maxSizeGb) : 0,
      p2pEnabled: isSet(object.p2pEnabled) ? Boolean(object.p2pEnabled) : false,
      explicitIpAddress: isSet(object.explicitIpAddress) ? String(object.explicitIpAddress) : "",
      externalProcess: isSet(object.externalProcess) ? Boolean(object.externalProcess) : false,
      currentSizeGb: isSet(object.currentSizeGb) ? Number(object.currentSizeGb) : 0,
      currentBw: isSet(object.currentBw) ? Number(object.currentBw) : 0,
      totalBytesServed: isSet(object.totalBytesServed) ? Number(object.totalBytesServed) : 0,
    };
  },

  toJSON(message: SiteServerUIContentCacheStatusResponse): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.cacheLocation !== undefined && (obj.cacheLocation = message.cacheLocation);
    message.maxSizeGb !== undefined && (obj.maxSizeGb = Math.round(message.maxSizeGb));
    message.p2pEnabled !== undefined && (obj.p2pEnabled = message.p2pEnabled);
    message.explicitIpAddress !== undefined && (obj.explicitIpAddress = message.explicitIpAddress);
    message.externalProcess !== undefined && (obj.externalProcess = message.externalProcess);
    message.currentSizeGb !== undefined && (obj.currentSizeGb = Math.round(message.currentSizeGb));
    message.currentBw !== undefined && (obj.currentBw = Math.round(message.currentBw));
    message.totalBytesServed !== undefined && (obj.totalBytesServed = Math.round(message.totalBytesServed));
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIContentCacheStatusResponse>, I>>(
    base?: I,
  ): SiteServerUIContentCacheStatusResponse {
    return SiteServerUIContentCacheStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIContentCacheStatusResponse>, I>>(
    object: I,
  ): SiteServerUIContentCacheStatusResponse {
    const message = createBaseSiteServerUIContentCacheStatusResponse();
    message.enabled = object.enabled ?? false;
    message.port = object.port ?? 0;
    message.cacheLocation = object.cacheLocation ?? "";
    message.maxSizeGb = object.maxSizeGb ?? 0;
    message.p2pEnabled = object.p2pEnabled ?? false;
    message.explicitIpAddress = object.explicitIpAddress ?? "";
    message.externalProcess = object.externalProcess ?? false;
    message.currentSizeGb = object.currentSizeGb ?? 0;
    message.currentBw = object.currentBw ?? 0;
    message.totalBytesServed = object.totalBytesServed ?? 0;
    return message;
  },
};

function createBaseSiteServerUIContentCacheConfigRequest(): SiteServerUIContentCacheConfigRequest {
  return {
    enabled: false,
    port: 0,
    cacheLocation: "",
    maxSizeGb: 0,
    p2pEnabled: false,
    externalProcess: false,
    explicitIpAddress: "",
  };
}

export const SiteServerUIContentCacheConfigRequest = {
  encode(message: SiteServerUIContentCacheConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.cacheLocation !== "") {
      writer.uint32(26).string(message.cacheLocation);
    }
    if (message.maxSizeGb !== 0) {
      writer.uint32(32).uint32(message.maxSizeGb);
    }
    if (message.p2pEnabled === true) {
      writer.uint32(40).bool(message.p2pEnabled);
    }
    if (message.externalProcess === true) {
      writer.uint32(48).bool(message.externalProcess);
    }
    if (message.explicitIpAddress !== "") {
      writer.uint32(58).string(message.explicitIpAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIContentCacheConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIContentCacheConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.cacheLocation = reader.string();
          break;
        case 4:
          message.maxSizeGb = reader.uint32();
          break;
        case 5:
          message.p2pEnabled = reader.bool();
          break;
        case 6:
          message.externalProcess = reader.bool();
          break;
        case 7:
          message.explicitIpAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SiteServerUIContentCacheConfigRequest {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      port: isSet(object.port) ? Number(object.port) : 0,
      cacheLocation: isSet(object.cacheLocation) ? String(object.cacheLocation) : "",
      maxSizeGb: isSet(object.maxSizeGb) ? Number(object.maxSizeGb) : 0,
      p2pEnabled: isSet(object.p2pEnabled) ? Boolean(object.p2pEnabled) : false,
      externalProcess: isSet(object.externalProcess) ? Boolean(object.externalProcess) : false,
      explicitIpAddress: isSet(object.explicitIpAddress) ? String(object.explicitIpAddress) : "",
    };
  },

  toJSON(message: SiteServerUIContentCacheConfigRequest): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.cacheLocation !== undefined && (obj.cacheLocation = message.cacheLocation);
    message.maxSizeGb !== undefined && (obj.maxSizeGb = Math.round(message.maxSizeGb));
    message.p2pEnabled !== undefined && (obj.p2pEnabled = message.p2pEnabled);
    message.externalProcess !== undefined && (obj.externalProcess = message.externalProcess);
    message.explicitIpAddress !== undefined && (obj.explicitIpAddress = message.explicitIpAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIContentCacheConfigRequest>, I>>(
    base?: I,
  ): SiteServerUIContentCacheConfigRequest {
    return SiteServerUIContentCacheConfigRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIContentCacheConfigRequest>, I>>(
    object: I,
  ): SiteServerUIContentCacheConfigRequest {
    const message = createBaseSiteServerUIContentCacheConfigRequest();
    message.enabled = object.enabled ?? false;
    message.port = object.port ?? 0;
    message.cacheLocation = object.cacheLocation ?? "";
    message.maxSizeGb = object.maxSizeGb ?? 0;
    message.p2pEnabled = object.p2pEnabled ?? false;
    message.externalProcess = object.externalProcess ?? false;
    message.explicitIpAddress = object.explicitIpAddress ?? "";
    return message;
  },
};

function createBaseSiteServerUIContentCacheConfigResponse(): SiteServerUIContentCacheConfigResponse {
  return {};
}

export const SiteServerUIContentCacheConfigResponse = {
  encode(_: SiteServerUIContentCacheConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteServerUIContentCacheConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteServerUIContentCacheConfigResponse();
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

  fromJSON(_: any): SiteServerUIContentCacheConfigResponse {
    return {};
  },

  toJSON(_: SiteServerUIContentCacheConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SiteServerUIContentCacheConfigResponse>, I>>(
    base?: I,
  ): SiteServerUIContentCacheConfigResponse {
    return SiteServerUIContentCacheConfigResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SiteServerUIContentCacheConfigResponse>, I>>(
    _: I,
  ): SiteServerUIContentCacheConfigResponse {
    const message = createBaseSiteServerUIContentCacheConfigResponse();
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
