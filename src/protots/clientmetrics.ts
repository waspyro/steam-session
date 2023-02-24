/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CClientMetricsClientBootstrapRequestInfo {
  originalHostname: string;
  actualHostname: string;
  path: string;
  baseName: string;
  success: boolean;
  statusCode: number;
  addressOfRequestUrl: string;
  responseTimeMs: number;
  bytesReceived: number;
  numRetries: number;
}

export interface CClientMetricsClientBootstrapSummary {
  launcherType: number;
  steamRealm: number;
  betaName: string;
  downloadCompleted: boolean;
  totalTimeMs: number;
  manifestRequests: CClientMetricsClientBootstrapRequestInfo[];
  packageRequests: CClientMetricsClientBootstrapRequestInfo[];
}

export interface CClientMetricsContentDownloadResponseCounts {
  class100: number;
  class200: number;
  class300: number;
  class400: number;
  class500: number;
  noResponse: number;
  classUnknown: number;
}

export interface CClientMetricsContentDownloadResponseHostCounts {
  hostname: string;
  sourceType: number;
  counts: CClientMetricsContentDownloadResponseCounts | undefined;
}

export interface CClientMetricsContentDownloadResponseHosts {
  hosts: CClientMetricsContentDownloadResponseHostCounts[];
}

function createBaseCClientMetricsClientBootstrapRequestInfo(): CClientMetricsClientBootstrapRequestInfo {
  return {
    originalHostname: "",
    actualHostname: "",
    path: "",
    baseName: "",
    success: false,
    statusCode: 0,
    addressOfRequestUrl: "",
    responseTimeMs: 0,
    bytesReceived: 0,
    numRetries: 0,
  };
}

export const CClientMetricsClientBootstrapRequestInfo = {
  encode(message: CClientMetricsClientBootstrapRequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalHostname !== "") {
      writer.uint32(10).string(message.originalHostname);
    }
    if (message.actualHostname !== "") {
      writer.uint32(18).string(message.actualHostname);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.baseName !== "") {
      writer.uint32(34).string(message.baseName);
    }
    if (message.success === true) {
      writer.uint32(40).bool(message.success);
    }
    if (message.statusCode !== 0) {
      writer.uint32(48).uint32(message.statusCode);
    }
    if (message.addressOfRequestUrl !== "") {
      writer.uint32(58).string(message.addressOfRequestUrl);
    }
    if (message.responseTimeMs !== 0) {
      writer.uint32(64).uint32(message.responseTimeMs);
    }
    if (message.bytesReceived !== 0) {
      writer.uint32(72).uint64(message.bytesReceived);
    }
    if (message.numRetries !== 0) {
      writer.uint32(80).uint32(message.numRetries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsClientBootstrapRequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsClientBootstrapRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalHostname = reader.string();
          break;
        case 2:
          message.actualHostname = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.baseName = reader.string();
          break;
        case 5:
          message.success = reader.bool();
          break;
        case 6:
          message.statusCode = reader.uint32();
          break;
        case 7:
          message.addressOfRequestUrl = reader.string();
          break;
        case 8:
          message.responseTimeMs = reader.uint32();
          break;
        case 9:
          message.bytesReceived = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.numRetries = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsClientBootstrapRequestInfo {
    return {
      originalHostname: isSet(object.originalHostname) ? String(object.originalHostname) : "",
      actualHostname: isSet(object.actualHostname) ? String(object.actualHostname) : "",
      path: isSet(object.path) ? String(object.path) : "",
      baseName: isSet(object.baseName) ? String(object.baseName) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
      addressOfRequestUrl: isSet(object.addressOfRequestUrl) ? String(object.addressOfRequestUrl) : "",
      responseTimeMs: isSet(object.responseTimeMs) ? Number(object.responseTimeMs) : 0,
      bytesReceived: isSet(object.bytesReceived) ? Number(object.bytesReceived) : 0,
      numRetries: isSet(object.numRetries) ? Number(object.numRetries) : 0,
    };
  },

  toJSON(message: CClientMetricsClientBootstrapRequestInfo): unknown {
    const obj: any = {};
    message.originalHostname !== undefined && (obj.originalHostname = message.originalHostname);
    message.actualHostname !== undefined && (obj.actualHostname = message.actualHostname);
    message.path !== undefined && (obj.path = message.path);
    message.baseName !== undefined && (obj.baseName = message.baseName);
    message.success !== undefined && (obj.success = message.success);
    message.statusCode !== undefined && (obj.statusCode = Math.round(message.statusCode));
    message.addressOfRequestUrl !== undefined && (obj.addressOfRequestUrl = message.addressOfRequestUrl);
    message.responseTimeMs !== undefined && (obj.responseTimeMs = Math.round(message.responseTimeMs));
    message.bytesReceived !== undefined && (obj.bytesReceived = Math.round(message.bytesReceived));
    message.numRetries !== undefined && (obj.numRetries = Math.round(message.numRetries));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsClientBootstrapRequestInfo>, I>>(
    base?: I,
  ): CClientMetricsClientBootstrapRequestInfo {
    return CClientMetricsClientBootstrapRequestInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsClientBootstrapRequestInfo>, I>>(
    object: I,
  ): CClientMetricsClientBootstrapRequestInfo {
    const message = createBaseCClientMetricsClientBootstrapRequestInfo();
    message.originalHostname = object.originalHostname ?? "";
    message.actualHostname = object.actualHostname ?? "";
    message.path = object.path ?? "";
    message.baseName = object.baseName ?? "";
    message.success = object.success ?? false;
    message.statusCode = object.statusCode ?? 0;
    message.addressOfRequestUrl = object.addressOfRequestUrl ?? "";
    message.responseTimeMs = object.responseTimeMs ?? 0;
    message.bytesReceived = object.bytesReceived ?? 0;
    message.numRetries = object.numRetries ?? 0;
    return message;
  },
};

function createBaseCClientMetricsClientBootstrapSummary(): CClientMetricsClientBootstrapSummary {
  return {
    launcherType: 0,
    steamRealm: 0,
    betaName: "",
    downloadCompleted: false,
    totalTimeMs: 0,
    manifestRequests: [],
    packageRequests: [],
  };
}

export const CClientMetricsClientBootstrapSummary = {
  encode(message: CClientMetricsClientBootstrapSummary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.launcherType !== 0) {
      writer.uint32(8).uint32(message.launcherType);
    }
    if (message.steamRealm !== 0) {
      writer.uint32(16).uint32(message.steamRealm);
    }
    if (message.betaName !== "") {
      writer.uint32(26).string(message.betaName);
    }
    if (message.downloadCompleted === true) {
      writer.uint32(32).bool(message.downloadCompleted);
    }
    if (message.totalTimeMs !== 0) {
      writer.uint32(48).uint32(message.totalTimeMs);
    }
    for (const v of message.manifestRequests) {
      CClientMetricsClientBootstrapRequestInfo.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.packageRequests) {
      CClientMetricsClientBootstrapRequestInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsClientBootstrapSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsClientBootstrapSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.launcherType = reader.uint32();
          break;
        case 2:
          message.steamRealm = reader.uint32();
          break;
        case 3:
          message.betaName = reader.string();
          break;
        case 4:
          message.downloadCompleted = reader.bool();
          break;
        case 6:
          message.totalTimeMs = reader.uint32();
          break;
        case 7:
          message.manifestRequests.push(CClientMetricsClientBootstrapRequestInfo.decode(reader, reader.uint32()));
          break;
        case 8:
          message.packageRequests.push(CClientMetricsClientBootstrapRequestInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsClientBootstrapSummary {
    return {
      launcherType: isSet(object.launcherType) ? Number(object.launcherType) : 0,
      steamRealm: isSet(object.steamRealm) ? Number(object.steamRealm) : 0,
      betaName: isSet(object.betaName) ? String(object.betaName) : "",
      downloadCompleted: isSet(object.downloadCompleted) ? Boolean(object.downloadCompleted) : false,
      totalTimeMs: isSet(object.totalTimeMs) ? Number(object.totalTimeMs) : 0,
      manifestRequests: Array.isArray(object?.manifestRequests)
        ? object.manifestRequests.map((e: any) => CClientMetricsClientBootstrapRequestInfo.fromJSON(e))
        : [],
      packageRequests: Array.isArray(object?.packageRequests)
        ? object.packageRequests.map((e: any) => CClientMetricsClientBootstrapRequestInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CClientMetricsClientBootstrapSummary): unknown {
    const obj: any = {};
    message.launcherType !== undefined && (obj.launcherType = Math.round(message.launcherType));
    message.steamRealm !== undefined && (obj.steamRealm = Math.round(message.steamRealm));
    message.betaName !== undefined && (obj.betaName = message.betaName);
    message.downloadCompleted !== undefined && (obj.downloadCompleted = message.downloadCompleted);
    message.totalTimeMs !== undefined && (obj.totalTimeMs = Math.round(message.totalTimeMs));
    if (message.manifestRequests) {
      obj.manifestRequests = message.manifestRequests.map((e) =>
        e ? CClientMetricsClientBootstrapRequestInfo.toJSON(e) : undefined
      );
    } else {
      obj.manifestRequests = [];
    }
    if (message.packageRequests) {
      obj.packageRequests = message.packageRequests.map((e) =>
        e ? CClientMetricsClientBootstrapRequestInfo.toJSON(e) : undefined
      );
    } else {
      obj.packageRequests = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsClientBootstrapSummary>, I>>(
    base?: I,
  ): CClientMetricsClientBootstrapSummary {
    return CClientMetricsClientBootstrapSummary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsClientBootstrapSummary>, I>>(
    object: I,
  ): CClientMetricsClientBootstrapSummary {
    const message = createBaseCClientMetricsClientBootstrapSummary();
    message.launcherType = object.launcherType ?? 0;
    message.steamRealm = object.steamRealm ?? 0;
    message.betaName = object.betaName ?? "";
    message.downloadCompleted = object.downloadCompleted ?? false;
    message.totalTimeMs = object.totalTimeMs ?? 0;
    message.manifestRequests =
      object.manifestRequests?.map((e) => CClientMetricsClientBootstrapRequestInfo.fromPartial(e)) || [];
    message.packageRequests =
      object.packageRequests?.map((e) => CClientMetricsClientBootstrapRequestInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCClientMetricsContentDownloadResponseCounts(): CClientMetricsContentDownloadResponseCounts {
  return { class100: 0, class200: 0, class300: 0, class400: 0, class500: 0, noResponse: 0, classUnknown: 0 };
}

export const CClientMetricsContentDownloadResponseCounts = {
  encode(message: CClientMetricsContentDownloadResponseCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.class100 !== 0) {
      writer.uint32(8).uint32(message.class100);
    }
    if (message.class200 !== 0) {
      writer.uint32(16).uint32(message.class200);
    }
    if (message.class300 !== 0) {
      writer.uint32(24).uint32(message.class300);
    }
    if (message.class400 !== 0) {
      writer.uint32(32).uint32(message.class400);
    }
    if (message.class500 !== 0) {
      writer.uint32(40).uint32(message.class500);
    }
    if (message.noResponse !== 0) {
      writer.uint32(48).uint32(message.noResponse);
    }
    if (message.classUnknown !== 0) {
      writer.uint32(56).uint32(message.classUnknown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsContentDownloadResponseCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsContentDownloadResponseCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class100 = reader.uint32();
          break;
        case 2:
          message.class200 = reader.uint32();
          break;
        case 3:
          message.class300 = reader.uint32();
          break;
        case 4:
          message.class400 = reader.uint32();
          break;
        case 5:
          message.class500 = reader.uint32();
          break;
        case 6:
          message.noResponse = reader.uint32();
          break;
        case 7:
          message.classUnknown = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsContentDownloadResponseCounts {
    return {
      class100: isSet(object.class100) ? Number(object.class100) : 0,
      class200: isSet(object.class200) ? Number(object.class200) : 0,
      class300: isSet(object.class300) ? Number(object.class300) : 0,
      class400: isSet(object.class400) ? Number(object.class400) : 0,
      class500: isSet(object.class500) ? Number(object.class500) : 0,
      noResponse: isSet(object.noResponse) ? Number(object.noResponse) : 0,
      classUnknown: isSet(object.classUnknown) ? Number(object.classUnknown) : 0,
    };
  },

  toJSON(message: CClientMetricsContentDownloadResponseCounts): unknown {
    const obj: any = {};
    message.class100 !== undefined && (obj.class100 = Math.round(message.class100));
    message.class200 !== undefined && (obj.class200 = Math.round(message.class200));
    message.class300 !== undefined && (obj.class300 = Math.round(message.class300));
    message.class400 !== undefined && (obj.class400 = Math.round(message.class400));
    message.class500 !== undefined && (obj.class500 = Math.round(message.class500));
    message.noResponse !== undefined && (obj.noResponse = Math.round(message.noResponse));
    message.classUnknown !== undefined && (obj.classUnknown = Math.round(message.classUnknown));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseCounts>, I>>(
    base?: I,
  ): CClientMetricsContentDownloadResponseCounts {
    return CClientMetricsContentDownloadResponseCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseCounts>, I>>(
    object: I,
  ): CClientMetricsContentDownloadResponseCounts {
    const message = createBaseCClientMetricsContentDownloadResponseCounts();
    message.class100 = object.class100 ?? 0;
    message.class200 = object.class200 ?? 0;
    message.class300 = object.class300 ?? 0;
    message.class400 = object.class400 ?? 0;
    message.class500 = object.class500 ?? 0;
    message.noResponse = object.noResponse ?? 0;
    message.classUnknown = object.classUnknown ?? 0;
    return message;
  },
};

function createBaseCClientMetricsContentDownloadResponseHostCounts(): CClientMetricsContentDownloadResponseHostCounts {
  return { hostname: "", sourceType: 0, counts: undefined };
}

export const CClientMetricsContentDownloadResponseHostCounts = {
  encode(
    message: CClientMetricsContentDownloadResponseHostCounts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).uint32(message.sourceType);
    }
    if (message.counts !== undefined) {
      CClientMetricsContentDownloadResponseCounts.encode(message.counts, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsContentDownloadResponseHostCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsContentDownloadResponseHostCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostname = reader.string();
          break;
        case 2:
          message.sourceType = reader.uint32();
          break;
        case 3:
          message.counts = CClientMetricsContentDownloadResponseCounts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsContentDownloadResponseHostCounts {
    return {
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      sourceType: isSet(object.sourceType) ? Number(object.sourceType) : 0,
      counts: isSet(object.counts) ? CClientMetricsContentDownloadResponseCounts.fromJSON(object.counts) : undefined,
    };
  },

  toJSON(message: CClientMetricsContentDownloadResponseHostCounts): unknown {
    const obj: any = {};
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.sourceType !== undefined && (obj.sourceType = Math.round(message.sourceType));
    message.counts !== undefined &&
      (obj.counts = message.counts ? CClientMetricsContentDownloadResponseCounts.toJSON(message.counts) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseHostCounts>, I>>(
    base?: I,
  ): CClientMetricsContentDownloadResponseHostCounts {
    return CClientMetricsContentDownloadResponseHostCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseHostCounts>, I>>(
    object: I,
  ): CClientMetricsContentDownloadResponseHostCounts {
    const message = createBaseCClientMetricsContentDownloadResponseHostCounts();
    message.hostname = object.hostname ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.counts = (object.counts !== undefined && object.counts !== null)
      ? CClientMetricsContentDownloadResponseCounts.fromPartial(object.counts)
      : undefined;
    return message;
  },
};

function createBaseCClientMetricsContentDownloadResponseHosts(): CClientMetricsContentDownloadResponseHosts {
  return { hosts: [] };
}

export const CClientMetricsContentDownloadResponseHosts = {
  encode(message: CClientMetricsContentDownloadResponseHosts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hosts) {
      CClientMetricsContentDownloadResponseHostCounts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientMetricsContentDownloadResponseHosts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientMetricsContentDownloadResponseHosts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hosts.push(CClientMetricsContentDownloadResponseHostCounts.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientMetricsContentDownloadResponseHosts {
    return {
      hosts: Array.isArray(object?.hosts)
        ? object.hosts.map((e: any) => CClientMetricsContentDownloadResponseHostCounts.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CClientMetricsContentDownloadResponseHosts): unknown {
    const obj: any = {};
    if (message.hosts) {
      obj.hosts = message.hosts.map((e) => e ? CClientMetricsContentDownloadResponseHostCounts.toJSON(e) : undefined);
    } else {
      obj.hosts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseHosts>, I>>(
    base?: I,
  ): CClientMetricsContentDownloadResponseHosts {
    return CClientMetricsContentDownloadResponseHosts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientMetricsContentDownloadResponseHosts>, I>>(
    object: I,
  ): CClientMetricsContentDownloadResponseHosts {
    const message = createBaseCClientMetricsContentDownloadResponseHosts();
    message.hosts = object.hosts?.map((e) => CClientMetricsContentDownloadResponseHostCounts.fromPartial(e)) || [];
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
