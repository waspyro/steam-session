/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export enum EMMSLobbyStatus {
  k_EMMSLobbyStatusInvalid = 0,
  k_EMMSLobbyStatusExists = 1,
  k_EMMSLobbyStatusDoesNotExist = 2,
  k_EMMSLobbyStatusNotAMember = 3,
  UNRECOGNIZED = -1,
}

export function eMMSLobbyStatusFromJSON(object: any): EMMSLobbyStatus {
  switch (object) {
    case 0:
    case "k_EMMSLobbyStatusInvalid":
      return EMMSLobbyStatus.k_EMMSLobbyStatusInvalid;
    case 1:
    case "k_EMMSLobbyStatusExists":
      return EMMSLobbyStatus.k_EMMSLobbyStatusExists;
    case 2:
    case "k_EMMSLobbyStatusDoesNotExist":
      return EMMSLobbyStatus.k_EMMSLobbyStatusDoesNotExist;
    case 3:
    case "k_EMMSLobbyStatusNotAMember":
      return EMMSLobbyStatus.k_EMMSLobbyStatusNotAMember;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMMSLobbyStatus.UNRECOGNIZED;
  }
}

export function eMMSLobbyStatusToJSON(object: EMMSLobbyStatus): string {
  switch (object) {
    case EMMSLobbyStatus.k_EMMSLobbyStatusInvalid:
      return "k_EMMSLobbyStatusInvalid";
    case EMMSLobbyStatus.k_EMMSLobbyStatusExists:
      return "k_EMMSLobbyStatusExists";
    case EMMSLobbyStatus.k_EMMSLobbyStatusDoesNotExist:
      return "k_EMMSLobbyStatusDoesNotExist";
    case EMMSLobbyStatus.k_EMMSLobbyStatusNotAMember:
      return "k_EMMSLobbyStatusNotAMember";
    case EMMSLobbyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgClientMMSSetRatelimitPolicyOnClient {
  appId: number;
  enableRateLimits: boolean;
  secondsPerMessage: number;
  millisecondsPerDataUpdate: number;
}

export interface CMsgClientMMSCreateLobby {
  appId: number;
  maxMembers: number;
  lobbyType: number;
  lobbyFlags: number;
  cellId: number;
  deprecatedPublicIp: number;
  metadata: Buffer;
  personaNameOwner: string;
  publicIp: CMsgIPAddress | undefined;
}

export interface CMsgClientMMSCreateLobbyResponse {
  appId: number;
  steamIdLobby: number;
  eresult: number;
}

export interface CMsgClientMMSJoinLobby {
  appId: number;
  steamIdLobby: number;
  personaName: string;
}

export interface CMsgClientMMSJoinLobbyResponse {
  appId: number;
  steamIdLobby: number;
  chatRoomEnterResponse: number;
  maxMembers: number;
  lobbyType: number;
  lobbyFlags: number;
  steamIdOwner: number;
  metadata: Buffer;
  members: CMsgClientMMSJoinLobbyResponse_Member[];
}

export interface CMsgClientMMSJoinLobbyResponse_Member {
  steamId: number;
  personaName: string;
  metadata: Buffer;
}

export interface CMsgClientMMSLeaveLobby {
  appId: number;
  steamIdLobby: number;
}

export interface CMsgClientMMSLeaveLobbyResponse {
  appId: number;
  steamIdLobby: number;
  eresult: number;
}

export interface CMsgClientMMSGetLobbyList {
  appId: number;
  numLobbiesRequested: number;
  cellId: number;
  deprecatedPublicIp: number;
  filters: CMsgClientMMSGetLobbyList_Filter[];
  publicIp: CMsgIPAddress | undefined;
}

export interface CMsgClientMMSGetLobbyList_Filter {
  key: string;
  value: string;
  comparision: number;
  filterType: number;
}

export interface CMsgClientMMSGetLobbyListResponse {
  appId: number;
  eresult: number;
  lobbies: CMsgClientMMSGetLobbyListResponse_Lobby[];
}

export interface CMsgClientMMSGetLobbyListResponse_Lobby {
  steamId: number;
  maxMembers: number;
  lobbyType: number;
  lobbyFlags: number;
  metadata: Buffer;
  numMembers: number;
  distance: number;
  weight: number;
}

export interface CMsgClientMMSSetLobbyData {
  appId: number;
  steamIdLobby: number;
  steamIdMember: number;
  maxMembers: number;
  lobbyType: number;
  lobbyFlags: number;
  metadata: Buffer;
}

export interface CMsgClientMMSSetLobbyDataResponse {
  appId: number;
  steamIdLobby: number;
  eresult: number;
}

export interface CMsgClientMMSGetLobbyData {
  appId: number;
  steamIdLobby: number;
}

export interface CMsgClientMMSLobbyData {
  appId: number;
  steamIdLobby: number;
  numMembers: number;
  maxMembers: number;
  lobbyType: number;
  lobbyFlags: number;
  steamIdOwner: number;
  metadata: Buffer;
  members: CMsgClientMMSLobbyData_Member[];
  lobbyCellid: number;
  ownerShouldAcceptChanges: boolean;
}

export interface CMsgClientMMSLobbyData_Member {
  steamId: number;
  personaName: string;
  metadata: Buffer;
}

export interface CMsgClientMMSSendLobbyChatMsg {
  appId: number;
  steamIdLobby: number;
  steamIdTarget: number;
  lobbyMessage: Buffer;
}

export interface CMsgClientMMSLobbyChatMsg {
  appId: number;
  steamIdLobby: number;
  steamIdSender: number;
  lobbyMessage: Buffer;
}

export interface CMsgClientMMSSetLobbyOwner {
  appId: number;
  steamIdLobby: number;
  steamIdNewOwner: number;
}

export interface CMsgClientMMSSetLobbyOwnerResponse {
  appId: number;
  steamIdLobby: number;
  eresult: number;
}

export interface CMsgClientMMSSetLobbyLinked {
  appId: number;
  steamIdLobby: number;
  steamIdLobby2: number;
}

export interface CMsgClientMMSSetLobbyGameServer {
  appId: number;
  steamIdLobby: number;
  deprecatedGameServerIp: number;
  gameServerPort: number;
  gameServerSteamId: number;
  gameServerIp: CMsgIPAddress | undefined;
}

export interface CMsgClientMMSLobbyGameServerSet {
  appId: number;
  steamIdLobby: number;
  deprecatedGameServerIp: number;
  gameServerPort: number;
  gameServerSteamId: number;
  gameServerIp: CMsgIPAddress | undefined;
}

export interface CMsgClientMMSUserJoinedLobby {
  appId: number;
  steamIdLobby: number;
  steamIdUser: number;
  personaName: string;
}

export interface CMsgClientMMSUserLeftLobby {
  appId: number;
  steamIdLobby: number;
  steamIdUser: number;
  personaName: string;
}

export interface CMsgClientMMSInviteToLobby {
  appId: number;
  steamIdLobby: number;
  steamIdUserInvited: number;
}

export interface CMsgClientMMSGetLobbyStatus {
  appId: number;
  steamIdLobby: number;
  claimMembership: boolean;
  claimOwnership: boolean;
}

export interface CMsgClientMMSGetLobbyStatusResponse {
  appId: number;
  steamIdLobby: number;
  lobbyStatus: EMMSLobbyStatus;
}

function createBaseCMsgClientMMSSetRatelimitPolicyOnClient(): CMsgClientMMSSetRatelimitPolicyOnClient {
  return { appId: 0, enableRateLimits: false, secondsPerMessage: 0, millisecondsPerDataUpdate: 0 };
}

export const CMsgClientMMSSetRatelimitPolicyOnClient = {
  encode(message: CMsgClientMMSSetRatelimitPolicyOnClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.enableRateLimits === true) {
      writer.uint32(16).bool(message.enableRateLimits);
    }
    if (message.secondsPerMessage !== 0) {
      writer.uint32(24).int32(message.secondsPerMessage);
    }
    if (message.millisecondsPerDataUpdate !== 0) {
      writer.uint32(32).int32(message.millisecondsPerDataUpdate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetRatelimitPolicyOnClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetRatelimitPolicyOnClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.enableRateLimits = reader.bool();
          break;
        case 3:
          message.secondsPerMessage = reader.int32();
          break;
        case 4:
          message.millisecondsPerDataUpdate = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetRatelimitPolicyOnClient {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      enableRateLimits: isSet(object.enableRateLimits) ? Boolean(object.enableRateLimits) : false,
      secondsPerMessage: isSet(object.secondsPerMessage) ? Number(object.secondsPerMessage) : 0,
      millisecondsPerDataUpdate: isSet(object.millisecondsPerDataUpdate) ? Number(object.millisecondsPerDataUpdate) : 0,
    };
  },

  toJSON(message: CMsgClientMMSSetRatelimitPolicyOnClient): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.enableRateLimits !== undefined && (obj.enableRateLimits = message.enableRateLimits);
    message.secondsPerMessage !== undefined && (obj.secondsPerMessage = Math.round(message.secondsPerMessage));
    message.millisecondsPerDataUpdate !== undefined &&
      (obj.millisecondsPerDataUpdate = Math.round(message.millisecondsPerDataUpdate));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetRatelimitPolicyOnClient>, I>>(
    base?: I,
  ): CMsgClientMMSSetRatelimitPolicyOnClient {
    return CMsgClientMMSSetRatelimitPolicyOnClient.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetRatelimitPolicyOnClient>, I>>(
    object: I,
  ): CMsgClientMMSSetRatelimitPolicyOnClient {
    const message = createBaseCMsgClientMMSSetRatelimitPolicyOnClient();
    message.appId = object.appId ?? 0;
    message.enableRateLimits = object.enableRateLimits ?? false;
    message.secondsPerMessage = object.secondsPerMessage ?? 0;
    message.millisecondsPerDataUpdate = object.millisecondsPerDataUpdate ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSCreateLobby(): CMsgClientMMSCreateLobby {
  return {
    appId: 0,
    maxMembers: 0,
    lobbyType: 0,
    lobbyFlags: 0,
    cellId: 0,
    deprecatedPublicIp: 0,
    metadata: Buffer.alloc(0),
    personaNameOwner: "",
    publicIp: undefined,
  };
}

export const CMsgClientMMSCreateLobby = {
  encode(message: CMsgClientMMSCreateLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(16).int32(message.maxMembers);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(24).int32(message.lobbyType);
    }
    if (message.lobbyFlags !== 0) {
      writer.uint32(32).int32(message.lobbyFlags);
    }
    if (message.cellId !== 0) {
      writer.uint32(40).uint32(message.cellId);
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(48).uint32(message.deprecatedPublicIp);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(58).bytes(message.metadata);
    }
    if (message.personaNameOwner !== "") {
      writer.uint32(66).string(message.personaNameOwner);
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSCreateLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSCreateLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.maxMembers = reader.int32();
          break;
        case 3:
          message.lobbyType = reader.int32();
          break;
        case 4:
          message.lobbyFlags = reader.int32();
          break;
        case 5:
          message.cellId = reader.uint32();
          break;
        case 6:
          message.deprecatedPublicIp = reader.uint32();
          break;
        case 7:
          message.metadata = reader.bytes() as Buffer;
          break;
        case 8:
          message.personaNameOwner = reader.string();
          break;
        case 9:
          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSCreateLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      lobbyFlags: isSet(object.lobbyFlags) ? Number(object.lobbyFlags) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
      personaNameOwner: isSet(object.personaNameOwner) ? String(object.personaNameOwner) : "",
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
    };
  },

  toJSON(message: CMsgClientMMSCreateLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.lobbyFlags !== undefined && (obj.lobbyFlags = Math.round(message.lobbyFlags));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    message.personaNameOwner !== undefined && (obj.personaNameOwner = message.personaNameOwner);
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSCreateLobby>, I>>(base?: I): CMsgClientMMSCreateLobby {
    return CMsgClientMMSCreateLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSCreateLobby>, I>>(object: I): CMsgClientMMSCreateLobby {
    const message = createBaseCMsgClientMMSCreateLobby();
    message.appId = object.appId ?? 0;
    message.maxMembers = object.maxMembers ?? 0;
    message.lobbyType = object.lobbyType ?? 0;
    message.lobbyFlags = object.lobbyFlags ?? 0;
    message.cellId = object.cellId ?? 0;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.metadata = object.metadata ?? Buffer.alloc(0);
    message.personaNameOwner = object.personaNameOwner ?? "";
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientMMSCreateLobbyResponse(): CMsgClientMMSCreateLobbyResponse {
  return { appId: 0, steamIdLobby: 0, eresult: 0 };
}

export const CMsgClientMMSCreateLobbyResponse = {
  encode(message: CMsgClientMMSCreateLobbyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSCreateLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSCreateLobbyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSCreateLobbyResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CMsgClientMMSCreateLobbyResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSCreateLobbyResponse>, I>>(
    base?: I,
  ): CMsgClientMMSCreateLobbyResponse {
    return CMsgClientMMSCreateLobbyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSCreateLobbyResponse>, I>>(
    object: I,
  ): CMsgClientMMSCreateLobbyResponse {
    const message = createBaseCMsgClientMMSCreateLobbyResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSJoinLobby(): CMsgClientMMSJoinLobby {
  return { appId: 0, steamIdLobby: 0, personaName: "" };
}

export const CMsgClientMMSJoinLobby = {
  encode(message: CMsgClientMMSJoinLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.personaName !== "") {
      writer.uint32(26).string(message.personaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSJoinLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSJoinLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.personaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSJoinLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
    };
  },

  toJSON(message: CMsgClientMMSJoinLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.personaName !== undefined && (obj.personaName = message.personaName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSJoinLobby>, I>>(base?: I): CMsgClientMMSJoinLobby {
    return CMsgClientMMSJoinLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSJoinLobby>, I>>(object: I): CMsgClientMMSJoinLobby {
    const message = createBaseCMsgClientMMSJoinLobby();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.personaName = object.personaName ?? "";
    return message;
  },
};

function createBaseCMsgClientMMSJoinLobbyResponse(): CMsgClientMMSJoinLobbyResponse {
  return {
    appId: 0,
    steamIdLobby: 0,
    chatRoomEnterResponse: 0,
    maxMembers: 0,
    lobbyType: 0,
    lobbyFlags: 0,
    steamIdOwner: 0,
    metadata: Buffer.alloc(0),
    members: [],
  };
}

export const CMsgClientMMSJoinLobbyResponse = {
  encode(message: CMsgClientMMSJoinLobbyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.chatRoomEnterResponse !== 0) {
      writer.uint32(24).int32(message.chatRoomEnterResponse);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(32).int32(message.maxMembers);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(40).int32(message.lobbyType);
    }
    if (message.lobbyFlags !== 0) {
      writer.uint32(48).int32(message.lobbyFlags);
    }
    if (message.steamIdOwner !== 0) {
      writer.uint32(57).fixed64(message.steamIdOwner);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(66).bytes(message.metadata);
    }
    for (const v of message.members) {
      CMsgClientMMSJoinLobbyResponse_Member.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSJoinLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSJoinLobbyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.chatRoomEnterResponse = reader.int32();
          break;
        case 4:
          message.maxMembers = reader.int32();
          break;
        case 5:
          message.lobbyType = reader.int32();
          break;
        case 6:
          message.lobbyFlags = reader.int32();
          break;
        case 7:
          message.steamIdOwner = longToNumber(reader.fixed64() as Long);
          break;
        case 8:
          message.metadata = reader.bytes() as Buffer;
          break;
        case 9:
          message.members.push(CMsgClientMMSJoinLobbyResponse_Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSJoinLobbyResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      chatRoomEnterResponse: isSet(object.chatRoomEnterResponse) ? Number(object.chatRoomEnterResponse) : 0,
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      lobbyFlags: isSet(object.lobbyFlags) ? Number(object.lobbyFlags) : 0,
      steamIdOwner: isSet(object.steamIdOwner) ? Number(object.steamIdOwner) : 0,
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CMsgClientMMSJoinLobbyResponse_Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientMMSJoinLobbyResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.chatRoomEnterResponse !== undefined &&
      (obj.chatRoomEnterResponse = Math.round(message.chatRoomEnterResponse));
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.lobbyFlags !== undefined && (obj.lobbyFlags = Math.round(message.lobbyFlags));
    message.steamIdOwner !== undefined && (obj.steamIdOwner = Math.round(message.steamIdOwner));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgClientMMSJoinLobbyResponse_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSJoinLobbyResponse>, I>>(base?: I): CMsgClientMMSJoinLobbyResponse {
    return CMsgClientMMSJoinLobbyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSJoinLobbyResponse>, I>>(
    object: I,
  ): CMsgClientMMSJoinLobbyResponse {
    const message = createBaseCMsgClientMMSJoinLobbyResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.chatRoomEnterResponse = object.chatRoomEnterResponse ?? 0;
    message.maxMembers = object.maxMembers ?? 0;
    message.lobbyType = object.lobbyType ?? 0;
    message.lobbyFlags = object.lobbyFlags ?? 0;
    message.steamIdOwner = object.steamIdOwner ?? 0;
    message.metadata = object.metadata ?? Buffer.alloc(0);
    message.members = object.members?.map((e) => CMsgClientMMSJoinLobbyResponse_Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientMMSJoinLobbyResponse_Member(): CMsgClientMMSJoinLobbyResponse_Member {
  return { steamId: 0, personaName: "", metadata: Buffer.alloc(0) };
}

export const CMsgClientMMSJoinLobbyResponse_Member = {
  encode(message: CMsgClientMMSJoinLobbyResponse_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSJoinLobbyResponse_Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSJoinLobbyResponse_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.personaName = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSJoinLobbyResponse_Member {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientMMSJoinLobbyResponse_Member): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSJoinLobbyResponse_Member>, I>>(
    base?: I,
  ): CMsgClientMMSJoinLobbyResponse_Member {
    return CMsgClientMMSJoinLobbyResponse_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSJoinLobbyResponse_Member>, I>>(
    object: I,
  ): CMsgClientMMSJoinLobbyResponse_Member {
    const message = createBaseCMsgClientMMSJoinLobbyResponse_Member();
    message.steamId = object.steamId ?? 0;
    message.personaName = object.personaName ?? "";
    message.metadata = object.metadata ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientMMSLeaveLobby(): CMsgClientMMSLeaveLobby {
  return { appId: 0, steamIdLobby: 0 };
}

export const CMsgClientMMSLeaveLobby = {
  encode(message: CMsgClientMMSLeaveLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLeaveLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLeaveLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLeaveLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
    };
  },

  toJSON(message: CMsgClientMMSLeaveLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLeaveLobby>, I>>(base?: I): CMsgClientMMSLeaveLobby {
    return CMsgClientMMSLeaveLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLeaveLobby>, I>>(object: I): CMsgClientMMSLeaveLobby {
    const message = createBaseCMsgClientMMSLeaveLobby();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSLeaveLobbyResponse(): CMsgClientMMSLeaveLobbyResponse {
  return { appId: 0, steamIdLobby: 0, eresult: 0 };
}

export const CMsgClientMMSLeaveLobbyResponse = {
  encode(message: CMsgClientMMSLeaveLobbyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLeaveLobbyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLeaveLobbyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLeaveLobbyResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CMsgClientMMSLeaveLobbyResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLeaveLobbyResponse>, I>>(base?: I): CMsgClientMMSLeaveLobbyResponse {
    return CMsgClientMMSLeaveLobbyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLeaveLobbyResponse>, I>>(
    object: I,
  ): CMsgClientMMSLeaveLobbyResponse {
    const message = createBaseCMsgClientMMSLeaveLobbyResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyList(): CMsgClientMMSGetLobbyList {
  return { appId: 0, numLobbiesRequested: 0, cellId: 0, deprecatedPublicIp: 0, filters: [], publicIp: undefined };
}

export const CMsgClientMMSGetLobbyList = {
  encode(message: CMsgClientMMSGetLobbyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.numLobbiesRequested !== 0) {
      writer.uint32(24).int32(message.numLobbiesRequested);
    }
    if (message.cellId !== 0) {
      writer.uint32(32).uint32(message.cellId);
    }
    if (message.deprecatedPublicIp !== 0) {
      writer.uint32(40).uint32(message.deprecatedPublicIp);
    }
    for (const v of message.filters) {
      CMsgClientMMSGetLobbyList_Filter.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.publicIp !== undefined) {
      CMsgIPAddress.encode(message.publicIp, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 3:
          message.numLobbiesRequested = reader.int32();
          break;
        case 4:
          message.cellId = reader.uint32();
          break;
        case 5:
          message.deprecatedPublicIp = reader.uint32();
          break;
        case 6:
          message.filters.push(CMsgClientMMSGetLobbyList_Filter.decode(reader, reader.uint32()));
          break;
        case 7:
          message.publicIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyList {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      numLobbiesRequested: isSet(object.numLobbiesRequested) ? Number(object.numLobbiesRequested) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      deprecatedPublicIp: isSet(object.deprecatedPublicIp) ? Number(object.deprecatedPublicIp) : 0,
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => CMsgClientMMSGetLobbyList_Filter.fromJSON(e))
        : [],
      publicIp: isSet(object.publicIp) ? CMsgIPAddress.fromJSON(object.publicIp) : undefined,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyList): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.numLobbiesRequested !== undefined && (obj.numLobbiesRequested = Math.round(message.numLobbiesRequested));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.deprecatedPublicIp !== undefined && (obj.deprecatedPublicIp = Math.round(message.deprecatedPublicIp));
    if (message.filters) {
      obj.filters = message.filters.map((e) => e ? CMsgClientMMSGetLobbyList_Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.publicIp !== undefined &&
      (obj.publicIp = message.publicIp ? CMsgIPAddress.toJSON(message.publicIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyList>, I>>(base?: I): CMsgClientMMSGetLobbyList {
    return CMsgClientMMSGetLobbyList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyList>, I>>(object: I): CMsgClientMMSGetLobbyList {
    const message = createBaseCMsgClientMMSGetLobbyList();
    message.appId = object.appId ?? 0;
    message.numLobbiesRequested = object.numLobbiesRequested ?? 0;
    message.cellId = object.cellId ?? 0;
    message.deprecatedPublicIp = object.deprecatedPublicIp ?? 0;
    message.filters = object.filters?.map((e) => CMsgClientMMSGetLobbyList_Filter.fromPartial(e)) || [];
    message.publicIp = (object.publicIp !== undefined && object.publicIp !== null)
      ? CMsgIPAddress.fromPartial(object.publicIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyList_Filter(): CMsgClientMMSGetLobbyList_Filter {
  return { key: "", value: "", comparision: 0, filterType: 0 };
}

export const CMsgClientMMSGetLobbyList_Filter = {
  encode(message: CMsgClientMMSGetLobbyList_Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.comparision !== 0) {
      writer.uint32(24).int32(message.comparision);
    }
    if (message.filterType !== 0) {
      writer.uint32(32).int32(message.filterType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyList_Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyList_Filter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.comparision = reader.int32();
          break;
        case 4:
          message.filterType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyList_Filter {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      comparision: isSet(object.comparision) ? Number(object.comparision) : 0,
      filterType: isSet(object.filterType) ? Number(object.filterType) : 0,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyList_Filter): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.comparision !== undefined && (obj.comparision = Math.round(message.comparision));
    message.filterType !== undefined && (obj.filterType = Math.round(message.filterType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyList_Filter>, I>>(
    base?: I,
  ): CMsgClientMMSGetLobbyList_Filter {
    return CMsgClientMMSGetLobbyList_Filter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyList_Filter>, I>>(
    object: I,
  ): CMsgClientMMSGetLobbyList_Filter {
    const message = createBaseCMsgClientMMSGetLobbyList_Filter();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.comparision = object.comparision ?? 0;
    message.filterType = object.filterType ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyListResponse(): CMsgClientMMSGetLobbyListResponse {
  return { appId: 0, eresult: 0, lobbies: [] };
}

export const CMsgClientMMSGetLobbyListResponse = {
  encode(message: CMsgClientMMSGetLobbyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    for (const v of message.lobbies) {
      CMsgClientMMSGetLobbyListResponse_Lobby.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        case 4:
          message.lobbies.push(CMsgClientMMSGetLobbyListResponse_Lobby.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyListResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      lobbies: Array.isArray(object?.lobbies)
        ? object.lobbies.map((e: any) => CMsgClientMMSGetLobbyListResponse_Lobby.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyListResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.lobbies) {
      obj.lobbies = message.lobbies.map((e) => e ? CMsgClientMMSGetLobbyListResponse_Lobby.toJSON(e) : undefined);
    } else {
      obj.lobbies = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyListResponse>, I>>(
    base?: I,
  ): CMsgClientMMSGetLobbyListResponse {
    return CMsgClientMMSGetLobbyListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyListResponse>, I>>(
    object: I,
  ): CMsgClientMMSGetLobbyListResponse {
    const message = createBaseCMsgClientMMSGetLobbyListResponse();
    message.appId = object.appId ?? 0;
    message.eresult = object.eresult ?? 0;
    message.lobbies = object.lobbies?.map((e) => CMsgClientMMSGetLobbyListResponse_Lobby.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyListResponse_Lobby(): CMsgClientMMSGetLobbyListResponse_Lobby {
  return {
    steamId: 0,
    maxMembers: 0,
    lobbyType: 0,
    lobbyFlags: 0,
    metadata: Buffer.alloc(0),
    numMembers: 0,
    distance: 0,
    weight: 0,
  };
}

export const CMsgClientMMSGetLobbyListResponse_Lobby = {
  encode(message: CMsgClientMMSGetLobbyListResponse_Lobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(16).int32(message.maxMembers);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(24).int32(message.lobbyType);
    }
    if (message.lobbyFlags !== 0) {
      writer.uint32(32).int32(message.lobbyFlags);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    if (message.numMembers !== 0) {
      writer.uint32(48).int32(message.numMembers);
    }
    if (message.distance !== 0) {
      writer.uint32(61).float(message.distance);
    }
    if (message.weight !== 0) {
      writer.uint32(64).int64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyListResponse_Lobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyListResponse_Lobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.maxMembers = reader.int32();
          break;
        case 3:
          message.lobbyType = reader.int32();
          break;
        case 4:
          message.lobbyFlags = reader.int32();
          break;
        case 5:
          message.metadata = reader.bytes() as Buffer;
          break;
        case 6:
          message.numMembers = reader.int32();
          break;
        case 7:
          message.distance = reader.float();
          break;
        case 8:
          message.weight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyListResponse_Lobby {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      lobbyFlags: isSet(object.lobbyFlags) ? Number(object.lobbyFlags) : 0,
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
      numMembers: isSet(object.numMembers) ? Number(object.numMembers) : 0,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyListResponse_Lobby): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.lobbyFlags !== undefined && (obj.lobbyFlags = Math.round(message.lobbyFlags));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    message.numMembers !== undefined && (obj.numMembers = Math.round(message.numMembers));
    message.distance !== undefined && (obj.distance = message.distance);
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyListResponse_Lobby>, I>>(
    base?: I,
  ): CMsgClientMMSGetLobbyListResponse_Lobby {
    return CMsgClientMMSGetLobbyListResponse_Lobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyListResponse_Lobby>, I>>(
    object: I,
  ): CMsgClientMMSGetLobbyListResponse_Lobby {
    const message = createBaseCMsgClientMMSGetLobbyListResponse_Lobby();
    message.steamId = object.steamId ?? 0;
    message.maxMembers = object.maxMembers ?? 0;
    message.lobbyType = object.lobbyType ?? 0;
    message.lobbyFlags = object.lobbyFlags ?? 0;
    message.metadata = object.metadata ?? Buffer.alloc(0);
    message.numMembers = object.numMembers ?? 0;
    message.distance = object.distance ?? 0;
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyData(): CMsgClientMMSSetLobbyData {
  return {
    appId: 0,
    steamIdLobby: 0,
    steamIdMember: 0,
    maxMembers: 0,
    lobbyType: 0,
    lobbyFlags: 0,
    metadata: Buffer.alloc(0),
  };
}

export const CMsgClientMMSSetLobbyData = {
  encode(message: CMsgClientMMSSetLobbyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdMember !== 0) {
      writer.uint32(25).fixed64(message.steamIdMember);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(32).int32(message.maxMembers);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(40).int32(message.lobbyType);
    }
    if (message.lobbyFlags !== 0) {
      writer.uint32(48).int32(message.lobbyFlags);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(58).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdMember = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.maxMembers = reader.int32();
          break;
        case 5:
          message.lobbyType = reader.int32();
          break;
        case 6:
          message.lobbyFlags = reader.int32();
          break;
        case 7:
          message.metadata = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyData {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdMember: isSet(object.steamIdMember) ? Number(object.steamIdMember) : 0,
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      lobbyFlags: isSet(object.lobbyFlags) ? Number(object.lobbyFlags) : 0,
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyData): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdMember !== undefined && (obj.steamIdMember = Math.round(message.steamIdMember));
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.lobbyFlags !== undefined && (obj.lobbyFlags = Math.round(message.lobbyFlags));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyData>, I>>(base?: I): CMsgClientMMSSetLobbyData {
    return CMsgClientMMSSetLobbyData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyData>, I>>(object: I): CMsgClientMMSSetLobbyData {
    const message = createBaseCMsgClientMMSSetLobbyData();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdMember = object.steamIdMember ?? 0;
    message.maxMembers = object.maxMembers ?? 0;
    message.lobbyType = object.lobbyType ?? 0;
    message.lobbyFlags = object.lobbyFlags ?? 0;
    message.metadata = object.metadata ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyDataResponse(): CMsgClientMMSSetLobbyDataResponse {
  return { appId: 0, steamIdLobby: 0, eresult: 0 };
}

export const CMsgClientMMSSetLobbyDataResponse = {
  encode(message: CMsgClientMMSSetLobbyDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyDataResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyDataResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyDataResponse>, I>>(
    base?: I,
  ): CMsgClientMMSSetLobbyDataResponse {
    return CMsgClientMMSSetLobbyDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyDataResponse>, I>>(
    object: I,
  ): CMsgClientMMSSetLobbyDataResponse {
    const message = createBaseCMsgClientMMSSetLobbyDataResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyData(): CMsgClientMMSGetLobbyData {
  return { appId: 0, steamIdLobby: 0 };
}

export const CMsgClientMMSGetLobbyData = {
  encode(message: CMsgClientMMSGetLobbyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyData {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyData): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyData>, I>>(base?: I): CMsgClientMMSGetLobbyData {
    return CMsgClientMMSGetLobbyData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyData>, I>>(object: I): CMsgClientMMSGetLobbyData {
    const message = createBaseCMsgClientMMSGetLobbyData();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSLobbyData(): CMsgClientMMSLobbyData {
  return {
    appId: 0,
    steamIdLobby: 0,
    numMembers: 0,
    maxMembers: 0,
    lobbyType: 0,
    lobbyFlags: 0,
    steamIdOwner: 0,
    metadata: Buffer.alloc(0),
    members: [],
    lobbyCellid: 0,
    ownerShouldAcceptChanges: false,
  };
}

export const CMsgClientMMSLobbyData = {
  encode(message: CMsgClientMMSLobbyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.numMembers !== 0) {
      writer.uint32(24).int32(message.numMembers);
    }
    if (message.maxMembers !== 0) {
      writer.uint32(32).int32(message.maxMembers);
    }
    if (message.lobbyType !== 0) {
      writer.uint32(40).int32(message.lobbyType);
    }
    if (message.lobbyFlags !== 0) {
      writer.uint32(48).int32(message.lobbyFlags);
    }
    if (message.steamIdOwner !== 0) {
      writer.uint32(57).fixed64(message.steamIdOwner);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(66).bytes(message.metadata);
    }
    for (const v of message.members) {
      CMsgClientMMSLobbyData_Member.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.lobbyCellid !== 0) {
      writer.uint32(80).uint32(message.lobbyCellid);
    }
    if (message.ownerShouldAcceptChanges === true) {
      writer.uint32(88).bool(message.ownerShouldAcceptChanges);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLobbyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLobbyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.numMembers = reader.int32();
          break;
        case 4:
          message.maxMembers = reader.int32();
          break;
        case 5:
          message.lobbyType = reader.int32();
          break;
        case 6:
          message.lobbyFlags = reader.int32();
          break;
        case 7:
          message.steamIdOwner = longToNumber(reader.fixed64() as Long);
          break;
        case 8:
          message.metadata = reader.bytes() as Buffer;
          break;
        case 9:
          message.members.push(CMsgClientMMSLobbyData_Member.decode(reader, reader.uint32()));
          break;
        case 10:
          message.lobbyCellid = reader.uint32();
          break;
        case 11:
          message.ownerShouldAcceptChanges = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLobbyData {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      numMembers: isSet(object.numMembers) ? Number(object.numMembers) : 0,
      maxMembers: isSet(object.maxMembers) ? Number(object.maxMembers) : 0,
      lobbyType: isSet(object.lobbyType) ? Number(object.lobbyType) : 0,
      lobbyFlags: isSet(object.lobbyFlags) ? Number(object.lobbyFlags) : 0,
      steamIdOwner: isSet(object.steamIdOwner) ? Number(object.steamIdOwner) : 0,
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => CMsgClientMMSLobbyData_Member.fromJSON(e))
        : [],
      lobbyCellid: isSet(object.lobbyCellid) ? Number(object.lobbyCellid) : 0,
      ownerShouldAcceptChanges: isSet(object.ownerShouldAcceptChanges)
        ? Boolean(object.ownerShouldAcceptChanges)
        : false,
    };
  },

  toJSON(message: CMsgClientMMSLobbyData): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.numMembers !== undefined && (obj.numMembers = Math.round(message.numMembers));
    message.maxMembers !== undefined && (obj.maxMembers = Math.round(message.maxMembers));
    message.lobbyType !== undefined && (obj.lobbyType = Math.round(message.lobbyType));
    message.lobbyFlags !== undefined && (obj.lobbyFlags = Math.round(message.lobbyFlags));
    message.steamIdOwner !== undefined && (obj.steamIdOwner = Math.round(message.steamIdOwner));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    if (message.members) {
      obj.members = message.members.map((e) => e ? CMsgClientMMSLobbyData_Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.lobbyCellid !== undefined && (obj.lobbyCellid = Math.round(message.lobbyCellid));
    message.ownerShouldAcceptChanges !== undefined && (obj.ownerShouldAcceptChanges = message.ownerShouldAcceptChanges);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLobbyData>, I>>(base?: I): CMsgClientMMSLobbyData {
    return CMsgClientMMSLobbyData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLobbyData>, I>>(object: I): CMsgClientMMSLobbyData {
    const message = createBaseCMsgClientMMSLobbyData();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.numMembers = object.numMembers ?? 0;
    message.maxMembers = object.maxMembers ?? 0;
    message.lobbyType = object.lobbyType ?? 0;
    message.lobbyFlags = object.lobbyFlags ?? 0;
    message.steamIdOwner = object.steamIdOwner ?? 0;
    message.metadata = object.metadata ?? Buffer.alloc(0);
    message.members = object.members?.map((e) => CMsgClientMMSLobbyData_Member.fromPartial(e)) || [];
    message.lobbyCellid = object.lobbyCellid ?? 0;
    message.ownerShouldAcceptChanges = object.ownerShouldAcceptChanges ?? false;
    return message;
  },
};

function createBaseCMsgClientMMSLobbyData_Member(): CMsgClientMMSLobbyData_Member {
  return { steamId: 0, personaName: "", metadata: Buffer.alloc(0) };
}

export const CMsgClientMMSLobbyData_Member = {
  encode(message: CMsgClientMMSLobbyData_Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== 0) {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.personaName !== "") {
      writer.uint32(18).string(message.personaName);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(26).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLobbyData_Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLobbyData_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.personaName = reader.string();
          break;
        case 3:
          message.metadata = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLobbyData_Member {
    return {
      steamId: isSet(object.steamId) ? Number(object.steamId) : 0,
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
      metadata: isSet(object.metadata) ? Buffer.from(bytesFromBase64(object.metadata)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientMMSLobbyData_Member): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = Math.round(message.steamId));
    message.personaName !== undefined && (obj.personaName = message.personaName);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLobbyData_Member>, I>>(base?: I): CMsgClientMMSLobbyData_Member {
    return CMsgClientMMSLobbyData_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLobbyData_Member>, I>>(
    object: I,
  ): CMsgClientMMSLobbyData_Member {
    const message = createBaseCMsgClientMMSLobbyData_Member();
    message.steamId = object.steamId ?? 0;
    message.personaName = object.personaName ?? "";
    message.metadata = object.metadata ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientMMSSendLobbyChatMsg(): CMsgClientMMSSendLobbyChatMsg {
  return { appId: 0, steamIdLobby: 0, steamIdTarget: 0, lobbyMessage: Buffer.alloc(0) };
}

export const CMsgClientMMSSendLobbyChatMsg = {
  encode(message: CMsgClientMMSSendLobbyChatMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdTarget !== 0) {
      writer.uint32(25).fixed64(message.steamIdTarget);
    }
    if (message.lobbyMessage.length !== 0) {
      writer.uint32(34).bytes(message.lobbyMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSendLobbyChatMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSendLobbyChatMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdTarget = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.lobbyMessage = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSendLobbyChatMsg {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdTarget: isSet(object.steamIdTarget) ? Number(object.steamIdTarget) : 0,
      lobbyMessage: isSet(object.lobbyMessage) ? Buffer.from(bytesFromBase64(object.lobbyMessage)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientMMSSendLobbyChatMsg): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdTarget !== undefined && (obj.steamIdTarget = Math.round(message.steamIdTarget));
    message.lobbyMessage !== undefined &&
      (obj.lobbyMessage = base64FromBytes(message.lobbyMessage !== undefined ? message.lobbyMessage : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSendLobbyChatMsg>, I>>(base?: I): CMsgClientMMSSendLobbyChatMsg {
    return CMsgClientMMSSendLobbyChatMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSendLobbyChatMsg>, I>>(
    object: I,
  ): CMsgClientMMSSendLobbyChatMsg {
    const message = createBaseCMsgClientMMSSendLobbyChatMsg();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdTarget = object.steamIdTarget ?? 0;
    message.lobbyMessage = object.lobbyMessage ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientMMSLobbyChatMsg(): CMsgClientMMSLobbyChatMsg {
  return { appId: 0, steamIdLobby: 0, steamIdSender: 0, lobbyMessage: Buffer.alloc(0) };
}

export const CMsgClientMMSLobbyChatMsg = {
  encode(message: CMsgClientMMSLobbyChatMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdSender !== 0) {
      writer.uint32(25).fixed64(message.steamIdSender);
    }
    if (message.lobbyMessage.length !== 0) {
      writer.uint32(34).bytes(message.lobbyMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLobbyChatMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLobbyChatMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdSender = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.lobbyMessage = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLobbyChatMsg {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdSender: isSet(object.steamIdSender) ? Number(object.steamIdSender) : 0,
      lobbyMessage: isSet(object.lobbyMessage) ? Buffer.from(bytesFromBase64(object.lobbyMessage)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientMMSLobbyChatMsg): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdSender !== undefined && (obj.steamIdSender = Math.round(message.steamIdSender));
    message.lobbyMessage !== undefined &&
      (obj.lobbyMessage = base64FromBytes(message.lobbyMessage !== undefined ? message.lobbyMessage : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLobbyChatMsg>, I>>(base?: I): CMsgClientMMSLobbyChatMsg {
    return CMsgClientMMSLobbyChatMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLobbyChatMsg>, I>>(object: I): CMsgClientMMSLobbyChatMsg {
    const message = createBaseCMsgClientMMSLobbyChatMsg();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdSender = object.steamIdSender ?? 0;
    message.lobbyMessage = object.lobbyMessage ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyOwner(): CMsgClientMMSSetLobbyOwner {
  return { appId: 0, steamIdLobby: 0, steamIdNewOwner: 0 };
}

export const CMsgClientMMSSetLobbyOwner = {
  encode(message: CMsgClientMMSSetLobbyOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdNewOwner !== 0) {
      writer.uint32(25).fixed64(message.steamIdNewOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdNewOwner = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyOwner {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdNewOwner: isSet(object.steamIdNewOwner) ? Number(object.steamIdNewOwner) : 0,
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyOwner): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdNewOwner !== undefined && (obj.steamIdNewOwner = Math.round(message.steamIdNewOwner));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyOwner>, I>>(base?: I): CMsgClientMMSSetLobbyOwner {
    return CMsgClientMMSSetLobbyOwner.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyOwner>, I>>(object: I): CMsgClientMMSSetLobbyOwner {
    const message = createBaseCMsgClientMMSSetLobbyOwner();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdNewOwner = object.steamIdNewOwner ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyOwnerResponse(): CMsgClientMMSSetLobbyOwnerResponse {
  return { appId: 0, steamIdLobby: 0, eresult: 0 };
}

export const CMsgClientMMSSetLobbyOwnerResponse = {
  encode(message: CMsgClientMMSSetLobbyOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.eresult !== 0) {
      writer.uint32(24).int32(message.eresult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.eresult = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyOwnerResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyOwnerResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyOwnerResponse>, I>>(
    base?: I,
  ): CMsgClientMMSSetLobbyOwnerResponse {
    return CMsgClientMMSSetLobbyOwnerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyOwnerResponse>, I>>(
    object: I,
  ): CMsgClientMMSSetLobbyOwnerResponse {
    const message = createBaseCMsgClientMMSSetLobbyOwnerResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.eresult = object.eresult ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyLinked(): CMsgClientMMSSetLobbyLinked {
  return { appId: 0, steamIdLobby: 0, steamIdLobby2: 0 };
}

export const CMsgClientMMSSetLobbyLinked = {
  encode(message: CMsgClientMMSSetLobbyLinked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdLobby2 !== 0) {
      writer.uint32(25).fixed64(message.steamIdLobby2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyLinked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyLinked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdLobby2 = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyLinked {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdLobby2: isSet(object.steamIdLobby2) ? Number(object.steamIdLobby2) : 0,
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyLinked): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdLobby2 !== undefined && (obj.steamIdLobby2 = Math.round(message.steamIdLobby2));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyLinked>, I>>(base?: I): CMsgClientMMSSetLobbyLinked {
    return CMsgClientMMSSetLobbyLinked.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyLinked>, I>>(object: I): CMsgClientMMSSetLobbyLinked {
    const message = createBaseCMsgClientMMSSetLobbyLinked();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdLobby2 = object.steamIdLobby2 ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSSetLobbyGameServer(): CMsgClientMMSSetLobbyGameServer {
  return {
    appId: 0,
    steamIdLobby: 0,
    deprecatedGameServerIp: 0,
    gameServerPort: 0,
    gameServerSteamId: 0,
    gameServerIp: undefined,
  };
}

export const CMsgClientMMSSetLobbyGameServer = {
  encode(message: CMsgClientMMSSetLobbyGameServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.deprecatedGameServerIp !== 0) {
      writer.uint32(24).uint32(message.deprecatedGameServerIp);
    }
    if (message.gameServerPort !== 0) {
      writer.uint32(32).uint32(message.gameServerPort);
    }
    if (message.gameServerSteamId !== 0) {
      writer.uint32(41).fixed64(message.gameServerSteamId);
    }
    if (message.gameServerIp !== undefined) {
      CMsgIPAddress.encode(message.gameServerIp, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSSetLobbyGameServer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSSetLobbyGameServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.deprecatedGameServerIp = reader.uint32();
          break;
        case 4:
          message.gameServerPort = reader.uint32();
          break;
        case 5:
          message.gameServerSteamId = longToNumber(reader.fixed64() as Long);
          break;
        case 6:
          message.gameServerIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSSetLobbyGameServer {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      deprecatedGameServerIp: isSet(object.deprecatedGameServerIp) ? Number(object.deprecatedGameServerIp) : 0,
      gameServerPort: isSet(object.gameServerPort) ? Number(object.gameServerPort) : 0,
      gameServerSteamId: isSet(object.gameServerSteamId) ? Number(object.gameServerSteamId) : 0,
      gameServerIp: isSet(object.gameServerIp) ? CMsgIPAddress.fromJSON(object.gameServerIp) : undefined,
    };
  },

  toJSON(message: CMsgClientMMSSetLobbyGameServer): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.deprecatedGameServerIp !== undefined &&
      (obj.deprecatedGameServerIp = Math.round(message.deprecatedGameServerIp));
    message.gameServerPort !== undefined && (obj.gameServerPort = Math.round(message.gameServerPort));
    message.gameServerSteamId !== undefined && (obj.gameServerSteamId = Math.round(message.gameServerSteamId));
    message.gameServerIp !== undefined &&
      (obj.gameServerIp = message.gameServerIp ? CMsgIPAddress.toJSON(message.gameServerIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyGameServer>, I>>(base?: I): CMsgClientMMSSetLobbyGameServer {
    return CMsgClientMMSSetLobbyGameServer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSSetLobbyGameServer>, I>>(
    object: I,
  ): CMsgClientMMSSetLobbyGameServer {
    const message = createBaseCMsgClientMMSSetLobbyGameServer();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.deprecatedGameServerIp = object.deprecatedGameServerIp ?? 0;
    message.gameServerPort = object.gameServerPort ?? 0;
    message.gameServerSteamId = object.gameServerSteamId ?? 0;
    message.gameServerIp = (object.gameServerIp !== undefined && object.gameServerIp !== null)
      ? CMsgIPAddress.fromPartial(object.gameServerIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientMMSLobbyGameServerSet(): CMsgClientMMSLobbyGameServerSet {
  return {
    appId: 0,
    steamIdLobby: 0,
    deprecatedGameServerIp: 0,
    gameServerPort: 0,
    gameServerSteamId: 0,
    gameServerIp: undefined,
  };
}

export const CMsgClientMMSLobbyGameServerSet = {
  encode(message: CMsgClientMMSLobbyGameServerSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.deprecatedGameServerIp !== 0) {
      writer.uint32(24).uint32(message.deprecatedGameServerIp);
    }
    if (message.gameServerPort !== 0) {
      writer.uint32(32).uint32(message.gameServerPort);
    }
    if (message.gameServerSteamId !== 0) {
      writer.uint32(41).fixed64(message.gameServerSteamId);
    }
    if (message.gameServerIp !== undefined) {
      CMsgIPAddress.encode(message.gameServerIp, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSLobbyGameServerSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSLobbyGameServerSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.deprecatedGameServerIp = reader.uint32();
          break;
        case 4:
          message.gameServerPort = reader.uint32();
          break;
        case 5:
          message.gameServerSteamId = longToNumber(reader.fixed64() as Long);
          break;
        case 6:
          message.gameServerIp = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSLobbyGameServerSet {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      deprecatedGameServerIp: isSet(object.deprecatedGameServerIp) ? Number(object.deprecatedGameServerIp) : 0,
      gameServerPort: isSet(object.gameServerPort) ? Number(object.gameServerPort) : 0,
      gameServerSteamId: isSet(object.gameServerSteamId) ? Number(object.gameServerSteamId) : 0,
      gameServerIp: isSet(object.gameServerIp) ? CMsgIPAddress.fromJSON(object.gameServerIp) : undefined,
    };
  },

  toJSON(message: CMsgClientMMSLobbyGameServerSet): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.deprecatedGameServerIp !== undefined &&
      (obj.deprecatedGameServerIp = Math.round(message.deprecatedGameServerIp));
    message.gameServerPort !== undefined && (obj.gameServerPort = Math.round(message.gameServerPort));
    message.gameServerSteamId !== undefined && (obj.gameServerSteamId = Math.round(message.gameServerSteamId));
    message.gameServerIp !== undefined &&
      (obj.gameServerIp = message.gameServerIp ? CMsgIPAddress.toJSON(message.gameServerIp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSLobbyGameServerSet>, I>>(base?: I): CMsgClientMMSLobbyGameServerSet {
    return CMsgClientMMSLobbyGameServerSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSLobbyGameServerSet>, I>>(
    object: I,
  ): CMsgClientMMSLobbyGameServerSet {
    const message = createBaseCMsgClientMMSLobbyGameServerSet();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.deprecatedGameServerIp = object.deprecatedGameServerIp ?? 0;
    message.gameServerPort = object.gameServerPort ?? 0;
    message.gameServerSteamId = object.gameServerSteamId ?? 0;
    message.gameServerIp = (object.gameServerIp !== undefined && object.gameServerIp !== null)
      ? CMsgIPAddress.fromPartial(object.gameServerIp)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientMMSUserJoinedLobby(): CMsgClientMMSUserJoinedLobby {
  return { appId: 0, steamIdLobby: 0, steamIdUser: 0, personaName: "" };
}

export const CMsgClientMMSUserJoinedLobby = {
  encode(message: CMsgClientMMSUserJoinedLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdUser !== 0) {
      writer.uint32(25).fixed64(message.steamIdUser);
    }
    if (message.personaName !== "") {
      writer.uint32(34).string(message.personaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSUserJoinedLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSUserJoinedLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdUser = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.personaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSUserJoinedLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdUser: isSet(object.steamIdUser) ? Number(object.steamIdUser) : 0,
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
    };
  },

  toJSON(message: CMsgClientMMSUserJoinedLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdUser !== undefined && (obj.steamIdUser = Math.round(message.steamIdUser));
    message.personaName !== undefined && (obj.personaName = message.personaName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSUserJoinedLobby>, I>>(base?: I): CMsgClientMMSUserJoinedLobby {
    return CMsgClientMMSUserJoinedLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSUserJoinedLobby>, I>>(object: I): CMsgClientMMSUserJoinedLobby {
    const message = createBaseCMsgClientMMSUserJoinedLobby();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdUser = object.steamIdUser ?? 0;
    message.personaName = object.personaName ?? "";
    return message;
  },
};

function createBaseCMsgClientMMSUserLeftLobby(): CMsgClientMMSUserLeftLobby {
  return { appId: 0, steamIdLobby: 0, steamIdUser: 0, personaName: "" };
}

export const CMsgClientMMSUserLeftLobby = {
  encode(message: CMsgClientMMSUserLeftLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdUser !== 0) {
      writer.uint32(25).fixed64(message.steamIdUser);
    }
    if (message.personaName !== "") {
      writer.uint32(34).string(message.personaName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSUserLeftLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSUserLeftLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdUser = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.personaName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSUserLeftLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdUser: isSet(object.steamIdUser) ? Number(object.steamIdUser) : 0,
      personaName: isSet(object.personaName) ? String(object.personaName) : "",
    };
  },

  toJSON(message: CMsgClientMMSUserLeftLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdUser !== undefined && (obj.steamIdUser = Math.round(message.steamIdUser));
    message.personaName !== undefined && (obj.personaName = message.personaName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSUserLeftLobby>, I>>(base?: I): CMsgClientMMSUserLeftLobby {
    return CMsgClientMMSUserLeftLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSUserLeftLobby>, I>>(object: I): CMsgClientMMSUserLeftLobby {
    const message = createBaseCMsgClientMMSUserLeftLobby();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdUser = object.steamIdUser ?? 0;
    message.personaName = object.personaName ?? "";
    return message;
  },
};

function createBaseCMsgClientMMSInviteToLobby(): CMsgClientMMSInviteToLobby {
  return { appId: 0, steamIdLobby: 0, steamIdUserInvited: 0 };
}

export const CMsgClientMMSInviteToLobby = {
  encode(message: CMsgClientMMSInviteToLobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.steamIdUserInvited !== 0) {
      writer.uint32(25).fixed64(message.steamIdUserInvited);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSInviteToLobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSInviteToLobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdUserInvited = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSInviteToLobby {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      steamIdUserInvited: isSet(object.steamIdUserInvited) ? Number(object.steamIdUserInvited) : 0,
    };
  },

  toJSON(message: CMsgClientMMSInviteToLobby): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.steamIdUserInvited !== undefined && (obj.steamIdUserInvited = Math.round(message.steamIdUserInvited));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSInviteToLobby>, I>>(base?: I): CMsgClientMMSInviteToLobby {
    return CMsgClientMMSInviteToLobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSInviteToLobby>, I>>(object: I): CMsgClientMMSInviteToLobby {
    const message = createBaseCMsgClientMMSInviteToLobby();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.steamIdUserInvited = object.steamIdUserInvited ?? 0;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyStatus(): CMsgClientMMSGetLobbyStatus {
  return { appId: 0, steamIdLobby: 0, claimMembership: false, claimOwnership: false };
}

export const CMsgClientMMSGetLobbyStatus = {
  encode(message: CMsgClientMMSGetLobbyStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.claimMembership === true) {
      writer.uint32(24).bool(message.claimMembership);
    }
    if (message.claimOwnership === true) {
      writer.uint32(32).bool(message.claimOwnership);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.claimMembership = reader.bool();
          break;
        case 4:
          message.claimOwnership = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientMMSGetLobbyStatus {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      claimMembership: isSet(object.claimMembership) ? Boolean(object.claimMembership) : false,
      claimOwnership: isSet(object.claimOwnership) ? Boolean(object.claimOwnership) : false,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyStatus): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.claimMembership !== undefined && (obj.claimMembership = message.claimMembership);
    message.claimOwnership !== undefined && (obj.claimOwnership = message.claimOwnership);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyStatus>, I>>(base?: I): CMsgClientMMSGetLobbyStatus {
    return CMsgClientMMSGetLobbyStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyStatus>, I>>(object: I): CMsgClientMMSGetLobbyStatus {
    const message = createBaseCMsgClientMMSGetLobbyStatus();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.claimMembership = object.claimMembership ?? false;
    message.claimOwnership = object.claimOwnership ?? false;
    return message;
  },
};

function createBaseCMsgClientMMSGetLobbyStatusResponse(): CMsgClientMMSGetLobbyStatusResponse {
  return { appId: 0, steamIdLobby: 0, lobbyStatus: 0 };
}

export const CMsgClientMMSGetLobbyStatusResponse = {
  encode(message: CMsgClientMMSGetLobbyStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamIdLobby !== 0) {
      writer.uint32(17).fixed64(message.steamIdLobby);
    }
    if (message.lobbyStatus !== 0) {
      writer.uint32(24).int32(message.lobbyStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientMMSGetLobbyStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientMMSGetLobbyStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamIdLobby = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CMsgClientMMSGetLobbyStatusResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamIdLobby: isSet(object.steamIdLobby) ? Number(object.steamIdLobby) : 0,
      lobbyStatus: isSet(object.lobbyStatus) ? eMMSLobbyStatusFromJSON(object.lobbyStatus) : 0,
    };
  },

  toJSON(message: CMsgClientMMSGetLobbyStatusResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamIdLobby !== undefined && (obj.steamIdLobby = Math.round(message.steamIdLobby));
    message.lobbyStatus !== undefined && (obj.lobbyStatus = eMMSLobbyStatusToJSON(message.lobbyStatus));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyStatusResponse>, I>>(
    base?: I,
  ): CMsgClientMMSGetLobbyStatusResponse {
    return CMsgClientMMSGetLobbyStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientMMSGetLobbyStatusResponse>, I>>(
    object: I,
  ): CMsgClientMMSGetLobbyStatusResponse {
    const message = createBaseCMsgClientMMSGetLobbyStatusResponse();
    message.appId = object.appId ?? 0;
    message.steamIdLobby = object.steamIdLobby ?? 0;
    message.lobbyStatus = object.lobbyStatus ?? 0;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
