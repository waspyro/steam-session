/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EStreamChannel {
  k_EStreamChannelInvalid = -1,
  k_EStreamChannelDiscovery = 0,
  k_EStreamChannelControl = 1,
  k_EStreamChannelStats = 2,
  k_EStreamChannelDataChannelStart = 3,
  UNRECOGNIZED = -1,
}

export function eStreamChannelFromJSON(object: any): EStreamChannel {
  switch (object) {
    case -1:
    case "k_EStreamChannelInvalid":
      return EStreamChannel.k_EStreamChannelInvalid;
    case 0:
    case "k_EStreamChannelDiscovery":
      return EStreamChannel.k_EStreamChannelDiscovery;
    case 1:
    case "k_EStreamChannelControl":
      return EStreamChannel.k_EStreamChannelControl;
    case 2:
    case "k_EStreamChannelStats":
      return EStreamChannel.k_EStreamChannelStats;
    case 3:
    case "k_EStreamChannelDataChannelStart":
      return EStreamChannel.k_EStreamChannelDataChannelStart;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamChannel.UNRECOGNIZED;
  }
}

export function eStreamChannelToJSON(object: EStreamChannel): string {
  switch (object) {
    case EStreamChannel.k_EStreamChannelInvalid:
      return "k_EStreamChannelInvalid";
    case EStreamChannel.k_EStreamChannelDiscovery:
      return "k_EStreamChannelDiscovery";
    case EStreamChannel.k_EStreamChannelControl:
      return "k_EStreamChannelControl";
    case EStreamChannel.k_EStreamChannelStats:
      return "k_EStreamChannelStats";
    case EStreamChannel.k_EStreamChannelDataChannelStart:
      return "k_EStreamChannelDataChannelStart";
    case EStreamChannel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamDiscoveryMessage {
  k_EStreamDiscoveryPingRequest = 1,
  k_EStreamDiscoveryPingResponse = 2,
  UNRECOGNIZED = -1,
}

export function eStreamDiscoveryMessageFromJSON(object: any): EStreamDiscoveryMessage {
  switch (object) {
    case 1:
    case "k_EStreamDiscoveryPingRequest":
      return EStreamDiscoveryMessage.k_EStreamDiscoveryPingRequest;
    case 2:
    case "k_EStreamDiscoveryPingResponse":
      return EStreamDiscoveryMessage.k_EStreamDiscoveryPingResponse;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamDiscoveryMessage.UNRECOGNIZED;
  }
}

export function eStreamDiscoveryMessageToJSON(object: EStreamDiscoveryMessage): string {
  switch (object) {
    case EStreamDiscoveryMessage.k_EStreamDiscoveryPingRequest:
      return "k_EStreamDiscoveryPingRequest";
    case EStreamDiscoveryMessage.k_EStreamDiscoveryPingResponse:
      return "k_EStreamDiscoveryPingResponse";
    case EStreamDiscoveryMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamControlMessage {
  k_EStreamControlAuthenticationRequest = 1,
  k_EStreamControlAuthenticationResponse = 2,
  k_EStreamControlNegotiationInit = 3,
  k_EStreamControlNegotiationSetConfig = 4,
  k_EStreamControlNegotiationComplete = 5,
  k_EStreamControlClientHandshake = 6,
  k_EStreamControlServerHandshake = 7,
  k_EStreamControlStartNetworkTest = 8,
  k_EStreamControlKeepAlive = 9,
  k_EStreamControl_LAST_SETUP_MESSAGE = 15,
  k_EStreamControlStartAudioData = 50,
  k_EStreamControlStopAudioData = 51,
  k_EStreamControlStartVideoData = 52,
  k_EStreamControlStopVideoData = 53,
  k_EStreamControlInputMouseMotion = 54,
  k_EStreamControlInputMouseWheel = 55,
  k_EStreamControlInputMouseDown = 56,
  k_EStreamControlInputMouseUp = 57,
  k_EStreamControlInputKeyDown = 58,
  k_EStreamControlInputKeyUp = 59,
  k_EStreamControlInputGamepadAttached_OBSOLETE = 60,
  k_EStreamControlInputGamepadEvent_OBSOLETE = 61,
  k_EStreamControlInputGamepadDetached_OBSOLETE = 62,
  k_EStreamControlShowCursor = 63,
  k_EStreamControlHideCursor = 64,
  k_EStreamControlSetCursor = 65,
  k_EStreamControlGetCursorImage = 66,
  k_EStreamControlSetCursorImage = 67,
  k_EStreamControlDeleteCursor = 68,
  k_EStreamControlSetTargetFramerate = 69,
  k_EStreamControlInputLatencyTest = 70,
  k_EStreamControlGamepadRumble_OBSOLETE = 71,
  k_EStreamControlOverlayEnabled = 74,
  k_EStreamControlInputControllerAttached_OBSOLETE = 75,
  k_EStreamControlInputControllerState_OBSOLETE = 76,
  k_EStreamControlTriggerHapticPulse_OBSOLETE = 77,
  k_EStreamControlInputControllerDetached_OBSOLETE = 78,
  k_EStreamControlVideoDecoderInfo = 80,
  k_EStreamControlSetTitle = 81,
  k_EStreamControlSetIcon = 82,
  k_EStreamControlQuitRequest = 83,
  k_EStreamControlSetQoS = 87,
  k_EStreamControlInputControllerWirelessPresence_OBSOLETE = 88,
  k_EStreamControlSetGammaRamp = 89,
  k_EStreamControlVideoEncoderInfo = 90,
  k_EStreamControlInputControllerStateHID_OBSOLETE = 93,
  k_EStreamControlSetTargetBitrate = 94,
  k_EStreamControlSetControllerPairingEnabled_OBSOLETE = 95,
  k_EStreamControlSetControllerPairingResult_OBSOLETE = 96,
  k_EStreamControlTriggerControllerDisconnect_OBSOLETE = 97,
  k_EStreamControlSetActivity = 98,
  k_EStreamControlSetStreamingClientConfig = 99,
  k_EStreamControlSystemSuspend = 100,
  k_EStreamControlSetControllerSettings_OBSOLETE = 101,
  k_EStreamControlVirtualHereRequest = 102,
  k_EStreamControlVirtualHereReady = 103,
  k_EStreamControlVirtualHereShareDevice = 104,
  k_EStreamControlSetSpectatorMode = 105,
  k_EStreamControlRemoteHID = 106,
  k_EStreamControlStartMicrophoneData = 107,
  k_EStreamControlStopMicrophoneData = 108,
  k_EStreamControlInputText = 109,
  k_EStreamControlTouchConfigActive = 110,
  k_EStreamControlGetTouchConfigData = 111,
  k_EStreamControlSetTouchConfigData = 112,
  k_EStreamControlSaveTouchConfigLayout = 113,
  k_EStreamControlTouchActionSetActive = 114,
  k_EStreamControlGetTouchIconData = 115,
  k_EStreamControlSetTouchIconData = 116,
  k_EStreamControlInputTouchFingerDown = 117,
  k_EStreamControlInputTouchFingerMotion = 118,
  k_EStreamControlInputTouchFingerUp = 119,
  k_EStreamControlSetCaptureSize = 120,
  k_EStreamControlSetFlashState = 121,
  k_EStreamControlPause = 122,
  k_EStreamControlResume = 123,
  k_EStreamControlEnableHighResCapture = 124,
  k_EStreamControlDisableHighResCapture = 125,
  k_EStreamControlToggleMagnification = 126,
  k_EStreamControlSetCapslock = 127,
  k_EStreamControlSetKeymap = 128,
  k_EStreamControlStopRequest = 129,
  k_EStreamControlTouchActionSetLayerAdded = 130,
  k_EStreamControlTouchActionSetLayerRemoved = 131,
  k_EStreamControlRemotePlayTogetherGroupUpdate = 132,
  k_EStreamControlSetInputTemporarilyDisabled = 133,
  k_EStreamControlSetQualityOverride = 134,
  k_EStreamControlSetBitrateOverride = 135,
  k_EStreamControlShowOnScreenKeyboard = 136,
  k_EStreamControlControllerConfigMsg = 137,
  k_EStreamControlControllerPersonalizationUpdate = 138,
  k_EStreamControlEnableNeptuneData = 139,
  k_EStreamControlDisableNeptuneData = 140,
  k_EStreamControlStartNeptuneData = 141,
  k_EStreamControlStopNeptuneData = 142,
  UNRECOGNIZED = -1,
}

export function eStreamControlMessageFromJSON(object: any): EStreamControlMessage {
  switch (object) {
    case 1:
    case "k_EStreamControlAuthenticationRequest":
      return EStreamControlMessage.k_EStreamControlAuthenticationRequest;
    case 2:
    case "k_EStreamControlAuthenticationResponse":
      return EStreamControlMessage.k_EStreamControlAuthenticationResponse;
    case 3:
    case "k_EStreamControlNegotiationInit":
      return EStreamControlMessage.k_EStreamControlNegotiationInit;
    case 4:
    case "k_EStreamControlNegotiationSetConfig":
      return EStreamControlMessage.k_EStreamControlNegotiationSetConfig;
    case 5:
    case "k_EStreamControlNegotiationComplete":
      return EStreamControlMessage.k_EStreamControlNegotiationComplete;
    case 6:
    case "k_EStreamControlClientHandshake":
      return EStreamControlMessage.k_EStreamControlClientHandshake;
    case 7:
    case "k_EStreamControlServerHandshake":
      return EStreamControlMessage.k_EStreamControlServerHandshake;
    case 8:
    case "k_EStreamControlStartNetworkTest":
      return EStreamControlMessage.k_EStreamControlStartNetworkTest;
    case 9:
    case "k_EStreamControlKeepAlive":
      return EStreamControlMessage.k_EStreamControlKeepAlive;
    case 15:
    case "k_EStreamControl_LAST_SETUP_MESSAGE":
      return EStreamControlMessage.k_EStreamControl_LAST_SETUP_MESSAGE;
    case 50:
    case "k_EStreamControlStartAudioData":
      return EStreamControlMessage.k_EStreamControlStartAudioData;
    case 51:
    case "k_EStreamControlStopAudioData":
      return EStreamControlMessage.k_EStreamControlStopAudioData;
    case 52:
    case "k_EStreamControlStartVideoData":
      return EStreamControlMessage.k_EStreamControlStartVideoData;
    case 53:
    case "k_EStreamControlStopVideoData":
      return EStreamControlMessage.k_EStreamControlStopVideoData;
    case 54:
    case "k_EStreamControlInputMouseMotion":
      return EStreamControlMessage.k_EStreamControlInputMouseMotion;
    case 55:
    case "k_EStreamControlInputMouseWheel":
      return EStreamControlMessage.k_EStreamControlInputMouseWheel;
    case 56:
    case "k_EStreamControlInputMouseDown":
      return EStreamControlMessage.k_EStreamControlInputMouseDown;
    case 57:
    case "k_EStreamControlInputMouseUp":
      return EStreamControlMessage.k_EStreamControlInputMouseUp;
    case 58:
    case "k_EStreamControlInputKeyDown":
      return EStreamControlMessage.k_EStreamControlInputKeyDown;
    case 59:
    case "k_EStreamControlInputKeyUp":
      return EStreamControlMessage.k_EStreamControlInputKeyUp;
    case 60:
    case "k_EStreamControlInputGamepadAttached_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputGamepadAttached_OBSOLETE;
    case 61:
    case "k_EStreamControlInputGamepadEvent_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputGamepadEvent_OBSOLETE;
    case 62:
    case "k_EStreamControlInputGamepadDetached_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputGamepadDetached_OBSOLETE;
    case 63:
    case "k_EStreamControlShowCursor":
      return EStreamControlMessage.k_EStreamControlShowCursor;
    case 64:
    case "k_EStreamControlHideCursor":
      return EStreamControlMessage.k_EStreamControlHideCursor;
    case 65:
    case "k_EStreamControlSetCursor":
      return EStreamControlMessage.k_EStreamControlSetCursor;
    case 66:
    case "k_EStreamControlGetCursorImage":
      return EStreamControlMessage.k_EStreamControlGetCursorImage;
    case 67:
    case "k_EStreamControlSetCursorImage":
      return EStreamControlMessage.k_EStreamControlSetCursorImage;
    case 68:
    case "k_EStreamControlDeleteCursor":
      return EStreamControlMessage.k_EStreamControlDeleteCursor;
    case 69:
    case "k_EStreamControlSetTargetFramerate":
      return EStreamControlMessage.k_EStreamControlSetTargetFramerate;
    case 70:
    case "k_EStreamControlInputLatencyTest":
      return EStreamControlMessage.k_EStreamControlInputLatencyTest;
    case 71:
    case "k_EStreamControlGamepadRumble_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlGamepadRumble_OBSOLETE;
    case 74:
    case "k_EStreamControlOverlayEnabled":
      return EStreamControlMessage.k_EStreamControlOverlayEnabled;
    case 75:
    case "k_EStreamControlInputControllerAttached_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputControllerAttached_OBSOLETE;
    case 76:
    case "k_EStreamControlInputControllerState_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputControllerState_OBSOLETE;
    case 77:
    case "k_EStreamControlTriggerHapticPulse_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlTriggerHapticPulse_OBSOLETE;
    case 78:
    case "k_EStreamControlInputControllerDetached_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputControllerDetached_OBSOLETE;
    case 80:
    case "k_EStreamControlVideoDecoderInfo":
      return EStreamControlMessage.k_EStreamControlVideoDecoderInfo;
    case 81:
    case "k_EStreamControlSetTitle":
      return EStreamControlMessage.k_EStreamControlSetTitle;
    case 82:
    case "k_EStreamControlSetIcon":
      return EStreamControlMessage.k_EStreamControlSetIcon;
    case 83:
    case "k_EStreamControlQuitRequest":
      return EStreamControlMessage.k_EStreamControlQuitRequest;
    case 87:
    case "k_EStreamControlSetQoS":
      return EStreamControlMessage.k_EStreamControlSetQoS;
    case 88:
    case "k_EStreamControlInputControllerWirelessPresence_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputControllerWirelessPresence_OBSOLETE;
    case 89:
    case "k_EStreamControlSetGammaRamp":
      return EStreamControlMessage.k_EStreamControlSetGammaRamp;
    case 90:
    case "k_EStreamControlVideoEncoderInfo":
      return EStreamControlMessage.k_EStreamControlVideoEncoderInfo;
    case 93:
    case "k_EStreamControlInputControllerStateHID_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlInputControllerStateHID_OBSOLETE;
    case 94:
    case "k_EStreamControlSetTargetBitrate":
      return EStreamControlMessage.k_EStreamControlSetTargetBitrate;
    case 95:
    case "k_EStreamControlSetControllerPairingEnabled_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlSetControllerPairingEnabled_OBSOLETE;
    case 96:
    case "k_EStreamControlSetControllerPairingResult_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlSetControllerPairingResult_OBSOLETE;
    case 97:
    case "k_EStreamControlTriggerControllerDisconnect_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlTriggerControllerDisconnect_OBSOLETE;
    case 98:
    case "k_EStreamControlSetActivity":
      return EStreamControlMessage.k_EStreamControlSetActivity;
    case 99:
    case "k_EStreamControlSetStreamingClientConfig":
      return EStreamControlMessage.k_EStreamControlSetStreamingClientConfig;
    case 100:
    case "k_EStreamControlSystemSuspend":
      return EStreamControlMessage.k_EStreamControlSystemSuspend;
    case 101:
    case "k_EStreamControlSetControllerSettings_OBSOLETE":
      return EStreamControlMessage.k_EStreamControlSetControllerSettings_OBSOLETE;
    case 102:
    case "k_EStreamControlVirtualHereRequest":
      return EStreamControlMessage.k_EStreamControlVirtualHereRequest;
    case 103:
    case "k_EStreamControlVirtualHereReady":
      return EStreamControlMessage.k_EStreamControlVirtualHereReady;
    case 104:
    case "k_EStreamControlVirtualHereShareDevice":
      return EStreamControlMessage.k_EStreamControlVirtualHereShareDevice;
    case 105:
    case "k_EStreamControlSetSpectatorMode":
      return EStreamControlMessage.k_EStreamControlSetSpectatorMode;
    case 106:
    case "k_EStreamControlRemoteHID":
      return EStreamControlMessage.k_EStreamControlRemoteHID;
    case 107:
    case "k_EStreamControlStartMicrophoneData":
      return EStreamControlMessage.k_EStreamControlStartMicrophoneData;
    case 108:
    case "k_EStreamControlStopMicrophoneData":
      return EStreamControlMessage.k_EStreamControlStopMicrophoneData;
    case 109:
    case "k_EStreamControlInputText":
      return EStreamControlMessage.k_EStreamControlInputText;
    case 110:
    case "k_EStreamControlTouchConfigActive":
      return EStreamControlMessage.k_EStreamControlTouchConfigActive;
    case 111:
    case "k_EStreamControlGetTouchConfigData":
      return EStreamControlMessage.k_EStreamControlGetTouchConfigData;
    case 112:
    case "k_EStreamControlSetTouchConfigData":
      return EStreamControlMessage.k_EStreamControlSetTouchConfigData;
    case 113:
    case "k_EStreamControlSaveTouchConfigLayout":
      return EStreamControlMessage.k_EStreamControlSaveTouchConfigLayout;
    case 114:
    case "k_EStreamControlTouchActionSetActive":
      return EStreamControlMessage.k_EStreamControlTouchActionSetActive;
    case 115:
    case "k_EStreamControlGetTouchIconData":
      return EStreamControlMessage.k_EStreamControlGetTouchIconData;
    case 116:
    case "k_EStreamControlSetTouchIconData":
      return EStreamControlMessage.k_EStreamControlSetTouchIconData;
    case 117:
    case "k_EStreamControlInputTouchFingerDown":
      return EStreamControlMessage.k_EStreamControlInputTouchFingerDown;
    case 118:
    case "k_EStreamControlInputTouchFingerMotion":
      return EStreamControlMessage.k_EStreamControlInputTouchFingerMotion;
    case 119:
    case "k_EStreamControlInputTouchFingerUp":
      return EStreamControlMessage.k_EStreamControlInputTouchFingerUp;
    case 120:
    case "k_EStreamControlSetCaptureSize":
      return EStreamControlMessage.k_EStreamControlSetCaptureSize;
    case 121:
    case "k_EStreamControlSetFlashState":
      return EStreamControlMessage.k_EStreamControlSetFlashState;
    case 122:
    case "k_EStreamControlPause":
      return EStreamControlMessage.k_EStreamControlPause;
    case 123:
    case "k_EStreamControlResume":
      return EStreamControlMessage.k_EStreamControlResume;
    case 124:
    case "k_EStreamControlEnableHighResCapture":
      return EStreamControlMessage.k_EStreamControlEnableHighResCapture;
    case 125:
    case "k_EStreamControlDisableHighResCapture":
      return EStreamControlMessage.k_EStreamControlDisableHighResCapture;
    case 126:
    case "k_EStreamControlToggleMagnification":
      return EStreamControlMessage.k_EStreamControlToggleMagnification;
    case 127:
    case "k_EStreamControlSetCapslock":
      return EStreamControlMessage.k_EStreamControlSetCapslock;
    case 128:
    case "k_EStreamControlSetKeymap":
      return EStreamControlMessage.k_EStreamControlSetKeymap;
    case 129:
    case "k_EStreamControlStopRequest":
      return EStreamControlMessage.k_EStreamControlStopRequest;
    case 130:
    case "k_EStreamControlTouchActionSetLayerAdded":
      return EStreamControlMessage.k_EStreamControlTouchActionSetLayerAdded;
    case 131:
    case "k_EStreamControlTouchActionSetLayerRemoved":
      return EStreamControlMessage.k_EStreamControlTouchActionSetLayerRemoved;
    case 132:
    case "k_EStreamControlRemotePlayTogetherGroupUpdate":
      return EStreamControlMessage.k_EStreamControlRemotePlayTogetherGroupUpdate;
    case 133:
    case "k_EStreamControlSetInputTemporarilyDisabled":
      return EStreamControlMessage.k_EStreamControlSetInputTemporarilyDisabled;
    case 134:
    case "k_EStreamControlSetQualityOverride":
      return EStreamControlMessage.k_EStreamControlSetQualityOverride;
    case 135:
    case "k_EStreamControlSetBitrateOverride":
      return EStreamControlMessage.k_EStreamControlSetBitrateOverride;
    case 136:
    case "k_EStreamControlShowOnScreenKeyboard":
      return EStreamControlMessage.k_EStreamControlShowOnScreenKeyboard;
    case 137:
    case "k_EStreamControlControllerConfigMsg":
      return EStreamControlMessage.k_EStreamControlControllerConfigMsg;
    case 138:
    case "k_EStreamControlControllerPersonalizationUpdate":
      return EStreamControlMessage.k_EStreamControlControllerPersonalizationUpdate;
    case 139:
    case "k_EStreamControlEnableNeptuneData":
      return EStreamControlMessage.k_EStreamControlEnableNeptuneData;
    case 140:
    case "k_EStreamControlDisableNeptuneData":
      return EStreamControlMessage.k_EStreamControlDisableNeptuneData;
    case 141:
    case "k_EStreamControlStartNeptuneData":
      return EStreamControlMessage.k_EStreamControlStartNeptuneData;
    case 142:
    case "k_EStreamControlStopNeptuneData":
      return EStreamControlMessage.k_EStreamControlStopNeptuneData;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamControlMessage.UNRECOGNIZED;
  }
}

export function eStreamControlMessageToJSON(object: EStreamControlMessage): string {
  switch (object) {
    case EStreamControlMessage.k_EStreamControlAuthenticationRequest:
      return "k_EStreamControlAuthenticationRequest";
    case EStreamControlMessage.k_EStreamControlAuthenticationResponse:
      return "k_EStreamControlAuthenticationResponse";
    case EStreamControlMessage.k_EStreamControlNegotiationInit:
      return "k_EStreamControlNegotiationInit";
    case EStreamControlMessage.k_EStreamControlNegotiationSetConfig:
      return "k_EStreamControlNegotiationSetConfig";
    case EStreamControlMessage.k_EStreamControlNegotiationComplete:
      return "k_EStreamControlNegotiationComplete";
    case EStreamControlMessage.k_EStreamControlClientHandshake:
      return "k_EStreamControlClientHandshake";
    case EStreamControlMessage.k_EStreamControlServerHandshake:
      return "k_EStreamControlServerHandshake";
    case EStreamControlMessage.k_EStreamControlStartNetworkTest:
      return "k_EStreamControlStartNetworkTest";
    case EStreamControlMessage.k_EStreamControlKeepAlive:
      return "k_EStreamControlKeepAlive";
    case EStreamControlMessage.k_EStreamControl_LAST_SETUP_MESSAGE:
      return "k_EStreamControl_LAST_SETUP_MESSAGE";
    case EStreamControlMessage.k_EStreamControlStartAudioData:
      return "k_EStreamControlStartAudioData";
    case EStreamControlMessage.k_EStreamControlStopAudioData:
      return "k_EStreamControlStopAudioData";
    case EStreamControlMessage.k_EStreamControlStartVideoData:
      return "k_EStreamControlStartVideoData";
    case EStreamControlMessage.k_EStreamControlStopVideoData:
      return "k_EStreamControlStopVideoData";
    case EStreamControlMessage.k_EStreamControlInputMouseMotion:
      return "k_EStreamControlInputMouseMotion";
    case EStreamControlMessage.k_EStreamControlInputMouseWheel:
      return "k_EStreamControlInputMouseWheel";
    case EStreamControlMessage.k_EStreamControlInputMouseDown:
      return "k_EStreamControlInputMouseDown";
    case EStreamControlMessage.k_EStreamControlInputMouseUp:
      return "k_EStreamControlInputMouseUp";
    case EStreamControlMessage.k_EStreamControlInputKeyDown:
      return "k_EStreamControlInputKeyDown";
    case EStreamControlMessage.k_EStreamControlInputKeyUp:
      return "k_EStreamControlInputKeyUp";
    case EStreamControlMessage.k_EStreamControlInputGamepadAttached_OBSOLETE:
      return "k_EStreamControlInputGamepadAttached_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlInputGamepadEvent_OBSOLETE:
      return "k_EStreamControlInputGamepadEvent_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlInputGamepadDetached_OBSOLETE:
      return "k_EStreamControlInputGamepadDetached_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlShowCursor:
      return "k_EStreamControlShowCursor";
    case EStreamControlMessage.k_EStreamControlHideCursor:
      return "k_EStreamControlHideCursor";
    case EStreamControlMessage.k_EStreamControlSetCursor:
      return "k_EStreamControlSetCursor";
    case EStreamControlMessage.k_EStreamControlGetCursorImage:
      return "k_EStreamControlGetCursorImage";
    case EStreamControlMessage.k_EStreamControlSetCursorImage:
      return "k_EStreamControlSetCursorImage";
    case EStreamControlMessage.k_EStreamControlDeleteCursor:
      return "k_EStreamControlDeleteCursor";
    case EStreamControlMessage.k_EStreamControlSetTargetFramerate:
      return "k_EStreamControlSetTargetFramerate";
    case EStreamControlMessage.k_EStreamControlInputLatencyTest:
      return "k_EStreamControlInputLatencyTest";
    case EStreamControlMessage.k_EStreamControlGamepadRumble_OBSOLETE:
      return "k_EStreamControlGamepadRumble_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlOverlayEnabled:
      return "k_EStreamControlOverlayEnabled";
    case EStreamControlMessage.k_EStreamControlInputControllerAttached_OBSOLETE:
      return "k_EStreamControlInputControllerAttached_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlInputControllerState_OBSOLETE:
      return "k_EStreamControlInputControllerState_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlTriggerHapticPulse_OBSOLETE:
      return "k_EStreamControlTriggerHapticPulse_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlInputControllerDetached_OBSOLETE:
      return "k_EStreamControlInputControllerDetached_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlVideoDecoderInfo:
      return "k_EStreamControlVideoDecoderInfo";
    case EStreamControlMessage.k_EStreamControlSetTitle:
      return "k_EStreamControlSetTitle";
    case EStreamControlMessage.k_EStreamControlSetIcon:
      return "k_EStreamControlSetIcon";
    case EStreamControlMessage.k_EStreamControlQuitRequest:
      return "k_EStreamControlQuitRequest";
    case EStreamControlMessage.k_EStreamControlSetQoS:
      return "k_EStreamControlSetQoS";
    case EStreamControlMessage.k_EStreamControlInputControllerWirelessPresence_OBSOLETE:
      return "k_EStreamControlInputControllerWirelessPresence_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlSetGammaRamp:
      return "k_EStreamControlSetGammaRamp";
    case EStreamControlMessage.k_EStreamControlVideoEncoderInfo:
      return "k_EStreamControlVideoEncoderInfo";
    case EStreamControlMessage.k_EStreamControlInputControllerStateHID_OBSOLETE:
      return "k_EStreamControlInputControllerStateHID_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlSetTargetBitrate:
      return "k_EStreamControlSetTargetBitrate";
    case EStreamControlMessage.k_EStreamControlSetControllerPairingEnabled_OBSOLETE:
      return "k_EStreamControlSetControllerPairingEnabled_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlSetControllerPairingResult_OBSOLETE:
      return "k_EStreamControlSetControllerPairingResult_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlTriggerControllerDisconnect_OBSOLETE:
      return "k_EStreamControlTriggerControllerDisconnect_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlSetActivity:
      return "k_EStreamControlSetActivity";
    case EStreamControlMessage.k_EStreamControlSetStreamingClientConfig:
      return "k_EStreamControlSetStreamingClientConfig";
    case EStreamControlMessage.k_EStreamControlSystemSuspend:
      return "k_EStreamControlSystemSuspend";
    case EStreamControlMessage.k_EStreamControlSetControllerSettings_OBSOLETE:
      return "k_EStreamControlSetControllerSettings_OBSOLETE";
    case EStreamControlMessage.k_EStreamControlVirtualHereRequest:
      return "k_EStreamControlVirtualHereRequest";
    case EStreamControlMessage.k_EStreamControlVirtualHereReady:
      return "k_EStreamControlVirtualHereReady";
    case EStreamControlMessage.k_EStreamControlVirtualHereShareDevice:
      return "k_EStreamControlVirtualHereShareDevice";
    case EStreamControlMessage.k_EStreamControlSetSpectatorMode:
      return "k_EStreamControlSetSpectatorMode";
    case EStreamControlMessage.k_EStreamControlRemoteHID:
      return "k_EStreamControlRemoteHID";
    case EStreamControlMessage.k_EStreamControlStartMicrophoneData:
      return "k_EStreamControlStartMicrophoneData";
    case EStreamControlMessage.k_EStreamControlStopMicrophoneData:
      return "k_EStreamControlStopMicrophoneData";
    case EStreamControlMessage.k_EStreamControlInputText:
      return "k_EStreamControlInputText";
    case EStreamControlMessage.k_EStreamControlTouchConfigActive:
      return "k_EStreamControlTouchConfigActive";
    case EStreamControlMessage.k_EStreamControlGetTouchConfigData:
      return "k_EStreamControlGetTouchConfigData";
    case EStreamControlMessage.k_EStreamControlSetTouchConfigData:
      return "k_EStreamControlSetTouchConfigData";
    case EStreamControlMessage.k_EStreamControlSaveTouchConfigLayout:
      return "k_EStreamControlSaveTouchConfigLayout";
    case EStreamControlMessage.k_EStreamControlTouchActionSetActive:
      return "k_EStreamControlTouchActionSetActive";
    case EStreamControlMessage.k_EStreamControlGetTouchIconData:
      return "k_EStreamControlGetTouchIconData";
    case EStreamControlMessage.k_EStreamControlSetTouchIconData:
      return "k_EStreamControlSetTouchIconData";
    case EStreamControlMessage.k_EStreamControlInputTouchFingerDown:
      return "k_EStreamControlInputTouchFingerDown";
    case EStreamControlMessage.k_EStreamControlInputTouchFingerMotion:
      return "k_EStreamControlInputTouchFingerMotion";
    case EStreamControlMessage.k_EStreamControlInputTouchFingerUp:
      return "k_EStreamControlInputTouchFingerUp";
    case EStreamControlMessage.k_EStreamControlSetCaptureSize:
      return "k_EStreamControlSetCaptureSize";
    case EStreamControlMessage.k_EStreamControlSetFlashState:
      return "k_EStreamControlSetFlashState";
    case EStreamControlMessage.k_EStreamControlPause:
      return "k_EStreamControlPause";
    case EStreamControlMessage.k_EStreamControlResume:
      return "k_EStreamControlResume";
    case EStreamControlMessage.k_EStreamControlEnableHighResCapture:
      return "k_EStreamControlEnableHighResCapture";
    case EStreamControlMessage.k_EStreamControlDisableHighResCapture:
      return "k_EStreamControlDisableHighResCapture";
    case EStreamControlMessage.k_EStreamControlToggleMagnification:
      return "k_EStreamControlToggleMagnification";
    case EStreamControlMessage.k_EStreamControlSetCapslock:
      return "k_EStreamControlSetCapslock";
    case EStreamControlMessage.k_EStreamControlSetKeymap:
      return "k_EStreamControlSetKeymap";
    case EStreamControlMessage.k_EStreamControlStopRequest:
      return "k_EStreamControlStopRequest";
    case EStreamControlMessage.k_EStreamControlTouchActionSetLayerAdded:
      return "k_EStreamControlTouchActionSetLayerAdded";
    case EStreamControlMessage.k_EStreamControlTouchActionSetLayerRemoved:
      return "k_EStreamControlTouchActionSetLayerRemoved";
    case EStreamControlMessage.k_EStreamControlRemotePlayTogetherGroupUpdate:
      return "k_EStreamControlRemotePlayTogetherGroupUpdate";
    case EStreamControlMessage.k_EStreamControlSetInputTemporarilyDisabled:
      return "k_EStreamControlSetInputTemporarilyDisabled";
    case EStreamControlMessage.k_EStreamControlSetQualityOverride:
      return "k_EStreamControlSetQualityOverride";
    case EStreamControlMessage.k_EStreamControlSetBitrateOverride:
      return "k_EStreamControlSetBitrateOverride";
    case EStreamControlMessage.k_EStreamControlShowOnScreenKeyboard:
      return "k_EStreamControlShowOnScreenKeyboard";
    case EStreamControlMessage.k_EStreamControlControllerConfigMsg:
      return "k_EStreamControlControllerConfigMsg";
    case EStreamControlMessage.k_EStreamControlControllerPersonalizationUpdate:
      return "k_EStreamControlControllerPersonalizationUpdate";
    case EStreamControlMessage.k_EStreamControlEnableNeptuneData:
      return "k_EStreamControlEnableNeptuneData";
    case EStreamControlMessage.k_EStreamControlDisableNeptuneData:
      return "k_EStreamControlDisableNeptuneData";
    case EStreamControlMessage.k_EStreamControlStartNeptuneData:
      return "k_EStreamControlStartNeptuneData";
    case EStreamControlMessage.k_EStreamControlStopNeptuneData:
      return "k_EStreamControlStopNeptuneData";
    case EStreamControlMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamVersion {
  k_EStreamVersionNone = 0,
  k_EStreamVersionCurrent = 1,
  UNRECOGNIZED = -1,
}

export function eStreamVersionFromJSON(object: any): EStreamVersion {
  switch (object) {
    case 0:
    case "k_EStreamVersionNone":
      return EStreamVersion.k_EStreamVersionNone;
    case 1:
    case "k_EStreamVersionCurrent":
      return EStreamVersion.k_EStreamVersionCurrent;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamVersion.UNRECOGNIZED;
  }
}

export function eStreamVersionToJSON(object: EStreamVersion): string {
  switch (object) {
    case EStreamVersion.k_EStreamVersionNone:
      return "k_EStreamVersionNone";
    case EStreamVersion.k_EStreamVersionCurrent:
      return "k_EStreamVersionCurrent";
    case EStreamVersion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamAudioCodec {
  k_EStreamAudioCodecNone = 0,
  k_EStreamAudioCodecRaw = 1,
  k_EStreamAudioCodecVorbis = 2,
  k_EStreamAudioCodecOpus = 3,
  k_EStreamAudioCodecMP3 = 4,
  k_EStreamAudioCodecAAC = 5,
  UNRECOGNIZED = -1,
}

export function eStreamAudioCodecFromJSON(object: any): EStreamAudioCodec {
  switch (object) {
    case 0:
    case "k_EStreamAudioCodecNone":
      return EStreamAudioCodec.k_EStreamAudioCodecNone;
    case 1:
    case "k_EStreamAudioCodecRaw":
      return EStreamAudioCodec.k_EStreamAudioCodecRaw;
    case 2:
    case "k_EStreamAudioCodecVorbis":
      return EStreamAudioCodec.k_EStreamAudioCodecVorbis;
    case 3:
    case "k_EStreamAudioCodecOpus":
      return EStreamAudioCodec.k_EStreamAudioCodecOpus;
    case 4:
    case "k_EStreamAudioCodecMP3":
      return EStreamAudioCodec.k_EStreamAudioCodecMP3;
    case 5:
    case "k_EStreamAudioCodecAAC":
      return EStreamAudioCodec.k_EStreamAudioCodecAAC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamAudioCodec.UNRECOGNIZED;
  }
}

export function eStreamAudioCodecToJSON(object: EStreamAudioCodec): string {
  switch (object) {
    case EStreamAudioCodec.k_EStreamAudioCodecNone:
      return "k_EStreamAudioCodecNone";
    case EStreamAudioCodec.k_EStreamAudioCodecRaw:
      return "k_EStreamAudioCodecRaw";
    case EStreamAudioCodec.k_EStreamAudioCodecVorbis:
      return "k_EStreamAudioCodecVorbis";
    case EStreamAudioCodec.k_EStreamAudioCodecOpus:
      return "k_EStreamAudioCodecOpus";
    case EStreamAudioCodec.k_EStreamAudioCodecMP3:
      return "k_EStreamAudioCodecMP3";
    case EStreamAudioCodec.k_EStreamAudioCodecAAC:
      return "k_EStreamAudioCodecAAC";
    case EStreamAudioCodec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamVideoCodec {
  k_EStreamVideoCodecNone = 0,
  k_EStreamVideoCodecRaw = 1,
  k_EStreamVideoCodecVP8 = 2,
  k_EStreamVideoCodecVP9 = 3,
  k_EStreamVideoCodecH264 = 4,
  k_EStreamVideoCodecHEVC = 5,
  k_EStreamVideoCodecORBX1 = 6,
  k_EStreamVideoCodecORBX2 = 7,
  UNRECOGNIZED = -1,
}

export function eStreamVideoCodecFromJSON(object: any): EStreamVideoCodec {
  switch (object) {
    case 0:
    case "k_EStreamVideoCodecNone":
      return EStreamVideoCodec.k_EStreamVideoCodecNone;
    case 1:
    case "k_EStreamVideoCodecRaw":
      return EStreamVideoCodec.k_EStreamVideoCodecRaw;
    case 2:
    case "k_EStreamVideoCodecVP8":
      return EStreamVideoCodec.k_EStreamVideoCodecVP8;
    case 3:
    case "k_EStreamVideoCodecVP9":
      return EStreamVideoCodec.k_EStreamVideoCodecVP9;
    case 4:
    case "k_EStreamVideoCodecH264":
      return EStreamVideoCodec.k_EStreamVideoCodecH264;
    case 5:
    case "k_EStreamVideoCodecHEVC":
      return EStreamVideoCodec.k_EStreamVideoCodecHEVC;
    case 6:
    case "k_EStreamVideoCodecORBX1":
      return EStreamVideoCodec.k_EStreamVideoCodecORBX1;
    case 7:
    case "k_EStreamVideoCodecORBX2":
      return EStreamVideoCodec.k_EStreamVideoCodecORBX2;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamVideoCodec.UNRECOGNIZED;
  }
}

export function eStreamVideoCodecToJSON(object: EStreamVideoCodec): string {
  switch (object) {
    case EStreamVideoCodec.k_EStreamVideoCodecNone:
      return "k_EStreamVideoCodecNone";
    case EStreamVideoCodec.k_EStreamVideoCodecRaw:
      return "k_EStreamVideoCodecRaw";
    case EStreamVideoCodec.k_EStreamVideoCodecVP8:
      return "k_EStreamVideoCodecVP8";
    case EStreamVideoCodec.k_EStreamVideoCodecVP9:
      return "k_EStreamVideoCodecVP9";
    case EStreamVideoCodec.k_EStreamVideoCodecH264:
      return "k_EStreamVideoCodecH264";
    case EStreamVideoCodec.k_EStreamVideoCodecHEVC:
      return "k_EStreamVideoCodecHEVC";
    case EStreamVideoCodec.k_EStreamVideoCodecORBX1:
      return "k_EStreamVideoCodecORBX1";
    case EStreamVideoCodec.k_EStreamVideoCodecORBX2:
      return "k_EStreamVideoCodecORBX2";
    case EStreamVideoCodec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamQualityPreference {
  k_EStreamQualityAutomatic = -1,
  k_EStreamQualityFast = 1,
  k_EStreamQualityBalanced = 2,
  k_EStreamQualityBeautiful = 3,
  UNRECOGNIZED = -1,
}

export function eStreamQualityPreferenceFromJSON(object: any): EStreamQualityPreference {
  switch (object) {
    case -1:
    case "k_EStreamQualityAutomatic":
      return EStreamQualityPreference.k_EStreamQualityAutomatic;
    case 1:
    case "k_EStreamQualityFast":
      return EStreamQualityPreference.k_EStreamQualityFast;
    case 2:
    case "k_EStreamQualityBalanced":
      return EStreamQualityPreference.k_EStreamQualityBalanced;
    case 3:
    case "k_EStreamQualityBeautiful":
      return EStreamQualityPreference.k_EStreamQualityBeautiful;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamQualityPreference.UNRECOGNIZED;
  }
}

export function eStreamQualityPreferenceToJSON(object: EStreamQualityPreference): string {
  switch (object) {
    case EStreamQualityPreference.k_EStreamQualityAutomatic:
      return "k_EStreamQualityAutomatic";
    case EStreamQualityPreference.k_EStreamQualityFast:
      return "k_EStreamQualityFast";
    case EStreamQualityPreference.k_EStreamQualityBalanced:
      return "k_EStreamQualityBalanced";
    case EStreamQualityPreference.k_EStreamQualityBeautiful:
      return "k_EStreamQualityBeautiful";
    case EStreamQualityPreference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamBitrate {
  k_EStreamBitrateAutodetect = -1,
  k_EStreamBitrateUnlimited = 0,
  UNRECOGNIZED = -1,
}

export function eStreamBitrateFromJSON(object: any): EStreamBitrate {
  switch (object) {
    case -1:
    case "k_EStreamBitrateAutodetect":
      return EStreamBitrate.k_EStreamBitrateAutodetect;
    case 0:
    case "k_EStreamBitrateUnlimited":
      return EStreamBitrate.k_EStreamBitrateUnlimited;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamBitrate.UNRECOGNIZED;
  }
}

export function eStreamBitrateToJSON(object: EStreamBitrate): string {
  switch (object) {
    case EStreamBitrate.k_EStreamBitrateAutodetect:
      return "k_EStreamBitrateAutodetect";
    case EStreamBitrate.k_EStreamBitrateUnlimited:
      return "k_EStreamBitrateUnlimited";
    case EStreamBitrate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamColorspace {
  k_EStreamColorspace_Unknown = 0,
  k_EStreamColorspace_BT601 = 1,
  k_EStreamColorspace_BT601_Full = 2,
  k_EStreamColorspace_BT709 = 3,
  k_EStreamColorspace_BT709_Full = 4,
  UNRECOGNIZED = -1,
}

export function eStreamColorspaceFromJSON(object: any): EStreamColorspace {
  switch (object) {
    case 0:
    case "k_EStreamColorspace_Unknown":
      return EStreamColorspace.k_EStreamColorspace_Unknown;
    case 1:
    case "k_EStreamColorspace_BT601":
      return EStreamColorspace.k_EStreamColorspace_BT601;
    case 2:
    case "k_EStreamColorspace_BT601_Full":
      return EStreamColorspace.k_EStreamColorspace_BT601_Full;
    case 3:
    case "k_EStreamColorspace_BT709":
      return EStreamColorspace.k_EStreamColorspace_BT709;
    case 4:
    case "k_EStreamColorspace_BT709_Full":
      return EStreamColorspace.k_EStreamColorspace_BT709_Full;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamColorspace.UNRECOGNIZED;
  }
}

export function eStreamColorspaceToJSON(object: EStreamColorspace): string {
  switch (object) {
    case EStreamColorspace.k_EStreamColorspace_Unknown:
      return "k_EStreamColorspace_Unknown";
    case EStreamColorspace.k_EStreamColorspace_BT601:
      return "k_EStreamColorspace_BT601";
    case EStreamColorspace.k_EStreamColorspace_BT601_Full:
      return "k_EStreamColorspace_BT601_Full";
    case EStreamColorspace.k_EStreamColorspace_BT709:
      return "k_EStreamColorspace_BT709";
    case EStreamColorspace.k_EStreamColorspace_BT709_Full:
      return "k_EStreamColorspace_BT709_Full";
    case EStreamColorspace.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamP2PScope {
  k_EStreamP2PScopeAutomatic = 0,
  k_EStreamP2PScopeDisabled = 1,
  k_EStreamP2PScopeOnlyMe = 2,
  k_EStreamP2PScopeFriends = 3,
  k_EStreamP2PScopeEveryone = 4,
  UNRECOGNIZED = -1,
}

export function eStreamP2PScopeFromJSON(object: any): EStreamP2PScope {
  switch (object) {
    case 0:
    case "k_EStreamP2PScopeAutomatic":
      return EStreamP2PScope.k_EStreamP2PScopeAutomatic;
    case 1:
    case "k_EStreamP2PScopeDisabled":
      return EStreamP2PScope.k_EStreamP2PScopeDisabled;
    case 2:
    case "k_EStreamP2PScopeOnlyMe":
      return EStreamP2PScope.k_EStreamP2PScopeOnlyMe;
    case 3:
    case "k_EStreamP2PScopeFriends":
      return EStreamP2PScope.k_EStreamP2PScopeFriends;
    case 4:
    case "k_EStreamP2PScopeEveryone":
      return EStreamP2PScope.k_EStreamP2PScopeEveryone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamP2PScope.UNRECOGNIZED;
  }
}

export function eStreamP2PScopeToJSON(object: EStreamP2PScope): string {
  switch (object) {
    case EStreamP2PScope.k_EStreamP2PScopeAutomatic:
      return "k_EStreamP2PScopeAutomatic";
    case EStreamP2PScope.k_EStreamP2PScopeDisabled:
      return "k_EStreamP2PScopeDisabled";
    case EStreamP2PScope.k_EStreamP2PScopeOnlyMe:
      return "k_EStreamP2PScopeOnlyMe";
    case EStreamP2PScope.k_EStreamP2PScopeFriends:
      return "k_EStreamP2PScopeFriends";
    case EStreamP2PScope.k_EStreamP2PScopeEveryone:
      return "k_EStreamP2PScopeEveryone";
    case EStreamP2PScope.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamHostPlayAudioPreference {
  k_EStreamHostPlayAudioDefault = 0,
  k_EStreamHostPlayAudioAlways = 1,
  UNRECOGNIZED = -1,
}

export function eStreamHostPlayAudioPreferenceFromJSON(object: any): EStreamHostPlayAudioPreference {
  switch (object) {
    case 0:
    case "k_EStreamHostPlayAudioDefault":
      return EStreamHostPlayAudioPreference.k_EStreamHostPlayAudioDefault;
    case 1:
    case "k_EStreamHostPlayAudioAlways":
      return EStreamHostPlayAudioPreference.k_EStreamHostPlayAudioAlways;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamHostPlayAudioPreference.UNRECOGNIZED;
  }
}

export function eStreamHostPlayAudioPreferenceToJSON(object: EStreamHostPlayAudioPreference): string {
  switch (object) {
    case EStreamHostPlayAudioPreference.k_EStreamHostPlayAudioDefault:
      return "k_EStreamHostPlayAudioDefault";
    case EStreamHostPlayAudioPreference.k_EStreamHostPlayAudioAlways:
      return "k_EStreamHostPlayAudioAlways";
    case EStreamHostPlayAudioPreference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamingDataType {
  k_EStreamingAudioData = 0,
  k_EStreamingVideoData = 1,
  k_EStreamingMicrophoneData = 2,
  k_EStreamingNeptuneData = 3,
  UNRECOGNIZED = -1,
}

export function eStreamingDataTypeFromJSON(object: any): EStreamingDataType {
  switch (object) {
    case 0:
    case "k_EStreamingAudioData":
      return EStreamingDataType.k_EStreamingAudioData;
    case 1:
    case "k_EStreamingVideoData":
      return EStreamingDataType.k_EStreamingVideoData;
    case 2:
    case "k_EStreamingMicrophoneData":
      return EStreamingDataType.k_EStreamingMicrophoneData;
    case 3:
    case "k_EStreamingNeptuneData":
      return EStreamingDataType.k_EStreamingNeptuneData;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamingDataType.UNRECOGNIZED;
  }
}

export function eStreamingDataTypeToJSON(object: EStreamingDataType): string {
  switch (object) {
    case EStreamingDataType.k_EStreamingAudioData:
      return "k_EStreamingAudioData";
    case EStreamingDataType.k_EStreamingVideoData:
      return "k_EStreamingVideoData";
    case EStreamingDataType.k_EStreamingMicrophoneData:
      return "k_EStreamingMicrophoneData";
    case EStreamingDataType.k_EStreamingNeptuneData:
      return "k_EStreamingNeptuneData";
    case EStreamingDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamMouseButton {
  k_EStreamMouseButtonLeft = 1,
  k_EStreamMouseButtonRight = 2,
  k_EStreamMouseButtonMiddle = 16,
  k_EStreamMouseButtonX1 = 32,
  k_EStreamMouseButtonX2 = 64,
  k_EStreamMouseButtonUnknown = 4096,
  UNRECOGNIZED = -1,
}

export function eStreamMouseButtonFromJSON(object: any): EStreamMouseButton {
  switch (object) {
    case 1:
    case "k_EStreamMouseButtonLeft":
      return EStreamMouseButton.k_EStreamMouseButtonLeft;
    case 2:
    case "k_EStreamMouseButtonRight":
      return EStreamMouseButton.k_EStreamMouseButtonRight;
    case 16:
    case "k_EStreamMouseButtonMiddle":
      return EStreamMouseButton.k_EStreamMouseButtonMiddle;
    case 32:
    case "k_EStreamMouseButtonX1":
      return EStreamMouseButton.k_EStreamMouseButtonX1;
    case 64:
    case "k_EStreamMouseButtonX2":
      return EStreamMouseButton.k_EStreamMouseButtonX2;
    case 4096:
    case "k_EStreamMouseButtonUnknown":
      return EStreamMouseButton.k_EStreamMouseButtonUnknown;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamMouseButton.UNRECOGNIZED;
  }
}

export function eStreamMouseButtonToJSON(object: EStreamMouseButton): string {
  switch (object) {
    case EStreamMouseButton.k_EStreamMouseButtonLeft:
      return "k_EStreamMouseButtonLeft";
    case EStreamMouseButton.k_EStreamMouseButtonRight:
      return "k_EStreamMouseButtonRight";
    case EStreamMouseButton.k_EStreamMouseButtonMiddle:
      return "k_EStreamMouseButtonMiddle";
    case EStreamMouseButton.k_EStreamMouseButtonX1:
      return "k_EStreamMouseButtonX1";
    case EStreamMouseButton.k_EStreamMouseButtonX2:
      return "k_EStreamMouseButtonX2";
    case EStreamMouseButton.k_EStreamMouseButtonUnknown:
      return "k_EStreamMouseButtonUnknown";
    case EStreamMouseButton.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamMouseWheelDirection {
  k_EStreamMouseWheelUp = 120,
  k_EStreamMouseWheelDown = -120,
  k_EStreamMouseWheelLeft = 3,
  k_EStreamMouseWheelRight = 4,
  UNRECOGNIZED = -1,
}

export function eStreamMouseWheelDirectionFromJSON(object: any): EStreamMouseWheelDirection {
  switch (object) {
    case 120:
    case "k_EStreamMouseWheelUp":
      return EStreamMouseWheelDirection.k_EStreamMouseWheelUp;
    case -120:
    case "k_EStreamMouseWheelDown":
      return EStreamMouseWheelDirection.k_EStreamMouseWheelDown;
    case 3:
    case "k_EStreamMouseWheelLeft":
      return EStreamMouseWheelDirection.k_EStreamMouseWheelLeft;
    case 4:
    case "k_EStreamMouseWheelRight":
      return EStreamMouseWheelDirection.k_EStreamMouseWheelRight;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamMouseWheelDirection.UNRECOGNIZED;
  }
}

export function eStreamMouseWheelDirectionToJSON(object: EStreamMouseWheelDirection): string {
  switch (object) {
    case EStreamMouseWheelDirection.k_EStreamMouseWheelUp:
      return "k_EStreamMouseWheelUp";
    case EStreamMouseWheelDirection.k_EStreamMouseWheelDown:
      return "k_EStreamMouseWheelDown";
    case EStreamMouseWheelDirection.k_EStreamMouseWheelLeft:
      return "k_EStreamMouseWheelLeft";
    case EStreamMouseWheelDirection.k_EStreamMouseWheelRight:
      return "k_EStreamMouseWheelRight";
    case EStreamMouseWheelDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamFramerateLimiter {
  k_EStreamFramerateSlowCapture = 1,
  k_EStreamFramerateSlowConvert = 2,
  k_EStreamFramerateSlowEncode = 4,
  k_EStreamFramerateSlowNetwork = 8,
  k_EStreamFramerateSlowDecode = 16,
  k_EStreamFramerateSlowGame = 32,
  k_EStreamFramerateSlowDisplay = 64,
  UNRECOGNIZED = -1,
}

export function eStreamFramerateLimiterFromJSON(object: any): EStreamFramerateLimiter {
  switch (object) {
    case 1:
    case "k_EStreamFramerateSlowCapture":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowCapture;
    case 2:
    case "k_EStreamFramerateSlowConvert":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowConvert;
    case 4:
    case "k_EStreamFramerateSlowEncode":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowEncode;
    case 8:
    case "k_EStreamFramerateSlowNetwork":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowNetwork;
    case 16:
    case "k_EStreamFramerateSlowDecode":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowDecode;
    case 32:
    case "k_EStreamFramerateSlowGame":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowGame;
    case 64:
    case "k_EStreamFramerateSlowDisplay":
      return EStreamFramerateLimiter.k_EStreamFramerateSlowDisplay;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamFramerateLimiter.UNRECOGNIZED;
  }
}

export function eStreamFramerateLimiterToJSON(object: EStreamFramerateLimiter): string {
  switch (object) {
    case EStreamFramerateLimiter.k_EStreamFramerateSlowCapture:
      return "k_EStreamFramerateSlowCapture";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowConvert:
      return "k_EStreamFramerateSlowConvert";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowEncode:
      return "k_EStreamFramerateSlowEncode";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowNetwork:
      return "k_EStreamFramerateSlowNetwork";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowDecode:
      return "k_EStreamFramerateSlowDecode";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowGame:
      return "k_EStreamFramerateSlowGame";
    case EStreamFramerateLimiter.k_EStreamFramerateSlowDisplay:
      return "k_EStreamFramerateSlowDisplay";
    case EStreamFramerateLimiter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamActivity {
  k_EStreamActivityIdle = 1,
  k_EStreamActivityGame = 2,
  k_EStreamActivityDesktop = 3,
  k_EStreamActivitySecureDesktop = 4,
  k_EStreamActivityMusic = 5,
  UNRECOGNIZED = -1,
}

export function eStreamActivityFromJSON(object: any): EStreamActivity {
  switch (object) {
    case 1:
    case "k_EStreamActivityIdle":
      return EStreamActivity.k_EStreamActivityIdle;
    case 2:
    case "k_EStreamActivityGame":
      return EStreamActivity.k_EStreamActivityGame;
    case 3:
    case "k_EStreamActivityDesktop":
      return EStreamActivity.k_EStreamActivityDesktop;
    case 4:
    case "k_EStreamActivitySecureDesktop":
      return EStreamActivity.k_EStreamActivitySecureDesktop;
    case 5:
    case "k_EStreamActivityMusic":
      return EStreamActivity.k_EStreamActivityMusic;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamActivity.UNRECOGNIZED;
  }
}

export function eStreamActivityToJSON(object: EStreamActivity): string {
  switch (object) {
    case EStreamActivity.k_EStreamActivityIdle:
      return "k_EStreamActivityIdle";
    case EStreamActivity.k_EStreamActivityGame:
      return "k_EStreamActivityGame";
    case EStreamActivity.k_EStreamActivityDesktop:
      return "k_EStreamActivityDesktop";
    case EStreamActivity.k_EStreamActivitySecureDesktop:
      return "k_EStreamActivitySecureDesktop";
    case EStreamActivity.k_EStreamActivityMusic:
      return "k_EStreamActivityMusic";
    case EStreamActivity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamDataMessage {
  k_EStreamDataPacket = 1,
  k_EStreamDataLost = 2,
  UNRECOGNIZED = -1,
}

export function eStreamDataMessageFromJSON(object: any): EStreamDataMessage {
  switch (object) {
    case 1:
    case "k_EStreamDataPacket":
      return EStreamDataMessage.k_EStreamDataPacket;
    case 2:
    case "k_EStreamDataLost":
      return EStreamDataMessage.k_EStreamDataLost;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamDataMessage.UNRECOGNIZED;
  }
}

export function eStreamDataMessageToJSON(object: EStreamDataMessage): string {
  switch (object) {
    case EStreamDataMessage.k_EStreamDataPacket:
      return "k_EStreamDataPacket";
    case EStreamDataMessage.k_EStreamDataLost:
      return "k_EStreamDataLost";
    case EStreamDataMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAudioFormat {
  k_EAudioFormatNone = 0,
  k_EAudioFormat16BitLittleEndian = 1,
  k_EAudioFormatFloat = 2,
  UNRECOGNIZED = -1,
}

export function eAudioFormatFromJSON(object: any): EAudioFormat {
  switch (object) {
    case 0:
    case "k_EAudioFormatNone":
      return EAudioFormat.k_EAudioFormatNone;
    case 1:
    case "k_EAudioFormat16BitLittleEndian":
      return EAudioFormat.k_EAudioFormat16BitLittleEndian;
    case 2:
    case "k_EAudioFormatFloat":
      return EAudioFormat.k_EAudioFormatFloat;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAudioFormat.UNRECOGNIZED;
  }
}

export function eAudioFormatToJSON(object: EAudioFormat): string {
  switch (object) {
    case EAudioFormat.k_EAudioFormatNone:
      return "k_EAudioFormatNone";
    case EAudioFormat.k_EAudioFormat16BitLittleEndian:
      return "k_EAudioFormat16BitLittleEndian";
    case EAudioFormat.k_EAudioFormatFloat:
      return "k_EAudioFormatFloat";
    case EAudioFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EVideoFormat {
  k_EVideoFormatNone = 0,
  k_EVideoFormatYV12 = 1,
  k_EVideoFormatAccel = 2,
  UNRECOGNIZED = -1,
}

export function eVideoFormatFromJSON(object: any): EVideoFormat {
  switch (object) {
    case 0:
    case "k_EVideoFormatNone":
      return EVideoFormat.k_EVideoFormatNone;
    case 1:
    case "k_EVideoFormatYV12":
      return EVideoFormat.k_EVideoFormatYV12;
    case 2:
    case "k_EVideoFormatAccel":
      return EVideoFormat.k_EVideoFormatAccel;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EVideoFormat.UNRECOGNIZED;
  }
}

export function eVideoFormatToJSON(object: EVideoFormat): string {
  switch (object) {
    case EVideoFormat.k_EVideoFormatNone:
      return "k_EVideoFormatNone";
    case EVideoFormat.k_EVideoFormatYV12:
      return "k_EVideoFormatYV12";
    case EVideoFormat.k_EVideoFormatAccel:
      return "k_EVideoFormatAccel";
    case EVideoFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamStatsMessage {
  k_EStreamStatsFrameEvents = 1,
  k_EStreamStatsDebugDump = 2,
  k_EStreamStatsLogMessage = 3,
  k_EStreamStatsLogUploadBegin = 4,
  k_EStreamStatsLogUploadData = 5,
  k_EStreamStatsLogUploadComplete = 6,
  UNRECOGNIZED = -1,
}

export function eStreamStatsMessageFromJSON(object: any): EStreamStatsMessage {
  switch (object) {
    case 1:
    case "k_EStreamStatsFrameEvents":
      return EStreamStatsMessage.k_EStreamStatsFrameEvents;
    case 2:
    case "k_EStreamStatsDebugDump":
      return EStreamStatsMessage.k_EStreamStatsDebugDump;
    case 3:
    case "k_EStreamStatsLogMessage":
      return EStreamStatsMessage.k_EStreamStatsLogMessage;
    case 4:
    case "k_EStreamStatsLogUploadBegin":
      return EStreamStatsMessage.k_EStreamStatsLogUploadBegin;
    case 5:
    case "k_EStreamStatsLogUploadData":
      return EStreamStatsMessage.k_EStreamStatsLogUploadData;
    case 6:
    case "k_EStreamStatsLogUploadComplete":
      return EStreamStatsMessage.k_EStreamStatsLogUploadComplete;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamStatsMessage.UNRECOGNIZED;
  }
}

export function eStreamStatsMessageToJSON(object: EStreamStatsMessage): string {
  switch (object) {
    case EStreamStatsMessage.k_EStreamStatsFrameEvents:
      return "k_EStreamStatsFrameEvents";
    case EStreamStatsMessage.k_EStreamStatsDebugDump:
      return "k_EStreamStatsDebugDump";
    case EStreamStatsMessage.k_EStreamStatsLogMessage:
      return "k_EStreamStatsLogMessage";
    case EStreamStatsMessage.k_EStreamStatsLogUploadBegin:
      return "k_EStreamStatsLogUploadBegin";
    case EStreamStatsMessage.k_EStreamStatsLogUploadData:
      return "k_EStreamStatsLogUploadData";
    case EStreamStatsMessage.k_EStreamStatsLogUploadComplete:
      return "k_EStreamStatsLogUploadComplete";
    case EStreamStatsMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamFrameEvent {
  k_EStreamInputEventStart = 0,
  k_EStreamInputEventSend = 1,
  k_EStreamInputEventRecv = 2,
  k_EStreamInputEventQueued = 3,
  k_EStreamInputEventHandled = 4,
  k_EStreamFrameEventStart = 5,
  k_EStreamFrameEventCaptureBegin = 6,
  k_EStreamFrameEventCaptureEnd = 7,
  k_EStreamFrameEventConvertBegin = 8,
  k_EStreamFrameEventConvertEnd = 9,
  k_EStreamFrameEventEncodeBegin = 10,
  k_EStreamFrameEventEncodeEnd = 11,
  k_EStreamFrameEventSend = 12,
  k_EStreamFrameEventRecv = 13,
  k_EStreamFrameEventDecodeBegin = 14,
  k_EStreamFrameEventDecodeEnd = 15,
  k_EStreamFrameEventUploadBegin = 16,
  k_EStreamFrameEventUploadEnd = 17,
  k_EStreamFrameEventComplete = 18,
  UNRECOGNIZED = -1,
}

export function eStreamFrameEventFromJSON(object: any): EStreamFrameEvent {
  switch (object) {
    case 0:
    case "k_EStreamInputEventStart":
      return EStreamFrameEvent.k_EStreamInputEventStart;
    case 1:
    case "k_EStreamInputEventSend":
      return EStreamFrameEvent.k_EStreamInputEventSend;
    case 2:
    case "k_EStreamInputEventRecv":
      return EStreamFrameEvent.k_EStreamInputEventRecv;
    case 3:
    case "k_EStreamInputEventQueued":
      return EStreamFrameEvent.k_EStreamInputEventQueued;
    case 4:
    case "k_EStreamInputEventHandled":
      return EStreamFrameEvent.k_EStreamInputEventHandled;
    case 5:
    case "k_EStreamFrameEventStart":
      return EStreamFrameEvent.k_EStreamFrameEventStart;
    case 6:
    case "k_EStreamFrameEventCaptureBegin":
      return EStreamFrameEvent.k_EStreamFrameEventCaptureBegin;
    case 7:
    case "k_EStreamFrameEventCaptureEnd":
      return EStreamFrameEvent.k_EStreamFrameEventCaptureEnd;
    case 8:
    case "k_EStreamFrameEventConvertBegin":
      return EStreamFrameEvent.k_EStreamFrameEventConvertBegin;
    case 9:
    case "k_EStreamFrameEventConvertEnd":
      return EStreamFrameEvent.k_EStreamFrameEventConvertEnd;
    case 10:
    case "k_EStreamFrameEventEncodeBegin":
      return EStreamFrameEvent.k_EStreamFrameEventEncodeBegin;
    case 11:
    case "k_EStreamFrameEventEncodeEnd":
      return EStreamFrameEvent.k_EStreamFrameEventEncodeEnd;
    case 12:
    case "k_EStreamFrameEventSend":
      return EStreamFrameEvent.k_EStreamFrameEventSend;
    case 13:
    case "k_EStreamFrameEventRecv":
      return EStreamFrameEvent.k_EStreamFrameEventRecv;
    case 14:
    case "k_EStreamFrameEventDecodeBegin":
      return EStreamFrameEvent.k_EStreamFrameEventDecodeBegin;
    case 15:
    case "k_EStreamFrameEventDecodeEnd":
      return EStreamFrameEvent.k_EStreamFrameEventDecodeEnd;
    case 16:
    case "k_EStreamFrameEventUploadBegin":
      return EStreamFrameEvent.k_EStreamFrameEventUploadBegin;
    case 17:
    case "k_EStreamFrameEventUploadEnd":
      return EStreamFrameEvent.k_EStreamFrameEventUploadEnd;
    case 18:
    case "k_EStreamFrameEventComplete":
      return EStreamFrameEvent.k_EStreamFrameEventComplete;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamFrameEvent.UNRECOGNIZED;
  }
}

export function eStreamFrameEventToJSON(object: EStreamFrameEvent): string {
  switch (object) {
    case EStreamFrameEvent.k_EStreamInputEventStart:
      return "k_EStreamInputEventStart";
    case EStreamFrameEvent.k_EStreamInputEventSend:
      return "k_EStreamInputEventSend";
    case EStreamFrameEvent.k_EStreamInputEventRecv:
      return "k_EStreamInputEventRecv";
    case EStreamFrameEvent.k_EStreamInputEventQueued:
      return "k_EStreamInputEventQueued";
    case EStreamFrameEvent.k_EStreamInputEventHandled:
      return "k_EStreamInputEventHandled";
    case EStreamFrameEvent.k_EStreamFrameEventStart:
      return "k_EStreamFrameEventStart";
    case EStreamFrameEvent.k_EStreamFrameEventCaptureBegin:
      return "k_EStreamFrameEventCaptureBegin";
    case EStreamFrameEvent.k_EStreamFrameEventCaptureEnd:
      return "k_EStreamFrameEventCaptureEnd";
    case EStreamFrameEvent.k_EStreamFrameEventConvertBegin:
      return "k_EStreamFrameEventConvertBegin";
    case EStreamFrameEvent.k_EStreamFrameEventConvertEnd:
      return "k_EStreamFrameEventConvertEnd";
    case EStreamFrameEvent.k_EStreamFrameEventEncodeBegin:
      return "k_EStreamFrameEventEncodeBegin";
    case EStreamFrameEvent.k_EStreamFrameEventEncodeEnd:
      return "k_EStreamFrameEventEncodeEnd";
    case EStreamFrameEvent.k_EStreamFrameEventSend:
      return "k_EStreamFrameEventSend";
    case EStreamFrameEvent.k_EStreamFrameEventRecv:
      return "k_EStreamFrameEventRecv";
    case EStreamFrameEvent.k_EStreamFrameEventDecodeBegin:
      return "k_EStreamFrameEventDecodeBegin";
    case EStreamFrameEvent.k_EStreamFrameEventDecodeEnd:
      return "k_EStreamFrameEventDecodeEnd";
    case EStreamFrameEvent.k_EStreamFrameEventUploadBegin:
      return "k_EStreamFrameEventUploadBegin";
    case EStreamFrameEvent.k_EStreamFrameEventUploadEnd:
      return "k_EStreamFrameEventUploadEnd";
    case EStreamFrameEvent.k_EStreamFrameEventComplete:
      return "k_EStreamFrameEventComplete";
    case EStreamFrameEvent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamFrameResult {
  k_EStreamFrameResultPending = 0,
  k_EStreamFrameResultDisplayed = 1,
  k_EStreamFrameResultDroppedNetworkSlow = 2,
  k_EStreamFrameResultDroppedNetworkLost = 3,
  k_EStreamFrameResultDroppedDecodeSlow = 4,
  k_EStreamFrameResultDroppedDecodeCorrupt = 5,
  k_EStreamFrameResultDroppedLate = 6,
  k_EStreamFrameResultDroppedReset = 7,
  UNRECOGNIZED = -1,
}

export function eStreamFrameResultFromJSON(object: any): EStreamFrameResult {
  switch (object) {
    case 0:
    case "k_EStreamFrameResultPending":
      return EStreamFrameResult.k_EStreamFrameResultPending;
    case 1:
    case "k_EStreamFrameResultDisplayed":
      return EStreamFrameResult.k_EStreamFrameResultDisplayed;
    case 2:
    case "k_EStreamFrameResultDroppedNetworkSlow":
      return EStreamFrameResult.k_EStreamFrameResultDroppedNetworkSlow;
    case 3:
    case "k_EStreamFrameResultDroppedNetworkLost":
      return EStreamFrameResult.k_EStreamFrameResultDroppedNetworkLost;
    case 4:
    case "k_EStreamFrameResultDroppedDecodeSlow":
      return EStreamFrameResult.k_EStreamFrameResultDroppedDecodeSlow;
    case 5:
    case "k_EStreamFrameResultDroppedDecodeCorrupt":
      return EStreamFrameResult.k_EStreamFrameResultDroppedDecodeCorrupt;
    case 6:
    case "k_EStreamFrameResultDroppedLate":
      return EStreamFrameResult.k_EStreamFrameResultDroppedLate;
    case 7:
    case "k_EStreamFrameResultDroppedReset":
      return EStreamFrameResult.k_EStreamFrameResultDroppedReset;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamFrameResult.UNRECOGNIZED;
  }
}

export function eStreamFrameResultToJSON(object: EStreamFrameResult): string {
  switch (object) {
    case EStreamFrameResult.k_EStreamFrameResultPending:
      return "k_EStreamFrameResultPending";
    case EStreamFrameResult.k_EStreamFrameResultDisplayed:
      return "k_EStreamFrameResultDisplayed";
    case EStreamFrameResult.k_EStreamFrameResultDroppedNetworkSlow:
      return "k_EStreamFrameResultDroppedNetworkSlow";
    case EStreamFrameResult.k_EStreamFrameResultDroppedNetworkLost:
      return "k_EStreamFrameResultDroppedNetworkLost";
    case EStreamFrameResult.k_EStreamFrameResultDroppedDecodeSlow:
      return "k_EStreamFrameResultDroppedDecodeSlow";
    case EStreamFrameResult.k_EStreamFrameResultDroppedDecodeCorrupt:
      return "k_EStreamFrameResultDroppedDecodeCorrupt";
    case EStreamFrameResult.k_EStreamFrameResultDroppedLate:
      return "k_EStreamFrameResultDroppedLate";
    case EStreamFrameResult.k_EStreamFrameResultDroppedReset:
      return "k_EStreamFrameResultDroppedReset";
    case EStreamFrameResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EFrameAccumulatedStat {
  k_EFrameStatFPS = 0,
  k_EFrameStatCaptureDurationMS = 1,
  k_EFrameStatConvertDurationMS = 2,
  k_EFrameStatEncodeDurationMS = 3,
  k_EFrameStatSteamDurationMS = 4,
  k_EFrameStatServerDurationMS = 5,
  k_EFrameStatNetworkDurationMS = 6,
  k_EFrameStatDecodeDurationMS = 7,
  k_EFrameStatDisplayDurationMS = 8,
  k_EFrameStatClientDurationMS = 9,
  k_EFrameStatFrameDurationMS = 10,
  k_EFrameStatInputLatencyMS = 11,
  k_EFrameStatGameLatencyMS = 12,
  k_EFrameStatRoundTripLatencyMS = 13,
  k_EFrameStatPingTimeMS = 14,
  k_EFrameStatServerBitrateKbitPerSec = 15,
  k_EFrameStatClientBitrateKbitPerSec = 16,
  k_EFrameStatLinkBandwidthKbitPerSec = 17,
  k_EFrameStatPacketLossPercentage = 18,
  UNRECOGNIZED = -1,
}

export function eFrameAccumulatedStatFromJSON(object: any): EFrameAccumulatedStat {
  switch (object) {
    case 0:
    case "k_EFrameStatFPS":
      return EFrameAccumulatedStat.k_EFrameStatFPS;
    case 1:
    case "k_EFrameStatCaptureDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatCaptureDurationMS;
    case 2:
    case "k_EFrameStatConvertDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatConvertDurationMS;
    case 3:
    case "k_EFrameStatEncodeDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatEncodeDurationMS;
    case 4:
    case "k_EFrameStatSteamDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatSteamDurationMS;
    case 5:
    case "k_EFrameStatServerDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatServerDurationMS;
    case 6:
    case "k_EFrameStatNetworkDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatNetworkDurationMS;
    case 7:
    case "k_EFrameStatDecodeDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatDecodeDurationMS;
    case 8:
    case "k_EFrameStatDisplayDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatDisplayDurationMS;
    case 9:
    case "k_EFrameStatClientDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatClientDurationMS;
    case 10:
    case "k_EFrameStatFrameDurationMS":
      return EFrameAccumulatedStat.k_EFrameStatFrameDurationMS;
    case 11:
    case "k_EFrameStatInputLatencyMS":
      return EFrameAccumulatedStat.k_EFrameStatInputLatencyMS;
    case 12:
    case "k_EFrameStatGameLatencyMS":
      return EFrameAccumulatedStat.k_EFrameStatGameLatencyMS;
    case 13:
    case "k_EFrameStatRoundTripLatencyMS":
      return EFrameAccumulatedStat.k_EFrameStatRoundTripLatencyMS;
    case 14:
    case "k_EFrameStatPingTimeMS":
      return EFrameAccumulatedStat.k_EFrameStatPingTimeMS;
    case 15:
    case "k_EFrameStatServerBitrateKbitPerSec":
      return EFrameAccumulatedStat.k_EFrameStatServerBitrateKbitPerSec;
    case 16:
    case "k_EFrameStatClientBitrateKbitPerSec":
      return EFrameAccumulatedStat.k_EFrameStatClientBitrateKbitPerSec;
    case 17:
    case "k_EFrameStatLinkBandwidthKbitPerSec":
      return EFrameAccumulatedStat.k_EFrameStatLinkBandwidthKbitPerSec;
    case 18:
    case "k_EFrameStatPacketLossPercentage":
      return EFrameAccumulatedStat.k_EFrameStatPacketLossPercentage;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EFrameAccumulatedStat.UNRECOGNIZED;
  }
}

export function eFrameAccumulatedStatToJSON(object: EFrameAccumulatedStat): string {
  switch (object) {
    case EFrameAccumulatedStat.k_EFrameStatFPS:
      return "k_EFrameStatFPS";
    case EFrameAccumulatedStat.k_EFrameStatCaptureDurationMS:
      return "k_EFrameStatCaptureDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatConvertDurationMS:
      return "k_EFrameStatConvertDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatEncodeDurationMS:
      return "k_EFrameStatEncodeDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatSteamDurationMS:
      return "k_EFrameStatSteamDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatServerDurationMS:
      return "k_EFrameStatServerDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatNetworkDurationMS:
      return "k_EFrameStatNetworkDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatDecodeDurationMS:
      return "k_EFrameStatDecodeDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatDisplayDurationMS:
      return "k_EFrameStatDisplayDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatClientDurationMS:
      return "k_EFrameStatClientDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatFrameDurationMS:
      return "k_EFrameStatFrameDurationMS";
    case EFrameAccumulatedStat.k_EFrameStatInputLatencyMS:
      return "k_EFrameStatInputLatencyMS";
    case EFrameAccumulatedStat.k_EFrameStatGameLatencyMS:
      return "k_EFrameStatGameLatencyMS";
    case EFrameAccumulatedStat.k_EFrameStatRoundTripLatencyMS:
      return "k_EFrameStatRoundTripLatencyMS";
    case EFrameAccumulatedStat.k_EFrameStatPingTimeMS:
      return "k_EFrameStatPingTimeMS";
    case EFrameAccumulatedStat.k_EFrameStatServerBitrateKbitPerSec:
      return "k_EFrameStatServerBitrateKbitPerSec";
    case EFrameAccumulatedStat.k_EFrameStatClientBitrateKbitPerSec:
      return "k_EFrameStatClientBitrateKbitPerSec";
    case EFrameAccumulatedStat.k_EFrameStatLinkBandwidthKbitPerSec:
      return "k_EFrameStatLinkBandwidthKbitPerSec";
    case EFrameAccumulatedStat.k_EFrameStatPacketLossPercentage:
      return "k_EFrameStatPacketLossPercentage";
    case EFrameAccumulatedStat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ELogFileType {
  k_ELogFileSystemBoot = 0,
  k_ELogFileSystemReset = 1,
  k_ELogFileSystemDebug = 2,
  UNRECOGNIZED = -1,
}

export function eLogFileTypeFromJSON(object: any): ELogFileType {
  switch (object) {
    case 0:
    case "k_ELogFileSystemBoot":
      return ELogFileType.k_ELogFileSystemBoot;
    case 1:
    case "k_ELogFileSystemReset":
      return ELogFileType.k_ELogFileSystemReset;
    case 2:
    case "k_ELogFileSystemDebug":
      return ELogFileType.k_ELogFileSystemDebug;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ELogFileType.UNRECOGNIZED;
  }
}

export function eLogFileTypeToJSON(object: ELogFileType): string {
  switch (object) {
    case ELogFileType.k_ELogFileSystemBoot:
      return "k_ELogFileSystemBoot";
    case ELogFileType.k_ELogFileSystemReset:
      return "k_ELogFileSystemReset";
    case ELogFileType.k_ELogFileSystemDebug:
      return "k_ELogFileSystemDebug";
    case ELogFileType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStreamControllerConfigMsg {
  k_EStreamControllerConfigMsg_RequestConfigsForApp = 0,
  k_EStreamControllerConfigMsg_ConfigResponse = 1,
  k_EStreamControllerConfigMsg_PersonalizationResponse = 2,
  k_EStreamControllerConfigMsg_ActiveConfigChange = 3,
  k_EStreamControllerConfigMsg_RequestActiveConfig = 4,
  UNRECOGNIZED = -1,
}

export function eStreamControllerConfigMsgFromJSON(object: any): EStreamControllerConfigMsg {
  switch (object) {
    case 0:
    case "k_EStreamControllerConfigMsg_RequestConfigsForApp":
      return EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_RequestConfigsForApp;
    case 1:
    case "k_EStreamControllerConfigMsg_ConfigResponse":
      return EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_ConfigResponse;
    case 2:
    case "k_EStreamControllerConfigMsg_PersonalizationResponse":
      return EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_PersonalizationResponse;
    case 3:
    case "k_EStreamControllerConfigMsg_ActiveConfigChange":
      return EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_ActiveConfigChange;
    case 4:
    case "k_EStreamControllerConfigMsg_RequestActiveConfig":
      return EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_RequestActiveConfig;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStreamControllerConfigMsg.UNRECOGNIZED;
  }
}

export function eStreamControllerConfigMsgToJSON(object: EStreamControllerConfigMsg): string {
  switch (object) {
    case EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_RequestConfigsForApp:
      return "k_EStreamControllerConfigMsg_RequestConfigsForApp";
    case EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_ConfigResponse:
      return "k_EStreamControllerConfigMsg_ConfigResponse";
    case EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_PersonalizationResponse:
      return "k_EStreamControllerConfigMsg_PersonalizationResponse";
    case EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_ActiveConfigChange:
      return "k_EStreamControllerConfigMsg_ActiveConfigChange";
    case EStreamControllerConfigMsg.k_EStreamControllerConfigMsg_RequestActiveConfig:
      return "k_EStreamControllerConfigMsg_RequestActiveConfig";
    case EStreamControllerConfigMsg.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CDiscoveryPingRequest {
  sequence: number;
  packetSizeRequested: number;
}

export interface CDiscoveryPingResponse {
  sequence: number;
  packetSizeReceived: number;
}

export interface CStreamingClientHandshakeInfo {
  networkTest: number;
}

export interface CClientHandshakeMsg {
  info: CStreamingClientHandshakeInfo | undefined;
}

export interface CStreamingServerHandshakeInfo {
  mtu: number;
}

export interface CServerHandshakeMsg {
  info: CStreamingServerHandshakeInfo | undefined;
}

export interface CAuthenticationRequestMsg {
  token: Buffer;
  version: EStreamVersion;
  steamid: string;
}

export interface CAuthenticationResponseMsg {
  result: CAuthenticationResponseMsg_AuthenticationResult;
  version: EStreamVersion;
}

export enum CAuthenticationResponseMsg_AuthenticationResult {
  SUCCEEDED = 0,
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function cAuthenticationResponseMsg_AuthenticationResultFromJSON(
  object: any,
): CAuthenticationResponseMsg_AuthenticationResult {
  switch (object) {
    case 0:
    case "SUCCEEDED":
      return CAuthenticationResponseMsg_AuthenticationResult.SUCCEEDED;
    case 1:
    case "FAILED":
      return CAuthenticationResponseMsg_AuthenticationResult.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CAuthenticationResponseMsg_AuthenticationResult.UNRECOGNIZED;
  }
}

export function cAuthenticationResponseMsg_AuthenticationResultToJSON(
  object: CAuthenticationResponseMsg_AuthenticationResult,
): string {
  switch (object) {
    case CAuthenticationResponseMsg_AuthenticationResult.SUCCEEDED:
      return "SUCCEEDED";
    case CAuthenticationResponseMsg_AuthenticationResult.FAILED:
      return "FAILED";
    case CAuthenticationResponseMsg_AuthenticationResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CKeepAliveMsg {
}

export interface CStartNetworkTestMsg {
  frames: number;
  framerate: number;
  bitrateKbps: number;
  burstBitrateKbps: number;
  bandwidthTest: boolean;
}

export interface CStreamVideoMode {
  width: number;
  height: number;
  refreshRate: number;
  refreshRateNumerator: number;
  refreshRateDenominator: number;
}

export interface CStreamingClientCaps {
  systemInfo: string;
  systemCanSuspend: boolean;
  maximumDecodeBitrateKbps: number;
  maximumBurstBitrateKbps: number;
  supportsVideoHevc: boolean;
  disableSteamStore: boolean;
  disableClientCursor: boolean;
  disableIntelHardwareEncoding: boolean;
  disableAmdHardwareEncoding: boolean;
  disableNvidiaHardwareEncoding: boolean;
  formFactor: number;
  hasOnScreenKeyboard: boolean;
  supportedColorspaces: EStreamColorspace[];
}

export interface CStreamingClientConfig {
  quality: EStreamQualityPreference;
  maximumResolutionX: number;
  maximumResolutionY: number;
  maximumFramerateNumerator: number;
  maximumFramerateDenominator: number;
  maximumBitrateKbps: number;
  enableHardwareDecoding: boolean;
  enablePerformanceOverlay: boolean;
  enableVideoStreaming: boolean;
  enableAudioStreaming: boolean;
  enableInputStreaming: boolean;
  audioChannels: number;
  enableVideoHevc: boolean;
  enablePerformanceIcons: boolean;
  enableMicrophoneStreaming: boolean;
  controllerOverlayHotkey: string;
  enableTouchControllerOBSOLETE: boolean;
  p2pScope: EStreamP2PScope;
  enableAudioUncompressed: boolean;
}

export interface CStreamingServerConfig {
  changeDesktopResolution: boolean;
  dynamicallyAdjustResolution: boolean;
  enableCaptureNvfbc: boolean;
  enableHardwareEncodingNvidia: boolean;
  enableHardwareEncodingAmd: boolean;
  enableHardwareEncodingIntel: boolean;
  softwareEncodingThreads: number;
  enableTrafficPriority: boolean;
  hostPlayAudio: EStreamHostPlayAudioPreference;
}

export interface CNegotiatedConfig {
  reliableData: boolean;
  selectedAudioCodec: EStreamAudioCodec;
  selectedVideoCodec: EStreamVideoCodec;
  availableVideoModes: CStreamVideoMode[];
  enableRemoteHid: boolean;
  enableTouchInput: boolean;
  disableClientCursor: boolean;
}

export interface CNegotiationInitMsg {
  reliableData: boolean;
  supportedAudioCodecs: EStreamAudioCodec[];
  supportedVideoCodecs: EStreamVideoCodec[];
  supportsRemoteHid: boolean;
  supportsTouchInput: boolean;
}

export interface CNegotiationSetConfigMsg {
  config: CNegotiatedConfig | undefined;
  streamingClientConfig: CStreamingClientConfig | undefined;
  streamingClientCaps: CStreamingClientCaps | undefined;
}

export interface CNegotiationCompleteMsg {
}

export interface CStartAudioDataMsg {
  channel: number;
  codec: EStreamAudioCodec;
  codecData: Buffer;
  frequency: number;
  channels: number;
}

export interface CStopAudioDataMsg {
}

export interface CStartVideoDataMsg {
  channel: number;
  codec: EStreamVideoCodec;
  codecData: Buffer;
  width: number;
  height: number;
}

export interface CStopVideoDataMsg {
}

export interface CStartNeptuneDataMsg {
  channel: number;
}

export interface CStopNeptuneDataMsg {
}

export interface CRecordedInput {
  type: EStreamControlMessage;
  timestamp: number;
  fingerDown?: CInputTouchFingerDownMsg | undefined;
  fingerMotion?: CInputTouchFingerMotionMsg | undefined;
  fingerUp?: CInputTouchFingerUpMsg | undefined;
  mouseMotion?: CInputMouseMotionMsg | undefined;
  mouseWheel?: CInputMouseWheelMsg | undefined;
  mouseDown?: CInputMouseDownMsg | undefined;
  mouseUp?: CInputMouseUpMsg | undefined;
  keyDown?: CInputKeyDownMsg | undefined;
  keyUp?: CInputKeyUpMsg | undefined;
  text?: CInputTextMsg | undefined;
  hid?: CRemoteHIDMsg | undefined;
}

export interface CRecordedInputStream {
  entries: CRecordedInput[];
}

export interface CInputLatencyTestMsg {
  inputMark: number;
  color: number;
}

export interface CInputTouchFingerDownMsg {
  inputMark: number;
  fingerid: string;
  xNormalized: number;
  yNormalized: number;
}

export interface CInputTouchFingerMotionMsg {
  inputMark: number;
  fingerid: string;
  xNormalized: number;
  yNormalized: number;
}

export interface CInputTouchFingerUpMsg {
  inputMark: number;
  fingerid: string;
  xNormalized: number;
  yNormalized: number;
}

export interface CInputMouseMotionMsg {
  inputMark: number;
  xNormalized: number;
  yNormalized: number;
  dx: number;
  dy: number;
}

export interface CInputMouseWheelMsg {
  inputMark: number;
  direction: EStreamMouseWheelDirection;
}

export interface CInputMouseDownMsg {
  inputMark: number;
  button: EStreamMouseButton;
}

export interface CInputMouseUpMsg {
  inputMark: number;
  button: EStreamMouseButton;
}

export interface CInputKeyDownMsg {
  inputMark: number;
  scancode: number;
}

export interface CInputKeyUpMsg {
  inputMark: number;
  scancode: number;
}

export interface CInputTextMsg {
  inputMark: number;
  textUtf8: string;
}

export interface CSetTitleMsg {
  text: string;
}

export interface CSetCaptureSizeMsg {
  width: number;
  height: number;
}

export interface CSetIconMsg {
  width: number;
  height: number;
  image: Buffer;
}

export interface CSetFlashStateMsg {
  flags: number;
  count: number;
  timeoutMs: number;
}

export interface CShowCursorMsg {
  xNormalized: number;
  yNormalized: number;
}

export interface CHideCursorMsg {
}

export interface CSetCursorMsg {
  cursorId: string;
}

export interface CGetCursorImageMsg {
  cursorId: string;
}

export interface CSetCursorImageMsg {
  cursorId: string;
  width: number;
  height: number;
  hotX: number;
  hotY: number;
  image: Buffer;
}

export interface CVideoDecoderInfoMsg {
  info: string;
  threads: number;
}

export interface CVideoEncoderInfoMsg {
  info: string;
}

export interface CPauseMsg {
}

export interface CResumeMsg {
}

export interface CEnableHighResCaptureMsg {
}

export interface CDisableHighResCaptureMsg {
}

export interface CEnableNeptuneDataMsg {
}

export interface CDisableNeptuneDataMsg {
}

export interface CToggleMagnificationMsg {
}

export interface CSetCapslockMsg {
  pressed: boolean;
}

export interface CStreamingKeymapEntry {
  scancode: number;
  normalKeycode: number;
  shiftKeycode: number;
  capslockKeycode: number;
  shiftCapslockKeycode: number;
  altgrKeycode: number;
  altgrShiftKeycode: number;
  altgrCapslockKeycode: number;
  altgrShiftCapslockKeycode: number;
}

export interface CStreamingKeymap {
  entries: CStreamingKeymapEntry[];
}

export interface CSetKeymapMsg {
  keymap: CStreamingKeymap | undefined;
}

export interface CStopRequest {
}

export interface CQuitRequest {
}

export interface CDeleteCursorMsg {
  cursorId: string;
}

export interface CSetStreamingClientConfig {
  config: CStreamingClientConfig | undefined;
}

export interface CSetQoSMsg {
  useQos: boolean;
}

export interface CSetTargetFramerateMsg {
  framerate: number;
  reasons: number;
  framerateNumerator: number;
  framerateDenominator: number;
}

export interface CSetTargetBitrateMsg {
  bitrate: number;
}

export interface COverlayEnabledMsg {
  enabled: boolean;
}

export interface CSetGammaRampMsg {
  gammaRamp: Buffer;
}

export interface CSetActivityMsg {
  activity: EStreamActivity;
  appid: number;
  gameid: string;
  gameName: string;
}

export interface CSystemSuspendMsg {
}

export interface CVirtualHereRequestMsg {
  hostname: string;
}

export interface CVirtualHereReadyMsg {
  licensedDeviceCount: number;
}

export interface CVirtualHereShareDeviceMsg {
  deviceAddress: string;
}

export interface CSetSpectatorModeMsg {
  enabled: boolean;
}

export interface CRemoteHIDMsg {
  data: Buffer;
  activeInput: boolean;
}

export interface CTouchConfigActiveMsg {
  appid: number;
  revision: number;
  creator: string;
}

export interface CGetTouchConfigDataMsg {
  appid: number;
}

export interface CSetTouchConfigDataMsg {
  appid: number;
  revision: number;
  data: Buffer;
  layout: Buffer;
  creator: string;
}

export interface CSaveTouchConfigLayoutMsg {
  appid: number;
  layout: Buffer;
}

export interface CTouchActionSetActiveMsg {
  appid: number;
  actionsetId: number;
}

export interface CTouchActionSetLayerAddedMsg {
  appid: number;
  actionsetId: number;
}

export interface CTouchActionSetLayerRemovedMsg {
  appid: number;
  actionsetId: number;
}

export interface CGetTouchIconDataMsg {
  appid: number;
  icon: string;
}

export interface CSetTouchIconDataMsg {
  appid: number;
  icon: string;
  data: Buffer;
}

export interface CRemotePlayTogetherGroupUpdateMsg {
  players: CRemotePlayTogetherGroupUpdateMsg_Player[];
  playerIndex: number;
  miniprofileLocation: string;
  gameName: string;
  avatarLocation: string;
}

export interface CRemotePlayTogetherGroupUpdateMsg_Player {
  accountid: number;
  guestid: number;
  keyboardEnabled: boolean;
  mouseEnabled: boolean;
  controllerEnabled: boolean;
  controllerSlots: number[];
  avatarHash: Buffer;
}

export interface CSetInputTemporarilyDisabledMsg {
  disabled: boolean;
}

export interface CSetQualityOverrideMsg {
  value: number;
}

export interface CSetBitrateOverrideMsg {
  value: number;
}

export interface CShowOnScreenKeyboardMsg {
}

export interface CControllerPersonalizationUpdateMsg {
  controllerPath: string;
  controllerName: string;
  reverseDiamondButtonLayout: boolean;
}

export interface CStreamDataLostMsg {
  packets: number[];
}

export interface CAudioFormat {
  format: EAudioFormat;
  frequency: number;
  channels: number;
}

export interface CVideoFormat {
  format: EVideoFormat;
  width: number;
  height: number;
}

export interface CFrameEvent {
  eventId: EStreamFrameEvent;
  timestamp: number;
}

export interface CFrameStats {
  frameId: number;
  inputMark: number;
  events: CFrameEvent[];
  result: EStreamFrameResult;
  frameStartDelta: number;
  frameDisplayDelta: number;
  pingTime: number;
  serverBitrate: number;
  clientBitrate: number;
  linkBandwidth: number;
  packetLoss: number;
  frameSize: number;
}

export interface CFrameStatAccumulatedValue {
  statType: EFrameAccumulatedStat;
  count: number;
  average: number;
  stddev: number;
}

export interface CFrameStatsListMsg {
  dataType: EStreamingDataType;
  stats: CFrameStats[];
  accumulatedStats: CFrameStatAccumulatedValue[];
  latestFrameId: number;
}

export interface CStreamingSessionStats {
  frameLossPercentage: number;
  averageNetworkTimeMs: number;
  stddevNetworkTimeMs: number;
}

export interface CDebugDumpMsg {
  screenshot: Buffer;
}

export interface CLogMsg {
  type: number;
  message: string;
}

export interface CLogUploadMsg {
  type: ELogFileType;
  data: Buffer;
}

export interface CTransportSignalMsg {
  webrtc: CTransportSignalMsg_WebRTCMessage | undefined;
  sdr: Buffer[];
}

export interface CTransportSignalMsg_WebRTCMessage {
  greeting?: boolean | undefined;
  offer?: string | undefined;
  answer?: string | undefined;
  candidate?: CTransportSignalMsg_WebRTCMessage_Candidate | undefined;
}

export interface CTransportSignalMsg_WebRTCMessage_Candidate {
  sdpMid: string;
  sdpMlineIndex: number;
  candidate: string;
}

export interface CControllerConfigMsg {
  type: EStreamControllerConfigMsg;
  controllerPath: string;
  appid: number;
  personalizationResponse: CControllerConfigMsg_ControllerPersonalizationResponse | undefined;
  configResponse: CControllerConfigMsg_ControllerConfigResponse[];
  activeConfigChangeMsg: CControllerConfigMsg_ControllerActiveConfigMsg | undefined;
}

export interface CControllerConfigMsg_ControllerConfigResponse {
  appid: number;
  configURL: string;
  controllerType: number;
  controllerData: string;
  selectionOrder: number;
  actionBlock: boolean;
}

export interface CControllerConfigMsg_ControllerPersonalizationResponse {
  personalizationData: string;
}

export interface CControllerConfigMsg_ControllerActiveConfigChangeResponse {
  configURL: string;
  controllerType: number;
  controllerData: string;
  selectionOrder: number;
}

export interface CControllerConfigMsg_ControllerActiveConfigMsg {
  appid: number;
  configURL: string;
  controllerType: number;
  controllerData: string;
}

function createBaseCDiscoveryPingRequest(): CDiscoveryPingRequest {
  return { sequence: 0, packetSizeRequested: 0 };
}

export const CDiscoveryPingRequest = {
  encode(message: CDiscoveryPingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint32(message.sequence);
    }
    if (message.packetSizeRequested !== 0) {
      writer.uint32(16).uint32(message.packetSizeRequested);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDiscoveryPingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDiscoveryPingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint32();
          break;
        case 2:
          message.packetSizeRequested = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDiscoveryPingRequest {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      packetSizeRequested: isSet(object.packetSizeRequested) ? Number(object.packetSizeRequested) : 0,
    };
  },

  toJSON(message: CDiscoveryPingRequest): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    message.packetSizeRequested !== undefined && (obj.packetSizeRequested = Math.round(message.packetSizeRequested));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDiscoveryPingRequest>, I>>(base?: I): CDiscoveryPingRequest {
    return CDiscoveryPingRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDiscoveryPingRequest>, I>>(object: I): CDiscoveryPingRequest {
    const message = createBaseCDiscoveryPingRequest();
    message.sequence = object.sequence ?? 0;
    message.packetSizeRequested = object.packetSizeRequested ?? 0;
    return message;
  },
};

function createBaseCDiscoveryPingResponse(): CDiscoveryPingResponse {
  return { sequence: 0, packetSizeReceived: 0 };
}

export const CDiscoveryPingResponse = {
  encode(message: CDiscoveryPingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint32(message.sequence);
    }
    if (message.packetSizeReceived !== 0) {
      writer.uint32(16).uint32(message.packetSizeReceived);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDiscoveryPingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDiscoveryPingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint32();
          break;
        case 2:
          message.packetSizeReceived = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDiscoveryPingResponse {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      packetSizeReceived: isSet(object.packetSizeReceived) ? Number(object.packetSizeReceived) : 0,
    };
  },

  toJSON(message: CDiscoveryPingResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = Math.round(message.sequence));
    message.packetSizeReceived !== undefined && (obj.packetSizeReceived = Math.round(message.packetSizeReceived));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDiscoveryPingResponse>, I>>(base?: I): CDiscoveryPingResponse {
    return CDiscoveryPingResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDiscoveryPingResponse>, I>>(object: I): CDiscoveryPingResponse {
    const message = createBaseCDiscoveryPingResponse();
    message.sequence = object.sequence ?? 0;
    message.packetSizeReceived = object.packetSizeReceived ?? 0;
    return message;
  },
};

function createBaseCStreamingClientHandshakeInfo(): CStreamingClientHandshakeInfo {
  return { networkTest: 0 };
}

export const CStreamingClientHandshakeInfo = {
  encode(message: CStreamingClientHandshakeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.networkTest !== 0) {
      writer.uint32(16).int32(message.networkTest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingClientHandshakeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingClientHandshakeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.networkTest = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingClientHandshakeInfo {
    return { networkTest: isSet(object.networkTest) ? Number(object.networkTest) : 0 };
  },

  toJSON(message: CStreamingClientHandshakeInfo): unknown {
    const obj: any = {};
    message.networkTest !== undefined && (obj.networkTest = Math.round(message.networkTest));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingClientHandshakeInfo>, I>>(base?: I): CStreamingClientHandshakeInfo {
    return CStreamingClientHandshakeInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingClientHandshakeInfo>, I>>(
    object: I,
  ): CStreamingClientHandshakeInfo {
    const message = createBaseCStreamingClientHandshakeInfo();
    message.networkTest = object.networkTest ?? 0;
    return message;
  },
};

function createBaseCClientHandshakeMsg(): CClientHandshakeMsg {
  return { info: undefined };
}

export const CClientHandshakeMsg = {
  encode(message: CClientHandshakeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      CStreamingClientHandshakeInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClientHandshakeMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClientHandshakeMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = CStreamingClientHandshakeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClientHandshakeMsg {
    return { info: isSet(object.info) ? CStreamingClientHandshakeInfo.fromJSON(object.info) : undefined };
  },

  toJSON(message: CClientHandshakeMsg): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? CStreamingClientHandshakeInfo.toJSON(message.info) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClientHandshakeMsg>, I>>(base?: I): CClientHandshakeMsg {
    return CClientHandshakeMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClientHandshakeMsg>, I>>(object: I): CClientHandshakeMsg {
    const message = createBaseCClientHandshakeMsg();
    message.info = (object.info !== undefined && object.info !== null)
      ? CStreamingClientHandshakeInfo.fromPartial(object.info)
      : undefined;
    return message;
  },
};

function createBaseCStreamingServerHandshakeInfo(): CStreamingServerHandshakeInfo {
  return { mtu: 0 };
}

export const CStreamingServerHandshakeInfo = {
  encode(message: CStreamingServerHandshakeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mtu !== 0) {
      writer.uint32(8).int32(message.mtu);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingServerHandshakeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingServerHandshakeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mtu = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingServerHandshakeInfo {
    return { mtu: isSet(object.mtu) ? Number(object.mtu) : 0 };
  },

  toJSON(message: CStreamingServerHandshakeInfo): unknown {
    const obj: any = {};
    message.mtu !== undefined && (obj.mtu = Math.round(message.mtu));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingServerHandshakeInfo>, I>>(base?: I): CStreamingServerHandshakeInfo {
    return CStreamingServerHandshakeInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingServerHandshakeInfo>, I>>(
    object: I,
  ): CStreamingServerHandshakeInfo {
    const message = createBaseCStreamingServerHandshakeInfo();
    message.mtu = object.mtu ?? 0;
    return message;
  },
};

function createBaseCServerHandshakeMsg(): CServerHandshakeMsg {
  return { info: undefined };
}

export const CServerHandshakeMsg = {
  encode(message: CServerHandshakeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      CStreamingServerHandshakeInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CServerHandshakeMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCServerHandshakeMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = CStreamingServerHandshakeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CServerHandshakeMsg {
    return { info: isSet(object.info) ? CStreamingServerHandshakeInfo.fromJSON(object.info) : undefined };
  },

  toJSON(message: CServerHandshakeMsg): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? CStreamingServerHandshakeInfo.toJSON(message.info) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CServerHandshakeMsg>, I>>(base?: I): CServerHandshakeMsg {
    return CServerHandshakeMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CServerHandshakeMsg>, I>>(object: I): CServerHandshakeMsg {
    const message = createBaseCServerHandshakeMsg();
    message.info = (object.info !== undefined && object.info !== null)
      ? CStreamingServerHandshakeInfo.fromPartial(object.info)
      : undefined;
    return message;
  },
};

function createBaseCAuthenticationRequestMsg(): CAuthenticationRequestMsg {
  return { token: Buffer.alloc(0), version: 0, steamid: "0" };
}

export const CAuthenticationRequestMsg = {
  encode(message: CAuthenticationRequestMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token.length !== 0) {
      writer.uint32(10).bytes(message.token);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    if (message.steamid !== "0") {
      writer.uint32(24).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationRequestMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationRequestMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.bytes() as Buffer;
          break;
        case 2:
          message.version = reader.int32() as any;
          break;
        case 3:
          message.steamid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationRequestMsg {
    return {
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      version: isSet(object.version) ? eStreamVersionFromJSON(object.version) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
    };
  },

  toJSON(message: CAuthenticationRequestMsg): unknown {
    const obj: any = {};
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.version !== undefined && (obj.version = eStreamVersionToJSON(message.version));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationRequestMsg>, I>>(base?: I): CAuthenticationRequestMsg {
    return CAuthenticationRequestMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationRequestMsg>, I>>(object: I): CAuthenticationRequestMsg {
    const message = createBaseCAuthenticationRequestMsg();
    message.token = object.token ?? Buffer.alloc(0);
    message.version = object.version ?? 0;
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCAuthenticationResponseMsg(): CAuthenticationResponseMsg {
  return { result: 0, version: 0 };
}

export const CAuthenticationResponseMsg = {
  encode(message: CAuthenticationResponseMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAuthenticationResponseMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAuthenticationResponseMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          message.version = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAuthenticationResponseMsg {
    return {
      result: isSet(object.result) ? cAuthenticationResponseMsg_AuthenticationResultFromJSON(object.result) : 0,
      version: isSet(object.version) ? eStreamVersionFromJSON(object.version) : 0,
    };
  },

  toJSON(message: CAuthenticationResponseMsg): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = cAuthenticationResponseMsg_AuthenticationResultToJSON(message.result));
    message.version !== undefined && (obj.version = eStreamVersionToJSON(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAuthenticationResponseMsg>, I>>(base?: I): CAuthenticationResponseMsg {
    return CAuthenticationResponseMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAuthenticationResponseMsg>, I>>(object: I): CAuthenticationResponseMsg {
    const message = createBaseCAuthenticationResponseMsg();
    message.result = object.result ?? 0;
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCKeepAliveMsg(): CKeepAliveMsg {
  return {};
}

export const CKeepAliveMsg = {
  encode(_: CKeepAliveMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CKeepAliveMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCKeepAliveMsg();
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

  fromJSON(_: any): CKeepAliveMsg {
    return {};
  },

  toJSON(_: CKeepAliveMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CKeepAliveMsg>, I>>(base?: I): CKeepAliveMsg {
    return CKeepAliveMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CKeepAliveMsg>, I>>(_: I): CKeepAliveMsg {
    const message = createBaseCKeepAliveMsg();
    return message;
  },
};

function createBaseCStartNetworkTestMsg(): CStartNetworkTestMsg {
  return { frames: 0, framerate: 0, bitrateKbps: 0, burstBitrateKbps: 0, bandwidthTest: false };
}

export const CStartNetworkTestMsg = {
  encode(message: CStartNetworkTestMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frames !== 0) {
      writer.uint32(8).uint32(message.frames);
    }
    if (message.framerate !== 0) {
      writer.uint32(16).uint32(message.framerate);
    }
    if (message.bitrateKbps !== 0) {
      writer.uint32(24).uint32(message.bitrateKbps);
    }
    if (message.burstBitrateKbps !== 0) {
      writer.uint32(32).uint32(message.burstBitrateKbps);
    }
    if (message.bandwidthTest === true) {
      writer.uint32(40).bool(message.bandwidthTest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStartNetworkTestMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStartNetworkTestMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frames = reader.uint32();
          break;
        case 2:
          message.framerate = reader.uint32();
          break;
        case 3:
          message.bitrateKbps = reader.uint32();
          break;
        case 4:
          message.burstBitrateKbps = reader.uint32();
          break;
        case 5:
          message.bandwidthTest = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStartNetworkTestMsg {
    return {
      frames: isSet(object.frames) ? Number(object.frames) : 0,
      framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
      bitrateKbps: isSet(object.bitrateKbps) ? Number(object.bitrateKbps) : 0,
      burstBitrateKbps: isSet(object.burstBitrateKbps) ? Number(object.burstBitrateKbps) : 0,
      bandwidthTest: isSet(object.bandwidthTest) ? Boolean(object.bandwidthTest) : false,
    };
  },

  toJSON(message: CStartNetworkTestMsg): unknown {
    const obj: any = {};
    message.frames !== undefined && (obj.frames = Math.round(message.frames));
    message.framerate !== undefined && (obj.framerate = Math.round(message.framerate));
    message.bitrateKbps !== undefined && (obj.bitrateKbps = Math.round(message.bitrateKbps));
    message.burstBitrateKbps !== undefined && (obj.burstBitrateKbps = Math.round(message.burstBitrateKbps));
    message.bandwidthTest !== undefined && (obj.bandwidthTest = message.bandwidthTest);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStartNetworkTestMsg>, I>>(base?: I): CStartNetworkTestMsg {
    return CStartNetworkTestMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStartNetworkTestMsg>, I>>(object: I): CStartNetworkTestMsg {
    const message = createBaseCStartNetworkTestMsg();
    message.frames = object.frames ?? 0;
    message.framerate = object.framerate ?? 0;
    message.bitrateKbps = object.bitrateKbps ?? 0;
    message.burstBitrateKbps = object.burstBitrateKbps ?? 0;
    message.bandwidthTest = object.bandwidthTest ?? false;
    return message;
  },
};

function createBaseCStreamVideoMode(): CStreamVideoMode {
  return { width: 0, height: 0, refreshRate: 0, refreshRateNumerator: 0, refreshRateDenominator: 0 };
}

export const CStreamVideoMode = {
  encode(message: CStreamVideoMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    if (message.refreshRate !== 0) {
      writer.uint32(24).uint32(message.refreshRate);
    }
    if (message.refreshRateNumerator !== 0) {
      writer.uint32(32).uint32(message.refreshRateNumerator);
    }
    if (message.refreshRateDenominator !== 0) {
      writer.uint32(40).uint32(message.refreshRateDenominator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamVideoMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamVideoMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.uint32();
          break;
        case 2:
          message.height = reader.uint32();
          break;
        case 3:
          message.refreshRate = reader.uint32();
          break;
        case 4:
          message.refreshRateNumerator = reader.uint32();
          break;
        case 5:
          message.refreshRateDenominator = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamVideoMode {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      refreshRate: isSet(object.refreshRate) ? Number(object.refreshRate) : 0,
      refreshRateNumerator: isSet(object.refreshRateNumerator) ? Number(object.refreshRateNumerator) : 0,
      refreshRateDenominator: isSet(object.refreshRateDenominator) ? Number(object.refreshRateDenominator) : 0,
    };
  },

  toJSON(message: CStreamVideoMode): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.refreshRate !== undefined && (obj.refreshRate = Math.round(message.refreshRate));
    message.refreshRateNumerator !== undefined && (obj.refreshRateNumerator = Math.round(message.refreshRateNumerator));
    message.refreshRateDenominator !== undefined &&
      (obj.refreshRateDenominator = Math.round(message.refreshRateDenominator));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamVideoMode>, I>>(base?: I): CStreamVideoMode {
    return CStreamVideoMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamVideoMode>, I>>(object: I): CStreamVideoMode {
    const message = createBaseCStreamVideoMode();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.refreshRate = object.refreshRate ?? 0;
    message.refreshRateNumerator = object.refreshRateNumerator ?? 0;
    message.refreshRateDenominator = object.refreshRateDenominator ?? 0;
    return message;
  },
};

function createBaseCStreamingClientCaps(): CStreamingClientCaps {
  return {
    systemInfo: "",
    systemCanSuspend: false,
    maximumDecodeBitrateKbps: 0,
    maximumBurstBitrateKbps: 0,
    supportsVideoHevc: false,
    disableSteamStore: false,
    disableClientCursor: false,
    disableIntelHardwareEncoding: false,
    disableAmdHardwareEncoding: false,
    disableNvidiaHardwareEncoding: false,
    formFactor: 0,
    hasOnScreenKeyboard: false,
    supportedColorspaces: [],
  };
}

export const CStreamingClientCaps = {
  encode(message: CStreamingClientCaps, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.systemInfo !== "") {
      writer.uint32(10).string(message.systemInfo);
    }
    if (message.systemCanSuspend === true) {
      writer.uint32(16).bool(message.systemCanSuspend);
    }
    if (message.maximumDecodeBitrateKbps !== 0) {
      writer.uint32(24).int32(message.maximumDecodeBitrateKbps);
    }
    if (message.maximumBurstBitrateKbps !== 0) {
      writer.uint32(32).int32(message.maximumBurstBitrateKbps);
    }
    if (message.supportsVideoHevc === true) {
      writer.uint32(40).bool(message.supportsVideoHevc);
    }
    if (message.disableSteamStore === true) {
      writer.uint32(48).bool(message.disableSteamStore);
    }
    if (message.disableClientCursor === true) {
      writer.uint32(56).bool(message.disableClientCursor);
    }
    if (message.disableIntelHardwareEncoding === true) {
      writer.uint32(64).bool(message.disableIntelHardwareEncoding);
    }
    if (message.disableAmdHardwareEncoding === true) {
      writer.uint32(72).bool(message.disableAmdHardwareEncoding);
    }
    if (message.disableNvidiaHardwareEncoding === true) {
      writer.uint32(80).bool(message.disableNvidiaHardwareEncoding);
    }
    if (message.formFactor !== 0) {
      writer.uint32(88).int32(message.formFactor);
    }
    if (message.hasOnScreenKeyboard === true) {
      writer.uint32(96).bool(message.hasOnScreenKeyboard);
    }
    writer.uint32(106).fork();
    for (const v of message.supportedColorspaces) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingClientCaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingClientCaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemInfo = reader.string();
          break;
        case 2:
          message.systemCanSuspend = reader.bool();
          break;
        case 3:
          message.maximumDecodeBitrateKbps = reader.int32();
          break;
        case 4:
          message.maximumBurstBitrateKbps = reader.int32();
          break;
        case 5:
          message.supportsVideoHevc = reader.bool();
          break;
        case 6:
          message.disableSteamStore = reader.bool();
          break;
        case 7:
          message.disableClientCursor = reader.bool();
          break;
        case 8:
          message.disableIntelHardwareEncoding = reader.bool();
          break;
        case 9:
          message.disableAmdHardwareEncoding = reader.bool();
          break;
        case 10:
          message.disableNvidiaHardwareEncoding = reader.bool();
          break;
        case 11:
          message.formFactor = reader.int32();
          break;
        case 12:
          message.hasOnScreenKeyboard = reader.bool();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedColorspaces.push(reader.int32() as any);
            }
          } else {
            message.supportedColorspaces.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingClientCaps {
    return {
      systemInfo: isSet(object.systemInfo) ? String(object.systemInfo) : "",
      systemCanSuspend: isSet(object.systemCanSuspend) ? Boolean(object.systemCanSuspend) : false,
      maximumDecodeBitrateKbps: isSet(object.maximumDecodeBitrateKbps) ? Number(object.maximumDecodeBitrateKbps) : 0,
      maximumBurstBitrateKbps: isSet(object.maximumBurstBitrateKbps) ? Number(object.maximumBurstBitrateKbps) : 0,
      supportsVideoHevc: isSet(object.supportsVideoHevc) ? Boolean(object.supportsVideoHevc) : false,
      disableSteamStore: isSet(object.disableSteamStore) ? Boolean(object.disableSteamStore) : false,
      disableClientCursor: isSet(object.disableClientCursor) ? Boolean(object.disableClientCursor) : false,
      disableIntelHardwareEncoding: isSet(object.disableIntelHardwareEncoding)
        ? Boolean(object.disableIntelHardwareEncoding)
        : false,
      disableAmdHardwareEncoding: isSet(object.disableAmdHardwareEncoding)
        ? Boolean(object.disableAmdHardwareEncoding)
        : false,
      disableNvidiaHardwareEncoding: isSet(object.disableNvidiaHardwareEncoding)
        ? Boolean(object.disableNvidiaHardwareEncoding)
        : false,
      formFactor: isSet(object.formFactor) ? Number(object.formFactor) : 0,
      hasOnScreenKeyboard: isSet(object.hasOnScreenKeyboard) ? Boolean(object.hasOnScreenKeyboard) : false,
      supportedColorspaces: Array.isArray(object?.supportedColorspaces)
        ? object.supportedColorspaces.map((e: any) => eStreamColorspaceFromJSON(e))
        : [],
    };
  },

  toJSON(message: CStreamingClientCaps): unknown {
    const obj: any = {};
    message.systemInfo !== undefined && (obj.systemInfo = message.systemInfo);
    message.systemCanSuspend !== undefined && (obj.systemCanSuspend = message.systemCanSuspend);
    message.maximumDecodeBitrateKbps !== undefined &&
      (obj.maximumDecodeBitrateKbps = Math.round(message.maximumDecodeBitrateKbps));
    message.maximumBurstBitrateKbps !== undefined &&
      (obj.maximumBurstBitrateKbps = Math.round(message.maximumBurstBitrateKbps));
    message.supportsVideoHevc !== undefined && (obj.supportsVideoHevc = message.supportsVideoHevc);
    message.disableSteamStore !== undefined && (obj.disableSteamStore = message.disableSteamStore);
    message.disableClientCursor !== undefined && (obj.disableClientCursor = message.disableClientCursor);
    message.disableIntelHardwareEncoding !== undefined &&
      (obj.disableIntelHardwareEncoding = message.disableIntelHardwareEncoding);
    message.disableAmdHardwareEncoding !== undefined &&
      (obj.disableAmdHardwareEncoding = message.disableAmdHardwareEncoding);
    message.disableNvidiaHardwareEncoding !== undefined &&
      (obj.disableNvidiaHardwareEncoding = message.disableNvidiaHardwareEncoding);
    message.formFactor !== undefined && (obj.formFactor = Math.round(message.formFactor));
    message.hasOnScreenKeyboard !== undefined && (obj.hasOnScreenKeyboard = message.hasOnScreenKeyboard);
    if (message.supportedColorspaces) {
      obj.supportedColorspaces = message.supportedColorspaces.map((e) => eStreamColorspaceToJSON(e));
    } else {
      obj.supportedColorspaces = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingClientCaps>, I>>(base?: I): CStreamingClientCaps {
    return CStreamingClientCaps.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingClientCaps>, I>>(object: I): CStreamingClientCaps {
    const message = createBaseCStreamingClientCaps();
    message.systemInfo = object.systemInfo ?? "";
    message.systemCanSuspend = object.systemCanSuspend ?? false;
    message.maximumDecodeBitrateKbps = object.maximumDecodeBitrateKbps ?? 0;
    message.maximumBurstBitrateKbps = object.maximumBurstBitrateKbps ?? 0;
    message.supportsVideoHevc = object.supportsVideoHevc ?? false;
    message.disableSteamStore = object.disableSteamStore ?? false;
    message.disableClientCursor = object.disableClientCursor ?? false;
    message.disableIntelHardwareEncoding = object.disableIntelHardwareEncoding ?? false;
    message.disableAmdHardwareEncoding = object.disableAmdHardwareEncoding ?? false;
    message.disableNvidiaHardwareEncoding = object.disableNvidiaHardwareEncoding ?? false;
    message.formFactor = object.formFactor ?? 0;
    message.hasOnScreenKeyboard = object.hasOnScreenKeyboard ?? false;
    message.supportedColorspaces = object.supportedColorspaces?.map((e) => e) || [];
    return message;
  },
};

function createBaseCStreamingClientConfig(): CStreamingClientConfig {
  return {
    quality: -1,
    maximumResolutionX: 0,
    maximumResolutionY: 0,
    maximumFramerateNumerator: 0,
    maximumFramerateDenominator: 0,
    maximumBitrateKbps: 0,
    enableHardwareDecoding: false,
    enablePerformanceOverlay: false,
    enableVideoStreaming: false,
    enableAudioStreaming: false,
    enableInputStreaming: false,
    audioChannels: 0,
    enableVideoHevc: false,
    enablePerformanceIcons: false,
    enableMicrophoneStreaming: false,
    controllerOverlayHotkey: "",
    enableTouchControllerOBSOLETE: false,
    p2pScope: 0,
    enableAudioUncompressed: false,
  };
}

export const CStreamingClientConfig = {
  encode(message: CStreamingClientConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quality !== -1) {
      writer.uint32(8).int32(message.quality);
    }
    if (message.maximumResolutionX !== 0) {
      writer.uint32(16).uint32(message.maximumResolutionX);
    }
    if (message.maximumResolutionY !== 0) {
      writer.uint32(24).uint32(message.maximumResolutionY);
    }
    if (message.maximumFramerateNumerator !== 0) {
      writer.uint32(32).uint32(message.maximumFramerateNumerator);
    }
    if (message.maximumFramerateDenominator !== 0) {
      writer.uint32(40).uint32(message.maximumFramerateDenominator);
    }
    if (message.maximumBitrateKbps !== 0) {
      writer.uint32(48).int32(message.maximumBitrateKbps);
    }
    if (message.enableHardwareDecoding === true) {
      writer.uint32(56).bool(message.enableHardwareDecoding);
    }
    if (message.enablePerformanceOverlay === true) {
      writer.uint32(64).bool(message.enablePerformanceOverlay);
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
    if (message.audioChannels !== 0) {
      writer.uint32(96).int32(message.audioChannels);
    }
    if (message.enableVideoHevc === true) {
      writer.uint32(104).bool(message.enableVideoHevc);
    }
    if (message.enablePerformanceIcons === true) {
      writer.uint32(112).bool(message.enablePerformanceIcons);
    }
    if (message.enableMicrophoneStreaming === true) {
      writer.uint32(120).bool(message.enableMicrophoneStreaming);
    }
    if (message.controllerOverlayHotkey !== "") {
      writer.uint32(130).string(message.controllerOverlayHotkey);
    }
    if (message.enableTouchControllerOBSOLETE === true) {
      writer.uint32(136).bool(message.enableTouchControllerOBSOLETE);
    }
    if (message.p2pScope !== 0) {
      writer.uint32(152).int32(message.p2pScope);
    }
    if (message.enableAudioUncompressed === true) {
      writer.uint32(160).bool(message.enableAudioUncompressed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingClientConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quality = reader.int32() as any;
          break;
        case 2:
          message.maximumResolutionX = reader.uint32();
          break;
        case 3:
          message.maximumResolutionY = reader.uint32();
          break;
        case 4:
          message.maximumFramerateNumerator = reader.uint32();
          break;
        case 5:
          message.maximumFramerateDenominator = reader.uint32();
          break;
        case 6:
          message.maximumBitrateKbps = reader.int32();
          break;
        case 7:
          message.enableHardwareDecoding = reader.bool();
          break;
        case 8:
          message.enablePerformanceOverlay = reader.bool();
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
          message.audioChannels = reader.int32();
          break;
        case 13:
          message.enableVideoHevc = reader.bool();
          break;
        case 14:
          message.enablePerformanceIcons = reader.bool();
          break;
        case 15:
          message.enableMicrophoneStreaming = reader.bool();
          break;
        case 16:
          message.controllerOverlayHotkey = reader.string();
          break;
        case 17:
          message.enableTouchControllerOBSOLETE = reader.bool();
          break;
        case 19:
          message.p2pScope = reader.int32() as any;
          break;
        case 20:
          message.enableAudioUncompressed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingClientConfig {
    return {
      quality: isSet(object.quality) ? eStreamQualityPreferenceFromJSON(object.quality) : -1,
      maximumResolutionX: isSet(object.maximumResolutionX) ? Number(object.maximumResolutionX) : 0,
      maximumResolutionY: isSet(object.maximumResolutionY) ? Number(object.maximumResolutionY) : 0,
      maximumFramerateNumerator: isSet(object.maximumFramerateNumerator) ? Number(object.maximumFramerateNumerator) : 0,
      maximumFramerateDenominator: isSet(object.maximumFramerateDenominator)
        ? Number(object.maximumFramerateDenominator)
        : 0,
      maximumBitrateKbps: isSet(object.maximumBitrateKbps) ? Number(object.maximumBitrateKbps) : 0,
      enableHardwareDecoding: isSet(object.enableHardwareDecoding) ? Boolean(object.enableHardwareDecoding) : false,
      enablePerformanceOverlay: isSet(object.enablePerformanceOverlay)
        ? Boolean(object.enablePerformanceOverlay)
        : false,
      enableVideoStreaming: isSet(object.enableVideoStreaming) ? Boolean(object.enableVideoStreaming) : false,
      enableAudioStreaming: isSet(object.enableAudioStreaming) ? Boolean(object.enableAudioStreaming) : false,
      enableInputStreaming: isSet(object.enableInputStreaming) ? Boolean(object.enableInputStreaming) : false,
      audioChannels: isSet(object.audioChannels) ? Number(object.audioChannels) : 0,
      enableVideoHevc: isSet(object.enableVideoHevc) ? Boolean(object.enableVideoHevc) : false,
      enablePerformanceIcons: isSet(object.enablePerformanceIcons) ? Boolean(object.enablePerformanceIcons) : false,
      enableMicrophoneStreaming: isSet(object.enableMicrophoneStreaming)
        ? Boolean(object.enableMicrophoneStreaming)
        : false,
      controllerOverlayHotkey: isSet(object.controllerOverlayHotkey) ? String(object.controllerOverlayHotkey) : "",
      enableTouchControllerOBSOLETE: isSet(object.enableTouchControllerOBSOLETE)
        ? Boolean(object.enableTouchControllerOBSOLETE)
        : false,
      p2pScope: isSet(object.p2pScope) ? eStreamP2PScopeFromJSON(object.p2pScope) : 0,
      enableAudioUncompressed: isSet(object.enableAudioUncompressed) ? Boolean(object.enableAudioUncompressed) : false,
    };
  },

  toJSON(message: CStreamingClientConfig): unknown {
    const obj: any = {};
    message.quality !== undefined && (obj.quality = eStreamQualityPreferenceToJSON(message.quality));
    message.maximumResolutionX !== undefined && (obj.maximumResolutionX = Math.round(message.maximumResolutionX));
    message.maximumResolutionY !== undefined && (obj.maximumResolutionY = Math.round(message.maximumResolutionY));
    message.maximumFramerateNumerator !== undefined &&
      (obj.maximumFramerateNumerator = Math.round(message.maximumFramerateNumerator));
    message.maximumFramerateDenominator !== undefined &&
      (obj.maximumFramerateDenominator = Math.round(message.maximumFramerateDenominator));
    message.maximumBitrateKbps !== undefined && (obj.maximumBitrateKbps = Math.round(message.maximumBitrateKbps));
    message.enableHardwareDecoding !== undefined && (obj.enableHardwareDecoding = message.enableHardwareDecoding);
    message.enablePerformanceOverlay !== undefined && (obj.enablePerformanceOverlay = message.enablePerformanceOverlay);
    message.enableVideoStreaming !== undefined && (obj.enableVideoStreaming = message.enableVideoStreaming);
    message.enableAudioStreaming !== undefined && (obj.enableAudioStreaming = message.enableAudioStreaming);
    message.enableInputStreaming !== undefined && (obj.enableInputStreaming = message.enableInputStreaming);
    message.audioChannels !== undefined && (obj.audioChannels = Math.round(message.audioChannels));
    message.enableVideoHevc !== undefined && (obj.enableVideoHevc = message.enableVideoHevc);
    message.enablePerformanceIcons !== undefined && (obj.enablePerformanceIcons = message.enablePerformanceIcons);
    message.enableMicrophoneStreaming !== undefined &&
      (obj.enableMicrophoneStreaming = message.enableMicrophoneStreaming);
    message.controllerOverlayHotkey !== undefined && (obj.controllerOverlayHotkey = message.controllerOverlayHotkey);
    message.enableTouchControllerOBSOLETE !== undefined &&
      (obj.enableTouchControllerOBSOLETE = message.enableTouchControllerOBSOLETE);
    message.p2pScope !== undefined && (obj.p2pScope = eStreamP2PScopeToJSON(message.p2pScope));
    message.enableAudioUncompressed !== undefined && (obj.enableAudioUncompressed = message.enableAudioUncompressed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingClientConfig>, I>>(base?: I): CStreamingClientConfig {
    return CStreamingClientConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingClientConfig>, I>>(object: I): CStreamingClientConfig {
    const message = createBaseCStreamingClientConfig();
    message.quality = object.quality ?? -1;
    message.maximumResolutionX = object.maximumResolutionX ?? 0;
    message.maximumResolutionY = object.maximumResolutionY ?? 0;
    message.maximumFramerateNumerator = object.maximumFramerateNumerator ?? 0;
    message.maximumFramerateDenominator = object.maximumFramerateDenominator ?? 0;
    message.maximumBitrateKbps = object.maximumBitrateKbps ?? 0;
    message.enableHardwareDecoding = object.enableHardwareDecoding ?? false;
    message.enablePerformanceOverlay = object.enablePerformanceOverlay ?? false;
    message.enableVideoStreaming = object.enableVideoStreaming ?? false;
    message.enableAudioStreaming = object.enableAudioStreaming ?? false;
    message.enableInputStreaming = object.enableInputStreaming ?? false;
    message.audioChannels = object.audioChannels ?? 0;
    message.enableVideoHevc = object.enableVideoHevc ?? false;
    message.enablePerformanceIcons = object.enablePerformanceIcons ?? false;
    message.enableMicrophoneStreaming = object.enableMicrophoneStreaming ?? false;
    message.controllerOverlayHotkey = object.controllerOverlayHotkey ?? "";
    message.enableTouchControllerOBSOLETE = object.enableTouchControllerOBSOLETE ?? false;
    message.p2pScope = object.p2pScope ?? 0;
    message.enableAudioUncompressed = object.enableAudioUncompressed ?? false;
    return message;
  },
};

function createBaseCStreamingServerConfig(): CStreamingServerConfig {
  return {
    changeDesktopResolution: false,
    dynamicallyAdjustResolution: false,
    enableCaptureNvfbc: false,
    enableHardwareEncodingNvidia: false,
    enableHardwareEncodingAmd: false,
    enableHardwareEncodingIntel: false,
    softwareEncodingThreads: 0,
    enableTrafficPriority: false,
    hostPlayAudio: 0,
  };
}

export const CStreamingServerConfig = {
  encode(message: CStreamingServerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeDesktopResolution === true) {
      writer.uint32(8).bool(message.changeDesktopResolution);
    }
    if (message.dynamicallyAdjustResolution === true) {
      writer.uint32(16).bool(message.dynamicallyAdjustResolution);
    }
    if (message.enableCaptureNvfbc === true) {
      writer.uint32(24).bool(message.enableCaptureNvfbc);
    }
    if (message.enableHardwareEncodingNvidia === true) {
      writer.uint32(32).bool(message.enableHardwareEncodingNvidia);
    }
    if (message.enableHardwareEncodingAmd === true) {
      writer.uint32(40).bool(message.enableHardwareEncodingAmd);
    }
    if (message.enableHardwareEncodingIntel === true) {
      writer.uint32(48).bool(message.enableHardwareEncodingIntel);
    }
    if (message.softwareEncodingThreads !== 0) {
      writer.uint32(56).int32(message.softwareEncodingThreads);
    }
    if (message.enableTrafficPriority === true) {
      writer.uint32(64).bool(message.enableTrafficPriority);
    }
    if (message.hostPlayAudio !== 0) {
      writer.uint32(72).int32(message.hostPlayAudio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingServerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingServerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changeDesktopResolution = reader.bool();
          break;
        case 2:
          message.dynamicallyAdjustResolution = reader.bool();
          break;
        case 3:
          message.enableCaptureNvfbc = reader.bool();
          break;
        case 4:
          message.enableHardwareEncodingNvidia = reader.bool();
          break;
        case 5:
          message.enableHardwareEncodingAmd = reader.bool();
          break;
        case 6:
          message.enableHardwareEncodingIntel = reader.bool();
          break;
        case 7:
          message.softwareEncodingThreads = reader.int32();
          break;
        case 8:
          message.enableTrafficPriority = reader.bool();
          break;
        case 9:
          message.hostPlayAudio = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingServerConfig {
    return {
      changeDesktopResolution: isSet(object.changeDesktopResolution) ? Boolean(object.changeDesktopResolution) : false,
      dynamicallyAdjustResolution: isSet(object.dynamicallyAdjustResolution)
        ? Boolean(object.dynamicallyAdjustResolution)
        : false,
      enableCaptureNvfbc: isSet(object.enableCaptureNvfbc) ? Boolean(object.enableCaptureNvfbc) : false,
      enableHardwareEncodingNvidia: isSet(object.enableHardwareEncodingNvidia)
        ? Boolean(object.enableHardwareEncodingNvidia)
        : false,
      enableHardwareEncodingAmd: isSet(object.enableHardwareEncodingAmd)
        ? Boolean(object.enableHardwareEncodingAmd)
        : false,
      enableHardwareEncodingIntel: isSet(object.enableHardwareEncodingIntel)
        ? Boolean(object.enableHardwareEncodingIntel)
        : false,
      softwareEncodingThreads: isSet(object.softwareEncodingThreads) ? Number(object.softwareEncodingThreads) : 0,
      enableTrafficPriority: isSet(object.enableTrafficPriority) ? Boolean(object.enableTrafficPriority) : false,
      hostPlayAudio: isSet(object.hostPlayAudio) ? eStreamHostPlayAudioPreferenceFromJSON(object.hostPlayAudio) : 0,
    };
  },

  toJSON(message: CStreamingServerConfig): unknown {
    const obj: any = {};
    message.changeDesktopResolution !== undefined && (obj.changeDesktopResolution = message.changeDesktopResolution);
    message.dynamicallyAdjustResolution !== undefined &&
      (obj.dynamicallyAdjustResolution = message.dynamicallyAdjustResolution);
    message.enableCaptureNvfbc !== undefined && (obj.enableCaptureNvfbc = message.enableCaptureNvfbc);
    message.enableHardwareEncodingNvidia !== undefined &&
      (obj.enableHardwareEncodingNvidia = message.enableHardwareEncodingNvidia);
    message.enableHardwareEncodingAmd !== undefined &&
      (obj.enableHardwareEncodingAmd = message.enableHardwareEncodingAmd);
    message.enableHardwareEncodingIntel !== undefined &&
      (obj.enableHardwareEncodingIntel = message.enableHardwareEncodingIntel);
    message.softwareEncodingThreads !== undefined &&
      (obj.softwareEncodingThreads = Math.round(message.softwareEncodingThreads));
    message.enableTrafficPriority !== undefined && (obj.enableTrafficPriority = message.enableTrafficPriority);
    message.hostPlayAudio !== undefined &&
      (obj.hostPlayAudio = eStreamHostPlayAudioPreferenceToJSON(message.hostPlayAudio));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingServerConfig>, I>>(base?: I): CStreamingServerConfig {
    return CStreamingServerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingServerConfig>, I>>(object: I): CStreamingServerConfig {
    const message = createBaseCStreamingServerConfig();
    message.changeDesktopResolution = object.changeDesktopResolution ?? false;
    message.dynamicallyAdjustResolution = object.dynamicallyAdjustResolution ?? false;
    message.enableCaptureNvfbc = object.enableCaptureNvfbc ?? false;
    message.enableHardwareEncodingNvidia = object.enableHardwareEncodingNvidia ?? false;
    message.enableHardwareEncodingAmd = object.enableHardwareEncodingAmd ?? false;
    message.enableHardwareEncodingIntel = object.enableHardwareEncodingIntel ?? false;
    message.softwareEncodingThreads = object.softwareEncodingThreads ?? 0;
    message.enableTrafficPriority = object.enableTrafficPriority ?? false;
    message.hostPlayAudio = object.hostPlayAudio ?? 0;
    return message;
  },
};

function createBaseCNegotiatedConfig(): CNegotiatedConfig {
  return {
    reliableData: false,
    selectedAudioCodec: 0,
    selectedVideoCodec: 0,
    availableVideoModes: [],
    enableRemoteHid: false,
    enableTouchInput: false,
    disableClientCursor: false,
  };
}

export const CNegotiatedConfig = {
  encode(message: CNegotiatedConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reliableData === true) {
      writer.uint32(8).bool(message.reliableData);
    }
    if (message.selectedAudioCodec !== 0) {
      writer.uint32(16).int32(message.selectedAudioCodec);
    }
    if (message.selectedVideoCodec !== 0) {
      writer.uint32(24).int32(message.selectedVideoCodec);
    }
    for (const v of message.availableVideoModes) {
      CStreamVideoMode.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.enableRemoteHid === true) {
      writer.uint32(40).bool(message.enableRemoteHid);
    }
    if (message.enableTouchInput === true) {
      writer.uint32(48).bool(message.enableTouchInput);
    }
    if (message.disableClientCursor === true) {
      writer.uint32(56).bool(message.disableClientCursor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNegotiatedConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNegotiatedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reliableData = reader.bool();
          break;
        case 2:
          message.selectedAudioCodec = reader.int32() as any;
          break;
        case 3:
          message.selectedVideoCodec = reader.int32() as any;
          break;
        case 4:
          message.availableVideoModes.push(CStreamVideoMode.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enableRemoteHid = reader.bool();
          break;
        case 6:
          message.enableTouchInput = reader.bool();
          break;
        case 7:
          message.disableClientCursor = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CNegotiatedConfig {
    return {
      reliableData: isSet(object.reliableData) ? Boolean(object.reliableData) : false,
      selectedAudioCodec: isSet(object.selectedAudioCodec) ? eStreamAudioCodecFromJSON(object.selectedAudioCodec) : 0,
      selectedVideoCodec: isSet(object.selectedVideoCodec) ? eStreamVideoCodecFromJSON(object.selectedVideoCodec) : 0,
      availableVideoModes: Array.isArray(object?.availableVideoModes)
        ? object.availableVideoModes.map((e: any) => CStreamVideoMode.fromJSON(e))
        : [],
      enableRemoteHid: isSet(object.enableRemoteHid) ? Boolean(object.enableRemoteHid) : false,
      enableTouchInput: isSet(object.enableTouchInput) ? Boolean(object.enableTouchInput) : false,
      disableClientCursor: isSet(object.disableClientCursor) ? Boolean(object.disableClientCursor) : false,
    };
  },

  toJSON(message: CNegotiatedConfig): unknown {
    const obj: any = {};
    message.reliableData !== undefined && (obj.reliableData = message.reliableData);
    message.selectedAudioCodec !== undefined &&
      (obj.selectedAudioCodec = eStreamAudioCodecToJSON(message.selectedAudioCodec));
    message.selectedVideoCodec !== undefined &&
      (obj.selectedVideoCodec = eStreamVideoCodecToJSON(message.selectedVideoCodec));
    if (message.availableVideoModes) {
      obj.availableVideoModes = message.availableVideoModes.map((e) => e ? CStreamVideoMode.toJSON(e) : undefined);
    } else {
      obj.availableVideoModes = [];
    }
    message.enableRemoteHid !== undefined && (obj.enableRemoteHid = message.enableRemoteHid);
    message.enableTouchInput !== undefined && (obj.enableTouchInput = message.enableTouchInput);
    message.disableClientCursor !== undefined && (obj.disableClientCursor = message.disableClientCursor);
    return obj;
  },

  create<I extends Exact<DeepPartial<CNegotiatedConfig>, I>>(base?: I): CNegotiatedConfig {
    return CNegotiatedConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CNegotiatedConfig>, I>>(object: I): CNegotiatedConfig {
    const message = createBaseCNegotiatedConfig();
    message.reliableData = object.reliableData ?? false;
    message.selectedAudioCodec = object.selectedAudioCodec ?? 0;
    message.selectedVideoCodec = object.selectedVideoCodec ?? 0;
    message.availableVideoModes = object.availableVideoModes?.map((e) => CStreamVideoMode.fromPartial(e)) || [];
    message.enableRemoteHid = object.enableRemoteHid ?? false;
    message.enableTouchInput = object.enableTouchInput ?? false;
    message.disableClientCursor = object.disableClientCursor ?? false;
    return message;
  },
};

function createBaseCNegotiationInitMsg(): CNegotiationInitMsg {
  return {
    reliableData: false,
    supportedAudioCodecs: [],
    supportedVideoCodecs: [],
    supportsRemoteHid: false,
    supportsTouchInput: false,
  };
}

export const CNegotiationInitMsg = {
  encode(message: CNegotiationInitMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reliableData === true) {
      writer.uint32(8).bool(message.reliableData);
    }
    writer.uint32(18).fork();
    for (const v of message.supportedAudioCodecs) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.supportedVideoCodecs) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.supportsRemoteHid === true) {
      writer.uint32(32).bool(message.supportsRemoteHid);
    }
    if (message.supportsTouchInput === true) {
      writer.uint32(40).bool(message.supportsTouchInput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNegotiationInitMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNegotiationInitMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reliableData = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedAudioCodecs.push(reader.int32() as any);
            }
          } else {
            message.supportedAudioCodecs.push(reader.int32() as any);
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedVideoCodecs.push(reader.int32() as any);
            }
          } else {
            message.supportedVideoCodecs.push(reader.int32() as any);
          }
          break;
        case 4:
          message.supportsRemoteHid = reader.bool();
          break;
        case 5:
          message.supportsTouchInput = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CNegotiationInitMsg {
    return {
      reliableData: isSet(object.reliableData) ? Boolean(object.reliableData) : false,
      supportedAudioCodecs: Array.isArray(object?.supportedAudioCodecs)
        ? object.supportedAudioCodecs.map((e: any) => eStreamAudioCodecFromJSON(e))
        : [],
      supportedVideoCodecs: Array.isArray(object?.supportedVideoCodecs)
        ? object.supportedVideoCodecs.map((e: any) => eStreamVideoCodecFromJSON(e))
        : [],
      supportsRemoteHid: isSet(object.supportsRemoteHid) ? Boolean(object.supportsRemoteHid) : false,
      supportsTouchInput: isSet(object.supportsTouchInput) ? Boolean(object.supportsTouchInput) : false,
    };
  },

  toJSON(message: CNegotiationInitMsg): unknown {
    const obj: any = {};
    message.reliableData !== undefined && (obj.reliableData = message.reliableData);
    if (message.supportedAudioCodecs) {
      obj.supportedAudioCodecs = message.supportedAudioCodecs.map((e) => eStreamAudioCodecToJSON(e));
    } else {
      obj.supportedAudioCodecs = [];
    }
    if (message.supportedVideoCodecs) {
      obj.supportedVideoCodecs = message.supportedVideoCodecs.map((e) => eStreamVideoCodecToJSON(e));
    } else {
      obj.supportedVideoCodecs = [];
    }
    message.supportsRemoteHid !== undefined && (obj.supportsRemoteHid = message.supportsRemoteHid);
    message.supportsTouchInput !== undefined && (obj.supportsTouchInput = message.supportsTouchInput);
    return obj;
  },

  create<I extends Exact<DeepPartial<CNegotiationInitMsg>, I>>(base?: I): CNegotiationInitMsg {
    return CNegotiationInitMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CNegotiationInitMsg>, I>>(object: I): CNegotiationInitMsg {
    const message = createBaseCNegotiationInitMsg();
    message.reliableData = object.reliableData ?? false;
    message.supportedAudioCodecs = object.supportedAudioCodecs?.map((e) => e) || [];
    message.supportedVideoCodecs = object.supportedVideoCodecs?.map((e) => e) || [];
    message.supportsRemoteHid = object.supportsRemoteHid ?? false;
    message.supportsTouchInput = object.supportsTouchInput ?? false;
    return message;
  },
};

function createBaseCNegotiationSetConfigMsg(): CNegotiationSetConfigMsg {
  return { config: undefined, streamingClientConfig: undefined, streamingClientCaps: undefined };
}

export const CNegotiationSetConfigMsg = {
  encode(message: CNegotiationSetConfigMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      CNegotiatedConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.streamingClientConfig !== undefined) {
      CStreamingClientConfig.encode(message.streamingClientConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.streamingClientCaps !== undefined) {
      CStreamingClientCaps.encode(message.streamingClientCaps, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNegotiationSetConfigMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNegotiationSetConfigMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = CNegotiatedConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamingClientConfig = CStreamingClientConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.streamingClientCaps = CStreamingClientCaps.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CNegotiationSetConfigMsg {
    return {
      config: isSet(object.config) ? CNegotiatedConfig.fromJSON(object.config) : undefined,
      streamingClientConfig: isSet(object.streamingClientConfig)
        ? CStreamingClientConfig.fromJSON(object.streamingClientConfig)
        : undefined,
      streamingClientCaps: isSet(object.streamingClientCaps)
        ? CStreamingClientCaps.fromJSON(object.streamingClientCaps)
        : undefined,
    };
  },

  toJSON(message: CNegotiationSetConfigMsg): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? CNegotiatedConfig.toJSON(message.config) : undefined);
    message.streamingClientConfig !== undefined && (obj.streamingClientConfig = message.streamingClientConfig
      ? CStreamingClientConfig.toJSON(message.streamingClientConfig)
      : undefined);
    message.streamingClientCaps !== undefined && (obj.streamingClientCaps = message.streamingClientCaps
      ? CStreamingClientCaps.toJSON(message.streamingClientCaps)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CNegotiationSetConfigMsg>, I>>(base?: I): CNegotiationSetConfigMsg {
    return CNegotiationSetConfigMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CNegotiationSetConfigMsg>, I>>(object: I): CNegotiationSetConfigMsg {
    const message = createBaseCNegotiationSetConfigMsg();
    message.config = (object.config !== undefined && object.config !== null)
      ? CNegotiatedConfig.fromPartial(object.config)
      : undefined;
    message.streamingClientConfig =
      (object.streamingClientConfig !== undefined && object.streamingClientConfig !== null)
        ? CStreamingClientConfig.fromPartial(object.streamingClientConfig)
        : undefined;
    message.streamingClientCaps = (object.streamingClientCaps !== undefined && object.streamingClientCaps !== null)
      ? CStreamingClientCaps.fromPartial(object.streamingClientCaps)
      : undefined;
    return message;
  },
};

function createBaseCNegotiationCompleteMsg(): CNegotiationCompleteMsg {
  return {};
}

export const CNegotiationCompleteMsg = {
  encode(_: CNegotiationCompleteMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CNegotiationCompleteMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCNegotiationCompleteMsg();
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

  fromJSON(_: any): CNegotiationCompleteMsg {
    return {};
  },

  toJSON(_: CNegotiationCompleteMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CNegotiationCompleteMsg>, I>>(base?: I): CNegotiationCompleteMsg {
    return CNegotiationCompleteMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CNegotiationCompleteMsg>, I>>(_: I): CNegotiationCompleteMsg {
    const message = createBaseCNegotiationCompleteMsg();
    return message;
  },
};

function createBaseCStartAudioDataMsg(): CStartAudioDataMsg {
  return { channel: 0, codec: 0, codecData: Buffer.alloc(0), frequency: 0, channels: 0 };
}

export const CStartAudioDataMsg = {
  encode(message: CStartAudioDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(16).uint32(message.channel);
    }
    if (message.codec !== 0) {
      writer.uint32(24).int32(message.codec);
    }
    if (message.codecData.length !== 0) {
      writer.uint32(34).bytes(message.codecData);
    }
    if (message.frequency !== 0) {
      writer.uint32(40).uint32(message.frequency);
    }
    if (message.channels !== 0) {
      writer.uint32(48).uint32(message.channels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStartAudioDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStartAudioDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.uint32();
          break;
        case 3:
          message.codec = reader.int32() as any;
          break;
        case 4:
          message.codecData = reader.bytes() as Buffer;
          break;
        case 5:
          message.frequency = reader.uint32();
          break;
        case 6:
          message.channels = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStartAudioDataMsg {
    return {
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      codec: isSet(object.codec) ? eStreamAudioCodecFromJSON(object.codec) : 0,
      codecData: isSet(object.codecData) ? Buffer.from(bytesFromBase64(object.codecData)) : Buffer.alloc(0),
      frequency: isSet(object.frequency) ? Number(object.frequency) : 0,
      channels: isSet(object.channels) ? Number(object.channels) : 0,
    };
  },

  toJSON(message: CStartAudioDataMsg): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    message.codec !== undefined && (obj.codec = eStreamAudioCodecToJSON(message.codec));
    message.codecData !== undefined &&
      (obj.codecData = base64FromBytes(message.codecData !== undefined ? message.codecData : Buffer.alloc(0)));
    message.frequency !== undefined && (obj.frequency = Math.round(message.frequency));
    message.channels !== undefined && (obj.channels = Math.round(message.channels));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStartAudioDataMsg>, I>>(base?: I): CStartAudioDataMsg {
    return CStartAudioDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStartAudioDataMsg>, I>>(object: I): CStartAudioDataMsg {
    const message = createBaseCStartAudioDataMsg();
    message.channel = object.channel ?? 0;
    message.codec = object.codec ?? 0;
    message.codecData = object.codecData ?? Buffer.alloc(0);
    message.frequency = object.frequency ?? 0;
    message.channels = object.channels ?? 0;
    return message;
  },
};

function createBaseCStopAudioDataMsg(): CStopAudioDataMsg {
  return {};
}

export const CStopAudioDataMsg = {
  encode(_: CStopAudioDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStopAudioDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStopAudioDataMsg();
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

  fromJSON(_: any): CStopAudioDataMsg {
    return {};
  },

  toJSON(_: CStopAudioDataMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStopAudioDataMsg>, I>>(base?: I): CStopAudioDataMsg {
    return CStopAudioDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStopAudioDataMsg>, I>>(_: I): CStopAudioDataMsg {
    const message = createBaseCStopAudioDataMsg();
    return message;
  },
};

function createBaseCStartVideoDataMsg(): CStartVideoDataMsg {
  return { channel: 0, codec: 0, codecData: Buffer.alloc(0), width: 0, height: 0 };
}

export const CStartVideoDataMsg = {
  encode(message: CStartVideoDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).uint32(message.channel);
    }
    if (message.codec !== 0) {
      writer.uint32(16).int32(message.codec);
    }
    if (message.codecData.length !== 0) {
      writer.uint32(26).bytes(message.codecData);
    }
    if (message.width !== 0) {
      writer.uint32(32).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(40).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStartVideoDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStartVideoDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.uint32();
          break;
        case 2:
          message.codec = reader.int32() as any;
          break;
        case 3:
          message.codecData = reader.bytes() as Buffer;
          break;
        case 4:
          message.width = reader.uint32();
          break;
        case 5:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStartVideoDataMsg {
    return {
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      codec: isSet(object.codec) ? eStreamVideoCodecFromJSON(object.codec) : 0,
      codecData: isSet(object.codecData) ? Buffer.from(bytesFromBase64(object.codecData)) : Buffer.alloc(0),
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CStartVideoDataMsg): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    message.codec !== undefined && (obj.codec = eStreamVideoCodecToJSON(message.codec));
    message.codecData !== undefined &&
      (obj.codecData = base64FromBytes(message.codecData !== undefined ? message.codecData : Buffer.alloc(0)));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStartVideoDataMsg>, I>>(base?: I): CStartVideoDataMsg {
    return CStartVideoDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStartVideoDataMsg>, I>>(object: I): CStartVideoDataMsg {
    const message = createBaseCStartVideoDataMsg();
    message.channel = object.channel ?? 0;
    message.codec = object.codec ?? 0;
    message.codecData = object.codecData ?? Buffer.alloc(0);
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCStopVideoDataMsg(): CStopVideoDataMsg {
  return {};
}

export const CStopVideoDataMsg = {
  encode(_: CStopVideoDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStopVideoDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStopVideoDataMsg();
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

  fromJSON(_: any): CStopVideoDataMsg {
    return {};
  },

  toJSON(_: CStopVideoDataMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStopVideoDataMsg>, I>>(base?: I): CStopVideoDataMsg {
    return CStopVideoDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStopVideoDataMsg>, I>>(_: I): CStopVideoDataMsg {
    const message = createBaseCStopVideoDataMsg();
    return message;
  },
};

function createBaseCStartNeptuneDataMsg(): CStartNeptuneDataMsg {
  return { channel: 0 };
}

export const CStartNeptuneDataMsg = {
  encode(message: CStartNeptuneDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).uint32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStartNeptuneDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStartNeptuneDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStartNeptuneDataMsg {
    return { channel: isSet(object.channel) ? Number(object.channel) : 0 };
  },

  toJSON(message: CStartNeptuneDataMsg): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStartNeptuneDataMsg>, I>>(base?: I): CStartNeptuneDataMsg {
    return CStartNeptuneDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStartNeptuneDataMsg>, I>>(object: I): CStartNeptuneDataMsg {
    const message = createBaseCStartNeptuneDataMsg();
    message.channel = object.channel ?? 0;
    return message;
  },
};

function createBaseCStopNeptuneDataMsg(): CStopNeptuneDataMsg {
  return {};
}

export const CStopNeptuneDataMsg = {
  encode(_: CStopNeptuneDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStopNeptuneDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStopNeptuneDataMsg();
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

  fromJSON(_: any): CStopNeptuneDataMsg {
    return {};
  },

  toJSON(_: CStopNeptuneDataMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStopNeptuneDataMsg>, I>>(base?: I): CStopNeptuneDataMsg {
    return CStopNeptuneDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStopNeptuneDataMsg>, I>>(_: I): CStopNeptuneDataMsg {
    const message = createBaseCStopNeptuneDataMsg();
    return message;
  },
};

function createBaseCRecordedInput(): CRecordedInput {
  return {
    type: 1,
    timestamp: 0,
    fingerDown: undefined,
    fingerMotion: undefined,
    fingerUp: undefined,
    mouseMotion: undefined,
    mouseWheel: undefined,
    mouseDown: undefined,
    mouseUp: undefined,
    keyDown: undefined,
    keyUp: undefined,
    text: undefined,
    hid: undefined,
  };
}

export const CRecordedInput = {
  encode(message: CRecordedInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.fingerDown !== undefined) {
      CInputTouchFingerDownMsg.encode(message.fingerDown, writer.uint32(26).fork()).ldelim();
    }
    if (message.fingerMotion !== undefined) {
      CInputTouchFingerMotionMsg.encode(message.fingerMotion, writer.uint32(34).fork()).ldelim();
    }
    if (message.fingerUp !== undefined) {
      CInputTouchFingerUpMsg.encode(message.fingerUp, writer.uint32(42).fork()).ldelim();
    }
    if (message.mouseMotion !== undefined) {
      CInputMouseMotionMsg.encode(message.mouseMotion, writer.uint32(50).fork()).ldelim();
    }
    if (message.mouseWheel !== undefined) {
      CInputMouseWheelMsg.encode(message.mouseWheel, writer.uint32(58).fork()).ldelim();
    }
    if (message.mouseDown !== undefined) {
      CInputMouseDownMsg.encode(message.mouseDown, writer.uint32(66).fork()).ldelim();
    }
    if (message.mouseUp !== undefined) {
      CInputMouseUpMsg.encode(message.mouseUp, writer.uint32(74).fork()).ldelim();
    }
    if (message.keyDown !== undefined) {
      CInputKeyDownMsg.encode(message.keyDown, writer.uint32(82).fork()).ldelim();
    }
    if (message.keyUp !== undefined) {
      CInputKeyUpMsg.encode(message.keyUp, writer.uint32(90).fork()).ldelim();
    }
    if (message.text !== undefined) {
      CInputTextMsg.encode(message.text, writer.uint32(98).fork()).ldelim();
    }
    if (message.hid !== undefined) {
      CRemoteHIDMsg.encode(message.hid, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRecordedInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRecordedInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 3:
          message.fingerDown = CInputTouchFingerDownMsg.decode(reader, reader.uint32());
          break;
        case 4:
          message.fingerMotion = CInputTouchFingerMotionMsg.decode(reader, reader.uint32());
          break;
        case 5:
          message.fingerUp = CInputTouchFingerUpMsg.decode(reader, reader.uint32());
          break;
        case 6:
          message.mouseMotion = CInputMouseMotionMsg.decode(reader, reader.uint32());
          break;
        case 7:
          message.mouseWheel = CInputMouseWheelMsg.decode(reader, reader.uint32());
          break;
        case 8:
          message.mouseDown = CInputMouseDownMsg.decode(reader, reader.uint32());
          break;
        case 9:
          message.mouseUp = CInputMouseUpMsg.decode(reader, reader.uint32());
          break;
        case 10:
          message.keyDown = CInputKeyDownMsg.decode(reader, reader.uint32());
          break;
        case 11:
          message.keyUp = CInputKeyUpMsg.decode(reader, reader.uint32());
          break;
        case 12:
          message.text = CInputTextMsg.decode(reader, reader.uint32());
          break;
        case 13:
          message.hid = CRemoteHIDMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRecordedInput {
    return {
      type: isSet(object.type) ? eStreamControlMessageFromJSON(object.type) : 1,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      fingerDown: isSet(object.fingerDown) ? CInputTouchFingerDownMsg.fromJSON(object.fingerDown) : undefined,
      fingerMotion: isSet(object.fingerMotion) ? CInputTouchFingerMotionMsg.fromJSON(object.fingerMotion) : undefined,
      fingerUp: isSet(object.fingerUp) ? CInputTouchFingerUpMsg.fromJSON(object.fingerUp) : undefined,
      mouseMotion: isSet(object.mouseMotion) ? CInputMouseMotionMsg.fromJSON(object.mouseMotion) : undefined,
      mouseWheel: isSet(object.mouseWheel) ? CInputMouseWheelMsg.fromJSON(object.mouseWheel) : undefined,
      mouseDown: isSet(object.mouseDown) ? CInputMouseDownMsg.fromJSON(object.mouseDown) : undefined,
      mouseUp: isSet(object.mouseUp) ? CInputMouseUpMsg.fromJSON(object.mouseUp) : undefined,
      keyDown: isSet(object.keyDown) ? CInputKeyDownMsg.fromJSON(object.keyDown) : undefined,
      keyUp: isSet(object.keyUp) ? CInputKeyUpMsg.fromJSON(object.keyUp) : undefined,
      text: isSet(object.text) ? CInputTextMsg.fromJSON(object.text) : undefined,
      hid: isSet(object.hid) ? CRemoteHIDMsg.fromJSON(object.hid) : undefined,
    };
  },

  toJSON(message: CRecordedInput): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eStreamControlMessageToJSON(message.type));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.fingerDown !== undefined &&
      (obj.fingerDown = message.fingerDown ? CInputTouchFingerDownMsg.toJSON(message.fingerDown) : undefined);
    message.fingerMotion !== undefined &&
      (obj.fingerMotion = message.fingerMotion ? CInputTouchFingerMotionMsg.toJSON(message.fingerMotion) : undefined);
    message.fingerUp !== undefined &&
      (obj.fingerUp = message.fingerUp ? CInputTouchFingerUpMsg.toJSON(message.fingerUp) : undefined);
    message.mouseMotion !== undefined &&
      (obj.mouseMotion = message.mouseMotion ? CInputMouseMotionMsg.toJSON(message.mouseMotion) : undefined);
    message.mouseWheel !== undefined &&
      (obj.mouseWheel = message.mouseWheel ? CInputMouseWheelMsg.toJSON(message.mouseWheel) : undefined);
    message.mouseDown !== undefined &&
      (obj.mouseDown = message.mouseDown ? CInputMouseDownMsg.toJSON(message.mouseDown) : undefined);
    message.mouseUp !== undefined &&
      (obj.mouseUp = message.mouseUp ? CInputMouseUpMsg.toJSON(message.mouseUp) : undefined);
    message.keyDown !== undefined &&
      (obj.keyDown = message.keyDown ? CInputKeyDownMsg.toJSON(message.keyDown) : undefined);
    message.keyUp !== undefined && (obj.keyUp = message.keyUp ? CInputKeyUpMsg.toJSON(message.keyUp) : undefined);
    message.text !== undefined && (obj.text = message.text ? CInputTextMsg.toJSON(message.text) : undefined);
    message.hid !== undefined && (obj.hid = message.hid ? CRemoteHIDMsg.toJSON(message.hid) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRecordedInput>, I>>(base?: I): CRecordedInput {
    return CRecordedInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRecordedInput>, I>>(object: I): CRecordedInput {
    const message = createBaseCRecordedInput();
    message.type = object.type ?? 1;
    message.timestamp = object.timestamp ?? 0;
    message.fingerDown = (object.fingerDown !== undefined && object.fingerDown !== null)
      ? CInputTouchFingerDownMsg.fromPartial(object.fingerDown)
      : undefined;
    message.fingerMotion = (object.fingerMotion !== undefined && object.fingerMotion !== null)
      ? CInputTouchFingerMotionMsg.fromPartial(object.fingerMotion)
      : undefined;
    message.fingerUp = (object.fingerUp !== undefined && object.fingerUp !== null)
      ? CInputTouchFingerUpMsg.fromPartial(object.fingerUp)
      : undefined;
    message.mouseMotion = (object.mouseMotion !== undefined && object.mouseMotion !== null)
      ? CInputMouseMotionMsg.fromPartial(object.mouseMotion)
      : undefined;
    message.mouseWheel = (object.mouseWheel !== undefined && object.mouseWheel !== null)
      ? CInputMouseWheelMsg.fromPartial(object.mouseWheel)
      : undefined;
    message.mouseDown = (object.mouseDown !== undefined && object.mouseDown !== null)
      ? CInputMouseDownMsg.fromPartial(object.mouseDown)
      : undefined;
    message.mouseUp = (object.mouseUp !== undefined && object.mouseUp !== null)
      ? CInputMouseUpMsg.fromPartial(object.mouseUp)
      : undefined;
    message.keyDown = (object.keyDown !== undefined && object.keyDown !== null)
      ? CInputKeyDownMsg.fromPartial(object.keyDown)
      : undefined;
    message.keyUp = (object.keyUp !== undefined && object.keyUp !== null)
      ? CInputKeyUpMsg.fromPartial(object.keyUp)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null)
      ? CInputTextMsg.fromPartial(object.text)
      : undefined;
    message.hid = (object.hid !== undefined && object.hid !== null) ? CRemoteHIDMsg.fromPartial(object.hid) : undefined;
    return message;
  },
};

function createBaseCRecordedInputStream(): CRecordedInputStream {
  return { entries: [] };
}

export const CRecordedInputStream = {
  encode(message: CRecordedInputStream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CRecordedInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRecordedInputStream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRecordedInputStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CRecordedInput.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRecordedInputStream {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CRecordedInput.fromJSON(e)) : [],
    };
  },

  toJSON(message: CRecordedInputStream): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CRecordedInput.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CRecordedInputStream>, I>>(base?: I): CRecordedInputStream {
    return CRecordedInputStream.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRecordedInputStream>, I>>(object: I): CRecordedInputStream {
    const message = createBaseCRecordedInputStream();
    message.entries = object.entries?.map((e) => CRecordedInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCInputLatencyTestMsg(): CInputLatencyTestMsg {
  return { inputMark: 0, color: 0 };
}

export const CInputLatencyTestMsg = {
  encode(message: CInputLatencyTestMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.color !== 0) {
      writer.uint32(16).uint32(message.color);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputLatencyTestMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputLatencyTestMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.color = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputLatencyTestMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      color: isSet(object.color) ? Number(object.color) : 0,
    };
  },

  toJSON(message: CInputLatencyTestMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.color !== undefined && (obj.color = Math.round(message.color));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputLatencyTestMsg>, I>>(base?: I): CInputLatencyTestMsg {
    return CInputLatencyTestMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputLatencyTestMsg>, I>>(object: I): CInputLatencyTestMsg {
    const message = createBaseCInputLatencyTestMsg();
    message.inputMark = object.inputMark ?? 0;
    message.color = object.color ?? 0;
    return message;
  },
};

function createBaseCInputTouchFingerDownMsg(): CInputTouchFingerDownMsg {
  return { inputMark: 0, fingerid: "0", xNormalized: 0, yNormalized: 0 };
}

export const CInputTouchFingerDownMsg = {
  encode(message: CInputTouchFingerDownMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.fingerid !== "0") {
      writer.uint32(16).uint64(message.fingerid);
    }
    if (message.xNormalized !== 0) {
      writer.uint32(29).float(message.xNormalized);
    }
    if (message.yNormalized !== 0) {
      writer.uint32(37).float(message.yNormalized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputTouchFingerDownMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputTouchFingerDownMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.fingerid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.xNormalized = reader.float();
          break;
        case 4:
          message.yNormalized = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputTouchFingerDownMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      fingerid: isSet(object.fingerid) ? String(object.fingerid) : "0",
      xNormalized: isSet(object.xNormalized) ? Number(object.xNormalized) : 0,
      yNormalized: isSet(object.yNormalized) ? Number(object.yNormalized) : 0,
    };
  },

  toJSON(message: CInputTouchFingerDownMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.fingerid !== undefined && (obj.fingerid = message.fingerid);
    message.xNormalized !== undefined && (obj.xNormalized = message.xNormalized);
    message.yNormalized !== undefined && (obj.yNormalized = message.yNormalized);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputTouchFingerDownMsg>, I>>(base?: I): CInputTouchFingerDownMsg {
    return CInputTouchFingerDownMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputTouchFingerDownMsg>, I>>(object: I): CInputTouchFingerDownMsg {
    const message = createBaseCInputTouchFingerDownMsg();
    message.inputMark = object.inputMark ?? 0;
    message.fingerid = object.fingerid ?? "0";
    message.xNormalized = object.xNormalized ?? 0;
    message.yNormalized = object.yNormalized ?? 0;
    return message;
  },
};

function createBaseCInputTouchFingerMotionMsg(): CInputTouchFingerMotionMsg {
  return { inputMark: 0, fingerid: "0", xNormalized: 0, yNormalized: 0 };
}

export const CInputTouchFingerMotionMsg = {
  encode(message: CInputTouchFingerMotionMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.fingerid !== "0") {
      writer.uint32(16).uint64(message.fingerid);
    }
    if (message.xNormalized !== 0) {
      writer.uint32(29).float(message.xNormalized);
    }
    if (message.yNormalized !== 0) {
      writer.uint32(37).float(message.yNormalized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputTouchFingerMotionMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputTouchFingerMotionMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.fingerid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.xNormalized = reader.float();
          break;
        case 4:
          message.yNormalized = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputTouchFingerMotionMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      fingerid: isSet(object.fingerid) ? String(object.fingerid) : "0",
      xNormalized: isSet(object.xNormalized) ? Number(object.xNormalized) : 0,
      yNormalized: isSet(object.yNormalized) ? Number(object.yNormalized) : 0,
    };
  },

  toJSON(message: CInputTouchFingerMotionMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.fingerid !== undefined && (obj.fingerid = message.fingerid);
    message.xNormalized !== undefined && (obj.xNormalized = message.xNormalized);
    message.yNormalized !== undefined && (obj.yNormalized = message.yNormalized);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputTouchFingerMotionMsg>, I>>(base?: I): CInputTouchFingerMotionMsg {
    return CInputTouchFingerMotionMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputTouchFingerMotionMsg>, I>>(object: I): CInputTouchFingerMotionMsg {
    const message = createBaseCInputTouchFingerMotionMsg();
    message.inputMark = object.inputMark ?? 0;
    message.fingerid = object.fingerid ?? "0";
    message.xNormalized = object.xNormalized ?? 0;
    message.yNormalized = object.yNormalized ?? 0;
    return message;
  },
};

function createBaseCInputTouchFingerUpMsg(): CInputTouchFingerUpMsg {
  return { inputMark: 0, fingerid: "0", xNormalized: 0, yNormalized: 0 };
}

export const CInputTouchFingerUpMsg = {
  encode(message: CInputTouchFingerUpMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.fingerid !== "0") {
      writer.uint32(16).uint64(message.fingerid);
    }
    if (message.xNormalized !== 0) {
      writer.uint32(29).float(message.xNormalized);
    }
    if (message.yNormalized !== 0) {
      writer.uint32(37).float(message.yNormalized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputTouchFingerUpMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputTouchFingerUpMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.fingerid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.xNormalized = reader.float();
          break;
        case 4:
          message.yNormalized = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputTouchFingerUpMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      fingerid: isSet(object.fingerid) ? String(object.fingerid) : "0",
      xNormalized: isSet(object.xNormalized) ? Number(object.xNormalized) : 0,
      yNormalized: isSet(object.yNormalized) ? Number(object.yNormalized) : 0,
    };
  },

  toJSON(message: CInputTouchFingerUpMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.fingerid !== undefined && (obj.fingerid = message.fingerid);
    message.xNormalized !== undefined && (obj.xNormalized = message.xNormalized);
    message.yNormalized !== undefined && (obj.yNormalized = message.yNormalized);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputTouchFingerUpMsg>, I>>(base?: I): CInputTouchFingerUpMsg {
    return CInputTouchFingerUpMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputTouchFingerUpMsg>, I>>(object: I): CInputTouchFingerUpMsg {
    const message = createBaseCInputTouchFingerUpMsg();
    message.inputMark = object.inputMark ?? 0;
    message.fingerid = object.fingerid ?? "0";
    message.xNormalized = object.xNormalized ?? 0;
    message.yNormalized = object.yNormalized ?? 0;
    return message;
  },
};

function createBaseCInputMouseMotionMsg(): CInputMouseMotionMsg {
  return { inputMark: 0, xNormalized: 0, yNormalized: 0, dx: 0, dy: 0 };
}

export const CInputMouseMotionMsg = {
  encode(message: CInputMouseMotionMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.xNormalized !== 0) {
      writer.uint32(21).float(message.xNormalized);
    }
    if (message.yNormalized !== 0) {
      writer.uint32(29).float(message.yNormalized);
    }
    if (message.dx !== 0) {
      writer.uint32(32).int32(message.dx);
    }
    if (message.dy !== 0) {
      writer.uint32(40).int32(message.dy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputMouseMotionMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputMouseMotionMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.xNormalized = reader.float();
          break;
        case 3:
          message.yNormalized = reader.float();
          break;
        case 4:
          message.dx = reader.int32();
          break;
        case 5:
          message.dy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputMouseMotionMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      xNormalized: isSet(object.xNormalized) ? Number(object.xNormalized) : 0,
      yNormalized: isSet(object.yNormalized) ? Number(object.yNormalized) : 0,
      dx: isSet(object.dx) ? Number(object.dx) : 0,
      dy: isSet(object.dy) ? Number(object.dy) : 0,
    };
  },

  toJSON(message: CInputMouseMotionMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.xNormalized !== undefined && (obj.xNormalized = message.xNormalized);
    message.yNormalized !== undefined && (obj.yNormalized = message.yNormalized);
    message.dx !== undefined && (obj.dx = Math.round(message.dx));
    message.dy !== undefined && (obj.dy = Math.round(message.dy));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputMouseMotionMsg>, I>>(base?: I): CInputMouseMotionMsg {
    return CInputMouseMotionMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputMouseMotionMsg>, I>>(object: I): CInputMouseMotionMsg {
    const message = createBaseCInputMouseMotionMsg();
    message.inputMark = object.inputMark ?? 0;
    message.xNormalized = object.xNormalized ?? 0;
    message.yNormalized = object.yNormalized ?? 0;
    message.dx = object.dx ?? 0;
    message.dy = object.dy ?? 0;
    return message;
  },
};

function createBaseCInputMouseWheelMsg(): CInputMouseWheelMsg {
  return { inputMark: 0, direction: 120 };
}

export const CInputMouseWheelMsg = {
  encode(message: CInputMouseWheelMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.direction !== 120) {
      writer.uint32(16).int32(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputMouseWheelMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputMouseWheelMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.direction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputMouseWheelMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      direction: isSet(object.direction) ? eStreamMouseWheelDirectionFromJSON(object.direction) : 120,
    };
  },

  toJSON(message: CInputMouseWheelMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.direction !== undefined && (obj.direction = eStreamMouseWheelDirectionToJSON(message.direction));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputMouseWheelMsg>, I>>(base?: I): CInputMouseWheelMsg {
    return CInputMouseWheelMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputMouseWheelMsg>, I>>(object: I): CInputMouseWheelMsg {
    const message = createBaseCInputMouseWheelMsg();
    message.inputMark = object.inputMark ?? 0;
    message.direction = object.direction ?? 120;
    return message;
  },
};

function createBaseCInputMouseDownMsg(): CInputMouseDownMsg {
  return { inputMark: 0, button: 1 };
}

export const CInputMouseDownMsg = {
  encode(message: CInputMouseDownMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.button !== 1) {
      writer.uint32(16).int32(message.button);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputMouseDownMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputMouseDownMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.button = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputMouseDownMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      button: isSet(object.button) ? eStreamMouseButtonFromJSON(object.button) : 1,
    };
  },

  toJSON(message: CInputMouseDownMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.button !== undefined && (obj.button = eStreamMouseButtonToJSON(message.button));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputMouseDownMsg>, I>>(base?: I): CInputMouseDownMsg {
    return CInputMouseDownMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputMouseDownMsg>, I>>(object: I): CInputMouseDownMsg {
    const message = createBaseCInputMouseDownMsg();
    message.inputMark = object.inputMark ?? 0;
    message.button = object.button ?? 1;
    return message;
  },
};

function createBaseCInputMouseUpMsg(): CInputMouseUpMsg {
  return { inputMark: 0, button: 1 };
}

export const CInputMouseUpMsg = {
  encode(message: CInputMouseUpMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.button !== 1) {
      writer.uint32(16).int32(message.button);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputMouseUpMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputMouseUpMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.button = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputMouseUpMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      button: isSet(object.button) ? eStreamMouseButtonFromJSON(object.button) : 1,
    };
  },

  toJSON(message: CInputMouseUpMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.button !== undefined && (obj.button = eStreamMouseButtonToJSON(message.button));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputMouseUpMsg>, I>>(base?: I): CInputMouseUpMsg {
    return CInputMouseUpMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputMouseUpMsg>, I>>(object: I): CInputMouseUpMsg {
    const message = createBaseCInputMouseUpMsg();
    message.inputMark = object.inputMark ?? 0;
    message.button = object.button ?? 1;
    return message;
  },
};

function createBaseCInputKeyDownMsg(): CInputKeyDownMsg {
  return { inputMark: 0, scancode: 0 };
}

export const CInputKeyDownMsg = {
  encode(message: CInputKeyDownMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.scancode !== 0) {
      writer.uint32(16).uint32(message.scancode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputKeyDownMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputKeyDownMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.scancode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputKeyDownMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      scancode: isSet(object.scancode) ? Number(object.scancode) : 0,
    };
  },

  toJSON(message: CInputKeyDownMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.scancode !== undefined && (obj.scancode = Math.round(message.scancode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputKeyDownMsg>, I>>(base?: I): CInputKeyDownMsg {
    return CInputKeyDownMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputKeyDownMsg>, I>>(object: I): CInputKeyDownMsg {
    const message = createBaseCInputKeyDownMsg();
    message.inputMark = object.inputMark ?? 0;
    message.scancode = object.scancode ?? 0;
    return message;
  },
};

function createBaseCInputKeyUpMsg(): CInputKeyUpMsg {
  return { inputMark: 0, scancode: 0 };
}

export const CInputKeyUpMsg = {
  encode(message: CInputKeyUpMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.scancode !== 0) {
      writer.uint32(16).uint32(message.scancode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputKeyUpMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputKeyUpMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.scancode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputKeyUpMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      scancode: isSet(object.scancode) ? Number(object.scancode) : 0,
    };
  },

  toJSON(message: CInputKeyUpMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.scancode !== undefined && (obj.scancode = Math.round(message.scancode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputKeyUpMsg>, I>>(base?: I): CInputKeyUpMsg {
    return CInputKeyUpMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputKeyUpMsg>, I>>(object: I): CInputKeyUpMsg {
    const message = createBaseCInputKeyUpMsg();
    message.inputMark = object.inputMark ?? 0;
    message.scancode = object.scancode ?? 0;
    return message;
  },
};

function createBaseCInputTextMsg(): CInputTextMsg {
  return { inputMark: 0, textUtf8: "" };
}

export const CInputTextMsg = {
  encode(message: CInputTextMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputMark !== 0) {
      writer.uint32(8).uint32(message.inputMark);
    }
    if (message.textUtf8 !== "") {
      writer.uint32(18).string(message.textUtf8);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInputTextMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInputTextMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputMark = reader.uint32();
          break;
        case 2:
          message.textUtf8 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInputTextMsg {
    return {
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      textUtf8: isSet(object.textUtf8) ? String(object.textUtf8) : "",
    };
  },

  toJSON(message: CInputTextMsg): unknown {
    const obj: any = {};
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    message.textUtf8 !== undefined && (obj.textUtf8 = message.textUtf8);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInputTextMsg>, I>>(base?: I): CInputTextMsg {
    return CInputTextMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInputTextMsg>, I>>(object: I): CInputTextMsg {
    const message = createBaseCInputTextMsg();
    message.inputMark = object.inputMark ?? 0;
    message.textUtf8 = object.textUtf8 ?? "";
    return message;
  },
};

function createBaseCSetTitleMsg(): CSetTitleMsg {
  return { text: "" };
}

export const CSetTitleMsg = {
  encode(message: CSetTitleMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetTitleMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetTitleMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetTitleMsg {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: CSetTitleMsg): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetTitleMsg>, I>>(base?: I): CSetTitleMsg {
    return CSetTitleMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetTitleMsg>, I>>(object: I): CSetTitleMsg {
    const message = createBaseCSetTitleMsg();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCSetCaptureSizeMsg(): CSetCaptureSizeMsg {
  return { width: 0, height: 0 };
}

export const CSetCaptureSizeMsg = {
  encode(message: CSetCaptureSizeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetCaptureSizeMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetCaptureSizeMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.int32();
          break;
        case 2:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetCaptureSizeMsg {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CSetCaptureSizeMsg): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetCaptureSizeMsg>, I>>(base?: I): CSetCaptureSizeMsg {
    return CSetCaptureSizeMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetCaptureSizeMsg>, I>>(object: I): CSetCaptureSizeMsg {
    const message = createBaseCSetCaptureSizeMsg();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCSetIconMsg(): CSetIconMsg {
  return { width: 0, height: 0, image: Buffer.alloc(0) };
}

export const CSetIconMsg = {
  encode(message: CSetIconMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int32(message.height);
    }
    if (message.image.length !== 0) {
      writer.uint32(26).bytes(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetIconMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetIconMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.width = reader.int32();
          break;
        case 2:
          message.height = reader.int32();
          break;
        case 3:
          message.image = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetIconMsg {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      image: isSet(object.image) ? Buffer.from(bytesFromBase64(object.image)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSetIconMsg): unknown {
    const obj: any = {};
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.image !== undefined &&
      (obj.image = base64FromBytes(message.image !== undefined ? message.image : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetIconMsg>, I>>(base?: I): CSetIconMsg {
    return CSetIconMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetIconMsg>, I>>(object: I): CSetIconMsg {
    const message = createBaseCSetIconMsg();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.image = object.image ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSetFlashStateMsg(): CSetFlashStateMsg {
  return { flags: 0, count: 0, timeoutMs: 0 };
}

export const CSetFlashStateMsg = {
  encode(message: CSetFlashStateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flags !== 0) {
      writer.uint32(8).uint32(message.flags);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.timeoutMs !== 0) {
      writer.uint32(24).uint32(message.timeoutMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetFlashStateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetFlashStateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flags = reader.uint32();
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.timeoutMs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetFlashStateMsg {
    return {
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      timeoutMs: isSet(object.timeoutMs) ? Number(object.timeoutMs) : 0,
    };
  },

  toJSON(message: CSetFlashStateMsg): unknown {
    const obj: any = {};
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.timeoutMs !== undefined && (obj.timeoutMs = Math.round(message.timeoutMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetFlashStateMsg>, I>>(base?: I): CSetFlashStateMsg {
    return CSetFlashStateMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetFlashStateMsg>, I>>(object: I): CSetFlashStateMsg {
    const message = createBaseCSetFlashStateMsg();
    message.flags = object.flags ?? 0;
    message.count = object.count ?? 0;
    message.timeoutMs = object.timeoutMs ?? 0;
    return message;
  },
};

function createBaseCShowCursorMsg(): CShowCursorMsg {
  return { xNormalized: 0, yNormalized: 0 };
}

export const CShowCursorMsg = {
  encode(message: CShowCursorMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.xNormalized !== 0) {
      writer.uint32(13).float(message.xNormalized);
    }
    if (message.yNormalized !== 0) {
      writer.uint32(21).float(message.yNormalized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShowCursorMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShowCursorMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.xNormalized = reader.float();
          break;
        case 2:
          message.yNormalized = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CShowCursorMsg {
    return {
      xNormalized: isSet(object.xNormalized) ? Number(object.xNormalized) : 0,
      yNormalized: isSet(object.yNormalized) ? Number(object.yNormalized) : 0,
    };
  },

  toJSON(message: CShowCursorMsg): unknown {
    const obj: any = {};
    message.xNormalized !== undefined && (obj.xNormalized = message.xNormalized);
    message.yNormalized !== undefined && (obj.yNormalized = message.yNormalized);
    return obj;
  },

  create<I extends Exact<DeepPartial<CShowCursorMsg>, I>>(base?: I): CShowCursorMsg {
    return CShowCursorMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShowCursorMsg>, I>>(object: I): CShowCursorMsg {
    const message = createBaseCShowCursorMsg();
    message.xNormalized = object.xNormalized ?? 0;
    message.yNormalized = object.yNormalized ?? 0;
    return message;
  },
};

function createBaseCHideCursorMsg(): CHideCursorMsg {
  return {};
}

export const CHideCursorMsg = {
  encode(_: CHideCursorMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHideCursorMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHideCursorMsg();
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

  fromJSON(_: any): CHideCursorMsg {
    return {};
  },

  toJSON(_: CHideCursorMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CHideCursorMsg>, I>>(base?: I): CHideCursorMsg {
    return CHideCursorMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHideCursorMsg>, I>>(_: I): CHideCursorMsg {
    const message = createBaseCHideCursorMsg();
    return message;
  },
};

function createBaseCSetCursorMsg(): CSetCursorMsg {
  return { cursorId: "0" };
}

export const CSetCursorMsg = {
  encode(message: CSetCursorMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cursorId !== "0") {
      writer.uint32(8).uint64(message.cursorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetCursorMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetCursorMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cursorId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetCursorMsg {
    return { cursorId: isSet(object.cursorId) ? String(object.cursorId) : "0" };
  },

  toJSON(message: CSetCursorMsg): unknown {
    const obj: any = {};
    message.cursorId !== undefined && (obj.cursorId = message.cursorId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetCursorMsg>, I>>(base?: I): CSetCursorMsg {
    return CSetCursorMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetCursorMsg>, I>>(object: I): CSetCursorMsg {
    const message = createBaseCSetCursorMsg();
    message.cursorId = object.cursorId ?? "0";
    return message;
  },
};

function createBaseCGetCursorImageMsg(): CGetCursorImageMsg {
  return { cursorId: "0" };
}

export const CGetCursorImageMsg = {
  encode(message: CGetCursorImageMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cursorId !== "0") {
      writer.uint32(8).uint64(message.cursorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGetCursorImageMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGetCursorImageMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cursorId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGetCursorImageMsg {
    return { cursorId: isSet(object.cursorId) ? String(object.cursorId) : "0" };
  },

  toJSON(message: CGetCursorImageMsg): unknown {
    const obj: any = {};
    message.cursorId !== undefined && (obj.cursorId = message.cursorId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGetCursorImageMsg>, I>>(base?: I): CGetCursorImageMsg {
    return CGetCursorImageMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGetCursorImageMsg>, I>>(object: I): CGetCursorImageMsg {
    const message = createBaseCGetCursorImageMsg();
    message.cursorId = object.cursorId ?? "0";
    return message;
  },
};

function createBaseCSetCursorImageMsg(): CSetCursorImageMsg {
  return { cursorId: "0", width: 0, height: 0, hotX: 0, hotY: 0, image: Buffer.alloc(0) };
}

export const CSetCursorImageMsg = {
  encode(message: CSetCursorImageMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cursorId !== "0") {
      writer.uint32(8).uint64(message.cursorId);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    if (message.hotX !== 0) {
      writer.uint32(32).int32(message.hotX);
    }
    if (message.hotY !== 0) {
      writer.uint32(40).int32(message.hotY);
    }
    if (message.image.length !== 0) {
      writer.uint32(50).bytes(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetCursorImageMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetCursorImageMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cursorId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.width = reader.int32();
          break;
        case 3:
          message.height = reader.int32();
          break;
        case 4:
          message.hotX = reader.int32();
          break;
        case 5:
          message.hotY = reader.int32();
          break;
        case 6:
          message.image = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetCursorImageMsg {
    return {
      cursorId: isSet(object.cursorId) ? String(object.cursorId) : "0",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      hotX: isSet(object.hotX) ? Number(object.hotX) : 0,
      hotY: isSet(object.hotY) ? Number(object.hotY) : 0,
      image: isSet(object.image) ? Buffer.from(bytesFromBase64(object.image)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSetCursorImageMsg): unknown {
    const obj: any = {};
    message.cursorId !== undefined && (obj.cursorId = message.cursorId);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.hotX !== undefined && (obj.hotX = Math.round(message.hotX));
    message.hotY !== undefined && (obj.hotY = Math.round(message.hotY));
    message.image !== undefined &&
      (obj.image = base64FromBytes(message.image !== undefined ? message.image : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetCursorImageMsg>, I>>(base?: I): CSetCursorImageMsg {
    return CSetCursorImageMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetCursorImageMsg>, I>>(object: I): CSetCursorImageMsg {
    const message = createBaseCSetCursorImageMsg();
    message.cursorId = object.cursorId ?? "0";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.hotX = object.hotX ?? 0;
    message.hotY = object.hotY ?? 0;
    message.image = object.image ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCVideoDecoderInfoMsg(): CVideoDecoderInfoMsg {
  return { info: "", threads: 0 };
}

export const CVideoDecoderInfoMsg = {
  encode(message: CVideoDecoderInfoMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== "") {
      writer.uint32(10).string(message.info);
    }
    if (message.threads !== 0) {
      writer.uint32(16).int32(message.threads);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoDecoderInfoMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoDecoderInfoMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = reader.string();
          break;
        case 2:
          message.threads = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoDecoderInfoMsg {
    return {
      info: isSet(object.info) ? String(object.info) : "",
      threads: isSet(object.threads) ? Number(object.threads) : 0,
    };
  },

  toJSON(message: CVideoDecoderInfoMsg): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info);
    message.threads !== undefined && (obj.threads = Math.round(message.threads));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoDecoderInfoMsg>, I>>(base?: I): CVideoDecoderInfoMsg {
    return CVideoDecoderInfoMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoDecoderInfoMsg>, I>>(object: I): CVideoDecoderInfoMsg {
    const message = createBaseCVideoDecoderInfoMsg();
    message.info = object.info ?? "";
    message.threads = object.threads ?? 0;
    return message;
  },
};

function createBaseCVideoEncoderInfoMsg(): CVideoEncoderInfoMsg {
  return { info: "" };
}

export const CVideoEncoderInfoMsg = {
  encode(message: CVideoEncoderInfoMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== "") {
      writer.uint32(10).string(message.info);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoEncoderInfoMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoEncoderInfoMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoEncoderInfoMsg {
    return { info: isSet(object.info) ? String(object.info) : "" };
  },

  toJSON(message: CVideoEncoderInfoMsg): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoEncoderInfoMsg>, I>>(base?: I): CVideoEncoderInfoMsg {
    return CVideoEncoderInfoMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoEncoderInfoMsg>, I>>(object: I): CVideoEncoderInfoMsg {
    const message = createBaseCVideoEncoderInfoMsg();
    message.info = object.info ?? "";
    return message;
  },
};

function createBaseCPauseMsg(): CPauseMsg {
  return {};
}

export const CPauseMsg = {
  encode(_: CPauseMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPauseMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPauseMsg();
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

  fromJSON(_: any): CPauseMsg {
    return {};
  },

  toJSON(_: CPauseMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPauseMsg>, I>>(base?: I): CPauseMsg {
    return CPauseMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPauseMsg>, I>>(_: I): CPauseMsg {
    const message = createBaseCPauseMsg();
    return message;
  },
};

function createBaseCResumeMsg(): CResumeMsg {
  return {};
}

export const CResumeMsg = {
  encode(_: CResumeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CResumeMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCResumeMsg();
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

  fromJSON(_: any): CResumeMsg {
    return {};
  },

  toJSON(_: CResumeMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CResumeMsg>, I>>(base?: I): CResumeMsg {
    return CResumeMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CResumeMsg>, I>>(_: I): CResumeMsg {
    const message = createBaseCResumeMsg();
    return message;
  },
};

function createBaseCEnableHighResCaptureMsg(): CEnableHighResCaptureMsg {
  return {};
}

export const CEnableHighResCaptureMsg = {
  encode(_: CEnableHighResCaptureMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEnableHighResCaptureMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEnableHighResCaptureMsg();
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

  fromJSON(_: any): CEnableHighResCaptureMsg {
    return {};
  },

  toJSON(_: CEnableHighResCaptureMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CEnableHighResCaptureMsg>, I>>(base?: I): CEnableHighResCaptureMsg {
    return CEnableHighResCaptureMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEnableHighResCaptureMsg>, I>>(_: I): CEnableHighResCaptureMsg {
    const message = createBaseCEnableHighResCaptureMsg();
    return message;
  },
};

function createBaseCDisableHighResCaptureMsg(): CDisableHighResCaptureMsg {
  return {};
}

export const CDisableHighResCaptureMsg = {
  encode(_: CDisableHighResCaptureMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDisableHighResCaptureMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDisableHighResCaptureMsg();
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

  fromJSON(_: any): CDisableHighResCaptureMsg {
    return {};
  },

  toJSON(_: CDisableHighResCaptureMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDisableHighResCaptureMsg>, I>>(base?: I): CDisableHighResCaptureMsg {
    return CDisableHighResCaptureMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDisableHighResCaptureMsg>, I>>(_: I): CDisableHighResCaptureMsg {
    const message = createBaseCDisableHighResCaptureMsg();
    return message;
  },
};

function createBaseCEnableNeptuneDataMsg(): CEnableNeptuneDataMsg {
  return {};
}

export const CEnableNeptuneDataMsg = {
  encode(_: CEnableNeptuneDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEnableNeptuneDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEnableNeptuneDataMsg();
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

  fromJSON(_: any): CEnableNeptuneDataMsg {
    return {};
  },

  toJSON(_: CEnableNeptuneDataMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CEnableNeptuneDataMsg>, I>>(base?: I): CEnableNeptuneDataMsg {
    return CEnableNeptuneDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEnableNeptuneDataMsg>, I>>(_: I): CEnableNeptuneDataMsg {
    const message = createBaseCEnableNeptuneDataMsg();
    return message;
  },
};

function createBaseCDisableNeptuneDataMsg(): CDisableNeptuneDataMsg {
  return {};
}

export const CDisableNeptuneDataMsg = {
  encode(_: CDisableNeptuneDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDisableNeptuneDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDisableNeptuneDataMsg();
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

  fromJSON(_: any): CDisableNeptuneDataMsg {
    return {};
  },

  toJSON(_: CDisableNeptuneDataMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CDisableNeptuneDataMsg>, I>>(base?: I): CDisableNeptuneDataMsg {
    return CDisableNeptuneDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDisableNeptuneDataMsg>, I>>(_: I): CDisableNeptuneDataMsg {
    const message = createBaseCDisableNeptuneDataMsg();
    return message;
  },
};

function createBaseCToggleMagnificationMsg(): CToggleMagnificationMsg {
  return {};
}

export const CToggleMagnificationMsg = {
  encode(_: CToggleMagnificationMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CToggleMagnificationMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCToggleMagnificationMsg();
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

  fromJSON(_: any): CToggleMagnificationMsg {
    return {};
  },

  toJSON(_: CToggleMagnificationMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CToggleMagnificationMsg>, I>>(base?: I): CToggleMagnificationMsg {
    return CToggleMagnificationMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CToggleMagnificationMsg>, I>>(_: I): CToggleMagnificationMsg {
    const message = createBaseCToggleMagnificationMsg();
    return message;
  },
};

function createBaseCSetCapslockMsg(): CSetCapslockMsg {
  return { pressed: false };
}

export const CSetCapslockMsg = {
  encode(message: CSetCapslockMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pressed === true) {
      writer.uint32(8).bool(message.pressed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetCapslockMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetCapslockMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pressed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetCapslockMsg {
    return { pressed: isSet(object.pressed) ? Boolean(object.pressed) : false };
  },

  toJSON(message: CSetCapslockMsg): unknown {
    const obj: any = {};
    message.pressed !== undefined && (obj.pressed = message.pressed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetCapslockMsg>, I>>(base?: I): CSetCapslockMsg {
    return CSetCapslockMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetCapslockMsg>, I>>(object: I): CSetCapslockMsg {
    const message = createBaseCSetCapslockMsg();
    message.pressed = object.pressed ?? false;
    return message;
  },
};

function createBaseCStreamingKeymapEntry(): CStreamingKeymapEntry {
  return {
    scancode: 0,
    normalKeycode: 0,
    shiftKeycode: 0,
    capslockKeycode: 0,
    shiftCapslockKeycode: 0,
    altgrKeycode: 0,
    altgrShiftKeycode: 0,
    altgrCapslockKeycode: 0,
    altgrShiftCapslockKeycode: 0,
  };
}

export const CStreamingKeymapEntry = {
  encode(message: CStreamingKeymapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scancode !== 0) {
      writer.uint32(8).int32(message.scancode);
    }
    if (message.normalKeycode !== 0) {
      writer.uint32(16).int32(message.normalKeycode);
    }
    if (message.shiftKeycode !== 0) {
      writer.uint32(24).int32(message.shiftKeycode);
    }
    if (message.capslockKeycode !== 0) {
      writer.uint32(32).int32(message.capslockKeycode);
    }
    if (message.shiftCapslockKeycode !== 0) {
      writer.uint32(40).int32(message.shiftCapslockKeycode);
    }
    if (message.altgrKeycode !== 0) {
      writer.uint32(48).int32(message.altgrKeycode);
    }
    if (message.altgrShiftKeycode !== 0) {
      writer.uint32(56).int32(message.altgrShiftKeycode);
    }
    if (message.altgrCapslockKeycode !== 0) {
      writer.uint32(64).int32(message.altgrCapslockKeycode);
    }
    if (message.altgrShiftCapslockKeycode !== 0) {
      writer.uint32(72).int32(message.altgrShiftCapslockKeycode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingKeymapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingKeymapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scancode = reader.int32();
          break;
        case 2:
          message.normalKeycode = reader.int32();
          break;
        case 3:
          message.shiftKeycode = reader.int32();
          break;
        case 4:
          message.capslockKeycode = reader.int32();
          break;
        case 5:
          message.shiftCapslockKeycode = reader.int32();
          break;
        case 6:
          message.altgrKeycode = reader.int32();
          break;
        case 7:
          message.altgrShiftKeycode = reader.int32();
          break;
        case 8:
          message.altgrCapslockKeycode = reader.int32();
          break;
        case 9:
          message.altgrShiftCapslockKeycode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingKeymapEntry {
    return {
      scancode: isSet(object.scancode) ? Number(object.scancode) : 0,
      normalKeycode: isSet(object.normalKeycode) ? Number(object.normalKeycode) : 0,
      shiftKeycode: isSet(object.shiftKeycode) ? Number(object.shiftKeycode) : 0,
      capslockKeycode: isSet(object.capslockKeycode) ? Number(object.capslockKeycode) : 0,
      shiftCapslockKeycode: isSet(object.shiftCapslockKeycode) ? Number(object.shiftCapslockKeycode) : 0,
      altgrKeycode: isSet(object.altgrKeycode) ? Number(object.altgrKeycode) : 0,
      altgrShiftKeycode: isSet(object.altgrShiftKeycode) ? Number(object.altgrShiftKeycode) : 0,
      altgrCapslockKeycode: isSet(object.altgrCapslockKeycode) ? Number(object.altgrCapslockKeycode) : 0,
      altgrShiftCapslockKeycode: isSet(object.altgrShiftCapslockKeycode) ? Number(object.altgrShiftCapslockKeycode) : 0,
    };
  },

  toJSON(message: CStreamingKeymapEntry): unknown {
    const obj: any = {};
    message.scancode !== undefined && (obj.scancode = Math.round(message.scancode));
    message.normalKeycode !== undefined && (obj.normalKeycode = Math.round(message.normalKeycode));
    message.shiftKeycode !== undefined && (obj.shiftKeycode = Math.round(message.shiftKeycode));
    message.capslockKeycode !== undefined && (obj.capslockKeycode = Math.round(message.capslockKeycode));
    message.shiftCapslockKeycode !== undefined && (obj.shiftCapslockKeycode = Math.round(message.shiftCapslockKeycode));
    message.altgrKeycode !== undefined && (obj.altgrKeycode = Math.round(message.altgrKeycode));
    message.altgrShiftKeycode !== undefined && (obj.altgrShiftKeycode = Math.round(message.altgrShiftKeycode));
    message.altgrCapslockKeycode !== undefined && (obj.altgrCapslockKeycode = Math.round(message.altgrCapslockKeycode));
    message.altgrShiftCapslockKeycode !== undefined &&
      (obj.altgrShiftCapslockKeycode = Math.round(message.altgrShiftCapslockKeycode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingKeymapEntry>, I>>(base?: I): CStreamingKeymapEntry {
    return CStreamingKeymapEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingKeymapEntry>, I>>(object: I): CStreamingKeymapEntry {
    const message = createBaseCStreamingKeymapEntry();
    message.scancode = object.scancode ?? 0;
    message.normalKeycode = object.normalKeycode ?? 0;
    message.shiftKeycode = object.shiftKeycode ?? 0;
    message.capslockKeycode = object.capslockKeycode ?? 0;
    message.shiftCapslockKeycode = object.shiftCapslockKeycode ?? 0;
    message.altgrKeycode = object.altgrKeycode ?? 0;
    message.altgrShiftKeycode = object.altgrShiftKeycode ?? 0;
    message.altgrCapslockKeycode = object.altgrCapslockKeycode ?? 0;
    message.altgrShiftCapslockKeycode = object.altgrShiftCapslockKeycode ?? 0;
    return message;
  },
};

function createBaseCStreamingKeymap(): CStreamingKeymap {
  return { entries: [] };
}

export const CStreamingKeymap = {
  encode(message: CStreamingKeymap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      CStreamingKeymapEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingKeymap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingKeymap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CStreamingKeymapEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingKeymap {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CStreamingKeymapEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: CStreamingKeymap): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CStreamingKeymapEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingKeymap>, I>>(base?: I): CStreamingKeymap {
    return CStreamingKeymap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingKeymap>, I>>(object: I): CStreamingKeymap {
    const message = createBaseCStreamingKeymap();
    message.entries = object.entries?.map((e) => CStreamingKeymapEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSetKeymapMsg(): CSetKeymapMsg {
  return { keymap: undefined };
}

export const CSetKeymapMsg = {
  encode(message: CSetKeymapMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keymap !== undefined) {
      CStreamingKeymap.encode(message.keymap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetKeymapMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetKeymapMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keymap = CStreamingKeymap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetKeymapMsg {
    return { keymap: isSet(object.keymap) ? CStreamingKeymap.fromJSON(object.keymap) : undefined };
  },

  toJSON(message: CSetKeymapMsg): unknown {
    const obj: any = {};
    message.keymap !== undefined && (obj.keymap = message.keymap ? CStreamingKeymap.toJSON(message.keymap) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetKeymapMsg>, I>>(base?: I): CSetKeymapMsg {
    return CSetKeymapMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetKeymapMsg>, I>>(object: I): CSetKeymapMsg {
    const message = createBaseCSetKeymapMsg();
    message.keymap = (object.keymap !== undefined && object.keymap !== null)
      ? CStreamingKeymap.fromPartial(object.keymap)
      : undefined;
    return message;
  },
};

function createBaseCStopRequest(): CStopRequest {
  return {};
}

export const CStopRequest = {
  encode(_: CStopRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStopRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStopRequest();
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

  fromJSON(_: any): CStopRequest {
    return {};
  },

  toJSON(_: CStopRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CStopRequest>, I>>(base?: I): CStopRequest {
    return CStopRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStopRequest>, I>>(_: I): CStopRequest {
    const message = createBaseCStopRequest();
    return message;
  },
};

function createBaseCQuitRequest(): CQuitRequest {
  return {};
}

export const CQuitRequest = {
  encode(_: CQuitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CQuitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCQuitRequest();
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

  fromJSON(_: any): CQuitRequest {
    return {};
  },

  toJSON(_: CQuitRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CQuitRequest>, I>>(base?: I): CQuitRequest {
    return CQuitRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CQuitRequest>, I>>(_: I): CQuitRequest {
    const message = createBaseCQuitRequest();
    return message;
  },
};

function createBaseCDeleteCursorMsg(): CDeleteCursorMsg {
  return { cursorId: "0" };
}

export const CDeleteCursorMsg = {
  encode(message: CDeleteCursorMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cursorId !== "0") {
      writer.uint32(8).uint64(message.cursorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDeleteCursorMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDeleteCursorMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cursorId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDeleteCursorMsg {
    return { cursorId: isSet(object.cursorId) ? String(object.cursorId) : "0" };
  },

  toJSON(message: CDeleteCursorMsg): unknown {
    const obj: any = {};
    message.cursorId !== undefined && (obj.cursorId = message.cursorId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDeleteCursorMsg>, I>>(base?: I): CDeleteCursorMsg {
    return CDeleteCursorMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDeleteCursorMsg>, I>>(object: I): CDeleteCursorMsg {
    const message = createBaseCDeleteCursorMsg();
    message.cursorId = object.cursorId ?? "0";
    return message;
  },
};

function createBaseCSetStreamingClientConfig(): CSetStreamingClientConfig {
  return { config: undefined };
}

export const CSetStreamingClientConfig = {
  encode(message: CSetStreamingClientConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      CStreamingClientConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetStreamingClientConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetStreamingClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = CStreamingClientConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetStreamingClientConfig {
    return { config: isSet(object.config) ? CStreamingClientConfig.fromJSON(object.config) : undefined };
  },

  toJSON(message: CSetStreamingClientConfig): unknown {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config ? CStreamingClientConfig.toJSON(message.config) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetStreamingClientConfig>, I>>(base?: I): CSetStreamingClientConfig {
    return CSetStreamingClientConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetStreamingClientConfig>, I>>(object: I): CSetStreamingClientConfig {
    const message = createBaseCSetStreamingClientConfig();
    message.config = (object.config !== undefined && object.config !== null)
      ? CStreamingClientConfig.fromPartial(object.config)
      : undefined;
    return message;
  },
};

function createBaseCSetQoSMsg(): CSetQoSMsg {
  return { useQos: false };
}

export const CSetQoSMsg = {
  encode(message: CSetQoSMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useQos === true) {
      writer.uint32(8).bool(message.useQos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetQoSMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetQoSMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useQos = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetQoSMsg {
    return { useQos: isSet(object.useQos) ? Boolean(object.useQos) : false };
  },

  toJSON(message: CSetQoSMsg): unknown {
    const obj: any = {};
    message.useQos !== undefined && (obj.useQos = message.useQos);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetQoSMsg>, I>>(base?: I): CSetQoSMsg {
    return CSetQoSMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetQoSMsg>, I>>(object: I): CSetQoSMsg {
    const message = createBaseCSetQoSMsg();
    message.useQos = object.useQos ?? false;
    return message;
  },
};

function createBaseCSetTargetFramerateMsg(): CSetTargetFramerateMsg {
  return { framerate: 0, reasons: 0, framerateNumerator: 0, framerateDenominator: 0 };
}

export const CSetTargetFramerateMsg = {
  encode(message: CSetTargetFramerateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.framerate !== 0) {
      writer.uint32(8).uint32(message.framerate);
    }
    if (message.reasons !== 0) {
      writer.uint32(16).uint32(message.reasons);
    }
    if (message.framerateNumerator !== 0) {
      writer.uint32(24).uint32(message.framerateNumerator);
    }
    if (message.framerateDenominator !== 0) {
      writer.uint32(32).uint32(message.framerateDenominator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetTargetFramerateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetTargetFramerateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.framerate = reader.uint32();
          break;
        case 2:
          message.reasons = reader.uint32();
          break;
        case 3:
          message.framerateNumerator = reader.uint32();
          break;
        case 4:
          message.framerateDenominator = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetTargetFramerateMsg {
    return {
      framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
      reasons: isSet(object.reasons) ? Number(object.reasons) : 0,
      framerateNumerator: isSet(object.framerateNumerator) ? Number(object.framerateNumerator) : 0,
      framerateDenominator: isSet(object.framerateDenominator) ? Number(object.framerateDenominator) : 0,
    };
  },

  toJSON(message: CSetTargetFramerateMsg): unknown {
    const obj: any = {};
    message.framerate !== undefined && (obj.framerate = Math.round(message.framerate));
    message.reasons !== undefined && (obj.reasons = Math.round(message.reasons));
    message.framerateNumerator !== undefined && (obj.framerateNumerator = Math.round(message.framerateNumerator));
    message.framerateDenominator !== undefined && (obj.framerateDenominator = Math.round(message.framerateDenominator));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetTargetFramerateMsg>, I>>(base?: I): CSetTargetFramerateMsg {
    return CSetTargetFramerateMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetTargetFramerateMsg>, I>>(object: I): CSetTargetFramerateMsg {
    const message = createBaseCSetTargetFramerateMsg();
    message.framerate = object.framerate ?? 0;
    message.reasons = object.reasons ?? 0;
    message.framerateNumerator = object.framerateNumerator ?? 0;
    message.framerateDenominator = object.framerateDenominator ?? 0;
    return message;
  },
};

function createBaseCSetTargetBitrateMsg(): CSetTargetBitrateMsg {
  return { bitrate: 0 };
}

export const CSetTargetBitrateMsg = {
  encode(message: CSetTargetBitrateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitrate !== 0) {
      writer.uint32(8).int32(message.bitrate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetTargetBitrateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetTargetBitrateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitrate = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetTargetBitrateMsg {
    return { bitrate: isSet(object.bitrate) ? Number(object.bitrate) : 0 };
  },

  toJSON(message: CSetTargetBitrateMsg): unknown {
    const obj: any = {};
    message.bitrate !== undefined && (obj.bitrate = Math.round(message.bitrate));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetTargetBitrateMsg>, I>>(base?: I): CSetTargetBitrateMsg {
    return CSetTargetBitrateMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetTargetBitrateMsg>, I>>(object: I): CSetTargetBitrateMsg {
    const message = createBaseCSetTargetBitrateMsg();
    message.bitrate = object.bitrate ?? 0;
    return message;
  },
};

function createBaseCOverlayEnabledMsg(): COverlayEnabledMsg {
  return { enabled: false };
}

export const COverlayEnabledMsg = {
  encode(message: COverlayEnabledMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COverlayEnabledMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOverlayEnabledMsg();
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

  fromJSON(object: any): COverlayEnabledMsg {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: COverlayEnabledMsg): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<COverlayEnabledMsg>, I>>(base?: I): COverlayEnabledMsg {
    return COverlayEnabledMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<COverlayEnabledMsg>, I>>(object: I): COverlayEnabledMsg {
    const message = createBaseCOverlayEnabledMsg();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCSetGammaRampMsg(): CSetGammaRampMsg {
  return { gammaRamp: Buffer.alloc(0) };
}

export const CSetGammaRampMsg = {
  encode(message: CSetGammaRampMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gammaRamp.length !== 0) {
      writer.uint32(10).bytes(message.gammaRamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetGammaRampMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetGammaRampMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gammaRamp = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetGammaRampMsg {
    return { gammaRamp: isSet(object.gammaRamp) ? Buffer.from(bytesFromBase64(object.gammaRamp)) : Buffer.alloc(0) };
  },

  toJSON(message: CSetGammaRampMsg): unknown {
    const obj: any = {};
    message.gammaRamp !== undefined &&
      (obj.gammaRamp = base64FromBytes(message.gammaRamp !== undefined ? message.gammaRamp : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetGammaRampMsg>, I>>(base?: I): CSetGammaRampMsg {
    return CSetGammaRampMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetGammaRampMsg>, I>>(object: I): CSetGammaRampMsg {
    const message = createBaseCSetGammaRampMsg();
    message.gammaRamp = object.gammaRamp ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSetActivityMsg(): CSetActivityMsg {
  return { activity: 1, appid: 0, gameid: "0", gameName: "" };
}

export const CSetActivityMsg = {
  encode(message: CSetActivityMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.activity !== 1) {
      writer.uint32(8).int32(message.activity);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.gameid !== "0") {
      writer.uint32(24).uint64(message.gameid);
    }
    if (message.gameName !== "") {
      writer.uint32(34).string(message.gameName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetActivityMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetActivityMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activity = reader.int32() as any;
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.gameid = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.gameName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetActivityMsg {
    return {
      activity: isSet(object.activity) ? eStreamActivityFromJSON(object.activity) : 1,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameid: isSet(object.gameid) ? String(object.gameid) : "0",
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
    };
  },

  toJSON(message: CSetActivityMsg): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = eStreamActivityToJSON(message.activity));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameid !== undefined && (obj.gameid = message.gameid);
    message.gameName !== undefined && (obj.gameName = message.gameName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetActivityMsg>, I>>(base?: I): CSetActivityMsg {
    return CSetActivityMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetActivityMsg>, I>>(object: I): CSetActivityMsg {
    const message = createBaseCSetActivityMsg();
    message.activity = object.activity ?? 1;
    message.appid = object.appid ?? 0;
    message.gameid = object.gameid ?? "0";
    message.gameName = object.gameName ?? "";
    return message;
  },
};

function createBaseCSystemSuspendMsg(): CSystemSuspendMsg {
  return {};
}

export const CSystemSuspendMsg = {
  encode(_: CSystemSuspendMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSystemSuspendMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSystemSuspendMsg();
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

  fromJSON(_: any): CSystemSuspendMsg {
    return {};
  },

  toJSON(_: CSystemSuspendMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSystemSuspendMsg>, I>>(base?: I): CSystemSuspendMsg {
    return CSystemSuspendMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSystemSuspendMsg>, I>>(_: I): CSystemSuspendMsg {
    const message = createBaseCSystemSuspendMsg();
    return message;
  },
};

function createBaseCVirtualHereRequestMsg(): CVirtualHereRequestMsg {
  return { hostname: "" };
}

export const CVirtualHereRequestMsg = {
  encode(message: CVirtualHereRequestMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualHereRequestMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualHereRequestMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualHereRequestMsg {
    return { hostname: isSet(object.hostname) ? String(object.hostname) : "" };
  },

  toJSON(message: CVirtualHereRequestMsg): unknown {
    const obj: any = {};
    message.hostname !== undefined && (obj.hostname = message.hostname);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualHereRequestMsg>, I>>(base?: I): CVirtualHereRequestMsg {
    return CVirtualHereRequestMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualHereRequestMsg>, I>>(object: I): CVirtualHereRequestMsg {
    const message = createBaseCVirtualHereRequestMsg();
    message.hostname = object.hostname ?? "";
    return message;
  },
};

function createBaseCVirtualHereReadyMsg(): CVirtualHereReadyMsg {
  return { licensedDeviceCount: 0 };
}

export const CVirtualHereReadyMsg = {
  encode(message: CVirtualHereReadyMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.licensedDeviceCount !== 0) {
      writer.uint32(8).uint32(message.licensedDeviceCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualHereReadyMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualHereReadyMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.licensedDeviceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualHereReadyMsg {
    return { licensedDeviceCount: isSet(object.licensedDeviceCount) ? Number(object.licensedDeviceCount) : 0 };
  },

  toJSON(message: CVirtualHereReadyMsg): unknown {
    const obj: any = {};
    message.licensedDeviceCount !== undefined && (obj.licensedDeviceCount = Math.round(message.licensedDeviceCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualHereReadyMsg>, I>>(base?: I): CVirtualHereReadyMsg {
    return CVirtualHereReadyMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualHereReadyMsg>, I>>(object: I): CVirtualHereReadyMsg {
    const message = createBaseCVirtualHereReadyMsg();
    message.licensedDeviceCount = object.licensedDeviceCount ?? 0;
    return message;
  },
};

function createBaseCVirtualHereShareDeviceMsg(): CVirtualHereShareDeviceMsg {
  return { deviceAddress: "" };
}

export const CVirtualHereShareDeviceMsg = {
  encode(message: CVirtualHereShareDeviceMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceAddress !== "") {
      writer.uint32(10).string(message.deviceAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualHereShareDeviceMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualHereShareDeviceMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualHereShareDeviceMsg {
    return { deviceAddress: isSet(object.deviceAddress) ? String(object.deviceAddress) : "" };
  },

  toJSON(message: CVirtualHereShareDeviceMsg): unknown {
    const obj: any = {};
    message.deviceAddress !== undefined && (obj.deviceAddress = message.deviceAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualHereShareDeviceMsg>, I>>(base?: I): CVirtualHereShareDeviceMsg {
    return CVirtualHereShareDeviceMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualHereShareDeviceMsg>, I>>(object: I): CVirtualHereShareDeviceMsg {
    const message = createBaseCVirtualHereShareDeviceMsg();
    message.deviceAddress = object.deviceAddress ?? "";
    return message;
  },
};

function createBaseCSetSpectatorModeMsg(): CSetSpectatorModeMsg {
  return { enabled: false };
}

export const CSetSpectatorModeMsg = {
  encode(message: CSetSpectatorModeMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetSpectatorModeMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetSpectatorModeMsg();
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

  fromJSON(object: any): CSetSpectatorModeMsg {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: CSetSpectatorModeMsg): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetSpectatorModeMsg>, I>>(base?: I): CSetSpectatorModeMsg {
    return CSetSpectatorModeMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetSpectatorModeMsg>, I>>(object: I): CSetSpectatorModeMsg {
    const message = createBaseCSetSpectatorModeMsg();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseCRemoteHIDMsg(): CRemoteHIDMsg {
  return { data: Buffer.alloc(0), activeInput: false };
}

export const CRemoteHIDMsg = {
  encode(message: CRemoteHIDMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.activeInput === true) {
      writer.uint32(16).bool(message.activeInput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoteHIDMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoteHIDMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        case 2:
          message.activeInput = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoteHIDMsg {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      activeInput: isSet(object.activeInput) ? Boolean(object.activeInput) : false,
    };
  },

  toJSON(message: CRemoteHIDMsg): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.activeInput !== undefined && (obj.activeInput = message.activeInput);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoteHIDMsg>, I>>(base?: I): CRemoteHIDMsg {
    return CRemoteHIDMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoteHIDMsg>, I>>(object: I): CRemoteHIDMsg {
    const message = createBaseCRemoteHIDMsg();
    message.data = object.data ?? Buffer.alloc(0);
    message.activeInput = object.activeInput ?? false;
    return message;
  },
};

function createBaseCTouchConfigActiveMsg(): CTouchConfigActiveMsg {
  return { appid: 0, revision: 0, creator: "0" };
}

export const CTouchConfigActiveMsg = {
  encode(message: CTouchConfigActiveMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    if (message.creator !== "0") {
      writer.uint32(24).uint64(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTouchConfigActiveMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTouchConfigActiveMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.revision = reader.uint32();
          break;
        case 3:
          message.creator = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTouchConfigActiveMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "0",
    };
  },

  toJSON(message: CTouchConfigActiveMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTouchConfigActiveMsg>, I>>(base?: I): CTouchConfigActiveMsg {
    return CTouchConfigActiveMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTouchConfigActiveMsg>, I>>(object: I): CTouchConfigActiveMsg {
    const message = createBaseCTouchConfigActiveMsg();
    message.appid = object.appid ?? 0;
    message.revision = object.revision ?? 0;
    message.creator = object.creator ?? "0";
    return message;
  },
};

function createBaseCGetTouchConfigDataMsg(): CGetTouchConfigDataMsg {
  return { appid: 0 };
}

export const CGetTouchConfigDataMsg = {
  encode(message: CGetTouchConfigDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGetTouchConfigDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGetTouchConfigDataMsg();
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

  fromJSON(object: any): CGetTouchConfigDataMsg {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CGetTouchConfigDataMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CGetTouchConfigDataMsg>, I>>(base?: I): CGetTouchConfigDataMsg {
    return CGetTouchConfigDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGetTouchConfigDataMsg>, I>>(object: I): CGetTouchConfigDataMsg {
    const message = createBaseCGetTouchConfigDataMsg();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCSetTouchConfigDataMsg(): CSetTouchConfigDataMsg {
  return { appid: 0, revision: 0, data: Buffer.alloc(0), layout: Buffer.alloc(0), creator: "0" };
}

export const CSetTouchConfigDataMsg = {
  encode(message: CSetTouchConfigDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.revision !== 0) {
      writer.uint32(16).uint32(message.revision);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.layout.length !== 0) {
      writer.uint32(34).bytes(message.layout);
    }
    if (message.creator !== "0") {
      writer.uint32(40).uint64(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetTouchConfigDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetTouchConfigDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.revision = reader.uint32();
          break;
        case 3:
          message.data = reader.bytes() as Buffer;
          break;
        case 4:
          message.layout = reader.bytes() as Buffer;
          break;
        case 5:
          message.creator = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetTouchConfigDataMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      revision: isSet(object.revision) ? Number(object.revision) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
      layout: isSet(object.layout) ? Buffer.from(bytesFromBase64(object.layout)) : Buffer.alloc(0),
      creator: isSet(object.creator) ? String(object.creator) : "0",
    };
  },

  toJSON(message: CSetTouchConfigDataMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.revision !== undefined && (obj.revision = Math.round(message.revision));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    message.layout !== undefined &&
      (obj.layout = base64FromBytes(message.layout !== undefined ? message.layout : Buffer.alloc(0)));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetTouchConfigDataMsg>, I>>(base?: I): CSetTouchConfigDataMsg {
    return CSetTouchConfigDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetTouchConfigDataMsg>, I>>(object: I): CSetTouchConfigDataMsg {
    const message = createBaseCSetTouchConfigDataMsg();
    message.appid = object.appid ?? 0;
    message.revision = object.revision ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    message.layout = object.layout ?? Buffer.alloc(0);
    message.creator = object.creator ?? "0";
    return message;
  },
};

function createBaseCSaveTouchConfigLayoutMsg(): CSaveTouchConfigLayoutMsg {
  return { appid: 0, layout: Buffer.alloc(0) };
}

export const CSaveTouchConfigLayoutMsg = {
  encode(message: CSaveTouchConfigLayoutMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.layout.length !== 0) {
      writer.uint32(34).bytes(message.layout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSaveTouchConfigLayoutMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSaveTouchConfigLayoutMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 4:
          message.layout = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSaveTouchConfigLayoutMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      layout: isSet(object.layout) ? Buffer.from(bytesFromBase64(object.layout)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSaveTouchConfigLayoutMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.layout !== undefined &&
      (obj.layout = base64FromBytes(message.layout !== undefined ? message.layout : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSaveTouchConfigLayoutMsg>, I>>(base?: I): CSaveTouchConfigLayoutMsg {
    return CSaveTouchConfigLayoutMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSaveTouchConfigLayoutMsg>, I>>(object: I): CSaveTouchConfigLayoutMsg {
    const message = createBaseCSaveTouchConfigLayoutMsg();
    message.appid = object.appid ?? 0;
    message.layout = object.layout ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCTouchActionSetActiveMsg(): CTouchActionSetActiveMsg {
  return { appid: 0, actionsetId: 0 };
}

export const CTouchActionSetActiveMsg = {
  encode(message: CTouchActionSetActiveMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.actionsetId !== 0) {
      writer.uint32(16).int32(message.actionsetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTouchActionSetActiveMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTouchActionSetActiveMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.actionsetId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTouchActionSetActiveMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      actionsetId: isSet(object.actionsetId) ? Number(object.actionsetId) : 0,
    };
  },

  toJSON(message: CTouchActionSetActiveMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.actionsetId !== undefined && (obj.actionsetId = Math.round(message.actionsetId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTouchActionSetActiveMsg>, I>>(base?: I): CTouchActionSetActiveMsg {
    return CTouchActionSetActiveMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTouchActionSetActiveMsg>, I>>(object: I): CTouchActionSetActiveMsg {
    const message = createBaseCTouchActionSetActiveMsg();
    message.appid = object.appid ?? 0;
    message.actionsetId = object.actionsetId ?? 0;
    return message;
  },
};

function createBaseCTouchActionSetLayerAddedMsg(): CTouchActionSetLayerAddedMsg {
  return { appid: 0, actionsetId: 0 };
}

export const CTouchActionSetLayerAddedMsg = {
  encode(message: CTouchActionSetLayerAddedMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.actionsetId !== 0) {
      writer.uint32(16).int32(message.actionsetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTouchActionSetLayerAddedMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTouchActionSetLayerAddedMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.actionsetId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTouchActionSetLayerAddedMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      actionsetId: isSet(object.actionsetId) ? Number(object.actionsetId) : 0,
    };
  },

  toJSON(message: CTouchActionSetLayerAddedMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.actionsetId !== undefined && (obj.actionsetId = Math.round(message.actionsetId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTouchActionSetLayerAddedMsg>, I>>(base?: I): CTouchActionSetLayerAddedMsg {
    return CTouchActionSetLayerAddedMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTouchActionSetLayerAddedMsg>, I>>(object: I): CTouchActionSetLayerAddedMsg {
    const message = createBaseCTouchActionSetLayerAddedMsg();
    message.appid = object.appid ?? 0;
    message.actionsetId = object.actionsetId ?? 0;
    return message;
  },
};

function createBaseCTouchActionSetLayerRemovedMsg(): CTouchActionSetLayerRemovedMsg {
  return { appid: 0, actionsetId: 0 };
}

export const CTouchActionSetLayerRemovedMsg = {
  encode(message: CTouchActionSetLayerRemovedMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.actionsetId !== 0) {
      writer.uint32(16).int32(message.actionsetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTouchActionSetLayerRemovedMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTouchActionSetLayerRemovedMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.actionsetId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTouchActionSetLayerRemovedMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      actionsetId: isSet(object.actionsetId) ? Number(object.actionsetId) : 0,
    };
  },

  toJSON(message: CTouchActionSetLayerRemovedMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.actionsetId !== undefined && (obj.actionsetId = Math.round(message.actionsetId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTouchActionSetLayerRemovedMsg>, I>>(base?: I): CTouchActionSetLayerRemovedMsg {
    return CTouchActionSetLayerRemovedMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTouchActionSetLayerRemovedMsg>, I>>(
    object: I,
  ): CTouchActionSetLayerRemovedMsg {
    const message = createBaseCTouchActionSetLayerRemovedMsg();
    message.appid = object.appid ?? 0;
    message.actionsetId = object.actionsetId ?? 0;
    return message;
  },
};

function createBaseCGetTouchIconDataMsg(): CGetTouchIconDataMsg {
  return { appid: 0, icon: "" };
}

export const CGetTouchIconDataMsg = {
  encode(message: CGetTouchIconDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.icon !== "") {
      writer.uint32(18).string(message.icon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CGetTouchIconDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCGetTouchIconDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.icon = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CGetTouchIconDataMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      icon: isSet(object.icon) ? String(object.icon) : "",
    };
  },

  toJSON(message: CGetTouchIconDataMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.icon !== undefined && (obj.icon = message.icon);
    return obj;
  },

  create<I extends Exact<DeepPartial<CGetTouchIconDataMsg>, I>>(base?: I): CGetTouchIconDataMsg {
    return CGetTouchIconDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CGetTouchIconDataMsg>, I>>(object: I): CGetTouchIconDataMsg {
    const message = createBaseCGetTouchIconDataMsg();
    message.appid = object.appid ?? 0;
    message.icon = object.icon ?? "";
    return message;
  },
};

function createBaseCSetTouchIconDataMsg(): CSetTouchIconDataMsg {
  return { appid: 0, icon: "", data: Buffer.alloc(0) };
}

export const CSetTouchIconDataMsg = {
  encode(message: CSetTouchIconDataMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.icon !== "") {
      writer.uint32(18).string(message.icon);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetTouchIconDataMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetTouchIconDataMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.icon = reader.string();
          break;
        case 3:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetTouchIconDataMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      icon: isSet(object.icon) ? String(object.icon) : "",
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CSetTouchIconDataMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.icon !== undefined && (obj.icon = message.icon);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetTouchIconDataMsg>, I>>(base?: I): CSetTouchIconDataMsg {
    return CSetTouchIconDataMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetTouchIconDataMsg>, I>>(object: I): CSetTouchIconDataMsg {
    const message = createBaseCSetTouchIconDataMsg();
    message.appid = object.appid ?? 0;
    message.icon = object.icon ?? "";
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCRemotePlayTogetherGroupUpdateMsg(): CRemotePlayTogetherGroupUpdateMsg {
  return { players: [], playerIndex: 0, miniprofileLocation: "", gameName: "", avatarLocation: "" };
}

export const CRemotePlayTogetherGroupUpdateMsg = {
  encode(message: CRemotePlayTogetherGroupUpdateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      CRemotePlayTogetherGroupUpdateMsg_Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.playerIndex !== 0) {
      writer.uint32(16).int32(message.playerIndex);
    }
    if (message.miniprofileLocation !== "") {
      writer.uint32(26).string(message.miniprofileLocation);
    }
    if (message.gameName !== "") {
      writer.uint32(34).string(message.gameName);
    }
    if (message.avatarLocation !== "") {
      writer.uint32(42).string(message.avatarLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherGroupUpdateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherGroupUpdateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(CRemotePlayTogetherGroupUpdateMsg_Player.decode(reader, reader.uint32()));
          break;
        case 2:
          message.playerIndex = reader.int32();
          break;
        case 3:
          message.miniprofileLocation = reader.string();
          break;
        case 4:
          message.gameName = reader.string();
          break;
        case 5:
          message.avatarLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherGroupUpdateMsg {
    return {
      players: Array.isArray(object?.players)
        ? object.players.map((e: any) => CRemotePlayTogetherGroupUpdateMsg_Player.fromJSON(e))
        : [],
      playerIndex: isSet(object.playerIndex) ? Number(object.playerIndex) : 0,
      miniprofileLocation: isSet(object.miniprofileLocation) ? String(object.miniprofileLocation) : "",
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      avatarLocation: isSet(object.avatarLocation) ? String(object.avatarLocation) : "",
    };
  },

  toJSON(message: CRemotePlayTogetherGroupUpdateMsg): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? CRemotePlayTogetherGroupUpdateMsg_Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    message.playerIndex !== undefined && (obj.playerIndex = Math.round(message.playerIndex));
    message.miniprofileLocation !== undefined && (obj.miniprofileLocation = message.miniprofileLocation);
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.avatarLocation !== undefined && (obj.avatarLocation = message.avatarLocation);
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherGroupUpdateMsg>, I>>(
    base?: I,
  ): CRemotePlayTogetherGroupUpdateMsg {
    return CRemotePlayTogetherGroupUpdateMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherGroupUpdateMsg>, I>>(
    object: I,
  ): CRemotePlayTogetherGroupUpdateMsg {
    const message = createBaseCRemotePlayTogetherGroupUpdateMsg();
    message.players = object.players?.map((e) => CRemotePlayTogetherGroupUpdateMsg_Player.fromPartial(e)) || [];
    message.playerIndex = object.playerIndex ?? 0;
    message.miniprofileLocation = object.miniprofileLocation ?? "";
    message.gameName = object.gameName ?? "";
    message.avatarLocation = object.avatarLocation ?? "";
    return message;
  },
};

function createBaseCRemotePlayTogetherGroupUpdateMsg_Player(): CRemotePlayTogetherGroupUpdateMsg_Player {
  return {
    accountid: 0,
    guestid: 0,
    keyboardEnabled: false,
    mouseEnabled: false,
    controllerEnabled: false,
    controllerSlots: [],
    avatarHash: Buffer.alloc(0),
  };
}

export const CRemotePlayTogetherGroupUpdateMsg_Player = {
  encode(message: CRemotePlayTogetherGroupUpdateMsg_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.guestid !== 0) {
      writer.uint32(16).uint32(message.guestid);
    }
    if (message.keyboardEnabled === true) {
      writer.uint32(24).bool(message.keyboardEnabled);
    }
    if (message.mouseEnabled === true) {
      writer.uint32(32).bool(message.mouseEnabled);
    }
    if (message.controllerEnabled === true) {
      writer.uint32(40).bool(message.controllerEnabled);
    }
    writer.uint32(50).fork();
    for (const v of message.controllerSlots) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.avatarHash.length !== 0) {
      writer.uint32(58).bytes(message.avatarHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemotePlayTogetherGroupUpdateMsg_Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemotePlayTogetherGroupUpdateMsg_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.guestid = reader.uint32();
          break;
        case 3:
          message.keyboardEnabled = reader.bool();
          break;
        case 4:
          message.mouseEnabled = reader.bool();
          break;
        case 5:
          message.controllerEnabled = reader.bool();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.controllerSlots.push(reader.uint32());
            }
          } else {
            message.controllerSlots.push(reader.uint32());
          }
          break;
        case 7:
          message.avatarHash = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemotePlayTogetherGroupUpdateMsg_Player {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      guestid: isSet(object.guestid) ? Number(object.guestid) : 0,
      keyboardEnabled: isSet(object.keyboardEnabled) ? Boolean(object.keyboardEnabled) : false,
      mouseEnabled: isSet(object.mouseEnabled) ? Boolean(object.mouseEnabled) : false,
      controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false,
      controllerSlots: Array.isArray(object?.controllerSlots) ? object.controllerSlots.map((e: any) => Number(e)) : [],
      avatarHash: isSet(object.avatarHash) ? Buffer.from(bytesFromBase64(object.avatarHash)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CRemotePlayTogetherGroupUpdateMsg_Player): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.guestid !== undefined && (obj.guestid = Math.round(message.guestid));
    message.keyboardEnabled !== undefined && (obj.keyboardEnabled = message.keyboardEnabled);
    message.mouseEnabled !== undefined && (obj.mouseEnabled = message.mouseEnabled);
    message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
    if (message.controllerSlots) {
      obj.controllerSlots = message.controllerSlots.map((e) => Math.round(e));
    } else {
      obj.controllerSlots = [];
    }
    message.avatarHash !== undefined &&
      (obj.avatarHash = base64FromBytes(message.avatarHash !== undefined ? message.avatarHash : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemotePlayTogetherGroupUpdateMsg_Player>, I>>(
    base?: I,
  ): CRemotePlayTogetherGroupUpdateMsg_Player {
    return CRemotePlayTogetherGroupUpdateMsg_Player.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemotePlayTogetherGroupUpdateMsg_Player>, I>>(
    object: I,
  ): CRemotePlayTogetherGroupUpdateMsg_Player {
    const message = createBaseCRemotePlayTogetherGroupUpdateMsg_Player();
    message.accountid = object.accountid ?? 0;
    message.guestid = object.guestid ?? 0;
    message.keyboardEnabled = object.keyboardEnabled ?? false;
    message.mouseEnabled = object.mouseEnabled ?? false;
    message.controllerEnabled = object.controllerEnabled ?? false;
    message.controllerSlots = object.controllerSlots?.map((e) => e) || [];
    message.avatarHash = object.avatarHash ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCSetInputTemporarilyDisabledMsg(): CSetInputTemporarilyDisabledMsg {
  return { disabled: false };
}

export const CSetInputTemporarilyDisabledMsg = {
  encode(message: CSetInputTemporarilyDisabledMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disabled === true) {
      writer.uint32(8).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetInputTemporarilyDisabledMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetInputTemporarilyDisabledMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetInputTemporarilyDisabledMsg {
    return { disabled: isSet(object.disabled) ? Boolean(object.disabled) : false };
  },

  toJSON(message: CSetInputTemporarilyDisabledMsg): unknown {
    const obj: any = {};
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetInputTemporarilyDisabledMsg>, I>>(base?: I): CSetInputTemporarilyDisabledMsg {
    return CSetInputTemporarilyDisabledMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetInputTemporarilyDisabledMsg>, I>>(
    object: I,
  ): CSetInputTemporarilyDisabledMsg {
    const message = createBaseCSetInputTemporarilyDisabledMsg();
    message.disabled = object.disabled ?? false;
    return message;
  },
};

function createBaseCSetQualityOverrideMsg(): CSetQualityOverrideMsg {
  return { value: 0 };
}

export const CSetQualityOverrideMsg = {
  encode(message: CSetQualityOverrideMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetQualityOverrideMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetQualityOverrideMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetQualityOverrideMsg {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: CSetQualityOverrideMsg): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetQualityOverrideMsg>, I>>(base?: I): CSetQualityOverrideMsg {
    return CSetQualityOverrideMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetQualityOverrideMsg>, I>>(object: I): CSetQualityOverrideMsg {
    const message = createBaseCSetQualityOverrideMsg();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCSetBitrateOverrideMsg(): CSetBitrateOverrideMsg {
  return { value: 0 };
}

export const CSetBitrateOverrideMsg = {
  encode(message: CSetBitrateOverrideMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSetBitrateOverrideMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSetBitrateOverrideMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSetBitrateOverrideMsg {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: CSetBitrateOverrideMsg): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSetBitrateOverrideMsg>, I>>(base?: I): CSetBitrateOverrideMsg {
    return CSetBitrateOverrideMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSetBitrateOverrideMsg>, I>>(object: I): CSetBitrateOverrideMsg {
    const message = createBaseCSetBitrateOverrideMsg();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCShowOnScreenKeyboardMsg(): CShowOnScreenKeyboardMsg {
  return {};
}

export const CShowOnScreenKeyboardMsg = {
  encode(_: CShowOnScreenKeyboardMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CShowOnScreenKeyboardMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCShowOnScreenKeyboardMsg();
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

  fromJSON(_: any): CShowOnScreenKeyboardMsg {
    return {};
  },

  toJSON(_: CShowOnScreenKeyboardMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CShowOnScreenKeyboardMsg>, I>>(base?: I): CShowOnScreenKeyboardMsg {
    return CShowOnScreenKeyboardMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CShowOnScreenKeyboardMsg>, I>>(_: I): CShowOnScreenKeyboardMsg {
    const message = createBaseCShowOnScreenKeyboardMsg();
    return message;
  },
};

function createBaseCControllerPersonalizationUpdateMsg(): CControllerPersonalizationUpdateMsg {
  return { controllerPath: "", controllerName: "", reverseDiamondButtonLayout: false };
}

export const CControllerPersonalizationUpdateMsg = {
  encode(message: CControllerPersonalizationUpdateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerPath !== "") {
      writer.uint32(10).string(message.controllerPath);
    }
    if (message.controllerName !== "") {
      writer.uint32(18).string(message.controllerName);
    }
    if (message.reverseDiamondButtonLayout === true) {
      writer.uint32(24).bool(message.reverseDiamondButtonLayout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerPersonalizationUpdateMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerPersonalizationUpdateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerPath = reader.string();
          break;
        case 2:
          message.controllerName = reader.string();
          break;
        case 3:
          message.reverseDiamondButtonLayout = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerPersonalizationUpdateMsg {
    return {
      controllerPath: isSet(object.controllerPath) ? String(object.controllerPath) : "",
      controllerName: isSet(object.controllerName) ? String(object.controllerName) : "",
      reverseDiamondButtonLayout: isSet(object.reverseDiamondButtonLayout)
        ? Boolean(object.reverseDiamondButtonLayout)
        : false,
    };
  },

  toJSON(message: CControllerPersonalizationUpdateMsg): unknown {
    const obj: any = {};
    message.controllerPath !== undefined && (obj.controllerPath = message.controllerPath);
    message.controllerName !== undefined && (obj.controllerName = message.controllerName);
    message.reverseDiamondButtonLayout !== undefined &&
      (obj.reverseDiamondButtonLayout = message.reverseDiamondButtonLayout);
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerPersonalizationUpdateMsg>, I>>(
    base?: I,
  ): CControllerPersonalizationUpdateMsg {
    return CControllerPersonalizationUpdateMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerPersonalizationUpdateMsg>, I>>(
    object: I,
  ): CControllerPersonalizationUpdateMsg {
    const message = createBaseCControllerPersonalizationUpdateMsg();
    message.controllerPath = object.controllerPath ?? "";
    message.controllerName = object.controllerName ?? "";
    message.reverseDiamondButtonLayout = object.reverseDiamondButtonLayout ?? false;
    return message;
  },
};

function createBaseCStreamDataLostMsg(): CStreamDataLostMsg {
  return { packets: [] };
}

export const CStreamDataLostMsg = {
  encode(message: CStreamDataLostMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.packets) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamDataLostMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamDataLostMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packets.push(reader.uint32());
            }
          } else {
            message.packets.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamDataLostMsg {
    return { packets: Array.isArray(object?.packets) ? object.packets.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CStreamDataLostMsg): unknown {
    const obj: any = {};
    if (message.packets) {
      obj.packets = message.packets.map((e) => Math.round(e));
    } else {
      obj.packets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamDataLostMsg>, I>>(base?: I): CStreamDataLostMsg {
    return CStreamDataLostMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamDataLostMsg>, I>>(object: I): CStreamDataLostMsg {
    const message = createBaseCStreamDataLostMsg();
    message.packets = object.packets?.map((e) => e) || [];
    return message;
  },
};

function createBaseCAudioFormat(): CAudioFormat {
  return { format: 0, frequency: 0, channels: 0 };
}

export const CAudioFormat = {
  encode(message: CAudioFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.frequency !== 0) {
      writer.uint32(16).uint32(message.frequency);
    }
    if (message.channels !== 0) {
      writer.uint32(24).uint32(message.channels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAudioFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAudioFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = reader.int32() as any;
          break;
        case 2:
          message.frequency = reader.uint32();
          break;
        case 3:
          message.channels = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAudioFormat {
    return {
      format: isSet(object.format) ? eAudioFormatFromJSON(object.format) : 0,
      frequency: isSet(object.frequency) ? Number(object.frequency) : 0,
      channels: isSet(object.channels) ? Number(object.channels) : 0,
    };
  },

  toJSON(message: CAudioFormat): unknown {
    const obj: any = {};
    message.format !== undefined && (obj.format = eAudioFormatToJSON(message.format));
    message.frequency !== undefined && (obj.frequency = Math.round(message.frequency));
    message.channels !== undefined && (obj.channels = Math.round(message.channels));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAudioFormat>, I>>(base?: I): CAudioFormat {
    return CAudioFormat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAudioFormat>, I>>(object: I): CAudioFormat {
    const message = createBaseCAudioFormat();
    message.format = object.format ?? 0;
    message.frequency = object.frequency ?? 0;
    message.channels = object.channels ?? 0;
    return message;
  },
};

function createBaseCVideoFormat(): CVideoFormat {
  return { format: 0, width: 0, height: 0 };
}

export const CVideoFormat = {
  encode(message: CVideoFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== 0) {
      writer.uint32(8).int32(message.format);
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVideoFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVideoFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = reader.int32() as any;
          break;
        case 2:
          message.width = reader.uint32();
          break;
        case 3:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVideoFormat {
    return {
      format: isSet(object.format) ? eVideoFormatFromJSON(object.format) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CVideoFormat): unknown {
    const obj: any = {};
    message.format !== undefined && (obj.format = eVideoFormatToJSON(message.format));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVideoFormat>, I>>(base?: I): CVideoFormat {
    return CVideoFormat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVideoFormat>, I>>(object: I): CVideoFormat {
    const message = createBaseCVideoFormat();
    message.format = object.format ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCFrameEvent(): CFrameEvent {
  return { eventId: 0, timestamp: 0 };
}

export const CFrameEvent = {
  encode(message: CFrameEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== 0) {
      writer.uint32(8).int32(message.eventId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFrameEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFrameEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.int32() as any;
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

  fromJSON(object: any): CFrameEvent {
    return {
      eventId: isSet(object.eventId) ? eStreamFrameEventFromJSON(object.eventId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CFrameEvent): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = eStreamFrameEventToJSON(message.eventId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFrameEvent>, I>>(base?: I): CFrameEvent {
    return CFrameEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFrameEvent>, I>>(object: I): CFrameEvent {
    const message = createBaseCFrameEvent();
    message.eventId = object.eventId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCFrameStats(): CFrameStats {
  return {
    frameId: 0,
    inputMark: 0,
    events: [],
    result: 0,
    frameStartDelta: 0,
    frameDisplayDelta: 0,
    pingTime: 0,
    serverBitrate: 0,
    clientBitrate: 0,
    linkBandwidth: 0,
    packetLoss: 0,
    frameSize: 0,
  };
}

export const CFrameStats = {
  encode(message: CFrameStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameId !== 0) {
      writer.uint32(8).uint32(message.frameId);
    }
    if (message.inputMark !== 0) {
      writer.uint32(16).uint32(message.inputMark);
    }
    for (const v of message.events) {
      CFrameEvent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(32).int32(message.result);
    }
    if (message.frameStartDelta !== 0) {
      writer.uint32(45).float(message.frameStartDelta);
    }
    if (message.frameDisplayDelta !== 0) {
      writer.uint32(53).float(message.frameDisplayDelta);
    }
    if (message.pingTime !== 0) {
      writer.uint32(61).float(message.pingTime);
    }
    if (message.serverBitrate !== 0) {
      writer.uint32(69).float(message.serverBitrate);
    }
    if (message.clientBitrate !== 0) {
      writer.uint32(77).float(message.clientBitrate);
    }
    if (message.linkBandwidth !== 0) {
      writer.uint32(85).float(message.linkBandwidth);
    }
    if (message.packetLoss !== 0) {
      writer.uint32(93).float(message.packetLoss);
    }
    if (message.frameSize !== 0) {
      writer.uint32(96).uint32(message.frameSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFrameStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFrameStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameId = reader.uint32();
          break;
        case 2:
          message.inputMark = reader.uint32();
          break;
        case 3:
          message.events.push(CFrameEvent.decode(reader, reader.uint32()));
          break;
        case 4:
          message.result = reader.int32() as any;
          break;
        case 5:
          message.frameStartDelta = reader.float();
          break;
        case 6:
          message.frameDisplayDelta = reader.float();
          break;
        case 7:
          message.pingTime = reader.float();
          break;
        case 8:
          message.serverBitrate = reader.float();
          break;
        case 9:
          message.clientBitrate = reader.float();
          break;
        case 10:
          message.linkBandwidth = reader.float();
          break;
        case 11:
          message.packetLoss = reader.float();
          break;
        case 12:
          message.frameSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFrameStats {
    return {
      frameId: isSet(object.frameId) ? Number(object.frameId) : 0,
      inputMark: isSet(object.inputMark) ? Number(object.inputMark) : 0,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => CFrameEvent.fromJSON(e)) : [],
      result: isSet(object.result) ? eStreamFrameResultFromJSON(object.result) : 0,
      frameStartDelta: isSet(object.frameStartDelta) ? Number(object.frameStartDelta) : 0,
      frameDisplayDelta: isSet(object.frameDisplayDelta) ? Number(object.frameDisplayDelta) : 0,
      pingTime: isSet(object.pingTime) ? Number(object.pingTime) : 0,
      serverBitrate: isSet(object.serverBitrate) ? Number(object.serverBitrate) : 0,
      clientBitrate: isSet(object.clientBitrate) ? Number(object.clientBitrate) : 0,
      linkBandwidth: isSet(object.linkBandwidth) ? Number(object.linkBandwidth) : 0,
      packetLoss: isSet(object.packetLoss) ? Number(object.packetLoss) : 0,
      frameSize: isSet(object.frameSize) ? Number(object.frameSize) : 0,
    };
  },

  toJSON(message: CFrameStats): unknown {
    const obj: any = {};
    message.frameId !== undefined && (obj.frameId = Math.round(message.frameId));
    message.inputMark !== undefined && (obj.inputMark = Math.round(message.inputMark));
    if (message.events) {
      obj.events = message.events.map((e) => e ? CFrameEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.result !== undefined && (obj.result = eStreamFrameResultToJSON(message.result));
    message.frameStartDelta !== undefined && (obj.frameStartDelta = message.frameStartDelta);
    message.frameDisplayDelta !== undefined && (obj.frameDisplayDelta = message.frameDisplayDelta);
    message.pingTime !== undefined && (obj.pingTime = message.pingTime);
    message.serverBitrate !== undefined && (obj.serverBitrate = message.serverBitrate);
    message.clientBitrate !== undefined && (obj.clientBitrate = message.clientBitrate);
    message.linkBandwidth !== undefined && (obj.linkBandwidth = message.linkBandwidth);
    message.packetLoss !== undefined && (obj.packetLoss = message.packetLoss);
    message.frameSize !== undefined && (obj.frameSize = Math.round(message.frameSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFrameStats>, I>>(base?: I): CFrameStats {
    return CFrameStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFrameStats>, I>>(object: I): CFrameStats {
    const message = createBaseCFrameStats();
    message.frameId = object.frameId ?? 0;
    message.inputMark = object.inputMark ?? 0;
    message.events = object.events?.map((e) => CFrameEvent.fromPartial(e)) || [];
    message.result = object.result ?? 0;
    message.frameStartDelta = object.frameStartDelta ?? 0;
    message.frameDisplayDelta = object.frameDisplayDelta ?? 0;
    message.pingTime = object.pingTime ?? 0;
    message.serverBitrate = object.serverBitrate ?? 0;
    message.clientBitrate = object.clientBitrate ?? 0;
    message.linkBandwidth = object.linkBandwidth ?? 0;
    message.packetLoss = object.packetLoss ?? 0;
    message.frameSize = object.frameSize ?? 0;
    return message;
  },
};

function createBaseCFrameStatAccumulatedValue(): CFrameStatAccumulatedValue {
  return { statType: 0, count: 0, average: 0, stddev: 0 };
}

export const CFrameStatAccumulatedValue = {
  encode(message: CFrameStatAccumulatedValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statType !== 0) {
      writer.uint32(8).int32(message.statType);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    if (message.average !== 0) {
      writer.uint32(29).float(message.average);
    }
    if (message.stddev !== 0) {
      writer.uint32(37).float(message.stddev);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFrameStatAccumulatedValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFrameStatAccumulatedValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statType = reader.int32() as any;
          break;
        case 2:
          message.count = reader.int32();
          break;
        case 3:
          message.average = reader.float();
          break;
        case 4:
          message.stddev = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFrameStatAccumulatedValue {
    return {
      statType: isSet(object.statType) ? eFrameAccumulatedStatFromJSON(object.statType) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      average: isSet(object.average) ? Number(object.average) : 0,
      stddev: isSet(object.stddev) ? Number(object.stddev) : 0,
    };
  },

  toJSON(message: CFrameStatAccumulatedValue): unknown {
    const obj: any = {};
    message.statType !== undefined && (obj.statType = eFrameAccumulatedStatToJSON(message.statType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.average !== undefined && (obj.average = message.average);
    message.stddev !== undefined && (obj.stddev = message.stddev);
    return obj;
  },

  create<I extends Exact<DeepPartial<CFrameStatAccumulatedValue>, I>>(base?: I): CFrameStatAccumulatedValue {
    return CFrameStatAccumulatedValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFrameStatAccumulatedValue>, I>>(object: I): CFrameStatAccumulatedValue {
    const message = createBaseCFrameStatAccumulatedValue();
    message.statType = object.statType ?? 0;
    message.count = object.count ?? 0;
    message.average = object.average ?? 0;
    message.stddev = object.stddev ?? 0;
    return message;
  },
};

function createBaseCFrameStatsListMsg(): CFrameStatsListMsg {
  return { dataType: 0, stats: [], accumulatedStats: [], latestFrameId: 0 };
}

export const CFrameStatsListMsg = {
  encode(message: CFrameStatsListMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataType !== 0) {
      writer.uint32(8).int32(message.dataType);
    }
    for (const v of message.stats) {
      CFrameStats.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.accumulatedStats) {
      CFrameStatAccumulatedValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.latestFrameId !== 0) {
      writer.uint32(32).int32(message.latestFrameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CFrameStatsListMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCFrameStatsListMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataType = reader.int32() as any;
          break;
        case 2:
          message.stats.push(CFrameStats.decode(reader, reader.uint32()));
          break;
        case 3:
          message.accumulatedStats.push(CFrameStatAccumulatedValue.decode(reader, reader.uint32()));
          break;
        case 4:
          message.latestFrameId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CFrameStatsListMsg {
    return {
      dataType: isSet(object.dataType) ? eStreamingDataTypeFromJSON(object.dataType) : 0,
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => CFrameStats.fromJSON(e)) : [],
      accumulatedStats: Array.isArray(object?.accumulatedStats)
        ? object.accumulatedStats.map((e: any) => CFrameStatAccumulatedValue.fromJSON(e))
        : [],
      latestFrameId: isSet(object.latestFrameId) ? Number(object.latestFrameId) : 0,
    };
  },

  toJSON(message: CFrameStatsListMsg): unknown {
    const obj: any = {};
    message.dataType !== undefined && (obj.dataType = eStreamingDataTypeToJSON(message.dataType));
    if (message.stats) {
      obj.stats = message.stats.map((e) => e ? CFrameStats.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    if (message.accumulatedStats) {
      obj.accumulatedStats = message.accumulatedStats.map((e) => e ? CFrameStatAccumulatedValue.toJSON(e) : undefined);
    } else {
      obj.accumulatedStats = [];
    }
    message.latestFrameId !== undefined && (obj.latestFrameId = Math.round(message.latestFrameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CFrameStatsListMsg>, I>>(base?: I): CFrameStatsListMsg {
    return CFrameStatsListMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CFrameStatsListMsg>, I>>(object: I): CFrameStatsListMsg {
    const message = createBaseCFrameStatsListMsg();
    message.dataType = object.dataType ?? 0;
    message.stats = object.stats?.map((e) => CFrameStats.fromPartial(e)) || [];
    message.accumulatedStats = object.accumulatedStats?.map((e) => CFrameStatAccumulatedValue.fromPartial(e)) || [];
    message.latestFrameId = object.latestFrameId ?? 0;
    return message;
  },
};

function createBaseCStreamingSessionStats(): CStreamingSessionStats {
  return { frameLossPercentage: 0, averageNetworkTimeMs: 0, stddevNetworkTimeMs: 0 };
}

export const CStreamingSessionStats = {
  encode(message: CStreamingSessionStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frameLossPercentage !== 0) {
      writer.uint32(13).float(message.frameLossPercentage);
    }
    if (message.averageNetworkTimeMs !== 0) {
      writer.uint32(21).float(message.averageNetworkTimeMs);
    }
    if (message.stddevNetworkTimeMs !== 0) {
      writer.uint32(29).float(message.stddevNetworkTimeMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStreamingSessionStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStreamingSessionStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameLossPercentage = reader.float();
          break;
        case 2:
          message.averageNetworkTimeMs = reader.float();
          break;
        case 3:
          message.stddevNetworkTimeMs = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStreamingSessionStats {
    return {
      frameLossPercentage: isSet(object.frameLossPercentage) ? Number(object.frameLossPercentage) : 0,
      averageNetworkTimeMs: isSet(object.averageNetworkTimeMs) ? Number(object.averageNetworkTimeMs) : 0,
      stddevNetworkTimeMs: isSet(object.stddevNetworkTimeMs) ? Number(object.stddevNetworkTimeMs) : 0,
    };
  },

  toJSON(message: CStreamingSessionStats): unknown {
    const obj: any = {};
    message.frameLossPercentage !== undefined && (obj.frameLossPercentage = message.frameLossPercentage);
    message.averageNetworkTimeMs !== undefined && (obj.averageNetworkTimeMs = message.averageNetworkTimeMs);
    message.stddevNetworkTimeMs !== undefined && (obj.stddevNetworkTimeMs = message.stddevNetworkTimeMs);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStreamingSessionStats>, I>>(base?: I): CStreamingSessionStats {
    return CStreamingSessionStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStreamingSessionStats>, I>>(object: I): CStreamingSessionStats {
    const message = createBaseCStreamingSessionStats();
    message.frameLossPercentage = object.frameLossPercentage ?? 0;
    message.averageNetworkTimeMs = object.averageNetworkTimeMs ?? 0;
    message.stddevNetworkTimeMs = object.stddevNetworkTimeMs ?? 0;
    return message;
  },
};

function createBaseCDebugDumpMsg(): CDebugDumpMsg {
  return { screenshot: Buffer.alloc(0) };
}

export const CDebugDumpMsg = {
  encode(message: CDebugDumpMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenshot.length !== 0) {
      writer.uint32(10).bytes(message.screenshot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDebugDumpMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDebugDumpMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.screenshot = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDebugDumpMsg {
    return { screenshot: isSet(object.screenshot) ? Buffer.from(bytesFromBase64(object.screenshot)) : Buffer.alloc(0) };
  },

  toJSON(message: CDebugDumpMsg): unknown {
    const obj: any = {};
    message.screenshot !== undefined &&
      (obj.screenshot = base64FromBytes(message.screenshot !== undefined ? message.screenshot : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDebugDumpMsg>, I>>(base?: I): CDebugDumpMsg {
    return CDebugDumpMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDebugDumpMsg>, I>>(object: I): CDebugDumpMsg {
    const message = createBaseCDebugDumpMsg();
    message.screenshot = object.screenshot ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCLogMsg(): CLogMsg {
  return { type: 0, message: "" };
}

export const CLogMsg = {
  encode(message: CLogMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLogMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLogMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CLogMsg {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CLogMsg): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<CLogMsg>, I>>(base?: I): CLogMsg {
    return CLogMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CLogMsg>, I>>(object: I): CLogMsg {
    const message = createBaseCLogMsg();
    message.type = object.type ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCLogUploadMsg(): CLogUploadMsg {
  return { type: 0, data: Buffer.alloc(0) };
}

export const CLogUploadMsg = {
  encode(message: CLogUploadMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CLogUploadMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCLogUploadMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CLogUploadMsg {
    return {
      type: isSet(object.type) ? eLogFileTypeFromJSON(object.type) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CLogUploadMsg): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eLogFileTypeToJSON(message.type));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CLogUploadMsg>, I>>(base?: I): CLogUploadMsg {
    return CLogUploadMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CLogUploadMsg>, I>>(object: I): CLogUploadMsg {
    const message = createBaseCLogUploadMsg();
    message.type = object.type ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCTransportSignalMsg(): CTransportSignalMsg {
  return { webrtc: undefined, sdr: [] };
}

export const CTransportSignalMsg = {
  encode(message: CTransportSignalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webrtc !== undefined) {
      CTransportSignalMsg_WebRTCMessage.encode(message.webrtc, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sdr) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTransportSignalMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTransportSignalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webrtc = CTransportSignalMsg_WebRTCMessage.decode(reader, reader.uint32());
          break;
        case 2:
          message.sdr.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTransportSignalMsg {
    return {
      webrtc: isSet(object.webrtc) ? CTransportSignalMsg_WebRTCMessage.fromJSON(object.webrtc) : undefined,
      sdr: Array.isArray(object?.sdr) ? object.sdr.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: CTransportSignalMsg): unknown {
    const obj: any = {};
    message.webrtc !== undefined &&
      (obj.webrtc = message.webrtc ? CTransportSignalMsg_WebRTCMessage.toJSON(message.webrtc) : undefined);
    if (message.sdr) {
      obj.sdr = message.sdr.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.sdr = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CTransportSignalMsg>, I>>(base?: I): CTransportSignalMsg {
    return CTransportSignalMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTransportSignalMsg>, I>>(object: I): CTransportSignalMsg {
    const message = createBaseCTransportSignalMsg();
    message.webrtc = (object.webrtc !== undefined && object.webrtc !== null)
      ? CTransportSignalMsg_WebRTCMessage.fromPartial(object.webrtc)
      : undefined;
    message.sdr = object.sdr?.map((e) => e) || [];
    return message;
  },
};

function createBaseCTransportSignalMsg_WebRTCMessage(): CTransportSignalMsg_WebRTCMessage {
  return { greeting: undefined, offer: undefined, answer: undefined, candidate: undefined };
}

export const CTransportSignalMsg_WebRTCMessage = {
  encode(message: CTransportSignalMsg_WebRTCMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.greeting !== undefined) {
      writer.uint32(8).bool(message.greeting);
    }
    if (message.offer !== undefined) {
      writer.uint32(18).string(message.offer);
    }
    if (message.answer !== undefined) {
      writer.uint32(26).string(message.answer);
    }
    if (message.candidate !== undefined) {
      CTransportSignalMsg_WebRTCMessage_Candidate.encode(message.candidate, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTransportSignalMsg_WebRTCMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTransportSignalMsg_WebRTCMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.greeting = reader.bool();
          break;
        case 2:
          message.offer = reader.string();
          break;
        case 3:
          message.answer = reader.string();
          break;
        case 4:
          message.candidate = CTransportSignalMsg_WebRTCMessage_Candidate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTransportSignalMsg_WebRTCMessage {
    return {
      greeting: isSet(object.greeting) ? Boolean(object.greeting) : undefined,
      offer: isSet(object.offer) ? String(object.offer) : undefined,
      answer: isSet(object.answer) ? String(object.answer) : undefined,
      candidate: isSet(object.candidate)
        ? CTransportSignalMsg_WebRTCMessage_Candidate.fromJSON(object.candidate)
        : undefined,
    };
  },

  toJSON(message: CTransportSignalMsg_WebRTCMessage): unknown {
    const obj: any = {};
    message.greeting !== undefined && (obj.greeting = message.greeting);
    message.offer !== undefined && (obj.offer = message.offer);
    message.answer !== undefined && (obj.answer = message.answer);
    message.candidate !== undefined && (obj.candidate = message.candidate
      ? CTransportSignalMsg_WebRTCMessage_Candidate.toJSON(message.candidate)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTransportSignalMsg_WebRTCMessage>, I>>(
    base?: I,
  ): CTransportSignalMsg_WebRTCMessage {
    return CTransportSignalMsg_WebRTCMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTransportSignalMsg_WebRTCMessage>, I>>(
    object: I,
  ): CTransportSignalMsg_WebRTCMessage {
    const message = createBaseCTransportSignalMsg_WebRTCMessage();
    message.greeting = object.greeting ?? undefined;
    message.offer = object.offer ?? undefined;
    message.answer = object.answer ?? undefined;
    message.candidate = (object.candidate !== undefined && object.candidate !== null)
      ? CTransportSignalMsg_WebRTCMessage_Candidate.fromPartial(object.candidate)
      : undefined;
    return message;
  },
};

function createBaseCTransportSignalMsg_WebRTCMessage_Candidate(): CTransportSignalMsg_WebRTCMessage_Candidate {
  return { sdpMid: "", sdpMlineIndex: 0, candidate: "" };
}

export const CTransportSignalMsg_WebRTCMessage_Candidate = {
  encode(message: CTransportSignalMsg_WebRTCMessage_Candidate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sdpMid !== "") {
      writer.uint32(10).string(message.sdpMid);
    }
    if (message.sdpMlineIndex !== 0) {
      writer.uint32(16).int32(message.sdpMlineIndex);
    }
    if (message.candidate !== "") {
      writer.uint32(26).string(message.candidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTransportSignalMsg_WebRTCMessage_Candidate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTransportSignalMsg_WebRTCMessage_Candidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sdpMid = reader.string();
          break;
        case 2:
          message.sdpMlineIndex = reader.int32();
          break;
        case 3:
          message.candidate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTransportSignalMsg_WebRTCMessage_Candidate {
    return {
      sdpMid: isSet(object.sdpMid) ? String(object.sdpMid) : "",
      sdpMlineIndex: isSet(object.sdpMlineIndex) ? Number(object.sdpMlineIndex) : 0,
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
    };
  },

  toJSON(message: CTransportSignalMsg_WebRTCMessage_Candidate): unknown {
    const obj: any = {};
    message.sdpMid !== undefined && (obj.sdpMid = message.sdpMid);
    message.sdpMlineIndex !== undefined && (obj.sdpMlineIndex = Math.round(message.sdpMlineIndex));
    message.candidate !== undefined && (obj.candidate = message.candidate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTransportSignalMsg_WebRTCMessage_Candidate>, I>>(
    base?: I,
  ): CTransportSignalMsg_WebRTCMessage_Candidate {
    return CTransportSignalMsg_WebRTCMessage_Candidate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTransportSignalMsg_WebRTCMessage_Candidate>, I>>(
    object: I,
  ): CTransportSignalMsg_WebRTCMessage_Candidate {
    const message = createBaseCTransportSignalMsg_WebRTCMessage_Candidate();
    message.sdpMid = object.sdpMid ?? "";
    message.sdpMlineIndex = object.sdpMlineIndex ?? 0;
    message.candidate = object.candidate ?? "";
    return message;
  },
};

function createBaseCControllerConfigMsg(): CControllerConfigMsg {
  return {
    type: 0,
    controllerPath: "",
    appid: 0,
    personalizationResponse: undefined,
    configResponse: [],
    activeConfigChangeMsg: undefined,
  };
}

export const CControllerConfigMsg = {
  encode(message: CControllerConfigMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.controllerPath !== "") {
      writer.uint32(18).string(message.controllerPath);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    if (message.personalizationResponse !== undefined) {
      CControllerConfigMsg_ControllerPersonalizationResponse.encode(
        message.personalizationResponse,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    for (const v of message.configResponse) {
      CControllerConfigMsg_ControllerConfigResponse.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.activeConfigChangeMsg !== undefined) {
      CControllerConfigMsg_ControllerActiveConfigMsg.encode(message.activeConfigChangeMsg, writer.uint32(58).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerConfigMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerConfigMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.controllerPath = reader.string();
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        case 4:
          message.personalizationResponse = CControllerConfigMsg_ControllerPersonalizationResponse.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.configResponse.push(CControllerConfigMsg_ControllerConfigResponse.decode(reader, reader.uint32()));
          break;
        case 7:
          message.activeConfigChangeMsg = CControllerConfigMsg_ControllerActiveConfigMsg.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerConfigMsg {
    return {
      type: isSet(object.type) ? eStreamControllerConfigMsgFromJSON(object.type) : 0,
      controllerPath: isSet(object.controllerPath) ? String(object.controllerPath) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      personalizationResponse: isSet(object.personalizationResponse)
        ? CControllerConfigMsg_ControllerPersonalizationResponse.fromJSON(object.personalizationResponse)
        : undefined,
      configResponse: Array.isArray(object?.configResponse)
        ? object.configResponse.map((e: any) => CControllerConfigMsg_ControllerConfigResponse.fromJSON(e))
        : [],
      activeConfigChangeMsg: isSet(object.activeConfigChangeMsg)
        ? CControllerConfigMsg_ControllerActiveConfigMsg.fromJSON(object.activeConfigChangeMsg)
        : undefined,
    };
  },

  toJSON(message: CControllerConfigMsg): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eStreamControllerConfigMsgToJSON(message.type));
    message.controllerPath !== undefined && (obj.controllerPath = message.controllerPath);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.personalizationResponse !== undefined && (obj.personalizationResponse = message.personalizationResponse
      ? CControllerConfigMsg_ControllerPersonalizationResponse.toJSON(message.personalizationResponse)
      : undefined);
    if (message.configResponse) {
      obj.configResponse = message.configResponse.map((e) =>
        e ? CControllerConfigMsg_ControllerConfigResponse.toJSON(e) : undefined
      );
    } else {
      obj.configResponse = [];
    }
    message.activeConfigChangeMsg !== undefined && (obj.activeConfigChangeMsg = message.activeConfigChangeMsg
      ? CControllerConfigMsg_ControllerActiveConfigMsg.toJSON(message.activeConfigChangeMsg)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerConfigMsg>, I>>(base?: I): CControllerConfigMsg {
    return CControllerConfigMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerConfigMsg>, I>>(object: I): CControllerConfigMsg {
    const message = createBaseCControllerConfigMsg();
    message.type = object.type ?? 0;
    message.controllerPath = object.controllerPath ?? "";
    message.appid = object.appid ?? 0;
    message.personalizationResponse =
      (object.personalizationResponse !== undefined && object.personalizationResponse !== null)
        ? CControllerConfigMsg_ControllerPersonalizationResponse.fromPartial(object.personalizationResponse)
        : undefined;
    message.configResponse =
      object.configResponse?.map((e) => CControllerConfigMsg_ControllerConfigResponse.fromPartial(e)) || [];
    message.activeConfigChangeMsg =
      (object.activeConfigChangeMsg !== undefined && object.activeConfigChangeMsg !== null)
        ? CControllerConfigMsg_ControllerActiveConfigMsg.fromPartial(object.activeConfigChangeMsg)
        : undefined;
    return message;
  },
};

function createBaseCControllerConfigMsg_ControllerConfigResponse(): CControllerConfigMsg_ControllerConfigResponse {
  return { appid: 0, configURL: "", controllerType: 0, controllerData: "", selectionOrder: 0, actionBlock: false };
}

export const CControllerConfigMsg_ControllerConfigResponse = {
  encode(message: CControllerConfigMsg_ControllerConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.configURL !== "") {
      writer.uint32(18).string(message.configURL);
    }
    if (message.controllerType !== 0) {
      writer.uint32(24).uint32(message.controllerType);
    }
    if (message.controllerData !== "") {
      writer.uint32(34).string(message.controllerData);
    }
    if (message.selectionOrder !== 0) {
      writer.uint32(40).uint32(message.selectionOrder);
    }
    if (message.actionBlock === true) {
      writer.uint32(48).bool(message.actionBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerConfigMsg_ControllerConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerConfigMsg_ControllerConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.configURL = reader.string();
          break;
        case 3:
          message.controllerType = reader.uint32();
          break;
        case 4:
          message.controllerData = reader.string();
          break;
        case 5:
          message.selectionOrder = reader.uint32();
          break;
        case 6:
          message.actionBlock = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerConfigMsg_ControllerConfigResponse {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      configURL: isSet(object.configURL) ? String(object.configURL) : "",
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      controllerData: isSet(object.controllerData) ? String(object.controllerData) : "",
      selectionOrder: isSet(object.selectionOrder) ? Number(object.selectionOrder) : 0,
      actionBlock: isSet(object.actionBlock) ? Boolean(object.actionBlock) : false,
    };
  },

  toJSON(message: CControllerConfigMsg_ControllerConfigResponse): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.configURL !== undefined && (obj.configURL = message.configURL);
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.controllerData !== undefined && (obj.controllerData = message.controllerData);
    message.selectionOrder !== undefined && (obj.selectionOrder = Math.round(message.selectionOrder));
    message.actionBlock !== undefined && (obj.actionBlock = message.actionBlock);
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerConfigResponse>, I>>(
    base?: I,
  ): CControllerConfigMsg_ControllerConfigResponse {
    return CControllerConfigMsg_ControllerConfigResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerConfigResponse>, I>>(
    object: I,
  ): CControllerConfigMsg_ControllerConfigResponse {
    const message = createBaseCControllerConfigMsg_ControllerConfigResponse();
    message.appid = object.appid ?? 0;
    message.configURL = object.configURL ?? "";
    message.controllerType = object.controllerType ?? 0;
    message.controllerData = object.controllerData ?? "";
    message.selectionOrder = object.selectionOrder ?? 0;
    message.actionBlock = object.actionBlock ?? false;
    return message;
  },
};

function createBaseCControllerConfigMsg_ControllerPersonalizationResponse(): CControllerConfigMsg_ControllerPersonalizationResponse {
  return { personalizationData: "" };
}

export const CControllerConfigMsg_ControllerPersonalizationResponse = {
  encode(
    message: CControllerConfigMsg_ControllerPersonalizationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.personalizationData !== "") {
      writer.uint32(10).string(message.personalizationData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerConfigMsg_ControllerPersonalizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerConfigMsg_ControllerPersonalizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.personalizationData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerConfigMsg_ControllerPersonalizationResponse {
    return { personalizationData: isSet(object.personalizationData) ? String(object.personalizationData) : "" };
  },

  toJSON(message: CControllerConfigMsg_ControllerPersonalizationResponse): unknown {
    const obj: any = {};
    message.personalizationData !== undefined && (obj.personalizationData = message.personalizationData);
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerPersonalizationResponse>, I>>(
    base?: I,
  ): CControllerConfigMsg_ControllerPersonalizationResponse {
    return CControllerConfigMsg_ControllerPersonalizationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerPersonalizationResponse>, I>>(
    object: I,
  ): CControllerConfigMsg_ControllerPersonalizationResponse {
    const message = createBaseCControllerConfigMsg_ControllerPersonalizationResponse();
    message.personalizationData = object.personalizationData ?? "";
    return message;
  },
};

function createBaseCControllerConfigMsg_ControllerActiveConfigChangeResponse(): CControllerConfigMsg_ControllerActiveConfigChangeResponse {
  return { configURL: "", controllerType: 0, controllerData: "", selectionOrder: 0 };
}

export const CControllerConfigMsg_ControllerActiveConfigChangeResponse = {
  encode(
    message: CControllerConfigMsg_ControllerActiveConfigChangeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.configURL !== "") {
      writer.uint32(18).string(message.configURL);
    }
    if (message.controllerType !== 0) {
      writer.uint32(24).uint32(message.controllerType);
    }
    if (message.controllerData !== "") {
      writer.uint32(34).string(message.controllerData);
    }
    if (message.selectionOrder !== 0) {
      writer.uint32(40).uint32(message.selectionOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerConfigMsg_ControllerActiveConfigChangeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerConfigMsg_ControllerActiveConfigChangeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.configURL = reader.string();
          break;
        case 3:
          message.controllerType = reader.uint32();
          break;
        case 4:
          message.controllerData = reader.string();
          break;
        case 5:
          message.selectionOrder = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerConfigMsg_ControllerActiveConfigChangeResponse {
    return {
      configURL: isSet(object.configURL) ? String(object.configURL) : "",
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      controllerData: isSet(object.controllerData) ? String(object.controllerData) : "",
      selectionOrder: isSet(object.selectionOrder) ? Number(object.selectionOrder) : 0,
    };
  },

  toJSON(message: CControllerConfigMsg_ControllerActiveConfigChangeResponse): unknown {
    const obj: any = {};
    message.configURL !== undefined && (obj.configURL = message.configURL);
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.controllerData !== undefined && (obj.controllerData = message.controllerData);
    message.selectionOrder !== undefined && (obj.selectionOrder = Math.round(message.selectionOrder));
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerActiveConfigChangeResponse>, I>>(
    base?: I,
  ): CControllerConfigMsg_ControllerActiveConfigChangeResponse {
    return CControllerConfigMsg_ControllerActiveConfigChangeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerActiveConfigChangeResponse>, I>>(
    object: I,
  ): CControllerConfigMsg_ControllerActiveConfigChangeResponse {
    const message = createBaseCControllerConfigMsg_ControllerActiveConfigChangeResponse();
    message.configURL = object.configURL ?? "";
    message.controllerType = object.controllerType ?? 0;
    message.controllerData = object.controllerData ?? "";
    message.selectionOrder = object.selectionOrder ?? 0;
    return message;
  },
};

function createBaseCControllerConfigMsg_ControllerActiveConfigMsg(): CControllerConfigMsg_ControllerActiveConfigMsg {
  return { appid: 0, configURL: "", controllerType: 0, controllerData: "" };
}

export const CControllerConfigMsg_ControllerActiveConfigMsg = {
  encode(
    message: CControllerConfigMsg_ControllerActiveConfigMsg,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.configURL !== "") {
      writer.uint32(18).string(message.configURL);
    }
    if (message.controllerType !== 0) {
      writer.uint32(24).uint32(message.controllerType);
    }
    if (message.controllerData !== "") {
      writer.uint32(34).string(message.controllerData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CControllerConfigMsg_ControllerActiveConfigMsg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCControllerConfigMsg_ControllerActiveConfigMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.configURL = reader.string();
          break;
        case 3:
          message.controllerType = reader.uint32();
          break;
        case 4:
          message.controllerData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CControllerConfigMsg_ControllerActiveConfigMsg {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      configURL: isSet(object.configURL) ? String(object.configURL) : "",
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      controllerData: isSet(object.controllerData) ? String(object.controllerData) : "",
    };
  },

  toJSON(message: CControllerConfigMsg_ControllerActiveConfigMsg): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.configURL !== undefined && (obj.configURL = message.configURL);
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.controllerData !== undefined && (obj.controllerData = message.controllerData);
    return obj;
  },

  create<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerActiveConfigMsg>, I>>(
    base?: I,
  ): CControllerConfigMsg_ControllerActiveConfigMsg {
    return CControllerConfigMsg_ControllerActiveConfigMsg.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CControllerConfigMsg_ControllerActiveConfigMsg>, I>>(
    object: I,
  ): CControllerConfigMsg_ControllerActiveConfigMsg {
    const message = createBaseCControllerConfigMsg_ControllerActiveConfigMsg();
    message.appid = object.appid ?? 0;
    message.configURL = object.configURL ?? "";
    message.controllerType = object.controllerType ?? 0;
    message.controllerData = object.controllerData ?? "";
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
