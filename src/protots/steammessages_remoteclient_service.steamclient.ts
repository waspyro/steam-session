/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  CRemoteClientAllocateRelayServerRequest,
  CRemoteClientAllocateRelayServerResponse,
  CRemoteClientAllocateSDRRequest,
  CRemoteClientAllocateSDRResponse,
  CRemoteClientAllocateTURNServerRequest,
  CRemoteClientAllocateTURNServerResponse,
  CRemoteClientCreateRemotePlayTogetherInvitationRequest,
  CRemoteClientCreateRemotePlayTogetherInvitationResponse,
  CRemoteClientDeleteRemotePlayTogetherInvitationRequest,
  CRemoteClientDeleteRemotePlayTogetherInvitationResponse,
  CRemoteClientGetPairingInfoRequest,
  CRemoteClientGetPairingInfoResponse,
  CRemoteClientOnlineNotification,
  CRemoteClientRegisterStatusUpdateNotification,
  CRemoteClientRemotePacketNotification,
  CRemoteClientReplyPacketNotification,
  CRemoteClientSteamBroadcastNotification,
  CRemoteClientSteamToSteamNotification,
  CRemoteClientUnregisterStatusUpdateNotification,
  CRemotePlaySessionStartedRequest,
  CRemotePlaySessionStartedResponse,
  CRemotePlaySessionStoppedNotification,
  CRemotePlayTogetherNotification,
} from "./steammessages_remoteclient_service_messages";
import { NoResponse } from "./steammessages_unified_base.steamclient";

export const protobufPackage = "";

export interface RemoteClient {
  GetPairingInfo(request: CRemoteClientGetPairingInfoRequest): Promise<CRemoteClientGetPairingInfoResponse>;
  NotifyOnline(request: CRemoteClientOnlineNotification): Promise<NoResponse>;
  NotifyReplyPacket(request: CRemoteClientReplyPacketNotification): Promise<NoResponse>;
  AllocateTURNServer(request: CRemoteClientAllocateTURNServerRequest): Promise<CRemoteClientAllocateTURNServerResponse>;
  AllocateRelayServer(
    request: CRemoteClientAllocateRelayServerRequest,
  ): Promise<CRemoteClientAllocateRelayServerResponse>;
  AllocateSDR(request: CRemoteClientAllocateSDRRequest): Promise<CRemoteClientAllocateSDRResponse>;
  SendSteamBroadcastPacket(request: CRemoteClientSteamBroadcastNotification): Promise<NoResponse>;
  SendSteamToSteamPacket(request: CRemoteClientSteamToSteamNotification): Promise<NoResponse>;
  SendRemotePlaySessionStarted(request: CRemotePlaySessionStartedRequest): Promise<CRemotePlaySessionStartedResponse>;
  SendRemotePlaySessionStopped(request: CRemotePlaySessionStoppedNotification): Promise<NoResponse>;
  SendRemotePlayTogetherPacket(request: CRemotePlayTogetherNotification): Promise<NoResponse>;
  CreateRemotePlayTogetherInvitation(
    request: CRemoteClientCreateRemotePlayTogetherInvitationRequest,
  ): Promise<CRemoteClientCreateRemotePlayTogetherInvitationResponse>;
  DeleteRemotePlayTogetherInvitation(
    request: CRemoteClientDeleteRemotePlayTogetherInvitationRequest,
  ): Promise<CRemoteClientDeleteRemotePlayTogetherInvitationResponse>;
}

export class RemoteClientClientImpl implements RemoteClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "RemoteClient";
    this.rpc = rpc;
    this.GetPairingInfo = this.GetPairingInfo.bind(this);
    this.NotifyOnline = this.NotifyOnline.bind(this);
    this.NotifyReplyPacket = this.NotifyReplyPacket.bind(this);
    this.AllocateTURNServer = this.AllocateTURNServer.bind(this);
    this.AllocateRelayServer = this.AllocateRelayServer.bind(this);
    this.AllocateSDR = this.AllocateSDR.bind(this);
    this.SendSteamBroadcastPacket = this.SendSteamBroadcastPacket.bind(this);
    this.SendSteamToSteamPacket = this.SendSteamToSteamPacket.bind(this);
    this.SendRemotePlaySessionStarted = this.SendRemotePlaySessionStarted.bind(this);
    this.SendRemotePlaySessionStopped = this.SendRemotePlaySessionStopped.bind(this);
    this.SendRemotePlayTogetherPacket = this.SendRemotePlayTogetherPacket.bind(this);
    this.CreateRemotePlayTogetherInvitation = this.CreateRemotePlayTogetherInvitation.bind(this);
    this.DeleteRemotePlayTogetherInvitation = this.DeleteRemotePlayTogetherInvitation.bind(this);
  }
  GetPairingInfo(request: CRemoteClientGetPairingInfoRequest): Promise<CRemoteClientGetPairingInfoResponse> {
    const data = CRemoteClientGetPairingInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetPairingInfo", data);
    return promise.then((data) => CRemoteClientGetPairingInfoResponse.decode(new _m0.Reader(data)));
  }

  NotifyOnline(request: CRemoteClientOnlineNotification): Promise<NoResponse> {
    const data = CRemoteClientOnlineNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyOnline", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyReplyPacket(request: CRemoteClientReplyPacketNotification): Promise<NoResponse> {
    const data = CRemoteClientReplyPacketNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyReplyPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  AllocateTURNServer(
    request: CRemoteClientAllocateTURNServerRequest,
  ): Promise<CRemoteClientAllocateTURNServerResponse> {
    const data = CRemoteClientAllocateTURNServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocateTURNServer", data);
    return promise.then((data) => CRemoteClientAllocateTURNServerResponse.decode(new _m0.Reader(data)));
  }

  AllocateRelayServer(
    request: CRemoteClientAllocateRelayServerRequest,
  ): Promise<CRemoteClientAllocateRelayServerResponse> {
    const data = CRemoteClientAllocateRelayServerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocateRelayServer", data);
    return promise.then((data) => CRemoteClientAllocateRelayServerResponse.decode(new _m0.Reader(data)));
  }

  AllocateSDR(request: CRemoteClientAllocateSDRRequest): Promise<CRemoteClientAllocateSDRResponse> {
    const data = CRemoteClientAllocateSDRRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllocateSDR", data);
    return promise.then((data) => CRemoteClientAllocateSDRResponse.decode(new _m0.Reader(data)));
  }

  SendSteamBroadcastPacket(request: CRemoteClientSteamBroadcastNotification): Promise<NoResponse> {
    const data = CRemoteClientSteamBroadcastNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendSteamBroadcastPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SendSteamToSteamPacket(request: CRemoteClientSteamToSteamNotification): Promise<NoResponse> {
    const data = CRemoteClientSteamToSteamNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendSteamToSteamPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SendRemotePlaySessionStarted(request: CRemotePlaySessionStartedRequest): Promise<CRemotePlaySessionStartedResponse> {
    const data = CRemotePlaySessionStartedRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendRemotePlaySessionStarted", data);
    return promise.then((data) => CRemotePlaySessionStartedResponse.decode(new _m0.Reader(data)));
  }

  SendRemotePlaySessionStopped(request: CRemotePlaySessionStoppedNotification): Promise<NoResponse> {
    const data = CRemotePlaySessionStoppedNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendRemotePlaySessionStopped", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  SendRemotePlayTogetherPacket(request: CRemotePlayTogetherNotification): Promise<NoResponse> {
    const data = CRemotePlayTogetherNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "SendRemotePlayTogetherPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  CreateRemotePlayTogetherInvitation(
    request: CRemoteClientCreateRemotePlayTogetherInvitationRequest,
  ): Promise<CRemoteClientCreateRemotePlayTogetherInvitationResponse> {
    const data = CRemoteClientCreateRemotePlayTogetherInvitationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateRemotePlayTogetherInvitation", data);
    return promise.then((data) => CRemoteClientCreateRemotePlayTogetherInvitationResponse.decode(new _m0.Reader(data)));
  }

  DeleteRemotePlayTogetherInvitation(
    request: CRemoteClientDeleteRemotePlayTogetherInvitationRequest,
  ): Promise<CRemoteClientDeleteRemotePlayTogetherInvitationResponse> {
    const data = CRemoteClientDeleteRemotePlayTogetherInvitationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteRemotePlayTogetherInvitation", data);
    return promise.then((data) => CRemoteClientDeleteRemotePlayTogetherInvitationResponse.decode(new _m0.Reader(data)));
  }
}

export interface RemoteClientSteamClient {
  NotifyRegisterStatusUpdate(request: CRemoteClientRegisterStatusUpdateNotification): Promise<NoResponse>;
  NotifyUnregisterStatusUpdate(request: CRemoteClientUnregisterStatusUpdateNotification): Promise<NoResponse>;
  NotifyRemotePacket(request: CRemoteClientRemotePacketNotification): Promise<NoResponse>;
  NotifySteamBroadcastPacket(request: CRemoteClientSteamBroadcastNotification): Promise<NoResponse>;
  NotifySteamToSteamPacket(request: CRemoteClientSteamToSteamNotification): Promise<NoResponse>;
  NotifyRemotePlayTogetherPacket(request: CRemotePlayTogetherNotification): Promise<NoResponse>;
}

export class RemoteClientSteamClientClientImpl implements RemoteClientSteamClient {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "RemoteClientSteamClient";
    this.rpc = rpc;
    this.NotifyRegisterStatusUpdate = this.NotifyRegisterStatusUpdate.bind(this);
    this.NotifyUnregisterStatusUpdate = this.NotifyUnregisterStatusUpdate.bind(this);
    this.NotifyRemotePacket = this.NotifyRemotePacket.bind(this);
    this.NotifySteamBroadcastPacket = this.NotifySteamBroadcastPacket.bind(this);
    this.NotifySteamToSteamPacket = this.NotifySteamToSteamPacket.bind(this);
    this.NotifyRemotePlayTogetherPacket = this.NotifyRemotePlayTogetherPacket.bind(this);
  }
  NotifyRegisterStatusUpdate(request: CRemoteClientRegisterStatusUpdateNotification): Promise<NoResponse> {
    const data = CRemoteClientRegisterStatusUpdateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyRegisterStatusUpdate", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyUnregisterStatusUpdate(request: CRemoteClientUnregisterStatusUpdateNotification): Promise<NoResponse> {
    const data = CRemoteClientUnregisterStatusUpdateNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyUnregisterStatusUpdate", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyRemotePacket(request: CRemoteClientRemotePacketNotification): Promise<NoResponse> {
    const data = CRemoteClientRemotePacketNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyRemotePacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifySteamBroadcastPacket(request: CRemoteClientSteamBroadcastNotification): Promise<NoResponse> {
    const data = CRemoteClientSteamBroadcastNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifySteamBroadcastPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifySteamToSteamPacket(request: CRemoteClientSteamToSteamNotification): Promise<NoResponse> {
    const data = CRemoteClientSteamToSteamNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifySteamToSteamPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }

  NotifyRemotePlayTogetherPacket(request: CRemotePlayTogetherNotification): Promise<NoResponse> {
    const data = CRemotePlayTogetherNotification.encode(request).finish();
    const promise = this.rpc.request(this.service, "NotifyRemotePlayTogetherPacket", data);
    return promise.then((data) => NoResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
