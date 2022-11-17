import * as P from './proto/handlers.js'

export default class ProtoRequests {
  #session

  constructor(session) {
    this.#session = session
  }

  protoRequest = async (proto, ...data) => {
    const payload = proto.req(...data)
    const opts = {method: proto.method, headers: this.#session.env.protoHeaders}
    const requestBody = {input_protobuf_encoded: payload}
    if(proto.method === 'GET') opts.qs = requestBody
    else opts.fd = requestBody
    const response = await this.#session.request(proto.url, opts)
    const responseData = await response.arrayBuffer().then(arrayBuffer => proto.res(Buffer.from(arrayBuffer)))
    const responseError = {code: response.headers.get('x-eresult')}
    if(responseError.code === undefined || responseError.code === '1') return responseData
    responseError.code = Number(responseError.code)
    throw {error: responseError, data: responseData}
  }

  /**
   *
   * @param login
   * @returns {Promise<*>}
   */
  getPasswordRSA = this.protoRequest.bind(this, P.getPasswordRsaPubKey)

  /**
   *
   * @param {Object} params
   * @param {<String>} params.websiteId
   * @param {<Number>} params.platformType
   * @param {<Number>} params.gamingDeviceType
   * @param {<Number>} params.deviceOSType
   * @param {<String>} params.accountName
   * @param {<String>} params.encryptedPassword
   * @param {<String>} params.encryptionTimestamp
   * @param {<String>} params.deviceFriendlyName
   * @returns {Promise<*>}
   */
  beginAuthSessionViaCredentials = (params) => {
    params.websiteId = this.#session.env.websiteId
    Object.assign(params, this.#session.env.device)
    return this.protoRequest(P.beginAuthSessionViaCredentials, params)
  }

  /**
   *
   * @param clientid
   * @param steamid
   * @param code
   * @return {Promise<any|undefined>}
   */
  submitMobileAuthCode = this.protoRequest.bind(this, P.updateAuthSessionWithSteamGuardCode, 3)

  /**
   *
   * @param clientid
   * @param steamid
   * @param code
   * @return {Promise<any|undefined>}
   */
  submitEmailAuthCode = this.protoRequest.bind(this, P.updateAuthSessionWithSteamGuardCode, 2)

  /**
   *
   * @param clientid
   * @param requestid
   */
  pollAuthSessionStatus = this.protoRequest.bind(this, P.pollAuthSessionStatus)

}