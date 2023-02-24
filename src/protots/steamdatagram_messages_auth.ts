/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgSteamDatagramCertificateSigned } from "./steamnetworkingsockets_messages_certs";

export const protobufPackage = "";

export interface CMsgSteamDatagramRelayAuthTicket {
  timeExpiry: number;
  authorizedClientIdentityString: string;
  gameserverIdentityString: string;
  authorizedPublicIp: number;
  gameserverAddress: Buffer;
  appId: number;
  virtualPort: number;
  extraFields: CMsgSteamDatagramRelayAuthTicket_ExtraField[];
  legacyAuthorizedSteamId: number;
  legacyGameserverSteamId: number;
  legacyGameserverPopId: number;
  legacyAuthorizedClientIdentityBinary: Buffer;
  legacyGameserverIdentityBinary: Buffer;
}

export interface CMsgSteamDatagramRelayAuthTicket_ExtraField {
  name: string;
  stringValue: string;
  int64Value: number;
  fixed64Value: number;
}

export interface CMsgSteamDatagramSignedRelayAuthTicket {
  reservedDoNotUse: number;
  ticket: Buffer;
  signature: Buffer;
  keyId: number;
  certs: CMsgSteamDatagramCertificateSigned[];
}

export interface CMsgSteamDatagramCachedCredentialsForApp {
  privateKey: Buffer;
  cert: Buffer;
  relayTickets: Buffer[];
}

export interface CMsgSteamDatagramGameCoordinatorServerLogin {
  timeGenerated: number;
  appid: number;
  routing: Buffer;
  appdata: Buffer;
  legacyIdentityBinary: Buffer;
  identityString: string;
  dummySteamId: number;
}

export interface CMsgSteamDatagramSignedGameCoordinatorServerLogin {
  cert: CMsgSteamDatagramCertificateSigned | undefined;
  login: Buffer;
  signature: Buffer;
}

export interface CMsgSteamDatagramHostedServerAddressPlaintext {
  ipv4: number;
  ipv6: Buffer;
  port: number;
  routingSecret: number;
  protocolVersion: number;
}

function createBaseCMsgSteamDatagramRelayAuthTicket(): CMsgSteamDatagramRelayAuthTicket {
  return {
    timeExpiry: 0,
    authorizedClientIdentityString: "",
    gameserverIdentityString: "",
    authorizedPublicIp: 0,
    gameserverAddress: Buffer.alloc(0),
    appId: 0,
    virtualPort: 0,
    extraFields: [],
    legacyAuthorizedSteamId: 0,
    legacyGameserverSteamId: 0,
    legacyGameserverPopId: 0,
    legacyAuthorizedClientIdentityBinary: Buffer.alloc(0),
    legacyGameserverIdentityBinary: Buffer.alloc(0),
  };
}

export const CMsgSteamDatagramRelayAuthTicket = {
  encode(message: CMsgSteamDatagramRelayAuthTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeExpiry !== 0) {
      writer.uint32(13).fixed32(message.timeExpiry);
    }
    if (message.authorizedClientIdentityString !== "") {
      writer.uint32(114).string(message.authorizedClientIdentityString);
    }
    if (message.gameserverIdentityString !== "") {
      writer.uint32(122).string(message.gameserverIdentityString);
    }
    if (message.authorizedPublicIp !== 0) {
      writer.uint32(29).fixed32(message.authorizedPublicIp);
    }
    if (message.gameserverAddress.length !== 0) {
      writer.uint32(90).bytes(message.gameserverAddress);
    }
    if (message.appId !== 0) {
      writer.uint32(56).uint32(message.appId);
    }
    if (message.virtualPort !== 0) {
      writer.uint32(80).uint32(message.virtualPort);
    }
    for (const v of message.extraFields) {
      CMsgSteamDatagramRelayAuthTicket_ExtraField.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.legacyAuthorizedSteamId !== 0) {
      writer.uint32(17).fixed64(message.legacyAuthorizedSteamId);
    }
    if (message.legacyGameserverSteamId !== 0) {
      writer.uint32(33).fixed64(message.legacyGameserverSteamId);
    }
    if (message.legacyGameserverPopId !== 0) {
      writer.uint32(77).fixed32(message.legacyGameserverPopId);
    }
    if (message.legacyAuthorizedClientIdentityBinary.length !== 0) {
      writer.uint32(98).bytes(message.legacyAuthorizedClientIdentityBinary);
    }
    if (message.legacyGameserverIdentityBinary.length !== 0) {
      writer.uint32(106).bytes(message.legacyGameserverIdentityBinary);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRelayAuthTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRelayAuthTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeExpiry = reader.fixed32();
          break;
        case 14:
          message.authorizedClientIdentityString = reader.string();
          break;
        case 15:
          message.gameserverIdentityString = reader.string();
          break;
        case 3:
          message.authorizedPublicIp = reader.fixed32();
          break;
        case 11:
          message.gameserverAddress = reader.bytes() as Buffer;
          break;
        case 7:
          message.appId = reader.uint32();
          break;
        case 10:
          message.virtualPort = reader.uint32();
          break;
        case 8:
          message.extraFields.push(CMsgSteamDatagramRelayAuthTicket_ExtraField.decode(reader, reader.uint32()));
          break;
        case 2:
          message.legacyAuthorizedSteamId = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.legacyGameserverSteamId = longToNumber(reader.fixed64() as Long);
          break;
        case 9:
          message.legacyGameserverPopId = reader.fixed32();
          break;
        case 12:
          message.legacyAuthorizedClientIdentityBinary = reader.bytes() as Buffer;
          break;
        case 13:
          message.legacyGameserverIdentityBinary = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramRelayAuthTicket {
    return {
      timeExpiry: isSet(object.timeExpiry) ? Number(object.timeExpiry) : 0,
      authorizedClientIdentityString: isSet(object.authorizedClientIdentityString)
        ? String(object.authorizedClientIdentityString)
        : "",
      gameserverIdentityString: isSet(object.gameserverIdentityString) ? String(object.gameserverIdentityString) : "",
      authorizedPublicIp: isSet(object.authorizedPublicIp) ? Number(object.authorizedPublicIp) : 0,
      gameserverAddress: isSet(object.gameserverAddress)
        ? Buffer.from(bytesFromBase64(object.gameserverAddress))
        : Buffer.alloc(0),
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      virtualPort: isSet(object.virtualPort) ? Number(object.virtualPort) : 0,
      extraFields: Array.isArray(object?.extraFields)
        ? object.extraFields.map((e: any) => CMsgSteamDatagramRelayAuthTicket_ExtraField.fromJSON(e))
        : [],
      legacyAuthorizedSteamId: isSet(object.legacyAuthorizedSteamId) ? Number(object.legacyAuthorizedSteamId) : 0,
      legacyGameserverSteamId: isSet(object.legacyGameserverSteamId) ? Number(object.legacyGameserverSteamId) : 0,
      legacyGameserverPopId: isSet(object.legacyGameserverPopId) ? Number(object.legacyGameserverPopId) : 0,
      legacyAuthorizedClientIdentityBinary: isSet(object.legacyAuthorizedClientIdentityBinary)
        ? Buffer.from(bytesFromBase64(object.legacyAuthorizedClientIdentityBinary))
        : Buffer.alloc(0),
      legacyGameserverIdentityBinary: isSet(object.legacyGameserverIdentityBinary)
        ? Buffer.from(bytesFromBase64(object.legacyGameserverIdentityBinary))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramRelayAuthTicket): unknown {
    const obj: any = {};
    message.timeExpiry !== undefined && (obj.timeExpiry = Math.round(message.timeExpiry));
    message.authorizedClientIdentityString !== undefined &&
      (obj.authorizedClientIdentityString = message.authorizedClientIdentityString);
    message.gameserverIdentityString !== undefined && (obj.gameserverIdentityString = message.gameserverIdentityString);
    message.authorizedPublicIp !== undefined && (obj.authorizedPublicIp = Math.round(message.authorizedPublicIp));
    message.gameserverAddress !== undefined &&
      (obj.gameserverAddress = base64FromBytes(
        message.gameserverAddress !== undefined ? message.gameserverAddress : Buffer.alloc(0),
      ));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.virtualPort !== undefined && (obj.virtualPort = Math.round(message.virtualPort));
    if (message.extraFields) {
      obj.extraFields = message.extraFields.map((e) =>
        e ? CMsgSteamDatagramRelayAuthTicket_ExtraField.toJSON(e) : undefined
      );
    } else {
      obj.extraFields = [];
    }
    message.legacyAuthorizedSteamId !== undefined &&
      (obj.legacyAuthorizedSteamId = Math.round(message.legacyAuthorizedSteamId));
    message.legacyGameserverSteamId !== undefined &&
      (obj.legacyGameserverSteamId = Math.round(message.legacyGameserverSteamId));
    message.legacyGameserverPopId !== undefined &&
      (obj.legacyGameserverPopId = Math.round(message.legacyGameserverPopId));
    message.legacyAuthorizedClientIdentityBinary !== undefined &&
      (obj.legacyAuthorizedClientIdentityBinary = base64FromBytes(
        message.legacyAuthorizedClientIdentityBinary !== undefined
          ? message.legacyAuthorizedClientIdentityBinary
          : Buffer.alloc(0),
      ));
    message.legacyGameserverIdentityBinary !== undefined &&
      (obj.legacyGameserverIdentityBinary = base64FromBytes(
        message.legacyGameserverIdentityBinary !== undefined ? message.legacyGameserverIdentityBinary : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramRelayAuthTicket>, I>>(
    base?: I,
  ): CMsgSteamDatagramRelayAuthTicket {
    return CMsgSteamDatagramRelayAuthTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramRelayAuthTicket>, I>>(
    object: I,
  ): CMsgSteamDatagramRelayAuthTicket {
    const message = createBaseCMsgSteamDatagramRelayAuthTicket();
    message.timeExpiry = object.timeExpiry ?? 0;
    message.authorizedClientIdentityString = object.authorizedClientIdentityString ?? "";
    message.gameserverIdentityString = object.gameserverIdentityString ?? "";
    message.authorizedPublicIp = object.authorizedPublicIp ?? 0;
    message.gameserverAddress = object.gameserverAddress ?? Buffer.alloc(0);
    message.appId = object.appId ?? 0;
    message.virtualPort = object.virtualPort ?? 0;
    message.extraFields = object.extraFields?.map((e) => CMsgSteamDatagramRelayAuthTicket_ExtraField.fromPartial(e)) ||
      [];
    message.legacyAuthorizedSteamId = object.legacyAuthorizedSteamId ?? 0;
    message.legacyGameserverSteamId = object.legacyGameserverSteamId ?? 0;
    message.legacyGameserverPopId = object.legacyGameserverPopId ?? 0;
    message.legacyAuthorizedClientIdentityBinary = object.legacyAuthorizedClientIdentityBinary ?? Buffer.alloc(0);
    message.legacyGameserverIdentityBinary = object.legacyGameserverIdentityBinary ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramRelayAuthTicket_ExtraField(): CMsgSteamDatagramRelayAuthTicket_ExtraField {
  return { name: "", stringValue: "", int64Value: 0, fixed64Value: 0 };
}

export const CMsgSteamDatagramRelayAuthTicket_ExtraField = {
  encode(message: CMsgSteamDatagramRelayAuthTicket_ExtraField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.stringValue !== "") {
      writer.uint32(18).string(message.stringValue);
    }
    if (message.int64Value !== 0) {
      writer.uint32(24).sint64(message.int64Value);
    }
    if (message.fixed64Value !== 0) {
      writer.uint32(41).fixed64(message.fixed64Value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramRelayAuthTicket_ExtraField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramRelayAuthTicket_ExtraField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.stringValue = reader.string();
          break;
        case 3:
          message.int64Value = longToNumber(reader.sint64() as Long);
          break;
        case 5:
          message.fixed64Value = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramRelayAuthTicket_ExtraField {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
      int64Value: isSet(object.int64Value) ? Number(object.int64Value) : 0,
      fixed64Value: isSet(object.fixed64Value) ? Number(object.fixed64Value) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramRelayAuthTicket_ExtraField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.int64Value !== undefined && (obj.int64Value = Math.round(message.int64Value));
    message.fixed64Value !== undefined && (obj.fixed64Value = Math.round(message.fixed64Value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramRelayAuthTicket_ExtraField>, I>>(
    base?: I,
  ): CMsgSteamDatagramRelayAuthTicket_ExtraField {
    return CMsgSteamDatagramRelayAuthTicket_ExtraField.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramRelayAuthTicket_ExtraField>, I>>(
    object: I,
  ): CMsgSteamDatagramRelayAuthTicket_ExtraField {
    const message = createBaseCMsgSteamDatagramRelayAuthTicket_ExtraField();
    message.name = object.name ?? "";
    message.stringValue = object.stringValue ?? "";
    message.int64Value = object.int64Value ?? 0;
    message.fixed64Value = object.fixed64Value ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramSignedRelayAuthTicket(): CMsgSteamDatagramSignedRelayAuthTicket {
  return { reservedDoNotUse: 0, ticket: Buffer.alloc(0), signature: Buffer.alloc(0), keyId: 0, certs: [] };
}

export const CMsgSteamDatagramSignedRelayAuthTicket = {
  encode(message: CMsgSteamDatagramSignedRelayAuthTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reservedDoNotUse !== 0) {
      writer.uint32(9).fixed64(message.reservedDoNotUse);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(26).bytes(message.ticket);
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.keyId !== 0) {
      writer.uint32(17).fixed64(message.keyId);
    }
    for (const v of message.certs) {
      CMsgSteamDatagramCertificateSigned.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSignedRelayAuthTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSignedRelayAuthTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservedDoNotUse = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.ticket = reader.bytes() as Buffer;
          break;
        case 4:
          message.signature = reader.bytes() as Buffer;
          break;
        case 2:
          message.keyId = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.certs.push(CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSignedRelayAuthTicket {
    return {
      reservedDoNotUse: isSet(object.reservedDoNotUse) ? Number(object.reservedDoNotUse) : 0,
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      keyId: isSet(object.keyId) ? Number(object.keyId) : 0,
      certs: Array.isArray(object?.certs)
        ? object.certs.map((e: any) => CMsgSteamDatagramCertificateSigned.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSteamDatagramSignedRelayAuthTicket): unknown {
    const obj: any = {};
    message.reservedDoNotUse !== undefined && (obj.reservedDoNotUse = Math.round(message.reservedDoNotUse));
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.keyId !== undefined && (obj.keyId = Math.round(message.keyId));
    if (message.certs) {
      obj.certs = message.certs.map((e) => e ? CMsgSteamDatagramCertificateSigned.toJSON(e) : undefined);
    } else {
      obj.certs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramSignedRelayAuthTicket>, I>>(
    base?: I,
  ): CMsgSteamDatagramSignedRelayAuthTicket {
    return CMsgSteamDatagramSignedRelayAuthTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramSignedRelayAuthTicket>, I>>(
    object: I,
  ): CMsgSteamDatagramSignedRelayAuthTicket {
    const message = createBaseCMsgSteamDatagramSignedRelayAuthTicket();
    message.reservedDoNotUse = object.reservedDoNotUse ?? 0;
    message.ticket = object.ticket ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.keyId = object.keyId ?? 0;
    message.certs = object.certs?.map((e) => CMsgSteamDatagramCertificateSigned.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSteamDatagramCachedCredentialsForApp(): CMsgSteamDatagramCachedCredentialsForApp {
  return { privateKey: Buffer.alloc(0), cert: Buffer.alloc(0), relayTickets: [] };
}

export const CMsgSteamDatagramCachedCredentialsForApp = {
  encode(message: CMsgSteamDatagramCachedCredentialsForApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privateKey.length !== 0) {
      writer.uint32(10).bytes(message.privateKey);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    for (const v of message.relayTickets) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramCachedCredentialsForApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramCachedCredentialsForApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateKey = reader.bytes() as Buffer;
          break;
        case 2:
          message.cert = reader.bytes() as Buffer;
          break;
        case 3:
          message.relayTickets.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramCachedCredentialsForApp {
    return {
      privateKey: isSet(object.privateKey) ? Buffer.from(bytesFromBase64(object.privateKey)) : Buffer.alloc(0),
      cert: isSet(object.cert) ? Buffer.from(bytesFromBase64(object.cert)) : Buffer.alloc(0),
      relayTickets: Array.isArray(object?.relayTickets)
        ? object.relayTickets.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
    };
  },

  toJSON(message: CMsgSteamDatagramCachedCredentialsForApp): unknown {
    const obj: any = {};
    message.privateKey !== undefined &&
      (obj.privateKey = base64FromBytes(message.privateKey !== undefined ? message.privateKey : Buffer.alloc(0)));
    message.cert !== undefined &&
      (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : Buffer.alloc(0)));
    if (message.relayTickets) {
      obj.relayTickets = message.relayTickets.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.relayTickets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramCachedCredentialsForApp>, I>>(
    base?: I,
  ): CMsgSteamDatagramCachedCredentialsForApp {
    return CMsgSteamDatagramCachedCredentialsForApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramCachedCredentialsForApp>, I>>(
    object: I,
  ): CMsgSteamDatagramCachedCredentialsForApp {
    const message = createBaseCMsgSteamDatagramCachedCredentialsForApp();
    message.privateKey = object.privateKey ?? Buffer.alloc(0);
    message.cert = object.cert ?? Buffer.alloc(0);
    message.relayTickets = object.relayTickets?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgSteamDatagramGameCoordinatorServerLogin(): CMsgSteamDatagramGameCoordinatorServerLogin {
  return {
    timeGenerated: 0,
    appid: 0,
    routing: Buffer.alloc(0),
    appdata: Buffer.alloc(0),
    legacyIdentityBinary: Buffer.alloc(0),
    identityString: "",
    dummySteamId: 0,
  };
}

export const CMsgSteamDatagramGameCoordinatorServerLogin = {
  encode(message: CMsgSteamDatagramGameCoordinatorServerLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeGenerated !== 0) {
      writer.uint32(8).uint32(message.timeGenerated);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.routing.length !== 0) {
      writer.uint32(26).bytes(message.routing);
    }
    if (message.appdata.length !== 0) {
      writer.uint32(34).bytes(message.appdata);
    }
    if (message.legacyIdentityBinary.length !== 0) {
      writer.uint32(42).bytes(message.legacyIdentityBinary);
    }
    if (message.identityString !== "") {
      writer.uint32(50).string(message.identityString);
    }
    if (message.dummySteamId !== 0) {
      writer.uint32(793).fixed64(message.dummySteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramGameCoordinatorServerLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramGameCoordinatorServerLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeGenerated = reader.uint32();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.routing = reader.bytes() as Buffer;
          break;
        case 4:
          message.appdata = reader.bytes() as Buffer;
          break;
        case 5:
          message.legacyIdentityBinary = reader.bytes() as Buffer;
          break;
        case 6:
          message.identityString = reader.string();
          break;
        case 99:
          message.dummySteamId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramGameCoordinatorServerLogin {
    return {
      timeGenerated: isSet(object.timeGenerated) ? Number(object.timeGenerated) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      routing: isSet(object.routing) ? Buffer.from(bytesFromBase64(object.routing)) : Buffer.alloc(0),
      appdata: isSet(object.appdata) ? Buffer.from(bytesFromBase64(object.appdata)) : Buffer.alloc(0),
      legacyIdentityBinary: isSet(object.legacyIdentityBinary)
        ? Buffer.from(bytesFromBase64(object.legacyIdentityBinary))
        : Buffer.alloc(0),
      identityString: isSet(object.identityString) ? String(object.identityString) : "",
      dummySteamId: isSet(object.dummySteamId) ? Number(object.dummySteamId) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramGameCoordinatorServerLogin): unknown {
    const obj: any = {};
    message.timeGenerated !== undefined && (obj.timeGenerated = Math.round(message.timeGenerated));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.routing !== undefined &&
      (obj.routing = base64FromBytes(message.routing !== undefined ? message.routing : Buffer.alloc(0)));
    message.appdata !== undefined &&
      (obj.appdata = base64FromBytes(message.appdata !== undefined ? message.appdata : Buffer.alloc(0)));
    message.legacyIdentityBinary !== undefined &&
      (obj.legacyIdentityBinary = base64FromBytes(
        message.legacyIdentityBinary !== undefined ? message.legacyIdentityBinary : Buffer.alloc(0),
      ));
    message.identityString !== undefined && (obj.identityString = message.identityString);
    message.dummySteamId !== undefined && (obj.dummySteamId = Math.round(message.dummySteamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramGameCoordinatorServerLogin>, I>>(
    base?: I,
  ): CMsgSteamDatagramGameCoordinatorServerLogin {
    return CMsgSteamDatagramGameCoordinatorServerLogin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramGameCoordinatorServerLogin>, I>>(
    object: I,
  ): CMsgSteamDatagramGameCoordinatorServerLogin {
    const message = createBaseCMsgSteamDatagramGameCoordinatorServerLogin();
    message.timeGenerated = object.timeGenerated ?? 0;
    message.appid = object.appid ?? 0;
    message.routing = object.routing ?? Buffer.alloc(0);
    message.appdata = object.appdata ?? Buffer.alloc(0);
    message.legacyIdentityBinary = object.legacyIdentityBinary ?? Buffer.alloc(0);
    message.identityString = object.identityString ?? "";
    message.dummySteamId = object.dummySteamId ?? 0;
    return message;
  },
};

function createBaseCMsgSteamDatagramSignedGameCoordinatorServerLogin(): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
  return { cert: undefined, login: Buffer.alloc(0), signature: Buffer.alloc(0) };
}

export const CMsgSteamDatagramSignedGameCoordinatorServerLogin = {
  encode(
    message: CMsgSteamDatagramSignedGameCoordinatorServerLogin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cert !== undefined) {
      CMsgSteamDatagramCertificateSigned.encode(message.cert, writer.uint32(10).fork()).ldelim();
    }
    if (message.login.length !== 0) {
      writer.uint32(18).bytes(message.login);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramSignedGameCoordinatorServerLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cert = CMsgSteamDatagramCertificateSigned.decode(reader, reader.uint32());
          break;
        case 2:
          message.login = reader.bytes() as Buffer;
          break;
        case 3:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    return {
      cert: isSet(object.cert) ? CMsgSteamDatagramCertificateSigned.fromJSON(object.cert) : undefined,
      login: isSet(object.login) ? Buffer.from(bytesFromBase64(object.login)) : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgSteamDatagramSignedGameCoordinatorServerLogin): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = message.cert ? CMsgSteamDatagramCertificateSigned.toJSON(message.cert) : undefined);
    message.login !== undefined &&
      (obj.login = base64FromBytes(message.login !== undefined ? message.login : Buffer.alloc(0)));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramSignedGameCoordinatorServerLogin>, I>>(
    base?: I,
  ): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    return CMsgSteamDatagramSignedGameCoordinatorServerLogin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramSignedGameCoordinatorServerLogin>, I>>(
    object: I,
  ): CMsgSteamDatagramSignedGameCoordinatorServerLogin {
    const message = createBaseCMsgSteamDatagramSignedGameCoordinatorServerLogin();
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? CMsgSteamDatagramCertificateSigned.fromPartial(object.cert)
      : undefined;
    message.login = object.login ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgSteamDatagramHostedServerAddressPlaintext(): CMsgSteamDatagramHostedServerAddressPlaintext {
  return { ipv4: 0, ipv6: Buffer.alloc(0), port: 0, routingSecret: 0, protocolVersion: 0 };
}

export const CMsgSteamDatagramHostedServerAddressPlaintext = {
  encode(message: CMsgSteamDatagramHostedServerAddressPlaintext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipv4 !== 0) {
      writer.uint32(13).fixed32(message.ipv4);
    }
    if (message.ipv6.length !== 0) {
      writer.uint32(18).bytes(message.ipv6);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.routingSecret !== 0) {
      writer.uint32(33).fixed64(message.routingSecret);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(40).uint32(message.protocolVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamDatagramHostedServerAddressPlaintext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamDatagramHostedServerAddressPlaintext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipv4 = reader.fixed32();
          break;
        case 2:
          message.ipv6 = reader.bytes() as Buffer;
          break;
        case 3:
          message.port = reader.uint32();
          break;
        case 4:
          message.routingSecret = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.protocolVersion = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamDatagramHostedServerAddressPlaintext {
    return {
      ipv4: isSet(object.ipv4) ? Number(object.ipv4) : 0,
      ipv6: isSet(object.ipv6) ? Buffer.from(bytesFromBase64(object.ipv6)) : Buffer.alloc(0),
      port: isSet(object.port) ? Number(object.port) : 0,
      routingSecret: isSet(object.routingSecret) ? Number(object.routingSecret) : 0,
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
    };
  },

  toJSON(message: CMsgSteamDatagramHostedServerAddressPlaintext): unknown {
    const obj: any = {};
    message.ipv4 !== undefined && (obj.ipv4 = Math.round(message.ipv4));
    message.ipv6 !== undefined &&
      (obj.ipv6 = base64FromBytes(message.ipv6 !== undefined ? message.ipv6 : Buffer.alloc(0)));
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.routingSecret !== undefined && (obj.routingSecret = Math.round(message.routingSecret));
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamDatagramHostedServerAddressPlaintext>, I>>(
    base?: I,
  ): CMsgSteamDatagramHostedServerAddressPlaintext {
    return CMsgSteamDatagramHostedServerAddressPlaintext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamDatagramHostedServerAddressPlaintext>, I>>(
    object: I,
  ): CMsgSteamDatagramHostedServerAddressPlaintext {
    const message = createBaseCMsgSteamDatagramHostedServerAddressPlaintext();
    message.ipv4 = object.ipv4 ?? 0;
    message.ipv6 = object.ipv6 ?? Buffer.alloc(0);
    message.port = object.port ?? 0;
    message.routingSecret = object.routingSecret ?? 0;
    message.protocolVersion = object.protocolVersion ?? 0;
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
