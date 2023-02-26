/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CGameNotificationsVariable {
  key: string;
  value: string;
}

export interface CGameNotificationsLocalizedText {
  token: string;
  variables: CGameNotificationsVariable[];
  renderedText: string;
}

export interface CGameNotificationsUserStatus {
  steamid: string;
  state: string;
  title: CGameNotificationsLocalizedText | undefined;
  message: CGameNotificationsLocalizedText | undefined;
}

export interface CGameNotificationsCreateSessionRequest {
  appid: number;
  context: string;
  title: CGameNotificationsLocalizedText | undefined;
  users: CGameNotificationsUserStatus[];
  steamid: string;
}

export interface CGameNotificationsCreateSessionResponse {
  sessionid: string;
}

export interface CGameNotificationsDeleteSessionRequest {
  sessionid: string;
  appid: number;
  steamid: string;
}

export interface CGameNotificationsDeleteSessionResponse {
}

export interface CGameNotificationsUpdateSessionRequest {
  sessionid: string;
  appid: number;
  title: CGameNotificationsLocalizedText | undefined;
  users: CGameNotificationsUserStatus[];
  steamid: string;
}

export interface CGameNotificationsUpdateSessionResponse {
}

export interface CGameNotificationsEnumerateSessionsRequest {
  appid: number;
  includeAllUserMessages: boolean;
  includeAuthUserMessage: boolean;
  language: string;
}

export interface CGameNotificationsSession {
  sessionid: string;
  appid: string;
  context: string;
  title: CGameNotificationsLocalizedText | undefined;
  timeCreated: number;
  timeUpdated: number;
  userStatus: CGameNotificationsUserStatus[];
}

export interface CGameNotificationsEnumerateSessionsResponse {
  sessions: CGameNotificationsSession[];
}

export interface CGameNotificationsGetSessionDetailsRequest {
  sessions: CGameNotificationsGetSessionDetailsRequest_RequestedSession[];
  appid: number;
  language: string;
}

export interface CGameNotificationsGetSessionDetailsRequest_RequestedSession {
  sessionid: string;
  includeAuthUserMessage: boolean;
}

export interface CGameNotificationsGetSessionDetailsResponse {
  sessions: CGameNotificationsSession[];
}

export interface GameNotificationSettings {
  appid: number;
  allowNotifications: boolean;
}

export interface CGameNotificationsUpdateNotificationSettingsRequest {
  gameNotificationSettings: GameNotificationSettings[];
}

export interface CGameNotificationsUpdateNotificationSettingsResponse {
}

export interface CGameNotificationsOnNotificationsRequestedNotification {
  steamid: string;
  appid: number;
}

export interface CGameNotificationsOnUserStatusChangedNotification {
  steamid: string;
  sessionid: string;
  appid: number;
  status: CGameNotificationsUserStatus | undefined;
  removed: boolean;
}

function createBaseCGameNotificationsVariable(): CGameNotificationsVariable {
  return { key: "", value: "" };
}

export const CGameNotificationsVariable = {
  encode(message: CGameNotificationsVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsVariable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsVariable();
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

  fromJSON(object: any): CGameNotificationsVariable {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CGameNotificationsVariable): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsVariable>, I>>(base?: I): CGameNotificationsVariable {
    return CGameNotificationsVariable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsVariable>, I>>(object: I): CGameNotificationsVariable {
    const message = createBaseCGameNotificationsVariable();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCGameNotificationsLocalizedText(): CGameNotificationsLocalizedText {
  return { token: "", variables: [], renderedText: "" };
}

export const CGameNotificationsLocalizedText = {
  encode(message: CGameNotificationsLocalizedText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    for (const v of message.variables) {
      CGameNotificationsVariable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.renderedText !== "") {
      writer.uint32(26).string(message.renderedText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsLocalizedText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsLocalizedText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.variables.push(CGameNotificationsVariable.decode(reader, reader.uint32()));
          break;
        case 3:
          message.renderedText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsLocalizedText {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      variables: Array.isArray(object?.variables)
        ? object.variables.map((e: any) => CGameNotificationsVariable.fromJSON(e))
        : [],
      renderedText: isSet(object.renderedText) ? String(object.renderedText) : "",
    };
  },

  toJSON(message: CGameNotificationsLocalizedText): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    if (message.variables) {
      obj.variables = message.variables.map((e) => e ? CGameNotificationsVariable.toJSON(e) : undefined);
    } else {
      obj.variables = [];
    }
    message.renderedText !== undefined && (obj.renderedText = message.renderedText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsLocalizedText>, I>>(base?: I): CGameNotificationsLocalizedText {
    return CGameNotificationsLocalizedText.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsLocalizedText>, I>>(
    object: I,
  ): CGameNotificationsLocalizedText {
    const message = createBaseCGameNotificationsLocalizedText();
    message.token = object.token ?? "";
    message.variables = object.variables?.map((e) => CGameNotificationsVariable.fromPartial(e)) || [];
    message.renderedText = object.renderedText ?? "";
    return message;
  },
};

function createBaseCGameNotificationsUserStatus(): CGameNotificationsUserStatus {
  return { steamid: "0", state: "", title: undefined, message: undefined };
}

export const CGameNotificationsUserStatus = {
  encode(message: CGameNotificationsUserStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.title !== undefined) {
      CGameNotificationsLocalizedText.encode(message.title, writer.uint32(26).fork()).ldelim();
    }
    if (message.message !== undefined) {
      CGameNotificationsLocalizedText.encode(message.message, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsUserStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsUserStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.state = reader.string();
          break;
        case 3:
          message.title = CGameNotificationsLocalizedText.decode(reader, reader.uint32());
          break;
        case 4:
          message.message = CGameNotificationsLocalizedText.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsUserStatus {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      state: isSet(object.state) ? String(object.state) : "",
      title: isSet(object.title) ? CGameNotificationsLocalizedText.fromJSON(object.title) : undefined,
      message: isSet(object.message) ? CGameNotificationsLocalizedText.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: CGameNotificationsUserStatus): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.state !== undefined && (obj.state = message.state);
    message.title !== undefined &&
      (obj.title = message.title ? CGameNotificationsLocalizedText.toJSON(message.title) : undefined);
    message.message !== undefined &&
      (obj.message = message.message ? CGameNotificationsLocalizedText.toJSON(message.message) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsUserStatus>, I>>(base?: I): CGameNotificationsUserStatus {
    return CGameNotificationsUserStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsUserStatus>, I>>(object: I): CGameNotificationsUserStatus {
    const message = createBaseCGameNotificationsUserStatus();
    message.steamid = object.steamid ?? "0";
    message.state = object.state ?? "";
    message.title = (object.title !== undefined && object.title !== null)
      ? CGameNotificationsLocalizedText.fromPartial(object.title)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? CGameNotificationsLocalizedText.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseCGameNotificationsCreateSessionRequest(): CGameNotificationsCreateSessionRequest {
  return { appid: 0, context: "0", title: undefined, users: [], steamid: "0" };
}

export const CGameNotificationsCreateSessionRequest = {
  encode(message: CGameNotificationsCreateSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.context !== "0") {
      writer.uint32(16).uint64(message.context);
    }
    if (message.title !== undefined) {
      CGameNotificationsLocalizedText.encode(message.title, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.users) {
      CGameNotificationsUserStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.steamid !== "0") {
      writer.uint32(41).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsCreateSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsCreateSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.context = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.title = CGameNotificationsLocalizedText.decode(reader, reader.uint32());
          break;
        case 4:
          message.users.push(CGameNotificationsUserStatus.decode(reader, reader.uint32()));
          break;
        case 5:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsCreateSessionRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      context: isSet(object.context) ? String(object.context) : "0",
      title: isSet(object.title) ? CGameNotificationsLocalizedText.fromJSON(object.title) : undefined,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => CGameNotificationsUserStatus.fromJSON(e)) : [],
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CGameNotificationsCreateSessionRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.context !== undefined && (obj.context = message.context);
    message.title !== undefined &&
      (obj.title = message.title ? CGameNotificationsLocalizedText.toJSON(message.title) : undefined);
    if (message.users) {
      obj.users = message.users.map((e) => e ? CGameNotificationsUserStatus.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsCreateSessionRequest>, I>>(
    base?: I,
  ): CGameNotificationsCreateSessionRequest {
    return CGameNotificationsCreateSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsCreateSessionRequest>, I>>(
    object: I,
  ): CGameNotificationsCreateSessionRequest {
    const message = createBaseCGameNotificationsCreateSessionRequest();
    message.appid = object.appid ?? 0;
    message.context = object.context ?? "0";
    message.title = (object.title !== undefined && object.title !== null)
      ? CGameNotificationsLocalizedText.fromPartial(object.title)
      : undefined;
    message.users = object.users?.map((e) => CGameNotificationsUserStatus.fromPartial(e)) || [];
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCGameNotificationsCreateSessionResponse(): CGameNotificationsCreateSessionResponse {
  return { sessionid: "0" };
}

export const CGameNotificationsCreateSessionResponse = {
  encode(message: CGameNotificationsCreateSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== "0") {
      writer.uint32(8).uint64(message.sessionid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsCreateSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsCreateSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsCreateSessionResponse {
    return { sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0" };
  },

  toJSON(message: CGameNotificationsCreateSessionResponse): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsCreateSessionResponse>, I>>(
    base?: I,
  ): CGameNotificationsCreateSessionResponse {
    return CGameNotificationsCreateSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsCreateSessionResponse>, I>>(
    object: I,
  ): CGameNotificationsCreateSessionResponse {
    const message = createBaseCGameNotificationsCreateSessionResponse();
    message.sessionid = object.sessionid ?? "0";
    return message;
  },
};

function createBaseCGameNotificationsDeleteSessionRequest(): CGameNotificationsDeleteSessionRequest {
  return { sessionid: "0", appid: 0, steamid: "0" };
}

export const CGameNotificationsDeleteSessionRequest = {
  encode(message: CGameNotificationsDeleteSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== "0") {
      writer.uint32(8).uint64(message.sessionid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.steamid !== "0") {
      writer.uint32(25).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsDeleteSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsDeleteSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsDeleteSessionRequest {
    return {
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CGameNotificationsDeleteSessionRequest): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsDeleteSessionRequest>, I>>(
    base?: I,
  ): CGameNotificationsDeleteSessionRequest {
    return CGameNotificationsDeleteSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsDeleteSessionRequest>, I>>(
    object: I,
  ): CGameNotificationsDeleteSessionRequest {
    const message = createBaseCGameNotificationsDeleteSessionRequest();
    message.sessionid = object.sessionid ?? "0";
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCGameNotificationsDeleteSessionResponse(): CGameNotificationsDeleteSessionResponse {
  return {};
}

export const CGameNotificationsDeleteSessionResponse = {
  encode(_: CGameNotificationsDeleteSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsDeleteSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsDeleteSessionResponse();
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

  fromJSON(_: any): CGameNotificationsDeleteSessionResponse {
    return {};
  },

  toJSON(_: CGameNotificationsDeleteSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsDeleteSessionResponse>, I>>(
    base?: I,
  ): CGameNotificationsDeleteSessionResponse {
    return CGameNotificationsDeleteSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsDeleteSessionResponse>, I>>(
    _: I,
  ): CGameNotificationsDeleteSessionResponse {
    const message = createBaseCGameNotificationsDeleteSessionResponse();
    return message;
  },
};

function createBaseCGameNotificationsUpdateSessionRequest(): CGameNotificationsUpdateSessionRequest {
  return { sessionid: "0", appid: 0, title: undefined, users: [], steamid: "0" };
}

export const CGameNotificationsUpdateSessionRequest = {
  encode(message: CGameNotificationsUpdateSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== "0") {
      writer.uint32(8).uint64(message.sessionid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.title !== undefined) {
      CGameNotificationsLocalizedText.encode(message.title, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.users) {
      CGameNotificationsUserStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.steamid !== "0") {
      writer.uint32(49).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsUpdateSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsUpdateSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.title = CGameNotificationsLocalizedText.decode(reader, reader.uint32());
          break;
        case 4:
          message.users.push(CGameNotificationsUserStatus.decode(reader, reader.uint32()));
          break;
        case 6:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsUpdateSessionRequest {
    return {
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      title: isSet(object.title) ? CGameNotificationsLocalizedText.fromJSON(object.title) : undefined,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => CGameNotificationsUserStatus.fromJSON(e)) : [],
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CGameNotificationsUpdateSessionRequest): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.title !== undefined &&
      (obj.title = message.title ? CGameNotificationsLocalizedText.toJSON(message.title) : undefined);
    if (message.users) {
      obj.users = message.users.map((e) => e ? CGameNotificationsUserStatus.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsUpdateSessionRequest>, I>>(
    base?: I,
  ): CGameNotificationsUpdateSessionRequest {
    return CGameNotificationsUpdateSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsUpdateSessionRequest>, I>>(
    object: I,
  ): CGameNotificationsUpdateSessionRequest {
    const message = createBaseCGameNotificationsUpdateSessionRequest();
    message.sessionid = object.sessionid ?? "0";
    message.appid = object.appid ?? 0;
    message.title = (object.title !== undefined && object.title !== null)
      ? CGameNotificationsLocalizedText.fromPartial(object.title)
      : undefined;
    message.users = object.users?.map((e) => CGameNotificationsUserStatus.fromPartial(e)) || [];
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCGameNotificationsUpdateSessionResponse(): CGameNotificationsUpdateSessionResponse {
  return {};
}

export const CGameNotificationsUpdateSessionResponse = {
  encode(_: CGameNotificationsUpdateSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsUpdateSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsUpdateSessionResponse();
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

  fromJSON(_: any): CGameNotificationsUpdateSessionResponse {
    return {};
  },

  toJSON(_: CGameNotificationsUpdateSessionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsUpdateSessionResponse>, I>>(
    base?: I,
  ): CGameNotificationsUpdateSessionResponse {
    return CGameNotificationsUpdateSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsUpdateSessionResponse>, I>>(
    _: I,
  ): CGameNotificationsUpdateSessionResponse {
    const message = createBaseCGameNotificationsUpdateSessionResponse();
    return message;
  },
};

function createBaseCGameNotificationsEnumerateSessionsRequest(): CGameNotificationsEnumerateSessionsRequest {
  return { appid: 0, includeAllUserMessages: false, includeAuthUserMessage: false, language: "" };
}

export const CGameNotificationsEnumerateSessionsRequest = {
  encode(message: CGameNotificationsEnumerateSessionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.includeAllUserMessages === true) {
      writer.uint32(24).bool(message.includeAllUserMessages);
    }
    if (message.includeAuthUserMessage === true) {
      writer.uint32(32).bool(message.includeAuthUserMessage);
    }
    if (message.language !== "") {
      writer.uint32(42).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsEnumerateSessionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsEnumerateSessionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 3:
          message.includeAllUserMessages = reader.bool();
          break;
        case 4:
          message.includeAuthUserMessage = reader.bool();
          break;
        case 5:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsEnumerateSessionsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      includeAllUserMessages: isSet(object.includeAllUserMessages) ? Boolean(object.includeAllUserMessages) : false,
      includeAuthUserMessage: isSet(object.includeAuthUserMessage) ? Boolean(object.includeAuthUserMessage) : false,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CGameNotificationsEnumerateSessionsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.includeAllUserMessages !== undefined && (obj.includeAllUserMessages = message.includeAllUserMessages);
    message.includeAuthUserMessage !== undefined && (obj.includeAuthUserMessage = message.includeAuthUserMessage);
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsEnumerateSessionsRequest>, I>>(
    base?: I,
  ): CGameNotificationsEnumerateSessionsRequest {
    return CGameNotificationsEnumerateSessionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsEnumerateSessionsRequest>, I>>(
    object: I,
  ): CGameNotificationsEnumerateSessionsRequest {
    const message = createBaseCGameNotificationsEnumerateSessionsRequest();
    message.appid = object.appid ?? 0;
    message.includeAllUserMessages = object.includeAllUserMessages ?? false;
    message.includeAuthUserMessage = object.includeAuthUserMessage ?? false;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCGameNotificationsSession(): CGameNotificationsSession {
  return { sessionid: "0", appid: "0", context: "0", title: undefined, timeCreated: 0, timeUpdated: 0, userStatus: [] };
}

export const CGameNotificationsSession = {
  encode(message: CGameNotificationsSession, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionid !== "0") {
      writer.uint32(8).uint64(message.sessionid);
    }
    if (message.appid !== "0") {
      writer.uint32(16).uint64(message.appid);
    }
    if (message.context !== "0") {
      writer.uint32(24).uint64(message.context);
    }
    if (message.title !== undefined) {
      CGameNotificationsLocalizedText.encode(message.title, writer.uint32(34).fork()).ldelim();
    }
    if (message.timeCreated !== 0) {
      writer.uint32(40).uint32(message.timeCreated);
    }
    if (message.timeUpdated !== 0) {
      writer.uint32(48).uint32(message.timeUpdated);
    }
    for (const v of message.userStatus) {
      CGameNotificationsUserStatus.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.appid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.context = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.title = CGameNotificationsLocalizedText.decode(reader, reader.uint32());
          break;
        case 5:
          message.timeCreated = reader.uint32();
          break;
        case 6:
          message.timeUpdated = reader.uint32();
          break;
        case 7:
          message.userStatus.push(CGameNotificationsUserStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsSession {
    return {
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0",
      appid: isSet(object.appid) ? String(object.appid) : "0",
      context: isSet(object.context) ? String(object.context) : "0",
      title: isSet(object.title) ? CGameNotificationsLocalizedText.fromJSON(object.title) : undefined,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      timeUpdated: isSet(object.timeUpdated) ? Number(object.timeUpdated) : 0,
      userStatus: Array.isArray(object?.userStatus)
        ? object.userStatus.map((e: any) => CGameNotificationsUserStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameNotificationsSession): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.appid !== undefined && (obj.appid = message.appid);
    message.context !== undefined && (obj.context = message.context);
    message.title !== undefined &&
      (obj.title = message.title ? CGameNotificationsLocalizedText.toJSON(message.title) : undefined);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.timeUpdated !== undefined && (obj.timeUpdated = Math.round(message.timeUpdated));
    if (message.userStatus) {
      obj.userStatus = message.userStatus.map((e) => e ? CGameNotificationsUserStatus.toJSON(e) : undefined);
    } else {
      obj.userStatus = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsSession>, I>>(base?: I): CGameNotificationsSession {
    return CGameNotificationsSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsSession>, I>>(object: I): CGameNotificationsSession {
    const message = createBaseCGameNotificationsSession();
    message.sessionid = object.sessionid ?? "0";
    message.appid = object.appid ?? "0";
    message.context = object.context ?? "0";
    message.title = (object.title !== undefined && object.title !== null)
      ? CGameNotificationsLocalizedText.fromPartial(object.title)
      : undefined;
    message.timeCreated = object.timeCreated ?? 0;
    message.timeUpdated = object.timeUpdated ?? 0;
    message.userStatus = object.userStatus?.map((e) => CGameNotificationsUserStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCGameNotificationsEnumerateSessionsResponse(): CGameNotificationsEnumerateSessionsResponse {
  return { sessions: [] };
}

export const CGameNotificationsEnumerateSessionsResponse = {
  encode(message: CGameNotificationsEnumerateSessionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      CGameNotificationsSession.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsEnumerateSessionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsEnumerateSessionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(CGameNotificationsSession.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsEnumerateSessionsResponse {
    return {
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => CGameNotificationsSession.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameNotificationsEnumerateSessionsResponse): unknown {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) => e ? CGameNotificationsSession.toJSON(e) : undefined);
    } else {
      obj.sessions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsEnumerateSessionsResponse>, I>>(
    base?: I,
  ): CGameNotificationsEnumerateSessionsResponse {
    return CGameNotificationsEnumerateSessionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsEnumerateSessionsResponse>, I>>(
    object: I,
  ): CGameNotificationsEnumerateSessionsResponse {
    const message = createBaseCGameNotificationsEnumerateSessionsResponse();
    message.sessions = object.sessions?.map((e) => CGameNotificationsSession.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCGameNotificationsGetSessionDetailsRequest(): CGameNotificationsGetSessionDetailsRequest {
  return { sessions: [], appid: 0, language: "" };
}

export const CGameNotificationsGetSessionDetailsRequest = {
  encode(message: CGameNotificationsGetSessionDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      CGameNotificationsGetSessionDetailsRequest_RequestedSession.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.language !== "") {
      writer.uint32(26).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsGetSessionDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsGetSessionDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(
            CGameNotificationsGetSessionDetailsRequest_RequestedSession.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsGetSessionDetailsRequest {
    return {
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => CGameNotificationsGetSessionDetailsRequest_RequestedSession.fromJSON(e))
        : [],
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CGameNotificationsGetSessionDetailsRequest): unknown {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) =>
        e ? CGameNotificationsGetSessionDetailsRequest_RequestedSession.toJSON(e) : undefined
      );
    } else {
      obj.sessions = [];
    }
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsRequest>, I>>(
    base?: I,
  ): CGameNotificationsGetSessionDetailsRequest {
    return CGameNotificationsGetSessionDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsRequest>, I>>(
    object: I,
  ): CGameNotificationsGetSessionDetailsRequest {
    const message = createBaseCGameNotificationsGetSessionDetailsRequest();
    message.sessions =
      object.sessions?.map((e) => CGameNotificationsGetSessionDetailsRequest_RequestedSession.fromPartial(e)) || [];
    message.appid = object.appid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCGameNotificationsGetSessionDetailsRequest_RequestedSession(): CGameNotificationsGetSessionDetailsRequest_RequestedSession {
  return { sessionid: "0", includeAuthUserMessage: false };
}

export const CGameNotificationsGetSessionDetailsRequest_RequestedSession = {
  encode(
    message: CGameNotificationsGetSessionDetailsRequest_RequestedSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sessionid !== "0") {
      writer.uint32(8).uint64(message.sessionid);
    }
    if (message.includeAuthUserMessage === true) {
      writer.uint32(24).bool(message.includeAuthUserMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsGetSessionDetailsRequest_RequestedSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsGetSessionDetailsRequest_RequestedSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.includeAuthUserMessage = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsGetSessionDetailsRequest_RequestedSession {
    return {
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0",
      includeAuthUserMessage: isSet(object.includeAuthUserMessage) ? Boolean(object.includeAuthUserMessage) : false,
    };
  },

  toJSON(message: CGameNotificationsGetSessionDetailsRequest_RequestedSession): unknown {
    const obj: any = {};
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.includeAuthUserMessage !== undefined && (obj.includeAuthUserMessage = message.includeAuthUserMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsRequest_RequestedSession>, I>>(
    base?: I,
  ): CGameNotificationsGetSessionDetailsRequest_RequestedSession {
    return CGameNotificationsGetSessionDetailsRequest_RequestedSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsRequest_RequestedSession>, I>>(
    object: I,
  ): CGameNotificationsGetSessionDetailsRequest_RequestedSession {
    const message = createBaseCGameNotificationsGetSessionDetailsRequest_RequestedSession();
    message.sessionid = object.sessionid ?? "0";
    message.includeAuthUserMessage = object.includeAuthUserMessage ?? false;
    return message;
  },
};

function createBaseCGameNotificationsGetSessionDetailsResponse(): CGameNotificationsGetSessionDetailsResponse {
  return { sessions: [] };
}

export const CGameNotificationsGetSessionDetailsResponse = {
  encode(message: CGameNotificationsGetSessionDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sessions) {
      CGameNotificationsSession.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsGetSessionDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsGetSessionDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(CGameNotificationsSession.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsGetSessionDetailsResponse {
    return {
      sessions: Array.isArray(object?.sessions)
        ? object.sessions.map((e: any) => CGameNotificationsSession.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameNotificationsGetSessionDetailsResponse): unknown {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) => e ? CGameNotificationsSession.toJSON(e) : undefined);
    } else {
      obj.sessions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsResponse>, I>>(
    base?: I,
  ): CGameNotificationsGetSessionDetailsResponse {
    return CGameNotificationsGetSessionDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsGetSessionDetailsResponse>, I>>(
    object: I,
  ): CGameNotificationsGetSessionDetailsResponse {
    const message = createBaseCGameNotificationsGetSessionDetailsResponse();
    message.sessions = object.sessions?.map((e) => CGameNotificationsSession.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGameNotificationSettings(): GameNotificationSettings {
  return { appid: 0, allowNotifications: false };
}

export const GameNotificationSettings = {
  encode(message: GameNotificationSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.allowNotifications === true) {
      writer.uint32(16).bool(message.allowNotifications);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameNotificationSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameNotificationSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.allowNotifications = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameNotificationSettings {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      allowNotifications: isSet(object.allowNotifications) ? Boolean(object.allowNotifications) : false,
    };
  },

  toJSON(message: GameNotificationSettings): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.allowNotifications !== undefined && (obj.allowNotifications = message.allowNotifications);
    return obj;
  },

  create<I extends Exact<DeepPartial<GameNotificationSettings>, I>>(base?: I): GameNotificationSettings {
    return GameNotificationSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameNotificationSettings>, I>>(object: I): GameNotificationSettings {
    const message = createBaseGameNotificationSettings();
    message.appid = object.appid ?? 0;
    message.allowNotifications = object.allowNotifications ?? false;
    return message;
  },
};

function createBaseCGameNotificationsUpdateNotificationSettingsRequest(): CGameNotificationsUpdateNotificationSettingsRequest {
  return { gameNotificationSettings: [] };
}

export const CGameNotificationsUpdateNotificationSettingsRequest = {
  encode(
    message: CGameNotificationsUpdateNotificationSettingsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.gameNotificationSettings) {
      GameNotificationSettings.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsUpdateNotificationSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsUpdateNotificationSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameNotificationSettings.push(GameNotificationSettings.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsUpdateNotificationSettingsRequest {
    return {
      gameNotificationSettings: Array.isArray(object?.gameNotificationSettings)
        ? object.gameNotificationSettings.map((e: any) => GameNotificationSettings.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameNotificationsUpdateNotificationSettingsRequest): unknown {
    const obj: any = {};
    if (message.gameNotificationSettings) {
      obj.gameNotificationSettings = message.gameNotificationSettings.map((e) =>
        e ? GameNotificationSettings.toJSON(e) : undefined
      );
    } else {
      obj.gameNotificationSettings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsUpdateNotificationSettingsRequest>, I>>(
    base?: I,
  ): CGameNotificationsUpdateNotificationSettingsRequest {
    return CGameNotificationsUpdateNotificationSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsUpdateNotificationSettingsRequest>, I>>(
    object: I,
  ): CGameNotificationsUpdateNotificationSettingsRequest {
    const message = createBaseCGameNotificationsUpdateNotificationSettingsRequest();
    message.gameNotificationSettings =
      object.gameNotificationSettings?.map((e) => GameNotificationSettings.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCGameNotificationsUpdateNotificationSettingsResponse(): CGameNotificationsUpdateNotificationSettingsResponse {
  return {};
}

export const CGameNotificationsUpdateNotificationSettingsResponse = {
  encode(
    _: CGameNotificationsUpdateNotificationSettingsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsUpdateNotificationSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsUpdateNotificationSettingsResponse();
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

  fromJSON(_: any): CGameNotificationsUpdateNotificationSettingsResponse {
    return {};
  },

  toJSON(_: CGameNotificationsUpdateNotificationSettingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsUpdateNotificationSettingsResponse>, I>>(
    base?: I,
  ): CGameNotificationsUpdateNotificationSettingsResponse {
    return CGameNotificationsUpdateNotificationSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsUpdateNotificationSettingsResponse>, I>>(
    _: I,
  ): CGameNotificationsUpdateNotificationSettingsResponse {
    const message = createBaseCGameNotificationsUpdateNotificationSettingsResponse();
    return message;
  },
};

function createBaseCGameNotificationsOnNotificationsRequestedNotification(): CGameNotificationsOnNotificationsRequestedNotification {
  return { steamid: "0", appid: 0 };
}

export const CGameNotificationsOnNotificationsRequestedNotification = {
  encode(
    message: CGameNotificationsOnNotificationsRequestedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsOnNotificationsRequestedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsOnNotificationsRequestedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
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

  fromJSON(object: any): CGameNotificationsOnNotificationsRequestedNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CGameNotificationsOnNotificationsRequestedNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsOnNotificationsRequestedNotification>, I>>(
    base?: I,
  ): CGameNotificationsOnNotificationsRequestedNotification {
    return CGameNotificationsOnNotificationsRequestedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsOnNotificationsRequestedNotification>, I>>(
    object: I,
  ): CGameNotificationsOnNotificationsRequestedNotification {
    const message = createBaseCGameNotificationsOnNotificationsRequestedNotification();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCGameNotificationsOnUserStatusChangedNotification(): CGameNotificationsOnUserStatusChangedNotification {
  return { steamid: "0", sessionid: "0", appid: 0, status: undefined, removed: false };
}

export const CGameNotificationsOnUserStatusChangedNotification = {
  encode(
    message: CGameNotificationsOnUserStatusChangedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.sessionid !== "0") {
      writer.uint32(16).uint64(message.sessionid);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    if (message.status !== undefined) {
      CGameNotificationsUserStatus.encode(message.status, writer.uint32(34).fork()).ldelim();
    }
    if (message.removed === true) {
      writer.uint32(40).bool(message.removed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNotificationsOnUserStatusChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNotificationsOnUserStatusChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.sessionid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        case 4:
          message.status = CGameNotificationsUserStatus.decode(reader, reader.uint32());
          break;
        case 5:
          message.removed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNotificationsOnUserStatusChangedNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      sessionid: isSet(object.sessionid) ? String(object.sessionid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      status: isSet(object.status) ? CGameNotificationsUserStatus.fromJSON(object.status) : undefined,
      removed: isSet(object.removed) ? Boolean(object.removed) : false,
    };
  },

  toJSON(message: CGameNotificationsOnUserStatusChangedNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.sessionid !== undefined && (obj.sessionid = message.sessionid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.status !== undefined &&
      (obj.status = message.status ? CGameNotificationsUserStatus.toJSON(message.status) : undefined);
    message.removed !== undefined && (obj.removed = message.removed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNotificationsOnUserStatusChangedNotification>, I>>(
    base?: I,
  ): CGameNotificationsOnUserStatusChangedNotification {
    return CGameNotificationsOnUserStatusChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNotificationsOnUserStatusChangedNotification>, I>>(
    object: I,
  ): CGameNotificationsOnUserStatusChangedNotification {
    const message = createBaseCGameNotificationsOnUserStatusChangedNotification();
    message.steamid = object.steamid ?? "0";
    message.sessionid = object.sessionid ?? "0";
    message.appid = object.appid ?? 0;
    message.status = (object.status !== undefined && object.status !== null)
      ? CGameNotificationsUserStatus.fromPartial(object.status)
      : undefined;
    message.removed = object.removed ?? false;
    return message;
  },
};

export interface GameNotifications {
  UserCreateSession(request: CGameNotificationsCreateSessionRequest): Promise<CGameNotificationsCreateSessionResponse>;
  UserDeleteSession(request: CGameNotificationsDeleteSessionRequest): Promise<CGameNotificationsDeleteSessionResponse>;
  UserUpdateSession(request: CGameNotificationsUpdateSessionRequest): Promise<CGameNotificationsUpdateSessionResponse>;
  EnumerateSessions(
    request: CGameNotificationsEnumerateSessionsRequest,
  ): Promise<CGameNotificationsEnumerateSessionsResponse>;
  GetSessionDetails(
    request: CGameNotificationsGetSessionDetailsRequest,
  ): Promise<CGameNotificationsGetSessionDetailsResponse>;
  UpdateNotificationSettings(
    request: CGameNotificationsUpdateNotificationSettingsRequest,
  ): Promise<CGameNotificationsUpdateNotificationSettingsResponse>;
}

export class GameNotificationsClientImpl implements GameNotifications {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GameNotifications";
    this.rpc = rpc;
    this.UserCreateSession = this.UserCreateSession.bind(this);
    this.UserDeleteSession = this.UserDeleteSession.bind(this);
    this.UserUpdateSession = this.UserUpdateSession.bind(this);
    this.EnumerateSessions = this.EnumerateSessions.bind(this);
    this.GetSessionDetails = this.GetSessionDetails.bind(this);
    this.UpdateNotificationSettings = this.UpdateNotificationSettings.bind(this);
  }
  UserCreateSession(request: CGameNotificationsCreateSessionRequest): Promise<CGameNotificationsCreateSessionResponse> {
    const data = CGameNotificationsCreateSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserCreateSession", data);
    return promise.then((data) => CGameNotificationsCreateSessionResponse.decode(new _m0.Reader(data)));
  }

  UserDeleteSession(request: CGameNotificationsDeleteSessionRequest): Promise<CGameNotificationsDeleteSessionResponse> {
    const data = CGameNotificationsDeleteSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserDeleteSession", data);
    return promise.then((data) => CGameNotificationsDeleteSessionResponse.decode(new _m0.Reader(data)));
  }

  UserUpdateSession(request: CGameNotificationsUpdateSessionRequest): Promise<CGameNotificationsUpdateSessionResponse> {
    const data = CGameNotificationsUpdateSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UserUpdateSession", data);
    return promise.then((data) => CGameNotificationsUpdateSessionResponse.decode(new _m0.Reader(data)));
  }

  EnumerateSessions(
    request: CGameNotificationsEnumerateSessionsRequest,
  ): Promise<CGameNotificationsEnumerateSessionsResponse> {
    const data = CGameNotificationsEnumerateSessionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnumerateSessions", data);
    return promise.then((data) => CGameNotificationsEnumerateSessionsResponse.decode(new _m0.Reader(data)));
  }

  GetSessionDetails(
    request: CGameNotificationsGetSessionDetailsRequest,
  ): Promise<CGameNotificationsGetSessionDetailsResponse> {
    const data = CGameNotificationsGetSessionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSessionDetails", data);
    return promise.then((data) => CGameNotificationsGetSessionDetailsResponse.decode(new _m0.Reader(data)));
  }

  UpdateNotificationSettings(
    request: CGameNotificationsUpdateNotificationSettingsRequest,
  ): Promise<CGameNotificationsUpdateNotificationSettingsResponse> {
    const data = CGameNotificationsUpdateNotificationSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateNotificationSettings", data);
    return promise.then((data) => CGameNotificationsUpdateNotificationSettingsResponse.decode(new _m0.Reader(data)));
  }
}

export interface GameNotificationsClient {
  OnNotificationsRequested(request: CGameNotificationsOnNotificationsRequestedNotification): Promise<NoResponse>;
  OnUserStatusChanged(request: CGameNotificationsOnUserStatusChangedNotification): Promise<NoResponse>;
}

export class GameNotificationsClientClientImpl implements GameNotificationsClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GameNotificationsClient";
    this.rpc = rpc;
    this.OnNotificationsRequested = this.OnNotificationsRequested.bind(this);
    this.OnUserStatusChanged = this.OnUserStatusChanged.bind(this);
  }
  OnNotificationsRequested(request: CGameNotificationsOnNotificationsRequestedNotification): Promise<NoResponse> {
    const data = CGameNotificationsOnNotificationsRequestedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "OnNotificationsRequested", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  OnUserStatusChanged(request: CGameNotificationsOnUserStatusChangedNotification): Promise<NoResponse> {
    const data = CGameNotificationsOnUserStatusChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "OnUserStatusChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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
