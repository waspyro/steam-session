/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CWorkshopGetEULAStatusRequest {
  appid: number;
}

export interface CWorkshopGetEULAStatusResponse {
  version: number;
  timestampAction: number;
  accepted: boolean;
  needsAction: boolean;
}

function createBaseCWorkshopGetEULAStatusRequest(): CWorkshopGetEULAStatusRequest {
  return { appid: 0 };
}

export const CWorkshopGetEULAStatusRequest = {
  encode(message: CWorkshopGetEULAStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetEULAStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetEULAStatusRequest();
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

  fromJSON(object: any): CWorkshopGetEULAStatusRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CWorkshopGetEULAStatusRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CWorkshopGetEULAStatusRequest>, I>>(base?: I): CWorkshopGetEULAStatusRequest {
    return CWorkshopGetEULAStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CWorkshopGetEULAStatusRequest>, I>>(
    object: I,
  ): CWorkshopGetEULAStatusRequest {
    const message = createBaseCWorkshopGetEULAStatusRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCWorkshopGetEULAStatusResponse(): CWorkshopGetEULAStatusResponse {
  return { version: 0, timestampAction: 0, accepted: false, needsAction: false };
}

export const CWorkshopGetEULAStatusResponse = {
  encode(message: CWorkshopGetEULAStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.timestampAction !== 0) {
      writer.uint32(16).uint32(message.timestampAction);
    }
    if (message.accepted === true) {
      writer.uint32(24).bool(message.accepted);
    }
    if (message.needsAction === true) {
      writer.uint32(32).bool(message.needsAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CWorkshopGetEULAStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCWorkshopGetEULAStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.timestampAction = reader.uint32();
          break;
        case 3:
          message.accepted = reader.bool();
          break;
        case 4:
          message.needsAction = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CWorkshopGetEULAStatusResponse {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      timestampAction: isSet(object.timestampAction) ? Number(object.timestampAction) : 0,
      accepted: isSet(object.accepted) ? Boolean(object.accepted) : false,
      needsAction: isSet(object.needsAction) ? Boolean(object.needsAction) : false,
    };
  },

  toJSON(message: CWorkshopGetEULAStatusResponse): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.timestampAction !== undefined && (obj.timestampAction = Math.round(message.timestampAction));
    message.accepted !== undefined && (obj.accepted = message.accepted);
    message.needsAction !== undefined && (obj.needsAction = message.needsAction);
    return obj;
  },

  create<I extends Exact<DeepPartial<CWorkshopGetEULAStatusResponse>, I>>(base?: I): CWorkshopGetEULAStatusResponse {
    return CWorkshopGetEULAStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CWorkshopGetEULAStatusResponse>, I>>(
    object: I,
  ): CWorkshopGetEULAStatusResponse {
    const message = createBaseCWorkshopGetEULAStatusResponse();
    message.version = object.version ?? 0;
    message.timestampAction = object.timestampAction ?? 0;
    message.accepted = object.accepted ?? false;
    message.needsAction = object.needsAction ?? false;
    return message;
  },
};

export interface Workshop {
  GetEULAStatus(request: CWorkshopGetEULAStatusRequest): Promise<CWorkshopGetEULAStatusResponse>;
}

export class WorkshopClientImpl implements Workshop {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Workshop";
    this.rpc = rpc;
    this.GetEULAStatus = this.GetEULAStatus.bind(this);
  }
  GetEULAStatus(request: CWorkshopGetEULAStatusRequest): Promise<CWorkshopGetEULAStatusResponse> {
    const data = CWorkshopGetEULAStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetEULAStatus", data);
    return promise.then((data) => CWorkshopGetEULAStatusResponse.decode(new _m0.Reader(data)));
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
