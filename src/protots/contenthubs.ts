/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EContentHubDiscountFilterType {
  k_EContentHubDiscountFilterType_None = 0,
  k_EContentHubDiscountFilterType_DiscountsOnly = 1,
  k_EContentHubDiscountFilterType_PrioritizeDiscounts = 2,
  UNRECOGNIZED = -1,
}

export function eContentHubDiscountFilterTypeFromJSON(object: any): EContentHubDiscountFilterType {
  switch (object) {
    case 0:
    case "k_EContentHubDiscountFilterType_None":
      return EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_None;
    case 1:
    case "k_EContentHubDiscountFilterType_DiscountsOnly":
      return EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_DiscountsOnly;
    case 2:
    case "k_EContentHubDiscountFilterType_PrioritizeDiscounts":
      return EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_PrioritizeDiscounts;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EContentHubDiscountFilterType.UNRECOGNIZED;
  }
}

export function eContentHubDiscountFilterTypeToJSON(object: EContentHubDiscountFilterType): string {
  switch (object) {
    case EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_None:
      return "k_EContentHubDiscountFilterType_None";
    case EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_DiscountsOnly:
      return "k_EContentHubDiscountFilterType_DiscountsOnly";
    case EContentHubDiscountFilterType.k_EContentHubDiscountFilterType_PrioritizeDiscounts:
      return "k_EContentHubDiscountFilterType_PrioritizeDiscounts";
    case EContentHubDiscountFilterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CStorePageFilter {
  saleFilter: CStorePageFilter_SalePageFilter | undefined;
  contentHubFilter: CStorePageFilter_ContentHubFilter | undefined;
  storeFilters: CStorePageFilter_StoreFilter[];
}

export interface CStorePageFilter_SalePageFilter {
  saleTagid: number;
}

export interface CStorePageFilter_ContentHubFilter {
  hubType: string;
  hubCategory: string;
  hubTagid: number;
  discountFilter: EContentHubDiscountFilterType;
  optin: CStorePageFilter_ContentHubFilter_OptInInfo | undefined;
}

export interface CStorePageFilter_ContentHubFilter_OptInInfo {
  name: string;
  optinTagid: number;
  pruneTagid: number;
  optinOnly: boolean;
}

export interface CStorePageFilter_StoreFilter {
  filterJson: string;
  cacheKey: string;
}

function createBaseCStorePageFilter(): CStorePageFilter {
  return { saleFilter: undefined, contentHubFilter: undefined, storeFilters: [] };
}

export const CStorePageFilter = {
  encode(message: CStorePageFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.saleFilter !== undefined) {
      CStorePageFilter_SalePageFilter.encode(message.saleFilter, writer.uint32(10).fork()).ldelim();
    }
    if (message.contentHubFilter !== undefined) {
      CStorePageFilter_ContentHubFilter.encode(message.contentHubFilter, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storeFilters) {
      CStorePageFilter_StoreFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePageFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePageFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saleFilter = CStorePageFilter_SalePageFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.contentHubFilter = CStorePageFilter_ContentHubFilter.decode(reader, reader.uint32());
          break;
        case 3:
          message.storeFilters.push(CStorePageFilter_StoreFilter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePageFilter {
    return {
      saleFilter: isSet(object.saleFilter) ? CStorePageFilter_SalePageFilter.fromJSON(object.saleFilter) : undefined,
      contentHubFilter: isSet(object.contentHubFilter)
        ? CStorePageFilter_ContentHubFilter.fromJSON(object.contentHubFilter)
        : undefined,
      storeFilters: Array.isArray(object?.storeFilters)
        ? object.storeFilters.map((e: any) => CStorePageFilter_StoreFilter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CStorePageFilter): unknown {
    const obj: any = {};
    message.saleFilter !== undefined &&
      (obj.saleFilter = message.saleFilter ? CStorePageFilter_SalePageFilter.toJSON(message.saleFilter) : undefined);
    message.contentHubFilter !== undefined && (obj.contentHubFilter = message.contentHubFilter
      ? CStorePageFilter_ContentHubFilter.toJSON(message.contentHubFilter)
      : undefined);
    if (message.storeFilters) {
      obj.storeFilters = message.storeFilters.map((e) => e ? CStorePageFilter_StoreFilter.toJSON(e) : undefined);
    } else {
      obj.storeFilters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePageFilter>, I>>(base?: I): CStorePageFilter {
    return CStorePageFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePageFilter>, I>>(object: I): CStorePageFilter {
    const message = createBaseCStorePageFilter();
    message.saleFilter = (object.saleFilter !== undefined && object.saleFilter !== null)
      ? CStorePageFilter_SalePageFilter.fromPartial(object.saleFilter)
      : undefined;
    message.contentHubFilter = (object.contentHubFilter !== undefined && object.contentHubFilter !== null)
      ? CStorePageFilter_ContentHubFilter.fromPartial(object.contentHubFilter)
      : undefined;
    message.storeFilters = object.storeFilters?.map((e) => CStorePageFilter_StoreFilter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCStorePageFilter_SalePageFilter(): CStorePageFilter_SalePageFilter {
  return { saleTagid: 0 };
}

export const CStorePageFilter_SalePageFilter = {
  encode(message: CStorePageFilter_SalePageFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.saleTagid !== 0) {
      writer.uint32(8).uint32(message.saleTagid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePageFilter_SalePageFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePageFilter_SalePageFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saleTagid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePageFilter_SalePageFilter {
    return { saleTagid: isSet(object.saleTagid) ? Number(object.saleTagid) : 0 };
  },

  toJSON(message: CStorePageFilter_SalePageFilter): unknown {
    const obj: any = {};
    message.saleTagid !== undefined && (obj.saleTagid = Math.round(message.saleTagid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePageFilter_SalePageFilter>, I>>(base?: I): CStorePageFilter_SalePageFilter {
    return CStorePageFilter_SalePageFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePageFilter_SalePageFilter>, I>>(
    object: I,
  ): CStorePageFilter_SalePageFilter {
    const message = createBaseCStorePageFilter_SalePageFilter();
    message.saleTagid = object.saleTagid ?? 0;
    return message;
  },
};

function createBaseCStorePageFilter_ContentHubFilter(): CStorePageFilter_ContentHubFilter {
  return { hubType: "", hubCategory: "", hubTagid: 0, discountFilter: 0, optin: undefined };
}

export const CStorePageFilter_ContentHubFilter = {
  encode(message: CStorePageFilter_ContentHubFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hubType !== "") {
      writer.uint32(10).string(message.hubType);
    }
    if (message.hubCategory !== "") {
      writer.uint32(18).string(message.hubCategory);
    }
    if (message.hubTagid !== 0) {
      writer.uint32(24).uint32(message.hubTagid);
    }
    if (message.discountFilter !== 0) {
      writer.uint32(32).int32(message.discountFilter);
    }
    if (message.optin !== undefined) {
      CStorePageFilter_ContentHubFilter_OptInInfo.encode(message.optin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePageFilter_ContentHubFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePageFilter_ContentHubFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hubType = reader.string();
          break;
        case 2:
          message.hubCategory = reader.string();
          break;
        case 3:
          message.hubTagid = reader.uint32();
          break;
        case 4:
          message.discountFilter = reader.int32() as any;
          break;
        case 5:
          message.optin = CStorePageFilter_ContentHubFilter_OptInInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePageFilter_ContentHubFilter {
    return {
      hubType: isSet(object.hubType) ? String(object.hubType) : "",
      hubCategory: isSet(object.hubCategory) ? String(object.hubCategory) : "",
      hubTagid: isSet(object.hubTagid) ? Number(object.hubTagid) : 0,
      discountFilter: isSet(object.discountFilter) ? eContentHubDiscountFilterTypeFromJSON(object.discountFilter) : 0,
      optin: isSet(object.optin) ? CStorePageFilter_ContentHubFilter_OptInInfo.fromJSON(object.optin) : undefined,
    };
  },

  toJSON(message: CStorePageFilter_ContentHubFilter): unknown {
    const obj: any = {};
    message.hubType !== undefined && (obj.hubType = message.hubType);
    message.hubCategory !== undefined && (obj.hubCategory = message.hubCategory);
    message.hubTagid !== undefined && (obj.hubTagid = Math.round(message.hubTagid));
    message.discountFilter !== undefined &&
      (obj.discountFilter = eContentHubDiscountFilterTypeToJSON(message.discountFilter));
    message.optin !== undefined &&
      (obj.optin = message.optin ? CStorePageFilter_ContentHubFilter_OptInInfo.toJSON(message.optin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePageFilter_ContentHubFilter>, I>>(
    base?: I,
  ): CStorePageFilter_ContentHubFilter {
    return CStorePageFilter_ContentHubFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePageFilter_ContentHubFilter>, I>>(
    object: I,
  ): CStorePageFilter_ContentHubFilter {
    const message = createBaseCStorePageFilter_ContentHubFilter();
    message.hubType = object.hubType ?? "";
    message.hubCategory = object.hubCategory ?? "";
    message.hubTagid = object.hubTagid ?? 0;
    message.discountFilter = object.discountFilter ?? 0;
    message.optin = (object.optin !== undefined && object.optin !== null)
      ? CStorePageFilter_ContentHubFilter_OptInInfo.fromPartial(object.optin)
      : undefined;
    return message;
  },
};

function createBaseCStorePageFilter_ContentHubFilter_OptInInfo(): CStorePageFilter_ContentHubFilter_OptInInfo {
  return { name: "", optinTagid: 0, pruneTagid: 0, optinOnly: false };
}

export const CStorePageFilter_ContentHubFilter_OptInInfo = {
  encode(message: CStorePageFilter_ContentHubFilter_OptInInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.optinTagid !== 0) {
      writer.uint32(16).uint32(message.optinTagid);
    }
    if (message.pruneTagid !== 0) {
      writer.uint32(24).uint32(message.pruneTagid);
    }
    if (message.optinOnly === true) {
      writer.uint32(32).bool(message.optinOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePageFilter_ContentHubFilter_OptInInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePageFilter_ContentHubFilter_OptInInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.optinTagid = reader.uint32();
          break;
        case 3:
          message.pruneTagid = reader.uint32();
          break;
        case 4:
          message.optinOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePageFilter_ContentHubFilter_OptInInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      optinTagid: isSet(object.optinTagid) ? Number(object.optinTagid) : 0,
      pruneTagid: isSet(object.pruneTagid) ? Number(object.pruneTagid) : 0,
      optinOnly: isSet(object.optinOnly) ? Boolean(object.optinOnly) : false,
    };
  },

  toJSON(message: CStorePageFilter_ContentHubFilter_OptInInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.optinTagid !== undefined && (obj.optinTagid = Math.round(message.optinTagid));
    message.pruneTagid !== undefined && (obj.pruneTagid = Math.round(message.pruneTagid));
    message.optinOnly !== undefined && (obj.optinOnly = message.optinOnly);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePageFilter_ContentHubFilter_OptInInfo>, I>>(
    base?: I,
  ): CStorePageFilter_ContentHubFilter_OptInInfo {
    return CStorePageFilter_ContentHubFilter_OptInInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePageFilter_ContentHubFilter_OptInInfo>, I>>(
    object: I,
  ): CStorePageFilter_ContentHubFilter_OptInInfo {
    const message = createBaseCStorePageFilter_ContentHubFilter_OptInInfo();
    message.name = object.name ?? "";
    message.optinTagid = object.optinTagid ?? 0;
    message.pruneTagid = object.pruneTagid ?? 0;
    message.optinOnly = object.optinOnly ?? false;
    return message;
  },
};

function createBaseCStorePageFilter_StoreFilter(): CStorePageFilter_StoreFilter {
  return { filterJson: "", cacheKey: "" };
}

export const CStorePageFilter_StoreFilter = {
  encode(message: CStorePageFilter_StoreFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filterJson !== "") {
      writer.uint32(10).string(message.filterJson);
    }
    if (message.cacheKey !== "") {
      writer.uint32(18).string(message.cacheKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CStorePageFilter_StoreFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCStorePageFilter_StoreFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filterJson = reader.string();
          break;
        case 2:
          message.cacheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CStorePageFilter_StoreFilter {
    return {
      filterJson: isSet(object.filterJson) ? String(object.filterJson) : "",
      cacheKey: isSet(object.cacheKey) ? String(object.cacheKey) : "",
    };
  },

  toJSON(message: CStorePageFilter_StoreFilter): unknown {
    const obj: any = {};
    message.filterJson !== undefined && (obj.filterJson = message.filterJson);
    message.cacheKey !== undefined && (obj.cacheKey = message.cacheKey);
    return obj;
  },

  create<I extends Exact<DeepPartial<CStorePageFilter_StoreFilter>, I>>(base?: I): CStorePageFilter_StoreFilter {
    return CStorePageFilter_StoreFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CStorePageFilter_StoreFilter>, I>>(object: I): CStorePageFilter_StoreFilter {
    const message = createBaseCStorePageFilter_StoreFilter();
    message.filterJson = object.filterJson ?? "";
    message.cacheKey = object.cacheKey ?? "";
    return message;
  },
};

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
