/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CMsgTestMessageToClientRequest {
  someText: string;
}

export interface CMsgTestMessageToClientResponse {
  someText: string;
}

export interface CMsgTestNotifyClientNotification {
  someText: string;
}

export interface CMsgTestMessageToServerRequest {
  someText: string;
}

export interface CMsgTestMessageToServerResponse {
  someText: string;
}

export interface CMsgTestNotifyServerNotification {
  someText: string;
}

function createBaseCMsgTestMessageToClientRequest(): CMsgTestMessageToClientRequest {
  return { someText: "" };
}

export const CMsgTestMessageToClientRequest = {
  encode(message: CMsgTestMessageToClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestMessageToClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestMessageToClientRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestMessageToClientRequest {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestMessageToClientRequest): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestMessageToClientRequest>, I>>(base?: I): CMsgTestMessageToClientRequest {
    return CMsgTestMessageToClientRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestMessageToClientRequest>, I>>(
    object: I,
  ): CMsgTestMessageToClientRequest {
    const message = createBaseCMsgTestMessageToClientRequest();
    message.someText = object.someText ?? "";
    return message;
  },
};

function createBaseCMsgTestMessageToClientResponse(): CMsgTestMessageToClientResponse {
  return { someText: "" };
}

export const CMsgTestMessageToClientResponse = {
  encode(message: CMsgTestMessageToClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestMessageToClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestMessageToClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestMessageToClientResponse {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestMessageToClientResponse): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestMessageToClientResponse>, I>>(base?: I): CMsgTestMessageToClientResponse {
    return CMsgTestMessageToClientResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestMessageToClientResponse>, I>>(
    object: I,
  ): CMsgTestMessageToClientResponse {
    const message = createBaseCMsgTestMessageToClientResponse();
    message.someText = object.someText ?? "";
    return message;
  },
};

function createBaseCMsgTestNotifyClientNotification(): CMsgTestNotifyClientNotification {
  return { someText: "" };
}

export const CMsgTestNotifyClientNotification = {
  encode(message: CMsgTestNotifyClientNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestNotifyClientNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestNotifyClientNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestNotifyClientNotification {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestNotifyClientNotification): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestNotifyClientNotification>, I>>(
    base?: I,
  ): CMsgTestNotifyClientNotification {
    return CMsgTestNotifyClientNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestNotifyClientNotification>, I>>(
    object: I,
  ): CMsgTestNotifyClientNotification {
    const message = createBaseCMsgTestNotifyClientNotification();
    message.someText = object.someText ?? "";
    return message;
  },
};

function createBaseCMsgTestMessageToServerRequest(): CMsgTestMessageToServerRequest {
  return { someText: "" };
}

export const CMsgTestMessageToServerRequest = {
  encode(message: CMsgTestMessageToServerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestMessageToServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestMessageToServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestMessageToServerRequest {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestMessageToServerRequest): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestMessageToServerRequest>, I>>(base?: I): CMsgTestMessageToServerRequest {
    return CMsgTestMessageToServerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestMessageToServerRequest>, I>>(
    object: I,
  ): CMsgTestMessageToServerRequest {
    const message = createBaseCMsgTestMessageToServerRequest();
    message.someText = object.someText ?? "";
    return message;
  },
};

function createBaseCMsgTestMessageToServerResponse(): CMsgTestMessageToServerResponse {
  return { someText: "" };
}

export const CMsgTestMessageToServerResponse = {
  encode(message: CMsgTestMessageToServerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestMessageToServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestMessageToServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestMessageToServerResponse {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestMessageToServerResponse): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestMessageToServerResponse>, I>>(base?: I): CMsgTestMessageToServerResponse {
    return CMsgTestMessageToServerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestMessageToServerResponse>, I>>(
    object: I,
  ): CMsgTestMessageToServerResponse {
    const message = createBaseCMsgTestMessageToServerResponse();
    message.someText = object.someText ?? "";
    return message;
  },
};

function createBaseCMsgTestNotifyServerNotification(): CMsgTestNotifyServerNotification {
  return { someText: "" };
}

export const CMsgTestNotifyServerNotification = {
  encode(message: CMsgTestNotifyServerNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.someText !== "") {
      writer.uint32(10).string(message.someText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTestNotifyServerNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTestNotifyServerNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.someText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTestNotifyServerNotification {
    return { someText: isSet(object.someText) ? String(object.someText) : "" };
  },

  toJSON(message: CMsgTestNotifyServerNotification): unknown {
    const obj: any = {};
    message.someText !== undefined && (obj.someText = message.someText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTestNotifyServerNotification>, I>>(
    base?: I,
  ): CMsgTestNotifyServerNotification {
    return CMsgTestNotifyServerNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTestNotifyServerNotification>, I>>(
    object: I,
  ): CMsgTestNotifyServerNotification {
    const message = createBaseCMsgTestNotifyServerNotification();
    message.someText = object.someText ?? "";
    return message;
  },
};

export interface TestSteamClient {
  MessageToClient(request: CMsgTestMessageToClientRequest): Promise<CMsgTestMessageToClientResponse>;
  NotifyClient(request: CMsgTestNotifyClientNotification): Promise<NoResponse>;
}

export class TestSteamClientClientImpl implements TestSteamClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TestSteamClient";
    this.rpc = rpc;
    this.MessageToClient = this.MessageToClient.bind(this);
    this.NotifyClient = this.NotifyClient.bind(this);
  }
  MessageToClient(request: CMsgTestMessageToClientRequest): Promise<CMsgTestMessageToClientResponse> {
    const data = CMsgTestMessageToClientRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MessageToClient", data);
    return promise.then((data) => CMsgTestMessageToClientResponse.decode(new _m0.Reader(data)));
  }

  NotifyClient(request: CMsgTestNotifyClientNotification): Promise<NoResponse> {
    const data = CMsgTestNotifyClientNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyClient", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface TestServerFromClient {
  MessageToServer(request: CMsgTestMessageToServerRequest): Promise<CMsgTestMessageToServerResponse>;
  NotifyServer(request: CMsgTestNotifyServerNotification): Promise<NoResponse>;
}

export class TestServerFromClientClientImpl implements TestServerFromClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TestServerFromClient";
    this.rpc = rpc;
    this.MessageToServer = this.MessageToServer.bind(this);
    this.NotifyServer = this.NotifyServer.bind(this);
  }
  MessageToServer(request: CMsgTestMessageToServerRequest): Promise<CMsgTestMessageToServerResponse> {
    const data = CMsgTestMessageToServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MessageToServer", data);
    return promise.then((data) => CMsgTestMessageToServerResponse.decode(new _m0.Reader(data)));
  }

  NotifyServer(request: CMsgTestNotifyServerNotification): Promise<NoResponse> {
    const data = CMsgTestNotifyServerNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyServer", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
