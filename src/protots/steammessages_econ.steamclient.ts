/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CEconGetInventoryItemsWithDescriptionsRequest {
  steamid: number;
  appid: number;
  contextid: number;
  getDescriptions: boolean;
  forTradeOfferVerification: boolean;
  language: string;
  filters: CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions | undefined;
  startAssetid: number;
  count: number;
}

export interface CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
  assetids: number[];
  currencyids: number[];
  tradableOnly: boolean;
  marketableOnly: boolean;
}

export interface CEconAsset {
  appid: number;
  contextid: number;
  assetid: number;
  classid: number;
  instanceid: number;
  currencyid: number;
  amount: number;
  missing: boolean;
  estUsd: number;
}

export interface CEconItemDescriptionLine {
  type: string;
  value: string;
  color: string;
  label: string;
}

export interface CEconItemAction {
  link: string;
  name: string;
}

export interface CEconItemDescription {
  appid: number;
  classid: number;
  instanceid: number;
  currency: boolean;
  backgroundColor: string;
  iconUrl: string;
  iconUrlLarge: string;
  descriptions: CEconItemDescriptionLine[];
  tradable: boolean;
  actions: CEconItemAction[];
  ownerDescriptions: CEconItemDescriptionLine[];
  ownerActions: CEconItemAction[];
  fraudwarnings: string[];
  name: string;
  nameColor: string;
  type: string;
  marketName: string;
  marketHashName: string;
  marketFee: string;
  marketFeeApp: number;
  containedItem: CEconItemDescription | undefined;
  marketActions: CEconItemAction[];
  commodity: boolean;
  marketTradableRestriction: number;
  marketMarketableRestriction: number;
  marketable: boolean;
  tags: CEconItemTag[];
  itemExpiration: string;
  marketBuyCountryRestriction: string;
  marketSellCountryRestriction: string;
}

export interface CEconItemTag {
  appid: number;
  category: string;
  internalName: string;
  localizedCategoryName: string;
  localizedTagName: string;
  color: string;
}

export interface CEconGetInventoryItemsWithDescriptionsResponse {
  assets: CEconAsset[];
  descriptions: CEconItemDescription[];
  missingAssets: CEconAsset[];
  moreItems: boolean;
  lastAssetid: number;
  totalInventoryCount: number;
}

export interface CEconGetTradeOfferAccessTokenRequest {
  generateNewToken: boolean;
}

export interface CEconGetTradeOfferAccessTokenResponse {
  tradeOfferAccessToken: string;
}

export interface CEconClientGetItemShopOverlayAuthURLRequest {
  returnUrl: string;
}

export interface CEconClientGetItemShopOverlayAuthURLResponse {
  url: string;
}

export interface CEconGetAssetClassInfoRequest {
  language: string;
  appid: number;
  classes: CEconGetAssetClassInfoRequest_Class[];
}

export interface CEconGetAssetClassInfoRequest_Class {
  classid: number;
  instanceid: number;
}

export interface CEconGetAssetClassInfoResponse {
  descriptions: CEconItemDescription[];
}

function createBaseCEconGetInventoryItemsWithDescriptionsRequest(): CEconGetInventoryItemsWithDescriptionsRequest {
  return {
    steamid: 0,
    appid: 0,
    contextid: 0,
    getDescriptions: false,
    forTradeOfferVerification: false,
    language: "",
    filters: undefined,
    startAssetid: 0,
    count: 0,
  };
}

export const CEconGetInventoryItemsWithDescriptionsRequest = {
  encode(message: CEconGetInventoryItemsWithDescriptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.contextid !== 0) {
      writer.uint32(24).uint64(message.contextid);
    }
    if (message.getDescriptions === true) {
      writer.uint32(32).bool(message.getDescriptions);
    }
    if (message.forTradeOfferVerification === true) {
      writer.uint32(80).bool(message.forTradeOfferVerification);
    }
    if (message.language !== "") {
      writer.uint32(42).string(message.language);
    }
    if (message.filters !== undefined) {
      CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.encode(message.filters, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.startAssetid !== 0) {
      writer.uint32(64).uint64(message.startAssetid);
    }
    if (message.count !== 0) {
      writer.uint32(72).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetInventoryItemsWithDescriptionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetInventoryItemsWithDescriptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.contextid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.getDescriptions = reader.bool();
          break;
        case 10:
          message.forTradeOfferVerification = reader.bool();
          break;
        case 5:
          message.language = reader.string();
          break;
        case 6:
          message.filters = CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.decode(reader, reader.uint32());
          break;
        case 8:
          message.startAssetid = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetInventoryItemsWithDescriptionsRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      contextid: isSet(object.contextid) ? Number(object.contextid) : 0,
      getDescriptions: isSet(object.getDescriptions) ? Boolean(object.getDescriptions) : false,
      forTradeOfferVerification: isSet(object.forTradeOfferVerification)
        ? Boolean(object.forTradeOfferVerification)
        : false,
      language: isSet(object.language) ? String(object.language) : "",
      filters: isSet(object.filters)
        ? CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.fromJSON(object.filters)
        : undefined,
      startAssetid: isSet(object.startAssetid) ? Number(object.startAssetid) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CEconGetInventoryItemsWithDescriptionsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.contextid !== undefined && (obj.contextid = Math.round(message.contextid));
    message.getDescriptions !== undefined && (obj.getDescriptions = message.getDescriptions);
    message.forTradeOfferVerification !== undefined &&
      (obj.forTradeOfferVerification = message.forTradeOfferVerification);
    message.language !== undefined && (obj.language = message.language);
    message.filters !== undefined && (obj.filters = message.filters
      ? CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.toJSON(message.filters)
      : undefined);
    message.startAssetid !== undefined && (obj.startAssetid = Math.round(message.startAssetid));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsRequest>, I>>(
    base?: I,
  ): CEconGetInventoryItemsWithDescriptionsRequest {
    return CEconGetInventoryItemsWithDescriptionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsRequest>, I>>(
    object: I,
  ): CEconGetInventoryItemsWithDescriptionsRequest {
    const message = createBaseCEconGetInventoryItemsWithDescriptionsRequest();
    message.steamid = object.steamid ?? 0;
    message.appid = object.appid ?? 0;
    message.contextid = object.contextid ?? 0;
    message.getDescriptions = object.getDescriptions ?? false;
    message.forTradeOfferVerification = object.forTradeOfferVerification ?? false;
    message.language = object.language ?? "";
    message.filters = (object.filters !== undefined && object.filters !== null)
      ? CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.fromPartial(object.filters)
      : undefined;
    message.startAssetid = object.startAssetid ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCEconGetInventoryItemsWithDescriptionsRequest_FilterOptions(): CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
  return { assetids: [], currencyids: [], tradableOnly: false, marketableOnly: false };
}

export const CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions = {
  encode(
    message: CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.assetids) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.currencyids) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.tradableOnly === true) {
      writer.uint32(24).bool(message.tradableOnly);
    }
    if (message.marketableOnly === true) {
      writer.uint32(32).bool(message.marketableOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetInventoryItemsWithDescriptionsRequest_FilterOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetids.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.assetids.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.currencyids.push(reader.uint32());
            }
          } else {
            message.currencyids.push(reader.uint32());
          }
          break;
        case 3:
          message.tradableOnly = reader.bool();
          break;
        case 4:
          message.marketableOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
    return {
      assetids: Array.isArray(object?.assetids) ? object.assetids.map((e: any) => Number(e)) : [],
      currencyids: Array.isArray(object?.currencyids) ? object.currencyids.map((e: any) => Number(e)) : [],
      tradableOnly: isSet(object.tradableOnly) ? Boolean(object.tradableOnly) : false,
      marketableOnly: isSet(object.marketableOnly) ? Boolean(object.marketableOnly) : false,
    };
  },

  toJSON(message: CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions): unknown {
    const obj: any = {};
    if (message.assetids) {
      obj.assetids = message.assetids.map((e) => Math.round(e));
    } else {
      obj.assetids = [];
    }
    if (message.currencyids) {
      obj.currencyids = message.currencyids.map((e) => Math.round(e));
    } else {
      obj.currencyids = [];
    }
    message.tradableOnly !== undefined && (obj.tradableOnly = message.tradableOnly);
    message.marketableOnly !== undefined && (obj.marketableOnly = message.marketableOnly);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions>, I>>(
    base?: I,
  ): CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
    return CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions>, I>>(
    object: I,
  ): CEconGetInventoryItemsWithDescriptionsRequest_FilterOptions {
    const message = createBaseCEconGetInventoryItemsWithDescriptionsRequest_FilterOptions();
    message.assetids = object.assetids?.map((e) => e) || [];
    message.currencyids = object.currencyids?.map((e) => e) || [];
    message.tradableOnly = object.tradableOnly ?? false;
    message.marketableOnly = object.marketableOnly ?? false;
    return message;
  },
};

function createBaseCEconAsset(): CEconAsset {
  return {
    appid: 0,
    contextid: 0,
    assetid: 0,
    classid: 0,
    instanceid: 0,
    currencyid: 0,
    amount: 0,
    missing: false,
    estUsd: 0,
  };
}

export const CEconAsset = {
  encode(message: CEconAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.contextid !== 0) {
      writer.uint32(16).uint64(message.contextid);
    }
    if (message.assetid !== 0) {
      writer.uint32(24).uint64(message.assetid);
    }
    if (message.classid !== 0) {
      writer.uint32(32).uint64(message.classid);
    }
    if (message.instanceid !== 0) {
      writer.uint32(40).uint64(message.instanceid);
    }
    if (message.currencyid !== 0) {
      writer.uint32(48).uint32(message.currencyid);
    }
    if (message.amount !== 0) {
      writer.uint32(56).int64(message.amount);
    }
    if (message.missing === true) {
      writer.uint32(64).bool(message.missing);
    }
    if (message.estUsd !== 0) {
      writer.uint32(72).int64(message.estUsd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.contextid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.assetid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.classid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.instanceid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.currencyid = reader.uint32();
          break;
        case 7:
          message.amount = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.missing = reader.bool();
          break;
        case 9:
          message.estUsd = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconAsset {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      contextid: isSet(object.contextid) ? Number(object.contextid) : 0,
      assetid: isSet(object.assetid) ? Number(object.assetid) : 0,
      classid: isSet(object.classid) ? Number(object.classid) : 0,
      instanceid: isSet(object.instanceid) ? Number(object.instanceid) : 0,
      currencyid: isSet(object.currencyid) ? Number(object.currencyid) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      missing: isSet(object.missing) ? Boolean(object.missing) : false,
      estUsd: isSet(object.estUsd) ? Number(object.estUsd) : 0,
    };
  },

  toJSON(message: CEconAsset): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.contextid !== undefined && (obj.contextid = Math.round(message.contextid));
    message.assetid !== undefined && (obj.assetid = Math.round(message.assetid));
    message.classid !== undefined && (obj.classid = Math.round(message.classid));
    message.instanceid !== undefined && (obj.instanceid = Math.round(message.instanceid));
    message.currencyid !== undefined && (obj.currencyid = Math.round(message.currencyid));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.missing !== undefined && (obj.missing = message.missing);
    message.estUsd !== undefined && (obj.estUsd = Math.round(message.estUsd));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconAsset>, I>>(base?: I): CEconAsset {
    return CEconAsset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconAsset>, I>>(object: I): CEconAsset {
    const message = createBaseCEconAsset();
    message.appid = object.appid ?? 0;
    message.contextid = object.contextid ?? 0;
    message.assetid = object.assetid ?? 0;
    message.classid = object.classid ?? 0;
    message.instanceid = object.instanceid ?? 0;
    message.currencyid = object.currencyid ?? 0;
    message.amount = object.amount ?? 0;
    message.missing = object.missing ?? false;
    message.estUsd = object.estUsd ?? 0;
    return message;
  },
};

function createBaseCEconItemDescriptionLine(): CEconItemDescriptionLine {
  return { type: "", value: "", color: "", label: "" };
}

export const CEconItemDescriptionLine = {
  encode(message: CEconItemDescriptionLine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.color !== "") {
      writer.uint32(26).string(message.color);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconItemDescriptionLine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemDescriptionLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.color = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconItemDescriptionLine {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? String(object.value) : "",
      color: isSet(object.color) ? String(object.color) : "",
      label: isSet(object.label) ? String(object.label) : "",
    };
  },

  toJSON(message: CEconItemDescriptionLine): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = message.value);
    message.color !== undefined && (obj.color = message.color);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconItemDescriptionLine>, I>>(base?: I): CEconItemDescriptionLine {
    return CEconItemDescriptionLine.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconItemDescriptionLine>, I>>(object: I): CEconItemDescriptionLine {
    const message = createBaseCEconItemDescriptionLine();
    message.type = object.type ?? "";
    message.value = object.value ?? "";
    message.color = object.color ?? "";
    message.label = object.label ?? "";
    return message;
  },
};

function createBaseCEconItemAction(): CEconItemAction {
  return { link: "", name: "" };
}

export const CEconItemAction = {
  encode(message: CEconItemAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.link !== "") {
      writer.uint32(10).string(message.link);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconItemAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.link = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconItemAction {
    return { link: isSet(object.link) ? String(object.link) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CEconItemAction): unknown {
    const obj: any = {};
    message.link !== undefined && (obj.link = message.link);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconItemAction>, I>>(base?: I): CEconItemAction {
    return CEconItemAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconItemAction>, I>>(object: I): CEconItemAction {
    const message = createBaseCEconItemAction();
    message.link = object.link ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCEconItemDescription(): CEconItemDescription {
  return {
    appid: 0,
    classid: 0,
    instanceid: 0,
    currency: false,
    backgroundColor: "",
    iconUrl: "",
    iconUrlLarge: "",
    descriptions: [],
    tradable: false,
    actions: [],
    ownerDescriptions: [],
    ownerActions: [],
    fraudwarnings: [],
    name: "",
    nameColor: "",
    type: "",
    marketName: "",
    marketHashName: "",
    marketFee: "",
    marketFeeApp: 0,
    containedItem: undefined,
    marketActions: [],
    commodity: false,
    marketTradableRestriction: 0,
    marketMarketableRestriction: 0,
    marketable: false,
    tags: [],
    itemExpiration: "",
    marketBuyCountryRestriction: "",
    marketSellCountryRestriction: "",
  };
}

export const CEconItemDescription = {
  encode(message: CEconItemDescription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).int32(message.appid);
    }
    if (message.classid !== 0) {
      writer.uint32(16).uint64(message.classid);
    }
    if (message.instanceid !== 0) {
      writer.uint32(24).uint64(message.instanceid);
    }
    if (message.currency === true) {
      writer.uint32(32).bool(message.currency);
    }
    if (message.backgroundColor !== "") {
      writer.uint32(42).string(message.backgroundColor);
    }
    if (message.iconUrl !== "") {
      writer.uint32(50).string(message.iconUrl);
    }
    if (message.iconUrlLarge !== "") {
      writer.uint32(58).string(message.iconUrlLarge);
    }
    for (const v of message.descriptions) {
      CEconItemDescriptionLine.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.tradable === true) {
      writer.uint32(72).bool(message.tradable);
    }
    for (const v of message.actions) {
      CEconItemAction.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.ownerDescriptions) {
      CEconItemDescriptionLine.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.ownerActions) {
      CEconItemAction.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.fraudwarnings) {
      writer.uint32(106).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(114).string(message.name);
    }
    if (message.nameColor !== "") {
      writer.uint32(122).string(message.nameColor);
    }
    if (message.type !== "") {
      writer.uint32(130).string(message.type);
    }
    if (message.marketName !== "") {
      writer.uint32(138).string(message.marketName);
    }
    if (message.marketHashName !== "") {
      writer.uint32(146).string(message.marketHashName);
    }
    if (message.marketFee !== "") {
      writer.uint32(154).string(message.marketFee);
    }
    if (message.marketFeeApp !== 0) {
      writer.uint32(224).int32(message.marketFeeApp);
    }
    if (message.containedItem !== undefined) {
      CEconItemDescription.encode(message.containedItem, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.marketActions) {
      CEconItemAction.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.commodity === true) {
      writer.uint32(176).bool(message.commodity);
    }
    if (message.marketTradableRestriction !== 0) {
      writer.uint32(184).int32(message.marketTradableRestriction);
    }
    if (message.marketMarketableRestriction !== 0) {
      writer.uint32(192).int32(message.marketMarketableRestriction);
    }
    if (message.marketable === true) {
      writer.uint32(200).bool(message.marketable);
    }
    for (const v of message.tags) {
      CEconItemTag.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    if (message.itemExpiration !== "") {
      writer.uint32(218).string(message.itemExpiration);
    }
    if (message.marketBuyCountryRestriction !== "") {
      writer.uint32(242).string(message.marketBuyCountryRestriction);
    }
    if (message.marketSellCountryRestriction !== "") {
      writer.uint32(250).string(message.marketSellCountryRestriction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconItemDescription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.int32();
          break;
        case 2:
          message.classid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.instanceid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.currency = reader.bool();
          break;
        case 5:
          message.backgroundColor = reader.string();
          break;
        case 6:
          message.iconUrl = reader.string();
          break;
        case 7:
          message.iconUrlLarge = reader.string();
          break;
        case 8:
          message.descriptions.push(CEconItemDescriptionLine.decode(reader, reader.uint32()));
          break;
        case 9:
          message.tradable = reader.bool();
          break;
        case 10:
          message.actions.push(CEconItemAction.decode(reader, reader.uint32()));
          break;
        case 11:
          message.ownerDescriptions.push(CEconItemDescriptionLine.decode(reader, reader.uint32()));
          break;
        case 12:
          message.ownerActions.push(CEconItemAction.decode(reader, reader.uint32()));
          break;
        case 13:
          message.fraudwarnings.push(reader.string());
          break;
        case 14:
          message.name = reader.string();
          break;
        case 15:
          message.nameColor = reader.string();
          break;
        case 16:
          message.type = reader.string();
          break;
        case 17:
          message.marketName = reader.string();
          break;
        case 18:
          message.marketHashName = reader.string();
          break;
        case 19:
          message.marketFee = reader.string();
          break;
        case 28:
          message.marketFeeApp = reader.int32();
          break;
        case 20:
          message.containedItem = CEconItemDescription.decode(reader, reader.uint32());
          break;
        case 21:
          message.marketActions.push(CEconItemAction.decode(reader, reader.uint32()));
          break;
        case 22:
          message.commodity = reader.bool();
          break;
        case 23:
          message.marketTradableRestriction = reader.int32();
          break;
        case 24:
          message.marketMarketableRestriction = reader.int32();
          break;
        case 25:
          message.marketable = reader.bool();
          break;
        case 26:
          message.tags.push(CEconItemTag.decode(reader, reader.uint32()));
          break;
        case 27:
          message.itemExpiration = reader.string();
          break;
        case 30:
          message.marketBuyCountryRestriction = reader.string();
          break;
        case 31:
          message.marketSellCountryRestriction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconItemDescription {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      classid: isSet(object.classid) ? Number(object.classid) : 0,
      instanceid: isSet(object.instanceid) ? Number(object.instanceid) : 0,
      currency: isSet(object.currency) ? Boolean(object.currency) : false,
      backgroundColor: isSet(object.backgroundColor) ? String(object.backgroundColor) : "",
      iconUrl: isSet(object.iconUrl) ? String(object.iconUrl) : "",
      iconUrlLarge: isSet(object.iconUrlLarge) ? String(object.iconUrlLarge) : "",
      descriptions: Array.isArray(object?.descriptions)
        ? object.descriptions.map((e: any) => CEconItemDescriptionLine.fromJSON(e))
        : [],
      tradable: isSet(object.tradable) ? Boolean(object.tradable) : false,
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => CEconItemAction.fromJSON(e)) : [],
      ownerDescriptions: Array.isArray(object?.ownerDescriptions)
        ? object.ownerDescriptions.map((e: any) => CEconItemDescriptionLine.fromJSON(e))
        : [],
      ownerActions: Array.isArray(object?.ownerActions)
        ? object.ownerActions.map((e: any) => CEconItemAction.fromJSON(e))
        : [],
      fraudwarnings: Array.isArray(object?.fraudwarnings) ? object.fraudwarnings.map((e: any) => String(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
      nameColor: isSet(object.nameColor) ? String(object.nameColor) : "",
      type: isSet(object.type) ? String(object.type) : "",
      marketName: isSet(object.marketName) ? String(object.marketName) : "",
      marketHashName: isSet(object.marketHashName) ? String(object.marketHashName) : "",
      marketFee: isSet(object.marketFee) ? String(object.marketFee) : "",
      marketFeeApp: isSet(object.marketFeeApp) ? Number(object.marketFeeApp) : 0,
      containedItem: isSet(object.containedItem) ? CEconItemDescription.fromJSON(object.containedItem) : undefined,
      marketActions: Array.isArray(object?.marketActions)
        ? object.marketActions.map((e: any) => CEconItemAction.fromJSON(e))
        : [],
      commodity: isSet(object.commodity) ? Boolean(object.commodity) : false,
      marketTradableRestriction: isSet(object.marketTradableRestriction) ? Number(object.marketTradableRestriction) : 0,
      marketMarketableRestriction: isSet(object.marketMarketableRestriction)
        ? Number(object.marketMarketableRestriction)
        : 0,
      marketable: isSet(object.marketable) ? Boolean(object.marketable) : false,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => CEconItemTag.fromJSON(e))
        : [],
      itemExpiration: isSet(object.itemExpiration) ? String(object.itemExpiration) : "",
      marketBuyCountryRestriction: isSet(object.marketBuyCountryRestriction)
        ? String(object.marketBuyCountryRestriction)
        : "",
      marketSellCountryRestriction: isSet(object.marketSellCountryRestriction)
        ? String(object.marketSellCountryRestriction)
        : "",
    };
  },

  toJSON(message: CEconItemDescription): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.classid !== undefined && (obj.classid = Math.round(message.classid));
    message.instanceid !== undefined && (obj.instanceid = Math.round(message.instanceid));
    message.currency !== undefined && (obj.currency = message.currency);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor);
    message.iconUrl !== undefined && (obj.iconUrl = message.iconUrl);
    message.iconUrlLarge !== undefined && (obj.iconUrlLarge = message.iconUrlLarge);
    if (message.descriptions) {
      obj.descriptions = message.descriptions.map((e) => e ? CEconItemDescriptionLine.toJSON(e) : undefined);
    } else {
      obj.descriptions = [];
    }
    message.tradable !== undefined && (obj.tradable = message.tradable);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? CEconItemAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    if (message.ownerDescriptions) {
      obj.ownerDescriptions = message.ownerDescriptions.map((e) => e ? CEconItemDescriptionLine.toJSON(e) : undefined);
    } else {
      obj.ownerDescriptions = [];
    }
    if (message.ownerActions) {
      obj.ownerActions = message.ownerActions.map((e) => e ? CEconItemAction.toJSON(e) : undefined);
    } else {
      obj.ownerActions = [];
    }
    if (message.fraudwarnings) {
      obj.fraudwarnings = message.fraudwarnings.map((e) => e);
    } else {
      obj.fraudwarnings = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.nameColor !== undefined && (obj.nameColor = message.nameColor);
    message.type !== undefined && (obj.type = message.type);
    message.marketName !== undefined && (obj.marketName = message.marketName);
    message.marketHashName !== undefined && (obj.marketHashName = message.marketHashName);
    message.marketFee !== undefined && (obj.marketFee = message.marketFee);
    message.marketFeeApp !== undefined && (obj.marketFeeApp = Math.round(message.marketFeeApp));
    message.containedItem !== undefined &&
      (obj.containedItem = message.containedItem ? CEconItemDescription.toJSON(message.containedItem) : undefined);
    if (message.marketActions) {
      obj.marketActions = message.marketActions.map((e) => e ? CEconItemAction.toJSON(e) : undefined);
    } else {
      obj.marketActions = [];
    }
    message.commodity !== undefined && (obj.commodity = message.commodity);
    message.marketTradableRestriction !== undefined &&
      (obj.marketTradableRestriction = Math.round(message.marketTradableRestriction));
    message.marketMarketableRestriction !== undefined &&
      (obj.marketMarketableRestriction = Math.round(message.marketMarketableRestriction));
    message.marketable !== undefined && (obj.marketable = message.marketable);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e ? CEconItemTag.toJSON(e) : undefined);
    } else {
      obj.tags = [];
    }
    message.itemExpiration !== undefined && (obj.itemExpiration = message.itemExpiration);
    message.marketBuyCountryRestriction !== undefined &&
      (obj.marketBuyCountryRestriction = message.marketBuyCountryRestriction);
    message.marketSellCountryRestriction !== undefined &&
      (obj.marketSellCountryRestriction = message.marketSellCountryRestriction);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconItemDescription>, I>>(base?: I): CEconItemDescription {
    return CEconItemDescription.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconItemDescription>, I>>(object: I): CEconItemDescription {
    const message = createBaseCEconItemDescription();
    message.appid = object.appid ?? 0;
    message.classid = object.classid ?? 0;
    message.instanceid = object.instanceid ?? 0;
    message.currency = object.currency ?? false;
    message.backgroundColor = object.backgroundColor ?? "";
    message.iconUrl = object.iconUrl ?? "";
    message.iconUrlLarge = object.iconUrlLarge ?? "";
    message.descriptions = object.descriptions?.map((e) => CEconItemDescriptionLine.fromPartial(e)) || [];
    message.tradable = object.tradable ?? false;
    message.actions = object.actions?.map((e) => CEconItemAction.fromPartial(e)) || [];
    message.ownerDescriptions = object.ownerDescriptions?.map((e) => CEconItemDescriptionLine.fromPartial(e)) || [];
    message.ownerActions = object.ownerActions?.map((e) => CEconItemAction.fromPartial(e)) || [];
    message.fraudwarnings = object.fraudwarnings?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.nameColor = object.nameColor ?? "";
    message.type = object.type ?? "";
    message.marketName = object.marketName ?? "";
    message.marketHashName = object.marketHashName ?? "";
    message.marketFee = object.marketFee ?? "";
    message.marketFeeApp = object.marketFeeApp ?? 0;
    message.containedItem = (object.containedItem !== undefined && object.containedItem !== null)
      ? CEconItemDescription.fromPartial(object.containedItem)
      : undefined;
    message.marketActions = object.marketActions?.map((e) => CEconItemAction.fromPartial(e)) || [];
    message.commodity = object.commodity ?? false;
    message.marketTradableRestriction = object.marketTradableRestriction ?? 0;
    message.marketMarketableRestriction = object.marketMarketableRestriction ?? 0;
    message.marketable = object.marketable ?? false;
    message.tags = object.tags?.map((e) => CEconItemTag.fromPartial(e)) || [];
    message.itemExpiration = object.itemExpiration ?? "";
    message.marketBuyCountryRestriction = object.marketBuyCountryRestriction ?? "";
    message.marketSellCountryRestriction = object.marketSellCountryRestriction ?? "";
    return message;
  },
};

function createBaseCEconItemTag(): CEconItemTag {
  return { appid: 0, category: "", internalName: "", localizedCategoryName: "", localizedTagName: "", color: "" };
}

export const CEconItemTag = {
  encode(message: CEconItemTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.category !== "") {
      writer.uint32(18).string(message.category);
    }
    if (message.internalName !== "") {
      writer.uint32(26).string(message.internalName);
    }
    if (message.localizedCategoryName !== "") {
      writer.uint32(34).string(message.localizedCategoryName);
    }
    if (message.localizedTagName !== "") {
      writer.uint32(42).string(message.localizedTagName);
    }
    if (message.color !== "") {
      writer.uint32(50).string(message.color);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconItemTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconItemTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.category = reader.string();
          break;
        case 3:
          message.internalName = reader.string();
          break;
        case 4:
          message.localizedCategoryName = reader.string();
          break;
        case 5:
          message.localizedTagName = reader.string();
          break;
        case 6:
          message.color = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconItemTag {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      category: isSet(object.category) ? String(object.category) : "",
      internalName: isSet(object.internalName) ? String(object.internalName) : "",
      localizedCategoryName: isSet(object.localizedCategoryName) ? String(object.localizedCategoryName) : "",
      localizedTagName: isSet(object.localizedTagName) ? String(object.localizedTagName) : "",
      color: isSet(object.color) ? String(object.color) : "",
    };
  },

  toJSON(message: CEconItemTag): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.category !== undefined && (obj.category = message.category);
    message.internalName !== undefined && (obj.internalName = message.internalName);
    message.localizedCategoryName !== undefined && (obj.localizedCategoryName = message.localizedCategoryName);
    message.localizedTagName !== undefined && (obj.localizedTagName = message.localizedTagName);
    message.color !== undefined && (obj.color = message.color);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconItemTag>, I>>(base?: I): CEconItemTag {
    return CEconItemTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconItemTag>, I>>(object: I): CEconItemTag {
    const message = createBaseCEconItemTag();
    message.appid = object.appid ?? 0;
    message.category = object.category ?? "";
    message.internalName = object.internalName ?? "";
    message.localizedCategoryName = object.localizedCategoryName ?? "";
    message.localizedTagName = object.localizedTagName ?? "";
    message.color = object.color ?? "";
    return message;
  },
};

function createBaseCEconGetInventoryItemsWithDescriptionsResponse(): CEconGetInventoryItemsWithDescriptionsResponse {
  return { assets: [], descriptions: [], missingAssets: [], moreItems: false, lastAssetid: 0, totalInventoryCount: 0 };
}

export const CEconGetInventoryItemsWithDescriptionsResponse = {
  encode(
    message: CEconGetInventoryItemsWithDescriptionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.assets) {
      CEconAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.descriptions) {
      CEconItemDescription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missingAssets) {
      CEconAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.moreItems === true) {
      writer.uint32(32).bool(message.moreItems);
    }
    if (message.lastAssetid !== 0) {
      writer.uint32(40).uint64(message.lastAssetid);
    }
    if (message.totalInventoryCount !== 0) {
      writer.uint32(48).uint32(message.totalInventoryCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetInventoryItemsWithDescriptionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetInventoryItemsWithDescriptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(CEconAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.descriptions.push(CEconItemDescription.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missingAssets.push(CEconAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.moreItems = reader.bool();
          break;
        case 5:
          message.lastAssetid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.totalInventoryCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetInventoryItemsWithDescriptionsResponse {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => CEconAsset.fromJSON(e)) : [],
      descriptions: Array.isArray(object?.descriptions)
        ? object.descriptions.map((e: any) => CEconItemDescription.fromJSON(e))
        : [],
      missingAssets: Array.isArray(object?.missingAssets)
        ? object.missingAssets.map((e: any) => CEconAsset.fromJSON(e))
        : [],
      moreItems: isSet(object.moreItems) ? Boolean(object.moreItems) : false,
      lastAssetid: isSet(object.lastAssetid) ? Number(object.lastAssetid) : 0,
      totalInventoryCount: isSet(object.totalInventoryCount) ? Number(object.totalInventoryCount) : 0,
    };
  },

  toJSON(message: CEconGetInventoryItemsWithDescriptionsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => e ? CEconAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    if (message.descriptions) {
      obj.descriptions = message.descriptions.map((e) => e ? CEconItemDescription.toJSON(e) : undefined);
    } else {
      obj.descriptions = [];
    }
    if (message.missingAssets) {
      obj.missingAssets = message.missingAssets.map((e) => e ? CEconAsset.toJSON(e) : undefined);
    } else {
      obj.missingAssets = [];
    }
    message.moreItems !== undefined && (obj.moreItems = message.moreItems);
    message.lastAssetid !== undefined && (obj.lastAssetid = Math.round(message.lastAssetid));
    message.totalInventoryCount !== undefined && (obj.totalInventoryCount = Math.round(message.totalInventoryCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsResponse>, I>>(
    base?: I,
  ): CEconGetInventoryItemsWithDescriptionsResponse {
    return CEconGetInventoryItemsWithDescriptionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetInventoryItemsWithDescriptionsResponse>, I>>(
    object: I,
  ): CEconGetInventoryItemsWithDescriptionsResponse {
    const message = createBaseCEconGetInventoryItemsWithDescriptionsResponse();
    message.assets = object.assets?.map((e) => CEconAsset.fromPartial(e)) || [];
    message.descriptions = object.descriptions?.map((e) => CEconItemDescription.fromPartial(e)) || [];
    message.missingAssets = object.missingAssets?.map((e) => CEconAsset.fromPartial(e)) || [];
    message.moreItems = object.moreItems ?? false;
    message.lastAssetid = object.lastAssetid ?? 0;
    message.totalInventoryCount = object.totalInventoryCount ?? 0;
    return message;
  },
};

function createBaseCEconGetTradeOfferAccessTokenRequest(): CEconGetTradeOfferAccessTokenRequest {
  return { generateNewToken: false };
}

export const CEconGetTradeOfferAccessTokenRequest = {
  encode(message: CEconGetTradeOfferAccessTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generateNewToken === true) {
      writer.uint32(8).bool(message.generateNewToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetTradeOfferAccessTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetTradeOfferAccessTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generateNewToken = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetTradeOfferAccessTokenRequest {
    return { generateNewToken: isSet(object.generateNewToken) ? Boolean(object.generateNewToken) : false };
  },

  toJSON(message: CEconGetTradeOfferAccessTokenRequest): unknown {
    const obj: any = {};
    message.generateNewToken !== undefined && (obj.generateNewToken = message.generateNewToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetTradeOfferAccessTokenRequest>, I>>(
    base?: I,
  ): CEconGetTradeOfferAccessTokenRequest {
    return CEconGetTradeOfferAccessTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetTradeOfferAccessTokenRequest>, I>>(
    object: I,
  ): CEconGetTradeOfferAccessTokenRequest {
    const message = createBaseCEconGetTradeOfferAccessTokenRequest();
    message.generateNewToken = object.generateNewToken ?? false;
    return message;
  },
};

function createBaseCEconGetTradeOfferAccessTokenResponse(): CEconGetTradeOfferAccessTokenResponse {
  return { tradeOfferAccessToken: "" };
}

export const CEconGetTradeOfferAccessTokenResponse = {
  encode(message: CEconGetTradeOfferAccessTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeOfferAccessToken !== "") {
      writer.uint32(10).string(message.tradeOfferAccessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetTradeOfferAccessTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetTradeOfferAccessTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeOfferAccessToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetTradeOfferAccessTokenResponse {
    return { tradeOfferAccessToken: isSet(object.tradeOfferAccessToken) ? String(object.tradeOfferAccessToken) : "" };
  },

  toJSON(message: CEconGetTradeOfferAccessTokenResponse): unknown {
    const obj: any = {};
    message.tradeOfferAccessToken !== undefined && (obj.tradeOfferAccessToken = message.tradeOfferAccessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetTradeOfferAccessTokenResponse>, I>>(
    base?: I,
  ): CEconGetTradeOfferAccessTokenResponse {
    return CEconGetTradeOfferAccessTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetTradeOfferAccessTokenResponse>, I>>(
    object: I,
  ): CEconGetTradeOfferAccessTokenResponse {
    const message = createBaseCEconGetTradeOfferAccessTokenResponse();
    message.tradeOfferAccessToken = object.tradeOfferAccessToken ?? "";
    return message;
  },
};

function createBaseCEconClientGetItemShopOverlayAuthURLRequest(): CEconClientGetItemShopOverlayAuthURLRequest {
  return { returnUrl: "" };
}

export const CEconClientGetItemShopOverlayAuthURLRequest = {
  encode(message: CEconClientGetItemShopOverlayAuthURLRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnUrl !== "") {
      writer.uint32(10).string(message.returnUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconClientGetItemShopOverlayAuthURLRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconClientGetItemShopOverlayAuthURLRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.returnUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconClientGetItemShopOverlayAuthURLRequest {
    return { returnUrl: isSet(object.returnUrl) ? String(object.returnUrl) : "" };
  },

  toJSON(message: CEconClientGetItemShopOverlayAuthURLRequest): unknown {
    const obj: any = {};
    message.returnUrl !== undefined && (obj.returnUrl = message.returnUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconClientGetItemShopOverlayAuthURLRequest>, I>>(
    base?: I,
  ): CEconClientGetItemShopOverlayAuthURLRequest {
    return CEconClientGetItemShopOverlayAuthURLRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconClientGetItemShopOverlayAuthURLRequest>, I>>(
    object: I,
  ): CEconClientGetItemShopOverlayAuthURLRequest {
    const message = createBaseCEconClientGetItemShopOverlayAuthURLRequest();
    message.returnUrl = object.returnUrl ?? "";
    return message;
  },
};

function createBaseCEconClientGetItemShopOverlayAuthURLResponse(): CEconClientGetItemShopOverlayAuthURLResponse {
  return { url: "" };
}

export const CEconClientGetItemShopOverlayAuthURLResponse = {
  encode(message: CEconClientGetItemShopOverlayAuthURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconClientGetItemShopOverlayAuthURLResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconClientGetItemShopOverlayAuthURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconClientGetItemShopOverlayAuthURLResponse {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: CEconClientGetItemShopOverlayAuthURLResponse): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconClientGetItemShopOverlayAuthURLResponse>, I>>(
    base?: I,
  ): CEconClientGetItemShopOverlayAuthURLResponse {
    return CEconClientGetItemShopOverlayAuthURLResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconClientGetItemShopOverlayAuthURLResponse>, I>>(
    object: I,
  ): CEconClientGetItemShopOverlayAuthURLResponse {
    const message = createBaseCEconClientGetItemShopOverlayAuthURLResponse();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCEconGetAssetClassInfoRequest(): CEconGetAssetClassInfoRequest {
  return { language: "", appid: 0, classes: [] };
}

export const CEconGetAssetClassInfoRequest = {
  encode(message: CEconGetAssetClassInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    for (const v of message.classes) {
      CEconGetAssetClassInfoRequest_Class.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetAssetClassInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetAssetClassInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.classes.push(CEconGetAssetClassInfoRequest_Class.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetAssetClassInfoRequest {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => CEconGetAssetClassInfoRequest_Class.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CEconGetAssetClassInfoRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.classes) {
      obj.classes = message.classes.map((e) => e ? CEconGetAssetClassInfoRequest_Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetAssetClassInfoRequest>, I>>(base?: I): CEconGetAssetClassInfoRequest {
    return CEconGetAssetClassInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetAssetClassInfoRequest>, I>>(
    object: I,
  ): CEconGetAssetClassInfoRequest {
    const message = createBaseCEconGetAssetClassInfoRequest();
    message.language = object.language ?? "";
    message.appid = object.appid ?? 0;
    message.classes = object.classes?.map((e) => CEconGetAssetClassInfoRequest_Class.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCEconGetAssetClassInfoRequest_Class(): CEconGetAssetClassInfoRequest_Class {
  return { classid: 0, instanceid: 0 };
}

export const CEconGetAssetClassInfoRequest_Class = {
  encode(message: CEconGetAssetClassInfoRequest_Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classid !== 0) {
      writer.uint32(8).uint64(message.classid);
    }
    if (message.instanceid !== 0) {
      writer.uint32(16).uint64(message.instanceid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetAssetClassInfoRequest_Class {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetAssetClassInfoRequest_Class();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.instanceid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetAssetClassInfoRequest_Class {
    return {
      classid: isSet(object.classid) ? Number(object.classid) : 0,
      instanceid: isSet(object.instanceid) ? Number(object.instanceid) : 0,
    };
  },

  toJSON(message: CEconGetAssetClassInfoRequest_Class): unknown {
    const obj: any = {};
    message.classid !== undefined && (obj.classid = Math.round(message.classid));
    message.instanceid !== undefined && (obj.instanceid = Math.round(message.instanceid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetAssetClassInfoRequest_Class>, I>>(
    base?: I,
  ): CEconGetAssetClassInfoRequest_Class {
    return CEconGetAssetClassInfoRequest_Class.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetAssetClassInfoRequest_Class>, I>>(
    object: I,
  ): CEconGetAssetClassInfoRequest_Class {
    const message = createBaseCEconGetAssetClassInfoRequest_Class();
    message.classid = object.classid ?? 0;
    message.instanceid = object.instanceid ?? 0;
    return message;
  },
};

function createBaseCEconGetAssetClassInfoResponse(): CEconGetAssetClassInfoResponse {
  return { descriptions: [] };
}

export const CEconGetAssetClassInfoResponse = {
  encode(message: CEconGetAssetClassInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.descriptions) {
      CEconItemDescription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEconGetAssetClassInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEconGetAssetClassInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.descriptions.push(CEconItemDescription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEconGetAssetClassInfoResponse {
    return {
      descriptions: Array.isArray(object?.descriptions)
        ? object.descriptions.map((e: any) => CEconItemDescription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CEconGetAssetClassInfoResponse): unknown {
    const obj: any = {};
    if (message.descriptions) {
      obj.descriptions = message.descriptions.map((e) => e ? CEconItemDescription.toJSON(e) : undefined);
    } else {
      obj.descriptions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CEconGetAssetClassInfoResponse>, I>>(base?: I): CEconGetAssetClassInfoResponse {
    return CEconGetAssetClassInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEconGetAssetClassInfoResponse>, I>>(
    object: I,
  ): CEconGetAssetClassInfoResponse {
    const message = createBaseCEconGetAssetClassInfoResponse();
    message.descriptions = object.descriptions?.map((e) => CEconItemDescription.fromPartial(e)) || [];
    return message;
  },
};

export interface Econ {
  GetInventoryItemsWithDescriptions(
    request: CEconGetInventoryItemsWithDescriptionsRequest,
  ): Promise<CEconGetInventoryItemsWithDescriptionsResponse>;
  GetTradeOfferAccessToken(
    request: CEconGetTradeOfferAccessTokenRequest,
  ): Promise<CEconGetTradeOfferAccessTokenResponse>;
  ClientGetItemShopOverlayAuthURL(
    request: CEconClientGetItemShopOverlayAuthURLRequest,
  ): Promise<CEconClientGetItemShopOverlayAuthURLResponse>;
  GetAssetClassInfo(request: CEconGetAssetClassInfoRequest): Promise<CEconGetAssetClassInfoResponse>;
}

export class EconClientImpl implements Econ {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Econ";
    this.rpc = rpc;
    this.GetInventoryItemsWithDescriptions = this.GetInventoryItemsWithDescriptions.bind(this);
    this.GetTradeOfferAccessToken = this.GetTradeOfferAccessToken.bind(this);
    this.ClientGetItemShopOverlayAuthURL = this.ClientGetItemShopOverlayAuthURL.bind(this);
    this.GetAssetClassInfo = this.GetAssetClassInfo.bind(this);
  }
  GetInventoryItemsWithDescriptions(
    request: CEconGetInventoryItemsWithDescriptionsRequest,
  ): Promise<CEconGetInventoryItemsWithDescriptionsResponse> {
    const data = CEconGetInventoryItemsWithDescriptionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInventoryItemsWithDescriptions", data);
    return promise.then((data) => CEconGetInventoryItemsWithDescriptionsResponse.decode(new _m0.Reader(data)));
  }

  GetTradeOfferAccessToken(
    request: CEconGetTradeOfferAccessTokenRequest,
  ): Promise<CEconGetTradeOfferAccessTokenResponse> {
    const data = CEconGetTradeOfferAccessTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTradeOfferAccessToken", data);
    return promise.then((data) => CEconGetTradeOfferAccessTokenResponse.decode(new _m0.Reader(data)));
  }

  ClientGetItemShopOverlayAuthURL(
    request: CEconClientGetItemShopOverlayAuthURLRequest,
  ): Promise<CEconClientGetItemShopOverlayAuthURLResponse> {
    const data = CEconClientGetItemShopOverlayAuthURLRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetItemShopOverlayAuthURL", data);
    return promise.then((data) => CEconClientGetItemShopOverlayAuthURLResponse.decode(new _m0.Reader(data)));
  }

  GetAssetClassInfo(request: CEconGetAssetClassInfoRequest): Promise<CEconGetAssetClassInfoResponse> {
    const data = CEconGetAssetClassInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAssetClassInfo", data);
    return promise.then((data) => CEconGetAssetClassInfoResponse.decode(new _m0.Reader(data)));
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
