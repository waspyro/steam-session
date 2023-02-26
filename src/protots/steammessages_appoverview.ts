/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ESteamDeckCompatibilityCategory,
  eSteamDeckCompatibilityCategoryFromJSON,
  eSteamDeckCompatibilityCategoryToJSON,
} from "./enums";

export const protobufPackage = "";

export enum EDisplayStatus {
  k_EDisplayStatusInvalid = 0,
  k_EDisplayStatusLaunching = 1,
  k_EDisplayStatusUninstalling = 2,
  k_EDisplayStatusInstalling = 3,
  k_EDisplayStatusRunning = 4,
  k_EDisplayStatusValidating = 5,
  k_EDisplayStatusUpdating = 6,
  k_EDisplayStatusDownloading = 7,
  k_EDisplayStatusSynchronizing = 8,
  k_EDisplayStatusReadyToInstall = 9,
  k_EDisplayStatusReadyToPreload = 10,
  k_EDisplayStatusReadyToLaunch = 11,
  k_EDisplayStatusRegionRestricted = 12,
  k_EDisplayStatusPresaleOnly = 13,
  k_EDisplayStatusInvalidPlatform = 14,
  k_EDisplayStatusPreloadComplete = 16,
  k_EDisplayStatusBorrowerLocked = 17,
  k_EDisplayStatusUpdatePaused = 18,
  k_EDisplayStatusUpdateQueued = 19,
  k_EDisplayStatusUpdateRequired = 20,
  k_EDisplayStatusUpdateDisabled = 21,
  k_EDisplayStatusDownloadPaused = 22,
  k_EDisplayStatusDownloadQueued = 23,
  k_EDisplayStatusDownloadRequired = 24,
  k_EDisplayStatusDownloadDisabled = 25,
  k_EDisplayStatusLicensePending = 26,
  k_EDisplayStatusLicenseExpired = 27,
  k_EDisplayStatusAvailForFree = 28,
  k_EDisplayStatusAvailToBorrow = 29,
  k_EDisplayStatusAvailGuestPass = 30,
  k_EDisplayStatusPurchase = 31,
  k_EDisplayStatusUnavailable = 32,
  k_EDisplayStatusNotLaunchable = 33,
  k_EDisplayStatusCloudError = 34,
  k_EDisplayStatusCloudOutOfDate = 35,
  k_EDisplayStatusTerminating = 36,
  UNRECOGNIZED = -1,
}

export function eDisplayStatusFromJSON(object: any): EDisplayStatus {
  switch (object) {
    case 0:
    case "k_EDisplayStatusInvalid":
      return EDisplayStatus.k_EDisplayStatusInvalid;
    case 1:
    case "k_EDisplayStatusLaunching":
      return EDisplayStatus.k_EDisplayStatusLaunching;
    case 2:
    case "k_EDisplayStatusUninstalling":
      return EDisplayStatus.k_EDisplayStatusUninstalling;
    case 3:
    case "k_EDisplayStatusInstalling":
      return EDisplayStatus.k_EDisplayStatusInstalling;
    case 4:
    case "k_EDisplayStatusRunning":
      return EDisplayStatus.k_EDisplayStatusRunning;
    case 5:
    case "k_EDisplayStatusValidating":
      return EDisplayStatus.k_EDisplayStatusValidating;
    case 6:
    case "k_EDisplayStatusUpdating":
      return EDisplayStatus.k_EDisplayStatusUpdating;
    case 7:
    case "k_EDisplayStatusDownloading":
      return EDisplayStatus.k_EDisplayStatusDownloading;
    case 8:
    case "k_EDisplayStatusSynchronizing":
      return EDisplayStatus.k_EDisplayStatusSynchronizing;
    case 9:
    case "k_EDisplayStatusReadyToInstall":
      return EDisplayStatus.k_EDisplayStatusReadyToInstall;
    case 10:
    case "k_EDisplayStatusReadyToPreload":
      return EDisplayStatus.k_EDisplayStatusReadyToPreload;
    case 11:
    case "k_EDisplayStatusReadyToLaunch":
      return EDisplayStatus.k_EDisplayStatusReadyToLaunch;
    case 12:
    case "k_EDisplayStatusRegionRestricted":
      return EDisplayStatus.k_EDisplayStatusRegionRestricted;
    case 13:
    case "k_EDisplayStatusPresaleOnly":
      return EDisplayStatus.k_EDisplayStatusPresaleOnly;
    case 14:
    case "k_EDisplayStatusInvalidPlatform":
      return EDisplayStatus.k_EDisplayStatusInvalidPlatform;
    case 16:
    case "k_EDisplayStatusPreloadComplete":
      return EDisplayStatus.k_EDisplayStatusPreloadComplete;
    case 17:
    case "k_EDisplayStatusBorrowerLocked":
      return EDisplayStatus.k_EDisplayStatusBorrowerLocked;
    case 18:
    case "k_EDisplayStatusUpdatePaused":
      return EDisplayStatus.k_EDisplayStatusUpdatePaused;
    case 19:
    case "k_EDisplayStatusUpdateQueued":
      return EDisplayStatus.k_EDisplayStatusUpdateQueued;
    case 20:
    case "k_EDisplayStatusUpdateRequired":
      return EDisplayStatus.k_EDisplayStatusUpdateRequired;
    case 21:
    case "k_EDisplayStatusUpdateDisabled":
      return EDisplayStatus.k_EDisplayStatusUpdateDisabled;
    case 22:
    case "k_EDisplayStatusDownloadPaused":
      return EDisplayStatus.k_EDisplayStatusDownloadPaused;
    case 23:
    case "k_EDisplayStatusDownloadQueued":
      return EDisplayStatus.k_EDisplayStatusDownloadQueued;
    case 24:
    case "k_EDisplayStatusDownloadRequired":
      return EDisplayStatus.k_EDisplayStatusDownloadRequired;
    case 25:
    case "k_EDisplayStatusDownloadDisabled":
      return EDisplayStatus.k_EDisplayStatusDownloadDisabled;
    case 26:
    case "k_EDisplayStatusLicensePending":
      return EDisplayStatus.k_EDisplayStatusLicensePending;
    case 27:
    case "k_EDisplayStatusLicenseExpired":
      return EDisplayStatus.k_EDisplayStatusLicenseExpired;
    case 28:
    case "k_EDisplayStatusAvailForFree":
      return EDisplayStatus.k_EDisplayStatusAvailForFree;
    case 29:
    case "k_EDisplayStatusAvailToBorrow":
      return EDisplayStatus.k_EDisplayStatusAvailToBorrow;
    case 30:
    case "k_EDisplayStatusAvailGuestPass":
      return EDisplayStatus.k_EDisplayStatusAvailGuestPass;
    case 31:
    case "k_EDisplayStatusPurchase":
      return EDisplayStatus.k_EDisplayStatusPurchase;
    case 32:
    case "k_EDisplayStatusUnavailable":
      return EDisplayStatus.k_EDisplayStatusUnavailable;
    case 33:
    case "k_EDisplayStatusNotLaunchable":
      return EDisplayStatus.k_EDisplayStatusNotLaunchable;
    case 34:
    case "k_EDisplayStatusCloudError":
      return EDisplayStatus.k_EDisplayStatusCloudError;
    case 35:
    case "k_EDisplayStatusCloudOutOfDate":
      return EDisplayStatus.k_EDisplayStatusCloudOutOfDate;
    case 36:
    case "k_EDisplayStatusTerminating":
      return EDisplayStatus.k_EDisplayStatusTerminating;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDisplayStatus.UNRECOGNIZED;
  }
}

export function eDisplayStatusToJSON(object: EDisplayStatus): string {
  switch (object) {
    case EDisplayStatus.k_EDisplayStatusInvalid:
      return "k_EDisplayStatusInvalid";
    case EDisplayStatus.k_EDisplayStatusLaunching:
      return "k_EDisplayStatusLaunching";
    case EDisplayStatus.k_EDisplayStatusUninstalling:
      return "k_EDisplayStatusUninstalling";
    case EDisplayStatus.k_EDisplayStatusInstalling:
      return "k_EDisplayStatusInstalling";
    case EDisplayStatus.k_EDisplayStatusRunning:
      return "k_EDisplayStatusRunning";
    case EDisplayStatus.k_EDisplayStatusValidating:
      return "k_EDisplayStatusValidating";
    case EDisplayStatus.k_EDisplayStatusUpdating:
      return "k_EDisplayStatusUpdating";
    case EDisplayStatus.k_EDisplayStatusDownloading:
      return "k_EDisplayStatusDownloading";
    case EDisplayStatus.k_EDisplayStatusSynchronizing:
      return "k_EDisplayStatusSynchronizing";
    case EDisplayStatus.k_EDisplayStatusReadyToInstall:
      return "k_EDisplayStatusReadyToInstall";
    case EDisplayStatus.k_EDisplayStatusReadyToPreload:
      return "k_EDisplayStatusReadyToPreload";
    case EDisplayStatus.k_EDisplayStatusReadyToLaunch:
      return "k_EDisplayStatusReadyToLaunch";
    case EDisplayStatus.k_EDisplayStatusRegionRestricted:
      return "k_EDisplayStatusRegionRestricted";
    case EDisplayStatus.k_EDisplayStatusPresaleOnly:
      return "k_EDisplayStatusPresaleOnly";
    case EDisplayStatus.k_EDisplayStatusInvalidPlatform:
      return "k_EDisplayStatusInvalidPlatform";
    case EDisplayStatus.k_EDisplayStatusPreloadComplete:
      return "k_EDisplayStatusPreloadComplete";
    case EDisplayStatus.k_EDisplayStatusBorrowerLocked:
      return "k_EDisplayStatusBorrowerLocked";
    case EDisplayStatus.k_EDisplayStatusUpdatePaused:
      return "k_EDisplayStatusUpdatePaused";
    case EDisplayStatus.k_EDisplayStatusUpdateQueued:
      return "k_EDisplayStatusUpdateQueued";
    case EDisplayStatus.k_EDisplayStatusUpdateRequired:
      return "k_EDisplayStatusUpdateRequired";
    case EDisplayStatus.k_EDisplayStatusUpdateDisabled:
      return "k_EDisplayStatusUpdateDisabled";
    case EDisplayStatus.k_EDisplayStatusDownloadPaused:
      return "k_EDisplayStatusDownloadPaused";
    case EDisplayStatus.k_EDisplayStatusDownloadQueued:
      return "k_EDisplayStatusDownloadQueued";
    case EDisplayStatus.k_EDisplayStatusDownloadRequired:
      return "k_EDisplayStatusDownloadRequired";
    case EDisplayStatus.k_EDisplayStatusDownloadDisabled:
      return "k_EDisplayStatusDownloadDisabled";
    case EDisplayStatus.k_EDisplayStatusLicensePending:
      return "k_EDisplayStatusLicensePending";
    case EDisplayStatus.k_EDisplayStatusLicenseExpired:
      return "k_EDisplayStatusLicenseExpired";
    case EDisplayStatus.k_EDisplayStatusAvailForFree:
      return "k_EDisplayStatusAvailForFree";
    case EDisplayStatus.k_EDisplayStatusAvailToBorrow:
      return "k_EDisplayStatusAvailToBorrow";
    case EDisplayStatus.k_EDisplayStatusAvailGuestPass:
      return "k_EDisplayStatusAvailGuestPass";
    case EDisplayStatus.k_EDisplayStatusPurchase:
      return "k_EDisplayStatusPurchase";
    case EDisplayStatus.k_EDisplayStatusUnavailable:
      return "k_EDisplayStatusUnavailable";
    case EDisplayStatus.k_EDisplayStatusNotLaunchable:
      return "k_EDisplayStatusNotLaunchable";
    case EDisplayStatus.k_EDisplayStatusCloudError:
      return "k_EDisplayStatusCloudError";
    case EDisplayStatus.k_EDisplayStatusCloudOutOfDate:
      return "k_EDisplayStatusCloudOutOfDate";
    case EDisplayStatus.k_EDisplayStatusTerminating:
      return "k_EDisplayStatusTerminating";
    case EDisplayStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAppCloudStatus {
  k_EAppCloudStatusInvalid = 0,
  k_EAppCloudStatusDisabled = 1,
  k_EAppCloudStatusUnknown = 2,
  k_EAppCloudStatusSynchronized = 3,
  k_EAppCloudStatusChecking = 4,
  k_EAppCloudStatusOutOfSync = 5,
  k_EAppCloudStatusUploading = 6,
  k_EAppCloudStatusDownloading = 7,
  k_EAppCloudStatusSyncFailed = 8,
  k_EAppCloudStatusConflict = 9,
  k_EAppCloudStatusPendingElsewhere = 10,
  UNRECOGNIZED = -1,
}

export function eAppCloudStatusFromJSON(object: any): EAppCloudStatus {
  switch (object) {
    case 0:
    case "k_EAppCloudStatusInvalid":
      return EAppCloudStatus.k_EAppCloudStatusInvalid;
    case 1:
    case "k_EAppCloudStatusDisabled":
      return EAppCloudStatus.k_EAppCloudStatusDisabled;
    case 2:
    case "k_EAppCloudStatusUnknown":
      return EAppCloudStatus.k_EAppCloudStatusUnknown;
    case 3:
    case "k_EAppCloudStatusSynchronized":
      return EAppCloudStatus.k_EAppCloudStatusSynchronized;
    case 4:
    case "k_EAppCloudStatusChecking":
      return EAppCloudStatus.k_EAppCloudStatusChecking;
    case 5:
    case "k_EAppCloudStatusOutOfSync":
      return EAppCloudStatus.k_EAppCloudStatusOutOfSync;
    case 6:
    case "k_EAppCloudStatusUploading":
      return EAppCloudStatus.k_EAppCloudStatusUploading;
    case 7:
    case "k_EAppCloudStatusDownloading":
      return EAppCloudStatus.k_EAppCloudStatusDownloading;
    case 8:
    case "k_EAppCloudStatusSyncFailed":
      return EAppCloudStatus.k_EAppCloudStatusSyncFailed;
    case 9:
    case "k_EAppCloudStatusConflict":
      return EAppCloudStatus.k_EAppCloudStatusConflict;
    case 10:
    case "k_EAppCloudStatusPendingElsewhere":
      return EAppCloudStatus.k_EAppCloudStatusPendingElsewhere;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAppCloudStatus.UNRECOGNIZED;
  }
}

export function eAppCloudStatusToJSON(object: EAppCloudStatus): string {
  switch (object) {
    case EAppCloudStatus.k_EAppCloudStatusInvalid:
      return "k_EAppCloudStatusInvalid";
    case EAppCloudStatus.k_EAppCloudStatusDisabled:
      return "k_EAppCloudStatusDisabled";
    case EAppCloudStatus.k_EAppCloudStatusUnknown:
      return "k_EAppCloudStatusUnknown";
    case EAppCloudStatus.k_EAppCloudStatusSynchronized:
      return "k_EAppCloudStatusSynchronized";
    case EAppCloudStatus.k_EAppCloudStatusChecking:
      return "k_EAppCloudStatusChecking";
    case EAppCloudStatus.k_EAppCloudStatusOutOfSync:
      return "k_EAppCloudStatusOutOfSync";
    case EAppCloudStatus.k_EAppCloudStatusUploading:
      return "k_EAppCloudStatusUploading";
    case EAppCloudStatus.k_EAppCloudStatusDownloading:
      return "k_EAppCloudStatusDownloading";
    case EAppCloudStatus.k_EAppCloudStatusSyncFailed:
      return "k_EAppCloudStatusSyncFailed";
    case EAppCloudStatus.k_EAppCloudStatusConflict:
      return "k_EAppCloudStatusConflict";
    case EAppCloudStatus.k_EAppCloudStatusPendingElsewhere:
      return "k_EAppCloudStatusPendingElsewhere";
    case EAppCloudStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EProtoAppType {
  k_EAppTypeInvalid = 0,
  k_EAppTypeGame = 1,
  k_EAppTypeApplication = 2,
  k_EAppTypeTool = 4,
  k_EAppTypeDemo = 8,
  k_EAppTypeDeprected = 16,
  k_EAppTypeDLC = 32,
  k_EAppTypeGuide = 64,
  k_EAppTypeDriver = 128,
  k_EAppTypeConfig = 256,
  k_EAppTypeHardware = 512,
  k_EAppTypeFranchise = 1024,
  k_EAppTypeVideo = 2048,
  k_EAppTypePlugin = 4096,
  k_EAppTypeMusicAlbum = 8192,
  k_EAppTypeSeries = 16384,
  k_EAppTypeComic = 32768,
  k_EAppTypeBeta = 65536,
  k_EAppTypeShortcut = 1073741824,
  k_EAppTypeDepotOnly = -2147483648,
  UNRECOGNIZED = -1,
}

export function eProtoAppTypeFromJSON(object: any): EProtoAppType {
  switch (object) {
    case 0:
    case "k_EAppTypeInvalid":
      return EProtoAppType.k_EAppTypeInvalid;
    case 1:
    case "k_EAppTypeGame":
      return EProtoAppType.k_EAppTypeGame;
    case 2:
    case "k_EAppTypeApplication":
      return EProtoAppType.k_EAppTypeApplication;
    case 4:
    case "k_EAppTypeTool":
      return EProtoAppType.k_EAppTypeTool;
    case 8:
    case "k_EAppTypeDemo":
      return EProtoAppType.k_EAppTypeDemo;
    case 16:
    case "k_EAppTypeDeprected":
      return EProtoAppType.k_EAppTypeDeprected;
    case 32:
    case "k_EAppTypeDLC":
      return EProtoAppType.k_EAppTypeDLC;
    case 64:
    case "k_EAppTypeGuide":
      return EProtoAppType.k_EAppTypeGuide;
    case 128:
    case "k_EAppTypeDriver":
      return EProtoAppType.k_EAppTypeDriver;
    case 256:
    case "k_EAppTypeConfig":
      return EProtoAppType.k_EAppTypeConfig;
    case 512:
    case "k_EAppTypeHardware":
      return EProtoAppType.k_EAppTypeHardware;
    case 1024:
    case "k_EAppTypeFranchise":
      return EProtoAppType.k_EAppTypeFranchise;
    case 2048:
    case "k_EAppTypeVideo":
      return EProtoAppType.k_EAppTypeVideo;
    case 4096:
    case "k_EAppTypePlugin":
      return EProtoAppType.k_EAppTypePlugin;
    case 8192:
    case "k_EAppTypeMusicAlbum":
      return EProtoAppType.k_EAppTypeMusicAlbum;
    case 16384:
    case "k_EAppTypeSeries":
      return EProtoAppType.k_EAppTypeSeries;
    case 32768:
    case "k_EAppTypeComic":
      return EProtoAppType.k_EAppTypeComic;
    case 65536:
    case "k_EAppTypeBeta":
      return EProtoAppType.k_EAppTypeBeta;
    case 1073741824:
    case "k_EAppTypeShortcut":
      return EProtoAppType.k_EAppTypeShortcut;
    case -2147483648:
    case "k_EAppTypeDepotOnly":
      return EProtoAppType.k_EAppTypeDepotOnly;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EProtoAppType.UNRECOGNIZED;
  }
}

export function eProtoAppTypeToJSON(object: EProtoAppType): string {
  switch (object) {
    case EProtoAppType.k_EAppTypeInvalid:
      return "k_EAppTypeInvalid";
    case EProtoAppType.k_EAppTypeGame:
      return "k_EAppTypeGame";
    case EProtoAppType.k_EAppTypeApplication:
      return "k_EAppTypeApplication";
    case EProtoAppType.k_EAppTypeTool:
      return "k_EAppTypeTool";
    case EProtoAppType.k_EAppTypeDemo:
      return "k_EAppTypeDemo";
    case EProtoAppType.k_EAppTypeDeprected:
      return "k_EAppTypeDeprected";
    case EProtoAppType.k_EAppTypeDLC:
      return "k_EAppTypeDLC";
    case EProtoAppType.k_EAppTypeGuide:
      return "k_EAppTypeGuide";
    case EProtoAppType.k_EAppTypeDriver:
      return "k_EAppTypeDriver";
    case EProtoAppType.k_EAppTypeConfig:
      return "k_EAppTypeConfig";
    case EProtoAppType.k_EAppTypeHardware:
      return "k_EAppTypeHardware";
    case EProtoAppType.k_EAppTypeFranchise:
      return "k_EAppTypeFranchise";
    case EProtoAppType.k_EAppTypeVideo:
      return "k_EAppTypeVideo";
    case EProtoAppType.k_EAppTypePlugin:
      return "k_EAppTypePlugin";
    case EProtoAppType.k_EAppTypeMusicAlbum:
      return "k_EAppTypeMusicAlbum";
    case EProtoAppType.k_EAppTypeSeries:
      return "k_EAppTypeSeries";
    case EProtoAppType.k_EAppTypeComic:
      return "k_EAppTypeComic";
    case EProtoAppType.k_EAppTypeBeta:
      return "k_EAppTypeBeta";
    case EProtoAppType.k_EAppTypeShortcut:
      return "k_EAppTypeShortcut";
    case EProtoAppType.k_EAppTypeDepotOnly:
      return "k_EAppTypeDepotOnly";
    case EProtoAppType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAppAssociationType {
  k_EAppAssociationTypeInvalid = 0,
  k_EAppAssociationTypePublisher = 1,
  k_EAppAssociationTypeDeveloper = 2,
  k_EAppAssociationTypeFranchise = 3,
  UNRECOGNIZED = -1,
}

export function eAppAssociationTypeFromJSON(object: any): EAppAssociationType {
  switch (object) {
    case 0:
    case "k_EAppAssociationTypeInvalid":
      return EAppAssociationType.k_EAppAssociationTypeInvalid;
    case 1:
    case "k_EAppAssociationTypePublisher":
      return EAppAssociationType.k_EAppAssociationTypePublisher;
    case 2:
    case "k_EAppAssociationTypeDeveloper":
      return EAppAssociationType.k_EAppAssociationTypeDeveloper;
    case 3:
    case "k_EAppAssociationTypeFranchise":
      return EAppAssociationType.k_EAppAssociationTypeFranchise;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAppAssociationType.UNRECOGNIZED;
  }
}

export function eAppAssociationTypeToJSON(object: EAppAssociationType): string {
  switch (object) {
    case EAppAssociationType.k_EAppAssociationTypeInvalid:
      return "k_EAppAssociationTypeInvalid";
    case EAppAssociationType.k_EAppAssociationTypePublisher:
      return "k_EAppAssociationTypePublisher";
    case EAppAssociationType.k_EAppAssociationTypeDeveloper:
      return "k_EAppAssociationTypeDeveloper";
    case EAppAssociationType.k_EAppAssociationTypeFranchise:
      return "k_EAppAssociationTypeFranchise";
    case EAppAssociationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAppControllerSupportLevel {
  k_EAppControllerSupportLevelNone = 0,
  k_EAppControllerSupportLevelPartial = 1,
  k_EAppControllerSupportLevelFull = 2,
  UNRECOGNIZED = -1,
}

export function eAppControllerSupportLevelFromJSON(object: any): EAppControllerSupportLevel {
  switch (object) {
    case 0:
    case "k_EAppControllerSupportLevelNone":
      return EAppControllerSupportLevel.k_EAppControllerSupportLevelNone;
    case 1:
    case "k_EAppControllerSupportLevelPartial":
      return EAppControllerSupportLevel.k_EAppControllerSupportLevelPartial;
    case 2:
    case "k_EAppControllerSupportLevelFull":
      return EAppControllerSupportLevel.k_EAppControllerSupportLevelFull;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAppControllerSupportLevel.UNRECOGNIZED;
  }
}

export function eAppControllerSupportLevelToJSON(object: EAppControllerSupportLevel): string {
  switch (object) {
    case EAppControllerSupportLevel.k_EAppControllerSupportLevelNone:
      return "k_EAppControllerSupportLevelNone";
    case EAppControllerSupportLevel.k_EAppControllerSupportLevelPartial:
      return "k_EAppControllerSupportLevelPartial";
    case EAppControllerSupportLevel.k_EAppControllerSupportLevelFull:
      return "k_EAppControllerSupportLevelFull";
    case EAppControllerSupportLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAppGamepadGyroTrackpadSupportLevel {
  k_EAppGamepadGyroTrackpadSupportLevelUnknown = -1,
  k_EAppGamepadGyroTrackpadSupportLevelNoGamepad = 0,
  k_EAppGamepadGyroTrackpadSupportLevelGamepad = 1,
  k_EAppGamepadGyroTrackpadSupportLevelSimultaneous = 2,
  UNRECOGNIZED = -1,
}

export function eAppGamepadGyroTrackpadSupportLevelFromJSON(object: any): EAppGamepadGyroTrackpadSupportLevel {
  switch (object) {
    case -1:
    case "k_EAppGamepadGyroTrackpadSupportLevelUnknown":
      return EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelUnknown;
    case 0:
    case "k_EAppGamepadGyroTrackpadSupportLevelNoGamepad":
      return EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelNoGamepad;
    case 1:
    case "k_EAppGamepadGyroTrackpadSupportLevelGamepad":
      return EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelGamepad;
    case 2:
    case "k_EAppGamepadGyroTrackpadSupportLevelSimultaneous":
      return EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelSimultaneous;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAppGamepadGyroTrackpadSupportLevel.UNRECOGNIZED;
  }
}

export function eAppGamepadGyroTrackpadSupportLevelToJSON(object: EAppGamepadGyroTrackpadSupportLevel): string {
  switch (object) {
    case EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelUnknown:
      return "k_EAppGamepadGyroTrackpadSupportLevelUnknown";
    case EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelNoGamepad:
      return "k_EAppGamepadGyroTrackpadSupportLevelNoGamepad";
    case EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelGamepad:
      return "k_EAppGamepadGyroTrackpadSupportLevelGamepad";
    case EAppGamepadGyroTrackpadSupportLevel.k_EAppGamepadGyroTrackpadSupportLevelSimultaneous:
      return "k_EAppGamepadGyroTrackpadSupportLevelSimultaneous";
    case EAppGamepadGyroTrackpadSupportLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CAppOverviewAppAssociation {
  type: EAppAssociationType;
  name: string;
}

export interface CAppOverviewPerClientData {
  clientid: string;
  clientName: string;
  displayStatus: EDisplayStatus;
  statusPercentage: number;
  activeBeta: string;
  installed: boolean;
  bytesDownloaded: string;
  bytesTotal: string;
  streamingToLocalClient: boolean;
  isAvailableOnCurrentPlatform: boolean;
  isInvalidOsType: boolean;
  playtimeLeft: number;
  cloudStatus: EAppCloudStatus;
}

export interface CAppOverview {
  appid: number;
  displayName: string;
  visibleInGameList: boolean;
  sortAs: string;
  appType: EProtoAppType;
  mruIndex: number;
  rtRecentActivityTime: number;
  minutesPlaytimeForever: number;
  minutesPlaytimeLastTwoWeeks: number;
  rtLastTimePlayed: number;
  storeTag: number[];
  association: CAppOverviewAppAssociation[];
  storeCategory: number[];
  rtOriginalReleaseDate: number;
  rtSteamReleaseDate: number;
  iconHash: string;
  controllerSupport: EAppControllerSupportLevel;
  vrSupported: boolean;
  metacriticScore: number;
  sizeOnDisk: string;
  thirdPartyMod: boolean;
  iconData: string;
  iconDataFormat: string;
  gameid: string;
  libraryCapsuleFilename: string;
  perClientData: CAppOverviewPerClientData[];
  mostAvailableClientid: string;
  selectedClientid: string;
  rtStoreAssetMtime: number;
  rtCustomImageMtime: number;
  optionalParentAppId: number;
  ownerAccountId: number;
  reviewScoreWithBombs: number;
  reviewPercentageWithBombs: number;
  reviewScoreWithoutBombs: number;
  reviewPercentageWithoutBombs: number;
  libraryId: string;
  vrOnly: boolean;
  mastersubAppid: number;
  mastersubIncludedwithLogo: string;
  siteLicenseSiteName: string;
  shortcutOverrideAppid: number;
  steamDeckCompatCategory: ESteamDeckCompatibilityCategory;
  rtLastTimeLocallyPlayed: number;
  rtPurchasedTime: number;
  headerFilename: string;
}

export interface CAppOverviewChange {
  appOverview: CAppOverview[];
  removedAppid: number[];
  fullUpdate: boolean;
  updateComplete: boolean;
}

export interface CAppBootstrapData {
  appid: number;
  hidden: boolean;
  userTag: string[];
}

export interface CLibraryBootstrapData {
  appData: CAppBootstrapData[];
}

function createBaseCAppOverviewAppAssociation(): CAppOverviewAppAssociation {
  return { type: 0, name: "" };
}

export const CAppOverviewAppAssociation = {
  encode(message: CAppOverviewAppAssociation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAppOverviewAppAssociation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAppOverviewAppAssociation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAppOverviewAppAssociation {
    return {
      type: isSet(object.type) ? eAppAssociationTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CAppOverviewAppAssociation): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eAppAssociationTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAppOverviewAppAssociation>, I>>(base?: I): CAppOverviewAppAssociation {
    return CAppOverviewAppAssociation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAppOverviewAppAssociation>, I>>(object: I): CAppOverviewAppAssociation {
    const message = createBaseCAppOverviewAppAssociation();
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCAppOverviewPerClientData(): CAppOverviewPerClientData {
  return {
    clientid: "0",
    clientName: "",
    displayStatus: 0,
    statusPercentage: 0,
    activeBeta: "",
    installed: false,
    bytesDownloaded: "0",
    bytesTotal: "0",
    streamingToLocalClient: false,
    isAvailableOnCurrentPlatform: false,
    isInvalidOsType: false,
    playtimeLeft: 0,
    cloudStatus: 0,
  };
}

export const CAppOverviewPerClientData = {
  encode(message: CAppOverviewPerClientData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientid !== "0") {
      writer.uint32(8).uint64(message.clientid);
    }
    if (message.clientName !== "") {
      writer.uint32(18).string(message.clientName);
    }
    if (message.displayStatus !== 0) {
      writer.uint32(24).int32(message.displayStatus);
    }
    if (message.statusPercentage !== 0) {
      writer.uint32(32).uint32(message.statusPercentage);
    }
    if (message.activeBeta !== "") {
      writer.uint32(42).string(message.activeBeta);
    }
    if (message.installed === true) {
      writer.uint32(48).bool(message.installed);
    }
    if (message.bytesDownloaded !== "0") {
      writer.uint32(56).uint64(message.bytesDownloaded);
    }
    if (message.bytesTotal !== "0") {
      writer.uint32(64).uint64(message.bytesTotal);
    }
    if (message.streamingToLocalClient === true) {
      writer.uint32(72).bool(message.streamingToLocalClient);
    }
    if (message.isAvailableOnCurrentPlatform === true) {
      writer.uint32(80).bool(message.isAvailableOnCurrentPlatform);
    }
    if (message.isInvalidOsType === true) {
      writer.uint32(88).bool(message.isInvalidOsType);
    }
    if (message.playtimeLeft !== 0) {
      writer.uint32(96).uint32(message.playtimeLeft);
    }
    if (message.cloudStatus !== 0) {
      writer.uint32(104).int32(message.cloudStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAppOverviewPerClientData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAppOverviewPerClientData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientid = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.clientName = reader.string();
          break;
        case 3:
          message.displayStatus = reader.int32() as any;
          break;
        case 4:
          message.statusPercentage = reader.uint32();
          break;
        case 5:
          message.activeBeta = reader.string();
          break;
        case 6:
          message.installed = reader.bool();
          break;
        case 7:
          message.bytesDownloaded = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.bytesTotal = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.streamingToLocalClient = reader.bool();
          break;
        case 10:
          message.isAvailableOnCurrentPlatform = reader.bool();
          break;
        case 11:
          message.isInvalidOsType = reader.bool();
          break;
        case 12:
          message.playtimeLeft = reader.uint32();
          break;
        case 13:
          message.cloudStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAppOverviewPerClientData {
    return {
      clientid: isSet(object.clientid) ? String(object.clientid) : "0",
      clientName: isSet(object.clientName) ? String(object.clientName) : "",
      displayStatus: isSet(object.displayStatus) ? eDisplayStatusFromJSON(object.displayStatus) : 0,
      statusPercentage: isSet(object.statusPercentage) ? Number(object.statusPercentage) : 0,
      activeBeta: isSet(object.activeBeta) ? String(object.activeBeta) : "",
      installed: isSet(object.installed) ? Boolean(object.installed) : false,
      bytesDownloaded: isSet(object.bytesDownloaded) ? String(object.bytesDownloaded) : "0",
      bytesTotal: isSet(object.bytesTotal) ? String(object.bytesTotal) : "0",
      streamingToLocalClient: isSet(object.streamingToLocalClient) ? Boolean(object.streamingToLocalClient) : false,
      isAvailableOnCurrentPlatform: isSet(object.isAvailableOnCurrentPlatform)
        ? Boolean(object.isAvailableOnCurrentPlatform)
        : false,
      isInvalidOsType: isSet(object.isInvalidOsType) ? Boolean(object.isInvalidOsType) : false,
      playtimeLeft: isSet(object.playtimeLeft) ? Number(object.playtimeLeft) : 0,
      cloudStatus: isSet(object.cloudStatus) ? eAppCloudStatusFromJSON(object.cloudStatus) : 0,
    };
  },

  toJSON(message: CAppOverviewPerClientData): unknown {
    const obj: any = {};
    message.clientid !== undefined && (obj.clientid = message.clientid);
    message.clientName !== undefined && (obj.clientName = message.clientName);
    message.displayStatus !== undefined && (obj.displayStatus = eDisplayStatusToJSON(message.displayStatus));
    message.statusPercentage !== undefined && (obj.statusPercentage = Math.round(message.statusPercentage));
    message.activeBeta !== undefined && (obj.activeBeta = message.activeBeta);
    message.installed !== undefined && (obj.installed = message.installed);
    message.bytesDownloaded !== undefined && (obj.bytesDownloaded = message.bytesDownloaded);
    message.bytesTotal !== undefined && (obj.bytesTotal = message.bytesTotal);
    message.streamingToLocalClient !== undefined && (obj.streamingToLocalClient = message.streamingToLocalClient);
    message.isAvailableOnCurrentPlatform !== undefined &&
      (obj.isAvailableOnCurrentPlatform = message.isAvailableOnCurrentPlatform);
    message.isInvalidOsType !== undefined && (obj.isInvalidOsType = message.isInvalidOsType);
    message.playtimeLeft !== undefined && (obj.playtimeLeft = Math.round(message.playtimeLeft));
    message.cloudStatus !== undefined && (obj.cloudStatus = eAppCloudStatusToJSON(message.cloudStatus));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAppOverviewPerClientData>, I>>(base?: I): CAppOverviewPerClientData {
    return CAppOverviewPerClientData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAppOverviewPerClientData>, I>>(object: I): CAppOverviewPerClientData {
    const message = createBaseCAppOverviewPerClientData();
    message.clientid = object.clientid ?? "0";
    message.clientName = object.clientName ?? "";
    message.displayStatus = object.displayStatus ?? 0;
    message.statusPercentage = object.statusPercentage ?? 0;
    message.activeBeta = object.activeBeta ?? "";
    message.installed = object.installed ?? false;
    message.bytesDownloaded = object.bytesDownloaded ?? "0";
    message.bytesTotal = object.bytesTotal ?? "0";
    message.streamingToLocalClient = object.streamingToLocalClient ?? false;
    message.isAvailableOnCurrentPlatform = object.isAvailableOnCurrentPlatform ?? false;
    message.isInvalidOsType = object.isInvalidOsType ?? false;
    message.playtimeLeft = object.playtimeLeft ?? 0;
    message.cloudStatus = object.cloudStatus ?? 0;
    return message;
  },
};

function createBaseCAppOverview(): CAppOverview {
  return {
    appid: 0,
    displayName: "",
    visibleInGameList: false,
    sortAs: "",
    appType: 0,
    mruIndex: 0,
    rtRecentActivityTime: 0,
    minutesPlaytimeForever: 0,
    minutesPlaytimeLastTwoWeeks: 0,
    rtLastTimePlayed: 0,
    storeTag: [],
    association: [],
    storeCategory: [],
    rtOriginalReleaseDate: 0,
    rtSteamReleaseDate: 0,
    iconHash: "",
    controllerSupport: 0,
    vrSupported: false,
    metacriticScore: 0,
    sizeOnDisk: "0",
    thirdPartyMod: false,
    iconData: "",
    iconDataFormat: "",
    gameid: "",
    libraryCapsuleFilename: "",
    perClientData: [],
    mostAvailableClientid: "0",
    selectedClientid: "0",
    rtStoreAssetMtime: 0,
    rtCustomImageMtime: 0,
    optionalParentAppId: 0,
    ownerAccountId: 0,
    reviewScoreWithBombs: 0,
    reviewPercentageWithBombs: 0,
    reviewScoreWithoutBombs: 0,
    reviewPercentageWithoutBombs: 0,
    libraryId: "",
    vrOnly: false,
    mastersubAppid: 0,
    mastersubIncludedwithLogo: "",
    siteLicenseSiteName: "",
    shortcutOverrideAppid: 0,
    steamDeckCompatCategory: 0,
    rtLastTimeLocallyPlayed: 0,
    rtPurchasedTime: 0,
    headerFilename: "",
  };
}

export const CAppOverview = {
  encode(message: CAppOverview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.visibleInGameList === true) {
      writer.uint32(32).bool(message.visibleInGameList);
    }
    if (message.sortAs !== "") {
      writer.uint32(50).string(message.sortAs);
    }
    if (message.appType !== 0) {
      writer.uint32(56).int32(message.appType);
    }
    if (message.mruIndex !== 0) {
      writer.uint32(104).uint32(message.mruIndex);
    }
    if (message.rtRecentActivityTime !== 0) {
      writer.uint32(112).uint32(message.rtRecentActivityTime);
    }
    if (message.minutesPlaytimeForever !== 0) {
      writer.uint32(128).uint32(message.minutesPlaytimeForever);
    }
    if (message.minutesPlaytimeLastTwoWeeks !== 0) {
      writer.uint32(136).uint32(message.minutesPlaytimeLastTwoWeeks);
    }
    if (message.rtLastTimePlayed !== 0) {
      writer.uint32(144).uint32(message.rtLastTimePlayed);
    }
    writer.uint32(154).fork();
    for (const v of message.storeTag) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.association) {
      CAppOverviewAppAssociation.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    writer.uint32(186).fork();
    for (const v of message.storeCategory) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rtOriginalReleaseDate !== 0) {
      writer.uint32(200).uint32(message.rtOriginalReleaseDate);
    }
    if (message.rtSteamReleaseDate !== 0) {
      writer.uint32(208).uint32(message.rtSteamReleaseDate);
    }
    if (message.iconHash !== "") {
      writer.uint32(218).string(message.iconHash);
    }
    if (message.controllerSupport !== 0) {
      writer.uint32(248).int32(message.controllerSupport);
    }
    if (message.vrSupported === true) {
      writer.uint32(256).bool(message.vrSupported);
    }
    if (message.metacriticScore !== 0) {
      writer.uint32(288).uint32(message.metacriticScore);
    }
    if (message.sizeOnDisk !== "0") {
      writer.uint32(296).uint64(message.sizeOnDisk);
    }
    if (message.thirdPartyMod === true) {
      writer.uint32(304).bool(message.thirdPartyMod);
    }
    if (message.iconData !== "") {
      writer.uint32(314).string(message.iconData);
    }
    if (message.iconDataFormat !== "") {
      writer.uint32(322).string(message.iconDataFormat);
    }
    if (message.gameid !== "") {
      writer.uint32(330).string(message.gameid);
    }
    if (message.libraryCapsuleFilename !== "") {
      writer.uint32(338).string(message.libraryCapsuleFilename);
    }
    for (const v of message.perClientData) {
      CAppOverviewPerClientData.encode(v!, writer.uint32(346).fork()).ldelim();
    }
    if (message.mostAvailableClientid !== "0") {
      writer.uint32(352).uint64(message.mostAvailableClientid);
    }
    if (message.selectedClientid !== "0") {
      writer.uint32(360).uint64(message.selectedClientid);
    }
    if (message.rtStoreAssetMtime !== 0) {
      writer.uint32(368).uint32(message.rtStoreAssetMtime);
    }
    if (message.rtCustomImageMtime !== 0) {
      writer.uint32(376).uint32(message.rtCustomImageMtime);
    }
    if (message.optionalParentAppId !== 0) {
      writer.uint32(384).uint32(message.optionalParentAppId);
    }
    if (message.ownerAccountId !== 0) {
      writer.uint32(392).uint32(message.ownerAccountId);
    }
    if (message.reviewScoreWithBombs !== 0) {
      writer.uint32(424).uint32(message.reviewScoreWithBombs);
    }
    if (message.reviewPercentageWithBombs !== 0) {
      writer.uint32(432).uint32(message.reviewPercentageWithBombs);
    }
    if (message.reviewScoreWithoutBombs !== 0) {
      writer.uint32(440).uint32(message.reviewScoreWithoutBombs);
    }
    if (message.reviewPercentageWithoutBombs !== 0) {
      writer.uint32(448).uint32(message.reviewPercentageWithoutBombs);
    }
    if (message.libraryId !== "") {
      writer.uint32(458).string(message.libraryId);
    }
    if (message.vrOnly === true) {
      writer.uint32(464).bool(message.vrOnly);
    }
    if (message.mastersubAppid !== 0) {
      writer.uint32(472).uint32(message.mastersubAppid);
    }
    if (message.mastersubIncludedwithLogo !== "") {
      writer.uint32(482).string(message.mastersubIncludedwithLogo);
    }
    if (message.siteLicenseSiteName !== "") {
      writer.uint32(498).string(message.siteLicenseSiteName);
    }
    if (message.shortcutOverrideAppid !== 0) {
      writer.uint32(504).uint32(message.shortcutOverrideAppid);
    }
    if (message.steamDeckCompatCategory !== 0) {
      writer.uint32(512).int32(message.steamDeckCompatCategory);
    }
    if (message.rtLastTimeLocallyPlayed !== 0) {
      writer.uint32(520).uint32(message.rtLastTimeLocallyPlayed);
    }
    if (message.rtPurchasedTime !== 0) {
      writer.uint32(528).uint32(message.rtPurchasedTime);
    }
    if (message.headerFilename !== "") {
      writer.uint32(538).string(message.headerFilename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAppOverview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAppOverview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 4:
          message.visibleInGameList = reader.bool();
          break;
        case 6:
          message.sortAs = reader.string();
          break;
        case 7:
          message.appType = reader.int32() as any;
          break;
        case 13:
          message.mruIndex = reader.uint32();
          break;
        case 14:
          message.rtRecentActivityTime = reader.uint32();
          break;
        case 16:
          message.minutesPlaytimeForever = reader.uint32();
          break;
        case 17:
          message.minutesPlaytimeLastTwoWeeks = reader.uint32();
          break;
        case 18:
          message.rtLastTimePlayed = reader.uint32();
          break;
        case 19:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.storeTag.push(reader.uint32());
            }
          } else {
            message.storeTag.push(reader.uint32());
          }
          break;
        case 20:
          message.association.push(CAppOverviewAppAssociation.decode(reader, reader.uint32()));
          break;
        case 23:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.storeCategory.push(reader.uint32());
            }
          } else {
            message.storeCategory.push(reader.uint32());
          }
          break;
        case 25:
          message.rtOriginalReleaseDate = reader.uint32();
          break;
        case 26:
          message.rtSteamReleaseDate = reader.uint32();
          break;
        case 27:
          message.iconHash = reader.string();
          break;
        case 31:
          message.controllerSupport = reader.int32() as any;
          break;
        case 32:
          message.vrSupported = reader.bool();
          break;
        case 36:
          message.metacriticScore = reader.uint32();
          break;
        case 37:
          message.sizeOnDisk = longToString(reader.uint64() as Long);
          break;
        case 38:
          message.thirdPartyMod = reader.bool();
          break;
        case 39:
          message.iconData = reader.string();
          break;
        case 40:
          message.iconDataFormat = reader.string();
          break;
        case 41:
          message.gameid = reader.string();
          break;
        case 42:
          message.libraryCapsuleFilename = reader.string();
          break;
        case 43:
          message.perClientData.push(CAppOverviewPerClientData.decode(reader, reader.uint32()));
          break;
        case 44:
          message.mostAvailableClientid = longToString(reader.uint64() as Long);
          break;
        case 45:
          message.selectedClientid = longToString(reader.uint64() as Long);
          break;
        case 46:
          message.rtStoreAssetMtime = reader.uint32();
          break;
        case 47:
          message.rtCustomImageMtime = reader.uint32();
          break;
        case 48:
          message.optionalParentAppId = reader.uint32();
          break;
        case 49:
          message.ownerAccountId = reader.uint32();
          break;
        case 53:
          message.reviewScoreWithBombs = reader.uint32();
          break;
        case 54:
          message.reviewPercentageWithBombs = reader.uint32();
          break;
        case 55:
          message.reviewScoreWithoutBombs = reader.uint32();
          break;
        case 56:
          message.reviewPercentageWithoutBombs = reader.uint32();
          break;
        case 57:
          message.libraryId = reader.string();
          break;
        case 58:
          message.vrOnly = reader.bool();
          break;
        case 59:
          message.mastersubAppid = reader.uint32();
          break;
        case 60:
          message.mastersubIncludedwithLogo = reader.string();
          break;
        case 62:
          message.siteLicenseSiteName = reader.string();
          break;
        case 63:
          message.shortcutOverrideAppid = reader.uint32();
          break;
        case 64:
          message.steamDeckCompatCategory = reader.int32() as any;
          break;
        case 65:
          message.rtLastTimeLocallyPlayed = reader.uint32();
          break;
        case 66:
          message.rtPurchasedTime = reader.uint32();
          break;
        case 67:
          message.headerFilename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAppOverview {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      visibleInGameList: isSet(object.visibleInGameList) ? Boolean(object.visibleInGameList) : false,
      sortAs: isSet(object.sortAs) ? String(object.sortAs) : "",
      appType: isSet(object.appType) ? eProtoAppTypeFromJSON(object.appType) : 0,
      mruIndex: isSet(object.mruIndex) ? Number(object.mruIndex) : 0,
      rtRecentActivityTime: isSet(object.rtRecentActivityTime) ? Number(object.rtRecentActivityTime) : 0,
      minutesPlaytimeForever: isSet(object.minutesPlaytimeForever) ? Number(object.minutesPlaytimeForever) : 0,
      minutesPlaytimeLastTwoWeeks: isSet(object.minutesPlaytimeLastTwoWeeks)
        ? Number(object.minutesPlaytimeLastTwoWeeks)
        : 0,
      rtLastTimePlayed: isSet(object.rtLastTimePlayed) ? Number(object.rtLastTimePlayed) : 0,
      storeTag: Array.isArray(object?.storeTag) ? object.storeTag.map((e: any) => Number(e)) : [],
      association: Array.isArray(object?.association)
        ? object.association.map((e: any) => CAppOverviewAppAssociation.fromJSON(e))
        : [],
      storeCategory: Array.isArray(object?.storeCategory) ? object.storeCategory.map((e: any) => Number(e)) : [],
      rtOriginalReleaseDate: isSet(object.rtOriginalReleaseDate) ? Number(object.rtOriginalReleaseDate) : 0,
      rtSteamReleaseDate: isSet(object.rtSteamReleaseDate) ? Number(object.rtSteamReleaseDate) : 0,
      iconHash: isSet(object.iconHash) ? String(object.iconHash) : "",
      controllerSupport: isSet(object.controllerSupport)
        ? eAppControllerSupportLevelFromJSON(object.controllerSupport)
        : 0,
      vrSupported: isSet(object.vrSupported) ? Boolean(object.vrSupported) : false,
      metacriticScore: isSet(object.metacriticScore) ? Number(object.metacriticScore) : 0,
      sizeOnDisk: isSet(object.sizeOnDisk) ? String(object.sizeOnDisk) : "0",
      thirdPartyMod: isSet(object.thirdPartyMod) ? Boolean(object.thirdPartyMod) : false,
      iconData: isSet(object.iconData) ? String(object.iconData) : "",
      iconDataFormat: isSet(object.iconDataFormat) ? String(object.iconDataFormat) : "",
      gameid: isSet(object.gameid) ? String(object.gameid) : "",
      libraryCapsuleFilename: isSet(object.libraryCapsuleFilename) ? String(object.libraryCapsuleFilename) : "",
      perClientData: Array.isArray(object?.perClientData)
        ? object.perClientData.map((e: any) => CAppOverviewPerClientData.fromJSON(e))
        : [],
      mostAvailableClientid: isSet(object.mostAvailableClientid) ? String(object.mostAvailableClientid) : "0",
      selectedClientid: isSet(object.selectedClientid) ? String(object.selectedClientid) : "0",
      rtStoreAssetMtime: isSet(object.rtStoreAssetMtime) ? Number(object.rtStoreAssetMtime) : 0,
      rtCustomImageMtime: isSet(object.rtCustomImageMtime) ? Number(object.rtCustomImageMtime) : 0,
      optionalParentAppId: isSet(object.optionalParentAppId) ? Number(object.optionalParentAppId) : 0,
      ownerAccountId: isSet(object.ownerAccountId) ? Number(object.ownerAccountId) : 0,
      reviewScoreWithBombs: isSet(object.reviewScoreWithBombs) ? Number(object.reviewScoreWithBombs) : 0,
      reviewPercentageWithBombs: isSet(object.reviewPercentageWithBombs) ? Number(object.reviewPercentageWithBombs) : 0,
      reviewScoreWithoutBombs: isSet(object.reviewScoreWithoutBombs) ? Number(object.reviewScoreWithoutBombs) : 0,
      reviewPercentageWithoutBombs: isSet(object.reviewPercentageWithoutBombs)
        ? Number(object.reviewPercentageWithoutBombs)
        : 0,
      libraryId: isSet(object.libraryId) ? String(object.libraryId) : "",
      vrOnly: isSet(object.vrOnly) ? Boolean(object.vrOnly) : false,
      mastersubAppid: isSet(object.mastersubAppid) ? Number(object.mastersubAppid) : 0,
      mastersubIncludedwithLogo: isSet(object.mastersubIncludedwithLogo)
        ? String(object.mastersubIncludedwithLogo)
        : "",
      siteLicenseSiteName: isSet(object.siteLicenseSiteName) ? String(object.siteLicenseSiteName) : "",
      shortcutOverrideAppid: isSet(object.shortcutOverrideAppid) ? Number(object.shortcutOverrideAppid) : 0,
      steamDeckCompatCategory: isSet(object.steamDeckCompatCategory)
        ? eSteamDeckCompatibilityCategoryFromJSON(object.steamDeckCompatCategory)
        : 0,
      rtLastTimeLocallyPlayed: isSet(object.rtLastTimeLocallyPlayed) ? Number(object.rtLastTimeLocallyPlayed) : 0,
      rtPurchasedTime: isSet(object.rtPurchasedTime) ? Number(object.rtPurchasedTime) : 0,
      headerFilename: isSet(object.headerFilename) ? String(object.headerFilename) : "",
    };
  },

  toJSON(message: CAppOverview): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.visibleInGameList !== undefined && (obj.visibleInGameList = message.visibleInGameList);
    message.sortAs !== undefined && (obj.sortAs = message.sortAs);
    message.appType !== undefined && (obj.appType = eProtoAppTypeToJSON(message.appType));
    message.mruIndex !== undefined && (obj.mruIndex = Math.round(message.mruIndex));
    message.rtRecentActivityTime !== undefined && (obj.rtRecentActivityTime = Math.round(message.rtRecentActivityTime));
    message.minutesPlaytimeForever !== undefined &&
      (obj.minutesPlaytimeForever = Math.round(message.minutesPlaytimeForever));
    message.minutesPlaytimeLastTwoWeeks !== undefined &&
      (obj.minutesPlaytimeLastTwoWeeks = Math.round(message.minutesPlaytimeLastTwoWeeks));
    message.rtLastTimePlayed !== undefined && (obj.rtLastTimePlayed = Math.round(message.rtLastTimePlayed));
    if (message.storeTag) {
      obj.storeTag = message.storeTag.map((e) => Math.round(e));
    } else {
      obj.storeTag = [];
    }
    if (message.association) {
      obj.association = message.association.map((e) => e ? CAppOverviewAppAssociation.toJSON(e) : undefined);
    } else {
      obj.association = [];
    }
    if (message.storeCategory) {
      obj.storeCategory = message.storeCategory.map((e) => Math.round(e));
    } else {
      obj.storeCategory = [];
    }
    message.rtOriginalReleaseDate !== undefined &&
      (obj.rtOriginalReleaseDate = Math.round(message.rtOriginalReleaseDate));
    message.rtSteamReleaseDate !== undefined && (obj.rtSteamReleaseDate = Math.round(message.rtSteamReleaseDate));
    message.iconHash !== undefined && (obj.iconHash = message.iconHash);
    message.controllerSupport !== undefined &&
      (obj.controllerSupport = eAppControllerSupportLevelToJSON(message.controllerSupport));
    message.vrSupported !== undefined && (obj.vrSupported = message.vrSupported);
    message.metacriticScore !== undefined && (obj.metacriticScore = Math.round(message.metacriticScore));
    message.sizeOnDisk !== undefined && (obj.sizeOnDisk = message.sizeOnDisk);
    message.thirdPartyMod !== undefined && (obj.thirdPartyMod = message.thirdPartyMod);
    message.iconData !== undefined && (obj.iconData = message.iconData);
    message.iconDataFormat !== undefined && (obj.iconDataFormat = message.iconDataFormat);
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.libraryCapsuleFilename !== undefined && (obj.libraryCapsuleFilename = message.libraryCapsuleFilename);
    if (message.perClientData) {
      obj.perClientData = message.perClientData.map((e) => e ? CAppOverviewPerClientData.toJSON(e) : undefined);
    } else {
      obj.perClientData = [];
    }
    message.mostAvailableClientid !== undefined && (obj.mostAvailableClientid = message.mostAvailableClientid);
    message.selectedClientid !== undefined && (obj.selectedClientid = message.selectedClientid);
    message.rtStoreAssetMtime !== undefined && (obj.rtStoreAssetMtime = Math.round(message.rtStoreAssetMtime));
    message.rtCustomImageMtime !== undefined && (obj.rtCustomImageMtime = Math.round(message.rtCustomImageMtime));
    message.optionalParentAppId !== undefined && (obj.optionalParentAppId = Math.round(message.optionalParentAppId));
    message.ownerAccountId !== undefined && (obj.ownerAccountId = Math.round(message.ownerAccountId));
    message.reviewScoreWithBombs !== undefined && (obj.reviewScoreWithBombs = Math.round(message.reviewScoreWithBombs));
    message.reviewPercentageWithBombs !== undefined &&
      (obj.reviewPercentageWithBombs = Math.round(message.reviewPercentageWithBombs));
    message.reviewScoreWithoutBombs !== undefined &&
      (obj.reviewScoreWithoutBombs = Math.round(message.reviewScoreWithoutBombs));
    message.reviewPercentageWithoutBombs !== undefined &&
      (obj.reviewPercentageWithoutBombs = Math.round(message.reviewPercentageWithoutBombs));
    message.libraryId !== undefined && (obj.libraryId = message.libraryId);
    message.vrOnly !== undefined && (obj.vrOnly = message.vrOnly);
    message.mastersubAppid !== undefined && (obj.mastersubAppid = Math.round(message.mastersubAppid));
    message.mastersubIncludedwithLogo !== undefined &&
      (obj.mastersubIncludedwithLogo = message.mastersubIncludedwithLogo);
    message.siteLicenseSiteName !== undefined && (obj.siteLicenseSiteName = message.siteLicenseSiteName);
    message.shortcutOverrideAppid !== undefined &&
      (obj.shortcutOverrideAppid = Math.round(message.shortcutOverrideAppid));
    message.steamDeckCompatCategory !== undefined &&
      (obj.steamDeckCompatCategory = eSteamDeckCompatibilityCategoryToJSON(message.steamDeckCompatCategory));
    message.rtLastTimeLocallyPlayed !== undefined &&
      (obj.rtLastTimeLocallyPlayed = Math.round(message.rtLastTimeLocallyPlayed));
    message.rtPurchasedTime !== undefined && (obj.rtPurchasedTime = Math.round(message.rtPurchasedTime));
    message.headerFilename !== undefined && (obj.headerFilename = message.headerFilename);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAppOverview>, I>>(base?: I): CAppOverview {
    return CAppOverview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAppOverview>, I>>(object: I): CAppOverview {
    const message = createBaseCAppOverview();
    message.appid = object.appid ?? 0;
    message.displayName = object.displayName ?? "";
    message.visibleInGameList = object.visibleInGameList ?? false;
    message.sortAs = object.sortAs ?? "";
    message.appType = object.appType ?? 0;
    message.mruIndex = object.mruIndex ?? 0;
    message.rtRecentActivityTime = object.rtRecentActivityTime ?? 0;
    message.minutesPlaytimeForever = object.minutesPlaytimeForever ?? 0;
    message.minutesPlaytimeLastTwoWeeks = object.minutesPlaytimeLastTwoWeeks ?? 0;
    message.rtLastTimePlayed = object.rtLastTimePlayed ?? 0;
    message.storeTag = object.storeTag?.map((e) => e) || [];
    message.association = object.association?.map((e) => CAppOverviewAppAssociation.fromPartial(e)) || [];
    message.storeCategory = object.storeCategory?.map((e) => e) || [];
    message.rtOriginalReleaseDate = object.rtOriginalReleaseDate ?? 0;
    message.rtSteamReleaseDate = object.rtSteamReleaseDate ?? 0;
    message.iconHash = object.iconHash ?? "";
    message.controllerSupport = object.controllerSupport ?? 0;
    message.vrSupported = object.vrSupported ?? false;
    message.metacriticScore = object.metacriticScore ?? 0;
    message.sizeOnDisk = object.sizeOnDisk ?? "0";
    message.thirdPartyMod = object.thirdPartyMod ?? false;
    message.iconData = object.iconData ?? "";
    message.iconDataFormat = object.iconDataFormat ?? "";
    message.gameid = object.gameid ?? "";
    message.libraryCapsuleFilename = object.libraryCapsuleFilename ?? "";
    message.perClientData = object.perClientData?.map((e) => CAppOverviewPerClientData.fromPartial(e)) || [];
    message.mostAvailableClientid = object.mostAvailableClientid ?? "0";
    message.selectedClientid = object.selectedClientid ?? "0";
    message.rtStoreAssetMtime = object.rtStoreAssetMtime ?? 0;
    message.rtCustomImageMtime = object.rtCustomImageMtime ?? 0;
    message.optionalParentAppId = object.optionalParentAppId ?? 0;
    message.ownerAccountId = object.ownerAccountId ?? 0;
    message.reviewScoreWithBombs = object.reviewScoreWithBombs ?? 0;
    message.reviewPercentageWithBombs = object.reviewPercentageWithBombs ?? 0;
    message.reviewScoreWithoutBombs = object.reviewScoreWithoutBombs ?? 0;
    message.reviewPercentageWithoutBombs = object.reviewPercentageWithoutBombs ?? 0;
    message.libraryId = object.libraryId ?? "";
    message.vrOnly = object.vrOnly ?? false;
    message.mastersubAppid = object.mastersubAppid ?? 0;
    message.mastersubIncludedwithLogo = object.mastersubIncludedwithLogo ?? "";
    message.siteLicenseSiteName = object.siteLicenseSiteName ?? "";
    message.shortcutOverrideAppid = object.shortcutOverrideAppid ?? 0;
    message.steamDeckCompatCategory = object.steamDeckCompatCategory ?? 0;
    message.rtLastTimeLocallyPlayed = object.rtLastTimeLocallyPlayed ?? 0;
    message.rtPurchasedTime = object.rtPurchasedTime ?? 0;
    message.headerFilename = object.headerFilename ?? "";
    return message;
  },
};

function createBaseCAppOverviewChange(): CAppOverviewChange {
  return { appOverview: [], removedAppid: [], fullUpdate: false, updateComplete: false };
}

export const CAppOverviewChange = {
  encode(message: CAppOverviewChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appOverview) {
      CAppOverview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.removedAppid) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.fullUpdate === true) {
      writer.uint32(24).bool(message.fullUpdate);
    }
    if (message.updateComplete === true) {
      writer.uint32(32).bool(message.updateComplete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAppOverviewChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAppOverviewChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appOverview.push(CAppOverview.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.removedAppid.push(reader.uint32());
            }
          } else {
            message.removedAppid.push(reader.uint32());
          }
          break;
        case 3:
          message.fullUpdate = reader.bool();
          break;
        case 4:
          message.updateComplete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAppOverviewChange {
    return {
      appOverview: Array.isArray(object?.appOverview)
        ? object.appOverview.map((e: any) => CAppOverview.fromJSON(e))
        : [],
      removedAppid: Array.isArray(object?.removedAppid) ? object.removedAppid.map((e: any) => Number(e)) : [],
      fullUpdate: isSet(object.fullUpdate) ? Boolean(object.fullUpdate) : false,
      updateComplete: isSet(object.updateComplete) ? Boolean(object.updateComplete) : false,
    };
  },

  toJSON(message: CAppOverviewChange): unknown {
    const obj: any = {};
    if (message.appOverview) {
      obj.appOverview = message.appOverview.map((e) => e ? CAppOverview.toJSON(e) : undefined);
    } else {
      obj.appOverview = [];
    }
    if (message.removedAppid) {
      obj.removedAppid = message.removedAppid.map((e) => Math.round(e));
    } else {
      obj.removedAppid = [];
    }
    message.fullUpdate !== undefined && (obj.fullUpdate = message.fullUpdate);
    message.updateComplete !== undefined && (obj.updateComplete = message.updateComplete);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAppOverviewChange>, I>>(base?: I): CAppOverviewChange {
    return CAppOverviewChange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAppOverviewChange>, I>>(object: I): CAppOverviewChange {
    const message = createBaseCAppOverviewChange();
    message.appOverview = object.appOverview?.map((e) => CAppOverview.fromPartial(e)) || [];
    message.removedAppid = object.removedAppid?.map((e) => e) || [];
    message.fullUpdate = object.fullUpdate ?? false;
    message.updateComplete = object.updateComplete ?? false;
    return message;
  },
};

function createBaseCAppBootstrapData(): CAppBootstrapData {
  return { appid: 0, hidden: false, userTag: [] };
}

export const CAppBootstrapData = {
  encode(message: CAppBootstrapData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.hidden === true) {
      writer.uint32(16).bool(message.hidden);
    }
    for (const v of message.userTag) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAppBootstrapData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAppBootstrapData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.hidden = reader.bool();
          break;
        case 3:
          message.userTag.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAppBootstrapData {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      userTag: Array.isArray(object?.userTag) ? object.userTag.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CAppBootstrapData): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    if (message.userTag) {
      obj.userTag = message.userTag.map((e) => e);
    } else {
      obj.userTag = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAppBootstrapData>, I>>(base?: I): CAppBootstrapData {
    return CAppBootstrapData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAppBootstrapData>, I>>(object: I): CAppBootstrapData {
    const message = createBaseCAppBootstrapData();
    message.appid = object.appid ?? 0;
    message.hidden = object.hidden ?? false;
    message.userTag = object.userTag?.map((e) => e) || [];
    return message;
  },
};

function createBaseCLibraryBootstrapData(): CLibraryBootstrapData {
  return { appData: [] };
}

export const CLibraryBootstrapData = {
  encode(message: CLibraryBootstrapData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appData) {
      CAppBootstrapData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLibraryBootstrapData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLibraryBootstrapData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appData.push(CAppBootstrapData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CLibraryBootstrapData {
    return {
      appData: Array.isArray(object?.appData) ? object.appData.map((e: any) => CAppBootstrapData.fromJSON(e)) : [],
    };
  },

  toJSON(message: CLibraryBootstrapData): unknown {
    const obj: any = {};
    if (message.appData) {
      obj.appData = message.appData.map((e) => e ? CAppBootstrapData.toJSON(e) : undefined);
    } else {
      obj.appData = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CLibraryBootstrapData>, I>>(base?: I): CLibraryBootstrapData {
    return CLibraryBootstrapData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CLibraryBootstrapData>, I>>(object: I): CLibraryBootstrapData {
    const message = createBaseCLibraryBootstrapData();
    message.appData = object.appData?.map((e) => CAppBootstrapData.fromPartial(e)) || [];
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
