/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EValveIndexComponent {
  k_EValveIndexComponentUnknown = 0,
  k_EValveIndexComponentHMD = 1,
  k_EValveIndexComponentLeftKnuckle = 2,
  k_EValveIndexComponentRightKnuckle = 3,
  UNRECOGNIZED = -1,
}

export function eValveIndexComponentFromJSON(object: any): EValveIndexComponent {
  switch (object) {
    case 0:
    case "k_EValveIndexComponentUnknown":
      return EValveIndexComponent.k_EValveIndexComponentUnknown;
    case 1:
    case "k_EValveIndexComponentHMD":
      return EValveIndexComponent.k_EValveIndexComponentHMD;
    case 2:
    case "k_EValveIndexComponentLeftKnuckle":
      return EValveIndexComponent.k_EValveIndexComponentLeftKnuckle;
    case 3:
    case "k_EValveIndexComponentRightKnuckle":
      return EValveIndexComponent.k_EValveIndexComponentRightKnuckle;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EValveIndexComponent.UNRECOGNIZED;
  }
}

export function eValveIndexComponentToJSON(object: EValveIndexComponent): string {
  switch (object) {
    case EValveIndexComponent.k_EValveIndexComponentUnknown:
      return "k_EValveIndexComponentUnknown";
    case EValveIndexComponent.k_EValveIndexComponentHMD:
      return "k_EValveIndexComponentHMD";
    case EValveIndexComponent.k_EValveIndexComponentLeftKnuckle:
      return "k_EValveIndexComponentLeftKnuckle";
    case EValveIndexComponent.k_EValveIndexComponentRightKnuckle:
      return "k_EValveIndexComponentRightKnuckle";
    case EValveIndexComponent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CAccountHardwareRegisterSteamControllerRequest {
  serialNumber: string;
  controllerCode: string;
}

export interface CAccountHardwareRegisterSteamControllerResponse {
}

export interface CAccountHardwareCompleteSteamControllerRegistrationRequest {
  serialNumber: string;
  controllerCode: string;
}

export interface CAccountHardwareCompleteSteamControllerRegistrationResponse {
}

export interface CAccountHardwareQueryAccountsRegisteredToSerialRequest {
  serialNumber: string;
  controllerCode: string;
}

export interface CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
  accountid: number;
  registrationComplete: boolean;
}

export interface CAccountHardwareQueryAccountsRegisteredToSerialResponse {
  accounts: CAccountHardwareQueryAccountsRegisteredToSerialAccounts[];
}

export interface CAccountHardwareSteamControllerSetConfigControllerConfig {
  appidorname: string;
  publishedfileid: string;
  templatename: string;
}

export interface CAccountHardwareSteamControllerSetConfigRequest {
  serialNumber: string;
  controllerCode: string;
  accountid: number;
  configurations: CAccountHardwareSteamControllerSetConfigControllerConfig[];
  controllerType: number;
  onlyForThisSerial: boolean;
}

export interface CAccountHardwareSteamControllerSetConfigResponse {
}

export interface CAccountHardwareSteamControllerGetConfigRequest {
  serialNumber: string;
  controllerCode: string;
  accountid: number;
  appidorname: string;
  controllerType: number;
  onlyForThisSerial: boolean;
}

export interface CAccountHardwareSteamControllerGetConfigControllerConfig {
  appidorname: string;
  publishedfileid: string;
  templatename: string;
  serialNumber: string;
  autosave: boolean;
}

export interface CAccountHardwareSteamControllerGetConfigResponse {
  configurations: CAccountHardwareSteamControllerGetConfigControllerConfig[];
}

export interface CAccountHardwareDeRegisterSteamControllerRequest {
  serialNumber: string;
  controllerCode: string;
  accountid: number;
}

export interface CAccountHardwareDeRegisterSteamControllerResponse {
}

export interface CAccountHardwareSetPersonalizationFileRequest {
  serialNumber: string;
  publishedfileid: string;
  accountid: number;
}

export interface CAccountHardwareSetPersonalizationFileResponse {
}

export interface CAccountHardwareGetPersonalizationFileRequest {
  serialNumber: string;
  accountid: number;
}

export interface CAccountHardwareGetPersonalizationFileResponse {
  publishedfileid: string;
}

export interface CAccountHardwareVRCompatibilityCheckRequest {
  productName: string;
  values: CAccountHardwareVRCompatibilityCheckRequest_Pair[];
}

export interface CAccountHardwareVRCompatibilityCheckRequest_Pair {
  key: string;
  value: string;
}

export interface CAccountHardwareVRCompatibilityCheckResponse {
  values: CAccountHardwareVRCompatibilityCheckResponse_Pair[];
  components: CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay[];
}

export interface CAccountHardwareVRCompatibilityCheckResponse_Pair {
  key: string;
  value: string;
}

export interface CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
  name: string;
  image: string;
  value: string;
}

export interface CAccountHardwareRegisterValveIndexComponentRequest {
  serialNumber: string;
  manufacturerSerialNumber: string;
  componentCode: string;
  componentType: EValveIndexComponent;
  estimatedTimeRegistered: number;
}

export interface CAccountHardwareRegisterValveIndexComponentResponse {
}

export interface CAccountHardwareGetSteamDeckComponentsRequest {
  serialNumber: string;
  controllerCode: string;
}

export interface CAccountHardwareGetSteamDeckComponentsResponse {
  jsonComponents: string;
}

function createBaseCAccountHardwareRegisterSteamControllerRequest(): CAccountHardwareRegisterSteamControllerRequest {
  return { serialNumber: "", controllerCode: "" };
}

export const CAccountHardwareRegisterSteamControllerRequest = {
  encode(
    message: CAccountHardwareRegisterSteamControllerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareRegisterSteamControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareRegisterSteamControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareRegisterSteamControllerRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
    };
  },

  toJSON(message: CAccountHardwareRegisterSteamControllerRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareRegisterSteamControllerRequest>, I>>(
    base?: I,
  ): CAccountHardwareRegisterSteamControllerRequest {
    return CAccountHardwareRegisterSteamControllerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareRegisterSteamControllerRequest>, I>>(
    object: I,
  ): CAccountHardwareRegisterSteamControllerRequest {
    const message = createBaseCAccountHardwareRegisterSteamControllerRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    return message;
  },
};

function createBaseCAccountHardwareRegisterSteamControllerResponse(): CAccountHardwareRegisterSteamControllerResponse {
  return {};
}

export const CAccountHardwareRegisterSteamControllerResponse = {
  encode(_: CAccountHardwareRegisterSteamControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareRegisterSteamControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareRegisterSteamControllerResponse();
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

  fromJSON(_: any): CAccountHardwareRegisterSteamControllerResponse {
    return {};
  },

  toJSON(_: CAccountHardwareRegisterSteamControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareRegisterSteamControllerResponse>, I>>(
    base?: I,
  ): CAccountHardwareRegisterSteamControllerResponse {
    return CAccountHardwareRegisterSteamControllerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareRegisterSteamControllerResponse>, I>>(
    _: I,
  ): CAccountHardwareRegisterSteamControllerResponse {
    const message = createBaseCAccountHardwareRegisterSteamControllerResponse();
    return message;
  },
};

function createBaseCAccountHardwareCompleteSteamControllerRegistrationRequest(): CAccountHardwareCompleteSteamControllerRegistrationRequest {
  return { serialNumber: "", controllerCode: "" };
}

export const CAccountHardwareCompleteSteamControllerRegistrationRequest = {
  encode(
    message: CAccountHardwareCompleteSteamControllerRegistrationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareCompleteSteamControllerRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareCompleteSteamControllerRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareCompleteSteamControllerRegistrationRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
    };
  },

  toJSON(message: CAccountHardwareCompleteSteamControllerRegistrationRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareCompleteSteamControllerRegistrationRequest>, I>>(
    base?: I,
  ): CAccountHardwareCompleteSteamControllerRegistrationRequest {
    return CAccountHardwareCompleteSteamControllerRegistrationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareCompleteSteamControllerRegistrationRequest>, I>>(
    object: I,
  ): CAccountHardwareCompleteSteamControllerRegistrationRequest {
    const message = createBaseCAccountHardwareCompleteSteamControllerRegistrationRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    return message;
  },
};

function createBaseCAccountHardwareCompleteSteamControllerRegistrationResponse(): CAccountHardwareCompleteSteamControllerRegistrationResponse {
  return {};
}

export const CAccountHardwareCompleteSteamControllerRegistrationResponse = {
  encode(
    _: CAccountHardwareCompleteSteamControllerRegistrationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareCompleteSteamControllerRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareCompleteSteamControllerRegistrationResponse();
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

  fromJSON(_: any): CAccountHardwareCompleteSteamControllerRegistrationResponse {
    return {};
  },

  toJSON(_: CAccountHardwareCompleteSteamControllerRegistrationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareCompleteSteamControllerRegistrationResponse>, I>>(
    base?: I,
  ): CAccountHardwareCompleteSteamControllerRegistrationResponse {
    return CAccountHardwareCompleteSteamControllerRegistrationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareCompleteSteamControllerRegistrationResponse>, I>>(
    _: I,
  ): CAccountHardwareCompleteSteamControllerRegistrationResponse {
    const message = createBaseCAccountHardwareCompleteSteamControllerRegistrationResponse();
    return message;
  },
};

function createBaseCAccountHardwareQueryAccountsRegisteredToSerialRequest(): CAccountHardwareQueryAccountsRegisteredToSerialRequest {
  return { serialNumber: "", controllerCode: "" };
}

export const CAccountHardwareQueryAccountsRegisteredToSerialRequest = {
  encode(
    message: CAccountHardwareQueryAccountsRegisteredToSerialRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareQueryAccountsRegisteredToSerialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareQueryAccountsRegisteredToSerialRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
    };
  },

  toJSON(message: CAccountHardwareQueryAccountsRegisteredToSerialRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialRequest>, I>>(
    base?: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialRequest {
    return CAccountHardwareQueryAccountsRegisteredToSerialRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialRequest>, I>>(
    object: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialRequest {
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    return message;
  },
};

function createBaseCAccountHardwareQueryAccountsRegisteredToSerialAccounts(): CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
  return { accountid: 0, registrationComplete: false };
}

export const CAccountHardwareQueryAccountsRegisteredToSerialAccounts = {
  encode(
    message: CAccountHardwareQueryAccountsRegisteredToSerialAccounts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.registrationComplete === true) {
      writer.uint32(16).bool(message.registrationComplete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.registrationComplete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      registrationComplete: isSet(object.registrationComplete) ? Boolean(object.registrationComplete) : false,
    };
  },

  toJSON(message: CAccountHardwareQueryAccountsRegisteredToSerialAccounts): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.registrationComplete !== undefined && (obj.registrationComplete = message.registrationComplete);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialAccounts>, I>>(
    base?: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
    return CAccountHardwareQueryAccountsRegisteredToSerialAccounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialAccounts>, I>>(
    object: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialAccounts {
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialAccounts();
    message.accountid = object.accountid ?? 0;
    message.registrationComplete = object.registrationComplete ?? false;
    return message;
  },
};

function createBaseCAccountHardwareQueryAccountsRegisteredToSerialResponse(): CAccountHardwareQueryAccountsRegisteredToSerialResponse {
  return { accounts: [] };
}

export const CAccountHardwareQueryAccountsRegisteredToSerialResponse = {
  encode(
    message: CAccountHardwareQueryAccountsRegisteredToSerialResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.accounts) {
      CAccountHardwareQueryAccountsRegisteredToSerialAccounts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareQueryAccountsRegisteredToSerialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            CAccountHardwareQueryAccountsRegisteredToSerialAccounts.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareQueryAccountsRegisteredToSerialResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => CAccountHardwareQueryAccountsRegisteredToSerialAccounts.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAccountHardwareQueryAccountsRegisteredToSerialResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? CAccountHardwareQueryAccountsRegisteredToSerialAccounts.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialResponse>, I>>(
    base?: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialResponse {
    return CAccountHardwareQueryAccountsRegisteredToSerialResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareQueryAccountsRegisteredToSerialResponse>, I>>(
    object: I,
  ): CAccountHardwareQueryAccountsRegisteredToSerialResponse {
    const message = createBaseCAccountHardwareQueryAccountsRegisteredToSerialResponse();
    message.accounts =
      object.accounts?.map((e) => CAccountHardwareQueryAccountsRegisteredToSerialAccounts.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerSetConfigControllerConfig(): CAccountHardwareSteamControllerSetConfigControllerConfig {
  return { appidorname: "", publishedfileid: "0", templatename: "" };
}

export const CAccountHardwareSteamControllerSetConfigControllerConfig = {
  encode(
    message: CAccountHardwareSteamControllerSetConfigControllerConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appidorname !== "") {
      writer.uint32(10).string(message.appidorname);
    }
    if (message.publishedfileid !== "0") {
      writer.uint32(16).uint64(message.publishedfileid);
    }
    if (message.templatename !== "") {
      writer.uint32(26).string(message.templatename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerSetConfigControllerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerSetConfigControllerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appidorname = reader.string();
          break;
        case 2:
          message.publishedfileid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.templatename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSteamControllerSetConfigControllerConfig {
    return {
      appidorname: isSet(object.appidorname) ? String(object.appidorname) : "",
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      templatename: isSet(object.templatename) ? String(object.templatename) : "",
    };
  },

  toJSON(message: CAccountHardwareSteamControllerSetConfigControllerConfig): unknown {
    const obj: any = {};
    message.appidorname !== undefined && (obj.appidorname = message.appidorname);
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.templatename !== undefined && (obj.templatename = message.templatename);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigControllerConfig>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerSetConfigControllerConfig {
    return CAccountHardwareSteamControllerSetConfigControllerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigControllerConfig>, I>>(
    object: I,
  ): CAccountHardwareSteamControllerSetConfigControllerConfig {
    const message = createBaseCAccountHardwareSteamControllerSetConfigControllerConfig();
    message.appidorname = object.appidorname ?? "";
    message.publishedfileid = object.publishedfileid ?? "0";
    message.templatename = object.templatename ?? "";
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerSetConfigRequest(): CAccountHardwareSteamControllerSetConfigRequest {
  return {
    serialNumber: "",
    controllerCode: "",
    accountid: 0,
    configurations: [],
    controllerType: 0,
    onlyForThisSerial: false,
  };
}

export const CAccountHardwareSteamControllerSetConfigRequest = {
  encode(
    message: CAccountHardwareSteamControllerSetConfigRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    if (message.accountid !== 0) {
      writer.uint32(24).uint32(message.accountid);
    }
    for (const v of message.configurations) {
      CAccountHardwareSteamControllerSetConfigControllerConfig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.controllerType !== 0) {
      writer.uint32(40).int32(message.controllerType);
    }
    if (message.onlyForThisSerial === true) {
      writer.uint32(48).bool(message.onlyForThisSerial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerSetConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerSetConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        case 3:
          message.accountid = reader.uint32();
          break;
        case 4:
          message.configurations.push(
            CAccountHardwareSteamControllerSetConfigControllerConfig.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.controllerType = reader.int32();
          break;
        case 6:
          message.onlyForThisSerial = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSteamControllerSetConfigRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      configurations: Array.isArray(object?.configurations)
        ? object.configurations.map((e: any) => CAccountHardwareSteamControllerSetConfigControllerConfig.fromJSON(e))
        : [],
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      onlyForThisSerial: isSet(object.onlyForThisSerial) ? Boolean(object.onlyForThisSerial) : false,
    };
  },

  toJSON(message: CAccountHardwareSteamControllerSetConfigRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    if (message.configurations) {
      obj.configurations = message.configurations.map((e) =>
        e ? CAccountHardwareSteamControllerSetConfigControllerConfig.toJSON(e) : undefined
      );
    } else {
      obj.configurations = [];
    }
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.onlyForThisSerial !== undefined && (obj.onlyForThisSerial = message.onlyForThisSerial);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigRequest>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerSetConfigRequest {
    return CAccountHardwareSteamControllerSetConfigRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigRequest>, I>>(
    object: I,
  ): CAccountHardwareSteamControllerSetConfigRequest {
    const message = createBaseCAccountHardwareSteamControllerSetConfigRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    message.accountid = object.accountid ?? 0;
    message.configurations =
      object.configurations?.map((e) => CAccountHardwareSteamControllerSetConfigControllerConfig.fromPartial(e)) || [];
    message.controllerType = object.controllerType ?? 0;
    message.onlyForThisSerial = object.onlyForThisSerial ?? false;
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerSetConfigResponse(): CAccountHardwareSteamControllerSetConfigResponse {
  return {};
}

export const CAccountHardwareSteamControllerSetConfigResponse = {
  encode(_: CAccountHardwareSteamControllerSetConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerSetConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerSetConfigResponse();
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

  fromJSON(_: any): CAccountHardwareSteamControllerSetConfigResponse {
    return {};
  },

  toJSON(_: CAccountHardwareSteamControllerSetConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigResponse>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerSetConfigResponse {
    return CAccountHardwareSteamControllerSetConfigResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerSetConfigResponse>, I>>(
    _: I,
  ): CAccountHardwareSteamControllerSetConfigResponse {
    const message = createBaseCAccountHardwareSteamControllerSetConfigResponse();
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerGetConfigRequest(): CAccountHardwareSteamControllerGetConfigRequest {
  return {
    serialNumber: "",
    controllerCode: "",
    accountid: 0,
    appidorname: "",
    controllerType: 0,
    onlyForThisSerial: false,
  };
}

export const CAccountHardwareSteamControllerGetConfigRequest = {
  encode(
    message: CAccountHardwareSteamControllerGetConfigRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    if (message.accountid !== 0) {
      writer.uint32(24).uint32(message.accountid);
    }
    if (message.appidorname !== "") {
      writer.uint32(34).string(message.appidorname);
    }
    if (message.controllerType !== 0) {
      writer.uint32(40).int32(message.controllerType);
    }
    if (message.onlyForThisSerial === true) {
      writer.uint32(48).bool(message.onlyForThisSerial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerGetConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerGetConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        case 3:
          message.accountid = reader.uint32();
          break;
        case 4:
          message.appidorname = reader.string();
          break;
        case 5:
          message.controllerType = reader.int32();
          break;
        case 6:
          message.onlyForThisSerial = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSteamControllerGetConfigRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      appidorname: isSet(object.appidorname) ? String(object.appidorname) : "",
      controllerType: isSet(object.controllerType) ? Number(object.controllerType) : 0,
      onlyForThisSerial: isSet(object.onlyForThisSerial) ? Boolean(object.onlyForThisSerial) : false,
    };
  },

  toJSON(message: CAccountHardwareSteamControllerGetConfigRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.appidorname !== undefined && (obj.appidorname = message.appidorname);
    message.controllerType !== undefined && (obj.controllerType = Math.round(message.controllerType));
    message.onlyForThisSerial !== undefined && (obj.onlyForThisSerial = message.onlyForThisSerial);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigRequest>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerGetConfigRequest {
    return CAccountHardwareSteamControllerGetConfigRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigRequest>, I>>(
    object: I,
  ): CAccountHardwareSteamControllerGetConfigRequest {
    const message = createBaseCAccountHardwareSteamControllerGetConfigRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    message.accountid = object.accountid ?? 0;
    message.appidorname = object.appidorname ?? "";
    message.controllerType = object.controllerType ?? 0;
    message.onlyForThisSerial = object.onlyForThisSerial ?? false;
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerGetConfigControllerConfig(): CAccountHardwareSteamControllerGetConfigControllerConfig {
  return { appidorname: "", publishedfileid: "0", templatename: "", serialNumber: "", autosave: false };
}

export const CAccountHardwareSteamControllerGetConfigControllerConfig = {
  encode(
    message: CAccountHardwareSteamControllerGetConfigControllerConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appidorname !== "") {
      writer.uint32(10).string(message.appidorname);
    }
    if (message.publishedfileid !== "0") {
      writer.uint32(16).uint64(message.publishedfileid);
    }
    if (message.templatename !== "") {
      writer.uint32(26).string(message.templatename);
    }
    if (message.serialNumber !== "") {
      writer.uint32(34).string(message.serialNumber);
    }
    if (message.autosave === true) {
      writer.uint32(40).bool(message.autosave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerGetConfigControllerConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerGetConfigControllerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appidorname = reader.string();
          break;
        case 2:
          message.publishedfileid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.templatename = reader.string();
          break;
        case 4:
          message.serialNumber = reader.string();
          break;
        case 5:
          message.autosave = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSteamControllerGetConfigControllerConfig {
    return {
      appidorname: isSet(object.appidorname) ? String(object.appidorname) : "",
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      templatename: isSet(object.templatename) ? String(object.templatename) : "",
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      autosave: isSet(object.autosave) ? Boolean(object.autosave) : false,
    };
  },

  toJSON(message: CAccountHardwareSteamControllerGetConfigControllerConfig): unknown {
    const obj: any = {};
    message.appidorname !== undefined && (obj.appidorname = message.appidorname);
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.templatename !== undefined && (obj.templatename = message.templatename);
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.autosave !== undefined && (obj.autosave = message.autosave);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigControllerConfig>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerGetConfigControllerConfig {
    return CAccountHardwareSteamControllerGetConfigControllerConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigControllerConfig>, I>>(
    object: I,
  ): CAccountHardwareSteamControllerGetConfigControllerConfig {
    const message = createBaseCAccountHardwareSteamControllerGetConfigControllerConfig();
    message.appidorname = object.appidorname ?? "";
    message.publishedfileid = object.publishedfileid ?? "0";
    message.templatename = object.templatename ?? "";
    message.serialNumber = object.serialNumber ?? "";
    message.autosave = object.autosave ?? false;
    return message;
  },
};

function createBaseCAccountHardwareSteamControllerGetConfigResponse(): CAccountHardwareSteamControllerGetConfigResponse {
  return { configurations: [] };
}

export const CAccountHardwareSteamControllerGetConfigResponse = {
  encode(
    message: CAccountHardwareSteamControllerGetConfigResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.configurations) {
      CAccountHardwareSteamControllerGetConfigControllerConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSteamControllerGetConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSteamControllerGetConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configurations.push(
            CAccountHardwareSteamControllerGetConfigControllerConfig.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSteamControllerGetConfigResponse {
    return {
      configurations: Array.isArray(object?.configurations)
        ? object.configurations.map((e: any) => CAccountHardwareSteamControllerGetConfigControllerConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAccountHardwareSteamControllerGetConfigResponse): unknown {
    const obj: any = {};
    if (message.configurations) {
      obj.configurations = message.configurations.map((e) =>
        e ? CAccountHardwareSteamControllerGetConfigControllerConfig.toJSON(e) : undefined
      );
    } else {
      obj.configurations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigResponse>, I>>(
    base?: I,
  ): CAccountHardwareSteamControllerGetConfigResponse {
    return CAccountHardwareSteamControllerGetConfigResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSteamControllerGetConfigResponse>, I>>(
    object: I,
  ): CAccountHardwareSteamControllerGetConfigResponse {
    const message = createBaseCAccountHardwareSteamControllerGetConfigResponse();
    message.configurations =
      object.configurations?.map((e) => CAccountHardwareSteamControllerGetConfigControllerConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCAccountHardwareDeRegisterSteamControllerRequest(): CAccountHardwareDeRegisterSteamControllerRequest {
  return { serialNumber: "", controllerCode: "", accountid: 0 };
}

export const CAccountHardwareDeRegisterSteamControllerRequest = {
  encode(
    message: CAccountHardwareDeRegisterSteamControllerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    if (message.accountid !== 0) {
      writer.uint32(24).uint32(message.accountid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareDeRegisterSteamControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareDeRegisterSteamControllerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        case 3:
          message.accountid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareDeRegisterSteamControllerRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
    };
  },

  toJSON(message: CAccountHardwareDeRegisterSteamControllerRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareDeRegisterSteamControllerRequest>, I>>(
    base?: I,
  ): CAccountHardwareDeRegisterSteamControllerRequest {
    return CAccountHardwareDeRegisterSteamControllerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareDeRegisterSteamControllerRequest>, I>>(
    object: I,
  ): CAccountHardwareDeRegisterSteamControllerRequest {
    const message = createBaseCAccountHardwareDeRegisterSteamControllerRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    message.accountid = object.accountid ?? 0;
    return message;
  },
};

function createBaseCAccountHardwareDeRegisterSteamControllerResponse(): CAccountHardwareDeRegisterSteamControllerResponse {
  return {};
}

export const CAccountHardwareDeRegisterSteamControllerResponse = {
  encode(_: CAccountHardwareDeRegisterSteamControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareDeRegisterSteamControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareDeRegisterSteamControllerResponse();
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

  fromJSON(_: any): CAccountHardwareDeRegisterSteamControllerResponse {
    return {};
  },

  toJSON(_: CAccountHardwareDeRegisterSteamControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareDeRegisterSteamControllerResponse>, I>>(
    base?: I,
  ): CAccountHardwareDeRegisterSteamControllerResponse {
    return CAccountHardwareDeRegisterSteamControllerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareDeRegisterSteamControllerResponse>, I>>(
    _: I,
  ): CAccountHardwareDeRegisterSteamControllerResponse {
    const message = createBaseCAccountHardwareDeRegisterSteamControllerResponse();
    return message;
  },
};

function createBaseCAccountHardwareSetPersonalizationFileRequest(): CAccountHardwareSetPersonalizationFileRequest {
  return { serialNumber: "", publishedfileid: "0", accountid: 0 };
}

export const CAccountHardwareSetPersonalizationFileRequest = {
  encode(message: CAccountHardwareSetPersonalizationFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.publishedfileid !== "0") {
      writer.uint32(16).uint64(message.publishedfileid);
    }
    if (message.accountid !== 0) {
      writer.uint32(24).uint32(message.accountid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSetPersonalizationFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSetPersonalizationFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.publishedfileid = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.accountid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareSetPersonalizationFileRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
    };
  },

  toJSON(message: CAccountHardwareSetPersonalizationFileRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSetPersonalizationFileRequest>, I>>(
    base?: I,
  ): CAccountHardwareSetPersonalizationFileRequest {
    return CAccountHardwareSetPersonalizationFileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSetPersonalizationFileRequest>, I>>(
    object: I,
  ): CAccountHardwareSetPersonalizationFileRequest {
    const message = createBaseCAccountHardwareSetPersonalizationFileRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.publishedfileid = object.publishedfileid ?? "0";
    message.accountid = object.accountid ?? 0;
    return message;
  },
};

function createBaseCAccountHardwareSetPersonalizationFileResponse(): CAccountHardwareSetPersonalizationFileResponse {
  return {};
}

export const CAccountHardwareSetPersonalizationFileResponse = {
  encode(_: CAccountHardwareSetPersonalizationFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareSetPersonalizationFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareSetPersonalizationFileResponse();
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

  fromJSON(_: any): CAccountHardwareSetPersonalizationFileResponse {
    return {};
  },

  toJSON(_: CAccountHardwareSetPersonalizationFileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareSetPersonalizationFileResponse>, I>>(
    base?: I,
  ): CAccountHardwareSetPersonalizationFileResponse {
    return CAccountHardwareSetPersonalizationFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareSetPersonalizationFileResponse>, I>>(
    _: I,
  ): CAccountHardwareSetPersonalizationFileResponse {
    const message = createBaseCAccountHardwareSetPersonalizationFileResponse();
    return message;
  },
};

function createBaseCAccountHardwareGetPersonalizationFileRequest(): CAccountHardwareGetPersonalizationFileRequest {
  return { serialNumber: "", accountid: 0 };
}

export const CAccountHardwareGetPersonalizationFileRequest = {
  encode(message: CAccountHardwareGetPersonalizationFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.accountid !== 0) {
      writer.uint32(16).uint32(message.accountid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareGetPersonalizationFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareGetPersonalizationFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.accountid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareGetPersonalizationFileRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
    };
  },

  toJSON(message: CAccountHardwareGetPersonalizationFileRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareGetPersonalizationFileRequest>, I>>(
    base?: I,
  ): CAccountHardwareGetPersonalizationFileRequest {
    return CAccountHardwareGetPersonalizationFileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareGetPersonalizationFileRequest>, I>>(
    object: I,
  ): CAccountHardwareGetPersonalizationFileRequest {
    const message = createBaseCAccountHardwareGetPersonalizationFileRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.accountid = object.accountid ?? 0;
    return message;
  },
};

function createBaseCAccountHardwareGetPersonalizationFileResponse(): CAccountHardwareGetPersonalizationFileResponse {
  return { publishedfileid: "0" };
}

export const CAccountHardwareGetPersonalizationFileResponse = {
  encode(
    message: CAccountHardwareGetPersonalizationFileResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.publishedfileid !== "0") {
      writer.uint32(8).uint64(message.publishedfileid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareGetPersonalizationFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareGetPersonalizationFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishedfileid = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareGetPersonalizationFileResponse {
    return { publishedfileid: isSet(object.publishedfileid) ? String(object.publishedfileid) : "0" };
  },

  toJSON(message: CAccountHardwareGetPersonalizationFileResponse): unknown {
    const obj: any = {};
    message.publishedfileid !== undefined && (obj.publishedfileid = message.publishedfileid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareGetPersonalizationFileResponse>, I>>(
    base?: I,
  ): CAccountHardwareGetPersonalizationFileResponse {
    return CAccountHardwareGetPersonalizationFileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareGetPersonalizationFileResponse>, I>>(
    object: I,
  ): CAccountHardwareGetPersonalizationFileResponse {
    const message = createBaseCAccountHardwareGetPersonalizationFileResponse();
    message.publishedfileid = object.publishedfileid ?? "0";
    return message;
  },
};

function createBaseCAccountHardwareVRCompatibilityCheckRequest(): CAccountHardwareVRCompatibilityCheckRequest {
  return { productName: "", values: [] };
}

export const CAccountHardwareVRCompatibilityCheckRequest = {
  encode(message: CAccountHardwareVRCompatibilityCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productName !== "") {
      writer.uint32(10).string(message.productName);
    }
    for (const v of message.values) {
      CAccountHardwareVRCompatibilityCheckRequest_Pair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareVRCompatibilityCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareVRCompatibilityCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.productName = reader.string();
          break;
        case 2:
          message.values.push(CAccountHardwareVRCompatibilityCheckRequest_Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareVRCompatibilityCheckRequest {
    return {
      productName: isSet(object.productName) ? String(object.productName) : "",
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => CAccountHardwareVRCompatibilityCheckRequest_Pair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAccountHardwareVRCompatibilityCheckRequest): unknown {
    const obj: any = {};
    message.productName !== undefined && (obj.productName = message.productName);
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? CAccountHardwareVRCompatibilityCheckRequest_Pair.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckRequest>, I>>(
    base?: I,
  ): CAccountHardwareVRCompatibilityCheckRequest {
    return CAccountHardwareVRCompatibilityCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckRequest>, I>>(
    object: I,
  ): CAccountHardwareVRCompatibilityCheckRequest {
    const message = createBaseCAccountHardwareVRCompatibilityCheckRequest();
    message.productName = object.productName ?? "";
    message.values = object.values?.map((e) => CAccountHardwareVRCompatibilityCheckRequest_Pair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCAccountHardwareVRCompatibilityCheckRequest_Pair(): CAccountHardwareVRCompatibilityCheckRequest_Pair {
  return { key: "", value: "" };
}

export const CAccountHardwareVRCompatibilityCheckRequest_Pair = {
  encode(
    message: CAccountHardwareVRCompatibilityCheckRequest_Pair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareVRCompatibilityCheckRequest_Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareVRCompatibilityCheckRequest_Pair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): CAccountHardwareVRCompatibilityCheckRequest_Pair {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CAccountHardwareVRCompatibilityCheckRequest_Pair): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckRequest_Pair>, I>>(
    base?: I,
  ): CAccountHardwareVRCompatibilityCheckRequest_Pair {
    return CAccountHardwareVRCompatibilityCheckRequest_Pair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckRequest_Pair>, I>>(
    object: I,
  ): CAccountHardwareVRCompatibilityCheckRequest_Pair {
    const message = createBaseCAccountHardwareVRCompatibilityCheckRequest_Pair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCAccountHardwareVRCompatibilityCheckResponse(): CAccountHardwareVRCompatibilityCheckResponse {
  return { values: [], components: [] };
}

export const CAccountHardwareVRCompatibilityCheckResponse = {
  encode(message: CAccountHardwareVRCompatibilityCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      CAccountHardwareVRCompatibilityCheckResponse_Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.components) {
      CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareVRCompatibilityCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(CAccountHardwareVRCompatibilityCheckResponse_Pair.decode(reader, reader.uint32()));
          break;
        case 2:
          message.components.push(
            CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareVRCompatibilityCheckResponse {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => CAccountHardwareVRCompatibilityCheckResponse_Pair.fromJSON(e))
        : [],
      components: Array.isArray(object?.components)
        ? object.components.map((e: any) => CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CAccountHardwareVRCompatibilityCheckResponse): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? CAccountHardwareVRCompatibilityCheckResponse_Pair.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    if (message.components) {
      obj.components = message.components.map((e) =>
        e ? CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.toJSON(e) : undefined
      );
    } else {
      obj.components = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse>, I>>(
    base?: I,
  ): CAccountHardwareVRCompatibilityCheckResponse {
    return CAccountHardwareVRCompatibilityCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse>, I>>(
    object: I,
  ): CAccountHardwareVRCompatibilityCheckResponse {
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse();
    message.values = object.values?.map((e) => CAccountHardwareVRCompatibilityCheckResponse_Pair.fromPartial(e)) || [];
    message.components =
      object.components?.map((e) => CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCAccountHardwareVRCompatibilityCheckResponse_Pair(): CAccountHardwareVRCompatibilityCheckResponse_Pair {
  return { key: "", value: "" };
}

export const CAccountHardwareVRCompatibilityCheckResponse_Pair = {
  encode(
    message: CAccountHardwareVRCompatibilityCheckResponse_Pair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareVRCompatibilityCheckResponse_Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse_Pair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): CAccountHardwareVRCompatibilityCheckResponse_Pair {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CAccountHardwareVRCompatibilityCheckResponse_Pair): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse_Pair>, I>>(
    base?: I,
  ): CAccountHardwareVRCompatibilityCheckResponse_Pair {
    return CAccountHardwareVRCompatibilityCheckResponse_Pair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse_Pair>, I>>(
    object: I,
  ): CAccountHardwareVRCompatibilityCheckResponse_Pair {
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse_Pair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay(): CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
  return { name: "", image: "", value: "" };
}

export const CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay = {
  encode(
    message: CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.image !== "") {
      writer.uint32(18).string(message.image);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.image = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      image: isSet(object.image) ? String(object.image) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay>, I>>(
    base?: I,
  ): CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
    return CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay>, I>>(
    object: I,
  ): CAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay {
    const message = createBaseCAccountHardwareVRCompatibilityCheckResponse_ComponentDisplay();
    message.name = object.name ?? "";
    message.image = object.image ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCAccountHardwareRegisterValveIndexComponentRequest(): CAccountHardwareRegisterValveIndexComponentRequest {
  return {
    serialNumber: "",
    manufacturerSerialNumber: "",
    componentCode: "",
    componentType: 0,
    estimatedTimeRegistered: 0,
  };
}

export const CAccountHardwareRegisterValveIndexComponentRequest = {
  encode(
    message: CAccountHardwareRegisterValveIndexComponentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.manufacturerSerialNumber !== "") {
      writer.uint32(18).string(message.manufacturerSerialNumber);
    }
    if (message.componentCode !== "") {
      writer.uint32(26).string(message.componentCode);
    }
    if (message.componentType !== 0) {
      writer.uint32(32).int32(message.componentType);
    }
    if (message.estimatedTimeRegistered !== 0) {
      writer.uint32(40).int32(message.estimatedTimeRegistered);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareRegisterValveIndexComponentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareRegisterValveIndexComponentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.manufacturerSerialNumber = reader.string();
          break;
        case 3:
          message.componentCode = reader.string();
          break;
        case 4:
          message.componentType = reader.int32() as any;
          break;
        case 5:
          message.estimatedTimeRegistered = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareRegisterValveIndexComponentRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      manufacturerSerialNumber: isSet(object.manufacturerSerialNumber) ? String(object.manufacturerSerialNumber) : "",
      componentCode: isSet(object.componentCode) ? String(object.componentCode) : "",
      componentType: isSet(object.componentType) ? eValveIndexComponentFromJSON(object.componentType) : 0,
      estimatedTimeRegistered: isSet(object.estimatedTimeRegistered) ? Number(object.estimatedTimeRegistered) : 0,
    };
  },

  toJSON(message: CAccountHardwareRegisterValveIndexComponentRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.manufacturerSerialNumber !== undefined && (obj.manufacturerSerialNumber = message.manufacturerSerialNumber);
    message.componentCode !== undefined && (obj.componentCode = message.componentCode);
    message.componentType !== undefined && (obj.componentType = eValveIndexComponentToJSON(message.componentType));
    message.estimatedTimeRegistered !== undefined &&
      (obj.estimatedTimeRegistered = Math.round(message.estimatedTimeRegistered));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareRegisterValveIndexComponentRequest>, I>>(
    base?: I,
  ): CAccountHardwareRegisterValveIndexComponentRequest {
    return CAccountHardwareRegisterValveIndexComponentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareRegisterValveIndexComponentRequest>, I>>(
    object: I,
  ): CAccountHardwareRegisterValveIndexComponentRequest {
    const message = createBaseCAccountHardwareRegisterValveIndexComponentRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.manufacturerSerialNumber = object.manufacturerSerialNumber ?? "";
    message.componentCode = object.componentCode ?? "";
    message.componentType = object.componentType ?? 0;
    message.estimatedTimeRegistered = object.estimatedTimeRegistered ?? 0;
    return message;
  },
};

function createBaseCAccountHardwareRegisterValveIndexComponentResponse(): CAccountHardwareRegisterValveIndexComponentResponse {
  return {};
}

export const CAccountHardwareRegisterValveIndexComponentResponse = {
  encode(_: CAccountHardwareRegisterValveIndexComponentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareRegisterValveIndexComponentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareRegisterValveIndexComponentResponse();
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

  fromJSON(_: any): CAccountHardwareRegisterValveIndexComponentResponse {
    return {};
  },

  toJSON(_: CAccountHardwareRegisterValveIndexComponentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareRegisterValveIndexComponentResponse>, I>>(
    base?: I,
  ): CAccountHardwareRegisterValveIndexComponentResponse {
    return CAccountHardwareRegisterValveIndexComponentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareRegisterValveIndexComponentResponse>, I>>(
    _: I,
  ): CAccountHardwareRegisterValveIndexComponentResponse {
    const message = createBaseCAccountHardwareRegisterValveIndexComponentResponse();
    return message;
  },
};

function createBaseCAccountHardwareGetSteamDeckComponentsRequest(): CAccountHardwareGetSteamDeckComponentsRequest {
  return { serialNumber: "", controllerCode: "" };
}

export const CAccountHardwareGetSteamDeckComponentsRequest = {
  encode(message: CAccountHardwareGetSteamDeckComponentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    if (message.controllerCode !== "") {
      writer.uint32(18).string(message.controllerCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareGetSteamDeckComponentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareGetSteamDeckComponentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        case 2:
          message.controllerCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareGetSteamDeckComponentsRequest {
    return {
      serialNumber: isSet(object.serialNumber) ? String(object.serialNumber) : "",
      controllerCode: isSet(object.controllerCode) ? String(object.controllerCode) : "",
    };
  },

  toJSON(message: CAccountHardwareGetSteamDeckComponentsRequest): unknown {
    const obj: any = {};
    message.serialNumber !== undefined && (obj.serialNumber = message.serialNumber);
    message.controllerCode !== undefined && (obj.controllerCode = message.controllerCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareGetSteamDeckComponentsRequest>, I>>(
    base?: I,
  ): CAccountHardwareGetSteamDeckComponentsRequest {
    return CAccountHardwareGetSteamDeckComponentsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareGetSteamDeckComponentsRequest>, I>>(
    object: I,
  ): CAccountHardwareGetSteamDeckComponentsRequest {
    const message = createBaseCAccountHardwareGetSteamDeckComponentsRequest();
    message.serialNumber = object.serialNumber ?? "";
    message.controllerCode = object.controllerCode ?? "";
    return message;
  },
};

function createBaseCAccountHardwareGetSteamDeckComponentsResponse(): CAccountHardwareGetSteamDeckComponentsResponse {
  return { jsonComponents: "" };
}

export const CAccountHardwareGetSteamDeckComponentsResponse = {
  encode(
    message: CAccountHardwareGetSteamDeckComponentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.jsonComponents !== "") {
      writer.uint32(10).string(message.jsonComponents);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountHardwareGetSteamDeckComponentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountHardwareGetSteamDeckComponentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jsonComponents = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountHardwareGetSteamDeckComponentsResponse {
    return { jsonComponents: isSet(object.jsonComponents) ? String(object.jsonComponents) : "" };
  },

  toJSON(message: CAccountHardwareGetSteamDeckComponentsResponse): unknown {
    const obj: any = {};
    message.jsonComponents !== undefined && (obj.jsonComponents = message.jsonComponents);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountHardwareGetSteamDeckComponentsResponse>, I>>(
    base?: I,
  ): CAccountHardwareGetSteamDeckComponentsResponse {
    return CAccountHardwareGetSteamDeckComponentsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountHardwareGetSteamDeckComponentsResponse>, I>>(
    object: I,
  ): CAccountHardwareGetSteamDeckComponentsResponse {
    const message = createBaseCAccountHardwareGetSteamDeckComponentsResponse();
    message.jsonComponents = object.jsonComponents ?? "";
    return message;
  },
};

export interface AccountHardware {
  RegisterSteamController(
    request: CAccountHardwareRegisterSteamControllerRequest,
  ): Promise<CAccountHardwareRegisterSteamControllerResponse>;
  CompleteSteamControllerRegistration(
    request: CAccountHardwareCompleteSteamControllerRegistrationRequest,
  ): Promise<CAccountHardwareCompleteSteamControllerRegistrationResponse>;
  QueryAccountsRegisteredToController(
    request: CAccountHardwareQueryAccountsRegisteredToSerialRequest,
  ): Promise<CAccountHardwareQueryAccountsRegisteredToSerialResponse>;
  SetDesiredControllerConfigForApp(
    request: CAccountHardwareSteamControllerSetConfigRequest,
  ): Promise<CAccountHardwareSteamControllerSetConfigResponse>;
  GetDesiredControllerConfigForApp(
    request: CAccountHardwareSteamControllerGetConfigRequest,
  ): Promise<CAccountHardwareSteamControllerGetConfigResponse>;
  DeRegisterSteamController(
    request: CAccountHardwareDeRegisterSteamControllerRequest,
  ): Promise<CAccountHardwareDeRegisterSteamControllerResponse>;
  SetControllerPersonalizationFile(
    request: CAccountHardwareSetPersonalizationFileRequest,
  ): Promise<CAccountHardwareSetPersonalizationFileResponse>;
  GetControllerPersonalizationFile(
    request: CAccountHardwareGetPersonalizationFileRequest,
  ): Promise<CAccountHardwareGetPersonalizationFileResponse>;
  VRCompatibilityCheck(
    request: CAccountHardwareVRCompatibilityCheckRequest,
  ): Promise<CAccountHardwareVRCompatibilityCheckResponse>;
  RegisterValveIndexComponent(
    request: CAccountHardwareRegisterValveIndexComponentRequest,
  ): Promise<CAccountHardwareRegisterValveIndexComponentResponse>;
  GetSteamDeckComponents(
    request: CAccountHardwareGetSteamDeckComponentsRequest,
  ): Promise<CAccountHardwareGetSteamDeckComponentsResponse>;
}

export class AccountHardwareClientImpl implements AccountHardware {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AccountHardware";
    this.rpc = rpc;
    this.RegisterSteamController = this.RegisterSteamController.bind(this);
    this.CompleteSteamControllerRegistration = this.CompleteSteamControllerRegistration.bind(this);
    this.QueryAccountsRegisteredToController = this.QueryAccountsRegisteredToController.bind(this);
    this.SetDesiredControllerConfigForApp = this.SetDesiredControllerConfigForApp.bind(this);
    this.GetDesiredControllerConfigForApp = this.GetDesiredControllerConfigForApp.bind(this);
    this.DeRegisterSteamController = this.DeRegisterSteamController.bind(this);
    this.SetControllerPersonalizationFile = this.SetControllerPersonalizationFile.bind(this);
    this.GetControllerPersonalizationFile = this.GetControllerPersonalizationFile.bind(this);
    this.VRCompatibilityCheck = this.VRCompatibilityCheck.bind(this);
    this.RegisterValveIndexComponent = this.RegisterValveIndexComponent.bind(this);
    this.GetSteamDeckComponents = this.GetSteamDeckComponents.bind(this);
  }
  RegisterSteamController(
    request: CAccountHardwareRegisterSteamControllerRequest,
  ): Promise<CAccountHardwareRegisterSteamControllerResponse> {
    const data = CAccountHardwareRegisterSteamControllerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterSteamController", data);
    return promise.then((data) => CAccountHardwareRegisterSteamControllerResponse.decode(new _m0.Reader(data)));
  }

  CompleteSteamControllerRegistration(
    request: CAccountHardwareCompleteSteamControllerRegistrationRequest,
  ): Promise<CAccountHardwareCompleteSteamControllerRegistrationResponse> {
    const data = CAccountHardwareCompleteSteamControllerRegistrationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CompleteSteamControllerRegistration", data);
    return promise.then((data) =>
      CAccountHardwareCompleteSteamControllerRegistrationResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAccountsRegisteredToController(
    request: CAccountHardwareQueryAccountsRegisteredToSerialRequest,
  ): Promise<CAccountHardwareQueryAccountsRegisteredToSerialResponse> {
    const data = CAccountHardwareQueryAccountsRegisteredToSerialRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryAccountsRegisteredToController", data);
    return promise.then((data) => CAccountHardwareQueryAccountsRegisteredToSerialResponse.decode(new _m0.Reader(data)));
  }

  SetDesiredControllerConfigForApp(
    request: CAccountHardwareSteamControllerSetConfigRequest,
  ): Promise<CAccountHardwareSteamControllerSetConfigResponse> {
    const data = CAccountHardwareSteamControllerSetConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetDesiredControllerConfigForApp", data);
    return promise.then((data) => CAccountHardwareSteamControllerSetConfigResponse.decode(new _m0.Reader(data)));
  }

  GetDesiredControllerConfigForApp(
    request: CAccountHardwareSteamControllerGetConfigRequest,
  ): Promise<CAccountHardwareSteamControllerGetConfigResponse> {
    const data = CAccountHardwareSteamControllerGetConfigRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDesiredControllerConfigForApp", data);
    return promise.then((data) => CAccountHardwareSteamControllerGetConfigResponse.decode(new _m0.Reader(data)));
  }

  DeRegisterSteamController(
    request: CAccountHardwareDeRegisterSteamControllerRequest,
  ): Promise<CAccountHardwareDeRegisterSteamControllerResponse> {
    const data = CAccountHardwareDeRegisterSteamControllerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeRegisterSteamController", data);
    return promise.then((data) => CAccountHardwareDeRegisterSteamControllerResponse.decode(new _m0.Reader(data)));
  }

  SetControllerPersonalizationFile(
    request: CAccountHardwareSetPersonalizationFileRequest,
  ): Promise<CAccountHardwareSetPersonalizationFileResponse> {
    const data = CAccountHardwareSetPersonalizationFileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetControllerPersonalizationFile", data);
    return promise.then((data) => CAccountHardwareSetPersonalizationFileResponse.decode(new _m0.Reader(data)));
  }

  GetControllerPersonalizationFile(
    request: CAccountHardwareGetPersonalizationFileRequest,
  ): Promise<CAccountHardwareGetPersonalizationFileResponse> {
    const data = CAccountHardwareGetPersonalizationFileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetControllerPersonalizationFile", data);
    return promise.then((data) => CAccountHardwareGetPersonalizationFileResponse.decode(new _m0.Reader(data)));
  }

  VRCompatibilityCheck(
    request: CAccountHardwareVRCompatibilityCheckRequest,
  ): Promise<CAccountHardwareVRCompatibilityCheckResponse> {
    const data = CAccountHardwareVRCompatibilityCheckRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "VRCompatibilityCheck", data);
    return promise.then((data) => CAccountHardwareVRCompatibilityCheckResponse.decode(new _m0.Reader(data)));
  }

  RegisterValveIndexComponent(
    request: CAccountHardwareRegisterValveIndexComponentRequest,
  ): Promise<CAccountHardwareRegisterValveIndexComponentResponse> {
    const data = CAccountHardwareRegisterValveIndexComponentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterValveIndexComponent", data);
    return promise.then((data) => CAccountHardwareRegisterValveIndexComponentResponse.decode(new _m0.Reader(data)));
  }

  GetSteamDeckComponents(
    request: CAccountHardwareGetSteamDeckComponentsRequest,
  ): Promise<CAccountHardwareGetSteamDeckComponentsResponse> {
    const data = CAccountHardwareGetSteamDeckComponentsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSteamDeckComponents", data);
    return promise.then((data) => CAccountHardwareGetSteamDeckComponentsResponse.decode(new _m0.Reader(data)));
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
