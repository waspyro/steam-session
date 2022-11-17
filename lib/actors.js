import prompt from "./utils/prompt.js";

export const defaultActor = () => (actions, guards) => {
  if(guards.noGuard) return
  if(guards.submitEmailCode) return emailCodePromptActor(actions, guards)
  if(guards.submitDeviceCode) return deviceCodePromptActor(actions, guards)
  console.log(Object.keys(guards))
}

export const emailCodePromptActor = async (actions, guards) => {
  if(!guards.submitEmailCode) throw new Error('cannot confirm action with email code. guards: ' + Object.keys(guards))
  const codeRequired = await actions.checkDeviceOrSendEmail()
  if(!codeRequired) return true
  while(true) {
    const code = await prompt.Promise('Write email code sent to ' + guards.submitEmailCode + '. Live blank to resend email: ')
    if(!code) await actions.checkDeviceOrSendEmail()
    else if (await actions.submitEmailCode(code).catch(() => false).then(() => true)) return true
  }
}

export const deviceCodeActor = (codecb) => async (actions, guards) => {
  if(!guards.submitDeviceCode) throw new Error('cannot confirm action with device code. guards: ' + Object.keys(guards))
  await codecb(code => actions.submitDeviceCode(code))
}

export const deviceCodePromptActor = deviceCodeActor(codecb => submitCodeUntilRight('mobile code: ', codecb))

export const expectConfirmViaDeviceActor = (actions, guards) => {
  if(!guards.confirmViaDevice) throw new Error('cannot confirm action on device. guards: ' + Object.keys(guards))
}

export const expectNoGuardActor = (actions, guards) => {
  if(!guards.noGuard) throw new Error('guards are presented: ' + Object.keys(guards))
}

const submitCodeUntilRight = (message, submit) => {
  return function tryToSubmitCode() {
    return prompt.Promise(message)
      .then(submit)
      .catch(({error}) => {
        if(error.code !== 88) throw new Error('unknown error code:' + error.code)
        return tryToSubmitCode()
      })
  }()
}