/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CSiteManagerClientIncomingClientRequest {
  siteInstanceid: string;
  clientSteamid: string;
  clientLocalIp: number;
  connectionKey: Buffer;
}

export interface CSiteManagerClientIncomingClientResponse {
}

export interface CSiteLicenseClientSeatCheckoutNotification {
  appid: number;
  eresult: number;
}

export interface CSiteManagerClientTrackedPaymentsNotification {
  siteId: string;
  payments: CSiteManagerClientTrackedPaymentsNotification_Payment[];
}

export interface CSiteManagerClientTrackedPaymentsNotification_Payment {
  transid: string;
  steamid: string;
  amount: string;
  ecurrency: number;
  timeCreated: number;
  purchaseStatus: number;
  machineName: string;
  personaName: string;
  profileUrl: string;
  avatarUrl: string;
}

export interface CSiteLicenseInitiateAssociationRequest {
  siteSteamid: string;
  siteInstanceid: string;
  clientLocalIp: number;
}

export interface CSiteLicenseInitiateAssociationResponse {
  connectionKey: Buffer;
}

export interface CSiteLicenseLCSAuthenticateRequest {
  instanceid: string;
}

export interface CSiteLicenseLCSAuthenticateResponse {
  siteId: string;
  siteName: string;
  newSession: boolean;
  noSiteLicenses: boolean;
}

export interface CSiteLicenseLCSAssociateUserRequest {
  steamid: string;
  localIp: number;
  instanceid: string;
  machineName: string;
}

export interface CSiteLicenseLCSAssociateUserResponse {
}

export interface CSiteLicenseClientSeatCheckoutRequest {
  steamid: string;
  instanceid: string;
  appid: number;
}

export interface CSiteLicenseClientSeatCheckoutResponse {
}

export interface CSiteLicenseClientGetAvailableSeatsRequest {
  steamid: string;
  instanceid: string;
  appid: number;
}

export interface CSiteLicenseClientGetAvailableSeatsResponse {
  availableSeats: number;
}

function createBaseCSiteManagerClientIncomingClientRequest(): CSiteManagerClientIncomingClientRequest {
  return { siteInstanceid: "0", clientSteamid: "0", clientLocalIp: 0, connectionKey: Buffer.alloc(0) };
}

export const CSiteManagerClientIncomingClientRequest = {
  encode(message: CSiteManagerClientIncomingClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siteInstanceid !== "0") {
      writer.uint32(9).fixed64(message.siteInstanceid);
    }
    if (message.clientSteamid !== "0") {
      writer.uint32(17).fixed64(message.clientSteamid);
    }
    if (message.clientLocalIp !== 0) {
      writer.uint32(29).fixed32(message.clientLocalIp);
    }
    if (message.connectionKey.length !== 0) {
      writer.uint32(34).bytes(message.connectionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteManagerClientIncomingClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteManagerClientIncomingClientRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siteInstanceid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.clientSteamid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.clientLocalIp = reader.fixed32();
          break;
        case 4:
          message.connectionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteManagerClientIncomingClientRequest {
    return {
      siteInstanceid: isSet(object.siteInstanceid) ? String(object.siteInstanceid) : "0",
      clientSteamid: isSet(object.clientSteamid) ? String(object.clientSteamid) : "0",
      clientLocalIp: isSet(object.clientLocalIp) ? Number(object.clientLocalIp) : 0,
      connectionKey: isSet(object.connectionKey) ? Buffer.from(bytesFromBase64(object.connectionKey)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSiteManagerClientIncomingClientRequest): unknown {
    const obj: any = {};
    message.siteInstanceid !== undefined && (obj.siteInstanceid = message.siteInstanceid);
    message.clientSteamid !== undefined && (obj.clientSteamid = message.clientSteamid);
    message.clientLocalIp !== undefined && (obj.clientLocalIp = Math.round(message.clientLocalIp));
    message.connectionKey !== undefined &&
      (obj.connectionKey = base64FromBytes(
        message.connectionKey !== undefined ? message.connectionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteManagerClientIncomingClientRequest>, I>>(
    base?: I,
  ): CSiteManagerClientIncomingClientRequest {
    return CSiteManagerClientIncomingClientRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteManagerClientIncomingClientRequest>, I>>(
    object: I,
  ): CSiteManagerClientIncomingClientRequest {
    const message = createBaseCSiteManagerClientIncomingClientRequest();
    message.siteInstanceid = object.siteInstanceid ?? "0";
    message.clientSteamid = object.clientSteamid ?? "0";
    message.clientLocalIp = object.clientLocalIp ?? 0;
    message.connectionKey = object.connectionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSiteManagerClientIncomingClientResponse(): CSiteManagerClientIncomingClientResponse {
  return {};
}

export const CSiteManagerClientIncomingClientResponse = {
  encode(_: CSiteManagerClientIncomingClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteManagerClientIncomingClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteManagerClientIncomingClientResponse();
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

  fromJSON(_: any): CSiteManagerClientIncomingClientResponse {
    return {};
  },

  toJSON(_: CSiteManagerClientIncomingClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteManagerClientIncomingClientResponse>, I>>(
    base?: I,
  ): CSiteManagerClientIncomingClientResponse {
    return CSiteManagerClientIncomingClientResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteManagerClientIncomingClientResponse>, I>>(
    _: I,
  ): CSiteManagerClientIncomingClientResponse {
    const message = createBaseCSiteManagerClientIncomingClientResponse();
    return message;
  },
};

function createBaseCSiteLicenseClientSeatCheckoutNotification(): CSiteLicenseClientSeatCheckoutNotification {
  return { appid: 0, eresult: 0 };
}

export const CSiteLicenseClientSeatCheckoutNotification = {
  encode(message: CSiteLicenseClientSeatCheckoutNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseClientSeatCheckoutNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseClientSeatCheckoutNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseClientSeatCheckoutNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CSiteLicenseClientSeatCheckoutNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutNotification>, I>>(
    base?: I,
  ): CSiteLicenseClientSeatCheckoutNotification {
    return CSiteLicenseClientSeatCheckoutNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutNotification>, I>>(
    object: I,
  ): CSiteLicenseClientSeatCheckoutNotification {
    const message = createBaseCSiteLicenseClientSeatCheckoutNotification();
    message.appid = object.appid ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCSiteManagerClientTrackedPaymentsNotification(): CSiteManagerClientTrackedPaymentsNotification {
  return { siteId: "0", payments: [] };
}

export const CSiteManagerClientTrackedPaymentsNotification = {
  encode(message: CSiteManagerClientTrackedPaymentsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siteId !== "0") {
      writer.uint32(9).fixed64(message.siteId);
    }
    for (const v of message.payments) {
      CSiteManagerClientTrackedPaymentsNotification_Payment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteManagerClientTrackedPaymentsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteManagerClientTrackedPaymentsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siteId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.payments.push(CSiteManagerClientTrackedPaymentsNotification_Payment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteManagerClientTrackedPaymentsNotification {
    return {
      siteId: isSet(object.siteId) ? String(object.siteId) : "0",
      payments: Array.isArray(object?.payments)
        ? object.payments.map((e: any) => CSiteManagerClientTrackedPaymentsNotification_Payment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSiteManagerClientTrackedPaymentsNotification): unknown {
    const obj: any = {};
    message.siteId !== undefined && (obj.siteId = message.siteId);
    if (message.payments) {
      obj.payments = message.payments.map((e) =>
        e ? CSiteManagerClientTrackedPaymentsNotification_Payment.toJSON(e) : undefined
      );
    } else {
      obj.payments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteManagerClientTrackedPaymentsNotification>, I>>(
    base?: I,
  ): CSiteManagerClientTrackedPaymentsNotification {
    return CSiteManagerClientTrackedPaymentsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteManagerClientTrackedPaymentsNotification>, I>>(
    object: I,
  ): CSiteManagerClientTrackedPaymentsNotification {
    const message = createBaseCSiteManagerClientTrackedPaymentsNotification();
    message.siteId = object.siteId ?? "0";
    message.payments =
      object.payments?.map((e) => CSiteManagerClientTrackedPaymentsNotification_Payment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSiteManagerClientTrackedPaymentsNotification_Payment(): CSiteManagerClientTrackedPaymentsNotification_Payment {
  return {
    transid: "0",
    steamid: "0",
    amount: "0",
    ecurrency: 0,
    timeCreated: 0,
    purchaseStatus: 0,
    machineName: "",
    personaName: "",
    profileUrl: "",
    avatarUrl: "",
  };
}

export const CSiteManagerClientTrackedPaymentsNotification_Payment = {
  encode(
    message: CSiteManagerClientTrackedPaymentsNotification_Payment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.transid !== "0") {
      writer.uint32(8).uint64(message.transid);
    }
    if (message.steamid !== "0") {
      writer.uint32(16).uint64(message.steamid);
    }
    if (message.amount !== "0") {
      writer.uint32(24).int64(message.amount);
    }
    if (message.ecurrency !== 0) {
      writer.uint32(32).uint32(message.ecurrency);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(40).int32(message.timeCreated);
    }
    if (message.purchaseStatus !== 0) {
      writer.uint32(48).int32(message.purchaseStatus);
    }
    if (message.machineName !== "") {
      writer.uint32(58).string(message.machineName);
    }
    if (message.personaName !== "") {
      writer.uint32(66).string(message.personaName);
    }
    if (message.profileUrl !== "") {
      writer.uint32(74).string(message.profileUrl);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(82).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteManagerClientTrackedPaymentsNotification_Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteManagerClientTrackedPaymentsNotification_Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.int64() as Long);
          break;
        case 4:
          message.ecurrency = reader.uint32();
          break;
        case 5:
          message.timeCreated = reader.int32();
          break;
        case 6:
          message.purchaseStatus = reader.int32();
          break;
        case 7:
          message.machineName = reader.string();
          break;
        case 8:
          message.personaName = reader.string();
          break;
        case 9:
          message.profileUrl = reader.string();
          break;
        case 10:
          message.avatarUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteManagerClientTrackedPaymentsNotification_Payment {
    return {
      transid: isSet(object.transid) ? String(object.transid) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
      ecurrency: isSet(object.ecurrency) ? Number(object.ecurrency) : 0,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      purchaseStatus: isSet(object.purchaseStatus) ? Number(object.purchaseStatus) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      profileUrl: isSet(object.profileUrl) ? String(object.profileUrl) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: CSiteManagerClientTrackedPaymentsNotification_Payment): unknown {
    const obj: any = {};
    message.transid !== undefined && (obj.transid = message.transid);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.amount !== undefined && (obj.amount = message.amount);
    message.ecurrency !== undefined && (obj.ecurrency = Math.round(message.ecurrency));
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.purchaseStatus !== undefined && (obj.purchaseStatus = Math.round(message.purchaseStatus));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.profileUrl !== undefined && (obj.profileUrl = message.profileUrl);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteManagerClientTrackedPaymentsNotification_Payment>, I>>(
    base?: I,
  ): CSiteManagerClientTrackedPaymentsNotification_Payment {
    return CSiteManagerClientTrackedPaymentsNotification_Payment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteManagerClientTrackedPaymentsNotification_Payment>, I>>(
    object: I,
  ): CSiteManagerClientTrackedPaymentsNotification_Payment {
    const message = createBaseCSiteManagerClientTrackedPaymentsNotification_Payment();
    message.transid = object.transid ?? "0";
    message.steamid = object.steamid ?? "0";
    message.amount = object.amount ?? "0";
    message.ecurrency = object.ecurrency ?? 0;
    message.timeCreated = object.timeCreated ?? 0;
    message.purchaseStatus = object.purchaseStatus ?? 0;
    message.machineName = object.machineName ?? "";
    message.personaName = object.personaName ?? "";
    message.profileUrl = object.profileUrl ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseCSiteLicenseInitiateAssociationRequest(): CSiteLicenseInitiateAssociationRequest {
  return { siteSteamid: "0", siteInstanceid: "0", clientLocalIp: 0 };
}

export const CSiteLicenseInitiateAssociationRequest = {
  encode(message: CSiteLicenseInitiateAssociationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siteSteamid !== "0") {
      writer.uint32(9).fixed64(message.siteSteamid);
    }
    if (message.siteInstanceid !== "0") {
      writer.uint32(17).fixed64(message.siteInstanceid);
    }
    if (message.clientLocalIp !== 0) {
      writer.uint32(29).fixed32(message.clientLocalIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseInitiateAssociationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseInitiateAssociationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siteSteamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.siteInstanceid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.clientLocalIp = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseInitiateAssociationRequest {
    return {
      siteSteamid: isSet(object.siteSteamid) ? String(object.siteSteamid) : "0",
      siteInstanceid: isSet(object.siteInstanceid) ? String(object.siteInstanceid) : "0",
      clientLocalIp: isSet(object.clientLocalIp) ? Number(object.clientLocalIp) : 0,
    };
  },

  toJSON(message: CSiteLicenseInitiateAssociationRequest): unknown {
    const obj: any = {};
    message.siteSteamid !== undefined && (obj.siteSteamid = message.siteSteamid);
    message.siteInstanceid !== undefined && (obj.siteInstanceid = message.siteInstanceid);
    message.clientLocalIp !== undefined && (obj.clientLocalIp = Math.round(message.clientLocalIp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseInitiateAssociationRequest>, I>>(
    base?: I,
  ): CSiteLicenseInitiateAssociationRequest {
    return CSiteLicenseInitiateAssociationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseInitiateAssociationRequest>, I>>(
    object: I,
  ): CSiteLicenseInitiateAssociationRequest {
    const message = createBaseCSiteLicenseInitiateAssociationRequest();
    message.siteSteamid = object.siteSteamid ?? "0";
    message.siteInstanceid = object.siteInstanceid ?? "0";
    message.clientLocalIp = object.clientLocalIp ?? 0;
    return message;
  },
};

function createBaseCSiteLicenseInitiateAssociationResponse(): CSiteLicenseInitiateAssociationResponse {
  return { connectionKey: Buffer.alloc(0) };
}

export const CSiteLicenseInitiateAssociationResponse = {
  encode(message: CSiteLicenseInitiateAssociationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionKey.length !== 0) {
      writer.uint32(10).bytes(message.connectionKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseInitiateAssociationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseInitiateAssociationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseInitiateAssociationResponse {
    return {
      connectionKey: isSet(object.connectionKey) ? Buffer.from(bytesFromBase64(object.connectionKey)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSiteLicenseInitiateAssociationResponse): unknown {
    const obj: any = {};
    message.connectionKey !== undefined &&
      (obj.connectionKey = base64FromBytes(
        message.connectionKey !== undefined ? message.connectionKey : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseInitiateAssociationResponse>, I>>(
    base?: I,
  ): CSiteLicenseInitiateAssociationResponse {
    return CSiteLicenseInitiateAssociationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseInitiateAssociationResponse>, I>>(
    object: I,
  ): CSiteLicenseInitiateAssociationResponse {
    const message = createBaseCSiteLicenseInitiateAssociationResponse();
    message.connectionKey = object.connectionKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSiteLicenseLCSAuthenticateRequest(): CSiteLicenseLCSAuthenticateRequest {
  return { instanceid: "0" };
}

export const CSiteLicenseLCSAuthenticateRequest = {
  encode(message: CSiteLicenseLCSAuthenticateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instanceid !== "0") {
      writer.uint32(9).fixed64(message.instanceid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseLCSAuthenticateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseLCSAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instanceid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseLCSAuthenticateRequest {
    return { instanceid: isSet(object.instanceid) ? String(object.instanceid) : "0" };
  },

  toJSON(message: CSiteLicenseLCSAuthenticateRequest): unknown {
    const obj: any = {};
    message.instanceid !== undefined && (obj.instanceid = message.instanceid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseLCSAuthenticateRequest>, I>>(
    base?: I,
  ): CSiteLicenseLCSAuthenticateRequest {
    return CSiteLicenseLCSAuthenticateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseLCSAuthenticateRequest>, I>>(
    object: I,
  ): CSiteLicenseLCSAuthenticateRequest {
    const message = createBaseCSiteLicenseLCSAuthenticateRequest();
    message.instanceid = object.instanceid ?? "0";
    return message;
  },
};

function createBaseCSiteLicenseLCSAuthenticateResponse(): CSiteLicenseLCSAuthenticateResponse {
  return { siteId: "0", siteName: "", newSession: false, noSiteLicenses: false };
}

export const CSiteLicenseLCSAuthenticateResponse = {
  encode(message: CSiteLicenseLCSAuthenticateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siteId !== "0") {
      writer.uint32(8).uint64(message.siteId);
    }
    if (message.siteName !== "") {
      writer.uint32(18).string(message.siteName);
    }
    if (message.newSession === true) {
      writer.uint32(24).bool(message.newSession);
    }
    if (message.noSiteLicenses === true) {
      writer.uint32(32).bool(message.noSiteLicenses);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseLCSAuthenticateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseLCSAuthenticateResponse();
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
          message.newSession = reader.bool();
          break;
        case 4:
          message.noSiteLicenses = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseLCSAuthenticateResponse {
    return {
      siteId: isSet(object.siteId) ? String(object.siteId) : "0",
      siteName: isSet(object.siteName) ? String(object.siteName) : "",
      newSession: isSet(object.newSession) ? Boolean(object.newSession) : false,
      noSiteLicenses: isSet(object.noSiteLicenses) ? Boolean(object.noSiteLicenses) : false,
    };
  },

  toJSON(message: CSiteLicenseLCSAuthenticateResponse): unknown {
    const obj: any = {};
    message.siteId !== undefined && (obj.siteId = message.siteId);
    message.siteName !== undefined && (obj.siteName = message.siteName);
    message.newSession !== undefined && (obj.newSession = message.newSession);
    message.noSiteLicenses !== undefined && (obj.noSiteLicenses = message.noSiteLicenses);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseLCSAuthenticateResponse>, I>>(
    base?: I,
  ): CSiteLicenseLCSAuthenticateResponse {
    return CSiteLicenseLCSAuthenticateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseLCSAuthenticateResponse>, I>>(
    object: I,
  ): CSiteLicenseLCSAuthenticateResponse {
    const message = createBaseCSiteLicenseLCSAuthenticateResponse();
    message.siteId = object.siteId ?? "0";
    message.siteName = object.siteName ?? "";
    message.newSession = object.newSession ?? false;
    message.noSiteLicenses = object.noSiteLicenses ?? false;
    return message;
  },
};

function createBaseCSiteLicenseLCSAssociateUserRequest(): CSiteLicenseLCSAssociateUserRequest {
  return { steamid: "0", localIp: 0, instanceid: "0", machineName: "" };
}

export const CSiteLicenseLCSAssociateUserRequest = {
  encode(message: CSiteLicenseLCSAssociateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.localIp !== 0) {
      writer.uint32(21).fixed32(message.localIp);
    }
    if (message.instanceid !== "0") {
      writer.uint32(25).fixed64(message.instanceid);
    }
    if (message.machineName !== "") {
      writer.uint32(34).string(message.machineName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseLCSAssociateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseLCSAssociateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.localIp = reader.fixed32();
          break;
        case 3:
          message.instanceid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.machineName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseLCSAssociateUserRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      localIp: isSet(object.localIp) ? Number(object.localIp) : 0,
      instanceid: isSet(object.instanceid) ? String(object.instanceid) : "0",
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
    };
  },

  toJSON(message: CSiteLicenseLCSAssociateUserRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.localIp !== undefined && (obj.localIp = Math.round(message.localIp));
    message.instanceid !== undefined && (obj.instanceid = message.instanceid);
    message.machineName !== undefined && (obj.machineName = message.machineName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseLCSAssociateUserRequest>, I>>(
    base?: I,
  ): CSiteLicenseLCSAssociateUserRequest {
    return CSiteLicenseLCSAssociateUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseLCSAssociateUserRequest>, I>>(
    object: I,
  ): CSiteLicenseLCSAssociateUserRequest {
    const message = createBaseCSiteLicenseLCSAssociateUserRequest();
    message.steamid = object.steamid ?? "0";
    message.localIp = object.localIp ?? 0;
    message.instanceid = object.instanceid ?? "0";
    message.machineName = object.machineName ?? "";
    return message;
  },
};

function createBaseCSiteLicenseLCSAssociateUserResponse(): CSiteLicenseLCSAssociateUserResponse {
  return {};
}

export const CSiteLicenseLCSAssociateUserResponse = {
  encode(_: CSiteLicenseLCSAssociateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseLCSAssociateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseLCSAssociateUserResponse();
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

  fromJSON(_: any): CSiteLicenseLCSAssociateUserResponse {
    return {};
  },

  toJSON(_: CSiteLicenseLCSAssociateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseLCSAssociateUserResponse>, I>>(
    base?: I,
  ): CSiteLicenseLCSAssociateUserResponse {
    return CSiteLicenseLCSAssociateUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseLCSAssociateUserResponse>, I>>(
    _: I,
  ): CSiteLicenseLCSAssociateUserResponse {
    const message = createBaseCSiteLicenseLCSAssociateUserResponse();
    return message;
  },
};

function createBaseCSiteLicenseClientSeatCheckoutRequest(): CSiteLicenseClientSeatCheckoutRequest {
  return { steamid: "0", instanceid: "0", appid: 0 };
}

export const CSiteLicenseClientSeatCheckoutRequest = {
  encode(message: CSiteLicenseClientSeatCheckoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.instanceid !== "0") {
      writer.uint32(17).fixed64(message.instanceid);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseClientSeatCheckoutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseClientSeatCheckoutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.instanceid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseClientSeatCheckoutRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      instanceid: isSet(object.instanceid) ? String(object.instanceid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CSiteLicenseClientSeatCheckoutRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.instanceid !== undefined && (obj.instanceid = message.instanceid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutRequest>, I>>(
    base?: I,
  ): CSiteLicenseClientSeatCheckoutRequest {
    return CSiteLicenseClientSeatCheckoutRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutRequest>, I>>(
    object: I,
  ): CSiteLicenseClientSeatCheckoutRequest {
    const message = createBaseCSiteLicenseClientSeatCheckoutRequest();
    message.steamid = object.steamid ?? "0";
    message.instanceid = object.instanceid ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCSiteLicenseClientSeatCheckoutResponse(): CSiteLicenseClientSeatCheckoutResponse {
  return {};
}

export const CSiteLicenseClientSeatCheckoutResponse = {
  encode(_: CSiteLicenseClientSeatCheckoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseClientSeatCheckoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseClientSeatCheckoutResponse();
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

  fromJSON(_: any): CSiteLicenseClientSeatCheckoutResponse {
    return {};
  },

  toJSON(_: CSiteLicenseClientSeatCheckoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutResponse>, I>>(
    base?: I,
  ): CSiteLicenseClientSeatCheckoutResponse {
    return CSiteLicenseClientSeatCheckoutResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseClientSeatCheckoutResponse>, I>>(
    _: I,
  ): CSiteLicenseClientSeatCheckoutResponse {
    const message = createBaseCSiteLicenseClientSeatCheckoutResponse();
    return message;
  },
};

function createBaseCSiteLicenseClientGetAvailableSeatsRequest(): CSiteLicenseClientGetAvailableSeatsRequest {
  return { steamid: "0", instanceid: "0", appid: 0 };
}

export const CSiteLicenseClientGetAvailableSeatsRequest = {
  encode(message: CSiteLicenseClientGetAvailableSeatsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.instanceid !== "0") {
      writer.uint32(17).fixed64(message.instanceid);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseClientGetAvailableSeatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseClientGetAvailableSeatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.instanceid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseClientGetAvailableSeatsRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      instanceid: isSet(object.instanceid) ? String(object.instanceid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CSiteLicenseClientGetAvailableSeatsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.instanceid !== undefined && (obj.instanceid = message.instanceid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseClientGetAvailableSeatsRequest>, I>>(
    base?: I,
  ): CSiteLicenseClientGetAvailableSeatsRequest {
    return CSiteLicenseClientGetAvailableSeatsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseClientGetAvailableSeatsRequest>, I>>(
    object: I,
  ): CSiteLicenseClientGetAvailableSeatsRequest {
    const message = createBaseCSiteLicenseClientGetAvailableSeatsRequest();
    message.steamid = object.steamid ?? "0";
    message.instanceid = object.instanceid ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCSiteLicenseClientGetAvailableSeatsResponse(): CSiteLicenseClientGetAvailableSeatsResponse {
  return { availableSeats: 0 };
}

export const CSiteLicenseClientGetAvailableSeatsResponse = {
  encode(message: CSiteLicenseClientGetAvailableSeatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableSeats !== 0) {
      writer.uint32(8).uint32(message.availableSeats);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSiteLicenseClientGetAvailableSeatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSiteLicenseClientGetAvailableSeatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableSeats = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSiteLicenseClientGetAvailableSeatsResponse {
    return { availableSeats: isSet(object.availableSeats) ? Number(object.availableSeats) : 0 };
  },

  toJSON(message: CSiteLicenseClientGetAvailableSeatsResponse): unknown {
    const obj: any = {};
    message.availableSeats !== undefined && (obj.availableSeats = Math.round(message.availableSeats));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSiteLicenseClientGetAvailableSeatsResponse>, I>>(
    base?: I,
  ): CSiteLicenseClientGetAvailableSeatsResponse {
    return CSiteLicenseClientGetAvailableSeatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSiteLicenseClientGetAvailableSeatsResponse>, I>>(
    object: I,
  ): CSiteLicenseClientGetAvailableSeatsResponse {
    const message = createBaseCSiteLicenseClientGetAvailableSeatsResponse();
    message.availableSeats = object.availableSeats ?? 0;
    return message;
  },
};

export interface SiteManagerClient {
  IncomingClient(request: CSiteManagerClientIncomingClientRequest): Promise<CSiteManagerClientIncomingClientResponse>;
  ClientSeatCheckoutNotification(request: CSiteLicenseClientSeatCheckoutNotification): Promise<NoResponse>;
  TrackedPaymentsNotification(request: CSiteManagerClientTrackedPaymentsNotification): Promise<NoResponse>;
}

export class SiteManagerClientClientImpl implements SiteManagerClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SiteManagerClient";
    this.rpc = rpc;
    this.IncomingClient = this.IncomingClient.bind(this);
    this.ClientSeatCheckoutNotification = this.ClientSeatCheckoutNotification.bind(this);
    this.TrackedPaymentsNotification = this.TrackedPaymentsNotification.bind(this);
  }
  IncomingClient(request: CSiteManagerClientIncomingClientRequest): Promise<CSiteManagerClientIncomingClientResponse> {
    const data = CSiteManagerClientIncomingClientRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IncomingClient", data);
    return promise.then((data) => CSiteManagerClientIncomingClientResponse.decode(new _m0.Reader(data)));
  }

  ClientSeatCheckoutNotification(request: CSiteLicenseClientSeatCheckoutNotification): Promise<NoResponse> {
    const data = CSiteLicenseClientSeatCheckoutNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientSeatCheckoutNotification", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  TrackedPaymentsNotification(request: CSiteManagerClientTrackedPaymentsNotification): Promise<NoResponse> {
    const data = CSiteManagerClientTrackedPaymentsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "TrackedPaymentsNotification", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface SiteLicense {
  InitiateAssociation(
    request: CSiteLicenseInitiateAssociationRequest,
  ): Promise<CSiteLicenseInitiateAssociationResponse>;
  LCSAuthenticate(request: CSiteLicenseLCSAuthenticateRequest): Promise<CSiteLicenseLCSAuthenticateResponse>;
  LCSAssociateUser(request: CSiteLicenseLCSAssociateUserRequest): Promise<CSiteLicenseLCSAssociateUserResponse>;
  ClientSeatCheckout(request: CSiteLicenseClientSeatCheckoutRequest): Promise<CSiteLicenseClientSeatCheckoutResponse>;
  ClientGetAvailableSeats(
    request: CSiteLicenseClientGetAvailableSeatsRequest,
  ): Promise<CSiteLicenseClientGetAvailableSeatsResponse>;
}

export class SiteLicenseClientImpl implements SiteLicense {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SiteLicense";
    this.rpc = rpc;
    this.InitiateAssociation = this.InitiateAssociation.bind(this);
    this.LCSAuthenticate = this.LCSAuthenticate.bind(this);
    this.LCSAssociateUser = this.LCSAssociateUser.bind(this);
    this.ClientSeatCheckout = this.ClientSeatCheckout.bind(this);
    this.ClientGetAvailableSeats = this.ClientGetAvailableSeats.bind(this);
  }
  InitiateAssociation(
    request: CSiteLicenseInitiateAssociationRequest,
  ): Promise<CSiteLicenseInitiateAssociationResponse> {
    const data = CSiteLicenseInitiateAssociationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InitiateAssociation", data);
    return promise.then((data) => CSiteLicenseInitiateAssociationResponse.decode(new _m0.Reader(data)));
  }

  LCSAuthenticate(request: CSiteLicenseLCSAuthenticateRequest): Promise<CSiteLicenseLCSAuthenticateResponse> {
    const data = CSiteLicenseLCSAuthenticateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LCSAuthenticate", data);
    return promise.then((data) => CSiteLicenseLCSAuthenticateResponse.decode(new _m0.Reader(data)));
  }

  LCSAssociateUser(request: CSiteLicenseLCSAssociateUserRequest): Promise<CSiteLicenseLCSAssociateUserResponse> {
    const data = CSiteLicenseLCSAssociateUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LCSAssociateUser", data);
    return promise.then((data) => CSiteLicenseLCSAssociateUserResponse.decode(new _m0.Reader(data)));
  }

  ClientSeatCheckout(request: CSiteLicenseClientSeatCheckoutRequest): Promise<CSiteLicenseClientSeatCheckoutResponse> {
    const data = CSiteLicenseClientSeatCheckoutRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientSeatCheckout", data);
    return promise.then((data) => CSiteLicenseClientSeatCheckoutResponse.decode(new _m0.Reader(data)));
  }

  ClientGetAvailableSeats(
    request: CSiteLicenseClientGetAvailableSeatsRequest,
  ): Promise<CSiteLicenseClientGetAvailableSeatsResponse> {
    const data = CSiteLicenseClientGetAvailableSeatsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetAvailableSeats", data);
    return promise.then((data) => CSiteLicenseClientGetAvailableSeatsResponse.decode(new _m0.Reader(data)));
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
