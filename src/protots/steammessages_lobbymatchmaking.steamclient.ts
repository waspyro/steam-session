/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum ELobbyStatus {
  k_ELobbyStatusInvalid = 0,
  k_ELobbyStatusExists = 1,
  k_ELobbyStatusDoesNotExist = 2,
  k_ELobbyStatusNotAMember = 3,
  UNRECOGNIZED = -1,
}

export function eLobbyStatusFromJSON(object: any): ELobbyStatus {
  switch (object) {
    case 0:
    case "k_ELobbyStatusInvalid":
      return ELobbyStatus.k_ELobbyStatusInvalid;
    case 1:
    case "k_ELobbyStatusExists":
      return ELobbyStatus.k_ELobbyStatusExists;
    case 2:
    case "k_ELobbyStatusDoesNotExist":
      return ELobbyStatus.k_ELobbyStatusDoesNotExist;
    case 3:
    case "k_ELobbyStatusNotAMember":
      return ELobbyStatus.k_ELobbyStatusNotAMember;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ELobbyStatus.UNRECOGNIZED;
  }
}

export function eLobbyStatusToJSON(object: ELobbyStatus): string {
  switch (object) {
    case ELobbyStatus.k_ELobbyStatusInvalid:
      return "k_ELobbyStatusInvalid";
    case ELobbyStatus.k_ELobbyStatusExists:
      return "k_ELobbyStatusExists";
    case ELobbyStatus.k_ELobbyStatusDoesNotExist:
      return "k_ELobbyStatusDoesNotExist";
    case ELobbyStatus.k_ELobbyStatusNotAMember:
      return "k_ELobbyStatusNotAMember";
    case ELobbyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LobbyMatchmakingLegacyGetLobbyStatusRequest {
  appId: number;
  steamidLobby: string;
  claimOwnership: boolean;
  claimMembership: boolean;
  versionNum: number;
}

export interface LobbyMatchmakingLegacyGetLobbyStatusResponse {
  appId: number;
  steamidLobby: string;
  lobbyStatus: ELobbyStatus;
}

function createBaseLobbyMatchmakingLegacyGetLobbyStatusRequest(): LobbyMatchmakingLegacyGetLobbyStatusRequest {
  return { appId: 0, steamidLobby: "0", claimOwnership: false, claimMembership: false, versionNum: 0 };
}

export const LobbyMatchmakingLegacyGetLobbyStatusRequest = {
  encode(message: LobbyMatchmakingLegacyGetLobbyStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamidLobby !== "0") {
      writer.uint32(17).fixed64(message.steamidLobby);
    }
    if (message.claimOwnership === true) {
      writer.uint32(24).bool(message.claimOwnership);
    }
    if (message.claimMembership === true) {
      writer.uint32(32).bool(message.claimMembership);
    }
    if (message.versionNum !== 0) {
      writer.uint32(40).uint32(message.versionNum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LobbyMatchmakingLegacyGetLobbyStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLobbyMatchmakingLegacyGetLobbyStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamidLobby = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.claimOwnership = reader.bool();
          break;
        case 4:
          message.claimMembership = reader.bool();
          break;
        case 5:
          message.versionNum = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LobbyMatchmakingLegacyGetLobbyStatusRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamidLobby: isSet(object.steamidLobby) ? String(object.steamidLobby) : "0",
      claimOwnership: isSet(object.claimOwnership) ? Boolean(object.claimOwnership) : false,
      claimMembership: isSet(object.claimMembership) ? Boolean(object.claimMembership) : false,
      versionNum: isSet(object.versionNum) ? Number(object.versionNum) : 0,
    };
  },

  toJSON(message: LobbyMatchmakingLegacyGetLobbyStatusRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamidLobby !== undefined && (obj.steamidLobby = message.steamidLobby);
    message.claimOwnership !== undefined && (obj.claimOwnership = message.claimOwnership);
    message.claimMembership !== undefined && (obj.claimMembership = message.claimMembership);
    message.versionNum !== undefined && (obj.versionNum = Math.round(message.versionNum));
    return obj;
  },

  create<I extends Exact<DeepPartial<LobbyMatchmakingLegacyGetLobbyStatusRequest>, I>>(
    base?: I,
  ): LobbyMatchmakingLegacyGetLobbyStatusRequest {
    return LobbyMatchmakingLegacyGetLobbyStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LobbyMatchmakingLegacyGetLobbyStatusRequest>, I>>(
    object: I,
  ): LobbyMatchmakingLegacyGetLobbyStatusRequest {
    const message = createBaseLobbyMatchmakingLegacyGetLobbyStatusRequest();
    message.appId = object.appId ?? 0;
    message.steamidLobby = object.steamidLobby ?? "0";
    message.claimOwnership = object.claimOwnership ?? false;
    message.claimMembership = object.claimMembership ?? false;
    message.versionNum = object.versionNum ?? 0;
    return message;
  },
};

function createBaseLobbyMatchmakingLegacyGetLobbyStatusResponse(): LobbyMatchmakingLegacyGetLobbyStatusResponse {
  return { appId: 0, steamidLobby: "0", lobbyStatus: 0 };
}

export const LobbyMatchmakingLegacyGetLobbyStatusResponse = {
  encode(message: LobbyMatchmakingLegacyGetLobbyStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamidLobby !== "0") {
      writer.uint32(17).fixed64(message.steamidLobby);
    }
    if (message.lobbyStatus !== 0) {
      writer.uint32(24).int32(message.lobbyStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LobbyMatchmakingLegacyGetLobbyStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLobbyMatchmakingLegacyGetLobbyStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamidLobby = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.lobbyStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LobbyMatchmakingLegacyGetLobbyStatusResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamidLobby: isSet(object.steamidLobby) ? String(object.steamidLobby) : "0",
      lobbyStatus: isSet(object.lobbyStatus) ? eLobbyStatusFromJSON(object.lobbyStatus) : 0,
    };
  },

  toJSON(message: LobbyMatchmakingLegacyGetLobbyStatusResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamidLobby !== undefined && (obj.steamidLobby = message.steamidLobby);
    message.lobbyStatus !== undefined && (obj.lobbyStatus = eLobbyStatusToJSON(message.lobbyStatus));
    return obj;
  },

  create<I extends Exact<DeepPartial<LobbyMatchmakingLegacyGetLobbyStatusResponse>, I>>(
    base?: I,
  ): LobbyMatchmakingLegacyGetLobbyStatusResponse {
    return LobbyMatchmakingLegacyGetLobbyStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LobbyMatchmakingLegacyGetLobbyStatusResponse>, I>>(
    object: I,
  ): LobbyMatchmakingLegacyGetLobbyStatusResponse {
    const message = createBaseLobbyMatchmakingLegacyGetLobbyStatusResponse();
    message.appId = object.appId ?? 0;
    message.steamidLobby = object.steamidLobby ?? "0";
    message.lobbyStatus = object.lobbyStatus ?? 0;
    return message;
  },
};

export interface LobbyMatchmakingLegacy {
  GetLobbyStatus(
    request: LobbyMatchmakingLegacyGetLobbyStatusRequest,
  ): Promise<LobbyMatchmakingLegacyGetLobbyStatusResponse>;
}

export class LobbyMatchmakingLegacyClientImpl implements LobbyMatchmakingLegacy {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "LobbyMatchmakingLegacy";
    this.rpc = rpc;
    this.GetLobbyStatus = this.GetLobbyStatus.bind(this);
  }
  GetLobbyStatus(
    request: LobbyMatchmakingLegacyGetLobbyStatusRequest,
  ): Promise<LobbyMatchmakingLegacyGetLobbyStatusResponse> {
    const data = LobbyMatchmakingLegacyGetLobbyStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLobbyStatus", data);
    return promise.then((data) => LobbyMatchmakingLegacyGetLobbyStatusResponse.decode(new _m0.Reader(data)));
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
