import EOSType from "../enums/EOSType.js";

export const webDetails = (userAgent = defaultWebUA) => {
  return {
    cookies: {},
    requestHeaders: {
      'user-agent': userAgent
    },
    protoRequestHeaders: {
      'Origin': new URL('https://steamcommunity.com'),
      'Referer': new URL('https://steamcommunity.com/')
    },
    protoDetails: {
      websiteId: 'Community',
      platformType: 2,
      gamingDeviceType: null,
      deviceOSType: null,
      deviceFriendlyName: userAgent,
    }
  }
}

//todo: figure a way to randomize UA
export const windowsClientDetails = (country = 'US', language = 'english', userAgent = defaultClientUA) => {
  const qs = {
    IN_CLIENT: 'true',
    WEBSITE_ID: 'Client',
    LOCAL_HOSTNAME: getRandomWindowsDeviceName(),
    WEBAPI_BASE_URL: 'https://api.steampowered.com/',
    STORE_BASE_URL: 'https://store.steampowered.com/',
    USE_POPUPS: 'true',
    DEV_MODE: 'false',
    LANGUAGE: language,
    PLATFORM: 'windows',
    COUNTRY: country,
    LAUNCHER_TYPE: '0',
    IN_LOGIN: 'true'
  }

  const origin = new URL('https://steamloopback.host')
  const referer = new URL('https://steamloopback.host/index.html')
  referer.search = new URLSearchParams(qs)

  return {
    cookies: {},
    requestHeaders: {
      'user-agent': userAgent
    },
    protoRequestHeaders: {
      'Origin': origin,
      'Referer': referer
    },
    protoDetails: {
      websiteId: 'Client',
      platformType: 1,
      gamingDeviceType: 1,
      deviceOSType: EOSType.Win10,
      deviceFriendlyName: userAgent,
    }
  }
}

//todo
export const getHeadersForMobile = () => {
  return {
    cookies: {
      mobileClient: 'ios',
      mobileClientVersion: '777777 3.0.0'
    },
    requestHeaders: {
      'User-Agent': 'Steam%20Mobile/7617469 CFNetwork/1399 Darwin/22.1.0', //this should be encoded?
    },
    protoRequestHeaders: {},
    protoDetails: {
      websiteId: 'Mobile',
      platformType: 3,
      gamingDeviceType: null,
      deviceOSType: EOSType.IOS12,
      deviceFriendlyName: 'iPhone ' + rand(5, 12) //presume
    }
  }
}

function getRandomWindowsDeviceName() {
  let output = 'DESKTOP-';
  for(let i = 0; i < 7; i++) output += ENG_APB[rand(0, ENG_APB.length-1)]
  return output;
}

const ENG_APB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const defaultWebUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
const defaultClientUA = 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US; Valve Steam Client/default/1665786434; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'

const rand = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

windowsClientDetails()