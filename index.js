import Session from './lib/SteamSession.js'
import prompt from "./lib/utils/prompt.js";
import {
  defaultActor, expectConfirmViaDeviceActor, expectNoGuardActor,
  deviceCodePromptActor, emailCodePromptActor, deviceCodeActor
} from "./lib/actors.js";
import {webBrowser as webBrowserEnv, mobileIOS as mobileIOSEnv, clientWindows as clientWindowsEnv} from "./lib/utils/genRequestEnv.js";
import decodeJWT from "./lib/utils/decodeJWT.js";

export default Session
export {
  Session as SteamSession,
  prompt, decodeJWT, webBrowserEnv, mobileIOSEnv, clientWindowsEnv, defaultActor, expectNoGuardActor,
  emailCodePromptActor, deviceCodeActor, deviceCodePromptActor, expectConfirmViaDeviceActor
}