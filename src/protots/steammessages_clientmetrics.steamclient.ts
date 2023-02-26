/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CClientMetricsClientBootstrapSummary, CClientMetricsContentDownloadResponseHosts } from "./clientmetrics";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum ESteamPipeWorkType {
  k_ESteamPipeClientWorkType_Invalid = 0,
  k_ESteamPipeClientWorkType_StageFromChunkStores = 1,
  UNRECOGNIZED = -1,
}

export function eSteamPipeWorkTypeFromJSON(object: any): ESteamPipeWorkType {
  switch (object) {
    case 0:
    case "k_ESteamPipeClientWorkType_Invalid":
      return ESteamPipeWorkType.k_ESteamPipeClientWorkType_Invalid;
    case 1:
    case "k_ESteamPipeClientWorkType_StageFromChunkStores":
      return ESteamPipeWorkType.k_ESteamPipeClientWorkType_StageFromChunkStores;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamPipeWorkType.UNRECOGNIZED;
  }
}

export function eSteamPipeWorkTypeToJSON(object: ESteamPipeWorkType): string {
  switch (object) {
    case ESteamPipeWorkType.k_ESteamPipeClientWorkType_Invalid:
      return "k_ESteamPipeClientWorkType_Invalid";
    case ESteamPipeWorkType.k_ESteamPipeClientWorkType_StageFromChunkStores:
      return "k_ESteamPipeClientWorkType_StageFromChunkStores";
    case ESteamPipeWorkType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamPipeOperationType {
  k_ESteamPipeOperationType_Invalid = 0,
  k_ESteamPipeOperationType_DecryptCPU = 1,
  k_ESteamPipeOperationType_DiskRead = 2,
  k_ESteamPipeOperationType_DiskWrite = 3,
  UNRECOGNIZED = -1,
}

export function eSteamPipeOperationTypeFromJSON(object: any): ESteamPipeOperationType {
  switch (object) {
    case 0:
    case "k_ESteamPipeOperationType_Invalid":
      return ESteamPipeOperationType.k_ESteamPipeOperationType_Invalid;
    case 1:
    case "k_ESteamPipeOperationType_DecryptCPU":
      return ESteamPipeOperationType.k_ESteamPipeOperationType_DecryptCPU;
    case 2:
    case "k_ESteamPipeOperationType_DiskRead":
      return ESteamPipeOperationType.k_ESteamPipeOperationType_DiskRead;
    case 3:
    case "k_ESteamPipeOperationType_DiskWrite":
      return ESteamPipeOperationType.k_ESteamPipeOperationType_DiskWrite;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamPipeOperationType.UNRECOGNIZED;
  }
}

export function eSteamPipeOperationTypeToJSON(object: ESteamPipeOperationType): string {
  switch (object) {
    case ESteamPipeOperationType.k_ESteamPipeOperationType_Invalid:
      return "k_ESteamPipeOperationType_Invalid";
    case ESteamPipeOperationType.k_ESteamPipeOperationType_DecryptCPU:
      return "k_ESteamPipeOperationType_DecryptCPU";
    case ESteamPipeOperationType.k_ESteamPipeOperationType_DiskRead:
      return "k_ESteamPipeOperationType_DiskRead";
    case ESteamPipeOperationType.k_ESteamPipeOperationType_DiskWrite:
      return "k_ESteamPipeOperationType_DiskWrite";
    case ESteamPipeOperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CClientMetricsAppInterfaceCreation {
  rawVersion: string;
  requestedInterfaceType: string;
}

export interface CClientMetricsAppInterfaceMethodCounts {
  interfaceName: string;
  methodName: string;
  callCount: number;
}

export interface CClientMetricsAppInterfaceStatsNotification {
  gameId: string;
  interfacesCreated: CClientMetricsAppInterfaceCreation[];
  methodsCalled: CClientMetricsAppInterfaceMethodCounts[];
  sessionLengthSeconds: number;
}

export interface CClientMetricsIPv6ConnectivityResult {
  protocolTested: number;
  connectivityState: number;
}

export interface CClientMetricsIPv6ConnectivityNotification {
  cellId: number;
  results: CClientMetricsIPv6ConnectivityResult[];
  privateIpIsRfc6598: boolean;
}

export interface CClientMetricsSteamPipeWorkStatsOperation {
  type: ESteamPipeOperationType;
  numOps: number;
  numBytes: string;
  busyTimeMs: string;
  idleTimeMs: string;
  sumRunTimeMs: string;
  sumWaitTimeMs: string;
}

export interface CClientMetricsSteamPipeWorkStatsNotification {
  appid: number;
  depotid: number;
  workType: ESteamPipeWorkType;
  operations: CClientMetricsSteamPipeWorkStatsOperation[];
  hardwareType: number;
}

export interface CClientMetricsReportReactUsageNotification {
  product: string;
  version: string;
  routes: CClientMetricsReportReactUsageNotification_RouteData[];
  components: CClientMetricsReportReactUsageNotification_ComponentData[];
  actions: CClientMetricsReportReactUsageNotification_ActionData[];
}

export interface CClientMetricsReportReactUsageNotification_RouteData {
  route: string;
  count: number;
}

export interface CClientMetricsReportReactUsageNotification_ComponentData {
  component: string;
  count: number;
}

export interface CClientMetricsReportReactUsageNotification_ActionData {
  action: string;
  count: number;
}

export interface CClientMetricsReportClientErrorNotification {
  product: string;
  version: string;
  errors: CClientMetricsReportClientErrorNotification_Error[];
}

export interface CClientMetricsReportClientErrorNotification_Error {
  identifier: string;
  message: string;
  count: number;
}

export interface CClientMetricsClientBootstrapNotification {
  summary: CClientMetricsClientBootstrapSummary | undefined;
}

export interface CClientMetricsDownloadRatesNotification {
  cellId: number;
  stats: CClientMetricsDownloadRatesNotification_StatsInfo[];
  throttlingKbps: number;
}

export interface CClientMetricsDownloadRatesNotification_StatsInfo {
  sourceType: number;
  sourceId: number;
  bytes: string;
  hostName: string;
  microseconds: string;
  usedIpv6: boolean;
  proxied: boolean;
  usedHttp2: boolean;
  cacheHits: number;
  cacheMisses: number;
  hitBytes: string;
  missBytes: string;
}

export interface CClientMetricsContentValidationNotification {
  validationResult: number;
  appId: number;
  stagedFiles: boolean;
  userInitiated: boolean;
  earlyOut: boolean;
  chunksScanned: number;
  chunksCorrupt: number;
  bytesScanned: string;
  chunkBytesCorrupt: string;
  totalFileSizeCorrupt: string;
}

export interface CClientMetricsCloudAppSyncStatsNotification {
  appId: number;
  platformType: number;
  preload: boolean;
  blockingAppLaunch: boolean;
  filesUploaded: number;
  filesDownloaded: number;
  filesDeleted: number;
  bytesUploaded: string;
  bytesDownloaded: string;
  microsecTotal: string;
  microsecInitCaches: string;
  microsecValidateState: string;
  microsecAcLaunch: string;
  microsecAcPrepUserFiles: string;
  microsecAcExit: string;
  microsecBuildSyncList: string;
  microsecDeleteFiles: string;
  microsecDownloadFiles: string;
  microsecUploadFiles: string;
  hardwareType: number;
  filesManaged: number;
}

export interface CClientMetricsContentDownloadResponseCountsNotification {
  cellId: number;
  data: CClientMetricsContentDownloadResponseHosts | undefined;
}

export interface CClientMetricsReportClientArgsNotification {
  clientArgs: string[];
  gpuWebviewRegkeyDisabled: boolean;
  suppressGpuChrome: boolean;
  browserNotSupported: boolean;
  hwAccelVideoRegkeyDisabled: boolean;
  miniModeEnabled: boolean;
  fpsCounterEnabled: boolean;
  libraryLowBandwidthModeEnabled: boolean;
  libraryLowPerfModeEnabled: boolean;
}

function createBaseCClientMetricsAppInterfaceCreation(): CClientMetricsAppInterfaceCreation {
  return { rawVersion: "", requestedInterfaceType: "" };
}

export const CClientMetricsAppInterfaceCreation = {
  encode(message: CClientMetricsAppInterfaceCreation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rawVersion !== "") {
      writer.uint32(10).string(message.rawVersion);
    }
    if (message.requestedInterfaceType !== "") {
      writer.uint32(18).string(message.requestedInterfaceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsAppInterfaceCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsAppInterfaceCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawVersion = reader.string();
          break;
        case 2:
          message.requestedInterfaceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsAppInterfaceCreation {
    return {
      rawVersion: isSet(object.rawVersion) ? String(object.rawVersion) : "",
      requestedInterfaceType: isSet(object.requestedInterfaceType) ? String(object.requestedInterfaceType) : "",
    };
  },

  toJSON(message: CClientMetricsAppInterfaceCreation): unknown {
    const obj: any = {};
    message.rawVersion !== undefined && (obj.rawVersion = message.rawVersion);
    message.requestedInterfaceType !== undefined && (obj.requestedInterfaceType = message.requestedInterfaceType);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsAppInterfaceCreation>, I>>(
    base?: I,
  ): CClientMetricsAppInterfaceCreation {
    return CClientMetricsAppInterfaceCreation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsAppInterfaceCreation>, I>>(
    object: I,
  ): CClientMetricsAppInterfaceCreation {
    const message = createBaseCClientMetricsAppInterfaceCreation();
    message.rawVersion = object.rawVersion ?? "";
    message.requestedInterfaceType = object.requestedInterfaceType ?? "";
    return message;
  },
};

function createBaseCClientMetricsAppInterfaceMethodCounts(): CClientMetricsAppInterfaceMethodCounts {
  return { interfaceName: "", methodName: "", callCount: 0 };
}

export const CClientMetricsAppInterfaceMethodCounts = {
  encode(message: CClientMetricsAppInterfaceMethodCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    if (message.methodName !== "") {
      writer.uint32(18).string(message.methodName);
    }
    if (message.callCount !== 0) {
      writer.uint32(24).uint32(message.callCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsAppInterfaceMethodCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsAppInterfaceMethodCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        case 2:
          message.methodName = reader.string();
          break;
        case 3:
          message.callCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsAppInterfaceMethodCounts {
    return {
      interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : "",
      methodName: isSet(object.methodName) ? String(object.methodName) : "",
      callCount: isSet(object.callCount) ? Number(object.callCount) : 0,
    };
  },

  toJSON(message: CClientMetricsAppInterfaceMethodCounts): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    message.methodName !== undefined && (obj.methodName = message.methodName);
    message.callCount !== undefined && (obj.callCount = Math.round(message.callCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsAppInterfaceMethodCounts>, I>>(
    base?: I,
  ): CClientMetricsAppInterfaceMethodCounts {
    return CClientMetricsAppInterfaceMethodCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsAppInterfaceMethodCounts>, I>>(
    object: I,
  ): CClientMetricsAppInterfaceMethodCounts {
    const message = createBaseCClientMetricsAppInterfaceMethodCounts();
    message.interfaceName = object.interfaceName ?? "";
    message.methodName = object.methodName ?? "";
    message.callCount = object.callCount ?? 0;
    return message;
  },
};

function createBaseCClientMetricsAppInterfaceStatsNotification(): CClientMetricsAppInterfaceStatsNotification {
  return { gameId: "0", interfacesCreated: [], methodsCalled: [], sessionLengthSeconds: 0 };
}

export const CClientMetricsAppInterfaceStatsNotification = {
  encode(message: CClientMetricsAppInterfaceStatsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(8).uint64(message.gameId);
    }
    for (const v of message.interfacesCreated) {
      CClientMetricsAppInterfaceCreation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.methodsCalled) {
      CClientMetricsAppInterfaceMethodCounts.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sessionLengthSeconds !== 0) {
      writer.uint32(32).uint32(message.sessionLengthSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsAppInterfaceStatsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsAppInterfaceStatsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.interfacesCreated.push(CClientMetricsAppInterfaceCreation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.methodsCalled.push(CClientMetricsAppInterfaceMethodCounts.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sessionLengthSeconds = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsAppInterfaceStatsNotification {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      interfacesCreated: Array.isArray(object?.interfacesCreated)
        ? object.interfacesCreated.map((e: any) => CClientMetricsAppInterfaceCreation.fromJSON(e))
        : [],
      methodsCalled: Array.isArray(object?.methodsCalled)
        ? object.methodsCalled.map((e: any) => CClientMetricsAppInterfaceMethodCounts.fromJSON(e))
        : [],
      sessionLengthSeconds: isSet(object.sessionLengthSeconds) ? Number(object.sessionLengthSeconds) : 0,
    };
  },

  toJSON(message: CClientMetricsAppInterfaceStatsNotification): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    if (message.interfacesCreated) {
      obj.interfacesCreated = message.interfacesCreated.map((e) =>
        e ? CClientMetricsAppInterfaceCreation.toJSON(e) : undefined
      );
    } else {
      obj.interfacesCreated = [];
    }
    if (message.methodsCalled) {
      obj.methodsCalled = message.methodsCalled.map((e) =>
        e ? CClientMetricsAppInterfaceMethodCounts.toJSON(e) : undefined
      );
    } else {
      obj.methodsCalled = [];
    }
    message.sessionLengthSeconds !== undefined && (obj.sessionLengthSeconds = Math.round(message.sessionLengthSeconds));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsAppInterfaceStatsNotification>, I>>(
    base?: I,
  ): CClientMetricsAppInterfaceStatsNotification {
    return CClientMetricsAppInterfaceStatsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsAppInterfaceStatsNotification>, I>>(
    object: I,
  ): CClientMetricsAppInterfaceStatsNotification {
    const message = createBaseCClientMetricsAppInterfaceStatsNotification();
    message.gameId = object.gameId ?? "0";
    message.interfacesCreated =
      object.interfacesCreated?.map((e) => CClientMetricsAppInterfaceCreation.fromPartial(e)) || [];
    message.methodsCalled = object.methodsCalled?.map((e) => CClientMetricsAppInterfaceMethodCounts.fromPartial(e)) ||
      [];
    message.sessionLengthSeconds = object.sessionLengthSeconds ?? 0;
    return message;
  },
};

function createBaseCClientMetricsIPv6ConnectivityResult(): CClientMetricsIPv6ConnectivityResult {
  return { protocolTested: 0, connectivityState: 0 };
}

export const CClientMetricsIPv6ConnectivityResult = {
  encode(message: CClientMetricsIPv6ConnectivityResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolTested !== 0) {
      writer.uint32(8).uint32(message.protocolTested);
    }
    if (message.connectivityState !== 0) {
      writer.uint32(16).uint32(message.connectivityState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsIPv6ConnectivityResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsIPv6ConnectivityResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolTested = reader.uint32();
          break;
        case 2:
          message.connectivityState = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsIPv6ConnectivityResult {
    return {
      protocolTested: isSet(object.protocolTested) ? Number(object.protocolTested) : 0,
      connectivityState: isSet(object.connectivityState) ? Number(object.connectivityState) : 0,
    };
  },

  toJSON(message: CClientMetricsIPv6ConnectivityResult): unknown {
    const obj: any = {};
    message.protocolTested !== undefined && (obj.protocolTested = Math.round(message.protocolTested));
    message.connectivityState !== undefined && (obj.connectivityState = Math.round(message.connectivityState));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsIPv6ConnectivityResult>, I>>(
    base?: I,
  ): CClientMetricsIPv6ConnectivityResult {
    return CClientMetricsIPv6ConnectivityResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsIPv6ConnectivityResult>, I>>(
    object: I,
  ): CClientMetricsIPv6ConnectivityResult {
    const message = createBaseCClientMetricsIPv6ConnectivityResult();
    message.protocolTested = object.protocolTested ?? 0;
    message.connectivityState = object.connectivityState ?? 0;
    return message;
  },
};

function createBaseCClientMetricsIPv6ConnectivityNotification(): CClientMetricsIPv6ConnectivityNotification {
  return { cellId: 0, results: [], privateIpIsRfc6598: false };
}

export const CClientMetricsIPv6ConnectivityNotification = {
  encode(message: CClientMetricsIPv6ConnectivityNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    for (const v of message.results) {
      CClientMetricsIPv6ConnectivityResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.privateIpIsRfc6598 === true) {
      writer.uint32(24).bool(message.privateIpIsRfc6598);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsIPv6ConnectivityNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsIPv6ConnectivityNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.results.push(CClientMetricsIPv6ConnectivityResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.privateIpIsRfc6598 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsIPv6ConnectivityNotification {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => CClientMetricsIPv6ConnectivityResult.fromJSON(e))
        : [],
      privateIpIsRfc6598: isSet(object.privateIpIsRfc6598) ? Boolean(object.privateIpIsRfc6598) : false,
    };
  },

  toJSON(message: CClientMetricsIPv6ConnectivityNotification): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    if (message.results) {
      obj.results = message.results.map((e) => e ? CClientMetricsIPv6ConnectivityResult.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.privateIpIsRfc6598 !== undefined && (obj.privateIpIsRfc6598 = message.privateIpIsRfc6598);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsIPv6ConnectivityNotification>, I>>(
    base?: I,
  ): CClientMetricsIPv6ConnectivityNotification {
    return CClientMetricsIPv6ConnectivityNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsIPv6ConnectivityNotification>, I>>(
    object: I,
  ): CClientMetricsIPv6ConnectivityNotification {
    const message = createBaseCClientMetricsIPv6ConnectivityNotification();
    message.cellId = object.cellId ?? 0;
    message.results = object.results?.map((e) => CClientMetricsIPv6ConnectivityResult.fromPartial(e)) || [];
    message.privateIpIsRfc6598 = object.privateIpIsRfc6598 ?? false;
    return message;
  },
};

function createBaseCClientMetricsSteamPipeWorkStatsOperation(): CClientMetricsSteamPipeWorkStatsOperation {
  return { type: 0, numOps: 0, numBytes: "0", busyTimeMs: "0", idleTimeMs: "0", sumRunTimeMs: "0", sumWaitTimeMs: "0" };
}

export const CClientMetricsSteamPipeWorkStatsOperation = {
  encode(message: CClientMetricsSteamPipeWorkStatsOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.numOps !== 0) {
      writer.uint32(16).uint32(message.numOps);
    }
    if (message.numBytes !== "0") {
      writer.uint32(24).uint64(message.numBytes);
    }
    if (message.busyTimeMs !== "0") {
      writer.uint32(32).uint64(message.busyTimeMs);
    }
    if (message.idleTimeMs !== "0") {
      writer.uint32(40).uint64(message.idleTimeMs);
    }
    if (message.sumRunTimeMs !== "0") {
      writer.uint32(48).uint64(message.sumRunTimeMs);
    }
    if (message.sumWaitTimeMs !== "0") {
      writer.uint32(56).uint64(message.sumWaitTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsSteamPipeWorkStatsOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsSteamPipeWorkStatsOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.numOps = reader.uint32();
          break;
        case 3:
          message.numBytes = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.busyTimeMs = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.idleTimeMs = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.sumRunTimeMs = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.sumWaitTimeMs = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsSteamPipeWorkStatsOperation {
    return {
      type: isSet(object.type) ? eSteamPipeOperationTypeFromJSON(object.type) : 0,
      numOps: isSet(object.numOps) ? Number(object.numOps) : 0,
      numBytes: isSet(object.numBytes) ? String(object.numBytes) : "0",
      busyTimeMs: isSet(object.busyTimeMs) ? String(object.busyTimeMs) : "0",
      idleTimeMs: isSet(object.idleTimeMs) ? String(object.idleTimeMs) : "0",
      sumRunTimeMs: isSet(object.sumRunTimeMs) ? String(object.sumRunTimeMs) : "0",
      sumWaitTimeMs: isSet(object.sumWaitTimeMs) ? String(object.sumWaitTimeMs) : "0",
    };
  },

  toJSON(message: CClientMetricsSteamPipeWorkStatsOperation): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eSteamPipeOperationTypeToJSON(message.type));
    message.numOps !== undefined && (obj.numOps = Math.round(message.numOps));
    message.numBytes !== undefined && (obj.numBytes = message.numBytes);
    message.busyTimeMs !== undefined && (obj.busyTimeMs = message.busyTimeMs);
    message.idleTimeMs !== undefined && (obj.idleTimeMs = message.idleTimeMs);
    message.sumRunTimeMs !== undefined && (obj.sumRunTimeMs = message.sumRunTimeMs);
    message.sumWaitTimeMs !== undefined && (obj.sumWaitTimeMs = message.sumWaitTimeMs);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsSteamPipeWorkStatsOperation>, I>>(
    base?: I,
  ): CClientMetricsSteamPipeWorkStatsOperation {
    return CClientMetricsSteamPipeWorkStatsOperation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsSteamPipeWorkStatsOperation>, I>>(
    object: I,
  ): CClientMetricsSteamPipeWorkStatsOperation {
    const message = createBaseCClientMetricsSteamPipeWorkStatsOperation();
    message.type = object.type ?? 0;
    message.numOps = object.numOps ?? 0;
    message.numBytes = object.numBytes ?? "0";
    message.busyTimeMs = object.busyTimeMs ?? "0";
    message.idleTimeMs = object.idleTimeMs ?? "0";
    message.sumRunTimeMs = object.sumRunTimeMs ?? "0";
    message.sumWaitTimeMs = object.sumWaitTimeMs ?? "0";
    return message;
  },
};

function createBaseCClientMetricsSteamPipeWorkStatsNotification(): CClientMetricsSteamPipeWorkStatsNotification {
  return { appid: 0, depotid: 0, workType: 0, operations: [], hardwareType: 0 };
}

export const CClientMetricsSteamPipeWorkStatsNotification = {
  encode(message: CClientMetricsSteamPipeWorkStatsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.workType !== 0) {
      writer.uint32(24).int32(message.workType);
    }
    for (const v of message.operations) {
      CClientMetricsSteamPipeWorkStatsOperation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.hardwareType !== 0) {
      writer.uint32(40).uint32(message.hardwareType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsSteamPipeWorkStatsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsSteamPipeWorkStatsNotification();
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
          message.workType = reader.int32() as any;
          break;
        case 4:
          message.operations.push(CClientMetricsSteamPipeWorkStatsOperation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.hardwareType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsSteamPipeWorkStatsNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      workType: isSet(object.workType) ? eSteamPipeWorkTypeFromJSON(object.workType) : 0,
      operations: Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CClientMetricsSteamPipeWorkStatsOperation.fromJSON(e))
        : [],
      hardwareType: isSet(object.hardwareType) ? Number(object.hardwareType) : 0,
    };
  },

  toJSON(message: CClientMetricsSteamPipeWorkStatsNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.workType !== undefined && (obj.workType = eSteamPipeWorkTypeToJSON(message.workType));
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? CClientMetricsSteamPipeWorkStatsOperation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
    }
    message.hardwareType !== undefined && (obj.hardwareType = Math.round(message.hardwareType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsSteamPipeWorkStatsNotification>, I>>(
    base?: I,
  ): CClientMetricsSteamPipeWorkStatsNotification {
    return CClientMetricsSteamPipeWorkStatsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsSteamPipeWorkStatsNotification>, I>>(
    object: I,
  ): CClientMetricsSteamPipeWorkStatsNotification {
    const message = createBaseCClientMetricsSteamPipeWorkStatsNotification();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.workType = object.workType ?? 0;
    message.operations = object.operations?.map((e) => CClientMetricsSteamPipeWorkStatsOperation.fromPartial(e)) || [];
    message.hardwareType = object.hardwareType ?? 0;
    return message;
  },
};

function createBaseCClientMetricsReportReactUsageNotification(): CClientMetricsReportReactUsageNotification {
  return { product: "", version: "", routes: [], components: [], actions: [] };
}

export const CClientMetricsReportReactUsageNotification = {
  encode(message: CClientMetricsReportReactUsageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== "") {
      writer.uint32(10).string(message.product);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.routes) {
      CClientMetricsReportReactUsageNotification_RouteData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.components) {
      CClientMetricsReportReactUsageNotification_ComponentData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.actions) {
      CClientMetricsReportReactUsageNotification_ActionData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportReactUsageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportReactUsageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.routes.push(CClientMetricsReportReactUsageNotification_RouteData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.components.push(
            CClientMetricsReportReactUsageNotification_ComponentData.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.actions.push(CClientMetricsReportReactUsageNotification_ActionData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportReactUsageNotification {
    return {
      product: isSet(object.product) ? String(object.product) : "",
      version: isSet(object.version) ? String(object.version) : "",
      routes: Array.isArray(object?.routes)
        ? object.routes.map((e: any) => CClientMetricsReportReactUsageNotification_RouteData.fromJSON(e))
        : [],
      components: Array.isArray(object?.components)
        ? object.components.map((e: any) => CClientMetricsReportReactUsageNotification_ComponentData.fromJSON(e))
        : [],
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => CClientMetricsReportReactUsageNotification_ActionData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CClientMetricsReportReactUsageNotification): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product);
    message.version !== undefined && (obj.version = message.version);
    if (message.routes) {
      obj.routes = message.routes.map((e) =>
        e ? CClientMetricsReportReactUsageNotification_RouteData.toJSON(e) : undefined
      );
    } else {
      obj.routes = [];
    }
    if (message.components) {
      obj.components = message.components.map((e) =>
        e ? CClientMetricsReportReactUsageNotification_ComponentData.toJSON(e) : undefined
      );
    } else {
      obj.components = [];
    }
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? CClientMetricsReportReactUsageNotification_ActionData.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification>, I>>(
    base?: I,
  ): CClientMetricsReportReactUsageNotification {
    return CClientMetricsReportReactUsageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification>, I>>(
    object: I,
  ): CClientMetricsReportReactUsageNotification {
    const message = createBaseCClientMetricsReportReactUsageNotification();
    message.product = object.product ?? "";
    message.version = object.version ?? "";
    message.routes = object.routes?.map((e) => CClientMetricsReportReactUsageNotification_RouteData.fromPartial(e)) ||
      [];
    message.components =
      object.components?.map((e) => CClientMetricsReportReactUsageNotification_ComponentData.fromPartial(e)) || [];
    message.actions =
      object.actions?.map((e) => CClientMetricsReportReactUsageNotification_ActionData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCClientMetricsReportReactUsageNotification_RouteData(): CClientMetricsReportReactUsageNotification_RouteData {
  return { route: "", count: 0 };
}

export const CClientMetricsReportReactUsageNotification_RouteData = {
  encode(
    message: CClientMetricsReportReactUsageNotification_RouteData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.route !== "") {
      writer.uint32(10).string(message.route);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportReactUsageNotification_RouteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportReactUsageNotification_RouteData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.route = reader.string();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportReactUsageNotification_RouteData {
    return {
      route: isSet(object.route) ? String(object.route) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CClientMetricsReportReactUsageNotification_RouteData): unknown {
    const obj: any = {};
    message.route !== undefined && (obj.route = message.route);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_RouteData>, I>>(
    base?: I,
  ): CClientMetricsReportReactUsageNotification_RouteData {
    return CClientMetricsReportReactUsageNotification_RouteData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_RouteData>, I>>(
    object: I,
  ): CClientMetricsReportReactUsageNotification_RouteData {
    const message = createBaseCClientMetricsReportReactUsageNotification_RouteData();
    message.route = object.route ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCClientMetricsReportReactUsageNotification_ComponentData(): CClientMetricsReportReactUsageNotification_ComponentData {
  return { component: "", count: 0 };
}

export const CClientMetricsReportReactUsageNotification_ComponentData = {
  encode(
    message: CClientMetricsReportReactUsageNotification_ComponentData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.component !== "") {
      writer.uint32(10).string(message.component);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportReactUsageNotification_ComponentData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportReactUsageNotification_ComponentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.component = reader.string();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportReactUsageNotification_ComponentData {
    return {
      component: isSet(object.component) ? String(object.component) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CClientMetricsReportReactUsageNotification_ComponentData): unknown {
    const obj: any = {};
    message.component !== undefined && (obj.component = message.component);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_ComponentData>, I>>(
    base?: I,
  ): CClientMetricsReportReactUsageNotification_ComponentData {
    return CClientMetricsReportReactUsageNotification_ComponentData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_ComponentData>, I>>(
    object: I,
  ): CClientMetricsReportReactUsageNotification_ComponentData {
    const message = createBaseCClientMetricsReportReactUsageNotification_ComponentData();
    message.component = object.component ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCClientMetricsReportReactUsageNotification_ActionData(): CClientMetricsReportReactUsageNotification_ActionData {
  return { action: "", count: 0 };
}

export const CClientMetricsReportReactUsageNotification_ActionData = {
  encode(
    message: CClientMetricsReportReactUsageNotification_ActionData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportReactUsageNotification_ActionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportReactUsageNotification_ActionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportReactUsageNotification_ActionData {
    return {
      action: isSet(object.action) ? String(object.action) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CClientMetricsReportReactUsageNotification_ActionData): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_ActionData>, I>>(
    base?: I,
  ): CClientMetricsReportReactUsageNotification_ActionData {
    return CClientMetricsReportReactUsageNotification_ActionData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportReactUsageNotification_ActionData>, I>>(
    object: I,
  ): CClientMetricsReportReactUsageNotification_ActionData {
    const message = createBaseCClientMetricsReportReactUsageNotification_ActionData();
    message.action = object.action ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCClientMetricsReportClientErrorNotification(): CClientMetricsReportClientErrorNotification {
  return { product: "", version: "", errors: [] };
}

export const CClientMetricsReportClientErrorNotification = {
  encode(message: CClientMetricsReportClientErrorNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== "") {
      writer.uint32(10).string(message.product);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.errors) {
      CClientMetricsReportClientErrorNotification_Error.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportClientErrorNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportClientErrorNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.product = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.errors.push(CClientMetricsReportClientErrorNotification_Error.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportClientErrorNotification {
    return {
      product: isSet(object.product) ? String(object.product) : "",
      version: isSet(object.version) ? String(object.version) : "",
      errors: Array.isArray(object?.errors)
        ? object.errors.map((e: any) => CClientMetricsReportClientErrorNotification_Error.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CClientMetricsReportClientErrorNotification): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product);
    message.version !== undefined && (obj.version = message.version);
    if (message.errors) {
      obj.errors = message.errors.map((e) =>
        e ? CClientMetricsReportClientErrorNotification_Error.toJSON(e) : undefined
      );
    } else {
      obj.errors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportClientErrorNotification>, I>>(
    base?: I,
  ): CClientMetricsReportClientErrorNotification {
    return CClientMetricsReportClientErrorNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportClientErrorNotification>, I>>(
    object: I,
  ): CClientMetricsReportClientErrorNotification {
    const message = createBaseCClientMetricsReportClientErrorNotification();
    message.product = object.product ?? "";
    message.version = object.version ?? "";
    message.errors = object.errors?.map((e) => CClientMetricsReportClientErrorNotification_Error.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCClientMetricsReportClientErrorNotification_Error(): CClientMetricsReportClientErrorNotification_Error {
  return { identifier: "", message: "", count: 0 };
}

export const CClientMetricsReportClientErrorNotification_Error = {
  encode(
    message: CClientMetricsReportClientErrorNotification_Error,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportClientErrorNotification_Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportClientErrorNotification_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportClientErrorNotification_Error {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      message: isSet(object.message) ? String(object.message) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CClientMetricsReportClientErrorNotification_Error): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.message !== undefined && (obj.message = message.message);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportClientErrorNotification_Error>, I>>(
    base?: I,
  ): CClientMetricsReportClientErrorNotification_Error {
    return CClientMetricsReportClientErrorNotification_Error.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportClientErrorNotification_Error>, I>>(
    object: I,
  ): CClientMetricsReportClientErrorNotification_Error {
    const message = createBaseCClientMetricsReportClientErrorNotification_Error();
    message.identifier = object.identifier ?? "";
    message.message = object.message ?? "";
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCClientMetricsClientBootstrapNotification(): CClientMetricsClientBootstrapNotification {
  return { summary: undefined };
}

export const CClientMetricsClientBootstrapNotification = {
  encode(message: CClientMetricsClientBootstrapNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== undefined) {
      CClientMetricsClientBootstrapSummary.encode(message.summary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsClientBootstrapNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsClientBootstrapNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summary = CClientMetricsClientBootstrapSummary.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsClientBootstrapNotification {
    return {
      summary: isSet(object.summary) ? CClientMetricsClientBootstrapSummary.fromJSON(object.summary) : undefined,
    };
  },

  toJSON(message: CClientMetricsClientBootstrapNotification): unknown {
    const obj: any = {};
    message.summary !== undefined &&
      (obj.summary = message.summary ? CClientMetricsClientBootstrapSummary.toJSON(message.summary) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsClientBootstrapNotification>, I>>(
    base?: I,
  ): CClientMetricsClientBootstrapNotification {
    return CClientMetricsClientBootstrapNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsClientBootstrapNotification>, I>>(
    object: I,
  ): CClientMetricsClientBootstrapNotification {
    const message = createBaseCClientMetricsClientBootstrapNotification();
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? CClientMetricsClientBootstrapSummary.fromPartial(object.summary)
      : undefined;
    return message;
  },
};

function createBaseCClientMetricsDownloadRatesNotification(): CClientMetricsDownloadRatesNotification {
  return { cellId: 0, stats: [], throttlingKbps: 0 };
}

export const CClientMetricsDownloadRatesNotification = {
  encode(message: CClientMetricsDownloadRatesNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    for (const v of message.stats) {
      CClientMetricsDownloadRatesNotification_StatsInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.throttlingKbps !== 0) {
      writer.uint32(24).uint32(message.throttlingKbps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsDownloadRatesNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsDownloadRatesNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.stats.push(CClientMetricsDownloadRatesNotification_StatsInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.throttlingKbps = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsDownloadRatesNotification {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CClientMetricsDownloadRatesNotification_StatsInfo.fromJSON(e))
        : [],
      throttlingKbps: isSet(object.throttlingKbps) ? Number(object.throttlingKbps) : 0,
    };
  },

  toJSON(message: CClientMetricsDownloadRatesNotification): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CClientMetricsDownloadRatesNotification_StatsInfo.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    message.throttlingKbps !== undefined && (obj.throttlingKbps = Math.round(message.throttlingKbps));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsDownloadRatesNotification>, I>>(
    base?: I,
  ): CClientMetricsDownloadRatesNotification {
    return CClientMetricsDownloadRatesNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsDownloadRatesNotification>, I>>(
    object: I,
  ): CClientMetricsDownloadRatesNotification {
    const message = createBaseCClientMetricsDownloadRatesNotification();
    message.cellId = object.cellId ?? 0;
    message.stats = object.stats?.map((e) => CClientMetricsDownloadRatesNotification_StatsInfo.fromPartial(e)) || [];
    message.throttlingKbps = object.throttlingKbps ?? 0;
    return message;
  },
};

function createBaseCClientMetricsDownloadRatesNotification_StatsInfo(): CClientMetricsDownloadRatesNotification_StatsInfo {
  return {
    sourceType: 0,
    sourceId: 0,
    bytes: "0",
    hostName: "",
    microseconds: "0",
    usedIpv6: false,
    proxied: false,
    usedHttp2: false,
    cacheHits: 0,
    cacheMisses: 0,
    hitBytes: "0",
    missBytes: "0",
  };
}

export const CClientMetricsDownloadRatesNotification_StatsInfo = {
  encode(
    message: CClientMetricsDownloadRatesNotification_StatsInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceType !== 0) {
      writer.uint32(8).uint32(message.sourceType);
    }
    if (message.sourceId !== 0) {
      writer.uint32(16).uint32(message.sourceId);
    }
    if (message.bytes !== "0") {
      writer.uint32(24).uint64(message.bytes);
    }
    if (message.hostName !== "") {
      writer.uint32(34).string(message.hostName);
    }
    if (message.microseconds !== "0") {
      writer.uint32(40).uint64(message.microseconds);
    }
    if (message.usedIpv6 === true) {
      writer.uint32(48).bool(message.usedIpv6);
    }
    if (message.proxied === true) {
      writer.uint32(56).bool(message.proxied);
    }
    if (message.usedHttp2 === true) {
      writer.uint32(64).bool(message.usedHttp2);
    }
    if (message.cacheHits !== 0) {
      writer.uint32(72).uint32(message.cacheHits);
    }
    if (message.cacheMisses !== 0) {
      writer.uint32(80).uint32(message.cacheMisses);
    }
    if (message.hitBytes !== "0") {
      writer.uint32(88).uint64(message.hitBytes);
    }
    if (message.missBytes !== "0") {
      writer.uint32(96).uint64(message.missBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsDownloadRatesNotification_StatsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsDownloadRatesNotification_StatsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceType = reader.uint32();
          break;
        case 2:
          message.sourceId = reader.uint32();
          break;
        case 3:
          message.bytes = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.hostName = reader.string();
          break;
        case 5:
          message.microseconds = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.usedIpv6 = reader.bool();
          break;
        case 7:
          message.proxied = reader.bool();
          break;
        case 8:
          message.usedHttp2 = reader.bool();
          break;
        case 9:
          message.cacheHits = reader.uint32();
          break;
        case 10:
          message.cacheMisses = reader.uint32();
          break;
        case 11:
          message.hitBytes = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.missBytes = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsDownloadRatesNotification_StatsInfo {
    return {
      sourceType: isSet(object.sourceType) ? Number(object.sourceType) : 0,
      sourceId: isSet(object.sourceId) ? Number(object.sourceId) : 0,
      bytes: isSet(object.bytes) ? String(object.bytes) : "0",
      hostName: isSet(object.hostName) ? String(object.hostName) : "",
      microseconds: isSet(object.microseconds) ? String(object.microseconds) : "0",
      usedIpv6: isSet(object.usedIpv6) ? Boolean(object.usedIpv6) : false,
      proxied: isSet(object.proxied) ? Boolean(object.proxied) : false,
      usedHttp2: isSet(object.usedHttp2) ? Boolean(object.usedHttp2) : false,
      cacheHits: isSet(object.cacheHits) ? Number(object.cacheHits) : 0,
      cacheMisses: isSet(object.cacheMisses) ? Number(object.cacheMisses) : 0,
      hitBytes: isSet(object.hitBytes) ? String(object.hitBytes) : "0",
      missBytes: isSet(object.missBytes) ? String(object.missBytes) : "0",
    };
  },

  toJSON(message: CClientMetricsDownloadRatesNotification_StatsInfo): unknown {
    const obj: any = {};
    message.sourceType !== undefined && (obj.sourceType = Math.round(message.sourceType));
    message.sourceId !== undefined && (obj.sourceId = Math.round(message.sourceId));
    message.bytes !== undefined && (obj.bytes = message.bytes);
    message.hostName !== undefined && (obj.hostName = message.hostName);
    message.microseconds !== undefined && (obj.microseconds = message.microseconds);
    message.usedIpv6 !== undefined && (obj.usedIpv6 = message.usedIpv6);
    message.proxied !== undefined && (obj.proxied = message.proxied);
    message.usedHttp2 !== undefined && (obj.usedHttp2 = message.usedHttp2);
    message.cacheHits !== undefined && (obj.cacheHits = Math.round(message.cacheHits));
    message.cacheMisses !== undefined && (obj.cacheMisses = Math.round(message.cacheMisses));
    message.hitBytes !== undefined && (obj.hitBytes = message.hitBytes);
    message.missBytes !== undefined && (obj.missBytes = message.missBytes);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsDownloadRatesNotification_StatsInfo>, I>>(
    base?: I,
  ): CClientMetricsDownloadRatesNotification_StatsInfo {
    return CClientMetricsDownloadRatesNotification_StatsInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsDownloadRatesNotification_StatsInfo>, I>>(
    object: I,
  ): CClientMetricsDownloadRatesNotification_StatsInfo {
    const message = createBaseCClientMetricsDownloadRatesNotification_StatsInfo();
    message.sourceType = object.sourceType ?? 0;
    message.sourceId = object.sourceId ?? 0;
    message.bytes = object.bytes ?? "0";
    message.hostName = object.hostName ?? "";
    message.microseconds = object.microseconds ?? "0";
    message.usedIpv6 = object.usedIpv6 ?? false;
    message.proxied = object.proxied ?? false;
    message.usedHttp2 = object.usedHttp2 ?? false;
    message.cacheHits = object.cacheHits ?? 0;
    message.cacheMisses = object.cacheMisses ?? 0;
    message.hitBytes = object.hitBytes ?? "0";
    message.missBytes = object.missBytes ?? "0";
    return message;
  },
};

function createBaseCClientMetricsContentValidationNotification(): CClientMetricsContentValidationNotification {
  return {
    validationResult: 0,
    appId: 0,
    stagedFiles: false,
    userInitiated: false,
    earlyOut: false,
    chunksScanned: 0,
    chunksCorrupt: 0,
    bytesScanned: "0",
    chunkBytesCorrupt: "0",
    totalFileSizeCorrupt: "0",
  };
}

export const CClientMetricsContentValidationNotification = {
  encode(message: CClientMetricsContentValidationNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validationResult !== 0) {
      writer.uint32(8).int32(message.validationResult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.stagedFiles === true) {
      writer.uint32(24).bool(message.stagedFiles);
    }
    if (message.userInitiated === true) {
      writer.uint32(32).bool(message.userInitiated);
    }
    if (message.earlyOut === true) {
      writer.uint32(40).bool(message.earlyOut);
    }
    if (message.chunksScanned !== 0) {
      writer.uint32(48).uint32(message.chunksScanned);
    }
    if (message.chunksCorrupt !== 0) {
      writer.uint32(56).uint32(message.chunksCorrupt);
    }
    if (message.bytesScanned !== "0") {
      writer.uint32(64).uint64(message.bytesScanned);
    }
    if (message.chunkBytesCorrupt !== "0") {
      writer.uint32(72).uint64(message.chunkBytesCorrupt);
    }
    if (message.totalFileSizeCorrupt !== "0") {
      writer.uint32(80).uint64(message.totalFileSizeCorrupt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsContentValidationNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsContentValidationNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validationResult = reader.int32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.stagedFiles = reader.bool();
          break;
        case 4:
          message.userInitiated = reader.bool();
          break;
        case 5:
          message.earlyOut = reader.bool();
          break;
        case 6:
          message.chunksScanned = reader.uint32();
          break;
        case 7:
          message.chunksCorrupt = reader.uint32();
          break;
        case 8:
          message.bytesScanned = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.chunkBytesCorrupt = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.totalFileSizeCorrupt = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsContentValidationNotification {
    return {
      validationResult: isSet(object.validationResult) ? Number(object.validationResult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      stagedFiles: isSet(object.stagedFiles) ? Boolean(object.stagedFiles) : false,
      userInitiated: isSet(object.userInitiated) ? Boolean(object.userInitiated) : false,
      earlyOut: isSet(object.earlyOut) ? Boolean(object.earlyOut) : false,
      chunksScanned: isSet(object.chunksScanned) ? Number(object.chunksScanned) : 0,
      chunksCorrupt: isSet(object.chunksCorrupt) ? Number(object.chunksCorrupt) : 0,
      bytesScanned: isSet(object.bytesScanned) ? String(object.bytesScanned) : "0",
      chunkBytesCorrupt: isSet(object.chunkBytesCorrupt) ? String(object.chunkBytesCorrupt) : "0",
      totalFileSizeCorrupt: isSet(object.totalFileSizeCorrupt) ? String(object.totalFileSizeCorrupt) : "0",
    };
  },

  toJSON(message: CClientMetricsContentValidationNotification): unknown {
    const obj: any = {};
    message.validationResult !== undefined && (obj.validationResult = Math.round(message.validationResult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.stagedFiles !== undefined && (obj.stagedFiles = message.stagedFiles);
    message.userInitiated !== undefined && (obj.userInitiated = message.userInitiated);
    message.earlyOut !== undefined && (obj.earlyOut = message.earlyOut);
    message.chunksScanned !== undefined && (obj.chunksScanned = Math.round(message.chunksScanned));
    message.chunksCorrupt !== undefined && (obj.chunksCorrupt = Math.round(message.chunksCorrupt));
    message.bytesScanned !== undefined && (obj.bytesScanned = message.bytesScanned);
    message.chunkBytesCorrupt !== undefined && (obj.chunkBytesCorrupt = message.chunkBytesCorrupt);
    message.totalFileSizeCorrupt !== undefined && (obj.totalFileSizeCorrupt = message.totalFileSizeCorrupt);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsContentValidationNotification>, I>>(
    base?: I,
  ): CClientMetricsContentValidationNotification {
    return CClientMetricsContentValidationNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsContentValidationNotification>, I>>(
    object: I,
  ): CClientMetricsContentValidationNotification {
    const message = createBaseCClientMetricsContentValidationNotification();
    message.validationResult = object.validationResult ?? 0;
    message.appId = object.appId ?? 0;
    message.stagedFiles = object.stagedFiles ?? false;
    message.userInitiated = object.userInitiated ?? false;
    message.earlyOut = object.earlyOut ?? false;
    message.chunksScanned = object.chunksScanned ?? 0;
    message.chunksCorrupt = object.chunksCorrupt ?? 0;
    message.bytesScanned = object.bytesScanned ?? "0";
    message.chunkBytesCorrupt = object.chunkBytesCorrupt ?? "0";
    message.totalFileSizeCorrupt = object.totalFileSizeCorrupt ?? "0";
    return message;
  },
};

function createBaseCClientMetricsCloudAppSyncStatsNotification(): CClientMetricsCloudAppSyncStatsNotification {
  return {
    appId: 0,
    platformType: 0,
    preload: false,
    blockingAppLaunch: false,
    filesUploaded: 0,
    filesDownloaded: 0,
    filesDeleted: 0,
    bytesUploaded: "0",
    bytesDownloaded: "0",
    microsecTotal: "0",
    microsecInitCaches: "0",
    microsecValidateState: "0",
    microsecAcLaunch: "0",
    microsecAcPrepUserFiles: "0",
    microsecAcExit: "0",
    microsecBuildSyncList: "0",
    microsecDeleteFiles: "0",
    microsecDownloadFiles: "0",
    microsecUploadFiles: "0",
    hardwareType: 0,
    filesManaged: 0,
  };
}

export const CClientMetricsCloudAppSyncStatsNotification = {
  encode(message: CClientMetricsCloudAppSyncStatsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.platformType !== 0) {
      writer.uint32(16).uint32(message.platformType);
    }
    if (message.preload === true) {
      writer.uint32(24).bool(message.preload);
    }
    if (message.blockingAppLaunch === true) {
      writer.uint32(32).bool(message.blockingAppLaunch);
    }
    if (message.filesUploaded !== 0) {
      writer.uint32(40).uint32(message.filesUploaded);
    }
    if (message.filesDownloaded !== 0) {
      writer.uint32(48).uint32(message.filesDownloaded);
    }
    if (message.filesDeleted !== 0) {
      writer.uint32(56).uint32(message.filesDeleted);
    }
    if (message.bytesUploaded !== "0") {
      writer.uint32(64).uint64(message.bytesUploaded);
    }
    if (message.bytesDownloaded !== "0") {
      writer.uint32(72).uint64(message.bytesDownloaded);
    }
    if (message.microsecTotal !== "0") {
      writer.uint32(80).uint64(message.microsecTotal);
    }
    if (message.microsecInitCaches !== "0") {
      writer.uint32(88).uint64(message.microsecInitCaches);
    }
    if (message.microsecValidateState !== "0") {
      writer.uint32(96).uint64(message.microsecValidateState);
    }
    if (message.microsecAcLaunch !== "0") {
      writer.uint32(104).uint64(message.microsecAcLaunch);
    }
    if (message.microsecAcPrepUserFiles !== "0") {
      writer.uint32(112).uint64(message.microsecAcPrepUserFiles);
    }
    if (message.microsecAcExit !== "0") {
      writer.uint32(120).uint64(message.microsecAcExit);
    }
    if (message.microsecBuildSyncList !== "0") {
      writer.uint32(128).uint64(message.microsecBuildSyncList);
    }
    if (message.microsecDeleteFiles !== "0") {
      writer.uint32(136).uint64(message.microsecDeleteFiles);
    }
    if (message.microsecDownloadFiles !== "0") {
      writer.uint32(144).uint64(message.microsecDownloadFiles);
    }
    if (message.microsecUploadFiles !== "0") {
      writer.uint32(152).uint64(message.microsecUploadFiles);
    }
    if (message.hardwareType !== 0) {
      writer.uint32(160).uint32(message.hardwareType);
    }
    if (message.filesManaged !== 0) {
      writer.uint32(168).uint32(message.filesManaged);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsCloudAppSyncStatsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsCloudAppSyncStatsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.platformType = reader.uint32();
          break;
        case 3:
          message.preload = reader.bool();
          break;
        case 4:
          message.blockingAppLaunch = reader.bool();
          break;
        case 5:
          message.filesUploaded = reader.uint32();
          break;
        case 6:
          message.filesDownloaded = reader.uint32();
          break;
        case 7:
          message.filesDeleted = reader.uint32();
          break;
        case 8:
          message.bytesUploaded = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.bytesDownloaded = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.microsecTotal = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.microsecInitCaches = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.microsecValidateState = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.microsecAcLaunch = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.microsecAcPrepUserFiles = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.microsecAcExit = longToString(reader.uint64() as Long);
          break;
        case 16:
          message.microsecBuildSyncList = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.microsecDeleteFiles = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.microsecDownloadFiles = longToString(reader.uint64() as Long);
          break;
        case 19:
          message.microsecUploadFiles = longToString(reader.uint64() as Long);
          break;
        case 20:
          message.hardwareType = reader.uint32();
          break;
        case 21:
          message.filesManaged = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsCloudAppSyncStatsNotification {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      platformType: isSet(object.platformType) ? Number(object.platformType) : 0,
      preload: isSet(object.preload) ? Boolean(object.preload) : false,
      blockingAppLaunch: isSet(object.blockingAppLaunch) ? Boolean(object.blockingAppLaunch) : false,
      filesUploaded: isSet(object.filesUploaded) ? Number(object.filesUploaded) : 0,
      filesDownloaded: isSet(object.filesDownloaded) ? Number(object.filesDownloaded) : 0,
      filesDeleted: isSet(object.filesDeleted) ? Number(object.filesDeleted) : 0,
      bytesUploaded: isSet(object.bytesUploaded) ? String(object.bytesUploaded) : "0",
      bytesDownloaded: isSet(object.bytesDownloaded) ? String(object.bytesDownloaded) : "0",
      microsecTotal: isSet(object.microsecTotal) ? String(object.microsecTotal) : "0",
      microsecInitCaches: isSet(object.microsecInitCaches) ? String(object.microsecInitCaches) : "0",
      microsecValidateState: isSet(object.microsecValidateState) ? String(object.microsecValidateState) : "0",
      microsecAcLaunch: isSet(object.microsecAcLaunch) ? String(object.microsecAcLaunch) : "0",
      microsecAcPrepUserFiles: isSet(object.microsecAcPrepUserFiles) ? String(object.microsecAcPrepUserFiles) : "0",
      microsecAcExit: isSet(object.microsecAcExit) ? String(object.microsecAcExit) : "0",
      microsecBuildSyncList: isSet(object.microsecBuildSyncList) ? String(object.microsecBuildSyncList) : "0",
      microsecDeleteFiles: isSet(object.microsecDeleteFiles) ? String(object.microsecDeleteFiles) : "0",
      microsecDownloadFiles: isSet(object.microsecDownloadFiles) ? String(object.microsecDownloadFiles) : "0",
      microsecUploadFiles: isSet(object.microsecUploadFiles) ? String(object.microsecUploadFiles) : "0",
      hardwareType: isSet(object.hardwareType) ? Number(object.hardwareType) : 0,
      filesManaged: isSet(object.filesManaged) ? Number(object.filesManaged) : 0,
    };
  },

  toJSON(message: CClientMetricsCloudAppSyncStatsNotification): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.platformType !== undefined && (obj.platformType = Math.round(message.platformType));
    message.preload !== undefined && (obj.preload = message.preload);
    message.blockingAppLaunch !== undefined && (obj.blockingAppLaunch = message.blockingAppLaunch);
    message.filesUploaded !== undefined && (obj.filesUploaded = Math.round(message.filesUploaded));
    message.filesDownloaded !== undefined && (obj.filesDownloaded = Math.round(message.filesDownloaded));
    message.filesDeleted !== undefined && (obj.filesDeleted = Math.round(message.filesDeleted));
    message.bytesUploaded !== undefined && (obj.bytesUploaded = message.bytesUploaded);
    message.bytesDownloaded !== undefined && (obj.bytesDownloaded = message.bytesDownloaded);
    message.microsecTotal !== undefined && (obj.microsecTotal = message.microsecTotal);
    message.microsecInitCaches !== undefined && (obj.microsecInitCaches = message.microsecInitCaches);
    message.microsecValidateState !== undefined && (obj.microsecValidateState = message.microsecValidateState);
    message.microsecAcLaunch !== undefined && (obj.microsecAcLaunch = message.microsecAcLaunch);
    message.microsecAcPrepUserFiles !== undefined && (obj.microsecAcPrepUserFiles = message.microsecAcPrepUserFiles);
    message.microsecAcExit !== undefined && (obj.microsecAcExit = message.microsecAcExit);
    message.microsecBuildSyncList !== undefined && (obj.microsecBuildSyncList = message.microsecBuildSyncList);
    message.microsecDeleteFiles !== undefined && (obj.microsecDeleteFiles = message.microsecDeleteFiles);
    message.microsecDownloadFiles !== undefined && (obj.microsecDownloadFiles = message.microsecDownloadFiles);
    message.microsecUploadFiles !== undefined && (obj.microsecUploadFiles = message.microsecUploadFiles);
    message.hardwareType !== undefined && (obj.hardwareType = Math.round(message.hardwareType));
    message.filesManaged !== undefined && (obj.filesManaged = Math.round(message.filesManaged));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsCloudAppSyncStatsNotification>, I>>(
    base?: I,
  ): CClientMetricsCloudAppSyncStatsNotification {
    return CClientMetricsCloudAppSyncStatsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsCloudAppSyncStatsNotification>, I>>(
    object: I,
  ): CClientMetricsCloudAppSyncStatsNotification {
    const message = createBaseCClientMetricsCloudAppSyncStatsNotification();
    message.appId = object.appId ?? 0;
    message.platformType = object.platformType ?? 0;
    message.preload = object.preload ?? false;
    message.blockingAppLaunch = object.blockingAppLaunch ?? false;
    message.filesUploaded = object.filesUploaded ?? 0;
    message.filesDownloaded = object.filesDownloaded ?? 0;
    message.filesDeleted = object.filesDeleted ?? 0;
    message.bytesUploaded = object.bytesUploaded ?? "0";
    message.bytesDownloaded = object.bytesDownloaded ?? "0";
    message.microsecTotal = object.microsecTotal ?? "0";
    message.microsecInitCaches = object.microsecInitCaches ?? "0";
    message.microsecValidateState = object.microsecValidateState ?? "0";
    message.microsecAcLaunch = object.microsecAcLaunch ?? "0";
    message.microsecAcPrepUserFiles = object.microsecAcPrepUserFiles ?? "0";
    message.microsecAcExit = object.microsecAcExit ?? "0";
    message.microsecBuildSyncList = object.microsecBuildSyncList ?? "0";
    message.microsecDeleteFiles = object.microsecDeleteFiles ?? "0";
    message.microsecDownloadFiles = object.microsecDownloadFiles ?? "0";
    message.microsecUploadFiles = object.microsecUploadFiles ?? "0";
    message.hardwareType = object.hardwareType ?? 0;
    message.filesManaged = object.filesManaged ?? 0;
    return message;
  },
};

function createBaseCClientMetricsContentDownloadResponseCountsNotification(): CClientMetricsContentDownloadResponseCountsNotification {
  return { cellId: 0, data: undefined };
}

export const CClientMetricsContentDownloadResponseCountsNotification = {
  encode(
    message: CClientMetricsContentDownloadResponseCountsNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    if (message.data !== undefined) {
      CClientMetricsContentDownloadResponseHosts.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsContentDownloadResponseCountsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsContentDownloadResponseCountsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.data = CClientMetricsContentDownloadResponseHosts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsContentDownloadResponseCountsNotification {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      data: isSet(object.data) ? CClientMetricsContentDownloadResponseHosts.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: CClientMetricsContentDownloadResponseCountsNotification): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.data !== undefined &&
      (obj.data = message.data ? CClientMetricsContentDownloadResponseHosts.toJSON(message.data) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseCountsNotification>, I>>(
    base?: I,
  ): CClientMetricsContentDownloadResponseCountsNotification {
    return CClientMetricsContentDownloadResponseCountsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseCountsNotification>, I>>(
    object: I,
  ): CClientMetricsContentDownloadResponseCountsNotification {
    const message = createBaseCClientMetricsContentDownloadResponseCountsNotification();
    message.cellId = object.cellId ?? 0;
    message.data = (object.data !== undefined && object.data !== null)
      ? CClientMetricsContentDownloadResponseHosts.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseCClientMetricsReportClientArgsNotification(): CClientMetricsReportClientArgsNotification {
  return {
    clientArgs: [],
    gpuWebviewRegkeyDisabled: false,
    suppressGpuChrome: false,
    browserNotSupported: false,
    hwAccelVideoRegkeyDisabled: false,
    miniModeEnabled: false,
    fpsCounterEnabled: false,
    libraryLowBandwidthModeEnabled: false,
    libraryLowPerfModeEnabled: false,
  };
}

export const CClientMetricsReportClientArgsNotification = {
  encode(message: CClientMetricsReportClientArgsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clientArgs) {
      writer.uint32(10).string(v!);
    }
    if (message.gpuWebviewRegkeyDisabled === true) {
      writer.uint32(16).bool(message.gpuWebviewRegkeyDisabled);
    }
    if (message.suppressGpuChrome === true) {
      writer.uint32(24).bool(message.suppressGpuChrome);
    }
    if (message.browserNotSupported === true) {
      writer.uint32(32).bool(message.browserNotSupported);
    }
    if (message.hwAccelVideoRegkeyDisabled === true) {
      writer.uint32(40).bool(message.hwAccelVideoRegkeyDisabled);
    }
    if (message.miniModeEnabled === true) {
      writer.uint32(48).bool(message.miniModeEnabled);
    }
    if (message.fpsCounterEnabled === true) {
      writer.uint32(56).bool(message.fpsCounterEnabled);
    }
    if (message.libraryLowBandwidthModeEnabled === true) {
      writer.uint32(64).bool(message.libraryLowBandwidthModeEnabled);
    }
    if (message.libraryLowPerfModeEnabled === true) {
      writer.uint32(72).bool(message.libraryLowPerfModeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsReportClientArgsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsReportClientArgsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientArgs.push(reader.string());
          break;
        case 2:
          message.gpuWebviewRegkeyDisabled = reader.bool();
          break;
        case 3:
          message.suppressGpuChrome = reader.bool();
          break;
        case 4:
          message.browserNotSupported = reader.bool();
          break;
        case 5:
          message.hwAccelVideoRegkeyDisabled = reader.bool();
          break;
        case 6:
          message.miniModeEnabled = reader.bool();
          break;
        case 7:
          message.fpsCounterEnabled = reader.bool();
          break;
        case 8:
          message.libraryLowBandwidthModeEnabled = reader.bool();
          break;
        case 9:
          message.libraryLowPerfModeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsReportClientArgsNotification {
    return {
      clientArgs: Array.isArray(object?.clientArgs) ? object.clientArgs.map((e: any) => String(e)) : [],
      gpuWebviewRegkeyDisabled: isSet(object.gpuWebviewRegkeyDisabled)
        ? Boolean(object.gpuWebviewRegkeyDisabled)
        : false,
      suppressGpuChrome: isSet(object.suppressGpuChrome) ? Boolean(object.suppressGpuChrome) : false,
      browserNotSupported: isSet(object.browserNotSupported) ? Boolean(object.browserNotSupported) : false,
      hwAccelVideoRegkeyDisabled: isSet(object.hwAccelVideoRegkeyDisabled)
        ? Boolean(object.hwAccelVideoRegkeyDisabled)
        : false,
      miniModeEnabled: isSet(object.miniModeEnabled) ? Boolean(object.miniModeEnabled) : false,
      fpsCounterEnabled: isSet(object.fpsCounterEnabled) ? Boolean(object.fpsCounterEnabled) : false,
      libraryLowBandwidthModeEnabled: isSet(object.libraryLowBandwidthModeEnabled)
        ? Boolean(object.libraryLowBandwidthModeEnabled)
        : false,
      libraryLowPerfModeEnabled: isSet(object.libraryLowPerfModeEnabled)
        ? Boolean(object.libraryLowPerfModeEnabled)
        : false,
    };
  },

  toJSON(message: CClientMetricsReportClientArgsNotification): unknown {
    const obj: any = {};
    if (message.clientArgs) {
      obj.clientArgs = message.clientArgs.map((e) => e);
    } else {
      obj.clientArgs = [];
    }
    message.gpuWebviewRegkeyDisabled !== undefined && (obj.gpuWebviewRegkeyDisabled = message.gpuWebviewRegkeyDisabled);
    message.suppressGpuChrome !== undefined && (obj.suppressGpuChrome = message.suppressGpuChrome);
    message.browserNotSupported !== undefined && (obj.browserNotSupported = message.browserNotSupported);
    message.hwAccelVideoRegkeyDisabled !== undefined &&
      (obj.hwAccelVideoRegkeyDisabled = message.hwAccelVideoRegkeyDisabled);
    message.miniModeEnabled !== undefined && (obj.miniModeEnabled = message.miniModeEnabled);
    message.fpsCounterEnabled !== undefined && (obj.fpsCounterEnabled = message.fpsCounterEnabled);
    message.libraryLowBandwidthModeEnabled !== undefined &&
      (obj.libraryLowBandwidthModeEnabled = message.libraryLowBandwidthModeEnabled);
    message.libraryLowPerfModeEnabled !== undefined &&
      (obj.libraryLowPerfModeEnabled = message.libraryLowPerfModeEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsReportClientArgsNotification>, I>>(
    base?: I,
  ): CClientMetricsReportClientArgsNotification {
    return CClientMetricsReportClientArgsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsReportClientArgsNotification>, I>>(
    object: I,
  ): CClientMetricsReportClientArgsNotification {
    const message = createBaseCClientMetricsReportClientArgsNotification();
    message.clientArgs = object.clientArgs?.map((e) => e) || [];
    message.gpuWebviewRegkeyDisabled = object.gpuWebviewRegkeyDisabled ?? false;
    message.suppressGpuChrome = object.suppressGpuChrome ?? false;
    message.browserNotSupported = object.browserNotSupported ?? false;
    message.hwAccelVideoRegkeyDisabled = object.hwAccelVideoRegkeyDisabled ?? false;
    message.miniModeEnabled = object.miniModeEnabled ?? false;
    message.fpsCounterEnabled = object.fpsCounterEnabled ?? false;
    message.libraryLowBandwidthModeEnabled = object.libraryLowBandwidthModeEnabled ?? false;
    message.libraryLowPerfModeEnabled = object.libraryLowPerfModeEnabled ?? false;
    return message;
  },
};

export interface ClientMetrics {
  ClientAppInterfaceStatsReport(request: CClientMetricsAppInterfaceStatsNotification): Promise<NoResponse>;
  ClientIPv6ConnectivityReport(request: CClientMetricsIPv6ConnectivityNotification): Promise<NoResponse>;
  SteamPipeWorkStatsReport(request: CClientMetricsSteamPipeWorkStatsNotification): Promise<NoResponse>;
  ReportReactUsage(request: CClientMetricsReportReactUsageNotification): Promise<NoResponse>;
  ReportClientError(request: CClientMetricsReportClientErrorNotification): Promise<NoResponse>;
  ClientBootstrapReport(request: CClientMetricsClientBootstrapNotification): Promise<NoResponse>;
  ClientDownloadRatesReport(request: CClientMetricsDownloadRatesNotification): Promise<NoResponse>;
  ClientContentValidationReport(request: CClientMetricsContentValidationNotification): Promise<NoResponse>;
  ClientCloudAppSyncStats(request: CClientMetricsCloudAppSyncStatsNotification): Promise<NoResponse>;
  ClientDownloadResponseCodeCounts(
    request: CClientMetricsContentDownloadResponseCountsNotification,
  ): Promise<NoResponse>;
  ReportClientArgs(request: CClientMetricsReportClientArgsNotification): Promise<NoResponse>;
}

export class ClientMetricsClientImpl implements ClientMetrics {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ClientMetrics";
    this.rpc = rpc;
    this.ClientAppInterfaceStatsReport = this.ClientAppInterfaceStatsReport.bind(this);
    this.ClientIPv6ConnectivityReport = this.ClientIPv6ConnectivityReport.bind(this);
    this.SteamPipeWorkStatsReport = this.SteamPipeWorkStatsReport.bind(this);
    this.ReportReactUsage = this.ReportReactUsage.bind(this);
    this.ReportClientError = this.ReportClientError.bind(this);
    this.ClientBootstrapReport = this.ClientBootstrapReport.bind(this);
    this.ClientDownloadRatesReport = this.ClientDownloadRatesReport.bind(this);
    this.ClientContentValidationReport = this.ClientContentValidationReport.bind(this);
    this.ClientCloudAppSyncStats = this.ClientCloudAppSyncStats.bind(this);
    this.ClientDownloadResponseCodeCounts = this.ClientDownloadResponseCodeCounts.bind(this);
    this.ReportClientArgs = this.ReportClientArgs.bind(this);
  }
  ClientAppInterfaceStatsReport(request: CClientMetricsAppInterfaceStatsNotification): Promise<NoResponse> {
    const data = CClientMetricsAppInterfaceStatsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientAppInterfaceStatsReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientIPv6ConnectivityReport(request: CClientMetricsIPv6ConnectivityNotification): Promise<NoResponse> {
    const data = CClientMetricsIPv6ConnectivityNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientIPv6ConnectivityReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SteamPipeWorkStatsReport(request: CClientMetricsSteamPipeWorkStatsNotification): Promise<NoResponse> {
    const data = CClientMetricsSteamPipeWorkStatsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SteamPipeWorkStatsReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ReportReactUsage(request: CClientMetricsReportReactUsageNotification): Promise<NoResponse> {
    const data = CClientMetricsReportReactUsageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportReactUsage", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ReportClientError(request: CClientMetricsReportClientErrorNotification): Promise<NoResponse> {
    const data = CClientMetricsReportClientErrorNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportClientError", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientBootstrapReport(request: CClientMetricsClientBootstrapNotification): Promise<NoResponse> {
    const data = CClientMetricsClientBootstrapNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientBootstrapReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientDownloadRatesReport(request: CClientMetricsDownloadRatesNotification): Promise<NoResponse> {
    const data = CClientMetricsDownloadRatesNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientDownloadRatesReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientContentValidationReport(request: CClientMetricsContentValidationNotification): Promise<NoResponse> {
    const data = CClientMetricsContentValidationNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientContentValidationReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientCloudAppSyncStats(request: CClientMetricsCloudAppSyncStatsNotification): Promise<NoResponse> {
    const data = CClientMetricsCloudAppSyncStatsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientCloudAppSyncStats", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientDownloadResponseCodeCounts(
    request: CClientMetricsContentDownloadResponseCountsNotification,
  ): Promise<NoResponse> {
    const data = CClientMetricsContentDownloadResponseCountsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientDownloadResponseCodeCounts", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ReportClientArgs(request: CClientMetricsReportClientArgsNotification): Promise<NoResponse> {
    const data = CClientMetricsReportClientArgsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportClientArgs", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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
