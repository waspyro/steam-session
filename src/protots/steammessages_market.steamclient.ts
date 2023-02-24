/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CEconMarketIsMarketplaceAllowedRequest {
  webcookie: string;
}

export interface CEconMarketIsMarketplaceAllowedResponse {
  allowed: boolean;
  reason: number;
  allowedAtTime: number;
  steamguardRequiredDays: number;
  formsRequested: boolean;
  formsRequireVerification: boolean;
  newDeviceCooldownDays: number;
}

function createBaseCEconMarketIsMarketplaceAllowedRequest(): CEconMarketIsMarketplaceAllowedRequest {
  return { webcookie: "" };
}

export const CEconMarketIsMarketplaceAllowedRequest = {
  encode(message: CEconMarketIsMarketplaceAllowedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webcookie !== "") {
      writer.uint32(10).string(message.webcookie);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconMarketIsMarketplaceAllowedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconMarketIsMarketplaceAllowedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webcookie = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconMarketIsMarketplaceAllowedRequest {
    return { webcookie: isSet(object.webcookie) ? String(object.webcookie) : "" };
  },

  toJSON(message: CEconMarketIsMarketplaceAllowedRequest): unknown {
    const obj: any = {};
    message.webcookie !== undefined && (obj.webcookie = message.webcookie);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconMarketIsMarketplaceAllowedRequest>, I>>(
    base?: I,
  ): CEconMarketIsMarketplaceAllowedRequest {
    return CEconMarketIsMarketplaceAllowedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconMarketIsMarketplaceAllowedRequest>, I>>(
    object: I,
  ): CEconMarketIsMarketplaceAllowedRequest {
    const message = createBaseCEconMarketIsMarketplaceAllowedRequest();
    message.webcookie = object.webcookie ?? "";
    return message;
  },
};

function createBaseCEconMarketIsMarketplaceAllowedResponse(): CEconMarketIsMarketplaceAllowedResponse {
  return {
    allowed: false,
    reason: 0,
    allowedAtTime: 0,
    steamguardRequiredDays: 0,
    formsRequested: false,
    formsRequireVerification: false,
    newDeviceCooldownDays: 0,
  };
}

export const CEconMarketIsMarketplaceAllowedResponse = {
  encode(message: CEconMarketIsMarketplaceAllowedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowed === true) {
      writer.uint32(8).bool(message.allowed);
    }
    if (message.reason !== 0) {
      writer.uint32(16).uint32(message.reason);
    }
    if (message.allowedAtTime !== 0) {
      writer.uint32(24).uint32(message.allowedAtTime);
    }
    if (message.steamguardRequiredDays !== 0) {
      writer.uint32(32).uint32(message.steamguardRequiredDays);
    }
    if (message.formsRequested === true) {
      writer.uint32(56).bool(message.formsRequested);
    }
    if (message.formsRequireVerification === true) {
      writer.uint32(64).bool(message.formsRequireVerification);
    }
    if (message.newDeviceCooldownDays !== 0) {
      writer.uint32(72).uint32(message.newDeviceCooldownDays);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconMarketIsMarketplaceAllowedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconMarketIsMarketplaceAllowedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowed = reader.bool();
          break;
        case 2:
          message.reason = reader.uint32();
          break;
        case 3:
          message.allowedAtTime = reader.uint32();
          break;
        case 4:
          message.steamguardRequiredDays = reader.uint32();
          break;
        case 7:
          message.formsRequested = reader.bool();
          break;
        case 8:
          message.formsRequireVerification = reader.bool();
          break;
        case 9:
          message.newDeviceCooldownDays = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconMarketIsMarketplaceAllowedResponse {
    return {
      allowed: isSet(object.allowed) ? Boolean(object.allowed) : false,
      reason: isSet(object.reason) ? Number(object.reason) : 0,
      allowedAtTime: isSet(object.allowedAtTime) ? Number(object.allowedAtTime) : 0,
      steamguardRequiredDays: isSet(object.steamguardRequiredDays) ? Number(object.steamguardRequiredDays) : 0,
      formsRequested: isSet(object.formsRequested) ? Boolean(object.formsRequested) : false,
      formsRequireVerification: isSet(object.formsRequireVerification)
        ? Boolean(object.formsRequireVerification)
        : false,
      newDeviceCooldownDays: isSet(object.newDeviceCooldownDays) ? Number(object.newDeviceCooldownDays) : 0,
    };
  },

  toJSON(message: CEconMarketIsMarketplaceAllowedResponse): unknown {
    const obj: any = {};
    message.allowed !== undefined && (obj.allowed = message.allowed);
    message.reason !== undefined && (obj.reason = Math.round(message.reason));
    message.allowedAtTime !== undefined && (obj.allowedAtTime = Math.round(message.allowedAtTime));
    message.steamguardRequiredDays !== undefined &&
      (obj.steamguardRequiredDays = Math.round(message.steamguardRequiredDays));
    message.formsRequested !== undefined && (obj.formsRequested = message.formsRequested);
    message.formsRequireVerification !== undefined && (obj.formsRequireVerification = message.formsRequireVerification);
    message.newDeviceCooldownDays !== undefined &&
      (obj.newDeviceCooldownDays = Math.round(message.newDeviceCooldownDays));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconMarketIsMarketplaceAllowedResponse>, I>>(
    base?: I,
  ): CEconMarketIsMarketplaceAllowedResponse {
    return CEconMarketIsMarketplaceAllowedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconMarketIsMarketplaceAllowedResponse>, I>>(
    object: I,
  ): CEconMarketIsMarketplaceAllowedResponse {
    const message = createBaseCEconMarketIsMarketplaceAllowedResponse();
    message.allowed = object.allowed ?? false;
    message.reason = object.reason ?? 0;
    message.allowedAtTime = object.allowedAtTime ?? 0;
    message.steamguardRequiredDays = object.steamguardRequiredDays ?? 0;
    message.formsRequested = object.formsRequested ?? false;
    message.formsRequireVerification = object.formsRequireVerification ?? false;
    message.newDeviceCooldownDays = object.newDeviceCooldownDays ?? 0;
    return message;
  },
};

export interface EconMarket {
  IsMarketplaceAllowed(
    request: CEconMarketIsMarketplaceAllowedRequest,
  ): Promise<CEconMarketIsMarketplaceAllowedResponse>;
}

export class EconMarketClientImpl implements EconMarket {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "EconMarket";
    this.rpc = rpc;
    this.IsMarketplaceAllowed = this.IsMarketplaceAllowed.bind(this);
  }
  IsMarketplaceAllowed(
    request: CEconMarketIsMarketplaceAllowedRequest,
  ): Promise<CEconMarketIsMarketplaceAllowedResponse> {
    const data = CEconMarketIsMarketplaceAllowedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IsMarketplaceAllowed", data);
    return promise.then((data) => CEconMarketIsMarketplaceAllowedResponse.decode(new _m0.Reader(data)));
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
