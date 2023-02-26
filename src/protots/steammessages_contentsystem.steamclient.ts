/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CContentServerDirectoryGetServersForSteamPipeRequest {
  cellId: number;
  maxServers: number;
  ipOverride: string;
  launcherType: number;
  ipv6Public: string;
}

export interface CContentServerDirectoryServerInfo {
  type: string;
  sourceId: number;
  cellId: number;
  load: number;
  weightedLoad: number;
  numEntriesInClientList: number;
  steamChinaOnly: boolean;
  host: string;
  vhost: string;
  useAsProxy: boolean;
  proxyRequestPathTemplate: string;
  httpsSupport: string;
  allowedAppIds: number[];
  preferredServer: boolean;
}

export interface CContentServerDirectoryGetServersForSteamPipeResponse {
  servers: CContentServerDirectoryServerInfo[];
}

export interface CContentServerDirectoryGetDepotPatchInfoRequest {
  appid: number;
  depotid: number;
  sourceManifestid: string;
  targetManifestid: string;
}

export interface CContentServerDirectoryGetDepotPatchInfoResponse {
  isAvailable: boolean;
  patchSize: string;
  patchedChunksSize: string;
}

export interface CContentServerDirectoryGetClientUpdateHostsRequest {
  cachedSignature: string;
}

export interface CContentServerDirectoryGetClientUpdateHostsResponse {
  hostsKv: string;
  validUntilTime: string;
  ipCountry: string;
}

export interface CContentServerDirectoryGetManifestRequestCodeRequest {
  appId: number;
  depotId: number;
  manifestId: string;
  appBranch: string;
  branchPasswordHash: string;
}

export interface CContentServerDirectoryGetManifestRequestCodeResponse {
  manifestRequestCode: string;
}

export interface CContentServerDirectoryGetCDNAuthTokenRequest {
  depotId: number;
  hostName: string;
  appId: number;
}

export interface CContentServerDirectoryGetCDNAuthTokenResponse {
  token: string;
  expirationTime: number;
}

export interface CContentServerDirectoryRequestPeerContentServerRequest {
  remoteClientId: string;
  steamid: string;
  serverRemoteClientId: string;
  appId: number;
  currentBuildId: number;
}

export interface CContentServerDirectoryRequestPeerContentServerResponse {
  serverPort: number;
}

export interface CContentServerDirectoryGetPeerContentInfoRequest {
  remoteClientId: string;
  steamid: string;
  serverRemoteClientId: string;
}

export interface CContentServerDirectoryGetPeerContentInfoResponse {
  appids: number[];
}

function createBaseCContentServerDirectoryGetServersForSteamPipeRequest(): CContentServerDirectoryGetServersForSteamPipeRequest {
  return { cellId: 0, maxServers: 0, ipOverride: "", launcherType: 0, ipv6Public: "" };
}

export const CContentServerDirectoryGetServersForSteamPipeRequest = {
  encode(
    message: CContentServerDirectoryGetServersForSteamPipeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    if (message.maxServers !== 0) {
      writer.uint32(16).uint32(message.maxServers);
    }
    if (message.ipOverride !== "") {
      writer.uint32(26).string(message.ipOverride);
    }
    if (message.launcherType !== 0) {
      writer.uint32(32).int32(message.launcherType);
    }
    if (message.ipv6Public !== "") {
      writer.uint32(42).string(message.ipv6Public);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetServersForSteamPipeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetServersForSteamPipeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.maxServers = reader.uint32();
          break;
        case 3:
          message.ipOverride = reader.string();
          break;
        case 4:
          message.launcherType = reader.int32();
          break;
        case 5:
          message.ipv6Public = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetServersForSteamPipeRequest {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      maxServers: isSet(object.maxServers) ? Number(object.maxServers) : 0,
      ipOverride: isSet(object.ipOverride) ? String(object.ipOverride) : "",
      launcherType: isSet(object.launcherType) ? Number(object.launcherType) : 0,
      ipv6Public: isSet(object.ipv6Public) ? String(object.ipv6Public) : "",
    };
  },

  toJSON(message: CContentServerDirectoryGetServersForSteamPipeRequest): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.maxServers !== undefined && (obj.maxServers = Math.round(message.maxServers));
    message.ipOverride !== undefined && (obj.ipOverride = message.ipOverride);
    message.launcherType !== undefined && (obj.launcherType = Math.round(message.launcherType));
    message.ipv6Public !== undefined && (obj.ipv6Public = message.ipv6Public);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetServersForSteamPipeRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetServersForSteamPipeRequest {
    return CContentServerDirectoryGetServersForSteamPipeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetServersForSteamPipeRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetServersForSteamPipeRequest {
    const message = createBaseCContentServerDirectoryGetServersForSteamPipeRequest();
    message.cellId = object.cellId ?? 0;
    message.maxServers = object.maxServers ?? 0;
    message.ipOverride = object.ipOverride ?? "";
    message.launcherType = object.launcherType ?? 0;
    message.ipv6Public = object.ipv6Public ?? "";
    return message;
  },
};

function createBaseCContentServerDirectoryServerInfo(): CContentServerDirectoryServerInfo {
  return {
    type: "",
    sourceId: 0,
    cellId: 0,
    load: 0,
    weightedLoad: 0,
    numEntriesInClientList: 0,
    steamChinaOnly: false,
    host: "",
    vhost: "",
    useAsProxy: false,
    proxyRequestPathTemplate: "",
    httpsSupport: "",
    allowedAppIds: [],
    preferredServer: false,
  };
}

export const CContentServerDirectoryServerInfo = {
  encode(message: CContentServerDirectoryServerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.sourceId !== 0) {
      writer.uint32(16).int32(message.sourceId);
    }
    if (message.cellId !== 0) {
      writer.uint32(24).int32(message.cellId);
    }
    if (message.load !== 0) {
      writer.uint32(32).int32(message.load);
    }
    if (message.weightedLoad !== 0) {
      writer.uint32(45).float(message.weightedLoad);
    }
    if (message.numEntriesInClientList !== 0) {
      writer.uint32(48).int32(message.numEntriesInClientList);
    }
    if (message.steamChinaOnly === true) {
      writer.uint32(56).bool(message.steamChinaOnly);
    }
    if (message.host !== "") {
      writer.uint32(66).string(message.host);
    }
    if (message.vhost !== "") {
      writer.uint32(74).string(message.vhost);
    }
    if (message.useAsProxy === true) {
      writer.uint32(80).bool(message.useAsProxy);
    }
    if (message.proxyRequestPathTemplate !== "") {
      writer.uint32(90).string(message.proxyRequestPathTemplate);
    }
    if (message.httpsSupport !== "") {
      writer.uint32(98).string(message.httpsSupport);
    }
    writer.uint32(106).fork();
    for (const v of message.allowedAppIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.preferredServer === true) {
      writer.uint32(112).bool(message.preferredServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryServerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryServerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.sourceId = reader.int32();
          break;
        case 3:
          message.cellId = reader.int32();
          break;
        case 4:
          message.load = reader.int32();
          break;
        case 5:
          message.weightedLoad = reader.float();
          break;
        case 6:
          message.numEntriesInClientList = reader.int32();
          break;
        case 7:
          message.steamChinaOnly = reader.bool();
          break;
        case 8:
          message.host = reader.string();
          break;
        case 9:
          message.vhost = reader.string();
          break;
        case 10:
          message.useAsProxy = reader.bool();
          break;
        case 11:
          message.proxyRequestPathTemplate = reader.string();
          break;
        case 12:
          message.httpsSupport = reader.string();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedAppIds.push(reader.uint32());
            }
          } else {
            message.allowedAppIds.push(reader.uint32());
          }
          break;
        case 14:
          message.preferredServer = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryServerInfo {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      sourceId: isSet(object.sourceId) ? Number(object.sourceId) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      load: isSet(object.load) ? Number(object.load) : 0,
      weightedLoad: isSet(object.weightedLoad) ? Number(object.weightedLoad) : 0,
      numEntriesInClientList: isSet(object.numEntriesInClientList) ? Number(object.numEntriesInClientList) : 0,
      steamChinaOnly: isSet(object.steamChinaOnly) ? Boolean(object.steamChinaOnly) : false,
      host: isSet(object.host) ? String(object.host) : "",
      vhost: isSet(object.vhost) ? String(object.vhost) : "",
      useAsProxy: isSet(object.useAsProxy) ? Boolean(object.useAsProxy) : false,
      proxyRequestPathTemplate: isSet(object.proxyRequestPathTemplate) ? String(object.proxyRequestPathTemplate) : "",
      httpsSupport: isSet(object.httpsSupport) ? String(object.httpsSupport) : "",
      allowedAppIds: Array.isArray(object?.allowedAppIds) ? object.allowedAppIds.map((e: any) => Number(e)) : [],
      preferredServer: isSet(object.preferredServer) ? Boolean(object.preferredServer) : false,
    };
  },

  toJSON(message: CContentServerDirectoryServerInfo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.sourceId !== undefined && (obj.sourceId = Math.round(message.sourceId));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.load !== undefined && (obj.load = Math.round(message.load));
    message.weightedLoad !== undefined && (obj.weightedLoad = message.weightedLoad);
    message.numEntriesInClientList !== undefined &&
      (obj.numEntriesInClientList = Math.round(message.numEntriesInClientList));
    message.steamChinaOnly !== undefined && (obj.steamChinaOnly = message.steamChinaOnly);
    message.host !== undefined && (obj.host = message.host);
    message.vhost !== undefined && (obj.vhost = message.vhost);
    message.useAsProxy !== undefined && (obj.useAsProxy = message.useAsProxy);
    message.proxyRequestPathTemplate !== undefined && (obj.proxyRequestPathTemplate = message.proxyRequestPathTemplate);
    message.httpsSupport !== undefined && (obj.httpsSupport = message.httpsSupport);
    if (message.allowedAppIds) {
      obj.allowedAppIds = message.allowedAppIds.map((e) => Math.round(e));
    } else {
      obj.allowedAppIds = [];
    }
    message.preferredServer !== undefined && (obj.preferredServer = message.preferredServer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryServerInfo>, I>>(
    base?: I,
  ): CContentServerDirectoryServerInfo {
    return CContentServerDirectoryServerInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryServerInfo>, I>>(
    object: I,
  ): CContentServerDirectoryServerInfo {
    const message = createBaseCContentServerDirectoryServerInfo();
    message.type = object.type ?? "";
    message.sourceId = object.sourceId ?? 0;
    message.cellId = object.cellId ?? 0;
    message.load = object.load ?? 0;
    message.weightedLoad = object.weightedLoad ?? 0;
    message.numEntriesInClientList = object.numEntriesInClientList ?? 0;
    message.steamChinaOnly = object.steamChinaOnly ?? false;
    message.host = object.host ?? "";
    message.vhost = object.vhost ?? "";
    message.useAsProxy = object.useAsProxy ?? false;
    message.proxyRequestPathTemplate = object.proxyRequestPathTemplate ?? "";
    message.httpsSupport = object.httpsSupport ?? "";
    message.allowedAppIds = object.allowedAppIds?.map((e) => e) || [];
    message.preferredServer = object.preferredServer ?? false;
    return message;
  },
};

function createBaseCContentServerDirectoryGetServersForSteamPipeResponse(): CContentServerDirectoryGetServersForSteamPipeResponse {
  return { servers: [] };
}

export const CContentServerDirectoryGetServersForSteamPipeResponse = {
  encode(
    message: CContentServerDirectoryGetServersForSteamPipeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.servers) {
      CContentServerDirectoryServerInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetServersForSteamPipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetServersForSteamPipeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.servers.push(CContentServerDirectoryServerInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetServersForSteamPipeResponse {
    return {
      servers: Array.isArray(object?.servers)
        ? object.servers.map((e: any) => CContentServerDirectoryServerInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CContentServerDirectoryGetServersForSteamPipeResponse): unknown {
    const obj: any = {};
    if (message.servers) {
      obj.servers = message.servers.map((e) => e ? CContentServerDirectoryServerInfo.toJSON(e) : undefined);
    } else {
      obj.servers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetServersForSteamPipeResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetServersForSteamPipeResponse {
    return CContentServerDirectoryGetServersForSteamPipeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetServersForSteamPipeResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetServersForSteamPipeResponse {
    const message = createBaseCContentServerDirectoryGetServersForSteamPipeResponse();
    message.servers = object.servers?.map((e) => CContentServerDirectoryServerInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCContentServerDirectoryGetDepotPatchInfoRequest(): CContentServerDirectoryGetDepotPatchInfoRequest {
  return { appid: 0, depotid: 0, sourceManifestid: "0", targetManifestid: "0" };
}

export const CContentServerDirectoryGetDepotPatchInfoRequest = {
  encode(
    message: CContentServerDirectoryGetDepotPatchInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.sourceManifestid !== "0") {
      writer.uint32(24).uint64(message.sourceManifestid);
    }
    if (message.targetManifestid !== "0") {
      writer.uint32(32).uint64(message.targetManifestid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetDepotPatchInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetDepotPatchInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotid = reader.uint32();
          break;
        case 3:
          message.sourceManifestid = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.targetManifestid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetDepotPatchInfoRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      sourceManifestid: isSet(object.sourceManifestid) ? String(object.sourceManifestid) : "0",
      targetManifestid: isSet(object.targetManifestid) ? String(object.targetManifestid) : "0",
    };
  },

  toJSON(message: CContentServerDirectoryGetDepotPatchInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.sourceManifestid !== undefined && (obj.sourceManifestid = message.sourceManifestid);
    message.targetManifestid !== undefined && (obj.targetManifestid = message.targetManifestid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetDepotPatchInfoRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetDepotPatchInfoRequest {
    return CContentServerDirectoryGetDepotPatchInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetDepotPatchInfoRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetDepotPatchInfoRequest {
    const message = createBaseCContentServerDirectoryGetDepotPatchInfoRequest();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.sourceManifestid = object.sourceManifestid ?? "0";
    message.targetManifestid = object.targetManifestid ?? "0";
    return message;
  },
};

function createBaseCContentServerDirectoryGetDepotPatchInfoResponse(): CContentServerDirectoryGetDepotPatchInfoResponse {
  return { isAvailable: false, patchSize: "0", patchedChunksSize: "0" };
}

export const CContentServerDirectoryGetDepotPatchInfoResponse = {
  encode(
    message: CContentServerDirectoryGetDepotPatchInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isAvailable === true) {
      writer.uint32(8).bool(message.isAvailable);
    }
    if (message.patchSize !== "0") {
      writer.uint32(16).uint64(message.patchSize);
    }
    if (message.patchedChunksSize !== "0") {
      writer.uint32(24).uint64(message.patchedChunksSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetDepotPatchInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetDepotPatchInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isAvailable = reader.bool();
          break;
        case 2:
          message.patchSize = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.patchedChunksSize = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetDepotPatchInfoResponse {
    return {
      isAvailable: isSet(object.isAvailable) ? Boolean(object.isAvailable) : false,
      patchSize: isSet(object.patchSize) ? String(object.patchSize) : "0",
      patchedChunksSize: isSet(object.patchedChunksSize) ? String(object.patchedChunksSize) : "0",
    };
  },

  toJSON(message: CContentServerDirectoryGetDepotPatchInfoResponse): unknown {
    const obj: any = {};
    message.isAvailable !== undefined && (obj.isAvailable = message.isAvailable);
    message.patchSize !== undefined && (obj.patchSize = message.patchSize);
    message.patchedChunksSize !== undefined && (obj.patchedChunksSize = message.patchedChunksSize);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetDepotPatchInfoResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetDepotPatchInfoResponse {
    return CContentServerDirectoryGetDepotPatchInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetDepotPatchInfoResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetDepotPatchInfoResponse {
    const message = createBaseCContentServerDirectoryGetDepotPatchInfoResponse();
    message.isAvailable = object.isAvailable ?? false;
    message.patchSize = object.patchSize ?? "0";
    message.patchedChunksSize = object.patchedChunksSize ?? "0";
    return message;
  },
};

function createBaseCContentServerDirectoryGetClientUpdateHostsRequest(): CContentServerDirectoryGetClientUpdateHostsRequest {
  return { cachedSignature: "" };
}

export const CContentServerDirectoryGetClientUpdateHostsRequest = {
  encode(
    message: CContentServerDirectoryGetClientUpdateHostsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cachedSignature !== "") {
      writer.uint32(10).string(message.cachedSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetClientUpdateHostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetClientUpdateHostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cachedSignature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetClientUpdateHostsRequest {
    return { cachedSignature: isSet(object.cachedSignature) ? String(object.cachedSignature) : "" };
  },

  toJSON(message: CContentServerDirectoryGetClientUpdateHostsRequest): unknown {
    const obj: any = {};
    message.cachedSignature !== undefined && (obj.cachedSignature = message.cachedSignature);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetClientUpdateHostsRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetClientUpdateHostsRequest {
    return CContentServerDirectoryGetClientUpdateHostsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetClientUpdateHostsRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetClientUpdateHostsRequest {
    const message = createBaseCContentServerDirectoryGetClientUpdateHostsRequest();
    message.cachedSignature = object.cachedSignature ?? "";
    return message;
  },
};

function createBaseCContentServerDirectoryGetClientUpdateHostsResponse(): CContentServerDirectoryGetClientUpdateHostsResponse {
  return { hostsKv: "", validUntilTime: "0", ipCountry: "" };
}

export const CContentServerDirectoryGetClientUpdateHostsResponse = {
  encode(
    message: CContentServerDirectoryGetClientUpdateHostsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hostsKv !== "") {
      writer.uint32(10).string(message.hostsKv);
    }
    if (message.validUntilTime !== "0") {
      writer.uint32(16).uint64(message.validUntilTime);
    }
    if (message.ipCountry !== "") {
      writer.uint32(26).string(message.ipCountry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetClientUpdateHostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetClientUpdateHostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostsKv = reader.string();
          break;
        case 2:
          message.validUntilTime = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.ipCountry = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetClientUpdateHostsResponse {
    return {
      hostsKv: isSet(object.hostsKv) ? String(object.hostsKv) : "",
      validUntilTime: isSet(object.validUntilTime) ? String(object.validUntilTime) : "0",
      ipCountry: isSet(object.ipCountry) ? String(object.ipCountry) : "",
    };
  },

  toJSON(message: CContentServerDirectoryGetClientUpdateHostsResponse): unknown {
    const obj: any = {};
    message.hostsKv !== undefined && (obj.hostsKv = message.hostsKv);
    message.validUntilTime !== undefined && (obj.validUntilTime = message.validUntilTime);
    message.ipCountry !== undefined && (obj.ipCountry = message.ipCountry);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetClientUpdateHostsResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetClientUpdateHostsResponse {
    return CContentServerDirectoryGetClientUpdateHostsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetClientUpdateHostsResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetClientUpdateHostsResponse {
    const message = createBaseCContentServerDirectoryGetClientUpdateHostsResponse();
    message.hostsKv = object.hostsKv ?? "";
    message.validUntilTime = object.validUntilTime ?? "0";
    message.ipCountry = object.ipCountry ?? "";
    return message;
  },
};

function createBaseCContentServerDirectoryGetManifestRequestCodeRequest(): CContentServerDirectoryGetManifestRequestCodeRequest {
  return { appId: 0, depotId: 0, manifestId: "0", appBranch: "", branchPasswordHash: "" };
}

export const CContentServerDirectoryGetManifestRequestCodeRequest = {
  encode(
    message: CContentServerDirectoryGetManifestRequestCodeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.depotId !== 0) {
      writer.uint32(16).uint32(message.depotId);
    }
    if (message.manifestId !== "0") {
      writer.uint32(24).uint64(message.manifestId);
    }
    if (message.appBranch !== "") {
      writer.uint32(34).string(message.appBranch);
    }
    if (message.branchPasswordHash !== "") {
      writer.uint32(42).string(message.branchPasswordHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetManifestRequestCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetManifestRequestCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.depotId = reader.uint32();
          break;
        case 3:
          message.manifestId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.appBranch = reader.string();
          break;
        case 5:
          message.branchPasswordHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetManifestRequestCodeRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      manifestId: isSet(object.manifestId) ? String(object.manifestId) : "0",
      appBranch: isSet(object.appBranch) ? String(object.appBranch) : "",
      branchPasswordHash: isSet(object.branchPasswordHash) ? String(object.branchPasswordHash) : "",
    };
  },

  toJSON(message: CContentServerDirectoryGetManifestRequestCodeRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.manifestId !== undefined && (obj.manifestId = message.manifestId);
    message.appBranch !== undefined && (obj.appBranch = message.appBranch);
    message.branchPasswordHash !== undefined && (obj.branchPasswordHash = message.branchPasswordHash);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetManifestRequestCodeRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetManifestRequestCodeRequest {
    return CContentServerDirectoryGetManifestRequestCodeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetManifestRequestCodeRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetManifestRequestCodeRequest {
    const message = createBaseCContentServerDirectoryGetManifestRequestCodeRequest();
    message.appId = object.appId ?? 0;
    message.depotId = object.depotId ?? 0;
    message.manifestId = object.manifestId ?? "0";
    message.appBranch = object.appBranch ?? "";
    message.branchPasswordHash = object.branchPasswordHash ?? "";
    return message;
  },
};

function createBaseCContentServerDirectoryGetManifestRequestCodeResponse(): CContentServerDirectoryGetManifestRequestCodeResponse {
  return { manifestRequestCode: "0" };
}

export const CContentServerDirectoryGetManifestRequestCodeResponse = {
  encode(
    message: CContentServerDirectoryGetManifestRequestCodeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.manifestRequestCode !== "0") {
      writer.uint32(8).uint64(message.manifestRequestCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetManifestRequestCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetManifestRequestCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manifestRequestCode = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetManifestRequestCodeResponse {
    return { manifestRequestCode: isSet(object.manifestRequestCode) ? String(object.manifestRequestCode) : "0" };
  },

  toJSON(message: CContentServerDirectoryGetManifestRequestCodeResponse): unknown {
    const obj: any = {};
    message.manifestRequestCode !== undefined && (obj.manifestRequestCode = message.manifestRequestCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetManifestRequestCodeResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetManifestRequestCodeResponse {
    return CContentServerDirectoryGetManifestRequestCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetManifestRequestCodeResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetManifestRequestCodeResponse {
    const message = createBaseCContentServerDirectoryGetManifestRequestCodeResponse();
    message.manifestRequestCode = object.manifestRequestCode ?? "0";
    return message;
  },
};

function createBaseCContentServerDirectoryGetCDNAuthTokenRequest(): CContentServerDirectoryGetCDNAuthTokenRequest {
  return { depotId: 0, hostName: "", appId: 0 };
}

export const CContentServerDirectoryGetCDNAuthTokenRequest = {
  encode(message: CContentServerDirectoryGetCDNAuthTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depotId !== 0) {
      writer.uint32(8).uint32(message.depotId);
    }
    if (message.hostName !== "") {
      writer.uint32(18).string(message.hostName);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetCDNAuthTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetCDNAuthTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depotId = reader.uint32();
          break;
        case 2:
          message.hostName = reader.string();
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetCDNAuthTokenRequest {
    return {
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CContentServerDirectoryGetCDNAuthTokenRequest): unknown {
    const obj: any = {};
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetCDNAuthTokenRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetCDNAuthTokenRequest {
    return CContentServerDirectoryGetCDNAuthTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetCDNAuthTokenRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetCDNAuthTokenRequest {
    const message = createBaseCContentServerDirectoryGetCDNAuthTokenRequest();
    message.depotId = object.depotId ?? 0;
    message.hostName = object.hostName ?? "";
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCContentServerDirectoryGetCDNAuthTokenResponse(): CContentServerDirectoryGetCDNAuthTokenResponse {
  return { token: "", expirationTime: 0 };
}

export const CContentServerDirectoryGetCDNAuthTokenResponse = {
  encode(
    message: CContentServerDirectoryGetCDNAuthTokenResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.expirationTime !== 0) {
      writer.uint32(16).uint32(message.expirationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetCDNAuthTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetCDNAuthTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.expirationTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetCDNAuthTokenResponse {
    return {
      token: isSet(object.token) ? String(object.token) : "",
      expirationTime: isSet(object.expirationTime) ? Number(object.expirationTime) : 0,
    };
  },

  toJSON(message: CContentServerDirectoryGetCDNAuthTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.expirationTime !== undefined && (obj.expirationTime = Math.round(message.expirationTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetCDNAuthTokenResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetCDNAuthTokenResponse {
    return CContentServerDirectoryGetCDNAuthTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetCDNAuthTokenResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetCDNAuthTokenResponse {
    const message = createBaseCContentServerDirectoryGetCDNAuthTokenResponse();
    message.token = object.token ?? "";
    message.expirationTime = object.expirationTime ?? 0;
    return message;
  },
};

function createBaseCContentServerDirectoryRequestPeerContentServerRequest(): CContentServerDirectoryRequestPeerContentServerRequest {
  return { remoteClientId: "0", steamid: "0", serverRemoteClientId: "0", appId: 0, currentBuildId: 0 };
}

export const CContentServerDirectoryRequestPeerContentServerRequest = {
  encode(
    message: CContentServerDirectoryRequestPeerContentServerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.remoteClientId !== "0") {
      writer.uint32(8).uint64(message.remoteClientId);
    }
    if (message.steamid !== "0") {
      writer.uint32(16).uint64(message.steamid);
    }
    if (message.serverRemoteClientId !== "0") {
      writer.uint32(24).uint64(message.serverRemoteClientId);
    }
    if (message.appId !== 0) {
      writer.uint32(32).uint32(message.appId);
    }
    if (message.currentBuildId !== 0) {
      writer.uint32(40).uint32(message.currentBuildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryRequestPeerContentServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryRequestPeerContentServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remoteClientId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.serverRemoteClientId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.appId = reader.uint32();
          break;
        case 5:
          message.currentBuildId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryRequestPeerContentServerRequest {
    return {
      remoteClientId: isSet(object.remoteClientId) ? String(object.remoteClientId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      serverRemoteClientId: isSet(object.serverRemoteClientId) ? String(object.serverRemoteClientId) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      currentBuildId: isSet(object.currentBuildId) ? Number(object.currentBuildId) : 0,
    };
  },

  toJSON(message: CContentServerDirectoryRequestPeerContentServerRequest): unknown {
    const obj: any = {};
    message.remoteClientId !== undefined && (obj.remoteClientId = message.remoteClientId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.serverRemoteClientId !== undefined && (obj.serverRemoteClientId = message.serverRemoteClientId);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.currentBuildId !== undefined && (obj.currentBuildId = Math.round(message.currentBuildId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryRequestPeerContentServerRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryRequestPeerContentServerRequest {
    return CContentServerDirectoryRequestPeerContentServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryRequestPeerContentServerRequest>, I>>(
    object: I,
  ): CContentServerDirectoryRequestPeerContentServerRequest {
    const message = createBaseCContentServerDirectoryRequestPeerContentServerRequest();
    message.remoteClientId = object.remoteClientId ?? "0";
    message.steamid = object.steamid ?? "0";
    message.serverRemoteClientId = object.serverRemoteClientId ?? "0";
    message.appId = object.appId ?? 0;
    message.currentBuildId = object.currentBuildId ?? 0;
    return message;
  },
};

function createBaseCContentServerDirectoryRequestPeerContentServerResponse(): CContentServerDirectoryRequestPeerContentServerResponse {
  return { serverPort: 0 };
}

export const CContentServerDirectoryRequestPeerContentServerResponse = {
  encode(
    message: CContentServerDirectoryRequestPeerContentServerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serverPort !== 0) {
      writer.uint32(8).uint32(message.serverPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryRequestPeerContentServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryRequestPeerContentServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverPort = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryRequestPeerContentServerResponse {
    return { serverPort: isSet(object.serverPort) ? Number(object.serverPort) : 0 };
  },

  toJSON(message: CContentServerDirectoryRequestPeerContentServerResponse): unknown {
    const obj: any = {};
    message.serverPort !== undefined && (obj.serverPort = Math.round(message.serverPort));
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryRequestPeerContentServerResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryRequestPeerContentServerResponse {
    return CContentServerDirectoryRequestPeerContentServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryRequestPeerContentServerResponse>, I>>(
    object: I,
  ): CContentServerDirectoryRequestPeerContentServerResponse {
    const message = createBaseCContentServerDirectoryRequestPeerContentServerResponse();
    message.serverPort = object.serverPort ?? 0;
    return message;
  },
};

function createBaseCContentServerDirectoryGetPeerContentInfoRequest(): CContentServerDirectoryGetPeerContentInfoRequest {
  return { remoteClientId: "0", steamid: "0", serverRemoteClientId: "0" };
}

export const CContentServerDirectoryGetPeerContentInfoRequest = {
  encode(
    message: CContentServerDirectoryGetPeerContentInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.remoteClientId !== "0") {
      writer.uint32(8).uint64(message.remoteClientId);
    }
    if (message.steamid !== "0") {
      writer.uint32(16).uint64(message.steamid);
    }
    if (message.serverRemoteClientId !== "0") {
      writer.uint32(24).uint64(message.serverRemoteClientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetPeerContentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetPeerContentInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remoteClientId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.serverRemoteClientId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetPeerContentInfoRequest {
    return {
      remoteClientId: isSet(object.remoteClientId) ? String(object.remoteClientId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      serverRemoteClientId: isSet(object.serverRemoteClientId) ? String(object.serverRemoteClientId) : "0",
    };
  },

  toJSON(message: CContentServerDirectoryGetPeerContentInfoRequest): unknown {
    const obj: any = {};
    message.remoteClientId !== undefined && (obj.remoteClientId = message.remoteClientId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.serverRemoteClientId !== undefined && (obj.serverRemoteClientId = message.serverRemoteClientId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetPeerContentInfoRequest>, I>>(
    base?: I,
  ): CContentServerDirectoryGetPeerContentInfoRequest {
    return CContentServerDirectoryGetPeerContentInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetPeerContentInfoRequest>, I>>(
    object: I,
  ): CContentServerDirectoryGetPeerContentInfoRequest {
    const message = createBaseCContentServerDirectoryGetPeerContentInfoRequest();
    message.remoteClientId = object.remoteClientId ?? "0";
    message.steamid = object.steamid ?? "0";
    message.serverRemoteClientId = object.serverRemoteClientId ?? "0";
    return message;
  },
};

function createBaseCContentServerDirectoryGetPeerContentInfoResponse(): CContentServerDirectoryGetPeerContentInfoResponse {
  return { appids: [] };
}

export const CContentServerDirectoryGetPeerContentInfoResponse = {
  encode(
    message: CContentServerDirectoryGetPeerContentInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CContentServerDirectoryGetPeerContentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCContentServerDirectoryGetPeerContentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appids.push(reader.uint32());
            }
          } else {
            message.appids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CContentServerDirectoryGetPeerContentInfoResponse {
    return { appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CContentServerDirectoryGetPeerContentInfoResponse): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CContentServerDirectoryGetPeerContentInfoResponse>, I>>(
    base?: I,
  ): CContentServerDirectoryGetPeerContentInfoResponse {
    return CContentServerDirectoryGetPeerContentInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CContentServerDirectoryGetPeerContentInfoResponse>, I>>(
    object: I,
  ): CContentServerDirectoryGetPeerContentInfoResponse {
    const message = createBaseCContentServerDirectoryGetPeerContentInfoResponse();
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

export interface ContentServerDirectory {
  GetServersForSteamPipe(
    request: CContentServerDirectoryGetServersForSteamPipeRequest,
  ): Promise<CContentServerDirectoryGetServersForSteamPipeResponse>;
  GetDepotPatchInfo(
    request: CContentServerDirectoryGetDepotPatchInfoRequest,
  ): Promise<CContentServerDirectoryGetDepotPatchInfoResponse>;
  GetClientUpdateHosts(
    request: CContentServerDirectoryGetClientUpdateHostsRequest,
  ): Promise<CContentServerDirectoryGetClientUpdateHostsResponse>;
  GetManifestRequestCode(
    request: CContentServerDirectoryGetManifestRequestCodeRequest,
  ): Promise<CContentServerDirectoryGetManifestRequestCodeResponse>;
  GetCDNAuthToken(
    request: CContentServerDirectoryGetCDNAuthTokenRequest,
  ): Promise<CContentServerDirectoryGetCDNAuthTokenResponse>;
  RequestPeerContentServer(
    request: CContentServerDirectoryRequestPeerContentServerRequest,
  ): Promise<CContentServerDirectoryRequestPeerContentServerResponse>;
  GetPeerContentInfo(
    request: CContentServerDirectoryGetPeerContentInfoRequest,
  ): Promise<CContentServerDirectoryGetPeerContentInfoResponse>;
}

export class ContentServerDirectoryClientImpl implements ContentServerDirectory {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ContentServerDirectory";
    this.rpc = rpc;
    this.GetServersForSteamPipe = this.GetServersForSteamPipe.bind(this);
    this.GetDepotPatchInfo = this.GetDepotPatchInfo.bind(this);
    this.GetClientUpdateHosts = this.GetClientUpdateHosts.bind(this);
    this.GetManifestRequestCode = this.GetManifestRequestCode.bind(this);
    this.GetCDNAuthToken = this.GetCDNAuthToken.bind(this);
    this.RequestPeerContentServer = this.RequestPeerContentServer.bind(this);
    this.GetPeerContentInfo = this.GetPeerContentInfo.bind(this);
  }
  GetServersForSteamPipe(
    request: CContentServerDirectoryGetServersForSteamPipeRequest,
  ): Promise<CContentServerDirectoryGetServersForSteamPipeResponse> {
    const data = CContentServerDirectoryGetServersForSteamPipeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetServersForSteamPipe", data);
    return promise.then((data) => CContentServerDirectoryGetServersForSteamPipeResponse.decode(new _m0.Reader(data)));
  }

  GetDepotPatchInfo(
    request: CContentServerDirectoryGetDepotPatchInfoRequest,
  ): Promise<CContentServerDirectoryGetDepotPatchInfoResponse> {
    const data = CContentServerDirectoryGetDepotPatchInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDepotPatchInfo", data);
    return promise.then((data) => CContentServerDirectoryGetDepotPatchInfoResponse.decode(new _m0.Reader(data)));
  }

  GetClientUpdateHosts(
    request: CContentServerDirectoryGetClientUpdateHostsRequest,
  ): Promise<CContentServerDirectoryGetClientUpdateHostsResponse> {
    const data = CContentServerDirectoryGetClientUpdateHostsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClientUpdateHosts", data);
    return promise.then((data) => CContentServerDirectoryGetClientUpdateHostsResponse.decode(new _m0.Reader(data)));
  }

  GetManifestRequestCode(
    request: CContentServerDirectoryGetManifestRequestCodeRequest,
  ): Promise<CContentServerDirectoryGetManifestRequestCodeResponse> {
    const data = CContentServerDirectoryGetManifestRequestCodeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetManifestRequestCode", data);
    return promise.then((data) => CContentServerDirectoryGetManifestRequestCodeResponse.decode(new _m0.Reader(data)));
  }

  GetCDNAuthToken(
    request: CContentServerDirectoryGetCDNAuthTokenRequest,
  ): Promise<CContentServerDirectoryGetCDNAuthTokenResponse> {
    const data = CContentServerDirectoryGetCDNAuthTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCDNAuthToken", data);
    return promise.then((data) => CContentServerDirectoryGetCDNAuthTokenResponse.decode(new _m0.Reader(data)));
  }

  RequestPeerContentServer(
    request: CContentServerDirectoryRequestPeerContentServerRequest,
  ): Promise<CContentServerDirectoryRequestPeerContentServerResponse> {
    const data = CContentServerDirectoryRequestPeerContentServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestPeerContentServer", data);
    return promise.then((data) => CContentServerDirectoryRequestPeerContentServerResponse.decode(new _m0.Reader(data)));
  }

  GetPeerContentInfo(
    request: CContentServerDirectoryGetPeerContentInfoRequest,
  ): Promise<CContentServerDirectoryGetPeerContentInfoResponse> {
    const data = CContentServerDirectoryGetPeerContentInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPeerContentInfo", data);
    return promise.then((data) => CContentServerDirectoryGetPeerContentInfoResponse.decode(new _m0.Reader(data)));
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
