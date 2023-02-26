/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CFileVerificationSignatureCheckRequest {
  steamid: string;
  appid: number;
  fileSize: string;
  fileTimestamp: number;
  fileTimestamp2: number;
  signatureResult: number;
  filename: string;
  clientPackageVersion: number;
  sha1hash: Buffer;
}

export interface CFileVerificationSignatureCheckResponse {
  denyOperation: boolean;
}

export interface CFileVerificationSteamServiceCheckRequest {
  serviceStatus: number;
  clientPackageVersion: number;
  launcherType: number;
  osType: number;
  serviceRepair: number;
}

export interface CFileVerificationSteamServiceCheckResponse {
  attemptRepair: boolean;
}

function createBaseCFileVerificationSignatureCheckRequest(): CFileVerificationSignatureCheckRequest {
  return {
    steamid: "0",
    appid: 0,
    fileSize: "0",
    fileTimestamp: 0,
    fileTimestamp2: 0,
    signatureResult: 0,
    filename: "",
    clientPackageVersion: 0,
    sha1hash: Buffer.alloc(0),
  };
}

export const CFileVerificationSignatureCheckRequest = {
  encode(message: CFileVerificationSignatureCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.fileSize !== "0") {
      writer.uint32(24).uint64(message.fileSize);
    }
    if (message.fileTimestamp !== 0) {
      writer.uint32(32).uint32(message.fileTimestamp);
    }
    if (message.fileTimestamp2 !== 0) {
      writer.uint32(40).uint32(message.fileTimestamp2);
    }
    if (message.signatureResult !== 0) {
      writer.uint32(48).uint32(message.signatureResult);
    }
    if (message.filename !== "") {
      writer.uint32(58).string(message.filename);
    }
    if (message.clientPackageVersion !== 0) {
      writer.uint32(64).uint32(message.clientPackageVersion);
    }
    if (message.sha1hash.length !== 0) {
      writer.uint32(74).bytes(message.sha1hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFileVerificationSignatureCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFileVerificationSignatureCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.fileSize = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.fileTimestamp = reader.uint32();
          break;
        case 5:
          message.fileTimestamp2 = reader.uint32();
          break;
        case 6:
          message.signatureResult = reader.uint32();
          break;
        case 7:
          message.filename = reader.string();
          break;
        case 8:
          message.clientPackageVersion = reader.uint32();
          break;
        case 9:
          message.sha1hash = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFileVerificationSignatureCheckRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fileSize: isSet(object.fileSize) ? String(object.fileSize) : "0",
      fileTimestamp: isSet(object.fileTimestamp) ? Number(object.fileTimestamp) : 0,
      fileTimestamp2: isSet(object.fileTimestamp2) ? Number(object.fileTimestamp2) : 0,
      signatureResult: isSet(object.signatureResult) ? Number(object.signatureResult) : 0,
      filename: isSet(object.filename) ? String(object.filename) : "",
      clientPackageVersion: isSet(object.clientPackageVersion) ? Number(object.clientPackageVersion) : 0,
      sha1hash: isSet(object.sha1hash) ? Buffer.from(bytesFromBase64(object.sha1hash)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CFileVerificationSignatureCheckRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fileSize !== undefined && (obj.fileSize = message.fileSize);
    message.fileTimestamp !== undefined && (obj.fileTimestamp = Math.round(message.fileTimestamp));
    message.fileTimestamp2 !== undefined && (obj.fileTimestamp2 = Math.round(message.fileTimestamp2));
    message.signatureResult !== undefined && (obj.signatureResult = Math.round(message.signatureResult));
    message.filename !== undefined && (obj.filename = message.filename);
    message.clientPackageVersion !== undefined && (obj.clientPackageVersion = Math.round(message.clientPackageVersion));
    message.sha1hash !== undefined &&
      (obj.sha1hash = base64FromBytes(message.sha1hash !== undefined ? message.sha1hash : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFileVerificationSignatureCheckRequest>, I>>(
    base?: I,
  ): CFileVerificationSignatureCheckRequest {
    return CFileVerificationSignatureCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFileVerificationSignatureCheckRequest>, I>>(
    object: I,
  ): CFileVerificationSignatureCheckRequest {
    const message = createBaseCFileVerificationSignatureCheckRequest();
    message.steamid = object.steamid ?? "0";
    message.appid = object.appid ?? 0;
    message.fileSize = object.fileSize ?? "0";
    message.fileTimestamp = object.fileTimestamp ?? 0;
    message.fileTimestamp2 = object.fileTimestamp2 ?? 0;
    message.signatureResult = object.signatureResult ?? 0;
    message.filename = object.filename ?? "";
    message.clientPackageVersion = object.clientPackageVersion ?? 0;
    message.sha1hash = object.sha1hash ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCFileVerificationSignatureCheckResponse(): CFileVerificationSignatureCheckResponse {
  return { denyOperation: false };
}

export const CFileVerificationSignatureCheckResponse = {
  encode(message: CFileVerificationSignatureCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denyOperation === true) {
      writer.uint32(8).bool(message.denyOperation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFileVerificationSignatureCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFileVerificationSignatureCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denyOperation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFileVerificationSignatureCheckResponse {
    return { denyOperation: isSet(object.denyOperation) ? Boolean(object.denyOperation) : false };
  },

  toJSON(message: CFileVerificationSignatureCheckResponse): unknown {
    const obj: any = {};
    message.denyOperation !== undefined && (obj.denyOperation = message.denyOperation);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFileVerificationSignatureCheckResponse>, I>>(
    base?: I,
  ): CFileVerificationSignatureCheckResponse {
    return CFileVerificationSignatureCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFileVerificationSignatureCheckResponse>, I>>(
    object: I,
  ): CFileVerificationSignatureCheckResponse {
    const message = createBaseCFileVerificationSignatureCheckResponse();
    message.denyOperation = object.denyOperation ?? false;
    return message;
  },
};

function createBaseCFileVerificationSteamServiceCheckRequest(): CFileVerificationSteamServiceCheckRequest {
  return { serviceStatus: 0, clientPackageVersion: 0, launcherType: 0, osType: 0, serviceRepair: 0 };
}

export const CFileVerificationSteamServiceCheckRequest = {
  encode(message: CFileVerificationSteamServiceCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceStatus !== 0) {
      writer.uint32(16).uint32(message.serviceStatus);
    }
    if (message.clientPackageVersion !== 0) {
      writer.uint32(24).uint32(message.clientPackageVersion);
    }
    if (message.launcherType !== 0) {
      writer.uint32(32).uint32(message.launcherType);
    }
    if (message.osType !== 0) {
      writer.uint32(40).uint32(message.osType);
    }
    if (message.serviceRepair !== 0) {
      writer.uint32(48).uint32(message.serviceRepair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFileVerificationSteamServiceCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFileVerificationSteamServiceCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.serviceStatus = reader.uint32();
          break;
        case 3:
          message.clientPackageVersion = reader.uint32();
          break;
        case 4:
          message.launcherType = reader.uint32();
          break;
        case 5:
          message.osType = reader.uint32();
          break;
        case 6:
          message.serviceRepair = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFileVerificationSteamServiceCheckRequest {
    return {
      serviceStatus: isSet(object.serviceStatus) ? Number(object.serviceStatus) : 0,
      clientPackageVersion: isSet(object.clientPackageVersion) ? Number(object.clientPackageVersion) : 0,
      launcherType: isSet(object.launcherType) ? Number(object.launcherType) : 0,
      osType: isSet(object.osType) ? Number(object.osType) : 0,
      serviceRepair: isSet(object.serviceRepair) ? Number(object.serviceRepair) : 0,
    };
  },

  toJSON(message: CFileVerificationSteamServiceCheckRequest): unknown {
    const obj: any = {};
    message.serviceStatus !== undefined && (obj.serviceStatus = Math.round(message.serviceStatus));
    message.clientPackageVersion !== undefined && (obj.clientPackageVersion = Math.round(message.clientPackageVersion));
    message.launcherType !== undefined && (obj.launcherType = Math.round(message.launcherType));
    message.osType !== undefined && (obj.osType = Math.round(message.osType));
    message.serviceRepair !== undefined && (obj.serviceRepair = Math.round(message.serviceRepair));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFileVerificationSteamServiceCheckRequest>, I>>(
    base?: I,
  ): CFileVerificationSteamServiceCheckRequest {
    return CFileVerificationSteamServiceCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFileVerificationSteamServiceCheckRequest>, I>>(
    object: I,
  ): CFileVerificationSteamServiceCheckRequest {
    const message = createBaseCFileVerificationSteamServiceCheckRequest();
    message.serviceStatus = object.serviceStatus ?? 0;
    message.clientPackageVersion = object.clientPackageVersion ?? 0;
    message.launcherType = object.launcherType ?? 0;
    message.osType = object.osType ?? 0;
    message.serviceRepair = object.serviceRepair ?? 0;
    return message;
  },
};

function createBaseCFileVerificationSteamServiceCheckResponse(): CFileVerificationSteamServiceCheckResponse {
  return { attemptRepair: false };
}

export const CFileVerificationSteamServiceCheckResponse = {
  encode(message: CFileVerificationSteamServiceCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attemptRepair === true) {
      writer.uint32(8).bool(message.attemptRepair);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFileVerificationSteamServiceCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFileVerificationSteamServiceCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attemptRepair = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFileVerificationSteamServiceCheckResponse {
    return { attemptRepair: isSet(object.attemptRepair) ? Boolean(object.attemptRepair) : false };
  },

  toJSON(message: CFileVerificationSteamServiceCheckResponse): unknown {
    const obj: any = {};
    message.attemptRepair !== undefined && (obj.attemptRepair = message.attemptRepair);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFileVerificationSteamServiceCheckResponse>, I>>(
    base?: I,
  ): CFileVerificationSteamServiceCheckResponse {
    return CFileVerificationSteamServiceCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFileVerificationSteamServiceCheckResponse>, I>>(
    object: I,
  ): CFileVerificationSteamServiceCheckResponse {
    const message = createBaseCFileVerificationSteamServiceCheckResponse();
    message.attemptRepair = object.attemptRepair ?? false;
    return message;
  },
};

export interface FileVerification {
  SignatureCheck(request: CFileVerificationSignatureCheckRequest): Promise<CFileVerificationSignatureCheckResponse>;
  SteamServiceCheck(
    request: CFileVerificationSteamServiceCheckRequest,
  ): Promise<CFileVerificationSteamServiceCheckResponse>;
}

export class FileVerificationClientImpl implements FileVerification {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "FileVerification";
    this.rpc = rpc;
    this.SignatureCheck = this.SignatureCheck.bind(this);
    this.SteamServiceCheck = this.SteamServiceCheck.bind(this);
  }
  SignatureCheck(request: CFileVerificationSignatureCheckRequest): Promise<CFileVerificationSignatureCheckResponse> {
    const data = CFileVerificationSignatureCheckRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SignatureCheck", data);
    return promise.then((data) => CFileVerificationSignatureCheckResponse.decode(new _m0.Reader(data)));
  }

  SteamServiceCheck(
    request: CFileVerificationSteamServiceCheckRequest,
  ): Promise<CFileVerificationSteamServiceCheckResponse> {
    const data = CFileVerificationSteamServiceCheckRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SteamServiceCheck", data);
    return promise.then((data) => CFileVerificationSteamServiceCheckResponse.decode(new _m0.Reader(data)));
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
