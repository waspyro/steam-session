/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EClientNotificationType {
  k_EClientNotificationType_Invalid = 0,
  k_EClientNotificationType_DownloadCompleted = 1,
  k_EClientNotificationType_FriendInvite = 2,
  k_EClientNotificationType_FriendInGame = 3,
  k_EClientNotificationType_FriendOnline = 4,
  k_EClientNotificationType_Achievement = 5,
  k_EClientNotificationType_LowBattery = 6,
  k_EClientNotificationType_SystemUpdate = 7,
  k_EClientNotificationType_FriendMessage = 8,
  k_EClientNotificationType_GroupChatMessage = 9,
  k_EClientNotificationType_FriendInviteRollup = 10,
  k_EClientNotificationType_FamilySharingDeviceAuthorizationChanged = 11,
  k_EClientNotificationType_FamilySharingStopPlaying = 12,
  k_EClientNotificationType_FamilySharingLibraryAvailable = 13,
  k_EClientNotificationType_Screenshot = 14,
  k_EClientNotificationType_CloudSyncFailure = 15,
  k_EClientNotificationType_CloudSyncConflict = 16,
  k_EClientNotificationType_IncomingVoiceChat = 17,
  k_EClientNotificationType_ClaimSteamDeckRewards = 18,
  k_EClientNotificationType_GiftReceived = 19,
  k_EClientNotificationType_ItemAnnouncement = 20,
  k_EClientNotificationType_HardwareSurvey = 21,
  k_EClientNotificationType_LowDiskSpace = 22,
  k_EClientNotificationType_BatteryTemperature = 23,
  k_EClientNotificationType_DockUnsupportedFirmware = 24,
  k_EClientNotificationType_PeerContentUpload = 25,
  k_EClientNotificationType_CannotReadControllerGuideButton = 26,
  UNRECOGNIZED = -1,
}

export function eClientNotificationTypeFromJSON(object: any): EClientNotificationType {
  switch (object) {
    case 0:
    case "k_EClientNotificationType_Invalid":
      return EClientNotificationType.k_EClientNotificationType_Invalid;
    case 1:
    case "k_EClientNotificationType_DownloadCompleted":
      return EClientNotificationType.k_EClientNotificationType_DownloadCompleted;
    case 2:
    case "k_EClientNotificationType_FriendInvite":
      return EClientNotificationType.k_EClientNotificationType_FriendInvite;
    case 3:
    case "k_EClientNotificationType_FriendInGame":
      return EClientNotificationType.k_EClientNotificationType_FriendInGame;
    case 4:
    case "k_EClientNotificationType_FriendOnline":
      return EClientNotificationType.k_EClientNotificationType_FriendOnline;
    case 5:
    case "k_EClientNotificationType_Achievement":
      return EClientNotificationType.k_EClientNotificationType_Achievement;
    case 6:
    case "k_EClientNotificationType_LowBattery":
      return EClientNotificationType.k_EClientNotificationType_LowBattery;
    case 7:
    case "k_EClientNotificationType_SystemUpdate":
      return EClientNotificationType.k_EClientNotificationType_SystemUpdate;
    case 8:
    case "k_EClientNotificationType_FriendMessage":
      return EClientNotificationType.k_EClientNotificationType_FriendMessage;
    case 9:
    case "k_EClientNotificationType_GroupChatMessage":
      return EClientNotificationType.k_EClientNotificationType_GroupChatMessage;
    case 10:
    case "k_EClientNotificationType_FriendInviteRollup":
      return EClientNotificationType.k_EClientNotificationType_FriendInviteRollup;
    case 11:
    case "k_EClientNotificationType_FamilySharingDeviceAuthorizationChanged":
      return EClientNotificationType.k_EClientNotificationType_FamilySharingDeviceAuthorizationChanged;
    case 12:
    case "k_EClientNotificationType_FamilySharingStopPlaying":
      return EClientNotificationType.k_EClientNotificationType_FamilySharingStopPlaying;
    case 13:
    case "k_EClientNotificationType_FamilySharingLibraryAvailable":
      return EClientNotificationType.k_EClientNotificationType_FamilySharingLibraryAvailable;
    case 14:
    case "k_EClientNotificationType_Screenshot":
      return EClientNotificationType.k_EClientNotificationType_Screenshot;
    case 15:
    case "k_EClientNotificationType_CloudSyncFailure":
      return EClientNotificationType.k_EClientNotificationType_CloudSyncFailure;
    case 16:
    case "k_EClientNotificationType_CloudSyncConflict":
      return EClientNotificationType.k_EClientNotificationType_CloudSyncConflict;
    case 17:
    case "k_EClientNotificationType_IncomingVoiceChat":
      return EClientNotificationType.k_EClientNotificationType_IncomingVoiceChat;
    case 18:
    case "k_EClientNotificationType_ClaimSteamDeckRewards":
      return EClientNotificationType.k_EClientNotificationType_ClaimSteamDeckRewards;
    case 19:
    case "k_EClientNotificationType_GiftReceived":
      return EClientNotificationType.k_EClientNotificationType_GiftReceived;
    case 20:
    case "k_EClientNotificationType_ItemAnnouncement":
      return EClientNotificationType.k_EClientNotificationType_ItemAnnouncement;
    case 21:
    case "k_EClientNotificationType_HardwareSurvey":
      return EClientNotificationType.k_EClientNotificationType_HardwareSurvey;
    case 22:
    case "k_EClientNotificationType_LowDiskSpace":
      return EClientNotificationType.k_EClientNotificationType_LowDiskSpace;
    case 23:
    case "k_EClientNotificationType_BatteryTemperature":
      return EClientNotificationType.k_EClientNotificationType_BatteryTemperature;
    case 24:
    case "k_EClientNotificationType_DockUnsupportedFirmware":
      return EClientNotificationType.k_EClientNotificationType_DockUnsupportedFirmware;
    case 25:
    case "k_EClientNotificationType_PeerContentUpload":
      return EClientNotificationType.k_EClientNotificationType_PeerContentUpload;
    case 26:
    case "k_EClientNotificationType_CannotReadControllerGuideButton":
      return EClientNotificationType.k_EClientNotificationType_CannotReadControllerGuideButton;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EClientNotificationType.UNRECOGNIZED;
  }
}

export function eClientNotificationTypeToJSON(object: EClientNotificationType): string {
  switch (object) {
    case EClientNotificationType.k_EClientNotificationType_Invalid:
      return "k_EClientNotificationType_Invalid";
    case EClientNotificationType.k_EClientNotificationType_DownloadCompleted:
      return "k_EClientNotificationType_DownloadCompleted";
    case EClientNotificationType.k_EClientNotificationType_FriendInvite:
      return "k_EClientNotificationType_FriendInvite";
    case EClientNotificationType.k_EClientNotificationType_FriendInGame:
      return "k_EClientNotificationType_FriendInGame";
    case EClientNotificationType.k_EClientNotificationType_FriendOnline:
      return "k_EClientNotificationType_FriendOnline";
    case EClientNotificationType.k_EClientNotificationType_Achievement:
      return "k_EClientNotificationType_Achievement";
    case EClientNotificationType.k_EClientNotificationType_LowBattery:
      return "k_EClientNotificationType_LowBattery";
    case EClientNotificationType.k_EClientNotificationType_SystemUpdate:
      return "k_EClientNotificationType_SystemUpdate";
    case EClientNotificationType.k_EClientNotificationType_FriendMessage:
      return "k_EClientNotificationType_FriendMessage";
    case EClientNotificationType.k_EClientNotificationType_GroupChatMessage:
      return "k_EClientNotificationType_GroupChatMessage";
    case EClientNotificationType.k_EClientNotificationType_FriendInviteRollup:
      return "k_EClientNotificationType_FriendInviteRollup";
    case EClientNotificationType.k_EClientNotificationType_FamilySharingDeviceAuthorizationChanged:
      return "k_EClientNotificationType_FamilySharingDeviceAuthorizationChanged";
    case EClientNotificationType.k_EClientNotificationType_FamilySharingStopPlaying:
      return "k_EClientNotificationType_FamilySharingStopPlaying";
    case EClientNotificationType.k_EClientNotificationType_FamilySharingLibraryAvailable:
      return "k_EClientNotificationType_FamilySharingLibraryAvailable";
    case EClientNotificationType.k_EClientNotificationType_Screenshot:
      return "k_EClientNotificationType_Screenshot";
    case EClientNotificationType.k_EClientNotificationType_CloudSyncFailure:
      return "k_EClientNotificationType_CloudSyncFailure";
    case EClientNotificationType.k_EClientNotificationType_CloudSyncConflict:
      return "k_EClientNotificationType_CloudSyncConflict";
    case EClientNotificationType.k_EClientNotificationType_IncomingVoiceChat:
      return "k_EClientNotificationType_IncomingVoiceChat";
    case EClientNotificationType.k_EClientNotificationType_ClaimSteamDeckRewards:
      return "k_EClientNotificationType_ClaimSteamDeckRewards";
    case EClientNotificationType.k_EClientNotificationType_GiftReceived:
      return "k_EClientNotificationType_GiftReceived";
    case EClientNotificationType.k_EClientNotificationType_ItemAnnouncement:
      return "k_EClientNotificationType_ItemAnnouncement";
    case EClientNotificationType.k_EClientNotificationType_HardwareSurvey:
      return "k_EClientNotificationType_HardwareSurvey";
    case EClientNotificationType.k_EClientNotificationType_LowDiskSpace:
      return "k_EClientNotificationType_LowDiskSpace";
    case EClientNotificationType.k_EClientNotificationType_BatteryTemperature:
      return "k_EClientNotificationType_BatteryTemperature";
    case EClientNotificationType.k_EClientNotificationType_DockUnsupportedFirmware:
      return "k_EClientNotificationType_DockUnsupportedFirmware";
    case EClientNotificationType.k_EClientNotificationType_PeerContentUpload:
      return "k_EClientNotificationType_PeerContentUpload";
    case EClientNotificationType.k_EClientNotificationType_CannotReadControllerGuideButton:
      return "k_EClientNotificationType_CannotReadControllerGuideButton";
    case EClientNotificationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemUpdateNotificationType {
  k_ESystemUpdateNotificationType_Invalid = 0,
  k_ESystemUpdateNotificationType_Available = 1,
  k_ESystemUpdateNotificationType_NeedsRestart = 2,
  UNRECOGNIZED = -1,
}

export function eSystemUpdateNotificationTypeFromJSON(object: any): ESystemUpdateNotificationType {
  switch (object) {
    case 0:
    case "k_ESystemUpdateNotificationType_Invalid":
      return ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_Invalid;
    case 1:
    case "k_ESystemUpdateNotificationType_Available":
      return ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_Available;
    case 2:
    case "k_ESystemUpdateNotificationType_NeedsRestart":
      return ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_NeedsRestart;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemUpdateNotificationType.UNRECOGNIZED;
  }
}

export function eSystemUpdateNotificationTypeToJSON(object: ESystemUpdateNotificationType): string {
  switch (object) {
    case ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_Invalid:
      return "k_ESystemUpdateNotificationType_Invalid";
    case ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_Available:
      return "k_ESystemUpdateNotificationType_Available";
    case ESystemUpdateNotificationType.k_ESystemUpdateNotificationType_NeedsRestart:
      return "k_ESystemUpdateNotificationType_NeedsRestart";
    case ESystemUpdateNotificationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CClientNotificationCloudSyncFailure {
  appid: number;
}

export interface CClientNotificationCloudSyncConflict {
  appid: number;
}

export interface CClientNotificationScreenshot {
  screenshotHandle: string;
  description: string;
  localUrl: string;
}

export interface CClientNotificationDownloadCompleted {
  appid: number;
}

export interface CClientNotificationFriendInvite {
  steamid: number;
}

export interface CClientNotificationFriendInviteRollup {
  newInviteCount: number;
}

export interface CClientNotificationFriendInGame {
  steamid: number;
  gameName: string;
}

export interface CClientNotificationFriendOnline {
  steamid: number;
}

export interface CClientNotificationAchievement {
  achievementId: string;
  appid: number;
  name: string;
  description: string;
  imageUrl: string;
  achieved: boolean;
  rtimeUnlocked: number;
  minProgress: number;
  currentProgress: number;
  maxProgress: number;
  globalAchievedPct: number;
}

export interface CClientNotificationLowBattery {
  pctRemaining: number;
}

export interface CClientNotificationSystemUpdate {
  type: ESystemUpdateNotificationType;
}

export interface CClientNotificationFriendMessage {
  tag: string;
  steamid: string;
  title: string;
  body: string;
  icon: string;
  notificationid: number;
  responseSteamurl: string;
}

export interface CClientNotificationGroupChatMessage {
  tag: string;
  steamidSender: string;
  chatGroupId: string;
  chatId: string;
  title: string;
  body: string;
  rawbody: string;
  icon: string;
  notificationid: number;
}

export interface CClientNotificationFamilySharingDeviceAuthorizationChanged {
  accountidOwner: number;
  authorized: boolean;
}

export interface CClientNotificationFamilySharingStopPlaying {
  accountidOwner: number;
  secondsRemaining: number;
}

export interface CClientNotificationFamilySharingLibraryAvailable {
  accountidOwner: number;
}

export interface CClientNotificationIncomingVoiceChat {
  steamid: number;
}

export interface CClientNotificationClaimSteamDeckRewards {
}

export interface CClientNotificationGiftReceived {
  senderName: string;
}

export interface CClientNotificationItemAnnouncement {
  newItemCount: number;
  newBackpackItems: boolean;
}

export interface CClientNotificationHardwareSurveyPending {
}

export interface CClientNotificationLowDiskSpace {
  folderIndex: number;
}

export interface CClientNotificationBatteryTemperature {
  temperature: number;
  notificationType: string;
}

export interface CClientNotificationDockUnsupportedFirmware {
}

export interface CClientNotificationPeerContentUpload {
  appid: number;
  peerName: string;
}

export interface CClientNotificationCannotReadControllerGuideButton {
  controllerIndex: number;
}

function createBaseCClientNotificationCloudSyncFailure(): CClientNotificationCloudSyncFailure {
  return { appid: 0 };
}

export const CClientNotificationCloudSyncFailure = {
  encode(message: CClientNotificationCloudSyncFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationCloudSyncFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationCloudSyncFailure();
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

  fromJSON(object: any): CClientNotificationCloudSyncFailure {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CClientNotificationCloudSyncFailure): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationCloudSyncFailure>, I>>(
    base?: I,
  ): CClientNotificationCloudSyncFailure {
    return CClientNotificationCloudSyncFailure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationCloudSyncFailure>, I>>(
    object: I,
  ): CClientNotificationCloudSyncFailure {
    const message = createBaseCClientNotificationCloudSyncFailure();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationCloudSyncConflict(): CClientNotificationCloudSyncConflict {
  return { appid: 0 };
}

export const CClientNotificationCloudSyncConflict = {
  encode(message: CClientNotificationCloudSyncConflict, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationCloudSyncConflict {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationCloudSyncConflict();
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

  fromJSON(object: any): CClientNotificationCloudSyncConflict {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CClientNotificationCloudSyncConflict): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationCloudSyncConflict>, I>>(
    base?: I,
  ): CClientNotificationCloudSyncConflict {
    return CClientNotificationCloudSyncConflict.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationCloudSyncConflict>, I>>(
    object: I,
  ): CClientNotificationCloudSyncConflict {
    const message = createBaseCClientNotificationCloudSyncConflict();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationScreenshot(): CClientNotificationScreenshot {
  return { screenshotHandle: "", description: "", localUrl: "" };
}

export const CClientNotificationScreenshot = {
  encode(message: CClientNotificationScreenshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenshotHandle !== "") {
      writer.uint32(10).string(message.screenshotHandle);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.localUrl !== "") {
      writer.uint32(26).string(message.localUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationScreenshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationScreenshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenshotHandle = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.localUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationScreenshot {
    return {
      screenshotHandle: isSet(object.screenshotHandle) ? String(object.screenshotHandle) : "",
      description: isSet(object.description) ? String(object.description) : "",
      localUrl: isSet(object.localUrl) ? String(object.localUrl) : "",
    };
  },

  toJSON(message: CClientNotificationScreenshot): unknown {
    const obj: any = {};
    message.screenshotHandle !== undefined && (obj.screenshotHandle = message.screenshotHandle);
    message.description !== undefined && (obj.description = message.description);
    message.localUrl !== undefined && (obj.localUrl = message.localUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationScreenshot>, I>>(base?: I): CClientNotificationScreenshot {
    return CClientNotificationScreenshot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationScreenshot>, I>>(
    object: I,
  ): CClientNotificationScreenshot {
    const message = createBaseCClientNotificationScreenshot();
    message.screenshotHandle = object.screenshotHandle ?? "";
    message.description = object.description ?? "";
    message.localUrl = object.localUrl ?? "";
    return message;
  },
};

function createBaseCClientNotificationDownloadCompleted(): CClientNotificationDownloadCompleted {
  return { appid: 0 };
}

export const CClientNotificationDownloadCompleted = {
  encode(message: CClientNotificationDownloadCompleted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationDownloadCompleted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationDownloadCompleted();
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

  fromJSON(object: any): CClientNotificationDownloadCompleted {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CClientNotificationDownloadCompleted): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationDownloadCompleted>, I>>(
    base?: I,
  ): CClientNotificationDownloadCompleted {
    return CClientNotificationDownloadCompleted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationDownloadCompleted>, I>>(
    object: I,
  ): CClientNotificationDownloadCompleted {
    const message = createBaseCClientNotificationDownloadCompleted();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFriendInvite(): CClientNotificationFriendInvite {
  return { steamid: 0 };
}

export const CClientNotificationFriendInvite = {
  encode(message: CClientNotificationFriendInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFriendInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFriendInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFriendInvite {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CClientNotificationFriendInvite): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFriendInvite>, I>>(base?: I): CClientNotificationFriendInvite {
    return CClientNotificationFriendInvite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFriendInvite>, I>>(
    object: I,
  ): CClientNotificationFriendInvite {
    const message = createBaseCClientNotificationFriendInvite();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFriendInviteRollup(): CClientNotificationFriendInviteRollup {
  return { newInviteCount: 0 };
}

export const CClientNotificationFriendInviteRollup = {
  encode(message: CClientNotificationFriendInviteRollup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newInviteCount !== 0) {
      writer.uint32(8).uint32(message.newInviteCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFriendInviteRollup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFriendInviteRollup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newInviteCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFriendInviteRollup {
    return { newInviteCount: isSet(object.newInviteCount) ? Number(object.newInviteCount) : 0 };
  },

  toJSON(message: CClientNotificationFriendInviteRollup): unknown {
    const obj: any = {};
    message.newInviteCount !== undefined && (obj.newInviteCount = Math.round(message.newInviteCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFriendInviteRollup>, I>>(
    base?: I,
  ): CClientNotificationFriendInviteRollup {
    return CClientNotificationFriendInviteRollup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFriendInviteRollup>, I>>(
    object: I,
  ): CClientNotificationFriendInviteRollup {
    const message = createBaseCClientNotificationFriendInviteRollup();
    message.newInviteCount = object.newInviteCount ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFriendInGame(): CClientNotificationFriendInGame {
  return { steamid: 0, gameName: "" };
}

export const CClientNotificationFriendInGame = {
  encode(message: CClientNotificationFriendInGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFriendInGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFriendInGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.gameName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFriendInGame {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
    };
  },

  toJSON(message: CClientNotificationFriendInGame): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFriendInGame>, I>>(base?: I): CClientNotificationFriendInGame {
    return CClientNotificationFriendInGame.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFriendInGame>, I>>(
    object: I,
  ): CClientNotificationFriendInGame {
    const message = createBaseCClientNotificationFriendInGame();
    message.steamid = object.steamid ?? 0;
    message.gameName = object.gameName ?? "";
    return message;
  },
};

function createBaseCClientNotificationFriendOnline(): CClientNotificationFriendOnline {
  return { steamid: 0 };
}

export const CClientNotificationFriendOnline = {
  encode(message: CClientNotificationFriendOnline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFriendOnline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFriendOnline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFriendOnline {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CClientNotificationFriendOnline): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFriendOnline>, I>>(base?: I): CClientNotificationFriendOnline {
    return CClientNotificationFriendOnline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFriendOnline>, I>>(
    object: I,
  ): CClientNotificationFriendOnline {
    const message = createBaseCClientNotificationFriendOnline();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationAchievement(): CClientNotificationAchievement {
  return {
    achievementId: "",
    appid: 0,
    name: "",
    description: "",
    imageUrl: "",
    achieved: false,
    rtimeUnlocked: 0,
    minProgress: 0,
    currentProgress: 0,
    maxProgress: 0,
    globalAchievedPct: 0,
  };
}

export const CClientNotificationAchievement = {
  encode(message: CClientNotificationAchievement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.achievementId !== "") {
      writer.uint32(10).string(message.achievementId);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.imageUrl !== "") {
      writer.uint32(42).string(message.imageUrl);
    }
    if (message.achieved === true) {
      writer.uint32(48).bool(message.achieved);
    }
    if (message.rtimeUnlocked !== 0) {
      writer.uint32(56).uint32(message.rtimeUnlocked);
    }
    if (message.minProgress !== 0) {
      writer.uint32(69).float(message.minProgress);
    }
    if (message.currentProgress !== 0) {
      writer.uint32(77).float(message.currentProgress);
    }
    if (message.maxProgress !== 0) {
      writer.uint32(85).float(message.maxProgress);
    }
    if (message.globalAchievedPct !== 0) {
      writer.uint32(93).float(message.globalAchievedPct);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationAchievement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementId = reader.string();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.imageUrl = reader.string();
          break;
        case 6:
          message.achieved = reader.bool();
          break;
        case 7:
          message.rtimeUnlocked = reader.uint32();
          break;
        case 8:
          message.minProgress = reader.float();
          break;
        case 9:
          message.currentProgress = reader.float();
          break;
        case 10:
          message.maxProgress = reader.float();
          break;
        case 11:
          message.globalAchievedPct = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationAchievement {
    return {
      achievementId: isSet(object.achievementId) ? String(object.achievementId) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      achieved: isSet(object.achieved) ? Boolean(object.achieved) : false,
      rtimeUnlocked: isSet(object.rtimeUnlocked) ? Number(object.rtimeUnlocked) : 0,
      minProgress: isSet(object.minProgress) ? Number(object.minProgress) : 0,
      currentProgress: isSet(object.currentProgress) ? Number(object.currentProgress) : 0,
      maxProgress: isSet(object.maxProgress) ? Number(object.maxProgress) : 0,
      globalAchievedPct: isSet(object.globalAchievedPct) ? Number(object.globalAchievedPct) : 0,
    };
  },

  toJSON(message: CClientNotificationAchievement): unknown {
    const obj: any = {};
    message.achievementId !== undefined && (obj.achievementId = message.achievementId);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.achieved !== undefined && (obj.achieved = message.achieved);
    message.rtimeUnlocked !== undefined && (obj.rtimeUnlocked = Math.round(message.rtimeUnlocked));
    message.minProgress !== undefined && (obj.minProgress = message.minProgress);
    message.currentProgress !== undefined && (obj.currentProgress = message.currentProgress);
    message.maxProgress !== undefined && (obj.maxProgress = message.maxProgress);
    message.globalAchievedPct !== undefined && (obj.globalAchievedPct = message.globalAchievedPct);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationAchievement>, I>>(base?: I): CClientNotificationAchievement {
    return CClientNotificationAchievement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationAchievement>, I>>(
    object: I,
  ): CClientNotificationAchievement {
    const message = createBaseCClientNotificationAchievement();
    message.achievementId = object.achievementId ?? "";
    message.appid = object.appid ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.imageUrl = object.imageUrl ?? "";
    message.achieved = object.achieved ?? false;
    message.rtimeUnlocked = object.rtimeUnlocked ?? 0;
    message.minProgress = object.minProgress ?? 0;
    message.currentProgress = object.currentProgress ?? 0;
    message.maxProgress = object.maxProgress ?? 0;
    message.globalAchievedPct = object.globalAchievedPct ?? 0;
    return message;
  },
};

function createBaseCClientNotificationLowBattery(): CClientNotificationLowBattery {
  return { pctRemaining: 0 };
}

export const CClientNotificationLowBattery = {
  encode(message: CClientNotificationLowBattery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pctRemaining !== 0) {
      writer.uint32(13).float(message.pctRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationLowBattery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationLowBattery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pctRemaining = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationLowBattery {
    return { pctRemaining: isSet(object.pctRemaining) ? Number(object.pctRemaining) : 0 };
  },

  toJSON(message: CClientNotificationLowBattery): unknown {
    const obj: any = {};
    message.pctRemaining !== undefined && (obj.pctRemaining = message.pctRemaining);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationLowBattery>, I>>(base?: I): CClientNotificationLowBattery {
    return CClientNotificationLowBattery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationLowBattery>, I>>(
    object: I,
  ): CClientNotificationLowBattery {
    const message = createBaseCClientNotificationLowBattery();
    message.pctRemaining = object.pctRemaining ?? 0;
    return message;
  },
};

function createBaseCClientNotificationSystemUpdate(): CClientNotificationSystemUpdate {
  return { type: 0 };
}

export const CClientNotificationSystemUpdate = {
  encode(message: CClientNotificationSystemUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationSystemUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationSystemUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationSystemUpdate {
    return { type: isSet(object.type) ? eSystemUpdateNotificationTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: CClientNotificationSystemUpdate): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eSystemUpdateNotificationTypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationSystemUpdate>, I>>(base?: I): CClientNotificationSystemUpdate {
    return CClientNotificationSystemUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationSystemUpdate>, I>>(
    object: I,
  ): CClientNotificationSystemUpdate {
    const message = createBaseCClientNotificationSystemUpdate();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFriendMessage(): CClientNotificationFriendMessage {
  return { tag: "", steamid: "", title: "", body: "", icon: "", notificationid: 0, responseSteamurl: "" };
}

export const CClientNotificationFriendMessage = {
  encode(message: CClientNotificationFriendMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.steamid !== "") {
      writer.uint32(18).string(message.steamid);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.icon !== "") {
      writer.uint32(42).string(message.icon);
    }
    if (message.notificationid !== 0) {
      writer.uint32(48).uint32(message.notificationid);
    }
    if (message.responseSteamurl !== "") {
      writer.uint32(58).string(message.responseSteamurl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFriendMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFriendMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.steamid = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.icon = reader.string();
          break;
        case 6:
          message.notificationid = reader.uint32();
          break;
        case 7:
          message.responseSteamurl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFriendMessage {
    return {
      tag: isSet(object.tag) ? String(object.tag) : "",
      steamid: isSet(object.steamid) ? String(object.steamid) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      notificationid: isSet(object.notificationid) ? Number(object.notificationid) : 0,
      responseSteamurl: isSet(object.responseSteamurl) ? String(object.responseSteamurl) : "",
    };
  },

  toJSON(message: CClientNotificationFriendMessage): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.icon !== undefined && (obj.icon = message.icon);
    message.notificationid !== undefined && (obj.notificationid = Math.round(message.notificationid));
    message.responseSteamurl !== undefined && (obj.responseSteamurl = message.responseSteamurl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFriendMessage>, I>>(
    base?: I,
  ): CClientNotificationFriendMessage {
    return CClientNotificationFriendMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFriendMessage>, I>>(
    object: I,
  ): CClientNotificationFriendMessage {
    const message = createBaseCClientNotificationFriendMessage();
    message.tag = object.tag ?? "";
    message.steamid = object.steamid ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.icon = object.icon ?? "";
    message.notificationid = object.notificationid ?? 0;
    message.responseSteamurl = object.responseSteamurl ?? "";
    return message;
  },
};

function createBaseCClientNotificationGroupChatMessage(): CClientNotificationGroupChatMessage {
  return {
    tag: "",
    steamidSender: "",
    chatGroupId: "",
    chatId: "",
    title: "",
    body: "",
    rawbody: "",
    icon: "",
    notificationid: 0,
  };
}

export const CClientNotificationGroupChatMessage = {
  encode(message: CClientNotificationGroupChatMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.steamidSender !== "") {
      writer.uint32(18).string(message.steamidSender);
    }
    if (message.chatGroupId !== "") {
      writer.uint32(26).string(message.chatGroupId);
    }
    if (message.chatId !== "") {
      writer.uint32(34).string(message.chatId);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    if (message.rawbody !== "") {
      writer.uint32(58).string(message.rawbody);
    }
    if (message.icon !== "") {
      writer.uint32(66).string(message.icon);
    }
    if (message.notificationid !== 0) {
      writer.uint32(72).uint32(message.notificationid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationGroupChatMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationGroupChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.steamidSender = reader.string();
          break;
        case 3:
          message.chatGroupId = reader.string();
          break;
        case 4:
          message.chatId = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.body = reader.string();
          break;
        case 7:
          message.rawbody = reader.string();
          break;
        case 8:
          message.icon = reader.string();
          break;
        case 9:
          message.notificationid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationGroupChatMessage {
    return {
      tag: isSet(object.tag) ? String(object.tag) : "",
      steamidSender: isSet(object.steamidSender) ? String(object.steamidSender) : "",
      chatGroupId: isSet(object.chatGroupId) ? String(object.chatGroupId) : "",
      chatId: isSet(object.chatId) ? String(object.chatId) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      rawbody: isSet(object.rawbody) ? String(object.rawbody) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      notificationid: isSet(object.notificationid) ? Number(object.notificationid) : 0,
    };
  },

  toJSON(message: CClientNotificationGroupChatMessage): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.steamidSender !== undefined && (obj.steamidSender = message.steamidSender);
    message.chatGroupId !== undefined && (obj.chatGroupId = message.chatGroupId);
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.rawbody !== undefined && (obj.rawbody = message.rawbody);
    message.icon !== undefined && (obj.icon = message.icon);
    message.notificationid !== undefined && (obj.notificationid = Math.round(message.notificationid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationGroupChatMessage>, I>>(
    base?: I,
  ): CClientNotificationGroupChatMessage {
    return CClientNotificationGroupChatMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationGroupChatMessage>, I>>(
    object: I,
  ): CClientNotificationGroupChatMessage {
    const message = createBaseCClientNotificationGroupChatMessage();
    message.tag = object.tag ?? "";
    message.steamidSender = object.steamidSender ?? "";
    message.chatGroupId = object.chatGroupId ?? "";
    message.chatId = object.chatId ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.rawbody = object.rawbody ?? "";
    message.icon = object.icon ?? "";
    message.notificationid = object.notificationid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFamilySharingDeviceAuthorizationChanged(): CClientNotificationFamilySharingDeviceAuthorizationChanged {
  return { accountidOwner: 0, authorized: false };
}

export const CClientNotificationFamilySharingDeviceAuthorizationChanged = {
  encode(
    message: CClientNotificationFamilySharingDeviceAuthorizationChanged,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountidOwner !== 0) {
      writer.uint32(8).uint32(message.accountidOwner);
    }
    if (message.authorized === true) {
      writer.uint32(16).bool(message.authorized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFamilySharingDeviceAuthorizationChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFamilySharingDeviceAuthorizationChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountidOwner = reader.uint32();
          break;
        case 2:
          message.authorized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFamilySharingDeviceAuthorizationChanged {
    return {
      accountidOwner: isSet(object.accountidOwner) ? Number(object.accountidOwner) : 0,
      authorized: isSet(object.authorized) ? Boolean(object.authorized) : false,
    };
  },

  toJSON(message: CClientNotificationFamilySharingDeviceAuthorizationChanged): unknown {
    const obj: any = {};
    message.accountidOwner !== undefined && (obj.accountidOwner = Math.round(message.accountidOwner));
    message.authorized !== undefined && (obj.authorized = message.authorized);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFamilySharingDeviceAuthorizationChanged>, I>>(
    base?: I,
  ): CClientNotificationFamilySharingDeviceAuthorizationChanged {
    return CClientNotificationFamilySharingDeviceAuthorizationChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFamilySharingDeviceAuthorizationChanged>, I>>(
    object: I,
  ): CClientNotificationFamilySharingDeviceAuthorizationChanged {
    const message = createBaseCClientNotificationFamilySharingDeviceAuthorizationChanged();
    message.accountidOwner = object.accountidOwner ?? 0;
    message.authorized = object.authorized ?? false;
    return message;
  },
};

function createBaseCClientNotificationFamilySharingStopPlaying(): CClientNotificationFamilySharingStopPlaying {
  return { accountidOwner: 0, secondsRemaining: 0 };
}

export const CClientNotificationFamilySharingStopPlaying = {
  encode(message: CClientNotificationFamilySharingStopPlaying, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountidOwner !== 0) {
      writer.uint32(8).uint32(message.accountidOwner);
    }
    if (message.secondsRemaining !== 0) {
      writer.uint32(16).uint32(message.secondsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFamilySharingStopPlaying {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFamilySharingStopPlaying();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountidOwner = reader.uint32();
          break;
        case 2:
          message.secondsRemaining = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFamilySharingStopPlaying {
    return {
      accountidOwner: isSet(object.accountidOwner) ? Number(object.accountidOwner) : 0,
      secondsRemaining: isSet(object.secondsRemaining) ? Number(object.secondsRemaining) : 0,
    };
  },

  toJSON(message: CClientNotificationFamilySharingStopPlaying): unknown {
    const obj: any = {};
    message.accountidOwner !== undefined && (obj.accountidOwner = Math.round(message.accountidOwner));
    message.secondsRemaining !== undefined && (obj.secondsRemaining = Math.round(message.secondsRemaining));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFamilySharingStopPlaying>, I>>(
    base?: I,
  ): CClientNotificationFamilySharingStopPlaying {
    return CClientNotificationFamilySharingStopPlaying.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFamilySharingStopPlaying>, I>>(
    object: I,
  ): CClientNotificationFamilySharingStopPlaying {
    const message = createBaseCClientNotificationFamilySharingStopPlaying();
    message.accountidOwner = object.accountidOwner ?? 0;
    message.secondsRemaining = object.secondsRemaining ?? 0;
    return message;
  },
};

function createBaseCClientNotificationFamilySharingLibraryAvailable(): CClientNotificationFamilySharingLibraryAvailable {
  return { accountidOwner: 0 };
}

export const CClientNotificationFamilySharingLibraryAvailable = {
  encode(
    message: CClientNotificationFamilySharingLibraryAvailable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountidOwner !== 0) {
      writer.uint32(8).uint32(message.accountidOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationFamilySharingLibraryAvailable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationFamilySharingLibraryAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountidOwner = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationFamilySharingLibraryAvailable {
    return { accountidOwner: isSet(object.accountidOwner) ? Number(object.accountidOwner) : 0 };
  },

  toJSON(message: CClientNotificationFamilySharingLibraryAvailable): unknown {
    const obj: any = {};
    message.accountidOwner !== undefined && (obj.accountidOwner = Math.round(message.accountidOwner));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationFamilySharingLibraryAvailable>, I>>(
    base?: I,
  ): CClientNotificationFamilySharingLibraryAvailable {
    return CClientNotificationFamilySharingLibraryAvailable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationFamilySharingLibraryAvailable>, I>>(
    object: I,
  ): CClientNotificationFamilySharingLibraryAvailable {
    const message = createBaseCClientNotificationFamilySharingLibraryAvailable();
    message.accountidOwner = object.accountidOwner ?? 0;
    return message;
  },
};

function createBaseCClientNotificationIncomingVoiceChat(): CClientNotificationIncomingVoiceChat {
  return { steamid: 0 };
}

export const CClientNotificationIncomingVoiceChat = {
  encode(message: CClientNotificationIncomingVoiceChat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationIncomingVoiceChat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationIncomingVoiceChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationIncomingVoiceChat {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CClientNotificationIncomingVoiceChat): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationIncomingVoiceChat>, I>>(
    base?: I,
  ): CClientNotificationIncomingVoiceChat {
    return CClientNotificationIncomingVoiceChat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationIncomingVoiceChat>, I>>(
    object: I,
  ): CClientNotificationIncomingVoiceChat {
    const message = createBaseCClientNotificationIncomingVoiceChat();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCClientNotificationClaimSteamDeckRewards(): CClientNotificationClaimSteamDeckRewards {
  return {};
}

export const CClientNotificationClaimSteamDeckRewards = {
  encode(_: CClientNotificationClaimSteamDeckRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationClaimSteamDeckRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationClaimSteamDeckRewards();
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

  fromJSON(_: any): CClientNotificationClaimSteamDeckRewards {
    return {};
  },

  toJSON(_: CClientNotificationClaimSteamDeckRewards): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationClaimSteamDeckRewards>, I>>(
    base?: I,
  ): CClientNotificationClaimSteamDeckRewards {
    return CClientNotificationClaimSteamDeckRewards.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationClaimSteamDeckRewards>, I>>(
    _: I,
  ): CClientNotificationClaimSteamDeckRewards {
    const message = createBaseCClientNotificationClaimSteamDeckRewards();
    return message;
  },
};

function createBaseCClientNotificationGiftReceived(): CClientNotificationGiftReceived {
  return { senderName: "" };
}

export const CClientNotificationGiftReceived = {
  encode(message: CClientNotificationGiftReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderName !== "") {
      writer.uint32(10).string(message.senderName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationGiftReceived {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationGiftReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationGiftReceived {
    return { senderName: isSet(object.senderName) ? String(object.senderName) : "" };
  },

  toJSON(message: CClientNotificationGiftReceived): unknown {
    const obj: any = {};
    message.senderName !== undefined && (obj.senderName = message.senderName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationGiftReceived>, I>>(base?: I): CClientNotificationGiftReceived {
    return CClientNotificationGiftReceived.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationGiftReceived>, I>>(
    object: I,
  ): CClientNotificationGiftReceived {
    const message = createBaseCClientNotificationGiftReceived();
    message.senderName = object.senderName ?? "";
    return message;
  },
};

function createBaseCClientNotificationItemAnnouncement(): CClientNotificationItemAnnouncement {
  return { newItemCount: 0, newBackpackItems: false };
}

export const CClientNotificationItemAnnouncement = {
  encode(message: CClientNotificationItemAnnouncement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newItemCount !== 0) {
      writer.uint32(8).uint32(message.newItemCount);
    }
    if (message.newBackpackItems === true) {
      writer.uint32(16).bool(message.newBackpackItems);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationItemAnnouncement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationItemAnnouncement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newItemCount = reader.uint32();
          break;
        case 2:
          message.newBackpackItems = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationItemAnnouncement {
    return {
      newItemCount: isSet(object.newItemCount) ? Number(object.newItemCount) : 0,
      newBackpackItems: isSet(object.newBackpackItems) ? Boolean(object.newBackpackItems) : false,
    };
  },

  toJSON(message: CClientNotificationItemAnnouncement): unknown {
    const obj: any = {};
    message.newItemCount !== undefined && (obj.newItemCount = Math.round(message.newItemCount));
    message.newBackpackItems !== undefined && (obj.newBackpackItems = message.newBackpackItems);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationItemAnnouncement>, I>>(
    base?: I,
  ): CClientNotificationItemAnnouncement {
    return CClientNotificationItemAnnouncement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationItemAnnouncement>, I>>(
    object: I,
  ): CClientNotificationItemAnnouncement {
    const message = createBaseCClientNotificationItemAnnouncement();
    message.newItemCount = object.newItemCount ?? 0;
    message.newBackpackItems = object.newBackpackItems ?? false;
    return message;
  },
};

function createBaseCClientNotificationHardwareSurveyPending(): CClientNotificationHardwareSurveyPending {
  return {};
}

export const CClientNotificationHardwareSurveyPending = {
  encode(_: CClientNotificationHardwareSurveyPending, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationHardwareSurveyPending {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationHardwareSurveyPending();
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

  fromJSON(_: any): CClientNotificationHardwareSurveyPending {
    return {};
  },

  toJSON(_: CClientNotificationHardwareSurveyPending): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationHardwareSurveyPending>, I>>(
    base?: I,
  ): CClientNotificationHardwareSurveyPending {
    return CClientNotificationHardwareSurveyPending.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationHardwareSurveyPending>, I>>(
    _: I,
  ): CClientNotificationHardwareSurveyPending {
    const message = createBaseCClientNotificationHardwareSurveyPending();
    return message;
  },
};

function createBaseCClientNotificationLowDiskSpace(): CClientNotificationLowDiskSpace {
  return { folderIndex: 0 };
}

export const CClientNotificationLowDiskSpace = {
  encode(message: CClientNotificationLowDiskSpace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.folderIndex !== 0) {
      writer.uint32(8).uint32(message.folderIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationLowDiskSpace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationLowDiskSpace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.folderIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationLowDiskSpace {
    return { folderIndex: isSet(object.folderIndex) ? Number(object.folderIndex) : 0 };
  },

  toJSON(message: CClientNotificationLowDiskSpace): unknown {
    const obj: any = {};
    message.folderIndex !== undefined && (obj.folderIndex = Math.round(message.folderIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationLowDiskSpace>, I>>(base?: I): CClientNotificationLowDiskSpace {
    return CClientNotificationLowDiskSpace.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationLowDiskSpace>, I>>(
    object: I,
  ): CClientNotificationLowDiskSpace {
    const message = createBaseCClientNotificationLowDiskSpace();
    message.folderIndex = object.folderIndex ?? 0;
    return message;
  },
};

function createBaseCClientNotificationBatteryTemperature(): CClientNotificationBatteryTemperature {
  return { temperature: 0, notificationType: "" };
}

export const CClientNotificationBatteryTemperature = {
  encode(message: CClientNotificationBatteryTemperature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.temperature !== 0) {
      writer.uint32(8).uint32(message.temperature);
    }
    if (message.notificationType !== "") {
      writer.uint32(18).string(message.notificationType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationBatteryTemperature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationBatteryTemperature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.temperature = reader.uint32();
          break;
        case 2:
          message.notificationType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationBatteryTemperature {
    return {
      temperature: isSet(object.temperature) ? Number(object.temperature) : 0,
      notificationType: isSet(object.notificationType) ? String(object.notificationType) : "",
    };
  },

  toJSON(message: CClientNotificationBatteryTemperature): unknown {
    const obj: any = {};
    message.temperature !== undefined && (obj.temperature = Math.round(message.temperature));
    message.notificationType !== undefined && (obj.notificationType = message.notificationType);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationBatteryTemperature>, I>>(
    base?: I,
  ): CClientNotificationBatteryTemperature {
    return CClientNotificationBatteryTemperature.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationBatteryTemperature>, I>>(
    object: I,
  ): CClientNotificationBatteryTemperature {
    const message = createBaseCClientNotificationBatteryTemperature();
    message.temperature = object.temperature ?? 0;
    message.notificationType = object.notificationType ?? "";
    return message;
  },
};

function createBaseCClientNotificationDockUnsupportedFirmware(): CClientNotificationDockUnsupportedFirmware {
  return {};
}

export const CClientNotificationDockUnsupportedFirmware = {
  encode(_: CClientNotificationDockUnsupportedFirmware, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationDockUnsupportedFirmware {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationDockUnsupportedFirmware();
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

  fromJSON(_: any): CClientNotificationDockUnsupportedFirmware {
    return {};
  },

  toJSON(_: CClientNotificationDockUnsupportedFirmware): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationDockUnsupportedFirmware>, I>>(
    base?: I,
  ): CClientNotificationDockUnsupportedFirmware {
    return CClientNotificationDockUnsupportedFirmware.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationDockUnsupportedFirmware>, I>>(
    _: I,
  ): CClientNotificationDockUnsupportedFirmware {
    const message = createBaseCClientNotificationDockUnsupportedFirmware();
    return message;
  },
};

function createBaseCClientNotificationPeerContentUpload(): CClientNotificationPeerContentUpload {
  return { appid: 0, peerName: "" };
}

export const CClientNotificationPeerContentUpload = {
  encode(message: CClientNotificationPeerContentUpload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.peerName !== "") {
      writer.uint32(18).string(message.peerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationPeerContentUpload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationPeerContentUpload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.peerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationPeerContentUpload {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      peerName: isSet(object.peerName) ? String(object.peerName) : "",
    };
  },

  toJSON(message: CClientNotificationPeerContentUpload): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.peerName !== undefined && (obj.peerName = message.peerName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationPeerContentUpload>, I>>(
    base?: I,
  ): CClientNotificationPeerContentUpload {
    return CClientNotificationPeerContentUpload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationPeerContentUpload>, I>>(
    object: I,
  ): CClientNotificationPeerContentUpload {
    const message = createBaseCClientNotificationPeerContentUpload();
    message.appid = object.appid ?? 0;
    message.peerName = object.peerName ?? "";
    return message;
  },
};

function createBaseCClientNotificationCannotReadControllerGuideButton(): CClientNotificationCannotReadControllerGuideButton {
  return { controllerIndex: 0 };
}

export const CClientNotificationCannotReadControllerGuideButton = {
  encode(
    message: CClientNotificationCannotReadControllerGuideButton,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controllerIndex !== 0) {
      writer.uint32(8).int32(message.controllerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientNotificationCannotReadControllerGuideButton {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientNotificationCannotReadControllerGuideButton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientNotificationCannotReadControllerGuideButton {
    return { controllerIndex: isSet(object.controllerIndex) ? Number(object.controllerIndex) : 0 };
  },

  toJSON(message: CClientNotificationCannotReadControllerGuideButton): unknown {
    const obj: any = {};
    message.controllerIndex !== undefined && (obj.controllerIndex = Math.round(message.controllerIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientNotificationCannotReadControllerGuideButton>, I>>(
    base?: I,
  ): CClientNotificationCannotReadControllerGuideButton {
    return CClientNotificationCannotReadControllerGuideButton.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientNotificationCannotReadControllerGuideButton>, I>>(
    object: I,
  ): CClientNotificationCannotReadControllerGuideButton {
    const message = createBaseCClientNotificationCannotReadControllerGuideButton();
    message.controllerIndex = object.controllerIndex ?? 0;
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
