import type {CMsgProtoBufHeader} from "../protobuf/steammessages_base";

export const topNames = ["James","Mary","Robert","Patricia","John","Jennifer","Michael","Linda","David","Elizabeth","William","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Christopher","Lisa","Daniel","Nancy","Matthew","Betty","Anthony","Margaret","Mark","Sandra","Donald","Ashley","Steven","Kimberly","Paul","Emily","Andrew","Donna","Joshua","Michelle","Kenneth","Carol","Kevin","Amanda","Brian","Dorothy","George","Melissa","Timothy","Deborah","Ronald","Stephanie","Edward","Rebecca","Jacob","Kathleen","Gary","Amy","Nicholas","Angela","Eric","Helen","Jerry","Brenda","Gregory","Pamela","Frank","Nicole","Raymond","Samantha","Alexander","Katherine","Larry","Rachel","Dennis","Judith","Tyler","Megan","Peter","Laura","Zachary","Cynthia","Ethan","Virginia","Walter","Victoria","Noah","Kelly","Henry","Diane","Douglas","Ruth","Gerald","Joyce","Aaron","Catherine","Ryan","Maria","Nathan","Evelyn","Bruce","Alice","Craig","Jacqueline","Terry","Lori","Fred","Sydney","Cody","Haley","Wesley","Madison","Dylan","Kaitlyn","Elijah","Sofia","Owen","Brooklyn","Gabriel","Layla","Carter","Avery","Hunter","Zoe","Jaxon","Lillian","Landon","Audrey","Cameron","Natalie","Ian","Violet","Tonya","Bella","Crystal","Aaliyah","Jasmine","Khloe","Morgan","Serenity","Taylor","Penelope","Faith","Nevaeh","Makayla","Kennedy","Peyton","Sadie","Mariah","Jocelyn","Nora","Paisley","Rylee","Raelynn","Brooke","London","Jordyn","Lydia","Hayden","Eliana","Bailey","Ximena","Sienna","Vivian","Mckenzie","Josie","Cecilia","Daleyza","Giselle","Hazel","Kimora","Everly","Miranda","Cheyanne","Iris","Fernanda","Melody","Winter","Angelina","Gwendolyn","Felicity","Holly","Ophelia","Tatum","Karina","Kensley","Carmen","Lucille","Greta","Rosalie","Noelle","Sloane","Rosalind","Yaretzi","Sariyah","Zariyah","Yamileth","Zoie","Zaniyah","Zuri"]
export const macModels = ["MacBook", "MacBook-Air", "MacBook-Pro", "Mac-mini", "iMac", "iMac-Pro", "Mac-Pro"]

export const ENG_APB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const defaultWebUAMacOS = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
export const defaultWebUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
export const defaultWindowsClientUA = 'Mozilla/5.0 (Windows; U; Windows NT 10.0; en-US; Valve Steam Client/default/1665786434; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
export const defaultMacOSClientUA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2_1; Valve Steam Client/default/1679359315) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
export const defaultIOSClientUA = 'Steam%20Mobile/7617469 CFNetwork/1399 Darwin/22.1.0'
export const ipadOSProtoClientUA = 'Steam%20Mobile/7870332 CFNetwork/1404.0.5 Darwin/22.3.0'
export const ipadOSHttpUA = 'Mozilla/5.0 (iPad; CPU OS 16_3 like Mac OS X; Valve Steam App Version/3) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'

export const emptySteamSocketHeaders: CMsgProtoBufHeader = {
    steamid: '0',
    clientSessionid: 0,
    routingAppid: 0,
    jobidSource: '0',
    jobidTarget: '0',
    targetJobName: '',
    seqNum: 0,
    eresult: 0,
    errorMessage: '',
    authAccountFlags: 0,
    tokenSource: 0,
    adminSpoofingUser: false,
    transportError: 0,
    messageid: '0',
    publisherGroupId: 0,
    sysid: 0,
    traceTag: '0',
    webapiKeyId: 0,
    isFromExternalSource: false,
    forwardToSysid: [],
    cmSysid: 0,
    launcherType: 0,
    realm: 1,
    timeoutMs: 0,
    debugSource: '',
    debugSourceStringIndex: 0,
    tokenId: '0',
    routingGc: undefined,
    ip: undefined,
    ipV6: undefined,
    sessionDisposition: undefined
}