/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum ERemoteClientBroadcastMsg {
  k_ERemoteClientBroadcastMsgDiscovery = 0,
  k_ERemoteClientBroadcastMsgStatus = 1,
  k_ERemoteClientBroadcastMsgOffline = 2,
  k_ERemoteDeviceAuthorizationRequest = 3,
  k_ERemoteDeviceAuthorizationResponse = 4,
  k_ERemoteDeviceStreamingRequest = 5,
  k_ERemoteDeviceStreamingResponse = 6,
  k_ERemoteDeviceProofRequest = 7,
  k_ERemoteDeviceProofResponse = 8,
  k_ERemoteDeviceAuthorizationCancelRequest = 9,
  k_ERemoteDeviceStreamingCancelRequest = 10,
  k_ERemoteClientBroadcastMsgClientIDDeconflict = 11,
  k_ERemoteDeviceStreamTransportSignal = 12,
  k_ERemoteDeviceStreamingProgress = 13,
  k_ERemoteDeviceAuthorizationConfirmed = 14,
  UNRECOGNIZED = -1,
}

export function eRemoteClientBroadcastMsgFromJSON(object: any): ERemoteClientBroadcastMsg {
  switch (object) {
    case 0:
    case "k_ERemoteClientBroadcastMsgDiscovery":
      return ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgDiscovery;
    case 1:
    case "k_ERemoteClientBroadcastMsgStatus":
      return ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgStatus;
    case 2:
    case "k_ERemoteClientBroadcastMsgOffline":
      return ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgOffline;
    case 3:
    case "k_ERemoteDeviceAuthorizationRequest":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationRequest;
    case 4:
    case "k_ERemoteDeviceAuthorizationResponse":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationResponse;
    case 5:
    case "k_ERemoteDeviceStreamingRequest":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingRequest;
    case 6:
    case "k_ERemoteDeviceStreamingResponse":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingResponse;
    case 7:
    case "k_ERemoteDeviceProofRequest":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceProofRequest;
    case 8:
    case "k_ERemoteDeviceProofResponse":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceProofResponse;
    case 9:
    case "k_ERemoteDeviceAuthorizationCancelRequest":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationCancelRequest;
    case 10:
    case "k_ERemoteDeviceStreamingCancelRequest":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingCancelRequest;
    case 11:
    case "k_ERemoteClientBroadcastMsgClientIDDeconflict":
      return ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgClientIDDeconflict;
    case 12:
    case "k_ERemoteDeviceStreamTransportSignal":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamTransportSignal;
    case 13:
    case "k_ERemoteDeviceStreamingProgress":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingProgress;
    case 14:
    case "k_ERemoteDeviceAuthorizationConfirmed":
      return ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationConfirmed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERemoteClientBroadcastMsg.UNRECOGNIZED;
  }
}

export function eRemoteClientBroadcastMsgToJSON(object: ERemoteClientBroadcastMsg): string {
  switch (object) {
    case ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgDiscovery:
      return "k_ERemoteClientBroadcastMsgDiscovery";
    case ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgStatus:
      return "k_ERemoteClientBroadcastMsgStatus";
    case ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgOffline:
      return "k_ERemoteClientBroadcastMsgOffline";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationRequest:
      return "k_ERemoteDeviceAuthorizationRequest";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationResponse:
      return "k_ERemoteDeviceAuthorizationResponse";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingRequest:
      return "k_ERemoteDeviceStreamingRequest";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingResponse:
      return "k_ERemoteDeviceStreamingResponse";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceProofRequest:
      return "k_ERemoteDeviceProofRequest";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceProofResponse:
      return "k_ERemoteDeviceProofResponse";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationCancelRequest:
      return "k_ERemoteDeviceAuthorizationCancelRequest";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingCancelRequest:
      return "k_ERemoteDeviceStreamingCancelRequest";
    case ERemoteClientBroadcastMsg.k_ERemoteClientBroadcastMsgClientIDDeconflict:
      return "k_ERemoteClientBroadcastMsgClientIDDeconflict";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamTransportSignal:
      return "k_ERemoteDeviceStreamTransportSignal";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceStreamingProgress:
      return "k_ERemoteDeviceStreamingProgress";
    case ERemoteClientBroadcastMsg.k_ERemoteDeviceAuthorizationConfirmed:
      return "k_ERemoteDeviceAuthorizationConfirmed";
    case ERemoteClientBroadcastMsg.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ERemoteClientService {
  k_ERemoteClientServiceNone = 0,
  k_ERemoteClientServiceRemoteControl = 1,
  k_ERemoteClientServiceGameStreaming = 2,
  k_ERemoteClientServiceSiteLicense = 4,
  k_ERemoteClientServiceContentCache = 8,
  k_ERemoteClientServiceContentServer = 16,
  UNRECOGNIZED = -1,
}

export function eRemoteClientServiceFromJSON(object: any): ERemoteClientService {
  switch (object) {
    case 0:
    case "k_ERemoteClientServiceNone":
      return ERemoteClientService.k_ERemoteClientServiceNone;
    case 1:
    case "k_ERemoteClientServiceRemoteControl":
      return ERemoteClientService.k_ERemoteClientServiceRemoteControl;
    case 2:
    case "k_ERemoteClientServiceGameStreaming":
      return ERemoteClientService.k_ERemoteClientServiceGameStreaming;
    case 4:
    case "k_ERemoteClientServiceSiteLicense":
      return ERemoteClientService.k_ERemoteClientServiceSiteLicense;
    case 8:
    case "k_ERemoteClientServiceContentCache":
      return ERemoteClientService.k_ERemoteClientServiceContentCache;
    case 16:
    case "k_ERemoteClientServiceContentServer":
      return ERemoteClientService.k_ERemoteClientServiceContentServer;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERemoteClientService.UNRECOGNIZED;
  }
}

export function eRemoteClientServiceToJSON(object: ERemoteClientService): string {
  switch (object) {
    case ERemoteClientService.k_ERemoteClientServiceNone:
      return "k_ERemoteClientServiceNone";
    case ERemoteClientService.k_ERemoteClientServiceRemoteControl:
      return "k_ERemoteClientServiceRemoteControl";
    case ERemoteClientService.k_ERemoteClientServiceGameStreaming:
      return "k_ERemoteClientServiceGameStreaming";
    case ERemoteClientService.k_ERemoteClientServiceSiteLicense:
      return "k_ERemoteClientServiceSiteLicense";
    case ERemoteClientService.k_ERemoteClientServiceContentCache:
      return "k_ERemoteClientServiceContentCache";
    case ERemoteClientService.k_ERemoteClientServiceContentServer:
      return "k_ERemoteClientServiceContentServer";
    case ERemoteClientService.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ERemoteDeviceAuthorizationResult {
  k_ERemoteDeviceAuthorizationSuccess = 0,
  k_ERemoteDeviceAuthorizationDenied = 1,
  k_ERemoteDeviceAuthorizationNotLoggedIn = 2,
  k_ERemoteDeviceAuthorizationOffline = 3,
  k_ERemoteDeviceAuthorizationBusy = 4,
  k_ERemoteDeviceAuthorizationInProgress = 5,
  k_ERemoteDeviceAuthorizationTimedOut = 6,
  k_ERemoteDeviceAuthorizationFailed = 7,
  k_ERemoteDeviceAuthorizationCanceled = 8,
  UNRECOGNIZED = -1,
}

export function eRemoteDeviceAuthorizationResultFromJSON(object: any): ERemoteDeviceAuthorizationResult {
  switch (object) {
    case 0:
    case "k_ERemoteDeviceAuthorizationSuccess":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationSuccess;
    case 1:
    case "k_ERemoteDeviceAuthorizationDenied":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationDenied;
    case 2:
    case "k_ERemoteDeviceAuthorizationNotLoggedIn":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationNotLoggedIn;
    case 3:
    case "k_ERemoteDeviceAuthorizationOffline":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationOffline;
    case 4:
    case "k_ERemoteDeviceAuthorizationBusy":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationBusy;
    case 5:
    case "k_ERemoteDeviceAuthorizationInProgress":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationInProgress;
    case 6:
    case "k_ERemoteDeviceAuthorizationTimedOut":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationTimedOut;
    case 7:
    case "k_ERemoteDeviceAuthorizationFailed":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationFailed;
    case 8:
    case "k_ERemoteDeviceAuthorizationCanceled":
      return ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationCanceled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERemoteDeviceAuthorizationResult.UNRECOGNIZED;
  }
}

export function eRemoteDeviceAuthorizationResultToJSON(object: ERemoteDeviceAuthorizationResult): string {
  switch (object) {
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationSuccess:
      return "k_ERemoteDeviceAuthorizationSuccess";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationDenied:
      return "k_ERemoteDeviceAuthorizationDenied";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationNotLoggedIn:
      return "k_ERemoteDeviceAuthorizationNotLoggedIn";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationOffline:
      return "k_ERemoteDeviceAuthorizationOffline";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationBusy:
      return "k_ERemoteDeviceAuthorizationBusy";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationInProgress:
      return "k_ERemoteDeviceAuthorizationInProgress";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationTimedOut:
      return "k_ERemoteDeviceAuthorizationTimedOut";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationFailed:
      return "k_ERemoteDeviceAuthorizationFailed";
    case ERemoteDeviceAuthorizationResult.k_ERemoteDeviceAuthorizationCanceled:
      return "k_ERemoteDeviceAuthorizationCanceled";
    case ERemoteDeviceAuthorizationResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamDeviceFormFactor {
  k_EStreamDeviceFormFactorUnknown = 0,
  k_EStreamDeviceFormFactorPhone = 1,
  k_EStreamDeviceFormFactorTablet = 2,
  k_EStreamDeviceFormFactorComputer = 3,
  k_EStreamDeviceFormFactorTV = 4,
  UNRECOGNIZED = -1,
}

export function eStreamDeviceFormFactorFromJSON(object: any): EStreamDeviceFormFactor {
  switch (object) {
    case 0:
    case "k_EStreamDeviceFormFactorUnknown":
      return EStreamDeviceFormFactor.k_EStreamDeviceFormFactorUnknown;
    case 1:
    case "k_EStreamDeviceFormFactorPhone":
      return EStreamDeviceFormFactor.k_EStreamDeviceFormFactorPhone;
    case 2:
    case "k_EStreamDeviceFormFactorTablet":
      return EStreamDeviceFormFactor.k_EStreamDeviceFormFactorTablet;
    case 3:
    case "k_EStreamDeviceFormFactorComputer":
      return EStreamDeviceFormFactor.k_EStreamDeviceFormFactorComputer;
    case 4:
    case "k_EStreamDeviceFormFactorTV":
      return EStreamDeviceFormFactor.k_EStreamDeviceFormFactorTV;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamDeviceFormFactor.UNRECOGNIZED;
  }
}

export function eStreamDeviceFormFactorToJSON(object: EStreamDeviceFormFactor): string {
  switch (object) {
    case EStreamDeviceFormFactor.k_EStreamDeviceFormFactorUnknown:
      return "k_EStreamDeviceFormFactorUnknown";
    case EStreamDeviceFormFactor.k_EStreamDeviceFormFactorPhone:
      return "k_EStreamDeviceFormFactorPhone";
    case EStreamDeviceFormFactor.k_EStreamDeviceFormFactorTablet:
      return "k_EStreamDeviceFormFactorTablet";
    case EStreamDeviceFormFactor.k_EStreamDeviceFormFactorComputer:
      return "k_EStreamDeviceFormFactorComputer";
    case EStreamDeviceFormFactor.k_EStreamDeviceFormFactorTV:
      return "k_EStreamDeviceFormFactorTV";
    case EStreamDeviceFormFactor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamTransport {
  k_EStreamTransportNone = 0,
  k_EStreamTransportUDP = 1,
  k_EStreamTransportUDPRelay = 2,
  k_EStreamTransportWebRTC = 3,
  k_EStreamTransportSDR = 4,
  k_EStreamTransportUDP_SNS = 5,
  k_EStreamTransportUDPRelay_SNS = 6,
  UNRECOGNIZED = -1,
}

export function eStreamTransportFromJSON(object: any): EStreamTransport {
  switch (object) {
    case 0:
    case "k_EStreamTransportNone":
      return EStreamTransport.k_EStreamTransportNone;
    case 1:
    case "k_EStreamTransportUDP":
      return EStreamTransport.k_EStreamTransportUDP;
    case 2:
    case "k_EStreamTransportUDPRelay":
      return EStreamTransport.k_EStreamTransportUDPRelay;
    case 3:
    case "k_EStreamTransportWebRTC":
      return EStreamTransport.k_EStreamTransportWebRTC;
    case 4:
    case "k_EStreamTransportSDR":
      return EStreamTransport.k_EStreamTransportSDR;
    case 5:
    case "k_EStreamTransportUDP_SNS":
      return EStreamTransport.k_EStreamTransportUDP_SNS;
    case 6:
    case "k_EStreamTransportUDPRelay_SNS":
      return EStreamTransport.k_EStreamTransportUDPRelay_SNS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamTransport.UNRECOGNIZED;
  }
}

export function eStreamTransportToJSON(object: EStreamTransport): string {
  switch (object) {
    case EStreamTransport.k_EStreamTransportNone:
      return "k_EStreamTransportNone";
    case EStreamTransport.k_EStreamTransportUDP:
      return "k_EStreamTransportUDP";
    case EStreamTransport.k_EStreamTransportUDPRelay:
      return "k_EStreamTransportUDPRelay";
    case EStreamTransport.k_EStreamTransportWebRTC:
      return "k_EStreamTransportWebRTC";
    case EStreamTransport.k_EStreamTransportSDR:
      return "k_EStreamTransportSDR";
    case EStreamTransport.k_EStreamTransportUDP_SNS:
      return "k_EStreamTransportUDP_SNS";
    case EStreamTransport.k_EStreamTransportUDPRelay_SNS:
      return "k_EStreamTransportUDPRelay_SNS";
    case EStreamTransport.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamInterface {
  k_EStreamInterfaceDefault = 0,
  k_EStreamInterfaceRecentGames = 1,
  k_EStreamInterfaceBigPicture = 2,
  k_EStreamInterfaceDesktop = 3,
  UNRECOGNIZED = -1,
}

export function eStreamInterfaceFromJSON(object: any): EStreamInterface {
  switch (object) {
    case 0:
    case "k_EStreamInterfaceDefault":
      return EStreamInterface.k_EStreamInterfaceDefault;
    case 1:
    case "k_EStreamInterfaceRecentGames":
      return EStreamInterface.k_EStreamInterfaceRecentGames;
    case 2:
    case "k_EStreamInterfaceBigPicture":
      return EStreamInterface.k_EStreamInterfaceBigPicture;
    case 3:
    case "k_EStreamInterfaceDesktop":
      return EStreamInterface.k_EStreamInterfaceDesktop;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamInterface.UNRECOGNIZED;
  }
}

export function eStreamInterfaceToJSON(object: EStreamInterface): string {
  switch (object) {
    case EStreamInterface.k_EStreamInterfaceDefault:
      return "k_EStreamInterfaceDefault";
    case EStreamInterface.k_EStreamInterfaceRecentGames:
      return "k_EStreamInterfaceRecentGames";
    case EStreamInterface.k_EStreamInterfaceBigPicture:
      return "k_EStreamInterfaceBigPicture";
    case EStreamInterface.k_EStreamInterfaceDesktop:
      return "k_EStreamInterfaceDesktop";
    case EStreamInterface.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ERemoteDeviceStreamingResult {
  k_ERemoteDeviceStreamingSuccess = 0,
  k_ERemoteDeviceStreamingUnauthorized = 1,
  k_ERemoteDeviceStreamingScreenLocked = 2,
  k_ERemoteDeviceStreamingFailed = 3,
  k_ERemoteDeviceStreamingBusy = 4,
  k_ERemoteDeviceStreamingInProgress = 5,
  k_ERemoteDeviceStreamingCanceled = 6,
  k_ERemoteDeviceStreamingDriversNotInstalled = 7,
  k_ERemoteDeviceStreamingDisabled = 8,
  k_ERemoteDeviceStreamingBroadcastingActive = 9,
  k_ERemoteDeviceStreamingVRActive = 10,
  k_ERemoteDeviceStreamingPINRequired = 11,
  k_ERemoteDeviceStreamingTransportUnavailable = 12,
  k_ERemoteDeviceStreamingInvisible = 13,
  k_ERemoteDeviceStreamingGameLaunchFailed = 14,
  UNRECOGNIZED = -1,
}

export function eRemoteDeviceStreamingResultFromJSON(object: any): ERemoteDeviceStreamingResult {
  switch (object) {
    case 0:
    case "k_ERemoteDeviceStreamingSuccess":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingSuccess;
    case 1:
    case "k_ERemoteDeviceStreamingUnauthorized":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingUnauthorized;
    case 2:
    case "k_ERemoteDeviceStreamingScreenLocked":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingScreenLocked;
    case 3:
    case "k_ERemoteDeviceStreamingFailed":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingFailed;
    case 4:
    case "k_ERemoteDeviceStreamingBusy":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingBusy;
    case 5:
    case "k_ERemoteDeviceStreamingInProgress":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingInProgress;
    case 6:
    case "k_ERemoteDeviceStreamingCanceled":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingCanceled;
    case 7:
    case "k_ERemoteDeviceStreamingDriversNotInstalled":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingDriversNotInstalled;
    case 8:
    case "k_ERemoteDeviceStreamingDisabled":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingDisabled;
    case 9:
    case "k_ERemoteDeviceStreamingBroadcastingActive":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingBroadcastingActive;
    case 10:
    case "k_ERemoteDeviceStreamingVRActive":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingVRActive;
    case 11:
    case "k_ERemoteDeviceStreamingPINRequired":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingPINRequired;
    case 12:
    case "k_ERemoteDeviceStreamingTransportUnavailable":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingTransportUnavailable;
    case 13:
    case "k_ERemoteDeviceStreamingInvisible":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingInvisible;
    case 14:
    case "k_ERemoteDeviceStreamingGameLaunchFailed":
      return ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingGameLaunchFailed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERemoteDeviceStreamingResult.UNRECOGNIZED;
  }
}

export function eRemoteDeviceStreamingResultToJSON(object: ERemoteDeviceStreamingResult): string {
  switch (object) {
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingSuccess:
      return "k_ERemoteDeviceStreamingSuccess";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingUnauthorized:
      return "k_ERemoteDeviceStreamingUnauthorized";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingScreenLocked:
      return "k_ERemoteDeviceStreamingScreenLocked";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingFailed:
      return "k_ERemoteDeviceStreamingFailed";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingBusy:
      return "k_ERemoteDeviceStreamingBusy";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingInProgress:
      return "k_ERemoteDeviceStreamingInProgress";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingCanceled:
      return "k_ERemoteDeviceStreamingCanceled";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingDriversNotInstalled:
      return "k_ERemoteDeviceStreamingDriversNotInstalled";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingDisabled:
      return "k_ERemoteDeviceStreamingDisabled";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingBroadcastingActive:
      return "k_ERemoteDeviceStreamingBroadcastingActive";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingVRActive:
      return "k_ERemoteDeviceStreamingVRActive";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingPINRequired:
      return "k_ERemoteDeviceStreamingPINRequired";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingTransportUnavailable:
      return "k_ERemoteDeviceStreamingTransportUnavailable";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingInvisible:
      return "k_ERemoteDeviceStreamingInvisible";
    case ERemoteDeviceStreamingResult.k_ERemoteDeviceStreamingGameLaunchFailed:
      return "k_ERemoteDeviceStreamingGameLaunchFailed";
    case ERemoteDeviceStreamingResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgRemoteClientBroadcastHeader {
  clientId: string;
  msgType: ERemoteClientBroadcastMsg;
  instanceId: string;
  deviceId: string;
  deviceToken: Buffer;
}

export interface CMsgRemoteClientBroadcastStatus {
  version: number;
  minVersion: number;
  connectPort: number;
  hostname: string;
  enabledServices: number;
  ostype: number;
  is64bit: boolean;
  users: CMsgRemoteClientBroadcastStatus_User[];
  euniverse: number;
  timestamp: number;
  screenLocked: boolean;
  gamesRunning: boolean;
  macAddresses: string[];
  downloadLanPeerGroup: number;
  broadcastingActive: boolean;
  vrActive: boolean;
  contentCachePort: number;
  ipAddresses: string[];
  publicIpAddress: string;
  remoteplayActive: boolean;
  supportedServices: number;
  steamDeck: boolean;
  steamVersion: string;
}

export interface CMsgRemoteClientBroadcastStatus_User {
  steamid: string;
  authKeyId: number;
}

export interface CMsgRemoteClientBroadcastDiscovery {
  seqNum: number;
  clientIds: string[];
}

export interface CMsgRemoteClientBroadcastClientIDDeconflict {
  clientIds: string[];
}

export interface CMsgRemoteDeviceAuthorizationRequest {
  deviceToken: Buffer;
  deviceName: string;
  encryptedRequest: Buffer;
  authKey: Buffer;
}

export enum CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage {
  k_EKeyEscrowUsageStreamingDevice = 0,
  UNRECOGNIZED = -1,
}

export function cMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsageFromJSON(
  object: any,
): CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage {
  switch (object) {
    case 0:
    case "k_EKeyEscrowUsageStreamingDevice":
      return CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage.k_EKeyEscrowUsageStreamingDevice;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage.UNRECOGNIZED;
  }
}

export function cMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsageToJSON(
  object: CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage,
): string {
  switch (object) {
    case CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage.k_EKeyEscrowUsageStreamingDevice:
      return "k_EKeyEscrowUsageStreamingDevice";
    case CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
  password: Buffer;
  identifier: string;
  payload: Buffer;
  timestamp: number;
  usage: CMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsage;
  deviceName: string;
  deviceModel: string;
  deviceSerial: string;
  deviceProvisioningId: number;
}

export interface CMsgRemoteDeviceAuthorizationCancelRequest {
}

export interface CMsgRemoteDeviceAuthorizationResponse {
  result: ERemoteDeviceAuthorizationResult;
  steamid: string;
  authKey: Buffer;
  deviceToken: Buffer;
}

export interface CMsgRemoteDeviceAuthorizationConfirmed {
  result: ERemoteDeviceAuthorizationResult;
}

export interface CMsgRemoteDeviceStreamingRequest {
  requestId: number;
  maximumResolutionX: number;
  maximumResolutionY: number;
  audioChannelCount: number;
  deviceVersion: string;
  streamDesktop: boolean;
  deviceToken: Buffer;
  pin: Buffer;
  enableVideoStreaming: boolean;
  enableAudioStreaming: boolean;
  enableInputStreaming: boolean;
  networkTest: boolean;
  clientId: string;
  supportedTransport: EStreamTransport[];
  restricted: boolean;
  formFactor: EStreamDeviceFormFactor;
  gamepadCount: number;
  gamepads: CMsgRemoteDeviceStreamingRequest_ReservedGamepad[];
  gameid: string;
  streamInterface: EStreamInterface;
}

export interface CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
  controllerType: number;
  controllerSubtype: number;
}

export interface CMsgRemoteDeviceStreamingCancelRequest {
  requestId: number;
}

export interface CMsgRemoteDeviceStreamingProgress {
  requestId: number;
  progress: number;
}

export interface CMsgRemoteDeviceStreamingResponse {
  requestId: number;
  result: ERemoteDeviceStreamingResult;
  port: number;
  encryptedSessionKey: Buffer;
  transport: EStreamTransport;
  relayServer: string;
  cert: string;
}

export interface CMsgRemoteDeviceProofRequest {
  challenge: Buffer;
  requestId: number;
  updateSecret: boolean;
}

export interface CMsgRemoteDeviceProofResponse {
  response: Buffer;
  requestId: number;
  updatedSecret: boolean;
}

export interface CMsgRemoteDeviceStreamTransportSignal {
  token: Buffer;
  payload: Buffer;
}

function createBaseCMsgRemoteClientBroadcastHeader(): CMsgRemoteClientBroadcastHeader {
  return { clientId: "0", msgType: 0, instanceId: "0", deviceId: "0", deviceToken: Buffer.alloc(0) };
}

export const CMsgRemoteClientBroadcastHeader = {
  encode(message: CMsgRemoteClientBroadcastHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "0") {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.msgType !== 0) {
      writer.uint32(16).int32(message.msgType);
    }
    if (message.instanceId !== "0") {
      writer.uint32(24).uint64(message.instanceId);
    }
    if (message.deviceId !== "0") {
      writer.uint32(32).uint64(message.deviceId);
    }
    if (message.deviceToken.length !== 0) {
      writer.uint32(42).bytes(message.deviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientBroadcastHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientBroadcastHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.msgType = reader.int32() as any;
          break;
        case 3:
          message.instanceId = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.deviceId = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.deviceToken = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientBroadcastHeader {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      msgType: isSet(object.msgType) ? eRemoteClientBroadcastMsgFromJSON(object.msgType) : 0,
      instanceId: isSet(object.instanceId) ? String(object.instanceId) : "0",
      deviceId: isSet(object.deviceId) ? String(object.deviceId) : "0",
      deviceToken: isSet(object.deviceToken) ? Buffer.from(bytesFromBase64(object.deviceToken)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgRemoteClientBroadcastHeader): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.msgType !== undefined && (obj.msgType = eRemoteClientBroadcastMsgToJSON(message.msgType));
    message.instanceId !== undefined && (obj.instanceId = message.instanceId);
    message.deviceId !== undefined && (obj.deviceId = message.deviceId);
    message.deviceToken !== undefined &&
      (obj.deviceToken = base64FromBytes(message.deviceToken !== undefined ? message.deviceToken : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastHeader>, I>>(base?: I): CMsgRemoteClientBroadcastHeader {
    return CMsgRemoteClientBroadcastHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastHeader>, I>>(
    object: I,
  ): CMsgRemoteClientBroadcastHeader {
    const message = createBaseCMsgRemoteClientBroadcastHeader();
    message.clientId = object.clientId ?? "0";
    message.msgType = object.msgType ?? 0;
    message.instanceId = object.instanceId ?? "0";
    message.deviceId = object.deviceId ?? "0";
    message.deviceToken = object.deviceToken ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgRemoteClientBroadcastStatus(): CMsgRemoteClientBroadcastStatus {
  return {
    version: 0,
    minVersion: 0,
    connectPort: 0,
    hostname: "",
    enabledServices: 0,
    ostype: 0,
    is64bit: false,
    users: [],
    euniverse: 0,
    timestamp: 0,
    screenLocked: false,
    gamesRunning: false,
    macAddresses: [],
    downloadLanPeerGroup: 0,
    broadcastingActive: false,
    vrActive: false,
    contentCachePort: 0,
    ipAddresses: [],
    publicIpAddress: "",
    remoteplayActive: false,
    supportedServices: 0,
    steamDeck: false,
    steamVersion: "0",
  };
}

export const CMsgRemoteClientBroadcastStatus = {
  encode(message: CMsgRemoteClientBroadcastStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).int32(message.version);
    }
    if (message.minVersion !== 0) {
      writer.uint32(16).int32(message.minVersion);
    }
    if (message.connectPort !== 0) {
      writer.uint32(24).uint32(message.connectPort);
    }
    if (message.hostname !== "") {
      writer.uint32(34).string(message.hostname);
    }
    if (message.enabledServices !== 0) {
      writer.uint32(48).uint32(message.enabledServices);
    }
    if (message.ostype !== 0) {
      writer.uint32(56).int32(message.ostype);
    }
    if (message.is64bit === true) {
      writer.uint32(64).bool(message.is64bit);
    }
    for (const v of message.users) {
      CMsgRemoteClientBroadcastStatus_User.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.euniverse !== 0) {
      writer.uint32(88).int32(message.euniverse);
    }
    if (message.timestamp !== 0) {
      writer.uint32(96).uint32(message.timestamp);
    }
    if (message.screenLocked === true) {
      writer.uint32(104).bool(message.screenLocked);
    }
    if (message.gamesRunning === true) {
      writer.uint32(112).bool(message.gamesRunning);
    }
    for (const v of message.macAddresses) {
      writer.uint32(122).string(v!);
    }
    if (message.downloadLanPeerGroup !== 0) {
      writer.uint32(128).uint32(message.downloadLanPeerGroup);
    }
    if (message.broadcastingActive === true) {
      writer.uint32(136).bool(message.broadcastingActive);
    }
    if (message.vrActive === true) {
      writer.uint32(144).bool(message.vrActive);
    }
    if (message.contentCachePort !== 0) {
      writer.uint32(152).uint32(message.contentCachePort);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(162).string(v!);
    }
    if (message.publicIpAddress !== "") {
      writer.uint32(170).string(message.publicIpAddress);
    }
    if (message.remoteplayActive === true) {
      writer.uint32(176).bool(message.remoteplayActive);
    }
    if (message.supportedServices !== 0) {
      writer.uint32(184).uint32(message.supportedServices);
    }
    if (message.steamDeck === true) {
      writer.uint32(192).bool(message.steamDeck);
    }
    if (message.steamVersion !== "0") {
      writer.uint32(200).uint64(message.steamVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientBroadcastStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientBroadcastStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int32();
          break;
        case 2:
          message.minVersion = reader.int32();
          break;
        case 3:
          message.connectPort = reader.uint32();
          break;
        case 4:
          message.hostname = reader.string();
          break;
        case 6:
          message.enabledServices = reader.uint32();
          break;
        case 7:
          message.ostype = reader.int32();
          break;
        case 8:
          message.is64bit = reader.bool();
          break;
        case 9:
          message.users.push(CMsgRemoteClientBroadcastStatus_User.decode(reader, reader.uint32()));
          break;
        case 11:
          message.euniverse = reader.int32();
          break;
        case 12:
          message.timestamp = reader.uint32();
          break;
        case 13:
          message.screenLocked = reader.bool();
          break;
        case 14:
          message.gamesRunning = reader.bool();
          break;
        case 15:
          message.macAddresses.push(reader.string());
          break;
        case 16:
          message.downloadLanPeerGroup = reader.uint32();
          break;
        case 17:
          message.broadcastingActive = reader.bool();
          break;
        case 18:
          message.vrActive = reader.bool();
          break;
        case 19:
          message.contentCachePort = reader.uint32();
          break;
        case 20:
          message.ipAddresses.push(reader.string());
          break;
        case 21:
          message.publicIpAddress = reader.string();
          break;
        case 22:
          message.remoteplayActive = reader.bool();
          break;
        case 23:
          message.supportedServices = reader.uint32();
          break;
        case 24:
          message.steamDeck = reader.bool();
          break;
        case 25:
          message.steamVersion = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientBroadcastStatus {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      minVersion: isSet(object.minVersion) ? Number(object.minVersion) : 0,
      connectPort: isSet(object.connectPort) ? Number(object.connectPort) : 0,
      hostname: isSet(object.hostname) ? String(object.hostname) : "",
      enabledServices: isSet(object.enabledServices) ? Number(object.enabledServices) : 0,
      ostype: isSet(object.ostype) ? Number(object.ostype) : 0,
      is64bit: isSet(object.is64bit) ? Boolean(object.is64bit) : false,
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => CMsgRemoteClientBroadcastStatus_User.fromJSON(e))
        : [],
      euniverse: isSet(object.euniverse) ? Number(object.euniverse) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      screenLocked: isSet(object.screenLocked) ? Boolean(object.screenLocked) : false,
      gamesRunning: isSet(object.gamesRunning) ? Boolean(object.gamesRunning) : false,
      macAddresses: Array.isArray(object?.macAddresses) ? object.macAddresses.map((e: any) => String(e)) : [],
      downloadLanPeerGroup: isSet(object.downloadLanPeerGroup) ? Number(object.downloadLanPeerGroup) : 0,
      broadcastingActive: isSet(object.broadcastingActive) ? Boolean(object.broadcastingActive) : false,
      vrActive: isSet(object.vrActive) ? Boolean(object.vrActive) : false,
      contentCachePort: isSet(object.contentCachePort) ? Number(object.contentCachePort) : 0,
      ipAddresses: Array.isArray(object?.ipAddresses) ? object.ipAddresses.map((e: any) => String(e)) : [],
      publicIpAddress: isSet(object.publicIpAddress) ? String(object.publicIpAddress) : "",
      remoteplayActive: isSet(object.remoteplayActive) ? Boolean(object.remoteplayActive) : false,
      supportedServices: isSet(object.supportedServices) ? Number(object.supportedServices) : 0,
      steamDeck: isSet(object.steamDeck) ? Boolean(object.steamDeck) : false,
      steamVersion: isSet(object.steamVersion) ? String(object.steamVersion) : "0",
    };
  },

  toJSON(message: CMsgRemoteClientBroadcastStatus): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.minVersion !== undefined && (obj.minVersion = Math.round(message.minVersion));
    message.connectPort !== undefined && (obj.connectPort = Math.round(message.connectPort));
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.enabledServices !== undefined && (obj.enabledServices = Math.round(message.enabledServices));
    message.ostype !== undefined && (obj.ostype = Math.round(message.ostype));
    message.is64bit !== undefined && (obj.is64bit = message.is64bit);
    if (message.users) {
      obj.users = message.users.map((e) => e ? CMsgRemoteClientBroadcastStatus_User.toJSON(e) : undefined);
    } else {
      obj.users = [];
    }
    message.euniverse !== undefined && (obj.euniverse = Math.round(message.euniverse));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.screenLocked !== undefined && (obj.screenLocked = message.screenLocked);
    message.gamesRunning !== undefined && (obj.gamesRunning = message.gamesRunning);
    if (message.macAddresses) {
      obj.macAddresses = message.macAddresses.map((e) => e);
    } else {
      obj.macAddresses = [];
    }
    message.downloadLanPeerGroup !== undefined && (obj.downloadLanPeerGroup = Math.round(message.downloadLanPeerGroup));
    message.broadcastingActive !== undefined && (obj.broadcastingActive = message.broadcastingActive);
    message.vrActive !== undefined && (obj.vrActive = message.vrActive);
    message.contentCachePort !== undefined && (obj.contentCachePort = Math.round(message.contentCachePort));
    if (message.ipAddresses) {
      obj.ipAddresses = message.ipAddresses.map((e) => e);
    } else {
      obj.ipAddresses = [];
    }
    message.publicIpAddress !== undefined && (obj.publicIpAddress = message.publicIpAddress);
    message.remoteplayActive !== undefined && (obj.remoteplayActive = message.remoteplayActive);
    message.supportedServices !== undefined && (obj.supportedServices = Math.round(message.supportedServices));
    message.steamDeck !== undefined && (obj.steamDeck = message.steamDeck);
    message.steamVersion !== undefined && (obj.steamVersion = message.steamVersion);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastStatus>, I>>(base?: I): CMsgRemoteClientBroadcastStatus {
    return CMsgRemoteClientBroadcastStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastStatus>, I>>(
    object: I,
  ): CMsgRemoteClientBroadcastStatus {
    const message = createBaseCMsgRemoteClientBroadcastStatus();
    message.version = object.version ?? 0;
    message.minVersion = object.minVersion ?? 0;
    message.connectPort = object.connectPort ?? 0;
    message.hostname = object.hostname ?? "";
    message.enabledServices = object.enabledServices ?? 0;
    message.ostype = object.ostype ?? 0;
    message.is64bit = object.is64bit ?? false;
    message.users = object.users?.map((e) => CMsgRemoteClientBroadcastStatus_User.fromPartial(e)) || [];
    message.euniverse = object.euniverse ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.screenLocked = object.screenLocked ?? false;
    message.gamesRunning = object.gamesRunning ?? false;
    message.macAddresses = object.macAddresses?.map((e) => e) || [];
    message.downloadLanPeerGroup = object.downloadLanPeerGroup ?? 0;
    message.broadcastingActive = object.broadcastingActive ?? false;
    message.vrActive = object.vrActive ?? false;
    message.contentCachePort = object.contentCachePort ?? 0;
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    message.publicIpAddress = object.publicIpAddress ?? "";
    message.remoteplayActive = object.remoteplayActive ?? false;
    message.supportedServices = object.supportedServices ?? 0;
    message.steamDeck = object.steamDeck ?? false;
    message.steamVersion = object.steamVersion ?? "0";
    return message;
  },
};

function createBaseCMsgRemoteClientBroadcastStatus_User(): CMsgRemoteClientBroadcastStatus_User {
  return { steamid: "0", authKeyId: 0 };
}

export const CMsgRemoteClientBroadcastStatus_User = {
  encode(message: CMsgRemoteClientBroadcastStatus_User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authKeyId !== 0) {
      writer.uint32(16).uint32(message.authKeyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientBroadcastStatus_User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientBroadcastStatus_User();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.authKeyId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientBroadcastStatus_User {
    return {
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      authKeyId: isSet(object.authKeyId) ? Number(object.authKeyId) : 0,
    };
  },

  toJSON(message: CMsgRemoteClientBroadcastStatus_User): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.authKeyId !== undefined && (obj.authKeyId = Math.round(message.authKeyId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastStatus_User>, I>>(
    base?: I,
  ): CMsgRemoteClientBroadcastStatus_User {
    return CMsgRemoteClientBroadcastStatus_User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastStatus_User>, I>>(
    object: I,
  ): CMsgRemoteClientBroadcastStatus_User {
    const message = createBaseCMsgRemoteClientBroadcastStatus_User();
    message.steamid = object.steamid ?? "0";
    message.authKeyId = object.authKeyId ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteClientBroadcastDiscovery(): CMsgRemoteClientBroadcastDiscovery {
  return { seqNum: 0, clientIds: [] };
}

export const CMsgRemoteClientBroadcastDiscovery = {
  encode(message: CMsgRemoteClientBroadcastDiscovery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seqNum !== 0) {
      writer.uint32(8).uint32(message.seqNum);
    }
    writer.uint32(18).fork();
    for (const v of message.clientIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientBroadcastDiscovery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientBroadcastDiscovery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seqNum = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.clientIds.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.clientIds.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientBroadcastDiscovery {
    return {
      seqNum: isSet(object.seqNum) ? Number(object.seqNum) : 0,
      clientIds: Array.isArray(object?.clientIds) ? object.clientIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgRemoteClientBroadcastDiscovery): unknown {
    const obj: any = {};
    message.seqNum !== undefined && (obj.seqNum = Math.round(message.seqNum));
    if (message.clientIds) {
      obj.clientIds = message.clientIds.map((e) => e);
    } else {
      obj.clientIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastDiscovery>, I>>(
    base?: I,
  ): CMsgRemoteClientBroadcastDiscovery {
    return CMsgRemoteClientBroadcastDiscovery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastDiscovery>, I>>(
    object: I,
  ): CMsgRemoteClientBroadcastDiscovery {
    const message = createBaseCMsgRemoteClientBroadcastDiscovery();
    message.seqNum = object.seqNum ?? 0;
    message.clientIds = object.clientIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgRemoteClientBroadcastClientIDDeconflict(): CMsgRemoteClientBroadcastClientIDDeconflict {
  return { clientIds: [] };
}

export const CMsgRemoteClientBroadcastClientIDDeconflict = {
  encode(message: CMsgRemoteClientBroadcastClientIDDeconflict, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.clientIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteClientBroadcastClientIDDeconflict {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteClientBroadcastClientIDDeconflict();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.clientIds.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.clientIds.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteClientBroadcastClientIDDeconflict {
    return { clientIds: Array.isArray(object?.clientIds) ? object.clientIds.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgRemoteClientBroadcastClientIDDeconflict): unknown {
    const obj: any = {};
    if (message.clientIds) {
      obj.clientIds = message.clientIds.map((e) => e);
    } else {
      obj.clientIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastClientIDDeconflict>, I>>(
    base?: I,
  ): CMsgRemoteClientBroadcastClientIDDeconflict {
    return CMsgRemoteClientBroadcastClientIDDeconflict.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteClientBroadcastClientIDDeconflict>, I>>(
    object: I,
  ): CMsgRemoteClientBroadcastClientIDDeconflict {
    const message = createBaseCMsgRemoteClientBroadcastClientIDDeconflict();
    message.clientIds = object.clientIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgRemoteDeviceAuthorizationRequest(): CMsgRemoteDeviceAuthorizationRequest {
  return { deviceToken: Buffer.alloc(0), deviceName: "", encryptedRequest: Buffer.alloc(0), authKey: Buffer.alloc(0) };
}

export const CMsgRemoteDeviceAuthorizationRequest = {
  encode(message: CMsgRemoteDeviceAuthorizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceToken.length !== 0) {
      writer.uint32(10).bytes(message.deviceToken);
    }
    if (message.deviceName !== "") {
      writer.uint32(18).string(message.deviceName);
    }
    if (message.encryptedRequest.length !== 0) {
      writer.uint32(26).bytes(message.encryptedRequest);
    }
    if (message.authKey.length !== 0) {
      writer.uint32(34).bytes(message.authKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceAuthorizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceAuthorizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceToken = reader.bytes() as Buffer;
          break;
        case 2:
          message.deviceName = reader.string();
          break;
        case 3:
          message.encryptedRequest = reader.bytes() as Buffer;
          break;
        case 4:
          message.authKey = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceAuthorizationRequest {
    return {
      deviceToken: isSet(object.deviceToken) ? Buffer.from(bytesFromBase64(object.deviceToken)) : Buffer.alloc(0),
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      encryptedRequest: isSet(object.encryptedRequest)
        ? Buffer.from(bytesFromBase64(object.encryptedRequest))
        : Buffer.alloc(0),
      authKey: isSet(object.authKey) ? Buffer.from(bytesFromBase64(object.authKey)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgRemoteDeviceAuthorizationRequest): unknown {
    const obj: any = {};
    message.deviceToken !== undefined &&
      (obj.deviceToken = base64FromBytes(message.deviceToken !== undefined ? message.deviceToken : Buffer.alloc(0)));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.encryptedRequest !== undefined &&
      (obj.encryptedRequest = base64FromBytes(
        message.encryptedRequest !== undefined ? message.encryptedRequest : Buffer.alloc(0),
      ));
    message.authKey !== undefined &&
      (obj.authKey = base64FromBytes(message.authKey !== undefined ? message.authKey : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationRequest>, I>>(
    base?: I,
  ): CMsgRemoteDeviceAuthorizationRequest {
    return CMsgRemoteDeviceAuthorizationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationRequest>, I>>(
    object: I,
  ): CMsgRemoteDeviceAuthorizationRequest {
    const message = createBaseCMsgRemoteDeviceAuthorizationRequest();
    message.deviceToken = object.deviceToken ?? Buffer.alloc(0);
    message.deviceName = object.deviceName ?? "";
    message.encryptedRequest = object.encryptedRequest ?? Buffer.alloc(0);
    message.authKey = object.authKey ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket(): CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
  return {
    password: Buffer.alloc(0),
    identifier: "0",
    payload: Buffer.alloc(0),
    timestamp: 0,
    usage: 0,
    deviceName: "",
    deviceModel: "",
    deviceSerial: "",
    deviceProvisioningId: 0,
  };
}

export const CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket = {
  encode(
    message: CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.password.length !== 0) {
      writer.uint32(10).bytes(message.password);
    }
    if (message.identifier !== "0") {
      writer.uint32(16).uint64(message.identifier);
    }
    if (message.payload.length !== 0) {
      writer.uint32(26).bytes(message.payload);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    if (message.usage !== 0) {
      writer.uint32(40).int32(message.usage);
    }
    if (message.deviceName !== "") {
      writer.uint32(50).string(message.deviceName);
    }
    if (message.deviceModel !== "") {
      writer.uint32(58).string(message.deviceModel);
    }
    if (message.deviceSerial !== "") {
      writer.uint32(66).string(message.deviceSerial);
    }
    if (message.deviceProvisioningId !== 0) {
      writer.uint32(72).uint32(message.deviceProvisioningId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.bytes() as Buffer;
          break;
        case 2:
          message.identifier = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.payload = reader.bytes() as Buffer;
          break;
        case 4:
          message.timestamp = reader.uint32();
          break;
        case 5:
          message.usage = reader.int32() as any;
          break;
        case 6:
          message.deviceName = reader.string();
          break;
        case 7:
          message.deviceModel = reader.string();
          break;
        case 8:
          message.deviceSerial = reader.string();
          break;
        case 9:
          message.deviceProvisioningId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
    return {
      password: isSet(object.password) ? Buffer.from(bytesFromBase64(object.password)) : Buffer.alloc(0),
      identifier: isSet(object.identifier) ? String(object.identifier) : "0",
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      usage: isSet(object.usage) ? cMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsageFromJSON(object.usage) : 0,
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : "",
      deviceModel: isSet(object.deviceModel) ? String(object.deviceModel) : "",
      deviceSerial: isSet(object.deviceSerial) ? String(object.deviceSerial) : "",
      deviceProvisioningId: isSet(object.deviceProvisioningId) ? Number(object.deviceProvisioningId) : 0,
    };
  },

  toJSON(message: CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket): unknown {
    const obj: any = {};
    message.password !== undefined &&
      (obj.password = base64FromBytes(message.password !== undefined ? message.password : Buffer.alloc(0)));
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.usage !== undefined &&
      (obj.usage = cMsgRemoteDeviceAuthorizationRequest_EKeyEscrowUsageToJSON(message.usage));
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.deviceModel !== undefined && (obj.deviceModel = message.deviceModel);
    message.deviceSerial !== undefined && (obj.deviceSerial = message.deviceSerial);
    message.deviceProvisioningId !== undefined && (obj.deviceProvisioningId = Math.round(message.deviceProvisioningId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket>, I>>(
    base?: I,
  ): CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
    return CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket>, I>>(
    object: I,
  ): CMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket {
    const message = createBaseCMsgRemoteDeviceAuthorizationRequest_CKeyEscrowTicket();
    message.password = object.password ?? Buffer.alloc(0);
    message.identifier = object.identifier ?? "0";
    message.payload = object.payload ?? Buffer.alloc(0);
    message.timestamp = object.timestamp ?? 0;
    message.usage = object.usage ?? 0;
    message.deviceName = object.deviceName ?? "";
    message.deviceModel = object.deviceModel ?? "";
    message.deviceSerial = object.deviceSerial ?? "";
    message.deviceProvisioningId = object.deviceProvisioningId ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceAuthorizationCancelRequest(): CMsgRemoteDeviceAuthorizationCancelRequest {
  return {};
}

export const CMsgRemoteDeviceAuthorizationCancelRequest = {
  encode(_: CMsgRemoteDeviceAuthorizationCancelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceAuthorizationCancelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceAuthorizationCancelRequest();
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

  fromJSON(_: any): CMsgRemoteDeviceAuthorizationCancelRequest {
    return {};
  },

  toJSON(_: CMsgRemoteDeviceAuthorizationCancelRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationCancelRequest>, I>>(
    base?: I,
  ): CMsgRemoteDeviceAuthorizationCancelRequest {
    return CMsgRemoteDeviceAuthorizationCancelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationCancelRequest>, I>>(
    _: I,
  ): CMsgRemoteDeviceAuthorizationCancelRequest {
    const message = createBaseCMsgRemoteDeviceAuthorizationCancelRequest();
    return message;
  },
};

function createBaseCMsgRemoteDeviceAuthorizationResponse(): CMsgRemoteDeviceAuthorizationResponse {
  return { result: 0, steamid: "0", authKey: Buffer.alloc(0), deviceToken: Buffer.alloc(0) };
}

export const CMsgRemoteDeviceAuthorizationResponse = {
  encode(message: CMsgRemoteDeviceAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.authKey.length !== 0) {
      writer.uint32(26).bytes(message.authKey);
    }
    if (message.deviceToken.length !== 0) {
      writer.uint32(34).bytes(message.deviceToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.authKey = reader.bytes() as Buffer;
          break;
        case 4:
          message.deviceToken = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceAuthorizationResponse {
    return {
      result: isSet(object.result) ? eRemoteDeviceAuthorizationResultFromJSON(object.result) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      authKey: isSet(object.authKey) ? Buffer.from(bytesFromBase64(object.authKey)) : Buffer.alloc(0),
      deviceToken: isSet(object.deviceToken) ? Buffer.from(bytesFromBase64(object.deviceToken)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgRemoteDeviceAuthorizationResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eRemoteDeviceAuthorizationResultToJSON(message.result));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    message.authKey !== undefined &&
      (obj.authKey = base64FromBytes(message.authKey !== undefined ? message.authKey : Buffer.alloc(0)));
    message.deviceToken !== undefined &&
      (obj.deviceToken = base64FromBytes(message.deviceToken !== undefined ? message.deviceToken : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationResponse>, I>>(
    base?: I,
  ): CMsgRemoteDeviceAuthorizationResponse {
    return CMsgRemoteDeviceAuthorizationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationResponse>, I>>(
    object: I,
  ): CMsgRemoteDeviceAuthorizationResponse {
    const message = createBaseCMsgRemoteDeviceAuthorizationResponse();
    message.result = object.result ?? 0;
    message.steamid = object.steamid ?? "0";
    message.authKey = object.authKey ?? Buffer.alloc(0);
    message.deviceToken = object.deviceToken ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgRemoteDeviceAuthorizationConfirmed(): CMsgRemoteDeviceAuthorizationConfirmed {
  return { result: 0 };
}

export const CMsgRemoteDeviceAuthorizationConfirmed = {
  encode(message: CMsgRemoteDeviceAuthorizationConfirmed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceAuthorizationConfirmed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceAuthorizationConfirmed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceAuthorizationConfirmed {
    return { result: isSet(object.result) ? eRemoteDeviceAuthorizationResultFromJSON(object.result) : 0 };
  },

  toJSON(message: CMsgRemoteDeviceAuthorizationConfirmed): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = eRemoteDeviceAuthorizationResultToJSON(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationConfirmed>, I>>(
    base?: I,
  ): CMsgRemoteDeviceAuthorizationConfirmed {
    return CMsgRemoteDeviceAuthorizationConfirmed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceAuthorizationConfirmed>, I>>(
    object: I,
  ): CMsgRemoteDeviceAuthorizationConfirmed {
    const message = createBaseCMsgRemoteDeviceAuthorizationConfirmed();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamingRequest(): CMsgRemoteDeviceStreamingRequest {
  return {
    requestId: 0,
    maximumResolutionX: 0,
    maximumResolutionY: 0,
    audioChannelCount: 0,
    deviceVersion: "",
    streamDesktop: false,
    deviceToken: Buffer.alloc(0),
    pin: Buffer.alloc(0),
    enableVideoStreaming: false,
    enableAudioStreaming: false,
    enableInputStreaming: false,
    networkTest: false,
    clientId: "0",
    supportedTransport: [],
    restricted: false,
    formFactor: 0,
    gamepadCount: 0,
    gamepads: [],
    gameid: "0",
    streamInterface: 0,
  };
}

export const CMsgRemoteDeviceStreamingRequest = {
  encode(message: CMsgRemoteDeviceStreamingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.maximumResolutionX !== 0) {
      writer.uint32(16).int32(message.maximumResolutionX);
    }
    if (message.maximumResolutionY !== 0) {
      writer.uint32(24).int32(message.maximumResolutionY);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(32).int32(message.audioChannelCount);
    }
    if (message.deviceVersion !== "") {
      writer.uint32(42).string(message.deviceVersion);
    }
    if (message.streamDesktop === true) {
      writer.uint32(48).bool(message.streamDesktop);
    }
    if (message.deviceToken.length !== 0) {
      writer.uint32(58).bytes(message.deviceToken);
    }
    if (message.pin.length !== 0) {
      writer.uint32(66).bytes(message.pin);
    }
    if (message.enableVideoStreaming === true) {
      writer.uint32(72).bool(message.enableVideoStreaming);
    }
    if (message.enableAudioStreaming === true) {
      writer.uint32(80).bool(message.enableAudioStreaming);
    }
    if (message.enableInputStreaming === true) {
      writer.uint32(88).bool(message.enableInputStreaming);
    }
    if (message.networkTest === true) {
      writer.uint32(96).bool(message.networkTest);
    }
    if (message.clientId !== "0") {
      writer.uint32(104).uint64(message.clientId);
    }
    writer.uint32(114).fork();
    for (const v of message.supportedTransport) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.restricted === true) {
      writer.uint32(120).bool(message.restricted);
    }
    if (message.formFactor !== 0) {
      writer.uint32(128).int32(message.formFactor);
    }
    if (message.gamepadCount !== 0) {
      writer.uint32(136).int32(message.gamepadCount);
    }
    for (const v of message.gamepads) {
      CMsgRemoteDeviceStreamingRequest_ReservedGamepad.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.gameid !== "0") {
      writer.uint32(152).uint64(message.gameid);
    }
    if (message.streamInterface !== 0) {
      writer.uint32(160).int32(message.streamInterface);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.maximumResolutionX = reader.int32();
          break;
        case 3:
          message.maximumResolutionY = reader.int32();
          break;
        case 4:
          message.audioChannelCount = reader.int32();
          break;
        case 5:
          message.deviceVersion = reader.string();
          break;
        case 6:
          message.streamDesktop = reader.bool();
          break;
        case 7:
          message.deviceToken = reader.bytes() as Buffer;
          break;
        case 8:
          message.pin = reader.bytes() as Buffer;
          break;
        case 9:
          message.enableVideoStreaming = reader.bool();
          break;
        case 10:
          message.enableAudioStreaming = reader.bool();
          break;
        case 11:
          message.enableInputStreaming = reader.bool();
          break;
        case 12:
          message.networkTest = reader.bool();
          break;
        case 13:
          message.clientId = longToString(reader.uint64() as Long);
          break;
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedTransport.push(reader.int32() as any);
            }
          } else {
            message.supportedTransport.push(reader.int32() as any);
          }
          break;
        case 15:
          message.restricted = reader.bool();
          break;
        case 16:
          message.formFactor = reader.int32() as any;
          break;
        case 17:
          message.gamepadCount = reader.int32();
          break;
        case 18:
          message.gamepads.push(CMsgRemoteDeviceStreamingRequest_ReservedGamepad.decode(reader, reader.uint32()));
          break;
        case 19:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 20:
          message.streamInterface = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceStreamingRequest {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      maximumResolutionX: isSet(object.maximumResolutionX) ? Number(object.maximumResolutionX) : 0,
      maximumResolutionY: isSet(object.maximumResolutionY) ? Number(object.maximumResolutionY) : 0,
      audioChannelCount: isSet(object.audioChannelCount) ? Number(object.audioChannelCount) : 0,
      deviceVersion: isSet(object.deviceVersion) ? String(object.deviceVersion) : "",
      streamDesktop: isSet(object.streamDesktop) ? Boolean(object.streamDesktop) : false,
      deviceToken: isSet(object.deviceToken) ? Buffer.from(bytesFromBase64(object.deviceToken)) : Buffer.alloc(0),
      pin: isSet(object.pin) ? Buffer.from(bytesFromBase64(object.pin)) : Buffer.alloc(0),
      enableVideoStreaming: isSet(object.enableVideoStreaming) ? Boolean(object.enableVideoStreaming) : false,
      enableAudioStreaming: isSet(object.enableAudioStreaming) ? Boolean(object.enableAudioStreaming) : false,
      enableInputStreaming: isSet(object.enableInputStreaming) ? Boolean(object.enableInputStreaming) : false,
      networkTest: isSet(object.networkTest) ? Boolean(object.networkTest) : false,
      clientId: isSet(object.clientId) ? String(object.clientId) : "0",
      supportedTransport: Array.isArray(object?.supportedTransport)
        ? object.supportedTransport.map((e: any) => eStreamTransportFromJSON(e))
        : [],
      restricted: isSet(object.restricted) ? Boolean(object.restricted) : false,
      formFactor: isSet(object.formFactor) ? eStreamDeviceFormFactorFromJSON(object.formFactor) : 0,
      gamepadCount: isSet(object.gamepadCount) ? Number(object.gamepadCount) : 0,
      gamepads: Array.isArray(object?.gamepads)
        ? object.gamepads.map((e: any) => CMsgRemoteDeviceStreamingRequest_ReservedGamepad.fromJSON(e))
        : [],
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      streamInterface: isSet(object.streamInterface) ? eStreamInterfaceFromJSON(object.streamInterface) : 0,
    };
  },

  toJSON(message: CMsgRemoteDeviceStreamingRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.maximumResolutionX !== undefined && (obj.maximumResolutionX = Math.round(message.maximumResolutionX));
    message.maximumResolutionY !== undefined && (obj.maximumResolutionY = Math.round(message.maximumResolutionY));
    message.audioChannelCount !== undefined && (obj.audioChannelCount = Math.round(message.audioChannelCount));
    message.deviceVersion !== undefined && (obj.deviceVersion = message.deviceVersion);
    message.streamDesktop !== undefined && (obj.streamDesktop = message.streamDesktop);
    message.deviceToken !== undefined &&
      (obj.deviceToken = base64FromBytes(message.deviceToken !== undefined ? message.deviceToken : Buffer.alloc(0)));
    message.pin !== undefined && (obj.pin = base64FromBytes(message.pin !== undefined ? message.pin : Buffer.alloc(0)));
    message.enableVideoStreaming !== undefined && (obj.enableVideoStreaming = message.enableVideoStreaming);
    message.enableAudioStreaming !== undefined && (obj.enableAudioStreaming = message.enableAudioStreaming);
    message.enableInputStreaming !== undefined && (obj.enableInputStreaming = message.enableInputStreaming);
    message.networkTest !== undefined && (obj.networkTest = message.networkTest);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.supportedTransport) {
      obj.supportedTransport = message.supportedTransport.map((e) => eStreamTransportToJSON(e));
    } else {
      obj.supportedTransport = [];
    }
    message.restricted !== undefined && (obj.restricted = message.restricted);
    message.formFactor !== undefined && (obj.formFactor = eStreamDeviceFormFactorToJSON(message.formFactor));
    message.gamepadCount !== undefined && (obj.gamepadCount = Math.round(message.gamepadCount));
    if (message.gamepads) {
      obj.gamepads = message.gamepads.map((e) =>
        e ? CMsgRemoteDeviceStreamingRequest_ReservedGamepad.toJSON(e) : undefined
      );
    } else {
      obj.gamepads = [];
    }
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.streamInterface !== undefined && (obj.streamInterface = eStreamInterfaceToJSON(message.streamInterface));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingRequest>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamingRequest {
    return CMsgRemoteDeviceStreamingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingRequest>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamingRequest {
    const message = createBaseCMsgRemoteDeviceStreamingRequest();
    message.requestId = object.requestId ?? 0;
    message.maximumResolutionX = object.maximumResolutionX ?? 0;
    message.maximumResolutionY = object.maximumResolutionY ?? 0;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.deviceVersion = object.deviceVersion ?? "";
    message.streamDesktop = object.streamDesktop ?? false;
    message.deviceToken = object.deviceToken ?? Buffer.alloc(0);
    message.pin = object.pin ?? Buffer.alloc(0);
    message.enableVideoStreaming = object.enableVideoStreaming ?? false;
    message.enableAudioStreaming = object.enableAudioStreaming ?? false;
    message.enableInputStreaming = object.enableInputStreaming ?? false;
    message.networkTest = object.networkTest ?? false;
    message.clientId = object.clientId ?? "0";
    message.supportedTransport = object.supportedTransport?.map((e) => e) || [];
    message.restricted = object.restricted ?? false;
    message.formFactor = object.formFactor ?? 0;
    message.gamepadCount = object.gamepadCount ?? 0;
    message.gamepads = object.gamepads?.map((e) => CMsgRemoteDeviceStreamingRequest_ReservedGamepad.fromPartial(e)) ||
      [];
    message.gameid = object.gameid ?? "0";
    message.streamInterface = object.streamInterface ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamingRequest_ReservedGamepad(): CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
  return { controllerType: 0, controllerSubtype: 0 };
}

export const CMsgRemoteDeviceStreamingRequest_ReservedGamepad = {
  encode(
    message: CMsgRemoteDeviceStreamingRequest_ReservedGamepad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controllerType !== 0) {
      writer.uint32(8).uint32(message.controllerType);
    }
    if (message.controllerSubtype !== 0) {
      writer.uint32(16).uint32(message.controllerSubtype);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamingRequest_ReservedGamepad();
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

  fromJSON(object: any): CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
    return {
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      controllerSubtype: isSet(object.controllerSubtype) ? Number(object.controllerSubtype) : 0,
    };
  },

  toJSON(message: CMsgRemoteDeviceStreamingRequest_ReservedGamepad): unknown {
    const obj: any = {};
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.controllerSubtype !== undefined && (obj.controllerSubtype = Math.round(message.controllerSubtype));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingRequest_ReservedGamepad>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
    return CMsgRemoteDeviceStreamingRequest_ReservedGamepad.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingRequest_ReservedGamepad>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamingRequest_ReservedGamepad {
    const message = createBaseCMsgRemoteDeviceStreamingRequest_ReservedGamepad();
    message.controllerType = object.controllerType ?? 0;
    message.controllerSubtype = object.controllerSubtype ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamingCancelRequest(): CMsgRemoteDeviceStreamingCancelRequest {
  return { requestId: 0 };
}

export const CMsgRemoteDeviceStreamingCancelRequest = {
  encode(message: CMsgRemoteDeviceStreamingCancelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamingCancelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamingCancelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceStreamingCancelRequest {
    return { requestId: isSet(object.requestId) ? Number(object.requestId) : 0 };
  },

  toJSON(message: CMsgRemoteDeviceStreamingCancelRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingCancelRequest>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamingCancelRequest {
    return CMsgRemoteDeviceStreamingCancelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingCancelRequest>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamingCancelRequest {
    const message = createBaseCMsgRemoteDeviceStreamingCancelRequest();
    message.requestId = object.requestId ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamingProgress(): CMsgRemoteDeviceStreamingProgress {
  return { requestId: 0, progress: 0 };
}

export const CMsgRemoteDeviceStreamingProgress = {
  encode(message: CMsgRemoteDeviceStreamingProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.progress !== 0) {
      writer.uint32(21).float(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamingProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamingProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.progress = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceStreamingProgress {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
    };
  },

  toJSON(message: CMsgRemoteDeviceStreamingProgress): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.progress !== undefined && (obj.progress = message.progress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingProgress>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamingProgress {
    return CMsgRemoteDeviceStreamingProgress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingProgress>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamingProgress {
    const message = createBaseCMsgRemoteDeviceStreamingProgress();
    message.requestId = object.requestId ?? 0;
    message.progress = object.progress ?? 0;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamingResponse(): CMsgRemoteDeviceStreamingResponse {
  return {
    requestId: 0,
    result: 0,
    port: 0,
    encryptedSessionKey: Buffer.alloc(0),
    transport: 0,
    relayServer: "",
    cert: "",
  };
}

export const CMsgRemoteDeviceStreamingResponse = {
  encode(message: CMsgRemoteDeviceStreamingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.encryptedSessionKey.length !== 0) {
      writer.uint32(34).bytes(message.encryptedSessionKey);
    }
    if (message.transport !== 0) {
      writer.uint32(48).int32(message.transport);
    }
    if (message.relayServer !== "") {
      writer.uint32(58).string(message.relayServer);
    }
    if (message.cert !== "") {
      writer.uint32(66).string(message.cert);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.port = reader.uint32();
          break;
        case 4:
          message.encryptedSessionKey = reader.bytes() as Buffer;
          break;
        case 6:
          message.transport = reader.int32() as any;
          break;
        case 7:
          message.relayServer = reader.string();
          break;
        case 8:
          message.cert = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceStreamingResponse {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      result: isSet(object.result) ? eRemoteDeviceStreamingResultFromJSON(object.result) : 0,
      port: isSet(object.port) ? Number(object.port) : 0,
      encryptedSessionKey: isSet(object.encryptedSessionKey)
        ? Buffer.from(bytesFromBase64(object.encryptedSessionKey))
        : Buffer.alloc(0),
      transport: isSet(object.transport) ? eStreamTransportFromJSON(object.transport) : 0,
      relayServer: isSet(object.relayServer) ? String(object.relayServer) : "",
      cert: isSet(object.cert) ? String(object.cert) : "",
    };
  },

  toJSON(message: CMsgRemoteDeviceStreamingResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.result !== undefined && (obj.result = eRemoteDeviceStreamingResultToJSON(message.result));
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.encryptedSessionKey !== undefined &&
      (obj.encryptedSessionKey = base64FromBytes(
        message.encryptedSessionKey !== undefined ? message.encryptedSessionKey : Buffer.alloc(0),
      ));
    message.transport !== undefined && (obj.transport = eStreamTransportToJSON(message.transport));
    message.relayServer !== undefined && (obj.relayServer = message.relayServer);
    message.cert !== undefined && (obj.cert = message.cert);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingResponse>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamingResponse {
    return CMsgRemoteDeviceStreamingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamingResponse>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamingResponse {
    const message = createBaseCMsgRemoteDeviceStreamingResponse();
    message.requestId = object.requestId ?? 0;
    message.result = object.result ?? 0;
    message.port = object.port ?? 0;
    message.encryptedSessionKey = object.encryptedSessionKey ?? Buffer.alloc(0);
    message.transport = object.transport ?? 0;
    message.relayServer = object.relayServer ?? "";
    message.cert = object.cert ?? "";
    return message;
  },
};

function createBaseCMsgRemoteDeviceProofRequest(): CMsgRemoteDeviceProofRequest {
  return { challenge: Buffer.alloc(0), requestId: 0, updateSecret: false };
}

export const CMsgRemoteDeviceProofRequest = {
  encode(message: CMsgRemoteDeviceProofRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challenge.length !== 0) {
      writer.uint32(10).bytes(message.challenge);
    }
    if (message.requestId !== 0) {
      writer.uint32(16).uint32(message.requestId);
    }
    if (message.updateSecret === true) {
      writer.uint32(24).bool(message.updateSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challenge = reader.bytes() as Buffer;
          break;
        case 2:
          message.requestId = reader.uint32();
          break;
        case 3:
          message.updateSecret = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceProofRequest {
    return {
      challenge: isSet(object.challenge) ? Buffer.from(bytesFromBase64(object.challenge)) : Buffer.alloc(0),
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      updateSecret: isSet(object.updateSecret) ? Boolean(object.updateSecret) : false,
    };
  },

  toJSON(message: CMsgRemoteDeviceProofRequest): unknown {
    const obj: any = {};
    message.challenge !== undefined &&
      (obj.challenge = base64FromBytes(message.challenge !== undefined ? message.challenge : Buffer.alloc(0)));
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.updateSecret !== undefined && (obj.updateSecret = message.updateSecret);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceProofRequest>, I>>(base?: I): CMsgRemoteDeviceProofRequest {
    return CMsgRemoteDeviceProofRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceProofRequest>, I>>(object: I): CMsgRemoteDeviceProofRequest {
    const message = createBaseCMsgRemoteDeviceProofRequest();
    message.challenge = object.challenge ?? Buffer.alloc(0);
    message.requestId = object.requestId ?? 0;
    message.updateSecret = object.updateSecret ?? false;
    return message;
  },
};

function createBaseCMsgRemoteDeviceProofResponse(): CMsgRemoteDeviceProofResponse {
  return { response: Buffer.alloc(0), requestId: 0, updatedSecret: false };
}

export const CMsgRemoteDeviceProofResponse = {
  encode(message: CMsgRemoteDeviceProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response.length !== 0) {
      writer.uint32(10).bytes(message.response);
    }
    if (message.requestId !== 0) {
      writer.uint32(16).uint32(message.requestId);
    }
    if (message.updatedSecret === true) {
      writer.uint32(24).bool(message.updatedSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = reader.bytes() as Buffer;
          break;
        case 2:
          message.requestId = reader.uint32();
          break;
        case 3:
          message.updatedSecret = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRemoteDeviceProofResponse {
    return {
      response: isSet(object.response) ? Buffer.from(bytesFromBase64(object.response)) : Buffer.alloc(0),
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      updatedSecret: isSet(object.updatedSecret) ? Boolean(object.updatedSecret) : false,
    };
  },

  toJSON(message: CMsgRemoteDeviceProofResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = base64FromBytes(message.response !== undefined ? message.response : Buffer.alloc(0)));
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.updatedSecret !== undefined && (obj.updatedSecret = message.updatedSecret);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceProofResponse>, I>>(base?: I): CMsgRemoteDeviceProofResponse {
    return CMsgRemoteDeviceProofResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceProofResponse>, I>>(
    object: I,
  ): CMsgRemoteDeviceProofResponse {
    const message = createBaseCMsgRemoteDeviceProofResponse();
    message.response = object.response ?? Buffer.alloc(0);
    message.requestId = object.requestId ?? 0;
    message.updatedSecret = object.updatedSecret ?? false;
    return message;
  },
};

function createBaseCMsgRemoteDeviceStreamTransportSignal(): CMsgRemoteDeviceStreamTransportSignal {
  return { token: Buffer.alloc(0), payload: Buffer.alloc(0) };
}

export const CMsgRemoteDeviceStreamTransportSignal = {
  encode(message: CMsgRemoteDeviceStreamTransportSignal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRemoteDeviceStreamTransportSignal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRemoteDeviceStreamTransportSignal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes() as Buffer;
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

  fromJSON(object: any): CMsgRemoteDeviceStreamTransportSignal {
    return {
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      payload: isSet(object.payload) ? Buffer.from(bytesFromBase64(object.payload)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgRemoteDeviceStreamTransportSignal): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamTransportSignal>, I>>(
    base?: I,
  ): CMsgRemoteDeviceStreamTransportSignal {
    return CMsgRemoteDeviceStreamTransportSignal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRemoteDeviceStreamTransportSignal>, I>>(
    object: I,
  ): CMsgRemoteDeviceStreamTransportSignal {
    const message = createBaseCMsgRemoteDeviceStreamTransportSignal();
    message.token = object.token ?? Buffer.alloc(0);
    message.payload = object.payload ?? Buffer.alloc(0);
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
