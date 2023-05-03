/* eslint-disable */

export const protobufPackage = "";

export enum EPublishedFileQueryType {
  k_PublishedFileQueryType_RankedByVote = 0,
  k_PublishedFileQueryType_RankedByPublicationDate = 1,
  k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate = 2,
  k_PublishedFileQueryType_RankedByTrend = 3,
  k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate = 4,
  k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate = 5,
  k_PublishedFileQueryType_RankedByNumTimesReported = 6,
  k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate = 7,
  k_PublishedFileQueryType_NotYetRated = 8,
  k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions = 9,
  k_PublishedFileQueryType_RankedByTotalVotesAsc = 10,
  k_PublishedFileQueryType_RankedByVotesUp = 11,
  k_PublishedFileQueryType_RankedByTextSearch = 12,
  k_PublishedFileQueryType_RankedByPlaytimeTrend = 13,
  k_PublishedFileQueryType_RankedByTotalPlaytime = 14,
  k_PublishedFileQueryType_RankedByAveragePlaytimeTrend = 15,
  k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime = 16,
  k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend = 17,
  k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions = 18,
  k_PublishedFileQueryType_RankedByInappropriateContentRating = 19,
  k_PublishedFileQueryType_RankedByBanContentCheck = 20,
  k_PublishedFileQueryType_RankedByLastUpdatedDate = 21,
  UNRECOGNIZED = -1,
}

export function ePublishedFileQueryTypeFromJSON(object: any): EPublishedFileQueryType {
  switch (object) {
    case 0:
    case "k_PublishedFileQueryType_RankedByVote":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByVote;
    case 1:
    case "k_PublishedFileQueryType_RankedByPublicationDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPublicationDate;
    case 2:
    case "k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate;
    case 3:
    case "k_PublishedFileQueryType_RankedByTrend":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTrend;
    case 4:
    case "k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate;
    case 5:
    case "k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate;
    case 6:
    case "k_PublishedFileQueryType_RankedByNumTimesReported":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByNumTimesReported;
    case 7:
    case "k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate;
    case 8:
    case "k_PublishedFileQueryType_NotYetRated":
      return EPublishedFileQueryType.k_PublishedFileQueryType_NotYetRated;
    case 9:
    case "k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions;
    case 10:
    case "k_PublishedFileQueryType_RankedByTotalVotesAsc":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalVotesAsc;
    case 11:
    case "k_PublishedFileQueryType_RankedByVotesUp":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByVotesUp;
    case 12:
    case "k_PublishedFileQueryType_RankedByTextSearch":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTextSearch;
    case 13:
    case "k_PublishedFileQueryType_RankedByPlaytimeTrend":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPlaytimeTrend;
    case 14:
    case "k_PublishedFileQueryType_RankedByTotalPlaytime":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalPlaytime;
    case 15:
    case "k_PublishedFileQueryType_RankedByAveragePlaytimeTrend":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByAveragePlaytimeTrend;
    case 16:
    case "k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime;
    case 17:
    case "k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend;
    case 18:
    case "k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions;
    case 19:
    case "k_PublishedFileQueryType_RankedByInappropriateContentRating":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByInappropriateContentRating;
    case 20:
    case "k_PublishedFileQueryType_RankedByBanContentCheck":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByBanContentCheck;
    case 21:
    case "k_PublishedFileQueryType_RankedByLastUpdatedDate":
      return EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLastUpdatedDate;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileQueryType.UNRECOGNIZED;
  }
}

export function ePublishedFileQueryTypeToJSON(object: EPublishedFileQueryType): string {
  switch (object) {
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByVote:
      return "k_PublishedFileQueryType_RankedByVote";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPublicationDate:
      return "k_PublishedFileQueryType_RankedByPublicationDate";
    case EPublishedFileQueryType.k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate:
      return "k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTrend:
      return "k_PublishedFileQueryType_RankedByTrend";
    case EPublishedFileQueryType.k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate:
      return "k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate";
    case EPublishedFileQueryType.k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate:
      return "k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByNumTimesReported:
      return "k_PublishedFileQueryType_RankedByNumTimesReported";
    case EPublishedFileQueryType.k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate:
      return "k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate";
    case EPublishedFileQueryType.k_PublishedFileQueryType_NotYetRated:
      return "k_PublishedFileQueryType_NotYetRated";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions:
      return "k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalVotesAsc:
      return "k_PublishedFileQueryType_RankedByTotalVotesAsc";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByVotesUp:
      return "k_PublishedFileQueryType_RankedByVotesUp";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTextSearch:
      return "k_PublishedFileQueryType_RankedByTextSearch";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPlaytimeTrend:
      return "k_PublishedFileQueryType_RankedByPlaytimeTrend";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByTotalPlaytime:
      return "k_PublishedFileQueryType_RankedByTotalPlaytime";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByAveragePlaytimeTrend:
      return "k_PublishedFileQueryType_RankedByAveragePlaytimeTrend";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime:
      return "k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend:
      return "k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions:
      return "k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByInappropriateContentRating:
      return "k_PublishedFileQueryType_RankedByInappropriateContentRating";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByBanContentCheck:
      return "k_PublishedFileQueryType_RankedByBanContentCheck";
    case EPublishedFileQueryType.k_PublishedFileQueryType_RankedByLastUpdatedDate:
      return "k_PublishedFileQueryType_RankedByLastUpdatedDate";
    case EPublishedFileQueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPublishedFileInappropriateProvider {
  k_EPublishedFileInappropriateProvider_Invalid = 0,
  k_EPublishedFileInappropriateProvider_Google = 1,
  k_EPublishedFileInappropriateProvider_Amazon = 2,
  UNRECOGNIZED = -1,
}

export function ePublishedFileInappropriateProviderFromJSON(object: any): EPublishedFileInappropriateProvider {
  switch (object) {
    case 0:
    case "k_EPublishedFileInappropriateProvider_Invalid":
      return EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Invalid;
    case 1:
    case "k_EPublishedFileInappropriateProvider_Google":
      return EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Google;
    case 2:
    case "k_EPublishedFileInappropriateProvider_Amazon":
      return EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Amazon;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileInappropriateProvider.UNRECOGNIZED;
  }
}

export function ePublishedFileInappropriateProviderToJSON(object: EPublishedFileInappropriateProvider): string {
  switch (object) {
    case EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Invalid:
      return "k_EPublishedFileInappropriateProvider_Invalid";
    case EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Google:
      return "k_EPublishedFileInappropriateProvider_Google";
    case EPublishedFileInappropriateProvider.k_EPublishedFileInappropriateProvider_Amazon:
      return "k_EPublishedFileInappropriateProvider_Amazon";
    case EPublishedFileInappropriateProvider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPublishedFileInappropriateResult {
  k_EPublishedFileInappropriateResult_NotScanned = 0,
  k_EPublishedFileInappropriateResult_VeryUnlikely = 1,
  k_EPublishedFileInappropriateResult_Unlikely = 30,
  k_EPublishedFileInappropriateResult_Possible = 50,
  k_EPublishedFileInappropriateResult_Likely = 75,
  k_EPublishedFileInappropriateResult_VeryLikely = 100,
  UNRECOGNIZED = -1,
}

export function ePublishedFileInappropriateResultFromJSON(object: any): EPublishedFileInappropriateResult {
  switch (object) {
    case 0:
    case "k_EPublishedFileInappropriateResult_NotScanned":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_NotScanned;
    case 1:
    case "k_EPublishedFileInappropriateResult_VeryUnlikely":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_VeryUnlikely;
    case 30:
    case "k_EPublishedFileInappropriateResult_Unlikely":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Unlikely;
    case 50:
    case "k_EPublishedFileInappropriateResult_Possible":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Possible;
    case 75:
    case "k_EPublishedFileInappropriateResult_Likely":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Likely;
    case 100:
    case "k_EPublishedFileInappropriateResult_VeryLikely":
      return EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_VeryLikely;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileInappropriateResult.UNRECOGNIZED;
  }
}

export function ePublishedFileInappropriateResultToJSON(object: EPublishedFileInappropriateResult): string {
  switch (object) {
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_NotScanned:
      return "k_EPublishedFileInappropriateResult_NotScanned";
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_VeryUnlikely:
      return "k_EPublishedFileInappropriateResult_VeryUnlikely";
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Unlikely:
      return "k_EPublishedFileInappropriateResult_Unlikely";
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Possible:
      return "k_EPublishedFileInappropriateResult_Possible";
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_Likely:
      return "k_EPublishedFileInappropriateResult_Likely";
    case EPublishedFileInappropriateResult.k_EPublishedFileInappropriateResult_VeryLikely:
      return "k_EPublishedFileInappropriateResult_VeryLikely";
    case EPublishedFileInappropriateResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPersonaStateFlag {
  k_EPersonaStateFlag_HasRichPresence = 1,
  k_EPersonaStateFlag_InJoinableGame = 2,
  k_EPersonaStateFlag_Golden = 4,
  k_EPersonaStateFlag_RemotePlayTogether = 8,
  k_EPersonaStateFlag_ClientTypeWeb = 256,
  k_EPersonaStateFlag_ClientTypeMobile = 512,
  k_EPersonaStateFlag_ClientTypeTenfoot = 1024,
  k_EPersonaStateFlag_ClientTypeVR = 2048,
  k_EPersonaStateFlag_LaunchTypeGamepad = 4096,
  k_EPersonaStateFlag_LaunchTypeCompatTool = 8192,
  UNRECOGNIZED = -1,
}

export function ePersonaStateFlagFromJSON(object: any): EPersonaStateFlag {
  switch (object) {
    case 1:
    case "k_EPersonaStateFlag_HasRichPresence":
      return EPersonaStateFlag.k_EPersonaStateFlag_HasRichPresence;
    case 2:
    case "k_EPersonaStateFlag_InJoinableGame":
      return EPersonaStateFlag.k_EPersonaStateFlag_InJoinableGame;
    case 4:
    case "k_EPersonaStateFlag_Golden":
      return EPersonaStateFlag.k_EPersonaStateFlag_Golden;
    case 8:
    case "k_EPersonaStateFlag_RemotePlayTogether":
      return EPersonaStateFlag.k_EPersonaStateFlag_RemotePlayTogether;
    case 256:
    case "k_EPersonaStateFlag_ClientTypeWeb":
      return EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeWeb;
    case 512:
    case "k_EPersonaStateFlag_ClientTypeMobile":
      return EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeMobile;
    case 1024:
    case "k_EPersonaStateFlag_ClientTypeTenfoot":
      return EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeTenfoot;
    case 2048:
    case "k_EPersonaStateFlag_ClientTypeVR":
      return EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeVR;
    case 4096:
    case "k_EPersonaStateFlag_LaunchTypeGamepad":
      return EPersonaStateFlag.k_EPersonaStateFlag_LaunchTypeGamepad;
    case 8192:
    case "k_EPersonaStateFlag_LaunchTypeCompatTool":
      return EPersonaStateFlag.k_EPersonaStateFlag_LaunchTypeCompatTool;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPersonaStateFlag.UNRECOGNIZED;
  }
}

export function ePersonaStateFlagToJSON(object: EPersonaStateFlag): string {
  switch (object) {
    case EPersonaStateFlag.k_EPersonaStateFlag_HasRichPresence:
      return "k_EPersonaStateFlag_HasRichPresence";
    case EPersonaStateFlag.k_EPersonaStateFlag_InJoinableGame:
      return "k_EPersonaStateFlag_InJoinableGame";
    case EPersonaStateFlag.k_EPersonaStateFlag_Golden:
      return "k_EPersonaStateFlag_Golden";
    case EPersonaStateFlag.k_EPersonaStateFlag_RemotePlayTogether:
      return "k_EPersonaStateFlag_RemotePlayTogether";
    case EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeWeb:
      return "k_EPersonaStateFlag_ClientTypeWeb";
    case EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeMobile:
      return "k_EPersonaStateFlag_ClientTypeMobile";
    case EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeTenfoot:
      return "k_EPersonaStateFlag_ClientTypeTenfoot";
    case EPersonaStateFlag.k_EPersonaStateFlag_ClientTypeVR:
      return "k_EPersonaStateFlag_ClientTypeVR";
    case EPersonaStateFlag.k_EPersonaStateFlag_LaunchTypeGamepad:
      return "k_EPersonaStateFlag_LaunchTypeGamepad";
    case EPersonaStateFlag.k_EPersonaStateFlag_LaunchTypeCompatTool:
      return "k_EPersonaStateFlag_LaunchTypeCompatTool";
    case EPersonaStateFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EContentCheckProvider {
  k_EContentCheckProvider_Invalid = 0,
  k_EContentCheckProvider_Google = 1,
  k_EContentCheckProvider_Amazon = 2,
  k_EContentCheckProvider_Local = 3,
  UNRECOGNIZED = -1,
}

export function eContentCheckProviderFromJSON(object: any): EContentCheckProvider {
  switch (object) {
    case 0:
    case "k_EContentCheckProvider_Invalid":
      return EContentCheckProvider.k_EContentCheckProvider_Invalid;
    case 1:
    case "k_EContentCheckProvider_Google":
      return EContentCheckProvider.k_EContentCheckProvider_Google;
    case 2:
    case "k_EContentCheckProvider_Amazon":
      return EContentCheckProvider.k_EContentCheckProvider_Amazon;
    case 3:
    case "k_EContentCheckProvider_Local":
      return EContentCheckProvider.k_EContentCheckProvider_Local;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EContentCheckProvider.UNRECOGNIZED;
  }
}

export function eContentCheckProviderToJSON(object: EContentCheckProvider): string {
  switch (object) {
    case EContentCheckProvider.k_EContentCheckProvider_Invalid:
      return "k_EContentCheckProvider_Invalid";
    case EContentCheckProvider.k_EContentCheckProvider_Google:
      return "k_EContentCheckProvider_Google";
    case EContentCheckProvider.k_EContentCheckProvider_Amazon:
      return "k_EContentCheckProvider_Amazon";
    case EContentCheckProvider.k_EContentCheckProvider_Local:
      return "k_EContentCheckProvider_Local";
    case EContentCheckProvider.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EProfileCustomizationType {
  k_EProfileCustomizationTypeInvalid = 0,
  k_EProfileCustomizationTypeRareAchievementShowcase = 1,
  k_EProfileCustomizationTypeGameCollector = 2,
  k_EProfileCustomizationTypeItemShowcase = 3,
  k_EProfileCustomizationTypeTradeShowcase = 4,
  k_EProfileCustomizationTypeBadges = 5,
  k_EProfileCustomizationTypeFavoriteGame = 6,
  k_EProfileCustomizationTypeScreenshotShowcase = 7,
  k_EProfileCustomizationTypeCustomText = 8,
  k_EProfileCustomizationTypeFavoriteGroup = 9,
  k_EProfileCustomizationTypeRecommendation = 10,
  k_EProfileCustomizationTypeWorkshopItem = 11,
  k_EProfileCustomizationTypeMyWorkshop = 12,
  k_EProfileCustomizationTypeArtworkShowcase = 13,
  k_EProfileCustomizationTypeVideoShowcase = 14,
  k_EProfileCustomizationTypeGuides = 15,
  k_EProfileCustomizationTypeMyGuides = 16,
  k_EProfileCustomizationTypeAchievements = 17,
  k_EProfileCustomizationTypeGreenlight = 18,
  k_EProfileCustomizationTypeMyGreenlight = 19,
  k_EProfileCustomizationTypeSalien = 20,
  k_EProfileCustomizationTypeLoyaltyRewardReactions = 21,
  k_EProfileCustomizationTypeSingleArtworkShowcase = 22,
  k_EProfileCustomizationTypeAchievementsCompletionist = 23,
  k_EProfileCustomizationTypeReplay = 24,
  UNRECOGNIZED = -1,
}

export function eProfileCustomizationTypeFromJSON(object: any): EProfileCustomizationType {
  switch (object) {
    case 0:
    case "k_EProfileCustomizationTypeInvalid":
      return EProfileCustomizationType.k_EProfileCustomizationTypeInvalid;
    case 1:
    case "k_EProfileCustomizationTypeRareAchievementShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeRareAchievementShowcase;
    case 2:
    case "k_EProfileCustomizationTypeGameCollector":
      return EProfileCustomizationType.k_EProfileCustomizationTypeGameCollector;
    case 3:
    case "k_EProfileCustomizationTypeItemShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeItemShowcase;
    case 4:
    case "k_EProfileCustomizationTypeTradeShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeTradeShowcase;
    case 5:
    case "k_EProfileCustomizationTypeBadges":
      return EProfileCustomizationType.k_EProfileCustomizationTypeBadges;
    case 6:
    case "k_EProfileCustomizationTypeFavoriteGame":
      return EProfileCustomizationType.k_EProfileCustomizationTypeFavoriteGame;
    case 7:
    case "k_EProfileCustomizationTypeScreenshotShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeScreenshotShowcase;
    case 8:
    case "k_EProfileCustomizationTypeCustomText":
      return EProfileCustomizationType.k_EProfileCustomizationTypeCustomText;
    case 9:
    case "k_EProfileCustomizationTypeFavoriteGroup":
      return EProfileCustomizationType.k_EProfileCustomizationTypeFavoriteGroup;
    case 10:
    case "k_EProfileCustomizationTypeRecommendation":
      return EProfileCustomizationType.k_EProfileCustomizationTypeRecommendation;
    case 11:
    case "k_EProfileCustomizationTypeWorkshopItem":
      return EProfileCustomizationType.k_EProfileCustomizationTypeWorkshopItem;
    case 12:
    case "k_EProfileCustomizationTypeMyWorkshop":
      return EProfileCustomizationType.k_EProfileCustomizationTypeMyWorkshop;
    case 13:
    case "k_EProfileCustomizationTypeArtworkShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeArtworkShowcase;
    case 14:
    case "k_EProfileCustomizationTypeVideoShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeVideoShowcase;
    case 15:
    case "k_EProfileCustomizationTypeGuides":
      return EProfileCustomizationType.k_EProfileCustomizationTypeGuides;
    case 16:
    case "k_EProfileCustomizationTypeMyGuides":
      return EProfileCustomizationType.k_EProfileCustomizationTypeMyGuides;
    case 17:
    case "k_EProfileCustomizationTypeAchievements":
      return EProfileCustomizationType.k_EProfileCustomizationTypeAchievements;
    case 18:
    case "k_EProfileCustomizationTypeGreenlight":
      return EProfileCustomizationType.k_EProfileCustomizationTypeGreenlight;
    case 19:
    case "k_EProfileCustomizationTypeMyGreenlight":
      return EProfileCustomizationType.k_EProfileCustomizationTypeMyGreenlight;
    case 20:
    case "k_EProfileCustomizationTypeSalien":
      return EProfileCustomizationType.k_EProfileCustomizationTypeSalien;
    case 21:
    case "k_EProfileCustomizationTypeLoyaltyRewardReactions":
      return EProfileCustomizationType.k_EProfileCustomizationTypeLoyaltyRewardReactions;
    case 22:
    case "k_EProfileCustomizationTypeSingleArtworkShowcase":
      return EProfileCustomizationType.k_EProfileCustomizationTypeSingleArtworkShowcase;
    case 23:
    case "k_EProfileCustomizationTypeAchievementsCompletionist":
      return EProfileCustomizationType.k_EProfileCustomizationTypeAchievementsCompletionist;
    case 24:
    case "k_EProfileCustomizationTypeReplay":
      return EProfileCustomizationType.k_EProfileCustomizationTypeReplay;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EProfileCustomizationType.UNRECOGNIZED;
  }
}

export function eProfileCustomizationTypeToJSON(object: EProfileCustomizationType): string {
  switch (object) {
    case EProfileCustomizationType.k_EProfileCustomizationTypeInvalid:
      return "k_EProfileCustomizationTypeInvalid";
    case EProfileCustomizationType.k_EProfileCustomizationTypeRareAchievementShowcase:
      return "k_EProfileCustomizationTypeRareAchievementShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeGameCollector:
      return "k_EProfileCustomizationTypeGameCollector";
    case EProfileCustomizationType.k_EProfileCustomizationTypeItemShowcase:
      return "k_EProfileCustomizationTypeItemShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeTradeShowcase:
      return "k_EProfileCustomizationTypeTradeShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeBadges:
      return "k_EProfileCustomizationTypeBadges";
    case EProfileCustomizationType.k_EProfileCustomizationTypeFavoriteGame:
      return "k_EProfileCustomizationTypeFavoriteGame";
    case EProfileCustomizationType.k_EProfileCustomizationTypeScreenshotShowcase:
      return "k_EProfileCustomizationTypeScreenshotShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeCustomText:
      return "k_EProfileCustomizationTypeCustomText";
    case EProfileCustomizationType.k_EProfileCustomizationTypeFavoriteGroup:
      return "k_EProfileCustomizationTypeFavoriteGroup";
    case EProfileCustomizationType.k_EProfileCustomizationTypeRecommendation:
      return "k_EProfileCustomizationTypeRecommendation";
    case EProfileCustomizationType.k_EProfileCustomizationTypeWorkshopItem:
      return "k_EProfileCustomizationTypeWorkshopItem";
    case EProfileCustomizationType.k_EProfileCustomizationTypeMyWorkshop:
      return "k_EProfileCustomizationTypeMyWorkshop";
    case EProfileCustomizationType.k_EProfileCustomizationTypeArtworkShowcase:
      return "k_EProfileCustomizationTypeArtworkShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeVideoShowcase:
      return "k_EProfileCustomizationTypeVideoShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeGuides:
      return "k_EProfileCustomizationTypeGuides";
    case EProfileCustomizationType.k_EProfileCustomizationTypeMyGuides:
      return "k_EProfileCustomizationTypeMyGuides";
    case EProfileCustomizationType.k_EProfileCustomizationTypeAchievements:
      return "k_EProfileCustomizationTypeAchievements";
    case EProfileCustomizationType.k_EProfileCustomizationTypeGreenlight:
      return "k_EProfileCustomizationTypeGreenlight";
    case EProfileCustomizationType.k_EProfileCustomizationTypeMyGreenlight:
      return "k_EProfileCustomizationTypeMyGreenlight";
    case EProfileCustomizationType.k_EProfileCustomizationTypeSalien:
      return "k_EProfileCustomizationTypeSalien";
    case EProfileCustomizationType.k_EProfileCustomizationTypeLoyaltyRewardReactions:
      return "k_EProfileCustomizationTypeLoyaltyRewardReactions";
    case EProfileCustomizationType.k_EProfileCustomizationTypeSingleArtworkShowcase:
      return "k_EProfileCustomizationTypeSingleArtworkShowcase";
    case EProfileCustomizationType.k_EProfileCustomizationTypeAchievementsCompletionist:
      return "k_EProfileCustomizationTypeAchievementsCompletionist";
    case EProfileCustomizationType.k_EProfileCustomizationTypeReplay:
      return "k_EProfileCustomizationTypeReplay";
    case EProfileCustomizationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EPublishedFileStorageSystem {
  k_EPublishedFileStorageSystemInvalid = 0,
  k_EPublishedFileStorageSystemLegacyCloud = 1,
  k_EPublishedFileStorageSystemDepot = 2,
  k_EPublishedFileStorageSystemUGCCloud = 3,
  UNRECOGNIZED = -1,
}

export function ePublishedFileStorageSystemFromJSON(object: any): EPublishedFileStorageSystem {
  switch (object) {
    case 0:
    case "k_EPublishedFileStorageSystemInvalid":
      return EPublishedFileStorageSystem.k_EPublishedFileStorageSystemInvalid;
    case 1:
    case "k_EPublishedFileStorageSystemLegacyCloud":
      return EPublishedFileStorageSystem.k_EPublishedFileStorageSystemLegacyCloud;
    case 2:
    case "k_EPublishedFileStorageSystemDepot":
      return EPublishedFileStorageSystem.k_EPublishedFileStorageSystemDepot;
    case 3:
    case "k_EPublishedFileStorageSystemUGCCloud":
      return EPublishedFileStorageSystem.k_EPublishedFileStorageSystemUGCCloud;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EPublishedFileStorageSystem.UNRECOGNIZED;
  }
}

export function ePublishedFileStorageSystemToJSON(object: EPublishedFileStorageSystem): string {
  switch (object) {
    case EPublishedFileStorageSystem.k_EPublishedFileStorageSystemInvalid:
      return "k_EPublishedFileStorageSystemInvalid";
    case EPublishedFileStorageSystem.k_EPublishedFileStorageSystemLegacyCloud:
      return "k_EPublishedFileStorageSystemLegacyCloud";
    case EPublishedFileStorageSystem.k_EPublishedFileStorageSystemDepot:
      return "k_EPublishedFileStorageSystemDepot";
    case EPublishedFileStorageSystem.k_EPublishedFileStorageSystemUGCCloud:
      return "k_EPublishedFileStorageSystemUGCCloud";
    case EPublishedFileStorageSystem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ECloudStoragePersistState {
  k_ECloudStoragePersistStatePersisted = 0,
  k_ECloudStoragePersistStateForgotten = 1,
  k_ECloudStoragePersistStateDeleted = 2,
  UNRECOGNIZED = -1,
}

export function eCloudStoragePersistStateFromJSON(object: any): ECloudStoragePersistState {
  switch (object) {
    case 0:
    case "k_ECloudStoragePersistStatePersisted":
      return ECloudStoragePersistState.k_ECloudStoragePersistStatePersisted;
    case 1:
    case "k_ECloudStoragePersistStateForgotten":
      return ECloudStoragePersistState.k_ECloudStoragePersistStateForgotten;
    case 2:
    case "k_ECloudStoragePersistStateDeleted":
      return ECloudStoragePersistState.k_ECloudStoragePersistStateDeleted;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECloudStoragePersistState.UNRECOGNIZED;
  }
}

export function eCloudStoragePersistStateToJSON(object: ECloudStoragePersistState): string {
  switch (object) {
    case ECloudStoragePersistState.k_ECloudStoragePersistStatePersisted:
      return "k_ECloudStoragePersistStatePersisted";
    case ECloudStoragePersistState.k_ECloudStoragePersistStateForgotten:
      return "k_ECloudStoragePersistStateForgotten";
    case ECloudStoragePersistState.k_ECloudStoragePersistStateDeleted:
      return "k_ECloudStoragePersistStateDeleted";
    case ECloudStoragePersistState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESDCardFormatStage {
  k_ESDCardFormatStage_Invalid = 0,
  k_ESDCardFormatStage_Starting = 1,
  k_ESDCardFormatStage_Testing = 2,
  k_ESDCardFormatStage_Rescuing = 3,
  k_ESDCardFormatStage_Formatting = 4,
  k_ESDCardFormatStage_Finalizing = 5,
  UNRECOGNIZED = -1,
}

export function eSDCardFormatStageFromJSON(object: any): ESDCardFormatStage {
  switch (object) {
    case 0:
    case "k_ESDCardFormatStage_Invalid":
      return ESDCardFormatStage.k_ESDCardFormatStage_Invalid;
    case 1:
    case "k_ESDCardFormatStage_Starting":
      return ESDCardFormatStage.k_ESDCardFormatStage_Starting;
    case 2:
    case "k_ESDCardFormatStage_Testing":
      return ESDCardFormatStage.k_ESDCardFormatStage_Testing;
    case 3:
    case "k_ESDCardFormatStage_Rescuing":
      return ESDCardFormatStage.k_ESDCardFormatStage_Rescuing;
    case 4:
    case "k_ESDCardFormatStage_Formatting":
      return ESDCardFormatStage.k_ESDCardFormatStage_Formatting;
    case 5:
    case "k_ESDCardFormatStage_Finalizing":
      return ESDCardFormatStage.k_ESDCardFormatStage_Finalizing;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESDCardFormatStage.UNRECOGNIZED;
  }
}

export function eSDCardFormatStageToJSON(object: ESDCardFormatStage): string {
  switch (object) {
    case ESDCardFormatStage.k_ESDCardFormatStage_Invalid:
      return "k_ESDCardFormatStage_Invalid";
    case ESDCardFormatStage.k_ESDCardFormatStage_Starting:
      return "k_ESDCardFormatStage_Starting";
    case ESDCardFormatStage.k_ESDCardFormatStage_Testing:
      return "k_ESDCardFormatStage_Testing";
    case ESDCardFormatStage.k_ESDCardFormatStage_Rescuing:
      return "k_ESDCardFormatStage_Rescuing";
    case ESDCardFormatStage.k_ESDCardFormatStage_Formatting:
      return "k_ESDCardFormatStage_Formatting";
    case ESDCardFormatStage.k_ESDCardFormatStage_Finalizing:
      return "k_ESDCardFormatStage_Finalizing";
    case ESDCardFormatStage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemFanControlMode {
  k_SystemFanControlMode_Invalid = 0,
  k_SystemFanControlMode_Disabled = 1,
  k_SystemFanControlMode_Default = 2,
  UNRECOGNIZED = -1,
}

export function eSystemFanControlModeFromJSON(object: any): ESystemFanControlMode {
  switch (object) {
    case 0:
    case "k_SystemFanControlMode_Invalid":
      return ESystemFanControlMode.k_SystemFanControlMode_Invalid;
    case 1:
    case "k_SystemFanControlMode_Disabled":
      return ESystemFanControlMode.k_SystemFanControlMode_Disabled;
    case 2:
    case "k_SystemFanControlMode_Default":
      return ESystemFanControlMode.k_SystemFanControlMode_Default;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemFanControlMode.UNRECOGNIZED;
  }
}

export function eSystemFanControlModeToJSON(object: ESystemFanControlMode): string {
  switch (object) {
    case ESystemFanControlMode.k_SystemFanControlMode_Invalid:
      return "k_SystemFanControlMode_Invalid";
    case ESystemFanControlMode.k_SystemFanControlMode_Disabled:
      return "k_SystemFanControlMode_Disabled";
    case ESystemFanControlMode.k_SystemFanControlMode_Default:
      return "k_SystemFanControlMode_Default";
    case ESystemFanControlMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EBluetoothDeviceType {
  k_BluetoothDeviceType_Invalid = 0,
  k_BluetoothDeviceType_Unknown = 1,
  k_BluetoothDeviceType_Phone = 2,
  k_BluetoothDeviceType_Computer = 3,
  k_BluetoothDeviceType_Headset = 4,
  k_BluetoothDeviceType_Headphones = 5,
  k_BluetoothDeviceType_Speakers = 6,
  k_BluetoothDeviceType_OtherAudio = 7,
  k_BluetoothDeviceType_Mouse = 8,
  k_BluetoothDeviceType_Joystick = 9,
  k_BluetoothDeviceType_Gamepad = 10,
  k_BluetoothDeviceType_Keyboard = 11,
  UNRECOGNIZED = -1,
}

export function eBluetoothDeviceTypeFromJSON(object: any): EBluetoothDeviceType {
  switch (object) {
    case 0:
    case "k_BluetoothDeviceType_Invalid":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Invalid;
    case 1:
    case "k_BluetoothDeviceType_Unknown":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Unknown;
    case 2:
    case "k_BluetoothDeviceType_Phone":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Phone;
    case 3:
    case "k_BluetoothDeviceType_Computer":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Computer;
    case 4:
    case "k_BluetoothDeviceType_Headset":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Headset;
    case 5:
    case "k_BluetoothDeviceType_Headphones":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Headphones;
    case 6:
    case "k_BluetoothDeviceType_Speakers":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Speakers;
    case 7:
    case "k_BluetoothDeviceType_OtherAudio":
      return EBluetoothDeviceType.k_BluetoothDeviceType_OtherAudio;
    case 8:
    case "k_BluetoothDeviceType_Mouse":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Mouse;
    case 9:
    case "k_BluetoothDeviceType_Joystick":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Joystick;
    case 10:
    case "k_BluetoothDeviceType_Gamepad":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Gamepad;
    case 11:
    case "k_BluetoothDeviceType_Keyboard":
      return EBluetoothDeviceType.k_BluetoothDeviceType_Keyboard;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBluetoothDeviceType.UNRECOGNIZED;
  }
}

export function eBluetoothDeviceTypeToJSON(object: EBluetoothDeviceType): string {
  switch (object) {
    case EBluetoothDeviceType.k_BluetoothDeviceType_Invalid:
      return "k_BluetoothDeviceType_Invalid";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Unknown:
      return "k_BluetoothDeviceType_Unknown";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Phone:
      return "k_BluetoothDeviceType_Phone";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Computer:
      return "k_BluetoothDeviceType_Computer";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Headset:
      return "k_BluetoothDeviceType_Headset";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Headphones:
      return "k_BluetoothDeviceType_Headphones";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Speakers:
      return "k_BluetoothDeviceType_Speakers";
    case EBluetoothDeviceType.k_BluetoothDeviceType_OtherAudio:
      return "k_BluetoothDeviceType_OtherAudio";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Mouse:
      return "k_BluetoothDeviceType_Mouse";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Joystick:
      return "k_BluetoothDeviceType_Joystick";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Gamepad:
      return "k_BluetoothDeviceType_Gamepad";
    case EBluetoothDeviceType.k_BluetoothDeviceType_Keyboard:
      return "k_BluetoothDeviceType_Keyboard";
    case EBluetoothDeviceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemAudioDirection {
  k_SystemAudioDirection_Invalid = 0,
  k_SystemAudioDirection_Input = 1,
  k_SystemAudioDirection_Output = 2,
  UNRECOGNIZED = -1,
}

export function eSystemAudioDirectionFromJSON(object: any): ESystemAudioDirection {
  switch (object) {
    case 0:
    case "k_SystemAudioDirection_Invalid":
      return ESystemAudioDirection.k_SystemAudioDirection_Invalid;
    case 1:
    case "k_SystemAudioDirection_Input":
      return ESystemAudioDirection.k_SystemAudioDirection_Input;
    case 2:
    case "k_SystemAudioDirection_Output":
      return ESystemAudioDirection.k_SystemAudioDirection_Output;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemAudioDirection.UNRECOGNIZED;
  }
}

export function eSystemAudioDirectionToJSON(object: ESystemAudioDirection): string {
  switch (object) {
    case ESystemAudioDirection.k_SystemAudioDirection_Invalid:
      return "k_SystemAudioDirection_Invalid";
    case ESystemAudioDirection.k_SystemAudioDirection_Input:
      return "k_SystemAudioDirection_Input";
    case ESystemAudioDirection.k_SystemAudioDirection_Output:
      return "k_SystemAudioDirection_Output";
    case ESystemAudioDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemAudioChannel {
  k_SystemAudioChannel_Invalid = 0,
  k_SystemAudioChannel_Aggregated = 1,
  k_SystemAudioChannel_FrontLeft = 2,
  k_SystemAudioChannel_FrontRight = 3,
  k_SystemAudioChannel_LFE = 4,
  k_SystemAudioChannel_BackLeft = 5,
  k_SystemAudioChannel_BackRight = 6,
  k_SystemAudioChannel_FrontCenter = 7,
  k_SystemAudioChannel_Unknown = 8,
  k_SystemAudioChannel_Mono = 9,
  UNRECOGNIZED = -1,
}

export function eSystemAudioChannelFromJSON(object: any): ESystemAudioChannel {
  switch (object) {
    case 0:
    case "k_SystemAudioChannel_Invalid":
      return ESystemAudioChannel.k_SystemAudioChannel_Invalid;
    case 1:
    case "k_SystemAudioChannel_Aggregated":
      return ESystemAudioChannel.k_SystemAudioChannel_Aggregated;
    case 2:
    case "k_SystemAudioChannel_FrontLeft":
      return ESystemAudioChannel.k_SystemAudioChannel_FrontLeft;
    case 3:
    case "k_SystemAudioChannel_FrontRight":
      return ESystemAudioChannel.k_SystemAudioChannel_FrontRight;
    case 4:
    case "k_SystemAudioChannel_LFE":
      return ESystemAudioChannel.k_SystemAudioChannel_LFE;
    case 5:
    case "k_SystemAudioChannel_BackLeft":
      return ESystemAudioChannel.k_SystemAudioChannel_BackLeft;
    case 6:
    case "k_SystemAudioChannel_BackRight":
      return ESystemAudioChannel.k_SystemAudioChannel_BackRight;
    case 7:
    case "k_SystemAudioChannel_FrontCenter":
      return ESystemAudioChannel.k_SystemAudioChannel_FrontCenter;
    case 8:
    case "k_SystemAudioChannel_Unknown":
      return ESystemAudioChannel.k_SystemAudioChannel_Unknown;
    case 9:
    case "k_SystemAudioChannel_Mono":
      return ESystemAudioChannel.k_SystemAudioChannel_Mono;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemAudioChannel.UNRECOGNIZED;
  }
}

export function eSystemAudioChannelToJSON(object: ESystemAudioChannel): string {
  switch (object) {
    case ESystemAudioChannel.k_SystemAudioChannel_Invalid:
      return "k_SystemAudioChannel_Invalid";
    case ESystemAudioChannel.k_SystemAudioChannel_Aggregated:
      return "k_SystemAudioChannel_Aggregated";
    case ESystemAudioChannel.k_SystemAudioChannel_FrontLeft:
      return "k_SystemAudioChannel_FrontLeft";
    case ESystemAudioChannel.k_SystemAudioChannel_FrontRight:
      return "k_SystemAudioChannel_FrontRight";
    case ESystemAudioChannel.k_SystemAudioChannel_LFE:
      return "k_SystemAudioChannel_LFE";
    case ESystemAudioChannel.k_SystemAudioChannel_BackLeft:
      return "k_SystemAudioChannel_BackLeft";
    case ESystemAudioChannel.k_SystemAudioChannel_BackRight:
      return "k_SystemAudioChannel_BackRight";
    case ESystemAudioChannel.k_SystemAudioChannel_FrontCenter:
      return "k_SystemAudioChannel_FrontCenter";
    case ESystemAudioChannel.k_SystemAudioChannel_Unknown:
      return "k_SystemAudioChannel_Unknown";
    case ESystemAudioChannel.k_SystemAudioChannel_Mono:
      return "k_SystemAudioChannel_Mono";
    case ESystemAudioChannel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemAudioPortType {
  k_SystemAudioPortType_Invalid = 0,
  k_SystemAudioPortType_Unknown = 1,
  k_SystemAudioPortType_Audio32f = 2,
  k_SystemAudioPortType_Midi8b = 3,
  k_SystemAudioPortType_Video32RGBA = 4,
  UNRECOGNIZED = -1,
}

export function eSystemAudioPortTypeFromJSON(object: any): ESystemAudioPortType {
  switch (object) {
    case 0:
    case "k_SystemAudioPortType_Invalid":
      return ESystemAudioPortType.k_SystemAudioPortType_Invalid;
    case 1:
    case "k_SystemAudioPortType_Unknown":
      return ESystemAudioPortType.k_SystemAudioPortType_Unknown;
    case 2:
    case "k_SystemAudioPortType_Audio32f":
      return ESystemAudioPortType.k_SystemAudioPortType_Audio32f;
    case 3:
    case "k_SystemAudioPortType_Midi8b":
      return ESystemAudioPortType.k_SystemAudioPortType_Midi8b;
    case 4:
    case "k_SystemAudioPortType_Video32RGBA":
      return ESystemAudioPortType.k_SystemAudioPortType_Video32RGBA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemAudioPortType.UNRECOGNIZED;
  }
}

export function eSystemAudioPortTypeToJSON(object: ESystemAudioPortType): string {
  switch (object) {
    case ESystemAudioPortType.k_SystemAudioPortType_Invalid:
      return "k_SystemAudioPortType_Invalid";
    case ESystemAudioPortType.k_SystemAudioPortType_Unknown:
      return "k_SystemAudioPortType_Unknown";
    case ESystemAudioPortType.k_SystemAudioPortType_Audio32f:
      return "k_SystemAudioPortType_Audio32f";
    case ESystemAudioPortType.k_SystemAudioPortType_Midi8b:
      return "k_SystemAudioPortType_Midi8b";
    case ESystemAudioPortType.k_SystemAudioPortType_Video32RGBA:
      return "k_SystemAudioPortType_Video32RGBA";
    case ESystemAudioPortType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemAudioPortDirection {
  k_SystemAudioPortDirection_Invalid = 0,
  k_SystemAudioPortDirection_Input = 1,
  k_SystemAudioPortDirection_Output = 2,
  UNRECOGNIZED = -1,
}

export function eSystemAudioPortDirectionFromJSON(object: any): ESystemAudioPortDirection {
  switch (object) {
    case 0:
    case "k_SystemAudioPortDirection_Invalid":
      return ESystemAudioPortDirection.k_SystemAudioPortDirection_Invalid;
    case 1:
    case "k_SystemAudioPortDirection_Input":
      return ESystemAudioPortDirection.k_SystemAudioPortDirection_Input;
    case 2:
    case "k_SystemAudioPortDirection_Output":
      return ESystemAudioPortDirection.k_SystemAudioPortDirection_Output;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemAudioPortDirection.UNRECOGNIZED;
  }
}

export function eSystemAudioPortDirectionToJSON(object: ESystemAudioPortDirection): string {
  switch (object) {
    case ESystemAudioPortDirection.k_SystemAudioPortDirection_Invalid:
      return "k_SystemAudioPortDirection_Invalid";
    case ESystemAudioPortDirection.k_SystemAudioPortDirection_Input:
      return "k_SystemAudioPortDirection_Input";
    case ESystemAudioPortDirection.k_SystemAudioPortDirection_Output:
      return "k_SystemAudioPortDirection_Output";
    case ESystemAudioPortDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemServiceState {
  k_ESystemServiceState_Unavailable = 0,
  k_ESystemServiceState_Disabled = 1,
  k_ESystemServiceState_Enabled = 2,
  UNRECOGNIZED = -1,
}

export function eSystemServiceStateFromJSON(object: any): ESystemServiceState {
  switch (object) {
    case 0:
    case "k_ESystemServiceState_Unavailable":
      return ESystemServiceState.k_ESystemServiceState_Unavailable;
    case 1:
    case "k_ESystemServiceState_Disabled":
      return ESystemServiceState.k_ESystemServiceState_Disabled;
    case 2:
    case "k_ESystemServiceState_Enabled":
      return ESystemServiceState.k_ESystemServiceState_Enabled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemServiceState.UNRECOGNIZED;
  }
}

export function eSystemServiceStateToJSON(object: ESystemServiceState): string {
  switch (object) {
    case ESystemServiceState.k_ESystemServiceState_Unavailable:
      return "k_ESystemServiceState_Unavailable";
    case ESystemServiceState.k_ESystemServiceState_Disabled:
      return "k_ESystemServiceState_Disabled";
    case ESystemServiceState.k_ESystemServiceState_Enabled:
      return "k_ESystemServiceState_Enabled";
    case ESystemServiceState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EGraphicsPerfOverlayLevel {
  k_EGraphicsPerfOverlayLevel_Hidden = 0,
  k_EGraphicsPerfOverlayLevel_Basic = 1,
  k_EGraphicsPerfOverlayLevel_Medium = 2,
  k_EGraphicsPerfOverlayLevel_Full = 3,
  k_EGraphicsPerfOverlayLevel_Minimal = 4,
  UNRECOGNIZED = -1,
}

export function eGraphicsPerfOverlayLevelFromJSON(object: any): EGraphicsPerfOverlayLevel {
  switch (object) {
    case 0:
    case "k_EGraphicsPerfOverlayLevel_Hidden":
      return EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Hidden;
    case 1:
    case "k_EGraphicsPerfOverlayLevel_Basic":
      return EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Basic;
    case 2:
    case "k_EGraphicsPerfOverlayLevel_Medium":
      return EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Medium;
    case 3:
    case "k_EGraphicsPerfOverlayLevel_Full":
      return EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Full;
    case 4:
    case "k_EGraphicsPerfOverlayLevel_Minimal":
      return EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Minimal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGraphicsPerfOverlayLevel.UNRECOGNIZED;
  }
}

export function eGraphicsPerfOverlayLevelToJSON(object: EGraphicsPerfOverlayLevel): string {
  switch (object) {
    case EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Hidden:
      return "k_EGraphicsPerfOverlayLevel_Hidden";
    case EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Basic:
      return "k_EGraphicsPerfOverlayLevel_Basic";
    case EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Medium:
      return "k_EGraphicsPerfOverlayLevel_Medium";
    case EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Full:
      return "k_EGraphicsPerfOverlayLevel_Full";
    case EGraphicsPerfOverlayLevel.k_EGraphicsPerfOverlayLevel_Minimal:
      return "k_EGraphicsPerfOverlayLevel_Minimal";
    case EGraphicsPerfOverlayLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EGPUPerformanceLevel {
  k_EGPUPerformanceLevel_Invalid = 0,
  k_EGPUPerformanceLevel_Auto = 1,
  k_EGPUPerformanceLevel_Manual = 2,
  k_EGPUPerformanceLevel_Low = 3,
  k_EGPUPerformanceLevel_High = 4,
  k_EGPUPerformanceLevel_Profiling = 5,
  UNRECOGNIZED = -1,
}

export function eGPUPerformanceLevelFromJSON(object: any): EGPUPerformanceLevel {
  switch (object) {
    case 0:
    case "k_EGPUPerformanceLevel_Invalid":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_Invalid;
    case 1:
    case "k_EGPUPerformanceLevel_Auto":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_Auto;
    case 2:
    case "k_EGPUPerformanceLevel_Manual":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_Manual;
    case 3:
    case "k_EGPUPerformanceLevel_Low":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_Low;
    case 4:
    case "k_EGPUPerformanceLevel_High":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_High;
    case 5:
    case "k_EGPUPerformanceLevel_Profiling":
      return EGPUPerformanceLevel.k_EGPUPerformanceLevel_Profiling;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGPUPerformanceLevel.UNRECOGNIZED;
  }
}

export function eGPUPerformanceLevelToJSON(object: EGPUPerformanceLevel): string {
  switch (object) {
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_Invalid:
      return "k_EGPUPerformanceLevel_Invalid";
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_Auto:
      return "k_EGPUPerformanceLevel_Auto";
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_Manual:
      return "k_EGPUPerformanceLevel_Manual";
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_Low:
      return "k_EGPUPerformanceLevel_Low";
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_High:
      return "k_EGPUPerformanceLevel_High";
    case EGPUPerformanceLevel.k_EGPUPerformanceLevel_Profiling:
      return "k_EGPUPerformanceLevel_Profiling";
    case EGPUPerformanceLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EScalingFilter {
  k_EScalingFilter_Invalid = 0,
  k_EScalingFilter_FSR = 1,
  k_EScalingFilter_Nearest = 2,
  k_EScalingFilter_Integer = 3,
  k_EScalingFilter_Linear = 4,
  k_EScalingFilter_NIS = 5,
  UNRECOGNIZED = -1,
}

export function eScalingFilterFromJSON(object: any): EScalingFilter {
  switch (object) {
    case 0:
    case "k_EScalingFilter_Invalid":
      return EScalingFilter.k_EScalingFilter_Invalid;
    case 1:
    case "k_EScalingFilter_FSR":
      return EScalingFilter.k_EScalingFilter_FSR;
    case 2:
    case "k_EScalingFilter_Nearest":
      return EScalingFilter.k_EScalingFilter_Nearest;
    case 3:
    case "k_EScalingFilter_Integer":
      return EScalingFilter.k_EScalingFilter_Integer;
    case 4:
    case "k_EScalingFilter_Linear":
      return EScalingFilter.k_EScalingFilter_Linear;
    case 5:
    case "k_EScalingFilter_NIS":
      return EScalingFilter.k_EScalingFilter_NIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EScalingFilter.UNRECOGNIZED;
  }
}

export function eScalingFilterToJSON(object: EScalingFilter): string {
  switch (object) {
    case EScalingFilter.k_EScalingFilter_Invalid:
      return "k_EScalingFilter_Invalid";
    case EScalingFilter.k_EScalingFilter_FSR:
      return "k_EScalingFilter_FSR";
    case EScalingFilter.k_EScalingFilter_Nearest:
      return "k_EScalingFilter_Nearest";
    case EScalingFilter.k_EScalingFilter_Integer:
      return "k_EScalingFilter_Integer";
    case EScalingFilter.k_EScalingFilter_Linear:
      return "k_EScalingFilter_Linear";
    case EScalingFilter.k_EScalingFilter_NIS:
      return "k_EScalingFilter_NIS";
    case EScalingFilter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESplitScalingFilter {
  k_ESplitScalingFilter_Invalid = 0,
  k_ESplitScalingFilter_Linear = 1,
  k_ESplitScalingFilter_Nearest = 2,
  k_ESplitScalingFilter_FSR = 3,
  k_ESplitScalingFilter_NIS = 4,
  UNRECOGNIZED = -1,
}

export function eSplitScalingFilterFromJSON(object: any): ESplitScalingFilter {
  switch (object) {
    case 0:
    case "k_ESplitScalingFilter_Invalid":
      return ESplitScalingFilter.k_ESplitScalingFilter_Invalid;
    case 1:
    case "k_ESplitScalingFilter_Linear":
      return ESplitScalingFilter.k_ESplitScalingFilter_Linear;
    case 2:
    case "k_ESplitScalingFilter_Nearest":
      return ESplitScalingFilter.k_ESplitScalingFilter_Nearest;
    case 3:
    case "k_ESplitScalingFilter_FSR":
      return ESplitScalingFilter.k_ESplitScalingFilter_FSR;
    case 4:
    case "k_ESplitScalingFilter_NIS":
      return ESplitScalingFilter.k_ESplitScalingFilter_NIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESplitScalingFilter.UNRECOGNIZED;
  }
}

export function eSplitScalingFilterToJSON(object: ESplitScalingFilter): string {
  switch (object) {
    case ESplitScalingFilter.k_ESplitScalingFilter_Invalid:
      return "k_ESplitScalingFilter_Invalid";
    case ESplitScalingFilter.k_ESplitScalingFilter_Linear:
      return "k_ESplitScalingFilter_Linear";
    case ESplitScalingFilter.k_ESplitScalingFilter_Nearest:
      return "k_ESplitScalingFilter_Nearest";
    case ESplitScalingFilter.k_ESplitScalingFilter_FSR:
      return "k_ESplitScalingFilter_FSR";
    case ESplitScalingFilter.k_ESplitScalingFilter_NIS:
      return "k_ESplitScalingFilter_NIS";
    case ESplitScalingFilter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESplitScalingScaler {
  k_ESplitScalingScaler_Invalid = 0,
  k_ESplitScalingScaler_Auto = 1,
  k_ESplitScalingScaler_Integer = 2,
  k_ESplitScalingScaler_Fit = 3,
  k_ESplitScalingScaler_Fill = 4,
  k_ESplitScalingScaler_Stretch = 5,
  UNRECOGNIZED = -1,
}

export function eSplitScalingScalerFromJSON(object: any): ESplitScalingScaler {
  switch (object) {
    case 0:
    case "k_ESplitScalingScaler_Invalid":
      return ESplitScalingScaler.k_ESplitScalingScaler_Invalid;
    case 1:
    case "k_ESplitScalingScaler_Auto":
      return ESplitScalingScaler.k_ESplitScalingScaler_Auto;
    case 2:
    case "k_ESplitScalingScaler_Integer":
      return ESplitScalingScaler.k_ESplitScalingScaler_Integer;
    case 3:
    case "k_ESplitScalingScaler_Fit":
      return ESplitScalingScaler.k_ESplitScalingScaler_Fit;
    case 4:
    case "k_ESplitScalingScaler_Fill":
      return ESplitScalingScaler.k_ESplitScalingScaler_Fill;
    case 5:
    case "k_ESplitScalingScaler_Stretch":
      return ESplitScalingScaler.k_ESplitScalingScaler_Stretch;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESplitScalingScaler.UNRECOGNIZED;
  }
}

export function eSplitScalingScalerToJSON(object: ESplitScalingScaler): string {
  switch (object) {
    case ESplitScalingScaler.k_ESplitScalingScaler_Invalid:
      return "k_ESplitScalingScaler_Invalid";
    case ESplitScalingScaler.k_ESplitScalingScaler_Auto:
      return "k_ESplitScalingScaler_Auto";
    case ESplitScalingScaler.k_ESplitScalingScaler_Integer:
      return "k_ESplitScalingScaler_Integer";
    case ESplitScalingScaler.k_ESplitScalingScaler_Fit:
      return "k_ESplitScalingScaler_Fit";
    case ESplitScalingScaler.k_ESplitScalingScaler_Fill:
      return "k_ESplitScalingScaler_Fill";
    case ESplitScalingScaler.k_ESplitScalingScaler_Stretch:
      return "k_ESplitScalingScaler_Stretch";
    case ESplitScalingScaler.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EHDRToneMapOperator {
  k_EHDRToneMapOperator_Invalid = 0,
  k_EHDRToneMapOperator_Uncharted = 1,
  k_EHDRToneMapOperator_Reinhard = 2,
  UNRECOGNIZED = -1,
}

export function eHDRToneMapOperatorFromJSON(object: any): EHDRToneMapOperator {
  switch (object) {
    case 0:
    case "k_EHDRToneMapOperator_Invalid":
      return EHDRToneMapOperator.k_EHDRToneMapOperator_Invalid;
    case 1:
    case "k_EHDRToneMapOperator_Uncharted":
      return EHDRToneMapOperator.k_EHDRToneMapOperator_Uncharted;
    case 2:
    case "k_EHDRToneMapOperator_Reinhard":
      return EHDRToneMapOperator.k_EHDRToneMapOperator_Reinhard;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EHDRToneMapOperator.UNRECOGNIZED;
  }
}

export function eHDRToneMapOperatorToJSON(object: EHDRToneMapOperator): string {
  switch (object) {
    case EHDRToneMapOperator.k_EHDRToneMapOperator_Invalid:
      return "k_EHDRToneMapOperator_Invalid";
    case EHDRToneMapOperator.k_EHDRToneMapOperator_Uncharted:
      return "k_EHDRToneMapOperator_Uncharted";
    case EHDRToneMapOperator.k_EHDRToneMapOperator_Reinhard:
      return "k_EHDRToneMapOperator_Reinhard";
    case EHDRToneMapOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ECPUGovernor {
  k_ECPUGovernor_Invalid = 0,
  k_ECPUGovernor_Perf = 1,
  k_ECPUGovernor_Powersave = 2,
  k_ECPUGovernor_Manual = 3,
  UNRECOGNIZED = -1,
}

export function eCPUGovernorFromJSON(object: any): ECPUGovernor {
  switch (object) {
    case 0:
    case "k_ECPUGovernor_Invalid":
      return ECPUGovernor.k_ECPUGovernor_Invalid;
    case 1:
    case "k_ECPUGovernor_Perf":
      return ECPUGovernor.k_ECPUGovernor_Perf;
    case 2:
    case "k_ECPUGovernor_Powersave":
      return ECPUGovernor.k_ECPUGovernor_Powersave;
    case 3:
    case "k_ECPUGovernor_Manual":
      return ECPUGovernor.k_ECPUGovernor_Manual;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECPUGovernor.UNRECOGNIZED;
  }
}

export function eCPUGovernorToJSON(object: ECPUGovernor): string {
  switch (object) {
    case ECPUGovernor.k_ECPUGovernor_Invalid:
      return "k_ECPUGovernor_Invalid";
    case ECPUGovernor.k_ECPUGovernor_Perf:
      return "k_ECPUGovernor_Perf";
    case ECPUGovernor.k_ECPUGovernor_Powersave:
      return "k_ECPUGovernor_Powersave";
    case ECPUGovernor.k_ECPUGovernor_Manual:
      return "k_ECPUGovernor_Manual";
    case ECPUGovernor.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EUpdaterType {
  k_EUpdaterType_Invalid = 0,
  k_EUpdaterType_Client = 1,
  k_EUpdaterType_OS = 2,
  k_EUpdaterType_BIOS = 3,
  k_EUpdaterType_Aggregated = 4,
  k_EUpdaterType_Test1 = 5,
  k_EUpdaterType_Test2 = 6,
  k_EUpdaterType_Dummy = 7,
  UNRECOGNIZED = -1,
}

export function eUpdaterTypeFromJSON(object: any): EUpdaterType {
  switch (object) {
    case 0:
    case "k_EUpdaterType_Invalid":
      return EUpdaterType.k_EUpdaterType_Invalid;
    case 1:
    case "k_EUpdaterType_Client":
      return EUpdaterType.k_EUpdaterType_Client;
    case 2:
    case "k_EUpdaterType_OS":
      return EUpdaterType.k_EUpdaterType_OS;
    case 3:
    case "k_EUpdaterType_BIOS":
      return EUpdaterType.k_EUpdaterType_BIOS;
    case 4:
    case "k_EUpdaterType_Aggregated":
      return EUpdaterType.k_EUpdaterType_Aggregated;
    case 5:
    case "k_EUpdaterType_Test1":
      return EUpdaterType.k_EUpdaterType_Test1;
    case 6:
    case "k_EUpdaterType_Test2":
      return EUpdaterType.k_EUpdaterType_Test2;
    case 7:
    case "k_EUpdaterType_Dummy":
      return EUpdaterType.k_EUpdaterType_Dummy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EUpdaterType.UNRECOGNIZED;
  }
}

export function eUpdaterTypeToJSON(object: EUpdaterType): string {
  switch (object) {
    case EUpdaterType.k_EUpdaterType_Invalid:
      return "k_EUpdaterType_Invalid";
    case EUpdaterType.k_EUpdaterType_Client:
      return "k_EUpdaterType_Client";
    case EUpdaterType.k_EUpdaterType_OS:
      return "k_EUpdaterType_OS";
    case EUpdaterType.k_EUpdaterType_BIOS:
      return "k_EUpdaterType_BIOS";
    case EUpdaterType.k_EUpdaterType_Aggregated:
      return "k_EUpdaterType_Aggregated";
    case EUpdaterType.k_EUpdaterType_Test1:
      return "k_EUpdaterType_Test1";
    case EUpdaterType.k_EUpdaterType_Test2:
      return "k_EUpdaterType_Test2";
    case EUpdaterType.k_EUpdaterType_Dummy:
      return "k_EUpdaterType_Dummy";
    case EUpdaterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EUpdaterState {
  k_EUpdaterState_Invalid = 0,
  k_EUpdaterState_UpToDate = 2,
  k_EUpdaterState_Checking = 3,
  k_EUpdaterState_Available = 4,
  k_EUpdaterState_Applying = 5,
  k_EUpdaterState_ClientRestartPending = 6,
  k_EUpdaterState_SystemRestartPending = 7,
  UNRECOGNIZED = -1,
}

export function eUpdaterStateFromJSON(object: any): EUpdaterState {
  switch (object) {
    case 0:
    case "k_EUpdaterState_Invalid":
      return EUpdaterState.k_EUpdaterState_Invalid;
    case 2:
    case "k_EUpdaterState_UpToDate":
      return EUpdaterState.k_EUpdaterState_UpToDate;
    case 3:
    case "k_EUpdaterState_Checking":
      return EUpdaterState.k_EUpdaterState_Checking;
    case 4:
    case "k_EUpdaterState_Available":
      return EUpdaterState.k_EUpdaterState_Available;
    case 5:
    case "k_EUpdaterState_Applying":
      return EUpdaterState.k_EUpdaterState_Applying;
    case 6:
    case "k_EUpdaterState_ClientRestartPending":
      return EUpdaterState.k_EUpdaterState_ClientRestartPending;
    case 7:
    case "k_EUpdaterState_SystemRestartPending":
      return EUpdaterState.k_EUpdaterState_SystemRestartPending;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EUpdaterState.UNRECOGNIZED;
  }
}

export function eUpdaterStateToJSON(object: EUpdaterState): string {
  switch (object) {
    case EUpdaterState.k_EUpdaterState_Invalid:
      return "k_EUpdaterState_Invalid";
    case EUpdaterState.k_EUpdaterState_UpToDate:
      return "k_EUpdaterState_UpToDate";
    case EUpdaterState.k_EUpdaterState_Checking:
      return "k_EUpdaterState_Checking";
    case EUpdaterState.k_EUpdaterState_Available:
      return "k_EUpdaterState_Available";
    case EUpdaterState.k_EUpdaterState_Applying:
      return "k_EUpdaterState_Applying";
    case EUpdaterState.k_EUpdaterState_ClientRestartPending:
      return "k_EUpdaterState_ClientRestartPending";
    case EUpdaterState.k_EUpdaterState_SystemRestartPending:
      return "k_EUpdaterState_SystemRestartPending";
    case EUpdaterState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStorageBlockContentType {
  k_EStorageBlockContentType_Invalid = 0,
  k_EStorageBlockContentType_Unknown = 1,
  k_EStorageBlockContentType_FileSystem = 2,
  k_EStorageBlockContentType_Crypto = 3,
  k_EStorageBlockContentType_Raid = 4,
  UNRECOGNIZED = -1,
}

export function eStorageBlockContentTypeFromJSON(object: any): EStorageBlockContentType {
  switch (object) {
    case 0:
    case "k_EStorageBlockContentType_Invalid":
      return EStorageBlockContentType.k_EStorageBlockContentType_Invalid;
    case 1:
    case "k_EStorageBlockContentType_Unknown":
      return EStorageBlockContentType.k_EStorageBlockContentType_Unknown;
    case 2:
    case "k_EStorageBlockContentType_FileSystem":
      return EStorageBlockContentType.k_EStorageBlockContentType_FileSystem;
    case 3:
    case "k_EStorageBlockContentType_Crypto":
      return EStorageBlockContentType.k_EStorageBlockContentType_Crypto;
    case 4:
    case "k_EStorageBlockContentType_Raid":
      return EStorageBlockContentType.k_EStorageBlockContentType_Raid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStorageBlockContentType.UNRECOGNIZED;
  }
}

export function eStorageBlockContentTypeToJSON(object: EStorageBlockContentType): string {
  switch (object) {
    case EStorageBlockContentType.k_EStorageBlockContentType_Invalid:
      return "k_EStorageBlockContentType_Invalid";
    case EStorageBlockContentType.k_EStorageBlockContentType_Unknown:
      return "k_EStorageBlockContentType_Unknown";
    case EStorageBlockContentType.k_EStorageBlockContentType_FileSystem:
      return "k_EStorageBlockContentType_FileSystem";
    case EStorageBlockContentType.k_EStorageBlockContentType_Crypto:
      return "k_EStorageBlockContentType_Crypto";
    case EStorageBlockContentType.k_EStorageBlockContentType_Raid:
      return "k_EStorageBlockContentType_Raid";
    case EStorageBlockContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStorageBlockFileSystemType {
  k_EStorageBlockFileSystemType_Invalid = 0,
  k_EStorageBlockFileSystemType_Unknown = 1,
  k_EStorageBlockFileSystemType_VFat = 2,
  k_EStorageBlockFileSystemType_Ext4 = 3,
  UNRECOGNIZED = -1,
}

export function eStorageBlockFileSystemTypeFromJSON(object: any): EStorageBlockFileSystemType {
  switch (object) {
    case 0:
    case "k_EStorageBlockFileSystemType_Invalid":
      return EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Invalid;
    case 1:
    case "k_EStorageBlockFileSystemType_Unknown":
      return EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Unknown;
    case 2:
    case "k_EStorageBlockFileSystemType_VFat":
      return EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_VFat;
    case 3:
    case "k_EStorageBlockFileSystemType_Ext4":
      return EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Ext4;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStorageBlockFileSystemType.UNRECOGNIZED;
  }
}

export function eStorageBlockFileSystemTypeToJSON(object: EStorageBlockFileSystemType): string {
  switch (object) {
    case EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Invalid:
      return "k_EStorageBlockFileSystemType_Invalid";
    case EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Unknown:
      return "k_EStorageBlockFileSystemType_Unknown";
    case EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_VFat:
      return "k_EStorageBlockFileSystemType_VFat";
    case EStorageBlockFileSystemType.k_EStorageBlockFileSystemType_Ext4:
      return "k_EStorageBlockFileSystemType_Ext4";
    case EStorageBlockFileSystemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EStorageDriveMediaType {
  k_EStorageDriveMediaType_Invalid = 0,
  k_EStorageDriveMediaType_Unknown = 1,
  k_EStorageDriveMediaType_HDD = 2,
  k_EStorageDriveMediaType_SSD = 3,
  k_EStorageDriveMediaType_Removable = 4,
  UNRECOGNIZED = -1,
}

export function eStorageDriveMediaTypeFromJSON(object: any): EStorageDriveMediaType {
  switch (object) {
    case 0:
    case "k_EStorageDriveMediaType_Invalid":
      return EStorageDriveMediaType.k_EStorageDriveMediaType_Invalid;
    case 1:
    case "k_EStorageDriveMediaType_Unknown":
      return EStorageDriveMediaType.k_EStorageDriveMediaType_Unknown;
    case 2:
    case "k_EStorageDriveMediaType_HDD":
      return EStorageDriveMediaType.k_EStorageDriveMediaType_HDD;
    case 3:
    case "k_EStorageDriveMediaType_SSD":
      return EStorageDriveMediaType.k_EStorageDriveMediaType_SSD;
    case 4:
    case "k_EStorageDriveMediaType_Removable":
      return EStorageDriveMediaType.k_EStorageDriveMediaType_Removable;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EStorageDriveMediaType.UNRECOGNIZED;
  }
}

export function eStorageDriveMediaTypeToJSON(object: EStorageDriveMediaType): string {
  switch (object) {
    case EStorageDriveMediaType.k_EStorageDriveMediaType_Invalid:
      return "k_EStorageDriveMediaType_Invalid";
    case EStorageDriveMediaType.k_EStorageDriveMediaType_Unknown:
      return "k_EStorageDriveMediaType_Unknown";
    case EStorageDriveMediaType.k_EStorageDriveMediaType_HDD:
      return "k_EStorageDriveMediaType_HDD";
    case EStorageDriveMediaType.k_EStorageDriveMediaType_SSD:
      return "k_EStorageDriveMediaType_SSD";
    case EStorageDriveMediaType.k_EStorageDriveMediaType_Removable:
      return "k_EStorageDriveMediaType_Removable";
    case EStorageDriveMediaType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESystemDisplayCompatibilityMode {
  k_ESystemDisplayCompatibilityMode_Invalid = 0,
  k_ESystemDisplayCompatibilityMode_None = 1,
  k_ESystemDisplayCompatibilityMode_MinimalBandwith = 2,
  UNRECOGNIZED = -1,
}

export function eSystemDisplayCompatibilityModeFromJSON(object: any): ESystemDisplayCompatibilityMode {
  switch (object) {
    case 0:
    case "k_ESystemDisplayCompatibilityMode_Invalid":
      return ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_Invalid;
    case 1:
    case "k_ESystemDisplayCompatibilityMode_None":
      return ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_None;
    case 2:
    case "k_ESystemDisplayCompatibilityMode_MinimalBandwith":
      return ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_MinimalBandwith;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESystemDisplayCompatibilityMode.UNRECOGNIZED;
  }
}

export function eSystemDisplayCompatibilityModeToJSON(object: ESystemDisplayCompatibilityMode): string {
  switch (object) {
    case ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_Invalid:
      return "k_ESystemDisplayCompatibilityMode_Invalid";
    case ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_None:
      return "k_ESystemDisplayCompatibilityMode_None";
    case ESystemDisplayCompatibilityMode.k_ESystemDisplayCompatibilityMode_MinimalBandwith:
      return "k_ESystemDisplayCompatibilityMode_MinimalBandwith";
    case ESystemDisplayCompatibilityMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamDeckCompatibilityCategory {
  k_ESteamDeckCompatibilityCategory_Unknown = 0,
  k_ESteamDeckCompatibilityCategory_Unsupported = 1,
  k_ESteamDeckCompatibilityCategory_Playable = 2,
  k_ESteamDeckCompatibilityCategory_Verified = 3,
  UNRECOGNIZED = -1,
}

export function eSteamDeckCompatibilityCategoryFromJSON(object: any): ESteamDeckCompatibilityCategory {
  switch (object) {
    case 0:
    case "k_ESteamDeckCompatibilityCategory_Unknown":
      return ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unknown;
    case 1:
    case "k_ESteamDeckCompatibilityCategory_Unsupported":
      return ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unsupported;
    case 2:
    case "k_ESteamDeckCompatibilityCategory_Playable":
      return ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Playable;
    case 3:
    case "k_ESteamDeckCompatibilityCategory_Verified":
      return ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Verified;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamDeckCompatibilityCategory.UNRECOGNIZED;
  }
}

export function eSteamDeckCompatibilityCategoryToJSON(object: ESteamDeckCompatibilityCategory): string {
  switch (object) {
    case ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unknown:
      return "k_ESteamDeckCompatibilityCategory_Unknown";
    case ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unsupported:
      return "k_ESteamDeckCompatibilityCategory_Unsupported";
    case ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Playable:
      return "k_ESteamDeckCompatibilityCategory_Playable";
    case ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Verified:
      return "k_ESteamDeckCompatibilityCategory_Verified";
    case ESteamDeckCompatibilityCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamDeckCompatibilityResultDisplayType {
  k_ESteamDeckCompatibilityResultDisplayType_Invisible = 0,
  k_ESteamDeckCompatibilityResultDisplayType_Informational = 1,
  k_ESteamDeckCompatibilityResultDisplayType_Unsupported = 2,
  k_ESteamDeckCompatibilityResultDisplayType_Playable = 3,
  k_ESteamDeckCompatibilityResultDisplayType_Verified = 4,
  UNRECOGNIZED = -1,
}

export function eSteamDeckCompatibilityResultDisplayTypeFromJSON(
  object: any,
): ESteamDeckCompatibilityResultDisplayType {
  switch (object) {
    case 0:
    case "k_ESteamDeckCompatibilityResultDisplayType_Invisible":
      return ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Invisible;
    case 1:
    case "k_ESteamDeckCompatibilityResultDisplayType_Informational":
      return ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Informational;
    case 2:
    case "k_ESteamDeckCompatibilityResultDisplayType_Unsupported":
      return ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Unsupported;
    case 3:
    case "k_ESteamDeckCompatibilityResultDisplayType_Playable":
      return ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Playable;
    case 4:
    case "k_ESteamDeckCompatibilityResultDisplayType_Verified":
      return ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Verified;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamDeckCompatibilityResultDisplayType.UNRECOGNIZED;
  }
}

export function eSteamDeckCompatibilityResultDisplayTypeToJSON(
  object: ESteamDeckCompatibilityResultDisplayType,
): string {
  switch (object) {
    case ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Invisible:
      return "k_ESteamDeckCompatibilityResultDisplayType_Invisible";
    case ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Informational:
      return "k_ESteamDeckCompatibilityResultDisplayType_Informational";
    case ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Unsupported:
      return "k_ESteamDeckCompatibilityResultDisplayType_Unsupported";
    case ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Playable:
      return "k_ESteamDeckCompatibilityResultDisplayType_Playable";
    case ESteamDeckCompatibilityResultDisplayType.k_ESteamDeckCompatibilityResultDisplayType_Verified:
      return "k_ESteamDeckCompatibilityResultDisplayType_Verified";
    case ESteamDeckCompatibilityResultDisplayType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EACState {
  k_EACState_Unknown = 0,
  k_EACState_Disconnected = 1,
  k_EACState_Connected = 2,
  k_EACState_ConnectedSlow = 3,
  UNRECOGNIZED = -1,
}

export function eACStateFromJSON(object: any): EACState {
  switch (object) {
    case 0:
    case "k_EACState_Unknown":
      return EACState.k_EACState_Unknown;
    case 1:
    case "k_EACState_Disconnected":
      return EACState.k_EACState_Disconnected;
    case 2:
    case "k_EACState_Connected":
      return EACState.k_EACState_Connected;
    case 3:
    case "k_EACState_ConnectedSlow":
      return EACState.k_EACState_ConnectedSlow;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EACState.UNRECOGNIZED;
  }
}

export function eACStateToJSON(object: EACState): string {
  switch (object) {
    case EACState.k_EACState_Unknown:
      return "k_EACState_Unknown";
    case EACState.k_EACState_Disconnected:
      return "k_EACState_Disconnected";
    case EACState.k_EACState_Connected:
      return "k_EACState_Connected";
    case EACState.k_EACState_ConnectedSlow:
      return "k_EACState_ConnectedSlow";
    case EACState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EBatteryState {
  k_EBatteryState_Unknown = 0,
  k_EBatteryState_Discharging = 1,
  k_EBatteryState_Charging = 2,
  k_EBatteryState_Full = 3,
  UNRECOGNIZED = -1,
}

export function eBatteryStateFromJSON(object: any): EBatteryState {
  switch (object) {
    case 0:
    case "k_EBatteryState_Unknown":
      return EBatteryState.k_EBatteryState_Unknown;
    case 1:
    case "k_EBatteryState_Discharging":
      return EBatteryState.k_EBatteryState_Discharging;
    case 2:
    case "k_EBatteryState_Charging":
      return EBatteryState.k_EBatteryState_Charging;
    case 3:
    case "k_EBatteryState_Full":
      return EBatteryState.k_EBatteryState_Full;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBatteryState.UNRECOGNIZED;
  }
}

export function eBatteryStateToJSON(object: EBatteryState): string {
  switch (object) {
    case EBatteryState.k_EBatteryState_Unknown:
      return "k_EBatteryState_Unknown";
    case EBatteryState.k_EBatteryState_Discharging:
      return "k_EBatteryState_Discharging";
    case EBatteryState.k_EBatteryState_Charging:
      return "k_EBatteryState_Charging";
    case EBatteryState.k_EBatteryState_Full:
      return "k_EBatteryState_Full";
    case EBatteryState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EOSBranch {
  k_EOSBranch_Unknown = 0,
  k_EOSBranch_Release = 1,
  k_EOSBranch_ReleaseCandidate = 2,
  k_EOSBranch_Beta = 3,
  k_EOSBranch_BetaCandidate = 4,
  k_EOSBranch_Main = 5,
  k_EOSBranch_Staging = 6,
  UNRECOGNIZED = -1,
}

export function eOSBranchFromJSON(object: any): EOSBranch {
  switch (object) {
    case 0:
    case "k_EOSBranch_Unknown":
      return EOSBranch.k_EOSBranch_Unknown;
    case 1:
    case "k_EOSBranch_Release":
      return EOSBranch.k_EOSBranch_Release;
    case 2:
    case "k_EOSBranch_ReleaseCandidate":
      return EOSBranch.k_EOSBranch_ReleaseCandidate;
    case 3:
    case "k_EOSBranch_Beta":
      return EOSBranch.k_EOSBranch_Beta;
    case 4:
    case "k_EOSBranch_BetaCandidate":
      return EOSBranch.k_EOSBranch_BetaCandidate;
    case 5:
    case "k_EOSBranch_Main":
      return EOSBranch.k_EOSBranch_Main;
    case 6:
    case "k_EOSBranch_Staging":
      return EOSBranch.k_EOSBranch_Staging;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EOSBranch.UNRECOGNIZED;
  }
}

export function eOSBranchToJSON(object: EOSBranch): string {
  switch (object) {
    case EOSBranch.k_EOSBranch_Unknown:
      return "k_EOSBranch_Unknown";
    case EOSBranch.k_EOSBranch_Release:
      return "k_EOSBranch_Release";
    case EOSBranch.k_EOSBranch_ReleaseCandidate:
      return "k_EOSBranch_ReleaseCandidate";
    case EOSBranch.k_EOSBranch_Beta:
      return "k_EOSBranch_Beta";
    case EOSBranch.k_EOSBranch_BetaCandidate:
      return "k_EOSBranch_BetaCandidate";
    case EOSBranch.k_EOSBranch_Main:
      return "k_EOSBranch_Main";
    case EOSBranch.k_EOSBranch_Staging:
      return "k_EOSBranch_Staging";
    case EOSBranch.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ECommunityItemClass {
  k_ECommunityItemClass_Invalid = 0,
  k_ECommunityItemClass_Badge = 1,
  k_ECommunityItemClass_GameCard = 2,
  k_ECommunityItemClass_ProfileBackground = 3,
  k_ECommunityItemClass_Emoticon = 4,
  k_ECommunityItemClass_BoosterPack = 5,
  k_ECommunityItemClass_Consumable = 6,
  k_ECommunityItemClass_GameGoo = 7,
  k_ECommunityItemClass_ProfileModifier = 8,
  k_ECommunityItemClass_Scene = 9,
  k_ECommunityItemClass_SalienItem = 10,
  k_ECommunityItemClass_Sticker = 11,
  k_ECommunityItemClass_ChatEffect = 12,
  k_ECommunityItemClass_MiniProfileBackground = 13,
  k_ECommunityItemClass_AvatarFrame = 14,
  k_ECommunityItemClass_AnimatedAvatar = 15,
  k_ECommunityItemClass_SteamDeckKeyboardSkin = 16,
  k_ECommunityItemClass_SteamDeckStartupMovie = 17,
  UNRECOGNIZED = -1,
}

export function eCommunityItemClassFromJSON(object: any): ECommunityItemClass {
  switch (object) {
    case 0:
    case "k_ECommunityItemClass_Invalid":
      return ECommunityItemClass.k_ECommunityItemClass_Invalid;
    case 1:
    case "k_ECommunityItemClass_Badge":
      return ECommunityItemClass.k_ECommunityItemClass_Badge;
    case 2:
    case "k_ECommunityItemClass_GameCard":
      return ECommunityItemClass.k_ECommunityItemClass_GameCard;
    case 3:
    case "k_ECommunityItemClass_ProfileBackground":
      return ECommunityItemClass.k_ECommunityItemClass_ProfileBackground;
    case 4:
    case "k_ECommunityItemClass_Emoticon":
      return ECommunityItemClass.k_ECommunityItemClass_Emoticon;
    case 5:
    case "k_ECommunityItemClass_BoosterPack":
      return ECommunityItemClass.k_ECommunityItemClass_BoosterPack;
    case 6:
    case "k_ECommunityItemClass_Consumable":
      return ECommunityItemClass.k_ECommunityItemClass_Consumable;
    case 7:
    case "k_ECommunityItemClass_GameGoo":
      return ECommunityItemClass.k_ECommunityItemClass_GameGoo;
    case 8:
    case "k_ECommunityItemClass_ProfileModifier":
      return ECommunityItemClass.k_ECommunityItemClass_ProfileModifier;
    case 9:
    case "k_ECommunityItemClass_Scene":
      return ECommunityItemClass.k_ECommunityItemClass_Scene;
    case 10:
    case "k_ECommunityItemClass_SalienItem":
      return ECommunityItemClass.k_ECommunityItemClass_SalienItem;
    case 11:
    case "k_ECommunityItemClass_Sticker":
      return ECommunityItemClass.k_ECommunityItemClass_Sticker;
    case 12:
    case "k_ECommunityItemClass_ChatEffect":
      return ECommunityItemClass.k_ECommunityItemClass_ChatEffect;
    case 13:
    case "k_ECommunityItemClass_MiniProfileBackground":
      return ECommunityItemClass.k_ECommunityItemClass_MiniProfileBackground;
    case 14:
    case "k_ECommunityItemClass_AvatarFrame":
      return ECommunityItemClass.k_ECommunityItemClass_AvatarFrame;
    case 15:
    case "k_ECommunityItemClass_AnimatedAvatar":
      return ECommunityItemClass.k_ECommunityItemClass_AnimatedAvatar;
    case 16:
    case "k_ECommunityItemClass_SteamDeckKeyboardSkin":
      return ECommunityItemClass.k_ECommunityItemClass_SteamDeckKeyboardSkin;
    case 17:
    case "k_ECommunityItemClass_SteamDeckStartupMovie":
      return ECommunityItemClass.k_ECommunityItemClass_SteamDeckStartupMovie;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECommunityItemClass.UNRECOGNIZED;
  }
}

export function eCommunityItemClassToJSON(object: ECommunityItemClass): string {
  switch (object) {
    case ECommunityItemClass.k_ECommunityItemClass_Invalid:
      return "k_ECommunityItemClass_Invalid";
    case ECommunityItemClass.k_ECommunityItemClass_Badge:
      return "k_ECommunityItemClass_Badge";
    case ECommunityItemClass.k_ECommunityItemClass_GameCard:
      return "k_ECommunityItemClass_GameCard";
    case ECommunityItemClass.k_ECommunityItemClass_ProfileBackground:
      return "k_ECommunityItemClass_ProfileBackground";
    case ECommunityItemClass.k_ECommunityItemClass_Emoticon:
      return "k_ECommunityItemClass_Emoticon";
    case ECommunityItemClass.k_ECommunityItemClass_BoosterPack:
      return "k_ECommunityItemClass_BoosterPack";
    case ECommunityItemClass.k_ECommunityItemClass_Consumable:
      return "k_ECommunityItemClass_Consumable";
    case ECommunityItemClass.k_ECommunityItemClass_GameGoo:
      return "k_ECommunityItemClass_GameGoo";
    case ECommunityItemClass.k_ECommunityItemClass_ProfileModifier:
      return "k_ECommunityItemClass_ProfileModifier";
    case ECommunityItemClass.k_ECommunityItemClass_Scene:
      return "k_ECommunityItemClass_Scene";
    case ECommunityItemClass.k_ECommunityItemClass_SalienItem:
      return "k_ECommunityItemClass_SalienItem";
    case ECommunityItemClass.k_ECommunityItemClass_Sticker:
      return "k_ECommunityItemClass_Sticker";
    case ECommunityItemClass.k_ECommunityItemClass_ChatEffect:
      return "k_ECommunityItemClass_ChatEffect";
    case ECommunityItemClass.k_ECommunityItemClass_MiniProfileBackground:
      return "k_ECommunityItemClass_MiniProfileBackground";
    case ECommunityItemClass.k_ECommunityItemClass_AvatarFrame:
      return "k_ECommunityItemClass_AvatarFrame";
    case ECommunityItemClass.k_ECommunityItemClass_AnimatedAvatar:
      return "k_ECommunityItemClass_AnimatedAvatar";
    case ECommunityItemClass.k_ECommunityItemClass_SteamDeckKeyboardSkin:
      return "k_ECommunityItemClass_SteamDeckKeyboardSkin";
    case ECommunityItemClass.k_ECommunityItemClass_SteamDeckStartupMovie:
      return "k_ECommunityItemClass_SteamDeckStartupMovie";
    case ECommunityItemClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESteamDeckCompatibilityFeedback {
  k_ESteamDeckCompatibilityFeedback_Unset = 0,
  k_ESteamDeckCompatibilityFeedback_Agree = 1,
  k_ESteamDeckCompatibilityFeedback_Disagree = 2,
  k_ESteamDeckCompatibilityFeedback_Ignore = 3,
  UNRECOGNIZED = -1,
}

export function eSteamDeckCompatibilityFeedbackFromJSON(object: any): ESteamDeckCompatibilityFeedback {
  switch (object) {
    case 0:
    case "k_ESteamDeckCompatibilityFeedback_Unset":
      return ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Unset;
    case 1:
    case "k_ESteamDeckCompatibilityFeedback_Agree":
      return ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Agree;
    case 2:
    case "k_ESteamDeckCompatibilityFeedback_Disagree":
      return ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Disagree;
    case 3:
    case "k_ESteamDeckCompatibilityFeedback_Ignore":
      return ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Ignore;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESteamDeckCompatibilityFeedback.UNRECOGNIZED;
  }
}

export function eSteamDeckCompatibilityFeedbackToJSON(object: ESteamDeckCompatibilityFeedback): string {
  switch (object) {
    case ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Unset:
      return "k_ESteamDeckCompatibilityFeedback_Unset";
    case ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Agree:
      return "k_ESteamDeckCompatibilityFeedback_Agree";
    case ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Disagree:
      return "k_ESteamDeckCompatibilityFeedback_Disagree";
    case ESteamDeckCompatibilityFeedback.k_ESteamDeckCompatibilityFeedback_Ignore:
      return "k_ESteamDeckCompatibilityFeedback_Ignore";
    case ESteamDeckCompatibilityFeedback.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EProvideDeckFeedbackPreference {
  k_EProvideDeckFeedbackPreference_Unset = 0,
  k_EProvideDeckFeedbackPreference_Yes = 1,
  k_EProvideDeckFeedbackPreference_No = 2,
  UNRECOGNIZED = -1,
}

export function eProvideDeckFeedbackPreferenceFromJSON(object: any): EProvideDeckFeedbackPreference {
  switch (object) {
    case 0:
    case "k_EProvideDeckFeedbackPreference_Unset":
      return EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_Unset;
    case 1:
    case "k_EProvideDeckFeedbackPreference_Yes":
      return EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_Yes;
    case 2:
    case "k_EProvideDeckFeedbackPreference_No":
      return EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_No;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EProvideDeckFeedbackPreference.UNRECOGNIZED;
  }
}

export function eProvideDeckFeedbackPreferenceToJSON(object: EProvideDeckFeedbackPreference): string {
  switch (object) {
    case EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_Unset:
      return "k_EProvideDeckFeedbackPreference_Unset";
    case EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_Yes:
      return "k_EProvideDeckFeedbackPreference_Yes";
    case EProvideDeckFeedbackPreference.k_EProvideDeckFeedbackPreference_No:
      return "k_EProvideDeckFeedbackPreference_No";
    case EProvideDeckFeedbackPreference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ETouchGesture {
  k_ETouchGestureNone = 0,
  k_ETouchGestureTouch = 1,
  k_ETouchGestureTap = 2,
  k_ETouchGestureDoubleTap = 3,
  k_ETouchGestureShortPress = 4,
  k_ETouchGestureLongPress = 5,
  k_ETouchGestureLongTap = 6,
  k_ETouchGestureTwoFingerTap = 7,
  k_ETouchGestureTapCancelled = 8,
  k_ETouchGesturePinchBegin = 9,
  k_ETouchGesturePinchUpdate = 10,
  k_ETouchGesturePinchEnd = 11,
  k_ETouchGestureFlingStart = 12,
  k_ETouchGestureFlingCancelled = 13,
  UNRECOGNIZED = -1,
}

export function eTouchGestureFromJSON(object: any): ETouchGesture {
  switch (object) {
    case 0:
    case "k_ETouchGestureNone":
      return ETouchGesture.k_ETouchGestureNone;
    case 1:
    case "k_ETouchGestureTouch":
      return ETouchGesture.k_ETouchGestureTouch;
    case 2:
    case "k_ETouchGestureTap":
      return ETouchGesture.k_ETouchGestureTap;
    case 3:
    case "k_ETouchGestureDoubleTap":
      return ETouchGesture.k_ETouchGestureDoubleTap;
    case 4:
    case "k_ETouchGestureShortPress":
      return ETouchGesture.k_ETouchGestureShortPress;
    case 5:
    case "k_ETouchGestureLongPress":
      return ETouchGesture.k_ETouchGestureLongPress;
    case 6:
    case "k_ETouchGestureLongTap":
      return ETouchGesture.k_ETouchGestureLongTap;
    case 7:
    case "k_ETouchGestureTwoFingerTap":
      return ETouchGesture.k_ETouchGestureTwoFingerTap;
    case 8:
    case "k_ETouchGestureTapCancelled":
      return ETouchGesture.k_ETouchGestureTapCancelled;
    case 9:
    case "k_ETouchGesturePinchBegin":
      return ETouchGesture.k_ETouchGesturePinchBegin;
    case 10:
    case "k_ETouchGesturePinchUpdate":
      return ETouchGesture.k_ETouchGesturePinchUpdate;
    case 11:
    case "k_ETouchGesturePinchEnd":
      return ETouchGesture.k_ETouchGesturePinchEnd;
    case 12:
    case "k_ETouchGestureFlingStart":
      return ETouchGesture.k_ETouchGestureFlingStart;
    case 13:
    case "k_ETouchGestureFlingCancelled":
      return ETouchGesture.k_ETouchGestureFlingCancelled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ETouchGesture.UNRECOGNIZED;
  }
}

export function eTouchGestureToJSON(object: ETouchGesture): string {
  switch (object) {
    case ETouchGesture.k_ETouchGestureNone:
      return "k_ETouchGestureNone";
    case ETouchGesture.k_ETouchGestureTouch:
      return "k_ETouchGestureTouch";
    case ETouchGesture.k_ETouchGestureTap:
      return "k_ETouchGestureTap";
    case ETouchGesture.k_ETouchGestureDoubleTap:
      return "k_ETouchGestureDoubleTap";
    case ETouchGesture.k_ETouchGestureShortPress:
      return "k_ETouchGestureShortPress";
    case ETouchGesture.k_ETouchGestureLongPress:
      return "k_ETouchGestureLongPress";
    case ETouchGesture.k_ETouchGestureLongTap:
      return "k_ETouchGestureLongTap";
    case ETouchGesture.k_ETouchGestureTwoFingerTap:
      return "k_ETouchGestureTwoFingerTap";
    case ETouchGesture.k_ETouchGestureTapCancelled:
      return "k_ETouchGestureTapCancelled";
    case ETouchGesture.k_ETouchGesturePinchBegin:
      return "k_ETouchGesturePinchBegin";
    case ETouchGesture.k_ETouchGesturePinchUpdate:
      return "k_ETouchGesturePinchUpdate";
    case ETouchGesture.k_ETouchGesturePinchEnd:
      return "k_ETouchGesturePinchEnd";
    case ETouchGesture.k_ETouchGestureFlingStart:
      return "k_ETouchGestureFlingStart";
    case ETouchGesture.k_ETouchGestureFlingCancelled:
      return "k_ETouchGestureFlingCancelled";
    case ETouchGesture.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ESessionPersistence {
  k_ESessionPersistence_Invalid = -1,
  k_ESessionPersistence_Ephemeral = 0,
  k_ESessionPersistence_Persistent = 1,
  UNRECOGNIZED = -1,
}

export function eSessionPersistenceFromJSON(object: any): ESessionPersistence {
  switch (object) {
    case -1:
    case "k_ESessionPersistence_Invalid":
      return ESessionPersistence.k_ESessionPersistence_Invalid;
    case 0:
    case "k_ESessionPersistence_Ephemeral":
      return ESessionPersistence.k_ESessionPersistence_Ephemeral;
    case 1:
    case "k_ESessionPersistence_Persistent":
      return ESessionPersistence.k_ESessionPersistence_Persistent;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESessionPersistence.UNRECOGNIZED;
  }
}

export function eSessionPersistenceToJSON(object: ESessionPersistence): string {
  switch (object) {
    case ESessionPersistence.k_ESessionPersistence_Invalid:
      return "k_ESessionPersistence_Invalid";
    case ESessionPersistence.k_ESessionPersistence_Ephemeral:
      return "k_ESessionPersistence_Ephemeral";
    case ESessionPersistence.k_ESessionPersistence_Persistent:
      return "k_ESessionPersistence_Persistent";
    case ESessionPersistence.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ENewSteamAnnouncementState {
  k_ENewSteamAnnouncementState_Invalid = 0,
  k_ENewSteamAnnouncementState_AllRead = 1,
  k_ENewSteamAnnouncementState_NewAnnouncement = 2,
  k_ENewSteamAnnouncementState_FeaturedAnnouncement = 3,
  UNRECOGNIZED = -1,
}

export function eNewSteamAnnouncementStateFromJSON(object: any): ENewSteamAnnouncementState {
  switch (object) {
    case 0:
    case "k_ENewSteamAnnouncementState_Invalid":
      return ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_Invalid;
    case 1:
    case "k_ENewSteamAnnouncementState_AllRead":
      return ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_AllRead;
    case 2:
    case "k_ENewSteamAnnouncementState_NewAnnouncement":
      return ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_NewAnnouncement;
    case 3:
    case "k_ENewSteamAnnouncementState_FeaturedAnnouncement":
      return ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_FeaturedAnnouncement;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ENewSteamAnnouncementState.UNRECOGNIZED;
  }
}

export function eNewSteamAnnouncementStateToJSON(object: ENewSteamAnnouncementState): string {
  switch (object) {
    case ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_Invalid:
      return "k_ENewSteamAnnouncementState_Invalid";
    case ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_AllRead:
      return "k_ENewSteamAnnouncementState_AllRead";
    case ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_NewAnnouncement:
      return "k_ENewSteamAnnouncementState_NewAnnouncement";
    case ENewSteamAnnouncementState.k_ENewSteamAnnouncementState_FeaturedAnnouncement:
      return "k_ENewSteamAnnouncementState_FeaturedAnnouncement";
    case ENewSteamAnnouncementState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ECommentThreadType {
  k_ECommentThreadTypeInvalid = 0,
  k_ECommentThreadTypeScreenshot_Deprecated = 1,
  k_ECommentThreadTypeWorkshopAccount_Developer = 2,
  k_ECommentThreadTypeWorkshopAccount_Public = 3,
  k_ECommentThreadTypePublishedFile_Developer = 4,
  k_ECommentThreadTypePublishedFile_Public = 5,
  k_ECommentThreadTypeTest = 6,
  k_ECommentThreadTypeForumTopic = 7,
  k_ECommentThreadTypeRecommendation = 8,
  k_ECommentThreadTypeVideo_Deprecated = 9,
  k_ECommentThreadTypeProfile = 10,
  k_ECommentThreadTypeNewsPost = 11,
  k_ECommentThreadTypeClan = 12,
  k_ECommentThreadTypeClanAnnouncement = 13,
  k_ECommentThreadTypeClanEvent = 14,
  k_ECommentThreadTypeUserStatusPublished = 15,
  k_ECommentThreadTypeUserReceivedNewGame = 16,
  k_ECommentThreadTypePublishedFile_Announcement = 17,
  k_ECommentThreadTypeModeratorMessage = 18,
  k_ECommentThreadTypeClanCuratedApp = 19,
  k_ECommentThreadTypeQAndASession = 20,
  k_ECommentThreadTypeMax = 21,
  UNRECOGNIZED = -1,
}

export function eCommentThreadTypeFromJSON(object: any): ECommentThreadType {
  switch (object) {
    case 0:
    case "k_ECommentThreadTypeInvalid":
      return ECommentThreadType.k_ECommentThreadTypeInvalid;
    case 1:
    case "k_ECommentThreadTypeScreenshot_Deprecated":
      return ECommentThreadType.k_ECommentThreadTypeScreenshot_Deprecated;
    case 2:
    case "k_ECommentThreadTypeWorkshopAccount_Developer":
      return ECommentThreadType.k_ECommentThreadTypeWorkshopAccount_Developer;
    case 3:
    case "k_ECommentThreadTypeWorkshopAccount_Public":
      return ECommentThreadType.k_ECommentThreadTypeWorkshopAccount_Public;
    case 4:
    case "k_ECommentThreadTypePublishedFile_Developer":
      return ECommentThreadType.k_ECommentThreadTypePublishedFile_Developer;
    case 5:
    case "k_ECommentThreadTypePublishedFile_Public":
      return ECommentThreadType.k_ECommentThreadTypePublishedFile_Public;
    case 6:
    case "k_ECommentThreadTypeTest":
      return ECommentThreadType.k_ECommentThreadTypeTest;
    case 7:
    case "k_ECommentThreadTypeForumTopic":
      return ECommentThreadType.k_ECommentThreadTypeForumTopic;
    case 8:
    case "k_ECommentThreadTypeRecommendation":
      return ECommentThreadType.k_ECommentThreadTypeRecommendation;
    case 9:
    case "k_ECommentThreadTypeVideo_Deprecated":
      return ECommentThreadType.k_ECommentThreadTypeVideo_Deprecated;
    case 10:
    case "k_ECommentThreadTypeProfile":
      return ECommentThreadType.k_ECommentThreadTypeProfile;
    case 11:
    case "k_ECommentThreadTypeNewsPost":
      return ECommentThreadType.k_ECommentThreadTypeNewsPost;
    case 12:
    case "k_ECommentThreadTypeClan":
      return ECommentThreadType.k_ECommentThreadTypeClan;
    case 13:
    case "k_ECommentThreadTypeClanAnnouncement":
      return ECommentThreadType.k_ECommentThreadTypeClanAnnouncement;
    case 14:
    case "k_ECommentThreadTypeClanEvent":
      return ECommentThreadType.k_ECommentThreadTypeClanEvent;
    case 15:
    case "k_ECommentThreadTypeUserStatusPublished":
      return ECommentThreadType.k_ECommentThreadTypeUserStatusPublished;
    case 16:
    case "k_ECommentThreadTypeUserReceivedNewGame":
      return ECommentThreadType.k_ECommentThreadTypeUserReceivedNewGame;
    case 17:
    case "k_ECommentThreadTypePublishedFile_Announcement":
      return ECommentThreadType.k_ECommentThreadTypePublishedFile_Announcement;
    case 18:
    case "k_ECommentThreadTypeModeratorMessage":
      return ECommentThreadType.k_ECommentThreadTypeModeratorMessage;
    case 19:
    case "k_ECommentThreadTypeClanCuratedApp":
      return ECommentThreadType.k_ECommentThreadTypeClanCuratedApp;
    case 20:
    case "k_ECommentThreadTypeQAndASession":
      return ECommentThreadType.k_ECommentThreadTypeQAndASession;
    case 21:
    case "k_ECommentThreadTypeMax":
      return ECommentThreadType.k_ECommentThreadTypeMax;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECommentThreadType.UNRECOGNIZED;
  }
}

export function eCommentThreadTypeToJSON(object: ECommentThreadType): string {
  switch (object) {
    case ECommentThreadType.k_ECommentThreadTypeInvalid:
      return "k_ECommentThreadTypeInvalid";
    case ECommentThreadType.k_ECommentThreadTypeScreenshot_Deprecated:
      return "k_ECommentThreadTypeScreenshot_Deprecated";
    case ECommentThreadType.k_ECommentThreadTypeWorkshopAccount_Developer:
      return "k_ECommentThreadTypeWorkshopAccount_Developer";
    case ECommentThreadType.k_ECommentThreadTypeWorkshopAccount_Public:
      return "k_ECommentThreadTypeWorkshopAccount_Public";
    case ECommentThreadType.k_ECommentThreadTypePublishedFile_Developer:
      return "k_ECommentThreadTypePublishedFile_Developer";
    case ECommentThreadType.k_ECommentThreadTypePublishedFile_Public:
      return "k_ECommentThreadTypePublishedFile_Public";
    case ECommentThreadType.k_ECommentThreadTypeTest:
      return "k_ECommentThreadTypeTest";
    case ECommentThreadType.k_ECommentThreadTypeForumTopic:
      return "k_ECommentThreadTypeForumTopic";
    case ECommentThreadType.k_ECommentThreadTypeRecommendation:
      return "k_ECommentThreadTypeRecommendation";
    case ECommentThreadType.k_ECommentThreadTypeVideo_Deprecated:
      return "k_ECommentThreadTypeVideo_Deprecated";
    case ECommentThreadType.k_ECommentThreadTypeProfile:
      return "k_ECommentThreadTypeProfile";
    case ECommentThreadType.k_ECommentThreadTypeNewsPost:
      return "k_ECommentThreadTypeNewsPost";
    case ECommentThreadType.k_ECommentThreadTypeClan:
      return "k_ECommentThreadTypeClan";
    case ECommentThreadType.k_ECommentThreadTypeClanAnnouncement:
      return "k_ECommentThreadTypeClanAnnouncement";
    case ECommentThreadType.k_ECommentThreadTypeClanEvent:
      return "k_ECommentThreadTypeClanEvent";
    case ECommentThreadType.k_ECommentThreadTypeUserStatusPublished:
      return "k_ECommentThreadTypeUserStatusPublished";
    case ECommentThreadType.k_ECommentThreadTypeUserReceivedNewGame:
      return "k_ECommentThreadTypeUserReceivedNewGame";
    case ECommentThreadType.k_ECommentThreadTypePublishedFile_Announcement:
      return "k_ECommentThreadTypePublishedFile_Announcement";
    case ECommentThreadType.k_ECommentThreadTypeModeratorMessage:
      return "k_ECommentThreadTypeModeratorMessage";
    case ECommentThreadType.k_ECommentThreadTypeClanCuratedApp:
      return "k_ECommentThreadTypeClanCuratedApp";
    case ECommentThreadType.k_ECommentThreadTypeQAndASession:
      return "k_ECommentThreadTypeQAndASession";
    case ECommentThreadType.k_ECommentThreadTypeMax:
      return "k_ECommentThreadTypeMax";
    case ECommentThreadType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EBroadcastPermission {
  k_EBroadcastPermissionDisabled = 0,
  k_EBroadcastPermissionFriendsApprove = 1,
  k_EBroadcastPermissionFriendsAllowed = 2,
  k_EBroadcastPermissionPublic = 3,
  k_EBroadcastPermissionSubscribers = 4,
  UNRECOGNIZED = -1,
}

export function eBroadcastPermissionFromJSON(object: any): EBroadcastPermission {
  switch (object) {
    case 0:
    case "k_EBroadcastPermissionDisabled":
      return EBroadcastPermission.k_EBroadcastPermissionDisabled;
    case 1:
    case "k_EBroadcastPermissionFriendsApprove":
      return EBroadcastPermission.k_EBroadcastPermissionFriendsApprove;
    case 2:
    case "k_EBroadcastPermissionFriendsAllowed":
      return EBroadcastPermission.k_EBroadcastPermissionFriendsAllowed;
    case 3:
    case "k_EBroadcastPermissionPublic":
      return EBroadcastPermission.k_EBroadcastPermissionPublic;
    case 4:
    case "k_EBroadcastPermissionSubscribers":
      return EBroadcastPermission.k_EBroadcastPermissionSubscribers;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBroadcastPermission.UNRECOGNIZED;
  }
}

export function eBroadcastPermissionToJSON(object: EBroadcastPermission): string {
  switch (object) {
    case EBroadcastPermission.k_EBroadcastPermissionDisabled:
      return "k_EBroadcastPermissionDisabled";
    case EBroadcastPermission.k_EBroadcastPermissionFriendsApprove:
      return "k_EBroadcastPermissionFriendsApprove";
    case EBroadcastPermission.k_EBroadcastPermissionFriendsAllowed:
      return "k_EBroadcastPermissionFriendsAllowed";
    case EBroadcastPermission.k_EBroadcastPermissionPublic:
      return "k_EBroadcastPermissionPublic";
    case EBroadcastPermission.k_EBroadcastPermissionSubscribers:
      return "k_EBroadcastPermissionSubscribers";
    case EBroadcastPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EBroadcastEncoderSetting {
  k_EBroadcastEncoderBestQuality = 0,
  k_EBroadcastEncoderBestPerformance = 1,
  UNRECOGNIZED = -1,
}

export function eBroadcastEncoderSettingFromJSON(object: any): EBroadcastEncoderSetting {
  switch (object) {
    case 0:
    case "k_EBroadcastEncoderBestQuality":
      return EBroadcastEncoderSetting.k_EBroadcastEncoderBestQuality;
    case 1:
    case "k_EBroadcastEncoderBestPerformance":
      return EBroadcastEncoderSetting.k_EBroadcastEncoderBestPerformance;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBroadcastEncoderSetting.UNRECOGNIZED;
  }
}

export function eBroadcastEncoderSettingToJSON(object: EBroadcastEncoderSetting): string {
  switch (object) {
    case EBroadcastEncoderSetting.k_EBroadcastEncoderBestQuality:
      return "k_EBroadcastEncoderBestQuality";
    case EBroadcastEncoderSetting.k_EBroadcastEncoderBestPerformance:
      return "k_EBroadcastEncoderBestPerformance";
    case EBroadcastEncoderSetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ECloudGamingPlatform {
  k_ECloudGamingPlatformNone = 0,
  k_ECloudGamingPlatformValve = 1,
  k_ECloudGamingPlatformNVIDIA = 2,
  UNRECOGNIZED = -1,
}

export function eCloudGamingPlatformFromJSON(object: any): ECloudGamingPlatform {
  switch (object) {
    case 0:
    case "k_ECloudGamingPlatformNone":
      return ECloudGamingPlatform.k_ECloudGamingPlatformNone;
    case 1:
    case "k_ECloudGamingPlatformValve":
      return ECloudGamingPlatform.k_ECloudGamingPlatformValve;
    case 2:
    case "k_ECloudGamingPlatformNVIDIA":
      return ECloudGamingPlatform.k_ECloudGamingPlatformNVIDIA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ECloudGamingPlatform.UNRECOGNIZED;
  }
}

export function eCloudGamingPlatformToJSON(object: ECloudGamingPlatform): string {
  switch (object) {
    case ECloudGamingPlatform.k_ECloudGamingPlatformNone:
      return "k_ECloudGamingPlatformNone";
    case ECloudGamingPlatform.k_ECloudGamingPlatformValve:
      return "k_ECloudGamingPlatformValve";
    case ECloudGamingPlatform.k_ECloudGamingPlatformNVIDIA:
      return "k_ECloudGamingPlatformNVIDIA";
    case ECloudGamingPlatform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
