/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface EncryptedAppTicket {
  ticketVersionNo: number;
  crcEncryptedticket: number;
  cbEncrypteduserdata: number;
  cbEncryptedAppownershipticket: number;
  encryptedTicket: Buffer;
}

function createBaseEncryptedAppTicket(): EncryptedAppTicket {
  return {
    ticketVersionNo: 0,
    crcEncryptedticket: 0,
    cbEncrypteduserdata: 0,
    cbEncryptedAppownershipticket: 0,
    encryptedTicket: Buffer.alloc(0),
  };
}

export const EncryptedAppTicket = {
  encode(message: EncryptedAppTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ticketVersionNo !== 0) {
      writer.uint32(8).uint32(message.ticketVersionNo);
    }
    if (message.crcEncryptedticket !== 0) {
      writer.uint32(16).uint32(message.crcEncryptedticket);
    }
    if (message.cbEncrypteduserdata !== 0) {
      writer.uint32(24).uint32(message.cbEncrypteduserdata);
    }
    if (message.cbEncryptedAppownershipticket !== 0) {
      writer.uint32(32).uint32(message.cbEncryptedAppownershipticket);
    }
    if (message.encryptedTicket.length !== 0) {
      writer.uint32(42).bytes(message.encryptedTicket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EncryptedAppTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedAppTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketVersionNo = reader.uint32();
          break;
        case 2:
          message.crcEncryptedticket = reader.uint32();
          break;
        case 3:
          message.cbEncrypteduserdata = reader.uint32();
          break;
        case 4:
          message.cbEncryptedAppownershipticket = reader.uint32();
          break;
        case 5:
          message.encryptedTicket = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedAppTicket {
    return {
      ticketVersionNo: isSet(object.ticketVersionNo) ? Number(object.ticketVersionNo) : 0,
      crcEncryptedticket: isSet(object.crcEncryptedticket) ? Number(object.crcEncryptedticket) : 0,
      cbEncrypteduserdata: isSet(object.cbEncrypteduserdata) ? Number(object.cbEncrypteduserdata) : 0,
      cbEncryptedAppownershipticket: isSet(object.cbEncryptedAppownershipticket)
        ? Number(object.cbEncryptedAppownershipticket)
        : 0,
      encryptedTicket: isSet(object.encryptedTicket)
        ? Buffer.from(bytesFromBase64(object.encryptedTicket))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: EncryptedAppTicket): unknown {
    const obj: any = {};
    message.ticketVersionNo !== undefined && (obj.ticketVersionNo = Math.round(message.ticketVersionNo));
    message.crcEncryptedticket !== undefined && (obj.crcEncryptedticket = Math.round(message.crcEncryptedticket));
    message.cbEncrypteduserdata !== undefined && (obj.cbEncrypteduserdata = Math.round(message.cbEncrypteduserdata));
    message.cbEncryptedAppownershipticket !== undefined &&
      (obj.cbEncryptedAppownershipticket = Math.round(message.cbEncryptedAppownershipticket));
    message.encryptedTicket !== undefined &&
      (obj.encryptedTicket = base64FromBytes(
        message.encryptedTicket !== undefined ? message.encryptedTicket : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<EncryptedAppTicket>, I>>(base?: I): EncryptedAppTicket {
    return EncryptedAppTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EncryptedAppTicket>, I>>(object: I): EncryptedAppTicket {
    const message = createBaseEncryptedAppTicket();
    message.ticketVersionNo = object.ticketVersionNo ?? 0;
    message.crcEncryptedticket = object.crcEncryptedticket ?? 0;
    message.cbEncrypteduserdata = object.cbEncrypteduserdata ?? 0;
    message.cbEncryptedAppownershipticket = object.cbEncryptedAppownershipticket ?? 0;
    message.encryptedTicket = object.encryptedTicket ?? Buffer.alloc(0);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
