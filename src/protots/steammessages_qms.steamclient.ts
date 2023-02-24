/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EGameSearchAction {
  k_EGameSearchAction_None = 0,
  k_EGameSearchAction_Accept = 1,
  k_EGameSearchAction_Decline = 2,
  k_EGameSearchAction_Cancel = 3,
  UNRECOGNIZED = -1,
}

export function eGameSearchActionFromJSON(object: any): EGameSearchAction {
  switch (object) {
    case 0:
    case "k_EGameSearchAction_None":
      return EGameSearchAction.k_EGameSearchAction_None;
    case 1:
    case "k_EGameSearchAction_Accept":
      return EGameSearchAction.k_EGameSearchAction_Accept;
    case 2:
    case "k_EGameSearchAction_Decline":
      return EGameSearchAction.k_EGameSearchAction_Decline;
    case 3:
    case "k_EGameSearchAction_Cancel":
      return EGameSearchAction.k_EGameSearchAction_Cancel;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGameSearchAction.UNRECOGNIZED;
  }
}

export function eGameSearchActionToJSON(object: EGameSearchAction): string {
  switch (object) {
    case EGameSearchAction.k_EGameSearchAction_None:
      return "k_EGameSearchAction_None";
    case EGameSearchAction.k_EGameSearchAction_Accept:
      return "k_EGameSearchAction_Accept";
    case EGameSearchAction.k_EGameSearchAction_Decline:
      return "k_EGameSearchAction_Decline";
    case EGameSearchAction.k_EGameSearchAction_Cancel:
      return "k_EGameSearchAction_Cancel";
    case EGameSearchAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EGameSearchResult {
  k_EGameSearchResult_Invalid = 0,
  k_EGameSearchResult_SearchInProgress = 1,
  k_EGameSearchResult_SearchFailedNoHosts = 2,
  k_EGameSearchResult_SearchGameFound = 3,
  k_EGameSearchResult_SearchCompleteAccepted = 4,
  k_EGameSearchResult_SearchCompleteDeclined = 5,
  k_EGameSearchResult_SearchCanceled = 6,
  UNRECOGNIZED = -1,
}

export function eGameSearchResultFromJSON(object: any): EGameSearchResult {
  switch (object) {
    case 0:
    case "k_EGameSearchResult_Invalid":
      return EGameSearchResult.k_EGameSearchResult_Invalid;
    case 1:
    case "k_EGameSearchResult_SearchInProgress":
      return EGameSearchResult.k_EGameSearchResult_SearchInProgress;
    case 2:
    case "k_EGameSearchResult_SearchFailedNoHosts":
      return EGameSearchResult.k_EGameSearchResult_SearchFailedNoHosts;
    case 3:
    case "k_EGameSearchResult_SearchGameFound":
      return EGameSearchResult.k_EGameSearchResult_SearchGameFound;
    case 4:
    case "k_EGameSearchResult_SearchCompleteAccepted":
      return EGameSearchResult.k_EGameSearchResult_SearchCompleteAccepted;
    case 5:
    case "k_EGameSearchResult_SearchCompleteDeclined":
      return EGameSearchResult.k_EGameSearchResult_SearchCompleteDeclined;
    case 6:
    case "k_EGameSearchResult_SearchCanceled":
      return EGameSearchResult.k_EGameSearchResult_SearchCanceled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGameSearchResult.UNRECOGNIZED;
  }
}

export function eGameSearchResultToJSON(object: EGameSearchResult): string {
  switch (object) {
    case EGameSearchResult.k_EGameSearchResult_Invalid:
      return "k_EGameSearchResult_Invalid";
    case EGameSearchResult.k_EGameSearchResult_SearchInProgress:
      return "k_EGameSearchResult_SearchInProgress";
    case EGameSearchResult.k_EGameSearchResult_SearchFailedNoHosts:
      return "k_EGameSearchResult_SearchFailedNoHosts";
    case EGameSearchResult.k_EGameSearchResult_SearchGameFound:
      return "k_EGameSearchResult_SearchGameFound";
    case EGameSearchResult.k_EGameSearchResult_SearchCompleteAccepted:
      return "k_EGameSearchResult_SearchCompleteAccepted";
    case EGameSearchResult.k_EGameSearchResult_SearchCompleteDeclined:
      return "k_EGameSearchResult_SearchCompleteDeclined";
    case EGameSearchResult.k_EGameSearchResult_SearchCanceled:
      return "k_EGameSearchResult_SearchCanceled";
    case EGameSearchResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GameSearchParam {
  keyName: string;
  value: string[];
}

export interface CQueuedMatchmakingSearchForGameRequest {
  appid: number;
  action: EGameSearchAction;
  params: GameSearchParam[];
  playerMin: number;
  playerMax: number;
  steamidlobby: number;
  searchid: number;
}

export interface CQueuedMatchmakingSearchForGameResponse {
  gamesearchresult: EGameSearchResult;
  searchid: number;
  secondsTimeEstimate: number;
  pollFrequency: number;
  countSearching: number;
  playersInMatch: number;
  playersAccepted: number;
  connectString: string;
  steamidhost: number;
  rtimeMatchMade: number;
  rtimeNow: number;
  steamidCanceledSearch: number;
}

export interface CQueuedMatchmakingGameHostSearchForPlayersRequest {
  appid: number;
  action: EGameSearchAction;
  params: GameSearchParam[];
  playerMin: number;
  playerMax: number;
  playerMaxTeamSize: number;
  connectionString: string;
  searchid: number;
}

export interface PlayerFound {
  steamid: number;
  action: EGameSearchAction;
  params: GameSearchParam[];
  teamNumber: number;
}

export interface CQueuedMatchmakingGameHostSearchForPlayersResponse {
  gamesearchresult: EGameSearchResult;
  searchid: number;
  pollFrequency: number;
  matchid: number;
  players: PlayerFound[];
  rtimeMatchMade: number;
  rtimeNow: number;
}

export interface PlayerResult {
  steamid: number;
  value: number;
}

export interface CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
  appid: number;
  matchid: number;
  playerResults: PlayerResult[];
}

export interface CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
}

export interface CQueuedMatchmakingGameHostEndGameRequest {
  appid: number;
  matchid: number;
}

export interface CQueuedMatchmakingGameHostEndGameResponse {
}

function createBaseGameSearchParam(): GameSearchParam {
  return { keyName: "", value: [] };
}

export const GameSearchParam = {
  encode(message: GameSearchParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyName !== "") {
      writer.uint32(10).string(message.keyName);
    }
    for (const v of message.value) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameSearchParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameSearchParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyName = reader.string();
          break;
        case 2:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameSearchParam {
    return {
      keyName: isSet(object.keyName) ? String(object.keyName) : "",
      value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GameSearchParam): unknown {
    const obj: any = {};
    message.keyName !== undefined && (obj.keyName = message.keyName);
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameSearchParam>, I>>(base?: I): GameSearchParam {
    return GameSearchParam.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameSearchParam>, I>>(object: I): GameSearchParam {
    const message = createBaseGameSearchParam();
    message.keyName = object.keyName ?? "";
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseCQueuedMatchmakingSearchForGameRequest(): CQueuedMatchmakingSearchForGameRequest {
  return { appid: 0, action: 0, params: [], playerMin: 0, playerMax: 0, steamidlobby: 0, searchid: 0 };
}

export const CQueuedMatchmakingSearchForGameRequest = {
  encode(message: CQueuedMatchmakingSearchForGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    for (const v of message.params) {
      GameSearchParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.playerMin !== 0) {
      writer.uint32(32).uint32(message.playerMin);
    }
    if (message.playerMax !== 0) {
      writer.uint32(40).uint32(message.playerMax);
    }
    if (message.steamidlobby !== 0) {
      writer.uint32(49).fixed64(message.steamidlobby);
    }
    if (message.searchid !== 0) {
      writer.uint32(56).uint64(message.searchid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingSearchForGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingSearchForGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.params.push(GameSearchParam.decode(reader, reader.uint32()));
          break;
        case 4:
          message.playerMin = reader.uint32();
          break;
        case 5:
          message.playerMax = reader.uint32();
          break;
        case 6:
          message.steamidlobby = longToNumber(reader.fixed64() as Long);
          break;
        case 7:
          message.searchid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingSearchForGameRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      action: isSet(object.action) ? eGameSearchActionFromJSON(object.action) : 0,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => GameSearchParam.fromJSON(e)) : [],
      playerMin: isSet(object.playerMin) ? Number(object.playerMin) : 0,
      playerMax: isSet(object.playerMax) ? Number(object.playerMax) : 0,
      steamidlobby: isSet(object.steamidlobby) ? Number(object.steamidlobby) : 0,
      searchid: isSet(object.searchid) ? Number(object.searchid) : 0,
    };
  },

  toJSON(message: CQueuedMatchmakingSearchForGameRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.action !== undefined && (obj.action = eGameSearchActionToJSON(message.action));
    if (message.params) {
      obj.params = message.params.map((e) => e ? GameSearchParam.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    message.playerMin !== undefined && (obj.playerMin = Math.round(message.playerMin));
    message.playerMax !== undefined && (obj.playerMax = Math.round(message.playerMax));
    message.steamidlobby !== undefined && (obj.steamidlobby = Math.round(message.steamidlobby));
    message.searchid !== undefined && (obj.searchid = Math.round(message.searchid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingSearchForGameRequest>, I>>(
    base?: I,
  ): CQueuedMatchmakingSearchForGameRequest {
    return CQueuedMatchmakingSearchForGameRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingSearchForGameRequest>, I>>(
    object: I,
  ): CQueuedMatchmakingSearchForGameRequest {
    const message = createBaseCQueuedMatchmakingSearchForGameRequest();
    message.appid = object.appid ?? 0;
    message.action = object.action ?? 0;
    message.params = object.params?.map((e) => GameSearchParam.fromPartial(e)) || [];
    message.playerMin = object.playerMin ?? 0;
    message.playerMax = object.playerMax ?? 0;
    message.steamidlobby = object.steamidlobby ?? 0;
    message.searchid = object.searchid ?? 0;
    return message;
  },
};

function createBaseCQueuedMatchmakingSearchForGameResponse(): CQueuedMatchmakingSearchForGameResponse {
  return {
    gamesearchresult: 0,
    searchid: 0,
    secondsTimeEstimate: 0,
    pollFrequency: 0,
    countSearching: 0,
    playersInMatch: 0,
    playersAccepted: 0,
    connectString: "",
    steamidhost: 0,
    rtimeMatchMade: 0,
    rtimeNow: 0,
    steamidCanceledSearch: 0,
  };
}

export const CQueuedMatchmakingSearchForGameResponse = {
  encode(message: CQueuedMatchmakingSearchForGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gamesearchresult !== 0) {
      writer.uint32(8).int32(message.gamesearchresult);
    }
    if (message.searchid !== 0) {
      writer.uint32(16).uint64(message.searchid);
    }
    if (message.secondsTimeEstimate !== 0) {
      writer.uint32(24).uint32(message.secondsTimeEstimate);
    }
    if (message.pollFrequency !== 0) {
      writer.uint32(32).uint32(message.pollFrequency);
    }
    if (message.countSearching !== 0) {
      writer.uint32(40).uint32(message.countSearching);
    }
    if (message.playersInMatch !== 0) {
      writer.uint32(48).uint32(message.playersInMatch);
    }
    if (message.playersAccepted !== 0) {
      writer.uint32(56).uint32(message.playersAccepted);
    }
    if (message.connectString !== "") {
      writer.uint32(74).string(message.connectString);
    }
    if (message.steamidhost !== 0) {
      writer.uint32(81).fixed64(message.steamidhost);
    }
    if (message.rtimeMatchMade !== 0) {
      writer.uint32(88).uint32(message.rtimeMatchMade);
    }
    if (message.rtimeNow !== 0) {
      writer.uint32(96).uint32(message.rtimeNow);
    }
    if (message.steamidCanceledSearch !== 0) {
      writer.uint32(105).fixed64(message.steamidCanceledSearch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingSearchForGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingSearchForGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamesearchresult = reader.int32() as any;
          break;
        case 2:
          message.searchid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.secondsTimeEstimate = reader.uint32();
          break;
        case 4:
          message.pollFrequency = reader.uint32();
          break;
        case 5:
          message.countSearching = reader.uint32();
          break;
        case 6:
          message.playersInMatch = reader.uint32();
          break;
        case 7:
          message.playersAccepted = reader.uint32();
          break;
        case 9:
          message.connectString = reader.string();
          break;
        case 10:
          message.steamidhost = longToNumber(reader.fixed64() as Long);
          break;
        case 11:
          message.rtimeMatchMade = reader.uint32();
          break;
        case 12:
          message.rtimeNow = reader.uint32();
          break;
        case 13:
          message.steamidCanceledSearch = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingSearchForGameResponse {
    return {
      gamesearchresult: isSet(object.gamesearchresult) ? eGameSearchResultFromJSON(object.gamesearchresult) : 0,
      searchid: isSet(object.searchid) ? Number(object.searchid) : 0,
      secondsTimeEstimate: isSet(object.secondsTimeEstimate) ? Number(object.secondsTimeEstimate) : 0,
      pollFrequency: isSet(object.pollFrequency) ? Number(object.pollFrequency) : 0,
      countSearching: isSet(object.countSearching) ? Number(object.countSearching) : 0,
      playersInMatch: isSet(object.playersInMatch) ? Number(object.playersInMatch) : 0,
      playersAccepted: isSet(object.playersAccepted) ? Number(object.playersAccepted) : 0,
      connectString: isSet(object.connectString) ? String(object.connectString) : "",
      steamidhost: isSet(object.steamidhost) ? Number(object.steamidhost) : 0,
      rtimeMatchMade: isSet(object.rtimeMatchMade) ? Number(object.rtimeMatchMade) : 0,
      rtimeNow: isSet(object.rtimeNow) ? Number(object.rtimeNow) : 0,
      steamidCanceledSearch: isSet(object.steamidCanceledSearch) ? Number(object.steamidCanceledSearch) : 0,
    };
  },

  toJSON(message: CQueuedMatchmakingSearchForGameResponse): unknown {
    const obj: any = {};
    message.gamesearchresult !== undefined &&
      (obj.gamesearchresult = eGameSearchResultToJSON(message.gamesearchresult));
    message.searchid !== undefined && (obj.searchid = Math.round(message.searchid));
    message.secondsTimeEstimate !== undefined && (obj.secondsTimeEstimate = Math.round(message.secondsTimeEstimate));
    message.pollFrequency !== undefined && (obj.pollFrequency = Math.round(message.pollFrequency));
    message.countSearching !== undefined && (obj.countSearching = Math.round(message.countSearching));
    message.playersInMatch !== undefined && (obj.playersInMatch = Math.round(message.playersInMatch));
    message.playersAccepted !== undefined && (obj.playersAccepted = Math.round(message.playersAccepted));
    message.connectString !== undefined && (obj.connectString = message.connectString);
    message.steamidhost !== undefined && (obj.steamidhost = Math.round(message.steamidhost));
    message.rtimeMatchMade !== undefined && (obj.rtimeMatchMade = Math.round(message.rtimeMatchMade));
    message.rtimeNow !== undefined && (obj.rtimeNow = Math.round(message.rtimeNow));
    message.steamidCanceledSearch !== undefined &&
      (obj.steamidCanceledSearch = Math.round(message.steamidCanceledSearch));
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingSearchForGameResponse>, I>>(
    base?: I,
  ): CQueuedMatchmakingSearchForGameResponse {
    return CQueuedMatchmakingSearchForGameResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingSearchForGameResponse>, I>>(
    object: I,
  ): CQueuedMatchmakingSearchForGameResponse {
    const message = createBaseCQueuedMatchmakingSearchForGameResponse();
    message.gamesearchresult = object.gamesearchresult ?? 0;
    message.searchid = object.searchid ?? 0;
    message.secondsTimeEstimate = object.secondsTimeEstimate ?? 0;
    message.pollFrequency = object.pollFrequency ?? 0;
    message.countSearching = object.countSearching ?? 0;
    message.playersInMatch = object.playersInMatch ?? 0;
    message.playersAccepted = object.playersAccepted ?? 0;
    message.connectString = object.connectString ?? "";
    message.steamidhost = object.steamidhost ?? 0;
    message.rtimeMatchMade = object.rtimeMatchMade ?? 0;
    message.rtimeNow = object.rtimeNow ?? 0;
    message.steamidCanceledSearch = object.steamidCanceledSearch ?? 0;
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostSearchForPlayersRequest(): CQueuedMatchmakingGameHostSearchForPlayersRequest {
  return {
    appid: 0,
    action: 0,
    params: [],
    playerMin: 0,
    playerMax: 0,
    playerMaxTeamSize: 0,
    connectionString: "",
    searchid: 0,
  };
}

export const CQueuedMatchmakingGameHostSearchForPlayersRequest = {
  encode(
    message: CQueuedMatchmakingGameHostSearchForPlayersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    for (const v of message.params) {
      GameSearchParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.playerMin !== 0) {
      writer.uint32(32).uint32(message.playerMin);
    }
    if (message.playerMax !== 0) {
      writer.uint32(40).uint32(message.playerMax);
    }
    if (message.playerMaxTeamSize !== 0) {
      writer.uint32(48).uint32(message.playerMaxTeamSize);
    }
    if (message.connectionString !== "") {
      writer.uint32(58).string(message.connectionString);
    }
    if (message.searchid !== 0) {
      writer.uint32(64).uint64(message.searchid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostSearchForPlayersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostSearchForPlayersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.params.push(GameSearchParam.decode(reader, reader.uint32()));
          break;
        case 4:
          message.playerMin = reader.uint32();
          break;
        case 5:
          message.playerMax = reader.uint32();
          break;
        case 6:
          message.playerMaxTeamSize = reader.uint32();
          break;
        case 7:
          message.connectionString = reader.string();
          break;
        case 8:
          message.searchid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingGameHostSearchForPlayersRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      action: isSet(object.action) ? eGameSearchActionFromJSON(object.action) : 0,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => GameSearchParam.fromJSON(e)) : [],
      playerMin: isSet(object.playerMin) ? Number(object.playerMin) : 0,
      playerMax: isSet(object.playerMax) ? Number(object.playerMax) : 0,
      playerMaxTeamSize: isSet(object.playerMaxTeamSize) ? Number(object.playerMaxTeamSize) : 0,
      connectionString: isSet(object.connectionString) ? String(object.connectionString) : "",
      searchid: isSet(object.searchid) ? Number(object.searchid) : 0,
    };
  },

  toJSON(message: CQueuedMatchmakingGameHostSearchForPlayersRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.action !== undefined && (obj.action = eGameSearchActionToJSON(message.action));
    if (message.params) {
      obj.params = message.params.map((e) => e ? GameSearchParam.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    message.playerMin !== undefined && (obj.playerMin = Math.round(message.playerMin));
    message.playerMax !== undefined && (obj.playerMax = Math.round(message.playerMax));
    message.playerMaxTeamSize !== undefined && (obj.playerMaxTeamSize = Math.round(message.playerMaxTeamSize));
    message.connectionString !== undefined && (obj.connectionString = message.connectionString);
    message.searchid !== undefined && (obj.searchid = Math.round(message.searchid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSearchForPlayersRequest>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostSearchForPlayersRequest {
    return CQueuedMatchmakingGameHostSearchForPlayersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSearchForPlayersRequest>, I>>(
    object: I,
  ): CQueuedMatchmakingGameHostSearchForPlayersRequest {
    const message = createBaseCQueuedMatchmakingGameHostSearchForPlayersRequest();
    message.appid = object.appid ?? 0;
    message.action = object.action ?? 0;
    message.params = object.params?.map((e) => GameSearchParam.fromPartial(e)) || [];
    message.playerMin = object.playerMin ?? 0;
    message.playerMax = object.playerMax ?? 0;
    message.playerMaxTeamSize = object.playerMaxTeamSize ?? 0;
    message.connectionString = object.connectionString ?? "";
    message.searchid = object.searchid ?? 0;
    return message;
  },
};

function createBasePlayerFound(): PlayerFound {
  return { steamid: 0, action: 0, params: [], teamNumber: 0 };
}

export const PlayerFound = {
  encode(message: PlayerFound, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    for (const v of message.params) {
      GameSearchParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.teamNumber !== 0) {
      writer.uint32(32).uint32(message.teamNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerFound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerFound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.params.push(GameSearchParam.decode(reader, reader.uint32()));
          break;
        case 4:
          message.teamNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerFound {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      action: isSet(object.action) ? eGameSearchActionFromJSON(object.action) : 0,
      params: Array.isArray(object?.params) ? object.params.map((e: any) => GameSearchParam.fromJSON(e)) : [],
      teamNumber: isSet(object.teamNumber) ? Number(object.teamNumber) : 0,
    };
  },

  toJSON(message: PlayerFound): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.action !== undefined && (obj.action = eGameSearchActionToJSON(message.action));
    if (message.params) {
      obj.params = message.params.map((e) => e ? GameSearchParam.toJSON(e) : undefined);
    } else {
      obj.params = [];
    }
    message.teamNumber !== undefined && (obj.teamNumber = Math.round(message.teamNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerFound>, I>>(base?: I): PlayerFound {
    return PlayerFound.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayerFound>, I>>(object: I): PlayerFound {
    const message = createBasePlayerFound();
    message.steamid = object.steamid ?? 0;
    message.action = object.action ?? 0;
    message.params = object.params?.map((e) => GameSearchParam.fromPartial(e)) || [];
    message.teamNumber = object.teamNumber ?? 0;
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostSearchForPlayersResponse(): CQueuedMatchmakingGameHostSearchForPlayersResponse {
  return {
    gamesearchresult: 0,
    searchid: 0,
    pollFrequency: 0,
    matchid: 0,
    players: [],
    rtimeMatchMade: 0,
    rtimeNow: 0,
  };
}

export const CQueuedMatchmakingGameHostSearchForPlayersResponse = {
  encode(
    message: CQueuedMatchmakingGameHostSearchForPlayersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gamesearchresult !== 0) {
      writer.uint32(8).int32(message.gamesearchresult);
    }
    if (message.searchid !== 0) {
      writer.uint32(16).uint64(message.searchid);
    }
    if (message.pollFrequency !== 0) {
      writer.uint32(24).uint32(message.pollFrequency);
    }
    if (message.matchid !== 0) {
      writer.uint32(32).uint64(message.matchid);
    }
    for (const v of message.players) {
      PlayerFound.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rtimeMatchMade !== 0) {
      writer.uint32(48).uint32(message.rtimeMatchMade);
    }
    if (message.rtimeNow !== 0) {
      writer.uint32(56).uint32(message.rtimeNow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostSearchForPlayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostSearchForPlayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamesearchresult = reader.int32() as any;
          break;
        case 2:
          message.searchid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.pollFrequency = reader.uint32();
          break;
        case 4:
          message.matchid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.players.push(PlayerFound.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rtimeMatchMade = reader.uint32();
          break;
        case 7:
          message.rtimeNow = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingGameHostSearchForPlayersResponse {
    return {
      gamesearchresult: isSet(object.gamesearchresult) ? eGameSearchResultFromJSON(object.gamesearchresult) : 0,
      searchid: isSet(object.searchid) ? Number(object.searchid) : 0,
      pollFrequency: isSet(object.pollFrequency) ? Number(object.pollFrequency) : 0,
      matchid: isSet(object.matchid) ? Number(object.matchid) : 0,
      players: Array.isArray(object?.players) ? object.players.map((e: any) => PlayerFound.fromJSON(e)) : [],
      rtimeMatchMade: isSet(object.rtimeMatchMade) ? Number(object.rtimeMatchMade) : 0,
      rtimeNow: isSet(object.rtimeNow) ? Number(object.rtimeNow) : 0,
    };
  },

  toJSON(message: CQueuedMatchmakingGameHostSearchForPlayersResponse): unknown {
    const obj: any = {};
    message.gamesearchresult !== undefined &&
      (obj.gamesearchresult = eGameSearchResultToJSON(message.gamesearchresult));
    message.searchid !== undefined && (obj.searchid = Math.round(message.searchid));
    message.pollFrequency !== undefined && (obj.pollFrequency = Math.round(message.pollFrequency));
    message.matchid !== undefined && (obj.matchid = Math.round(message.matchid));
    if (message.players) {
      obj.players = message.players.map((e) => e ? PlayerFound.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.rtimeMatchMade !== undefined && (obj.rtimeMatchMade = Math.round(message.rtimeMatchMade));
    message.rtimeNow !== undefined && (obj.rtimeNow = Math.round(message.rtimeNow));
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSearchForPlayersResponse>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostSearchForPlayersResponse {
    return CQueuedMatchmakingGameHostSearchForPlayersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSearchForPlayersResponse>, I>>(
    object: I,
  ): CQueuedMatchmakingGameHostSearchForPlayersResponse {
    const message = createBaseCQueuedMatchmakingGameHostSearchForPlayersResponse();
    message.gamesearchresult = object.gamesearchresult ?? 0;
    message.searchid = object.searchid ?? 0;
    message.pollFrequency = object.pollFrequency ?? 0;
    message.matchid = object.matchid ?? 0;
    message.players = object.players?.map((e) => PlayerFound.fromPartial(e)) || [];
    message.rtimeMatchMade = object.rtimeMatchMade ?? 0;
    message.rtimeNow = object.rtimeNow ?? 0;
    return message;
  },
};

function createBasePlayerResult(): PlayerResult {
  return { steamid: 0, value: 0 };
}

export const PlayerResult = {
  encode(message: PlayerResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerResult {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: PlayerResult): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerResult>, I>>(base?: I): PlayerResult {
    return PlayerResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayerResult>, I>>(object: I): PlayerResult {
    const message = createBasePlayerResult();
    message.steamid = object.steamid ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostSubmitPlayerResultRequest(): CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
  return { appid: 0, matchid: 0, playerResults: [] };
}

export const CQueuedMatchmakingGameHostSubmitPlayerResultRequest = {
  encode(
    message: CQueuedMatchmakingGameHostSubmitPlayerResultRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.matchid !== 0) {
      writer.uint32(16).uint64(message.matchid);
    }
    for (const v of message.playerResults) {
      PlayerResult.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostSubmitPlayerResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.matchid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.playerResults.push(PlayerResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      matchid: isSet(object.matchid) ? Number(object.matchid) : 0,
      playerResults: Array.isArray(object?.playerResults)
        ? object.playerResults.map((e: any) => PlayerResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CQueuedMatchmakingGameHostSubmitPlayerResultRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.matchid !== undefined && (obj.matchid = Math.round(message.matchid));
    if (message.playerResults) {
      obj.playerResults = message.playerResults.map((e) => e ? PlayerResult.toJSON(e) : undefined);
    } else {
      obj.playerResults = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSubmitPlayerResultRequest>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
    return CQueuedMatchmakingGameHostSubmitPlayerResultRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSubmitPlayerResultRequest>, I>>(
    object: I,
  ): CQueuedMatchmakingGameHostSubmitPlayerResultRequest {
    const message = createBaseCQueuedMatchmakingGameHostSubmitPlayerResultRequest();
    message.appid = object.appid ?? 0;
    message.matchid = object.matchid ?? 0;
    message.playerResults = object.playerResults?.map((e) => PlayerResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostSubmitPlayerResultResponse(): CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
  return {};
}

export const CQueuedMatchmakingGameHostSubmitPlayerResultResponse = {
  encode(
    _: CQueuedMatchmakingGameHostSubmitPlayerResultResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostSubmitPlayerResultResponse();
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

  fromJSON(_: any): CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
    return {};
  },

  toJSON(_: CQueuedMatchmakingGameHostSubmitPlayerResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSubmitPlayerResultResponse>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
    return CQueuedMatchmakingGameHostSubmitPlayerResultResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostSubmitPlayerResultResponse>, I>>(
    _: I,
  ): CQueuedMatchmakingGameHostSubmitPlayerResultResponse {
    const message = createBaseCQueuedMatchmakingGameHostSubmitPlayerResultResponse();
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostEndGameRequest(): CQueuedMatchmakingGameHostEndGameRequest {
  return { appid: 0, matchid: 0 };
}

export const CQueuedMatchmakingGameHostEndGameRequest = {
  encode(message: CQueuedMatchmakingGameHostEndGameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.matchid !== 0) {
      writer.uint32(16).uint64(message.matchid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostEndGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostEndGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.matchid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CQueuedMatchmakingGameHostEndGameRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      matchid: isSet(object.matchid) ? Number(object.matchid) : 0,
    };
  },

  toJSON(message: CQueuedMatchmakingGameHostEndGameRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.matchid !== undefined && (obj.matchid = Math.round(message.matchid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostEndGameRequest>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostEndGameRequest {
    return CQueuedMatchmakingGameHostEndGameRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostEndGameRequest>, I>>(
    object: I,
  ): CQueuedMatchmakingGameHostEndGameRequest {
    const message = createBaseCQueuedMatchmakingGameHostEndGameRequest();
    message.appid = object.appid ?? 0;
    message.matchid = object.matchid ?? 0;
    return message;
  },
};

function createBaseCQueuedMatchmakingGameHostEndGameResponse(): CQueuedMatchmakingGameHostEndGameResponse {
  return {};
}

export const CQueuedMatchmakingGameHostEndGameResponse = {
  encode(_: CQueuedMatchmakingGameHostEndGameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQueuedMatchmakingGameHostEndGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQueuedMatchmakingGameHostEndGameResponse();
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

  fromJSON(_: any): CQueuedMatchmakingGameHostEndGameResponse {
    return {};
  },

  toJSON(_: CQueuedMatchmakingGameHostEndGameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostEndGameResponse>, I>>(
    base?: I,
  ): CQueuedMatchmakingGameHostEndGameResponse {
    return CQueuedMatchmakingGameHostEndGameResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQueuedMatchmakingGameHostEndGameResponse>, I>>(
    _: I,
  ): CQueuedMatchmakingGameHostEndGameResponse {
    const message = createBaseCQueuedMatchmakingGameHostEndGameResponse();
    return message;
  },
};

export interface QueuedMatchmaking {
  SearchForGame(request: CQueuedMatchmakingSearchForGameRequest): Promise<CQueuedMatchmakingSearchForGameResponse>;
}

export class QueuedMatchmakingClientImpl implements QueuedMatchmaking {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QueuedMatchmaking";
    this.rpc = rpc;
    this.SearchForGame = this.SearchForGame.bind(this);
  }
  SearchForGame(request: CQueuedMatchmakingSearchForGameRequest): Promise<CQueuedMatchmakingSearchForGameResponse> {
    const data = CQueuedMatchmakingSearchForGameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SearchForGame", data);
    return promise.then((data) => CQueuedMatchmakingSearchForGameResponse.decode(new _m0.Reader(data)));
  }
}

export interface QueuedMatchmakingGameHost {
  SearchForPlayers(
    request: CQueuedMatchmakingGameHostSearchForPlayersRequest,
  ): Promise<CQueuedMatchmakingGameHostSearchForPlayersResponse>;
  SubmitPlayerResult(
    request: CQueuedMatchmakingGameHostSubmitPlayerResultRequest,
  ): Promise<CQueuedMatchmakingGameHostSubmitPlayerResultResponse>;
  EndGame(request: CQueuedMatchmakingGameHostEndGameRequest): Promise<CQueuedMatchmakingGameHostEndGameResponse>;
}

export class QueuedMatchmakingGameHostClientImpl implements QueuedMatchmakingGameHost {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "QueuedMatchmakingGameHost";
    this.rpc = rpc;
    this.SearchForPlayers = this.SearchForPlayers.bind(this);
    this.SubmitPlayerResult = this.SubmitPlayerResult.bind(this);
    this.EndGame = this.EndGame.bind(this);
  }
  SearchForPlayers(
    request: CQueuedMatchmakingGameHostSearchForPlayersRequest,
  ): Promise<CQueuedMatchmakingGameHostSearchForPlayersResponse> {
    const data = CQueuedMatchmakingGameHostSearchForPlayersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SearchForPlayers", data);
    return promise.then((data) => CQueuedMatchmakingGameHostSearchForPlayersResponse.decode(new _m0.Reader(data)));
  }

  SubmitPlayerResult(
    request: CQueuedMatchmakingGameHostSubmitPlayerResultRequest,
  ): Promise<CQueuedMatchmakingGameHostSubmitPlayerResultResponse> {
    const data = CQueuedMatchmakingGameHostSubmitPlayerResultRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitPlayerResult", data);
    return promise.then((data) => CQueuedMatchmakingGameHostSubmitPlayerResultResponse.decode(new _m0.Reader(data)));
  }

  EndGame(request: CQueuedMatchmakingGameHostEndGameRequest): Promise<CQueuedMatchmakingGameHostEndGameResponse> {
    const data = CQueuedMatchmakingGameHostEndGameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EndGame", data);
    return promise.then((data) => CQueuedMatchmakingGameHostEndGameResponse.decode(new _m0.Reader(data)));
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
