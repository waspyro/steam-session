/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CPartiesJoinPartyRequest {
  steamid: string;
  beaconId: string;
}

export interface CPartiesJoinPartyResponse {
  beaconId: string;
  connectString: string;
}

export interface CPartiesBeaconLocation {
  locationType: number;
  locationId: string;
}

export interface CPartiesCreateBeaconRequest {
  appid: number;
  numOpenSlots: number;
  locations: CPartiesBeaconLocation[];
  connectString: string;
  metadata: string;
}

export interface CPartiesCreateBeaconResponse {
  beaconId: string;
}

export interface CPartiesOnReservationCompletedRequest {
  beaconId: string;
  userSteamid: string;
}

export interface CPartiesOnReservationCompletedResponse {
  beaconId: string;
}

export interface CPartiesCancelReservationRequest {
  beaconId: string;
  userSteamid: string;
}

export interface CPartiesCancelReservationResponse {
  beaconId: string;
}

export interface CPartiesChangeNumOpenSlotsRequest {
  beaconId: string;
  numOpenSlots: number;
}

export interface CPartiesChangeNumOpenSlotsResponse {
  beaconId: string;
}

export interface CPartiesDestroyBeaconRequest {
  beaconId: string;
}

export interface CPartiesDestroyBeaconResponse {
  beaconId: string;
}

function createBaseCPartiesJoinPartyRequest(): CPartiesJoinPartyRequest {
  return { steamid: "0", beaconId: "0" };
}

export const CPartiesJoinPartyRequest = {
  encode(message: CPartiesJoinPartyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.beaconId !== "0") {
      writer.uint32(16).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesJoinPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesJoinPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesJoinPartyRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0",
    };
  },

  toJSON(message: CPartiesJoinPartyRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesJoinPartyRequest>, I>>(base?: I): CPartiesJoinPartyRequest {
    return CPartiesJoinPartyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesJoinPartyRequest>, I>>(object: I): CPartiesJoinPartyRequest {
    const message = createBaseCPartiesJoinPartyRequest();
    message.steamid = object.steamid ?? "0";
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesJoinPartyResponse(): CPartiesJoinPartyResponse {
  return { beaconId: "0", connectString: "" };
}

export const CPartiesJoinPartyResponse = {
  encode(message: CPartiesJoinPartyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.connectString !== "") {
      writer.uint32(18).string(message.connectString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesJoinPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesJoinPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.connectString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesJoinPartyResponse {
    return {
      beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0",
      connectString: isSet(object.connectString) ? String(object.connectString) : "",
    };
  },

  toJSON(message: CPartiesJoinPartyResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    message.connectString !== undefined && (obj.connectString = message.connectString);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesJoinPartyResponse>, I>>(base?: I): CPartiesJoinPartyResponse {
    return CPartiesJoinPartyResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesJoinPartyResponse>, I>>(object: I): CPartiesJoinPartyResponse {
    const message = createBaseCPartiesJoinPartyResponse();
    message.beaconId = object.beaconId ?? "0";
    message.connectString = object.connectString ?? "";
    return message;
  },
};

function createBaseCPartiesBeaconLocation(): CPartiesBeaconLocation {
  return { locationType: 0, locationId: "0" };
}

export const CPartiesBeaconLocation = {
  encode(message: CPartiesBeaconLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locationType !== 0) {
      writer.uint32(8).uint32(message.locationType);
    }
    if (message.locationId !== "0") {
      writer.uint32(16).uint64(message.locationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesBeaconLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesBeaconLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locationType = reader.uint32();
          break;
        case 2:
          message.locationId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesBeaconLocation {
    return {
      locationType: isSet(object.locationType) ? Number(object.locationType) : 0,
      locationId: isSet(object.locationId) ? String(object.locationId) : "0",
    };
  },

  toJSON(message: CPartiesBeaconLocation): unknown {
    const obj: any = {};
    message.locationType !== undefined && (obj.locationType = Math.round(message.locationType));
    message.locationId !== undefined && (obj.locationId = message.locationId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesBeaconLocation>, I>>(base?: I): CPartiesBeaconLocation {
    return CPartiesBeaconLocation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesBeaconLocation>, I>>(object: I): CPartiesBeaconLocation {
    const message = createBaseCPartiesBeaconLocation();
    message.locationType = object.locationType ?? 0;
    message.locationId = object.locationId ?? "0";
    return message;
  },
};

function createBaseCPartiesCreateBeaconRequest(): CPartiesCreateBeaconRequest {
  return { appid: 0, numOpenSlots: 0, locations: [], connectString: "", metadata: "" };
}

export const CPartiesCreateBeaconRequest = {
  encode(message: CPartiesCreateBeaconRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.numOpenSlots !== 0) {
      writer.uint32(16).uint32(message.numOpenSlots);
    }
    for (const v of message.locations) {
      CPartiesBeaconLocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.connectString !== "") {
      writer.uint32(34).string(message.connectString);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesCreateBeaconRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesCreateBeaconRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.numOpenSlots = reader.uint32();
          break;
        case 3:
          message.locations.push(CPartiesBeaconLocation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.connectString = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesCreateBeaconRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      numOpenSlots: isSet(object.numOpenSlots) ? Number(object.numOpenSlots) : 0,
      locations: Array.isArray(object?.locations)
        ? object.locations.map((e: any) => CPartiesBeaconLocation.fromJSON(e))
        : [],
      connectString: isSet(object.connectString) ? String(object.connectString) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
    };
  },

  toJSON(message: CPartiesCreateBeaconRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.numOpenSlots !== undefined && (obj.numOpenSlots = Math.round(message.numOpenSlots));
    if (message.locations) {
      obj.locations = message.locations.map((e) => e ? CPartiesBeaconLocation.toJSON(e) : undefined);
    } else {
      obj.locations = [];
    }
    message.connectString !== undefined && (obj.connectString = message.connectString);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesCreateBeaconRequest>, I>>(base?: I): CPartiesCreateBeaconRequest {
    return CPartiesCreateBeaconRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesCreateBeaconRequest>, I>>(object: I): CPartiesCreateBeaconRequest {
    const message = createBaseCPartiesCreateBeaconRequest();
    message.appid = object.appid ?? 0;
    message.numOpenSlots = object.numOpenSlots ?? 0;
    message.locations = object.locations?.map((e) => CPartiesBeaconLocation.fromPartial(e)) || [];
    message.connectString = object.connectString ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
};

function createBaseCPartiesCreateBeaconResponse(): CPartiesCreateBeaconResponse {
  return { beaconId: "0" };
}

export const CPartiesCreateBeaconResponse = {
  encode(message: CPartiesCreateBeaconResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesCreateBeaconResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesCreateBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesCreateBeaconResponse {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesCreateBeaconResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesCreateBeaconResponse>, I>>(base?: I): CPartiesCreateBeaconResponse {
    return CPartiesCreateBeaconResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesCreateBeaconResponse>, I>>(object: I): CPartiesCreateBeaconResponse {
    const message = createBaseCPartiesCreateBeaconResponse();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesOnReservationCompletedRequest(): CPartiesOnReservationCompletedRequest {
  return { beaconId: "0", userSteamid: "0" };
}

export const CPartiesOnReservationCompletedRequest = {
  encode(message: CPartiesOnReservationCompletedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.userSteamid !== "0") {
      writer.uint32(17).fixed64(message.userSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesOnReservationCompletedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesOnReservationCompletedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.userSteamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesOnReservationCompletedRequest {
    return {
      beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0",
      userSteamid: isSet(object.userSteamid) ? String(object.userSteamid) : "0",
    };
  },

  toJSON(message: CPartiesOnReservationCompletedRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    message.userSteamid !== undefined && (obj.userSteamid = message.userSteamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesOnReservationCompletedRequest>, I>>(
    base?: I,
  ): CPartiesOnReservationCompletedRequest {
    return CPartiesOnReservationCompletedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesOnReservationCompletedRequest>, I>>(
    object: I,
  ): CPartiesOnReservationCompletedRequest {
    const message = createBaseCPartiesOnReservationCompletedRequest();
    message.beaconId = object.beaconId ?? "0";
    message.userSteamid = object.userSteamid ?? "0";
    return message;
  },
};

function createBaseCPartiesOnReservationCompletedResponse(): CPartiesOnReservationCompletedResponse {
  return { beaconId: "0" };
}

export const CPartiesOnReservationCompletedResponse = {
  encode(message: CPartiesOnReservationCompletedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesOnReservationCompletedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesOnReservationCompletedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesOnReservationCompletedResponse {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesOnReservationCompletedResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesOnReservationCompletedResponse>, I>>(
    base?: I,
  ): CPartiesOnReservationCompletedResponse {
    return CPartiesOnReservationCompletedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesOnReservationCompletedResponse>, I>>(
    object: I,
  ): CPartiesOnReservationCompletedResponse {
    const message = createBaseCPartiesOnReservationCompletedResponse();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesCancelReservationRequest(): CPartiesCancelReservationRequest {
  return { beaconId: "0", userSteamid: "0" };
}

export const CPartiesCancelReservationRequest = {
  encode(message: CPartiesCancelReservationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.userSteamid !== "0") {
      writer.uint32(17).fixed64(message.userSteamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesCancelReservationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesCancelReservationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.userSteamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesCancelReservationRequest {
    return {
      beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0",
      userSteamid: isSet(object.userSteamid) ? String(object.userSteamid) : "0",
    };
  },

  toJSON(message: CPartiesCancelReservationRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    message.userSteamid !== undefined && (obj.userSteamid = message.userSteamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesCancelReservationRequest>, I>>(
    base?: I,
  ): CPartiesCancelReservationRequest {
    return CPartiesCancelReservationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesCancelReservationRequest>, I>>(
    object: I,
  ): CPartiesCancelReservationRequest {
    const message = createBaseCPartiesCancelReservationRequest();
    message.beaconId = object.beaconId ?? "0";
    message.userSteamid = object.userSteamid ?? "0";
    return message;
  },
};

function createBaseCPartiesCancelReservationResponse(): CPartiesCancelReservationResponse {
  return { beaconId: "0" };
}

export const CPartiesCancelReservationResponse = {
  encode(message: CPartiesCancelReservationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesCancelReservationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesCancelReservationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesCancelReservationResponse {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesCancelReservationResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesCancelReservationResponse>, I>>(
    base?: I,
  ): CPartiesCancelReservationResponse {
    return CPartiesCancelReservationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesCancelReservationResponse>, I>>(
    object: I,
  ): CPartiesCancelReservationResponse {
    const message = createBaseCPartiesCancelReservationResponse();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesChangeNumOpenSlotsRequest(): CPartiesChangeNumOpenSlotsRequest {
  return { beaconId: "0", numOpenSlots: 0 };
}

export const CPartiesChangeNumOpenSlotsRequest = {
  encode(message: CPartiesChangeNumOpenSlotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    if (message.numOpenSlots !== 0) {
      writer.uint32(16).uint32(message.numOpenSlots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesChangeNumOpenSlotsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesChangeNumOpenSlotsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.numOpenSlots = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesChangeNumOpenSlotsRequest {
    return {
      beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0",
      numOpenSlots: isSet(object.numOpenSlots) ? Number(object.numOpenSlots) : 0,
    };
  },

  toJSON(message: CPartiesChangeNumOpenSlotsRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    message.numOpenSlots !== undefined && (obj.numOpenSlots = Math.round(message.numOpenSlots));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesChangeNumOpenSlotsRequest>, I>>(
    base?: I,
  ): CPartiesChangeNumOpenSlotsRequest {
    return CPartiesChangeNumOpenSlotsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesChangeNumOpenSlotsRequest>, I>>(
    object: I,
  ): CPartiesChangeNumOpenSlotsRequest {
    const message = createBaseCPartiesChangeNumOpenSlotsRequest();
    message.beaconId = object.beaconId ?? "0";
    message.numOpenSlots = object.numOpenSlots ?? 0;
    return message;
  },
};

function createBaseCPartiesChangeNumOpenSlotsResponse(): CPartiesChangeNumOpenSlotsResponse {
  return { beaconId: "0" };
}

export const CPartiesChangeNumOpenSlotsResponse = {
  encode(message: CPartiesChangeNumOpenSlotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesChangeNumOpenSlotsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesChangeNumOpenSlotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesChangeNumOpenSlotsResponse {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesChangeNumOpenSlotsResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesChangeNumOpenSlotsResponse>, I>>(
    base?: I,
  ): CPartiesChangeNumOpenSlotsResponse {
    return CPartiesChangeNumOpenSlotsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesChangeNumOpenSlotsResponse>, I>>(
    object: I,
  ): CPartiesChangeNumOpenSlotsResponse {
    const message = createBaseCPartiesChangeNumOpenSlotsResponse();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesDestroyBeaconRequest(): CPartiesDestroyBeaconRequest {
  return { beaconId: "0" };
}

export const CPartiesDestroyBeaconRequest = {
  encode(message: CPartiesDestroyBeaconRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesDestroyBeaconRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesDestroyBeaconRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesDestroyBeaconRequest {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesDestroyBeaconRequest): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesDestroyBeaconRequest>, I>>(base?: I): CPartiesDestroyBeaconRequest {
    return CPartiesDestroyBeaconRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesDestroyBeaconRequest>, I>>(object: I): CPartiesDestroyBeaconRequest {
    const message = createBaseCPartiesDestroyBeaconRequest();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

function createBaseCPartiesDestroyBeaconResponse(): CPartiesDestroyBeaconResponse {
  return { beaconId: "0" };
}

export const CPartiesDestroyBeaconResponse = {
  encode(message: CPartiesDestroyBeaconResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beaconId !== "0") {
      writer.uint32(8).uint64(message.beaconId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPartiesDestroyBeaconResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPartiesDestroyBeaconResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaconId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPartiesDestroyBeaconResponse {
    return { beaconId: isSet(object.beaconId) ? String(object.beaconId) : "0" };
  },

  toJSON(message: CPartiesDestroyBeaconResponse): unknown {
    const obj: any = {};
    message.beaconId !== undefined && (obj.beaconId = message.beaconId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPartiesDestroyBeaconResponse>, I>>(base?: I): CPartiesDestroyBeaconResponse {
    return CPartiesDestroyBeaconResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPartiesDestroyBeaconResponse>, I>>(
    object: I,
  ): CPartiesDestroyBeaconResponse {
    const message = createBaseCPartiesDestroyBeaconResponse();
    message.beaconId = object.beaconId ?? "0";
    return message;
  },
};

export interface Parties {
  JoinParty(request: CPartiesJoinPartyRequest): Promise<CPartiesJoinPartyResponse>;
  CreateBeacon(request: CPartiesCreateBeaconRequest): Promise<CPartiesCreateBeaconResponse>;
  OnReservationCompleted(
    request: CPartiesOnReservationCompletedRequest,
  ): Promise<CPartiesOnReservationCompletedResponse>;
  CancelReservation(request: CPartiesCancelReservationRequest): Promise<CPartiesCancelReservationResponse>;
  ChangeNumOpenSlots(request: CPartiesChangeNumOpenSlotsRequest): Promise<CPartiesChangeNumOpenSlotsResponse>;
  DestroyBeacon(request: CPartiesDestroyBeaconRequest): Promise<CPartiesDestroyBeaconResponse>;
}

export class PartiesClientImpl implements Parties {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Parties";
    this.rpc = rpc;
    this.JoinParty = this.JoinParty.bind(this);
    this.CreateBeacon = this.CreateBeacon.bind(this);
    this.OnReservationCompleted = this.OnReservationCompleted.bind(this);
    this.CancelReservation = this.CancelReservation.bind(this);
    this.ChangeNumOpenSlots = this.ChangeNumOpenSlots.bind(this);
    this.DestroyBeacon = this.DestroyBeacon.bind(this);
  }
  JoinParty(request: CPartiesJoinPartyRequest): Promise<CPartiesJoinPartyResponse> {
    const data = CPartiesJoinPartyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinParty", data);
    return promise.then((data) => CPartiesJoinPartyResponse.decode(new _m0.Reader(data)));
  }

  CreateBeacon(request: CPartiesCreateBeaconRequest): Promise<CPartiesCreateBeaconResponse> {
    const data = CPartiesCreateBeaconRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBeacon", data);
    return promise.then((data) => CPartiesCreateBeaconResponse.decode(new _m0.Reader(data)));
  }

  OnReservationCompleted(
    request: CPartiesOnReservationCompletedRequest,
  ): Promise<CPartiesOnReservationCompletedResponse> {
    const data = CPartiesOnReservationCompletedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OnReservationCompleted", data);
    return promise.then((data) => CPartiesOnReservationCompletedResponse.decode(new _m0.Reader(data)));
  }

  CancelReservation(request: CPartiesCancelReservationRequest): Promise<CPartiesCancelReservationResponse> {
    const data = CPartiesCancelReservationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelReservation", data);
    return promise.then((data) => CPartiesCancelReservationResponse.decode(new _m0.Reader(data)));
  }

  ChangeNumOpenSlots(request: CPartiesChangeNumOpenSlotsRequest): Promise<CPartiesChangeNumOpenSlotsResponse> {
    const data = CPartiesChangeNumOpenSlotsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ChangeNumOpenSlots", data);
    return promise.then((data) => CPartiesChangeNumOpenSlotsResponse.decode(new _m0.Reader(data)));
  }

  DestroyBeacon(request: CPartiesDestroyBeaconRequest): Promise<CPartiesDestroyBeaconResponse> {
    const data = CPartiesDestroyBeaconRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DestroyBeacon", data);
    return promise.then((data) => CPartiesDestroyBeaconResponse.decode(new _m0.Reader(data)));
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
