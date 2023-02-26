/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CRemoteClientCreateSessionRequest {
}

export interface CRemoteClientCreateSessionResponse {
  sessionId: string;
  euniverse: number;
}

export interface CRemoteClientStartPairingRequest {
  sessionId: string;
}

export interface CRemoteClientStartPairingResponse {
  pin: number;
}

export interface CRemoteClientSetPairingInfoRequest {
  sessionId: string;
  deviceId: string;
  request: Buffer;
}

export interface CRemoteClientSetPairingInfoResponse {
}

export interface CRemoteClientGetPairingInfoRequest {
  pin: number;
}

export interface CRemoteClientGetPairingInfoResponse {
  sessionId: string;
  deviceId: string;
  request: Buffer;
}

export interface CRemoteClientCancelPairingRequest {
  sessionId: string;
}

export interface CRemoteClientCancelPairingResponse {
}

export interface CRemoteClientRegisterStatusUpdateNotification {
  sessionId: string;
  steamid: string;
  deviceId: string;
}

export interface CRemoteClientUnregisterStatusUpdateNotification {
  sessionId: string;
  steamid: string;
}

export interface CRemoteClientOnlineNotification {
  steamid: string;
  remoteClientId: string;
}

export interface CRemoteClientRemotePacketNotification {
  sessionId: string;
  steamid: string;
  payload: Buffer;
}

export interface CRemoteClientReplyPacketNotification {
  sessionId: string;
  payload: Buffer;
}

export interface CRemoteClientGetRepliesRequest {
  sessionId: string;
}

export interface CRemoteClientGetRepliesResponse {
  payload: Buffer[];
}

export interface CRemoteClientAllocateTURNServerRequest {
  cellid: number;
  credentials: string;
}

export interface CRemoteClientAllocateTURNServerResponse {
  turnServer: string;
}

export interface CRemoteClientAllocateRelayServerRequest {
  cellid: number;
  credentials: string;
}

export interface CRemoteClientAllocateRelayServerResponse {
  relayServer: string;
}

export interface CRemoteClientAllocateSDRRequest {
  appid: number;
}

export interface CRemoteClientAllocateSDRResponse {
}

export interface CRemoteClientSteamBroadcastNotification {
  steamid: string;
  clientid: string;
  payload: Buffer;
}

export interface CRemoteClientSteamToSteamNotification {
  steamid: string;
  srcClientid: string;
  dstClientid: string;
  secretid: number;
  encryptedPayload: Buffer;
}

export interface CRemotePlaySessionStartedRequest {
  hostAccountId: number;
  clientAccountId: number;
  appid: number;
  deviceFormFactor: number;
  remotePlayTogether: boolean;
  guestSession: boolean;
}

export interface CRemotePlaySessionStartedResponse {
  recordId: string;
}

export interface CRemotePlaySessionStoppedNotification {
  recordId: string;
  usedX264: boolean;
  usedH264: boolean;
  usedHevc: boolean;
}

export interface CRemotePlayTogetherNotification {
  steamid: string;
  groupUpdated?: CRemotePlayTogetherNotification_GroupUpdated | undefined;
}

export interface CRemotePlayTogetherNotification_Player {
  steamid: string;
  guestid: number;
  avatarHash: Buffer;
  keyboardEnabled: boolean;
  mouseEnabled: boolean;
  controllerEnabled: boolean;
}

export interface CRemotePlayTogetherNotification_ControllerSlotObsolete {
  slotid: number;
  steamid: string;
}

export interface CRemotePlayTogetherNotification_ControllerSlot {
  slotid: number;
  player: CRemotePlayTogetherNotification_Player | undefined;
  controllerType: number;
}

export interface CRemotePlayTogetherNotification_GroupUpdated {
  hostSteamid: string;
  hostClientid: string;
  playersObsolete: string[];
  hostGameid: string;
  controllerSlotsObsolete: CRemotePlayTogetherNotification_ControllerSlotObsolete[];
  hasNewPlayers: boolean;
  playerSlots: CRemotePlayTogetherNotification_Player[];
  controllerSlots: CRemotePlayTogetherNotification_ControllerSlot[];
}

export interface CRemoteClientCreateRemotePlayTogetherInvitationRequest {
  appid: number;
  launchParameters: string;
}

export interface CRemoteClientCreateRemotePlayTogetherInvitationResponse {
  invitationCode: string;
}

export interface CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
  invitationCode: string;
}

export interface CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
}

export interface CRemoteClientLookupRemotePlayTogetherInvitationRequest {
  invitationCode: string;
}

export interface CRemoteClientLookupRemotePlayTogetherInvitationResponse {
  invitationUrl: string;
}

function createBaseCRemoteClientCreateSessionRequest(): CRemoteClientCreateSessionRequest {
  return {};
}

export const CRemoteClientCreateSessionRequest = {
  encode(_: CRemoteClientCreateSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCreateSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCreateSessionRequest();
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

  fromJSON(_: any): CRemoteClientCreateSessionRequest {
    return {};
  },

  toJSON(_: CRemoteClientCreateSessionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCreateSessionRequest>, I>>(
    base?: I,
  ): CRemoteClientCreateSessionRequest {
    return CRemoteClientCreateSessionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCreateSessionRequest>, I>>(
    _: I,
  ): CRemoteClientCreateSessionRequest {
    const message = createBaseCRemoteClientCreateSessionRequest();
    return message;
  },
};

function createBaseCRemoteClientCreateSessionResponse(): CRemoteClientCreateSessionResponse {
  return { sessionId: "0", euniverse: 0 };
}

export const CRemoteClientCreateSessionResponse = {
  encode(message: CRemoteClientCreateSessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.euniverse !== 0) {
      writer.uint32(16).int32(message.euniverse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCreateSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCreateSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.euniverse = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientCreateSessionResponse {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      euniverse: isSet(object.euniverse) ? Number(object.euniverse) : 0,
    };
  },

  toJSON(message: CRemoteClientCreateSessionResponse): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.euniverse !== undefined && (obj.euniverse = Math.round(message.euniverse));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCreateSessionResponse>, I>>(
    base?: I,
  ): CRemoteClientCreateSessionResponse {
    return CRemoteClientCreateSessionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCreateSessionResponse>, I>>(
    object: I,
  ): CRemoteClientCreateSessionResponse {
    const message = createBaseCRemoteClientCreateSessionResponse();
    message.sessionId = object.sessionId ?? "0";
    message.euniverse = object.euniverse ?? 0;
    return message;
  },
};

function createBaseCRemoteClientStartPairingRequest(): CRemoteClientStartPairingRequest {
  return { sessionId: "0" };
}

export const CRemoteClientStartPairingRequest = {
  encode(message: CRemoteClientStartPairingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientStartPairingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientStartPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientStartPairingRequest {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0" };
  },

  toJSON(message: CRemoteClientStartPairingRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientStartPairingRequest>, I>>(
    base?: I,
  ): CRemoteClientStartPairingRequest {
    return CRemoteClientStartPairingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientStartPairingRequest>, I>>(
    object: I,
  ): CRemoteClientStartPairingRequest {
    const message = createBaseCRemoteClientStartPairingRequest();
    message.sessionId = object.sessionId ?? "0";
    return message;
  },
};

function createBaseCRemoteClientStartPairingResponse(): CRemoteClientStartPairingResponse {
  return { pin: 0 };
}

export const CRemoteClientStartPairingResponse = {
  encode(message: CRemoteClientStartPairingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pin !== 0) {
      writer.uint32(8).uint32(message.pin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientStartPairingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientStartPairingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pin = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientStartPairingResponse {
    return { pin: isSet(object.pin) ? Number(object.pin) : 0 };
  },

  toJSON(message: CRemoteClientStartPairingResponse): unknown {
    const obj: any = {};
    message.pin !== undefined && (obj.pin = Math.round(message.pin));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientStartPairingResponse>, I>>(
    base?: I,
  ): CRemoteClientStartPairingResponse {
    return CRemoteClientStartPairingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientStartPairingResponse>, I>>(
    object: I,
  ): CRemoteClientStartPairingResponse {
    const message = createBaseCRemoteClientStartPairingResponse();
    message.pin = object.pin ?? 0;
    return message;
  },
};

function createBaseCRemoteClientSetPairingInfoRequest(): CRemoteClientSetPairingInfoRequest {
  return { sessionId: "0", deviceId: "0", request: Buffer.alloc(0) };
}

export const CRemoteClientSetPairingInfoRequest = {
  encode(message: CRemoteClientSetPairingInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.deviceId !== "0") {
      writer.uint32(17).fixed64(message.deviceId);
    }
    if (message.request.length !== 0) {
      writer.uint32(26).bytes(message.request);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientSetPairingInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientSetPairingInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.deviceId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.request = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientSetPairingInfoRequest {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      deviceId: isSet(object.deviceId) ? String(object.deviceId) : "0",
      request: isSet(object.request) ? Buffer.from(bytesFromBase64(object.request)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientSetPairingInfoRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.request !== undefined &&
      (obj.request = base64FromBytes(message.request !== undefined ? message.request : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientSetPairingInfoRequest>, I>>(
    base?: I,
  ): CRemoteClientSetPairingInfoRequest {
    return CRemoteClientSetPairingInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientSetPairingInfoRequest>, I>>(
    object: I,
  ): CRemoteClientSetPairingInfoRequest {
    const message = createBaseCRemoteClientSetPairingInfoRequest();
    message.sessionId = object.sessionId ?? "0";
    message.deviceId = object.deviceId ?? "0";
    message.request = object.request ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemoteClientSetPairingInfoResponse(): CRemoteClientSetPairingInfoResponse {
  return {};
}

export const CRemoteClientSetPairingInfoResponse = {
  encode(_: CRemoteClientSetPairingInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientSetPairingInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientSetPairingInfoResponse();
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

  fromJSON(_: any): CRemoteClientSetPairingInfoResponse {
    return {};
  },

  toJSON(_: CRemoteClientSetPairingInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientSetPairingInfoResponse>, I>>(
    base?: I,
  ): CRemoteClientSetPairingInfoResponse {
    return CRemoteClientSetPairingInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientSetPairingInfoResponse>, I>>(
    _: I,
  ): CRemoteClientSetPairingInfoResponse {
    const message = createBaseCRemoteClientSetPairingInfoResponse();
    return message;
  },
};

function createBaseCRemoteClientGetPairingInfoRequest(): CRemoteClientGetPairingInfoRequest {
  return { pin: 0 };
}

export const CRemoteClientGetPairingInfoRequest = {
  encode(message: CRemoteClientGetPairingInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pin !== 0) {
      writer.uint32(8).uint32(message.pin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientGetPairingInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientGetPairingInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pin = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientGetPairingInfoRequest {
    return { pin: isSet(object.pin) ? Number(object.pin) : 0 };
  },

  toJSON(message: CRemoteClientGetPairingInfoRequest): unknown {
    const obj: any = {};
    message.pin !== undefined && (obj.pin = Math.round(message.pin));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientGetPairingInfoRequest>, I>>(
    base?: I,
  ): CRemoteClientGetPairingInfoRequest {
    return CRemoteClientGetPairingInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientGetPairingInfoRequest>, I>>(
    object: I,
  ): CRemoteClientGetPairingInfoRequest {
    const message = createBaseCRemoteClientGetPairingInfoRequest();
    message.pin = object.pin ?? 0;
    return message;
  },
};

function createBaseCRemoteClientGetPairingInfoResponse(): CRemoteClientGetPairingInfoResponse {
  return { sessionId: "0", deviceId: "0", request: Buffer.alloc(0) };
}

export const CRemoteClientGetPairingInfoResponse = {
  encode(message: CRemoteClientGetPairingInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.deviceId !== "0") {
      writer.uint32(17).fixed64(message.deviceId);
    }
    if (message.request.length !== 0) {
      writer.uint32(26).bytes(message.request);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientGetPairingInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientGetPairingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.deviceId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.request = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientGetPairingInfoResponse {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      deviceId: isSet(object.deviceId) ? String(object.deviceId) : "0",
      request: isSet(object.request) ? Buffer.from(bytesFromBase64(object.request)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientGetPairingInfoResponse): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.request !== undefined &&
      (obj.request = base64FromBytes(message.request !== undefined ? message.request : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientGetPairingInfoResponse>, I>>(
    base?: I,
  ): CRemoteClientGetPairingInfoResponse {
    return CRemoteClientGetPairingInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientGetPairingInfoResponse>, I>>(
    object: I,
  ): CRemoteClientGetPairingInfoResponse {
    const message = createBaseCRemoteClientGetPairingInfoResponse();
    message.sessionId = object.sessionId ?? "0";
    message.deviceId = object.deviceId ?? "0";
    message.request = object.request ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemoteClientCancelPairingRequest(): CRemoteClientCancelPairingRequest {
  return { sessionId: "0" };
}

export const CRemoteClientCancelPairingRequest = {
  encode(message: CRemoteClientCancelPairingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCancelPairingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCancelPairingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientCancelPairingRequest {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0" };
  },

  toJSON(message: CRemoteClientCancelPairingRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCancelPairingRequest>, I>>(
    base?: I,
  ): CRemoteClientCancelPairingRequest {
    return CRemoteClientCancelPairingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCancelPairingRequest>, I>>(
    object: I,
  ): CRemoteClientCancelPairingRequest {
    const message = createBaseCRemoteClientCancelPairingRequest();
    message.sessionId = object.sessionId ?? "0";
    return message;
  },
};

function createBaseCRemoteClientCancelPairingResponse(): CRemoteClientCancelPairingResponse {
  return {};
}

export const CRemoteClientCancelPairingResponse = {
  encode(_: CRemoteClientCancelPairingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCancelPairingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCancelPairingResponse();
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

  fromJSON(_: any): CRemoteClientCancelPairingResponse {
    return {};
  },

  toJSON(_: CRemoteClientCancelPairingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCancelPairingResponse>, I>>(
    base?: I,
  ): CRemoteClientCancelPairingResponse {
    return CRemoteClientCancelPairingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCancelPairingResponse>, I>>(
    _: I,
  ): CRemoteClientCancelPairingResponse {
    const message = createBaseCRemoteClientCancelPairingResponse();
    return message;
  },
};

function createBaseCRemoteClientRegisterStatusUpdateNotification(): CRemoteClientRegisterStatusUpdateNotification {
  return { sessionId: "0", steamid: "0", deviceId: "0" };
}

export const CRemoteClientRegisterStatusUpdateNotification = {
  encode(message: CRemoteClientRegisterStatusUpdateNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.deviceId !== "0") {
      writer.uint32(25).fixed64(message.deviceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientRegisterStatusUpdateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientRegisterStatusUpdateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.deviceId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientRegisterStatusUpdateNotification {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      deviceId: isSet(object.deviceId) ? String(object.deviceId) : "0",
    };
  },

  toJSON(message: CRemoteClientRegisterStatusUpdateNotification): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientRegisterStatusUpdateNotification>, I>>(
    base?: I,
  ): CRemoteClientRegisterStatusUpdateNotification {
    return CRemoteClientRegisterStatusUpdateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientRegisterStatusUpdateNotification>, I>>(
    object: I,
  ): CRemoteClientRegisterStatusUpdateNotification {
    const message = createBaseCRemoteClientRegisterStatusUpdateNotification();
    message.sessionId = object.sessionId ?? "0";
    message.steamid = object.steamid ?? "0";
    message.deviceId = object.deviceId ?? "0";
    return message;
  },
};

function createBaseCRemoteClientUnregisterStatusUpdateNotification(): CRemoteClientUnregisterStatusUpdateNotification {
  return { sessionId: "0", steamid: "0" };
}

export const CRemoteClientUnregisterStatusUpdateNotification = {
  encode(
    message: CRemoteClientUnregisterStatusUpdateNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientUnregisterStatusUpdateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientUnregisterStatusUpdateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientUnregisterStatusUpdateNotification {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CRemoteClientUnregisterStatusUpdateNotification): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientUnregisterStatusUpdateNotification>, I>>(
    base?: I,
  ): CRemoteClientUnregisterStatusUpdateNotification {
    return CRemoteClientUnregisterStatusUpdateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientUnregisterStatusUpdateNotification>, I>>(
    object: I,
  ): CRemoteClientUnregisterStatusUpdateNotification {
    const message = createBaseCRemoteClientUnregisterStatusUpdateNotification();
    message.sessionId = object.sessionId ?? "0";
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCRemoteClientOnlineNotification(): CRemoteClientOnlineNotification {
  return { steamid: "0", remoteClientId: "0" };
}

export const CRemoteClientOnlineNotification = {
  encode(message: CRemoteClientOnlineNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.remoteClientId !== "0") {
      writer.uint32(17).fixed64(message.remoteClientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientOnlineNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientOnlineNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.remoteClientId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientOnlineNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      remoteClientId: isSet(object.remoteClientId) ? String(object.remoteClientId) : "0",
    };
  },

  toJSON(message: CRemoteClientOnlineNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.remoteClientId !== undefined && (obj.remoteClientId = message.remoteClientId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientOnlineNotification>, I>>(base?: I): CRemoteClientOnlineNotification {
    return CRemoteClientOnlineNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientOnlineNotification>, I>>(
    object: I,
  ): CRemoteClientOnlineNotification {
    const message = createBaseCRemoteClientOnlineNotification();
    message.steamid = object.steamid ?? "0";
    message.remoteClientId = object.remoteClientId ?? "0";
    return message;
  },
};

function createBaseCRemoteClientRemotePacketNotification(): CRemoteClientRemotePacketNotification {
  return { sessionId: "0", steamid: "0", payload: Buffer.alloc(0) };
}

export const CRemoteClientRemotePacketNotification = {
  encode(message: CRemoteClientRemotePacketNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(34).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientRemotePacketNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientRemotePacketNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.payload = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientRemotePacketNotification {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientRemotePacketNotification): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientRemotePacketNotification>, I>>(
    base?: I,
  ): CRemoteClientRemotePacketNotification {
    return CRemoteClientRemotePacketNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientRemotePacketNotification>, I>>(
    object: I,
  ): CRemoteClientRemotePacketNotification {
    const message = createBaseCRemoteClientRemotePacketNotification();
    message.sessionId = object.sessionId ?? "0";
    message.steamid = object.steamid ?? "0";
    message.payload = object.payload ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemoteClientReplyPacketNotification(): CRemoteClientReplyPacketNotification {
  return { sessionId: "0", payload: Buffer.alloc(0) };
}

export const CRemoteClientReplyPacketNotification = {
  encode(message: CRemoteClientReplyPacketNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientReplyPacketNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientReplyPacketNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.payload = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientReplyPacketNotification {
    return {
      sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0",
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientReplyPacketNotification): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientReplyPacketNotification>, I>>(
    base?: I,
  ): CRemoteClientReplyPacketNotification {
    return CRemoteClientReplyPacketNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientReplyPacketNotification>, I>>(
    object: I,
  ): CRemoteClientReplyPacketNotification {
    const message = createBaseCRemoteClientReplyPacketNotification();
    message.sessionId = object.sessionId ?? "0";
    message.payload = object.payload ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemoteClientGetRepliesRequest(): CRemoteClientGetRepliesRequest {
  return { sessionId: "0" };
}

export const CRemoteClientGetRepliesRequest = {
  encode(message: CRemoteClientGetRepliesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "0") {
      writer.uint32(9).fixed64(message.sessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientGetRepliesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientGetRepliesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientGetRepliesRequest {
    return { sessionId: isSet(object.sessionId) ? String(object.sessionId) : "0" };
  },

  toJSON(message: CRemoteClientGetRepliesRequest): unknown {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientGetRepliesRequest>, I>>(base?: I): CRemoteClientGetRepliesRequest {
    return CRemoteClientGetRepliesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientGetRepliesRequest>, I>>(
    object: I,
  ): CRemoteClientGetRepliesRequest {
    const message = createBaseCRemoteClientGetRepliesRequest();
    message.sessionId = object.sessionId ?? "0";
    return message;
  },
};

function createBaseCRemoteClientGetRepliesResponse(): CRemoteClientGetRepliesResponse {
  return { payload: [] };
}

export const CRemoteClientGetRepliesResponse = {
  encode(message: CRemoteClientGetRepliesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.payload) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientGetRepliesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientGetRepliesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientGetRepliesResponse {
    return {
      payload: Array.isArray(object?.payload) ? object.payload.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: CRemoteClientGetRepliesResponse): unknown {
    const obj: any = {};
    if (message.payload) {
      obj.payload = message.payload.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.payload = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientGetRepliesResponse>, I>>(base?: I): CRemoteClientGetRepliesResponse {
    return CRemoteClientGetRepliesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientGetRepliesResponse>, I>>(
    object: I,
  ): CRemoteClientGetRepliesResponse {
    const message = createBaseCRemoteClientGetRepliesResponse();
    message.payload = object.payload?.map((e) => e) || [];
    return message;
  },
};

function createBaseCRemoteClientAllocateTURNServerRequest(): CRemoteClientAllocateTURNServerRequest {
  return { cellid: 0, credentials: "" };
}

export const CRemoteClientAllocateTURNServerRequest = {
  encode(message: CRemoteClientAllocateTURNServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellid !== 0) {
      writer.uint32(8).uint32(message.cellid);
    }
    if (message.credentials !== "") {
      writer.uint32(18).string(message.credentials);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateTURNServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateTURNServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellid = reader.uint32();
          break;
        case 2:
          message.credentials = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientAllocateTURNServerRequest {
    return {
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      credentials: isSet(object.credentials) ? String(object.credentials) : "",
    };
  },

  toJSON(message: CRemoteClientAllocateTURNServerRequest): unknown {
    const obj: any = {};
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.credentials !== undefined && (obj.credentials = message.credentials);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateTURNServerRequest>, I>>(
    base?: I,
  ): CRemoteClientAllocateTURNServerRequest {
    return CRemoteClientAllocateTURNServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateTURNServerRequest>, I>>(
    object: I,
  ): CRemoteClientAllocateTURNServerRequest {
    const message = createBaseCRemoteClientAllocateTURNServerRequest();
    message.cellid = object.cellid ?? 0;
    message.credentials = object.credentials ?? "";
    return message;
  },
};

function createBaseCRemoteClientAllocateTURNServerResponse(): CRemoteClientAllocateTURNServerResponse {
  return { turnServer: "" };
}

export const CRemoteClientAllocateTURNServerResponse = {
  encode(message: CRemoteClientAllocateTURNServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.turnServer !== "") {
      writer.uint32(10).string(message.turnServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateTURNServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateTURNServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.turnServer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientAllocateTURNServerResponse {
    return { turnServer: isSet(object.turnServer) ? String(object.turnServer) : "" };
  },

  toJSON(message: CRemoteClientAllocateTURNServerResponse): unknown {
    const obj: any = {};
    message.turnServer !== undefined && (obj.turnServer = message.turnServer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateTURNServerResponse>, I>>(
    base?: I,
  ): CRemoteClientAllocateTURNServerResponse {
    return CRemoteClientAllocateTURNServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateTURNServerResponse>, I>>(
    object: I,
  ): CRemoteClientAllocateTURNServerResponse {
    const message = createBaseCRemoteClientAllocateTURNServerResponse();
    message.turnServer = object.turnServer ?? "";
    return message;
  },
};

function createBaseCRemoteClientAllocateRelayServerRequest(): CRemoteClientAllocateRelayServerRequest {
  return { cellid: 0, credentials: "" };
}

export const CRemoteClientAllocateRelayServerRequest = {
  encode(message: CRemoteClientAllocateRelayServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellid !== 0) {
      writer.uint32(8).uint32(message.cellid);
    }
    if (message.credentials !== "") {
      writer.uint32(18).string(message.credentials);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateRelayServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateRelayServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellid = reader.uint32();
          break;
        case 2:
          message.credentials = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientAllocateRelayServerRequest {
    return {
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      credentials: isSet(object.credentials) ? String(object.credentials) : "",
    };
  },

  toJSON(message: CRemoteClientAllocateRelayServerRequest): unknown {
    const obj: any = {};
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.credentials !== undefined && (obj.credentials = message.credentials);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateRelayServerRequest>, I>>(
    base?: I,
  ): CRemoteClientAllocateRelayServerRequest {
    return CRemoteClientAllocateRelayServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateRelayServerRequest>, I>>(
    object: I,
  ): CRemoteClientAllocateRelayServerRequest {
    const message = createBaseCRemoteClientAllocateRelayServerRequest();
    message.cellid = object.cellid ?? 0;
    message.credentials = object.credentials ?? "";
    return message;
  },
};

function createBaseCRemoteClientAllocateRelayServerResponse(): CRemoteClientAllocateRelayServerResponse {
  return { relayServer: "" };
}

export const CRemoteClientAllocateRelayServerResponse = {
  encode(message: CRemoteClientAllocateRelayServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relayServer !== "") {
      writer.uint32(10).string(message.relayServer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateRelayServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateRelayServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayServer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientAllocateRelayServerResponse {
    return { relayServer: isSet(object.relayServer) ? String(object.relayServer) : "" };
  },

  toJSON(message: CRemoteClientAllocateRelayServerResponse): unknown {
    const obj: any = {};
    message.relayServer !== undefined && (obj.relayServer = message.relayServer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateRelayServerResponse>, I>>(
    base?: I,
  ): CRemoteClientAllocateRelayServerResponse {
    return CRemoteClientAllocateRelayServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateRelayServerResponse>, I>>(
    object: I,
  ): CRemoteClientAllocateRelayServerResponse {
    const message = createBaseCRemoteClientAllocateRelayServerResponse();
    message.relayServer = object.relayServer ?? "";
    return message;
  },
};

function createBaseCRemoteClientAllocateSDRRequest(): CRemoteClientAllocateSDRRequest {
  return { appid: 0 };
}

export const CRemoteClientAllocateSDRRequest = {
  encode(message: CRemoteClientAllocateSDRRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateSDRRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateSDRRequest();
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

  fromJSON(object: any): CRemoteClientAllocateSDRRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CRemoteClientAllocateSDRRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateSDRRequest>, I>>(base?: I): CRemoteClientAllocateSDRRequest {
    return CRemoteClientAllocateSDRRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateSDRRequest>, I>>(
    object: I,
  ): CRemoteClientAllocateSDRRequest {
    const message = createBaseCRemoteClientAllocateSDRRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCRemoteClientAllocateSDRResponse(): CRemoteClientAllocateSDRResponse {
  return {};
}

export const CRemoteClientAllocateSDRResponse = {
  encode(_: CRemoteClientAllocateSDRResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientAllocateSDRResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientAllocateSDRResponse();
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

  fromJSON(_: any): CRemoteClientAllocateSDRResponse {
    return {};
  },

  toJSON(_: CRemoteClientAllocateSDRResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientAllocateSDRResponse>, I>>(
    base?: I,
  ): CRemoteClientAllocateSDRResponse {
    return CRemoteClientAllocateSDRResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientAllocateSDRResponse>, I>>(
    _: I,
  ): CRemoteClientAllocateSDRResponse {
    const message = createBaseCRemoteClientAllocateSDRResponse();
    return message;
  },
};

function createBaseCRemoteClientSteamBroadcastNotification(): CRemoteClientSteamBroadcastNotification {
  return { steamid: "0", clientid: "0", payload: Buffer.alloc(0) };
}

export const CRemoteClientSteamBroadcastNotification = {
  encode(message: CRemoteClientSteamBroadcastNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clientid !== "0") {
      writer.uint32(17).fixed64(message.clientid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientSteamBroadcastNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientSteamBroadcastNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.clientid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.payload = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientSteamBroadcastNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      clientid: isSet(object.clientid) ? String(object.clientid) : "0",
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientSteamBroadcastNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.clientid !== undefined && (obj.clientid = message.clientid);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientSteamBroadcastNotification>, I>>(
    base?: I,
  ): CRemoteClientSteamBroadcastNotification {
    return CRemoteClientSteamBroadcastNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientSteamBroadcastNotification>, I>>(
    object: I,
  ): CRemoteClientSteamBroadcastNotification {
    const message = createBaseCRemoteClientSteamBroadcastNotification();
    message.steamid = object.steamid ?? "0";
    message.clientid = object.clientid ?? "0";
    message.payload = object.payload ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemoteClientSteamToSteamNotification(): CRemoteClientSteamToSteamNotification {
  return { steamid: "0", srcClientid: "0", dstClientid: "0", secretid: 0, encryptedPayload: Buffer.alloc(0) };
}

export const CRemoteClientSteamToSteamNotification = {
  encode(message: CRemoteClientSteamToSteamNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.srcClientid !== "0") {
      writer.uint32(17).fixed64(message.srcClientid);
    }
    if (message.dstClientid !== "0") {
      writer.uint32(25).fixed64(message.dstClientid);
    }
    if (message.secretid !== 0) {
      writer.uint32(32).uint32(message.secretid);
    }
    if (message.encryptedPayload.length !== 0) {
      writer.uint32(42).bytes(message.encryptedPayload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientSteamToSteamNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientSteamToSteamNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.srcClientid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.dstClientid = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.secretid = reader.uint32();
          break;
        case 5:
          message.encryptedPayload = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientSteamToSteamNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      srcClientid: isSet(object.srcClientid) ? String(object.srcClientid) : "0",
      dstClientid: isSet(object.dstClientid) ? String(object.dstClientid) : "0",
      secretid: isSet(object.secretid) ? Number(object.secretid) : 0,
      encryptedPayload: isSet(object.encryptedPayload)
        ? Buffer.from(bytesFromBase64(object.encryptedPayload))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemoteClientSteamToSteamNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.srcClientid !== undefined && (obj.srcClientid = message.srcClientid);
    message.dstClientid !== undefined && (obj.dstClientid = message.dstClientid);
    message.secretid !== undefined && (obj.secretid = Math.round(message.secretid));
    message.encryptedPayload !== undefined &&
      (obj.encryptedPayload = base64FromBytes(
        message.encryptedPayload !== undefined ? message.encryptedPayload : Buffer.alloc(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientSteamToSteamNotification>, I>>(
    base?: I,
  ): CRemoteClientSteamToSteamNotification {
    return CRemoteClientSteamToSteamNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientSteamToSteamNotification>, I>>(
    object: I,
  ): CRemoteClientSteamToSteamNotification {
    const message = createBaseCRemoteClientSteamToSteamNotification();
    message.steamid = object.steamid ?? "0";
    message.srcClientid = object.srcClientid ?? "0";
    message.dstClientid = object.dstClientid ?? "0";
    message.secretid = object.secretid ?? 0;
    message.encryptedPayload = object.encryptedPayload ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemotePlaySessionStartedRequest(): CRemotePlaySessionStartedRequest {
  return {
    hostAccountId: 0,
    clientAccountId: 0,
    appid: 0,
    deviceFormFactor: 0,
    remotePlayTogether: false,
    guestSession: false,
  };
}

export const CRemotePlaySessionStartedRequest = {
  encode(message: CRemotePlaySessionStartedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostAccountId !== 0) {
      writer.uint32(8).uint32(message.hostAccountId);
    }
    if (message.clientAccountId !== 0) {
      writer.uint32(16).uint32(message.clientAccountId);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    if (message.deviceFormFactor !== 0) {
      writer.uint32(32).int32(message.deviceFormFactor);
    }
    if (message.remotePlayTogether === true) {
      writer.uint32(40).bool(message.remotePlayTogether);
    }
    if (message.guestSession === true) {
      writer.uint32(48).bool(message.guestSession);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlaySessionStartedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlaySessionStartedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostAccountId = reader.uint32();
          break;
        case 2:
          message.clientAccountId = reader.uint32();
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        case 4:
          message.deviceFormFactor = reader.int32();
          break;
        case 5:
          message.remotePlayTogether = reader.bool();
          break;
        case 6:
          message.guestSession = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlaySessionStartedRequest {
    return {
      hostAccountId: isSet(object.hostAccountId) ? Number(object.hostAccountId) : 0,
      clientAccountId: isSet(object.clientAccountId) ? Number(object.clientAccountId) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      deviceFormFactor: isSet(object.deviceFormFactor) ? Number(object.deviceFormFactor) : 0,
      remotePlayTogether: isSet(object.remotePlayTogether) ? Boolean(object.remotePlayTogether) : false,
      guestSession: isSet(object.guestSession) ? Boolean(object.guestSession) : false,
    };
  },

  toJSON(message: CRemotePlaySessionStartedRequest): unknown {
    const obj: any = {};
    message.hostAccountId !== undefined && (obj.hostAccountId = Math.round(message.hostAccountId));
    message.clientAccountId !== undefined && (obj.clientAccountId = Math.round(message.clientAccountId));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.deviceFormFactor !== undefined && (obj.deviceFormFactor = Math.round(message.deviceFormFactor));
    message.remotePlayTogether !== undefined && (obj.remotePlayTogether = message.remotePlayTogether);
    message.guestSession !== undefined && (obj.guestSession = message.guestSession);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlaySessionStartedRequest>, I>>(
    base?: I,
  ): CRemotePlaySessionStartedRequest {
    return CRemotePlaySessionStartedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlaySessionStartedRequest>, I>>(
    object: I,
  ): CRemotePlaySessionStartedRequest {
    const message = createBaseCRemotePlaySessionStartedRequest();
    message.hostAccountId = object.hostAccountId ?? 0;
    message.clientAccountId = object.clientAccountId ?? 0;
    message.appid = object.appid ?? 0;
    message.deviceFormFactor = object.deviceFormFactor ?? 0;
    message.remotePlayTogether = object.remotePlayTogether ?? false;
    message.guestSession = object.guestSession ?? false;
    return message;
  },
};

function createBaseCRemotePlaySessionStartedResponse(): CRemotePlaySessionStartedResponse {
  return { recordId: "0" };
}

export const CRemotePlaySessionStartedResponse = {
  encode(message: CRemotePlaySessionStartedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordId !== "0") {
      writer.uint32(9).fixed64(message.recordId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlaySessionStartedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlaySessionStartedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlaySessionStartedResponse {
    return { recordId: isSet(object.recordId) ? String(object.recordId) : "0" };
  },

  toJSON(message: CRemotePlaySessionStartedResponse): unknown {
    const obj: any = {};
    message.recordId !== undefined && (obj.recordId = message.recordId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlaySessionStartedResponse>, I>>(
    base?: I,
  ): CRemotePlaySessionStartedResponse {
    return CRemotePlaySessionStartedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlaySessionStartedResponse>, I>>(
    object: I,
  ): CRemotePlaySessionStartedResponse {
    const message = createBaseCRemotePlaySessionStartedResponse();
    message.recordId = object.recordId ?? "0";
    return message;
  },
};

function createBaseCRemotePlaySessionStoppedNotification(): CRemotePlaySessionStoppedNotification {
  return { recordId: "0", usedX264: false, usedH264: false, usedHevc: false };
}

export const CRemotePlaySessionStoppedNotification = {
  encode(message: CRemotePlaySessionStoppedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordId !== "0") {
      writer.uint32(9).fixed64(message.recordId);
    }
    if (message.usedX264 === true) {
      writer.uint32(16).bool(message.usedX264);
    }
    if (message.usedH264 === true) {
      writer.uint32(24).bool(message.usedH264);
    }
    if (message.usedHevc === true) {
      writer.uint32(32).bool(message.usedHevc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlaySessionStoppedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlaySessionStoppedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.usedX264 = reader.bool();
          break;
        case 3:
          message.usedH264 = reader.bool();
          break;
        case 4:
          message.usedHevc = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlaySessionStoppedNotification {
    return {
      recordId: isSet(object.recordId) ? String(object.recordId) : "0",
      usedX264: isSet(object.usedX264) ? Boolean(object.usedX264) : false,
      usedH264: isSet(object.usedH264) ? Boolean(object.usedH264) : false,
      usedHevc: isSet(object.usedHevc) ? Boolean(object.usedHevc) : false,
    };
  },

  toJSON(message: CRemotePlaySessionStoppedNotification): unknown {
    const obj: any = {};
    message.recordId !== undefined && (obj.recordId = message.recordId);
    message.usedX264 !== undefined && (obj.usedX264 = message.usedX264);
    message.usedH264 !== undefined && (obj.usedH264 = message.usedH264);
    message.usedHevc !== undefined && (obj.usedHevc = message.usedHevc);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlaySessionStoppedNotification>, I>>(
    base?: I,
  ): CRemotePlaySessionStoppedNotification {
    return CRemotePlaySessionStoppedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlaySessionStoppedNotification>, I>>(
    object: I,
  ): CRemotePlaySessionStoppedNotification {
    const message = createBaseCRemotePlaySessionStoppedNotification();
    message.recordId = object.recordId ?? "0";
    message.usedX264 = object.usedX264 ?? false;
    message.usedH264 = object.usedH264 ?? false;
    message.usedHevc = object.usedHevc ?? false;
    return message;
  },
};

function createBaseCRemotePlayTogetherNotification(): CRemotePlayTogetherNotification {
  return { steamid: "0", groupUpdated: undefined };
}

export const CRemotePlayTogetherNotification = {
  encode(message: CRemotePlayTogetherNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.groupUpdated !== undefined) {
      CRemotePlayTogetherNotification_GroupUpdated.encode(message.groupUpdated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.groupUpdated = CRemotePlayTogetherNotification_GroupUpdated.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherNotification {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      groupUpdated: isSet(object.groupUpdated)
        ? CRemotePlayTogetherNotification_GroupUpdated.fromJSON(object.groupUpdated)
        : undefined,
    };
  },

  toJSON(message: CRemotePlayTogetherNotification): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.groupUpdated !== undefined && (obj.groupUpdated = message.groupUpdated
      ? CRemotePlayTogetherNotification_GroupUpdated.toJSON(message.groupUpdated)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherNotification>, I>>(base?: I): CRemotePlayTogetherNotification {
    return CRemotePlayTogetherNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherNotification>, I>>(
    object: I,
  ): CRemotePlayTogetherNotification {
    const message = createBaseCRemotePlayTogetherNotification();
    message.steamid = object.steamid ?? "0";
    message.groupUpdated = (object.groupUpdated !== undefined && object.groupUpdated !== null)
      ? CRemotePlayTogetherNotification_GroupUpdated.fromPartial(object.groupUpdated)
      : undefined;
    return message;
  },
};

function createBaseCRemotePlayTogetherNotification_Player(): CRemotePlayTogetherNotification_Player {
  return {
    steamid: "0",
    guestid: 0,
    avatarHash: Buffer.alloc(0),
    keyboardEnabled: false,
    mouseEnabled: false,
    controllerEnabled: false,
  };
}

export const CRemotePlayTogetherNotification_Player = {
  encode(message: CRemotePlayTogetherNotification_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.guestid !== 0) {
      writer.uint32(16).uint32(message.guestid);
    }
    if (message.avatarHash.length !== 0) {
      writer.uint32(26).bytes(message.avatarHash);
    }
    if (message.keyboardEnabled === true) {
      writer.uint32(32).bool(message.keyboardEnabled);
    }
    if (message.mouseEnabled === true) {
      writer.uint32(40).bool(message.mouseEnabled);
    }
    if (message.controllerEnabled === true) {
      writer.uint32(48).bool(message.controllerEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherNotification_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherNotification_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.guestid = reader.uint32();
          break;
        case 3:
          message.avatarHash = reader.bytes() as Buffer;
          break;
        case 4:
          message.keyboardEnabled = reader.bool();
          break;
        case 5:
          message.mouseEnabled = reader.bool();
          break;
        case 6:
          message.controllerEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherNotification_Player {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      guestid: isSet(object.guestid) ? Number(object.guestid) : 0,
      avatarHash: isSet(object.avatarHash) ? Buffer.from(bytesFromBase64(object.avatarHash)) : Buffer.alloc(0),
      keyboardEnabled: isSet(object.keyboardEnabled) ? Boolean(object.keyboardEnabled) : false,
      mouseEnabled: isSet(object.mouseEnabled) ? Boolean(object.mouseEnabled) : false,
      controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false,
    };
  },

  toJSON(message: CRemotePlayTogetherNotification_Player): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.guestid !== undefined && (obj.guestid = Math.round(message.guestid));
    message.avatarHash !== undefined &&
      (obj.avatarHash = base64FromBytes(message.avatarHash !== undefined ? message.avatarHash : Buffer.alloc(0)));
    message.keyboardEnabled !== undefined && (obj.keyboardEnabled = message.keyboardEnabled);
    message.mouseEnabled !== undefined && (obj.mouseEnabled = message.mouseEnabled);
    message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_Player>, I>>(
    base?: I,
  ): CRemotePlayTogetherNotification_Player {
    return CRemotePlayTogetherNotification_Player.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_Player>, I>>(
    object: I,
  ): CRemotePlayTogetherNotification_Player {
    const message = createBaseCRemotePlayTogetherNotification_Player();
    message.steamid = object.steamid ?? "0";
    message.guestid = object.guestid ?? 0;
    message.avatarHash = object.avatarHash ?? Buffer.alloc(0);
    message.keyboardEnabled = object.keyboardEnabled ?? false;
    message.mouseEnabled = object.mouseEnabled ?? false;
    message.controllerEnabled = object.controllerEnabled ?? false;
    return message;
  },
};

function createBaseCRemotePlayTogetherNotification_ControllerSlotObsolete(): CRemotePlayTogetherNotification_ControllerSlotObsolete {
  return { slotid: 0, steamid: "0" };
}

export const CRemotePlayTogetherNotification_ControllerSlotObsolete = {
  encode(
    message: CRemotePlayTogetherNotification_ControllerSlotObsolete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slotid !== 0) {
      writer.uint32(8).uint32(message.slotid);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherNotification_ControllerSlotObsolete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherNotification_ControllerSlotObsolete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slotid = reader.uint32();
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherNotification_ControllerSlotObsolete {
    return {
      slotid: isSet(object.slotid) ? Number(object.slotid) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CRemotePlayTogetherNotification_ControllerSlotObsolete): unknown {
    const obj: any = {};
    message.slotid !== undefined && (obj.slotid = Math.round(message.slotid));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_ControllerSlotObsolete>, I>>(
    base?: I,
  ): CRemotePlayTogetherNotification_ControllerSlotObsolete {
    return CRemotePlayTogetherNotification_ControllerSlotObsolete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_ControllerSlotObsolete>, I>>(
    object: I,
  ): CRemotePlayTogetherNotification_ControllerSlotObsolete {
    const message = createBaseCRemotePlayTogetherNotification_ControllerSlotObsolete();
    message.slotid = object.slotid ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCRemotePlayTogetherNotification_ControllerSlot(): CRemotePlayTogetherNotification_ControllerSlot {
  return { slotid: 0, player: undefined, controllerType: 0 };
}

export const CRemotePlayTogetherNotification_ControllerSlot = {
  encode(
    message: CRemotePlayTogetherNotification_ControllerSlot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slotid !== 0) {
      writer.uint32(8).uint32(message.slotid);
    }
    if (message.player !== undefined) {
      CRemotePlayTogetherNotification_Player.encode(message.player, writer.uint32(18).fork()).ldelim();
    }
    if (message.controllerType !== 0) {
      writer.uint32(24).int32(message.controllerType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherNotification_ControllerSlot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherNotification_ControllerSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slotid = reader.uint32();
          break;
        case 2:
          message.player = CRemotePlayTogetherNotification_Player.decode(reader, reader.uint32());
          break;
        case 3:
          message.controllerType = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherNotification_ControllerSlot {
    return {
      slotid: isSet(object.slotid) ? Number(object.slotid) : 0,
      player: isSet(object.player) ? CRemotePlayTogetherNotification_Player.fromJSON(object.player) : undefined,
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
    };
  },

  toJSON(message: CRemotePlayTogetherNotification_ControllerSlot): unknown {
    const obj: any = {};
    message.slotid !== undefined && (obj.slotid = Math.round(message.slotid));
    message.player !== undefined &&
      (obj.player = message.player ? CRemotePlayTogetherNotification_Player.toJSON(message.player) : undefined);
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_ControllerSlot>, I>>(
    base?: I,
  ): CRemotePlayTogetherNotification_ControllerSlot {
    return CRemotePlayTogetherNotification_ControllerSlot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_ControllerSlot>, I>>(
    object: I,
  ): CRemotePlayTogetherNotification_ControllerSlot {
    const message = createBaseCRemotePlayTogetherNotification_ControllerSlot();
    message.slotid = object.slotid ?? 0;
    message.player = (object.player !== undefined && object.player !== null)
      ? CRemotePlayTogetherNotification_Player.fromPartial(object.player)
      : undefined;
    message.controllerType = object.controllerType ?? 0;
    return message;
  },
};

function createBaseCRemotePlayTogetherNotification_GroupUpdated(): CRemotePlayTogetherNotification_GroupUpdated {
  return {
    hostSteamid: "0",
    hostClientid: "0",
    playersObsolete: [],
    hostGameid: "0",
    controllerSlotsObsolete: [],
    hasNewPlayers: false,
    playerSlots: [],
    controllerSlots: [],
  };
}

export const CRemotePlayTogetherNotification_GroupUpdated = {
  encode(message: CRemotePlayTogetherNotification_GroupUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostSteamid !== "0") {
      writer.uint32(9).fixed64(message.hostSteamid);
    }
    if (message.hostClientid !== "0") {
      writer.uint32(17).fixed64(message.hostClientid);
    }
    writer.uint32(26).fork();
    for (const v of message.playersObsolete) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.hostGameid !== "0") {
      writer.uint32(33).fixed64(message.hostGameid);
    }
    for (const v of message.controllerSlotsObsolete) {
      CRemotePlayTogetherNotification_ControllerSlotObsolete.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.hasNewPlayers === true) {
      writer.uint32(48).bool(message.hasNewPlayers);
    }
    for (const v of message.playerSlots) {
      CRemotePlayTogetherNotification_Player.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.controllerSlots) {
      CRemotePlayTogetherNotification_ControllerSlot.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherNotification_GroupUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherNotification_GroupUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostSteamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.hostClientid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.playersObsolete.push(longToString(reader.fixed64() as Long));
            }
          } else {
            message.playersObsolete.push(longToString(reader.fixed64() as Long));
          }
          break;
        case 4:
          message.hostGameid = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.controllerSlotsObsolete.push(
            CRemotePlayTogetherNotification_ControllerSlotObsolete.decode(reader, reader.uint32()),
          );
          break;
        case 6:
          message.hasNewPlayers = reader.bool();
          break;
        case 7:
          message.playerSlots.push(CRemotePlayTogetherNotification_Player.decode(reader, reader.uint32()));
          break;
        case 8:
          message.controllerSlots.push(CRemotePlayTogetherNotification_ControllerSlot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherNotification_GroupUpdated {
    return {
      hostSteamid: isSet(object.hostSteamid) ? String(object.hostSteamid) : "0",
      hostClientid: isSet(object.hostClientid) ? String(object.hostClientid) : "0",
      playersObsolete: Array.isArray(object?.playersObsolete) ? object.playersObsolete.map((e: any) => String(e)) : [],
      hostGameid: isSet(object.hostGameid) ? String(object.hostGameid) : "0",
      controllerSlotsObsolete: Array.isArray(object?.controllerSlotsObsolete)
        ? object.controllerSlotsObsolete.map((e: any) =>
          CRemotePlayTogetherNotification_ControllerSlotObsolete.fromJSON(e)
        )
        : [],
      hasNewPlayers: isSet(object.hasNewPlayers) ? Boolean(object.hasNewPlayers) : false,
      playerSlots: Array.isArray(object?.playerSlots)
        ? object.playerSlots.map((e: any) => CRemotePlayTogetherNotification_Player.fromJSON(e))
        : [],
      controllerSlots: Array.isArray(object?.controllerSlots)
        ? object.controllerSlots.map((e: any) => CRemotePlayTogetherNotification_ControllerSlot.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CRemotePlayTogetherNotification_GroupUpdated): unknown {
    const obj: any = {};
    message.hostSteamid !== undefined && (obj.hostSteamid = message.hostSteamid);
    message.hostClientid !== undefined && (obj.hostClientid = message.hostClientid);
    if (message.playersObsolete) {
      obj.playersObsolete = message.playersObsolete.map((e) => e);
    } else {
      obj.playersObsolete = [];
    }
    message.hostGameid !== undefined && (obj.hostGameid = message.hostGameid);
    if (message.controllerSlotsObsolete) {
      obj.controllerSlotsObsolete = message.controllerSlotsObsolete.map((e) =>
        e ? CRemotePlayTogetherNotification_ControllerSlotObsolete.toJSON(e) : undefined
      );
    } else {
      obj.controllerSlotsObsolete = [];
    }
    message.hasNewPlayers !== undefined && (obj.hasNewPlayers = message.hasNewPlayers);
    if (message.playerSlots) {
      obj.playerSlots = message.playerSlots.map((e) =>
        e ? CRemotePlayTogetherNotification_Player.toJSON(e) : undefined
      );
    } else {
      obj.playerSlots = [];
    }
    if (message.controllerSlots) {
      obj.controllerSlots = message.controllerSlots.map((e) =>
        e ? CRemotePlayTogetherNotification_ControllerSlot.toJSON(e) : undefined
      );
    } else {
      obj.controllerSlots = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_GroupUpdated>, I>>(
    base?: I,
  ): CRemotePlayTogetherNotification_GroupUpdated {
    return CRemotePlayTogetherNotification_GroupUpdated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherNotification_GroupUpdated>, I>>(
    object: I,
  ): CRemotePlayTogetherNotification_GroupUpdated {
    const message = createBaseCRemotePlayTogetherNotification_GroupUpdated();
    message.hostSteamid = object.hostSteamid ?? "0";
    message.hostClientid = object.hostClientid ?? "0";
    message.playersObsolete = object.playersObsolete?.map((e) => e) || [];
    message.hostGameid = object.hostGameid ?? "0";
    message.controllerSlotsObsolete =
      object.controllerSlotsObsolete?.map((e) =>
        CRemotePlayTogetherNotification_ControllerSlotObsolete.fromPartial(e)
      ) || [];
    message.hasNewPlayers = object.hasNewPlayers ?? false;
    message.playerSlots = object.playerSlots?.map((e) => CRemotePlayTogetherNotification_Player.fromPartial(e)) || [];
    message.controllerSlots =
      object.controllerSlots?.map((e) => CRemotePlayTogetherNotification_ControllerSlot.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCRemoteClientCreateRemotePlayTogetherInvitationRequest(): CRemoteClientCreateRemotePlayTogetherInvitationRequest {
  return { appid: 0, launchParameters: "" };
}

export const CRemoteClientCreateRemotePlayTogetherInvitationRequest = {
  encode(
    message: CRemoteClientCreateRemotePlayTogetherInvitationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.launchParameters !== "") {
      writer.uint32(18).string(message.launchParameters);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCreateRemotePlayTogetherInvitationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCreateRemotePlayTogetherInvitationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.launchParameters = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientCreateRemotePlayTogetherInvitationRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      launchParameters: isSet(object.launchParameters) ? String(object.launchParameters) : "",
    };
  },

  toJSON(message: CRemoteClientCreateRemotePlayTogetherInvitationRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.launchParameters !== undefined && (obj.launchParameters = message.launchParameters);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCreateRemotePlayTogetherInvitationRequest>, I>>(
    base?: I,
  ): CRemoteClientCreateRemotePlayTogetherInvitationRequest {
    return CRemoteClientCreateRemotePlayTogetherInvitationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCreateRemotePlayTogetherInvitationRequest>, I>>(
    object: I,
  ): CRemoteClientCreateRemotePlayTogetherInvitationRequest {
    const message = createBaseCRemoteClientCreateRemotePlayTogetherInvitationRequest();
    message.appid = object.appid ?? 0;
    message.launchParameters = object.launchParameters ?? "";
    return message;
  },
};

function createBaseCRemoteClientCreateRemotePlayTogetherInvitationResponse(): CRemoteClientCreateRemotePlayTogetherInvitationResponse {
  return { invitationCode: "" };
}

export const CRemoteClientCreateRemotePlayTogetherInvitationResponse = {
  encode(
    message: CRemoteClientCreateRemotePlayTogetherInvitationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.invitationCode !== "") {
      writer.uint32(10).string(message.invitationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientCreateRemotePlayTogetherInvitationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientCreateRemotePlayTogetherInvitationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitationCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientCreateRemotePlayTogetherInvitationResponse {
    return { invitationCode: isSet(object.invitationCode) ? String(object.invitationCode) : "" };
  },

  toJSON(message: CRemoteClientCreateRemotePlayTogetherInvitationResponse): unknown {
    const obj: any = {};
    message.invitationCode !== undefined && (obj.invitationCode = message.invitationCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientCreateRemotePlayTogetherInvitationResponse>, I>>(
    base?: I,
  ): CRemoteClientCreateRemotePlayTogetherInvitationResponse {
    return CRemoteClientCreateRemotePlayTogetherInvitationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientCreateRemotePlayTogetherInvitationResponse>, I>>(
    object: I,
  ): CRemoteClientCreateRemotePlayTogetherInvitationResponse {
    const message = createBaseCRemoteClientCreateRemotePlayTogetherInvitationResponse();
    message.invitationCode = object.invitationCode ?? "";
    return message;
  },
};

function createBaseCRemoteClientDeleteRemotePlayTogetherInvitationRequest(): CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
  return { invitationCode: "" };
}

export const CRemoteClientDeleteRemotePlayTogetherInvitationRequest = {
  encode(
    message: CRemoteClientDeleteRemotePlayTogetherInvitationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.invitationCode !== "") {
      writer.uint32(10).string(message.invitationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientDeleteRemotePlayTogetherInvitationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitationCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
    return { invitationCode: isSet(object.invitationCode) ? String(object.invitationCode) : "" };
  },

  toJSON(message: CRemoteClientDeleteRemotePlayTogetherInvitationRequest): unknown {
    const obj: any = {};
    message.invitationCode !== undefined && (obj.invitationCode = message.invitationCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientDeleteRemotePlayTogetherInvitationRequest>, I>>(
    base?: I,
  ): CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
    return CRemoteClientDeleteRemotePlayTogetherInvitationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientDeleteRemotePlayTogetherInvitationRequest>, I>>(
    object: I,
  ): CRemoteClientDeleteRemotePlayTogetherInvitationRequest {
    const message = createBaseCRemoteClientDeleteRemotePlayTogetherInvitationRequest();
    message.invitationCode = object.invitationCode ?? "";
    return message;
  },
};

function createBaseCRemoteClientDeleteRemotePlayTogetherInvitationResponse(): CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
  return {};
}

export const CRemoteClientDeleteRemotePlayTogetherInvitationResponse = {
  encode(
    _: CRemoteClientDeleteRemotePlayTogetherInvitationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientDeleteRemotePlayTogetherInvitationResponse();
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

  fromJSON(_: any): CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
    return {};
  },

  toJSON(_: CRemoteClientDeleteRemotePlayTogetherInvitationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientDeleteRemotePlayTogetherInvitationResponse>, I>>(
    base?: I,
  ): CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
    return CRemoteClientDeleteRemotePlayTogetherInvitationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientDeleteRemotePlayTogetherInvitationResponse>, I>>(
    _: I,
  ): CRemoteClientDeleteRemotePlayTogetherInvitationResponse {
    const message = createBaseCRemoteClientDeleteRemotePlayTogetherInvitationResponse();
    return message;
  },
};

function createBaseCRemoteClientLookupRemotePlayTogetherInvitationRequest(): CRemoteClientLookupRemotePlayTogetherInvitationRequest {
  return { invitationCode: "" };
}

export const CRemoteClientLookupRemotePlayTogetherInvitationRequest = {
  encode(
    message: CRemoteClientLookupRemotePlayTogetherInvitationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.invitationCode !== "") {
      writer.uint32(10).string(message.invitationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientLookupRemotePlayTogetherInvitationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientLookupRemotePlayTogetherInvitationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitationCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientLookupRemotePlayTogetherInvitationRequest {
    return { invitationCode: isSet(object.invitationCode) ? String(object.invitationCode) : "" };
  },

  toJSON(message: CRemoteClientLookupRemotePlayTogetherInvitationRequest): unknown {
    const obj: any = {};
    message.invitationCode !== undefined && (obj.invitationCode = message.invitationCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientLookupRemotePlayTogetherInvitationRequest>, I>>(
    base?: I,
  ): CRemoteClientLookupRemotePlayTogetherInvitationRequest {
    return CRemoteClientLookupRemotePlayTogetherInvitationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientLookupRemotePlayTogetherInvitationRequest>, I>>(
    object: I,
  ): CRemoteClientLookupRemotePlayTogetherInvitationRequest {
    const message = createBaseCRemoteClientLookupRemotePlayTogetherInvitationRequest();
    message.invitationCode = object.invitationCode ?? "";
    return message;
  },
};

function createBaseCRemoteClientLookupRemotePlayTogetherInvitationResponse(): CRemoteClientLookupRemotePlayTogetherInvitationResponse {
  return { invitationUrl: "" };
}

export const CRemoteClientLookupRemotePlayTogetherInvitationResponse = {
  encode(
    message: CRemoteClientLookupRemotePlayTogetherInvitationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.invitationUrl !== "") {
      writer.uint32(10).string(message.invitationUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteClientLookupRemotePlayTogetherInvitationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteClientLookupRemotePlayTogetherInvitationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitationUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteClientLookupRemotePlayTogetherInvitationResponse {
    return { invitationUrl: isSet(object.invitationUrl) ? String(object.invitationUrl) : "" };
  },

  toJSON(message: CRemoteClientLookupRemotePlayTogetherInvitationResponse): unknown {
    const obj: any = {};
    message.invitationUrl !== undefined && (obj.invitationUrl = message.invitationUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteClientLookupRemotePlayTogetherInvitationResponse>, I>>(
    base?: I,
  ): CRemoteClientLookupRemotePlayTogetherInvitationResponse {
    return CRemoteClientLookupRemotePlayTogetherInvitationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteClientLookupRemotePlayTogetherInvitationResponse>, I>>(
    object: I,
  ): CRemoteClientLookupRemotePlayTogetherInvitationResponse {
    const message = createBaseCRemoteClientLookupRemotePlayTogetherInvitationResponse();
    message.invitationUrl = object.invitationUrl ?? "";
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
