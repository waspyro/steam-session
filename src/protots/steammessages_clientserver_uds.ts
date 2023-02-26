/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientUDSP2PSessionStarted {
  steamidRemote: string;
  appid: number;
}

export interface CMsgClientUDSP2PSessionEnded {
  steamidRemote: string;
  appid: number;
  sessionLengthSec: number;
  sessionError: number;
  nattype: number;
  bytesRecv: number;
  bytesSent: number;
  bytesSentRelay: number;
  bytesRecvRelay: number;
  timeToConnectMs: number;
}

export interface CMsgClientGetClientDetails {
}

export interface CMsgClientGetClientDetailsResponse {
  packageVersion: number;
  os: string;
  machineName: string;
  ipPublic: string;
  ipPrivate: string;
  gamesRunning: CMsgClientGetClientDetailsResponse_Game[];
  bytesAvailable: string;
  protocolVersion: number;
  clientcommVersion: number;
}

export interface CMsgClientGetClientDetailsResponse_Game {
  appid: number;
  extraInfo: string;
  timeRunningSec: number;
}

export interface CMsgClientGetClientAppList {
  media: boolean;
  tools: boolean;
  games: boolean;
  onlyInstalled: boolean;
  onlyChanging: boolean;
  comics: boolean;
  includeClientInfo: boolean;
}

export interface CMsgClientGetClientAppListResponse {
  apps: CMsgClientGetClientAppListResponse_App[];
  bytesAvailable: string;
  clientInfo: CMsgClientGetClientDetailsResponse | undefined;
}

export interface CMsgClientGetClientAppListResponse_App {
  appid: number;
  category: string;
  appType: string;
  favorite: boolean;
  installed: boolean;
  autoUpdate: boolean;
  bytesDownloaded: string;
  bytesToDownload: string;
  bytesDownloadRate: number;
  dlcs: CMsgClientGetClientAppListResponse_App_DLC[];
  downloadPaused: boolean;
  numDownloading: number;
  numPaused: number;
  changing: boolean;
  availableOnPlatform: boolean;
  bytesStaged: string;
  bytesToStage: string;
  bytesRequired: string;
  sourceBuildid: number;
  targetBuildid: number;
  estimatedSecondsRemaining: number;
  queuePosition: number;
  uninstalling: boolean;
  rtTimeScheduled: number;
}

export interface CMsgClientGetClientAppListResponse_App_DLC {
  appid: number;
  installed: boolean;
}

export interface CMsgClientInstallClientApp {
  appid: number;
}

export interface CMsgClientInstallClientAppResponse {
  result: number;
}

export interface CMsgClientUninstallClientApp {
  appid: number;
}

export interface CMsgClientUninstallClientAppResponse {
  result: number;
}

export interface CMsgClientSetClientAppUpdateState {
  appid: number;
  update: boolean;
}

export interface CMsgClientSetClientAppUpdateStateResponse {
  result: number;
}

export interface CMsgClientEnableOrDisableDownloads {
  enable: boolean;
}

export interface CMsgClientEnableOrDisableDownloadsResponse {
  result: number;
}

function createBaseCMsgClientUDSP2PSessionStarted(): CMsgClientUDSP2PSessionStarted {
  return { steamidRemote: "0", appid: 0 };
}

export const CMsgClientUDSP2PSessionStarted = {
  encode(message: CMsgClientUDSP2PSessionStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidRemote !== "0") {
      writer.uint32(9).fixed64(message.steamidRemote);
    }
    if (message.appid !== 0) {
      writer.uint32(16).int32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUDSP2PSessionStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUDSP2PSessionStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidRemote = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUDSP2PSessionStarted {
    return {
      steamidRemote: isSet(object.steamidRemote) ? String(object.steamidRemote) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CMsgClientUDSP2PSessionStarted): unknown {
    const obj: any = {};
    message.steamidRemote !== undefined && (obj.steamidRemote = message.steamidRemote);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUDSP2PSessionStarted>, I>>(base?: I): CMsgClientUDSP2PSessionStarted {
    return CMsgClientUDSP2PSessionStarted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUDSP2PSessionStarted>, I>>(
    object: I,
  ): CMsgClientUDSP2PSessionStarted {
    const message = createBaseCMsgClientUDSP2PSessionStarted();
    message.steamidRemote = object.steamidRemote ?? "0";
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgClientUDSP2PSessionEnded(): CMsgClientUDSP2PSessionEnded {
  return {
    steamidRemote: "0",
    appid: 0,
    sessionLengthSec: 0,
    sessionError: 0,
    nattype: 0,
    bytesRecv: 0,
    bytesSent: 0,
    bytesSentRelay: 0,
    bytesRecvRelay: 0,
    timeToConnectMs: 0,
  };
}

export const CMsgClientUDSP2PSessionEnded = {
  encode(message: CMsgClientUDSP2PSessionEnded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidRemote !== "0") {
      writer.uint32(9).fixed64(message.steamidRemote);
    }
    if (message.appid !== 0) {
      writer.uint32(16).int32(message.appid);
    }
    if (message.sessionLengthSec !== 0) {
      writer.uint32(24).int32(message.sessionLengthSec);
    }
    if (message.sessionError !== 0) {
      writer.uint32(32).int32(message.sessionError);
    }
    if (message.nattype !== 0) {
      writer.uint32(40).int32(message.nattype);
    }
    if (message.bytesRecv !== 0) {
      writer.uint32(48).int32(message.bytesRecv);
    }
    if (message.bytesSent !== 0) {
      writer.uint32(56).int32(message.bytesSent);
    }
    if (message.bytesSentRelay !== 0) {
      writer.uint32(64).int32(message.bytesSentRelay);
    }
    if (message.bytesRecvRelay !== 0) {
      writer.uint32(72).int32(message.bytesRecvRelay);
    }
    if (message.timeToConnectMs !== 0) {
      writer.uint32(80).int32(message.timeToConnectMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUDSP2PSessionEnded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUDSP2PSessionEnded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidRemote = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.int32();
          break;
        case 3:
          message.sessionLengthSec = reader.int32();
          break;
        case 4:
          message.sessionError = reader.int32();
          break;
        case 5:
          message.nattype = reader.int32();
          break;
        case 6:
          message.bytesRecv = reader.int32();
          break;
        case 7:
          message.bytesSent = reader.int32();
          break;
        case 8:
          message.bytesSentRelay = reader.int32();
          break;
        case 9:
          message.bytesRecvRelay = reader.int32();
          break;
        case 10:
          message.timeToConnectMs = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUDSP2PSessionEnded {
    return {
      steamidRemote: isSet(object.steamidRemote) ? String(object.steamidRemote) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      sessionLengthSec: isSet(object.sessionLengthSec) ? Number(object.sessionLengthSec) : 0,
      sessionError: isSet(object.sessionError) ? Number(object.sessionError) : 0,
      nattype: isSet(object.nattype) ? Number(object.nattype) : 0,
      bytesRecv: isSet(object.bytesRecv) ? Number(object.bytesRecv) : 0,
      bytesSent: isSet(object.bytesSent) ? Number(object.bytesSent) : 0,
      bytesSentRelay: isSet(object.bytesSentRelay) ? Number(object.bytesSentRelay) : 0,
      bytesRecvRelay: isSet(object.bytesRecvRelay) ? Number(object.bytesRecvRelay) : 0,
      timeToConnectMs: isSet(object.timeToConnectMs) ? Number(object.timeToConnectMs) : 0,
    };
  },

  toJSON(message: CMsgClientUDSP2PSessionEnded): unknown {
    const obj: any = {};
    message.steamidRemote !== undefined && (obj.steamidRemote = message.steamidRemote);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.sessionLengthSec !== undefined && (obj.sessionLengthSec = Math.round(message.sessionLengthSec));
    message.sessionError !== undefined && (obj.sessionError = Math.round(message.sessionError));
    message.nattype !== undefined && (obj.nattype = Math.round(message.nattype));
    message.bytesRecv !== undefined && (obj.bytesRecv = Math.round(message.bytesRecv));
    message.bytesSent !== undefined && (obj.bytesSent = Math.round(message.bytesSent));
    message.bytesSentRelay !== undefined && (obj.bytesSentRelay = Math.round(message.bytesSentRelay));
    message.bytesRecvRelay !== undefined && (obj.bytesRecvRelay = Math.round(message.bytesRecvRelay));
    message.timeToConnectMs !== undefined && (obj.timeToConnectMs = Math.round(message.timeToConnectMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUDSP2PSessionEnded>, I>>(base?: I): CMsgClientUDSP2PSessionEnded {
    return CMsgClientUDSP2PSessionEnded.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUDSP2PSessionEnded>, I>>(object: I): CMsgClientUDSP2PSessionEnded {
    const message = createBaseCMsgClientUDSP2PSessionEnded();
    message.steamidRemote = object.steamidRemote ?? "0";
    message.appid = object.appid ?? 0;
    message.sessionLengthSec = object.sessionLengthSec ?? 0;
    message.sessionError = object.sessionError ?? 0;
    message.nattype = object.nattype ?? 0;
    message.bytesRecv = object.bytesRecv ?? 0;
    message.bytesSent = object.bytesSent ?? 0;
    message.bytesSentRelay = object.bytesSentRelay ?? 0;
    message.bytesRecvRelay = object.bytesRecvRelay ?? 0;
    message.timeToConnectMs = object.timeToConnectMs ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetClientDetails(): CMsgClientGetClientDetails {
  return {};
}

export const CMsgClientGetClientDetails = {
  encode(_: CMsgClientGetClientDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientDetails();
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

  fromJSON(_: any): CMsgClientGetClientDetails {
    return {};
  },

  toJSON(_: CMsgClientGetClientDetails): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientDetails>, I>>(base?: I): CMsgClientGetClientDetails {
    return CMsgClientGetClientDetails.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientDetails>, I>>(_: I): CMsgClientGetClientDetails {
    const message = createBaseCMsgClientGetClientDetails();
    return message;
  },
};

function createBaseCMsgClientGetClientDetailsResponse(): CMsgClientGetClientDetailsResponse {
  return {
    packageVersion: 0,
    os: "",
    machineName: "",
    ipPublic: "",
    ipPrivate: "",
    gamesRunning: [],
    bytesAvailable: "0",
    protocolVersion: 0,
    clientcommVersion: 0,
  };
}

export const CMsgClientGetClientDetailsResponse = {
  encode(message: CMsgClientGetClientDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageVersion !== 0) {
      writer.uint32(8).uint32(message.packageVersion);
    }
    if (message.os !== "") {
      writer.uint32(18).string(message.os);
    }
    if (message.machineName !== "") {
      writer.uint32(26).string(message.machineName);
    }
    if (message.ipPublic !== "") {
      writer.uint32(34).string(message.ipPublic);
    }
    if (message.ipPrivate !== "") {
      writer.uint32(42).string(message.ipPrivate);
    }
    for (const v of message.gamesRunning) {
      CMsgClientGetClientDetailsResponse_Game.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.bytesAvailable !== "0") {
      writer.uint32(56).uint64(message.bytesAvailable);
    }
    if (message.protocolVersion !== 0) {
      writer.uint32(64).uint32(message.protocolVersion);
    }
    if (message.clientcommVersion !== 0) {
      writer.uint32(72).uint32(message.clientcommVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageVersion = reader.uint32();
          break;
        case 2:
          message.os = reader.string();
          break;
        case 3:
          message.machineName = reader.string();
          break;
        case 4:
          message.ipPublic = reader.string();
          break;
        case 5:
          message.ipPrivate = reader.string();
          break;
        case 6:
          message.gamesRunning.push(CMsgClientGetClientDetailsResponse_Game.decode(reader, reader.uint32()));
          break;
        case 7:
          message.bytesAvailable = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.protocolVersion = reader.uint32();
          break;
        case 9:
          message.clientcommVersion = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientDetailsResponse {
    return {
      packageVersion: isSet(object.packageVersion) ? Number(object.packageVersion) : 0,
      os: isSet(object.os) ? String(object.os) : "",
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      ipPublic: isSet(object.ipPublic) ? String(object.ipPublic) : "",
      ipPrivate: isSet(object.ipPrivate) ? String(object.ipPrivate) : "",
      gamesRunning: Array.isArray(object?.gamesRunning)
        ? object.gamesRunning.map((e: any) => CMsgClientGetClientDetailsResponse_Game.fromJSON(e))
        : [],
      bytesAvailable: isSet(object.bytesAvailable) ? String(object.bytesAvailable) : "0",
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      clientcommVersion: isSet(object.clientcommVersion) ? Number(object.clientcommVersion) : 0,
    };
  },

  toJSON(message: CMsgClientGetClientDetailsResponse): unknown {
    const obj: any = {};
    message.packageVersion !== undefined && (obj.packageVersion = Math.round(message.packageVersion));
    message.os !== undefined && (obj.os = message.os);
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.ipPublic !== undefined && (obj.ipPublic = message.ipPublic);
    message.ipPrivate !== undefined && (obj.ipPrivate = message.ipPrivate);
    if (message.gamesRunning) {
      obj.gamesRunning = message.gamesRunning.map((e) =>
        e ? CMsgClientGetClientDetailsResponse_Game.toJSON(e) : undefined
      );
    } else {
      obj.gamesRunning = [];
    }
    message.bytesAvailable !== undefined && (obj.bytesAvailable = message.bytesAvailable);
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.clientcommVersion !== undefined && (obj.clientcommVersion = Math.round(message.clientcommVersion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientDetailsResponse>, I>>(
    base?: I,
  ): CMsgClientGetClientDetailsResponse {
    return CMsgClientGetClientDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientDetailsResponse>, I>>(
    object: I,
  ): CMsgClientGetClientDetailsResponse {
    const message = createBaseCMsgClientGetClientDetailsResponse();
    message.packageVersion = object.packageVersion ?? 0;
    message.os = object.os ?? "";
    message.machineName = object.machineName ?? "";
    message.ipPublic = object.ipPublic ?? "";
    message.ipPrivate = object.ipPrivate ?? "";
    message.gamesRunning = object.gamesRunning?.map((e) => CMsgClientGetClientDetailsResponse_Game.fromPartial(e)) ||
      [];
    message.bytesAvailable = object.bytesAvailable ?? "0";
    message.protocolVersion = object.protocolVersion ?? 0;
    message.clientcommVersion = object.clientcommVersion ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetClientDetailsResponse_Game(): CMsgClientGetClientDetailsResponse_Game {
  return { appid: 0, extraInfo: "", timeRunningSec: 0 };
}

export const CMsgClientGetClientDetailsResponse_Game = {
  encode(message: CMsgClientGetClientDetailsResponse_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.extraInfo !== "") {
      writer.uint32(18).string(message.extraInfo);
    }
    if (message.timeRunningSec !== 0) {
      writer.uint32(24).uint32(message.timeRunningSec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientDetailsResponse_Game {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientDetailsResponse_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.extraInfo = reader.string();
          break;
        case 3:
          message.timeRunningSec = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientDetailsResponse_Game {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : "",
      timeRunningSec: isSet(object.timeRunningSec) ? Number(object.timeRunningSec) : 0,
    };
  },

  toJSON(message: CMsgClientGetClientDetailsResponse_Game): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    message.timeRunningSec !== undefined && (obj.timeRunningSec = Math.round(message.timeRunningSec));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientDetailsResponse_Game>, I>>(
    base?: I,
  ): CMsgClientGetClientDetailsResponse_Game {
    return CMsgClientGetClientDetailsResponse_Game.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientDetailsResponse_Game>, I>>(
    object: I,
  ): CMsgClientGetClientDetailsResponse_Game {
    const message = createBaseCMsgClientGetClientDetailsResponse_Game();
    message.appid = object.appid ?? 0;
    message.extraInfo = object.extraInfo ?? "";
    message.timeRunningSec = object.timeRunningSec ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetClientAppList(): CMsgClientGetClientAppList {
  return {
    media: false,
    tools: false,
    games: false,
    onlyInstalled: false,
    onlyChanging: false,
    comics: false,
    includeClientInfo: false,
  };
}

export const CMsgClientGetClientAppList = {
  encode(message: CMsgClientGetClientAppList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.media === true) {
      writer.uint32(8).bool(message.media);
    }
    if (message.tools === true) {
      writer.uint32(16).bool(message.tools);
    }
    if (message.games === true) {
      writer.uint32(24).bool(message.games);
    }
    if (message.onlyInstalled === true) {
      writer.uint32(32).bool(message.onlyInstalled);
    }
    if (message.onlyChanging === true) {
      writer.uint32(40).bool(message.onlyChanging);
    }
    if (message.comics === true) {
      writer.uint32(48).bool(message.comics);
    }
    if (message.includeClientInfo === true) {
      writer.uint32(56).bool(message.includeClientInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientAppList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientAppList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.media = reader.bool();
          break;
        case 2:
          message.tools = reader.bool();
          break;
        case 3:
          message.games = reader.bool();
          break;
        case 4:
          message.onlyInstalled = reader.bool();
          break;
        case 5:
          message.onlyChanging = reader.bool();
          break;
        case 6:
          message.comics = reader.bool();
          break;
        case 7:
          message.includeClientInfo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientAppList {
    return {
      media: isSet(object.media) ? Boolean(object.media) : false,
      tools: isSet(object.tools) ? Boolean(object.tools) : false,
      games: isSet(object.games) ? Boolean(object.games) : false,
      onlyInstalled: isSet(object.onlyInstalled) ? Boolean(object.onlyInstalled) : false,
      onlyChanging: isSet(object.onlyChanging) ? Boolean(object.onlyChanging) : false,
      comics: isSet(object.comics) ? Boolean(object.comics) : false,
      includeClientInfo: isSet(object.includeClientInfo) ? Boolean(object.includeClientInfo) : false,
    };
  },

  toJSON(message: CMsgClientGetClientAppList): unknown {
    const obj: any = {};
    message.media !== undefined && (obj.media = message.media);
    message.tools !== undefined && (obj.tools = message.tools);
    message.games !== undefined && (obj.games = message.games);
    message.onlyInstalled !== undefined && (obj.onlyInstalled = message.onlyInstalled);
    message.onlyChanging !== undefined && (obj.onlyChanging = message.onlyChanging);
    message.comics !== undefined && (obj.comics = message.comics);
    message.includeClientInfo !== undefined && (obj.includeClientInfo = message.includeClientInfo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientAppList>, I>>(base?: I): CMsgClientGetClientAppList {
    return CMsgClientGetClientAppList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientAppList>, I>>(object: I): CMsgClientGetClientAppList {
    const message = createBaseCMsgClientGetClientAppList();
    message.media = object.media ?? false;
    message.tools = object.tools ?? false;
    message.games = object.games ?? false;
    message.onlyInstalled = object.onlyInstalled ?? false;
    message.onlyChanging = object.onlyChanging ?? false;
    message.comics = object.comics ?? false;
    message.includeClientInfo = object.includeClientInfo ?? false;
    return message;
  },
};

function createBaseCMsgClientGetClientAppListResponse(): CMsgClientGetClientAppListResponse {
  return { apps: [], bytesAvailable: "0", clientInfo: undefined };
}

export const CMsgClientGetClientAppListResponse = {
  encode(message: CMsgClientGetClientAppListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      CMsgClientGetClientAppListResponse_App.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.bytesAvailable !== "0") {
      writer.uint32(16).uint64(message.bytesAvailable);
    }
    if (message.clientInfo !== undefined) {
      CMsgClientGetClientDetailsResponse.encode(message.clientInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientAppListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientAppListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apps.push(CMsgClientGetClientAppListResponse_App.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bytesAvailable = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.clientInfo = CMsgClientGetClientDetailsResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientAppListResponse {
    return {
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CMsgClientGetClientAppListResponse_App.fromJSON(e))
        : [],
      bytesAvailable: isSet(object.bytesAvailable) ? String(object.bytesAvailable) : "0",
      clientInfo: isSet(object.clientInfo) ? CMsgClientGetClientDetailsResponse.fromJSON(object.clientInfo) : undefined,
    };
  },

  toJSON(message: CMsgClientGetClientAppListResponse): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CMsgClientGetClientAppListResponse_App.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    message.bytesAvailable !== undefined && (obj.bytesAvailable = message.bytesAvailable);
    message.clientInfo !== undefined &&
      (obj.clientInfo = message.clientInfo ? CMsgClientGetClientDetailsResponse.toJSON(message.clientInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse>, I>>(
    base?: I,
  ): CMsgClientGetClientAppListResponse {
    return CMsgClientGetClientAppListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse>, I>>(
    object: I,
  ): CMsgClientGetClientAppListResponse {
    const message = createBaseCMsgClientGetClientAppListResponse();
    message.apps = object.apps?.map((e) => CMsgClientGetClientAppListResponse_App.fromPartial(e)) || [];
    message.bytesAvailable = object.bytesAvailable ?? "0";
    message.clientInfo = (object.clientInfo !== undefined && object.clientInfo !== null)
      ? CMsgClientGetClientDetailsResponse.fromPartial(object.clientInfo)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientGetClientAppListResponse_App(): CMsgClientGetClientAppListResponse_App {
  return {
    appid: 0,
    category: "",
    appType: "",
    favorite: false,
    installed: false,
    autoUpdate: false,
    bytesDownloaded: "0",
    bytesToDownload: "0",
    bytesDownloadRate: 0,
    dlcs: [],
    downloadPaused: false,
    numDownloading: 0,
    numPaused: 0,
    changing: false,
    availableOnPlatform: false,
    bytesStaged: "0",
    bytesToStage: "0",
    bytesRequired: "0",
    sourceBuildid: 0,
    targetBuildid: 0,
    estimatedSecondsRemaining: 0,
    queuePosition: 0,
    uninstalling: false,
    rtTimeScheduled: 0,
  };
}

export const CMsgClientGetClientAppListResponse_App = {
  encode(message: CMsgClientGetClientAppListResponse_App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.appType !== "") {
      writer.uint32(82).string(message.appType);
    }
    if (message.favorite === true) {
      writer.uint32(24).bool(message.favorite);
    }
    if (message.installed === true) {
      writer.uint32(32).bool(message.installed);
    }
    if (message.autoUpdate === true) {
      writer.uint32(40).bool(message.autoUpdate);
    }
    if (message.bytesDownloaded !== "0") {
      writer.uint32(48).uint64(message.bytesDownloaded);
    }
    if (message.bytesToDownload !== "0") {
      writer.uint32(56).uint64(message.bytesToDownload);
    }
    if (message.bytesDownloadRate !== 0) {
      writer.uint32(64).uint32(message.bytesDownloadRate);
    }
    for (const v of message.dlcs) {
      CMsgClientGetClientAppListResponse_App_DLC.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.downloadPaused === true) {
      writer.uint32(88).bool(message.downloadPaused);
    }
    if (message.numDownloading !== 0) {
      writer.uint32(96).uint32(message.numDownloading);
    }
    if (message.numPaused !== 0) {
      writer.uint32(104).uint32(message.numPaused);
    }
    if (message.changing === true) {
      writer.uint32(112).bool(message.changing);
    }
    if (message.availableOnPlatform === true) {
      writer.uint32(120).bool(message.availableOnPlatform);
    }
    if (message.bytesStaged !== "0") {
      writer.uint32(128).uint64(message.bytesStaged);
    }
    if (message.bytesToStage !== "0") {
      writer.uint32(136).uint64(message.bytesToStage);
    }
    if (message.bytesRequired !== "0") {
      writer.uint32(144).uint64(message.bytesRequired);
    }
    if (message.sourceBuildid !== 0) {
      writer.uint32(152).uint32(message.sourceBuildid);
    }
    if (message.targetBuildid !== 0) {
      writer.uint32(160).uint32(message.targetBuildid);
    }
    if (message.estimatedSecondsRemaining !== 0) {
      writer.uint32(168).uint32(message.estimatedSecondsRemaining);
    }
    if (message.queuePosition !== 0) {
      writer.uint32(176).int32(message.queuePosition);
    }
    if (message.uninstalling === true) {
      writer.uint32(184).bool(message.uninstalling);
    }
    if (message.rtTimeScheduled !== 0) {
      writer.uint32(192).uint32(message.rtTimeScheduled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientAppListResponse_App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientAppListResponse_App();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 10:
          message.appType = reader.string();
          break;
        case 3:
          message.favorite = reader.bool();
          break;
        case 4:
          message.installed = reader.bool();
          break;
        case 5:
          message.autoUpdate = reader.bool();
          break;
        case 6:
          message.bytesDownloaded = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.bytesToDownload = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.bytesDownloadRate = reader.uint32();
          break;
        case 9:
          message.dlcs.push(CMsgClientGetClientAppListResponse_App_DLC.decode(reader, reader.uint32()));
          break;
        case 11:
          message.downloadPaused = reader.bool();
          break;
        case 12:
          message.numDownloading = reader.uint32();
          break;
        case 13:
          message.numPaused = reader.uint32();
          break;
        case 14:
          message.changing = reader.bool();
          break;
        case 15:
          message.availableOnPlatform = reader.bool();
          break;
        case 16:
          message.bytesStaged = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.bytesToStage = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.bytesRequired = longToString(reader.uint64() as Long);
          break;
        case 19:
          message.sourceBuildid = reader.uint32();
          break;
        case 20:
          message.targetBuildid = reader.uint32();
          break;
        case 21:
          message.estimatedSecondsRemaining = reader.uint32();
          break;
        case 22:
          message.queuePosition = reader.int32();
          break;
        case 23:
          message.uninstalling = reader.bool();
          break;
        case 24:
          message.rtTimeScheduled = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientAppListResponse_App {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      appType: isSet(object.appType) ? String(object.appType) : "",
      favorite: isSet(object.favorite) ? Boolean(object.favorite) : false,
      installed: isSet(object.installed) ? Boolean(object.installed) : false,
      autoUpdate: isSet(object.autoUpdate) ? Boolean(object.autoUpdate) : false,
      bytesDownloaded: isSet(object.bytesDownloaded) ? String(object.bytesDownloaded) : "0",
      bytesToDownload: isSet(object.bytesToDownload) ? String(object.bytesToDownload) : "0",
      bytesDownloadRate: isSet(object.bytesDownloadRate) ? Number(object.bytesDownloadRate) : 0,
      dlcs: Array.isArray(object?.dlcs)
        ? object.dlcs.map((e: any) => CMsgClientGetClientAppListResponse_App_DLC.fromJSON(e))
        : [],
      downloadPaused: isSet(object.downloadPaused) ? Boolean(object.downloadPaused) : false,
      numDownloading: isSet(object.numDownloading) ? Number(object.numDownloading) : 0,
      numPaused: isSet(object.numPaused) ? Number(object.numPaused) : 0,
      changing: isSet(object.changing) ? Boolean(object.changing) : false,
      availableOnPlatform: isSet(object.availableOnPlatform) ? Boolean(object.availableOnPlatform) : false,
      bytesStaged: isSet(object.bytesStaged) ? String(object.bytesStaged) : "0",
      bytesToStage: isSet(object.bytesToStage) ? String(object.bytesToStage) : "0",
      bytesRequired: isSet(object.bytesRequired) ? String(object.bytesRequired) : "0",
      sourceBuildid: isSet(object.sourceBuildid) ? Number(object.sourceBuildid) : 0,
      targetBuildid: isSet(object.targetBuildid) ? Number(object.targetBuildid) : 0,
      estimatedSecondsRemaining: isSet(object.estimatedSecondsRemaining) ? Number(object.estimatedSecondsRemaining) : 0,
      queuePosition: isSet(object.queuePosition) ? Number(object.queuePosition) : 0,
      uninstalling: isSet(object.uninstalling) ? Boolean(object.uninstalling) : false,
      rtTimeScheduled: isSet(object.rtTimeScheduled) ? Number(object.rtTimeScheduled) : 0,
    };
  },

  toJSON(message: CMsgClientGetClientAppListResponse_App): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.category !== undefined && (obj.category = message.category);
    message.appType !== undefined && (obj.appType = message.appType);
    message.favorite !== undefined && (obj.favorite = message.favorite);
    message.installed !== undefined && (obj.installed = message.installed);
    message.autoUpdate !== undefined && (obj.autoUpdate = message.autoUpdate);
    message.bytesDownloaded !== undefined && (obj.bytesDownloaded = message.bytesDownloaded);
    message.bytesToDownload !== undefined && (obj.bytesToDownload = message.bytesToDownload);
    message.bytesDownloadRate !== undefined && (obj.bytesDownloadRate = Math.round(message.bytesDownloadRate));
    if (message.dlcs) {
      obj.dlcs = message.dlcs.map((e) => e ? CMsgClientGetClientAppListResponse_App_DLC.toJSON(e) : undefined);
    } else {
      obj.dlcs = [];
    }
    message.downloadPaused !== undefined && (obj.downloadPaused = message.downloadPaused);
    message.numDownloading !== undefined && (obj.numDownloading = Math.round(message.numDownloading));
    message.numPaused !== undefined && (obj.numPaused = Math.round(message.numPaused));
    message.changing !== undefined && (obj.changing = message.changing);
    message.availableOnPlatform !== undefined && (obj.availableOnPlatform = message.availableOnPlatform);
    message.bytesStaged !== undefined && (obj.bytesStaged = message.bytesStaged);
    message.bytesToStage !== undefined && (obj.bytesToStage = message.bytesToStage);
    message.bytesRequired !== undefined && (obj.bytesRequired = message.bytesRequired);
    message.sourceBuildid !== undefined && (obj.sourceBuildid = Math.round(message.sourceBuildid));
    message.targetBuildid !== undefined && (obj.targetBuildid = Math.round(message.targetBuildid));
    message.estimatedSecondsRemaining !== undefined &&
      (obj.estimatedSecondsRemaining = Math.round(message.estimatedSecondsRemaining));
    message.queuePosition !== undefined && (obj.queuePosition = Math.round(message.queuePosition));
    message.uninstalling !== undefined && (obj.uninstalling = message.uninstalling);
    message.rtTimeScheduled !== undefined && (obj.rtTimeScheduled = Math.round(message.rtTimeScheduled));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse_App>, I>>(
    base?: I,
  ): CMsgClientGetClientAppListResponse_App {
    return CMsgClientGetClientAppListResponse_App.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse_App>, I>>(
    object: I,
  ): CMsgClientGetClientAppListResponse_App {
    const message = createBaseCMsgClientGetClientAppListResponse_App();
    message.appid = object.appid ?? 0;
    message.category = object.category ?? "";
    message.appType = object.appType ?? "";
    message.favorite = object.favorite ?? false;
    message.installed = object.installed ?? false;
    message.autoUpdate = object.autoUpdate ?? false;
    message.bytesDownloaded = object.bytesDownloaded ?? "0";
    message.bytesToDownload = object.bytesToDownload ?? "0";
    message.bytesDownloadRate = object.bytesDownloadRate ?? 0;
    message.dlcs = object.dlcs?.map((e) => CMsgClientGetClientAppListResponse_App_DLC.fromPartial(e)) || [];
    message.downloadPaused = object.downloadPaused ?? false;
    message.numDownloading = object.numDownloading ?? 0;
    message.numPaused = object.numPaused ?? 0;
    message.changing = object.changing ?? false;
    message.availableOnPlatform = object.availableOnPlatform ?? false;
    message.bytesStaged = object.bytesStaged ?? "0";
    message.bytesToStage = object.bytesToStage ?? "0";
    message.bytesRequired = object.bytesRequired ?? "0";
    message.sourceBuildid = object.sourceBuildid ?? 0;
    message.targetBuildid = object.targetBuildid ?? 0;
    message.estimatedSecondsRemaining = object.estimatedSecondsRemaining ?? 0;
    message.queuePosition = object.queuePosition ?? 0;
    message.uninstalling = object.uninstalling ?? false;
    message.rtTimeScheduled = object.rtTimeScheduled ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetClientAppListResponse_App_DLC(): CMsgClientGetClientAppListResponse_App_DLC {
  return { appid: 0, installed: false };
}

export const CMsgClientGetClientAppListResponse_App_DLC = {
  encode(message: CMsgClientGetClientAppListResponse_App_DLC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.installed === true) {
      writer.uint32(16).bool(message.installed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetClientAppListResponse_App_DLC {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetClientAppListResponse_App_DLC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.installed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetClientAppListResponse_App_DLC {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      installed: isSet(object.installed) ? Boolean(object.installed) : false,
    };
  },

  toJSON(message: CMsgClientGetClientAppListResponse_App_DLC): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.installed !== undefined && (obj.installed = message.installed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse_App_DLC>, I>>(
    base?: I,
  ): CMsgClientGetClientAppListResponse_App_DLC {
    return CMsgClientGetClientAppListResponse_App_DLC.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetClientAppListResponse_App_DLC>, I>>(
    object: I,
  ): CMsgClientGetClientAppListResponse_App_DLC {
    const message = createBaseCMsgClientGetClientAppListResponse_App_DLC();
    message.appid = object.appid ?? 0;
    message.installed = object.installed ?? false;
    return message;
  },
};

function createBaseCMsgClientInstallClientApp(): CMsgClientInstallClientApp {
  return { appid: 0 };
}

export const CMsgClientInstallClientApp = {
  encode(message: CMsgClientInstallClientApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientInstallClientApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientInstallClientApp();
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

  fromJSON(object: any): CMsgClientInstallClientApp {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgClientInstallClientApp): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientInstallClientApp>, I>>(base?: I): CMsgClientInstallClientApp {
    return CMsgClientInstallClientApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientInstallClientApp>, I>>(object: I): CMsgClientInstallClientApp {
    const message = createBaseCMsgClientInstallClientApp();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgClientInstallClientAppResponse(): CMsgClientInstallClientAppResponse {
  return { result: 0 };
}

export const CMsgClientInstallClientAppResponse = {
  encode(message: CMsgClientInstallClientAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientInstallClientAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientInstallClientAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientInstallClientAppResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgClientInstallClientAppResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientInstallClientAppResponse>, I>>(
    base?: I,
  ): CMsgClientInstallClientAppResponse {
    return CMsgClientInstallClientAppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientInstallClientAppResponse>, I>>(
    object: I,
  ): CMsgClientInstallClientAppResponse {
    const message = createBaseCMsgClientInstallClientAppResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgClientUninstallClientApp(): CMsgClientUninstallClientApp {
  return { appid: 0 };
}

export const CMsgClientUninstallClientApp = {
  encode(message: CMsgClientUninstallClientApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUninstallClientApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUninstallClientApp();
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

  fromJSON(object: any): CMsgClientUninstallClientApp {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgClientUninstallClientApp): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUninstallClientApp>, I>>(base?: I): CMsgClientUninstallClientApp {
    return CMsgClientUninstallClientApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUninstallClientApp>, I>>(object: I): CMsgClientUninstallClientApp {
    const message = createBaseCMsgClientUninstallClientApp();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgClientUninstallClientAppResponse(): CMsgClientUninstallClientAppResponse {
  return { result: 0 };
}

export const CMsgClientUninstallClientAppResponse = {
  encode(message: CMsgClientUninstallClientAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientUninstallClientAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientUninstallClientAppResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientUninstallClientAppResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgClientUninstallClientAppResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientUninstallClientAppResponse>, I>>(
    base?: I,
  ): CMsgClientUninstallClientAppResponse {
    return CMsgClientUninstallClientAppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientUninstallClientAppResponse>, I>>(
    object: I,
  ): CMsgClientUninstallClientAppResponse {
    const message = createBaseCMsgClientUninstallClientAppResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgClientSetClientAppUpdateState(): CMsgClientSetClientAppUpdateState {
  return { appid: 0, update: false };
}

export const CMsgClientSetClientAppUpdateState = {
  encode(message: CMsgClientSetClientAppUpdateState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.update === true) {
      writer.uint32(16).bool(message.update);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSetClientAppUpdateState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSetClientAppUpdateState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.update = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSetClientAppUpdateState {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      update: isSet(object.update) ? Boolean(object.update) : false,
    };
  },

  toJSON(message: CMsgClientSetClientAppUpdateState): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.update !== undefined && (obj.update = message.update);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSetClientAppUpdateState>, I>>(
    base?: I,
  ): CMsgClientSetClientAppUpdateState {
    return CMsgClientSetClientAppUpdateState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSetClientAppUpdateState>, I>>(
    object: I,
  ): CMsgClientSetClientAppUpdateState {
    const message = createBaseCMsgClientSetClientAppUpdateState();
    message.appid = object.appid ?? 0;
    message.update = object.update ?? false;
    return message;
  },
};

function createBaseCMsgClientSetClientAppUpdateStateResponse(): CMsgClientSetClientAppUpdateStateResponse {
  return { result: 0 };
}

export const CMsgClientSetClientAppUpdateStateResponse = {
  encode(message: CMsgClientSetClientAppUpdateStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSetClientAppUpdateStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSetClientAppUpdateStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSetClientAppUpdateStateResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgClientSetClientAppUpdateStateResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSetClientAppUpdateStateResponse>, I>>(
    base?: I,
  ): CMsgClientSetClientAppUpdateStateResponse {
    return CMsgClientSetClientAppUpdateStateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSetClientAppUpdateStateResponse>, I>>(
    object: I,
  ): CMsgClientSetClientAppUpdateStateResponse {
    const message = createBaseCMsgClientSetClientAppUpdateStateResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgClientEnableOrDisableDownloads(): CMsgClientEnableOrDisableDownloads {
  return { enable: false };
}

export const CMsgClientEnableOrDisableDownloads = {
  encode(message: CMsgClientEnableOrDisableDownloads, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientEnableOrDisableDownloads {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientEnableOrDisableDownloads();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientEnableOrDisableDownloads {
    return { enable: isSet(object.enable) ? Boolean(object.enable) : false };
  },

  toJSON(message: CMsgClientEnableOrDisableDownloads): unknown {
    const obj: any = {};
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientEnableOrDisableDownloads>, I>>(
    base?: I,
  ): CMsgClientEnableOrDisableDownloads {
    return CMsgClientEnableOrDisableDownloads.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientEnableOrDisableDownloads>, I>>(
    object: I,
  ): CMsgClientEnableOrDisableDownloads {
    const message = createBaseCMsgClientEnableOrDisableDownloads();
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseCMsgClientEnableOrDisableDownloadsResponse(): CMsgClientEnableOrDisableDownloadsResponse {
  return { result: 0 };
}

export const CMsgClientEnableOrDisableDownloadsResponse = {
  encode(message: CMsgClientEnableOrDisableDownloadsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientEnableOrDisableDownloadsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientEnableOrDisableDownloadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientEnableOrDisableDownloadsResponse {
    return { result: isSet(object.result) ? Number(object.result) : 0 };
  },

  toJSON(message: CMsgClientEnableOrDisableDownloadsResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientEnableOrDisableDownloadsResponse>, I>>(
    base?: I,
  ): CMsgClientEnableOrDisableDownloadsResponse {
    return CMsgClientEnableOrDisableDownloadsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientEnableOrDisableDownloadsResponse>, I>>(
    object: I,
  ): CMsgClientEnableOrDisableDownloadsResponse {
    const message = createBaseCMsgClientEnableOrDisableDownloadsResponse();
    message.result = object.result ?? 0;
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
