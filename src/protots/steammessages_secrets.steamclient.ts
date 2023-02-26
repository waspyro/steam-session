/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EKeyEscrowUsage {
  k_EKeyEscrowUsageStreamingDevice = 0,
  UNRECOGNIZED = -1,
}

export function eKeyEscrowUsageFromJSON(object: any): EKeyEscrowUsage {
  switch (object) {
    case 0:
    case "k_EKeyEscrowUsageStreamingDevice":
      return EKeyEscrowUsage.k_EKeyEscrowUsageStreamingDevice;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EKeyEscrowUsage.UNRECOGNIZED;
  }
}

export function eKeyEscrowUsageToJSON(object: EKeyEscrowUsage): string {
  switch (object) {
    case EKeyEscrowUsage.k_EKeyEscrowUsageStreamingDevice:
      return "k_EKeyEscrowUsageStreamingDevice";
    case EKeyEscrowUsage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CKeyEscrowRequest {
  rsaOaepShaTicket: Buffer;
  password: Buffer;
  usage: EKeyEscrowUsage;
  deviceName: string;
}

export interface CKeyEscrowTicket {
  password: Buffer;
  identifier: string;
  payload: Buffer;
  timestamp: number;
  usage: EKeyEscrowUsage;
  deviceName: string;
  deviceModel: string;
  deviceSerial: string;
  deviceProvisioningId: number;
}

export interface CKeyEscrowResponse {
  ticket: CKeyEscrowTicket | undefined;
}

function createBaseCKeyEscrowRequest(): CKeyEscrowRequest {
  return { rsaOaepShaTicket: Buffer.alloc(0), password: Buffer.alloc(0), usage: 0, deviceName: "" };
}

export const CKeyEscrowRequest = {
  encode(message: CKeyEscrowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rsaOaepShaTicket.length !== 0) {
      writer.uint32(10).bytes(message.rsaOaepShaTicket);
    }
    if (message.password.length !== 0) {
      writer.uint32(18).bytes(message.password);
    }
    if (message.usage !== 0) {
      writer.uint32(24).int32(message.usage);
    }
    if (message.deviceName !== "") {
      writer.uint32(34).string(message.deviceName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CKeyEscrowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCKeyEscrowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rsaOaepShaTicket = reader.bytes() as Buffer;
          break;
        case 2:
          message.password = reader.bytes() as Buffer;
          break;
        case 3:
          message.usage = reader.int32() as any;
          break;
        case 4:
          message.deviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CKeyEscrowRequest {
    return {
      rsaOaepShaTicket: isSet(object.rsaOaepShaTicket)
        ? Buffer.from(bytesFromBase64(object.rsaOaepShaTicket))
        : Buffer.alloc(0),
      password: isSet(object.password) ? Buffer.from(bytesFromBase64(object.password)) : Buffer.alloc(0),
      usage: isSet(object.usage) ? eKeyEscrowUsageFromJSON(object.usage) : 0,
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
    };
  },

  toJSON(message: CKeyEscrowRequest): unknown {
    const obj: any = {};
    message.rsaOaepShaTicket !== undefined &&
      (obj.rsaOaepShaTicket = base64FromBytes(
        message.rsaOaepShaTicket !== undefined ? message.rsaOaepShaTicket : Buffer.alloc(0),
      ));
    message.password !== undefined &&
      (obj.password = base64FromBytes(message.password !== undefined ? message.password : Buffer.alloc(0)));
    message.usage !== undefined && (obj.usage = eKeyEscrowUsageToJSON(message.usage));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CKeyEscrowRequest>, I>>(base?: I): CKeyEscrowRequest {
    return CKeyEscrowRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CKeyEscrowRequest>, I>>(object: I): CKeyEscrowRequest {
    const message = createBaseCKeyEscrowRequest();
    message.rsaOaepShaTicket = object.rsaOaepShaTicket ?? Buffer.alloc(0);
    message.password = object.password ?? Buffer.alloc(0);
    message.usage = object.usage ?? 0;
    message.deviceName = object.deviceName ?? "";
    return message;
  },
};

function createBaseCKeyEscrowTicket(): CKeyEscrowTicket {
  return {
    password: Buffer.alloc(0),
    identifier: "0",
    payload: Buffer.alloc(0),
    timestamp: 0,
    usage: 0,
    deviceName: "",
    deviceModel: "",
    deviceSerial: "",
    deviceProvisioningId: 0,
  };
}

export const CKeyEscrowTicket = {
  encode(message: CKeyEscrowTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password.length !== 0) {
      writer.uint32(10).bytes(message.password);
    }
    if (message.identifier !== "0") {
      writer.uint32(16).uint64(message.identifier);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    if (message.usage !== 0) {
      writer.uint32(40).int32(message.usage);
    }
    if (message.deviceName !== "") {
      writer.uint32(50).string(message.deviceName);
    }
    if (message.deviceModel !== "") {
      writer.uint32(58).string(message.deviceModel);
    }
    if (message.deviceSerial !== "") {
      writer.uint32(66).string(message.deviceSerial);
    }
    if (message.deviceProvisioningId !== 0) {
      writer.uint32(72).uint32(message.deviceProvisioningId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CKeyEscrowTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCKeyEscrowTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.bytes() as Buffer;
          break;
        case 2:
          message.identifier = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.payload = reader.bytes() as Buffer;
          break;
        case 4:
          message.timestamp = reader.uint32();
          break;
        case 5:
          message.usage = reader.int32() as any;
          break;
        case 6:
          message.deviceName = reader.string();
          break;
        case 7:
          message.deviceModel = reader.string();
          break;
        case 8:
          message.deviceSerial = reader.string();
          break;
        case 9:
          message.deviceProvisioningId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CKeyEscrowTicket {
    return {
      password: isSet(object.password) ? Buffer.from(bytesFromBase64(object.password)) : Buffer.alloc(0),
      identifier: isSet(object.identifier) ? String(object.identifier) : "0",
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      usage: isSet(object.usage) ? eKeyEscrowUsageFromJSON(object.usage) : 0,
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      deviceModel: isSet(object.deviceModel) ? String(object.deviceModel) : "",
      deviceSerial: isSet(object.deviceSerial) ? String(object.deviceSerial) : "",
      deviceProvisioningId: isSet(object.deviceProvisioningId) ? Number(object.deviceProvisioningId) : 0,
    };
  },

  toJSON(message: CKeyEscrowTicket): unknown {
    const obj: any = {};
    message.password !== undefined &&
      (obj.password = base64FromBytes(message.password !== undefined ? message.password : Buffer.alloc(0)));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.usage !== undefined && (obj.usage = eKeyEscrowUsageToJSON(message.usage));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.deviceModel !== undefined && (obj.deviceModel = message.deviceModel);
    message.deviceSerial !== undefined && (obj.deviceSerial = message.deviceSerial);
    message.deviceProvisioningId !== undefined && (obj.deviceProvisioningId = Math.round(message.deviceProvisioningId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CKeyEscrowTicket>, I>>(base?: I): CKeyEscrowTicket {
    return CKeyEscrowTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CKeyEscrowTicket>, I>>(object: I): CKeyEscrowTicket {
    const message = createBaseCKeyEscrowTicket();
    message.password = object.password ?? Buffer.alloc(0);
    message.identifier = object.identifier ?? "0";
    message.payload = object.payload ?? Buffer.alloc(0);
    message.timestamp = object.timestamp ?? 0;
    message.usage = object.usage ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.deviceModel = object.deviceModel ?? "";
    message.deviceSerial = object.deviceSerial ?? "";
    message.deviceProvisioningId = object.deviceProvisioningId ?? 0;
    return message;
  },
};

function createBaseCKeyEscrowResponse(): CKeyEscrowResponse {
  return { ticket: undefined };
}

export const CKeyEscrowResponse = {
  encode(message: CKeyEscrowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      CKeyEscrowTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CKeyEscrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCKeyEscrowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = CKeyEscrowTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CKeyEscrowResponse {
    return { ticket: isSet(object.ticket) ? CKeyEscrowTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: CKeyEscrowResponse): unknown {
    const obj: any = {};
    message.ticket !== undefined && (obj.ticket = message.ticket ? CKeyEscrowTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CKeyEscrowResponse>, I>>(base?: I): CKeyEscrowResponse {
    return CKeyEscrowResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CKeyEscrowResponse>, I>>(object: I): CKeyEscrowResponse {
    const message = createBaseCKeyEscrowResponse();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? CKeyEscrowTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

export interface Secrets {
  KeyEscrow(request: CKeyEscrowRequest): Promise<CKeyEscrowResponse>;
}

export class SecretsClientImpl implements Secrets {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Secrets";
    this.rpc = rpc;
    this.KeyEscrow = this.KeyEscrow.bind(this);
  }
  KeyEscrow(request: CKeyEscrowRequest): Promise<CKeyEscrowResponse> {
    const data = CKeyEscrowRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeyEscrow", data);
    return promise.then((data) => CKeyEscrowResponse.decode(new _m0.Reader(data)));
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
