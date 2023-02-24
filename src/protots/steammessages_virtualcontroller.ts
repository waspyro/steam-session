/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EInputMode {
  k_EInputModeUnknown = 0,
  k_EInputModeMouse = 1,
  k_EInputModeController = 2,
  k_EInputModeMouseAndController = 3,
  UNRECOGNIZED = -1,
}

export function eInputModeFromJSON(object: any): EInputMode {
  switch (object) {
    case 0:
    case "k_EInputModeUnknown":
      return EInputMode.k_EInputModeUnknown;
    case 1:
    case "k_EInputModeMouse":
      return EInputMode.k_EInputModeMouse;
    case 2:
    case "k_EInputModeController":
      return EInputMode.k_EInputModeController;
    case 3:
    case "k_EInputModeMouseAndController":
      return EInputMode.k_EInputModeMouseAndController;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EInputMode.UNRECOGNIZED;
  }
}

export function eInputModeToJSON(object: EInputMode): string {
  switch (object) {
    case EInputMode.k_EInputModeUnknown:
      return "k_EInputModeUnknown";
    case EInputMode.k_EInputModeMouse:
      return "k_EInputModeMouse";
    case EInputMode.k_EInputModeController:
      return "k_EInputModeController";
    case EInputMode.k_EInputModeMouseAndController:
      return "k_EInputModeMouseAndController";
    case EInputMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EMouseMode {
  k_EMouseModeUnknown = 0,
  k_EMouseModeRelativeCursor = 1,
  k_EMouseModeAbsoluteCursor = 2,
  k_EMouseModeTouch = 3,
  k_EMouseModeRelative = 4,
  UNRECOGNIZED = -1,
}

export function eMouseModeFromJSON(object: any): EMouseMode {
  switch (object) {
    case 0:
    case "k_EMouseModeUnknown":
      return EMouseMode.k_EMouseModeUnknown;
    case 1:
    case "k_EMouseModeRelativeCursor":
      return EMouseMode.k_EMouseModeRelativeCursor;
    case 2:
    case "k_EMouseModeAbsoluteCursor":
      return EMouseMode.k_EMouseModeAbsoluteCursor;
    case 3:
    case "k_EMouseModeTouch":
      return EMouseMode.k_EMouseModeTouch;
    case 4:
    case "k_EMouseModeRelative":
      return EMouseMode.k_EMouseModeRelative;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EMouseMode.UNRECOGNIZED;
  }
}

export function eMouseModeToJSON(object: EMouseMode): string {
  switch (object) {
    case EMouseMode.k_EMouseModeUnknown:
      return "k_EMouseModeUnknown";
    case EMouseMode.k_EMouseModeRelativeCursor:
      return "k_EMouseModeRelativeCursor";
    case EMouseMode.k_EMouseModeAbsoluteCursor:
      return "k_EMouseModeAbsoluteCursor";
    case EMouseMode.k_EMouseModeTouch:
      return "k_EMouseModeTouch";
    case EMouseMode.k_EMouseModeRelative:
      return "k_EMouseModeRelative";
    case EMouseMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EControllerElementType {
  k_EControllerElementTypeNone = -1,
  k_EControllerElementTypeThumb = 0,
  k_EControllerElementTypeButtonSteam = 1,
  k_EControllerElementTypeJoystickLeft = 2,
  k_EControllerElementTypeButtonJoystickLeft = 3,
  k_EControllerElementTypeJoystickRight = 4,
  k_EControllerElementTypeButtonJoystickRight = 5,
  k_EControllerElementTypeDPad = 6,
  k_EControllerElementTypeButtonA = 7,
  k_EControllerElementTypeButtonB = 8,
  k_EControllerElementTypeButtonX = 9,
  k_EControllerElementTypeButtonY = 10,
  k_EControllerElementTypeButtonSelect = 11,
  k_EControllerElementTypeButtonStart = 12,
  k_EControllerElementTypeButtonTriggerLeft = 13,
  k_EControllerElementTypeButtonTriggerRight = 14,
  k_EControllerElementTypeButtonBumperLeft = 15,
  k_EControllerElementTypeButtonBumperRight = 16,
  k_EControllerElementTypeButtonMacro0 = 17,
  k_EControllerElementTypeButtonMacro1 = 18,
  k_EControllerElementTypeButtonMacro2 = 19,
  k_EControllerElementTypeButtonMacro3 = 20,
  k_EControllerElementTypeButtonMacro4 = 21,
  k_EControllerElementTypeButtonMacro5 = 22,
  k_EControllerElementTypeButtonMacro6 = 23,
  k_EControllerElementTypeButtonMacro7 = 24,
  k_EControllerElementTypeTrackpadCenter = 25,
  k_EControllerElementTypeTrackpadLeft = 26,
  k_EControllerElementTypeTrackpadRight = 27,
  k_EControllerElementTypeKeyboard = 28,
  k_EControllerElementTypeMagnifyingGlass = 29,
  k_EControllerElementTypeButtonMacro1Finger = 30,
  k_EControllerElementTypeButtonMacro2Finger = 31,
  k_EControllerElementTypeRecordInput = 32,
  k_EControllerElementTypePlaybackInput = 33,
  k_EControllerElementTypePaste = 34,
  k_EControllerElementTypeMax = 35,
  UNRECOGNIZED = -1,
}

export function eControllerElementTypeFromJSON(object: any): EControllerElementType {
  switch (object) {
    case -1:
    case "k_EControllerElementTypeNone":
      return EControllerElementType.k_EControllerElementTypeNone;
    case 0:
    case "k_EControllerElementTypeThumb":
      return EControllerElementType.k_EControllerElementTypeThumb;
    case 1:
    case "k_EControllerElementTypeButtonSteam":
      return EControllerElementType.k_EControllerElementTypeButtonSteam;
    case 2:
    case "k_EControllerElementTypeJoystickLeft":
      return EControllerElementType.k_EControllerElementTypeJoystickLeft;
    case 3:
    case "k_EControllerElementTypeButtonJoystickLeft":
      return EControllerElementType.k_EControllerElementTypeButtonJoystickLeft;
    case 4:
    case "k_EControllerElementTypeJoystickRight":
      return EControllerElementType.k_EControllerElementTypeJoystickRight;
    case 5:
    case "k_EControllerElementTypeButtonJoystickRight":
      return EControllerElementType.k_EControllerElementTypeButtonJoystickRight;
    case 6:
    case "k_EControllerElementTypeDPad":
      return EControllerElementType.k_EControllerElementTypeDPad;
    case 7:
    case "k_EControllerElementTypeButtonA":
      return EControllerElementType.k_EControllerElementTypeButtonA;
    case 8:
    case "k_EControllerElementTypeButtonB":
      return EControllerElementType.k_EControllerElementTypeButtonB;
    case 9:
    case "k_EControllerElementTypeButtonX":
      return EControllerElementType.k_EControllerElementTypeButtonX;
    case 10:
    case "k_EControllerElementTypeButtonY":
      return EControllerElementType.k_EControllerElementTypeButtonY;
    case 11:
    case "k_EControllerElementTypeButtonSelect":
      return EControllerElementType.k_EControllerElementTypeButtonSelect;
    case 12:
    case "k_EControllerElementTypeButtonStart":
      return EControllerElementType.k_EControllerElementTypeButtonStart;
    case 13:
    case "k_EControllerElementTypeButtonTriggerLeft":
      return EControllerElementType.k_EControllerElementTypeButtonTriggerLeft;
    case 14:
    case "k_EControllerElementTypeButtonTriggerRight":
      return EControllerElementType.k_EControllerElementTypeButtonTriggerRight;
    case 15:
    case "k_EControllerElementTypeButtonBumperLeft":
      return EControllerElementType.k_EControllerElementTypeButtonBumperLeft;
    case 16:
    case "k_EControllerElementTypeButtonBumperRight":
      return EControllerElementType.k_EControllerElementTypeButtonBumperRight;
    case 17:
    case "k_EControllerElementTypeButtonMacro0":
      return EControllerElementType.k_EControllerElementTypeButtonMacro0;
    case 18:
    case "k_EControllerElementTypeButtonMacro1":
      return EControllerElementType.k_EControllerElementTypeButtonMacro1;
    case 19:
    case "k_EControllerElementTypeButtonMacro2":
      return EControllerElementType.k_EControllerElementTypeButtonMacro2;
    case 20:
    case "k_EControllerElementTypeButtonMacro3":
      return EControllerElementType.k_EControllerElementTypeButtonMacro3;
    case 21:
    case "k_EControllerElementTypeButtonMacro4":
      return EControllerElementType.k_EControllerElementTypeButtonMacro4;
    case 22:
    case "k_EControllerElementTypeButtonMacro5":
      return EControllerElementType.k_EControllerElementTypeButtonMacro5;
    case 23:
    case "k_EControllerElementTypeButtonMacro6":
      return EControllerElementType.k_EControllerElementTypeButtonMacro6;
    case 24:
    case "k_EControllerElementTypeButtonMacro7":
      return EControllerElementType.k_EControllerElementTypeButtonMacro7;
    case 25:
    case "k_EControllerElementTypeTrackpadCenter":
      return EControllerElementType.k_EControllerElementTypeTrackpadCenter;
    case 26:
    case "k_EControllerElementTypeTrackpadLeft":
      return EControllerElementType.k_EControllerElementTypeTrackpadLeft;
    case 27:
    case "k_EControllerElementTypeTrackpadRight":
      return EControllerElementType.k_EControllerElementTypeTrackpadRight;
    case 28:
    case "k_EControllerElementTypeKeyboard":
      return EControllerElementType.k_EControllerElementTypeKeyboard;
    case 29:
    case "k_EControllerElementTypeMagnifyingGlass":
      return EControllerElementType.k_EControllerElementTypeMagnifyingGlass;
    case 30:
    case "k_EControllerElementTypeButtonMacro1Finger":
      return EControllerElementType.k_EControllerElementTypeButtonMacro1Finger;
    case 31:
    case "k_EControllerElementTypeButtonMacro2Finger":
      return EControllerElementType.k_EControllerElementTypeButtonMacro2Finger;
    case 32:
    case "k_EControllerElementTypeRecordInput":
      return EControllerElementType.k_EControllerElementTypeRecordInput;
    case 33:
    case "k_EControllerElementTypePlaybackInput":
      return EControllerElementType.k_EControllerElementTypePlaybackInput;
    case 34:
    case "k_EControllerElementTypePaste":
      return EControllerElementType.k_EControllerElementTypePaste;
    case 35:
    case "k_EControllerElementTypeMax":
      return EControllerElementType.k_EControllerElementTypeMax;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EControllerElementType.UNRECOGNIZED;
  }
}

export function eControllerElementTypeToJSON(object: EControllerElementType): string {
  switch (object) {
    case EControllerElementType.k_EControllerElementTypeNone:
      return "k_EControllerElementTypeNone";
    case EControllerElementType.k_EControllerElementTypeThumb:
      return "k_EControllerElementTypeThumb";
    case EControllerElementType.k_EControllerElementTypeButtonSteam:
      return "k_EControllerElementTypeButtonSteam";
    case EControllerElementType.k_EControllerElementTypeJoystickLeft:
      return "k_EControllerElementTypeJoystickLeft";
    case EControllerElementType.k_EControllerElementTypeButtonJoystickLeft:
      return "k_EControllerElementTypeButtonJoystickLeft";
    case EControllerElementType.k_EControllerElementTypeJoystickRight:
      return "k_EControllerElementTypeJoystickRight";
    case EControllerElementType.k_EControllerElementTypeButtonJoystickRight:
      return "k_EControllerElementTypeButtonJoystickRight";
    case EControllerElementType.k_EControllerElementTypeDPad:
      return "k_EControllerElementTypeDPad";
    case EControllerElementType.k_EControllerElementTypeButtonA:
      return "k_EControllerElementTypeButtonA";
    case EControllerElementType.k_EControllerElementTypeButtonB:
      return "k_EControllerElementTypeButtonB";
    case EControllerElementType.k_EControllerElementTypeButtonX:
      return "k_EControllerElementTypeButtonX";
    case EControllerElementType.k_EControllerElementTypeButtonY:
      return "k_EControllerElementTypeButtonY";
    case EControllerElementType.k_EControllerElementTypeButtonSelect:
      return "k_EControllerElementTypeButtonSelect";
    case EControllerElementType.k_EControllerElementTypeButtonStart:
      return "k_EControllerElementTypeButtonStart";
    case EControllerElementType.k_EControllerElementTypeButtonTriggerLeft:
      return "k_EControllerElementTypeButtonTriggerLeft";
    case EControllerElementType.k_EControllerElementTypeButtonTriggerRight:
      return "k_EControllerElementTypeButtonTriggerRight";
    case EControllerElementType.k_EControllerElementTypeButtonBumperLeft:
      return "k_EControllerElementTypeButtonBumperLeft";
    case EControllerElementType.k_EControllerElementTypeButtonBumperRight:
      return "k_EControllerElementTypeButtonBumperRight";
    case EControllerElementType.k_EControllerElementTypeButtonMacro0:
      return "k_EControllerElementTypeButtonMacro0";
    case EControllerElementType.k_EControllerElementTypeButtonMacro1:
      return "k_EControllerElementTypeButtonMacro1";
    case EControllerElementType.k_EControllerElementTypeButtonMacro2:
      return "k_EControllerElementTypeButtonMacro2";
    case EControllerElementType.k_EControllerElementTypeButtonMacro3:
      return "k_EControllerElementTypeButtonMacro3";
    case EControllerElementType.k_EControllerElementTypeButtonMacro4:
      return "k_EControllerElementTypeButtonMacro4";
    case EControllerElementType.k_EControllerElementTypeButtonMacro5:
      return "k_EControllerElementTypeButtonMacro5";
    case EControllerElementType.k_EControllerElementTypeButtonMacro6:
      return "k_EControllerElementTypeButtonMacro6";
    case EControllerElementType.k_EControllerElementTypeButtonMacro7:
      return "k_EControllerElementTypeButtonMacro7";
    case EControllerElementType.k_EControllerElementTypeTrackpadCenter:
      return "k_EControllerElementTypeTrackpadCenter";
    case EControllerElementType.k_EControllerElementTypeTrackpadLeft:
      return "k_EControllerElementTypeTrackpadLeft";
    case EControllerElementType.k_EControllerElementTypeTrackpadRight:
      return "k_EControllerElementTypeTrackpadRight";
    case EControllerElementType.k_EControllerElementTypeKeyboard:
      return "k_EControllerElementTypeKeyboard";
    case EControllerElementType.k_EControllerElementTypeMagnifyingGlass:
      return "k_EControllerElementTypeMagnifyingGlass";
    case EControllerElementType.k_EControllerElementTypeButtonMacro1Finger:
      return "k_EControllerElementTypeButtonMacro1Finger";
    case EControllerElementType.k_EControllerElementTypeButtonMacro2Finger:
      return "k_EControllerElementTypeButtonMacro2Finger";
    case EControllerElementType.k_EControllerElementTypeRecordInput:
      return "k_EControllerElementTypeRecordInput";
    case EControllerElementType.k_EControllerElementTypePlaybackInput:
      return "k_EControllerElementTypePlaybackInput";
    case EControllerElementType.k_EControllerElementTypePaste:
      return "k_EControllerElementTypePaste";
    case EControllerElementType.k_EControllerElementTypeMax:
      return "k_EControllerElementTypeMax";
    case EControllerElementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CVirtualControllerElement {
  type: EControllerElementType;
  visible: boolean;
  xPosition: number;
  yPosition: number;
  xScale: number;
  yScale: number;
}

export interface CVirtualControllerColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface CVirtualControllerLayout {
  layoutVersion: number;
  actionsetId: number;
  elements: CVirtualControllerElement[];
  color: CVirtualControllerColor | undefined;
}

export interface CVirtualControllerLayouts {
  layouts: CVirtualControllerLayout[];
  inputMode: EInputMode;
  mouseMode: EMouseMode;
  trackpadSensitivity: number;
  pinchZoomEnabled: boolean;
  pinchZoomX: number;
  pinchZoomY: number;
  pinchZoomScale: number;
  shaken: boolean;
  mouseOffscreen: boolean;
}

export interface CVirtualControllerConfig {
  name: string;
  actionsets: CVirtualControllerConfig_ActionSet[];
  defaultMouseMode: EMouseMode;
}

export interface CVirtualControllerConfig_Control {
  name: string;
  icon: string;
  inputSource: number;
  inputMode: number;
  inputElement: number;
  outputGamepad: number;
  outputKeyboard: number;
  outputMouse: number;
  iconForeground: string;
  iconBackground: string;
  inputToggle: boolean;
  inputActivateStickOrTrackpad: number;
  activationType: number;
  longPressMs: number;
  doublePressMs: number;
}

export interface CVirtualControllerConfig_ActionSet {
  id: number;
  parentId: number;
  name: string;
  controls: CVirtualControllerConfig_Control[];
}

export interface CVirtualControllerLayoutPackage {
  appid: number;
  creator: number;
  initialRevision: number;
  savedRevision: number;
  config: CVirtualControllerConfig | undefined;
  layouts: CVirtualControllerLayouts | undefined;
}

export interface CVirtualControllerGlobalConfig {
  feedbackEnabled: boolean;
  gyroscopeEnabled: boolean;
  autoFadeEnabled: boolean;
  rumbleEnabled: boolean;
  shakeFadeEnabled: boolean;
}

function createBaseCVirtualControllerElement(): CVirtualControllerElement {
  return { type: 0, visible: false, xPosition: 0, yPosition: 0, xScale: 0, yScale: 0 };
}

export const CVirtualControllerElement = {
  encode(message: CVirtualControllerElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    if (message.xPosition !== 0) {
      writer.uint32(29).float(message.xPosition);
    }
    if (message.yPosition !== 0) {
      writer.uint32(37).float(message.yPosition);
    }
    if (message.xScale !== 0) {
      writer.uint32(45).float(message.xScale);
    }
    if (message.yScale !== 0) {
      writer.uint32(53).float(message.yScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerElement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.visible = reader.bool();
          break;
        case 3:
          message.xPosition = reader.float();
          break;
        case 4:
          message.yPosition = reader.float();
          break;
        case 5:
          message.xScale = reader.float();
          break;
        case 6:
          message.yScale = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerElement {
    return {
      type: isSet(object.type) ? eControllerElementTypeFromJSON(object.type) : 0,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      xPosition: isSet(object.xPosition) ? Number(object.xPosition) : 0,
      yPosition: isSet(object.yPosition) ? Number(object.yPosition) : 0,
      xScale: isSet(object.xScale) ? Number(object.xScale) : 0,
      yScale: isSet(object.yScale) ? Number(object.yScale) : 0,
    };
  },

  toJSON(message: CVirtualControllerElement): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eControllerElementTypeToJSON(message.type));
    message.visible !== undefined && (obj.visible = message.visible);
    message.xPosition !== undefined && (obj.xPosition = message.xPosition);
    message.yPosition !== undefined && (obj.yPosition = message.yPosition);
    message.xScale !== undefined && (obj.xScale = message.xScale);
    message.yScale !== undefined && (obj.yScale = message.yScale);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerElement>, I>>(base?: I): CVirtualControllerElement {
    return CVirtualControllerElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerElement>, I>>(object: I): CVirtualControllerElement {
    const message = createBaseCVirtualControllerElement();
    message.type = object.type ?? 0;
    message.visible = object.visible ?? false;
    message.xPosition = object.xPosition ?? 0;
    message.yPosition = object.yPosition ?? 0;
    message.xScale = object.xScale ?? 0;
    message.yScale = object.yScale ?? 0;
    return message;
  },
};

function createBaseCVirtualControllerColor(): CVirtualControllerColor {
  return { r: 0, g: 0, b: 0, a: 0 };
}

export const CVirtualControllerColor = {
  encode(message: CVirtualControllerColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(13).float(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(21).float(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(29).float(message.b);
    }
    if (message.a !== 0) {
      writer.uint32(37).float(message.a);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.float();
          break;
        case 2:
          message.g = reader.float();
          break;
        case 3:
          message.b = reader.float();
          break;
        case 4:
          message.a = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerColor {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
      a: isSet(object.a) ? Number(object.a) : 0,
    };
  },

  toJSON(message: CVirtualControllerColor): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = message.r);
    message.g !== undefined && (obj.g = message.g);
    message.b !== undefined && (obj.b = message.b);
    message.a !== undefined && (obj.a = message.a);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerColor>, I>>(base?: I): CVirtualControllerColor {
    return CVirtualControllerColor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerColor>, I>>(object: I): CVirtualControllerColor {
    const message = createBaseCVirtualControllerColor();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    message.a = object.a ?? 0;
    return message;
  },
};

function createBaseCVirtualControllerLayout(): CVirtualControllerLayout {
  return { layoutVersion: 0, actionsetId: 0, elements: [], color: undefined };
}

export const CVirtualControllerLayout = {
  encode(message: CVirtualControllerLayout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layoutVersion !== 0) {
      writer.uint32(8).int32(message.layoutVersion);
    }
    if (message.actionsetId !== 0) {
      writer.uint32(16).int32(message.actionsetId);
    }
    for (const v of message.elements) {
      CVirtualControllerElement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.color !== undefined) {
      CVirtualControllerColor.encode(message.color, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerLayout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layoutVersion = reader.int32();
          break;
        case 2:
          message.actionsetId = reader.int32();
          break;
        case 4:
          message.elements.push(CVirtualControllerElement.decode(reader, reader.uint32()));
          break;
        case 5:
          message.color = CVirtualControllerColor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerLayout {
    return {
      layoutVersion: isSet(object.layoutVersion) ? Number(object.layoutVersion) : 0,
      actionsetId: isSet(object.actionsetId) ? Number(object.actionsetId) : 0,
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => CVirtualControllerElement.fromJSON(e))
        : [],
      color: isSet(object.color) ? CVirtualControllerColor.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: CVirtualControllerLayout): unknown {
    const obj: any = {};
    message.layoutVersion !== undefined && (obj.layoutVersion = Math.round(message.layoutVersion));
    message.actionsetId !== undefined && (obj.actionsetId = Math.round(message.actionsetId));
    if (message.elements) {
      obj.elements = message.elements.map((e) => e ? CVirtualControllerElement.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    message.color !== undefined &&
      (obj.color = message.color ? CVirtualControllerColor.toJSON(message.color) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerLayout>, I>>(base?: I): CVirtualControllerLayout {
    return CVirtualControllerLayout.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerLayout>, I>>(object: I): CVirtualControllerLayout {
    const message = createBaseCVirtualControllerLayout();
    message.layoutVersion = object.layoutVersion ?? 0;
    message.actionsetId = object.actionsetId ?? 0;
    message.elements = object.elements?.map((e) => CVirtualControllerElement.fromPartial(e)) || [];
    message.color = (object.color !== undefined && object.color !== null)
      ? CVirtualControllerColor.fromPartial(object.color)
      : undefined;
    return message;
  },
};

function createBaseCVirtualControllerLayouts(): CVirtualControllerLayouts {
  return {
    layouts: [],
    inputMode: 0,
    mouseMode: 0,
    trackpadSensitivity: 0,
    pinchZoomEnabled: false,
    pinchZoomX: 0,
    pinchZoomY: 0,
    pinchZoomScale: 0,
    shaken: false,
    mouseOffscreen: false,
  };
}

export const CVirtualControllerLayouts = {
  encode(message: CVirtualControllerLayouts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.layouts) {
      CVirtualControllerLayout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.inputMode !== 0) {
      writer.uint32(16).int32(message.inputMode);
    }
    if (message.mouseMode !== 0) {
      writer.uint32(24).int32(message.mouseMode);
    }
    if (message.trackpadSensitivity !== 0) {
      writer.uint32(37).float(message.trackpadSensitivity);
    }
    if (message.pinchZoomEnabled === true) {
      writer.uint32(40).bool(message.pinchZoomEnabled);
    }
    if (message.pinchZoomX !== 0) {
      writer.uint32(53).float(message.pinchZoomX);
    }
    if (message.pinchZoomY !== 0) {
      writer.uint32(61).float(message.pinchZoomY);
    }
    if (message.pinchZoomScale !== 0) {
      writer.uint32(69).float(message.pinchZoomScale);
    }
    if (message.shaken === true) {
      writer.uint32(72).bool(message.shaken);
    }
    if (message.mouseOffscreen === true) {
      writer.uint32(80).bool(message.mouseOffscreen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerLayouts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerLayouts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layouts.push(CVirtualControllerLayout.decode(reader, reader.uint32()));
          break;
        case 2:
          message.inputMode = reader.int32() as any;
          break;
        case 3:
          message.mouseMode = reader.int32() as any;
          break;
        case 4:
          message.trackpadSensitivity = reader.float();
          break;
        case 5:
          message.pinchZoomEnabled = reader.bool();
          break;
        case 6:
          message.pinchZoomX = reader.float();
          break;
        case 7:
          message.pinchZoomY = reader.float();
          break;
        case 8:
          message.pinchZoomScale = reader.float();
          break;
        case 9:
          message.shaken = reader.bool();
          break;
        case 10:
          message.mouseOffscreen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerLayouts {
    return {
      layouts: Array.isArray(object?.layouts)
        ? object.layouts.map((e: any) => CVirtualControllerLayout.fromJSON(e))
        : [],
      inputMode: isSet(object.inputMode) ? eInputModeFromJSON(object.inputMode) : 0,
      mouseMode: isSet(object.mouseMode) ? eMouseModeFromJSON(object.mouseMode) : 0,
      trackpadSensitivity: isSet(object.trackpadSensitivity) ? Number(object.trackpadSensitivity) : 0,
      pinchZoomEnabled: isSet(object.pinchZoomEnabled) ? Boolean(object.pinchZoomEnabled) : false,
      pinchZoomX: isSet(object.pinchZoomX) ? Number(object.pinchZoomX) : 0,
      pinchZoomY: isSet(object.pinchZoomY) ? Number(object.pinchZoomY) : 0,
      pinchZoomScale: isSet(object.pinchZoomScale) ? Number(object.pinchZoomScale) : 0,
      shaken: isSet(object.shaken) ? Boolean(object.shaken) : false,
      mouseOffscreen: isSet(object.mouseOffscreen) ? Boolean(object.mouseOffscreen) : false,
    };
  },

  toJSON(message: CVirtualControllerLayouts): unknown {
    const obj: any = {};
    if (message.layouts) {
      obj.layouts = message.layouts.map((e) => e ? CVirtualControllerLayout.toJSON(e) : undefined);
    } else {
      obj.layouts = [];
    }
    message.inputMode !== undefined && (obj.inputMode = eInputModeToJSON(message.inputMode));
    message.mouseMode !== undefined && (obj.mouseMode = eMouseModeToJSON(message.mouseMode));
    message.trackpadSensitivity !== undefined && (obj.trackpadSensitivity = message.trackpadSensitivity);
    message.pinchZoomEnabled !== undefined && (obj.pinchZoomEnabled = message.pinchZoomEnabled);
    message.pinchZoomX !== undefined && (obj.pinchZoomX = message.pinchZoomX);
    message.pinchZoomY !== undefined && (obj.pinchZoomY = message.pinchZoomY);
    message.pinchZoomScale !== undefined && (obj.pinchZoomScale = message.pinchZoomScale);
    message.shaken !== undefined && (obj.shaken = message.shaken);
    message.mouseOffscreen !== undefined && (obj.mouseOffscreen = message.mouseOffscreen);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerLayouts>, I>>(base?: I): CVirtualControllerLayouts {
    return CVirtualControllerLayouts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerLayouts>, I>>(object: I): CVirtualControllerLayouts {
    const message = createBaseCVirtualControllerLayouts();
    message.layouts = object.layouts?.map((e) => CVirtualControllerLayout.fromPartial(e)) || [];
    message.inputMode = object.inputMode ?? 0;
    message.mouseMode = object.mouseMode ?? 0;
    message.trackpadSensitivity = object.trackpadSensitivity ?? 0;
    message.pinchZoomEnabled = object.pinchZoomEnabled ?? false;
    message.pinchZoomX = object.pinchZoomX ?? 0;
    message.pinchZoomY = object.pinchZoomY ?? 0;
    message.pinchZoomScale = object.pinchZoomScale ?? 0;
    message.shaken = object.shaken ?? false;
    message.mouseOffscreen = object.mouseOffscreen ?? false;
    return message;
  },
};

function createBaseCVirtualControllerConfig(): CVirtualControllerConfig {
  return { name: "", actionsets: [], defaultMouseMode: 0 };
}

export const CVirtualControllerConfig = {
  encode(message: CVirtualControllerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.actionsets) {
      CVirtualControllerConfig_ActionSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultMouseMode !== 0) {
      writer.uint32(24).int32(message.defaultMouseMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.actionsets.push(CVirtualControllerConfig_ActionSet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.defaultMouseMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      actionsets: Array.isArray(object?.actionsets)
        ? object.actionsets.map((e: any) => CVirtualControllerConfig_ActionSet.fromJSON(e))
        : [],
      defaultMouseMode: isSet(object.defaultMouseMode) ? eMouseModeFromJSON(object.defaultMouseMode) : 0,
    };
  },

  toJSON(message: CVirtualControllerConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.actionsets) {
      obj.actionsets = message.actionsets.map((e) => e ? CVirtualControllerConfig_ActionSet.toJSON(e) : undefined);
    } else {
      obj.actionsets = [];
    }
    message.defaultMouseMode !== undefined && (obj.defaultMouseMode = eMouseModeToJSON(message.defaultMouseMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerConfig>, I>>(base?: I): CVirtualControllerConfig {
    return CVirtualControllerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerConfig>, I>>(object: I): CVirtualControllerConfig {
    const message = createBaseCVirtualControllerConfig();
    message.name = object.name ?? "";
    message.actionsets = object.actionsets?.map((e) => CVirtualControllerConfig_ActionSet.fromPartial(e)) || [];
    message.defaultMouseMode = object.defaultMouseMode ?? 0;
    return message;
  },
};

function createBaseCVirtualControllerConfig_Control(): CVirtualControllerConfig_Control {
  return {
    name: "",
    icon: "",
    inputSource: 0,
    inputMode: 0,
    inputElement: 0,
    outputGamepad: 0,
    outputKeyboard: 0,
    outputMouse: 0,
    iconForeground: "",
    iconBackground: "",
    inputToggle: false,
    inputActivateStickOrTrackpad: 0,
    activationType: 0,
    longPressMs: 0,
    doublePressMs: 0,
  };
}

export const CVirtualControllerConfig_Control = {
  encode(message: CVirtualControllerConfig_Control, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.icon !== "") {
      writer.uint32(18).string(message.icon);
    }
    if (message.inputSource !== 0) {
      writer.uint32(24).int32(message.inputSource);
    }
    if (message.inputMode !== 0) {
      writer.uint32(32).int32(message.inputMode);
    }
    if (message.inputElement !== 0) {
      writer.uint32(40).int32(message.inputElement);
    }
    if (message.outputGamepad !== 0) {
      writer.uint32(48).int32(message.outputGamepad);
    }
    if (message.outputKeyboard !== 0) {
      writer.uint32(56).int32(message.outputKeyboard);
    }
    if (message.outputMouse !== 0) {
      writer.uint32(64).int32(message.outputMouse);
    }
    if (message.iconForeground !== "") {
      writer.uint32(74).string(message.iconForeground);
    }
    if (message.iconBackground !== "") {
      writer.uint32(82).string(message.iconBackground);
    }
    if (message.inputToggle === true) {
      writer.uint32(88).bool(message.inputToggle);
    }
    if (message.inputActivateStickOrTrackpad !== 0) {
      writer.uint32(96).int32(message.inputActivateStickOrTrackpad);
    }
    if (message.activationType !== 0) {
      writer.uint32(104).int32(message.activationType);
    }
    if (message.longPressMs !== 0) {
      writer.uint32(112).int32(message.longPressMs);
    }
    if (message.doublePressMs !== 0) {
      writer.uint32(120).int32(message.doublePressMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerConfig_Control {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerConfig_Control();
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
          message.inputSource = reader.int32();
          break;
        case 4:
          message.inputMode = reader.int32();
          break;
        case 5:
          message.inputElement = reader.int32();
          break;
        case 6:
          message.outputGamepad = reader.int32();
          break;
        case 7:
          message.outputKeyboard = reader.int32();
          break;
        case 8:
          message.outputMouse = reader.int32();
          break;
        case 9:
          message.iconForeground = reader.string();
          break;
        case 10:
          message.iconBackground = reader.string();
          break;
        case 11:
          message.inputToggle = reader.bool();
          break;
        case 12:
          message.inputActivateStickOrTrackpad = reader.int32();
          break;
        case 13:
          message.activationType = reader.int32();
          break;
        case 14:
          message.longPressMs = reader.int32();
          break;
        case 15:
          message.doublePressMs = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerConfig_Control {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      inputSource: isSet(object.inputSource) ? Number(object.inputSource) : 0,
      inputMode: isSet(object.inputMode) ? Number(object.inputMode) : 0,
      inputElement: isSet(object.inputElement) ? Number(object.inputElement) : 0,
      outputGamepad: isSet(object.outputGamepad) ? Number(object.outputGamepad) : 0,
      outputKeyboard: isSet(object.outputKeyboard) ? Number(object.outputKeyboard) : 0,
      outputMouse: isSet(object.outputMouse) ? Number(object.outputMouse) : 0,
      iconForeground: isSet(object.iconForeground) ? String(object.iconForeground) : "",
      iconBackground: isSet(object.iconBackground) ? String(object.iconBackground) : "",
      inputToggle: isSet(object.inputToggle) ? Boolean(object.inputToggle) : false,
      inputActivateStickOrTrackpad: isSet(object.inputActivateStickOrTrackpad)
        ? Number(object.inputActivateStickOrTrackpad)
        : 0,
      activationType: isSet(object.activationType) ? Number(object.activationType) : 0,
      longPressMs: isSet(object.longPressMs) ? Number(object.longPressMs) : 0,
      doublePressMs: isSet(object.doublePressMs) ? Number(object.doublePressMs) : 0,
    };
  },

  toJSON(message: CVirtualControllerConfig_Control): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.icon !== undefined && (obj.icon = message.icon);
    message.inputSource !== undefined && (obj.inputSource = Math.round(message.inputSource));
    message.inputMode !== undefined && (obj.inputMode = Math.round(message.inputMode));
    message.inputElement !== undefined && (obj.inputElement = Math.round(message.inputElement));
    message.outputGamepad !== undefined && (obj.outputGamepad = Math.round(message.outputGamepad));
    message.outputKeyboard !== undefined && (obj.outputKeyboard = Math.round(message.outputKeyboard));
    message.outputMouse !== undefined && (obj.outputMouse = Math.round(message.outputMouse));
    message.iconForeground !== undefined && (obj.iconForeground = message.iconForeground);
    message.iconBackground !== undefined && (obj.iconBackground = message.iconBackground);
    message.inputToggle !== undefined && (obj.inputToggle = message.inputToggle);
    message.inputActivateStickOrTrackpad !== undefined &&
      (obj.inputActivateStickOrTrackpad = Math.round(message.inputActivateStickOrTrackpad));
    message.activationType !== undefined && (obj.activationType = Math.round(message.activationType));
    message.longPressMs !== undefined && (obj.longPressMs = Math.round(message.longPressMs));
    message.doublePressMs !== undefined && (obj.doublePressMs = Math.round(message.doublePressMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerConfig_Control>, I>>(
    base?: I,
  ): CVirtualControllerConfig_Control {
    return CVirtualControllerConfig_Control.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerConfig_Control>, I>>(
    object: I,
  ): CVirtualControllerConfig_Control {
    const message = createBaseCVirtualControllerConfig_Control();
    message.name = object.name ?? "";
    message.icon = object.icon ?? "";
    message.inputSource = object.inputSource ?? 0;
    message.inputMode = object.inputMode ?? 0;
    message.inputElement = object.inputElement ?? 0;
    message.outputGamepad = object.outputGamepad ?? 0;
    message.outputKeyboard = object.outputKeyboard ?? 0;
    message.outputMouse = object.outputMouse ?? 0;
    message.iconForeground = object.iconForeground ?? "";
    message.iconBackground = object.iconBackground ?? "";
    message.inputToggle = object.inputToggle ?? false;
    message.inputActivateStickOrTrackpad = object.inputActivateStickOrTrackpad ?? 0;
    message.activationType = object.activationType ?? 0;
    message.longPressMs = object.longPressMs ?? 0;
    message.doublePressMs = object.doublePressMs ?? 0;
    return message;
  },
};

function createBaseCVirtualControllerConfig_ActionSet(): CVirtualControllerConfig_ActionSet {
  return { id: 0, parentId: 0, name: "", controls: [] };
}

export const CVirtualControllerConfig_ActionSet = {
  encode(message: CVirtualControllerConfig_ActionSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.parentId !== 0) {
      writer.uint32(16).int32(message.parentId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.controls) {
      CVirtualControllerConfig_Control.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerConfig_ActionSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerConfig_ActionSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.parentId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.controls.push(CVirtualControllerConfig_Control.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerConfig_ActionSet {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      parentId: isSet(object.parentId) ? Number(object.parentId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      controls: Array.isArray(object?.controls)
        ? object.controls.map((e: any) => CVirtualControllerConfig_Control.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CVirtualControllerConfig_ActionSet): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.parentId !== undefined && (obj.parentId = Math.round(message.parentId));
    message.name !== undefined && (obj.name = message.name);
    if (message.controls) {
      obj.controls = message.controls.map((e) => e ? CVirtualControllerConfig_Control.toJSON(e) : undefined);
    } else {
      obj.controls = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerConfig_ActionSet>, I>>(
    base?: I,
  ): CVirtualControllerConfig_ActionSet {
    return CVirtualControllerConfig_ActionSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerConfig_ActionSet>, I>>(
    object: I,
  ): CVirtualControllerConfig_ActionSet {
    const message = createBaseCVirtualControllerConfig_ActionSet();
    message.id = object.id ?? 0;
    message.parentId = object.parentId ?? 0;
    message.name = object.name ?? "";
    message.controls = object.controls?.map((e) => CVirtualControllerConfig_Control.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCVirtualControllerLayoutPackage(): CVirtualControllerLayoutPackage {
  return { appid: 0, creator: 0, initialRevision: 0, savedRevision: 0, config: undefined, layouts: undefined };
}

export const CVirtualControllerLayoutPackage = {
  encode(message: CVirtualControllerLayoutPackage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.creator !== 0) {
      writer.uint32(16).uint64(message.creator);
    }
    if (message.initialRevision !== 0) {
      writer.uint32(24).uint32(message.initialRevision);
    }
    if (message.savedRevision !== 0) {
      writer.uint32(32).uint32(message.savedRevision);
    }
    if (message.config !== undefined) {
      CVirtualControllerConfig.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    if (message.layouts !== undefined) {
      CVirtualControllerLayouts.encode(message.layouts, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerLayoutPackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerLayoutPackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.creator = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.initialRevision = reader.uint32();
          break;
        case 4:
          message.savedRevision = reader.uint32();
          break;
        case 5:
          message.config = CVirtualControllerConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.layouts = CVirtualControllerLayouts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerLayoutPackage {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      creator: isSet(object.creator) ? Number(object.creator) : 0,
      initialRevision: isSet(object.initialRevision) ? Number(object.initialRevision) : 0,
      savedRevision: isSet(object.savedRevision) ? Number(object.savedRevision) : 0,
      config: isSet(object.config) ? CVirtualControllerConfig.fromJSON(object.config) : undefined,
      layouts: isSet(object.layouts) ? CVirtualControllerLayouts.fromJSON(object.layouts) : undefined,
    };
  },

  toJSON(message: CVirtualControllerLayoutPackage): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.creator !== undefined && (obj.creator = Math.round(message.creator));
    message.initialRevision !== undefined && (obj.initialRevision = Math.round(message.initialRevision));
    message.savedRevision !== undefined && (obj.savedRevision = Math.round(message.savedRevision));
    message.config !== undefined &&
      (obj.config = message.config ? CVirtualControllerConfig.toJSON(message.config) : undefined);
    message.layouts !== undefined &&
      (obj.layouts = message.layouts ? CVirtualControllerLayouts.toJSON(message.layouts) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerLayoutPackage>, I>>(base?: I): CVirtualControllerLayoutPackage {
    return CVirtualControllerLayoutPackage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerLayoutPackage>, I>>(
    object: I,
  ): CVirtualControllerLayoutPackage {
    const message = createBaseCVirtualControllerLayoutPackage();
    message.appid = object.appid ?? 0;
    message.creator = object.creator ?? 0;
    message.initialRevision = object.initialRevision ?? 0;
    message.savedRevision = object.savedRevision ?? 0;
    message.config = (object.config !== undefined && object.config !== null)
      ? CVirtualControllerConfig.fromPartial(object.config)
      : undefined;
    message.layouts = (object.layouts !== undefined && object.layouts !== null)
      ? CVirtualControllerLayouts.fromPartial(object.layouts)
      : undefined;
    return message;
  },
};

function createBaseCVirtualControllerGlobalConfig(): CVirtualControllerGlobalConfig {
  return {
    feedbackEnabled: false,
    gyroscopeEnabled: false,
    autoFadeEnabled: false,
    rumbleEnabled: false,
    shakeFadeEnabled: false,
  };
}

export const CVirtualControllerGlobalConfig = {
  encode(message: CVirtualControllerGlobalConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feedbackEnabled === true) {
      writer.uint32(8).bool(message.feedbackEnabled);
    }
    if (message.gyroscopeEnabled === true) {
      writer.uint32(16).bool(message.gyroscopeEnabled);
    }
    if (message.autoFadeEnabled === true) {
      writer.uint32(24).bool(message.autoFadeEnabled);
    }
    if (message.rumbleEnabled === true) {
      writer.uint32(32).bool(message.rumbleEnabled);
    }
    if (message.shakeFadeEnabled === true) {
      writer.uint32(40).bool(message.shakeFadeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CVirtualControllerGlobalConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCVirtualControllerGlobalConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedbackEnabled = reader.bool();
          break;
        case 2:
          message.gyroscopeEnabled = reader.bool();
          break;
        case 3:
          message.autoFadeEnabled = reader.bool();
          break;
        case 4:
          message.rumbleEnabled = reader.bool();
          break;
        case 5:
          message.shakeFadeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CVirtualControllerGlobalConfig {
    return {
      feedbackEnabled: isSet(object.feedbackEnabled) ? Boolean(object.feedbackEnabled) : false,
      gyroscopeEnabled: isSet(object.gyroscopeEnabled) ? Boolean(object.gyroscopeEnabled) : false,
      autoFadeEnabled: isSet(object.autoFadeEnabled) ? Boolean(object.autoFadeEnabled) : false,
      rumbleEnabled: isSet(object.rumbleEnabled) ? Boolean(object.rumbleEnabled) : false,
      shakeFadeEnabled: isSet(object.shakeFadeEnabled) ? Boolean(object.shakeFadeEnabled) : false,
    };
  },

  toJSON(message: CVirtualControllerGlobalConfig): unknown {
    const obj: any = {};
    message.feedbackEnabled !== undefined && (obj.feedbackEnabled = message.feedbackEnabled);
    message.gyroscopeEnabled !== undefined && (obj.gyroscopeEnabled = message.gyroscopeEnabled);
    message.autoFadeEnabled !== undefined && (obj.autoFadeEnabled = message.autoFadeEnabled);
    message.rumbleEnabled !== undefined && (obj.rumbleEnabled = message.rumbleEnabled);
    message.shakeFadeEnabled !== undefined && (obj.shakeFadeEnabled = message.shakeFadeEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CVirtualControllerGlobalConfig>, I>>(base?: I): CVirtualControllerGlobalConfig {
    return CVirtualControllerGlobalConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CVirtualControllerGlobalConfig>, I>>(
    object: I,
  ): CVirtualControllerGlobalConfig {
    const message = createBaseCVirtualControllerGlobalConfig();
    message.feedbackEnabled = object.feedbackEnabled ?? false;
    message.gyroscopeEnabled = object.gyroscopeEnabled ?? false;
    message.autoFadeEnabled = object.autoFadeEnabled ?? false;
    message.rumbleEnabled = object.rumbleEnabled ?? false;
    message.shakeFadeEnabled = object.shakeFadeEnabled ?? false;
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
