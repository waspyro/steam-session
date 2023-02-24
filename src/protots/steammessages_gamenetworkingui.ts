/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgSteamDatagramP2PRoutingSummary } from "./steamdatagram_messages_sdr";
import { CMsgSteamDatagramConnectionQuality } from "./steamnetworkingsockets_messages";

export const protobufPackage = "";

export interface CGameNetworkingUIGlobalState {
}

export interface CGameNetworkingUIConnectionState {
  connectionKey: string;
  appid: number;
  connectionIdLocal: number;
  identityLocal: string;
  identityRemote: string;
  connectionState: number;
  startTime: number;
  closeTime: number;
  closeReason: number;
  closeMessage: string;
  statusLocToken: string;
  transportKind: number;
  sdrpopidLocal: string;
  sdrpopidRemote: string;
  addressRemote: string;
  p2pRouting: CMsgSteamDatagramP2PRoutingSummary | undefined;
  pingInterior: number;
  pingRemoteFront: number;
  pingDefaultInternetRoute: number;
  e2eQualityLocal: CMsgSteamDatagramConnectionQuality | undefined;
  e2eQualityRemote: CMsgSteamDatagramConnectionQuality | undefined;
  e2eQualityRemoteInstantaneousTime: number;
  e2eQualityRemoteLifetimeTime: number;
  frontQualityLocal: CMsgSteamDatagramConnectionQuality | undefined;
  frontQualityRemote: CMsgSteamDatagramConnectionQuality | undefined;
  frontQualityRemoteInstantaneousTime: number;
  frontQualityRemoteLifetimeTime: number;
}

export interface CGameNetworkingUIMessage {
  connectionState: CGameNetworkingUIConnectionState[];
}

function createBaseCGameNetworkingUIGlobalState(): CGameNetworkingUIGlobalState {
  return {};
}

export const CGameNetworkingUIGlobalState = {
  encode(_: CGameNetworkingUIGlobalState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIGlobalState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIGlobalState();
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

  fromJSON(_: any): CGameNetworkingUIGlobalState {
    return {};
  },

  toJSON(_: CGameNetworkingUIGlobalState): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingUIGlobalState>, I>>(base?: I): CGameNetworkingUIGlobalState {
    return CGameNetworkingUIGlobalState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingUIGlobalState>, I>>(_: I): CGameNetworkingUIGlobalState {
    const message = createBaseCGameNetworkingUIGlobalState();
    return message;
  },
};

function createBaseCGameNetworkingUIConnectionState(): CGameNetworkingUIConnectionState {
  return {
    connectionKey: "",
    appid: 0,
    connectionIdLocal: 0,
    identityLocal: "",
    identityRemote: "",
    connectionState: 0,
    startTime: 0,
    closeTime: 0,
    closeReason: 0,
    closeMessage: "",
    statusLocToken: "",
    transportKind: 0,
    sdrpopidLocal: "",
    sdrpopidRemote: "",
    addressRemote: "",
    p2pRouting: undefined,
    pingInterior: 0,
    pingRemoteFront: 0,
    pingDefaultInternetRoute: 0,
    e2eQualityLocal: undefined,
    e2eQualityRemote: undefined,
    e2eQualityRemoteInstantaneousTime: 0,
    e2eQualityRemoteLifetimeTime: 0,
    frontQualityLocal: undefined,
    frontQualityRemote: undefined,
    frontQualityRemoteInstantaneousTime: 0,
    frontQualityRemoteLifetimeTime: 0,
  };
}

export const CGameNetworkingUIConnectionState = {
  encode(message: CGameNetworkingUIConnectionState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionKey !== "") {
      writer.uint32(10).string(message.connectionKey);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.connectionIdLocal !== 0) {
      writer.uint32(29).fixed32(message.connectionIdLocal);
    }
    if (message.identityLocal !== "") {
      writer.uint32(34).string(message.identityLocal);
    }
    if (message.identityRemote !== "") {
      writer.uint32(42).string(message.identityRemote);
    }
    if (message.connectionState !== 0) {
      writer.uint32(80).uint32(message.connectionState);
    }
    if (message.startTime !== 0) {
      writer.uint32(96).uint32(message.startTime);
    }
    if (message.closeTime !== 0) {
      writer.uint32(104).uint32(message.closeTime);
    }
    if (message.closeReason !== 0) {
      writer.uint32(112).uint32(message.closeReason);
    }
    if (message.closeMessage !== "") {
      writer.uint32(122).string(message.closeMessage);
    }
    if (message.statusLocToken !== "") {
      writer.uint32(130).string(message.statusLocToken);
    }
    if (message.transportKind !== 0) {
      writer.uint32(160).uint32(message.transportKind);
    }
    if (message.sdrpopidLocal !== "") {
      writer.uint32(170).string(message.sdrpopidLocal);
    }
    if (message.sdrpopidRemote !== "") {
      writer.uint32(178).string(message.sdrpopidRemote);
    }
    if (message.addressRemote !== "") {
      writer.uint32(186).string(message.addressRemote);
    }
    if (message.p2pRouting !== undefined) {
      CMsgSteamDatagramP2PRoutingSummary.encode(message.p2pRouting, writer.uint32(194).fork()).ldelim();
    }
    if (message.pingInterior !== 0) {
      writer.uint32(200).uint32(message.pingInterior);
    }
    if (message.pingRemoteFront !== 0) {
      writer.uint32(208).uint32(message.pingRemoteFront);
    }
    if (message.pingDefaultInternetRoute !== 0) {
      writer.uint32(216).uint32(message.pingDefaultInternetRoute);
    }
    if (message.e2eQualityLocal !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.e2eQualityLocal, writer.uint32(242).fork()).ldelim();
    }
    if (message.e2eQualityRemote !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.e2eQualityRemote, writer.uint32(250).fork()).ldelim();
    }
    if (message.e2eQualityRemoteInstantaneousTime !== 0) {
      writer.uint32(256).uint64(message.e2eQualityRemoteInstantaneousTime);
    }
    if (message.e2eQualityRemoteLifetimeTime !== 0) {
      writer.uint32(264).uint64(message.e2eQualityRemoteLifetimeTime);
    }
    if (message.frontQualityLocal !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.frontQualityLocal, writer.uint32(322).fork()).ldelim();
    }
    if (message.frontQualityRemote !== undefined) {
      CMsgSteamDatagramConnectionQuality.encode(message.frontQualityRemote, writer.uint32(330).fork()).ldelim();
    }
    if (message.frontQualityRemoteInstantaneousTime !== 0) {
      writer.uint32(336).uint64(message.frontQualityRemoteInstantaneousTime);
    }
    if (message.frontQualityRemoteLifetimeTime !== 0) {
      writer.uint32(344).uint64(message.frontQualityRemoteLifetimeTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIConnectionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIConnectionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionKey = reader.string();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.connectionIdLocal = reader.fixed32();
          break;
        case 4:
          message.identityLocal = reader.string();
          break;
        case 5:
          message.identityRemote = reader.string();
          break;
        case 10:
          message.connectionState = reader.uint32();
          break;
        case 12:
          message.startTime = reader.uint32();
          break;
        case 13:
          message.closeTime = reader.uint32();
          break;
        case 14:
          message.closeReason = reader.uint32();
          break;
        case 15:
          message.closeMessage = reader.string();
          break;
        case 16:
          message.statusLocToken = reader.string();
          break;
        case 20:
          message.transportKind = reader.uint32();
          break;
        case 21:
          message.sdrpopidLocal = reader.string();
          break;
        case 22:
          message.sdrpopidRemote = reader.string();
          break;
        case 23:
          message.addressRemote = reader.string();
          break;
        case 24:
          message.p2pRouting = CMsgSteamDatagramP2PRoutingSummary.decode(reader, reader.uint32());
          break;
        case 25:
          message.pingInterior = reader.uint32();
          break;
        case 26:
          message.pingRemoteFront = reader.uint32();
          break;
        case 27:
          message.pingDefaultInternetRoute = reader.uint32();
          break;
        case 30:
          message.e2eQualityLocal = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          break;
        case 31:
          message.e2eQualityRemote = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          break;
        case 32:
          message.e2eQualityRemoteInstantaneousTime = longToNumber(reader.uint64() as Long);
          break;
        case 33:
          message.e2eQualityRemoteLifetimeTime = longToNumber(reader.uint64() as Long);
          break;
        case 40:
          message.frontQualityLocal = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          break;
        case 41:
          message.frontQualityRemote = CMsgSteamDatagramConnectionQuality.decode(reader, reader.uint32());
          break;
        case 42:
          message.frontQualityRemoteInstantaneousTime = longToNumber(reader.uint64() as Long);
          break;
        case 43:
          message.frontQualityRemoteLifetimeTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNetworkingUIConnectionState {
    return {
      connectionKey: isSet(object.connectionKey) ? String(object.connectionKey) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      connectionIdLocal: isSet(object.connectionIdLocal) ? Number(object.connectionIdLocal) : 0,
      identityLocal: isSet(object.identityLocal) ? String(object.identityLocal) : "",
      identityRemote: isSet(object.identityRemote) ? String(object.identityRemote) : "",
      connectionState: isSet(object.connectionState) ? Number(object.connectionState) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      closeTime: isSet(object.closeTime) ? Number(object.closeTime) : 0,
      closeReason: isSet(object.closeReason) ? Number(object.closeReason) : 0,
      closeMessage: isSet(object.closeMessage) ? String(object.closeMessage) : "",
      statusLocToken: isSet(object.statusLocToken) ? String(object.statusLocToken) : "",
      transportKind: isSet(object.transportKind) ? Number(object.transportKind) : 0,
      sdrpopidLocal: isSet(object.sdrpopidLocal) ? String(object.sdrpopidLocal) : "",
      sdrpopidRemote: isSet(object.sdrpopidRemote) ? String(object.sdrpopidRemote) : "",
      addressRemote: isSet(object.addressRemote) ? String(object.addressRemote) : "",
      p2pRouting: isSet(object.p2pRouting) ? CMsgSteamDatagramP2PRoutingSummary.fromJSON(object.p2pRouting) : undefined,
      pingInterior: isSet(object.pingInterior) ? Number(object.pingInterior) : 0,
      pingRemoteFront: isSet(object.pingRemoteFront) ? Number(object.pingRemoteFront) : 0,
      pingDefaultInternetRoute: isSet(object.pingDefaultInternetRoute) ? Number(object.pingDefaultInternetRoute) : 0,
      e2eQualityLocal: isSet(object.e2eQualityLocal)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.e2eQualityLocal)
        : undefined,
      e2eQualityRemote: isSet(object.e2eQualityRemote)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.e2eQualityRemote)
        : undefined,
      e2eQualityRemoteInstantaneousTime: isSet(object.e2eQualityRemoteInstantaneousTime)
        ? Number(object.e2eQualityRemoteInstantaneousTime)
        : 0,
      e2eQualityRemoteLifetimeTime: isSet(object.e2eQualityRemoteLifetimeTime)
        ? Number(object.e2eQualityRemoteLifetimeTime)
        : 0,
      frontQualityLocal: isSet(object.frontQualityLocal)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.frontQualityLocal)
        : undefined,
      frontQualityRemote: isSet(object.frontQualityRemote)
        ? CMsgSteamDatagramConnectionQuality.fromJSON(object.frontQualityRemote)
        : undefined,
      frontQualityRemoteInstantaneousTime: isSet(object.frontQualityRemoteInstantaneousTime)
        ? Number(object.frontQualityRemoteInstantaneousTime)
        : 0,
      frontQualityRemoteLifetimeTime: isSet(object.frontQualityRemoteLifetimeTime)
        ? Number(object.frontQualityRemoteLifetimeTime)
        : 0,
    };
  },

  toJSON(message: CGameNetworkingUIConnectionState): unknown {
    const obj: any = {};
    message.connectionKey !== undefined && (obj.connectionKey = message.connectionKey);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.connectionIdLocal !== undefined && (obj.connectionIdLocal = Math.round(message.connectionIdLocal));
    message.identityLocal !== undefined && (obj.identityLocal = message.identityLocal);
    message.identityRemote !== undefined && (obj.identityRemote = message.identityRemote);
    message.connectionState !== undefined && (obj.connectionState = Math.round(message.connectionState));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.closeTime !== undefined && (obj.closeTime = Math.round(message.closeTime));
    message.closeReason !== undefined && (obj.closeReason = Math.round(message.closeReason));
    message.closeMessage !== undefined && (obj.closeMessage = message.closeMessage);
    message.statusLocToken !== undefined && (obj.statusLocToken = message.statusLocToken);
    message.transportKind !== undefined && (obj.transportKind = Math.round(message.transportKind));
    message.sdrpopidLocal !== undefined && (obj.sdrpopidLocal = message.sdrpopidLocal);
    message.sdrpopidRemote !== undefined && (obj.sdrpopidRemote = message.sdrpopidRemote);
    message.addressRemote !== undefined && (obj.addressRemote = message.addressRemote);
    message.p2pRouting !== undefined &&
      (obj.p2pRouting = message.p2pRouting ? CMsgSteamDatagramP2PRoutingSummary.toJSON(message.p2pRouting) : undefined);
    message.pingInterior !== undefined && (obj.pingInterior = Math.round(message.pingInterior));
    message.pingRemoteFront !== undefined && (obj.pingRemoteFront = Math.round(message.pingRemoteFront));
    message.pingDefaultInternetRoute !== undefined &&
      (obj.pingDefaultInternetRoute = Math.round(message.pingDefaultInternetRoute));
    message.e2eQualityLocal !== undefined && (obj.e2eQualityLocal = message.e2eQualityLocal
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.e2eQualityLocal)
      : undefined);
    message.e2eQualityRemote !== undefined && (obj.e2eQualityRemote = message.e2eQualityRemote
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.e2eQualityRemote)
      : undefined);
    message.e2eQualityRemoteInstantaneousTime !== undefined &&
      (obj.e2eQualityRemoteInstantaneousTime = Math.round(message.e2eQualityRemoteInstantaneousTime));
    message.e2eQualityRemoteLifetimeTime !== undefined &&
      (obj.e2eQualityRemoteLifetimeTime = Math.round(message.e2eQualityRemoteLifetimeTime));
    message.frontQualityLocal !== undefined && (obj.frontQualityLocal = message.frontQualityLocal
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.frontQualityLocal)
      : undefined);
    message.frontQualityRemote !== undefined && (obj.frontQualityRemote = message.frontQualityRemote
      ? CMsgSteamDatagramConnectionQuality.toJSON(message.frontQualityRemote)
      : undefined);
    message.frontQualityRemoteInstantaneousTime !== undefined &&
      (obj.frontQualityRemoteInstantaneousTime = Math.round(message.frontQualityRemoteInstantaneousTime));
    message.frontQualityRemoteLifetimeTime !== undefined &&
      (obj.frontQualityRemoteLifetimeTime = Math.round(message.frontQualityRemoteLifetimeTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingUIConnectionState>, I>>(
    base?: I,
  ): CGameNetworkingUIConnectionState {
    return CGameNetworkingUIConnectionState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingUIConnectionState>, I>>(
    object: I,
  ): CGameNetworkingUIConnectionState {
    const message = createBaseCGameNetworkingUIConnectionState();
    message.connectionKey = object.connectionKey ?? "";
    message.appid = object.appid ?? 0;
    message.connectionIdLocal = object.connectionIdLocal ?? 0;
    message.identityLocal = object.identityLocal ?? "";
    message.identityRemote = object.identityRemote ?? "";
    message.connectionState = object.connectionState ?? 0;
    message.startTime = object.startTime ?? 0;
    message.closeTime = object.closeTime ?? 0;
    message.closeReason = object.closeReason ?? 0;
    message.closeMessage = object.closeMessage ?? "";
    message.statusLocToken = object.statusLocToken ?? "";
    message.transportKind = object.transportKind ?? 0;
    message.sdrpopidLocal = object.sdrpopidLocal ?? "";
    message.sdrpopidRemote = object.sdrpopidRemote ?? "";
    message.addressRemote = object.addressRemote ?? "";
    message.p2pRouting = (object.p2pRouting !== undefined && object.p2pRouting !== null)
      ? CMsgSteamDatagramP2PRoutingSummary.fromPartial(object.p2pRouting)
      : undefined;
    message.pingInterior = object.pingInterior ?? 0;
    message.pingRemoteFront = object.pingRemoteFront ?? 0;
    message.pingDefaultInternetRoute = object.pingDefaultInternetRoute ?? 0;
    message.e2eQualityLocal = (object.e2eQualityLocal !== undefined && object.e2eQualityLocal !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.e2eQualityLocal)
      : undefined;
    message.e2eQualityRemote = (object.e2eQualityRemote !== undefined && object.e2eQualityRemote !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.e2eQualityRemote)
      : undefined;
    message.e2eQualityRemoteInstantaneousTime = object.e2eQualityRemoteInstantaneousTime ?? 0;
    message.e2eQualityRemoteLifetimeTime = object.e2eQualityRemoteLifetimeTime ?? 0;
    message.frontQualityLocal = (object.frontQualityLocal !== undefined && object.frontQualityLocal !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.frontQualityLocal)
      : undefined;
    message.frontQualityRemote = (object.frontQualityRemote !== undefined && object.frontQualityRemote !== null)
      ? CMsgSteamDatagramConnectionQuality.fromPartial(object.frontQualityRemote)
      : undefined;
    message.frontQualityRemoteInstantaneousTime = object.frontQualityRemoteInstantaneousTime ?? 0;
    message.frontQualityRemoteLifetimeTime = object.frontQualityRemoteLifetimeTime ?? 0;
    return message;
  },
};

function createBaseCGameNetworkingUIMessage(): CGameNetworkingUIMessage {
  return { connectionState: [] };
}

export const CGameNetworkingUIMessage = {
  encode(message: CGameNetworkingUIMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connectionState) {
      CGameNetworkingUIConnectionState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingUIMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingUIMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionState.push(CGameNetworkingUIConnectionState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNetworkingUIMessage {
    return {
      connectionState: Array.isArray(object?.connectionState)
        ? object.connectionState.map((e: any) => CGameNetworkingUIConnectionState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameNetworkingUIMessage): unknown {
    const obj: any = {};
    if (message.connectionState) {
      obj.connectionState = message.connectionState.map((e) =>
        e ? CGameNetworkingUIConnectionState.toJSON(e) : undefined
      );
    } else {
      obj.connectionState = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingUIMessage>, I>>(base?: I): CGameNetworkingUIMessage {
    return CGameNetworkingUIMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingUIMessage>, I>>(object: I): CGameNetworkingUIMessage {
    const message = createBaseCGameNetworkingUIMessage();
    message.connectionState = object.connectionState?.map((e) => CGameNetworkingUIConnectionState.fromPartial(e)) || [];
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
