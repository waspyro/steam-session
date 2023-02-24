/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EBroadcastImageType {
  k_EBroadcastImageType_None = 0,
  k_EBroadcastImageType_Offline = 1,
  k_EBroadcastImageType_Standby = 2,
  k_EBroadcastImageType_Avatar = 3,
  k_EBroadcastImageType_Summary = 4,
  k_EBroadcastImageType_Background = 5,
  k_EBroadcastImageType_Emoticon = 6,
  UNRECOGNIZED = -1,
}

export function eBroadcastImageTypeFromJSON(object: any): EBroadcastImageType {
  switch (object) {
    case 0:
    case "k_EBroadcastImageType_None":
      return EBroadcastImageType.k_EBroadcastImageType_None;
    case 1:
    case "k_EBroadcastImageType_Offline":
      return EBroadcastImageType.k_EBroadcastImageType_Offline;
    case 2:
    case "k_EBroadcastImageType_Standby":
      return EBroadcastImageType.k_EBroadcastImageType_Standby;
    case 3:
    case "k_EBroadcastImageType_Avatar":
      return EBroadcastImageType.k_EBroadcastImageType_Avatar;
    case 4:
    case "k_EBroadcastImageType_Summary":
      return EBroadcastImageType.k_EBroadcastImageType_Summary;
    case 5:
    case "k_EBroadcastImageType_Background":
      return EBroadcastImageType.k_EBroadcastImageType_Background;
    case 6:
    case "k_EBroadcastImageType_Emoticon":
      return EBroadcastImageType.k_EBroadcastImageType_Emoticon;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBroadcastImageType.UNRECOGNIZED;
  }
}

export function eBroadcastImageTypeToJSON(object: EBroadcastImageType): string {
  switch (object) {
    case EBroadcastImageType.k_EBroadcastImageType_None:
      return "k_EBroadcastImageType_None";
    case EBroadcastImageType.k_EBroadcastImageType_Offline:
      return "k_EBroadcastImageType_Offline";
    case EBroadcastImageType.k_EBroadcastImageType_Standby:
      return "k_EBroadcastImageType_Standby";
    case EBroadcastImageType.k_EBroadcastImageType_Avatar:
      return "k_EBroadcastImageType_Avatar";
    case EBroadcastImageType.k_EBroadcastImageType_Summary:
      return "k_EBroadcastImageType_Summary";
    case EBroadcastImageType.k_EBroadcastImageType_Background:
      return "k_EBroadcastImageType_Background";
    case EBroadcastImageType.k_EBroadcastImageType_Emoticon:
      return "k_EBroadcastImageType_Emoticon";
    case EBroadcastImageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EGetGamesAlgorithm {
  k_EGetGamesAlgorithm_Default = 1,
  k_EGetGamesAlgorithm_MostPlayed = 2,
  k_EGetGamesAlgorithm_PopularNew = 3,
  UNRECOGNIZED = -1,
}

export function eGetGamesAlgorithmFromJSON(object: any): EGetGamesAlgorithm {
  switch (object) {
    case 1:
    case "k_EGetGamesAlgorithm_Default":
      return EGetGamesAlgorithm.k_EGetGamesAlgorithm_Default;
    case 2:
    case "k_EGetGamesAlgorithm_MostPlayed":
      return EGetGamesAlgorithm.k_EGetGamesAlgorithm_MostPlayed;
    case 3:
    case "k_EGetGamesAlgorithm_PopularNew":
      return EGetGamesAlgorithm.k_EGetGamesAlgorithm_PopularNew;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGetGamesAlgorithm.UNRECOGNIZED;
  }
}

export function eGetGamesAlgorithmToJSON(object: EGetGamesAlgorithm): string {
  switch (object) {
    case EGetGamesAlgorithm.k_EGetGamesAlgorithm_Default:
      return "k_EGetGamesAlgorithm_Default";
    case EGetGamesAlgorithm.k_EGetGamesAlgorithm_MostPlayed:
      return "k_EGetGamesAlgorithm_MostPlayed";
    case EGetGamesAlgorithm.k_EGetGamesAlgorithm_PopularNew:
      return "k_EGetGamesAlgorithm_PopularNew";
    case EGetGamesAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EGetChannelsAlgorithm {
  k_EGetChannelsAlgorithm_Default = 1,
  k_EGetChannelsAlgorithm_Friends = 2,
  k_EGetChannelsAlgorithm_Featured = 3,
  k_EGetChannelsAlgorithm_Developer = 4,
  k_EGetChannelsAlgorithm_Following = 5,
  UNRECOGNIZED = -1,
}

export function eGetChannelsAlgorithmFromJSON(object: any): EGetChannelsAlgorithm {
  switch (object) {
    case 1:
    case "k_EGetChannelsAlgorithm_Default":
      return EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Default;
    case 2:
    case "k_EGetChannelsAlgorithm_Friends":
      return EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Friends;
    case 3:
    case "k_EGetChannelsAlgorithm_Featured":
      return EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Featured;
    case 4:
    case "k_EGetChannelsAlgorithm_Developer":
      return EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Developer;
    case 5:
    case "k_EGetChannelsAlgorithm_Following":
      return EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Following;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGetChannelsAlgorithm.UNRECOGNIZED;
  }
}

export function eGetChannelsAlgorithmToJSON(object: EGetChannelsAlgorithm): string {
  switch (object) {
    case EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Default:
      return "k_EGetChannelsAlgorithm_Default";
    case EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Friends:
      return "k_EGetChannelsAlgorithm_Friends";
    case EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Featured:
      return "k_EGetChannelsAlgorithm_Featured";
    case EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Developer:
      return "k_EGetChannelsAlgorithm_Developer";
    case EGetChannelsAlgorithm.k_EGetChannelsAlgorithm_Following:
      return "k_EGetChannelsAlgorithm_Following";
    case EGetChannelsAlgorithm.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamTVContentTemplate {
  k_ESteamTVContentTemplate_Invalid = 0,
  k_ESteamTVContentTemplate_Takeover = 1,
  k_ESteamTVContentTemplate_SingleGame = 2,
  k_ESteamTVContentTemplate_GameList = 3,
  k_ESteamTVContentTemplate_QuickExplore = 4,
  k_ESteamTVContentTemplate_ConveyorBelt = 5,
  k_ESteamTVContentTemplate_WatchParty = 6,
  k_ESteamTVContentTemplate_Developer = 7,
  k_ESteamTVContentTemplate_Event = 8,
  UNRECOGNIZED = -1,
}

export function eSteamTVContentTemplateFromJSON(object: any): ESteamTVContentTemplate {
  switch (object) {
    case 0:
    case "k_ESteamTVContentTemplate_Invalid":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_Invalid;
    case 1:
    case "k_ESteamTVContentTemplate_Takeover":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_Takeover;
    case 2:
    case "k_ESteamTVContentTemplate_SingleGame":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_SingleGame;
    case 3:
    case "k_ESteamTVContentTemplate_GameList":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_GameList;
    case 4:
    case "k_ESteamTVContentTemplate_QuickExplore":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_QuickExplore;
    case 5:
    case "k_ESteamTVContentTemplate_ConveyorBelt":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_ConveyorBelt;
    case 6:
    case "k_ESteamTVContentTemplate_WatchParty":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_WatchParty;
    case 7:
    case "k_ESteamTVContentTemplate_Developer":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_Developer;
    case 8:
    case "k_ESteamTVContentTemplate_Event":
      return ESteamTVContentTemplate.k_ESteamTVContentTemplate_Event;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamTVContentTemplate.UNRECOGNIZED;
  }
}

export function eSteamTVContentTemplateToJSON(object: ESteamTVContentTemplate): string {
  switch (object) {
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_Invalid:
      return "k_ESteamTVContentTemplate_Invalid";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_Takeover:
      return "k_ESteamTVContentTemplate_Takeover";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_SingleGame:
      return "k_ESteamTVContentTemplate_SingleGame";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_GameList:
      return "k_ESteamTVContentTemplate_GameList";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_QuickExplore:
      return "k_ESteamTVContentTemplate_QuickExplore";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_ConveyorBelt:
      return "k_ESteamTVContentTemplate_ConveyorBelt";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_WatchParty:
      return "k_ESteamTVContentTemplate_WatchParty";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_Developer:
      return "k_ESteamTVContentTemplate_Developer";
    case ESteamTVContentTemplate.k_ESteamTVContentTemplate_Event:
      return "k_ESteamTVContentTemplate_Event";
    case ESteamTVContentTemplate.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CSteamTVCreateBroadcastChannelRequest {
  uniqueName: string;
}

export interface CSteamTVCreateBroadcastChannelResponse {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelIDRequest {
  uniqueName: string;
}

export interface CSteamTVGetBroadcastChannelIDResponse {
  broadcastChannelId: number;
  uniqueName: string;
  steamid: number;
}

export interface CSteamTVSetBroadcastChannelProfileRequest {
  broadcastChannelId: number;
  name: string;
  language: string;
  headline: string;
  summary: string;
  avatarHash: string;
  schedule: string;
  rules: string;
  panels: string;
}

export interface CSteamTVSetBroadcastChannelProfileResponse {
}

export interface CSteamTVGetBroadcastChannelProfileRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelProfileResponse {
  uniqueName: string;
  ownerSteamid: number;
  name: string;
  language: string;
  headline: string;
  summary: string;
  schedule: string;
  rules: string;
  panels: string;
  isPartnered: boolean;
}

export interface CSteamTVSetBroadcastChannelImageRequest {
  broadcastChannelId: number;
  imageType: EBroadcastImageType;
  imageIndex: number;
  imageWidth: number;
  imageHeight: number;
  fileSize: number;
  fileExtension: string;
  fileHash: string;
  undo: boolean;
}

export interface CSteamTVSetBroadcastChannelImageResponse {
  replaceImageHash: string;
}

export interface CSteamTVGetBroadcastChannelImagesRequest {
  broadcastChannelId: number;
  imageTypes: EBroadcastImageType[];
}

export interface CSteamTVGetBroadcastChannelImagesResponse {
  images: CSteamTVGetBroadcastChannelImagesResponse_Images[];
}

export interface CSteamTVGetBroadcastChannelImagesResponse_Images {
  imageType: EBroadcastImageType;
  imagePath: string;
  imageIndex: number;
}

export interface CSteamTVSetBroadcastChannelLinkRegionsRequest {
  broadcastChannelId: number;
  links: CSteamTVSetBroadcastChannelLinkRegionsRequest_Links[];
}

export interface CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
  linkIndex: number;
  url: string;
  linkDescription: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface CSteamTVSetBroadcastChannelLinkRegionsResponse {
}

export interface CSteamTVGetBroadcastChannelLinksRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelLinksResponse {
  links: CSteamTVGetBroadcastChannelLinksResponse_Links[];
}

export interface CSteamTVGetBroadcastChannelLinksResponse_Links {
  linkIndex: number;
  url: string;
  linkDescription: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface CSteamTVGetBroadcastChannelBroadcastersRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelBroadcastersResponse {
  broadcasters: CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster[];
}

export interface CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
  steamid: number;
  name: string;
  rtmpToken: string;
}

export interface CSteamTVGetFollowedChannelsRequest {
}

export interface GetBroadcastChannelEntry {
  broadcastChannelId: number;
  uniqueName: string;
  name: string;
  appid: number;
  viewers: number;
  views: number;
  thumbnailUrl: string;
  followers: number;
  headline: string;
  avatarUrl: string;
  broadcasterSteamid: number;
  subscribers: number;
  backgroundUrl: string;
  isFeatured: boolean;
  isDisabled: boolean;
  isLive: boolean;
  language: string;
  reports: number;
  isPartnered: boolean;
}

export interface CSteamTVGetFollowedChannelsResponse {
  results: GetBroadcastChannelEntry[];
}

export interface CSteamTVGetSubscribedChannelsRequest {
}

export interface CSteamTVGetSubscribedChannelsResponse {
  results: GetBroadcastChannelEntry[];
}

export interface CSteamTVGetBroadcastChannelStatusRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelStatusResponse {
  isLive: boolean;
  isDisabled: boolean;
  appid: number;
  viewers: number;
  views: number;
  broadcasterSteamid: number;
  thumbnailUrl: string;
  followers: number;
  subscribers: number;
  uniqueName: string;
  broadcastSessionId: number;
}

export interface CSteamTVFollowBroadcastChannelRequest {
  broadcastChannelId: number;
  undo: boolean;
}

export interface CSteamTVFollowBroadcastChannelResponse {
  isFollowed: boolean;
}

export interface CSteamTVSubscribeBroadcastChannelRequest {
  broadcastChannelId: number;
}

export interface CSteamTVSubscribeBroadcastChannelResponse {
  isSubscribed: boolean;
}

export interface CSteamTVGetBroadcastChannelClipsRequest {
  broadcastChannelId: number;
}

export interface CSteamTVBroadcastClipInfo {
  broadcastClipId: number;
  channelId: number;
  appId: number;
  broadcasterSteamid: number;
  creatorSteamid: number;
  videoDescription: string;
  liveTime: number;
  lengthMs: number;
  thumbnailPath: string;
}

export interface CSteamTVGetBroadcastChannelClipsResponse {
  clips: CSteamTVBroadcastClipInfo[];
  thumbnailHost: string;
}

export interface CSteamTVReportBroadcastChannelRequest {
  broadcastChannelId: number;
  reason: string;
}

export interface CSteamTVReportBroadcastChannelResponse {
}

export interface CSteamTVGetBroadcastChannelInteractionRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetBroadcastChannelInteractionResponse {
  isFollowed: boolean;
  isSubscribed: boolean;
}

export interface CSteamTVGetGamesRequest {
  appid: number;
  algorithm: EGetGamesAlgorithm;
  count: number;
}

export interface CSteamTVGame {
  appid: number;
  name: string;
  image: string;
  viewers: number;
  channels: GetBroadcastChannelEntry[];
  releaseDate: string;
  developer: string;
  publisher: string;
}

export interface CSteamTVGetGamesResponse {
  results: CSteamTVGame[];
}

export interface CSteamTVGetChannelsRequest {
  algorithm: EGetChannelsAlgorithm;
  count: number;
  appid: number;
}

export interface CSteamTVGetChannelsResponse {
  results: GetBroadcastChannelEntry[];
}

export interface CSteamTVAddChatBanRequest {
  broadcastChannelId: number;
  chatterSteamid: number;
  duration: number;
  permanent: boolean;
  undo: boolean;
}

export interface CSteamTVAddChatBanResponse {
}

export interface CSteamTVGetChatBansRequest {
  broadcastChannelId: number;
}

export interface CSteamTVChatBan {
  issuerSteamid: number;
  chatterSteamid: number;
  timeExpires: string;
  permanent: boolean;
  name: string;
}

export interface CSteamTVGetChatBansResponse {
  results: CSteamTVChatBan[];
}

export interface CSteamTVAddChatModeratorRequest {
  broadcastChannelId: number;
  moderatorSteamid: number;
  undo: boolean;
}

export interface CSteamTVAddChatModeratorResponse {
}

export interface CSteamTVGetChatModeratorsRequest {
  broadcastChannelId: number;
}

export interface CSteamTVChatModerator {
  steamid: number;
  name: string;
}

export interface CSteamTVGetChatModeratorsResponse {
  results: CSteamTVChatModerator[];
}

export interface CSteamTVAddWordBanRequest {
  broadcastChannelId: number;
  word: string;
  undo: boolean;
}

export interface CSteamTVAddWordBanResponse {
}

export interface CSteamTVGetWordBansRequest {
  broadcastChannelId: number;
}

export interface CSteamTVGetWordBansResponse {
  results: string[];
}

export interface CSteamTVJoinChatRequest {
  broadcastChannelId: number;
}

export interface CSteamTVJoinChatResponse {
  chatId: number;
  viewUrlTemplate: string;
  flairGroupIds: number[];
}

export interface CSteamTVSearchRequest {
  term: string;
}

export interface CSteamTVSearchResponse {
  results: GetBroadcastChannelEntry[];
}

export interface CSteamTVGetSteamTVUserSettingsRequest {
}

export interface CSteamTVGetSteamTVUserSettingsResponse {
  streamLiveEmail: boolean;
  streamLiveNotification: boolean;
}

export interface CSteamTVSetSteamTVUserSettingsRequest {
  streamLiveEmail: boolean;
  streamLiveNotification: boolean;
}

export interface CSteamTVSetSteamTVUserSettingsResponse {
}

export interface CSteamTVGetMyBroadcastChannelsRequest {
}

export interface CSteamTVGetMyBroadcastChannelsResponse {
  results: GetBroadcastChannelEntry[];
}

export interface CSteamTVGetHomePageContentsRequest {
}

export interface CSteamTVHomePageTemplateTakeover {
  broadcasts: GetBroadcastChannelEntry[];
}

export interface CSteamTVHomePageTemplateSingleGame {
  broadcasts: GetBroadcastChannelEntry[];
  appid: number;
  title: string;
}

export interface GameListEntry {
  appid: number;
  gameName: string;
  broadcast: GetBroadcastChannelEntry | undefined;
}

export interface CSteamTVHomePageTemplateGameList {
  entries: GameListEntry[];
  title: string;
}

export interface CSteamTVHomePageTemplateQuickExplore {
  broadcasts: GetBroadcastChannelEntry[];
  title: string;
}

export interface CSteamTVHomePageTemplateConveyorBelt {
  broadcasts: GetBroadcastChannelEntry[];
  title: string;
}

export interface CSteamTVHomePageTemplateWatchParty {
  broadcast: GetBroadcastChannelEntry | undefined;
  title: string;
  chatGroupId: number;
}

export interface CSteamTVHomePageTemplateDeveloper {
  broadcast: GetBroadcastChannelEntry | undefined;
  title: string;
}

export interface CSteamTVHomePageTemplateEvent {
  title: string;
}

export interface CSteamTVHomePageContentRow {
  templateType: ESteamTVContentTemplate;
  takeover: CSteamTVHomePageTemplateTakeover | undefined;
  singleGame: CSteamTVHomePageTemplateSingleGame | undefined;
  gameList: CSteamTVHomePageTemplateGameList | undefined;
  quickExplore: CSteamTVHomePageTemplateQuickExplore | undefined;
  conveyorBelt: CSteamTVHomePageTemplateConveyorBelt | undefined;
  watchParty: CSteamTVHomePageTemplateWatchParty | undefined;
  developer: CSteamTVHomePageTemplateDeveloper | undefined;
  event: CSteamTVHomePageTemplateEvent | undefined;
}

export interface CSteamTVGetHomePageContentsResponse {
  rows: CSteamTVHomePageContentRow[];
}

export interface CSteamTVAppCheerSingleCheerType {
  cheerType: number;
  cheerAmount: number;
}

export interface CSteamTVAppCheerRequest {
  appId: number;
  cheerTargetId: number;
  cheers: CSteamTVAppCheerSingleCheerType[];
}

export interface CSteamTVAppCheerResponse {
  aggregationDelayMs: number;
}

function createBaseCSteamTVCreateBroadcastChannelRequest(): CSteamTVCreateBroadcastChannelRequest {
  return { uniqueName: "" };
}

export const CSteamTVCreateBroadcastChannelRequest = {
  encode(message: CSteamTVCreateBroadcastChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueName !== "") {
      writer.uint32(10).string(message.uniqueName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVCreateBroadcastChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVCreateBroadcastChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniqueName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVCreateBroadcastChannelRequest {
    return { uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "" };
  },

  toJSON(message: CSteamTVCreateBroadcastChannelRequest): unknown {
    const obj: any = {};
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVCreateBroadcastChannelRequest>, I>>(
    base?: I,
  ): CSteamTVCreateBroadcastChannelRequest {
    return CSteamTVCreateBroadcastChannelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVCreateBroadcastChannelRequest>, I>>(
    object: I,
  ): CSteamTVCreateBroadcastChannelRequest {
    const message = createBaseCSteamTVCreateBroadcastChannelRequest();
    message.uniqueName = object.uniqueName ?? "";
    return message;
  },
};

function createBaseCSteamTVCreateBroadcastChannelResponse(): CSteamTVCreateBroadcastChannelResponse {
  return { broadcastChannelId: 0 };
}

export const CSteamTVCreateBroadcastChannelResponse = {
  encode(message: CSteamTVCreateBroadcastChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVCreateBroadcastChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVCreateBroadcastChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVCreateBroadcastChannelResponse {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVCreateBroadcastChannelResponse): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVCreateBroadcastChannelResponse>, I>>(
    base?: I,
  ): CSteamTVCreateBroadcastChannelResponse {
    return CSteamTVCreateBroadcastChannelResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVCreateBroadcastChannelResponse>, I>>(
    object: I,
  ): CSteamTVCreateBroadcastChannelResponse {
    const message = createBaseCSteamTVCreateBroadcastChannelResponse();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelIDRequest(): CSteamTVGetBroadcastChannelIDRequest {
  return { uniqueName: "" };
}

export const CSteamTVGetBroadcastChannelIDRequest = {
  encode(message: CSteamTVGetBroadcastChannelIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueName !== "") {
      writer.uint32(10).string(message.uniqueName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniqueName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelIDRequest {
    return { uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "" };
  },

  toJSON(message: CSteamTVGetBroadcastChannelIDRequest): unknown {
    const obj: any = {};
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelIDRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelIDRequest {
    return CSteamTVGetBroadcastChannelIDRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelIDRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelIDRequest {
    const message = createBaseCSteamTVGetBroadcastChannelIDRequest();
    message.uniqueName = object.uniqueName ?? "";
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelIDResponse(): CSteamTVGetBroadcastChannelIDResponse {
  return { broadcastChannelId: 0, uniqueName: "", steamid: 0 };
}

export const CSteamTVGetBroadcastChannelIDResponse = {
  encode(message: CSteamTVGetBroadcastChannelIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.uniqueName !== "") {
      writer.uint32(18).string(message.uniqueName);
    }
    if (message.steamid !== 0) {
      writer.uint32(25).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.uniqueName = reader.string();
          break;
        case 3:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelIDResponse {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "",
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelIDResponse): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelIDResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelIDResponse {
    return CSteamTVGetBroadcastChannelIDResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelIDResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelIDResponse {
    const message = createBaseCSteamTVGetBroadcastChannelIDResponse();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.uniqueName = object.uniqueName ?? "";
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelProfileRequest(): CSteamTVSetBroadcastChannelProfileRequest {
  return {
    broadcastChannelId: 0,
    name: "",
    language: "",
    headline: "",
    summary: "",
    avatarHash: "",
    schedule: "",
    rules: "",
    panels: "",
  };
}

export const CSteamTVSetBroadcastChannelProfileRequest = {
  encode(message: CSteamTVSetBroadcastChannelProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.language !== "") {
      writer.uint32(26).string(message.language);
    }
    if (message.headline !== "") {
      writer.uint32(34).string(message.headline);
    }
    if (message.summary !== "") {
      writer.uint32(42).string(message.summary);
    }
    if (message.avatarHash !== "") {
      writer.uint32(50).string(message.avatarHash);
    }
    if (message.schedule !== "") {
      writer.uint32(58).string(message.schedule);
    }
    if (message.rules !== "") {
      writer.uint32(66).string(message.rules);
    }
    if (message.panels !== "") {
      writer.uint32(74).string(message.panels);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.language = reader.string();
          break;
        case 4:
          message.headline = reader.string();
          break;
        case 5:
          message.summary = reader.string();
          break;
        case 6:
          message.avatarHash = reader.string();
          break;
        case 7:
          message.schedule = reader.string();
          break;
        case 8:
          message.rules = reader.string();
          break;
        case 9:
          message.panels = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetBroadcastChannelProfileRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      language: isSet(object.language) ? String(object.language) : "",
      headline: isSet(object.headline) ? String(object.headline) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      avatarHash: isSet(object.avatarHash) ? String(object.avatarHash) : "",
      schedule: isSet(object.schedule) ? String(object.schedule) : "",
      rules: isSet(object.rules) ? String(object.rules) : "",
      panels: isSet(object.panels) ? String(object.panels) : "",
    };
  },

  toJSON(message: CSteamTVSetBroadcastChannelProfileRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.name !== undefined && (obj.name = message.name);
    message.language !== undefined && (obj.language = message.language);
    message.headline !== undefined && (obj.headline = message.headline);
    message.summary !== undefined && (obj.summary = message.summary);
    message.avatarHash !== undefined && (obj.avatarHash = message.avatarHash);
    message.schedule !== undefined && (obj.schedule = message.schedule);
    message.rules !== undefined && (obj.rules = message.rules);
    message.panels !== undefined && (obj.panels = message.panels);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelProfileRequest>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelProfileRequest {
    return CSteamTVSetBroadcastChannelProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelProfileRequest>, I>>(
    object: I,
  ): CSteamTVSetBroadcastChannelProfileRequest {
    const message = createBaseCSteamTVSetBroadcastChannelProfileRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.name = object.name ?? "";
    message.language = object.language ?? "";
    message.headline = object.headline ?? "";
    message.summary = object.summary ?? "";
    message.avatarHash = object.avatarHash ?? "";
    message.schedule = object.schedule ?? "";
    message.rules = object.rules ?? "";
    message.panels = object.panels ?? "";
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelProfileResponse(): CSteamTVSetBroadcastChannelProfileResponse {
  return {};
}

export const CSteamTVSetBroadcastChannelProfileResponse = {
  encode(_: CSteamTVSetBroadcastChannelProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelProfileResponse();
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

  fromJSON(_: any): CSteamTVSetBroadcastChannelProfileResponse {
    return {};
  },

  toJSON(_: CSteamTVSetBroadcastChannelProfileResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelProfileResponse>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelProfileResponse {
    return CSteamTVSetBroadcastChannelProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelProfileResponse>, I>>(
    _: I,
  ): CSteamTVSetBroadcastChannelProfileResponse {
    const message = createBaseCSteamTVSetBroadcastChannelProfileResponse();
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelProfileRequest(): CSteamTVGetBroadcastChannelProfileRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelProfileRequest = {
  encode(message: CSteamTVGetBroadcastChannelProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelProfileRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelProfileRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelProfileRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelProfileRequest {
    return CSteamTVGetBroadcastChannelProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelProfileRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelProfileRequest {
    const message = createBaseCSteamTVGetBroadcastChannelProfileRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelProfileResponse(): CSteamTVGetBroadcastChannelProfileResponse {
  return {
    uniqueName: "",
    ownerSteamid: 0,
    name: "",
    language: "",
    headline: "",
    summary: "",
    schedule: "",
    rules: "",
    panels: "",
    isPartnered: false,
  };
}

export const CSteamTVGetBroadcastChannelProfileResponse = {
  encode(message: CSteamTVGetBroadcastChannelProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueName !== "") {
      writer.uint32(10).string(message.uniqueName);
    }
    if (message.ownerSteamid !== 0) {
      writer.uint32(17).fixed64(message.ownerSteamid);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.language !== "") {
      writer.uint32(34).string(message.language);
    }
    if (message.headline !== "") {
      writer.uint32(42).string(message.headline);
    }
    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }
    if (message.schedule !== "") {
      writer.uint32(58).string(message.schedule);
    }
    if (message.rules !== "") {
      writer.uint32(66).string(message.rules);
    }
    if (message.panels !== "") {
      writer.uint32(74).string(message.panels);
    }
    if (message.isPartnered === true) {
      writer.uint32(80).bool(message.isPartnered);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uniqueName = reader.string();
          break;
        case 2:
          message.ownerSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.language = reader.string();
          break;
        case 5:
          message.headline = reader.string();
          break;
        case 6:
          message.summary = reader.string();
          break;
        case 7:
          message.schedule = reader.string();
          break;
        case 8:
          message.rules = reader.string();
          break;
        case 9:
          message.panels = reader.string();
          break;
        case 10:
          message.isPartnered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelProfileResponse {
    return {
      uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "",
      ownerSteamid: isSet(object.ownerSteamid) ? Number(object.ownerSteamid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      language: isSet(object.language) ? String(object.language) : "",
      headline: isSet(object.headline) ? String(object.headline) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      schedule: isSet(object.schedule) ? String(object.schedule) : "",
      rules: isSet(object.rules) ? String(object.rules) : "",
      panels: isSet(object.panels) ? String(object.panels) : "",
      isPartnered: isSet(object.isPartnered) ? Boolean(object.isPartnered) : false,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelProfileResponse): unknown {
    const obj: any = {};
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    message.ownerSteamid !== undefined && (obj.ownerSteamid = Math.round(message.ownerSteamid));
    message.name !== undefined && (obj.name = message.name);
    message.language !== undefined && (obj.language = message.language);
    message.headline !== undefined && (obj.headline = message.headline);
    message.summary !== undefined && (obj.summary = message.summary);
    message.schedule !== undefined && (obj.schedule = message.schedule);
    message.rules !== undefined && (obj.rules = message.rules);
    message.panels !== undefined && (obj.panels = message.panels);
    message.isPartnered !== undefined && (obj.isPartnered = message.isPartnered);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelProfileResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelProfileResponse {
    return CSteamTVGetBroadcastChannelProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelProfileResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelProfileResponse {
    const message = createBaseCSteamTVGetBroadcastChannelProfileResponse();
    message.uniqueName = object.uniqueName ?? "";
    message.ownerSteamid = object.ownerSteamid ?? 0;
    message.name = object.name ?? "";
    message.language = object.language ?? "";
    message.headline = object.headline ?? "";
    message.summary = object.summary ?? "";
    message.schedule = object.schedule ?? "";
    message.rules = object.rules ?? "";
    message.panels = object.panels ?? "";
    message.isPartnered = object.isPartnered ?? false;
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelImageRequest(): CSteamTVSetBroadcastChannelImageRequest {
  return {
    broadcastChannelId: 0,
    imageType: 0,
    imageIndex: 0,
    imageWidth: 0,
    imageHeight: 0,
    fileSize: 0,
    fileExtension: "",
    fileHash: "",
    undo: false,
  };
}

export const CSteamTVSetBroadcastChannelImageRequest = {
  encode(message: CSteamTVSetBroadcastChannelImageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.imageType !== 0) {
      writer.uint32(16).int32(message.imageType);
    }
    if (message.imageIndex !== 0) {
      writer.uint32(24).uint32(message.imageIndex);
    }
    if (message.imageWidth !== 0) {
      writer.uint32(32).uint32(message.imageWidth);
    }
    if (message.imageHeight !== 0) {
      writer.uint32(40).uint32(message.imageHeight);
    }
    if (message.fileSize !== 0) {
      writer.uint32(48).uint32(message.fileSize);
    }
    if (message.fileExtension !== "") {
      writer.uint32(58).string(message.fileExtension);
    }
    if (message.fileHash !== "") {
      writer.uint32(66).string(message.fileHash);
    }
    if (message.undo === true) {
      writer.uint32(72).bool(message.undo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelImageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelImageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.imageType = reader.int32() as any;
          break;
        case 3:
          message.imageIndex = reader.uint32();
          break;
        case 4:
          message.imageWidth = reader.uint32();
          break;
        case 5:
          message.imageHeight = reader.uint32();
          break;
        case 6:
          message.fileSize = reader.uint32();
          break;
        case 7:
          message.fileExtension = reader.string();
          break;
        case 8:
          message.fileHash = reader.string();
          break;
        case 9:
          message.undo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetBroadcastChannelImageRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      imageType: isSet(object.imageType) ? eBroadcastImageTypeFromJSON(object.imageType) : 0,
      imageIndex: isSet(object.imageIndex) ? Number(object.imageIndex) : 0,
      imageWidth: isSet(object.imageWidth) ? Number(object.imageWidth) : 0,
      imageHeight: isSet(object.imageHeight) ? Number(object.imageHeight) : 0,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      fileExtension: isSet(object.fileExtension) ? String(object.fileExtension) : "",
      fileHash: isSet(object.fileHash) ? String(object.fileHash) : "",
      undo: isSet(object.undo) ? Boolean(object.undo) : false,
    };
  },

  toJSON(message: CSteamTVSetBroadcastChannelImageRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.imageType !== undefined && (obj.imageType = eBroadcastImageTypeToJSON(message.imageType));
    message.imageIndex !== undefined && (obj.imageIndex = Math.round(message.imageIndex));
    message.imageWidth !== undefined && (obj.imageWidth = Math.round(message.imageWidth));
    message.imageHeight !== undefined && (obj.imageHeight = Math.round(message.imageHeight));
    message.fileSize !== undefined && (obj.fileSize = Math.round(message.fileSize));
    message.fileExtension !== undefined && (obj.fileExtension = message.fileExtension);
    message.fileHash !== undefined && (obj.fileHash = message.fileHash);
    message.undo !== undefined && (obj.undo = message.undo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelImageRequest>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelImageRequest {
    return CSteamTVSetBroadcastChannelImageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelImageRequest>, I>>(
    object: I,
  ): CSteamTVSetBroadcastChannelImageRequest {
    const message = createBaseCSteamTVSetBroadcastChannelImageRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.imageType = object.imageType ?? 0;
    message.imageIndex = object.imageIndex ?? 0;
    message.imageWidth = object.imageWidth ?? 0;
    message.imageHeight = object.imageHeight ?? 0;
    message.fileSize = object.fileSize ?? 0;
    message.fileExtension = object.fileExtension ?? "";
    message.fileHash = object.fileHash ?? "";
    message.undo = object.undo ?? false;
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelImageResponse(): CSteamTVSetBroadcastChannelImageResponse {
  return { replaceImageHash: "" };
}

export const CSteamTVSetBroadcastChannelImageResponse = {
  encode(message: CSteamTVSetBroadcastChannelImageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.replaceImageHash !== "") {
      writer.uint32(10).string(message.replaceImageHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelImageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelImageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replaceImageHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetBroadcastChannelImageResponse {
    return { replaceImageHash: isSet(object.replaceImageHash) ? String(object.replaceImageHash) : "" };
  },

  toJSON(message: CSteamTVSetBroadcastChannelImageResponse): unknown {
    const obj: any = {};
    message.replaceImageHash !== undefined && (obj.replaceImageHash = message.replaceImageHash);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelImageResponse>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelImageResponse {
    return CSteamTVSetBroadcastChannelImageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelImageResponse>, I>>(
    object: I,
  ): CSteamTVSetBroadcastChannelImageResponse {
    const message = createBaseCSteamTVSetBroadcastChannelImageResponse();
    message.replaceImageHash = object.replaceImageHash ?? "";
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelImagesRequest(): CSteamTVGetBroadcastChannelImagesRequest {
  return { broadcastChannelId: 0, imageTypes: [] };
}

export const CSteamTVGetBroadcastChannelImagesRequest = {
  encode(message: CSteamTVGetBroadcastChannelImagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    writer.uint32(18).fork();
    for (const v of message.imageTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelImagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelImagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.imageTypes.push(reader.int32() as any);
            }
          } else {
            message.imageTypes.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelImagesRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      imageTypes: Array.isArray(object?.imageTypes)
        ? object.imageTypes.map((e: any) => eBroadcastImageTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelImagesRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    if (message.imageTypes) {
      obj.imageTypes = message.imageTypes.map((e) => eBroadcastImageTypeToJSON(e));
    } else {
      obj.imageTypes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelImagesRequest {
    return CSteamTVGetBroadcastChannelImagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelImagesRequest {
    const message = createBaseCSteamTVGetBroadcastChannelImagesRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.imageTypes = object.imageTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelImagesResponse(): CSteamTVGetBroadcastChannelImagesResponse {
  return { images: [] };
}

export const CSteamTVGetBroadcastChannelImagesResponse = {
  encode(message: CSteamTVGetBroadcastChannelImagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.images) {
      CSteamTVGetBroadcastChannelImagesResponse_Images.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelImagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelImagesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.images.push(CSteamTVGetBroadcastChannelImagesResponse_Images.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelImagesResponse {
    return {
      images: Array.isArray(object?.images)
        ? object.images.map((e: any) => CSteamTVGetBroadcastChannelImagesResponse_Images.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelImagesResponse): unknown {
    const obj: any = {};
    if (message.images) {
      obj.images = message.images.map((e) =>
        e ? CSteamTVGetBroadcastChannelImagesResponse_Images.toJSON(e) : undefined
      );
    } else {
      obj.images = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelImagesResponse {
    return CSteamTVGetBroadcastChannelImagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelImagesResponse {
    const message = createBaseCSteamTVGetBroadcastChannelImagesResponse();
    message.images = object.images?.map((e) => CSteamTVGetBroadcastChannelImagesResponse_Images.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelImagesResponse_Images(): CSteamTVGetBroadcastChannelImagesResponse_Images {
  return { imageType: 0, imagePath: "", imageIndex: 0 };
}

export const CSteamTVGetBroadcastChannelImagesResponse_Images = {
  encode(
    message: CSteamTVGetBroadcastChannelImagesResponse_Images,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.imageType !== 0) {
      writer.uint32(8).int32(message.imageType);
    }
    if (message.imagePath !== "") {
      writer.uint32(18).string(message.imagePath);
    }
    if (message.imageIndex !== 0) {
      writer.uint32(24).uint32(message.imageIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelImagesResponse_Images {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelImagesResponse_Images();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.imageType = reader.int32() as any;
          break;
        case 2:
          message.imagePath = reader.string();
          break;
        case 3:
          message.imageIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelImagesResponse_Images {
    return {
      imageType: isSet(object.imageType) ? eBroadcastImageTypeFromJSON(object.imageType) : 0,
      imagePath: isSet(object.imagePath) ? String(object.imagePath) : "",
      imageIndex: isSet(object.imageIndex) ? Number(object.imageIndex) : 0,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelImagesResponse_Images): unknown {
    const obj: any = {};
    message.imageType !== undefined && (obj.imageType = eBroadcastImageTypeToJSON(message.imageType));
    message.imagePath !== undefined && (obj.imagePath = message.imagePath);
    message.imageIndex !== undefined && (obj.imageIndex = Math.round(message.imageIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesResponse_Images>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelImagesResponse_Images {
    return CSteamTVGetBroadcastChannelImagesResponse_Images.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelImagesResponse_Images>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelImagesResponse_Images {
    const message = createBaseCSteamTVGetBroadcastChannelImagesResponse_Images();
    message.imageType = object.imageType ?? 0;
    message.imagePath = object.imagePath ?? "";
    message.imageIndex = object.imageIndex ?? 0;
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest(): CSteamTVSetBroadcastChannelLinkRegionsRequest {
  return { broadcastChannelId: 0, links: [] };
}

export const CSteamTVSetBroadcastChannelLinkRegionsRequest = {
  encode(message: CSteamTVSetBroadcastChannelLinkRegionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    for (const v of message.links) {
      CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelLinkRegionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.links.push(CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetBroadcastChannelLinkRegionsRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVSetBroadcastChannelLinkRegionsRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsRequest>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsRequest {
    return CSteamTVSetBroadcastChannelLinkRegionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsRequest>, I>>(
    object: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsRequest {
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.links = object.links?.map((e) => CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest_Links(): CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
  return { linkIndex: 0, url: "", linkDescription: "", left: 0, top: 0, width: 0, height: 0 };
}

export const CSteamTVSetBroadcastChannelLinkRegionsRequest_Links = {
  encode(
    message: CSteamTVSetBroadcastChannelLinkRegionsRequest_Links,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.linkIndex !== 0) {
      writer.uint32(8).uint32(message.linkIndex);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.linkDescription !== "") {
      writer.uint32(26).string(message.linkDescription);
    }
    if (message.left !== 0) {
      writer.uint32(32).uint32(message.left);
    }
    if (message.top !== 0) {
      writer.uint32(40).uint32(message.top);
    }
    if (message.width !== 0) {
      writer.uint32(48).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(56).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest_Links();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkIndex = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.linkDescription = reader.string();
          break;
        case 4:
          message.left = reader.uint32();
          break;
        case 5:
          message.top = reader.uint32();
          break;
        case 6:
          message.width = reader.uint32();
          break;
        case 7:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
    return {
      linkIndex: isSet(object.linkIndex) ? Number(object.linkIndex) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      linkDescription: isSet(object.linkDescription) ? String(object.linkDescription) : "",
      left: isSet(object.left) ? Number(object.left) : 0,
      top: isSet(object.top) ? Number(object.top) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CSteamTVSetBroadcastChannelLinkRegionsRequest_Links): unknown {
    const obj: any = {};
    message.linkIndex !== undefined && (obj.linkIndex = Math.round(message.linkIndex));
    message.url !== undefined && (obj.url = message.url);
    message.linkDescription !== undefined && (obj.linkDescription = message.linkDescription);
    message.left !== undefined && (obj.left = Math.round(message.left));
    message.top !== undefined && (obj.top = Math.round(message.top));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsRequest_Links>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
    return CSteamTVSetBroadcastChannelLinkRegionsRequest_Links.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsRequest_Links>, I>>(
    object: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsRequest_Links {
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsRequest_Links();
    message.linkIndex = object.linkIndex ?? 0;
    message.url = object.url ?? "";
    message.linkDescription = object.linkDescription ?? "";
    message.left = object.left ?? 0;
    message.top = object.top ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCSteamTVSetBroadcastChannelLinkRegionsResponse(): CSteamTVSetBroadcastChannelLinkRegionsResponse {
  return {};
}

export const CSteamTVSetBroadcastChannelLinkRegionsResponse = {
  encode(_: CSteamTVSetBroadcastChannelLinkRegionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetBroadcastChannelLinkRegionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsResponse();
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

  fromJSON(_: any): CSteamTVSetBroadcastChannelLinkRegionsResponse {
    return {};
  },

  toJSON(_: CSteamTVSetBroadcastChannelLinkRegionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsResponse>, I>>(
    base?: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsResponse {
    return CSteamTVSetBroadcastChannelLinkRegionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetBroadcastChannelLinkRegionsResponse>, I>>(
    _: I,
  ): CSteamTVSetBroadcastChannelLinkRegionsResponse {
    const message = createBaseCSteamTVSetBroadcastChannelLinkRegionsResponse();
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelLinksRequest(): CSteamTVGetBroadcastChannelLinksRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelLinksRequest = {
  encode(message: CSteamTVGetBroadcastChannelLinksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelLinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelLinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelLinksRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelLinksRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelLinksRequest {
    return CSteamTVGetBroadcastChannelLinksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelLinksRequest {
    const message = createBaseCSteamTVGetBroadcastChannelLinksRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelLinksResponse(): CSteamTVGetBroadcastChannelLinksResponse {
  return { links: [] };
}

export const CSteamTVGetBroadcastChannelLinksResponse = {
  encode(message: CSteamTVGetBroadcastChannelLinksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.links) {
      CSteamTVGetBroadcastChannelLinksResponse_Links.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelLinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(CSteamTVGetBroadcastChannelLinksResponse_Links.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelLinksResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => CSteamTVGetBroadcastChannelLinksResponse_Links.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelLinksResponse): unknown {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) => e ? CSteamTVGetBroadcastChannelLinksResponse_Links.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelLinksResponse {
    return CSteamTVGetBroadcastChannelLinksResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelLinksResponse {
    const message = createBaseCSteamTVGetBroadcastChannelLinksResponse();
    message.links = object.links?.map((e) => CSteamTVGetBroadcastChannelLinksResponse_Links.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelLinksResponse_Links(): CSteamTVGetBroadcastChannelLinksResponse_Links {
  return { linkIndex: 0, url: "", linkDescription: "", left: 0, top: 0, width: 0, height: 0 };
}

export const CSteamTVGetBroadcastChannelLinksResponse_Links = {
  encode(
    message: CSteamTVGetBroadcastChannelLinksResponse_Links,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.linkIndex !== 0) {
      writer.uint32(8).uint32(message.linkIndex);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.linkDescription !== "") {
      writer.uint32(26).string(message.linkDescription);
    }
    if (message.left !== 0) {
      writer.uint32(32).uint32(message.left);
    }
    if (message.top !== 0) {
      writer.uint32(40).uint32(message.top);
    }
    if (message.width !== 0) {
      writer.uint32(48).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(56).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelLinksResponse_Links {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelLinksResponse_Links();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkIndex = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.linkDescription = reader.string();
          break;
        case 4:
          message.left = reader.uint32();
          break;
        case 5:
          message.top = reader.uint32();
          break;
        case 6:
          message.width = reader.uint32();
          break;
        case 7:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelLinksResponse_Links {
    return {
      linkIndex: isSet(object.linkIndex) ? Number(object.linkIndex) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      linkDescription: isSet(object.linkDescription) ? String(object.linkDescription) : "",
      left: isSet(object.left) ? Number(object.left) : 0,
      top: isSet(object.top) ? Number(object.top) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelLinksResponse_Links): unknown {
    const obj: any = {};
    message.linkIndex !== undefined && (obj.linkIndex = Math.round(message.linkIndex));
    message.url !== undefined && (obj.url = message.url);
    message.linkDescription !== undefined && (obj.linkDescription = message.linkDescription);
    message.left !== undefined && (obj.left = Math.round(message.left));
    message.top !== undefined && (obj.top = Math.round(message.top));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksResponse_Links>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelLinksResponse_Links {
    return CSteamTVGetBroadcastChannelLinksResponse_Links.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelLinksResponse_Links>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelLinksResponse_Links {
    const message = createBaseCSteamTVGetBroadcastChannelLinksResponse_Links();
    message.linkIndex = object.linkIndex ?? 0;
    message.url = object.url ?? "";
    message.linkDescription = object.linkDescription ?? "";
    message.left = object.left ?? 0;
    message.top = object.top ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelBroadcastersRequest(): CSteamTVGetBroadcastChannelBroadcastersRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelBroadcastersRequest = {
  encode(
    message: CSteamTVGetBroadcastChannelBroadcastersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelBroadcastersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelBroadcastersRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelBroadcastersRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelBroadcastersRequest {
    return CSteamTVGetBroadcastChannelBroadcastersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelBroadcastersRequest {
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelBroadcastersResponse(): CSteamTVGetBroadcastChannelBroadcastersResponse {
  return { broadcasters: [] };
}

export const CSteamTVGetBroadcastChannelBroadcastersResponse = {
  encode(
    message: CSteamTVGetBroadcastChannelBroadcastersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.broadcasters) {
      CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelBroadcastersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasters.push(
            CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelBroadcastersResponse {
    return {
      broadcasters: Array.isArray(object?.broadcasters)
        ? object.broadcasters.map((e: any) => CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelBroadcastersResponse): unknown {
    const obj: any = {};
    if (message.broadcasters) {
      obj.broadcasters = message.broadcasters.map((e) =>
        e ? CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.toJSON(e) : undefined
      );
    } else {
      obj.broadcasters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelBroadcastersResponse {
    return CSteamTVGetBroadcastChannelBroadcastersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelBroadcastersResponse {
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersResponse();
    message.broadcasters =
      object.broadcasters?.map((e) => CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster(): CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
  return { steamid: 0, name: "", rtmpToken: "" };
}

export const CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster = {
  encode(
    message: CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rtmpToken !== "") {
      writer.uint32(26).string(message.rtmpToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.rtmpToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      rtmpToken: isSet(object.rtmpToken) ? String(object.rtmpToken) : "",
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.name !== undefined && (obj.name = message.name);
    message.rtmpToken !== undefined && (obj.rtmpToken = message.rtmpToken);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
    return CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster {
    const message = createBaseCSteamTVGetBroadcastChannelBroadcastersResponse_Broadcaster();
    message.steamid = object.steamid ?? 0;
    message.name = object.name ?? "";
    message.rtmpToken = object.rtmpToken ?? "";
    return message;
  },
};

function createBaseCSteamTVGetFollowedChannelsRequest(): CSteamTVGetFollowedChannelsRequest {
  return {};
}

export const CSteamTVGetFollowedChannelsRequest = {
  encode(_: CSteamTVGetFollowedChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetFollowedChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetFollowedChannelsRequest();
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

  fromJSON(_: any): CSteamTVGetFollowedChannelsRequest {
    return {};
  },

  toJSON(_: CSteamTVGetFollowedChannelsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetFollowedChannelsRequest>, I>>(
    base?: I,
  ): CSteamTVGetFollowedChannelsRequest {
    return CSteamTVGetFollowedChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetFollowedChannelsRequest>, I>>(
    _: I,
  ): CSteamTVGetFollowedChannelsRequest {
    const message = createBaseCSteamTVGetFollowedChannelsRequest();
    return message;
  },
};

function createBaseGetBroadcastChannelEntry(): GetBroadcastChannelEntry {
  return {
    broadcastChannelId: 0,
    uniqueName: "",
    name: "",
    appid: 0,
    viewers: 0,
    views: 0,
    thumbnailUrl: "",
    followers: 0,
    headline: "",
    avatarUrl: "",
    broadcasterSteamid: 0,
    subscribers: 0,
    backgroundUrl: "",
    isFeatured: false,
    isDisabled: false,
    isLive: false,
    language: "",
    reports: 0,
    isPartnered: false,
  };
}

export const GetBroadcastChannelEntry = {
  encode(message: GetBroadcastChannelEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.uniqueName !== "") {
      writer.uint32(18).string(message.uniqueName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.appid !== 0) {
      writer.uint32(32).uint32(message.appid);
    }
    if (message.viewers !== 0) {
      writer.uint32(40).uint64(message.viewers);
    }
    if (message.views !== 0) {
      writer.uint32(48).uint64(message.views);
    }
    if (message.thumbnailUrl !== "") {
      writer.uint32(58).string(message.thumbnailUrl);
    }
    if (message.followers !== 0) {
      writer.uint32(64).uint64(message.followers);
    }
    if (message.headline !== "") {
      writer.uint32(74).string(message.headline);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(82).string(message.avatarUrl);
    }
    if (message.broadcasterSteamid !== 0) {
      writer.uint32(89).fixed64(message.broadcasterSteamid);
    }
    if (message.subscribers !== 0) {
      writer.uint32(96).uint64(message.subscribers);
    }
    if (message.backgroundUrl !== "") {
      writer.uint32(106).string(message.backgroundUrl);
    }
    if (message.isFeatured === true) {
      writer.uint32(112).bool(message.isFeatured);
    }
    if (message.isDisabled === true) {
      writer.uint32(120).bool(message.isDisabled);
    }
    if (message.isLive === true) {
      writer.uint32(128).bool(message.isLive);
    }
    if (message.language !== "") {
      writer.uint32(138).string(message.language);
    }
    if (message.reports !== 0) {
      writer.uint32(144).uint32(message.reports);
    }
    if (message.isPartnered === true) {
      writer.uint32(152).bool(message.isPartnered);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBroadcastChannelEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBroadcastChannelEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.uniqueName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.appid = reader.uint32();
          break;
        case 5:
          message.viewers = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.views = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.thumbnailUrl = reader.string();
          break;
        case 8:
          message.followers = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.headline = reader.string();
          break;
        case 10:
          message.avatarUrl = reader.string();
          break;
        case 11:
          message.broadcasterSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 12:
          message.subscribers = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.backgroundUrl = reader.string();
          break;
        case 14:
          message.isFeatured = reader.bool();
          break;
        case 15:
          message.isDisabled = reader.bool();
          break;
        case 16:
          message.isLive = reader.bool();
          break;
        case 17:
          message.language = reader.string();
          break;
        case 18:
          message.reports = reader.uint32();
          break;
        case 19:
          message.isPartnered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBroadcastChannelEntry {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "",
      name: isSet(object.name) ? String(object.name) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      viewers: isSet(object.viewers) ? Number(object.viewers) : 0,
      views: isSet(object.views) ? Number(object.views) : 0,
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      headline: isSet(object.headline) ? String(object.headline) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? Number(object.broadcasterSteamid) : 0,
      subscribers: isSet(object.subscribers) ? Number(object.subscribers) : 0,
      backgroundUrl: isSet(object.backgroundUrl) ? String(object.backgroundUrl) : "",
      isFeatured: isSet(object.isFeatured) ? Boolean(object.isFeatured) : false,
      isDisabled: isSet(object.isDisabled) ? Boolean(object.isDisabled) : false,
      isLive: isSet(object.isLive) ? Boolean(object.isLive) : false,
      language: isSet(object.language) ? String(object.language) : "",
      reports: isSet(object.reports) ? Number(object.reports) : 0,
      isPartnered: isSet(object.isPartnered) ? Boolean(object.isPartnered) : false,
    };
  },

  toJSON(message: GetBroadcastChannelEntry): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    message.name !== undefined && (obj.name = message.name);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.viewers !== undefined && (obj.viewers = Math.round(message.viewers));
    message.views !== undefined && (obj.views = Math.round(message.views));
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.headline !== undefined && (obj.headline = message.headline);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = Math.round(message.broadcasterSteamid));
    message.subscribers !== undefined && (obj.subscribers = Math.round(message.subscribers));
    message.backgroundUrl !== undefined && (obj.backgroundUrl = message.backgroundUrl);
    message.isFeatured !== undefined && (obj.isFeatured = message.isFeatured);
    message.isDisabled !== undefined && (obj.isDisabled = message.isDisabled);
    message.isLive !== undefined && (obj.isLive = message.isLive);
    message.language !== undefined && (obj.language = message.language);
    message.reports !== undefined && (obj.reports = Math.round(message.reports));
    message.isPartnered !== undefined && (obj.isPartnered = message.isPartnered);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBroadcastChannelEntry>, I>>(base?: I): GetBroadcastChannelEntry {
    return GetBroadcastChannelEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBroadcastChannelEntry>, I>>(object: I): GetBroadcastChannelEntry {
    const message = createBaseGetBroadcastChannelEntry();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.uniqueName = object.uniqueName ?? "";
    message.name = object.name ?? "";
    message.appid = object.appid ?? 0;
    message.viewers = object.viewers ?? 0;
    message.views = object.views ?? 0;
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.followers = object.followers ?? 0;
    message.headline = object.headline ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.broadcasterSteamid = object.broadcasterSteamid ?? 0;
    message.subscribers = object.subscribers ?? 0;
    message.backgroundUrl = object.backgroundUrl ?? "";
    message.isFeatured = object.isFeatured ?? false;
    message.isDisabled = object.isDisabled ?? false;
    message.isLive = object.isLive ?? false;
    message.language = object.language ?? "";
    message.reports = object.reports ?? 0;
    message.isPartnered = object.isPartnered ?? false;
    return message;
  },
};

function createBaseCSteamTVGetFollowedChannelsResponse(): CSteamTVGetFollowedChannelsResponse {
  return { results: [] };
}

export const CSteamTVGetFollowedChannelsResponse = {
  encode(message: CSteamTVGetFollowedChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetFollowedChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetFollowedChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetFollowedChannelsResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetFollowedChannelsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetFollowedChannelsResponse>, I>>(
    base?: I,
  ): CSteamTVGetFollowedChannelsResponse {
    return CSteamTVGetFollowedChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetFollowedChannelsResponse>, I>>(
    object: I,
  ): CSteamTVGetFollowedChannelsResponse {
    const message = createBaseCSteamTVGetFollowedChannelsResponse();
    message.results = object.results?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetSubscribedChannelsRequest(): CSteamTVGetSubscribedChannelsRequest {
  return {};
}

export const CSteamTVGetSubscribedChannelsRequest = {
  encode(_: CSteamTVGetSubscribedChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetSubscribedChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetSubscribedChannelsRequest();
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

  fromJSON(_: any): CSteamTVGetSubscribedChannelsRequest {
    return {};
  },

  toJSON(_: CSteamTVGetSubscribedChannelsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetSubscribedChannelsRequest>, I>>(
    base?: I,
  ): CSteamTVGetSubscribedChannelsRequest {
    return CSteamTVGetSubscribedChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetSubscribedChannelsRequest>, I>>(
    _: I,
  ): CSteamTVGetSubscribedChannelsRequest {
    const message = createBaseCSteamTVGetSubscribedChannelsRequest();
    return message;
  },
};

function createBaseCSteamTVGetSubscribedChannelsResponse(): CSteamTVGetSubscribedChannelsResponse {
  return { results: [] };
}

export const CSteamTVGetSubscribedChannelsResponse = {
  encode(message: CSteamTVGetSubscribedChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetSubscribedChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetSubscribedChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetSubscribedChannelsResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetSubscribedChannelsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetSubscribedChannelsResponse>, I>>(
    base?: I,
  ): CSteamTVGetSubscribedChannelsResponse {
    return CSteamTVGetSubscribedChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetSubscribedChannelsResponse>, I>>(
    object: I,
  ): CSteamTVGetSubscribedChannelsResponse {
    const message = createBaseCSteamTVGetSubscribedChannelsResponse();
    message.results = object.results?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelStatusRequest(): CSteamTVGetBroadcastChannelStatusRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelStatusRequest = {
  encode(message: CSteamTVGetBroadcastChannelStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelStatusRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelStatusRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelStatusRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelStatusRequest {
    return CSteamTVGetBroadcastChannelStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelStatusRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelStatusRequest {
    const message = createBaseCSteamTVGetBroadcastChannelStatusRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelStatusResponse(): CSteamTVGetBroadcastChannelStatusResponse {
  return {
    isLive: false,
    isDisabled: false,
    appid: 0,
    viewers: 0,
    views: 0,
    broadcasterSteamid: 0,
    thumbnailUrl: "",
    followers: 0,
    subscribers: 0,
    uniqueName: "",
    broadcastSessionId: 0,
  };
}

export const CSteamTVGetBroadcastChannelStatusResponse = {
  encode(message: CSteamTVGetBroadcastChannelStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isLive === true) {
      writer.uint32(8).bool(message.isLive);
    }
    if (message.isDisabled === true) {
      writer.uint32(16).bool(message.isDisabled);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    if (message.viewers !== 0) {
      writer.uint32(32).uint64(message.viewers);
    }
    if (message.views !== 0) {
      writer.uint32(40).uint64(message.views);
    }
    if (message.broadcasterSteamid !== 0) {
      writer.uint32(49).fixed64(message.broadcasterSteamid);
    }
    if (message.thumbnailUrl !== "") {
      writer.uint32(58).string(message.thumbnailUrl);
    }
    if (message.followers !== 0) {
      writer.uint32(64).uint64(message.followers);
    }
    if (message.subscribers !== 0) {
      writer.uint32(72).uint64(message.subscribers);
    }
    if (message.uniqueName !== "") {
      writer.uint32(82).string(message.uniqueName);
    }
    if (message.broadcastSessionId !== 0) {
      writer.uint32(88).uint64(message.broadcastSessionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isLive = reader.bool();
          break;
        case 2:
          message.isDisabled = reader.bool();
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        case 4:
          message.viewers = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.views = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.broadcasterSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 7:
          message.thumbnailUrl = reader.string();
          break;
        case 8:
          message.followers = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.subscribers = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.uniqueName = reader.string();
          break;
        case 11:
          message.broadcastSessionId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelStatusResponse {
    return {
      isLive: isSet(object.isLive) ? Boolean(object.isLive) : false,
      isDisabled: isSet(object.isDisabled) ? Boolean(object.isDisabled) : false,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      viewers: isSet(object.viewers) ? Number(object.viewers) : 0,
      views: isSet(object.views) ? Number(object.views) : 0,
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? Number(object.broadcasterSteamid) : 0,
      thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : "",
      followers: isSet(object.followers) ? Number(object.followers) : 0,
      subscribers: isSet(object.subscribers) ? Number(object.subscribers) : 0,
      uniqueName: isSet(object.uniqueName) ? String(object.uniqueName) : "",
      broadcastSessionId: isSet(object.broadcastSessionId) ? Number(object.broadcastSessionId) : 0,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelStatusResponse): unknown {
    const obj: any = {};
    message.isLive !== undefined && (obj.isLive = message.isLive);
    message.isDisabled !== undefined && (obj.isDisabled = message.isDisabled);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.viewers !== undefined && (obj.viewers = Math.round(message.viewers));
    message.views !== undefined && (obj.views = Math.round(message.views));
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = Math.round(message.broadcasterSteamid));
    message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
    message.followers !== undefined && (obj.followers = Math.round(message.followers));
    message.subscribers !== undefined && (obj.subscribers = Math.round(message.subscribers));
    message.uniqueName !== undefined && (obj.uniqueName = message.uniqueName);
    message.broadcastSessionId !== undefined && (obj.broadcastSessionId = Math.round(message.broadcastSessionId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelStatusResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelStatusResponse {
    return CSteamTVGetBroadcastChannelStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelStatusResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelStatusResponse {
    const message = createBaseCSteamTVGetBroadcastChannelStatusResponse();
    message.isLive = object.isLive ?? false;
    message.isDisabled = object.isDisabled ?? false;
    message.appid = object.appid ?? 0;
    message.viewers = object.viewers ?? 0;
    message.views = object.views ?? 0;
    message.broadcasterSteamid = object.broadcasterSteamid ?? 0;
    message.thumbnailUrl = object.thumbnailUrl ?? "";
    message.followers = object.followers ?? 0;
    message.subscribers = object.subscribers ?? 0;
    message.uniqueName = object.uniqueName ?? "";
    message.broadcastSessionId = object.broadcastSessionId ?? 0;
    return message;
  },
};

function createBaseCSteamTVFollowBroadcastChannelRequest(): CSteamTVFollowBroadcastChannelRequest {
  return { broadcastChannelId: 0, undo: false };
}

export const CSteamTVFollowBroadcastChannelRequest = {
  encode(message: CSteamTVFollowBroadcastChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.undo === true) {
      writer.uint32(16).bool(message.undo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVFollowBroadcastChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVFollowBroadcastChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.undo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVFollowBroadcastChannelRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      undo: isSet(object.undo) ? Boolean(object.undo) : false,
    };
  },

  toJSON(message: CSteamTVFollowBroadcastChannelRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.undo !== undefined && (obj.undo = message.undo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVFollowBroadcastChannelRequest>, I>>(
    base?: I,
  ): CSteamTVFollowBroadcastChannelRequest {
    return CSteamTVFollowBroadcastChannelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVFollowBroadcastChannelRequest>, I>>(
    object: I,
  ): CSteamTVFollowBroadcastChannelRequest {
    const message = createBaseCSteamTVFollowBroadcastChannelRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.undo = object.undo ?? false;
    return message;
  },
};

function createBaseCSteamTVFollowBroadcastChannelResponse(): CSteamTVFollowBroadcastChannelResponse {
  return { isFollowed: false };
}

export const CSteamTVFollowBroadcastChannelResponse = {
  encode(message: CSteamTVFollowBroadcastChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isFollowed === true) {
      writer.uint32(8).bool(message.isFollowed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVFollowBroadcastChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVFollowBroadcastChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFollowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVFollowBroadcastChannelResponse {
    return { isFollowed: isSet(object.isFollowed) ? Boolean(object.isFollowed) : false };
  },

  toJSON(message: CSteamTVFollowBroadcastChannelResponse): unknown {
    const obj: any = {};
    message.isFollowed !== undefined && (obj.isFollowed = message.isFollowed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVFollowBroadcastChannelResponse>, I>>(
    base?: I,
  ): CSteamTVFollowBroadcastChannelResponse {
    return CSteamTVFollowBroadcastChannelResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVFollowBroadcastChannelResponse>, I>>(
    object: I,
  ): CSteamTVFollowBroadcastChannelResponse {
    const message = createBaseCSteamTVFollowBroadcastChannelResponse();
    message.isFollowed = object.isFollowed ?? false;
    return message;
  },
};

function createBaseCSteamTVSubscribeBroadcastChannelRequest(): CSteamTVSubscribeBroadcastChannelRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVSubscribeBroadcastChannelRequest = {
  encode(message: CSteamTVSubscribeBroadcastChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSubscribeBroadcastChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSubscribeBroadcastChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSubscribeBroadcastChannelRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVSubscribeBroadcastChannelRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSubscribeBroadcastChannelRequest>, I>>(
    base?: I,
  ): CSteamTVSubscribeBroadcastChannelRequest {
    return CSteamTVSubscribeBroadcastChannelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSubscribeBroadcastChannelRequest>, I>>(
    object: I,
  ): CSteamTVSubscribeBroadcastChannelRequest {
    const message = createBaseCSteamTVSubscribeBroadcastChannelRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVSubscribeBroadcastChannelResponse(): CSteamTVSubscribeBroadcastChannelResponse {
  return { isSubscribed: false };
}

export const CSteamTVSubscribeBroadcastChannelResponse = {
  encode(message: CSteamTVSubscribeBroadcastChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSubscribed === true) {
      writer.uint32(8).bool(message.isSubscribed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSubscribeBroadcastChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSubscribeBroadcastChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSubscribed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSubscribeBroadcastChannelResponse {
    return { isSubscribed: isSet(object.isSubscribed) ? Boolean(object.isSubscribed) : false };
  },

  toJSON(message: CSteamTVSubscribeBroadcastChannelResponse): unknown {
    const obj: any = {};
    message.isSubscribed !== undefined && (obj.isSubscribed = message.isSubscribed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSubscribeBroadcastChannelResponse>, I>>(
    base?: I,
  ): CSteamTVSubscribeBroadcastChannelResponse {
    return CSteamTVSubscribeBroadcastChannelResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSubscribeBroadcastChannelResponse>, I>>(
    object: I,
  ): CSteamTVSubscribeBroadcastChannelResponse {
    const message = createBaseCSteamTVSubscribeBroadcastChannelResponse();
    message.isSubscribed = object.isSubscribed ?? false;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelClipsRequest(): CSteamTVGetBroadcastChannelClipsRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelClipsRequest = {
  encode(message: CSteamTVGetBroadcastChannelClipsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelClipsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelClipsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelClipsRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelClipsRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelClipsRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelClipsRequest {
    return CSteamTVGetBroadcastChannelClipsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelClipsRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelClipsRequest {
    const message = createBaseCSteamTVGetBroadcastChannelClipsRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVBroadcastClipInfo(): CSteamTVBroadcastClipInfo {
  return {
    broadcastClipId: 0,
    channelId: 0,
    appId: 0,
    broadcasterSteamid: 0,
    creatorSteamid: 0,
    videoDescription: "",
    liveTime: 0,
    lengthMs: 0,
    thumbnailPath: "",
  };
}

export const CSteamTVBroadcastClipInfo = {
  encode(message: CSteamTVBroadcastClipInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastClipId !== 0) {
      writer.uint32(8).uint64(message.broadcastClipId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint64(message.channelId);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.broadcasterSteamid !== 0) {
      writer.uint32(33).fixed64(message.broadcasterSteamid);
    }
    if (message.creatorSteamid !== 0) {
      writer.uint32(41).fixed64(message.creatorSteamid);
    }
    if (message.videoDescription !== "") {
      writer.uint32(50).string(message.videoDescription);
    }
    if (message.liveTime !== 0) {
      writer.uint32(56).uint32(message.liveTime);
    }
    if (message.lengthMs !== 0) {
      writer.uint32(64).uint32(message.lengthMs);
    }
    if (message.thumbnailPath !== "") {
      writer.uint32(74).string(message.thumbnailPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVBroadcastClipInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVBroadcastClipInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastClipId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.channelId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.broadcasterSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.creatorSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 6:
          message.videoDescription = reader.string();
          break;
        case 7:
          message.liveTime = reader.uint32();
          break;
        case 8:
          message.lengthMs = reader.uint32();
          break;
        case 9:
          message.thumbnailPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVBroadcastClipInfo {
    return {
      broadcastClipId: isSet(object.broadcastClipId) ? Number(object.broadcastClipId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      broadcasterSteamid: isSet(object.broadcasterSteamid) ? Number(object.broadcasterSteamid) : 0,
      creatorSteamid: isSet(object.creatorSteamid) ? Number(object.creatorSteamid) : 0,
      videoDescription: isSet(object.videoDescription) ? String(object.videoDescription) : "",
      liveTime: isSet(object.liveTime) ? Number(object.liveTime) : 0,
      lengthMs: isSet(object.lengthMs) ? Number(object.lengthMs) : 0,
      thumbnailPath: isSet(object.thumbnailPath) ? String(object.thumbnailPath) : "",
    };
  },

  toJSON(message: CSteamTVBroadcastClipInfo): unknown {
    const obj: any = {};
    message.broadcastClipId !== undefined && (obj.broadcastClipId = Math.round(message.broadcastClipId));
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.broadcasterSteamid !== undefined && (obj.broadcasterSteamid = Math.round(message.broadcasterSteamid));
    message.creatorSteamid !== undefined && (obj.creatorSteamid = Math.round(message.creatorSteamid));
    message.videoDescription !== undefined && (obj.videoDescription = message.videoDescription);
    message.liveTime !== undefined && (obj.liveTime = Math.round(message.liveTime));
    message.lengthMs !== undefined && (obj.lengthMs = Math.round(message.lengthMs));
    message.thumbnailPath !== undefined && (obj.thumbnailPath = message.thumbnailPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVBroadcastClipInfo>, I>>(base?: I): CSteamTVBroadcastClipInfo {
    return CSteamTVBroadcastClipInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVBroadcastClipInfo>, I>>(object: I): CSteamTVBroadcastClipInfo {
    const message = createBaseCSteamTVBroadcastClipInfo();
    message.broadcastClipId = object.broadcastClipId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.appId = object.appId ?? 0;
    message.broadcasterSteamid = object.broadcasterSteamid ?? 0;
    message.creatorSteamid = object.creatorSteamid ?? 0;
    message.videoDescription = object.videoDescription ?? "";
    message.liveTime = object.liveTime ?? 0;
    message.lengthMs = object.lengthMs ?? 0;
    message.thumbnailPath = object.thumbnailPath ?? "";
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelClipsResponse(): CSteamTVGetBroadcastChannelClipsResponse {
  return { clips: [], thumbnailHost: "" };
}

export const CSteamTVGetBroadcastChannelClipsResponse = {
  encode(message: CSteamTVGetBroadcastChannelClipsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clips) {
      CSteamTVBroadcastClipInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.thumbnailHost !== "") {
      writer.uint32(18).string(message.thumbnailHost);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelClipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelClipsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clips.push(CSteamTVBroadcastClipInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.thumbnailHost = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelClipsResponse {
    return {
      clips: Array.isArray(object?.clips) ? object.clips.map((e: any) => CSteamTVBroadcastClipInfo.fromJSON(e)) : [],
      thumbnailHost: isSet(object.thumbnailHost) ? String(object.thumbnailHost) : "",
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelClipsResponse): unknown {
    const obj: any = {};
    if (message.clips) {
      obj.clips = message.clips.map((e) => e ? CSteamTVBroadcastClipInfo.toJSON(e) : undefined);
    } else {
      obj.clips = [];
    }
    message.thumbnailHost !== undefined && (obj.thumbnailHost = message.thumbnailHost);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelClipsResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelClipsResponse {
    return CSteamTVGetBroadcastChannelClipsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelClipsResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelClipsResponse {
    const message = createBaseCSteamTVGetBroadcastChannelClipsResponse();
    message.clips = object.clips?.map((e) => CSteamTVBroadcastClipInfo.fromPartial(e)) || [];
    message.thumbnailHost = object.thumbnailHost ?? "";
    return message;
  },
};

function createBaseCSteamTVReportBroadcastChannelRequest(): CSteamTVReportBroadcastChannelRequest {
  return { broadcastChannelId: 0, reason: "" };
}

export const CSteamTVReportBroadcastChannelRequest = {
  encode(message: CSteamTVReportBroadcastChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVReportBroadcastChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVReportBroadcastChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVReportBroadcastChannelRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: CSteamTVReportBroadcastChannelRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVReportBroadcastChannelRequest>, I>>(
    base?: I,
  ): CSteamTVReportBroadcastChannelRequest {
    return CSteamTVReportBroadcastChannelRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVReportBroadcastChannelRequest>, I>>(
    object: I,
  ): CSteamTVReportBroadcastChannelRequest {
    const message = createBaseCSteamTVReportBroadcastChannelRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseCSteamTVReportBroadcastChannelResponse(): CSteamTVReportBroadcastChannelResponse {
  return {};
}

export const CSteamTVReportBroadcastChannelResponse = {
  encode(_: CSteamTVReportBroadcastChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVReportBroadcastChannelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVReportBroadcastChannelResponse();
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

  fromJSON(_: any): CSteamTVReportBroadcastChannelResponse {
    return {};
  },

  toJSON(_: CSteamTVReportBroadcastChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVReportBroadcastChannelResponse>, I>>(
    base?: I,
  ): CSteamTVReportBroadcastChannelResponse {
    return CSteamTVReportBroadcastChannelResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVReportBroadcastChannelResponse>, I>>(
    _: I,
  ): CSteamTVReportBroadcastChannelResponse {
    const message = createBaseCSteamTVReportBroadcastChannelResponse();
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelInteractionRequest(): CSteamTVGetBroadcastChannelInteractionRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetBroadcastChannelInteractionRequest = {
  encode(message: CSteamTVGetBroadcastChannelInteractionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelInteractionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelInteractionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelInteractionRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetBroadcastChannelInteractionRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelInteractionRequest>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelInteractionRequest {
    return CSteamTVGetBroadcastChannelInteractionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelInteractionRequest>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelInteractionRequest {
    const message = createBaseCSteamTVGetBroadcastChannelInteractionRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetBroadcastChannelInteractionResponse(): CSteamTVGetBroadcastChannelInteractionResponse {
  return { isFollowed: false, isSubscribed: false };
}

export const CSteamTVGetBroadcastChannelInteractionResponse = {
  encode(
    message: CSteamTVGetBroadcastChannelInteractionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isFollowed === true) {
      writer.uint32(8).bool(message.isFollowed);
    }
    if (message.isSubscribed === true) {
      writer.uint32(16).bool(message.isSubscribed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetBroadcastChannelInteractionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetBroadcastChannelInteractionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isFollowed = reader.bool();
          break;
        case 2:
          message.isSubscribed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetBroadcastChannelInteractionResponse {
    return {
      isFollowed: isSet(object.isFollowed) ? Boolean(object.isFollowed) : false,
      isSubscribed: isSet(object.isSubscribed) ? Boolean(object.isSubscribed) : false,
    };
  },

  toJSON(message: CSteamTVGetBroadcastChannelInteractionResponse): unknown {
    const obj: any = {};
    message.isFollowed !== undefined && (obj.isFollowed = message.isFollowed);
    message.isSubscribed !== undefined && (obj.isSubscribed = message.isSubscribed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelInteractionResponse>, I>>(
    base?: I,
  ): CSteamTVGetBroadcastChannelInteractionResponse {
    return CSteamTVGetBroadcastChannelInteractionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetBroadcastChannelInteractionResponse>, I>>(
    object: I,
  ): CSteamTVGetBroadcastChannelInteractionResponse {
    const message = createBaseCSteamTVGetBroadcastChannelInteractionResponse();
    message.isFollowed = object.isFollowed ?? false;
    message.isSubscribed = object.isSubscribed ?? false;
    return message;
  },
};

function createBaseCSteamTVGetGamesRequest(): CSteamTVGetGamesRequest {
  return { appid: 0, algorithm: 1, count: 0 };
}

export const CSteamTVGetGamesRequest = {
  encode(message: CSteamTVGetGamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.algorithm !== 1) {
      writer.uint32(16).int32(message.algorithm);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetGamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetGamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.algorithm = reader.int32() as any;
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetGamesRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      algorithm: isSet(object.algorithm) ? eGetGamesAlgorithmFromJSON(object.algorithm) : 1,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CSteamTVGetGamesRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.algorithm !== undefined && (obj.algorithm = eGetGamesAlgorithmToJSON(message.algorithm));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetGamesRequest>, I>>(base?: I): CSteamTVGetGamesRequest {
    return CSteamTVGetGamesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetGamesRequest>, I>>(object: I): CSteamTVGetGamesRequest {
    const message = createBaseCSteamTVGetGamesRequest();
    message.appid = object.appid ?? 0;
    message.algorithm = object.algorithm ?? 1;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCSteamTVGame(): CSteamTVGame {
  return { appid: 0, name: "", image: "", viewers: 0, channels: [], releaseDate: "", developer: "", publisher: "" };
}

export const CSteamTVGame = {
  encode(message: CSteamTVGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    if (message.viewers !== 0) {
      writer.uint32(32).uint64(message.viewers);
    }
    for (const v of message.channels) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.releaseDate !== "") {
      writer.uint32(50).string(message.releaseDate);
    }
    if (message.developer !== "") {
      writer.uint32(58).string(message.developer);
    }
    if (message.publisher !== "") {
      writer.uint32(66).string(message.publisher);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        case 4:
          message.viewers = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.channels.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        case 6:
          message.releaseDate = reader.string();
          break;
        case 7:
          message.developer = reader.string();
          break;
        case 8:
          message.publisher = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGame {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      image: isSet(object.image) ? String(object.image) : "",
      viewers: isSet(object.viewers) ? Number(object.viewers) : 0,
      channels: Array.isArray(object?.channels)
        ? object.channels.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
      releaseDate: isSet(object.releaseDate) ? String(object.releaseDate) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      publisher: isSet(object.publisher) ? String(object.publisher) : "",
    };
  },

  toJSON(message: CSteamTVGame): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.image !== undefined && (obj.image = message.image);
    message.viewers !== undefined && (obj.viewers = Math.round(message.viewers));
    if (message.channels) {
      obj.channels = message.channels.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    message.releaseDate !== undefined && (obj.releaseDate = message.releaseDate);
    message.developer !== undefined && (obj.developer = message.developer);
    message.publisher !== undefined && (obj.publisher = message.publisher);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGame>, I>>(base?: I): CSteamTVGame {
    return CSteamTVGame.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGame>, I>>(object: I): CSteamTVGame {
    const message = createBaseCSteamTVGame();
    message.appid = object.appid ?? 0;
    message.name = object.name ?? "";
    message.image = object.image ?? "";
    message.viewers = object.viewers ?? 0;
    message.channels = object.channels?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    message.releaseDate = object.releaseDate ?? "";
    message.developer = object.developer ?? "";
    message.publisher = object.publisher ?? "";
    return message;
  },
};

function createBaseCSteamTVGetGamesResponse(): CSteamTVGetGamesResponse {
  return { results: [] };
}

export const CSteamTVGetGamesResponse = {
  encode(message: CSteamTVGetGamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CSteamTVGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetGamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetGamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(CSteamTVGame.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetGamesResponse {
    return { results: Array.isArray(object?.results) ? object.results.map((e: any) => CSteamTVGame.fromJSON(e)) : [] };
  },

  toJSON(message: CSteamTVGetGamesResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? CSteamTVGame.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetGamesResponse>, I>>(base?: I): CSteamTVGetGamesResponse {
    return CSteamTVGetGamesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetGamesResponse>, I>>(object: I): CSteamTVGetGamesResponse {
    const message = createBaseCSteamTVGetGamesResponse();
    message.results = object.results?.map((e) => CSteamTVGame.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetChannelsRequest(): CSteamTVGetChannelsRequest {
  return { algorithm: 1, count: 0, appid: 0 };
}

export const CSteamTVGetChannelsRequest = {
  encode(message: CSteamTVGetChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.algorithm !== 1) {
      writer.uint32(8).int32(message.algorithm);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.appid !== 0) {
      writer.uint32(24).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.algorithm = reader.int32() as any;
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChannelsRequest {
    return {
      algorithm: isSet(object.algorithm) ? eGetChannelsAlgorithmFromJSON(object.algorithm) : 1,
      count: isSet(object.count) ? Number(object.count) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CSteamTVGetChannelsRequest): unknown {
    const obj: any = {};
    message.algorithm !== undefined && (obj.algorithm = eGetChannelsAlgorithmToJSON(message.algorithm));
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChannelsRequest>, I>>(base?: I): CSteamTVGetChannelsRequest {
    return CSteamTVGetChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChannelsRequest>, I>>(object: I): CSteamTVGetChannelsRequest {
    const message = createBaseCSteamTVGetChannelsRequest();
    message.algorithm = object.algorithm ?? 1;
    message.count = object.count ?? 0;
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetChannelsResponse(): CSteamTVGetChannelsResponse {
  return { results: [] };
}

export const CSteamTVGetChannelsResponse = {
  encode(message: CSteamTVGetChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChannelsResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetChannelsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChannelsResponse>, I>>(base?: I): CSteamTVGetChannelsResponse {
    return CSteamTVGetChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChannelsResponse>, I>>(object: I): CSteamTVGetChannelsResponse {
    const message = createBaseCSteamTVGetChannelsResponse();
    message.results = object.results?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVAddChatBanRequest(): CSteamTVAddChatBanRequest {
  return { broadcastChannelId: 0, chatterSteamid: 0, duration: 0, permanent: false, undo: false };
}

export const CSteamTVAddChatBanRequest = {
  encode(message: CSteamTVAddChatBanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.chatterSteamid !== 0) {
      writer.uint32(17).fixed64(message.chatterSteamid);
    }
    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }
    if (message.permanent === true) {
      writer.uint32(32).bool(message.permanent);
    }
    if (message.undo === true) {
      writer.uint32(40).bool(message.undo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddChatBanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddChatBanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.chatterSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.duration = reader.uint32();
          break;
        case 4:
          message.permanent = reader.bool();
          break;
        case 5:
          message.undo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAddChatBanRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      chatterSteamid: isSet(object.chatterSteamid) ? Number(object.chatterSteamid) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      permanent: isSet(object.permanent) ? Boolean(object.permanent) : false,
      undo: isSet(object.undo) ? Boolean(object.undo) : false,
    };
  },

  toJSON(message: CSteamTVAddChatBanRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.chatterSteamid !== undefined && (obj.chatterSteamid = Math.round(message.chatterSteamid));
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.permanent !== undefined && (obj.permanent = message.permanent);
    message.undo !== undefined && (obj.undo = message.undo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddChatBanRequest>, I>>(base?: I): CSteamTVAddChatBanRequest {
    return CSteamTVAddChatBanRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddChatBanRequest>, I>>(object: I): CSteamTVAddChatBanRequest {
    const message = createBaseCSteamTVAddChatBanRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.chatterSteamid = object.chatterSteamid ?? 0;
    message.duration = object.duration ?? 0;
    message.permanent = object.permanent ?? false;
    message.undo = object.undo ?? false;
    return message;
  },
};

function createBaseCSteamTVAddChatBanResponse(): CSteamTVAddChatBanResponse {
  return {};
}

export const CSteamTVAddChatBanResponse = {
  encode(_: CSteamTVAddChatBanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddChatBanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddChatBanResponse();
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

  fromJSON(_: any): CSteamTVAddChatBanResponse {
    return {};
  },

  toJSON(_: CSteamTVAddChatBanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddChatBanResponse>, I>>(base?: I): CSteamTVAddChatBanResponse {
    return CSteamTVAddChatBanResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddChatBanResponse>, I>>(_: I): CSteamTVAddChatBanResponse {
    const message = createBaseCSteamTVAddChatBanResponse();
    return message;
  },
};

function createBaseCSteamTVGetChatBansRequest(): CSteamTVGetChatBansRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetChatBansRequest = {
  encode(message: CSteamTVGetChatBansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChatBansRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChatBansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChatBansRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetChatBansRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChatBansRequest>, I>>(base?: I): CSteamTVGetChatBansRequest {
    return CSteamTVGetChatBansRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChatBansRequest>, I>>(object: I): CSteamTVGetChatBansRequest {
    const message = createBaseCSteamTVGetChatBansRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVChatBan(): CSteamTVChatBan {
  return { issuerSteamid: 0, chatterSteamid: 0, timeExpires: "", permanent: false, name: "" };
}

export const CSteamTVChatBan = {
  encode(message: CSteamTVChatBan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerSteamid !== 0) {
      writer.uint32(9).fixed64(message.issuerSteamid);
    }
    if (message.chatterSteamid !== 0) {
      writer.uint32(17).fixed64(message.chatterSteamid);
    }
    if (message.timeExpires !== "") {
      writer.uint32(26).string(message.timeExpires);
    }
    if (message.permanent === true) {
      writer.uint32(32).bool(message.permanent);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVChatBan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVChatBan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.chatterSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.timeExpires = reader.string();
          break;
        case 4:
          message.permanent = reader.bool();
          break;
        case 5:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVChatBan {
    return {
      issuerSteamid: isSet(object.issuerSteamid) ? Number(object.issuerSteamid) : 0,
      chatterSteamid: isSet(object.chatterSteamid) ? Number(object.chatterSteamid) : 0,
      timeExpires: isSet(object.timeExpires) ? String(object.timeExpires) : "",
      permanent: isSet(object.permanent) ? Boolean(object.permanent) : false,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CSteamTVChatBan): unknown {
    const obj: any = {};
    message.issuerSteamid !== undefined && (obj.issuerSteamid = Math.round(message.issuerSteamid));
    message.chatterSteamid !== undefined && (obj.chatterSteamid = Math.round(message.chatterSteamid));
    message.timeExpires !== undefined && (obj.timeExpires = message.timeExpires);
    message.permanent !== undefined && (obj.permanent = message.permanent);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVChatBan>, I>>(base?: I): CSteamTVChatBan {
    return CSteamTVChatBan.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVChatBan>, I>>(object: I): CSteamTVChatBan {
    const message = createBaseCSteamTVChatBan();
    message.issuerSteamid = object.issuerSteamid ?? 0;
    message.chatterSteamid = object.chatterSteamid ?? 0;
    message.timeExpires = object.timeExpires ?? "";
    message.permanent = object.permanent ?? false;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCSteamTVGetChatBansResponse(): CSteamTVGetChatBansResponse {
  return { results: [] };
}

export const CSteamTVGetChatBansResponse = {
  encode(message: CSteamTVGetChatBansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CSteamTVChatBan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChatBansResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChatBansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(CSteamTVChatBan.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChatBansResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => CSteamTVChatBan.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSteamTVGetChatBansResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? CSteamTVChatBan.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChatBansResponse>, I>>(base?: I): CSteamTVGetChatBansResponse {
    return CSteamTVGetChatBansResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChatBansResponse>, I>>(object: I): CSteamTVGetChatBansResponse {
    const message = createBaseCSteamTVGetChatBansResponse();
    message.results = object.results?.map((e) => CSteamTVChatBan.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVAddChatModeratorRequest(): CSteamTVAddChatModeratorRequest {
  return { broadcastChannelId: 0, moderatorSteamid: 0, undo: false };
}

export const CSteamTVAddChatModeratorRequest = {
  encode(message: CSteamTVAddChatModeratorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.moderatorSteamid !== 0) {
      writer.uint32(17).fixed64(message.moderatorSteamid);
    }
    if (message.undo === true) {
      writer.uint32(24).bool(message.undo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddChatModeratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddChatModeratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.moderatorSteamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.undo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAddChatModeratorRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      moderatorSteamid: isSet(object.moderatorSteamid) ? Number(object.moderatorSteamid) : 0,
      undo: isSet(object.undo) ? Boolean(object.undo) : false,
    };
  },

  toJSON(message: CSteamTVAddChatModeratorRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.moderatorSteamid !== undefined && (obj.moderatorSteamid = Math.round(message.moderatorSteamid));
    message.undo !== undefined && (obj.undo = message.undo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddChatModeratorRequest>, I>>(base?: I): CSteamTVAddChatModeratorRequest {
    return CSteamTVAddChatModeratorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddChatModeratorRequest>, I>>(
    object: I,
  ): CSteamTVAddChatModeratorRequest {
    const message = createBaseCSteamTVAddChatModeratorRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.moderatorSteamid = object.moderatorSteamid ?? 0;
    message.undo = object.undo ?? false;
    return message;
  },
};

function createBaseCSteamTVAddChatModeratorResponse(): CSteamTVAddChatModeratorResponse {
  return {};
}

export const CSteamTVAddChatModeratorResponse = {
  encode(_: CSteamTVAddChatModeratorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddChatModeratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddChatModeratorResponse();
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

  fromJSON(_: any): CSteamTVAddChatModeratorResponse {
    return {};
  },

  toJSON(_: CSteamTVAddChatModeratorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddChatModeratorResponse>, I>>(
    base?: I,
  ): CSteamTVAddChatModeratorResponse {
    return CSteamTVAddChatModeratorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddChatModeratorResponse>, I>>(
    _: I,
  ): CSteamTVAddChatModeratorResponse {
    const message = createBaseCSteamTVAddChatModeratorResponse();
    return message;
  },
};

function createBaseCSteamTVGetChatModeratorsRequest(): CSteamTVGetChatModeratorsRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetChatModeratorsRequest = {
  encode(message: CSteamTVGetChatModeratorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChatModeratorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChatModeratorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChatModeratorsRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetChatModeratorsRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChatModeratorsRequest>, I>>(
    base?: I,
  ): CSteamTVGetChatModeratorsRequest {
    return CSteamTVGetChatModeratorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChatModeratorsRequest>, I>>(
    object: I,
  ): CSteamTVGetChatModeratorsRequest {
    const message = createBaseCSteamTVGetChatModeratorsRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVChatModerator(): CSteamTVChatModerator {
  return { steamid: 0, name: "" };
}

export const CSteamTVChatModerator = {
  encode(message: CSteamTVChatModerator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVChatModerator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVChatModerator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
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

  fromJSON(object: any): CSteamTVChatModerator {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CSteamTVChatModerator): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVChatModerator>, I>>(base?: I): CSteamTVChatModerator {
    return CSteamTVChatModerator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVChatModerator>, I>>(object: I): CSteamTVChatModerator {
    const message = createBaseCSteamTVChatModerator();
    message.steamid = object.steamid ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCSteamTVGetChatModeratorsResponse(): CSteamTVGetChatModeratorsResponse {
  return { results: [] };
}

export const CSteamTVGetChatModeratorsResponse = {
  encode(message: CSteamTVGetChatModeratorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CSteamTVChatModerator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetChatModeratorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetChatModeratorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(CSteamTVChatModerator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetChatModeratorsResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => CSteamTVChatModerator.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSteamTVGetChatModeratorsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? CSteamTVChatModerator.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetChatModeratorsResponse>, I>>(
    base?: I,
  ): CSteamTVGetChatModeratorsResponse {
    return CSteamTVGetChatModeratorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetChatModeratorsResponse>, I>>(
    object: I,
  ): CSteamTVGetChatModeratorsResponse {
    const message = createBaseCSteamTVGetChatModeratorsResponse();
    message.results = object.results?.map((e) => CSteamTVChatModerator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVAddWordBanRequest(): CSteamTVAddWordBanRequest {
  return { broadcastChannelId: 0, word: "", undo: false };
}

export const CSteamTVAddWordBanRequest = {
  encode(message: CSteamTVAddWordBanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    if (message.undo === true) {
      writer.uint32(24).bool(message.undo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddWordBanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddWordBanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.word = reader.string();
          break;
        case 3:
          message.undo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAddWordBanRequest {
    return {
      broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0,
      word: isSet(object.word) ? String(object.word) : "",
      undo: isSet(object.undo) ? Boolean(object.undo) : false,
    };
  },

  toJSON(message: CSteamTVAddWordBanRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    message.word !== undefined && (obj.word = message.word);
    message.undo !== undefined && (obj.undo = message.undo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddWordBanRequest>, I>>(base?: I): CSteamTVAddWordBanRequest {
    return CSteamTVAddWordBanRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddWordBanRequest>, I>>(object: I): CSteamTVAddWordBanRequest {
    const message = createBaseCSteamTVAddWordBanRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    message.word = object.word ?? "";
    message.undo = object.undo ?? false;
    return message;
  },
};

function createBaseCSteamTVAddWordBanResponse(): CSteamTVAddWordBanResponse {
  return {};
}

export const CSteamTVAddWordBanResponse = {
  encode(_: CSteamTVAddWordBanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAddWordBanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAddWordBanResponse();
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

  fromJSON(_: any): CSteamTVAddWordBanResponse {
    return {};
  },

  toJSON(_: CSteamTVAddWordBanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAddWordBanResponse>, I>>(base?: I): CSteamTVAddWordBanResponse {
    return CSteamTVAddWordBanResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAddWordBanResponse>, I>>(_: I): CSteamTVAddWordBanResponse {
    const message = createBaseCSteamTVAddWordBanResponse();
    return message;
  },
};

function createBaseCSteamTVGetWordBansRequest(): CSteamTVGetWordBansRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVGetWordBansRequest = {
  encode(message: CSteamTVGetWordBansRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetWordBansRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetWordBansRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetWordBansRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVGetWordBansRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetWordBansRequest>, I>>(base?: I): CSteamTVGetWordBansRequest {
    return CSteamTVGetWordBansRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetWordBansRequest>, I>>(object: I): CSteamTVGetWordBansRequest {
    const message = createBaseCSteamTVGetWordBansRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVGetWordBansResponse(): CSteamTVGetWordBansResponse {
  return { results: [] };
}

export const CSteamTVGetWordBansResponse = {
  encode(message: CSteamTVGetWordBansResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetWordBansResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetWordBansResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetWordBansResponse {
    return { results: Array.isArray(object?.results) ? object.results.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CSteamTVGetWordBansResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetWordBansResponse>, I>>(base?: I): CSteamTVGetWordBansResponse {
    return CSteamTVGetWordBansResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetWordBansResponse>, I>>(object: I): CSteamTVGetWordBansResponse {
    const message = createBaseCSteamTVGetWordBansResponse();
    message.results = object.results?.map((e) => e) || [];
    return message;
  },
};

function createBaseCSteamTVJoinChatRequest(): CSteamTVJoinChatRequest {
  return { broadcastChannelId: 0 };
}

export const CSteamTVJoinChatRequest = {
  encode(message: CSteamTVJoinChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastChannelId !== 0) {
      writer.uint32(9).fixed64(message.broadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVJoinChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVJoinChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastChannelId = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVJoinChatRequest {
    return { broadcastChannelId: isSet(object.broadcastChannelId) ? Number(object.broadcastChannelId) : 0 };
  },

  toJSON(message: CSteamTVJoinChatRequest): unknown {
    const obj: any = {};
    message.broadcastChannelId !== undefined && (obj.broadcastChannelId = Math.round(message.broadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVJoinChatRequest>, I>>(base?: I): CSteamTVJoinChatRequest {
    return CSteamTVJoinChatRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVJoinChatRequest>, I>>(object: I): CSteamTVJoinChatRequest {
    const message = createBaseCSteamTVJoinChatRequest();
    message.broadcastChannelId = object.broadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCSteamTVJoinChatResponse(): CSteamTVJoinChatResponse {
  return { chatId: 0, viewUrlTemplate: "", flairGroupIds: [] };
}

export const CSteamTVJoinChatResponse = {
  encode(message: CSteamTVJoinChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== 0) {
      writer.uint32(9).fixed64(message.chatId);
    }
    if (message.viewUrlTemplate !== "") {
      writer.uint32(18).string(message.viewUrlTemplate);
    }
    writer.uint32(26).fork();
    for (const v of message.flairGroupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVJoinChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVJoinChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.viewUrlTemplate = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.flairGroupIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.flairGroupIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVJoinChatResponse {
    return {
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      viewUrlTemplate: isSet(object.viewUrlTemplate) ? String(object.viewUrlTemplate) : "",
      flairGroupIds: Array.isArray(object?.flairGroupIds) ? object.flairGroupIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CSteamTVJoinChatResponse): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.viewUrlTemplate !== undefined && (obj.viewUrlTemplate = message.viewUrlTemplate);
    if (message.flairGroupIds) {
      obj.flairGroupIds = message.flairGroupIds.map((e) => Math.round(e));
    } else {
      obj.flairGroupIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVJoinChatResponse>, I>>(base?: I): CSteamTVJoinChatResponse {
    return CSteamTVJoinChatResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVJoinChatResponse>, I>>(object: I): CSteamTVJoinChatResponse {
    const message = createBaseCSteamTVJoinChatResponse();
    message.chatId = object.chatId ?? 0;
    message.viewUrlTemplate = object.viewUrlTemplate ?? "";
    message.flairGroupIds = object.flairGroupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCSteamTVSearchRequest(): CSteamTVSearchRequest {
  return { term: "" };
}

export const CSteamTVSearchRequest = {
  encode(message: CSteamTVSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.term !== "") {
      writer.uint32(10).string(message.term);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.term = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSearchRequest {
    return { term: isSet(object.term) ? String(object.term) : "" };
  },

  toJSON(message: CSteamTVSearchRequest): unknown {
    const obj: any = {};
    message.term !== undefined && (obj.term = message.term);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSearchRequest>, I>>(base?: I): CSteamTVSearchRequest {
    return CSteamTVSearchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSearchRequest>, I>>(object: I): CSteamTVSearchRequest {
    const message = createBaseCSteamTVSearchRequest();
    message.term = object.term ?? "";
    return message;
  },
};

function createBaseCSteamTVSearchResponse(): CSteamTVSearchResponse {
  return { results: [] };
}

export const CSteamTVSearchResponse = {
  encode(message: CSteamTVSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSearchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSearchResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVSearchResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSearchResponse>, I>>(base?: I): CSteamTVSearchResponse {
    return CSteamTVSearchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSearchResponse>, I>>(object: I): CSteamTVSearchResponse {
    const message = createBaseCSteamTVSearchResponse();
    message.results = object.results?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetSteamTVUserSettingsRequest(): CSteamTVGetSteamTVUserSettingsRequest {
  return {};
}

export const CSteamTVGetSteamTVUserSettingsRequest = {
  encode(_: CSteamTVGetSteamTVUserSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetSteamTVUserSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetSteamTVUserSettingsRequest();
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

  fromJSON(_: any): CSteamTVGetSteamTVUserSettingsRequest {
    return {};
  },

  toJSON(_: CSteamTVGetSteamTVUserSettingsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetSteamTVUserSettingsRequest>, I>>(
    base?: I,
  ): CSteamTVGetSteamTVUserSettingsRequest {
    return CSteamTVGetSteamTVUserSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetSteamTVUserSettingsRequest>, I>>(
    _: I,
  ): CSteamTVGetSteamTVUserSettingsRequest {
    const message = createBaseCSteamTVGetSteamTVUserSettingsRequest();
    return message;
  },
};

function createBaseCSteamTVGetSteamTVUserSettingsResponse(): CSteamTVGetSteamTVUserSettingsResponse {
  return { streamLiveEmail: false, streamLiveNotification: false };
}

export const CSteamTVGetSteamTVUserSettingsResponse = {
  encode(message: CSteamTVGetSteamTVUserSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamLiveEmail === true) {
      writer.uint32(8).bool(message.streamLiveEmail);
    }
    if (message.streamLiveNotification === true) {
      writer.uint32(16).bool(message.streamLiveNotification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetSteamTVUserSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetSteamTVUserSettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamLiveEmail = reader.bool();
          break;
        case 2:
          message.streamLiveNotification = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetSteamTVUserSettingsResponse {
    return {
      streamLiveEmail: isSet(object.streamLiveEmail) ? Boolean(object.streamLiveEmail) : false,
      streamLiveNotification: isSet(object.streamLiveNotification) ? Boolean(object.streamLiveNotification) : false,
    };
  },

  toJSON(message: CSteamTVGetSteamTVUserSettingsResponse): unknown {
    const obj: any = {};
    message.streamLiveEmail !== undefined && (obj.streamLiveEmail = message.streamLiveEmail);
    message.streamLiveNotification !== undefined && (obj.streamLiveNotification = message.streamLiveNotification);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetSteamTVUserSettingsResponse>, I>>(
    base?: I,
  ): CSteamTVGetSteamTVUserSettingsResponse {
    return CSteamTVGetSteamTVUserSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetSteamTVUserSettingsResponse>, I>>(
    object: I,
  ): CSteamTVGetSteamTVUserSettingsResponse {
    const message = createBaseCSteamTVGetSteamTVUserSettingsResponse();
    message.streamLiveEmail = object.streamLiveEmail ?? false;
    message.streamLiveNotification = object.streamLiveNotification ?? false;
    return message;
  },
};

function createBaseCSteamTVSetSteamTVUserSettingsRequest(): CSteamTVSetSteamTVUserSettingsRequest {
  return { streamLiveEmail: false, streamLiveNotification: false };
}

export const CSteamTVSetSteamTVUserSettingsRequest = {
  encode(message: CSteamTVSetSteamTVUserSettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamLiveEmail === true) {
      writer.uint32(8).bool(message.streamLiveEmail);
    }
    if (message.streamLiveNotification === true) {
      writer.uint32(16).bool(message.streamLiveNotification);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetSteamTVUserSettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetSteamTVUserSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.streamLiveEmail = reader.bool();
          break;
        case 2:
          message.streamLiveNotification = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVSetSteamTVUserSettingsRequest {
    return {
      streamLiveEmail: isSet(object.streamLiveEmail) ? Boolean(object.streamLiveEmail) : false,
      streamLiveNotification: isSet(object.streamLiveNotification) ? Boolean(object.streamLiveNotification) : false,
    };
  },

  toJSON(message: CSteamTVSetSteamTVUserSettingsRequest): unknown {
    const obj: any = {};
    message.streamLiveEmail !== undefined && (obj.streamLiveEmail = message.streamLiveEmail);
    message.streamLiveNotification !== undefined && (obj.streamLiveNotification = message.streamLiveNotification);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetSteamTVUserSettingsRequest>, I>>(
    base?: I,
  ): CSteamTVSetSteamTVUserSettingsRequest {
    return CSteamTVSetSteamTVUserSettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetSteamTVUserSettingsRequest>, I>>(
    object: I,
  ): CSteamTVSetSteamTVUserSettingsRequest {
    const message = createBaseCSteamTVSetSteamTVUserSettingsRequest();
    message.streamLiveEmail = object.streamLiveEmail ?? false;
    message.streamLiveNotification = object.streamLiveNotification ?? false;
    return message;
  },
};

function createBaseCSteamTVSetSteamTVUserSettingsResponse(): CSteamTVSetSteamTVUserSettingsResponse {
  return {};
}

export const CSteamTVSetSteamTVUserSettingsResponse = {
  encode(_: CSteamTVSetSteamTVUserSettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVSetSteamTVUserSettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVSetSteamTVUserSettingsResponse();
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

  fromJSON(_: any): CSteamTVSetSteamTVUserSettingsResponse {
    return {};
  },

  toJSON(_: CSteamTVSetSteamTVUserSettingsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVSetSteamTVUserSettingsResponse>, I>>(
    base?: I,
  ): CSteamTVSetSteamTVUserSettingsResponse {
    return CSteamTVSetSteamTVUserSettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVSetSteamTVUserSettingsResponse>, I>>(
    _: I,
  ): CSteamTVSetSteamTVUserSettingsResponse {
    const message = createBaseCSteamTVSetSteamTVUserSettingsResponse();
    return message;
  },
};

function createBaseCSteamTVGetMyBroadcastChannelsRequest(): CSteamTVGetMyBroadcastChannelsRequest {
  return {};
}

export const CSteamTVGetMyBroadcastChannelsRequest = {
  encode(_: CSteamTVGetMyBroadcastChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetMyBroadcastChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetMyBroadcastChannelsRequest();
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

  fromJSON(_: any): CSteamTVGetMyBroadcastChannelsRequest {
    return {};
  },

  toJSON(_: CSteamTVGetMyBroadcastChannelsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetMyBroadcastChannelsRequest>, I>>(
    base?: I,
  ): CSteamTVGetMyBroadcastChannelsRequest {
    return CSteamTVGetMyBroadcastChannelsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetMyBroadcastChannelsRequest>, I>>(
    _: I,
  ): CSteamTVGetMyBroadcastChannelsRequest {
    const message = createBaseCSteamTVGetMyBroadcastChannelsRequest();
    return message;
  },
};

function createBaseCSteamTVGetMyBroadcastChannelsResponse(): CSteamTVGetMyBroadcastChannelsResponse {
  return { results: [] };
}

export const CSteamTVGetMyBroadcastChannelsResponse = {
  encode(message: CSteamTVGetMyBroadcastChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetMyBroadcastChannelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetMyBroadcastChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetMyBroadcastChannelsResponse {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVGetMyBroadcastChannelsResponse): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetMyBroadcastChannelsResponse>, I>>(
    base?: I,
  ): CSteamTVGetMyBroadcastChannelsResponse {
    return CSteamTVGetMyBroadcastChannelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetMyBroadcastChannelsResponse>, I>>(
    object: I,
  ): CSteamTVGetMyBroadcastChannelsResponse {
    const message = createBaseCSteamTVGetMyBroadcastChannelsResponse();
    message.results = object.results?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVGetHomePageContentsRequest(): CSteamTVGetHomePageContentsRequest {
  return {};
}

export const CSteamTVGetHomePageContentsRequest = {
  encode(_: CSteamTVGetHomePageContentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetHomePageContentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetHomePageContentsRequest();
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

  fromJSON(_: any): CSteamTVGetHomePageContentsRequest {
    return {};
  },

  toJSON(_: CSteamTVGetHomePageContentsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetHomePageContentsRequest>, I>>(
    base?: I,
  ): CSteamTVGetHomePageContentsRequest {
    return CSteamTVGetHomePageContentsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetHomePageContentsRequest>, I>>(
    _: I,
  ): CSteamTVGetHomePageContentsRequest {
    const message = createBaseCSteamTVGetHomePageContentsRequest();
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateTakeover(): CSteamTVHomePageTemplateTakeover {
  return { broadcasts: [] };
}

export const CSteamTVHomePageTemplateTakeover = {
  encode(message: CSteamTVHomePageTemplateTakeover, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.broadcasts) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateTakeover {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateTakeover();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasts.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateTakeover {
    return {
      broadcasts: Array.isArray(object?.broadcasts)
        ? object.broadcasts.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVHomePageTemplateTakeover): unknown {
    const obj: any = {};
    if (message.broadcasts) {
      obj.broadcasts = message.broadcasts.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.broadcasts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateTakeover>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateTakeover {
    return CSteamTVHomePageTemplateTakeover.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateTakeover>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateTakeover {
    const message = createBaseCSteamTVHomePageTemplateTakeover();
    message.broadcasts = object.broadcasts?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateSingleGame(): CSteamTVHomePageTemplateSingleGame {
  return { broadcasts: [], appid: 0, title: "" };
}

export const CSteamTVHomePageTemplateSingleGame = {
  encode(message: CSteamTVHomePageTemplateSingleGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.broadcasts) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateSingleGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateSingleGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasts.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateSingleGame {
    return {
      broadcasts: Array.isArray(object?.broadcasts)
        ? object.broadcasts.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CSteamTVHomePageTemplateSingleGame): unknown {
    const obj: any = {};
    if (message.broadcasts) {
      obj.broadcasts = message.broadcasts.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.broadcasts = [];
    }
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateSingleGame>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateSingleGame {
    return CSteamTVHomePageTemplateSingleGame.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateSingleGame>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateSingleGame {
    const message = createBaseCSteamTVHomePageTemplateSingleGame();
    message.broadcasts = object.broadcasts?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    message.appid = object.appid ?? 0;
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseGameListEntry(): GameListEntry {
  return { appid: 0, gameName: "", broadcast: undefined };
}

export const GameListEntry = {
  encode(message: GameListEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.gameName !== "") {
      writer.uint32(18).string(message.gameName);
    }
    if (message.broadcast !== undefined) {
      GetBroadcastChannelEntry.encode(message.broadcast, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameListEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameListEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.gameName = reader.string();
          break;
        case 3:
          message.broadcast = GetBroadcastChannelEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameListEntry {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      gameName: isSet(object.gameName) ? String(object.gameName) : "",
      broadcast: isSet(object.broadcast) ? GetBroadcastChannelEntry.fromJSON(object.broadcast) : undefined,
    };
  },

  toJSON(message: GameListEntry): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.gameName !== undefined && (obj.gameName = message.gameName);
    message.broadcast !== undefined &&
      (obj.broadcast = message.broadcast ? GetBroadcastChannelEntry.toJSON(message.broadcast) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GameListEntry>, I>>(base?: I): GameListEntry {
    return GameListEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GameListEntry>, I>>(object: I): GameListEntry {
    const message = createBaseGameListEntry();
    message.appid = object.appid ?? 0;
    message.gameName = object.gameName ?? "";
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? GetBroadcastChannelEntry.fromPartial(object.broadcast)
      : undefined;
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateGameList(): CSteamTVHomePageTemplateGameList {
  return { entries: [], title: "" };
}

export const CSteamTVHomePageTemplateGameList = {
  encode(message: CSteamTVHomePageTemplateGameList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      GameListEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateGameList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateGameList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(GameListEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateGameList {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => GameListEntry.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CSteamTVHomePageTemplateGameList): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? GameListEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateGameList>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateGameList {
    return CSteamTVHomePageTemplateGameList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateGameList>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateGameList {
    const message = createBaseCSteamTVHomePageTemplateGameList();
    message.entries = object.entries?.map((e) => GameListEntry.fromPartial(e)) || [];
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateQuickExplore(): CSteamTVHomePageTemplateQuickExplore {
  return { broadcasts: [], title: "" };
}

export const CSteamTVHomePageTemplateQuickExplore = {
  encode(message: CSteamTVHomePageTemplateQuickExplore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.broadcasts) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateQuickExplore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateQuickExplore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasts.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateQuickExplore {
    return {
      broadcasts: Array.isArray(object?.broadcasts)
        ? object.broadcasts.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CSteamTVHomePageTemplateQuickExplore): unknown {
    const obj: any = {};
    if (message.broadcasts) {
      obj.broadcasts = message.broadcasts.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.broadcasts = [];
    }
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateQuickExplore>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateQuickExplore {
    return CSteamTVHomePageTemplateQuickExplore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateQuickExplore>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateQuickExplore {
    const message = createBaseCSteamTVHomePageTemplateQuickExplore();
    message.broadcasts = object.broadcasts?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateConveyorBelt(): CSteamTVHomePageTemplateConveyorBelt {
  return { broadcasts: [], title: "" };
}

export const CSteamTVHomePageTemplateConveyorBelt = {
  encode(message: CSteamTVHomePageTemplateConveyorBelt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.broadcasts) {
      GetBroadcastChannelEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateConveyorBelt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateConveyorBelt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcasts.push(GetBroadcastChannelEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateConveyorBelt {
    return {
      broadcasts: Array.isArray(object?.broadcasts)
        ? object.broadcasts.map((e: any) => GetBroadcastChannelEntry.fromJSON(e))
        : [],
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CSteamTVHomePageTemplateConveyorBelt): unknown {
    const obj: any = {};
    if (message.broadcasts) {
      obj.broadcasts = message.broadcasts.map((e) => e ? GetBroadcastChannelEntry.toJSON(e) : undefined);
    } else {
      obj.broadcasts = [];
    }
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateConveyorBelt>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateConveyorBelt {
    return CSteamTVHomePageTemplateConveyorBelt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateConveyorBelt>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateConveyorBelt {
    const message = createBaseCSteamTVHomePageTemplateConveyorBelt();
    message.broadcasts = object.broadcasts?.map((e) => GetBroadcastChannelEntry.fromPartial(e)) || [];
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateWatchParty(): CSteamTVHomePageTemplateWatchParty {
  return { broadcast: undefined, title: "", chatGroupId: 0 };
}

export const CSteamTVHomePageTemplateWatchParty = {
  encode(message: CSteamTVHomePageTemplateWatchParty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcast !== undefined) {
      GetBroadcastChannelEntry.encode(message.broadcast, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.chatGroupId !== 0) {
      writer.uint32(24).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateWatchParty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateWatchParty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcast = GetBroadcastChannelEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateWatchParty {
    return {
      broadcast: isSet(object.broadcast) ? GetBroadcastChannelEntry.fromJSON(object.broadcast) : undefined,
      title: isSet(object.title) ? String(object.title) : "",
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
    };
  },

  toJSON(message: CSteamTVHomePageTemplateWatchParty): unknown {
    const obj: any = {};
    message.broadcast !== undefined &&
      (obj.broadcast = message.broadcast ? GetBroadcastChannelEntry.toJSON(message.broadcast) : undefined);
    message.title !== undefined && (obj.title = message.title);
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateWatchParty>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateWatchParty {
    return CSteamTVHomePageTemplateWatchParty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateWatchParty>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateWatchParty {
    const message = createBaseCSteamTVHomePageTemplateWatchParty();
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? GetBroadcastChannelEntry.fromPartial(object.broadcast)
      : undefined;
    message.title = object.title ?? "";
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateDeveloper(): CSteamTVHomePageTemplateDeveloper {
  return { broadcast: undefined, title: "" };
}

export const CSteamTVHomePageTemplateDeveloper = {
  encode(message: CSteamTVHomePageTemplateDeveloper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcast !== undefined) {
      GetBroadcastChannelEntry.encode(message.broadcast, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateDeveloper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateDeveloper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcast = GetBroadcastChannelEntry.decode(reader, reader.uint32());
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateDeveloper {
    return {
      broadcast: isSet(object.broadcast) ? GetBroadcastChannelEntry.fromJSON(object.broadcast) : undefined,
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CSteamTVHomePageTemplateDeveloper): unknown {
    const obj: any = {};
    message.broadcast !== undefined &&
      (obj.broadcast = message.broadcast ? GetBroadcastChannelEntry.toJSON(message.broadcast) : undefined);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateDeveloper>, I>>(
    base?: I,
  ): CSteamTVHomePageTemplateDeveloper {
    return CSteamTVHomePageTemplateDeveloper.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateDeveloper>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateDeveloper {
    const message = createBaseCSteamTVHomePageTemplateDeveloper();
    message.broadcast = (object.broadcast !== undefined && object.broadcast !== null)
      ? GetBroadcastChannelEntry.fromPartial(object.broadcast)
      : undefined;
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCSteamTVHomePageTemplateEvent(): CSteamTVHomePageTemplateEvent {
  return { title: "" };
}

export const CSteamTVHomePageTemplateEvent = {
  encode(message: CSteamTVHomePageTemplateEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageTemplateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageTemplateEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageTemplateEvent {
    return { title: isSet(object.title) ? String(object.title) : "" };
  },

  toJSON(message: CSteamTVHomePageTemplateEvent): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageTemplateEvent>, I>>(base?: I): CSteamTVHomePageTemplateEvent {
    return CSteamTVHomePageTemplateEvent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageTemplateEvent>, I>>(
    object: I,
  ): CSteamTVHomePageTemplateEvent {
    const message = createBaseCSteamTVHomePageTemplateEvent();
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCSteamTVHomePageContentRow(): CSteamTVHomePageContentRow {
  return {
    templateType: 0,
    takeover: undefined,
    singleGame: undefined,
    gameList: undefined,
    quickExplore: undefined,
    conveyorBelt: undefined,
    watchParty: undefined,
    developer: undefined,
    event: undefined,
  };
}

export const CSteamTVHomePageContentRow = {
  encode(message: CSteamTVHomePageContentRow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.templateType !== 0) {
      writer.uint32(8).int32(message.templateType);
    }
    if (message.takeover !== undefined) {
      CSteamTVHomePageTemplateTakeover.encode(message.takeover, writer.uint32(18).fork()).ldelim();
    }
    if (message.singleGame !== undefined) {
      CSteamTVHomePageTemplateSingleGame.encode(message.singleGame, writer.uint32(26).fork()).ldelim();
    }
    if (message.gameList !== undefined) {
      CSteamTVHomePageTemplateGameList.encode(message.gameList, writer.uint32(34).fork()).ldelim();
    }
    if (message.quickExplore !== undefined) {
      CSteamTVHomePageTemplateQuickExplore.encode(message.quickExplore, writer.uint32(42).fork()).ldelim();
    }
    if (message.conveyorBelt !== undefined) {
      CSteamTVHomePageTemplateConveyorBelt.encode(message.conveyorBelt, writer.uint32(50).fork()).ldelim();
    }
    if (message.watchParty !== undefined) {
      CSteamTVHomePageTemplateWatchParty.encode(message.watchParty, writer.uint32(58).fork()).ldelim();
    }
    if (message.developer !== undefined) {
      CSteamTVHomePageTemplateDeveloper.encode(message.developer, writer.uint32(66).fork()).ldelim();
    }
    if (message.event !== undefined) {
      CSteamTVHomePageTemplateEvent.encode(message.event, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVHomePageContentRow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVHomePageContentRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.templateType = reader.int32() as any;
          break;
        case 2:
          message.takeover = CSteamTVHomePageTemplateTakeover.decode(reader, reader.uint32());
          break;
        case 3:
          message.singleGame = CSteamTVHomePageTemplateSingleGame.decode(reader, reader.uint32());
          break;
        case 4:
          message.gameList = CSteamTVHomePageTemplateGameList.decode(reader, reader.uint32());
          break;
        case 5:
          message.quickExplore = CSteamTVHomePageTemplateQuickExplore.decode(reader, reader.uint32());
          break;
        case 6:
          message.conveyorBelt = CSteamTVHomePageTemplateConveyorBelt.decode(reader, reader.uint32());
          break;
        case 7:
          message.watchParty = CSteamTVHomePageTemplateWatchParty.decode(reader, reader.uint32());
          break;
        case 8:
          message.developer = CSteamTVHomePageTemplateDeveloper.decode(reader, reader.uint32());
          break;
        case 9:
          message.event = CSteamTVHomePageTemplateEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVHomePageContentRow {
    return {
      templateType: isSet(object.templateType) ? eSteamTVContentTemplateFromJSON(object.templateType) : 0,
      takeover: isSet(object.takeover) ? CSteamTVHomePageTemplateTakeover.fromJSON(object.takeover) : undefined,
      singleGame: isSet(object.singleGame) ? CSteamTVHomePageTemplateSingleGame.fromJSON(object.singleGame) : undefined,
      gameList: isSet(object.gameList) ? CSteamTVHomePageTemplateGameList.fromJSON(object.gameList) : undefined,
      quickExplore: isSet(object.quickExplore)
        ? CSteamTVHomePageTemplateQuickExplore.fromJSON(object.quickExplore)
        : undefined,
      conveyorBelt: isSet(object.conveyorBelt)
        ? CSteamTVHomePageTemplateConveyorBelt.fromJSON(object.conveyorBelt)
        : undefined,
      watchParty: isSet(object.watchParty) ? CSteamTVHomePageTemplateWatchParty.fromJSON(object.watchParty) : undefined,
      developer: isSet(object.developer) ? CSteamTVHomePageTemplateDeveloper.fromJSON(object.developer) : undefined,
      event: isSet(object.event) ? CSteamTVHomePageTemplateEvent.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: CSteamTVHomePageContentRow): unknown {
    const obj: any = {};
    message.templateType !== undefined && (obj.templateType = eSteamTVContentTemplateToJSON(message.templateType));
    message.takeover !== undefined &&
      (obj.takeover = message.takeover ? CSteamTVHomePageTemplateTakeover.toJSON(message.takeover) : undefined);
    message.singleGame !== undefined &&
      (obj.singleGame = message.singleGame ? CSteamTVHomePageTemplateSingleGame.toJSON(message.singleGame) : undefined);
    message.gameList !== undefined &&
      (obj.gameList = message.gameList ? CSteamTVHomePageTemplateGameList.toJSON(message.gameList) : undefined);
    message.quickExplore !== undefined && (obj.quickExplore = message.quickExplore
      ? CSteamTVHomePageTemplateQuickExplore.toJSON(message.quickExplore)
      : undefined);
    message.conveyorBelt !== undefined && (obj.conveyorBelt = message.conveyorBelt
      ? CSteamTVHomePageTemplateConveyorBelt.toJSON(message.conveyorBelt)
      : undefined);
    message.watchParty !== undefined &&
      (obj.watchParty = message.watchParty ? CSteamTVHomePageTemplateWatchParty.toJSON(message.watchParty) : undefined);
    message.developer !== undefined &&
      (obj.developer = message.developer ? CSteamTVHomePageTemplateDeveloper.toJSON(message.developer) : undefined);
    message.event !== undefined &&
      (obj.event = message.event ? CSteamTVHomePageTemplateEvent.toJSON(message.event) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVHomePageContentRow>, I>>(base?: I): CSteamTVHomePageContentRow {
    return CSteamTVHomePageContentRow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVHomePageContentRow>, I>>(object: I): CSteamTVHomePageContentRow {
    const message = createBaseCSteamTVHomePageContentRow();
    message.templateType = object.templateType ?? 0;
    message.takeover = (object.takeover !== undefined && object.takeover !== null)
      ? CSteamTVHomePageTemplateTakeover.fromPartial(object.takeover)
      : undefined;
    message.singleGame = (object.singleGame !== undefined && object.singleGame !== null)
      ? CSteamTVHomePageTemplateSingleGame.fromPartial(object.singleGame)
      : undefined;
    message.gameList = (object.gameList !== undefined && object.gameList !== null)
      ? CSteamTVHomePageTemplateGameList.fromPartial(object.gameList)
      : undefined;
    message.quickExplore = (object.quickExplore !== undefined && object.quickExplore !== null)
      ? CSteamTVHomePageTemplateQuickExplore.fromPartial(object.quickExplore)
      : undefined;
    message.conveyorBelt = (object.conveyorBelt !== undefined && object.conveyorBelt !== null)
      ? CSteamTVHomePageTemplateConveyorBelt.fromPartial(object.conveyorBelt)
      : undefined;
    message.watchParty = (object.watchParty !== undefined && object.watchParty !== null)
      ? CSteamTVHomePageTemplateWatchParty.fromPartial(object.watchParty)
      : undefined;
    message.developer = (object.developer !== undefined && object.developer !== null)
      ? CSteamTVHomePageTemplateDeveloper.fromPartial(object.developer)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null)
      ? CSteamTVHomePageTemplateEvent.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseCSteamTVGetHomePageContentsResponse(): CSteamTVGetHomePageContentsResponse {
  return { rows: [] };
}

export const CSteamTVGetHomePageContentsResponse = {
  encode(message: CSteamTVGetHomePageContentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rows) {
      CSteamTVHomePageContentRow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVGetHomePageContentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVGetHomePageContentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rows.push(CSteamTVHomePageContentRow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVGetHomePageContentsResponse {
    return {
      rows: Array.isArray(object?.rows) ? object.rows.map((e: any) => CSteamTVHomePageContentRow.fromJSON(e)) : [],
    };
  },

  toJSON(message: CSteamTVGetHomePageContentsResponse): unknown {
    const obj: any = {};
    if (message.rows) {
      obj.rows = message.rows.map((e) => e ? CSteamTVHomePageContentRow.toJSON(e) : undefined);
    } else {
      obj.rows = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVGetHomePageContentsResponse>, I>>(
    base?: I,
  ): CSteamTVGetHomePageContentsResponse {
    return CSteamTVGetHomePageContentsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVGetHomePageContentsResponse>, I>>(
    object: I,
  ): CSteamTVGetHomePageContentsResponse {
    const message = createBaseCSteamTVGetHomePageContentsResponse();
    message.rows = object.rows?.map((e) => CSteamTVHomePageContentRow.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVAppCheerSingleCheerType(): CSteamTVAppCheerSingleCheerType {
  return { cheerType: 0, cheerAmount: 0 };
}

export const CSteamTVAppCheerSingleCheerType = {
  encode(message: CSteamTVAppCheerSingleCheerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cheerType !== 0) {
      writer.uint32(8).uint32(message.cheerType);
    }
    if (message.cheerAmount !== 0) {
      writer.uint32(16).uint32(message.cheerAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAppCheerSingleCheerType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAppCheerSingleCheerType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cheerType = reader.uint32();
          break;
        case 2:
          message.cheerAmount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAppCheerSingleCheerType {
    return {
      cheerType: isSet(object.cheerType) ? Number(object.cheerType) : 0,
      cheerAmount: isSet(object.cheerAmount) ? Number(object.cheerAmount) : 0,
    };
  },

  toJSON(message: CSteamTVAppCheerSingleCheerType): unknown {
    const obj: any = {};
    message.cheerType !== undefined && (obj.cheerType = Math.round(message.cheerType));
    message.cheerAmount !== undefined && (obj.cheerAmount = Math.round(message.cheerAmount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAppCheerSingleCheerType>, I>>(base?: I): CSteamTVAppCheerSingleCheerType {
    return CSteamTVAppCheerSingleCheerType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAppCheerSingleCheerType>, I>>(
    object: I,
  ): CSteamTVAppCheerSingleCheerType {
    const message = createBaseCSteamTVAppCheerSingleCheerType();
    message.cheerType = object.cheerType ?? 0;
    message.cheerAmount = object.cheerAmount ?? 0;
    return message;
  },
};

function createBaseCSteamTVAppCheerRequest(): CSteamTVAppCheerRequest {
  return { appId: 0, cheerTargetId: 0, cheers: [] };
}

export const CSteamTVAppCheerRequest = {
  encode(message: CSteamTVAppCheerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.cheerTargetId !== 0) {
      writer.uint32(17).fixed64(message.cheerTargetId);
    }
    for (const v of message.cheers) {
      CSteamTVAppCheerSingleCheerType.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAppCheerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAppCheerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.cheerTargetId = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.cheers.push(CSteamTVAppCheerSingleCheerType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAppCheerRequest {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      cheerTargetId: isSet(object.cheerTargetId) ? Number(object.cheerTargetId) : 0,
      cheers: Array.isArray(object?.cheers)
        ? object.cheers.map((e: any) => CSteamTVAppCheerSingleCheerType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CSteamTVAppCheerRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.cheerTargetId !== undefined && (obj.cheerTargetId = Math.round(message.cheerTargetId));
    if (message.cheers) {
      obj.cheers = message.cheers.map((e) => e ? CSteamTVAppCheerSingleCheerType.toJSON(e) : undefined);
    } else {
      obj.cheers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAppCheerRequest>, I>>(base?: I): CSteamTVAppCheerRequest {
    return CSteamTVAppCheerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAppCheerRequest>, I>>(object: I): CSteamTVAppCheerRequest {
    const message = createBaseCSteamTVAppCheerRequest();
    message.appId = object.appId ?? 0;
    message.cheerTargetId = object.cheerTargetId ?? 0;
    message.cheers = object.cheers?.map((e) => CSteamTVAppCheerSingleCheerType.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCSteamTVAppCheerResponse(): CSteamTVAppCheerResponse {
  return { aggregationDelayMs: 0 };
}

export const CSteamTVAppCheerResponse = {
  encode(message: CSteamTVAppCheerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregationDelayMs !== 0) {
      writer.uint32(8).uint32(message.aggregationDelayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CSteamTVAppCheerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCSteamTVAppCheerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregationDelayMs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CSteamTVAppCheerResponse {
    return { aggregationDelayMs: isSet(object.aggregationDelayMs) ? Number(object.aggregationDelayMs) : 0 };
  },

  toJSON(message: CSteamTVAppCheerResponse): unknown {
    const obj: any = {};
    message.aggregationDelayMs !== undefined && (obj.aggregationDelayMs = Math.round(message.aggregationDelayMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CSteamTVAppCheerResponse>, I>>(base?: I): CSteamTVAppCheerResponse {
    return CSteamTVAppCheerResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CSteamTVAppCheerResponse>, I>>(object: I): CSteamTVAppCheerResponse {
    const message = createBaseCSteamTVAppCheerResponse();
    message.aggregationDelayMs = object.aggregationDelayMs ?? 0;
    return message;
  },
};

export interface SteamTV {
  CreateBroadcastChannel(
    request: CSteamTVCreateBroadcastChannelRequest,
  ): Promise<CSteamTVCreateBroadcastChannelResponse>;
  GetBroadcastChannelID(request: CSteamTVGetBroadcastChannelIDRequest): Promise<CSteamTVGetBroadcastChannelIDResponse>;
  SetBroadcastChannelProfile(
    request: CSteamTVSetBroadcastChannelProfileRequest,
  ): Promise<CSteamTVSetBroadcastChannelProfileResponse>;
  GetBroadcastChannelProfile(
    request: CSteamTVGetBroadcastChannelProfileRequest,
  ): Promise<CSteamTVGetBroadcastChannelProfileResponse>;
  SetBroadcastChannelImage(
    request: CSteamTVSetBroadcastChannelImageRequest,
  ): Promise<CSteamTVSetBroadcastChannelImageResponse>;
  GetBroadcastChannelImages(
    request: CSteamTVGetBroadcastChannelImagesRequest,
  ): Promise<CSteamTVGetBroadcastChannelImagesResponse>;
  SetBroadcastChannelLinkRegions(
    request: CSteamTVSetBroadcastChannelLinkRegionsRequest,
  ): Promise<CSteamTVSetBroadcastChannelLinkRegionsResponse>;
  GetBroadcastChannelLinks(
    request: CSteamTVGetBroadcastChannelLinksRequest,
  ): Promise<CSteamTVGetBroadcastChannelLinksResponse>;
  GetBroadcastChannelBroadcasters(
    request: CSteamTVGetBroadcastChannelBroadcastersRequest,
  ): Promise<CSteamTVGetBroadcastChannelBroadcastersResponse>;
  GetFollowedChannels(request: CSteamTVGetFollowedChannelsRequest): Promise<CSteamTVGetFollowedChannelsResponse>;
  GetSubscribedChannels(request: CSteamTVGetSubscribedChannelsRequest): Promise<CSteamTVGetSubscribedChannelsResponse>;
  GetBroadcastChannelStatus(
    request: CSteamTVGetBroadcastChannelStatusRequest,
  ): Promise<CSteamTVGetBroadcastChannelStatusResponse>;
  FollowBroadcastChannel(
    request: CSteamTVFollowBroadcastChannelRequest,
  ): Promise<CSteamTVFollowBroadcastChannelResponse>;
  SubscribeBroadcastChannel(
    request: CSteamTVSubscribeBroadcastChannelRequest,
  ): Promise<CSteamTVSubscribeBroadcastChannelResponse>;
  GetBroadcastChannelClips(
    request: CSteamTVGetBroadcastChannelClipsRequest,
  ): Promise<CSteamTVGetBroadcastChannelClipsResponse>;
  ReportBroadcastChannel(
    request: CSteamTVReportBroadcastChannelRequest,
  ): Promise<CSteamTVReportBroadcastChannelResponse>;
  GetBroadcastChannelInteraction(
    request: CSteamTVGetBroadcastChannelInteractionRequest,
  ): Promise<CSteamTVGetBroadcastChannelInteractionResponse>;
  GetGames(request: CSteamTVGetGamesRequest): Promise<CSteamTVGetGamesResponse>;
  GetChannels(request: CSteamTVGetChannelsRequest): Promise<CSteamTVGetChannelsResponse>;
  AddChatBan(request: CSteamTVAddChatBanRequest): Promise<CSteamTVAddChatBanResponse>;
  GetChatBans(request: CSteamTVGetChatBansRequest): Promise<CSteamTVGetChatBansResponse>;
  AddChatModerator(request: CSteamTVAddChatModeratorRequest): Promise<CSteamTVAddChatModeratorResponse>;
  GetChatModerators(request: CSteamTVGetChatModeratorsRequest): Promise<CSteamTVGetChatModeratorsResponse>;
  AddWordBan(request: CSteamTVAddWordBanRequest): Promise<CSteamTVAddWordBanResponse>;
  GetWordBans(request: CSteamTVGetWordBansRequest): Promise<CSteamTVGetWordBansResponse>;
  JoinChat(request: CSteamTVJoinChatRequest): Promise<CSteamTVJoinChatResponse>;
  Search(request: CSteamTVSearchRequest): Promise<CSteamTVSearchResponse>;
  GetSteamTVUserSettings(
    request: CSteamTVGetSteamTVUserSettingsRequest,
  ): Promise<CSteamTVGetSteamTVUserSettingsResponse>;
  SetSteamTVUserSettings(
    request: CSteamTVSetSteamTVUserSettingsRequest,
  ): Promise<CSteamTVSetSteamTVUserSettingsResponse>;
  GetMyBroadcastChannels(
    request: CSteamTVGetMyBroadcastChannelsRequest,
  ): Promise<CSteamTVGetMyBroadcastChannelsResponse>;
  GetHomePageContents(request: CSteamTVGetHomePageContentsRequest): Promise<CSteamTVGetHomePageContentsResponse>;
  AppCheer(request: CSteamTVAppCheerRequest): Promise<CSteamTVAppCheerResponse>;
}

export class SteamTVClientImpl implements SteamTV {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "SteamTV";
    this.rpc = rpc;
    this.CreateBroadcastChannel = this.CreateBroadcastChannel.bind(this);
    this.GetBroadcastChannelID = this.GetBroadcastChannelID.bind(this);
    this.SetBroadcastChannelProfile = this.SetBroadcastChannelProfile.bind(this);
    this.GetBroadcastChannelProfile = this.GetBroadcastChannelProfile.bind(this);
    this.SetBroadcastChannelImage = this.SetBroadcastChannelImage.bind(this);
    this.GetBroadcastChannelImages = this.GetBroadcastChannelImages.bind(this);
    this.SetBroadcastChannelLinkRegions = this.SetBroadcastChannelLinkRegions.bind(this);
    this.GetBroadcastChannelLinks = this.GetBroadcastChannelLinks.bind(this);
    this.GetBroadcastChannelBroadcasters = this.GetBroadcastChannelBroadcasters.bind(this);
    this.GetFollowedChannels = this.GetFollowedChannels.bind(this);
    this.GetSubscribedChannels = this.GetSubscribedChannels.bind(this);
    this.GetBroadcastChannelStatus = this.GetBroadcastChannelStatus.bind(this);
    this.FollowBroadcastChannel = this.FollowBroadcastChannel.bind(this);
    this.SubscribeBroadcastChannel = this.SubscribeBroadcastChannel.bind(this);
    this.GetBroadcastChannelClips = this.GetBroadcastChannelClips.bind(this);
    this.ReportBroadcastChannel = this.ReportBroadcastChannel.bind(this);
    this.GetBroadcastChannelInteraction = this.GetBroadcastChannelInteraction.bind(this);
    this.GetGames = this.GetGames.bind(this);
    this.GetChannels = this.GetChannels.bind(this);
    this.AddChatBan = this.AddChatBan.bind(this);
    this.GetChatBans = this.GetChatBans.bind(this);
    this.AddChatModerator = this.AddChatModerator.bind(this);
    this.GetChatModerators = this.GetChatModerators.bind(this);
    this.AddWordBan = this.AddWordBan.bind(this);
    this.GetWordBans = this.GetWordBans.bind(this);
    this.JoinChat = this.JoinChat.bind(this);
    this.Search = this.Search.bind(this);
    this.GetSteamTVUserSettings = this.GetSteamTVUserSettings.bind(this);
    this.SetSteamTVUserSettings = this.SetSteamTVUserSettings.bind(this);
    this.GetMyBroadcastChannels = this.GetMyBroadcastChannels.bind(this);
    this.GetHomePageContents = this.GetHomePageContents.bind(this);
    this.AppCheer = this.AppCheer.bind(this);
  }
  CreateBroadcastChannel(
    request: CSteamTVCreateBroadcastChannelRequest,
  ): Promise<CSteamTVCreateBroadcastChannelResponse> {
    const data = CSteamTVCreateBroadcastChannelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBroadcastChannel", data);
    return promise.then((data) => CSteamTVCreateBroadcastChannelResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelID(request: CSteamTVGetBroadcastChannelIDRequest): Promise<CSteamTVGetBroadcastChannelIDResponse> {
    const data = CSteamTVGetBroadcastChannelIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelID", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelIDResponse.decode(new _m0.Reader(data)));
  }

  SetBroadcastChannelProfile(
    request: CSteamTVSetBroadcastChannelProfileRequest,
  ): Promise<CSteamTVSetBroadcastChannelProfileResponse> {
    const data = CSteamTVSetBroadcastChannelProfileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetBroadcastChannelProfile", data);
    return promise.then((data) => CSteamTVSetBroadcastChannelProfileResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelProfile(
    request: CSteamTVGetBroadcastChannelProfileRequest,
  ): Promise<CSteamTVGetBroadcastChannelProfileResponse> {
    const data = CSteamTVGetBroadcastChannelProfileRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelProfile", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelProfileResponse.decode(new _m0.Reader(data)));
  }

  SetBroadcastChannelImage(
    request: CSteamTVSetBroadcastChannelImageRequest,
  ): Promise<CSteamTVSetBroadcastChannelImageResponse> {
    const data = CSteamTVSetBroadcastChannelImageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetBroadcastChannelImage", data);
    return promise.then((data) => CSteamTVSetBroadcastChannelImageResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelImages(
    request: CSteamTVGetBroadcastChannelImagesRequest,
  ): Promise<CSteamTVGetBroadcastChannelImagesResponse> {
    const data = CSteamTVGetBroadcastChannelImagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelImages", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelImagesResponse.decode(new _m0.Reader(data)));
  }

  SetBroadcastChannelLinkRegions(
    request: CSteamTVSetBroadcastChannelLinkRegionsRequest,
  ): Promise<CSteamTVSetBroadcastChannelLinkRegionsResponse> {
    const data = CSteamTVSetBroadcastChannelLinkRegionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetBroadcastChannelLinkRegions", data);
    return promise.then((data) => CSteamTVSetBroadcastChannelLinkRegionsResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelLinks(
    request: CSteamTVGetBroadcastChannelLinksRequest,
  ): Promise<CSteamTVGetBroadcastChannelLinksResponse> {
    const data = CSteamTVGetBroadcastChannelLinksRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelLinks", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelLinksResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelBroadcasters(
    request: CSteamTVGetBroadcastChannelBroadcastersRequest,
  ): Promise<CSteamTVGetBroadcastChannelBroadcastersResponse> {
    const data = CSteamTVGetBroadcastChannelBroadcastersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelBroadcasters", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelBroadcastersResponse.decode(new _m0.Reader(data)));
  }

  GetFollowedChannels(request: CSteamTVGetFollowedChannelsRequest): Promise<CSteamTVGetFollowedChannelsResponse> {
    const data = CSteamTVGetFollowedChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFollowedChannels", data);
    return promise.then((data) => CSteamTVGetFollowedChannelsResponse.decode(new _m0.Reader(data)));
  }

  GetSubscribedChannels(request: CSteamTVGetSubscribedChannelsRequest): Promise<CSteamTVGetSubscribedChannelsResponse> {
    const data = CSteamTVGetSubscribedChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSubscribedChannels", data);
    return promise.then((data) => CSteamTVGetSubscribedChannelsResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelStatus(
    request: CSteamTVGetBroadcastChannelStatusRequest,
  ): Promise<CSteamTVGetBroadcastChannelStatusResponse> {
    const data = CSteamTVGetBroadcastChannelStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelStatus", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelStatusResponse.decode(new _m0.Reader(data)));
  }

  FollowBroadcastChannel(
    request: CSteamTVFollowBroadcastChannelRequest,
  ): Promise<CSteamTVFollowBroadcastChannelResponse> {
    const data = CSteamTVFollowBroadcastChannelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FollowBroadcastChannel", data);
    return promise.then((data) => CSteamTVFollowBroadcastChannelResponse.decode(new _m0.Reader(data)));
  }

  SubscribeBroadcastChannel(
    request: CSteamTVSubscribeBroadcastChannelRequest,
  ): Promise<CSteamTVSubscribeBroadcastChannelResponse> {
    const data = CSteamTVSubscribeBroadcastChannelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubscribeBroadcastChannel", data);
    return promise.then((data) => CSteamTVSubscribeBroadcastChannelResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelClips(
    request: CSteamTVGetBroadcastChannelClipsRequest,
  ): Promise<CSteamTVGetBroadcastChannelClipsResponse> {
    const data = CSteamTVGetBroadcastChannelClipsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelClips", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelClipsResponse.decode(new _m0.Reader(data)));
  }

  ReportBroadcastChannel(
    request: CSteamTVReportBroadcastChannelRequest,
  ): Promise<CSteamTVReportBroadcastChannelResponse> {
    const data = CSteamTVReportBroadcastChannelRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportBroadcastChannel", data);
    return promise.then((data) => CSteamTVReportBroadcastChannelResponse.decode(new _m0.Reader(data)));
  }

  GetBroadcastChannelInteraction(
    request: CSteamTVGetBroadcastChannelInteractionRequest,
  ): Promise<CSteamTVGetBroadcastChannelInteractionResponse> {
    const data = CSteamTVGetBroadcastChannelInteractionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBroadcastChannelInteraction", data);
    return promise.then((data) => CSteamTVGetBroadcastChannelInteractionResponse.decode(new _m0.Reader(data)));
  }

  GetGames(request: CSteamTVGetGamesRequest): Promise<CSteamTVGetGamesResponse> {
    const data = CSteamTVGetGamesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGames", data);
    return promise.then((data) => CSteamTVGetGamesResponse.decode(new _m0.Reader(data)));
  }

  GetChannels(request: CSteamTVGetChannelsRequest): Promise<CSteamTVGetChannelsResponse> {
    const data = CSteamTVGetChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChannels", data);
    return promise.then((data) => CSteamTVGetChannelsResponse.decode(new _m0.Reader(data)));
  }

  AddChatBan(request: CSteamTVAddChatBanRequest): Promise<CSteamTVAddChatBanResponse> {
    const data = CSteamTVAddChatBanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddChatBan", data);
    return promise.then((data) => CSteamTVAddChatBanResponse.decode(new _m0.Reader(data)));
  }

  GetChatBans(request: CSteamTVGetChatBansRequest): Promise<CSteamTVGetChatBansResponse> {
    const data = CSteamTVGetChatBansRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChatBans", data);
    return promise.then((data) => CSteamTVGetChatBansResponse.decode(new _m0.Reader(data)));
  }

  AddChatModerator(request: CSteamTVAddChatModeratorRequest): Promise<CSteamTVAddChatModeratorResponse> {
    const data = CSteamTVAddChatModeratorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddChatModerator", data);
    return promise.then((data) => CSteamTVAddChatModeratorResponse.decode(new _m0.Reader(data)));
  }

  GetChatModerators(request: CSteamTVGetChatModeratorsRequest): Promise<CSteamTVGetChatModeratorsResponse> {
    const data = CSteamTVGetChatModeratorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChatModerators", data);
    return promise.then((data) => CSteamTVGetChatModeratorsResponse.decode(new _m0.Reader(data)));
  }

  AddWordBan(request: CSteamTVAddWordBanRequest): Promise<CSteamTVAddWordBanResponse> {
    const data = CSteamTVAddWordBanRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddWordBan", data);
    return promise.then((data) => CSteamTVAddWordBanResponse.decode(new _m0.Reader(data)));
  }

  GetWordBans(request: CSteamTVGetWordBansRequest): Promise<CSteamTVGetWordBansResponse> {
    const data = CSteamTVGetWordBansRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetWordBans", data);
    return promise.then((data) => CSteamTVGetWordBansResponse.decode(new _m0.Reader(data)));
  }

  JoinChat(request: CSteamTVJoinChatRequest): Promise<CSteamTVJoinChatResponse> {
    const data = CSteamTVJoinChatRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinChat", data);
    return promise.then((data) => CSteamTVJoinChatResponse.decode(new _m0.Reader(data)));
  }

  Search(request: CSteamTVSearchRequest): Promise<CSteamTVSearchResponse> {
    const data = CSteamTVSearchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Search", data);
    return promise.then((data) => CSteamTVSearchResponse.decode(new _m0.Reader(data)));
  }

  GetSteamTVUserSettings(
    request: CSteamTVGetSteamTVUserSettingsRequest,
  ): Promise<CSteamTVGetSteamTVUserSettingsResponse> {
    const data = CSteamTVGetSteamTVUserSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSteamTVUserSettings", data);
    return promise.then((data) => CSteamTVGetSteamTVUserSettingsResponse.decode(new _m0.Reader(data)));
  }

  SetSteamTVUserSettings(
    request: CSteamTVSetSteamTVUserSettingsRequest,
  ): Promise<CSteamTVSetSteamTVUserSettingsResponse> {
    const data = CSteamTVSetSteamTVUserSettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSteamTVUserSettings", data);
    return promise.then((data) => CSteamTVSetSteamTVUserSettingsResponse.decode(new _m0.Reader(data)));
  }

  GetMyBroadcastChannels(
    request: CSteamTVGetMyBroadcastChannelsRequest,
  ): Promise<CSteamTVGetMyBroadcastChannelsResponse> {
    const data = CSteamTVGetMyBroadcastChannelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMyBroadcastChannels", data);
    return promise.then((data) => CSteamTVGetMyBroadcastChannelsResponse.decode(new _m0.Reader(data)));
  }

  GetHomePageContents(request: CSteamTVGetHomePageContentsRequest): Promise<CSteamTVGetHomePageContentsResponse> {
    const data = CSteamTVGetHomePageContentsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetHomePageContents", data);
    return promise.then((data) => CSteamTVGetHomePageContentsResponse.decode(new _m0.Reader(data)));
  }

  AppCheer(request: CSteamTVAppCheerRequest): Promise<CSteamTVAppCheerResponse> {
    const data = CSteamTVAppCheerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AppCheer", data);
    return promise.then((data) => CSteamTVAppCheerResponse.decode(new _m0.Reader(data)));
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
