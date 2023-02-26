/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface ParentalApp {
  appid: number;
  isAllowed: boolean;
}

export interface ParentalSettings {
  steamid: string;
  applistBaseId: number;
  applistBaseDescription: string;
  applistBase: ParentalApp[];
  applistCustom: ParentalApp[];
  passwordhashtype: number;
  salt: Buffer;
  passwordhash: Buffer;
  isEnabled: boolean;
  enabledFeatures: number;
  recoveryEmail: string;
  isSiteLicenseLock: boolean;
}

export interface CParentalEnableParentalSettingsRequest {
  password: string;
  settings: ParentalSettings | undefined;
  sessionid: string;
  enablecode: number;
  steamid: string;
}

export interface CParentalEnableParentalSettingsResponse {
}

export interface CParentalDisableParentalSettingsRequest {
  password: string;
  steamid: string;
}

export interface CParentalDisableParentalSettingsResponse {
}

export interface CParentalGetParentalSettingsRequest {
  steamid: string;
}

export interface CParentalGetParentalSettingsResponse {
  settings: ParentalSettings | undefined;
}

export interface CParentalGetSignedParentalSettingsRequest {
  priority: number;
}

export interface CParentalGetSignedParentalSettingsResponse {
  serializedSettings: Buffer;
  signature: Buffer;
}

export interface CParentalSetParentalSettingsRequest {
  password: string;
  settings: ParentalSettings | undefined;
  newPassword: string;
  sessionid: string;
  steamid: string;
}

export interface CParentalSetParentalSettingsResponse {
}

export interface CParentalValidateTokenRequest {
  unlockToken: string;
}

export interface CParentalValidateTokenResponse {
}

export interface CParentalValidatePasswordRequest {
  password: string;
  session: string;
  sendUnlockOnSuccess: boolean;
}

export interface CParentalValidatePasswordResponse {
  token: string;
}

export interface CParentalLockClientRequest {
  session: string;
}

export interface CParentalLockClientResponse {
}

export interface CParentalRequestRecoveryCodeRequest {
}

export interface CParentalRequestRecoveryCodeResponse {
}

export interface CParentalDisableWithRecoveryCodeRequest {
  recoveryCode: number;
  steamid: string;
}

export interface CParentalDisableWithRecoveryCodeResponse {
}

export interface CParentalParentalSettingsChangeNotification {
  serializedSettings: Buffer;
  signature: Buffer;
  password: string;
  sessionid: string;
}

export interface CParentalParentalUnlockNotification {
  password: string;
  sessionid: string;
}

export interface CParentalParentalLockNotification {
  sessionid: string;
}

function createBaseParentalApp(): ParentalApp {
  return { appid: 0, isAllowed: false };
}

export const ParentalApp = {
  encode(message: ParentalApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.isAllowed === true) {
      writer.uint32(16).bool(message.isAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParentalApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParentalApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.isAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParentalApp {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      isAllowed: isSet(object.isAllowed) ? Boolean(object.isAllowed) : false,
    };
  },

  toJSON(message: ParentalApp): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.isAllowed !== undefined && (obj.isAllowed = message.isAllowed);
    return obj;
  },

  create<I extends Exact<DeepPartial<ParentalApp>, I>>(base?: I): ParentalApp {
    return ParentalApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ParentalApp>, I>>(object: I): ParentalApp {
    const message = createBaseParentalApp();
    message.appid = object.appid ?? 0;
    message.isAllowed = object.isAllowed ?? false;
    return message;
  },
};

function createBaseParentalSettings(): ParentalSettings {
  return {
    steamid: "0",
    applistBaseId: 0,
    applistBaseDescription: "",
    applistBase: [],
    applistCustom: [],
    passwordhashtype: 0,
    salt: Buffer.alloc(0),
    passwordhash: Buffer.alloc(0),
    isEnabled: false,
    enabledFeatures: 0,
    recoveryEmail: "",
    isSiteLicenseLock: false,
  };
}

export const ParentalSettings = {
  encode(message: ParentalSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.applistBaseId !== 0) {
      writer.uint32(16).uint32(message.applistBaseId);
    }
    if (message.applistBaseDescription !== "") {
      writer.uint32(26).string(message.applistBaseDescription);
    }
    for (const v of message.applistBase) {
      ParentalApp.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.applistCustom) {
      ParentalApp.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.passwordhashtype !== 0) {
      writer.uint32(48).uint32(message.passwordhashtype);
    }
    if (message.salt.length !== 0) {
      writer.uint32(58).bytes(message.salt);
    }
    if (message.passwordhash.length !== 0) {
      writer.uint32(66).bytes(message.passwordhash);
    }
    if (message.isEnabled === true) {
      writer.uint32(72).bool(message.isEnabled);
    }
    if (message.enabledFeatures !== 0) {
      writer.uint32(80).uint32(message.enabledFeatures);
    }
    if (message.recoveryEmail !== "") {
      writer.uint32(90).string(message.recoveryEmail);
    }
    if (message.isSiteLicenseLock === true) {
      writer.uint32(96).bool(message.isSiteLicenseLock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParentalSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParentalSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.applistBaseId = reader.uint32();
          break;
        case 3:
          message.applistBaseDescription = reader.string();
          break;
        case 4:
          message.applistBase.push(ParentalApp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.applistCustom.push(ParentalApp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.passwordhashtype = reader.uint32();
          break;
        case 7:
          message.salt = reader.bytes() as Buffer;
          break;
        case 8:
          message.passwordhash = reader.bytes() as Buffer;
          break;
        case 9:
          message.isEnabled = reader.bool();
          break;
        case 10:
          message.enabledFeatures = reader.uint32();
          break;
        case 11:
          message.recoveryEmail = reader.string();
          break;
        case 12:
          message.isSiteLicenseLock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParentalSettings {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      applistBaseId: isSet(object.applistBaseId) ? Number(object.applistBaseId) : 0,
      applistBaseDescription: isSet(object.applistBaseDescription) ? String(object.applistBaseDescription) : "",
      applistBase: Array.isArray(object?.applistBase)
        ? object.applistBase.map((e: any) => ParentalApp.fromJSON(e))
        : [],
      applistCustom: Array.isArray(object?.applistCustom)
        ? object.applistCustom.map((e: any) => ParentalApp.fromJSON(e))
        : [],
      passwordhashtype: isSet(object.passwordhashtype) ? Number(object.passwordhashtype) : 0,
      salt: isSet(object.salt) ? Buffer.from(bytesFromBase64(object.salt)) : Buffer.alloc(0),
      passwordhash: isSet(object.passwordhash) ? Buffer.from(bytesFromBase64(object.passwordhash)) : Buffer.alloc(0),
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      enabledFeatures: isSet(object.enabledFeatures) ? Number(object.enabledFeatures) : 0,
      recoveryEmail: isSet(object.recoveryEmail) ? String(object.recoveryEmail) : "",
      isSiteLicenseLock: isSet(object.isSiteLicenseLock) ? Boolean(object.isSiteLicenseLock) : false,
    };
  },

  toJSON(message: ParentalSettings): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.applistBaseId !== undefined && (obj.applistBaseId = Math.round(message.applistBaseId));
    message.applistBaseDescription !== undefined && (obj.applistBaseDescription = message.applistBaseDescription);
    if (message.applistBase) {
      obj.applistBase = message.applistBase.map((e) => e ? ParentalApp.toJSON(e) : undefined);
    } else {
      obj.applistBase = [];
    }
    if (message.applistCustom) {
      obj.applistCustom = message.applistCustom.map((e) => e ? ParentalApp.toJSON(e) : undefined);
    } else {
      obj.applistCustom = [];
    }
    message.passwordhashtype !== undefined && (obj.passwordhashtype = Math.round(message.passwordhashtype));
    message.salt !== undefined &&
      (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : Buffer.alloc(0)));
    message.passwordhash !== undefined &&
      (obj.passwordhash = base64FromBytes(message.passwordhash !== undefined ? message.passwordhash : Buffer.alloc(0)));
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.enabledFeatures !== undefined && (obj.enabledFeatures = Math.round(message.enabledFeatures));
    message.recoveryEmail !== undefined && (obj.recoveryEmail = message.recoveryEmail);
    message.isSiteLicenseLock !== undefined && (obj.isSiteLicenseLock = message.isSiteLicenseLock);
    return obj;
  },

  create<I extends Exact<DeepPartial<ParentalSettings>, I>>(base?: I): ParentalSettings {
    return ParentalSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ParentalSettings>, I>>(object: I): ParentalSettings {
    const message = createBaseParentalSettings();
    message.steamid = object.steamid ?? "0";
    message.applistBaseId = object.applistBaseId ?? 0;
    message.applistBaseDescription = object.applistBaseDescription ?? "";
    message.applistBase = object.applistBase?.map((e) => ParentalApp.fromPartial(e)) || [];
    message.applistCustom = object.applistCustom?.map((e) => ParentalApp.fromPartial(e)) || [];
    message.passwordhashtype = object.passwordhashtype ?? 0;
    message.salt = object.salt ?? Buffer.alloc(0);
    message.passwordhash = object.passwordhash ?? Buffer.alloc(0);
    message.isEnabled = object.isEnabled ?? false;
    message.enabledFeatures = object.enabledFeatures ?? 0;
    message.recoveryEmail = object.recoveryEmail ?? "";
    message.isSiteLicenseLock = object.isSiteLicenseLock ?? false;
    return message;
  },
};

function createBaseCParentalEnableParentalSettingsRequest(): CParentalEnableParentalSettingsRequest {
  return { password: "", settings: undefined, sessionid: "", enablecode: 0, steamid: "0" };
}

export const CParentalEnableParentalSettingsRequest = {
  encode(message: CParentalEnableParentalSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.settings !== undefined) {
      ParentalSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    if (message.sessionid !== "") {
      writer.uint32(26).string(message.sessionid);
    }
    if (message.enablecode !== 0) {
      writer.uint32(32).uint32(message.enablecode);
    }
    if (message.steamid !== "0") {
      writer.uint32(81).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalEnableParentalSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalEnableParentalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 2:
          message.settings = ParentalSettings.decode(reader, reader.uint32());
          break;
        case 3:
          message.sessionid = reader.string();
          break;
        case 4:
          message.enablecode = reader.uint32();
          break;
        case 10:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalEnableParentalSettingsRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      settings: isSet(object.settings) ? ParentalSettings.fromJSON(object.settings) : undefined,
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "",
      enablecode: isSet(object.enablecode) ? Number(object.enablecode) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CParentalEnableParentalSettingsRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.settings !== undefined &&
      (obj.settings = message.settings ? ParentalSettings.toJSON(message.settings) : undefined);
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.enablecode !== undefined && (obj.enablecode = Math.round(message.enablecode));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalEnableParentalSettingsRequest>, I>>(
    base?: I,
  ): CParentalEnableParentalSettingsRequest {
    return CParentalEnableParentalSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalEnableParentalSettingsRequest>, I>>(
    object: I,
  ): CParentalEnableParentalSettingsRequest {
    const message = createBaseCParentalEnableParentalSettingsRequest();
    message.password = object.password ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? ParentalSettings.fromPartial(object.settings)
      : undefined;
    message.sessionid = object.sessionid ?? "";
    message.enablecode = object.enablecode ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCParentalEnableParentalSettingsResponse(): CParentalEnableParentalSettingsResponse {
  return {};
}

export const CParentalEnableParentalSettingsResponse = {
  encode(_: CParentalEnableParentalSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalEnableParentalSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalEnableParentalSettingsResponse();
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

  fromJSON(_: any): CParentalEnableParentalSettingsResponse {
    return {};
  },

  toJSON(_: CParentalEnableParentalSettingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalEnableParentalSettingsResponse>, I>>(
    base?: I,
  ): CParentalEnableParentalSettingsResponse {
    return CParentalEnableParentalSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalEnableParentalSettingsResponse>, I>>(
    _: I,
  ): CParentalEnableParentalSettingsResponse {
    const message = createBaseCParentalEnableParentalSettingsResponse();
    return message;
  },
};

function createBaseCParentalDisableParentalSettingsRequest(): CParentalDisableParentalSettingsRequest {
  return { password: "", steamid: "0" };
}

export const CParentalDisableParentalSettingsRequest = {
  encode(message: CParentalDisableParentalSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.steamid !== "0") {
      writer.uint32(81).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalDisableParentalSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalDisableParentalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 10:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalDisableParentalSettingsRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CParentalDisableParentalSettingsRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalDisableParentalSettingsRequest>, I>>(
    base?: I,
  ): CParentalDisableParentalSettingsRequest {
    return CParentalDisableParentalSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalDisableParentalSettingsRequest>, I>>(
    object: I,
  ): CParentalDisableParentalSettingsRequest {
    const message = createBaseCParentalDisableParentalSettingsRequest();
    message.password = object.password ?? "";
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCParentalDisableParentalSettingsResponse(): CParentalDisableParentalSettingsResponse {
  return {};
}

export const CParentalDisableParentalSettingsResponse = {
  encode(_: CParentalDisableParentalSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalDisableParentalSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalDisableParentalSettingsResponse();
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

  fromJSON(_: any): CParentalDisableParentalSettingsResponse {
    return {};
  },

  toJSON(_: CParentalDisableParentalSettingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalDisableParentalSettingsResponse>, I>>(
    base?: I,
  ): CParentalDisableParentalSettingsResponse {
    return CParentalDisableParentalSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalDisableParentalSettingsResponse>, I>>(
    _: I,
  ): CParentalDisableParentalSettingsResponse {
    const message = createBaseCParentalDisableParentalSettingsResponse();
    return message;
  },
};

function createBaseCParentalGetParentalSettingsRequest(): CParentalGetParentalSettingsRequest {
  return { steamid: "0" };
}

export const CParentalGetParentalSettingsRequest = {
  encode(message: CParentalGetParentalSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(81).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalGetParentalSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalGetParentalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalGetParentalSettingsRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CParentalGetParentalSettingsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalGetParentalSettingsRequest>, I>>(
    base?: I,
  ): CParentalGetParentalSettingsRequest {
    return CParentalGetParentalSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalGetParentalSettingsRequest>, I>>(
    object: I,
  ): CParentalGetParentalSettingsRequest {
    const message = createBaseCParentalGetParentalSettingsRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCParentalGetParentalSettingsResponse(): CParentalGetParentalSettingsResponse {
  return { settings: undefined };
}

export const CParentalGetParentalSettingsResponse = {
  encode(message: CParentalGetParentalSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.settings !== undefined) {
      ParentalSettings.encode(message.settings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalGetParentalSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalGetParentalSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.settings = ParentalSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalGetParentalSettingsResponse {
    return { settings: isSet(object.settings) ? ParentalSettings.fromJSON(object.settings) : undefined };
  },

  toJSON(message: CParentalGetParentalSettingsResponse): unknown {
    const obj: any = {};
    message.settings !== undefined &&
      (obj.settings = message.settings ? ParentalSettings.toJSON(message.settings) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalGetParentalSettingsResponse>, I>>(
    base?: I,
  ): CParentalGetParentalSettingsResponse {
    return CParentalGetParentalSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalGetParentalSettingsResponse>, I>>(
    object: I,
  ): CParentalGetParentalSettingsResponse {
    const message = createBaseCParentalGetParentalSettingsResponse();
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? ParentalSettings.fromPartial(object.settings)
      : undefined;
    return message;
  },
};

function createBaseCParentalGetSignedParentalSettingsRequest(): CParentalGetSignedParentalSettingsRequest {
  return { priority: 0 };
}

export const CParentalGetSignedParentalSettingsRequest = {
  encode(message: CParentalGetSignedParentalSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priority !== 0) {
      writer.uint32(8).uint32(message.priority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalGetSignedParentalSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalGetSignedParentalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priority = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalGetSignedParentalSettingsRequest {
    return { priority: isSet(object.priority) ? Number(object.priority) : 0 };
  },

  toJSON(message: CParentalGetSignedParentalSettingsRequest): unknown {
    const obj: any = {};
    message.priority !== undefined && (obj.priority = Math.round(message.priority));
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalGetSignedParentalSettingsRequest>, I>>(
    base?: I,
  ): CParentalGetSignedParentalSettingsRequest {
    return CParentalGetSignedParentalSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalGetSignedParentalSettingsRequest>, I>>(
    object: I,
  ): CParentalGetSignedParentalSettingsRequest {
    const message = createBaseCParentalGetSignedParentalSettingsRequest();
    message.priority = object.priority ?? 0;
    return message;
  },
};

function createBaseCParentalGetSignedParentalSettingsResponse(): CParentalGetSignedParentalSettingsResponse {
  return { serializedSettings: Buffer.alloc(0), signature: Buffer.alloc(0) };
}

export const CParentalGetSignedParentalSettingsResponse = {
  encode(message: CParentalGetSignedParentalSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedSettings.length !== 0) {
      writer.uint32(10).bytes(message.serializedSettings);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalGetSignedParentalSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalGetSignedParentalSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializedSettings = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalGetSignedParentalSettingsResponse {
    return {
      serializedSettings: isSet(object.serializedSettings)
        ? Buffer.from(bytesFromBase64(object.serializedSettings))
        : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CParentalGetSignedParentalSettingsResponse): unknown {
    const obj: any = {};
    message.serializedSettings !== undefined &&
      (obj.serializedSettings = base64FromBytes(
        message.serializedSettings !== undefined ? message.serializedSettings : Buffer.alloc(0),
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalGetSignedParentalSettingsResponse>, I>>(
    base?: I,
  ): CParentalGetSignedParentalSettingsResponse {
    return CParentalGetSignedParentalSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalGetSignedParentalSettingsResponse>, I>>(
    object: I,
  ): CParentalGetSignedParentalSettingsResponse {
    const message = createBaseCParentalGetSignedParentalSettingsResponse();
    message.serializedSettings = object.serializedSettings ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCParentalSetParentalSettingsRequest(): CParentalSetParentalSettingsRequest {
  return { password: "", settings: undefined, newPassword: "", sessionid: "", steamid: "0" };
}

export const CParentalSetParentalSettingsRequest = {
  encode(message: CParentalSetParentalSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.settings !== undefined) {
      ParentalSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    if (message.newPassword !== "") {
      writer.uint32(26).string(message.newPassword);
    }
    if (message.sessionid !== "") {
      writer.uint32(34).string(message.sessionid);
    }
    if (message.steamid !== "0") {
      writer.uint32(81).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalSetParentalSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalSetParentalSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 2:
          message.settings = ParentalSettings.decode(reader, reader.uint32());
          break;
        case 3:
          message.newPassword = reader.string();
          break;
        case 4:
          message.sessionid = reader.string();
          break;
        case 10:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalSetParentalSettingsRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      settings: isSet(object.settings) ? ParentalSettings.fromJSON(object.settings) : undefined,
      newPassword: isSet(object.newPassword) ? String(object.newPassword) : "",
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CParentalSetParentalSettingsRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.settings !== undefined &&
      (obj.settings = message.settings ? ParentalSettings.toJSON(message.settings) : undefined);
    message.newPassword !== undefined && (obj.newPassword = message.newPassword);
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalSetParentalSettingsRequest>, I>>(
    base?: I,
  ): CParentalSetParentalSettingsRequest {
    return CParentalSetParentalSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalSetParentalSettingsRequest>, I>>(
    object: I,
  ): CParentalSetParentalSettingsRequest {
    const message = createBaseCParentalSetParentalSettingsRequest();
    message.password = object.password ?? "";
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? ParentalSettings.fromPartial(object.settings)
      : undefined;
    message.newPassword = object.newPassword ?? "";
    message.sessionid = object.sessionid ?? "";
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCParentalSetParentalSettingsResponse(): CParentalSetParentalSettingsResponse {
  return {};
}

export const CParentalSetParentalSettingsResponse = {
  encode(_: CParentalSetParentalSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalSetParentalSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalSetParentalSettingsResponse();
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

  fromJSON(_: any): CParentalSetParentalSettingsResponse {
    return {};
  },

  toJSON(_: CParentalSetParentalSettingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalSetParentalSettingsResponse>, I>>(
    base?: I,
  ): CParentalSetParentalSettingsResponse {
    return CParentalSetParentalSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalSetParentalSettingsResponse>, I>>(
    _: I,
  ): CParentalSetParentalSettingsResponse {
    const message = createBaseCParentalSetParentalSettingsResponse();
    return message;
  },
};

function createBaseCParentalValidateTokenRequest(): CParentalValidateTokenRequest {
  return { unlockToken: "" };
}

export const CParentalValidateTokenRequest = {
  encode(message: CParentalValidateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unlockToken !== "") {
      writer.uint32(10).string(message.unlockToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalValidateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalValidateTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlockToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalValidateTokenRequest {
    return { unlockToken: isSet(object.unlockToken) ? String(object.unlockToken) : "" };
  },

  toJSON(message: CParentalValidateTokenRequest): unknown {
    const obj: any = {};
    message.unlockToken !== undefined && (obj.unlockToken = message.unlockToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalValidateTokenRequest>, I>>(base?: I): CParentalValidateTokenRequest {
    return CParentalValidateTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalValidateTokenRequest>, I>>(
    object: I,
  ): CParentalValidateTokenRequest {
    const message = createBaseCParentalValidateTokenRequest();
    message.unlockToken = object.unlockToken ?? "";
    return message;
  },
};

function createBaseCParentalValidateTokenResponse(): CParentalValidateTokenResponse {
  return {};
}

export const CParentalValidateTokenResponse = {
  encode(_: CParentalValidateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalValidateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalValidateTokenResponse();
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

  fromJSON(_: any): CParentalValidateTokenResponse {
    return {};
  },

  toJSON(_: CParentalValidateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalValidateTokenResponse>, I>>(base?: I): CParentalValidateTokenResponse {
    return CParentalValidateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalValidateTokenResponse>, I>>(_: I): CParentalValidateTokenResponse {
    const message = createBaseCParentalValidateTokenResponse();
    return message;
  },
};

function createBaseCParentalValidatePasswordRequest(): CParentalValidatePasswordRequest {
  return { password: "", session: "", sendUnlockOnSuccess: false };
}

export const CParentalValidatePasswordRequest = {
  encode(message: CParentalValidatePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.session !== "") {
      writer.uint32(18).string(message.session);
    }
    if (message.sendUnlockOnSuccess === true) {
      writer.uint32(24).bool(message.sendUnlockOnSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalValidatePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalValidatePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 2:
          message.session = reader.string();
          break;
        case 3:
          message.sendUnlockOnSuccess = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalValidatePasswordRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      session: isSet(object.session) ? String(object.session) : "",
      sendUnlockOnSuccess: isSet(object.sendUnlockOnSuccess) ? Boolean(object.sendUnlockOnSuccess) : false,
    };
  },

  toJSON(message: CParentalValidatePasswordRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.session !== undefined && (obj.session = message.session);
    message.sendUnlockOnSuccess !== undefined && (obj.sendUnlockOnSuccess = message.sendUnlockOnSuccess);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalValidatePasswordRequest>, I>>(
    base?: I,
  ): CParentalValidatePasswordRequest {
    return CParentalValidatePasswordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalValidatePasswordRequest>, I>>(
    object: I,
  ): CParentalValidatePasswordRequest {
    const message = createBaseCParentalValidatePasswordRequest();
    message.password = object.password ?? "";
    message.session = object.session ?? "";
    message.sendUnlockOnSuccess = object.sendUnlockOnSuccess ?? false;
    return message;
  },
};

function createBaseCParentalValidatePasswordResponse(): CParentalValidatePasswordResponse {
  return { token: "" };
}

export const CParentalValidatePasswordResponse = {
  encode(message: CParentalValidatePasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalValidatePasswordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalValidatePasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalValidatePasswordResponse {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: CParentalValidatePasswordResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalValidatePasswordResponse>, I>>(
    base?: I,
  ): CParentalValidatePasswordResponse {
    return CParentalValidatePasswordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalValidatePasswordResponse>, I>>(
    object: I,
  ): CParentalValidatePasswordResponse {
    const message = createBaseCParentalValidatePasswordResponse();
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseCParentalLockClientRequest(): CParentalLockClientRequest {
  return { session: "" };
}

export const CParentalLockClientRequest = {
  encode(message: CParentalLockClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.session !== "") {
      writer.uint32(10).string(message.session);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalLockClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalLockClientRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.session = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalLockClientRequest {
    return { session: isSet(object.session) ? String(object.session) : "" };
  },

  toJSON(message: CParentalLockClientRequest): unknown {
    const obj: any = {};
    message.session !== undefined && (obj.session = message.session);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalLockClientRequest>, I>>(base?: I): CParentalLockClientRequest {
    return CParentalLockClientRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalLockClientRequest>, I>>(object: I): CParentalLockClientRequest {
    const message = createBaseCParentalLockClientRequest();
    message.session = object.session ?? "";
    return message;
  },
};

function createBaseCParentalLockClientResponse(): CParentalLockClientResponse {
  return {};
}

export const CParentalLockClientResponse = {
  encode(_: CParentalLockClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalLockClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalLockClientResponse();
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

  fromJSON(_: any): CParentalLockClientResponse {
    return {};
  },

  toJSON(_: CParentalLockClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalLockClientResponse>, I>>(base?: I): CParentalLockClientResponse {
    return CParentalLockClientResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalLockClientResponse>, I>>(_: I): CParentalLockClientResponse {
    const message = createBaseCParentalLockClientResponse();
    return message;
  },
};

function createBaseCParentalRequestRecoveryCodeRequest(): CParentalRequestRecoveryCodeRequest {
  return {};
}

export const CParentalRequestRecoveryCodeRequest = {
  encode(_: CParentalRequestRecoveryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalRequestRecoveryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalRequestRecoveryCodeRequest();
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

  fromJSON(_: any): CParentalRequestRecoveryCodeRequest {
    return {};
  },

  toJSON(_: CParentalRequestRecoveryCodeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalRequestRecoveryCodeRequest>, I>>(
    base?: I,
  ): CParentalRequestRecoveryCodeRequest {
    return CParentalRequestRecoveryCodeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalRequestRecoveryCodeRequest>, I>>(
    _: I,
  ): CParentalRequestRecoveryCodeRequest {
    const message = createBaseCParentalRequestRecoveryCodeRequest();
    return message;
  },
};

function createBaseCParentalRequestRecoveryCodeResponse(): CParentalRequestRecoveryCodeResponse {
  return {};
}

export const CParentalRequestRecoveryCodeResponse = {
  encode(_: CParentalRequestRecoveryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalRequestRecoveryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalRequestRecoveryCodeResponse();
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

  fromJSON(_: any): CParentalRequestRecoveryCodeResponse {
    return {};
  },

  toJSON(_: CParentalRequestRecoveryCodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalRequestRecoveryCodeResponse>, I>>(
    base?: I,
  ): CParentalRequestRecoveryCodeResponse {
    return CParentalRequestRecoveryCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalRequestRecoveryCodeResponse>, I>>(
    _: I,
  ): CParentalRequestRecoveryCodeResponse {
    const message = createBaseCParentalRequestRecoveryCodeResponse();
    return message;
  },
};

function createBaseCParentalDisableWithRecoveryCodeRequest(): CParentalDisableWithRecoveryCodeRequest {
  return { recoveryCode: 0, steamid: "0" };
}

export const CParentalDisableWithRecoveryCodeRequest = {
  encode(message: CParentalDisableWithRecoveryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recoveryCode !== 0) {
      writer.uint32(8).uint32(message.recoveryCode);
    }
    if (message.steamid !== "0") {
      writer.uint32(81).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalDisableWithRecoveryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalDisableWithRecoveryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recoveryCode = reader.uint32();
          break;
        case 10:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalDisableWithRecoveryCodeRequest {
    return {
      recoveryCode: isSet(object.recoveryCode) ? Number(object.recoveryCode) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CParentalDisableWithRecoveryCodeRequest): unknown {
    const obj: any = {};
    message.recoveryCode !== undefined && (obj.recoveryCode = Math.round(message.recoveryCode));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalDisableWithRecoveryCodeRequest>, I>>(
    base?: I,
  ): CParentalDisableWithRecoveryCodeRequest {
    return CParentalDisableWithRecoveryCodeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalDisableWithRecoveryCodeRequest>, I>>(
    object: I,
  ): CParentalDisableWithRecoveryCodeRequest {
    const message = createBaseCParentalDisableWithRecoveryCodeRequest();
    message.recoveryCode = object.recoveryCode ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCParentalDisableWithRecoveryCodeResponse(): CParentalDisableWithRecoveryCodeResponse {
  return {};
}

export const CParentalDisableWithRecoveryCodeResponse = {
  encode(_: CParentalDisableWithRecoveryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalDisableWithRecoveryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalDisableWithRecoveryCodeResponse();
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

  fromJSON(_: any): CParentalDisableWithRecoveryCodeResponse {
    return {};
  },

  toJSON(_: CParentalDisableWithRecoveryCodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalDisableWithRecoveryCodeResponse>, I>>(
    base?: I,
  ): CParentalDisableWithRecoveryCodeResponse {
    return CParentalDisableWithRecoveryCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalDisableWithRecoveryCodeResponse>, I>>(
    _: I,
  ): CParentalDisableWithRecoveryCodeResponse {
    const message = createBaseCParentalDisableWithRecoveryCodeResponse();
    return message;
  },
};

function createBaseCParentalParentalSettingsChangeNotification(): CParentalParentalSettingsChangeNotification {
  return { serializedSettings: Buffer.alloc(0), signature: Buffer.alloc(0), password: "", sessionid: "" };
}

export const CParentalParentalSettingsChangeNotification = {
  encode(message: CParentalParentalSettingsChangeNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedSettings.length !== 0) {
      writer.uint32(10).bytes(message.serializedSettings);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.sessionid !== "") {
      writer.uint32(34).string(message.sessionid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalParentalSettingsChangeNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalParentalSettingsChangeNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializedSettings = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        case 3:
          message.password = reader.string();
          break;
        case 4:
          message.sessionid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalParentalSettingsChangeNotification {
    return {
      serializedSettings: isSet(object.serializedSettings)
        ? Buffer.from(bytesFromBase64(object.serializedSettings))
        : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      password: isSet(object.password) ? String(object.password) : "",
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "",
    };
  },

  toJSON(message: CParentalParentalSettingsChangeNotification): unknown {
    const obj: any = {};
    message.serializedSettings !== undefined &&
      (obj.serializedSettings = base64FromBytes(
        message.serializedSettings !== undefined ? message.serializedSettings : Buffer.alloc(0),
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.password !== undefined && (obj.password = message.password);
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalParentalSettingsChangeNotification>, I>>(
    base?: I,
  ): CParentalParentalSettingsChangeNotification {
    return CParentalParentalSettingsChangeNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalParentalSettingsChangeNotification>, I>>(
    object: I,
  ): CParentalParentalSettingsChangeNotification {
    const message = createBaseCParentalParentalSettingsChangeNotification();
    message.serializedSettings = object.serializedSettings ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.password = object.password ?? "";
    message.sessionid = object.sessionid ?? "";
    return message;
  },
};

function createBaseCParentalParentalUnlockNotification(): CParentalParentalUnlockNotification {
  return { password: "", sessionid: "" };
}

export const CParentalParentalUnlockNotification = {
  encode(message: CParentalParentalUnlockNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.sessionid !== "") {
      writer.uint32(18).string(message.sessionid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalParentalUnlockNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalParentalUnlockNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 2:
          message.sessionid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalParentalUnlockNotification {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "",
    };
  },

  toJSON(message: CParentalParentalUnlockNotification): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalParentalUnlockNotification>, I>>(
    base?: I,
  ): CParentalParentalUnlockNotification {
    return CParentalParentalUnlockNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalParentalUnlockNotification>, I>>(
    object: I,
  ): CParentalParentalUnlockNotification {
    const message = createBaseCParentalParentalUnlockNotification();
    message.password = object.password ?? "";
    message.sessionid = object.sessionid ?? "";
    return message;
  },
};

function createBaseCParentalParentalLockNotification(): CParentalParentalLockNotification {
  return { sessionid: "" };
}

export const CParentalParentalLockNotification = {
  encode(message: CParentalParentalLockNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== "") {
      writer.uint32(10).string(message.sessionid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CParentalParentalLockNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCParentalParentalLockNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CParentalParentalLockNotification {
    return { sessionid: isSet(object.sessionid) ? String(object.sessionid) : "" };
  },

  toJSON(message: CParentalParentalLockNotification): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CParentalParentalLockNotification>, I>>(
    base?: I,
  ): CParentalParentalLockNotification {
    return CParentalParentalLockNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CParentalParentalLockNotification>, I>>(
    object: I,
  ): CParentalParentalLockNotification {
    const message = createBaseCParentalParentalLockNotification();
    message.sessionid = object.sessionid ?? "";
    return message;
  },
};

export interface Parental {
  EnableParentalSettings(
    request: CParentalEnableParentalSettingsRequest,
  ): Promise<CParentalEnableParentalSettingsResponse>;
  DisableParentalSettings(
    request: CParentalDisableParentalSettingsRequest,
  ): Promise<CParentalDisableParentalSettingsResponse>;
  GetParentalSettings(request: CParentalGetParentalSettingsRequest): Promise<CParentalGetParentalSettingsResponse>;
  GetSignedParentalSettings(
    request: CParentalGetSignedParentalSettingsRequest,
  ): Promise<CParentalGetSignedParentalSettingsResponse>;
  SetParentalSettings(request: CParentalSetParentalSettingsRequest): Promise<CParentalSetParentalSettingsResponse>;
  ValidateToken(request: CParentalValidateTokenRequest): Promise<CParentalValidateTokenResponse>;
  ValidatePassword(request: CParentalValidatePasswordRequest): Promise<CParentalValidatePasswordResponse>;
  LockClient(request: CParentalLockClientRequest): Promise<CParentalLockClientResponse>;
  RequestRecoveryCode(request: CParentalRequestRecoveryCodeRequest): Promise<CParentalRequestRecoveryCodeResponse>;
  DisableWithRecoveryCode(
    request: CParentalDisableWithRecoveryCodeRequest,
  ): Promise<CParentalDisableWithRecoveryCodeResponse>;
}

export class ParentalClientImpl implements Parental {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Parental";
    this.rpc = rpc;
    this.EnableParentalSettings = this.EnableParentalSettings.bind(this);
    this.DisableParentalSettings = this.DisableParentalSettings.bind(this);
    this.GetParentalSettings = this.GetParentalSettings.bind(this);
    this.GetSignedParentalSettings = this.GetSignedParentalSettings.bind(this);
    this.SetParentalSettings = this.SetParentalSettings.bind(this);
    this.ValidateToken = this.ValidateToken.bind(this);
    this.ValidatePassword = this.ValidatePassword.bind(this);
    this.LockClient = this.LockClient.bind(this);
    this.RequestRecoveryCode = this.RequestRecoveryCode.bind(this);
    this.DisableWithRecoveryCode = this.DisableWithRecoveryCode.bind(this);
  }
  EnableParentalSettings(
    request: CParentalEnableParentalSettingsRequest,
  ): Promise<CParentalEnableParentalSettingsResponse> {
    const data = CParentalEnableParentalSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnableParentalSettings", data);
    return promise.then((data) => CParentalEnableParentalSettingsResponse.decode(new _m0.Reader(data)));
  }

  DisableParentalSettings(
    request: CParentalDisableParentalSettingsRequest,
  ): Promise<CParentalDisableParentalSettingsResponse> {
    const data = CParentalDisableParentalSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DisableParentalSettings", data);
    return promise.then((data) => CParentalDisableParentalSettingsResponse.decode(new _m0.Reader(data)));
  }

  GetParentalSettings(request: CParentalGetParentalSettingsRequest): Promise<CParentalGetParentalSettingsResponse> {
    const data = CParentalGetParentalSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetParentalSettings", data);
    return promise.then((data) => CParentalGetParentalSettingsResponse.decode(new _m0.Reader(data)));
  }

  GetSignedParentalSettings(
    request: CParentalGetSignedParentalSettingsRequest,
  ): Promise<CParentalGetSignedParentalSettingsResponse> {
    const data = CParentalGetSignedParentalSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSignedParentalSettings", data);
    return promise.then((data) => CParentalGetSignedParentalSettingsResponse.decode(new _m0.Reader(data)));
  }

  SetParentalSettings(request: CParentalSetParentalSettingsRequest): Promise<CParentalSetParentalSettingsResponse> {
    const data = CParentalSetParentalSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetParentalSettings", data);
    return promise.then((data) => CParentalSetParentalSettingsResponse.decode(new _m0.Reader(data)));
  }

  ValidateToken(request: CParentalValidateTokenRequest): Promise<CParentalValidateTokenResponse> {
    const data = CParentalValidateTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateToken", data);
    return promise.then((data) => CParentalValidateTokenResponse.decode(new _m0.Reader(data)));
  }

  ValidatePassword(request: CParentalValidatePasswordRequest): Promise<CParentalValidatePasswordResponse> {
    const data = CParentalValidatePasswordRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidatePassword", data);
    return promise.then((data) => CParentalValidatePasswordResponse.decode(new _m0.Reader(data)));
  }

  LockClient(request: CParentalLockClientRequest): Promise<CParentalLockClientResponse> {
    const data = CParentalLockClientRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LockClient", data);
    return promise.then((data) => CParentalLockClientResponse.decode(new _m0.Reader(data)));
  }

  RequestRecoveryCode(request: CParentalRequestRecoveryCodeRequest): Promise<CParentalRequestRecoveryCodeResponse> {
    const data = CParentalRequestRecoveryCodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestRecoveryCode", data);
    return promise.then((data) => CParentalRequestRecoveryCodeResponse.decode(new _m0.Reader(data)));
  }

  DisableWithRecoveryCode(
    request: CParentalDisableWithRecoveryCodeRequest,
  ): Promise<CParentalDisableWithRecoveryCodeResponse> {
    const data = CParentalDisableWithRecoveryCodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DisableWithRecoveryCode", data);
    return promise.then((data) => CParentalDisableWithRecoveryCodeResponse.decode(new _m0.Reader(data)));
  }
}

export interface ParentalClient {
  NotifySettingsChange(request: CParentalParentalSettingsChangeNotification): Promise<NoResponse>;
  NotifyUnlock(request: CParentalParentalUnlockNotification): Promise<NoResponse>;
  NotifyLock(request: CParentalParentalLockNotification): Promise<NoResponse>;
}

export class ParentalClientClientImpl implements ParentalClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ParentalClient";
    this.rpc = rpc;
    this.NotifySettingsChange = this.NotifySettingsChange.bind(this);
    this.NotifyUnlock = this.NotifyUnlock.bind(this);
    this.NotifyLock = this.NotifyLock.bind(this);
  }
  NotifySettingsChange(request: CParentalParentalSettingsChangeNotification): Promise<NoResponse> {
    const data = CParentalParentalSettingsChangeNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifySettingsChange", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyUnlock(request: CParentalParentalUnlockNotification): Promise<NoResponse> {
    const data = CParentalParentalUnlockNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyUnlock", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyLock(request: CParentalParentalLockNotification): Promise<NoResponse> {
    const data = CParentalParentalLockNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyLock", data);
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
