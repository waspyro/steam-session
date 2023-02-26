/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CDeviceAuthGetOwnAuthorizedDevicesRequest {
  steamid: string;
  includeCanceled: boolean;
}

export interface CDeviceAuthGetOwnAuthorizedDevicesResponse {
  devices: CDeviceAuthGetOwnAuthorizedDevicesResponse_Device[];
}

export interface CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
  authDeviceToken: string;
  deviceName: string;
  isPending: boolean;
  isCanceled: boolean;
  lastTimeUsed: number;
  lastBorrowerId: string;
  lastAppPlayed: number;
  isLimited: boolean;
}

export interface CDeviceAuthAcceptAuthorizationRequestRequest {
  steamid: string;
  authDeviceToken: string;
  authCode: string;
  fromSteamid: string;
}

export interface CDeviceAuthAcceptAuthorizationRequestResponse {
}

export interface CDeviceAuthAuthorizeRemoteDeviceRequest {
  steamid: string;
  authDeviceToken: string;
}

export interface CDeviceAuthAuthorizeRemoteDeviceResponse {
}

export interface CDeviceAuthDeauthorizeRemoteDeviceRequest {
  steamid: string;
  authDeviceToken: string;
}

export interface CDeviceAuthDeauthorizeRemoteDeviceResponse {
}

export interface CDeviceAuthGetUsedAuthorizedDevicesRequest {
  steamid: string;
}

export interface CDeviceAuthGetUsedAuthorizedDevicesResponse {
  devices: CDeviceAuthGetUsedAuthorizedDevicesResponse_Device[];
}

export interface CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
  authDeviceToken: string;
  deviceName: string;
  ownerSteamid: string;
  lastTimeUsed: number;
  lastAppPlayed: number;
}

export interface CDeviceAuthGetAuthorizedBorrowersRequest {
  steamid: string;
  includeCanceled: boolean;
  includePending: boolean;
}

export interface CDeviceAuthGetAuthorizedBorrowersResponse {
  borrowers: CDeviceAuthGetAuthorizedBorrowersResponse_Borrower[];
}

export interface CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
  steamid: string;
  isPending: boolean;
  isCanceled: boolean;
  timeCreated: number;
}

export interface CDeviceAuthAddAuthorizedBorrowersRequest {
  steamid: string;
  steamidBorrower: string[];
}

export interface CDeviceAuthAddAuthorizedBorrowersResponse {
  secondsToWait: number;
}

export interface CDeviceAuthRemoveAuthorizedBorrowersRequest {
  steamid: string;
  steamidBorrower: string[];
}

export interface CDeviceAuthRemoveAuthorizedBorrowersResponse {
}

export interface CDeviceAuthGetAuthorizedAsBorrowerRequest {
  steamid: string;
  includeCanceled: boolean;
  includePending: boolean;
}

export interface CDeviceAuthGetAuthorizedAsBorrowerResponse {
  lenders: CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender[];
}

export interface CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
  steamid: string;
  timeCreated: number;
  isPending: boolean;
  isCanceled: boolean;
  isUsed: boolean;
  timeRemoved: number;
  timeFirst: number;
}

export interface CDeviceAuthGetExcludedGamesInLibraryRequest {
  steamid: string;
}

export interface CDeviceAuthGetExcludedGamesInLibraryResponse {
  excludedGames: CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame[];
}

export interface CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
  appid: number;
  gameName: string;
  vacBanned: boolean;
  packageExcluded: boolean;
}

export interface CDeviceAuthGetBorrowerPlayHistoryRequest {
  steamid: string;
  appid: number;
}

export interface CDeviceAuthGetBorrowerPlayHistoryResponse {
  lenderHistory: CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory[];
}

export interface CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
  appid: number;
  timeLast: number;
  timeTotal: number;
}

export interface CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
  steamid: string;
  gameHistory: CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory[];
}

function createBaseCDeviceAuthGetOwnAuthorizedDevicesRequest(): CDeviceAuthGetOwnAuthorizedDevicesRequest {
  return { steamid: "0", includeCanceled: false };
}

export const CDeviceAuthGetOwnAuthorizedDevicesRequest = {
  encode(message: CDeviceAuthGetOwnAuthorizedDevicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeCanceled === true) {
      writer.uint32(16).bool(message.includeCanceled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetOwnAuthorizedDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.includeCanceled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetOwnAuthorizedDevicesRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      includeCanceled: isSet(object.includeCanceled) ? Boolean(object.includeCanceled) : false,
    };
  },

  toJSON(message: CDeviceAuthGetOwnAuthorizedDevicesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.includeCanceled !== undefined && (obj.includeCanceled = message.includeCanceled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesRequest {
    return CDeviceAuthGetOwnAuthorizedDevicesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesRequest>, I>>(
    object: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesRequest {
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesRequest();
    message.steamid = object.steamid ?? "0";
    message.includeCanceled = object.includeCanceled ?? false;
    return message;
  },
};

function createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse(): CDeviceAuthGetOwnAuthorizedDevicesResponse {
  return { devices: [] };
}

export const CDeviceAuthGetOwnAuthorizedDevicesResponse = {
  encode(message: CDeviceAuthGetOwnAuthorizedDevicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetOwnAuthorizedDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetOwnAuthorizedDevicesResponse {
    return {
      devices: Array.isArray(object?.devices)
        ? object.devices.map((e: any) => CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetOwnAuthorizedDevicesResponse): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) =>
        e ? CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.toJSON(e) : undefined
      );
    } else {
      obj.devices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesResponse {
    return CDeviceAuthGetOwnAuthorizedDevicesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesResponse>, I>>(
    object: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesResponse {
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse();
    message.devices = object.devices?.map((e) => CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse_Device(): CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
  return {
    authDeviceToken: "0",
    deviceName: "",
    isPending: false,
    isCanceled: false,
    lastTimeUsed: 0,
    lastBorrowerId: "0",
    lastAppPlayed: 0,
    isLimited: false,
  };
}

export const CDeviceAuthGetOwnAuthorizedDevicesResponse_Device = {
  encode(
    message: CDeviceAuthGetOwnAuthorizedDevicesResponse_Device,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authDeviceToken !== "0") {
      writer.uint32(9).fixed64(message.authDeviceToken);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.isPending === true) {
      writer.uint32(24).bool(message.isPending);
    }
    if (message.isCanceled === true) {
      writer.uint32(32).bool(message.isCanceled);
    }
    if (message.lastTimeUsed !== 0) {
      writer.uint32(40).uint32(message.lastTimeUsed);
    }
    if (message.lastBorrowerId !== "0") {
      writer.uint32(49).fixed64(message.lastBorrowerId);
    }
    if (message.lastAppPlayed !== 0) {
      writer.uint32(56).uint32(message.lastAppPlayed);
    }
    if (message.isLimited === true) {
      writer.uint32(64).bool(message.isLimited);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authDeviceToken = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.isPending = reader.bool();
          break;
        case 4:
          message.isCanceled = reader.bool();
          break;
        case 5:
          message.lastTimeUsed = reader.uint32();
          break;
        case 6:
          message.lastBorrowerId = longToString(reader.fixed64() as Long);
          break;
        case 7:
          message.lastAppPlayed = reader.uint32();
          break;
        case 8:
          message.isLimited = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
    return {
      authDeviceToken: isSet(object.authDeviceToken) ? String(object.authDeviceToken) : "0",
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      isPending: isSet(object.isPending) ? Boolean(object.isPending) : false,
      isCanceled: isSet(object.isCanceled) ? Boolean(object.isCanceled) : false,
      lastTimeUsed: isSet(object.lastTimeUsed) ? Number(object.lastTimeUsed) : 0,
      lastBorrowerId: isSet(object.lastBorrowerId) ? String(object.lastBorrowerId) : "0",
      lastAppPlayed: isSet(object.lastAppPlayed) ? Number(object.lastAppPlayed) : 0,
      isLimited: isSet(object.isLimited) ? Boolean(object.isLimited) : false,
    };
  },

  toJSON(message: CDeviceAuthGetOwnAuthorizedDevicesResponse_Device): unknown {
    const obj: any = {};
    message.authDeviceToken !== undefined && (obj.authDeviceToken = message.authDeviceToken);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.isPending !== undefined && (obj.isPending = message.isPending);
    message.isCanceled !== undefined && (obj.isCanceled = message.isCanceled);
    message.lastTimeUsed !== undefined && (obj.lastTimeUsed = Math.round(message.lastTimeUsed));
    message.lastBorrowerId !== undefined && (obj.lastBorrowerId = message.lastBorrowerId);
    message.lastAppPlayed !== undefined && (obj.lastAppPlayed = Math.round(message.lastAppPlayed));
    message.isLimited !== undefined && (obj.isLimited = message.isLimited);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesResponse_Device>, I>>(
    base?: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
    return CDeviceAuthGetOwnAuthorizedDevicesResponse_Device.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetOwnAuthorizedDevicesResponse_Device>, I>>(
    object: I,
  ): CDeviceAuthGetOwnAuthorizedDevicesResponse_Device {
    const message = createBaseCDeviceAuthGetOwnAuthorizedDevicesResponse_Device();
    message.authDeviceToken = object.authDeviceToken ?? "0";
    message.deviceName = object.deviceName ?? "";
    message.isPending = object.isPending ?? false;
    message.isCanceled = object.isCanceled ?? false;
    message.lastTimeUsed = object.lastTimeUsed ?? 0;
    message.lastBorrowerId = object.lastBorrowerId ?? "0";
    message.lastAppPlayed = object.lastAppPlayed ?? 0;
    message.isLimited = object.isLimited ?? false;
    return message;
  },
};

function createBaseCDeviceAuthAcceptAuthorizationRequestRequest(): CDeviceAuthAcceptAuthorizationRequestRequest {
  return { steamid: "0", authDeviceToken: "0", authCode: "0", fromSteamid: "0" };
}

export const CDeviceAuthAcceptAuthorizationRequestRequest = {
  encode(message: CDeviceAuthAcceptAuthorizationRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authDeviceToken !== "0") {
      writer.uint32(17).fixed64(message.authDeviceToken);
    }
    if (message.authCode !== "0") {
      writer.uint32(25).fixed64(message.authCode);
    }
    if (message.fromSteamid !== "0") {
      writer.uint32(33).fixed64(message.fromSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAcceptAuthorizationRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAcceptAuthorizationRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.authDeviceToken = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.authCode = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.fromSteamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthAcceptAuthorizationRequestRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      authDeviceToken: isSet(object.authDeviceToken) ? String(object.authDeviceToken) : "0",
      authCode: isSet(object.authCode) ? String(object.authCode) : "0",
      fromSteamid: isSet(object.fromSteamid) ? String(object.fromSteamid) : "0",
    };
  },

  toJSON(message: CDeviceAuthAcceptAuthorizationRequestRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.authDeviceToken !== undefined && (obj.authDeviceToken = message.authDeviceToken);
    message.authCode !== undefined && (obj.authCode = message.authCode);
    message.fromSteamid !== undefined && (obj.fromSteamid = message.fromSteamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAcceptAuthorizationRequestRequest>, I>>(
    base?: I,
  ): CDeviceAuthAcceptAuthorizationRequestRequest {
    return CDeviceAuthAcceptAuthorizationRequestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAcceptAuthorizationRequestRequest>, I>>(
    object: I,
  ): CDeviceAuthAcceptAuthorizationRequestRequest {
    const message = createBaseCDeviceAuthAcceptAuthorizationRequestRequest();
    message.steamid = object.steamid ?? "0";
    message.authDeviceToken = object.authDeviceToken ?? "0";
    message.authCode = object.authCode ?? "0";
    message.fromSteamid = object.fromSteamid ?? "0";
    return message;
  },
};

function createBaseCDeviceAuthAcceptAuthorizationRequestResponse(): CDeviceAuthAcceptAuthorizationRequestResponse {
  return {};
}

export const CDeviceAuthAcceptAuthorizationRequestResponse = {
  encode(_: CDeviceAuthAcceptAuthorizationRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAcceptAuthorizationRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAcceptAuthorizationRequestResponse();
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

  fromJSON(_: any): CDeviceAuthAcceptAuthorizationRequestResponse {
    return {};
  },

  toJSON(_: CDeviceAuthAcceptAuthorizationRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAcceptAuthorizationRequestResponse>, I>>(
    base?: I,
  ): CDeviceAuthAcceptAuthorizationRequestResponse {
    return CDeviceAuthAcceptAuthorizationRequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAcceptAuthorizationRequestResponse>, I>>(
    _: I,
  ): CDeviceAuthAcceptAuthorizationRequestResponse {
    const message = createBaseCDeviceAuthAcceptAuthorizationRequestResponse();
    return message;
  },
};

function createBaseCDeviceAuthAuthorizeRemoteDeviceRequest(): CDeviceAuthAuthorizeRemoteDeviceRequest {
  return { steamid: "0", authDeviceToken: "0" };
}

export const CDeviceAuthAuthorizeRemoteDeviceRequest = {
  encode(message: CDeviceAuthAuthorizeRemoteDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authDeviceToken !== "0") {
      writer.uint32(17).fixed64(message.authDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAuthorizeRemoteDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAuthorizeRemoteDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.authDeviceToken = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthAuthorizeRemoteDeviceRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      authDeviceToken: isSet(object.authDeviceToken) ? String(object.authDeviceToken) : "0",
    };
  },

  toJSON(message: CDeviceAuthAuthorizeRemoteDeviceRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.authDeviceToken !== undefined && (obj.authDeviceToken = message.authDeviceToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAuthorizeRemoteDeviceRequest>, I>>(
    base?: I,
  ): CDeviceAuthAuthorizeRemoteDeviceRequest {
    return CDeviceAuthAuthorizeRemoteDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAuthorizeRemoteDeviceRequest>, I>>(
    object: I,
  ): CDeviceAuthAuthorizeRemoteDeviceRequest {
    const message = createBaseCDeviceAuthAuthorizeRemoteDeviceRequest();
    message.steamid = object.steamid ?? "0";
    message.authDeviceToken = object.authDeviceToken ?? "0";
    return message;
  },
};

function createBaseCDeviceAuthAuthorizeRemoteDeviceResponse(): CDeviceAuthAuthorizeRemoteDeviceResponse {
  return {};
}

export const CDeviceAuthAuthorizeRemoteDeviceResponse = {
  encode(_: CDeviceAuthAuthorizeRemoteDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAuthorizeRemoteDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAuthorizeRemoteDeviceResponse();
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

  fromJSON(_: any): CDeviceAuthAuthorizeRemoteDeviceResponse {
    return {};
  },

  toJSON(_: CDeviceAuthAuthorizeRemoteDeviceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAuthorizeRemoteDeviceResponse>, I>>(
    base?: I,
  ): CDeviceAuthAuthorizeRemoteDeviceResponse {
    return CDeviceAuthAuthorizeRemoteDeviceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAuthorizeRemoteDeviceResponse>, I>>(
    _: I,
  ): CDeviceAuthAuthorizeRemoteDeviceResponse {
    const message = createBaseCDeviceAuthAuthorizeRemoteDeviceResponse();
    return message;
  },
};

function createBaseCDeviceAuthDeauthorizeRemoteDeviceRequest(): CDeviceAuthDeauthorizeRemoteDeviceRequest {
  return { steamid: "0", authDeviceToken: "0" };
}

export const CDeviceAuthDeauthorizeRemoteDeviceRequest = {
  encode(message: CDeviceAuthDeauthorizeRemoteDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authDeviceToken !== "0") {
      writer.uint32(17).fixed64(message.authDeviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthDeauthorizeRemoteDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthDeauthorizeRemoteDeviceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.authDeviceToken = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthDeauthorizeRemoteDeviceRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      authDeviceToken: isSet(object.authDeviceToken) ? String(object.authDeviceToken) : "0",
    };
  },

  toJSON(message: CDeviceAuthDeauthorizeRemoteDeviceRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.authDeviceToken !== undefined && (obj.authDeviceToken = message.authDeviceToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthDeauthorizeRemoteDeviceRequest>, I>>(
    base?: I,
  ): CDeviceAuthDeauthorizeRemoteDeviceRequest {
    return CDeviceAuthDeauthorizeRemoteDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthDeauthorizeRemoteDeviceRequest>, I>>(
    object: I,
  ): CDeviceAuthDeauthorizeRemoteDeviceRequest {
    const message = createBaseCDeviceAuthDeauthorizeRemoteDeviceRequest();
    message.steamid = object.steamid ?? "0";
    message.authDeviceToken = object.authDeviceToken ?? "0";
    return message;
  },
};

function createBaseCDeviceAuthDeauthorizeRemoteDeviceResponse(): CDeviceAuthDeauthorizeRemoteDeviceResponse {
  return {};
}

export const CDeviceAuthDeauthorizeRemoteDeviceResponse = {
  encode(_: CDeviceAuthDeauthorizeRemoteDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthDeauthorizeRemoteDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthDeauthorizeRemoteDeviceResponse();
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

  fromJSON(_: any): CDeviceAuthDeauthorizeRemoteDeviceResponse {
    return {};
  },

  toJSON(_: CDeviceAuthDeauthorizeRemoteDeviceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthDeauthorizeRemoteDeviceResponse>, I>>(
    base?: I,
  ): CDeviceAuthDeauthorizeRemoteDeviceResponse {
    return CDeviceAuthDeauthorizeRemoteDeviceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthDeauthorizeRemoteDeviceResponse>, I>>(
    _: I,
  ): CDeviceAuthDeauthorizeRemoteDeviceResponse {
    const message = createBaseCDeviceAuthDeauthorizeRemoteDeviceResponse();
    return message;
  },
};

function createBaseCDeviceAuthGetUsedAuthorizedDevicesRequest(): CDeviceAuthGetUsedAuthorizedDevicesRequest {
  return { steamid: "0" };
}

export const CDeviceAuthGetUsedAuthorizedDevicesRequest = {
  encode(message: CDeviceAuthGetUsedAuthorizedDevicesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetUsedAuthorizedDevicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetUsedAuthorizedDevicesRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CDeviceAuthGetUsedAuthorizedDevicesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesRequest {
    return CDeviceAuthGetUsedAuthorizedDevicesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesRequest>, I>>(
    object: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesRequest {
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse(): CDeviceAuthGetUsedAuthorizedDevicesResponse {
  return { devices: [] };
}

export const CDeviceAuthGetUsedAuthorizedDevicesResponse = {
  encode(message: CDeviceAuthGetUsedAuthorizedDevicesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetUsedAuthorizedDevicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetUsedAuthorizedDevicesResponse {
    return {
      devices: Array.isArray(object?.devices)
        ? object.devices.map((e: any) => CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetUsedAuthorizedDevicesResponse): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) =>
        e ? CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.toJSON(e) : undefined
      );
    } else {
      obj.devices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesResponse {
    return CDeviceAuthGetUsedAuthorizedDevicesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesResponse>, I>>(
    object: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesResponse {
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse();
    message.devices = object.devices?.map((e) => CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse_Device(): CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
  return { authDeviceToken: "0", deviceName: "", ownerSteamid: "0", lastTimeUsed: 0, lastAppPlayed: 0 };
}

export const CDeviceAuthGetUsedAuthorizedDevicesResponse_Device = {
  encode(
    message: CDeviceAuthGetUsedAuthorizedDevicesResponse_Device,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authDeviceToken !== "0") {
      writer.uint32(9).fixed64(message.authDeviceToken);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.ownerSteamid !== "0") {
      writer.uint32(25).fixed64(message.ownerSteamid);
    }
    if (message.lastTimeUsed !== 0) {
      writer.uint32(32).uint32(message.lastTimeUsed);
    }
    if (message.lastAppPlayed !== 0) {
      writer.uint32(40).uint32(message.lastAppPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authDeviceToken = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.ownerSteamid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.lastTimeUsed = reader.uint32();
          break;
        case 5:
          message.lastAppPlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
    return {
      authDeviceToken: isSet(object.authDeviceToken) ? String(object.authDeviceToken) : "0",
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      ownerSteamid: isSet(object.ownerSteamid) ? String(object.ownerSteamid) : "0",
      lastTimeUsed: isSet(object.lastTimeUsed) ? Number(object.lastTimeUsed) : 0,
      lastAppPlayed: isSet(object.lastAppPlayed) ? Number(object.lastAppPlayed) : 0,
    };
  },

  toJSON(message: CDeviceAuthGetUsedAuthorizedDevicesResponse_Device): unknown {
    const obj: any = {};
    message.authDeviceToken !== undefined && (obj.authDeviceToken = message.authDeviceToken);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.ownerSteamid !== undefined && (obj.ownerSteamid = message.ownerSteamid);
    message.lastTimeUsed !== undefined && (obj.lastTimeUsed = Math.round(message.lastTimeUsed));
    message.lastAppPlayed !== undefined && (obj.lastAppPlayed = Math.round(message.lastAppPlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesResponse_Device>, I>>(
    base?: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
    return CDeviceAuthGetUsedAuthorizedDevicesResponse_Device.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetUsedAuthorizedDevicesResponse_Device>, I>>(
    object: I,
  ): CDeviceAuthGetUsedAuthorizedDevicesResponse_Device {
    const message = createBaseCDeviceAuthGetUsedAuthorizedDevicesResponse_Device();
    message.authDeviceToken = object.authDeviceToken ?? "0";
    message.deviceName = object.deviceName ?? "";
    message.ownerSteamid = object.ownerSteamid ?? "0";
    message.lastTimeUsed = object.lastTimeUsed ?? 0;
    message.lastAppPlayed = object.lastAppPlayed ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedBorrowersRequest(): CDeviceAuthGetAuthorizedBorrowersRequest {
  return { steamid: "0", includeCanceled: false, includePending: false };
}

export const CDeviceAuthGetAuthorizedBorrowersRequest = {
  encode(message: CDeviceAuthGetAuthorizedBorrowersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeCanceled === true) {
      writer.uint32(16).bool(message.includeCanceled);
    }
    if (message.includePending === true) {
      writer.uint32(24).bool(message.includePending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedBorrowersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.includeCanceled = reader.bool();
          break;
        case 3:
          message.includePending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedBorrowersRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      includeCanceled: isSet(object.includeCanceled) ? Boolean(object.includeCanceled) : false,
      includePending: isSet(object.includePending) ? Boolean(object.includePending) : false,
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedBorrowersRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.includeCanceled !== undefined && (obj.includeCanceled = message.includeCanceled);
    message.includePending !== undefined && (obj.includePending = message.includePending);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedBorrowersRequest {
    return CDeviceAuthGetAuthorizedBorrowersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersRequest>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedBorrowersRequest {
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersRequest();
    message.steamid = object.steamid ?? "0";
    message.includeCanceled = object.includeCanceled ?? false;
    message.includePending = object.includePending ?? false;
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedBorrowersResponse(): CDeviceAuthGetAuthorizedBorrowersResponse {
  return { borrowers: [] };
}

export const CDeviceAuthGetAuthorizedBorrowersResponse = {
  encode(message: CDeviceAuthGetAuthorizedBorrowersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.borrowers) {
      CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedBorrowersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrowers.push(CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedBorrowersResponse {
    return {
      borrowers: Array.isArray(object?.borrowers)
        ? object.borrowers.map((e: any) => CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedBorrowersResponse): unknown {
    const obj: any = {};
    if (message.borrowers) {
      obj.borrowers = message.borrowers.map((e) =>
        e ? CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.toJSON(e) : undefined
      );
    } else {
      obj.borrowers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedBorrowersResponse {
    return CDeviceAuthGetAuthorizedBorrowersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersResponse>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedBorrowersResponse {
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersResponse();
    message.borrowers =
      object.borrowers?.map((e) => CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedBorrowersResponse_Borrower(): CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
  return { steamid: "0", isPending: false, isCanceled: false, timeCreated: 0 };
}

export const CDeviceAuthGetAuthorizedBorrowersResponse_Borrower = {
  encode(
    message: CDeviceAuthGetAuthorizedBorrowersResponse_Borrower,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.isPending === true) {
      writer.uint32(16).bool(message.isPending);
    }
    if (message.isCanceled === true) {
      writer.uint32(24).bool(message.isCanceled);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(32).uint32(message.timeCreated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersResponse_Borrower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.isPending = reader.bool();
          break;
        case 3:
          message.isCanceled = reader.bool();
          break;
        case 4:
          message.timeCreated = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      isPending: isSet(object.isPending) ? Boolean(object.isPending) : false,
      isCanceled: isSet(object.isCanceled) ? Boolean(object.isCanceled) : false,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedBorrowersResponse_Borrower): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.isPending !== undefined && (obj.isPending = message.isPending);
    message.isCanceled !== undefined && (obj.isCanceled = message.isCanceled);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersResponse_Borrower>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
    return CDeviceAuthGetAuthorizedBorrowersResponse_Borrower.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedBorrowersResponse_Borrower>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedBorrowersResponse_Borrower {
    const message = createBaseCDeviceAuthGetAuthorizedBorrowersResponse_Borrower();
    message.steamid = object.steamid ?? "0";
    message.isPending = object.isPending ?? false;
    message.isCanceled = object.isCanceled ?? false;
    message.timeCreated = object.timeCreated ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthAddAuthorizedBorrowersRequest(): CDeviceAuthAddAuthorizedBorrowersRequest {
  return { steamid: "0", steamidBorrower: [] };
}

export const CDeviceAuthAddAuthorizedBorrowersRequest = {
  encode(message: CDeviceAuthAddAuthorizedBorrowersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    writer.uint32(18).fork();
    for (const v of message.steamidBorrower) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAddAuthorizedBorrowersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAddAuthorizedBorrowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidBorrower.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.steamidBorrower.push(longToString(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthAddAuthorizedBorrowersRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      steamidBorrower: Array.isArray(object?.steamidBorrower) ? object.steamidBorrower.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CDeviceAuthAddAuthorizedBorrowersRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    if (message.steamidBorrower) {
      obj.steamidBorrower = message.steamidBorrower.map((e) => e);
    } else {
      obj.steamidBorrower = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAddAuthorizedBorrowersRequest>, I>>(
    base?: I,
  ): CDeviceAuthAddAuthorizedBorrowersRequest {
    return CDeviceAuthAddAuthorizedBorrowersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAddAuthorizedBorrowersRequest>, I>>(
    object: I,
  ): CDeviceAuthAddAuthorizedBorrowersRequest {
    const message = createBaseCDeviceAuthAddAuthorizedBorrowersRequest();
    message.steamid = object.steamid ?? "0";
    message.steamidBorrower = object.steamidBorrower?.map((e) => e) || [];
    return message;
  },
};

function createBaseCDeviceAuthAddAuthorizedBorrowersResponse(): CDeviceAuthAddAuthorizedBorrowersResponse {
  return { secondsToWait: 0 };
}

export const CDeviceAuthAddAuthorizedBorrowersResponse = {
  encode(message: CDeviceAuthAddAuthorizedBorrowersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondsToWait !== 0) {
      writer.uint32(8).int32(message.secondsToWait);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthAddAuthorizedBorrowersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthAddAuthorizedBorrowersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsToWait = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthAddAuthorizedBorrowersResponse {
    return { secondsToWait: isSet(object.secondsToWait) ? Number(object.secondsToWait) : 0 };
  },

  toJSON(message: CDeviceAuthAddAuthorizedBorrowersResponse): unknown {
    const obj: any = {};
    message.secondsToWait !== undefined && (obj.secondsToWait = Math.round(message.secondsToWait));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthAddAuthorizedBorrowersResponse>, I>>(
    base?: I,
  ): CDeviceAuthAddAuthorizedBorrowersResponse {
    return CDeviceAuthAddAuthorizedBorrowersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthAddAuthorizedBorrowersResponse>, I>>(
    object: I,
  ): CDeviceAuthAddAuthorizedBorrowersResponse {
    const message = createBaseCDeviceAuthAddAuthorizedBorrowersResponse();
    message.secondsToWait = object.secondsToWait ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthRemoveAuthorizedBorrowersRequest(): CDeviceAuthRemoveAuthorizedBorrowersRequest {
  return { steamid: "0", steamidBorrower: [] };
}

export const CDeviceAuthRemoveAuthorizedBorrowersRequest = {
  encode(message: CDeviceAuthRemoveAuthorizedBorrowersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    writer.uint32(18).fork();
    for (const v of message.steamidBorrower) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthRemoveAuthorizedBorrowersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthRemoveAuthorizedBorrowersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidBorrower.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.steamidBorrower.push(longToString(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthRemoveAuthorizedBorrowersRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      steamidBorrower: Array.isArray(object?.steamidBorrower) ? object.steamidBorrower.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CDeviceAuthRemoveAuthorizedBorrowersRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    if (message.steamidBorrower) {
      obj.steamidBorrower = message.steamidBorrower.map((e) => e);
    } else {
      obj.steamidBorrower = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthRemoveAuthorizedBorrowersRequest>, I>>(
    base?: I,
  ): CDeviceAuthRemoveAuthorizedBorrowersRequest {
    return CDeviceAuthRemoveAuthorizedBorrowersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthRemoveAuthorizedBorrowersRequest>, I>>(
    object: I,
  ): CDeviceAuthRemoveAuthorizedBorrowersRequest {
    const message = createBaseCDeviceAuthRemoveAuthorizedBorrowersRequest();
    message.steamid = object.steamid ?? "0";
    message.steamidBorrower = object.steamidBorrower?.map((e) => e) || [];
    return message;
  },
};

function createBaseCDeviceAuthRemoveAuthorizedBorrowersResponse(): CDeviceAuthRemoveAuthorizedBorrowersResponse {
  return {};
}

export const CDeviceAuthRemoveAuthorizedBorrowersResponse = {
  encode(_: CDeviceAuthRemoveAuthorizedBorrowersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthRemoveAuthorizedBorrowersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthRemoveAuthorizedBorrowersResponse();
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

  fromJSON(_: any): CDeviceAuthRemoveAuthorizedBorrowersResponse {
    return {};
  },

  toJSON(_: CDeviceAuthRemoveAuthorizedBorrowersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthRemoveAuthorizedBorrowersResponse>, I>>(
    base?: I,
  ): CDeviceAuthRemoveAuthorizedBorrowersResponse {
    return CDeviceAuthRemoveAuthorizedBorrowersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthRemoveAuthorizedBorrowersResponse>, I>>(
    _: I,
  ): CDeviceAuthRemoveAuthorizedBorrowersResponse {
    const message = createBaseCDeviceAuthRemoveAuthorizedBorrowersResponse();
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedAsBorrowerRequest(): CDeviceAuthGetAuthorizedAsBorrowerRequest {
  return { steamid: "0", includeCanceled: false, includePending: false };
}

export const CDeviceAuthGetAuthorizedAsBorrowerRequest = {
  encode(message: CDeviceAuthGetAuthorizedAsBorrowerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeCanceled === true) {
      writer.uint32(16).bool(message.includeCanceled);
    }
    if (message.includePending === true) {
      writer.uint32(24).bool(message.includePending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedAsBorrowerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.includeCanceled = reader.bool();
          break;
        case 3:
          message.includePending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedAsBorrowerRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      includeCanceled: isSet(object.includeCanceled) ? Boolean(object.includeCanceled) : false,
      includePending: isSet(object.includePending) ? Boolean(object.includePending) : false,
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedAsBorrowerRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.includeCanceled !== undefined && (obj.includeCanceled = message.includeCanceled);
    message.includePending !== undefined && (obj.includePending = message.includePending);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerRequest {
    return CDeviceAuthGetAuthorizedAsBorrowerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerRequest>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerRequest {
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerRequest();
    message.steamid = object.steamid ?? "0";
    message.includeCanceled = object.includeCanceled ?? false;
    message.includePending = object.includePending ?? false;
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse(): CDeviceAuthGetAuthorizedAsBorrowerResponse {
  return { lenders: [] };
}

export const CDeviceAuthGetAuthorizedAsBorrowerResponse = {
  encode(message: CDeviceAuthGetAuthorizedAsBorrowerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lenders) {
      CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedAsBorrowerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lenders.push(CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedAsBorrowerResponse {
    return {
      lenders: Array.isArray(object?.lenders)
        ? object.lenders.map((e: any) => CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedAsBorrowerResponse): unknown {
    const obj: any = {};
    if (message.lenders) {
      obj.lenders = message.lenders.map((e) =>
        e ? CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.toJSON(e) : undefined
      );
    } else {
      obj.lenders = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerResponse {
    return CDeviceAuthGetAuthorizedAsBorrowerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerResponse>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerResponse {
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse();
    message.lenders = object.lenders?.map((e) => CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse_Lender(): CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
  return {
    steamid: "0",
    timeCreated: 0,
    isPending: false,
    isCanceled: false,
    isUsed: false,
    timeRemoved: 0,
    timeFirst: 0,
  };
}

export const CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender = {
  encode(
    message: CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(16).uint32(message.timeCreated);
    }
    if (message.isPending === true) {
      writer.uint32(24).bool(message.isPending);
    }
    if (message.isCanceled === true) {
      writer.uint32(32).bool(message.isCanceled);
    }
    if (message.isUsed === true) {
      writer.uint32(40).bool(message.isUsed);
    }
    if (message.timeRemoved !== 0) {
      writer.uint32(48).uint32(message.timeRemoved);
    }
    if (message.timeFirst !== 0) {
      writer.uint32(56).uint32(message.timeFirst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse_Lender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.timeCreated = reader.uint32();
          break;
        case 3:
          message.isPending = reader.bool();
          break;
        case 4:
          message.isCanceled = reader.bool();
          break;
        case 5:
          message.isUsed = reader.bool();
          break;
        case 6:
          message.timeRemoved = reader.uint32();
          break;
        case 7:
          message.timeFirst = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      isPending: isSet(object.isPending) ? Boolean(object.isPending) : false,
      isCanceled: isSet(object.isCanceled) ? Boolean(object.isCanceled) : false,
      isUsed: isSet(object.isUsed) ? Boolean(object.isUsed) : false,
      timeRemoved: isSet(object.timeRemoved) ? Number(object.timeRemoved) : 0,
      timeFirst: isSet(object.timeFirst) ? Number(object.timeFirst) : 0,
    };
  },

  toJSON(message: CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.isPending !== undefined && (obj.isPending = message.isPending);
    message.isCanceled !== undefined && (obj.isCanceled = message.isCanceled);
    message.isUsed !== undefined && (obj.isUsed = message.isUsed);
    message.timeRemoved !== undefined && (obj.timeRemoved = Math.round(message.timeRemoved));
    message.timeFirst !== undefined && (obj.timeFirst = Math.round(message.timeFirst));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender>, I>>(
    base?: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
    return CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender>, I>>(
    object: I,
  ): CDeviceAuthGetAuthorizedAsBorrowerResponse_Lender {
    const message = createBaseCDeviceAuthGetAuthorizedAsBorrowerResponse_Lender();
    message.steamid = object.steamid ?? "0";
    message.timeCreated = object.timeCreated ?? 0;
    message.isPending = object.isPending ?? false;
    message.isCanceled = object.isCanceled ?? false;
    message.isUsed = object.isUsed ?? false;
    message.timeRemoved = object.timeRemoved ?? 0;
    message.timeFirst = object.timeFirst ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthGetExcludedGamesInLibraryRequest(): CDeviceAuthGetExcludedGamesInLibraryRequest {
  return { steamid: "0" };
}

export const CDeviceAuthGetExcludedGamesInLibraryRequest = {
  encode(message: CDeviceAuthGetExcludedGamesInLibraryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetExcludedGamesInLibraryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetExcludedGamesInLibraryRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CDeviceAuthGetExcludedGamesInLibraryRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetExcludedGamesInLibraryRequest {
    return CDeviceAuthGetExcludedGamesInLibraryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryRequest>, I>>(
    object: I,
  ): CDeviceAuthGetExcludedGamesInLibraryRequest {
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCDeviceAuthGetExcludedGamesInLibraryResponse(): CDeviceAuthGetExcludedGamesInLibraryResponse {
  return { excludedGames: [] };
}

export const CDeviceAuthGetExcludedGamesInLibraryResponse = {
  encode(message: CDeviceAuthGetExcludedGamesInLibraryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.excludedGames) {
      CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetExcludedGamesInLibraryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.excludedGames.push(
            CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetExcludedGamesInLibraryResponse {
    return {
      excludedGames: Array.isArray(object?.excludedGames)
        ? object.excludedGames.map((e: any) => CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetExcludedGamesInLibraryResponse): unknown {
    const obj: any = {};
    if (message.excludedGames) {
      obj.excludedGames = message.excludedGames.map((e) =>
        e ? CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.toJSON(e) : undefined
      );
    } else {
      obj.excludedGames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetExcludedGamesInLibraryResponse {
    return CDeviceAuthGetExcludedGamesInLibraryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryResponse>, I>>(
    object: I,
  ): CDeviceAuthGetExcludedGamesInLibraryResponse {
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryResponse();
    message.excludedGames =
      object.excludedGames?.map((e) => CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame(): CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
  return { appid: 0, gameName: "", vacBanned: false, packageExcluded: false };
}

export const CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame = {
  encode(
    message: CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.vacBanned === true) {
      writer.uint32(24).bool(message.vacBanned);
    }
    if (message.packageExcluded === true) {
      writer.uint32(32).bool(message.packageExcluded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.gameName = reader.string();
          break;
        case 3:
          message.vacBanned = reader.bool();
          break;
        case 4:
          message.packageExcluded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      vacBanned: isSet(object.vacBanned) ? Boolean(object.vacBanned) : false,
      packageExcluded: isSet(object.packageExcluded) ? Boolean(object.packageExcluded) : false,
    };
  },

  toJSON(message: CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.vacBanned !== undefined && (obj.vacBanned = message.vacBanned);
    message.packageExcluded !== undefined && (obj.packageExcluded = message.packageExcluded);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame>, I>>(
    base?: I,
  ): CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
    return CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame>, I>>(
    object: I,
  ): CDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame {
    const message = createBaseCDeviceAuthGetExcludedGamesInLibraryResponse_ExcludedGame();
    message.appid = object.appid ?? 0;
    message.gameName = object.gameName ?? "";
    message.vacBanned = object.vacBanned ?? false;
    message.packageExcluded = object.packageExcluded ?? false;
    return message;
  },
};

function createBaseCDeviceAuthGetBorrowerPlayHistoryRequest(): CDeviceAuthGetBorrowerPlayHistoryRequest {
  return { steamid: "0", appid: 0 };
}

export const CDeviceAuthGetBorrowerPlayHistoryRequest = {
  encode(message: CDeviceAuthGetBorrowerPlayHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetBorrowerPlayHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryRequest();
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

  fromJSON(object: any): CDeviceAuthGetBorrowerPlayHistoryRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CDeviceAuthGetBorrowerPlayHistoryRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryRequest>, I>>(
    base?: I,
  ): CDeviceAuthGetBorrowerPlayHistoryRequest {
    return CDeviceAuthGetBorrowerPlayHistoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryRequest>, I>>(
    object: I,
  ): CDeviceAuthGetBorrowerPlayHistoryRequest {
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryRequest();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthGetBorrowerPlayHistoryResponse(): CDeviceAuthGetBorrowerPlayHistoryResponse {
  return { lenderHistory: [] };
}

export const CDeviceAuthGetBorrowerPlayHistoryResponse = {
  encode(message: CDeviceAuthGetBorrowerPlayHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lenderHistory) {
      CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetBorrowerPlayHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lenderHistory.push(
            CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetBorrowerPlayHistoryResponse {
    return {
      lenderHistory: Array.isArray(object?.lenderHistory)
        ? object.lenderHistory.map((e: any) => CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetBorrowerPlayHistoryResponse): unknown {
    const obj: any = {};
    if (message.lenderHistory) {
      obj.lenderHistory = message.lenderHistory.map((e) =>
        e ? CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.toJSON(e) : undefined
      );
    } else {
      obj.lenderHistory = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse>, I>>(
    base?: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse {
    return CDeviceAuthGetBorrowerPlayHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse>, I>>(
    object: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse {
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse();
    message.lenderHistory =
      object.lenderHistory?.map((e) => CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory(): CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
  return { appid: 0, timeLast: 0, timeTotal: 0 };
}

export const CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory = {
  encode(
    message: CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.timeLast !== 0) {
      writer.uint32(16).uint32(message.timeLast);
    }
    if (message.timeTotal !== 0) {
      writer.uint32(24).uint32(message.timeTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.timeLast = reader.uint32();
          break;
        case 3:
          message.timeTotal = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      timeLast: isSet(object.timeLast) ? Number(object.timeLast) : 0,
      timeTotal: isSet(object.timeTotal) ? Number(object.timeTotal) : 0,
    };
  },

  toJSON(message: CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.timeLast !== undefined && (obj.timeLast = Math.round(message.timeLast));
    message.timeTotal !== undefined && (obj.timeTotal = Math.round(message.timeTotal));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory>, I>>(
    base?: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
    return CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory>, I>>(
    object: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory {
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory();
    message.appid = object.appid ?? 0;
    message.timeLast = object.timeLast ?? 0;
    message.timeTotal = object.timeTotal ?? 0;
    return message;
  },
};

function createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory(): CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
  return { steamid: "0", gameHistory: [] };
}

export const CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory = {
  encode(
    message: CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    for (const v of message.gameHistory) {
      CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.gameHistory.push(
            CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      gameHistory: Array.isArray(object?.gameHistory)
        ? object.gameHistory.map((e: any) => CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    if (message.gameHistory) {
      obj.gameHistory = message.gameHistory.map((e) =>
        e ? CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.toJSON(e) : undefined
      );
    } else {
      obj.gameHistory = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory>, I>>(
    base?: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
    return CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory>, I>>(
    object: I,
  ): CDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory {
    const message = createBaseCDeviceAuthGetBorrowerPlayHistoryResponse_LenderHistory();
    message.steamid = object.steamid ?? "0";
    message.gameHistory =
      object.gameHistory?.map((e) => CDeviceAuthGetBorrowerPlayHistoryResponse_GameHistory.fromPartial(e)) || [];
    return message;
  },
};

export interface DeviceAuth {
  GetOwnAuthorizedDevices(
    request: CDeviceAuthGetOwnAuthorizedDevicesRequest,
  ): Promise<CDeviceAuthGetOwnAuthorizedDevicesResponse>;
  AcceptAuthorizationRequest(
    request: CDeviceAuthAcceptAuthorizationRequestRequest,
  ): Promise<CDeviceAuthAcceptAuthorizationRequestResponse>;
  AuthorizeRemoteDevice(
    request: CDeviceAuthAuthorizeRemoteDeviceRequest,
  ): Promise<CDeviceAuthAuthorizeRemoteDeviceResponse>;
  DeauthorizeRemoteDevice(
    request: CDeviceAuthDeauthorizeRemoteDeviceRequest,
  ): Promise<CDeviceAuthDeauthorizeRemoteDeviceResponse>;
  GetUsedAuthorizedDevices(
    request: CDeviceAuthGetUsedAuthorizedDevicesRequest,
  ): Promise<CDeviceAuthGetUsedAuthorizedDevicesResponse>;
  GetAuthorizedBorrowers(
    request: CDeviceAuthGetAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthGetAuthorizedBorrowersResponse>;
  AddAuthorizedBorrowers(
    request: CDeviceAuthAddAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthAddAuthorizedBorrowersResponse>;
  RemoveAuthorizedBorrowers(
    request: CDeviceAuthRemoveAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthRemoveAuthorizedBorrowersResponse>;
  GetAuthorizedAsBorrower(
    request: CDeviceAuthGetAuthorizedAsBorrowerRequest,
  ): Promise<CDeviceAuthGetAuthorizedAsBorrowerResponse>;
  GetExcludedGamesInLibrary(
    request: CDeviceAuthGetExcludedGamesInLibraryRequest,
  ): Promise<CDeviceAuthGetExcludedGamesInLibraryResponse>;
  GetBorrowerPlayHistory(
    request: CDeviceAuthGetBorrowerPlayHistoryRequest,
  ): Promise<CDeviceAuthGetBorrowerPlayHistoryResponse>;
}

export class DeviceAuthClientImpl implements DeviceAuth {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DeviceAuth";
    this.rpc = rpc;
    this.GetOwnAuthorizedDevices = this.GetOwnAuthorizedDevices.bind(this);
    this.AcceptAuthorizationRequest = this.AcceptAuthorizationRequest.bind(this);
    this.AuthorizeRemoteDevice = this.AuthorizeRemoteDevice.bind(this);
    this.DeauthorizeRemoteDevice = this.DeauthorizeRemoteDevice.bind(this);
    this.GetUsedAuthorizedDevices = this.GetUsedAuthorizedDevices.bind(this);
    this.GetAuthorizedBorrowers = this.GetAuthorizedBorrowers.bind(this);
    this.AddAuthorizedBorrowers = this.AddAuthorizedBorrowers.bind(this);
    this.RemoveAuthorizedBorrowers = this.RemoveAuthorizedBorrowers.bind(this);
    this.GetAuthorizedAsBorrower = this.GetAuthorizedAsBorrower.bind(this);
    this.GetExcludedGamesInLibrary = this.GetExcludedGamesInLibrary.bind(this);
    this.GetBorrowerPlayHistory = this.GetBorrowerPlayHistory.bind(this);
  }
  GetOwnAuthorizedDevices(
    request: CDeviceAuthGetOwnAuthorizedDevicesRequest,
  ): Promise<CDeviceAuthGetOwnAuthorizedDevicesResponse> {
    const data = CDeviceAuthGetOwnAuthorizedDevicesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOwnAuthorizedDevices", data);
    return promise.then((data) => CDeviceAuthGetOwnAuthorizedDevicesResponse.decode(new _m0.Reader(data)));
  }

  AcceptAuthorizationRequest(
    request: CDeviceAuthAcceptAuthorizationRequestRequest,
  ): Promise<CDeviceAuthAcceptAuthorizationRequestResponse> {
    const data = CDeviceAuthAcceptAuthorizationRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptAuthorizationRequest", data);
    return promise.then((data) => CDeviceAuthAcceptAuthorizationRequestResponse.decode(new _m0.Reader(data)));
  }

  AuthorizeRemoteDevice(
    request: CDeviceAuthAuthorizeRemoteDeviceRequest,
  ): Promise<CDeviceAuthAuthorizeRemoteDeviceResponse> {
    const data = CDeviceAuthAuthorizeRemoteDeviceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuthorizeRemoteDevice", data);
    return promise.then((data) => CDeviceAuthAuthorizeRemoteDeviceResponse.decode(new _m0.Reader(data)));
  }

  DeauthorizeRemoteDevice(
    request: CDeviceAuthDeauthorizeRemoteDeviceRequest,
  ): Promise<CDeviceAuthDeauthorizeRemoteDeviceResponse> {
    const data = CDeviceAuthDeauthorizeRemoteDeviceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeauthorizeRemoteDevice", data);
    return promise.then((data) => CDeviceAuthDeauthorizeRemoteDeviceResponse.decode(new _m0.Reader(data)));
  }

  GetUsedAuthorizedDevices(
    request: CDeviceAuthGetUsedAuthorizedDevicesRequest,
  ): Promise<CDeviceAuthGetUsedAuthorizedDevicesResponse> {
    const data = CDeviceAuthGetUsedAuthorizedDevicesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUsedAuthorizedDevices", data);
    return promise.then((data) => CDeviceAuthGetUsedAuthorizedDevicesResponse.decode(new _m0.Reader(data)));
  }

  GetAuthorizedBorrowers(
    request: CDeviceAuthGetAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthGetAuthorizedBorrowersResponse> {
    const data = CDeviceAuthGetAuthorizedBorrowersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAuthorizedBorrowers", data);
    return promise.then((data) => CDeviceAuthGetAuthorizedBorrowersResponse.decode(new _m0.Reader(data)));
  }

  AddAuthorizedBorrowers(
    request: CDeviceAuthAddAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthAddAuthorizedBorrowersResponse> {
    const data = CDeviceAuthAddAuthorizedBorrowersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddAuthorizedBorrowers", data);
    return promise.then((data) => CDeviceAuthAddAuthorizedBorrowersResponse.decode(new _m0.Reader(data)));
  }

  RemoveAuthorizedBorrowers(
    request: CDeviceAuthRemoveAuthorizedBorrowersRequest,
  ): Promise<CDeviceAuthRemoveAuthorizedBorrowersResponse> {
    const data = CDeviceAuthRemoveAuthorizedBorrowersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAuthorizedBorrowers", data);
    return promise.then((data) => CDeviceAuthRemoveAuthorizedBorrowersResponse.decode(new _m0.Reader(data)));
  }

  GetAuthorizedAsBorrower(
    request: CDeviceAuthGetAuthorizedAsBorrowerRequest,
  ): Promise<CDeviceAuthGetAuthorizedAsBorrowerResponse> {
    const data = CDeviceAuthGetAuthorizedAsBorrowerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAuthorizedAsBorrower", data);
    return promise.then((data) => CDeviceAuthGetAuthorizedAsBorrowerResponse.decode(new _m0.Reader(data)));
  }

  GetExcludedGamesInLibrary(
    request: CDeviceAuthGetExcludedGamesInLibraryRequest,
  ): Promise<CDeviceAuthGetExcludedGamesInLibraryResponse> {
    const data = CDeviceAuthGetExcludedGamesInLibraryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetExcludedGamesInLibrary", data);
    return promise.then((data) => CDeviceAuthGetExcludedGamesInLibraryResponse.decode(new _m0.Reader(data)));
  }

  GetBorrowerPlayHistory(
    request: CDeviceAuthGetBorrowerPlayHistoryRequest,
  ): Promise<CDeviceAuthGetBorrowerPlayHistoryResponse> {
    const data = CDeviceAuthGetBorrowerPlayHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBorrowerPlayHistory", data);
    return promise.then((data) => CDeviceAuthGetBorrowerPlayHistoryResponse.decode(new _m0.Reader(data)));
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
