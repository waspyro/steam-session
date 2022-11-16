import {Key as RSAKey} from "node-bignumber/lib/rsa/rsa.js";
import {hex2b64} from "node-bignumber";

export default (publickeyMod, publickeyExp, password) => {
  const key = new RSAKey()
  key.setPublic(publickeyMod, publickeyExp)
  return hex2b64(key.encrypt(password))
}