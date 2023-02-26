/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { EncryptedAppTicket } from "./encrypted_app_ticket";
import { CMsgAuthTicket, CMsgIPAddress } from "./steammessages_base";

export const protobufPackage = "";

export interface CMsgClientRegisterAuthTicketWithCM {
  protocolVersion: number;
  ticket: Buffer;
  clientInstanceId: string;
}

export interface CMsgClientTicketAuthComplete {
  steamId: string;
  gameId: string;
  estate: number;
  eauthSessionResponse: number;
  DEPRECATEDTicket: Buffer;
  ticketCrc: number;
  ticketSequence: number;
  ownerSteamId: string;
}

export interface CMsgClientCMList {
  cmAddresses: number[];
  cmPorts: number[];
  cmWebsocketAddresses: string[];
  percentDefaultToWebsocket: number;
}

export interface CMsgClientP2PConnectionInfo {
  steamIdDest: string;
  steamIdSrc: string;
  appId: number;
  candidate: Buffer;
  legacyConnectionIdSrc: string;
  rendezvous: Buffer;
}

export interface CMsgClientP2PConnectionFailInfo {
  steamIdDest: string;
  steamIdSrc: string;
  appId: number;
  ep2pSessionError: number;
  connectionIdDest: string;
  closeReason: number;
  closeMessage: string;
}

export interface CMsgClientNetworkingCertRequest {
  keyData: Buffer;
  appId: number;
}

export interface CMsgClientNetworkingCertReply {
  cert: Buffer;
  caKeyId: string;
  caSignature: Buffer;
}

export interface CMsgClientNetworkingMobileCertRequest {
  appId: number;
}

export interface CMsgClientNetworkingMobileCertReply {
  encodedCert: string;
}

export interface CMsgClientGetAppOwnershipTicket {
  appId: number;
}

export interface CMsgClientGetAppOwnershipTicketResponse {
  eresult: number;
  appId: number;
  ticket: Buffer;
}

export interface CMsgClientSessionToken {
  token: string;
}

export interface CMsgClientGameConnectTokens {
  maxTokensToKeep: number;
  tokens: Buffer[];
}

export interface CMsgClientGamesPlayed {
  gamesPlayed: CMsgClientGamesPlayed_GamePlayed[];
  clientOsType: number;
  cloudGamingPlatform: number;
  recentReauthentication: boolean;
}

export interface CMsgClientGamesPlayed_ProcessInfo {
  processId: number;
  processIdParent: number;
  parentIsSteam: boolean;
}

export interface CMsgClientGamesPlayed_GamePlayed {
  steamIdGs: string;
  gameId: string;
  deprecatedGameIpAddress: number;
  gamePort: number;
  isSecure: boolean;
  token: Buffer;
  gameExtraInfo: string;
  gameDataBlob: Buffer;
  processId: number;
  streamingProviderId: number;
  gameFlags: number;
  ownerId: number;
  vrHmdVendor: string;
  vrHmdModel: string;
  launchOptionType: number;
  primaryControllerType: number;
  primarySteamControllerSerial: string;
  totalSteamControllerCount: number;
  totalNonSteamControllerCount: number;
  controllerWorkshopFileId: string;
  launchSource: number;
  vrHmdRuntime: number;
  gameIpAddress: CMsgIPAddress | undefined;
  controllerConnectionType: number;
  gameOsPlatform: number;
  gameBuildId: number;
  compatToolId: number;
  compatToolCmd: string;
  compatToolBuildId: number;
  betaName: string;
  dlcContext: number;
  processIdList: CMsgClientGamesPlayed_ProcessInfo[];
}

export interface CMsgGSApprove {
  steamId: string;
  ownerSteamId: string;
}

export interface CMsgGSDeny {
  steamId: string;
  edenyReason: number;
  denyString: string;
}

export interface CMsgGSKick {
  steamId: string;
  edenyReason: number;
}

export interface CMsgClientAuthList {
  tokensLeft: number;
  lastRequestSeq: number;
  lastRequestSeqFromServer: number;
  tickets: CMsgAuthTicket[];
  appIds: number[];
  messageSequence: number;
}

export interface CMsgClientAuthListAck {
  ticketCrc: number[];
  appIds: number[];
  messageSequence: number;
}

export interface CMsgClientLicenseList {
  eresult: number;
  licenses: CMsgClientLicenseList_License[];
}

export interface CMsgClientLicenseList_License {
  packageId: number;
  timeCreated: number;
  timeNextProcess: number;
  minuteLimit: number;
  minutesUsed: number;
  paymentMethod: number;
  flags: number;
  purchaseCountryCode: string;
  licenseType: number;
  territoryCode: number;
  changeNumber: number;
  ownerId: number;
  initialPeriod: number;
  initialTimeUnit: number;
  renewalPeriod: number;
  renewalTimeUnit: number;
  accessToken: string;
  masterPackageId: number;
}

export interface CMsgClientIsLimitedAccount {
  bisLimitedAccount: boolean;
  bisCommunityBanned: boolean;
  bisLockedAccount: boolean;
  bisLimitedAccountAllowedToInviteFriends: boolean;
}

export interface CMsgClientRequestedClientStats {
  statsToSend: CMsgClientRequestedClientStats_StatsToSend[];
}

export interface CMsgClientRequestedClientStats_StatsToSend {
  clientStat: number;
  statAggregateMethod: number;
}

export interface CMsgClientStat2 {
  statDetail: CMsgClientStat2_StatDetail[];
}

export interface CMsgClientStat2_StatDetail {
  clientStat: number;
  llValue: string;
  timeOfDay: number;
  cellId: number;
  depotId: number;
  appId: number;
}

export interface CMsgClientInviteToGame {
  steamIdDest: string;
  steamIdSrc: string;
  connectString: string;
  remotePlay: string;
}

export interface CMsgClientChatInvite {
  steamIdInvited: string;
  steamIdChat: string;
  steamIdPatron: string;
  chatroomType: number;
  steamIdFriendChat: string;
  chatName: string;
  gameId: string;
}

export interface CMsgClientConnectionStats {
  statsLogon: CMsgClientConnectionStats_StatsLogon | undefined;
  statsVconn: CMsgClientConnectionStats_StatsVConn | undefined;
}

export interface CMsgClientConnectionStats_StatsLogon {
  connectAttempts: number;
  connectSuccesses: number;
  connectFailures: number;
  connectionsDropped: number;
  secondsRunning: number;
  msecTologonthistime: number;
  countBadCms: number;
  noUdpConnectivity: boolean;
  noTcpConnectivity: boolean;
  noWebsocket443Connectivity: boolean;
  noWebsocketNon443Connectivity: boolean;
}

export interface CMsgClientConnectionStats_StatsUDP {
  pktsSent: string;
  bytesSent: string;
  pktsRecv: string;
  pktsProcessed: string;
  bytesRecv: string;
}

export interface CMsgClientConnectionStats_StatsVConn {
  connectionsUdp: number;
  connectionsTcp: number;
  statsUdp: CMsgClientConnectionStats_StatsUDP | undefined;
  pktsAbandoned: string;
  connReqReceived: string;
  pktsResent: string;
  msgsSent: string;
  msgsSentFailed: string;
  msgsRecv: string;
  datagramsSent: string;
  datagramsRecv: string;
  badPktsRecv: string;
  unknownConnPktsRecv: string;
  missedPktsRecv: string;
  dupPktsRecv: string;
  failedConnectChallenges: string;
  microSecAvgLatency: number;
  microSecMinLatency: number;
  microSecMaxLatency: number;
  memPoolMsgInUse: number;
}

export interface CMsgClientServersAvailable {
  serverTypesAvailable: CMsgClientServersAvailable_ServerTypesAvailable[];
  serverTypeForAuthServices: number;
}

export interface CMsgClientServersAvailable_ServerTypesAvailable {
  server: number;
  changed: boolean;
}

export interface CMsgClientReportOverlayDetourFailure {
  failureStrings: string[];
}

export interface CMsgClientRequestEncryptedAppTicket {
  appId: number;
  userdata: Buffer;
}

export interface CMsgClientRequestEncryptedAppTicketResponse {
  appId: number;
  eresult: number;
  encryptedAppTicket: EncryptedAppTicket | undefined;
}

export interface CMsgClientWalletInfoUpdate {
  hasWallet: boolean;
  balance: number;
  currency: number;
  balanceDelayed: number;
  balance64: string;
  balance64Delayed: string;
  realm: number;
}

export interface CMsgClientAMGetClanOfficers {
  steamidClan: string;
}

export interface CMsgClientAMGetClanOfficersResponse {
  eresult: number;
  steamidClan: string;
  officerCount: number;
}

export interface CMsgClientAMGetPersonaNameHistory {
  idCount: number;
  Ids: CMsgClientAMGetPersonaNameHistory_IdInstance[];
}

export interface CMsgClientAMGetPersonaNameHistory_IdInstance {
  steamid: string;
}

export interface CMsgClientAMGetPersonaNameHistoryResponse {
  responses: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance[];
}

export interface CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
  eresult: number;
  steamid: string;
  names: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance[];
}

export interface CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
  nameSince: number;
  name: string;
}

export interface CMsgClientDeregisterWithServer {
  eservertype: number;
  appId: number;
}

export interface CMsgClientClanState {
  steamidClan: string;
  clanAccountFlags: number;
  nameInfo: CMsgClientClanState_NameInfo | undefined;
  userCounts: CMsgClientClanState_UserCounts | undefined;
  events: CMsgClientClanState_Event[];
  announcements: CMsgClientClanState_Event[];
  chatRoomPrivate: boolean;
}

export interface CMsgClientClanState_NameInfo {
  clanName: string;
  shaAvatar: Buffer;
}

export interface CMsgClientClanState_UserCounts {
  members: number;
  online: number;
  chatting: number;
  inGame: number;
  chatRoomMembers: number;
}

export interface CMsgClientClanState_Event {
  gid: string;
  eventTime: number;
  headline: string;
  gameId: string;
  justPosted: boolean;
}

function createBaseCMsgClientRegisterAuthTicketWithCM(): CMsgClientRegisterAuthTicketWithCM {
  return { protocolVersion: 0, ticket: Buffer.alloc(0), clientInstanceId: "0" };
}

export const CMsgClientRegisterAuthTicketWithCM = {
  encode(message: CMsgClientRegisterAuthTicketWithCM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocolVersion !== 0) {
      writer.uint32(8).uint32(message.protocolVersion);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(26).bytes(message.ticket);
    }
    if (message.clientInstanceId !== "0") {
      writer.uint32(32).uint64(message.clientInstanceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRegisterAuthTicketWithCM {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRegisterAuthTicketWithCM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocolVersion = reader.uint32();
          break;
        case 3:
          message.ticket = reader.bytes() as Buffer;
          break;
        case 4:
          message.clientInstanceId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRegisterAuthTicketWithCM {
    return {
      protocolVersion: isSet(object.protocolVersion) ? Number(object.protocolVersion) : 0,
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
      clientInstanceId: isSet(object.clientInstanceId) ? String(object.clientInstanceId) : "0",
    };
  },

  toJSON(message: CMsgClientRegisterAuthTicketWithCM): unknown {
    const obj: any = {};
    message.protocolVersion !== undefined && (obj.protocolVersion = Math.round(message.protocolVersion));
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    message.clientInstanceId !== undefined && (obj.clientInstanceId = message.clientInstanceId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRegisterAuthTicketWithCM>, I>>(
    base?: I,
  ): CMsgClientRegisterAuthTicketWithCM {
    return CMsgClientRegisterAuthTicketWithCM.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRegisterAuthTicketWithCM>, I>>(
    object: I,
  ): CMsgClientRegisterAuthTicketWithCM {
    const message = createBaseCMsgClientRegisterAuthTicketWithCM();
    message.protocolVersion = object.protocolVersion ?? 0;
    message.ticket = object.ticket ?? Buffer.alloc(0);
    message.clientInstanceId = object.clientInstanceId ?? "0";
    return message;
  },
};

function createBaseCMsgClientTicketAuthComplete(): CMsgClientTicketAuthComplete {
  return {
    steamId: "0",
    gameId: "0",
    estate: 0,
    eauthSessionResponse: 0,
    DEPRECATEDTicket: Buffer.alloc(0),
    ticketCrc: 0,
    ticketSequence: 0,
    ownerSteamId: "0",
  };
}

export const CMsgClientTicketAuthComplete = {
  encode(message: CMsgClientTicketAuthComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.gameId !== "0") {
      writer.uint32(17).fixed64(message.gameId);
    }
    if (message.estate !== 0) {
      writer.uint32(24).uint32(message.estate);
    }
    if (message.eauthSessionResponse !== 0) {
      writer.uint32(32).uint32(message.eauthSessionResponse);
    }
    if (message.DEPRECATEDTicket.length !== 0) {
      writer.uint32(42).bytes(message.DEPRECATEDTicket);
    }
    if (message.ticketCrc !== 0) {
      writer.uint32(48).uint32(message.ticketCrc);
    }
    if (message.ticketSequence !== 0) {
      writer.uint32(56).uint32(message.ticketSequence);
    }
    if (message.ownerSteamId !== "0") {
      writer.uint32(65).fixed64(message.ownerSteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientTicketAuthComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientTicketAuthComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.estate = reader.uint32();
          break;
        case 4:
          message.eauthSessionResponse = reader.uint32();
          break;
        case 5:
          message.DEPRECATEDTicket = reader.bytes() as Buffer;
          break;
        case 6:
          message.ticketCrc = reader.uint32();
          break;
        case 7:
          message.ticketSequence = reader.uint32();
          break;
        case 8:
          message.ownerSteamId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientTicketAuthComplete {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      estate: isSet(object.estate) ? Number(object.estate) : 0,
      eauthSessionResponse: isSet(object.eauthSessionResponse) ? Number(object.eauthSessionResponse) : 0,
      DEPRECATEDTicket: isSet(object.DEPRECATEDTicket)
        ? Buffer.from(bytesFromBase64(object.DEPRECATEDTicket))
        : Buffer.alloc(0),
      ticketCrc: isSet(object.ticketCrc) ? Number(object.ticketCrc) : 0,
      ticketSequence: isSet(object.ticketSequence) ? Number(object.ticketSequence) : 0,
      ownerSteamId: isSet(object.ownerSteamId) ? String(object.ownerSteamId) : "0",
    };
  },

  toJSON(message: CMsgClientTicketAuthComplete): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.estate !== undefined && (obj.estate = Math.round(message.estate));
    message.eauthSessionResponse !== undefined && (obj.eauthSessionResponse = Math.round(message.eauthSessionResponse));
    message.DEPRECATEDTicket !== undefined &&
      (obj.DEPRECATEDTicket = base64FromBytes(
        message.DEPRECATEDTicket !== undefined ? message.DEPRECATEDTicket : Buffer.alloc(0),
      ));
    message.ticketCrc !== undefined && (obj.ticketCrc = Math.round(message.ticketCrc));
    message.ticketSequence !== undefined && (obj.ticketSequence = Math.round(message.ticketSequence));
    message.ownerSteamId !== undefined && (obj.ownerSteamId = message.ownerSteamId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientTicketAuthComplete>, I>>(base?: I): CMsgClientTicketAuthComplete {
    return CMsgClientTicketAuthComplete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientTicketAuthComplete>, I>>(object: I): CMsgClientTicketAuthComplete {
    const message = createBaseCMsgClientTicketAuthComplete();
    message.steamId = object.steamId ?? "0";
    message.gameId = object.gameId ?? "0";
    message.estate = object.estate ?? 0;
    message.eauthSessionResponse = object.eauthSessionResponse ?? 0;
    message.DEPRECATEDTicket = object.DEPRECATEDTicket ?? Buffer.alloc(0);
    message.ticketCrc = object.ticketCrc ?? 0;
    message.ticketSequence = object.ticketSequence ?? 0;
    message.ownerSteamId = object.ownerSteamId ?? "0";
    return message;
  },
};

function createBaseCMsgClientCMList(): CMsgClientCMList {
  return { cmAddresses: [], cmPorts: [], cmWebsocketAddresses: [], percentDefaultToWebsocket: 0 };
}

export const CMsgClientCMList = {
  encode(message: CMsgClientCMList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.cmAddresses) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.cmPorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.cmWebsocketAddresses) {
      writer.uint32(26).string(v!);
    }
    if (message.percentDefaultToWebsocket !== 0) {
      writer.uint32(32).uint32(message.percentDefaultToWebsocket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientCMList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientCMList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cmAddresses.push(reader.uint32());
            }
          } else {
            message.cmAddresses.push(reader.uint32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cmPorts.push(reader.uint32());
            }
          } else {
            message.cmPorts.push(reader.uint32());
          }
          break;
        case 3:
          message.cmWebsocketAddresses.push(reader.string());
          break;
        case 4:
          message.percentDefaultToWebsocket = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientCMList {
    return {
      cmAddresses: Array.isArray(object?.cmAddresses) ? object.cmAddresses.map((e: any) => Number(e)) : [],
      cmPorts: Array.isArray(object?.cmPorts) ? object.cmPorts.map((e: any) => Number(e)) : [],
      cmWebsocketAddresses: Array.isArray(object?.cmWebsocketAddresses)
        ? object.cmWebsocketAddresses.map((e: any) => String(e))
        : [],
      percentDefaultToWebsocket: isSet(object.percentDefaultToWebsocket) ? Number(object.percentDefaultToWebsocket) : 0,
    };
  },

  toJSON(message: CMsgClientCMList): unknown {
    const obj: any = {};
    if (message.cmAddresses) {
      obj.cmAddresses = message.cmAddresses.map((e) => Math.round(e));
    } else {
      obj.cmAddresses = [];
    }
    if (message.cmPorts) {
      obj.cmPorts = message.cmPorts.map((e) => Math.round(e));
    } else {
      obj.cmPorts = [];
    }
    if (message.cmWebsocketAddresses) {
      obj.cmWebsocketAddresses = message.cmWebsocketAddresses.map((e) => e);
    } else {
      obj.cmWebsocketAddresses = [];
    }
    message.percentDefaultToWebsocket !== undefined &&
      (obj.percentDefaultToWebsocket = Math.round(message.percentDefaultToWebsocket));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientCMList>, I>>(base?: I): CMsgClientCMList {
    return CMsgClientCMList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientCMList>, I>>(object: I): CMsgClientCMList {
    const message = createBaseCMsgClientCMList();
    message.cmAddresses = object.cmAddresses?.map((e) => e) || [];
    message.cmPorts = object.cmPorts?.map((e) => e) || [];
    message.cmWebsocketAddresses = object.cmWebsocketAddresses?.map((e) => e) || [];
    message.percentDefaultToWebsocket = object.percentDefaultToWebsocket ?? 0;
    return message;
  },
};

function createBaseCMsgClientP2PConnectionInfo(): CMsgClientP2PConnectionInfo {
  return {
    steamIdDest: "0",
    steamIdSrc: "0",
    appId: 0,
    candidate: Buffer.alloc(0),
    legacyConnectionIdSrc: "0",
    rendezvous: Buffer.alloc(0),
  };
}

export const CMsgClientP2PConnectionInfo = {
  encode(message: CMsgClientP2PConnectionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdDest !== "0") {
      writer.uint32(9).fixed64(message.steamIdDest);
    }
    if (message.steamIdSrc !== "0") {
      writer.uint32(17).fixed64(message.steamIdSrc);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.candidate.length !== 0) {
      writer.uint32(34).bytes(message.candidate);
    }
    if (message.legacyConnectionIdSrc !== "0") {
      writer.uint32(41).fixed64(message.legacyConnectionIdSrc);
    }
    if (message.rendezvous.length !== 0) {
      writer.uint32(50).bytes(message.rendezvous);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientP2PConnectionInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientP2PConnectionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdDest = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamIdSrc = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.candidate = reader.bytes() as Buffer;
          break;
        case 5:
          message.legacyConnectionIdSrc = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.rendezvous = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientP2PConnectionInfo {
    return {
      steamIdDest: isSet(object.steamIdDest) ? String(object.steamIdDest) : "0",
      steamIdSrc: isSet(object.steamIdSrc) ? String(object.steamIdSrc) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      candidate: isSet(object.candidate) ? Buffer.from(bytesFromBase64(object.candidate)) : Buffer.alloc(0),
      legacyConnectionIdSrc: isSet(object.legacyConnectionIdSrc) ? String(object.legacyConnectionIdSrc) : "0",
      rendezvous: isSet(object.rendezvous) ? Buffer.from(bytesFromBase64(object.rendezvous)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientP2PConnectionInfo): unknown {
    const obj: any = {};
    message.steamIdDest !== undefined && (obj.steamIdDest = message.steamIdDest);
    message.steamIdSrc !== undefined && (obj.steamIdSrc = message.steamIdSrc);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.candidate !== undefined &&
      (obj.candidate = base64FromBytes(message.candidate !== undefined ? message.candidate : Buffer.alloc(0)));
    message.legacyConnectionIdSrc !== undefined && (obj.legacyConnectionIdSrc = message.legacyConnectionIdSrc);
    message.rendezvous !== undefined &&
      (obj.rendezvous = base64FromBytes(message.rendezvous !== undefined ? message.rendezvous : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientP2PConnectionInfo>, I>>(base?: I): CMsgClientP2PConnectionInfo {
    return CMsgClientP2PConnectionInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientP2PConnectionInfo>, I>>(object: I): CMsgClientP2PConnectionInfo {
    const message = createBaseCMsgClientP2PConnectionInfo();
    message.steamIdDest = object.steamIdDest ?? "0";
    message.steamIdSrc = object.steamIdSrc ?? "0";
    message.appId = object.appId ?? 0;
    message.candidate = object.candidate ?? Buffer.alloc(0);
    message.legacyConnectionIdSrc = object.legacyConnectionIdSrc ?? "0";
    message.rendezvous = object.rendezvous ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientP2PConnectionFailInfo(): CMsgClientP2PConnectionFailInfo {
  return {
    steamIdDest: "0",
    steamIdSrc: "0",
    appId: 0,
    ep2pSessionError: 0,
    connectionIdDest: "0",
    closeReason: 0,
    closeMessage: "",
  };
}

export const CMsgClientP2PConnectionFailInfo = {
  encode(message: CMsgClientP2PConnectionFailInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdDest !== "0") {
      writer.uint32(9).fixed64(message.steamIdDest);
    }
    if (message.steamIdSrc !== "0") {
      writer.uint32(17).fixed64(message.steamIdSrc);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    if (message.ep2pSessionError !== 0) {
      writer.uint32(32).uint32(message.ep2pSessionError);
    }
    if (message.connectionIdDest !== "0") {
      writer.uint32(41).fixed64(message.connectionIdDest);
    }
    if (message.closeReason !== 0) {
      writer.uint32(56).uint32(message.closeReason);
    }
    if (message.closeMessage !== "") {
      writer.uint32(66).string(message.closeMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientP2PConnectionFailInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientP2PConnectionFailInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdDest = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamIdSrc = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        case 4:
          message.ep2pSessionError = reader.uint32();
          break;
        case 5:
          message.connectionIdDest = longToString(reader.fixed64() as Long);
          break;
        case 7:
          message.closeReason = reader.uint32();
          break;
        case 8:
          message.closeMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientP2PConnectionFailInfo {
    return {
      steamIdDest: isSet(object.steamIdDest) ? String(object.steamIdDest) : "0",
      steamIdSrc: isSet(object.steamIdSrc) ? String(object.steamIdSrc) : "0",
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      ep2pSessionError: isSet(object.ep2pSessionError) ? Number(object.ep2pSessionError) : 0,
      connectionIdDest: isSet(object.connectionIdDest) ? String(object.connectionIdDest) : "0",
      closeReason: isSet(object.closeReason) ? Number(object.closeReason) : 0,
      closeMessage: isSet(object.closeMessage) ? String(object.closeMessage) : "",
    };
  },

  toJSON(message: CMsgClientP2PConnectionFailInfo): unknown {
    const obj: any = {};
    message.steamIdDest !== undefined && (obj.steamIdDest = message.steamIdDest);
    message.steamIdSrc !== undefined && (obj.steamIdSrc = message.steamIdSrc);
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.ep2pSessionError !== undefined && (obj.ep2pSessionError = Math.round(message.ep2pSessionError));
    message.connectionIdDest !== undefined && (obj.connectionIdDest = message.connectionIdDest);
    message.closeReason !== undefined && (obj.closeReason = Math.round(message.closeReason));
    message.closeMessage !== undefined && (obj.closeMessage = message.closeMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientP2PConnectionFailInfo>, I>>(base?: I): CMsgClientP2PConnectionFailInfo {
    return CMsgClientP2PConnectionFailInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientP2PConnectionFailInfo>, I>>(
    object: I,
  ): CMsgClientP2PConnectionFailInfo {
    const message = createBaseCMsgClientP2PConnectionFailInfo();
    message.steamIdDest = object.steamIdDest ?? "0";
    message.steamIdSrc = object.steamIdSrc ?? "0";
    message.appId = object.appId ?? 0;
    message.ep2pSessionError = object.ep2pSessionError ?? 0;
    message.connectionIdDest = object.connectionIdDest ?? "0";
    message.closeReason = object.closeReason ?? 0;
    message.closeMessage = object.closeMessage ?? "";
    return message;
  },
};

function createBaseCMsgClientNetworkingCertRequest(): CMsgClientNetworkingCertRequest {
  return { keyData: Buffer.alloc(0), appId: 0 };
}

export const CMsgClientNetworkingCertRequest = {
  encode(message: CMsgClientNetworkingCertRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyData.length !== 0) {
      writer.uint32(18).bytes(message.keyData);
    }
    if (message.appId !== 0) {
      writer.uint32(24).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNetworkingCertRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNetworkingCertRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.keyData = reader.bytes() as Buffer;
          break;
        case 3:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNetworkingCertRequest {
    return {
      keyData: isSet(object.keyData) ? Buffer.from(bytesFromBase64(object.keyData)) : Buffer.alloc(0),
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientNetworkingCertRequest): unknown {
    const obj: any = {};
    message.keyData !== undefined &&
      (obj.keyData = base64FromBytes(message.keyData !== undefined ? message.keyData : Buffer.alloc(0)));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientNetworkingCertRequest>, I>>(base?: I): CMsgClientNetworkingCertRequest {
    return CMsgClientNetworkingCertRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientNetworkingCertRequest>, I>>(
    object: I,
  ): CMsgClientNetworkingCertRequest {
    const message = createBaseCMsgClientNetworkingCertRequest();
    message.keyData = object.keyData ?? Buffer.alloc(0);
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientNetworkingCertReply(): CMsgClientNetworkingCertReply {
  return { cert: Buffer.alloc(0), caKeyId: "0", caSignature: Buffer.alloc(0) };
}

export const CMsgClientNetworkingCertReply = {
  encode(message: CMsgClientNetworkingCertReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cert.length !== 0) {
      writer.uint32(34).bytes(message.cert);
    }
    if (message.caKeyId !== "0") {
      writer.uint32(41).fixed64(message.caKeyId);
    }
    if (message.caSignature.length !== 0) {
      writer.uint32(50).bytes(message.caSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNetworkingCertReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNetworkingCertReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.cert = reader.bytes() as Buffer;
          break;
        case 5:
          message.caKeyId = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.caSignature = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNetworkingCertReply {
    return {
      cert: isSet(object.cert) ? Buffer.from(bytesFromBase64(object.cert)) : Buffer.alloc(0),
      caKeyId: isSet(object.caKeyId) ? String(object.caKeyId) : "0",
      caSignature: isSet(object.caSignature) ? Buffer.from(bytesFromBase64(object.caSignature)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientNetworkingCertReply): unknown {
    const obj: any = {};
    message.cert !== undefined &&
      (obj.cert = base64FromBytes(message.cert !== undefined ? message.cert : Buffer.alloc(0)));
    message.caKeyId !== undefined && (obj.caKeyId = message.caKeyId);
    message.caSignature !== undefined &&
      (obj.caSignature = base64FromBytes(message.caSignature !== undefined ? message.caSignature : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientNetworkingCertReply>, I>>(base?: I): CMsgClientNetworkingCertReply {
    return CMsgClientNetworkingCertReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientNetworkingCertReply>, I>>(
    object: I,
  ): CMsgClientNetworkingCertReply {
    const message = createBaseCMsgClientNetworkingCertReply();
    message.cert = object.cert ?? Buffer.alloc(0);
    message.caKeyId = object.caKeyId ?? "0";
    message.caSignature = object.caSignature ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientNetworkingMobileCertRequest(): CMsgClientNetworkingMobileCertRequest {
  return { appId: 0 };
}

export const CMsgClientNetworkingMobileCertRequest = {
  encode(message: CMsgClientNetworkingMobileCertRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNetworkingMobileCertRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNetworkingMobileCertRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNetworkingMobileCertRequest {
    return { appId: isSet(object.appId) ? Number(object.appId) : 0 };
  },

  toJSON(message: CMsgClientNetworkingMobileCertRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientNetworkingMobileCertRequest>, I>>(
    base?: I,
  ): CMsgClientNetworkingMobileCertRequest {
    return CMsgClientNetworkingMobileCertRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientNetworkingMobileCertRequest>, I>>(
    object: I,
  ): CMsgClientNetworkingMobileCertRequest {
    const message = createBaseCMsgClientNetworkingMobileCertRequest();
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientNetworkingMobileCertReply(): CMsgClientNetworkingMobileCertReply {
  return { encodedCert: "" };
}

export const CMsgClientNetworkingMobileCertReply = {
  encode(message: CMsgClientNetworkingMobileCertReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedCert !== "") {
      writer.uint32(10).string(message.encodedCert);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientNetworkingMobileCertReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientNetworkingMobileCertReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encodedCert = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientNetworkingMobileCertReply {
    return { encodedCert: isSet(object.encodedCert) ? String(object.encodedCert) : "" };
  },

  toJSON(message: CMsgClientNetworkingMobileCertReply): unknown {
    const obj: any = {};
    message.encodedCert !== undefined && (obj.encodedCert = message.encodedCert);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientNetworkingMobileCertReply>, I>>(
    base?: I,
  ): CMsgClientNetworkingMobileCertReply {
    return CMsgClientNetworkingMobileCertReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientNetworkingMobileCertReply>, I>>(
    object: I,
  ): CMsgClientNetworkingMobileCertReply {
    const message = createBaseCMsgClientNetworkingMobileCertReply();
    message.encodedCert = object.encodedCert ?? "";
    return message;
  },
};

function createBaseCMsgClientGetAppOwnershipTicket(): CMsgClientGetAppOwnershipTicket {
  return { appId: 0 };
}

export const CMsgClientGetAppOwnershipTicket = {
  encode(message: CMsgClientGetAppOwnershipTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetAppOwnershipTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetAppOwnershipTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetAppOwnershipTicket {
    return { appId: isSet(object.appId) ? Number(object.appId) : 0 };
  },

  toJSON(message: CMsgClientGetAppOwnershipTicket): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetAppOwnershipTicket>, I>>(base?: I): CMsgClientGetAppOwnershipTicket {
    return CMsgClientGetAppOwnershipTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetAppOwnershipTicket>, I>>(
    object: I,
  ): CMsgClientGetAppOwnershipTicket {
    const message = createBaseCMsgClientGetAppOwnershipTicket();
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientGetAppOwnershipTicketResponse(): CMsgClientGetAppOwnershipTicketResponse {
  return { eresult: 0, appId: 0, ticket: Buffer.alloc(0) };
}

export const CMsgClientGetAppOwnershipTicketResponse = {
  encode(message: CMsgClientGetAppOwnershipTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).uint32(message.eresult);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    if (message.ticket.length !== 0) {
      writer.uint32(26).bytes(message.ticket);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGetAppOwnershipTicketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGetAppOwnershipTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        case 3:
          message.ticket = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGetAppOwnershipTicketResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      ticket: isSet(object.ticket) ? Buffer.from(bytesFromBase64(object.ticket)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientGetAppOwnershipTicketResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.ticket !== undefined &&
      (obj.ticket = base64FromBytes(message.ticket !== undefined ? message.ticket : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGetAppOwnershipTicketResponse>, I>>(
    base?: I,
  ): CMsgClientGetAppOwnershipTicketResponse {
    return CMsgClientGetAppOwnershipTicketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGetAppOwnershipTicketResponse>, I>>(
    object: I,
  ): CMsgClientGetAppOwnershipTicketResponse {
    const message = createBaseCMsgClientGetAppOwnershipTicketResponse();
    message.eresult = object.eresult ?? 0;
    message.appId = object.appId ?? 0;
    message.ticket = object.ticket ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientSessionToken(): CMsgClientSessionToken {
  return { token: "0" };
}

export const CMsgClientSessionToken = {
  encode(message: CMsgClientSessionToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "0") {
      writer.uint32(8).uint64(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientSessionToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientSessionToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientSessionToken {
    return { token: isSet(object.token) ? String(object.token) : "0" };
  },

  toJSON(message: CMsgClientSessionToken): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientSessionToken>, I>>(base?: I): CMsgClientSessionToken {
    return CMsgClientSessionToken.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientSessionToken>, I>>(object: I): CMsgClientSessionToken {
    const message = createBaseCMsgClientSessionToken();
    message.token = object.token ?? "0";
    return message;
  },
};

function createBaseCMsgClientGameConnectTokens(): CMsgClientGameConnectTokens {
  return { maxTokensToKeep: 0, tokens: [] };
}

export const CMsgClientGameConnectTokens = {
  encode(message: CMsgClientGameConnectTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxTokensToKeep !== 0) {
      writer.uint32(8).uint32(message.maxTokensToKeep);
    }
    for (const v of message.tokens) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGameConnectTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGameConnectTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTokensToKeep = reader.uint32();
          break;
        case 2:
          message.tokens.push(reader.bytes() as Buffer);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGameConnectTokens {
    return {
      maxTokensToKeep: isSet(object.maxTokensToKeep) ? Number(object.maxTokensToKeep) : 0,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
    };
  },

  toJSON(message: CMsgClientGameConnectTokens): unknown {
    const obj: any = {};
    message.maxTokensToKeep !== undefined && (obj.maxTokensToKeep = Math.round(message.maxTokensToKeep));
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGameConnectTokens>, I>>(base?: I): CMsgClientGameConnectTokens {
    return CMsgClientGameConnectTokens.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGameConnectTokens>, I>>(object: I): CMsgClientGameConnectTokens {
    const message = createBaseCMsgClientGameConnectTokens();
    message.maxTokensToKeep = object.maxTokensToKeep ?? 0;
    message.tokens = object.tokens?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientGamesPlayed(): CMsgClientGamesPlayed {
  return { gamesPlayed: [], clientOsType: 0, cloudGamingPlatform: 0, recentReauthentication: false };
}

export const CMsgClientGamesPlayed = {
  encode(message: CMsgClientGamesPlayed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.gamesPlayed) {
      CMsgClientGamesPlayed_GamePlayed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientOsType !== 0) {
      writer.uint32(16).uint32(message.clientOsType);
    }
    if (message.cloudGamingPlatform !== 0) {
      writer.uint32(24).uint32(message.cloudGamingPlatform);
    }
    if (message.recentReauthentication === true) {
      writer.uint32(32).bool(message.recentReauthentication);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGamesPlayed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGamesPlayed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamesPlayed.push(CMsgClientGamesPlayed_GamePlayed.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientOsType = reader.uint32();
          break;
        case 3:
          message.cloudGamingPlatform = reader.uint32();
          break;
        case 4:
          message.recentReauthentication = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGamesPlayed {
    return {
      gamesPlayed: Array.isArray(object?.gamesPlayed)
        ? object.gamesPlayed.map((e: any) => CMsgClientGamesPlayed_GamePlayed.fromJSON(e))
        : [],
      clientOsType: isSet(object.clientOsType) ? Number(object.clientOsType) : 0,
      cloudGamingPlatform: isSet(object.cloudGamingPlatform) ? Number(object.cloudGamingPlatform) : 0,
      recentReauthentication: isSet(object.recentReauthentication) ? Boolean(object.recentReauthentication) : false,
    };
  },

  toJSON(message: CMsgClientGamesPlayed): unknown {
    const obj: any = {};
    if (message.gamesPlayed) {
      obj.gamesPlayed = message.gamesPlayed.map((e) => e ? CMsgClientGamesPlayed_GamePlayed.toJSON(e) : undefined);
    } else {
      obj.gamesPlayed = [];
    }
    message.clientOsType !== undefined && (obj.clientOsType = Math.round(message.clientOsType));
    message.cloudGamingPlatform !== undefined && (obj.cloudGamingPlatform = Math.round(message.cloudGamingPlatform));
    message.recentReauthentication !== undefined && (obj.recentReauthentication = message.recentReauthentication);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGamesPlayed>, I>>(base?: I): CMsgClientGamesPlayed {
    return CMsgClientGamesPlayed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGamesPlayed>, I>>(object: I): CMsgClientGamesPlayed {
    const message = createBaseCMsgClientGamesPlayed();
    message.gamesPlayed = object.gamesPlayed?.map((e) => CMsgClientGamesPlayed_GamePlayed.fromPartial(e)) || [];
    message.clientOsType = object.clientOsType ?? 0;
    message.cloudGamingPlatform = object.cloudGamingPlatform ?? 0;
    message.recentReauthentication = object.recentReauthentication ?? false;
    return message;
  },
};

function createBaseCMsgClientGamesPlayed_ProcessInfo(): CMsgClientGamesPlayed_ProcessInfo {
  return { processId: 0, processIdParent: 0, parentIsSteam: false };
}

export const CMsgClientGamesPlayed_ProcessInfo = {
  encode(message: CMsgClientGamesPlayed_ProcessInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.processId !== 0) {
      writer.uint32(8).uint32(message.processId);
    }
    if (message.processIdParent !== 0) {
      writer.uint32(16).uint32(message.processIdParent);
    }
    if (message.parentIsSteam === true) {
      writer.uint32(24).bool(message.parentIsSteam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGamesPlayed_ProcessInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGamesPlayed_ProcessInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processId = reader.uint32();
          break;
        case 2:
          message.processIdParent = reader.uint32();
          break;
        case 3:
          message.parentIsSteam = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGamesPlayed_ProcessInfo {
    return {
      processId: isSet(object.processId) ? Number(object.processId) : 0,
      processIdParent: isSet(object.processIdParent) ? Number(object.processIdParent) : 0,
      parentIsSteam: isSet(object.parentIsSteam) ? Boolean(object.parentIsSteam) : false,
    };
  },

  toJSON(message: CMsgClientGamesPlayed_ProcessInfo): unknown {
    const obj: any = {};
    message.processId !== undefined && (obj.processId = Math.round(message.processId));
    message.processIdParent !== undefined && (obj.processIdParent = Math.round(message.processIdParent));
    message.parentIsSteam !== undefined && (obj.parentIsSteam = message.parentIsSteam);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGamesPlayed_ProcessInfo>, I>>(
    base?: I,
  ): CMsgClientGamesPlayed_ProcessInfo {
    return CMsgClientGamesPlayed_ProcessInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGamesPlayed_ProcessInfo>, I>>(
    object: I,
  ): CMsgClientGamesPlayed_ProcessInfo {
    const message = createBaseCMsgClientGamesPlayed_ProcessInfo();
    message.processId = object.processId ?? 0;
    message.processIdParent = object.processIdParent ?? 0;
    message.parentIsSteam = object.parentIsSteam ?? false;
    return message;
  },
};

function createBaseCMsgClientGamesPlayed_GamePlayed(): CMsgClientGamesPlayed_GamePlayed {
  return {
    steamIdGs: "0",
    gameId: "0",
    deprecatedGameIpAddress: 0,
    gamePort: 0,
    isSecure: false,
    token: Buffer.alloc(0),
    gameExtraInfo: "",
    gameDataBlob: Buffer.alloc(0),
    processId: 0,
    streamingProviderId: 0,
    gameFlags: 0,
    ownerId: 0,
    vrHmdVendor: "",
    vrHmdModel: "",
    launchOptionType: 0,
    primaryControllerType: 0,
    primarySteamControllerSerial: "",
    totalSteamControllerCount: 0,
    totalNonSteamControllerCount: 0,
    controllerWorkshopFileId: "0",
    launchSource: 0,
    vrHmdRuntime: 0,
    gameIpAddress: undefined,
    controllerConnectionType: 0,
    gameOsPlatform: 0,
    gameBuildId: 0,
    compatToolId: 0,
    compatToolCmd: "",
    compatToolBuildId: 0,
    betaName: "",
    dlcContext: 0,
    processIdList: [],
  };
}

export const CMsgClientGamesPlayed_GamePlayed = {
  encode(message: CMsgClientGamesPlayed_GamePlayed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdGs !== "0") {
      writer.uint32(8).uint64(message.steamIdGs);
    }
    if (message.gameId !== "0") {
      writer.uint32(17).fixed64(message.gameId);
    }
    if (message.deprecatedGameIpAddress !== 0) {
      writer.uint32(24).uint32(message.deprecatedGameIpAddress);
    }
    if (message.gamePort !== 0) {
      writer.uint32(32).uint32(message.gamePort);
    }
    if (message.isSecure === true) {
      writer.uint32(40).bool(message.isSecure);
    }
    if (message.token.length !== 0) {
      writer.uint32(50).bytes(message.token);
    }
    if (message.gameExtraInfo !== "") {
      writer.uint32(58).string(message.gameExtraInfo);
    }
    if (message.gameDataBlob.length !== 0) {
      writer.uint32(66).bytes(message.gameDataBlob);
    }
    if (message.processId !== 0) {
      writer.uint32(72).uint32(message.processId);
    }
    if (message.streamingProviderId !== 0) {
      writer.uint32(80).uint32(message.streamingProviderId);
    }
    if (message.gameFlags !== 0) {
      writer.uint32(88).uint32(message.gameFlags);
    }
    if (message.ownerId !== 0) {
      writer.uint32(96).uint32(message.ownerId);
    }
    if (message.vrHmdVendor !== "") {
      writer.uint32(106).string(message.vrHmdVendor);
    }
    if (message.vrHmdModel !== "") {
      writer.uint32(114).string(message.vrHmdModel);
    }
    if (message.launchOptionType !== 0) {
      writer.uint32(120).uint32(message.launchOptionType);
    }
    if (message.primaryControllerType !== 0) {
      writer.uint32(128).int32(message.primaryControllerType);
    }
    if (message.primarySteamControllerSerial !== "") {
      writer.uint32(138).string(message.primarySteamControllerSerial);
    }
    if (message.totalSteamControllerCount !== 0) {
      writer.uint32(144).uint32(message.totalSteamControllerCount);
    }
    if (message.totalNonSteamControllerCount !== 0) {
      writer.uint32(152).uint32(message.totalNonSteamControllerCount);
    }
    if (message.controllerWorkshopFileId !== "0") {
      writer.uint32(160).uint64(message.controllerWorkshopFileId);
    }
    if (message.launchSource !== 0) {
      writer.uint32(168).uint32(message.launchSource);
    }
    if (message.vrHmdRuntime !== 0) {
      writer.uint32(176).uint32(message.vrHmdRuntime);
    }
    if (message.gameIpAddress !== undefined) {
      CMsgIPAddress.encode(message.gameIpAddress, writer.uint32(186).fork()).ldelim();
    }
    if (message.controllerConnectionType !== 0) {
      writer.uint32(192).uint32(message.controllerConnectionType);
    }
    if (message.gameOsPlatform !== 0) {
      writer.uint32(200).int32(message.gameOsPlatform);
    }
    if (message.gameBuildId !== 0) {
      writer.uint32(208).uint32(message.gameBuildId);
    }
    if (message.compatToolId !== 0) {
      writer.uint32(216).uint32(message.compatToolId);
    }
    if (message.compatToolCmd !== "") {
      writer.uint32(226).string(message.compatToolCmd);
    }
    if (message.compatToolBuildId !== 0) {
      writer.uint32(232).uint32(message.compatToolBuildId);
    }
    if (message.betaName !== "") {
      writer.uint32(242).string(message.betaName);
    }
    if (message.dlcContext !== 0) {
      writer.uint32(248).uint32(message.dlcContext);
    }
    for (const v of message.processIdList) {
      CMsgClientGamesPlayed_ProcessInfo.encode(v!, writer.uint32(258).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientGamesPlayed_GamePlayed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientGamesPlayed_GamePlayed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdGs = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.deprecatedGameIpAddress = reader.uint32();
          break;
        case 4:
          message.gamePort = reader.uint32();
          break;
        case 5:
          message.isSecure = reader.bool();
          break;
        case 6:
          message.token = reader.bytes() as Buffer;
          break;
        case 7:
          message.gameExtraInfo = reader.string();
          break;
        case 8:
          message.gameDataBlob = reader.bytes() as Buffer;
          break;
        case 9:
          message.processId = reader.uint32();
          break;
        case 10:
          message.streamingProviderId = reader.uint32();
          break;
        case 11:
          message.gameFlags = reader.uint32();
          break;
        case 12:
          message.ownerId = reader.uint32();
          break;
        case 13:
          message.vrHmdVendor = reader.string();
          break;
        case 14:
          message.vrHmdModel = reader.string();
          break;
        case 15:
          message.launchOptionType = reader.uint32();
          break;
        case 16:
          message.primaryControllerType = reader.int32();
          break;
        case 17:
          message.primarySteamControllerSerial = reader.string();
          break;
        case 18:
          message.totalSteamControllerCount = reader.uint32();
          break;
        case 19:
          message.totalNonSteamControllerCount = reader.uint32();
          break;
        case 20:
          message.controllerWorkshopFileId = longToString(reader.uint64() as Long);
          break;
        case 21:
          message.launchSource = reader.uint32();
          break;
        case 22:
          message.vrHmdRuntime = reader.uint32();
          break;
        case 23:
          message.gameIpAddress = CMsgIPAddress.decode(reader, reader.uint32());
          break;
        case 24:
          message.controllerConnectionType = reader.uint32();
          break;
        case 25:
          message.gameOsPlatform = reader.int32();
          break;
        case 26:
          message.gameBuildId = reader.uint32();
          break;
        case 27:
          message.compatToolId = reader.uint32();
          break;
        case 28:
          message.compatToolCmd = reader.string();
          break;
        case 29:
          message.compatToolBuildId = reader.uint32();
          break;
        case 30:
          message.betaName = reader.string();
          break;
        case 31:
          message.dlcContext = reader.uint32();
          break;
        case 32:
          message.processIdList.push(CMsgClientGamesPlayed_ProcessInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientGamesPlayed_GamePlayed {
    return {
      steamIdGs: isSet(object.steamIdGs) ? String(object.steamIdGs) : "0",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      deprecatedGameIpAddress: isSet(object.deprecatedGameIpAddress) ? Number(object.deprecatedGameIpAddress) : 0,
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      isSecure: isSet(object.isSecure) ? Boolean(object.isSecure) : false,
      token: isSet(object.token) ? Buffer.from(bytesFromBase64(object.token)) : Buffer.alloc(0),
      gameExtraInfo: isSet(object.gameExtraInfo) ? String(object.gameExtraInfo) : "",
      gameDataBlob: isSet(object.gameDataBlob) ? Buffer.from(bytesFromBase64(object.gameDataBlob)) : Buffer.alloc(0),
      processId: isSet(object.processId) ? Number(object.processId) : 0,
      streamingProviderId: isSet(object.streamingProviderId) ? Number(object.streamingProviderId) : 0,
      gameFlags: isSet(object.gameFlags) ? Number(object.gameFlags) : 0,
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
      vrHmdVendor: isSet(object.vrHmdVendor) ? String(object.vrHmdVendor) : "",
      vrHmdModel: isSet(object.vrHmdModel) ? String(object.vrHmdModel) : "",
      launchOptionType: isSet(object.launchOptionType) ? Number(object.launchOptionType) : 0,
      primaryControllerType: isSet(object.primaryControllerType) ? Number(object.primaryControllerType) : 0,
      primarySteamControllerSerial: isSet(object.primarySteamControllerSerial)
        ? String(object.primarySteamControllerSerial)
        : "",
      totalSteamControllerCount: isSet(object.totalSteamControllerCount) ? Number(object.totalSteamControllerCount) : 0,
      totalNonSteamControllerCount: isSet(object.totalNonSteamControllerCount)
        ? Number(object.totalNonSteamControllerCount)
        : 0,
      controllerWorkshopFileId: isSet(object.controllerWorkshopFileId) ? String(object.controllerWorkshopFileId) : "0",
      launchSource: isSet(object.launchSource) ? Number(object.launchSource) : 0,
      vrHmdRuntime: isSet(object.vrHmdRuntime) ? Number(object.vrHmdRuntime) : 0,
      gameIpAddress: isSet(object.gameIpAddress) ? CMsgIPAddress.fromJSON(object.gameIpAddress) : undefined,
      controllerConnectionType: isSet(object.controllerConnectionType) ? Number(object.controllerConnectionType) : 0,
      gameOsPlatform: isSet(object.gameOsPlatform) ? Number(object.gameOsPlatform) : 0,
      gameBuildId: isSet(object.gameBuildId) ? Number(object.gameBuildId) : 0,
      compatToolId: isSet(object.compatToolId) ? Number(object.compatToolId) : 0,
      compatToolCmd: isSet(object.compatToolCmd) ? String(object.compatToolCmd) : "",
      compatToolBuildId: isSet(object.compatToolBuildId) ? Number(object.compatToolBuildId) : 0,
      betaName: isSet(object.betaName) ? String(object.betaName) : "",
      dlcContext: isSet(object.dlcContext) ? Number(object.dlcContext) : 0,
      processIdList: Array.isArray(object?.processIdList)
        ? object.processIdList.map((e: any) => CMsgClientGamesPlayed_ProcessInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientGamesPlayed_GamePlayed): unknown {
    const obj: any = {};
    message.steamIdGs !== undefined && (obj.steamIdGs = message.steamIdGs);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.deprecatedGameIpAddress !== undefined &&
      (obj.deprecatedGameIpAddress = Math.round(message.deprecatedGameIpAddress));
    message.gamePort !== undefined && (obj.gamePort = Math.round(message.gamePort));
    message.isSecure !== undefined && (obj.isSecure = message.isSecure);
    message.token !== undefined &&
      (obj.token = base64FromBytes(message.token !== undefined ? message.token : Buffer.alloc(0)));
    message.gameExtraInfo !== undefined && (obj.gameExtraInfo = message.gameExtraInfo);
    message.gameDataBlob !== undefined &&
      (obj.gameDataBlob = base64FromBytes(message.gameDataBlob !== undefined ? message.gameDataBlob : Buffer.alloc(0)));
    message.processId !== undefined && (obj.processId = Math.round(message.processId));
    message.streamingProviderId !== undefined && (obj.streamingProviderId = Math.round(message.streamingProviderId));
    message.gameFlags !== undefined && (obj.gameFlags = Math.round(message.gameFlags));
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    message.vrHmdVendor !== undefined && (obj.vrHmdVendor = message.vrHmdVendor);
    message.vrHmdModel !== undefined && (obj.vrHmdModel = message.vrHmdModel);
    message.launchOptionType !== undefined && (obj.launchOptionType = Math.round(message.launchOptionType));
    message.primaryControllerType !== undefined &&
      (obj.primaryControllerType = Math.round(message.primaryControllerType));
    message.primarySteamControllerSerial !== undefined &&
      (obj.primarySteamControllerSerial = message.primarySteamControllerSerial);
    message.totalSteamControllerCount !== undefined &&
      (obj.totalSteamControllerCount = Math.round(message.totalSteamControllerCount));
    message.totalNonSteamControllerCount !== undefined &&
      (obj.totalNonSteamControllerCount = Math.round(message.totalNonSteamControllerCount));
    message.controllerWorkshopFileId !== undefined && (obj.controllerWorkshopFileId = message.controllerWorkshopFileId);
    message.launchSource !== undefined && (obj.launchSource = Math.round(message.launchSource));
    message.vrHmdRuntime !== undefined && (obj.vrHmdRuntime = Math.round(message.vrHmdRuntime));
    message.gameIpAddress !== undefined &&
      (obj.gameIpAddress = message.gameIpAddress ? CMsgIPAddress.toJSON(message.gameIpAddress) : undefined);
    message.controllerConnectionType !== undefined &&
      (obj.controllerConnectionType = Math.round(message.controllerConnectionType));
    message.gameOsPlatform !== undefined && (obj.gameOsPlatform = Math.round(message.gameOsPlatform));
    message.gameBuildId !== undefined && (obj.gameBuildId = Math.round(message.gameBuildId));
    message.compatToolId !== undefined && (obj.compatToolId = Math.round(message.compatToolId));
    message.compatToolCmd !== undefined && (obj.compatToolCmd = message.compatToolCmd);
    message.compatToolBuildId !== undefined && (obj.compatToolBuildId = Math.round(message.compatToolBuildId));
    message.betaName !== undefined && (obj.betaName = message.betaName);
    message.dlcContext !== undefined && (obj.dlcContext = Math.round(message.dlcContext));
    if (message.processIdList) {
      obj.processIdList = message.processIdList.map((e) => e ? CMsgClientGamesPlayed_ProcessInfo.toJSON(e) : undefined);
    } else {
      obj.processIdList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientGamesPlayed_GamePlayed>, I>>(
    base?: I,
  ): CMsgClientGamesPlayed_GamePlayed {
    return CMsgClientGamesPlayed_GamePlayed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientGamesPlayed_GamePlayed>, I>>(
    object: I,
  ): CMsgClientGamesPlayed_GamePlayed {
    const message = createBaseCMsgClientGamesPlayed_GamePlayed();
    message.steamIdGs = object.steamIdGs ?? "0";
    message.gameId = object.gameId ?? "0";
    message.deprecatedGameIpAddress = object.deprecatedGameIpAddress ?? 0;
    message.gamePort = object.gamePort ?? 0;
    message.isSecure = object.isSecure ?? false;
    message.token = object.token ?? Buffer.alloc(0);
    message.gameExtraInfo = object.gameExtraInfo ?? "";
    message.gameDataBlob = object.gameDataBlob ?? Buffer.alloc(0);
    message.processId = object.processId ?? 0;
    message.streamingProviderId = object.streamingProviderId ?? 0;
    message.gameFlags = object.gameFlags ?? 0;
    message.ownerId = object.ownerId ?? 0;
    message.vrHmdVendor = object.vrHmdVendor ?? "";
    message.vrHmdModel = object.vrHmdModel ?? "";
    message.launchOptionType = object.launchOptionType ?? 0;
    message.primaryControllerType = object.primaryControllerType ?? 0;
    message.primarySteamControllerSerial = object.primarySteamControllerSerial ?? "";
    message.totalSteamControllerCount = object.totalSteamControllerCount ?? 0;
    message.totalNonSteamControllerCount = object.totalNonSteamControllerCount ?? 0;
    message.controllerWorkshopFileId = object.controllerWorkshopFileId ?? "0";
    message.launchSource = object.launchSource ?? 0;
    message.vrHmdRuntime = object.vrHmdRuntime ?? 0;
    message.gameIpAddress = (object.gameIpAddress !== undefined && object.gameIpAddress !== null)
      ? CMsgIPAddress.fromPartial(object.gameIpAddress)
      : undefined;
    message.controllerConnectionType = object.controllerConnectionType ?? 0;
    message.gameOsPlatform = object.gameOsPlatform ?? 0;
    message.gameBuildId = object.gameBuildId ?? 0;
    message.compatToolId = object.compatToolId ?? 0;
    message.compatToolCmd = object.compatToolCmd ?? "";
    message.compatToolBuildId = object.compatToolBuildId ?? 0;
    message.betaName = object.betaName ?? "";
    message.dlcContext = object.dlcContext ?? 0;
    message.processIdList = object.processIdList?.map((e) => CMsgClientGamesPlayed_ProcessInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgGSApprove(): CMsgGSApprove {
  return { steamId: "0", ownerSteamId: "0" };
}

export const CMsgGSApprove = {
  encode(message: CMsgGSApprove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.ownerSteamId !== "0") {
      writer.uint32(17).fixed64(message.ownerSteamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSApprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSApprove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.ownerSteamId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSApprove {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      ownerSteamId: isSet(object.ownerSteamId) ? String(object.ownerSteamId) : "0",
    };
  },

  toJSON(message: CMsgGSApprove): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.ownerSteamId !== undefined && (obj.ownerSteamId = message.ownerSteamId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSApprove>, I>>(base?: I): CMsgGSApprove {
    return CMsgGSApprove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSApprove>, I>>(object: I): CMsgGSApprove {
    const message = createBaseCMsgGSApprove();
    message.steamId = object.steamId ?? "0";
    message.ownerSteamId = object.ownerSteamId ?? "0";
    return message;
  },
};

function createBaseCMsgGSDeny(): CMsgGSDeny {
  return { steamId: "0", edenyReason: 0, denyString: "" };
}

export const CMsgGSDeny = {
  encode(message: CMsgGSDeny, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.edenyReason !== 0) {
      writer.uint32(16).int32(message.edenyReason);
    }
    if (message.denyString !== "") {
      writer.uint32(26).string(message.denyString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSDeny {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSDeny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.edenyReason = reader.int32();
          break;
        case 3:
          message.denyString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSDeny {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      edenyReason: isSet(object.edenyReason) ? Number(object.edenyReason) : 0,
      denyString: isSet(object.denyString) ? String(object.denyString) : "",
    };
  },

  toJSON(message: CMsgGSDeny): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.edenyReason !== undefined && (obj.edenyReason = Math.round(message.edenyReason));
    message.denyString !== undefined && (obj.denyString = message.denyString);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSDeny>, I>>(base?: I): CMsgGSDeny {
    return CMsgGSDeny.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSDeny>, I>>(object: I): CMsgGSDeny {
    const message = createBaseCMsgGSDeny();
    message.steamId = object.steamId ?? "0";
    message.edenyReason = object.edenyReason ?? 0;
    message.denyString = object.denyString ?? "";
    return message;
  },
};

function createBaseCMsgGSKick(): CMsgGSKick {
  return { steamId: "0", edenyReason: 0 };
}

export const CMsgGSKick = {
  encode(message: CMsgGSKick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamId !== "0") {
      writer.uint32(9).fixed64(message.steamId);
    }
    if (message.edenyReason !== 0) {
      writer.uint32(16).int32(message.edenyReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGSKick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGSKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamId = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.edenyReason = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGSKick {
    return {
      steamId: isSet(object.steamId) ? String(object.steamId) : "0",
      edenyReason: isSet(object.edenyReason) ? Number(object.edenyReason) : 0,
    };
  },

  toJSON(message: CMsgGSKick): unknown {
    const obj: any = {};
    message.steamId !== undefined && (obj.steamId = message.steamId);
    message.edenyReason !== undefined && (obj.edenyReason = Math.round(message.edenyReason));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGSKick>, I>>(base?: I): CMsgGSKick {
    return CMsgGSKick.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGSKick>, I>>(object: I): CMsgGSKick {
    const message = createBaseCMsgGSKick();
    message.steamId = object.steamId ?? "0";
    message.edenyReason = object.edenyReason ?? 0;
    return message;
  },
};

function createBaseCMsgClientAuthList(): CMsgClientAuthList {
  return { tokensLeft: 0, lastRequestSeq: 0, lastRequestSeqFromServer: 0, tickets: [], appIds: [], messageSequence: 0 };
}

export const CMsgClientAuthList = {
  encode(message: CMsgClientAuthList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokensLeft !== 0) {
      writer.uint32(8).uint32(message.tokensLeft);
    }
    if (message.lastRequestSeq !== 0) {
      writer.uint32(16).uint32(message.lastRequestSeq);
    }
    if (message.lastRequestSeqFromServer !== 0) {
      writer.uint32(24).uint32(message.lastRequestSeqFromServer);
    }
    for (const v of message.tickets) {
      CMsgAuthTicket.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.appIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.messageSequence !== 0) {
      writer.uint32(48).uint32(message.messageSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAuthList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAuthList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensLeft = reader.uint32();
          break;
        case 2:
          message.lastRequestSeq = reader.uint32();
          break;
        case 3:
          message.lastRequestSeqFromServer = reader.uint32();
          break;
        case 4:
          message.tickets.push(CMsgAuthTicket.decode(reader, reader.uint32()));
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appIds.push(reader.uint32());
            }
          } else {
            message.appIds.push(reader.uint32());
          }
          break;
        case 6:
          message.messageSequence = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAuthList {
    return {
      tokensLeft: isSet(object.tokensLeft) ? Number(object.tokensLeft) : 0,
      lastRequestSeq: isSet(object.lastRequestSeq) ? Number(object.lastRequestSeq) : 0,
      lastRequestSeqFromServer: isSet(object.lastRequestSeqFromServer) ? Number(object.lastRequestSeqFromServer) : 0,
      tickets: Array.isArray(object?.tickets) ? object.tickets.map((e: any) => CMsgAuthTicket.fromJSON(e)) : [],
      appIds: Array.isArray(object?.appIds) ? object.appIds.map((e: any) => Number(e)) : [],
      messageSequence: isSet(object.messageSequence) ? Number(object.messageSequence) : 0,
    };
  },

  toJSON(message: CMsgClientAuthList): unknown {
    const obj: any = {};
    message.tokensLeft !== undefined && (obj.tokensLeft = Math.round(message.tokensLeft));
    message.lastRequestSeq !== undefined && (obj.lastRequestSeq = Math.round(message.lastRequestSeq));
    message.lastRequestSeqFromServer !== undefined &&
      (obj.lastRequestSeqFromServer = Math.round(message.lastRequestSeqFromServer));
    if (message.tickets) {
      obj.tickets = message.tickets.map((e) => e ? CMsgAuthTicket.toJSON(e) : undefined);
    } else {
      obj.tickets = [];
    }
    if (message.appIds) {
      obj.appIds = message.appIds.map((e) => Math.round(e));
    } else {
      obj.appIds = [];
    }
    message.messageSequence !== undefined && (obj.messageSequence = Math.round(message.messageSequence));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAuthList>, I>>(base?: I): CMsgClientAuthList {
    return CMsgClientAuthList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAuthList>, I>>(object: I): CMsgClientAuthList {
    const message = createBaseCMsgClientAuthList();
    message.tokensLeft = object.tokensLeft ?? 0;
    message.lastRequestSeq = object.lastRequestSeq ?? 0;
    message.lastRequestSeqFromServer = object.lastRequestSeqFromServer ?? 0;
    message.tickets = object.tickets?.map((e) => CMsgAuthTicket.fromPartial(e)) || [];
    message.appIds = object.appIds?.map((e) => e) || [];
    message.messageSequence = object.messageSequence ?? 0;
    return message;
  },
};

function createBaseCMsgClientAuthListAck(): CMsgClientAuthListAck {
  return { ticketCrc: [], appIds: [], messageSequence: 0 };
}

export const CMsgClientAuthListAck = {
  encode(message: CMsgClientAuthListAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ticketCrc) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.appIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.messageSequence !== 0) {
      writer.uint32(24).uint32(message.messageSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAuthListAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAuthListAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ticketCrc.push(reader.uint32());
            }
          } else {
            message.ticketCrc.push(reader.uint32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.appIds.push(reader.uint32());
            }
          } else {
            message.appIds.push(reader.uint32());
          }
          break;
        case 3:
          message.messageSequence = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAuthListAck {
    return {
      ticketCrc: Array.isArray(object?.ticketCrc) ? object.ticketCrc.map((e: any) => Number(e)) : [],
      appIds: Array.isArray(object?.appIds) ? object.appIds.map((e: any) => Number(e)) : [],
      messageSequence: isSet(object.messageSequence) ? Number(object.messageSequence) : 0,
    };
  },

  toJSON(message: CMsgClientAuthListAck): unknown {
    const obj: any = {};
    if (message.ticketCrc) {
      obj.ticketCrc = message.ticketCrc.map((e) => Math.round(e));
    } else {
      obj.ticketCrc = [];
    }
    if (message.appIds) {
      obj.appIds = message.appIds.map((e) => Math.round(e));
    } else {
      obj.appIds = [];
    }
    message.messageSequence !== undefined && (obj.messageSequence = Math.round(message.messageSequence));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAuthListAck>, I>>(base?: I): CMsgClientAuthListAck {
    return CMsgClientAuthListAck.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAuthListAck>, I>>(object: I): CMsgClientAuthListAck {
    const message = createBaseCMsgClientAuthListAck();
    message.ticketCrc = object.ticketCrc?.map((e) => e) || [];
    message.appIds = object.appIds?.map((e) => e) || [];
    message.messageSequence = object.messageSequence ?? 0;
    return message;
  },
};

function createBaseCMsgClientLicenseList(): CMsgClientLicenseList {
  return { eresult: 0, licenses: [] };
}

export const CMsgClientLicenseList = {
  encode(message: CMsgClientLicenseList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    for (const v of message.licenses) {
      CMsgClientLicenseList_License.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLicenseList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLicenseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.licenses.push(CMsgClientLicenseList_License.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLicenseList {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      licenses: Array.isArray(object?.licenses)
        ? object.licenses.map((e: any) => CMsgClientLicenseList_License.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientLicenseList): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    if (message.licenses) {
      obj.licenses = message.licenses.map((e) => e ? CMsgClientLicenseList_License.toJSON(e) : undefined);
    } else {
      obj.licenses = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLicenseList>, I>>(base?: I): CMsgClientLicenseList {
    return CMsgClientLicenseList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLicenseList>, I>>(object: I): CMsgClientLicenseList {
    const message = createBaseCMsgClientLicenseList();
    message.eresult = object.eresult ?? 0;
    message.licenses = object.licenses?.map((e) => CMsgClientLicenseList_License.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientLicenseList_License(): CMsgClientLicenseList_License {
  return {
    packageId: 0,
    timeCreated: 0,
    timeNextProcess: 0,
    minuteLimit: 0,
    minutesUsed: 0,
    paymentMethod: 0,
    flags: 0,
    purchaseCountryCode: "",
    licenseType: 0,
    territoryCode: 0,
    changeNumber: 0,
    ownerId: 0,
    initialPeriod: 0,
    initialTimeUnit: 0,
    renewalPeriod: 0,
    renewalTimeUnit: 0,
    accessToken: "0",
    masterPackageId: 0,
  };
}

export const CMsgClientLicenseList_License = {
  encode(message: CMsgClientLicenseList_License, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageId !== 0) {
      writer.uint32(8).uint32(message.packageId);
    }
    if (message.timeCreated !== 0) {
      writer.uint32(21).fixed32(message.timeCreated);
    }
    if (message.timeNextProcess !== 0) {
      writer.uint32(29).fixed32(message.timeNextProcess);
    }
    if (message.minuteLimit !== 0) {
      writer.uint32(32).int32(message.minuteLimit);
    }
    if (message.minutesUsed !== 0) {
      writer.uint32(40).int32(message.minutesUsed);
    }
    if (message.paymentMethod !== 0) {
      writer.uint32(48).uint32(message.paymentMethod);
    }
    if (message.flags !== 0) {
      writer.uint32(56).uint32(message.flags);
    }
    if (message.purchaseCountryCode !== "") {
      writer.uint32(66).string(message.purchaseCountryCode);
    }
    if (message.licenseType !== 0) {
      writer.uint32(72).uint32(message.licenseType);
    }
    if (message.territoryCode !== 0) {
      writer.uint32(80).int32(message.territoryCode);
    }
    if (message.changeNumber !== 0) {
      writer.uint32(88).int32(message.changeNumber);
    }
    if (message.ownerId !== 0) {
      writer.uint32(96).uint32(message.ownerId);
    }
    if (message.initialPeriod !== 0) {
      writer.uint32(104).uint32(message.initialPeriod);
    }
    if (message.initialTimeUnit !== 0) {
      writer.uint32(112).uint32(message.initialTimeUnit);
    }
    if (message.renewalPeriod !== 0) {
      writer.uint32(120).uint32(message.renewalPeriod);
    }
    if (message.renewalTimeUnit !== 0) {
      writer.uint32(128).uint32(message.renewalTimeUnit);
    }
    if (message.accessToken !== "0") {
      writer.uint32(136).uint64(message.accessToken);
    }
    if (message.masterPackageId !== 0) {
      writer.uint32(144).uint32(message.masterPackageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientLicenseList_License {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientLicenseList_License();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packageId = reader.uint32();
          break;
        case 2:
          message.timeCreated = reader.fixed32();
          break;
        case 3:
          message.timeNextProcess = reader.fixed32();
          break;
        case 4:
          message.minuteLimit = reader.int32();
          break;
        case 5:
          message.minutesUsed = reader.int32();
          break;
        case 6:
          message.paymentMethod = reader.uint32();
          break;
        case 7:
          message.flags = reader.uint32();
          break;
        case 8:
          message.purchaseCountryCode = reader.string();
          break;
        case 9:
          message.licenseType = reader.uint32();
          break;
        case 10:
          message.territoryCode = reader.int32();
          break;
        case 11:
          message.changeNumber = reader.int32();
          break;
        case 12:
          message.ownerId = reader.uint32();
          break;
        case 13:
          message.initialPeriod = reader.uint32();
          break;
        case 14:
          message.initialTimeUnit = reader.uint32();
          break;
        case 15:
          message.renewalPeriod = reader.uint32();
          break;
        case 16:
          message.renewalTimeUnit = reader.uint32();
          break;
        case 17:
          message.accessToken = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.masterPackageId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientLicenseList_License {
    return {
      packageId: isSet(object.packageId) ? Number(object.packageId) : 0,
      timeCreated: isSet(object.timeCreated) ? Number(object.timeCreated) : 0,
      timeNextProcess: isSet(object.timeNextProcess) ? Number(object.timeNextProcess) : 0,
      minuteLimit: isSet(object.minuteLimit) ? Number(object.minuteLimit) : 0,
      minutesUsed: isSet(object.minutesUsed) ? Number(object.minutesUsed) : 0,
      paymentMethod: isSet(object.paymentMethod) ? Number(object.paymentMethod) : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      purchaseCountryCode: isSet(object.purchaseCountryCode) ? String(object.purchaseCountryCode) : "",
      licenseType: isSet(object.licenseType) ? Number(object.licenseType) : 0,
      territoryCode: isSet(object.territoryCode) ? Number(object.territoryCode) : 0,
      changeNumber: isSet(object.changeNumber) ? Number(object.changeNumber) : 0,
      ownerId: isSet(object.ownerId) ? Number(object.ownerId) : 0,
      initialPeriod: isSet(object.initialPeriod) ? Number(object.initialPeriod) : 0,
      initialTimeUnit: isSet(object.initialTimeUnit) ? Number(object.initialTimeUnit) : 0,
      renewalPeriod: isSet(object.renewalPeriod) ? Number(object.renewalPeriod) : 0,
      renewalTimeUnit: isSet(object.renewalTimeUnit) ? Number(object.renewalTimeUnit) : 0,
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "0",
      masterPackageId: isSet(object.masterPackageId) ? Number(object.masterPackageId) : 0,
    };
  },

  toJSON(message: CMsgClientLicenseList_License): unknown {
    const obj: any = {};
    message.packageId !== undefined && (obj.packageId = Math.round(message.packageId));
    message.timeCreated !== undefined && (obj.timeCreated = Math.round(message.timeCreated));
    message.timeNextProcess !== undefined && (obj.timeNextProcess = Math.round(message.timeNextProcess));
    message.minuteLimit !== undefined && (obj.minuteLimit = Math.round(message.minuteLimit));
    message.minutesUsed !== undefined && (obj.minutesUsed = Math.round(message.minutesUsed));
    message.paymentMethod !== undefined && (obj.paymentMethod = Math.round(message.paymentMethod));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.purchaseCountryCode !== undefined && (obj.purchaseCountryCode = message.purchaseCountryCode);
    message.licenseType !== undefined && (obj.licenseType = Math.round(message.licenseType));
    message.territoryCode !== undefined && (obj.territoryCode = Math.round(message.territoryCode));
    message.changeNumber !== undefined && (obj.changeNumber = Math.round(message.changeNumber));
    message.ownerId !== undefined && (obj.ownerId = Math.round(message.ownerId));
    message.initialPeriod !== undefined && (obj.initialPeriod = Math.round(message.initialPeriod));
    message.initialTimeUnit !== undefined && (obj.initialTimeUnit = Math.round(message.initialTimeUnit));
    message.renewalPeriod !== undefined && (obj.renewalPeriod = Math.round(message.renewalPeriod));
    message.renewalTimeUnit !== undefined && (obj.renewalTimeUnit = Math.round(message.renewalTimeUnit));
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.masterPackageId !== undefined && (obj.masterPackageId = Math.round(message.masterPackageId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientLicenseList_License>, I>>(base?: I): CMsgClientLicenseList_License {
    return CMsgClientLicenseList_License.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientLicenseList_License>, I>>(
    object: I,
  ): CMsgClientLicenseList_License {
    const message = createBaseCMsgClientLicenseList_License();
    message.packageId = object.packageId ?? 0;
    message.timeCreated = object.timeCreated ?? 0;
    message.timeNextProcess = object.timeNextProcess ?? 0;
    message.minuteLimit = object.minuteLimit ?? 0;
    message.minutesUsed = object.minutesUsed ?? 0;
    message.paymentMethod = object.paymentMethod ?? 0;
    message.flags = object.flags ?? 0;
    message.purchaseCountryCode = object.purchaseCountryCode ?? "";
    message.licenseType = object.licenseType ?? 0;
    message.territoryCode = object.territoryCode ?? 0;
    message.changeNumber = object.changeNumber ?? 0;
    message.ownerId = object.ownerId ?? 0;
    message.initialPeriod = object.initialPeriod ?? 0;
    message.initialTimeUnit = object.initialTimeUnit ?? 0;
    message.renewalPeriod = object.renewalPeriod ?? 0;
    message.renewalTimeUnit = object.renewalTimeUnit ?? 0;
    message.accessToken = object.accessToken ?? "0";
    message.masterPackageId = object.masterPackageId ?? 0;
    return message;
  },
};

function createBaseCMsgClientIsLimitedAccount(): CMsgClientIsLimitedAccount {
  return {
    bisLimitedAccount: false,
    bisCommunityBanned: false,
    bisLockedAccount: false,
    bisLimitedAccountAllowedToInviteFriends: false,
  };
}

export const CMsgClientIsLimitedAccount = {
  encode(message: CMsgClientIsLimitedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bisLimitedAccount === true) {
      writer.uint32(8).bool(message.bisLimitedAccount);
    }
    if (message.bisCommunityBanned === true) {
      writer.uint32(16).bool(message.bisCommunityBanned);
    }
    if (message.bisLockedAccount === true) {
      writer.uint32(24).bool(message.bisLockedAccount);
    }
    if (message.bisLimitedAccountAllowedToInviteFriends === true) {
      writer.uint32(32).bool(message.bisLimitedAccountAllowedToInviteFriends);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientIsLimitedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientIsLimitedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bisLimitedAccount = reader.bool();
          break;
        case 2:
          message.bisCommunityBanned = reader.bool();
          break;
        case 3:
          message.bisLockedAccount = reader.bool();
          break;
        case 4:
          message.bisLimitedAccountAllowedToInviteFriends = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientIsLimitedAccount {
    return {
      bisLimitedAccount: isSet(object.bisLimitedAccount) ? Boolean(object.bisLimitedAccount) : false,
      bisCommunityBanned: isSet(object.bisCommunityBanned) ? Boolean(object.bisCommunityBanned) : false,
      bisLockedAccount: isSet(object.bisLockedAccount) ? Boolean(object.bisLockedAccount) : false,
      bisLimitedAccountAllowedToInviteFriends: isSet(object.bisLimitedAccountAllowedToInviteFriends)
        ? Boolean(object.bisLimitedAccountAllowedToInviteFriends)
        : false,
    };
  },

  toJSON(message: CMsgClientIsLimitedAccount): unknown {
    const obj: any = {};
    message.bisLimitedAccount !== undefined && (obj.bisLimitedAccount = message.bisLimitedAccount);
    message.bisCommunityBanned !== undefined && (obj.bisCommunityBanned = message.bisCommunityBanned);
    message.bisLockedAccount !== undefined && (obj.bisLockedAccount = message.bisLockedAccount);
    message.bisLimitedAccountAllowedToInviteFriends !== undefined &&
      (obj.bisLimitedAccountAllowedToInviteFriends = message.bisLimitedAccountAllowedToInviteFriends);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientIsLimitedAccount>, I>>(base?: I): CMsgClientIsLimitedAccount {
    return CMsgClientIsLimitedAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientIsLimitedAccount>, I>>(object: I): CMsgClientIsLimitedAccount {
    const message = createBaseCMsgClientIsLimitedAccount();
    message.bisLimitedAccount = object.bisLimitedAccount ?? false;
    message.bisCommunityBanned = object.bisCommunityBanned ?? false;
    message.bisLockedAccount = object.bisLockedAccount ?? false;
    message.bisLimitedAccountAllowedToInviteFriends = object.bisLimitedAccountAllowedToInviteFriends ?? false;
    return message;
  },
};

function createBaseCMsgClientRequestedClientStats(): CMsgClientRequestedClientStats {
  return { statsToSend: [] };
}

export const CMsgClientRequestedClientStats = {
  encode(message: CMsgClientRequestedClientStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statsToSend) {
      CMsgClientRequestedClientStats_StatsToSend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestedClientStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestedClientStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statsToSend.push(CMsgClientRequestedClientStats_StatsToSend.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestedClientStats {
    return {
      statsToSend: Array.isArray(object?.statsToSend)
        ? object.statsToSend.map((e: any) => CMsgClientRequestedClientStats_StatsToSend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientRequestedClientStats): unknown {
    const obj: any = {};
    if (message.statsToSend) {
      obj.statsToSend = message.statsToSend.map((e) =>
        e ? CMsgClientRequestedClientStats_StatsToSend.toJSON(e) : undefined
      );
    } else {
      obj.statsToSend = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestedClientStats>, I>>(base?: I): CMsgClientRequestedClientStats {
    return CMsgClientRequestedClientStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestedClientStats>, I>>(
    object: I,
  ): CMsgClientRequestedClientStats {
    const message = createBaseCMsgClientRequestedClientStats();
    message.statsToSend = object.statsToSend?.map((e) => CMsgClientRequestedClientStats_StatsToSend.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseCMsgClientRequestedClientStats_StatsToSend(): CMsgClientRequestedClientStats_StatsToSend {
  return { clientStat: 0, statAggregateMethod: 0 };
}

export const CMsgClientRequestedClientStats_StatsToSend = {
  encode(message: CMsgClientRequestedClientStats_StatsToSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientStat !== 0) {
      writer.uint32(8).uint32(message.clientStat);
    }
    if (message.statAggregateMethod !== 0) {
      writer.uint32(16).uint32(message.statAggregateMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestedClientStats_StatsToSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestedClientStats_StatsToSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStat = reader.uint32();
          break;
        case 2:
          message.statAggregateMethod = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestedClientStats_StatsToSend {
    return {
      clientStat: isSet(object.clientStat) ? Number(object.clientStat) : 0,
      statAggregateMethod: isSet(object.statAggregateMethod) ? Number(object.statAggregateMethod) : 0,
    };
  },

  toJSON(message: CMsgClientRequestedClientStats_StatsToSend): unknown {
    const obj: any = {};
    message.clientStat !== undefined && (obj.clientStat = Math.round(message.clientStat));
    message.statAggregateMethod !== undefined && (obj.statAggregateMethod = Math.round(message.statAggregateMethod));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestedClientStats_StatsToSend>, I>>(
    base?: I,
  ): CMsgClientRequestedClientStats_StatsToSend {
    return CMsgClientRequestedClientStats_StatsToSend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestedClientStats_StatsToSend>, I>>(
    object: I,
  ): CMsgClientRequestedClientStats_StatsToSend {
    const message = createBaseCMsgClientRequestedClientStats_StatsToSend();
    message.clientStat = object.clientStat ?? 0;
    message.statAggregateMethod = object.statAggregateMethod ?? 0;
    return message;
  },
};

function createBaseCMsgClientStat2(): CMsgClientStat2 {
  return { statDetail: [] };
}

export const CMsgClientStat2 = {
  encode(message: CMsgClientStat2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.statDetail) {
      CMsgClientStat2_StatDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStat2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStat2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statDetail.push(CMsgClientStat2_StatDetail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStat2 {
    return {
      statDetail: Array.isArray(object?.statDetail)
        ? object.statDetail.map((e: any) => CMsgClientStat2_StatDetail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientStat2): unknown {
    const obj: any = {};
    if (message.statDetail) {
      obj.statDetail = message.statDetail.map((e) => e ? CMsgClientStat2_StatDetail.toJSON(e) : undefined);
    } else {
      obj.statDetail = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStat2>, I>>(base?: I): CMsgClientStat2 {
    return CMsgClientStat2.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStat2>, I>>(object: I): CMsgClientStat2 {
    const message = createBaseCMsgClientStat2();
    message.statDetail = object.statDetail?.map((e) => CMsgClientStat2_StatDetail.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientStat2_StatDetail(): CMsgClientStat2_StatDetail {
  return { clientStat: 0, llValue: "0", timeOfDay: 0, cellId: 0, depotId: 0, appId: 0 };
}

export const CMsgClientStat2_StatDetail = {
  encode(message: CMsgClientStat2_StatDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientStat !== 0) {
      writer.uint32(8).uint32(message.clientStat);
    }
    if (message.llValue !== "0") {
      writer.uint32(16).int64(message.llValue);
    }
    if (message.timeOfDay !== 0) {
      writer.uint32(24).uint32(message.timeOfDay);
    }
    if (message.cellId !== 0) {
      writer.uint32(32).uint32(message.cellId);
    }
    if (message.depotId !== 0) {
      writer.uint32(40).uint32(message.depotId);
    }
    if (message.appId !== 0) {
      writer.uint32(48).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientStat2_StatDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientStat2_StatDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStat = reader.uint32();
          break;
        case 2:
          message.llValue = longToString(reader.int64() as Long);
          break;
        case 3:
          message.timeOfDay = reader.uint32();
          break;
        case 4:
          message.cellId = reader.uint32();
          break;
        case 5:
          message.depotId = reader.uint32();
          break;
        case 6:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientStat2_StatDetail {
    return {
      clientStat: isSet(object.clientStat) ? Number(object.clientStat) : 0,
      llValue: isSet(object.llValue) ? String(object.llValue) : "0",
      timeOfDay: isSet(object.timeOfDay) ? Number(object.timeOfDay) : 0,
      cellId: isSet(object.cellId) ? Number(object.cellId) : 0,
      depotId: isSet(object.depotId) ? Number(object.depotId) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientStat2_StatDetail): unknown {
    const obj: any = {};
    message.clientStat !== undefined && (obj.clientStat = Math.round(message.clientStat));
    message.llValue !== undefined && (obj.llValue = message.llValue);
    message.timeOfDay !== undefined && (obj.timeOfDay = Math.round(message.timeOfDay));
    message.cellId !== undefined && (obj.cellId = Math.round(message.cellId));
    message.depotId !== undefined && (obj.depotId = Math.round(message.depotId));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientStat2_StatDetail>, I>>(base?: I): CMsgClientStat2_StatDetail {
    return CMsgClientStat2_StatDetail.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientStat2_StatDetail>, I>>(object: I): CMsgClientStat2_StatDetail {
    const message = createBaseCMsgClientStat2_StatDetail();
    message.clientStat = object.clientStat ?? 0;
    message.llValue = object.llValue ?? "0";
    message.timeOfDay = object.timeOfDay ?? 0;
    message.cellId = object.cellId ?? 0;
    message.depotId = object.depotId ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientInviteToGame(): CMsgClientInviteToGame {
  return { steamIdDest: "0", steamIdSrc: "0", connectString: "", remotePlay: "" };
}

export const CMsgClientInviteToGame = {
  encode(message: CMsgClientInviteToGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdDest !== "0") {
      writer.uint32(9).fixed64(message.steamIdDest);
    }
    if (message.steamIdSrc !== "0") {
      writer.uint32(17).fixed64(message.steamIdSrc);
    }
    if (message.connectString !== "") {
      writer.uint32(26).string(message.connectString);
    }
    if (message.remotePlay !== "") {
      writer.uint32(34).string(message.remotePlay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientInviteToGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientInviteToGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdDest = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamIdSrc = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.connectString = reader.string();
          break;
        case 4:
          message.remotePlay = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientInviteToGame {
    return {
      steamIdDest: isSet(object.steamIdDest) ? String(object.steamIdDest) : "0",
      steamIdSrc: isSet(object.steamIdSrc) ? String(object.steamIdSrc) : "0",
      connectString: isSet(object.connectString) ? String(object.connectString) : "",
      remotePlay: isSet(object.remotePlay) ? String(object.remotePlay) : "",
    };
  },

  toJSON(message: CMsgClientInviteToGame): unknown {
    const obj: any = {};
    message.steamIdDest !== undefined && (obj.steamIdDest = message.steamIdDest);
    message.steamIdSrc !== undefined && (obj.steamIdSrc = message.steamIdSrc);
    message.connectString !== undefined && (obj.connectString = message.connectString);
    message.remotePlay !== undefined && (obj.remotePlay = message.remotePlay);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientInviteToGame>, I>>(base?: I): CMsgClientInviteToGame {
    return CMsgClientInviteToGame.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientInviteToGame>, I>>(object: I): CMsgClientInviteToGame {
    const message = createBaseCMsgClientInviteToGame();
    message.steamIdDest = object.steamIdDest ?? "0";
    message.steamIdSrc = object.steamIdSrc ?? "0";
    message.connectString = object.connectString ?? "";
    message.remotePlay = object.remotePlay ?? "";
    return message;
  },
};

function createBaseCMsgClientChatInvite(): CMsgClientChatInvite {
  return {
    steamIdInvited: "0",
    steamIdChat: "0",
    steamIdPatron: "0",
    chatroomType: 0,
    steamIdFriendChat: "0",
    chatName: "",
    gameId: "0",
  };
}

export const CMsgClientChatInvite = {
  encode(message: CMsgClientChatInvite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamIdInvited !== "0") {
      writer.uint32(9).fixed64(message.steamIdInvited);
    }
    if (message.steamIdChat !== "0") {
      writer.uint32(17).fixed64(message.steamIdChat);
    }
    if (message.steamIdPatron !== "0") {
      writer.uint32(25).fixed64(message.steamIdPatron);
    }
    if (message.chatroomType !== 0) {
      writer.uint32(32).int32(message.chatroomType);
    }
    if (message.steamIdFriendChat !== "0") {
      writer.uint32(41).fixed64(message.steamIdFriendChat);
    }
    if (message.chatName !== "") {
      writer.uint32(50).string(message.chatName);
    }
    if (message.gameId !== "0") {
      writer.uint32(57).fixed64(message.gameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientChatInvite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientChatInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamIdInvited = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.steamIdChat = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.steamIdPatron = longToString(reader.fixed64() as Long);
          break;
        case 4:
          message.chatroomType = reader.int32();
          break;
        case 5:
          message.steamIdFriendChat = longToString(reader.fixed64() as Long);
          break;
        case 6:
          message.chatName = reader.string();
          break;
        case 7:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientChatInvite {
    return {
      steamIdInvited: isSet(object.steamIdInvited) ? String(object.steamIdInvited) : "0",
      steamIdChat: isSet(object.steamIdChat) ? String(object.steamIdChat) : "0",
      steamIdPatron: isSet(object.steamIdPatron) ? String(object.steamIdPatron) : "0",
      chatroomType: isSet(object.chatroomType) ? Number(object.chatroomType) : 0,
      steamIdFriendChat: isSet(object.steamIdFriendChat) ? String(object.steamIdFriendChat) : "0",
      chatName: isSet(object.chatName) ? String(object.chatName) : "",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
    };
  },

  toJSON(message: CMsgClientChatInvite): unknown {
    const obj: any = {};
    message.steamIdInvited !== undefined && (obj.steamIdInvited = message.steamIdInvited);
    message.steamIdChat !== undefined && (obj.steamIdChat = message.steamIdChat);
    message.steamIdPatron !== undefined && (obj.steamIdPatron = message.steamIdPatron);
    message.chatroomType !== undefined && (obj.chatroomType = Math.round(message.chatroomType));
    message.steamIdFriendChat !== undefined && (obj.steamIdFriendChat = message.steamIdFriendChat);
    message.chatName !== undefined && (obj.chatName = message.chatName);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientChatInvite>, I>>(base?: I): CMsgClientChatInvite {
    return CMsgClientChatInvite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientChatInvite>, I>>(object: I): CMsgClientChatInvite {
    const message = createBaseCMsgClientChatInvite();
    message.steamIdInvited = object.steamIdInvited ?? "0";
    message.steamIdChat = object.steamIdChat ?? "0";
    message.steamIdPatron = object.steamIdPatron ?? "0";
    message.chatroomType = object.chatroomType ?? 0;
    message.steamIdFriendChat = object.steamIdFriendChat ?? "0";
    message.chatName = object.chatName ?? "";
    message.gameId = object.gameId ?? "0";
    return message;
  },
};

function createBaseCMsgClientConnectionStats(): CMsgClientConnectionStats {
  return { statsLogon: undefined, statsVconn: undefined };
}

export const CMsgClientConnectionStats = {
  encode(message: CMsgClientConnectionStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statsLogon !== undefined) {
      CMsgClientConnectionStats_StatsLogon.encode(message.statsLogon, writer.uint32(10).fork()).ldelim();
    }
    if (message.statsVconn !== undefined) {
      CMsgClientConnectionStats_StatsVConn.encode(message.statsVconn, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientConnectionStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientConnectionStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statsLogon = CMsgClientConnectionStats_StatsLogon.decode(reader, reader.uint32());
          break;
        case 2:
          message.statsVconn = CMsgClientConnectionStats_StatsVConn.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientConnectionStats {
    return {
      statsLogon: isSet(object.statsLogon)
        ? CMsgClientConnectionStats_StatsLogon.fromJSON(object.statsLogon)
        : undefined,
      statsVconn: isSet(object.statsVconn)
        ? CMsgClientConnectionStats_StatsVConn.fromJSON(object.statsVconn)
        : undefined,
    };
  },

  toJSON(message: CMsgClientConnectionStats): unknown {
    const obj: any = {};
    message.statsLogon !== undefined &&
      (obj.statsLogon = message.statsLogon
        ? CMsgClientConnectionStats_StatsLogon.toJSON(message.statsLogon)
        : undefined);
    message.statsVconn !== undefined &&
      (obj.statsVconn = message.statsVconn
        ? CMsgClientConnectionStats_StatsVConn.toJSON(message.statsVconn)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientConnectionStats>, I>>(base?: I): CMsgClientConnectionStats {
    return CMsgClientConnectionStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientConnectionStats>, I>>(object: I): CMsgClientConnectionStats {
    const message = createBaseCMsgClientConnectionStats();
    message.statsLogon = (object.statsLogon !== undefined && object.statsLogon !== null)
      ? CMsgClientConnectionStats_StatsLogon.fromPartial(object.statsLogon)
      : undefined;
    message.statsVconn = (object.statsVconn !== undefined && object.statsVconn !== null)
      ? CMsgClientConnectionStats_StatsVConn.fromPartial(object.statsVconn)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientConnectionStats_StatsLogon(): CMsgClientConnectionStats_StatsLogon {
  return {
    connectAttempts: 0,
    connectSuccesses: 0,
    connectFailures: 0,
    connectionsDropped: 0,
    secondsRunning: 0,
    msecTologonthistime: 0,
    countBadCms: 0,
    noUdpConnectivity: false,
    noTcpConnectivity: false,
    noWebsocket443Connectivity: false,
    noWebsocketNon443Connectivity: false,
  };
}

export const CMsgClientConnectionStats_StatsLogon = {
  encode(message: CMsgClientConnectionStats_StatsLogon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectAttempts !== 0) {
      writer.uint32(8).int32(message.connectAttempts);
    }
    if (message.connectSuccesses !== 0) {
      writer.uint32(16).int32(message.connectSuccesses);
    }
    if (message.connectFailures !== 0) {
      writer.uint32(24).int32(message.connectFailures);
    }
    if (message.connectionsDropped !== 0) {
      writer.uint32(32).int32(message.connectionsDropped);
    }
    if (message.secondsRunning !== 0) {
      writer.uint32(40).uint32(message.secondsRunning);
    }
    if (message.msecTologonthistime !== 0) {
      writer.uint32(48).uint32(message.msecTologonthistime);
    }
    if (message.countBadCms !== 0) {
      writer.uint32(56).uint32(message.countBadCms);
    }
    if (message.noUdpConnectivity === true) {
      writer.uint32(64).bool(message.noUdpConnectivity);
    }
    if (message.noTcpConnectivity === true) {
      writer.uint32(72).bool(message.noTcpConnectivity);
    }
    if (message.noWebsocket443Connectivity === true) {
      writer.uint32(80).bool(message.noWebsocket443Connectivity);
    }
    if (message.noWebsocketNon443Connectivity === true) {
      writer.uint32(88).bool(message.noWebsocketNon443Connectivity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientConnectionStats_StatsLogon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientConnectionStats_StatsLogon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectAttempts = reader.int32();
          break;
        case 2:
          message.connectSuccesses = reader.int32();
          break;
        case 3:
          message.connectFailures = reader.int32();
          break;
        case 4:
          message.connectionsDropped = reader.int32();
          break;
        case 5:
          message.secondsRunning = reader.uint32();
          break;
        case 6:
          message.msecTologonthistime = reader.uint32();
          break;
        case 7:
          message.countBadCms = reader.uint32();
          break;
        case 8:
          message.noUdpConnectivity = reader.bool();
          break;
        case 9:
          message.noTcpConnectivity = reader.bool();
          break;
        case 10:
          message.noWebsocket443Connectivity = reader.bool();
          break;
        case 11:
          message.noWebsocketNon443Connectivity = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientConnectionStats_StatsLogon {
    return {
      connectAttempts: isSet(object.connectAttempts) ? Number(object.connectAttempts) : 0,
      connectSuccesses: isSet(object.connectSuccesses) ? Number(object.connectSuccesses) : 0,
      connectFailures: isSet(object.connectFailures) ? Number(object.connectFailures) : 0,
      connectionsDropped: isSet(object.connectionsDropped) ? Number(object.connectionsDropped) : 0,
      secondsRunning: isSet(object.secondsRunning) ? Number(object.secondsRunning) : 0,
      msecTologonthistime: isSet(object.msecTologonthistime) ? Number(object.msecTologonthistime) : 0,
      countBadCms: isSet(object.countBadCms) ? Number(object.countBadCms) : 0,
      noUdpConnectivity: isSet(object.noUdpConnectivity) ? Boolean(object.noUdpConnectivity) : false,
      noTcpConnectivity: isSet(object.noTcpConnectivity) ? Boolean(object.noTcpConnectivity) : false,
      noWebsocket443Connectivity: isSet(object.noWebsocket443Connectivity)
        ? Boolean(object.noWebsocket443Connectivity)
        : false,
      noWebsocketNon443Connectivity: isSet(object.noWebsocketNon443Connectivity)
        ? Boolean(object.noWebsocketNon443Connectivity)
        : false,
    };
  },

  toJSON(message: CMsgClientConnectionStats_StatsLogon): unknown {
    const obj: any = {};
    message.connectAttempts !== undefined && (obj.connectAttempts = Math.round(message.connectAttempts));
    message.connectSuccesses !== undefined && (obj.connectSuccesses = Math.round(message.connectSuccesses));
    message.connectFailures !== undefined && (obj.connectFailures = Math.round(message.connectFailures));
    message.connectionsDropped !== undefined && (obj.connectionsDropped = Math.round(message.connectionsDropped));
    message.secondsRunning !== undefined && (obj.secondsRunning = Math.round(message.secondsRunning));
    message.msecTologonthistime !== undefined && (obj.msecTologonthistime = Math.round(message.msecTologonthistime));
    message.countBadCms !== undefined && (obj.countBadCms = Math.round(message.countBadCms));
    message.noUdpConnectivity !== undefined && (obj.noUdpConnectivity = message.noUdpConnectivity);
    message.noTcpConnectivity !== undefined && (obj.noTcpConnectivity = message.noTcpConnectivity);
    message.noWebsocket443Connectivity !== undefined &&
      (obj.noWebsocket443Connectivity = message.noWebsocket443Connectivity);
    message.noWebsocketNon443Connectivity !== undefined &&
      (obj.noWebsocketNon443Connectivity = message.noWebsocketNon443Connectivity);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsLogon>, I>>(
    base?: I,
  ): CMsgClientConnectionStats_StatsLogon {
    return CMsgClientConnectionStats_StatsLogon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsLogon>, I>>(
    object: I,
  ): CMsgClientConnectionStats_StatsLogon {
    const message = createBaseCMsgClientConnectionStats_StatsLogon();
    message.connectAttempts = object.connectAttempts ?? 0;
    message.connectSuccesses = object.connectSuccesses ?? 0;
    message.connectFailures = object.connectFailures ?? 0;
    message.connectionsDropped = object.connectionsDropped ?? 0;
    message.secondsRunning = object.secondsRunning ?? 0;
    message.msecTologonthistime = object.msecTologonthistime ?? 0;
    message.countBadCms = object.countBadCms ?? 0;
    message.noUdpConnectivity = object.noUdpConnectivity ?? false;
    message.noTcpConnectivity = object.noTcpConnectivity ?? false;
    message.noWebsocket443Connectivity = object.noWebsocket443Connectivity ?? false;
    message.noWebsocketNon443Connectivity = object.noWebsocketNon443Connectivity ?? false;
    return message;
  },
};

function createBaseCMsgClientConnectionStats_StatsUDP(): CMsgClientConnectionStats_StatsUDP {
  return { pktsSent: "0", bytesSent: "0", pktsRecv: "0", pktsProcessed: "0", bytesRecv: "0" };
}

export const CMsgClientConnectionStats_StatsUDP = {
  encode(message: CMsgClientConnectionStats_StatsUDP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pktsSent !== "0") {
      writer.uint32(8).uint64(message.pktsSent);
    }
    if (message.bytesSent !== "0") {
      writer.uint32(16).uint64(message.bytesSent);
    }
    if (message.pktsRecv !== "0") {
      writer.uint32(24).uint64(message.pktsRecv);
    }
    if (message.pktsProcessed !== "0") {
      writer.uint32(32).uint64(message.pktsProcessed);
    }
    if (message.bytesRecv !== "0") {
      writer.uint32(40).uint64(message.bytesRecv);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientConnectionStats_StatsUDP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientConnectionStats_StatsUDP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pktsSent = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.bytesSent = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.pktsRecv = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.pktsProcessed = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.bytesRecv = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientConnectionStats_StatsUDP {
    return {
      pktsSent: isSet(object.pktsSent) ? String(object.pktsSent) : "0",
      bytesSent: isSet(object.bytesSent) ? String(object.bytesSent) : "0",
      pktsRecv: isSet(object.pktsRecv) ? String(object.pktsRecv) : "0",
      pktsProcessed: isSet(object.pktsProcessed) ? String(object.pktsProcessed) : "0",
      bytesRecv: isSet(object.bytesRecv) ? String(object.bytesRecv) : "0",
    };
  },

  toJSON(message: CMsgClientConnectionStats_StatsUDP): unknown {
    const obj: any = {};
    message.pktsSent !== undefined && (obj.pktsSent = message.pktsSent);
    message.bytesSent !== undefined && (obj.bytesSent = message.bytesSent);
    message.pktsRecv !== undefined && (obj.pktsRecv = message.pktsRecv);
    message.pktsProcessed !== undefined && (obj.pktsProcessed = message.pktsProcessed);
    message.bytesRecv !== undefined && (obj.bytesRecv = message.bytesRecv);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsUDP>, I>>(
    base?: I,
  ): CMsgClientConnectionStats_StatsUDP {
    return CMsgClientConnectionStats_StatsUDP.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsUDP>, I>>(
    object: I,
  ): CMsgClientConnectionStats_StatsUDP {
    const message = createBaseCMsgClientConnectionStats_StatsUDP();
    message.pktsSent = object.pktsSent ?? "0";
    message.bytesSent = object.bytesSent ?? "0";
    message.pktsRecv = object.pktsRecv ?? "0";
    message.pktsProcessed = object.pktsProcessed ?? "0";
    message.bytesRecv = object.bytesRecv ?? "0";
    return message;
  },
};

function createBaseCMsgClientConnectionStats_StatsVConn(): CMsgClientConnectionStats_StatsVConn {
  return {
    connectionsUdp: 0,
    connectionsTcp: 0,
    statsUdp: undefined,
    pktsAbandoned: "0",
    connReqReceived: "0",
    pktsResent: "0",
    msgsSent: "0",
    msgsSentFailed: "0",
    msgsRecv: "0",
    datagramsSent: "0",
    datagramsRecv: "0",
    badPktsRecv: "0",
    unknownConnPktsRecv: "0",
    missedPktsRecv: "0",
    dupPktsRecv: "0",
    failedConnectChallenges: "0",
    microSecAvgLatency: 0,
    microSecMinLatency: 0,
    microSecMaxLatency: 0,
    memPoolMsgInUse: 0,
  };
}

export const CMsgClientConnectionStats_StatsVConn = {
  encode(message: CMsgClientConnectionStats_StatsVConn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionsUdp !== 0) {
      writer.uint32(8).uint32(message.connectionsUdp);
    }
    if (message.connectionsTcp !== 0) {
      writer.uint32(16).uint32(message.connectionsTcp);
    }
    if (message.statsUdp !== undefined) {
      CMsgClientConnectionStats_StatsUDP.encode(message.statsUdp, writer.uint32(26).fork()).ldelim();
    }
    if (message.pktsAbandoned !== "0") {
      writer.uint32(32).uint64(message.pktsAbandoned);
    }
    if (message.connReqReceived !== "0") {
      writer.uint32(40).uint64(message.connReqReceived);
    }
    if (message.pktsResent !== "0") {
      writer.uint32(48).uint64(message.pktsResent);
    }
    if (message.msgsSent !== "0") {
      writer.uint32(56).uint64(message.msgsSent);
    }
    if (message.msgsSentFailed !== "0") {
      writer.uint32(64).uint64(message.msgsSentFailed);
    }
    if (message.msgsRecv !== "0") {
      writer.uint32(72).uint64(message.msgsRecv);
    }
    if (message.datagramsSent !== "0") {
      writer.uint32(80).uint64(message.datagramsSent);
    }
    if (message.datagramsRecv !== "0") {
      writer.uint32(88).uint64(message.datagramsRecv);
    }
    if (message.badPktsRecv !== "0") {
      writer.uint32(96).uint64(message.badPktsRecv);
    }
    if (message.unknownConnPktsRecv !== "0") {
      writer.uint32(104).uint64(message.unknownConnPktsRecv);
    }
    if (message.missedPktsRecv !== "0") {
      writer.uint32(112).uint64(message.missedPktsRecv);
    }
    if (message.dupPktsRecv !== "0") {
      writer.uint32(120).uint64(message.dupPktsRecv);
    }
    if (message.failedConnectChallenges !== "0") {
      writer.uint32(128).uint64(message.failedConnectChallenges);
    }
    if (message.microSecAvgLatency !== 0) {
      writer.uint32(136).uint32(message.microSecAvgLatency);
    }
    if (message.microSecMinLatency !== 0) {
      writer.uint32(144).uint32(message.microSecMinLatency);
    }
    if (message.microSecMaxLatency !== 0) {
      writer.uint32(152).uint32(message.microSecMaxLatency);
    }
    if (message.memPoolMsgInUse !== 0) {
      writer.uint32(160).uint32(message.memPoolMsgInUse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientConnectionStats_StatsVConn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientConnectionStats_StatsVConn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionsUdp = reader.uint32();
          break;
        case 2:
          message.connectionsTcp = reader.uint32();
          break;
        case 3:
          message.statsUdp = CMsgClientConnectionStats_StatsUDP.decode(reader, reader.uint32());
          break;
        case 4:
          message.pktsAbandoned = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.connReqReceived = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.pktsResent = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.msgsSent = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.msgsSentFailed = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.msgsRecv = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.datagramsSent = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.datagramsRecv = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.badPktsRecv = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.unknownConnPktsRecv = longToString(reader.uint64() as Long);
          break;
        case 14:
          message.missedPktsRecv = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.dupPktsRecv = longToString(reader.uint64() as Long);
          break;
        case 16:
          message.failedConnectChallenges = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.microSecAvgLatency = reader.uint32();
          break;
        case 18:
          message.microSecMinLatency = reader.uint32();
          break;
        case 19:
          message.microSecMaxLatency = reader.uint32();
          break;
        case 20:
          message.memPoolMsgInUse = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientConnectionStats_StatsVConn {
    return {
      connectionsUdp: isSet(object.connectionsUdp) ? Number(object.connectionsUdp) : 0,
      connectionsTcp: isSet(object.connectionsTcp) ? Number(object.connectionsTcp) : 0,
      statsUdp: isSet(object.statsUdp) ? CMsgClientConnectionStats_StatsUDP.fromJSON(object.statsUdp) : undefined,
      pktsAbandoned: isSet(object.pktsAbandoned) ? String(object.pktsAbandoned) : "0",
      connReqReceived: isSet(object.connReqReceived) ? String(object.connReqReceived) : "0",
      pktsResent: isSet(object.pktsResent) ? String(object.pktsResent) : "0",
      msgsSent: isSet(object.msgsSent) ? String(object.msgsSent) : "0",
      msgsSentFailed: isSet(object.msgsSentFailed) ? String(object.msgsSentFailed) : "0",
      msgsRecv: isSet(object.msgsRecv) ? String(object.msgsRecv) : "0",
      datagramsSent: isSet(object.datagramsSent) ? String(object.datagramsSent) : "0",
      datagramsRecv: isSet(object.datagramsRecv) ? String(object.datagramsRecv) : "0",
      badPktsRecv: isSet(object.badPktsRecv) ? String(object.badPktsRecv) : "0",
      unknownConnPktsRecv: isSet(object.unknownConnPktsRecv) ? String(object.unknownConnPktsRecv) : "0",
      missedPktsRecv: isSet(object.missedPktsRecv) ? String(object.missedPktsRecv) : "0",
      dupPktsRecv: isSet(object.dupPktsRecv) ? String(object.dupPktsRecv) : "0",
      failedConnectChallenges: isSet(object.failedConnectChallenges) ? String(object.failedConnectChallenges) : "0",
      microSecAvgLatency: isSet(object.microSecAvgLatency) ? Number(object.microSecAvgLatency) : 0,
      microSecMinLatency: isSet(object.microSecMinLatency) ? Number(object.microSecMinLatency) : 0,
      microSecMaxLatency: isSet(object.microSecMaxLatency) ? Number(object.microSecMaxLatency) : 0,
      memPoolMsgInUse: isSet(object.memPoolMsgInUse) ? Number(object.memPoolMsgInUse) : 0,
    };
  },

  toJSON(message: CMsgClientConnectionStats_StatsVConn): unknown {
    const obj: any = {};
    message.connectionsUdp !== undefined && (obj.connectionsUdp = Math.round(message.connectionsUdp));
    message.connectionsTcp !== undefined && (obj.connectionsTcp = Math.round(message.connectionsTcp));
    message.statsUdp !== undefined &&
      (obj.statsUdp = message.statsUdp ? CMsgClientConnectionStats_StatsUDP.toJSON(message.statsUdp) : undefined);
    message.pktsAbandoned !== undefined && (obj.pktsAbandoned = message.pktsAbandoned);
    message.connReqReceived !== undefined && (obj.connReqReceived = message.connReqReceived);
    message.pktsResent !== undefined && (obj.pktsResent = message.pktsResent);
    message.msgsSent !== undefined && (obj.msgsSent = message.msgsSent);
    message.msgsSentFailed !== undefined && (obj.msgsSentFailed = message.msgsSentFailed);
    message.msgsRecv !== undefined && (obj.msgsRecv = message.msgsRecv);
    message.datagramsSent !== undefined && (obj.datagramsSent = message.datagramsSent);
    message.datagramsRecv !== undefined && (obj.datagramsRecv = message.datagramsRecv);
    message.badPktsRecv !== undefined && (obj.badPktsRecv = message.badPktsRecv);
    message.unknownConnPktsRecv !== undefined && (obj.unknownConnPktsRecv = message.unknownConnPktsRecv);
    message.missedPktsRecv !== undefined && (obj.missedPktsRecv = message.missedPktsRecv);
    message.dupPktsRecv !== undefined && (obj.dupPktsRecv = message.dupPktsRecv);
    message.failedConnectChallenges !== undefined && (obj.failedConnectChallenges = message.failedConnectChallenges);
    message.microSecAvgLatency !== undefined && (obj.microSecAvgLatency = Math.round(message.microSecAvgLatency));
    message.microSecMinLatency !== undefined && (obj.microSecMinLatency = Math.round(message.microSecMinLatency));
    message.microSecMaxLatency !== undefined && (obj.microSecMaxLatency = Math.round(message.microSecMaxLatency));
    message.memPoolMsgInUse !== undefined && (obj.memPoolMsgInUse = Math.round(message.memPoolMsgInUse));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsVConn>, I>>(
    base?: I,
  ): CMsgClientConnectionStats_StatsVConn {
    return CMsgClientConnectionStats_StatsVConn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientConnectionStats_StatsVConn>, I>>(
    object: I,
  ): CMsgClientConnectionStats_StatsVConn {
    const message = createBaseCMsgClientConnectionStats_StatsVConn();
    message.connectionsUdp = object.connectionsUdp ?? 0;
    message.connectionsTcp = object.connectionsTcp ?? 0;
    message.statsUdp = (object.statsUdp !== undefined && object.statsUdp !== null)
      ? CMsgClientConnectionStats_StatsUDP.fromPartial(object.statsUdp)
      : undefined;
    message.pktsAbandoned = object.pktsAbandoned ?? "0";
    message.connReqReceived = object.connReqReceived ?? "0";
    message.pktsResent = object.pktsResent ?? "0";
    message.msgsSent = object.msgsSent ?? "0";
    message.msgsSentFailed = object.msgsSentFailed ?? "0";
    message.msgsRecv = object.msgsRecv ?? "0";
    message.datagramsSent = object.datagramsSent ?? "0";
    message.datagramsRecv = object.datagramsRecv ?? "0";
    message.badPktsRecv = object.badPktsRecv ?? "0";
    message.unknownConnPktsRecv = object.unknownConnPktsRecv ?? "0";
    message.missedPktsRecv = object.missedPktsRecv ?? "0";
    message.dupPktsRecv = object.dupPktsRecv ?? "0";
    message.failedConnectChallenges = object.failedConnectChallenges ?? "0";
    message.microSecAvgLatency = object.microSecAvgLatency ?? 0;
    message.microSecMinLatency = object.microSecMinLatency ?? 0;
    message.microSecMaxLatency = object.microSecMaxLatency ?? 0;
    message.memPoolMsgInUse = object.memPoolMsgInUse ?? 0;
    return message;
  },
};

function createBaseCMsgClientServersAvailable(): CMsgClientServersAvailable {
  return { serverTypesAvailable: [], serverTypeForAuthServices: 0 };
}

export const CMsgClientServersAvailable = {
  encode(message: CMsgClientServersAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serverTypesAvailable) {
      CMsgClientServersAvailable_ServerTypesAvailable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.serverTypeForAuthServices !== 0) {
      writer.uint32(16).uint32(message.serverTypeForAuthServices);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServersAvailable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServersAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverTypesAvailable.push(
            CMsgClientServersAvailable_ServerTypesAvailable.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.serverTypeForAuthServices = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServersAvailable {
    return {
      serverTypesAvailable: Array.isArray(object?.serverTypesAvailable)
        ? object.serverTypesAvailable.map((e: any) => CMsgClientServersAvailable_ServerTypesAvailable.fromJSON(e))
        : [],
      serverTypeForAuthServices: isSet(object.serverTypeForAuthServices) ? Number(object.serverTypeForAuthServices) : 0,
    };
  },

  toJSON(message: CMsgClientServersAvailable): unknown {
    const obj: any = {};
    if (message.serverTypesAvailable) {
      obj.serverTypesAvailable = message.serverTypesAvailable.map((e) =>
        e ? CMsgClientServersAvailable_ServerTypesAvailable.toJSON(e) : undefined
      );
    } else {
      obj.serverTypesAvailable = [];
    }
    message.serverTypeForAuthServices !== undefined &&
      (obj.serverTypeForAuthServices = Math.round(message.serverTypeForAuthServices));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServersAvailable>, I>>(base?: I): CMsgClientServersAvailable {
    return CMsgClientServersAvailable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServersAvailable>, I>>(object: I): CMsgClientServersAvailable {
    const message = createBaseCMsgClientServersAvailable();
    message.serverTypesAvailable =
      object.serverTypesAvailable?.map((e) => CMsgClientServersAvailable_ServerTypesAvailable.fromPartial(e)) || [];
    message.serverTypeForAuthServices = object.serverTypeForAuthServices ?? 0;
    return message;
  },
};

function createBaseCMsgClientServersAvailable_ServerTypesAvailable(): CMsgClientServersAvailable_ServerTypesAvailable {
  return { server: 0, changed: false };
}

export const CMsgClientServersAvailable_ServerTypesAvailable = {
  encode(
    message: CMsgClientServersAvailable_ServerTypesAvailable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.server !== 0) {
      writer.uint32(8).uint32(message.server);
    }
    if (message.changed === true) {
      writer.uint32(16).bool(message.changed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientServersAvailable_ServerTypesAvailable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientServersAvailable_ServerTypesAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.server = reader.uint32();
          break;
        case 2:
          message.changed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientServersAvailable_ServerTypesAvailable {
    return {
      server: isSet(object.server) ? Number(object.server) : 0,
      changed: isSet(object.changed) ? Boolean(object.changed) : false,
    };
  },

  toJSON(message: CMsgClientServersAvailable_ServerTypesAvailable): unknown {
    const obj: any = {};
    message.server !== undefined && (obj.server = Math.round(message.server));
    message.changed !== undefined && (obj.changed = message.changed);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientServersAvailable_ServerTypesAvailable>, I>>(
    base?: I,
  ): CMsgClientServersAvailable_ServerTypesAvailable {
    return CMsgClientServersAvailable_ServerTypesAvailable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientServersAvailable_ServerTypesAvailable>, I>>(
    object: I,
  ): CMsgClientServersAvailable_ServerTypesAvailable {
    const message = createBaseCMsgClientServersAvailable_ServerTypesAvailable();
    message.server = object.server ?? 0;
    message.changed = object.changed ?? false;
    return message;
  },
};

function createBaseCMsgClientReportOverlayDetourFailure(): CMsgClientReportOverlayDetourFailure {
  return { failureStrings: [] };
}

export const CMsgClientReportOverlayDetourFailure = {
  encode(message: CMsgClientReportOverlayDetourFailure, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.failureStrings) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientReportOverlayDetourFailure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientReportOverlayDetourFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failureStrings.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientReportOverlayDetourFailure {
    return {
      failureStrings: Array.isArray(object?.failureStrings) ? object.failureStrings.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgClientReportOverlayDetourFailure): unknown {
    const obj: any = {};
    if (message.failureStrings) {
      obj.failureStrings = message.failureStrings.map((e) => e);
    } else {
      obj.failureStrings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientReportOverlayDetourFailure>, I>>(
    base?: I,
  ): CMsgClientReportOverlayDetourFailure {
    return CMsgClientReportOverlayDetourFailure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientReportOverlayDetourFailure>, I>>(
    object: I,
  ): CMsgClientReportOverlayDetourFailure {
    const message = createBaseCMsgClientReportOverlayDetourFailure();
    message.failureStrings = object.failureStrings?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgClientRequestEncryptedAppTicket(): CMsgClientRequestEncryptedAppTicket {
  return { appId: 0, userdata: Buffer.alloc(0) };
}

export const CMsgClientRequestEncryptedAppTicket = {
  encode(message: CMsgClientRequestEncryptedAppTicket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.userdata.length !== 0) {
      writer.uint32(18).bytes(message.userdata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestEncryptedAppTicket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestEncryptedAppTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.userdata = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestEncryptedAppTicket {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      userdata: isSet(object.userdata) ? Buffer.from(bytesFromBase64(object.userdata)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientRequestEncryptedAppTicket): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.userdata !== undefined &&
      (obj.userdata = base64FromBytes(message.userdata !== undefined ? message.userdata : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestEncryptedAppTicket>, I>>(
    base?: I,
  ): CMsgClientRequestEncryptedAppTicket {
    return CMsgClientRequestEncryptedAppTicket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestEncryptedAppTicket>, I>>(
    object: I,
  ): CMsgClientRequestEncryptedAppTicket {
    const message = createBaseCMsgClientRequestEncryptedAppTicket();
    message.appId = object.appId ?? 0;
    message.userdata = object.userdata ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientRequestEncryptedAppTicketResponse(): CMsgClientRequestEncryptedAppTicketResponse {
  return { appId: 0, eresult: 0, encryptedAppTicket: undefined };
}

export const CMsgClientRequestEncryptedAppTicketResponse = {
  encode(message: CMsgClientRequestEncryptedAppTicketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appId !== 0) {
      writer.uint32(8).uint32(message.appId);
    }
    if (message.eresult !== 0) {
      writer.uint32(16).int32(message.eresult);
    }
    if (message.encryptedAppTicket !== undefined) {
      EncryptedAppTicket.encode(message.encryptedAppTicket, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientRequestEncryptedAppTicketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientRequestEncryptedAppTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint32();
          break;
        case 2:
          message.eresult = reader.int32();
          break;
        case 3:
          message.encryptedAppTicket = EncryptedAppTicket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientRequestEncryptedAppTicketResponse {
    return {
      appId: isSet(object.appId) ? Number(object.appId) : 0,
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      encryptedAppTicket: isSet(object.encryptedAppTicket)
        ? EncryptedAppTicket.fromJSON(object.encryptedAppTicket)
        : undefined,
    };
  },

  toJSON(message: CMsgClientRequestEncryptedAppTicketResponse): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.encryptedAppTicket !== undefined && (obj.encryptedAppTicket = message.encryptedAppTicket
      ? EncryptedAppTicket.toJSON(message.encryptedAppTicket)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientRequestEncryptedAppTicketResponse>, I>>(
    base?: I,
  ): CMsgClientRequestEncryptedAppTicketResponse {
    return CMsgClientRequestEncryptedAppTicketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientRequestEncryptedAppTicketResponse>, I>>(
    object: I,
  ): CMsgClientRequestEncryptedAppTicketResponse {
    const message = createBaseCMsgClientRequestEncryptedAppTicketResponse();
    message.appId = object.appId ?? 0;
    message.eresult = object.eresult ?? 0;
    message.encryptedAppTicket = (object.encryptedAppTicket !== undefined && object.encryptedAppTicket !== null)
      ? EncryptedAppTicket.fromPartial(object.encryptedAppTicket)
      : undefined;
    return message;
  },
};

function createBaseCMsgClientWalletInfoUpdate(): CMsgClientWalletInfoUpdate {
  return {
    hasWallet: false,
    balance: 0,
    currency: 0,
    balanceDelayed: 0,
    balance64: "0",
    balance64Delayed: "0",
    realm: 0,
  };
}

export const CMsgClientWalletInfoUpdate = {
  encode(message: CMsgClientWalletInfoUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasWallet === true) {
      writer.uint32(8).bool(message.hasWallet);
    }
    if (message.balance !== 0) {
      writer.uint32(16).int32(message.balance);
    }
    if (message.currency !== 0) {
      writer.uint32(24).int32(message.currency);
    }
    if (message.balanceDelayed !== 0) {
      writer.uint32(32).int32(message.balanceDelayed);
    }
    if (message.balance64 !== "0") {
      writer.uint32(40).int64(message.balance64);
    }
    if (message.balance64Delayed !== "0") {
      writer.uint32(48).int64(message.balance64Delayed);
    }
    if (message.realm !== 0) {
      writer.uint32(56).int32(message.realm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientWalletInfoUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientWalletInfoUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasWallet = reader.bool();
          break;
        case 2:
          message.balance = reader.int32();
          break;
        case 3:
          message.currency = reader.int32();
          break;
        case 4:
          message.balanceDelayed = reader.int32();
          break;
        case 5:
          message.balance64 = longToString(reader.int64() as Long);
          break;
        case 6:
          message.balance64Delayed = longToString(reader.int64() as Long);
          break;
        case 7:
          message.realm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientWalletInfoUpdate {
    return {
      hasWallet: isSet(object.hasWallet) ? Boolean(object.hasWallet) : false,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currency: isSet(object.currency) ? Number(object.currency) : 0,
      balanceDelayed: isSet(object.balanceDelayed) ? Number(object.balanceDelayed) : 0,
      balance64: isSet(object.balance64) ? String(object.balance64) : "0",
      balance64Delayed: isSet(object.balance64Delayed) ? String(object.balance64Delayed) : "0",
      realm: isSet(object.realm) ? Number(object.realm) : 0,
    };
  },

  toJSON(message: CMsgClientWalletInfoUpdate): unknown {
    const obj: any = {};
    message.hasWallet !== undefined && (obj.hasWallet = message.hasWallet);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.currency !== undefined && (obj.currency = Math.round(message.currency));
    message.balanceDelayed !== undefined && (obj.balanceDelayed = Math.round(message.balanceDelayed));
    message.balance64 !== undefined && (obj.balance64 = message.balance64);
    message.balance64Delayed !== undefined && (obj.balance64Delayed = message.balance64Delayed);
    message.realm !== undefined && (obj.realm = Math.round(message.realm));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientWalletInfoUpdate>, I>>(base?: I): CMsgClientWalletInfoUpdate {
    return CMsgClientWalletInfoUpdate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientWalletInfoUpdate>, I>>(object: I): CMsgClientWalletInfoUpdate {
    const message = createBaseCMsgClientWalletInfoUpdate();
    message.hasWallet = object.hasWallet ?? false;
    message.balance = object.balance ?? 0;
    message.currency = object.currency ?? 0;
    message.balanceDelayed = object.balanceDelayed ?? 0;
    message.balance64 = object.balance64 ?? "0";
    message.balance64Delayed = object.balance64Delayed ?? "0";
    message.realm = object.realm ?? 0;
    return message;
  },
};

function createBaseCMsgClientAMGetClanOfficers(): CMsgClientAMGetClanOfficers {
  return { steamidClan: "0" };
}

export const CMsgClientAMGetClanOfficers = {
  encode(message: CMsgClientAMGetClanOfficers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidClan !== "0") {
      writer.uint32(9).fixed64(message.steamidClan);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetClanOfficers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetClanOfficers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidClan = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetClanOfficers {
    return { steamidClan: isSet(object.steamidClan) ? String(object.steamidClan) : "0" };
  },

  toJSON(message: CMsgClientAMGetClanOfficers): unknown {
    const obj: any = {};
    message.steamidClan !== undefined && (obj.steamidClan = message.steamidClan);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetClanOfficers>, I>>(base?: I): CMsgClientAMGetClanOfficers {
    return CMsgClientAMGetClanOfficers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetClanOfficers>, I>>(object: I): CMsgClientAMGetClanOfficers {
    const message = createBaseCMsgClientAMGetClanOfficers();
    message.steamidClan = object.steamidClan ?? "0";
    return message;
  },
};

function createBaseCMsgClientAMGetClanOfficersResponse(): CMsgClientAMGetClanOfficersResponse {
  return { eresult: 0, steamidClan: "0", officerCount: 0 };
}

export const CMsgClientAMGetClanOfficersResponse = {
  encode(message: CMsgClientAMGetClanOfficersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.steamidClan !== "0") {
      writer.uint32(17).fixed64(message.steamidClan);
    }
    if (message.officerCount !== 0) {
      writer.uint32(24).int32(message.officerCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetClanOfficersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetClanOfficersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.steamidClan = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.officerCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetClanOfficersResponse {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      steamidClan: isSet(object.steamidClan) ? String(object.steamidClan) : "0",
      officerCount: isSet(object.officerCount) ? Number(object.officerCount) : 0,
    };
  },

  toJSON(message: CMsgClientAMGetClanOfficersResponse): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.steamidClan !== undefined && (obj.steamidClan = message.steamidClan);
    message.officerCount !== undefined && (obj.officerCount = Math.round(message.officerCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetClanOfficersResponse>, I>>(
    base?: I,
  ): CMsgClientAMGetClanOfficersResponse {
    return CMsgClientAMGetClanOfficersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetClanOfficersResponse>, I>>(
    object: I,
  ): CMsgClientAMGetClanOfficersResponse {
    const message = createBaseCMsgClientAMGetClanOfficersResponse();
    message.eresult = object.eresult ?? 0;
    message.steamidClan = object.steamidClan ?? "0";
    message.officerCount = object.officerCount ?? 0;
    return message;
  },
};

function createBaseCMsgClientAMGetPersonaNameHistory(): CMsgClientAMGetPersonaNameHistory {
  return { idCount: 0, Ids: [] };
}

export const CMsgClientAMGetPersonaNameHistory = {
  encode(message: CMsgClientAMGetPersonaNameHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idCount !== 0) {
      writer.uint32(8).int32(message.idCount);
    }
    for (const v of message.Ids) {
      CMsgClientAMGetPersonaNameHistory_IdInstance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetPersonaNameHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetPersonaNameHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idCount = reader.int32();
          break;
        case 2:
          message.Ids.push(CMsgClientAMGetPersonaNameHistory_IdInstance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetPersonaNameHistory {
    return {
      idCount: isSet(object.idCount) ? Number(object.idCount) : 0,
      Ids: Array.isArray(object?.Ids)
        ? object.Ids.map((e: any) => CMsgClientAMGetPersonaNameHistory_IdInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientAMGetPersonaNameHistory): unknown {
    const obj: any = {};
    message.idCount !== undefined && (obj.idCount = Math.round(message.idCount));
    if (message.Ids) {
      obj.Ids = message.Ids.map((e) => e ? CMsgClientAMGetPersonaNameHistory_IdInstance.toJSON(e) : undefined);
    } else {
      obj.Ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistory>, I>>(
    base?: I,
  ): CMsgClientAMGetPersonaNameHistory {
    return CMsgClientAMGetPersonaNameHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistory>, I>>(
    object: I,
  ): CMsgClientAMGetPersonaNameHistory {
    const message = createBaseCMsgClientAMGetPersonaNameHistory();
    message.idCount = object.idCount ?? 0;
    message.Ids = object.Ids?.map((e) => CMsgClientAMGetPersonaNameHistory_IdInstance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientAMGetPersonaNameHistory_IdInstance(): CMsgClientAMGetPersonaNameHistory_IdInstance {
  return { steamid: "0" };
}

export const CMsgClientAMGetPersonaNameHistory_IdInstance = {
  encode(message: CMsgClientAMGetPersonaNameHistory_IdInstance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamid !== "0") {
      writer.uint32(9).fixed64(message.steamid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetPersonaNameHistory_IdInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetPersonaNameHistory_IdInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetPersonaNameHistory_IdInstance {
    return { steamid: isSet(object.steamid) ? String(object.steamid) : "0" };
  },

  toJSON(message: CMsgClientAMGetPersonaNameHistory_IdInstance): unknown {
    const obj: any = {};
    message.steamid !== undefined && (obj.steamid = message.steamid);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistory_IdInstance>, I>>(
    base?: I,
  ): CMsgClientAMGetPersonaNameHistory_IdInstance {
    return CMsgClientAMGetPersonaNameHistory_IdInstance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistory_IdInstance>, I>>(
    object: I,
  ): CMsgClientAMGetPersonaNameHistory_IdInstance {
    const message = createBaseCMsgClientAMGetPersonaNameHistory_IdInstance();
    message.steamid = object.steamid ?? "0";
    return message;
  },
};

function createBaseCMsgClientAMGetPersonaNameHistoryResponse(): CMsgClientAMGetPersonaNameHistoryResponse {
  return { responses: [] };
}

export const CMsgClientAMGetPersonaNameHistoryResponse = {
  encode(message: CMsgClientAMGetPersonaNameHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.responses) {
      CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetPersonaNameHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.responses.push(
            CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetPersonaNameHistoryResponse {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgClientAMGetPersonaNameHistoryResponse): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) =>
        e ? CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.toJSON(e) : undefined
      );
    } else {
      obj.responses = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse>, I>>(
    base?: I,
  ): CMsgClientAMGetPersonaNameHistoryResponse {
    return CMsgClientAMGetPersonaNameHistoryResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse>, I>>(
    object: I,
  ): CMsgClientAMGetPersonaNameHistoryResponse {
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse();
    message.responses =
      object.responses?.map((e) => CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance(): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
  return { eresult: 0, steamid: "0", names: [] };
}

export const CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance = {
  encode(
    message: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eresult !== 0) {
      writer.uint32(8).int32(message.eresult);
    }
    if (message.steamid !== "0") {
      writer.uint32(17).fixed64(message.steamid);
    }
    for (const v of message.names) {
      CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.encode(v!, writer.uint32(26).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eresult = reader.int32();
          break;
        case 2:
          message.steamid = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.names.push(
            CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
    return {
      eresult: isSet(object.eresult) ? Number(object.eresult) : 0,
      steamid: isSet(object.steamid) ? String(object.steamid) : "0",
      names: Array.isArray(object?.names)
        ? object.names.map((e: any) =>
          CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance): unknown {
    const obj: any = {};
    message.eresult !== undefined && (obj.eresult = Math.round(message.eresult));
    message.steamid !== undefined && (obj.steamid = message.steamid);
    if (message.names) {
      obj.names = message.names.map((e) =>
        e ? CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.toJSON(e) : undefined
      );
    } else {
      obj.names = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance>, I>>(
    base?: I,
  ): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
    return CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance>, I>>(
    object: I,
  ): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance();
    message.eresult = object.eresult ?? 0;
    message.steamid = object.steamid ?? "0";
    message.names =
      object.names?.map((e) =>
        CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance(): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
  return { nameSince: 0, name: "" };
}

export const CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance = {
  encode(
    message: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nameSince !== 0) {
      writer.uint32(13).fixed32(message.nameSince);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameSince = reader.fixed32();
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

  fromJSON(object: any): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
    return {
      nameSince: isSet(object.nameSince) ? Number(object.nameSince) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance): unknown {
    const obj: any = {};
    message.nameSince !== undefined && (obj.nameSince = Math.round(message.nameSince));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance>, I>>(
    base?: I,
  ): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
    return CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance>, I>,
  >(object: I): CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
    const message = createBaseCMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance();
    message.nameSince = object.nameSince ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCMsgClientDeregisterWithServer(): CMsgClientDeregisterWithServer {
  return { eservertype: 0, appId: 0 };
}

export const CMsgClientDeregisterWithServer = {
  encode(message: CMsgClientDeregisterWithServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eservertype !== 0) {
      writer.uint32(8).uint32(message.eservertype);
    }
    if (message.appId !== 0) {
      writer.uint32(16).uint32(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientDeregisterWithServer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientDeregisterWithServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eservertype = reader.uint32();
          break;
        case 2:
          message.appId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientDeregisterWithServer {
    return {
      eservertype: isSet(object.eservertype) ? Number(object.eservertype) : 0,
      appId: isSet(object.appId) ? Number(object.appId) : 0,
    };
  },

  toJSON(message: CMsgClientDeregisterWithServer): unknown {
    const obj: any = {};
    message.eservertype !== undefined && (obj.eservertype = Math.round(message.eservertype));
    message.appId !== undefined && (obj.appId = Math.round(message.appId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientDeregisterWithServer>, I>>(base?: I): CMsgClientDeregisterWithServer {
    return CMsgClientDeregisterWithServer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientDeregisterWithServer>, I>>(
    object: I,
  ): CMsgClientDeregisterWithServer {
    const message = createBaseCMsgClientDeregisterWithServer();
    message.eservertype = object.eservertype ?? 0;
    message.appId = object.appId ?? 0;
    return message;
  },
};

function createBaseCMsgClientClanState(): CMsgClientClanState {
  return {
    steamidClan: "0",
    clanAccountFlags: 0,
    nameInfo: undefined,
    userCounts: undefined,
    events: [],
    announcements: [],
    chatRoomPrivate: false,
  };
}

export const CMsgClientClanState = {
  encode(message: CMsgClientClanState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamidClan !== "0") {
      writer.uint32(9).fixed64(message.steamidClan);
    }
    if (message.clanAccountFlags !== 0) {
      writer.uint32(24).uint32(message.clanAccountFlags);
    }
    if (message.nameInfo !== undefined) {
      CMsgClientClanState_NameInfo.encode(message.nameInfo, writer.uint32(34).fork()).ldelim();
    }
    if (message.userCounts !== undefined) {
      CMsgClientClanState_UserCounts.encode(message.userCounts, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.events) {
      CMsgClientClanState_Event.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.announcements) {
      CMsgClientClanState_Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.chatRoomPrivate === true) {
      writer.uint32(64).bool(message.chatRoomPrivate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientClanState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientClanState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamidClan = longToString(reader.fixed64() as Long);
          break;
        case 3:
          message.clanAccountFlags = reader.uint32();
          break;
        case 4:
          message.nameInfo = CMsgClientClanState_NameInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.userCounts = CMsgClientClanState_UserCounts.decode(reader, reader.uint32());
          break;
        case 6:
          message.events.push(CMsgClientClanState_Event.decode(reader, reader.uint32()));
          break;
        case 7:
          message.announcements.push(CMsgClientClanState_Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.chatRoomPrivate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientClanState {
    return {
      steamidClan: isSet(object.steamidClan) ? String(object.steamidClan) : "0",
      clanAccountFlags: isSet(object.clanAccountFlags) ? Number(object.clanAccountFlags) : 0,
      nameInfo: isSet(object.nameInfo) ? CMsgClientClanState_NameInfo.fromJSON(object.nameInfo) : undefined,
      userCounts: isSet(object.userCounts) ? CMsgClientClanState_UserCounts.fromJSON(object.userCounts) : undefined,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => CMsgClientClanState_Event.fromJSON(e)) : [],
      announcements: Array.isArray(object?.announcements)
        ? object.announcements.map((e: any) => CMsgClientClanState_Event.fromJSON(e))
        : [],
      chatRoomPrivate: isSet(object.chatRoomPrivate) ? Boolean(object.chatRoomPrivate) : false,
    };
  },

  toJSON(message: CMsgClientClanState): unknown {
    const obj: any = {};
    message.steamidClan !== undefined && (obj.steamidClan = message.steamidClan);
    message.clanAccountFlags !== undefined && (obj.clanAccountFlags = Math.round(message.clanAccountFlags));
    message.nameInfo !== undefined &&
      (obj.nameInfo = message.nameInfo ? CMsgClientClanState_NameInfo.toJSON(message.nameInfo) : undefined);
    message.userCounts !== undefined &&
      (obj.userCounts = message.userCounts ? CMsgClientClanState_UserCounts.toJSON(message.userCounts) : undefined);
    if (message.events) {
      obj.events = message.events.map((e) => e ? CMsgClientClanState_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    if (message.announcements) {
      obj.announcements = message.announcements.map((e) => e ? CMsgClientClanState_Event.toJSON(e) : undefined);
    } else {
      obj.announcements = [];
    }
    message.chatRoomPrivate !== undefined && (obj.chatRoomPrivate = message.chatRoomPrivate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientClanState>, I>>(base?: I): CMsgClientClanState {
    return CMsgClientClanState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientClanState>, I>>(object: I): CMsgClientClanState {
    const message = createBaseCMsgClientClanState();
    message.steamidClan = object.steamidClan ?? "0";
    message.clanAccountFlags = object.clanAccountFlags ?? 0;
    message.nameInfo = (object.nameInfo !== undefined && object.nameInfo !== null)
      ? CMsgClientClanState_NameInfo.fromPartial(object.nameInfo)
      : undefined;
    message.userCounts = (object.userCounts !== undefined && object.userCounts !== null)
      ? CMsgClientClanState_UserCounts.fromPartial(object.userCounts)
      : undefined;
    message.events = object.events?.map((e) => CMsgClientClanState_Event.fromPartial(e)) || [];
    message.announcements = object.announcements?.map((e) => CMsgClientClanState_Event.fromPartial(e)) || [];
    message.chatRoomPrivate = object.chatRoomPrivate ?? false;
    return message;
  },
};

function createBaseCMsgClientClanState_NameInfo(): CMsgClientClanState_NameInfo {
  return { clanName: "", shaAvatar: Buffer.alloc(0) };
}

export const CMsgClientClanState_NameInfo = {
  encode(message: CMsgClientClanState_NameInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clanName !== "") {
      writer.uint32(10).string(message.clanName);
    }
    if (message.shaAvatar.length !== 0) {
      writer.uint32(18).bytes(message.shaAvatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientClanState_NameInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientClanState_NameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clanName = reader.string();
          break;
        case 2:
          message.shaAvatar = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientClanState_NameInfo {
    return {
      clanName: isSet(object.clanName) ? String(object.clanName) : "",
      shaAvatar: isSet(object.shaAvatar) ? Buffer.from(bytesFromBase64(object.shaAvatar)) : Buffer.alloc(0),
    };
  },

  toJSON(message: CMsgClientClanState_NameInfo): unknown {
    const obj: any = {};
    message.clanName !== undefined && (obj.clanName = message.clanName);
    message.shaAvatar !== undefined &&
      (obj.shaAvatar = base64FromBytes(message.shaAvatar !== undefined ? message.shaAvatar : Buffer.alloc(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientClanState_NameInfo>, I>>(base?: I): CMsgClientClanState_NameInfo {
    return CMsgClientClanState_NameInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientClanState_NameInfo>, I>>(object: I): CMsgClientClanState_NameInfo {
    const message = createBaseCMsgClientClanState_NameInfo();
    message.clanName = object.clanName ?? "";
    message.shaAvatar = object.shaAvatar ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseCMsgClientClanState_UserCounts(): CMsgClientClanState_UserCounts {
  return { members: 0, online: 0, chatting: 0, inGame: 0, chatRoomMembers: 0 };
}

export const CMsgClientClanState_UserCounts = {
  encode(message: CMsgClientClanState_UserCounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.members !== 0) {
      writer.uint32(8).uint32(message.members);
    }
    if (message.online !== 0) {
      writer.uint32(16).uint32(message.online);
    }
    if (message.chatting !== 0) {
      writer.uint32(24).uint32(message.chatting);
    }
    if (message.inGame !== 0) {
      writer.uint32(32).uint32(message.inGame);
    }
    if (message.chatRoomMembers !== 0) {
      writer.uint32(40).uint32(message.chatRoomMembers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientClanState_UserCounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientClanState_UserCounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members = reader.uint32();
          break;
        case 2:
          message.online = reader.uint32();
          break;
        case 3:
          message.chatting = reader.uint32();
          break;
        case 4:
          message.inGame = reader.uint32();
          break;
        case 5:
          message.chatRoomMembers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientClanState_UserCounts {
    return {
      members: isSet(object.members) ? Number(object.members) : 0,
      online: isSet(object.online) ? Number(object.online) : 0,
      chatting: isSet(object.chatting) ? Number(object.chatting) : 0,
      inGame: isSet(object.inGame) ? Number(object.inGame) : 0,
      chatRoomMembers: isSet(object.chatRoomMembers) ? Number(object.chatRoomMembers) : 0,
    };
  },

  toJSON(message: CMsgClientClanState_UserCounts): unknown {
    const obj: any = {};
    message.members !== undefined && (obj.members = Math.round(message.members));
    message.online !== undefined && (obj.online = Math.round(message.online));
    message.chatting !== undefined && (obj.chatting = Math.round(message.chatting));
    message.inGame !== undefined && (obj.inGame = Math.round(message.inGame));
    message.chatRoomMembers !== undefined && (obj.chatRoomMembers = Math.round(message.chatRoomMembers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientClanState_UserCounts>, I>>(base?: I): CMsgClientClanState_UserCounts {
    return CMsgClientClanState_UserCounts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientClanState_UserCounts>, I>>(
    object: I,
  ): CMsgClientClanState_UserCounts {
    const message = createBaseCMsgClientClanState_UserCounts();
    message.members = object.members ?? 0;
    message.online = object.online ?? 0;
    message.chatting = object.chatting ?? 0;
    message.inGame = object.inGame ?? 0;
    message.chatRoomMembers = object.chatRoomMembers ?? 0;
    return message;
  },
};

function createBaseCMsgClientClanState_Event(): CMsgClientClanState_Event {
  return { gid: "0", eventTime: 0, headline: "", gameId: "0", justPosted: false };
}

export const CMsgClientClanState_Event = {
  encode(message: CMsgClientClanState_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gid !== "0") {
      writer.uint32(9).fixed64(message.gid);
    }
    if (message.eventTime !== 0) {
      writer.uint32(16).uint32(message.eventTime);
    }
    if (message.headline !== "") {
      writer.uint32(26).string(message.headline);
    }
    if (message.gameId !== "0") {
      writer.uint32(33).fixed64(message.gameId);
    }
    if (message.justPosted === true) {
      writer.uint32(40).bool(message.justPosted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClientClanState_Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClientClanState_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gid = longToString(reader.fixed64() as Long);
          break;
        case 2:
          message.eventTime = reader.uint32();
          break;
        case 3:
          message.headline = reader.string();
          break;
        case 4:
          message.gameId = longToString(reader.fixed64() as Long);
          break;
        case 5:
          message.justPosted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClientClanState_Event {
    return {
      gid: isSet(object.gid) ? String(object.gid) : "0",
      eventTime: isSet(object.eventTime) ? Number(object.eventTime) : 0,
      headline: isSet(object.headline) ? String(object.headline) : "",
      gameId: isSet(object.gameId) ? String(object.gameId) : "0",
      justPosted: isSet(object.justPosted) ? Boolean(object.justPosted) : false,
    };
  },

  toJSON(message: CMsgClientClanState_Event): unknown {
    const obj: any = {};
    message.gid !== undefined && (obj.gid = message.gid);
    message.eventTime !== undefined && (obj.eventTime = Math.round(message.eventTime));
    message.headline !== undefined && (obj.headline = message.headline);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.justPosted !== undefined && (obj.justPosted = message.justPosted);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClientClanState_Event>, I>>(base?: I): CMsgClientClanState_Event {
    return CMsgClientClanState_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClientClanState_Event>, I>>(object: I): CMsgClientClanState_Event {
    const message = createBaseCMsgClientClanState_Event();
    message.gid = object.gid ?? "0";
    message.eventTime = object.eventTime ?? 0;
    message.headline = object.headline ?? "";
    message.gameId = object.gameId ?? "0";
    message.justPosted = object.justPosted ?? false;
    return message;
  },
};

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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
