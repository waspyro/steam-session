/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export interface CCredentialsTestAvailablePasswordRequest {
  password: string;
  shaDigestPassword: Buffer;
  accountName: string;
}

export interface CCredentialsTestAvailablePasswordResponse {
  isValid: boolean;
}

export interface CCredentialsGetSteamGuardDetailsRequest {
  webcookie: string;
  timestampMinimumWanted: number;
  deprecatedIpaddress: number;
  ipAddress: CMsgIPAddress | undefined;
}

export interface CCredentialsGetSteamGuardDetailsResponse {
  isSteamguardEnabled: boolean;
  timestampSteamguardEnabled: number;
  deprecatedMachineNameUserchosen: string;
  deprecatedTimestampMachineSteamguardEnabled: number;
  deprecatedAuthenticationExistsFromGeolocBeforeMintime: boolean;
  deprecatedMachineId: string;
  sessionData: CCredentialsGetSteamGuardDetailsResponse_SessionData[];
  isTwofactorEnabled: boolean;
  timestampTwofactorEnabled: number;
  isPhoneVerified: boolean;
}

export interface CCredentialsGetSteamGuardDetailsResponse_SessionData {
  machineId: string;
  machineNameUserchosen: string;
  timestampMachineSteamguardEnabled: number;
  authenticationExistsFromGeolocBeforeMintime: boolean;
  authenticationExistsFromSameIpBeforeMintime: boolean;
  publicIpv4: number;
  publicIpAddress: string;
}

export interface CCredentialsValidateEmailAddressRequest {
  stoken: string;
}

export interface CCredentialsValidateEmailAddressResponse {
  wasValidated: boolean;
}

export interface CCredentialsSteamGuardPhishingReportRequest {
  paramString: string;
  ipaddressActual: string;
}

export interface CCredentialsSteamGuardPhishingReportResponse {
  ipaddressLoginattempt: string;
  countrynameLoginattempt: string;
  statenameLoginattempt: string;
  citynameLoginattempt: string;
  ipaddressActual: string;
  countrynameActual: string;
  statenameActual: string;
  citynameActual: string;
  steamguardCode: string;
}

export interface CCredentialsLastCredentialChangeTimeRequest {
  userChangesOnly: boolean;
}

export interface CCredentialsLastCredentialChangeTimeResponse {
  timestampLastPasswordChange: number;
  timestampLastEmailChange: number;
  timestampLastPasswordReset: number;
}

export interface CCredentialsGetAccountAuthSecretRequest {
}

export interface CCredentialsGetAccountAuthSecretResponse {
  secretId: number;
  secret: Buffer;
}

function createBaseCCredentialsTestAvailablePasswordRequest(): CCredentialsTestAvailablePasswordRequest {
  return { password: "", shaDigestPassword: Buffer.alloc(0), accountName: "" };
}

export const CCredentialsTestAvailablePasswordRequest = {
  encode(message: CCredentialsTestAvailablePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.shaDigestPassword.length !== 0) {
      writer.uint32(18).bytes(message.shaDigestPassword);
    }
    if (message.accountName !== "") {
      writer.uint32(26).string(message.accountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsTestAvailablePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsTestAvailablePasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.password = reader.string();
          break;
        case 2:
          message.shaDigestPassword = reader.bytes() as Buffer;
          break;
        case 3:
          message.accountName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsTestAvailablePasswordRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      shaDigestPassword: isSet(object.shaDigestPassword)
        ? Buffer.from(bytesFromBase64(object.shaDigestPassword))
        : Buffer.alloc(0),
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
    };
  },

  toJSON(message: CCredentialsTestAvailablePasswordRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.shaDigestPassword !== undefined &&
      (obj.shaDigestPassword = base64FromBytes(
        message.shaDigestPassword !== undefined ? message.shaDigestPassword : Buffer.alloc(0),
      ));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsTestAvailablePasswordRequest>, I>>(
    base?: I,
  ): CCredentialsTestAvailablePasswordRequest {
    return CCredentialsTestAvailablePasswordRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsTestAvailablePasswordRequest>, I>>(
    object: I,
  ): CCredentialsTestAvailablePasswordRequest {
    const message = createBaseCCredentialsTestAvailablePasswordRequest();
    message.password = object.password ?? "";
    message.shaDigestPassword = object.shaDigestPassword ?? Buffer.alloc(0);
    message.accountName = object.accountName ?? "";
    return message;
  },
};

function createBaseCCredentialsTestAvailablePasswordResponse(): CCredentialsTestAvailablePasswordResponse {
  return { isValid: false };
}

export const CCredentialsTestAvailablePasswordResponse = {
  encode(message: CCredentialsTestAvailablePasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(24).bool(message.isValid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsTestAvailablePasswordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsTestAvailablePasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsTestAvailablePasswordResponse {
    return { isValid: isSet(object.isValid) ? Boolean(object.isValid) : false };
  },

  toJSON(message: CCredentialsTestAvailablePasswordResponse): unknown {
    const obj: any = {};
    message.isValid !== undefined && (obj.isValid = message.isValid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsTestAvailablePasswordResponse>, I>>(
    base?: I,
  ): CCredentialsTestAvailablePasswordResponse {
    return CCredentialsTestAvailablePasswordResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsTestAvailablePasswordResponse>, I>>(
    object: I,
  ): CCredentialsTestAvailablePasswordResponse {
    const message = createBaseCCredentialsTestAvailablePasswordResponse();
    message.isValid = object.isValid ?? false;
    return message;
  },
};

function createBaseCCredentialsGetSteamGuardDetailsRequest(): CCredentialsGetSteamGuardDetailsRequest {
  return { webcookie: "", timestampMinimumWanted: 0, deprecatedIpaddress: 0, ipAddress: undefined };
}

export const CCredentialsGetSteamGuardDetailsRequest = {
  encode(message: CCredentialsGetSteamGuardDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.webcookie !== "") {
      writer.uint32(18).string(message.webcookie);
    }
    if (message.timestampMinimumWanted !== 0) {
      writer.uint32(29).fixed32(message.timestampMinimumWanted);
    }
    if (message.deprecatedIpaddress !== 0) {
      writer.uint32(32).int32(message.deprecatedIpaddress);
    }
    if (message.ipAddress !== undefined) {
      CMsgIPAddress.encode(message.ipAddress, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsGetSteamGuardDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsGetSteamGuardDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.webcookie = reader.string();
          break;
        case 3:
          message.timestampMinimumWanted = reader.fixed32();
          break;
        case 4:
          message.deprecatedIpaddress = reader.int32();
          break;
        case 5:
          message.ipAddress = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsGetSteamGuardDetailsRequest {
    return {
      webcookie: isSet(object.webcookie) ? String(object.webcookie) : "",
      timestampMinimumWanted: isSet(object.timestampMinimumWanted) ? Number(object.timestampMinimumWanted) : 0,
      deprecatedIpaddress: isSet(object.deprecatedIpaddress) ? Number(object.deprecatedIpaddress) : 0,
      ipAddress: isSet(object.ipAddress) ? CMsgIPAddress.fromJSON(object.ipAddress) : undefined,
    };
  },

  toJSON(message: CCredentialsGetSteamGuardDetailsRequest): unknown {
    const obj: any = {};
    message.webcookie !== undefined && (obj.webcookie = message.webcookie);
    message.timestampMinimumWanted !== undefined &&
      (obj.timestampMinimumWanted = Math.round(message.timestampMinimumWanted));
    message.deprecatedIpaddress !== undefined && (obj.deprecatedIpaddress = Math.round(message.deprecatedIpaddress));
    message.ipAddress !== undefined &&
      (obj.ipAddress = message.ipAddress ? CMsgIPAddress.toJSON(message.ipAddress) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsRequest>, I>>(
    base?: I,
  ): CCredentialsGetSteamGuardDetailsRequest {
    return CCredentialsGetSteamGuardDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsRequest>, I>>(
    object: I,
  ): CCredentialsGetSteamGuardDetailsRequest {
    const message = createBaseCCredentialsGetSteamGuardDetailsRequest();
    message.webcookie = object.webcookie ?? "";
    message.timestampMinimumWanted = object.timestampMinimumWanted ?? 0;
    message.deprecatedIpaddress = object.deprecatedIpaddress ?? 0;
    message.ipAddress = (object.ipAddress !== undefined && object.ipAddress !== null)
      ? CMsgIPAddress.fromPartial(object.ipAddress)
      : undefined;
    return message;
  },
};

function createBaseCCredentialsGetSteamGuardDetailsResponse(): CCredentialsGetSteamGuardDetailsResponse {
  return {
    isSteamguardEnabled: false,
    timestampSteamguardEnabled: 0,
    deprecatedMachineNameUserchosen: "",
    deprecatedTimestampMachineSteamguardEnabled: 0,
    deprecatedAuthenticationExistsFromGeolocBeforeMintime: false,
    deprecatedMachineId: "0",
    sessionData: [],
    isTwofactorEnabled: false,
    timestampTwofactorEnabled: 0,
    isPhoneVerified: false,
  };
}

export const CCredentialsGetSteamGuardDetailsResponse = {
  encode(message: CCredentialsGetSteamGuardDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSteamguardEnabled === true) {
      writer.uint32(8).bool(message.isSteamguardEnabled);
    }
    if (message.timestampSteamguardEnabled !== 0) {
      writer.uint32(21).fixed32(message.timestampSteamguardEnabled);
    }
    if (message.deprecatedMachineNameUserchosen !== "") {
      writer.uint32(34).string(message.deprecatedMachineNameUserchosen);
    }
    if (message.deprecatedTimestampMachineSteamguardEnabled !== 0) {
      writer.uint32(45).fixed32(message.deprecatedTimestampMachineSteamguardEnabled);
    }
    if (message.deprecatedAuthenticationExistsFromGeolocBeforeMintime === true) {
      writer.uint32(48).bool(message.deprecatedAuthenticationExistsFromGeolocBeforeMintime);
    }
    if (message.deprecatedMachineId !== "0") {
      writer.uint32(56).uint64(message.deprecatedMachineId);
    }
    for (const v of message.sessionData) {
      CCredentialsGetSteamGuardDetailsResponse_SessionData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.isTwofactorEnabled === true) {
      writer.uint32(72).bool(message.isTwofactorEnabled);
    }
    if (message.timestampTwofactorEnabled !== 0) {
      writer.uint32(85).fixed32(message.timestampTwofactorEnabled);
    }
    if (message.isPhoneVerified === true) {
      writer.uint32(88).bool(message.isPhoneVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsGetSteamGuardDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsGetSteamGuardDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSteamguardEnabled = reader.bool();
          break;
        case 2:
          message.timestampSteamguardEnabled = reader.fixed32();
          break;
        case 4:
          message.deprecatedMachineNameUserchosen = reader.string();
          break;
        case 5:
          message.deprecatedTimestampMachineSteamguardEnabled = reader.fixed32();
          break;
        case 6:
          message.deprecatedAuthenticationExistsFromGeolocBeforeMintime = reader.bool();
          break;
        case 7:
          message.deprecatedMachineId = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.sessionData.push(
            CCredentialsGetSteamGuardDetailsResponse_SessionData.decode(reader, reader.uint32()),
          );
          break;
        case 9:
          message.isTwofactorEnabled = reader.bool();
          break;
        case 10:
          message.timestampTwofactorEnabled = reader.fixed32();
          break;
        case 11:
          message.isPhoneVerified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsGetSteamGuardDetailsResponse {
    return {
      isSteamguardEnabled: isSet(object.isSteamguardEnabled) ? Boolean(object.isSteamguardEnabled) : false,
      timestampSteamguardEnabled: isSet(object.timestampSteamguardEnabled)
        ? Number(object.timestampSteamguardEnabled)
        : 0,
      deprecatedMachineNameUserchosen: isSet(object.deprecatedMachineNameUserchosen)
        ? String(object.deprecatedMachineNameUserchosen)
        : "",
      deprecatedTimestampMachineSteamguardEnabled: isSet(object.deprecatedTimestampMachineSteamguardEnabled)
        ? Number(object.deprecatedTimestampMachineSteamguardEnabled)
        : 0,
      deprecatedAuthenticationExistsFromGeolocBeforeMintime:
        isSet(object.deprecatedAuthenticationExistsFromGeolocBeforeMintime)
          ? Boolean(object.deprecatedAuthenticationExistsFromGeolocBeforeMintime)
          : false,
      deprecatedMachineId: isSet(object.deprecatedMachineId) ? String(object.deprecatedMachineId) : "0",
      sessionData: Array.isArray(object?.sessionData)
        ? object.sessionData.map((e: any) => CCredentialsGetSteamGuardDetailsResponse_SessionData.fromJSON(e))
        : [],
      isTwofactorEnabled: isSet(object.isTwofactorEnabled) ? Boolean(object.isTwofactorEnabled) : false,
      timestampTwofactorEnabled: isSet(object.timestampTwofactorEnabled) ? Number(object.timestampTwofactorEnabled) : 0,
      isPhoneVerified: isSet(object.isPhoneVerified) ? Boolean(object.isPhoneVerified) : false,
    };
  },

  toJSON(message: CCredentialsGetSteamGuardDetailsResponse): unknown {
    const obj: any = {};
    message.isSteamguardEnabled !== undefined && (obj.isSteamguardEnabled = message.isSteamguardEnabled);
    message.timestampSteamguardEnabled !== undefined &&
      (obj.timestampSteamguardEnabled = Math.round(message.timestampSteamguardEnabled));
    message.deprecatedMachineNameUserchosen !== undefined &&
      (obj.deprecatedMachineNameUserchosen = message.deprecatedMachineNameUserchosen);
    message.deprecatedTimestampMachineSteamguardEnabled !== undefined &&
      (obj.deprecatedTimestampMachineSteamguardEnabled = Math.round(
        message.deprecatedTimestampMachineSteamguardEnabled,
      ));
    message.deprecatedAuthenticationExistsFromGeolocBeforeMintime !== undefined &&
      (obj.deprecatedAuthenticationExistsFromGeolocBeforeMintime =
        message.deprecatedAuthenticationExistsFromGeolocBeforeMintime);
    message.deprecatedMachineId !== undefined && (obj.deprecatedMachineId = message.deprecatedMachineId);
    if (message.sessionData) {
      obj.sessionData = message.sessionData.map((e) =>
        e ? CCredentialsGetSteamGuardDetailsResponse_SessionData.toJSON(e) : undefined
      );
    } else {
      obj.sessionData = [];
    }
    message.isTwofactorEnabled !== undefined && (obj.isTwofactorEnabled = message.isTwofactorEnabled);
    message.timestampTwofactorEnabled !== undefined &&
      (obj.timestampTwofactorEnabled = Math.round(message.timestampTwofactorEnabled));
    message.isPhoneVerified !== undefined && (obj.isPhoneVerified = message.isPhoneVerified);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsResponse>, I>>(
    base?: I,
  ): CCredentialsGetSteamGuardDetailsResponse {
    return CCredentialsGetSteamGuardDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsResponse>, I>>(
    object: I,
  ): CCredentialsGetSteamGuardDetailsResponse {
    const message = createBaseCCredentialsGetSteamGuardDetailsResponse();
    message.isSteamguardEnabled = object.isSteamguardEnabled ?? false;
    message.timestampSteamguardEnabled = object.timestampSteamguardEnabled ?? 0;
    message.deprecatedMachineNameUserchosen = object.deprecatedMachineNameUserchosen ?? "";
    message.deprecatedTimestampMachineSteamguardEnabled = object.deprecatedTimestampMachineSteamguardEnabled ?? 0;
    message.deprecatedAuthenticationExistsFromGeolocBeforeMintime =
      object.deprecatedAuthenticationExistsFromGeolocBeforeMintime ?? false;
    message.deprecatedMachineId = object.deprecatedMachineId ?? "0";
    message.sessionData =
      object.sessionData?.map((e) => CCredentialsGetSteamGuardDetailsResponse_SessionData.fromPartial(e)) || [];
    message.isTwofactorEnabled = object.isTwofactorEnabled ?? false;
    message.timestampTwofactorEnabled = object.timestampTwofactorEnabled ?? 0;
    message.isPhoneVerified = object.isPhoneVerified ?? false;
    return message;
  },
};

function createBaseCCredentialsGetSteamGuardDetailsResponse_SessionData(): CCredentialsGetSteamGuardDetailsResponse_SessionData {
  return {
    machineId: "0",
    machineNameUserchosen: "",
    timestampMachineSteamguardEnabled: 0,
    authenticationExistsFromGeolocBeforeMintime: false,
    authenticationExistsFromSameIpBeforeMintime: false,
    publicIpv4: 0,
    publicIpAddress: "",
  };
}

export const CCredentialsGetSteamGuardDetailsResponse_SessionData = {
  encode(
    message: CCredentialsGetSteamGuardDetailsResponse_SessionData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.machineId !== "0") {
      writer.uint32(8).uint64(message.machineId);
    }
    if (message.machineNameUserchosen !== "") {
      writer.uint32(18).string(message.machineNameUserchosen);
    }
    if (message.timestampMachineSteamguardEnabled !== 0) {
      writer.uint32(29).fixed32(message.timestampMachineSteamguardEnabled);
    }
    if (message.authenticationExistsFromGeolocBeforeMintime === true) {
      writer.uint32(32).bool(message.authenticationExistsFromGeolocBeforeMintime);
    }
    if (message.authenticationExistsFromSameIpBeforeMintime === true) {
      writer.uint32(48).bool(message.authenticationExistsFromSameIpBeforeMintime);
    }
    if (message.publicIpv4 !== 0) {
      writer.uint32(56).uint32(message.publicIpv4);
    }
    if (message.publicIpAddress !== "") {
      writer.uint32(66).string(message.publicIpAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsGetSteamGuardDetailsResponse_SessionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsGetSteamGuardDetailsResponse_SessionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.machineId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.machineNameUserchosen = reader.string();
          break;
        case 3:
          message.timestampMachineSteamguardEnabled = reader.fixed32();
          break;
        case 4:
          message.authenticationExistsFromGeolocBeforeMintime = reader.bool();
          break;
        case 6:
          message.authenticationExistsFromSameIpBeforeMintime = reader.bool();
          break;
        case 7:
          message.publicIpv4 = reader.uint32();
          break;
        case 8:
          message.publicIpAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsGetSteamGuardDetailsResponse_SessionData {
    return {
      machineId: isSet(object.machineId) ? String(object.machineId) : "0",
      machineNameUserchosen: isSet(object.machineNameUserchosen) ? String(object.machineNameUserchosen) : "",
      timestampMachineSteamguardEnabled: isSet(object.timestampMachineSteamguardEnabled)
        ? Number(object.timestampMachineSteamguardEnabled)
        : 0,
      authenticationExistsFromGeolocBeforeMintime: isSet(object.authenticationExistsFromGeolocBeforeMintime)
        ? Boolean(object.authenticationExistsFromGeolocBeforeMintime)
        : false,
      authenticationExistsFromSameIpBeforeMintime: isSet(object.authenticationExistsFromSameIpBeforeMintime)
        ? Boolean(object.authenticationExistsFromSameIpBeforeMintime)
        : false,
      publicIpv4: isSet(object.publicIpv4) ? Number(object.publicIpv4) : 0,
      publicIpAddress: isSet(object.publicIpAddress) ? String(object.publicIpAddress) : "",
    };
  },

  toJSON(message: CCredentialsGetSteamGuardDetailsResponse_SessionData): unknown {
    const obj: any = {};
    message.machineId !== undefined && (obj.machineId = message.machineId);
    message.machineNameUserchosen !== undefined && (obj.machineNameUserchosen = message.machineNameUserchosen);
    message.timestampMachineSteamguardEnabled !== undefined &&
      (obj.timestampMachineSteamguardEnabled = Math.round(message.timestampMachineSteamguardEnabled));
    message.authenticationExistsFromGeolocBeforeMintime !== undefined &&
      (obj.authenticationExistsFromGeolocBeforeMintime = message.authenticationExistsFromGeolocBeforeMintime);
    message.authenticationExistsFromSameIpBeforeMintime !== undefined &&
      (obj.authenticationExistsFromSameIpBeforeMintime = message.authenticationExistsFromSameIpBeforeMintime);
    message.publicIpv4 !== undefined && (obj.publicIpv4 = Math.round(message.publicIpv4));
    message.publicIpAddress !== undefined && (obj.publicIpAddress = message.publicIpAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsResponse_SessionData>, I>>(
    base?: I,
  ): CCredentialsGetSteamGuardDetailsResponse_SessionData {
    return CCredentialsGetSteamGuardDetailsResponse_SessionData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsGetSteamGuardDetailsResponse_SessionData>, I>>(
    object: I,
  ): CCredentialsGetSteamGuardDetailsResponse_SessionData {
    const message = createBaseCCredentialsGetSteamGuardDetailsResponse_SessionData();
    message.machineId = object.machineId ?? "0";
    message.machineNameUserchosen = object.machineNameUserchosen ?? "";
    message.timestampMachineSteamguardEnabled = object.timestampMachineSteamguardEnabled ?? 0;
    message.authenticationExistsFromGeolocBeforeMintime = object.authenticationExistsFromGeolocBeforeMintime ?? false;
    message.authenticationExistsFromSameIpBeforeMintime = object.authenticationExistsFromSameIpBeforeMintime ?? false;
    message.publicIpv4 = object.publicIpv4 ?? 0;
    message.publicIpAddress = object.publicIpAddress ?? "";
    return message;
  },
};

function createBaseCCredentialsValidateEmailAddressRequest(): CCredentialsValidateEmailAddressRequest {
  return { stoken: "" };
}

export const CCredentialsValidateEmailAddressRequest = {
  encode(message: CCredentialsValidateEmailAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stoken !== "") {
      writer.uint32(10).string(message.stoken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsValidateEmailAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsValidateEmailAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stoken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsValidateEmailAddressRequest {
    return { stoken: isSet(object.stoken) ? String(object.stoken) : "" };
  },

  toJSON(message: CCredentialsValidateEmailAddressRequest): unknown {
    const obj: any = {};
    message.stoken !== undefined && (obj.stoken = message.stoken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsValidateEmailAddressRequest>, I>>(
    base?: I,
  ): CCredentialsValidateEmailAddressRequest {
    return CCredentialsValidateEmailAddressRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsValidateEmailAddressRequest>, I>>(
    object: I,
  ): CCredentialsValidateEmailAddressRequest {
    const message = createBaseCCredentialsValidateEmailAddressRequest();
    message.stoken = object.stoken ?? "";
    return message;
  },
};

function createBaseCCredentialsValidateEmailAddressResponse(): CCredentialsValidateEmailAddressResponse {
  return { wasValidated: false };
}

export const CCredentialsValidateEmailAddressResponse = {
  encode(message: CCredentialsValidateEmailAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wasValidated === true) {
      writer.uint32(8).bool(message.wasValidated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsValidateEmailAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsValidateEmailAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wasValidated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsValidateEmailAddressResponse {
    return { wasValidated: isSet(object.wasValidated) ? Boolean(object.wasValidated) : false };
  },

  toJSON(message: CCredentialsValidateEmailAddressResponse): unknown {
    const obj: any = {};
    message.wasValidated !== undefined && (obj.wasValidated = message.wasValidated);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsValidateEmailAddressResponse>, I>>(
    base?: I,
  ): CCredentialsValidateEmailAddressResponse {
    return CCredentialsValidateEmailAddressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsValidateEmailAddressResponse>, I>>(
    object: I,
  ): CCredentialsValidateEmailAddressResponse {
    const message = createBaseCCredentialsValidateEmailAddressResponse();
    message.wasValidated = object.wasValidated ?? false;
    return message;
  },
};

function createBaseCCredentialsSteamGuardPhishingReportRequest(): CCredentialsSteamGuardPhishingReportRequest {
  return { paramString: "", ipaddressActual: "" };
}

export const CCredentialsSteamGuardPhishingReportRequest = {
  encode(message: CCredentialsSteamGuardPhishingReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paramString !== "") {
      writer.uint32(10).string(message.paramString);
    }
    if (message.ipaddressActual !== "") {
      writer.uint32(18).string(message.ipaddressActual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsSteamGuardPhishingReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsSteamGuardPhishingReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramString = reader.string();
          break;
        case 2:
          message.ipaddressActual = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsSteamGuardPhishingReportRequest {
    return {
      paramString: isSet(object.paramString) ? String(object.paramString) : "",
      ipaddressActual: isSet(object.ipaddressActual) ? String(object.ipaddressActual) : "",
    };
  },

  toJSON(message: CCredentialsSteamGuardPhishingReportRequest): unknown {
    const obj: any = {};
    message.paramString !== undefined && (obj.paramString = message.paramString);
    message.ipaddressActual !== undefined && (obj.ipaddressActual = message.ipaddressActual);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsSteamGuardPhishingReportRequest>, I>>(
    base?: I,
  ): CCredentialsSteamGuardPhishingReportRequest {
    return CCredentialsSteamGuardPhishingReportRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsSteamGuardPhishingReportRequest>, I>>(
    object: I,
  ): CCredentialsSteamGuardPhishingReportRequest {
    const message = createBaseCCredentialsSteamGuardPhishingReportRequest();
    message.paramString = object.paramString ?? "";
    message.ipaddressActual = object.ipaddressActual ?? "";
    return message;
  },
};

function createBaseCCredentialsSteamGuardPhishingReportResponse(): CCredentialsSteamGuardPhishingReportResponse {
  return {
    ipaddressLoginattempt: "",
    countrynameLoginattempt: "",
    statenameLoginattempt: "",
    citynameLoginattempt: "",
    ipaddressActual: "",
    countrynameActual: "",
    statenameActual: "",
    citynameActual: "",
    steamguardCode: "",
  };
}

export const CCredentialsSteamGuardPhishingReportResponse = {
  encode(message: CCredentialsSteamGuardPhishingReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipaddressLoginattempt !== "") {
      writer.uint32(10).string(message.ipaddressLoginattempt);
    }
    if (message.countrynameLoginattempt !== "") {
      writer.uint32(18).string(message.countrynameLoginattempt);
    }
    if (message.statenameLoginattempt !== "") {
      writer.uint32(26).string(message.statenameLoginattempt);
    }
    if (message.citynameLoginattempt !== "") {
      writer.uint32(34).string(message.citynameLoginattempt);
    }
    if (message.ipaddressActual !== "") {
      writer.uint32(42).string(message.ipaddressActual);
    }
    if (message.countrynameActual !== "") {
      writer.uint32(50).string(message.countrynameActual);
    }
    if (message.statenameActual !== "") {
      writer.uint32(58).string(message.statenameActual);
    }
    if (message.citynameActual !== "") {
      writer.uint32(66).string(message.citynameActual);
    }
    if (message.steamguardCode !== "") {
      writer.uint32(74).string(message.steamguardCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsSteamGuardPhishingReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsSteamGuardPhishingReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipaddressLoginattempt = reader.string();
          break;
        case 2:
          message.countrynameLoginattempt = reader.string();
          break;
        case 3:
          message.statenameLoginattempt = reader.string();
          break;
        case 4:
          message.citynameLoginattempt = reader.string();
          break;
        case 5:
          message.ipaddressActual = reader.string();
          break;
        case 6:
          message.countrynameActual = reader.string();
          break;
        case 7:
          message.statenameActual = reader.string();
          break;
        case 8:
          message.citynameActual = reader.string();
          break;
        case 9:
          message.steamguardCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsSteamGuardPhishingReportResponse {
    return {
      ipaddressLoginattempt: isSet(object.ipaddressLoginattempt) ? String(object.ipaddressLoginattempt) : "",
      countrynameLoginattempt: isSet(object.countrynameLoginattempt) ? String(object.countrynameLoginattempt) : "",
      statenameLoginattempt: isSet(object.statenameLoginattempt) ? String(object.statenameLoginattempt) : "",
      citynameLoginattempt: isSet(object.citynameLoginattempt) ? String(object.citynameLoginattempt) : "",
      ipaddressActual: isSet(object.ipaddressActual) ? String(object.ipaddressActual) : "",
      countrynameActual: isSet(object.countrynameActual) ? String(object.countrynameActual) : "",
      statenameActual: isSet(object.statenameActual) ? String(object.statenameActual) : "",
      citynameActual: isSet(object.citynameActual) ? String(object.citynameActual) : "",
      steamguardCode: isSet(object.steamguardCode) ? String(object.steamguardCode) : "",
    };
  },

  toJSON(message: CCredentialsSteamGuardPhishingReportResponse): unknown {
    const obj: any = {};
    message.ipaddressLoginattempt !== undefined && (obj.ipaddressLoginattempt = message.ipaddressLoginattempt);
    message.countrynameLoginattempt !== undefined && (obj.countrynameLoginattempt = message.countrynameLoginattempt);
    message.statenameLoginattempt !== undefined && (obj.statenameLoginattempt = message.statenameLoginattempt);
    message.citynameLoginattempt !== undefined && (obj.citynameLoginattempt = message.citynameLoginattempt);
    message.ipaddressActual !== undefined && (obj.ipaddressActual = message.ipaddressActual);
    message.countrynameActual !== undefined && (obj.countrynameActual = message.countrynameActual);
    message.statenameActual !== undefined && (obj.statenameActual = message.statenameActual);
    message.citynameActual !== undefined && (obj.citynameActual = message.citynameActual);
    message.steamguardCode !== undefined && (obj.steamguardCode = message.steamguardCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsSteamGuardPhishingReportResponse>, I>>(
    base?: I,
  ): CCredentialsSteamGuardPhishingReportResponse {
    return CCredentialsSteamGuardPhishingReportResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsSteamGuardPhishingReportResponse>, I>>(
    object: I,
  ): CCredentialsSteamGuardPhishingReportResponse {
    const message = createBaseCCredentialsSteamGuardPhishingReportResponse();
    message.ipaddressLoginattempt = object.ipaddressLoginattempt ?? "";
    message.countrynameLoginattempt = object.countrynameLoginattempt ?? "";
    message.statenameLoginattempt = object.statenameLoginattempt ?? "";
    message.citynameLoginattempt = object.citynameLoginattempt ?? "";
    message.ipaddressActual = object.ipaddressActual ?? "";
    message.countrynameActual = object.countrynameActual ?? "";
    message.statenameActual = object.statenameActual ?? "";
    message.citynameActual = object.citynameActual ?? "";
    message.steamguardCode = object.steamguardCode ?? "";
    return message;
  },
};

function createBaseCCredentialsLastCredentialChangeTimeRequest(): CCredentialsLastCredentialChangeTimeRequest {
  return { userChangesOnly: false };
}

export const CCredentialsLastCredentialChangeTimeRequest = {
  encode(message: CCredentialsLastCredentialChangeTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userChangesOnly === true) {
      writer.uint32(8).bool(message.userChangesOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsLastCredentialChangeTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsLastCredentialChangeTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userChangesOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsLastCredentialChangeTimeRequest {
    return { userChangesOnly: isSet(object.userChangesOnly) ? Boolean(object.userChangesOnly) : false };
  },

  toJSON(message: CCredentialsLastCredentialChangeTimeRequest): unknown {
    const obj: any = {};
    message.userChangesOnly !== undefined && (obj.userChangesOnly = message.userChangesOnly);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsLastCredentialChangeTimeRequest>, I>>(
    base?: I,
  ): CCredentialsLastCredentialChangeTimeRequest {
    return CCredentialsLastCredentialChangeTimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsLastCredentialChangeTimeRequest>, I>>(
    object: I,
  ): CCredentialsLastCredentialChangeTimeRequest {
    const message = createBaseCCredentialsLastCredentialChangeTimeRequest();
    message.userChangesOnly = object.userChangesOnly ?? false;
    return message;
  },
};

function createBaseCCredentialsLastCredentialChangeTimeResponse(): CCredentialsLastCredentialChangeTimeResponse {
  return { timestampLastPasswordChange: 0, timestampLastEmailChange: 0, timestampLastPasswordReset: 0 };
}

export const CCredentialsLastCredentialChangeTimeResponse = {
  encode(message: CCredentialsLastCredentialChangeTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestampLastPasswordChange !== 0) {
      writer.uint32(13).fixed32(message.timestampLastPasswordChange);
    }
    if (message.timestampLastEmailChange !== 0) {
      writer.uint32(21).fixed32(message.timestampLastEmailChange);
    }
    if (message.timestampLastPasswordReset !== 0) {
      writer.uint32(29).fixed32(message.timestampLastPasswordReset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsLastCredentialChangeTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsLastCredentialChangeTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestampLastPasswordChange = reader.fixed32();
          break;
        case 2:
          message.timestampLastEmailChange = reader.fixed32();
          break;
        case 3:
          message.timestampLastPasswordReset = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsLastCredentialChangeTimeResponse {
    return {
      timestampLastPasswordChange: isSet(object.timestampLastPasswordChange)
        ? Number(object.timestampLastPasswordChange)
        : 0,
      timestampLastEmailChange: isSet(object.timestampLastEmailChange) ? Number(object.timestampLastEmailChange) : 0,
      timestampLastPasswordReset: isSet(object.timestampLastPasswordReset)
        ? Number(object.timestampLastPasswordReset)
        : 0,
    };
  },

  toJSON(message: CCredentialsLastCredentialChangeTimeResponse): unknown {
    const obj: any = {};
    message.timestampLastPasswordChange !== undefined &&
      (obj.timestampLastPasswordChange = Math.round(message.timestampLastPasswordChange));
    message.timestampLastEmailChange !== undefined &&
      (obj.timestampLastEmailChange = Math.round(message.timestampLastEmailChange));
    message.timestampLastPasswordReset !== undefined &&
      (obj.timestampLastPasswordReset = Math.round(message.timestampLastPasswordReset));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsLastCredentialChangeTimeResponse>, I>>(
    base?: I,
  ): CCredentialsLastCredentialChangeTimeResponse {
    return CCredentialsLastCredentialChangeTimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsLastCredentialChangeTimeResponse>, I>>(
    object: I,
  ): CCredentialsLastCredentialChangeTimeResponse {
    const message = createBaseCCredentialsLastCredentialChangeTimeResponse();
    message.timestampLastPasswordChange = object.timestampLastPasswordChange ?? 0;
    message.timestampLastEmailChange = object.timestampLastEmailChange ?? 0;
    message.timestampLastPasswordReset = object.timestampLastPasswordReset ?? 0;
    return message;
  },
};

function createBaseCCredentialsGetAccountAuthSecretRequest(): CCredentialsGetAccountAuthSecretRequest {
  return {};
}

export const CCredentialsGetAccountAuthSecretRequest = {
  encode(_: CCredentialsGetAccountAuthSecretRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsGetAccountAuthSecretRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsGetAccountAuthSecretRequest();
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

  fromJSON(_: any): CCredentialsGetAccountAuthSecretRequest {
    return {};
  },

  toJSON(_: CCredentialsGetAccountAuthSecretRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsGetAccountAuthSecretRequest>, I>>(
    base?: I,
  ): CCredentialsGetAccountAuthSecretRequest {
    return CCredentialsGetAccountAuthSecretRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsGetAccountAuthSecretRequest>, I>>(
    _: I,
  ): CCredentialsGetAccountAuthSecretRequest {
    const message = createBaseCCredentialsGetAccountAuthSecretRequest();
    return message;
  },
};

function createBaseCCredentialsGetAccountAuthSecretResponse(): CCredentialsGetAccountAuthSecretResponse {
  return { secretId: 0, secret: Buffer.alloc(0) };
}

export const CCredentialsGetAccountAuthSecretResponse = {
  encode(message: CCredentialsGetAccountAuthSecretResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secretId !== 0) {
      writer.uint32(8).int32(message.secretId);
    }
    if (message.secret.length !== 0) {
      writer.uint32(18).bytes(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCredentialsGetAccountAuthSecretResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCredentialsGetAccountAuthSecretResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secretId = reader.int32();
          break;
        case 2:
          message.secret = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCredentialsGetAccountAuthSecretResponse {
    return {
      secretId: isSet(object.secretId) ? Number(object.secretId) : 0,
      secret: isSet(object.secret) ? Buffer.from(bytesFromBase64(object.secret)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CCredentialsGetAccountAuthSecretResponse): unknown {
    const obj: any = {};
    message.secretId !== undefined && (obj.secretId = Math.round(message.secretId));
    message.secret !== undefined &&
      (obj.secret = base64FromBytes(message.secret !== undefined ? message.secret : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CCredentialsGetAccountAuthSecretResponse>, I>>(
    base?: I,
  ): CCredentialsGetAccountAuthSecretResponse {
    return CCredentialsGetAccountAuthSecretResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCredentialsGetAccountAuthSecretResponse>, I>>(
    object: I,
  ): CCredentialsGetAccountAuthSecretResponse {
    const message = createBaseCCredentialsGetAccountAuthSecretResponse();
    message.secretId = object.secretId ?? 0;
    message.secret = object.secret ?? Buffer.alloc(0);
    return message;
  },
};

export interface Credentials {
  TestAvailablePassword(
    request: CCredentialsTestAvailablePasswordRequest,
  ): Promise<CCredentialsTestAvailablePasswordResponse>;
  GetSteamGuardDetails(
    request: CCredentialsGetSteamGuardDetailsRequest,
  ): Promise<CCredentialsGetSteamGuardDetailsResponse>;
  ValidateEmailAddress(
    request: CCredentialsValidateEmailAddressRequest,
  ): Promise<CCredentialsValidateEmailAddressResponse>;
  SteamGuardPhishingReport(
    request: CCredentialsSteamGuardPhishingReportRequest,
  ): Promise<CCredentialsSteamGuardPhishingReportResponse>;
  GetCredentialChangeTimeDetails(
    request: CCredentialsLastCredentialChangeTimeRequest,
  ): Promise<CCredentialsLastCredentialChangeTimeResponse>;
  GetAccountAuthSecret(
    request: CCredentialsGetAccountAuthSecretRequest,
  ): Promise<CCredentialsGetAccountAuthSecretResponse>;
}

export class CredentialsClientImpl implements Credentials {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Credentials";
    this.rpc = rpc;
    this.TestAvailablePassword = this.TestAvailablePassword.bind(this);
    this.GetSteamGuardDetails = this.GetSteamGuardDetails.bind(this);
    this.ValidateEmailAddress = this.ValidateEmailAddress.bind(this);
    this.SteamGuardPhishingReport = this.SteamGuardPhishingReport.bind(this);
    this.GetCredentialChangeTimeDetails = this.GetCredentialChangeTimeDetails.bind(this);
    this.GetAccountAuthSecret = this.GetAccountAuthSecret.bind(this);
  }
  TestAvailablePassword(
    request: CCredentialsTestAvailablePasswordRequest,
  ): Promise<CCredentialsTestAvailablePasswordResponse> {
    const data = CCredentialsTestAvailablePasswordRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "TestAvailablePassword", data);
    return promise.then((data) => CCredentialsTestAvailablePasswordResponse.decode(new _m0.Reader(data)));
  }

  GetSteamGuardDetails(
    request: CCredentialsGetSteamGuardDetailsRequest,
  ): Promise<CCredentialsGetSteamGuardDetailsResponse> {
    const data = CCredentialsGetSteamGuardDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSteamGuardDetails", data);
    return promise.then((data) => CCredentialsGetSteamGuardDetailsResponse.decode(new _m0.Reader(data)));
  }

  ValidateEmailAddress(
    request: CCredentialsValidateEmailAddressRequest,
  ): Promise<CCredentialsValidateEmailAddressResponse> {
    const data = CCredentialsValidateEmailAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateEmailAddress", data);
    return promise.then((data) => CCredentialsValidateEmailAddressResponse.decode(new _m0.Reader(data)));
  }

  SteamGuardPhishingReport(
    request: CCredentialsSteamGuardPhishingReportRequest,
  ): Promise<CCredentialsSteamGuardPhishingReportResponse> {
    const data = CCredentialsSteamGuardPhishingReportRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SteamGuardPhishingReport", data);
    return promise.then((data) => CCredentialsSteamGuardPhishingReportResponse.decode(new _m0.Reader(data)));
  }

  GetCredentialChangeTimeDetails(
    request: CCredentialsLastCredentialChangeTimeRequest,
  ): Promise<CCredentialsLastCredentialChangeTimeResponse> {
    const data = CCredentialsLastCredentialChangeTimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCredentialChangeTimeDetails", data);
    return promise.then((data) => CCredentialsLastCredentialChangeTimeResponse.decode(new _m0.Reader(data)));
  }

  GetAccountAuthSecret(
    request: CCredentialsGetAccountAuthSecretRequest,
  ): Promise<CCredentialsGetAccountAuthSecretResponse> {
    const data = CCredentialsGetAccountAuthSecretRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAccountAuthSecret", data);
    return promise.then((data) => CCredentialsGetAccountAuthSecretResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
