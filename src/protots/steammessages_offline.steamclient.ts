/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { OfflineTicket } from "./offline_ticket";

export const protobufPackage = "";

export interface COfflineGetOfflineLogonTicketRequest {
  priority: number;
  performEncryption: boolean;
}

export interface COfflineGetOfflineLogonTicketResponse {
  serializedTicket: Buffer;
  signature: Buffer;
  encryptedTicket: OfflineTicket | undefined;
}

export interface COfflineGetUnsignedOfflineLogonTicketRequest {
}

export interface COfflineOfflineLogonTicket {
  accountid: number;
  rtime32CreationTime: number;
}

export interface COfflineGetUnsignedOfflineLogonTicketResponse {
  ticket: COfflineOfflineLogonTicket | undefined;
}

function createBaseCOfflineGetOfflineLogonTicketRequest(): COfflineGetOfflineLogonTicketRequest {
  return { priority: 0, performEncryption: false };
}

export const COfflineGetOfflineLogonTicketRequest = {
  encode(message: COfflineGetOfflineLogonTicketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priority !== 0) {
      writer.uint32(8).uint32(message.priority);
    }
    if (message.performEncryption === true) {
      writer.uint32(16).bool(message.performEncryption);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COfflineGetOfflineLogonTicketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOfflineGetOfflineLogonTicketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priority = reader.uint32();
          break;
        case 2:
          message.performEncryption = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): COfflineGetOfflineLogonTicketRequest {
    return {
      priority: isSet(object.priority) ? Number(object.priority) : 0,
      performEncryption: isSet(object.performEncryption) ? Boolean(object.performEncryption) : false,
    };
  },

  toJSON(message: COfflineGetOfflineLogonTicketRequest): unknown {
    const obj: any = {};
    message.priority !== undefined && (obj.priority = Math.round(message.priority));
    message.performEncryption !== undefined && (obj.performEncryption = message.performEncryption);
    return obj;
  },

  create<I extends Exact<DeepPartial<COfflineGetOfflineLogonTicketRequest>, I>>(
    base?: I,
  ): COfflineGetOfflineLogonTicketRequest {
    return COfflineGetOfflineLogonTicketRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COfflineGetOfflineLogonTicketRequest>, I>>(
    object: I,
  ): COfflineGetOfflineLogonTicketRequest {
    const message = createBaseCOfflineGetOfflineLogonTicketRequest();
    message.priority = object.priority ?? 0;
    message.performEncryption = object.performEncryption ?? false;
    return message;
  },
};

function createBaseCOfflineGetOfflineLogonTicketResponse(): COfflineGetOfflineLogonTicketResponse {
  return { serializedTicket: Buffer.alloc(0), signature: Buffer.alloc(0), encryptedTicket: undefined };
}

export const COfflineGetOfflineLogonTicketResponse = {
  encode(message: COfflineGetOfflineLogonTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedTicket.length !== 0) {
      writer.uint32(10).bytes(message.serializedTicket);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.encryptedTicket !== undefined) {
      OfflineTicket.encode(message.encryptedTicket, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COfflineGetOfflineLogonTicketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOfflineGetOfflineLogonTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializedTicket = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        case 3:
          message.encryptedTicket = OfflineTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): COfflineGetOfflineLogonTicketResponse {
    return {
      serializedTicket: isSet(object.serializedTicket)
        ? Buffer.from(bytesFromBase64(object.serializedTicket))
        : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      encryptedTicket: isSet(object.encryptedTicket) ? OfflineTicket.fromJSON(object.encryptedTicket) : undefined,
    };
  },

  toJSON(message: COfflineGetOfflineLogonTicketResponse): unknown {
    const obj: any = {};
    message.serializedTicket !== undefined &&
      (obj.serializedTicket = base64FromBytes(
        message.serializedTicket !== undefined ? message.serializedTicket : Buffer.alloc(0),
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.encryptedTicket !== undefined &&
      (obj.encryptedTicket = message.encryptedTicket ? OfflineTicket.toJSON(message.encryptedTicket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<COfflineGetOfflineLogonTicketResponse>, I>>(
    base?: I,
  ): COfflineGetOfflineLogonTicketResponse {
    return COfflineGetOfflineLogonTicketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COfflineGetOfflineLogonTicketResponse>, I>>(
    object: I,
  ): COfflineGetOfflineLogonTicketResponse {
    const message = createBaseCOfflineGetOfflineLogonTicketResponse();
    message.serializedTicket = object.serializedTicket ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.encryptedTicket = (object.encryptedTicket !== undefined && object.encryptedTicket !== null)
      ? OfflineTicket.fromPartial(object.encryptedTicket)
      : undefined;
    return message;
  },
};

function createBaseCOfflineGetUnsignedOfflineLogonTicketRequest(): COfflineGetUnsignedOfflineLogonTicketRequest {
  return {};
}

export const COfflineGetUnsignedOfflineLogonTicketRequest = {
  encode(_: COfflineGetUnsignedOfflineLogonTicketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COfflineGetUnsignedOfflineLogonTicketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOfflineGetUnsignedOfflineLogonTicketRequest();
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

  fromJSON(_: any): COfflineGetUnsignedOfflineLogonTicketRequest {
    return {};
  },

  toJSON(_: COfflineGetUnsignedOfflineLogonTicketRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<COfflineGetUnsignedOfflineLogonTicketRequest>, I>>(
    base?: I,
  ): COfflineGetUnsignedOfflineLogonTicketRequest {
    return COfflineGetUnsignedOfflineLogonTicketRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COfflineGetUnsignedOfflineLogonTicketRequest>, I>>(
    _: I,
  ): COfflineGetUnsignedOfflineLogonTicketRequest {
    const message = createBaseCOfflineGetUnsignedOfflineLogonTicketRequest();
    return message;
  },
};

function createBaseCOfflineOfflineLogonTicket(): COfflineOfflineLogonTicket {
  return { accountid: 0, rtime32CreationTime: 0 };
}

export const COfflineOfflineLogonTicket = {
  encode(message: COfflineOfflineLogonTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.rtime32CreationTime !== 0) {
      writer.uint32(21).fixed32(message.rtime32CreationTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COfflineOfflineLogonTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOfflineOfflineLogonTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.rtime32CreationTime = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): COfflineOfflineLogonTicket {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      rtime32CreationTime: isSet(object.rtime32CreationTime) ? Number(object.rtime32CreationTime) : 0,
    };
  },

  toJSON(message: COfflineOfflineLogonTicket): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.rtime32CreationTime !== undefined && (obj.rtime32CreationTime = Math.round(message.rtime32CreationTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<COfflineOfflineLogonTicket>, I>>(base?: I): COfflineOfflineLogonTicket {
    return COfflineOfflineLogonTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COfflineOfflineLogonTicket>, I>>(object: I): COfflineOfflineLogonTicket {
    const message = createBaseCOfflineOfflineLogonTicket();
    message.accountid = object.accountid ?? 0;
    message.rtime32CreationTime = object.rtime32CreationTime ?? 0;
    return message;
  },
};

function createBaseCOfflineGetUnsignedOfflineLogonTicketResponse(): COfflineGetUnsignedOfflineLogonTicketResponse {
  return { ticket: undefined };
}

export const COfflineGetUnsignedOfflineLogonTicketResponse = {
  encode(message: COfflineGetUnsignedOfflineLogonTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticket !== undefined) {
      COfflineOfflineLogonTicket.encode(message.ticket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COfflineGetUnsignedOfflineLogonTicketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOfflineGetUnsignedOfflineLogonTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticket = COfflineOfflineLogonTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): COfflineGetUnsignedOfflineLogonTicketResponse {
    return { ticket: isSet(object.ticket) ? COfflineOfflineLogonTicket.fromJSON(object.ticket) : undefined };
  },

  toJSON(message: COfflineGetUnsignedOfflineLogonTicketResponse): unknown {
    const obj: any = {};
    message.ticket !== undefined &&
      (obj.ticket = message.ticket ? COfflineOfflineLogonTicket.toJSON(message.ticket) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<COfflineGetUnsignedOfflineLogonTicketResponse>, I>>(
    base?: I,
  ): COfflineGetUnsignedOfflineLogonTicketResponse {
    return COfflineGetUnsignedOfflineLogonTicketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COfflineGetUnsignedOfflineLogonTicketResponse>, I>>(
    object: I,
  ): COfflineGetUnsignedOfflineLogonTicketResponse {
    const message = createBaseCOfflineGetUnsignedOfflineLogonTicketResponse();
    message.ticket = (object.ticket !== undefined && object.ticket !== null)
      ? COfflineOfflineLogonTicket.fromPartial(object.ticket)
      : undefined;
    return message;
  },
};

export interface Offline {
  GetOfflineLogonTicket(request: COfflineGetOfflineLogonTicketRequest): Promise<COfflineGetOfflineLogonTicketResponse>;
  GetUnsignedOfflineLogonTicket(
    request: COfflineGetUnsignedOfflineLogonTicketRequest,
  ): Promise<COfflineGetUnsignedOfflineLogonTicketResponse>;
}

export class OfflineClientImpl implements Offline {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Offline";
    this.rpc = rpc;
    this.GetOfflineLogonTicket = this.GetOfflineLogonTicket.bind(this);
    this.GetUnsignedOfflineLogonTicket = this.GetUnsignedOfflineLogonTicket.bind(this);
  }
  GetOfflineLogonTicket(request: COfflineGetOfflineLogonTicketRequest): Promise<COfflineGetOfflineLogonTicketResponse> {
    const data = COfflineGetOfflineLogonTicketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOfflineLogonTicket", data);
    return promise.then((data) => COfflineGetOfflineLogonTicketResponse.decode(new _m0.Reader(data)));
  }

  GetUnsignedOfflineLogonTicket(
    request: COfflineGetUnsignedOfflineLogonTicketRequest,
  ): Promise<COfflineGetUnsignedOfflineLogonTicketResponse> {
    const data = COfflineGetUnsignedOfflineLogonTicketRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUnsignedOfflineLogonTicket", data);
    return promise.then((data) => COfflineGetUnsignedOfflineLogonTicketResponse.decode(new _m0.Reader(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
