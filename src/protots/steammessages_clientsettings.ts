/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EClientSettingStore {
  k_EClientSettingStore_Invalid = 0,
  k_EClientSettingStore_ConfigStore_Install = 1,
  k_EClientSettingStore_ConfigStore_UserRoaming = 2,
  k_EClientSettingStore_ConfigStore_UserLocal = 3,
  k_EClientSettingStore_Registry = 4,
  k_EClientSettingStore_CustomFunc = 5,
  UNRECOGNIZED = -1,
}

export function eClientSettingStoreFromJSON(object: any): EClientSettingStore {
  switch (object) {
    case 0:
    case "k_EClientSettingStore_Invalid":
      return EClientSettingStore.k_EClientSettingStore_Invalid;
    case 1:
    case "k_EClientSettingStore_ConfigStore_Install":
      return EClientSettingStore.k_EClientSettingStore_ConfigStore_Install;
    case 2:
    case "k_EClientSettingStore_ConfigStore_UserRoaming":
      return EClientSettingStore.k_EClientSettingStore_ConfigStore_UserRoaming;
    case 3:
    case "k_EClientSettingStore_ConfigStore_UserLocal":
      return EClientSettingStore.k_EClientSettingStore_ConfigStore_UserLocal;
    case 4:
    case "k_EClientSettingStore_Registry":
      return EClientSettingStore.k_EClientSettingStore_Registry;
    case 5:
    case "k_EClientSettingStore_CustomFunc":
      return EClientSettingStore.k_EClientSettingStore_CustomFunc;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EClientSettingStore.UNRECOGNIZED;
  }
}

export function eClientSettingStoreToJSON(object: EClientSettingStore): string {
  switch (object) {
    case EClientSettingStore.k_EClientSettingStore_Invalid:
      return "k_EClientSettingStore_Invalid";
    case EClientSettingStore.k_EClientSettingStore_ConfigStore_Install:
      return "k_EClientSettingStore_ConfigStore_Install";
    case EClientSettingStore.k_EClientSettingStore_ConfigStore_UserRoaming:
      return "k_EClientSettingStore_ConfigStore_UserRoaming";
    case EClientSettingStore.k_EClientSettingStore_ConfigStore_UserLocal:
      return "k_EClientSettingStore_ConfigStore_UserLocal";
    case EClientSettingStore.k_EClientSettingStore_Registry:
      return "k_EClientSettingStore_Registry";
    case EClientSettingStore.k_EClientSettingStore_CustomFunc:
      return "k_EClientSettingStore_CustomFunc";
    case EClientSettingStore.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgHotkey {
  keyCode: number;
  altKey: boolean;
  shiftKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  displayName: string;
}

export interface CMsgClientSettings {
  noSavePersonalInfo: boolean;
  oobeTestModeEnabled: boolean;
  inClientBeta: boolean;
  isSteamSideloaded: boolean;
  preferredMonitor: string;
  steamCefGpuBlocklistDisabled: boolean;
  bigpictureWindowed: boolean;
  displayName: string;
  isExternalDisplay: boolean;
  steamOsUnderscanLevel: number;
  steamOsUnderscanEnabled: boolean;
  minScaleFactor: number;
  maxScaleFactor: number;
  autoScaleFactor: number;
  enableTestUpdaters: boolean;
  smallMode: boolean;
  disableAllToasts: boolean;
  disableToastsInGame: boolean;
  showFamilySharingNotifications: boolean;
  overlayFpsCounterCorner: number;
  overlayFpsCounterHighContrast: boolean;
  overlayKey: CMsgHotkey | undefined;
  screenshotKey: CMsgHotkey | undefined;
  enableOverlay: boolean;
  disableDesktopGameTheater: boolean;
  enableScreenshotNotification: boolean;
  enableScreenshotSound: boolean;
  saveUncompressedScreenshots: boolean;
  screenshotsPath: string;
  defaultPingRate: number;
  serverPingRate: number;
  steamNetworkingShareIp: number;
  smoothScrollWebviews: boolean;
  enableGpuAcceleratedWebviews: boolean;
  enableHardwareVideoDecoding: boolean;
  runAtStartup: boolean;
  enableDpiScaling: boolean;
  enableMarketingMessages: boolean;
  startInBigPictureMode: boolean;
  jumplistFlags: number;
  libraryDisplaySize: number;
  libraryWhatsNewShowOnlyProductUpdates: boolean;
  showStoreContentOnHome: boolean;
  startPage: string;
  libraryLowBandwidthMode: boolean;
  libraryLowPerfMode: boolean;
  libraryDisableCommunityContent: boolean;
  libraryDisplayIconInGameList: boolean;
  enableShaderPrecache: boolean;
  enableShaderBackgroundProcessing: boolean;
  shaderPrecachedSize: number;
  needsSteamServiceRepair: boolean;
  cloudEnabled: boolean;
  showScreenshotManager: boolean;
  musicVolume: number;
  musicPauseOnAppStart: boolean;
  musicPauseOnVoiceChat: boolean;
  musicDownloadHighQuality: boolean;
  musicPlaylistNotification: boolean;
  broadcastPermissions: number;
  broadcastOutputWidth: number;
  broadcastOutputHeight: number;
  broadcastBitrate: number;
  broadcastEncodingOption: number;
  broadcastRecordAllVideo: boolean;
  broadcastRecordAllAudio: boolean;
  broadcastRecordMicrophone: boolean;
  broadcastShowUploadStats: boolean;
  broadcastShowLiveReminder: boolean;
  broadcastChatCorner: number;
  steamInputConfiguratorErrorMsgEnable: boolean;
  controllerGuideButtonFocusSteam: boolean;
  controllerPs4Support: boolean;
  controllerXboxSupport: boolean;
  controllerXboxDriver: boolean;
  controllerSwitchSupport: boolean;
  controllerGenericSupport: boolean;
  controllerPowerOffTimeout: number;
  turnOffControllerOnExit: boolean;
  controllerCombineNintendoJoycons: boolean;
}

function createBaseCMsgHotkey(): CMsgHotkey {
  return { keyCode: 0, altKey: false, shiftKey: false, ctrlKey: false, metaKey: false, displayName: "" };
}

export const CMsgHotkey = {
  encode(message: CMsgHotkey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyCode !== 0) {
      writer.uint32(8).uint32(message.keyCode);
    }
    if (message.altKey === true) {
      writer.uint32(16).bool(message.altKey);
    }
    if (message.shiftKey === true) {
      writer.uint32(24).bool(message.shiftKey);
    }
    if (message.ctrlKey === true) {
      writer.uint32(32).bool(message.ctrlKey);
    }
    if (message.metaKey === true) {
      writer.uint32(40).bool(message.metaKey);
    }
    if (message.displayName !== "") {
      writer.uint32(50).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHotkey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHotkey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyCode = reader.uint32();
          break;
        case 2:
          message.altKey = reader.bool();
          break;
        case 3:
          message.shiftKey = reader.bool();
          break;
        case 4:
          message.ctrlKey = reader.bool();
          break;
        case 5:
          message.metaKey = reader.bool();
          break;
        case 6:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHotkey {
    return {
      keyCode: isSet(object.keyCode) ? Number(object.keyCode) : 0,
      altKey: isSet(object.altKey) ? Boolean(object.altKey) : false,
      shiftKey: isSet(object.shiftKey) ? Boolean(object.shiftKey) : false,
      ctrlKey: isSet(object.ctrlKey) ? Boolean(object.ctrlKey) : false,
      metaKey: isSet(object.metaKey) ? Boolean(object.metaKey) : false,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: CMsgHotkey): unknown {
    const obj: any = {};
    message.keyCode !== undefined && (obj.keyCode = Math.round(message.keyCode));
    message.altKey !== undefined && (obj.altKey = message.altKey);
    message.shiftKey !== undefined && (obj.shiftKey = message.shiftKey);
    message.ctrlKey !== undefined && (obj.ctrlKey = message.ctrlKey);
    message.metaKey !== undefined && (obj.metaKey = message.metaKey);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHotkey>, I>>(base?: I): CMsgHotkey {
    return CMsgHotkey.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHotkey>, I>>(object: I): CMsgHotkey {
    const message = createBaseCMsgHotkey();
    message.keyCode = object.keyCode ?? 0;
    message.altKey = object.altKey ?? false;
    message.shiftKey = object.shiftKey ?? false;
    message.ctrlKey = object.ctrlKey ?? false;
    message.metaKey = object.metaKey ?? false;
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseCMsgClientSettings(): CMsgClientSettings {
  return {
    noSavePersonalInfo: false,
    oobeTestModeEnabled: false,
    inClientBeta: false,
    isSteamSideloaded: false,
    preferredMonitor: "",
    steamCefGpuBlocklistDisabled: false,
    bigpictureWindowed: false,
    displayName: "",
    isExternalDisplay: false,
    steamOsUnderscanLevel: 0,
    steamOsUnderscanEnabled: false,
    minScaleFactor: 0,
    maxScaleFactor: 0,
    autoScaleFactor: 0,
    enableTestUpdaters: false,
    smallMode: false,
    disableAllToasts: false,
    disableToastsInGame: false,
    showFamilySharingNotifications: false,
    overlayFpsCounterCorner: 0,
    overlayFpsCounterHighContrast: false,
    overlayKey: undefined,
    screenshotKey: undefined,
    enableOverlay: false,
    disableDesktopGameTheater: false,
    enableScreenshotNotification: false,
    enableScreenshotSound: false,
    saveUncompressedScreenshots: false,
    screenshotsPath: "",
    defaultPingRate: 0,
    serverPingRate: 0,
    steamNetworkingShareIp: 0,
    smoothScrollWebviews: false,
    enableGpuAcceleratedWebviews: false,
    enableHardwareVideoDecoding: false,
    runAtStartup: false,
    enableDpiScaling: false,
    enableMarketingMessages: false,
    startInBigPictureMode: false,
    jumplistFlags: 0,
    libraryDisplaySize: 0,
    libraryWhatsNewShowOnlyProductUpdates: false,
    showStoreContentOnHome: false,
    startPage: "",
    libraryLowBandwidthMode: false,
    libraryLowPerfMode: false,
    libraryDisableCommunityContent: false,
    libraryDisplayIconInGameList: false,
    enableShaderPrecache: false,
    enableShaderBackgroundProcessing: false,
    shaderPrecachedSize: 0,
    needsSteamServiceRepair: false,
    cloudEnabled: false,
    showScreenshotManager: false,
    musicVolume: 0,
    musicPauseOnAppStart: false,
    musicPauseOnVoiceChat: false,
    musicDownloadHighQuality: false,
    musicPlaylistNotification: false,
    broadcastPermissions: 0,
    broadcastOutputWidth: 0,
    broadcastOutputHeight: 0,
    broadcastBitrate: 0,
    broadcastEncodingOption: 0,
    broadcastRecordAllVideo: false,
    broadcastRecordAllAudio: false,
    broadcastRecordMicrophone: false,
    broadcastShowUploadStats: false,
    broadcastShowLiveReminder: false,
    broadcastChatCorner: 0,
    steamInputConfiguratorErrorMsgEnable: false,
    controllerGuideButtonFocusSteam: false,
    controllerPs4Support: false,
    controllerXboxSupport: false,
    controllerXboxDriver: false,
    controllerSwitchSupport: false,
    controllerGenericSupport: false,
    controllerPowerOffTimeout: 0,
    turnOffControllerOnExit: false,
    controllerCombineNintendoJoycons: false,
  };
}

export const CMsgClientSettings = {
  encode(message: CMsgClientSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noSavePersonalInfo === true) {
      writer.uint32(8).bool(message.noSavePersonalInfo);
    }
    if (message.oobeTestModeEnabled === true) {
      writer.uint32(16).bool(message.oobeTestModeEnabled);
    }
    if (message.inClientBeta === true) {
      writer.uint32(24).bool(message.inClientBeta);
    }
    if (message.isSteamSideloaded === true) {
      writer.uint32(32).bool(message.isSteamSideloaded);
    }
    if (message.preferredMonitor !== "") {
      writer.uint32(42).string(message.preferredMonitor);
    }
    if (message.steamCefGpuBlocklistDisabled === true) {
      writer.uint32(48).bool(message.steamCefGpuBlocklistDisabled);
    }
    if (message.bigpictureWindowed === true) {
      writer.uint32(56).bool(message.bigpictureWindowed);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    if (message.isExternalDisplay === true) {
      writer.uint32(72).bool(message.isExternalDisplay);
    }
    if (message.steamOsUnderscanLevel !== 0) {
      writer.uint32(85).float(message.steamOsUnderscanLevel);
    }
    if (message.steamOsUnderscanEnabled === true) {
      writer.uint32(88).bool(message.steamOsUnderscanEnabled);
    }
    if (message.minScaleFactor !== 0) {
      writer.uint32(101).float(message.minScaleFactor);
    }
    if (message.maxScaleFactor !== 0) {
      writer.uint32(109).float(message.maxScaleFactor);
    }
    if (message.autoScaleFactor !== 0) {
      writer.uint32(117).float(message.autoScaleFactor);
    }
    if (message.enableTestUpdaters === true) {
      writer.uint32(120).bool(message.enableTestUpdaters);
    }
    if (message.smallMode === true) {
      writer.uint32(128).bool(message.smallMode);
    }
    if (message.disableAllToasts === true) {
      writer.uint32(136).bool(message.disableAllToasts);
    }
    if (message.disableToastsInGame === true) {
      writer.uint32(144).bool(message.disableToastsInGame);
    }
    if (message.showFamilySharingNotifications === true) {
      writer.uint32(24000).bool(message.showFamilySharingNotifications);
    }
    if (message.overlayFpsCounterCorner !== 0) {
      writer.uint32(32000).int32(message.overlayFpsCounterCorner);
    }
    if (message.overlayFpsCounterHighContrast === true) {
      writer.uint32(32008).bool(message.overlayFpsCounterHighContrast);
    }
    if (message.overlayKey !== undefined) {
      CMsgHotkey.encode(message.overlayKey, writer.uint32(32018).fork()).ldelim();
    }
    if (message.screenshotKey !== undefined) {
      CMsgHotkey.encode(message.screenshotKey, writer.uint32(32026).fork()).ldelim();
    }
    if (message.enableOverlay === true) {
      writer.uint32(32032).bool(message.enableOverlay);
    }
    if (message.disableDesktopGameTheater === true) {
      writer.uint32(32040).bool(message.disableDesktopGameTheater);
    }
    if (message.enableScreenshotNotification === true) {
      writer.uint32(32048).bool(message.enableScreenshotNotification);
    }
    if (message.enableScreenshotSound === true) {
      writer.uint32(32056).bool(message.enableScreenshotSound);
    }
    if (message.saveUncompressedScreenshots === true) {
      writer.uint32(32064).bool(message.saveUncompressedScreenshots);
    }
    if (message.screenshotsPath !== "") {
      writer.uint32(32074).string(message.screenshotsPath);
    }
    if (message.defaultPingRate !== 0) {
      writer.uint32(32080).int32(message.defaultPingRate);
    }
    if (message.serverPingRate !== 0) {
      writer.uint32(32088).int32(message.serverPingRate);
    }
    if (message.steamNetworkingShareIp !== 0) {
      writer.uint32(32096).int32(message.steamNetworkingShareIp);
    }
    if (message.smoothScrollWebviews === true) {
      writer.uint32(40000).bool(message.smoothScrollWebviews);
    }
    if (message.enableGpuAcceleratedWebviews === true) {
      writer.uint32(40008).bool(message.enableGpuAcceleratedWebviews);
    }
    if (message.enableHardwareVideoDecoding === true) {
      writer.uint32(40024).bool(message.enableHardwareVideoDecoding);
    }
    if (message.runAtStartup === true) {
      writer.uint32(40032).bool(message.runAtStartup);
    }
    if (message.enableDpiScaling === true) {
      writer.uint32(40040).bool(message.enableDpiScaling);
    }
    if (message.enableMarketingMessages === true) {
      writer.uint32(40048).bool(message.enableMarketingMessages);
    }
    if (message.startInBigPictureMode === true) {
      writer.uint32(40056).bool(message.startInBigPictureMode);
    }
    if (message.jumplistFlags !== 0) {
      writer.uint32(40064).uint32(message.jumplistFlags);
    }
    if (message.libraryDisplaySize !== 0) {
      writer.uint32(56000).int32(message.libraryDisplaySize);
    }
    if (message.libraryWhatsNewShowOnlyProductUpdates === true) {
      writer.uint32(56008).bool(message.libraryWhatsNewShowOnlyProductUpdates);
    }
    if (message.showStoreContentOnHome === true) {
      writer.uint32(56016).bool(message.showStoreContentOnHome);
    }
    if (message.startPage !== "") {
      writer.uint32(56026).string(message.startPage);
    }
    if (message.libraryLowBandwidthMode === true) {
      writer.uint32(56032).bool(message.libraryLowBandwidthMode);
    }
    if (message.libraryLowPerfMode === true) {
      writer.uint32(56040).bool(message.libraryLowPerfMode);
    }
    if (message.libraryDisableCommunityContent === true) {
      writer.uint32(56048).bool(message.libraryDisableCommunityContent);
    }
    if (message.libraryDisplayIconInGameList === true) {
      writer.uint32(56056).bool(message.libraryDisplayIconInGameList);
    }
    if (message.enableShaderPrecache === true) {
      writer.uint32(64000).bool(message.enableShaderPrecache);
    }
    if (message.enableShaderBackgroundProcessing === true) {
      writer.uint32(64008).bool(message.enableShaderBackgroundProcessing);
    }
    if (message.shaderPrecachedSize !== 0) {
      writer.uint32(64016).uint64(message.shaderPrecachedSize);
    }
    if (message.needsSteamServiceRepair === true) {
      writer.uint32(64024).bool(message.needsSteamServiceRepair);
    }
    if (message.cloudEnabled === true) {
      writer.uint32(80000).bool(message.cloudEnabled);
    }
    if (message.showScreenshotManager === true) {
      writer.uint32(80008).bool(message.showScreenshotManager);
    }
    if (message.musicVolume !== 0) {
      writer.uint32(88000).int32(message.musicVolume);
    }
    if (message.musicPauseOnAppStart === true) {
      writer.uint32(88008).bool(message.musicPauseOnAppStart);
    }
    if (message.musicPauseOnVoiceChat === true) {
      writer.uint32(88016).bool(message.musicPauseOnVoiceChat);
    }
    if (message.musicDownloadHighQuality === true) {
      writer.uint32(88024).bool(message.musicDownloadHighQuality);
    }
    if (message.musicPlaylistNotification === true) {
      writer.uint32(88032).bool(message.musicPlaylistNotification);
    }
    if (message.broadcastPermissions !== 0) {
      writer.uint32(96000).int32(message.broadcastPermissions);
    }
    if (message.broadcastOutputWidth !== 0) {
      writer.uint32(96008).int32(message.broadcastOutputWidth);
    }
    if (message.broadcastOutputHeight !== 0) {
      writer.uint32(96016).int32(message.broadcastOutputHeight);
    }
    if (message.broadcastBitrate !== 0) {
      writer.uint32(96024).int32(message.broadcastBitrate);
    }
    if (message.broadcastEncodingOption !== 0) {
      writer.uint32(96032).int32(message.broadcastEncodingOption);
    }
    if (message.broadcastRecordAllVideo === true) {
      writer.uint32(96040).bool(message.broadcastRecordAllVideo);
    }
    if (message.broadcastRecordAllAudio === true) {
      writer.uint32(96048).bool(message.broadcastRecordAllAudio);
    }
    if (message.broadcastRecordMicrophone === true) {
      writer.uint32(96056).bool(message.broadcastRecordMicrophone);
    }
    if (message.broadcastShowUploadStats === true) {
      writer.uint32(96064).bool(message.broadcastShowUploadStats);
    }
    if (message.broadcastShowLiveReminder === true) {
      writer.uint32(96072).bool(message.broadcastShowLiveReminder);
    }
    if (message.broadcastChatCorner !== 0) {
      writer.uint32(96080).int32(message.broadcastChatCorner);
    }
    if (message.steamInputConfiguratorErrorMsgEnable === true) {
      writer.uint32(112008).bool(message.steamInputConfiguratorErrorMsgEnable);
    }
    if (message.controllerGuideButtonFocusSteam === true) {
      writer.uint32(112016).bool(message.controllerGuideButtonFocusSteam);
    }
    if (message.controllerPs4Support === true) {
      writer.uint32(112024).bool(message.controllerPs4Support);
    }
    if (message.controllerXboxSupport === true) {
      writer.uint32(112032).bool(message.controllerXboxSupport);
    }
    if (message.controllerXboxDriver === true) {
      writer.uint32(112040).bool(message.controllerXboxDriver);
    }
    if (message.controllerSwitchSupport === true) {
      writer.uint32(112048).bool(message.controllerSwitchSupport);
    }
    if (message.controllerGenericSupport === true) {
      writer.uint32(112056).bool(message.controllerGenericSupport);
    }
    if (message.controllerPowerOffTimeout !== 0) {
      writer.uint32(112064).int32(message.controllerPowerOffTimeout);
    }
    if (message.turnOffControllerOnExit === true) {
      writer.uint32(112072).bool(message.turnOffControllerOnExit);
    }
    if (message.controllerCombineNintendoJoycons === true) {
      writer.uint32(112080).bool(message.controllerCombineNintendoJoycons);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noSavePersonalInfo = reader.bool();
          break;
        case 2:
          message.oobeTestModeEnabled = reader.bool();
          break;
        case 3:
          message.inClientBeta = reader.bool();
          break;
        case 4:
          message.isSteamSideloaded = reader.bool();
          break;
        case 5:
          message.preferredMonitor = reader.string();
          break;
        case 6:
          message.steamCefGpuBlocklistDisabled = reader.bool();
          break;
        case 7:
          message.bigpictureWindowed = reader.bool();
          break;
        case 8:
          message.displayName = reader.string();
          break;
        case 9:
          message.isExternalDisplay = reader.bool();
          break;
        case 10:
          message.steamOsUnderscanLevel = reader.float();
          break;
        case 11:
          message.steamOsUnderscanEnabled = reader.bool();
          break;
        case 12:
          message.minScaleFactor = reader.float();
          break;
        case 13:
          message.maxScaleFactor = reader.float();
          break;
        case 14:
          message.autoScaleFactor = reader.float();
          break;
        case 15:
          message.enableTestUpdaters = reader.bool();
          break;
        case 16:
          message.smallMode = reader.bool();
          break;
        case 17:
          message.disableAllToasts = reader.bool();
          break;
        case 18:
          message.disableToastsInGame = reader.bool();
          break;
        case 3000:
          message.showFamilySharingNotifications = reader.bool();
          break;
        case 4000:
          message.overlayFpsCounterCorner = reader.int32();
          break;
        case 4001:
          message.overlayFpsCounterHighContrast = reader.bool();
          break;
        case 4002:
          message.overlayKey = CMsgHotkey.decode(reader, reader.uint32());
          break;
        case 4003:
          message.screenshotKey = CMsgHotkey.decode(reader, reader.uint32());
          break;
        case 4004:
          message.enableOverlay = reader.bool();
          break;
        case 4005:
          message.disableDesktopGameTheater = reader.bool();
          break;
        case 4006:
          message.enableScreenshotNotification = reader.bool();
          break;
        case 4007:
          message.enableScreenshotSound = reader.bool();
          break;
        case 4008:
          message.saveUncompressedScreenshots = reader.bool();
          break;
        case 4009:
          message.screenshotsPath = reader.string();
          break;
        case 4010:
          message.defaultPingRate = reader.int32();
          break;
        case 4011:
          message.serverPingRate = reader.int32();
          break;
        case 4012:
          message.steamNetworkingShareIp = reader.int32();
          break;
        case 5000:
          message.smoothScrollWebviews = reader.bool();
          break;
        case 5001:
          message.enableGpuAcceleratedWebviews = reader.bool();
          break;
        case 5003:
          message.enableHardwareVideoDecoding = reader.bool();
          break;
        case 5004:
          message.runAtStartup = reader.bool();
          break;
        case 5005:
          message.enableDpiScaling = reader.bool();
          break;
        case 5006:
          message.enableMarketingMessages = reader.bool();
          break;
        case 5007:
          message.startInBigPictureMode = reader.bool();
          break;
        case 5008:
          message.jumplistFlags = reader.uint32();
          break;
        case 7000:
          message.libraryDisplaySize = reader.int32();
          break;
        case 7001:
          message.libraryWhatsNewShowOnlyProductUpdates = reader.bool();
          break;
        case 7002:
          message.showStoreContentOnHome = reader.bool();
          break;
        case 7003:
          message.startPage = reader.string();
          break;
        case 7004:
          message.libraryLowBandwidthMode = reader.bool();
          break;
        case 7005:
          message.libraryLowPerfMode = reader.bool();
          break;
        case 7006:
          message.libraryDisableCommunityContent = reader.bool();
          break;
        case 7007:
          message.libraryDisplayIconInGameList = reader.bool();
          break;
        case 8000:
          message.enableShaderPrecache = reader.bool();
          break;
        case 8001:
          message.enableShaderBackgroundProcessing = reader.bool();
          break;
        case 8002:
          message.shaderPrecachedSize = longToNumber(reader.uint64() as Long);
          break;
        case 8003:
          message.needsSteamServiceRepair = reader.bool();
          break;
        case 10000:
          message.cloudEnabled = reader.bool();
          break;
        case 10001:
          message.showScreenshotManager = reader.bool();
          break;
        case 11000:
          message.musicVolume = reader.int32();
          break;
        case 11001:
          message.musicPauseOnAppStart = reader.bool();
          break;
        case 11002:
          message.musicPauseOnVoiceChat = reader.bool();
          break;
        case 11003:
          message.musicDownloadHighQuality = reader.bool();
          break;
        case 11004:
          message.musicPlaylistNotification = reader.bool();
          break;
        case 12000:
          message.broadcastPermissions = reader.int32();
          break;
        case 12001:
          message.broadcastOutputWidth = reader.int32();
          break;
        case 12002:
          message.broadcastOutputHeight = reader.int32();
          break;
        case 12003:
          message.broadcastBitrate = reader.int32();
          break;
        case 12004:
          message.broadcastEncodingOption = reader.int32();
          break;
        case 12005:
          message.broadcastRecordAllVideo = reader.bool();
          break;
        case 12006:
          message.broadcastRecordAllAudio = reader.bool();
          break;
        case 12007:
          message.broadcastRecordMicrophone = reader.bool();
          break;
        case 12008:
          message.broadcastShowUploadStats = reader.bool();
          break;
        case 12009:
          message.broadcastShowLiveReminder = reader.bool();
          break;
        case 12010:
          message.broadcastChatCorner = reader.int32();
          break;
        case 14001:
          message.steamInputConfiguratorErrorMsgEnable = reader.bool();
          break;
        case 14002:
          message.controllerGuideButtonFocusSteam = reader.bool();
          break;
        case 14003:
          message.controllerPs4Support = reader.bool();
          break;
        case 14004:
          message.controllerXboxSupport = reader.bool();
          break;
        case 14005:
          message.controllerXboxDriver = reader.bool();
          break;
        case 14006:
          message.controllerSwitchSupport = reader.bool();
          break;
        case 14007:
          message.controllerGenericSupport = reader.bool();
          break;
        case 14008:
          message.controllerPowerOffTimeout = reader.int32();
          break;
        case 14009:
          message.turnOffControllerOnExit = reader.bool();
          break;
        case 14010:
          message.controllerCombineNintendoJoycons = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSettings {
    return {
      noSavePersonalInfo: isSet(object.noSavePersonalInfo) ? Boolean(object.noSavePersonalInfo) : false,
      oobeTestModeEnabled: isSet(object.oobeTestModeEnabled) ? Boolean(object.oobeTestModeEnabled) : false,
      inClientBeta: isSet(object.inClientBeta) ? Boolean(object.inClientBeta) : false,
      isSteamSideloaded: isSet(object.isSteamSideloaded) ? Boolean(object.isSteamSideloaded) : false,
      preferredMonitor: isSet(object.preferredMonitor) ? String(object.preferredMonitor) : "",
      steamCefGpuBlocklistDisabled: isSet(object.steamCefGpuBlocklistDisabled)
        ? Boolean(object.steamCefGpuBlocklistDisabled)
        : false,
      bigpictureWindowed: isSet(object.bigpictureWindowed) ? Boolean(object.bigpictureWindowed) : false,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      isExternalDisplay: isSet(object.isExternalDisplay) ? Boolean(object.isExternalDisplay) : false,
      steamOsUnderscanLevel: isSet(object.steamOsUnderscanLevel) ? Number(object.steamOsUnderscanLevel) : 0,
      steamOsUnderscanEnabled: isSet(object.steamOsUnderscanEnabled) ? Boolean(object.steamOsUnderscanEnabled) : false,
      minScaleFactor: isSet(object.minScaleFactor) ? Number(object.minScaleFactor) : 0,
      maxScaleFactor: isSet(object.maxScaleFactor) ? Number(object.maxScaleFactor) : 0,
      autoScaleFactor: isSet(object.autoScaleFactor) ? Number(object.autoScaleFactor) : 0,
      enableTestUpdaters: isSet(object.enableTestUpdaters) ? Boolean(object.enableTestUpdaters) : false,
      smallMode: isSet(object.smallMode) ? Boolean(object.smallMode) : false,
      disableAllToasts: isSet(object.disableAllToasts) ? Boolean(object.disableAllToasts) : false,
      disableToastsInGame: isSet(object.disableToastsInGame) ? Boolean(object.disableToastsInGame) : false,
      showFamilySharingNotifications: isSet(object.showFamilySharingNotifications)
        ? Boolean(object.showFamilySharingNotifications)
        : false,
      overlayFpsCounterCorner: isSet(object.overlayFpsCounterCorner) ? Number(object.overlayFpsCounterCorner) : 0,
      overlayFpsCounterHighContrast: isSet(object.overlayFpsCounterHighContrast)
        ? Boolean(object.overlayFpsCounterHighContrast)
        : false,
      overlayKey: isSet(object.overlayKey) ? CMsgHotkey.fromJSON(object.overlayKey) : undefined,
      screenshotKey: isSet(object.screenshotKey) ? CMsgHotkey.fromJSON(object.screenshotKey) : undefined,
      enableOverlay: isSet(object.enableOverlay) ? Boolean(object.enableOverlay) : false,
      disableDesktopGameTheater: isSet(object.disableDesktopGameTheater)
        ? Boolean(object.disableDesktopGameTheater)
        : false,
      enableScreenshotNotification: isSet(object.enableScreenshotNotification)
        ? Boolean(object.enableScreenshotNotification)
        : false,
      enableScreenshotSound: isSet(object.enableScreenshotSound) ? Boolean(object.enableScreenshotSound) : false,
      saveUncompressedScreenshots: isSet(object.saveUncompressedScreenshots)
        ? Boolean(object.saveUncompressedScreenshots)
        : false,
      screenshotsPath: isSet(object.screenshotsPath) ? String(object.screenshotsPath) : "",
      defaultPingRate: isSet(object.defaultPingRate) ? Number(object.defaultPingRate) : 0,
      serverPingRate: isSet(object.serverPingRate) ? Number(object.serverPingRate) : 0,
      steamNetworkingShareIp: isSet(object.steamNetworkingShareIp) ? Number(object.steamNetworkingShareIp) : 0,
      smoothScrollWebviews: isSet(object.smoothScrollWebviews) ? Boolean(object.smoothScrollWebviews) : false,
      enableGpuAcceleratedWebviews: isSet(object.enableGpuAcceleratedWebviews)
        ? Boolean(object.enableGpuAcceleratedWebviews)
        : false,
      enableHardwareVideoDecoding: isSet(object.enableHardwareVideoDecoding)
        ? Boolean(object.enableHardwareVideoDecoding)
        : false,
      runAtStartup: isSet(object.runAtStartup) ? Boolean(object.runAtStartup) : false,
      enableDpiScaling: isSet(object.enableDpiScaling) ? Boolean(object.enableDpiScaling) : false,
      enableMarketingMessages: isSet(object.enableMarketingMessages) ? Boolean(object.enableMarketingMessages) : false,
      startInBigPictureMode: isSet(object.startInBigPictureMode) ? Boolean(object.startInBigPictureMode) : false,
      jumplistFlags: isSet(object.jumplistFlags) ? Number(object.jumplistFlags) : 0,
      libraryDisplaySize: isSet(object.libraryDisplaySize) ? Number(object.libraryDisplaySize) : 0,
      libraryWhatsNewShowOnlyProductUpdates: isSet(object.libraryWhatsNewShowOnlyProductUpdates)
        ? Boolean(object.libraryWhatsNewShowOnlyProductUpdates)
        : false,
      showStoreContentOnHome: isSet(object.showStoreContentOnHome) ? Boolean(object.showStoreContentOnHome) : false,
      startPage: isSet(object.startPage) ? String(object.startPage) : "",
      libraryLowBandwidthMode: isSet(object.libraryLowBandwidthMode) ? Boolean(object.libraryLowBandwidthMode) : false,
      libraryLowPerfMode: isSet(object.libraryLowPerfMode) ? Boolean(object.libraryLowPerfMode) : false,
      libraryDisableCommunityContent: isSet(object.libraryDisableCommunityContent)
        ? Boolean(object.libraryDisableCommunityContent)
        : false,
      libraryDisplayIconInGameList: isSet(object.libraryDisplayIconInGameList)
        ? Boolean(object.libraryDisplayIconInGameList)
        : false,
      enableShaderPrecache: isSet(object.enableShaderPrecache) ? Boolean(object.enableShaderPrecache) : false,
      enableShaderBackgroundProcessing: isSet(object.enableShaderBackgroundProcessing)
        ? Boolean(object.enableShaderBackgroundProcessing)
        : false,
      shaderPrecachedSize: isSet(object.shaderPrecachedSize) ? Number(object.shaderPrecachedSize) : 0,
      needsSteamServiceRepair: isSet(object.needsSteamServiceRepair) ? Boolean(object.needsSteamServiceRepair) : false,
      cloudEnabled: isSet(object.cloudEnabled) ? Boolean(object.cloudEnabled) : false,
      showScreenshotManager: isSet(object.showScreenshotManager) ? Boolean(object.showScreenshotManager) : false,
      musicVolume: isSet(object.musicVolume) ? Number(object.musicVolume) : 0,
      musicPauseOnAppStart: isSet(object.musicPauseOnAppStart) ? Boolean(object.musicPauseOnAppStart) : false,
      musicPauseOnVoiceChat: isSet(object.musicPauseOnVoiceChat) ? Boolean(object.musicPauseOnVoiceChat) : false,
      musicDownloadHighQuality: isSet(object.musicDownloadHighQuality)
        ? Boolean(object.musicDownloadHighQuality)
        : false,
      musicPlaylistNotification: isSet(object.musicPlaylistNotification)
        ? Boolean(object.musicPlaylistNotification)
        : false,
      broadcastPermissions: isSet(object.broadcastPermissions) ? Number(object.broadcastPermissions) : 0,
      broadcastOutputWidth: isSet(object.broadcastOutputWidth) ? Number(object.broadcastOutputWidth) : 0,
      broadcastOutputHeight: isSet(object.broadcastOutputHeight) ? Number(object.broadcastOutputHeight) : 0,
      broadcastBitrate: isSet(object.broadcastBitrate) ? Number(object.broadcastBitrate) : 0,
      broadcastEncodingOption: isSet(object.broadcastEncodingOption) ? Number(object.broadcastEncodingOption) : 0,
      broadcastRecordAllVideo: isSet(object.broadcastRecordAllVideo) ? Boolean(object.broadcastRecordAllVideo) : false,
      broadcastRecordAllAudio: isSet(object.broadcastRecordAllAudio) ? Boolean(object.broadcastRecordAllAudio) : false,
      broadcastRecordMicrophone: isSet(object.broadcastRecordMicrophone)
        ? Boolean(object.broadcastRecordMicrophone)
        : false,
      broadcastShowUploadStats: isSet(object.broadcastShowUploadStats)
        ? Boolean(object.broadcastShowUploadStats)
        : false,
      broadcastShowLiveReminder: isSet(object.broadcastShowLiveReminder)
        ? Boolean(object.broadcastShowLiveReminder)
        : false,
      broadcastChatCorner: isSet(object.broadcastChatCorner) ? Number(object.broadcastChatCorner) : 0,
      steamInputConfiguratorErrorMsgEnable: isSet(object.steamInputConfiguratorErrorMsgEnable)
        ? Boolean(object.steamInputConfiguratorErrorMsgEnable)
        : false,
      controllerGuideButtonFocusSteam: isSet(object.controllerGuideButtonFocusSteam)
        ? Boolean(object.controllerGuideButtonFocusSteam)
        : false,
      controllerPs4Support: isSet(object.controllerPs4Support) ? Boolean(object.controllerPs4Support) : false,
      controllerXboxSupport: isSet(object.controllerXboxSupport) ? Boolean(object.controllerXboxSupport) : false,
      controllerXboxDriver: isSet(object.controllerXboxDriver) ? Boolean(object.controllerXboxDriver) : false,
      controllerSwitchSupport: isSet(object.controllerSwitchSupport) ? Boolean(object.controllerSwitchSupport) : false,
      controllerGenericSupport: isSet(object.controllerGenericSupport)
        ? Boolean(object.controllerGenericSupport)
        : false,
      controllerPowerOffTimeout: isSet(object.controllerPowerOffTimeout) ? Number(object.controllerPowerOffTimeout) : 0,
      turnOffControllerOnExit: isSet(object.turnOffControllerOnExit) ? Boolean(object.turnOffControllerOnExit) : false,
      controllerCombineNintendoJoycons: isSet(object.controllerCombineNintendoJoycons)
        ? Boolean(object.controllerCombineNintendoJoycons)
        : false,
    };
  },

  toJSON(message: CMsgClientSettings): unknown {
    const obj: any = {};
    message.noSavePersonalInfo !== undefined && (obj.noSavePersonalInfo = message.noSavePersonalInfo);
    message.oobeTestModeEnabled !== undefined && (obj.oobeTestModeEnabled = message.oobeTestModeEnabled);
    message.inClientBeta !== undefined && (obj.inClientBeta = message.inClientBeta);
    message.isSteamSideloaded !== undefined && (obj.isSteamSideloaded = message.isSteamSideloaded);
    message.preferredMonitor !== undefined && (obj.preferredMonitor = message.preferredMonitor);
    message.steamCefGpuBlocklistDisabled !== undefined &&
      (obj.steamCefGpuBlocklistDisabled = message.steamCefGpuBlocklistDisabled);
    message.bigpictureWindowed !== undefined && (obj.bigpictureWindowed = message.bigpictureWindowed);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.isExternalDisplay !== undefined && (obj.isExternalDisplay = message.isExternalDisplay);
    message.steamOsUnderscanLevel !== undefined && (obj.steamOsUnderscanLevel = message.steamOsUnderscanLevel);
    message.steamOsUnderscanEnabled !== undefined && (obj.steamOsUnderscanEnabled = message.steamOsUnderscanEnabled);
    message.minScaleFactor !== undefined && (obj.minScaleFactor = message.minScaleFactor);
    message.maxScaleFactor !== undefined && (obj.maxScaleFactor = message.maxScaleFactor);
    message.autoScaleFactor !== undefined && (obj.autoScaleFactor = message.autoScaleFactor);
    message.enableTestUpdaters !== undefined && (obj.enableTestUpdaters = message.enableTestUpdaters);
    message.smallMode !== undefined && (obj.smallMode = message.smallMode);
    message.disableAllToasts !== undefined && (obj.disableAllToasts = message.disableAllToasts);
    message.disableToastsInGame !== undefined && (obj.disableToastsInGame = message.disableToastsInGame);
    message.showFamilySharingNotifications !== undefined &&
      (obj.showFamilySharingNotifications = message.showFamilySharingNotifications);
    message.overlayFpsCounterCorner !== undefined &&
      (obj.overlayFpsCounterCorner = Math.round(message.overlayFpsCounterCorner));
    message.overlayFpsCounterHighContrast !== undefined &&
      (obj.overlayFpsCounterHighContrast = message.overlayFpsCounterHighContrast);
    message.overlayKey !== undefined &&
      (obj.overlayKey = message.overlayKey ? CMsgHotkey.toJSON(message.overlayKey) : undefined);
    message.screenshotKey !== undefined &&
      (obj.screenshotKey = message.screenshotKey ? CMsgHotkey.toJSON(message.screenshotKey) : undefined);
    message.enableOverlay !== undefined && (obj.enableOverlay = message.enableOverlay);
    message.disableDesktopGameTheater !== undefined &&
      (obj.disableDesktopGameTheater = message.disableDesktopGameTheater);
    message.enableScreenshotNotification !== undefined &&
      (obj.enableScreenshotNotification = message.enableScreenshotNotification);
    message.enableScreenshotSound !== undefined && (obj.enableScreenshotSound = message.enableScreenshotSound);
    message.saveUncompressedScreenshots !== undefined &&
      (obj.saveUncompressedScreenshots = message.saveUncompressedScreenshots);
    message.screenshotsPath !== undefined && (obj.screenshotsPath = message.screenshotsPath);
    message.defaultPingRate !== undefined && (obj.defaultPingRate = Math.round(message.defaultPingRate));
    message.serverPingRate !== undefined && (obj.serverPingRate = Math.round(message.serverPingRate));
    message.steamNetworkingShareIp !== undefined &&
      (obj.steamNetworkingShareIp = Math.round(message.steamNetworkingShareIp));
    message.smoothScrollWebviews !== undefined && (obj.smoothScrollWebviews = message.smoothScrollWebviews);
    message.enableGpuAcceleratedWebviews !== undefined &&
      (obj.enableGpuAcceleratedWebviews = message.enableGpuAcceleratedWebviews);
    message.enableHardwareVideoDecoding !== undefined &&
      (obj.enableHardwareVideoDecoding = message.enableHardwareVideoDecoding);
    message.runAtStartup !== undefined && (obj.runAtStartup = message.runAtStartup);
    message.enableDpiScaling !== undefined && (obj.enableDpiScaling = message.enableDpiScaling);
    message.enableMarketingMessages !== undefined && (obj.enableMarketingMessages = message.enableMarketingMessages);
    message.startInBigPictureMode !== undefined && (obj.startInBigPictureMode = message.startInBigPictureMode);
    message.jumplistFlags !== undefined && (obj.jumplistFlags = Math.round(message.jumplistFlags));
    message.libraryDisplaySize !== undefined && (obj.libraryDisplaySize = Math.round(message.libraryDisplaySize));
    message.libraryWhatsNewShowOnlyProductUpdates !== undefined &&
      (obj.libraryWhatsNewShowOnlyProductUpdates = message.libraryWhatsNewShowOnlyProductUpdates);
    message.showStoreContentOnHome !== undefined && (obj.showStoreContentOnHome = message.showStoreContentOnHome);
    message.startPage !== undefined && (obj.startPage = message.startPage);
    message.libraryLowBandwidthMode !== undefined && (obj.libraryLowBandwidthMode = message.libraryLowBandwidthMode);
    message.libraryLowPerfMode !== undefined && (obj.libraryLowPerfMode = message.libraryLowPerfMode);
    message.libraryDisableCommunityContent !== undefined &&
      (obj.libraryDisableCommunityContent = message.libraryDisableCommunityContent);
    message.libraryDisplayIconInGameList !== undefined &&
      (obj.libraryDisplayIconInGameList = message.libraryDisplayIconInGameList);
    message.enableShaderPrecache !== undefined && (obj.enableShaderPrecache = message.enableShaderPrecache);
    message.enableShaderBackgroundProcessing !== undefined &&
      (obj.enableShaderBackgroundProcessing = message.enableShaderBackgroundProcessing);
    message.shaderPrecachedSize !== undefined && (obj.shaderPrecachedSize = Math.round(message.shaderPrecachedSize));
    message.needsSteamServiceRepair !== undefined && (obj.needsSteamServiceRepair = message.needsSteamServiceRepair);
    message.cloudEnabled !== undefined && (obj.cloudEnabled = message.cloudEnabled);
    message.showScreenshotManager !== undefined && (obj.showScreenshotManager = message.showScreenshotManager);
    message.musicVolume !== undefined && (obj.musicVolume = Math.round(message.musicVolume));
    message.musicPauseOnAppStart !== undefined && (obj.musicPauseOnAppStart = message.musicPauseOnAppStart);
    message.musicPauseOnVoiceChat !== undefined && (obj.musicPauseOnVoiceChat = message.musicPauseOnVoiceChat);
    message.musicDownloadHighQuality !== undefined && (obj.musicDownloadHighQuality = message.musicDownloadHighQuality);
    message.musicPlaylistNotification !== undefined &&
      (obj.musicPlaylistNotification = message.musicPlaylistNotification);
    message.broadcastPermissions !== undefined && (obj.broadcastPermissions = Math.round(message.broadcastPermissions));
    message.broadcastOutputWidth !== undefined && (obj.broadcastOutputWidth = Math.round(message.broadcastOutputWidth));
    message.broadcastOutputHeight !== undefined &&
      (obj.broadcastOutputHeight = Math.round(message.broadcastOutputHeight));
    message.broadcastBitrate !== undefined && (obj.broadcastBitrate = Math.round(message.broadcastBitrate));
    message.broadcastEncodingOption !== undefined &&
      (obj.broadcastEncodingOption = Math.round(message.broadcastEncodingOption));
    message.broadcastRecordAllVideo !== undefined && (obj.broadcastRecordAllVideo = message.broadcastRecordAllVideo);
    message.broadcastRecordAllAudio !== undefined && (obj.broadcastRecordAllAudio = message.broadcastRecordAllAudio);
    message.broadcastRecordMicrophone !== undefined &&
      (obj.broadcastRecordMicrophone = message.broadcastRecordMicrophone);
    message.broadcastShowUploadStats !== undefined && (obj.broadcastShowUploadStats = message.broadcastShowUploadStats);
    message.broadcastShowLiveReminder !== undefined &&
      (obj.broadcastShowLiveReminder = message.broadcastShowLiveReminder);
    message.broadcastChatCorner !== undefined && (obj.broadcastChatCorner = Math.round(message.broadcastChatCorner));
    message.steamInputConfiguratorErrorMsgEnable !== undefined &&
      (obj.steamInputConfiguratorErrorMsgEnable = message.steamInputConfiguratorErrorMsgEnable);
    message.controllerGuideButtonFocusSteam !== undefined &&
      (obj.controllerGuideButtonFocusSteam = message.controllerGuideButtonFocusSteam);
    message.controllerPs4Support !== undefined && (obj.controllerPs4Support = message.controllerPs4Support);
    message.controllerXboxSupport !== undefined && (obj.controllerXboxSupport = message.controllerXboxSupport);
    message.controllerXboxDriver !== undefined && (obj.controllerXboxDriver = message.controllerXboxDriver);
    message.controllerSwitchSupport !== undefined && (obj.controllerSwitchSupport = message.controllerSwitchSupport);
    message.controllerGenericSupport !== undefined && (obj.controllerGenericSupport = message.controllerGenericSupport);
    message.controllerPowerOffTimeout !== undefined &&
      (obj.controllerPowerOffTimeout = Math.round(message.controllerPowerOffTimeout));
    message.turnOffControllerOnExit !== undefined && (obj.turnOffControllerOnExit = message.turnOffControllerOnExit);
    message.controllerCombineNintendoJoycons !== undefined &&
      (obj.controllerCombineNintendoJoycons = message.controllerCombineNintendoJoycons);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSettings>, I>>(base?: I): CMsgClientSettings {
    return CMsgClientSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSettings>, I>>(object: I): CMsgClientSettings {
    const message = createBaseCMsgClientSettings();
    message.noSavePersonalInfo = object.noSavePersonalInfo ?? false;
    message.oobeTestModeEnabled = object.oobeTestModeEnabled ?? false;
    message.inClientBeta = object.inClientBeta ?? false;
    message.isSteamSideloaded = object.isSteamSideloaded ?? false;
    message.preferredMonitor = object.preferredMonitor ?? "";
    message.steamCefGpuBlocklistDisabled = object.steamCefGpuBlocklistDisabled ?? false;
    message.bigpictureWindowed = object.bigpictureWindowed ?? false;
    message.displayName = object.displayName ?? "";
    message.isExternalDisplay = object.isExternalDisplay ?? false;
    message.steamOsUnderscanLevel = object.steamOsUnderscanLevel ?? 0;
    message.steamOsUnderscanEnabled = object.steamOsUnderscanEnabled ?? false;
    message.minScaleFactor = object.minScaleFactor ?? 0;
    message.maxScaleFactor = object.maxScaleFactor ?? 0;
    message.autoScaleFactor = object.autoScaleFactor ?? 0;
    message.enableTestUpdaters = object.enableTestUpdaters ?? false;
    message.smallMode = object.smallMode ?? false;
    message.disableAllToasts = object.disableAllToasts ?? false;
    message.disableToastsInGame = object.disableToastsInGame ?? false;
    message.showFamilySharingNotifications = object.showFamilySharingNotifications ?? false;
    message.overlayFpsCounterCorner = object.overlayFpsCounterCorner ?? 0;
    message.overlayFpsCounterHighContrast = object.overlayFpsCounterHighContrast ?? false;
    message.overlayKey = (object.overlayKey !== undefined && object.overlayKey !== null)
      ? CMsgHotkey.fromPartial(object.overlayKey)
      : undefined;
    message.screenshotKey = (object.screenshotKey !== undefined && object.screenshotKey !== null)
      ? CMsgHotkey.fromPartial(object.screenshotKey)
      : undefined;
    message.enableOverlay = object.enableOverlay ?? false;
    message.disableDesktopGameTheater = object.disableDesktopGameTheater ?? false;
    message.enableScreenshotNotification = object.enableScreenshotNotification ?? false;
    message.enableScreenshotSound = object.enableScreenshotSound ?? false;
    message.saveUncompressedScreenshots = object.saveUncompressedScreenshots ?? false;
    message.screenshotsPath = object.screenshotsPath ?? "";
    message.defaultPingRate = object.defaultPingRate ?? 0;
    message.serverPingRate = object.serverPingRate ?? 0;
    message.steamNetworkingShareIp = object.steamNetworkingShareIp ?? 0;
    message.smoothScrollWebviews = object.smoothScrollWebviews ?? false;
    message.enableGpuAcceleratedWebviews = object.enableGpuAcceleratedWebviews ?? false;
    message.enableHardwareVideoDecoding = object.enableHardwareVideoDecoding ?? false;
    message.runAtStartup = object.runAtStartup ?? false;
    message.enableDpiScaling = object.enableDpiScaling ?? false;
    message.enableMarketingMessages = object.enableMarketingMessages ?? false;
    message.startInBigPictureMode = object.startInBigPictureMode ?? false;
    message.jumplistFlags = object.jumplistFlags ?? 0;
    message.libraryDisplaySize = object.libraryDisplaySize ?? 0;
    message.libraryWhatsNewShowOnlyProductUpdates = object.libraryWhatsNewShowOnlyProductUpdates ?? false;
    message.showStoreContentOnHome = object.showStoreContentOnHome ?? false;
    message.startPage = object.startPage ?? "";
    message.libraryLowBandwidthMode = object.libraryLowBandwidthMode ?? false;
    message.libraryLowPerfMode = object.libraryLowPerfMode ?? false;
    message.libraryDisableCommunityContent = object.libraryDisableCommunityContent ?? false;
    message.libraryDisplayIconInGameList = object.libraryDisplayIconInGameList ?? false;
    message.enableShaderPrecache = object.enableShaderPrecache ?? false;
    message.enableShaderBackgroundProcessing = object.enableShaderBackgroundProcessing ?? false;
    message.shaderPrecachedSize = object.shaderPrecachedSize ?? 0;
    message.needsSteamServiceRepair = object.needsSteamServiceRepair ?? false;
    message.cloudEnabled = object.cloudEnabled ?? false;
    message.showScreenshotManager = object.showScreenshotManager ?? false;
    message.musicVolume = object.musicVolume ?? 0;
    message.musicPauseOnAppStart = object.musicPauseOnAppStart ?? false;
    message.musicPauseOnVoiceChat = object.musicPauseOnVoiceChat ?? false;
    message.musicDownloadHighQuality = object.musicDownloadHighQuality ?? false;
    message.musicPlaylistNotification = object.musicPlaylistNotification ?? false;
    message.broadcastPermissions = object.broadcastPermissions ?? 0;
    message.broadcastOutputWidth = object.broadcastOutputWidth ?? 0;
    message.broadcastOutputHeight = object.broadcastOutputHeight ?? 0;
    message.broadcastBitrate = object.broadcastBitrate ?? 0;
    message.broadcastEncodingOption = object.broadcastEncodingOption ?? 0;
    message.broadcastRecordAllVideo = object.broadcastRecordAllVideo ?? false;
    message.broadcastRecordAllAudio = object.broadcastRecordAllAudio ?? false;
    message.broadcastRecordMicrophone = object.broadcastRecordMicrophone ?? false;
    message.broadcastShowUploadStats = object.broadcastShowUploadStats ?? false;
    message.broadcastShowLiveReminder = object.broadcastShowLiveReminder ?? false;
    message.broadcastChatCorner = object.broadcastChatCorner ?? 0;
    message.steamInputConfiguratorErrorMsgEnable = object.steamInputConfiguratorErrorMsgEnable ?? false;
    message.controllerGuideButtonFocusSteam = object.controllerGuideButtonFocusSteam ?? false;
    message.controllerPs4Support = object.controllerPs4Support ?? false;
    message.controllerXboxSupport = object.controllerXboxSupport ?? false;
    message.controllerXboxDriver = object.controllerXboxDriver ?? false;
    message.controllerSwitchSupport = object.controllerSwitchSupport ?? false;
    message.controllerGenericSupport = object.controllerGenericSupport ?? false;
    message.controllerPowerOffTimeout = object.controllerPowerOffTimeout ?? 0;
    message.turnOffControllerOnExit = object.turnOffControllerOnExit ?? false;
    message.controllerCombineNintendoJoycons = object.controllerCombineNintendoJoycons ?? false;
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
