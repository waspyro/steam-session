/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CMsgRemoteClientBroadcastStatus,
  EStreamTransport,
  eStreamTransportFromJSON,
  eStreamTransportToJSON,
} from "./steammessages_remoteclient_discovery";

export const protobufPackage = "";

export interface CMsgRemoteClientStatus {
  clientId: number;
  instanceId: number;
  status: CMsgRemoteClientBroadcastStatus | undefined;
}

export interface CMsgRemoteClientAppStatus {
  statusUpdates: CMsgRemoteClientAppStatus_AppStatus[];
}

export interface CMsgRemoteClientAppStatus_AppUpdateInfo {
  timeUpdateStart: number;
  bytesToDownload: number;
  bytesDownloaded: number;
  bytesToProcess: number;
  bytesProcessed: number;
  estimatedSecondsRemaining: number;
  updateResult: number;
  updateState: number;
}

export interface CMsgRemoteClientAppStatus_ShortcutInfo {
  name: string;
  icon: string;
  categories: string[];
  exepath: string;
}

export interface CMsgRemoteClientAppStatus_AppStatus {
  appId: number;
  appState: number;
  updateInfo: CMsgRemoteClientAppStatus_AppUpdateInfo | undefined;
  shortcutInfo: CMsgRemoteClientAppStatus_ShortcutInfo | undefined;
  launchAvailable: boolean;
}

export interface CMsgRemoteClientStartStream {
  appId: number;
  environment: number;
  gamepadCount: number;
  launchOption: number;
  lockParentalLock: boolean;
  unlockParentalLock: string;
  maximumResolutionX: number;
  maximumResolutionY: number;
  gamepads: CMsgRemoteClientStartStream_ReservedGamepad[];
  audioChannelCount: number;
  supportedTransport: EStreamTransport[];
}

export interface CMsgRemoteClientStartStream_ReservedGamepad {
  controllerType: number;
  controllerSubtype: number;
}

export interface CMsgRemoteClientStartStreamResponse {
  eLaunchResult: number;
  streamPort: number;
  launchOptions: number[];
  authToken: Buffer;
  transport: EStreamTransport;
  relayServer: string;
  launchTask: string;
  launchTaskDetail: string;
  launchTasksDone: number;
  launchTasksTotal: number;
}

export interface CMsgRemoteClientPing {
}

export interface CMsgRemoteClientPingResponse {
}

export interface CMsgRemoteClientAcceptEULA {
  appId: number[];
  eulaId: string[];
  eulaVersion: number[];
}

export interface CMsgRemoteClientGetControllerConfig {
  appId: number;
  controllerIndex: number;
}

export interface CMsgRemoteClientGetControllerConfigResponse {
  eresult: number;
  configVdf: Buffer;
}

export interface CMsgRemoteClientStreamingEnabled {
  enabled: boolean;
}

function createBaseCMsgRemoteClientStatus(): CMsgRemoteClientStatus {
  return { clientId: 0, instanceId: 0, status: undefined };
}

export const CMsgRemoteClientStatus = {
  encode(message: CMsgRemoteClientStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== 0) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.instanceId !== 0) {
      writer.uint32(16).uint64(message.instanceId);
    }
    if (message.status !== undefined) {
      CMsgRemoteClientBroadcastStatus.encode(message.status, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.instanceId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.status = CMsgRemoteClientBroadcastStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientStatus {
    return {
      clientId: isSet(object.clientId) ? Number(object.clientId) : 0,
      instanceId: isSet(object.instanceId) ? Number(object.instanceId) : 0,
      status: isSet(object.status) ? CMsgRemoteClientBroadcastStatus.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: CMsgRemoteClientStatus): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = Math.round(message.clientId));
    message.instanceId !== undefined && (obj.instanceId = Math.round(message.instanceId));
    message.status !== undefined &&
      (obj.status = message.status ? CMsgRemoteClientBroadcastStatus.toJSON(message.status) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientStatus>, I>>(base?: I): CMsgRemoteClientStatus {
    return CMsgRemoteClientStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientStatus>, I>>(object: I): CMsgRemoteClientStatus {
    const message = createBaseCMsgRemoteClientStatus();
    message.clientId = object.clientId ?? 0;
    message.instanceId = object.instanceId ?? 0;
    message.status = (object.status !== undefined && object.status !== null)
      ? CMsgRemoteClientBroadcastStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseCMsgRemoteClientAppStatus(): CMsgRemoteClientAppStatus {
  return { statusUpdates: [] };
}

export const CMsgRemoteClientAppStatus = {
  encode(message: CMsgRemoteClientAppStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statusUpdates) {
      CMsgRemoteClientAppStatus_AppStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientAppStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientAppStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusUpdates.push(CMsgRemoteClientAppStatus_AppStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientAppStatus {
    return {
      statusUpdates: Array.isArray(object?.statusUpdates)
        ? object.statusUpdates.map((e: any) => CMsgRemoteClientAppStatus_AppStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgRemoteClientAppStatus): unknown {
    const obj: any = {};
    if (message.statusUpdates) {
      obj.statusUpdates = message.statusUpdates.map((e) =>
        e ? CMsgRemoteClientAppStatus_AppStatus.toJSON(e) : undefined
      );
    } else {
      obj.statusUpdates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus>, I>>(base?: I): CMsgRemoteClientAppStatus {
    return CMsgRemoteClientAppStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus>, I>>(object: I): CMsgRemoteClientAppStatus {
    const message = createBaseCMsgRemoteClientAppStatus();
    message.statusUpdates = object.statusUpdates?.map((e) => CMsgRemoteClientAppStatus_AppStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgRemoteClientAppStatus_AppUpdateInfo(): CMsgRemoteClientAppStatus_AppUpdateInfo {
  return {
    timeUpdateStart: 0,
    bytesToDownload: 0,
    bytesDownloaded: 0,
    bytesToProcess: 0,
    bytesProcessed: 0,
    estimatedSecondsRemaining: 0,
    updateResult: 0,
    updateState: 0,
  };
}

export const CMsgRemoteClientAppStatus_AppUpdateInfo = {
  encode(message: CMsgRemoteClientAppStatus_AppUpdateInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeUpdateStart !== 0) {
      writer.uint32(13).fixed32(message.timeUpdateStart);
    }
    if (message.bytesToDownload !== 0) {
      writer.uint32(16).uint64(message.bytesToDownload);
    }
    if (message.bytesDownloaded !== 0) {
      writer.uint32(24).uint64(message.bytesDownloaded);
    }
    if (message.bytesToProcess !== 0) {
      writer.uint32(32).uint64(message.bytesToProcess);
    }
    if (message.bytesProcessed !== 0) {
      writer.uint32(40).uint64(message.bytesProcessed);
    }
    if (message.estimatedSecondsRemaining !== 0) {
      writer.uint32(48).int32(message.estimatedSecondsRemaining);
    }
    if (message.updateResult !== 0) {
      writer.uint32(56).int32(message.updateResult);
    }
    if (message.updateState !== 0) {
      writer.uint32(64).uint32(message.updateState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientAppStatus_AppUpdateInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientAppStatus_AppUpdateInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeUpdateStart = reader.fixed32();
          break;
        case 2:
          message.bytesToDownload = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.bytesDownloaded = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.bytesToProcess = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.bytesProcessed = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.estimatedSecondsRemaining = reader.int32();
          break;
        case 7:
          message.updateResult = reader.int32();
          break;
        case 8:
          message.updateState = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientAppStatus_AppUpdateInfo {
    return {
      timeUpdateStart: isSet(object.timeUpdateStart) ? Number(object.timeUpdateStart) : 0,
      bytesToDownload: isSet(object.bytesToDownload) ? Number(object.bytesToDownload) : 0,
      bytesDownloaded: isSet(object.bytesDownloaded) ? Number(object.bytesDownloaded) : 0,
      bytesToProcess: isSet(object.bytesToProcess) ? Number(object.bytesToProcess) : 0,
      bytesProcessed: isSet(object.bytesProcessed) ? Number(object.bytesProcessed) : 0,
      estimatedSecondsRemaining: isSet(object.estimatedSecondsRemaining) ? Number(object.estimatedSecondsRemaining) : 0,
      updateResult: isSet(object.updateResult) ? Number(object.updateResult) : 0,
      updateState: isSet(object.updateState) ? Number(object.updateState) : 0,
    };
  },

  toJSON(message: CMsgRemoteClientAppStatus_AppUpdateInfo): unknown {
    const obj: any = {};
    message.timeUpdateStart !== undefined && (obj.timeUpdateStart = Math.round(message.timeUpdateStart));
    message.bytesToDownload !== undefined && (obj.bytesToDownload = Math.round(message.bytesToDownload));
    message.bytesDownloaded !== undefined && (obj.bytesDownloaded = Math.round(message.bytesDownloaded));
    message.bytesToProcess !== undefined && (obj.bytesToProcess = Math.round(message.bytesToProcess));
    message.bytesProcessed !== undefined && (obj.bytesProcessed = Math.round(message.bytesProcessed));
    message.estimatedSecondsRemaining !== undefined &&
      (obj.estimatedSecondsRemaining = Math.round(message.estimatedSecondsRemaining));
    message.updateResult !== undefined && (obj.updateResult = Math.round(message.updateResult));
    message.updateState !== undefined && (obj.updateState = Math.round(message.updateState));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_AppUpdateInfo>, I>>(
    base?: I,
  ): CMsgRemoteClientAppStatus_AppUpdateInfo {
    return CMsgRemoteClientAppStatus_AppUpdateInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_AppUpdateInfo>, I>>(
    object: I,
  ): CMsgRemoteClientAppStatus_AppUpdateInfo {
    const message = createBaseCMsgRemoteClientAppStatus_AppUpdateInfo();
    message.timeUpdateStart = object.timeUpdateStart ?? 0;
    message.bytesToDownload = object.bytesToDownload ?? 0;
    message.bytesDownloaded = object.bytesDownloaded ?? 0;
    message.bytesToProcess = object.bytesToProcess ?? 0;
    message.bytesProcessed = object.bytesProcessed ?? 0;
    message.estimatedSecondsRemaining = object.estimatedSecondsRemaining ?? 0;
    message.updateResult = object.updateResult ?? 0;
    message.updateState = object.updateState ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteClientAppStatus_ShortcutInfo(): CMsgRemoteClientAppStatus_ShortcutInfo {
  return { name: "", icon: "", categories: [], exepath: "" };
}

export const CMsgRemoteClientAppStatus_ShortcutInfo = {
  encode(message: CMsgRemoteClientAppStatus_ShortcutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.icon !== "") {
      writer.uint32(18).string(message.icon);
    }
    for (const v of message.categories) {
      writer.uint32(26).string(v!);
    }
    if (message.exepath !== "") {
      writer.uint32(34).string(message.exepath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientAppStatus_ShortcutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientAppStatus_ShortcutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.icon = reader.string();
          break;
        case 3:
          message.categories.push(reader.string());
          break;
        case 4:
          message.exepath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientAppStatus_ShortcutInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      categories: Array.isArray(object?.categories) ? object.categories.map((e: any) => String(e)) : [],
      exepath: isSet(object.exepath) ? String(object.exepath) : "",
    };
  },

  toJSON(message: CMsgRemoteClientAppStatus_ShortcutInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.icon !== undefined && (obj.icon = message.icon);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    message.exepath !== undefined && (obj.exepath = message.exepath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_ShortcutInfo>, I>>(
    base?: I,
  ): CMsgRemoteClientAppStatus_ShortcutInfo {
    return CMsgRemoteClientAppStatus_ShortcutInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_ShortcutInfo>, I>>(
    object: I,
  ): CMsgRemoteClientAppStatus_ShortcutInfo {
    const message = createBaseCMsgRemoteClientAppStatus_ShortcutInfo();
    message.name = object.name ?? "";
    message.icon = object.icon ?? "";
    message.categories = object.categories?.map((e) => e) || [];
    message.exepath = object.exepath ?? "";
    return message;
  },
};

function createBaseCMsgRemoteClientAppStatus_AppStatus(): CMsgRemoteClientAppStatus_AppStatus {
  return { appId: 0, appState: 0, updateInfo: undefined, shortcutInfo: undefined, launchAvailable: false };
}

export const CMsgRemoteClientAppStatus_AppStatus = {
  encode(message: CMsgRemoteClientAppStatus_AppStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.appState !== 0) {
      writer.uint32(16).uint32(message.appState);
    }
    if (message.updateInfo !== undefined) {
      CMsgRemoteClientAppStatus_AppUpdateInfo.encode(message.updateInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.shortcutInfo !== undefined) {
      CMsgRemoteClientAppStatus_ShortcutInfo.encode(message.shortcutInfo, writer.uint32(34).fork()).ldelim();
    }
    if (message.launchAvailable === true) {
      writer.uint32(40).bool(message.launchAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientAppStatus_AppStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientAppStatus_AppStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.appState = reader.uint32();
          break;
        case 3:
          message.updateInfo = CMsgRemoteClientAppStatus_AppUpdateInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.shortcutInfo = CMsgRemoteClientAppStatus_ShortcutInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.launchAvailable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientAppStatus_AppStatus {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      appState: isSet(object.appState) ? Number(object.appState) : 0,
      updateInfo: isSet(object.updateInfo)
        ? CMsgRemoteClientAppStatus_AppUpdateInfo.fromJSON(object.updateInfo)
        : undefined,
      shortcutInfo: isSet(object.shortcutInfo)
        ? CMsgRemoteClientAppStatus_ShortcutInfo.fromJSON(object.shortcutInfo)
        : undefined,
      launchAvailable: isSet(object.launchAvailable) ? Boolean(object.launchAvailable) : false,
    };
  },

  toJSON(message: CMsgRemoteClientAppStatus_AppStatus): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.appState !== undefined && (obj.appState = Math.round(message.appState));
    message.updateInfo !== undefined && (obj.updateInfo = message.updateInfo
      ? CMsgRemoteClientAppStatus_AppUpdateInfo.toJSON(message.updateInfo)
      : undefined);
    message.shortcutInfo !== undefined && (obj.shortcutInfo = message.shortcutInfo
      ? CMsgRemoteClientAppStatus_ShortcutInfo.toJSON(message.shortcutInfo)
      : undefined);
    message.launchAvailable !== undefined && (obj.launchAvailable = message.launchAvailable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_AppStatus>, I>>(
    base?: I,
  ): CMsgRemoteClientAppStatus_AppStatus {
    return CMsgRemoteClientAppStatus_AppStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientAppStatus_AppStatus>, I>>(
    object: I,
  ): CMsgRemoteClientAppStatus_AppStatus {
    const message = createBaseCMsgRemoteClientAppStatus_AppStatus();
    message.appId = object.appId ?? 0;
    message.appState = object.appState ?? 0;
    message.updateInfo = (object.updateInfo !== undefined && object.updateInfo !== null)
      ? CMsgRemoteClientAppStatus_AppUpdateInfo.fromPartial(object.updateInfo)
      : undefined;
    message.shortcutInfo = (object.shortcutInfo !== undefined && object.shortcutInfo !== null)
      ? CMsgRemoteClientAppStatus_ShortcutInfo.fromPartial(object.shortcutInfo)
      : undefined;
    message.launchAvailable = object.launchAvailable ?? false;
    return message;
  },
};

function createBaseCMsgRemoteClientStartStream(): CMsgRemoteClientStartStream {
  return {
    appId: 0,
    environment: 0,
    gamepadCount: 0,
    launchOption: 0,
    lockParentalLock: false,
    unlockParentalLock: "",
    maximumResolutionX: 0,
    maximumResolutionY: 0,
    gamepads: [],
    audioChannelCount: 0,
    supportedTransport: [],
  };
}

export const CMsgRemoteClientStartStream = {
  encode(message: CMsgRemoteClientStartStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.environment !== 0) {
      writer.uint32(16).int32(message.environment);
    }
    if (message.gamepadCount !== 0) {
      writer.uint32(24).int32(message.gamepadCount);
    }
    if (message.launchOption !== 0) {
      writer.uint32(32).int32(message.launchOption);
    }
    if (message.lockParentalLock === true) {
      writer.uint32(40).bool(message.lockParentalLock);
    }
    if (message.unlockParentalLock !== "") {
      writer.uint32(50).string(message.unlockParentalLock);
    }
    if (message.maximumResolutionX !== 0) {
      writer.uint32(56).int32(message.maximumResolutionX);
    }
    if (message.maximumResolutionY !== 0) {
      writer.uint32(64).int32(message.maximumResolutionY);
    }
    for (const v of message.gamepads) {
      CMsgRemoteClientStartStream_ReservedGamepad.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(80).int32(message.audioChannelCount);
    }
    writer.uint32(90).fork();
    for (const v of message.supportedTransport) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientStartStream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientStartStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.environment = reader.int32();
          break;
        case 3:
          message.gamepadCount = reader.int32();
          break;
        case 4:
          message.launchOption = reader.int32();
          break;
        case 5:
          message.lockParentalLock = reader.bool();
          break;
        case 6:
          message.unlockParentalLock = reader.string();
          break;
        case 7:
          message.maximumResolutionX = reader.int32();
          break;
        case 8:
          message.maximumResolutionY = reader.int32();
          break;
        case 9:
          message.gamepads.push(CMsgRemoteClientStartStream_ReservedGamepad.decode(reader, reader.uint32()));
          break;
        case 10:
          message.audioChannelCount = reader.int32();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedTransport.push(reader.int32() as any);
            }
          } else {
            message.supportedTransport.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientStartStream {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      environment: isSet(object.environment) ? Number(object.environment) : 0,
      gamepadCount: isSet(object.gamepadCount) ? Number(object.gamepadCount) : 0,
      launchOption: isSet(object.launchOption) ? Number(object.launchOption) : 0,
      lockParentalLock: isSet(object.lockParentalLock) ? Boolean(object.lockParentalLock) : false,
      unlockParentalLock: isSet(object.unlockParentalLock) ? String(object.unlockParentalLock) : "",
      maximumResolutionX: isSet(object.maximumResolutionX) ? Number(object.maximumResolutionX) : 0,
      maximumResolutionY: isSet(object.maximumResolutionY) ? Number(object.maximumResolutionY) : 0,
      gamepads: Array.isArray(object?.gamepads)
        ? object.gamepads.map((e: any) => CMsgRemoteClientStartStream_ReservedGamepad.fromJSON(e))
        : [],
      audioChannelCount: isSet(object.audioChannelCount) ? Number(object.audioChannelCount) : 0,
      supportedTransport: Array.isArray(object?.supportedTransport)
        ? object.supportedTransport.map((e: any) => eStreamTransportFromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgRemoteClientStartStream): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.environment !== undefined && (obj.environment = Math.round(message.environment));
    message.gamepadCount !== undefined && (obj.gamepadCount = Math.round(message.gamepadCount));
    message.launchOption !== undefined && (obj.launchOption = Math.round(message.launchOption));
    message.lockParentalLock !== undefined && (obj.lockParentalLock = message.lockParentalLock);
    message.unlockParentalLock !== undefined && (obj.unlockParentalLock = message.unlockParentalLock);
    message.maximumResolutionX !== undefined && (obj.maximumResolutionX = Math.round(message.maximumResolutionX));
    message.maximumResolutionY !== undefined && (obj.maximumResolutionY = Math.round(message.maximumResolutionY));
    if (message.gamepads) {
      obj.gamepads = message.gamepads.map((e) => e ? CMsgRemoteClientStartStream_ReservedGamepad.toJSON(e) : undefined);
    } else {
      obj.gamepads = [];
    }
    message.audioChannelCount !== undefined && (obj.audioChannelCount = Math.round(message.audioChannelCount));
    if (message.supportedTransport) {
      obj.supportedTransport = message.supportedTransport.map((e) => eStreamTransportToJSON(e));
    } else {
      obj.supportedTransport = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientStartStream>, I>>(base?: I): CMsgRemoteClientStartStream {
    return CMsgRemoteClientStartStream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientStartStream>, I>>(object: I): CMsgRemoteClientStartStream {
    const message = createBaseCMsgRemoteClientStartStream();
    message.appId = object.appId ?? 0;
    message.environment = object.environment ?? 0;
    message.gamepadCount = object.gamepadCount ?? 0;
    message.launchOption = object.launchOption ?? 0;
    message.lockParentalLock = object.lockParentalLock ?? false;
    message.unlockParentalLock = object.unlockParentalLock ?? "";
    message.maximumResolutionX = object.maximumResolutionX ?? 0;
    message.maximumResolutionY = object.maximumResolutionY ?? 0;
    message.gamepads = object.gamepads?.map((e) => CMsgRemoteClientStartStream_ReservedGamepad.fromPartial(e)) || [];
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.supportedTransport = object.supportedTransport?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgRemoteClientStartStream_ReservedGamepad(): CMsgRemoteClientStartStream_ReservedGamepad {
  return { controllerType: 0, controllerSubtype: 0 };
}

export const CMsgRemoteClientStartStream_ReservedGamepad = {
  encode(message: CMsgRemoteClientStartStream_ReservedGamepad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerType !== 0) {
      writer.uint32(8).uint32(message.controllerType);
    }
    if (message.controllerSubtype !== 0) {
      writer.uint32(16).uint32(message.controllerSubtype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientStartStream_ReservedGamepad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientStartStream_ReservedGamepad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerType = reader.uint32();
          break;
        case 2:
          message.controllerSubtype = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientStartStream_ReservedGamepad {
    return {
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      controllerSubtype: isSet(object.controllerSubtype) ? Number(object.controllerSubtype) : 0,
    };
  },

  toJSON(message: CMsgRemoteClientStartStream_ReservedGamepad): unknown {
    const obj: any = {};
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.controllerSubtype !== undefined && (obj.controllerSubtype = Math.round(message.controllerSubtype));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientStartStream_ReservedGamepad>, I>>(
    base?: I,
  ): CMsgRemoteClientStartStream_ReservedGamepad {
    return CMsgRemoteClientStartStream_ReservedGamepad.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientStartStream_ReservedGamepad>, I>>(
    object: I,
  ): CMsgRemoteClientStartStream_ReservedGamepad {
    const message = createBaseCMsgRemoteClientStartStream_ReservedGamepad();
    message.controllerType = object.controllerType ?? 0;
    message.controllerSubtype = object.controllerSubtype ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteClientStartStreamResponse(): CMsgRemoteClientStartStreamResponse {
  return {
    eLaunchResult: 0,
    streamPort: 0,
    launchOptions: [],
    authToken: Buffer.alloc(0),
    transport: 0,
    relayServer: "",
    launchTask: "",
    launchTaskDetail: "",
    launchTasksDone: 0,
    launchTasksTotal: 0,
  };
}

export const CMsgRemoteClientStartStreamResponse = {
  encode(message: CMsgRemoteClientStartStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eLaunchResult !== 0) {
      writer.uint32(8).int32(message.eLaunchResult);
    }
    if (message.streamPort !== 0) {
      writer.uint32(16).uint32(message.streamPort);
    }
    writer.uint32(26).fork();
    for (const v of message.launchOptions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.authToken.length !== 0) {
      writer.uint32(34).bytes(message.authToken);
    }
    if (message.transport !== 0) {
      writer.uint32(40).int32(message.transport);
    }
    if (message.relayServer !== "") {
      writer.uint32(50).string(message.relayServer);
    }
    if (message.launchTask !== "") {
      writer.uint32(58).string(message.launchTask);
    }
    if (message.launchTaskDetail !== "") {
      writer.uint32(66).string(message.launchTaskDetail);
    }
    if (message.launchTasksDone !== 0) {
      writer.uint32(72).int32(message.launchTasksDone);
    }
    if (message.launchTasksTotal !== 0) {
      writer.uint32(80).int32(message.launchTasksTotal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientStartStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientStartStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eLaunchResult = reader.int32();
          break;
        case 2:
          message.streamPort = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.launchOptions.push(reader.int32());
            }
          } else {
            message.launchOptions.push(reader.int32());
          }
          break;
        case 4:
          message.authToken = reader.bytes() as Buffer;
          break;
        case 5:
          message.transport = reader.int32() as any;
          break;
        case 6:
          message.relayServer = reader.string();
          break;
        case 7:
          message.launchTask = reader.string();
          break;
        case 8:
          message.launchTaskDetail = reader.string();
          break;
        case 9:
          message.launchTasksDone = reader.int32();
          break;
        case 10:
          message.launchTasksTotal = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientStartStreamResponse {
    return {
      eLaunchResult: isSet(object.eLaunchResult) ? Number(object.eLaunchResult) : 0,
      streamPort: isSet(object.streamPort) ? Number(object.streamPort) : 0,
      launchOptions: Array.isArray(object?.launchOptions) ? object.launchOptions.map((e: any) => Number(e)) : [],
      authToken: isSet(object.authToken) ? Buffer.from(bytesFromBase64(object.authToken)) : Buffer.alloc(0),
      transport: isSet(object.transport) ? eStreamTransportFromJSON(object.transport) : 0,
      relayServer: isSet(object.relayServer) ? String(object.relayServer) : "",
      launchTask: isSet(object.launchTask) ? String(object.launchTask) : "",
      launchTaskDetail: isSet(object.launchTaskDetail) ? String(object.launchTaskDetail) : "",
      launchTasksDone: isSet(object.launchTasksDone) ? Number(object.launchTasksDone) : 0,
      launchTasksTotal: isSet(object.launchTasksTotal) ? Number(object.launchTasksTotal) : 0,
    };
  },

  toJSON(message: CMsgRemoteClientStartStreamResponse): unknown {
    const obj: any = {};
    message.eLaunchResult !== undefined && (obj.eLaunchResult = Math.round(message.eLaunchResult));
    message.streamPort !== undefined && (obj.streamPort = Math.round(message.streamPort));
    if (message.launchOptions) {
      obj.launchOptions = message.launchOptions.map((e) => Math.round(e));
    } else {
      obj.launchOptions = [];
    }
    message.authToken !== undefined &&
      (obj.authToken = base64FromBytes(message.authToken !== undefined ? message.authToken : Buffer.alloc(0)));
    message.transport !== undefined && (obj.transport = eStreamTransportToJSON(message.transport));
    message.relayServer !== undefined && (obj.relayServer = message.relayServer);
    message.launchTask !== undefined && (obj.launchTask = message.launchTask);
    message.launchTaskDetail !== undefined && (obj.launchTaskDetail = message.launchTaskDetail);
    message.launchTasksDone !== undefined && (obj.launchTasksDone = Math.round(message.launchTasksDone));
    message.launchTasksTotal !== undefined && (obj.launchTasksTotal = Math.round(message.launchTasksTotal));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientStartStreamResponse>, I>>(
    base?: I,
  ): CMsgRemoteClientStartStreamResponse {
    return CMsgRemoteClientStartStreamResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientStartStreamResponse>, I>>(
    object: I,
  ): CMsgRemoteClientStartStreamResponse {
    const message = createBaseCMsgRemoteClientStartStreamResponse();
    message.eLaunchResult = object.eLaunchResult ?? 0;
    message.streamPort = object.streamPort ?? 0;
    message.launchOptions = object.launchOptions?.map((e) => e) || [];
    message.authToken = object.authToken ?? Buffer.alloc(0);
    message.transport = object.transport ?? 0;
    message.relayServer = object.relayServer ?? "";
    message.launchTask = object.launchTask ?? "";
    message.launchTaskDetail = object.launchTaskDetail ?? "";
    message.launchTasksDone = object.launchTasksDone ?? 0;
    message.launchTasksTotal = object.launchTasksTotal ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteClientPing(): CMsgRemoteClientPing {
  return {};
}

export const CMsgRemoteClientPing = {
  encode(_: CMsgRemoteClientPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientPing();
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

  fromJSON(_: any): CMsgRemoteClientPing {
    return {};
  },

  toJSON(_: CMsgRemoteClientPing): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientPing>, I>>(base?: I): CMsgRemoteClientPing {
    return CMsgRemoteClientPing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientPing>, I>>(_: I): CMsgRemoteClientPing {
    const message = createBaseCMsgRemoteClientPing();
    return message;
  },
};

function createBaseCMsgRemoteClientPingResponse(): CMsgRemoteClientPingResponse {
  return {};
}

export const CMsgRemoteClientPingResponse = {
  encode(_: CMsgRemoteClientPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientPingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientPingResponse();
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

  fromJSON(_: any): CMsgRemoteClientPingResponse {
    return {};
  },

  toJSON(_: CMsgRemoteClientPingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientPingResponse>, I>>(base?: I): CMsgRemoteClientPingResponse {
    return CMsgRemoteClientPingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientPingResponse>, I>>(_: I): CMsgRemoteClientPingResponse {
    const message = createBaseCMsgRemoteClientPingResponse();
    return message;
  },
};

function createBaseCMsgRemoteClientAcceptEULA(): CMsgRemoteClientAcceptEULA {
  return { appId: [], eulaId: [], eulaVersion: [] };
}

export const CMsgRemoteClientAcceptEULA = {
  encode(message: CMsgRemoteClientAcceptEULA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appId) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.eulaId) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.eulaVersion) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientAcceptEULA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientAcceptEULA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appId.push(reader.uint32());
            }
          } else {
            message.appId.push(reader.uint32());
          }
          break;
        case 2:
          message.eulaId.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.eulaVersion.push(reader.uint32());
            }
          } else {
            message.eulaVersion.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientAcceptEULA {
    return {
      appId: Array.isArray(object?.appId) ? object.appId.map((e: any) => Number(e)) : [],
      eulaId: Array.isArray(object?.eulaId) ? object.eulaId.map((e: any) => String(e)) : [],
      eulaVersion: Array.isArray(object?.eulaVersion) ? object.eulaVersion.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgRemoteClientAcceptEULA): unknown {
    const obj: any = {};
    if (message.appId) {
      obj.appId = message.appId.map((e) => Math.round(e));
    } else {
      obj.appId = [];
    }
    if (message.eulaId) {
      obj.eulaId = message.eulaId.map((e) => e);
    } else {
      obj.eulaId = [];
    }
    if (message.eulaVersion) {
      obj.eulaVersion = message.eulaVersion.map((e) => Math.round(e));
    } else {
      obj.eulaVersion = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientAcceptEULA>, I>>(base?: I): CMsgRemoteClientAcceptEULA {
    return CMsgRemoteClientAcceptEULA.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientAcceptEULA>, I>>(object: I): CMsgRemoteClientAcceptEULA {
    const message = createBaseCMsgRemoteClientAcceptEULA();
    message.appId = object.appId?.map((e) => e) || [];
    message.eulaId = object.eulaId?.map((e) => e) || [];
    message.eulaVersion = object.eulaVersion?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgRemoteClientGetControllerConfig(): CMsgRemoteClientGetControllerConfig {
  return { appId: 0, controllerIndex: 0 };
}

export const CMsgRemoteClientGetControllerConfig = {
  encode(message: CMsgRemoteClientGetControllerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.controllerIndex !== 0) {
      writer.uint32(24).uint32(message.controllerIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientGetControllerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientGetControllerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 3:
          message.controllerIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientGetControllerConfig {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      controllerIndex: isSet(object.controllerIndex) ? Number(object.controllerIndex) : 0,
    };
  },

  toJSON(message: CMsgRemoteClientGetControllerConfig): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.controllerIndex !== undefined && (obj.controllerIndex = Math.round(message.controllerIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientGetControllerConfig>, I>>(
    base?: I,
  ): CMsgRemoteClientGetControllerConfig {
    return CMsgRemoteClientGetControllerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientGetControllerConfig>, I>>(
    object: I,
  ): CMsgRemoteClientGetControllerConfig {
    const message = createBaseCMsgRemoteClientGetControllerConfig();
    message.appId = object.appId ?? 0;
    message.controllerIndex = object.controllerIndex ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteClientGetControllerConfigResponse(): CMsgRemoteClientGetControllerConfigResponse {
  return { eresult: 0, configVdf: Buffer.alloc(0) };
}

export const CMsgRemoteClientGetControllerConfigResponse = {
  encode(message: CMsgRemoteClientGetControllerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.configVdf.length !== 0) {
      writer.uint32(18).bytes(message.configVdf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientGetControllerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientGetControllerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.configVdf = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientGetControllerConfigResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      configVdf: isSet(object.configVdf) ? Buffer.from(bytesFromBase64(object.configVdf)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgRemoteClientGetControllerConfigResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.configVdf !== undefined &&
      (obj.configVdf = base64FromBytes(message.configVdf !== undefined ? message.configVdf : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientGetControllerConfigResponse>, I>>(
    base?: I,
  ): CMsgRemoteClientGetControllerConfigResponse {
    return CMsgRemoteClientGetControllerConfigResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientGetControllerConfigResponse>, I>>(
    object: I,
  ): CMsgRemoteClientGetControllerConfigResponse {
    const message = createBaseCMsgRemoteClientGetControllerConfigResponse();
    message.eresult = object.eresult ?? 0;
    message.configVdf = object.configVdf ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgRemoteClientStreamingEnabled(): CMsgRemoteClientStreamingEnabled {
  return { enabled: false };
}

export const CMsgRemoteClientStreamingEnabled = {
  encode(message: CMsgRemoteClientStreamingEnabled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientStreamingEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientStreamingEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientStreamingEnabled {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CMsgRemoteClientStreamingEnabled): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientStreamingEnabled>, I>>(
    base?: I,
  ): CMsgRemoteClientStreamingEnabled {
    return CMsgRemoteClientStreamingEnabled.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientStreamingEnabled>, I>>(
    object: I,
  ): CMsgRemoteClientStreamingEnabled {
    const message = createBaseCMsgRemoteClientStreamingEnabled();
    message.enabled = object.enabled ?? false;
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
