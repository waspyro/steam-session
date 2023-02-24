/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export interface CMsgGSServerType {
  appIdServed: number;
  flags: number;
  deprecatedGameIpAddress: number;
  gamePort: number;
  gameDir: string;
  gameVersion: string;
  gameQueryPort: number;
  gamePortLocal: number;
  sdrLogon: Buffer;
  fakeIp: number;
}

export interface CMsgGSStatusReply {
  isSecure: boolean;
}

export interface CMsgGSPlayerList {
  players: CMsgGSPlayerList_Player[];
}

export interface CMsgGSPlayerList_Player {
  steamId: number;
  deprecatedPublicIp: number;
  token: Buffer;
  publicIp: CMsgIPAddress | undefined;
}

export interface CMsgGSUserPlaying {
  steamId: number;
  deprecatedPublicIp: number;
  token: Buffer;
  publicIp: CMsgIPAddress | undefined;
}

export interface CMsgGSDisconnectNotice {
  steamId: number;
}

export interface CMsgGameServerData {
  revision: number;
  queryPort: number;
  gamePort: number;
  spectatorPort: number;
  serverName: string;
  gameDescription: string;
  spectatorServerName: string;
  fakeIp: number;
  sdrPingLocation: string;
  appId: number;
  gamedir: string;
  version: string;
  product: string;
  region: string;
  players: CMsgGameServerData_Player[];
  maxPlayers: number;
  botCount: number;
  password: boolean;
  secure: boolean;
  dedicated: boolean;
  os: string;
  gameData: string;
  gameType: string;
  map: string;
}

export interface CMsgGameServerData_Player {
  steamId: number;
}

export interface CMsgGameServerRemove {
  legacySteamIdGs: number;
  legacyQueryPort: number;
}

export interface CMsgClientGMSServerQuery {
  appId: number;
  geoLocationIp: number;
  regionCode: number;
  filterText: string;
  maxServers: number;
}

export interface CMsgGMSClientServerQueryResponse {
  servers: CMsgGMSClientServerQueryResponse_Server[];
  error: string;
  defaultServerData: CMsgGMSClientServerQueryResponse_Server | undefined;
  serverStrings: string[];
}

export enum CMsgGMSClientServerQueryResponse_EFlags {
  k_EFlag_HasPassword = 1,
  k_EFlag_Secure = 2,
  UNRECOGNIZED = -1,
}

export function cMsgGMSClientServerQueryResponse_EFlagsFromJSON(object: any): CMsgGMSClientServerQueryResponse_EFlags {
  switch (object) {
    case 1:
    case "k_EFlag_HasPassword":
      return CMsgGMSClientServerQueryResponse_EFlags.k_EFlag_HasPassword;
    case 2:
    case "k_EFlag_Secure":
      return CMsgGMSClientServerQueryResponse_EFlags.k_EFlag_Secure;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CMsgGMSClientServerQueryResponse_EFlags.UNRECOGNIZED;
  }
}

export function cMsgGMSClientServerQueryResponse_EFlagsToJSON(object: CMsgGMSClientServerQueryResponse_EFlags): string {
  switch (object) {
    case CMsgGMSClientServerQueryResponse_EFlags.k_EFlag_HasPassword:
      return "k_EFlag_HasPassword";
    case CMsgGMSClientServerQueryResponse_EFlags.k_EFlag_Secure:
      return "k_EFlag_Secure";
    case CMsgGMSClientServerQueryResponse_EFlags.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgGMSClientServerQueryResponse_Server {
  deprecatedServerIp: number;
  queryPort: number;
  authPlayers: number;
  serverIp: CMsgIPAddress | undefined;
  steamId: number;
  revision: number;
  players: number;
  gamePort: number;
  sdrPopid: number;
  sdrPingLocation: string;
  flags: number;
  appId: number;
  maxPlayers: number;
  bots: number;
  spectatorPort: number;
  gamedirStr: string;
  gamedirStrindex: number;
  mapStr: string;
  mapStrindex: number;
  nameStr: string;
  nameStrindex: number;
  gameDescriptionStr: string;
  gameDescriptionStrindex: number;
  versionStr: string;
  versionStrindex: number;
  gametypeStr: string;
  gametypeStrindex: number;
  spectatorNameStr: string;
  spectatorNameStrindex: number;
}

export interface CMsgGameServerOutOfDate {
  steamIdGs: number;
  reject: boolean;
  message: string;
}

export interface CMsgGSAssociateWithClan {
  steamIdClan: number;
}

export interface CMsgGSAssociateWithClanResponse {
  steamIdClan: number;
  eresult: number;
}

export interface CMsgGSComputeNewPlayerCompatibility {
  steamIdCandidate: number;
}

export interface CMsgGSComputeNewPlayerCompatibilityResponse {
  steamIdCandidate: number;
  eresult: number;
  isClanMember: boolean;
  ctDontLikeYou: number;
  ctYouDontLike: number;
  ctClanmembersDontLikeYou: number;
}

function createBaseCMsgGSServerType(): CMsgGSServerType {
  return {
    appIdServed: 0,
    flags: 0,
    deprecatedGameIpAddress: 0,
    gamePort: 0,
    gameDir: "",
    gameVersion: "",
    gameQueryPort: 0,
    gamePortLocal: 0,
    sdrLogon: Buffer.alloc(0),
    fakeIp: 0,
  };
}

export const CMsgGSServerType = {
  encode(message: CMsgGSServerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appIdServed !== 0) {
      writer.uint32(8).uint32(message.appIdServed);
    }
    if (message.flags !== 0) {
      writer.uint32(16).uint32(message.flags);
    }
    if (message.deprecatedGameIpAddress !== 0) {
      writer.uint32(24).uint32(message.deprecatedGameIpAddress);
    }
    if (message.gamePort !== 0) {
      writer.uint32(32).uint32(message.gamePort);
    }
    if (message.gameDir !== "") {
      writer.uint32(42).string(message.gameDir);
    }
    if (message.gameVersion !== "") {
      writer.uint32(50).string(message.gameVersion);
    }
    if (message.gameQueryPort !== 0) {
      writer.uint32(56).uint32(message.gameQueryPort);
    }
    if (message.gamePortLocal !== 0) {
      writer.uint32(80).uint32(message.gamePortLocal);
    }
    if (message.sdrLogon.length !== 0) {
      writer.uint32(66).bytes(message.sdrLogon);
    }
    if (message.fakeIp !== 0) {
      writer.uint32(77).fixed32(message.fakeIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSServerType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSServerType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appIdServed = reader.uint32();
          break;
        case 2:
          message.flags = reader.uint32();
          break;
        case 3:
          message.deprecatedGameIpAddress = reader.uint32();
          break;
        case 4:
          message.gamePort = reader.uint32();
          break;
        case 5:
          message.gameDir = reader.string();
          break;
        case 6:
          message.gameVersion = reader.string();
          break;
        case 7:
          message.gameQueryPort = reader.uint32();
          break;
        case 10:
          message.gamePortLocal = reader.uint32();
          break;
        case 8:
          message.sdrLogon = reader.bytes() as Buffer;
          break;
        case 9:
          message.fakeIp = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSServerType {
    return {
      appIdServed: isSet(object.appIdServed) ? Number(object.appIdServed) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      deprecatedGameIpAddress: isSet(object.deprecatedGameIpAddress) ? Number(object.deprecatedGameIpAddress) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      gameDir: isSet(object.gameDir) ? String(object.gameDir) : "",
      gameVersion: isSet(object.gameVersion) ? String(object.gameVersion) : "",
      gameQueryPort: isSet(object.gameQueryPort) ? Number(object.gameQueryPort) : 0,
      gamePortLocal: isSet(object.gamePortLocal) ? Number(object.gamePortLocal) : 0,
      sdrLogon: isSet(object.sdrLogon) ? Buffer.from(bytesFromBase64(object.sdrLogon)) : Buffer.alloc(0),
      fakeIp: isSet(object.fakeIp) ? Number(object.fakeIp) : 0,
    };
  },

  toJSON(message: CMsgGSServerType): unknown {
    const obj: any = {};
    message.appIdServed !== undefined && (obj.appIdServed = Math.round(message.appIdServed));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.deprecatedGameIpAddress !== undefined &&
      (obj.deprecatedGameIpAddress = Math.round(message.deprecatedGameIpAddress));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.gameDir !== undefined && (obj.gameDir = message.gameDir);
    message.gameVersion !== undefined && (obj.gameVersion = message.gameVersion);
    message.gameQueryPort !== undefined && (obj.gameQueryPort = Math.round(message.gameQueryPort));
    message.gamePortLocal !== undefined && (obj.gamePortLocal = Math.round(message.gamePortLocal));
    message.sdrLogon !== undefined &&
      (obj.sdrLogon = base64FromBytes(message.sdrLogon !== undefined ? message.sdrLogon : Buffer.alloc(0)));
    message.fakeIp !== undefined && (obj.fakeIp = Math.round(message.fakeIp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSServerType>, I>>(base?: I): CMsgGSServerType {
    return CMsgGSServerType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSServerType>, I>>(object: I): CMsgGSServerType {
    const message = createBaseCMsgGSServerType();
    message.appIdServed = object.appIdServed ?? 0;
    message.flags = object.flags ?? 0;
    message.deprecatedGameIpAddress = object.deprecatedGameIpAddress ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.gameDir = object.gameDir ?? "";
    message.gameVersion = object.gameVersion ?? "";
    message.gameQueryPort = object.gameQueryPort ?? 0;
    message.gamePortLocal = object.gamePortLocal ?? 0;
    message.sdrLogon = object.sdrLogon ?? Buffer.alloc(0);
    message.fakeIp = object.fakeIp ?? 0;
    return message;
  },
};

function createBaseCMsgGSStatusReply(): CMsgGSStatusReply {
  return { isSecure: false };
}

export const CMsgGSStatusReply = {
  encode(message: CMsgGSStatusReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSecure === true) {
      writer.uint32(8).bool(message.isSecure);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSStatusReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSStatusReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSecure = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSStatusReply {
    return { isSecure: isSet(object.isSecure) ? Boolean(object.isSecure) : false };
  },

  toJSON(message: CMsgGSStatusReply): unknown {
    const obj: any = {};
    message.isSecure !== undefined && (obj.isSecure = message.isSecure);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSStatusReply>, I>>(base?: I): CMsgGSStatusReply {
    return CMsgGSStatusReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSStatusReply>, I>>(object: I): CMsgGSStatusReply {
    const message = createBaseCMsgGSStatusReply();
    message.isSecure = object.isSecure ?? false;
    return message;
  },
};

function createBaseCMsgGSPlayerList(): CMsgGSPlayerList {
  return { players: [] };
}

export const CMsgGSPlayerList = {
  encode(message: CMsgGSPlayerList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgGSPlayerList_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSPlayerList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSPlayerList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(CMsgGSPlayerList_Player.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSPlayerList {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgGSPlayerList_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGSPlayerList): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgGSPlayerList_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSPlayerList>, I>>(base?: I): CMsgGSPlayerList {
    return CMsgGSPlayerList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSPlayerList>, I>>(object: I): CMsgGSPlayerList {
    const message = createBaseCMsgGSPlayerList();
    message.players = object.players?.map((e) => CMsgGSPlayerList_Player.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgGSPlayerList_Player(): CMsgGSPlayerList_Player {
  return { steamId: 0, deprecatedPublicIp: 0, token: Buffer.alloc(0), publicIp: undefined };
}

export const CMsgGSPlayerList_Player = {
  encode(message: CMsgGSPlayerList_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(8).uint64(message.steamId);
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(16).uint32(message.deprecatedPublicIp);
    }
    if (message.token.length !== 0) {
      writer.uint32(26).bytes(message.token);
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSPlayerList_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSPlayerList_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.deprecatedPublicIp = reader.uint32();
          break;
        case 3:
          message.token = reader.bytes() as Buffer;
          break;
        case 4:
          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSPlayerList_Player {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
    };
  },

  toJSON(message: CMsgGSPlayerList_Player): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSPlayerList_Player>, I>>(base?: I): CMsgGSPlayerList_Player {
    return CMsgGSPlayerList_Player.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSPlayerList_Player>, I>>(object: I): CMsgGSPlayerList_Player {
    const message = createBaseCMsgGSPlayerList_Player();
    message.steamId = object.steamId ?? 0;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.token = object.token ?? Buffer.alloc(0);
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgGSUserPlaying(): CMsgGSUserPlaying {
  return { steamId: 0, deprecatedPublicIp: 0, token: Buffer.alloc(0), publicIp: undefined };
}

export const CMsgGSUserPlaying = {
  encode(message: CMsgGSUserPlaying, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(16).uint32(message.deprecatedPublicIp);
    }
    if (message.token.length !== 0) {
      writer.uint32(26).bytes(message.token);
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSUserPlaying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSUserPlaying();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.deprecatedPublicIp = reader.uint32();
          break;
        case 3:
          message.token = reader.bytes() as Buffer;
          break;
        case 4:
          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSUserPlaying {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
    };
  },

  toJSON(message: CMsgGSUserPlaying): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSUserPlaying>, I>>(base?: I): CMsgGSUserPlaying {
    return CMsgGSUserPlaying.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSUserPlaying>, I>>(object: I): CMsgGSUserPlaying {
    const message = createBaseCMsgGSUserPlaying();
    message.steamId = object.steamId ?? 0;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.token = object.token ?? Buffer.alloc(0);
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgGSDisconnectNotice(): CMsgGSDisconnectNotice {
  return { steamId: 0 };
}

export const CMsgGSDisconnectNotice = {
  encode(message: CMsgGSDisconnectNotice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSDisconnectNotice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSDisconnectNotice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSDisconnectNotice {
    return { steamId: isSet(object.steamId) ? Number(object.steamId) : 0 };
  },

  toJSON(message: CMsgGSDisconnectNotice): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSDisconnectNotice>, I>>(base?: I): CMsgGSDisconnectNotice {
    return CMsgGSDisconnectNotice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSDisconnectNotice>, I>>(object: I): CMsgGSDisconnectNotice {
    const message = createBaseCMsgGSDisconnectNotice();
    message.steamId = object.steamId ?? 0;
    return message;
  },
};

function createBaseCMsgGameServerData(): CMsgGameServerData {
  return {
    revision: 0,
    queryPort: 0,
    gamePort: 0,
    spectatorPort: 0,
    serverName: "",
    gameDescription: "",
    spectatorServerName: "",
    fakeIp: 0,
    sdrPingLocation: "",
    appId: 0,
    gamedir: "",
    version: "",
    product: "",
    region: "",
    players: [],
    maxPlayers: 0,
    botCount: 0,
    password: false,
    secure: false,
    dedicated: false,
    os: "",
    gameData: "",
    gameType: "",
    map: "",
  };
}

export const CMsgGameServerData = {
  encode(message: CMsgGameServerData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revision !== 0) {
      writer.uint32(192).uint32(message.revision);
    }
    if (message.queryPort !== 0) {
      writer.uint32(24).uint32(message.queryPort);
    }
    if (message.gamePort !== 0) {
      writer.uint32(32).uint32(message.gamePort);
    }
    if (message.spectatorPort !== 0) {
      writer.uint32(40).uint32(message.spectatorPort);
    }
    if (message.serverName !== "") {
      writer.uint32(178).string(message.serverName);
    }
    if (message.gameDescription !== "") {
      writer.uint32(234).string(message.gameDescription);
    }
    if (message.spectatorServerName !== "") {
      writer.uint32(218).string(message.spectatorServerName);
    }
    if (message.fakeIp !== 0) {
      writer.uint32(229).fixed32(message.fakeIp);
    }
    if (message.sdrPingLocation !== "") {
      writer.uint32(242).string(message.sdrPingLocation);
    }
    if (message.appId !== 0) {
      writer.uint32(48).uint32(message.appId);
    }
    if (message.gamedir !== "") {
      writer.uint32(58).string(message.gamedir);
    }
    if (message.version !== "") {
      writer.uint32(66).string(message.version);
    }
    if (message.product !== "") {
      writer.uint32(74).string(message.product);
    }
    if (message.region !== "") {
      writer.uint32(82).string(message.region);
    }
    for (const v of message.players) {
      CMsgGameServerData_Player.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.maxPlayers !== 0) {
      writer.uint32(96).uint32(message.maxPlayers);
    }
    if (message.botCount !== 0) {
      writer.uint32(104).uint32(message.botCount);
    }
    if (message.password === true) {
      writer.uint32(112).bool(message.password);
    }
    if (message.secure === true) {
      writer.uint32(120).bool(message.secure);
    }
    if (message.dedicated === true) {
      writer.uint32(128).bool(message.dedicated);
    }
    if (message.os !== "") {
      writer.uint32(138).string(message.os);
    }
    if (message.gameData !== "") {
      writer.uint32(146).string(message.gameData);
    }
    if (message.gameType !== "") {
      writer.uint32(162).string(message.gameType);
    }
    if (message.map !== "") {
      writer.uint32(170).string(message.map);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 24:
          message.revision = reader.uint32();
          break;
        case 3:
          message.queryPort = reader.uint32();
          break;
        case 4:
          message.gamePort = reader.uint32();
          break;
        case 5:
          message.spectatorPort = reader.uint32();
          break;
        case 22:
          message.serverName = reader.string();
          break;
        case 29:
          message.gameDescription = reader.string();
          break;
        case 27:
          message.spectatorServerName = reader.string();
          break;
        case 28:
          message.fakeIp = reader.fixed32();
          break;
        case 30:
          message.sdrPingLocation = reader.string();
          break;
        case 6:
          message.appId = reader.uint32();
          break;
        case 7:
          message.gamedir = reader.string();
          break;
        case 8:
          message.version = reader.string();
          break;
        case 9:
          message.product = reader.string();
          break;
        case 10:
          message.region = reader.string();
          break;
        case 11:
          message.players.push(CMsgGameServerData_Player.decode(reader, reader.uint32()));
          break;
        case 12:
          message.maxPlayers = reader.uint32();
          break;
        case 13:
          message.botCount = reader.uint32();
          break;
        case 14:
          message.password = reader.bool();
          break;
        case 15:
          message.secure = reader.bool();
          break;
        case 16:
          message.dedicated = reader.bool();
          break;
        case 17:
          message.os = reader.string();
          break;
        case 18:
          message.gameData = reader.string();
          break;
        case 20:
          message.gameType = reader.string();
          break;
        case 21:
          message.map = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerData {
    return {
      revision: isSet(object.revision) ? Number(object.revision) : 0,
      queryPort: isSet(object.queryPort) ? Number(object.queryPort) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      spectatorPort: isSet(object.spectatorPort) ? Number(object.spectatorPort) : 0,
      serverName: isSet(object.serverName) ? String(object.serverName) : "",
      gameDescription: isSet(object.gameDescription) ? String(object.gameDescription) : "",
      spectatorServerName: isSet(object.spectatorServerName) ? String(object.spectatorServerName) : "",
      fakeIp: isSet(object.fakeIp) ? Number(object.fakeIp) : 0,
      sdrPingLocation: isSet(object.sdrPingLocation) ? String(object.sdrPingLocation) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      gamedir: isSet(object.gamedir) ? String(object.gamedir) : "",
      version: isSet(object.version) ? String(object.version) : "",
      product: isSet(object.product) ? String(object.product) : "",
      region: isSet(object.region) ? String(object.region) : "",
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgGameServerData_Player.fromJSON(e))
        : [],
      maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
      botCount: isSet(object.botCount) ? Number(object.botCount) : 0,
      password: isSet(object.password) ? Boolean(object.password) : false,
      secure: isSet(object.secure) ? Boolean(object.secure) : false,
      dedicated: isSet(object.dedicated) ? Boolean(object.dedicated) : false,
      os: isSet(object.os) ? String(object.os) : "",
      gameData: isSet(object.gameData) ? String(object.gameData) : "",
      gameType: isSet(object.gameType) ? String(object.gameType) : "",
      map: isSet(object.map) ? String(object.map) : "",
    };
  },

  toJSON(message: CMsgGameServerData): unknown {
    const obj: any = {};
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    message.queryPort !== undefined && (obj.queryPort = Math.round(message.queryPort));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.spectatorPort !== undefined && (obj.spectatorPort = Math.round(message.spectatorPort));
    message.serverName !== undefined && (obj.serverName = message.serverName);
    message.gameDescription !== undefined && (obj.gameDescription = message.gameDescription);
    message.spectatorServerName !== undefined && (obj.spectatorServerName = message.spectatorServerName);
    message.fakeIp !== undefined && (obj.fakeIp = Math.round(message.fakeIp));
    message.sdrPingLocation !== undefined && (obj.sdrPingLocation = message.sdrPingLocation);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.gamedir !== undefined && (obj.gamedir = message.gamedir);
    message.version !== undefined && (obj.version = message.version);
    message.product !== undefined && (obj.product = message.product);
    message.region !== undefined && (obj.region = message.region);
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgGameServerData_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
    message.botCount !== undefined && (obj.botCount = Math.round(message.botCount));
    message.password !== undefined && (obj.password = message.password);
    message.secure !== undefined && (obj.secure = message.secure);
    message.dedicated !== undefined && (obj.dedicated = message.dedicated);
    message.os !== undefined && (obj.os = message.os);
    message.gameData !== undefined && (obj.gameData = message.gameData);
    message.gameType !== undefined && (obj.gameType = message.gameType);
    message.map !== undefined && (obj.map = message.map);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerData>, I>>(base?: I): CMsgGameServerData {
    return CMsgGameServerData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerData>, I>>(object: I): CMsgGameServerData {
    const message = createBaseCMsgGameServerData();
    message.revision = object.revision ?? 0;
    message.queryPort = object.queryPort ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.spectatorPort = object.spectatorPort ?? 0;
    message.serverName = object.serverName ?? "";
    message.gameDescription = object.gameDescription ?? "";
    message.spectatorServerName = object.spectatorServerName ?? "";
    message.fakeIp = object.fakeIp ?? 0;
    message.sdrPingLocation = object.sdrPingLocation ?? "";
    message.appId = object.appId ?? 0;
    message.gamedir = object.gamedir ?? "";
    message.version = object.version ?? "";
    message.product = object.product ?? "";
    message.region = object.region ?? "";
    message.players = object.players?.map((e) => CMsgGameServerData_Player.fromPartial(e)) || [];
    message.maxPlayers = object.maxPlayers ?? 0;
    message.botCount = object.botCount ?? 0;
    message.password = object.password ?? false;
    message.secure = object.secure ?? false;
    message.dedicated = object.dedicated ?? false;
    message.os = object.os ?? "";
    message.gameData = object.gameData ?? "";
    message.gameType = object.gameType ?? "";
    message.map = object.map ?? "";
    return message;
  },
};

function createBaseCMsgGameServerData_Player(): CMsgGameServerData_Player {
  return { steamId: 0 };
}

export const CMsgGameServerData_Player = {
  encode(message: CMsgGameServerData_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerData_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerData_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerData_Player {
    return { steamId: isSet(object.steamId) ? Number(object.steamId) : 0 };
  },

  toJSON(message: CMsgGameServerData_Player): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerData_Player>, I>>(base?: I): CMsgGameServerData_Player {
    return CMsgGameServerData_Player.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerData_Player>, I>>(object: I): CMsgGameServerData_Player {
    const message = createBaseCMsgGameServerData_Player();
    message.steamId = object.steamId ?? 0;
    return message;
  },
};

function createBaseCMsgGameServerRemove(): CMsgGameServerRemove {
  return { legacySteamIdGs: 0, legacyQueryPort: 0 };
}

export const CMsgGameServerRemove = {
  encode(message: CMsgGameServerRemove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacySteamIdGs !== 0) {
      writer.uint32(9).fixed64(message.legacySteamIdGs);
    }
    if (message.legacyQueryPort !== 0) {
      writer.uint32(24).uint32(message.legacyQueryPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerRemove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacySteamIdGs = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.legacyQueryPort = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerRemove {
    return {
      legacySteamIdGs: isSet(object.legacySteamIdGs) ? Number(object.legacySteamIdGs) : 0,
      legacyQueryPort: isSet(object.legacyQueryPort) ? Number(object.legacyQueryPort) : 0,
    };
  },

  toJSON(message: CMsgGameServerRemove): unknown {
    const obj: any = {};
    message.legacySteamIdGs !== undefined && (obj.legacySteamIdGs = Math.round(message.legacySteamIdGs));
    message.legacyQueryPort !== undefined && (obj.legacyQueryPort = Math.round(message.legacyQueryPort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerRemove>, I>>(base?: I): CMsgGameServerRemove {
    return CMsgGameServerRemove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerRemove>, I>>(object: I): CMsgGameServerRemove {
    const message = createBaseCMsgGameServerRemove();
    message.legacySteamIdGs = object.legacySteamIdGs ?? 0;
    message.legacyQueryPort = object.legacyQueryPort ?? 0;
    return message;
  },
};

function createBaseCMsgClientGMSServerQuery(): CMsgClientGMSServerQuery {
  return { appId: 0, geoLocationIp: 0, regionCode: 0, filterText: "", maxServers: 0 };
}

export const CMsgClientGMSServerQuery = {
  encode(message: CMsgClientGMSServerQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.geoLocationIp !== 0) {
      writer.uint32(16).uint32(message.geoLocationIp);
    }
    if (message.regionCode !== 0) {
      writer.uint32(24).uint32(message.regionCode);
    }
    if (message.filterText !== "") {
      writer.uint32(34).string(message.filterText);
    }
    if (message.maxServers !== 0) {
      writer.uint32(40).uint32(message.maxServers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGMSServerQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGMSServerQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.geoLocationIp = reader.uint32();
          break;
        case 3:
          message.regionCode = reader.uint32();
          break;
        case 4:
          message.filterText = reader.string();
          break;
        case 5:
          message.maxServers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGMSServerQuery {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      geoLocationIp: isSet(object.geoLocationIp) ? Number(object.geoLocationIp) : 0,
      regionCode: isSet(object.regionCode) ? Number(object.regionCode) : 0,
      filterText: isSet(object.filterText) ? String(object.filterText) : "",
      maxServers: isSet(object.maxServers) ? Number(object.maxServers) : 0,
    };
  },

  toJSON(message: CMsgClientGMSServerQuery): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.geoLocationIp !== undefined && (obj.geoLocationIp = Math.round(message.geoLocationIp));
    message.regionCode !== undefined && (obj.regionCode = Math.round(message.regionCode));
    message.filterText !== undefined && (obj.filterText = message.filterText);
    message.maxServers !== undefined && (obj.maxServers = Math.round(message.maxServers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGMSServerQuery>, I>>(base?: I): CMsgClientGMSServerQuery {
    return CMsgClientGMSServerQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGMSServerQuery>, I>>(object: I): CMsgClientGMSServerQuery {
    const message = createBaseCMsgClientGMSServerQuery();
    message.appId = object.appId ?? 0;
    message.geoLocationIp = object.geoLocationIp ?? 0;
    message.regionCode = object.regionCode ?? 0;
    message.filterText = object.filterText ?? "";
    message.maxServers = object.maxServers ?? 0;
    return message;
  },
};

function createBaseCMsgGMSClientServerQueryResponse(): CMsgGMSClientServerQueryResponse {
  return { servers: [], error: "", defaultServerData: undefined, serverStrings: [] };
}

export const CMsgGMSClientServerQueryResponse = {
  encode(message: CMsgGMSClientServerQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      CMsgGMSClientServerQueryResponse_Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.defaultServerData !== undefined) {
      CMsgGMSClientServerQueryResponse_Server.encode(message.defaultServerData, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.serverStrings) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGMSClientServerQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGMSClientServerQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servers.push(CMsgGMSClientServerQueryResponse_Server.decode(reader, reader.uint32()));
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.defaultServerData = CMsgGMSClientServerQueryResponse_Server.decode(reader, reader.uint32());
          break;
        case 4:
          message.serverStrings.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGMSClientServerQueryResponse {
    return {
      servers: Array.isArray(object?.servers)
        ? object.servers.map((e: any) => CMsgGMSClientServerQueryResponse_Server.fromJSON(e))
        : [],
      error: isSet(object.error) ? String(object.error) : "",
      defaultServerData: isSet(object.defaultServerData)
        ? CMsgGMSClientServerQueryResponse_Server.fromJSON(object.defaultServerData)
        : undefined,
      serverStrings: Array.isArray(object?.serverStrings) ? object.serverStrings.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgGMSClientServerQueryResponse): unknown {
    const obj: any = {};
    if (message.servers) {
      obj.servers = message.servers.map((e) => e ? CMsgGMSClientServerQueryResponse_Server.toJSON(e) : undefined);
    } else {
      obj.servers = [];
    }
    message.error !== undefined && (obj.error = message.error);
    message.defaultServerData !== undefined && (obj.defaultServerData = message.defaultServerData
      ? CMsgGMSClientServerQueryResponse_Server.toJSON(message.defaultServerData)
      : undefined);
    if (message.serverStrings) {
      obj.serverStrings = message.serverStrings.map((e) => e);
    } else {
      obj.serverStrings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGMSClientServerQueryResponse>, I>>(
    base?: I,
  ): CMsgGMSClientServerQueryResponse {
    return CMsgGMSClientServerQueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGMSClientServerQueryResponse>, I>>(
    object: I,
  ): CMsgGMSClientServerQueryResponse {
    const message = createBaseCMsgGMSClientServerQueryResponse();
    message.servers = object.servers?.map((e) => CMsgGMSClientServerQueryResponse_Server.fromPartial(e)) || [];
    message.error = object.error ?? "";
    message.defaultServerData = (object.defaultServerData !== undefined && object.defaultServerData !== null)
      ? CMsgGMSClientServerQueryResponse_Server.fromPartial(object.defaultServerData)
      : undefined;
    message.serverStrings = object.serverStrings?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgGMSClientServerQueryResponse_Server(): CMsgGMSClientServerQueryResponse_Server {
  return {
    deprecatedServerIp: 0,
    queryPort: 0,
    authPlayers: 0,
    serverIp: undefined,
    steamId: 0,
    revision: 0,
    players: 0,
    gamePort: 0,
    sdrPopid: 0,
    sdrPingLocation: "",
    flags: 0,
    appId: 0,
    maxPlayers: 0,
    bots: 0,
    spectatorPort: 0,
    gamedirStr: "",
    gamedirStrindex: 0,
    mapStr: "",
    mapStrindex: 0,
    nameStr: "",
    nameStrindex: 0,
    gameDescriptionStr: "",
    gameDescriptionStrindex: 0,
    versionStr: "",
    versionStrindex: 0,
    gametypeStr: "",
    gametypeStrindex: 0,
    spectatorNameStr: "",
    spectatorNameStrindex: 0,
  };
}

export const CMsgGMSClientServerQueryResponse_Server = {
  encode(message: CMsgGMSClientServerQueryResponse_Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecatedServerIp !== 0) {
      writer.uint32(8).uint32(message.deprecatedServerIp);
    }
    if (message.queryPort !== 0) {
      writer.uint32(16).uint32(message.queryPort);
    }
    if (message.authPlayers !== 0) {
      writer.uint32(24).uint32(message.authPlayers);
    }
    if (message.serverIp !== undefined) {
      CMsgIPAddress.encode(message.serverIp, writer.uint32(34).fork()).ldelim();
    }
    if (message.steamId !== 0) {
      writer.uint32(49).fixed64(message.steamId);
    }
    if (message.revision !== 0) {
      writer.uint32(56).uint32(message.revision);
    }
    if (message.players !== 0) {
      writer.uint32(64).uint32(message.players);
    }
    if (message.gamePort !== 0) {
      writer.uint32(72).uint32(message.gamePort);
    }
    if (message.sdrPopid !== 0) {
      writer.uint32(85).fixed32(message.sdrPopid);
    }
    if (message.sdrPingLocation !== "") {
      writer.uint32(258).string(message.sdrPingLocation);
    }
    if (message.flags !== 0) {
      writer.uint32(88).uint32(message.flags);
    }
    if (message.appId !== 0) {
      writer.uint32(96).uint32(message.appId);
    }
    if (message.maxPlayers !== 0) {
      writer.uint32(104).uint32(message.maxPlayers);
    }
    if (message.bots !== 0) {
      writer.uint32(112).uint32(message.bots);
    }
    if (message.spectatorPort !== 0) {
      writer.uint32(120).uint32(message.spectatorPort);
    }
    if (message.gamedirStr !== "") {
      writer.uint32(130).string(message.gamedirStr);
    }
    if (message.gamedirStrindex !== 0) {
      writer.uint32(136).uint32(message.gamedirStrindex);
    }
    if (message.mapStr !== "") {
      writer.uint32(146).string(message.mapStr);
    }
    if (message.mapStrindex !== 0) {
      writer.uint32(152).uint32(message.mapStrindex);
    }
    if (message.nameStr !== "") {
      writer.uint32(162).string(message.nameStr);
    }
    if (message.nameStrindex !== 0) {
      writer.uint32(168).uint32(message.nameStrindex);
    }
    if (message.gameDescriptionStr !== "") {
      writer.uint32(178).string(message.gameDescriptionStr);
    }
    if (message.gameDescriptionStrindex !== 0) {
      writer.uint32(184).uint32(message.gameDescriptionStrindex);
    }
    if (message.versionStr !== "") {
      writer.uint32(194).string(message.versionStr);
    }
    if (message.versionStrindex !== 0) {
      writer.uint32(200).uint32(message.versionStrindex);
    }
    if (message.gametypeStr !== "") {
      writer.uint32(210).string(message.gametypeStr);
    }
    if (message.gametypeStrindex !== 0) {
      writer.uint32(216).uint32(message.gametypeStrindex);
    }
    if (message.spectatorNameStr !== "") {
      writer.uint32(242).string(message.spectatorNameStr);
    }
    if (message.spectatorNameStrindex !== 0) {
      writer.uint32(248).uint32(message.spectatorNameStrindex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGMSClientServerQueryResponse_Server {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGMSClientServerQueryResponse_Server();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deprecatedServerIp = reader.uint32();
          break;
        case 2:
          message.queryPort = reader.uint32();
          break;
        case 3:
          message.authPlayers = reader.uint32();
          break;
        case 4:
          message.serverIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 6:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        case 7:
          message.revision = reader.uint32();
          break;
        case 8:
          message.players = reader.uint32();
          break;
        case 9:
          message.gamePort = reader.uint32();
          break;
        case 10:
          message.sdrPopid = reader.fixed32();
          break;
        case 32:
          message.sdrPingLocation = reader.string();
          break;
        case 11:
          message.flags = reader.uint32();
          break;
        case 12:
          message.appId = reader.uint32();
          break;
        case 13:
          message.maxPlayers = reader.uint32();
          break;
        case 14:
          message.bots = reader.uint32();
          break;
        case 15:
          message.spectatorPort = reader.uint32();
          break;
        case 16:
          message.gamedirStr = reader.string();
          break;
        case 17:
          message.gamedirStrindex = reader.uint32();
          break;
        case 18:
          message.mapStr = reader.string();
          break;
        case 19:
          message.mapStrindex = reader.uint32();
          break;
        case 20:
          message.nameStr = reader.string();
          break;
        case 21:
          message.nameStrindex = reader.uint32();
          break;
        case 22:
          message.gameDescriptionStr = reader.string();
          break;
        case 23:
          message.gameDescriptionStrindex = reader.uint32();
          break;
        case 24:
          message.versionStr = reader.string();
          break;
        case 25:
          message.versionStrindex = reader.uint32();
          break;
        case 26:
          message.gametypeStr = reader.string();
          break;
        case 27:
          message.gametypeStrindex = reader.uint32();
          break;
        case 30:
          message.spectatorNameStr = reader.string();
          break;
        case 31:
          message.spectatorNameStrindex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGMSClientServerQueryResponse_Server {
    return {
      deprecatedServerIp: isSet(object.deprecatedServerIp) ? Number(object.deprecatedServerIp) : 0,
      queryPort: isSet(object.queryPort) ? Number(object.queryPort) : 0,
      authPlayers: isSet(object.authPlayers) ? Number(object.authPlayers) : 0,
      serverIp: isSet(object.serverIp) ? CMsgIPAddress.fromJSON(object.serverIp) : undefined,
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
      players: isSet(object.players) ? Number(object.players) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      sdrPopid: isSet(object.sdrPopid) ? Number(object.sdrPopid) : 0,
      sdrPingLocation: isSet(object.sdrPingLocation) ? String(object.sdrPingLocation) : "",
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
      bots: isSet(object.bots) ? Number(object.bots) : 0,
      spectatorPort: isSet(object.spectatorPort) ? Number(object.spectatorPort) : 0,
      gamedirStr: isSet(object.gamedirStr) ? String(object.gamedirStr) : "",
      gamedirStrindex: isSet(object.gamedirStrindex) ? Number(object.gamedirStrindex) : 0,
      mapStr: isSet(object.mapStr) ? String(object.mapStr) : "",
      mapStrindex: isSet(object.mapStrindex) ? Number(object.mapStrindex) : 0,
      nameStr: isSet(object.nameStr) ? String(object.nameStr) : "",
      nameStrindex: isSet(object.nameStrindex) ? Number(object.nameStrindex) : 0,
      gameDescriptionStr: isSet(object.gameDescriptionStr) ? String(object.gameDescriptionStr) : "",
      gameDescriptionStrindex: isSet(object.gameDescriptionStrindex) ? Number(object.gameDescriptionStrindex) : 0,
      versionStr: isSet(object.versionStr) ? String(object.versionStr) : "",
      versionStrindex: isSet(object.versionStrindex) ? Number(object.versionStrindex) : 0,
      gametypeStr: isSet(object.gametypeStr) ? String(object.gametypeStr) : "",
      gametypeStrindex: isSet(object.gametypeStrindex) ? Number(object.gametypeStrindex) : 0,
      spectatorNameStr: isSet(object.spectatorNameStr) ? String(object.spectatorNameStr) : "",
      spectatorNameStrindex: isSet(object.spectatorNameStrindex) ? Number(object.spectatorNameStrindex) : 0,
    };
  },

  toJSON(message: CMsgGMSClientServerQueryResponse_Server): unknown {
    const obj: any = {};
    message.deprecatedServerIp !== undefined && (obj.deprecatedServerIp = Math.round(message.deprecatedServerIp));
    message.queryPort !== undefined && (obj.queryPort = Math.round(message.queryPort));
    message.authPlayers !== undefined && (obj.authPlayers = Math.round(message.authPlayers));
    message.serverIp !== undefined &&
      (obj.serverIp = message.serverIp ? CMsgIPAddress.toJSON(message.serverIp) : undefined);
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    message.players !== undefined && (obj.players = Math.round(message.players));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.sdrPopid !== undefined && (obj.sdrPopid = Math.round(message.sdrPopid));
    message.sdrPingLocation !== undefined && (obj.sdrPingLocation = message.sdrPingLocation);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
    message.bots !== undefined && (obj.bots = Math.round(message.bots));
    message.spectatorPort !== undefined && (obj.spectatorPort = Math.round(message.spectatorPort));
    message.gamedirStr !== undefined && (obj.gamedirStr = message.gamedirStr);
    message.gamedirStrindex !== undefined && (obj.gamedirStrindex = Math.round(message.gamedirStrindex));
    message.mapStr !== undefined && (obj.mapStr = message.mapStr);
    message.mapStrindex !== undefined && (obj.mapStrindex = Math.round(message.mapStrindex));
    message.nameStr !== undefined && (obj.nameStr = message.nameStr);
    message.nameStrindex !== undefined && (obj.nameStrindex = Math.round(message.nameStrindex));
    message.gameDescriptionStr !== undefined && (obj.gameDescriptionStr = message.gameDescriptionStr);
    message.gameDescriptionStrindex !== undefined &&
      (obj.gameDescriptionStrindex = Math.round(message.gameDescriptionStrindex));
    message.versionStr !== undefined && (obj.versionStr = message.versionStr);
    message.versionStrindex !== undefined && (obj.versionStrindex = Math.round(message.versionStrindex));
    message.gametypeStr !== undefined && (obj.gametypeStr = message.gametypeStr);
    message.gametypeStrindex !== undefined && (obj.gametypeStrindex = Math.round(message.gametypeStrindex));
    message.spectatorNameStr !== undefined && (obj.spectatorNameStr = message.spectatorNameStr);
    message.spectatorNameStrindex !== undefined &&
      (obj.spectatorNameStrindex = Math.round(message.spectatorNameStrindex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGMSClientServerQueryResponse_Server>, I>>(
    base?: I,
  ): CMsgGMSClientServerQueryResponse_Server {
    return CMsgGMSClientServerQueryResponse_Server.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGMSClientServerQueryResponse_Server>, I>>(
    object: I,
  ): CMsgGMSClientServerQueryResponse_Server {
    const message = createBaseCMsgGMSClientServerQueryResponse_Server();
    message.deprecatedServerIp = object.deprecatedServerIp ?? 0;
    message.queryPort = object.queryPort ?? 0;
    message.authPlayers = object.authPlayers ?? 0;
    message.serverIp = (object.serverIp !== undefined && object.serverIp !== null)
      ? CMsgIPAddress.fromPartial(object.serverIp)
      : undefined;
    message.steamId = object.steamId ?? 0;
    message.revision = object.revision ?? 0;
    message.players = object.players ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.sdrPopid = object.sdrPopid ?? 0;
    message.sdrPingLocation = object.sdrPingLocation ?? "";
    message.flags = object.flags ?? 0;
    message.appId = object.appId ?? 0;
    message.maxPlayers = object.maxPlayers ?? 0;
    message.bots = object.bots ?? 0;
    message.spectatorPort = object.spectatorPort ?? 0;
    message.gamedirStr = object.gamedirStr ?? "";
    message.gamedirStrindex = object.gamedirStrindex ?? 0;
    message.mapStr = object.mapStr ?? "";
    message.mapStrindex = object.mapStrindex ?? 0;
    message.nameStr = object.nameStr ?? "";
    message.nameStrindex = object.nameStrindex ?? 0;
    message.gameDescriptionStr = object.gameDescriptionStr ?? "";
    message.gameDescriptionStrindex = object.gameDescriptionStrindex ?? 0;
    message.versionStr = object.versionStr ?? "";
    message.versionStrindex = object.versionStrindex ?? 0;
    message.gametypeStr = object.gametypeStr ?? "";
    message.gametypeStrindex = object.gametypeStrindex ?? 0;
    message.spectatorNameStr = object.spectatorNameStr ?? "";
    message.spectatorNameStrindex = object.spectatorNameStrindex ?? 0;
    return message;
  },
};

function createBaseCMsgGameServerOutOfDate(): CMsgGameServerOutOfDate {
  return { steamIdGs: 0, reject: false, message: "" };
}

export const CMsgGameServerOutOfDate = {
  encode(message: CMsgGameServerOutOfDate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdGs !== 0) {
      writer.uint32(9).fixed64(message.steamIdGs);
    }
    if (message.reject === true) {
      writer.uint32(16).bool(message.reject);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerOutOfDate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerOutOfDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdGs = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.reject = reader.bool();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerOutOfDate {
    return {
      steamIdGs: isSet(object.steamIdGs) ? Number(object.steamIdGs) : 0,
      reject: isSet(object.reject) ? Boolean(object.reject) : false,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgGameServerOutOfDate): unknown {
    const obj: any = {};
    message.steamIdGs !== undefined && (obj.steamIdGs = Math.round(message.steamIdGs));
    message.reject !== undefined && (obj.reject = message.reject);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerOutOfDate>, I>>(base?: I): CMsgGameServerOutOfDate {
    return CMsgGameServerOutOfDate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerOutOfDate>, I>>(object: I): CMsgGameServerOutOfDate {
    const message = createBaseCMsgGameServerOutOfDate();
    message.steamIdGs = object.steamIdGs ?? 0;
    message.reject = object.reject ?? false;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCMsgGSAssociateWithClan(): CMsgGSAssociateWithClan {
  return { steamIdClan: 0 };
}

export const CMsgGSAssociateWithClan = {
  encode(message: CMsgGSAssociateWithClan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdClan !== 0) {
      writer.uint32(9).fixed64(message.steamIdClan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSAssociateWithClan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSAssociateWithClan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdClan = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSAssociateWithClan {
    return { steamIdClan: isSet(object.steamIdClan) ? Number(object.steamIdClan) : 0 };
  },

  toJSON(message: CMsgGSAssociateWithClan): unknown {
    const obj: any = {};
    message.steamIdClan !== undefined && (obj.steamIdClan = Math.round(message.steamIdClan));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSAssociateWithClan>, I>>(base?: I): CMsgGSAssociateWithClan {
    return CMsgGSAssociateWithClan.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSAssociateWithClan>, I>>(object: I): CMsgGSAssociateWithClan {
    const message = createBaseCMsgGSAssociateWithClan();
    message.steamIdClan = object.steamIdClan ?? 0;
    return message;
  },
};

function createBaseCMsgGSAssociateWithClanResponse(): CMsgGSAssociateWithClanResponse {
  return { steamIdClan: 0, eresult: 0 };
}

export const CMsgGSAssociateWithClanResponse = {
  encode(message: CMsgGSAssociateWithClanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdClan !== 0) {
      writer.uint32(9).fixed64(message.steamIdClan);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSAssociateWithClanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSAssociateWithClanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdClan = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CMsgGSAssociateWithClanResponse {
    return {
      steamIdClan: isSet(object.steamIdClan) ? Number(object.steamIdClan) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CMsgGSAssociateWithClanResponse): unknown {
    const obj: any = {};
    message.steamIdClan !== undefined && (obj.steamIdClan = Math.round(message.steamIdClan));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSAssociateWithClanResponse>, I>>(base?: I): CMsgGSAssociateWithClanResponse {
    return CMsgGSAssociateWithClanResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSAssociateWithClanResponse>, I>>(
    object: I,
  ): CMsgGSAssociateWithClanResponse {
    const message = createBaseCMsgGSAssociateWithClanResponse();
    message.steamIdClan = object.steamIdClan ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgGSComputeNewPlayerCompatibility(): CMsgGSComputeNewPlayerCompatibility {
  return { steamIdCandidate: 0 };
}

export const CMsgGSComputeNewPlayerCompatibility = {
  encode(message: CMsgGSComputeNewPlayerCompatibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdCandidate !== 0) {
      writer.uint32(9).fixed64(message.steamIdCandidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSComputeNewPlayerCompatibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSComputeNewPlayerCompatibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdCandidate = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSComputeNewPlayerCompatibility {
    return { steamIdCandidate: isSet(object.steamIdCandidate) ? Number(object.steamIdCandidate) : 0 };
  },

  toJSON(message: CMsgGSComputeNewPlayerCompatibility): unknown {
    const obj: any = {};
    message.steamIdCandidate !== undefined && (obj.steamIdCandidate = Math.round(message.steamIdCandidate));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSComputeNewPlayerCompatibility>, I>>(
    base?: I,
  ): CMsgGSComputeNewPlayerCompatibility {
    return CMsgGSComputeNewPlayerCompatibility.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSComputeNewPlayerCompatibility>, I>>(
    object: I,
  ): CMsgGSComputeNewPlayerCompatibility {
    const message = createBaseCMsgGSComputeNewPlayerCompatibility();
    message.steamIdCandidate = object.steamIdCandidate ?? 0;
    return message;
  },
};

function createBaseCMsgGSComputeNewPlayerCompatibilityResponse(): CMsgGSComputeNewPlayerCompatibilityResponse {
  return {
    steamIdCandidate: 0,
    eresult: 0,
    isClanMember: false,
    ctDontLikeYou: 0,
    ctYouDontLike: 0,
    ctClanmembersDontLikeYou: 0,
  };
}

export const CMsgGSComputeNewPlayerCompatibilityResponse = {
  encode(message: CMsgGSComputeNewPlayerCompatibilityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdCandidate !== 0) {
      writer.uint32(9).fixed64(message.steamIdCandidate);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.isClanMember === true) {
      writer.uint32(24).bool(message.isClanMember);
    }
    if (message.ctDontLikeYou !== 0) {
      writer.uint32(32).int32(message.ctDontLikeYou);
    }
    if (message.ctYouDontLike !== 0) {
      writer.uint32(40).int32(message.ctYouDontLike);
    }
    if (message.ctClanmembersDontLikeYou !== 0) {
      writer.uint32(48).int32(message.ctClanmembersDontLikeYou);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSComputeNewPlayerCompatibilityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSComputeNewPlayerCompatibilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdCandidate = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.isClanMember = reader.bool();
          break;
        case 4:
          message.ctDontLikeYou = reader.int32();
          break;
        case 5:
          message.ctYouDontLike = reader.int32();
          break;
        case 6:
          message.ctClanmembersDontLikeYou = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSComputeNewPlayerCompatibilityResponse {
    return {
      steamIdCandidate: isSet(object.steamIdCandidate) ? Number(object.steamIdCandidate) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      isClanMember: isSet(object.isClanMember) ? Boolean(object.isClanMember) : false,
      ctDontLikeYou: isSet(object.ctDontLikeYou) ? Number(object.ctDontLikeYou) : 0,
      ctYouDontLike: isSet(object.ctYouDontLike) ? Number(object.ctYouDontLike) : 0,
      ctClanmembersDontLikeYou: isSet(object.ctClanmembersDontLikeYou) ? Number(object.ctClanmembersDontLikeYou) : 0,
    };
  },

  toJSON(message: CMsgGSComputeNewPlayerCompatibilityResponse): unknown {
    const obj: any = {};
    message.steamIdCandidate !== undefined && (obj.steamIdCandidate = Math.round(message.steamIdCandidate));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.isClanMember !== undefined && (obj.isClanMember = message.isClanMember);
    message.ctDontLikeYou !== undefined && (obj.ctDontLikeYou = Math.round(message.ctDontLikeYou));
    message.ctYouDontLike !== undefined && (obj.ctYouDontLike = Math.round(message.ctYouDontLike));
    message.ctClanmembersDontLikeYou !== undefined &&
      (obj.ctClanmembersDontLikeYou = Math.round(message.ctClanmembersDontLikeYou));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSComputeNewPlayerCompatibilityResponse>, I>>(
    base?: I,
  ): CMsgGSComputeNewPlayerCompatibilityResponse {
    return CMsgGSComputeNewPlayerCompatibilityResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSComputeNewPlayerCompatibilityResponse>, I>>(
    object: I,
  ): CMsgGSComputeNewPlayerCompatibilityResponse {
    const message = createBaseCMsgGSComputeNewPlayerCompatibilityResponse();
    message.steamIdCandidate = object.steamIdCandidate ?? 0;
    message.eresult = object.eresult ?? 0;
    message.isClanMember = object.isClanMember ?? false;
    message.ctDontLikeYou = object.ctDontLikeYou ?? 0;
    message.ctYouDontLike = object.ctYouDontLike ?? 0;
    message.ctClanmembersDontLikeYou = object.ctClanmembersDontLikeYou ?? 0;
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
