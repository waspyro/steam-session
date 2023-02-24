/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EInternalAccountType {
  k_EInternalSteamAccountType = 1,
  k_EInternalClanType = 2,
  k_EInternalAppType = 3,
  k_EInternalBroadcastChannelType = 4,
  UNRECOGNIZED = -1,
}

export function eInternalAccountTypeFromJSON(object: any): EInternalAccountType {
  switch (object) {
    case 1:
    case "k_EInternalSteamAccountType":
      return EInternalAccountType.k_EInternalSteamAccountType;
    case 2:
    case "k_EInternalClanType":
      return EInternalAccountType.k_EInternalClanType;
    case 3:
    case "k_EInternalAppType":
      return EInternalAccountType.k_EInternalAppType;
    case 4:
    case "k_EInternalBroadcastChannelType":
      return EInternalAccountType.k_EInternalBroadcastChannelType;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EInternalAccountType.UNRECOGNIZED;
  }
}

export function eInternalAccountTypeToJSON(object: EInternalAccountType): string {
  switch (object) {
    case EInternalAccountType.k_EInternalSteamAccountType:
      return "k_EInternalSteamAccountType";
    case EInternalAccountType.k_EInternalClanType:
      return "k_EInternalClanType";
    case EInternalAccountType.k_EInternalAppType:
      return "k_EInternalAppType";
    case EInternalAccountType.k_EInternalBroadcastChannelType:
      return "k_EInternalBroadcastChannelType";
    case EInternalAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EExternalAccountType {
  k_EExternalNone = 0,
  k_EExternalSteamAccount = 1,
  k_EExternalGoogleAccount = 2,
  k_EExternalFacebookAccount = 3,
  k_EExternalTwitterAccount = 4,
  k_EExternalTwitchAccount = 5,
  k_EExternalYouTubeChannelAccount = 6,
  k_EExternalFacebookPage = 7,
  UNRECOGNIZED = -1,
}

export function eExternalAccountTypeFromJSON(object: any): EExternalAccountType {
  switch (object) {
    case 0:
    case "k_EExternalNone":
      return EExternalAccountType.k_EExternalNone;
    case 1:
    case "k_EExternalSteamAccount":
      return EExternalAccountType.k_EExternalSteamAccount;
    case 2:
    case "k_EExternalGoogleAccount":
      return EExternalAccountType.k_EExternalGoogleAccount;
    case 3:
    case "k_EExternalFacebookAccount":
      return EExternalAccountType.k_EExternalFacebookAccount;
    case 4:
    case "k_EExternalTwitterAccount":
      return EExternalAccountType.k_EExternalTwitterAccount;
    case 5:
    case "k_EExternalTwitchAccount":
      return EExternalAccountType.k_EExternalTwitchAccount;
    case 6:
    case "k_EExternalYouTubeChannelAccount":
      return EExternalAccountType.k_EExternalYouTubeChannelAccount;
    case 7:
    case "k_EExternalFacebookPage":
      return EExternalAccountType.k_EExternalFacebookPage;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EExternalAccountType.UNRECOGNIZED;
  }
}

export function eExternalAccountTypeToJSON(object: EExternalAccountType): string {
  switch (object) {
    case EExternalAccountType.k_EExternalNone:
      return "k_EExternalNone";
    case EExternalAccountType.k_EExternalSteamAccount:
      return "k_EExternalSteamAccount";
    case EExternalAccountType.k_EExternalGoogleAccount:
      return "k_EExternalGoogleAccount";
    case EExternalAccountType.k_EExternalFacebookAccount:
      return "k_EExternalFacebookAccount";
    case EExternalAccountType.k_EExternalTwitterAccount:
      return "k_EExternalTwitterAccount";
    case EExternalAccountType.k_EExternalTwitchAccount:
      return "k_EExternalTwitchAccount";
    case EExternalAccountType.k_EExternalYouTubeChannelAccount:
      return "k_EExternalYouTubeChannelAccount";
    case EExternalAccountType.k_EExternalFacebookPage:
      return "k_EExternalFacebookPage";
    case EExternalAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CUserAccountGetAvailableValveDiscountPromotionsRequest {
  countryCode: string;
}

export interface CUserAccountGetAvailableValveDiscountPromotionsResponse {
  promotions: CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails[];
}

export interface CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
  promotionid: number;
  promotionDescription: string;
  minimumCartAmount: number;
  minimumCartAmountForDisplay: number;
  discountAmount: number;
  currencyCode: number;
  availableUseCount: number;
  promotionalDiscountType: number;
  loyaltyRewardId: number;
  localizedNameToken: string;
  maxUseCount: number;
}

export interface CUserAccountGetClientWalletDetailsRequest {
  includeBalanceInUsd: boolean;
  walletRegion: number;
  includeFormattedBalance: boolean;
}

export interface CUserAccountGetWalletDetailsResponse {
  hasWallet: boolean;
  userCountryCode: string;
  walletCountryCode: string;
  walletState: string;
  balance: number;
  delayedBalance: number;
  currencyCode: number;
  timeMostRecentTxn: number;
  mostRecentTxnid: number;
  balanceInUsd: number;
  delayedBalanceInUsd: number;
  hasWalletInOtherRegions: boolean;
  otherRegions: number[];
  formattedBalance: string;
}

export interface CUserAccountGetAccountLinkStatusRequest {
}

export interface CUserAccountGetAccountLinkStatusResponse {
  pwid: number;
  identityVerification: number;
  performedAgeVerification: boolean;
}

export interface CUserAccountCancelLicenseForAppRequest {
  appid: number;
}

export interface CUserAccountCancelLicenseForAppResponse {
}

export interface CUserAccountGetUserCountryRequest {
  steamid: number;
}

export interface CUserAccountGetUserCountryResponse {
  country: string;
}

export interface CUserAccountCreateFriendInviteTokenRequest {
  inviteLimit: number;
  inviteDuration: number;
  inviteNote: string;
}

export interface CUserAccountCreateFriendInviteTokenResponse {
  inviteToken: string;
  inviteLimit: number;
  inviteDuration: number;
  timeCreated: number;
  valid: boolean;
}

export interface CUserAccountGetFriendInviteTokensRequest {
}

export interface CUserAccountGetFriendInviteTokensResponse {
  tokens: CUserAccountCreateFriendInviteTokenResponse[];
}

export interface CUserAccountViewFriendInviteTokenRequest {
  steamid: number;
  inviteToken: string;
}

export interface CUserAccountViewFriendInviteTokenResponse {
  valid: boolean;
  steamid: number;
  inviteDuration: number;
}

export interface CUserAccountRedeemFriendInviteTokenRequest {
  steamid: number;
  inviteToken: string;
}

export interface CUserAccountRedeemFriendInviteTokenResponse {
}

export interface CUserAccountRevokeFriendInviteTokenRequest {
  inviteToken: string;
}

export interface CUserAccountRevokeFriendInviteTokenResponse {
}

export interface CUserAccountRegisterCompatToolRequest {
  compatTool: number;
}

export interface CUserAccountRegisterCompatToolResponse {
}

export interface CAccountLinkingGetLinkedAccountInfoRequest {
  accountType: EInternalAccountType;
  accountId: number;
  filter: EExternalAccountType;
  returnAccessToken: boolean;
}

export interface CAccountLinkingGetLinkedAccountInfoResponse {
  externalAccounts: CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse[];
}

export interface CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
  externalType: EExternalAccountType;
  externalId: string;
  externalUserName: string;
  externalUrl: string;
  accessToken: string;
  accessTokenSecret: string;
  isValid: boolean;
}

export interface CEmbeddedClientAuthorizeCurrentDeviceRequest {
  steamid: number;
  appid: number;
  deviceInfo: string;
  deviceid: number;
}

export interface CEmbeddedClientToken {
  steamid: number;
  clientToken: Buffer;
  expiry: number;
  deviceid: number;
}

export interface CEmbeddedClientAuthorizeDeviceResponse {
  result: number;
  token: CEmbeddedClientToken | undefined;
}

function createBaseCUserAccountGetAvailableValveDiscountPromotionsRequest(): CUserAccountGetAvailableValveDiscountPromotionsRequest {
  return { countryCode: "" };
}

export const CUserAccountGetAvailableValveDiscountPromotionsRequest = {
  encode(
    message: CUserAccountGetAvailableValveDiscountPromotionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.countryCode !== "") {
      writer.uint32(10).string(message.countryCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetAvailableValveDiscountPromotionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.countryCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetAvailableValveDiscountPromotionsRequest {
    return { countryCode: isSet(object.countryCode) ? String(object.countryCode) : "" };
  },

  toJSON(message: CUserAccountGetAvailableValveDiscountPromotionsRequest): unknown {
    const obj: any = {};
    message.countryCode !== undefined && (obj.countryCode = message.countryCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsRequest>, I>>(
    base?: I,
  ): CUserAccountGetAvailableValveDiscountPromotionsRequest {
    return CUserAccountGetAvailableValveDiscountPromotionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsRequest>, I>>(
    object: I,
  ): CUserAccountGetAvailableValveDiscountPromotionsRequest {
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsRequest();
    message.countryCode = object.countryCode ?? "";
    return message;
  },
};

function createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse(): CUserAccountGetAvailableValveDiscountPromotionsResponse {
  return { promotions: [] };
}

export const CUserAccountGetAvailableValveDiscountPromotionsResponse = {
  encode(
    message: CUserAccountGetAvailableValveDiscountPromotionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.promotions) {
      CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetAvailableValveDiscountPromotionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.promotions.push(
            CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetAvailableValveDiscountPromotionsResponse {
    return {
      promotions: Array.isArray(object?.promotions)
        ? object.promotions.map((e: any) =>
          CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CUserAccountGetAvailableValveDiscountPromotionsResponse): unknown {
    const obj: any = {};
    if (message.promotions) {
      obj.promotions = message.promotions.map((e) =>
        e ? CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.toJSON(e) : undefined
      );
    } else {
      obj.promotions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsResponse>, I>>(
    base?: I,
  ): CUserAccountGetAvailableValveDiscountPromotionsResponse {
    return CUserAccountGetAvailableValveDiscountPromotionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsResponse>, I>>(
    object: I,
  ): CUserAccountGetAvailableValveDiscountPromotionsResponse {
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse();
    message.promotions =
      object.promotions?.map((e) =>
        CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails(): CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
  return {
    promotionid: 0,
    promotionDescription: "",
    minimumCartAmount: 0,
    minimumCartAmountForDisplay: 0,
    discountAmount: 0,
    currencyCode: 0,
    availableUseCount: 0,
    promotionalDiscountType: 0,
    loyaltyRewardId: 0,
    localizedNameToken: "",
    maxUseCount: 0,
  };
}

export const CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails = {
  encode(
    message: CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.promotionid !== 0) {
      writer.uint32(8).uint32(message.promotionid);
    }
    if (message.promotionDescription !== "") {
      writer.uint32(18).string(message.promotionDescription);
    }
    if (message.minimumCartAmount !== 0) {
      writer.uint32(24).int64(message.minimumCartAmount);
    }
    if (message.minimumCartAmountForDisplay !== 0) {
      writer.uint32(32).int64(message.minimumCartAmountForDisplay);
    }
    if (message.discountAmount !== 0) {
      writer.uint32(40).int64(message.discountAmount);
    }
    if (message.currencyCode !== 0) {
      writer.uint32(48).int32(message.currencyCode);
    }
    if (message.availableUseCount !== 0) {
      writer.uint32(56).int32(message.availableUseCount);
    }
    if (message.promotionalDiscountType !== 0) {
      writer.uint32(64).int32(message.promotionalDiscountType);
    }
    if (message.loyaltyRewardId !== 0) {
      writer.uint32(72).int32(message.loyaltyRewardId);
    }
    if (message.localizedNameToken !== "") {
      writer.uint32(82).string(message.localizedNameToken);
    }
    if (message.maxUseCount !== 0) {
      writer.uint32(88).int32(message.maxUseCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.promotionid = reader.uint32();
          break;
        case 2:
          message.promotionDescription = reader.string();
          break;
        case 3:
          message.minimumCartAmount = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.minimumCartAmountForDisplay = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.discountAmount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.currencyCode = reader.int32();
          break;
        case 7:
          message.availableUseCount = reader.int32();
          break;
        case 8:
          message.promotionalDiscountType = reader.int32();
          break;
        case 9:
          message.loyaltyRewardId = reader.int32();
          break;
        case 10:
          message.localizedNameToken = reader.string();
          break;
        case 11:
          message.maxUseCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
    return {
      promotionid: isSet(object.promotionid) ? Number(object.promotionid) : 0,
      promotionDescription: isSet(object.promotionDescription) ? String(object.promotionDescription) : "",
      minimumCartAmount: isSet(object.minimumCartAmount) ? Number(object.minimumCartAmount) : 0,
      minimumCartAmountForDisplay: isSet(object.minimumCartAmountForDisplay)
        ? Number(object.minimumCartAmountForDisplay)
        : 0,
      discountAmount: isSet(object.discountAmount) ? Number(object.discountAmount) : 0,
      currencyCode: isSet(object.currencyCode) ? Number(object.currencyCode) : 0,
      availableUseCount: isSet(object.availableUseCount) ? Number(object.availableUseCount) : 0,
      promotionalDiscountType: isSet(object.promotionalDiscountType) ? Number(object.promotionalDiscountType) : 0,
      loyaltyRewardId: isSet(object.loyaltyRewardId) ? Number(object.loyaltyRewardId) : 0,
      localizedNameToken: isSet(object.localizedNameToken) ? String(object.localizedNameToken) : "",
      maxUseCount: isSet(object.maxUseCount) ? Number(object.maxUseCount) : 0,
    };
  },

  toJSON(message: CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails): unknown {
    const obj: any = {};
    message.promotionid !== undefined && (obj.promotionid = Math.round(message.promotionid));
    message.promotionDescription !== undefined && (obj.promotionDescription = message.promotionDescription);
    message.minimumCartAmount !== undefined && (obj.minimumCartAmount = Math.round(message.minimumCartAmount));
    message.minimumCartAmountForDisplay !== undefined &&
      (obj.minimumCartAmountForDisplay = Math.round(message.minimumCartAmountForDisplay));
    message.discountAmount !== undefined && (obj.discountAmount = Math.round(message.discountAmount));
    message.currencyCode !== undefined && (obj.currencyCode = Math.round(message.currencyCode));
    message.availableUseCount !== undefined && (obj.availableUseCount = Math.round(message.availableUseCount));
    message.promotionalDiscountType !== undefined &&
      (obj.promotionalDiscountType = Math.round(message.promotionalDiscountType));
    message.loyaltyRewardId !== undefined && (obj.loyaltyRewardId = Math.round(message.loyaltyRewardId));
    message.localizedNameToken !== undefined && (obj.localizedNameToken = message.localizedNameToken);
    message.maxUseCount !== undefined && (obj.maxUseCount = Math.round(message.maxUseCount));
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails>,
      I
    >,
  >(base?: I): CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
    return CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails>,
      I
    >,
  >(object: I): CUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails {
    const message = createBaseCUserAccountGetAvailableValveDiscountPromotionsResponse_ValveDiscountPromotionDetails();
    message.promotionid = object.promotionid ?? 0;
    message.promotionDescription = object.promotionDescription ?? "";
    message.minimumCartAmount = object.minimumCartAmount ?? 0;
    message.minimumCartAmountForDisplay = object.minimumCartAmountForDisplay ?? 0;
    message.discountAmount = object.discountAmount ?? 0;
    message.currencyCode = object.currencyCode ?? 0;
    message.availableUseCount = object.availableUseCount ?? 0;
    message.promotionalDiscountType = object.promotionalDiscountType ?? 0;
    message.loyaltyRewardId = object.loyaltyRewardId ?? 0;
    message.localizedNameToken = object.localizedNameToken ?? "";
    message.maxUseCount = object.maxUseCount ?? 0;
    return message;
  },
};

function createBaseCUserAccountGetClientWalletDetailsRequest(): CUserAccountGetClientWalletDetailsRequest {
  return { includeBalanceInUsd: false, walletRegion: 0, includeFormattedBalance: false };
}

export const CUserAccountGetClientWalletDetailsRequest = {
  encode(message: CUserAccountGetClientWalletDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includeBalanceInUsd === true) {
      writer.uint32(8).bool(message.includeBalanceInUsd);
    }
    if (message.walletRegion !== 0) {
      writer.uint32(16).int32(message.walletRegion);
    }
    if (message.includeFormattedBalance === true) {
      writer.uint32(24).bool(message.includeFormattedBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetClientWalletDetailsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetClientWalletDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includeBalanceInUsd = reader.bool();
          break;
        case 2:
          message.walletRegion = reader.int32();
          break;
        case 3:
          message.includeFormattedBalance = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetClientWalletDetailsRequest {
    return {
      includeBalanceInUsd: isSet(object.includeBalanceInUsd) ? Boolean(object.includeBalanceInUsd) : false,
      walletRegion: isSet(object.walletRegion) ? Number(object.walletRegion) : 0,
      includeFormattedBalance: isSet(object.includeFormattedBalance) ? Boolean(object.includeFormattedBalance) : false,
    };
  },

  toJSON(message: CUserAccountGetClientWalletDetailsRequest): unknown {
    const obj: any = {};
    message.includeBalanceInUsd !== undefined && (obj.includeBalanceInUsd = message.includeBalanceInUsd);
    message.walletRegion !== undefined && (obj.walletRegion = Math.round(message.walletRegion));
    message.includeFormattedBalance !== undefined && (obj.includeFormattedBalance = message.includeFormattedBalance);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetClientWalletDetailsRequest>, I>>(
    base?: I,
  ): CUserAccountGetClientWalletDetailsRequest {
    return CUserAccountGetClientWalletDetailsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetClientWalletDetailsRequest>, I>>(
    object: I,
  ): CUserAccountGetClientWalletDetailsRequest {
    const message = createBaseCUserAccountGetClientWalletDetailsRequest();
    message.includeBalanceInUsd = object.includeBalanceInUsd ?? false;
    message.walletRegion = object.walletRegion ?? 0;
    message.includeFormattedBalance = object.includeFormattedBalance ?? false;
    return message;
  },
};

function createBaseCUserAccountGetWalletDetailsResponse(): CUserAccountGetWalletDetailsResponse {
  return {
    hasWallet: false,
    userCountryCode: "",
    walletCountryCode: "",
    walletState: "",
    balance: 0,
    delayedBalance: 0,
    currencyCode: 0,
    timeMostRecentTxn: 0,
    mostRecentTxnid: 0,
    balanceInUsd: 0,
    delayedBalanceInUsd: 0,
    hasWalletInOtherRegions: false,
    otherRegions: [],
    formattedBalance: "",
  };
}

export const CUserAccountGetWalletDetailsResponse = {
  encode(message: CUserAccountGetWalletDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasWallet === true) {
      writer.uint32(8).bool(message.hasWallet);
    }
    if (message.userCountryCode !== "") {
      writer.uint32(18).string(message.userCountryCode);
    }
    if (message.walletCountryCode !== "") {
      writer.uint32(26).string(message.walletCountryCode);
    }
    if (message.walletState !== "") {
      writer.uint32(34).string(message.walletState);
    }
    if (message.balance !== 0) {
      writer.uint32(40).int64(message.balance);
    }
    if (message.delayedBalance !== 0) {
      writer.uint32(48).int64(message.delayedBalance);
    }
    if (message.currencyCode !== 0) {
      writer.uint32(56).int32(message.currencyCode);
    }
    if (message.timeMostRecentTxn !== 0) {
      writer.uint32(64).uint32(message.timeMostRecentTxn);
    }
    if (message.mostRecentTxnid !== 0) {
      writer.uint32(72).uint64(message.mostRecentTxnid);
    }
    if (message.balanceInUsd !== 0) {
      writer.uint32(80).int64(message.balanceInUsd);
    }
    if (message.delayedBalanceInUsd !== 0) {
      writer.uint32(88).int64(message.delayedBalanceInUsd);
    }
    if (message.hasWalletInOtherRegions === true) {
      writer.uint32(96).bool(message.hasWalletInOtherRegions);
    }
    writer.uint32(106).fork();
    for (const v of message.otherRegions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.formattedBalance !== "") {
      writer.uint32(114).string(message.formattedBalance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetWalletDetailsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetWalletDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasWallet = reader.bool();
          break;
        case 2:
          message.userCountryCode = reader.string();
          break;
        case 3:
          message.walletCountryCode = reader.string();
          break;
        case 4:
          message.walletState = reader.string();
          break;
        case 5:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.delayedBalance = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.currencyCode = reader.int32();
          break;
        case 8:
          message.timeMostRecentTxn = reader.uint32();
          break;
        case 9:
          message.mostRecentTxnid = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.balanceInUsd = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.delayedBalanceInUsd = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.hasWalletInOtherRegions = reader.bool();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.otherRegions.push(reader.int32());
            }
          } else {
            message.otherRegions.push(reader.int32());
          }
          break;
        case 14:
          message.formattedBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetWalletDetailsResponse {
    return {
      hasWallet: isSet(object.hasWallet) ? Boolean(object.hasWallet) : false,
      userCountryCode: isSet(object.userCountryCode) ? String(object.userCountryCode) : "",
      walletCountryCode: isSet(object.walletCountryCode) ? String(object.walletCountryCode) : "",
      walletState: isSet(object.walletState) ? String(object.walletState) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      delayedBalance: isSet(object.delayedBalance) ? Number(object.delayedBalance) : 0,
      currencyCode: isSet(object.currencyCode) ? Number(object.currencyCode) : 0,
      timeMostRecentTxn: isSet(object.timeMostRecentTxn) ? Number(object.timeMostRecentTxn) : 0,
      mostRecentTxnid: isSet(object.mostRecentTxnid) ? Number(object.mostRecentTxnid) : 0,
      balanceInUsd: isSet(object.balanceInUsd) ? Number(object.balanceInUsd) : 0,
      delayedBalanceInUsd: isSet(object.delayedBalanceInUsd) ? Number(object.delayedBalanceInUsd) : 0,
      hasWalletInOtherRegions: isSet(object.hasWalletInOtherRegions) ? Boolean(object.hasWalletInOtherRegions) : false,
      otherRegions: Array.isArray(object?.otherRegions) ? object.otherRegions.map((e: any) => Number(e)) : [],
      formattedBalance: isSet(object.formattedBalance) ? String(object.formattedBalance) : "",
    };
  },

  toJSON(message: CUserAccountGetWalletDetailsResponse): unknown {
    const obj: any = {};
    message.hasWallet !== undefined && (obj.hasWallet = message.hasWallet);
    message.userCountryCode !== undefined && (obj.userCountryCode = message.userCountryCode);
    message.walletCountryCode !== undefined && (obj.walletCountryCode = message.walletCountryCode);
    message.walletState !== undefined && (obj.walletState = message.walletState);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.delayedBalance !== undefined && (obj.delayedBalance = Math.round(message.delayedBalance));
    message.currencyCode !== undefined && (obj.currencyCode = Math.round(message.currencyCode));
    message.timeMostRecentTxn !== undefined && (obj.timeMostRecentTxn = Math.round(message.timeMostRecentTxn));
    message.mostRecentTxnid !== undefined && (obj.mostRecentTxnid = Math.round(message.mostRecentTxnid));
    message.balanceInUsd !== undefined && (obj.balanceInUsd = Math.round(message.balanceInUsd));
    message.delayedBalanceInUsd !== undefined && (obj.delayedBalanceInUsd = Math.round(message.delayedBalanceInUsd));
    message.hasWalletInOtherRegions !== undefined && (obj.hasWalletInOtherRegions = message.hasWalletInOtherRegions);
    if (message.otherRegions) {
      obj.otherRegions = message.otherRegions.map((e) => Math.round(e));
    } else {
      obj.otherRegions = [];
    }
    message.formattedBalance !== undefined && (obj.formattedBalance = message.formattedBalance);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetWalletDetailsResponse>, I>>(
    base?: I,
  ): CUserAccountGetWalletDetailsResponse {
    return CUserAccountGetWalletDetailsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetWalletDetailsResponse>, I>>(
    object: I,
  ): CUserAccountGetWalletDetailsResponse {
    const message = createBaseCUserAccountGetWalletDetailsResponse();
    message.hasWallet = object.hasWallet ?? false;
    message.userCountryCode = object.userCountryCode ?? "";
    message.walletCountryCode = object.walletCountryCode ?? "";
    message.walletState = object.walletState ?? "";
    message.balance = object.balance ?? 0;
    message.delayedBalance = object.delayedBalance ?? 0;
    message.currencyCode = object.currencyCode ?? 0;
    message.timeMostRecentTxn = object.timeMostRecentTxn ?? 0;
    message.mostRecentTxnid = object.mostRecentTxnid ?? 0;
    message.balanceInUsd = object.balanceInUsd ?? 0;
    message.delayedBalanceInUsd = object.delayedBalanceInUsd ?? 0;
    message.hasWalletInOtherRegions = object.hasWalletInOtherRegions ?? false;
    message.otherRegions = object.otherRegions?.map((e) => e) || [];
    message.formattedBalance = object.formattedBalance ?? "";
    return message;
  },
};

function createBaseCUserAccountGetAccountLinkStatusRequest(): CUserAccountGetAccountLinkStatusRequest {
  return {};
}

export const CUserAccountGetAccountLinkStatusRequest = {
  encode(_: CUserAccountGetAccountLinkStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetAccountLinkStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetAccountLinkStatusRequest();
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

  fromJSON(_: any): CUserAccountGetAccountLinkStatusRequest {
    return {};
  },

  toJSON(_: CUserAccountGetAccountLinkStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetAccountLinkStatusRequest>, I>>(
    base?: I,
  ): CUserAccountGetAccountLinkStatusRequest {
    return CUserAccountGetAccountLinkStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetAccountLinkStatusRequest>, I>>(
    _: I,
  ): CUserAccountGetAccountLinkStatusRequest {
    const message = createBaseCUserAccountGetAccountLinkStatusRequest();
    return message;
  },
};

function createBaseCUserAccountGetAccountLinkStatusResponse(): CUserAccountGetAccountLinkStatusResponse {
  return { pwid: 0, identityVerification: 0, performedAgeVerification: false };
}

export const CUserAccountGetAccountLinkStatusResponse = {
  encode(message: CUserAccountGetAccountLinkStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pwid !== 0) {
      writer.uint32(8).uint32(message.pwid);
    }
    if (message.identityVerification !== 0) {
      writer.uint32(16).uint32(message.identityVerification);
    }
    if (message.performedAgeVerification === true) {
      writer.uint32(24).bool(message.performedAgeVerification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetAccountLinkStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetAccountLinkStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pwid = reader.uint32();
          break;
        case 2:
          message.identityVerification = reader.uint32();
          break;
        case 3:
          message.performedAgeVerification = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetAccountLinkStatusResponse {
    return {
      pwid: isSet(object.pwid) ? Number(object.pwid) : 0,
      identityVerification: isSet(object.identityVerification) ? Number(object.identityVerification) : 0,
      performedAgeVerification: isSet(object.performedAgeVerification)
        ? Boolean(object.performedAgeVerification)
        : false,
    };
  },

  toJSON(message: CUserAccountGetAccountLinkStatusResponse): unknown {
    const obj: any = {};
    message.pwid !== undefined && (obj.pwid = Math.round(message.pwid));
    message.identityVerification !== undefined && (obj.identityVerification = Math.round(message.identityVerification));
    message.performedAgeVerification !== undefined && (obj.performedAgeVerification = message.performedAgeVerification);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetAccountLinkStatusResponse>, I>>(
    base?: I,
  ): CUserAccountGetAccountLinkStatusResponse {
    return CUserAccountGetAccountLinkStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetAccountLinkStatusResponse>, I>>(
    object: I,
  ): CUserAccountGetAccountLinkStatusResponse {
    const message = createBaseCUserAccountGetAccountLinkStatusResponse();
    message.pwid = object.pwid ?? 0;
    message.identityVerification = object.identityVerification ?? 0;
    message.performedAgeVerification = object.performedAgeVerification ?? false;
    return message;
  },
};

function createBaseCUserAccountCancelLicenseForAppRequest(): CUserAccountCancelLicenseForAppRequest {
  return { appid: 0 };
}

export const CUserAccountCancelLicenseForAppRequest = {
  encode(message: CUserAccountCancelLicenseForAppRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountCancelLicenseForAppRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountCancelLicenseForAppRequest();
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

  fromJSON(object: any): CUserAccountCancelLicenseForAppRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CUserAccountCancelLicenseForAppRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountCancelLicenseForAppRequest>, I>>(
    base?: I,
  ): CUserAccountCancelLicenseForAppRequest {
    return CUserAccountCancelLicenseForAppRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountCancelLicenseForAppRequest>, I>>(
    object: I,
  ): CUserAccountCancelLicenseForAppRequest {
    const message = createBaseCUserAccountCancelLicenseForAppRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCUserAccountCancelLicenseForAppResponse(): CUserAccountCancelLicenseForAppResponse {
  return {};
}

export const CUserAccountCancelLicenseForAppResponse = {
  encode(_: CUserAccountCancelLicenseForAppResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountCancelLicenseForAppResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountCancelLicenseForAppResponse();
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

  fromJSON(_: any): CUserAccountCancelLicenseForAppResponse {
    return {};
  },

  toJSON(_: CUserAccountCancelLicenseForAppResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountCancelLicenseForAppResponse>, I>>(
    base?: I,
  ): CUserAccountCancelLicenseForAppResponse {
    return CUserAccountCancelLicenseForAppResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountCancelLicenseForAppResponse>, I>>(
    _: I,
  ): CUserAccountCancelLicenseForAppResponse {
    const message = createBaseCUserAccountCancelLicenseForAppResponse();
    return message;
  },
};

function createBaseCUserAccountGetUserCountryRequest(): CUserAccountGetUserCountryRequest {
  return { steamid: 0 };
}

export const CUserAccountGetUserCountryRequest = {
  encode(message: CUserAccountGetUserCountryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetUserCountryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetUserCountryRequest();
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

  fromJSON(object: any): CUserAccountGetUserCountryRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CUserAccountGetUserCountryRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetUserCountryRequest>, I>>(
    base?: I,
  ): CUserAccountGetUserCountryRequest {
    return CUserAccountGetUserCountryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetUserCountryRequest>, I>>(
    object: I,
  ): CUserAccountGetUserCountryRequest {
    const message = createBaseCUserAccountGetUserCountryRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCUserAccountGetUserCountryResponse(): CUserAccountGetUserCountryResponse {
  return { country: "" };
}

export const CUserAccountGetUserCountryResponse = {
  encode(message: CUserAccountGetUserCountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetUserCountryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetUserCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetUserCountryResponse {
    return { country: isSet(object.country) ? String(object.country) : "" };
  },

  toJSON(message: CUserAccountGetUserCountryResponse): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetUserCountryResponse>, I>>(
    base?: I,
  ): CUserAccountGetUserCountryResponse {
    return CUserAccountGetUserCountryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetUserCountryResponse>, I>>(
    object: I,
  ): CUserAccountGetUserCountryResponse {
    const message = createBaseCUserAccountGetUserCountryResponse();
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseCUserAccountCreateFriendInviteTokenRequest(): CUserAccountCreateFriendInviteTokenRequest {
  return { inviteLimit: 0, inviteDuration: 0, inviteNote: "" };
}

export const CUserAccountCreateFriendInviteTokenRequest = {
  encode(message: CUserAccountCreateFriendInviteTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteLimit !== 0) {
      writer.uint32(8).uint32(message.inviteLimit);
    }
    if (message.inviteDuration !== 0) {
      writer.uint32(16).uint32(message.inviteDuration);
    }
    if (message.inviteNote !== "") {
      writer.uint32(26).string(message.inviteNote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountCreateFriendInviteTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountCreateFriendInviteTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteLimit = reader.uint32();
          break;
        case 2:
          message.inviteDuration = reader.uint32();
          break;
        case 3:
          message.inviteNote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountCreateFriendInviteTokenRequest {
    return {
      inviteLimit: isSet(object.inviteLimit) ? Number(object.inviteLimit) : 0,
      inviteDuration: isSet(object.inviteDuration) ? Number(object.inviteDuration) : 0,
      inviteNote: isSet(object.inviteNote) ? String(object.inviteNote) : "",
    };
  },

  toJSON(message: CUserAccountCreateFriendInviteTokenRequest): unknown {
    const obj: any = {};
    message.inviteLimit !== undefined && (obj.inviteLimit = Math.round(message.inviteLimit));
    message.inviteDuration !== undefined && (obj.inviteDuration = Math.round(message.inviteDuration));
    message.inviteNote !== undefined && (obj.inviteNote = message.inviteNote);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountCreateFriendInviteTokenRequest>, I>>(
    base?: I,
  ): CUserAccountCreateFriendInviteTokenRequest {
    return CUserAccountCreateFriendInviteTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountCreateFriendInviteTokenRequest>, I>>(
    object: I,
  ): CUserAccountCreateFriendInviteTokenRequest {
    const message = createBaseCUserAccountCreateFriendInviteTokenRequest();
    message.inviteLimit = object.inviteLimit ?? 0;
    message.inviteDuration = object.inviteDuration ?? 0;
    message.inviteNote = object.inviteNote ?? "";
    return message;
  },
};

function createBaseCUserAccountCreateFriendInviteTokenResponse(): CUserAccountCreateFriendInviteTokenResponse {
  return { inviteToken: "", inviteLimit: 0, inviteDuration: 0, timeCreated: 0, valid: false };
}

export const CUserAccountCreateFriendInviteTokenResponse = {
  encode(message: CUserAccountCreateFriendInviteTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteToken !== "") {
      writer.uint32(10).string(message.inviteToken);
    }
    if (message.inviteLimit !== 0) {
      writer.uint32(16).uint64(message.inviteLimit);
    }
    if (message.inviteDuration !== 0) {
      writer.uint32(24).uint64(message.inviteDuration);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(37).fixed32(message.timeCreated);
    }
    if (message.valid === true) {
      writer.uint32(40).bool(message.valid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountCreateFriendInviteTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountCreateFriendInviteTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteToken = reader.string();
          break;
        case 2:
          message.inviteLimit = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.inviteDuration = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.timeCreated = reader.fixed32();
          break;
        case 5:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountCreateFriendInviteTokenResponse {
    return {
      inviteToken: isSet(object.inviteToken) ? String(object.inviteToken) : "",
      inviteLimit: isSet(object.inviteLimit) ? Number(object.inviteLimit) : 0,
      inviteDuration: isSet(object.inviteDuration) ? Number(object.inviteDuration) : 0,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
    };
  },

  toJSON(message: CUserAccountCreateFriendInviteTokenResponse): unknown {
    const obj: any = {};
    message.inviteToken !== undefined && (obj.inviteToken = message.inviteToken);
    message.inviteLimit !== undefined && (obj.inviteLimit = Math.round(message.inviteLimit));
    message.inviteDuration !== undefined && (obj.inviteDuration = Math.round(message.inviteDuration));
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountCreateFriendInviteTokenResponse>, I>>(
    base?: I,
  ): CUserAccountCreateFriendInviteTokenResponse {
    return CUserAccountCreateFriendInviteTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountCreateFriendInviteTokenResponse>, I>>(
    object: I,
  ): CUserAccountCreateFriendInviteTokenResponse {
    const message = createBaseCUserAccountCreateFriendInviteTokenResponse();
    message.inviteToken = object.inviteToken ?? "";
    message.inviteLimit = object.inviteLimit ?? 0;
    message.inviteDuration = object.inviteDuration ?? 0;
    message.timeCreated = object.timeCreated ?? 0;
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseCUserAccountGetFriendInviteTokensRequest(): CUserAccountGetFriendInviteTokensRequest {
  return {};
}

export const CUserAccountGetFriendInviteTokensRequest = {
  encode(_: CUserAccountGetFriendInviteTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetFriendInviteTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetFriendInviteTokensRequest();
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

  fromJSON(_: any): CUserAccountGetFriendInviteTokensRequest {
    return {};
  },

  toJSON(_: CUserAccountGetFriendInviteTokensRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetFriendInviteTokensRequest>, I>>(
    base?: I,
  ): CUserAccountGetFriendInviteTokensRequest {
    return CUserAccountGetFriendInviteTokensRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetFriendInviteTokensRequest>, I>>(
    _: I,
  ): CUserAccountGetFriendInviteTokensRequest {
    const message = createBaseCUserAccountGetFriendInviteTokensRequest();
    return message;
  },
};

function createBaseCUserAccountGetFriendInviteTokensResponse(): CUserAccountGetFriendInviteTokensResponse {
  return { tokens: [] };
}

export const CUserAccountGetFriendInviteTokensResponse = {
  encode(message: CUserAccountGetFriendInviteTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tokens) {
      CUserAccountCreateFriendInviteTokenResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountGetFriendInviteTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountGetFriendInviteTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(CUserAccountCreateFriendInviteTokenResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountGetFriendInviteTokensResponse {
    return {
      tokens: Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => CUserAccountCreateFriendInviteTokenResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CUserAccountGetFriendInviteTokensResponse): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? CUserAccountCreateFriendInviteTokenResponse.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountGetFriendInviteTokensResponse>, I>>(
    base?: I,
  ): CUserAccountGetFriendInviteTokensResponse {
    return CUserAccountGetFriendInviteTokensResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountGetFriendInviteTokensResponse>, I>>(
    object: I,
  ): CUserAccountGetFriendInviteTokensResponse {
    const message = createBaseCUserAccountGetFriendInviteTokensResponse();
    message.tokens = object.tokens?.map((e) => CUserAccountCreateFriendInviteTokenResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCUserAccountViewFriendInviteTokenRequest(): CUserAccountViewFriendInviteTokenRequest {
  return { steamid: 0, inviteToken: "" };
}

export const CUserAccountViewFriendInviteTokenRequest = {
  encode(message: CUserAccountViewFriendInviteTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.inviteToken !== "") {
      writer.uint32(18).string(message.inviteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountViewFriendInviteTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountViewFriendInviteTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.inviteToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountViewFriendInviteTokenRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      inviteToken: isSet(object.inviteToken) ? String(object.inviteToken) : "",
    };
  },

  toJSON(message: CUserAccountViewFriendInviteTokenRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.inviteToken !== undefined && (obj.inviteToken = message.inviteToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountViewFriendInviteTokenRequest>, I>>(
    base?: I,
  ): CUserAccountViewFriendInviteTokenRequest {
    return CUserAccountViewFriendInviteTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountViewFriendInviteTokenRequest>, I>>(
    object: I,
  ): CUserAccountViewFriendInviteTokenRequest {
    const message = createBaseCUserAccountViewFriendInviteTokenRequest();
    message.steamid = object.steamid ?? 0;
    message.inviteToken = object.inviteToken ?? "";
    return message;
  },
};

function createBaseCUserAccountViewFriendInviteTokenResponse(): CUserAccountViewFriendInviteTokenResponse {
  return { valid: false, steamid: 0, inviteDuration: 0 };
}

export const CUserAccountViewFriendInviteTokenResponse = {
  encode(message: CUserAccountViewFriendInviteTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    if (message.steamid !== 0) {
      writer.uint32(16).uint64(message.steamid);
    }
    if (message.inviteDuration !== 0) {
      writer.uint32(24).uint64(message.inviteDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountViewFriendInviteTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountViewFriendInviteTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        case 2:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.inviteDuration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountViewFriendInviteTokenResponse {
    return {
      valid: isSet(object.valid) ? Boolean(object.valid) : false,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      inviteDuration: isSet(object.inviteDuration) ? Number(object.inviteDuration) : 0,
    };
  },

  toJSON(message: CUserAccountViewFriendInviteTokenResponse): unknown {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.inviteDuration !== undefined && (obj.inviteDuration = Math.round(message.inviteDuration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountViewFriendInviteTokenResponse>, I>>(
    base?: I,
  ): CUserAccountViewFriendInviteTokenResponse {
    return CUserAccountViewFriendInviteTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountViewFriendInviteTokenResponse>, I>>(
    object: I,
  ): CUserAccountViewFriendInviteTokenResponse {
    const message = createBaseCUserAccountViewFriendInviteTokenResponse();
    message.valid = object.valid ?? false;
    message.steamid = object.steamid ?? 0;
    message.inviteDuration = object.inviteDuration ?? 0;
    return message;
  },
};

function createBaseCUserAccountRedeemFriendInviteTokenRequest(): CUserAccountRedeemFriendInviteTokenRequest {
  return { steamid: 0, inviteToken: "" };
}

export const CUserAccountRedeemFriendInviteTokenRequest = {
  encode(message: CUserAccountRedeemFriendInviteTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.inviteToken !== "") {
      writer.uint32(18).string(message.inviteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRedeemFriendInviteTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRedeemFriendInviteTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.inviteToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountRedeemFriendInviteTokenRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      inviteToken: isSet(object.inviteToken) ? String(object.inviteToken) : "",
    };
  },

  toJSON(message: CUserAccountRedeemFriendInviteTokenRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.inviteToken !== undefined && (obj.inviteToken = message.inviteToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRedeemFriendInviteTokenRequest>, I>>(
    base?: I,
  ): CUserAccountRedeemFriendInviteTokenRequest {
    return CUserAccountRedeemFriendInviteTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRedeemFriendInviteTokenRequest>, I>>(
    object: I,
  ): CUserAccountRedeemFriendInviteTokenRequest {
    const message = createBaseCUserAccountRedeemFriendInviteTokenRequest();
    message.steamid = object.steamid ?? 0;
    message.inviteToken = object.inviteToken ?? "";
    return message;
  },
};

function createBaseCUserAccountRedeemFriendInviteTokenResponse(): CUserAccountRedeemFriendInviteTokenResponse {
  return {};
}

export const CUserAccountRedeemFriendInviteTokenResponse = {
  encode(_: CUserAccountRedeemFriendInviteTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRedeemFriendInviteTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRedeemFriendInviteTokenResponse();
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

  fromJSON(_: any): CUserAccountRedeemFriendInviteTokenResponse {
    return {};
  },

  toJSON(_: CUserAccountRedeemFriendInviteTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRedeemFriendInviteTokenResponse>, I>>(
    base?: I,
  ): CUserAccountRedeemFriendInviteTokenResponse {
    return CUserAccountRedeemFriendInviteTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRedeemFriendInviteTokenResponse>, I>>(
    _: I,
  ): CUserAccountRedeemFriendInviteTokenResponse {
    const message = createBaseCUserAccountRedeemFriendInviteTokenResponse();
    return message;
  },
};

function createBaseCUserAccountRevokeFriendInviteTokenRequest(): CUserAccountRevokeFriendInviteTokenRequest {
  return { inviteToken: "" };
}

export const CUserAccountRevokeFriendInviteTokenRequest = {
  encode(message: CUserAccountRevokeFriendInviteTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteToken !== "") {
      writer.uint32(10).string(message.inviteToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRevokeFriendInviteTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRevokeFriendInviteTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountRevokeFriendInviteTokenRequest {
    return { inviteToken: isSet(object.inviteToken) ? String(object.inviteToken) : "" };
  },

  toJSON(message: CUserAccountRevokeFriendInviteTokenRequest): unknown {
    const obj: any = {};
    message.inviteToken !== undefined && (obj.inviteToken = message.inviteToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRevokeFriendInviteTokenRequest>, I>>(
    base?: I,
  ): CUserAccountRevokeFriendInviteTokenRequest {
    return CUserAccountRevokeFriendInviteTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRevokeFriendInviteTokenRequest>, I>>(
    object: I,
  ): CUserAccountRevokeFriendInviteTokenRequest {
    const message = createBaseCUserAccountRevokeFriendInviteTokenRequest();
    message.inviteToken = object.inviteToken ?? "";
    return message;
  },
};

function createBaseCUserAccountRevokeFriendInviteTokenResponse(): CUserAccountRevokeFriendInviteTokenResponse {
  return {};
}

export const CUserAccountRevokeFriendInviteTokenResponse = {
  encode(_: CUserAccountRevokeFriendInviteTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRevokeFriendInviteTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRevokeFriendInviteTokenResponse();
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

  fromJSON(_: any): CUserAccountRevokeFriendInviteTokenResponse {
    return {};
  },

  toJSON(_: CUserAccountRevokeFriendInviteTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRevokeFriendInviteTokenResponse>, I>>(
    base?: I,
  ): CUserAccountRevokeFriendInviteTokenResponse {
    return CUserAccountRevokeFriendInviteTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRevokeFriendInviteTokenResponse>, I>>(
    _: I,
  ): CUserAccountRevokeFriendInviteTokenResponse {
    const message = createBaseCUserAccountRevokeFriendInviteTokenResponse();
    return message;
  },
};

function createBaseCUserAccountRegisterCompatToolRequest(): CUserAccountRegisterCompatToolRequest {
  return { compatTool: 0 };
}

export const CUserAccountRegisterCompatToolRequest = {
  encode(message: CUserAccountRegisterCompatToolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.compatTool !== 0) {
      writer.uint32(8).uint32(message.compatTool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRegisterCompatToolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRegisterCompatToolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.compatTool = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserAccountRegisterCompatToolRequest {
    return { compatTool: isSet(object.compatTool) ? Number(object.compatTool) : 0 };
  },

  toJSON(message: CUserAccountRegisterCompatToolRequest): unknown {
    const obj: any = {};
    message.compatTool !== undefined && (obj.compatTool = Math.round(message.compatTool));
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRegisterCompatToolRequest>, I>>(
    base?: I,
  ): CUserAccountRegisterCompatToolRequest {
    return CUserAccountRegisterCompatToolRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRegisterCompatToolRequest>, I>>(
    object: I,
  ): CUserAccountRegisterCompatToolRequest {
    const message = createBaseCUserAccountRegisterCompatToolRequest();
    message.compatTool = object.compatTool ?? 0;
    return message;
  },
};

function createBaseCUserAccountRegisterCompatToolResponse(): CUserAccountRegisterCompatToolResponse {
  return {};
}

export const CUserAccountRegisterCompatToolResponse = {
  encode(_: CUserAccountRegisterCompatToolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserAccountRegisterCompatToolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserAccountRegisterCompatToolResponse();
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

  fromJSON(_: any): CUserAccountRegisterCompatToolResponse {
    return {};
  },

  toJSON(_: CUserAccountRegisterCompatToolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserAccountRegisterCompatToolResponse>, I>>(
    base?: I,
  ): CUserAccountRegisterCompatToolResponse {
    return CUserAccountRegisterCompatToolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserAccountRegisterCompatToolResponse>, I>>(
    _: I,
  ): CUserAccountRegisterCompatToolResponse {
    const message = createBaseCUserAccountRegisterCompatToolResponse();
    return message;
  },
};

function createBaseCAccountLinkingGetLinkedAccountInfoRequest(): CAccountLinkingGetLinkedAccountInfoRequest {
  return { accountType: 1, accountId: 0, filter: 0, returnAccessToken: false };
}

export const CAccountLinkingGetLinkedAccountInfoRequest = {
  encode(message: CAccountLinkingGetLinkedAccountInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountType !== 1) {
      writer.uint32(8).int32(message.accountType);
    }
    if (message.accountId !== 0) {
      writer.uint32(16).uint64(message.accountId);
    }
    if (message.filter !== 0) {
      writer.uint32(24).int32(message.filter);
    }
    if (message.returnAccessToken === true) {
      writer.uint32(32).bool(message.returnAccessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountLinkingGetLinkedAccountInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountLinkingGetLinkedAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountType = reader.int32() as any;
          break;
        case 2:
          message.accountId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.filter = reader.int32() as any;
          break;
        case 4:
          message.returnAccessToken = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountLinkingGetLinkedAccountInfoRequest {
    return {
      accountType: isSet(object.accountType) ? eInternalAccountTypeFromJSON(object.accountType) : 1,
      accountId: isSet(object.accountId) ? Number(object.accountId) : 0,
      filter: isSet(object.filter) ? eExternalAccountTypeFromJSON(object.filter) : 0,
      returnAccessToken: isSet(object.returnAccessToken) ? Boolean(object.returnAccessToken) : false,
    };
  },

  toJSON(message: CAccountLinkingGetLinkedAccountInfoRequest): unknown {
    const obj: any = {};
    message.accountType !== undefined && (obj.accountType = eInternalAccountTypeToJSON(message.accountType));
    message.accountId !== undefined && (obj.accountId = Math.round(message.accountId));
    message.filter !== undefined && (obj.filter = eExternalAccountTypeToJSON(message.filter));
    message.returnAccessToken !== undefined && (obj.returnAccessToken = message.returnAccessToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoRequest>, I>>(
    base?: I,
  ): CAccountLinkingGetLinkedAccountInfoRequest {
    return CAccountLinkingGetLinkedAccountInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoRequest>, I>>(
    object: I,
  ): CAccountLinkingGetLinkedAccountInfoRequest {
    const message = createBaseCAccountLinkingGetLinkedAccountInfoRequest();
    message.accountType = object.accountType ?? 1;
    message.accountId = object.accountId ?? 0;
    message.filter = object.filter ?? 0;
    message.returnAccessToken = object.returnAccessToken ?? false;
    return message;
  },
};

function createBaseCAccountLinkingGetLinkedAccountInfoResponse(): CAccountLinkingGetLinkedAccountInfoResponse {
  return { externalAccounts: [] };
}

export const CAccountLinkingGetLinkedAccountInfoResponse = {
  encode(message: CAccountLinkingGetLinkedAccountInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.externalAccounts) {
      CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAccountLinkingGetLinkedAccountInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountLinkingGetLinkedAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalAccounts.push(
            CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountLinkingGetLinkedAccountInfoResponse {
    return {
      externalAccounts: Array.isArray(object?.externalAccounts)
        ? object.externalAccounts.map((e: any) =>
          CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CAccountLinkingGetLinkedAccountInfoResponse): unknown {
    const obj: any = {};
    if (message.externalAccounts) {
      obj.externalAccounts = message.externalAccounts.map((e) =>
        e ? CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.toJSON(e) : undefined
      );
    } else {
      obj.externalAccounts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoResponse>, I>>(
    base?: I,
  ): CAccountLinkingGetLinkedAccountInfoResponse {
    return CAccountLinkingGetLinkedAccountInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoResponse>, I>>(
    object: I,
  ): CAccountLinkingGetLinkedAccountInfoResponse {
    const message = createBaseCAccountLinkingGetLinkedAccountInfoResponse();
    message.externalAccounts =
      object.externalAccounts?.map((e) =>
        CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse(): CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
  return {
    externalType: 0,
    externalId: "",
    externalUserName: "",
    externalUrl: "",
    accessToken: "",
    accessTokenSecret: "",
    isValid: false,
  };
}

export const CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse = {
  encode(
    message: CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.externalType !== 0) {
      writer.uint32(8).int32(message.externalType);
    }
    if (message.externalId !== "") {
      writer.uint32(18).string(message.externalId);
    }
    if (message.externalUserName !== "") {
      writer.uint32(26).string(message.externalUserName);
    }
    if (message.externalUrl !== "") {
      writer.uint32(34).string(message.externalUrl);
    }
    if (message.accessToken !== "") {
      writer.uint32(42).string(message.accessToken);
    }
    if (message.accessTokenSecret !== "") {
      writer.uint32(50).string(message.accessTokenSecret);
    }
    if (message.isValid === true) {
      writer.uint32(56).bool(message.isValid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalType = reader.int32() as any;
          break;
        case 2:
          message.externalId = reader.string();
          break;
        case 3:
          message.externalUserName = reader.string();
          break;
        case 4:
          message.externalUrl = reader.string();
          break;
        case 5:
          message.accessToken = reader.string();
          break;
        case 6:
          message.accessTokenSecret = reader.string();
          break;
        case 7:
          message.isValid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
    return {
      externalType: isSet(object.externalType) ? eExternalAccountTypeFromJSON(object.externalType) : 0,
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      externalUserName: isSet(object.externalUserName) ? String(object.externalUserName) : "",
      externalUrl: isSet(object.externalUrl) ? String(object.externalUrl) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      accessTokenSecret: isSet(object.accessTokenSecret) ? String(object.accessTokenSecret) : "",
      isValid: isSet(object.isValid) ? Boolean(object.isValid) : false,
    };
  },

  toJSON(message: CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse): unknown {
    const obj: any = {};
    message.externalType !== undefined && (obj.externalType = eExternalAccountTypeToJSON(message.externalType));
    message.externalId !== undefined && (obj.externalId = message.externalId);
    message.externalUserName !== undefined && (obj.externalUserName = message.externalUserName);
    message.externalUrl !== undefined && (obj.externalUrl = message.externalUrl);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.accessTokenSecret !== undefined && (obj.accessTokenSecret = message.accessTokenSecret);
    message.isValid !== undefined && (obj.isValid = message.isValid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse>, I>>(
    base?: I,
  ): CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
    return CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse>, I>,
  >(object: I): CAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse {
    const message = createBaseCAccountLinkingGetLinkedAccountInfoResponse_CExternalAccountTupleResponse();
    message.externalType = object.externalType ?? 0;
    message.externalId = object.externalId ?? "";
    message.externalUserName = object.externalUserName ?? "";
    message.externalUrl = object.externalUrl ?? "";
    message.accessToken = object.accessToken ?? "";
    message.accessTokenSecret = object.accessTokenSecret ?? "";
    message.isValid = object.isValid ?? false;
    return message;
  },
};

function createBaseCEmbeddedClientAuthorizeCurrentDeviceRequest(): CEmbeddedClientAuthorizeCurrentDeviceRequest {
  return { steamid: 0, appid: 0, deviceInfo: "", deviceid: 0 };
}

export const CEmbeddedClientAuthorizeCurrentDeviceRequest = {
  encode(message: CEmbeddedClientAuthorizeCurrentDeviceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.deviceInfo !== "") {
      writer.uint32(26).string(message.deviceInfo);
    }
    if (message.deviceid !== 0) {
      writer.uint32(32).uint32(message.deviceid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEmbeddedClientAuthorizeCurrentDeviceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEmbeddedClientAuthorizeCurrentDeviceRequest();
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
          message.deviceInfo = reader.string();
          break;
        case 4:
          message.deviceid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEmbeddedClientAuthorizeCurrentDeviceRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      deviceInfo: isSet(object.deviceInfo) ? String(object.deviceInfo) : "",
      deviceid: isSet(object.deviceid) ? Number(object.deviceid) : 0,
    };
  },

  toJSON(message: CEmbeddedClientAuthorizeCurrentDeviceRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.deviceInfo !== undefined && (obj.deviceInfo = message.deviceInfo);
    message.deviceid !== undefined && (obj.deviceid = Math.round(message.deviceid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEmbeddedClientAuthorizeCurrentDeviceRequest>, I>>(
    base?: I,
  ): CEmbeddedClientAuthorizeCurrentDeviceRequest {
    return CEmbeddedClientAuthorizeCurrentDeviceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEmbeddedClientAuthorizeCurrentDeviceRequest>, I>>(
    object: I,
  ): CEmbeddedClientAuthorizeCurrentDeviceRequest {
    const message = createBaseCEmbeddedClientAuthorizeCurrentDeviceRequest();
    message.steamid = object.steamid ?? 0;
    message.appid = object.appid ?? 0;
    message.deviceInfo = object.deviceInfo ?? "";
    message.deviceid = object.deviceid ?? 0;
    return message;
  },
};

function createBaseCEmbeddedClientToken(): CEmbeddedClientToken {
  return { steamid: 0, clientToken: Buffer.alloc(0), expiry: 0, deviceid: 0 };
}

export const CEmbeddedClientToken = {
  encode(message: CEmbeddedClientToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.clientToken.length !== 0) {
      writer.uint32(18).bytes(message.clientToken);
    }
    if (message.expiry !== 0) {
      writer.uint32(24).uint32(message.expiry);
    }
    if (message.deviceid !== 0) {
      writer.uint32(32).uint32(message.deviceid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEmbeddedClientToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEmbeddedClientToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.clientToken = reader.bytes() as Buffer;
          break;
        case 3:
          message.expiry = reader.uint32();
          break;
        case 4:
          message.deviceid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEmbeddedClientToken {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      clientToken: isSet(object.clientToken) ? Buffer.from(bytesFromBase64(object.clientToken)) : Buffer.alloc(0),
      expiry: isSet(object.expiry) ? Number(object.expiry) : 0,
      deviceid: isSet(object.deviceid) ? Number(object.deviceid) : 0,
    };
  },

  toJSON(message: CEmbeddedClientToken): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.clientToken !== undefined &&
      (obj.clientToken = base64FromBytes(message.clientToken !== undefined ? message.clientToken : Buffer.alloc(0)));
    message.expiry !== undefined && (obj.expiry = Math.round(message.expiry));
    message.deviceid !== undefined && (obj.deviceid = Math.round(message.deviceid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CEmbeddedClientToken>, I>>(base?: I): CEmbeddedClientToken {
    return CEmbeddedClientToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEmbeddedClientToken>, I>>(object: I): CEmbeddedClientToken {
    const message = createBaseCEmbeddedClientToken();
    message.steamid = object.steamid ?? 0;
    message.clientToken = object.clientToken ?? Buffer.alloc(0);
    message.expiry = object.expiry ?? 0;
    message.deviceid = object.deviceid ?? 0;
    return message;
  },
};

function createBaseCEmbeddedClientAuthorizeDeviceResponse(): CEmbeddedClientAuthorizeDeviceResponse {
  return { result: 0, token: undefined };
}

export const CEmbeddedClientAuthorizeDeviceResponse = {
  encode(message: CEmbeddedClientAuthorizeDeviceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.token !== undefined) {
      CEmbeddedClientToken.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CEmbeddedClientAuthorizeDeviceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCEmbeddedClientAuthorizeDeviceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.token = CEmbeddedClientToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CEmbeddedClientAuthorizeDeviceResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      token: isSet(object.token) ? CEmbeddedClientToken.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: CEmbeddedClientAuthorizeDeviceResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.token !== undefined && (obj.token = message.token ? CEmbeddedClientToken.toJSON(message.token) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CEmbeddedClientAuthorizeDeviceResponse>, I>>(
    base?: I,
  ): CEmbeddedClientAuthorizeDeviceResponse {
    return CEmbeddedClientAuthorizeDeviceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CEmbeddedClientAuthorizeDeviceResponse>, I>>(
    object: I,
  ): CEmbeddedClientAuthorizeDeviceResponse {
    const message = createBaseCEmbeddedClientAuthorizeDeviceResponse();
    message.result = object.result ?? 0;
    message.token = (object.token !== undefined && object.token !== null)
      ? CEmbeddedClientToken.fromPartial(object.token)
      : undefined;
    return message;
  },
};

export interface UserAccount {
  GetAvailableValveDiscountPromotions(
    request: CUserAccountGetAvailableValveDiscountPromotionsRequest,
  ): Promise<CUserAccountGetAvailableValveDiscountPromotionsResponse>;
  GetClientWalletDetails(
    request: CUserAccountGetClientWalletDetailsRequest,
  ): Promise<CUserAccountGetWalletDetailsResponse>;
  GetAccountLinkStatus(
    request: CUserAccountGetAccountLinkStatusRequest,
  ): Promise<CUserAccountGetAccountLinkStatusResponse>;
  CancelLicenseForApp(
    request: CUserAccountCancelLicenseForAppRequest,
  ): Promise<CUserAccountCancelLicenseForAppResponse>;
  GetUserCountry(request: CUserAccountGetUserCountryRequest): Promise<CUserAccountGetUserCountryResponse>;
  CreateFriendInviteToken(
    request: CUserAccountCreateFriendInviteTokenRequest,
  ): Promise<CUserAccountCreateFriendInviteTokenResponse>;
  GetFriendInviteTokens(
    request: CUserAccountGetFriendInviteTokensRequest,
  ): Promise<CUserAccountGetFriendInviteTokensResponse>;
  ViewFriendInviteToken(
    request: CUserAccountViewFriendInviteTokenRequest,
  ): Promise<CUserAccountViewFriendInviteTokenResponse>;
  RedeemFriendInviteToken(
    request: CUserAccountRedeemFriendInviteTokenRequest,
  ): Promise<CUserAccountRedeemFriendInviteTokenResponse>;
  RevokeFriendInviteToken(
    request: CUserAccountRevokeFriendInviteTokenRequest,
  ): Promise<CUserAccountRevokeFriendInviteTokenResponse>;
  RegisterCompatTool(request: CUserAccountRegisterCompatToolRequest): Promise<CUserAccountRegisterCompatToolResponse>;
}

export class UserAccountClientImpl implements UserAccount {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "UserAccount";
    this.rpc = rpc;
    this.GetAvailableValveDiscountPromotions = this.GetAvailableValveDiscountPromotions.bind(this);
    this.GetClientWalletDetails = this.GetClientWalletDetails.bind(this);
    this.GetAccountLinkStatus = this.GetAccountLinkStatus.bind(this);
    this.CancelLicenseForApp = this.CancelLicenseForApp.bind(this);
    this.GetUserCountry = this.GetUserCountry.bind(this);
    this.CreateFriendInviteToken = this.CreateFriendInviteToken.bind(this);
    this.GetFriendInviteTokens = this.GetFriendInviteTokens.bind(this);
    this.ViewFriendInviteToken = this.ViewFriendInviteToken.bind(this);
    this.RedeemFriendInviteToken = this.RedeemFriendInviteToken.bind(this);
    this.RevokeFriendInviteToken = this.RevokeFriendInviteToken.bind(this);
    this.RegisterCompatTool = this.RegisterCompatTool.bind(this);
  }
  GetAvailableValveDiscountPromotions(
    request: CUserAccountGetAvailableValveDiscountPromotionsRequest,
  ): Promise<CUserAccountGetAvailableValveDiscountPromotionsResponse> {
    const data = CUserAccountGetAvailableValveDiscountPromotionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAvailableValveDiscountPromotions", data);
    return promise.then((data) => CUserAccountGetAvailableValveDiscountPromotionsResponse.decode(new _m0.Reader(data)));
  }

  GetClientWalletDetails(
    request: CUserAccountGetClientWalletDetailsRequest,
  ): Promise<CUserAccountGetWalletDetailsResponse> {
    const data = CUserAccountGetClientWalletDetailsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClientWalletDetails", data);
    return promise.then((data) => CUserAccountGetWalletDetailsResponse.decode(new _m0.Reader(data)));
  }

  GetAccountLinkStatus(
    request: CUserAccountGetAccountLinkStatusRequest,
  ): Promise<CUserAccountGetAccountLinkStatusResponse> {
    const data = CUserAccountGetAccountLinkStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAccountLinkStatus", data);
    return promise.then((data) => CUserAccountGetAccountLinkStatusResponse.decode(new _m0.Reader(data)));
  }

  CancelLicenseForApp(
    request: CUserAccountCancelLicenseForAppRequest,
  ): Promise<CUserAccountCancelLicenseForAppResponse> {
    const data = CUserAccountCancelLicenseForAppRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelLicenseForApp", data);
    return promise.then((data) => CUserAccountCancelLicenseForAppResponse.decode(new _m0.Reader(data)));
  }

  GetUserCountry(request: CUserAccountGetUserCountryRequest): Promise<CUserAccountGetUserCountryResponse> {
    const data = CUserAccountGetUserCountryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserCountry", data);
    return promise.then((data) => CUserAccountGetUserCountryResponse.decode(new _m0.Reader(data)));
  }

  CreateFriendInviteToken(
    request: CUserAccountCreateFriendInviteTokenRequest,
  ): Promise<CUserAccountCreateFriendInviteTokenResponse> {
    const data = CUserAccountCreateFriendInviteTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateFriendInviteToken", data);
    return promise.then((data) => CUserAccountCreateFriendInviteTokenResponse.decode(new _m0.Reader(data)));
  }

  GetFriendInviteTokens(
    request: CUserAccountGetFriendInviteTokensRequest,
  ): Promise<CUserAccountGetFriendInviteTokensResponse> {
    const data = CUserAccountGetFriendInviteTokensRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFriendInviteTokens", data);
    return promise.then((data) => CUserAccountGetFriendInviteTokensResponse.decode(new _m0.Reader(data)));
  }

  ViewFriendInviteToken(
    request: CUserAccountViewFriendInviteTokenRequest,
  ): Promise<CUserAccountViewFriendInviteTokenResponse> {
    const data = CUserAccountViewFriendInviteTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ViewFriendInviteToken", data);
    return promise.then((data) => CUserAccountViewFriendInviteTokenResponse.decode(new _m0.Reader(data)));
  }

  RedeemFriendInviteToken(
    request: CUserAccountRedeemFriendInviteTokenRequest,
  ): Promise<CUserAccountRedeemFriendInviteTokenResponse> {
    const data = CUserAccountRedeemFriendInviteTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RedeemFriendInviteToken", data);
    return promise.then((data) => CUserAccountRedeemFriendInviteTokenResponse.decode(new _m0.Reader(data)));
  }

  RevokeFriendInviteToken(
    request: CUserAccountRevokeFriendInviteTokenRequest,
  ): Promise<CUserAccountRevokeFriendInviteTokenResponse> {
    const data = CUserAccountRevokeFriendInviteTokenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeFriendInviteToken", data);
    return promise.then((data) => CUserAccountRevokeFriendInviteTokenResponse.decode(new _m0.Reader(data)));
  }

  RegisterCompatTool(request: CUserAccountRegisterCompatToolRequest): Promise<CUserAccountRegisterCompatToolResponse> {
    const data = CUserAccountRegisterCompatToolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RegisterCompatTool", data);
    return promise.then((data) => CUserAccountRegisterCompatToolResponse.decode(new _m0.Reader(data)));
  }
}

export interface AccountLinking {
  GetLinkedAccountInfo(
    request: CAccountLinkingGetLinkedAccountInfoRequest,
  ): Promise<CAccountLinkingGetLinkedAccountInfoResponse>;
}

export class AccountLinkingClientImpl implements AccountLinking {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "AccountLinking";
    this.rpc = rpc;
    this.GetLinkedAccountInfo = this.GetLinkedAccountInfo.bind(this);
  }
  GetLinkedAccountInfo(
    request: CAccountLinkingGetLinkedAccountInfoRequest,
  ): Promise<CAccountLinkingGetLinkedAccountInfoResponse> {
    const data = CAccountLinkingGetLinkedAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetLinkedAccountInfo", data);
    return promise.then((data) => CAccountLinkingGetLinkedAccountInfoResponse.decode(new _m0.Reader(data)));
  }
}

export interface EmbeddedClient {
  AuthorizeCurrentDevice(
    request: CEmbeddedClientAuthorizeCurrentDeviceRequest,
  ): Promise<CEmbeddedClientAuthorizeDeviceResponse>;
}

export class EmbeddedClientClientImpl implements EmbeddedClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "EmbeddedClient";
    this.rpc = rpc;
    this.AuthorizeCurrentDevice = this.AuthorizeCurrentDevice.bind(this);
  }
  AuthorizeCurrentDevice(
    request: CEmbeddedClientAuthorizeCurrentDeviceRequest,
  ): Promise<CEmbeddedClientAuthorizeDeviceResponse> {
    const data = CEmbeddedClientAuthorizeCurrentDeviceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuthorizeCurrentDevice", data);
    return promise.then((data) => CEmbeddedClientAuthorizeDeviceResponse.decode(new _m0.Reader(data)));
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
