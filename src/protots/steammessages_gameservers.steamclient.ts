/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export interface CGameServersGetServerListRequest {
  filter: string;
  limit: number;
}

export interface CGameServersGetServerListResponse {
  servers: CGameServersGetServerListResponse_Server[];
}

export interface CGameServersGetServerListResponse_Server {
  addr: string;
  gameport: number;
  specport: number;
  steamid: number;
  name: string;
  appid: number;
  gamedir: string;
  version: string;
  product: string;
  region: number;
  players: number;
  maxPlayers: number;
  bots: number;
  map: string;
  secure: boolean;
  dedicated: boolean;
  os: string;
  gametype: string;
}

export interface CGameServersGetServerSteamIDsByIPRequest {
  serverIps: string[];
}

export interface CGameServersIPsWithSteamIDsResponse {
  servers: CGameServersIPsWithSteamIDsResponse_Server[];
}

export interface CGameServersIPsWithSteamIDsResponse_Server {
  addr: string;
  steamid: number;
}

export interface CGameServersGetServerIPsBySteamIDRequest {
  serverSteamids: number[];
}

export interface CGameServersQueryByFakeIPRequest {
  fakeIp: number;
  fakePort: number;
  appId: number;
  queryType: CGameServersQueryByFakeIPRequest_EQueryType;
}

export enum CGameServersQueryByFakeIPRequest_EQueryType {
  Query_Invalid = 0,
  Query_Ping = 1,
  Query_Players = 2,
  Query_Rules = 3,
  UNRECOGNIZED = -1,
}

export function cGameServersQueryByFakeIPRequest_EQueryTypeFromJSON(
  object: any,
): CGameServersQueryByFakeIPRequest_EQueryType {
  switch (object) {
    case 0:
    case "Query_Invalid":
      return CGameServersQueryByFakeIPRequest_EQueryType.Query_Invalid;
    case 1:
    case "Query_Ping":
      return CGameServersQueryByFakeIPRequest_EQueryType.Query_Ping;
    case 2:
    case "Query_Players":
      return CGameServersQueryByFakeIPRequest_EQueryType.Query_Players;
    case 3:
    case "Query_Rules":
      return CGameServersQueryByFakeIPRequest_EQueryType.Query_Rules;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CGameServersQueryByFakeIPRequest_EQueryType.UNRECOGNIZED;
  }
}

export function cGameServersQueryByFakeIPRequest_EQueryTypeToJSON(
  object: CGameServersQueryByFakeIPRequest_EQueryType,
): string {
  switch (object) {
    case CGameServersQueryByFakeIPRequest_EQueryType.Query_Invalid:
      return "Query_Invalid";
    case CGameServersQueryByFakeIPRequest_EQueryType.Query_Ping:
      return "Query_Ping";
    case CGameServersQueryByFakeIPRequest_EQueryType.Query_Players:
      return "Query_Players";
    case CGameServersQueryByFakeIPRequest_EQueryType.Query_Rules:
      return "Query_Rules";
    case CGameServersQueryByFakeIPRequest_EQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgGameServerPingQueryData {
  serverIp: CMsgIPAddress | undefined;
  queryPort: number;
  gamePort: number;
  spectatorPort: number;
  spectatorServerName: string;
  serverName: string;
  steamid: number;
  appId: number;
  gamedir: string;
  map: string;
  gameDescription: string;
  gametype: string;
  numPlayers: number;
  maxPlayers: number;
  numBots: number;
  password: boolean;
  secure: boolean;
  dedicated: boolean;
  version: string;
  sdrPopid: number;
  sdrLocationString: string;
}

export interface CMsgGameServerPlayersQueryData {
  players: CMsgGameServerPlayersQueryData_Player[];
}

export interface CMsgGameServerPlayersQueryData_Player {
  name: string;
  score: number;
  timePlayed: number;
}

export interface CMsgGameServerRulesQueryData {
  rules: CMsgGameServerRulesQueryData_Rule[];
}

export interface CMsgGameServerRulesQueryData_Rule {
  rule: string;
  value: string;
}

export interface CGameServersGameServerQueryResponse {
  pingData: CMsgGameServerPingQueryData | undefined;
  playersData: CMsgGameServerPlayersQueryData | undefined;
  rulesData: CMsgGameServerRulesQueryData | undefined;
}

export interface GameServerClientQueryServerDataRequest {
}

export interface GameServerClientQueryServerDataResponse {
  pingData: CMsgGameServerPingQueryData | undefined;
  playersData: CMsgGameServerPlayersQueryData | undefined;
  rulesData: CMsgGameServerRulesQueryData | undefined;
}

function createBaseCGameServersGetServerListRequest(): CGameServersGetServerListRequest {
  return { filter: "", limit: 0 };
}

export const CGameServersGetServerListRequest = {
  encode(message: CGameServersGetServerListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGetServerListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGetServerListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = reader.string();
          break;
        case 2:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGetServerListRequest {
    return {
      filter: isSet(object.filter) ? String(object.filter) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: CGameServersGetServerListRequest): unknown {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGetServerListRequest>, I>>(
    base?: I,
  ): CGameServersGetServerListRequest {
    return CGameServersGetServerListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGetServerListRequest>, I>>(
    object: I,
  ): CGameServersGetServerListRequest {
    const message = createBaseCGameServersGetServerListRequest();
    message.filter = object.filter ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseCGameServersGetServerListResponse(): CGameServersGetServerListResponse {
  return { servers: [] };
}

export const CGameServersGetServerListResponse = {
  encode(message: CGameServersGetServerListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      CGameServersGetServerListResponse_Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGetServerListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGetServerListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servers.push(CGameServersGetServerListResponse_Server.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGetServerListResponse {
    return {
      servers: Array.isArray(object?.servers)
        ? object.servers.map((e: any) => CGameServersGetServerListResponse_Server.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameServersGetServerListResponse): unknown {
    const obj: any = {};
    if (message.servers) {
      obj.servers = message.servers.map((e) => e ? CGameServersGetServerListResponse_Server.toJSON(e) : undefined);
    } else {
      obj.servers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGetServerListResponse>, I>>(
    base?: I,
  ): CGameServersGetServerListResponse {
    return CGameServersGetServerListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGetServerListResponse>, I>>(
    object: I,
  ): CGameServersGetServerListResponse {
    const message = createBaseCGameServersGetServerListResponse();
    message.servers = object.servers?.map((e) => CGameServersGetServerListResponse_Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCGameServersGetServerListResponse_Server(): CGameServersGetServerListResponse_Server {
  return {
    addr: "",
    gameport: 0,
    specport: 0,
    steamid: 0,
    name: "",
    appid: 0,
    gamedir: "",
    version: "",
    product: "",
    region: 0,
    players: 0,
    maxPlayers: 0,
    bots: 0,
    map: "",
    secure: false,
    dedicated: false,
    os: "",
    gametype: "",
  };
}

export const CGameServersGetServerListResponse_Server = {
  encode(message: CGameServersGetServerListResponse_Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.gameport !== 0) {
      writer.uint32(16).uint32(message.gameport);
    }
    if (message.specport !== 0) {
      writer.uint32(24).uint32(message.specport);
    }
    if (message.steamid !== 0) {
      writer.uint32(33).fixed64(message.steamid);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.appid !== 0) {
      writer.uint32(48).uint32(message.appid);
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
    if (message.region !== 0) {
      writer.uint32(80).int32(message.region);
    }
    if (message.players !== 0) {
      writer.uint32(88).int32(message.players);
    }
    if (message.maxPlayers !== 0) {
      writer.uint32(96).int32(message.maxPlayers);
    }
    if (message.bots !== 0) {
      writer.uint32(104).int32(message.bots);
    }
    if (message.map !== "") {
      writer.uint32(114).string(message.map);
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
    if (message.gametype !== "") {
      writer.uint32(146).string(message.gametype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGetServerListResponse_Server {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGetServerListResponse_Server();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.gameport = reader.uint32();
          break;
        case 3:
          message.specport = reader.uint32();
          break;
        case 4:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.appid = reader.uint32();
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
          message.region = reader.int32();
          break;
        case 11:
          message.players = reader.int32();
          break;
        case 12:
          message.maxPlayers = reader.int32();
          break;
        case 13:
          message.bots = reader.int32();
          break;
        case 14:
          message.map = reader.string();
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
          message.gametype = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGetServerListResponse_Server {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      gameport: isSet(object.gameport) ? Number(object.gameport) : 0,
      specport: isSet(object.specport) ? Number(object.specport) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gamedir: isSet(object.gamedir) ? String(object.gamedir) : "",
      version: isSet(object.version) ? String(object.version) : "",
      product: isSet(object.product) ? String(object.product) : "",
      region: isSet(object.region) ? Number(object.region) : 0,
      players: isSet(object.players) ? Number(object.players) : 0,
      maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
      bots: isSet(object.bots) ? Number(object.bots) : 0,
      map: isSet(object.map) ? String(object.map) : "",
      secure: isSet(object.secure) ? Boolean(object.secure) : false,
      dedicated: isSet(object.dedicated) ? Boolean(object.dedicated) : false,
      os: isSet(object.os) ? String(object.os) : "",
      gametype: isSet(object.gametype) ? String(object.gametype) : "",
    };
  },

  toJSON(message: CGameServersGetServerListResponse_Server): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.gameport !== undefined && (obj.gameport = Math.round(message.gameport));
    message.specport !== undefined && (obj.specport = Math.round(message.specport));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.name !== undefined && (obj.name = message.name);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gamedir !== undefined && (obj.gamedir = message.gamedir);
    message.version !== undefined && (obj.version = message.version);
    message.product !== undefined && (obj.product = message.product);
    message.region !== undefined && (obj.region = Math.round(message.region));
    message.players !== undefined && (obj.players = Math.round(message.players));
    message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
    message.bots !== undefined && (obj.bots = Math.round(message.bots));
    message.map !== undefined && (obj.map = message.map);
    message.secure !== undefined && (obj.secure = message.secure);
    message.dedicated !== undefined && (obj.dedicated = message.dedicated);
    message.os !== undefined && (obj.os = message.os);
    message.gametype !== undefined && (obj.gametype = message.gametype);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGetServerListResponse_Server>, I>>(
    base?: I,
  ): CGameServersGetServerListResponse_Server {
    return CGameServersGetServerListResponse_Server.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGetServerListResponse_Server>, I>>(
    object: I,
  ): CGameServersGetServerListResponse_Server {
    const message = createBaseCGameServersGetServerListResponse_Server();
    message.addr = object.addr ?? "";
    message.gameport = object.gameport ?? 0;
    message.specport = object.specport ?? 0;
    message.steamid = object.steamid ?? 0;
    message.name = object.name ?? "";
    message.appid = object.appid ?? 0;
    message.gamedir = object.gamedir ?? "";
    message.version = object.version ?? "";
    message.product = object.product ?? "";
    message.region = object.region ?? 0;
    message.players = object.players ?? 0;
    message.maxPlayers = object.maxPlayers ?? 0;
    message.bots = object.bots ?? 0;
    message.map = object.map ?? "";
    message.secure = object.secure ?? false;
    message.dedicated = object.dedicated ?? false;
    message.os = object.os ?? "";
    message.gametype = object.gametype ?? "";
    return message;
  },
};

function createBaseCGameServersGetServerSteamIDsByIPRequest(): CGameServersGetServerSteamIDsByIPRequest {
  return { serverIps: [] };
}

export const CGameServersGetServerSteamIDsByIPRequest = {
  encode(message: CGameServersGetServerSteamIDsByIPRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serverIps) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGetServerSteamIDsByIPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGetServerSteamIDsByIPRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverIps.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGetServerSteamIDsByIPRequest {
    return { serverIps: Array.isArray(object?.serverIps) ? object.serverIps.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CGameServersGetServerSteamIDsByIPRequest): unknown {
    const obj: any = {};
    if (message.serverIps) {
      obj.serverIps = message.serverIps.map((e) => e);
    } else {
      obj.serverIps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGetServerSteamIDsByIPRequest>, I>>(
    base?: I,
  ): CGameServersGetServerSteamIDsByIPRequest {
    return CGameServersGetServerSteamIDsByIPRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGetServerSteamIDsByIPRequest>, I>>(
    object: I,
  ): CGameServersGetServerSteamIDsByIPRequest {
    const message = createBaseCGameServersGetServerSteamIDsByIPRequest();
    message.serverIps = object.serverIps?.map((e) => e) || [];
    return message;
  },
};

function createBaseCGameServersIPsWithSteamIDsResponse(): CGameServersIPsWithSteamIDsResponse {
  return { servers: [] };
}

export const CGameServersIPsWithSteamIDsResponse = {
  encode(message: CGameServersIPsWithSteamIDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      CGameServersIPsWithSteamIDsResponse_Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersIPsWithSteamIDsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersIPsWithSteamIDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servers.push(CGameServersIPsWithSteamIDsResponse_Server.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersIPsWithSteamIDsResponse {
    return {
      servers: Array.isArray(object?.servers)
        ? object.servers.map((e: any) => CGameServersIPsWithSteamIDsResponse_Server.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CGameServersIPsWithSteamIDsResponse): unknown {
    const obj: any = {};
    if (message.servers) {
      obj.servers = message.servers.map((e) => e ? CGameServersIPsWithSteamIDsResponse_Server.toJSON(e) : undefined);
    } else {
      obj.servers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersIPsWithSteamIDsResponse>, I>>(
    base?: I,
  ): CGameServersIPsWithSteamIDsResponse {
    return CGameServersIPsWithSteamIDsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersIPsWithSteamIDsResponse>, I>>(
    object: I,
  ): CGameServersIPsWithSteamIDsResponse {
    const message = createBaseCGameServersIPsWithSteamIDsResponse();
    message.servers = object.servers?.map((e) => CGameServersIPsWithSteamIDsResponse_Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCGameServersIPsWithSteamIDsResponse_Server(): CGameServersIPsWithSteamIDsResponse_Server {
  return { addr: "", steamid: 0 };
}

export const CGameServersIPsWithSteamIDsResponse_Server = {
  encode(message: CGameServersIPsWithSteamIDsResponse_Server, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersIPsWithSteamIDsResponse_Server {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersIPsWithSteamIDsResponse_Server();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersIPsWithSteamIDsResponse_Server {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CGameServersIPsWithSteamIDsResponse_Server): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersIPsWithSteamIDsResponse_Server>, I>>(
    base?: I,
  ): CGameServersIPsWithSteamIDsResponse_Server {
    return CGameServersIPsWithSteamIDsResponse_Server.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersIPsWithSteamIDsResponse_Server>, I>>(
    object: I,
  ): CGameServersIPsWithSteamIDsResponse_Server {
    const message = createBaseCGameServersIPsWithSteamIDsResponse_Server();
    message.addr = object.addr ?? "";
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCGameServersGetServerIPsBySteamIDRequest(): CGameServersGetServerIPsBySteamIDRequest {
  return { serverSteamids: [] };
}

export const CGameServersGetServerIPsBySteamIDRequest = {
  encode(message: CGameServersGetServerIPsBySteamIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.serverSteamids) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGetServerIPsBySteamIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGetServerIPsBySteamIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serverSteamids.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.serverSteamids.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGetServerIPsBySteamIDRequest {
    return {
      serverSteamids: Array.isArray(object?.serverSteamids) ? object.serverSteamids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CGameServersGetServerIPsBySteamIDRequest): unknown {
    const obj: any = {};
    if (message.serverSteamids) {
      obj.serverSteamids = message.serverSteamids.map((e) => Math.round(e));
    } else {
      obj.serverSteamids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGetServerIPsBySteamIDRequest>, I>>(
    base?: I,
  ): CGameServersGetServerIPsBySteamIDRequest {
    return CGameServersGetServerIPsBySteamIDRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGetServerIPsBySteamIDRequest>, I>>(
    object: I,
  ): CGameServersGetServerIPsBySteamIDRequest {
    const message = createBaseCGameServersGetServerIPsBySteamIDRequest();
    message.serverSteamids = object.serverSteamids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCGameServersQueryByFakeIPRequest(): CGameServersQueryByFakeIPRequest {
  return { fakeIp: 0, fakePort: 0, appId: 0, queryType: 0 };
}

export const CGameServersQueryByFakeIPRequest = {
  encode(message: CGameServersQueryByFakeIPRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fakeIp !== 0) {
      writer.uint32(8).uint32(message.fakeIp);
    }
    if (message.fakePort !== 0) {
      writer.uint32(16).uint32(message.fakePort);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.queryType !== 0) {
      writer.uint32(32).int32(message.queryType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersQueryByFakeIPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersQueryByFakeIPRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fakeIp = reader.uint32();
          break;
        case 2:
          message.fakePort = reader.uint32();
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.queryType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersQueryByFakeIPRequest {
    return {
      fakeIp: isSet(object.fakeIp) ? Number(object.fakeIp) : 0,
      fakePort: isSet(object.fakePort) ? Number(object.fakePort) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      queryType: isSet(object.queryType) ? cGameServersQueryByFakeIPRequest_EQueryTypeFromJSON(object.queryType) : 0,
    };
  },

  toJSON(message: CGameServersQueryByFakeIPRequest): unknown {
    const obj: any = {};
    message.fakeIp !== undefined && (obj.fakeIp = Math.round(message.fakeIp));
    message.fakePort !== undefined && (obj.fakePort = Math.round(message.fakePort));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.queryType !== undefined &&
      (obj.queryType = cGameServersQueryByFakeIPRequest_EQueryTypeToJSON(message.queryType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersQueryByFakeIPRequest>, I>>(
    base?: I,
  ): CGameServersQueryByFakeIPRequest {
    return CGameServersQueryByFakeIPRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersQueryByFakeIPRequest>, I>>(
    object: I,
  ): CGameServersQueryByFakeIPRequest {
    const message = createBaseCGameServersQueryByFakeIPRequest();
    message.fakeIp = object.fakeIp ?? 0;
    message.fakePort = object.fakePort ?? 0;
    message.appId = object.appId ?? 0;
    message.queryType = object.queryType ?? 0;
    return message;
  },
};

function createBaseCMsgGameServerPingQueryData(): CMsgGameServerPingQueryData {
  return {
    serverIp: undefined,
    queryPort: 0,
    gamePort: 0,
    spectatorPort: 0,
    spectatorServerName: "",
    serverName: "",
    steamid: 0,
    appId: 0,
    gamedir: "",
    map: "",
    gameDescription: "",
    gametype: "",
    numPlayers: 0,
    maxPlayers: 0,
    numBots: 0,
    password: false,
    secure: false,
    dedicated: false,
    version: "",
    sdrPopid: 0,
    sdrLocationString: "",
  };
}

export const CMsgGameServerPingQueryData = {
  encode(message: CMsgGameServerPingQueryData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverIp !== undefined) {
      CMsgIPAddress.encode(message.serverIp, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryPort !== 0) {
      writer.uint32(16).uint32(message.queryPort);
    }
    if (message.gamePort !== 0) {
      writer.uint32(24).uint32(message.gamePort);
    }
    if (message.spectatorPort !== 0) {
      writer.uint32(32).uint32(message.spectatorPort);
    }
    if (message.spectatorServerName !== "") {
      writer.uint32(42).string(message.spectatorServerName);
    }
    if (message.serverName !== "") {
      writer.uint32(50).string(message.serverName);
    }
    if (message.steamid !== 0) {
      writer.uint32(57).fixed64(message.steamid);
    }
    if (message.appId !== 0) {
      writer.uint32(64).uint32(message.appId);
    }
    if (message.gamedir !== "") {
      writer.uint32(74).string(message.gamedir);
    }
    if (message.map !== "") {
      writer.uint32(82).string(message.map);
    }
    if (message.gameDescription !== "") {
      writer.uint32(90).string(message.gameDescription);
    }
    if (message.gametype !== "") {
      writer.uint32(98).string(message.gametype);
    }
    if (message.numPlayers !== 0) {
      writer.uint32(104).uint32(message.numPlayers);
    }
    if (message.maxPlayers !== 0) {
      writer.uint32(112).uint32(message.maxPlayers);
    }
    if (message.numBots !== 0) {
      writer.uint32(120).uint32(message.numBots);
    }
    if (message.password === true) {
      writer.uint32(128).bool(message.password);
    }
    if (message.secure === true) {
      writer.uint32(136).bool(message.secure);
    }
    if (message.dedicated === true) {
      writer.uint32(144).bool(message.dedicated);
    }
    if (message.version !== "") {
      writer.uint32(154).string(message.version);
    }
    if (message.sdrPopid !== 0) {
      writer.uint32(165).fixed32(message.sdrPopid);
    }
    if (message.sdrLocationString !== "") {
      writer.uint32(170).string(message.sdrLocationString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerPingQueryData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerPingQueryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryPort = reader.uint32();
          break;
        case 3:
          message.gamePort = reader.uint32();
          break;
        case 4:
          message.spectatorPort = reader.uint32();
          break;
        case 5:
          message.spectatorServerName = reader.string();
          break;
        case 6:
          message.serverName = reader.string();
          break;
        case 7:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 8:
          message.appId = reader.uint32();
          break;
        case 9:
          message.gamedir = reader.string();
          break;
        case 10:
          message.map = reader.string();
          break;
        case 11:
          message.gameDescription = reader.string();
          break;
        case 12:
          message.gametype = reader.string();
          break;
        case 13:
          message.numPlayers = reader.uint32();
          break;
        case 14:
          message.maxPlayers = reader.uint32();
          break;
        case 15:
          message.numBots = reader.uint32();
          break;
        case 16:
          message.password = reader.bool();
          break;
        case 17:
          message.secure = reader.bool();
          break;
        case 18:
          message.dedicated = reader.bool();
          break;
        case 19:
          message.version = reader.string();
          break;
        case 20:
          message.sdrPopid = reader.fixed32();
          break;
        case 21:
          message.sdrLocationString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerPingQueryData {
    return {
      serverIp: isSet(object.serverIp) ? CMsgIPAddress.fromJSON(object.serverIp) : undefined,
      queryPort: isSet(object.queryPort) ? Number(object.queryPort) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      spectatorPort: isSet(object.spectatorPort) ? Number(object.spectatorPort) : 0,
      spectatorServerName: isSet(object.spectatorServerName) ? String(object.spectatorServerName) : "",
      serverName: isSet(object.serverName) ? String(object.serverName) : "",
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      gamedir: isSet(object.gamedir) ? String(object.gamedir) : "",
      map: isSet(object.map) ? String(object.map) : "",
      gameDescription: isSet(object.gameDescription) ? String(object.gameDescription) : "",
      gametype: isSet(object.gametype) ? String(object.gametype) : "",
      numPlayers: isSet(object.numPlayers) ? Number(object.numPlayers) : 0,
      maxPlayers: isSet(object.maxPlayers) ? Number(object.maxPlayers) : 0,
      numBots: isSet(object.numBots) ? Number(object.numBots) : 0,
      password: isSet(object.password) ? Boolean(object.password) : false,
      secure: isSet(object.secure) ? Boolean(object.secure) : false,
      dedicated: isSet(object.dedicated) ? Boolean(object.dedicated) : false,
      version: isSet(object.version) ? String(object.version) : "",
      sdrPopid: isSet(object.sdrPopid) ? Number(object.sdrPopid) : 0,
      sdrLocationString: isSet(object.sdrLocationString) ? String(object.sdrLocationString) : "",
    };
  },

  toJSON(message: CMsgGameServerPingQueryData): unknown {
    const obj: any = {};
    message.serverIp !== undefined &&
      (obj.serverIp = message.serverIp ? CMsgIPAddress.toJSON(message.serverIp) : undefined);
    message.queryPort !== undefined && (obj.queryPort = Math.round(message.queryPort));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.spectatorPort !== undefined && (obj.spectatorPort = Math.round(message.spectatorPort));
    message.spectatorServerName !== undefined && (obj.spectatorServerName = message.spectatorServerName);
    message.serverName !== undefined && (obj.serverName = message.serverName);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.gamedir !== undefined && (obj.gamedir = message.gamedir);
    message.map !== undefined && (obj.map = message.map);
    message.gameDescription !== undefined && (obj.gameDescription = message.gameDescription);
    message.gametype !== undefined && (obj.gametype = message.gametype);
    message.numPlayers !== undefined && (obj.numPlayers = Math.round(message.numPlayers));
    message.maxPlayers !== undefined && (obj.maxPlayers = Math.round(message.maxPlayers));
    message.numBots !== undefined && (obj.numBots = Math.round(message.numBots));
    message.password !== undefined && (obj.password = message.password);
    message.secure !== undefined && (obj.secure = message.secure);
    message.dedicated !== undefined && (obj.dedicated = message.dedicated);
    message.version !== undefined && (obj.version = message.version);
    message.sdrPopid !== undefined && (obj.sdrPopid = Math.round(message.sdrPopid));
    message.sdrLocationString !== undefined && (obj.sdrLocationString = message.sdrLocationString);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerPingQueryData>, I>>(base?: I): CMsgGameServerPingQueryData {
    return CMsgGameServerPingQueryData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerPingQueryData>, I>>(object: I): CMsgGameServerPingQueryData {
    const message = createBaseCMsgGameServerPingQueryData();
    message.serverIp = (object.serverIp !== undefined && object.serverIp !== null)
      ? CMsgIPAddress.fromPartial(object.serverIp)
      : undefined;
    message.queryPort = object.queryPort ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.spectatorPort = object.spectatorPort ?? 0;
    message.spectatorServerName = object.spectatorServerName ?? "";
    message.serverName = object.serverName ?? "";
    message.steamid = object.steamid ?? 0;
    message.appId = object.appId ?? 0;
    message.gamedir = object.gamedir ?? "";
    message.map = object.map ?? "";
    message.gameDescription = object.gameDescription ?? "";
    message.gametype = object.gametype ?? "";
    message.numPlayers = object.numPlayers ?? 0;
    message.maxPlayers = object.maxPlayers ?? 0;
    message.numBots = object.numBots ?? 0;
    message.password = object.password ?? false;
    message.secure = object.secure ?? false;
    message.dedicated = object.dedicated ?? false;
    message.version = object.version ?? "";
    message.sdrPopid = object.sdrPopid ?? 0;
    message.sdrLocationString = object.sdrLocationString ?? "";
    return message;
  },
};

function createBaseCMsgGameServerPlayersQueryData(): CMsgGameServerPlayersQueryData {
  return { players: [] };
}

export const CMsgGameServerPlayersQueryData = {
  encode(message: CMsgGameServerPlayersQueryData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CMsgGameServerPlayersQueryData_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerPlayersQueryData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerPlayersQueryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(CMsgGameServerPlayersQueryData_Player.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerPlayersQueryData {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CMsgGameServerPlayersQueryData_Player.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameServerPlayersQueryData): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CMsgGameServerPlayersQueryData_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerPlayersQueryData>, I>>(base?: I): CMsgGameServerPlayersQueryData {
    return CMsgGameServerPlayersQueryData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerPlayersQueryData>, I>>(
    object: I,
  ): CMsgGameServerPlayersQueryData {
    const message = createBaseCMsgGameServerPlayersQueryData();
    message.players = object.players?.map((e) => CMsgGameServerPlayersQueryData_Player.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgGameServerPlayersQueryData_Player(): CMsgGameServerPlayersQueryData_Player {
  return { name: "", score: 0, timePlayed: 0 };
}

export const CMsgGameServerPlayersQueryData_Player = {
  encode(message: CMsgGameServerPlayersQueryData_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    if (message.timePlayed !== 0) {
      writer.uint32(24).uint32(message.timePlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerPlayersQueryData_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerPlayersQueryData_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.score = reader.uint32();
          break;
        case 3:
          message.timePlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerPlayersQueryData_Player {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      score: isSet(object.score) ? Number(object.score) : 0,
      timePlayed: isSet(object.timePlayed) ? Number(object.timePlayed) : 0,
    };
  },

  toJSON(message: CMsgGameServerPlayersQueryData_Player): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.timePlayed !== undefined && (obj.timePlayed = Math.round(message.timePlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerPlayersQueryData_Player>, I>>(
    base?: I,
  ): CMsgGameServerPlayersQueryData_Player {
    return CMsgGameServerPlayersQueryData_Player.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerPlayersQueryData_Player>, I>>(
    object: I,
  ): CMsgGameServerPlayersQueryData_Player {
    const message = createBaseCMsgGameServerPlayersQueryData_Player();
    message.name = object.name ?? "";
    message.score = object.score ?? 0;
    message.timePlayed = object.timePlayed ?? 0;
    return message;
  },
};

function createBaseCMsgGameServerRulesQueryData(): CMsgGameServerRulesQueryData {
  return { rules: [] };
}

export const CMsgGameServerRulesQueryData = {
  encode(message: CMsgGameServerRulesQueryData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      CMsgGameServerRulesQueryData_Rule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerRulesQueryData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerRulesQueryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(CMsgGameServerRulesQueryData_Rule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameServerRulesQueryData {
    return {
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => CMsgGameServerRulesQueryData_Rule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgGameServerRulesQueryData): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) => e ? CMsgGameServerRulesQueryData_Rule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerRulesQueryData>, I>>(base?: I): CMsgGameServerRulesQueryData {
    return CMsgGameServerRulesQueryData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerRulesQueryData>, I>>(object: I): CMsgGameServerRulesQueryData {
    const message = createBaseCMsgGameServerRulesQueryData();
    message.rules = object.rules?.map((e) => CMsgGameServerRulesQueryData_Rule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgGameServerRulesQueryData_Rule(): CMsgGameServerRulesQueryData_Rule {
  return { rule: "", value: "" };
}

export const CMsgGameServerRulesQueryData_Rule = {
  encode(message: CMsgGameServerRulesQueryData_Rule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rule !== "") {
      writer.uint32(10).string(message.rule);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameServerRulesQueryData_Rule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameServerRulesQueryData_Rule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rule = reader.string();
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

  fromJSON(object: any): CMsgGameServerRulesQueryData_Rule {
    return {
      rule: isSet(object.rule) ? String(object.rule) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgGameServerRulesQueryData_Rule): unknown {
    const obj: any = {};
    message.rule !== undefined && (obj.rule = message.rule);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameServerRulesQueryData_Rule>, I>>(
    base?: I,
  ): CMsgGameServerRulesQueryData_Rule {
    return CMsgGameServerRulesQueryData_Rule.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameServerRulesQueryData_Rule>, I>>(
    object: I,
  ): CMsgGameServerRulesQueryData_Rule {
    const message = createBaseCMsgGameServerRulesQueryData_Rule();
    message.rule = object.rule ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCGameServersGameServerQueryResponse(): CGameServersGameServerQueryResponse {
  return { pingData: undefined, playersData: undefined, rulesData: undefined };
}

export const CGameServersGameServerQueryResponse = {
  encode(message: CGameServersGameServerQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pingData !== undefined) {
      CMsgGameServerPingQueryData.encode(message.pingData, writer.uint32(10).fork()).ldelim();
    }
    if (message.playersData !== undefined) {
      CMsgGameServerPlayersQueryData.encode(message.playersData, writer.uint32(18).fork()).ldelim();
    }
    if (message.rulesData !== undefined) {
      CMsgGameServerRulesQueryData.encode(message.rulesData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameServersGameServerQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameServersGameServerQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pingData = CMsgGameServerPingQueryData.decode(reader, reader.uint32());
          break;
        case 2:
          message.playersData = CMsgGameServerPlayersQueryData.decode(reader, reader.uint32());
          break;
        case 3:
          message.rulesData = CMsgGameServerRulesQueryData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameServersGameServerQueryResponse {
    return {
      pingData: isSet(object.pingData) ? CMsgGameServerPingQueryData.fromJSON(object.pingData) : undefined,
      playersData: isSet(object.playersData) ? CMsgGameServerPlayersQueryData.fromJSON(object.playersData) : undefined,
      rulesData: isSet(object.rulesData) ? CMsgGameServerRulesQueryData.fromJSON(object.rulesData) : undefined,
    };
  },

  toJSON(message: CGameServersGameServerQueryResponse): unknown {
    const obj: any = {};
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgGameServerPingQueryData.toJSON(message.pingData) : undefined);
    message.playersData !== undefined &&
      (obj.playersData = message.playersData ? CMsgGameServerPlayersQueryData.toJSON(message.playersData) : undefined);
    message.rulesData !== undefined &&
      (obj.rulesData = message.rulesData ? CMsgGameServerRulesQueryData.toJSON(message.rulesData) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameServersGameServerQueryResponse>, I>>(
    base?: I,
  ): CGameServersGameServerQueryResponse {
    return CGameServersGameServerQueryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameServersGameServerQueryResponse>, I>>(
    object: I,
  ): CGameServersGameServerQueryResponse {
    const message = createBaseCGameServersGameServerQueryResponse();
    message.pingData = (object.pingData !== undefined && object.pingData !== null)
      ? CMsgGameServerPingQueryData.fromPartial(object.pingData)
      : undefined;
    message.playersData = (object.playersData !== undefined && object.playersData !== null)
      ? CMsgGameServerPlayersQueryData.fromPartial(object.playersData)
      : undefined;
    message.rulesData = (object.rulesData !== undefined && object.rulesData !== null)
      ? CMsgGameServerRulesQueryData.fromPartial(object.rulesData)
      : undefined;
    return message;
  },
};

function createBaseGameServerClientQueryServerDataRequest(): GameServerClientQueryServerDataRequest {
  return {};
}

export const GameServerClientQueryServerDataRequest = {
  encode(_: GameServerClientQueryServerDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameServerClientQueryServerDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameServerClientQueryServerDataRequest();
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

  fromJSON(_: any): GameServerClientQueryServerDataRequest {
    return {};
  },

  toJSON(_: GameServerClientQueryServerDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GameServerClientQueryServerDataRequest>, I>>(
    base?: I,
  ): GameServerClientQueryServerDataRequest {
    return GameServerClientQueryServerDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameServerClientQueryServerDataRequest>, I>>(
    _: I,
  ): GameServerClientQueryServerDataRequest {
    const message = createBaseGameServerClientQueryServerDataRequest();
    return message;
  },
};

function createBaseGameServerClientQueryServerDataResponse(): GameServerClientQueryServerDataResponse {
  return { pingData: undefined, playersData: undefined, rulesData: undefined };
}

export const GameServerClientQueryServerDataResponse = {
  encode(message: GameServerClientQueryServerDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pingData !== undefined) {
      CMsgGameServerPingQueryData.encode(message.pingData, writer.uint32(10).fork()).ldelim();
    }
    if (message.playersData !== undefined) {
      CMsgGameServerPlayersQueryData.encode(message.playersData, writer.uint32(18).fork()).ldelim();
    }
    if (message.rulesData !== undefined) {
      CMsgGameServerRulesQueryData.encode(message.rulesData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameServerClientQueryServerDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameServerClientQueryServerDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pingData = CMsgGameServerPingQueryData.decode(reader, reader.uint32());
          break;
        case 2:
          message.playersData = CMsgGameServerPlayersQueryData.decode(reader, reader.uint32());
          break;
        case 3:
          message.rulesData = CMsgGameServerRulesQueryData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameServerClientQueryServerDataResponse {
    return {
      pingData: isSet(object.pingData) ? CMsgGameServerPingQueryData.fromJSON(object.pingData) : undefined,
      playersData: isSet(object.playersData) ? CMsgGameServerPlayersQueryData.fromJSON(object.playersData) : undefined,
      rulesData: isSet(object.rulesData) ? CMsgGameServerRulesQueryData.fromJSON(object.rulesData) : undefined,
    };
  },

  toJSON(message: GameServerClientQueryServerDataResponse): unknown {
    const obj: any = {};
    message.pingData !== undefined &&
      (obj.pingData = message.pingData ? CMsgGameServerPingQueryData.toJSON(message.pingData) : undefined);
    message.playersData !== undefined &&
      (obj.playersData = message.playersData ? CMsgGameServerPlayersQueryData.toJSON(message.playersData) : undefined);
    message.rulesData !== undefined &&
      (obj.rulesData = message.rulesData ? CMsgGameServerRulesQueryData.toJSON(message.rulesData) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GameServerClientQueryServerDataResponse>, I>>(
    base?: I,
  ): GameServerClientQueryServerDataResponse {
    return GameServerClientQueryServerDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameServerClientQueryServerDataResponse>, I>>(
    object: I,
  ): GameServerClientQueryServerDataResponse {
    const message = createBaseGameServerClientQueryServerDataResponse();
    message.pingData = (object.pingData !== undefined && object.pingData !== null)
      ? CMsgGameServerPingQueryData.fromPartial(object.pingData)
      : undefined;
    message.playersData = (object.playersData !== undefined && object.playersData !== null)
      ? CMsgGameServerPlayersQueryData.fromPartial(object.playersData)
      : undefined;
    message.rulesData = (object.rulesData !== undefined && object.rulesData !== null)
      ? CMsgGameServerRulesQueryData.fromPartial(object.rulesData)
      : undefined;
    return message;
  },
};

export interface GameServers {
  GetServerList(request: CGameServersGetServerListRequest): Promise<CGameServersGetServerListResponse>;
  GetServerSteamIDsByIP(
    request: CGameServersGetServerSteamIDsByIPRequest,
  ): Promise<CGameServersIPsWithSteamIDsResponse>;
  GetServerIPsBySteamID(
    request: CGameServersGetServerIPsBySteamIDRequest,
  ): Promise<CGameServersIPsWithSteamIDsResponse>;
  QueryByFakeIP(request: CGameServersQueryByFakeIPRequest): Promise<CGameServersGameServerQueryResponse>;
}

export class GameServersClientImpl implements GameServers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GameServers";
    this.rpc = rpc;
    this.GetServerList = this.GetServerList.bind(this);
    this.GetServerSteamIDsByIP = this.GetServerSteamIDsByIP.bind(this);
    this.GetServerIPsBySteamID = this.GetServerIPsBySteamID.bind(this);
    this.QueryByFakeIP = this.QueryByFakeIP.bind(this);
  }
  GetServerList(request: CGameServersGetServerListRequest): Promise<CGameServersGetServerListResponse> {
    const data = CGameServersGetServerListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetServerList", data);
    return promise.then((data) => CGameServersGetServerListResponse.decode(new _m0.Reader(data)));
  }

  GetServerSteamIDsByIP(
    request: CGameServersGetServerSteamIDsByIPRequest,
  ): Promise<CGameServersIPsWithSteamIDsResponse> {
    const data = CGameServersGetServerSteamIDsByIPRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetServerSteamIDsByIP", data);
    return promise.then((data) => CGameServersIPsWithSteamIDsResponse.decode(new _m0.Reader(data)));
  }

  GetServerIPsBySteamID(
    request: CGameServersGetServerIPsBySteamIDRequest,
  ): Promise<CGameServersIPsWithSteamIDsResponse> {
    const data = CGameServersGetServerIPsBySteamIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetServerIPsBySteamID", data);
    return promise.then((data) => CGameServersIPsWithSteamIDsResponse.decode(new _m0.Reader(data)));
  }

  QueryByFakeIP(request: CGameServersQueryByFakeIPRequest): Promise<CGameServersGameServerQueryResponse> {
    const data = CGameServersQueryByFakeIPRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryByFakeIP", data);
    return promise.then((data) => CGameServersGameServerQueryResponse.decode(new _m0.Reader(data)));
  }
}

export interface GameServerClient {
  QueryServerData(request: GameServerClientQueryServerDataRequest): Promise<GameServerClientQueryServerDataResponse>;
}

export class GameServerClientClientImpl implements GameServerClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GameServerClient";
    this.rpc = rpc;
    this.QueryServerData = this.QueryServerData.bind(this);
  }
  QueryServerData(request: GameServerClientQueryServerDataRequest): Promise<GameServerClientQueryServerDataResponse> {
    const data = GameServerClientQueryServerDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryServerData", data);
    return promise.then((data) => GameServerClientQueryServerDataResponse.decode(new _m0.Reader(data)));
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
