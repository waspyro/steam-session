/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  EBluetoothDeviceType,
  eBluetoothDeviceTypeFromJSON,
  eBluetoothDeviceTypeToJSON,
  EColorProfile,
  eColorProfileFromJSON,
  eColorProfileToJSON,
  ECPUGovernor,
  eCPUGovernorFromJSON,
  eCPUGovernorToJSON,
  EGPUPerformanceLevel,
  eGPUPerformanceLevelFromJSON,
  eGPUPerformanceLevelToJSON,
  EGraphicsPerfOverlayLevel,
  eGraphicsPerfOverlayLevelFromJSON,
  eGraphicsPerfOverlayLevelToJSON,
  EHDRToneMapOperator,
  eHDRToneMapOperatorFromJSON,
  eHDRToneMapOperatorToJSON,
  EOSBranch,
  eOSBranchFromJSON,
  eOSBranchToJSON,
  ESDCardFormatStage,
  eSDCardFormatStageFromJSON,
  eSDCardFormatStageToJSON,
  ESplitScalingFilter,
  eSplitScalingFilterFromJSON,
  eSplitScalingFilterToJSON,
  ESplitScalingScaler,
  eSplitScalingScalerFromJSON,
  eSplitScalingScalerToJSON,
  EStorageBlockContentType,
  eStorageBlockContentTypeFromJSON,
  eStorageBlockContentTypeToJSON,
  EStorageBlockFileSystemType,
  eStorageBlockFileSystemTypeFromJSON,
  eStorageBlockFileSystemTypeToJSON,
  EStorageDriveMediaType,
  eStorageDriveMediaTypeFromJSON,
  eStorageDriveMediaTypeToJSON,
  ESystemAudioChannel,
  eSystemAudioChannelFromJSON,
  eSystemAudioChannelToJSON,
  ESystemAudioDirection,
  eSystemAudioDirectionFromJSON,
  eSystemAudioDirectionToJSON,
  ESystemAudioPortDirection,
  eSystemAudioPortDirectionFromJSON,
  eSystemAudioPortDirectionToJSON,
  ESystemAudioPortType,
  eSystemAudioPortTypeFromJSON,
  eSystemAudioPortTypeToJSON,
  ESystemDisplayCompatibilityMode,
  eSystemDisplayCompatibilityModeFromJSON,
  eSystemDisplayCompatibilityModeToJSON,
  ESystemFanControlMode,
  eSystemFanControlModeFromJSON,
  eSystemFanControlModeToJSON,
  ESystemServiceState,
  eSystemServiceStateFromJSON,
  eSystemServiceStateToJSON,
  EUpdaterState,
  eUpdaterStateFromJSON,
  eUpdaterStateToJSON,
  EUpdaterType,
  eUpdaterTypeFromJSON,
  eUpdaterTypeToJSON,
} from "./enums";

export const protobufPackage = "";

export enum ECloudPendingRemoteOperation {
  k_ECloudPendingRemoteOperationNone = 0,
  k_ECloudPendingRemoteOperationAppSessionActive = 1,
  k_ECloudPendingRemoteOperationUploadInProgress = 2,
  k_ECloudPendingRemoteOperationUploadPending = 3,
  k_ECloudPendingRemoteOperationAppSessionSuspended = 4,
  UNRECOGNIZED = -1,
}

export function eCloudPendingRemoteOperationFromJSON(object: any): ECloudPendingRemoteOperation {
  switch (object) {
    case 0:
    case "k_ECloudPendingRemoteOperationNone":
      return ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationNone;
    case 1:
    case "k_ECloudPendingRemoteOperationAppSessionActive":
      return ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationAppSessionActive;
    case 2:
    case "k_ECloudPendingRemoteOperationUploadInProgress":
      return ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationUploadInProgress;
    case 3:
    case "k_ECloudPendingRemoteOperationUploadPending":
      return ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationUploadPending;
    case 4:
    case "k_ECloudPendingRemoteOperationAppSessionSuspended":
      return ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationAppSessionSuspended;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECloudPendingRemoteOperation.UNRECOGNIZED;
  }
}

export function eCloudPendingRemoteOperationToJSON(object: ECloudPendingRemoteOperation): string {
  switch (object) {
    case ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationNone:
      return "k_ECloudPendingRemoteOperationNone";
    case ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationAppSessionActive:
      return "k_ECloudPendingRemoteOperationAppSessionActive";
    case ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationUploadInProgress:
      return "k_ECloudPendingRemoteOperationUploadInProgress";
    case ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationUploadPending:
      return "k_ECloudPendingRemoteOperationUploadPending";
    case ECloudPendingRemoteOperation.k_ECloudPendingRemoteOperationAppSessionSuspended:
      return "k_ECloudPendingRemoteOperationAppSessionSuspended";
    case ECloudPendingRemoteOperation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamDeckKeyboardLayout {
  k_ESteamDeckKeyboardLayout_QWERTY = 0,
  k_ESteamDeckKeyboardLayout_Bulgarian = 1,
  k_ESteamDeckKeyboardLayout_Chinese_Simplified = 2,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional = 3,
  k_ESteamDeckKeyboardLayout_Czech = 4,
  k_ESteamDeckKeyboardLayout_Danish = 5,
  k_ESteamDeckKeyboardLayout_Finnish = 6,
  k_ESteamDeckKeyboardLayout_French = 7,
  k_ESteamDeckKeyboardLayout_German = 8,
  k_ESteamDeckKeyboardLayout_Greek = 9,
  k_ESteamDeckKeyboardLayout_Hungarian = 10,
  k_ESteamDeckKeyboardLayout_Italian = 11,
  k_ESteamDeckKeyboardLayout_Japanese = 12,
  k_ESteamDeckKeyboardLayout_Korean = 13,
  k_ESteamDeckKeyboardLayout_Norwegian = 14,
  k_ESteamDeckKeyboardLayout_Polish = 15,
  k_ESteamDeckKeyboardLayout_Portuguese = 16,
  k_ESteamDeckKeyboardLayout_Romanian = 17,
  k_ESteamDeckKeyboardLayout_Russian = 18,
  k_ESteamDeckKeyboardLayout_Spanish = 19,
  k_ESteamDeckKeyboardLayout_Swedish = 20,
  k_ESteamDeckKeyboardLayout_Thai = 21,
  k_ESteamDeckKeyboardLayout_Turkish_F = 22,
  k_ESteamDeckKeyboardLayout_Turkish_Q = 23,
  k_ESteamDeckKeyboardLayout_Ukrainian = 24,
  k_ESteamDeckKeyboardLayout_Vietnamese = 25,
  k_ESteamDeckKeyboardLayout_QWERTY_International = 26,
  k_ESteamDeckKeyboardLayout_Dvorak = 27,
  k_ESteamDeckKeyboardLayout_Colemak = 28,
  k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional = 29,
  k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic = 30,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo = 31,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie = 32,
  k_ESteamDeckKeyboardLayout_Japanese_Kana = 33,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick = 34,
  UNRECOGNIZED = -1,
}

export function eSteamDeckKeyboardLayoutFromJSON(object: any): ESteamDeckKeyboardLayout {
  switch (object) {
    case 0:
    case "k_ESteamDeckKeyboardLayout_QWERTY":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_QWERTY;
    case 1:
    case "k_ESteamDeckKeyboardLayout_Bulgarian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian;
    case 2:
    case "k_ESteamDeckKeyboardLayout_Chinese_Simplified":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Simplified;
    case 3:
    case "k_ESteamDeckKeyboardLayout_Chinese_Traditional":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional;
    case 4:
    case "k_ESteamDeckKeyboardLayout_Czech":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Czech;
    case 5:
    case "k_ESteamDeckKeyboardLayout_Danish":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Danish;
    case 6:
    case "k_ESteamDeckKeyboardLayout_Finnish":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Finnish;
    case 7:
    case "k_ESteamDeckKeyboardLayout_French":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_French;
    case 8:
    case "k_ESteamDeckKeyboardLayout_German":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_German;
    case 9:
    case "k_ESteamDeckKeyboardLayout_Greek":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Greek;
    case 10:
    case "k_ESteamDeckKeyboardLayout_Hungarian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Hungarian;
    case 11:
    case "k_ESteamDeckKeyboardLayout_Italian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Italian;
    case 12:
    case "k_ESteamDeckKeyboardLayout_Japanese":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Japanese;
    case 13:
    case "k_ESteamDeckKeyboardLayout_Korean":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Korean;
    case 14:
    case "k_ESteamDeckKeyboardLayout_Norwegian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Norwegian;
    case 15:
    case "k_ESteamDeckKeyboardLayout_Polish":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Polish;
    case 16:
    case "k_ESteamDeckKeyboardLayout_Portuguese":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Portuguese;
    case 17:
    case "k_ESteamDeckKeyboardLayout_Romanian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Romanian;
    case 18:
    case "k_ESteamDeckKeyboardLayout_Russian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Russian;
    case 19:
    case "k_ESteamDeckKeyboardLayout_Spanish":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Spanish;
    case 20:
    case "k_ESteamDeckKeyboardLayout_Swedish":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Swedish;
    case 21:
    case "k_ESteamDeckKeyboardLayout_Thai":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Thai;
    case 22:
    case "k_ESteamDeckKeyboardLayout_Turkish_F":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Turkish_F;
    case 23:
    case "k_ESteamDeckKeyboardLayout_Turkish_Q":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Turkish_Q;
    case 24:
    case "k_ESteamDeckKeyboardLayout_Ukrainian":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Ukrainian;
    case 25:
    case "k_ESteamDeckKeyboardLayout_Vietnamese":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Vietnamese;
    case 26:
    case "k_ESteamDeckKeyboardLayout_QWERTY_International":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_QWERTY_International;
    case 27:
    case "k_ESteamDeckKeyboardLayout_Dvorak":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Dvorak;
    case 28:
    case "k_ESteamDeckKeyboardLayout_Colemak":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Colemak;
    case 29:
    case "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional;
    case 30:
    case "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic;
    case 31:
    case "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo;
    case 32:
    case "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie;
    case 33:
    case "k_ESteamDeckKeyboardLayout_Japanese_Kana":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Japanese_Kana;
    case 34:
    case "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick":
      return ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamDeckKeyboardLayout.UNRECOGNIZED;
  }
}

export function eSteamDeckKeyboardLayoutToJSON(object: ESteamDeckKeyboardLayout): string {
  switch (object) {
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_QWERTY:
      return "k_ESteamDeckKeyboardLayout_QWERTY";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian:
      return "k_ESteamDeckKeyboardLayout_Bulgarian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Simplified:
      return "k_ESteamDeckKeyboardLayout_Chinese_Simplified";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional:
      return "k_ESteamDeckKeyboardLayout_Chinese_Traditional";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Czech:
      return "k_ESteamDeckKeyboardLayout_Czech";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Danish:
      return "k_ESteamDeckKeyboardLayout_Danish";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Finnish:
      return "k_ESteamDeckKeyboardLayout_Finnish";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_French:
      return "k_ESteamDeckKeyboardLayout_French";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_German:
      return "k_ESteamDeckKeyboardLayout_German";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Greek:
      return "k_ESteamDeckKeyboardLayout_Greek";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Hungarian:
      return "k_ESteamDeckKeyboardLayout_Hungarian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Italian:
      return "k_ESteamDeckKeyboardLayout_Italian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Japanese:
      return "k_ESteamDeckKeyboardLayout_Japanese";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Korean:
      return "k_ESteamDeckKeyboardLayout_Korean";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Norwegian:
      return "k_ESteamDeckKeyboardLayout_Norwegian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Polish:
      return "k_ESteamDeckKeyboardLayout_Polish";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Portuguese:
      return "k_ESteamDeckKeyboardLayout_Portuguese";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Romanian:
      return "k_ESteamDeckKeyboardLayout_Romanian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Russian:
      return "k_ESteamDeckKeyboardLayout_Russian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Spanish:
      return "k_ESteamDeckKeyboardLayout_Spanish";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Swedish:
      return "k_ESteamDeckKeyboardLayout_Swedish";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Thai:
      return "k_ESteamDeckKeyboardLayout_Thai";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Turkish_F:
      return "k_ESteamDeckKeyboardLayout_Turkish_F";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Turkish_Q:
      return "k_ESteamDeckKeyboardLayout_Turkish_Q";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Ukrainian:
      return "k_ESteamDeckKeyboardLayout_Ukrainian";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Vietnamese:
      return "k_ESteamDeckKeyboardLayout_Vietnamese";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_QWERTY_International:
      return "k_ESteamDeckKeyboardLayout_QWERTY_International";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Dvorak:
      return "k_ESteamDeckKeyboardLayout_Dvorak";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Colemak:
      return "k_ESteamDeckKeyboardLayout_Colemak";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional:
      return "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic:
      return "k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo:
      return "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie:
      return "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Japanese_Kana:
      return "k_ESteamDeckKeyboardLayout_Japanese_Kana";
    case ESteamDeckKeyboardLayout.k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick:
      return "k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick";
    case ESteamDeckKeyboardLayout.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SteamMessagesClientIClientForcedEnumDependencies {
  a: EBluetoothDeviceType;
  b: EStorageBlockContentType;
  c: EStorageBlockFileSystemType;
  d: ESDCardFormatStage;
}

export interface CMsgNetworkDeviceIP4Address {
  ip: number;
  netmask: number;
}

export interface CMsgNetworkDeviceIP4Config {
  addresses: CMsgNetworkDeviceIP4Address[];
  dnsIp: number[];
  gatewayIp: number;
  isDhcpEnabled: boolean;
  isDefaultRoute: boolean;
  isEnabled: boolean;
}

export interface CMsgNetworkDeviceIP6Address {
  ip: string;
}

export interface CMsgNetworkDeviceIP6Config {
  addresses: CMsgNetworkDeviceIP6Address[];
  dnsIp: string[];
  gatewayIp: string;
  isDhcpEnabled: boolean;
  isDefaultRoute: boolean;
  isEnabled: boolean;
}

export interface CMsgNetworkDevicesData {
  devices: CMsgNetworkDevicesData_Device[];
  isWifiEnabled: boolean;
  isWifiScanningEnabled: boolean;
}

export interface CMsgNetworkDevicesData_Device {
  id: number;
  etype: number;
  estate: number;
  mac: string;
  vendor: string;
  product: string;
  ip4: CMsgNetworkDeviceIP4Config | undefined;
  ip6: CMsgNetworkDeviceIP6Config | undefined;
  wired: CMsgNetworkDevicesData_Device_Wired | undefined;
  wireless: CMsgNetworkDevicesData_Device_Wireless | undefined;
}

export interface CMsgNetworkDevicesData_Device_Wired {
  isCablePresent: boolean;
  speedMbit: number;
  friendlyName: string;
}

export interface CMsgNetworkDevicesData_Device_Wireless {
  aps: CMsgNetworkDevicesData_Device_Wireless_AP[];
  esecuritySupported: number;
}

export interface CMsgNetworkDevicesData_Device_Wireless_AP {
  id: number;
  estrength: number;
  ssid: string;
  isActive: boolean;
  isAutoconnect: boolean;
  esecurity: number;
  userName: string;
  password: string;
  strengthRaw: number;
}

export interface CMsgNetworkDeviceConnect {
  deviceId: number;
  credentials: CMsgNetworkDeviceConnect_Credentials | undefined;
  ip4: CMsgNetworkDeviceIP4Config | undefined;
  ip6: CMsgNetworkDeviceIP6Config | undefined;
  apKnown?: CMsgNetworkDeviceConnect_KnownAP | undefined;
  apCustom?: CMsgNetworkDeviceConnect_CustomAP | undefined;
}

export interface CMsgNetworkDeviceConnect_KnownAP {
  apId: number;
}

export interface CMsgNetworkDeviceConnect_CustomAP {
  ssid: string;
  esecurity: number;
}

export interface CMsgNetworkDeviceConnect_Credentials {
  username: string;
  password: string;
}

export interface CMsgStorageDevicesData {
  drives: CMsgStorageDevicesData_Drive[];
  blockDevices: CMsgStorageDevicesData_BlockDevice[];
  isUnmountSupported: boolean;
  isTrimSupported: boolean;
  isTrimRunning: boolean;
}

export interface CMsgStorageDevicesData_Drive {
  id: number;
  model: string;
  vendor: string;
  serial: string;
  isEjectable: boolean;
  sizeBytes: string;
  mediaType: EStorageDriveMediaType;
}

export interface CMsgStorageDevicesData_BlockDevice {
  id: number;
  driveId: number;
  path: string;
  friendlyPath: string;
  label: string;
  sizeBytes: string;
  isFormattable: boolean;
  isReadOnly: boolean;
  isRootDevice: boolean;
  contentType: EStorageBlockContentType;
  filesystemType: EStorageBlockFileSystemType;
  mountPath: string;
}

export interface CCloudPendingRemoteOperation {
  operation: ECloudPendingRemoteOperation;
  machineName: string;
  clientId: string;
  timeLastUpdated: number;
}

export interface CMsgCloudPendingRemoteOperations {
  operations: CCloudPendingRemoteOperation[];
}

export interface CMsgBluetoothDevicesData {
  adapters: CMsgBluetoothDevicesData_Adapter[];
  devices: CMsgBluetoothDevicesData_Device[];
  manager: CMsgBluetoothDevicesData_Manager | undefined;
}

export interface CMsgBluetoothDevicesData_Adapter {
  id: number;
  mac: string;
  name: string;
  isEnabled: boolean;
  isDiscovering: boolean;
}

export interface CMsgBluetoothDevicesData_Device {
  id: number;
  adapterId: number;
  etype: EBluetoothDeviceType;
  mac: string;
  name: string;
  isConnected: boolean;
  isPaired: boolean;
  strengthRaw: number;
}

export interface CMsgBluetoothDevicesData_Manager {
  isBluetoothEnabled: boolean;
}

export interface CMsgSystemPerfDiagnosticEntry {
  name: string;
  value: string;
}

export interface CMsgSystemPerfNetworkInterface {
  name: string;
  timestamp: number;
  txBytesTotal: string;
  rxBytesTotal: string;
  txBytesPerSec: number;
  rxBytesPerSec: number;
}

export interface CMsgSystemPerfDiagnosticInfo {
  entries: CMsgSystemPerfDiagnosticEntry[];
  interfaces: CMsgSystemPerfNetworkInterface[];
  batteryTempC: number;
}

export interface CMsgSystemPerfLimits {
  cpuGovernorManualMinMhz: number;
  cpuGovernorManualMaxMhz: number;
  fsrSharpnessMin: number;
  fsrSharpnessMax: number;
  gpuPerformanceManualMinMhz: number;
  gpuPerformanceManualMaxMhz: number;
  perfOverlayIsStandalone: boolean;
  isDynamicVrsAvailable: boolean;
  isManualDisplayRefreshRateAvailable: boolean;
  gpuPerformanceLevelsAvailable: EGPUPerformanceLevel[];
  displayRefreshManualHzMin: number;
  displayRefreshManualHzMax: number;
  fpsLimitOptions: number[];
  tdpLimitMin: number;
  tdpLimitMax: number;
  isNisSupported: boolean;
  nisSharpnessMin: number;
  nisSharpnessMax: number;
  displayExternalRefreshManualHzMin: number;
  displayExternalRefreshManualHzMax: number;
  fpsLimitOptionsExternal: number[];
  isTearingSupported: boolean;
  isVrrSupported: boolean;
  isDynamicRefreshRateInSteamSupported: boolean;
  isSplitScalingAndFilteringSupported: boolean;
  splitScalingFiltersAvailable: ESplitScalingFilter[];
  splitScalingScalersAvailable: ESplitScalingScaler[];
  isHdrSupported: boolean;
}

export interface CMsgSystemPerfSettingsGlobal {
  diagnosticUpdateRate: number;
  systemTraceServiceState: ESystemServiceState;
  graphicsProfilingServiceState: ESystemServiceState;
  perfOverlayServiceState: ESystemServiceState;
  perfOverlayLevel: EGraphicsPerfOverlayLevel;
  isShowPerfOverlayOverSteamEnabled: boolean;
  isAdvancedSettingsEnabled: boolean;
  allowExternalDisplayRefreshControl: boolean;
  isHdrEnabled: boolean;
  forceHdrWideGammutForSdr: boolean;
  forceHdr10pqOutputDebug: boolean;
  hdrOnSdrTonemapOperator: EHDRToneMapOperator;
  isHdrDebugHeatmapEnabled: boolean;
  debugForceHdrSupport: boolean;
}

export interface CMsgSystemPerfSettingsPerApp {
  gpuPerformanceManualMhz: number;
  fpsLimit: number;
  isVariableResolutionEnabled: boolean;
  isDynamicRefreshRateEnabled: boolean;
  tdpLimit: number;
  cpuGovernor: ECPUGovernor;
  cpuGovernorManualMhz: number;
  scalingFilter: number;
  fsrSharpness: number;
  isFpsLimitEnabled: boolean;
  isTdpLimitEnabled: boolean;
  isLowLatencyModeEnabled: boolean;
  displayRefreshManualHz: number;
  isGamePerfProfileEnabled: boolean;
  gpuPerformanceLevel: EGPUPerformanceLevel;
  nisSharpness: number;
  displayExternalRefreshManualHz: number;
  fpsLimitExternal: number;
  isTearingEnabled: boolean;
  isVrrEnabled: boolean;
  isCompositeDebugEnabled: boolean;
  forceComposite: boolean;
  useDynamicRefreshRateInSteam: boolean;
  splitScalingFilter: ESplitScalingFilter;
  splitScalingScaler: ESplitScalingScaler;
}

export interface CMsgSystemPerfSettings {
  global: CMsgSystemPerfSettingsGlobal | undefined;
  perApp: CMsgSystemPerfSettingsPerApp | undefined;
}

export interface CMsgSystemPerfSettingsV1 {
  diagnosticUpdateRate: number;
  systemTraceServiceState: ESystemServiceState;
  graphicsProfilingServiceState: ESystemServiceState;
  perfOverlayServiceState: ESystemServiceState;
  perfOverlayLevel: EGraphicsPerfOverlayLevel;
  gpuPerformanceLevel: EGPUPerformanceLevel;
  gpuPerformanceManualMhz: number;
  fpsLimit: number;
  isVariableResolutionEnabled: boolean;
  isDynamicRefreshRateEnabled: boolean;
  tdpLimit: number;
  cpuGovernor: ECPUGovernor;
  cpuGovernorManualMhz: number;
  scalingFilter: number;
  fsrSharpness: number;
  isFpsLimitEnabled: boolean;
  isTdpLimitEnabled: boolean;
  isShowPerfOverlayOverSteamEnabled: boolean;
  isLowLatencyModeEnabled: boolean;
  displayRefreshManualHz: number;
  isGamePerfProfileEnabled: boolean;
}

export interface CMsgSystemPerfState {
  limits: CMsgSystemPerfLimits | undefined;
  settings: CMsgSystemPerfSettings | undefined;
  currentGameId: string;
  activeProfileGameId: string;
}

export interface CMsgSystemPerfUpdateSettings {
  gameid: string;
  resetToDefault?: boolean | undefined;
  settingsDelta?: CMsgSystemPerfSettings | undefined;
}

export interface CMsgSystemDockUpdateState {
  state: EUpdaterState;
  rtimeLastChecked: number;
  versionCurrent: string;
  versionAvailable: string;
  stageProgress: number;
  rtimeEstimatedCompletion: number;
  oldFwWorkaround: number;
}

export interface CMsgSystemDockState {
  updateState: CMsgSystemDockUpdateState | undefined;
}

export interface CMsgSystemDockUpdateFirmware {
  checkOnly: boolean;
}

export interface CMsgSystemAudioVolume {
  entries: CMsgSystemAudioVolume_ChannelEntry[];
  isMuted: boolean;
}

export interface CMsgSystemAudioVolume_ChannelEntry {
  echannel: ESystemAudioChannel;
  volume: number;
}

export interface CMsgSystemAudioManagerObject {
  id: number;
  rtimeLastUpdate: number;
}

export interface CMsgSystemAudioManagerDevice {
  base: CMsgSystemAudioManagerObject | undefined;
  name: string;
  nick: string;
  description: string;
  api: string;
}

export interface CMsgSystemAudioManagerNode {
  base: CMsgSystemAudioManagerObject | undefined;
  deviceId: number;
  name: string;
  nick: string;
  description: string;
  edirection: ESystemAudioDirection;
  volume: CMsgSystemAudioVolume | undefined;
}

export interface CMsgSystemAudioManagerPort {
  base: CMsgSystemAudioManagerObject | undefined;
  nodeId: number;
  name: string;
  alias: string;
  etype: ESystemAudioPortType;
  edirection: ESystemAudioPortDirection;
  isPhysical: boolean;
  isTerminal: boolean;
  isControl: boolean;
  isMonitor: boolean;
}

export interface CMsgSystemAudioManagerLink {
  base: CMsgSystemAudioManagerObject | undefined;
  outputNodeId: number;
  outputPortId: number;
  inputNodeId: number;
  inputPortId: number;
}

export interface CMsgSystemAudioManagerStateHW {
  devices: CMsgSystemAudioManagerDevice[];
  nodes: CMsgSystemAudioManagerNode[];
  ports: CMsgSystemAudioManagerPort[];
  links: CMsgSystemAudioManagerLink[];
}

export interface CMsgSystemAudioManagerState {
  rtimeFilter: number;
  counter: number;
  hw: CMsgSystemAudioManagerStateHW | undefined;
}

export interface CMsgSystemAudioManagerUpdateSomething {
  counter: number;
}

export interface CMsgSystemDisplayMode {
  id: number;
  width: number;
  height: number;
  refreshHz: number;
}

export interface CMsgSystemDisplay {
  id: number;
  name: string;
  description: string;
  isPrimary: boolean;
  isEnabled: boolean;
  isInternal: boolean;
  hasModeOverride: boolean;
  widthMm: number;
  heightMm: number;
  currentModeId: number;
  modes: CMsgSystemDisplayMode[];
  refreshRateMin: number;
  refreshRateMax: number;
  isVrrCapable: boolean;
  isVrrEnabled: boolean;
  isHdrCapable: boolean;
  isHdrEnabled: boolean;
}

export interface CMsgSystemDisplayManagerState {
  displays: CMsgSystemDisplay[];
  isModeSwitchingSupported: boolean;
  compatibilityMode: ESystemDisplayCompatibilityMode;
}

export interface CMsgSystemDisplayManagerSetMode {
  displayId: number;
  modeId: number;
}

export interface CMsgSystemManagerSettings {
  idleBacklightDimBatterySeconds: number;
  idleBacklightDimAcSeconds: number;
  idleSuspendBatterySeconds: number;
  idleSuspendAcSeconds: number;
  idleSuspendSupressed: boolean;
  isAdaptiveBrightnessAvailable: boolean;
  displayAdaptiveBrightnessEnabled: boolean;
  isDisplayColorprofileAvailable: boolean;
  displayColorprofile: EColorProfile;
  displayNightmodeEnabled: boolean;
  displayNightmodeTintstrength: number;
  displayNightmodeMaxhue: number;
  displayNightmodeMaxsat: number;
  displayNightmodeUiexp: number;
  displayNightmodeBlend: number;
  displayNightmodeReset: boolean;
  displayNightmodeScheduleEnabled: boolean;
  displayNightmodeScheduleStarttime: number;
  displayNightmodeScheduleEndtime: number;
  displayDiagnosticsEnabled: boolean;
  alsLuxLatest: number;
  alsLuxMedian: number;
  displayBrightnessLinear: number;
  displayBrightnessAdaptivemin: number;
  displayBrightnessAdaptivemax: number;
  isWifiPowersaveEnabled: boolean;
  isFanControlAvailable: boolean;
  fanControlMode: ESystemFanControlMode;
}

export interface CMsgSelectOSBranchParams {
  branch: EOSBranch;
  customBranch: string;
}

export interface CMsgSystemUpdateProgress {
  stageProgress: number;
  stageSizeBytes: string;
  rtimeEstimatedCompletion: number;
}

export interface CMsgSystemUpdateCheckResult {
  type: EUpdaterType;
  eresult: number;
  rtimeChecked: number;
  available: boolean;
  version: string;
}

export interface CMsgSystemUpdateApplyParams {
  applyTypes: EUpdaterType[];
}

export interface CMsgSystemUpdateApplyResult {
  type: EUpdaterType;
  eresult: number;
  requiresClientRestart: boolean;
  requiresSystemRestart: boolean;
}

export interface CMsgSystemUpdateState {
  state: EUpdaterState;
  progress: CMsgSystemUpdateProgress | undefined;
  updateCheckResults: CMsgSystemUpdateCheckResult[];
  updateApplyResults: CMsgSystemUpdateApplyResult[];
  supportsOsUpdates: boolean;
}

export interface CMsgAchievementChange {
  appid: number;
}

export interface CMsgCellList {
  cells: CMsgCellList_Cell[];
}

export interface CMsgCellList_Cell {
  cellId: number;
  locName: string;
}

export interface CMsgShortcutInfo {
  appid: number;
  exe: string;
  startDir: string;
  icon: string;
  path: string;
  args: string;
  appName: string;
  overrideAppid: number;
  flatpakAppid: string;
  tags: string[];
  isRemote: boolean;
  isHidden: boolean;
  isTemporary: boolean;
  isOpenvr: boolean;
  allowDesktopConfig: boolean;
  allowOverlay: boolean;
  rtLastPlayedTime: number;
  isDevkitShortcut: boolean;
  devkitGameid: string;
}

export interface CMsgShortcutAppIds {
  appids: number[];
}

export interface CMsgMonitorInfo {
  selectedDisplayName: string;
  monitors: CMsgMonitorInfo_MonitorInfo[];
}

export interface CMsgMonitorInfo_MonitorInfo {
  monitorDeviceName: string;
  monitorDisplayName: string;
}

function createBaseSteamMessagesClientIClientForcedEnumDependencies(): SteamMessagesClientIClientForcedEnumDependencies {
  return { a: 0, b: 0, c: 0, d: 0 };
}

export const SteamMessagesClientIClientForcedEnumDependencies = {
  encode(
    message: SteamMessagesClientIClientForcedEnumDependencies,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(8).int32(message.a);
    }
    if (message.b !== 0) {
      writer.uint32(16).int32(message.b);
    }
    if (message.c !== 0) {
      writer.uint32(24).int32(message.c);
    }
    if (message.d !== 0) {
      writer.uint32(32).int32(message.d);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SteamMessagesClientIClientForcedEnumDependencies {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSteamMessagesClientIClientForcedEnumDependencies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = reader.int32() as any;
          break;
        case 2:
          message.b = reader.int32() as any;
          break;
        case 3:
          message.c = reader.int32() as any;
          break;
        case 4:
          message.d = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SteamMessagesClientIClientForcedEnumDependencies {
    return {
      a: isSet(object.a) ? eBluetoothDeviceTypeFromJSON(object.a) : 0,
      b: isSet(object.b) ? eStorageBlockContentTypeFromJSON(object.b) : 0,
      c: isSet(object.c) ? eStorageBlockFileSystemTypeFromJSON(object.c) : 0,
      d: isSet(object.d) ? eSDCardFormatStageFromJSON(object.d) : 0,
    };
  },

  toJSON(message: SteamMessagesClientIClientForcedEnumDependencies): unknown {
    const obj: any = {};
    message.a !== undefined && (obj.a = eBluetoothDeviceTypeToJSON(message.a));
    message.b !== undefined && (obj.b = eStorageBlockContentTypeToJSON(message.b));
    message.c !== undefined && (obj.c = eStorageBlockFileSystemTypeToJSON(message.c));
    message.d !== undefined && (obj.d = eSDCardFormatStageToJSON(message.d));
    return obj;
  },

  create<I extends Exact<DeepPartial<SteamMessagesClientIClientForcedEnumDependencies>, I>>(
    base?: I,
  ): SteamMessagesClientIClientForcedEnumDependencies {
    return SteamMessagesClientIClientForcedEnumDependencies.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SteamMessagesClientIClientForcedEnumDependencies>, I>>(
    object: I,
  ): SteamMessagesClientIClientForcedEnumDependencies {
    const message = createBaseSteamMessagesClientIClientForcedEnumDependencies();
    message.a = object.a ?? 0;
    message.b = object.b ?? 0;
    message.c = object.c ?? 0;
    message.d = object.d ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDeviceIP4Address(): CMsgNetworkDeviceIP4Address {
  return { ip: 0, netmask: 0 };
}

export const CMsgNetworkDeviceIP4Address = {
  encode(message: CMsgNetworkDeviceIP4Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== 0) {
      writer.uint32(8).int32(message.ip);
    }
    if (message.netmask !== 0) {
      writer.uint32(16).int32(message.netmask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceIP4Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceIP4Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.int32();
          break;
        case 2:
          message.netmask = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceIP4Address {
    return {
      ip: isSet(object.ip) ? Number(object.ip) : 0,
      netmask: isSet(object.netmask) ? Number(object.netmask) : 0,
    };
  },

  toJSON(message: CMsgNetworkDeviceIP4Address): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = Math.round(message.ip));
    message.netmask !== undefined && (obj.netmask = Math.round(message.netmask));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceIP4Address>, I>>(base?: I): CMsgNetworkDeviceIP4Address {
    return CMsgNetworkDeviceIP4Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceIP4Address>, I>>(object: I): CMsgNetworkDeviceIP4Address {
    const message = createBaseCMsgNetworkDeviceIP4Address();
    message.ip = object.ip ?? 0;
    message.netmask = object.netmask ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDeviceIP4Config(): CMsgNetworkDeviceIP4Config {
  return { addresses: [], dnsIp: [], gatewayIp: 0, isDhcpEnabled: false, isDefaultRoute: false, isEnabled: false };
}

export const CMsgNetworkDeviceIP4Config = {
  encode(message: CMsgNetworkDeviceIP4Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      CMsgNetworkDeviceIP4Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.dnsIp) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.gatewayIp !== 0) {
      writer.uint32(24).int32(message.gatewayIp);
    }
    if (message.isDhcpEnabled === true) {
      writer.uint32(32).bool(message.isDhcpEnabled);
    }
    if (message.isDefaultRoute === true) {
      writer.uint32(40).bool(message.isDefaultRoute);
    }
    if (message.isEnabled === true) {
      writer.uint32(48).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceIP4Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceIP4Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(CMsgNetworkDeviceIP4Address.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dnsIp.push(reader.int32());
            }
          } else {
            message.dnsIp.push(reader.int32());
          }
          break;
        case 3:
          message.gatewayIp = reader.int32();
          break;
        case 4:
          message.isDhcpEnabled = reader.bool();
          break;
        case 5:
          message.isDefaultRoute = reader.bool();
          break;
        case 6:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceIP4Config {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => CMsgNetworkDeviceIP4Address.fromJSON(e))
        : [],
      dnsIp: Array.isArray(object?.dnsIp) ? object.dnsIp.map((e: any) => Number(e)) : [],
      gatewayIp: isSet(object.gatewayIp) ? Number(object.gatewayIp) : 0,
      isDhcpEnabled: isSet(object.isDhcpEnabled) ? Boolean(object.isDhcpEnabled) : false,
      isDefaultRoute: isSet(object.isDefaultRoute) ? Boolean(object.isDefaultRoute) : false,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: CMsgNetworkDeviceIP4Config): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? CMsgNetworkDeviceIP4Address.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    if (message.dnsIp) {
      obj.dnsIp = message.dnsIp.map((e) => Math.round(e));
    } else {
      obj.dnsIp = [];
    }
    message.gatewayIp !== undefined && (obj.gatewayIp = Math.round(message.gatewayIp));
    message.isDhcpEnabled !== undefined && (obj.isDhcpEnabled = message.isDhcpEnabled);
    message.isDefaultRoute !== undefined && (obj.isDefaultRoute = message.isDefaultRoute);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceIP4Config>, I>>(base?: I): CMsgNetworkDeviceIP4Config {
    return CMsgNetworkDeviceIP4Config.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceIP4Config>, I>>(object: I): CMsgNetworkDeviceIP4Config {
    const message = createBaseCMsgNetworkDeviceIP4Config();
    message.addresses = object.addresses?.map((e) => CMsgNetworkDeviceIP4Address.fromPartial(e)) || [];
    message.dnsIp = object.dnsIp?.map((e) => e) || [];
    message.gatewayIp = object.gatewayIp ?? 0;
    message.isDhcpEnabled = object.isDhcpEnabled ?? false;
    message.isDefaultRoute = object.isDefaultRoute ?? false;
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseCMsgNetworkDeviceIP6Address(): CMsgNetworkDeviceIP6Address {
  return { ip: "" };
}

export const CMsgNetworkDeviceIP6Address = {
  encode(message: CMsgNetworkDeviceIP6Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceIP6Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceIP6Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceIP6Address {
    return { ip: isSet(object.ip) ? String(object.ip) : "" };
  },

  toJSON(message: CMsgNetworkDeviceIP6Address): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceIP6Address>, I>>(base?: I): CMsgNetworkDeviceIP6Address {
    return CMsgNetworkDeviceIP6Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceIP6Address>, I>>(object: I): CMsgNetworkDeviceIP6Address {
    const message = createBaseCMsgNetworkDeviceIP6Address();
    message.ip = object.ip ?? "";
    return message;
  },
};

function createBaseCMsgNetworkDeviceIP6Config(): CMsgNetworkDeviceIP6Config {
  return { addresses: [], dnsIp: [], gatewayIp: "", isDhcpEnabled: false, isDefaultRoute: false, isEnabled: false };
}

export const CMsgNetworkDeviceIP6Config = {
  encode(message: CMsgNetworkDeviceIP6Config, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      CMsgNetworkDeviceIP6Address.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dnsIp) {
      writer.uint32(18).string(v!);
    }
    if (message.gatewayIp !== "") {
      writer.uint32(26).string(message.gatewayIp);
    }
    if (message.isDhcpEnabled === true) {
      writer.uint32(32).bool(message.isDhcpEnabled);
    }
    if (message.isDefaultRoute === true) {
      writer.uint32(40).bool(message.isDefaultRoute);
    }
    if (message.isEnabled === true) {
      writer.uint32(48).bool(message.isEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceIP6Config {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceIP6Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(CMsgNetworkDeviceIP6Address.decode(reader, reader.uint32()));
          break;
        case 2:
          message.dnsIp.push(reader.string());
          break;
        case 3:
          message.gatewayIp = reader.string();
          break;
        case 4:
          message.isDhcpEnabled = reader.bool();
          break;
        case 5:
          message.isDefaultRoute = reader.bool();
          break;
        case 6:
          message.isEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceIP6Config {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => CMsgNetworkDeviceIP6Address.fromJSON(e))
        : [],
      dnsIp: Array.isArray(object?.dnsIp) ? object.dnsIp.map((e: any) => String(e)) : [],
      gatewayIp: isSet(object.gatewayIp) ? String(object.gatewayIp) : "",
      isDhcpEnabled: isSet(object.isDhcpEnabled) ? Boolean(object.isDhcpEnabled) : false,
      isDefaultRoute: isSet(object.isDefaultRoute) ? Boolean(object.isDefaultRoute) : false,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
    };
  },

  toJSON(message: CMsgNetworkDeviceIP6Config): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? CMsgNetworkDeviceIP6Address.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    if (message.dnsIp) {
      obj.dnsIp = message.dnsIp.map((e) => e);
    } else {
      obj.dnsIp = [];
    }
    message.gatewayIp !== undefined && (obj.gatewayIp = message.gatewayIp);
    message.isDhcpEnabled !== undefined && (obj.isDhcpEnabled = message.isDhcpEnabled);
    message.isDefaultRoute !== undefined && (obj.isDefaultRoute = message.isDefaultRoute);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceIP6Config>, I>>(base?: I): CMsgNetworkDeviceIP6Config {
    return CMsgNetworkDeviceIP6Config.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceIP6Config>, I>>(object: I): CMsgNetworkDeviceIP6Config {
    const message = createBaseCMsgNetworkDeviceIP6Config();
    message.addresses = object.addresses?.map((e) => CMsgNetworkDeviceIP6Address.fromPartial(e)) || [];
    message.dnsIp = object.dnsIp?.map((e) => e) || [];
    message.gatewayIp = object.gatewayIp ?? "";
    message.isDhcpEnabled = object.isDhcpEnabled ?? false;
    message.isDefaultRoute = object.isDefaultRoute ?? false;
    message.isEnabled = object.isEnabled ?? false;
    return message;
  },
};

function createBaseCMsgNetworkDevicesData(): CMsgNetworkDevicesData {
  return { devices: [], isWifiEnabled: false, isWifiScanningEnabled: false };
}

export const CMsgNetworkDevicesData = {
  encode(message: CMsgNetworkDevicesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      CMsgNetworkDevicesData_Device.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.isWifiEnabled === true) {
      writer.uint32(16).bool(message.isWifiEnabled);
    }
    if (message.isWifiScanningEnabled === true) {
      writer.uint32(24).bool(message.isWifiScanningEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDevicesData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDevicesData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(CMsgNetworkDevicesData_Device.decode(reader, reader.uint32()));
          break;
        case 2:
          message.isWifiEnabled = reader.bool();
          break;
        case 3:
          message.isWifiScanningEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDevicesData {
    return {
      devices: Array.isArray(object?.devices)
        ? object.devices.map((e: any) => CMsgNetworkDevicesData_Device.fromJSON(e))
        : [],
      isWifiEnabled: isSet(object.isWifiEnabled) ? Boolean(object.isWifiEnabled) : false,
      isWifiScanningEnabled: isSet(object.isWifiScanningEnabled) ? Boolean(object.isWifiScanningEnabled) : false,
    };
  },

  toJSON(message: CMsgNetworkDevicesData): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) => e ? CMsgNetworkDevicesData_Device.toJSON(e) : undefined);
    } else {
      obj.devices = [];
    }
    message.isWifiEnabled !== undefined && (obj.isWifiEnabled = message.isWifiEnabled);
    message.isWifiScanningEnabled !== undefined && (obj.isWifiScanningEnabled = message.isWifiScanningEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDevicesData>, I>>(base?: I): CMsgNetworkDevicesData {
    return CMsgNetworkDevicesData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDevicesData>, I>>(object: I): CMsgNetworkDevicesData {
    const message = createBaseCMsgNetworkDevicesData();
    message.devices = object.devices?.map((e) => CMsgNetworkDevicesData_Device.fromPartial(e)) || [];
    message.isWifiEnabled = object.isWifiEnabled ?? false;
    message.isWifiScanningEnabled = object.isWifiScanningEnabled ?? false;
    return message;
  },
};

function createBaseCMsgNetworkDevicesData_Device(): CMsgNetworkDevicesData_Device {
  return {
    id: 0,
    etype: 0,
    estate: 0,
    mac: "",
    vendor: "",
    product: "",
    ip4: undefined,
    ip6: undefined,
    wired: undefined,
    wireless: undefined,
  };
}

export const CMsgNetworkDevicesData_Device = {
  encode(message: CMsgNetworkDevicesData_Device, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.etype !== 0) {
      writer.uint32(16).int32(message.etype);
    }
    if (message.estate !== 0) {
      writer.uint32(24).int32(message.estate);
    }
    if (message.mac !== "") {
      writer.uint32(34).string(message.mac);
    }
    if (message.vendor !== "") {
      writer.uint32(42).string(message.vendor);
    }
    if (message.product !== "") {
      writer.uint32(50).string(message.product);
    }
    if (message.ip4 !== undefined) {
      CMsgNetworkDeviceIP4Config.encode(message.ip4, writer.uint32(58).fork()).ldelim();
    }
    if (message.ip6 !== undefined) {
      CMsgNetworkDeviceIP6Config.encode(message.ip6, writer.uint32(66).fork()).ldelim();
    }
    if (message.wired !== undefined) {
      CMsgNetworkDevicesData_Device_Wired.encode(message.wired, writer.uint32(74).fork()).ldelim();
    }
    if (message.wireless !== undefined) {
      CMsgNetworkDevicesData_Device_Wireless.encode(message.wireless, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDevicesData_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDevicesData_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.etype = reader.int32();
          break;
        case 3:
          message.estate = reader.int32();
          break;
        case 4:
          message.mac = reader.string();
          break;
        case 5:
          message.vendor = reader.string();
          break;
        case 6:
          message.product = reader.string();
          break;
        case 7:
          message.ip4 = CMsgNetworkDeviceIP4Config.decode(reader, reader.uint32());
          break;
        case 8:
          message.ip6 = CMsgNetworkDeviceIP6Config.decode(reader, reader.uint32());
          break;
        case 9:
          message.wired = CMsgNetworkDevicesData_Device_Wired.decode(reader, reader.uint32());
          break;
        case 10:
          message.wireless = CMsgNetworkDevicesData_Device_Wireless.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDevicesData_Device {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      etype: isSet(object.etype) ? Number(object.etype) : 0,
      estate: isSet(object.estate) ? Number(object.estate) : 0,
      mac: isSet(object.mac) ? String(object.mac) : "",
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      product: isSet(object.product) ? String(object.product) : "",
      ip4: isSet(object.ip4) ? CMsgNetworkDeviceIP4Config.fromJSON(object.ip4) : undefined,
      ip6: isSet(object.ip6) ? CMsgNetworkDeviceIP6Config.fromJSON(object.ip6) : undefined,
      wired: isSet(object.wired) ? CMsgNetworkDevicesData_Device_Wired.fromJSON(object.wired) : undefined,
      wireless: isSet(object.wireless) ? CMsgNetworkDevicesData_Device_Wireless.fromJSON(object.wireless) : undefined,
    };
  },

  toJSON(message: CMsgNetworkDevicesData_Device): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.etype !== undefined && (obj.etype = Math.round(message.etype));
    message.estate !== undefined && (obj.estate = Math.round(message.estate));
    message.mac !== undefined && (obj.mac = message.mac);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.product !== undefined && (obj.product = message.product);
    message.ip4 !== undefined && (obj.ip4 = message.ip4 ? CMsgNetworkDeviceIP4Config.toJSON(message.ip4) : undefined);
    message.ip6 !== undefined && (obj.ip6 = message.ip6 ? CMsgNetworkDeviceIP6Config.toJSON(message.ip6) : undefined);
    message.wired !== undefined &&
      (obj.wired = message.wired ? CMsgNetworkDevicesData_Device_Wired.toJSON(message.wired) : undefined);
    message.wireless !== undefined &&
      (obj.wireless = message.wireless ? CMsgNetworkDevicesData_Device_Wireless.toJSON(message.wireless) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device>, I>>(base?: I): CMsgNetworkDevicesData_Device {
    return CMsgNetworkDevicesData_Device.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device>, I>>(
    object: I,
  ): CMsgNetworkDevicesData_Device {
    const message = createBaseCMsgNetworkDevicesData_Device();
    message.id = object.id ?? 0;
    message.etype = object.etype ?? 0;
    message.estate = object.estate ?? 0;
    message.mac = object.mac ?? "";
    message.vendor = object.vendor ?? "";
    message.product = object.product ?? "";
    message.ip4 = (object.ip4 !== undefined && object.ip4 !== null)
      ? CMsgNetworkDeviceIP4Config.fromPartial(object.ip4)
      : undefined;
    message.ip6 = (object.ip6 !== undefined && object.ip6 !== null)
      ? CMsgNetworkDeviceIP6Config.fromPartial(object.ip6)
      : undefined;
    message.wired = (object.wired !== undefined && object.wired !== null)
      ? CMsgNetworkDevicesData_Device_Wired.fromPartial(object.wired)
      : undefined;
    message.wireless = (object.wireless !== undefined && object.wireless !== null)
      ? CMsgNetworkDevicesData_Device_Wireless.fromPartial(object.wireless)
      : undefined;
    return message;
  },
};

function createBaseCMsgNetworkDevicesData_Device_Wired(): CMsgNetworkDevicesData_Device_Wired {
  return { isCablePresent: false, speedMbit: 0, friendlyName: "" };
}

export const CMsgNetworkDevicesData_Device_Wired = {
  encode(message: CMsgNetworkDevicesData_Device_Wired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isCablePresent === true) {
      writer.uint32(8).bool(message.isCablePresent);
    }
    if (message.speedMbit !== 0) {
      writer.uint32(16).uint32(message.speedMbit);
    }
    if (message.friendlyName !== "") {
      writer.uint32(26).string(message.friendlyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDevicesData_Device_Wired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDevicesData_Device_Wired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isCablePresent = reader.bool();
          break;
        case 2:
          message.speedMbit = reader.uint32();
          break;
        case 3:
          message.friendlyName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDevicesData_Device_Wired {
    return {
      isCablePresent: isSet(object.isCablePresent) ? Boolean(object.isCablePresent) : false,
      speedMbit: isSet(object.speedMbit) ? Number(object.speedMbit) : 0,
      friendlyName: isSet(object.friendlyName) ? String(object.friendlyName) : "",
    };
  },

  toJSON(message: CMsgNetworkDevicesData_Device_Wired): unknown {
    const obj: any = {};
    message.isCablePresent !== undefined && (obj.isCablePresent = message.isCablePresent);
    message.speedMbit !== undefined && (obj.speedMbit = Math.round(message.speedMbit));
    message.friendlyName !== undefined && (obj.friendlyName = message.friendlyName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wired>, I>>(
    base?: I,
  ): CMsgNetworkDevicesData_Device_Wired {
    return CMsgNetworkDevicesData_Device_Wired.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wired>, I>>(
    object: I,
  ): CMsgNetworkDevicesData_Device_Wired {
    const message = createBaseCMsgNetworkDevicesData_Device_Wired();
    message.isCablePresent = object.isCablePresent ?? false;
    message.speedMbit = object.speedMbit ?? 0;
    message.friendlyName = object.friendlyName ?? "";
    return message;
  },
};

function createBaseCMsgNetworkDevicesData_Device_Wireless(): CMsgNetworkDevicesData_Device_Wireless {
  return { aps: [], esecuritySupported: 0 };
}

export const CMsgNetworkDevicesData_Device_Wireless = {
  encode(message: CMsgNetworkDevicesData_Device_Wireless, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aps) {
      CMsgNetworkDevicesData_Device_Wireless_AP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.esecuritySupported !== 0) {
      writer.uint32(16).int32(message.esecuritySupported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDevicesData_Device_Wireless {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDevicesData_Device_Wireless();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aps.push(CMsgNetworkDevicesData_Device_Wireless_AP.decode(reader, reader.uint32()));
          break;
        case 2:
          message.esecuritySupported = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDevicesData_Device_Wireless {
    return {
      aps: Array.isArray(object?.aps)
        ? object.aps.map((e: any) => CMsgNetworkDevicesData_Device_Wireless_AP.fromJSON(e))
        : [],
      esecuritySupported: isSet(object.esecuritySupported) ? Number(object.esecuritySupported) : 0,
    };
  },

  toJSON(message: CMsgNetworkDevicesData_Device_Wireless): unknown {
    const obj: any = {};
    if (message.aps) {
      obj.aps = message.aps.map((e) => e ? CMsgNetworkDevicesData_Device_Wireless_AP.toJSON(e) : undefined);
    } else {
      obj.aps = [];
    }
    message.esecuritySupported !== undefined && (obj.esecuritySupported = Math.round(message.esecuritySupported));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wireless>, I>>(
    base?: I,
  ): CMsgNetworkDevicesData_Device_Wireless {
    return CMsgNetworkDevicesData_Device_Wireless.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wireless>, I>>(
    object: I,
  ): CMsgNetworkDevicesData_Device_Wireless {
    const message = createBaseCMsgNetworkDevicesData_Device_Wireless();
    message.aps = object.aps?.map((e) => CMsgNetworkDevicesData_Device_Wireless_AP.fromPartial(e)) || [];
    message.esecuritySupported = object.esecuritySupported ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDevicesData_Device_Wireless_AP(): CMsgNetworkDevicesData_Device_Wireless_AP {
  return {
    id: 0,
    estrength: 0,
    ssid: "",
    isActive: false,
    isAutoconnect: false,
    esecurity: 0,
    userName: "",
    password: "",
    strengthRaw: 0,
  };
}

export const CMsgNetworkDevicesData_Device_Wireless_AP = {
  encode(message: CMsgNetworkDevicesData_Device_Wireless_AP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.estrength !== 0) {
      writer.uint32(16).int32(message.estrength);
    }
    if (message.ssid !== "") {
      writer.uint32(26).string(message.ssid);
    }
    if (message.isActive === true) {
      writer.uint32(32).bool(message.isActive);
    }
    if (message.isAutoconnect === true) {
      writer.uint32(40).bool(message.isAutoconnect);
    }
    if (message.esecurity !== 0) {
      writer.uint32(48).int32(message.esecurity);
    }
    if (message.userName !== "") {
      writer.uint32(58).string(message.userName);
    }
    if (message.password !== "") {
      writer.uint32(66).string(message.password);
    }
    if (message.strengthRaw !== 0) {
      writer.uint32(72).int32(message.strengthRaw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDevicesData_Device_Wireless_AP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDevicesData_Device_Wireless_AP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.estrength = reader.int32();
          break;
        case 3:
          message.ssid = reader.string();
          break;
        case 4:
          message.isActive = reader.bool();
          break;
        case 5:
          message.isAutoconnect = reader.bool();
          break;
        case 6:
          message.esecurity = reader.int32();
          break;
        case 7:
          message.userName = reader.string();
          break;
        case 8:
          message.password = reader.string();
          break;
        case 9:
          message.strengthRaw = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDevicesData_Device_Wireless_AP {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      estrength: isSet(object.estrength) ? Number(object.estrength) : 0,
      ssid: isSet(object.ssid) ? String(object.ssid) : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      isAutoconnect: isSet(object.isAutoconnect) ? Boolean(object.isAutoconnect) : false,
      esecurity: isSet(object.esecurity) ? Number(object.esecurity) : 0,
      userName: isSet(object.userName) ? String(object.userName) : "",
      password: isSet(object.password) ? String(object.password) : "",
      strengthRaw: isSet(object.strengthRaw) ? Number(object.strengthRaw) : 0,
    };
  },

  toJSON(message: CMsgNetworkDevicesData_Device_Wireless_AP): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.estrength !== undefined && (obj.estrength = Math.round(message.estrength));
    message.ssid !== undefined && (obj.ssid = message.ssid);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.isAutoconnect !== undefined && (obj.isAutoconnect = message.isAutoconnect);
    message.esecurity !== undefined && (obj.esecurity = Math.round(message.esecurity));
    message.userName !== undefined && (obj.userName = message.userName);
    message.password !== undefined && (obj.password = message.password);
    message.strengthRaw !== undefined && (obj.strengthRaw = Math.round(message.strengthRaw));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wireless_AP>, I>>(
    base?: I,
  ): CMsgNetworkDevicesData_Device_Wireless_AP {
    return CMsgNetworkDevicesData_Device_Wireless_AP.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDevicesData_Device_Wireless_AP>, I>>(
    object: I,
  ): CMsgNetworkDevicesData_Device_Wireless_AP {
    const message = createBaseCMsgNetworkDevicesData_Device_Wireless_AP();
    message.id = object.id ?? 0;
    message.estrength = object.estrength ?? 0;
    message.ssid = object.ssid ?? "";
    message.isActive = object.isActive ?? false;
    message.isAutoconnect = object.isAutoconnect ?? false;
    message.esecurity = object.esecurity ?? 0;
    message.userName = object.userName ?? "";
    message.password = object.password ?? "";
    message.strengthRaw = object.strengthRaw ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDeviceConnect(): CMsgNetworkDeviceConnect {
  return {
    deviceId: 0,
    credentials: undefined,
    ip4: undefined,
    ip6: undefined,
    apKnown: undefined,
    apCustom: undefined,
  };
}

export const CMsgNetworkDeviceConnect = {
  encode(message: CMsgNetworkDeviceConnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceId !== 0) {
      writer.uint32(8).uint32(message.deviceId);
    }
    if (message.credentials !== undefined) {
      CMsgNetworkDeviceConnect_Credentials.encode(message.credentials, writer.uint32(34).fork()).ldelim();
    }
    if (message.ip4 !== undefined) {
      CMsgNetworkDeviceIP4Config.encode(message.ip4, writer.uint32(42).fork()).ldelim();
    }
    if (message.ip6 !== undefined) {
      CMsgNetworkDeviceIP6Config.encode(message.ip6, writer.uint32(50).fork()).ldelim();
    }
    if (message.apKnown !== undefined) {
      CMsgNetworkDeviceConnect_KnownAP.encode(message.apKnown, writer.uint32(18).fork()).ldelim();
    }
    if (message.apCustom !== undefined) {
      CMsgNetworkDeviceConnect_CustomAP.encode(message.apCustom, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceConnect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceConnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceId = reader.uint32();
          break;
        case 4:
          message.credentials = CMsgNetworkDeviceConnect_Credentials.decode(reader, reader.uint32());
          break;
        case 5:
          message.ip4 = CMsgNetworkDeviceIP4Config.decode(reader, reader.uint32());
          break;
        case 6:
          message.ip6 = CMsgNetworkDeviceIP6Config.decode(reader, reader.uint32());
          break;
        case 2:
          message.apKnown = CMsgNetworkDeviceConnect_KnownAP.decode(reader, reader.uint32());
          break;
        case 3:
          message.apCustom = CMsgNetworkDeviceConnect_CustomAP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceConnect {
    return {
      deviceId: isSet(object.deviceId) ? Number(object.deviceId) : 0,
      credentials: isSet(object.credentials)
        ? CMsgNetworkDeviceConnect_Credentials.fromJSON(object.credentials)
        : undefined,
      ip4: isSet(object.ip4) ? CMsgNetworkDeviceIP4Config.fromJSON(object.ip4) : undefined,
      ip6: isSet(object.ip6) ? CMsgNetworkDeviceIP6Config.fromJSON(object.ip6) : undefined,
      apKnown: isSet(object.apKnown) ? CMsgNetworkDeviceConnect_KnownAP.fromJSON(object.apKnown) : undefined,
      apCustom: isSet(object.apCustom) ? CMsgNetworkDeviceConnect_CustomAP.fromJSON(object.apCustom) : undefined,
    };
  },

  toJSON(message: CMsgNetworkDeviceConnect): unknown {
    const obj: any = {};
    message.deviceId !== undefined && (obj.deviceId = Math.round(message.deviceId));
    message.credentials !== undefined && (obj.credentials = message.credentials
      ? CMsgNetworkDeviceConnect_Credentials.toJSON(message.credentials)
      : undefined);
    message.ip4 !== undefined && (obj.ip4 = message.ip4 ? CMsgNetworkDeviceIP4Config.toJSON(message.ip4) : undefined);
    message.ip6 !== undefined && (obj.ip6 = message.ip6 ? CMsgNetworkDeviceIP6Config.toJSON(message.ip6) : undefined);
    message.apKnown !== undefined &&
      (obj.apKnown = message.apKnown ? CMsgNetworkDeviceConnect_KnownAP.toJSON(message.apKnown) : undefined);
    message.apCustom !== undefined &&
      (obj.apCustom = message.apCustom ? CMsgNetworkDeviceConnect_CustomAP.toJSON(message.apCustom) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect>, I>>(base?: I): CMsgNetworkDeviceConnect {
    return CMsgNetworkDeviceConnect.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect>, I>>(object: I): CMsgNetworkDeviceConnect {
    const message = createBaseCMsgNetworkDeviceConnect();
    message.deviceId = object.deviceId ?? 0;
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? CMsgNetworkDeviceConnect_Credentials.fromPartial(object.credentials)
      : undefined;
    message.ip4 = (object.ip4 !== undefined && object.ip4 !== null)
      ? CMsgNetworkDeviceIP4Config.fromPartial(object.ip4)
      : undefined;
    message.ip6 = (object.ip6 !== undefined && object.ip6 !== null)
      ? CMsgNetworkDeviceIP6Config.fromPartial(object.ip6)
      : undefined;
    message.apKnown = (object.apKnown !== undefined && object.apKnown !== null)
      ? CMsgNetworkDeviceConnect_KnownAP.fromPartial(object.apKnown)
      : undefined;
    message.apCustom = (object.apCustom !== undefined && object.apCustom !== null)
      ? CMsgNetworkDeviceConnect_CustomAP.fromPartial(object.apCustom)
      : undefined;
    return message;
  },
};

function createBaseCMsgNetworkDeviceConnect_KnownAP(): CMsgNetworkDeviceConnect_KnownAP {
  return { apId: 0 };
}

export const CMsgNetworkDeviceConnect_KnownAP = {
  encode(message: CMsgNetworkDeviceConnect_KnownAP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apId !== 0) {
      writer.uint32(8).uint32(message.apId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceConnect_KnownAP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceConnect_KnownAP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceConnect_KnownAP {
    return { apId: isSet(object.apId) ? Number(object.apId) : 0 };
  },

  toJSON(message: CMsgNetworkDeviceConnect_KnownAP): unknown {
    const obj: any = {};
    message.apId !== undefined && (obj.apId = Math.round(message.apId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_KnownAP>, I>>(
    base?: I,
  ): CMsgNetworkDeviceConnect_KnownAP {
    return CMsgNetworkDeviceConnect_KnownAP.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_KnownAP>, I>>(
    object: I,
  ): CMsgNetworkDeviceConnect_KnownAP {
    const message = createBaseCMsgNetworkDeviceConnect_KnownAP();
    message.apId = object.apId ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDeviceConnect_CustomAP(): CMsgNetworkDeviceConnect_CustomAP {
  return { ssid: "", esecurity: 0 };
}

export const CMsgNetworkDeviceConnect_CustomAP = {
  encode(message: CMsgNetworkDeviceConnect_CustomAP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ssid !== "") {
      writer.uint32(10).string(message.ssid);
    }
    if (message.esecurity !== 0) {
      writer.uint32(16).int32(message.esecurity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceConnect_CustomAP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceConnect_CustomAP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ssid = reader.string();
          break;
        case 2:
          message.esecurity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceConnect_CustomAP {
    return {
      ssid: isSet(object.ssid) ? String(object.ssid) : "",
      esecurity: isSet(object.esecurity) ? Number(object.esecurity) : 0,
    };
  },

  toJSON(message: CMsgNetworkDeviceConnect_CustomAP): unknown {
    const obj: any = {};
    message.ssid !== undefined && (obj.ssid = message.ssid);
    message.esecurity !== undefined && (obj.esecurity = Math.round(message.esecurity));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_CustomAP>, I>>(
    base?: I,
  ): CMsgNetworkDeviceConnect_CustomAP {
    return CMsgNetworkDeviceConnect_CustomAP.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_CustomAP>, I>>(
    object: I,
  ): CMsgNetworkDeviceConnect_CustomAP {
    const message = createBaseCMsgNetworkDeviceConnect_CustomAP();
    message.ssid = object.ssid ?? "";
    message.esecurity = object.esecurity ?? 0;
    return message;
  },
};

function createBaseCMsgNetworkDeviceConnect_Credentials(): CMsgNetworkDeviceConnect_Credentials {
  return { username: "", password: "" };
}

export const CMsgNetworkDeviceConnect_Credentials = {
  encode(message: CMsgNetworkDeviceConnect_Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNetworkDeviceConnect_Credentials {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNetworkDeviceConnect_Credentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNetworkDeviceConnect_Credentials {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: CMsgNetworkDeviceConnect_Credentials): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_Credentials>, I>>(
    base?: I,
  ): CMsgNetworkDeviceConnect_Credentials {
    return CMsgNetworkDeviceConnect_Credentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNetworkDeviceConnect_Credentials>, I>>(
    object: I,
  ): CMsgNetworkDeviceConnect_Credentials {
    const message = createBaseCMsgNetworkDeviceConnect_Credentials();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseCMsgStorageDevicesData(): CMsgStorageDevicesData {
  return { drives: [], blockDevices: [], isUnmountSupported: false, isTrimSupported: false, isTrimRunning: false };
}

export const CMsgStorageDevicesData = {
  encode(message: CMsgStorageDevicesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.drives) {
      CMsgStorageDevicesData_Drive.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.blockDevices) {
      CMsgStorageDevicesData_BlockDevice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isUnmountSupported === true) {
      writer.uint32(24).bool(message.isUnmountSupported);
    }
    if (message.isTrimSupported === true) {
      writer.uint32(32).bool(message.isTrimSupported);
    }
    if (message.isTrimRunning === true) {
      writer.uint32(40).bool(message.isTrimRunning);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStorageDevicesData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStorageDevicesData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drives.push(CMsgStorageDevicesData_Drive.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockDevices.push(CMsgStorageDevicesData_BlockDevice.decode(reader, reader.uint32()));
          break;
        case 3:
          message.isUnmountSupported = reader.bool();
          break;
        case 4:
          message.isTrimSupported = reader.bool();
          break;
        case 5:
          message.isTrimRunning = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStorageDevicesData {
    return {
      drives: Array.isArray(object?.drives)
        ? object.drives.map((e: any) => CMsgStorageDevicesData_Drive.fromJSON(e))
        : [],
      blockDevices: Array.isArray(object?.blockDevices)
        ? object.blockDevices.map((e: any) => CMsgStorageDevicesData_BlockDevice.fromJSON(e))
        : [],
      isUnmountSupported: isSet(object.isUnmountSupported) ? Boolean(object.isUnmountSupported) : false,
      isTrimSupported: isSet(object.isTrimSupported) ? Boolean(object.isTrimSupported) : false,
      isTrimRunning: isSet(object.isTrimRunning) ? Boolean(object.isTrimRunning) : false,
    };
  },

  toJSON(message: CMsgStorageDevicesData): unknown {
    const obj: any = {};
    if (message.drives) {
      obj.drives = message.drives.map((e) => e ? CMsgStorageDevicesData_Drive.toJSON(e) : undefined);
    } else {
      obj.drives = [];
    }
    if (message.blockDevices) {
      obj.blockDevices = message.blockDevices.map((e) => e ? CMsgStorageDevicesData_BlockDevice.toJSON(e) : undefined);
    } else {
      obj.blockDevices = [];
    }
    message.isUnmountSupported !== undefined && (obj.isUnmountSupported = message.isUnmountSupported);
    message.isTrimSupported !== undefined && (obj.isTrimSupported = message.isTrimSupported);
    message.isTrimRunning !== undefined && (obj.isTrimRunning = message.isTrimRunning);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStorageDevicesData>, I>>(base?: I): CMsgStorageDevicesData {
    return CMsgStorageDevicesData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStorageDevicesData>, I>>(object: I): CMsgStorageDevicesData {
    const message = createBaseCMsgStorageDevicesData();
    message.drives = object.drives?.map((e) => CMsgStorageDevicesData_Drive.fromPartial(e)) || [];
    message.blockDevices = object.blockDevices?.map((e) => CMsgStorageDevicesData_BlockDevice.fromPartial(e)) || [];
    message.isUnmountSupported = object.isUnmountSupported ?? false;
    message.isTrimSupported = object.isTrimSupported ?? false;
    message.isTrimRunning = object.isTrimRunning ?? false;
    return message;
  },
};

function createBaseCMsgStorageDevicesData_Drive(): CMsgStorageDevicesData_Drive {
  return { id: 0, model: "", vendor: "", serial: "", isEjectable: false, sizeBytes: "0", mediaType: 0 };
}

export const CMsgStorageDevicesData_Drive = {
  encode(message: CMsgStorageDevicesData_Drive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.vendor !== "") {
      writer.uint32(26).string(message.vendor);
    }
    if (message.serial !== "") {
      writer.uint32(34).string(message.serial);
    }
    if (message.isEjectable === true) {
      writer.uint32(40).bool(message.isEjectable);
    }
    if (message.sizeBytes !== "0") {
      writer.uint32(48).uint64(message.sizeBytes);
    }
    if (message.mediaType !== 0) {
      writer.uint32(56).int32(message.mediaType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStorageDevicesData_Drive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStorageDevicesData_Drive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.model = reader.string();
          break;
        case 3:
          message.vendor = reader.string();
          break;
        case 4:
          message.serial = reader.string();
          break;
        case 5:
          message.isEjectable = reader.bool();
          break;
        case 6:
          message.sizeBytes = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.mediaType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStorageDevicesData_Drive {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      model: isSet(object.model) ? String(object.model) : "",
      vendor: isSet(object.vendor) ? String(object.vendor) : "",
      serial: isSet(object.serial) ? String(object.serial) : "",
      isEjectable: isSet(object.isEjectable) ? Boolean(object.isEjectable) : false,
      sizeBytes: isSet(object.sizeBytes) ? String(object.sizeBytes) : "0",
      mediaType: isSet(object.mediaType) ? eStorageDriveMediaTypeFromJSON(object.mediaType) : 0,
    };
  },

  toJSON(message: CMsgStorageDevicesData_Drive): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.model !== undefined && (obj.model = message.model);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.serial !== undefined && (obj.serial = message.serial);
    message.isEjectable !== undefined && (obj.isEjectable = message.isEjectable);
    message.sizeBytes !== undefined && (obj.sizeBytes = message.sizeBytes);
    message.mediaType !== undefined && (obj.mediaType = eStorageDriveMediaTypeToJSON(message.mediaType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStorageDevicesData_Drive>, I>>(base?: I): CMsgStorageDevicesData_Drive {
    return CMsgStorageDevicesData_Drive.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStorageDevicesData_Drive>, I>>(object: I): CMsgStorageDevicesData_Drive {
    const message = createBaseCMsgStorageDevicesData_Drive();
    message.id = object.id ?? 0;
    message.model = object.model ?? "";
    message.vendor = object.vendor ?? "";
    message.serial = object.serial ?? "";
    message.isEjectable = object.isEjectable ?? false;
    message.sizeBytes = object.sizeBytes ?? "0";
    message.mediaType = object.mediaType ?? 0;
    return message;
  },
};

function createBaseCMsgStorageDevicesData_BlockDevice(): CMsgStorageDevicesData_BlockDevice {
  return {
    id: 0,
    driveId: 0,
    path: "",
    friendlyPath: "",
    label: "",
    sizeBytes: "0",
    isFormattable: false,
    isReadOnly: false,
    isRootDevice: false,
    contentType: 0,
    filesystemType: 0,
    mountPath: "",
  };
}

export const CMsgStorageDevicesData_BlockDevice = {
  encode(message: CMsgStorageDevicesData_BlockDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.driveId !== 0) {
      writer.uint32(16).uint32(message.driveId);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.friendlyPath !== "") {
      writer.uint32(34).string(message.friendlyPath);
    }
    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }
    if (message.sizeBytes !== "0") {
      writer.uint32(48).uint64(message.sizeBytes);
    }
    if (message.isFormattable === true) {
      writer.uint32(56).bool(message.isFormattable);
    }
    if (message.isReadOnly === true) {
      writer.uint32(64).bool(message.isReadOnly);
    }
    if (message.isRootDevice === true) {
      writer.uint32(72).bool(message.isRootDevice);
    }
    if (message.contentType !== 0) {
      writer.uint32(80).int32(message.contentType);
    }
    if (message.filesystemType !== 0) {
      writer.uint32(88).int32(message.filesystemType);
    }
    if (message.mountPath !== "") {
      writer.uint32(98).string(message.mountPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStorageDevicesData_BlockDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStorageDevicesData_BlockDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.driveId = reader.uint32();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.friendlyPath = reader.string();
          break;
        case 5:
          message.label = reader.string();
          break;
        case 6:
          message.sizeBytes = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.isFormattable = reader.bool();
          break;
        case 8:
          message.isReadOnly = reader.bool();
          break;
        case 9:
          message.isRootDevice = reader.bool();
          break;
        case 10:
          message.contentType = reader.int32() as any;
          break;
        case 11:
          message.filesystemType = reader.int32() as any;
          break;
        case 12:
          message.mountPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStorageDevicesData_BlockDevice {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      driveId: isSet(object.driveId) ? Number(object.driveId) : 0,
      path: isSet(object.path) ? String(object.path) : "",
      friendlyPath: isSet(object.friendlyPath) ? String(object.friendlyPath) : "",
      label: isSet(object.label) ? String(object.label) : "",
      sizeBytes: isSet(object.sizeBytes) ? String(object.sizeBytes) : "0",
      isFormattable: isSet(object.isFormattable) ? Boolean(object.isFormattable) : false,
      isReadOnly: isSet(object.isReadOnly) ? Boolean(object.isReadOnly) : false,
      isRootDevice: isSet(object.isRootDevice) ? Boolean(object.isRootDevice) : false,
      contentType: isSet(object.contentType) ? eStorageBlockContentTypeFromJSON(object.contentType) : 0,
      filesystemType: isSet(object.filesystemType) ? eStorageBlockFileSystemTypeFromJSON(object.filesystemType) : 0,
      mountPath: isSet(object.mountPath) ? String(object.mountPath) : "",
    };
  },

  toJSON(message: CMsgStorageDevicesData_BlockDevice): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.driveId !== undefined && (obj.driveId = Math.round(message.driveId));
    message.path !== undefined && (obj.path = message.path);
    message.friendlyPath !== undefined && (obj.friendlyPath = message.friendlyPath);
    message.label !== undefined && (obj.label = message.label);
    message.sizeBytes !== undefined && (obj.sizeBytes = message.sizeBytes);
    message.isFormattable !== undefined && (obj.isFormattable = message.isFormattable);
    message.isReadOnly !== undefined && (obj.isReadOnly = message.isReadOnly);
    message.isRootDevice !== undefined && (obj.isRootDevice = message.isRootDevice);
    message.contentType !== undefined && (obj.contentType = eStorageBlockContentTypeToJSON(message.contentType));
    message.filesystemType !== undefined &&
      (obj.filesystemType = eStorageBlockFileSystemTypeToJSON(message.filesystemType));
    message.mountPath !== undefined && (obj.mountPath = message.mountPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStorageDevicesData_BlockDevice>, I>>(
    base?: I,
  ): CMsgStorageDevicesData_BlockDevice {
    return CMsgStorageDevicesData_BlockDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStorageDevicesData_BlockDevice>, I>>(
    object: I,
  ): CMsgStorageDevicesData_BlockDevice {
    const message = createBaseCMsgStorageDevicesData_BlockDevice();
    message.id = object.id ?? 0;
    message.driveId = object.driveId ?? 0;
    message.path = object.path ?? "";
    message.friendlyPath = object.friendlyPath ?? "";
    message.label = object.label ?? "";
    message.sizeBytes = object.sizeBytes ?? "0";
    message.isFormattable = object.isFormattable ?? false;
    message.isReadOnly = object.isReadOnly ?? false;
    message.isRootDevice = object.isRootDevice ?? false;
    message.contentType = object.contentType ?? 0;
    message.filesystemType = object.filesystemType ?? 0;
    message.mountPath = object.mountPath ?? "";
    return message;
  },
};

function createBaseCCloudPendingRemoteOperation(): CCloudPendingRemoteOperation {
  return { operation: 0, machineName: "", clientId: "0", timeLastUpdated: 0 };
}

export const CCloudPendingRemoteOperation = {
  encode(message: CCloudPendingRemoteOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.machineName !== "") {
      writer.uint32(18).string(message.machineName);
    }
    if (message.clientId !== "0") {
      writer.uint32(24).uint64(message.clientId);
    }
    if (message.timeLastUpdated !== 0) {
      writer.uint32(32).uint32(message.timeLastUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCloudPendingRemoteOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCloudPendingRemoteOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32() as any;
          break;
        case 2:
          message.machineName = reader.string();
          break;
        case 3:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.timeLastUpdated = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCloudPendingRemoteOperation {
    return {
      operation: isSet(object.operation) ? eCloudPendingRemoteOperationFromJSON(object.operation) : 0,
      machineName: isSet(object.machineName) ? String(object.machineName) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      timeLastUpdated: isSet(object.timeLastUpdated) ? Number(object.timeLastUpdated) : 0,
    };
  },

  toJSON(message: CCloudPendingRemoteOperation): unknown {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = eCloudPendingRemoteOperationToJSON(message.operation));
    message.machineName !== undefined && (obj.machineName = message.machineName);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.timeLastUpdated !== undefined && (obj.timeLastUpdated = Math.round(message.timeLastUpdated));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCloudPendingRemoteOperation>, I>>(base?: I): CCloudPendingRemoteOperation {
    return CCloudPendingRemoteOperation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCloudPendingRemoteOperation>, I>>(object: I): CCloudPendingRemoteOperation {
    const message = createBaseCCloudPendingRemoteOperation();
    message.operation = object.operation ?? 0;
    message.machineName = object.machineName ?? "";
    message.clientId = object.clientId ?? "0";
    message.timeLastUpdated = object.timeLastUpdated ?? 0;
    return message;
  },
};

function createBaseCMsgCloudPendingRemoteOperations(): CMsgCloudPendingRemoteOperations {
  return { operations: [] };
}

export const CMsgCloudPendingRemoteOperations = {
  encode(message: CMsgCloudPendingRemoteOperations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      CCloudPendingRemoteOperation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCloudPendingRemoteOperations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCloudPendingRemoteOperations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(CCloudPendingRemoteOperation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCloudPendingRemoteOperations {
    return {
      operations: Array.isArray(object?.operations)
        ? object.operations.map((e: any) => CCloudPendingRemoteOperation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgCloudPendingRemoteOperations): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) => e ? CCloudPendingRemoteOperation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCloudPendingRemoteOperations>, I>>(
    base?: I,
  ): CMsgCloudPendingRemoteOperations {
    return CMsgCloudPendingRemoteOperations.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCloudPendingRemoteOperations>, I>>(
    object: I,
  ): CMsgCloudPendingRemoteOperations {
    const message = createBaseCMsgCloudPendingRemoteOperations();
    message.operations = object.operations?.map((e) => CCloudPendingRemoteOperation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgBluetoothDevicesData(): CMsgBluetoothDevicesData {
  return { adapters: [], devices: [], manager: undefined };
}

export const CMsgBluetoothDevicesData = {
  encode(message: CMsgBluetoothDevicesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.adapters) {
      CMsgBluetoothDevicesData_Adapter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.devices) {
      CMsgBluetoothDevicesData_Device.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.manager !== undefined) {
      CMsgBluetoothDevicesData_Manager.encode(message.manager, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBluetoothDevicesData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBluetoothDevicesData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.adapters.push(CMsgBluetoothDevicesData_Adapter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.devices.push(CMsgBluetoothDevicesData_Device.decode(reader, reader.uint32()));
          break;
        case 3:
          message.manager = CMsgBluetoothDevicesData_Manager.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBluetoothDevicesData {
    return {
      adapters: Array.isArray(object?.adapters)
        ? object.adapters.map((e: any) => CMsgBluetoothDevicesData_Adapter.fromJSON(e))
        : [],
      devices: Array.isArray(object?.devices)
        ? object.devices.map((e: any) => CMsgBluetoothDevicesData_Device.fromJSON(e))
        : [],
      manager: isSet(object.manager) ? CMsgBluetoothDevicesData_Manager.fromJSON(object.manager) : undefined,
    };
  },

  toJSON(message: CMsgBluetoothDevicesData): unknown {
    const obj: any = {};
    if (message.adapters) {
      obj.adapters = message.adapters.map((e) => e ? CMsgBluetoothDevicesData_Adapter.toJSON(e) : undefined);
    } else {
      obj.adapters = [];
    }
    if (message.devices) {
      obj.devices = message.devices.map((e) => e ? CMsgBluetoothDevicesData_Device.toJSON(e) : undefined);
    } else {
      obj.devices = [];
    }
    message.manager !== undefined &&
      (obj.manager = message.manager ? CMsgBluetoothDevicesData_Manager.toJSON(message.manager) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBluetoothDevicesData>, I>>(base?: I): CMsgBluetoothDevicesData {
    return CMsgBluetoothDevicesData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBluetoothDevicesData>, I>>(object: I): CMsgBluetoothDevicesData {
    const message = createBaseCMsgBluetoothDevicesData();
    message.adapters = object.adapters?.map((e) => CMsgBluetoothDevicesData_Adapter.fromPartial(e)) || [];
    message.devices = object.devices?.map((e) => CMsgBluetoothDevicesData_Device.fromPartial(e)) || [];
    message.manager = (object.manager !== undefined && object.manager !== null)
      ? CMsgBluetoothDevicesData_Manager.fromPartial(object.manager)
      : undefined;
    return message;
  },
};

function createBaseCMsgBluetoothDevicesData_Adapter(): CMsgBluetoothDevicesData_Adapter {
  return { id: 0, mac: "", name: "", isEnabled: false, isDiscovering: false };
}

export const CMsgBluetoothDevicesData_Adapter = {
  encode(message: CMsgBluetoothDevicesData_Adapter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.mac !== "") {
      writer.uint32(18).string(message.mac);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.isEnabled === true) {
      writer.uint32(32).bool(message.isEnabled);
    }
    if (message.isDiscovering === true) {
      writer.uint32(40).bool(message.isDiscovering);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBluetoothDevicesData_Adapter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBluetoothDevicesData_Adapter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.mac = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.isEnabled = reader.bool();
          break;
        case 5:
          message.isDiscovering = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBluetoothDevicesData_Adapter {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      mac: isSet(object.mac) ? String(object.mac) : "",
      name: isSet(object.name) ? String(object.name) : "",
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isDiscovering: isSet(object.isDiscovering) ? Boolean(object.isDiscovering) : false,
    };
  },

  toJSON(message: CMsgBluetoothDevicesData_Adapter): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.mac !== undefined && (obj.mac = message.mac);
    message.name !== undefined && (obj.name = message.name);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isDiscovering !== undefined && (obj.isDiscovering = message.isDiscovering);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Adapter>, I>>(
    base?: I,
  ): CMsgBluetoothDevicesData_Adapter {
    return CMsgBluetoothDevicesData_Adapter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Adapter>, I>>(
    object: I,
  ): CMsgBluetoothDevicesData_Adapter {
    const message = createBaseCMsgBluetoothDevicesData_Adapter();
    message.id = object.id ?? 0;
    message.mac = object.mac ?? "";
    message.name = object.name ?? "";
    message.isEnabled = object.isEnabled ?? false;
    message.isDiscovering = object.isDiscovering ?? false;
    return message;
  },
};

function createBaseCMsgBluetoothDevicesData_Device(): CMsgBluetoothDevicesData_Device {
  return { id: 0, adapterId: 0, etype: 0, mac: "", name: "", isConnected: false, isPaired: false, strengthRaw: 0 };
}

export const CMsgBluetoothDevicesData_Device = {
  encode(message: CMsgBluetoothDevicesData_Device, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.adapterId !== 0) {
      writer.uint32(16).uint32(message.adapterId);
    }
    if (message.etype !== 0) {
      writer.uint32(24).int32(message.etype);
    }
    if (message.mac !== "") {
      writer.uint32(34).string(message.mac);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.isConnected === true) {
      writer.uint32(48).bool(message.isConnected);
    }
    if (message.isPaired === true) {
      writer.uint32(56).bool(message.isPaired);
    }
    if (message.strengthRaw !== 0) {
      writer.uint32(64).int32(message.strengthRaw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBluetoothDevicesData_Device {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBluetoothDevicesData_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.adapterId = reader.uint32();
          break;
        case 3:
          message.etype = reader.int32() as any;
          break;
        case 4:
          message.mac = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.isConnected = reader.bool();
          break;
        case 7:
          message.isPaired = reader.bool();
          break;
        case 8:
          message.strengthRaw = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBluetoothDevicesData_Device {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      adapterId: isSet(object.adapterId) ? Number(object.adapterId) : 0,
      etype: isSet(object.etype) ? eBluetoothDeviceTypeFromJSON(object.etype) : 0,
      mac: isSet(object.mac) ? String(object.mac) : "",
      name: isSet(object.name) ? String(object.name) : "",
      isConnected: isSet(object.isConnected) ? Boolean(object.isConnected) : false,
      isPaired: isSet(object.isPaired) ? Boolean(object.isPaired) : false,
      strengthRaw: isSet(object.strengthRaw) ? Number(object.strengthRaw) : 0,
    };
  },

  toJSON(message: CMsgBluetoothDevicesData_Device): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.adapterId !== undefined && (obj.adapterId = Math.round(message.adapterId));
    message.etype !== undefined && (obj.etype = eBluetoothDeviceTypeToJSON(message.etype));
    message.mac !== undefined && (obj.mac = message.mac);
    message.name !== undefined && (obj.name = message.name);
    message.isConnected !== undefined && (obj.isConnected = message.isConnected);
    message.isPaired !== undefined && (obj.isPaired = message.isPaired);
    message.strengthRaw !== undefined && (obj.strengthRaw = Math.round(message.strengthRaw));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Device>, I>>(base?: I): CMsgBluetoothDevicesData_Device {
    return CMsgBluetoothDevicesData_Device.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Device>, I>>(
    object: I,
  ): CMsgBluetoothDevicesData_Device {
    const message = createBaseCMsgBluetoothDevicesData_Device();
    message.id = object.id ?? 0;
    message.adapterId = object.adapterId ?? 0;
    message.etype = object.etype ?? 0;
    message.mac = object.mac ?? "";
    message.name = object.name ?? "";
    message.isConnected = object.isConnected ?? false;
    message.isPaired = object.isPaired ?? false;
    message.strengthRaw = object.strengthRaw ?? 0;
    return message;
  },
};

function createBaseCMsgBluetoothDevicesData_Manager(): CMsgBluetoothDevicesData_Manager {
  return { isBluetoothEnabled: false };
}

export const CMsgBluetoothDevicesData_Manager = {
  encode(message: CMsgBluetoothDevicesData_Manager, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isBluetoothEnabled === true) {
      writer.uint32(8).bool(message.isBluetoothEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBluetoothDevicesData_Manager {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBluetoothDevicesData_Manager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isBluetoothEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBluetoothDevicesData_Manager {
    return { isBluetoothEnabled: isSet(object.isBluetoothEnabled) ? Boolean(object.isBluetoothEnabled) : false };
  },

  toJSON(message: CMsgBluetoothDevicesData_Manager): unknown {
    const obj: any = {};
    message.isBluetoothEnabled !== undefined && (obj.isBluetoothEnabled = message.isBluetoothEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Manager>, I>>(
    base?: I,
  ): CMsgBluetoothDevicesData_Manager {
    return CMsgBluetoothDevicesData_Manager.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBluetoothDevicesData_Manager>, I>>(
    object: I,
  ): CMsgBluetoothDevicesData_Manager {
    const message = createBaseCMsgBluetoothDevicesData_Manager();
    message.isBluetoothEnabled = object.isBluetoothEnabled ?? false;
    return message;
  },
};

function createBaseCMsgSystemPerfDiagnosticEntry(): CMsgSystemPerfDiagnosticEntry {
  return { name: "", value: "" };
}

export const CMsgSystemPerfDiagnosticEntry = {
  encode(message: CMsgSystemPerfDiagnosticEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfDiagnosticEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfDiagnosticEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfDiagnosticEntry {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgSystemPerfDiagnosticEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfDiagnosticEntry>, I>>(base?: I): CMsgSystemPerfDiagnosticEntry {
    return CMsgSystemPerfDiagnosticEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfDiagnosticEntry>, I>>(
    object: I,
  ): CMsgSystemPerfDiagnosticEntry {
    const message = createBaseCMsgSystemPerfDiagnosticEntry();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCMsgSystemPerfNetworkInterface(): CMsgSystemPerfNetworkInterface {
  return { name: "", timestamp: 0, txBytesTotal: "0", rxBytesTotal: "0", txBytesPerSec: 0, rxBytesPerSec: 0 };
}

export const CMsgSystemPerfNetworkInterface = {
  encode(message: CMsgSystemPerfNetworkInterface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timestamp !== 0) {
      writer.uint32(17).double(message.timestamp);
    }
    if (message.txBytesTotal !== "0") {
      writer.uint32(24).int64(message.txBytesTotal);
    }
    if (message.rxBytesTotal !== "0") {
      writer.uint32(32).int64(message.rxBytesTotal);
    }
    if (message.txBytesPerSec !== 0) {
      writer.uint32(40).int32(message.txBytesPerSec);
    }
    if (message.rxBytesPerSec !== 0) {
      writer.uint32(48).int32(message.rxBytesPerSec);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfNetworkInterface {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfNetworkInterface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.timestamp = reader.double();
          break;
        case 3:
          message.txBytesTotal = longToString(reader.int64() as Long);
          break;
        case 4:
          message.rxBytesTotal = longToString(reader.int64() as Long);
          break;
        case 5:
          message.txBytesPerSec = reader.int32();
          break;
        case 6:
          message.rxBytesPerSec = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfNetworkInterface {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      txBytesTotal: isSet(object.txBytesTotal) ? String(object.txBytesTotal) : "0",
      rxBytesTotal: isSet(object.rxBytesTotal) ? String(object.rxBytesTotal) : "0",
      txBytesPerSec: isSet(object.txBytesPerSec) ? Number(object.txBytesPerSec) : 0,
      rxBytesPerSec: isSet(object.rxBytesPerSec) ? Number(object.rxBytesPerSec) : 0,
    };
  },

  toJSON(message: CMsgSystemPerfNetworkInterface): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.txBytesTotal !== undefined && (obj.txBytesTotal = message.txBytesTotal);
    message.rxBytesTotal !== undefined && (obj.rxBytesTotal = message.rxBytesTotal);
    message.txBytesPerSec !== undefined && (obj.txBytesPerSec = Math.round(message.txBytesPerSec));
    message.rxBytesPerSec !== undefined && (obj.rxBytesPerSec = Math.round(message.rxBytesPerSec));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfNetworkInterface>, I>>(base?: I): CMsgSystemPerfNetworkInterface {
    return CMsgSystemPerfNetworkInterface.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfNetworkInterface>, I>>(
    object: I,
  ): CMsgSystemPerfNetworkInterface {
    const message = createBaseCMsgSystemPerfNetworkInterface();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.txBytesTotal = object.txBytesTotal ?? "0";
    message.rxBytesTotal = object.rxBytesTotal ?? "0";
    message.txBytesPerSec = object.txBytesPerSec ?? 0;
    message.rxBytesPerSec = object.rxBytesPerSec ?? 0;
    return message;
  },
};

function createBaseCMsgSystemPerfDiagnosticInfo(): CMsgSystemPerfDiagnosticInfo {
  return { entries: [], interfaces: [], batteryTempC: 0 };
}

export const CMsgSystemPerfDiagnosticInfo = {
  encode(message: CMsgSystemPerfDiagnosticInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CMsgSystemPerfDiagnosticEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interfaces) {
      CMsgSystemPerfNetworkInterface.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.batteryTempC !== 0) {
      writer.uint32(29).float(message.batteryTempC);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfDiagnosticInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfDiagnosticInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CMsgSystemPerfDiagnosticEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interfaces.push(CMsgSystemPerfNetworkInterface.decode(reader, reader.uint32()));
          break;
        case 3:
          message.batteryTempC = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfDiagnosticInfo {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CMsgSystemPerfDiagnosticEntry.fromJSON(e))
        : [],
      interfaces: Array.isArray(object?.interfaces)
        ? object.interfaces.map((e: any) => CMsgSystemPerfNetworkInterface.fromJSON(e))
        : [],
      batteryTempC: isSet(object.batteryTempC) ? Number(object.batteryTempC) : 0,
    };
  },

  toJSON(message: CMsgSystemPerfDiagnosticInfo): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgSystemPerfDiagnosticEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map((e) => e ? CMsgSystemPerfNetworkInterface.toJSON(e) : undefined);
    } else {
      obj.interfaces = [];
    }
    message.batteryTempC !== undefined && (obj.batteryTempC = message.batteryTempC);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfDiagnosticInfo>, I>>(base?: I): CMsgSystemPerfDiagnosticInfo {
    return CMsgSystemPerfDiagnosticInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfDiagnosticInfo>, I>>(object: I): CMsgSystemPerfDiagnosticInfo {
    const message = createBaseCMsgSystemPerfDiagnosticInfo();
    message.entries = object.entries?.map((e) => CMsgSystemPerfDiagnosticEntry.fromPartial(e)) || [];
    message.interfaces = object.interfaces?.map((e) => CMsgSystemPerfNetworkInterface.fromPartial(e)) || [];
    message.batteryTempC = object.batteryTempC ?? 0;
    return message;
  },
};

function createBaseCMsgSystemPerfLimits(): CMsgSystemPerfLimits {
  return {
    cpuGovernorManualMinMhz: 0,
    cpuGovernorManualMaxMhz: 0,
    fsrSharpnessMin: 0,
    fsrSharpnessMax: 0,
    gpuPerformanceManualMinMhz: 0,
    gpuPerformanceManualMaxMhz: 0,
    perfOverlayIsStandalone: false,
    isDynamicVrsAvailable: false,
    isManualDisplayRefreshRateAvailable: false,
    gpuPerformanceLevelsAvailable: [],
    displayRefreshManualHzMin: 0,
    displayRefreshManualHzMax: 0,
    fpsLimitOptions: [],
    tdpLimitMin: 0,
    tdpLimitMax: 0,
    isNisSupported: false,
    nisSharpnessMin: 0,
    nisSharpnessMax: 0,
    displayExternalRefreshManualHzMin: 0,
    displayExternalRefreshManualHzMax: 0,
    fpsLimitOptionsExternal: [],
    isTearingSupported: false,
    isVrrSupported: false,
    isDynamicRefreshRateInSteamSupported: false,
    isSplitScalingAndFilteringSupported: false,
    splitScalingFiltersAvailable: [],
    splitScalingScalersAvailable: [],
    isHdrSupported: false,
  };
}

export const CMsgSystemPerfLimits = {
  encode(message: CMsgSystemPerfLimits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpuGovernorManualMinMhz !== 0) {
      writer.uint32(8).int32(message.cpuGovernorManualMinMhz);
    }
    if (message.cpuGovernorManualMaxMhz !== 0) {
      writer.uint32(16).int32(message.cpuGovernorManualMaxMhz);
    }
    if (message.fsrSharpnessMin !== 0) {
      writer.uint32(24).int32(message.fsrSharpnessMin);
    }
    if (message.fsrSharpnessMax !== 0) {
      writer.uint32(32).int32(message.fsrSharpnessMax);
    }
    if (message.gpuPerformanceManualMinMhz !== 0) {
      writer.uint32(40).int32(message.gpuPerformanceManualMinMhz);
    }
    if (message.gpuPerformanceManualMaxMhz !== 0) {
      writer.uint32(48).int32(message.gpuPerformanceManualMaxMhz);
    }
    if (message.perfOverlayIsStandalone === true) {
      writer.uint32(56).bool(message.perfOverlayIsStandalone);
    }
    if (message.isDynamicVrsAvailable === true) {
      writer.uint32(64).bool(message.isDynamicVrsAvailable);
    }
    if (message.isManualDisplayRefreshRateAvailable === true) {
      writer.uint32(72).bool(message.isManualDisplayRefreshRateAvailable);
    }
    writer.uint32(82).fork();
    for (const v of message.gpuPerformanceLevelsAvailable) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.displayRefreshManualHzMin !== 0) {
      writer.uint32(88).int32(message.displayRefreshManualHzMin);
    }
    if (message.displayRefreshManualHzMax !== 0) {
      writer.uint32(96).int32(message.displayRefreshManualHzMax);
    }
    writer.uint32(106).fork();
    for (const v of message.fpsLimitOptions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.tdpLimitMin !== 0) {
      writer.uint32(112).int32(message.tdpLimitMin);
    }
    if (message.tdpLimitMax !== 0) {
      writer.uint32(120).int32(message.tdpLimitMax);
    }
    if (message.isNisSupported === true) {
      writer.uint32(128).bool(message.isNisSupported);
    }
    if (message.nisSharpnessMin !== 0) {
      writer.uint32(136).int32(message.nisSharpnessMin);
    }
    if (message.nisSharpnessMax !== 0) {
      writer.uint32(144).int32(message.nisSharpnessMax);
    }
    if (message.displayExternalRefreshManualHzMin !== 0) {
      writer.uint32(152).int32(message.displayExternalRefreshManualHzMin);
    }
    if (message.displayExternalRefreshManualHzMax !== 0) {
      writer.uint32(160).int32(message.displayExternalRefreshManualHzMax);
    }
    writer.uint32(170).fork();
    for (const v of message.fpsLimitOptionsExternal) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isTearingSupported === true) {
      writer.uint32(176).bool(message.isTearingSupported);
    }
    if (message.isVrrSupported === true) {
      writer.uint32(184).bool(message.isVrrSupported);
    }
    if (message.isDynamicRefreshRateInSteamSupported === true) {
      writer.uint32(192).bool(message.isDynamicRefreshRateInSteamSupported);
    }
    if (message.isSplitScalingAndFilteringSupported === true) {
      writer.uint32(200).bool(message.isSplitScalingAndFilteringSupported);
    }
    writer.uint32(210).fork();
    for (const v of message.splitScalingFiltersAvailable) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(218).fork();
    for (const v of message.splitScalingScalersAvailable) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isHdrSupported === true) {
      writer.uint32(224).bool(message.isHdrSupported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfLimits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpuGovernorManualMinMhz = reader.int32();
          break;
        case 2:
          message.cpuGovernorManualMaxMhz = reader.int32();
          break;
        case 3:
          message.fsrSharpnessMin = reader.int32();
          break;
        case 4:
          message.fsrSharpnessMax = reader.int32();
          break;
        case 5:
          message.gpuPerformanceManualMinMhz = reader.int32();
          break;
        case 6:
          message.gpuPerformanceManualMaxMhz = reader.int32();
          break;
        case 7:
          message.perfOverlayIsStandalone = reader.bool();
          break;
        case 8:
          message.isDynamicVrsAvailable = reader.bool();
          break;
        case 9:
          message.isManualDisplayRefreshRateAvailable = reader.bool();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gpuPerformanceLevelsAvailable.push(reader.int32() as any);
            }
          } else {
            message.gpuPerformanceLevelsAvailable.push(reader.int32() as any);
          }
          break;
        case 11:
          message.displayRefreshManualHzMin = reader.int32();
          break;
        case 12:
          message.displayRefreshManualHzMax = reader.int32();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fpsLimitOptions.push(reader.int32());
            }
          } else {
            message.fpsLimitOptions.push(reader.int32());
          }
          break;
        case 14:
          message.tdpLimitMin = reader.int32();
          break;
        case 15:
          message.tdpLimitMax = reader.int32();
          break;
        case 16:
          message.isNisSupported = reader.bool();
          break;
        case 17:
          message.nisSharpnessMin = reader.int32();
          break;
        case 18:
          message.nisSharpnessMax = reader.int32();
          break;
        case 19:
          message.displayExternalRefreshManualHzMin = reader.int32();
          break;
        case 20:
          message.displayExternalRefreshManualHzMax = reader.int32();
          break;
        case 21:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.fpsLimitOptionsExternal.push(reader.int32());
            }
          } else {
            message.fpsLimitOptionsExternal.push(reader.int32());
          }
          break;
        case 22:
          message.isTearingSupported = reader.bool();
          break;
        case 23:
          message.isVrrSupported = reader.bool();
          break;
        case 24:
          message.isDynamicRefreshRateInSteamSupported = reader.bool();
          break;
        case 25:
          message.isSplitScalingAndFilteringSupported = reader.bool();
          break;
        case 26:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.splitScalingFiltersAvailable.push(reader.int32() as any);
            }
          } else {
            message.splitScalingFiltersAvailable.push(reader.int32() as any);
          }
          break;
        case 27:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.splitScalingScalersAvailable.push(reader.int32() as any);
            }
          } else {
            message.splitScalingScalersAvailable.push(reader.int32() as any);
          }
          break;
        case 28:
          message.isHdrSupported = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfLimits {
    return {
      cpuGovernorManualMinMhz: isSet(object.cpuGovernorManualMinMhz) ? Number(object.cpuGovernorManualMinMhz) : 0,
      cpuGovernorManualMaxMhz: isSet(object.cpuGovernorManualMaxMhz) ? Number(object.cpuGovernorManualMaxMhz) : 0,
      fsrSharpnessMin: isSet(object.fsrSharpnessMin) ? Number(object.fsrSharpnessMin) : 0,
      fsrSharpnessMax: isSet(object.fsrSharpnessMax) ? Number(object.fsrSharpnessMax) : 0,
      gpuPerformanceManualMinMhz: isSet(object.gpuPerformanceManualMinMhz)
        ? Number(object.gpuPerformanceManualMinMhz)
        : 0,
      gpuPerformanceManualMaxMhz: isSet(object.gpuPerformanceManualMaxMhz)
        ? Number(object.gpuPerformanceManualMaxMhz)
        : 0,
      perfOverlayIsStandalone: isSet(object.perfOverlayIsStandalone) ? Boolean(object.perfOverlayIsStandalone) : false,
      isDynamicVrsAvailable: isSet(object.isDynamicVrsAvailable) ? Boolean(object.isDynamicVrsAvailable) : false,
      isManualDisplayRefreshRateAvailable: isSet(object.isManualDisplayRefreshRateAvailable)
        ? Boolean(object.isManualDisplayRefreshRateAvailable)
        : false,
      gpuPerformanceLevelsAvailable: Array.isArray(object?.gpuPerformanceLevelsAvailable)
        ? object.gpuPerformanceLevelsAvailable.map((e: any) => eGPUPerformanceLevelFromJSON(e))
        : [],
      displayRefreshManualHzMin: isSet(object.displayRefreshManualHzMin) ? Number(object.displayRefreshManualHzMin) : 0,
      displayRefreshManualHzMax: isSet(object.displayRefreshManualHzMax) ? Number(object.displayRefreshManualHzMax) : 0,
      fpsLimitOptions: Array.isArray(object?.fpsLimitOptions) ? object.fpsLimitOptions.map((e: any) => Number(e)) : [],
      tdpLimitMin: isSet(object.tdpLimitMin) ? Number(object.tdpLimitMin) : 0,
      tdpLimitMax: isSet(object.tdpLimitMax) ? Number(object.tdpLimitMax) : 0,
      isNisSupported: isSet(object.isNisSupported) ? Boolean(object.isNisSupported) : false,
      nisSharpnessMin: isSet(object.nisSharpnessMin) ? Number(object.nisSharpnessMin) : 0,
      nisSharpnessMax: isSet(object.nisSharpnessMax) ? Number(object.nisSharpnessMax) : 0,
      displayExternalRefreshManualHzMin: isSet(object.displayExternalRefreshManualHzMin)
        ? Number(object.displayExternalRefreshManualHzMin)
        : 0,
      displayExternalRefreshManualHzMax: isSet(object.displayExternalRefreshManualHzMax)
        ? Number(object.displayExternalRefreshManualHzMax)
        : 0,
      fpsLimitOptionsExternal: Array.isArray(object?.fpsLimitOptionsExternal)
        ? object.fpsLimitOptionsExternal.map((e: any) => Number(e))
        : [],
      isTearingSupported: isSet(object.isTearingSupported) ? Boolean(object.isTearingSupported) : false,
      isVrrSupported: isSet(object.isVrrSupported) ? Boolean(object.isVrrSupported) : false,
      isDynamicRefreshRateInSteamSupported: isSet(object.isDynamicRefreshRateInSteamSupported)
        ? Boolean(object.isDynamicRefreshRateInSteamSupported)
        : false,
      isSplitScalingAndFilteringSupported: isSet(object.isSplitScalingAndFilteringSupported)
        ? Boolean(object.isSplitScalingAndFilteringSupported)
        : false,
      splitScalingFiltersAvailable: Array.isArray(object?.splitScalingFiltersAvailable)
        ? object.splitScalingFiltersAvailable.map((e: any) => eSplitScalingFilterFromJSON(e))
        : [],
      splitScalingScalersAvailable: Array.isArray(object?.splitScalingScalersAvailable)
        ? object.splitScalingScalersAvailable.map((e: any) => eSplitScalingScalerFromJSON(e))
        : [],
      isHdrSupported: isSet(object.isHdrSupported) ? Boolean(object.isHdrSupported) : false,
    };
  },

  toJSON(message: CMsgSystemPerfLimits): unknown {
    const obj: any = {};
    message.cpuGovernorManualMinMhz !== undefined &&
      (obj.cpuGovernorManualMinMhz = Math.round(message.cpuGovernorManualMinMhz));
    message.cpuGovernorManualMaxMhz !== undefined &&
      (obj.cpuGovernorManualMaxMhz = Math.round(message.cpuGovernorManualMaxMhz));
    message.fsrSharpnessMin !== undefined && (obj.fsrSharpnessMin = Math.round(message.fsrSharpnessMin));
    message.fsrSharpnessMax !== undefined && (obj.fsrSharpnessMax = Math.round(message.fsrSharpnessMax));
    message.gpuPerformanceManualMinMhz !== undefined &&
      (obj.gpuPerformanceManualMinMhz = Math.round(message.gpuPerformanceManualMinMhz));
    message.gpuPerformanceManualMaxMhz !== undefined &&
      (obj.gpuPerformanceManualMaxMhz = Math.round(message.gpuPerformanceManualMaxMhz));
    message.perfOverlayIsStandalone !== undefined && (obj.perfOverlayIsStandalone = message.perfOverlayIsStandalone);
    message.isDynamicVrsAvailable !== undefined && (obj.isDynamicVrsAvailable = message.isDynamicVrsAvailable);
    message.isManualDisplayRefreshRateAvailable !== undefined &&
      (obj.isManualDisplayRefreshRateAvailable = message.isManualDisplayRefreshRateAvailable);
    if (message.gpuPerformanceLevelsAvailable) {
      obj.gpuPerformanceLevelsAvailable = message.gpuPerformanceLevelsAvailable.map((e) =>
        eGPUPerformanceLevelToJSON(e)
      );
    } else {
      obj.gpuPerformanceLevelsAvailable = [];
    }
    message.displayRefreshManualHzMin !== undefined &&
      (obj.displayRefreshManualHzMin = Math.round(message.displayRefreshManualHzMin));
    message.displayRefreshManualHzMax !== undefined &&
      (obj.displayRefreshManualHzMax = Math.round(message.displayRefreshManualHzMax));
    if (message.fpsLimitOptions) {
      obj.fpsLimitOptions = message.fpsLimitOptions.map((e) => Math.round(e));
    } else {
      obj.fpsLimitOptions = [];
    }
    message.tdpLimitMin !== undefined && (obj.tdpLimitMin = Math.round(message.tdpLimitMin));
    message.tdpLimitMax !== undefined && (obj.tdpLimitMax = Math.round(message.tdpLimitMax));
    message.isNisSupported !== undefined && (obj.isNisSupported = message.isNisSupported);
    message.nisSharpnessMin !== undefined && (obj.nisSharpnessMin = Math.round(message.nisSharpnessMin));
    message.nisSharpnessMax !== undefined && (obj.nisSharpnessMax = Math.round(message.nisSharpnessMax));
    message.displayExternalRefreshManualHzMin !== undefined &&
      (obj.displayExternalRefreshManualHzMin = Math.round(message.displayExternalRefreshManualHzMin));
    message.displayExternalRefreshManualHzMax !== undefined &&
      (obj.displayExternalRefreshManualHzMax = Math.round(message.displayExternalRefreshManualHzMax));
    if (message.fpsLimitOptionsExternal) {
      obj.fpsLimitOptionsExternal = message.fpsLimitOptionsExternal.map((e) => Math.round(e));
    } else {
      obj.fpsLimitOptionsExternal = [];
    }
    message.isTearingSupported !== undefined && (obj.isTearingSupported = message.isTearingSupported);
    message.isVrrSupported !== undefined && (obj.isVrrSupported = message.isVrrSupported);
    message.isDynamicRefreshRateInSteamSupported !== undefined &&
      (obj.isDynamicRefreshRateInSteamSupported = message.isDynamicRefreshRateInSteamSupported);
    message.isSplitScalingAndFilteringSupported !== undefined &&
      (obj.isSplitScalingAndFilteringSupported = message.isSplitScalingAndFilteringSupported);
    if (message.splitScalingFiltersAvailable) {
      obj.splitScalingFiltersAvailable = message.splitScalingFiltersAvailable.map((e) => eSplitScalingFilterToJSON(e));
    } else {
      obj.splitScalingFiltersAvailable = [];
    }
    if (message.splitScalingScalersAvailable) {
      obj.splitScalingScalersAvailable = message.splitScalingScalersAvailable.map((e) => eSplitScalingScalerToJSON(e));
    } else {
      obj.splitScalingScalersAvailable = [];
    }
    message.isHdrSupported !== undefined && (obj.isHdrSupported = message.isHdrSupported);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfLimits>, I>>(base?: I): CMsgSystemPerfLimits {
    return CMsgSystemPerfLimits.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfLimits>, I>>(object: I): CMsgSystemPerfLimits {
    const message = createBaseCMsgSystemPerfLimits();
    message.cpuGovernorManualMinMhz = object.cpuGovernorManualMinMhz ?? 0;
    message.cpuGovernorManualMaxMhz = object.cpuGovernorManualMaxMhz ?? 0;
    message.fsrSharpnessMin = object.fsrSharpnessMin ?? 0;
    message.fsrSharpnessMax = object.fsrSharpnessMax ?? 0;
    message.gpuPerformanceManualMinMhz = object.gpuPerformanceManualMinMhz ?? 0;
    message.gpuPerformanceManualMaxMhz = object.gpuPerformanceManualMaxMhz ?? 0;
    message.perfOverlayIsStandalone = object.perfOverlayIsStandalone ?? false;
    message.isDynamicVrsAvailable = object.isDynamicVrsAvailable ?? false;
    message.isManualDisplayRefreshRateAvailable = object.isManualDisplayRefreshRateAvailable ?? false;
    message.gpuPerformanceLevelsAvailable = object.gpuPerformanceLevelsAvailable?.map((e) => e) || [];
    message.displayRefreshManualHzMin = object.displayRefreshManualHzMin ?? 0;
    message.displayRefreshManualHzMax = object.displayRefreshManualHzMax ?? 0;
    message.fpsLimitOptions = object.fpsLimitOptions?.map((e) => e) || [];
    message.tdpLimitMin = object.tdpLimitMin ?? 0;
    message.tdpLimitMax = object.tdpLimitMax ?? 0;
    message.isNisSupported = object.isNisSupported ?? false;
    message.nisSharpnessMin = object.nisSharpnessMin ?? 0;
    message.nisSharpnessMax = object.nisSharpnessMax ?? 0;
    message.displayExternalRefreshManualHzMin = object.displayExternalRefreshManualHzMin ?? 0;
    message.displayExternalRefreshManualHzMax = object.displayExternalRefreshManualHzMax ?? 0;
    message.fpsLimitOptionsExternal = object.fpsLimitOptionsExternal?.map((e) => e) || [];
    message.isTearingSupported = object.isTearingSupported ?? false;
    message.isVrrSupported = object.isVrrSupported ?? false;
    message.isDynamicRefreshRateInSteamSupported = object.isDynamicRefreshRateInSteamSupported ?? false;
    message.isSplitScalingAndFilteringSupported = object.isSplitScalingAndFilteringSupported ?? false;
    message.splitScalingFiltersAvailable = object.splitScalingFiltersAvailable?.map((e) => e) || [];
    message.splitScalingScalersAvailable = object.splitScalingScalersAvailable?.map((e) => e) || [];
    message.isHdrSupported = object.isHdrSupported ?? false;
    return message;
  },
};

function createBaseCMsgSystemPerfSettingsGlobal(): CMsgSystemPerfSettingsGlobal {
  return {
    diagnosticUpdateRate: 0,
    systemTraceServiceState: 0,
    graphicsProfilingServiceState: 0,
    perfOverlayServiceState: 0,
    perfOverlayLevel: 0,
    isShowPerfOverlayOverSteamEnabled: false,
    isAdvancedSettingsEnabled: false,
    allowExternalDisplayRefreshControl: false,
    isHdrEnabled: false,
    forceHdrWideGammutForSdr: false,
    forceHdr10pqOutputDebug: false,
    hdrOnSdrTonemapOperator: 0,
    isHdrDebugHeatmapEnabled: false,
    debugForceHdrSupport: false,
  };
}

export const CMsgSystemPerfSettingsGlobal = {
  encode(message: CMsgSystemPerfSettingsGlobal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diagnosticUpdateRate !== 0) {
      writer.uint32(13).float(message.diagnosticUpdateRate);
    }
    if (message.systemTraceServiceState !== 0) {
      writer.uint32(16).int32(message.systemTraceServiceState);
    }
    if (message.graphicsProfilingServiceState !== 0) {
      writer.uint32(24).int32(message.graphicsProfilingServiceState);
    }
    if (message.perfOverlayServiceState !== 0) {
      writer.uint32(32).int32(message.perfOverlayServiceState);
    }
    if (message.perfOverlayLevel !== 0) {
      writer.uint32(40).int32(message.perfOverlayLevel);
    }
    if (message.isShowPerfOverlayOverSteamEnabled === true) {
      writer.uint32(48).bool(message.isShowPerfOverlayOverSteamEnabled);
    }
    if (message.isAdvancedSettingsEnabled === true) {
      writer.uint32(56).bool(message.isAdvancedSettingsEnabled);
    }
    if (message.allowExternalDisplayRefreshControl === true) {
      writer.uint32(64).bool(message.allowExternalDisplayRefreshControl);
    }
    if (message.isHdrEnabled === true) {
      writer.uint32(72).bool(message.isHdrEnabled);
    }
    if (message.forceHdrWideGammutForSdr === true) {
      writer.uint32(80).bool(message.forceHdrWideGammutForSdr);
    }
    if (message.forceHdr10pqOutputDebug === true) {
      writer.uint32(88).bool(message.forceHdr10pqOutputDebug);
    }
    if (message.hdrOnSdrTonemapOperator !== 0) {
      writer.uint32(96).int32(message.hdrOnSdrTonemapOperator);
    }
    if (message.isHdrDebugHeatmapEnabled === true) {
      writer.uint32(104).bool(message.isHdrDebugHeatmapEnabled);
    }
    if (message.debugForceHdrSupport === true) {
      writer.uint32(112).bool(message.debugForceHdrSupport);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfSettingsGlobal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfSettingsGlobal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diagnosticUpdateRate = reader.float();
          break;
        case 2:
          message.systemTraceServiceState = reader.int32() as any;
          break;
        case 3:
          message.graphicsProfilingServiceState = reader.int32() as any;
          break;
        case 4:
          message.perfOverlayServiceState = reader.int32() as any;
          break;
        case 5:
          message.perfOverlayLevel = reader.int32() as any;
          break;
        case 6:
          message.isShowPerfOverlayOverSteamEnabled = reader.bool();
          break;
        case 7:
          message.isAdvancedSettingsEnabled = reader.bool();
          break;
        case 8:
          message.allowExternalDisplayRefreshControl = reader.bool();
          break;
        case 9:
          message.isHdrEnabled = reader.bool();
          break;
        case 10:
          message.forceHdrWideGammutForSdr = reader.bool();
          break;
        case 11:
          message.forceHdr10pqOutputDebug = reader.bool();
          break;
        case 12:
          message.hdrOnSdrTonemapOperator = reader.int32() as any;
          break;
        case 13:
          message.isHdrDebugHeatmapEnabled = reader.bool();
          break;
        case 14:
          message.debugForceHdrSupport = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfSettingsGlobal {
    return {
      diagnosticUpdateRate: isSet(object.diagnosticUpdateRate) ? Number(object.diagnosticUpdateRate) : 0,
      systemTraceServiceState: isSet(object.systemTraceServiceState)
        ? eSystemServiceStateFromJSON(object.systemTraceServiceState)
        : 0,
      graphicsProfilingServiceState: isSet(object.graphicsProfilingServiceState)
        ? eSystemServiceStateFromJSON(object.graphicsProfilingServiceState)
        : 0,
      perfOverlayServiceState: isSet(object.perfOverlayServiceState)
        ? eSystemServiceStateFromJSON(object.perfOverlayServiceState)
        : 0,
      perfOverlayLevel: isSet(object.perfOverlayLevel) ? eGraphicsPerfOverlayLevelFromJSON(object.perfOverlayLevel) : 0,
      isShowPerfOverlayOverSteamEnabled: isSet(object.isShowPerfOverlayOverSteamEnabled)
        ? Boolean(object.isShowPerfOverlayOverSteamEnabled)
        : false,
      isAdvancedSettingsEnabled: isSet(object.isAdvancedSettingsEnabled)
        ? Boolean(object.isAdvancedSettingsEnabled)
        : false,
      allowExternalDisplayRefreshControl: isSet(object.allowExternalDisplayRefreshControl)
        ? Boolean(object.allowExternalDisplayRefreshControl)
        : false,
      isHdrEnabled: isSet(object.isHdrEnabled) ? Boolean(object.isHdrEnabled) : false,
      forceHdrWideGammutForSdr: isSet(object.forceHdrWideGammutForSdr)
        ? Boolean(object.forceHdrWideGammutForSdr)
        : false,
      forceHdr10pqOutputDebug: isSet(object.forceHdr10pqOutputDebug) ? Boolean(object.forceHdr10pqOutputDebug) : false,
      hdrOnSdrTonemapOperator: isSet(object.hdrOnSdrTonemapOperator)
        ? eHDRToneMapOperatorFromJSON(object.hdrOnSdrTonemapOperator)
        : 0,
      isHdrDebugHeatmapEnabled: isSet(object.isHdrDebugHeatmapEnabled)
        ? Boolean(object.isHdrDebugHeatmapEnabled)
        : false,
      debugForceHdrSupport: isSet(object.debugForceHdrSupport) ? Boolean(object.debugForceHdrSupport) : false,
    };
  },

  toJSON(message: CMsgSystemPerfSettingsGlobal): unknown {
    const obj: any = {};
    message.diagnosticUpdateRate !== undefined && (obj.diagnosticUpdateRate = message.diagnosticUpdateRate);
    message.systemTraceServiceState !== undefined &&
      (obj.systemTraceServiceState = eSystemServiceStateToJSON(message.systemTraceServiceState));
    message.graphicsProfilingServiceState !== undefined &&
      (obj.graphicsProfilingServiceState = eSystemServiceStateToJSON(message.graphicsProfilingServiceState));
    message.perfOverlayServiceState !== undefined &&
      (obj.perfOverlayServiceState = eSystemServiceStateToJSON(message.perfOverlayServiceState));
    message.perfOverlayLevel !== undefined &&
      (obj.perfOverlayLevel = eGraphicsPerfOverlayLevelToJSON(message.perfOverlayLevel));
    message.isShowPerfOverlayOverSteamEnabled !== undefined &&
      (obj.isShowPerfOverlayOverSteamEnabled = message.isShowPerfOverlayOverSteamEnabled);
    message.isAdvancedSettingsEnabled !== undefined &&
      (obj.isAdvancedSettingsEnabled = message.isAdvancedSettingsEnabled);
    message.allowExternalDisplayRefreshControl !== undefined &&
      (obj.allowExternalDisplayRefreshControl = message.allowExternalDisplayRefreshControl);
    message.isHdrEnabled !== undefined && (obj.isHdrEnabled = message.isHdrEnabled);
    message.forceHdrWideGammutForSdr !== undefined && (obj.forceHdrWideGammutForSdr = message.forceHdrWideGammutForSdr);
    message.forceHdr10pqOutputDebug !== undefined && (obj.forceHdr10pqOutputDebug = message.forceHdr10pqOutputDebug);
    message.hdrOnSdrTonemapOperator !== undefined &&
      (obj.hdrOnSdrTonemapOperator = eHDRToneMapOperatorToJSON(message.hdrOnSdrTonemapOperator));
    message.isHdrDebugHeatmapEnabled !== undefined && (obj.isHdrDebugHeatmapEnabled = message.isHdrDebugHeatmapEnabled);
    message.debugForceHdrSupport !== undefined && (obj.debugForceHdrSupport = message.debugForceHdrSupport);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfSettingsGlobal>, I>>(base?: I): CMsgSystemPerfSettingsGlobal {
    return CMsgSystemPerfSettingsGlobal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfSettingsGlobal>, I>>(object: I): CMsgSystemPerfSettingsGlobal {
    const message = createBaseCMsgSystemPerfSettingsGlobal();
    message.diagnosticUpdateRate = object.diagnosticUpdateRate ?? 0;
    message.systemTraceServiceState = object.systemTraceServiceState ?? 0;
    message.graphicsProfilingServiceState = object.graphicsProfilingServiceState ?? 0;
    message.perfOverlayServiceState = object.perfOverlayServiceState ?? 0;
    message.perfOverlayLevel = object.perfOverlayLevel ?? 0;
    message.isShowPerfOverlayOverSteamEnabled = object.isShowPerfOverlayOverSteamEnabled ?? false;
    message.isAdvancedSettingsEnabled = object.isAdvancedSettingsEnabled ?? false;
    message.allowExternalDisplayRefreshControl = object.allowExternalDisplayRefreshControl ?? false;
    message.isHdrEnabled = object.isHdrEnabled ?? false;
    message.forceHdrWideGammutForSdr = object.forceHdrWideGammutForSdr ?? false;
    message.forceHdr10pqOutputDebug = object.forceHdr10pqOutputDebug ?? false;
    message.hdrOnSdrTonemapOperator = object.hdrOnSdrTonemapOperator ?? 0;
    message.isHdrDebugHeatmapEnabled = object.isHdrDebugHeatmapEnabled ?? false;
    message.debugForceHdrSupport = object.debugForceHdrSupport ?? false;
    return message;
  },
};

function createBaseCMsgSystemPerfSettingsPerApp(): CMsgSystemPerfSettingsPerApp {
  return {
    gpuPerformanceManualMhz: 0,
    fpsLimit: 0,
    isVariableResolutionEnabled: false,
    isDynamicRefreshRateEnabled: false,
    tdpLimit: 0,
    cpuGovernor: 0,
    cpuGovernorManualMhz: 0,
    scalingFilter: 0,
    fsrSharpness: 0,
    isFpsLimitEnabled: false,
    isTdpLimitEnabled: false,
    isLowLatencyModeEnabled: false,
    displayRefreshManualHz: 0,
    isGamePerfProfileEnabled: false,
    gpuPerformanceLevel: 0,
    nisSharpness: 0,
    displayExternalRefreshManualHz: 0,
    fpsLimitExternal: 0,
    isTearingEnabled: false,
    isVrrEnabled: false,
    isCompositeDebugEnabled: false,
    forceComposite: false,
    useDynamicRefreshRateInSteam: false,
    splitScalingFilter: 0,
    splitScalingScaler: 0,
  };
}

export const CMsgSystemPerfSettingsPerApp = {
  encode(message: CMsgSystemPerfSettingsPerApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gpuPerformanceManualMhz !== 0) {
      writer.uint32(8).int32(message.gpuPerformanceManualMhz);
    }
    if (message.fpsLimit !== 0) {
      writer.uint32(16).int32(message.fpsLimit);
    }
    if (message.isVariableResolutionEnabled === true) {
      writer.uint32(24).bool(message.isVariableResolutionEnabled);
    }
    if (message.isDynamicRefreshRateEnabled === true) {
      writer.uint32(32).bool(message.isDynamicRefreshRateEnabled);
    }
    if (message.tdpLimit !== 0) {
      writer.uint32(40).int32(message.tdpLimit);
    }
    if (message.cpuGovernor !== 0) {
      writer.uint32(48).int32(message.cpuGovernor);
    }
    if (message.cpuGovernorManualMhz !== 0) {
      writer.uint32(56).int32(message.cpuGovernorManualMhz);
    }
    if (message.scalingFilter !== 0) {
      writer.uint32(64).int32(message.scalingFilter);
    }
    if (message.fsrSharpness !== 0) {
      writer.uint32(72).int32(message.fsrSharpness);
    }
    if (message.isFpsLimitEnabled === true) {
      writer.uint32(80).bool(message.isFpsLimitEnabled);
    }
    if (message.isTdpLimitEnabled === true) {
      writer.uint32(88).bool(message.isTdpLimitEnabled);
    }
    if (message.isLowLatencyModeEnabled === true) {
      writer.uint32(96).bool(message.isLowLatencyModeEnabled);
    }
    if (message.displayRefreshManualHz !== 0) {
      writer.uint32(104).int32(message.displayRefreshManualHz);
    }
    if (message.isGamePerfProfileEnabled === true) {
      writer.uint32(112).bool(message.isGamePerfProfileEnabled);
    }
    if (message.gpuPerformanceLevel !== 0) {
      writer.uint32(120).int32(message.gpuPerformanceLevel);
    }
    if (message.nisSharpness !== 0) {
      writer.uint32(128).int32(message.nisSharpness);
    }
    if (message.displayExternalRefreshManualHz !== 0) {
      writer.uint32(136).int32(message.displayExternalRefreshManualHz);
    }
    if (message.fpsLimitExternal !== 0) {
      writer.uint32(144).int32(message.fpsLimitExternal);
    }
    if (message.isTearingEnabled === true) {
      writer.uint32(152).bool(message.isTearingEnabled);
    }
    if (message.isVrrEnabled === true) {
      writer.uint32(160).bool(message.isVrrEnabled);
    }
    if (message.isCompositeDebugEnabled === true) {
      writer.uint32(168).bool(message.isCompositeDebugEnabled);
    }
    if (message.forceComposite === true) {
      writer.uint32(176).bool(message.forceComposite);
    }
    if (message.useDynamicRefreshRateInSteam === true) {
      writer.uint32(184).bool(message.useDynamicRefreshRateInSteam);
    }
    if (message.splitScalingFilter !== 0) {
      writer.uint32(192).int32(message.splitScalingFilter);
    }
    if (message.splitScalingScaler !== 0) {
      writer.uint32(200).int32(message.splitScalingScaler);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfSettingsPerApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfSettingsPerApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gpuPerformanceManualMhz = reader.int32();
          break;
        case 2:
          message.fpsLimit = reader.int32();
          break;
        case 3:
          message.isVariableResolutionEnabled = reader.bool();
          break;
        case 4:
          message.isDynamicRefreshRateEnabled = reader.bool();
          break;
        case 5:
          message.tdpLimit = reader.int32();
          break;
        case 6:
          message.cpuGovernor = reader.int32() as any;
          break;
        case 7:
          message.cpuGovernorManualMhz = reader.int32();
          break;
        case 8:
          message.scalingFilter = reader.int32();
          break;
        case 9:
          message.fsrSharpness = reader.int32();
          break;
        case 10:
          message.isFpsLimitEnabled = reader.bool();
          break;
        case 11:
          message.isTdpLimitEnabled = reader.bool();
          break;
        case 12:
          message.isLowLatencyModeEnabled = reader.bool();
          break;
        case 13:
          message.displayRefreshManualHz = reader.int32();
          break;
        case 14:
          message.isGamePerfProfileEnabled = reader.bool();
          break;
        case 15:
          message.gpuPerformanceLevel = reader.int32() as any;
          break;
        case 16:
          message.nisSharpness = reader.int32();
          break;
        case 17:
          message.displayExternalRefreshManualHz = reader.int32();
          break;
        case 18:
          message.fpsLimitExternal = reader.int32();
          break;
        case 19:
          message.isTearingEnabled = reader.bool();
          break;
        case 20:
          message.isVrrEnabled = reader.bool();
          break;
        case 21:
          message.isCompositeDebugEnabled = reader.bool();
          break;
        case 22:
          message.forceComposite = reader.bool();
          break;
        case 23:
          message.useDynamicRefreshRateInSteam = reader.bool();
          break;
        case 24:
          message.splitScalingFilter = reader.int32() as any;
          break;
        case 25:
          message.splitScalingScaler = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfSettingsPerApp {
    return {
      gpuPerformanceManualMhz: isSet(object.gpuPerformanceManualMhz) ? Number(object.gpuPerformanceManualMhz) : 0,
      fpsLimit: isSet(object.fpsLimit) ? Number(object.fpsLimit) : 0,
      isVariableResolutionEnabled: isSet(object.isVariableResolutionEnabled)
        ? Boolean(object.isVariableResolutionEnabled)
        : false,
      isDynamicRefreshRateEnabled: isSet(object.isDynamicRefreshRateEnabled)
        ? Boolean(object.isDynamicRefreshRateEnabled)
        : false,
      tdpLimit: isSet(object.tdpLimit) ? Number(object.tdpLimit) : 0,
      cpuGovernor: isSet(object.cpuGovernor) ? eCPUGovernorFromJSON(object.cpuGovernor) : 0,
      cpuGovernorManualMhz: isSet(object.cpuGovernorManualMhz) ? Number(object.cpuGovernorManualMhz) : 0,
      scalingFilter: isSet(object.scalingFilter) ? Number(object.scalingFilter) : 0,
      fsrSharpness: isSet(object.fsrSharpness) ? Number(object.fsrSharpness) : 0,
      isFpsLimitEnabled: isSet(object.isFpsLimitEnabled) ? Boolean(object.isFpsLimitEnabled) : false,
      isTdpLimitEnabled: isSet(object.isTdpLimitEnabled) ? Boolean(object.isTdpLimitEnabled) : false,
      isLowLatencyModeEnabled: isSet(object.isLowLatencyModeEnabled) ? Boolean(object.isLowLatencyModeEnabled) : false,
      displayRefreshManualHz: isSet(object.displayRefreshManualHz) ? Number(object.displayRefreshManualHz) : 0,
      isGamePerfProfileEnabled: isSet(object.isGamePerfProfileEnabled)
        ? Boolean(object.isGamePerfProfileEnabled)
        : false,
      gpuPerformanceLevel: isSet(object.gpuPerformanceLevel)
        ? eGPUPerformanceLevelFromJSON(object.gpuPerformanceLevel)
        : 0,
      nisSharpness: isSet(object.nisSharpness) ? Number(object.nisSharpness) : 0,
      displayExternalRefreshManualHz: isSet(object.displayExternalRefreshManualHz)
        ? Number(object.displayExternalRefreshManualHz)
        : 0,
      fpsLimitExternal: isSet(object.fpsLimitExternal) ? Number(object.fpsLimitExternal) : 0,
      isTearingEnabled: isSet(object.isTearingEnabled) ? Boolean(object.isTearingEnabled) : false,
      isVrrEnabled: isSet(object.isVrrEnabled) ? Boolean(object.isVrrEnabled) : false,
      isCompositeDebugEnabled: isSet(object.isCompositeDebugEnabled) ? Boolean(object.isCompositeDebugEnabled) : false,
      forceComposite: isSet(object.forceComposite) ? Boolean(object.forceComposite) : false,
      useDynamicRefreshRateInSteam: isSet(object.useDynamicRefreshRateInSteam)
        ? Boolean(object.useDynamicRefreshRateInSteam)
        : false,
      splitScalingFilter: isSet(object.splitScalingFilter) ? eSplitScalingFilterFromJSON(object.splitScalingFilter) : 0,
      splitScalingScaler: isSet(object.splitScalingScaler) ? eSplitScalingScalerFromJSON(object.splitScalingScaler) : 0,
    };
  },

  toJSON(message: CMsgSystemPerfSettingsPerApp): unknown {
    const obj: any = {};
    message.gpuPerformanceManualMhz !== undefined &&
      (obj.gpuPerformanceManualMhz = Math.round(message.gpuPerformanceManualMhz));
    message.fpsLimit !== undefined && (obj.fpsLimit = Math.round(message.fpsLimit));
    message.isVariableResolutionEnabled !== undefined &&
      (obj.isVariableResolutionEnabled = message.isVariableResolutionEnabled);
    message.isDynamicRefreshRateEnabled !== undefined &&
      (obj.isDynamicRefreshRateEnabled = message.isDynamicRefreshRateEnabled);
    message.tdpLimit !== undefined && (obj.tdpLimit = Math.round(message.tdpLimit));
    message.cpuGovernor !== undefined && (obj.cpuGovernor = eCPUGovernorToJSON(message.cpuGovernor));
    message.cpuGovernorManualMhz !== undefined && (obj.cpuGovernorManualMhz = Math.round(message.cpuGovernorManualMhz));
    message.scalingFilter !== undefined && (obj.scalingFilter = Math.round(message.scalingFilter));
    message.fsrSharpness !== undefined && (obj.fsrSharpness = Math.round(message.fsrSharpness));
    message.isFpsLimitEnabled !== undefined && (obj.isFpsLimitEnabled = message.isFpsLimitEnabled);
    message.isTdpLimitEnabled !== undefined && (obj.isTdpLimitEnabled = message.isTdpLimitEnabled);
    message.isLowLatencyModeEnabled !== undefined && (obj.isLowLatencyModeEnabled = message.isLowLatencyModeEnabled);
    message.displayRefreshManualHz !== undefined &&
      (obj.displayRefreshManualHz = Math.round(message.displayRefreshManualHz));
    message.isGamePerfProfileEnabled !== undefined && (obj.isGamePerfProfileEnabled = message.isGamePerfProfileEnabled);
    message.gpuPerformanceLevel !== undefined &&
      (obj.gpuPerformanceLevel = eGPUPerformanceLevelToJSON(message.gpuPerformanceLevel));
    message.nisSharpness !== undefined && (obj.nisSharpness = Math.round(message.nisSharpness));
    message.displayExternalRefreshManualHz !== undefined &&
      (obj.displayExternalRefreshManualHz = Math.round(message.displayExternalRefreshManualHz));
    message.fpsLimitExternal !== undefined && (obj.fpsLimitExternal = Math.round(message.fpsLimitExternal));
    message.isTearingEnabled !== undefined && (obj.isTearingEnabled = message.isTearingEnabled);
    message.isVrrEnabled !== undefined && (obj.isVrrEnabled = message.isVrrEnabled);
    message.isCompositeDebugEnabled !== undefined && (obj.isCompositeDebugEnabled = message.isCompositeDebugEnabled);
    message.forceComposite !== undefined && (obj.forceComposite = message.forceComposite);
    message.useDynamicRefreshRateInSteam !== undefined &&
      (obj.useDynamicRefreshRateInSteam = message.useDynamicRefreshRateInSteam);
    message.splitScalingFilter !== undefined &&
      (obj.splitScalingFilter = eSplitScalingFilterToJSON(message.splitScalingFilter));
    message.splitScalingScaler !== undefined &&
      (obj.splitScalingScaler = eSplitScalingScalerToJSON(message.splitScalingScaler));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfSettingsPerApp>, I>>(base?: I): CMsgSystemPerfSettingsPerApp {
    return CMsgSystemPerfSettingsPerApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfSettingsPerApp>, I>>(object: I): CMsgSystemPerfSettingsPerApp {
    const message = createBaseCMsgSystemPerfSettingsPerApp();
    message.gpuPerformanceManualMhz = object.gpuPerformanceManualMhz ?? 0;
    message.fpsLimit = object.fpsLimit ?? 0;
    message.isVariableResolutionEnabled = object.isVariableResolutionEnabled ?? false;
    message.isDynamicRefreshRateEnabled = object.isDynamicRefreshRateEnabled ?? false;
    message.tdpLimit = object.tdpLimit ?? 0;
    message.cpuGovernor = object.cpuGovernor ?? 0;
    message.cpuGovernorManualMhz = object.cpuGovernorManualMhz ?? 0;
    message.scalingFilter = object.scalingFilter ?? 0;
    message.fsrSharpness = object.fsrSharpness ?? 0;
    message.isFpsLimitEnabled = object.isFpsLimitEnabled ?? false;
    message.isTdpLimitEnabled = object.isTdpLimitEnabled ?? false;
    message.isLowLatencyModeEnabled = object.isLowLatencyModeEnabled ?? false;
    message.displayRefreshManualHz = object.displayRefreshManualHz ?? 0;
    message.isGamePerfProfileEnabled = object.isGamePerfProfileEnabled ?? false;
    message.gpuPerformanceLevel = object.gpuPerformanceLevel ?? 0;
    message.nisSharpness = object.nisSharpness ?? 0;
    message.displayExternalRefreshManualHz = object.displayExternalRefreshManualHz ?? 0;
    message.fpsLimitExternal = object.fpsLimitExternal ?? 0;
    message.isTearingEnabled = object.isTearingEnabled ?? false;
    message.isVrrEnabled = object.isVrrEnabled ?? false;
    message.isCompositeDebugEnabled = object.isCompositeDebugEnabled ?? false;
    message.forceComposite = object.forceComposite ?? false;
    message.useDynamicRefreshRateInSteam = object.useDynamicRefreshRateInSteam ?? false;
    message.splitScalingFilter = object.splitScalingFilter ?? 0;
    message.splitScalingScaler = object.splitScalingScaler ?? 0;
    return message;
  },
};

function createBaseCMsgSystemPerfSettings(): CMsgSystemPerfSettings {
  return { global: undefined, perApp: undefined };
}

export const CMsgSystemPerfSettings = {
  encode(message: CMsgSystemPerfSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.global !== undefined) {
      CMsgSystemPerfSettingsGlobal.encode(message.global, writer.uint32(10).fork()).ldelim();
    }
    if (message.perApp !== undefined) {
      CMsgSystemPerfSettingsPerApp.encode(message.perApp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.global = CMsgSystemPerfSettingsGlobal.decode(reader, reader.uint32());
          break;
        case 2:
          message.perApp = CMsgSystemPerfSettingsPerApp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfSettings {
    return {
      global: isSet(object.global) ? CMsgSystemPerfSettingsGlobal.fromJSON(object.global) : undefined,
      perApp: isSet(object.perApp) ? CMsgSystemPerfSettingsPerApp.fromJSON(object.perApp) : undefined,
    };
  },

  toJSON(message: CMsgSystemPerfSettings): unknown {
    const obj: any = {};
    message.global !== undefined &&
      (obj.global = message.global ? CMsgSystemPerfSettingsGlobal.toJSON(message.global) : undefined);
    message.perApp !== undefined &&
      (obj.perApp = message.perApp ? CMsgSystemPerfSettingsPerApp.toJSON(message.perApp) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfSettings>, I>>(base?: I): CMsgSystemPerfSettings {
    return CMsgSystemPerfSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfSettings>, I>>(object: I): CMsgSystemPerfSettings {
    const message = createBaseCMsgSystemPerfSettings();
    message.global = (object.global !== undefined && object.global !== null)
      ? CMsgSystemPerfSettingsGlobal.fromPartial(object.global)
      : undefined;
    message.perApp = (object.perApp !== undefined && object.perApp !== null)
      ? CMsgSystemPerfSettingsPerApp.fromPartial(object.perApp)
      : undefined;
    return message;
  },
};

function createBaseCMsgSystemPerfSettingsV1(): CMsgSystemPerfSettingsV1 {
  return {
    diagnosticUpdateRate: 0,
    systemTraceServiceState: 0,
    graphicsProfilingServiceState: 0,
    perfOverlayServiceState: 0,
    perfOverlayLevel: 0,
    gpuPerformanceLevel: 0,
    gpuPerformanceManualMhz: 0,
    fpsLimit: 0,
    isVariableResolutionEnabled: false,
    isDynamicRefreshRateEnabled: false,
    tdpLimit: 0,
    cpuGovernor: 0,
    cpuGovernorManualMhz: 0,
    scalingFilter: 0,
    fsrSharpness: 0,
    isFpsLimitEnabled: false,
    isTdpLimitEnabled: false,
    isShowPerfOverlayOverSteamEnabled: false,
    isLowLatencyModeEnabled: false,
    displayRefreshManualHz: 0,
    isGamePerfProfileEnabled: false,
  };
}

export const CMsgSystemPerfSettingsV1 = {
  encode(message: CMsgSystemPerfSettingsV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.diagnosticUpdateRate !== 0) {
      writer.uint32(13).float(message.diagnosticUpdateRate);
    }
    if (message.systemTraceServiceState !== 0) {
      writer.uint32(16).int32(message.systemTraceServiceState);
    }
    if (message.graphicsProfilingServiceState !== 0) {
      writer.uint32(24).int32(message.graphicsProfilingServiceState);
    }
    if (message.perfOverlayServiceState !== 0) {
      writer.uint32(32).int32(message.perfOverlayServiceState);
    }
    if (message.perfOverlayLevel !== 0) {
      writer.uint32(40).int32(message.perfOverlayLevel);
    }
    if (message.gpuPerformanceLevel !== 0) {
      writer.uint32(48).int32(message.gpuPerformanceLevel);
    }
    if (message.gpuPerformanceManualMhz !== 0) {
      writer.uint32(56).int32(message.gpuPerformanceManualMhz);
    }
    if (message.fpsLimit !== 0) {
      writer.uint32(64).int32(message.fpsLimit);
    }
    if (message.isVariableResolutionEnabled === true) {
      writer.uint32(72).bool(message.isVariableResolutionEnabled);
    }
    if (message.isDynamicRefreshRateEnabled === true) {
      writer.uint32(80).bool(message.isDynamicRefreshRateEnabled);
    }
    if (message.tdpLimit !== 0) {
      writer.uint32(88).int32(message.tdpLimit);
    }
    if (message.cpuGovernor !== 0) {
      writer.uint32(96).int32(message.cpuGovernor);
    }
    if (message.cpuGovernorManualMhz !== 0) {
      writer.uint32(104).int32(message.cpuGovernorManualMhz);
    }
    if (message.scalingFilter !== 0) {
      writer.uint32(112).int32(message.scalingFilter);
    }
    if (message.fsrSharpness !== 0) {
      writer.uint32(120).int32(message.fsrSharpness);
    }
    if (message.isFpsLimitEnabled === true) {
      writer.uint32(128).bool(message.isFpsLimitEnabled);
    }
    if (message.isTdpLimitEnabled === true) {
      writer.uint32(136).bool(message.isTdpLimitEnabled);
    }
    if (message.isShowPerfOverlayOverSteamEnabled === true) {
      writer.uint32(144).bool(message.isShowPerfOverlayOverSteamEnabled);
    }
    if (message.isLowLatencyModeEnabled === true) {
      writer.uint32(152).bool(message.isLowLatencyModeEnabled);
    }
    if (message.displayRefreshManualHz !== 0) {
      writer.uint32(160).int32(message.displayRefreshManualHz);
    }
    if (message.isGamePerfProfileEnabled === true) {
      writer.uint32(168).bool(message.isGamePerfProfileEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfSettingsV1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfSettingsV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diagnosticUpdateRate = reader.float();
          break;
        case 2:
          message.systemTraceServiceState = reader.int32() as any;
          break;
        case 3:
          message.graphicsProfilingServiceState = reader.int32() as any;
          break;
        case 4:
          message.perfOverlayServiceState = reader.int32() as any;
          break;
        case 5:
          message.perfOverlayLevel = reader.int32() as any;
          break;
        case 6:
          message.gpuPerformanceLevel = reader.int32() as any;
          break;
        case 7:
          message.gpuPerformanceManualMhz = reader.int32();
          break;
        case 8:
          message.fpsLimit = reader.int32();
          break;
        case 9:
          message.isVariableResolutionEnabled = reader.bool();
          break;
        case 10:
          message.isDynamicRefreshRateEnabled = reader.bool();
          break;
        case 11:
          message.tdpLimit = reader.int32();
          break;
        case 12:
          message.cpuGovernor = reader.int32() as any;
          break;
        case 13:
          message.cpuGovernorManualMhz = reader.int32();
          break;
        case 14:
          message.scalingFilter = reader.int32();
          break;
        case 15:
          message.fsrSharpness = reader.int32();
          break;
        case 16:
          message.isFpsLimitEnabled = reader.bool();
          break;
        case 17:
          message.isTdpLimitEnabled = reader.bool();
          break;
        case 18:
          message.isShowPerfOverlayOverSteamEnabled = reader.bool();
          break;
        case 19:
          message.isLowLatencyModeEnabled = reader.bool();
          break;
        case 20:
          message.displayRefreshManualHz = reader.int32();
          break;
        case 21:
          message.isGamePerfProfileEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfSettingsV1 {
    return {
      diagnosticUpdateRate: isSet(object.diagnosticUpdateRate) ? Number(object.diagnosticUpdateRate) : 0,
      systemTraceServiceState: isSet(object.systemTraceServiceState)
        ? eSystemServiceStateFromJSON(object.systemTraceServiceState)
        : 0,
      graphicsProfilingServiceState: isSet(object.graphicsProfilingServiceState)
        ? eSystemServiceStateFromJSON(object.graphicsProfilingServiceState)
        : 0,
      perfOverlayServiceState: isSet(object.perfOverlayServiceState)
        ? eSystemServiceStateFromJSON(object.perfOverlayServiceState)
        : 0,
      perfOverlayLevel: isSet(object.perfOverlayLevel) ? eGraphicsPerfOverlayLevelFromJSON(object.perfOverlayLevel) : 0,
      gpuPerformanceLevel: isSet(object.gpuPerformanceLevel)
        ? eGPUPerformanceLevelFromJSON(object.gpuPerformanceLevel)
        : 0,
      gpuPerformanceManualMhz: isSet(object.gpuPerformanceManualMhz) ? Number(object.gpuPerformanceManualMhz) : 0,
      fpsLimit: isSet(object.fpsLimit) ? Number(object.fpsLimit) : 0,
      isVariableResolutionEnabled: isSet(object.isVariableResolutionEnabled)
        ? Boolean(object.isVariableResolutionEnabled)
        : false,
      isDynamicRefreshRateEnabled: isSet(object.isDynamicRefreshRateEnabled)
        ? Boolean(object.isDynamicRefreshRateEnabled)
        : false,
      tdpLimit: isSet(object.tdpLimit) ? Number(object.tdpLimit) : 0,
      cpuGovernor: isSet(object.cpuGovernor) ? eCPUGovernorFromJSON(object.cpuGovernor) : 0,
      cpuGovernorManualMhz: isSet(object.cpuGovernorManualMhz) ? Number(object.cpuGovernorManualMhz) : 0,
      scalingFilter: isSet(object.scalingFilter) ? Number(object.scalingFilter) : 0,
      fsrSharpness: isSet(object.fsrSharpness) ? Number(object.fsrSharpness) : 0,
      isFpsLimitEnabled: isSet(object.isFpsLimitEnabled) ? Boolean(object.isFpsLimitEnabled) : false,
      isTdpLimitEnabled: isSet(object.isTdpLimitEnabled) ? Boolean(object.isTdpLimitEnabled) : false,
      isShowPerfOverlayOverSteamEnabled: isSet(object.isShowPerfOverlayOverSteamEnabled)
        ? Boolean(object.isShowPerfOverlayOverSteamEnabled)
        : false,
      isLowLatencyModeEnabled: isSet(object.isLowLatencyModeEnabled) ? Boolean(object.isLowLatencyModeEnabled) : false,
      displayRefreshManualHz: isSet(object.displayRefreshManualHz) ? Number(object.displayRefreshManualHz) : 0,
      isGamePerfProfileEnabled: isSet(object.isGamePerfProfileEnabled)
        ? Boolean(object.isGamePerfProfileEnabled)
        : false,
    };
  },

  toJSON(message: CMsgSystemPerfSettingsV1): unknown {
    const obj: any = {};
    message.diagnosticUpdateRate !== undefined && (obj.diagnosticUpdateRate = message.diagnosticUpdateRate);
    message.systemTraceServiceState !== undefined &&
      (obj.systemTraceServiceState = eSystemServiceStateToJSON(message.systemTraceServiceState));
    message.graphicsProfilingServiceState !== undefined &&
      (obj.graphicsProfilingServiceState = eSystemServiceStateToJSON(message.graphicsProfilingServiceState));
    message.perfOverlayServiceState !== undefined &&
      (obj.perfOverlayServiceState = eSystemServiceStateToJSON(message.perfOverlayServiceState));
    message.perfOverlayLevel !== undefined &&
      (obj.perfOverlayLevel = eGraphicsPerfOverlayLevelToJSON(message.perfOverlayLevel));
    message.gpuPerformanceLevel !== undefined &&
      (obj.gpuPerformanceLevel = eGPUPerformanceLevelToJSON(message.gpuPerformanceLevel));
    message.gpuPerformanceManualMhz !== undefined &&
      (obj.gpuPerformanceManualMhz = Math.round(message.gpuPerformanceManualMhz));
    message.fpsLimit !== undefined && (obj.fpsLimit = Math.round(message.fpsLimit));
    message.isVariableResolutionEnabled !== undefined &&
      (obj.isVariableResolutionEnabled = message.isVariableResolutionEnabled);
    message.isDynamicRefreshRateEnabled !== undefined &&
      (obj.isDynamicRefreshRateEnabled = message.isDynamicRefreshRateEnabled);
    message.tdpLimit !== undefined && (obj.tdpLimit = Math.round(message.tdpLimit));
    message.cpuGovernor !== undefined && (obj.cpuGovernor = eCPUGovernorToJSON(message.cpuGovernor));
    message.cpuGovernorManualMhz !== undefined && (obj.cpuGovernorManualMhz = Math.round(message.cpuGovernorManualMhz));
    message.scalingFilter !== undefined && (obj.scalingFilter = Math.round(message.scalingFilter));
    message.fsrSharpness !== undefined && (obj.fsrSharpness = Math.round(message.fsrSharpness));
    message.isFpsLimitEnabled !== undefined && (obj.isFpsLimitEnabled = message.isFpsLimitEnabled);
    message.isTdpLimitEnabled !== undefined && (obj.isTdpLimitEnabled = message.isTdpLimitEnabled);
    message.isShowPerfOverlayOverSteamEnabled !== undefined &&
      (obj.isShowPerfOverlayOverSteamEnabled = message.isShowPerfOverlayOverSteamEnabled);
    message.isLowLatencyModeEnabled !== undefined && (obj.isLowLatencyModeEnabled = message.isLowLatencyModeEnabled);
    message.displayRefreshManualHz !== undefined &&
      (obj.displayRefreshManualHz = Math.round(message.displayRefreshManualHz));
    message.isGamePerfProfileEnabled !== undefined && (obj.isGamePerfProfileEnabled = message.isGamePerfProfileEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfSettingsV1>, I>>(base?: I): CMsgSystemPerfSettingsV1 {
    return CMsgSystemPerfSettingsV1.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfSettingsV1>, I>>(object: I): CMsgSystemPerfSettingsV1 {
    const message = createBaseCMsgSystemPerfSettingsV1();
    message.diagnosticUpdateRate = object.diagnosticUpdateRate ?? 0;
    message.systemTraceServiceState = object.systemTraceServiceState ?? 0;
    message.graphicsProfilingServiceState = object.graphicsProfilingServiceState ?? 0;
    message.perfOverlayServiceState = object.perfOverlayServiceState ?? 0;
    message.perfOverlayLevel = object.perfOverlayLevel ?? 0;
    message.gpuPerformanceLevel = object.gpuPerformanceLevel ?? 0;
    message.gpuPerformanceManualMhz = object.gpuPerformanceManualMhz ?? 0;
    message.fpsLimit = object.fpsLimit ?? 0;
    message.isVariableResolutionEnabled = object.isVariableResolutionEnabled ?? false;
    message.isDynamicRefreshRateEnabled = object.isDynamicRefreshRateEnabled ?? false;
    message.tdpLimit = object.tdpLimit ?? 0;
    message.cpuGovernor = object.cpuGovernor ?? 0;
    message.cpuGovernorManualMhz = object.cpuGovernorManualMhz ?? 0;
    message.scalingFilter = object.scalingFilter ?? 0;
    message.fsrSharpness = object.fsrSharpness ?? 0;
    message.isFpsLimitEnabled = object.isFpsLimitEnabled ?? false;
    message.isTdpLimitEnabled = object.isTdpLimitEnabled ?? false;
    message.isShowPerfOverlayOverSteamEnabled = object.isShowPerfOverlayOverSteamEnabled ?? false;
    message.isLowLatencyModeEnabled = object.isLowLatencyModeEnabled ?? false;
    message.displayRefreshManualHz = object.displayRefreshManualHz ?? 0;
    message.isGamePerfProfileEnabled = object.isGamePerfProfileEnabled ?? false;
    return message;
  },
};

function createBaseCMsgSystemPerfState(): CMsgSystemPerfState {
  return { limits: undefined, settings: undefined, currentGameId: "0", activeProfileGameId: "0" };
}

export const CMsgSystemPerfState = {
  encode(message: CMsgSystemPerfState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limits !== undefined) {
      CMsgSystemPerfLimits.encode(message.limits, writer.uint32(10).fork()).ldelim();
    }
    if (message.settings !== undefined) {
      CMsgSystemPerfSettings.encode(message.settings, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentGameId !== "0") {
      writer.uint32(24).uint64(message.currentGameId);
    }
    if (message.activeProfileGameId !== "0") {
      writer.uint32(32).uint64(message.activeProfileGameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limits = CMsgSystemPerfLimits.decode(reader, reader.uint32());
          break;
        case 2:
          message.settings = CMsgSystemPerfSettings.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentGameId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.activeProfileGameId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfState {
    return {
      limits: isSet(object.limits) ? CMsgSystemPerfLimits.fromJSON(object.limits) : undefined,
      settings: isSet(object.settings) ? CMsgSystemPerfSettings.fromJSON(object.settings) : undefined,
      currentGameId: isSet(object.currentGameId) ? String(object.currentGameId) : "0",
      activeProfileGameId: isSet(object.activeProfileGameId) ? String(object.activeProfileGameId) : "0",
    };
  },

  toJSON(message: CMsgSystemPerfState): unknown {
    const obj: any = {};
    message.limits !== undefined &&
      (obj.limits = message.limits ? CMsgSystemPerfLimits.toJSON(message.limits) : undefined);
    message.settings !== undefined &&
      (obj.settings = message.settings ? CMsgSystemPerfSettings.toJSON(message.settings) : undefined);
    message.currentGameId !== undefined && (obj.currentGameId = message.currentGameId);
    message.activeProfileGameId !== undefined && (obj.activeProfileGameId = message.activeProfileGameId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfState>, I>>(base?: I): CMsgSystemPerfState {
    return CMsgSystemPerfState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfState>, I>>(object: I): CMsgSystemPerfState {
    const message = createBaseCMsgSystemPerfState();
    message.limits = (object.limits !== undefined && object.limits !== null)
      ? CMsgSystemPerfLimits.fromPartial(object.limits)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? CMsgSystemPerfSettings.fromPartial(object.settings)
      : undefined;
    message.currentGameId = object.currentGameId ?? "0";
    message.activeProfileGameId = object.activeProfileGameId ?? "0";
    return message;
  },
};

function createBaseCMsgSystemPerfUpdateSettings(): CMsgSystemPerfUpdateSettings {
  return { gameid: "0", resetToDefault: undefined, settingsDelta: undefined };
}

export const CMsgSystemPerfUpdateSettings = {
  encode(message: CMsgSystemPerfUpdateSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameid !== "0") {
      writer.uint32(8).uint64(message.gameid);
    }
    if (message.resetToDefault !== undefined) {
      writer.uint32(16).bool(message.resetToDefault);
    }
    if (message.settingsDelta !== undefined) {
      CMsgSystemPerfSettings.encode(message.settingsDelta, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemPerfUpdateSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemPerfUpdateSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.resetToDefault = reader.bool();
          break;
        case 3:
          message.settingsDelta = CMsgSystemPerfSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemPerfUpdateSettings {
    return {
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      resetToDefault: isSet(object.resetToDefault) ? Boolean(object.resetToDefault) : undefined,
      settingsDelta: isSet(object.settingsDelta) ? CMsgSystemPerfSettings.fromJSON(object.settingsDelta) : undefined,
    };
  },

  toJSON(message: CMsgSystemPerfUpdateSettings): unknown {
    const obj: any = {};
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.resetToDefault !== undefined && (obj.resetToDefault = message.resetToDefault);
    message.settingsDelta !== undefined &&
      (obj.settingsDelta = message.settingsDelta ? CMsgSystemPerfSettings.toJSON(message.settingsDelta) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemPerfUpdateSettings>, I>>(base?: I): CMsgSystemPerfUpdateSettings {
    return CMsgSystemPerfUpdateSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemPerfUpdateSettings>, I>>(object: I): CMsgSystemPerfUpdateSettings {
    const message = createBaseCMsgSystemPerfUpdateSettings();
    message.gameid = object.gameid ?? "0";
    message.resetToDefault = object.resetToDefault ?? undefined;
    message.settingsDelta = (object.settingsDelta !== undefined && object.settingsDelta !== null)
      ? CMsgSystemPerfSettings.fromPartial(object.settingsDelta)
      : undefined;
    return message;
  },
};

function createBaseCMsgSystemDockUpdateState(): CMsgSystemDockUpdateState {
  return {
    state: 0,
    rtimeLastChecked: 0,
    versionCurrent: "",
    versionAvailable: "",
    stageProgress: 0,
    rtimeEstimatedCompletion: 0,
    oldFwWorkaround: 0,
  };
}

export const CMsgSystemDockUpdateState = {
  encode(message: CMsgSystemDockUpdateState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.rtimeLastChecked !== 0) {
      writer.uint32(21).fixed32(message.rtimeLastChecked);
    }
    if (message.versionCurrent !== "") {
      writer.uint32(26).string(message.versionCurrent);
    }
    if (message.versionAvailable !== "") {
      writer.uint32(34).string(message.versionAvailable);
    }
    if (message.stageProgress !== 0) {
      writer.uint32(45).float(message.stageProgress);
    }
    if (message.rtimeEstimatedCompletion !== 0) {
      writer.uint32(53).fixed32(message.rtimeEstimatedCompletion);
    }
    if (message.oldFwWorkaround !== 0) {
      writer.uint32(56).int32(message.oldFwWorkaround);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDockUpdateState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDockUpdateState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.rtimeLastChecked = reader.fixed32();
          break;
        case 3:
          message.versionCurrent = reader.string();
          break;
        case 4:
          message.versionAvailable = reader.string();
          break;
        case 5:
          message.stageProgress = reader.float();
          break;
        case 6:
          message.rtimeEstimatedCompletion = reader.fixed32();
          break;
        case 7:
          message.oldFwWorkaround = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDockUpdateState {
    return {
      state: isSet(object.state) ? eUpdaterStateFromJSON(object.state) : 0,
      rtimeLastChecked: isSet(object.rtimeLastChecked) ? Number(object.rtimeLastChecked) : 0,
      versionCurrent: isSet(object.versionCurrent) ? String(object.versionCurrent) : "",
      versionAvailable: isSet(object.versionAvailable) ? String(object.versionAvailable) : "",
      stageProgress: isSet(object.stageProgress) ? Number(object.stageProgress) : 0,
      rtimeEstimatedCompletion: isSet(object.rtimeEstimatedCompletion) ? Number(object.rtimeEstimatedCompletion) : 0,
      oldFwWorkaround: isSet(object.oldFwWorkaround) ? Number(object.oldFwWorkaround) : 0,
    };
  },

  toJSON(message: CMsgSystemDockUpdateState): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = eUpdaterStateToJSON(message.state));
    message.rtimeLastChecked !== undefined && (obj.rtimeLastChecked = Math.round(message.rtimeLastChecked));
    message.versionCurrent !== undefined && (obj.versionCurrent = message.versionCurrent);
    message.versionAvailable !== undefined && (obj.versionAvailable = message.versionAvailable);
    message.stageProgress !== undefined && (obj.stageProgress = message.stageProgress);
    message.rtimeEstimatedCompletion !== undefined &&
      (obj.rtimeEstimatedCompletion = Math.round(message.rtimeEstimatedCompletion));
    message.oldFwWorkaround !== undefined && (obj.oldFwWorkaround = Math.round(message.oldFwWorkaround));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDockUpdateState>, I>>(base?: I): CMsgSystemDockUpdateState {
    return CMsgSystemDockUpdateState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDockUpdateState>, I>>(object: I): CMsgSystemDockUpdateState {
    const message = createBaseCMsgSystemDockUpdateState();
    message.state = object.state ?? 0;
    message.rtimeLastChecked = object.rtimeLastChecked ?? 0;
    message.versionCurrent = object.versionCurrent ?? "";
    message.versionAvailable = object.versionAvailable ?? "";
    message.stageProgress = object.stageProgress ?? 0;
    message.rtimeEstimatedCompletion = object.rtimeEstimatedCompletion ?? 0;
    message.oldFwWorkaround = object.oldFwWorkaround ?? 0;
    return message;
  },
};

function createBaseCMsgSystemDockState(): CMsgSystemDockState {
  return { updateState: undefined };
}

export const CMsgSystemDockState = {
  encode(message: CMsgSystemDockState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateState !== undefined) {
      CMsgSystemDockUpdateState.encode(message.updateState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDockState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDockState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateState = CMsgSystemDockUpdateState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDockState {
    return {
      updateState: isSet(object.updateState) ? CMsgSystemDockUpdateState.fromJSON(object.updateState) : undefined,
    };
  },

  toJSON(message: CMsgSystemDockState): unknown {
    const obj: any = {};
    message.updateState !== undefined &&
      (obj.updateState = message.updateState ? CMsgSystemDockUpdateState.toJSON(message.updateState) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDockState>, I>>(base?: I): CMsgSystemDockState {
    return CMsgSystemDockState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDockState>, I>>(object: I): CMsgSystemDockState {
    const message = createBaseCMsgSystemDockState();
    message.updateState = (object.updateState !== undefined && object.updateState !== null)
      ? CMsgSystemDockUpdateState.fromPartial(object.updateState)
      : undefined;
    return message;
  },
};

function createBaseCMsgSystemDockUpdateFirmware(): CMsgSystemDockUpdateFirmware {
  return { checkOnly: false };
}

export const CMsgSystemDockUpdateFirmware = {
  encode(message: CMsgSystemDockUpdateFirmware, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkOnly === true) {
      writer.uint32(8).bool(message.checkOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDockUpdateFirmware {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDockUpdateFirmware();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDockUpdateFirmware {
    return { checkOnly: isSet(object.checkOnly) ? Boolean(object.checkOnly) : false };
  },

  toJSON(message: CMsgSystemDockUpdateFirmware): unknown {
    const obj: any = {};
    message.checkOnly !== undefined && (obj.checkOnly = message.checkOnly);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDockUpdateFirmware>, I>>(base?: I): CMsgSystemDockUpdateFirmware {
    return CMsgSystemDockUpdateFirmware.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDockUpdateFirmware>, I>>(object: I): CMsgSystemDockUpdateFirmware {
    const message = createBaseCMsgSystemDockUpdateFirmware();
    message.checkOnly = object.checkOnly ?? false;
    return message;
  },
};

function createBaseCMsgSystemAudioVolume(): CMsgSystemAudioVolume {
  return { entries: [], isMuted: false };
}

export const CMsgSystemAudioVolume = {
  encode(message: CMsgSystemAudioVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CMsgSystemAudioVolume_ChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.isMuted === true) {
      writer.uint32(16).bool(message.isMuted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioVolume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CMsgSystemAudioVolume_ChannelEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.isMuted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioVolume {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => CMsgSystemAudioVolume_ChannelEntry.fromJSON(e))
        : [],
      isMuted: isSet(object.isMuted) ? Boolean(object.isMuted) : false,
    };
  },

  toJSON(message: CMsgSystemAudioVolume): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CMsgSystemAudioVolume_ChannelEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.isMuted !== undefined && (obj.isMuted = message.isMuted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioVolume>, I>>(base?: I): CMsgSystemAudioVolume {
    return CMsgSystemAudioVolume.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioVolume>, I>>(object: I): CMsgSystemAudioVolume {
    const message = createBaseCMsgSystemAudioVolume();
    message.entries = object.entries?.map((e) => CMsgSystemAudioVolume_ChannelEntry.fromPartial(e)) || [];
    message.isMuted = object.isMuted ?? false;
    return message;
  },
};

function createBaseCMsgSystemAudioVolume_ChannelEntry(): CMsgSystemAudioVolume_ChannelEntry {
  return { echannel: 0, volume: 0 };
}

export const CMsgSystemAudioVolume_ChannelEntry = {
  encode(message: CMsgSystemAudioVolume_ChannelEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.echannel !== 0) {
      writer.uint32(8).int32(message.echannel);
    }
    if (message.volume !== 0) {
      writer.uint32(21).float(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioVolume_ChannelEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioVolume_ChannelEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echannel = reader.int32() as any;
          break;
        case 2:
          message.volume = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioVolume_ChannelEntry {
    return {
      echannel: isSet(object.echannel) ? eSystemAudioChannelFromJSON(object.echannel) : 0,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
    };
  },

  toJSON(message: CMsgSystemAudioVolume_ChannelEntry): unknown {
    const obj: any = {};
    message.echannel !== undefined && (obj.echannel = eSystemAudioChannelToJSON(message.echannel));
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioVolume_ChannelEntry>, I>>(
    base?: I,
  ): CMsgSystemAudioVolume_ChannelEntry {
    return CMsgSystemAudioVolume_ChannelEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioVolume_ChannelEntry>, I>>(
    object: I,
  ): CMsgSystemAudioVolume_ChannelEntry {
    const message = createBaseCMsgSystemAudioVolume_ChannelEntry();
    message.echannel = object.echannel ?? 0;
    message.volume = object.volume ?? 0;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerObject(): CMsgSystemAudioManagerObject {
  return { id: 0, rtimeLastUpdate: 0 };
}

export const CMsgSystemAudioManagerObject = {
  encode(message: CMsgSystemAudioManagerObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.rtimeLastUpdate !== 0) {
      writer.uint32(21).fixed32(message.rtimeLastUpdate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.rtimeLastUpdate = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerObject {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      rtimeLastUpdate: isSet(object.rtimeLastUpdate) ? Number(object.rtimeLastUpdate) : 0,
    };
  },

  toJSON(message: CMsgSystemAudioManagerObject): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.rtimeLastUpdate !== undefined && (obj.rtimeLastUpdate = Math.round(message.rtimeLastUpdate));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerObject>, I>>(base?: I): CMsgSystemAudioManagerObject {
    return CMsgSystemAudioManagerObject.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerObject>, I>>(object: I): CMsgSystemAudioManagerObject {
    const message = createBaseCMsgSystemAudioManagerObject();
    message.id = object.id ?? 0;
    message.rtimeLastUpdate = object.rtimeLastUpdate ?? 0;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerDevice(): CMsgSystemAudioManagerDevice {
  return { base: undefined, name: "", nick: "", description: "", api: "" };
}

export const CMsgSystemAudioManagerDevice = {
  encode(message: CMsgSystemAudioManagerDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgSystemAudioManagerObject.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nick !== "") {
      writer.uint32(26).string(message.nick);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.api !== "") {
      writer.uint32(42).string(message.api);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = CMsgSystemAudioManagerObject.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.nick = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.api = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerDevice {
    return {
      base: isSet(object.base) ? CMsgSystemAudioManagerObject.fromJSON(object.base) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      nick: isSet(object.nick) ? String(object.nick) : "",
      description: isSet(object.description) ? String(object.description) : "",
      api: isSet(object.api) ? String(object.api) : "",
    };
  },

  toJSON(message: CMsgSystemAudioManagerDevice): unknown {
    const obj: any = {};
    message.base !== undefined &&
      (obj.base = message.base ? CMsgSystemAudioManagerObject.toJSON(message.base) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.nick !== undefined && (obj.nick = message.nick);
    message.description !== undefined && (obj.description = message.description);
    message.api !== undefined && (obj.api = message.api);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerDevice>, I>>(base?: I): CMsgSystemAudioManagerDevice {
    return CMsgSystemAudioManagerDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerDevice>, I>>(object: I): CMsgSystemAudioManagerDevice {
    const message = createBaseCMsgSystemAudioManagerDevice();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgSystemAudioManagerObject.fromPartial(object.base)
      : undefined;
    message.name = object.name ?? "";
    message.nick = object.nick ?? "";
    message.description = object.description ?? "";
    message.api = object.api ?? "";
    return message;
  },
};

function createBaseCMsgSystemAudioManagerNode(): CMsgSystemAudioManagerNode {
  return { base: undefined, deviceId: 0, name: "", nick: "", description: "", edirection: 0, volume: undefined };
}

export const CMsgSystemAudioManagerNode = {
  encode(message: CMsgSystemAudioManagerNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgSystemAudioManagerObject.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.deviceId !== 0) {
      writer.uint32(16).uint32(message.deviceId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.nick !== "") {
      writer.uint32(34).string(message.nick);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.edirection !== 0) {
      writer.uint32(48).int32(message.edirection);
    }
    if (message.volume !== undefined) {
      CMsgSystemAudioVolume.encode(message.volume, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = CMsgSystemAudioManagerObject.decode(reader, reader.uint32());
          break;
        case 2:
          message.deviceId = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.nick = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.edirection = reader.int32() as any;
          break;
        case 7:
          message.volume = CMsgSystemAudioVolume.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerNode {
    return {
      base: isSet(object.base) ? CMsgSystemAudioManagerObject.fromJSON(object.base) : undefined,
      deviceId: isSet(object.deviceId) ? Number(object.deviceId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nick: isSet(object.nick) ? String(object.nick) : "",
      description: isSet(object.description) ? String(object.description) : "",
      edirection: isSet(object.edirection) ? eSystemAudioDirectionFromJSON(object.edirection) : 0,
      volume: isSet(object.volume) ? CMsgSystemAudioVolume.fromJSON(object.volume) : undefined,
    };
  },

  toJSON(message: CMsgSystemAudioManagerNode): unknown {
    const obj: any = {};
    message.base !== undefined &&
      (obj.base = message.base ? CMsgSystemAudioManagerObject.toJSON(message.base) : undefined);
    message.deviceId !== undefined && (obj.deviceId = Math.round(message.deviceId));
    message.name !== undefined && (obj.name = message.name);
    message.nick !== undefined && (obj.nick = message.nick);
    message.description !== undefined && (obj.description = message.description);
    message.edirection !== undefined && (obj.edirection = eSystemAudioDirectionToJSON(message.edirection));
    message.volume !== undefined &&
      (obj.volume = message.volume ? CMsgSystemAudioVolume.toJSON(message.volume) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerNode>, I>>(base?: I): CMsgSystemAudioManagerNode {
    return CMsgSystemAudioManagerNode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerNode>, I>>(object: I): CMsgSystemAudioManagerNode {
    const message = createBaseCMsgSystemAudioManagerNode();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgSystemAudioManagerObject.fromPartial(object.base)
      : undefined;
    message.deviceId = object.deviceId ?? 0;
    message.name = object.name ?? "";
    message.nick = object.nick ?? "";
    message.description = object.description ?? "";
    message.edirection = object.edirection ?? 0;
    message.volume = (object.volume !== undefined && object.volume !== null)
      ? CMsgSystemAudioVolume.fromPartial(object.volume)
      : undefined;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerPort(): CMsgSystemAudioManagerPort {
  return {
    base: undefined,
    nodeId: 0,
    name: "",
    alias: "",
    etype: 0,
    edirection: 0,
    isPhysical: false,
    isTerminal: false,
    isControl: false,
    isMonitor: false,
  };
}

export const CMsgSystemAudioManagerPort = {
  encode(message: CMsgSystemAudioManagerPort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgSystemAudioManagerObject.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeId !== 0) {
      writer.uint32(24).uint32(message.nodeId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.alias !== "") {
      writer.uint32(42).string(message.alias);
    }
    if (message.etype !== 0) {
      writer.uint32(48).int32(message.etype);
    }
    if (message.edirection !== 0) {
      writer.uint32(56).int32(message.edirection);
    }
    if (message.isPhysical === true) {
      writer.uint32(64).bool(message.isPhysical);
    }
    if (message.isTerminal === true) {
      writer.uint32(72).bool(message.isTerminal);
    }
    if (message.isControl === true) {
      writer.uint32(80).bool(message.isControl);
    }
    if (message.isMonitor === true) {
      writer.uint32(88).bool(message.isMonitor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerPort {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerPort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = CMsgSystemAudioManagerObject.decode(reader, reader.uint32());
          break;
        case 3:
          message.nodeId = reader.uint32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.alias = reader.string();
          break;
        case 6:
          message.etype = reader.int32() as any;
          break;
        case 7:
          message.edirection = reader.int32() as any;
          break;
        case 8:
          message.isPhysical = reader.bool();
          break;
        case 9:
          message.isTerminal = reader.bool();
          break;
        case 10:
          message.isControl = reader.bool();
          break;
        case 11:
          message.isMonitor = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerPort {
    return {
      base: isSet(object.base) ? CMsgSystemAudioManagerObject.fromJSON(object.base) : undefined,
      nodeId: isSet(object.nodeId) ? Number(object.nodeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      alias: isSet(object.alias) ? String(object.alias) : "",
      etype: isSet(object.etype) ? eSystemAudioPortTypeFromJSON(object.etype) : 0,
      edirection: isSet(object.edirection) ? eSystemAudioPortDirectionFromJSON(object.edirection) : 0,
      isPhysical: isSet(object.isPhysical) ? Boolean(object.isPhysical) : false,
      isTerminal: isSet(object.isTerminal) ? Boolean(object.isTerminal) : false,
      isControl: isSet(object.isControl) ? Boolean(object.isControl) : false,
      isMonitor: isSet(object.isMonitor) ? Boolean(object.isMonitor) : false,
    };
  },

  toJSON(message: CMsgSystemAudioManagerPort): unknown {
    const obj: any = {};
    message.base !== undefined &&
      (obj.base = message.base ? CMsgSystemAudioManagerObject.toJSON(message.base) : undefined);
    message.nodeId !== undefined && (obj.nodeId = Math.round(message.nodeId));
    message.name !== undefined && (obj.name = message.name);
    message.alias !== undefined && (obj.alias = message.alias);
    message.etype !== undefined && (obj.etype = eSystemAudioPortTypeToJSON(message.etype));
    message.edirection !== undefined && (obj.edirection = eSystemAudioPortDirectionToJSON(message.edirection));
    message.isPhysical !== undefined && (obj.isPhysical = message.isPhysical);
    message.isTerminal !== undefined && (obj.isTerminal = message.isTerminal);
    message.isControl !== undefined && (obj.isControl = message.isControl);
    message.isMonitor !== undefined && (obj.isMonitor = message.isMonitor);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerPort>, I>>(base?: I): CMsgSystemAudioManagerPort {
    return CMsgSystemAudioManagerPort.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerPort>, I>>(object: I): CMsgSystemAudioManagerPort {
    const message = createBaseCMsgSystemAudioManagerPort();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgSystemAudioManagerObject.fromPartial(object.base)
      : undefined;
    message.nodeId = object.nodeId ?? 0;
    message.name = object.name ?? "";
    message.alias = object.alias ?? "";
    message.etype = object.etype ?? 0;
    message.edirection = object.edirection ?? 0;
    message.isPhysical = object.isPhysical ?? false;
    message.isTerminal = object.isTerminal ?? false;
    message.isControl = object.isControl ?? false;
    message.isMonitor = object.isMonitor ?? false;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerLink(): CMsgSystemAudioManagerLink {
  return { base: undefined, outputNodeId: 0, outputPortId: 0, inputNodeId: 0, inputPortId: 0 };
}

export const CMsgSystemAudioManagerLink = {
  encode(message: CMsgSystemAudioManagerLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== undefined) {
      CMsgSystemAudioManagerObject.encode(message.base, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputNodeId !== 0) {
      writer.uint32(16).uint32(message.outputNodeId);
    }
    if (message.outputPortId !== 0) {
      writer.uint32(24).uint32(message.outputPortId);
    }
    if (message.inputNodeId !== 0) {
      writer.uint32(32).uint32(message.inputNodeId);
    }
    if (message.inputPortId !== 0) {
      writer.uint32(40).uint32(message.inputPortId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = CMsgSystemAudioManagerObject.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputNodeId = reader.uint32();
          break;
        case 3:
          message.outputPortId = reader.uint32();
          break;
        case 4:
          message.inputNodeId = reader.uint32();
          break;
        case 5:
          message.inputPortId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerLink {
    return {
      base: isSet(object.base) ? CMsgSystemAudioManagerObject.fromJSON(object.base) : undefined,
      outputNodeId: isSet(object.outputNodeId) ? Number(object.outputNodeId) : 0,
      outputPortId: isSet(object.outputPortId) ? Number(object.outputPortId) : 0,
      inputNodeId: isSet(object.inputNodeId) ? Number(object.inputNodeId) : 0,
      inputPortId: isSet(object.inputPortId) ? Number(object.inputPortId) : 0,
    };
  },

  toJSON(message: CMsgSystemAudioManagerLink): unknown {
    const obj: any = {};
    message.base !== undefined &&
      (obj.base = message.base ? CMsgSystemAudioManagerObject.toJSON(message.base) : undefined);
    message.outputNodeId !== undefined && (obj.outputNodeId = Math.round(message.outputNodeId));
    message.outputPortId !== undefined && (obj.outputPortId = Math.round(message.outputPortId));
    message.inputNodeId !== undefined && (obj.inputNodeId = Math.round(message.inputNodeId));
    message.inputPortId !== undefined && (obj.inputPortId = Math.round(message.inputPortId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerLink>, I>>(base?: I): CMsgSystemAudioManagerLink {
    return CMsgSystemAudioManagerLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerLink>, I>>(object: I): CMsgSystemAudioManagerLink {
    const message = createBaseCMsgSystemAudioManagerLink();
    message.base = (object.base !== undefined && object.base !== null)
      ? CMsgSystemAudioManagerObject.fromPartial(object.base)
      : undefined;
    message.outputNodeId = object.outputNodeId ?? 0;
    message.outputPortId = object.outputPortId ?? 0;
    message.inputNodeId = object.inputNodeId ?? 0;
    message.inputPortId = object.inputPortId ?? 0;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerStateHW(): CMsgSystemAudioManagerStateHW {
  return { devices: [], nodes: [], ports: [], links: [] };
}

export const CMsgSystemAudioManagerStateHW = {
  encode(message: CMsgSystemAudioManagerStateHW, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      CMsgSystemAudioManagerDevice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nodes) {
      CMsgSystemAudioManagerNode.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      CMsgSystemAudioManagerPort.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.links) {
      CMsgSystemAudioManagerLink.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerStateHW {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerStateHW();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(CMsgSystemAudioManagerDevice.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nodes.push(CMsgSystemAudioManagerNode.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(CMsgSystemAudioManagerPort.decode(reader, reader.uint32()));
          break;
        case 4:
          message.links.push(CMsgSystemAudioManagerLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerStateHW {
    return {
      devices: Array.isArray(object?.devices)
        ? object.devices.map((e: any) => CMsgSystemAudioManagerDevice.fromJSON(e))
        : [],
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => CMsgSystemAudioManagerNode.fromJSON(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => CMsgSystemAudioManagerPort.fromJSON(e)) : [],
      links: Array.isArray(object?.links) ? object.links.map((e: any) => CMsgSystemAudioManagerLink.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgSystemAudioManagerStateHW): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) => e ? CMsgSystemAudioManagerDevice.toJSON(e) : undefined);
    } else {
      obj.devices = [];
    }
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => e ? CMsgSystemAudioManagerNode.toJSON(e) : undefined);
    } else {
      obj.nodes = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map((e) => e ? CMsgSystemAudioManagerPort.toJSON(e) : undefined);
    } else {
      obj.ports = [];
    }
    if (message.links) {
      obj.links = message.links.map((e) => e ? CMsgSystemAudioManagerLink.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerStateHW>, I>>(base?: I): CMsgSystemAudioManagerStateHW {
    return CMsgSystemAudioManagerStateHW.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerStateHW>, I>>(
    object: I,
  ): CMsgSystemAudioManagerStateHW {
    const message = createBaseCMsgSystemAudioManagerStateHW();
    message.devices = object.devices?.map((e) => CMsgSystemAudioManagerDevice.fromPartial(e)) || [];
    message.nodes = object.nodes?.map((e) => CMsgSystemAudioManagerNode.fromPartial(e)) || [];
    message.ports = object.ports?.map((e) => CMsgSystemAudioManagerPort.fromPartial(e)) || [];
    message.links = object.links?.map((e) => CMsgSystemAudioManagerLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSystemAudioManagerState(): CMsgSystemAudioManagerState {
  return { rtimeFilter: 0, counter: 0, hw: undefined };
}

export const CMsgSystemAudioManagerState = {
  encode(message: CMsgSystemAudioManagerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rtimeFilter !== 0) {
      writer.uint32(13).fixed32(message.rtimeFilter);
    }
    if (message.counter !== 0) {
      writer.uint32(16).int32(message.counter);
    }
    if (message.hw !== undefined) {
      CMsgSystemAudioManagerStateHW.encode(message.hw, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rtimeFilter = reader.fixed32();
          break;
        case 2:
          message.counter = reader.int32();
          break;
        case 3:
          message.hw = CMsgSystemAudioManagerStateHW.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerState {
    return {
      rtimeFilter: isSet(object.rtimeFilter) ? Number(object.rtimeFilter) : 0,
      counter: isSet(object.counter) ? Number(object.counter) : 0,
      hw: isSet(object.hw) ? CMsgSystemAudioManagerStateHW.fromJSON(object.hw) : undefined,
    };
  },

  toJSON(message: CMsgSystemAudioManagerState): unknown {
    const obj: any = {};
    message.rtimeFilter !== undefined && (obj.rtimeFilter = Math.round(message.rtimeFilter));
    message.counter !== undefined && (obj.counter = Math.round(message.counter));
    message.hw !== undefined && (obj.hw = message.hw ? CMsgSystemAudioManagerStateHW.toJSON(message.hw) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerState>, I>>(base?: I): CMsgSystemAudioManagerState {
    return CMsgSystemAudioManagerState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerState>, I>>(object: I): CMsgSystemAudioManagerState {
    const message = createBaseCMsgSystemAudioManagerState();
    message.rtimeFilter = object.rtimeFilter ?? 0;
    message.counter = object.counter ?? 0;
    message.hw = (object.hw !== undefined && object.hw !== null)
      ? CMsgSystemAudioManagerStateHW.fromPartial(object.hw)
      : undefined;
    return message;
  },
};

function createBaseCMsgSystemAudioManagerUpdateSomething(): CMsgSystemAudioManagerUpdateSomething {
  return { counter: 0 };
}

export const CMsgSystemAudioManagerUpdateSomething = {
  encode(message: CMsgSystemAudioManagerUpdateSomething, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counter !== 0) {
      writer.uint32(8).int32(message.counter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemAudioManagerUpdateSomething {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemAudioManagerUpdateSomething();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counter = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemAudioManagerUpdateSomething {
    return { counter: isSet(object.counter) ? Number(object.counter) : 0 };
  },

  toJSON(message: CMsgSystemAudioManagerUpdateSomething): unknown {
    const obj: any = {};
    message.counter !== undefined && (obj.counter = Math.round(message.counter));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemAudioManagerUpdateSomething>, I>>(
    base?: I,
  ): CMsgSystemAudioManagerUpdateSomething {
    return CMsgSystemAudioManagerUpdateSomething.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemAudioManagerUpdateSomething>, I>>(
    object: I,
  ): CMsgSystemAudioManagerUpdateSomething {
    const message = createBaseCMsgSystemAudioManagerUpdateSomething();
    message.counter = object.counter ?? 0;
    return message;
  },
};

function createBaseCMsgSystemDisplayMode(): CMsgSystemDisplayMode {
  return { id: 0, width: 0, height: 0, refreshHz: 0 };
}

export const CMsgSystemDisplayMode = {
  encode(message: CMsgSystemDisplayMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    if (message.refreshHz !== 0) {
      writer.uint32(32).int32(message.refreshHz);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDisplayMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDisplayMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.width = reader.int32();
          break;
        case 3:
          message.height = reader.int32();
          break;
        case 4:
          message.refreshHz = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDisplayMode {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      refreshHz: isSet(object.refreshHz) ? Number(object.refreshHz) : 0,
    };
  },

  toJSON(message: CMsgSystemDisplayMode): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.refreshHz !== undefined && (obj.refreshHz = Math.round(message.refreshHz));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDisplayMode>, I>>(base?: I): CMsgSystemDisplayMode {
    return CMsgSystemDisplayMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDisplayMode>, I>>(object: I): CMsgSystemDisplayMode {
    const message = createBaseCMsgSystemDisplayMode();
    message.id = object.id ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.refreshHz = object.refreshHz ?? 0;
    return message;
  },
};

function createBaseCMsgSystemDisplay(): CMsgSystemDisplay {
  return {
    id: 0,
    name: "",
    description: "",
    isPrimary: false,
    isEnabled: false,
    isInternal: false,
    hasModeOverride: false,
    widthMm: 0,
    heightMm: 0,
    currentModeId: 0,
    modes: [],
    refreshRateMin: 0,
    refreshRateMax: 0,
    isVrrCapable: false,
    isVrrEnabled: false,
    isHdrCapable: false,
    isHdrEnabled: false,
  };
}

export const CMsgSystemDisplay = {
  encode(message: CMsgSystemDisplay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.isPrimary === true) {
      writer.uint32(32).bool(message.isPrimary);
    }
    if (message.isEnabled === true) {
      writer.uint32(40).bool(message.isEnabled);
    }
    if (message.isInternal === true) {
      writer.uint32(48).bool(message.isInternal);
    }
    if (message.hasModeOverride === true) {
      writer.uint32(56).bool(message.hasModeOverride);
    }
    if (message.widthMm !== 0) {
      writer.uint32(64).int32(message.widthMm);
    }
    if (message.heightMm !== 0) {
      writer.uint32(72).int32(message.heightMm);
    }
    if (message.currentModeId !== 0) {
      writer.uint32(80).int32(message.currentModeId);
    }
    for (const v of message.modes) {
      CMsgSystemDisplayMode.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.refreshRateMin !== 0) {
      writer.uint32(96).int32(message.refreshRateMin);
    }
    if (message.refreshRateMax !== 0) {
      writer.uint32(104).int32(message.refreshRateMax);
    }
    if (message.isVrrCapable === true) {
      writer.uint32(112).bool(message.isVrrCapable);
    }
    if (message.isVrrEnabled === true) {
      writer.uint32(120).bool(message.isVrrEnabled);
    }
    if (message.isHdrCapable === true) {
      writer.uint32(128).bool(message.isHdrCapable);
    }
    if (message.isHdrEnabled === true) {
      writer.uint32(136).bool(message.isHdrEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDisplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDisplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.isPrimary = reader.bool();
          break;
        case 5:
          message.isEnabled = reader.bool();
          break;
        case 6:
          message.isInternal = reader.bool();
          break;
        case 7:
          message.hasModeOverride = reader.bool();
          break;
        case 8:
          message.widthMm = reader.int32();
          break;
        case 9:
          message.heightMm = reader.int32();
          break;
        case 10:
          message.currentModeId = reader.int32();
          break;
        case 11:
          message.modes.push(CMsgSystemDisplayMode.decode(reader, reader.uint32()));
          break;
        case 12:
          message.refreshRateMin = reader.int32();
          break;
        case 13:
          message.refreshRateMax = reader.int32();
          break;
        case 14:
          message.isVrrCapable = reader.bool();
          break;
        case 15:
          message.isVrrEnabled = reader.bool();
          break;
        case 16:
          message.isHdrCapable = reader.bool();
          break;
        case 17:
          message.isHdrEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDisplay {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      isPrimary: isSet(object.isPrimary) ? Boolean(object.isPrimary) : false,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isInternal: isSet(object.isInternal) ? Boolean(object.isInternal) : false,
      hasModeOverride: isSet(object.hasModeOverride) ? Boolean(object.hasModeOverride) : false,
      widthMm: isSet(object.widthMm) ? Number(object.widthMm) : 0,
      heightMm: isSet(object.heightMm) ? Number(object.heightMm) : 0,
      currentModeId: isSet(object.currentModeId) ? Number(object.currentModeId) : 0,
      modes: Array.isArray(object?.modes) ? object.modes.map((e: any) => CMsgSystemDisplayMode.fromJSON(e)) : [],
      refreshRateMin: isSet(object.refreshRateMin) ? Number(object.refreshRateMin) : 0,
      refreshRateMax: isSet(object.refreshRateMax) ? Number(object.refreshRateMax) : 0,
      isVrrCapable: isSet(object.isVrrCapable) ? Boolean(object.isVrrCapable) : false,
      isVrrEnabled: isSet(object.isVrrEnabled) ? Boolean(object.isVrrEnabled) : false,
      isHdrCapable: isSet(object.isHdrCapable) ? Boolean(object.isHdrCapable) : false,
      isHdrEnabled: isSet(object.isHdrEnabled) ? Boolean(object.isHdrEnabled) : false,
    };
  },

  toJSON(message: CMsgSystemDisplay): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.isPrimary !== undefined && (obj.isPrimary = message.isPrimary);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isInternal !== undefined && (obj.isInternal = message.isInternal);
    message.hasModeOverride !== undefined && (obj.hasModeOverride = message.hasModeOverride);
    message.widthMm !== undefined && (obj.widthMm = Math.round(message.widthMm));
    message.heightMm !== undefined && (obj.heightMm = Math.round(message.heightMm));
    message.currentModeId !== undefined && (obj.currentModeId = Math.round(message.currentModeId));
    if (message.modes) {
      obj.modes = message.modes.map((e) => e ? CMsgSystemDisplayMode.toJSON(e) : undefined);
    } else {
      obj.modes = [];
    }
    message.refreshRateMin !== undefined && (obj.refreshRateMin = Math.round(message.refreshRateMin));
    message.refreshRateMax !== undefined && (obj.refreshRateMax = Math.round(message.refreshRateMax));
    message.isVrrCapable !== undefined && (obj.isVrrCapable = message.isVrrCapable);
    message.isVrrEnabled !== undefined && (obj.isVrrEnabled = message.isVrrEnabled);
    message.isHdrCapable !== undefined && (obj.isHdrCapable = message.isHdrCapable);
    message.isHdrEnabled !== undefined && (obj.isHdrEnabled = message.isHdrEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDisplay>, I>>(base?: I): CMsgSystemDisplay {
    return CMsgSystemDisplay.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDisplay>, I>>(object: I): CMsgSystemDisplay {
    const message = createBaseCMsgSystemDisplay();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.isPrimary = object.isPrimary ?? false;
    message.isEnabled = object.isEnabled ?? false;
    message.isInternal = object.isInternal ?? false;
    message.hasModeOverride = object.hasModeOverride ?? false;
    message.widthMm = object.widthMm ?? 0;
    message.heightMm = object.heightMm ?? 0;
    message.currentModeId = object.currentModeId ?? 0;
    message.modes = object.modes?.map((e) => CMsgSystemDisplayMode.fromPartial(e)) || [];
    message.refreshRateMin = object.refreshRateMin ?? 0;
    message.refreshRateMax = object.refreshRateMax ?? 0;
    message.isVrrCapable = object.isVrrCapable ?? false;
    message.isVrrEnabled = object.isVrrEnabled ?? false;
    message.isHdrCapable = object.isHdrCapable ?? false;
    message.isHdrEnabled = object.isHdrEnabled ?? false;
    return message;
  },
};

function createBaseCMsgSystemDisplayManagerState(): CMsgSystemDisplayManagerState {
  return { displays: [], isModeSwitchingSupported: false, compatibilityMode: 0 };
}

export const CMsgSystemDisplayManagerState = {
  encode(message: CMsgSystemDisplayManagerState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.displays) {
      CMsgSystemDisplay.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.isModeSwitchingSupported === true) {
      writer.uint32(16).bool(message.isModeSwitchingSupported);
    }
    if (message.compatibilityMode !== 0) {
      writer.uint32(24).int32(message.compatibilityMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDisplayManagerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDisplayManagerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displays.push(CMsgSystemDisplay.decode(reader, reader.uint32()));
          break;
        case 2:
          message.isModeSwitchingSupported = reader.bool();
          break;
        case 3:
          message.compatibilityMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDisplayManagerState {
    return {
      displays: Array.isArray(object?.displays) ? object.displays.map((e: any) => CMsgSystemDisplay.fromJSON(e)) : [],
      isModeSwitchingSupported: isSet(object.isModeSwitchingSupported)
        ? Boolean(object.isModeSwitchingSupported)
        : false,
      compatibilityMode: isSet(object.compatibilityMode)
        ? eSystemDisplayCompatibilityModeFromJSON(object.compatibilityMode)
        : 0,
    };
  },

  toJSON(message: CMsgSystemDisplayManagerState): unknown {
    const obj: any = {};
    if (message.displays) {
      obj.displays = message.displays.map((e) => e ? CMsgSystemDisplay.toJSON(e) : undefined);
    } else {
      obj.displays = [];
    }
    message.isModeSwitchingSupported !== undefined && (obj.isModeSwitchingSupported = message.isModeSwitchingSupported);
    message.compatibilityMode !== undefined &&
      (obj.compatibilityMode = eSystemDisplayCompatibilityModeToJSON(message.compatibilityMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDisplayManagerState>, I>>(base?: I): CMsgSystemDisplayManagerState {
    return CMsgSystemDisplayManagerState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDisplayManagerState>, I>>(
    object: I,
  ): CMsgSystemDisplayManagerState {
    const message = createBaseCMsgSystemDisplayManagerState();
    message.displays = object.displays?.map((e) => CMsgSystemDisplay.fromPartial(e)) || [];
    message.isModeSwitchingSupported = object.isModeSwitchingSupported ?? false;
    message.compatibilityMode = object.compatibilityMode ?? 0;
    return message;
  },
};

function createBaseCMsgSystemDisplayManagerSetMode(): CMsgSystemDisplayManagerSetMode {
  return { displayId: 0, modeId: 0 };
}

export const CMsgSystemDisplayManagerSetMode = {
  encode(message: CMsgSystemDisplayManagerSetMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayId !== 0) {
      writer.uint32(8).int32(message.displayId);
    }
    if (message.modeId !== 0) {
      writer.uint32(16).int32(message.modeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemDisplayManagerSetMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemDisplayManagerSetMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayId = reader.int32();
          break;
        case 2:
          message.modeId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemDisplayManagerSetMode {
    return {
      displayId: isSet(object.displayId) ? Number(object.displayId) : 0,
      modeId: isSet(object.modeId) ? Number(object.modeId) : 0,
    };
  },

  toJSON(message: CMsgSystemDisplayManagerSetMode): unknown {
    const obj: any = {};
    message.displayId !== undefined && (obj.displayId = Math.round(message.displayId));
    message.modeId !== undefined && (obj.modeId = Math.round(message.modeId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemDisplayManagerSetMode>, I>>(base?: I): CMsgSystemDisplayManagerSetMode {
    return CMsgSystemDisplayManagerSetMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemDisplayManagerSetMode>, I>>(
    object: I,
  ): CMsgSystemDisplayManagerSetMode {
    const message = createBaseCMsgSystemDisplayManagerSetMode();
    message.displayId = object.displayId ?? 0;
    message.modeId = object.modeId ?? 0;
    return message;
  },
};

function createBaseCMsgSystemManagerSettings(): CMsgSystemManagerSettings {
  return {
    idleBacklightDimBatterySeconds: 0,
    idleBacklightDimAcSeconds: 0,
    idleSuspendBatterySeconds: 0,
    idleSuspendAcSeconds: 0,
    idleSuspendSupressed: false,
    isAdaptiveBrightnessAvailable: false,
    displayAdaptiveBrightnessEnabled: false,
    isDisplayColorprofileAvailable: false,
    displayColorprofile: 0,
    displayNightmodeEnabled: false,
    displayNightmodeTintstrength: 0,
    displayNightmodeMaxhue: 0,
    displayNightmodeMaxsat: 0,
    displayNightmodeUiexp: 0,
    displayNightmodeBlend: 0,
    displayNightmodeReset: false,
    displayNightmodeScheduleEnabled: false,
    displayNightmodeScheduleStarttime: 0,
    displayNightmodeScheduleEndtime: 0,
    displayDiagnosticsEnabled: false,
    alsLuxLatest: 0,
    alsLuxMedian: 0,
    displayBrightnessLinear: 0,
    displayBrightnessAdaptivemin: 0,
    displayBrightnessAdaptivemax: 0,
    isWifiPowersaveEnabled: false,
    isFanControlAvailable: false,
    fanControlMode: 0,
  };
}

export const CMsgSystemManagerSettings = {
  encode(message: CMsgSystemManagerSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idleBacklightDimBatterySeconds !== 0) {
      writer.uint32(13).float(message.idleBacklightDimBatterySeconds);
    }
    if (message.idleBacklightDimAcSeconds !== 0) {
      writer.uint32(21).float(message.idleBacklightDimAcSeconds);
    }
    if (message.idleSuspendBatterySeconds !== 0) {
      writer.uint32(29).float(message.idleSuspendBatterySeconds);
    }
    if (message.idleSuspendAcSeconds !== 0) {
      writer.uint32(37).float(message.idleSuspendAcSeconds);
    }
    if (message.idleSuspendSupressed === true) {
      writer.uint32(40).bool(message.idleSuspendSupressed);
    }
    if (message.isAdaptiveBrightnessAvailable === true) {
      writer.uint32(48).bool(message.isAdaptiveBrightnessAvailable);
    }
    if (message.displayAdaptiveBrightnessEnabled === true) {
      writer.uint32(56).bool(message.displayAdaptiveBrightnessEnabled);
    }
    if (message.isDisplayColorprofileAvailable === true) {
      writer.uint32(64).bool(message.isDisplayColorprofileAvailable);
    }
    if (message.displayColorprofile !== 0) {
      writer.uint32(72).int32(message.displayColorprofile);
    }
    if (message.displayNightmodeEnabled === true) {
      writer.uint32(80).bool(message.displayNightmodeEnabled);
    }
    if (message.displayNightmodeTintstrength !== 0) {
      writer.uint32(93).float(message.displayNightmodeTintstrength);
    }
    if (message.displayNightmodeMaxhue !== 0) {
      writer.uint32(101).float(message.displayNightmodeMaxhue);
    }
    if (message.displayNightmodeMaxsat !== 0) {
      writer.uint32(109).float(message.displayNightmodeMaxsat);
    }
    if (message.displayNightmodeUiexp !== 0) {
      writer.uint32(117).float(message.displayNightmodeUiexp);
    }
    if (message.displayNightmodeBlend !== 0) {
      writer.uint32(125).float(message.displayNightmodeBlend);
    }
    if (message.displayNightmodeReset === true) {
      writer.uint32(128).bool(message.displayNightmodeReset);
    }
    if (message.displayNightmodeScheduleEnabled === true) {
      writer.uint32(136).bool(message.displayNightmodeScheduleEnabled);
    }
    if (message.displayNightmodeScheduleStarttime !== 0) {
      writer.uint32(149).float(message.displayNightmodeScheduleStarttime);
    }
    if (message.displayNightmodeScheduleEndtime !== 0) {
      writer.uint32(157).float(message.displayNightmodeScheduleEndtime);
    }
    if (message.displayDiagnosticsEnabled === true) {
      writer.uint32(160).bool(message.displayDiagnosticsEnabled);
    }
    if (message.alsLuxLatest !== 0) {
      writer.uint32(173).float(message.alsLuxLatest);
    }
    if (message.alsLuxMedian !== 0) {
      writer.uint32(181).float(message.alsLuxMedian);
    }
    if (message.displayBrightnessLinear !== 0) {
      writer.uint32(189).float(message.displayBrightnessLinear);
    }
    if (message.displayBrightnessAdaptivemin !== 0) {
      writer.uint32(197).float(message.displayBrightnessAdaptivemin);
    }
    if (message.displayBrightnessAdaptivemax !== 0) {
      writer.uint32(205).float(message.displayBrightnessAdaptivemax);
    }
    if (message.isWifiPowersaveEnabled === true) {
      writer.uint32(208).bool(message.isWifiPowersaveEnabled);
    }
    if (message.isFanControlAvailable === true) {
      writer.uint32(216).bool(message.isFanControlAvailable);
    }
    if (message.fanControlMode !== 0) {
      writer.uint32(224).int32(message.fanControlMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemManagerSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemManagerSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idleBacklightDimBatterySeconds = reader.float();
          break;
        case 2:
          message.idleBacklightDimAcSeconds = reader.float();
          break;
        case 3:
          message.idleSuspendBatterySeconds = reader.float();
          break;
        case 4:
          message.idleSuspendAcSeconds = reader.float();
          break;
        case 5:
          message.idleSuspendSupressed = reader.bool();
          break;
        case 6:
          message.isAdaptiveBrightnessAvailable = reader.bool();
          break;
        case 7:
          message.displayAdaptiveBrightnessEnabled = reader.bool();
          break;
        case 8:
          message.isDisplayColorprofileAvailable = reader.bool();
          break;
        case 9:
          message.displayColorprofile = reader.int32() as any;
          break;
        case 10:
          message.displayNightmodeEnabled = reader.bool();
          break;
        case 11:
          message.displayNightmodeTintstrength = reader.float();
          break;
        case 12:
          message.displayNightmodeMaxhue = reader.float();
          break;
        case 13:
          message.displayNightmodeMaxsat = reader.float();
          break;
        case 14:
          message.displayNightmodeUiexp = reader.float();
          break;
        case 15:
          message.displayNightmodeBlend = reader.float();
          break;
        case 16:
          message.displayNightmodeReset = reader.bool();
          break;
        case 17:
          message.displayNightmodeScheduleEnabled = reader.bool();
          break;
        case 18:
          message.displayNightmodeScheduleStarttime = reader.float();
          break;
        case 19:
          message.displayNightmodeScheduleEndtime = reader.float();
          break;
        case 20:
          message.displayDiagnosticsEnabled = reader.bool();
          break;
        case 21:
          message.alsLuxLatest = reader.float();
          break;
        case 22:
          message.alsLuxMedian = reader.float();
          break;
        case 23:
          message.displayBrightnessLinear = reader.float();
          break;
        case 24:
          message.displayBrightnessAdaptivemin = reader.float();
          break;
        case 25:
          message.displayBrightnessAdaptivemax = reader.float();
          break;
        case 26:
          message.isWifiPowersaveEnabled = reader.bool();
          break;
        case 27:
          message.isFanControlAvailable = reader.bool();
          break;
        case 28:
          message.fanControlMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemManagerSettings {
    return {
      idleBacklightDimBatterySeconds: isSet(object.idleBacklightDimBatterySeconds)
        ? Number(object.idleBacklightDimBatterySeconds)
        : 0,
      idleBacklightDimAcSeconds: isSet(object.idleBacklightDimAcSeconds) ? Number(object.idleBacklightDimAcSeconds) : 0,
      idleSuspendBatterySeconds: isSet(object.idleSuspendBatterySeconds) ? Number(object.idleSuspendBatterySeconds) : 0,
      idleSuspendAcSeconds: isSet(object.idleSuspendAcSeconds) ? Number(object.idleSuspendAcSeconds) : 0,
      idleSuspendSupressed: isSet(object.idleSuspendSupressed) ? Boolean(object.idleSuspendSupressed) : false,
      isAdaptiveBrightnessAvailable: isSet(object.isAdaptiveBrightnessAvailable)
        ? Boolean(object.isAdaptiveBrightnessAvailable)
        : false,
      displayAdaptiveBrightnessEnabled: isSet(object.displayAdaptiveBrightnessEnabled)
        ? Boolean(object.displayAdaptiveBrightnessEnabled)
        : false,
      isDisplayColorprofileAvailable: isSet(object.isDisplayColorprofileAvailable)
        ? Boolean(object.isDisplayColorprofileAvailable)
        : false,
      displayColorprofile: isSet(object.displayColorprofile) ? eColorProfileFromJSON(object.displayColorprofile) : 0,
      displayNightmodeEnabled: isSet(object.displayNightmodeEnabled) ? Boolean(object.displayNightmodeEnabled) : false,
      displayNightmodeTintstrength: isSet(object.displayNightmodeTintstrength)
        ? Number(object.displayNightmodeTintstrength)
        : 0,
      displayNightmodeMaxhue: isSet(object.displayNightmodeMaxhue) ? Number(object.displayNightmodeMaxhue) : 0,
      displayNightmodeMaxsat: isSet(object.displayNightmodeMaxsat) ? Number(object.displayNightmodeMaxsat) : 0,
      displayNightmodeUiexp: isSet(object.displayNightmodeUiexp) ? Number(object.displayNightmodeUiexp) : 0,
      displayNightmodeBlend: isSet(object.displayNightmodeBlend) ? Number(object.displayNightmodeBlend) : 0,
      displayNightmodeReset: isSet(object.displayNightmodeReset) ? Boolean(object.displayNightmodeReset) : false,
      displayNightmodeScheduleEnabled: isSet(object.displayNightmodeScheduleEnabled)
        ? Boolean(object.displayNightmodeScheduleEnabled)
        : false,
      displayNightmodeScheduleStarttime: isSet(object.displayNightmodeScheduleStarttime)
        ? Number(object.displayNightmodeScheduleStarttime)
        : 0,
      displayNightmodeScheduleEndtime: isSet(object.displayNightmodeScheduleEndtime)
        ? Number(object.displayNightmodeScheduleEndtime)
        : 0,
      displayDiagnosticsEnabled: isSet(object.displayDiagnosticsEnabled)
        ? Boolean(object.displayDiagnosticsEnabled)
        : false,
      alsLuxLatest: isSet(object.alsLuxLatest) ? Number(object.alsLuxLatest) : 0,
      alsLuxMedian: isSet(object.alsLuxMedian) ? Number(object.alsLuxMedian) : 0,
      displayBrightnessLinear: isSet(object.displayBrightnessLinear) ? Number(object.displayBrightnessLinear) : 0,
      displayBrightnessAdaptivemin: isSet(object.displayBrightnessAdaptivemin)
        ? Number(object.displayBrightnessAdaptivemin)
        : 0,
      displayBrightnessAdaptivemax: isSet(object.displayBrightnessAdaptivemax)
        ? Number(object.displayBrightnessAdaptivemax)
        : 0,
      isWifiPowersaveEnabled: isSet(object.isWifiPowersaveEnabled) ? Boolean(object.isWifiPowersaveEnabled) : false,
      isFanControlAvailable: isSet(object.isFanControlAvailable) ? Boolean(object.isFanControlAvailable) : false,
      fanControlMode: isSet(object.fanControlMode) ? eSystemFanControlModeFromJSON(object.fanControlMode) : 0,
    };
  },

  toJSON(message: CMsgSystemManagerSettings): unknown {
    const obj: any = {};
    message.idleBacklightDimBatterySeconds !== undefined &&
      (obj.idleBacklightDimBatterySeconds = message.idleBacklightDimBatterySeconds);
    message.idleBacklightDimAcSeconds !== undefined &&
      (obj.idleBacklightDimAcSeconds = message.idleBacklightDimAcSeconds);
    message.idleSuspendBatterySeconds !== undefined &&
      (obj.idleSuspendBatterySeconds = message.idleSuspendBatterySeconds);
    message.idleSuspendAcSeconds !== undefined && (obj.idleSuspendAcSeconds = message.idleSuspendAcSeconds);
    message.idleSuspendSupressed !== undefined && (obj.idleSuspendSupressed = message.idleSuspendSupressed);
    message.isAdaptiveBrightnessAvailable !== undefined &&
      (obj.isAdaptiveBrightnessAvailable = message.isAdaptiveBrightnessAvailable);
    message.displayAdaptiveBrightnessEnabled !== undefined &&
      (obj.displayAdaptiveBrightnessEnabled = message.displayAdaptiveBrightnessEnabled);
    message.isDisplayColorprofileAvailable !== undefined &&
      (obj.isDisplayColorprofileAvailable = message.isDisplayColorprofileAvailable);
    message.displayColorprofile !== undefined &&
      (obj.displayColorprofile = eColorProfileToJSON(message.displayColorprofile));
    message.displayNightmodeEnabled !== undefined && (obj.displayNightmodeEnabled = message.displayNightmodeEnabled);
    message.displayNightmodeTintstrength !== undefined &&
      (obj.displayNightmodeTintstrength = message.displayNightmodeTintstrength);
    message.displayNightmodeMaxhue !== undefined && (obj.displayNightmodeMaxhue = message.displayNightmodeMaxhue);
    message.displayNightmodeMaxsat !== undefined && (obj.displayNightmodeMaxsat = message.displayNightmodeMaxsat);
    message.displayNightmodeUiexp !== undefined && (obj.displayNightmodeUiexp = message.displayNightmodeUiexp);
    message.displayNightmodeBlend !== undefined && (obj.displayNightmodeBlend = message.displayNightmodeBlend);
    message.displayNightmodeReset !== undefined && (obj.displayNightmodeReset = message.displayNightmodeReset);
    message.displayNightmodeScheduleEnabled !== undefined &&
      (obj.displayNightmodeScheduleEnabled = message.displayNightmodeScheduleEnabled);
    message.displayNightmodeScheduleStarttime !== undefined &&
      (obj.displayNightmodeScheduleStarttime = message.displayNightmodeScheduleStarttime);
    message.displayNightmodeScheduleEndtime !== undefined &&
      (obj.displayNightmodeScheduleEndtime = message.displayNightmodeScheduleEndtime);
    message.displayDiagnosticsEnabled !== undefined &&
      (obj.displayDiagnosticsEnabled = message.displayDiagnosticsEnabled);
    message.alsLuxLatest !== undefined && (obj.alsLuxLatest = message.alsLuxLatest);
    message.alsLuxMedian !== undefined && (obj.alsLuxMedian = message.alsLuxMedian);
    message.displayBrightnessLinear !== undefined && (obj.displayBrightnessLinear = message.displayBrightnessLinear);
    message.displayBrightnessAdaptivemin !== undefined &&
      (obj.displayBrightnessAdaptivemin = message.displayBrightnessAdaptivemin);
    message.displayBrightnessAdaptivemax !== undefined &&
      (obj.displayBrightnessAdaptivemax = message.displayBrightnessAdaptivemax);
    message.isWifiPowersaveEnabled !== undefined && (obj.isWifiPowersaveEnabled = message.isWifiPowersaveEnabled);
    message.isFanControlAvailable !== undefined && (obj.isFanControlAvailable = message.isFanControlAvailable);
    message.fanControlMode !== undefined && (obj.fanControlMode = eSystemFanControlModeToJSON(message.fanControlMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemManagerSettings>, I>>(base?: I): CMsgSystemManagerSettings {
    return CMsgSystemManagerSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemManagerSettings>, I>>(object: I): CMsgSystemManagerSettings {
    const message = createBaseCMsgSystemManagerSettings();
    message.idleBacklightDimBatterySeconds = object.idleBacklightDimBatterySeconds ?? 0;
    message.idleBacklightDimAcSeconds = object.idleBacklightDimAcSeconds ?? 0;
    message.idleSuspendBatterySeconds = object.idleSuspendBatterySeconds ?? 0;
    message.idleSuspendAcSeconds = object.idleSuspendAcSeconds ?? 0;
    message.idleSuspendSupressed = object.idleSuspendSupressed ?? false;
    message.isAdaptiveBrightnessAvailable = object.isAdaptiveBrightnessAvailable ?? false;
    message.displayAdaptiveBrightnessEnabled = object.displayAdaptiveBrightnessEnabled ?? false;
    message.isDisplayColorprofileAvailable = object.isDisplayColorprofileAvailable ?? false;
    message.displayColorprofile = object.displayColorprofile ?? 0;
    message.displayNightmodeEnabled = object.displayNightmodeEnabled ?? false;
    message.displayNightmodeTintstrength = object.displayNightmodeTintstrength ?? 0;
    message.displayNightmodeMaxhue = object.displayNightmodeMaxhue ?? 0;
    message.displayNightmodeMaxsat = object.displayNightmodeMaxsat ?? 0;
    message.displayNightmodeUiexp = object.displayNightmodeUiexp ?? 0;
    message.displayNightmodeBlend = object.displayNightmodeBlend ?? 0;
    message.displayNightmodeReset = object.displayNightmodeReset ?? false;
    message.displayNightmodeScheduleEnabled = object.displayNightmodeScheduleEnabled ?? false;
    message.displayNightmodeScheduleStarttime = object.displayNightmodeScheduleStarttime ?? 0;
    message.displayNightmodeScheduleEndtime = object.displayNightmodeScheduleEndtime ?? 0;
    message.displayDiagnosticsEnabled = object.displayDiagnosticsEnabled ?? false;
    message.alsLuxLatest = object.alsLuxLatest ?? 0;
    message.alsLuxMedian = object.alsLuxMedian ?? 0;
    message.displayBrightnessLinear = object.displayBrightnessLinear ?? 0;
    message.displayBrightnessAdaptivemin = object.displayBrightnessAdaptivemin ?? 0;
    message.displayBrightnessAdaptivemax = object.displayBrightnessAdaptivemax ?? 0;
    message.isWifiPowersaveEnabled = object.isWifiPowersaveEnabled ?? false;
    message.isFanControlAvailable = object.isFanControlAvailable ?? false;
    message.fanControlMode = object.fanControlMode ?? 0;
    return message;
  },
};

function createBaseCMsgSelectOSBranchParams(): CMsgSelectOSBranchParams {
  return { branch: 0, customBranch: "" };
}

export const CMsgSelectOSBranchParams = {
  encode(message: CMsgSelectOSBranchParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.branch !== 0) {
      writer.uint32(8).int32(message.branch);
    }
    if (message.customBranch !== "") {
      writer.uint32(18).string(message.customBranch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSelectOSBranchParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSelectOSBranchParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.branch = reader.int32() as any;
          break;
        case 2:
          message.customBranch = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSelectOSBranchParams {
    return {
      branch: isSet(object.branch) ? eOSBranchFromJSON(object.branch) : 0,
      customBranch: isSet(object.customBranch) ? String(object.customBranch) : "",
    };
  },

  toJSON(message: CMsgSelectOSBranchParams): unknown {
    const obj: any = {};
    message.branch !== undefined && (obj.branch = eOSBranchToJSON(message.branch));
    message.customBranch !== undefined && (obj.customBranch = message.customBranch);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSelectOSBranchParams>, I>>(base?: I): CMsgSelectOSBranchParams {
    return CMsgSelectOSBranchParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSelectOSBranchParams>, I>>(object: I): CMsgSelectOSBranchParams {
    const message = createBaseCMsgSelectOSBranchParams();
    message.branch = object.branch ?? 0;
    message.customBranch = object.customBranch ?? "";
    return message;
  },
};

function createBaseCMsgSystemUpdateProgress(): CMsgSystemUpdateProgress {
  return { stageProgress: 0, stageSizeBytes: "0", rtimeEstimatedCompletion: 0 };
}

export const CMsgSystemUpdateProgress = {
  encode(message: CMsgSystemUpdateProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stageProgress !== 0) {
      writer.uint32(13).float(message.stageProgress);
    }
    if (message.stageSizeBytes !== "0") {
      writer.uint32(16).int64(message.stageSizeBytes);
    }
    if (message.rtimeEstimatedCompletion !== 0) {
      writer.uint32(29).fixed32(message.rtimeEstimatedCompletion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemUpdateProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemUpdateProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stageProgress = reader.float();
          break;
        case 2:
          message.stageSizeBytes = longToString(reader.int64() as Long);
          break;
        case 3:
          message.rtimeEstimatedCompletion = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemUpdateProgress {
    return {
      stageProgress: isSet(object.stageProgress) ? Number(object.stageProgress) : 0,
      stageSizeBytes: isSet(object.stageSizeBytes) ? String(object.stageSizeBytes) : "0",
      rtimeEstimatedCompletion: isSet(object.rtimeEstimatedCompletion) ? Number(object.rtimeEstimatedCompletion) : 0,
    };
  },

  toJSON(message: CMsgSystemUpdateProgress): unknown {
    const obj: any = {};
    message.stageProgress !== undefined && (obj.stageProgress = message.stageProgress);
    message.stageSizeBytes !== undefined && (obj.stageSizeBytes = message.stageSizeBytes);
    message.rtimeEstimatedCompletion !== undefined &&
      (obj.rtimeEstimatedCompletion = Math.round(message.rtimeEstimatedCompletion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemUpdateProgress>, I>>(base?: I): CMsgSystemUpdateProgress {
    return CMsgSystemUpdateProgress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemUpdateProgress>, I>>(object: I): CMsgSystemUpdateProgress {
    const message = createBaseCMsgSystemUpdateProgress();
    message.stageProgress = object.stageProgress ?? 0;
    message.stageSizeBytes = object.stageSizeBytes ?? "0";
    message.rtimeEstimatedCompletion = object.rtimeEstimatedCompletion ?? 0;
    return message;
  },
};

function createBaseCMsgSystemUpdateCheckResult(): CMsgSystemUpdateCheckResult {
  return { type: 0, eresult: 0, rtimeChecked: 0, available: false, version: "" };
}

export const CMsgSystemUpdateCheckResult = {
  encode(message: CMsgSystemUpdateCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.rtimeChecked !== 0) {
      writer.uint32(29).fixed32(message.rtimeChecked);
    }
    if (message.available === true) {
      writer.uint32(32).bool(message.available);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemUpdateCheckResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemUpdateCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.rtimeChecked = reader.fixed32();
          break;
        case 4:
          message.available = reader.bool();
          break;
        case 5:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemUpdateCheckResult {
    return {
      type: isSet(object.type) ? eUpdaterTypeFromJSON(object.type) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      rtimeChecked: isSet(object.rtimeChecked) ? Number(object.rtimeChecked) : 0,
      available: isSet(object.available) ? Boolean(object.available) : false,
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: CMsgSystemUpdateCheckResult): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eUpdaterTypeToJSON(message.type));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.rtimeChecked !== undefined && (obj.rtimeChecked = Math.round(message.rtimeChecked));
    message.available !== undefined && (obj.available = message.available);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemUpdateCheckResult>, I>>(base?: I): CMsgSystemUpdateCheckResult {
    return CMsgSystemUpdateCheckResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemUpdateCheckResult>, I>>(object: I): CMsgSystemUpdateCheckResult {
    const message = createBaseCMsgSystemUpdateCheckResult();
    message.type = object.type ?? 0;
    message.eresult = object.eresult ?? 0;
    message.rtimeChecked = object.rtimeChecked ?? 0;
    message.available = object.available ?? false;
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseCMsgSystemUpdateApplyParams(): CMsgSystemUpdateApplyParams {
  return { applyTypes: [] };
}

export const CMsgSystemUpdateApplyParams = {
  encode(message: CMsgSystemUpdateApplyParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.applyTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemUpdateApplyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemUpdateApplyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.applyTypes.push(reader.int32() as any);
            }
          } else {
            message.applyTypes.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemUpdateApplyParams {
    return {
      applyTypes: Array.isArray(object?.applyTypes) ? object.applyTypes.map((e: any) => eUpdaterTypeFromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgSystemUpdateApplyParams): unknown {
    const obj: any = {};
    if (message.applyTypes) {
      obj.applyTypes = message.applyTypes.map((e) => eUpdaterTypeToJSON(e));
    } else {
      obj.applyTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemUpdateApplyParams>, I>>(base?: I): CMsgSystemUpdateApplyParams {
    return CMsgSystemUpdateApplyParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemUpdateApplyParams>, I>>(object: I): CMsgSystemUpdateApplyParams {
    const message = createBaseCMsgSystemUpdateApplyParams();
    message.applyTypes = object.applyTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgSystemUpdateApplyResult(): CMsgSystemUpdateApplyResult {
  return { type: 0, eresult: 0, requiresClientRestart: false, requiresSystemRestart: false };
}

export const CMsgSystemUpdateApplyResult = {
  encode(message: CMsgSystemUpdateApplyResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).uint32(message.eresult);
    }
    if (message.requiresClientRestart === true) {
      writer.uint32(24).bool(message.requiresClientRestart);
    }
    if (message.requiresSystemRestart === true) {
      writer.uint32(32).bool(message.requiresSystemRestart);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemUpdateApplyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemUpdateApplyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.eresult = reader.uint32();
          break;
        case 3:
          message.requiresClientRestart = reader.bool();
          break;
        case 4:
          message.requiresSystemRestart = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemUpdateApplyResult {
    return {
      type: isSet(object.type) ? eUpdaterTypeFromJSON(object.type) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      requiresClientRestart: isSet(object.requiresClientRestart) ? Boolean(object.requiresClientRestart) : false,
      requiresSystemRestart: isSet(object.requiresSystemRestart) ? Boolean(object.requiresSystemRestart) : false,
    };
  },

  toJSON(message: CMsgSystemUpdateApplyResult): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eUpdaterTypeToJSON(message.type));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.requiresClientRestart !== undefined && (obj.requiresClientRestart = message.requiresClientRestart);
    message.requiresSystemRestart !== undefined && (obj.requiresSystemRestart = message.requiresSystemRestart);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemUpdateApplyResult>, I>>(base?: I): CMsgSystemUpdateApplyResult {
    return CMsgSystemUpdateApplyResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemUpdateApplyResult>, I>>(object: I): CMsgSystemUpdateApplyResult {
    const message = createBaseCMsgSystemUpdateApplyResult();
    message.type = object.type ?? 0;
    message.eresult = object.eresult ?? 0;
    message.requiresClientRestart = object.requiresClientRestart ?? false;
    message.requiresSystemRestart = object.requiresSystemRestart ?? false;
    return message;
  },
};

function createBaseCMsgSystemUpdateState(): CMsgSystemUpdateState {
  return { state: 0, progress: undefined, updateCheckResults: [], updateApplyResults: [], supportsOsUpdates: false };
}

export const CMsgSystemUpdateState = {
  encode(message: CMsgSystemUpdateState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.progress !== undefined) {
      CMsgSystemUpdateProgress.encode(message.progress, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.updateCheckResults) {
      CMsgSystemUpdateCheckResult.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.updateApplyResults) {
      CMsgSystemUpdateApplyResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.supportsOsUpdates === true) {
      writer.uint32(40).bool(message.supportsOsUpdates);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSystemUpdateState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSystemUpdateState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.progress = CMsgSystemUpdateProgress.decode(reader, reader.uint32());
          break;
        case 3:
          message.updateCheckResults.push(CMsgSystemUpdateCheckResult.decode(reader, reader.uint32()));
          break;
        case 4:
          message.updateApplyResults.push(CMsgSystemUpdateApplyResult.decode(reader, reader.uint32()));
          break;
        case 5:
          message.supportsOsUpdates = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSystemUpdateState {
    return {
      state: isSet(object.state) ? eUpdaterStateFromJSON(object.state) : 0,
      progress: isSet(object.progress) ? CMsgSystemUpdateProgress.fromJSON(object.progress) : undefined,
      updateCheckResults: Array.isArray(object?.updateCheckResults)
        ? object.updateCheckResults.map((e: any) => CMsgSystemUpdateCheckResult.fromJSON(e))
        : [],
      updateApplyResults: Array.isArray(object?.updateApplyResults)
        ? object.updateApplyResults.map((e: any) => CMsgSystemUpdateApplyResult.fromJSON(e))
        : [],
      supportsOsUpdates: isSet(object.supportsOsUpdates) ? Boolean(object.supportsOsUpdates) : false,
    };
  },

  toJSON(message: CMsgSystemUpdateState): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = eUpdaterStateToJSON(message.state));
    message.progress !== undefined &&
      (obj.progress = message.progress ? CMsgSystemUpdateProgress.toJSON(message.progress) : undefined);
    if (message.updateCheckResults) {
      obj.updateCheckResults = message.updateCheckResults.map((e) =>
        e ? CMsgSystemUpdateCheckResult.toJSON(e) : undefined
      );
    } else {
      obj.updateCheckResults = [];
    }
    if (message.updateApplyResults) {
      obj.updateApplyResults = message.updateApplyResults.map((e) =>
        e ? CMsgSystemUpdateApplyResult.toJSON(e) : undefined
      );
    } else {
      obj.updateApplyResults = [];
    }
    message.supportsOsUpdates !== undefined && (obj.supportsOsUpdates = message.supportsOsUpdates);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSystemUpdateState>, I>>(base?: I): CMsgSystemUpdateState {
    return CMsgSystemUpdateState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSystemUpdateState>, I>>(object: I): CMsgSystemUpdateState {
    const message = createBaseCMsgSystemUpdateState();
    message.state = object.state ?? 0;
    message.progress = (object.progress !== undefined && object.progress !== null)
      ? CMsgSystemUpdateProgress.fromPartial(object.progress)
      : undefined;
    message.updateCheckResults = object.updateCheckResults?.map((e) => CMsgSystemUpdateCheckResult.fromPartial(e)) ||
      [];
    message.updateApplyResults = object.updateApplyResults?.map((e) => CMsgSystemUpdateApplyResult.fromPartial(e)) ||
      [];
    message.supportsOsUpdates = object.supportsOsUpdates ?? false;
    return message;
  },
};

function createBaseCMsgAchievementChange(): CMsgAchievementChange {
  return { appid: 0 };
}

export const CMsgAchievementChange = {
  encode(message: CMsgAchievementChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAchievementChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAchievementChange();
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

  fromJSON(object: any): CMsgAchievementChange {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CMsgAchievementChange): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAchievementChange>, I>>(base?: I): CMsgAchievementChange {
    return CMsgAchievementChange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAchievementChange>, I>>(object: I): CMsgAchievementChange {
    const message = createBaseCMsgAchievementChange();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCMsgCellList(): CMsgCellList {
  return { cells: [] };
}

export const CMsgCellList = {
  encode(message: CMsgCellList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cells) {
      CMsgCellList_Cell.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCellList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCellList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cells.push(CMsgCellList_Cell.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCellList {
    return { cells: Array.isArray(object?.cells) ? object.cells.map((e: any) => CMsgCellList_Cell.fromJSON(e)) : [] };
  },

  toJSON(message: CMsgCellList): unknown {
    const obj: any = {};
    if (message.cells) {
      obj.cells = message.cells.map((e) => e ? CMsgCellList_Cell.toJSON(e) : undefined);
    } else {
      obj.cells = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCellList>, I>>(base?: I): CMsgCellList {
    return CMsgCellList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCellList>, I>>(object: I): CMsgCellList {
    const message = createBaseCMsgCellList();
    message.cells = object.cells?.map((e) => CMsgCellList_Cell.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgCellList_Cell(): CMsgCellList_Cell {
  return { cellId: 0, locName: "" };
}

export const CMsgCellList_Cell = {
  encode(message: CMsgCellList_Cell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cellId !== 0) {
      writer.uint32(8).uint32(message.cellId);
    }
    if (message.locName !== "") {
      writer.uint32(18).string(message.locName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCellList_Cell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCellList_Cell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cellId = reader.uint32();
          break;
        case 2:
          message.locName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCellList_Cell {
    return {
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      locName: isSet(object.locName) ? String(object.locName) : "",
    };
  },

  toJSON(message: CMsgCellList_Cell): unknown {
    const obj: any = {};
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.locName !== undefined && (obj.locName = message.locName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCellList_Cell>, I>>(base?: I): CMsgCellList_Cell {
    return CMsgCellList_Cell.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCellList_Cell>, I>>(object: I): CMsgCellList_Cell {
    const message = createBaseCMsgCellList_Cell();
    message.cellId = object.cellId ?? 0;
    message.locName = object.locName ?? "";
    return message;
  },
};

function createBaseCMsgShortcutInfo(): CMsgShortcutInfo {
  return {
    appid: 0,
    exe: "",
    startDir: "",
    icon: "",
    path: "",
    args: "",
    appName: "",
    overrideAppid: 0,
    flatpakAppid: "",
    tags: [],
    isRemote: false,
    isHidden: false,
    isTemporary: false,
    isOpenvr: false,
    allowDesktopConfig: false,
    allowOverlay: false,
    rtLastPlayedTime: 0,
    isDevkitShortcut: false,
    devkitGameid: "",
  };
}

export const CMsgShortcutInfo = {
  encode(message: CMsgShortcutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.exe !== "") {
      writer.uint32(18).string(message.exe);
    }
    if (message.startDir !== "") {
      writer.uint32(26).string(message.startDir);
    }
    if (message.icon !== "") {
      writer.uint32(34).string(message.icon);
    }
    if (message.path !== "") {
      writer.uint32(42).string(message.path);
    }
    if (message.args !== "") {
      writer.uint32(50).string(message.args);
    }
    if (message.appName !== "") {
      writer.uint32(58).string(message.appName);
    }
    if (message.overrideAppid !== 0) {
      writer.uint32(64).uint32(message.overrideAppid);
    }
    if (message.flatpakAppid !== "") {
      writer.uint32(74).string(message.flatpakAppid);
    }
    for (const v of message.tags) {
      writer.uint32(82).string(v!);
    }
    if (message.isRemote === true) {
      writer.uint32(88).bool(message.isRemote);
    }
    if (message.isHidden === true) {
      writer.uint32(96).bool(message.isHidden);
    }
    if (message.isTemporary === true) {
      writer.uint32(104).bool(message.isTemporary);
    }
    if (message.isOpenvr === true) {
      writer.uint32(112).bool(message.isOpenvr);
    }
    if (message.allowDesktopConfig === true) {
      writer.uint32(120).bool(message.allowDesktopConfig);
    }
    if (message.allowOverlay === true) {
      writer.uint32(128).bool(message.allowOverlay);
    }
    if (message.rtLastPlayedTime !== 0) {
      writer.uint32(136).uint32(message.rtLastPlayedTime);
    }
    if (message.isDevkitShortcut === true) {
      writer.uint32(144).bool(message.isDevkitShortcut);
    }
    if (message.devkitGameid !== "") {
      writer.uint32(154).string(message.devkitGameid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShortcutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShortcutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.exe = reader.string();
          break;
        case 3:
          message.startDir = reader.string();
          break;
        case 4:
          message.icon = reader.string();
          break;
        case 5:
          message.path = reader.string();
          break;
        case 6:
          message.args = reader.string();
          break;
        case 7:
          message.appName = reader.string();
          break;
        case 8:
          message.overrideAppid = reader.uint32();
          break;
        case 9:
          message.flatpakAppid = reader.string();
          break;
        case 10:
          message.tags.push(reader.string());
          break;
        case 11:
          message.isRemote = reader.bool();
          break;
        case 12:
          message.isHidden = reader.bool();
          break;
        case 13:
          message.isTemporary = reader.bool();
          break;
        case 14:
          message.isOpenvr = reader.bool();
          break;
        case 15:
          message.allowDesktopConfig = reader.bool();
          break;
        case 16:
          message.allowOverlay = reader.bool();
          break;
        case 17:
          message.rtLastPlayedTime = reader.uint32();
          break;
        case 18:
          message.isDevkitShortcut = reader.bool();
          break;
        case 19:
          message.devkitGameid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShortcutInfo {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      exe: isSet(object.exe) ? String(object.exe) : "",
      startDir: isSet(object.startDir) ? String(object.startDir) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      path: isSet(object.path) ? String(object.path) : "",
      args: isSet(object.args) ? String(object.args) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      overrideAppid: isSet(object.overrideAppid) ? Number(object.overrideAppid) : 0,
      flatpakAppid: isSet(object.flatpakAppid) ? String(object.flatpakAppid) : "",
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
      isRemote: isSet(object.isRemote) ? Boolean(object.isRemote) : false,
      isHidden: isSet(object.isHidden) ? Boolean(object.isHidden) : false,
      isTemporary: isSet(object.isTemporary) ? Boolean(object.isTemporary) : false,
      isOpenvr: isSet(object.isOpenvr) ? Boolean(object.isOpenvr) : false,
      allowDesktopConfig: isSet(object.allowDesktopConfig) ? Boolean(object.allowDesktopConfig) : false,
      allowOverlay: isSet(object.allowOverlay) ? Boolean(object.allowOverlay) : false,
      rtLastPlayedTime: isSet(object.rtLastPlayedTime) ? Number(object.rtLastPlayedTime) : 0,
      isDevkitShortcut: isSet(object.isDevkitShortcut) ? Boolean(object.isDevkitShortcut) : false,
      devkitGameid: isSet(object.devkitGameid) ? String(object.devkitGameid) : "",
    };
  },

  toJSON(message: CMsgShortcutInfo): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.exe !== undefined && (obj.exe = message.exe);
    message.startDir !== undefined && (obj.startDir = message.startDir);
    message.icon !== undefined && (obj.icon = message.icon);
    message.path !== undefined && (obj.path = message.path);
    message.args !== undefined && (obj.args = message.args);
    message.appName !== undefined && (obj.appName = message.appName);
    message.overrideAppid !== undefined && (obj.overrideAppid = Math.round(message.overrideAppid));
    message.flatpakAppid !== undefined && (obj.flatpakAppid = message.flatpakAppid);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.isRemote !== undefined && (obj.isRemote = message.isRemote);
    message.isHidden !== undefined && (obj.isHidden = message.isHidden);
    message.isTemporary !== undefined && (obj.isTemporary = message.isTemporary);
    message.isOpenvr !== undefined && (obj.isOpenvr = message.isOpenvr);
    message.allowDesktopConfig !== undefined && (obj.allowDesktopConfig = message.allowDesktopConfig);
    message.allowOverlay !== undefined && (obj.allowOverlay = message.allowOverlay);
    message.rtLastPlayedTime !== undefined && (obj.rtLastPlayedTime = Math.round(message.rtLastPlayedTime));
    message.isDevkitShortcut !== undefined && (obj.isDevkitShortcut = message.isDevkitShortcut);
    message.devkitGameid !== undefined && (obj.devkitGameid = message.devkitGameid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShortcutInfo>, I>>(base?: I): CMsgShortcutInfo {
    return CMsgShortcutInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShortcutInfo>, I>>(object: I): CMsgShortcutInfo {
    const message = createBaseCMsgShortcutInfo();
    message.appid = object.appid ?? 0;
    message.exe = object.exe ?? "";
    message.startDir = object.startDir ?? "";
    message.icon = object.icon ?? "";
    message.path = object.path ?? "";
    message.args = object.args ?? "";
    message.appName = object.appName ?? "";
    message.overrideAppid = object.overrideAppid ?? 0;
    message.flatpakAppid = object.flatpakAppid ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.isRemote = object.isRemote ?? false;
    message.isHidden = object.isHidden ?? false;
    message.isTemporary = object.isTemporary ?? false;
    message.isOpenvr = object.isOpenvr ?? false;
    message.allowDesktopConfig = object.allowDesktopConfig ?? false;
    message.allowOverlay = object.allowOverlay ?? false;
    message.rtLastPlayedTime = object.rtLastPlayedTime ?? 0;
    message.isDevkitShortcut = object.isDevkitShortcut ?? false;
    message.devkitGameid = object.devkitGameid ?? "";
    return message;
  },
};

function createBaseCMsgShortcutAppIds(): CMsgShortcutAppIds {
  return { appids: [] };
}

export const CMsgShortcutAppIds = {
  encode(message: CMsgShortcutAppIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShortcutAppIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShortcutAppIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appids.push(reader.uint32());
            }
          } else {
            message.appids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShortcutAppIds {
    return { appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CMsgShortcutAppIds): unknown {
    const obj: any = {};
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShortcutAppIds>, I>>(base?: I): CMsgShortcutAppIds {
    return CMsgShortcutAppIds.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShortcutAppIds>, I>>(object: I): CMsgShortcutAppIds {
    const message = createBaseCMsgShortcutAppIds();
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgMonitorInfo(): CMsgMonitorInfo {
  return { selectedDisplayName: "", monitors: [] };
}

export const CMsgMonitorInfo = {
  encode(message: CMsgMonitorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selectedDisplayName !== "") {
      writer.uint32(10).string(message.selectedDisplayName);
    }
    for (const v of message.monitors) {
      CMsgMonitorInfo_MonitorInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMonitorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMonitorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectedDisplayName = reader.string();
          break;
        case 2:
          message.monitors.push(CMsgMonitorInfo_MonitorInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMonitorInfo {
    return {
      selectedDisplayName: isSet(object.selectedDisplayName) ? String(object.selectedDisplayName) : "",
      monitors: Array.isArray(object?.monitors)
        ? object.monitors.map((e: any) => CMsgMonitorInfo_MonitorInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgMonitorInfo): unknown {
    const obj: any = {};
    message.selectedDisplayName !== undefined && (obj.selectedDisplayName = message.selectedDisplayName);
    if (message.monitors) {
      obj.monitors = message.monitors.map((e) => e ? CMsgMonitorInfo_MonitorInfo.toJSON(e) : undefined);
    } else {
      obj.monitors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMonitorInfo>, I>>(base?: I): CMsgMonitorInfo {
    return CMsgMonitorInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMonitorInfo>, I>>(object: I): CMsgMonitorInfo {
    const message = createBaseCMsgMonitorInfo();
    message.selectedDisplayName = object.selectedDisplayName ?? "";
    message.monitors = object.monitors?.map((e) => CMsgMonitorInfo_MonitorInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgMonitorInfo_MonitorInfo(): CMsgMonitorInfo_MonitorInfo {
  return { monitorDeviceName: "", monitorDisplayName: "" };
}

export const CMsgMonitorInfo_MonitorInfo = {
  encode(message: CMsgMonitorInfo_MonitorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitorDeviceName !== "") {
      writer.uint32(10).string(message.monitorDeviceName);
    }
    if (message.monitorDisplayName !== "") {
      writer.uint32(18).string(message.monitorDisplayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMonitorInfo_MonitorInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMonitorInfo_MonitorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monitorDeviceName = reader.string();
          break;
        case 2:
          message.monitorDisplayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMonitorInfo_MonitorInfo {
    return {
      monitorDeviceName: isSet(object.monitorDeviceName) ? String(object.monitorDeviceName) : "",
      monitorDisplayName: isSet(object.monitorDisplayName) ? String(object.monitorDisplayName) : "",
    };
  },

  toJSON(message: CMsgMonitorInfo_MonitorInfo): unknown {
    const obj: any = {};
    message.monitorDeviceName !== undefined && (obj.monitorDeviceName = message.monitorDeviceName);
    message.monitorDisplayName !== undefined && (obj.monitorDisplayName = message.monitorDisplayName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMonitorInfo_MonitorInfo>, I>>(base?: I): CMsgMonitorInfo_MonitorInfo {
    return CMsgMonitorInfo_MonitorInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMonitorInfo_MonitorInfo>, I>>(object: I): CMsgMonitorInfo_MonitorInfo {
    const message = createBaseCMsgMonitorInfo_MonitorInfo();
    message.monitorDeviceName = object.monitorDeviceName ?? "";
    message.monitorDisplayName = object.monitorDisplayName ?? "";
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
