/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CTwoFactorStatusRequest {
  steamid: number;
}

export interface CTwoFactorStatusResponse {
  state: number;
  inactivationReason: number;
  authenticatorType: number;
  authenticatorAllowed: boolean;
  steamguardScheme: number;
  tokenGid: string;
  emailValidated: boolean;
  deviceIdentifier: string;
  timeCreated: number;
  revocationAttemptsRemaining: number;
  classifiedAgent: string;
  allowExternalAuthenticator: boolean;
  timeTransferred: number;
  version: number;
}

export interface CTwoFactorAddAuthenticatorRequest {
  steamid: number;
  authenticatorTime: number;
  serialNumber: number;
  authenticatorType: number;
  deviceIdentifier: string;
  smsPhoneId: string;
  httpHeaders: string[];
  version: number;
}

export interface CTwoFactorAddAuthenticatorResponse {
  sharedSecret: Buffer;
  serialNumber: number;
  revocationCode: string;
  uri: string;
  serverTime: number;
  accountName: string;
  tokenGid: string;
  identitySecret: Buffer;
  secret1: Buffer;
  status: number;
  phoneNumberHint: string;
}

export interface CTwoFactorSendEmailRequest {
  steamid: number;
  emailType: number;
  includeActivationCode: boolean;
}

export interface CTwoFactorSendEmailResponse {
}

export interface CTwoFactorFinalizeAddAuthenticatorRequest {
  steamid: number;
  authenticatorCode: string;
  authenticatorTime: number;
  activationCode: string;
  httpHeaders: string[];
  validateSmsCode: boolean;
}

export interface CTwoFactorFinalizeAddAuthenticatorResponse {
  success: boolean;
  wantMore: boolean;
  serverTime: number;
  status: number;
}

export interface CTwoFactorUpdateTokenVersionRequest {
  steamid: number;
  version: number;
  signature: Buffer;
}

export interface CTwoFactorUpdateTokenVersionResponse {
}

export interface CTwoFactorRemoveAuthenticatorRequest {
  revocationCode: string;
  revocationReason: number;
  steamguardScheme: number;
  removeAllSteamguardCookies: boolean;
}

export interface CTwoFactorRemoveAuthenticatorResponse {
  success: boolean;
  serverTime: number;
  revocationAttemptsRemaining: number;
}

export interface CTwoFactorCreateEmergencyCodesRequest {
  code: string;
}

export interface CTwoFactorCreateEmergencyCodesResponse {
  codes: string[];
}

export interface CTwoFactorDestroyEmergencyCodesRequest {
  steamid: number;
}

export interface CTwoFactorDestroyEmergencyCodesResponse {
}

export interface CTwoFactorValidateTokenRequest {
  code: string;
}

export interface CTwoFactorValidateTokenResponse {
  valid: boolean;
}

export interface CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
}

export interface CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
  success: boolean;
}

export interface CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
  smsCode: string;
  generateNewToken: boolean;
  version: number;
}

export interface CRemoveAuthenticatorViaChallengeContinueReplacementToken {
  sharedSecret: Buffer;
  serialNumber: number;
  revocationCode: string;
  uri: string;
  serverTime: number;
  accountName: string;
  tokenGid: string;
  identitySecret: Buffer;
  secret1: Buffer;
  status: number;
  steamguardScheme: number;
  steamid: number;
}

export interface CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
  success: boolean;
  replacementToken: CRemoveAuthenticatorViaChallengeContinueReplacementToken | undefined;
}

function createBaseCTwoFactorStatusRequest(): CTwoFactorStatusRequest {
  return { steamid: 0 };
}

export const CTwoFactorStatusRequest = {
  encode(message: CTwoFactorStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorStatusRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CTwoFactorStatusRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorStatusRequest>, I>>(base?: I): CTwoFactorStatusRequest {
    return CTwoFactorStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorStatusRequest>, I>>(object: I): CTwoFactorStatusRequest {
    const message = createBaseCTwoFactorStatusRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCTwoFactorStatusResponse(): CTwoFactorStatusResponse {
  return {
    state: 0,
    inactivationReason: 0,
    authenticatorType: 0,
    authenticatorAllowed: false,
    steamguardScheme: 0,
    tokenGid: "",
    emailValidated: false,
    deviceIdentifier: "",
    timeCreated: 0,
    revocationAttemptsRemaining: 0,
    classifiedAgent: "",
    allowExternalAuthenticator: false,
    timeTransferred: 0,
    version: 0,
  };
}

export const CTwoFactorStatusResponse = {
  encode(message: CTwoFactorStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).uint32(message.state);
    }
    if (message.inactivationReason !== 0) {
      writer.uint32(16).uint32(message.inactivationReason);
    }
    if (message.authenticatorType !== 0) {
      writer.uint32(24).uint32(message.authenticatorType);
    }
    if (message.authenticatorAllowed === true) {
      writer.uint32(32).bool(message.authenticatorAllowed);
    }
    if (message.steamguardScheme !== 0) {
      writer.uint32(40).uint32(message.steamguardScheme);
    }
    if (message.tokenGid !== "") {
      writer.uint32(50).string(message.tokenGid);
    }
    if (message.emailValidated === true) {
      writer.uint32(56).bool(message.emailValidated);
    }
    if (message.deviceIdentifier !== "") {
      writer.uint32(66).string(message.deviceIdentifier);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(72).uint32(message.timeCreated);
    }
    if (message.revocationAttemptsRemaining !== 0) {
      writer.uint32(80).uint32(message.revocationAttemptsRemaining);
    }
    if (message.classifiedAgent !== "") {
      writer.uint32(90).string(message.classifiedAgent);
    }
    if (message.allowExternalAuthenticator === true) {
      writer.uint32(96).bool(message.allowExternalAuthenticator);
    }
    if (message.timeTransferred !== 0) {
      writer.uint32(104).uint32(message.timeTransferred);
    }
    if (message.version !== 0) {
      writer.uint32(112).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.uint32();
          break;
        case 2:
          message.inactivationReason = reader.uint32();
          break;
        case 3:
          message.authenticatorType = reader.uint32();
          break;
        case 4:
          message.authenticatorAllowed = reader.bool();
          break;
        case 5:
          message.steamguardScheme = reader.uint32();
          break;
        case 6:
          message.tokenGid = reader.string();
          break;
        case 7:
          message.emailValidated = reader.bool();
          break;
        case 8:
          message.deviceIdentifier = reader.string();
          break;
        case 9:
          message.timeCreated = reader.uint32();
          break;
        case 10:
          message.revocationAttemptsRemaining = reader.uint32();
          break;
        case 11:
          message.classifiedAgent = reader.string();
          break;
        case 12:
          message.allowExternalAuthenticator = reader.bool();
          break;
        case 13:
          message.timeTransferred = reader.uint32();
          break;
        case 14:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorStatusResponse {
    return {
      state: isSet(object.state) ? Number(object.state) : 0,
      inactivationReason: isSet(object.inactivationReason) ? Number(object.inactivationReason) : 0,
      authenticatorType: isSet(object.authenticatorType) ? Number(object.authenticatorType) : 0,
      authenticatorAllowed: isSet(object.authenticatorAllowed) ? Boolean(object.authenticatorAllowed) : false,
      steamguardScheme: isSet(object.steamguardScheme) ? Number(object.steamguardScheme) : 0,
      tokenGid: isSet(object.tokenGid) ? String(object.tokenGid) : "",
      emailValidated: isSet(object.emailValidated) ? Boolean(object.emailValidated) : false,
      deviceIdentifier: isSet(object.deviceIdentifier) ? String(object.deviceIdentifier) : "",
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      revocationAttemptsRemaining: isSet(object.revocationAttemptsRemaining)
        ? Number(object.revocationAttemptsRemaining)
        : 0,
      classifiedAgent: isSet(object.classifiedAgent) ? String(object.classifiedAgent) : "",
      allowExternalAuthenticator: isSet(object.allowExternalAuthenticator)
        ? Boolean(object.allowExternalAuthenticator)
        : false,
      timeTransferred: isSet(object.timeTransferred) ? Number(object.timeTransferred) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CTwoFactorStatusResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = Math.round(message.state));
    message.inactivationReason !== undefined && (obj.inactivationReason = Math.round(message.inactivationReason));
    message.authenticatorType !== undefined && (obj.authenticatorType = Math.round(message.authenticatorType));
    message.authenticatorAllowed !== undefined && (obj.authenticatorAllowed = message.authenticatorAllowed);
    message.steamguardScheme !== undefined && (obj.steamguardScheme = Math.round(message.steamguardScheme));
    message.tokenGid !== undefined && (obj.tokenGid = message.tokenGid);
    message.emailValidated !== undefined && (obj.emailValidated = message.emailValidated);
    message.deviceIdentifier !== undefined && (obj.deviceIdentifier = message.deviceIdentifier);
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.revocationAttemptsRemaining !== undefined &&
      (obj.revocationAttemptsRemaining = Math.round(message.revocationAttemptsRemaining));
    message.classifiedAgent !== undefined && (obj.classifiedAgent = message.classifiedAgent);
    message.allowExternalAuthenticator !== undefined &&
      (obj.allowExternalAuthenticator = message.allowExternalAuthenticator);
    message.timeTransferred !== undefined && (obj.timeTransferred = Math.round(message.timeTransferred));
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorStatusResponse>, I>>(base?: I): CTwoFactorStatusResponse {
    return CTwoFactorStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorStatusResponse>, I>>(object: I): CTwoFactorStatusResponse {
    const message = createBaseCTwoFactorStatusResponse();
    message.state = object.state ?? 0;
    message.inactivationReason = object.inactivationReason ?? 0;
    message.authenticatorType = object.authenticatorType ?? 0;
    message.authenticatorAllowed = object.authenticatorAllowed ?? false;
    message.steamguardScheme = object.steamguardScheme ?? 0;
    message.tokenGid = object.tokenGid ?? "";
    message.emailValidated = object.emailValidated ?? false;
    message.deviceIdentifier = object.deviceIdentifier ?? "";
    message.timeCreated = object.timeCreated ?? 0;
    message.revocationAttemptsRemaining = object.revocationAttemptsRemaining ?? 0;
    message.classifiedAgent = object.classifiedAgent ?? "";
    message.allowExternalAuthenticator = object.allowExternalAuthenticator ?? false;
    message.timeTransferred = object.timeTransferred ?? 0;
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCTwoFactorAddAuthenticatorRequest(): CTwoFactorAddAuthenticatorRequest {
  return {
    steamid: 0,
    authenticatorTime: 0,
    serialNumber: 0,
    authenticatorType: 0,
    deviceIdentifier: "",
    smsPhoneId: "",
    httpHeaders: [],
    version: 0,
  };
}

export const CTwoFactorAddAuthenticatorRequest = {
  encode(message: CTwoFactorAddAuthenticatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authenticatorTime !== 0) {
      writer.uint32(16).uint64(message.authenticatorTime);
    }
    if (message.serialNumber !== 0) {
      writer.uint32(25).fixed64(message.serialNumber);
    }
    if (message.authenticatorType !== 0) {
      writer.uint32(32).uint32(message.authenticatorType);
    }
    if (message.deviceIdentifier !== "") {
      writer.uint32(42).string(message.deviceIdentifier);
    }
    if (message.smsPhoneId !== "") {
      writer.uint32(50).string(message.smsPhoneId);
    }
    for (const v of message.httpHeaders) {
      writer.uint32(58).string(v!);
    }
    if (message.version !== 0) {
      writer.uint32(64).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorAddAuthenticatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorAddAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.authenticatorTime = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.serialNumber = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.authenticatorType = reader.uint32();
          break;
        case 5:
          message.deviceIdentifier = reader.string();
          break;
        case 6:
          message.smsPhoneId = reader.string();
          break;
        case 7:
          message.httpHeaders.push(reader.string());
          break;
        case 8:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorAddAuthenticatorRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      authenticatorTime: isSet(object.authenticatorTime) ? Number(object.authenticatorTime) : 0,
      serialNumber: isSet(object.serialNumber) ? Number(object.serialNumber) : 0,
      authenticatorType: isSet(object.authenticatorType) ? Number(object.authenticatorType) : 0,
      deviceIdentifier: isSet(object.deviceIdentifier) ? String(object.deviceIdentifier) : "",
      smsPhoneId: isSet(object.smsPhoneId) ? String(object.smsPhoneId) : "",
      httpHeaders: Array.isArray(object?.httpHeaders) ? object.httpHeaders.map((e: any) => String(e)) : [],
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CTwoFactorAddAuthenticatorRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.authenticatorTime !== undefined && (obj.authenticatorTime = Math.round(message.authenticatorTime));
    message.serialNumber !== undefined && (obj.serialNumber = Math.round(message.serialNumber));
    message.authenticatorType !== undefined && (obj.authenticatorType = Math.round(message.authenticatorType));
    message.deviceIdentifier !== undefined && (obj.deviceIdentifier = message.deviceIdentifier);
    message.smsPhoneId !== undefined && (obj.smsPhoneId = message.smsPhoneId);
    if (message.httpHeaders) {
      obj.httpHeaders = message.httpHeaders.map((e) => e);
    } else {
      obj.httpHeaders = [];
    }
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorAddAuthenticatorRequest>, I>>(
    base?: I,
  ): CTwoFactorAddAuthenticatorRequest {
    return CTwoFactorAddAuthenticatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorAddAuthenticatorRequest>, I>>(
    object: I,
  ): CTwoFactorAddAuthenticatorRequest {
    const message = createBaseCTwoFactorAddAuthenticatorRequest();
    message.steamid = object.steamid ?? 0;
    message.authenticatorTime = object.authenticatorTime ?? 0;
    message.serialNumber = object.serialNumber ?? 0;
    message.authenticatorType = object.authenticatorType ?? 0;
    message.deviceIdentifier = object.deviceIdentifier ?? "";
    message.smsPhoneId = object.smsPhoneId ?? "";
    message.httpHeaders = object.httpHeaders?.map((e) => e) || [];
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCTwoFactorAddAuthenticatorResponse(): CTwoFactorAddAuthenticatorResponse {
  return {
    sharedSecret: Buffer.alloc(0),
    serialNumber: 0,
    revocationCode: "",
    uri: "",
    serverTime: 0,
    accountName: "",
    tokenGid: "",
    identitySecret: Buffer.alloc(0),
    secret1: Buffer.alloc(0),
    status: 0,
    phoneNumberHint: "",
  };
}

export const CTwoFactorAddAuthenticatorResponse = {
  encode(message: CTwoFactorAddAuthenticatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sharedSecret.length !== 0) {
      writer.uint32(10).bytes(message.sharedSecret);
    }
    if (message.serialNumber !== 0) {
      writer.uint32(17).fixed64(message.serialNumber);
    }
    if (message.revocationCode !== "") {
      writer.uint32(26).string(message.revocationCode);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.serverTime !== 0) {
      writer.uint32(40).uint64(message.serverTime);
    }
    if (message.accountName !== "") {
      writer.uint32(50).string(message.accountName);
    }
    if (message.tokenGid !== "") {
      writer.uint32(58).string(message.tokenGid);
    }
    if (message.identitySecret.length !== 0) {
      writer.uint32(66).bytes(message.identitySecret);
    }
    if (message.secret1.length !== 0) {
      writer.uint32(74).bytes(message.secret1);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.phoneNumberHint !== "") {
      writer.uint32(90).string(message.phoneNumberHint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorAddAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorAddAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sharedSecret = reader.bytes() as Buffer;
          break;
        case 2:
          message.serialNumber = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.revocationCode = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.serverTime = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.accountName = reader.string();
          break;
        case 7:
          message.tokenGid = reader.string();
          break;
        case 8:
          message.identitySecret = reader.bytes() as Buffer;
          break;
        case 9:
          message.secret1 = reader.bytes() as Buffer;
          break;
        case 10:
          message.status = reader.int32();
          break;
        case 11:
          message.phoneNumberHint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorAddAuthenticatorResponse {
    return {
      sharedSecret: isSet(object.sharedSecret) ? Buffer.from(bytesFromBase64(object.sharedSecret)) : Buffer.alloc(0),
      serialNumber: isSet(object.serialNumber) ? Number(object.serialNumber) : 0,
      revocationCode: isSet(object.revocationCode) ? String(object.revocationCode) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      tokenGid: isSet(object.tokenGid) ? String(object.tokenGid) : "",
      identitySecret: isSet(object.identitySecret)
        ? Buffer.from(bytesFromBase64(object.identitySecret))
        : Buffer.alloc(0),
      secret1: isSet(object.secret1) ? Buffer.from(bytesFromBase64(object.secret1)) : Buffer.alloc(0),
      status: isSet(object.status) ? Number(object.status) : 0,
      phoneNumberHint: isSet(object.phoneNumberHint) ? String(object.phoneNumberHint) : "",
    };
  },

  toJSON(message: CTwoFactorAddAuthenticatorResponse): unknown {
    const obj: any = {};
    message.sharedSecret !== undefined &&
      (obj.sharedSecret = base64FromBytes(message.sharedSecret !== undefined ? message.sharedSecret : Buffer.alloc(0)));
    message.serialNumber !== undefined && (obj.serialNumber = Math.round(message.serialNumber));
    message.revocationCode !== undefined && (obj.revocationCode = message.revocationCode);
    message.uri !== undefined && (obj.uri = message.uri);
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.tokenGid !== undefined && (obj.tokenGid = message.tokenGid);
    message.identitySecret !== undefined &&
      (obj.identitySecret = base64FromBytes(
        message.identitySecret !== undefined ? message.identitySecret : Buffer.alloc(0),
      ));
    message.secret1 !== undefined &&
      (obj.secret1 = base64FromBytes(message.secret1 !== undefined ? message.secret1 : Buffer.alloc(0)));
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.phoneNumberHint !== undefined && (obj.phoneNumberHint = message.phoneNumberHint);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorAddAuthenticatorResponse>, I>>(
    base?: I,
  ): CTwoFactorAddAuthenticatorResponse {
    return CTwoFactorAddAuthenticatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorAddAuthenticatorResponse>, I>>(
    object: I,
  ): CTwoFactorAddAuthenticatorResponse {
    const message = createBaseCTwoFactorAddAuthenticatorResponse();
    message.sharedSecret = object.sharedSecret ?? Buffer.alloc(0);
    message.serialNumber = object.serialNumber ?? 0;
    message.revocationCode = object.revocationCode ?? "";
    message.uri = object.uri ?? "";
    message.serverTime = object.serverTime ?? 0;
    message.accountName = object.accountName ?? "";
    message.tokenGid = object.tokenGid ?? "";
    message.identitySecret = object.identitySecret ?? Buffer.alloc(0);
    message.secret1 = object.secret1 ?? Buffer.alloc(0);
    message.status = object.status ?? 0;
    message.phoneNumberHint = object.phoneNumberHint ?? "";
    return message;
  },
};

function createBaseCTwoFactorSendEmailRequest(): CTwoFactorSendEmailRequest {
  return { steamid: 0, emailType: 0, includeActivationCode: false };
}

export const CTwoFactorSendEmailRequest = {
  encode(message: CTwoFactorSendEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.emailType !== 0) {
      writer.uint32(16).uint32(message.emailType);
    }
    if (message.includeActivationCode === true) {
      writer.uint32(24).bool(message.includeActivationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorSendEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorSendEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.emailType = reader.uint32();
          break;
        case 3:
          message.includeActivationCode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorSendEmailRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      emailType: isSet(object.emailType) ? Number(object.emailType) : 0,
      includeActivationCode: isSet(object.includeActivationCode) ? Boolean(object.includeActivationCode) : false,
    };
  },

  toJSON(message: CTwoFactorSendEmailRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.emailType !== undefined && (obj.emailType = Math.round(message.emailType));
    message.includeActivationCode !== undefined && (obj.includeActivationCode = message.includeActivationCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorSendEmailRequest>, I>>(base?: I): CTwoFactorSendEmailRequest {
    return CTwoFactorSendEmailRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorSendEmailRequest>, I>>(object: I): CTwoFactorSendEmailRequest {
    const message = createBaseCTwoFactorSendEmailRequest();
    message.steamid = object.steamid ?? 0;
    message.emailType = object.emailType ?? 0;
    message.includeActivationCode = object.includeActivationCode ?? false;
    return message;
  },
};

function createBaseCTwoFactorSendEmailResponse(): CTwoFactorSendEmailResponse {
  return {};
}

export const CTwoFactorSendEmailResponse = {
  encode(_: CTwoFactorSendEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorSendEmailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorSendEmailResponse();
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

  fromJSON(_: any): CTwoFactorSendEmailResponse {
    return {};
  },

  toJSON(_: CTwoFactorSendEmailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorSendEmailResponse>, I>>(base?: I): CTwoFactorSendEmailResponse {
    return CTwoFactorSendEmailResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorSendEmailResponse>, I>>(_: I): CTwoFactorSendEmailResponse {
    const message = createBaseCTwoFactorSendEmailResponse();
    return message;
  },
};

function createBaseCTwoFactorFinalizeAddAuthenticatorRequest(): CTwoFactorFinalizeAddAuthenticatorRequest {
  return {
    steamid: 0,
    authenticatorCode: "",
    authenticatorTime: 0,
    activationCode: "",
    httpHeaders: [],
    validateSmsCode: false,
  };
}

export const CTwoFactorFinalizeAddAuthenticatorRequest = {
  encode(message: CTwoFactorFinalizeAddAuthenticatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.authenticatorCode !== "") {
      writer.uint32(18).string(message.authenticatorCode);
    }
    if (message.authenticatorTime !== 0) {
      writer.uint32(24).uint64(message.authenticatorTime);
    }
    if (message.activationCode !== "") {
      writer.uint32(34).string(message.activationCode);
    }
    for (const v of message.httpHeaders) {
      writer.uint32(42).string(v!);
    }
    if (message.validateSmsCode === true) {
      writer.uint32(48).bool(message.validateSmsCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorFinalizeAddAuthenticatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorFinalizeAddAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.authenticatorCode = reader.string();
          break;
        case 3:
          message.authenticatorTime = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.activationCode = reader.string();
          break;
        case 5:
          message.httpHeaders.push(reader.string());
          break;
        case 6:
          message.validateSmsCode = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorFinalizeAddAuthenticatorRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      authenticatorCode: isSet(object.authenticatorCode) ? String(object.authenticatorCode) : "",
      authenticatorTime: isSet(object.authenticatorTime) ? Number(object.authenticatorTime) : 0,
      activationCode: isSet(object.activationCode) ? String(object.activationCode) : "",
      httpHeaders: Array.isArray(object?.httpHeaders) ? object.httpHeaders.map((e: any) => String(e)) : [],
      validateSmsCode: isSet(object.validateSmsCode) ? Boolean(object.validateSmsCode) : false,
    };
  },

  toJSON(message: CTwoFactorFinalizeAddAuthenticatorRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.authenticatorCode !== undefined && (obj.authenticatorCode = message.authenticatorCode);
    message.authenticatorTime !== undefined && (obj.authenticatorTime = Math.round(message.authenticatorTime));
    message.activationCode !== undefined && (obj.activationCode = message.activationCode);
    if (message.httpHeaders) {
      obj.httpHeaders = message.httpHeaders.map((e) => e);
    } else {
      obj.httpHeaders = [];
    }
    message.validateSmsCode !== undefined && (obj.validateSmsCode = message.validateSmsCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorFinalizeAddAuthenticatorRequest>, I>>(
    base?: I,
  ): CTwoFactorFinalizeAddAuthenticatorRequest {
    return CTwoFactorFinalizeAddAuthenticatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorFinalizeAddAuthenticatorRequest>, I>>(
    object: I,
  ): CTwoFactorFinalizeAddAuthenticatorRequest {
    const message = createBaseCTwoFactorFinalizeAddAuthenticatorRequest();
    message.steamid = object.steamid ?? 0;
    message.authenticatorCode = object.authenticatorCode ?? "";
    message.authenticatorTime = object.authenticatorTime ?? 0;
    message.activationCode = object.activationCode ?? "";
    message.httpHeaders = object.httpHeaders?.map((e) => e) || [];
    message.validateSmsCode = object.validateSmsCode ?? false;
    return message;
  },
};

function createBaseCTwoFactorFinalizeAddAuthenticatorResponse(): CTwoFactorFinalizeAddAuthenticatorResponse {
  return { success: false, wantMore: false, serverTime: 0, status: 0 };
}

export const CTwoFactorFinalizeAddAuthenticatorResponse = {
  encode(message: CTwoFactorFinalizeAddAuthenticatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.wantMore === true) {
      writer.uint32(16).bool(message.wantMore);
    }
    if (message.serverTime !== 0) {
      writer.uint32(24).uint64(message.serverTime);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorFinalizeAddAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorFinalizeAddAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.wantMore = reader.bool();
          break;
        case 3:
          message.serverTime = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.status = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorFinalizeAddAuthenticatorResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      wantMore: isSet(object.wantMore) ? Boolean(object.wantMore) : false,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      status: isSet(object.status) ? Number(object.status) : 0,
    };
  },

  toJSON(message: CTwoFactorFinalizeAddAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.wantMore !== undefined && (obj.wantMore = message.wantMore);
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.status !== undefined && (obj.status = Math.round(message.status));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorFinalizeAddAuthenticatorResponse>, I>>(
    base?: I,
  ): CTwoFactorFinalizeAddAuthenticatorResponse {
    return CTwoFactorFinalizeAddAuthenticatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorFinalizeAddAuthenticatorResponse>, I>>(
    object: I,
  ): CTwoFactorFinalizeAddAuthenticatorResponse {
    const message = createBaseCTwoFactorFinalizeAddAuthenticatorResponse();
    message.success = object.success ?? false;
    message.wantMore = object.wantMore ?? false;
    message.serverTime = object.serverTime ?? 0;
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCTwoFactorUpdateTokenVersionRequest(): CTwoFactorUpdateTokenVersionRequest {
  return { steamid: 0, version: 0, signature: Buffer.alloc(0) };
}

export const CTwoFactorUpdateTokenVersionRequest = {
  encode(message: CTwoFactorUpdateTokenVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint32(message.version);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorUpdateTokenVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorUpdateTokenVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.version = reader.uint32();
          break;
        case 3:
          message.signature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorUpdateTokenVersionRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      version: isSet(object.version) ? Number(object.version) : 0,
      signature: isSet(object.signature) ? Buffer.from(bytesFromBase64(object.signature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CTwoFactorUpdateTokenVersionRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorUpdateTokenVersionRequest>, I>>(
    base?: I,
  ): CTwoFactorUpdateTokenVersionRequest {
    return CTwoFactorUpdateTokenVersionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorUpdateTokenVersionRequest>, I>>(
    object: I,
  ): CTwoFactorUpdateTokenVersionRequest {
    const message = createBaseCTwoFactorUpdateTokenVersionRequest();
    message.steamid = object.steamid ?? 0;
    message.version = object.version ?? 0;
    message.signature = object.signature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCTwoFactorUpdateTokenVersionResponse(): CTwoFactorUpdateTokenVersionResponse {
  return {};
}

export const CTwoFactorUpdateTokenVersionResponse = {
  encode(_: CTwoFactorUpdateTokenVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorUpdateTokenVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorUpdateTokenVersionResponse();
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

  fromJSON(_: any): CTwoFactorUpdateTokenVersionResponse {
    return {};
  },

  toJSON(_: CTwoFactorUpdateTokenVersionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorUpdateTokenVersionResponse>, I>>(
    base?: I,
  ): CTwoFactorUpdateTokenVersionResponse {
    return CTwoFactorUpdateTokenVersionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorUpdateTokenVersionResponse>, I>>(
    _: I,
  ): CTwoFactorUpdateTokenVersionResponse {
    const message = createBaseCTwoFactorUpdateTokenVersionResponse();
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorRequest(): CTwoFactorRemoveAuthenticatorRequest {
  return { revocationCode: "", revocationReason: 0, steamguardScheme: 0, removeAllSteamguardCookies: false };
}

export const CTwoFactorRemoveAuthenticatorRequest = {
  encode(message: CTwoFactorRemoveAuthenticatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revocationCode !== "") {
      writer.uint32(18).string(message.revocationCode);
    }
    if (message.revocationReason !== 0) {
      writer.uint32(40).uint32(message.revocationReason);
    }
    if (message.steamguardScheme !== 0) {
      writer.uint32(48).uint32(message.steamguardScheme);
    }
    if (message.removeAllSteamguardCookies === true) {
      writer.uint32(56).bool(message.removeAllSteamguardCookies);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.revocationCode = reader.string();
          break;
        case 5:
          message.revocationReason = reader.uint32();
          break;
        case 6:
          message.steamguardScheme = reader.uint32();
          break;
        case 7:
          message.removeAllSteamguardCookies = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorRemoveAuthenticatorRequest {
    return {
      revocationCode: isSet(object.revocationCode) ? String(object.revocationCode) : "",
      revocationReason: isSet(object.revocationReason) ? Number(object.revocationReason) : 0,
      steamguardScheme: isSet(object.steamguardScheme) ? Number(object.steamguardScheme) : 0,
      removeAllSteamguardCookies: isSet(object.removeAllSteamguardCookies)
        ? Boolean(object.removeAllSteamguardCookies)
        : false,
    };
  },

  toJSON(message: CTwoFactorRemoveAuthenticatorRequest): unknown {
    const obj: any = {};
    message.revocationCode !== undefined && (obj.revocationCode = message.revocationCode);
    message.revocationReason !== undefined && (obj.revocationReason = Math.round(message.revocationReason));
    message.steamguardScheme !== undefined && (obj.steamguardScheme = Math.round(message.steamguardScheme));
    message.removeAllSteamguardCookies !== undefined &&
      (obj.removeAllSteamguardCookies = message.removeAllSteamguardCookies);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorRequest>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorRequest {
    return CTwoFactorRemoveAuthenticatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorRequest>, I>>(
    object: I,
  ): CTwoFactorRemoveAuthenticatorRequest {
    const message = createBaseCTwoFactorRemoveAuthenticatorRequest();
    message.revocationCode = object.revocationCode ?? "";
    message.revocationReason = object.revocationReason ?? 0;
    message.steamguardScheme = object.steamguardScheme ?? 0;
    message.removeAllSteamguardCookies = object.removeAllSteamguardCookies ?? false;
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorResponse(): CTwoFactorRemoveAuthenticatorResponse {
  return { success: false, serverTime: 0, revocationAttemptsRemaining: 0 };
}

export const CTwoFactorRemoveAuthenticatorResponse = {
  encode(message: CTwoFactorRemoveAuthenticatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.serverTime !== 0) {
      writer.uint32(24).uint64(message.serverTime);
    }
    if (message.revocationAttemptsRemaining !== 0) {
      writer.uint32(40).uint32(message.revocationAttemptsRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 3:
          message.serverTime = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.revocationAttemptsRemaining = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorRemoveAuthenticatorResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      revocationAttemptsRemaining: isSet(object.revocationAttemptsRemaining)
        ? Number(object.revocationAttemptsRemaining)
        : 0,
    };
  },

  toJSON(message: CTwoFactorRemoveAuthenticatorResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.revocationAttemptsRemaining !== undefined &&
      (obj.revocationAttemptsRemaining = Math.round(message.revocationAttemptsRemaining));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorResponse>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorResponse {
    return CTwoFactorRemoveAuthenticatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorResponse>, I>>(
    object: I,
  ): CTwoFactorRemoveAuthenticatorResponse {
    const message = createBaseCTwoFactorRemoveAuthenticatorResponse();
    message.success = object.success ?? false;
    message.serverTime = object.serverTime ?? 0;
    message.revocationAttemptsRemaining = object.revocationAttemptsRemaining ?? 0;
    return message;
  },
};

function createBaseCTwoFactorCreateEmergencyCodesRequest(): CTwoFactorCreateEmergencyCodesRequest {
  return { code: "" };
}

export const CTwoFactorCreateEmergencyCodesRequest = {
  encode(message: CTwoFactorCreateEmergencyCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorCreateEmergencyCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorCreateEmergencyCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorCreateEmergencyCodesRequest {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: CTwoFactorCreateEmergencyCodesRequest): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorCreateEmergencyCodesRequest>, I>>(
    base?: I,
  ): CTwoFactorCreateEmergencyCodesRequest {
    return CTwoFactorCreateEmergencyCodesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorCreateEmergencyCodesRequest>, I>>(
    object: I,
  ): CTwoFactorCreateEmergencyCodesRequest {
    const message = createBaseCTwoFactorCreateEmergencyCodesRequest();
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseCTwoFactorCreateEmergencyCodesResponse(): CTwoFactorCreateEmergencyCodesResponse {
  return { codes: [] };
}

export const CTwoFactorCreateEmergencyCodesResponse = {
  encode(message: CTwoFactorCreateEmergencyCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorCreateEmergencyCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorCreateEmergencyCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorCreateEmergencyCodesResponse {
    return { codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CTwoFactorCreateEmergencyCodesResponse): unknown {
    const obj: any = {};
    if (message.codes) {
      obj.codes = message.codes.map((e) => e);
    } else {
      obj.codes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorCreateEmergencyCodesResponse>, I>>(
    base?: I,
  ): CTwoFactorCreateEmergencyCodesResponse {
    return CTwoFactorCreateEmergencyCodesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorCreateEmergencyCodesResponse>, I>>(
    object: I,
  ): CTwoFactorCreateEmergencyCodesResponse {
    const message = createBaseCTwoFactorCreateEmergencyCodesResponse();
    message.codes = object.codes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCTwoFactorDestroyEmergencyCodesRequest(): CTwoFactorDestroyEmergencyCodesRequest {
  return { steamid: 0 };
}

export const CTwoFactorDestroyEmergencyCodesRequest = {
  encode(message: CTwoFactorDestroyEmergencyCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorDestroyEmergencyCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorDestroyEmergencyCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorDestroyEmergencyCodesRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CTwoFactorDestroyEmergencyCodesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorDestroyEmergencyCodesRequest>, I>>(
    base?: I,
  ): CTwoFactorDestroyEmergencyCodesRequest {
    return CTwoFactorDestroyEmergencyCodesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorDestroyEmergencyCodesRequest>, I>>(
    object: I,
  ): CTwoFactorDestroyEmergencyCodesRequest {
    const message = createBaseCTwoFactorDestroyEmergencyCodesRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCTwoFactorDestroyEmergencyCodesResponse(): CTwoFactorDestroyEmergencyCodesResponse {
  return {};
}

export const CTwoFactorDestroyEmergencyCodesResponse = {
  encode(_: CTwoFactorDestroyEmergencyCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorDestroyEmergencyCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorDestroyEmergencyCodesResponse();
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

  fromJSON(_: any): CTwoFactorDestroyEmergencyCodesResponse {
    return {};
  },

  toJSON(_: CTwoFactorDestroyEmergencyCodesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorDestroyEmergencyCodesResponse>, I>>(
    base?: I,
  ): CTwoFactorDestroyEmergencyCodesResponse {
    return CTwoFactorDestroyEmergencyCodesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorDestroyEmergencyCodesResponse>, I>>(
    _: I,
  ): CTwoFactorDestroyEmergencyCodesResponse {
    const message = createBaseCTwoFactorDestroyEmergencyCodesResponse();
    return message;
  },
};

function createBaseCTwoFactorValidateTokenRequest(): CTwoFactorValidateTokenRequest {
  return { code: "" };
}

export const CTwoFactorValidateTokenRequest = {
  encode(message: CTwoFactorValidateTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorValidateTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorValidateTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorValidateTokenRequest {
    return { code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: CTwoFactorValidateTokenRequest): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorValidateTokenRequest>, I>>(base?: I): CTwoFactorValidateTokenRequest {
    return CTwoFactorValidateTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorValidateTokenRequest>, I>>(
    object: I,
  ): CTwoFactorValidateTokenRequest {
    const message = createBaseCTwoFactorValidateTokenRequest();
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseCTwoFactorValidateTokenResponse(): CTwoFactorValidateTokenResponse {
  return { valid: false };
}

export const CTwoFactorValidateTokenResponse = {
  encode(message: CTwoFactorValidateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorValidateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorValidateTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorValidateTokenResponse {
    return { valid: isSet(object.valid) ? Boolean(object.valid) : false };
  },

  toJSON(message: CTwoFactorValidateTokenResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorValidateTokenResponse>, I>>(base?: I): CTwoFactorValidateTokenResponse {
    return CTwoFactorValidateTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorValidateTokenResponse>, I>>(
    object: I,
  ): CTwoFactorValidateTokenResponse {
    const message = createBaseCTwoFactorValidateTokenResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartRequest(): CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
  return {};
}

export const CTwoFactorRemoveAuthenticatorViaChallengeStartRequest = {
  encode(
    _: CTwoFactorRemoveAuthenticatorViaChallengeStartRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartRequest();
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

  fromJSON(_: any): CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
    return {};
  },

  toJSON(_: CTwoFactorRemoveAuthenticatorViaChallengeStartRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeStartRequest>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
    return CTwoFactorRemoveAuthenticatorViaChallengeStartRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeStartRequest>, I>>(
    _: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeStartRequest {
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartRequest();
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartResponse(): CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
  return { success: false };
}

export const CTwoFactorRemoveAuthenticatorViaChallengeStartResponse = {
  encode(
    message: CTwoFactorRemoveAuthenticatorViaChallengeStartResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CTwoFactorRemoveAuthenticatorViaChallengeStartResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeStartResponse>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
    return CTwoFactorRemoveAuthenticatorViaChallengeStartResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeStartResponse>, I>>(
    object: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeStartResponse {
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeStartResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueRequest(): CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
  return { smsCode: "", generateNewToken: false, version: 0 };
}

export const CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest = {
  encode(
    message: CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.smsCode !== "") {
      writer.uint32(10).string(message.smsCode);
    }
    if (message.generateNewToken === true) {
      writer.uint32(16).bool(message.generateNewToken);
    }
    if (message.version !== 0) {
      writer.uint32(24).uint32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smsCode = reader.string();
          break;
        case 2:
          message.generateNewToken = reader.bool();
          break;
        case 3:
          message.version = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
    return {
      smsCode: isSet(object.smsCode) ? String(object.smsCode) : "",
      generateNewToken: isSet(object.generateNewToken) ? Boolean(object.generateNewToken) : false,
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest): unknown {
    const obj: any = {};
    message.smsCode !== undefined && (obj.smsCode = message.smsCode);
    message.generateNewToken !== undefined && (obj.generateNewToken = message.generateNewToken);
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
    return CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest>, I>>(
    object: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest {
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueRequest();
    message.smsCode = object.smsCode ?? "";
    message.generateNewToken = object.generateNewToken ?? false;
    message.version = object.version ?? 0;
    return message;
  },
};

function createBaseCRemoveAuthenticatorViaChallengeContinueReplacementToken(): CRemoveAuthenticatorViaChallengeContinueReplacementToken {
  return {
    sharedSecret: Buffer.alloc(0),
    serialNumber: 0,
    revocationCode: "",
    uri: "",
    serverTime: 0,
    accountName: "",
    tokenGid: "",
    identitySecret: Buffer.alloc(0),
    secret1: Buffer.alloc(0),
    status: 0,
    steamguardScheme: 0,
    steamid: 0,
  };
}

export const CRemoveAuthenticatorViaChallengeContinueReplacementToken = {
  encode(
    message: CRemoveAuthenticatorViaChallengeContinueReplacementToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sharedSecret.length !== 0) {
      writer.uint32(10).bytes(message.sharedSecret);
    }
    if (message.serialNumber !== 0) {
      writer.uint32(17).fixed64(message.serialNumber);
    }
    if (message.revocationCode !== "") {
      writer.uint32(26).string(message.revocationCode);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.serverTime !== 0) {
      writer.uint32(40).uint64(message.serverTime);
    }
    if (message.accountName !== "") {
      writer.uint32(50).string(message.accountName);
    }
    if (message.tokenGid !== "") {
      writer.uint32(58).string(message.tokenGid);
    }
    if (message.identitySecret.length !== 0) {
      writer.uint32(66).bytes(message.identitySecret);
    }
    if (message.secret1.length !== 0) {
      writer.uint32(74).bytes(message.secret1);
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.steamguardScheme !== 0) {
      writer.uint32(88).uint32(message.steamguardScheme);
    }
    if (message.steamid !== 0) {
      writer.uint32(97).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRemoveAuthenticatorViaChallengeContinueReplacementToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRemoveAuthenticatorViaChallengeContinueReplacementToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sharedSecret = reader.bytes() as Buffer;
          break;
        case 2:
          message.serialNumber = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.revocationCode = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.serverTime = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.accountName = reader.string();
          break;
        case 7:
          message.tokenGid = reader.string();
          break;
        case 8:
          message.identitySecret = reader.bytes() as Buffer;
          break;
        case 9:
          message.secret1 = reader.bytes() as Buffer;
          break;
        case 10:
          message.status = reader.int32();
          break;
        case 11:
          message.steamguardScheme = reader.uint32();
          break;
        case 12:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRemoveAuthenticatorViaChallengeContinueReplacementToken {
    return {
      sharedSecret: isSet(object.sharedSecret) ? Buffer.from(bytesFromBase64(object.sharedSecret)) : Buffer.alloc(0),
      serialNumber: isSet(object.serialNumber) ? Number(object.serialNumber) : 0,
      revocationCode: isSet(object.revocationCode) ? String(object.revocationCode) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      serverTime: isSet(object.serverTime) ? Number(object.serverTime) : 0,
      accountName: isSet(object.accountName) ? String(object.accountName) : "",
      tokenGid: isSet(object.tokenGid) ? String(object.tokenGid) : "",
      identitySecret: isSet(object.identitySecret)
        ? Buffer.from(bytesFromBase64(object.identitySecret))
        : Buffer.alloc(0),
      secret1: isSet(object.secret1) ? Buffer.from(bytesFromBase64(object.secret1)) : Buffer.alloc(0),
      status: isSet(object.status) ? Number(object.status) : 0,
      steamguardScheme: isSet(object.steamguardScheme) ? Number(object.steamguardScheme) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CRemoveAuthenticatorViaChallengeContinueReplacementToken): unknown {
    const obj: any = {};
    message.sharedSecret !== undefined &&
      (obj.sharedSecret = base64FromBytes(message.sharedSecret !== undefined ? message.sharedSecret : Buffer.alloc(0)));
    message.serialNumber !== undefined && (obj.serialNumber = Math.round(message.serialNumber));
    message.revocationCode !== undefined && (obj.revocationCode = message.revocationCode);
    message.uri !== undefined && (obj.uri = message.uri);
    message.serverTime !== undefined && (obj.serverTime = Math.round(message.serverTime));
    message.accountName !== undefined && (obj.accountName = message.accountName);
    message.tokenGid !== undefined && (obj.tokenGid = message.tokenGid);
    message.identitySecret !== undefined &&
      (obj.identitySecret = base64FromBytes(
        message.identitySecret !== undefined ? message.identitySecret : Buffer.alloc(0),
      ));
    message.secret1 !== undefined &&
      (obj.secret1 = base64FromBytes(message.secret1 !== undefined ? message.secret1 : Buffer.alloc(0)));
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.steamguardScheme !== undefined && (obj.steamguardScheme = Math.round(message.steamguardScheme));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CRemoveAuthenticatorViaChallengeContinueReplacementToken>, I>>(
    base?: I,
  ): CRemoveAuthenticatorViaChallengeContinueReplacementToken {
    return CRemoveAuthenticatorViaChallengeContinueReplacementToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CRemoveAuthenticatorViaChallengeContinueReplacementToken>, I>>(
    object: I,
  ): CRemoveAuthenticatorViaChallengeContinueReplacementToken {
    const message = createBaseCRemoveAuthenticatorViaChallengeContinueReplacementToken();
    message.sharedSecret = object.sharedSecret ?? Buffer.alloc(0);
    message.serialNumber = object.serialNumber ?? 0;
    message.revocationCode = object.revocationCode ?? "";
    message.uri = object.uri ?? "";
    message.serverTime = object.serverTime ?? 0;
    message.accountName = object.accountName ?? "";
    message.tokenGid = object.tokenGid ?? "";
    message.identitySecret = object.identitySecret ?? Buffer.alloc(0);
    message.secret1 = object.secret1 ?? Buffer.alloc(0);
    message.status = object.status ?? 0;
    message.steamguardScheme = object.steamguardScheme ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueResponse(): CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
  return { success: false, replacementToken: undefined };
}

export const CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse = {
  encode(
    message: CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.replacementToken !== undefined) {
      CRemoveAuthenticatorViaChallengeContinueReplacementToken.encode(
        message.replacementToken,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.replacementToken = CRemoveAuthenticatorViaChallengeContinueReplacementToken.decode(
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

  fromJSON(object: any): CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      replacementToken: isSet(object.replacementToken)
        ? CRemoveAuthenticatorViaChallengeContinueReplacementToken.fromJSON(object.replacementToken)
        : undefined,
    };
  },

  toJSON(message: CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.replacementToken !== undefined && (obj.replacementToken = message.replacementToken
      ? CRemoveAuthenticatorViaChallengeContinueReplacementToken.toJSON(message.replacementToken)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse>, I>>(
    base?: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
    return CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse>, I>>(
    object: I,
  ): CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse {
    const message = createBaseCTwoFactorRemoveAuthenticatorViaChallengeContinueResponse();
    message.success = object.success ?? false;
    message.replacementToken = (object.replacementToken !== undefined && object.replacementToken !== null)
      ? CRemoveAuthenticatorViaChallengeContinueReplacementToken.fromPartial(object.replacementToken)
      : undefined;
    return message;
  },
};

export interface TwoFactor {
  QueryStatus(request: CTwoFactorStatusRequest): Promise<CTwoFactorStatusResponse>;
  AddAuthenticator(request: CTwoFactorAddAuthenticatorRequest): Promise<CTwoFactorAddAuthenticatorResponse>;
  SendEmail(request: CTwoFactorSendEmailRequest): Promise<CTwoFactorSendEmailResponse>;
  FinalizeAddAuthenticator(
    request: CTwoFactorFinalizeAddAuthenticatorRequest,
  ): Promise<CTwoFactorFinalizeAddAuthenticatorResponse>;
  UpdateTokenVersion(request: CTwoFactorUpdateTokenVersionRequest): Promise<CTwoFactorUpdateTokenVersionResponse>;
  RemoveAuthenticator(request: CTwoFactorRemoveAuthenticatorRequest): Promise<CTwoFactorRemoveAuthenticatorResponse>;
  CreateEmergencyCodes(request: CTwoFactorCreateEmergencyCodesRequest): Promise<CTwoFactorCreateEmergencyCodesResponse>;
  DestroyEmergencyCodes(
    request: CTwoFactorDestroyEmergencyCodesRequest,
  ): Promise<CTwoFactorDestroyEmergencyCodesResponse>;
  ValidateToken(request: CTwoFactorValidateTokenRequest): Promise<CTwoFactorValidateTokenResponse>;
  RemoveAuthenticatorViaChallengeStart(
    request: CTwoFactorRemoveAuthenticatorViaChallengeStartRequest,
  ): Promise<CTwoFactorRemoveAuthenticatorViaChallengeStartResponse>;
  RemoveAuthenticatorViaChallengeContinue(
    request: CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest,
  ): Promise<CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse>;
}

export class TwoFactorClientImpl implements TwoFactor {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TwoFactor";
    this.rpc = rpc;
    this.QueryStatus = this.QueryStatus.bind(this);
    this.AddAuthenticator = this.AddAuthenticator.bind(this);
    this.SendEmail = this.SendEmail.bind(this);
    this.FinalizeAddAuthenticator = this.FinalizeAddAuthenticator.bind(this);
    this.UpdateTokenVersion = this.UpdateTokenVersion.bind(this);
    this.RemoveAuthenticator = this.RemoveAuthenticator.bind(this);
    this.CreateEmergencyCodes = this.CreateEmergencyCodes.bind(this);
    this.DestroyEmergencyCodes = this.DestroyEmergencyCodes.bind(this);
    this.ValidateToken = this.ValidateToken.bind(this);
    this.RemoveAuthenticatorViaChallengeStart = this.RemoveAuthenticatorViaChallengeStart.bind(this);
    this.RemoveAuthenticatorViaChallengeContinue = this.RemoveAuthenticatorViaChallengeContinue.bind(this);
  }
  QueryStatus(request: CTwoFactorStatusRequest): Promise<CTwoFactorStatusResponse> {
    const data = CTwoFactorStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "QueryStatus", data);
    return promise.then((data) => CTwoFactorStatusResponse.decode(new _m0.Reader(data)));
  }

  AddAuthenticator(request: CTwoFactorAddAuthenticatorRequest): Promise<CTwoFactorAddAuthenticatorResponse> {
    const data = CTwoFactorAddAuthenticatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddAuthenticator", data);
    return promise.then((data) => CTwoFactorAddAuthenticatorResponse.decode(new _m0.Reader(data)));
  }

  SendEmail(request: CTwoFactorSendEmailRequest): Promise<CTwoFactorSendEmailResponse> {
    const data = CTwoFactorSendEmailRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendEmail", data);
    return promise.then((data) => CTwoFactorSendEmailResponse.decode(new _m0.Reader(data)));
  }

  FinalizeAddAuthenticator(
    request: CTwoFactorFinalizeAddAuthenticatorRequest,
  ): Promise<CTwoFactorFinalizeAddAuthenticatorResponse> {
    const data = CTwoFactorFinalizeAddAuthenticatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FinalizeAddAuthenticator", data);
    return promise.then((data) => CTwoFactorFinalizeAddAuthenticatorResponse.decode(new _m0.Reader(data)));
  }

  UpdateTokenVersion(request: CTwoFactorUpdateTokenVersionRequest): Promise<CTwoFactorUpdateTokenVersionResponse> {
    const data = CTwoFactorUpdateTokenVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateTokenVersion", data);
    return promise.then((data) => CTwoFactorUpdateTokenVersionResponse.decode(new _m0.Reader(data)));
  }

  RemoveAuthenticator(request: CTwoFactorRemoveAuthenticatorRequest): Promise<CTwoFactorRemoveAuthenticatorResponse> {
    const data = CTwoFactorRemoveAuthenticatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAuthenticator", data);
    return promise.then((data) => CTwoFactorRemoveAuthenticatorResponse.decode(new _m0.Reader(data)));
  }

  CreateEmergencyCodes(
    request: CTwoFactorCreateEmergencyCodesRequest,
  ): Promise<CTwoFactorCreateEmergencyCodesResponse> {
    const data = CTwoFactorCreateEmergencyCodesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateEmergencyCodes", data);
    return promise.then((data) => CTwoFactorCreateEmergencyCodesResponse.decode(new _m0.Reader(data)));
  }

  DestroyEmergencyCodes(
    request: CTwoFactorDestroyEmergencyCodesRequest,
  ): Promise<CTwoFactorDestroyEmergencyCodesResponse> {
    const data = CTwoFactorDestroyEmergencyCodesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DestroyEmergencyCodes", data);
    return promise.then((data) => CTwoFactorDestroyEmergencyCodesResponse.decode(new _m0.Reader(data)));
  }

  ValidateToken(request: CTwoFactorValidateTokenRequest): Promise<CTwoFactorValidateTokenResponse> {
    const data = CTwoFactorValidateTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ValidateToken", data);
    return promise.then((data) => CTwoFactorValidateTokenResponse.decode(new _m0.Reader(data)));
  }

  RemoveAuthenticatorViaChallengeStart(
    request: CTwoFactorRemoveAuthenticatorViaChallengeStartRequest,
  ): Promise<CTwoFactorRemoveAuthenticatorViaChallengeStartResponse> {
    const data = CTwoFactorRemoveAuthenticatorViaChallengeStartRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAuthenticatorViaChallengeStart", data);
    return promise.then((data) => CTwoFactorRemoveAuthenticatorViaChallengeStartResponse.decode(new _m0.Reader(data)));
  }

  RemoveAuthenticatorViaChallengeContinue(
    request: CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest,
  ): Promise<CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse> {
    const data = CTwoFactorRemoveAuthenticatorViaChallengeContinueRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveAuthenticatorViaChallengeContinue", data);
    return promise.then((data) =>
      CTwoFactorRemoveAuthenticatorViaChallengeContinueResponse.decode(new _m0.Reader(data))
    );
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
