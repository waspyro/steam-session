/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CDataPublisherClientContentCorruptionReportNotification {
  appid: number;
  depotid: number;
  downloadSource: string;
  objectid: string;
  cellid: number;
  isManifest: boolean;
  objectSize: number;
  corruptionType: number;
  usedHttps: boolean;
  ocProxyDetected: boolean;
}

export interface CDataPublisherClientUpdateAppJobNotification {
  appId: number;
  depotIds: number[];
  appState: number;
  jobAppError: number;
  errorDetails: string;
  jobDuration: number;
  filesValidationFailed: number;
  jobBytesDownloaded: number;
  jobBytesStaged: number;
  bytesComitted: number;
  startAppState: number;
  statsMachineId: number;
  branchName: string;
  totalBytesDownloaded: number;
  totalBytesStaged: number;
  totalBytesRestored: number;
  isBorrowed: boolean;
  isFreeWeekend: boolean;
  totalBytesPatched: number;
  totalBytesSaved: number;
  cellId: number;
}

export interface CValveHWSurveyGetSurveyScheduleRequest {
  surveydatetoken: string;
  surveydatetokenversion: number;
}

export interface CValveHWSurveyGetSurveyScheduleResponse {
  surveydatetoken: number;
  surveydatetokenversion: number;
}

function createBaseCDataPublisherClientContentCorruptionReportNotification(): CDataPublisherClientContentCorruptionReportNotification {
  return {
    appid: 0,
    depotid: 0,
    downloadSource: "",
    objectid: "",
    cellid: 0,
    isManifest: false,
    objectSize: 0,
    corruptionType: 0,
    usedHttps: false,
    ocProxyDetected: false,
  };
}

export const CDataPublisherClientContentCorruptionReportNotification = {
  encode(
    message: CDataPublisherClientContentCorruptionReportNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.depotid !== 0) {
      writer.uint32(16).uint32(message.depotid);
    }
    if (message.downloadSource !== "") {
      writer.uint32(26).string(message.downloadSource);
    }
    if (message.objectid !== "") {
      writer.uint32(34).string(message.objectid);
    }
    if (message.cellid !== 0) {
      writer.uint32(40).uint32(message.cellid);
    }
    if (message.isManifest === true) {
      writer.uint32(48).bool(message.isManifest);
    }
    if (message.objectSize !== 0) {
      writer.uint32(56).uint64(message.objectSize);
    }
    if (message.corruptionType !== 0) {
      writer.uint32(64).uint32(message.corruptionType);
    }
    if (message.usedHttps === true) {
      writer.uint32(72).bool(message.usedHttps);
    }
    if (message.ocProxyDetected === true) {
      writer.uint32(80).bool(message.ocProxyDetected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDataPublisherClientContentCorruptionReportNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataPublisherClientContentCorruptionReportNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.depotid = reader.uint32();
          break;
        case 3:
          message.downloadSource = reader.string();
          break;
        case 4:
          message.objectid = reader.string();
          break;
        case 5:
          message.cellid = reader.uint32();
          break;
        case 6:
          message.isManifest = reader.bool();
          break;
        case 7:
          message.objectSize = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.corruptionType = reader.uint32();
          break;
        case 9:
          message.usedHttps = reader.bool();
          break;
        case 10:
          message.ocProxyDetected = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDataPublisherClientContentCorruptionReportNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      depotid: isSet(object.depotid) ? Number(object.depotid) : 0,
      downloadSource: isSet(object.downloadSource) ? String(object.downloadSource) : "",
      objectid: isSet(object.objectid) ? String(object.objectid) : "",
      cellid: isSet(object.cellid) ? Number(object.cellid) : 0,
      isManifest: isSet(object.isManifest) ? Boolean(object.isManifest) : false,
      objectSize: isSet(object.objectSize) ? Number(object.objectSize) : 0,
      corruptionType: isSet(object.corruptionType) ? Number(object.corruptionType) : 0,
      usedHttps: isSet(object.usedHttps) ? Boolean(object.usedHttps) : false,
      ocProxyDetected: isSet(object.ocProxyDetected) ? Boolean(object.ocProxyDetected) : false,
    };
  },

  toJSON(message: CDataPublisherClientContentCorruptionReportNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.depotid !== undefined && (obj.depotid = Math.round(message.depotid));
    message.downloadSource !== undefined && (obj.downloadSource = message.downloadSource);
    message.objectid !== undefined && (obj.objectid = message.objectid);
    message.cellid !== undefined && (obj.cellid = Math.round(message.cellid));
    message.isManifest !== undefined && (obj.isManifest = message.isManifest);
    message.objectSize !== undefined && (obj.objectSize = Math.round(message.objectSize));
    message.corruptionType !== undefined && (obj.corruptionType = Math.round(message.corruptionType));
    message.usedHttps !== undefined && (obj.usedHttps = message.usedHttps);
    message.ocProxyDetected !== undefined && (obj.ocProxyDetected = message.ocProxyDetected);
    return obj;
  },

  create<I extends Exact<DeepPartial<CDataPublisherClientContentCorruptionReportNotification>, I>>(
    base?: I,
  ): CDataPublisherClientContentCorruptionReportNotification {
    return CDataPublisherClientContentCorruptionReportNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDataPublisherClientContentCorruptionReportNotification>, I>>(
    object: I,
  ): CDataPublisherClientContentCorruptionReportNotification {
    const message = createBaseCDataPublisherClientContentCorruptionReportNotification();
    message.appid = object.appid ?? 0;
    message.depotid = object.depotid ?? 0;
    message.downloadSource = object.downloadSource ?? "";
    message.objectid = object.objectid ?? "";
    message.cellid = object.cellid ?? 0;
    message.isManifest = object.isManifest ?? false;
    message.objectSize = object.objectSize ?? 0;
    message.corruptionType = object.corruptionType ?? 0;
    message.usedHttps = object.usedHttps ?? false;
    message.ocProxyDetected = object.ocProxyDetected ?? false;
    return message;
  },
};

function createBaseCDataPublisherClientUpdateAppJobNotification(): CDataPublisherClientUpdateAppJobNotification {
  return {
    appId: 0,
    depotIds: [],
    appState: 0,
    jobAppError: 0,
    errorDetails: "",
    jobDuration: 0,
    filesValidationFailed: 0,
    jobBytesDownloaded: 0,
    jobBytesStaged: 0,
    bytesComitted: 0,
    startAppState: 0,
    statsMachineId: 0,
    branchName: "",
    totalBytesDownloaded: 0,
    totalBytesStaged: 0,
    totalBytesRestored: 0,
    isBorrowed: false,
    isFreeWeekend: false,
    totalBytesPatched: 0,
    totalBytesSaved: 0,
    cellId: 0,
  };
}

export const CDataPublisherClientUpdateAppJobNotification = {
  encode(message: CDataPublisherClientUpdateAppJobNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    writer.uint32(18).fork();
    for (const v of message.depotIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.appState !== 0) {
      writer.uint32(24).uint32(message.appState);
    }
    if (message.jobAppError !== 0) {
      writer.uint32(32).uint32(message.jobAppError);
    }
    if (message.errorDetails !== "") {
      writer.uint32(42).string(message.errorDetails);
    }
    if (message.jobDuration !== 0) {
      writer.uint32(48).uint32(message.jobDuration);
    }
    if (message.filesValidationFailed !== 0) {
      writer.uint32(56).uint32(message.filesValidationFailed);
    }
    if (message.jobBytesDownloaded !== 0) {
      writer.uint32(64).uint64(message.jobBytesDownloaded);
    }
    if (message.jobBytesStaged !== 0) {
      writer.uint32(72).uint64(message.jobBytesStaged);
    }
    if (message.bytesComitted !== 0) {
      writer.uint32(80).uint64(message.bytesComitted);
    }
    if (message.startAppState !== 0) {
      writer.uint32(88).uint32(message.startAppState);
    }
    if (message.statsMachineId !== 0) {
      writer.uint32(97).fixed64(message.statsMachineId);
    }
    if (message.branchName !== "") {
      writer.uint32(106).string(message.branchName);
    }
    if (message.totalBytesDownloaded !== 0) {
      writer.uint32(112).uint64(message.totalBytesDownloaded);
    }
    if (message.totalBytesStaged !== 0) {
      writer.uint32(120).uint64(message.totalBytesStaged);
    }
    if (message.totalBytesRestored !== 0) {
      writer.uint32(128).uint64(message.totalBytesRestored);
    }
    if (message.isBorrowed === true) {
      writer.uint32(136).bool(message.isBorrowed);
    }
    if (message.isFreeWeekend === true) {
      writer.uint32(144).bool(message.isFreeWeekend);
    }
    if (message.totalBytesPatched !== 0) {
      writer.uint32(160).uint64(message.totalBytesPatched);
    }
    if (message.totalBytesSaved !== 0) {
      writer.uint32(168).uint64(message.totalBytesSaved);
    }
    if (message.cellId !== 0) {
      writer.uint32(176).uint32(message.cellId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDataPublisherClientUpdateAppJobNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCDataPublisherClientUpdateAppJobNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.depotIds.push(reader.uint32());
            }
          } else {
            message.depotIds.push(reader.uint32());
          }
          break;
        case 3:
          message.appState = reader.uint32();
          break;
        case 4:
          message.jobAppError = reader.uint32();
          break;
        case 5:
          message.errorDetails = reader.string();
          break;
        case 6:
          message.jobDuration = reader.uint32();
          break;
        case 7:
          message.filesValidationFailed = reader.uint32();
          break;
        case 8:
          message.jobBytesDownloaded = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.jobBytesStaged = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.bytesComitted = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.startAppState = reader.uint32();
          break;
        case 12:
          message.statsMachineId = longToNumber(reader.fixed64() as Long);
          break;
        case 13:
          message.branchName = reader.string();
          break;
        case 14:
          message.totalBytesDownloaded = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.totalBytesStaged = longToNumber(reader.uint64() as Long);
          break;
        case 16:
          message.totalBytesRestored = longToNumber(reader.uint64() as Long);
          break;
        case 17:
          message.isBorrowed = reader.bool();
          break;
        case 18:
          message.isFreeWeekend = reader.bool();
          break;
        case 20:
          message.totalBytesPatched = longToNumber(reader.uint64() as Long);
          break;
        case 21:
          message.totalBytesSaved = longToNumber(reader.uint64() as Long);
          break;
        case 22:
          message.cellId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDataPublisherClientUpdateAppJobNotification {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      depotIds: Array.isArray(object?.depotIds) ? object.depotIds.map((e: any) => Number(e)) : [],
      appState: isSet(object.appState) ? Number(object.appState) : 0,
      jobAppError: isSet(object.jobAppError) ? Number(object.jobAppError) : 0,
      errorDetails: isSet(object.errorDetails) ? String(object.errorDetails) : "",
      jobDuration: isSet(object.jobDuration) ? Number(object.jobDuration) : 0,
      filesValidationFailed: isSet(object.filesValidationFailed) ? Number(object.filesValidationFailed) : 0,
      jobBytesDownloaded: isSet(object.jobBytesDownloaded) ? Number(object.jobBytesDownloaded) : 0,
      jobBytesStaged: isSet(object.jobBytesStaged) ? Number(object.jobBytesStaged) : 0,
      bytesComitted: isSet(object.bytesComitted) ? Number(object.bytesComitted) : 0,
      startAppState: isSet(object.startAppState) ? Number(object.startAppState) : 0,
      statsMachineId: isSet(object.statsMachineId) ? Number(object.statsMachineId) : 0,
      branchName: isSet(object.branchName) ? String(object.branchName) : "",
      totalBytesDownloaded: isSet(object.totalBytesDownloaded) ? Number(object.totalBytesDownloaded) : 0,
      totalBytesStaged: isSet(object.totalBytesStaged) ? Number(object.totalBytesStaged) : 0,
      totalBytesRestored: isSet(object.totalBytesRestored) ? Number(object.totalBytesRestored) : 0,
      isBorrowed: isSet(object.isBorrowed) ? Boolean(object.isBorrowed) : false,
      isFreeWeekend: isSet(object.isFreeWeekend) ? Boolean(object.isFreeWeekend) : false,
      totalBytesPatched: isSet(object.totalBytesPatched) ? Number(object.totalBytesPatched) : 0,
      totalBytesSaved: isSet(object.totalBytesSaved) ? Number(object.totalBytesSaved) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
    };
  },

  toJSON(message: CDataPublisherClientUpdateAppJobNotification): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    if (message.depotIds) {
      obj.depotIds = message.depotIds.map((e) => Math.round(e));
    } else {
      obj.depotIds = [];
    }
    message.appState !== undefined && (obj.appState = Math.round(message.appState));
    message.jobAppError !== undefined && (obj.jobAppError = Math.round(message.jobAppError));
    message.errorDetails !== undefined && (obj.errorDetails = message.errorDetails);
    message.jobDuration !== undefined && (obj.jobDuration = Math.round(message.jobDuration));
    message.filesValidationFailed !== undefined &&
      (obj.filesValidationFailed = Math.round(message.filesValidationFailed));
    message.jobBytesDownloaded !== undefined && (obj.jobBytesDownloaded = Math.round(message.jobBytesDownloaded));
    message.jobBytesStaged !== undefined && (obj.jobBytesStaged = Math.round(message.jobBytesStaged));
    message.bytesComitted !== undefined && (obj.bytesComitted = Math.round(message.bytesComitted));
    message.startAppState !== undefined && (obj.startAppState = Math.round(message.startAppState));
    message.statsMachineId !== undefined && (obj.statsMachineId = Math.round(message.statsMachineId));
    message.branchName !== undefined && (obj.branchName = message.branchName);
    message.totalBytesDownloaded !== undefined && (obj.totalBytesDownloaded = Math.round(message.totalBytesDownloaded));
    message.totalBytesStaged !== undefined && (obj.totalBytesStaged = Math.round(message.totalBytesStaged));
    message.totalBytesRestored !== undefined && (obj.totalBytesRestored = Math.round(message.totalBytesRestored));
    message.isBorrowed !== undefined && (obj.isBorrowed = message.isBorrowed);
    message.isFreeWeekend !== undefined && (obj.isFreeWeekend = message.isFreeWeekend);
    message.totalBytesPatched !== undefined && (obj.totalBytesPatched = Math.round(message.totalBytesPatched));
    message.totalBytesSaved !== undefined && (obj.totalBytesSaved = Math.round(message.totalBytesSaved));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CDataPublisherClientUpdateAppJobNotification>, I>>(
    base?: I,
  ): CDataPublisherClientUpdateAppJobNotification {
    return CDataPublisherClientUpdateAppJobNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CDataPublisherClientUpdateAppJobNotification>, I>>(
    object: I,
  ): CDataPublisherClientUpdateAppJobNotification {
    const message = createBaseCDataPublisherClientUpdateAppJobNotification();
    message.appId = object.appId ?? 0;
    message.depotIds = object.depotIds?.map((e) => e) || [];
    message.appState = object.appState ?? 0;
    message.jobAppError = object.jobAppError ?? 0;
    message.errorDetails = object.errorDetails ?? "";
    message.jobDuration = object.jobDuration ?? 0;
    message.filesValidationFailed = object.filesValidationFailed ?? 0;
    message.jobBytesDownloaded = object.jobBytesDownloaded ?? 0;
    message.jobBytesStaged = object.jobBytesStaged ?? 0;
    message.bytesComitted = object.bytesComitted ?? 0;
    message.startAppState = object.startAppState ?? 0;
    message.statsMachineId = object.statsMachineId ?? 0;
    message.branchName = object.branchName ?? "";
    message.totalBytesDownloaded = object.totalBytesDownloaded ?? 0;
    message.totalBytesStaged = object.totalBytesStaged ?? 0;
    message.totalBytesRestored = object.totalBytesRestored ?? 0;
    message.isBorrowed = object.isBorrowed ?? false;
    message.isFreeWeekend = object.isFreeWeekend ?? false;
    message.totalBytesPatched = object.totalBytesPatched ?? 0;
    message.totalBytesSaved = object.totalBytesSaved ?? 0;
    message.cellId = object.cellId ?? 0;
    return message;
  },
};

function createBaseCValveHWSurveyGetSurveyScheduleRequest(): CValveHWSurveyGetSurveyScheduleRequest {
  return { surveydatetoken: "", surveydatetokenversion: 0 };
}

export const CValveHWSurveyGetSurveyScheduleRequest = {
  encode(message: CValveHWSurveyGetSurveyScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveydatetoken !== "") {
      writer.uint32(10).string(message.surveydatetoken);
    }
    if (message.surveydatetokenversion !== 0) {
      writer.uint32(17).fixed64(message.surveydatetokenversion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CValveHWSurveyGetSurveyScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCValveHWSurveyGetSurveyScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surveydatetoken = reader.string();
          break;
        case 2:
          message.surveydatetokenversion = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CValveHWSurveyGetSurveyScheduleRequest {
    return {
      surveydatetoken: isSet(object.surveydatetoken) ? String(object.surveydatetoken) : "",
      surveydatetokenversion: isSet(object.surveydatetokenversion) ? Number(object.surveydatetokenversion) : 0,
    };
  },

  toJSON(message: CValveHWSurveyGetSurveyScheduleRequest): unknown {
    const obj: any = {};
    message.surveydatetoken !== undefined && (obj.surveydatetoken = message.surveydatetoken);
    message.surveydatetokenversion !== undefined &&
      (obj.surveydatetokenversion = Math.round(message.surveydatetokenversion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CValveHWSurveyGetSurveyScheduleRequest>, I>>(
    base?: I,
  ): CValveHWSurveyGetSurveyScheduleRequest {
    return CValveHWSurveyGetSurveyScheduleRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CValveHWSurveyGetSurveyScheduleRequest>, I>>(
    object: I,
  ): CValveHWSurveyGetSurveyScheduleRequest {
    const message = createBaseCValveHWSurveyGetSurveyScheduleRequest();
    message.surveydatetoken = object.surveydatetoken ?? "";
    message.surveydatetokenversion = object.surveydatetokenversion ?? 0;
    return message;
  },
};

function createBaseCValveHWSurveyGetSurveyScheduleResponse(): CValveHWSurveyGetSurveyScheduleResponse {
  return { surveydatetoken: 0, surveydatetokenversion: 0 };
}

export const CValveHWSurveyGetSurveyScheduleResponse = {
  encode(message: CValveHWSurveyGetSurveyScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.surveydatetoken !== 0) {
      writer.uint32(8).uint32(message.surveydatetoken);
    }
    if (message.surveydatetokenversion !== 0) {
      writer.uint32(17).fixed64(message.surveydatetokenversion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CValveHWSurveyGetSurveyScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCValveHWSurveyGetSurveyScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surveydatetoken = reader.uint32();
          break;
        case 2:
          message.surveydatetokenversion = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CValveHWSurveyGetSurveyScheduleResponse {
    return {
      surveydatetoken: isSet(object.surveydatetoken) ? Number(object.surveydatetoken) : 0,
      surveydatetokenversion: isSet(object.surveydatetokenversion) ? Number(object.surveydatetokenversion) : 0,
    };
  },

  toJSON(message: CValveHWSurveyGetSurveyScheduleResponse): unknown {
    const obj: any = {};
    message.surveydatetoken !== undefined && (obj.surveydatetoken = Math.round(message.surveydatetoken));
    message.surveydatetokenversion !== undefined &&
      (obj.surveydatetokenversion = Math.round(message.surveydatetokenversion));
    return obj;
  },

  create<I extends Exact<DeepPartial<CValveHWSurveyGetSurveyScheduleResponse>, I>>(
    base?: I,
  ): CValveHWSurveyGetSurveyScheduleResponse {
    return CValveHWSurveyGetSurveyScheduleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CValveHWSurveyGetSurveyScheduleResponse>, I>>(
    object: I,
  ): CValveHWSurveyGetSurveyScheduleResponse {
    const message = createBaseCValveHWSurveyGetSurveyScheduleResponse();
    message.surveydatetoken = object.surveydatetoken ?? 0;
    message.surveydatetokenversion = object.surveydatetokenversion ?? 0;
    return message;
  },
};

export interface DataPublisher {
  ClientContentCorruptionReport(request: CDataPublisherClientContentCorruptionReportNotification): Promise<NoResponse>;
  ClientUpdateAppJobReport(request: CDataPublisherClientUpdateAppJobNotification): Promise<NoResponse>;
}

export class DataPublisherClientImpl implements DataPublisher {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "DataPublisher";
    this.rpc = rpc;
    this.ClientContentCorruptionReport = this.ClientContentCorruptionReport.bind(this);
    this.ClientUpdateAppJobReport = this.ClientUpdateAppJobReport.bind(this);
  }
  ClientContentCorruptionReport(request: CDataPublisherClientContentCorruptionReportNotification): Promise<NoResponse> {
    const data = CDataPublisherClientContentCorruptionReportNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientContentCorruptionReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  ClientUpdateAppJobReport(request: CDataPublisherClientUpdateAppJobNotification): Promise<NoResponse> {
    const data = CDataPublisherClientUpdateAppJobNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientUpdateAppJobReport", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface ValveHWSurvey {
  GetSurveySchedule(request: CValveHWSurveyGetSurveyScheduleRequest): Promise<CValveHWSurveyGetSurveyScheduleResponse>;
}

export class ValveHWSurveyClientImpl implements ValveHWSurvey {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ValveHWSurvey";
    this.rpc = rpc;
    this.GetSurveySchedule = this.GetSurveySchedule.bind(this);
  }
  GetSurveySchedule(request: CValveHWSurveyGetSurveyScheduleRequest): Promise<CValveHWSurveyGetSurveyScheduleResponse> {
    const data = CValveHWSurveyGetSurveyScheduleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSurveySchedule", data);
    return promise.then((data) => CValveHWSurveyGetSurveyScheduleResponse.decode(new _m0.Reader(data)));
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
