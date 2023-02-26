/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientSiteInfo {
  siteId: string;
  siteName: string;
  allowCachedCredentials: boolean;
}

export interface CMsgClientSiteLicenseCheckout {
  appid: number;
}

export interface CMsgClientSiteLicenseCheckoutResponse {
  eresult: number;
}

export interface CMsgClientSiteLicenseGetAvailableSeats {
  appid: number;
}

export interface CMsgClientSiteLicenseGetAvailableSeatsResponse {
  eresult: number;
  seats: number;
}

export interface CMsgClientSiteLicenseGetContentCacheInfo {
}

export interface CMsgClientSiteLicenseGetContentCacheInfoResponse {
  useCache: boolean;
  ipv4Address: number;
  portNumber: number;
  p2pGroup: number;
  ipAddress: string;
}

function createBaseCMsgClientSiteInfo(): CMsgClientSiteInfo {
  return { siteId: "0", siteName: "", allowCachedCredentials: false };
}

export const CMsgClientSiteInfo = {
  encode(message: CMsgClientSiteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siteId !== "0") {
      writer.uint32(8).uint64(message.siteId);
    }
    if (message.siteName !== "") {
      writer.uint32(18).string(message.siteName);
    }
    if (message.allowCachedCredentials === true) {
      writer.uint32(24).bool(message.allowCachedCredentials);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siteId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.siteName = reader.string();
          break;
        case 3:
          message.allowCachedCredentials = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSiteInfo {
    return {
      siteId: isSet(object.siteId) ? String(object.siteId) : "0",
      siteName: isSet(object.siteName) ? String(object.siteName) : "",
      allowCachedCredentials: isSet(object.allowCachedCredentials) ? Boolean(object.allowCachedCredentials) : false,
    };
  },

  toJSON(message: CMsgClientSiteInfo): unknown {
    const obj: any = {};
    message.siteId !== undefined && (obj.siteId = message.siteId);
    message.siteName !== undefined && (obj.siteName = message.siteName);
    message.allowCachedCredentials !== undefined && (obj.allowCachedCredentials = message.allowCachedCredentials);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteInfo>, I>>(base?: I): CMsgClientSiteInfo {
    return CMsgClientSiteInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteInfo>, I>>(object: I): CMsgClientSiteInfo {
    const message = createBaseCMsgClientSiteInfo();
    message.siteId = object.siteId ?? "0";
    message.siteName = object.siteName ?? "";
    message.allowCachedCredentials = object.allowCachedCredentials ?? false;
    return message;
  },
};

function createBaseCMsgClientSiteLicenseCheckout(): CMsgClientSiteLicenseCheckout {
  return { appid: 0 };
}

export const CMsgClientSiteLicenseCheckout = {
  encode(message: CMsgClientSiteLicenseCheckout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseCheckout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseCheckout();
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

  fromJSON(object: any): CMsgClientSiteLicenseCheckout {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgClientSiteLicenseCheckout): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseCheckout>, I>>(base?: I): CMsgClientSiteLicenseCheckout {
    return CMsgClientSiteLicenseCheckout.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseCheckout>, I>>(
    object: I,
  ): CMsgClientSiteLicenseCheckout {
    const message = createBaseCMsgClientSiteLicenseCheckout();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgClientSiteLicenseCheckoutResponse(): CMsgClientSiteLicenseCheckoutResponse {
  return { eresult: 0 };
}

export const CMsgClientSiteLicenseCheckoutResponse = {
  encode(message: CMsgClientSiteLicenseCheckoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseCheckoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseCheckoutResponse();
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

  fromJSON(object: any): CMsgClientSiteLicenseCheckoutResponse {
    return { eresult: isSet(object.eresult) ? Number(object.eresult) : 0 };
  },

  toJSON(message: CMsgClientSiteLicenseCheckoutResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseCheckoutResponse>, I>>(
    base?: I,
  ): CMsgClientSiteLicenseCheckoutResponse {
    return CMsgClientSiteLicenseCheckoutResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseCheckoutResponse>, I>>(
    object: I,
  ): CMsgClientSiteLicenseCheckoutResponse {
    const message = createBaseCMsgClientSiteLicenseCheckoutResponse();
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientSiteLicenseGetAvailableSeats(): CMsgClientSiteLicenseGetAvailableSeats {
  return { appid: 0 };
}

export const CMsgClientSiteLicenseGetAvailableSeats = {
  encode(message: CMsgClientSiteLicenseGetAvailableSeats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseGetAvailableSeats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseGetAvailableSeats();
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

  fromJSON(object: any): CMsgClientSiteLicenseGetAvailableSeats {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgClientSiteLicenseGetAvailableSeats): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetAvailableSeats>, I>>(
    base?: I,
  ): CMsgClientSiteLicenseGetAvailableSeats {
    return CMsgClientSiteLicenseGetAvailableSeats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetAvailableSeats>, I>>(
    object: I,
  ): CMsgClientSiteLicenseGetAvailableSeats {
    const message = createBaseCMsgClientSiteLicenseGetAvailableSeats();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgClientSiteLicenseGetAvailableSeatsResponse(): CMsgClientSiteLicenseGetAvailableSeatsResponse {
  return { eresult: 0, seats: 0 };
}

export const CMsgClientSiteLicenseGetAvailableSeatsResponse = {
  encode(
    message: CMsgClientSiteLicenseGetAvailableSeatsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.seats !== 0) {
      writer.uint32(16).uint32(message.seats);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseGetAvailableSeatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseGetAvailableSeatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.seats = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSiteLicenseGetAvailableSeatsResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      seats: isSet(object.seats) ? Number(object.seats) : 0,
    };
  },

  toJSON(message: CMsgClientSiteLicenseGetAvailableSeatsResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.seats !== undefined && (obj.seats = Math.round(message.seats));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetAvailableSeatsResponse>, I>>(
    base?: I,
  ): CMsgClientSiteLicenseGetAvailableSeatsResponse {
    return CMsgClientSiteLicenseGetAvailableSeatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetAvailableSeatsResponse>, I>>(
    object: I,
  ): CMsgClientSiteLicenseGetAvailableSeatsResponse {
    const message = createBaseCMsgClientSiteLicenseGetAvailableSeatsResponse();
    message.eresult = object.eresult ?? 0;
    message.seats = object.seats ?? 0;
    return message;
  },
};

function createBaseCMsgClientSiteLicenseGetContentCacheInfo(): CMsgClientSiteLicenseGetContentCacheInfo {
  return {};
}

export const CMsgClientSiteLicenseGetContentCacheInfo = {
  encode(_: CMsgClientSiteLicenseGetContentCacheInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseGetContentCacheInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseGetContentCacheInfo();
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

  fromJSON(_: any): CMsgClientSiteLicenseGetContentCacheInfo {
    return {};
  },

  toJSON(_: CMsgClientSiteLicenseGetContentCacheInfo): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetContentCacheInfo>, I>>(
    base?: I,
  ): CMsgClientSiteLicenseGetContentCacheInfo {
    return CMsgClientSiteLicenseGetContentCacheInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetContentCacheInfo>, I>>(
    _: I,
  ): CMsgClientSiteLicenseGetContentCacheInfo {
    const message = createBaseCMsgClientSiteLicenseGetContentCacheInfo();
    return message;
  },
};

function createBaseCMsgClientSiteLicenseGetContentCacheInfoResponse(): CMsgClientSiteLicenseGetContentCacheInfoResponse {
  return { useCache: false, ipv4Address: 0, portNumber: 0, p2pGroup: 0, ipAddress: "" };
}

export const CMsgClientSiteLicenseGetContentCacheInfoResponse = {
  encode(
    message: CMsgClientSiteLicenseGetContentCacheInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.useCache === true) {
      writer.uint32(8).bool(message.useCache);
    }
    if (message.ipv4Address !== 0) {
      writer.uint32(16).uint32(message.ipv4Address);
    }
    if (message.portNumber !== 0) {
      writer.uint32(24).uint32(message.portNumber);
    }
    if (message.p2pGroup !== 0) {
      writer.uint32(32).uint32(message.p2pGroup);
    }
    if (message.ipAddress !== "") {
      writer.uint32(42).string(message.ipAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSiteLicenseGetContentCacheInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSiteLicenseGetContentCacheInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useCache = reader.bool();
          break;
        case 2:
          message.ipv4Address = reader.uint32();
          break;
        case 3:
          message.portNumber = reader.uint32();
          break;
        case 4:
          message.p2pGroup = reader.uint32();
          break;
        case 5:
          message.ipAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSiteLicenseGetContentCacheInfoResponse {
    return {
      useCache: isSet(object.useCache) ? Boolean(object.useCache) : false,
      ipv4Address: isSet(object.ipv4Address) ? Number(object.ipv4Address) : 0,
      portNumber: isSet(object.portNumber) ? Number(object.portNumber) : 0,
      p2pGroup: isSet(object.p2pGroup) ? Number(object.p2pGroup) : 0,
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
    };
  },

  toJSON(message: CMsgClientSiteLicenseGetContentCacheInfoResponse): unknown {
    const obj: any = {};
    message.useCache !== undefined && (obj.useCache = message.useCache);
    message.ipv4Address !== undefined && (obj.ipv4Address = Math.round(message.ipv4Address));
    message.portNumber !== undefined && (obj.portNumber = Math.round(message.portNumber));
    message.p2pGroup !== undefined && (obj.p2pGroup = Math.round(message.p2pGroup));
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetContentCacheInfoResponse>, I>>(
    base?: I,
  ): CMsgClientSiteLicenseGetContentCacheInfoResponse {
    return CMsgClientSiteLicenseGetContentCacheInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSiteLicenseGetContentCacheInfoResponse>, I>>(
    object: I,
  ): CMsgClientSiteLicenseGetContentCacheInfoResponse {
    const message = createBaseCMsgClientSiteLicenseGetContentCacheInfoResponse();
    message.useCache = object.useCache ?? false;
    message.ipv4Address = object.ipv4Address ?? 0;
    message.portNumber = object.portNumber ?? 0;
    message.p2pGroup = object.p2pGroup ?? 0;
    message.ipAddress = object.ipAddress ?? "";
    return message;
  },
};

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
