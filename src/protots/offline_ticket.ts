/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface OfflineTicket {
  encryptedTicket: Buffer;
  signature: Buffer;
  kdf1: number;
  salt1: Buffer;
  kdf2: number;
  salt2: Buffer;
}

function createBaseOfflineTicket(): OfflineTicket {
  return {
    encryptedTicket: Buffer.alloc(0),
    signature: Buffer.alloc(0),
    kdf1: 0,
    salt1: Buffer.alloc(0),
    kdf2: 0,
    salt2: Buffer.alloc(0),
  };
}

export const OfflineTicket = {
  encode(message: OfflineTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encryptedTicket.length !== 0) {
      writer.uint32(10).bytes(message.encryptedTicket);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.kdf1 !== 0) {
      writer.uint32(24).int32(message.kdf1);
    }
    if (message.salt1.length !== 0) {
      writer.uint32(34).bytes(message.salt1);
    }
    if (message.kdf2 !== 0) {
      writer.uint32(40).int32(message.kdf2);
    }
    if (message.salt2.length !== 0) {
      writer.uint32(50).bytes(message.salt2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OfflineTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOfflineTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptedTicket = reader.bytes() as Buffer;
          break;
        case 2:
          message.signature = reader.bytes() as Buffer;
          break;
        case 3:
          message.kdf1 = reader.int32();
          break;
        case 4:
          message.salt1 = reader.bytes() as Buffer;
          break;
        case 5:
          message.kdf2 = reader.int32();
          break;
        case 6:
          message.salt2 = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OfflineTicket {
    return {
      encryptedTicket: isSet(object.encryptedTicket)
        ? Buffer.from(bytesFromBase64(object.encryptedTicket))
        : Buffer.alloc(0),
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
      kdf1: isSet(object.kdf1) ? Number(object.kdf1) : 0,
      salt1: isSet(object.salt1) ? Buffer.from(bytesFromBase64(object.salt1)) : Buffer.alloc(0),
      kdf2: isSet(object.kdf2) ? Number(object.kdf2) : 0,
      salt2: isSet(object.salt2) ? Buffer.from(bytesFromBase64(object.salt2)) : Buffer.alloc(0),
    };
  },

  toJSON(message: OfflineTicket): unknown {
    const obj: any = {};
    message.encryptedTicket !== undefined &&
      (obj.encryptedTicket = base64FromBytes(
        message.encryptedTicket !== undefined ? message.encryptedTicket : Buffer.alloc(0),
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    message.kdf1 !== undefined && (obj.kdf1 = Math.round(message.kdf1));
    message.salt1 !== undefined &&
      (obj.salt1 = base64FromBytes(message.salt1 !== undefined ? message.salt1 : Buffer.alloc(0)));
    message.kdf2 !== undefined && (obj.kdf2 = Math.round(message.kdf2));
    message.salt2 !== undefined &&
      (obj.salt2 = base64FromBytes(message.salt2 !== undefined ? message.salt2 : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<OfflineTicket>, I>>(base?: I): OfflineTicket {
    return OfflineTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OfflineTicket>, I>>(object: I): OfflineTicket {
    const message = createBaseOfflineTicket();
    message.encryptedTicket = object.encryptedTicket ?? Buffer.alloc(0);
    message.signature = object.signature ?? Buffer.alloc(0);
    message.kdf1 = object.kdf1 ?? 0;
    message.salt1 = object.salt1 ?? Buffer.alloc(0);
    message.kdf2 = object.kdf2 ?? 0;
    message.salt2 = object.salt2 ?? Buffer.alloc(0);
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
