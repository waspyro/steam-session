/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CGameNetworkingAllocateFakeIPRequest {
  appId: number;
  numFakePorts: number;
}

export interface CGameNetworkingAllocateFakeIPResponse {
  fakeIp: number;
  fakePorts: number[];
}

export interface CGameNetworkingReleaseFakeIPNotification {
  appId: number;
  fakeIp: number;
  fakePorts: number[];
}

function createBaseCGameNetworkingAllocateFakeIPRequest(): CGameNetworkingAllocateFakeIPRequest {
  return { appId: 0, numFakePorts: 0 };
}

export const CGameNetworkingAllocateFakeIPRequest = {
  encode(message: CGameNetworkingAllocateFakeIPRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.numFakePorts !== 0) {
      writer.uint32(16).uint32(message.numFakePorts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingAllocateFakeIPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingAllocateFakeIPRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.numFakePorts = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNetworkingAllocateFakeIPRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      numFakePorts: isSet(object.numFakePorts) ? Number(object.numFakePorts) : 0,
    };
  },

  toJSON(message: CGameNetworkingAllocateFakeIPRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.numFakePorts !== undefined && (obj.numFakePorts = Math.round(message.numFakePorts));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingAllocateFakeIPRequest>, I>>(
    base?: I,
  ): CGameNetworkingAllocateFakeIPRequest {
    return CGameNetworkingAllocateFakeIPRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingAllocateFakeIPRequest>, I>>(
    object: I,
  ): CGameNetworkingAllocateFakeIPRequest {
    const message = createBaseCGameNetworkingAllocateFakeIPRequest();
    message.appId = object.appId ?? 0;
    message.numFakePorts = object.numFakePorts ?? 0;
    return message;
  },
};

function createBaseCGameNetworkingAllocateFakeIPResponse(): CGameNetworkingAllocateFakeIPResponse {
  return { fakeIp: 0, fakePorts: [] };
}

export const CGameNetworkingAllocateFakeIPResponse = {
  encode(message: CGameNetworkingAllocateFakeIPResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fakeIp !== 0) {
      writer.uint32(13).fixed32(message.fakeIp);
    }
    writer.uint32(18).fork();
    for (const v of message.fakePorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingAllocateFakeIPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingAllocateFakeIPResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fakeIp = reader.fixed32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fakePorts.push(reader.uint32());
            }
          } else {
            message.fakePorts.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNetworkingAllocateFakeIPResponse {
    return {
      fakeIp: isSet(object.fakeIp) ? Number(object.fakeIp) : 0,
      fakePorts: Array.isArray(object?.fakePorts) ? object.fakePorts.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CGameNetworkingAllocateFakeIPResponse): unknown {
    const obj: any = {};
    message.fakeIp !== undefined && (obj.fakeIp = Math.round(message.fakeIp));
    if (message.fakePorts) {
      obj.fakePorts = message.fakePorts.map((e) => Math.round(e));
    } else {
      obj.fakePorts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingAllocateFakeIPResponse>, I>>(
    base?: I,
  ): CGameNetworkingAllocateFakeIPResponse {
    return CGameNetworkingAllocateFakeIPResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingAllocateFakeIPResponse>, I>>(
    object: I,
  ): CGameNetworkingAllocateFakeIPResponse {
    const message = createBaseCGameNetworkingAllocateFakeIPResponse();
    message.fakeIp = object.fakeIp ?? 0;
    message.fakePorts = object.fakePorts?.map((e) => e) || [];
    return message;
  },
};

function createBaseCGameNetworkingReleaseFakeIPNotification(): CGameNetworkingReleaseFakeIPNotification {
  return { appId: 0, fakeIp: 0, fakePorts: [] };
}

export const CGameNetworkingReleaseFakeIPNotification = {
  encode(message: CGameNetworkingReleaseFakeIPNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.fakeIp !== 0) {
      writer.uint32(21).fixed32(message.fakeIp);
    }
    writer.uint32(26).fork();
    for (const v of message.fakePorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGameNetworkingReleaseFakeIPNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGameNetworkingReleaseFakeIPNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.fakeIp = reader.fixed32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fakePorts.push(reader.uint32());
            }
          } else {
            message.fakePorts.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGameNetworkingReleaseFakeIPNotification {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      fakeIp: isSet(object.fakeIp) ? Number(object.fakeIp) : 0,
      fakePorts: Array.isArray(object?.fakePorts) ? object.fakePorts.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CGameNetworkingReleaseFakeIPNotification): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.fakeIp !== undefined && (obj.fakeIp = Math.round(message.fakeIp));
    if (message.fakePorts) {
      obj.fakePorts = message.fakePorts.map((e) => Math.round(e));
    } else {
      obj.fakePorts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CGameNetworkingReleaseFakeIPNotification>, I>>(
    base?: I,
  ): CGameNetworkingReleaseFakeIPNotification {
    return CGameNetworkingReleaseFakeIPNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGameNetworkingReleaseFakeIPNotification>, I>>(
    object: I,
  ): CGameNetworkingReleaseFakeIPNotification {
    const message = createBaseCGameNetworkingReleaseFakeIPNotification();
    message.appId = object.appId ?? 0;
    message.fakeIp = object.fakeIp ?? 0;
    message.fakePorts = object.fakePorts?.map((e) => e) || [];
    return message;
  },
};

export interface GameNetworking {
  AllocateFakeIP(request: CGameNetworkingAllocateFakeIPRequest): Promise<CGameNetworkingAllocateFakeIPResponse>;
  NotifyReleaseFakeIP(request: CGameNetworkingReleaseFakeIPNotification): Promise<NoResponse>;
}

export class GameNetworkingClientImpl implements GameNetworking {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "GameNetworking";
    this.rpc = rpc;
    this.AllocateFakeIP = this.AllocateFakeIP.bind(this);
    this.NotifyReleaseFakeIP = this.NotifyReleaseFakeIP.bind(this);
  }
  AllocateFakeIP(request: CGameNetworkingAllocateFakeIPRequest): Promise<CGameNetworkingAllocateFakeIPResponse> {
    const data = CGameNetworkingAllocateFakeIPRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocateFakeIP", data);
    return promise.then((data) => CGameNetworkingAllocateFakeIPResponse.decode(new _m0.Reader(data)));
  }

  NotifyReleaseFakeIP(request: CGameNetworkingReleaseFakeIPNotification): Promise<NoResponse> {
    const data = CGameNetworkingReleaseFakeIPNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyReleaseFakeIP", data);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
