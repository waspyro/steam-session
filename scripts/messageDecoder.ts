import {CMsgProtoBufHeader} from "../src/protobuf/steammessages_base";

const PROTOCOL_VERSION = 65580
const PROTO_MASK = 0x80000000
const msg = ''
const msgbuf = Buffer.from(msg, 'hex')

const parseSocketMessage = (msg: Buffer) => {
  const rawEmsg = msg.readUInt32LE(0)
  const emsg = rawEmsg & ~PROTO_MASK
  const headerLength = msg.readUInt32LE(4)
  const headerBuffer = msg.subarray(8, 8 + headerLength)
  const header = CMsgProtoBufHeader.decode(headerBuffer)
  const dataBuffer = msg.subarray(8 + headerLength) as Buffer
  return [emsg, header, dataBuffer]
}

// const [emsg, header, dataBuffer] = parseSocketMessage(msgbuf)