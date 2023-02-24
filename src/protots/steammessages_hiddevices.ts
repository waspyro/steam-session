/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EHIDDeviceLocation {
  k_EDeviceLocationLocal = 0,
  k_EDeviceLocationRemote = 2,
  k_EDeviceLocationAny = 3,
  UNRECOGNIZED = -1,
}

export function eHIDDeviceLocationFromJSON(object: any): EHIDDeviceLocation {
  switch (object) {
    case 0:
    case "k_EDeviceLocationLocal":
      return EHIDDeviceLocation.k_EDeviceLocationLocal;
    case 2:
    case "k_EDeviceLocationRemote":
      return EHIDDeviceLocation.k_EDeviceLocationRemote;
    case 3:
    case "k_EDeviceLocationAny":
      return EHIDDeviceLocation.k_EDeviceLocationAny;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EHIDDeviceLocation.UNRECOGNIZED;
  }
}

export function eHIDDeviceLocationToJSON(object: EHIDDeviceLocation): string {
  switch (object) {
    case EHIDDeviceLocation.k_EDeviceLocationLocal:
      return "k_EDeviceLocationLocal";
    case EHIDDeviceLocation.k_EDeviceLocationRemote:
      return "k_EDeviceLocationRemote";
    case EHIDDeviceLocation.k_EDeviceLocationAny:
      return "k_EDeviceLocationAny";
    case EHIDDeviceLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EHIDDeviceDisconnectMethod {
  k_EDeviceDisconnectMethodUnknown = 0,
  k_EDeviceDisconnectMethodBluetooth = 1,
  k_EDeviceDisconnectMethodFeatureReport = 2,
  k_EDeviceDisconnectMethodOutputReport = 3,
  UNRECOGNIZED = -1,
}

export function eHIDDeviceDisconnectMethodFromJSON(object: any): EHIDDeviceDisconnectMethod {
  switch (object) {
    case 0:
    case "k_EDeviceDisconnectMethodUnknown":
      return EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodUnknown;
    case 1:
    case "k_EDeviceDisconnectMethodBluetooth":
      return EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodBluetooth;
    case 2:
    case "k_EDeviceDisconnectMethodFeatureReport":
      return EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodFeatureReport;
    case 3:
    case "k_EDeviceDisconnectMethodOutputReport":
      return EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodOutputReport;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EHIDDeviceDisconnectMethod.UNRECOGNIZED;
  }
}

export function eHIDDeviceDisconnectMethodToJSON(object: EHIDDeviceDisconnectMethod): string {
  switch (object) {
    case EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodUnknown:
      return "k_EDeviceDisconnectMethodUnknown";
    case EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodBluetooth:
      return "k_EDeviceDisconnectMethodBluetooth";
    case EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodFeatureReport:
      return "k_EDeviceDisconnectMethodFeatureReport";
    case EHIDDeviceDisconnectMethod.k_EDeviceDisconnectMethodOutputReport:
      return "k_EDeviceDisconnectMethodOutputReport";
    case EHIDDeviceDisconnectMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CHIDDeviceInfo {
  location: EHIDDeviceLocation;
  path: string;
  vendorId: number;
  productId: number;
  serialNumber: string;
  releaseNumber: number;
  manufacturerString: string;
  productString: string;
  usagePage: number;
  usage: number;
  interfaceNumber: number;
  ostype: number;
  isGenericGamepad: boolean;
  isGenericJoystick: boolean;
  capsBits: number;
  sessionId: number;
  eControllerTypeOBSOLETE: number;
  isXinputDeviceOBSOLETE: boolean;
  sessionRemotePlayTogetherAppid: number;
}

export interface CHIDDeviceInputReport {
  fullReport: Buffer;
  deltaReport: Buffer;
  deltaReportSize: number;
  deltaReportCrc: number;
}

export interface CHIDMessageToRemote {
  requestId: number;
  deviceOpen?: CHIDMessageToRemote_DeviceOpen | undefined;
  deviceClose?: CHIDMessageToRemote_DeviceClose | undefined;
  deviceWrite?: CHIDMessageToRemote_DeviceWrite | undefined;
  deviceRead?: CHIDMessageToRemote_DeviceRead | undefined;
  deviceSendFeatureReport?: CHIDMessageToRemote_DeviceSendFeatureReport | undefined;
  deviceGetFeatureReport?: CHIDMessageToRemote_DeviceGetFeatureReport | undefined;
  deviceGetVendorString?: CHIDMessageToRemote_DeviceGetVendorString | undefined;
  deviceGetProductString?: CHIDMessageToRemote_DeviceGetProductString | undefined;
  deviceGetSerialNumberString?: CHIDMessageToRemote_DeviceGetSerialNumberString | undefined;
  deviceStartInputReports?: CHIDMessageToRemote_DeviceStartInputReports | undefined;
  deviceRequestFullReport?: CHIDMessageToRemote_DeviceRequestFullReport | undefined;
  deviceDisconnect?: CHIDMessageToRemote_DeviceDisconnect | undefined;
}

export interface CHIDMessageToRemote_DeviceOpen {
  info: CHIDDeviceInfo | undefined;
}

export interface CHIDMessageToRemote_DeviceClose {
  device: number;
}

export interface CHIDMessageToRemote_DeviceWrite {
  device: number;
  data: Buffer;
}

export interface CHIDMessageToRemote_DeviceRead {
  device: number;
  length: number;
  timeoutMs: number;
}

export interface CHIDMessageToRemote_DeviceSendFeatureReport {
  device: number;
  data: Buffer;
}

export interface CHIDMessageToRemote_DeviceGetFeatureReport {
  device: number;
  reportNumber: Buffer;
  length: number;
}

export interface CHIDMessageToRemote_DeviceGetVendorString {
  device: number;
}

export interface CHIDMessageToRemote_DeviceGetProductString {
  device: number;
}

export interface CHIDMessageToRemote_DeviceGetSerialNumberString {
  device: number;
}

export interface CHIDMessageToRemote_DeviceStartInputReports {
  device: number;
  length: number;
}

export interface CHIDMessageToRemote_DeviceRequestFullReport {
  device: number;
}

export interface CHIDMessageToRemote_DeviceDisconnect {
  device: number;
  disconnectMethod: EHIDDeviceDisconnectMethod;
  data: Buffer;
}

export interface CHIDMessageFromRemote {
  updateDeviceList?: CHIDMessageFromRemote_UpdateDeviceList | undefined;
  response?: CHIDMessageFromRemote_RequestResponse | undefined;
  reports?: CHIDMessageFromRemote_DeviceInputReports | undefined;
  closeDevice?: CHIDMessageFromRemote_CloseDevice | undefined;
  closeAllDevices?: CHIDMessageFromRemote_CloseAllDevices | undefined;
}

export interface CHIDMessageFromRemote_UpdateDeviceList {
  devices: CHIDDeviceInfo[];
}

export interface CHIDMessageFromRemote_RequestResponse {
  requestId: number;
  result: number;
  data: Buffer;
}

export interface CHIDMessageFromRemote_DeviceInputReports {
  deviceReports: CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport[];
}

export interface CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
  device: number;
  reports: CHIDDeviceInputReport[];
}

export interface CHIDMessageFromRemote_CloseDevice {
  device: number;
}

export interface CHIDMessageFromRemote_CloseAllDevices {
}

function createBaseCHIDDeviceInfo(): CHIDDeviceInfo {
  return {
    location: 0,
    path: "",
    vendorId: 0,
    productId: 0,
    serialNumber: "",
    releaseNumber: 0,
    manufacturerString: "",
    productString: "",
    usagePage: 0,
    usage: 0,
    interfaceNumber: 0,
    ostype: 0,
    isGenericGamepad: false,
    isGenericJoystick: false,
    capsBits: 0,
    sessionId: 0,
    eControllerTypeOBSOLETE: 0,
    isXinputDeviceOBSOLETE: false,
    sessionRemotePlayTogetherAppid: 0,
  };
}

export const CHIDDeviceInfo = {
  encode(message: CHIDDeviceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.vendorId !== 0) {
      writer.uint32(24).uint32(message.vendorId);
    }
    if (message.productId !== 0) {
      writer.uint32(32).uint32(message.productId);
    }
    if (message.serialNumber !== "") {
      writer.uint32(42).string(message.serialNumber);
    }
    if (message.releaseNumber !== 0) {
      writer.uint32(48).uint32(message.releaseNumber);
    }
    if (message.manufacturerString !== "") {
      writer.uint32(58).string(message.manufacturerString);
    }
    if (message.productString !== "") {
      writer.uint32(66).string(message.productString);
    }
    if (message.usagePage !== 0) {
      writer.uint32(72).uint32(message.usagePage);
    }
    if (message.usage !== 0) {
      writer.uint32(80).uint32(message.usage);
    }
    if (message.interfaceNumber !== 0) {
      writer.uint32(88).int32(message.interfaceNumber);
    }
    if (message.ostype !== 0) {
      writer.uint32(96).int32(message.ostype);
    }
    if (message.isGenericGamepad === true) {
      writer.uint32(104).bool(message.isGenericGamepad);
    }
    if (message.isGenericJoystick === true) {
      writer.uint32(112).bool(message.isGenericJoystick);
    }
    if (message.capsBits !== 0) {
      writer.uint32(120).uint32(message.capsBits);
    }
    if (message.sessionId !== 0) {
      writer.uint32(128).uint32(message.sessionId);
    }
    if (message.eControllerTypeOBSOLETE !== 0) {
      writer.uint32(136).uint32(message.eControllerTypeOBSOLETE);
    }
    if (message.isXinputDeviceOBSOLETE === true) {
      writer.uint32(144).bool(message.isXinputDeviceOBSOLETE);
    }
    if (message.sessionRemotePlayTogetherAppid !== 0) {
      writer.uint32(152).uint32(message.sessionRemotePlayTogetherAppid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDDeviceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDDeviceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.int32() as any;
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.vendorId = reader.uint32();
          break;
        case 4:
          message.productId = reader.uint32();
          break;
        case 5:
          message.serialNumber = reader.string();
          break;
        case 6:
          message.releaseNumber = reader.uint32();
          break;
        case 7:
          message.manufacturerString = reader.string();
          break;
        case 8:
          message.productString = reader.string();
          break;
        case 9:
          message.usagePage = reader.uint32();
          break;
        case 10:
          message.usage = reader.uint32();
          break;
        case 11:
          message.interfaceNumber = reader.int32();
          break;
        case 12:
          message.ostype = reader.int32();
          break;
        case 13:
          message.isGenericGamepad = reader.bool();
          break;
        case 14:
          message.isGenericJoystick = reader.bool();
          break;
        case 15:
          message.capsBits = reader.uint32();
          break;
        case 16:
          message.sessionId = reader.uint32();
          break;
        case 17:
          message.eControllerTypeOBSOLETE = reader.uint32();
          break;
        case 18:
          message.isXinputDeviceOBSOLETE = reader.bool();
          break;
        case 19:
          message.sessionRemotePlayTogetherAppid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDDeviceInfo {
    return {
      location: isSet(object.location) ? eHIDDeviceLocationFromJSON(object.location) : 0,
      path: isSet(object.path) ? String(object.path) : "",
      vendorId: isSet(object.vendorId) ? Number(object.vendorId) : 0,
      productId: isSet(object.productId) ? Number(object.productId) : 0,
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      releaseNumber: isSet(object.releaseNumber) ? Number(object.releaseNumber) : 0,
      manufacturerString: isSet(object.manufacturerString) ? String(object.manufacturerString) : "",
      productString: isSet(object.productString) ? String(object.productString) : "",
      usagePage: isSet(object.usagePage) ? Number(object.usagePage) : 0,
      usage: isSet(object.usage) ? Number(object.usage) : 0,
      interfaceNumber: isSet(object.interfaceNumber) ? Number(object.interfaceNumber) : 0,
      ostype: isSet(object.ostype) ? Number(object.ostype) : 0,
      isGenericGamepad: isSet(object.isGenericGamepad) ? Boolean(object.isGenericGamepad) : false,
      isGenericJoystick: isSet(object.isGenericJoystick) ? Boolean(object.isGenericJoystick) : false,
      capsBits: isSet(object.capsBits) ? Number(object.capsBits) : 0,
      sessionId: isSet(object.sessionId) ? Number(object.sessionId) : 0,
      eControllerTypeOBSOLETE: isSet(object.eControllerTypeOBSOLETE) ? Number(object.eControllerTypeOBSOLETE) : 0,
      isXinputDeviceOBSOLETE: isSet(object.isXinputDeviceOBSOLETE) ? Boolean(object.isXinputDeviceOBSOLETE) : false,
      sessionRemotePlayTogetherAppid: isSet(object.sessionRemotePlayTogetherAppid)
        ? Number(object.sessionRemotePlayTogetherAppid)
        : 0,
    };
  },

  toJSON(message: CHIDDeviceInfo): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = eHIDDeviceLocationToJSON(message.location));
    message.path !== undefined && (obj.path = message.path);
    message.vendorId !== undefined && (obj.vendorId = Math.round(message.vendorId));
    message.productId !== undefined && (obj.productId = Math.round(message.productId));
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.releaseNumber !== undefined && (obj.releaseNumber = Math.round(message.releaseNumber));
    message.manufacturerString !== undefined && (obj.manufacturerString = message.manufacturerString);
    message.productString !== undefined && (obj.productString = message.productString);
    message.usagePage !== undefined && (obj.usagePage = Math.round(message.usagePage));
    message.usage !== undefined && (obj.usage = Math.round(message.usage));
    message.interfaceNumber !== undefined && (obj.interfaceNumber = Math.round(message.interfaceNumber));
    message.ostype !== undefined && (obj.ostype = Math.round(message.ostype));
    message.isGenericGamepad !== undefined && (obj.isGenericGamepad = message.isGenericGamepad);
    message.isGenericJoystick !== undefined && (obj.isGenericJoystick = message.isGenericJoystick);
    message.capsBits !== undefined && (obj.capsBits = Math.round(message.capsBits));
    message.sessionId !== undefined && (obj.sessionId = Math.round(message.sessionId));
    message.eControllerTypeOBSOLETE !== undefined &&
      (obj.eControllerTypeOBSOLETE = Math.round(message.eControllerTypeOBSOLETE));
    message.isXinputDeviceOBSOLETE !== undefined && (obj.isXinputDeviceOBSOLETE = message.isXinputDeviceOBSOLETE);
    message.sessionRemotePlayTogetherAppid !== undefined &&
      (obj.sessionRemotePlayTogetherAppid = Math.round(message.sessionRemotePlayTogetherAppid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDDeviceInfo>, I>>(base?: I): CHIDDeviceInfo {
    return CHIDDeviceInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDDeviceInfo>, I>>(object: I): CHIDDeviceInfo {
    const message = createBaseCHIDDeviceInfo();
    message.location = object.location ?? 0;
    message.path = object.path ?? "";
    message.vendorId = object.vendorId ?? 0;
    message.productId = object.productId ?? 0;
    message.serialNumber = object.serialNumber ?? "";
    message.releaseNumber = object.releaseNumber ?? 0;
    message.manufacturerString = object.manufacturerString ?? "";
    message.productString = object.productString ?? "";
    message.usagePage = object.usagePage ?? 0;
    message.usage = object.usage ?? 0;
    message.interfaceNumber = object.interfaceNumber ?? 0;
    message.ostype = object.ostype ?? 0;
    message.isGenericGamepad = object.isGenericGamepad ?? false;
    message.isGenericJoystick = object.isGenericJoystick ?? false;
    message.capsBits = object.capsBits ?? 0;
    message.sessionId = object.sessionId ?? 0;
    message.eControllerTypeOBSOLETE = object.eControllerTypeOBSOLETE ?? 0;
    message.isXinputDeviceOBSOLETE = object.isXinputDeviceOBSOLETE ?? false;
    message.sessionRemotePlayTogetherAppid = object.sessionRemotePlayTogetherAppid ?? 0;
    return message;
  },
};

function createBaseCHIDDeviceInputReport(): CHIDDeviceInputReport {
  return { fullReport: Buffer.alloc(0), deltaReport: Buffer.alloc(0), deltaReportSize: 0, deltaReportCrc: 0 };
}

export const CHIDDeviceInputReport = {
  encode(message: CHIDDeviceInputReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fullReport.length !== 0) {
      writer.uint32(10).bytes(message.fullReport);
    }
    if (message.deltaReport.length !== 0) {
      writer.uint32(18).bytes(message.deltaReport);
    }
    if (message.deltaReportSize !== 0) {
      writer.uint32(24).uint32(message.deltaReportSize);
    }
    if (message.deltaReportCrc !== 0) {
      writer.uint32(32).uint32(message.deltaReportCrc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDDeviceInputReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDDeviceInputReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullReport = reader.bytes() as Buffer;
          break;
        case 2:
          message.deltaReport = reader.bytes() as Buffer;
          break;
        case 3:
          message.deltaReportSize = reader.uint32();
          break;
        case 4:
          message.deltaReportCrc = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDDeviceInputReport {
    return {
      fullReport: isSet(object.fullReport) ? Buffer.from(bytesFromBase64(object.fullReport)) : Buffer.alloc(0),
      deltaReport: isSet(object.deltaReport) ? Buffer.from(bytesFromBase64(object.deltaReport)) : Buffer.alloc(0),
      deltaReportSize: isSet(object.deltaReportSize) ? Number(object.deltaReportSize) : 0,
      deltaReportCrc: isSet(object.deltaReportCrc) ? Number(object.deltaReportCrc) : 0,
    };
  },

  toJSON(message: CHIDDeviceInputReport): unknown {
    const obj: any = {};
    message.fullReport !== undefined &&
      (obj.fullReport = base64FromBytes(message.fullReport !== undefined ? message.fullReport : Buffer.alloc(0)));
    message.deltaReport !== undefined &&
      (obj.deltaReport = base64FromBytes(message.deltaReport !== undefined ? message.deltaReport : Buffer.alloc(0)));
    message.deltaReportSize !== undefined && (obj.deltaReportSize = Math.round(message.deltaReportSize));
    message.deltaReportCrc !== undefined && (obj.deltaReportCrc = Math.round(message.deltaReportCrc));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDDeviceInputReport>, I>>(base?: I): CHIDDeviceInputReport {
    return CHIDDeviceInputReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDDeviceInputReport>, I>>(object: I): CHIDDeviceInputReport {
    const message = createBaseCHIDDeviceInputReport();
    message.fullReport = object.fullReport ?? Buffer.alloc(0);
    message.deltaReport = object.deltaReport ?? Buffer.alloc(0);
    message.deltaReportSize = object.deltaReportSize ?? 0;
    message.deltaReportCrc = object.deltaReportCrc ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote(): CHIDMessageToRemote {
  return {
    requestId: 0,
    deviceOpen: undefined,
    deviceClose: undefined,
    deviceWrite: undefined,
    deviceRead: undefined,
    deviceSendFeatureReport: undefined,
    deviceGetFeatureReport: undefined,
    deviceGetVendorString: undefined,
    deviceGetProductString: undefined,
    deviceGetSerialNumberString: undefined,
    deviceStartInputReports: undefined,
    deviceRequestFullReport: undefined,
    deviceDisconnect: undefined,
  };
}

export const CHIDMessageToRemote = {
  encode(message: CHIDMessageToRemote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.deviceOpen !== undefined) {
      CHIDMessageToRemote_DeviceOpen.encode(message.deviceOpen, writer.uint32(18).fork()).ldelim();
    }
    if (message.deviceClose !== undefined) {
      CHIDMessageToRemote_DeviceClose.encode(message.deviceClose, writer.uint32(26).fork()).ldelim();
    }
    if (message.deviceWrite !== undefined) {
      CHIDMessageToRemote_DeviceWrite.encode(message.deviceWrite, writer.uint32(34).fork()).ldelim();
    }
    if (message.deviceRead !== undefined) {
      CHIDMessageToRemote_DeviceRead.encode(message.deviceRead, writer.uint32(42).fork()).ldelim();
    }
    if (message.deviceSendFeatureReport !== undefined) {
      CHIDMessageToRemote_DeviceSendFeatureReport.encode(message.deviceSendFeatureReport, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.deviceGetFeatureReport !== undefined) {
      CHIDMessageToRemote_DeviceGetFeatureReport.encode(message.deviceGetFeatureReport, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.deviceGetVendorString !== undefined) {
      CHIDMessageToRemote_DeviceGetVendorString.encode(message.deviceGetVendorString, writer.uint32(66).fork())
        .ldelim();
    }
    if (message.deviceGetProductString !== undefined) {
      CHIDMessageToRemote_DeviceGetProductString.encode(message.deviceGetProductString, writer.uint32(74).fork())
        .ldelim();
    }
    if (message.deviceGetSerialNumberString !== undefined) {
      CHIDMessageToRemote_DeviceGetSerialNumberString.encode(
        message.deviceGetSerialNumberString,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.deviceStartInputReports !== undefined) {
      CHIDMessageToRemote_DeviceStartInputReports.encode(message.deviceStartInputReports, writer.uint32(90).fork())
        .ldelim();
    }
    if (message.deviceRequestFullReport !== undefined) {
      CHIDMessageToRemote_DeviceRequestFullReport.encode(message.deviceRequestFullReport, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.deviceDisconnect !== undefined) {
      CHIDMessageToRemote_DeviceDisconnect.encode(message.deviceDisconnect, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.deviceOpen = CHIDMessageToRemote_DeviceOpen.decode(reader, reader.uint32());
          break;
        case 3:
          message.deviceClose = CHIDMessageToRemote_DeviceClose.decode(reader, reader.uint32());
          break;
        case 4:
          message.deviceWrite = CHIDMessageToRemote_DeviceWrite.decode(reader, reader.uint32());
          break;
        case 5:
          message.deviceRead = CHIDMessageToRemote_DeviceRead.decode(reader, reader.uint32());
          break;
        case 6:
          message.deviceSendFeatureReport = CHIDMessageToRemote_DeviceSendFeatureReport.decode(reader, reader.uint32());
          break;
        case 7:
          message.deviceGetFeatureReport = CHIDMessageToRemote_DeviceGetFeatureReport.decode(reader, reader.uint32());
          break;
        case 8:
          message.deviceGetVendorString = CHIDMessageToRemote_DeviceGetVendorString.decode(reader, reader.uint32());
          break;
        case 9:
          message.deviceGetProductString = CHIDMessageToRemote_DeviceGetProductString.decode(reader, reader.uint32());
          break;
        case 10:
          message.deviceGetSerialNumberString = CHIDMessageToRemote_DeviceGetSerialNumberString.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.deviceStartInputReports = CHIDMessageToRemote_DeviceStartInputReports.decode(reader, reader.uint32());
          break;
        case 12:
          message.deviceRequestFullReport = CHIDMessageToRemote_DeviceRequestFullReport.decode(reader, reader.uint32());
          break;
        case 13:
          message.deviceDisconnect = CHIDMessageToRemote_DeviceDisconnect.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      deviceOpen: isSet(object.deviceOpen) ? CHIDMessageToRemote_DeviceOpen.fromJSON(object.deviceOpen) : undefined,
      deviceClose: isSet(object.deviceClose) ? CHIDMessageToRemote_DeviceClose.fromJSON(object.deviceClose) : undefined,
      deviceWrite: isSet(object.deviceWrite) ? CHIDMessageToRemote_DeviceWrite.fromJSON(object.deviceWrite) : undefined,
      deviceRead: isSet(object.deviceRead) ? CHIDMessageToRemote_DeviceRead.fromJSON(object.deviceRead) : undefined,
      deviceSendFeatureReport: isSet(object.deviceSendFeatureReport)
        ? CHIDMessageToRemote_DeviceSendFeatureReport.fromJSON(object.deviceSendFeatureReport)
        : undefined,
      deviceGetFeatureReport: isSet(object.deviceGetFeatureReport)
        ? CHIDMessageToRemote_DeviceGetFeatureReport.fromJSON(object.deviceGetFeatureReport)
        : undefined,
      deviceGetVendorString: isSet(object.deviceGetVendorString)
        ? CHIDMessageToRemote_DeviceGetVendorString.fromJSON(object.deviceGetVendorString)
        : undefined,
      deviceGetProductString: isSet(object.deviceGetProductString)
        ? CHIDMessageToRemote_DeviceGetProductString.fromJSON(object.deviceGetProductString)
        : undefined,
      deviceGetSerialNumberString: isSet(object.deviceGetSerialNumberString)
        ? CHIDMessageToRemote_DeviceGetSerialNumberString.fromJSON(object.deviceGetSerialNumberString)
        : undefined,
      deviceStartInputReports: isSet(object.deviceStartInputReports)
        ? CHIDMessageToRemote_DeviceStartInputReports.fromJSON(object.deviceStartInputReports)
        : undefined,
      deviceRequestFullReport: isSet(object.deviceRequestFullReport)
        ? CHIDMessageToRemote_DeviceRequestFullReport.fromJSON(object.deviceRequestFullReport)
        : undefined,
      deviceDisconnect: isSet(object.deviceDisconnect)
        ? CHIDMessageToRemote_DeviceDisconnect.fromJSON(object.deviceDisconnect)
        : undefined,
    };
  },

  toJSON(message: CHIDMessageToRemote): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.deviceOpen !== undefined &&
      (obj.deviceOpen = message.deviceOpen ? CHIDMessageToRemote_DeviceOpen.toJSON(message.deviceOpen) : undefined);
    message.deviceClose !== undefined &&
      (obj.deviceClose = message.deviceClose ? CHIDMessageToRemote_DeviceClose.toJSON(message.deviceClose) : undefined);
    message.deviceWrite !== undefined &&
      (obj.deviceWrite = message.deviceWrite ? CHIDMessageToRemote_DeviceWrite.toJSON(message.deviceWrite) : undefined);
    message.deviceRead !== undefined &&
      (obj.deviceRead = message.deviceRead ? CHIDMessageToRemote_DeviceRead.toJSON(message.deviceRead) : undefined);
    message.deviceSendFeatureReport !== undefined && (obj.deviceSendFeatureReport = message.deviceSendFeatureReport
      ? CHIDMessageToRemote_DeviceSendFeatureReport.toJSON(message.deviceSendFeatureReport)
      : undefined);
    message.deviceGetFeatureReport !== undefined && (obj.deviceGetFeatureReport = message.deviceGetFeatureReport
      ? CHIDMessageToRemote_DeviceGetFeatureReport.toJSON(message.deviceGetFeatureReport)
      : undefined);
    message.deviceGetVendorString !== undefined && (obj.deviceGetVendorString = message.deviceGetVendorString
      ? CHIDMessageToRemote_DeviceGetVendorString.toJSON(message.deviceGetVendorString)
      : undefined);
    message.deviceGetProductString !== undefined && (obj.deviceGetProductString = message.deviceGetProductString
      ? CHIDMessageToRemote_DeviceGetProductString.toJSON(message.deviceGetProductString)
      : undefined);
    message.deviceGetSerialNumberString !== undefined &&
      (obj.deviceGetSerialNumberString = message.deviceGetSerialNumberString
        ? CHIDMessageToRemote_DeviceGetSerialNumberString.toJSON(message.deviceGetSerialNumberString)
        : undefined);
    message.deviceStartInputReports !== undefined && (obj.deviceStartInputReports = message.deviceStartInputReports
      ? CHIDMessageToRemote_DeviceStartInputReports.toJSON(message.deviceStartInputReports)
      : undefined);
    message.deviceRequestFullReport !== undefined && (obj.deviceRequestFullReport = message.deviceRequestFullReport
      ? CHIDMessageToRemote_DeviceRequestFullReport.toJSON(message.deviceRequestFullReport)
      : undefined);
    message.deviceDisconnect !== undefined && (obj.deviceDisconnect = message.deviceDisconnect
      ? CHIDMessageToRemote_DeviceDisconnect.toJSON(message.deviceDisconnect)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote>, I>>(base?: I): CHIDMessageToRemote {
    return CHIDMessageToRemote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote>, I>>(object: I): CHIDMessageToRemote {
    const message = createBaseCHIDMessageToRemote();
    message.requestId = object.requestId ?? 0;
    message.deviceOpen = (object.deviceOpen !== undefined && object.deviceOpen !== null)
      ? CHIDMessageToRemote_DeviceOpen.fromPartial(object.deviceOpen)
      : undefined;
    message.deviceClose = (object.deviceClose !== undefined && object.deviceClose !== null)
      ? CHIDMessageToRemote_DeviceClose.fromPartial(object.deviceClose)
      : undefined;
    message.deviceWrite = (object.deviceWrite !== undefined && object.deviceWrite !== null)
      ? CHIDMessageToRemote_DeviceWrite.fromPartial(object.deviceWrite)
      : undefined;
    message.deviceRead = (object.deviceRead !== undefined && object.deviceRead !== null)
      ? CHIDMessageToRemote_DeviceRead.fromPartial(object.deviceRead)
      : undefined;
    message.deviceSendFeatureReport =
      (object.deviceSendFeatureReport !== undefined && object.deviceSendFeatureReport !== null)
        ? CHIDMessageToRemote_DeviceSendFeatureReport.fromPartial(object.deviceSendFeatureReport)
        : undefined;
    message.deviceGetFeatureReport =
      (object.deviceGetFeatureReport !== undefined && object.deviceGetFeatureReport !== null)
        ? CHIDMessageToRemote_DeviceGetFeatureReport.fromPartial(object.deviceGetFeatureReport)
        : undefined;
    message.deviceGetVendorString =
      (object.deviceGetVendorString !== undefined && object.deviceGetVendorString !== null)
        ? CHIDMessageToRemote_DeviceGetVendorString.fromPartial(object.deviceGetVendorString)
        : undefined;
    message.deviceGetProductString =
      (object.deviceGetProductString !== undefined && object.deviceGetProductString !== null)
        ? CHIDMessageToRemote_DeviceGetProductString.fromPartial(object.deviceGetProductString)
        : undefined;
    message.deviceGetSerialNumberString =
      (object.deviceGetSerialNumberString !== undefined && object.deviceGetSerialNumberString !== null)
        ? CHIDMessageToRemote_DeviceGetSerialNumberString.fromPartial(object.deviceGetSerialNumberString)
        : undefined;
    message.deviceStartInputReports =
      (object.deviceStartInputReports !== undefined && object.deviceStartInputReports !== null)
        ? CHIDMessageToRemote_DeviceStartInputReports.fromPartial(object.deviceStartInputReports)
        : undefined;
    message.deviceRequestFullReport =
      (object.deviceRequestFullReport !== undefined && object.deviceRequestFullReport !== null)
        ? CHIDMessageToRemote_DeviceRequestFullReport.fromPartial(object.deviceRequestFullReport)
        : undefined;
    message.deviceDisconnect = (object.deviceDisconnect !== undefined && object.deviceDisconnect !== null)
      ? CHIDMessageToRemote_DeviceDisconnect.fromPartial(object.deviceDisconnect)
      : undefined;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceOpen(): CHIDMessageToRemote_DeviceOpen {
  return { info: undefined };
}

export const CHIDMessageToRemote_DeviceOpen = {
  encode(message: CHIDMessageToRemote_DeviceOpen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      CHIDDeviceInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceOpen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = CHIDDeviceInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceOpen {
    return { info: isSet(object.info) ? CHIDDeviceInfo.fromJSON(object.info) : undefined };
  },

  toJSON(message: CHIDMessageToRemote_DeviceOpen): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? CHIDDeviceInfo.toJSON(message.info) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceOpen>, I>>(base?: I): CHIDMessageToRemote_DeviceOpen {
    return CHIDMessageToRemote_DeviceOpen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceOpen>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceOpen {
    const message = createBaseCHIDMessageToRemote_DeviceOpen();
    message.info = (object.info !== undefined && object.info !== null)
      ? CHIDDeviceInfo.fromPartial(object.info)
      : undefined;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceClose(): CHIDMessageToRemote_DeviceClose {
  return { device: 0 };
}

export const CHIDMessageToRemote_DeviceClose = {
  encode(message: CHIDMessageToRemote_DeviceClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceClose {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageToRemote_DeviceClose): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceClose>, I>>(base?: I): CHIDMessageToRemote_DeviceClose {
    return CHIDMessageToRemote_DeviceClose.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceClose>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceClose {
    const message = createBaseCHIDMessageToRemote_DeviceClose();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceWrite(): CHIDMessageToRemote_DeviceWrite {
  return { device: 0, data: Buffer.alloc(0) };
}

export const CHIDMessageToRemote_DeviceWrite = {
  encode(message: CHIDMessageToRemote_DeviceWrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceWrite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceWrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceWrite {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceWrite): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceWrite>, I>>(base?: I): CHIDMessageToRemote_DeviceWrite {
    return CHIDMessageToRemote_DeviceWrite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceWrite>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceWrite {
    const message = createBaseCHIDMessageToRemote_DeviceWrite();
    message.device = object.device ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceRead(): CHIDMessageToRemote_DeviceRead {
  return { device: 0, length: 0, timeoutMs: 0 };
}

export const CHIDMessageToRemote_DeviceRead = {
  encode(message: CHIDMessageToRemote_DeviceRead, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.length !== 0) {
      writer.uint32(16).uint32(message.length);
    }
    if (message.timeoutMs !== 0) {
      writer.uint32(24).int32(message.timeoutMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceRead {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceRead();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.length = reader.uint32();
          break;
        case 3:
          message.timeoutMs = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceRead {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
      timeoutMs: isSet(object.timeoutMs) ? Number(object.timeoutMs) : 0,
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceRead): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.length !== undefined && (obj.length = Math.round(message.length));
    message.timeoutMs !== undefined && (obj.timeoutMs = Math.round(message.timeoutMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceRead>, I>>(base?: I): CHIDMessageToRemote_DeviceRead {
    return CHIDMessageToRemote_DeviceRead.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceRead>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceRead {
    const message = createBaseCHIDMessageToRemote_DeviceRead();
    message.device = object.device ?? 0;
    message.length = object.length ?? 0;
    message.timeoutMs = object.timeoutMs ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceSendFeatureReport(): CHIDMessageToRemote_DeviceSendFeatureReport {
  return { device: 0, data: Buffer.alloc(0) };
}

export const CHIDMessageToRemote_DeviceSendFeatureReport = {
  encode(message: CHIDMessageToRemote_DeviceSendFeatureReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceSendFeatureReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceSendFeatureReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceSendFeatureReport {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceSendFeatureReport): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceSendFeatureReport>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceSendFeatureReport {
    return CHIDMessageToRemote_DeviceSendFeatureReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceSendFeatureReport>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceSendFeatureReport {
    const message = createBaseCHIDMessageToRemote_DeviceSendFeatureReport();
    message.device = object.device ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceGetFeatureReport(): CHIDMessageToRemote_DeviceGetFeatureReport {
  return { device: 0, reportNumber: Buffer.alloc(0), length: 0 };
}

export const CHIDMessageToRemote_DeviceGetFeatureReport = {
  encode(message: CHIDMessageToRemote_DeviceGetFeatureReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.reportNumber.length !== 0) {
      writer.uint32(18).bytes(message.reportNumber);
    }
    if (message.length !== 0) {
      writer.uint32(24).uint32(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceGetFeatureReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceGetFeatureReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.reportNumber = reader.bytes() as Buffer;
          break;
        case 3:
          message.length = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceGetFeatureReport {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      reportNumber: isSet(object.reportNumber) ? Buffer.from(bytesFromBase64(object.reportNumber)) : Buffer.alloc(0),
      length: isSet(object.length) ? Number(object.length) : 0,
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceGetFeatureReport): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.reportNumber !== undefined &&
      (obj.reportNumber = base64FromBytes(message.reportNumber !== undefined ? message.reportNumber : Buffer.alloc(0)));
    message.length !== undefined && (obj.length = Math.round(message.length));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetFeatureReport>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceGetFeatureReport {
    return CHIDMessageToRemote_DeviceGetFeatureReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetFeatureReport>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceGetFeatureReport {
    const message = createBaseCHIDMessageToRemote_DeviceGetFeatureReport();
    message.device = object.device ?? 0;
    message.reportNumber = object.reportNumber ?? Buffer.alloc(0);
    message.length = object.length ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceGetVendorString(): CHIDMessageToRemote_DeviceGetVendorString {
  return { device: 0 };
}

export const CHIDMessageToRemote_DeviceGetVendorString = {
  encode(message: CHIDMessageToRemote_DeviceGetVendorString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceGetVendorString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceGetVendorString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceGetVendorString {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageToRemote_DeviceGetVendorString): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetVendorString>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceGetVendorString {
    return CHIDMessageToRemote_DeviceGetVendorString.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetVendorString>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceGetVendorString {
    const message = createBaseCHIDMessageToRemote_DeviceGetVendorString();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceGetProductString(): CHIDMessageToRemote_DeviceGetProductString {
  return { device: 0 };
}

export const CHIDMessageToRemote_DeviceGetProductString = {
  encode(message: CHIDMessageToRemote_DeviceGetProductString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceGetProductString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceGetProductString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceGetProductString {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageToRemote_DeviceGetProductString): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetProductString>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceGetProductString {
    return CHIDMessageToRemote_DeviceGetProductString.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetProductString>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceGetProductString {
    const message = createBaseCHIDMessageToRemote_DeviceGetProductString();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceGetSerialNumberString(): CHIDMessageToRemote_DeviceGetSerialNumberString {
  return { device: 0 };
}

export const CHIDMessageToRemote_DeviceGetSerialNumberString = {
  encode(
    message: CHIDMessageToRemote_DeviceGetSerialNumberString,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceGetSerialNumberString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceGetSerialNumberString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceGetSerialNumberString {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageToRemote_DeviceGetSerialNumberString): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetSerialNumberString>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceGetSerialNumberString {
    return CHIDMessageToRemote_DeviceGetSerialNumberString.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceGetSerialNumberString>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceGetSerialNumberString {
    const message = createBaseCHIDMessageToRemote_DeviceGetSerialNumberString();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceStartInputReports(): CHIDMessageToRemote_DeviceStartInputReports {
  return { device: 0, length: 0 };
}

export const CHIDMessageToRemote_DeviceStartInputReports = {
  encode(message: CHIDMessageToRemote_DeviceStartInputReports, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.length !== 0) {
      writer.uint32(16).uint32(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceStartInputReports {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceStartInputReports();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.length = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceStartInputReports {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      length: isSet(object.length) ? Number(object.length) : 0,
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceStartInputReports): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.length !== undefined && (obj.length = Math.round(message.length));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceStartInputReports>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceStartInputReports {
    return CHIDMessageToRemote_DeviceStartInputReports.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceStartInputReports>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceStartInputReports {
    const message = createBaseCHIDMessageToRemote_DeviceStartInputReports();
    message.device = object.device ?? 0;
    message.length = object.length ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceRequestFullReport(): CHIDMessageToRemote_DeviceRequestFullReport {
  return { device: 0 };
}

export const CHIDMessageToRemote_DeviceRequestFullReport = {
  encode(message: CHIDMessageToRemote_DeviceRequestFullReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceRequestFullReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceRequestFullReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageToRemote_DeviceRequestFullReport {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageToRemote_DeviceRequestFullReport): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceRequestFullReport>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceRequestFullReport {
    return CHIDMessageToRemote_DeviceRequestFullReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceRequestFullReport>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceRequestFullReport {
    const message = createBaseCHIDMessageToRemote_DeviceRequestFullReport();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageToRemote_DeviceDisconnect(): CHIDMessageToRemote_DeviceDisconnect {
  return { device: 0, disconnectMethod: 0, data: Buffer.alloc(0) };
}

export const CHIDMessageToRemote_DeviceDisconnect = {
  encode(message: CHIDMessageToRemote_DeviceDisconnect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    if (message.disconnectMethod !== 0) {
      writer.uint32(16).int32(message.disconnectMethod);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageToRemote_DeviceDisconnect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageToRemote_DeviceDisconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.disconnectMethod = reader.int32() as any;
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

  fromJSON(object: any): CHIDMessageToRemote_DeviceDisconnect {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      disconnectMethod: isSet(object.disconnectMethod)
        ? eHIDDeviceDisconnectMethodFromJSON(object.disconnectMethod)
        : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CHIDMessageToRemote_DeviceDisconnect): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    message.disconnectMethod !== undefined &&
      (obj.disconnectMethod = eHIDDeviceDisconnectMethodToJSON(message.disconnectMethod));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceDisconnect>, I>>(
    base?: I,
  ): CHIDMessageToRemote_DeviceDisconnect {
    return CHIDMessageToRemote_DeviceDisconnect.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageToRemote_DeviceDisconnect>, I>>(
    object: I,
  ): CHIDMessageToRemote_DeviceDisconnect {
    const message = createBaseCHIDMessageToRemote_DeviceDisconnect();
    message.device = object.device ?? 0;
    message.disconnectMethod = object.disconnectMethod ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCHIDMessageFromRemote(): CHIDMessageFromRemote {
  return {
    updateDeviceList: undefined,
    response: undefined,
    reports: undefined,
    closeDevice: undefined,
    closeAllDevices: undefined,
  };
}

export const CHIDMessageFromRemote = {
  encode(message: CHIDMessageFromRemote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.updateDeviceList !== undefined) {
      CHIDMessageFromRemote_UpdateDeviceList.encode(message.updateDeviceList, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      CHIDMessageFromRemote_RequestResponse.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.reports !== undefined) {
      CHIDMessageFromRemote_DeviceInputReports.encode(message.reports, writer.uint32(26).fork()).ldelim();
    }
    if (message.closeDevice !== undefined) {
      CHIDMessageFromRemote_CloseDevice.encode(message.closeDevice, writer.uint32(34).fork()).ldelim();
    }
    if (message.closeAllDevices !== undefined) {
      CHIDMessageFromRemote_CloseAllDevices.encode(message.closeAllDevices, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateDeviceList = CHIDMessageFromRemote_UpdateDeviceList.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = CHIDMessageFromRemote_RequestResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.reports = CHIDMessageFromRemote_DeviceInputReports.decode(reader, reader.uint32());
          break;
        case 4:
          message.closeDevice = CHIDMessageFromRemote_CloseDevice.decode(reader, reader.uint32());
          break;
        case 5:
          message.closeAllDevices = CHIDMessageFromRemote_CloseAllDevices.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageFromRemote {
    return {
      updateDeviceList: isSet(object.updateDeviceList)
        ? CHIDMessageFromRemote_UpdateDeviceList.fromJSON(object.updateDeviceList)
        : undefined,
      response: isSet(object.response) ? CHIDMessageFromRemote_RequestResponse.fromJSON(object.response) : undefined,
      reports: isSet(object.reports) ? CHIDMessageFromRemote_DeviceInputReports.fromJSON(object.reports) : undefined,
      closeDevice: isSet(object.closeDevice)
        ? CHIDMessageFromRemote_CloseDevice.fromJSON(object.closeDevice)
        : undefined,
      closeAllDevices: isSet(object.closeAllDevices)
        ? CHIDMessageFromRemote_CloseAllDevices.fromJSON(object.closeAllDevices)
        : undefined,
    };
  },

  toJSON(message: CHIDMessageFromRemote): unknown {
    const obj: any = {};
    message.updateDeviceList !== undefined && (obj.updateDeviceList = message.updateDeviceList
      ? CHIDMessageFromRemote_UpdateDeviceList.toJSON(message.updateDeviceList)
      : undefined);
    message.response !== undefined &&
      (obj.response = message.response ? CHIDMessageFromRemote_RequestResponse.toJSON(message.response) : undefined);
    message.reports !== undefined &&
      (obj.reports = message.reports ? CHIDMessageFromRemote_DeviceInputReports.toJSON(message.reports) : undefined);
    message.closeDevice !== undefined &&
      (obj.closeDevice = message.closeDevice
        ? CHIDMessageFromRemote_CloseDevice.toJSON(message.closeDevice)
        : undefined);
    message.closeAllDevices !== undefined && (obj.closeAllDevices = message.closeAllDevices
      ? CHIDMessageFromRemote_CloseAllDevices.toJSON(message.closeAllDevices)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote>, I>>(base?: I): CHIDMessageFromRemote {
    return CHIDMessageFromRemote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote>, I>>(object: I): CHIDMessageFromRemote {
    const message = createBaseCHIDMessageFromRemote();
    message.updateDeviceList = (object.updateDeviceList !== undefined && object.updateDeviceList !== null)
      ? CHIDMessageFromRemote_UpdateDeviceList.fromPartial(object.updateDeviceList)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? CHIDMessageFromRemote_RequestResponse.fromPartial(object.response)
      : undefined;
    message.reports = (object.reports !== undefined && object.reports !== null)
      ? CHIDMessageFromRemote_DeviceInputReports.fromPartial(object.reports)
      : undefined;
    message.closeDevice = (object.closeDevice !== undefined && object.closeDevice !== null)
      ? CHIDMessageFromRemote_CloseDevice.fromPartial(object.closeDevice)
      : undefined;
    message.closeAllDevices = (object.closeAllDevices !== undefined && object.closeAllDevices !== null)
      ? CHIDMessageFromRemote_CloseAllDevices.fromPartial(object.closeAllDevices)
      : undefined;
    return message;
  },
};

function createBaseCHIDMessageFromRemote_UpdateDeviceList(): CHIDMessageFromRemote_UpdateDeviceList {
  return { devices: [] };
}

export const CHIDMessageFromRemote_UpdateDeviceList = {
  encode(message: CHIDMessageFromRemote_UpdateDeviceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.devices) {
      CHIDDeviceInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_UpdateDeviceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_UpdateDeviceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.devices.push(CHIDDeviceInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageFromRemote_UpdateDeviceList {
    return {
      devices: Array.isArray(object?.devices) ? object.devices.map((e: any) => CHIDDeviceInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: CHIDMessageFromRemote_UpdateDeviceList): unknown {
    const obj: any = {};
    if (message.devices) {
      obj.devices = message.devices.map((e) => e ? CHIDDeviceInfo.toJSON(e) : undefined);
    } else {
      obj.devices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_UpdateDeviceList>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_UpdateDeviceList {
    return CHIDMessageFromRemote_UpdateDeviceList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_UpdateDeviceList>, I>>(
    object: I,
  ): CHIDMessageFromRemote_UpdateDeviceList {
    const message = createBaseCHIDMessageFromRemote_UpdateDeviceList();
    message.devices = object.devices?.map((e) => CHIDDeviceInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCHIDMessageFromRemote_RequestResponse(): CHIDMessageFromRemote_RequestResponse {
  return { requestId: 0, result: 0, data: Buffer.alloc(0) };
}

export const CHIDMessageFromRemote_RequestResponse = {
  encode(message: CHIDMessageFromRemote_RequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_RequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_RequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 2:
          message.result = reader.int32();
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

  fromJSON(object: any): CHIDMessageFromRemote_RequestResponse {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CHIDMessageFromRemote_RequestResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_RequestResponse>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_RequestResponse {
    return CHIDMessageFromRemote_RequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_RequestResponse>, I>>(
    object: I,
  ): CHIDMessageFromRemote_RequestResponse {
    const message = createBaseCHIDMessageFromRemote_RequestResponse();
    message.requestId = object.requestId ?? 0;
    message.result = object.result ?? 0;
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCHIDMessageFromRemote_DeviceInputReports(): CHIDMessageFromRemote_DeviceInputReports {
  return { deviceReports: [] };
}

export const CHIDMessageFromRemote_DeviceInputReports = {
  encode(message: CHIDMessageFromRemote_DeviceInputReports, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deviceReports) {
      CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_DeviceInputReports {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_DeviceInputReports();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deviceReports.push(
            CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageFromRemote_DeviceInputReports {
    return {
      deviceReports: Array.isArray(object?.deviceReports)
        ? object.deviceReports.map((e: any) => CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CHIDMessageFromRemote_DeviceInputReports): unknown {
    const obj: any = {};
    if (message.deviceReports) {
      obj.deviceReports = message.deviceReports.map((e) =>
        e ? CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.toJSON(e) : undefined
      );
    } else {
      obj.deviceReports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_DeviceInputReports>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_DeviceInputReports {
    return CHIDMessageFromRemote_DeviceInputReports.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_DeviceInputReports>, I>>(
    object: I,
  ): CHIDMessageFromRemote_DeviceInputReports {
    const message = createBaseCHIDMessageFromRemote_DeviceInputReports();
    message.deviceReports =
      object.deviceReports?.map((e) => CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCHIDMessageFromRemote_DeviceInputReports_DeviceInputReport(): CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
  return { device: 0, reports: [] };
}

export const CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport = {
  encode(
    message: CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    for (const v of message.reports) {
      CHIDDeviceInputReport.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_DeviceInputReports_DeviceInputReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        case 2:
          message.reports.push(CHIDDeviceInputReport.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
    return {
      device: isSet(object.device) ? Number(object.device) : 0,
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => CHIDDeviceInputReport.fromJSON(e)) : [],
    };
  },

  toJSON(message: CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? CHIDDeviceInputReport.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
    return CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport>, I>>(
    object: I,
  ): CHIDMessageFromRemote_DeviceInputReports_DeviceInputReport {
    const message = createBaseCHIDMessageFromRemote_DeviceInputReports_DeviceInputReport();
    message.device = object.device ?? 0;
    message.reports = object.reports?.map((e) => CHIDDeviceInputReport.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCHIDMessageFromRemote_CloseDevice(): CHIDMessageFromRemote_CloseDevice {
  return { device: 0 };
}

export const CHIDMessageFromRemote_CloseDevice = {
  encode(message: CHIDMessageFromRemote_CloseDevice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.device !== 0) {
      writer.uint32(8).uint32(message.device);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_CloseDevice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_CloseDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.device = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHIDMessageFromRemote_CloseDevice {
    return { device: isSet(object.device) ? Number(object.device) : 0 };
  },

  toJSON(message: CHIDMessageFromRemote_CloseDevice): unknown {
    const obj: any = {};
    message.device !== undefined && (obj.device = Math.round(message.device));
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_CloseDevice>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_CloseDevice {
    return CHIDMessageFromRemote_CloseDevice.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_CloseDevice>, I>>(
    object: I,
  ): CHIDMessageFromRemote_CloseDevice {
    const message = createBaseCHIDMessageFromRemote_CloseDevice();
    message.device = object.device ?? 0;
    return message;
  },
};

function createBaseCHIDMessageFromRemote_CloseAllDevices(): CHIDMessageFromRemote_CloseAllDevices {
  return {};
}

export const CHIDMessageFromRemote_CloseAllDevices = {
  encode(_: CHIDMessageFromRemote_CloseAllDevices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHIDMessageFromRemote_CloseAllDevices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHIDMessageFromRemote_CloseAllDevices();
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

  fromJSON(_: any): CHIDMessageFromRemote_CloseAllDevices {
    return {};
  },

  toJSON(_: CHIDMessageFromRemote_CloseAllDevices): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CHIDMessageFromRemote_CloseAllDevices>, I>>(
    base?: I,
  ): CHIDMessageFromRemote_CloseAllDevices {
    return CHIDMessageFromRemote_CloseAllDevices.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHIDMessageFromRemote_CloseAllDevices>, I>>(
    _: I,
  ): CHIDMessageFromRemote_CloseAllDevices {
    const message = createBaseCHIDMessageFromRemote_CloseAllDevices();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
