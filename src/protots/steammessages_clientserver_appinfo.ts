/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CMsgClientAppInfoUpdate {
  lastChangenumber: number;
  sendChangelist: boolean;
}

export interface CMsgClientAppInfoChanges {
  currentChangeNumber: number;
  forceFullUpdate: boolean;
  appIDs: number[];
}

export interface CMsgClientAppInfoRequest {
  apps: CMsgClientAppInfoRequest_App[];
  supportsBatches: boolean;
}

export interface CMsgClientAppInfoRequest_App {
  appId: number;
  sectionFlags: number;
  sectionCRC: number[];
}

export interface CMsgClientPICSChangesSinceRequest {
  sinceChangeNumber: number;
  sendAppInfoChanges: boolean;
  sendPackageInfoChanges: boolean;
  numAppInfoCached: number;
  numPackageInfoCached: number;
}

export interface CMsgClientPICSChangesSinceResponse {
  currentChangeNumber: number;
  sinceChangeNumber: number;
  forceFullUpdate: boolean;
  packageChanges: CMsgClientPICSChangesSinceResponse_PackageChange[];
  appChanges: CMsgClientPICSChangesSinceResponse_AppChange[];
  forceFullAppUpdate: boolean;
  forceFullPackageUpdate: boolean;
}

export interface CMsgClientPICSChangesSinceResponse_PackageChange {
  packageid: number;
  changeNumber: number;
  needsToken: boolean;
}

export interface CMsgClientPICSChangesSinceResponse_AppChange {
  appid: number;
  changeNumber: number;
  needsToken: boolean;
}

export interface CMsgClientPICSProductInfoRequest {
  packages: CMsgClientPICSProductInfoRequest_PackageInfo[];
  apps: CMsgClientPICSProductInfoRequest_AppInfo[];
  metaDataOnly: boolean;
  numPrevFailed: number;
  OBSOLETESupportsPackageTokens: number;
  sequenceNumber: number;
}

export interface CMsgClientPICSProductInfoRequest_AppInfo {
  appid: number;
  accessToken: string;
  onlyPublicObsolete: boolean;
}

export interface CMsgClientPICSProductInfoRequest_PackageInfo {
  packageid: number;
  accessToken: string;
}

export interface CMsgClientPICSProductInfoResponse {
  apps: CMsgClientPICSProductInfoResponse_AppInfo[];
  unknownAppids: number[];
  packages: CMsgClientPICSProductInfoResponse_PackageInfo[];
  unknownPackageids: number[];
  metaDataOnly: boolean;
  responsePending: boolean;
  httpMinSize: number;
  httpHost: string;
}

export interface CMsgClientPICSProductInfoResponse_AppInfo {
  appid: number;
  changeNumber: number;
  missingToken: boolean;
  sha: Buffer;
  buffer: Buffer;
  onlyPublic: boolean;
  size: number;
}

export interface CMsgClientPICSProductInfoResponse_PackageInfo {
  packageid: number;
  changeNumber: number;
  missingToken: boolean;
  sha: Buffer;
  buffer: Buffer;
  size: number;
}

export interface CMsgClientPICSAccessTokenRequest {
  packageids: number[];
  appids: number[];
}

export interface CMsgClientPICSAccessTokenResponse {
  packageAccessTokens: CMsgClientPICSAccessTokenResponse_PackageToken[];
  packageDeniedTokens: number[];
  appAccessTokens: CMsgClientPICSAccessTokenResponse_AppToken[];
  appDeniedTokens: number[];
}

export interface CMsgClientPICSAccessTokenResponse_PackageToken {
  packageid: number;
  accessToken: string;
}

export interface CMsgClientPICSAccessTokenResponse_AppToken {
  appid: number;
  accessToken: string;
}

function createBaseCMsgClientAppInfoUpdate(): CMsgClientAppInfoUpdate {
  return { lastChangenumber: 0, sendChangelist: false };
}

export const CMsgClientAppInfoUpdate = {
  encode(message: CMsgClientAppInfoUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastChangenumber !== 0) {
      writer.uint32(8).uint32(message.lastChangenumber);
    }
    if (message.sendChangelist === true) {
      writer.uint32(16).bool(message.sendChangelist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAppInfoUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAppInfoUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastChangenumber = reader.uint32();
          break;
        case 2:
          message.sendChangelist = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAppInfoUpdate {
    return {
      lastChangenumber: isSet(object.lastChangenumber) ? Number(object.lastChangenumber) : 0,
      sendChangelist: isSet(object.sendChangelist) ? Boolean(object.sendChangelist) : false,
    };
  },

  toJSON(message: CMsgClientAppInfoUpdate): unknown {
    const obj: any = {};
    message.lastChangenumber !== undefined && (obj.lastChangenumber = Math.round(message.lastChangenumber));
    message.sendChangelist !== undefined && (obj.sendChangelist = message.sendChangelist);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAppInfoUpdate>, I>>(base?: I): CMsgClientAppInfoUpdate {
    return CMsgClientAppInfoUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAppInfoUpdate>, I>>(object: I): CMsgClientAppInfoUpdate {
    const message = createBaseCMsgClientAppInfoUpdate();
    message.lastChangenumber = object.lastChangenumber ?? 0;
    message.sendChangelist = object.sendChangelist ?? false;
    return message;
  },
};

function createBaseCMsgClientAppInfoChanges(): CMsgClientAppInfoChanges {
  return { currentChangeNumber: 0, forceFullUpdate: false, appIDs: [] };
}

export const CMsgClientAppInfoChanges = {
  encode(message: CMsgClientAppInfoChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentChangeNumber !== 0) {
      writer.uint32(8).uint32(message.currentChangeNumber);
    }
    if (message.forceFullUpdate === true) {
      writer.uint32(16).bool(message.forceFullUpdate);
    }
    writer.uint32(26).fork();
    for (const v of message.appIDs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAppInfoChanges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAppInfoChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentChangeNumber = reader.uint32();
          break;
        case 2:
          message.forceFullUpdate = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appIDs.push(reader.uint32());
            }
          } else {
            message.appIDs.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAppInfoChanges {
    return {
      currentChangeNumber: isSet(object.currentChangeNumber) ? Number(object.currentChangeNumber) : 0,
      forceFullUpdate: isSet(object.forceFullUpdate) ? Boolean(object.forceFullUpdate) : false,
      appIDs: Array.isArray(object?.appIDs) ? object.appIDs.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientAppInfoChanges): unknown {
    const obj: any = {};
    message.currentChangeNumber !== undefined && (obj.currentChangeNumber = Math.round(message.currentChangeNumber));
    message.forceFullUpdate !== undefined && (obj.forceFullUpdate = message.forceFullUpdate);
    if (message.appIDs) {
      obj.appIDs = message.appIDs.map((e) => Math.round(e));
    } else {
      obj.appIDs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAppInfoChanges>, I>>(base?: I): CMsgClientAppInfoChanges {
    return CMsgClientAppInfoChanges.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAppInfoChanges>, I>>(object: I): CMsgClientAppInfoChanges {
    const message = createBaseCMsgClientAppInfoChanges();
    message.currentChangeNumber = object.currentChangeNumber ?? 0;
    message.forceFullUpdate = object.forceFullUpdate ?? false;
    message.appIDs = object.appIDs?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientAppInfoRequest(): CMsgClientAppInfoRequest {
  return { apps: [], supportsBatches: false };
}

export const CMsgClientAppInfoRequest = {
  encode(message: CMsgClientAppInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      CMsgClientAppInfoRequest_App.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.supportsBatches === true) {
      writer.uint32(16).bool(message.supportsBatches);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAppInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAppInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apps.push(CMsgClientAppInfoRequest_App.decode(reader, reader.uint32()));
          break;
        case 2:
          message.supportsBatches = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAppInfoRequest {
    return {
      apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => CMsgClientAppInfoRequest_App.fromJSON(e)) : [],
      supportsBatches: isSet(object.supportsBatches) ? Boolean(object.supportsBatches) : false,
    };
  },

  toJSON(message: CMsgClientAppInfoRequest): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CMsgClientAppInfoRequest_App.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    message.supportsBatches !== undefined && (obj.supportsBatches = message.supportsBatches);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAppInfoRequest>, I>>(base?: I): CMsgClientAppInfoRequest {
    return CMsgClientAppInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAppInfoRequest>, I>>(object: I): CMsgClientAppInfoRequest {
    const message = createBaseCMsgClientAppInfoRequest();
    message.apps = object.apps?.map((e) => CMsgClientAppInfoRequest_App.fromPartial(e)) || [];
    message.supportsBatches = object.supportsBatches ?? false;
    return message;
  },
};

function createBaseCMsgClientAppInfoRequest_App(): CMsgClientAppInfoRequest_App {
  return { appId: 0, sectionFlags: 0, sectionCRC: [] };
}

export const CMsgClientAppInfoRequest_App = {
  encode(message: CMsgClientAppInfoRequest_App, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.sectionFlags !== 0) {
      writer.uint32(16).uint32(message.sectionFlags);
    }
    writer.uint32(26).fork();
    for (const v of message.sectionCRC) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAppInfoRequest_App {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAppInfoRequest_App();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.sectionFlags = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sectionCRC.push(reader.uint32());
            }
          } else {
            message.sectionCRC.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAppInfoRequest_App {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      sectionFlags: isSet(object.sectionFlags) ? Number(object.sectionFlags) : 0,
      sectionCRC: Array.isArray(object?.sectionCRC) ? object.sectionCRC.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientAppInfoRequest_App): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.sectionFlags !== undefined && (obj.sectionFlags = Math.round(message.sectionFlags));
    if (message.sectionCRC) {
      obj.sectionCRC = message.sectionCRC.map((e) => Math.round(e));
    } else {
      obj.sectionCRC = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAppInfoRequest_App>, I>>(base?: I): CMsgClientAppInfoRequest_App {
    return CMsgClientAppInfoRequest_App.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAppInfoRequest_App>, I>>(object: I): CMsgClientAppInfoRequest_App {
    const message = createBaseCMsgClientAppInfoRequest_App();
    message.appId = object.appId ?? 0;
    message.sectionFlags = object.sectionFlags ?? 0;
    message.sectionCRC = object.sectionCRC?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientPICSChangesSinceRequest(): CMsgClientPICSChangesSinceRequest {
  return {
    sinceChangeNumber: 0,
    sendAppInfoChanges: false,
    sendPackageInfoChanges: false,
    numAppInfoCached: 0,
    numPackageInfoCached: 0,
  };
}

export const CMsgClientPICSChangesSinceRequest = {
  encode(message: CMsgClientPICSChangesSinceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sinceChangeNumber !== 0) {
      writer.uint32(8).uint32(message.sinceChangeNumber);
    }
    if (message.sendAppInfoChanges === true) {
      writer.uint32(16).bool(message.sendAppInfoChanges);
    }
    if (message.sendPackageInfoChanges === true) {
      writer.uint32(24).bool(message.sendPackageInfoChanges);
    }
    if (message.numAppInfoCached !== 0) {
      writer.uint32(32).uint32(message.numAppInfoCached);
    }
    if (message.numPackageInfoCached !== 0) {
      writer.uint32(40).uint32(message.numPackageInfoCached);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSChangesSinceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSChangesSinceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sinceChangeNumber = reader.uint32();
          break;
        case 2:
          message.sendAppInfoChanges = reader.bool();
          break;
        case 3:
          message.sendPackageInfoChanges = reader.bool();
          break;
        case 4:
          message.numAppInfoCached = reader.uint32();
          break;
        case 5:
          message.numPackageInfoCached = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSChangesSinceRequest {
    return {
      sinceChangeNumber: isSet(object.sinceChangeNumber) ? Number(object.sinceChangeNumber) : 0,
      sendAppInfoChanges: isSet(object.sendAppInfoChanges) ? Boolean(object.sendAppInfoChanges) : false,
      sendPackageInfoChanges: isSet(object.sendPackageInfoChanges) ? Boolean(object.sendPackageInfoChanges) : false,
      numAppInfoCached: isSet(object.numAppInfoCached) ? Number(object.numAppInfoCached) : 0,
      numPackageInfoCached: isSet(object.numPackageInfoCached) ? Number(object.numPackageInfoCached) : 0,
    };
  },

  toJSON(message: CMsgClientPICSChangesSinceRequest): unknown {
    const obj: any = {};
    message.sinceChangeNumber !== undefined && (obj.sinceChangeNumber = Math.round(message.sinceChangeNumber));
    message.sendAppInfoChanges !== undefined && (obj.sendAppInfoChanges = message.sendAppInfoChanges);
    message.sendPackageInfoChanges !== undefined && (obj.sendPackageInfoChanges = message.sendPackageInfoChanges);
    message.numAppInfoCached !== undefined && (obj.numAppInfoCached = Math.round(message.numAppInfoCached));
    message.numPackageInfoCached !== undefined && (obj.numPackageInfoCached = Math.round(message.numPackageInfoCached));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceRequest>, I>>(
    base?: I,
  ): CMsgClientPICSChangesSinceRequest {
    return CMsgClientPICSChangesSinceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceRequest>, I>>(
    object: I,
  ): CMsgClientPICSChangesSinceRequest {
    const message = createBaseCMsgClientPICSChangesSinceRequest();
    message.sinceChangeNumber = object.sinceChangeNumber ?? 0;
    message.sendAppInfoChanges = object.sendAppInfoChanges ?? false;
    message.sendPackageInfoChanges = object.sendPackageInfoChanges ?? false;
    message.numAppInfoCached = object.numAppInfoCached ?? 0;
    message.numPackageInfoCached = object.numPackageInfoCached ?? 0;
    return message;
  },
};

function createBaseCMsgClientPICSChangesSinceResponse(): CMsgClientPICSChangesSinceResponse {
  return {
    currentChangeNumber: 0,
    sinceChangeNumber: 0,
    forceFullUpdate: false,
    packageChanges: [],
    appChanges: [],
    forceFullAppUpdate: false,
    forceFullPackageUpdate: false,
  };
}

export const CMsgClientPICSChangesSinceResponse = {
  encode(message: CMsgClientPICSChangesSinceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentChangeNumber !== 0) {
      writer.uint32(8).uint32(message.currentChangeNumber);
    }
    if (message.sinceChangeNumber !== 0) {
      writer.uint32(16).uint32(message.sinceChangeNumber);
    }
    if (message.forceFullUpdate === true) {
      writer.uint32(24).bool(message.forceFullUpdate);
    }
    for (const v of message.packageChanges) {
      CMsgClientPICSChangesSinceResponse_PackageChange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.appChanges) {
      CMsgClientPICSChangesSinceResponse_AppChange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.forceFullAppUpdate === true) {
      writer.uint32(48).bool(message.forceFullAppUpdate);
    }
    if (message.forceFullPackageUpdate === true) {
      writer.uint32(56).bool(message.forceFullPackageUpdate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSChangesSinceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSChangesSinceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentChangeNumber = reader.uint32();
          break;
        case 2:
          message.sinceChangeNumber = reader.uint32();
          break;
        case 3:
          message.forceFullUpdate = reader.bool();
          break;
        case 4:
          message.packageChanges.push(CMsgClientPICSChangesSinceResponse_PackageChange.decode(reader, reader.uint32()));
          break;
        case 5:
          message.appChanges.push(CMsgClientPICSChangesSinceResponse_AppChange.decode(reader, reader.uint32()));
          break;
        case 6:
          message.forceFullAppUpdate = reader.bool();
          break;
        case 7:
          message.forceFullPackageUpdate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSChangesSinceResponse {
    return {
      currentChangeNumber: isSet(object.currentChangeNumber) ? Number(object.currentChangeNumber) : 0,
      sinceChangeNumber: isSet(object.sinceChangeNumber) ? Number(object.sinceChangeNumber) : 0,
      forceFullUpdate: isSet(object.forceFullUpdate) ? Boolean(object.forceFullUpdate) : false,
      packageChanges: Array.isArray(object?.packageChanges)
        ? object.packageChanges.map((e: any) => CMsgClientPICSChangesSinceResponse_PackageChange.fromJSON(e))
        : [],
      appChanges: Array.isArray(object?.appChanges)
        ? object.appChanges.map((e: any) => CMsgClientPICSChangesSinceResponse_AppChange.fromJSON(e))
        : [],
      forceFullAppUpdate: isSet(object.forceFullAppUpdate) ? Boolean(object.forceFullAppUpdate) : false,
      forceFullPackageUpdate: isSet(object.forceFullPackageUpdate) ? Boolean(object.forceFullPackageUpdate) : false,
    };
  },

  toJSON(message: CMsgClientPICSChangesSinceResponse): unknown {
    const obj: any = {};
    message.currentChangeNumber !== undefined && (obj.currentChangeNumber = Math.round(message.currentChangeNumber));
    message.sinceChangeNumber !== undefined && (obj.sinceChangeNumber = Math.round(message.sinceChangeNumber));
    message.forceFullUpdate !== undefined && (obj.forceFullUpdate = message.forceFullUpdate);
    if (message.packageChanges) {
      obj.packageChanges = message.packageChanges.map((e) =>
        e ? CMsgClientPICSChangesSinceResponse_PackageChange.toJSON(e) : undefined
      );
    } else {
      obj.packageChanges = [];
    }
    if (message.appChanges) {
      obj.appChanges = message.appChanges.map((e) =>
        e ? CMsgClientPICSChangesSinceResponse_AppChange.toJSON(e) : undefined
      );
    } else {
      obj.appChanges = [];
    }
    message.forceFullAppUpdate !== undefined && (obj.forceFullAppUpdate = message.forceFullAppUpdate);
    message.forceFullPackageUpdate !== undefined && (obj.forceFullPackageUpdate = message.forceFullPackageUpdate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse>, I>>(
    base?: I,
  ): CMsgClientPICSChangesSinceResponse {
    return CMsgClientPICSChangesSinceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse>, I>>(
    object: I,
  ): CMsgClientPICSChangesSinceResponse {
    const message = createBaseCMsgClientPICSChangesSinceResponse();
    message.currentChangeNumber = object.currentChangeNumber ?? 0;
    message.sinceChangeNumber = object.sinceChangeNumber ?? 0;
    message.forceFullUpdate = object.forceFullUpdate ?? false;
    message.packageChanges =
      object.packageChanges?.map((e) => CMsgClientPICSChangesSinceResponse_PackageChange.fromPartial(e)) || [];
    message.appChanges = object.appChanges?.map((e) => CMsgClientPICSChangesSinceResponse_AppChange.fromPartial(e)) ||
      [];
    message.forceFullAppUpdate = object.forceFullAppUpdate ?? false;
    message.forceFullPackageUpdate = object.forceFullPackageUpdate ?? false;
    return message;
  },
};

function createBaseCMsgClientPICSChangesSinceResponse_PackageChange(): CMsgClientPICSChangesSinceResponse_PackageChange {
  return { packageid: 0, changeNumber: 0, needsToken: false };
}

export const CMsgClientPICSChangesSinceResponse_PackageChange = {
  encode(
    message: CMsgClientPICSChangesSinceResponse_PackageChange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.changeNumber !== 0) {
      writer.uint32(16).uint32(message.changeNumber);
    }
    if (message.needsToken === true) {
      writer.uint32(24).bool(message.needsToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSChangesSinceResponse_PackageChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSChangesSinceResponse_PackageChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.uint32();
          break;
        case 2:
          message.changeNumber = reader.uint32();
          break;
        case 3:
          message.needsToken = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSChangesSinceResponse_PackageChange {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      changeNumber: isSet(object.changeNumber) ? Number(object.changeNumber) : 0,
      needsToken: isSet(object.needsToken) ? Boolean(object.needsToken) : false,
    };
  },

  toJSON(message: CMsgClientPICSChangesSinceResponse_PackageChange): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.changeNumber !== undefined && (obj.changeNumber = Math.round(message.changeNumber));
    message.needsToken !== undefined && (obj.needsToken = message.needsToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse_PackageChange>, I>>(
    base?: I,
  ): CMsgClientPICSChangesSinceResponse_PackageChange {
    return CMsgClientPICSChangesSinceResponse_PackageChange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse_PackageChange>, I>>(
    object: I,
  ): CMsgClientPICSChangesSinceResponse_PackageChange {
    const message = createBaseCMsgClientPICSChangesSinceResponse_PackageChange();
    message.packageid = object.packageid ?? 0;
    message.changeNumber = object.changeNumber ?? 0;
    message.needsToken = object.needsToken ?? false;
    return message;
  },
};

function createBaseCMsgClientPICSChangesSinceResponse_AppChange(): CMsgClientPICSChangesSinceResponse_AppChange {
  return { appid: 0, changeNumber: 0, needsToken: false };
}

export const CMsgClientPICSChangesSinceResponse_AppChange = {
  encode(message: CMsgClientPICSChangesSinceResponse_AppChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.changeNumber !== 0) {
      writer.uint32(16).uint32(message.changeNumber);
    }
    if (message.needsToken === true) {
      writer.uint32(24).bool(message.needsToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSChangesSinceResponse_AppChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSChangesSinceResponse_AppChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.changeNumber = reader.uint32();
          break;
        case 3:
          message.needsToken = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSChangesSinceResponse_AppChange {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      changeNumber: isSet(object.changeNumber) ? Number(object.changeNumber) : 0,
      needsToken: isSet(object.needsToken) ? Boolean(object.needsToken) : false,
    };
  },

  toJSON(message: CMsgClientPICSChangesSinceResponse_AppChange): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.changeNumber !== undefined && (obj.changeNumber = Math.round(message.changeNumber));
    message.needsToken !== undefined && (obj.needsToken = message.needsToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse_AppChange>, I>>(
    base?: I,
  ): CMsgClientPICSChangesSinceResponse_AppChange {
    return CMsgClientPICSChangesSinceResponse_AppChange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSChangesSinceResponse_AppChange>, I>>(
    object: I,
  ): CMsgClientPICSChangesSinceResponse_AppChange {
    const message = createBaseCMsgClientPICSChangesSinceResponse_AppChange();
    message.appid = object.appid ?? 0;
    message.changeNumber = object.changeNumber ?? 0;
    message.needsToken = object.needsToken ?? false;
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoRequest(): CMsgClientPICSProductInfoRequest {
  return {
    packages: [],
    apps: [],
    metaDataOnly: false,
    numPrevFailed: 0,
    OBSOLETESupportsPackageTokens: 0,
    sequenceNumber: 0,
  };
}

export const CMsgClientPICSProductInfoRequest = {
  encode(message: CMsgClientPICSProductInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.packages) {
      CMsgClientPICSProductInfoRequest_PackageInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.apps) {
      CMsgClientPICSProductInfoRequest_AppInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metaDataOnly === true) {
      writer.uint32(24).bool(message.metaDataOnly);
    }
    if (message.numPrevFailed !== 0) {
      writer.uint32(32).uint32(message.numPrevFailed);
    }
    if (message.OBSOLETESupportsPackageTokens !== 0) {
      writer.uint32(40).uint32(message.OBSOLETESupportsPackageTokens);
    }
    if (message.sequenceNumber !== 0) {
      writer.uint32(48).uint32(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packages.push(CMsgClientPICSProductInfoRequest_PackageInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.apps.push(CMsgClientPICSProductInfoRequest_AppInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metaDataOnly = reader.bool();
          break;
        case 4:
          message.numPrevFailed = reader.uint32();
          break;
        case 5:
          message.OBSOLETESupportsPackageTokens = reader.uint32();
          break;
        case 6:
          message.sequenceNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoRequest {
    return {
      packages: Array.isArray(object?.packages)
        ? object.packages.map((e: any) => CMsgClientPICSProductInfoRequest_PackageInfo.fromJSON(e))
        : [],
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CMsgClientPICSProductInfoRequest_AppInfo.fromJSON(e))
        : [],
      metaDataOnly: isSet(object.metaDataOnly) ? Boolean(object.metaDataOnly) : false,
      numPrevFailed: isSet(object.numPrevFailed) ? Number(object.numPrevFailed) : 0,
      OBSOLETESupportsPackageTokens: isSet(object.OBSOLETESupportsPackageTokens)
        ? Number(object.OBSOLETESupportsPackageTokens)
        : 0,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0,
    };
  },

  toJSON(message: CMsgClientPICSProductInfoRequest): unknown {
    const obj: any = {};
    if (message.packages) {
      obj.packages = message.packages.map((e) =>
        e ? CMsgClientPICSProductInfoRequest_PackageInfo.toJSON(e) : undefined
      );
    } else {
      obj.packages = [];
    }
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CMsgClientPICSProductInfoRequest_AppInfo.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    message.metaDataOnly !== undefined && (obj.metaDataOnly = message.metaDataOnly);
    message.numPrevFailed !== undefined && (obj.numPrevFailed = Math.round(message.numPrevFailed));
    message.OBSOLETESupportsPackageTokens !== undefined &&
      (obj.OBSOLETESupportsPackageTokens = Math.round(message.OBSOLETESupportsPackageTokens));
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoRequest {
    return CMsgClientPICSProductInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoRequest {
    const message = createBaseCMsgClientPICSProductInfoRequest();
    message.packages = object.packages?.map((e) => CMsgClientPICSProductInfoRequest_PackageInfo.fromPartial(e)) || [];
    message.apps = object.apps?.map((e) => CMsgClientPICSProductInfoRequest_AppInfo.fromPartial(e)) || [];
    message.metaDataOnly = object.metaDataOnly ?? false;
    message.numPrevFailed = object.numPrevFailed ?? 0;
    message.OBSOLETESupportsPackageTokens = object.OBSOLETESupportsPackageTokens ?? 0;
    message.sequenceNumber = object.sequenceNumber ?? 0;
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoRequest_AppInfo(): CMsgClientPICSProductInfoRequest_AppInfo {
  return { appid: 0, accessToken: "0", onlyPublicObsolete: false };
}

export const CMsgClientPICSProductInfoRequest_AppInfo = {
  encode(message: CMsgClientPICSProductInfoRequest_AppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.accessToken !== "0") {
      writer.uint32(16).uint64(message.accessToken);
    }
    if (message.onlyPublicObsolete === true) {
      writer.uint32(24).bool(message.onlyPublicObsolete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoRequest_AppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoRequest_AppInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.accessToken = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.onlyPublicObsolete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoRequest_AppInfo {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "0",
      onlyPublicObsolete: isSet(object.onlyPublicObsolete) ? Boolean(object.onlyPublicObsolete) : false,
    };
  },

  toJSON(message: CMsgClientPICSProductInfoRequest_AppInfo): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.onlyPublicObsolete !== undefined && (obj.onlyPublicObsolete = message.onlyPublicObsolete);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest_AppInfo>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoRequest_AppInfo {
    return CMsgClientPICSProductInfoRequest_AppInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest_AppInfo>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoRequest_AppInfo {
    const message = createBaseCMsgClientPICSProductInfoRequest_AppInfo();
    message.appid = object.appid ?? 0;
    message.accessToken = object.accessToken ?? "0";
    message.onlyPublicObsolete = object.onlyPublicObsolete ?? false;
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoRequest_PackageInfo(): CMsgClientPICSProductInfoRequest_PackageInfo {
  return { packageid: 0, accessToken: "0" };
}

export const CMsgClientPICSProductInfoRequest_PackageInfo = {
  encode(message: CMsgClientPICSProductInfoRequest_PackageInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.accessToken !== "0") {
      writer.uint32(16).uint64(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoRequest_PackageInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoRequest_PackageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.uint32();
          break;
        case 2:
          message.accessToken = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoRequest_PackageInfo {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "0",
    };
  },

  toJSON(message: CMsgClientPICSProductInfoRequest_PackageInfo): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest_PackageInfo>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoRequest_PackageInfo {
    return CMsgClientPICSProductInfoRequest_PackageInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoRequest_PackageInfo>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoRequest_PackageInfo {
    const message = createBaseCMsgClientPICSProductInfoRequest_PackageInfo();
    message.packageid = object.packageid ?? 0;
    message.accessToken = object.accessToken ?? "0";
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoResponse(): CMsgClientPICSProductInfoResponse {
  return {
    apps: [],
    unknownAppids: [],
    packages: [],
    unknownPackageids: [],
    metaDataOnly: false,
    responsePending: false,
    httpMinSize: 0,
    httpHost: "",
  };
}

export const CMsgClientPICSProductInfoResponse = {
  encode(message: CMsgClientPICSProductInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apps) {
      CMsgClientPICSProductInfoResponse_AppInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.unknownAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.packages) {
      CMsgClientPICSProductInfoResponse_PackageInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.unknownPackageids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.metaDataOnly === true) {
      writer.uint32(40).bool(message.metaDataOnly);
    }
    if (message.responsePending === true) {
      writer.uint32(48).bool(message.responsePending);
    }
    if (message.httpMinSize !== 0) {
      writer.uint32(56).uint32(message.httpMinSize);
    }
    if (message.httpHost !== "") {
      writer.uint32(66).string(message.httpHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apps.push(CMsgClientPICSProductInfoResponse_AppInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unknownAppids.push(reader.uint32());
            }
          } else {
            message.unknownAppids.push(reader.uint32());
          }
          break;
        case 3:
          message.packages.push(CMsgClientPICSProductInfoResponse_PackageInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unknownPackageids.push(reader.uint32());
            }
          } else {
            message.unknownPackageids.push(reader.uint32());
          }
          break;
        case 5:
          message.metaDataOnly = reader.bool();
          break;
        case 6:
          message.responsePending = reader.bool();
          break;
        case 7:
          message.httpMinSize = reader.uint32();
          break;
        case 8:
          message.httpHost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoResponse {
    return {
      apps: Array.isArray(object?.apps)
        ? object.apps.map((e: any) => CMsgClientPICSProductInfoResponse_AppInfo.fromJSON(e))
        : [],
      unknownAppids: Array.isArray(object?.unknownAppids) ? object.unknownAppids.map((e: any) => Number(e)) : [],
      packages: Array.isArray(object?.packages)
        ? object.packages.map((e: any) => CMsgClientPICSProductInfoResponse_PackageInfo.fromJSON(e))
        : [],
      unknownPackageids: Array.isArray(object?.unknownPackageids)
        ? object.unknownPackageids.map((e: any) => Number(e))
        : [],
      metaDataOnly: isSet(object.metaDataOnly) ? Boolean(object.metaDataOnly) : false,
      responsePending: isSet(object.responsePending) ? Boolean(object.responsePending) : false,
      httpMinSize: isSet(object.httpMinSize) ? Number(object.httpMinSize) : 0,
      httpHost: isSet(object.httpHost) ? String(object.httpHost) : "",
    };
  },

  toJSON(message: CMsgClientPICSProductInfoResponse): unknown {
    const obj: any = {};
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CMsgClientPICSProductInfoResponse_AppInfo.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    if (message.unknownAppids) {
      obj.unknownAppids = message.unknownAppids.map((e) => Math.round(e));
    } else {
      obj.unknownAppids = [];
    }
    if (message.packages) {
      obj.packages = message.packages.map((e) =>
        e ? CMsgClientPICSProductInfoResponse_PackageInfo.toJSON(e) : undefined
      );
    } else {
      obj.packages = [];
    }
    if (message.unknownPackageids) {
      obj.unknownPackageids = message.unknownPackageids.map((e) => Math.round(e));
    } else {
      obj.unknownPackageids = [];
    }
    message.metaDataOnly !== undefined && (obj.metaDataOnly = message.metaDataOnly);
    message.responsePending !== undefined && (obj.responsePending = message.responsePending);
    message.httpMinSize !== undefined && (obj.httpMinSize = Math.round(message.httpMinSize));
    message.httpHost !== undefined && (obj.httpHost = message.httpHost);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoResponse {
    return CMsgClientPICSProductInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoResponse {
    const message = createBaseCMsgClientPICSProductInfoResponse();
    message.apps = object.apps?.map((e) => CMsgClientPICSProductInfoResponse_AppInfo.fromPartial(e)) || [];
    message.unknownAppids = object.unknownAppids?.map((e) => e) || [];
    message.packages = object.packages?.map((e) => CMsgClientPICSProductInfoResponse_PackageInfo.fromPartial(e)) || [];
    message.unknownPackageids = object.unknownPackageids?.map((e) => e) || [];
    message.metaDataOnly = object.metaDataOnly ?? false;
    message.responsePending = object.responsePending ?? false;
    message.httpMinSize = object.httpMinSize ?? 0;
    message.httpHost = object.httpHost ?? "";
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoResponse_AppInfo(): CMsgClientPICSProductInfoResponse_AppInfo {
  return {
    appid: 0,
    changeNumber: 0,
    missingToken: false,
    sha: Buffer.alloc(0),
    buffer: Buffer.alloc(0),
    onlyPublic: false,
    size: 0,
  };
}

export const CMsgClientPICSProductInfoResponse_AppInfo = {
  encode(message: CMsgClientPICSProductInfoResponse_AppInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.changeNumber !== 0) {
      writer.uint32(16).uint32(message.changeNumber);
    }
    if (message.missingToken === true) {
      writer.uint32(24).bool(message.missingToken);
    }
    if (message.sha.length !== 0) {
      writer.uint32(34).bytes(message.sha);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(42).bytes(message.buffer);
    }
    if (message.onlyPublic === true) {
      writer.uint32(48).bool(message.onlyPublic);
    }
    if (message.size !== 0) {
      writer.uint32(56).uint32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoResponse_AppInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoResponse_AppInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.changeNumber = reader.uint32();
          break;
        case 3:
          message.missingToken = reader.bool();
          break;
        case 4:
          message.sha = reader.bytes() as Buffer;
          break;
        case 5:
          message.buffer = reader.bytes() as Buffer;
          break;
        case 6:
          message.onlyPublic = reader.bool();
          break;
        case 7:
          message.size = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoResponse_AppInfo {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      changeNumber: isSet(object.changeNumber) ? Number(object.changeNumber) : 0,
      missingToken: isSet(object.missingToken) ? Boolean(object.missingToken) : false,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
      buffer: isSet(object.buffer) ? Buffer.from(bytesFromBase64(object.buffer)) : Buffer.alloc(0),
      onlyPublic: isSet(object.onlyPublic) ? Boolean(object.onlyPublic) : false,
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: CMsgClientPICSProductInfoResponse_AppInfo): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.changeNumber !== undefined && (obj.changeNumber = Math.round(message.changeNumber));
    message.missingToken !== undefined && (obj.missingToken = message.missingToken);
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(message.buffer !== undefined ? message.buffer : Buffer.alloc(0)));
    message.onlyPublic !== undefined && (obj.onlyPublic = message.onlyPublic);
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse_AppInfo>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoResponse_AppInfo {
    return CMsgClientPICSProductInfoResponse_AppInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse_AppInfo>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoResponse_AppInfo {
    const message = createBaseCMsgClientPICSProductInfoResponse_AppInfo();
    message.appid = object.appid ?? 0;
    message.changeNumber = object.changeNumber ?? 0;
    message.missingToken = object.missingToken ?? false;
    message.sha = object.sha ?? Buffer.alloc(0);
    message.buffer = object.buffer ?? Buffer.alloc(0);
    message.onlyPublic = object.onlyPublic ?? false;
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseCMsgClientPICSProductInfoResponse_PackageInfo(): CMsgClientPICSProductInfoResponse_PackageInfo {
  return { packageid: 0, changeNumber: 0, missingToken: false, sha: Buffer.alloc(0), buffer: Buffer.alloc(0), size: 0 };
}

export const CMsgClientPICSProductInfoResponse_PackageInfo = {
  encode(message: CMsgClientPICSProductInfoResponse_PackageInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.changeNumber !== 0) {
      writer.uint32(16).uint32(message.changeNumber);
    }
    if (message.missingToken === true) {
      writer.uint32(24).bool(message.missingToken);
    }
    if (message.sha.length !== 0) {
      writer.uint32(34).bytes(message.sha);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(42).bytes(message.buffer);
    }
    if (message.size !== 0) {
      writer.uint32(48).uint32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSProductInfoResponse_PackageInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSProductInfoResponse_PackageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.uint32();
          break;
        case 2:
          message.changeNumber = reader.uint32();
          break;
        case 3:
          message.missingToken = reader.bool();
          break;
        case 4:
          message.sha = reader.bytes() as Buffer;
          break;
        case 5:
          message.buffer = reader.bytes() as Buffer;
          break;
        case 6:
          message.size = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSProductInfoResponse_PackageInfo {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      changeNumber: isSet(object.changeNumber) ? Number(object.changeNumber) : 0,
      missingToken: isSet(object.missingToken) ? Boolean(object.missingToken) : false,
      sha: isSet(object.sha) ? Buffer.from(bytesFromBase64(object.sha)) : Buffer.alloc(0),
      buffer: isSet(object.buffer) ? Buffer.from(bytesFromBase64(object.buffer)) : Buffer.alloc(0),
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: CMsgClientPICSProductInfoResponse_PackageInfo): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.changeNumber !== undefined && (obj.changeNumber = Math.round(message.changeNumber));
    message.missingToken !== undefined && (obj.missingToken = message.missingToken);
    message.sha !== undefined && (obj.sha = base64FromBytes(message.sha !== undefined ? message.sha : Buffer.alloc(0)));
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(message.buffer !== undefined ? message.buffer : Buffer.alloc(0)));
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse_PackageInfo>, I>>(
    base?: I,
  ): CMsgClientPICSProductInfoResponse_PackageInfo {
    return CMsgClientPICSProductInfoResponse_PackageInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSProductInfoResponse_PackageInfo>, I>>(
    object: I,
  ): CMsgClientPICSProductInfoResponse_PackageInfo {
    const message = createBaseCMsgClientPICSProductInfoResponse_PackageInfo();
    message.packageid = object.packageid ?? 0;
    message.changeNumber = object.changeNumber ?? 0;
    message.missingToken = object.missingToken ?? false;
    message.sha = object.sha ?? Buffer.alloc(0);
    message.buffer = object.buffer ?? Buffer.alloc(0);
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseCMsgClientPICSAccessTokenRequest(): CMsgClientPICSAccessTokenRequest {
  return { packageids: [], appids: [] };
}

export const CMsgClientPICSAccessTokenRequest = {
  encode(message: CMsgClientPICSAccessTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.packageids) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packageids.push(reader.uint32());
            }
          } else {
            message.packageids.push(reader.uint32());
          }
          break;
        case 2:
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

  fromJSON(object: any): CMsgClientPICSAccessTokenRequest {
    return {
      packageids: Array.isArray(object?.packageids) ? object.packageids.map((e: any) => Number(e)) : [],
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientPICSAccessTokenRequest): unknown {
    const obj: any = {};
    if (message.packageids) {
      obj.packageids = message.packageids.map((e) => Math.round(e));
    } else {
      obj.packageids = [];
    }
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenRequest>, I>>(
    base?: I,
  ): CMsgClientPICSAccessTokenRequest {
    return CMsgClientPICSAccessTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenRequest>, I>>(
    object: I,
  ): CMsgClientPICSAccessTokenRequest {
    const message = createBaseCMsgClientPICSAccessTokenRequest();
    message.packageids = object.packageids?.map((e) => e) || [];
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientPICSAccessTokenResponse(): CMsgClientPICSAccessTokenResponse {
  return { packageAccessTokens: [], packageDeniedTokens: [], appAccessTokens: [], appDeniedTokens: [] };
}

export const CMsgClientPICSAccessTokenResponse = {
  encode(message: CMsgClientPICSAccessTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.packageAccessTokens) {
      CMsgClientPICSAccessTokenResponse_PackageToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.packageDeniedTokens) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.appAccessTokens) {
      CMsgClientPICSAccessTokenResponse_AppToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.appDeniedTokens) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageAccessTokens.push(
            CMsgClientPICSAccessTokenResponse_PackageToken.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packageDeniedTokens.push(reader.uint32());
            }
          } else {
            message.packageDeniedTokens.push(reader.uint32());
          }
          break;
        case 3:
          message.appAccessTokens.push(CMsgClientPICSAccessTokenResponse_AppToken.decode(reader, reader.uint32()));
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appDeniedTokens.push(reader.uint32());
            }
          } else {
            message.appDeniedTokens.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSAccessTokenResponse {
    return {
      packageAccessTokens: Array.isArray(object?.packageAccessTokens)
        ? object.packageAccessTokens.map((e: any) => CMsgClientPICSAccessTokenResponse_PackageToken.fromJSON(e))
        : [],
      packageDeniedTokens: Array.isArray(object?.packageDeniedTokens)
        ? object.packageDeniedTokens.map((e: any) => Number(e))
        : [],
      appAccessTokens: Array.isArray(object?.appAccessTokens)
        ? object.appAccessTokens.map((e: any) => CMsgClientPICSAccessTokenResponse_AppToken.fromJSON(e))
        : [],
      appDeniedTokens: Array.isArray(object?.appDeniedTokens) ? object.appDeniedTokens.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgClientPICSAccessTokenResponse): unknown {
    const obj: any = {};
    if (message.packageAccessTokens) {
      obj.packageAccessTokens = message.packageAccessTokens.map((e) =>
        e ? CMsgClientPICSAccessTokenResponse_PackageToken.toJSON(e) : undefined
      );
    } else {
      obj.packageAccessTokens = [];
    }
    if (message.packageDeniedTokens) {
      obj.packageDeniedTokens = message.packageDeniedTokens.map((e) => Math.round(e));
    } else {
      obj.packageDeniedTokens = [];
    }
    if (message.appAccessTokens) {
      obj.appAccessTokens = message.appAccessTokens.map((e) =>
        e ? CMsgClientPICSAccessTokenResponse_AppToken.toJSON(e) : undefined
      );
    } else {
      obj.appAccessTokens = [];
    }
    if (message.appDeniedTokens) {
      obj.appDeniedTokens = message.appDeniedTokens.map((e) => Math.round(e));
    } else {
      obj.appDeniedTokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse>, I>>(
    base?: I,
  ): CMsgClientPICSAccessTokenResponse {
    return CMsgClientPICSAccessTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse>, I>>(
    object: I,
  ): CMsgClientPICSAccessTokenResponse {
    const message = createBaseCMsgClientPICSAccessTokenResponse();
    message.packageAccessTokens =
      object.packageAccessTokens?.map((e) => CMsgClientPICSAccessTokenResponse_PackageToken.fromPartial(e)) || [];
    message.packageDeniedTokens = object.packageDeniedTokens?.map((e) => e) || [];
    message.appAccessTokens =
      object.appAccessTokens?.map((e) => CMsgClientPICSAccessTokenResponse_AppToken.fromPartial(e)) || [];
    message.appDeniedTokens = object.appDeniedTokens?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientPICSAccessTokenResponse_PackageToken(): CMsgClientPICSAccessTokenResponse_PackageToken {
  return { packageid: 0, accessToken: "0" };
}

export const CMsgClientPICSAccessTokenResponse_PackageToken = {
  encode(
    message: CMsgClientPICSAccessTokenResponse_PackageToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.packageid !== 0) {
      writer.uint32(8).uint32(message.packageid);
    }
    if (message.accessToken !== "0") {
      writer.uint32(16).uint64(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSAccessTokenResponse_PackageToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSAccessTokenResponse_PackageToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageid = reader.uint32();
          break;
        case 2:
          message.accessToken = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSAccessTokenResponse_PackageToken {
    return {
      packageid: isSet(object.packageid) ? Number(object.packageid) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "0",
    };
  },

  toJSON(message: CMsgClientPICSAccessTokenResponse_PackageToken): unknown {
    const obj: any = {};
    message.packageid !== undefined && (obj.packageid = Math.round(message.packageid));
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse_PackageToken>, I>>(
    base?: I,
  ): CMsgClientPICSAccessTokenResponse_PackageToken {
    return CMsgClientPICSAccessTokenResponse_PackageToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse_PackageToken>, I>>(
    object: I,
  ): CMsgClientPICSAccessTokenResponse_PackageToken {
    const message = createBaseCMsgClientPICSAccessTokenResponse_PackageToken();
    message.packageid = object.packageid ?? 0;
    message.accessToken = object.accessToken ?? "0";
    return message;
  },
};

function createBaseCMsgClientPICSAccessTokenResponse_AppToken(): CMsgClientPICSAccessTokenResponse_AppToken {
  return { appid: 0, accessToken: "0" };
}

export const CMsgClientPICSAccessTokenResponse_AppToken = {
  encode(message: CMsgClientPICSAccessTokenResponse_AppToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.accessToken !== "0") {
      writer.uint32(16).uint64(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientPICSAccessTokenResponse_AppToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientPICSAccessTokenResponse_AppToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.accessToken = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientPICSAccessTokenResponse_AppToken {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "0",
    };
  },

  toJSON(message: CMsgClientPICSAccessTokenResponse_AppToken): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse_AppToken>, I>>(
    base?: I,
  ): CMsgClientPICSAccessTokenResponse_AppToken {
    return CMsgClientPICSAccessTokenResponse_AppToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientPICSAccessTokenResponse_AppToken>, I>>(
    object: I,
  ): CMsgClientPICSAccessTokenResponse_AppToken {
    const message = createBaseCMsgClientPICSAccessTokenResponse_AppToken();
    message.appid = object.appid ?? 0;
    message.accessToken = object.accessToken ?? "0";
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
