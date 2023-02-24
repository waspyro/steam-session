/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ECommunityItemClass,
  eCommunityItemClassFromJSON,
  eCommunityItemClassToJSON,
  ENewSteamAnnouncementState,
  eNewSteamAnnouncementStateFromJSON,
  eNewSteamAnnouncementStateToJSON,
  EProfileCustomizationType,
  eProfileCustomizationTypeFromJSON,
  eProfileCustomizationTypeToJSON,
} from "./enums";
import {
  EBanContentCheckResult,
  eBanContentCheckResultFromJSON,
  eBanContentCheckResultToJSON,
} from "./steammessages_base";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EProfileCustomizationStyle {
  k_EProfileCustomizationStyleDefault = 0,
  k_EProfileCustomizationStyleSelected = 1,
  k_EProfileCustomizationStyleRarest = 2,
  k_EProfileCustomizationStyleMostRecent = 3,
  k_EProfileCustomizationStyleRandom = 4,
  k_EProfileCustomizationStyleHighestRated = 5,
  UNRECOGNIZED = -1,
}

export function eProfileCustomizationStyleFromJSON(object: any): EProfileCustomizationStyle {
  switch (object) {
    case 0:
    case "k_EProfileCustomizationStyleDefault":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleDefault;
    case 1:
    case "k_EProfileCustomizationStyleSelected":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleSelected;
    case 2:
    case "k_EProfileCustomizationStyleRarest":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleRarest;
    case 3:
    case "k_EProfileCustomizationStyleMostRecent":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleMostRecent;
    case 4:
    case "k_EProfileCustomizationStyleRandom":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleRandom;
    case 5:
    case "k_EProfileCustomizationStyleHighestRated":
      return EProfileCustomizationStyle.k_EProfileCustomizationStyleHighestRated;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EProfileCustomizationStyle.UNRECOGNIZED;
  }
}

export function eProfileCustomizationStyleToJSON(object: EProfileCustomizationStyle): string {
  switch (object) {
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleDefault:
      return "k_EProfileCustomizationStyleDefault";
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleSelected:
      return "k_EProfileCustomizationStyleSelected";
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleRarest:
      return "k_EProfileCustomizationStyleRarest";
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleMostRecent:
      return "k_EProfileCustomizationStyleMostRecent";
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleRandom:
      return "k_EProfileCustomizationStyleRandom";
    case EProfileCustomizationStyle.k_EProfileCustomizationStyleHighestRated:
      return "k_EProfileCustomizationStyleHighestRated";
    case EProfileCustomizationStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAgreementType {
  k_EAgreementType_Invalid = -1,
  k_EAgreementType_GlobalSSA = 0,
  k_EAgreementType_ChinaSSA = 1,
  UNRECOGNIZED = -1,
}

export function eAgreementTypeFromJSON(object: any): EAgreementType {
  switch (object) {
    case -1:
    case "k_EAgreementType_Invalid":
      return EAgreementType.k_EAgreementType_Invalid;
    case 0:
    case "k_EAgreementType_GlobalSSA":
      return EAgreementType.k_EAgreementType_GlobalSSA;
    case 1:
    case "k_EAgreementType_ChinaSSA":
      return EAgreementType.k_EAgreementType_ChinaSSA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAgreementType.UNRECOGNIZED;
  }
}

export function eAgreementTypeToJSON(object: EAgreementType): string {
  switch (object) {
    case EAgreementType.k_EAgreementType_Invalid:
      return "k_EAgreementType_Invalid";
    case EAgreementType.k_EAgreementType_GlobalSSA:
      return "k_EAgreementType_GlobalSSA";
    case EAgreementType.k_EAgreementType_ChinaSSA:
      return "k_EAgreementType_ChinaSSA";
    case EAgreementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ENotificationSetting {
  k_ENotificationSettingNotifyUseDefault = 0,
  k_ENotificationSettingAlways = 1,
  k_ENotificationSettingNever = 2,
  UNRECOGNIZED = -1,
}

export function eNotificationSettingFromJSON(object: any): ENotificationSetting {
  switch (object) {
    case 0:
    case "k_ENotificationSettingNotifyUseDefault":
      return ENotificationSetting.k_ENotificationSettingNotifyUseDefault;
    case 1:
    case "k_ENotificationSettingAlways":
      return ENotificationSetting.k_ENotificationSettingAlways;
    case 2:
    case "k_ENotificationSettingNever":
      return ENotificationSetting.k_ENotificationSettingNever;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ENotificationSetting.UNRECOGNIZED;
  }
}

export function eNotificationSettingToJSON(object: ENotificationSetting): string {
  switch (object) {
    case ENotificationSetting.k_ENotificationSettingNotifyUseDefault:
      return "k_ENotificationSettingNotifyUseDefault";
    case ENotificationSetting.k_ENotificationSettingAlways:
      return "k_ENotificationSettingAlways";
    case ENotificationSetting.k_ENotificationSettingNever:
      return "k_ENotificationSettingNever";
    case ENotificationSetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ETextFilterSetting {
  k_ETextFilterSettingSteamLabOptedOut = 0,
  k_ETextFilterSettingEnabled = 1,
  k_ETextFilterSettingEnabledAllowProfanity = 2,
  k_ETextFilterSettingDisabled = 3,
  UNRECOGNIZED = -1,
}

export function eTextFilterSettingFromJSON(object: any): ETextFilterSetting {
  switch (object) {
    case 0:
    case "k_ETextFilterSettingSteamLabOptedOut":
      return ETextFilterSetting.k_ETextFilterSettingSteamLabOptedOut;
    case 1:
    case "k_ETextFilterSettingEnabled":
      return ETextFilterSetting.k_ETextFilterSettingEnabled;
    case 2:
    case "k_ETextFilterSettingEnabledAllowProfanity":
      return ETextFilterSetting.k_ETextFilterSettingEnabledAllowProfanity;
    case 3:
    case "k_ETextFilterSettingDisabled":
      return ETextFilterSetting.k_ETextFilterSettingDisabled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ETextFilterSetting.UNRECOGNIZED;
  }
}

export function eTextFilterSettingToJSON(object: ETextFilterSetting): string {
  switch (object) {
    case ETextFilterSetting.k_ETextFilterSettingSteamLabOptedOut:
      return "k_ETextFilterSettingSteamLabOptedOut";
    case ETextFilterSetting.k_ETextFilterSettingEnabled:
      return "k_ETextFilterSettingEnabled";
    case ETextFilterSetting.k_ETextFilterSettingEnabledAllowProfanity:
      return "k_ETextFilterSettingEnabledAllowProfanity";
    case ETextFilterSetting.k_ETextFilterSettingDisabled:
      return "k_ETextFilterSettingDisabled";
    case ETextFilterSetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CPlayerGetMutualFriendsForIncomingInvitesRequest {
}

export interface CPlayerIncomingInviteMutualFriendList {
  steamid: number;
  mutualFriendAccountIds: number[];
}

export interface CPlayerGetMutualFriendsForIncomingInvitesResponse {
  incomingInviteMutualFriendsLists: CPlayerIncomingInviteMutualFriendList[];
}

export interface CPlayerGetOwnedGamesRequest {
  steamid: number;
  includeAppinfo: boolean;
  includePlayedFreeGames: boolean;
  appidsFilter: number[];
  includeFreeSub: boolean;
  skipUnvettedApps: boolean;
  language: string;
  includeExtendedAppinfo: boolean;
}

export interface CPlayerGetOwnedGamesResponse {
  gameCount: number;
  games: CPlayerGetOwnedGamesResponse_Game[];
}

export interface CPlayerGetOwnedGamesResponse_Game {
  appid: number;
  name: string;
  playtime2weeks: number;
  playtimeForever: number;
  imgIconUrl: string;
  hasCommunityVisibleStats: boolean;
  playtimeWindowsForever: number;
  playtimeMacForever: number;
  playtimeLinuxForever: number;
  rtimeLastPlayed: number;
  capsuleFilename: string;
  sortAs: string;
  hasWorkshop: boolean;
  hasMarket: boolean;
  hasDlc: boolean;
  hasLeaderboards: boolean;
  contentDescriptorids: number[];
}

export interface CPlayerGetPlayNextRequest {
  maxAgeSeconds: number;
  ignoreAppids: number[];
}

export interface CPlayerGetPlayNextResponse {
  lastUpdateTime: number;
  appids: number[];
}

export interface CPlayerGetFriendsGameplayInfoRequest {
  appid: number;
}

export interface CPlayerGetFriendsGameplayInfoResponse {
  yourInfo: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo | undefined;
  inGame: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  playedRecently: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  playedEver: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  owns: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
  inWishlist: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo[];
}

export interface CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
  steamid: number;
  minutesPlayed: number;
  minutesPlayedForever: number;
}

export interface CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
  steamid: number;
  minutesPlayed: number;
  minutesPlayedForever: number;
  inWishlist: boolean;
  owned: boolean;
}

export interface CPlayerGetGameBadgeLevelsRequest {
  appid: number;
}

export interface CPlayerGetGameBadgeLevelsResponse {
  playerLevel: number;
  badges: CPlayerGetGameBadgeLevelsResponse_Badge[];
}

export interface CPlayerGetGameBadgeLevelsResponse_Badge {
  level: number;
  series: number;
  borderColor: number;
}

export interface CPlayerGetProfileBackgroundRequest {
  steamid: number;
  language: string;
}

export interface ProfileItem {
  communityitemid: number;
  imageSmall: string;
  imageLarge: string;
  name: string;
  itemTitle: string;
  itemDescription: string;
  appid: number;
  itemType: number;
  itemClass: number;
  movieWebm: string;
  movieMp4: string;
  movieWebmSmall: string;
  movieMp4Small: string;
  equippedFlags: number;
  profileColors: ProfileItem_ProfileColor[];
}

export interface ProfileItem_ProfileColor {
  styleName: string;
  color: string;
}

export interface CPlayerGetProfileBackgroundResponse {
  profileBackground: ProfileItem | undefined;
}

export interface CPlayerSetProfileBackgroundRequest {
  communityitemid: number;
}

export interface CPlayerSetProfileBackgroundResponse {
}

export interface CPlayerGetMiniProfileBackgroundRequest {
  steamid: number;
  language: string;
}

export interface CPlayerGetMiniProfileBackgroundResponse {
  profileBackground: ProfileItem | undefined;
}

export interface CPlayerSetMiniProfileBackgroundRequest {
  communityitemid: number;
}

export interface CPlayerSetMiniProfileBackgroundResponse {
}

export interface CPlayerGetAvatarFrameRequest {
  steamid: number;
  language: string;
}

export interface CPlayerGetAvatarFrameResponse {
  avatarFrame: ProfileItem | undefined;
}

export interface CPlayerSetAvatarFrameRequest {
  communityitemid: number;
}

export interface CPlayerSetAvatarFrameResponse {
}

export interface CPlayerGetAnimatedAvatarRequest {
  steamid: number;
  language: string;
}

export interface CPlayerGetAnimatedAvatarResponse {
  avatar: ProfileItem | undefined;
}

export interface CPlayerSetAnimatedAvatarRequest {
  communityitemid: number;
}

export interface CPlayerSetAnimatedAvatarResponse {
}

export interface CPlayerGetSteamDeckKeyboardSkinRequest {
  steamid: number;
  language: string;
}

export interface CPlayerGetSteamDeckKeyboardSkinResponse {
  steamDeckKeyboardSkin: ProfileItem | undefined;
}

export interface CPlayerSetSteamDeckKeyboardSkinRequest {
  communityitemid: number;
}

export interface CPlayerSetSteamDeckKeyboardSkinResponse {
}

export interface CPlayerGetProfileItemsOwnedRequest {
  language: string;
  filters: ECommunityItemClass[];
}

export interface CPlayerGetProfileItemsOwnedResponse {
  profileBackgrounds: ProfileItem[];
  miniProfileBackgrounds: ProfileItem[];
  avatarFrames: ProfileItem[];
  animatedAvatars: ProfileItem[];
  profileModifiers: ProfileItem[];
  steamDeckKeyboardSkins: ProfileItem[];
  steamDeckStartupMovies: ProfileItem[];
}

export interface CPlayerGetProfileItemsEquippedRequest {
  steamid: number;
  language: string;
}

export interface CPlayerGetProfileItemsEquippedResponse {
  profileBackground: ProfileItem | undefined;
  miniProfileBackground: ProfileItem | undefined;
  avatarFrame: ProfileItem | undefined;
  animatedAvatar: ProfileItem | undefined;
  profileModifier: ProfileItem | undefined;
  steamDeckKeyboardSkin: ProfileItem | undefined;
}

export interface CPlayerSetEquippedProfileItemFlagsRequest {
  communityitemid: number;
  flags: number;
}

export interface CPlayerSetEquippedProfileItemFlagsResponse {
}

export interface CPlayerGetEmoticonListRequest {
}

export interface CPlayerGetEmoticonListResponse {
  emoticons: CPlayerGetEmoticonListResponse_Emoticon[];
}

export interface CPlayerGetEmoticonListResponse_Emoticon {
  name: string;
  count: number;
  timeLastUsed: number;
  useCount: number;
  timeReceived: number;
  appid: number;
}

export interface CPlayerGetTopAchievementsForGamesRequest {
  steamid: number;
  language: string;
  maxAchievements: number;
  appids: number[];
}

export interface CPlayerGetTopAchievementsForGamesResponse {
  games: CPlayerGetTopAchievementsForGamesResponse_Game[];
}

export interface CPlayerGetTopAchievementsForGamesResponse_Achievement {
  statid: number;
  bit: number;
  name: string;
  desc: string;
  icon: string;
  iconGray: string;
  hidden: boolean;
  playerPercentUnlocked: string;
}

export interface CPlayerGetTopAchievementsForGamesResponse_Game {
  appid: number;
  totalAchievements: number;
  achievements: CPlayerGetTopAchievementsForGamesResponse_Achievement[];
}

export interface CPlayerGetAchievementsProgressRequest {
  steamid: number;
  language: string;
  appids: number[];
}

export interface CPlayerGetAchievementsProgressResponse {
  achievementProgress: CPlayerGetAchievementsProgressResponse_AchievementProgress[];
}

export interface CPlayerGetAchievementsProgressResponse_AchievementProgress {
  appid: number;
  unlocked: number;
  total: number;
  percentage: number;
  allUnlocked: boolean;
  cacheTime: number;
}

export interface CPlayerGetGameAchievementsRequest {
  appid: number;
  language: string;
}

export interface CPlayerGetGameAchievementsResponse {
  achievements: CPlayerGetGameAchievementsResponse_Achievement[];
}

export interface CPlayerGetGameAchievementsResponse_Achievement {
  internalName: string;
  localizedName: string;
  localizedDesc: string;
  icon: string;
  iconGray: string;
  hidden: boolean;
  playerPercentUnlocked: string;
}

export interface CPlayerGetFavoriteBadgeRequest {
  steamid: number;
}

export interface CPlayerGetFavoriteBadgeResponse {
  hasFavoriteBadge: boolean;
  badgeid: number;
  communityitemid: number;
  itemType: number;
  borderColor: number;
  appid: number;
  level: number;
}

export interface CPlayerSetFavoriteBadgeRequest {
  communityitemid: number;
  badgeid: number;
}

export interface CPlayerSetFavoriteBadgeResponse {
}

export interface CPlayerGetProfileCustomizationRequest {
  steamid: number;
  includeInactiveCustomizations: boolean;
  includePurchasedCustomizations: boolean;
}

export interface ProfileCustomizationSlot {
  slot: number;
  appid: number;
  publishedfileid: number;
  itemAssetid: number;
  itemContextid: number;
  notes: string;
  title: string;
  accountid: number;
  badgeid: number;
  borderColor: number;
  itemClassid: number;
  itemInstanceid: number;
  banCheckResult: EBanContentCheckResult;
  replayYear: number;
}

export interface ProfileCustomization {
  customizationType: EProfileCustomizationType;
  large: boolean;
  slots: ProfileCustomizationSlot[];
  active: boolean;
  customizationStyle: EProfileCustomizationStyle;
  purchaseid: number;
  level: number;
}

export interface ProfileTheme {
  themeId: string;
  title: string;
}

export interface ProfilePreferences {
  hideProfileAwards: boolean;
}

export interface CPlayerGetProfileCustomizationResponse {
  customizations: ProfileCustomization[];
  slotsAvailable: number;
  profileTheme: ProfileTheme | undefined;
  purchasedCustomizations: CPlayerGetProfileCustomizationResponse_PurchasedCustomization[];
  profilePreferences: ProfilePreferences | undefined;
}

export interface CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
  purchaseid: number;
  customizationType: EProfileCustomizationType;
  level: number;
}

export interface CPlayerGetPurchasedProfileCustomizationsRequest {
  steamid: number;
}

export interface CPlayerGetPurchasedProfileCustomizationsResponse {
  purchasedCustomizations: CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization[];
}

export interface CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
  purchaseid: number;
  customizationType: EProfileCustomizationType;
}

export interface CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
  steamid: number;
}

export interface CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
  purchasedCustomizations: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization[];
  upgradedCustomizations: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization[];
}

export interface CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
  customizationType: EProfileCustomizationType;
  count: number;
}

export interface CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
  customizationType: EProfileCustomizationType;
  level: number;
}

export interface CPlayerGetProfileThemesAvailableRequest {
}

export interface CPlayerGetProfileThemesAvailableResponse {
  profileThemes: ProfileTheme[];
}

export interface CPlayerSetProfileThemeRequest {
  themeId: string;
}

export interface CPlayerSetProfileThemeResponse {
}

export interface CPlayerSetProfilePreferencesRequest {
  profilePreferences: ProfilePreferences | undefined;
}

export interface CPlayerSetProfilePreferencesResponse {
}

export interface CPlayerPostStatusToFriendsRequest {
  appid: number;
  statusText: string;
}

export interface CPlayerPostStatusToFriendsResponse {
}

export interface CPlayerGetPostedStatusRequest {
  steamid: number;
  postid: number;
}

export interface CPlayerGetPostedStatusResponse {
  accountid: number;
  postid: number;
  statusText: string;
  deleted: boolean;
  appid: number;
}

export interface CPlayerDeletePostedStatusRequest {
  postid: number;
}

export interface CPlayerDeletePostedStatusResponse {
}

export interface CPlayerGetLastPlayedTimesRequest {
  minLastPlayed: number;
}

export interface CPlayerGetLastPlayedTimesResponse {
  games: CPlayerGetLastPlayedTimesResponse_Game[];
}

export interface CPlayerGetLastPlayedTimesResponse_Game {
  appid: number;
  lastPlaytime: number;
  playtime2weeks: number;
  playtimeForever: number;
  firstPlaytime: number;
  playtimeWindowsForever: number;
  playtimeMacForever: number;
  playtimeLinuxForever: number;
  firstWindowsPlaytime: number;
  firstMacPlaytime: number;
  firstLinuxPlaytime: number;
  lastWindowsPlaytime: number;
  lastMacPlaytime: number;
  lastLinuxPlaytime: number;
}

export interface CPlayerGetTimeSSAAcceptedRequest {
}

export interface CPlayerGetTimeSSAAcceptedResponse {
  timeSsaAccepted: number;
  timeSsaUpdated: number;
  timeChinassaAccepted: number;
}

export interface CPlayerAcceptSSARequest {
  agreementType: EAgreementType;
  timeSignedUtc: number;
}

export interface CPlayerAcceptSSAResponse {
}

export interface CPlayerGetNicknameListRequest {
}

export interface CPlayerGetNicknameListResponse {
  nicknames: CPlayerGetNicknameListResponse_PlayerNickname[];
}

export interface CPlayerGetNicknameListResponse_PlayerNickname {
  accountid: number;
  nickname: string;
}

export interface CPlayerGetPerFriendPreferencesRequest {
}

export interface PerFriendPreferences {
  accountid: number;
  nickname: string;
  notificationsShowingame: ENotificationSetting;
  notificationsShowonline: ENotificationSetting;
  notificationsShowmessages: ENotificationSetting;
  soundsShowingame: ENotificationSetting;
  soundsShowonline: ENotificationSetting;
  soundsShowmessages: ENotificationSetting;
  notificationsSendmobile: ENotificationSetting;
}

export interface CPlayerGetPerFriendPreferencesResponse {
  preferences: PerFriendPreferences[];
}

export interface CPlayerSetPerFriendPreferencesRequest {
  preferences: PerFriendPreferences | undefined;
}

export interface CPlayerSetPerFriendPreferencesResponse {
}

export interface CPlayerAddFriendRequest {
  steamid: number;
}

export interface CPlayerAddFriendResponse {
  inviteSent: boolean;
  friendRelationship: number;
  result: number;
}

export interface CPlayerRemoveFriendRequest {
  steamid: number;
}

export interface CPlayerRemoveFriendResponse {
  friendRelationship: number;
}

export interface CPlayerIgnoreFriendRequest {
  steamid: number;
  unignore: boolean;
}

export interface CPlayerIgnoreFriendResponse {
  friendRelationship: number;
}

export interface CPlayerGetCommunityPreferencesRequest {
}

export interface CPlayerCommunityPreferences {
  hideAdultContentViolence: boolean;
  hideAdultContentSex: boolean;
  parenthesizeNicknames: boolean;
  textFilterSetting: ETextFilterSetting;
  textFilterIgnoreFriends: boolean;
  textFilterWordsRevision: number;
  timestampUpdated: number;
}

export interface CPlayerGetCommunityPreferencesResponse {
  preferences: CPlayerCommunityPreferences | undefined;
}

export interface CPlayerSetCommunityPreferencesRequest {
  preferences: CPlayerCommunityPreferences | undefined;
}

export interface CPlayerSetCommunityPreferencesResponse {
}

export interface CPlayerGetTextFilterWordsRequest {
}

export interface CPlayerTextFilterWords {
  textFilterCustomBannedWords: string[];
  textFilterCustomCleanWords: string[];
  textFilterWordsRevision: number;
}

export interface CPlayerGetTextFilterWordsResponse {
  words: CPlayerTextFilterWords | undefined;
}

export interface CPlayerGetNewSteamAnnouncementStateRequest {
  language: number;
}

export interface CPlayerGetNewSteamAnnouncementStateResponse {
  state: ENewSteamAnnouncementState;
  announcementHeadline: string;
  announcementUrl: string;
  timePosted: number;
  announcementGid: number;
}

export interface CPlayerUpdateSteamAnnouncementLastReadRequest {
  announcementGid: number;
  timePosted: number;
}

export interface CPlayerUpdateSteamAnnouncementLastReadResponse {
}

export interface CPlayerGetPrivacySettingsRequest {
}

export interface CPrivacySettings {
  privacyState: number;
  privacyStateInventory: number;
  privacyStateGifts: number;
  privacyStateOwnedgames: number;
  privacyStatePlaytime: number;
  privacyStateFriendslist: number;
}

export interface CPlayerGetPrivacySettingsResponse {
  privacySettings: CPrivacySettings | undefined;
}

export interface CPlayerGetDurationControlRequest {
  appid: number;
}

export interface CPlayerGetDurationControlResponse {
  isEnabled: boolean;
  seconds: number;
  secondsToday: number;
  isSteamchinaAccount: boolean;
  isAgeVerified: boolean;
  secondsAllowedToday: number;
  ageVerificationPending: boolean;
  blockMinors: boolean;
}

export interface CPlayerRecordDisconnectedPlaytimeRequest {
  playSessions: CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory[];
}

export interface CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
  appid: number;
  sessionTimeStart: number;
  seconds: number;
  offline: boolean;
}

export interface CPlayerRecordDisconnectedPlaytimeResponse {
}

export interface CPlayerLastPlayedTimesNotification {
  games: CPlayerGetLastPlayedTimesResponse_Game[];
}

export interface CPlayerFriendNicknameChangedNotification {
  accountid: number;
  nickname: string;
  isEchoToSelf: boolean;
}

export interface CPlayerFriendEquippedProfileItemsChangedNotification {
  accountid: number;
}

export interface CPlayerNewSteamAnnouncementStateNotification {
  state: ENewSteamAnnouncementState;
  announcementHeadline: string;
  announcementUrl: string;
  timePosted: number;
  announcementGid: number;
}

export interface CPlayerCommunityPreferencesChangedNotification {
  preferences: CPlayerCommunityPreferences | undefined;
}

export interface CPlayerTextFilterWordsChangedNotification {
  words: CPlayerTextFilterWords | undefined;
}

export interface CPlayerPerFriendPreferencesChangedNotification {
  accountid: number;
  preferences: PerFriendPreferences | undefined;
}

export interface CPlayerPrivacySettingsChangedNotification {
  privacySettings: CPrivacySettings | undefined;
}

function createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest(): CPlayerGetMutualFriendsForIncomingInvitesRequest {
  return {};
}

export const CPlayerGetMutualFriendsForIncomingInvitesRequest = {
  encode(_: CPlayerGetMutualFriendsForIncomingInvitesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest();
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

  fromJSON(_: any): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    return {};
  },

  toJSON(_: CPlayerGetMutualFriendsForIncomingInvitesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesRequest>, I>>(
    base?: I,
  ): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    return CPlayerGetMutualFriendsForIncomingInvitesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesRequest>, I>>(
    _: I,
  ): CPlayerGetMutualFriendsForIncomingInvitesRequest {
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesRequest();
    return message;
  },
};

function createBaseCPlayerIncomingInviteMutualFriendList(): CPlayerIncomingInviteMutualFriendList {
  return { steamid: 0, mutualFriendAccountIds: [] };
}

export const CPlayerIncomingInviteMutualFriendList = {
  encode(message: CPlayerIncomingInviteMutualFriendList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    writer.uint32(18).fork();
    for (const v of message.mutualFriendAccountIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIncomingInviteMutualFriendList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIncomingInviteMutualFriendList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mutualFriendAccountIds.push(reader.uint32());
            }
          } else {
            message.mutualFriendAccountIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerIncomingInviteMutualFriendList {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      mutualFriendAccountIds: Array.isArray(object?.mutualFriendAccountIds)
        ? object.mutualFriendAccountIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPlayerIncomingInviteMutualFriendList): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    if (message.mutualFriendAccountIds) {
      obj.mutualFriendAccountIds = message.mutualFriendAccountIds.map((e) => Math.round(e));
    } else {
      obj.mutualFriendAccountIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerIncomingInviteMutualFriendList>, I>>(
    base?: I,
  ): CPlayerIncomingInviteMutualFriendList {
    return CPlayerIncomingInviteMutualFriendList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerIncomingInviteMutualFriendList>, I>>(
    object: I,
  ): CPlayerIncomingInviteMutualFriendList {
    const message = createBaseCPlayerIncomingInviteMutualFriendList();
    message.steamid = object.steamid ?? 0;
    message.mutualFriendAccountIds = object.mutualFriendAccountIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse(): CPlayerGetMutualFriendsForIncomingInvitesResponse {
  return { incomingInviteMutualFriendsLists: [] };
}

export const CPlayerGetMutualFriendsForIncomingInvitesResponse = {
  encode(
    message: CPlayerGetMutualFriendsForIncomingInvitesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.incomingInviteMutualFriendsLists) {
      CPlayerIncomingInviteMutualFriendList.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incomingInviteMutualFriendsLists.push(
            CPlayerIncomingInviteMutualFriendList.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    return {
      incomingInviteMutualFriendsLists: Array.isArray(object?.incomingInviteMutualFriendsLists)
        ? object.incomingInviteMutualFriendsLists.map((e: any) => CPlayerIncomingInviteMutualFriendList.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetMutualFriendsForIncomingInvitesResponse): unknown {
    const obj: any = {};
    if (message.incomingInviteMutualFriendsLists) {
      obj.incomingInviteMutualFriendsLists = message.incomingInviteMutualFriendsLists.map((e) =>
        e ? CPlayerIncomingInviteMutualFriendList.toJSON(e) : undefined
      );
    } else {
      obj.incomingInviteMutualFriendsLists = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesResponse>, I>>(
    base?: I,
  ): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    return CPlayerGetMutualFriendsForIncomingInvitesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetMutualFriendsForIncomingInvitesResponse>, I>>(
    object: I,
  ): CPlayerGetMutualFriendsForIncomingInvitesResponse {
    const message = createBaseCPlayerGetMutualFriendsForIncomingInvitesResponse();
    message.incomingInviteMutualFriendsLists =
      object.incomingInviteMutualFriendsLists?.map((e) => CPlayerIncomingInviteMutualFriendList.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetOwnedGamesRequest(): CPlayerGetOwnedGamesRequest {
  return {
    steamid: 0,
    includeAppinfo: false,
    includePlayedFreeGames: false,
    appidsFilter: [],
    includeFreeSub: false,
    skipUnvettedApps: false,
    language: "",
    includeExtendedAppinfo: false,
  };
}

export const CPlayerGetOwnedGamesRequest = {
  encode(message: CPlayerGetOwnedGamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.includeAppinfo === true) {
      writer.uint32(16).bool(message.includeAppinfo);
    }
    if (message.includePlayedFreeGames === true) {
      writer.uint32(24).bool(message.includePlayedFreeGames);
    }
    writer.uint32(34).fork();
    for (const v of message.appidsFilter) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.includeFreeSub === true) {
      writer.uint32(40).bool(message.includeFreeSub);
    }
    if (message.skipUnvettedApps === true) {
      writer.uint32(48).bool(message.skipUnvettedApps);
    }
    if (message.language !== "") {
      writer.uint32(58).string(message.language);
    }
    if (message.includeExtendedAppinfo === true) {
      writer.uint32(64).bool(message.includeExtendedAppinfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetOwnedGamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetOwnedGamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.includeAppinfo = reader.bool();
          break;
        case 3:
          message.includePlayedFreeGames = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appidsFilter.push(reader.uint32());
            }
          } else {
            message.appidsFilter.push(reader.uint32());
          }
          break;
        case 5:
          message.includeFreeSub = reader.bool();
          break;
        case 6:
          message.skipUnvettedApps = reader.bool();
          break;
        case 7:
          message.language = reader.string();
          break;
        case 8:
          message.includeExtendedAppinfo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetOwnedGamesRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      includeAppinfo: isSet(object.includeAppinfo) ? Boolean(object.includeAppinfo) : false,
      includePlayedFreeGames: isSet(object.includePlayedFreeGames) ? Boolean(object.includePlayedFreeGames) : false,
      appidsFilter: Array.isArray(object?.appidsFilter) ? object.appidsFilter.map((e: any) => Number(e)) : [],
      includeFreeSub: isSet(object.includeFreeSub) ? Boolean(object.includeFreeSub) : false,
      skipUnvettedApps: isSet(object.skipUnvettedApps) ? Boolean(object.skipUnvettedApps) : false,
      language: isSet(object.language) ? String(object.language) : "",
      includeExtendedAppinfo: isSet(object.includeExtendedAppinfo) ? Boolean(object.includeExtendedAppinfo) : false,
    };
  },

  toJSON(message: CPlayerGetOwnedGamesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.includeAppinfo !== undefined && (obj.includeAppinfo = message.includeAppinfo);
    message.includePlayedFreeGames !== undefined && (obj.includePlayedFreeGames = message.includePlayedFreeGames);
    if (message.appidsFilter) {
      obj.appidsFilter = message.appidsFilter.map((e) => Math.round(e));
    } else {
      obj.appidsFilter = [];
    }
    message.includeFreeSub !== undefined && (obj.includeFreeSub = message.includeFreeSub);
    message.skipUnvettedApps !== undefined && (obj.skipUnvettedApps = message.skipUnvettedApps);
    message.language !== undefined && (obj.language = message.language);
    message.includeExtendedAppinfo !== undefined && (obj.includeExtendedAppinfo = message.includeExtendedAppinfo);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetOwnedGamesRequest>, I>>(base?: I): CPlayerGetOwnedGamesRequest {
    return CPlayerGetOwnedGamesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetOwnedGamesRequest>, I>>(object: I): CPlayerGetOwnedGamesRequest {
    const message = createBaseCPlayerGetOwnedGamesRequest();
    message.steamid = object.steamid ?? 0;
    message.includeAppinfo = object.includeAppinfo ?? false;
    message.includePlayedFreeGames = object.includePlayedFreeGames ?? false;
    message.appidsFilter = object.appidsFilter?.map((e) => e) || [];
    message.includeFreeSub = object.includeFreeSub ?? false;
    message.skipUnvettedApps = object.skipUnvettedApps ?? false;
    message.language = object.language ?? "";
    message.includeExtendedAppinfo = object.includeExtendedAppinfo ?? false;
    return message;
  },
};

function createBaseCPlayerGetOwnedGamesResponse(): CPlayerGetOwnedGamesResponse {
  return { gameCount: 0, games: [] };
}

export const CPlayerGetOwnedGamesResponse = {
  encode(message: CPlayerGetOwnedGamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gameCount !== 0) {
      writer.uint32(8).uint32(message.gameCount);
    }
    for (const v of message.games) {
      CPlayerGetOwnedGamesResponse_Game.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetOwnedGamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetOwnedGamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameCount = reader.uint32();
          break;
        case 2:
          message.games.push(CPlayerGetOwnedGamesResponse_Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetOwnedGamesResponse {
    return {
      gameCount: isSet(object.gameCount) ? Number(object.gameCount) : 0,
      games: Array.isArray(object?.games)
        ? object.games.map((e: any) => CPlayerGetOwnedGamesResponse_Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetOwnedGamesResponse): unknown {
    const obj: any = {};
    message.gameCount !== undefined && (obj.gameCount = Math.round(message.gameCount));
    if (message.games) {
      obj.games = message.games.map((e) => e ? CPlayerGetOwnedGamesResponse_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetOwnedGamesResponse>, I>>(base?: I): CPlayerGetOwnedGamesResponse {
    return CPlayerGetOwnedGamesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetOwnedGamesResponse>, I>>(object: I): CPlayerGetOwnedGamesResponse {
    const message = createBaseCPlayerGetOwnedGamesResponse();
    message.gameCount = object.gameCount ?? 0;
    message.games = object.games?.map((e) => CPlayerGetOwnedGamesResponse_Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetOwnedGamesResponse_Game(): CPlayerGetOwnedGamesResponse_Game {
  return {
    appid: 0,
    name: "",
    playtime2weeks: 0,
    playtimeForever: 0,
    imgIconUrl: "",
    hasCommunityVisibleStats: false,
    playtimeWindowsForever: 0,
    playtimeMacForever: 0,
    playtimeLinuxForever: 0,
    rtimeLastPlayed: 0,
    capsuleFilename: "",
    sortAs: "",
    hasWorkshop: false,
    hasMarket: false,
    hasDlc: false,
    hasLeaderboards: false,
    contentDescriptorids: [],
  };
}

export const CPlayerGetOwnedGamesResponse_Game = {
  encode(message: CPlayerGetOwnedGamesResponse_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).int32(message.appid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.playtime2weeks !== 0) {
      writer.uint32(24).int32(message.playtime2weeks);
    }
    if (message.playtimeForever !== 0) {
      writer.uint32(32).int32(message.playtimeForever);
    }
    if (message.imgIconUrl !== "") {
      writer.uint32(42).string(message.imgIconUrl);
    }
    if (message.hasCommunityVisibleStats === true) {
      writer.uint32(56).bool(message.hasCommunityVisibleStats);
    }
    if (message.playtimeWindowsForever !== 0) {
      writer.uint32(64).int32(message.playtimeWindowsForever);
    }
    if (message.playtimeMacForever !== 0) {
      writer.uint32(72).int32(message.playtimeMacForever);
    }
    if (message.playtimeLinuxForever !== 0) {
      writer.uint32(80).int32(message.playtimeLinuxForever);
    }
    if (message.rtimeLastPlayed !== 0) {
      writer.uint32(88).uint32(message.rtimeLastPlayed);
    }
    if (message.capsuleFilename !== "") {
      writer.uint32(98).string(message.capsuleFilename);
    }
    if (message.sortAs !== "") {
      writer.uint32(106).string(message.sortAs);
    }
    if (message.hasWorkshop === true) {
      writer.uint32(112).bool(message.hasWorkshop);
    }
    if (message.hasMarket === true) {
      writer.uint32(120).bool(message.hasMarket);
    }
    if (message.hasDlc === true) {
      writer.uint32(128).bool(message.hasDlc);
    }
    if (message.hasLeaderboards === true) {
      writer.uint32(136).bool(message.hasLeaderboards);
    }
    writer.uint32(146).fork();
    for (const v of message.contentDescriptorids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetOwnedGamesResponse_Game {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetOwnedGamesResponse_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.playtime2weeks = reader.int32();
          break;
        case 4:
          message.playtimeForever = reader.int32();
          break;
        case 5:
          message.imgIconUrl = reader.string();
          break;
        case 7:
          message.hasCommunityVisibleStats = reader.bool();
          break;
        case 8:
          message.playtimeWindowsForever = reader.int32();
          break;
        case 9:
          message.playtimeMacForever = reader.int32();
          break;
        case 10:
          message.playtimeLinuxForever = reader.int32();
          break;
        case 11:
          message.rtimeLastPlayed = reader.uint32();
          break;
        case 12:
          message.capsuleFilename = reader.string();
          break;
        case 13:
          message.sortAs = reader.string();
          break;
        case 14:
          message.hasWorkshop = reader.bool();
          break;
        case 15:
          message.hasMarket = reader.bool();
          break;
        case 16:
          message.hasDlc = reader.bool();
          break;
        case 17:
          message.hasLeaderboards = reader.bool();
          break;
        case 18:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.contentDescriptorids.push(reader.uint32());
            }
          } else {
            message.contentDescriptorids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetOwnedGamesResponse_Game {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      playtime2weeks: isSet(object.playtime2weeks) ? Number(object.playtime2weeks) : 0,
      playtimeForever: isSet(object.playtimeForever) ? Number(object.playtimeForever) : 0,
      imgIconUrl: isSet(object.imgIconUrl) ? String(object.imgIconUrl) : "",
      hasCommunityVisibleStats: isSet(object.hasCommunityVisibleStats)
        ? Boolean(object.hasCommunityVisibleStats)
        : false,
      playtimeWindowsForever: isSet(object.playtimeWindowsForever) ? Number(object.playtimeWindowsForever) : 0,
      playtimeMacForever: isSet(object.playtimeMacForever) ? Number(object.playtimeMacForever) : 0,
      playtimeLinuxForever: isSet(object.playtimeLinuxForever) ? Number(object.playtimeLinuxForever) : 0,
      rtimeLastPlayed: isSet(object.rtimeLastPlayed) ? Number(object.rtimeLastPlayed) : 0,
      capsuleFilename: isSet(object.capsuleFilename) ? String(object.capsuleFilename) : "",
      sortAs: isSet(object.sortAs) ? String(object.sortAs) : "",
      hasWorkshop: isSet(object.hasWorkshop) ? Boolean(object.hasWorkshop) : false,
      hasMarket: isSet(object.hasMarket) ? Boolean(object.hasMarket) : false,
      hasDlc: isSet(object.hasDlc) ? Boolean(object.hasDlc) : false,
      hasLeaderboards: isSet(object.hasLeaderboards) ? Boolean(object.hasLeaderboards) : false,
      contentDescriptorids: Array.isArray(object?.contentDescriptorids)
        ? object.contentDescriptorids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetOwnedGamesResponse_Game): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.name !== undefined && (obj.name = message.name);
    message.playtime2weeks !== undefined && (obj.playtime2weeks = Math.round(message.playtime2weeks));
    message.playtimeForever !== undefined && (obj.playtimeForever = Math.round(message.playtimeForever));
    message.imgIconUrl !== undefined && (obj.imgIconUrl = message.imgIconUrl);
    message.hasCommunityVisibleStats !== undefined && (obj.hasCommunityVisibleStats = message.hasCommunityVisibleStats);
    message.playtimeWindowsForever !== undefined &&
      (obj.playtimeWindowsForever = Math.round(message.playtimeWindowsForever));
    message.playtimeMacForever !== undefined && (obj.playtimeMacForever = Math.round(message.playtimeMacForever));
    message.playtimeLinuxForever !== undefined && (obj.playtimeLinuxForever = Math.round(message.playtimeLinuxForever));
    message.rtimeLastPlayed !== undefined && (obj.rtimeLastPlayed = Math.round(message.rtimeLastPlayed));
    message.capsuleFilename !== undefined && (obj.capsuleFilename = message.capsuleFilename);
    message.sortAs !== undefined && (obj.sortAs = message.sortAs);
    message.hasWorkshop !== undefined && (obj.hasWorkshop = message.hasWorkshop);
    message.hasMarket !== undefined && (obj.hasMarket = message.hasMarket);
    message.hasDlc !== undefined && (obj.hasDlc = message.hasDlc);
    message.hasLeaderboards !== undefined && (obj.hasLeaderboards = message.hasLeaderboards);
    if (message.contentDescriptorids) {
      obj.contentDescriptorids = message.contentDescriptorids.map((e) => Math.round(e));
    } else {
      obj.contentDescriptorids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetOwnedGamesResponse_Game>, I>>(
    base?: I,
  ): CPlayerGetOwnedGamesResponse_Game {
    return CPlayerGetOwnedGamesResponse_Game.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetOwnedGamesResponse_Game>, I>>(
    object: I,
  ): CPlayerGetOwnedGamesResponse_Game {
    const message = createBaseCPlayerGetOwnedGamesResponse_Game();
    message.appid = object.appid ?? 0;
    message.name = object.name ?? "";
    message.playtime2weeks = object.playtime2weeks ?? 0;
    message.playtimeForever = object.playtimeForever ?? 0;
    message.imgIconUrl = object.imgIconUrl ?? "";
    message.hasCommunityVisibleStats = object.hasCommunityVisibleStats ?? false;
    message.playtimeWindowsForever = object.playtimeWindowsForever ?? 0;
    message.playtimeMacForever = object.playtimeMacForever ?? 0;
    message.playtimeLinuxForever = object.playtimeLinuxForever ?? 0;
    message.rtimeLastPlayed = object.rtimeLastPlayed ?? 0;
    message.capsuleFilename = object.capsuleFilename ?? "";
    message.sortAs = object.sortAs ?? "";
    message.hasWorkshop = object.hasWorkshop ?? false;
    message.hasMarket = object.hasMarket ?? false;
    message.hasDlc = object.hasDlc ?? false;
    message.hasLeaderboards = object.hasLeaderboards ?? false;
    message.contentDescriptorids = object.contentDescriptorids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetPlayNextRequest(): CPlayerGetPlayNextRequest {
  return { maxAgeSeconds: 0, ignoreAppids: [] };
}

export const CPlayerGetPlayNextRequest = {
  encode(message: CPlayerGetPlayNextRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxAgeSeconds !== 0) {
      writer.uint32(8).uint32(message.maxAgeSeconds);
    }
    writer.uint32(18).fork();
    for (const v of message.ignoreAppids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPlayNextRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPlayNextRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeSeconds = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ignoreAppids.push(reader.uint32());
            }
          } else {
            message.ignoreAppids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPlayNextRequest {
    return {
      maxAgeSeconds: isSet(object.maxAgeSeconds) ? Number(object.maxAgeSeconds) : 0,
      ignoreAppids: Array.isArray(object?.ignoreAppids) ? object.ignoreAppids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPlayerGetPlayNextRequest): unknown {
    const obj: any = {};
    message.maxAgeSeconds !== undefined && (obj.maxAgeSeconds = Math.round(message.maxAgeSeconds));
    if (message.ignoreAppids) {
      obj.ignoreAppids = message.ignoreAppids.map((e) => Math.round(e));
    } else {
      obj.ignoreAppids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPlayNextRequest>, I>>(base?: I): CPlayerGetPlayNextRequest {
    return CPlayerGetPlayNextRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPlayNextRequest>, I>>(object: I): CPlayerGetPlayNextRequest {
    const message = createBaseCPlayerGetPlayNextRequest();
    message.maxAgeSeconds = object.maxAgeSeconds ?? 0;
    message.ignoreAppids = object.ignoreAppids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetPlayNextResponse(): CPlayerGetPlayNextResponse {
  return { lastUpdateTime: 0, appids: [] };
}

export const CPlayerGetPlayNextResponse = {
  encode(message: CPlayerGetPlayNextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastUpdateTime !== 0) {
      writer.uint32(8).uint32(message.lastUpdateTime);
    }
    writer.uint32(18).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPlayNextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPlayNextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdateTime = reader.uint32();
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

  fromJSON(object: any): CPlayerGetPlayNextResponse {
    return {
      lastUpdateTime: isSet(object.lastUpdateTime) ? Number(object.lastUpdateTime) : 0,
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPlayerGetPlayNextResponse): unknown {
    const obj: any = {};
    message.lastUpdateTime !== undefined && (obj.lastUpdateTime = Math.round(message.lastUpdateTime));
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPlayNextResponse>, I>>(base?: I): CPlayerGetPlayNextResponse {
    return CPlayerGetPlayNextResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPlayNextResponse>, I>>(object: I): CPlayerGetPlayNextResponse {
    const message = createBaseCPlayerGetPlayNextResponse();
    message.lastUpdateTime = object.lastUpdateTime ?? 0;
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoRequest(): CPlayerGetFriendsGameplayInfoRequest {
  return { appid: 0 };
}

export const CPlayerGetFriendsGameplayInfoRequest = {
  encode(message: CPlayerGetFriendsGameplayInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoRequest();
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

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoRequest>, I>>(
    base?: I,
  ): CPlayerGetFriendsGameplayInfoRequest {
    return CPlayerGetFriendsGameplayInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoRequest>, I>>(
    object: I,
  ): CPlayerGetFriendsGameplayInfoRequest {
    const message = createBaseCPlayerGetFriendsGameplayInfoRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse(): CPlayerGetFriendsGameplayInfoResponse {
  return { yourInfo: undefined, inGame: [], playedRecently: [], playedEver: [], owns: [], inWishlist: [] };
}

export const CPlayerGetFriendsGameplayInfoResponse = {
  encode(message: CPlayerGetFriendsGameplayInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.yourInfo !== undefined) {
      CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.encode(message.yourInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inGame) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.playedRecently) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.playedEver) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.owns) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.inWishlist) {
      CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yourInfo = CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.inGame.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.playedRecently.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.playedEver.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.owns.push(CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()));
          break;
        case 6:
          message.inWishlist.push(
            CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse {
    return {
      yourInfo: isSet(object.yourInfo)
        ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromJSON(object.yourInfo)
        : undefined,
      inGame: Array.isArray(object?.inGame)
        ? object.inGame.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      playedRecently: Array.isArray(object?.playedRecently)
        ? object.playedRecently.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      playedEver: Array.isArray(object?.playedEver)
        ? object.playedEver.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      owns: Array.isArray(object?.owns)
        ? object.owns.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
      inWishlist: Array.isArray(object?.inWishlist)
        ? object.inWishlist.map((e: any) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse): unknown {
    const obj: any = {};
    message.yourInfo !== undefined && (obj.yourInfo = message.yourInfo
      ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.toJSON(message.yourInfo)
      : undefined);
    if (message.inGame) {
      obj.inGame = message.inGame.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.inGame = [];
    }
    if (message.playedRecently) {
      obj.playedRecently = message.playedRecently.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.playedRecently = [];
    }
    if (message.playedEver) {
      obj.playedEver = message.playedEver.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.playedEver = [];
    }
    if (message.owns) {
      obj.owns = message.owns.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.owns = [];
    }
    if (message.inWishlist) {
      obj.inWishlist = message.inWishlist.map((e) =>
        e ? CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.toJSON(e) : undefined
      );
    } else {
      obj.inWishlist = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse>, I>>(
    base?: I,
  ): CPlayerGetFriendsGameplayInfoResponse {
    return CPlayerGetFriendsGameplayInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse>, I>>(
    object: I,
  ): CPlayerGetFriendsGameplayInfoResponse {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse();
    message.yourInfo = (object.yourInfo !== undefined && object.yourInfo !== null)
      ? CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromPartial(object.yourInfo)
      : undefined;
    message.inGame =
      object.inGame?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.playedRecently =
      object.playedRecently?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.playedEver =
      object.playedEver?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    message.owns = object.owns?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) ||
      [];
    message.inWishlist =
      object.inWishlist?.map((e) => CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo(): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
  return { steamid: 0, minutesPlayed: 0, minutesPlayedForever: 0 };
}

export const CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo = {
  encode(
    message: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.minutesPlayed !== 0) {
      writer.uint32(16).uint32(message.minutesPlayed);
    }
    if (message.minutesPlayedForever !== 0) {
      writer.uint32(24).uint32(message.minutesPlayedForever);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.minutesPlayed = reader.uint32();
          break;
        case 3:
          message.minutesPlayedForever = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      minutesPlayed: isSet(object.minutesPlayed) ? Number(object.minutesPlayed) : 0,
      minutesPlayedForever: isSet(object.minutesPlayedForever) ? Number(object.minutesPlayedForever) : 0,
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.minutesPlayed !== undefined && (obj.minutesPlayed = Math.round(message.minutesPlayed));
    message.minutesPlayedForever !== undefined && (obj.minutesPlayedForever = Math.round(message.minutesPlayedForever));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo>, I>>(
    base?: I,
  ): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    return CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo>, I>>(
    object: I,
  ): CPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_FriendsGameplayInfo();
    message.steamid = object.steamid ?? 0;
    message.minutesPlayed = object.minutesPlayed ?? 0;
    message.minutesPlayedForever = object.minutesPlayedForever ?? 0;
    return message;
  },
};

function createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo(): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
  return { steamid: 0, minutesPlayed: 0, minutesPlayedForever: 0, inWishlist: false, owned: false };
}

export const CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo = {
  encode(
    message: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.minutesPlayed !== 0) {
      writer.uint32(16).uint32(message.minutesPlayed);
    }
    if (message.minutesPlayedForever !== 0) {
      writer.uint32(24).uint32(message.minutesPlayedForever);
    }
    if (message.inWishlist === true) {
      writer.uint32(32).bool(message.inWishlist);
    }
    if (message.owned === true) {
      writer.uint32(40).bool(message.owned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.minutesPlayed = reader.uint32();
          break;
        case 3:
          message.minutesPlayedForever = reader.uint32();
          break;
        case 4:
          message.inWishlist = reader.bool();
          break;
        case 5:
          message.owned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      minutesPlayed: isSet(object.minutesPlayed) ? Number(object.minutesPlayed) : 0,
      minutesPlayedForever: isSet(object.minutesPlayedForever) ? Number(object.minutesPlayedForever) : 0,
      inWishlist: isSet(object.inWishlist) ? Boolean(object.inWishlist) : false,
      owned: isSet(object.owned) ? Boolean(object.owned) : false,
    };
  },

  toJSON(message: CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.minutesPlayed !== undefined && (obj.minutesPlayed = Math.round(message.minutesPlayed));
    message.minutesPlayedForever !== undefined && (obj.minutesPlayedForever = Math.round(message.minutesPlayedForever));
    message.inWishlist !== undefined && (obj.inWishlist = message.inWishlist);
    message.owned !== undefined && (obj.owned = message.owned);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo>, I>>(
    base?: I,
  ): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    return CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo>, I>>(
    object: I,
  ): CPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo {
    const message = createBaseCPlayerGetFriendsGameplayInfoResponse_OwnGameplayInfo();
    message.steamid = object.steamid ?? 0;
    message.minutesPlayed = object.minutesPlayed ?? 0;
    message.minutesPlayedForever = object.minutesPlayedForever ?? 0;
    message.inWishlist = object.inWishlist ?? false;
    message.owned = object.owned ?? false;
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsRequest(): CPlayerGetGameBadgeLevelsRequest {
  return { appid: 0 };
}

export const CPlayerGetGameBadgeLevelsRequest = {
  encode(message: CPlayerGetGameBadgeLevelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsRequest();
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

  fromJSON(object: any): CPlayerGetGameBadgeLevelsRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsRequest>, I>>(
    base?: I,
  ): CPlayerGetGameBadgeLevelsRequest {
    return CPlayerGetGameBadgeLevelsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsRequest>, I>>(
    object: I,
  ): CPlayerGetGameBadgeLevelsRequest {
    const message = createBaseCPlayerGetGameBadgeLevelsRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsResponse(): CPlayerGetGameBadgeLevelsResponse {
  return { playerLevel: 0, badges: [] };
}

export const CPlayerGetGameBadgeLevelsResponse = {
  encode(message: CPlayerGetGameBadgeLevelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playerLevel !== 0) {
      writer.uint32(8).uint32(message.playerLevel);
    }
    for (const v of message.badges) {
      CPlayerGetGameBadgeLevelsResponse_Badge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerLevel = reader.uint32();
          break;
        case 2:
          message.badges.push(CPlayerGetGameBadgeLevelsResponse_Badge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameBadgeLevelsResponse {
    return {
      playerLevel: isSet(object.playerLevel) ? Number(object.playerLevel) : 0,
      badges: Array.isArray(object?.badges)
        ? object.badges.map((e: any) => CPlayerGetGameBadgeLevelsResponse_Badge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsResponse): unknown {
    const obj: any = {};
    message.playerLevel !== undefined && (obj.playerLevel = Math.round(message.playerLevel));
    if (message.badges) {
      obj.badges = message.badges.map((e) => e ? CPlayerGetGameBadgeLevelsResponse_Badge.toJSON(e) : undefined);
    } else {
      obj.badges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsResponse>, I>>(
    base?: I,
  ): CPlayerGetGameBadgeLevelsResponse {
    return CPlayerGetGameBadgeLevelsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsResponse>, I>>(
    object: I,
  ): CPlayerGetGameBadgeLevelsResponse {
    const message = createBaseCPlayerGetGameBadgeLevelsResponse();
    message.playerLevel = object.playerLevel ?? 0;
    message.badges = object.badges?.map((e) => CPlayerGetGameBadgeLevelsResponse_Badge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetGameBadgeLevelsResponse_Badge(): CPlayerGetGameBadgeLevelsResponse_Badge {
  return { level: 0, series: 0, borderColor: 0 };
}

export const CPlayerGetGameBadgeLevelsResponse_Badge = {
  encode(message: CPlayerGetGameBadgeLevelsResponse_Badge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (message.series !== 0) {
      writer.uint32(16).int32(message.series);
    }
    if (message.borderColor !== 0) {
      writer.uint32(24).uint32(message.borderColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameBadgeLevelsResponse_Badge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameBadgeLevelsResponse_Badge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32();
          break;
        case 2:
          message.series = reader.int32();
          break;
        case 3:
          message.borderColor = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameBadgeLevelsResponse_Badge {
    return {
      level: isSet(object.level) ? Number(object.level) : 0,
      series: isSet(object.series) ? Number(object.series) : 0,
      borderColor: isSet(object.borderColor) ? Number(object.borderColor) : 0,
    };
  },

  toJSON(message: CPlayerGetGameBadgeLevelsResponse_Badge): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.series !== undefined && (obj.series = Math.round(message.series));
    message.borderColor !== undefined && (obj.borderColor = Math.round(message.borderColor));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsResponse_Badge>, I>>(
    base?: I,
  ): CPlayerGetGameBadgeLevelsResponse_Badge {
    return CPlayerGetGameBadgeLevelsResponse_Badge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameBadgeLevelsResponse_Badge>, I>>(
    object: I,
  ): CPlayerGetGameBadgeLevelsResponse_Badge {
    const message = createBaseCPlayerGetGameBadgeLevelsResponse_Badge();
    message.level = object.level ?? 0;
    message.series = object.series ?? 0;
    message.borderColor = object.borderColor ?? 0;
    return message;
  },
};

function createBaseCPlayerGetProfileBackgroundRequest(): CPlayerGetProfileBackgroundRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetProfileBackgroundRequest = {
  encode(message: CPlayerGetProfileBackgroundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileBackgroundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileBackgroundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileBackgroundRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetProfileBackgroundRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileBackgroundRequest>, I>>(
    base?: I,
  ): CPlayerGetProfileBackgroundRequest {
    return CPlayerGetProfileBackgroundRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileBackgroundRequest>, I>>(
    object: I,
  ): CPlayerGetProfileBackgroundRequest {
    const message = createBaseCPlayerGetProfileBackgroundRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseProfileItem(): ProfileItem {
  return {
    communityitemid: 0,
    imageSmall: "",
    imageLarge: "",
    name: "",
    itemTitle: "",
    itemDescription: "",
    appid: 0,
    itemType: 0,
    itemClass: 0,
    movieWebm: "",
    movieMp4: "",
    movieWebmSmall: "",
    movieMp4Small: "",
    equippedFlags: 0,
    profileColors: [],
  };
}

export const ProfileItem = {
  encode(message: ProfileItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    if (message.imageSmall !== "") {
      writer.uint32(18).string(message.imageSmall);
    }
    if (message.imageLarge !== "") {
      writer.uint32(26).string(message.imageLarge);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.itemTitle !== "") {
      writer.uint32(42).string(message.itemTitle);
    }
    if (message.itemDescription !== "") {
      writer.uint32(50).string(message.itemDescription);
    }
    if (message.appid !== 0) {
      writer.uint32(56).uint32(message.appid);
    }
    if (message.itemType !== 0) {
      writer.uint32(64).uint32(message.itemType);
    }
    if (message.itemClass !== 0) {
      writer.uint32(72).uint32(message.itemClass);
    }
    if (message.movieWebm !== "") {
      writer.uint32(82).string(message.movieWebm);
    }
    if (message.movieMp4 !== "") {
      writer.uint32(90).string(message.movieMp4);
    }
    if (message.movieWebmSmall !== "") {
      writer.uint32(106).string(message.movieWebmSmall);
    }
    if (message.movieMp4Small !== "") {
      writer.uint32(114).string(message.movieMp4Small);
    }
    if (message.equippedFlags !== 0) {
      writer.uint32(96).uint32(message.equippedFlags);
    }
    for (const v of message.profileColors) {
      ProfileItem_ProfileColor.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.imageSmall = reader.string();
          break;
        case 3:
          message.imageLarge = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.itemTitle = reader.string();
          break;
        case 6:
          message.itemDescription = reader.string();
          break;
        case 7:
          message.appid = reader.uint32();
          break;
        case 8:
          message.itemType = reader.uint32();
          break;
        case 9:
          message.itemClass = reader.uint32();
          break;
        case 10:
          message.movieWebm = reader.string();
          break;
        case 11:
          message.movieMp4 = reader.string();
          break;
        case 13:
          message.movieWebmSmall = reader.string();
          break;
        case 14:
          message.movieMp4Small = reader.string();
          break;
        case 12:
          message.equippedFlags = reader.uint32();
          break;
        case 15:
          message.profileColors.push(ProfileItem_ProfileColor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileItem {
    return {
      communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0,
      imageSmall: isSet(object.imageSmall) ? String(object.imageSmall) : "",
      imageLarge: isSet(object.imageLarge) ? String(object.imageLarge) : "",
      name: isSet(object.name) ? String(object.name) : "",
      itemTitle: isSet(object.itemTitle) ? String(object.itemTitle) : "",
      itemDescription: isSet(object.itemDescription) ? String(object.itemDescription) : "",
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      itemType: isSet(object.itemType) ? Number(object.itemType) : 0,
      itemClass: isSet(object.itemClass) ? Number(object.itemClass) : 0,
      movieWebm: isSet(object.movieWebm) ? String(object.movieWebm) : "",
      movieMp4: isSet(object.movieMp4) ? String(object.movieMp4) : "",
      movieWebmSmall: isSet(object.movieWebmSmall) ? String(object.movieWebmSmall) : "",
      movieMp4Small: isSet(object.movieMp4Small) ? String(object.movieMp4Small) : "",
      equippedFlags: isSet(object.equippedFlags) ? Number(object.equippedFlags) : 0,
      profileColors: Array.isArray(object?.profileColors)
        ? object.profileColors.map((e: any) => ProfileItem_ProfileColor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProfileItem): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    message.imageSmall !== undefined && (obj.imageSmall = message.imageSmall);
    message.imageLarge !== undefined && (obj.imageLarge = message.imageLarge);
    message.name !== undefined && (obj.name = message.name);
    message.itemTitle !== undefined && (obj.itemTitle = message.itemTitle);
    message.itemDescription !== undefined && (obj.itemDescription = message.itemDescription);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.itemType !== undefined && (obj.itemType = Math.round(message.itemType));
    message.itemClass !== undefined && (obj.itemClass = Math.round(message.itemClass));
    message.movieWebm !== undefined && (obj.movieWebm = message.movieWebm);
    message.movieMp4 !== undefined && (obj.movieMp4 = message.movieMp4);
    message.movieWebmSmall !== undefined && (obj.movieWebmSmall = message.movieWebmSmall);
    message.movieMp4Small !== undefined && (obj.movieMp4Small = message.movieMp4Small);
    message.equippedFlags !== undefined && (obj.equippedFlags = Math.round(message.equippedFlags));
    if (message.profileColors) {
      obj.profileColors = message.profileColors.map((e) => e ? ProfileItem_ProfileColor.toJSON(e) : undefined);
    } else {
      obj.profileColors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileItem>, I>>(base?: I): ProfileItem {
    return ProfileItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfileItem>, I>>(object: I): ProfileItem {
    const message = createBaseProfileItem();
    message.communityitemid = object.communityitemid ?? 0;
    message.imageSmall = object.imageSmall ?? "";
    message.imageLarge = object.imageLarge ?? "";
    message.name = object.name ?? "";
    message.itemTitle = object.itemTitle ?? "";
    message.itemDescription = object.itemDescription ?? "";
    message.appid = object.appid ?? 0;
    message.itemType = object.itemType ?? 0;
    message.itemClass = object.itemClass ?? 0;
    message.movieWebm = object.movieWebm ?? "";
    message.movieMp4 = object.movieMp4 ?? "";
    message.movieWebmSmall = object.movieWebmSmall ?? "";
    message.movieMp4Small = object.movieMp4Small ?? "";
    message.equippedFlags = object.equippedFlags ?? 0;
    message.profileColors = object.profileColors?.map((e) => ProfileItem_ProfileColor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProfileItem_ProfileColor(): ProfileItem_ProfileColor {
  return { styleName: "", color: "" };
}

export const ProfileItem_ProfileColor = {
  encode(message: ProfileItem_ProfileColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.styleName !== "") {
      writer.uint32(10).string(message.styleName);
    }
    if (message.color !== "") {
      writer.uint32(18).string(message.color);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileItem_ProfileColor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileItem_ProfileColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.styleName = reader.string();
          break;
        case 2:
          message.color = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileItem_ProfileColor {
    return {
      styleName: isSet(object.styleName) ? String(object.styleName) : "",
      color: isSet(object.color) ? String(object.color) : "",
    };
  },

  toJSON(message: ProfileItem_ProfileColor): unknown {
    const obj: any = {};
    message.styleName !== undefined && (obj.styleName = message.styleName);
    message.color !== undefined && (obj.color = message.color);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileItem_ProfileColor>, I>>(base?: I): ProfileItem_ProfileColor {
    return ProfileItem_ProfileColor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfileItem_ProfileColor>, I>>(object: I): ProfileItem_ProfileColor {
    const message = createBaseProfileItem_ProfileColor();
    message.styleName = object.styleName ?? "";
    message.color = object.color ?? "";
    return message;
  },
};

function createBaseCPlayerGetProfileBackgroundResponse(): CPlayerGetProfileBackgroundResponse {
  return { profileBackground: undefined };
}

export const CPlayerGetProfileBackgroundResponse = {
  encode(message: CPlayerGetProfileBackgroundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileBackground !== undefined) {
      ProfileItem.encode(message.profileBackground, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileBackgroundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileBackgroundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileBackground = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileBackgroundResponse {
    return {
      profileBackground: isSet(object.profileBackground) ? ProfileItem.fromJSON(object.profileBackground) : undefined,
    };
  },

  toJSON(message: CPlayerGetProfileBackgroundResponse): unknown {
    const obj: any = {};
    message.profileBackground !== undefined &&
      (obj.profileBackground = message.profileBackground ? ProfileItem.toJSON(message.profileBackground) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileBackgroundResponse>, I>>(
    base?: I,
  ): CPlayerGetProfileBackgroundResponse {
    return CPlayerGetProfileBackgroundResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileBackgroundResponse>, I>>(
    object: I,
  ): CPlayerGetProfileBackgroundResponse {
    const message = createBaseCPlayerGetProfileBackgroundResponse();
    message.profileBackground = (object.profileBackground !== undefined && object.profileBackground !== null)
      ? ProfileItem.fromPartial(object.profileBackground)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetProfileBackgroundRequest(): CPlayerSetProfileBackgroundRequest {
  return { communityitemid: 0 };
}

export const CPlayerSetProfileBackgroundRequest = {
  encode(message: CPlayerSetProfileBackgroundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfileBackgroundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfileBackgroundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetProfileBackgroundRequest {
    return { communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0 };
  },

  toJSON(message: CPlayerSetProfileBackgroundRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfileBackgroundRequest>, I>>(
    base?: I,
  ): CPlayerSetProfileBackgroundRequest {
    return CPlayerSetProfileBackgroundRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfileBackgroundRequest>, I>>(
    object: I,
  ): CPlayerSetProfileBackgroundRequest {
    const message = createBaseCPlayerSetProfileBackgroundRequest();
    message.communityitemid = object.communityitemid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetProfileBackgroundResponse(): CPlayerSetProfileBackgroundResponse {
  return {};
}

export const CPlayerSetProfileBackgroundResponse = {
  encode(_: CPlayerSetProfileBackgroundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfileBackgroundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfileBackgroundResponse();
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

  fromJSON(_: any): CPlayerSetProfileBackgroundResponse {
    return {};
  },

  toJSON(_: CPlayerSetProfileBackgroundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfileBackgroundResponse>, I>>(
    base?: I,
  ): CPlayerSetProfileBackgroundResponse {
    return CPlayerSetProfileBackgroundResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfileBackgroundResponse>, I>>(
    _: I,
  ): CPlayerSetProfileBackgroundResponse {
    const message = createBaseCPlayerSetProfileBackgroundResponse();
    return message;
  },
};

function createBaseCPlayerGetMiniProfileBackgroundRequest(): CPlayerGetMiniProfileBackgroundRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetMiniProfileBackgroundRequest = {
  encode(message: CPlayerGetMiniProfileBackgroundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMiniProfileBackgroundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMiniProfileBackgroundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetMiniProfileBackgroundRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetMiniProfileBackgroundRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetMiniProfileBackgroundRequest>, I>>(
    base?: I,
  ): CPlayerGetMiniProfileBackgroundRequest {
    return CPlayerGetMiniProfileBackgroundRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetMiniProfileBackgroundRequest>, I>>(
    object: I,
  ): CPlayerGetMiniProfileBackgroundRequest {
    const message = createBaseCPlayerGetMiniProfileBackgroundRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetMiniProfileBackgroundResponse(): CPlayerGetMiniProfileBackgroundResponse {
  return { profileBackground: undefined };
}

export const CPlayerGetMiniProfileBackgroundResponse = {
  encode(message: CPlayerGetMiniProfileBackgroundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileBackground !== undefined) {
      ProfileItem.encode(message.profileBackground, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetMiniProfileBackgroundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetMiniProfileBackgroundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileBackground = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetMiniProfileBackgroundResponse {
    return {
      profileBackground: isSet(object.profileBackground) ? ProfileItem.fromJSON(object.profileBackground) : undefined,
    };
  },

  toJSON(message: CPlayerGetMiniProfileBackgroundResponse): unknown {
    const obj: any = {};
    message.profileBackground !== undefined &&
      (obj.profileBackground = message.profileBackground ? ProfileItem.toJSON(message.profileBackground) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetMiniProfileBackgroundResponse>, I>>(
    base?: I,
  ): CPlayerGetMiniProfileBackgroundResponse {
    return CPlayerGetMiniProfileBackgroundResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetMiniProfileBackgroundResponse>, I>>(
    object: I,
  ): CPlayerGetMiniProfileBackgroundResponse {
    const message = createBaseCPlayerGetMiniProfileBackgroundResponse();
    message.profileBackground = (object.profileBackground !== undefined && object.profileBackground !== null)
      ? ProfileItem.fromPartial(object.profileBackground)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetMiniProfileBackgroundRequest(): CPlayerSetMiniProfileBackgroundRequest {
  return { communityitemid: 0 };
}

export const CPlayerSetMiniProfileBackgroundRequest = {
  encode(message: CPlayerSetMiniProfileBackgroundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetMiniProfileBackgroundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetMiniProfileBackgroundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetMiniProfileBackgroundRequest {
    return { communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0 };
  },

  toJSON(message: CPlayerSetMiniProfileBackgroundRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetMiniProfileBackgroundRequest>, I>>(
    base?: I,
  ): CPlayerSetMiniProfileBackgroundRequest {
    return CPlayerSetMiniProfileBackgroundRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetMiniProfileBackgroundRequest>, I>>(
    object: I,
  ): CPlayerSetMiniProfileBackgroundRequest {
    const message = createBaseCPlayerSetMiniProfileBackgroundRequest();
    message.communityitemid = object.communityitemid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetMiniProfileBackgroundResponse(): CPlayerSetMiniProfileBackgroundResponse {
  return {};
}

export const CPlayerSetMiniProfileBackgroundResponse = {
  encode(_: CPlayerSetMiniProfileBackgroundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetMiniProfileBackgroundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetMiniProfileBackgroundResponse();
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

  fromJSON(_: any): CPlayerSetMiniProfileBackgroundResponse {
    return {};
  },

  toJSON(_: CPlayerSetMiniProfileBackgroundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetMiniProfileBackgroundResponse>, I>>(
    base?: I,
  ): CPlayerSetMiniProfileBackgroundResponse {
    return CPlayerSetMiniProfileBackgroundResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetMiniProfileBackgroundResponse>, I>>(
    _: I,
  ): CPlayerSetMiniProfileBackgroundResponse {
    const message = createBaseCPlayerSetMiniProfileBackgroundResponse();
    return message;
  },
};

function createBaseCPlayerGetAvatarFrameRequest(): CPlayerGetAvatarFrameRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetAvatarFrameRequest = {
  encode(message: CPlayerGetAvatarFrameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAvatarFrameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAvatarFrameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAvatarFrameRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetAvatarFrameRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAvatarFrameRequest>, I>>(base?: I): CPlayerGetAvatarFrameRequest {
    return CPlayerGetAvatarFrameRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAvatarFrameRequest>, I>>(object: I): CPlayerGetAvatarFrameRequest {
    const message = createBaseCPlayerGetAvatarFrameRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetAvatarFrameResponse(): CPlayerGetAvatarFrameResponse {
  return { avatarFrame: undefined };
}

export const CPlayerGetAvatarFrameResponse = {
  encode(message: CPlayerGetAvatarFrameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatarFrame !== undefined) {
      ProfileItem.encode(message.avatarFrame, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAvatarFrameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAvatarFrameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.avatarFrame = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAvatarFrameResponse {
    return { avatarFrame: isSet(object.avatarFrame) ? ProfileItem.fromJSON(object.avatarFrame) : undefined };
  },

  toJSON(message: CPlayerGetAvatarFrameResponse): unknown {
    const obj: any = {};
    message.avatarFrame !== undefined &&
      (obj.avatarFrame = message.avatarFrame ? ProfileItem.toJSON(message.avatarFrame) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAvatarFrameResponse>, I>>(base?: I): CPlayerGetAvatarFrameResponse {
    return CPlayerGetAvatarFrameResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAvatarFrameResponse>, I>>(
    object: I,
  ): CPlayerGetAvatarFrameResponse {
    const message = createBaseCPlayerGetAvatarFrameResponse();
    message.avatarFrame = (object.avatarFrame !== undefined && object.avatarFrame !== null)
      ? ProfileItem.fromPartial(object.avatarFrame)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetAvatarFrameRequest(): CPlayerSetAvatarFrameRequest {
  return { communityitemid: 0 };
}

export const CPlayerSetAvatarFrameRequest = {
  encode(message: CPlayerSetAvatarFrameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetAvatarFrameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetAvatarFrameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetAvatarFrameRequest {
    return { communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0 };
  },

  toJSON(message: CPlayerSetAvatarFrameRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetAvatarFrameRequest>, I>>(base?: I): CPlayerSetAvatarFrameRequest {
    return CPlayerSetAvatarFrameRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetAvatarFrameRequest>, I>>(object: I): CPlayerSetAvatarFrameRequest {
    const message = createBaseCPlayerSetAvatarFrameRequest();
    message.communityitemid = object.communityitemid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetAvatarFrameResponse(): CPlayerSetAvatarFrameResponse {
  return {};
}

export const CPlayerSetAvatarFrameResponse = {
  encode(_: CPlayerSetAvatarFrameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetAvatarFrameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetAvatarFrameResponse();
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

  fromJSON(_: any): CPlayerSetAvatarFrameResponse {
    return {};
  },

  toJSON(_: CPlayerSetAvatarFrameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetAvatarFrameResponse>, I>>(base?: I): CPlayerSetAvatarFrameResponse {
    return CPlayerSetAvatarFrameResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetAvatarFrameResponse>, I>>(_: I): CPlayerSetAvatarFrameResponse {
    const message = createBaseCPlayerSetAvatarFrameResponse();
    return message;
  },
};

function createBaseCPlayerGetAnimatedAvatarRequest(): CPlayerGetAnimatedAvatarRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetAnimatedAvatarRequest = {
  encode(message: CPlayerGetAnimatedAvatarRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAnimatedAvatarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAnimatedAvatarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAnimatedAvatarRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetAnimatedAvatarRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAnimatedAvatarRequest>, I>>(base?: I): CPlayerGetAnimatedAvatarRequest {
    return CPlayerGetAnimatedAvatarRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAnimatedAvatarRequest>, I>>(
    object: I,
  ): CPlayerGetAnimatedAvatarRequest {
    const message = createBaseCPlayerGetAnimatedAvatarRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetAnimatedAvatarResponse(): CPlayerGetAnimatedAvatarResponse {
  return { avatar: undefined };
}

export const CPlayerGetAnimatedAvatarResponse = {
  encode(message: CPlayerGetAnimatedAvatarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.avatar !== undefined) {
      ProfileItem.encode(message.avatar, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAnimatedAvatarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAnimatedAvatarResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.avatar = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAnimatedAvatarResponse {
    return { avatar: isSet(object.avatar) ? ProfileItem.fromJSON(object.avatar) : undefined };
  },

  toJSON(message: CPlayerGetAnimatedAvatarResponse): unknown {
    const obj: any = {};
    message.avatar !== undefined && (obj.avatar = message.avatar ? ProfileItem.toJSON(message.avatar) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAnimatedAvatarResponse>, I>>(
    base?: I,
  ): CPlayerGetAnimatedAvatarResponse {
    return CPlayerGetAnimatedAvatarResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAnimatedAvatarResponse>, I>>(
    object: I,
  ): CPlayerGetAnimatedAvatarResponse {
    const message = createBaseCPlayerGetAnimatedAvatarResponse();
    message.avatar = (object.avatar !== undefined && object.avatar !== null)
      ? ProfileItem.fromPartial(object.avatar)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetAnimatedAvatarRequest(): CPlayerSetAnimatedAvatarRequest {
  return { communityitemid: 0 };
}

export const CPlayerSetAnimatedAvatarRequest = {
  encode(message: CPlayerSetAnimatedAvatarRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetAnimatedAvatarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetAnimatedAvatarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetAnimatedAvatarRequest {
    return { communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0 };
  },

  toJSON(message: CPlayerSetAnimatedAvatarRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetAnimatedAvatarRequest>, I>>(base?: I): CPlayerSetAnimatedAvatarRequest {
    return CPlayerSetAnimatedAvatarRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetAnimatedAvatarRequest>, I>>(
    object: I,
  ): CPlayerSetAnimatedAvatarRequest {
    const message = createBaseCPlayerSetAnimatedAvatarRequest();
    message.communityitemid = object.communityitemid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetAnimatedAvatarResponse(): CPlayerSetAnimatedAvatarResponse {
  return {};
}

export const CPlayerSetAnimatedAvatarResponse = {
  encode(_: CPlayerSetAnimatedAvatarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetAnimatedAvatarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetAnimatedAvatarResponse();
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

  fromJSON(_: any): CPlayerSetAnimatedAvatarResponse {
    return {};
  },

  toJSON(_: CPlayerSetAnimatedAvatarResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetAnimatedAvatarResponse>, I>>(
    base?: I,
  ): CPlayerSetAnimatedAvatarResponse {
    return CPlayerSetAnimatedAvatarResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetAnimatedAvatarResponse>, I>>(
    _: I,
  ): CPlayerSetAnimatedAvatarResponse {
    const message = createBaseCPlayerSetAnimatedAvatarResponse();
    return message;
  },
};

function createBaseCPlayerGetSteamDeckKeyboardSkinRequest(): CPlayerGetSteamDeckKeyboardSkinRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetSteamDeckKeyboardSkinRequest = {
  encode(message: CPlayerGetSteamDeckKeyboardSkinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetSteamDeckKeyboardSkinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetSteamDeckKeyboardSkinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetSteamDeckKeyboardSkinRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetSteamDeckKeyboardSkinRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetSteamDeckKeyboardSkinRequest>, I>>(
    base?: I,
  ): CPlayerGetSteamDeckKeyboardSkinRequest {
    return CPlayerGetSteamDeckKeyboardSkinRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetSteamDeckKeyboardSkinRequest>, I>>(
    object: I,
  ): CPlayerGetSteamDeckKeyboardSkinRequest {
    const message = createBaseCPlayerGetSteamDeckKeyboardSkinRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetSteamDeckKeyboardSkinResponse(): CPlayerGetSteamDeckKeyboardSkinResponse {
  return { steamDeckKeyboardSkin: undefined };
}

export const CPlayerGetSteamDeckKeyboardSkinResponse = {
  encode(message: CPlayerGetSteamDeckKeyboardSkinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamDeckKeyboardSkin !== undefined) {
      ProfileItem.encode(message.steamDeckKeyboardSkin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetSteamDeckKeyboardSkinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetSteamDeckKeyboardSkinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamDeckKeyboardSkin = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetSteamDeckKeyboardSkinResponse {
    return {
      steamDeckKeyboardSkin: isSet(object.steamDeckKeyboardSkin)
        ? ProfileItem.fromJSON(object.steamDeckKeyboardSkin)
        : undefined,
    };
  },

  toJSON(message: CPlayerGetSteamDeckKeyboardSkinResponse): unknown {
    const obj: any = {};
    message.steamDeckKeyboardSkin !== undefined && (obj.steamDeckKeyboardSkin = message.steamDeckKeyboardSkin
      ? ProfileItem.toJSON(message.steamDeckKeyboardSkin)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetSteamDeckKeyboardSkinResponse>, I>>(
    base?: I,
  ): CPlayerGetSteamDeckKeyboardSkinResponse {
    return CPlayerGetSteamDeckKeyboardSkinResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetSteamDeckKeyboardSkinResponse>, I>>(
    object: I,
  ): CPlayerGetSteamDeckKeyboardSkinResponse {
    const message = createBaseCPlayerGetSteamDeckKeyboardSkinResponse();
    message.steamDeckKeyboardSkin =
      (object.steamDeckKeyboardSkin !== undefined && object.steamDeckKeyboardSkin !== null)
        ? ProfileItem.fromPartial(object.steamDeckKeyboardSkin)
        : undefined;
    return message;
  },
};

function createBaseCPlayerSetSteamDeckKeyboardSkinRequest(): CPlayerSetSteamDeckKeyboardSkinRequest {
  return { communityitemid: 0 };
}

export const CPlayerSetSteamDeckKeyboardSkinRequest = {
  encode(message: CPlayerSetSteamDeckKeyboardSkinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetSteamDeckKeyboardSkinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetSteamDeckKeyboardSkinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetSteamDeckKeyboardSkinRequest {
    return { communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0 };
  },

  toJSON(message: CPlayerSetSteamDeckKeyboardSkinRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetSteamDeckKeyboardSkinRequest>, I>>(
    base?: I,
  ): CPlayerSetSteamDeckKeyboardSkinRequest {
    return CPlayerSetSteamDeckKeyboardSkinRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetSteamDeckKeyboardSkinRequest>, I>>(
    object: I,
  ): CPlayerSetSteamDeckKeyboardSkinRequest {
    const message = createBaseCPlayerSetSteamDeckKeyboardSkinRequest();
    message.communityitemid = object.communityitemid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetSteamDeckKeyboardSkinResponse(): CPlayerSetSteamDeckKeyboardSkinResponse {
  return {};
}

export const CPlayerSetSteamDeckKeyboardSkinResponse = {
  encode(_: CPlayerSetSteamDeckKeyboardSkinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetSteamDeckKeyboardSkinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetSteamDeckKeyboardSkinResponse();
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

  fromJSON(_: any): CPlayerSetSteamDeckKeyboardSkinResponse {
    return {};
  },

  toJSON(_: CPlayerSetSteamDeckKeyboardSkinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetSteamDeckKeyboardSkinResponse>, I>>(
    base?: I,
  ): CPlayerSetSteamDeckKeyboardSkinResponse {
    return CPlayerSetSteamDeckKeyboardSkinResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetSteamDeckKeyboardSkinResponse>, I>>(
    _: I,
  ): CPlayerSetSteamDeckKeyboardSkinResponse {
    const message = createBaseCPlayerSetSteamDeckKeyboardSkinResponse();
    return message;
  },
};

function createBaseCPlayerGetProfileItemsOwnedRequest(): CPlayerGetProfileItemsOwnedRequest {
  return { language: "", filters: [] };
}

export const CPlayerGetProfileItemsOwnedRequest = {
  encode(message: CPlayerGetProfileItemsOwnedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== "") {
      writer.uint32(10).string(message.language);
    }
    writer.uint32(18).fork();
    for (const v of message.filters) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileItemsOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileItemsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.filters.push(reader.int32() as any);
            }
          } else {
            message.filters.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileItemsOwnedRequest {
    return {
      language: isSet(object.language) ? String(object.language) : "",
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => eCommunityItemClassFromJSON(e)) : [],
    };
  },

  toJSON(message: CPlayerGetProfileItemsOwnedRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = message.language);
    if (message.filters) {
      obj.filters = message.filters.map((e) => eCommunityItemClassToJSON(e));
    } else {
      obj.filters = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileItemsOwnedRequest>, I>>(
    base?: I,
  ): CPlayerGetProfileItemsOwnedRequest {
    return CPlayerGetProfileItemsOwnedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileItemsOwnedRequest>, I>>(
    object: I,
  ): CPlayerGetProfileItemsOwnedRequest {
    const message = createBaseCPlayerGetProfileItemsOwnedRequest();
    message.language = object.language ?? "";
    message.filters = object.filters?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetProfileItemsOwnedResponse(): CPlayerGetProfileItemsOwnedResponse {
  return {
    profileBackgrounds: [],
    miniProfileBackgrounds: [],
    avatarFrames: [],
    animatedAvatars: [],
    profileModifiers: [],
    steamDeckKeyboardSkins: [],
    steamDeckStartupMovies: [],
  };
}

export const CPlayerGetProfileItemsOwnedResponse = {
  encode(message: CPlayerGetProfileItemsOwnedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profileBackgrounds) {
      ProfileItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.miniProfileBackgrounds) {
      ProfileItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.avatarFrames) {
      ProfileItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.animatedAvatars) {
      ProfileItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.profileModifiers) {
      ProfileItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.steamDeckKeyboardSkins) {
      ProfileItem.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.steamDeckStartupMovies) {
      ProfileItem.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileItemsOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileItemsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileBackgrounds.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.miniProfileBackgrounds.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 3:
          message.avatarFrames.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 4:
          message.animatedAvatars.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.profileModifiers.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 6:
          message.steamDeckKeyboardSkins.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        case 7:
          message.steamDeckStartupMovies.push(ProfileItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileItemsOwnedResponse {
    return {
      profileBackgrounds: Array.isArray(object?.profileBackgrounds)
        ? object.profileBackgrounds.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      miniProfileBackgrounds: Array.isArray(object?.miniProfileBackgrounds)
        ? object.miniProfileBackgrounds.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      avatarFrames: Array.isArray(object?.avatarFrames)
        ? object.avatarFrames.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      animatedAvatars: Array.isArray(object?.animatedAvatars)
        ? object.animatedAvatars.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      profileModifiers: Array.isArray(object?.profileModifiers)
        ? object.profileModifiers.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      steamDeckKeyboardSkins: Array.isArray(object?.steamDeckKeyboardSkins)
        ? object.steamDeckKeyboardSkins.map((e: any) => ProfileItem.fromJSON(e))
        : [],
      steamDeckStartupMovies: Array.isArray(object?.steamDeckStartupMovies)
        ? object.steamDeckStartupMovies.map((e: any) => ProfileItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetProfileItemsOwnedResponse): unknown {
    const obj: any = {};
    if (message.profileBackgrounds) {
      obj.profileBackgrounds = message.profileBackgrounds.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.profileBackgrounds = [];
    }
    if (message.miniProfileBackgrounds) {
      obj.miniProfileBackgrounds = message.miniProfileBackgrounds.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.miniProfileBackgrounds = [];
    }
    if (message.avatarFrames) {
      obj.avatarFrames = message.avatarFrames.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.avatarFrames = [];
    }
    if (message.animatedAvatars) {
      obj.animatedAvatars = message.animatedAvatars.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.animatedAvatars = [];
    }
    if (message.profileModifiers) {
      obj.profileModifiers = message.profileModifiers.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.profileModifiers = [];
    }
    if (message.steamDeckKeyboardSkins) {
      obj.steamDeckKeyboardSkins = message.steamDeckKeyboardSkins.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.steamDeckKeyboardSkins = [];
    }
    if (message.steamDeckStartupMovies) {
      obj.steamDeckStartupMovies = message.steamDeckStartupMovies.map((e) => e ? ProfileItem.toJSON(e) : undefined);
    } else {
      obj.steamDeckStartupMovies = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileItemsOwnedResponse>, I>>(
    base?: I,
  ): CPlayerGetProfileItemsOwnedResponse {
    return CPlayerGetProfileItemsOwnedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileItemsOwnedResponse>, I>>(
    object: I,
  ): CPlayerGetProfileItemsOwnedResponse {
    const message = createBaseCPlayerGetProfileItemsOwnedResponse();
    message.profileBackgrounds = object.profileBackgrounds?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.miniProfileBackgrounds = object.miniProfileBackgrounds?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.avatarFrames = object.avatarFrames?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.animatedAvatars = object.animatedAvatars?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.profileModifiers = object.profileModifiers?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.steamDeckKeyboardSkins = object.steamDeckKeyboardSkins?.map((e) => ProfileItem.fromPartial(e)) || [];
    message.steamDeckStartupMovies = object.steamDeckStartupMovies?.map((e) => ProfileItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetProfileItemsEquippedRequest(): CPlayerGetProfileItemsEquippedRequest {
  return { steamid: 0, language: "" };
}

export const CPlayerGetProfileItemsEquippedRequest = {
  encode(message: CPlayerGetProfileItemsEquippedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileItemsEquippedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileItemsEquippedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileItemsEquippedRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetProfileItemsEquippedRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileItemsEquippedRequest>, I>>(
    base?: I,
  ): CPlayerGetProfileItemsEquippedRequest {
    return CPlayerGetProfileItemsEquippedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileItemsEquippedRequest>, I>>(
    object: I,
  ): CPlayerGetProfileItemsEquippedRequest {
    const message = createBaseCPlayerGetProfileItemsEquippedRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetProfileItemsEquippedResponse(): CPlayerGetProfileItemsEquippedResponse {
  return {
    profileBackground: undefined,
    miniProfileBackground: undefined,
    avatarFrame: undefined,
    animatedAvatar: undefined,
    profileModifier: undefined,
    steamDeckKeyboardSkin: undefined,
  };
}

export const CPlayerGetProfileItemsEquippedResponse = {
  encode(message: CPlayerGetProfileItemsEquippedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileBackground !== undefined) {
      ProfileItem.encode(message.profileBackground, writer.uint32(10).fork()).ldelim();
    }
    if (message.miniProfileBackground !== undefined) {
      ProfileItem.encode(message.miniProfileBackground, writer.uint32(18).fork()).ldelim();
    }
    if (message.avatarFrame !== undefined) {
      ProfileItem.encode(message.avatarFrame, writer.uint32(26).fork()).ldelim();
    }
    if (message.animatedAvatar !== undefined) {
      ProfileItem.encode(message.animatedAvatar, writer.uint32(34).fork()).ldelim();
    }
    if (message.profileModifier !== undefined) {
      ProfileItem.encode(message.profileModifier, writer.uint32(42).fork()).ldelim();
    }
    if (message.steamDeckKeyboardSkin !== undefined) {
      ProfileItem.encode(message.steamDeckKeyboardSkin, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileItemsEquippedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileItemsEquippedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileBackground = ProfileItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.miniProfileBackground = ProfileItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.avatarFrame = ProfileItem.decode(reader, reader.uint32());
          break;
        case 4:
          message.animatedAvatar = ProfileItem.decode(reader, reader.uint32());
          break;
        case 5:
          message.profileModifier = ProfileItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.steamDeckKeyboardSkin = ProfileItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileItemsEquippedResponse {
    return {
      profileBackground: isSet(object.profileBackground) ? ProfileItem.fromJSON(object.profileBackground) : undefined,
      miniProfileBackground: isSet(object.miniProfileBackground)
        ? ProfileItem.fromJSON(object.miniProfileBackground)
        : undefined,
      avatarFrame: isSet(object.avatarFrame) ? ProfileItem.fromJSON(object.avatarFrame) : undefined,
      animatedAvatar: isSet(object.animatedAvatar) ? ProfileItem.fromJSON(object.animatedAvatar) : undefined,
      profileModifier: isSet(object.profileModifier) ? ProfileItem.fromJSON(object.profileModifier) : undefined,
      steamDeckKeyboardSkin: isSet(object.steamDeckKeyboardSkin)
        ? ProfileItem.fromJSON(object.steamDeckKeyboardSkin)
        : undefined,
    };
  },

  toJSON(message: CPlayerGetProfileItemsEquippedResponse): unknown {
    const obj: any = {};
    message.profileBackground !== undefined &&
      (obj.profileBackground = message.profileBackground ? ProfileItem.toJSON(message.profileBackground) : undefined);
    message.miniProfileBackground !== undefined && (obj.miniProfileBackground = message.miniProfileBackground
      ? ProfileItem.toJSON(message.miniProfileBackground)
      : undefined);
    message.avatarFrame !== undefined &&
      (obj.avatarFrame = message.avatarFrame ? ProfileItem.toJSON(message.avatarFrame) : undefined);
    message.animatedAvatar !== undefined &&
      (obj.animatedAvatar = message.animatedAvatar ? ProfileItem.toJSON(message.animatedAvatar) : undefined);
    message.profileModifier !== undefined &&
      (obj.profileModifier = message.profileModifier ? ProfileItem.toJSON(message.profileModifier) : undefined);
    message.steamDeckKeyboardSkin !== undefined && (obj.steamDeckKeyboardSkin = message.steamDeckKeyboardSkin
      ? ProfileItem.toJSON(message.steamDeckKeyboardSkin)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileItemsEquippedResponse>, I>>(
    base?: I,
  ): CPlayerGetProfileItemsEquippedResponse {
    return CPlayerGetProfileItemsEquippedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileItemsEquippedResponse>, I>>(
    object: I,
  ): CPlayerGetProfileItemsEquippedResponse {
    const message = createBaseCPlayerGetProfileItemsEquippedResponse();
    message.profileBackground = (object.profileBackground !== undefined && object.profileBackground !== null)
      ? ProfileItem.fromPartial(object.profileBackground)
      : undefined;
    message.miniProfileBackground =
      (object.miniProfileBackground !== undefined && object.miniProfileBackground !== null)
        ? ProfileItem.fromPartial(object.miniProfileBackground)
        : undefined;
    message.avatarFrame = (object.avatarFrame !== undefined && object.avatarFrame !== null)
      ? ProfileItem.fromPartial(object.avatarFrame)
      : undefined;
    message.animatedAvatar = (object.animatedAvatar !== undefined && object.animatedAvatar !== null)
      ? ProfileItem.fromPartial(object.animatedAvatar)
      : undefined;
    message.profileModifier = (object.profileModifier !== undefined && object.profileModifier !== null)
      ? ProfileItem.fromPartial(object.profileModifier)
      : undefined;
    message.steamDeckKeyboardSkin =
      (object.steamDeckKeyboardSkin !== undefined && object.steamDeckKeyboardSkin !== null)
        ? ProfileItem.fromPartial(object.steamDeckKeyboardSkin)
        : undefined;
    return message;
  },
};

function createBaseCPlayerSetEquippedProfileItemFlagsRequest(): CPlayerSetEquippedProfileItemFlagsRequest {
  return { communityitemid: 0, flags: 0 };
}

export const CPlayerSetEquippedProfileItemFlagsRequest = {
  encode(message: CPlayerSetEquippedProfileItemFlagsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    if (message.flags !== 0) {
      writer.uint32(16).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetEquippedProfileItemFlagsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetEquippedProfileItemFlagsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.flags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetEquippedProfileItemFlagsRequest {
    return {
      communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: CPlayerSetEquippedProfileItemFlagsRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetEquippedProfileItemFlagsRequest>, I>>(
    base?: I,
  ): CPlayerSetEquippedProfileItemFlagsRequest {
    return CPlayerSetEquippedProfileItemFlagsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetEquippedProfileItemFlagsRequest>, I>>(
    object: I,
  ): CPlayerSetEquippedProfileItemFlagsRequest {
    const message = createBaseCPlayerSetEquippedProfileItemFlagsRequest();
    message.communityitemid = object.communityitemid ?? 0;
    message.flags = object.flags ?? 0;
    return message;
  },
};

function createBaseCPlayerSetEquippedProfileItemFlagsResponse(): CPlayerSetEquippedProfileItemFlagsResponse {
  return {};
}

export const CPlayerSetEquippedProfileItemFlagsResponse = {
  encode(_: CPlayerSetEquippedProfileItemFlagsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetEquippedProfileItemFlagsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetEquippedProfileItemFlagsResponse();
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

  fromJSON(_: any): CPlayerSetEquippedProfileItemFlagsResponse {
    return {};
  },

  toJSON(_: CPlayerSetEquippedProfileItemFlagsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetEquippedProfileItemFlagsResponse>, I>>(
    base?: I,
  ): CPlayerSetEquippedProfileItemFlagsResponse {
    return CPlayerSetEquippedProfileItemFlagsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetEquippedProfileItemFlagsResponse>, I>>(
    _: I,
  ): CPlayerSetEquippedProfileItemFlagsResponse {
    const message = createBaseCPlayerSetEquippedProfileItemFlagsResponse();
    return message;
  },
};

function createBaseCPlayerGetEmoticonListRequest(): CPlayerGetEmoticonListRequest {
  return {};
}

export const CPlayerGetEmoticonListRequest = {
  encode(_: CPlayerGetEmoticonListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetEmoticonListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetEmoticonListRequest();
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

  fromJSON(_: any): CPlayerGetEmoticonListRequest {
    return {};
  },

  toJSON(_: CPlayerGetEmoticonListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetEmoticonListRequest>, I>>(base?: I): CPlayerGetEmoticonListRequest {
    return CPlayerGetEmoticonListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetEmoticonListRequest>, I>>(_: I): CPlayerGetEmoticonListRequest {
    const message = createBaseCPlayerGetEmoticonListRequest();
    return message;
  },
};

function createBaseCPlayerGetEmoticonListResponse(): CPlayerGetEmoticonListResponse {
  return { emoticons: [] };
}

export const CPlayerGetEmoticonListResponse = {
  encode(message: CPlayerGetEmoticonListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.emoticons) {
      CPlayerGetEmoticonListResponse_Emoticon.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetEmoticonListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetEmoticonListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.emoticons.push(CPlayerGetEmoticonListResponse_Emoticon.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetEmoticonListResponse {
    return {
      emoticons: Array.isArray(object?.emoticons)
        ? object.emoticons.map((e: any) => CPlayerGetEmoticonListResponse_Emoticon.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetEmoticonListResponse): unknown {
    const obj: any = {};
    if (message.emoticons) {
      obj.emoticons = message.emoticons.map((e) => e ? CPlayerGetEmoticonListResponse_Emoticon.toJSON(e) : undefined);
    } else {
      obj.emoticons = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetEmoticonListResponse>, I>>(base?: I): CPlayerGetEmoticonListResponse {
    return CPlayerGetEmoticonListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetEmoticonListResponse>, I>>(
    object: I,
  ): CPlayerGetEmoticonListResponse {
    const message = createBaseCPlayerGetEmoticonListResponse();
    message.emoticons = object.emoticons?.map((e) => CPlayerGetEmoticonListResponse_Emoticon.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetEmoticonListResponse_Emoticon(): CPlayerGetEmoticonListResponse_Emoticon {
  return { name: "", count: 0, timeLastUsed: 0, useCount: 0, timeReceived: 0, appid: 0 };
}

export const CPlayerGetEmoticonListResponse_Emoticon = {
  encode(message: CPlayerGetEmoticonListResponse_Emoticon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    if (message.timeLastUsed !== 0) {
      writer.uint32(24).uint32(message.timeLastUsed);
    }
    if (message.useCount !== 0) {
      writer.uint32(32).uint32(message.useCount);
    }
    if (message.timeReceived !== 0) {
      writer.uint32(40).uint32(message.timeReceived);
    }
    if (message.appid !== 0) {
      writer.uint32(48).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetEmoticonListResponse_Emoticon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetEmoticonListResponse_Emoticon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.count = reader.int32();
          break;
        case 3:
          message.timeLastUsed = reader.uint32();
          break;
        case 4:
          message.useCount = reader.uint32();
          break;
        case 5:
          message.timeReceived = reader.uint32();
          break;
        case 6:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetEmoticonListResponse_Emoticon {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      count: isSet(object.count) ? Number(object.count) : 0,
      timeLastUsed: isSet(object.timeLastUsed) ? Number(object.timeLastUsed) : 0,
      useCount: isSet(object.useCount) ? Number(object.useCount) : 0,
      timeReceived: isSet(object.timeReceived) ? Number(object.timeReceived) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CPlayerGetEmoticonListResponse_Emoticon): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.timeLastUsed !== undefined && (obj.timeLastUsed = Math.round(message.timeLastUsed));
    message.useCount !== undefined && (obj.useCount = Math.round(message.useCount));
    message.timeReceived !== undefined && (obj.timeReceived = Math.round(message.timeReceived));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetEmoticonListResponse_Emoticon>, I>>(
    base?: I,
  ): CPlayerGetEmoticonListResponse_Emoticon {
    return CPlayerGetEmoticonListResponse_Emoticon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetEmoticonListResponse_Emoticon>, I>>(
    object: I,
  ): CPlayerGetEmoticonListResponse_Emoticon {
    const message = createBaseCPlayerGetEmoticonListResponse_Emoticon();
    message.name = object.name ?? "";
    message.count = object.count ?? 0;
    message.timeLastUsed = object.timeLastUsed ?? 0;
    message.useCount = object.useCount ?? 0;
    message.timeReceived = object.timeReceived ?? 0;
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetTopAchievementsForGamesRequest(): CPlayerGetTopAchievementsForGamesRequest {
  return { steamid: 0, language: "", maxAchievements: 0, appids: [] };
}

export const CPlayerGetTopAchievementsForGamesRequest = {
  encode(message: CPlayerGetTopAchievementsForGamesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    if (message.maxAchievements !== 0) {
      writer.uint32(24).uint32(message.maxAchievements);
    }
    writer.uint32(34).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTopAchievementsForGamesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTopAchievementsForGamesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        case 3:
          message.maxAchievements = reader.uint32();
          break;
        case 4:
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

  fromJSON(object: any): CPlayerGetTopAchievementsForGamesRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
      maxAchievements: isSet(object.maxAchievements) ? Number(object.maxAchievements) : 0,
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPlayerGetTopAchievementsForGamesRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    message.maxAchievements !== undefined && (obj.maxAchievements = Math.round(message.maxAchievements));
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesRequest>, I>>(
    base?: I,
  ): CPlayerGetTopAchievementsForGamesRequest {
    return CPlayerGetTopAchievementsForGamesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesRequest>, I>>(
    object: I,
  ): CPlayerGetTopAchievementsForGamesRequest {
    const message = createBaseCPlayerGetTopAchievementsForGamesRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    message.maxAchievements = object.maxAchievements ?? 0;
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetTopAchievementsForGamesResponse(): CPlayerGetTopAchievementsForGamesResponse {
  return { games: [] };
}

export const CPlayerGetTopAchievementsForGamesResponse = {
  encode(message: CPlayerGetTopAchievementsForGamesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CPlayerGetTopAchievementsForGamesResponse_Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTopAchievementsForGamesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(CPlayerGetTopAchievementsForGamesResponse_Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetTopAchievementsForGamesResponse {
    return {
      games: Array.isArray(object?.games)
        ? object.games.map((e: any) => CPlayerGetTopAchievementsForGamesResponse_Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetTopAchievementsForGamesResponse): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CPlayerGetTopAchievementsForGamesResponse_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse>, I>>(
    base?: I,
  ): CPlayerGetTopAchievementsForGamesResponse {
    return CPlayerGetTopAchievementsForGamesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse>, I>>(
    object: I,
  ): CPlayerGetTopAchievementsForGamesResponse {
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse();
    message.games = object.games?.map((e) => CPlayerGetTopAchievementsForGamesResponse_Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetTopAchievementsForGamesResponse_Achievement(): CPlayerGetTopAchievementsForGamesResponse_Achievement {
  return { statid: 0, bit: 0, name: "", desc: "", icon: "", iconGray: "", hidden: false, playerPercentUnlocked: "" };
}

export const CPlayerGetTopAchievementsForGamesResponse_Achievement = {
  encode(
    message: CPlayerGetTopAchievementsForGamesResponse_Achievement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.statid !== 0) {
      writer.uint32(8).uint32(message.statid);
    }
    if (message.bit !== 0) {
      writer.uint32(16).uint32(message.bit);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.desc !== "") {
      writer.uint32(34).string(message.desc);
    }
    if (message.icon !== "") {
      writer.uint32(42).string(message.icon);
    }
    if (message.iconGray !== "") {
      writer.uint32(50).string(message.iconGray);
    }
    if (message.hidden === true) {
      writer.uint32(56).bool(message.hidden);
    }
    if (message.playerPercentUnlocked !== "") {
      writer.uint32(66).string(message.playerPercentUnlocked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTopAchievementsForGamesResponse_Achievement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse_Achievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statid = reader.uint32();
          break;
        case 2:
          message.bit = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.desc = reader.string();
          break;
        case 5:
          message.icon = reader.string();
          break;
        case 6:
          message.iconGray = reader.string();
          break;
        case 7:
          message.hidden = reader.bool();
          break;
        case 8:
          message.playerPercentUnlocked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetTopAchievementsForGamesResponse_Achievement {
    return {
      statid: isSet(object.statid) ? Number(object.statid) : 0,
      bit: isSet(object.bit) ? Number(object.bit) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      desc: isSet(object.desc) ? String(object.desc) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      iconGray: isSet(object.iconGray) ? String(object.iconGray) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      playerPercentUnlocked: isSet(object.playerPercentUnlocked) ? String(object.playerPercentUnlocked) : "",
    };
  },

  toJSON(message: CPlayerGetTopAchievementsForGamesResponse_Achievement): unknown {
    const obj: any = {};
    message.statid !== undefined && (obj.statid = Math.round(message.statid));
    message.bit !== undefined && (obj.bit = Math.round(message.bit));
    message.name !== undefined && (obj.name = message.name);
    message.desc !== undefined && (obj.desc = message.desc);
    message.icon !== undefined && (obj.icon = message.icon);
    message.iconGray !== undefined && (obj.iconGray = message.iconGray);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.playerPercentUnlocked !== undefined && (obj.playerPercentUnlocked = message.playerPercentUnlocked);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse_Achievement>, I>>(
    base?: I,
  ): CPlayerGetTopAchievementsForGamesResponse_Achievement {
    return CPlayerGetTopAchievementsForGamesResponse_Achievement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse_Achievement>, I>>(
    object: I,
  ): CPlayerGetTopAchievementsForGamesResponse_Achievement {
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse_Achievement();
    message.statid = object.statid ?? 0;
    message.bit = object.bit ?? 0;
    message.name = object.name ?? "";
    message.desc = object.desc ?? "";
    message.icon = object.icon ?? "";
    message.iconGray = object.iconGray ?? "";
    message.hidden = object.hidden ?? false;
    message.playerPercentUnlocked = object.playerPercentUnlocked ?? "";
    return message;
  },
};

function createBaseCPlayerGetTopAchievementsForGamesResponse_Game(): CPlayerGetTopAchievementsForGamesResponse_Game {
  return { appid: 0, totalAchievements: 0, achievements: [] };
}

export const CPlayerGetTopAchievementsForGamesResponse_Game = {
  encode(
    message: CPlayerGetTopAchievementsForGamesResponse_Game,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.totalAchievements !== 0) {
      writer.uint32(16).uint32(message.totalAchievements);
    }
    for (const v of message.achievements) {
      CPlayerGetTopAchievementsForGamesResponse_Achievement.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTopAchievementsForGamesResponse_Game {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.totalAchievements = reader.uint32();
          break;
        case 3:
          message.achievements.push(
            CPlayerGetTopAchievementsForGamesResponse_Achievement.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetTopAchievementsForGamesResponse_Game {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      totalAchievements: isSet(object.totalAchievements) ? Number(object.totalAchievements) : 0,
      achievements: Array.isArray(object?.achievements)
        ? object.achievements.map((e: any) => CPlayerGetTopAchievementsForGamesResponse_Achievement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetTopAchievementsForGamesResponse_Game): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.totalAchievements !== undefined && (obj.totalAchievements = Math.round(message.totalAchievements));
    if (message.achievements) {
      obj.achievements = message.achievements.map((e) =>
        e ? CPlayerGetTopAchievementsForGamesResponse_Achievement.toJSON(e) : undefined
      );
    } else {
      obj.achievements = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse_Game>, I>>(
    base?: I,
  ): CPlayerGetTopAchievementsForGamesResponse_Game {
    return CPlayerGetTopAchievementsForGamesResponse_Game.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTopAchievementsForGamesResponse_Game>, I>>(
    object: I,
  ): CPlayerGetTopAchievementsForGamesResponse_Game {
    const message = createBaseCPlayerGetTopAchievementsForGamesResponse_Game();
    message.appid = object.appid ?? 0;
    message.totalAchievements = object.totalAchievements ?? 0;
    message.achievements =
      object.achievements?.map((e) => CPlayerGetTopAchievementsForGamesResponse_Achievement.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetAchievementsProgressRequest(): CPlayerGetAchievementsProgressRequest {
  return { steamid: 0, language: "", appids: [] };
}

export const CPlayerGetAchievementsProgressRequest = {
  encode(message: CPlayerGetAchievementsProgressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    writer.uint32(26).fork();
    for (const v of message.appids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAchievementsProgressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAchievementsProgressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.language = reader.string();
          break;
        case 3:
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

  fromJSON(object: any): CPlayerGetAchievementsProgressRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
      appids: Array.isArray(object?.appids) ? object.appids.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CPlayerGetAchievementsProgressRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.language !== undefined && (obj.language = message.language);
    if (message.appids) {
      obj.appids = message.appids.map((e) => Math.round(e));
    } else {
      obj.appids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressRequest>, I>>(
    base?: I,
  ): CPlayerGetAchievementsProgressRequest {
    return CPlayerGetAchievementsProgressRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressRequest>, I>>(
    object: I,
  ): CPlayerGetAchievementsProgressRequest {
    const message = createBaseCPlayerGetAchievementsProgressRequest();
    message.steamid = object.steamid ?? 0;
    message.language = object.language ?? "";
    message.appids = object.appids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCPlayerGetAchievementsProgressResponse(): CPlayerGetAchievementsProgressResponse {
  return { achievementProgress: [] };
}

export const CPlayerGetAchievementsProgressResponse = {
  encode(message: CPlayerGetAchievementsProgressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.achievementProgress) {
      CPlayerGetAchievementsProgressResponse_AchievementProgress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAchievementsProgressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAchievementsProgressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievementProgress.push(
            CPlayerGetAchievementsProgressResponse_AchievementProgress.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAchievementsProgressResponse {
    return {
      achievementProgress: Array.isArray(object?.achievementProgress)
        ? object.achievementProgress.map((e: any) =>
          CPlayerGetAchievementsProgressResponse_AchievementProgress.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPlayerGetAchievementsProgressResponse): unknown {
    const obj: any = {};
    if (message.achievementProgress) {
      obj.achievementProgress = message.achievementProgress.map((e) =>
        e ? CPlayerGetAchievementsProgressResponse_AchievementProgress.toJSON(e) : undefined
      );
    } else {
      obj.achievementProgress = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressResponse>, I>>(
    base?: I,
  ): CPlayerGetAchievementsProgressResponse {
    return CPlayerGetAchievementsProgressResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressResponse>, I>>(
    object: I,
  ): CPlayerGetAchievementsProgressResponse {
    const message = createBaseCPlayerGetAchievementsProgressResponse();
    message.achievementProgress =
      object.achievementProgress?.map((e) =>
        CPlayerGetAchievementsProgressResponse_AchievementProgress.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPlayerGetAchievementsProgressResponse_AchievementProgress(): CPlayerGetAchievementsProgressResponse_AchievementProgress {
  return { appid: 0, unlocked: 0, total: 0, percentage: 0, allUnlocked: false, cacheTime: 0 };
}

export const CPlayerGetAchievementsProgressResponse_AchievementProgress = {
  encode(
    message: CPlayerGetAchievementsProgressResponse_AchievementProgress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.unlocked !== 0) {
      writer.uint32(16).uint32(message.unlocked);
    }
    if (message.total !== 0) {
      writer.uint32(24).uint32(message.total);
    }
    if (message.percentage !== 0) {
      writer.uint32(37).float(message.percentage);
    }
    if (message.allUnlocked === true) {
      writer.uint32(40).bool(message.allUnlocked);
    }
    if (message.cacheTime !== 0) {
      writer.uint32(48).uint32(message.cacheTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetAchievementsProgressResponse_AchievementProgress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetAchievementsProgressResponse_AchievementProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.unlocked = reader.uint32();
          break;
        case 3:
          message.total = reader.uint32();
          break;
        case 4:
          message.percentage = reader.float();
          break;
        case 5:
          message.allUnlocked = reader.bool();
          break;
        case 6:
          message.cacheTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetAchievementsProgressResponse_AchievementProgress {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      unlocked: isSet(object.unlocked) ? Number(object.unlocked) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      allUnlocked: isSet(object.allUnlocked) ? Boolean(object.allUnlocked) : false,
      cacheTime: isSet(object.cacheTime) ? Number(object.cacheTime) : 0,
    };
  },

  toJSON(message: CPlayerGetAchievementsProgressResponse_AchievementProgress): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.unlocked !== undefined && (obj.unlocked = Math.round(message.unlocked));
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.allUnlocked !== undefined && (obj.allUnlocked = message.allUnlocked);
    message.cacheTime !== undefined && (obj.cacheTime = Math.round(message.cacheTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressResponse_AchievementProgress>, I>>(
    base?: I,
  ): CPlayerGetAchievementsProgressResponse_AchievementProgress {
    return CPlayerGetAchievementsProgressResponse_AchievementProgress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetAchievementsProgressResponse_AchievementProgress>, I>>(
    object: I,
  ): CPlayerGetAchievementsProgressResponse_AchievementProgress {
    const message = createBaseCPlayerGetAchievementsProgressResponse_AchievementProgress();
    message.appid = object.appid ?? 0;
    message.unlocked = object.unlocked ?? 0;
    message.total = object.total ?? 0;
    message.percentage = object.percentage ?? 0;
    message.allUnlocked = object.allUnlocked ?? false;
    message.cacheTime = object.cacheTime ?? 0;
    return message;
  },
};

function createBaseCPlayerGetGameAchievementsRequest(): CPlayerGetGameAchievementsRequest {
  return { appid: 0, language: "" };
}

export const CPlayerGetGameAchievementsRequest = {
  encode(message: CPlayerGetGameAchievementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.language !== "") {
      writer.uint32(18).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameAchievementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameAchievementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameAchievementsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CPlayerGetGameAchievementsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameAchievementsRequest>, I>>(
    base?: I,
  ): CPlayerGetGameAchievementsRequest {
    return CPlayerGetGameAchievementsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameAchievementsRequest>, I>>(
    object: I,
  ): CPlayerGetGameAchievementsRequest {
    const message = createBaseCPlayerGetGameAchievementsRequest();
    message.appid = object.appid ?? 0;
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCPlayerGetGameAchievementsResponse(): CPlayerGetGameAchievementsResponse {
  return { achievements: [] };
}

export const CPlayerGetGameAchievementsResponse = {
  encode(message: CPlayerGetGameAchievementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.achievements) {
      CPlayerGetGameAchievementsResponse_Achievement.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameAchievementsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameAchievementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.achievements.push(CPlayerGetGameAchievementsResponse_Achievement.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameAchievementsResponse {
    return {
      achievements: Array.isArray(object?.achievements)
        ? object.achievements.map((e: any) => CPlayerGetGameAchievementsResponse_Achievement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetGameAchievementsResponse): unknown {
    const obj: any = {};
    if (message.achievements) {
      obj.achievements = message.achievements.map((e) =>
        e ? CPlayerGetGameAchievementsResponse_Achievement.toJSON(e) : undefined
      );
    } else {
      obj.achievements = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameAchievementsResponse>, I>>(
    base?: I,
  ): CPlayerGetGameAchievementsResponse {
    return CPlayerGetGameAchievementsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameAchievementsResponse>, I>>(
    object: I,
  ): CPlayerGetGameAchievementsResponse {
    const message = createBaseCPlayerGetGameAchievementsResponse();
    message.achievements =
      object.achievements?.map((e) => CPlayerGetGameAchievementsResponse_Achievement.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetGameAchievementsResponse_Achievement(): CPlayerGetGameAchievementsResponse_Achievement {
  return {
    internalName: "",
    localizedName: "",
    localizedDesc: "",
    icon: "",
    iconGray: "",
    hidden: false,
    playerPercentUnlocked: "",
  };
}

export const CPlayerGetGameAchievementsResponse_Achievement = {
  encode(
    message: CPlayerGetGameAchievementsResponse_Achievement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.internalName !== "") {
      writer.uint32(10).string(message.internalName);
    }
    if (message.localizedName !== "") {
      writer.uint32(18).string(message.localizedName);
    }
    if (message.localizedDesc !== "") {
      writer.uint32(26).string(message.localizedDesc);
    }
    if (message.icon !== "") {
      writer.uint32(34).string(message.icon);
    }
    if (message.iconGray !== "") {
      writer.uint32(42).string(message.iconGray);
    }
    if (message.hidden === true) {
      writer.uint32(48).bool(message.hidden);
    }
    if (message.playerPercentUnlocked !== "") {
      writer.uint32(58).string(message.playerPercentUnlocked);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetGameAchievementsResponse_Achievement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetGameAchievementsResponse_Achievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.internalName = reader.string();
          break;
        case 2:
          message.localizedName = reader.string();
          break;
        case 3:
          message.localizedDesc = reader.string();
          break;
        case 4:
          message.icon = reader.string();
          break;
        case 5:
          message.iconGray = reader.string();
          break;
        case 6:
          message.hidden = reader.bool();
          break;
        case 7:
          message.playerPercentUnlocked = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetGameAchievementsResponse_Achievement {
    return {
      internalName: isSet(object.internalName) ? String(object.internalName) : "",
      localizedName: isSet(object.localizedName) ? String(object.localizedName) : "",
      localizedDesc: isSet(object.localizedDesc) ? String(object.localizedDesc) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      iconGray: isSet(object.iconGray) ? String(object.iconGray) : "",
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      playerPercentUnlocked: isSet(object.playerPercentUnlocked) ? String(object.playerPercentUnlocked) : "",
    };
  },

  toJSON(message: CPlayerGetGameAchievementsResponse_Achievement): unknown {
    const obj: any = {};
    message.internalName !== undefined && (obj.internalName = message.internalName);
    message.localizedName !== undefined && (obj.localizedName = message.localizedName);
    message.localizedDesc !== undefined && (obj.localizedDesc = message.localizedDesc);
    message.icon !== undefined && (obj.icon = message.icon);
    message.iconGray !== undefined && (obj.iconGray = message.iconGray);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.playerPercentUnlocked !== undefined && (obj.playerPercentUnlocked = message.playerPercentUnlocked);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetGameAchievementsResponse_Achievement>, I>>(
    base?: I,
  ): CPlayerGetGameAchievementsResponse_Achievement {
    return CPlayerGetGameAchievementsResponse_Achievement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetGameAchievementsResponse_Achievement>, I>>(
    object: I,
  ): CPlayerGetGameAchievementsResponse_Achievement {
    const message = createBaseCPlayerGetGameAchievementsResponse_Achievement();
    message.internalName = object.internalName ?? "";
    message.localizedName = object.localizedName ?? "";
    message.localizedDesc = object.localizedDesc ?? "";
    message.icon = object.icon ?? "";
    message.iconGray = object.iconGray ?? "";
    message.hidden = object.hidden ?? false;
    message.playerPercentUnlocked = object.playerPercentUnlocked ?? "";
    return message;
  },
};

function createBaseCPlayerGetFavoriteBadgeRequest(): CPlayerGetFavoriteBadgeRequest {
  return { steamid: 0 };
}

export const CPlayerGetFavoriteBadgeRequest = {
  encode(message: CPlayerGetFavoriteBadgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(8).uint64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFavoriteBadgeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFavoriteBadgeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFavoriteBadgeRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CPlayerGetFavoriteBadgeRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFavoriteBadgeRequest>, I>>(base?: I): CPlayerGetFavoriteBadgeRequest {
    return CPlayerGetFavoriteBadgeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFavoriteBadgeRequest>, I>>(
    object: I,
  ): CPlayerGetFavoriteBadgeRequest {
    const message = createBaseCPlayerGetFavoriteBadgeRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetFavoriteBadgeResponse(): CPlayerGetFavoriteBadgeResponse {
  return { hasFavoriteBadge: false, badgeid: 0, communityitemid: 0, itemType: 0, borderColor: 0, appid: 0, level: 0 };
}

export const CPlayerGetFavoriteBadgeResponse = {
  encode(message: CPlayerGetFavoriteBadgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasFavoriteBadge === true) {
      writer.uint32(8).bool(message.hasFavoriteBadge);
    }
    if (message.badgeid !== 0) {
      writer.uint32(16).uint32(message.badgeid);
    }
    if (message.communityitemid !== 0) {
      writer.uint32(24).uint64(message.communityitemid);
    }
    if (message.itemType !== 0) {
      writer.uint32(32).uint32(message.itemType);
    }
    if (message.borderColor !== 0) {
      writer.uint32(40).uint32(message.borderColor);
    }
    if (message.appid !== 0) {
      writer.uint32(48).uint32(message.appid);
    }
    if (message.level !== 0) {
      writer.uint32(56).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetFavoriteBadgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetFavoriteBadgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasFavoriteBadge = reader.bool();
          break;
        case 2:
          message.badgeid = reader.uint32();
          break;
        case 3:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.itemType = reader.uint32();
          break;
        case 5:
          message.borderColor = reader.uint32();
          break;
        case 6:
          message.appid = reader.uint32();
          break;
        case 7:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetFavoriteBadgeResponse {
    return {
      hasFavoriteBadge: isSet(object.hasFavoriteBadge) ? Boolean(object.hasFavoriteBadge) : false,
      badgeid: isSet(object.badgeid) ? Number(object.badgeid) : 0,
      communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0,
      itemType: isSet(object.itemType) ? Number(object.itemType) : 0,
      borderColor: isSet(object.borderColor) ? Number(object.borderColor) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CPlayerGetFavoriteBadgeResponse): unknown {
    const obj: any = {};
    message.hasFavoriteBadge !== undefined && (obj.hasFavoriteBadge = message.hasFavoriteBadge);
    message.badgeid !== undefined && (obj.badgeid = Math.round(message.badgeid));
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    message.itemType !== undefined && (obj.itemType = Math.round(message.itemType));
    message.borderColor !== undefined && (obj.borderColor = Math.round(message.borderColor));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetFavoriteBadgeResponse>, I>>(base?: I): CPlayerGetFavoriteBadgeResponse {
    return CPlayerGetFavoriteBadgeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetFavoriteBadgeResponse>, I>>(
    object: I,
  ): CPlayerGetFavoriteBadgeResponse {
    const message = createBaseCPlayerGetFavoriteBadgeResponse();
    message.hasFavoriteBadge = object.hasFavoriteBadge ?? false;
    message.badgeid = object.badgeid ?? 0;
    message.communityitemid = object.communityitemid ?? 0;
    message.itemType = object.itemType ?? 0;
    message.borderColor = object.borderColor ?? 0;
    message.appid = object.appid ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCPlayerSetFavoriteBadgeRequest(): CPlayerSetFavoriteBadgeRequest {
  return { communityitemid: 0, badgeid: 0 };
}

export const CPlayerSetFavoriteBadgeRequest = {
  encode(message: CPlayerSetFavoriteBadgeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityitemid !== 0) {
      writer.uint32(8).uint64(message.communityitemid);
    }
    if (message.badgeid !== 0) {
      writer.uint32(16).uint32(message.badgeid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetFavoriteBadgeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetFavoriteBadgeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityitemid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.badgeid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetFavoriteBadgeRequest {
    return {
      communityitemid: isSet(object.communityitemid) ? Number(object.communityitemid) : 0,
      badgeid: isSet(object.badgeid) ? Number(object.badgeid) : 0,
    };
  },

  toJSON(message: CPlayerSetFavoriteBadgeRequest): unknown {
    const obj: any = {};
    message.communityitemid !== undefined && (obj.communityitemid = Math.round(message.communityitemid));
    message.badgeid !== undefined && (obj.badgeid = Math.round(message.badgeid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetFavoriteBadgeRequest>, I>>(base?: I): CPlayerSetFavoriteBadgeRequest {
    return CPlayerSetFavoriteBadgeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetFavoriteBadgeRequest>, I>>(
    object: I,
  ): CPlayerSetFavoriteBadgeRequest {
    const message = createBaseCPlayerSetFavoriteBadgeRequest();
    message.communityitemid = object.communityitemid ?? 0;
    message.badgeid = object.badgeid ?? 0;
    return message;
  },
};

function createBaseCPlayerSetFavoriteBadgeResponse(): CPlayerSetFavoriteBadgeResponse {
  return {};
}

export const CPlayerSetFavoriteBadgeResponse = {
  encode(_: CPlayerSetFavoriteBadgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetFavoriteBadgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetFavoriteBadgeResponse();
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

  fromJSON(_: any): CPlayerSetFavoriteBadgeResponse {
    return {};
  },

  toJSON(_: CPlayerSetFavoriteBadgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetFavoriteBadgeResponse>, I>>(base?: I): CPlayerSetFavoriteBadgeResponse {
    return CPlayerSetFavoriteBadgeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetFavoriteBadgeResponse>, I>>(_: I): CPlayerSetFavoriteBadgeResponse {
    const message = createBaseCPlayerSetFavoriteBadgeResponse();
    return message;
  },
};

function createBaseCPlayerGetProfileCustomizationRequest(): CPlayerGetProfileCustomizationRequest {
  return { steamid: 0, includeInactiveCustomizations: false, includePurchasedCustomizations: false };
}

export const CPlayerGetProfileCustomizationRequest = {
  encode(message: CPlayerGetProfileCustomizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.includeInactiveCustomizations === true) {
      writer.uint32(16).bool(message.includeInactiveCustomizations);
    }
    if (message.includePurchasedCustomizations === true) {
      writer.uint32(24).bool(message.includePurchasedCustomizations);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileCustomizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileCustomizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.includeInactiveCustomizations = reader.bool();
          break;
        case 3:
          message.includePurchasedCustomizations = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileCustomizationRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      includeInactiveCustomizations: isSet(object.includeInactiveCustomizations)
        ? Boolean(object.includeInactiveCustomizations)
        : false,
      includePurchasedCustomizations: isSet(object.includePurchasedCustomizations)
        ? Boolean(object.includePurchasedCustomizations)
        : false,
    };
  },

  toJSON(message: CPlayerGetProfileCustomizationRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.includeInactiveCustomizations !== undefined &&
      (obj.includeInactiveCustomizations = message.includeInactiveCustomizations);
    message.includePurchasedCustomizations !== undefined &&
      (obj.includePurchasedCustomizations = message.includePurchasedCustomizations);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationRequest>, I>>(
    base?: I,
  ): CPlayerGetProfileCustomizationRequest {
    return CPlayerGetProfileCustomizationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationRequest>, I>>(
    object: I,
  ): CPlayerGetProfileCustomizationRequest {
    const message = createBaseCPlayerGetProfileCustomizationRequest();
    message.steamid = object.steamid ?? 0;
    message.includeInactiveCustomizations = object.includeInactiveCustomizations ?? false;
    message.includePurchasedCustomizations = object.includePurchasedCustomizations ?? false;
    return message;
  },
};

function createBaseProfileCustomizationSlot(): ProfileCustomizationSlot {
  return {
    slot: 0,
    appid: 0,
    publishedfileid: 0,
    itemAssetid: 0,
    itemContextid: 0,
    notes: "",
    title: "",
    accountid: 0,
    badgeid: 0,
    borderColor: 0,
    itemClassid: 0,
    itemInstanceid: 0,
    banCheckResult: 0,
    replayYear: 0,
  };
}

export const ProfileCustomizationSlot = {
  encode(message: ProfileCustomizationSlot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).uint32(message.slot);
    }
    if (message.appid !== 0) {
      writer.uint32(16).uint32(message.appid);
    }
    if (message.publishedfileid !== 0) {
      writer.uint32(24).uint64(message.publishedfileid);
    }
    if (message.itemAssetid !== 0) {
      writer.uint32(32).uint64(message.itemAssetid);
    }
    if (message.itemContextid !== 0) {
      writer.uint32(40).uint64(message.itemContextid);
    }
    if (message.notes !== "") {
      writer.uint32(50).string(message.notes);
    }
    if (message.title !== "") {
      writer.uint32(58).string(message.title);
    }
    if (message.accountid !== 0) {
      writer.uint32(64).uint32(message.accountid);
    }
    if (message.badgeid !== 0) {
      writer.uint32(72).uint32(message.badgeid);
    }
    if (message.borderColor !== 0) {
      writer.uint32(80).uint32(message.borderColor);
    }
    if (message.itemClassid !== 0) {
      writer.uint32(88).uint64(message.itemClassid);
    }
    if (message.itemInstanceid !== 0) {
      writer.uint32(96).uint64(message.itemInstanceid);
    }
    if (message.banCheckResult !== 0) {
      writer.uint32(104).int32(message.banCheckResult);
    }
    if (message.replayYear !== 0) {
      writer.uint32(112).uint32(message.replayYear);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileCustomizationSlot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileCustomizationSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slot = reader.uint32();
          break;
        case 2:
          message.appid = reader.uint32();
          break;
        case 3:
          message.publishedfileid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.itemAssetid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.itemContextid = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.notes = reader.string();
          break;
        case 7:
          message.title = reader.string();
          break;
        case 8:
          message.accountid = reader.uint32();
          break;
        case 9:
          message.badgeid = reader.uint32();
          break;
        case 10:
          message.borderColor = reader.uint32();
          break;
        case 11:
          message.itemClassid = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.itemInstanceid = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.banCheckResult = reader.int32() as any;
          break;
        case 14:
          message.replayYear = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileCustomizationSlot {
    return {
      slot: isSet(object.slot) ? Number(object.slot) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      publishedfileid: isSet(object.publishedfileid) ? Number(object.publishedfileid) : 0,
      itemAssetid: isSet(object.itemAssetid) ? Number(object.itemAssetid) : 0,
      itemContextid: isSet(object.itemContextid) ? Number(object.itemContextid) : 0,
      notes: isSet(object.notes) ? String(object.notes) : "",
      title: isSet(object.title) ? String(object.title) : "",
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      badgeid: isSet(object.badgeid) ? Number(object.badgeid) : 0,
      borderColor: isSet(object.borderColor) ? Number(object.borderColor) : 0,
      itemClassid: isSet(object.itemClassid) ? Number(object.itemClassid) : 0,
      itemInstanceid: isSet(object.itemInstanceid) ? Number(object.itemInstanceid) : 0,
      banCheckResult: isSet(object.banCheckResult) ? eBanContentCheckResultFromJSON(object.banCheckResult) : 0,
      replayYear: isSet(object.replayYear) ? Number(object.replayYear) : 0,
    };
  },

  toJSON(message: ProfileCustomizationSlot): unknown {
    const obj: any = {};
    message.slot !== undefined && (obj.slot = Math.round(message.slot));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.publishedfileid !== undefined && (obj.publishedfileid = Math.round(message.publishedfileid));
    message.itemAssetid !== undefined && (obj.itemAssetid = Math.round(message.itemAssetid));
    message.itemContextid !== undefined && (obj.itemContextid = Math.round(message.itemContextid));
    message.notes !== undefined && (obj.notes = message.notes);
    message.title !== undefined && (obj.title = message.title);
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.badgeid !== undefined && (obj.badgeid = Math.round(message.badgeid));
    message.borderColor !== undefined && (obj.borderColor = Math.round(message.borderColor));
    message.itemClassid !== undefined && (obj.itemClassid = Math.round(message.itemClassid));
    message.itemInstanceid !== undefined && (obj.itemInstanceid = Math.round(message.itemInstanceid));
    message.banCheckResult !== undefined && (obj.banCheckResult = eBanContentCheckResultToJSON(message.banCheckResult));
    message.replayYear !== undefined && (obj.replayYear = Math.round(message.replayYear));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileCustomizationSlot>, I>>(base?: I): ProfileCustomizationSlot {
    return ProfileCustomizationSlot.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfileCustomizationSlot>, I>>(object: I): ProfileCustomizationSlot {
    const message = createBaseProfileCustomizationSlot();
    message.slot = object.slot ?? 0;
    message.appid = object.appid ?? 0;
    message.publishedfileid = object.publishedfileid ?? 0;
    message.itemAssetid = object.itemAssetid ?? 0;
    message.itemContextid = object.itemContextid ?? 0;
    message.notes = object.notes ?? "";
    message.title = object.title ?? "";
    message.accountid = object.accountid ?? 0;
    message.badgeid = object.badgeid ?? 0;
    message.borderColor = object.borderColor ?? 0;
    message.itemClassid = object.itemClassid ?? 0;
    message.itemInstanceid = object.itemInstanceid ?? 0;
    message.banCheckResult = object.banCheckResult ?? 0;
    message.replayYear = object.replayYear ?? 0;
    return message;
  },
};

function createBaseProfileCustomization(): ProfileCustomization {
  return {
    customizationType: 0,
    large: false,
    slots: [],
    active: false,
    customizationStyle: 0,
    purchaseid: 0,
    level: 0,
  };
}

export const ProfileCustomization = {
  encode(message: ProfileCustomization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.customizationType !== 0) {
      writer.uint32(8).int32(message.customizationType);
    }
    if (message.large === true) {
      writer.uint32(16).bool(message.large);
    }
    for (const v of message.slots) {
      ProfileCustomizationSlot.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.customizationStyle !== 0) {
      writer.uint32(40).int32(message.customizationStyle);
    }
    if (message.purchaseid !== 0) {
      writer.uint32(48).uint64(message.purchaseid);
    }
    if (message.level !== 0) {
      writer.uint32(56).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileCustomization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileCustomization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizationType = reader.int32() as any;
          break;
        case 2:
          message.large = reader.bool();
          break;
        case 3:
          message.slots.push(ProfileCustomizationSlot.decode(reader, reader.uint32()));
          break;
        case 4:
          message.active = reader.bool();
          break;
        case 5:
          message.customizationStyle = reader.int32() as any;
          break;
        case 6:
          message.purchaseid = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileCustomization {
    return {
      customizationType: isSet(object.customizationType)
        ? eProfileCustomizationTypeFromJSON(object.customizationType)
        : 0,
      large: isSet(object.large) ? Boolean(object.large) : false,
      slots: Array.isArray(object?.slots) ? object.slots.map((e: any) => ProfileCustomizationSlot.fromJSON(e)) : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
      customizationStyle: isSet(object.customizationStyle)
        ? eProfileCustomizationStyleFromJSON(object.customizationStyle)
        : 0,
      purchaseid: isSet(object.purchaseid) ? Number(object.purchaseid) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: ProfileCustomization): unknown {
    const obj: any = {};
    message.customizationType !== undefined &&
      (obj.customizationType = eProfileCustomizationTypeToJSON(message.customizationType));
    message.large !== undefined && (obj.large = message.large);
    if (message.slots) {
      obj.slots = message.slots.map((e) => e ? ProfileCustomizationSlot.toJSON(e) : undefined);
    } else {
      obj.slots = [];
    }
    message.active !== undefined && (obj.active = message.active);
    message.customizationStyle !== undefined &&
      (obj.customizationStyle = eProfileCustomizationStyleToJSON(message.customizationStyle));
    message.purchaseid !== undefined && (obj.purchaseid = Math.round(message.purchaseid));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileCustomization>, I>>(base?: I): ProfileCustomization {
    return ProfileCustomization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfileCustomization>, I>>(object: I): ProfileCustomization {
    const message = createBaseProfileCustomization();
    message.customizationType = object.customizationType ?? 0;
    message.large = object.large ?? false;
    message.slots = object.slots?.map((e) => ProfileCustomizationSlot.fromPartial(e)) || [];
    message.active = object.active ?? false;
    message.customizationStyle = object.customizationStyle ?? 0;
    message.purchaseid = object.purchaseid ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseProfileTheme(): ProfileTheme {
  return { themeId: "", title: "" };
}

export const ProfileTheme = {
  encode(message: ProfileTheme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.themeId !== "") {
      writer.uint32(10).string(message.themeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileTheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileTheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.themeId = reader.string();
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

  fromJSON(object: any): ProfileTheme {
    return {
      themeId: isSet(object.themeId) ? String(object.themeId) : "",
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: ProfileTheme): unknown {
    const obj: any = {};
    message.themeId !== undefined && (obj.themeId = message.themeId);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileTheme>, I>>(base?: I): ProfileTheme {
    return ProfileTheme.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfileTheme>, I>>(object: I): ProfileTheme {
    const message = createBaseProfileTheme();
    message.themeId = object.themeId ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseProfilePreferences(): ProfilePreferences {
  return { hideProfileAwards: false };
}

export const ProfilePreferences = {
  encode(message: ProfilePreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hideProfileAwards === true) {
      writer.uint32(8).bool(message.hideProfileAwards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfilePreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfilePreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideProfileAwards = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfilePreferences {
    return { hideProfileAwards: isSet(object.hideProfileAwards) ? Boolean(object.hideProfileAwards) : false };
  },

  toJSON(message: ProfilePreferences): unknown {
    const obj: any = {};
    message.hideProfileAwards !== undefined && (obj.hideProfileAwards = message.hideProfileAwards);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfilePreferences>, I>>(base?: I): ProfilePreferences {
    return ProfilePreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProfilePreferences>, I>>(object: I): ProfilePreferences {
    const message = createBaseProfilePreferences();
    message.hideProfileAwards = object.hideProfileAwards ?? false;
    return message;
  },
};

function createBaseCPlayerGetProfileCustomizationResponse(): CPlayerGetProfileCustomizationResponse {
  return {
    customizations: [],
    slotsAvailable: 0,
    profileTheme: undefined,
    purchasedCustomizations: [],
    profilePreferences: undefined,
  };
}

export const CPlayerGetProfileCustomizationResponse = {
  encode(message: CPlayerGetProfileCustomizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.customizations) {
      ProfileCustomization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.slotsAvailable !== 0) {
      writer.uint32(16).uint32(message.slotsAvailable);
    }
    if (message.profileTheme !== undefined) {
      ProfileTheme.encode(message.profileTheme, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.purchasedCustomizations) {
      CPlayerGetProfileCustomizationResponse_PurchasedCustomization.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.profilePreferences !== undefined) {
      ProfilePreferences.encode(message.profilePreferences, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileCustomizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileCustomizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizations.push(ProfileCustomization.decode(reader, reader.uint32()));
          break;
        case 2:
          message.slotsAvailable = reader.uint32();
          break;
        case 3:
          message.profileTheme = ProfileTheme.decode(reader, reader.uint32());
          break;
        case 4:
          message.purchasedCustomizations.push(
            CPlayerGetProfileCustomizationResponse_PurchasedCustomization.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.profilePreferences = ProfilePreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileCustomizationResponse {
    return {
      customizations: Array.isArray(object?.customizations)
        ? object.customizations.map((e: any) => ProfileCustomization.fromJSON(e))
        : [],
      slotsAvailable: isSet(object.slotsAvailable) ? Number(object.slotsAvailable) : 0,
      profileTheme: isSet(object.profileTheme) ? ProfileTheme.fromJSON(object.profileTheme) : undefined,
      purchasedCustomizations: Array.isArray(object?.purchasedCustomizations)
        ? object.purchasedCustomizations.map((e: any) =>
          CPlayerGetProfileCustomizationResponse_PurchasedCustomization.fromJSON(e)
        )
        : [],
      profilePreferences: isSet(object.profilePreferences)
        ? ProfilePreferences.fromJSON(object.profilePreferences)
        : undefined,
    };
  },

  toJSON(message: CPlayerGetProfileCustomizationResponse): unknown {
    const obj: any = {};
    if (message.customizations) {
      obj.customizations = message.customizations.map((e) => e ? ProfileCustomization.toJSON(e) : undefined);
    } else {
      obj.customizations = [];
    }
    message.slotsAvailable !== undefined && (obj.slotsAvailable = Math.round(message.slotsAvailable));
    message.profileTheme !== undefined &&
      (obj.profileTheme = message.profileTheme ? ProfileTheme.toJSON(message.profileTheme) : undefined);
    if (message.purchasedCustomizations) {
      obj.purchasedCustomizations = message.purchasedCustomizations.map((e) =>
        e ? CPlayerGetProfileCustomizationResponse_PurchasedCustomization.toJSON(e) : undefined
      );
    } else {
      obj.purchasedCustomizations = [];
    }
    message.profilePreferences !== undefined && (obj.profilePreferences = message.profilePreferences
      ? ProfilePreferences.toJSON(message.profilePreferences)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationResponse>, I>>(
    base?: I,
  ): CPlayerGetProfileCustomizationResponse {
    return CPlayerGetProfileCustomizationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationResponse>, I>>(
    object: I,
  ): CPlayerGetProfileCustomizationResponse {
    const message = createBaseCPlayerGetProfileCustomizationResponse();
    message.customizations = object.customizations?.map((e) => ProfileCustomization.fromPartial(e)) || [];
    message.slotsAvailable = object.slotsAvailable ?? 0;
    message.profileTheme = (object.profileTheme !== undefined && object.profileTheme !== null)
      ? ProfileTheme.fromPartial(object.profileTheme)
      : undefined;
    message.purchasedCustomizations =
      object.purchasedCustomizations?.map((e) =>
        CPlayerGetProfileCustomizationResponse_PurchasedCustomization.fromPartial(e)
      ) || [];
    message.profilePreferences = (object.profilePreferences !== undefined && object.profilePreferences !== null)
      ? ProfilePreferences.fromPartial(object.profilePreferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerGetProfileCustomizationResponse_PurchasedCustomization(): CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
  return { purchaseid: 0, customizationType: 0, level: 0 };
}

export const CPlayerGetProfileCustomizationResponse_PurchasedCustomization = {
  encode(
    message: CPlayerGetProfileCustomizationResponse_PurchasedCustomization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.purchaseid !== 0) {
      writer.uint32(8).uint64(message.purchaseid);
    }
    if (message.customizationType !== 0) {
      writer.uint32(16).int32(message.customizationType);
    }
    if (message.level !== 0) {
      writer.uint32(24).uint32(message.level);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileCustomizationResponse_PurchasedCustomization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.customizationType = reader.int32() as any;
          break;
        case 3:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
    return {
      purchaseid: isSet(object.purchaseid) ? Number(object.purchaseid) : 0,
      customizationType: isSet(object.customizationType)
        ? eProfileCustomizationTypeFromJSON(object.customizationType)
        : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CPlayerGetProfileCustomizationResponse_PurchasedCustomization): unknown {
    const obj: any = {};
    message.purchaseid !== undefined && (obj.purchaseid = Math.round(message.purchaseid));
    message.customizationType !== undefined &&
      (obj.customizationType = eProfileCustomizationTypeToJSON(message.customizationType));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationResponse_PurchasedCustomization>, I>>(
    base?: I,
  ): CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
    return CPlayerGetProfileCustomizationResponse_PurchasedCustomization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileCustomizationResponse_PurchasedCustomization>, I>>(
    object: I,
  ): CPlayerGetProfileCustomizationResponse_PurchasedCustomization {
    const message = createBaseCPlayerGetProfileCustomizationResponse_PurchasedCustomization();
    message.purchaseid = object.purchaseid ?? 0;
    message.customizationType = object.customizationType ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPurchasedProfileCustomizationsRequest(): CPlayerGetPurchasedProfileCustomizationsRequest {
  return { steamid: 0 };
}

export const CPlayerGetPurchasedProfileCustomizationsRequest = {
  encode(
    message: CPlayerGetPurchasedProfileCustomizationsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPurchasedProfileCustomizationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsRequest();
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

  fromJSON(object: any): CPlayerGetPurchasedProfileCustomizationsRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CPlayerGetPurchasedProfileCustomizationsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsRequest>, I>>(
    base?: I,
  ): CPlayerGetPurchasedProfileCustomizationsRequest {
    return CPlayerGetPurchasedProfileCustomizationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsRequest>, I>>(
    object: I,
  ): CPlayerGetPurchasedProfileCustomizationsRequest {
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPurchasedProfileCustomizationsResponse(): CPlayerGetPurchasedProfileCustomizationsResponse {
  return { purchasedCustomizations: [] };
}

export const CPlayerGetPurchasedProfileCustomizationsResponse = {
  encode(
    message: CPlayerGetPurchasedProfileCustomizationsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.purchasedCustomizations) {
      CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.encode(v!, writer.uint32(10).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPurchasedProfileCustomizationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchasedCustomizations.push(
            CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPurchasedProfileCustomizationsResponse {
    return {
      purchasedCustomizations: Array.isArray(object?.purchasedCustomizations)
        ? object.purchasedCustomizations.map((e: any) =>
          CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPlayerGetPurchasedProfileCustomizationsResponse): unknown {
    const obj: any = {};
    if (message.purchasedCustomizations) {
      obj.purchasedCustomizations = message.purchasedCustomizations.map((e) =>
        e ? CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.toJSON(e) : undefined
      );
    } else {
      obj.purchasedCustomizations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsResponse>, I>>(
    base?: I,
  ): CPlayerGetPurchasedProfileCustomizationsResponse {
    return CPlayerGetPurchasedProfileCustomizationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsResponse>, I>>(
    object: I,
  ): CPlayerGetPurchasedProfileCustomizationsResponse {
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsResponse();
    message.purchasedCustomizations =
      object.purchasedCustomizations?.map((e) =>
        CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization(): CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
  return { purchaseid: 0, customizationType: 0 };
}

export const CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization = {
  encode(
    message: CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.purchaseid !== 0) {
      writer.uint32(8).uint64(message.purchaseid);
    }
    if (message.customizationType !== 0) {
      writer.uint32(16).int32(message.customizationType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchaseid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.customizationType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
    return {
      purchaseid: isSet(object.purchaseid) ? Number(object.purchaseid) : 0,
      customizationType: isSet(object.customizationType)
        ? eProfileCustomizationTypeFromJSON(object.customizationType)
        : 0,
    };
  },

  toJSON(message: CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization): unknown {
    const obj: any = {};
    message.purchaseid !== undefined && (obj.purchaseid = Math.round(message.purchaseid));
    message.customizationType !== undefined &&
      (obj.customizationType = eProfileCustomizationTypeToJSON(message.customizationType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization>, I>>(
    base?: I,
  ): CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
    return CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization>, I>>(
    object: I,
  ): CPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization {
    const message = createBaseCPlayerGetPurchasedProfileCustomizationsResponse_PurchasedCustomization();
    message.purchaseid = object.purchaseid ?? 0;
    message.customizationType = object.customizationType ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest(): CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
  return { steamid: 0 };
}

export const CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest = {
  encode(
    message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest();
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

  fromJSON(object: any): CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest>, I>>(
    base?: I,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
    return CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest>, I>>(
    object: I,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest {
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse(): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
  return { purchasedCustomizations: [], upgradedCustomizations: [] };
}

export const CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse = {
  encode(
    message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.purchasedCustomizations) {
      CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.upgradedCustomizations) {
      CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purchasedCustomizations.push(
            CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.decode(
              reader,
              reader.uint32(),
            ),
          );
          break;
        case 2:
          message.upgradedCustomizations.push(
            CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.decode(
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

  fromJSON(object: any): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
    return {
      purchasedCustomizations: Array.isArray(object?.purchasedCustomizations)
        ? object.purchasedCustomizations.map((e: any) =>
          CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.fromJSON(e)
        )
        : [],
      upgradedCustomizations: Array.isArray(object?.upgradedCustomizations)
        ? object.upgradedCustomizations.map((e: any) =>
          CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse): unknown {
    const obj: any = {};
    if (message.purchasedCustomizations) {
      obj.purchasedCustomizations = message.purchasedCustomizations.map((e) =>
        e ? CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.toJSON(e) : undefined
      );
    } else {
      obj.purchasedCustomizations = [];
    }
    if (message.upgradedCustomizations) {
      obj.upgradedCustomizations = message.upgradedCustomizations.map((e) =>
        e ? CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.toJSON(e) : undefined
      );
    } else {
      obj.upgradedCustomizations = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse>, I>>(
    base?: I,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
    return CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse>, I>>(
    object: I,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse {
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse();
    message.purchasedCustomizations =
      object.purchasedCustomizations?.map((e) =>
        CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.fromPartial(e)
      ) || [];
    message.upgradedCustomizations =
      object.upgradedCustomizations?.map((e) =>
        CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization(): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
  return { customizationType: 0, count: 0 };
}

export const CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization = {
  encode(
    message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customizationType !== 0) {
      writer.uint32(8).int32(message.customizationType);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizationType = reader.int32() as any;
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
    return {
      customizationType: isSet(object.customizationType)
        ? eProfileCustomizationTypeFromJSON(object.customizationType)
        : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization): unknown {
    const obj: any = {};
    message.customizationType !== undefined &&
      (obj.customizationType = eProfileCustomizationTypeToJSON(message.customizationType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization>, I>,
  >(base?: I): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
    return CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization>, I>,
  >(object: I): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization {
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_PurchasedCustomization();
    message.customizationType = object.customizationType ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization(): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
  return { customizationType: 0, level: 0 };
}

export const CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization = {
  encode(
    message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customizationType !== 0) {
      writer.uint32(8).int32(message.customizationType);
    }
    if (message.level !== 0) {
      writer.uint32(16).uint32(message.level);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizationType = reader.int32() as any;
          break;
        case 2:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
    return {
      customizationType: isSet(object.customizationType)
        ? eProfileCustomizationTypeFromJSON(object.customizationType)
        : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization): unknown {
    const obj: any = {};
    message.customizationType !== undefined &&
      (obj.customizationType = eProfileCustomizationTypeToJSON(message.customizationType));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization>, I>,
  >(base?: I): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
    return CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization>, I>,
  >(object: I): CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization {
    const message = createBaseCPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse_UpgradedCustomization();
    message.customizationType = object.customizationType ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCPlayerGetProfileThemesAvailableRequest(): CPlayerGetProfileThemesAvailableRequest {
  return {};
}

export const CPlayerGetProfileThemesAvailableRequest = {
  encode(_: CPlayerGetProfileThemesAvailableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileThemesAvailableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileThemesAvailableRequest();
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

  fromJSON(_: any): CPlayerGetProfileThemesAvailableRequest {
    return {};
  },

  toJSON(_: CPlayerGetProfileThemesAvailableRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileThemesAvailableRequest>, I>>(
    base?: I,
  ): CPlayerGetProfileThemesAvailableRequest {
    return CPlayerGetProfileThemesAvailableRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileThemesAvailableRequest>, I>>(
    _: I,
  ): CPlayerGetProfileThemesAvailableRequest {
    const message = createBaseCPlayerGetProfileThemesAvailableRequest();
    return message;
  },
};

function createBaseCPlayerGetProfileThemesAvailableResponse(): CPlayerGetProfileThemesAvailableResponse {
  return { profileThemes: [] };
}

export const CPlayerGetProfileThemesAvailableResponse = {
  encode(message: CPlayerGetProfileThemesAvailableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profileThemes) {
      ProfileTheme.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetProfileThemesAvailableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetProfileThemesAvailableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileThemes.push(ProfileTheme.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetProfileThemesAvailableResponse {
    return {
      profileThemes: Array.isArray(object?.profileThemes)
        ? object.profileThemes.map((e: any) => ProfileTheme.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetProfileThemesAvailableResponse): unknown {
    const obj: any = {};
    if (message.profileThemes) {
      obj.profileThemes = message.profileThemes.map((e) => e ? ProfileTheme.toJSON(e) : undefined);
    } else {
      obj.profileThemes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetProfileThemesAvailableResponse>, I>>(
    base?: I,
  ): CPlayerGetProfileThemesAvailableResponse {
    return CPlayerGetProfileThemesAvailableResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetProfileThemesAvailableResponse>, I>>(
    object: I,
  ): CPlayerGetProfileThemesAvailableResponse {
    const message = createBaseCPlayerGetProfileThemesAvailableResponse();
    message.profileThemes = object.profileThemes?.map((e) => ProfileTheme.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerSetProfileThemeRequest(): CPlayerSetProfileThemeRequest {
  return { themeId: "" };
}

export const CPlayerSetProfileThemeRequest = {
  encode(message: CPlayerSetProfileThemeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.themeId !== "") {
      writer.uint32(10).string(message.themeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfileThemeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfileThemeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.themeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetProfileThemeRequest {
    return { themeId: isSet(object.themeId) ? String(object.themeId) : "" };
  },

  toJSON(message: CPlayerSetProfileThemeRequest): unknown {
    const obj: any = {};
    message.themeId !== undefined && (obj.themeId = message.themeId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfileThemeRequest>, I>>(base?: I): CPlayerSetProfileThemeRequest {
    return CPlayerSetProfileThemeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfileThemeRequest>, I>>(
    object: I,
  ): CPlayerSetProfileThemeRequest {
    const message = createBaseCPlayerSetProfileThemeRequest();
    message.themeId = object.themeId ?? "";
    return message;
  },
};

function createBaseCPlayerSetProfileThemeResponse(): CPlayerSetProfileThemeResponse {
  return {};
}

export const CPlayerSetProfileThemeResponse = {
  encode(_: CPlayerSetProfileThemeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfileThemeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfileThemeResponse();
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

  fromJSON(_: any): CPlayerSetProfileThemeResponse {
    return {};
  },

  toJSON(_: CPlayerSetProfileThemeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfileThemeResponse>, I>>(base?: I): CPlayerSetProfileThemeResponse {
    return CPlayerSetProfileThemeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfileThemeResponse>, I>>(_: I): CPlayerSetProfileThemeResponse {
    const message = createBaseCPlayerSetProfileThemeResponse();
    return message;
  },
};

function createBaseCPlayerSetProfilePreferencesRequest(): CPlayerSetProfilePreferencesRequest {
  return { profilePreferences: undefined };
}

export const CPlayerSetProfilePreferencesRequest = {
  encode(message: CPlayerSetProfilePreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profilePreferences !== undefined) {
      ProfilePreferences.encode(message.profilePreferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfilePreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfilePreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profilePreferences = ProfilePreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetProfilePreferencesRequest {
    return {
      profilePreferences: isSet(object.profilePreferences)
        ? ProfilePreferences.fromJSON(object.profilePreferences)
        : undefined,
    };
  },

  toJSON(message: CPlayerSetProfilePreferencesRequest): unknown {
    const obj: any = {};
    message.profilePreferences !== undefined && (obj.profilePreferences = message.profilePreferences
      ? ProfilePreferences.toJSON(message.profilePreferences)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfilePreferencesRequest>, I>>(
    base?: I,
  ): CPlayerSetProfilePreferencesRequest {
    return CPlayerSetProfilePreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfilePreferencesRequest>, I>>(
    object: I,
  ): CPlayerSetProfilePreferencesRequest {
    const message = createBaseCPlayerSetProfilePreferencesRequest();
    message.profilePreferences = (object.profilePreferences !== undefined && object.profilePreferences !== null)
      ? ProfilePreferences.fromPartial(object.profilePreferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetProfilePreferencesResponse(): CPlayerSetProfilePreferencesResponse {
  return {};
}

export const CPlayerSetProfilePreferencesResponse = {
  encode(_: CPlayerSetProfilePreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetProfilePreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetProfilePreferencesResponse();
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

  fromJSON(_: any): CPlayerSetProfilePreferencesResponse {
    return {};
  },

  toJSON(_: CPlayerSetProfilePreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetProfilePreferencesResponse>, I>>(
    base?: I,
  ): CPlayerSetProfilePreferencesResponse {
    return CPlayerSetProfilePreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetProfilePreferencesResponse>, I>>(
    _: I,
  ): CPlayerSetProfilePreferencesResponse {
    const message = createBaseCPlayerSetProfilePreferencesResponse();
    return message;
  },
};

function createBaseCPlayerPostStatusToFriendsRequest(): CPlayerPostStatusToFriendsRequest {
  return { appid: 0, statusText: "" };
}

export const CPlayerPostStatusToFriendsRequest = {
  encode(message: CPlayerPostStatusToFriendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.statusText !== "") {
      writer.uint32(18).string(message.statusText);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerPostStatusToFriendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerPostStatusToFriendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.statusText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerPostStatusToFriendsRequest {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      statusText: isSet(object.statusText) ? String(object.statusText) : "",
    };
  },

  toJSON(message: CPlayerPostStatusToFriendsRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.statusText !== undefined && (obj.statusText = message.statusText);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerPostStatusToFriendsRequest>, I>>(
    base?: I,
  ): CPlayerPostStatusToFriendsRequest {
    return CPlayerPostStatusToFriendsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerPostStatusToFriendsRequest>, I>>(
    object: I,
  ): CPlayerPostStatusToFriendsRequest {
    const message = createBaseCPlayerPostStatusToFriendsRequest();
    message.appid = object.appid ?? 0;
    message.statusText = object.statusText ?? "";
    return message;
  },
};

function createBaseCPlayerPostStatusToFriendsResponse(): CPlayerPostStatusToFriendsResponse {
  return {};
}

export const CPlayerPostStatusToFriendsResponse = {
  encode(_: CPlayerPostStatusToFriendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerPostStatusToFriendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerPostStatusToFriendsResponse();
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

  fromJSON(_: any): CPlayerPostStatusToFriendsResponse {
    return {};
  },

  toJSON(_: CPlayerPostStatusToFriendsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerPostStatusToFriendsResponse>, I>>(
    base?: I,
  ): CPlayerPostStatusToFriendsResponse {
    return CPlayerPostStatusToFriendsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerPostStatusToFriendsResponse>, I>>(
    _: I,
  ): CPlayerPostStatusToFriendsResponse {
    const message = createBaseCPlayerPostStatusToFriendsResponse();
    return message;
  },
};

function createBaseCPlayerGetPostedStatusRequest(): CPlayerGetPostedStatusRequest {
  return { steamid: 0, postid: 0 };
}

export const CPlayerGetPostedStatusRequest = {
  encode(message: CPlayerGetPostedStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(8).uint64(message.steamid);
    }
    if (message.postid !== 0) {
      writer.uint32(16).uint64(message.postid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPostedStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPostedStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.postid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPostedStatusRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      postid: isSet(object.postid) ? Number(object.postid) : 0,
    };
  },

  toJSON(message: CPlayerGetPostedStatusRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.postid !== undefined && (obj.postid = Math.round(message.postid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPostedStatusRequest>, I>>(base?: I): CPlayerGetPostedStatusRequest {
    return CPlayerGetPostedStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPostedStatusRequest>, I>>(
    object: I,
  ): CPlayerGetPostedStatusRequest {
    const message = createBaseCPlayerGetPostedStatusRequest();
    message.steamid = object.steamid ?? 0;
    message.postid = object.postid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPostedStatusResponse(): CPlayerGetPostedStatusResponse {
  return { accountid: 0, postid: 0, statusText: "", deleted: false, appid: 0 };
}

export const CPlayerGetPostedStatusResponse = {
  encode(message: CPlayerGetPostedStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.postid !== 0) {
      writer.uint32(16).uint64(message.postid);
    }
    if (message.statusText !== "") {
      writer.uint32(26).string(message.statusText);
    }
    if (message.deleted === true) {
      writer.uint32(32).bool(message.deleted);
    }
    if (message.appid !== 0) {
      writer.uint32(40).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPostedStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPostedStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.postid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.statusText = reader.string();
          break;
        case 4:
          message.deleted = reader.bool();
          break;
        case 5:
          message.appid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPostedStatusResponse {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      postid: isSet(object.postid) ? Number(object.postid) : 0,
      statusText: isSet(object.statusText) ? String(object.statusText) : "",
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
    };
  },

  toJSON(message: CPlayerGetPostedStatusResponse): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.postid !== undefined && (obj.postid = Math.round(message.postid));
    message.statusText !== undefined && (obj.statusText = message.statusText);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPostedStatusResponse>, I>>(base?: I): CPlayerGetPostedStatusResponse {
    return CPlayerGetPostedStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPostedStatusResponse>, I>>(
    object: I,
  ): CPlayerGetPostedStatusResponse {
    const message = createBaseCPlayerGetPostedStatusResponse();
    message.accountid = object.accountid ?? 0;
    message.postid = object.postid ?? 0;
    message.statusText = object.statusText ?? "";
    message.deleted = object.deleted ?? false;
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerDeletePostedStatusRequest(): CPlayerDeletePostedStatusRequest {
  return { postid: 0 };
}

export const CPlayerDeletePostedStatusRequest = {
  encode(message: CPlayerDeletePostedStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postid !== 0) {
      writer.uint32(8).uint64(message.postid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerDeletePostedStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerDeletePostedStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerDeletePostedStatusRequest {
    return { postid: isSet(object.postid) ? Number(object.postid) : 0 };
  },

  toJSON(message: CPlayerDeletePostedStatusRequest): unknown {
    const obj: any = {};
    message.postid !== undefined && (obj.postid = Math.round(message.postid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerDeletePostedStatusRequest>, I>>(
    base?: I,
  ): CPlayerDeletePostedStatusRequest {
    return CPlayerDeletePostedStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerDeletePostedStatusRequest>, I>>(
    object: I,
  ): CPlayerDeletePostedStatusRequest {
    const message = createBaseCPlayerDeletePostedStatusRequest();
    message.postid = object.postid ?? 0;
    return message;
  },
};

function createBaseCPlayerDeletePostedStatusResponse(): CPlayerDeletePostedStatusResponse {
  return {};
}

export const CPlayerDeletePostedStatusResponse = {
  encode(_: CPlayerDeletePostedStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerDeletePostedStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerDeletePostedStatusResponse();
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

  fromJSON(_: any): CPlayerDeletePostedStatusResponse {
    return {};
  },

  toJSON(_: CPlayerDeletePostedStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerDeletePostedStatusResponse>, I>>(
    base?: I,
  ): CPlayerDeletePostedStatusResponse {
    return CPlayerDeletePostedStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerDeletePostedStatusResponse>, I>>(
    _: I,
  ): CPlayerDeletePostedStatusResponse {
    const message = createBaseCPlayerDeletePostedStatusResponse();
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesRequest(): CPlayerGetLastPlayedTimesRequest {
  return { minLastPlayed: 0 };
}

export const CPlayerGetLastPlayedTimesRequest = {
  encode(message: CPlayerGetLastPlayedTimesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minLastPlayed !== 0) {
      writer.uint32(8).uint32(message.minLastPlayed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLastPlayed = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesRequest {
    return { minLastPlayed: isSet(object.minLastPlayed) ? Number(object.minLastPlayed) : 0 };
  },

  toJSON(message: CPlayerGetLastPlayedTimesRequest): unknown {
    const obj: any = {};
    message.minLastPlayed !== undefined && (obj.minLastPlayed = Math.round(message.minLastPlayed));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesRequest>, I>>(
    base?: I,
  ): CPlayerGetLastPlayedTimesRequest {
    return CPlayerGetLastPlayedTimesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesRequest>, I>>(
    object: I,
  ): CPlayerGetLastPlayedTimesRequest {
    const message = createBaseCPlayerGetLastPlayedTimesRequest();
    message.minLastPlayed = object.minLastPlayed ?? 0;
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesResponse(): CPlayerGetLastPlayedTimesResponse {
  return { games: [] };
}

export const CPlayerGetLastPlayedTimesResponse = {
  encode(message: CPlayerGetLastPlayedTimesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CPlayerGetLastPlayedTimesResponse_Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(CPlayerGetLastPlayedTimesResponse_Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesResponse {
    return {
      games: Array.isArray(object?.games)
        ? object.games.map((e: any) => CPlayerGetLastPlayedTimesResponse_Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetLastPlayedTimesResponse): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CPlayerGetLastPlayedTimesResponse_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesResponse>, I>>(
    base?: I,
  ): CPlayerGetLastPlayedTimesResponse {
    return CPlayerGetLastPlayedTimesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesResponse>, I>>(
    object: I,
  ): CPlayerGetLastPlayedTimesResponse {
    const message = createBaseCPlayerGetLastPlayedTimesResponse();
    message.games = object.games?.map((e) => CPlayerGetLastPlayedTimesResponse_Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerGetLastPlayedTimesResponse_Game(): CPlayerGetLastPlayedTimesResponse_Game {
  return {
    appid: 0,
    lastPlaytime: 0,
    playtime2weeks: 0,
    playtimeForever: 0,
    firstPlaytime: 0,
    playtimeWindowsForever: 0,
    playtimeMacForever: 0,
    playtimeLinuxForever: 0,
    firstWindowsPlaytime: 0,
    firstMacPlaytime: 0,
    firstLinuxPlaytime: 0,
    lastWindowsPlaytime: 0,
    lastMacPlaytime: 0,
    lastLinuxPlaytime: 0,
  };
}

export const CPlayerGetLastPlayedTimesResponse_Game = {
  encode(message: CPlayerGetLastPlayedTimesResponse_Game, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).int32(message.appid);
    }
    if (message.lastPlaytime !== 0) {
      writer.uint32(16).uint32(message.lastPlaytime);
    }
    if (message.playtime2weeks !== 0) {
      writer.uint32(24).int32(message.playtime2weeks);
    }
    if (message.playtimeForever !== 0) {
      writer.uint32(32).int32(message.playtimeForever);
    }
    if (message.firstPlaytime !== 0) {
      writer.uint32(40).uint32(message.firstPlaytime);
    }
    if (message.playtimeWindowsForever !== 0) {
      writer.uint32(48).int32(message.playtimeWindowsForever);
    }
    if (message.playtimeMacForever !== 0) {
      writer.uint32(56).int32(message.playtimeMacForever);
    }
    if (message.playtimeLinuxForever !== 0) {
      writer.uint32(64).int32(message.playtimeLinuxForever);
    }
    if (message.firstWindowsPlaytime !== 0) {
      writer.uint32(72).uint32(message.firstWindowsPlaytime);
    }
    if (message.firstMacPlaytime !== 0) {
      writer.uint32(80).uint32(message.firstMacPlaytime);
    }
    if (message.firstLinuxPlaytime !== 0) {
      writer.uint32(88).uint32(message.firstLinuxPlaytime);
    }
    if (message.lastWindowsPlaytime !== 0) {
      writer.uint32(96).uint32(message.lastWindowsPlaytime);
    }
    if (message.lastMacPlaytime !== 0) {
      writer.uint32(104).uint32(message.lastMacPlaytime);
    }
    if (message.lastLinuxPlaytime !== 0) {
      writer.uint32(112).uint32(message.lastLinuxPlaytime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetLastPlayedTimesResponse_Game {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetLastPlayedTimesResponse_Game();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.int32();
          break;
        case 2:
          message.lastPlaytime = reader.uint32();
          break;
        case 3:
          message.playtime2weeks = reader.int32();
          break;
        case 4:
          message.playtimeForever = reader.int32();
          break;
        case 5:
          message.firstPlaytime = reader.uint32();
          break;
        case 6:
          message.playtimeWindowsForever = reader.int32();
          break;
        case 7:
          message.playtimeMacForever = reader.int32();
          break;
        case 8:
          message.playtimeLinuxForever = reader.int32();
          break;
        case 9:
          message.firstWindowsPlaytime = reader.uint32();
          break;
        case 10:
          message.firstMacPlaytime = reader.uint32();
          break;
        case 11:
          message.firstLinuxPlaytime = reader.uint32();
          break;
        case 12:
          message.lastWindowsPlaytime = reader.uint32();
          break;
        case 13:
          message.lastMacPlaytime = reader.uint32();
          break;
        case 14:
          message.lastLinuxPlaytime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetLastPlayedTimesResponse_Game {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      lastPlaytime: isSet(object.lastPlaytime) ? Number(object.lastPlaytime) : 0,
      playtime2weeks: isSet(object.playtime2weeks) ? Number(object.playtime2weeks) : 0,
      playtimeForever: isSet(object.playtimeForever) ? Number(object.playtimeForever) : 0,
      firstPlaytime: isSet(object.firstPlaytime) ? Number(object.firstPlaytime) : 0,
      playtimeWindowsForever: isSet(object.playtimeWindowsForever) ? Number(object.playtimeWindowsForever) : 0,
      playtimeMacForever: isSet(object.playtimeMacForever) ? Number(object.playtimeMacForever) : 0,
      playtimeLinuxForever: isSet(object.playtimeLinuxForever) ? Number(object.playtimeLinuxForever) : 0,
      firstWindowsPlaytime: isSet(object.firstWindowsPlaytime) ? Number(object.firstWindowsPlaytime) : 0,
      firstMacPlaytime: isSet(object.firstMacPlaytime) ? Number(object.firstMacPlaytime) : 0,
      firstLinuxPlaytime: isSet(object.firstLinuxPlaytime) ? Number(object.firstLinuxPlaytime) : 0,
      lastWindowsPlaytime: isSet(object.lastWindowsPlaytime) ? Number(object.lastWindowsPlaytime) : 0,
      lastMacPlaytime: isSet(object.lastMacPlaytime) ? Number(object.lastMacPlaytime) : 0,
      lastLinuxPlaytime: isSet(object.lastLinuxPlaytime) ? Number(object.lastLinuxPlaytime) : 0,
    };
  },

  toJSON(message: CPlayerGetLastPlayedTimesResponse_Game): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.lastPlaytime !== undefined && (obj.lastPlaytime = Math.round(message.lastPlaytime));
    message.playtime2weeks !== undefined && (obj.playtime2weeks = Math.round(message.playtime2weeks));
    message.playtimeForever !== undefined && (obj.playtimeForever = Math.round(message.playtimeForever));
    message.firstPlaytime !== undefined && (obj.firstPlaytime = Math.round(message.firstPlaytime));
    message.playtimeWindowsForever !== undefined &&
      (obj.playtimeWindowsForever = Math.round(message.playtimeWindowsForever));
    message.playtimeMacForever !== undefined && (obj.playtimeMacForever = Math.round(message.playtimeMacForever));
    message.playtimeLinuxForever !== undefined && (obj.playtimeLinuxForever = Math.round(message.playtimeLinuxForever));
    message.firstWindowsPlaytime !== undefined && (obj.firstWindowsPlaytime = Math.round(message.firstWindowsPlaytime));
    message.firstMacPlaytime !== undefined && (obj.firstMacPlaytime = Math.round(message.firstMacPlaytime));
    message.firstLinuxPlaytime !== undefined && (obj.firstLinuxPlaytime = Math.round(message.firstLinuxPlaytime));
    message.lastWindowsPlaytime !== undefined && (obj.lastWindowsPlaytime = Math.round(message.lastWindowsPlaytime));
    message.lastMacPlaytime !== undefined && (obj.lastMacPlaytime = Math.round(message.lastMacPlaytime));
    message.lastLinuxPlaytime !== undefined && (obj.lastLinuxPlaytime = Math.round(message.lastLinuxPlaytime));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesResponse_Game>, I>>(
    base?: I,
  ): CPlayerGetLastPlayedTimesResponse_Game {
    return CPlayerGetLastPlayedTimesResponse_Game.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetLastPlayedTimesResponse_Game>, I>>(
    object: I,
  ): CPlayerGetLastPlayedTimesResponse_Game {
    const message = createBaseCPlayerGetLastPlayedTimesResponse_Game();
    message.appid = object.appid ?? 0;
    message.lastPlaytime = object.lastPlaytime ?? 0;
    message.playtime2weeks = object.playtime2weeks ?? 0;
    message.playtimeForever = object.playtimeForever ?? 0;
    message.firstPlaytime = object.firstPlaytime ?? 0;
    message.playtimeWindowsForever = object.playtimeWindowsForever ?? 0;
    message.playtimeMacForever = object.playtimeMacForever ?? 0;
    message.playtimeLinuxForever = object.playtimeLinuxForever ?? 0;
    message.firstWindowsPlaytime = object.firstWindowsPlaytime ?? 0;
    message.firstMacPlaytime = object.firstMacPlaytime ?? 0;
    message.firstLinuxPlaytime = object.firstLinuxPlaytime ?? 0;
    message.lastWindowsPlaytime = object.lastWindowsPlaytime ?? 0;
    message.lastMacPlaytime = object.lastMacPlaytime ?? 0;
    message.lastLinuxPlaytime = object.lastLinuxPlaytime ?? 0;
    return message;
  },
};

function createBaseCPlayerGetTimeSSAAcceptedRequest(): CPlayerGetTimeSSAAcceptedRequest {
  return {};
}

export const CPlayerGetTimeSSAAcceptedRequest = {
  encode(_: CPlayerGetTimeSSAAcceptedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTimeSSAAcceptedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTimeSSAAcceptedRequest();
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

  fromJSON(_: any): CPlayerGetTimeSSAAcceptedRequest {
    return {};
  },

  toJSON(_: CPlayerGetTimeSSAAcceptedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTimeSSAAcceptedRequest>, I>>(
    base?: I,
  ): CPlayerGetTimeSSAAcceptedRequest {
    return CPlayerGetTimeSSAAcceptedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTimeSSAAcceptedRequest>, I>>(
    _: I,
  ): CPlayerGetTimeSSAAcceptedRequest {
    const message = createBaseCPlayerGetTimeSSAAcceptedRequest();
    return message;
  },
};

function createBaseCPlayerGetTimeSSAAcceptedResponse(): CPlayerGetTimeSSAAcceptedResponse {
  return { timeSsaAccepted: 0, timeSsaUpdated: 0, timeChinassaAccepted: 0 };
}

export const CPlayerGetTimeSSAAcceptedResponse = {
  encode(message: CPlayerGetTimeSSAAcceptedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeSsaAccepted !== 0) {
      writer.uint32(8).uint32(message.timeSsaAccepted);
    }
    if (message.timeSsaUpdated !== 0) {
      writer.uint32(16).uint32(message.timeSsaUpdated);
    }
    if (message.timeChinassaAccepted !== 0) {
      writer.uint32(24).uint32(message.timeChinassaAccepted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTimeSSAAcceptedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTimeSSAAcceptedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeSsaAccepted = reader.uint32();
          break;
        case 2:
          message.timeSsaUpdated = reader.uint32();
          break;
        case 3:
          message.timeChinassaAccepted = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetTimeSSAAcceptedResponse {
    return {
      timeSsaAccepted: isSet(object.timeSsaAccepted) ? Number(object.timeSsaAccepted) : 0,
      timeSsaUpdated: isSet(object.timeSsaUpdated) ? Number(object.timeSsaUpdated) : 0,
      timeChinassaAccepted: isSet(object.timeChinassaAccepted) ? Number(object.timeChinassaAccepted) : 0,
    };
  },

  toJSON(message: CPlayerGetTimeSSAAcceptedResponse): unknown {
    const obj: any = {};
    message.timeSsaAccepted !== undefined && (obj.timeSsaAccepted = Math.round(message.timeSsaAccepted));
    message.timeSsaUpdated !== undefined && (obj.timeSsaUpdated = Math.round(message.timeSsaUpdated));
    message.timeChinassaAccepted !== undefined && (obj.timeChinassaAccepted = Math.round(message.timeChinassaAccepted));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTimeSSAAcceptedResponse>, I>>(
    base?: I,
  ): CPlayerGetTimeSSAAcceptedResponse {
    return CPlayerGetTimeSSAAcceptedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTimeSSAAcceptedResponse>, I>>(
    object: I,
  ): CPlayerGetTimeSSAAcceptedResponse {
    const message = createBaseCPlayerGetTimeSSAAcceptedResponse();
    message.timeSsaAccepted = object.timeSsaAccepted ?? 0;
    message.timeSsaUpdated = object.timeSsaUpdated ?? 0;
    message.timeChinassaAccepted = object.timeChinassaAccepted ?? 0;
    return message;
  },
};

function createBaseCPlayerAcceptSSARequest(): CPlayerAcceptSSARequest {
  return { agreementType: 0, timeSignedUtc: 0 };
}

export const CPlayerAcceptSSARequest = {
  encode(message: CPlayerAcceptSSARequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.agreementType !== 0) {
      writer.uint32(8).int32(message.agreementType);
    }
    if (message.timeSignedUtc !== 0) {
      writer.uint32(16).uint32(message.timeSignedUtc);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAcceptSSARequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAcceptSSARequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agreementType = reader.int32() as any;
          break;
        case 2:
          message.timeSignedUtc = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerAcceptSSARequest {
    return {
      agreementType: isSet(object.agreementType) ? eAgreementTypeFromJSON(object.agreementType) : 0,
      timeSignedUtc: isSet(object.timeSignedUtc) ? Number(object.timeSignedUtc) : 0,
    };
  },

  toJSON(message: CPlayerAcceptSSARequest): unknown {
    const obj: any = {};
    message.agreementType !== undefined && (obj.agreementType = eAgreementTypeToJSON(message.agreementType));
    message.timeSignedUtc !== undefined && (obj.timeSignedUtc = Math.round(message.timeSignedUtc));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerAcceptSSARequest>, I>>(base?: I): CPlayerAcceptSSARequest {
    return CPlayerAcceptSSARequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerAcceptSSARequest>, I>>(object: I): CPlayerAcceptSSARequest {
    const message = createBaseCPlayerAcceptSSARequest();
    message.agreementType = object.agreementType ?? 0;
    message.timeSignedUtc = object.timeSignedUtc ?? 0;
    return message;
  },
};

function createBaseCPlayerAcceptSSAResponse(): CPlayerAcceptSSAResponse {
  return {};
}

export const CPlayerAcceptSSAResponse = {
  encode(_: CPlayerAcceptSSAResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAcceptSSAResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAcceptSSAResponse();
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

  fromJSON(_: any): CPlayerAcceptSSAResponse {
    return {};
  },

  toJSON(_: CPlayerAcceptSSAResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerAcceptSSAResponse>, I>>(base?: I): CPlayerAcceptSSAResponse {
    return CPlayerAcceptSSAResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerAcceptSSAResponse>, I>>(_: I): CPlayerAcceptSSAResponse {
    const message = createBaseCPlayerAcceptSSAResponse();
    return message;
  },
};

function createBaseCPlayerGetNicknameListRequest(): CPlayerGetNicknameListRequest {
  return {};
}

export const CPlayerGetNicknameListRequest = {
  encode(_: CPlayerGetNicknameListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListRequest();
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

  fromJSON(_: any): CPlayerGetNicknameListRequest {
    return {};
  },

  toJSON(_: CPlayerGetNicknameListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetNicknameListRequest>, I>>(base?: I): CPlayerGetNicknameListRequest {
    return CPlayerGetNicknameListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetNicknameListRequest>, I>>(_: I): CPlayerGetNicknameListRequest {
    const message = createBaseCPlayerGetNicknameListRequest();
    return message;
  },
};

function createBaseCPlayerGetNicknameListResponse(): CPlayerGetNicknameListResponse {
  return { nicknames: [] };
}

export const CPlayerGetNicknameListResponse = {
  encode(message: CPlayerGetNicknameListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nicknames) {
      CPlayerGetNicknameListResponse_PlayerNickname.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nicknames.push(CPlayerGetNicknameListResponse_PlayerNickname.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNicknameListResponse {
    return {
      nicknames: Array.isArray(object?.nicknames)
        ? object.nicknames.map((e: any) => CPlayerGetNicknameListResponse_PlayerNickname.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetNicknameListResponse): unknown {
    const obj: any = {};
    if (message.nicknames) {
      obj.nicknames = message.nicknames.map((e) =>
        e ? CPlayerGetNicknameListResponse_PlayerNickname.toJSON(e) : undefined
      );
    } else {
      obj.nicknames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetNicknameListResponse>, I>>(base?: I): CPlayerGetNicknameListResponse {
    return CPlayerGetNicknameListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetNicknameListResponse>, I>>(
    object: I,
  ): CPlayerGetNicknameListResponse {
    const message = createBaseCPlayerGetNicknameListResponse();
    message.nicknames = object.nicknames?.map((e) => CPlayerGetNicknameListResponse_PlayerNickname.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCPlayerGetNicknameListResponse_PlayerNickname(): CPlayerGetNicknameListResponse_PlayerNickname {
  return { accountid: 0, nickname: "" };
}

export const CPlayerGetNicknameListResponse_PlayerNickname = {
  encode(message: CPlayerGetNicknameListResponse_PlayerNickname, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNicknameListResponse_PlayerNickname {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNicknameListResponse_PlayerNickname();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.fixed32();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNicknameListResponse_PlayerNickname {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
    };
  },

  toJSON(message: CPlayerGetNicknameListResponse_PlayerNickname): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetNicknameListResponse_PlayerNickname>, I>>(
    base?: I,
  ): CPlayerGetNicknameListResponse_PlayerNickname {
    return CPlayerGetNicknameListResponse_PlayerNickname.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetNicknameListResponse_PlayerNickname>, I>>(
    object: I,
  ): CPlayerGetNicknameListResponse_PlayerNickname {
    const message = createBaseCPlayerGetNicknameListResponse_PlayerNickname();
    message.accountid = object.accountid ?? 0;
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseCPlayerGetPerFriendPreferencesRequest(): CPlayerGetPerFriendPreferencesRequest {
  return {};
}

export const CPlayerGetPerFriendPreferencesRequest = {
  encode(_: CPlayerGetPerFriendPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPerFriendPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPerFriendPreferencesRequest();
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

  fromJSON(_: any): CPlayerGetPerFriendPreferencesRequest {
    return {};
  },

  toJSON(_: CPlayerGetPerFriendPreferencesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPerFriendPreferencesRequest>, I>>(
    base?: I,
  ): CPlayerGetPerFriendPreferencesRequest {
    return CPlayerGetPerFriendPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPerFriendPreferencesRequest>, I>>(
    _: I,
  ): CPlayerGetPerFriendPreferencesRequest {
    const message = createBaseCPlayerGetPerFriendPreferencesRequest();
    return message;
  },
};

function createBasePerFriendPreferences(): PerFriendPreferences {
  return {
    accountid: 0,
    nickname: "",
    notificationsShowingame: 0,
    notificationsShowonline: 0,
    notificationsShowmessages: 0,
    soundsShowingame: 0,
    soundsShowonline: 0,
    soundsShowmessages: 0,
    notificationsSendmobile: 0,
  };
}

export const PerFriendPreferences = {
  encode(message: PerFriendPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.notificationsShowingame !== 0) {
      writer.uint32(24).int32(message.notificationsShowingame);
    }
    if (message.notificationsShowonline !== 0) {
      writer.uint32(32).int32(message.notificationsShowonline);
    }
    if (message.notificationsShowmessages !== 0) {
      writer.uint32(40).int32(message.notificationsShowmessages);
    }
    if (message.soundsShowingame !== 0) {
      writer.uint32(48).int32(message.soundsShowingame);
    }
    if (message.soundsShowonline !== 0) {
      writer.uint32(56).int32(message.soundsShowonline);
    }
    if (message.soundsShowmessages !== 0) {
      writer.uint32(64).int32(message.soundsShowmessages);
    }
    if (message.notificationsSendmobile !== 0) {
      writer.uint32(72).int32(message.notificationsSendmobile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerFriendPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerFriendPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.fixed32();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.notificationsShowingame = reader.int32() as any;
          break;
        case 4:
          message.notificationsShowonline = reader.int32() as any;
          break;
        case 5:
          message.notificationsShowmessages = reader.int32() as any;
          break;
        case 6:
          message.soundsShowingame = reader.int32() as any;
          break;
        case 7:
          message.soundsShowonline = reader.int32() as any;
          break;
        case 8:
          message.soundsShowmessages = reader.int32() as any;
          break;
        case 9:
          message.notificationsSendmobile = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerFriendPreferences {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      notificationsShowingame: isSet(object.notificationsShowingame)
        ? eNotificationSettingFromJSON(object.notificationsShowingame)
        : 0,
      notificationsShowonline: isSet(object.notificationsShowonline)
        ? eNotificationSettingFromJSON(object.notificationsShowonline)
        : 0,
      notificationsShowmessages: isSet(object.notificationsShowmessages)
        ? eNotificationSettingFromJSON(object.notificationsShowmessages)
        : 0,
      soundsShowingame: isSet(object.soundsShowingame) ? eNotificationSettingFromJSON(object.soundsShowingame) : 0,
      soundsShowonline: isSet(object.soundsShowonline) ? eNotificationSettingFromJSON(object.soundsShowonline) : 0,
      soundsShowmessages: isSet(object.soundsShowmessages)
        ? eNotificationSettingFromJSON(object.soundsShowmessages)
        : 0,
      notificationsSendmobile: isSet(object.notificationsSendmobile)
        ? eNotificationSettingFromJSON(object.notificationsSendmobile)
        : 0,
    };
  },

  toJSON(message: PerFriendPreferences): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.notificationsShowingame !== undefined &&
      (obj.notificationsShowingame = eNotificationSettingToJSON(message.notificationsShowingame));
    message.notificationsShowonline !== undefined &&
      (obj.notificationsShowonline = eNotificationSettingToJSON(message.notificationsShowonline));
    message.notificationsShowmessages !== undefined &&
      (obj.notificationsShowmessages = eNotificationSettingToJSON(message.notificationsShowmessages));
    message.soundsShowingame !== undefined &&
      (obj.soundsShowingame = eNotificationSettingToJSON(message.soundsShowingame));
    message.soundsShowonline !== undefined &&
      (obj.soundsShowonline = eNotificationSettingToJSON(message.soundsShowonline));
    message.soundsShowmessages !== undefined &&
      (obj.soundsShowmessages = eNotificationSettingToJSON(message.soundsShowmessages));
    message.notificationsSendmobile !== undefined &&
      (obj.notificationsSendmobile = eNotificationSettingToJSON(message.notificationsSendmobile));
    return obj;
  },

  create<I extends Exact<DeepPartial<PerFriendPreferences>, I>>(base?: I): PerFriendPreferences {
    return PerFriendPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PerFriendPreferences>, I>>(object: I): PerFriendPreferences {
    const message = createBasePerFriendPreferences();
    message.accountid = object.accountid ?? 0;
    message.nickname = object.nickname ?? "";
    message.notificationsShowingame = object.notificationsShowingame ?? 0;
    message.notificationsShowonline = object.notificationsShowonline ?? 0;
    message.notificationsShowmessages = object.notificationsShowmessages ?? 0;
    message.soundsShowingame = object.soundsShowingame ?? 0;
    message.soundsShowonline = object.soundsShowonline ?? 0;
    message.soundsShowmessages = object.soundsShowmessages ?? 0;
    message.notificationsSendmobile = object.notificationsSendmobile ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPerFriendPreferencesResponse(): CPlayerGetPerFriendPreferencesResponse {
  return { preferences: [] };
}

export const CPlayerGetPerFriendPreferencesResponse = {
  encode(message: CPlayerGetPerFriendPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.preferences) {
      PerFriendPreferences.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPerFriendPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPerFriendPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences.push(PerFriendPreferences.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPerFriendPreferencesResponse {
    return {
      preferences: Array.isArray(object?.preferences)
        ? object.preferences.map((e: any) => PerFriendPreferences.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerGetPerFriendPreferencesResponse): unknown {
    const obj: any = {};
    if (message.preferences) {
      obj.preferences = message.preferences.map((e) => e ? PerFriendPreferences.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPerFriendPreferencesResponse>, I>>(
    base?: I,
  ): CPlayerGetPerFriendPreferencesResponse {
    return CPlayerGetPerFriendPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPerFriendPreferencesResponse>, I>>(
    object: I,
  ): CPlayerGetPerFriendPreferencesResponse {
    const message = createBaseCPlayerGetPerFriendPreferencesResponse();
    message.preferences = object.preferences?.map((e) => PerFriendPreferences.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerSetPerFriendPreferencesRequest(): CPlayerSetPerFriendPreferencesRequest {
  return { preferences: undefined };
}

export const CPlayerSetPerFriendPreferencesRequest = {
  encode(message: CPlayerSetPerFriendPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      PerFriendPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetPerFriendPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetPerFriendPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = PerFriendPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetPerFriendPreferencesRequest {
    return { preferences: isSet(object.preferences) ? PerFriendPreferences.fromJSON(object.preferences) : undefined };
  },

  toJSON(message: CPlayerSetPerFriendPreferencesRequest): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? PerFriendPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetPerFriendPreferencesRequest>, I>>(
    base?: I,
  ): CPlayerSetPerFriendPreferencesRequest {
    return CPlayerSetPerFriendPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetPerFriendPreferencesRequest>, I>>(
    object: I,
  ): CPlayerSetPerFriendPreferencesRequest {
    const message = createBaseCPlayerSetPerFriendPreferencesRequest();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? PerFriendPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetPerFriendPreferencesResponse(): CPlayerSetPerFriendPreferencesResponse {
  return {};
}

export const CPlayerSetPerFriendPreferencesResponse = {
  encode(_: CPlayerSetPerFriendPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetPerFriendPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetPerFriendPreferencesResponse();
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

  fromJSON(_: any): CPlayerSetPerFriendPreferencesResponse {
    return {};
  },

  toJSON(_: CPlayerSetPerFriendPreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetPerFriendPreferencesResponse>, I>>(
    base?: I,
  ): CPlayerSetPerFriendPreferencesResponse {
    return CPlayerSetPerFriendPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetPerFriendPreferencesResponse>, I>>(
    _: I,
  ): CPlayerSetPerFriendPreferencesResponse {
    const message = createBaseCPlayerSetPerFriendPreferencesResponse();
    return message;
  },
};

function createBaseCPlayerAddFriendRequest(): CPlayerAddFriendRequest {
  return { steamid: 0 };
}

export const CPlayerAddFriendRequest = {
  encode(message: CPlayerAddFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAddFriendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAddFriendRequest();
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

  fromJSON(object: any): CPlayerAddFriendRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CPlayerAddFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerAddFriendRequest>, I>>(base?: I): CPlayerAddFriendRequest {
    return CPlayerAddFriendRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerAddFriendRequest>, I>>(object: I): CPlayerAddFriendRequest {
    const message = createBaseCPlayerAddFriendRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCPlayerAddFriendResponse(): CPlayerAddFriendResponse {
  return { inviteSent: false, friendRelationship: 0, result: 0 };
}

export const CPlayerAddFriendResponse = {
  encode(message: CPlayerAddFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteSent === true) {
      writer.uint32(8).bool(message.inviteSent);
    }
    if (message.friendRelationship !== 0) {
      writer.uint32(16).uint32(message.friendRelationship);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerAddFriendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerAddFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteSent = reader.bool();
          break;
        case 2:
          message.friendRelationship = reader.uint32();
          break;
        case 3:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerAddFriendResponse {
    return {
      inviteSent: isSet(object.inviteSent) ? Boolean(object.inviteSent) : false,
      friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(message: CPlayerAddFriendResponse): unknown {
    const obj: any = {};
    message.inviteSent !== undefined && (obj.inviteSent = message.inviteSent);
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerAddFriendResponse>, I>>(base?: I): CPlayerAddFriendResponse {
    return CPlayerAddFriendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerAddFriendResponse>, I>>(object: I): CPlayerAddFriendResponse {
    const message = createBaseCPlayerAddFriendResponse();
    message.inviteSent = object.inviteSent ?? false;
    message.friendRelationship = object.friendRelationship ?? 0;
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseCPlayerRemoveFriendRequest(): CPlayerRemoveFriendRequest {
  return { steamid: 0 };
}

export const CPlayerRemoveFriendRequest = {
  encode(message: CPlayerRemoveFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRemoveFriendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRemoveFriendRequest();
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

  fromJSON(object: any): CPlayerRemoveFriendRequest {
    return { steamid: isSet(object.steamid) ? Number(object.steamid) : 0 };
  },

  toJSON(message: CPlayerRemoveFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerRemoveFriendRequest>, I>>(base?: I): CPlayerRemoveFriendRequest {
    return CPlayerRemoveFriendRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerRemoveFriendRequest>, I>>(object: I): CPlayerRemoveFriendRequest {
    const message = createBaseCPlayerRemoveFriendRequest();
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCPlayerRemoveFriendResponse(): CPlayerRemoveFriendResponse {
  return { friendRelationship: 0 };
}

export const CPlayerRemoveFriendResponse = {
  encode(message: CPlayerRemoveFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRelationship !== 0) {
      writer.uint32(8).uint32(message.friendRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRemoveFriendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRemoveFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friendRelationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerRemoveFriendResponse {
    return { friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0 };
  },

  toJSON(message: CPlayerRemoveFriendResponse): unknown {
    const obj: any = {};
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerRemoveFriendResponse>, I>>(base?: I): CPlayerRemoveFriendResponse {
    return CPlayerRemoveFriendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerRemoveFriendResponse>, I>>(object: I): CPlayerRemoveFriendResponse {
    const message = createBaseCPlayerRemoveFriendResponse();
    message.friendRelationship = object.friendRelationship ?? 0;
    return message;
  },
};

function createBaseCPlayerIgnoreFriendRequest(): CPlayerIgnoreFriendRequest {
  return { steamid: 0, unignore: false };
}

export const CPlayerIgnoreFriendRequest = {
  encode(message: CPlayerIgnoreFriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.unignore === true) {
      writer.uint32(16).bool(message.unignore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIgnoreFriendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIgnoreFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.unignore = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerIgnoreFriendRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      unignore: isSet(object.unignore) ? Boolean(object.unignore) : false,
    };
  },

  toJSON(message: CPlayerIgnoreFriendRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.unignore !== undefined && (obj.unignore = message.unignore);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerIgnoreFriendRequest>, I>>(base?: I): CPlayerIgnoreFriendRequest {
    return CPlayerIgnoreFriendRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerIgnoreFriendRequest>, I>>(object: I): CPlayerIgnoreFriendRequest {
    const message = createBaseCPlayerIgnoreFriendRequest();
    message.steamid = object.steamid ?? 0;
    message.unignore = object.unignore ?? false;
    return message;
  },
};

function createBaseCPlayerIgnoreFriendResponse(): CPlayerIgnoreFriendResponse {
  return { friendRelationship: 0 };
}

export const CPlayerIgnoreFriendResponse = {
  encode(message: CPlayerIgnoreFriendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRelationship !== 0) {
      writer.uint32(8).uint32(message.friendRelationship);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerIgnoreFriendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerIgnoreFriendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friendRelationship = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerIgnoreFriendResponse {
    return { friendRelationship: isSet(object.friendRelationship) ? Number(object.friendRelationship) : 0 };
  },

  toJSON(message: CPlayerIgnoreFriendResponse): unknown {
    const obj: any = {};
    message.friendRelationship !== undefined && (obj.friendRelationship = Math.round(message.friendRelationship));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerIgnoreFriendResponse>, I>>(base?: I): CPlayerIgnoreFriendResponse {
    return CPlayerIgnoreFriendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerIgnoreFriendResponse>, I>>(object: I): CPlayerIgnoreFriendResponse {
    const message = createBaseCPlayerIgnoreFriendResponse();
    message.friendRelationship = object.friendRelationship ?? 0;
    return message;
  },
};

function createBaseCPlayerGetCommunityPreferencesRequest(): CPlayerGetCommunityPreferencesRequest {
  return {};
}

export const CPlayerGetCommunityPreferencesRequest = {
  encode(_: CPlayerGetCommunityPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetCommunityPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetCommunityPreferencesRequest();
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

  fromJSON(_: any): CPlayerGetCommunityPreferencesRequest {
    return {};
  },

  toJSON(_: CPlayerGetCommunityPreferencesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetCommunityPreferencesRequest>, I>>(
    base?: I,
  ): CPlayerGetCommunityPreferencesRequest {
    return CPlayerGetCommunityPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetCommunityPreferencesRequest>, I>>(
    _: I,
  ): CPlayerGetCommunityPreferencesRequest {
    const message = createBaseCPlayerGetCommunityPreferencesRequest();
    return message;
  },
};

function createBaseCPlayerCommunityPreferences(): CPlayerCommunityPreferences {
  return {
    hideAdultContentViolence: false,
    hideAdultContentSex: false,
    parenthesizeNicknames: false,
    textFilterSetting: 0,
    textFilterIgnoreFriends: false,
    textFilterWordsRevision: 0,
    timestampUpdated: 0,
  };
}

export const CPlayerCommunityPreferences = {
  encode(message: CPlayerCommunityPreferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hideAdultContentViolence === true) {
      writer.uint32(8).bool(message.hideAdultContentViolence);
    }
    if (message.hideAdultContentSex === true) {
      writer.uint32(16).bool(message.hideAdultContentSex);
    }
    if (message.parenthesizeNicknames === true) {
      writer.uint32(32).bool(message.parenthesizeNicknames);
    }
    if (message.textFilterSetting !== 0) {
      writer.uint32(40).int32(message.textFilterSetting);
    }
    if (message.textFilterIgnoreFriends === true) {
      writer.uint32(48).bool(message.textFilterIgnoreFriends);
    }
    if (message.textFilterWordsRevision !== 0) {
      writer.uint32(56).uint32(message.textFilterWordsRevision);
    }
    if (message.timestampUpdated !== 0) {
      writer.uint32(24).uint32(message.timestampUpdated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerCommunityPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerCommunityPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hideAdultContentViolence = reader.bool();
          break;
        case 2:
          message.hideAdultContentSex = reader.bool();
          break;
        case 4:
          message.parenthesizeNicknames = reader.bool();
          break;
        case 5:
          message.textFilterSetting = reader.int32() as any;
          break;
        case 6:
          message.textFilterIgnoreFriends = reader.bool();
          break;
        case 7:
          message.textFilterWordsRevision = reader.uint32();
          break;
        case 3:
          message.timestampUpdated = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerCommunityPreferences {
    return {
      hideAdultContentViolence: isSet(object.hideAdultContentViolence)
        ? Boolean(object.hideAdultContentViolence)
        : false,
      hideAdultContentSex: isSet(object.hideAdultContentSex) ? Boolean(object.hideAdultContentSex) : false,
      parenthesizeNicknames: isSet(object.parenthesizeNicknames) ? Boolean(object.parenthesizeNicknames) : false,
      textFilterSetting: isSet(object.textFilterSetting) ? eTextFilterSettingFromJSON(object.textFilterSetting) : 0,
      textFilterIgnoreFriends: isSet(object.textFilterIgnoreFriends) ? Boolean(object.textFilterIgnoreFriends) : false,
      textFilterWordsRevision: isSet(object.textFilterWordsRevision) ? Number(object.textFilterWordsRevision) : 0,
      timestampUpdated: isSet(object.timestampUpdated) ? Number(object.timestampUpdated) : 0,
    };
  },

  toJSON(message: CPlayerCommunityPreferences): unknown {
    const obj: any = {};
    message.hideAdultContentViolence !== undefined && (obj.hideAdultContentViolence = message.hideAdultContentViolence);
    message.hideAdultContentSex !== undefined && (obj.hideAdultContentSex = message.hideAdultContentSex);
    message.parenthesizeNicknames !== undefined && (obj.parenthesizeNicknames = message.parenthesizeNicknames);
    message.textFilterSetting !== undefined &&
      (obj.textFilterSetting = eTextFilterSettingToJSON(message.textFilterSetting));
    message.textFilterIgnoreFriends !== undefined && (obj.textFilterIgnoreFriends = message.textFilterIgnoreFriends);
    message.textFilterWordsRevision !== undefined &&
      (obj.textFilterWordsRevision = Math.round(message.textFilterWordsRevision));
    message.timestampUpdated !== undefined && (obj.timestampUpdated = Math.round(message.timestampUpdated));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerCommunityPreferences>, I>>(base?: I): CPlayerCommunityPreferences {
    return CPlayerCommunityPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerCommunityPreferences>, I>>(object: I): CPlayerCommunityPreferences {
    const message = createBaseCPlayerCommunityPreferences();
    message.hideAdultContentViolence = object.hideAdultContentViolence ?? false;
    message.hideAdultContentSex = object.hideAdultContentSex ?? false;
    message.parenthesizeNicknames = object.parenthesizeNicknames ?? false;
    message.textFilterSetting = object.textFilterSetting ?? 0;
    message.textFilterIgnoreFriends = object.textFilterIgnoreFriends ?? false;
    message.textFilterWordsRevision = object.textFilterWordsRevision ?? 0;
    message.timestampUpdated = object.timestampUpdated ?? 0;
    return message;
  },
};

function createBaseCPlayerGetCommunityPreferencesResponse(): CPlayerGetCommunityPreferencesResponse {
  return { preferences: undefined };
}

export const CPlayerGetCommunityPreferencesResponse = {
  encode(message: CPlayerGetCommunityPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CPlayerCommunityPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetCommunityPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetCommunityPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = CPlayerCommunityPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetCommunityPreferencesResponse {
    return {
      preferences: isSet(object.preferences) ? CPlayerCommunityPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerGetCommunityPreferencesResponse): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CPlayerCommunityPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetCommunityPreferencesResponse>, I>>(
    base?: I,
  ): CPlayerGetCommunityPreferencesResponse {
    return CPlayerGetCommunityPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetCommunityPreferencesResponse>, I>>(
    object: I,
  ): CPlayerGetCommunityPreferencesResponse {
    const message = createBaseCPlayerGetCommunityPreferencesResponse();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CPlayerCommunityPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetCommunityPreferencesRequest(): CPlayerSetCommunityPreferencesRequest {
  return { preferences: undefined };
}

export const CPlayerSetCommunityPreferencesRequest = {
  encode(message: CPlayerSetCommunityPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preferences !== undefined) {
      CPlayerCommunityPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetCommunityPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetCommunityPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = CPlayerCommunityPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerSetCommunityPreferencesRequest {
    return {
      preferences: isSet(object.preferences) ? CPlayerCommunityPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerSetCommunityPreferencesRequest): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CPlayerCommunityPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetCommunityPreferencesRequest>, I>>(
    base?: I,
  ): CPlayerSetCommunityPreferencesRequest {
    return CPlayerSetCommunityPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetCommunityPreferencesRequest>, I>>(
    object: I,
  ): CPlayerSetCommunityPreferencesRequest {
    const message = createBaseCPlayerSetCommunityPreferencesRequest();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CPlayerCommunityPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerSetCommunityPreferencesResponse(): CPlayerSetCommunityPreferencesResponse {
  return {};
}

export const CPlayerSetCommunityPreferencesResponse = {
  encode(_: CPlayerSetCommunityPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerSetCommunityPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerSetCommunityPreferencesResponse();
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

  fromJSON(_: any): CPlayerSetCommunityPreferencesResponse {
    return {};
  },

  toJSON(_: CPlayerSetCommunityPreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerSetCommunityPreferencesResponse>, I>>(
    base?: I,
  ): CPlayerSetCommunityPreferencesResponse {
    return CPlayerSetCommunityPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerSetCommunityPreferencesResponse>, I>>(
    _: I,
  ): CPlayerSetCommunityPreferencesResponse {
    const message = createBaseCPlayerSetCommunityPreferencesResponse();
    return message;
  },
};

function createBaseCPlayerGetTextFilterWordsRequest(): CPlayerGetTextFilterWordsRequest {
  return {};
}

export const CPlayerGetTextFilterWordsRequest = {
  encode(_: CPlayerGetTextFilterWordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTextFilterWordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTextFilterWordsRequest();
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

  fromJSON(_: any): CPlayerGetTextFilterWordsRequest {
    return {};
  },

  toJSON(_: CPlayerGetTextFilterWordsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTextFilterWordsRequest>, I>>(
    base?: I,
  ): CPlayerGetTextFilterWordsRequest {
    return CPlayerGetTextFilterWordsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTextFilterWordsRequest>, I>>(
    _: I,
  ): CPlayerGetTextFilterWordsRequest {
    const message = createBaseCPlayerGetTextFilterWordsRequest();
    return message;
  },
};

function createBaseCPlayerTextFilterWords(): CPlayerTextFilterWords {
  return { textFilterCustomBannedWords: [], textFilterCustomCleanWords: [], textFilterWordsRevision: 0 };
}

export const CPlayerTextFilterWords = {
  encode(message: CPlayerTextFilterWords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.textFilterCustomBannedWords) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.textFilterCustomCleanWords) {
      writer.uint32(18).string(v!);
    }
    if (message.textFilterWordsRevision !== 0) {
      writer.uint32(24).uint32(message.textFilterWordsRevision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerTextFilterWords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerTextFilterWords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.textFilterCustomBannedWords.push(reader.string());
          break;
        case 2:
          message.textFilterCustomCleanWords.push(reader.string());
          break;
        case 3:
          message.textFilterWordsRevision = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerTextFilterWords {
    return {
      textFilterCustomBannedWords: Array.isArray(object?.textFilterCustomBannedWords)
        ? object.textFilterCustomBannedWords.map((e: any) => String(e))
        : [],
      textFilterCustomCleanWords: Array.isArray(object?.textFilterCustomCleanWords)
        ? object.textFilterCustomCleanWords.map((e: any) => String(e))
        : [],
      textFilterWordsRevision: isSet(object.textFilterWordsRevision) ? Number(object.textFilterWordsRevision) : 0,
    };
  },

  toJSON(message: CPlayerTextFilterWords): unknown {
    const obj: any = {};
    if (message.textFilterCustomBannedWords) {
      obj.textFilterCustomBannedWords = message.textFilterCustomBannedWords.map((e) => e);
    } else {
      obj.textFilterCustomBannedWords = [];
    }
    if (message.textFilterCustomCleanWords) {
      obj.textFilterCustomCleanWords = message.textFilterCustomCleanWords.map((e) => e);
    } else {
      obj.textFilterCustomCleanWords = [];
    }
    message.textFilterWordsRevision !== undefined &&
      (obj.textFilterWordsRevision = Math.round(message.textFilterWordsRevision));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerTextFilterWords>, I>>(base?: I): CPlayerTextFilterWords {
    return CPlayerTextFilterWords.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerTextFilterWords>, I>>(object: I): CPlayerTextFilterWords {
    const message = createBaseCPlayerTextFilterWords();
    message.textFilterCustomBannedWords = object.textFilterCustomBannedWords?.map((e) => e) || [];
    message.textFilterCustomCleanWords = object.textFilterCustomCleanWords?.map((e) => e) || [];
    message.textFilterWordsRevision = object.textFilterWordsRevision ?? 0;
    return message;
  },
};

function createBaseCPlayerGetTextFilterWordsResponse(): CPlayerGetTextFilterWordsResponse {
  return { words: undefined };
}

export const CPlayerGetTextFilterWordsResponse = {
  encode(message: CPlayerGetTextFilterWordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.words !== undefined) {
      CPlayerTextFilterWords.encode(message.words, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetTextFilterWordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetTextFilterWordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.words = CPlayerTextFilterWords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetTextFilterWordsResponse {
    return { words: isSet(object.words) ? CPlayerTextFilterWords.fromJSON(object.words) : undefined };
  },

  toJSON(message: CPlayerGetTextFilterWordsResponse): unknown {
    const obj: any = {};
    message.words !== undefined &&
      (obj.words = message.words ? CPlayerTextFilterWords.toJSON(message.words) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetTextFilterWordsResponse>, I>>(
    base?: I,
  ): CPlayerGetTextFilterWordsResponse {
    return CPlayerGetTextFilterWordsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetTextFilterWordsResponse>, I>>(
    object: I,
  ): CPlayerGetTextFilterWordsResponse {
    const message = createBaseCPlayerGetTextFilterWordsResponse();
    message.words = (object.words !== undefined && object.words !== null)
      ? CPlayerTextFilterWords.fromPartial(object.words)
      : undefined;
    return message;
  },
};

function createBaseCPlayerGetNewSteamAnnouncementStateRequest(): CPlayerGetNewSteamAnnouncementStateRequest {
  return { language: 0 };
}

export const CPlayerGetNewSteamAnnouncementStateRequest = {
  encode(message: CPlayerGetNewSteamAnnouncementStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.language !== 0) {
      writer.uint32(8).int32(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNewSteamAnnouncementStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNewSteamAnnouncementStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.language = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNewSteamAnnouncementStateRequest {
    return { language: isSet(object.language) ? Number(object.language) : 0 };
  },

  toJSON(message: CPlayerGetNewSteamAnnouncementStateRequest): unknown {
    const obj: any = {};
    message.language !== undefined && (obj.language = Math.round(message.language));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetNewSteamAnnouncementStateRequest>, I>>(
    base?: I,
  ): CPlayerGetNewSteamAnnouncementStateRequest {
    return CPlayerGetNewSteamAnnouncementStateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetNewSteamAnnouncementStateRequest>, I>>(
    object: I,
  ): CPlayerGetNewSteamAnnouncementStateRequest {
    const message = createBaseCPlayerGetNewSteamAnnouncementStateRequest();
    message.language = object.language ?? 0;
    return message;
  },
};

function createBaseCPlayerGetNewSteamAnnouncementStateResponse(): CPlayerGetNewSteamAnnouncementStateResponse {
  return { state: 0, announcementHeadline: "", announcementUrl: "", timePosted: 0, announcementGid: 0 };
}

export const CPlayerGetNewSteamAnnouncementStateResponse = {
  encode(message: CPlayerGetNewSteamAnnouncementStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.announcementHeadline !== "") {
      writer.uint32(18).string(message.announcementHeadline);
    }
    if (message.announcementUrl !== "") {
      writer.uint32(26).string(message.announcementUrl);
    }
    if (message.timePosted !== 0) {
      writer.uint32(32).uint32(message.timePosted);
    }
    if (message.announcementGid !== 0) {
      writer.uint32(40).uint64(message.announcementGid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetNewSteamAnnouncementStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetNewSteamAnnouncementStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.announcementHeadline = reader.string();
          break;
        case 3:
          message.announcementUrl = reader.string();
          break;
        case 4:
          message.timePosted = reader.uint32();
          break;
        case 5:
          message.announcementGid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetNewSteamAnnouncementStateResponse {
    return {
      state: isSet(object.state) ? eNewSteamAnnouncementStateFromJSON(object.state) : 0,
      announcementHeadline: isSet(object.announcementHeadline) ? String(object.announcementHeadline) : "",
      announcementUrl: isSet(object.announcementUrl) ? String(object.announcementUrl) : "",
      timePosted: isSet(object.timePosted) ? Number(object.timePosted) : 0,
      announcementGid: isSet(object.announcementGid) ? Number(object.announcementGid) : 0,
    };
  },

  toJSON(message: CPlayerGetNewSteamAnnouncementStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = eNewSteamAnnouncementStateToJSON(message.state));
    message.announcementHeadline !== undefined && (obj.announcementHeadline = message.announcementHeadline);
    message.announcementUrl !== undefined && (obj.announcementUrl = message.announcementUrl);
    message.timePosted !== undefined && (obj.timePosted = Math.round(message.timePosted));
    message.announcementGid !== undefined && (obj.announcementGid = Math.round(message.announcementGid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetNewSteamAnnouncementStateResponse>, I>>(
    base?: I,
  ): CPlayerGetNewSteamAnnouncementStateResponse {
    return CPlayerGetNewSteamAnnouncementStateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetNewSteamAnnouncementStateResponse>, I>>(
    object: I,
  ): CPlayerGetNewSteamAnnouncementStateResponse {
    const message = createBaseCPlayerGetNewSteamAnnouncementStateResponse();
    message.state = object.state ?? 0;
    message.announcementHeadline = object.announcementHeadline ?? "";
    message.announcementUrl = object.announcementUrl ?? "";
    message.timePosted = object.timePosted ?? 0;
    message.announcementGid = object.announcementGid ?? 0;
    return message;
  },
};

function createBaseCPlayerUpdateSteamAnnouncementLastReadRequest(): CPlayerUpdateSteamAnnouncementLastReadRequest {
  return { announcementGid: 0, timePosted: 0 };
}

export const CPlayerUpdateSteamAnnouncementLastReadRequest = {
  encode(message: CPlayerUpdateSteamAnnouncementLastReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.announcementGid !== 0) {
      writer.uint32(8).uint64(message.announcementGid);
    }
    if (message.timePosted !== 0) {
      writer.uint32(16).uint32(message.timePosted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerUpdateSteamAnnouncementLastReadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.announcementGid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.timePosted = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerUpdateSteamAnnouncementLastReadRequest {
    return {
      announcementGid: isSet(object.announcementGid) ? Number(object.announcementGid) : 0,
      timePosted: isSet(object.timePosted) ? Number(object.timePosted) : 0,
    };
  },

  toJSON(message: CPlayerUpdateSteamAnnouncementLastReadRequest): unknown {
    const obj: any = {};
    message.announcementGid !== undefined && (obj.announcementGid = Math.round(message.announcementGid));
    message.timePosted !== undefined && (obj.timePosted = Math.round(message.timePosted));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerUpdateSteamAnnouncementLastReadRequest>, I>>(
    base?: I,
  ): CPlayerUpdateSteamAnnouncementLastReadRequest {
    return CPlayerUpdateSteamAnnouncementLastReadRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerUpdateSteamAnnouncementLastReadRequest>, I>>(
    object: I,
  ): CPlayerUpdateSteamAnnouncementLastReadRequest {
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadRequest();
    message.announcementGid = object.announcementGid ?? 0;
    message.timePosted = object.timePosted ?? 0;
    return message;
  },
};

function createBaseCPlayerUpdateSteamAnnouncementLastReadResponse(): CPlayerUpdateSteamAnnouncementLastReadResponse {
  return {};
}

export const CPlayerUpdateSteamAnnouncementLastReadResponse = {
  encode(_: CPlayerUpdateSteamAnnouncementLastReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerUpdateSteamAnnouncementLastReadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadResponse();
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

  fromJSON(_: any): CPlayerUpdateSteamAnnouncementLastReadResponse {
    return {};
  },

  toJSON(_: CPlayerUpdateSteamAnnouncementLastReadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerUpdateSteamAnnouncementLastReadResponse>, I>>(
    base?: I,
  ): CPlayerUpdateSteamAnnouncementLastReadResponse {
    return CPlayerUpdateSteamAnnouncementLastReadResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerUpdateSteamAnnouncementLastReadResponse>, I>>(
    _: I,
  ): CPlayerUpdateSteamAnnouncementLastReadResponse {
    const message = createBaseCPlayerUpdateSteamAnnouncementLastReadResponse();
    return message;
  },
};

function createBaseCPlayerGetPrivacySettingsRequest(): CPlayerGetPrivacySettingsRequest {
  return {};
}

export const CPlayerGetPrivacySettingsRequest = {
  encode(_: CPlayerGetPrivacySettingsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPrivacySettingsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPrivacySettingsRequest();
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

  fromJSON(_: any): CPlayerGetPrivacySettingsRequest {
    return {};
  },

  toJSON(_: CPlayerGetPrivacySettingsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPrivacySettingsRequest>, I>>(
    base?: I,
  ): CPlayerGetPrivacySettingsRequest {
    return CPlayerGetPrivacySettingsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPrivacySettingsRequest>, I>>(
    _: I,
  ): CPlayerGetPrivacySettingsRequest {
    const message = createBaseCPlayerGetPrivacySettingsRequest();
    return message;
  },
};

function createBaseCPrivacySettings(): CPrivacySettings {
  return {
    privacyState: 0,
    privacyStateInventory: 0,
    privacyStateGifts: 0,
    privacyStateOwnedgames: 0,
    privacyStatePlaytime: 0,
    privacyStateFriendslist: 0,
  };
}

export const CPrivacySettings = {
  encode(message: CPrivacySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privacyState !== 0) {
      writer.uint32(8).int32(message.privacyState);
    }
    if (message.privacyStateInventory !== 0) {
      writer.uint32(16).int32(message.privacyStateInventory);
    }
    if (message.privacyStateGifts !== 0) {
      writer.uint32(24).int32(message.privacyStateGifts);
    }
    if (message.privacyStateOwnedgames !== 0) {
      writer.uint32(32).int32(message.privacyStateOwnedgames);
    }
    if (message.privacyStatePlaytime !== 0) {
      writer.uint32(40).int32(message.privacyStatePlaytime);
    }
    if (message.privacyStateFriendslist !== 0) {
      writer.uint32(48).int32(message.privacyStateFriendslist);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPrivacySettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPrivacySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privacyState = reader.int32();
          break;
        case 2:
          message.privacyStateInventory = reader.int32();
          break;
        case 3:
          message.privacyStateGifts = reader.int32();
          break;
        case 4:
          message.privacyStateOwnedgames = reader.int32();
          break;
        case 5:
          message.privacyStatePlaytime = reader.int32();
          break;
        case 6:
          message.privacyStateFriendslist = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPrivacySettings {
    return {
      privacyState: isSet(object.privacyState) ? Number(object.privacyState) : 0,
      privacyStateInventory: isSet(object.privacyStateInventory) ? Number(object.privacyStateInventory) : 0,
      privacyStateGifts: isSet(object.privacyStateGifts) ? Number(object.privacyStateGifts) : 0,
      privacyStateOwnedgames: isSet(object.privacyStateOwnedgames) ? Number(object.privacyStateOwnedgames) : 0,
      privacyStatePlaytime: isSet(object.privacyStatePlaytime) ? Number(object.privacyStatePlaytime) : 0,
      privacyStateFriendslist: isSet(object.privacyStateFriendslist) ? Number(object.privacyStateFriendslist) : 0,
    };
  },

  toJSON(message: CPrivacySettings): unknown {
    const obj: any = {};
    message.privacyState !== undefined && (obj.privacyState = Math.round(message.privacyState));
    message.privacyStateInventory !== undefined &&
      (obj.privacyStateInventory = Math.round(message.privacyStateInventory));
    message.privacyStateGifts !== undefined && (obj.privacyStateGifts = Math.round(message.privacyStateGifts));
    message.privacyStateOwnedgames !== undefined &&
      (obj.privacyStateOwnedgames = Math.round(message.privacyStateOwnedgames));
    message.privacyStatePlaytime !== undefined && (obj.privacyStatePlaytime = Math.round(message.privacyStatePlaytime));
    message.privacyStateFriendslist !== undefined &&
      (obj.privacyStateFriendslist = Math.round(message.privacyStateFriendslist));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPrivacySettings>, I>>(base?: I): CPrivacySettings {
    return CPrivacySettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPrivacySettings>, I>>(object: I): CPrivacySettings {
    const message = createBaseCPrivacySettings();
    message.privacyState = object.privacyState ?? 0;
    message.privacyStateInventory = object.privacyStateInventory ?? 0;
    message.privacyStateGifts = object.privacyStateGifts ?? 0;
    message.privacyStateOwnedgames = object.privacyStateOwnedgames ?? 0;
    message.privacyStatePlaytime = object.privacyStatePlaytime ?? 0;
    message.privacyStateFriendslist = object.privacyStateFriendslist ?? 0;
    return message;
  },
};

function createBaseCPlayerGetPrivacySettingsResponse(): CPlayerGetPrivacySettingsResponse {
  return { privacySettings: undefined };
}

export const CPlayerGetPrivacySettingsResponse = {
  encode(message: CPlayerGetPrivacySettingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privacySettings !== undefined) {
      CPrivacySettings.encode(message.privacySettings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetPrivacySettingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetPrivacySettingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privacySettings = CPrivacySettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetPrivacySettingsResponse {
    return {
      privacySettings: isSet(object.privacySettings) ? CPrivacySettings.fromJSON(object.privacySettings) : undefined,
    };
  },

  toJSON(message: CPlayerGetPrivacySettingsResponse): unknown {
    const obj: any = {};
    message.privacySettings !== undefined &&
      (obj.privacySettings = message.privacySettings ? CPrivacySettings.toJSON(message.privacySettings) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetPrivacySettingsResponse>, I>>(
    base?: I,
  ): CPlayerGetPrivacySettingsResponse {
    return CPlayerGetPrivacySettingsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetPrivacySettingsResponse>, I>>(
    object: I,
  ): CPlayerGetPrivacySettingsResponse {
    const message = createBaseCPlayerGetPrivacySettingsResponse();
    message.privacySettings = (object.privacySettings !== undefined && object.privacySettings !== null)
      ? CPrivacySettings.fromPartial(object.privacySettings)
      : undefined;
    return message;
  },
};

function createBaseCPlayerGetDurationControlRequest(): CPlayerGetDurationControlRequest {
  return { appid: 0 };
}

export const CPlayerGetDurationControlRequest = {
  encode(message: CPlayerGetDurationControlRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetDurationControlRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetDurationControlRequest();
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

  fromJSON(object: any): CPlayerGetDurationControlRequest {
    return { appid: isSet(object.appid) ? Number(object.appid) : 0 };
  },

  toJSON(message: CPlayerGetDurationControlRequest): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetDurationControlRequest>, I>>(
    base?: I,
  ): CPlayerGetDurationControlRequest {
    return CPlayerGetDurationControlRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetDurationControlRequest>, I>>(
    object: I,
  ): CPlayerGetDurationControlRequest {
    const message = createBaseCPlayerGetDurationControlRequest();
    message.appid = object.appid ?? 0;
    return message;
  },
};

function createBaseCPlayerGetDurationControlResponse(): CPlayerGetDurationControlResponse {
  return {
    isEnabled: false,
    seconds: 0,
    secondsToday: 0,
    isSteamchinaAccount: false,
    isAgeVerified: false,
    secondsAllowedToday: 0,
    ageVerificationPending: false,
    blockMinors: false,
  };
}

export const CPlayerGetDurationControlResponse = {
  encode(message: CPlayerGetDurationControlResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEnabled === true) {
      writer.uint32(8).bool(message.isEnabled);
    }
    if (message.seconds !== 0) {
      writer.uint32(16).int32(message.seconds);
    }
    if (message.secondsToday !== 0) {
      writer.uint32(24).int32(message.secondsToday);
    }
    if (message.isSteamchinaAccount === true) {
      writer.uint32(32).bool(message.isSteamchinaAccount);
    }
    if (message.isAgeVerified === true) {
      writer.uint32(40).bool(message.isAgeVerified);
    }
    if (message.secondsAllowedToday !== 0) {
      writer.uint32(48).uint32(message.secondsAllowedToday);
    }
    if (message.ageVerificationPending === true) {
      writer.uint32(56).bool(message.ageVerificationPending);
    }
    if (message.blockMinors === true) {
      writer.uint32(64).bool(message.blockMinors);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerGetDurationControlResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerGetDurationControlResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isEnabled = reader.bool();
          break;
        case 2:
          message.seconds = reader.int32();
          break;
        case 3:
          message.secondsToday = reader.int32();
          break;
        case 4:
          message.isSteamchinaAccount = reader.bool();
          break;
        case 5:
          message.isAgeVerified = reader.bool();
          break;
        case 6:
          message.secondsAllowedToday = reader.uint32();
          break;
        case 7:
          message.ageVerificationPending = reader.bool();
          break;
        case 8:
          message.blockMinors = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerGetDurationControlResponse {
    return {
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
      secondsToday: isSet(object.secondsToday) ? Number(object.secondsToday) : 0,
      isSteamchinaAccount: isSet(object.isSteamchinaAccount) ? Boolean(object.isSteamchinaAccount) : false,
      isAgeVerified: isSet(object.isAgeVerified) ? Boolean(object.isAgeVerified) : false,
      secondsAllowedToday: isSet(object.secondsAllowedToday) ? Number(object.secondsAllowedToday) : 0,
      ageVerificationPending: isSet(object.ageVerificationPending) ? Boolean(object.ageVerificationPending) : false,
      blockMinors: isSet(object.blockMinors) ? Boolean(object.blockMinors) : false,
    };
  },

  toJSON(message: CPlayerGetDurationControlResponse): unknown {
    const obj: any = {};
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    message.secondsToday !== undefined && (obj.secondsToday = Math.round(message.secondsToday));
    message.isSteamchinaAccount !== undefined && (obj.isSteamchinaAccount = message.isSteamchinaAccount);
    message.isAgeVerified !== undefined && (obj.isAgeVerified = message.isAgeVerified);
    message.secondsAllowedToday !== undefined && (obj.secondsAllowedToday = Math.round(message.secondsAllowedToday));
    message.ageVerificationPending !== undefined && (obj.ageVerificationPending = message.ageVerificationPending);
    message.blockMinors !== undefined && (obj.blockMinors = message.blockMinors);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerGetDurationControlResponse>, I>>(
    base?: I,
  ): CPlayerGetDurationControlResponse {
    return CPlayerGetDurationControlResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerGetDurationControlResponse>, I>>(
    object: I,
  ): CPlayerGetDurationControlResponse {
    const message = createBaseCPlayerGetDurationControlResponse();
    message.isEnabled = object.isEnabled ?? false;
    message.seconds = object.seconds ?? 0;
    message.secondsToday = object.secondsToday ?? 0;
    message.isSteamchinaAccount = object.isSteamchinaAccount ?? false;
    message.isAgeVerified = object.isAgeVerified ?? false;
    message.secondsAllowedToday = object.secondsAllowedToday ?? 0;
    message.ageVerificationPending = object.ageVerificationPending ?? false;
    message.blockMinors = object.blockMinors ?? false;
    return message;
  },
};

function createBaseCPlayerRecordDisconnectedPlaytimeRequest(): CPlayerRecordDisconnectedPlaytimeRequest {
  return { playSessions: [] };
}

export const CPlayerRecordDisconnectedPlaytimeRequest = {
  encode(message: CPlayerRecordDisconnectedPlaytimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.playSessions) {
      CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRecordDisconnectedPlaytimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRecordDisconnectedPlaytimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.playSessions.push(
            CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerRecordDisconnectedPlaytimeRequest {
    return {
      playSessions: Array.isArray(object?.playSessions)
        ? object.playSessions.map((e: any) => CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerRecordDisconnectedPlaytimeRequest): unknown {
    const obj: any = {};
    if (message.playSessions) {
      obj.playSessions = message.playSessions.map((e) =>
        e ? CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.toJSON(e) : undefined
      );
    } else {
      obj.playSessions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeRequest>, I>>(
    base?: I,
  ): CPlayerRecordDisconnectedPlaytimeRequest {
    return CPlayerRecordDisconnectedPlaytimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeRequest>, I>>(
    object: I,
  ): CPlayerRecordDisconnectedPlaytimeRequest {
    const message = createBaseCPlayerRecordDisconnectedPlaytimeRequest();
    message.playSessions =
      object.playSessions?.map((e) => CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerRecordDisconnectedPlaytimeRequest_PlayHistory(): CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
  return { appid: 0, sessionTimeStart: 0, seconds: 0, offline: false };
}

export const CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory = {
  encode(
    message: CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.sessionTimeStart !== 0) {
      writer.uint32(16).uint32(message.sessionTimeStart);
    }
    if (message.seconds !== 0) {
      writer.uint32(24).uint32(message.seconds);
    }
    if (message.offline === true) {
      writer.uint32(32).bool(message.offline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRecordDisconnectedPlaytimeRequest_PlayHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.sessionTimeStart = reader.uint32();
          break;
        case 3:
          message.seconds = reader.uint32();
          break;
        case 4:
          message.offline = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      sessionTimeStart: isSet(object.sessionTimeStart) ? Number(object.sessionTimeStart) : 0,
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
      offline: isSet(object.offline) ? Boolean(object.offline) : false,
    };
  },

  toJSON(message: CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.sessionTimeStart !== undefined && (obj.sessionTimeStart = Math.round(message.sessionTimeStart));
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    message.offline !== undefined && (obj.offline = message.offline);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory>, I>>(
    base?: I,
  ): CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
    return CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory>, I>>(
    object: I,
  ): CPlayerRecordDisconnectedPlaytimeRequest_PlayHistory {
    const message = createBaseCPlayerRecordDisconnectedPlaytimeRequest_PlayHistory();
    message.appid = object.appid ?? 0;
    message.sessionTimeStart = object.sessionTimeStart ?? 0;
    message.seconds = object.seconds ?? 0;
    message.offline = object.offline ?? false;
    return message;
  },
};

function createBaseCPlayerRecordDisconnectedPlaytimeResponse(): CPlayerRecordDisconnectedPlaytimeResponse {
  return {};
}

export const CPlayerRecordDisconnectedPlaytimeResponse = {
  encode(_: CPlayerRecordDisconnectedPlaytimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerRecordDisconnectedPlaytimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerRecordDisconnectedPlaytimeResponse();
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

  fromJSON(_: any): CPlayerRecordDisconnectedPlaytimeResponse {
    return {};
  },

  toJSON(_: CPlayerRecordDisconnectedPlaytimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeResponse>, I>>(
    base?: I,
  ): CPlayerRecordDisconnectedPlaytimeResponse {
    return CPlayerRecordDisconnectedPlaytimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerRecordDisconnectedPlaytimeResponse>, I>>(
    _: I,
  ): CPlayerRecordDisconnectedPlaytimeResponse {
    const message = createBaseCPlayerRecordDisconnectedPlaytimeResponse();
    return message;
  },
};

function createBaseCPlayerLastPlayedTimesNotification(): CPlayerLastPlayedTimesNotification {
  return { games: [] };
}

export const CPlayerLastPlayedTimesNotification = {
  encode(message: CPlayerLastPlayedTimesNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CPlayerGetLastPlayedTimesResponse_Game.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerLastPlayedTimesNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerLastPlayedTimesNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(CPlayerGetLastPlayedTimesResponse_Game.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerLastPlayedTimesNotification {
    return {
      games: Array.isArray(object?.games)
        ? object.games.map((e: any) => CPlayerGetLastPlayedTimesResponse_Game.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CPlayerLastPlayedTimesNotification): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e ? CPlayerGetLastPlayedTimesResponse_Game.toJSON(e) : undefined);
    } else {
      obj.games = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerLastPlayedTimesNotification>, I>>(
    base?: I,
  ): CPlayerLastPlayedTimesNotification {
    return CPlayerLastPlayedTimesNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerLastPlayedTimesNotification>, I>>(
    object: I,
  ): CPlayerLastPlayedTimesNotification {
    const message = createBaseCPlayerLastPlayedTimesNotification();
    message.games = object.games?.map((e) => CPlayerGetLastPlayedTimesResponse_Game.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCPlayerFriendNicknameChangedNotification(): CPlayerFriendNicknameChangedNotification {
  return { accountid: 0, nickname: "", isEchoToSelf: false };
}

export const CPlayerFriendNicknameChangedNotification = {
  encode(message: CPlayerFriendNicknameChangedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.isEchoToSelf === true) {
      writer.uint32(24).bool(message.isEchoToSelf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerFriendNicknameChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerFriendNicknameChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.fixed32();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.isEchoToSelf = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerFriendNicknameChangedNotification {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      isEchoToSelf: isSet(object.isEchoToSelf) ? Boolean(object.isEchoToSelf) : false,
    };
  },

  toJSON(message: CPlayerFriendNicknameChangedNotification): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.isEchoToSelf !== undefined && (obj.isEchoToSelf = message.isEchoToSelf);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerFriendNicknameChangedNotification>, I>>(
    base?: I,
  ): CPlayerFriendNicknameChangedNotification {
    return CPlayerFriendNicknameChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerFriendNicknameChangedNotification>, I>>(
    object: I,
  ): CPlayerFriendNicknameChangedNotification {
    const message = createBaseCPlayerFriendNicknameChangedNotification();
    message.accountid = object.accountid ?? 0;
    message.nickname = object.nickname ?? "";
    message.isEchoToSelf = object.isEchoToSelf ?? false;
    return message;
  },
};

function createBaseCPlayerFriendEquippedProfileItemsChangedNotification(): CPlayerFriendEquippedProfileItemsChangedNotification {
  return { accountid: 0 };
}

export const CPlayerFriendEquippedProfileItemsChangedNotification = {
  encode(
    message: CPlayerFriendEquippedProfileItemsChangedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerFriendEquippedProfileItemsChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerFriendEquippedProfileItemsChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.fixed32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerFriendEquippedProfileItemsChangedNotification {
    return { accountid: isSet(object.accountid) ? Number(object.accountid) : 0 };
  },

  toJSON(message: CPlayerFriendEquippedProfileItemsChangedNotification): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerFriendEquippedProfileItemsChangedNotification>, I>>(
    base?: I,
  ): CPlayerFriendEquippedProfileItemsChangedNotification {
    return CPlayerFriendEquippedProfileItemsChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerFriendEquippedProfileItemsChangedNotification>, I>>(
    object: I,
  ): CPlayerFriendEquippedProfileItemsChangedNotification {
    const message = createBaseCPlayerFriendEquippedProfileItemsChangedNotification();
    message.accountid = object.accountid ?? 0;
    return message;
  },
};

function createBaseCPlayerNewSteamAnnouncementStateNotification(): CPlayerNewSteamAnnouncementStateNotification {
  return { state: 0, announcementHeadline: "", announcementUrl: "", timePosted: 0, announcementGid: 0 };
}

export const CPlayerNewSteamAnnouncementStateNotification = {
  encode(message: CPlayerNewSteamAnnouncementStateNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.announcementHeadline !== "") {
      writer.uint32(18).string(message.announcementHeadline);
    }
    if (message.announcementUrl !== "") {
      writer.uint32(26).string(message.announcementUrl);
    }
    if (message.timePosted !== 0) {
      writer.uint32(32).uint32(message.timePosted);
    }
    if (message.announcementGid !== 0) {
      writer.uint32(40).uint64(message.announcementGid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerNewSteamAnnouncementStateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerNewSteamAnnouncementStateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.announcementHeadline = reader.string();
          break;
        case 3:
          message.announcementUrl = reader.string();
          break;
        case 4:
          message.timePosted = reader.uint32();
          break;
        case 5:
          message.announcementGid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerNewSteamAnnouncementStateNotification {
    return {
      state: isSet(object.state) ? eNewSteamAnnouncementStateFromJSON(object.state) : 0,
      announcementHeadline: isSet(object.announcementHeadline) ? String(object.announcementHeadline) : "",
      announcementUrl: isSet(object.announcementUrl) ? String(object.announcementUrl) : "",
      timePosted: isSet(object.timePosted) ? Number(object.timePosted) : 0,
      announcementGid: isSet(object.announcementGid) ? Number(object.announcementGid) : 0,
    };
  },

  toJSON(message: CPlayerNewSteamAnnouncementStateNotification): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = eNewSteamAnnouncementStateToJSON(message.state));
    message.announcementHeadline !== undefined && (obj.announcementHeadline = message.announcementHeadline);
    message.announcementUrl !== undefined && (obj.announcementUrl = message.announcementUrl);
    message.timePosted !== undefined && (obj.timePosted = Math.round(message.timePosted));
    message.announcementGid !== undefined && (obj.announcementGid = Math.round(message.announcementGid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerNewSteamAnnouncementStateNotification>, I>>(
    base?: I,
  ): CPlayerNewSteamAnnouncementStateNotification {
    return CPlayerNewSteamAnnouncementStateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerNewSteamAnnouncementStateNotification>, I>>(
    object: I,
  ): CPlayerNewSteamAnnouncementStateNotification {
    const message = createBaseCPlayerNewSteamAnnouncementStateNotification();
    message.state = object.state ?? 0;
    message.announcementHeadline = object.announcementHeadline ?? "";
    message.announcementUrl = object.announcementUrl ?? "";
    message.timePosted = object.timePosted ?? 0;
    message.announcementGid = object.announcementGid ?? 0;
    return message;
  },
};

function createBaseCPlayerCommunityPreferencesChangedNotification(): CPlayerCommunityPreferencesChangedNotification {
  return { preferences: undefined };
}

export const CPlayerCommunityPreferencesChangedNotification = {
  encode(
    message: CPlayerCommunityPreferencesChangedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.preferences !== undefined) {
      CPlayerCommunityPreferences.encode(message.preferences, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerCommunityPreferencesChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerCommunityPreferencesChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferences = CPlayerCommunityPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerCommunityPreferencesChangedNotification {
    return {
      preferences: isSet(object.preferences) ? CPlayerCommunityPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerCommunityPreferencesChangedNotification): unknown {
    const obj: any = {};
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? CPlayerCommunityPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerCommunityPreferencesChangedNotification>, I>>(
    base?: I,
  ): CPlayerCommunityPreferencesChangedNotification {
    return CPlayerCommunityPreferencesChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerCommunityPreferencesChangedNotification>, I>>(
    object: I,
  ): CPlayerCommunityPreferencesChangedNotification {
    const message = createBaseCPlayerCommunityPreferencesChangedNotification();
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? CPlayerCommunityPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerTextFilterWordsChangedNotification(): CPlayerTextFilterWordsChangedNotification {
  return { words: undefined };
}

export const CPlayerTextFilterWordsChangedNotification = {
  encode(message: CPlayerTextFilterWordsChangedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.words !== undefined) {
      CPlayerTextFilterWords.encode(message.words, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerTextFilterWordsChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerTextFilterWordsChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.words = CPlayerTextFilterWords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerTextFilterWordsChangedNotification {
    return { words: isSet(object.words) ? CPlayerTextFilterWords.fromJSON(object.words) : undefined };
  },

  toJSON(message: CPlayerTextFilterWordsChangedNotification): unknown {
    const obj: any = {};
    message.words !== undefined &&
      (obj.words = message.words ? CPlayerTextFilterWords.toJSON(message.words) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerTextFilterWordsChangedNotification>, I>>(
    base?: I,
  ): CPlayerTextFilterWordsChangedNotification {
    return CPlayerTextFilterWordsChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerTextFilterWordsChangedNotification>, I>>(
    object: I,
  ): CPlayerTextFilterWordsChangedNotification {
    const message = createBaseCPlayerTextFilterWordsChangedNotification();
    message.words = (object.words !== undefined && object.words !== null)
      ? CPlayerTextFilterWords.fromPartial(object.words)
      : undefined;
    return message;
  },
};

function createBaseCPlayerPerFriendPreferencesChangedNotification(): CPlayerPerFriendPreferencesChangedNotification {
  return { accountid: 0, preferences: undefined };
}

export const CPlayerPerFriendPreferencesChangedNotification = {
  encode(
    message: CPlayerPerFriendPreferencesChangedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(13).fixed32(message.accountid);
    }
    if (message.preferences !== undefined) {
      PerFriendPreferences.encode(message.preferences, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerPerFriendPreferencesChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerPerFriendPreferencesChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.fixed32();
          break;
        case 2:
          message.preferences = PerFriendPreferences.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerPerFriendPreferencesChangedNotification {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      preferences: isSet(object.preferences) ? PerFriendPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: CPlayerPerFriendPreferencesChangedNotification): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? PerFriendPreferences.toJSON(message.preferences) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerPerFriendPreferencesChangedNotification>, I>>(
    base?: I,
  ): CPlayerPerFriendPreferencesChangedNotification {
    return CPlayerPerFriendPreferencesChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerPerFriendPreferencesChangedNotification>, I>>(
    object: I,
  ): CPlayerPerFriendPreferencesChangedNotification {
    const message = createBaseCPlayerPerFriendPreferencesChangedNotification();
    message.accountid = object.accountid ?? 0;
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? PerFriendPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseCPlayerPrivacySettingsChangedNotification(): CPlayerPrivacySettingsChangedNotification {
  return { privacySettings: undefined };
}

export const CPlayerPrivacySettingsChangedNotification = {
  encode(message: CPlayerPrivacySettingsChangedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.privacySettings !== undefined) {
      CPrivacySettings.encode(message.privacySettings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CPlayerPrivacySettingsChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPlayerPrivacySettingsChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privacySettings = CPrivacySettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CPlayerPrivacySettingsChangedNotification {
    return {
      privacySettings: isSet(object.privacySettings) ? CPrivacySettings.fromJSON(object.privacySettings) : undefined,
    };
  },

  toJSON(message: CPlayerPrivacySettingsChangedNotification): unknown {
    const obj: any = {};
    message.privacySettings !== undefined &&
      (obj.privacySettings = message.privacySettings ? CPrivacySettings.toJSON(message.privacySettings) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CPlayerPrivacySettingsChangedNotification>, I>>(
    base?: I,
  ): CPlayerPrivacySettingsChangedNotification {
    return CPlayerPrivacySettingsChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CPlayerPrivacySettingsChangedNotification>, I>>(
    object: I,
  ): CPlayerPrivacySettingsChangedNotification {
    const message = createBaseCPlayerPrivacySettingsChangedNotification();
    message.privacySettings = (object.privacySettings !== undefined && object.privacySettings !== null)
      ? CPrivacySettings.fromPartial(object.privacySettings)
      : undefined;
    return message;
  },
};

export interface Player {
  GetMutualFriendsForIncomingInvites(
    request: CPlayerGetMutualFriendsForIncomingInvitesRequest,
  ): Promise<CPlayerGetMutualFriendsForIncomingInvitesResponse>;
  GetOwnedGames(request: CPlayerGetOwnedGamesRequest): Promise<CPlayerGetOwnedGamesResponse>;
  GetPlayNext(request: CPlayerGetPlayNextRequest): Promise<CPlayerGetPlayNextResponse>;
  GetFriendsGameplayInfo(request: CPlayerGetFriendsGameplayInfoRequest): Promise<CPlayerGetFriendsGameplayInfoResponse>;
  GetGameBadgeLevels(request: CPlayerGetGameBadgeLevelsRequest): Promise<CPlayerGetGameBadgeLevelsResponse>;
  GetProfileBackground(request: CPlayerGetProfileBackgroundRequest): Promise<CPlayerGetProfileBackgroundResponse>;
  SetProfileBackground(request: CPlayerSetProfileBackgroundRequest): Promise<CPlayerSetProfileBackgroundResponse>;
  GetMiniProfileBackground(
    request: CPlayerGetMiniProfileBackgroundRequest,
  ): Promise<CPlayerGetMiniProfileBackgroundResponse>;
  SetMiniProfileBackground(
    request: CPlayerSetMiniProfileBackgroundRequest,
  ): Promise<CPlayerSetMiniProfileBackgroundResponse>;
  GetAvatarFrame(request: CPlayerGetAvatarFrameRequest): Promise<CPlayerGetAvatarFrameResponse>;
  SetAvatarFrame(request: CPlayerSetAvatarFrameRequest): Promise<CPlayerSetAvatarFrameResponse>;
  GetAnimatedAvatar(request: CPlayerGetAnimatedAvatarRequest): Promise<CPlayerGetAnimatedAvatarResponse>;
  SetAnimatedAvatar(request: CPlayerSetAnimatedAvatarRequest): Promise<CPlayerSetAnimatedAvatarResponse>;
  GetSteamDeckKeyboardSkin(
    request: CPlayerGetSteamDeckKeyboardSkinRequest,
  ): Promise<CPlayerGetSteamDeckKeyboardSkinResponse>;
  SetSteamDeckKeyboardSkin(
    request: CPlayerSetSteamDeckKeyboardSkinRequest,
  ): Promise<CPlayerSetSteamDeckKeyboardSkinResponse>;
  GetProfileItemsOwned(request: CPlayerGetProfileItemsOwnedRequest): Promise<CPlayerGetProfileItemsOwnedResponse>;
  GetProfileItemsEquipped(
    request: CPlayerGetProfileItemsEquippedRequest,
  ): Promise<CPlayerGetProfileItemsEquippedResponse>;
  SetEquippedProfileItemFlags(
    request: CPlayerSetEquippedProfileItemFlagsRequest,
  ): Promise<CPlayerSetEquippedProfileItemFlagsResponse>;
  GetEmoticonList(request: CPlayerGetEmoticonListRequest): Promise<CPlayerGetEmoticonListResponse>;
  GetTopAchievementsForGames(
    request: CPlayerGetTopAchievementsForGamesRequest,
  ): Promise<CPlayerGetTopAchievementsForGamesResponse>;
  GetAchievementsProgress(
    request: CPlayerGetAchievementsProgressRequest,
  ): Promise<CPlayerGetAchievementsProgressResponse>;
  GetGameAchievements(request: CPlayerGetGameAchievementsRequest): Promise<CPlayerGetGameAchievementsResponse>;
  GetFavoriteBadge(request: CPlayerGetFavoriteBadgeRequest): Promise<CPlayerGetFavoriteBadgeResponse>;
  SetFavoriteBadge(request: CPlayerSetFavoriteBadgeRequest): Promise<CPlayerSetFavoriteBadgeResponse>;
  GetProfileCustomization(
    request: CPlayerGetProfileCustomizationRequest,
  ): Promise<CPlayerGetProfileCustomizationResponse>;
  GetPurchasedProfileCustomizations(
    request: CPlayerGetPurchasedProfileCustomizationsRequest,
  ): Promise<CPlayerGetPurchasedProfileCustomizationsResponse>;
  GetPurchasedAndUpgradedProfileCustomizations(
    request: CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest,
  ): Promise<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse>;
  GetProfileThemesAvailable(
    request: CPlayerGetProfileThemesAvailableRequest,
  ): Promise<CPlayerGetProfileThemesAvailableResponse>;
  SetProfileTheme(request: CPlayerSetProfileThemeRequest): Promise<CPlayerSetProfileThemeResponse>;
  SetProfilePreferences(request: CPlayerSetProfilePreferencesRequest): Promise<CPlayerSetProfilePreferencesResponse>;
  PostStatusToFriends(request: CPlayerPostStatusToFriendsRequest): Promise<CPlayerPostStatusToFriendsResponse>;
  GetPostedStatus(request: CPlayerGetPostedStatusRequest): Promise<CPlayerGetPostedStatusResponse>;
  DeletePostedStatus(request: CPlayerDeletePostedStatusRequest): Promise<CPlayerDeletePostedStatusResponse>;
  ClientGetLastPlayedTimes(request: CPlayerGetLastPlayedTimesRequest): Promise<CPlayerGetLastPlayedTimesResponse>;
  GetTimeSSAAccepted(request: CPlayerGetTimeSSAAcceptedRequest): Promise<CPlayerGetTimeSSAAcceptedResponse>;
  AcceptSSA(request: CPlayerAcceptSSARequest): Promise<CPlayerAcceptSSAResponse>;
  GetNicknameList(request: CPlayerGetNicknameListRequest): Promise<CPlayerGetNicknameListResponse>;
  GetPerFriendPreferences(
    request: CPlayerGetPerFriendPreferencesRequest,
  ): Promise<CPlayerGetPerFriendPreferencesResponse>;
  SetPerFriendPreferences(
    request: CPlayerSetPerFriendPreferencesRequest,
  ): Promise<CPlayerSetPerFriendPreferencesResponse>;
  AddFriend(request: CPlayerAddFriendRequest): Promise<CPlayerAddFriendResponse>;
  RemoveFriend(request: CPlayerRemoveFriendRequest): Promise<CPlayerRemoveFriendResponse>;
  IgnoreFriend(request: CPlayerIgnoreFriendRequest): Promise<CPlayerIgnoreFriendResponse>;
  GetCommunityPreferences(
    request: CPlayerGetCommunityPreferencesRequest,
  ): Promise<CPlayerGetCommunityPreferencesResponse>;
  SetCommunityPreferences(
    request: CPlayerSetCommunityPreferencesRequest,
  ): Promise<CPlayerSetCommunityPreferencesResponse>;
  GetTextFilterWords(request: CPlayerGetTextFilterWordsRequest): Promise<CPlayerGetTextFilterWordsResponse>;
  GetNewSteamAnnouncementState(
    request: CPlayerGetNewSteamAnnouncementStateRequest,
  ): Promise<CPlayerGetNewSteamAnnouncementStateResponse>;
  UpdateSteamAnnouncementLastRead(
    request: CPlayerUpdateSteamAnnouncementLastReadRequest,
  ): Promise<CPlayerUpdateSteamAnnouncementLastReadResponse>;
  GetPrivacySettings(request: CPlayerGetPrivacySettingsRequest): Promise<CPlayerGetPrivacySettingsResponse>;
  GetDurationControl(request: CPlayerGetDurationControlRequest): Promise<CPlayerGetDurationControlResponse>;
  RecordDisconnectedPlaytime(
    request: CPlayerRecordDisconnectedPlaytimeRequest,
  ): Promise<CPlayerRecordDisconnectedPlaytimeResponse>;
}

export class PlayerClientImpl implements Player {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Player";
    this.rpc = rpc;
    this.GetMutualFriendsForIncomingInvites = this.GetMutualFriendsForIncomingInvites.bind(this);
    this.GetOwnedGames = this.GetOwnedGames.bind(this);
    this.GetPlayNext = this.GetPlayNext.bind(this);
    this.GetFriendsGameplayInfo = this.GetFriendsGameplayInfo.bind(this);
    this.GetGameBadgeLevels = this.GetGameBadgeLevels.bind(this);
    this.GetProfileBackground = this.GetProfileBackground.bind(this);
    this.SetProfileBackground = this.SetProfileBackground.bind(this);
    this.GetMiniProfileBackground = this.GetMiniProfileBackground.bind(this);
    this.SetMiniProfileBackground = this.SetMiniProfileBackground.bind(this);
    this.GetAvatarFrame = this.GetAvatarFrame.bind(this);
    this.SetAvatarFrame = this.SetAvatarFrame.bind(this);
    this.GetAnimatedAvatar = this.GetAnimatedAvatar.bind(this);
    this.SetAnimatedAvatar = this.SetAnimatedAvatar.bind(this);
    this.GetSteamDeckKeyboardSkin = this.GetSteamDeckKeyboardSkin.bind(this);
    this.SetSteamDeckKeyboardSkin = this.SetSteamDeckKeyboardSkin.bind(this);
    this.GetProfileItemsOwned = this.GetProfileItemsOwned.bind(this);
    this.GetProfileItemsEquipped = this.GetProfileItemsEquipped.bind(this);
    this.SetEquippedProfileItemFlags = this.SetEquippedProfileItemFlags.bind(this);
    this.GetEmoticonList = this.GetEmoticonList.bind(this);
    this.GetTopAchievementsForGames = this.GetTopAchievementsForGames.bind(this);
    this.GetAchievementsProgress = this.GetAchievementsProgress.bind(this);
    this.GetGameAchievements = this.GetGameAchievements.bind(this);
    this.GetFavoriteBadge = this.GetFavoriteBadge.bind(this);
    this.SetFavoriteBadge = this.SetFavoriteBadge.bind(this);
    this.GetProfileCustomization = this.GetProfileCustomization.bind(this);
    this.GetPurchasedProfileCustomizations = this.GetPurchasedProfileCustomizations.bind(this);
    this.GetPurchasedAndUpgradedProfileCustomizations = this.GetPurchasedAndUpgradedProfileCustomizations.bind(this);
    this.GetProfileThemesAvailable = this.GetProfileThemesAvailable.bind(this);
    this.SetProfileTheme = this.SetProfileTheme.bind(this);
    this.SetProfilePreferences = this.SetProfilePreferences.bind(this);
    this.PostStatusToFriends = this.PostStatusToFriends.bind(this);
    this.GetPostedStatus = this.GetPostedStatus.bind(this);
    this.DeletePostedStatus = this.DeletePostedStatus.bind(this);
    this.ClientGetLastPlayedTimes = this.ClientGetLastPlayedTimes.bind(this);
    this.GetTimeSSAAccepted = this.GetTimeSSAAccepted.bind(this);
    this.AcceptSSA = this.AcceptSSA.bind(this);
    this.GetNicknameList = this.GetNicknameList.bind(this);
    this.GetPerFriendPreferences = this.GetPerFriendPreferences.bind(this);
    this.SetPerFriendPreferences = this.SetPerFriendPreferences.bind(this);
    this.AddFriend = this.AddFriend.bind(this);
    this.RemoveFriend = this.RemoveFriend.bind(this);
    this.IgnoreFriend = this.IgnoreFriend.bind(this);
    this.GetCommunityPreferences = this.GetCommunityPreferences.bind(this);
    this.SetCommunityPreferences = this.SetCommunityPreferences.bind(this);
    this.GetTextFilterWords = this.GetTextFilterWords.bind(this);
    this.GetNewSteamAnnouncementState = this.GetNewSteamAnnouncementState.bind(this);
    this.UpdateSteamAnnouncementLastRead = this.UpdateSteamAnnouncementLastRead.bind(this);
    this.GetPrivacySettings = this.GetPrivacySettings.bind(this);
    this.GetDurationControl = this.GetDurationControl.bind(this);
    this.RecordDisconnectedPlaytime = this.RecordDisconnectedPlaytime.bind(this);
  }
  GetMutualFriendsForIncomingInvites(
    request: CPlayerGetMutualFriendsForIncomingInvitesRequest,
  ): Promise<CPlayerGetMutualFriendsForIncomingInvitesResponse> {
    const data = CPlayerGetMutualFriendsForIncomingInvitesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMutualFriendsForIncomingInvites", data);
    return promise.then((data) => CPlayerGetMutualFriendsForIncomingInvitesResponse.decode(new _m0.Reader(data)));
  }

  GetOwnedGames(request: CPlayerGetOwnedGamesRequest): Promise<CPlayerGetOwnedGamesResponse> {
    const data = CPlayerGetOwnedGamesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetOwnedGames", data);
    return promise.then((data) => CPlayerGetOwnedGamesResponse.decode(new _m0.Reader(data)));
  }

  GetPlayNext(request: CPlayerGetPlayNextRequest): Promise<CPlayerGetPlayNextResponse> {
    const data = CPlayerGetPlayNextRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPlayNext", data);
    return promise.then((data) => CPlayerGetPlayNextResponse.decode(new _m0.Reader(data)));
  }

  GetFriendsGameplayInfo(
    request: CPlayerGetFriendsGameplayInfoRequest,
  ): Promise<CPlayerGetFriendsGameplayInfoResponse> {
    const data = CPlayerGetFriendsGameplayInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFriendsGameplayInfo", data);
    return promise.then((data) => CPlayerGetFriendsGameplayInfoResponse.decode(new _m0.Reader(data)));
  }

  GetGameBadgeLevels(request: CPlayerGetGameBadgeLevelsRequest): Promise<CPlayerGetGameBadgeLevelsResponse> {
    const data = CPlayerGetGameBadgeLevelsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGameBadgeLevels", data);
    return promise.then((data) => CPlayerGetGameBadgeLevelsResponse.decode(new _m0.Reader(data)));
  }

  GetProfileBackground(request: CPlayerGetProfileBackgroundRequest): Promise<CPlayerGetProfileBackgroundResponse> {
    const data = CPlayerGetProfileBackgroundRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProfileBackground", data);
    return promise.then((data) => CPlayerGetProfileBackgroundResponse.decode(new _m0.Reader(data)));
  }

  SetProfileBackground(request: CPlayerSetProfileBackgroundRequest): Promise<CPlayerSetProfileBackgroundResponse> {
    const data = CPlayerSetProfileBackgroundRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProfileBackground", data);
    return promise.then((data) => CPlayerSetProfileBackgroundResponse.decode(new _m0.Reader(data)));
  }

  GetMiniProfileBackground(
    request: CPlayerGetMiniProfileBackgroundRequest,
  ): Promise<CPlayerGetMiniProfileBackgroundResponse> {
    const data = CPlayerGetMiniProfileBackgroundRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMiniProfileBackground", data);
    return promise.then((data) => CPlayerGetMiniProfileBackgroundResponse.decode(new _m0.Reader(data)));
  }

  SetMiniProfileBackground(
    request: CPlayerSetMiniProfileBackgroundRequest,
  ): Promise<CPlayerSetMiniProfileBackgroundResponse> {
    const data = CPlayerSetMiniProfileBackgroundRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetMiniProfileBackground", data);
    return promise.then((data) => CPlayerSetMiniProfileBackgroundResponse.decode(new _m0.Reader(data)));
  }

  GetAvatarFrame(request: CPlayerGetAvatarFrameRequest): Promise<CPlayerGetAvatarFrameResponse> {
    const data = CPlayerGetAvatarFrameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAvatarFrame", data);
    return promise.then((data) => CPlayerGetAvatarFrameResponse.decode(new _m0.Reader(data)));
  }

  SetAvatarFrame(request: CPlayerSetAvatarFrameRequest): Promise<CPlayerSetAvatarFrameResponse> {
    const data = CPlayerSetAvatarFrameRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetAvatarFrame", data);
    return promise.then((data) => CPlayerSetAvatarFrameResponse.decode(new _m0.Reader(data)));
  }

  GetAnimatedAvatar(request: CPlayerGetAnimatedAvatarRequest): Promise<CPlayerGetAnimatedAvatarResponse> {
    const data = CPlayerGetAnimatedAvatarRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAnimatedAvatar", data);
    return promise.then((data) => CPlayerGetAnimatedAvatarResponse.decode(new _m0.Reader(data)));
  }

  SetAnimatedAvatar(request: CPlayerSetAnimatedAvatarRequest): Promise<CPlayerSetAnimatedAvatarResponse> {
    const data = CPlayerSetAnimatedAvatarRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetAnimatedAvatar", data);
    return promise.then((data) => CPlayerSetAnimatedAvatarResponse.decode(new _m0.Reader(data)));
  }

  GetSteamDeckKeyboardSkin(
    request: CPlayerGetSteamDeckKeyboardSkinRequest,
  ): Promise<CPlayerGetSteamDeckKeyboardSkinResponse> {
    const data = CPlayerGetSteamDeckKeyboardSkinRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSteamDeckKeyboardSkin", data);
    return promise.then((data) => CPlayerGetSteamDeckKeyboardSkinResponse.decode(new _m0.Reader(data)));
  }

  SetSteamDeckKeyboardSkin(
    request: CPlayerSetSteamDeckKeyboardSkinRequest,
  ): Promise<CPlayerSetSteamDeckKeyboardSkinResponse> {
    const data = CPlayerSetSteamDeckKeyboardSkinRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSteamDeckKeyboardSkin", data);
    return promise.then((data) => CPlayerSetSteamDeckKeyboardSkinResponse.decode(new _m0.Reader(data)));
  }

  GetProfileItemsOwned(request: CPlayerGetProfileItemsOwnedRequest): Promise<CPlayerGetProfileItemsOwnedResponse> {
    const data = CPlayerGetProfileItemsOwnedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProfileItemsOwned", data);
    return promise.then((data) => CPlayerGetProfileItemsOwnedResponse.decode(new _m0.Reader(data)));
  }

  GetProfileItemsEquipped(
    request: CPlayerGetProfileItemsEquippedRequest,
  ): Promise<CPlayerGetProfileItemsEquippedResponse> {
    const data = CPlayerGetProfileItemsEquippedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProfileItemsEquipped", data);
    return promise.then((data) => CPlayerGetProfileItemsEquippedResponse.decode(new _m0.Reader(data)));
  }

  SetEquippedProfileItemFlags(
    request: CPlayerSetEquippedProfileItemFlagsRequest,
  ): Promise<CPlayerSetEquippedProfileItemFlagsResponse> {
    const data = CPlayerSetEquippedProfileItemFlagsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetEquippedProfileItemFlags", data);
    return promise.then((data) => CPlayerSetEquippedProfileItemFlagsResponse.decode(new _m0.Reader(data)));
  }

  GetEmoticonList(request: CPlayerGetEmoticonListRequest): Promise<CPlayerGetEmoticonListResponse> {
    const data = CPlayerGetEmoticonListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetEmoticonList", data);
    return promise.then((data) => CPlayerGetEmoticonListResponse.decode(new _m0.Reader(data)));
  }

  GetTopAchievementsForGames(
    request: CPlayerGetTopAchievementsForGamesRequest,
  ): Promise<CPlayerGetTopAchievementsForGamesResponse> {
    const data = CPlayerGetTopAchievementsForGamesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTopAchievementsForGames", data);
    return promise.then((data) => CPlayerGetTopAchievementsForGamesResponse.decode(new _m0.Reader(data)));
  }

  GetAchievementsProgress(
    request: CPlayerGetAchievementsProgressRequest,
  ): Promise<CPlayerGetAchievementsProgressResponse> {
    const data = CPlayerGetAchievementsProgressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAchievementsProgress", data);
    return promise.then((data) => CPlayerGetAchievementsProgressResponse.decode(new _m0.Reader(data)));
  }

  GetGameAchievements(request: CPlayerGetGameAchievementsRequest): Promise<CPlayerGetGameAchievementsResponse> {
    const data = CPlayerGetGameAchievementsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGameAchievements", data);
    return promise.then((data) => CPlayerGetGameAchievementsResponse.decode(new _m0.Reader(data)));
  }

  GetFavoriteBadge(request: CPlayerGetFavoriteBadgeRequest): Promise<CPlayerGetFavoriteBadgeResponse> {
    const data = CPlayerGetFavoriteBadgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFavoriteBadge", data);
    return promise.then((data) => CPlayerGetFavoriteBadgeResponse.decode(new _m0.Reader(data)));
  }

  SetFavoriteBadge(request: CPlayerSetFavoriteBadgeRequest): Promise<CPlayerSetFavoriteBadgeResponse> {
    const data = CPlayerSetFavoriteBadgeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetFavoriteBadge", data);
    return promise.then((data) => CPlayerSetFavoriteBadgeResponse.decode(new _m0.Reader(data)));
  }

  GetProfileCustomization(
    request: CPlayerGetProfileCustomizationRequest,
  ): Promise<CPlayerGetProfileCustomizationResponse> {
    const data = CPlayerGetProfileCustomizationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProfileCustomization", data);
    return promise.then((data) => CPlayerGetProfileCustomizationResponse.decode(new _m0.Reader(data)));
  }

  GetPurchasedProfileCustomizations(
    request: CPlayerGetPurchasedProfileCustomizationsRequest,
  ): Promise<CPlayerGetPurchasedProfileCustomizationsResponse> {
    const data = CPlayerGetPurchasedProfileCustomizationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPurchasedProfileCustomizations", data);
    return promise.then((data) => CPlayerGetPurchasedProfileCustomizationsResponse.decode(new _m0.Reader(data)));
  }

  GetPurchasedAndUpgradedProfileCustomizations(
    request: CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest,
  ): Promise<CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse> {
    const data = CPlayerGetPurchasedAndUpgradedProfileCustomizationsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPurchasedAndUpgradedProfileCustomizations", data);
    return promise.then((data) =>
      CPlayerGetPurchasedAndUpgradedProfileCustomizationsResponse.decode(new _m0.Reader(data))
    );
  }

  GetProfileThemesAvailable(
    request: CPlayerGetProfileThemesAvailableRequest,
  ): Promise<CPlayerGetProfileThemesAvailableResponse> {
    const data = CPlayerGetProfileThemesAvailableRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProfileThemesAvailable", data);
    return promise.then((data) => CPlayerGetProfileThemesAvailableResponse.decode(new _m0.Reader(data)));
  }

  SetProfileTheme(request: CPlayerSetProfileThemeRequest): Promise<CPlayerSetProfileThemeResponse> {
    const data = CPlayerSetProfileThemeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProfileTheme", data);
    return promise.then((data) => CPlayerSetProfileThemeResponse.decode(new _m0.Reader(data)));
  }

  SetProfilePreferences(request: CPlayerSetProfilePreferencesRequest): Promise<CPlayerSetProfilePreferencesResponse> {
    const data = CPlayerSetProfilePreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProfilePreferences", data);
    return promise.then((data) => CPlayerSetProfilePreferencesResponse.decode(new _m0.Reader(data)));
  }

  PostStatusToFriends(request: CPlayerPostStatusToFriendsRequest): Promise<CPlayerPostStatusToFriendsResponse> {
    const data = CPlayerPostStatusToFriendsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PostStatusToFriends", data);
    return promise.then((data) => CPlayerPostStatusToFriendsResponse.decode(new _m0.Reader(data)));
  }

  GetPostedStatus(request: CPlayerGetPostedStatusRequest): Promise<CPlayerGetPostedStatusResponse> {
    const data = CPlayerGetPostedStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPostedStatus", data);
    return promise.then((data) => CPlayerGetPostedStatusResponse.decode(new _m0.Reader(data)));
  }

  DeletePostedStatus(request: CPlayerDeletePostedStatusRequest): Promise<CPlayerDeletePostedStatusResponse> {
    const data = CPlayerDeletePostedStatusRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeletePostedStatus", data);
    return promise.then((data) => CPlayerDeletePostedStatusResponse.decode(new _m0.Reader(data)));
  }

  ClientGetLastPlayedTimes(request: CPlayerGetLastPlayedTimesRequest): Promise<CPlayerGetLastPlayedTimesResponse> {
    const data = CPlayerGetLastPlayedTimesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ClientGetLastPlayedTimes", data);
    return promise.then((data) => CPlayerGetLastPlayedTimesResponse.decode(new _m0.Reader(data)));
  }

  GetTimeSSAAccepted(request: CPlayerGetTimeSSAAcceptedRequest): Promise<CPlayerGetTimeSSAAcceptedResponse> {
    const data = CPlayerGetTimeSSAAcceptedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTimeSSAAccepted", data);
    return promise.then((data) => CPlayerGetTimeSSAAcceptedResponse.decode(new _m0.Reader(data)));
  }

  AcceptSSA(request: CPlayerAcceptSSARequest): Promise<CPlayerAcceptSSAResponse> {
    const data = CPlayerAcceptSSARequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptSSA", data);
    return promise.then((data) => CPlayerAcceptSSAResponse.decode(new _m0.Reader(data)));
  }

  GetNicknameList(request: CPlayerGetNicknameListRequest): Promise<CPlayerGetNicknameListResponse> {
    const data = CPlayerGetNicknameListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNicknameList", data);
    return promise.then((data) => CPlayerGetNicknameListResponse.decode(new _m0.Reader(data)));
  }

  GetPerFriendPreferences(
    request: CPlayerGetPerFriendPreferencesRequest,
  ): Promise<CPlayerGetPerFriendPreferencesResponse> {
    const data = CPlayerGetPerFriendPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPerFriendPreferences", data);
    return promise.then((data) => CPlayerGetPerFriendPreferencesResponse.decode(new _m0.Reader(data)));
  }

  SetPerFriendPreferences(
    request: CPlayerSetPerFriendPreferencesRequest,
  ): Promise<CPlayerSetPerFriendPreferencesResponse> {
    const data = CPlayerSetPerFriendPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetPerFriendPreferences", data);
    return promise.then((data) => CPlayerSetPerFriendPreferencesResponse.decode(new _m0.Reader(data)));
  }

  AddFriend(request: CPlayerAddFriendRequest): Promise<CPlayerAddFriendResponse> {
    const data = CPlayerAddFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddFriend", data);
    return promise.then((data) => CPlayerAddFriendResponse.decode(new _m0.Reader(data)));
  }

  RemoveFriend(request: CPlayerRemoveFriendRequest): Promise<CPlayerRemoveFriendResponse> {
    const data = CPlayerRemoveFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveFriend", data);
    return promise.then((data) => CPlayerRemoveFriendResponse.decode(new _m0.Reader(data)));
  }

  IgnoreFriend(request: CPlayerIgnoreFriendRequest): Promise<CPlayerIgnoreFriendResponse> {
    const data = CPlayerIgnoreFriendRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IgnoreFriend", data);
    return promise.then((data) => CPlayerIgnoreFriendResponse.decode(new _m0.Reader(data)));
  }

  GetCommunityPreferences(
    request: CPlayerGetCommunityPreferencesRequest,
  ): Promise<CPlayerGetCommunityPreferencesResponse> {
    const data = CPlayerGetCommunityPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCommunityPreferences", data);
    return promise.then((data) => CPlayerGetCommunityPreferencesResponse.decode(new _m0.Reader(data)));
  }

  SetCommunityPreferences(
    request: CPlayerSetCommunityPreferencesRequest,
  ): Promise<CPlayerSetCommunityPreferencesResponse> {
    const data = CPlayerSetCommunityPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetCommunityPreferences", data);
    return promise.then((data) => CPlayerSetCommunityPreferencesResponse.decode(new _m0.Reader(data)));
  }

  GetTextFilterWords(request: CPlayerGetTextFilterWordsRequest): Promise<CPlayerGetTextFilterWordsResponse> {
    const data = CPlayerGetTextFilterWordsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetTextFilterWords", data);
    return promise.then((data) => CPlayerGetTextFilterWordsResponse.decode(new _m0.Reader(data)));
  }

  GetNewSteamAnnouncementState(
    request: CPlayerGetNewSteamAnnouncementStateRequest,
  ): Promise<CPlayerGetNewSteamAnnouncementStateResponse> {
    const data = CPlayerGetNewSteamAnnouncementStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNewSteamAnnouncementState", data);
    return promise.then((data) => CPlayerGetNewSteamAnnouncementStateResponse.decode(new _m0.Reader(data)));
  }

  UpdateSteamAnnouncementLastRead(
    request: CPlayerUpdateSteamAnnouncementLastReadRequest,
  ): Promise<CPlayerUpdateSteamAnnouncementLastReadResponse> {
    const data = CPlayerUpdateSteamAnnouncementLastReadRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSteamAnnouncementLastRead", data);
    return promise.then((data) => CPlayerUpdateSteamAnnouncementLastReadResponse.decode(new _m0.Reader(data)));
  }

  GetPrivacySettings(request: CPlayerGetPrivacySettingsRequest): Promise<CPlayerGetPrivacySettingsResponse> {
    const data = CPlayerGetPrivacySettingsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPrivacySettings", data);
    return promise.then((data) => CPlayerGetPrivacySettingsResponse.decode(new _m0.Reader(data)));
  }

  GetDurationControl(request: CPlayerGetDurationControlRequest): Promise<CPlayerGetDurationControlResponse> {
    const data = CPlayerGetDurationControlRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetDurationControl", data);
    return promise.then((data) => CPlayerGetDurationControlResponse.decode(new _m0.Reader(data)));
  }

  RecordDisconnectedPlaytime(
    request: CPlayerRecordDisconnectedPlaytimeRequest,
  ): Promise<CPlayerRecordDisconnectedPlaytimeResponse> {
    const data = CPlayerRecordDisconnectedPlaytimeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RecordDisconnectedPlaytime", data);
    return promise.then((data) => CPlayerRecordDisconnectedPlaytimeResponse.decode(new _m0.Reader(data)));
  }
}

export interface PlayerClient {
  NotifyLastPlayedTimes(request: CPlayerLastPlayedTimesNotification): Promise<NoResponse>;
  NotifyFriendNicknameChanged(request: CPlayerFriendNicknameChangedNotification): Promise<NoResponse>;
  NotifyFriendEquippedProfileItemsChanged(
    request: CPlayerFriendEquippedProfileItemsChangedNotification,
  ): Promise<NoResponse>;
  NotifyNewSteamAnnouncementState(request: CPlayerNewSteamAnnouncementStateNotification): Promise<NoResponse>;
  NotifyCommunityPreferencesChanged(request: CPlayerCommunityPreferencesChangedNotification): Promise<NoResponse>;
  NotifyTextFilterWordsChanged(request: CPlayerTextFilterWordsChangedNotification): Promise<NoResponse>;
  NotifyPerFriendPreferencesChanged(request: CPlayerPerFriendPreferencesChangedNotification): Promise<NoResponse>;
  NotifyPrivacyPrivacySettingsChanged(request: CPlayerPrivacySettingsChangedNotification): Promise<NoResponse>;
}

export class PlayerClientClientImpl implements PlayerClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "PlayerClient";
    this.rpc = rpc;
    this.NotifyLastPlayedTimes = this.NotifyLastPlayedTimes.bind(this);
    this.NotifyFriendNicknameChanged = this.NotifyFriendNicknameChanged.bind(this);
    this.NotifyFriendEquippedProfileItemsChanged = this.NotifyFriendEquippedProfileItemsChanged.bind(this);
    this.NotifyNewSteamAnnouncementState = this.NotifyNewSteamAnnouncementState.bind(this);
    this.NotifyCommunityPreferencesChanged = this.NotifyCommunityPreferencesChanged.bind(this);
    this.NotifyTextFilterWordsChanged = this.NotifyTextFilterWordsChanged.bind(this);
    this.NotifyPerFriendPreferencesChanged = this.NotifyPerFriendPreferencesChanged.bind(this);
    this.NotifyPrivacyPrivacySettingsChanged = this.NotifyPrivacyPrivacySettingsChanged.bind(this);
  }
  NotifyLastPlayedTimes(request: CPlayerLastPlayedTimesNotification): Promise<NoResponse> {
    const data = CPlayerLastPlayedTimesNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyLastPlayedTimes", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyFriendNicknameChanged(request: CPlayerFriendNicknameChangedNotification): Promise<NoResponse> {
    const data = CPlayerFriendNicknameChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyFriendNicknameChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyFriendEquippedProfileItemsChanged(
    request: CPlayerFriendEquippedProfileItemsChangedNotification,
  ): Promise<NoResponse> {
    const data = CPlayerFriendEquippedProfileItemsChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyFriendEquippedProfileItemsChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyNewSteamAnnouncementState(request: CPlayerNewSteamAnnouncementStateNotification): Promise<NoResponse> {
    const data = CPlayerNewSteamAnnouncementStateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyNewSteamAnnouncementState", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyCommunityPreferencesChanged(request: CPlayerCommunityPreferencesChangedNotification): Promise<NoResponse> {
    const data = CPlayerCommunityPreferencesChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyCommunityPreferencesChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyTextFilterWordsChanged(request: CPlayerTextFilterWordsChangedNotification): Promise<NoResponse> {
    const data = CPlayerTextFilterWordsChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyTextFilterWordsChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyPerFriendPreferencesChanged(request: CPlayerPerFriendPreferencesChangedNotification): Promise<NoResponse> {
    const data = CPlayerPerFriendPreferencesChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyPerFriendPreferencesChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyPrivacyPrivacySettingsChanged(request: CPlayerPrivacySettingsChangedNotification): Promise<NoResponse> {
    const data = CPlayerPrivacySettingsChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyPrivacyPrivacySettingsChanged", data);
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
