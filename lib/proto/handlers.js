import proto from 'protobufjs'
import * as url from 'url';

const DIR = url.fileURLToPath(new URL('.', import.meta.url));
const Message = proto.loadSync(DIR + '/auth.proto')

export const P = {
  'PollAuthSessionStatusReq': null,
  'PollAuthSessionStatusRes': null,
  'GetPasswordRsaPublicKeyReq': null,
  'GetPasswordRsaPublicKeyRes': null,
  'BeginAuthSessionViaCredentialsReq': null,
  'BeginAuthSessionViaCredentialsRes': null,
  'UpdateAuthSessionWithSteamGuardCodeReq': null,
  'UpdateAuthSessionWithSteamGuardCodeRes': null,
}
for (const key in P) P[key] = Message.lookupType(key)

const objTypes = {longs: String, enums: Number}
const encode = (P, data) => P.encode(data).finish()
const encodeB64 = (...args) => encode(...args).toString('base64')
const decode = (P, data, types = objTypes) => P.toObject(P.decode(data), types)

export const getPasswordRsaPubKey = {
  url: 'https://api.steampowered.com/IAuthenticationService/GetPasswordRSAPublicKey/v1',
  method: 'GET',
  req: (accountName) => encodeB64(P.GetPasswordRsaPublicKeyReq, {accountName}),
  res: (binary) => decode(P.GetPasswordRsaPublicKeyRes, binary)
}

export const beginAuthSessionViaCredentials = {
  url: 'https://api.steampowered.com/IAuthenticationService/BeginAuthSessionViaCredentials/v1',
  method: 'POST',
  req: ({websiteId = 'Community', platformType = 2, gamingDeviceType = null, deviceOSType = null,
         accountName, encryptedPassword, encryptionTimestamp, deviceFriendlyName = null
  }) => encodeB64(P.BeginAuthSessionViaCredentialsReq, {
      accountName, encryptedPassword, encryptionTimestamp,
      rememberLogin: true, persistence: 1, websiteId, deviceDetails: {
        deviceFriendlyName, platformType, osType: deviceOSType, gamingDeviceType: gamingDeviceType
      },
    }),
  res: (binary) => decode(P.BeginAuthSessionViaCredentialsRes, binary)
}

export const updateAuthSessionWithSteamGuardCode = {
  url: 'https://api.steampowered.com/IAuthenticationService/UpdateAuthSessionWithSteamGuardCode/v1',
  method: 'POST',
  req: (codeType, clientId, steamid, code) =>
    encodeB64(P.UpdateAuthSessionWithSteamGuardCodeReq, {
      clientId, steamid, code, codeType
    }),
  res: (binary) => binary
}

export const pollAuthSessionStatus = {
  url: 'https://api.steampowered.com/IAuthenticationService/PollAuthSessionStatus/v1',
  method: 'POST',
  req: (clientId, requestId) => encodeB64(P.PollAuthSessionStatusReq, {clientId, requestId}),
  res: (binary) => decode(P.PollAuthSessionStatusRes, binary)
}