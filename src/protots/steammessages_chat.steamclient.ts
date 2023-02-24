/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CMsgClientPersonaState_Friend } from "./steammessages_clientserver_friends";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export enum EChatRoomJoinState {
  k_EChatRoomJoinState_Default = 0,
  k_EChatRoomJoinState_None = 1,
  k_EChatRoomJoinState_Joined = 2,
  k_EChatRoomJoinState_TestInvalid = 99,
  UNRECOGNIZED = -1,
}

export function eChatRoomJoinStateFromJSON(object: any): EChatRoomJoinState {
  switch (object) {
    case 0:
    case "k_EChatRoomJoinState_Default":
      return EChatRoomJoinState.k_EChatRoomJoinState_Default;
    case 1:
    case "k_EChatRoomJoinState_None":
      return EChatRoomJoinState.k_EChatRoomJoinState_None;
    case 2:
    case "k_EChatRoomJoinState_Joined":
      return EChatRoomJoinState.k_EChatRoomJoinState_Joined;
    case 99:
    case "k_EChatRoomJoinState_TestInvalid":
      return EChatRoomJoinState.k_EChatRoomJoinState_TestInvalid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomJoinState.UNRECOGNIZED;
  }
}

export function eChatRoomJoinStateToJSON(object: EChatRoomJoinState): string {
  switch (object) {
    case EChatRoomJoinState.k_EChatRoomJoinState_Default:
      return "k_EChatRoomJoinState_Default";
    case EChatRoomJoinState.k_EChatRoomJoinState_None:
      return "k_EChatRoomJoinState_None";
    case EChatRoomJoinState.k_EChatRoomJoinState_Joined:
      return "k_EChatRoomJoinState_Joined";
    case EChatRoomJoinState.k_EChatRoomJoinState_TestInvalid:
      return "k_EChatRoomJoinState_TestInvalid";
    case EChatRoomJoinState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EChatRoomGroupRank {
  k_EChatRoomGroupRank_Default = 0,
  k_EChatRoomGroupRank_Viewer = 10,
  k_EChatRoomGroupRank_Guest = 15,
  k_EChatRoomGroupRank_Member = 20,
  k_EChatRoomGroupRank_Moderator = 30,
  k_EChatRoomGroupRank_Officer = 40,
  k_EChatRoomGroupRank_Owner = 50,
  k_EChatRoomGroupRank_TestInvalid = 99,
  UNRECOGNIZED = -1,
}

export function eChatRoomGroupRankFromJSON(object: any): EChatRoomGroupRank {
  switch (object) {
    case 0:
    case "k_EChatRoomGroupRank_Default":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Default;
    case 10:
    case "k_EChatRoomGroupRank_Viewer":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Viewer;
    case 15:
    case "k_EChatRoomGroupRank_Guest":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Guest;
    case 20:
    case "k_EChatRoomGroupRank_Member":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Member;
    case 30:
    case "k_EChatRoomGroupRank_Moderator":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Moderator;
    case 40:
    case "k_EChatRoomGroupRank_Officer":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Officer;
    case 50:
    case "k_EChatRoomGroupRank_Owner":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_Owner;
    case 99:
    case "k_EChatRoomGroupRank_TestInvalid":
      return EChatRoomGroupRank.k_EChatRoomGroupRank_TestInvalid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomGroupRank.UNRECOGNIZED;
  }
}

export function eChatRoomGroupRankToJSON(object: EChatRoomGroupRank): string {
  switch (object) {
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Default:
      return "k_EChatRoomGroupRank_Default";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Viewer:
      return "k_EChatRoomGroupRank_Viewer";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Guest:
      return "k_EChatRoomGroupRank_Guest";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Member:
      return "k_EChatRoomGroupRank_Member";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Moderator:
      return "k_EChatRoomGroupRank_Moderator";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Officer:
      return "k_EChatRoomGroupRank_Officer";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_Owner:
      return "k_EChatRoomGroupRank_Owner";
    case EChatRoomGroupRank.k_EChatRoomGroupRank_TestInvalid:
      return "k_EChatRoomGroupRank_TestInvalid";
    case EChatRoomGroupRank.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EChatRoomNotificationLevel {
  k_EChatroomNotificationLevel_Invalid = 0,
  k_EChatroomNotificationLevel_None = 1,
  k_EChatroomNotificationLevel_MentionMe = 2,
  k_EChatroomNotificationLevel_MentionAll = 3,
  k_EChatroomNotificationLevel_AllMessages = 4,
  UNRECOGNIZED = -1,
}

export function eChatRoomNotificationLevelFromJSON(object: any): EChatRoomNotificationLevel {
  switch (object) {
    case 0:
    case "k_EChatroomNotificationLevel_Invalid":
      return EChatRoomNotificationLevel.k_EChatroomNotificationLevel_Invalid;
    case 1:
    case "k_EChatroomNotificationLevel_None":
      return EChatRoomNotificationLevel.k_EChatroomNotificationLevel_None;
    case 2:
    case "k_EChatroomNotificationLevel_MentionMe":
      return EChatRoomNotificationLevel.k_EChatroomNotificationLevel_MentionMe;
    case 3:
    case "k_EChatroomNotificationLevel_MentionAll":
      return EChatRoomNotificationLevel.k_EChatroomNotificationLevel_MentionAll;
    case 4:
    case "k_EChatroomNotificationLevel_AllMessages":
      return EChatRoomNotificationLevel.k_EChatroomNotificationLevel_AllMessages;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomNotificationLevel.UNRECOGNIZED;
  }
}

export function eChatRoomNotificationLevelToJSON(object: EChatRoomNotificationLevel): string {
  switch (object) {
    case EChatRoomNotificationLevel.k_EChatroomNotificationLevel_Invalid:
      return "k_EChatroomNotificationLevel_Invalid";
    case EChatRoomNotificationLevel.k_EChatroomNotificationLevel_None:
      return "k_EChatroomNotificationLevel_None";
    case EChatRoomNotificationLevel.k_EChatroomNotificationLevel_MentionMe:
      return "k_EChatroomNotificationLevel_MentionMe";
    case EChatRoomNotificationLevel.k_EChatroomNotificationLevel_MentionAll:
      return "k_EChatroomNotificationLevel_MentionAll";
    case EChatRoomNotificationLevel.k_EChatroomNotificationLevel_AllMessages:
      return "k_EChatroomNotificationLevel_AllMessages";
    case EChatRoomNotificationLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EChatRoomServerMessage {
  k_EChatRoomServerMsg_Invalid = 0,
  k_EChatRoomServerMsg_RenameChatRoom = 1,
  k_EChatRoomServerMsg_Joined = 2,
  k_EChatRoomServerMsg_Parted = 3,
  k_EChatRoomServerMsg_Kicked = 4,
  k_EChatRoomServerMsg_Invited = 5,
  k_EChatRoomServerMsg_InviteDismissed = 8,
  k_EChatRoomServerMsg_ChatRoomTaglineChanged = 9,
  k_EChatRoomServerMsg_ChatRoomAvatarChanged = 10,
  k_EChatRoomServerMsg_AppCustom = 11,
  UNRECOGNIZED = -1,
}

export function eChatRoomServerMessageFromJSON(object: any): EChatRoomServerMessage {
  switch (object) {
    case 0:
    case "k_EChatRoomServerMsg_Invalid":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_Invalid;
    case 1:
    case "k_EChatRoomServerMsg_RenameChatRoom":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_RenameChatRoom;
    case 2:
    case "k_EChatRoomServerMsg_Joined":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_Joined;
    case 3:
    case "k_EChatRoomServerMsg_Parted":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_Parted;
    case 4:
    case "k_EChatRoomServerMsg_Kicked":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_Kicked;
    case 5:
    case "k_EChatRoomServerMsg_Invited":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_Invited;
    case 8:
    case "k_EChatRoomServerMsg_InviteDismissed":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_InviteDismissed;
    case 9:
    case "k_EChatRoomServerMsg_ChatRoomTaglineChanged":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_ChatRoomTaglineChanged;
    case 10:
    case "k_EChatRoomServerMsg_ChatRoomAvatarChanged":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_ChatRoomAvatarChanged;
    case 11:
    case "k_EChatRoomServerMsg_AppCustom":
      return EChatRoomServerMessage.k_EChatRoomServerMsg_AppCustom;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomServerMessage.UNRECOGNIZED;
  }
}

export function eChatRoomServerMessageToJSON(object: EChatRoomServerMessage): string {
  switch (object) {
    case EChatRoomServerMessage.k_EChatRoomServerMsg_Invalid:
      return "k_EChatRoomServerMsg_Invalid";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_RenameChatRoom:
      return "k_EChatRoomServerMsg_RenameChatRoom";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_Joined:
      return "k_EChatRoomServerMsg_Joined";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_Parted:
      return "k_EChatRoomServerMsg_Parted";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_Kicked:
      return "k_EChatRoomServerMsg_Kicked";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_Invited:
      return "k_EChatRoomServerMsg_Invited";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_InviteDismissed:
      return "k_EChatRoomServerMsg_InviteDismissed";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_ChatRoomTaglineChanged:
      return "k_EChatRoomServerMsg_ChatRoomTaglineChanged";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_ChatRoomAvatarChanged:
      return "k_EChatRoomServerMsg_ChatRoomAvatarChanged";
    case EChatRoomServerMessage.k_EChatRoomServerMsg_AppCustom:
      return "k_EChatRoomServerMsg_AppCustom";
    case EChatRoomServerMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EChatRoomMessageReactionType {
  k_EChatRoomMessageReactionType_Invalid = 0,
  k_EChatRoomMessageReactionType_Emoticon = 1,
  k_EChatRoomMessageReactionType_Sticker = 2,
  UNRECOGNIZED = -1,
}

export function eChatRoomMessageReactionTypeFromJSON(object: any): EChatRoomMessageReactionType {
  switch (object) {
    case 0:
    case "k_EChatRoomMessageReactionType_Invalid":
      return EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Invalid;
    case 1:
    case "k_EChatRoomMessageReactionType_Emoticon":
      return EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Emoticon;
    case 2:
    case "k_EChatRoomMessageReactionType_Sticker":
      return EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Sticker;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomMessageReactionType.UNRECOGNIZED;
  }
}

export function eChatRoomMessageReactionTypeToJSON(object: EChatRoomMessageReactionType): string {
  switch (object) {
    case EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Invalid:
      return "k_EChatRoomMessageReactionType_Invalid";
    case EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Emoticon:
      return "k_EChatRoomMessageReactionType_Emoticon";
    case EChatRoomMessageReactionType.k_EChatRoomMessageReactionType_Sticker:
      return "k_EChatRoomMessageReactionType_Sticker";
    case EChatRoomMessageReactionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EChatRoomMemberStateChange {
  k_EChatRoomMemberStateChange_Invalid = 0,
  k_EChatRoomMemberStateChange_Joined = 1,
  k_EChatRoomMemberStateChange_Parted = 2,
  k_EChatRoomMemberStateChange_Kicked = 3,
  k_EChatRoomMemberStateChange_Invited = 4,
  k_EChatRoomMemberStateChange_RankChanged = 7,
  k_EChatRoomMemberStateChange_InviteDismissed = 8,
  k_EChatRoomMemberStateChange_Muted = 9,
  k_EChatRoomMemberStateChange_Banned = 10,
  k_EChatRoomMemberStateChange_RolesChanged = 12,
  UNRECOGNIZED = -1,
}

export function eChatRoomMemberStateChangeFromJSON(object: any): EChatRoomMemberStateChange {
  switch (object) {
    case 0:
    case "k_EChatRoomMemberStateChange_Invalid":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Invalid;
    case 1:
    case "k_EChatRoomMemberStateChange_Joined":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Joined;
    case 2:
    case "k_EChatRoomMemberStateChange_Parted":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Parted;
    case 3:
    case "k_EChatRoomMemberStateChange_Kicked":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Kicked;
    case 4:
    case "k_EChatRoomMemberStateChange_Invited":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Invited;
    case 7:
    case "k_EChatRoomMemberStateChange_RankChanged":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_RankChanged;
    case 8:
    case "k_EChatRoomMemberStateChange_InviteDismissed":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_InviteDismissed;
    case 9:
    case "k_EChatRoomMemberStateChange_Muted":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Muted;
    case 10:
    case "k_EChatRoomMemberStateChange_Banned":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Banned;
    case 12:
    case "k_EChatRoomMemberStateChange_RolesChanged":
      return EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_RolesChanged;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EChatRoomMemberStateChange.UNRECOGNIZED;
  }
}

export function eChatRoomMemberStateChangeToJSON(object: EChatRoomMemberStateChange): string {
  switch (object) {
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Invalid:
      return "k_EChatRoomMemberStateChange_Invalid";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Joined:
      return "k_EChatRoomMemberStateChange_Joined";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Parted:
      return "k_EChatRoomMemberStateChange_Parted";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Kicked:
      return "k_EChatRoomMemberStateChange_Kicked";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Invited:
      return "k_EChatRoomMemberStateChange_Invited";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_RankChanged:
      return "k_EChatRoomMemberStateChange_RankChanged";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_InviteDismissed:
      return "k_EChatRoomMemberStateChange_InviteDismissed";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Muted:
      return "k_EChatRoomMemberStateChange_Muted";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_Banned:
      return "k_EChatRoomMemberStateChange_Banned";
    case EChatRoomMemberStateChange.k_EChatRoomMemberStateChange_RolesChanged:
      return "k_EChatRoomMemberStateChange_RolesChanged";
    case EChatRoomMemberStateChange.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CChatRequestFriendPersonaStatesRequest {
}

export interface CChatRequestFriendPersonaStatesResponse {
}

export interface CChatRoomCreateChatRoomGroupRequest {
  steamidPartner: number;
  steamidInvited: number;
  name: string;
  steamidInvitees: number[];
  watchingBroadcastAccountid: number;
  watchingBroadcastChannelId: number;
}

export interface CChatRole {
  roleId: number;
  name: string;
  ordinal: number;
}

export interface CChatRoleActions {
  roleId: number;
  canCreateRenameDeleteChannel: boolean;
  canKick: boolean;
  canBan: boolean;
  canInvite: boolean;
  canChangeTaglineAvatarName: boolean;
  canChat: boolean;
  canViewHistory: boolean;
  canChangeGroupRoles: boolean;
  canChangeUserRoles: boolean;
  canMentionAll: boolean;
  canSetWatchingBroadcast: boolean;
}

export interface CChatPartyBeacon {
  appId: number;
  steamidOwner: number;
  beaconId: number;
  gameMetadata: string;
}

export interface CChatRoomGroupHeaderState {
  chatGroupId: number;
  chatName: string;
  clanid: number;
  accountidOwner: number;
  appid: number;
  tagline: string;
  avatarSha: Buffer;
  defaultRoleId: number;
  roles: CChatRole[];
  roleActions: CChatRoleActions[];
  watchingBroadcastAccountid: number;
  partyBeacons: CChatPartyBeacon[];
  watchingBroadcastChannelId: number;
  activeMinigameId: number;
  avatarUgcUrl: string;
  disabled: boolean;
}

export interface CChatRoomMember {
  accountid: number;
  state: EChatRoomJoinState;
  rank: EChatRoomGroupRank;
  timeKickExpire: number;
  roleIds: number[];
}

export interface CChatRoomState {
  chatId: number;
  chatName: string;
  voiceAllowed: boolean;
  membersInVoice: number[];
  timeLastMessage: number;
  sortOrder: number;
  lastMessage: string;
  accountidLastMessage: number;
}

export interface CChatRoomGroupState {
  headerState: CChatRoomGroupHeaderState | undefined;
  members: CChatRoomMember[];
  defaultChatId: number;
  chatRooms: CChatRoomState[];
  kicked: CChatRoomMember[];
}

export interface CUserChatRoomState {
  chatId: number;
  timeJoined: number;
  timeLastAck: number;
  desktopNotificationLevel: EChatRoomNotificationLevel;
  mobileNotificationLevel: EChatRoomNotificationLevel;
  timeLastMention: number;
  unreadIndicatorMuted: boolean;
  timeFirstUnread: number;
}

export interface CUserChatRoomGroupState {
  chatGroupId: number;
  timeJoined: number;
  userChatRoomState: CUserChatRoomState[];
  desktopNotificationLevel: EChatRoomNotificationLevel;
  mobileNotificationLevel: EChatRoomNotificationLevel;
  timeLastGroupAck: number;
  unreadIndicatorMuted: boolean;
}

export interface CChatRoomCreateChatRoomGroupResponse {
  chatGroupId: number;
  state: CChatRoomGroupState | undefined;
  userChatState: CUserChatRoomGroupState | undefined;
}

export interface CChatRoomSaveChatRoomGroupRequest {
  chatGroupId: number;
  name: string;
}

export interface CChatRoomSaveChatRoomGroupResponse {
}

export interface CChatRoomRenameChatRoomGroupRequest {
  chatGroupId: number;
  name: string;
}

export interface CChatRoomRenameChatRoomGroupResponse {
  name: string;
}

export interface CChatRoomSetChatRoomGroupTaglineRequest {
  chatGroupId: number;
  tagline: string;
}

export interface CChatRoomSetChatRoomGroupTaglineResponse {
}

export interface CChatRoomSetChatRoomGroupAvatarRequest {
  chatGroupId: number;
  avatarSha: Buffer;
}

export interface CChatRoomSetChatRoomGroupAvatarResponse {
}

export interface CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
  chatGroupId: number;
  watchingBroadcastAccountid: number;
  watchingBroadcastChannelId: number;
}

export interface CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
}

export interface CChatRoomJoinMiniGameForChatRoomGroupRequest {
  chatGroupId: number;
  chatId: number;
}

export interface CChatRoomJoinMiniGameForChatRoomGroupResponse {
  minigameId: number;
}

export interface CChatRoomEndMiniGameForChatRoomGroupRequest {
  chatGroupId: number;
  chatId: number;
  minigameId: number;
}

export interface CChatRoomEndMiniGameForChatRoomGroupResponse {
}

export interface CChatRoomMuteUserRequest {
  chatGroupId: number;
  steamid: number;
  expiration: number;
}

export interface CChatRoomMuteUserResponse {
}

export interface CChatRoomKickUserRequest {
  chatGroupId: number;
  steamid: number;
  expiration: number;
}

export interface CChatRoomKickUserResponse {
}

export interface CChatRoomSetUserBanStateRequest {
  chatGroupId: number;
  steamid: number;
  banState: boolean;
}

export interface CChatRoomSetUserBanStateResponse {
}

export interface CChatRoomRevokeInviteRequest {
  chatGroupId: number;
  steamid: number;
}

export interface CChatRoomRevokeInviteResponse {
}

export interface CChatRoomCreateRoleRequest {
  chatGroupId: number;
  name: string;
}

export interface CChatRoomCreateRoleResponse {
  actions: CChatRoleActions | undefined;
}

export interface CChatRoomGetRolesRequest {
  chatGroupId: number;
}

export interface CChatRoomGetRolesResponse {
  roles: CChatRole[];
}

export interface CChatRoomRenameRoleRequest {
  chatGroupId: number;
  roleId: number;
  name: string;
}

export interface CChatRoomRenameRoleResponse {
}

export interface CChatRoomReorderRoleRequest {
  chatGroupId: number;
  roleId: number;
  ordinal: number;
}

export interface CChatRoomReorderRoleResponse {
}

export interface CChatRoomDeleteRoleRequest {
  chatGroupId: number;
  roleId: number;
}

export interface CChatRoomDeleteRoleResponse {
}

export interface CChatRoomGetRoleActionsRequest {
  chatGroupId: number;
  roleId: number;
}

export interface CChatRoomGetRoleActionsResponse {
  actions: CChatRoleActions[];
}

export interface CChatRoomReplaceRoleActionsRequest {
  chatGroupId: number;
  roleId: number;
  actions: CChatRoleActions | undefined;
}

export interface CChatRoomReplaceRoleActionsResponse {
}

export interface CChatRoomAddRoleToUserRequest {
  chatGroupId: number;
  roleId: number;
  steamid: number;
}

export interface CChatRoomAddRoleToUserResponse {
}

export interface CChatRoomGetRolesForUserRequest {
  chatGroupId: number;
  steamid: number;
}

export interface CChatRoomGetRolesForUserResponse {
  roleIds: number[];
}

export interface CChatRoomDeleteRoleFromUserRequest {
  chatGroupId: number;
  roleId: number;
  steamid: number;
}

export interface CChatRoomDeleteRoleFromUserResponse {
}

export interface CChatRoomJoinChatRoomGroupRequest {
  chatGroupId: number;
  inviteCode: string;
  chatId: number;
}

export interface CChatRoomJoinChatRoomGroupResponse {
  state: CChatRoomGroupState | undefined;
  userChatState: CUserChatRoomGroupState | undefined;
  joinChatId: number;
  timeExpire: number;
}

export interface CChatRoomInviteFriendToChatRoomGroupRequest {
  chatGroupId: number;
  steamid: number;
  chatId: number;
  skipFriendsuiCheck: boolean;
}

export interface CChatRoomInviteFriendToChatRoomGroupResponse {
}

export interface CChatRoomLeaveChatRoomGroupRequest {
  chatGroupId: number;
}

export interface CChatRoomLeaveChatRoomGroupResponse {
}

export interface CChatRoomCreateChatRoomRequest {
  chatGroupId: number;
  name: string;
  allowVoice: boolean;
}

export interface CChatRoomCreateChatRoomResponse {
  chatRoom: CChatRoomState | undefined;
}

export interface CChatRoomDeleteChatRoomRequest {
  chatGroupId: number;
  chatId: number;
}

export interface CChatRoomDeleteChatRoomResponse {
}

export interface CChatRoomRenameChatRoomRequest {
  chatGroupId: number;
  chatId: number;
  name: string;
}

export interface CChatRoomRenameChatRoomResponse {
}

export interface CChatRoomReorderChatRoomRequest {
  chatGroupId: number;
  chatId: number;
  moveAfterChatId: number;
}

export interface CChatRoomReorderChatRoomResponse {
}

export interface CChatRoomSendChatMessageRequest {
  chatGroupId: number;
  chatId: number;
  message: string;
  echoToSender: boolean;
}

export interface CChatRoomSendChatMessageResponse {
  modifiedMessage: string;
  serverTimestamp: number;
  ordinal: number;
  messageWithoutBbCode: string;
}

export interface CChatRoomJoinVoiceChatRequest {
  chatGroupId: number;
  chatId: number;
}

export interface CChatRoomJoinVoiceChatResponse {
  voiceChatid: number;
}

export interface CChatRoomLeaveVoiceChatRequest {
  chatGroupId: number;
  chatId: number;
}

export interface CChatRoomLeaveVoiceChatResponse {
}

export interface CChatRoomGetMessageHistoryRequest {
  chatGroupId: number;
  chatId: number;
  lastTime: number;
  lastOrdinal: number;
  startTime: number;
  startOrdinal: number;
  maxCount: number;
}

export interface ServerMessage {
  message: EChatRoomServerMessage;
  stringParam: string;
  accountidParam: number;
}

export interface CChatRoomGetMessageHistoryResponse {
  messages: CChatRoomGetMessageHistoryResponse_ChatMessage[];
  moreAvailable: boolean;
}

export interface CChatRoomGetMessageHistoryResponse_ChatMessage {
  sender: number;
  serverTimestamp: number;
  message: string;
  ordinal: number;
  serverMessage: ServerMessage | undefined;
  deleted: boolean;
  reactions: CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction[];
}

export interface CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
  reactionType: EChatRoomMessageReactionType;
  reaction: string;
  numReactors: number;
  hasUserReacted: boolean;
}

export interface CChatRoomGetMyChatRoomGroupsRequest {
}

export interface CChatRoomGetChatRoomGroupSummaryResponse {
  chatGroupId: number;
  chatGroupName: string;
  activeMemberCount: number;
  activeVoiceMemberCount: number;
  defaultChatId: number;
  chatRooms: CChatRoomState[];
  clanid: number;
  chatGroupTagline: string;
  accountidOwner: number;
  topMembers: number[];
  chatGroupAvatarSha: Buffer;
  rank: EChatRoomGroupRank;
  defaultRoleId: number;
  roleIds: number[];
  roleActions: CChatRoleActions[];
  watchingBroadcastAccountid: number;
  appid: number;
  partyBeacons: CChatPartyBeacon[];
  watchingBroadcastChannelId: number;
  activeMinigameId: number;
  avatarUgcUrl: string;
  disabled: boolean;
}

export interface CChatRoomSummaryPair {
  userChatGroupState: CUserChatRoomGroupState | undefined;
  groupSummary: CChatRoomGetChatRoomGroupSummaryResponse | undefined;
}

export interface CChatRoomGetMyChatRoomGroupsResponse {
  chatRoomGroups: CChatRoomSummaryPair[];
}

export interface CChatRoomGetChatRoomGroupStateRequest {
  chatGroupId: number;
}

export interface CChatRoomGetChatRoomGroupStateResponse {
  state: CChatRoomGroupState | undefined;
}

export interface CChatRoomGetChatRoomGroupSummaryRequest {
  chatGroupId: number;
}

export interface CChatRoomSetAppChatRoomGroupForceActiveRequest {
  chatGroupId: number;
  requestingAppId: number;
}

export interface CChatRoomSetAppChatRoomGroupForceActiveResponse {
  result: number;
  accountsInChannel: number[];
}

export interface CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
  chatGroupId: number;
  requestingAppId: number;
}

export interface CChatRoomAckChatMessageNotification {
  chatGroupId: number;
  chatId: number;
  timestamp: number;
}

export interface CChatRoomCreateInviteLinkRequest {
  chatGroupId: number;
  secondsValid: number;
  chatId: number;
}

export interface CChatRoomCreateInviteLinkResponse {
  inviteCode: string;
  secondsValid: number;
}

export interface CChatRoomGetInviteLinkInfoRequest {
  inviteCode: string;
}

export interface CChatRoomGetInviteLinkInfoResponse {
  steamidSender: number;
  timeExpires: number;
  chatId: number;
  groupSummary: CChatRoomGetChatRoomGroupSummaryResponse | undefined;
  userChatGroupState: CUserChatRoomGroupState | undefined;
  timeKickExpire: number;
  banned: boolean;
}

export interface CChatRoomGetInviteInfoRequest {
  steamidInvitee: number;
  chatGroupId: number;
  chatId: number;
  inviteCode: string;
}

export interface CChatRoomGetInviteInfoResponse {
  groupSummary: CChatRoomGetChatRoomGroupSummaryResponse | undefined;
  timeKickExpire: number;
  banned: boolean;
}

export interface CChatRoomGetInviteLinksForGroupRequest {
  chatGroupId: number;
}

export interface CChatRoomGetInviteLinksForGroupResponse {
  inviteLinks: CChatRoomGetInviteLinksForGroupResponse_LinkInfo[];
}

export interface CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
  inviteCode: string;
  steamidCreator: number;
  timeExpires: number;
  chatId: number;
}

export interface CChatRoomGetBanListRequest {
  chatGroupId: number;
}

export interface CChatRoomGetBanListResponse {
  bans: CChatRoomGetBanListResponse_BanInfo[];
}

export interface CChatRoomGetBanListResponse_BanInfo {
  accountid: number;
  accountidActor: number;
  timeBanned: number;
  banReason: string;
}

export interface CChatRoomGetInviteListRequest {
  chatGroupId: number;
}

export interface CChatRoomGroupInvite {
  accountid: number;
  accountidActor: number;
  timeInvited: number;
}

export interface CChatRoomGetInviteListResponse {
  invites: CChatRoomGroupInvite[];
}

export interface CChatRoomDeleteInviteLinkRequest {
  chatGroupId: number;
  inviteCode: string;
}

export interface CChatRoomDeleteInviteLinkResponse {
}

export interface CChatRoomSetSessionActiveChatRoomGroupsRequest {
  chatGroupIds: number[];
  chatGroupsDataRequested: number[];
  virtualizeMembersThreshold: number;
}

export interface CChatRoomSetSessionActiveChatRoomGroupsResponse {
  chatStates: CChatRoomGroupState[];
  virtualizeMembersChatGroupIds: number[];
}

export interface CChatRoomSetUserChatGroupPreferencesRequest {
  chatGroupId: number;
  chatGroupPreferences: CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences | undefined;
  chatRoomPreferences: CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences[];
}

export interface CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
  desktopNotificationLevel: EChatRoomNotificationLevel;
  mobileNotificationLevel: EChatRoomNotificationLevel;
  unreadIndicatorMuted: boolean;
}

export interface CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
  chatId: number;
  desktopNotificationLevel: EChatRoomNotificationLevel;
  mobileNotificationLevel: EChatRoomNotificationLevel;
  unreadIndicatorMuted: boolean;
}

export interface CChatRoomSetUserChatGroupPreferencesResponse {
}

export interface CChatRoomDeleteChatMessagesRequest {
  chatGroupId: number;
  chatId: number;
  messages: CChatRoomDeleteChatMessagesRequest_Message[];
}

export interface CChatRoomDeleteChatMessagesRequest_Message {
  serverTimestamp: number;
  ordinal: number;
}

export interface CChatRoomDeleteChatMessagesResponse {
}

export interface CChatRoomUpdateMemberListViewNotification {
  chatGroupId: number;
  viewId: number;
  start: number;
  end: number;
  clientChangenumber: number;
  deleteView: boolean;
  personaSubscribeAccountids: number[];
  personaUnsubscribeAccountids: number[];
}

export interface CChatRoomSearchMembersRequest {
  chatGroupId: number;
  searchId: number;
  searchText: string;
  maxResults: number;
}

export interface CChatRoomSearchMembersResponse {
  matchingMembers: CChatRoomSearchMembersResponse_MemberMatch[];
  statusFlags: number;
}

export interface CChatRoomSearchMembersResponse_MemberMatch {
  accountid: number;
  persona: CMsgClientPersonaState_Friend | undefined;
}

export interface CChatRoomUpdateMessageReactionRequest {
  chatGroupId: number;
  chatId: number;
  serverTimestamp: number;
  ordinal: number;
  reactionType: EChatRoomMessageReactionType;
  reaction: string;
  isAdd: boolean;
}

export interface CChatRoomUpdateMessageReactionResponse {
  numReactors: number;
}

export interface CChatRoomGetMessageReactionReactorsRequest {
  chatGroupId: number;
  chatId: number;
  serverTimestamp: number;
  ordinal: number;
  reactionType: EChatRoomMessageReactionType;
  reaction: string;
  limit: number;
}

export interface CChatRoomGetMessageReactionReactorsResponse {
  reactors: number[];
}

export interface CClanChatRoomsGetClanChatRoomInfoRequest {
  steamid: number;
  autocreate: boolean;
}

export interface CClanChatRoomsGetClanChatRoomInfoResponse {
  chatGroupSummary: CChatRoomGetChatRoomGroupSummaryResponse | undefined;
}

export interface CClanChatRoomsSetClanChatRoomPrivateRequest {
  steamid: number;
  chatRoomPrivate: boolean;
}

export interface CClanChatRoomsSetClanChatRoomPrivateResponse {
  chatRoomPrivate: boolean;
}

export interface CChatMentions {
  mentionAll: boolean;
  mentionHere: boolean;
  mentionAccountids: number[];
}

export interface CChatRoomIncomingChatMessageNotification {
  chatGroupId: number;
  chatId: number;
  steamidSender: number;
  message: string;
  timestamp: number;
  mentions: CChatMentions | undefined;
  ordinal: number;
  serverMessage: ServerMessage | undefined;
  messageNoBbcode: string;
  chatName: string;
}

export interface CChatRoomChatMessageModifiedNotification {
  chatGroupId: number;
  chatId: number;
  messages: CChatRoomChatMessageModifiedNotification_ChatMessage[];
}

export interface CChatRoomChatMessageModifiedNotification_ChatMessage {
  serverTimestamp: number;
  ordinal: number;
  deleted: boolean;
}

export interface CChatRoomMemberStateChangeNotification {
  chatGroupId: number;
  member: CChatRoomMember | undefined;
  change: EChatRoomMemberStateChange;
}

export interface CChatRoomChatRoomHeaderStateNotification {
  headerState: CChatRoomGroupHeaderState | undefined;
}

export interface CChatRoomChatRoomGroupRoomsChangeNotification {
  chatGroupId: number;
  defaultChatId: number;
  chatRooms: CChatRoomState[];
}

export interface CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
  chatId: number;
  chatGroupId: number;
}

export interface ChatRoomClientNotifyChatGroupUserStateChangedNotification {
  chatGroupId: number;
  userChatGroupState: CUserChatRoomGroupState | undefined;
  groupSummary: CChatRoomGetChatRoomGroupSummaryResponse | undefined;
  userAction: EChatRoomMemberStateChange;
}

export interface ChatRoomClientNotifyChatRoomDisconnectNotification {
  chatGroupIds: number[];
}

export interface CChatRoomMemberListView {
  start: number;
  end: number;
  totalCount: number;
  clientChangenumber: number;
  serverChangenumber: number;
}

export interface CChatRoomMemberSummaryCounts {
  ingame: number;
  online: number;
  offline: number;
}

export interface CChatRoomClientMemberListViewUpdatedNotification {
  chatGroupId: number;
  viewId: number;
  view: CChatRoomMemberListView | undefined;
  members: CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry[];
  statusFlags: number;
  memberSummary: CChatRoomMemberSummaryCounts | undefined;
  subscribedPersonas: CMsgClientPersonaState_Friend[];
}

export interface CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
  rank: number;
  accountid: number;
  persona: CMsgClientPersonaState_Friend | undefined;
}

export interface CChatRoomMessageReactionNotification {
  chatGroupId: number;
  chatId: number;
  serverTimestamp: number;
  ordinal: number;
  reactor: number;
  reactionType: EChatRoomMessageReactionType;
  reaction: string;
  isAdd: boolean;
}

export interface CChatUsabilityClientUsabilityMetricsNotification {
  metricsRunId: number;
  clientBuild: number;
  metricsVersion: number;
  inWeb: boolean;
  settings: CChatUsabilityClientUsabilityMetricsNotification_Settings | undefined;
  voiceSettings: CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings | undefined;
  uiState: CChatUsabilityClientUsabilityMetricsNotification_UIState | undefined;
  metrics: CChatUsabilityClientUsabilityMetricsNotification_Metrics | undefined;
}

export interface CChatUsabilityClientUsabilityMetricsNotification_Settings {
  notificationsShowIngame: boolean;
  notificationsShowOnline: boolean;
  notificationsShowMessage: boolean;
  notificationsEventsAndAnnouncements: boolean;
  soundsPlayIngame: boolean;
  soundsPlayOnline: boolean;
  soundsPlayMessage: boolean;
  soundsEventsAndAnnouncements: boolean;
  alwaysNewChatWindow: boolean;
  forceAlphabeticFriendSorting: boolean;
  chatFlashMode: number;
  rememberOpenChats: boolean;
  compactQuickAccess: boolean;
  compactFriendsList: boolean;
  notificationsShowChatRoomNotification: boolean;
  soundsPlayChatRoomNotification: boolean;
  hideOfflineFriendsInTagGroups: boolean;
  hideCategorizedFriends: boolean;
  categorizeInGameFriendsByGame: boolean;
  chatFontSize: number;
  use24hourClock: boolean;
  doNotDisturbMode: boolean;
  disableEmbedInlining: boolean;
  signIntoFriends: boolean;
  animatedAvatars: boolean;
}

export interface CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
  voiceInputGain: number;
  voiceOutputGain: number;
  noiseGateLevel: number;
  voiceUseEchoCancellation: boolean;
  voiceUseNoiseCancellation: boolean;
  voiceUseAutoGainControl: boolean;
  selectedNonDefaultMic: boolean;
  selectedNonDefaultOutput: boolean;
  pushToTalkEnabled: boolean;
  pushToMuteEnabled: boolean;
  playPttSounds: boolean;
}

export interface CChatUsabilityClientUsabilityMetricsNotification_UIState {
  friendsListHeight: number;
  friendsListWidth: number;
  friendsListDocked: boolean;
  friendsListCollapsed: boolean;
  friendsListGroupChatsHeight: number;
  friendsListVisible: boolean;
  chatPopupsOpened: number;
  groupChatTabsOpened: number;
  friendChatTabsOpened: number;
  chatWindowWidth: number;
  chatWindowHeight: number;
  categoryCollapse: CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState | undefined;
  groupChatLeftColCollapsed: number;
  groupChatRightColCollapsed: number;
  inOneOnOneVoiceChat: boolean;
  inGroupVoiceChat: boolean;
}

export interface CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
  inGameCollapsed: boolean;
  onlineCollapsed: boolean;
  offlineCollapsed: boolean;
  gameGroupsCollapsed: number;
  categoriesCollapsed: number;
}

export interface CChatUsabilityClientUsabilityMetricsNotification_Metrics {
  friendsCount: number;
  friendsCategoryCount: number;
  friendsCategorizedCount: number;
  friendsOnlineCount: number;
  friendsInGameCount: number;
  friendsInGameSingletonCount: number;
  gameGroupCount: number;
  friendsFavoriteCount: number;
  groupChatCount: number;
  groupChatFavoriteCount: number;
}

export interface CChatUsabilityRequestClientUsabilityMetricsNotification {
  metricsRunId: number;
}

function createBaseCChatRequestFriendPersonaStatesRequest(): CChatRequestFriendPersonaStatesRequest {
  return {};
}

export const CChatRequestFriendPersonaStatesRequest = {
  encode(_: CChatRequestFriendPersonaStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRequestFriendPersonaStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRequestFriendPersonaStatesRequest();
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

  fromJSON(_: any): CChatRequestFriendPersonaStatesRequest {
    return {};
  },

  toJSON(_: CChatRequestFriendPersonaStatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRequestFriendPersonaStatesRequest>, I>>(
    base?: I,
  ): CChatRequestFriendPersonaStatesRequest {
    return CChatRequestFriendPersonaStatesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRequestFriendPersonaStatesRequest>, I>>(
    _: I,
  ): CChatRequestFriendPersonaStatesRequest {
    const message = createBaseCChatRequestFriendPersonaStatesRequest();
    return message;
  },
};

function createBaseCChatRequestFriendPersonaStatesResponse(): CChatRequestFriendPersonaStatesResponse {
  return {};
}

export const CChatRequestFriendPersonaStatesResponse = {
  encode(_: CChatRequestFriendPersonaStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRequestFriendPersonaStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRequestFriendPersonaStatesResponse();
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

  fromJSON(_: any): CChatRequestFriendPersonaStatesResponse {
    return {};
  },

  toJSON(_: CChatRequestFriendPersonaStatesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRequestFriendPersonaStatesResponse>, I>>(
    base?: I,
  ): CChatRequestFriendPersonaStatesResponse {
    return CChatRequestFriendPersonaStatesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRequestFriendPersonaStatesResponse>, I>>(
    _: I,
  ): CChatRequestFriendPersonaStatesResponse {
    const message = createBaseCChatRequestFriendPersonaStatesResponse();
    return message;
  },
};

function createBaseCChatRoomCreateChatRoomGroupRequest(): CChatRoomCreateChatRoomGroupRequest {
  return {
    steamidPartner: 0,
    steamidInvited: 0,
    name: "",
    steamidInvitees: [],
    watchingBroadcastAccountid: 0,
    watchingBroadcastChannelId: 0,
  };
}

export const CChatRoomCreateChatRoomGroupRequest = {
  encode(message: CChatRoomCreateChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidPartner !== 0) {
      writer.uint32(9).fixed64(message.steamidPartner);
    }
    if (message.steamidInvited !== 0) {
      writer.uint32(17).fixed64(message.steamidInvited);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    writer.uint32(34).fork();
    for (const v of message.steamidInvitees) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.watchingBroadcastAccountid !== 0) {
      writer.uint32(48).uint32(message.watchingBroadcastAccountid);
    }
    if (message.watchingBroadcastChannelId !== 0) {
      writer.uint32(56).uint64(message.watchingBroadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidPartner = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.steamidInvited = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.steamidInvitees.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.steamidInvitees.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        case 6:
          message.watchingBroadcastAccountid = reader.uint32();
          break;
        case 7:
          message.watchingBroadcastChannelId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateChatRoomGroupRequest {
    return {
      steamidPartner: isSet(object.steamidPartner) ? Number(object.steamidPartner) : 0,
      steamidInvited: isSet(object.steamidInvited) ? Number(object.steamidInvited) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      steamidInvitees: Array.isArray(object?.steamidInvitees) ? object.steamidInvitees.map((e: any) => Number(e)) : [],
      watchingBroadcastAccountid: isSet(object.watchingBroadcastAccountid)
        ? Number(object.watchingBroadcastAccountid)
        : 0,
      watchingBroadcastChannelId: isSet(object.watchingBroadcastChannelId)
        ? Number(object.watchingBroadcastChannelId)
        : 0,
    };
  },

  toJSON(message: CChatRoomCreateChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.steamidPartner !== undefined && (obj.steamidPartner = Math.round(message.steamidPartner));
    message.steamidInvited !== undefined && (obj.steamidInvited = Math.round(message.steamidInvited));
    message.name !== undefined && (obj.name = message.name);
    if (message.steamidInvitees) {
      obj.steamidInvitees = message.steamidInvitees.map((e) => Math.round(e));
    } else {
      obj.steamidInvitees = [];
    }
    message.watchingBroadcastAccountid !== undefined &&
      (obj.watchingBroadcastAccountid = Math.round(message.watchingBroadcastAccountid));
    message.watchingBroadcastChannelId !== undefined &&
      (obj.watchingBroadcastChannelId = Math.round(message.watchingBroadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomCreateChatRoomGroupRequest {
    return CChatRoomCreateChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomCreateChatRoomGroupRequest {
    const message = createBaseCChatRoomCreateChatRoomGroupRequest();
    message.steamidPartner = object.steamidPartner ?? 0;
    message.steamidInvited = object.steamidInvited ?? 0;
    message.name = object.name ?? "";
    message.steamidInvitees = object.steamidInvitees?.map((e) => e) || [];
    message.watchingBroadcastAccountid = object.watchingBroadcastAccountid ?? 0;
    message.watchingBroadcastChannelId = object.watchingBroadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCChatRole(): CChatRole {
  return { roleId: 0, name: "", ordinal: 0 };
}

export const CChatRole = {
  encode(message: CChatRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== 0) {
      writer.uint32(8).uint64(message.roleId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRole {
    return {
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
    };
  },

  toJSON(message: CChatRole): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.name !== undefined && (obj.name = message.name);
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRole>, I>>(base?: I): CChatRole {
    return CChatRole.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRole>, I>>(object: I): CChatRole {
    const message = createBaseCChatRole();
    message.roleId = object.roleId ?? 0;
    message.name = object.name ?? "";
    message.ordinal = object.ordinal ?? 0;
    return message;
  },
};

function createBaseCChatRoleActions(): CChatRoleActions {
  return {
    roleId: 0,
    canCreateRenameDeleteChannel: false,
    canKick: false,
    canBan: false,
    canInvite: false,
    canChangeTaglineAvatarName: false,
    canChat: false,
    canViewHistory: false,
    canChangeGroupRoles: false,
    canChangeUserRoles: false,
    canMentionAll: false,
    canSetWatchingBroadcast: false,
  };
}

export const CChatRoleActions = {
  encode(message: CChatRoleActions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleId !== 0) {
      writer.uint32(8).uint64(message.roleId);
    }
    if (message.canCreateRenameDeleteChannel === true) {
      writer.uint32(16).bool(message.canCreateRenameDeleteChannel);
    }
    if (message.canKick === true) {
      writer.uint32(24).bool(message.canKick);
    }
    if (message.canBan === true) {
      writer.uint32(32).bool(message.canBan);
    }
    if (message.canInvite === true) {
      writer.uint32(40).bool(message.canInvite);
    }
    if (message.canChangeTaglineAvatarName === true) {
      writer.uint32(48).bool(message.canChangeTaglineAvatarName);
    }
    if (message.canChat === true) {
      writer.uint32(56).bool(message.canChat);
    }
    if (message.canViewHistory === true) {
      writer.uint32(64).bool(message.canViewHistory);
    }
    if (message.canChangeGroupRoles === true) {
      writer.uint32(72).bool(message.canChangeGroupRoles);
    }
    if (message.canChangeUserRoles === true) {
      writer.uint32(80).bool(message.canChangeUserRoles);
    }
    if (message.canMentionAll === true) {
      writer.uint32(88).bool(message.canMentionAll);
    }
    if (message.canSetWatchingBroadcast === true) {
      writer.uint32(96).bool(message.canSetWatchingBroadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoleActions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoleActions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.canCreateRenameDeleteChannel = reader.bool();
          break;
        case 3:
          message.canKick = reader.bool();
          break;
        case 4:
          message.canBan = reader.bool();
          break;
        case 5:
          message.canInvite = reader.bool();
          break;
        case 6:
          message.canChangeTaglineAvatarName = reader.bool();
          break;
        case 7:
          message.canChat = reader.bool();
          break;
        case 8:
          message.canViewHistory = reader.bool();
          break;
        case 9:
          message.canChangeGroupRoles = reader.bool();
          break;
        case 10:
          message.canChangeUserRoles = reader.bool();
          break;
        case 11:
          message.canMentionAll = reader.bool();
          break;
        case 12:
          message.canSetWatchingBroadcast = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoleActions {
    return {
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      canCreateRenameDeleteChannel: isSet(object.canCreateRenameDeleteChannel)
        ? Boolean(object.canCreateRenameDeleteChannel)
        : false,
      canKick: isSet(object.canKick) ? Boolean(object.canKick) : false,
      canBan: isSet(object.canBan) ? Boolean(object.canBan) : false,
      canInvite: isSet(object.canInvite) ? Boolean(object.canInvite) : false,
      canChangeTaglineAvatarName: isSet(object.canChangeTaglineAvatarName)
        ? Boolean(object.canChangeTaglineAvatarName)
        : false,
      canChat: isSet(object.canChat) ? Boolean(object.canChat) : false,
      canViewHistory: isSet(object.canViewHistory) ? Boolean(object.canViewHistory) : false,
      canChangeGroupRoles: isSet(object.canChangeGroupRoles) ? Boolean(object.canChangeGroupRoles) : false,
      canChangeUserRoles: isSet(object.canChangeUserRoles) ? Boolean(object.canChangeUserRoles) : false,
      canMentionAll: isSet(object.canMentionAll) ? Boolean(object.canMentionAll) : false,
      canSetWatchingBroadcast: isSet(object.canSetWatchingBroadcast) ? Boolean(object.canSetWatchingBroadcast) : false,
    };
  },

  toJSON(message: CChatRoleActions): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.canCreateRenameDeleteChannel !== undefined &&
      (obj.canCreateRenameDeleteChannel = message.canCreateRenameDeleteChannel);
    message.canKick !== undefined && (obj.canKick = message.canKick);
    message.canBan !== undefined && (obj.canBan = message.canBan);
    message.canInvite !== undefined && (obj.canInvite = message.canInvite);
    message.canChangeTaglineAvatarName !== undefined &&
      (obj.canChangeTaglineAvatarName = message.canChangeTaglineAvatarName);
    message.canChat !== undefined && (obj.canChat = message.canChat);
    message.canViewHistory !== undefined && (obj.canViewHistory = message.canViewHistory);
    message.canChangeGroupRoles !== undefined && (obj.canChangeGroupRoles = message.canChangeGroupRoles);
    message.canChangeUserRoles !== undefined && (obj.canChangeUserRoles = message.canChangeUserRoles);
    message.canMentionAll !== undefined && (obj.canMentionAll = message.canMentionAll);
    message.canSetWatchingBroadcast !== undefined && (obj.canSetWatchingBroadcast = message.canSetWatchingBroadcast);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoleActions>, I>>(base?: I): CChatRoleActions {
    return CChatRoleActions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoleActions>, I>>(object: I): CChatRoleActions {
    const message = createBaseCChatRoleActions();
    message.roleId = object.roleId ?? 0;
    message.canCreateRenameDeleteChannel = object.canCreateRenameDeleteChannel ?? false;
    message.canKick = object.canKick ?? false;
    message.canBan = object.canBan ?? false;
    message.canInvite = object.canInvite ?? false;
    message.canChangeTaglineAvatarName = object.canChangeTaglineAvatarName ?? false;
    message.canChat = object.canChat ?? false;
    message.canViewHistory = object.canViewHistory ?? false;
    message.canChangeGroupRoles = object.canChangeGroupRoles ?? false;
    message.canChangeUserRoles = object.canChangeUserRoles ?? false;
    message.canMentionAll = object.canMentionAll ?? false;
    message.canSetWatchingBroadcast = object.canSetWatchingBroadcast ?? false;
    return message;
  },
};

function createBaseCChatPartyBeacon(): CChatPartyBeacon {
  return { appId: 0, steamidOwner: 0, beaconId: 0, gameMetadata: "" };
}

export const CChatPartyBeacon = {
  encode(message: CChatPartyBeacon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.steamidOwner !== 0) {
      writer.uint32(17).fixed64(message.steamidOwner);
    }
    if (message.beaconId !== 0) {
      writer.uint32(25).fixed64(message.beaconId);
    }
    if (message.gameMetadata !== "") {
      writer.uint32(34).string(message.gameMetadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatPartyBeacon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatPartyBeacon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.steamidOwner = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.beaconId = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.gameMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatPartyBeacon {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      steamidOwner: isSet(object.steamidOwner) ? Number(object.steamidOwner) : 0,
      beaconId: isSet(object.beaconId) ? Number(object.beaconId) : 0,
      gameMetadata: isSet(object.gameMetadata) ? String(object.gameMetadata) : "",
    };
  },

  toJSON(message: CChatPartyBeacon): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.steamidOwner !== undefined && (obj.steamidOwner = Math.round(message.steamidOwner));
    message.beaconId !== undefined && (obj.beaconId = Math.round(message.beaconId));
    message.gameMetadata !== undefined && (obj.gameMetadata = message.gameMetadata);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatPartyBeacon>, I>>(base?: I): CChatPartyBeacon {
    return CChatPartyBeacon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatPartyBeacon>, I>>(object: I): CChatPartyBeacon {
    const message = createBaseCChatPartyBeacon();
    message.appId = object.appId ?? 0;
    message.steamidOwner = object.steamidOwner ?? 0;
    message.beaconId = object.beaconId ?? 0;
    message.gameMetadata = object.gameMetadata ?? "";
    return message;
  },
};

function createBaseCChatRoomGroupHeaderState(): CChatRoomGroupHeaderState {
  return {
    chatGroupId: 0,
    chatName: "",
    clanid: 0,
    accountidOwner: 0,
    appid: 0,
    tagline: "",
    avatarSha: Buffer.alloc(0),
    defaultRoleId: 0,
    roles: [],
    roleActions: [],
    watchingBroadcastAccountid: 0,
    partyBeacons: [],
    watchingBroadcastChannelId: 0,
    activeMinigameId: 0,
    avatarUgcUrl: "",
    disabled: false,
  };
}

export const CChatRoomGroupHeaderState = {
  encode(message: CChatRoomGroupHeaderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatName !== "") {
      writer.uint32(18).string(message.chatName);
    }
    if (message.clanid !== 0) {
      writer.uint32(104).uint32(message.clanid);
    }
    if (message.accountidOwner !== 0) {
      writer.uint32(112).uint32(message.accountidOwner);
    }
    if (message.appid !== 0) {
      writer.uint32(168).uint32(message.appid);
    }
    if (message.tagline !== "") {
      writer.uint32(122).string(message.tagline);
    }
    if (message.avatarSha.length !== 0) {
      writer.uint32(130).bytes(message.avatarSha);
    }
    if (message.defaultRoleId !== 0) {
      writer.uint32(136).uint64(message.defaultRoleId);
    }
    for (const v of message.roles) {
      CChatRole.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.roleActions) {
      CChatRoleActions.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.watchingBroadcastAccountid !== 0) {
      writer.uint32(160).uint32(message.watchingBroadcastAccountid);
    }
    for (const v of message.partyBeacons) {
      CChatPartyBeacon.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.watchingBroadcastChannelId !== 0) {
      writer.uint32(184).uint64(message.watchingBroadcastChannelId);
    }
    if (message.activeMinigameId !== 0) {
      writer.uint32(192).uint64(message.activeMinigameId);
    }
    if (message.avatarUgcUrl !== "") {
      writer.uint32(202).string(message.avatarUgcUrl);
    }
    if (message.disabled === true) {
      writer.uint32(208).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGroupHeaderState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGroupHeaderState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatName = reader.string();
          break;
        case 13:
          message.clanid = reader.uint32();
          break;
        case 14:
          message.accountidOwner = reader.uint32();
          break;
        case 21:
          message.appid = reader.uint32();
          break;
        case 15:
          message.tagline = reader.string();
          break;
        case 16:
          message.avatarSha = reader.bytes() as Buffer;
          break;
        case 17:
          message.defaultRoleId = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.roles.push(CChatRole.decode(reader, reader.uint32()));
          break;
        case 19:
          message.roleActions.push(CChatRoleActions.decode(reader, reader.uint32()));
          break;
        case 20:
          message.watchingBroadcastAccountid = reader.uint32();
          break;
        case 22:
          message.partyBeacons.push(CChatPartyBeacon.decode(reader, reader.uint32()));
          break;
        case 23:
          message.watchingBroadcastChannelId = longToNumber(reader.uint64() as Long);
          break;
        case 24:
          message.activeMinigameId = longToNumber(reader.uint64() as Long);
          break;
        case 25:
          message.avatarUgcUrl = reader.string();
          break;
        case 26:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGroupHeaderState {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatName: isSet(object.chatName) ? String(object.chatName) : "",
      clanid: isSet(object.clanid) ? Number(object.clanid) : 0,
      accountidOwner: isSet(object.accountidOwner) ? Number(object.accountidOwner) : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      tagline: isSet(object.tagline) ? String(object.tagline) : "",
      avatarSha: isSet(object.avatarSha) ? Buffer.from(bytesFromBase64(object.avatarSha)) : Buffer.alloc(0),
      defaultRoleId: isSet(object.defaultRoleId) ? Number(object.defaultRoleId) : 0,
      roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => CChatRole.fromJSON(e)) : [],
      roleActions: Array.isArray(object?.roleActions)
        ? object.roleActions.map((e: any) => CChatRoleActions.fromJSON(e))
        : [],
      watchingBroadcastAccountid: isSet(object.watchingBroadcastAccountid)
        ? Number(object.watchingBroadcastAccountid)
        : 0,
      partyBeacons: Array.isArray(object?.partyBeacons)
        ? object.partyBeacons.map((e: any) => CChatPartyBeacon.fromJSON(e))
        : [],
      watchingBroadcastChannelId: isSet(object.watchingBroadcastChannelId)
        ? Number(object.watchingBroadcastChannelId)
        : 0,
      activeMinigameId: isSet(object.activeMinigameId) ? Number(object.activeMinigameId) : 0,
      avatarUgcUrl: isSet(object.avatarUgcUrl) ? String(object.avatarUgcUrl) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
    };
  },

  toJSON(message: CChatRoomGroupHeaderState): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatName !== undefined && (obj.chatName = message.chatName);
    message.clanid !== undefined && (obj.clanid = Math.round(message.clanid));
    message.accountidOwner !== undefined && (obj.accountidOwner = Math.round(message.accountidOwner));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.tagline !== undefined && (obj.tagline = message.tagline);
    message.avatarSha !== undefined &&
      (obj.avatarSha = base64FromBytes(message.avatarSha !== undefined ? message.avatarSha : Buffer.alloc(0)));
    message.defaultRoleId !== undefined && (obj.defaultRoleId = Math.round(message.defaultRoleId));
    if (message.roles) {
      obj.roles = message.roles.map((e) => e ? CChatRole.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    if (message.roleActions) {
      obj.roleActions = message.roleActions.map((e) => e ? CChatRoleActions.toJSON(e) : undefined);
    } else {
      obj.roleActions = [];
    }
    message.watchingBroadcastAccountid !== undefined &&
      (obj.watchingBroadcastAccountid = Math.round(message.watchingBroadcastAccountid));
    if (message.partyBeacons) {
      obj.partyBeacons = message.partyBeacons.map((e) => e ? CChatPartyBeacon.toJSON(e) : undefined);
    } else {
      obj.partyBeacons = [];
    }
    message.watchingBroadcastChannelId !== undefined &&
      (obj.watchingBroadcastChannelId = Math.round(message.watchingBroadcastChannelId));
    message.activeMinigameId !== undefined && (obj.activeMinigameId = Math.round(message.activeMinigameId));
    message.avatarUgcUrl !== undefined && (obj.avatarUgcUrl = message.avatarUgcUrl);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGroupHeaderState>, I>>(base?: I): CChatRoomGroupHeaderState {
    return CChatRoomGroupHeaderState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGroupHeaderState>, I>>(object: I): CChatRoomGroupHeaderState {
    const message = createBaseCChatRoomGroupHeaderState();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatName = object.chatName ?? "";
    message.clanid = object.clanid ?? 0;
    message.accountidOwner = object.accountidOwner ?? 0;
    message.appid = object.appid ?? 0;
    message.tagline = object.tagline ?? "";
    message.avatarSha = object.avatarSha ?? Buffer.alloc(0);
    message.defaultRoleId = object.defaultRoleId ?? 0;
    message.roles = object.roles?.map((e) => CChatRole.fromPartial(e)) || [];
    message.roleActions = object.roleActions?.map((e) => CChatRoleActions.fromPartial(e)) || [];
    message.watchingBroadcastAccountid = object.watchingBroadcastAccountid ?? 0;
    message.partyBeacons = object.partyBeacons?.map((e) => CChatPartyBeacon.fromPartial(e)) || [];
    message.watchingBroadcastChannelId = object.watchingBroadcastChannelId ?? 0;
    message.activeMinigameId = object.activeMinigameId ?? 0;
    message.avatarUgcUrl = object.avatarUgcUrl ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

function createBaseCChatRoomMember(): CChatRoomMember {
  return { accountid: 0, state: 0, rank: 0, timeKickExpire: 0, roleIds: [] };
}

export const CChatRoomMember = {
  encode(message: CChatRoomMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.rank !== 0) {
      writer.uint32(32).int32(message.rank);
    }
    if (message.timeKickExpire !== 0) {
      writer.uint32(48).uint32(message.timeKickExpire);
    }
    writer.uint32(58).fork();
    for (const v of message.roleIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.rank = reader.int32() as any;
          break;
        case 6:
          message.timeKickExpire = reader.uint32();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.roleIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMember {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      state: isSet(object.state) ? eChatRoomJoinStateFromJSON(object.state) : 0,
      rank: isSet(object.rank) ? eChatRoomGroupRankFromJSON(object.rank) : 0,
      timeKickExpire: isSet(object.timeKickExpire) ? Number(object.timeKickExpire) : 0,
      roleIds: Array.isArray(object?.roleIds) ? object.roleIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CChatRoomMember): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.state !== undefined && (obj.state = eChatRoomJoinStateToJSON(message.state));
    message.rank !== undefined && (obj.rank = eChatRoomGroupRankToJSON(message.rank));
    message.timeKickExpire !== undefined && (obj.timeKickExpire = Math.round(message.timeKickExpire));
    if (message.roleIds) {
      obj.roleIds = message.roleIds.map((e) => Math.round(e));
    } else {
      obj.roleIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMember>, I>>(base?: I): CChatRoomMember {
    return CChatRoomMember.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMember>, I>>(object: I): CChatRoomMember {
    const message = createBaseCChatRoomMember();
    message.accountid = object.accountid ?? 0;
    message.state = object.state ?? 0;
    message.rank = object.rank ?? 0;
    message.timeKickExpire = object.timeKickExpire ?? 0;
    message.roleIds = object.roleIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomState(): CChatRoomState {
  return {
    chatId: 0,
    chatName: "",
    voiceAllowed: false,
    membersInVoice: [],
    timeLastMessage: 0,
    sortOrder: 0,
    lastMessage: "",
    accountidLastMessage: 0,
  };
}

export const CChatRoomState = {
  encode(message: CChatRoomState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== 0) {
      writer.uint32(8).uint64(message.chatId);
    }
    if (message.chatName !== "") {
      writer.uint32(18).string(message.chatName);
    }
    if (message.voiceAllowed === true) {
      writer.uint32(24).bool(message.voiceAllowed);
    }
    writer.uint32(34).fork();
    for (const v of message.membersInVoice) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.timeLastMessage !== 0) {
      writer.uint32(40).uint32(message.timeLastMessage);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(48).uint32(message.sortOrder);
    }
    if (message.lastMessage !== "") {
      writer.uint32(58).string(message.lastMessage);
    }
    if (message.accountidLastMessage !== 0) {
      writer.uint32(64).uint32(message.accountidLastMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatName = reader.string();
          break;
        case 3:
          message.voiceAllowed = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.membersInVoice.push(reader.uint32());
            }
          } else {
            message.membersInVoice.push(reader.uint32());
          }
          break;
        case 5:
          message.timeLastMessage = reader.uint32();
          break;
        case 6:
          message.sortOrder = reader.uint32();
          break;
        case 7:
          message.lastMessage = reader.string();
          break;
        case 8:
          message.accountidLastMessage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomState {
    return {
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      chatName: isSet(object.chatName) ? String(object.chatName) : "",
      voiceAllowed: isSet(object.voiceAllowed) ? Boolean(object.voiceAllowed) : false,
      membersInVoice: Array.isArray(object?.membersInVoice) ? object.membersInVoice.map((e: any) => Number(e)) : [],
      timeLastMessage: isSet(object.timeLastMessage) ? Number(object.timeLastMessage) : 0,
      sortOrder: isSet(object.sortOrder) ? Number(object.sortOrder) : 0,
      lastMessage: isSet(object.lastMessage) ? String(object.lastMessage) : "",
      accountidLastMessage: isSet(object.accountidLastMessage) ? Number(object.accountidLastMessage) : 0,
    };
  },

  toJSON(message: CChatRoomState): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.chatName !== undefined && (obj.chatName = message.chatName);
    message.voiceAllowed !== undefined && (obj.voiceAllowed = message.voiceAllowed);
    if (message.membersInVoice) {
      obj.membersInVoice = message.membersInVoice.map((e) => Math.round(e));
    } else {
      obj.membersInVoice = [];
    }
    message.timeLastMessage !== undefined && (obj.timeLastMessage = Math.round(message.timeLastMessage));
    message.sortOrder !== undefined && (obj.sortOrder = Math.round(message.sortOrder));
    message.lastMessage !== undefined && (obj.lastMessage = message.lastMessage);
    message.accountidLastMessage !== undefined && (obj.accountidLastMessage = Math.round(message.accountidLastMessage));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomState>, I>>(base?: I): CChatRoomState {
    return CChatRoomState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomState>, I>>(object: I): CChatRoomState {
    const message = createBaseCChatRoomState();
    message.chatId = object.chatId ?? 0;
    message.chatName = object.chatName ?? "";
    message.voiceAllowed = object.voiceAllowed ?? false;
    message.membersInVoice = object.membersInVoice?.map((e) => e) || [];
    message.timeLastMessage = object.timeLastMessage ?? 0;
    message.sortOrder = object.sortOrder ?? 0;
    message.lastMessage = object.lastMessage ?? "";
    message.accountidLastMessage = object.accountidLastMessage ?? 0;
    return message;
  },
};

function createBaseCChatRoomGroupState(): CChatRoomGroupState {
  return { headerState: undefined, members: [], defaultChatId: 0, chatRooms: [], kicked: [] };
}

export const CChatRoomGroupState = {
  encode(message: CChatRoomGroupState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerState !== undefined) {
      CChatRoomGroupHeaderState.encode(message.headerState, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.members) {
      CChatRoomMember.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultChatId !== 0) {
      writer.uint32(32).uint64(message.defaultChatId);
    }
    for (const v of message.chatRooms) {
      CChatRoomState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.kicked) {
      CChatRoomMember.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGroupState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGroupState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.headerState = CChatRoomGroupHeaderState.decode(reader, reader.uint32());
          break;
        case 2:
          message.members.push(CChatRoomMember.decode(reader, reader.uint32()));
          break;
        case 4:
          message.defaultChatId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.chatRooms.push(CChatRoomState.decode(reader, reader.uint32()));
          break;
        case 7:
          message.kicked.push(CChatRoomMember.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGroupState {
    return {
      headerState: isSet(object.headerState) ? CChatRoomGroupHeaderState.fromJSON(object.headerState) : undefined,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => CChatRoomMember.fromJSON(e)) : [],
      defaultChatId: isSet(object.defaultChatId) ? Number(object.defaultChatId) : 0,
      chatRooms: Array.isArray(object?.chatRooms) ? object.chatRooms.map((e: any) => CChatRoomState.fromJSON(e)) : [],
      kicked: Array.isArray(object?.kicked) ? object.kicked.map((e: any) => CChatRoomMember.fromJSON(e)) : [],
    };
  },

  toJSON(message: CChatRoomGroupState): unknown {
    const obj: any = {};
    message.headerState !== undefined &&
      (obj.headerState = message.headerState ? CChatRoomGroupHeaderState.toJSON(message.headerState) : undefined);
    if (message.members) {
      obj.members = message.members.map((e) => e ? CChatRoomMember.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.defaultChatId !== undefined && (obj.defaultChatId = Math.round(message.defaultChatId));
    if (message.chatRooms) {
      obj.chatRooms = message.chatRooms.map((e) => e ? CChatRoomState.toJSON(e) : undefined);
    } else {
      obj.chatRooms = [];
    }
    if (message.kicked) {
      obj.kicked = message.kicked.map((e) => e ? CChatRoomMember.toJSON(e) : undefined);
    } else {
      obj.kicked = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGroupState>, I>>(base?: I): CChatRoomGroupState {
    return CChatRoomGroupState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGroupState>, I>>(object: I): CChatRoomGroupState {
    const message = createBaseCChatRoomGroupState();
    message.headerState = (object.headerState !== undefined && object.headerState !== null)
      ? CChatRoomGroupHeaderState.fromPartial(object.headerState)
      : undefined;
    message.members = object.members?.map((e) => CChatRoomMember.fromPartial(e)) || [];
    message.defaultChatId = object.defaultChatId ?? 0;
    message.chatRooms = object.chatRooms?.map((e) => CChatRoomState.fromPartial(e)) || [];
    message.kicked = object.kicked?.map((e) => CChatRoomMember.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCUserChatRoomState(): CUserChatRoomState {
  return {
    chatId: 0,
    timeJoined: 0,
    timeLastAck: 0,
    desktopNotificationLevel: 0,
    mobileNotificationLevel: 0,
    timeLastMention: 0,
    unreadIndicatorMuted: false,
    timeFirstUnread: 0,
  };
}

export const CUserChatRoomState = {
  encode(message: CUserChatRoomState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatId !== 0) {
      writer.uint32(8).uint64(message.chatId);
    }
    if (message.timeJoined !== 0) {
      writer.uint32(16).uint32(message.timeJoined);
    }
    if (message.timeLastAck !== 0) {
      writer.uint32(24).uint32(message.timeLastAck);
    }
    if (message.desktopNotificationLevel !== 0) {
      writer.uint32(32).int32(message.desktopNotificationLevel);
    }
    if (message.mobileNotificationLevel !== 0) {
      writer.uint32(40).int32(message.mobileNotificationLevel);
    }
    if (message.timeLastMention !== 0) {
      writer.uint32(48).uint32(message.timeLastMention);
    }
    if (message.unreadIndicatorMuted === true) {
      writer.uint32(56).bool(message.unreadIndicatorMuted);
    }
    if (message.timeFirstUnread !== 0) {
      writer.uint32(64).uint32(message.timeFirstUnread);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserChatRoomState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserChatRoomState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.timeJoined = reader.uint32();
          break;
        case 3:
          message.timeLastAck = reader.uint32();
          break;
        case 4:
          message.desktopNotificationLevel = reader.int32() as any;
          break;
        case 5:
          message.mobileNotificationLevel = reader.int32() as any;
          break;
        case 6:
          message.timeLastMention = reader.uint32();
          break;
        case 7:
          message.unreadIndicatorMuted = reader.bool();
          break;
        case 8:
          message.timeFirstUnread = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserChatRoomState {
    return {
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      timeJoined: isSet(object.timeJoined) ? Number(object.timeJoined) : 0,
      timeLastAck: isSet(object.timeLastAck) ? Number(object.timeLastAck) : 0,
      desktopNotificationLevel: isSet(object.desktopNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.desktopNotificationLevel)
        : 0,
      mobileNotificationLevel: isSet(object.mobileNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.mobileNotificationLevel)
        : 0,
      timeLastMention: isSet(object.timeLastMention) ? Number(object.timeLastMention) : 0,
      unreadIndicatorMuted: isSet(object.unreadIndicatorMuted) ? Boolean(object.unreadIndicatorMuted) : false,
      timeFirstUnread: isSet(object.timeFirstUnread) ? Number(object.timeFirstUnread) : 0,
    };
  },

  toJSON(message: CUserChatRoomState): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.timeJoined !== undefined && (obj.timeJoined = Math.round(message.timeJoined));
    message.timeLastAck !== undefined && (obj.timeLastAck = Math.round(message.timeLastAck));
    message.desktopNotificationLevel !== undefined &&
      (obj.desktopNotificationLevel = eChatRoomNotificationLevelToJSON(message.desktopNotificationLevel));
    message.mobileNotificationLevel !== undefined &&
      (obj.mobileNotificationLevel = eChatRoomNotificationLevelToJSON(message.mobileNotificationLevel));
    message.timeLastMention !== undefined && (obj.timeLastMention = Math.round(message.timeLastMention));
    message.unreadIndicatorMuted !== undefined && (obj.unreadIndicatorMuted = message.unreadIndicatorMuted);
    message.timeFirstUnread !== undefined && (obj.timeFirstUnread = Math.round(message.timeFirstUnread));
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserChatRoomState>, I>>(base?: I): CUserChatRoomState {
    return CUserChatRoomState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserChatRoomState>, I>>(object: I): CUserChatRoomState {
    const message = createBaseCUserChatRoomState();
    message.chatId = object.chatId ?? 0;
    message.timeJoined = object.timeJoined ?? 0;
    message.timeLastAck = object.timeLastAck ?? 0;
    message.desktopNotificationLevel = object.desktopNotificationLevel ?? 0;
    message.mobileNotificationLevel = object.mobileNotificationLevel ?? 0;
    message.timeLastMention = object.timeLastMention ?? 0;
    message.unreadIndicatorMuted = object.unreadIndicatorMuted ?? false;
    message.timeFirstUnread = object.timeFirstUnread ?? 0;
    return message;
  },
};

function createBaseCUserChatRoomGroupState(): CUserChatRoomGroupState {
  return {
    chatGroupId: 0,
    timeJoined: 0,
    userChatRoomState: [],
    desktopNotificationLevel: 0,
    mobileNotificationLevel: 0,
    timeLastGroupAck: 0,
    unreadIndicatorMuted: false,
  };
}

export const CUserChatRoomGroupState = {
  encode(message: CUserChatRoomGroupState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.timeJoined !== 0) {
      writer.uint32(16).uint32(message.timeJoined);
    }
    for (const v of message.userChatRoomState) {
      CUserChatRoomState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.desktopNotificationLevel !== 0) {
      writer.uint32(32).int32(message.desktopNotificationLevel);
    }
    if (message.mobileNotificationLevel !== 0) {
      writer.uint32(40).int32(message.mobileNotificationLevel);
    }
    if (message.timeLastGroupAck !== 0) {
      writer.uint32(48).uint32(message.timeLastGroupAck);
    }
    if (message.unreadIndicatorMuted === true) {
      writer.uint32(56).bool(message.unreadIndicatorMuted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CUserChatRoomGroupState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCUserChatRoomGroupState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.timeJoined = reader.uint32();
          break;
        case 3:
          message.userChatRoomState.push(CUserChatRoomState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.desktopNotificationLevel = reader.int32() as any;
          break;
        case 5:
          message.mobileNotificationLevel = reader.int32() as any;
          break;
        case 6:
          message.timeLastGroupAck = reader.uint32();
          break;
        case 7:
          message.unreadIndicatorMuted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CUserChatRoomGroupState {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      timeJoined: isSet(object.timeJoined) ? Number(object.timeJoined) : 0,
      userChatRoomState: Array.isArray(object?.userChatRoomState)
        ? object.userChatRoomState.map((e: any) => CUserChatRoomState.fromJSON(e))
        : [],
      desktopNotificationLevel: isSet(object.desktopNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.desktopNotificationLevel)
        : 0,
      mobileNotificationLevel: isSet(object.mobileNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.mobileNotificationLevel)
        : 0,
      timeLastGroupAck: isSet(object.timeLastGroupAck) ? Number(object.timeLastGroupAck) : 0,
      unreadIndicatorMuted: isSet(object.unreadIndicatorMuted) ? Boolean(object.unreadIndicatorMuted) : false,
    };
  },

  toJSON(message: CUserChatRoomGroupState): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.timeJoined !== undefined && (obj.timeJoined = Math.round(message.timeJoined));
    if (message.userChatRoomState) {
      obj.userChatRoomState = message.userChatRoomState.map((e) => e ? CUserChatRoomState.toJSON(e) : undefined);
    } else {
      obj.userChatRoomState = [];
    }
    message.desktopNotificationLevel !== undefined &&
      (obj.desktopNotificationLevel = eChatRoomNotificationLevelToJSON(message.desktopNotificationLevel));
    message.mobileNotificationLevel !== undefined &&
      (obj.mobileNotificationLevel = eChatRoomNotificationLevelToJSON(message.mobileNotificationLevel));
    message.timeLastGroupAck !== undefined && (obj.timeLastGroupAck = Math.round(message.timeLastGroupAck));
    message.unreadIndicatorMuted !== undefined && (obj.unreadIndicatorMuted = message.unreadIndicatorMuted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CUserChatRoomGroupState>, I>>(base?: I): CUserChatRoomGroupState {
    return CUserChatRoomGroupState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CUserChatRoomGroupState>, I>>(object: I): CUserChatRoomGroupState {
    const message = createBaseCUserChatRoomGroupState();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.timeJoined = object.timeJoined ?? 0;
    message.userChatRoomState = object.userChatRoomState?.map((e) => CUserChatRoomState.fromPartial(e)) || [];
    message.desktopNotificationLevel = object.desktopNotificationLevel ?? 0;
    message.mobileNotificationLevel = object.mobileNotificationLevel ?? 0;
    message.timeLastGroupAck = object.timeLastGroupAck ?? 0;
    message.unreadIndicatorMuted = object.unreadIndicatorMuted ?? false;
    return message;
  },
};

function createBaseCChatRoomCreateChatRoomGroupResponse(): CChatRoomCreateChatRoomGroupResponse {
  return { chatGroupId: 0, state: undefined, userChatState: undefined };
}

export const CChatRoomCreateChatRoomGroupResponse = {
  encode(message: CChatRoomCreateChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.state !== undefined) {
      CChatRoomGroupState.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    if (message.userChatState !== undefined) {
      CUserChatRoomGroupState.encode(message.userChatState, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateChatRoomGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.state = CChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 3:
          message.userChatState = CUserChatRoomGroupState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateChatRoomGroupResponse {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      state: isSet(object.state) ? CChatRoomGroupState.fromJSON(object.state) : undefined,
      userChatState: isSet(object.userChatState) ? CUserChatRoomGroupState.fromJSON(object.userChatState) : undefined,
    };
  },

  toJSON(message: CChatRoomCreateChatRoomGroupResponse): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.state !== undefined && (obj.state = message.state ? CChatRoomGroupState.toJSON(message.state) : undefined);
    message.userChatState !== undefined &&
      (obj.userChatState = message.userChatState ? CUserChatRoomGroupState.toJSON(message.userChatState) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomCreateChatRoomGroupResponse {
    return CChatRoomCreateChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateChatRoomGroupResponse>, I>>(
    object: I,
  ): CChatRoomCreateChatRoomGroupResponse {
    const message = createBaseCChatRoomCreateChatRoomGroupResponse();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.state = (object.state !== undefined && object.state !== null)
      ? CChatRoomGroupState.fromPartial(object.state)
      : undefined;
    message.userChatState = (object.userChatState !== undefined && object.userChatState !== null)
      ? CUserChatRoomGroupState.fromPartial(object.userChatState)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomSaveChatRoomGroupRequest(): CChatRoomSaveChatRoomGroupRequest {
  return { chatGroupId: 0, name: "" };
}

export const CChatRoomSaveChatRoomGroupRequest = {
  encode(message: CChatRoomSaveChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSaveChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSaveChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): CChatRoomSaveChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CChatRoomSaveChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSaveChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomSaveChatRoomGroupRequest {
    return CChatRoomSaveChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSaveChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomSaveChatRoomGroupRequest {
    const message = createBaseCChatRoomSaveChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomSaveChatRoomGroupResponse(): CChatRoomSaveChatRoomGroupResponse {
  return {};
}

export const CChatRoomSaveChatRoomGroupResponse = {
  encode(_: CChatRoomSaveChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSaveChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSaveChatRoomGroupResponse();
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

  fromJSON(_: any): CChatRoomSaveChatRoomGroupResponse {
    return {};
  },

  toJSON(_: CChatRoomSaveChatRoomGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSaveChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomSaveChatRoomGroupResponse {
    return CChatRoomSaveChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSaveChatRoomGroupResponse>, I>>(
    _: I,
  ): CChatRoomSaveChatRoomGroupResponse {
    const message = createBaseCChatRoomSaveChatRoomGroupResponse();
    return message;
  },
};

function createBaseCChatRoomRenameChatRoomGroupRequest(): CChatRoomRenameChatRoomGroupRequest {
  return { chatGroupId: 0, name: "" };
}

export const CChatRoomRenameChatRoomGroupRequest = {
  encode(message: CChatRoomRenameChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): CChatRoomRenameChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CChatRoomRenameChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomRenameChatRoomGroupRequest {
    return CChatRoomRenameChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomRenameChatRoomGroupRequest {
    const message = createBaseCChatRoomRenameChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomRenameChatRoomGroupResponse(): CChatRoomRenameChatRoomGroupResponse {
  return { name: "" };
}

export const CChatRoomRenameChatRoomGroupResponse = {
  encode(message: CChatRoomRenameChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameChatRoomGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomRenameChatRoomGroupResponse {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: CChatRoomRenameChatRoomGroupResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomRenameChatRoomGroupResponse {
    return CChatRoomRenameChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameChatRoomGroupResponse>, I>>(
    object: I,
  ): CChatRoomRenameChatRoomGroupResponse {
    const message = createBaseCChatRoomRenameChatRoomGroupResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupTaglineRequest(): CChatRoomSetChatRoomGroupTaglineRequest {
  return { chatGroupId: 0, tagline: "" };
}

export const CChatRoomSetChatRoomGroupTaglineRequest = {
  encode(message: CChatRoomSetChatRoomGroupTaglineRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.tagline !== "") {
      writer.uint32(18).string(message.tagline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupTaglineRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupTaglineRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tagline = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetChatRoomGroupTaglineRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      tagline: isSet(object.tagline) ? String(object.tagline) : "",
    };
  },

  toJSON(message: CChatRoomSetChatRoomGroupTaglineRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.tagline !== undefined && (obj.tagline = message.tagline);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupTaglineRequest>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupTaglineRequest {
    return CChatRoomSetChatRoomGroupTaglineRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupTaglineRequest>, I>>(
    object: I,
  ): CChatRoomSetChatRoomGroupTaglineRequest {
    const message = createBaseCChatRoomSetChatRoomGroupTaglineRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.tagline = object.tagline ?? "";
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupTaglineResponse(): CChatRoomSetChatRoomGroupTaglineResponse {
  return {};
}

export const CChatRoomSetChatRoomGroupTaglineResponse = {
  encode(_: CChatRoomSetChatRoomGroupTaglineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupTaglineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupTaglineResponse();
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

  fromJSON(_: any): CChatRoomSetChatRoomGroupTaglineResponse {
    return {};
  },

  toJSON(_: CChatRoomSetChatRoomGroupTaglineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupTaglineResponse>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupTaglineResponse {
    return CChatRoomSetChatRoomGroupTaglineResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupTaglineResponse>, I>>(
    _: I,
  ): CChatRoomSetChatRoomGroupTaglineResponse {
    const message = createBaseCChatRoomSetChatRoomGroupTaglineResponse();
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupAvatarRequest(): CChatRoomSetChatRoomGroupAvatarRequest {
  return { chatGroupId: 0, avatarSha: Buffer.alloc(0) };
}

export const CChatRoomSetChatRoomGroupAvatarRequest = {
  encode(message: CChatRoomSetChatRoomGroupAvatarRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.avatarSha.length !== 0) {
      writer.uint32(18).bytes(message.avatarSha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupAvatarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupAvatarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.avatarSha = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetChatRoomGroupAvatarRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      avatarSha: isSet(object.avatarSha) ? Buffer.from(bytesFromBase64(object.avatarSha)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CChatRoomSetChatRoomGroupAvatarRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.avatarSha !== undefined &&
      (obj.avatarSha = base64FromBytes(message.avatarSha !== undefined ? message.avatarSha : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupAvatarRequest>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupAvatarRequest {
    return CChatRoomSetChatRoomGroupAvatarRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupAvatarRequest>, I>>(
    object: I,
  ): CChatRoomSetChatRoomGroupAvatarRequest {
    const message = createBaseCChatRoomSetChatRoomGroupAvatarRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.avatarSha = object.avatarSha ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupAvatarResponse(): CChatRoomSetChatRoomGroupAvatarResponse {
  return {};
}

export const CChatRoomSetChatRoomGroupAvatarResponse = {
  encode(_: CChatRoomSetChatRoomGroupAvatarResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupAvatarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupAvatarResponse();
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

  fromJSON(_: any): CChatRoomSetChatRoomGroupAvatarResponse {
    return {};
  },

  toJSON(_: CChatRoomSetChatRoomGroupAvatarResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupAvatarResponse>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupAvatarResponse {
    return CChatRoomSetChatRoomGroupAvatarResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupAvatarResponse>, I>>(
    _: I,
  ): CChatRoomSetChatRoomGroupAvatarResponse {
    const message = createBaseCChatRoomSetChatRoomGroupAvatarResponse();
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupWatchingBroadcastRequest(): CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
  return { chatGroupId: 0, watchingBroadcastAccountid: 0, watchingBroadcastChannelId: 0 };
}

export const CChatRoomSetChatRoomGroupWatchingBroadcastRequest = {
  encode(
    message: CChatRoomSetChatRoomGroupWatchingBroadcastRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.watchingBroadcastAccountid !== 0) {
      writer.uint32(16).uint32(message.watchingBroadcastAccountid);
    }
    if (message.watchingBroadcastChannelId !== 0) {
      writer.uint32(24).uint64(message.watchingBroadcastChannelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupWatchingBroadcastRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.watchingBroadcastAccountid = reader.uint32();
          break;
        case 3:
          message.watchingBroadcastChannelId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      watchingBroadcastAccountid: isSet(object.watchingBroadcastAccountid)
        ? Number(object.watchingBroadcastAccountid)
        : 0,
      watchingBroadcastChannelId: isSet(object.watchingBroadcastChannelId)
        ? Number(object.watchingBroadcastChannelId)
        : 0,
    };
  },

  toJSON(message: CChatRoomSetChatRoomGroupWatchingBroadcastRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.watchingBroadcastAccountid !== undefined &&
      (obj.watchingBroadcastAccountid = Math.round(message.watchingBroadcastAccountid));
    message.watchingBroadcastChannelId !== undefined &&
      (obj.watchingBroadcastChannelId = Math.round(message.watchingBroadcastChannelId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupWatchingBroadcastRequest>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
    return CChatRoomSetChatRoomGroupWatchingBroadcastRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupWatchingBroadcastRequest>, I>>(
    object: I,
  ): CChatRoomSetChatRoomGroupWatchingBroadcastRequest {
    const message = createBaseCChatRoomSetChatRoomGroupWatchingBroadcastRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.watchingBroadcastAccountid = object.watchingBroadcastAccountid ?? 0;
    message.watchingBroadcastChannelId = object.watchingBroadcastChannelId ?? 0;
    return message;
  },
};

function createBaseCChatRoomSetChatRoomGroupWatchingBroadcastResponse(): CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
  return {};
}

export const CChatRoomSetChatRoomGroupWatchingBroadcastResponse = {
  encode(_: CChatRoomSetChatRoomGroupWatchingBroadcastResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetChatRoomGroupWatchingBroadcastResponse();
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

  fromJSON(_: any): CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
    return {};
  },

  toJSON(_: CChatRoomSetChatRoomGroupWatchingBroadcastResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupWatchingBroadcastResponse>, I>>(
    base?: I,
  ): CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
    return CChatRoomSetChatRoomGroupWatchingBroadcastResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetChatRoomGroupWatchingBroadcastResponse>, I>>(
    _: I,
  ): CChatRoomSetChatRoomGroupWatchingBroadcastResponse {
    const message = createBaseCChatRoomSetChatRoomGroupWatchingBroadcastResponse();
    return message;
  },
};

function createBaseCChatRoomJoinMiniGameForChatRoomGroupRequest(): CChatRoomJoinMiniGameForChatRoomGroupRequest {
  return { chatGroupId: 0, chatId: 0 };
}

export const CChatRoomJoinMiniGameForChatRoomGroupRequest = {
  encode(message: CChatRoomJoinMiniGameForChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinMiniGameForChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinMiniGameForChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinMiniGameForChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomJoinMiniGameForChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinMiniGameForChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomJoinMiniGameForChatRoomGroupRequest {
    return CChatRoomJoinMiniGameForChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinMiniGameForChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomJoinMiniGameForChatRoomGroupRequest {
    const message = createBaseCChatRoomJoinMiniGameForChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomJoinMiniGameForChatRoomGroupResponse(): CChatRoomJoinMiniGameForChatRoomGroupResponse {
  return { minigameId: 0 };
}

export const CChatRoomJoinMiniGameForChatRoomGroupResponse = {
  encode(message: CChatRoomJoinMiniGameForChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minigameId !== 0) {
      writer.uint32(8).uint64(message.minigameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinMiniGameForChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinMiniGameForChatRoomGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minigameId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinMiniGameForChatRoomGroupResponse {
    return { minigameId: isSet(object.minigameId) ? Number(object.minigameId) : 0 };
  },

  toJSON(message: CChatRoomJoinMiniGameForChatRoomGroupResponse): unknown {
    const obj: any = {};
    message.minigameId !== undefined && (obj.minigameId = Math.round(message.minigameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinMiniGameForChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomJoinMiniGameForChatRoomGroupResponse {
    return CChatRoomJoinMiniGameForChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinMiniGameForChatRoomGroupResponse>, I>>(
    object: I,
  ): CChatRoomJoinMiniGameForChatRoomGroupResponse {
    const message = createBaseCChatRoomJoinMiniGameForChatRoomGroupResponse();
    message.minigameId = object.minigameId ?? 0;
    return message;
  },
};

function createBaseCChatRoomEndMiniGameForChatRoomGroupRequest(): CChatRoomEndMiniGameForChatRoomGroupRequest {
  return { chatGroupId: 0, chatId: 0, minigameId: 0 };
}

export const CChatRoomEndMiniGameForChatRoomGroupRequest = {
  encode(message: CChatRoomEndMiniGameForChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.minigameId !== 0) {
      writer.uint32(24).uint64(message.minigameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomEndMiniGameForChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomEndMiniGameForChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.minigameId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomEndMiniGameForChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      minigameId: isSet(object.minigameId) ? Number(object.minigameId) : 0,
    };
  },

  toJSON(message: CChatRoomEndMiniGameForChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.minigameId !== undefined && (obj.minigameId = Math.round(message.minigameId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomEndMiniGameForChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomEndMiniGameForChatRoomGroupRequest {
    return CChatRoomEndMiniGameForChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomEndMiniGameForChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomEndMiniGameForChatRoomGroupRequest {
    const message = createBaseCChatRoomEndMiniGameForChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.minigameId = object.minigameId ?? 0;
    return message;
  },
};

function createBaseCChatRoomEndMiniGameForChatRoomGroupResponse(): CChatRoomEndMiniGameForChatRoomGroupResponse {
  return {};
}

export const CChatRoomEndMiniGameForChatRoomGroupResponse = {
  encode(_: CChatRoomEndMiniGameForChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomEndMiniGameForChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomEndMiniGameForChatRoomGroupResponse();
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

  fromJSON(_: any): CChatRoomEndMiniGameForChatRoomGroupResponse {
    return {};
  },

  toJSON(_: CChatRoomEndMiniGameForChatRoomGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomEndMiniGameForChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomEndMiniGameForChatRoomGroupResponse {
    return CChatRoomEndMiniGameForChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomEndMiniGameForChatRoomGroupResponse>, I>>(
    _: I,
  ): CChatRoomEndMiniGameForChatRoomGroupResponse {
    const message = createBaseCChatRoomEndMiniGameForChatRoomGroupResponse();
    return message;
  },
};

function createBaseCChatRoomMuteUserRequest(): CChatRoomMuteUserRequest {
  return { chatGroupId: 0, steamid: 0, expiration: 0 };
}

export const CChatRoomMuteUserRequest = {
  encode(message: CChatRoomMuteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.expiration !== 0) {
      writer.uint32(24).int32(message.expiration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMuteUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMuteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.expiration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMuteUserRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
    };
  },

  toJSON(message: CChatRoomMuteUserRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMuteUserRequest>, I>>(base?: I): CChatRoomMuteUserRequest {
    return CChatRoomMuteUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMuteUserRequest>, I>>(object: I): CChatRoomMuteUserRequest {
    const message = createBaseCChatRoomMuteUserRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.expiration = object.expiration ?? 0;
    return message;
  },
};

function createBaseCChatRoomMuteUserResponse(): CChatRoomMuteUserResponse {
  return {};
}

export const CChatRoomMuteUserResponse = {
  encode(_: CChatRoomMuteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMuteUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMuteUserResponse();
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

  fromJSON(_: any): CChatRoomMuteUserResponse {
    return {};
  },

  toJSON(_: CChatRoomMuteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMuteUserResponse>, I>>(base?: I): CChatRoomMuteUserResponse {
    return CChatRoomMuteUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMuteUserResponse>, I>>(_: I): CChatRoomMuteUserResponse {
    const message = createBaseCChatRoomMuteUserResponse();
    return message;
  },
};

function createBaseCChatRoomKickUserRequest(): CChatRoomKickUserRequest {
  return { chatGroupId: 0, steamid: 0, expiration: 0 };
}

export const CChatRoomKickUserRequest = {
  encode(message: CChatRoomKickUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.expiration !== 0) {
      writer.uint32(24).int32(message.expiration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomKickUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomKickUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.expiration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomKickUserRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
    };
  },

  toJSON(message: CChatRoomKickUserRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomKickUserRequest>, I>>(base?: I): CChatRoomKickUserRequest {
    return CChatRoomKickUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomKickUserRequest>, I>>(object: I): CChatRoomKickUserRequest {
    const message = createBaseCChatRoomKickUserRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.expiration = object.expiration ?? 0;
    return message;
  },
};

function createBaseCChatRoomKickUserResponse(): CChatRoomKickUserResponse {
  return {};
}

export const CChatRoomKickUserResponse = {
  encode(_: CChatRoomKickUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomKickUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomKickUserResponse();
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

  fromJSON(_: any): CChatRoomKickUserResponse {
    return {};
  },

  toJSON(_: CChatRoomKickUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomKickUserResponse>, I>>(base?: I): CChatRoomKickUserResponse {
    return CChatRoomKickUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomKickUserResponse>, I>>(_: I): CChatRoomKickUserResponse {
    const message = createBaseCChatRoomKickUserResponse();
    return message;
  },
};

function createBaseCChatRoomSetUserBanStateRequest(): CChatRoomSetUserBanStateRequest {
  return { chatGroupId: 0, steamid: 0, banState: false };
}

export const CChatRoomSetUserBanStateRequest = {
  encode(message: CChatRoomSetUserBanStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.banState === true) {
      writer.uint32(24).bool(message.banState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetUserBanStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserBanStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.banState = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetUserBanStateRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      banState: isSet(object.banState) ? Boolean(object.banState) : false,
    };
  },

  toJSON(message: CChatRoomSetUserBanStateRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.banState !== undefined && (obj.banState = message.banState);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserBanStateRequest>, I>>(base?: I): CChatRoomSetUserBanStateRequest {
    return CChatRoomSetUserBanStateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserBanStateRequest>, I>>(
    object: I,
  ): CChatRoomSetUserBanStateRequest {
    const message = createBaseCChatRoomSetUserBanStateRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.banState = object.banState ?? false;
    return message;
  },
};

function createBaseCChatRoomSetUserBanStateResponse(): CChatRoomSetUserBanStateResponse {
  return {};
}

export const CChatRoomSetUserBanStateResponse = {
  encode(_: CChatRoomSetUserBanStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetUserBanStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserBanStateResponse();
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

  fromJSON(_: any): CChatRoomSetUserBanStateResponse {
    return {};
  },

  toJSON(_: CChatRoomSetUserBanStateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserBanStateResponse>, I>>(
    base?: I,
  ): CChatRoomSetUserBanStateResponse {
    return CChatRoomSetUserBanStateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserBanStateResponse>, I>>(
    _: I,
  ): CChatRoomSetUserBanStateResponse {
    const message = createBaseCChatRoomSetUserBanStateResponse();
    return message;
  },
};

function createBaseCChatRoomRevokeInviteRequest(): CChatRoomRevokeInviteRequest {
  return { chatGroupId: 0, steamid: 0 };
}

export const CChatRoomRevokeInviteRequest = {
  encode(message: CChatRoomRevokeInviteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRevokeInviteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRevokeInviteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomRevokeInviteRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CChatRoomRevokeInviteRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRevokeInviteRequest>, I>>(base?: I): CChatRoomRevokeInviteRequest {
    return CChatRoomRevokeInviteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRevokeInviteRequest>, I>>(object: I): CChatRoomRevokeInviteRequest {
    const message = createBaseCChatRoomRevokeInviteRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCChatRoomRevokeInviteResponse(): CChatRoomRevokeInviteResponse {
  return {};
}

export const CChatRoomRevokeInviteResponse = {
  encode(_: CChatRoomRevokeInviteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRevokeInviteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRevokeInviteResponse();
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

  fromJSON(_: any): CChatRoomRevokeInviteResponse {
    return {};
  },

  toJSON(_: CChatRoomRevokeInviteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRevokeInviteResponse>, I>>(base?: I): CChatRoomRevokeInviteResponse {
    return CChatRoomRevokeInviteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRevokeInviteResponse>, I>>(_: I): CChatRoomRevokeInviteResponse {
    const message = createBaseCChatRoomRevokeInviteResponse();
    return message;
  },
};

function createBaseCChatRoomCreateRoleRequest(): CChatRoomCreateRoleRequest {
  return { chatGroupId: 0, name: "" };
}

export const CChatRoomCreateRoleRequest = {
  encode(message: CChatRoomCreateRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): CChatRoomCreateRoleRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CChatRoomCreateRoleRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateRoleRequest>, I>>(base?: I): CChatRoomCreateRoleRequest {
    return CChatRoomCreateRoleRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateRoleRequest>, I>>(object: I): CChatRoomCreateRoleRequest {
    const message = createBaseCChatRoomCreateRoleRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomCreateRoleResponse(): CChatRoomCreateRoleResponse {
  return { actions: undefined };
}

export const CChatRoomCreateRoleResponse = {
  encode(message: CChatRoomCreateRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actions !== undefined) {
      CChatRoleActions.encode(message.actions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.actions = CChatRoleActions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateRoleResponse {
    return { actions: isSet(object.actions) ? CChatRoleActions.fromJSON(object.actions) : undefined };
  },

  toJSON(message: CChatRoomCreateRoleResponse): unknown {
    const obj: any = {};
    message.actions !== undefined &&
      (obj.actions = message.actions ? CChatRoleActions.toJSON(message.actions) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateRoleResponse>, I>>(base?: I): CChatRoomCreateRoleResponse {
    return CChatRoomCreateRoleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateRoleResponse>, I>>(object: I): CChatRoomCreateRoleResponse {
    const message = createBaseCChatRoomCreateRoleResponse();
    message.actions = (object.actions !== undefined && object.actions !== null)
      ? CChatRoleActions.fromPartial(object.actions)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomGetRolesRequest(): CChatRoomGetRolesRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetRolesRequest = {
  encode(message: CChatRoomGetRolesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRolesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetRolesRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetRolesRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRolesRequest>, I>>(base?: I): CChatRoomGetRolesRequest {
    return CChatRoomGetRolesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRolesRequest>, I>>(object: I): CChatRoomGetRolesRequest {
    const message = createBaseCChatRoomGetRolesRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetRolesResponse(): CChatRoomGetRolesResponse {
  return { roles: [] };
}

export const CChatRoomGetRolesResponse = {
  encode(message: CChatRoomGetRolesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roles) {
      CChatRole.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRolesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles.push(CChatRole.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetRolesResponse {
    return { roles: Array.isArray(object?.roles) ? object.roles.map((e: any) => CChatRole.fromJSON(e)) : [] };
  },

  toJSON(message: CChatRoomGetRolesResponse): unknown {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map((e) => e ? CChatRole.toJSON(e) : undefined);
    } else {
      obj.roles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRolesResponse>, I>>(base?: I): CChatRoomGetRolesResponse {
    return CChatRoomGetRolesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRolesResponse>, I>>(object: I): CChatRoomGetRolesResponse {
    const message = createBaseCChatRoomGetRolesResponse();
    message.roles = object.roles?.map((e) => CChatRole.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomRenameRoleRequest(): CChatRoomRenameRoleRequest {
  return { chatGroupId: 0, roleId: 0, name: "" };
}

export const CChatRoomRenameRoleRequest = {
  encode(message: CChatRoomRenameRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint64(message.roleId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomRenameRoleRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CChatRoomRenameRoleRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameRoleRequest>, I>>(base?: I): CChatRoomRenameRoleRequest {
    return CChatRoomRenameRoleRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameRoleRequest>, I>>(object: I): CChatRoomRenameRoleRequest {
    const message = createBaseCChatRoomRenameRoleRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomRenameRoleResponse(): CChatRoomRenameRoleResponse {
  return {};
}

export const CChatRoomRenameRoleResponse = {
  encode(_: CChatRoomRenameRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameRoleResponse();
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

  fromJSON(_: any): CChatRoomRenameRoleResponse {
    return {};
  },

  toJSON(_: CChatRoomRenameRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameRoleResponse>, I>>(base?: I): CChatRoomRenameRoleResponse {
    return CChatRoomRenameRoleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameRoleResponse>, I>>(_: I): CChatRoomRenameRoleResponse {
    const message = createBaseCChatRoomRenameRoleResponse();
    return message;
  },
};

function createBaseCChatRoomReorderRoleRequest(): CChatRoomReorderRoleRequest {
  return { chatGroupId: 0, roleId: 0, ordinal: 0 };
}

export const CChatRoomReorderRoleRequest = {
  encode(message: CChatRoomReorderRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint64(message.roleId);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReorderRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReorderRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomReorderRoleRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
    };
  },

  toJSON(message: CChatRoomReorderRoleRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReorderRoleRequest>, I>>(base?: I): CChatRoomReorderRoleRequest {
    return CChatRoomReorderRoleRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReorderRoleRequest>, I>>(object: I): CChatRoomReorderRoleRequest {
    const message = createBaseCChatRoomReorderRoleRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.ordinal = object.ordinal ?? 0;
    return message;
  },
};

function createBaseCChatRoomReorderRoleResponse(): CChatRoomReorderRoleResponse {
  return {};
}

export const CChatRoomReorderRoleResponse = {
  encode(_: CChatRoomReorderRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReorderRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReorderRoleResponse();
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

  fromJSON(_: any): CChatRoomReorderRoleResponse {
    return {};
  },

  toJSON(_: CChatRoomReorderRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReorderRoleResponse>, I>>(base?: I): CChatRoomReorderRoleResponse {
    return CChatRoomReorderRoleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReorderRoleResponse>, I>>(_: I): CChatRoomReorderRoleResponse {
    const message = createBaseCChatRoomReorderRoleResponse();
    return message;
  },
};

function createBaseCChatRoomDeleteRoleRequest(): CChatRoomDeleteRoleRequest {
  return { chatGroupId: 0, roleId: 0 };
}

export const CChatRoomDeleteRoleRequest = {
  encode(message: CChatRoomDeleteRoleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint64(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteRoleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteRoleRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
    };
  },

  toJSON(message: CChatRoomDeleteRoleRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteRoleRequest>, I>>(base?: I): CChatRoomDeleteRoleRequest {
    return CChatRoomDeleteRoleRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteRoleRequest>, I>>(object: I): CChatRoomDeleteRoleRequest {
    const message = createBaseCChatRoomDeleteRoleRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    return message;
  },
};

function createBaseCChatRoomDeleteRoleResponse(): CChatRoomDeleteRoleResponse {
  return {};
}

export const CChatRoomDeleteRoleResponse = {
  encode(_: CChatRoomDeleteRoleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteRoleResponse();
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

  fromJSON(_: any): CChatRoomDeleteRoleResponse {
    return {};
  },

  toJSON(_: CChatRoomDeleteRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteRoleResponse>, I>>(base?: I): CChatRoomDeleteRoleResponse {
    return CChatRoomDeleteRoleResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteRoleResponse>, I>>(_: I): CChatRoomDeleteRoleResponse {
    const message = createBaseCChatRoomDeleteRoleResponse();
    return message;
  },
};

function createBaseCChatRoomGetRoleActionsRequest(): CChatRoomGetRoleActionsRequest {
  return { chatGroupId: 0, roleId: 0 };
}

export const CChatRoomGetRoleActionsRequest = {
  encode(message: CChatRoomGetRoleActionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint64(message.roleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRoleActionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRoleActionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetRoleActionsRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
    };
  },

  toJSON(message: CChatRoomGetRoleActionsRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRoleActionsRequest>, I>>(base?: I): CChatRoomGetRoleActionsRequest {
    return CChatRoomGetRoleActionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRoleActionsRequest>, I>>(
    object: I,
  ): CChatRoomGetRoleActionsRequest {
    const message = createBaseCChatRoomGetRoleActionsRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetRoleActionsResponse(): CChatRoomGetRoleActionsResponse {
  return { actions: [] };
}

export const CChatRoomGetRoleActionsResponse = {
  encode(message: CChatRoomGetRoleActionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      CChatRoleActions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRoleActionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRoleActionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(CChatRoleActions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetRoleActionsResponse {
    return {
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => CChatRoleActions.fromJSON(e)) : [],
    };
  },

  toJSON(message: CChatRoomGetRoleActionsResponse): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? CChatRoleActions.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRoleActionsResponse>, I>>(base?: I): CChatRoomGetRoleActionsResponse {
    return CChatRoomGetRoleActionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRoleActionsResponse>, I>>(
    object: I,
  ): CChatRoomGetRoleActionsResponse {
    const message = createBaseCChatRoomGetRoleActionsResponse();
    message.actions = object.actions?.map((e) => CChatRoleActions.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomReplaceRoleActionsRequest(): CChatRoomReplaceRoleActionsRequest {
  return { chatGroupId: 0, roleId: 0, actions: undefined };
}

export const CChatRoomReplaceRoleActionsRequest = {
  encode(message: CChatRoomReplaceRoleActionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint64(message.roleId);
    }
    if (message.actions !== undefined) {
      CChatRoleActions.encode(message.actions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReplaceRoleActionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReplaceRoleActionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.actions = CChatRoleActions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomReplaceRoleActionsRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      actions: isSet(object.actions) ? CChatRoleActions.fromJSON(object.actions) : undefined,
    };
  },

  toJSON(message: CChatRoomReplaceRoleActionsRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.actions !== undefined &&
      (obj.actions = message.actions ? CChatRoleActions.toJSON(message.actions) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReplaceRoleActionsRequest>, I>>(
    base?: I,
  ): CChatRoomReplaceRoleActionsRequest {
    return CChatRoomReplaceRoleActionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReplaceRoleActionsRequest>, I>>(
    object: I,
  ): CChatRoomReplaceRoleActionsRequest {
    const message = createBaseCChatRoomReplaceRoleActionsRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.actions = (object.actions !== undefined && object.actions !== null)
      ? CChatRoleActions.fromPartial(object.actions)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomReplaceRoleActionsResponse(): CChatRoomReplaceRoleActionsResponse {
  return {};
}

export const CChatRoomReplaceRoleActionsResponse = {
  encode(_: CChatRoomReplaceRoleActionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReplaceRoleActionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReplaceRoleActionsResponse();
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

  fromJSON(_: any): CChatRoomReplaceRoleActionsResponse {
    return {};
  },

  toJSON(_: CChatRoomReplaceRoleActionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReplaceRoleActionsResponse>, I>>(
    base?: I,
  ): CChatRoomReplaceRoleActionsResponse {
    return CChatRoomReplaceRoleActionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReplaceRoleActionsResponse>, I>>(
    _: I,
  ): CChatRoomReplaceRoleActionsResponse {
    const message = createBaseCChatRoomReplaceRoleActionsResponse();
    return message;
  },
};

function createBaseCChatRoomAddRoleToUserRequest(): CChatRoomAddRoleToUserRequest {
  return { chatGroupId: 0, roleId: 0, steamid: 0 };
}

export const CChatRoomAddRoleToUserRequest = {
  encode(message: CChatRoomAddRoleToUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(24).uint64(message.roleId);
    }
    if (message.steamid !== 0) {
      writer.uint32(33).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomAddRoleToUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomAddRoleToUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomAddRoleToUserRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CChatRoomAddRoleToUserRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomAddRoleToUserRequest>, I>>(base?: I): CChatRoomAddRoleToUserRequest {
    return CChatRoomAddRoleToUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomAddRoleToUserRequest>, I>>(
    object: I,
  ): CChatRoomAddRoleToUserRequest {
    const message = createBaseCChatRoomAddRoleToUserRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCChatRoomAddRoleToUserResponse(): CChatRoomAddRoleToUserResponse {
  return {};
}

export const CChatRoomAddRoleToUserResponse = {
  encode(_: CChatRoomAddRoleToUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomAddRoleToUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomAddRoleToUserResponse();
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

  fromJSON(_: any): CChatRoomAddRoleToUserResponse {
    return {};
  },

  toJSON(_: CChatRoomAddRoleToUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomAddRoleToUserResponse>, I>>(base?: I): CChatRoomAddRoleToUserResponse {
    return CChatRoomAddRoleToUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomAddRoleToUserResponse>, I>>(_: I): CChatRoomAddRoleToUserResponse {
    const message = createBaseCChatRoomAddRoleToUserResponse();
    return message;
  },
};

function createBaseCChatRoomGetRolesForUserRequest(): CChatRoomGetRolesForUserRequest {
  return { chatGroupId: 0, steamid: 0 };
}

export const CChatRoomGetRolesForUserRequest = {
  encode(message: CChatRoomGetRolesForUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(25).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRolesForUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRolesForUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): CChatRoomGetRolesForUserRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CChatRoomGetRolesForUserRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRolesForUserRequest>, I>>(base?: I): CChatRoomGetRolesForUserRequest {
    return CChatRoomGetRolesForUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRolesForUserRequest>, I>>(
    object: I,
  ): CChatRoomGetRolesForUserRequest {
    const message = createBaseCChatRoomGetRolesForUserRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetRolesForUserResponse(): CChatRoomGetRolesForUserResponse {
  return { roleIds: [] };
}

export const CChatRoomGetRolesForUserResponse = {
  encode(message: CChatRoomGetRolesForUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.roleIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetRolesForUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetRolesForUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.roleIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetRolesForUserResponse {
    return { roleIds: Array.isArray(object?.roleIds) ? object.roleIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CChatRoomGetRolesForUserResponse): unknown {
    const obj: any = {};
    if (message.roleIds) {
      obj.roleIds = message.roleIds.map((e) => Math.round(e));
    } else {
      obj.roleIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetRolesForUserResponse>, I>>(
    base?: I,
  ): CChatRoomGetRolesForUserResponse {
    return CChatRoomGetRolesForUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetRolesForUserResponse>, I>>(
    object: I,
  ): CChatRoomGetRolesForUserResponse {
    const message = createBaseCChatRoomGetRolesForUserResponse();
    message.roleIds = object.roleIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomDeleteRoleFromUserRequest(): CChatRoomDeleteRoleFromUserRequest {
  return { chatGroupId: 0, roleId: 0, steamid: 0 };
}

export const CChatRoomDeleteRoleFromUserRequest = {
  encode(message: CChatRoomDeleteRoleFromUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.roleId !== 0) {
      writer.uint32(24).uint64(message.roleId);
    }
    if (message.steamid !== 0) {
      writer.uint32(33).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteRoleFromUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteRoleFromUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roleId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteRoleFromUserRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      roleId: isSet(object.roleId) ? Number(object.roleId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
    };
  },

  toJSON(message: CChatRoomDeleteRoleFromUserRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.roleId !== undefined && (obj.roleId = Math.round(message.roleId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteRoleFromUserRequest>, I>>(
    base?: I,
  ): CChatRoomDeleteRoleFromUserRequest {
    return CChatRoomDeleteRoleFromUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteRoleFromUserRequest>, I>>(
    object: I,
  ): CChatRoomDeleteRoleFromUserRequest {
    const message = createBaseCChatRoomDeleteRoleFromUserRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.roleId = object.roleId ?? 0;
    message.steamid = object.steamid ?? 0;
    return message;
  },
};

function createBaseCChatRoomDeleteRoleFromUserResponse(): CChatRoomDeleteRoleFromUserResponse {
  return {};
}

export const CChatRoomDeleteRoleFromUserResponse = {
  encode(_: CChatRoomDeleteRoleFromUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteRoleFromUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteRoleFromUserResponse();
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

  fromJSON(_: any): CChatRoomDeleteRoleFromUserResponse {
    return {};
  },

  toJSON(_: CChatRoomDeleteRoleFromUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteRoleFromUserResponse>, I>>(
    base?: I,
  ): CChatRoomDeleteRoleFromUserResponse {
    return CChatRoomDeleteRoleFromUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteRoleFromUserResponse>, I>>(
    _: I,
  ): CChatRoomDeleteRoleFromUserResponse {
    const message = createBaseCChatRoomDeleteRoleFromUserResponse();
    return message;
  },
};

function createBaseCChatRoomJoinChatRoomGroupRequest(): CChatRoomJoinChatRoomGroupRequest {
  return { chatGroupId: 0, inviteCode: "", chatId: 0 };
}

export const CChatRoomJoinChatRoomGroupRequest = {
  encode(message: CChatRoomJoinChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.inviteCode !== "") {
      writer.uint32(18).string(message.inviteCode);
    }
    if (message.chatId !== 0) {
      writer.uint32(24).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.inviteCode = reader.string();
          break;
        case 3:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "",
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomJoinChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomJoinChatRoomGroupRequest {
    return CChatRoomJoinChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomJoinChatRoomGroupRequest {
    const message = createBaseCChatRoomJoinChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.inviteCode = object.inviteCode ?? "";
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomJoinChatRoomGroupResponse(): CChatRoomJoinChatRoomGroupResponse {
  return { state: undefined, userChatState: undefined, joinChatId: 0, timeExpire: 0 };
}

export const CChatRoomJoinChatRoomGroupResponse = {
  encode(message: CChatRoomJoinChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      CChatRoomGroupState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.userChatState !== undefined) {
      CUserChatRoomGroupState.encode(message.userChatState, writer.uint32(26).fork()).ldelim();
    }
    if (message.joinChatId !== 0) {
      writer.uint32(32).uint64(message.joinChatId);
    }
    if (message.timeExpire !== 0) {
      writer.uint32(40).uint32(message.timeExpire);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinChatRoomGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = CChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 3:
          message.userChatState = CUserChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 4:
          message.joinChatId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.timeExpire = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinChatRoomGroupResponse {
    return {
      state: isSet(object.state) ? CChatRoomGroupState.fromJSON(object.state) : undefined,
      userChatState: isSet(object.userChatState) ? CUserChatRoomGroupState.fromJSON(object.userChatState) : undefined,
      joinChatId: isSet(object.joinChatId) ? Number(object.joinChatId) : 0,
      timeExpire: isSet(object.timeExpire) ? Number(object.timeExpire) : 0,
    };
  },

  toJSON(message: CChatRoomJoinChatRoomGroupResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? CChatRoomGroupState.toJSON(message.state) : undefined);
    message.userChatState !== undefined &&
      (obj.userChatState = message.userChatState ? CUserChatRoomGroupState.toJSON(message.userChatState) : undefined);
    message.joinChatId !== undefined && (obj.joinChatId = Math.round(message.joinChatId));
    message.timeExpire !== undefined && (obj.timeExpire = Math.round(message.timeExpire));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomJoinChatRoomGroupResponse {
    return CChatRoomJoinChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinChatRoomGroupResponse>, I>>(
    object: I,
  ): CChatRoomJoinChatRoomGroupResponse {
    const message = createBaseCChatRoomJoinChatRoomGroupResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? CChatRoomGroupState.fromPartial(object.state)
      : undefined;
    message.userChatState = (object.userChatState !== undefined && object.userChatState !== null)
      ? CUserChatRoomGroupState.fromPartial(object.userChatState)
      : undefined;
    message.joinChatId = object.joinChatId ?? 0;
    message.timeExpire = object.timeExpire ?? 0;
    return message;
  },
};

function createBaseCChatRoomInviteFriendToChatRoomGroupRequest(): CChatRoomInviteFriendToChatRoomGroupRequest {
  return { chatGroupId: 0, steamid: 0, chatId: 0, skipFriendsuiCheck: false };
}

export const CChatRoomInviteFriendToChatRoomGroupRequest = {
  encode(message: CChatRoomInviteFriendToChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.steamid !== 0) {
      writer.uint32(17).fixed64(message.steamid);
    }
    if (message.chatId !== 0) {
      writer.uint32(24).uint64(message.chatId);
    }
    if (message.skipFriendsuiCheck === true) {
      writer.uint32(32).bool(message.skipFriendsuiCheck);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomInviteFriendToChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomInviteFriendToChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.skipFriendsuiCheck = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomInviteFriendToChatRoomGroupRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      skipFriendsuiCheck: isSet(object.skipFriendsuiCheck) ? Boolean(object.skipFriendsuiCheck) : false,
    };
  },

  toJSON(message: CChatRoomInviteFriendToChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.skipFriendsuiCheck !== undefined && (obj.skipFriendsuiCheck = message.skipFriendsuiCheck);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomInviteFriendToChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomInviteFriendToChatRoomGroupRequest {
    return CChatRoomInviteFriendToChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomInviteFriendToChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomInviteFriendToChatRoomGroupRequest {
    const message = createBaseCChatRoomInviteFriendToChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.steamid = object.steamid ?? 0;
    message.chatId = object.chatId ?? 0;
    message.skipFriendsuiCheck = object.skipFriendsuiCheck ?? false;
    return message;
  },
};

function createBaseCChatRoomInviteFriendToChatRoomGroupResponse(): CChatRoomInviteFriendToChatRoomGroupResponse {
  return {};
}

export const CChatRoomInviteFriendToChatRoomGroupResponse = {
  encode(_: CChatRoomInviteFriendToChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomInviteFriendToChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomInviteFriendToChatRoomGroupResponse();
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

  fromJSON(_: any): CChatRoomInviteFriendToChatRoomGroupResponse {
    return {};
  },

  toJSON(_: CChatRoomInviteFriendToChatRoomGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomInviteFriendToChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomInviteFriendToChatRoomGroupResponse {
    return CChatRoomInviteFriendToChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomInviteFriendToChatRoomGroupResponse>, I>>(
    _: I,
  ): CChatRoomInviteFriendToChatRoomGroupResponse {
    const message = createBaseCChatRoomInviteFriendToChatRoomGroupResponse();
    return message;
  },
};

function createBaseCChatRoomLeaveChatRoomGroupRequest(): CChatRoomLeaveChatRoomGroupRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomLeaveChatRoomGroupRequest = {
  encode(message: CChatRoomLeaveChatRoomGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomLeaveChatRoomGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomLeaveChatRoomGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomLeaveChatRoomGroupRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomLeaveChatRoomGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomLeaveChatRoomGroupRequest>, I>>(
    base?: I,
  ): CChatRoomLeaveChatRoomGroupRequest {
    return CChatRoomLeaveChatRoomGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomLeaveChatRoomGroupRequest>, I>>(
    object: I,
  ): CChatRoomLeaveChatRoomGroupRequest {
    const message = createBaseCChatRoomLeaveChatRoomGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomLeaveChatRoomGroupResponse(): CChatRoomLeaveChatRoomGroupResponse {
  return {};
}

export const CChatRoomLeaveChatRoomGroupResponse = {
  encode(_: CChatRoomLeaveChatRoomGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomLeaveChatRoomGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomLeaveChatRoomGroupResponse();
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

  fromJSON(_: any): CChatRoomLeaveChatRoomGroupResponse {
    return {};
  },

  toJSON(_: CChatRoomLeaveChatRoomGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomLeaveChatRoomGroupResponse>, I>>(
    base?: I,
  ): CChatRoomLeaveChatRoomGroupResponse {
    return CChatRoomLeaveChatRoomGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomLeaveChatRoomGroupResponse>, I>>(
    _: I,
  ): CChatRoomLeaveChatRoomGroupResponse {
    const message = createBaseCChatRoomLeaveChatRoomGroupResponse();
    return message;
  },
};

function createBaseCChatRoomCreateChatRoomRequest(): CChatRoomCreateChatRoomRequest {
  return { chatGroupId: 0, name: "", allowVoice: false };
}

export const CChatRoomCreateChatRoomRequest = {
  encode(message: CChatRoomCreateChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.allowVoice === true) {
      writer.uint32(24).bool(message.allowVoice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.allowVoice = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateChatRoomRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      allowVoice: isSet(object.allowVoice) ? Boolean(object.allowVoice) : false,
    };
  },

  toJSON(message: CChatRoomCreateChatRoomRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.name !== undefined && (obj.name = message.name);
    message.allowVoice !== undefined && (obj.allowVoice = message.allowVoice);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateChatRoomRequest>, I>>(base?: I): CChatRoomCreateChatRoomRequest {
    return CChatRoomCreateChatRoomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateChatRoomRequest>, I>>(
    object: I,
  ): CChatRoomCreateChatRoomRequest {
    const message = createBaseCChatRoomCreateChatRoomRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.name = object.name ?? "";
    message.allowVoice = object.allowVoice ?? false;
    return message;
  },
};

function createBaseCChatRoomCreateChatRoomResponse(): CChatRoomCreateChatRoomResponse {
  return { chatRoom: undefined };
}

export const CChatRoomCreateChatRoomResponse = {
  encode(message: CChatRoomCreateChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatRoom !== undefined) {
      CChatRoomState.encode(message.chatRoom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateChatRoomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatRoom = CChatRoomState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateChatRoomResponse {
    return { chatRoom: isSet(object.chatRoom) ? CChatRoomState.fromJSON(object.chatRoom) : undefined };
  },

  toJSON(message: CChatRoomCreateChatRoomResponse): unknown {
    const obj: any = {};
    message.chatRoom !== undefined &&
      (obj.chatRoom = message.chatRoom ? CChatRoomState.toJSON(message.chatRoom) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateChatRoomResponse>, I>>(base?: I): CChatRoomCreateChatRoomResponse {
    return CChatRoomCreateChatRoomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateChatRoomResponse>, I>>(
    object: I,
  ): CChatRoomCreateChatRoomResponse {
    const message = createBaseCChatRoomCreateChatRoomResponse();
    message.chatRoom = (object.chatRoom !== undefined && object.chatRoom !== null)
      ? CChatRoomState.fromPartial(object.chatRoom)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomDeleteChatRoomRequest(): CChatRoomDeleteChatRoomRequest {
  return { chatGroupId: 0, chatId: 0 };
}

export const CChatRoomDeleteChatRoomRequest = {
  encode(message: CChatRoomDeleteChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteChatRoomRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomDeleteChatRoomRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteChatRoomRequest>, I>>(base?: I): CChatRoomDeleteChatRoomRequest {
    return CChatRoomDeleteChatRoomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteChatRoomRequest>, I>>(
    object: I,
  ): CChatRoomDeleteChatRoomRequest {
    const message = createBaseCChatRoomDeleteChatRoomRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomDeleteChatRoomResponse(): CChatRoomDeleteChatRoomResponse {
  return {};
}

export const CChatRoomDeleteChatRoomResponse = {
  encode(_: CChatRoomDeleteChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteChatRoomResponse();
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

  fromJSON(_: any): CChatRoomDeleteChatRoomResponse {
    return {};
  },

  toJSON(_: CChatRoomDeleteChatRoomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteChatRoomResponse>, I>>(base?: I): CChatRoomDeleteChatRoomResponse {
    return CChatRoomDeleteChatRoomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteChatRoomResponse>, I>>(_: I): CChatRoomDeleteChatRoomResponse {
    const message = createBaseCChatRoomDeleteChatRoomResponse();
    return message;
  },
};

function createBaseCChatRoomRenameChatRoomRequest(): CChatRoomRenameChatRoomRequest {
  return { chatGroupId: 0, chatId: 0, name: "" };
}

export const CChatRoomRenameChatRoomRequest = {
  encode(message: CChatRoomRenameChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomRenameChatRoomRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CChatRoomRenameChatRoomRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameChatRoomRequest>, I>>(base?: I): CChatRoomRenameChatRoomRequest {
    return CChatRoomRenameChatRoomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameChatRoomRequest>, I>>(
    object: I,
  ): CChatRoomRenameChatRoomRequest {
    const message = createBaseCChatRoomRenameChatRoomRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCChatRoomRenameChatRoomResponse(): CChatRoomRenameChatRoomResponse {
  return {};
}

export const CChatRoomRenameChatRoomResponse = {
  encode(_: CChatRoomRenameChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomRenameChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomRenameChatRoomResponse();
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

  fromJSON(_: any): CChatRoomRenameChatRoomResponse {
    return {};
  },

  toJSON(_: CChatRoomRenameChatRoomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomRenameChatRoomResponse>, I>>(base?: I): CChatRoomRenameChatRoomResponse {
    return CChatRoomRenameChatRoomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomRenameChatRoomResponse>, I>>(_: I): CChatRoomRenameChatRoomResponse {
    const message = createBaseCChatRoomRenameChatRoomResponse();
    return message;
  },
};

function createBaseCChatRoomReorderChatRoomRequest(): CChatRoomReorderChatRoomRequest {
  return { chatGroupId: 0, chatId: 0, moveAfterChatId: 0 };
}

export const CChatRoomReorderChatRoomRequest = {
  encode(message: CChatRoomReorderChatRoomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.moveAfterChatId !== 0) {
      writer.uint32(24).uint64(message.moveAfterChatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReorderChatRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReorderChatRoomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.moveAfterChatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomReorderChatRoomRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      moveAfterChatId: isSet(object.moveAfterChatId) ? Number(object.moveAfterChatId) : 0,
    };
  },

  toJSON(message: CChatRoomReorderChatRoomRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.moveAfterChatId !== undefined && (obj.moveAfterChatId = Math.round(message.moveAfterChatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReorderChatRoomRequest>, I>>(base?: I): CChatRoomReorderChatRoomRequest {
    return CChatRoomReorderChatRoomRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReorderChatRoomRequest>, I>>(
    object: I,
  ): CChatRoomReorderChatRoomRequest {
    const message = createBaseCChatRoomReorderChatRoomRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.moveAfterChatId = object.moveAfterChatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomReorderChatRoomResponse(): CChatRoomReorderChatRoomResponse {
  return {};
}

export const CChatRoomReorderChatRoomResponse = {
  encode(_: CChatRoomReorderChatRoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomReorderChatRoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomReorderChatRoomResponse();
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

  fromJSON(_: any): CChatRoomReorderChatRoomResponse {
    return {};
  },

  toJSON(_: CChatRoomReorderChatRoomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomReorderChatRoomResponse>, I>>(
    base?: I,
  ): CChatRoomReorderChatRoomResponse {
    return CChatRoomReorderChatRoomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomReorderChatRoomResponse>, I>>(
    _: I,
  ): CChatRoomReorderChatRoomResponse {
    const message = createBaseCChatRoomReorderChatRoomResponse();
    return message;
  },
};

function createBaseCChatRoomSendChatMessageRequest(): CChatRoomSendChatMessageRequest {
  return { chatGroupId: 0, chatId: 0, message: "", echoToSender: false };
}

export const CChatRoomSendChatMessageRequest = {
  encode(message: CChatRoomSendChatMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.echoToSender === true) {
      writer.uint32(32).bool(message.echoToSender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSendChatMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSendChatMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.echoToSender = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSendChatMessageRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      echoToSender: isSet(object.echoToSender) ? Boolean(object.echoToSender) : false,
    };
  },

  toJSON(message: CChatRoomSendChatMessageRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.message !== undefined && (obj.message = message.message);
    message.echoToSender !== undefined && (obj.echoToSender = message.echoToSender);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSendChatMessageRequest>, I>>(base?: I): CChatRoomSendChatMessageRequest {
    return CChatRoomSendChatMessageRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSendChatMessageRequest>, I>>(
    object: I,
  ): CChatRoomSendChatMessageRequest {
    const message = createBaseCChatRoomSendChatMessageRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.message = object.message ?? "";
    message.echoToSender = object.echoToSender ?? false;
    return message;
  },
};

function createBaseCChatRoomSendChatMessageResponse(): CChatRoomSendChatMessageResponse {
  return { modifiedMessage: "", serverTimestamp: 0, ordinal: 0, messageWithoutBbCode: "" };
}

export const CChatRoomSendChatMessageResponse = {
  encode(message: CChatRoomSendChatMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modifiedMessage !== "") {
      writer.uint32(10).string(message.modifiedMessage);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(16).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(24).uint32(message.ordinal);
    }
    if (message.messageWithoutBbCode !== "") {
      writer.uint32(34).string(message.messageWithoutBbCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSendChatMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSendChatMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modifiedMessage = reader.string();
          break;
        case 2:
          message.serverTimestamp = reader.uint32();
          break;
        case 3:
          message.ordinal = reader.uint32();
          break;
        case 4:
          message.messageWithoutBbCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSendChatMessageResponse {
    return {
      modifiedMessage: isSet(object.modifiedMessage) ? String(object.modifiedMessage) : "",
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      messageWithoutBbCode: isSet(object.messageWithoutBbCode) ? String(object.messageWithoutBbCode) : "",
    };
  },

  toJSON(message: CChatRoomSendChatMessageResponse): unknown {
    const obj: any = {};
    message.modifiedMessage !== undefined && (obj.modifiedMessage = message.modifiedMessage);
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.messageWithoutBbCode !== undefined && (obj.messageWithoutBbCode = message.messageWithoutBbCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSendChatMessageResponse>, I>>(
    base?: I,
  ): CChatRoomSendChatMessageResponse {
    return CChatRoomSendChatMessageResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSendChatMessageResponse>, I>>(
    object: I,
  ): CChatRoomSendChatMessageResponse {
    const message = createBaseCChatRoomSendChatMessageResponse();
    message.modifiedMessage = object.modifiedMessage ?? "";
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.messageWithoutBbCode = object.messageWithoutBbCode ?? "";
    return message;
  },
};

function createBaseCChatRoomJoinVoiceChatRequest(): CChatRoomJoinVoiceChatRequest {
  return { chatGroupId: 0, chatId: 0 };
}

export const CChatRoomJoinVoiceChatRequest = {
  encode(message: CChatRoomJoinVoiceChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinVoiceChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinVoiceChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinVoiceChatRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomJoinVoiceChatRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinVoiceChatRequest>, I>>(base?: I): CChatRoomJoinVoiceChatRequest {
    return CChatRoomJoinVoiceChatRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinVoiceChatRequest>, I>>(
    object: I,
  ): CChatRoomJoinVoiceChatRequest {
    const message = createBaseCChatRoomJoinVoiceChatRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomJoinVoiceChatResponse(): CChatRoomJoinVoiceChatResponse {
  return { voiceChatid: 0 };
}

export const CChatRoomJoinVoiceChatResponse = {
  encode(message: CChatRoomJoinVoiceChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voiceChatid !== 0) {
      writer.uint32(8).uint64(message.voiceChatid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomJoinVoiceChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomJoinVoiceChatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voiceChatid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomJoinVoiceChatResponse {
    return { voiceChatid: isSet(object.voiceChatid) ? Number(object.voiceChatid) : 0 };
  },

  toJSON(message: CChatRoomJoinVoiceChatResponse): unknown {
    const obj: any = {};
    message.voiceChatid !== undefined && (obj.voiceChatid = Math.round(message.voiceChatid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomJoinVoiceChatResponse>, I>>(base?: I): CChatRoomJoinVoiceChatResponse {
    return CChatRoomJoinVoiceChatResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomJoinVoiceChatResponse>, I>>(
    object: I,
  ): CChatRoomJoinVoiceChatResponse {
    const message = createBaseCChatRoomJoinVoiceChatResponse();
    message.voiceChatid = object.voiceChatid ?? 0;
    return message;
  },
};

function createBaseCChatRoomLeaveVoiceChatRequest(): CChatRoomLeaveVoiceChatRequest {
  return { chatGroupId: 0, chatId: 0 };
}

export const CChatRoomLeaveVoiceChatRequest = {
  encode(message: CChatRoomLeaveVoiceChatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomLeaveVoiceChatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomLeaveVoiceChatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomLeaveVoiceChatRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomLeaveVoiceChatRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomLeaveVoiceChatRequest>, I>>(base?: I): CChatRoomLeaveVoiceChatRequest {
    return CChatRoomLeaveVoiceChatRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomLeaveVoiceChatRequest>, I>>(
    object: I,
  ): CChatRoomLeaveVoiceChatRequest {
    const message = createBaseCChatRoomLeaveVoiceChatRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomLeaveVoiceChatResponse(): CChatRoomLeaveVoiceChatResponse {
  return {};
}

export const CChatRoomLeaveVoiceChatResponse = {
  encode(_: CChatRoomLeaveVoiceChatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomLeaveVoiceChatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomLeaveVoiceChatResponse();
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

  fromJSON(_: any): CChatRoomLeaveVoiceChatResponse {
    return {};
  },

  toJSON(_: CChatRoomLeaveVoiceChatResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomLeaveVoiceChatResponse>, I>>(base?: I): CChatRoomLeaveVoiceChatResponse {
    return CChatRoomLeaveVoiceChatResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomLeaveVoiceChatResponse>, I>>(_: I): CChatRoomLeaveVoiceChatResponse {
    const message = createBaseCChatRoomLeaveVoiceChatResponse();
    return message;
  },
};

function createBaseCChatRoomGetMessageHistoryRequest(): CChatRoomGetMessageHistoryRequest {
  return { chatGroupId: 0, chatId: 0, lastTime: 0, lastOrdinal: 0, startTime: 0, startOrdinal: 0, maxCount: 0 };
}

export const CChatRoomGetMessageHistoryRequest = {
  encode(message: CChatRoomGetMessageHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.lastTime !== 0) {
      writer.uint32(24).uint32(message.lastTime);
    }
    if (message.lastOrdinal !== 0) {
      writer.uint32(32).uint32(message.lastOrdinal);
    }
    if (message.startTime !== 0) {
      writer.uint32(40).uint32(message.startTime);
    }
    if (message.startOrdinal !== 0) {
      writer.uint32(48).uint32(message.startOrdinal);
    }
    if (message.maxCount !== 0) {
      writer.uint32(56).uint32(message.maxCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMessageHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lastTime = reader.uint32();
          break;
        case 4:
          message.lastOrdinal = reader.uint32();
          break;
        case 5:
          message.startTime = reader.uint32();
          break;
        case 6:
          message.startOrdinal = reader.uint32();
          break;
        case 7:
          message.maxCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageHistoryRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      lastTime: isSet(object.lastTime) ? Number(object.lastTime) : 0,
      lastOrdinal: isSet(object.lastOrdinal) ? Number(object.lastOrdinal) : 0,
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      startOrdinal: isSet(object.startOrdinal) ? Number(object.startOrdinal) : 0,
      maxCount: isSet(object.maxCount) ? Number(object.maxCount) : 0,
    };
  },

  toJSON(message: CChatRoomGetMessageHistoryRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.lastTime !== undefined && (obj.lastTime = Math.round(message.lastTime));
    message.lastOrdinal !== undefined && (obj.lastOrdinal = Math.round(message.lastOrdinal));
    message.startTime !== undefined && (obj.startTime = Math.round(message.startTime));
    message.startOrdinal !== undefined && (obj.startOrdinal = Math.round(message.startOrdinal));
    message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryRequest>, I>>(
    base?: I,
  ): CChatRoomGetMessageHistoryRequest {
    return CChatRoomGetMessageHistoryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryRequest>, I>>(
    object: I,
  ): CChatRoomGetMessageHistoryRequest {
    const message = createBaseCChatRoomGetMessageHistoryRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.lastTime = object.lastTime ?? 0;
    message.lastOrdinal = object.lastOrdinal ?? 0;
    message.startTime = object.startTime ?? 0;
    message.startOrdinal = object.startOrdinal ?? 0;
    message.maxCount = object.maxCount ?? 0;
    return message;
  },
};

function createBaseServerMessage(): ServerMessage {
  return { message: 0, stringParam: "", accountidParam: 0 };
}

export const ServerMessage = {
  encode(message: ServerMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== 0) {
      writer.uint32(8).int32(message.message);
    }
    if (message.stringParam !== "") {
      writer.uint32(18).string(message.stringParam);
    }
    if (message.accountidParam !== 0) {
      writer.uint32(24).uint32(message.accountidParam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.int32() as any;
          break;
        case 2:
          message.stringParam = reader.string();
          break;
        case 3:
          message.accountidParam = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerMessage {
    return {
      message: isSet(object.message) ? eChatRoomServerMessageFromJSON(object.message) : 0,
      stringParam: isSet(object.stringParam) ? String(object.stringParam) : "",
      accountidParam: isSet(object.accountidParam) ? Number(object.accountidParam) : 0,
    };
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = eChatRoomServerMessageToJSON(message.message));
    message.stringParam !== undefined && (obj.stringParam = message.stringParam);
    message.accountidParam !== undefined && (obj.accountidParam = Math.round(message.accountidParam));
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerMessage>, I>>(base?: I): ServerMessage {
    return ServerMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(object: I): ServerMessage {
    const message = createBaseServerMessage();
    message.message = object.message ?? 0;
    message.stringParam = object.stringParam ?? "";
    message.accountidParam = object.accountidParam ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetMessageHistoryResponse(): CChatRoomGetMessageHistoryResponse {
  return { messages: [], moreAvailable: false };
}

export const CChatRoomGetMessageHistoryResponse = {
  encode(message: CChatRoomGetMessageHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      CChatRoomGetMessageHistoryResponse_ChatMessage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.moreAvailable === true) {
      writer.uint32(32).bool(message.moreAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMessageHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(CChatRoomGetMessageHistoryResponse_ChatMessage.decode(reader, reader.uint32()));
          break;
        case 4:
          message.moreAvailable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageHistoryResponse {
    return {
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CChatRoomGetMessageHistoryResponse_ChatMessage.fromJSON(e))
        : [],
      moreAvailable: isSet(object.moreAvailable) ? Boolean(object.moreAvailable) : false,
    };
  },

  toJSON(message: CChatRoomGetMessageHistoryResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? CChatRoomGetMessageHistoryResponse_ChatMessage.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.moreAvailable !== undefined && (obj.moreAvailable = message.moreAvailable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse>, I>>(
    base?: I,
  ): CChatRoomGetMessageHistoryResponse {
    return CChatRoomGetMessageHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse>, I>>(
    object: I,
  ): CChatRoomGetMessageHistoryResponse {
    const message = createBaseCChatRoomGetMessageHistoryResponse();
    message.messages = object.messages?.map((e) => CChatRoomGetMessageHistoryResponse_ChatMessage.fromPartial(e)) || [];
    message.moreAvailable = object.moreAvailable ?? false;
    return message;
  },
};

function createBaseCChatRoomGetMessageHistoryResponse_ChatMessage(): CChatRoomGetMessageHistoryResponse_ChatMessage {
  return {
    sender: 0,
    serverTimestamp: 0,
    message: "",
    ordinal: 0,
    serverMessage: undefined,
    deleted: false,
    reactions: [],
  };
}

export const CChatRoomGetMessageHistoryResponse_ChatMessage = {
  encode(
    message: CChatRoomGetMessageHistoryResponse_ChatMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== 0) {
      writer.uint32(8).uint32(message.sender);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(16).uint32(message.serverTimestamp);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.ordinal !== 0) {
      writer.uint32(32).uint32(message.ordinal);
    }
    if (message.serverMessage !== undefined) {
      ServerMessage.encode(message.serverMessage, writer.uint32(42).fork()).ldelim();
    }
    if (message.deleted === true) {
      writer.uint32(48).bool(message.deleted);
    }
    for (const v of message.reactions) {
      CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMessageHistoryResponse_ChatMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageHistoryResponse_ChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.uint32();
          break;
        case 2:
          message.serverTimestamp = reader.uint32();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.ordinal = reader.uint32();
          break;
        case 5:
          message.serverMessage = ServerMessage.decode(reader, reader.uint32());
          break;
        case 6:
          message.deleted = reader.bool();
          break;
        case 7:
          message.reactions.push(
            CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageHistoryResponse_ChatMessage {
    return {
      sender: isSet(object.sender) ? Number(object.sender) : 0,
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      serverMessage: isSet(object.serverMessage) ? ServerMessage.fromJSON(object.serverMessage) : undefined,
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomGetMessageHistoryResponse_ChatMessage): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = Math.round(message.sender));
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.message !== undefined && (obj.message = message.message);
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.serverMessage !== undefined &&
      (obj.serverMessage = message.serverMessage ? ServerMessage.toJSON(message.serverMessage) : undefined);
    message.deleted !== undefined && (obj.deleted = message.deleted);
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.toJSON(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse_ChatMessage>, I>>(
    base?: I,
  ): CChatRoomGetMessageHistoryResponse_ChatMessage {
    return CChatRoomGetMessageHistoryResponse_ChatMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse_ChatMessage>, I>>(
    object: I,
  ): CChatRoomGetMessageHistoryResponse_ChatMessage {
    const message = createBaseCChatRoomGetMessageHistoryResponse_ChatMessage();
    message.sender = object.sender ?? 0;
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.message = object.message ?? "";
    message.ordinal = object.ordinal ?? 0;
    message.serverMessage = (object.serverMessage !== undefined && object.serverMessage !== null)
      ? ServerMessage.fromPartial(object.serverMessage)
      : undefined;
    message.deleted = object.deleted ?? false;
    message.reactions =
      object.reactions?.map((e) => CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction(): CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
  return { reactionType: 0, reaction: "", numReactors: 0, hasUserReacted: false };
}

export const CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction = {
  encode(
    message: CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.reactionType !== 0) {
      writer.uint32(8).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(18).string(message.reaction);
    }
    if (message.numReactors !== 0) {
      writer.uint32(24).uint32(message.numReactors);
    }
    if (message.hasUserReacted === true) {
      writer.uint32(32).bool(message.hasUserReacted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactionType = reader.int32() as any;
          break;
        case 2:
          message.reaction = reader.string();
          break;
        case 3:
          message.numReactors = reader.uint32();
          break;
        case 4:
          message.hasUserReacted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
    return {
      reactionType: isSet(object.reactionType) ? eChatRoomMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      numReactors: isSet(object.numReactors) ? Number(object.numReactors) : 0,
      hasUserReacted: isSet(object.hasUserReacted) ? Boolean(object.hasUserReacted) : false,
    };
  },

  toJSON(message: CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction): unknown {
    const obj: any = {};
    message.reactionType !== undefined && (obj.reactionType = eChatRoomMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.numReactors !== undefined && (obj.numReactors = Math.round(message.numReactors));
    message.hasUserReacted !== undefined && (obj.hasUserReacted = message.hasUserReacted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction>, I>>(
    base?: I,
  ): CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
    return CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction>, I>>(
    object: I,
  ): CChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction {
    const message = createBaseCChatRoomGetMessageHistoryResponse_ChatMessage_MessageReaction();
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.numReactors = object.numReactors ?? 0;
    message.hasUserReacted = object.hasUserReacted ?? false;
    return message;
  },
};

function createBaseCChatRoomGetMyChatRoomGroupsRequest(): CChatRoomGetMyChatRoomGroupsRequest {
  return {};
}

export const CChatRoomGetMyChatRoomGroupsRequest = {
  encode(_: CChatRoomGetMyChatRoomGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMyChatRoomGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMyChatRoomGroupsRequest();
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

  fromJSON(_: any): CChatRoomGetMyChatRoomGroupsRequest {
    return {};
  },

  toJSON(_: CChatRoomGetMyChatRoomGroupsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMyChatRoomGroupsRequest>, I>>(
    base?: I,
  ): CChatRoomGetMyChatRoomGroupsRequest {
    return CChatRoomGetMyChatRoomGroupsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMyChatRoomGroupsRequest>, I>>(
    _: I,
  ): CChatRoomGetMyChatRoomGroupsRequest {
    const message = createBaseCChatRoomGetMyChatRoomGroupsRequest();
    return message;
  },
};

function createBaseCChatRoomGetChatRoomGroupSummaryResponse(): CChatRoomGetChatRoomGroupSummaryResponse {
  return {
    chatGroupId: 0,
    chatGroupName: "",
    activeMemberCount: 0,
    activeVoiceMemberCount: 0,
    defaultChatId: 0,
    chatRooms: [],
    clanid: 0,
    chatGroupTagline: "",
    accountidOwner: 0,
    topMembers: [],
    chatGroupAvatarSha: Buffer.alloc(0),
    rank: 0,
    defaultRoleId: 0,
    roleIds: [],
    roleActions: [],
    watchingBroadcastAccountid: 0,
    appid: 0,
    partyBeacons: [],
    watchingBroadcastChannelId: 0,
    activeMinigameId: 0,
    avatarUgcUrl: "",
    disabled: false,
  };
}

export const CChatRoomGetChatRoomGroupSummaryResponse = {
  encode(message: CChatRoomGetChatRoomGroupSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatGroupName !== "") {
      writer.uint32(18).string(message.chatGroupName);
    }
    if (message.activeMemberCount !== 0) {
      writer.uint32(24).uint32(message.activeMemberCount);
    }
    if (message.activeVoiceMemberCount !== 0) {
      writer.uint32(32).uint32(message.activeVoiceMemberCount);
    }
    if (message.defaultChatId !== 0) {
      writer.uint32(40).uint64(message.defaultChatId);
    }
    for (const v of message.chatRooms) {
      CChatRoomState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.clanid !== 0) {
      writer.uint32(56).uint32(message.clanid);
    }
    if (message.chatGroupTagline !== "") {
      writer.uint32(66).string(message.chatGroupTagline);
    }
    if (message.accountidOwner !== 0) {
      writer.uint32(72).uint32(message.accountidOwner);
    }
    writer.uint32(82).fork();
    for (const v of message.topMembers) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.chatGroupAvatarSha.length !== 0) {
      writer.uint32(90).bytes(message.chatGroupAvatarSha);
    }
    if (message.rank !== 0) {
      writer.uint32(96).int32(message.rank);
    }
    if (message.defaultRoleId !== 0) {
      writer.uint32(104).uint64(message.defaultRoleId);
    }
    writer.uint32(114).fork();
    for (const v of message.roleIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.roleActions) {
      CChatRoleActions.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.watchingBroadcastAccountid !== 0) {
      writer.uint32(128).uint32(message.watchingBroadcastAccountid);
    }
    if (message.appid !== 0) {
      writer.uint32(136).uint32(message.appid);
    }
    for (const v of message.partyBeacons) {
      CChatPartyBeacon.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.watchingBroadcastChannelId !== 0) {
      writer.uint32(152).uint64(message.watchingBroadcastChannelId);
    }
    if (message.activeMinigameId !== 0) {
      writer.uint32(160).uint64(message.activeMinigameId);
    }
    if (message.avatarUgcUrl !== "") {
      writer.uint32(170).string(message.avatarUgcUrl);
    }
    if (message.disabled === true) {
      writer.uint32(176).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetChatRoomGroupSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetChatRoomGroupSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatGroupName = reader.string();
          break;
        case 3:
          message.activeMemberCount = reader.uint32();
          break;
        case 4:
          message.activeVoiceMemberCount = reader.uint32();
          break;
        case 5:
          message.defaultChatId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.chatRooms.push(CChatRoomState.decode(reader, reader.uint32()));
          break;
        case 7:
          message.clanid = reader.uint32();
          break;
        case 8:
          message.chatGroupTagline = reader.string();
          break;
        case 9:
          message.accountidOwner = reader.uint32();
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.topMembers.push(reader.uint32());
            }
          } else {
            message.topMembers.push(reader.uint32());
          }
          break;
        case 11:
          message.chatGroupAvatarSha = reader.bytes() as Buffer;
          break;
        case 12:
          message.rank = reader.int32() as any;
          break;
        case 13:
          message.defaultRoleId = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.roleIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 15:
          message.roleActions.push(CChatRoleActions.decode(reader, reader.uint32()));
          break;
        case 16:
          message.watchingBroadcastAccountid = reader.uint32();
          break;
        case 17:
          message.appid = reader.uint32();
          break;
        case 18:
          message.partyBeacons.push(CChatPartyBeacon.decode(reader, reader.uint32()));
          break;
        case 19:
          message.watchingBroadcastChannelId = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.activeMinigameId = longToNumber(reader.uint64() as Long);
          break;
        case 21:
          message.avatarUgcUrl = reader.string();
          break;
        case 22:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetChatRoomGroupSummaryResponse {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatGroupName: isSet(object.chatGroupName) ? String(object.chatGroupName) : "",
      activeMemberCount: isSet(object.activeMemberCount) ? Number(object.activeMemberCount) : 0,
      activeVoiceMemberCount: isSet(object.activeVoiceMemberCount) ? Number(object.activeVoiceMemberCount) : 0,
      defaultChatId: isSet(object.defaultChatId) ? Number(object.defaultChatId) : 0,
      chatRooms: Array.isArray(object?.chatRooms) ? object.chatRooms.map((e: any) => CChatRoomState.fromJSON(e)) : [],
      clanid: isSet(object.clanid) ? Number(object.clanid) : 0,
      chatGroupTagline: isSet(object.chatGroupTagline) ? String(object.chatGroupTagline) : "",
      accountidOwner: isSet(object.accountidOwner) ? Number(object.accountidOwner) : 0,
      topMembers: Array.isArray(object?.topMembers) ? object.topMembers.map((e: any) => Number(e)) : [],
      chatGroupAvatarSha: isSet(object.chatGroupAvatarSha)
        ? Buffer.from(bytesFromBase64(object.chatGroupAvatarSha))
        : Buffer.alloc(0),
      rank: isSet(object.rank) ? eChatRoomGroupRankFromJSON(object.rank) : 0,
      defaultRoleId: isSet(object.defaultRoleId) ? Number(object.defaultRoleId) : 0,
      roleIds: Array.isArray(object?.roleIds) ? object.roleIds.map((e: any) => Number(e)) : [],
      roleActions: Array.isArray(object?.roleActions)
        ? object.roleActions.map((e: any) => CChatRoleActions.fromJSON(e))
        : [],
      watchingBroadcastAccountid: isSet(object.watchingBroadcastAccountid)
        ? Number(object.watchingBroadcastAccountid)
        : 0,
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      partyBeacons: Array.isArray(object?.partyBeacons)
        ? object.partyBeacons.map((e: any) => CChatPartyBeacon.fromJSON(e))
        : [],
      watchingBroadcastChannelId: isSet(object.watchingBroadcastChannelId)
        ? Number(object.watchingBroadcastChannelId)
        : 0,
      activeMinigameId: isSet(object.activeMinigameId) ? Number(object.activeMinigameId) : 0,
      avatarUgcUrl: isSet(object.avatarUgcUrl) ? String(object.avatarUgcUrl) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
    };
  },

  toJSON(message: CChatRoomGetChatRoomGroupSummaryResponse): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatGroupName !== undefined && (obj.chatGroupName = message.chatGroupName);
    message.activeMemberCount !== undefined && (obj.activeMemberCount = Math.round(message.activeMemberCount));
    message.activeVoiceMemberCount !== undefined &&
      (obj.activeVoiceMemberCount = Math.round(message.activeVoiceMemberCount));
    message.defaultChatId !== undefined && (obj.defaultChatId = Math.round(message.defaultChatId));
    if (message.chatRooms) {
      obj.chatRooms = message.chatRooms.map((e) => e ? CChatRoomState.toJSON(e) : undefined);
    } else {
      obj.chatRooms = [];
    }
    message.clanid !== undefined && (obj.clanid = Math.round(message.clanid));
    message.chatGroupTagline !== undefined && (obj.chatGroupTagline = message.chatGroupTagline);
    message.accountidOwner !== undefined && (obj.accountidOwner = Math.round(message.accountidOwner));
    if (message.topMembers) {
      obj.topMembers = message.topMembers.map((e) => Math.round(e));
    } else {
      obj.topMembers = [];
    }
    message.chatGroupAvatarSha !== undefined &&
      (obj.chatGroupAvatarSha = base64FromBytes(
        message.chatGroupAvatarSha !== undefined ? message.chatGroupAvatarSha : Buffer.alloc(0),
      ));
    message.rank !== undefined && (obj.rank = eChatRoomGroupRankToJSON(message.rank));
    message.defaultRoleId !== undefined && (obj.defaultRoleId = Math.round(message.defaultRoleId));
    if (message.roleIds) {
      obj.roleIds = message.roleIds.map((e) => Math.round(e));
    } else {
      obj.roleIds = [];
    }
    if (message.roleActions) {
      obj.roleActions = message.roleActions.map((e) => e ? CChatRoleActions.toJSON(e) : undefined);
    } else {
      obj.roleActions = [];
    }
    message.watchingBroadcastAccountid !== undefined &&
      (obj.watchingBroadcastAccountid = Math.round(message.watchingBroadcastAccountid));
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    if (message.partyBeacons) {
      obj.partyBeacons = message.partyBeacons.map((e) => e ? CChatPartyBeacon.toJSON(e) : undefined);
    } else {
      obj.partyBeacons = [];
    }
    message.watchingBroadcastChannelId !== undefined &&
      (obj.watchingBroadcastChannelId = Math.round(message.watchingBroadcastChannelId));
    message.activeMinigameId !== undefined && (obj.activeMinigameId = Math.round(message.activeMinigameId));
    message.avatarUgcUrl !== undefined && (obj.avatarUgcUrl = message.avatarUgcUrl);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupSummaryResponse>, I>>(
    base?: I,
  ): CChatRoomGetChatRoomGroupSummaryResponse {
    return CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupSummaryResponse>, I>>(
    object: I,
  ): CChatRoomGetChatRoomGroupSummaryResponse {
    const message = createBaseCChatRoomGetChatRoomGroupSummaryResponse();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatGroupName = object.chatGroupName ?? "";
    message.activeMemberCount = object.activeMemberCount ?? 0;
    message.activeVoiceMemberCount = object.activeVoiceMemberCount ?? 0;
    message.defaultChatId = object.defaultChatId ?? 0;
    message.chatRooms = object.chatRooms?.map((e) => CChatRoomState.fromPartial(e)) || [];
    message.clanid = object.clanid ?? 0;
    message.chatGroupTagline = object.chatGroupTagline ?? "";
    message.accountidOwner = object.accountidOwner ?? 0;
    message.topMembers = object.topMembers?.map((e) => e) || [];
    message.chatGroupAvatarSha = object.chatGroupAvatarSha ?? Buffer.alloc(0);
    message.rank = object.rank ?? 0;
    message.defaultRoleId = object.defaultRoleId ?? 0;
    message.roleIds = object.roleIds?.map((e) => e) || [];
    message.roleActions = object.roleActions?.map((e) => CChatRoleActions.fromPartial(e)) || [];
    message.watchingBroadcastAccountid = object.watchingBroadcastAccountid ?? 0;
    message.appid = object.appid ?? 0;
    message.partyBeacons = object.partyBeacons?.map((e) => CChatPartyBeacon.fromPartial(e)) || [];
    message.watchingBroadcastChannelId = object.watchingBroadcastChannelId ?? 0;
    message.activeMinigameId = object.activeMinigameId ?? 0;
    message.avatarUgcUrl = object.avatarUgcUrl ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

function createBaseCChatRoomSummaryPair(): CChatRoomSummaryPair {
  return { userChatGroupState: undefined, groupSummary: undefined };
}

export const CChatRoomSummaryPair = {
  encode(message: CChatRoomSummaryPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userChatGroupState !== undefined) {
      CUserChatRoomGroupState.encode(message.userChatGroupState, writer.uint32(10).fork()).ldelim();
    }
    if (message.groupSummary !== undefined) {
      CChatRoomGetChatRoomGroupSummaryResponse.encode(message.groupSummary, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSummaryPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSummaryPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userChatGroupState = CUserChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 2:
          message.groupSummary = CChatRoomGetChatRoomGroupSummaryResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSummaryPair {
    return {
      userChatGroupState: isSet(object.userChatGroupState)
        ? CUserChatRoomGroupState.fromJSON(object.userChatGroupState)
        : undefined,
      groupSummary: isSet(object.groupSummary)
        ? CChatRoomGetChatRoomGroupSummaryResponse.fromJSON(object.groupSummary)
        : undefined,
    };
  },

  toJSON(message: CChatRoomSummaryPair): unknown {
    const obj: any = {};
    message.userChatGroupState !== undefined && (obj.userChatGroupState = message.userChatGroupState
      ? CUserChatRoomGroupState.toJSON(message.userChatGroupState)
      : undefined);
    message.groupSummary !== undefined && (obj.groupSummary = message.groupSummary
      ? CChatRoomGetChatRoomGroupSummaryResponse.toJSON(message.groupSummary)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSummaryPair>, I>>(base?: I): CChatRoomSummaryPair {
    return CChatRoomSummaryPair.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSummaryPair>, I>>(object: I): CChatRoomSummaryPair {
    const message = createBaseCChatRoomSummaryPair();
    message.userChatGroupState = (object.userChatGroupState !== undefined && object.userChatGroupState !== null)
      ? CUserChatRoomGroupState.fromPartial(object.userChatGroupState)
      : undefined;
    message.groupSummary = (object.groupSummary !== undefined && object.groupSummary !== null)
      ? CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(object.groupSummary)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomGetMyChatRoomGroupsResponse(): CChatRoomGetMyChatRoomGroupsResponse {
  return { chatRoomGroups: [] };
}

export const CChatRoomGetMyChatRoomGroupsResponse = {
  encode(message: CChatRoomGetMyChatRoomGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chatRoomGroups) {
      CChatRoomSummaryPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMyChatRoomGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMyChatRoomGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatRoomGroups.push(CChatRoomSummaryPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMyChatRoomGroupsResponse {
    return {
      chatRoomGroups: Array.isArray(object?.chatRoomGroups)
        ? object.chatRoomGroups.map((e: any) => CChatRoomSummaryPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomGetMyChatRoomGroupsResponse): unknown {
    const obj: any = {};
    if (message.chatRoomGroups) {
      obj.chatRoomGroups = message.chatRoomGroups.map((e) => e ? CChatRoomSummaryPair.toJSON(e) : undefined);
    } else {
      obj.chatRoomGroups = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMyChatRoomGroupsResponse>, I>>(
    base?: I,
  ): CChatRoomGetMyChatRoomGroupsResponse {
    return CChatRoomGetMyChatRoomGroupsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMyChatRoomGroupsResponse>, I>>(
    object: I,
  ): CChatRoomGetMyChatRoomGroupsResponse {
    const message = createBaseCChatRoomGetMyChatRoomGroupsResponse();
    message.chatRoomGroups = object.chatRoomGroups?.map((e) => CChatRoomSummaryPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomGetChatRoomGroupStateRequest(): CChatRoomGetChatRoomGroupStateRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetChatRoomGroupStateRequest = {
  encode(message: CChatRoomGetChatRoomGroupStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetChatRoomGroupStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetChatRoomGroupStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetChatRoomGroupStateRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetChatRoomGroupStateRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupStateRequest>, I>>(
    base?: I,
  ): CChatRoomGetChatRoomGroupStateRequest {
    return CChatRoomGetChatRoomGroupStateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupStateRequest>, I>>(
    object: I,
  ): CChatRoomGetChatRoomGroupStateRequest {
    const message = createBaseCChatRoomGetChatRoomGroupStateRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetChatRoomGroupStateResponse(): CChatRoomGetChatRoomGroupStateResponse {
  return { state: undefined };
}

export const CChatRoomGetChatRoomGroupStateResponse = {
  encode(message: CChatRoomGetChatRoomGroupStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      CChatRoomGroupState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetChatRoomGroupStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetChatRoomGroupStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = CChatRoomGroupState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetChatRoomGroupStateResponse {
    return { state: isSet(object.state) ? CChatRoomGroupState.fromJSON(object.state) : undefined };
  },

  toJSON(message: CChatRoomGetChatRoomGroupStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? CChatRoomGroupState.toJSON(message.state) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupStateResponse>, I>>(
    base?: I,
  ): CChatRoomGetChatRoomGroupStateResponse {
    return CChatRoomGetChatRoomGroupStateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupStateResponse>, I>>(
    object: I,
  ): CChatRoomGetChatRoomGroupStateResponse {
    const message = createBaseCChatRoomGetChatRoomGroupStateResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? CChatRoomGroupState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomGetChatRoomGroupSummaryRequest(): CChatRoomGetChatRoomGroupSummaryRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetChatRoomGroupSummaryRequest = {
  encode(message: CChatRoomGetChatRoomGroupSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetChatRoomGroupSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetChatRoomGroupSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetChatRoomGroupSummaryRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetChatRoomGroupSummaryRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupSummaryRequest>, I>>(
    base?: I,
  ): CChatRoomGetChatRoomGroupSummaryRequest {
    return CChatRoomGetChatRoomGroupSummaryRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetChatRoomGroupSummaryRequest>, I>>(
    object: I,
  ): CChatRoomGetChatRoomGroupSummaryRequest {
    const message = createBaseCChatRoomGetChatRoomGroupSummaryRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomSetAppChatRoomGroupForceActiveRequest(): CChatRoomSetAppChatRoomGroupForceActiveRequest {
  return { chatGroupId: 0, requestingAppId: 0 };
}

export const CChatRoomSetAppChatRoomGroupForceActiveRequest = {
  encode(
    message: CChatRoomSetAppChatRoomGroupForceActiveRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.requestingAppId !== 0) {
      writer.uint32(16).uint32(message.requestingAppId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetAppChatRoomGroupForceActiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetAppChatRoomGroupForceActiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestingAppId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetAppChatRoomGroupForceActiveRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      requestingAppId: isSet(object.requestingAppId) ? Number(object.requestingAppId) : 0,
    };
  },

  toJSON(message: CChatRoomSetAppChatRoomGroupForceActiveRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.requestingAppId !== undefined && (obj.requestingAppId = Math.round(message.requestingAppId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupForceActiveRequest>, I>>(
    base?: I,
  ): CChatRoomSetAppChatRoomGroupForceActiveRequest {
    return CChatRoomSetAppChatRoomGroupForceActiveRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupForceActiveRequest>, I>>(
    object: I,
  ): CChatRoomSetAppChatRoomGroupForceActiveRequest {
    const message = createBaseCChatRoomSetAppChatRoomGroupForceActiveRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.requestingAppId = object.requestingAppId ?? 0;
    return message;
  },
};

function createBaseCChatRoomSetAppChatRoomGroupForceActiveResponse(): CChatRoomSetAppChatRoomGroupForceActiveResponse {
  return { result: 0, accountsInChannel: [] };
}

export const CChatRoomSetAppChatRoomGroupForceActiveResponse = {
  encode(
    message: CChatRoomSetAppChatRoomGroupForceActiveResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.accountsInChannel) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetAppChatRoomGroupForceActiveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetAppChatRoomGroupForceActiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountsInChannel.push(reader.uint32());
            }
          } else {
            message.accountsInChannel.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetAppChatRoomGroupForceActiveResponse {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      accountsInChannel: Array.isArray(object?.accountsInChannel)
        ? object.accountsInChannel.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CChatRoomSetAppChatRoomGroupForceActiveResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    if (message.accountsInChannel) {
      obj.accountsInChannel = message.accountsInChannel.map((e) => Math.round(e));
    } else {
      obj.accountsInChannel = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupForceActiveResponse>, I>>(
    base?: I,
  ): CChatRoomSetAppChatRoomGroupForceActiveResponse {
    return CChatRoomSetAppChatRoomGroupForceActiveResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupForceActiveResponse>, I>>(
    object: I,
  ): CChatRoomSetAppChatRoomGroupForceActiveResponse {
    const message = createBaseCChatRoomSetAppChatRoomGroupForceActiveResponse();
    message.result = object.result ?? 0;
    message.accountsInChannel = object.accountsInChannel?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomSetAppChatRoomGroupStopForceActiveNotification(): CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
  return { chatGroupId: 0, requestingAppId: 0 };
}

export const CChatRoomSetAppChatRoomGroupStopForceActiveNotification = {
  encode(
    message: CChatRoomSetAppChatRoomGroupStopForceActiveNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.requestingAppId !== 0) {
      writer.uint32(16).uint32(message.requestingAppId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetAppChatRoomGroupStopForceActiveNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.requestingAppId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      requestingAppId: isSet(object.requestingAppId) ? Number(object.requestingAppId) : 0,
    };
  },

  toJSON(message: CChatRoomSetAppChatRoomGroupStopForceActiveNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.requestingAppId !== undefined && (obj.requestingAppId = Math.round(message.requestingAppId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupStopForceActiveNotification>, I>>(
    base?: I,
  ): CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
    return CChatRoomSetAppChatRoomGroupStopForceActiveNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetAppChatRoomGroupStopForceActiveNotification>, I>>(
    object: I,
  ): CChatRoomSetAppChatRoomGroupStopForceActiveNotification {
    const message = createBaseCChatRoomSetAppChatRoomGroupStopForceActiveNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.requestingAppId = object.requestingAppId ?? 0;
    return message;
  },
};

function createBaseCChatRoomAckChatMessageNotification(): CChatRoomAckChatMessageNotification {
  return { chatGroupId: 0, chatId: 0, timestamp: 0 };
}

export const CChatRoomAckChatMessageNotification = {
  encode(message: CChatRoomAckChatMessageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomAckChatMessageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomAckChatMessageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomAckChatMessageNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CChatRoomAckChatMessageNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomAckChatMessageNotification>, I>>(
    base?: I,
  ): CChatRoomAckChatMessageNotification {
    return CChatRoomAckChatMessageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomAckChatMessageNotification>, I>>(
    object: I,
  ): CChatRoomAckChatMessageNotification {
    const message = createBaseCChatRoomAckChatMessageNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCChatRoomCreateInviteLinkRequest(): CChatRoomCreateInviteLinkRequest {
  return { chatGroupId: 0, secondsValid: 0, chatId: 0 };
}

export const CChatRoomCreateInviteLinkRequest = {
  encode(message: CChatRoomCreateInviteLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.secondsValid !== 0) {
      writer.uint32(16).uint32(message.secondsValid);
    }
    if (message.chatId !== 0) {
      writer.uint32(24).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateInviteLinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateInviteLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.secondsValid = reader.uint32();
          break;
        case 3:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateInviteLinkRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      secondsValid: isSet(object.secondsValid) ? Number(object.secondsValid) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomCreateInviteLinkRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.secondsValid !== undefined && (obj.secondsValid = Math.round(message.secondsValid));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateInviteLinkRequest>, I>>(
    base?: I,
  ): CChatRoomCreateInviteLinkRequest {
    return CChatRoomCreateInviteLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateInviteLinkRequest>, I>>(
    object: I,
  ): CChatRoomCreateInviteLinkRequest {
    const message = createBaseCChatRoomCreateInviteLinkRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.secondsValid = object.secondsValid ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomCreateInviteLinkResponse(): CChatRoomCreateInviteLinkResponse {
  return { inviteCode: "", secondsValid: 0 };
}

export const CChatRoomCreateInviteLinkResponse = {
  encode(message: CChatRoomCreateInviteLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    if (message.secondsValid !== 0) {
      writer.uint32(16).uint32(message.secondsValid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomCreateInviteLinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomCreateInviteLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteCode = reader.string();
          break;
        case 2:
          message.secondsValid = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomCreateInviteLinkResponse {
    return {
      inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "",
      secondsValid: isSet(object.secondsValid) ? Number(object.secondsValid) : 0,
    };
  },

  toJSON(message: CChatRoomCreateInviteLinkResponse): unknown {
    const obj: any = {};
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    message.secondsValid !== undefined && (obj.secondsValid = Math.round(message.secondsValid));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomCreateInviteLinkResponse>, I>>(
    base?: I,
  ): CChatRoomCreateInviteLinkResponse {
    return CChatRoomCreateInviteLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomCreateInviteLinkResponse>, I>>(
    object: I,
  ): CChatRoomCreateInviteLinkResponse {
    const message = createBaseCChatRoomCreateInviteLinkResponse();
    message.inviteCode = object.inviteCode ?? "";
    message.secondsValid = object.secondsValid ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetInviteLinkInfoRequest(): CChatRoomGetInviteLinkInfoRequest {
  return { inviteCode: "" };
}

export const CChatRoomGetInviteLinkInfoRequest = {
  encode(message: CChatRoomGetInviteLinkInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteLinkInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteLinkInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteLinkInfoRequest {
    return { inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "" };
  },

  toJSON(message: CChatRoomGetInviteLinkInfoRequest): unknown {
    const obj: any = {};
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteLinkInfoRequest>, I>>(
    base?: I,
  ): CChatRoomGetInviteLinkInfoRequest {
    return CChatRoomGetInviteLinkInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteLinkInfoRequest>, I>>(
    object: I,
  ): CChatRoomGetInviteLinkInfoRequest {
    const message = createBaseCChatRoomGetInviteLinkInfoRequest();
    message.inviteCode = object.inviteCode ?? "";
    return message;
  },
};

function createBaseCChatRoomGetInviteLinkInfoResponse(): CChatRoomGetInviteLinkInfoResponse {
  return {
    steamidSender: 0,
    timeExpires: 0,
    chatId: 0,
    groupSummary: undefined,
    userChatGroupState: undefined,
    timeKickExpire: 0,
    banned: false,
  };
}

export const CChatRoomGetInviteLinkInfoResponse = {
  encode(message: CChatRoomGetInviteLinkInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidSender !== 0) {
      writer.uint32(25).fixed64(message.steamidSender);
    }
    if (message.timeExpires !== 0) {
      writer.uint32(32).uint32(message.timeExpires);
    }
    if (message.chatId !== 0) {
      writer.uint32(48).uint64(message.chatId);
    }
    if (message.groupSummary !== undefined) {
      CChatRoomGetChatRoomGroupSummaryResponse.encode(message.groupSummary, writer.uint32(66).fork()).ldelim();
    }
    if (message.userChatGroupState !== undefined) {
      CUserChatRoomGroupState.encode(message.userChatGroupState, writer.uint32(74).fork()).ldelim();
    }
    if (message.timeKickExpire !== 0) {
      writer.uint32(80).uint32(message.timeKickExpire);
    }
    if (message.banned === true) {
      writer.uint32(88).bool(message.banned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteLinkInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteLinkInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.steamidSender = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.timeExpires = reader.uint32();
          break;
        case 6:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.groupSummary = CChatRoomGetChatRoomGroupSummaryResponse.decode(reader, reader.uint32());
          break;
        case 9:
          message.userChatGroupState = CUserChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 10:
          message.timeKickExpire = reader.uint32();
          break;
        case 11:
          message.banned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteLinkInfoResponse {
    return {
      steamidSender: isSet(object.steamidSender) ? Number(object.steamidSender) : 0,
      timeExpires: isSet(object.timeExpires) ? Number(object.timeExpires) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      groupSummary: isSet(object.groupSummary)
        ? CChatRoomGetChatRoomGroupSummaryResponse.fromJSON(object.groupSummary)
        : undefined,
      userChatGroupState: isSet(object.userChatGroupState)
        ? CUserChatRoomGroupState.fromJSON(object.userChatGroupState)
        : undefined,
      timeKickExpire: isSet(object.timeKickExpire) ? Number(object.timeKickExpire) : 0,
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
    };
  },

  toJSON(message: CChatRoomGetInviteLinkInfoResponse): unknown {
    const obj: any = {};
    message.steamidSender !== undefined && (obj.steamidSender = Math.round(message.steamidSender));
    message.timeExpires !== undefined && (obj.timeExpires = Math.round(message.timeExpires));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.groupSummary !== undefined && (obj.groupSummary = message.groupSummary
      ? CChatRoomGetChatRoomGroupSummaryResponse.toJSON(message.groupSummary)
      : undefined);
    message.userChatGroupState !== undefined && (obj.userChatGroupState = message.userChatGroupState
      ? CUserChatRoomGroupState.toJSON(message.userChatGroupState)
      : undefined);
    message.timeKickExpire !== undefined && (obj.timeKickExpire = Math.round(message.timeKickExpire));
    message.banned !== undefined && (obj.banned = message.banned);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteLinkInfoResponse>, I>>(
    base?: I,
  ): CChatRoomGetInviteLinkInfoResponse {
    return CChatRoomGetInviteLinkInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteLinkInfoResponse>, I>>(
    object: I,
  ): CChatRoomGetInviteLinkInfoResponse {
    const message = createBaseCChatRoomGetInviteLinkInfoResponse();
    message.steamidSender = object.steamidSender ?? 0;
    message.timeExpires = object.timeExpires ?? 0;
    message.chatId = object.chatId ?? 0;
    message.groupSummary = (object.groupSummary !== undefined && object.groupSummary !== null)
      ? CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(object.groupSummary)
      : undefined;
    message.userChatGroupState = (object.userChatGroupState !== undefined && object.userChatGroupState !== null)
      ? CUserChatRoomGroupState.fromPartial(object.userChatGroupState)
      : undefined;
    message.timeKickExpire = object.timeKickExpire ?? 0;
    message.banned = object.banned ?? false;
    return message;
  },
};

function createBaseCChatRoomGetInviteInfoRequest(): CChatRoomGetInviteInfoRequest {
  return { steamidInvitee: 0, chatGroupId: 0, chatId: 0, inviteCode: "" };
}

export const CChatRoomGetInviteInfoRequest = {
  encode(message: CChatRoomGetInviteInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidInvitee !== 0) {
      writer.uint32(9).fixed64(message.steamidInvitee);
    }
    if (message.chatGroupId !== 0) {
      writer.uint32(16).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(24).uint64(message.chatId);
    }
    if (message.inviteCode !== "") {
      writer.uint32(34).string(message.inviteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidInvitee = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.inviteCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteInfoRequest {
    return {
      steamidInvitee: isSet(object.steamidInvitee) ? Number(object.steamidInvitee) : 0,
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "",
    };
  },

  toJSON(message: CChatRoomGetInviteInfoRequest): unknown {
    const obj: any = {};
    message.steamidInvitee !== undefined && (obj.steamidInvitee = Math.round(message.steamidInvitee));
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteInfoRequest>, I>>(base?: I): CChatRoomGetInviteInfoRequest {
    return CChatRoomGetInviteInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteInfoRequest>, I>>(
    object: I,
  ): CChatRoomGetInviteInfoRequest {
    const message = createBaseCChatRoomGetInviteInfoRequest();
    message.steamidInvitee = object.steamidInvitee ?? 0;
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.inviteCode = object.inviteCode ?? "";
    return message;
  },
};

function createBaseCChatRoomGetInviteInfoResponse(): CChatRoomGetInviteInfoResponse {
  return { groupSummary: undefined, timeKickExpire: 0, banned: false };
}

export const CChatRoomGetInviteInfoResponse = {
  encode(message: CChatRoomGetInviteInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupSummary !== undefined) {
      CChatRoomGetChatRoomGroupSummaryResponse.encode(message.groupSummary, writer.uint32(10).fork()).ldelim();
    }
    if (message.timeKickExpire !== 0) {
      writer.uint32(16).uint32(message.timeKickExpire);
    }
    if (message.banned === true) {
      writer.uint32(24).bool(message.banned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupSummary = CChatRoomGetChatRoomGroupSummaryResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.timeKickExpire = reader.uint32();
          break;
        case 3:
          message.banned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteInfoResponse {
    return {
      groupSummary: isSet(object.groupSummary)
        ? CChatRoomGetChatRoomGroupSummaryResponse.fromJSON(object.groupSummary)
        : undefined,
      timeKickExpire: isSet(object.timeKickExpire) ? Number(object.timeKickExpire) : 0,
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
    };
  },

  toJSON(message: CChatRoomGetInviteInfoResponse): unknown {
    const obj: any = {};
    message.groupSummary !== undefined && (obj.groupSummary = message.groupSummary
      ? CChatRoomGetChatRoomGroupSummaryResponse.toJSON(message.groupSummary)
      : undefined);
    message.timeKickExpire !== undefined && (obj.timeKickExpire = Math.round(message.timeKickExpire));
    message.banned !== undefined && (obj.banned = message.banned);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteInfoResponse>, I>>(base?: I): CChatRoomGetInviteInfoResponse {
    return CChatRoomGetInviteInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteInfoResponse>, I>>(
    object: I,
  ): CChatRoomGetInviteInfoResponse {
    const message = createBaseCChatRoomGetInviteInfoResponse();
    message.groupSummary = (object.groupSummary !== undefined && object.groupSummary !== null)
      ? CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(object.groupSummary)
      : undefined;
    message.timeKickExpire = object.timeKickExpire ?? 0;
    message.banned = object.banned ?? false;
    return message;
  },
};

function createBaseCChatRoomGetInviteLinksForGroupRequest(): CChatRoomGetInviteLinksForGroupRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetInviteLinksForGroupRequest = {
  encode(message: CChatRoomGetInviteLinksForGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteLinksForGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteLinksForGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteLinksForGroupRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetInviteLinksForGroupRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupRequest>, I>>(
    base?: I,
  ): CChatRoomGetInviteLinksForGroupRequest {
    return CChatRoomGetInviteLinksForGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupRequest>, I>>(
    object: I,
  ): CChatRoomGetInviteLinksForGroupRequest {
    const message = createBaseCChatRoomGetInviteLinksForGroupRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetInviteLinksForGroupResponse(): CChatRoomGetInviteLinksForGroupResponse {
  return { inviteLinks: [] };
}

export const CChatRoomGetInviteLinksForGroupResponse = {
  encode(message: CChatRoomGetInviteLinksForGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inviteLinks) {
      CChatRoomGetInviteLinksForGroupResponse_LinkInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteLinksForGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteLinksForGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteLinks.push(CChatRoomGetInviteLinksForGroupResponse_LinkInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteLinksForGroupResponse {
    return {
      inviteLinks: Array.isArray(object?.inviteLinks)
        ? object.inviteLinks.map((e: any) => CChatRoomGetInviteLinksForGroupResponse_LinkInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomGetInviteLinksForGroupResponse): unknown {
    const obj: any = {};
    if (message.inviteLinks) {
      obj.inviteLinks = message.inviteLinks.map((e) =>
        e ? CChatRoomGetInviteLinksForGroupResponse_LinkInfo.toJSON(e) : undefined
      );
    } else {
      obj.inviteLinks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupResponse>, I>>(
    base?: I,
  ): CChatRoomGetInviteLinksForGroupResponse {
    return CChatRoomGetInviteLinksForGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupResponse>, I>>(
    object: I,
  ): CChatRoomGetInviteLinksForGroupResponse {
    const message = createBaseCChatRoomGetInviteLinksForGroupResponse();
    message.inviteLinks =
      object.inviteLinks?.map((e) => CChatRoomGetInviteLinksForGroupResponse_LinkInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomGetInviteLinksForGroupResponse_LinkInfo(): CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
  return { inviteCode: "", steamidCreator: 0, timeExpires: 0, chatId: 0 };
}

export const CChatRoomGetInviteLinksForGroupResponse_LinkInfo = {
  encode(
    message: CChatRoomGetInviteLinksForGroupResponse_LinkInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.inviteCode !== "") {
      writer.uint32(10).string(message.inviteCode);
    }
    if (message.steamidCreator !== 0) {
      writer.uint32(17).fixed64(message.steamidCreator);
    }
    if (message.timeExpires !== 0) {
      writer.uint32(24).uint32(message.timeExpires);
    }
    if (message.chatId !== 0) {
      writer.uint32(32).uint64(message.chatId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteLinksForGroupResponse_LinkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inviteCode = reader.string();
          break;
        case 2:
          message.steamidCreator = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.timeExpires = reader.uint32();
          break;
        case 4:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
    return {
      inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "",
      steamidCreator: isSet(object.steamidCreator) ? Number(object.steamidCreator) : 0,
      timeExpires: isSet(object.timeExpires) ? Number(object.timeExpires) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
    };
  },

  toJSON(message: CChatRoomGetInviteLinksForGroupResponse_LinkInfo): unknown {
    const obj: any = {};
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    message.steamidCreator !== undefined && (obj.steamidCreator = Math.round(message.steamidCreator));
    message.timeExpires !== undefined && (obj.timeExpires = Math.round(message.timeExpires));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupResponse_LinkInfo>, I>>(
    base?: I,
  ): CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
    return CChatRoomGetInviteLinksForGroupResponse_LinkInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteLinksForGroupResponse_LinkInfo>, I>>(
    object: I,
  ): CChatRoomGetInviteLinksForGroupResponse_LinkInfo {
    const message = createBaseCChatRoomGetInviteLinksForGroupResponse_LinkInfo();
    message.inviteCode = object.inviteCode ?? "";
    message.steamidCreator = object.steamidCreator ?? 0;
    message.timeExpires = object.timeExpires ?? 0;
    message.chatId = object.chatId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetBanListRequest(): CChatRoomGetBanListRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetBanListRequest = {
  encode(message: CChatRoomGetBanListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetBanListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetBanListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetBanListRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetBanListRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetBanListRequest>, I>>(base?: I): CChatRoomGetBanListRequest {
    return CChatRoomGetBanListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetBanListRequest>, I>>(object: I): CChatRoomGetBanListRequest {
    const message = createBaseCChatRoomGetBanListRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetBanListResponse(): CChatRoomGetBanListResponse {
  return { bans: [] };
}

export const CChatRoomGetBanListResponse = {
  encode(message: CChatRoomGetBanListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bans) {
      CChatRoomGetBanListResponse_BanInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetBanListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetBanListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bans.push(CChatRoomGetBanListResponse_BanInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetBanListResponse {
    return {
      bans: Array.isArray(object?.bans)
        ? object.bans.map((e: any) => CChatRoomGetBanListResponse_BanInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomGetBanListResponse): unknown {
    const obj: any = {};
    if (message.bans) {
      obj.bans = message.bans.map((e) => e ? CChatRoomGetBanListResponse_BanInfo.toJSON(e) : undefined);
    } else {
      obj.bans = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetBanListResponse>, I>>(base?: I): CChatRoomGetBanListResponse {
    return CChatRoomGetBanListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetBanListResponse>, I>>(object: I): CChatRoomGetBanListResponse {
    const message = createBaseCChatRoomGetBanListResponse();
    message.bans = object.bans?.map((e) => CChatRoomGetBanListResponse_BanInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomGetBanListResponse_BanInfo(): CChatRoomGetBanListResponse_BanInfo {
  return { accountid: 0, accountidActor: 0, timeBanned: 0, banReason: "" };
}

export const CChatRoomGetBanListResponse_BanInfo = {
  encode(message: CChatRoomGetBanListResponse_BanInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.accountidActor !== 0) {
      writer.uint32(16).uint32(message.accountidActor);
    }
    if (message.timeBanned !== 0) {
      writer.uint32(24).uint32(message.timeBanned);
    }
    if (message.banReason !== "") {
      writer.uint32(34).string(message.banReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetBanListResponse_BanInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetBanListResponse_BanInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.accountidActor = reader.uint32();
          break;
        case 3:
          message.timeBanned = reader.uint32();
          break;
        case 4:
          message.banReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetBanListResponse_BanInfo {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      accountidActor: isSet(object.accountidActor) ? Number(object.accountidActor) : 0,
      timeBanned: isSet(object.timeBanned) ? Number(object.timeBanned) : 0,
      banReason: isSet(object.banReason) ? String(object.banReason) : "",
    };
  },

  toJSON(message: CChatRoomGetBanListResponse_BanInfo): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.accountidActor !== undefined && (obj.accountidActor = Math.round(message.accountidActor));
    message.timeBanned !== undefined && (obj.timeBanned = Math.round(message.timeBanned));
    message.banReason !== undefined && (obj.banReason = message.banReason);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetBanListResponse_BanInfo>, I>>(
    base?: I,
  ): CChatRoomGetBanListResponse_BanInfo {
    return CChatRoomGetBanListResponse_BanInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetBanListResponse_BanInfo>, I>>(
    object: I,
  ): CChatRoomGetBanListResponse_BanInfo {
    const message = createBaseCChatRoomGetBanListResponse_BanInfo();
    message.accountid = object.accountid ?? 0;
    message.accountidActor = object.accountidActor ?? 0;
    message.timeBanned = object.timeBanned ?? 0;
    message.banReason = object.banReason ?? "";
    return message;
  },
};

function createBaseCChatRoomGetInviteListRequest(): CChatRoomGetInviteListRequest {
  return { chatGroupId: 0 };
}

export const CChatRoomGetInviteListRequest = {
  encode(message: CChatRoomGetInviteListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteListRequest {
    return { chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0 };
  },

  toJSON(message: CChatRoomGetInviteListRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteListRequest>, I>>(base?: I): CChatRoomGetInviteListRequest {
    return CChatRoomGetInviteListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteListRequest>, I>>(
    object: I,
  ): CChatRoomGetInviteListRequest {
    const message = createBaseCChatRoomGetInviteListRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseCChatRoomGroupInvite(): CChatRoomGroupInvite {
  return { accountid: 0, accountidActor: 0, timeInvited: 0 };
}

export const CChatRoomGroupInvite = {
  encode(message: CChatRoomGroupInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).uint32(message.accountid);
    }
    if (message.accountidActor !== 0) {
      writer.uint32(16).uint32(message.accountidActor);
    }
    if (message.timeInvited !== 0) {
      writer.uint32(24).uint32(message.timeInvited);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGroupInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGroupInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.uint32();
          break;
        case 2:
          message.accountidActor = reader.uint32();
          break;
        case 3:
          message.timeInvited = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGroupInvite {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      accountidActor: isSet(object.accountidActor) ? Number(object.accountidActor) : 0,
      timeInvited: isSet(object.timeInvited) ? Number(object.timeInvited) : 0,
    };
  },

  toJSON(message: CChatRoomGroupInvite): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.accountidActor !== undefined && (obj.accountidActor = Math.round(message.accountidActor));
    message.timeInvited !== undefined && (obj.timeInvited = Math.round(message.timeInvited));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGroupInvite>, I>>(base?: I): CChatRoomGroupInvite {
    return CChatRoomGroupInvite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGroupInvite>, I>>(object: I): CChatRoomGroupInvite {
    const message = createBaseCChatRoomGroupInvite();
    message.accountid = object.accountid ?? 0;
    message.accountidActor = object.accountidActor ?? 0;
    message.timeInvited = object.timeInvited ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetInviteListResponse(): CChatRoomGetInviteListResponse {
  return { invites: [] };
}

export const CChatRoomGetInviteListResponse = {
  encode(message: CChatRoomGetInviteListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.invites) {
      CChatRoomGroupInvite.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetInviteListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetInviteListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invites.push(CChatRoomGroupInvite.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetInviteListResponse {
    return {
      invites: Array.isArray(object?.invites) ? object.invites.map((e: any) => CChatRoomGroupInvite.fromJSON(e)) : [],
    };
  },

  toJSON(message: CChatRoomGetInviteListResponse): unknown {
    const obj: any = {};
    if (message.invites) {
      obj.invites = message.invites.map((e) => e ? CChatRoomGroupInvite.toJSON(e) : undefined);
    } else {
      obj.invites = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetInviteListResponse>, I>>(base?: I): CChatRoomGetInviteListResponse {
    return CChatRoomGetInviteListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetInviteListResponse>, I>>(
    object: I,
  ): CChatRoomGetInviteListResponse {
    const message = createBaseCChatRoomGetInviteListResponse();
    message.invites = object.invites?.map((e) => CChatRoomGroupInvite.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomDeleteInviteLinkRequest(): CChatRoomDeleteInviteLinkRequest {
  return { chatGroupId: 0, inviteCode: "" };
}

export const CChatRoomDeleteInviteLinkRequest = {
  encode(message: CChatRoomDeleteInviteLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.inviteCode !== "") {
      writer.uint32(18).string(message.inviteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteInviteLinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteInviteLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.inviteCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteInviteLinkRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      inviteCode: isSet(object.inviteCode) ? String(object.inviteCode) : "",
    };
  },

  toJSON(message: CChatRoomDeleteInviteLinkRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.inviteCode !== undefined && (obj.inviteCode = message.inviteCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteInviteLinkRequest>, I>>(
    base?: I,
  ): CChatRoomDeleteInviteLinkRequest {
    return CChatRoomDeleteInviteLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteInviteLinkRequest>, I>>(
    object: I,
  ): CChatRoomDeleteInviteLinkRequest {
    const message = createBaseCChatRoomDeleteInviteLinkRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.inviteCode = object.inviteCode ?? "";
    return message;
  },
};

function createBaseCChatRoomDeleteInviteLinkResponse(): CChatRoomDeleteInviteLinkResponse {
  return {};
}

export const CChatRoomDeleteInviteLinkResponse = {
  encode(_: CChatRoomDeleteInviteLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteInviteLinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteInviteLinkResponse();
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

  fromJSON(_: any): CChatRoomDeleteInviteLinkResponse {
    return {};
  },

  toJSON(_: CChatRoomDeleteInviteLinkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteInviteLinkResponse>, I>>(
    base?: I,
  ): CChatRoomDeleteInviteLinkResponse {
    return CChatRoomDeleteInviteLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteInviteLinkResponse>, I>>(
    _: I,
  ): CChatRoomDeleteInviteLinkResponse {
    const message = createBaseCChatRoomDeleteInviteLinkResponse();
    return message;
  },
};

function createBaseCChatRoomSetSessionActiveChatRoomGroupsRequest(): CChatRoomSetSessionActiveChatRoomGroupsRequest {
  return { chatGroupIds: [], chatGroupsDataRequested: [], virtualizeMembersThreshold: 0 };
}

export const CChatRoomSetSessionActiveChatRoomGroupsRequest = {
  encode(
    message: CChatRoomSetSessionActiveChatRoomGroupsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.chatGroupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.chatGroupsDataRequested) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.virtualizeMembersThreshold !== 0) {
      writer.uint32(24).int32(message.virtualizeMembersThreshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetSessionActiveChatRoomGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetSessionActiveChatRoomGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.chatGroupIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.chatGroupIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.chatGroupsDataRequested.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.chatGroupsDataRequested.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 3:
          message.virtualizeMembersThreshold = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetSessionActiveChatRoomGroupsRequest {
    return {
      chatGroupIds: Array.isArray(object?.chatGroupIds) ? object.chatGroupIds.map((e: any) => Number(e)) : [],
      chatGroupsDataRequested: Array.isArray(object?.chatGroupsDataRequested)
        ? object.chatGroupsDataRequested.map((e: any) => Number(e))
        : [],
      virtualizeMembersThreshold: isSet(object.virtualizeMembersThreshold)
        ? Number(object.virtualizeMembersThreshold)
        : 0,
    };
  },

  toJSON(message: CChatRoomSetSessionActiveChatRoomGroupsRequest): unknown {
    const obj: any = {};
    if (message.chatGroupIds) {
      obj.chatGroupIds = message.chatGroupIds.map((e) => Math.round(e));
    } else {
      obj.chatGroupIds = [];
    }
    if (message.chatGroupsDataRequested) {
      obj.chatGroupsDataRequested = message.chatGroupsDataRequested.map((e) => Math.round(e));
    } else {
      obj.chatGroupsDataRequested = [];
    }
    message.virtualizeMembersThreshold !== undefined &&
      (obj.virtualizeMembersThreshold = Math.round(message.virtualizeMembersThreshold));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetSessionActiveChatRoomGroupsRequest>, I>>(
    base?: I,
  ): CChatRoomSetSessionActiveChatRoomGroupsRequest {
    return CChatRoomSetSessionActiveChatRoomGroupsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetSessionActiveChatRoomGroupsRequest>, I>>(
    object: I,
  ): CChatRoomSetSessionActiveChatRoomGroupsRequest {
    const message = createBaseCChatRoomSetSessionActiveChatRoomGroupsRequest();
    message.chatGroupIds = object.chatGroupIds?.map((e) => e) || [];
    message.chatGroupsDataRequested = object.chatGroupsDataRequested?.map((e) => e) || [];
    message.virtualizeMembersThreshold = object.virtualizeMembersThreshold ?? 0;
    return message;
  },
};

function createBaseCChatRoomSetSessionActiveChatRoomGroupsResponse(): CChatRoomSetSessionActiveChatRoomGroupsResponse {
  return { chatStates: [], virtualizeMembersChatGroupIds: [] };
}

export const CChatRoomSetSessionActiveChatRoomGroupsResponse = {
  encode(
    message: CChatRoomSetSessionActiveChatRoomGroupsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.chatStates) {
      CChatRoomGroupState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.virtualizeMembersChatGroupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetSessionActiveChatRoomGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetSessionActiveChatRoomGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatStates.push(CChatRoomGroupState.decode(reader, reader.uint32()));
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.virtualizeMembersChatGroupIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.virtualizeMembersChatGroupIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetSessionActiveChatRoomGroupsResponse {
    return {
      chatStates: Array.isArray(object?.chatStates)
        ? object.chatStates.map((e: any) => CChatRoomGroupState.fromJSON(e))
        : [],
      virtualizeMembersChatGroupIds: Array.isArray(object?.virtualizeMembersChatGroupIds)
        ? object.virtualizeMembersChatGroupIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CChatRoomSetSessionActiveChatRoomGroupsResponse): unknown {
    const obj: any = {};
    if (message.chatStates) {
      obj.chatStates = message.chatStates.map((e) => e ? CChatRoomGroupState.toJSON(e) : undefined);
    } else {
      obj.chatStates = [];
    }
    if (message.virtualizeMembersChatGroupIds) {
      obj.virtualizeMembersChatGroupIds = message.virtualizeMembersChatGroupIds.map((e) => Math.round(e));
    } else {
      obj.virtualizeMembersChatGroupIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetSessionActiveChatRoomGroupsResponse>, I>>(
    base?: I,
  ): CChatRoomSetSessionActiveChatRoomGroupsResponse {
    return CChatRoomSetSessionActiveChatRoomGroupsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetSessionActiveChatRoomGroupsResponse>, I>>(
    object: I,
  ): CChatRoomSetSessionActiveChatRoomGroupsResponse {
    const message = createBaseCChatRoomSetSessionActiveChatRoomGroupsResponse();
    message.chatStates = object.chatStates?.map((e) => CChatRoomGroupState.fromPartial(e)) || [];
    message.virtualizeMembersChatGroupIds = object.virtualizeMembersChatGroupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomSetUserChatGroupPreferencesRequest(): CChatRoomSetUserChatGroupPreferencesRequest {
  return { chatGroupId: 0, chatGroupPreferences: undefined, chatRoomPreferences: [] };
}

export const CChatRoomSetUserChatGroupPreferencesRequest = {
  encode(message: CChatRoomSetUserChatGroupPreferencesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatGroupPreferences !== undefined) {
      CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.encode(
        message.chatGroupPreferences,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.chatRoomPreferences) {
      CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetUserChatGroupPreferencesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatGroupPreferences = CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.chatRoomPreferences.push(
            CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetUserChatGroupPreferencesRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatGroupPreferences: isSet(object.chatGroupPreferences)
        ? CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.fromJSON(object.chatGroupPreferences)
        : undefined,
      chatRoomPreferences: Array.isArray(object?.chatRoomPreferences)
        ? object.chatRoomPreferences.map((e: any) =>
          CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CChatRoomSetUserChatGroupPreferencesRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatGroupPreferences !== undefined && (obj.chatGroupPreferences = message.chatGroupPreferences
      ? CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.toJSON(message.chatGroupPreferences)
      : undefined);
    if (message.chatRoomPreferences) {
      obj.chatRoomPreferences = message.chatRoomPreferences.map((e) =>
        e ? CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.toJSON(e) : undefined
      );
    } else {
      obj.chatRoomPreferences = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest>, I>>(
    base?: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest {
    return CChatRoomSetUserChatGroupPreferencesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest>, I>>(
    object: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest {
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatGroupPreferences = (object.chatGroupPreferences !== undefined && object.chatGroupPreferences !== null)
      ? CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.fromPartial(object.chatGroupPreferences)
      : undefined;
    message.chatRoomPreferences =
      object.chatRoomPreferences?.map((e) =>
        CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences(): CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
  return { desktopNotificationLevel: 0, mobileNotificationLevel: 0, unreadIndicatorMuted: false };
}

export const CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences = {
  encode(
    message: CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.desktopNotificationLevel !== 0) {
      writer.uint32(8).int32(message.desktopNotificationLevel);
    }
    if (message.mobileNotificationLevel !== 0) {
      writer.uint32(16).int32(message.mobileNotificationLevel);
    }
    if (message.unreadIndicatorMuted === true) {
      writer.uint32(24).bool(message.unreadIndicatorMuted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desktopNotificationLevel = reader.int32() as any;
          break;
        case 2:
          message.mobileNotificationLevel = reader.int32() as any;
          break;
        case 3:
          message.unreadIndicatorMuted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
    return {
      desktopNotificationLevel: isSet(object.desktopNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.desktopNotificationLevel)
        : 0,
      mobileNotificationLevel: isSet(object.mobileNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.mobileNotificationLevel)
        : 0,
      unreadIndicatorMuted: isSet(object.unreadIndicatorMuted) ? Boolean(object.unreadIndicatorMuted) : false,
    };
  },

  toJSON(message: CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences): unknown {
    const obj: any = {};
    message.desktopNotificationLevel !== undefined &&
      (obj.desktopNotificationLevel = eChatRoomNotificationLevelToJSON(message.desktopNotificationLevel));
    message.mobileNotificationLevel !== undefined &&
      (obj.mobileNotificationLevel = eChatRoomNotificationLevelToJSON(message.mobileNotificationLevel));
    message.unreadIndicatorMuted !== undefined && (obj.unreadIndicatorMuted = message.unreadIndicatorMuted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences>, I>>(
    base?: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
    return CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences>, I>>(
    object: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences {
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatGroupPreferences();
    message.desktopNotificationLevel = object.desktopNotificationLevel ?? 0;
    message.mobileNotificationLevel = object.mobileNotificationLevel ?? 0;
    message.unreadIndicatorMuted = object.unreadIndicatorMuted ?? false;
    return message;
  },
};

function createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences(): CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
  return { chatId: 0, desktopNotificationLevel: 0, mobileNotificationLevel: 0, unreadIndicatorMuted: false };
}

export const CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences = {
  encode(
    message: CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatId !== 0) {
      writer.uint32(8).uint64(message.chatId);
    }
    if (message.desktopNotificationLevel !== 0) {
      writer.uint32(16).int32(message.desktopNotificationLevel);
    }
    if (message.mobileNotificationLevel !== 0) {
      writer.uint32(24).int32(message.mobileNotificationLevel);
    }
    if (message.unreadIndicatorMuted === true) {
      writer.uint32(32).bool(message.unreadIndicatorMuted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.desktopNotificationLevel = reader.int32() as any;
          break;
        case 3:
          message.mobileNotificationLevel = reader.int32() as any;
          break;
        case 4:
          message.unreadIndicatorMuted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
    return {
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      desktopNotificationLevel: isSet(object.desktopNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.desktopNotificationLevel)
        : 0,
      mobileNotificationLevel: isSet(object.mobileNotificationLevel)
        ? eChatRoomNotificationLevelFromJSON(object.mobileNotificationLevel)
        : 0,
      unreadIndicatorMuted: isSet(object.unreadIndicatorMuted) ? Boolean(object.unreadIndicatorMuted) : false,
    };
  },

  toJSON(message: CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.desktopNotificationLevel !== undefined &&
      (obj.desktopNotificationLevel = eChatRoomNotificationLevelToJSON(message.desktopNotificationLevel));
    message.mobileNotificationLevel !== undefined &&
      (obj.mobileNotificationLevel = eChatRoomNotificationLevelToJSON(message.mobileNotificationLevel));
    message.unreadIndicatorMuted !== undefined && (obj.unreadIndicatorMuted = message.unreadIndicatorMuted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences>, I>>(
    base?: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
    return CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences>, I>>(
    object: I,
  ): CChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences {
    const message = createBaseCChatRoomSetUserChatGroupPreferencesRequest_ChatRoomPreferences();
    message.chatId = object.chatId ?? 0;
    message.desktopNotificationLevel = object.desktopNotificationLevel ?? 0;
    message.mobileNotificationLevel = object.mobileNotificationLevel ?? 0;
    message.unreadIndicatorMuted = object.unreadIndicatorMuted ?? false;
    return message;
  },
};

function createBaseCChatRoomSetUserChatGroupPreferencesResponse(): CChatRoomSetUserChatGroupPreferencesResponse {
  return {};
}

export const CChatRoomSetUserChatGroupPreferencesResponse = {
  encode(_: CChatRoomSetUserChatGroupPreferencesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSetUserChatGroupPreferencesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSetUserChatGroupPreferencesResponse();
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

  fromJSON(_: any): CChatRoomSetUserChatGroupPreferencesResponse {
    return {};
  },

  toJSON(_: CChatRoomSetUserChatGroupPreferencesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesResponse>, I>>(
    base?: I,
  ): CChatRoomSetUserChatGroupPreferencesResponse {
    return CChatRoomSetUserChatGroupPreferencesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSetUserChatGroupPreferencesResponse>, I>>(
    _: I,
  ): CChatRoomSetUserChatGroupPreferencesResponse {
    const message = createBaseCChatRoomSetUserChatGroupPreferencesResponse();
    return message;
  },
};

function createBaseCChatRoomDeleteChatMessagesRequest(): CChatRoomDeleteChatMessagesRequest {
  return { chatGroupId: 0, chatId: 0, messages: [] };
}

export const CChatRoomDeleteChatMessagesRequest = {
  encode(message: CChatRoomDeleteChatMessagesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    for (const v of message.messages) {
      CChatRoomDeleteChatMessagesRequest_Message.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteChatMessagesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteChatMessagesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.messages.push(CChatRoomDeleteChatMessagesRequest_Message.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteChatMessagesRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CChatRoomDeleteChatMessagesRequest_Message.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomDeleteChatMessagesRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    if (message.messages) {
      obj.messages = message.messages.map((e) => e ? CChatRoomDeleteChatMessagesRequest_Message.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesRequest>, I>>(
    base?: I,
  ): CChatRoomDeleteChatMessagesRequest {
    return CChatRoomDeleteChatMessagesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesRequest>, I>>(
    object: I,
  ): CChatRoomDeleteChatMessagesRequest {
    const message = createBaseCChatRoomDeleteChatMessagesRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.messages = object.messages?.map((e) => CChatRoomDeleteChatMessagesRequest_Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomDeleteChatMessagesRequest_Message(): CChatRoomDeleteChatMessagesRequest_Message {
  return { serverTimestamp: 0, ordinal: 0 };
}

export const CChatRoomDeleteChatMessagesRequest_Message = {
  encode(message: CChatRoomDeleteChatMessagesRequest_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverTimestamp !== 0) {
      writer.uint32(8).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(16).uint32(message.ordinal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteChatMessagesRequest_Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteChatMessagesRequest_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverTimestamp = reader.uint32();
          break;
        case 2:
          message.ordinal = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomDeleteChatMessagesRequest_Message {
    return {
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
    };
  },

  toJSON(message: CChatRoomDeleteChatMessagesRequest_Message): unknown {
    const obj: any = {};
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesRequest_Message>, I>>(
    base?: I,
  ): CChatRoomDeleteChatMessagesRequest_Message {
    return CChatRoomDeleteChatMessagesRequest_Message.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesRequest_Message>, I>>(
    object: I,
  ): CChatRoomDeleteChatMessagesRequest_Message {
    const message = createBaseCChatRoomDeleteChatMessagesRequest_Message();
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    return message;
  },
};

function createBaseCChatRoomDeleteChatMessagesResponse(): CChatRoomDeleteChatMessagesResponse {
  return {};
}

export const CChatRoomDeleteChatMessagesResponse = {
  encode(_: CChatRoomDeleteChatMessagesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomDeleteChatMessagesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomDeleteChatMessagesResponse();
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

  fromJSON(_: any): CChatRoomDeleteChatMessagesResponse {
    return {};
  },

  toJSON(_: CChatRoomDeleteChatMessagesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesResponse>, I>>(
    base?: I,
  ): CChatRoomDeleteChatMessagesResponse {
    return CChatRoomDeleteChatMessagesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomDeleteChatMessagesResponse>, I>>(
    _: I,
  ): CChatRoomDeleteChatMessagesResponse {
    const message = createBaseCChatRoomDeleteChatMessagesResponse();
    return message;
  },
};

function createBaseCChatRoomUpdateMemberListViewNotification(): CChatRoomUpdateMemberListViewNotification {
  return {
    chatGroupId: 0,
    viewId: 0,
    start: 0,
    end: 0,
    clientChangenumber: 0,
    deleteView: false,
    personaSubscribeAccountids: [],
    personaUnsubscribeAccountids: [],
  };
}

export const CChatRoomUpdateMemberListViewNotification = {
  encode(message: CChatRoomUpdateMemberListViewNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.viewId !== 0) {
      writer.uint32(16).uint64(message.viewId);
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.clientChangenumber !== 0) {
      writer.uint32(40).int32(message.clientChangenumber);
    }
    if (message.deleteView === true) {
      writer.uint32(48).bool(message.deleteView);
    }
    writer.uint32(58).fork();
    for (const v of message.personaSubscribeAccountids) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.personaUnsubscribeAccountids) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomUpdateMemberListViewNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomUpdateMemberListViewNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.viewId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.clientChangenumber = reader.int32();
          break;
        case 6:
          message.deleteView = reader.bool();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.personaSubscribeAccountids.push(reader.int32());
            }
          } else {
            message.personaSubscribeAccountids.push(reader.int32());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.personaUnsubscribeAccountids.push(reader.int32());
            }
          } else {
            message.personaUnsubscribeAccountids.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomUpdateMemberListViewNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      viewId: isSet(object.viewId) ? Number(object.viewId) : 0,
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      clientChangenumber: isSet(object.clientChangenumber) ? Number(object.clientChangenumber) : 0,
      deleteView: isSet(object.deleteView) ? Boolean(object.deleteView) : false,
      personaSubscribeAccountids: Array.isArray(object?.personaSubscribeAccountids)
        ? object.personaSubscribeAccountids.map((e: any) => Number(e))
        : [],
      personaUnsubscribeAccountids: Array.isArray(object?.personaUnsubscribeAccountids)
        ? object.personaUnsubscribeAccountids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CChatRoomUpdateMemberListViewNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.viewId !== undefined && (obj.viewId = Math.round(message.viewId));
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.clientChangenumber !== undefined && (obj.clientChangenumber = Math.round(message.clientChangenumber));
    message.deleteView !== undefined && (obj.deleteView = message.deleteView);
    if (message.personaSubscribeAccountids) {
      obj.personaSubscribeAccountids = message.personaSubscribeAccountids.map((e) => Math.round(e));
    } else {
      obj.personaSubscribeAccountids = [];
    }
    if (message.personaUnsubscribeAccountids) {
      obj.personaUnsubscribeAccountids = message.personaUnsubscribeAccountids.map((e) => Math.round(e));
    } else {
      obj.personaUnsubscribeAccountids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomUpdateMemberListViewNotification>, I>>(
    base?: I,
  ): CChatRoomUpdateMemberListViewNotification {
    return CChatRoomUpdateMemberListViewNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomUpdateMemberListViewNotification>, I>>(
    object: I,
  ): CChatRoomUpdateMemberListViewNotification {
    const message = createBaseCChatRoomUpdateMemberListViewNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.viewId = object.viewId ?? 0;
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.clientChangenumber = object.clientChangenumber ?? 0;
    message.deleteView = object.deleteView ?? false;
    message.personaSubscribeAccountids = object.personaSubscribeAccountids?.map((e) => e) || [];
    message.personaUnsubscribeAccountids = object.personaUnsubscribeAccountids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomSearchMembersRequest(): CChatRoomSearchMembersRequest {
  return { chatGroupId: 0, searchId: 0, searchText: "", maxResults: 0 };
}

export const CChatRoomSearchMembersRequest = {
  encode(message: CChatRoomSearchMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.searchId !== 0) {
      writer.uint32(16).uint64(message.searchId);
    }
    if (message.searchText !== "") {
      writer.uint32(26).string(message.searchText);
    }
    if (message.maxResults !== 0) {
      writer.uint32(32).int32(message.maxResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSearchMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSearchMembersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.searchId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.searchText = reader.string();
          break;
        case 4:
          message.maxResults = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSearchMembersRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      searchId: isSet(object.searchId) ? Number(object.searchId) : 0,
      searchText: isSet(object.searchText) ? String(object.searchText) : "",
      maxResults: isSet(object.maxResults) ? Number(object.maxResults) : 0,
    };
  },

  toJSON(message: CChatRoomSearchMembersRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.searchId !== undefined && (obj.searchId = Math.round(message.searchId));
    message.searchText !== undefined && (obj.searchText = message.searchText);
    message.maxResults !== undefined && (obj.maxResults = Math.round(message.maxResults));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSearchMembersRequest>, I>>(base?: I): CChatRoomSearchMembersRequest {
    return CChatRoomSearchMembersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSearchMembersRequest>, I>>(
    object: I,
  ): CChatRoomSearchMembersRequest {
    const message = createBaseCChatRoomSearchMembersRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.searchId = object.searchId ?? 0;
    message.searchText = object.searchText ?? "";
    message.maxResults = object.maxResults ?? 0;
    return message;
  },
};

function createBaseCChatRoomSearchMembersResponse(): CChatRoomSearchMembersResponse {
  return { matchingMembers: [], statusFlags: 0 };
}

export const CChatRoomSearchMembersResponse = {
  encode(message: CChatRoomSearchMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matchingMembers) {
      CChatRoomSearchMembersResponse_MemberMatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.statusFlags !== 0) {
      writer.uint32(16).uint32(message.statusFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSearchMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSearchMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matchingMembers.push(CChatRoomSearchMembersResponse_MemberMatch.decode(reader, reader.uint32()));
          break;
        case 2:
          message.statusFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSearchMembersResponse {
    return {
      matchingMembers: Array.isArray(object?.matchingMembers)
        ? object.matchingMembers.map((e: any) => CChatRoomSearchMembersResponse_MemberMatch.fromJSON(e))
        : [],
      statusFlags: isSet(object.statusFlags) ? Number(object.statusFlags) : 0,
    };
  },

  toJSON(message: CChatRoomSearchMembersResponse): unknown {
    const obj: any = {};
    if (message.matchingMembers) {
      obj.matchingMembers = message.matchingMembers.map((e) =>
        e ? CChatRoomSearchMembersResponse_MemberMatch.toJSON(e) : undefined
      );
    } else {
      obj.matchingMembers = [];
    }
    message.statusFlags !== undefined && (obj.statusFlags = Math.round(message.statusFlags));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSearchMembersResponse>, I>>(base?: I): CChatRoomSearchMembersResponse {
    return CChatRoomSearchMembersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSearchMembersResponse>, I>>(
    object: I,
  ): CChatRoomSearchMembersResponse {
    const message = createBaseCChatRoomSearchMembersResponse();
    message.matchingMembers =
      object.matchingMembers?.map((e) => CChatRoomSearchMembersResponse_MemberMatch.fromPartial(e)) || [];
    message.statusFlags = object.statusFlags ?? 0;
    return message;
  },
};

function createBaseCChatRoomSearchMembersResponse_MemberMatch(): CChatRoomSearchMembersResponse_MemberMatch {
  return { accountid: 0, persona: undefined };
}

export const CChatRoomSearchMembersResponse_MemberMatch = {
  encode(message: CChatRoomSearchMembersResponse_MemberMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountid !== 0) {
      writer.uint32(8).int32(message.accountid);
    }
    if (message.persona !== undefined) {
      CMsgClientPersonaState_Friend.encode(message.persona, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomSearchMembersResponse_MemberMatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomSearchMembersResponse_MemberMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountid = reader.int32();
          break;
        case 2:
          message.persona = CMsgClientPersonaState_Friend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomSearchMembersResponse_MemberMatch {
    return {
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      persona: isSet(object.persona) ? CMsgClientPersonaState_Friend.fromJSON(object.persona) : undefined,
    };
  },

  toJSON(message: CChatRoomSearchMembersResponse_MemberMatch): unknown {
    const obj: any = {};
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.persona !== undefined &&
      (obj.persona = message.persona ? CMsgClientPersonaState_Friend.toJSON(message.persona) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomSearchMembersResponse_MemberMatch>, I>>(
    base?: I,
  ): CChatRoomSearchMembersResponse_MemberMatch {
    return CChatRoomSearchMembersResponse_MemberMatch.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomSearchMembersResponse_MemberMatch>, I>>(
    object: I,
  ): CChatRoomSearchMembersResponse_MemberMatch {
    const message = createBaseCChatRoomSearchMembersResponse_MemberMatch();
    message.accountid = object.accountid ?? 0;
    message.persona = (object.persona !== undefined && object.persona !== null)
      ? CMsgClientPersonaState_Friend.fromPartial(object.persona)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomUpdateMessageReactionRequest(): CChatRoomUpdateMessageReactionRequest {
  return { chatGroupId: 0, chatId: 0, serverTimestamp: 0, ordinal: 0, reactionType: 0, reaction: "", isAdd: false };
}

export const CChatRoomUpdateMessageReactionRequest = {
  encode(message: CChatRoomUpdateMessageReactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(24).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(32).uint32(message.ordinal);
    }
    if (message.reactionType !== 0) {
      writer.uint32(40).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(50).string(message.reaction);
    }
    if (message.isAdd === true) {
      writer.uint32(56).bool(message.isAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomUpdateMessageReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomUpdateMessageReactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.serverTimestamp = reader.uint32();
          break;
        case 4:
          message.ordinal = reader.uint32();
          break;
        case 5:
          message.reactionType = reader.int32() as any;
          break;
        case 6:
          message.reaction = reader.string();
          break;
        case 7:
          message.isAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomUpdateMessageReactionRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactionType: isSet(object.reactionType) ? eChatRoomMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      isAdd: isSet(object.isAdd) ? Boolean(object.isAdd) : false,
    };
  },

  toJSON(message: CChatRoomUpdateMessageReactionRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.reactionType !== undefined && (obj.reactionType = eChatRoomMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.isAdd !== undefined && (obj.isAdd = message.isAdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomUpdateMessageReactionRequest>, I>>(
    base?: I,
  ): CChatRoomUpdateMessageReactionRequest {
    return CChatRoomUpdateMessageReactionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomUpdateMessageReactionRequest>, I>>(
    object: I,
  ): CChatRoomUpdateMessageReactionRequest {
    const message = createBaseCChatRoomUpdateMessageReactionRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.isAdd = object.isAdd ?? false;
    return message;
  },
};

function createBaseCChatRoomUpdateMessageReactionResponse(): CChatRoomUpdateMessageReactionResponse {
  return { numReactors: 0 };
}

export const CChatRoomUpdateMessageReactionResponse = {
  encode(message: CChatRoomUpdateMessageReactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numReactors !== 0) {
      writer.uint32(8).uint32(message.numReactors);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomUpdateMessageReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomUpdateMessageReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numReactors = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomUpdateMessageReactionResponse {
    return { numReactors: isSet(object.numReactors) ? Number(object.numReactors) : 0 };
  },

  toJSON(message: CChatRoomUpdateMessageReactionResponse): unknown {
    const obj: any = {};
    message.numReactors !== undefined && (obj.numReactors = Math.round(message.numReactors));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomUpdateMessageReactionResponse>, I>>(
    base?: I,
  ): CChatRoomUpdateMessageReactionResponse {
    return CChatRoomUpdateMessageReactionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomUpdateMessageReactionResponse>, I>>(
    object: I,
  ): CChatRoomUpdateMessageReactionResponse {
    const message = createBaseCChatRoomUpdateMessageReactionResponse();
    message.numReactors = object.numReactors ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetMessageReactionReactorsRequest(): CChatRoomGetMessageReactionReactorsRequest {
  return { chatGroupId: 0, chatId: 0, serverTimestamp: 0, ordinal: 0, reactionType: 0, reaction: "", limit: 0 };
}

export const CChatRoomGetMessageReactionReactorsRequest = {
  encode(message: CChatRoomGetMessageReactionReactorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(24).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(32).uint32(message.ordinal);
    }
    if (message.reactionType !== 0) {
      writer.uint32(40).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(50).string(message.reaction);
    }
    if (message.limit !== 0) {
      writer.uint32(56).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMessageReactionReactorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageReactionReactorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.serverTimestamp = reader.uint32();
          break;
        case 4:
          message.ordinal = reader.uint32();
          break;
        case 5:
          message.reactionType = reader.int32() as any;
          break;
        case 6:
          message.reaction = reader.string();
          break;
        case 7:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageReactionReactorsRequest {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactionType: isSet(object.reactionType) ? eChatRoomMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: CChatRoomGetMessageReactionReactorsRequest): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.reactionType !== undefined && (obj.reactionType = eChatRoomMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageReactionReactorsRequest>, I>>(
    base?: I,
  ): CChatRoomGetMessageReactionReactorsRequest {
    return CChatRoomGetMessageReactionReactorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageReactionReactorsRequest>, I>>(
    object: I,
  ): CChatRoomGetMessageReactionReactorsRequest {
    const message = createBaseCChatRoomGetMessageReactionReactorsRequest();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseCChatRoomGetMessageReactionReactorsResponse(): CChatRoomGetMessageReactionReactorsResponse {
  return { reactors: [] };
}

export const CChatRoomGetMessageReactionReactorsResponse = {
  encode(message: CChatRoomGetMessageReactionReactorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.reactors) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomGetMessageReactionReactorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomGetMessageReactionReactorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.reactors.push(reader.uint32());
            }
          } else {
            message.reactors.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomGetMessageReactionReactorsResponse {
    return { reactors: Array.isArray(object?.reactors) ? object.reactors.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: CChatRoomGetMessageReactionReactorsResponse): unknown {
    const obj: any = {};
    if (message.reactors) {
      obj.reactors = message.reactors.map((e) => Math.round(e));
    } else {
      obj.reactors = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomGetMessageReactionReactorsResponse>, I>>(
    base?: I,
  ): CChatRoomGetMessageReactionReactorsResponse {
    return CChatRoomGetMessageReactionReactorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomGetMessageReactionReactorsResponse>, I>>(
    object: I,
  ): CChatRoomGetMessageReactionReactorsResponse {
    const message = createBaseCChatRoomGetMessageReactionReactorsResponse();
    message.reactors = object.reactors?.map((e) => e) || [];
    return message;
  },
};

function createBaseCClanChatRoomsGetClanChatRoomInfoRequest(): CClanChatRoomsGetClanChatRoomInfoRequest {
  return { steamid: 0, autocreate: false };
}

export const CClanChatRoomsGetClanChatRoomInfoRequest = {
  encode(message: CClanChatRoomsGetClanChatRoomInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.autocreate === true) {
      writer.uint32(16).bool(message.autocreate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanChatRoomsGetClanChatRoomInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanChatRoomsGetClanChatRoomInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.autocreate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClanChatRoomsGetClanChatRoomInfoRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      autocreate: isSet(object.autocreate) ? Boolean(object.autocreate) : false,
    };
  },

  toJSON(message: CClanChatRoomsGetClanChatRoomInfoRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.autocreate !== undefined && (obj.autocreate = message.autocreate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClanChatRoomsGetClanChatRoomInfoRequest>, I>>(
    base?: I,
  ): CClanChatRoomsGetClanChatRoomInfoRequest {
    return CClanChatRoomsGetClanChatRoomInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClanChatRoomsGetClanChatRoomInfoRequest>, I>>(
    object: I,
  ): CClanChatRoomsGetClanChatRoomInfoRequest {
    const message = createBaseCClanChatRoomsGetClanChatRoomInfoRequest();
    message.steamid = object.steamid ?? 0;
    message.autocreate = object.autocreate ?? false;
    return message;
  },
};

function createBaseCClanChatRoomsGetClanChatRoomInfoResponse(): CClanChatRoomsGetClanChatRoomInfoResponse {
  return { chatGroupSummary: undefined };
}

export const CClanChatRoomsGetClanChatRoomInfoResponse = {
  encode(message: CClanChatRoomsGetClanChatRoomInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupSummary !== undefined) {
      CChatRoomGetChatRoomGroupSummaryResponse.encode(message.chatGroupSummary, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanChatRoomsGetClanChatRoomInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanChatRoomsGetClanChatRoomInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupSummary = CChatRoomGetChatRoomGroupSummaryResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClanChatRoomsGetClanChatRoomInfoResponse {
    return {
      chatGroupSummary: isSet(object.chatGroupSummary)
        ? CChatRoomGetChatRoomGroupSummaryResponse.fromJSON(object.chatGroupSummary)
        : undefined,
    };
  },

  toJSON(message: CClanChatRoomsGetClanChatRoomInfoResponse): unknown {
    const obj: any = {};
    message.chatGroupSummary !== undefined && (obj.chatGroupSummary = message.chatGroupSummary
      ? CChatRoomGetChatRoomGroupSummaryResponse.toJSON(message.chatGroupSummary)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClanChatRoomsGetClanChatRoomInfoResponse>, I>>(
    base?: I,
  ): CClanChatRoomsGetClanChatRoomInfoResponse {
    return CClanChatRoomsGetClanChatRoomInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClanChatRoomsGetClanChatRoomInfoResponse>, I>>(
    object: I,
  ): CClanChatRoomsGetClanChatRoomInfoResponse {
    const message = createBaseCClanChatRoomsGetClanChatRoomInfoResponse();
    message.chatGroupSummary = (object.chatGroupSummary !== undefined && object.chatGroupSummary !== null)
      ? CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(object.chatGroupSummary)
      : undefined;
    return message;
  },
};

function createBaseCClanChatRoomsSetClanChatRoomPrivateRequest(): CClanChatRoomsSetClanChatRoomPrivateRequest {
  return { steamid: 0, chatRoomPrivate: false };
}

export const CClanChatRoomsSetClanChatRoomPrivateRequest = {
  encode(message: CClanChatRoomsSetClanChatRoomPrivateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== 0) {
      writer.uint32(9).fixed64(message.steamid);
    }
    if (message.chatRoomPrivate === true) {
      writer.uint32(16).bool(message.chatRoomPrivate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanChatRoomsSetClanChatRoomPrivateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanChatRoomsSetClanChatRoomPrivateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.chatRoomPrivate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClanChatRoomsSetClanChatRoomPrivateRequest {
    return {
      steamid: isSet(object.steamid) ? Number(object.steamid) : 0,
      chatRoomPrivate: isSet(object.chatRoomPrivate) ? Boolean(object.chatRoomPrivate) : false,
    };
  },

  toJSON(message: CClanChatRoomsSetClanChatRoomPrivateRequest): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = Math.round(message.steamid));
    message.chatRoomPrivate !== undefined && (obj.chatRoomPrivate = message.chatRoomPrivate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClanChatRoomsSetClanChatRoomPrivateRequest>, I>>(
    base?: I,
  ): CClanChatRoomsSetClanChatRoomPrivateRequest {
    return CClanChatRoomsSetClanChatRoomPrivateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClanChatRoomsSetClanChatRoomPrivateRequest>, I>>(
    object: I,
  ): CClanChatRoomsSetClanChatRoomPrivateRequest {
    const message = createBaseCClanChatRoomsSetClanChatRoomPrivateRequest();
    message.steamid = object.steamid ?? 0;
    message.chatRoomPrivate = object.chatRoomPrivate ?? false;
    return message;
  },
};

function createBaseCClanChatRoomsSetClanChatRoomPrivateResponse(): CClanChatRoomsSetClanChatRoomPrivateResponse {
  return { chatRoomPrivate: false };
}

export const CClanChatRoomsSetClanChatRoomPrivateResponse = {
  encode(message: CClanChatRoomsSetClanChatRoomPrivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatRoomPrivate === true) {
      writer.uint32(8).bool(message.chatRoomPrivate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CClanChatRoomsSetClanChatRoomPrivateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCClanChatRoomsSetClanChatRoomPrivateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatRoomPrivate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CClanChatRoomsSetClanChatRoomPrivateResponse {
    return { chatRoomPrivate: isSet(object.chatRoomPrivate) ? Boolean(object.chatRoomPrivate) : false };
  },

  toJSON(message: CClanChatRoomsSetClanChatRoomPrivateResponse): unknown {
    const obj: any = {};
    message.chatRoomPrivate !== undefined && (obj.chatRoomPrivate = message.chatRoomPrivate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CClanChatRoomsSetClanChatRoomPrivateResponse>, I>>(
    base?: I,
  ): CClanChatRoomsSetClanChatRoomPrivateResponse {
    return CClanChatRoomsSetClanChatRoomPrivateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CClanChatRoomsSetClanChatRoomPrivateResponse>, I>>(
    object: I,
  ): CClanChatRoomsSetClanChatRoomPrivateResponse {
    const message = createBaseCClanChatRoomsSetClanChatRoomPrivateResponse();
    message.chatRoomPrivate = object.chatRoomPrivate ?? false;
    return message;
  },
};

function createBaseCChatMentions(): CChatMentions {
  return { mentionAll: false, mentionHere: false, mentionAccountids: [] };
}

export const CChatMentions = {
  encode(message: CChatMentions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mentionAll === true) {
      writer.uint32(8).bool(message.mentionAll);
    }
    if (message.mentionHere === true) {
      writer.uint32(16).bool(message.mentionHere);
    }
    writer.uint32(26).fork();
    for (const v of message.mentionAccountids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatMentions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatMentions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mentionAll = reader.bool();
          break;
        case 2:
          message.mentionHere = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mentionAccountids.push(reader.uint32());
            }
          } else {
            message.mentionAccountids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatMentions {
    return {
      mentionAll: isSet(object.mentionAll) ? Boolean(object.mentionAll) : false,
      mentionHere: isSet(object.mentionHere) ? Boolean(object.mentionHere) : false,
      mentionAccountids: Array.isArray(object?.mentionAccountids)
        ? object.mentionAccountids.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CChatMentions): unknown {
    const obj: any = {};
    message.mentionAll !== undefined && (obj.mentionAll = message.mentionAll);
    message.mentionHere !== undefined && (obj.mentionHere = message.mentionHere);
    if (message.mentionAccountids) {
      obj.mentionAccountids = message.mentionAccountids.map((e) => Math.round(e));
    } else {
      obj.mentionAccountids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatMentions>, I>>(base?: I): CChatMentions {
    return CChatMentions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatMentions>, I>>(object: I): CChatMentions {
    const message = createBaseCChatMentions();
    message.mentionAll = object.mentionAll ?? false;
    message.mentionHere = object.mentionHere ?? false;
    message.mentionAccountids = object.mentionAccountids?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomIncomingChatMessageNotification(): CChatRoomIncomingChatMessageNotification {
  return {
    chatGroupId: 0,
    chatId: 0,
    steamidSender: 0,
    message: "",
    timestamp: 0,
    mentions: undefined,
    ordinal: 0,
    serverMessage: undefined,
    messageNoBbcode: "",
    chatName: "",
  };
}

export const CChatRoomIncomingChatMessageNotification = {
  encode(message: CChatRoomIncomingChatMessageNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.steamidSender !== 0) {
      writer.uint32(25).fixed64(message.steamidSender);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    if (message.mentions !== undefined) {
      CChatMentions.encode(message.mentions, writer.uint32(50).fork()).ldelim();
    }
    if (message.ordinal !== 0) {
      writer.uint32(56).uint32(message.ordinal);
    }
    if (message.serverMessage !== undefined) {
      ServerMessage.encode(message.serverMessage, writer.uint32(66).fork()).ldelim();
    }
    if (message.messageNoBbcode !== "") {
      writer.uint32(74).string(message.messageNoBbcode);
    }
    if (message.chatName !== "") {
      writer.uint32(82).string(message.chatName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomIncomingChatMessageNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomIncomingChatMessageNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.steamidSender = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.message = reader.string();
          break;
        case 5:
          message.timestamp = reader.uint32();
          break;
        case 6:
          message.mentions = CChatMentions.decode(reader, reader.uint32());
          break;
        case 7:
          message.ordinal = reader.uint32();
          break;
        case 8:
          message.serverMessage = ServerMessage.decode(reader, reader.uint32());
          break;
        case 9:
          message.messageNoBbcode = reader.string();
          break;
        case 10:
          message.chatName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomIncomingChatMessageNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      steamidSender: isSet(object.steamidSender) ? Number(object.steamidSender) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      mentions: isSet(object.mentions) ? CChatMentions.fromJSON(object.mentions) : undefined,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      serverMessage: isSet(object.serverMessage) ? ServerMessage.fromJSON(object.serverMessage) : undefined,
      messageNoBbcode: isSet(object.messageNoBbcode) ? String(object.messageNoBbcode) : "",
      chatName: isSet(object.chatName) ? String(object.chatName) : "",
    };
  },

  toJSON(message: CChatRoomIncomingChatMessageNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.steamidSender !== undefined && (obj.steamidSender = Math.round(message.steamidSender));
    message.message !== undefined && (obj.message = message.message);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.mentions !== undefined &&
      (obj.mentions = message.mentions ? CChatMentions.toJSON(message.mentions) : undefined);
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.serverMessage !== undefined &&
      (obj.serverMessage = message.serverMessage ? ServerMessage.toJSON(message.serverMessage) : undefined);
    message.messageNoBbcode !== undefined && (obj.messageNoBbcode = message.messageNoBbcode);
    message.chatName !== undefined && (obj.chatName = message.chatName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomIncomingChatMessageNotification>, I>>(
    base?: I,
  ): CChatRoomIncomingChatMessageNotification {
    return CChatRoomIncomingChatMessageNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomIncomingChatMessageNotification>, I>>(
    object: I,
  ): CChatRoomIncomingChatMessageNotification {
    const message = createBaseCChatRoomIncomingChatMessageNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.steamidSender = object.steamidSender ?? 0;
    message.message = object.message ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.mentions = (object.mentions !== undefined && object.mentions !== null)
      ? CChatMentions.fromPartial(object.mentions)
      : undefined;
    message.ordinal = object.ordinal ?? 0;
    message.serverMessage = (object.serverMessage !== undefined && object.serverMessage !== null)
      ? ServerMessage.fromPartial(object.serverMessage)
      : undefined;
    message.messageNoBbcode = object.messageNoBbcode ?? "";
    message.chatName = object.chatName ?? "";
    return message;
  },
};

function createBaseCChatRoomChatMessageModifiedNotification(): CChatRoomChatMessageModifiedNotification {
  return { chatGroupId: 0, chatId: 0, messages: [] };
}

export const CChatRoomChatMessageModifiedNotification = {
  encode(message: CChatRoomChatMessageModifiedNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    for (const v of message.messages) {
      CChatRoomChatMessageModifiedNotification_ChatMessage.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomChatMessageModifiedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomChatMessageModifiedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.messages.push(CChatRoomChatMessageModifiedNotification_ChatMessage.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomChatMessageModifiedNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      messages: Array.isArray(object?.messages)
        ? object.messages.map((e: any) => CChatRoomChatMessageModifiedNotification_ChatMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomChatMessageModifiedNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? CChatRoomChatMessageModifiedNotification_ChatMessage.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomChatMessageModifiedNotification>, I>>(
    base?: I,
  ): CChatRoomChatMessageModifiedNotification {
    return CChatRoomChatMessageModifiedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomChatMessageModifiedNotification>, I>>(
    object: I,
  ): CChatRoomChatMessageModifiedNotification {
    const message = createBaseCChatRoomChatMessageModifiedNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.messages =
      object.messages?.map((e) => CChatRoomChatMessageModifiedNotification_ChatMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomChatMessageModifiedNotification_ChatMessage(): CChatRoomChatMessageModifiedNotification_ChatMessage {
  return { serverTimestamp: 0, ordinal: 0, deleted: false };
}

export const CChatRoomChatMessageModifiedNotification_ChatMessage = {
  encode(
    message: CChatRoomChatMessageModifiedNotification_ChatMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.serverTimestamp !== 0) {
      writer.uint32(8).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(16).uint32(message.ordinal);
    }
    if (message.deleted === true) {
      writer.uint32(24).bool(message.deleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomChatMessageModifiedNotification_ChatMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomChatMessageModifiedNotification_ChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverTimestamp = reader.uint32();
          break;
        case 2:
          message.ordinal = reader.uint32();
          break;
        case 3:
          message.deleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomChatMessageModifiedNotification_ChatMessage {
    return {
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
    };
  },

  toJSON(message: CChatRoomChatMessageModifiedNotification_ChatMessage): unknown {
    const obj: any = {};
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.deleted !== undefined && (obj.deleted = message.deleted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomChatMessageModifiedNotification_ChatMessage>, I>>(
    base?: I,
  ): CChatRoomChatMessageModifiedNotification_ChatMessage {
    return CChatRoomChatMessageModifiedNotification_ChatMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomChatMessageModifiedNotification_ChatMessage>, I>>(
    object: I,
  ): CChatRoomChatMessageModifiedNotification_ChatMessage {
    const message = createBaseCChatRoomChatMessageModifiedNotification_ChatMessage();
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseCChatRoomMemberStateChangeNotification(): CChatRoomMemberStateChangeNotification {
  return { chatGroupId: 0, member: undefined, change: 0 };
}

export const CChatRoomMemberStateChangeNotification = {
  encode(message: CChatRoomMemberStateChangeNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.member !== undefined) {
      CChatRoomMember.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    if (message.change !== 0) {
      writer.uint32(24).int32(message.change);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMemberStateChangeNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMemberStateChangeNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.member = CChatRoomMember.decode(reader, reader.uint32());
          break;
        case 3:
          message.change = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMemberStateChangeNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      member: isSet(object.member) ? CChatRoomMember.fromJSON(object.member) : undefined,
      change: isSet(object.change) ? eChatRoomMemberStateChangeFromJSON(object.change) : 0,
    };
  },

  toJSON(message: CChatRoomMemberStateChangeNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.member !== undefined && (obj.member = message.member ? CChatRoomMember.toJSON(message.member) : undefined);
    message.change !== undefined && (obj.change = eChatRoomMemberStateChangeToJSON(message.change));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMemberStateChangeNotification>, I>>(
    base?: I,
  ): CChatRoomMemberStateChangeNotification {
    return CChatRoomMemberStateChangeNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMemberStateChangeNotification>, I>>(
    object: I,
  ): CChatRoomMemberStateChangeNotification {
    const message = createBaseCChatRoomMemberStateChangeNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.member = (object.member !== undefined && object.member !== null)
      ? CChatRoomMember.fromPartial(object.member)
      : undefined;
    message.change = object.change ?? 0;
    return message;
  },
};

function createBaseCChatRoomChatRoomHeaderStateNotification(): CChatRoomChatRoomHeaderStateNotification {
  return { headerState: undefined };
}

export const CChatRoomChatRoomHeaderStateNotification = {
  encode(message: CChatRoomChatRoomHeaderStateNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerState !== undefined) {
      CChatRoomGroupHeaderState.encode(message.headerState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomChatRoomHeaderStateNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomChatRoomHeaderStateNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.headerState = CChatRoomGroupHeaderState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomChatRoomHeaderStateNotification {
    return {
      headerState: isSet(object.headerState) ? CChatRoomGroupHeaderState.fromJSON(object.headerState) : undefined,
    };
  },

  toJSON(message: CChatRoomChatRoomHeaderStateNotification): unknown {
    const obj: any = {};
    message.headerState !== undefined &&
      (obj.headerState = message.headerState ? CChatRoomGroupHeaderState.toJSON(message.headerState) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomChatRoomHeaderStateNotification>, I>>(
    base?: I,
  ): CChatRoomChatRoomHeaderStateNotification {
    return CChatRoomChatRoomHeaderStateNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomChatRoomHeaderStateNotification>, I>>(
    object: I,
  ): CChatRoomChatRoomHeaderStateNotification {
    const message = createBaseCChatRoomChatRoomHeaderStateNotification();
    message.headerState = (object.headerState !== undefined && object.headerState !== null)
      ? CChatRoomGroupHeaderState.fromPartial(object.headerState)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomChatRoomGroupRoomsChangeNotification(): CChatRoomChatRoomGroupRoomsChangeNotification {
  return { chatGroupId: 0, defaultChatId: 0, chatRooms: [] };
}

export const CChatRoomChatRoomGroupRoomsChangeNotification = {
  encode(message: CChatRoomChatRoomGroupRoomsChangeNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.defaultChatId !== 0) {
      writer.uint32(16).uint64(message.defaultChatId);
    }
    for (const v of message.chatRooms) {
      CChatRoomState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomChatRoomGroupRoomsChangeNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomChatRoomGroupRoomsChangeNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.defaultChatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chatRooms.push(CChatRoomState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomChatRoomGroupRoomsChangeNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      defaultChatId: isSet(object.defaultChatId) ? Number(object.defaultChatId) : 0,
      chatRooms: Array.isArray(object?.chatRooms) ? object.chatRooms.map((e: any) => CChatRoomState.fromJSON(e)) : [],
    };
  },

  toJSON(message: CChatRoomChatRoomGroupRoomsChangeNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.defaultChatId !== undefined && (obj.defaultChatId = Math.round(message.defaultChatId));
    if (message.chatRooms) {
      obj.chatRooms = message.chatRooms.map((e) => e ? CChatRoomState.toJSON(e) : undefined);
    } else {
      obj.chatRooms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomChatRoomGroupRoomsChangeNotification>, I>>(
    base?: I,
  ): CChatRoomChatRoomGroupRoomsChangeNotification {
    return CChatRoomChatRoomGroupRoomsChangeNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomChatRoomGroupRoomsChangeNotification>, I>>(
    object: I,
  ): CChatRoomChatRoomGroupRoomsChangeNotification {
    const message = createBaseCChatRoomChatRoomGroupRoomsChangeNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.defaultChatId = object.defaultChatId ?? 0;
    message.chatRooms = object.chatRooms?.map((e) => CChatRoomState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification(): CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
  return { chatId: 0, chatGroupId: 0 };
}

export const CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification = {
  encode(
    message: CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatId !== 0) {
      writer.uint32(8).uint64(message.chatId);
    }
    if (message.chatGroupId !== 0) {
      writer.uint32(16).uint64(message.chatGroupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
    return {
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
    };
  },

  toJSON(message: CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification>, I>>(
    base?: I,
  ): CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
    return CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification>, I>>(
    object: I,
  ): CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification {
    const message = createBaseCChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification();
    message.chatId = object.chatId ?? 0;
    message.chatGroupId = object.chatGroupId ?? 0;
    return message;
  },
};

function createBaseChatRoomClientNotifyChatGroupUserStateChangedNotification(): ChatRoomClientNotifyChatGroupUserStateChangedNotification {
  return { chatGroupId: 0, userChatGroupState: undefined, groupSummary: undefined, userAction: 0 };
}

export const ChatRoomClientNotifyChatGroupUserStateChangedNotification = {
  encode(
    message: ChatRoomClientNotifyChatGroupUserStateChangedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.userChatGroupState !== undefined) {
      CUserChatRoomGroupState.encode(message.userChatGroupState, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupSummary !== undefined) {
      CChatRoomGetChatRoomGroupSummaryResponse.encode(message.groupSummary, writer.uint32(26).fork()).ldelim();
    }
    if (message.userAction !== 0) {
      writer.uint32(32).int32(message.userAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatRoomClientNotifyChatGroupUserStateChangedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatRoomClientNotifyChatGroupUserStateChangedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.userChatGroupState = CUserChatRoomGroupState.decode(reader, reader.uint32());
          break;
        case 3:
          message.groupSummary = CChatRoomGetChatRoomGroupSummaryResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.userAction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatRoomClientNotifyChatGroupUserStateChangedNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      userChatGroupState: isSet(object.userChatGroupState)
        ? CUserChatRoomGroupState.fromJSON(object.userChatGroupState)
        : undefined,
      groupSummary: isSet(object.groupSummary)
        ? CChatRoomGetChatRoomGroupSummaryResponse.fromJSON(object.groupSummary)
        : undefined,
      userAction: isSet(object.userAction) ? eChatRoomMemberStateChangeFromJSON(object.userAction) : 0,
    };
  },

  toJSON(message: ChatRoomClientNotifyChatGroupUserStateChangedNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.userChatGroupState !== undefined && (obj.userChatGroupState = message.userChatGroupState
      ? CUserChatRoomGroupState.toJSON(message.userChatGroupState)
      : undefined);
    message.groupSummary !== undefined && (obj.groupSummary = message.groupSummary
      ? CChatRoomGetChatRoomGroupSummaryResponse.toJSON(message.groupSummary)
      : undefined);
    message.userAction !== undefined && (obj.userAction = eChatRoomMemberStateChangeToJSON(message.userAction));
    return obj;
  },

  create<I extends Exact<DeepPartial<ChatRoomClientNotifyChatGroupUserStateChangedNotification>, I>>(
    base?: I,
  ): ChatRoomClientNotifyChatGroupUserStateChangedNotification {
    return ChatRoomClientNotifyChatGroupUserStateChangedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChatRoomClientNotifyChatGroupUserStateChangedNotification>, I>>(
    object: I,
  ): ChatRoomClientNotifyChatGroupUserStateChangedNotification {
    const message = createBaseChatRoomClientNotifyChatGroupUserStateChangedNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.userChatGroupState = (object.userChatGroupState !== undefined && object.userChatGroupState !== null)
      ? CUserChatRoomGroupState.fromPartial(object.userChatGroupState)
      : undefined;
    message.groupSummary = (object.groupSummary !== undefined && object.groupSummary !== null)
      ? CChatRoomGetChatRoomGroupSummaryResponse.fromPartial(object.groupSummary)
      : undefined;
    message.userAction = object.userAction ?? 0;
    return message;
  },
};

function createBaseChatRoomClientNotifyChatRoomDisconnectNotification(): ChatRoomClientNotifyChatRoomDisconnectNotification {
  return { chatGroupIds: [] };
}

export const ChatRoomClientNotifyChatRoomDisconnectNotification = {
  encode(
    message: ChatRoomClientNotifyChatRoomDisconnectNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.chatGroupIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatRoomClientNotifyChatRoomDisconnectNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatRoomClientNotifyChatRoomDisconnectNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.chatGroupIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.chatGroupIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatRoomClientNotifyChatRoomDisconnectNotification {
    return { chatGroupIds: Array.isArray(object?.chatGroupIds) ? object.chatGroupIds.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: ChatRoomClientNotifyChatRoomDisconnectNotification): unknown {
    const obj: any = {};
    if (message.chatGroupIds) {
      obj.chatGroupIds = message.chatGroupIds.map((e) => Math.round(e));
    } else {
      obj.chatGroupIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChatRoomClientNotifyChatRoomDisconnectNotification>, I>>(
    base?: I,
  ): ChatRoomClientNotifyChatRoomDisconnectNotification {
    return ChatRoomClientNotifyChatRoomDisconnectNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ChatRoomClientNotifyChatRoomDisconnectNotification>, I>>(
    object: I,
  ): ChatRoomClientNotifyChatRoomDisconnectNotification {
    const message = createBaseChatRoomClientNotifyChatRoomDisconnectNotification();
    message.chatGroupIds = object.chatGroupIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseCChatRoomMemberListView(): CChatRoomMemberListView {
  return { start: 0, end: 0, totalCount: 0, clientChangenumber: 0, serverChangenumber: 0 };
}

export const CChatRoomMemberListView = {
  encode(message: CChatRoomMemberListView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.totalCount !== 0) {
      writer.uint32(40).int32(message.totalCount);
    }
    if (message.clientChangenumber !== 0) {
      writer.uint32(48).int32(message.clientChangenumber);
    }
    if (message.serverChangenumber !== 0) {
      writer.uint32(56).int32(message.serverChangenumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMemberListView {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMemberListView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.start = reader.int32();
          break;
        case 4:
          message.end = reader.int32();
          break;
        case 5:
          message.totalCount = reader.int32();
          break;
        case 6:
          message.clientChangenumber = reader.int32();
          break;
        case 7:
          message.serverChangenumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMemberListView {
    return {
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      clientChangenumber: isSet(object.clientChangenumber) ? Number(object.clientChangenumber) : 0,
      serverChangenumber: isSet(object.serverChangenumber) ? Number(object.serverChangenumber) : 0,
    };
  },

  toJSON(message: CChatRoomMemberListView): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.totalCount !== undefined && (obj.totalCount = Math.round(message.totalCount));
    message.clientChangenumber !== undefined && (obj.clientChangenumber = Math.round(message.clientChangenumber));
    message.serverChangenumber !== undefined && (obj.serverChangenumber = Math.round(message.serverChangenumber));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMemberListView>, I>>(base?: I): CChatRoomMemberListView {
    return CChatRoomMemberListView.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMemberListView>, I>>(object: I): CChatRoomMemberListView {
    const message = createBaseCChatRoomMemberListView();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.totalCount = object.totalCount ?? 0;
    message.clientChangenumber = object.clientChangenumber ?? 0;
    message.serverChangenumber = object.serverChangenumber ?? 0;
    return message;
  },
};

function createBaseCChatRoomMemberSummaryCounts(): CChatRoomMemberSummaryCounts {
  return { ingame: 0, online: 0, offline: 0 };
}

export const CChatRoomMemberSummaryCounts = {
  encode(message: CChatRoomMemberSummaryCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ingame !== 0) {
      writer.uint32(8).int32(message.ingame);
    }
    if (message.online !== 0) {
      writer.uint32(16).int32(message.online);
    }
    if (message.offline !== 0) {
      writer.uint32(24).int32(message.offline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMemberSummaryCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMemberSummaryCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ingame = reader.int32();
          break;
        case 2:
          message.online = reader.int32();
          break;
        case 3:
          message.offline = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMemberSummaryCounts {
    return {
      ingame: isSet(object.ingame) ? Number(object.ingame) : 0,
      online: isSet(object.online) ? Number(object.online) : 0,
      offline: isSet(object.offline) ? Number(object.offline) : 0,
    };
  },

  toJSON(message: CChatRoomMemberSummaryCounts): unknown {
    const obj: any = {};
    message.ingame !== undefined && (obj.ingame = Math.round(message.ingame));
    message.online !== undefined && (obj.online = Math.round(message.online));
    message.offline !== undefined && (obj.offline = Math.round(message.offline));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMemberSummaryCounts>, I>>(base?: I): CChatRoomMemberSummaryCounts {
    return CChatRoomMemberSummaryCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMemberSummaryCounts>, I>>(object: I): CChatRoomMemberSummaryCounts {
    const message = createBaseCChatRoomMemberSummaryCounts();
    message.ingame = object.ingame ?? 0;
    message.online = object.online ?? 0;
    message.offline = object.offline ?? 0;
    return message;
  },
};

function createBaseCChatRoomClientMemberListViewUpdatedNotification(): CChatRoomClientMemberListViewUpdatedNotification {
  return {
    chatGroupId: 0,
    viewId: 0,
    view: undefined,
    members: [],
    statusFlags: 0,
    memberSummary: undefined,
    subscribedPersonas: [],
  };
}

export const CChatRoomClientMemberListViewUpdatedNotification = {
  encode(
    message: CChatRoomClientMemberListViewUpdatedNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.viewId !== 0) {
      writer.uint32(16).uint64(message.viewId);
    }
    if (message.view !== undefined) {
      CChatRoomMemberListView.encode(message.view, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.members) {
      CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.encode(v!, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.statusFlags !== 0) {
      writer.uint32(40).uint32(message.statusFlags);
    }
    if (message.memberSummary !== undefined) {
      CChatRoomMemberSummaryCounts.encode(message.memberSummary, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.subscribedPersonas) {
      CMsgClientPersonaState_Friend.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomClientMemberListViewUpdatedNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomClientMemberListViewUpdatedNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.viewId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.view = CChatRoomMemberListView.decode(reader, reader.uint32());
          break;
        case 4:
          message.members.push(
            CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.statusFlags = reader.uint32();
          break;
        case 6:
          message.memberSummary = CChatRoomMemberSummaryCounts.decode(reader, reader.uint32());
          break;
        case 7:
          message.subscribedPersonas.push(CMsgClientPersonaState_Friend.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomClientMemberListViewUpdatedNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      viewId: isSet(object.viewId) ? Number(object.viewId) : 0,
      view: isSet(object.view) ? CChatRoomMemberListView.fromJSON(object.view) : undefined,
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) =>
          CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.fromJSON(e)
        )
        : [],
      statusFlags: isSet(object.statusFlags) ? Number(object.statusFlags) : 0,
      memberSummary: isSet(object.memberSummary)
        ? CChatRoomMemberSummaryCounts.fromJSON(object.memberSummary)
        : undefined,
      subscribedPersonas: Array.isArray(object?.subscribedPersonas)
        ? object.subscribedPersonas.map((e: any) => CMsgClientPersonaState_Friend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CChatRoomClientMemberListViewUpdatedNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.viewId !== undefined && (obj.viewId = Math.round(message.viewId));
    message.view !== undefined && (obj.view = message.view ? CChatRoomMemberListView.toJSON(message.view) : undefined);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.toJSON(e) : undefined
      );
    } else {
      obj.members = [];
    }
    message.statusFlags !== undefined && (obj.statusFlags = Math.round(message.statusFlags));
    message.memberSummary !== undefined && (obj.memberSummary = message.memberSummary
      ? CChatRoomMemberSummaryCounts.toJSON(message.memberSummary)
      : undefined);
    if (message.subscribedPersonas) {
      obj.subscribedPersonas = message.subscribedPersonas.map((e) =>
        e ? CMsgClientPersonaState_Friend.toJSON(e) : undefined
      );
    } else {
      obj.subscribedPersonas = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomClientMemberListViewUpdatedNotification>, I>>(
    base?: I,
  ): CChatRoomClientMemberListViewUpdatedNotification {
    return CChatRoomClientMemberListViewUpdatedNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomClientMemberListViewUpdatedNotification>, I>>(
    object: I,
  ): CChatRoomClientMemberListViewUpdatedNotification {
    const message = createBaseCChatRoomClientMemberListViewUpdatedNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.viewId = object.viewId ?? 0;
    message.view = (object.view !== undefined && object.view !== null)
      ? CChatRoomMemberListView.fromPartial(object.view)
      : undefined;
    message.members =
      object.members?.map((e) => CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.fromPartial(e)) ||
      [];
    message.statusFlags = object.statusFlags ?? 0;
    message.memberSummary = (object.memberSummary !== undefined && object.memberSummary !== null)
      ? CChatRoomMemberSummaryCounts.fromPartial(object.memberSummary)
      : undefined;
    message.subscribedPersonas = object.subscribedPersonas?.map((e) => CMsgClientPersonaState_Friend.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry(): CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
  return { rank: 0, accountid: 0, persona: undefined };
}

export const CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry = {
  encode(
    message: CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).int32(message.rank);
    }
    if (message.accountid !== 0) {
      writer.uint32(16).uint32(message.accountid);
    }
    if (message.persona !== undefined) {
      CMsgClientPersonaState_Friend.encode(message.persona, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rank = reader.int32();
          break;
        case 2:
          message.accountid = reader.uint32();
          break;
        case 3:
          message.persona = CMsgClientPersonaState_Friend.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
    return {
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      accountid: isSet(object.accountid) ? Number(object.accountid) : 0,
      persona: isSet(object.persona) ? CMsgClientPersonaState_Friend.fromJSON(object.persona) : undefined,
    };
  },

  toJSON(message: CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry): unknown {
    const obj: any = {};
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.accountid !== undefined && (obj.accountid = Math.round(message.accountid));
    message.persona !== undefined &&
      (obj.persona = message.persona ? CMsgClientPersonaState_Friend.toJSON(message.persona) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry>, I>>(
    base?: I,
  ): CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
    return CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry>, I>>(
    object: I,
  ): CChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry {
    const message = createBaseCChatRoomClientMemberListViewUpdatedNotification_MemberListViewEntry();
    message.rank = object.rank ?? 0;
    message.accountid = object.accountid ?? 0;
    message.persona = (object.persona !== undefined && object.persona !== null)
      ? CMsgClientPersonaState_Friend.fromPartial(object.persona)
      : undefined;
    return message;
  },
};

function createBaseCChatRoomMessageReactionNotification(): CChatRoomMessageReactionNotification {
  return {
    chatGroupId: 0,
    chatId: 0,
    serverTimestamp: 0,
    ordinal: 0,
    reactor: 0,
    reactionType: 0,
    reaction: "",
    isAdd: false,
  };
}

export const CChatRoomMessageReactionNotification = {
  encode(message: CChatRoomMessageReactionNotification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chatGroupId !== 0) {
      writer.uint32(8).uint64(message.chatGroupId);
    }
    if (message.chatId !== 0) {
      writer.uint32(16).uint64(message.chatId);
    }
    if (message.serverTimestamp !== 0) {
      writer.uint32(24).uint32(message.serverTimestamp);
    }
    if (message.ordinal !== 0) {
      writer.uint32(32).uint32(message.ordinal);
    }
    if (message.reactor !== 0) {
      writer.uint32(41).fixed64(message.reactor);
    }
    if (message.reactionType !== 0) {
      writer.uint32(48).int32(message.reactionType);
    }
    if (message.reaction !== "") {
      writer.uint32(58).string(message.reaction);
    }
    if (message.isAdd === true) {
      writer.uint32(64).bool(message.isAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatRoomMessageReactionNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatRoomMessageReactionNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatGroupId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chatId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.serverTimestamp = reader.uint32();
          break;
        case 4:
          message.ordinal = reader.uint32();
          break;
        case 5:
          message.reactor = longToNumber(reader.fixed64() as Long);
          break;
        case 6:
          message.reactionType = reader.int32() as any;
          break;
        case 7:
          message.reaction = reader.string();
          break;
        case 8:
          message.isAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatRoomMessageReactionNotification {
    return {
      chatGroupId: isSet(object.chatGroupId) ? Number(object.chatGroupId) : 0,
      chatId: isSet(object.chatId) ? Number(object.chatId) : 0,
      serverTimestamp: isSet(object.serverTimestamp) ? Number(object.serverTimestamp) : 0,
      ordinal: isSet(object.ordinal) ? Number(object.ordinal) : 0,
      reactor: isSet(object.reactor) ? Number(object.reactor) : 0,
      reactionType: isSet(object.reactionType) ? eChatRoomMessageReactionTypeFromJSON(object.reactionType) : 0,
      reaction: isSet(object.reaction) ? String(object.reaction) : "",
      isAdd: isSet(object.isAdd) ? Boolean(object.isAdd) : false,
    };
  },

  toJSON(message: CChatRoomMessageReactionNotification): unknown {
    const obj: any = {};
    message.chatGroupId !== undefined && (obj.chatGroupId = Math.round(message.chatGroupId));
    message.chatId !== undefined && (obj.chatId = Math.round(message.chatId));
    message.serverTimestamp !== undefined && (obj.serverTimestamp = Math.round(message.serverTimestamp));
    message.ordinal !== undefined && (obj.ordinal = Math.round(message.ordinal));
    message.reactor !== undefined && (obj.reactor = Math.round(message.reactor));
    message.reactionType !== undefined && (obj.reactionType = eChatRoomMessageReactionTypeToJSON(message.reactionType));
    message.reaction !== undefined && (obj.reaction = message.reaction);
    message.isAdd !== undefined && (obj.isAdd = message.isAdd);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatRoomMessageReactionNotification>, I>>(
    base?: I,
  ): CChatRoomMessageReactionNotification {
    return CChatRoomMessageReactionNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatRoomMessageReactionNotification>, I>>(
    object: I,
  ): CChatRoomMessageReactionNotification {
    const message = createBaseCChatRoomMessageReactionNotification();
    message.chatGroupId = object.chatGroupId ?? 0;
    message.chatId = object.chatId ?? 0;
    message.serverTimestamp = object.serverTimestamp ?? 0;
    message.ordinal = object.ordinal ?? 0;
    message.reactor = object.reactor ?? 0;
    message.reactionType = object.reactionType ?? 0;
    message.reaction = object.reaction ?? "";
    message.isAdd = object.isAdd ?? false;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification(): CChatUsabilityClientUsabilityMetricsNotification {
  return {
    metricsRunId: 0,
    clientBuild: 0,
    metricsVersion: 0,
    inWeb: false,
    settings: undefined,
    voiceSettings: undefined,
    uiState: undefined,
    metrics: undefined,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metricsRunId !== 0) {
      writer.uint32(8).uint32(message.metricsRunId);
    }
    if (message.clientBuild !== 0) {
      writer.uint32(16).uint32(message.clientBuild);
    }
    if (message.metricsVersion !== 0) {
      writer.uint32(24).uint32(message.metricsVersion);
    }
    if (message.inWeb === true) {
      writer.uint32(32).bool(message.inWeb);
    }
    if (message.settings !== undefined) {
      CChatUsabilityClientUsabilityMetricsNotification_Settings.encode(message.settings, writer.uint32(82).fork())
        .ldelim();
    }
    if (message.voiceSettings !== undefined) {
      CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.encode(
        message.voiceSettings,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.uiState !== undefined) {
      CChatUsabilityClientUsabilityMetricsNotification_UIState.encode(message.uiState, writer.uint32(98).fork())
        .ldelim();
    }
    if (message.metrics !== undefined) {
      CChatUsabilityClientUsabilityMetricsNotification_Metrics.encode(message.metrics, writer.uint32(106).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatUsabilityClientUsabilityMetricsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricsRunId = reader.uint32();
          break;
        case 2:
          message.clientBuild = reader.uint32();
          break;
        case 3:
          message.metricsVersion = reader.uint32();
          break;
        case 4:
          message.inWeb = reader.bool();
          break;
        case 10:
          message.settings = CChatUsabilityClientUsabilityMetricsNotification_Settings.decode(reader, reader.uint32());
          break;
        case 11:
          message.voiceSettings = CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 12:
          message.uiState = CChatUsabilityClientUsabilityMetricsNotification_UIState.decode(reader, reader.uint32());
          break;
        case 13:
          message.metrics = CChatUsabilityClientUsabilityMetricsNotification_Metrics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification {
    return {
      metricsRunId: isSet(object.metricsRunId) ? Number(object.metricsRunId) : 0,
      clientBuild: isSet(object.clientBuild) ? Number(object.clientBuild) : 0,
      metricsVersion: isSet(object.metricsVersion) ? Number(object.metricsVersion) : 0,
      inWeb: isSet(object.inWeb) ? Boolean(object.inWeb) : false,
      settings: isSet(object.settings)
        ? CChatUsabilityClientUsabilityMetricsNotification_Settings.fromJSON(object.settings)
        : undefined,
      voiceSettings: isSet(object.voiceSettings)
        ? CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.fromJSON(object.voiceSettings)
        : undefined,
      uiState: isSet(object.uiState)
        ? CChatUsabilityClientUsabilityMetricsNotification_UIState.fromJSON(object.uiState)
        : undefined,
      metrics: isSet(object.metrics)
        ? CChatUsabilityClientUsabilityMetricsNotification_Metrics.fromJSON(object.metrics)
        : undefined,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification): unknown {
    const obj: any = {};
    message.metricsRunId !== undefined && (obj.metricsRunId = Math.round(message.metricsRunId));
    message.clientBuild !== undefined && (obj.clientBuild = Math.round(message.clientBuild));
    message.metricsVersion !== undefined && (obj.metricsVersion = Math.round(message.metricsVersion));
    message.inWeb !== undefined && (obj.inWeb = message.inWeb);
    message.settings !== undefined && (obj.settings = message.settings
      ? CChatUsabilityClientUsabilityMetricsNotification_Settings.toJSON(message.settings)
      : undefined);
    message.voiceSettings !== undefined && (obj.voiceSettings = message.voiceSettings
      ? CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.toJSON(message.voiceSettings)
      : undefined);
    message.uiState !== undefined && (obj.uiState = message.uiState
      ? CChatUsabilityClientUsabilityMetricsNotification_UIState.toJSON(message.uiState)
      : undefined);
    message.metrics !== undefined && (obj.metrics = message.metrics
      ? CChatUsabilityClientUsabilityMetricsNotification_Metrics.toJSON(message.metrics)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification>, I>>(
    base?: I,
  ): CChatUsabilityClientUsabilityMetricsNotification {
    return CChatUsabilityClientUsabilityMetricsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification>, I>>(
    object: I,
  ): CChatUsabilityClientUsabilityMetricsNotification {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification();
    message.metricsRunId = object.metricsRunId ?? 0;
    message.clientBuild = object.clientBuild ?? 0;
    message.metricsVersion = object.metricsVersion ?? 0;
    message.inWeb = object.inWeb ?? false;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? CChatUsabilityClientUsabilityMetricsNotification_Settings.fromPartial(object.settings)
      : undefined;
    message.voiceSettings = (object.voiceSettings !== undefined && object.voiceSettings !== null)
      ? CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.fromPartial(object.voiceSettings)
      : undefined;
    message.uiState = (object.uiState !== undefined && object.uiState !== null)
      ? CChatUsabilityClientUsabilityMetricsNotification_UIState.fromPartial(object.uiState)
      : undefined;
    message.metrics = (object.metrics !== undefined && object.metrics !== null)
      ? CChatUsabilityClientUsabilityMetricsNotification_Metrics.fromPartial(object.metrics)
      : undefined;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification_Settings(): CChatUsabilityClientUsabilityMetricsNotification_Settings {
  return {
    notificationsShowIngame: false,
    notificationsShowOnline: false,
    notificationsShowMessage: false,
    notificationsEventsAndAnnouncements: false,
    soundsPlayIngame: false,
    soundsPlayOnline: false,
    soundsPlayMessage: false,
    soundsEventsAndAnnouncements: false,
    alwaysNewChatWindow: false,
    forceAlphabeticFriendSorting: false,
    chatFlashMode: 0,
    rememberOpenChats: false,
    compactQuickAccess: false,
    compactFriendsList: false,
    notificationsShowChatRoomNotification: false,
    soundsPlayChatRoomNotification: false,
    hideOfflineFriendsInTagGroups: false,
    hideCategorizedFriends: false,
    categorizeInGameFriendsByGame: false,
    chatFontSize: 0,
    use24hourClock: false,
    doNotDisturbMode: false,
    disableEmbedInlining: false,
    signIntoFriends: false,
    animatedAvatars: false,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification_Settings = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification_Settings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.notificationsShowIngame === true) {
      writer.uint32(8).bool(message.notificationsShowIngame);
    }
    if (message.notificationsShowOnline === true) {
      writer.uint32(16).bool(message.notificationsShowOnline);
    }
    if (message.notificationsShowMessage === true) {
      writer.uint32(24).bool(message.notificationsShowMessage);
    }
    if (message.notificationsEventsAndAnnouncements === true) {
      writer.uint32(32).bool(message.notificationsEventsAndAnnouncements);
    }
    if (message.soundsPlayIngame === true) {
      writer.uint32(40).bool(message.soundsPlayIngame);
    }
    if (message.soundsPlayOnline === true) {
      writer.uint32(48).bool(message.soundsPlayOnline);
    }
    if (message.soundsPlayMessage === true) {
      writer.uint32(56).bool(message.soundsPlayMessage);
    }
    if (message.soundsEventsAndAnnouncements === true) {
      writer.uint32(64).bool(message.soundsEventsAndAnnouncements);
    }
    if (message.alwaysNewChatWindow === true) {
      writer.uint32(72).bool(message.alwaysNewChatWindow);
    }
    if (message.forceAlphabeticFriendSorting === true) {
      writer.uint32(80).bool(message.forceAlphabeticFriendSorting);
    }
    if (message.chatFlashMode !== 0) {
      writer.uint32(88).int32(message.chatFlashMode);
    }
    if (message.rememberOpenChats === true) {
      writer.uint32(96).bool(message.rememberOpenChats);
    }
    if (message.compactQuickAccess === true) {
      writer.uint32(104).bool(message.compactQuickAccess);
    }
    if (message.compactFriendsList === true) {
      writer.uint32(112).bool(message.compactFriendsList);
    }
    if (message.notificationsShowChatRoomNotification === true) {
      writer.uint32(120).bool(message.notificationsShowChatRoomNotification);
    }
    if (message.soundsPlayChatRoomNotification === true) {
      writer.uint32(128).bool(message.soundsPlayChatRoomNotification);
    }
    if (message.hideOfflineFriendsInTagGroups === true) {
      writer.uint32(136).bool(message.hideOfflineFriendsInTagGroups);
    }
    if (message.hideCategorizedFriends === true) {
      writer.uint32(144).bool(message.hideCategorizedFriends);
    }
    if (message.categorizeInGameFriendsByGame === true) {
      writer.uint32(152).bool(message.categorizeInGameFriendsByGame);
    }
    if (message.chatFontSize !== 0) {
      writer.uint32(160).int32(message.chatFontSize);
    }
    if (message.use24hourClock === true) {
      writer.uint32(168).bool(message.use24hourClock);
    }
    if (message.doNotDisturbMode === true) {
      writer.uint32(176).bool(message.doNotDisturbMode);
    }
    if (message.disableEmbedInlining === true) {
      writer.uint32(184).bool(message.disableEmbedInlining);
    }
    if (message.signIntoFriends === true) {
      writer.uint32(192).bool(message.signIntoFriends);
    }
    if (message.animatedAvatars === true) {
      writer.uint32(200).bool(message.animatedAvatars);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatUsabilityClientUsabilityMetricsNotification_Settings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_Settings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notificationsShowIngame = reader.bool();
          break;
        case 2:
          message.notificationsShowOnline = reader.bool();
          break;
        case 3:
          message.notificationsShowMessage = reader.bool();
          break;
        case 4:
          message.notificationsEventsAndAnnouncements = reader.bool();
          break;
        case 5:
          message.soundsPlayIngame = reader.bool();
          break;
        case 6:
          message.soundsPlayOnline = reader.bool();
          break;
        case 7:
          message.soundsPlayMessage = reader.bool();
          break;
        case 8:
          message.soundsEventsAndAnnouncements = reader.bool();
          break;
        case 9:
          message.alwaysNewChatWindow = reader.bool();
          break;
        case 10:
          message.forceAlphabeticFriendSorting = reader.bool();
          break;
        case 11:
          message.chatFlashMode = reader.int32();
          break;
        case 12:
          message.rememberOpenChats = reader.bool();
          break;
        case 13:
          message.compactQuickAccess = reader.bool();
          break;
        case 14:
          message.compactFriendsList = reader.bool();
          break;
        case 15:
          message.notificationsShowChatRoomNotification = reader.bool();
          break;
        case 16:
          message.soundsPlayChatRoomNotification = reader.bool();
          break;
        case 17:
          message.hideOfflineFriendsInTagGroups = reader.bool();
          break;
        case 18:
          message.hideCategorizedFriends = reader.bool();
          break;
        case 19:
          message.categorizeInGameFriendsByGame = reader.bool();
          break;
        case 20:
          message.chatFontSize = reader.int32();
          break;
        case 21:
          message.use24hourClock = reader.bool();
          break;
        case 22:
          message.doNotDisturbMode = reader.bool();
          break;
        case 23:
          message.disableEmbedInlining = reader.bool();
          break;
        case 24:
          message.signIntoFriends = reader.bool();
          break;
        case 25:
          message.animatedAvatars = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification_Settings {
    return {
      notificationsShowIngame: isSet(object.notificationsShowIngame) ? Boolean(object.notificationsShowIngame) : false,
      notificationsShowOnline: isSet(object.notificationsShowOnline) ? Boolean(object.notificationsShowOnline) : false,
      notificationsShowMessage: isSet(object.notificationsShowMessage)
        ? Boolean(object.notificationsShowMessage)
        : false,
      notificationsEventsAndAnnouncements: isSet(object.notificationsEventsAndAnnouncements)
        ? Boolean(object.notificationsEventsAndAnnouncements)
        : false,
      soundsPlayIngame: isSet(object.soundsPlayIngame) ? Boolean(object.soundsPlayIngame) : false,
      soundsPlayOnline: isSet(object.soundsPlayOnline) ? Boolean(object.soundsPlayOnline) : false,
      soundsPlayMessage: isSet(object.soundsPlayMessage) ? Boolean(object.soundsPlayMessage) : false,
      soundsEventsAndAnnouncements: isSet(object.soundsEventsAndAnnouncements)
        ? Boolean(object.soundsEventsAndAnnouncements)
        : false,
      alwaysNewChatWindow: isSet(object.alwaysNewChatWindow) ? Boolean(object.alwaysNewChatWindow) : false,
      forceAlphabeticFriendSorting: isSet(object.forceAlphabeticFriendSorting)
        ? Boolean(object.forceAlphabeticFriendSorting)
        : false,
      chatFlashMode: isSet(object.chatFlashMode) ? Number(object.chatFlashMode) : 0,
      rememberOpenChats: isSet(object.rememberOpenChats) ? Boolean(object.rememberOpenChats) : false,
      compactQuickAccess: isSet(object.compactQuickAccess) ? Boolean(object.compactQuickAccess) : false,
      compactFriendsList: isSet(object.compactFriendsList) ? Boolean(object.compactFriendsList) : false,
      notificationsShowChatRoomNotification: isSet(object.notificationsShowChatRoomNotification)
        ? Boolean(object.notificationsShowChatRoomNotification)
        : false,
      soundsPlayChatRoomNotification: isSet(object.soundsPlayChatRoomNotification)
        ? Boolean(object.soundsPlayChatRoomNotification)
        : false,
      hideOfflineFriendsInTagGroups: isSet(object.hideOfflineFriendsInTagGroups)
        ? Boolean(object.hideOfflineFriendsInTagGroups)
        : false,
      hideCategorizedFriends: isSet(object.hideCategorizedFriends) ? Boolean(object.hideCategorizedFriends) : false,
      categorizeInGameFriendsByGame: isSet(object.categorizeInGameFriendsByGame)
        ? Boolean(object.categorizeInGameFriendsByGame)
        : false,
      chatFontSize: isSet(object.chatFontSize) ? Number(object.chatFontSize) : 0,
      use24hourClock: isSet(object.use24hourClock) ? Boolean(object.use24hourClock) : false,
      doNotDisturbMode: isSet(object.doNotDisturbMode) ? Boolean(object.doNotDisturbMode) : false,
      disableEmbedInlining: isSet(object.disableEmbedInlining) ? Boolean(object.disableEmbedInlining) : false,
      signIntoFriends: isSet(object.signIntoFriends) ? Boolean(object.signIntoFriends) : false,
      animatedAvatars: isSet(object.animatedAvatars) ? Boolean(object.animatedAvatars) : false,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification_Settings): unknown {
    const obj: any = {};
    message.notificationsShowIngame !== undefined && (obj.notificationsShowIngame = message.notificationsShowIngame);
    message.notificationsShowOnline !== undefined && (obj.notificationsShowOnline = message.notificationsShowOnline);
    message.notificationsShowMessage !== undefined && (obj.notificationsShowMessage = message.notificationsShowMessage);
    message.notificationsEventsAndAnnouncements !== undefined &&
      (obj.notificationsEventsAndAnnouncements = message.notificationsEventsAndAnnouncements);
    message.soundsPlayIngame !== undefined && (obj.soundsPlayIngame = message.soundsPlayIngame);
    message.soundsPlayOnline !== undefined && (obj.soundsPlayOnline = message.soundsPlayOnline);
    message.soundsPlayMessage !== undefined && (obj.soundsPlayMessage = message.soundsPlayMessage);
    message.soundsEventsAndAnnouncements !== undefined &&
      (obj.soundsEventsAndAnnouncements = message.soundsEventsAndAnnouncements);
    message.alwaysNewChatWindow !== undefined && (obj.alwaysNewChatWindow = message.alwaysNewChatWindow);
    message.forceAlphabeticFriendSorting !== undefined &&
      (obj.forceAlphabeticFriendSorting = message.forceAlphabeticFriendSorting);
    message.chatFlashMode !== undefined && (obj.chatFlashMode = Math.round(message.chatFlashMode));
    message.rememberOpenChats !== undefined && (obj.rememberOpenChats = message.rememberOpenChats);
    message.compactQuickAccess !== undefined && (obj.compactQuickAccess = message.compactQuickAccess);
    message.compactFriendsList !== undefined && (obj.compactFriendsList = message.compactFriendsList);
    message.notificationsShowChatRoomNotification !== undefined &&
      (obj.notificationsShowChatRoomNotification = message.notificationsShowChatRoomNotification);
    message.soundsPlayChatRoomNotification !== undefined &&
      (obj.soundsPlayChatRoomNotification = message.soundsPlayChatRoomNotification);
    message.hideOfflineFriendsInTagGroups !== undefined &&
      (obj.hideOfflineFriendsInTagGroups = message.hideOfflineFriendsInTagGroups);
    message.hideCategorizedFriends !== undefined && (obj.hideCategorizedFriends = message.hideCategorizedFriends);
    message.categorizeInGameFriendsByGame !== undefined &&
      (obj.categorizeInGameFriendsByGame = message.categorizeInGameFriendsByGame);
    message.chatFontSize !== undefined && (obj.chatFontSize = Math.round(message.chatFontSize));
    message.use24hourClock !== undefined && (obj.use24hourClock = message.use24hourClock);
    message.doNotDisturbMode !== undefined && (obj.doNotDisturbMode = message.doNotDisturbMode);
    message.disableEmbedInlining !== undefined && (obj.disableEmbedInlining = message.disableEmbedInlining);
    message.signIntoFriends !== undefined && (obj.signIntoFriends = message.signIntoFriends);
    message.animatedAvatars !== undefined && (obj.animatedAvatars = message.animatedAvatars);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_Settings>, I>>(
    base?: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_Settings {
    return CChatUsabilityClientUsabilityMetricsNotification_Settings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_Settings>, I>>(
    object: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_Settings {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_Settings();
    message.notificationsShowIngame = object.notificationsShowIngame ?? false;
    message.notificationsShowOnline = object.notificationsShowOnline ?? false;
    message.notificationsShowMessage = object.notificationsShowMessage ?? false;
    message.notificationsEventsAndAnnouncements = object.notificationsEventsAndAnnouncements ?? false;
    message.soundsPlayIngame = object.soundsPlayIngame ?? false;
    message.soundsPlayOnline = object.soundsPlayOnline ?? false;
    message.soundsPlayMessage = object.soundsPlayMessage ?? false;
    message.soundsEventsAndAnnouncements = object.soundsEventsAndAnnouncements ?? false;
    message.alwaysNewChatWindow = object.alwaysNewChatWindow ?? false;
    message.forceAlphabeticFriendSorting = object.forceAlphabeticFriendSorting ?? false;
    message.chatFlashMode = object.chatFlashMode ?? 0;
    message.rememberOpenChats = object.rememberOpenChats ?? false;
    message.compactQuickAccess = object.compactQuickAccess ?? false;
    message.compactFriendsList = object.compactFriendsList ?? false;
    message.notificationsShowChatRoomNotification = object.notificationsShowChatRoomNotification ?? false;
    message.soundsPlayChatRoomNotification = object.soundsPlayChatRoomNotification ?? false;
    message.hideOfflineFriendsInTagGroups = object.hideOfflineFriendsInTagGroups ?? false;
    message.hideCategorizedFriends = object.hideCategorizedFriends ?? false;
    message.categorizeInGameFriendsByGame = object.categorizeInGameFriendsByGame ?? false;
    message.chatFontSize = object.chatFontSize ?? 0;
    message.use24hourClock = object.use24hourClock ?? false;
    message.doNotDisturbMode = object.doNotDisturbMode ?? false;
    message.disableEmbedInlining = object.disableEmbedInlining ?? false;
    message.signIntoFriends = object.signIntoFriends ?? false;
    message.animatedAvatars = object.animatedAvatars ?? false;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification_VoiceSettings(): CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
  return {
    voiceInputGain: 0,
    voiceOutputGain: 0,
    noiseGateLevel: 0,
    voiceUseEchoCancellation: false,
    voiceUseNoiseCancellation: false,
    voiceUseAutoGainControl: false,
    selectedNonDefaultMic: false,
    selectedNonDefaultOutput: false,
    pushToTalkEnabled: false,
    pushToMuteEnabled: false,
    playPttSounds: false,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.voiceInputGain !== 0) {
      writer.uint32(13).float(message.voiceInputGain);
    }
    if (message.voiceOutputGain !== 0) {
      writer.uint32(21).float(message.voiceOutputGain);
    }
    if (message.noiseGateLevel !== 0) {
      writer.uint32(24).int32(message.noiseGateLevel);
    }
    if (message.voiceUseEchoCancellation === true) {
      writer.uint32(32).bool(message.voiceUseEchoCancellation);
    }
    if (message.voiceUseNoiseCancellation === true) {
      writer.uint32(40).bool(message.voiceUseNoiseCancellation);
    }
    if (message.voiceUseAutoGainControl === true) {
      writer.uint32(48).bool(message.voiceUseAutoGainControl);
    }
    if (message.selectedNonDefaultMic === true) {
      writer.uint32(56).bool(message.selectedNonDefaultMic);
    }
    if (message.selectedNonDefaultOutput === true) {
      writer.uint32(64).bool(message.selectedNonDefaultOutput);
    }
    if (message.pushToTalkEnabled === true) {
      writer.uint32(72).bool(message.pushToTalkEnabled);
    }
    if (message.pushToMuteEnabled === true) {
      writer.uint32(80).bool(message.pushToMuteEnabled);
    }
    if (message.playPttSounds === true) {
      writer.uint32(88).bool(message.playPttSounds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_VoiceSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voiceInputGain = reader.float();
          break;
        case 2:
          message.voiceOutputGain = reader.float();
          break;
        case 3:
          message.noiseGateLevel = reader.int32();
          break;
        case 4:
          message.voiceUseEchoCancellation = reader.bool();
          break;
        case 5:
          message.voiceUseNoiseCancellation = reader.bool();
          break;
        case 6:
          message.voiceUseAutoGainControl = reader.bool();
          break;
        case 7:
          message.selectedNonDefaultMic = reader.bool();
          break;
        case 8:
          message.selectedNonDefaultOutput = reader.bool();
          break;
        case 9:
          message.pushToTalkEnabled = reader.bool();
          break;
        case 10:
          message.pushToMuteEnabled = reader.bool();
          break;
        case 11:
          message.playPttSounds = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
    return {
      voiceInputGain: isSet(object.voiceInputGain) ? Number(object.voiceInputGain) : 0,
      voiceOutputGain: isSet(object.voiceOutputGain) ? Number(object.voiceOutputGain) : 0,
      noiseGateLevel: isSet(object.noiseGateLevel) ? Number(object.noiseGateLevel) : 0,
      voiceUseEchoCancellation: isSet(object.voiceUseEchoCancellation)
        ? Boolean(object.voiceUseEchoCancellation)
        : false,
      voiceUseNoiseCancellation: isSet(object.voiceUseNoiseCancellation)
        ? Boolean(object.voiceUseNoiseCancellation)
        : false,
      voiceUseAutoGainControl: isSet(object.voiceUseAutoGainControl) ? Boolean(object.voiceUseAutoGainControl) : false,
      selectedNonDefaultMic: isSet(object.selectedNonDefaultMic) ? Boolean(object.selectedNonDefaultMic) : false,
      selectedNonDefaultOutput: isSet(object.selectedNonDefaultOutput)
        ? Boolean(object.selectedNonDefaultOutput)
        : false,
      pushToTalkEnabled: isSet(object.pushToTalkEnabled) ? Boolean(object.pushToTalkEnabled) : false,
      pushToMuteEnabled: isSet(object.pushToMuteEnabled) ? Boolean(object.pushToMuteEnabled) : false,
      playPttSounds: isSet(object.playPttSounds) ? Boolean(object.playPttSounds) : false,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings): unknown {
    const obj: any = {};
    message.voiceInputGain !== undefined && (obj.voiceInputGain = message.voiceInputGain);
    message.voiceOutputGain !== undefined && (obj.voiceOutputGain = message.voiceOutputGain);
    message.noiseGateLevel !== undefined && (obj.noiseGateLevel = Math.round(message.noiseGateLevel));
    message.voiceUseEchoCancellation !== undefined && (obj.voiceUseEchoCancellation = message.voiceUseEchoCancellation);
    message.voiceUseNoiseCancellation !== undefined &&
      (obj.voiceUseNoiseCancellation = message.voiceUseNoiseCancellation);
    message.voiceUseAutoGainControl !== undefined && (obj.voiceUseAutoGainControl = message.voiceUseAutoGainControl);
    message.selectedNonDefaultMic !== undefined && (obj.selectedNonDefaultMic = message.selectedNonDefaultMic);
    message.selectedNonDefaultOutput !== undefined && (obj.selectedNonDefaultOutput = message.selectedNonDefaultOutput);
    message.pushToTalkEnabled !== undefined && (obj.pushToTalkEnabled = message.pushToTalkEnabled);
    message.pushToMuteEnabled !== undefined && (obj.pushToMuteEnabled = message.pushToMuteEnabled);
    message.playPttSounds !== undefined && (obj.playPttSounds = message.playPttSounds);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings>, I>>(
    base?: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
    return CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings>, I>>(
    object: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_VoiceSettings {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_VoiceSettings();
    message.voiceInputGain = object.voiceInputGain ?? 0;
    message.voiceOutputGain = object.voiceOutputGain ?? 0;
    message.noiseGateLevel = object.noiseGateLevel ?? 0;
    message.voiceUseEchoCancellation = object.voiceUseEchoCancellation ?? false;
    message.voiceUseNoiseCancellation = object.voiceUseNoiseCancellation ?? false;
    message.voiceUseAutoGainControl = object.voiceUseAutoGainControl ?? false;
    message.selectedNonDefaultMic = object.selectedNonDefaultMic ?? false;
    message.selectedNonDefaultOutput = object.selectedNonDefaultOutput ?? false;
    message.pushToTalkEnabled = object.pushToTalkEnabled ?? false;
    message.pushToMuteEnabled = object.pushToMuteEnabled ?? false;
    message.playPttSounds = object.playPttSounds ?? false;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState(): CChatUsabilityClientUsabilityMetricsNotification_UIState {
  return {
    friendsListHeight: 0,
    friendsListWidth: 0,
    friendsListDocked: false,
    friendsListCollapsed: false,
    friendsListGroupChatsHeight: 0,
    friendsListVisible: false,
    chatPopupsOpened: 0,
    groupChatTabsOpened: 0,
    friendChatTabsOpened: 0,
    chatWindowWidth: 0,
    chatWindowHeight: 0,
    categoryCollapse: undefined,
    groupChatLeftColCollapsed: 0,
    groupChatRightColCollapsed: 0,
    inOneOnOneVoiceChat: false,
    inGroupVoiceChat: false,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification_UIState = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification_UIState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.friendsListHeight !== 0) {
      writer.uint32(8).int32(message.friendsListHeight);
    }
    if (message.friendsListWidth !== 0) {
      writer.uint32(16).int32(message.friendsListWidth);
    }
    if (message.friendsListDocked === true) {
      writer.uint32(24).bool(message.friendsListDocked);
    }
    if (message.friendsListCollapsed === true) {
      writer.uint32(32).bool(message.friendsListCollapsed);
    }
    if (message.friendsListGroupChatsHeight !== 0) {
      writer.uint32(40).int32(message.friendsListGroupChatsHeight);
    }
    if (message.friendsListVisible === true) {
      writer.uint32(48).bool(message.friendsListVisible);
    }
    if (message.chatPopupsOpened !== 0) {
      writer.uint32(56).int32(message.chatPopupsOpened);
    }
    if (message.groupChatTabsOpened !== 0) {
      writer.uint32(64).int32(message.groupChatTabsOpened);
    }
    if (message.friendChatTabsOpened !== 0) {
      writer.uint32(72).int32(message.friendChatTabsOpened);
    }
    if (message.chatWindowWidth !== 0) {
      writer.uint32(80).int32(message.chatWindowWidth);
    }
    if (message.chatWindowHeight !== 0) {
      writer.uint32(88).int32(message.chatWindowHeight);
    }
    if (message.categoryCollapse !== undefined) {
      CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState.encode(
        message.categoryCollapse,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.groupChatLeftColCollapsed !== 0) {
      writer.uint32(104).int32(message.groupChatLeftColCollapsed);
    }
    if (message.groupChatRightColCollapsed !== 0) {
      writer.uint32(112).int32(message.groupChatRightColCollapsed);
    }
    if (message.inOneOnOneVoiceChat === true) {
      writer.uint32(120).bool(message.inOneOnOneVoiceChat);
    }
    if (message.inGroupVoiceChat === true) {
      writer.uint32(128).bool(message.inGroupVoiceChat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatUsabilityClientUsabilityMetricsNotification_UIState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friendsListHeight = reader.int32();
          break;
        case 2:
          message.friendsListWidth = reader.int32();
          break;
        case 3:
          message.friendsListDocked = reader.bool();
          break;
        case 4:
          message.friendsListCollapsed = reader.bool();
          break;
        case 5:
          message.friendsListGroupChatsHeight = reader.int32();
          break;
        case 6:
          message.friendsListVisible = reader.bool();
          break;
        case 7:
          message.chatPopupsOpened = reader.int32();
          break;
        case 8:
          message.groupChatTabsOpened = reader.int32();
          break;
        case 9:
          message.friendChatTabsOpened = reader.int32();
          break;
        case 10:
          message.chatWindowWidth = reader.int32();
          break;
        case 11:
          message.chatWindowHeight = reader.int32();
          break;
        case 12:
          message.categoryCollapse = CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState
            .decode(reader, reader.uint32());
          break;
        case 13:
          message.groupChatLeftColCollapsed = reader.int32();
          break;
        case 14:
          message.groupChatRightColCollapsed = reader.int32();
          break;
        case 15:
          message.inOneOnOneVoiceChat = reader.bool();
          break;
        case 16:
          message.inGroupVoiceChat = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification_UIState {
    return {
      friendsListHeight: isSet(object.friendsListHeight) ? Number(object.friendsListHeight) : 0,
      friendsListWidth: isSet(object.friendsListWidth) ? Number(object.friendsListWidth) : 0,
      friendsListDocked: isSet(object.friendsListDocked) ? Boolean(object.friendsListDocked) : false,
      friendsListCollapsed: isSet(object.friendsListCollapsed) ? Boolean(object.friendsListCollapsed) : false,
      friendsListGroupChatsHeight: isSet(object.friendsListGroupChatsHeight)
        ? Number(object.friendsListGroupChatsHeight)
        : 0,
      friendsListVisible: isSet(object.friendsListVisible) ? Boolean(object.friendsListVisible) : false,
      chatPopupsOpened: isSet(object.chatPopupsOpened) ? Number(object.chatPopupsOpened) : 0,
      groupChatTabsOpened: isSet(object.groupChatTabsOpened) ? Number(object.groupChatTabsOpened) : 0,
      friendChatTabsOpened: isSet(object.friendChatTabsOpened) ? Number(object.friendChatTabsOpened) : 0,
      chatWindowWidth: isSet(object.chatWindowWidth) ? Number(object.chatWindowWidth) : 0,
      chatWindowHeight: isSet(object.chatWindowHeight) ? Number(object.chatWindowHeight) : 0,
      categoryCollapse: isSet(object.categoryCollapse)
        ? CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState.fromJSON(
          object.categoryCollapse,
        )
        : undefined,
      groupChatLeftColCollapsed: isSet(object.groupChatLeftColCollapsed) ? Number(object.groupChatLeftColCollapsed) : 0,
      groupChatRightColCollapsed: isSet(object.groupChatRightColCollapsed)
        ? Number(object.groupChatRightColCollapsed)
        : 0,
      inOneOnOneVoiceChat: isSet(object.inOneOnOneVoiceChat) ? Boolean(object.inOneOnOneVoiceChat) : false,
      inGroupVoiceChat: isSet(object.inGroupVoiceChat) ? Boolean(object.inGroupVoiceChat) : false,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification_UIState): unknown {
    const obj: any = {};
    message.friendsListHeight !== undefined && (obj.friendsListHeight = Math.round(message.friendsListHeight));
    message.friendsListWidth !== undefined && (obj.friendsListWidth = Math.round(message.friendsListWidth));
    message.friendsListDocked !== undefined && (obj.friendsListDocked = message.friendsListDocked);
    message.friendsListCollapsed !== undefined && (obj.friendsListCollapsed = message.friendsListCollapsed);
    message.friendsListGroupChatsHeight !== undefined &&
      (obj.friendsListGroupChatsHeight = Math.round(message.friendsListGroupChatsHeight));
    message.friendsListVisible !== undefined && (obj.friendsListVisible = message.friendsListVisible);
    message.chatPopupsOpened !== undefined && (obj.chatPopupsOpened = Math.round(message.chatPopupsOpened));
    message.groupChatTabsOpened !== undefined && (obj.groupChatTabsOpened = Math.round(message.groupChatTabsOpened));
    message.friendChatTabsOpened !== undefined && (obj.friendChatTabsOpened = Math.round(message.friendChatTabsOpened));
    message.chatWindowWidth !== undefined && (obj.chatWindowWidth = Math.round(message.chatWindowWidth));
    message.chatWindowHeight !== undefined && (obj.chatWindowHeight = Math.round(message.chatWindowHeight));
    message.categoryCollapse !== undefined && (obj.categoryCollapse = message.categoryCollapse
      ? CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState.toJSON(message.categoryCollapse)
      : undefined);
    message.groupChatLeftColCollapsed !== undefined &&
      (obj.groupChatLeftColCollapsed = Math.round(message.groupChatLeftColCollapsed));
    message.groupChatRightColCollapsed !== undefined &&
      (obj.groupChatRightColCollapsed = Math.round(message.groupChatRightColCollapsed));
    message.inOneOnOneVoiceChat !== undefined && (obj.inOneOnOneVoiceChat = message.inOneOnOneVoiceChat);
    message.inGroupVoiceChat !== undefined && (obj.inGroupVoiceChat = message.inGroupVoiceChat);
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_UIState>, I>>(
    base?: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_UIState {
    return CChatUsabilityClientUsabilityMetricsNotification_UIState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_UIState>, I>>(
    object: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_UIState {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState();
    message.friendsListHeight = object.friendsListHeight ?? 0;
    message.friendsListWidth = object.friendsListWidth ?? 0;
    message.friendsListDocked = object.friendsListDocked ?? false;
    message.friendsListCollapsed = object.friendsListCollapsed ?? false;
    message.friendsListGroupChatsHeight = object.friendsListGroupChatsHeight ?? 0;
    message.friendsListVisible = object.friendsListVisible ?? false;
    message.chatPopupsOpened = object.chatPopupsOpened ?? 0;
    message.groupChatTabsOpened = object.groupChatTabsOpened ?? 0;
    message.friendChatTabsOpened = object.friendChatTabsOpened ?? 0;
    message.chatWindowWidth = object.chatWindowWidth ?? 0;
    message.chatWindowHeight = object.chatWindowHeight ?? 0;
    message.categoryCollapse = (object.categoryCollapse !== undefined && object.categoryCollapse !== null)
      ? CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState.fromPartial(
        object.categoryCollapse,
      )
      : undefined;
    message.groupChatLeftColCollapsed = object.groupChatLeftColCollapsed ?? 0;
    message.groupChatRightColCollapsed = object.groupChatRightColCollapsed ?? 0;
    message.inOneOnOneVoiceChat = object.inOneOnOneVoiceChat ?? false;
    message.inGroupVoiceChat = object.inGroupVoiceChat ?? false;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState(): CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
  return {
    inGameCollapsed: false,
    onlineCollapsed: false,
    offlineCollapsed: false,
    gameGroupsCollapsed: 0,
    categoriesCollapsed: 0,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.inGameCollapsed === true) {
      writer.uint32(8).bool(message.inGameCollapsed);
    }
    if (message.onlineCollapsed === true) {
      writer.uint32(16).bool(message.onlineCollapsed);
    }
    if (message.offlineCollapsed === true) {
      writer.uint32(24).bool(message.offlineCollapsed);
    }
    if (message.gameGroupsCollapsed !== 0) {
      writer.uint32(32).int32(message.gameGroupsCollapsed);
    }
    if (message.categoriesCollapsed !== 0) {
      writer.uint32(40).int32(message.categoriesCollapsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inGameCollapsed = reader.bool();
          break;
        case 2:
          message.onlineCollapsed = reader.bool();
          break;
        case 3:
          message.offlineCollapsed = reader.bool();
          break;
        case 4:
          message.gameGroupsCollapsed = reader.int32();
          break;
        case 5:
          message.categoriesCollapsed = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
    return {
      inGameCollapsed: isSet(object.inGameCollapsed) ? Boolean(object.inGameCollapsed) : false,
      onlineCollapsed: isSet(object.onlineCollapsed) ? Boolean(object.onlineCollapsed) : false,
      offlineCollapsed: isSet(object.offlineCollapsed) ? Boolean(object.offlineCollapsed) : false,
      gameGroupsCollapsed: isSet(object.gameGroupsCollapsed) ? Number(object.gameGroupsCollapsed) : 0,
      categoriesCollapsed: isSet(object.categoriesCollapsed) ? Number(object.categoriesCollapsed) : 0,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState): unknown {
    const obj: any = {};
    message.inGameCollapsed !== undefined && (obj.inGameCollapsed = message.inGameCollapsed);
    message.onlineCollapsed !== undefined && (obj.onlineCollapsed = message.onlineCollapsed);
    message.offlineCollapsed !== undefined && (obj.offlineCollapsed = message.offlineCollapsed);
    message.gameGroupsCollapsed !== undefined && (obj.gameGroupsCollapsed = Math.round(message.gameGroupsCollapsed));
    message.categoriesCollapsed !== undefined && (obj.categoriesCollapsed = Math.round(message.categoriesCollapsed));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState>, I>,
  >(base?: I): CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
    return CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState>, I>,
  >(object: I): CChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_UIState_CategoryCollapseState();
    message.inGameCollapsed = object.inGameCollapsed ?? false;
    message.onlineCollapsed = object.onlineCollapsed ?? false;
    message.offlineCollapsed = object.offlineCollapsed ?? false;
    message.gameGroupsCollapsed = object.gameGroupsCollapsed ?? 0;
    message.categoriesCollapsed = object.categoriesCollapsed ?? 0;
    return message;
  },
};

function createBaseCChatUsabilityClientUsabilityMetricsNotification_Metrics(): CChatUsabilityClientUsabilityMetricsNotification_Metrics {
  return {
    friendsCount: 0,
    friendsCategoryCount: 0,
    friendsCategorizedCount: 0,
    friendsOnlineCount: 0,
    friendsInGameCount: 0,
    friendsInGameSingletonCount: 0,
    gameGroupCount: 0,
    friendsFavoriteCount: 0,
    groupChatCount: 0,
    groupChatFavoriteCount: 0,
  };
}

export const CChatUsabilityClientUsabilityMetricsNotification_Metrics = {
  encode(
    message: CChatUsabilityClientUsabilityMetricsNotification_Metrics,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.friendsCount !== 0) {
      writer.uint32(8).int32(message.friendsCount);
    }
    if (message.friendsCategoryCount !== 0) {
      writer.uint32(16).int32(message.friendsCategoryCount);
    }
    if (message.friendsCategorizedCount !== 0) {
      writer.uint32(24).int32(message.friendsCategorizedCount);
    }
    if (message.friendsOnlineCount !== 0) {
      writer.uint32(32).int32(message.friendsOnlineCount);
    }
    if (message.friendsInGameCount !== 0) {
      writer.uint32(40).int32(message.friendsInGameCount);
    }
    if (message.friendsInGameSingletonCount !== 0) {
      writer.uint32(48).int32(message.friendsInGameSingletonCount);
    }
    if (message.gameGroupCount !== 0) {
      writer.uint32(56).int32(message.gameGroupCount);
    }
    if (message.friendsFavoriteCount !== 0) {
      writer.uint32(64).int32(message.friendsFavoriteCount);
    }
    if (message.groupChatCount !== 0) {
      writer.uint32(72).int32(message.groupChatCount);
    }
    if (message.groupChatFavoriteCount !== 0) {
      writer.uint32(80).int32(message.groupChatFavoriteCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatUsabilityClientUsabilityMetricsNotification_Metrics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_Metrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friendsCount = reader.int32();
          break;
        case 2:
          message.friendsCategoryCount = reader.int32();
          break;
        case 3:
          message.friendsCategorizedCount = reader.int32();
          break;
        case 4:
          message.friendsOnlineCount = reader.int32();
          break;
        case 5:
          message.friendsInGameCount = reader.int32();
          break;
        case 6:
          message.friendsInGameSingletonCount = reader.int32();
          break;
        case 7:
          message.gameGroupCount = reader.int32();
          break;
        case 8:
          message.friendsFavoriteCount = reader.int32();
          break;
        case 9:
          message.groupChatCount = reader.int32();
          break;
        case 10:
          message.groupChatFavoriteCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityClientUsabilityMetricsNotification_Metrics {
    return {
      friendsCount: isSet(object.friendsCount) ? Number(object.friendsCount) : 0,
      friendsCategoryCount: isSet(object.friendsCategoryCount) ? Number(object.friendsCategoryCount) : 0,
      friendsCategorizedCount: isSet(object.friendsCategorizedCount) ? Number(object.friendsCategorizedCount) : 0,
      friendsOnlineCount: isSet(object.friendsOnlineCount) ? Number(object.friendsOnlineCount) : 0,
      friendsInGameCount: isSet(object.friendsInGameCount) ? Number(object.friendsInGameCount) : 0,
      friendsInGameSingletonCount: isSet(object.friendsInGameSingletonCount)
        ? Number(object.friendsInGameSingletonCount)
        : 0,
      gameGroupCount: isSet(object.gameGroupCount) ? Number(object.gameGroupCount) : 0,
      friendsFavoriteCount: isSet(object.friendsFavoriteCount) ? Number(object.friendsFavoriteCount) : 0,
      groupChatCount: isSet(object.groupChatCount) ? Number(object.groupChatCount) : 0,
      groupChatFavoriteCount: isSet(object.groupChatFavoriteCount) ? Number(object.groupChatFavoriteCount) : 0,
    };
  },

  toJSON(message: CChatUsabilityClientUsabilityMetricsNotification_Metrics): unknown {
    const obj: any = {};
    message.friendsCount !== undefined && (obj.friendsCount = Math.round(message.friendsCount));
    message.friendsCategoryCount !== undefined && (obj.friendsCategoryCount = Math.round(message.friendsCategoryCount));
    message.friendsCategorizedCount !== undefined &&
      (obj.friendsCategorizedCount = Math.round(message.friendsCategorizedCount));
    message.friendsOnlineCount !== undefined && (obj.friendsOnlineCount = Math.round(message.friendsOnlineCount));
    message.friendsInGameCount !== undefined && (obj.friendsInGameCount = Math.round(message.friendsInGameCount));
    message.friendsInGameSingletonCount !== undefined &&
      (obj.friendsInGameSingletonCount = Math.round(message.friendsInGameSingletonCount));
    message.gameGroupCount !== undefined && (obj.gameGroupCount = Math.round(message.gameGroupCount));
    message.friendsFavoriteCount !== undefined && (obj.friendsFavoriteCount = Math.round(message.friendsFavoriteCount));
    message.groupChatCount !== undefined && (obj.groupChatCount = Math.round(message.groupChatCount));
    message.groupChatFavoriteCount !== undefined &&
      (obj.groupChatFavoriteCount = Math.round(message.groupChatFavoriteCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_Metrics>, I>>(
    base?: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_Metrics {
    return CChatUsabilityClientUsabilityMetricsNotification_Metrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityClientUsabilityMetricsNotification_Metrics>, I>>(
    object: I,
  ): CChatUsabilityClientUsabilityMetricsNotification_Metrics {
    const message = createBaseCChatUsabilityClientUsabilityMetricsNotification_Metrics();
    message.friendsCount = object.friendsCount ?? 0;
    message.friendsCategoryCount = object.friendsCategoryCount ?? 0;
    message.friendsCategorizedCount = object.friendsCategorizedCount ?? 0;
    message.friendsOnlineCount = object.friendsOnlineCount ?? 0;
    message.friendsInGameCount = object.friendsInGameCount ?? 0;
    message.friendsInGameSingletonCount = object.friendsInGameSingletonCount ?? 0;
    message.gameGroupCount = object.gameGroupCount ?? 0;
    message.friendsFavoriteCount = object.friendsFavoriteCount ?? 0;
    message.groupChatCount = object.groupChatCount ?? 0;
    message.groupChatFavoriteCount = object.groupChatFavoriteCount ?? 0;
    return message;
  },
};

function createBaseCChatUsabilityRequestClientUsabilityMetricsNotification(): CChatUsabilityRequestClientUsabilityMetricsNotification {
  return { metricsRunId: 0 };
}

export const CChatUsabilityRequestClientUsabilityMetricsNotification = {
  encode(
    message: CChatUsabilityRequestClientUsabilityMetricsNotification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metricsRunId !== 0) {
      writer.uint32(8).uint32(message.metricsRunId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CChatUsabilityRequestClientUsabilityMetricsNotification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCChatUsabilityRequestClientUsabilityMetricsNotification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricsRunId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CChatUsabilityRequestClientUsabilityMetricsNotification {
    return { metricsRunId: isSet(object.metricsRunId) ? Number(object.metricsRunId) : 0 };
  },

  toJSON(message: CChatUsabilityRequestClientUsabilityMetricsNotification): unknown {
    const obj: any = {};
    message.metricsRunId !== undefined && (obj.metricsRunId = Math.round(message.metricsRunId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CChatUsabilityRequestClientUsabilityMetricsNotification>, I>>(
    base?: I,
  ): CChatUsabilityRequestClientUsabilityMetricsNotification {
    return CChatUsabilityRequestClientUsabilityMetricsNotification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CChatUsabilityRequestClientUsabilityMetricsNotification>, I>>(
    object: I,
  ): CChatUsabilityRequestClientUsabilityMetricsNotification {
    const message = createBaseCChatUsabilityRequestClientUsabilityMetricsNotification();
    message.metricsRunId = object.metricsRunId ?? 0;
    return message;
  },
};

export interface Chat {
  RequestFriendPersonaStates(
    request: CChatRequestFriendPersonaStatesRequest,
  ): Promise<CChatRequestFriendPersonaStatesResponse>;
}

export class ChatClientImpl implements Chat {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "Chat";
    this.rpc = rpc;
    this.RequestFriendPersonaStates = this.RequestFriendPersonaStates.bind(this);
  }
  RequestFriendPersonaStates(
    request: CChatRequestFriendPersonaStatesRequest,
  ): Promise<CChatRequestFriendPersonaStatesResponse> {
    const data = CChatRequestFriendPersonaStatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestFriendPersonaStates", data);
    return promise.then((data) => CChatRequestFriendPersonaStatesResponse.decode(new _m0.Reader(data)));
  }
}

export interface ChatRoom {
  CreateChatRoomGroup(request: CChatRoomCreateChatRoomGroupRequest): Promise<CChatRoomCreateChatRoomGroupResponse>;
  SaveChatRoomGroup(request: CChatRoomSaveChatRoomGroupRequest): Promise<CChatRoomSaveChatRoomGroupResponse>;
  RenameChatRoomGroup(request: CChatRoomRenameChatRoomGroupRequest): Promise<CChatRoomRenameChatRoomGroupResponse>;
  SetChatRoomGroupTagline(
    request: CChatRoomSetChatRoomGroupTaglineRequest,
  ): Promise<CChatRoomSetChatRoomGroupTaglineResponse>;
  SetChatRoomGroupAvatar(
    request: CChatRoomSetChatRoomGroupAvatarRequest,
  ): Promise<CChatRoomSetChatRoomGroupAvatarResponse>;
  SetChatRoomGroupWatchingBroadcast(
    request: CChatRoomSetChatRoomGroupWatchingBroadcastRequest,
  ): Promise<CChatRoomSetChatRoomGroupWatchingBroadcastResponse>;
  JoinMiniGameForChatRoomGroup(
    request: CChatRoomJoinMiniGameForChatRoomGroupRequest,
  ): Promise<CChatRoomJoinMiniGameForChatRoomGroupResponse>;
  EndMiniGameForChatRoomGroup(
    request: CChatRoomEndMiniGameForChatRoomGroupRequest,
  ): Promise<CChatRoomEndMiniGameForChatRoomGroupResponse>;
  MuteUserInGroup(request: CChatRoomMuteUserRequest): Promise<CChatRoomMuteUserResponse>;
  KickUserFromGroup(request: CChatRoomKickUserRequest): Promise<CChatRoomKickUserResponse>;
  SetUserBanState(request: CChatRoomSetUserBanStateRequest): Promise<CChatRoomSetUserBanStateResponse>;
  RevokeInviteToGroup(request: CChatRoomRevokeInviteRequest): Promise<CChatRoomRevokeInviteResponse>;
  CreateRole(request: CChatRoomCreateRoleRequest): Promise<CChatRoomCreateRoleResponse>;
  GetRoles(request: CChatRoomGetRolesRequest): Promise<CChatRoomGetRolesResponse>;
  RenameRole(request: CChatRoomRenameRoleRequest): Promise<CChatRoomRenameRoleResponse>;
  ReorderRole(request: CChatRoomReorderRoleRequest): Promise<CChatRoomReorderRoleResponse>;
  DeleteRole(request: CChatRoomDeleteRoleRequest): Promise<CChatRoomDeleteRoleResponse>;
  GetRoleActions(request: CChatRoomGetRoleActionsRequest): Promise<CChatRoomGetRoleActionsResponse>;
  ReplaceRoleActions(request: CChatRoomReplaceRoleActionsRequest): Promise<CChatRoomReplaceRoleActionsResponse>;
  AddRoleToUser(request: CChatRoomAddRoleToUserRequest): Promise<CChatRoomAddRoleToUserResponse>;
  GetRolesForUser(request: CChatRoomGetRolesForUserRequest): Promise<CChatRoomGetRolesForUserResponse>;
  DeleteRoleFromUser(request: CChatRoomDeleteRoleFromUserRequest): Promise<CChatRoomDeleteRoleFromUserResponse>;
  JoinChatRoomGroup(request: CChatRoomJoinChatRoomGroupRequest): Promise<CChatRoomJoinChatRoomGroupResponse>;
  InviteFriendToChatRoomGroup(
    request: CChatRoomInviteFriendToChatRoomGroupRequest,
  ): Promise<CChatRoomInviteFriendToChatRoomGroupResponse>;
  LeaveChatRoomGroup(request: CChatRoomLeaveChatRoomGroupRequest): Promise<CChatRoomLeaveChatRoomGroupResponse>;
  CreateChatRoom(request: CChatRoomCreateChatRoomRequest): Promise<CChatRoomCreateChatRoomResponse>;
  DeleteChatRoom(request: CChatRoomDeleteChatRoomRequest): Promise<CChatRoomDeleteChatRoomResponse>;
  RenameChatRoom(request: CChatRoomRenameChatRoomRequest): Promise<CChatRoomRenameChatRoomResponse>;
  ReorderChatRoom(request: CChatRoomReorderChatRoomRequest): Promise<CChatRoomReorderChatRoomResponse>;
  SendChatMessage(request: CChatRoomSendChatMessageRequest): Promise<CChatRoomSendChatMessageResponse>;
  JoinVoiceChat(request: CChatRoomJoinVoiceChatRequest): Promise<CChatRoomJoinVoiceChatResponse>;
  LeaveVoiceChat(request: CChatRoomLeaveVoiceChatRequest): Promise<CChatRoomLeaveVoiceChatResponse>;
  GetMessageHistory(request: CChatRoomGetMessageHistoryRequest): Promise<CChatRoomGetMessageHistoryResponse>;
  GetMyChatRoomGroups(request: CChatRoomGetMyChatRoomGroupsRequest): Promise<CChatRoomGetMyChatRoomGroupsResponse>;
  GetChatRoomGroupState(
    request: CChatRoomGetChatRoomGroupStateRequest,
  ): Promise<CChatRoomGetChatRoomGroupStateResponse>;
  GetChatRoomGroupSummary(
    request: CChatRoomGetChatRoomGroupSummaryRequest,
  ): Promise<CChatRoomGetChatRoomGroupSummaryResponse>;
  SetAppChatRoomGroupForceActive(
    request: CChatRoomSetAppChatRoomGroupForceActiveRequest,
  ): Promise<CChatRoomSetAppChatRoomGroupForceActiveResponse>;
  SetAppChatRoomGroupStopForceActive(
    request: CChatRoomSetAppChatRoomGroupStopForceActiveNotification,
  ): Promise<NoResponse>;
  AckChatMessage(request: CChatRoomAckChatMessageNotification): Promise<NoResponse>;
  CreateInviteLink(request: CChatRoomCreateInviteLinkRequest): Promise<CChatRoomCreateInviteLinkResponse>;
  GetInviteLinkInfo(request: CChatRoomGetInviteLinkInfoRequest): Promise<CChatRoomGetInviteLinkInfoResponse>;
  GetInviteInfo(request: CChatRoomGetInviteInfoRequest): Promise<CChatRoomGetInviteInfoResponse>;
  GetInviteLinksForGroup(
    request: CChatRoomGetInviteLinksForGroupRequest,
  ): Promise<CChatRoomGetInviteLinksForGroupResponse>;
  GetBanList(request: CChatRoomGetBanListRequest): Promise<CChatRoomGetBanListResponse>;
  GetInviteList(request: CChatRoomGetInviteListRequest): Promise<CChatRoomGetInviteListResponse>;
  DeleteInviteLink(request: CChatRoomDeleteInviteLinkRequest): Promise<CChatRoomDeleteInviteLinkResponse>;
  SetSessionActiveChatRoomGroups(
    request: CChatRoomSetSessionActiveChatRoomGroupsRequest,
  ): Promise<CChatRoomSetSessionActiveChatRoomGroupsResponse>;
  SetUserChatGroupPreferences(
    request: CChatRoomSetUserChatGroupPreferencesRequest,
  ): Promise<CChatRoomSetUserChatGroupPreferencesResponse>;
  DeleteChatMessages(request: CChatRoomDeleteChatMessagesRequest): Promise<CChatRoomDeleteChatMessagesResponse>;
  UpdateMemberListView(request: CChatRoomUpdateMemberListViewNotification): Promise<NoResponse>;
  SearchMembers(request: CChatRoomSearchMembersRequest): Promise<CChatRoomSearchMembersResponse>;
  UpdateMessageReaction(
    request: CChatRoomUpdateMessageReactionRequest,
  ): Promise<CChatRoomUpdateMessageReactionResponse>;
  GetMessageReactionReactors(
    request: CChatRoomGetMessageReactionReactorsRequest,
  ): Promise<CChatRoomGetMessageReactionReactorsResponse>;
}

export class ChatRoomClientImpl implements ChatRoom {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ChatRoom";
    this.rpc = rpc;
    this.CreateChatRoomGroup = this.CreateChatRoomGroup.bind(this);
    this.SaveChatRoomGroup = this.SaveChatRoomGroup.bind(this);
    this.RenameChatRoomGroup = this.RenameChatRoomGroup.bind(this);
    this.SetChatRoomGroupTagline = this.SetChatRoomGroupTagline.bind(this);
    this.SetChatRoomGroupAvatar = this.SetChatRoomGroupAvatar.bind(this);
    this.SetChatRoomGroupWatchingBroadcast = this.SetChatRoomGroupWatchingBroadcast.bind(this);
    this.JoinMiniGameForChatRoomGroup = this.JoinMiniGameForChatRoomGroup.bind(this);
    this.EndMiniGameForChatRoomGroup = this.EndMiniGameForChatRoomGroup.bind(this);
    this.MuteUserInGroup = this.MuteUserInGroup.bind(this);
    this.KickUserFromGroup = this.KickUserFromGroup.bind(this);
    this.SetUserBanState = this.SetUserBanState.bind(this);
    this.RevokeInviteToGroup = this.RevokeInviteToGroup.bind(this);
    this.CreateRole = this.CreateRole.bind(this);
    this.GetRoles = this.GetRoles.bind(this);
    this.RenameRole = this.RenameRole.bind(this);
    this.ReorderRole = this.ReorderRole.bind(this);
    this.DeleteRole = this.DeleteRole.bind(this);
    this.GetRoleActions = this.GetRoleActions.bind(this);
    this.ReplaceRoleActions = this.ReplaceRoleActions.bind(this);
    this.AddRoleToUser = this.AddRoleToUser.bind(this);
    this.GetRolesForUser = this.GetRolesForUser.bind(this);
    this.DeleteRoleFromUser = this.DeleteRoleFromUser.bind(this);
    this.JoinChatRoomGroup = this.JoinChatRoomGroup.bind(this);
    this.InviteFriendToChatRoomGroup = this.InviteFriendToChatRoomGroup.bind(this);
    this.LeaveChatRoomGroup = this.LeaveChatRoomGroup.bind(this);
    this.CreateChatRoom = this.CreateChatRoom.bind(this);
    this.DeleteChatRoom = this.DeleteChatRoom.bind(this);
    this.RenameChatRoom = this.RenameChatRoom.bind(this);
    this.ReorderChatRoom = this.ReorderChatRoom.bind(this);
    this.SendChatMessage = this.SendChatMessage.bind(this);
    this.JoinVoiceChat = this.JoinVoiceChat.bind(this);
    this.LeaveVoiceChat = this.LeaveVoiceChat.bind(this);
    this.GetMessageHistory = this.GetMessageHistory.bind(this);
    this.GetMyChatRoomGroups = this.GetMyChatRoomGroups.bind(this);
    this.GetChatRoomGroupState = this.GetChatRoomGroupState.bind(this);
    this.GetChatRoomGroupSummary = this.GetChatRoomGroupSummary.bind(this);
    this.SetAppChatRoomGroupForceActive = this.SetAppChatRoomGroupForceActive.bind(this);
    this.SetAppChatRoomGroupStopForceActive = this.SetAppChatRoomGroupStopForceActive.bind(this);
    this.AckChatMessage = this.AckChatMessage.bind(this);
    this.CreateInviteLink = this.CreateInviteLink.bind(this);
    this.GetInviteLinkInfo = this.GetInviteLinkInfo.bind(this);
    this.GetInviteInfo = this.GetInviteInfo.bind(this);
    this.GetInviteLinksForGroup = this.GetInviteLinksForGroup.bind(this);
    this.GetBanList = this.GetBanList.bind(this);
    this.GetInviteList = this.GetInviteList.bind(this);
    this.DeleteInviteLink = this.DeleteInviteLink.bind(this);
    this.SetSessionActiveChatRoomGroups = this.SetSessionActiveChatRoomGroups.bind(this);
    this.SetUserChatGroupPreferences = this.SetUserChatGroupPreferences.bind(this);
    this.DeleteChatMessages = this.DeleteChatMessages.bind(this);
    this.UpdateMemberListView = this.UpdateMemberListView.bind(this);
    this.SearchMembers = this.SearchMembers.bind(this);
    this.UpdateMessageReaction = this.UpdateMessageReaction.bind(this);
    this.GetMessageReactionReactors = this.GetMessageReactionReactors.bind(this);
  }
  CreateChatRoomGroup(request: CChatRoomCreateChatRoomGroupRequest): Promise<CChatRoomCreateChatRoomGroupResponse> {
    const data = CChatRoomCreateChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatRoomGroup", data);
    return promise.then((data) => CChatRoomCreateChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  SaveChatRoomGroup(request: CChatRoomSaveChatRoomGroupRequest): Promise<CChatRoomSaveChatRoomGroupResponse> {
    const data = CChatRoomSaveChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SaveChatRoomGroup", data);
    return promise.then((data) => CChatRoomSaveChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  RenameChatRoomGroup(request: CChatRoomRenameChatRoomGroupRequest): Promise<CChatRoomRenameChatRoomGroupResponse> {
    const data = CChatRoomRenameChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RenameChatRoomGroup", data);
    return promise.then((data) => CChatRoomRenameChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  SetChatRoomGroupTagline(
    request: CChatRoomSetChatRoomGroupTaglineRequest,
  ): Promise<CChatRoomSetChatRoomGroupTaglineResponse> {
    const data = CChatRoomSetChatRoomGroupTaglineRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetChatRoomGroupTagline", data);
    return promise.then((data) => CChatRoomSetChatRoomGroupTaglineResponse.decode(new _m0.Reader(data)));
  }

  SetChatRoomGroupAvatar(
    request: CChatRoomSetChatRoomGroupAvatarRequest,
  ): Promise<CChatRoomSetChatRoomGroupAvatarResponse> {
    const data = CChatRoomSetChatRoomGroupAvatarRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetChatRoomGroupAvatar", data);
    return promise.then((data) => CChatRoomSetChatRoomGroupAvatarResponse.decode(new _m0.Reader(data)));
  }

  SetChatRoomGroupWatchingBroadcast(
    request: CChatRoomSetChatRoomGroupWatchingBroadcastRequest,
  ): Promise<CChatRoomSetChatRoomGroupWatchingBroadcastResponse> {
    const data = CChatRoomSetChatRoomGroupWatchingBroadcastRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetChatRoomGroupWatchingBroadcast", data);
    return promise.then((data) => CChatRoomSetChatRoomGroupWatchingBroadcastResponse.decode(new _m0.Reader(data)));
  }

  JoinMiniGameForChatRoomGroup(
    request: CChatRoomJoinMiniGameForChatRoomGroupRequest,
  ): Promise<CChatRoomJoinMiniGameForChatRoomGroupResponse> {
    const data = CChatRoomJoinMiniGameForChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinMiniGameForChatRoomGroup", data);
    return promise.then((data) => CChatRoomJoinMiniGameForChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  EndMiniGameForChatRoomGroup(
    request: CChatRoomEndMiniGameForChatRoomGroupRequest,
  ): Promise<CChatRoomEndMiniGameForChatRoomGroupResponse> {
    const data = CChatRoomEndMiniGameForChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "EndMiniGameForChatRoomGroup", data);
    return promise.then((data) => CChatRoomEndMiniGameForChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  MuteUserInGroup(request: CChatRoomMuteUserRequest): Promise<CChatRoomMuteUserResponse> {
    const data = CChatRoomMuteUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MuteUserInGroup", data);
    return promise.then((data) => CChatRoomMuteUserResponse.decode(new _m0.Reader(data)));
  }

  KickUserFromGroup(request: CChatRoomKickUserRequest): Promise<CChatRoomKickUserResponse> {
    const data = CChatRoomKickUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KickUserFromGroup", data);
    return promise.then((data) => CChatRoomKickUserResponse.decode(new _m0.Reader(data)));
  }

  SetUserBanState(request: CChatRoomSetUserBanStateRequest): Promise<CChatRoomSetUserBanStateResponse> {
    const data = CChatRoomSetUserBanStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetUserBanState", data);
    return promise.then((data) => CChatRoomSetUserBanStateResponse.decode(new _m0.Reader(data)));
  }

  RevokeInviteToGroup(request: CChatRoomRevokeInviteRequest): Promise<CChatRoomRevokeInviteResponse> {
    const data = CChatRoomRevokeInviteRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeInviteToGroup", data);
    return promise.then((data) => CChatRoomRevokeInviteResponse.decode(new _m0.Reader(data)));
  }

  CreateRole(request: CChatRoomCreateRoleRequest): Promise<CChatRoomCreateRoleResponse> {
    const data = CChatRoomCreateRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRole", data);
    return promise.then((data) => CChatRoomCreateRoleResponse.decode(new _m0.Reader(data)));
  }

  GetRoles(request: CChatRoomGetRolesRequest): Promise<CChatRoomGetRolesResponse> {
    const data = CChatRoomGetRolesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRoles", data);
    return promise.then((data) => CChatRoomGetRolesResponse.decode(new _m0.Reader(data)));
  }

  RenameRole(request: CChatRoomRenameRoleRequest): Promise<CChatRoomRenameRoleResponse> {
    const data = CChatRoomRenameRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RenameRole", data);
    return promise.then((data) => CChatRoomRenameRoleResponse.decode(new _m0.Reader(data)));
  }

  ReorderRole(request: CChatRoomReorderRoleRequest): Promise<CChatRoomReorderRoleResponse> {
    const data = CChatRoomReorderRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReorderRole", data);
    return promise.then((data) => CChatRoomReorderRoleResponse.decode(new _m0.Reader(data)));
  }

  DeleteRole(request: CChatRoomDeleteRoleRequest): Promise<CChatRoomDeleteRoleResponse> {
    const data = CChatRoomDeleteRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRole", data);
    return promise.then((data) => CChatRoomDeleteRoleResponse.decode(new _m0.Reader(data)));
  }

  GetRoleActions(request: CChatRoomGetRoleActionsRequest): Promise<CChatRoomGetRoleActionsResponse> {
    const data = CChatRoomGetRoleActionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRoleActions", data);
    return promise.then((data) => CChatRoomGetRoleActionsResponse.decode(new _m0.Reader(data)));
  }

  ReplaceRoleActions(request: CChatRoomReplaceRoleActionsRequest): Promise<CChatRoomReplaceRoleActionsResponse> {
    const data = CChatRoomReplaceRoleActionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReplaceRoleActions", data);
    return promise.then((data) => CChatRoomReplaceRoleActionsResponse.decode(new _m0.Reader(data)));
  }

  AddRoleToUser(request: CChatRoomAddRoleToUserRequest): Promise<CChatRoomAddRoleToUserResponse> {
    const data = CChatRoomAddRoleToUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddRoleToUser", data);
    return promise.then((data) => CChatRoomAddRoleToUserResponse.decode(new _m0.Reader(data)));
  }

  GetRolesForUser(request: CChatRoomGetRolesForUserRequest): Promise<CChatRoomGetRolesForUserResponse> {
    const data = CChatRoomGetRolesForUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetRolesForUser", data);
    return promise.then((data) => CChatRoomGetRolesForUserResponse.decode(new _m0.Reader(data)));
  }

  DeleteRoleFromUser(request: CChatRoomDeleteRoleFromUserRequest): Promise<CChatRoomDeleteRoleFromUserResponse> {
    const data = CChatRoomDeleteRoleFromUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRoleFromUser", data);
    return promise.then((data) => CChatRoomDeleteRoleFromUserResponse.decode(new _m0.Reader(data)));
  }

  JoinChatRoomGroup(request: CChatRoomJoinChatRoomGroupRequest): Promise<CChatRoomJoinChatRoomGroupResponse> {
    const data = CChatRoomJoinChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinChatRoomGroup", data);
    return promise.then((data) => CChatRoomJoinChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  InviteFriendToChatRoomGroup(
    request: CChatRoomInviteFriendToChatRoomGroupRequest,
  ): Promise<CChatRoomInviteFriendToChatRoomGroupResponse> {
    const data = CChatRoomInviteFriendToChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "InviteFriendToChatRoomGroup", data);
    return promise.then((data) => CChatRoomInviteFriendToChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  LeaveChatRoomGroup(request: CChatRoomLeaveChatRoomGroupRequest): Promise<CChatRoomLeaveChatRoomGroupResponse> {
    const data = CChatRoomLeaveChatRoomGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LeaveChatRoomGroup", data);
    return promise.then((data) => CChatRoomLeaveChatRoomGroupResponse.decode(new _m0.Reader(data)));
  }

  CreateChatRoom(request: CChatRoomCreateChatRoomRequest): Promise<CChatRoomCreateChatRoomResponse> {
    const data = CChatRoomCreateChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateChatRoom", data);
    return promise.then((data) => CChatRoomCreateChatRoomResponse.decode(new _m0.Reader(data)));
  }

  DeleteChatRoom(request: CChatRoomDeleteChatRoomRequest): Promise<CChatRoomDeleteChatRoomResponse> {
    const data = CChatRoomDeleteChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteChatRoom", data);
    return promise.then((data) => CChatRoomDeleteChatRoomResponse.decode(new _m0.Reader(data)));
  }

  RenameChatRoom(request: CChatRoomRenameChatRoomRequest): Promise<CChatRoomRenameChatRoomResponse> {
    const data = CChatRoomRenameChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RenameChatRoom", data);
    return promise.then((data) => CChatRoomRenameChatRoomResponse.decode(new _m0.Reader(data)));
  }

  ReorderChatRoom(request: CChatRoomReorderChatRoomRequest): Promise<CChatRoomReorderChatRoomResponse> {
    const data = CChatRoomReorderChatRoomRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReorderChatRoom", data);
    return promise.then((data) => CChatRoomReorderChatRoomResponse.decode(new _m0.Reader(data)));
  }

  SendChatMessage(request: CChatRoomSendChatMessageRequest): Promise<CChatRoomSendChatMessageResponse> {
    const data = CChatRoomSendChatMessageRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendChatMessage", data);
    return promise.then((data) => CChatRoomSendChatMessageResponse.decode(new _m0.Reader(data)));
  }

  JoinVoiceChat(request: CChatRoomJoinVoiceChatRequest): Promise<CChatRoomJoinVoiceChatResponse> {
    const data = CChatRoomJoinVoiceChatRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "JoinVoiceChat", data);
    return promise.then((data) => CChatRoomJoinVoiceChatResponse.decode(new _m0.Reader(data)));
  }

  LeaveVoiceChat(request: CChatRoomLeaveVoiceChatRequest): Promise<CChatRoomLeaveVoiceChatResponse> {
    const data = CChatRoomLeaveVoiceChatRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LeaveVoiceChat", data);
    return promise.then((data) => CChatRoomLeaveVoiceChatResponse.decode(new _m0.Reader(data)));
  }

  GetMessageHistory(request: CChatRoomGetMessageHistoryRequest): Promise<CChatRoomGetMessageHistoryResponse> {
    const data = CChatRoomGetMessageHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMessageHistory", data);
    return promise.then((data) => CChatRoomGetMessageHistoryResponse.decode(new _m0.Reader(data)));
  }

  GetMyChatRoomGroups(request: CChatRoomGetMyChatRoomGroupsRequest): Promise<CChatRoomGetMyChatRoomGroupsResponse> {
    const data = CChatRoomGetMyChatRoomGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMyChatRoomGroups", data);
    return promise.then((data) => CChatRoomGetMyChatRoomGroupsResponse.decode(new _m0.Reader(data)));
  }

  GetChatRoomGroupState(
    request: CChatRoomGetChatRoomGroupStateRequest,
  ): Promise<CChatRoomGetChatRoomGroupStateResponse> {
    const data = CChatRoomGetChatRoomGroupStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChatRoomGroupState", data);
    return promise.then((data) => CChatRoomGetChatRoomGroupStateResponse.decode(new _m0.Reader(data)));
  }

  GetChatRoomGroupSummary(
    request: CChatRoomGetChatRoomGroupSummaryRequest,
  ): Promise<CChatRoomGetChatRoomGroupSummaryResponse> {
    const data = CChatRoomGetChatRoomGroupSummaryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetChatRoomGroupSummary", data);
    return promise.then((data) => CChatRoomGetChatRoomGroupSummaryResponse.decode(new _m0.Reader(data)));
  }

  SetAppChatRoomGroupForceActive(
    request: CChatRoomSetAppChatRoomGroupForceActiveRequest,
  ): Promise<CChatRoomSetAppChatRoomGroupForceActiveResponse> {
    const data = CChatRoomSetAppChatRoomGroupForceActiveRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetAppChatRoomGroupForceActive", data);
    return promise.then((data) => CChatRoomSetAppChatRoomGroupForceActiveResponse.decode(new _m0.Reader(data)));
  }

  SetAppChatRoomGroupStopForceActive(
    request: CChatRoomSetAppChatRoomGroupStopForceActiveNotification,
  ): Promise<NoResponse> {
    const data = CChatRoomSetAppChatRoomGroupStopForceActiveNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetAppChatRoomGroupStopForceActive", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  AckChatMessage(request: CChatRoomAckChatMessageNotification): Promise<NoResponse> {
    const data = CChatRoomAckChatMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "AckChatMessage", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  CreateInviteLink(request: CChatRoomCreateInviteLinkRequest): Promise<CChatRoomCreateInviteLinkResponse> {
    const data = CChatRoomCreateInviteLinkRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateInviteLink", data);
    return promise.then((data) => CChatRoomCreateInviteLinkResponse.decode(new _m0.Reader(data)));
  }

  GetInviteLinkInfo(request: CChatRoomGetInviteLinkInfoRequest): Promise<CChatRoomGetInviteLinkInfoResponse> {
    const data = CChatRoomGetInviteLinkInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInviteLinkInfo", data);
    return promise.then((data) => CChatRoomGetInviteLinkInfoResponse.decode(new _m0.Reader(data)));
  }

  GetInviteInfo(request: CChatRoomGetInviteInfoRequest): Promise<CChatRoomGetInviteInfoResponse> {
    const data = CChatRoomGetInviteInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInviteInfo", data);
    return promise.then((data) => CChatRoomGetInviteInfoResponse.decode(new _m0.Reader(data)));
  }

  GetInviteLinksForGroup(
    request: CChatRoomGetInviteLinksForGroupRequest,
  ): Promise<CChatRoomGetInviteLinksForGroupResponse> {
    const data = CChatRoomGetInviteLinksForGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInviteLinksForGroup", data);
    return promise.then((data) => CChatRoomGetInviteLinksForGroupResponse.decode(new _m0.Reader(data)));
  }

  GetBanList(request: CChatRoomGetBanListRequest): Promise<CChatRoomGetBanListResponse> {
    const data = CChatRoomGetBanListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetBanList", data);
    return promise.then((data) => CChatRoomGetBanListResponse.decode(new _m0.Reader(data)));
  }

  GetInviteList(request: CChatRoomGetInviteListRequest): Promise<CChatRoomGetInviteListResponse> {
    const data = CChatRoomGetInviteListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetInviteList", data);
    return promise.then((data) => CChatRoomGetInviteListResponse.decode(new _m0.Reader(data)));
  }

  DeleteInviteLink(request: CChatRoomDeleteInviteLinkRequest): Promise<CChatRoomDeleteInviteLinkResponse> {
    const data = CChatRoomDeleteInviteLinkRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteInviteLink", data);
    return promise.then((data) => CChatRoomDeleteInviteLinkResponse.decode(new _m0.Reader(data)));
  }

  SetSessionActiveChatRoomGroups(
    request: CChatRoomSetSessionActiveChatRoomGroupsRequest,
  ): Promise<CChatRoomSetSessionActiveChatRoomGroupsResponse> {
    const data = CChatRoomSetSessionActiveChatRoomGroupsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetSessionActiveChatRoomGroups", data);
    return promise.then((data) => CChatRoomSetSessionActiveChatRoomGroupsResponse.decode(new _m0.Reader(data)));
  }

  SetUserChatGroupPreferences(
    request: CChatRoomSetUserChatGroupPreferencesRequest,
  ): Promise<CChatRoomSetUserChatGroupPreferencesResponse> {
    const data = CChatRoomSetUserChatGroupPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetUserChatGroupPreferences", data);
    return promise.then((data) => CChatRoomSetUserChatGroupPreferencesResponse.decode(new _m0.Reader(data)));
  }

  DeleteChatMessages(request: CChatRoomDeleteChatMessagesRequest): Promise<CChatRoomDeleteChatMessagesResponse> {
    const data = CChatRoomDeleteChatMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteChatMessages", data);
    return promise.then((data) => CChatRoomDeleteChatMessagesResponse.decode(new _m0.Reader(data)));
  }

  UpdateMemberListView(request: CChatRoomUpdateMemberListViewNotification): Promise<NoResponse> {
    const data = CChatRoomUpdateMemberListViewNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMemberListView", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SearchMembers(request: CChatRoomSearchMembersRequest): Promise<CChatRoomSearchMembersResponse> {
    const data = CChatRoomSearchMembersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SearchMembers", data);
    return promise.then((data) => CChatRoomSearchMembersResponse.decode(new _m0.Reader(data)));
  }

  UpdateMessageReaction(
    request: CChatRoomUpdateMessageReactionRequest,
  ): Promise<CChatRoomUpdateMessageReactionResponse> {
    const data = CChatRoomUpdateMessageReactionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateMessageReaction", data);
    return promise.then((data) => CChatRoomUpdateMessageReactionResponse.decode(new _m0.Reader(data)));
  }

  GetMessageReactionReactors(
    request: CChatRoomGetMessageReactionReactorsRequest,
  ): Promise<CChatRoomGetMessageReactionReactorsResponse> {
    const data = CChatRoomGetMessageReactionReactorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetMessageReactionReactors", data);
    return promise.then((data) => CChatRoomGetMessageReactionReactorsResponse.decode(new _m0.Reader(data)));
  }
}

export interface ClanChatRooms {
  GetClanChatRoomInfo(
    request: CClanChatRoomsGetClanChatRoomInfoRequest,
  ): Promise<CClanChatRoomsGetClanChatRoomInfoResponse>;
  SetClanChatRoomPrivate(
    request: CClanChatRoomsSetClanChatRoomPrivateRequest,
  ): Promise<CClanChatRoomsSetClanChatRoomPrivateResponse>;
}

export class ClanChatRoomsClientImpl implements ClanChatRooms {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ClanChatRooms";
    this.rpc = rpc;
    this.GetClanChatRoomInfo = this.GetClanChatRoomInfo.bind(this);
    this.SetClanChatRoomPrivate = this.SetClanChatRoomPrivate.bind(this);
  }
  GetClanChatRoomInfo(
    request: CClanChatRoomsGetClanChatRoomInfoRequest,
  ): Promise<CClanChatRoomsGetClanChatRoomInfoResponse> {
    const data = CClanChatRoomsGetClanChatRoomInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetClanChatRoomInfo", data);
    return promise.then((data) => CClanChatRoomsGetClanChatRoomInfoResponse.decode(new _m0.Reader(data)));
  }

  SetClanChatRoomPrivate(
    request: CClanChatRoomsSetClanChatRoomPrivateRequest,
  ): Promise<CClanChatRoomsSetClanChatRoomPrivateResponse> {
    const data = CClanChatRoomsSetClanChatRoomPrivateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetClanChatRoomPrivate", data);
    return promise.then((data) => CClanChatRoomsSetClanChatRoomPrivateResponse.decode(new _m0.Reader(data)));
  }
}

export interface ChatRoomClient {
  NotifyIncomingChatMessage(request: CChatRoomIncomingChatMessageNotification): Promise<NoResponse>;
  NotifyChatMessageModified(request: CChatRoomChatMessageModifiedNotification): Promise<NoResponse>;
  NotifyMemberStateChange(request: CChatRoomMemberStateChangeNotification): Promise<NoResponse>;
  NotifyChatRoomHeaderStateChange(request: CChatRoomChatRoomHeaderStateNotification): Promise<NoResponse>;
  NotifyChatRoomGroupRoomsChange(request: CChatRoomChatRoomGroupRoomsChangeNotification): Promise<NoResponse>;
  NotifyShouldRejoinChatRoomVoiceChat(
    request: CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification,
  ): Promise<NoResponse>;
  NotifyChatGroupUserStateChanged(
    request: ChatRoomClientNotifyChatGroupUserStateChangedNotification,
  ): Promise<NoResponse>;
  NotifyAckChatMessageEcho(request: CChatRoomAckChatMessageNotification): Promise<NoResponse>;
  NotifyChatRoomDisconnect(request: ChatRoomClientNotifyChatRoomDisconnectNotification): Promise<NoResponse>;
  NotifyMemberListViewUpdated(request: CChatRoomClientMemberListViewUpdatedNotification): Promise<NoResponse>;
  NotifyMessageReaction(request: CChatRoomMessageReactionNotification): Promise<NoResponse>;
}

export class ChatRoomClientClientImpl implements ChatRoomClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ChatRoomClient";
    this.rpc = rpc;
    this.NotifyIncomingChatMessage = this.NotifyIncomingChatMessage.bind(this);
    this.NotifyChatMessageModified = this.NotifyChatMessageModified.bind(this);
    this.NotifyMemberStateChange = this.NotifyMemberStateChange.bind(this);
    this.NotifyChatRoomHeaderStateChange = this.NotifyChatRoomHeaderStateChange.bind(this);
    this.NotifyChatRoomGroupRoomsChange = this.NotifyChatRoomGroupRoomsChange.bind(this);
    this.NotifyShouldRejoinChatRoomVoiceChat = this.NotifyShouldRejoinChatRoomVoiceChat.bind(this);
    this.NotifyChatGroupUserStateChanged = this.NotifyChatGroupUserStateChanged.bind(this);
    this.NotifyAckChatMessageEcho = this.NotifyAckChatMessageEcho.bind(this);
    this.NotifyChatRoomDisconnect = this.NotifyChatRoomDisconnect.bind(this);
    this.NotifyMemberListViewUpdated = this.NotifyMemberListViewUpdated.bind(this);
    this.NotifyMessageReaction = this.NotifyMessageReaction.bind(this);
  }
  NotifyIncomingChatMessage(request: CChatRoomIncomingChatMessageNotification): Promise<NoResponse> {
    const data = CChatRoomIncomingChatMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyIncomingChatMessage", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyChatMessageModified(request: CChatRoomChatMessageModifiedNotification): Promise<NoResponse> {
    const data = CChatRoomChatMessageModifiedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChatMessageModified", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyMemberStateChange(request: CChatRoomMemberStateChangeNotification): Promise<NoResponse> {
    const data = CChatRoomMemberStateChangeNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyMemberStateChange", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyChatRoomHeaderStateChange(request: CChatRoomChatRoomHeaderStateNotification): Promise<NoResponse> {
    const data = CChatRoomChatRoomHeaderStateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChatRoomHeaderStateChange", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyChatRoomGroupRoomsChange(request: CChatRoomChatRoomGroupRoomsChangeNotification): Promise<NoResponse> {
    const data = CChatRoomChatRoomGroupRoomsChangeNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChatRoomGroupRoomsChange", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyShouldRejoinChatRoomVoiceChat(
    request: CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification,
  ): Promise<NoResponse> {
    const data = CChatRoomNotifyShouldRejoinChatRoomVoiceChatNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyShouldRejoinChatRoomVoiceChat", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyChatGroupUserStateChanged(
    request: ChatRoomClientNotifyChatGroupUserStateChangedNotification,
  ): Promise<NoResponse> {
    const data = ChatRoomClientNotifyChatGroupUserStateChangedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChatGroupUserStateChanged", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyAckChatMessageEcho(request: CChatRoomAckChatMessageNotification): Promise<NoResponse> {
    const data = CChatRoomAckChatMessageNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyAckChatMessageEcho", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyChatRoomDisconnect(request: ChatRoomClientNotifyChatRoomDisconnectNotification): Promise<NoResponse> {
    const data = ChatRoomClientNotifyChatRoomDisconnectNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyChatRoomDisconnect", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyMemberListViewUpdated(request: CChatRoomClientMemberListViewUpdatedNotification): Promise<NoResponse> {
    const data = CChatRoomClientMemberListViewUpdatedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyMemberListViewUpdated", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyMessageReaction(request: CChatRoomMessageReactionNotification): Promise<NoResponse> {
    const data = CChatRoomMessageReactionNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyMessageReaction", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface ChatUsability {
  NotifyClientUsabilityMetrics(request: CChatUsabilityClientUsabilityMetricsNotification): Promise<NoResponse>;
}

export class ChatUsabilityClientImpl implements ChatUsability {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ChatUsability";
    this.rpc = rpc;
    this.NotifyClientUsabilityMetrics = this.NotifyClientUsabilityMetrics.bind(this);
  }
  NotifyClientUsabilityMetrics(request: CChatUsabilityClientUsabilityMetricsNotification): Promise<NoResponse> {
    const data = CChatUsabilityClientUsabilityMetricsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyClientUsabilityMetrics", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

export interface ChatUsabilityClient {
  NotifyRequestClientUsabilityMetrics(
    request: CChatUsabilityRequestClientUsabilityMetricsNotification,
  ): Promise<NoResponse>;
}

export class ChatUsabilityClientClientImpl implements ChatUsabilityClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "ChatUsabilityClient";
    this.rpc = rpc;
    this.NotifyRequestClientUsabilityMetrics = this.NotifyRequestClientUsabilityMetrics.bind(this);
  }
  NotifyRequestClientUsabilityMetrics(
    request: CChatUsabilityRequestClientUsabilityMetricsNotification,
  ): Promise<NoResponse> {
    const data = CChatUsabilityRequestClientUsabilityMetricsNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyRequestClientUsabilityMetrics", data);
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
