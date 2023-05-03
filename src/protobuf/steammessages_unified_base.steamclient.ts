/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EProtoExecutionSite {
  k_EProtoExecutionSiteUnknown = 0,
  k_EProtoExecutionSiteSteamClient = 2,
  UNRECOGNIZED = -1,
}

export function eProtoExecutionSiteFromJSON(object: any): EProtoExecutionSite {
  switch (object) {
    case 0:
    case "k_EProtoExecutionSiteUnknown":
      return EProtoExecutionSite.k_EProtoExecutionSiteUnknown;
    case 2:
    case "k_EProtoExecutionSiteSteamClient":
      return EProtoExecutionSite.k_EProtoExecutionSiteSteamClient;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EProtoExecutionSite.UNRECOGNIZED;
  }
}

export function eProtoExecutionSiteToJSON(object: EProtoExecutionSite): string {
  switch (object) {
    case EProtoExecutionSite.k_EProtoExecutionSiteUnknown:
      return "k_EProtoExecutionSiteUnknown";
    case EProtoExecutionSite.k_EProtoExecutionSiteSteamClient:
      return "k_EProtoExecutionSiteSteamClient";
    case EProtoExecutionSite.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface NoResponse {
}

function createBaseNoResponse(): NoResponse {
  return {};
}

export const NoResponse = {
  encode(_: NoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoResponse();
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

  fromJSON(_: any): NoResponse {
    return {};
  },

  toJSON(_: NoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NoResponse>, I>>(base?: I): NoResponse {
    return NoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NoResponse>, I>>(_: I): NoResponse {
    const message = createBaseNoResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
