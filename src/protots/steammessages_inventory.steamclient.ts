/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface CInventoryGetInventoryRequest {
  appid: number;
  steamid: number;
}

export interface CInventoryResponse {
  etag: string;
  removeditemids: number[];
  itemJson: string;
  itemdefJson: string;
  ticket: Buffer;
  replayed: boolean;
}

export interface CInventoryExchangeItemRequest {
  appid: number;
  steamid: number;
  materialsitemid: number[];
  materialsquantity: number[];
  outputitemdefid: number;
}

export interface CInventoryGetEligiblePromoItemDefIDsRequest {
  appid: number;
  steamid: number;
}

export interface CInventoryGetEligiblePromoItemDefIDsResponse {
  itemdefids: number[];
}

export interface CInventoryAddItemRequest {
  appid: number;
  itemdefid: number[];
  itempropsjson: string[];
  steamid: number;
  notify: boolean;
  requestid: number;
  tradeRestriction: boolean;
  isPurchase: boolean;
}

export interface CInventoryModifyItemsRequest {
  appid: number;
  steamid: number;
  updates: CInventoryModifyItemsRequest_ItemPropertyUpdate[];
  timestamp: number;
}

export interface CInventoryModifyItemsRequest_ItemPropertyUpdate {
  itemid: number;
  removeProperty: boolean;
  propertyName: string;
  propertyValueBool: boolean;
  propertyValueInt: number;
  propertyValueString: string;
  propertyValueFloat: number;
}

export interface CInventoryConsumePlaytimeRequest {
  appid: number;
  itemdefid: number;
}

export interface CInventoryConsumeItemRequest {
  appid: number;
  itemid: number;
  quantity: number;
  timestamp: string;
  steamid: number;
  requestid: number;
}

export interface CInventoryDevSetNextDropRequest {
  appid: number;
  itemdefid: number;
  droptime: string;
}

export interface CInventorySplitItemStackRequest {
  appid: number;
  itemid: number;
  quantity: number;
  steamid: number;
}

export interface CInventoryCombineItemStacksRequest {
  appid: number;
  fromitemid: number;
  destitemid: number;
  quantity: number;
  steamid: number;
}

export interface CInventoryGetItemDefMetaRequest {
  appid: number;
}

export interface CInventoryGetItemDefMetaResponse {
  modified: number;
  digest: string;
}

export interface CInventoryGetUserPurchaseInfoRequest {
}

export interface CInventoryGetUserPurchaseInfoResponse {
  ecurrency: number;
}

export interface CInventoryPurchaseInitRequest {
  appid: number;
  language: number;
  lineItems: CInventoryPurchaseInitRequest_LineItem[];
}

export interface CInventoryPurchaseInitRequest_LineItem {
  itemdefid: number;
  quantity: number;
}

export interface CInventoryPurchaseInitResponse {
  orderid: number;
  transid: number;
}

export interface CInventoryPurchaseFinalizeRequest {
  appid: number;
  language: number;
  orderid: number;
}

export interface CInventoryInspectItemRequest {
  itemdefid: number;
  itemid: number;
  tags: string;
}

export interface CInventoryClientNewItemsNotification {
  appid: number;
  inventoryResponse: CInventoryResponse | undefined;
}

function createBaseCInventoryGetInventoryRequest(): CInventoryGetInventoryRequest {
  return { appid: 0, steamid: 0 };
}

export const CInventoryGetInventoryRequest = {
  encode(message: CInventoryGetInventoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetInventoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetInventoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryGetInventoryRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CInventoryGetInventoryRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetInventoryRequest>, I>>(base?: I): CInventoryGetInventoryRequest {
    return CInventoryGetInventoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetInventoryRequest>, I>>(
    object: I,
  ): CInventoryGetInventoryRequest {
    const message = createBaseCInventoryGetInventoryRequest();
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCInventoryResponse(): CInventoryResponse {
  return { etag: "", removeditemids: [], itemJson: "", itemdefJson: "", ticket: Buffer.alloc(0), replayed: false };
}

export const CInventoryResponse = {
  encode(message: CInventoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.etag !== "") {
      writer.uint32(10).string(message.etag);
    }
    writer.uint32(18).fork();
    for (const v of message.removeditemids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.itemJson !== "") {
      writer.uint32(26).string(message.itemJson);
    }
    if (message.itemdefJson !== "") {
      writer.uint32(34).string(message.itemdefJson);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(42).bytes(message.ticket);
    }
    if (message.replayed === true) {
      writer.uint32(48).bool(message.replayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.etag = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.removeditemids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.removeditemids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.itemJson = reader.string();
          break;
        case 4:
          message.itemdefJson = reader.string();
          break;
        case 5:
          message.ticket = reader.bytes() as Buffer;
          break;
        case 6:
          message.replayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryResponse {
    return {
      etag: isSet(object.etag) ? String(object.etag) : "",
      removeditemids: Array.isArray(object?.removeditemids) ? object.removeditemids.map((e: any) => Number(e)) : [],
      itemJson: isSet(object.itemJson) ? String(object.itemJson) : "",
      itemdefJson: isSet(object.itemdefJson) ? String(object.itemdefJson) : "",
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
      replayed: isSet(object.replayed) ? Boolean(object.replayed) : false,
    };
  },

  toJSON(message: CInventoryResponse): unknown {
    const obj: any = {};
    message.etag !== undefined && (obj.etag = message.etag);
    if (message.removeditemids) {
      obj.removeditemids = message.removeditemids.map((e) => Math.round(e));
    } else {
      obj.removeditemids = [];
    }
    message.itemJson !== undefined && (obj.itemJson = message.itemJson);
    message.itemdefJson !== undefined && (obj.itemdefJson = message.itemdefJson);
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    message.replayed !== undefined && (obj.replayed = message.replayed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryResponse>, I>>(base?: I): CInventoryResponse {
    return CInventoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryResponse>, I>>(object: I): CInventoryResponse {
    const message = createBaseCInventoryResponse();
    message.etag = object.etag ?? "";
    message.removeditemids = object.removeditemids?.map((e) => e) || [];
    message.itemJson = object.itemJson ?? "";
    message.itemdefJson = object.itemdefJson ?? "";
    message.ticket = object.ticket ?? Buffer.alloc(0);
    message.replayed = object.replayed ?? false;
    return message;
  },
};

function createBaseCInventoryExchangeItemRequest(): CInventoryExchangeItemRequest {
  return { appid: 0, steamid: 0, materialsitemid: [], materialsquantity: [], outputitemdefid: 0 };
}

export const CInventoryExchangeItemRequest = {
  encode(message: CInventoryExchangeItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    writer.uint32(26).fork();
    for (const v of message.materialsitemid) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.materialsquantity) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.outputitemdefid !== 0) {
      writer.uint32(40).uint64(message.outputitemdefid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryExchangeItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryExchangeItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.materialsitemid.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.materialsitemid.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.materialsquantity.push(reader.uint32());
            }
          } else {
            message.materialsquantity.push(reader.uint32());
          }
          break;
        case 5:
          message.outputitemdefid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryExchangeItemRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      materialsitemid: Array.isArray(object?.materialsitemid) ? object.materialsitemid.map((e: any) => Number(e)) : [],
      materialsquantity: Array.isArray(object?.materialsquantity)
        ? object.materialsquantity.map((e: any) => Number(e))
        : [],
      outputitemdefid: isSet(object.outputitemdefid) ? Number(object.outputitemdefid) : 0,
    };
  },

  toJSON(message: CInventoryExchangeItemRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    if (message.materialsitemid) {
      obj.materialsitemid = message.materialsitemid.map((e) => Math.round(e));
    } else {
      obj.materialsitemid = [];
    }
    if (message.materialsquantity) {
      obj.materialsquantity = message.materialsquantity.map((e) => Math.round(e));
    } else {
      obj.materialsquantity = [];
    }
    message.outputitemdefid !== undefined && (obj.outputitemdefid = Math.round(message.outputitemdefid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryExchangeItemRequest>, I>>(base?: I): CInventoryExchangeItemRequest {
    return CInventoryExchangeItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryExchangeItemRequest>, I>>(
    object: I,
  ): CInventoryExchangeItemRequest {
    const message = createBaseCInventoryExchangeItemRequest();
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? 0;
    message.materialsitemid = object.materialsitemid?.map((e) => e) || [];
    message.materialsquantity = object.materialsquantity?.map((e) => e) || [];
    message.outputitemdefid = object.outputitemdefid ?? 0;
    return message;
  },
};

function createBaseCInventoryGetEligiblePromoItemDefIDsRequest(): CInventoryGetEligiblePromoItemDefIDsRequest {
  return { appid: 0, steamid: 0 };
}

export const CInventoryGetEligiblePromoItemDefIDsRequest = {
  encode(message: CInventoryGetEligiblePromoItemDefIDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetEligiblePromoItemDefIDsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetEligiblePromoItemDefIDsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryGetEligiblePromoItemDefIDsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CInventoryGetEligiblePromoItemDefIDsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetEligiblePromoItemDefIDsRequest>, I>>(
    base?: I,
  ): CInventoryGetEligiblePromoItemDefIDsRequest {
    return CInventoryGetEligiblePromoItemDefIDsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetEligiblePromoItemDefIDsRequest>, I>>(
    object: I,
  ): CInventoryGetEligiblePromoItemDefIDsRequest {
    const message = createBaseCInventoryGetEligiblePromoItemDefIDsRequest();
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCInventoryGetEligiblePromoItemDefIDsResponse(): CInventoryGetEligiblePromoItemDefIDsResponse {
  return { itemdefids: [] };
}

export const CInventoryGetEligiblePromoItemDefIDsResponse = {
  encode(message: CInventoryGetEligiblePromoItemDefIDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.itemdefids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetEligiblePromoItemDefIDsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetEligiblePromoItemDefIDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemdefids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.itemdefids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryGetEligiblePromoItemDefIDsResponse {
    return { itemdefids: Array.isArray(object?.itemdefids) ? object.itemdefids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CInventoryGetEligiblePromoItemDefIDsResponse): unknown {
    const obj: any = {};
    if (message.itemdefids) {
      obj.itemdefids = message.itemdefids.map((e) => Math.round(e));
    } else {
      obj.itemdefids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetEligiblePromoItemDefIDsResponse>, I>>(
    base?: I,
  ): CInventoryGetEligiblePromoItemDefIDsResponse {
    return CInventoryGetEligiblePromoItemDefIDsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetEligiblePromoItemDefIDsResponse>, I>>(
    object: I,
  ): CInventoryGetEligiblePromoItemDefIDsResponse {
    const message = createBaseCInventoryGetEligiblePromoItemDefIDsResponse();
    message.itemdefids = object.itemdefids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCInventoryAddItemRequest(): CInventoryAddItemRequest {
  return {
    appid: 0,
    itemdefid: [],
    itempropsjson: [],
    steamid: 0,
    notify: false,
    requestid: 0,
    tradeRestriction: false,
    isPurchase: false,
  };
}

export const CInventoryAddItemRequest = {
  encode(message: CInventoryAddItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    writer.uint32(18).fork();
    for (const v of message.itemdefid) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.itempropsjson) {
      writer.uint32(26).string(v!);
    }
    if (message.steamid !== 0) {
      writer.uint32(32).uint64(message.steamid);
    }
    if (message.notify === true) {
      writer.uint32(40).bool(message.notify);
    }
    if (message.requestid !== 0) {
      writer.uint32(48).uint64(message.requestid);
    }
    if (message.tradeRestriction === true) {
      writer.uint32(56).bool(message.tradeRestriction);
    }
    if (message.isPurchase === true) {
      writer.uint32(64).bool(message.isPurchase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryAddItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryAddItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemdefid.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.itemdefid.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.itempropsjson.push(reader.string());
          break;
        case 4:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notify = reader.bool();
          break;
        case 6:
          message.requestid = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.tradeRestriction = reader.bool();
          break;
        case 8:
          message.isPurchase = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryAddItemRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemdefid: Array.isArray(object?.itemdefid) ? object.itemdefid.map((e: any) => Number(e)) : [],
      itempropsjson: Array.isArray(object?.itempropsjson) ? object.itempropsjson.map((e: any) => String(e)) : [],
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      notify: isSet(object.notify) ? Boolean(object.notify) : false,
      requestid: isSet(object.requestid) ? Number(object.requestid) : 0,
      tradeRestriction: isSet(object.tradeRestriction) ? Boolean(object.tradeRestriction) : false,
      isPurchase: isSet(object.isPurchase) ? Boolean(object.isPurchase) : false,
    };
  },

  toJSON(message: CInventoryAddItemRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.itemdefid) {
      obj.itemdefid = message.itemdefid.map((e) => Math.round(e));
    } else {
      obj.itemdefid = [];
    }
    if (message.itempropsjson) {
      obj.itempropsjson = message.itempropsjson.map((e) => e);
    } else {
      obj.itempropsjson = [];
    }
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.notify !== undefined && (obj.notify = message.notify);
    message.requestid !== undefined && (obj.requestid = Math.round(message.requestid));
    message.tradeRestriction !== undefined && (obj.tradeRestriction = message.tradeRestriction);
    message.isPurchase !== undefined && (obj.isPurchase = message.isPurchase);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryAddItemRequest>, I>>(base?: I): CInventoryAddItemRequest {
    return CInventoryAddItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryAddItemRequest>, I>>(object: I): CInventoryAddItemRequest {
    const message = createBaseCInventoryAddItemRequest();
    message.appid = object.appid ?? 0;
    message.itemdefid = object.itemdefid?.map((e) => e) || [];
    message.itempropsjson = object.itempropsjson?.map((e) => e) || [];
    message.steamid = object.steamid ?? 0;
    message.notify = object.notify ?? false;
    message.requestid = object.requestid ?? 0;
    message.tradeRestriction = object.tradeRestriction ?? false;
    message.isPurchase = object.isPurchase ?? false;
    return message;
  },
};

function createBaseCInventoryModifyItemsRequest(): CInventoryModifyItemsRequest {
  return { appid: 0, steamid: 0, updates: [], timestamp: 0 };
}

export const CInventoryModifyItemsRequest = {
  encode(message: CInventoryModifyItemsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    for (const v of message.updates) {
      CInventoryModifyItemsRequest_ItemPropertyUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryModifyItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryModifyItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.updates.push(CInventoryModifyItemsRequest_ItemPropertyUpdate.decode(reader, reader.uint32()));
          break;
        case 4:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryModifyItemsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      updates: Array.isArray(object?.updates)
        ? object.updates.map((e: any) => CInventoryModifyItemsRequest_ItemPropertyUpdate.fromJSON(e))
        : [],
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CInventoryModifyItemsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    if (message.updates) {
      obj.updates = message.updates.map((e) =>
        e ? CInventoryModifyItemsRequest_ItemPropertyUpdate.toJSON(e) : undefined
      );
    } else {
      obj.updates = [];
    }
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryModifyItemsRequest>, I>>(base?: I): CInventoryModifyItemsRequest {
    return CInventoryModifyItemsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryModifyItemsRequest>, I>>(object: I): CInventoryModifyItemsRequest {
    const message = createBaseCInventoryModifyItemsRequest();
    message.appid = object.appid ?? 0;
    message.steamid = object.steamid ?? 0;
    message.updates = object.updates?.map((e) => CInventoryModifyItemsRequest_ItemPropertyUpdate.fromPartial(e)) || [];
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCInventoryModifyItemsRequest_ItemPropertyUpdate(): CInventoryModifyItemsRequest_ItemPropertyUpdate {
  return {
    itemid: 0,
    removeProperty: false,
    propertyName: "",
    propertyValueBool: false,
    propertyValueInt: 0,
    propertyValueString: "",
    propertyValueFloat: 0,
  };
}

export const CInventoryModifyItemsRequest_ItemPropertyUpdate = {
  encode(
    message: CInventoryModifyItemsRequest_ItemPropertyUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemid !== 0) {
      writer.uint32(8).uint64(message.itemid);
    }
    if (message.removeProperty === true) {
      writer.uint32(16).bool(message.removeProperty);
    }
    if (message.propertyName !== "") {
      writer.uint32(26).string(message.propertyName);
    }
    if (message.propertyValueBool === true) {
      writer.uint32(32).bool(message.propertyValueBool);
    }
    if (message.propertyValueInt !== 0) {
      writer.uint32(40).int64(message.propertyValueInt);
    }
    if (message.propertyValueString !== "") {
      writer.uint32(50).string(message.propertyValueString);
    }
    if (message.propertyValueFloat !== 0) {
      writer.uint32(61).float(message.propertyValueFloat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryModifyItemsRequest_ItemPropertyUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryModifyItemsRequest_ItemPropertyUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.removeProperty = reader.bool();
          break;
        case 3:
          message.propertyName = reader.string();
          break;
        case 4:
          message.propertyValueBool = reader.bool();
          break;
        case 5:
          message.propertyValueInt = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.propertyValueString = reader.string();
          break;
        case 7:
          message.propertyValueFloat = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryModifyItemsRequest_ItemPropertyUpdate {
    return {
      itemid: isSet(object.itemid) ? Number(object.itemid) : 0,
      removeProperty: isSet(object.removeProperty) ? Boolean(object.removeProperty) : false,
      propertyName: isSet(object.propertyName) ? String(object.propertyName) : "",
      propertyValueBool: isSet(object.propertyValueBool) ? Boolean(object.propertyValueBool) : false,
      propertyValueInt: isSet(object.propertyValueInt) ? Number(object.propertyValueInt) : 0,
      propertyValueString: isSet(object.propertyValueString) ? String(object.propertyValueString) : "",
      propertyValueFloat: isSet(object.propertyValueFloat) ? Number(object.propertyValueFloat) : 0,
    };
  },

  toJSON(message: CInventoryModifyItemsRequest_ItemPropertyUpdate): unknown {
    const obj: any = {};
    message.itemid !== undefined && (obj.itemid = Math.round(message.itemid));
    message.removeProperty !== undefined && (obj.removeProperty = message.removeProperty);
    message.propertyName !== undefined && (obj.propertyName = message.propertyName);
    message.propertyValueBool !== undefined && (obj.propertyValueBool = message.propertyValueBool);
    message.propertyValueInt !== undefined && (obj.propertyValueInt = Math.round(message.propertyValueInt));
    message.propertyValueString !== undefined && (obj.propertyValueString = message.propertyValueString);
    message.propertyValueFloat !== undefined && (obj.propertyValueFloat = message.propertyValueFloat);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryModifyItemsRequest_ItemPropertyUpdate>, I>>(
    base?: I,
  ): CInventoryModifyItemsRequest_ItemPropertyUpdate {
    return CInventoryModifyItemsRequest_ItemPropertyUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryModifyItemsRequest_ItemPropertyUpdate>, I>>(
    object: I,
  ): CInventoryModifyItemsRequest_ItemPropertyUpdate {
    const message = createBaseCInventoryModifyItemsRequest_ItemPropertyUpdate();
    message.itemid = object.itemid ?? 0;
    message.removeProperty = object.removeProperty ?? false;
    message.propertyName = object.propertyName ?? "";
    message.propertyValueBool = object.propertyValueBool ?? false;
    message.propertyValueInt = object.propertyValueInt ?? 0;
    message.propertyValueString = object.propertyValueString ?? "";
    message.propertyValueFloat = object.propertyValueFloat ?? 0;
    return message;
  },
};

function createBaseCInventoryConsumePlaytimeRequest(): CInventoryConsumePlaytimeRequest {
  return { appid: 0, itemdefid: 0 };
}

export const CInventoryConsumePlaytimeRequest = {
  encode(message: CInventoryConsumePlaytimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.itemdefid !== 0) {
      writer.uint32(16).uint64(message.itemdefid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryConsumePlaytimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryConsumePlaytimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.itemdefid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryConsumePlaytimeRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemdefid: isSet(object.itemdefid) ? Number(object.itemdefid) : 0,
    };
  },

  toJSON(message: CInventoryConsumePlaytimeRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemdefid !== undefined && (obj.itemdefid = Math.round(message.itemdefid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryConsumePlaytimeRequest>, I>>(
    base?: I,
  ): CInventoryConsumePlaytimeRequest {
    return CInventoryConsumePlaytimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryConsumePlaytimeRequest>, I>>(
    object: I,
  ): CInventoryConsumePlaytimeRequest {
    const message = createBaseCInventoryConsumePlaytimeRequest();
    message.appid = object.appid ?? 0;
    message.itemdefid = object.itemdefid ?? 0;
    return message;
  },
};

function createBaseCInventoryConsumeItemRequest(): CInventoryConsumeItemRequest {
  return { appid: 0, itemid: 0, quantity: 0, timestamp: "", steamid: 0, requestid: 0 };
}

export const CInventoryConsumeItemRequest = {
  encode(message: CInventoryConsumeItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.itemid !== 0) {
      writer.uint32(16).uint64(message.itemid);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.timestamp !== "") {
      writer.uint32(34).string(message.timestamp);
    }
    if (message.steamid !== 0) {
      writer.uint32(40).uint64(message.steamid);
    }
    if (message.requestid !== 0) {
      writer.uint32(48).uint64(message.requestid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryConsumeItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryConsumeItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.itemid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 4:
          message.timestamp = reader.string();
          break;
        case 5:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.requestid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryConsumeItemRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemid: isSet(object.itemid) ? Number(object.itemid) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      requestid: isSet(object.requestid) ? Number(object.requestid) : 0,
    };
  },

  toJSON(message: CInventoryConsumeItemRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemid !== undefined && (obj.itemid = Math.round(message.itemid));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.requestid !== undefined && (obj.requestid = Math.round(message.requestid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryConsumeItemRequest>, I>>(base?: I): CInventoryConsumeItemRequest {
    return CInventoryConsumeItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryConsumeItemRequest>, I>>(object: I): CInventoryConsumeItemRequest {
    const message = createBaseCInventoryConsumeItemRequest();
    message.appid = object.appid ?? 0;
    message.itemid = object.itemid ?? 0;
    message.quantity = object.quantity ?? 0;
    message.timestamp = object.timestamp ?? "";
    message.steamid = object.steamid ?? 0;
    message.requestid = object.requestid ?? 0;
    return message;
  },
};

function createBaseCInventoryDevSetNextDropRequest(): CInventoryDevSetNextDropRequest {
  return { appid: 0, itemdefid: 0, droptime: "" };
}

export const CInventoryDevSetNextDropRequest = {
  encode(message: CInventoryDevSetNextDropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.itemdefid !== 0) {
      writer.uint32(16).uint64(message.itemdefid);
    }
    if (message.droptime !== "") {
      writer.uint32(26).string(message.droptime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryDevSetNextDropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryDevSetNextDropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.itemdefid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.droptime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryDevSetNextDropRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemdefid: isSet(object.itemdefid) ? Number(object.itemdefid) : 0,
      droptime: isSet(object.droptime) ? String(object.droptime) : "",
    };
  },

  toJSON(message: CInventoryDevSetNextDropRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemdefid !== undefined && (obj.itemdefid = Math.round(message.itemdefid));
    message.droptime !== undefined && (obj.droptime = message.droptime);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryDevSetNextDropRequest>, I>>(base?: I): CInventoryDevSetNextDropRequest {
    return CInventoryDevSetNextDropRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryDevSetNextDropRequest>, I>>(
    object: I,
  ): CInventoryDevSetNextDropRequest {
    const message = createBaseCInventoryDevSetNextDropRequest();
    message.appid = object.appid ?? 0;
    message.itemdefid = object.itemdefid ?? 0;
    message.droptime = object.droptime ?? "";
    return message;
  },
};

function createBaseCInventorySplitItemStackRequest(): CInventorySplitItemStackRequest {
  return { appid: 0, itemid: 0, quantity: 0, steamid: 0 };
}

export const CInventorySplitItemStackRequest = {
  encode(message: CInventorySplitItemStackRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.itemid !== 0) {
      writer.uint32(16).uint64(message.itemid);
    }
    if (message.quantity !== 0) {
      writer.uint32(24).uint32(message.quantity);
    }
    if (message.steamid !== 0) {
      writer.uint32(40).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventorySplitItemStackRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventorySplitItemStackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.itemid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.quantity = reader.uint32();
          break;
        case 5:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventorySplitItemStackRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemid: isSet(object.itemid) ? Number(object.itemid) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CInventorySplitItemStackRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemid !== undefined && (obj.itemid = Math.round(message.itemid));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventorySplitItemStackRequest>, I>>(base?: I): CInventorySplitItemStackRequest {
    return CInventorySplitItemStackRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventorySplitItemStackRequest>, I>>(
    object: I,
  ): CInventorySplitItemStackRequest {
    const message = createBaseCInventorySplitItemStackRequest();
    message.appid = object.appid ?? 0;
    message.itemid = object.itemid ?? 0;
    message.quantity = object.quantity ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCInventoryCombineItemStacksRequest(): CInventoryCombineItemStacksRequest {
  return { appid: 0, fromitemid: 0, destitemid: 0, quantity: 0, steamid: 0 };
}

export const CInventoryCombineItemStacksRequest = {
  encode(message: CInventoryCombineItemStacksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.fromitemid !== 0) {
      writer.uint32(16).uint64(message.fromitemid);
    }
    if (message.destitemid !== 0) {
      writer.uint32(24).uint64(message.destitemid);
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    if (message.steamid !== 0) {
      writer.uint32(57).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryCombineItemStacksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryCombineItemStacksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.fromitemid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.destitemid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.quantity = reader.uint32();
          break;
        case 7:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryCombineItemStacksRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      fromitemid: isSet(object.fromitemid) ? Number(object.fromitemid) : 0,
      destitemid: isSet(object.destitemid) ? Number(object.destitemid) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CInventoryCombineItemStacksRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.fromitemid !== undefined && (obj.fromitemid = Math.round(message.fromitemid));
    message.destitemid !== undefined && (obj.destitemid = Math.round(message.destitemid));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryCombineItemStacksRequest>, I>>(
    base?: I,
  ): CInventoryCombineItemStacksRequest {
    return CInventoryCombineItemStacksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryCombineItemStacksRequest>, I>>(
    object: I,
  ): CInventoryCombineItemStacksRequest {
    const message = createBaseCInventoryCombineItemStacksRequest();
    message.appid = object.appid ?? 0;
    message.fromitemid = object.fromitemid ?? 0;
    message.destitemid = object.destitemid ?? 0;
    message.quantity = object.quantity ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCInventoryGetItemDefMetaRequest(): CInventoryGetItemDefMetaRequest {
  return { appid: 0 };
}

export const CInventoryGetItemDefMetaRequest = {
  encode(message: CInventoryGetItemDefMetaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetItemDefMetaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetItemDefMetaRequest();
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

  fromJSON(object: any): CInventoryGetItemDefMetaRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CInventoryGetItemDefMetaRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetItemDefMetaRequest>, I>>(base?: I): CInventoryGetItemDefMetaRequest {
    return CInventoryGetItemDefMetaRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetItemDefMetaRequest>, I>>(
    object: I,
  ): CInventoryGetItemDefMetaRequest {
    const message = createBaseCInventoryGetItemDefMetaRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCInventoryGetItemDefMetaResponse(): CInventoryGetItemDefMetaResponse {
  return { modified: 0, digest: "" };
}

export const CInventoryGetItemDefMetaResponse = {
  encode(message: CInventoryGetItemDefMetaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modified !== 0) {
      writer.uint32(8).uint32(message.modified);
    }
    if (message.digest !== "") {
      writer.uint32(18).string(message.digest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetItemDefMetaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetItemDefMetaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modified = reader.uint32();
          break;
        case 2:
          message.digest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryGetItemDefMetaResponse {
    return {
      modified: isSet(object.modified) ? Number(object.modified) : 0,
      digest: isSet(object.digest) ? String(object.digest) : "",
    };
  },

  toJSON(message: CInventoryGetItemDefMetaResponse): unknown {
    const obj: any = {};
    message.modified !== undefined && (obj.modified = Math.round(message.modified));
    message.digest !== undefined && (obj.digest = message.digest);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetItemDefMetaResponse>, I>>(
    base?: I,
  ): CInventoryGetItemDefMetaResponse {
    return CInventoryGetItemDefMetaResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetItemDefMetaResponse>, I>>(
    object: I,
  ): CInventoryGetItemDefMetaResponse {
    const message = createBaseCInventoryGetItemDefMetaResponse();
    message.modified = object.modified ?? 0;
    message.digest = object.digest ?? "";
    return message;
  },
};

function createBaseCInventoryGetUserPurchaseInfoRequest(): CInventoryGetUserPurchaseInfoRequest {
  return {};
}

export const CInventoryGetUserPurchaseInfoRequest = {
  encode(_: CInventoryGetUserPurchaseInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetUserPurchaseInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetUserPurchaseInfoRequest();
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

  fromJSON(_: any): CInventoryGetUserPurchaseInfoRequest {
    return {};
  },

  toJSON(_: CInventoryGetUserPurchaseInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetUserPurchaseInfoRequest>, I>>(
    base?: I,
  ): CInventoryGetUserPurchaseInfoRequest {
    return CInventoryGetUserPurchaseInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetUserPurchaseInfoRequest>, I>>(
    _: I,
  ): CInventoryGetUserPurchaseInfoRequest {
    const message = createBaseCInventoryGetUserPurchaseInfoRequest();
    return message;
  },
};

function createBaseCInventoryGetUserPurchaseInfoResponse(): CInventoryGetUserPurchaseInfoResponse {
  return { ecurrency: 0 };
}

export const CInventoryGetUserPurchaseInfoResponse = {
  encode(message: CInventoryGetUserPurchaseInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ecurrency !== 0) {
      writer.uint32(8).int32(message.ecurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryGetUserPurchaseInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryGetUserPurchaseInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ecurrency = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryGetUserPurchaseInfoResponse {
    return { ecurrency: isSet(object.ecurrency) ? Number(object.ecurrency) : 0 };
  },

  toJSON(message: CInventoryGetUserPurchaseInfoResponse): unknown {
    const obj: any = {};
    message.ecurrency !== undefined && (obj.ecurrency = Math.round(message.ecurrency));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryGetUserPurchaseInfoResponse>, I>>(
    base?: I,
  ): CInventoryGetUserPurchaseInfoResponse {
    return CInventoryGetUserPurchaseInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryGetUserPurchaseInfoResponse>, I>>(
    object: I,
  ): CInventoryGetUserPurchaseInfoResponse {
    const message = createBaseCInventoryGetUserPurchaseInfoResponse();
    message.ecurrency = object.ecurrency ?? 0;
    return message;
  },
};

function createBaseCInventoryPurchaseInitRequest(): CInventoryPurchaseInitRequest {
  return { appid: 0, language: 0, lineItems: [] };
}

export const CInventoryPurchaseInitRequest = {
  encode(message: CInventoryPurchaseInitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.language !== 0) {
      writer.uint32(16).int32(message.language);
    }
    for (const v of message.lineItems) {
      CInventoryPurchaseInitRequest_LineItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryPurchaseInitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryPurchaseInitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.language = reader.int32();
          break;
        case 3:
          message.lineItems.push(CInventoryPurchaseInitRequest_LineItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryPurchaseInitRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
      lineItems: Array.isArray(object?.lineItems)
        ? object.lineItems.map((e: any) => CInventoryPurchaseInitRequest_LineItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CInventoryPurchaseInitRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.language !== undefined && (obj.language = Math.round(message.language));
    if (message.lineItems) {
      obj.lineItems = message.lineItems.map((e) => e ? CInventoryPurchaseInitRequest_LineItem.toJSON(e) : undefined);
    } else {
      obj.lineItems = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryPurchaseInitRequest>, I>>(base?: I): CInventoryPurchaseInitRequest {
    return CInventoryPurchaseInitRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryPurchaseInitRequest>, I>>(
    object: I,
  ): CInventoryPurchaseInitRequest {
    const message = createBaseCInventoryPurchaseInitRequest();
    message.appid = object.appid ?? 0;
    message.language = object.language ?? 0;
    message.lineItems = object.lineItems?.map((e) => CInventoryPurchaseInitRequest_LineItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCInventoryPurchaseInitRequest_LineItem(): CInventoryPurchaseInitRequest_LineItem {
  return { itemdefid: 0, quantity: 0 };
}

export const CInventoryPurchaseInitRequest_LineItem = {
  encode(message: CInventoryPurchaseInitRequest_LineItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemdefid !== 0) {
      writer.uint32(8).uint64(message.itemdefid);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryPurchaseInitRequest_LineItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryPurchaseInitRequest_LineItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemdefid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.quantity = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryPurchaseInitRequest_LineItem {
    return {
      itemdefid: isSet(object.itemdefid) ? Number(object.itemdefid) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: CInventoryPurchaseInitRequest_LineItem): unknown {
    const obj: any = {};
    message.itemdefid !== undefined && (obj.itemdefid = Math.round(message.itemdefid));
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryPurchaseInitRequest_LineItem>, I>>(
    base?: I,
  ): CInventoryPurchaseInitRequest_LineItem {
    return CInventoryPurchaseInitRequest_LineItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryPurchaseInitRequest_LineItem>, I>>(
    object: I,
  ): CInventoryPurchaseInitRequest_LineItem {
    const message = createBaseCInventoryPurchaseInitRequest_LineItem();
    message.itemdefid = object.itemdefid ?? 0;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseCInventoryPurchaseInitResponse(): CInventoryPurchaseInitResponse {
  return { orderid: 0, transid: 0 };
}

export const CInventoryPurchaseInitResponse = {
  encode(message: CInventoryPurchaseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderid !== 0) {
      writer.uint32(8).uint64(message.orderid);
    }
    if (message.transid !== 0) {
      writer.uint32(16).uint64(message.transid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryPurchaseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryPurchaseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.transid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryPurchaseInitResponse {
    return {
      orderid: isSet(object.orderid) ? Number(object.orderid) : 0,
      transid: isSet(object.transid) ? Number(object.transid) : 0,
    };
  },

  toJSON(message: CInventoryPurchaseInitResponse): unknown {
    const obj: any = {};
    message.orderid !== undefined && (obj.orderid = Math.round(message.orderid));
    message.transid !== undefined && (obj.transid = Math.round(message.transid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryPurchaseInitResponse>, I>>(base?: I): CInventoryPurchaseInitResponse {
    return CInventoryPurchaseInitResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryPurchaseInitResponse>, I>>(
    object: I,
  ): CInventoryPurchaseInitResponse {
    const message = createBaseCInventoryPurchaseInitResponse();
    message.orderid = object.orderid ?? 0;
    message.transid = object.transid ?? 0;
    return message;
  },
};

function createBaseCInventoryPurchaseFinalizeRequest(): CInventoryPurchaseFinalizeRequest {
  return { appid: 0, language: 0, orderid: 0 };
}

export const CInventoryPurchaseFinalizeRequest = {
  encode(message: CInventoryPurchaseFinalizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.language !== 0) {
      writer.uint32(16).int32(message.language);
    }
    if (message.orderid !== 0) {
      writer.uint32(24).uint64(message.orderid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryPurchaseFinalizeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryPurchaseFinalizeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.language = reader.int32();
          break;
        case 3:
          message.orderid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryPurchaseFinalizeRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      language: isSet(object.language) ? Number(object.language) : 0,
      orderid: isSet(object.orderid) ? Number(object.orderid) : 0,
    };
  },

  toJSON(message: CInventoryPurchaseFinalizeRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.language !== undefined && (obj.language = Math.round(message.language));
    message.orderid !== undefined && (obj.orderid = Math.round(message.orderid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryPurchaseFinalizeRequest>, I>>(
    base?: I,
  ): CInventoryPurchaseFinalizeRequest {
    return CInventoryPurchaseFinalizeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryPurchaseFinalizeRequest>, I>>(
    object: I,
  ): CInventoryPurchaseFinalizeRequest {
    const message = createBaseCInventoryPurchaseFinalizeRequest();
    message.appid = object.appid ?? 0;
    message.language = object.language ?? 0;
    message.orderid = object.orderid ?? 0;
    return message;
  },
};

function createBaseCInventoryInspectItemRequest(): CInventoryInspectItemRequest {
  return { itemdefid: 0, itemid: 0, tags: "" };
}

export const CInventoryInspectItemRequest = {
  encode(message: CInventoryInspectItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemdefid !== 0) {
      writer.uint32(8).uint64(message.itemdefid);
    }
    if (message.itemid !== 0) {
      writer.uint32(17).fixed64(message.itemid);
    }
    if (message.tags !== "") {
      writer.uint32(26).string(message.tags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryInspectItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryInspectItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemdefid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.itemid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.tags = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryInspectItemRequest {
    return {
      itemdefid: isSet(object.itemdefid) ? Number(object.itemdefid) : 0,
      itemid: isSet(object.itemid) ? Number(object.itemid) : 0,
      tags: isSet(object.tags) ? String(object.tags) : "",
    };
  },

  toJSON(message: CInventoryInspectItemRequest): unknown {
    const obj: any = {};
    message.itemdefid !== undefined && (obj.itemdefid = Math.round(message.itemdefid));
    message.itemid !== undefined && (obj.itemid = Math.round(message.itemid));
    message.tags !== undefined && (obj.tags = message.tags);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryInspectItemRequest>, I>>(base?: I): CInventoryInspectItemRequest {
    return CInventoryInspectItemRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryInspectItemRequest>, I>>(object: I): CInventoryInspectItemRequest {
    const message = createBaseCInventoryInspectItemRequest();
    message.itemdefid = object.itemdefid ?? 0;
    message.itemid = object.itemid ?? 0;
    message.tags = object.tags ?? "";
    return message;
  },
};

function createBaseCInventoryClientNewItemsNotification(): CInventoryClientNewItemsNotification {
  return { appid: 0, inventoryResponse: undefined };
}

export const CInventoryClientNewItemsNotification = {
  encode(message: CInventoryClientNewItemsNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.inventoryResponse !== undefined) {
      CInventoryResponse.encode(message.inventoryResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CInventoryClientNewItemsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCInventoryClientNewItemsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.inventoryResponse = CInventoryResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CInventoryClientNewItemsNotification {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      inventoryResponse: isSet(object.inventoryResponse)
        ? CInventoryResponse.fromJSON(object.inventoryResponse)
        : undefined,
    };
  },

  toJSON(message: CInventoryClientNewItemsNotification): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.inventoryResponse !== undefined && (obj.inventoryResponse = message.inventoryResponse
      ? CInventoryResponse.toJSON(message.inventoryResponse)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CInventoryClientNewItemsNotification>, I>>(
    base?: I,
  ): CInventoryClientNewItemsNotification {
    return CInventoryClientNewItemsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CInventoryClientNewItemsNotification>, I>>(
    object: I,
  ): CInventoryClientNewItemsNotification {
    const message = createBaseCInventoryClientNewItemsNotification();
    message.appid = object.appid ?? 0;
    message.inventoryResponse = (object.inventoryResponse !== undefined && object.inventoryResponse !== null)
      ? CInventoryResponse.fromPartial(object.inventoryResponse)
      : undefined;
    return message;
  },
};

export interface Inventory {
  GetInventory(request: CInventoryGetInventoryRequest): Promise<CInventoryResponse>;
  ExchangeItem(request: CInventoryExchangeItemRequest): Promise<CInventoryResponse>;
  GetEligiblePromoItemDefIDs(
    request: CInventoryGetEligiblePromoItemDefIDsRequest,
  ): Promise<CInventoryGetEligiblePromoItemDefIDsResponse>;
  AddPromoItem(request: CInventoryAddItemRequest): Promise<CInventoryResponse>;
  SafeModifyItems(request: CInventoryModifyItemsRequest): Promise<CInventoryResponse>;
  ConsumePlaytime(request: CInventoryConsumePlaytimeRequest): Promise<CInventoryResponse>;
  ConsumeItem(request: CInventoryConsumeItemRequest): Promise<CInventoryResponse>;
  DevGenerateItem(request: CInventoryAddItemRequest): Promise<CInventoryResponse>;
  DevSetNextDrop(request: CInventoryDevSetNextDropRequest): Promise<CInventoryResponse>;
  SplitItemStack(request: CInventorySplitItemStackRequest): Promise<CInventoryResponse>;
  CombineItemStacks(request: CInventoryCombineItemStacksRequest): Promise<CInventoryResponse>;
  GetItemDefMeta(request: CInventoryGetItemDefMetaRequest): Promise<CInventoryGetItemDefMetaResponse>;
  GetUserPurchaseInfo(request: CInventoryGetUserPurchaseInfoRequest): Promise<CInventoryGetUserPurchaseInfoResponse>;
  PurchaseInit(request: CInventoryPurchaseInitRequest): Promise<CInventoryPurchaseInitResponse>;
  PurchaseFinalize(request: CInventoryPurchaseFinalizeRequest): Promise<CInventoryResponse>;
  InspectItem(request: CInventoryInspectItemRequest): Promise<CInventoryResponse>;
}

export class InventoryClientImpl implements Inventory {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Inventory";
    this.rpc = rpc;
    this.GetInventory = this.GetInventory.bind(this);
    this.ExchangeItem = this.ExchangeItem.bind(this);
    this.GetEligiblePromoItemDefIDs = this.GetEligiblePromoItemDefIDs.bind(this);
    this.AddPromoItem = this.AddPromoItem.bind(this);
    this.SafeModifyItems = this.SafeModifyItems.bind(this);
    this.ConsumePlaytime = this.ConsumePlaytime.bind(this);
    this.ConsumeItem = this.ConsumeItem.bind(this);
    this.DevGenerateItem = this.DevGenerateItem.bind(this);
    this.DevSetNextDrop = this.DevSetNextDrop.bind(this);
    this.SplitItemStack = this.SplitItemStack.bind(this);
    this.CombineItemStacks = this.CombineItemStacks.bind(this);
    this.GetItemDefMeta = this.GetItemDefMeta.bind(this);
    this.GetUserPurchaseInfo = this.GetUserPurchaseInfo.bind(this);
    this.PurchaseInit = this.PurchaseInit.bind(this);
    this.PurchaseFinalize = this.PurchaseFinalize.bind(this);
    this.InspectItem = this.InspectItem.bind(this);
  }
  GetInventory(request: CInventoryGetInventoryRequest): Promise<CInventoryResponse> {
    const data = CInventoryGetInventoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInventory", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  ExchangeItem(request: CInventoryExchangeItemRequest): Promise<CInventoryResponse> {
    const data = CInventoryExchangeItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExchangeItem", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  GetEligiblePromoItemDefIDs(
    request: CInventoryGetEligiblePromoItemDefIDsRequest,
  ): Promise<CInventoryGetEligiblePromoItemDefIDsResponse> {
    const data = CInventoryGetEligiblePromoItemDefIDsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetEligiblePromoItemDefIDs", data);
    return promise.then((data) => CInventoryGetEligiblePromoItemDefIDsResponse.decode(new _m0.Reader(data)));
  }

  AddPromoItem(request: CInventoryAddItemRequest): Promise<CInventoryResponse> {
    const data = CInventoryAddItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddPromoItem", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  SafeModifyItems(request: CInventoryModifyItemsRequest): Promise<CInventoryResponse> {
    const data = CInventoryModifyItemsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SafeModifyItems", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  ConsumePlaytime(request: CInventoryConsumePlaytimeRequest): Promise<CInventoryResponse> {
    const data = CInventoryConsumePlaytimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConsumePlaytime", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  ConsumeItem(request: CInventoryConsumeItemRequest): Promise<CInventoryResponse> {
    const data = CInventoryConsumeItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ConsumeItem", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  DevGenerateItem(request: CInventoryAddItemRequest): Promise<CInventoryResponse> {
    const data = CInventoryAddItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DevGenerateItem", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  DevSetNextDrop(request: CInventoryDevSetNextDropRequest): Promise<CInventoryResponse> {
    const data = CInventoryDevSetNextDropRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DevSetNextDrop", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  SplitItemStack(request: CInventorySplitItemStackRequest): Promise<CInventoryResponse> {
    const data = CInventorySplitItemStackRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SplitItemStack", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  CombineItemStacks(request: CInventoryCombineItemStacksRequest): Promise<CInventoryResponse> {
    const data = CInventoryCombineItemStacksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CombineItemStacks", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  GetItemDefMeta(request: CInventoryGetItemDefMetaRequest): Promise<CInventoryGetItemDefMetaResponse> {
    const data = CInventoryGetItemDefMetaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetItemDefMeta", data);
    return promise.then((data) => CInventoryGetItemDefMetaResponse.decode(new _m0.Reader(data)));
  }

  GetUserPurchaseInfo(request: CInventoryGetUserPurchaseInfoRequest): Promise<CInventoryGetUserPurchaseInfoResponse> {
    const data = CInventoryGetUserPurchaseInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserPurchaseInfo", data);
    return promise.then((data) => CInventoryGetUserPurchaseInfoResponse.decode(new _m0.Reader(data)));
  }

  PurchaseInit(request: CInventoryPurchaseInitRequest): Promise<CInventoryPurchaseInitResponse> {
    const data = CInventoryPurchaseInitRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PurchaseInit", data);
    return promise.then((data) => CInventoryPurchaseInitResponse.decode(new _m0.Reader(data)));
  }

  PurchaseFinalize(request: CInventoryPurchaseFinalizeRequest): Promise<CInventoryResponse> {
    const data = CInventoryPurchaseFinalizeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PurchaseFinalize", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }

  InspectItem(request: CInventoryInspectItemRequest): Promise<CInventoryResponse> {
    const data = CInventoryInspectItemRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InspectItem", data);
    return promise.then((data) => CInventoryResponse.decode(new _m0.Reader(data)));
  }
}

export interface InventoryClient {
  NotifyNewItems(request: CInventoryClientNewItemsNotification): Promise<NoResponse>;
}

export class InventoryClientClientImpl implements InventoryClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "InventoryClient";
    this.rpc = rpc;
    this.NotifyNewItems = this.NotifyNewItems.bind(this);
  }
  NotifyNewItems(request: CInventoryClientNewItemsNotification): Promise<NoResponse> {
    const data = CInventoryClientNewItemsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyNewItems", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
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
