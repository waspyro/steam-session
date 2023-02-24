/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CTimedTrialGetTimeRemainingRequest {
  appid: number;
}

export interface CTimedTrialGetTimeRemainingResponse {
  secondsPlayed: number;
  secondsAllowed: number;
  packageid: number;
  mastersubAppid: number;
}

export interface CTimedTrialRecordPlaytimeRequest {
  appid: number;
  secondsPlayed: number;
}

export interface CTimedTrialRecordPlaytimeResponse {
  secondsPlayed: number;
  secondsAllowed: number;
}

export interface CTimedTrialResetPlaytimeRequest {
  appid: number;
}

export interface CTimedTrialResetPlaytimeResponse {
  secondsPlayed: number;
  secondsAllowed: number;
}

function createBaseCTimedTrialGetTimeRemainingRequest(): CTimedTrialGetTimeRemainingRequest {
  return { appid: 0 };
}

export const CTimedTrialGetTimeRemainingRequest = {
  encode(message: CTimedTrialGetTimeRemainingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialGetTimeRemainingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialGetTimeRemainingRequest();
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

  fromJSON(object: any): CTimedTrialGetTimeRemainingRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CTimedTrialGetTimeRemainingRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialGetTimeRemainingRequest>, I>>(
    base?: I,
  ): CTimedTrialGetTimeRemainingRequest {
    return CTimedTrialGetTimeRemainingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialGetTimeRemainingRequest>, I>>(
    object: I,
  ): CTimedTrialGetTimeRemainingRequest {
    const message = createBaseCTimedTrialGetTimeRemainingRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCTimedTrialGetTimeRemainingResponse(): CTimedTrialGetTimeRemainingResponse {
  return { secondsPlayed: 0, secondsAllowed: 0, packageid: 0, mastersubAppid: 0 };
}

export const CTimedTrialGetTimeRemainingResponse = {
  encode(message: CTimedTrialGetTimeRemainingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondsPlayed !== 0) {
      writer.uint32(8).uint32(message.secondsPlayed);
    }
    if (message.secondsAllowed !== 0) {
      writer.uint32(16).uint32(message.secondsAllowed);
    }
    if (message.packageid !== 0) {
      writer.uint32(24).uint32(message.packageid);
    }
    if (message.mastersubAppid !== 0) {
      writer.uint32(32).uint32(message.mastersubAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialGetTimeRemainingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialGetTimeRemainingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsPlayed = reader.uint32();
          break;
        case 2:
          message.secondsAllowed = reader.uint32();
          break;
        case 3:
          message.packageid = reader.uint32();
          break;
        case 4:
          message.mastersubAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTimedTrialGetTimeRemainingResponse {
    return {
      secondsPlayed: isSet(object.secondsPlayed) ? Number(object.secondsPlayed) : 0,
      secondsAllowed: isSet(object.secondsAllowed) ? Number(object.secondsAllowed) : 0,
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      mastersubAppid: isSet(object.mastersubAppid) ? Number(object.mastersubAppid) : 0,
    };
  },

  toJSON(message: CTimedTrialGetTimeRemainingResponse): unknown {
    const obj: any = {};
    message.secondsPlayed !== undefined && (obj.secondsPlayed = Math.round(message.secondsPlayed));
    message.secondsAllowed !== undefined && (obj.secondsAllowed = Math.round(message.secondsAllowed));
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.mastersubAppid !== undefined && (obj.mastersubAppid = Math.round(message.mastersubAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialGetTimeRemainingResponse>, I>>(
    base?: I,
  ): CTimedTrialGetTimeRemainingResponse {
    return CTimedTrialGetTimeRemainingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialGetTimeRemainingResponse>, I>>(
    object: I,
  ): CTimedTrialGetTimeRemainingResponse {
    const message = createBaseCTimedTrialGetTimeRemainingResponse();
    message.secondsPlayed = object.secondsPlayed ?? 0;
    message.secondsAllowed = object.secondsAllowed ?? 0;
    message.packageid = object.packageid ?? 0;
    message.mastersubAppid = object.mastersubAppid ?? 0;
    return message;
  },
};

function createBaseCTimedTrialRecordPlaytimeRequest(): CTimedTrialRecordPlaytimeRequest {
  return { appid: 0, secondsPlayed: 0 };
}

export const CTimedTrialRecordPlaytimeRequest = {
  encode(message: CTimedTrialRecordPlaytimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.secondsPlayed !== 0) {
      writer.uint32(16).uint32(message.secondsPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialRecordPlaytimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialRecordPlaytimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.secondsPlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTimedTrialRecordPlaytimeRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      secondsPlayed: isSet(object.secondsPlayed) ? Number(object.secondsPlayed) : 0,
    };
  },

  toJSON(message: CTimedTrialRecordPlaytimeRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.secondsPlayed !== undefined && (obj.secondsPlayed = Math.round(message.secondsPlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialRecordPlaytimeRequest>, I>>(
    base?: I,
  ): CTimedTrialRecordPlaytimeRequest {
    return CTimedTrialRecordPlaytimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialRecordPlaytimeRequest>, I>>(
    object: I,
  ): CTimedTrialRecordPlaytimeRequest {
    const message = createBaseCTimedTrialRecordPlaytimeRequest();
    message.appid = object.appid ?? 0;
    message.secondsPlayed = object.secondsPlayed ?? 0;
    return message;
  },
};

function createBaseCTimedTrialRecordPlaytimeResponse(): CTimedTrialRecordPlaytimeResponse {
  return { secondsPlayed: 0, secondsAllowed: 0 };
}

export const CTimedTrialRecordPlaytimeResponse = {
  encode(message: CTimedTrialRecordPlaytimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondsPlayed !== 0) {
      writer.uint32(8).uint32(message.secondsPlayed);
    }
    if (message.secondsAllowed !== 0) {
      writer.uint32(16).uint32(message.secondsAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialRecordPlaytimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialRecordPlaytimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsPlayed = reader.uint32();
          break;
        case 2:
          message.secondsAllowed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTimedTrialRecordPlaytimeResponse {
    return {
      secondsPlayed: isSet(object.secondsPlayed) ? Number(object.secondsPlayed) : 0,
      secondsAllowed: isSet(object.secondsAllowed) ? Number(object.secondsAllowed) : 0,
    };
  },

  toJSON(message: CTimedTrialRecordPlaytimeResponse): unknown {
    const obj: any = {};
    message.secondsPlayed !== undefined && (obj.secondsPlayed = Math.round(message.secondsPlayed));
    message.secondsAllowed !== undefined && (obj.secondsAllowed = Math.round(message.secondsAllowed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialRecordPlaytimeResponse>, I>>(
    base?: I,
  ): CTimedTrialRecordPlaytimeResponse {
    return CTimedTrialRecordPlaytimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialRecordPlaytimeResponse>, I>>(
    object: I,
  ): CTimedTrialRecordPlaytimeResponse {
    const message = createBaseCTimedTrialRecordPlaytimeResponse();
    message.secondsPlayed = object.secondsPlayed ?? 0;
    message.secondsAllowed = object.secondsAllowed ?? 0;
    return message;
  },
};

function createBaseCTimedTrialResetPlaytimeRequest(): CTimedTrialResetPlaytimeRequest {
  return { appid: 0 };
}

export const CTimedTrialResetPlaytimeRequest = {
  encode(message: CTimedTrialResetPlaytimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialResetPlaytimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialResetPlaytimeRequest();
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

  fromJSON(object: any): CTimedTrialResetPlaytimeRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CTimedTrialResetPlaytimeRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialResetPlaytimeRequest>, I>>(base?: I): CTimedTrialResetPlaytimeRequest {
    return CTimedTrialResetPlaytimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialResetPlaytimeRequest>, I>>(
    object: I,
  ): CTimedTrialResetPlaytimeRequest {
    const message = createBaseCTimedTrialResetPlaytimeRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCTimedTrialResetPlaytimeResponse(): CTimedTrialResetPlaytimeResponse {
  return { secondsPlayed: 0, secondsAllowed: 0 };
}

export const CTimedTrialResetPlaytimeResponse = {
  encode(message: CTimedTrialResetPlaytimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secondsPlayed !== 0) {
      writer.uint32(8).uint32(message.secondsPlayed);
    }
    if (message.secondsAllowed !== 0) {
      writer.uint32(16).uint32(message.secondsAllowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTimedTrialResetPlaytimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTimedTrialResetPlaytimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secondsPlayed = reader.uint32();
          break;
        case 2:
          message.secondsAllowed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTimedTrialResetPlaytimeResponse {
    return {
      secondsPlayed: isSet(object.secondsPlayed) ? Number(object.secondsPlayed) : 0,
      secondsAllowed: isSet(object.secondsAllowed) ? Number(object.secondsAllowed) : 0,
    };
  },

  toJSON(message: CTimedTrialResetPlaytimeResponse): unknown {
    const obj: any = {};
    message.secondsPlayed !== undefined && (obj.secondsPlayed = Math.round(message.secondsPlayed));
    message.secondsAllowed !== undefined && (obj.secondsAllowed = Math.round(message.secondsAllowed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTimedTrialResetPlaytimeResponse>, I>>(
    base?: I,
  ): CTimedTrialResetPlaytimeResponse {
    return CTimedTrialResetPlaytimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTimedTrialResetPlaytimeResponse>, I>>(
    object: I,
  ): CTimedTrialResetPlaytimeResponse {
    const message = createBaseCTimedTrialResetPlaytimeResponse();
    message.secondsPlayed = object.secondsPlayed ?? 0;
    message.secondsAllowed = object.secondsAllowed ?? 0;
    return message;
  },
};

export interface TimedTrial {
  GetTimeRemaining(request: CTimedTrialGetTimeRemainingRequest): Promise<CTimedTrialGetTimeRemainingResponse>;
  RecordPlaytime(request: CTimedTrialRecordPlaytimeRequest): Promise<CTimedTrialRecordPlaytimeResponse>;
  ResetPlaytime(request: CTimedTrialResetPlaytimeRequest): Promise<CTimedTrialResetPlaytimeResponse>;
}

export class TimedTrialClientImpl implements TimedTrial {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TimedTrial";
    this.rpc = rpc;
    this.GetTimeRemaining = this.GetTimeRemaining.bind(this);
    this.RecordPlaytime = this.RecordPlaytime.bind(this);
    this.ResetPlaytime = this.ResetPlaytime.bind(this);
  }
  GetTimeRemaining(request: CTimedTrialGetTimeRemainingRequest): Promise<CTimedTrialGetTimeRemainingResponse> {
    const data = CTimedTrialGetTimeRemainingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTimeRemaining", data);
    return promise.then((data) => CTimedTrialGetTimeRemainingResponse.decode(new _m0.Reader(data)));
  }

  RecordPlaytime(request: CTimedTrialRecordPlaytimeRequest): Promise<CTimedTrialRecordPlaytimeResponse> {
    const data = CTimedTrialRecordPlaytimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RecordPlaytime", data);
    return promise.then((data) => CTimedTrialRecordPlaytimeResponse.decode(new _m0.Reader(data)));
  }

  ResetPlaytime(request: CTimedTrialResetPlaytimeRequest): Promise<CTimedTrialResetPlaytimeResponse> {
    const data = CTimedTrialResetPlaytimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResetPlaytime", data);
    return promise.then((data) => CTimedTrialResetPlaytimeResponse.decode(new _m0.Reader(data)));
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
