/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EMessageReactionType {
  k_EMessageReactionType_Invalid = 0,
  k_EMessageReactionType_Emoticon = 1,
  k_EMessageReactionType_Sticker = 2,
  UNRECOGNIZED = -1,
}

export function eMessageReactionTypeFromJSON(object: any): EMessageReactionType {
  switch (object) {
    case 0:
    case "k_EMessageReactionType_Invalid":
      return EMessageReactionType.k_EMessageReactionType_Invalid;
    case 1:
    case "k_EMessageReactionType_Emoticon":
      return EMessageReactionType.k_EMessageReactionType_Emoticon;
    case 2:
    case "k_EMessageReactionType_Sticker":
      return EMessageReactionType.k_EMessageReactionType_Sticker;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMessageReactionType.UNRECOGNIZED;
  }
}

export function eMessageReactionTypeToJSON(object: EMessageReactionType): string {
  switch (object) {
    case EMessageReactionType.k_EMessageReactionType_Invalid:
      return "k_EMessageReactionType_Invalid";
    case EMessageReactionType.k_EMessageReactionType_Emoticon:
      return "k_EMessageReactionType_Emoticon";
    case EMessageReactionType.k_EMessageReactionType_Sticker:
      return "k_EMessageReactionType_Sticker";
    case EMessageReactionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CFriendMessagesGetRecentMessagesRequest {
  steamid1: string;
  steamid2: string;
  count: number;
  mostRecentConversation: boolean;
  rtime32StartTime: number;
  bbcodeFormat: boolean;
  startOrdinal: number;
  timeLast: number;
  ordinalLast: number;
}

export interface CFriendMessagesGetRecentMessagesResponse {
  messages: CFriendMessagesGetRecentMessagesResponse_FriendMessage[];
  moreAvailable: boolean;
}

export interface CFriendMessagesGetRecentMessagesResponse_FriendMessage {
  accountid: number;
  timestamp: number;
  message: string;
  ordinal: number;
  reactions: CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction[];
}

export interface CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
  reactionType: EMessageReactionType;
  reaction: string;
  reactors: number[];
}

export interface CFriendsMessagesGetActiveMessageSessionsRequest {
  lastmessageSince: number;
  onlySessionsWithMessages: boolean;
}

export interface CFriendsMessagesGetActiveMessageSessionsResponse {
  messageSessions: CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession[];
  timestamp: number;
}

export interface CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
  accountidFriend: number;
  lastMessage: number;
  lastView: number;
  unreadMessageCount: number;
}

export interface CFriendMessagesSendMessageRequest {
  steamid: string;
  chatEntryType: number;
  message: string;
  containsBbcode: boolean;
  echoToSender: boolean;
  lowPriority: boolean;
  clientMessageId: string;
}

export interface CFriendMessagesSendMessageResponse {
  modifiedMessage: string;
  serverTimestamp: number;
  ordinal: number;
  messageWithoutBbCode: string;
}

export interface CFriendMessagesAckMessageNotification {
  steamidPartner: string;
  timestamp: number;
}

export interface CFriendMessagesIsInFriendsUIBetaRequest {
  steamid: string;
}

export interface CFriendMessagesIsInFriendsUIBetaResponse {
  onlineInFriendsui: boolean;
  hasUsedFriendsui: boolean;
}

export interface CFriendMessagesUpdateMessageReactionRequest {
  steamid: string;
  serverTimestamp: number;
  ordinal: number;
  reactionType: EMessageReactionType;
  reaction: string;
  isAdd: boolean;
}

export interface CFriendMessagesUpdateMessageReactionResponse {
  reactors: number[];
}

export interface CFriendMessagesIncomingMessageNotification {
  steamidFriend: string;
  chatEntryType: number;
  fromLimitedAccount: boolean;
  message: string;
  rtime32ServerTimestamp: number;
  ordinal: number;
  localEcho: boolean;
  messageNoBbcode: string;
  lowPriority: boolean;
}

export interface CFriendMessagesMessageReactionNotification {
  steamidFriend: string;
  serverTimestamp: number;
  ordinal: number;
  reactor: string;
  reactionType: EMessageReactionType;
  reaction: string;
  isAdd: boolean;
}

function createBaseCFriendMessagesGetRecentMessagesRequest(): CFriendMessagesGetRecentMessagesRequest {
  return {
    steamid1: "0",
    steamid2: "0",
    count: 0,
    mostRecentConversation: false,
    rtime32StartTime: 0,
    bbcodeFormat: false,
    startOrdinal: 0,
    timeLast: 0,
    ordinalLast: 0,
  };
}

export const CFriendMessagesGetRecentMessagesRequest = {
  encode(message: CFriendMessagesGetRecentMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid1 !== "0") {
      writer.uint32(9).fixed64(message.steamid1);
    }
    if (message.steamid2 !== "0") {
      writer.uint32(17).fixed64(message.steamid2);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    if (message.mostRecentConversation === true) {
      writer.uint32(32).bool(message.mostRecentConversation);
    }
    if (message.rtime32StartTime !== 0) {
      writer.uint32(45).fixed32(message.rtime32StartTime);
    }
    if (message.bbcodeFormat === true) {
      writer.uint32(48).bool(message.bbcodeFormat);
    }
    if (message.startOrdinal !== 0) {
      writer.uint32(56).uint32(message.startOrdinal);
    }
    if (message.timeLast !== 0) {
      writer.uint32(64).uint32(message.timeLast);
    }
    if (message.ordinalLast !== 0) {
      writer.uint32(72).uint32(message.ordinalLast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesGetRecentMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesGetRecentMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid1 = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamid2 = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.count = reader.uint32();
          break;
        case 4:
          message.mostRecentConversation = reader.bool();
          break;
        case 5:
          message.rtime32StartTime = reader.fixed32();
          break;
        case 6:
          message.bbcodeFormat = reader.bool();
          break;
        case 7:
          message.startOrdinal = reader.uint32();
          break;
        case 8:
          message.timeLast = reader.uint32();
          break;
        case 9:
          message.ordinalLast = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesGetRecentMessagesRequest {
    return {
      steamid1: isSet(object.steamid1) ? String(object.steamid1) : "0",
      steamid2: isSet(object.steamid2) ? String(object.steamid2) : "0",
      count: isSet(object.count) ? Number(object.count) : 0,
      mostRecentConversation: isSet(object.mostRecentConversation) ? Boolean(object.mostRecentConversation) : false,
      rtime32StartTime: isSet(object.rtime32StartTime) ? Number(object.rtime32StartTime) : 0,
      bbcodeFormat: isSet(object.bbcodeFormat) ? Boolean(object.bbcodeFormat) : false,
      startOrdinal: isSet(object.startOrdinal) ? Number(object.startOrdinal) : 0,
      timeLast: isSet(object.timeLast) ? Number(object.timeLast) : 0,
      ordinalLast: isSet(object.ordinalLast) ? Number(object.ordinalLast) : 0,
    };
  },

  toJSON(message: CFriendMessagesGetRecentMessagesRequest): unknown {
    const obj: any = {};
    message.steamid1 !== undefined && (obj.steamid1 = message.steamid1);
    message.steamid2 !== undefined && (obj.steamid2 = message.steamid2);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.mostRecentConversation !== undefined && (obj.mostRecentConversation = message.mostRecentConversation);
    message.rtime32StartTime !== undefined && (obj.rtime32StartTime = Math.round(message.rtime32StartTime));
    message.bbcodeFormat !== undefined && (obj.bbcodeFormat = message.bbcodeFormat);
    message.startOrdinal !== undefined && (obj.startOrdinal = Math.round(message.startOrdinal));
    message.timeLast !== undefined && (obj.timeLast = Math.round(message.timeLast));
    message.ordinalLast !== undefined && (obj.ordinalLast = Math.round(message.ordinalLast));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesRequest>, I>>(
    base?: I,
  ): CFriendMessagesGetRecentMessagesRequest {
    return CFriendMessagesGetRecentMessagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesRequest>, I>>(
    object: I,
  ): CFriendMessagesGetRecentMessagesRequest {
    const message = createBaseCFriendMessagesGetRecentMessagesRequest();
    message.steamid1 = object.steamid1 ?? "0";
    message.steamid2 = object.steamid2 ?? "0";
    message.count = object.count ?? 0;
    message.mostRecentConversation = object.mostRecentConversation ?? false;
    message.rtime32StartTime = object.rtime32StartTime ?? 0;
    message.bbcodeFormat = object.bbcodeFormat ?? false;
    message.startOrdinal = object.startOrdinal ?? 0;
    message.timeLast = object.timeLast ?? 0;
    message.ordinalLast = object.ordinalLast ?? 0;
    return message;
  },
};

function createBaseCFriendMessagesGetRecentMessagesResponse(): CFriendMessagesGetRecentMessagesResponse {
  return { messages: [], moreAvailable: false };
}

export const CFriendMessagesGetRecentMessagesResponse = {
  encode(message: CFriendMessagesGetRecentMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      CFriendMessagesGetRecentMessagesResponse_FriendMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.moreAvailable === true) {
      writer.uint32(32).bool(message.moreAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesGetRecentMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesGetRecentMessagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(CFriendMessagesGetRecentMessagesResponse_FriendMessage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.moreAvailable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesGetRecentMessagesResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CFriendMessagesGetRecentMessagesResponse_FriendMessage.fromJSON(e))
        : [],
      moreAvailable: isSet(object.moreAvailable) ? Boolean(object.moreAvailable) : false,
    };
  },

  toJSON(message: CFriendMessagesGetRecentMessagesResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? CFriendMessagesGetRecentMessagesResponse_FriendMessage.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.moreAvailable !== undefined && (obj.moreAvailable = message.moreAvailable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse>, I>>(
    base?: I,
  ): CFriendMessagesGetRecentMessagesResponse {
    return CFriendMessagesGetRecentMessagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse>, I>>(
    object: I,
  ): CFriendMessagesGetRecentMessagesResponse {
    const message = createBaseCFriendMessagesGetRecentMessagesResponse();
    message.messages =
      object.messages?.map((e) => CFriendMessagesGetRecentMessagesResponse_FriendMessage.fromPartial(e)) || [];
    message.moreAvailable = object.moreAvailable ?? false;
    return message;
  },
};

function createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage(): CFriendMessagesGetRecentMessagesResponse_FriendMessage {
  return { accountid: 0, timestamp: 0, message: "", ordinal: 0, reactions: [] };
}

export const CFriendMessagesGetRecentMessagesResponse_FriendMessage = {
  encode(
    message: CFriendMessagesGetRecentMessagesResponse_FriendMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.ordinal !== 0) {
      writer.uint32(32).uint32(message.ordinal);
    }
    for (const v of message.reactions) {
      CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.encode(v!, writer.uint32(42).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesGetRecentMessagesResponse_FriendMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.ordinal = reader.uint32();
          break;
        case 5:
          message.reactions.push(
            CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesGetRecentMessagesResponse_FriendMessage {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) =>
          CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CFriendMessagesGetRecentMessagesResponse_FriendMessage): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.message !== undefined && (obj.message = message.message);
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.toJSON(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse_FriendMessage>, I>>(
    base?: I,
  ): CFriendMessagesGetRecentMessagesResponse_FriendMessage {
    return CFriendMessagesGetRecentMessagesResponse_FriendMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse_FriendMessage>, I>>(
    object: I,
  ): CFriendMessagesGetRecentMessagesResponse_FriendMessage {
    const message = createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage();
    message.accountid = object.accountid ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.message = object.message ?? "";
    message.ordinal = object.ordinal ?? 0;
    message.reactions =
      object.reactions?.map((e) =>
        CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction(): CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
  return { reactionType: 0, reaction: "", reactors: [] };
}

export const CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction = {
  encode(
    message: CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.reactionType !== 0) {
      writer.uint32(8).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(18).string(message.reaction);
    }
    writer.uint32(26).fork();
    for (const v of message.reactors) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactionType = reader.int32() as any;
          break;
        case 2:
          message.reaction = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reactors.push(reader.uint32());
            }
          } else {
            message.reactors.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
    return {
      reactionType: isSet(object.reactionType) ? eMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      reactors: Array.isArray(object?.reactors) ? object.reactors.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction): unknown {
    const obj: any = {};
    message.reactionType !== undefined && (obj.reactionType = eMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    if (message.reactors) {
      obj.reactors = message.reactors.map((e) => Math.round(e));
    } else {
      obj.reactors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction>, I>>(
    base?: I,
  ): CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
    return CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction>, I>>(
    object: I,
  ): CFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction {
    const message = createBaseCFriendMessagesGetRecentMessagesResponse_FriendMessage_MessageReaction();
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.reactors = object.reactors?.map((e) => e) || [];
    return message;
  },
};

function createBaseCFriendsMessagesGetActiveMessageSessionsRequest(): CFriendsMessagesGetActiveMessageSessionsRequest {
  return { lastmessageSince: 0, onlySessionsWithMessages: false };
}

export const CFriendsMessagesGetActiveMessageSessionsRequest = {
  encode(
    message: CFriendsMessagesGetActiveMessageSessionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.lastmessageSince !== 0) {
      writer.uint32(8).uint32(message.lastmessageSince);
    }
    if (message.onlySessionsWithMessages === true) {
      writer.uint32(16).bool(message.onlySessionsWithMessages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendsMessagesGetActiveMessageSessionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastmessageSince = reader.uint32();
          break;
        case 2:
          message.onlySessionsWithMessages = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendsMessagesGetActiveMessageSessionsRequest {
    return {
      lastmessageSince: isSet(object.lastmessageSince) ? Number(object.lastmessageSince) : 0,
      onlySessionsWithMessages: isSet(object.onlySessionsWithMessages)
        ? Boolean(object.onlySessionsWithMessages)
        : false,
    };
  },

  toJSON(message: CFriendsMessagesGetActiveMessageSessionsRequest): unknown {
    const obj: any = {};
    message.lastmessageSince !== undefined && (obj.lastmessageSince = Math.round(message.lastmessageSince));
    message.onlySessionsWithMessages !== undefined && (obj.onlySessionsWithMessages = message.onlySessionsWithMessages);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsRequest>, I>>(
    base?: I,
  ): CFriendsMessagesGetActiveMessageSessionsRequest {
    return CFriendsMessagesGetActiveMessageSessionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsRequest>, I>>(
    object: I,
  ): CFriendsMessagesGetActiveMessageSessionsRequest {
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsRequest();
    message.lastmessageSince = object.lastmessageSince ?? 0;
    message.onlySessionsWithMessages = object.onlySessionsWithMessages ?? false;
    return message;
  },
};

function createBaseCFriendsMessagesGetActiveMessageSessionsResponse(): CFriendsMessagesGetActiveMessageSessionsResponse {
  return { messageSessions: [], timestamp: 0 };
}

export const CFriendsMessagesGetActiveMessageSessionsResponse = {
  encode(
    message: CFriendsMessagesGetActiveMessageSessionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messageSessions) {
      CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendsMessagesGetActiveMessageSessionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageSessions.push(
            CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendsMessagesGetActiveMessageSessionsResponse {
    return {
      messageSessions: Array.isArray(object?.messageSessions)
        ? object.messageSessions.map((e: any) =>
          CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.fromJSON(e)
        )
        : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CFriendsMessagesGetActiveMessageSessionsResponse): unknown {
    const obj: any = {};
    if (message.messageSessions) {
      obj.messageSessions = message.messageSessions.map((e) =>
        e ? CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.toJSON(e) : undefined
      );
    } else {
      obj.messageSessions = [];
    }
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsResponse>, I>>(
    base?: I,
  ): CFriendsMessagesGetActiveMessageSessionsResponse {
    return CFriendsMessagesGetActiveMessageSessionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsResponse>, I>>(
    object: I,
  ): CFriendsMessagesGetActiveMessageSessionsResponse {
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsResponse();
    message.messageSessions =
      object.messageSessions?.map((e) =>
        CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.fromPartial(e)
      ) || [];
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession(): CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
  return { accountidFriend: 0, lastMessage: 0, lastView: 0, unreadMessageCount: 0 };
}

export const CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession = {
  encode(
    message: CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountidFriend !== 0) {
      writer.uint32(8).uint32(message.accountidFriend);
    }
    if (message.lastMessage !== 0) {
      writer.uint32(16).uint32(message.lastMessage);
    }
    if (message.lastView !== 0) {
      writer.uint32(24).uint32(message.lastView);
    }
    if (message.unreadMessageCount !== 0) {
      writer.uint32(32).uint32(message.unreadMessageCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountidFriend = reader.uint32();
          break;
        case 2:
          message.lastMessage = reader.uint32();
          break;
        case 3:
          message.lastView = reader.uint32();
          break;
        case 4:
          message.unreadMessageCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
    return {
      accountidFriend: isSet(object.accountidFriend) ? Number(object.accountidFriend) : 0,
      lastMessage: isSet(object.lastMessage) ? Number(object.lastMessage) : 0,
      lastView: isSet(object.lastView) ? Number(object.lastView) : 0,
      unreadMessageCount: isSet(object.unreadMessageCount) ? Number(object.unreadMessageCount) : 0,
    };
  },

  toJSON(message: CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession): unknown {
    const obj: any = {};
    message.accountidFriend !== undefined && (obj.accountidFriend = Math.round(message.accountidFriend));
    message.lastMessage !== undefined && (obj.lastMessage = Math.round(message.lastMessage));
    message.lastView !== undefined && (obj.lastView = Math.round(message.lastView));
    message.unreadMessageCount !== undefined && (obj.unreadMessageCount = Math.round(message.unreadMessageCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession>, I>>(
    base?: I,
  ): CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
    return CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession>, I>>(
    object: I,
  ): CFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession {
    const message = createBaseCFriendsMessagesGetActiveMessageSessionsResponse_FriendMessageSession();
    message.accountidFriend = object.accountidFriend ?? 0;
    message.lastMessage = object.lastMessage ?? 0;
    message.lastView = object.lastView ?? 0;
    message.unreadMessageCount = object.unreadMessageCount ?? 0;
    return message;
  },
};

function createBaseCFriendMessagesSendMessageRequest(): CFriendMessagesSendMessageRequest {
  return {
    steamid: "0",
    chatEntryType: 0,
    message: "",
    containsBbcode: false,
    echoToSender: false,
    lowPriority: false,
    clientMessageId: "",
  };
}

export const CFriendMessagesSendMessageRequest = {
  encode(message: CFriendMessagesSendMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.chatEntryType !== 0) {
      writer.uint32(16).int32(message.chatEntryType);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.containsBbcode === true) {
      writer.uint32(32).bool(message.containsBbcode);
    }
    if (message.echoToSender === true) {
      writer.uint32(40).bool(message.echoToSender);
    }
    if (message.lowPriority === true) {
      writer.uint32(48).bool(message.lowPriority);
    }
    if (message.clientMessageId !== "") {
      writer.uint32(66).string(message.clientMessageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesSendMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesSendMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.chatEntryType = reader.int32();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.containsBbcode = reader.bool();
          break;
        case 5:
          message.echoToSender = reader.bool();
          break;
        case 6:
          message.lowPriority = reader.bool();
          break;
        case 8:
          message.clientMessageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesSendMessageRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      chatEntryType: isSet(object.chatEntryType) ? Number(object.chatEntryType) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      containsBbcode: isSet(object.containsBbcode) ? Boolean(object.containsBbcode) : false,
      echoToSender: isSet(object.echoToSender) ? Boolean(object.echoToSender) : false,
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
      clientMessageId: isSet(object.clientMessageId) ? String(object.clientMessageId) : "",
    };
  },

  toJSON(message: CFriendMessagesSendMessageRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.chatEntryType !== undefined && (obj.chatEntryType = Math.round(message.chatEntryType));
    message.message !== undefined && (obj.message = message.message);
    message.containsBbcode !== undefined && (obj.containsBbcode = message.containsBbcode);
    message.echoToSender !== undefined && (obj.echoToSender = message.echoToSender);
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    message.clientMessageId !== undefined && (obj.clientMessageId = message.clientMessageId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesSendMessageRequest>, I>>(
    base?: I,
  ): CFriendMessagesSendMessageRequest {
    return CFriendMessagesSendMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesSendMessageRequest>, I>>(
    object: I,
  ): CFriendMessagesSendMessageRequest {
    const message = createBaseCFriendMessagesSendMessageRequest();
    message.steamid = object.steamid ?? "0";
    message.chatEntryType = object.chatEntryType ?? 0;
    message.message = object.message ?? "";
    message.containsBbcode = object.containsBbcode ?? false;
    message.echoToSender = object.echoToSender ?? false;
    message.lowPriority = object.lowPriority ?? false;
    message.clientMessageId = object.clientMessageId ?? "";
    return message;
  },
};

function createBaseCFriendMessagesSendMessageResponse(): CFriendMessagesSendMessageResponse {
  return { modifiedMessage: "", serverTimestamp: 0, ordinal: 0, messageWithoutBbCode: "" };
}

export const CFriendMessagesSendMessageResponse = {
  encode(message: CFriendMessagesSendMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modifiedMessage !== "") {
      writer.uint32(10).string(message.modifiedMessage);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(16).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    if (message.messageWithoutBbCode !== "") {
      writer.uint32(34).string(message.messageWithoutBbCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesSendMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesSendMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modifiedMessage = reader.string();
          break;
        case 2:
          message.serverTimestamp = reader.uint32();
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        case 4:
          message.messageWithoutBbCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesSendMessageResponse {
    return {
      modifiedMessage: isSet(object.modifiedMessage) ? String(object.modifiedMessage) : "",
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      messageWithoutBbCode: isSet(object.messageWithoutBbCode) ? String(object.messageWithoutBbCode) : "",
    };
  },

  toJSON(message: CFriendMessagesSendMessageResponse): unknown {
    const obj: any = {};
    message.modifiedMessage !== undefined && (obj.modifiedMessage = message.modifiedMessage);
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.messageWithoutBbCode !== undefined && (obj.messageWithoutBbCode = message.messageWithoutBbCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesSendMessageResponse>, I>>(
    base?: I,
  ): CFriendMessagesSendMessageResponse {
    return CFriendMessagesSendMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesSendMessageResponse>, I>>(
    object: I,
  ): CFriendMessagesSendMessageResponse {
    const message = createBaseCFriendMessagesSendMessageResponse();
    message.modifiedMessage = object.modifiedMessage ?? "";
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.messageWithoutBbCode = object.messageWithoutBbCode ?? "";
    return message;
  },
};

function createBaseCFriendMessagesAckMessageNotification(): CFriendMessagesAckMessageNotification {
  return { steamidPartner: "0", timestamp: 0 };
}

export const CFriendMessagesAckMessageNotification = {
  encode(message: CFriendMessagesAckMessageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidPartner !== "0") {
      writer.uint32(9).fixed64(message.steamidPartner);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesAckMessageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesAckMessageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidPartner = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesAckMessageNotification {
    return {
      steamidPartner: isSet(object.steamidPartner) ? String(object.steamidPartner) : "0",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CFriendMessagesAckMessageNotification): unknown {
    const obj: any = {};
    message.steamidPartner !== undefined && (obj.steamidPartner = message.steamidPartner);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesAckMessageNotification>, I>>(
    base?: I,
  ): CFriendMessagesAckMessageNotification {
    return CFriendMessagesAckMessageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesAckMessageNotification>, I>>(
    object: I,
  ): CFriendMessagesAckMessageNotification {
    const message = createBaseCFriendMessagesAckMessageNotification();
    message.steamidPartner = object.steamidPartner ?? "0";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCFriendMessagesIsInFriendsUIBetaRequest(): CFriendMessagesIsInFriendsUIBetaRequest {
  return { steamid: "0" };
}

export const CFriendMessagesIsInFriendsUIBetaRequest = {
  encode(message: CFriendMessagesIsInFriendsUIBetaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesIsInFriendsUIBetaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesIsInFriendsUIBetaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesIsInFriendsUIBetaRequest {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CFriendMessagesIsInFriendsUIBetaRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesIsInFriendsUIBetaRequest>, I>>(
    base?: I,
  ): CFriendMessagesIsInFriendsUIBetaRequest {
    return CFriendMessagesIsInFriendsUIBetaRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesIsInFriendsUIBetaRequest>, I>>(
    object: I,
  ): CFriendMessagesIsInFriendsUIBetaRequest {
    const message = createBaseCFriendMessagesIsInFriendsUIBetaRequest();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCFriendMessagesIsInFriendsUIBetaResponse(): CFriendMessagesIsInFriendsUIBetaResponse {
  return { onlineInFriendsui: false, hasUsedFriendsui: false };
}

export const CFriendMessagesIsInFriendsUIBetaResponse = {
  encode(message: CFriendMessagesIsInFriendsUIBetaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onlineInFriendsui === true) {
      writer.uint32(8).bool(message.onlineInFriendsui);
    }
    if (message.hasUsedFriendsui === true) {
      writer.uint32(16).bool(message.hasUsedFriendsui);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesIsInFriendsUIBetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesIsInFriendsUIBetaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.onlineInFriendsui = reader.bool();
          break;
        case 2:
          message.hasUsedFriendsui = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesIsInFriendsUIBetaResponse {
    return {
      onlineInFriendsui: isSet(object.onlineInFriendsui) ? Boolean(object.onlineInFriendsui) : false,
      hasUsedFriendsui: isSet(object.hasUsedFriendsui) ? Boolean(object.hasUsedFriendsui) : false,
    };
  },

  toJSON(message: CFriendMessagesIsInFriendsUIBetaResponse): unknown {
    const obj: any = {};
    message.onlineInFriendsui !== undefined && (obj.onlineInFriendsui = message.onlineInFriendsui);
    message.hasUsedFriendsui !== undefined && (obj.hasUsedFriendsui = message.hasUsedFriendsui);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesIsInFriendsUIBetaResponse>, I>>(
    base?: I,
  ): CFriendMessagesIsInFriendsUIBetaResponse {
    return CFriendMessagesIsInFriendsUIBetaResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesIsInFriendsUIBetaResponse>, I>>(
    object: I,
  ): CFriendMessagesIsInFriendsUIBetaResponse {
    const message = createBaseCFriendMessagesIsInFriendsUIBetaResponse();
    message.onlineInFriendsui = object.onlineInFriendsui ?? false;
    message.hasUsedFriendsui = object.hasUsedFriendsui ?? false;
    return message;
  },
};

function createBaseCFriendMessagesUpdateMessageReactionRequest(): CFriendMessagesUpdateMessageReactionRequest {
  return { steamid: "0", serverTimestamp: 0, ordinal: 0, reactionType: 0, reaction: "", isAdd: false };
}

export const CFriendMessagesUpdateMessageReactionRequest = {
  encode(message: CFriendMessagesUpdateMessageReactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(16).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    if (message.reactionType !== 0) {
      writer.uint32(32).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(42).string(message.reaction);
    }
    if (message.isAdd === true) {
      writer.uint32(48).bool(message.isAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesUpdateMessageReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesUpdateMessageReactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.serverTimestamp = reader.uint32();
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        case 4:
          message.reactionType = reader.int32() as any;
          break;
        case 5:
          message.reaction = reader.string();
          break;
        case 6:
          message.isAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesUpdateMessageReactionRequest {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactionType: isSet(object.reactionType) ? eMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      isAdd: isSet(object.isAdd) ? Boolean(object.isAdd) : false,
    };
  },

  toJSON(message: CFriendMessagesUpdateMessageReactionRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.reactionType !== undefined && (obj.reactionType = eMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.isAdd !== undefined && (obj.isAdd = message.isAdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesUpdateMessageReactionRequest>, I>>(
    base?: I,
  ): CFriendMessagesUpdateMessageReactionRequest {
    return CFriendMessagesUpdateMessageReactionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesUpdateMessageReactionRequest>, I>>(
    object: I,
  ): CFriendMessagesUpdateMessageReactionRequest {
    const message = createBaseCFriendMessagesUpdateMessageReactionRequest();
    message.steamid = object.steamid ?? "0";
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.isAdd = object.isAdd ?? false;
    return message;
  },
};

function createBaseCFriendMessagesUpdateMessageReactionResponse(): CFriendMessagesUpdateMessageReactionResponse {
  return { reactors: [] };
}

export const CFriendMessagesUpdateMessageReactionResponse = {
  encode(message: CFriendMessagesUpdateMessageReactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.reactors) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesUpdateMessageReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesUpdateMessageReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reactors.push(reader.uint32());
            }
          } else {
            message.reactors.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesUpdateMessageReactionResponse {
    return { reactors: Array.isArray(object?.reactors) ? object.reactors.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CFriendMessagesUpdateMessageReactionResponse): unknown {
    const obj: any = {};
    if (message.reactors) {
      obj.reactors = message.reactors.map((e) => Math.round(e));
    } else {
      obj.reactors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesUpdateMessageReactionResponse>, I>>(
    base?: I,
  ): CFriendMessagesUpdateMessageReactionResponse {
    return CFriendMessagesUpdateMessageReactionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesUpdateMessageReactionResponse>, I>>(
    object: I,
  ): CFriendMessagesUpdateMessageReactionResponse {
    const message = createBaseCFriendMessagesUpdateMessageReactionResponse();
    message.reactors = object.reactors?.map((e) => e) || [];
    return message;
  },
};

function createBaseCFriendMessagesIncomingMessageNotification(): CFriendMessagesIncomingMessageNotification {
  return {
    steamidFriend: "0",
    chatEntryType: 0,
    fromLimitedAccount: false,
    message: "",
    rtime32ServerTimestamp: 0,
    ordinal: 0,
    localEcho: false,
    messageNoBbcode: "",
    lowPriority: false,
  };
}

export const CFriendMessagesIncomingMessageNotification = {
  encode(message: CFriendMessagesIncomingMessageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidFriend !== "0") {
      writer.uint32(9).fixed64(message.steamidFriend);
    }
    if (message.chatEntryType !== 0) {
      writer.uint32(16).int32(message.chatEntryType);
    }
    if (message.fromLimitedAccount === true) {
      writer.uint32(24).bool(message.fromLimitedAccount);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.rtime32ServerTimestamp !== 0) {
      writer.uint32(45).fixed32(message.rtime32ServerTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(48).uint32(message.ordinal);
    }
    if (message.localEcho === true) {
      writer.uint32(56).bool(message.localEcho);
    }
    if (message.messageNoBbcode !== "") {
      writer.uint32(66).string(message.messageNoBbcode);
    }
    if (message.lowPriority === true) {
      writer.uint32(72).bool(message.lowPriority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesIncomingMessageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesIncomingMessageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidFriend = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.chatEntryType = reader.int32();
          break;
        case 3:
          message.fromLimitedAccount = reader.bool();
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.rtime32ServerTimestamp = reader.fixed32();
          break;
        case 6:
          message.ordinal = reader.uint32();
          break;
        case 7:
          message.localEcho = reader.bool();
          break;
        case 8:
          message.messageNoBbcode = reader.string();
          break;
        case 9:
          message.lowPriority = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesIncomingMessageNotification {
    return {
      steamidFriend: isSet(object.steamidFriend) ? String(object.steamidFriend) : "0",
      chatEntryType: isSet(object.chatEntryType) ? Number(object.chatEntryType) : 0,
      fromLimitedAccount: isSet(object.fromLimitedAccount) ? Boolean(object.fromLimitedAccount) : false,
      message: isSet(object.message) ? String(object.message) : "",
      rtime32ServerTimestamp: isSet(object.rtime32ServerTimestamp) ? Number(object.rtime32ServerTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      localEcho: isSet(object.localEcho) ? Boolean(object.localEcho) : false,
      messageNoBbcode: isSet(object.messageNoBbcode) ? String(object.messageNoBbcode) : "",
      lowPriority: isSet(object.lowPriority) ? Boolean(object.lowPriority) : false,
    };
  },

  toJSON(message: CFriendMessagesIncomingMessageNotification): unknown {
    const obj: any = {};
    message.steamidFriend !== undefined && (obj.steamidFriend = message.steamidFriend);
    message.chatEntryType !== undefined && (obj.chatEntryType = Math.round(message.chatEntryType));
    message.fromLimitedAccount !== undefined && (obj.fromLimitedAccount = message.fromLimitedAccount);
    message.message !== undefined && (obj.message = message.message);
    message.rtime32ServerTimestamp !== undefined &&
      (obj.rtime32ServerTimestamp = Math.round(message.rtime32ServerTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.localEcho !== undefined && (obj.localEcho = message.localEcho);
    message.messageNoBbcode !== undefined && (obj.messageNoBbcode = message.messageNoBbcode);
    message.lowPriority !== undefined && (obj.lowPriority = message.lowPriority);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesIncomingMessageNotification>, I>>(
    base?: I,
  ): CFriendMessagesIncomingMessageNotification {
    return CFriendMessagesIncomingMessageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesIncomingMessageNotification>, I>>(
    object: I,
  ): CFriendMessagesIncomingMessageNotification {
    const message = createBaseCFriendMessagesIncomingMessageNotification();
    message.steamidFriend = object.steamidFriend ?? "0";
    message.chatEntryType = object.chatEntryType ?? 0;
    message.fromLimitedAccount = object.fromLimitedAccount ?? false;
    message.message = object.message ?? "";
    message.rtime32ServerTimestamp = object.rtime32ServerTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.localEcho = object.localEcho ?? false;
    message.messageNoBbcode = object.messageNoBbcode ?? "";
    message.lowPriority = object.lowPriority ?? false;
    return message;
  },
};

function createBaseCFriendMessagesMessageReactionNotification(): CFriendMessagesMessageReactionNotification {
  return {
    steamidFriend: "0",
    serverTimestamp: 0,
    ordinal: 0,
    reactor: "0",
    reactionType: 0,
    reaction: "",
    isAdd: false,
  };
}

export const CFriendMessagesMessageReactionNotification = {
  encode(message: CFriendMessagesMessageReactionNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidFriend !== "0") {
      writer.uint32(9).fixed64(message.steamidFriend);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(16).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    if (message.reactor !== "0") {
      writer.uint32(33).fixed64(message.reactor);
    }
    if (message.reactionType !== 0) {
      writer.uint32(40).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(50).string(message.reaction);
    }
    if (message.isAdd === true) {
      writer.uint32(56).bool(message.isAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFriendMessagesMessageReactionNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFriendMessagesMessageReactionNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidFriend = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.serverTimestamp = reader.uint32();
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        case 4:
          message.reactor = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.reactionType = reader.int32() as any;
          break;
        case 6:
          message.reaction = reader.string();
          break;
        case 7:
          message.isAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFriendMessagesMessageReactionNotification {
    return {
      steamidFriend: isSet(object.steamidFriend) ? String(object.steamidFriend) : "0",
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactor: isSet(object.reactor) ? String(object.reactor) : "0",
      reactionType: isSet(object.reactionType) ? eMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      isAdd: isSet(object.isAdd) ? Boolean(object.isAdd) : false,
    };
  },

  toJSON(message: CFriendMessagesMessageReactionNotification): unknown {
    const obj: any = {};
    message.steamidFriend !== undefined && (obj.steamidFriend = message.steamidFriend);
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.reactor !== undefined && (obj.reactor = message.reactor);
    message.reactionType !== undefined && (obj.reactionType = eMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.isAdd !== undefined && (obj.isAdd = message.isAdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFriendMessagesMessageReactionNotification>, I>>(
    base?: I,
  ): CFriendMessagesMessageReactionNotification {
    return CFriendMessagesMessageReactionNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFriendMessagesMessageReactionNotification>, I>>(
    object: I,
  ): CFriendMessagesMessageReactionNotification {
    const message = createBaseCFriendMessagesMessageReactionNotification();
    message.steamidFriend = object.steamidFriend ?? "0";
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.reactor = object.reactor ?? "0";
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.isAdd = object.isAdd ?? false;
    return message;
  },
};

export interface FriendMessages {
  GetRecentMessages(
    request: CFriendMessagesGetRecentMessagesRequest,
  ): Promise<CFriendMessagesGetRecentMessagesResponse>;
  GetActiveMessageSessions(
    request: CFriendsMessagesGetActiveMessageSessionsRequest,
  ): Promise<CFriendsMessagesGetActiveMessageSessionsResponse>;
  SendMessage(request: CFriendMessagesSendMessageRequest): Promise<CFriendMessagesSendMessageResponse>;
  AckMessage(request: CFriendMessagesAckMessageNotification): Promise<NoResponse>;
  IsInFriendsUIBeta(
    request: CFriendMessagesIsInFriendsUIBetaRequest,
  ): Promise<CFriendMessagesIsInFriendsUIBetaResponse>;
  UpdateMessageReaction(
    request: CFriendMessagesUpdateMessageReactionRequest,
  ): Promise<CFriendMessagesUpdateMessageReactionResponse>;
}

export class FriendMessagesClientImpl implements FriendMessages {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "FriendMessages";
    this.rpc = rpc;
    this.GetRecentMessages = this.GetRecentMessages.bind(this);
    this.GetActiveMessageSessions = this.GetActiveMessageSessions.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
    this.AckMessage = this.AckMessage.bind(this);
    this.IsInFriendsUIBeta = this.IsInFriendsUIBeta.bind(this);
    this.UpdateMessageReaction = this.UpdateMessageReaction.bind(this);
  }
  GetRecentMessages(
    request: CFriendMessagesGetRecentMessagesRequest,
  ): Promise<CFriendMessagesGetRecentMessagesResponse> {
    const data = CFriendMessagesGetRecentMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRecentMessages", data);
    return promise.then((data) => CFriendMessagesGetRecentMessagesResponse.decode(new _m0.Reader(data)));
  }

  GetActiveMessageSessions(
    request: CFriendsMessagesGetActiveMessageSessionsRequest,
  ): Promise<CFriendsMessagesGetActiveMessageSessionsResponse> {
    const data = CFriendsMessagesGetActiveMessageSessionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetActiveMessageSessions", data);
    return promise.then((data) => CFriendsMessagesGetActiveMessageSessionsResponse.decode(new _m0.Reader(data)));
  }

  SendMessage(request: CFriendMessagesSendMessageRequest): Promise<CFriendMessagesSendMessageResponse> {
    const data = CFriendMessagesSendMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendMessage", data);
    return promise.then((data) => CFriendMessagesSendMessageResponse.decode(new _m0.Reader(data)));
  }

  AckMessage(request: CFriendMessagesAckMessageNotification): Promise<NoResponse> {
    const data = CFriendMessagesAckMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "AckMessage", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  IsInFriendsUIBeta(
    request: CFriendMessagesIsInFriendsUIBetaRequest,
  ): Promise<CFriendMessagesIsInFriendsUIBetaResponse> {
    const data = CFriendMessagesIsInFriendsUIBetaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IsInFriendsUIBeta", data);
    return promise.then((data) => CFriendMessagesIsInFriendsUIBetaResponse.decode(new _m0.Reader(data)));
  }

  UpdateMessageReaction(
    request: CFriendMessagesUpdateMessageReactionRequest,
  ): Promise<CFriendMessagesUpdateMessageReactionResponse> {
    const data = CFriendMessagesUpdateMessageReactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMessageReaction", data);
    return promise.then((data) => CFriendMessagesUpdateMessageReactionResponse.decode(new _m0.Reader(data)));
  }
}

export interface FriendMessagesClient {
  IncomingMessage(request: CFriendMessagesIncomingMessageNotification): Promise<NoResponse>;
  NotifyAckMessageEcho(request: CFriendMessagesAckMessageNotification): Promise<NoResponse>;
  MessageReaction(request: CFriendMessagesMessageReactionNotification): Promise<NoResponse>;
}

export class FriendMessagesClientClientImpl implements FriendMessagesClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "FriendMessagesClient";
    this.rpc = rpc;
    this.IncomingMessage = this.IncomingMessage.bind(this);
    this.NotifyAckMessageEcho = this.NotifyAckMessageEcho.bind(this);
    this.MessageReaction = this.MessageReaction.bind(this);
  }
  IncomingMessage(request: CFriendMessagesIncomingMessageNotification): Promise<NoResponse> {
    const data = CFriendMessagesIncomingMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "IncomingMessage", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyAckMessageEcho(request: CFriendMessagesAckMessageNotification): Promise<NoResponse> {
    const data = CFriendMessagesAckMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyAckMessageEcho", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  MessageReaction(request: CFriendMessagesMessageReactionNotification): Promise<NoResponse> {
    const data = CFriendMessagesMessageReactionNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "MessageReaction", data);
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
