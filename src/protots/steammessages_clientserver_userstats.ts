/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientGetUserStats {
  gameId: string;
  crcStats: number;
  schemaLocalVersion: number;
  steamIdForUser: string;
}

export interface CMsgClientGetUserStatsResponse {
  gameId: string;
  eresult: number;
  crcStats: number;
  schema: Buffer;
  stats: CMsgClientGetUserStatsResponse_Stats[];
  achievementBlocks: CMsgClientGetUserStatsResponse_AchievementBlocks[];
}

export interface CMsgClientGetUserStatsResponse_Stats {
  statId: number;
  statValue: number;
}

export interface CMsgClientGetUserStatsResponse_AchievementBlocks {
  achievementId: number;
  unlockTime: number[];
}

export interface CMsgClientStoreUserStatsResponse {
  gameId: string;
  eresult: number;
  crcStats: number;
  statsFailedValidation: CMsgClientStoreUserStatsResponse_StatsFailedValidation[];
  statsOutOfDate: boolean;
}

export interface CMsgClientStoreUserStatsResponse_StatsFailedValidation {
  statId: number;
  revertedStatValue: number;
}

export interface CMsgClientStoreUserStats2 {
  gameId: string;
  settorSteamId: string;
  setteeSteamId: string;
  crcStats: number;
  explicitReset: boolean;
  stats: CMsgClientStoreUserStats2_Stats[];
}

export interface CMsgClientStoreUserStats2_Stats {
  statId: number;
  statValue: number;
}

export interface CMsgClientStatsUpdated {
  steamId: string;
  gameId: string;
  crcStats: number;
  updatedStats: CMsgClientStatsUpdated_UpdatedStats[];
}

export interface CMsgClientStatsUpdated_UpdatedStats {
  statId: number;
  statValue: number;
}

export interface CMsgClientStoreUserStats {
  gameId: string;
  explicitReset: boolean;
  statsToStore: CMsgClientStoreUserStats_StatsToStore[];
}

export interface CMsgClientStoreUserStats_StatsToStore {
  statId: number;
  statValue: number;
}

function createBaseCMsgClientGetUserStats(): CMsgClientGetUserStats {
  return { gameId: "0", crcStats: 0, schemaLocalVersion: 0, steamIdForUser: "0" };
}

export const CMsgClientGetUserStats = {
  encode(message: CMsgClientGetUserStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(9).fixed64(message.gameId);
    }
    if (message.crcStats !== 0) {
      writer.uint32(16).uint32(message.crcStats);
    }
    if (message.schemaLocalVersion !== 0) {
      writer.uint32(24).int32(message.schemaLocalVersion);
    }
    if (message.steamIdForUser !== "0") {
      writer.uint32(33).fixed64(message.steamIdForUser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetUserStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetUserStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.crcStats = reader.uint32();
          break;
        case 3:
          message.schemaLocalVersion = reader.int32();
          break;
        case 4:
          message.steamIdForUser = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetUserStats {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      crcStats: isSet(object.crcStats) ? Number(object.crcStats) : 0,
      schemaLocalVersion: isSet(object.schemaLocalVersion) ? Number(object.schemaLocalVersion) : 0,
      steamIdForUser: isSet(object.steamIdForUser) ? String(object.steamIdForUser) : "0",
    };
  },

  toJSON(message: CMsgClientGetUserStats): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.crcStats !== undefined && (obj.crcStats = Math.round(message.crcStats));
    message.schemaLocalVersion !== undefined && (obj.schemaLocalVersion = Math.round(message.schemaLocalVersion));
    message.steamIdForUser !== undefined && (obj.steamIdForUser = message.steamIdForUser);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetUserStats>, I>>(base?: I): CMsgClientGetUserStats {
    return CMsgClientGetUserStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetUserStats>, I>>(object: I): CMsgClientGetUserStats {
    const message = createBaseCMsgClientGetUserStats();
    message.gameId = object.gameId ?? "0";
    message.crcStats = object.crcStats ?? 0;
    message.schemaLocalVersion = object.schemaLocalVersion ?? 0;
    message.steamIdForUser = object.steamIdForUser ?? "0";
    return message;
  },
};

function createBaseCMsgClientGetUserStatsResponse(): CMsgClientGetUserStatsResponse {
  return { gameId: "0", eresult: 0, crcStats: 0, schema: Buffer.alloc(0), stats: [], achievementBlocks: [] };
}

export const CMsgClientGetUserStatsResponse = {
  encode(message: CMsgClientGetUserStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(9).fixed64(message.gameId);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).int32(message.eresult);
    }
    if (message.crcStats !== 0) {
      writer.uint32(24).uint32(message.crcStats);
    }
    if (message.schema.length !== 0) {
      writer.uint32(34).bytes(message.schema);
    }
    for (const v of message.stats) {
      CMsgClientGetUserStatsResponse_Stats.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.achievementBlocks) {
      CMsgClientGetUserStatsResponse_AchievementBlocks.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetUserStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetUserStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.eresult = reader.int32();
          break;
        case 3:
          message.crcStats = reader.uint32();
          break;
        case 4:
          message.schema = reader.bytes() as Buffer;
          break;
        case 5:
          message.stats.push(CMsgClientGetUserStatsResponse_Stats.decode(reader, reader.uint32()));
          break;
        case 6:
          message.achievementBlocks.push(
            CMsgClientGetUserStatsResponse_AchievementBlocks.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetUserStatsResponse {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      crcStats: isSet(object.crcStats) ? Number(object.crcStats) : 0,
      schema: isSet(object.schema) ? Buffer.from(bytesFromBase64(object.schema)) : Buffer.alloc(0),
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgClientGetUserStatsResponse_Stats.fromJSON(e))
        : [],
      achievementBlocks: Array.isArray(object?.achievementBlocks)
        ? object.achievementBlocks.map((e: any) => CMsgClientGetUserStatsResponse_AchievementBlocks.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientGetUserStatsResponse): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.crcStats !== undefined && (obj.crcStats = Math.round(message.crcStats));
    message.schema !== undefined &&
      (obj.schema = base64FromBytes(message.schema !== undefined ? message.schema : Buffer.alloc(0)));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgClientGetUserStatsResponse_Stats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    if (message.achievementBlocks) {
      obj.achievementBlocks = message.achievementBlocks.map((e) =>
        e ? CMsgClientGetUserStatsResponse_AchievementBlocks.toJSON(e) : undefined
      );
    } else {
      obj.achievementBlocks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse>, I>>(base?: I): CMsgClientGetUserStatsResponse {
    return CMsgClientGetUserStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse>, I>>(
    object: I,
  ): CMsgClientGetUserStatsResponse {
    const message = createBaseCMsgClientGetUserStatsResponse();
    message.gameId = object.gameId ?? "0";
    message.eresult = object.eresult ?? 0;
    message.crcStats = object.crcStats ?? 0;
    message.schema = object.schema ?? Buffer.alloc(0);
    message.stats = object.stats?.map((e) => CMsgClientGetUserStatsResponse_Stats.fromPartial(e)) || [];
    message.achievementBlocks =
      object.achievementBlocks?.map((e) => CMsgClientGetUserStatsResponse_AchievementBlocks.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientGetUserStatsResponse_Stats(): CMsgClientGetUserStatsResponse_Stats {
  return { statId: 0, statValue: 0 };
}

export const CMsgClientGetUserStatsResponse_Stats = {
  encode(message: CMsgClientGetUserStatsResponse_Stats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetUserStatsResponse_Stats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetUserStatsResponse_Stats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.uint32();
          break;
        case 2:
          message.statValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetUserStatsResponse_Stats {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgClientGetUserStatsResponse_Stats): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.statValue !== undefined && (obj.statValue = Math.round(message.statValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse_Stats>, I>>(
    base?: I,
  ): CMsgClientGetUserStatsResponse_Stats {
    return CMsgClientGetUserStatsResponse_Stats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse_Stats>, I>>(
    object: I,
  ): CMsgClientGetUserStatsResponse_Stats {
    const message = createBaseCMsgClientGetUserStatsResponse_Stats();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetUserStatsResponse_AchievementBlocks(): CMsgClientGetUserStatsResponse_AchievementBlocks {
  return { achievementId: 0, unlockTime: [] };
}

export const CMsgClientGetUserStatsResponse_AchievementBlocks = {
  encode(
    message: CMsgClientGetUserStatsResponse_AchievementBlocks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.achievementId !== 0) {
      writer.uint32(8).uint32(message.achievementId);
    }
    writer.uint32(18).fork();
    for (const v of message.unlockTime) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetUserStatsResponse_AchievementBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetUserStatsResponse_AchievementBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unlockTime.push(reader.fixed32());
            }
          } else {
            message.unlockTime.push(reader.fixed32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetUserStatsResponse_AchievementBlocks {
    return {
      achievementId: isSet(object.achievementId) ? Number(object.achievementId) : 0,
      unlockTime: Array.isArray(object?.unlockTime) ? object.unlockTime.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientGetUserStatsResponse_AchievementBlocks): unknown {
    const obj: any = {};
    message.achievementId !== undefined && (obj.achievementId = Math.round(message.achievementId));
    if (message.unlockTime) {
      obj.unlockTime = message.unlockTime.map((e) => Math.round(e));
    } else {
      obj.unlockTime = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse_AchievementBlocks>, I>>(
    base?: I,
  ): CMsgClientGetUserStatsResponse_AchievementBlocks {
    return CMsgClientGetUserStatsResponse_AchievementBlocks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetUserStatsResponse_AchievementBlocks>, I>>(
    object: I,
  ): CMsgClientGetUserStatsResponse_AchievementBlocks {
    const message = createBaseCMsgClientGetUserStatsResponse_AchievementBlocks();
    message.achievementId = object.achievementId ?? 0;
    message.unlockTime = object.unlockTime?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientStoreUserStatsResponse(): CMsgClientStoreUserStatsResponse {
  return { gameId: "0", eresult: 0, crcStats: 0, statsFailedValidation: [], statsOutOfDate: false };
}

export const CMsgClientStoreUserStatsResponse = {
  encode(message: CMsgClientStoreUserStatsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(9).fixed64(message.gameId);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).int32(message.eresult);
    }
    if (message.crcStats !== 0) {
      writer.uint32(24).uint32(message.crcStats);
    }
    for (const v of message.statsFailedValidation) {
      CMsgClientStoreUserStatsResponse_StatsFailedValidation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.statsOutOfDate === true) {
      writer.uint32(40).bool(message.statsOutOfDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.eresult = reader.int32();
          break;
        case 3:
          message.crcStats = reader.uint32();
          break;
        case 4:
          message.statsFailedValidation.push(
            CMsgClientStoreUserStatsResponse_StatsFailedValidation.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.statsOutOfDate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStatsResponse {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      crcStats: isSet(object.crcStats) ? Number(object.crcStats) : 0,
      statsFailedValidation: Array.isArray(object?.statsFailedValidation)
        ? object.statsFailedValidation.map((e: any) =>
          CMsgClientStoreUserStatsResponse_StatsFailedValidation.fromJSON(e)
        )
        : [],
      statsOutOfDate: isSet(object.statsOutOfDate) ? Boolean(object.statsOutOfDate) : false,
    };
  },

  toJSON(message: CMsgClientStoreUserStatsResponse): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.crcStats !== undefined && (obj.crcStats = Math.round(message.crcStats));
    if (message.statsFailedValidation) {
      obj.statsFailedValidation = message.statsFailedValidation.map((e) =>
        e ? CMsgClientStoreUserStatsResponse_StatsFailedValidation.toJSON(e) : undefined
      );
    } else {
      obj.statsFailedValidation = [];
    }
    message.statsOutOfDate !== undefined && (obj.statsOutOfDate = message.statsOutOfDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStatsResponse>, I>>(
    base?: I,
  ): CMsgClientStoreUserStatsResponse {
    return CMsgClientStoreUserStatsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStatsResponse>, I>>(
    object: I,
  ): CMsgClientStoreUserStatsResponse {
    const message = createBaseCMsgClientStoreUserStatsResponse();
    message.gameId = object.gameId ?? "0";
    message.eresult = object.eresult ?? 0;
    message.crcStats = object.crcStats ?? 0;
    message.statsFailedValidation =
      object.statsFailedValidation?.map((e) => CMsgClientStoreUserStatsResponse_StatsFailedValidation.fromPartial(e)) ||
      [];
    message.statsOutOfDate = object.statsOutOfDate ?? false;
    return message;
  },
};

function createBaseCMsgClientStoreUserStatsResponse_StatsFailedValidation(): CMsgClientStoreUserStatsResponse_StatsFailedValidation {
  return { statId: 0, revertedStatValue: 0 };
}

export const CMsgClientStoreUserStatsResponse_StatsFailedValidation = {
  encode(
    message: CMsgClientStoreUserStatsResponse_StatsFailedValidation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.revertedStatValue !== 0) {
      writer.uint32(16).uint32(message.revertedStatValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStatsResponse_StatsFailedValidation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStatsResponse_StatsFailedValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.uint32();
          break;
        case 2:
          message.revertedStatValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStatsResponse_StatsFailedValidation {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      revertedStatValue: isSet(object.revertedStatValue) ? Number(object.revertedStatValue) : 0,
    };
  },

  toJSON(message: CMsgClientStoreUserStatsResponse_StatsFailedValidation): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.revertedStatValue !== undefined && (obj.revertedStatValue = Math.round(message.revertedStatValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStatsResponse_StatsFailedValidation>, I>>(
    base?: I,
  ): CMsgClientStoreUserStatsResponse_StatsFailedValidation {
    return CMsgClientStoreUserStatsResponse_StatsFailedValidation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStatsResponse_StatsFailedValidation>, I>>(
    object: I,
  ): CMsgClientStoreUserStatsResponse_StatsFailedValidation {
    const message = createBaseCMsgClientStoreUserStatsResponse_StatsFailedValidation();
    message.statId = object.statId ?? 0;
    message.revertedStatValue = object.revertedStatValue ?? 0;
    return message;
  },
};

function createBaseCMsgClientStoreUserStats2(): CMsgClientStoreUserStats2 {
  return { gameId: "0", settorSteamId: "0", setteeSteamId: "0", crcStats: 0, explicitReset: false, stats: [] };
}

export const CMsgClientStoreUserStats2 = {
  encode(message: CMsgClientStoreUserStats2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(9).fixed64(message.gameId);
    }
    if (message.settorSteamId !== "0") {
      writer.uint32(17).fixed64(message.settorSteamId);
    }
    if (message.setteeSteamId !== "0") {
      writer.uint32(25).fixed64(message.setteeSteamId);
    }
    if (message.crcStats !== 0) {
      writer.uint32(32).uint32(message.crcStats);
    }
    if (message.explicitReset === true) {
      writer.uint32(40).bool(message.explicitReset);
    }
    for (const v of message.stats) {
      CMsgClientStoreUserStats2_Stats.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStats2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStats2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.settorSteamId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.setteeSteamId = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.crcStats = reader.uint32();
          break;
        case 5:
          message.explicitReset = reader.bool();
          break;
        case 6:
          message.stats.push(CMsgClientStoreUserStats2_Stats.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStats2 {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      settorSteamId: isSet(object.settorSteamId) ? String(object.settorSteamId) : "0",
      setteeSteamId: isSet(object.setteeSteamId) ? String(object.setteeSteamId) : "0",
      crcStats: isSet(object.crcStats) ? Number(object.crcStats) : 0,
      explicitReset: isSet(object.explicitReset) ? Boolean(object.explicitReset) : false,
      stats: Array.isArray(object?.stats)
        ? object.stats.map((e: any) => CMsgClientStoreUserStats2_Stats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientStoreUserStats2): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.settorSteamId !== undefined && (obj.settorSteamId = message.settorSteamId);
    message.setteeSteamId !== undefined && (obj.setteeSteamId = message.setteeSteamId);
    message.crcStats !== undefined && (obj.crcStats = Math.round(message.crcStats));
    message.explicitReset !== undefined && (obj.explicitReset = message.explicitReset);
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CMsgClientStoreUserStats2_Stats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStats2>, I>>(base?: I): CMsgClientStoreUserStats2 {
    return CMsgClientStoreUserStats2.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStats2>, I>>(object: I): CMsgClientStoreUserStats2 {
    const message = createBaseCMsgClientStoreUserStats2();
    message.gameId = object.gameId ?? "0";
    message.settorSteamId = object.settorSteamId ?? "0";
    message.setteeSteamId = object.setteeSteamId ?? "0";
    message.crcStats = object.crcStats ?? 0;
    message.explicitReset = object.explicitReset ?? false;
    message.stats = object.stats?.map((e) => CMsgClientStoreUserStats2_Stats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientStoreUserStats2_Stats(): CMsgClientStoreUserStats2_Stats {
  return { statId: 0, statValue: 0 };
}

export const CMsgClientStoreUserStats2_Stats = {
  encode(message: CMsgClientStoreUserStats2_Stats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStats2_Stats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStats2_Stats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.uint32();
          break;
        case 2:
          message.statValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStats2_Stats {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgClientStoreUserStats2_Stats): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.statValue !== undefined && (obj.statValue = Math.round(message.statValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStats2_Stats>, I>>(base?: I): CMsgClientStoreUserStats2_Stats {
    return CMsgClientStoreUserStats2_Stats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStats2_Stats>, I>>(
    object: I,
  ): CMsgClientStoreUserStats2_Stats {
    const message = createBaseCMsgClientStoreUserStats2_Stats();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
    return message;
  },
};

function createBaseCMsgClientStatsUpdated(): CMsgClientStatsUpdated {
  return { steamId: "0", gameId: "0", crcStats: 0, updatedStats: [] };
}

export const CMsgClientStatsUpdated = {
  encode(message: CMsgClientStatsUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.gameId !== "0") {
      writer.uint32(17).fixed64(message.gameId);
    }
    if (message.crcStats !== 0) {
      writer.uint32(24).uint32(message.crcStats);
    }
    for (const v of message.updatedStats) {
      CMsgClientStatsUpdated_UpdatedStats.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStatsUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStatsUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.crcStats = reader.uint32();
          break;
        case 4:
          message.updatedStats.push(CMsgClientStatsUpdated_UpdatedStats.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStatsUpdated {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      crcStats: isSet(object.crcStats) ? Number(object.crcStats) : 0,
      updatedStats: Array.isArray(object?.updatedStats)
        ? object.updatedStats.map((e: any) => CMsgClientStatsUpdated_UpdatedStats.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientStatsUpdated): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.crcStats !== undefined && (obj.crcStats = Math.round(message.crcStats));
    if (message.updatedStats) {
      obj.updatedStats = message.updatedStats.map((e) => e ? CMsgClientStatsUpdated_UpdatedStats.toJSON(e) : undefined);
    } else {
      obj.updatedStats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStatsUpdated>, I>>(base?: I): CMsgClientStatsUpdated {
    return CMsgClientStatsUpdated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStatsUpdated>, I>>(object: I): CMsgClientStatsUpdated {
    const message = createBaseCMsgClientStatsUpdated();
    message.steamId = object.steamId ?? "0";
    message.gameId = object.gameId ?? "0";
    message.crcStats = object.crcStats ?? 0;
    message.updatedStats = object.updatedStats?.map((e) => CMsgClientStatsUpdated_UpdatedStats.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientStatsUpdated_UpdatedStats(): CMsgClientStatsUpdated_UpdatedStats {
  return { statId: 0, statValue: 0 };
}

export const CMsgClientStatsUpdated_UpdatedStats = {
  encode(message: CMsgClientStatsUpdated_UpdatedStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStatsUpdated_UpdatedStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStatsUpdated_UpdatedStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.uint32();
          break;
        case 2:
          message.statValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStatsUpdated_UpdatedStats {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgClientStatsUpdated_UpdatedStats): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.statValue !== undefined && (obj.statValue = Math.round(message.statValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStatsUpdated_UpdatedStats>, I>>(
    base?: I,
  ): CMsgClientStatsUpdated_UpdatedStats {
    return CMsgClientStatsUpdated_UpdatedStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStatsUpdated_UpdatedStats>, I>>(
    object: I,
  ): CMsgClientStatsUpdated_UpdatedStats {
    const message = createBaseCMsgClientStatsUpdated_UpdatedStats();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
    return message;
  },
};

function createBaseCMsgClientStoreUserStats(): CMsgClientStoreUserStats {
  return { gameId: "0", explicitReset: false, statsToStore: [] };
}

export const CMsgClientStoreUserStats = {
  encode(message: CMsgClientStoreUserStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameId !== "0") {
      writer.uint32(9).fixed64(message.gameId);
    }
    if (message.explicitReset === true) {
      writer.uint32(16).bool(message.explicitReset);
    }
    for (const v of message.statsToStore) {
      CMsgClientStoreUserStats_StatsToStore.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.explicitReset = reader.bool();
          break;
        case 3:
          message.statsToStore.push(CMsgClientStoreUserStats_StatsToStore.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStats {
    return {
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      explicitReset: isSet(object.explicitReset) ? Boolean(object.explicitReset) : false,
      statsToStore: Array.isArray(object?.statsToStore)
        ? object.statsToStore.map((e: any) => CMsgClientStoreUserStats_StatsToStore.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientStoreUserStats): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.explicitReset !== undefined && (obj.explicitReset = message.explicitReset);
    if (message.statsToStore) {
      obj.statsToStore = message.statsToStore.map((e) =>
        e ? CMsgClientStoreUserStats_StatsToStore.toJSON(e) : undefined
      );
    } else {
      obj.statsToStore = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStats>, I>>(base?: I): CMsgClientStoreUserStats {
    return CMsgClientStoreUserStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStats>, I>>(object: I): CMsgClientStoreUserStats {
    const message = createBaseCMsgClientStoreUserStats();
    message.gameId = object.gameId ?? "0";
    message.explicitReset = object.explicitReset ?? false;
    message.statsToStore = object.statsToStore?.map((e) => CMsgClientStoreUserStats_StatsToStore.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientStoreUserStats_StatsToStore(): CMsgClientStoreUserStats_StatsToStore {
  return { statId: 0, statValue: 0 };
}

export const CMsgClientStoreUserStats_StatsToStore = {
  encode(message: CMsgClientStoreUserStats_StatsToStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statId !== 0) {
      writer.uint32(8).uint32(message.statId);
    }
    if (message.statValue !== 0) {
      writer.uint32(16).uint32(message.statValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStoreUserStats_StatsToStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStoreUserStats_StatsToStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statId = reader.uint32();
          break;
        case 2:
          message.statValue = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStoreUserStats_StatsToStore {
    return {
      statId: isSet(object.statId) ? Number(object.statId) : 0,
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
    };
  },

  toJSON(message: CMsgClientStoreUserStats_StatsToStore): unknown {
    const obj: any = {};
    message.statId !== undefined && (obj.statId = Math.round(message.statId));
    message.statValue !== undefined && (obj.statValue = Math.round(message.statValue));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStoreUserStats_StatsToStore>, I>>(
    base?: I,
  ): CMsgClientStoreUserStats_StatsToStore {
    return CMsgClientStoreUserStats_StatsToStore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStoreUserStats_StatsToStore>, I>>(
    object: I,
  ): CMsgClientStoreUserStats_StatsToStore {
    const message = createBaseCMsgClientStoreUserStats_StatsToStore();
    message.statId = object.statId ?? 0;
    message.statValue = object.statValue ?? 0;
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
