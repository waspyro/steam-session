/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EJSRegisterMethodType {
  k_EJSRegisterMethodType_Invalid = 0,
  k_EJSRegisterMethodType_Function = 1,
  k_EJSRegisterMethodType_Callback = 2,
  k_EJSRegisterMethodType_Promise = 3,
  UNRECOGNIZED = -1,
}

export function eJSRegisterMethodTypeFromJSON(object: any): EJSRegisterMethodType {
  switch (object) {
    case 0:
    case "k_EJSRegisterMethodType_Invalid":
      return EJSRegisterMethodType.k_EJSRegisterMethodType_Invalid;
    case 1:
    case "k_EJSRegisterMethodType_Function":
      return EJSRegisterMethodType.k_EJSRegisterMethodType_Function;
    case 2:
    case "k_EJSRegisterMethodType_Callback":
      return EJSRegisterMethodType.k_EJSRegisterMethodType_Callback;
    case 3:
    case "k_EJSRegisterMethodType_Promise":
      return EJSRegisterMethodType.k_EJSRegisterMethodType_Promise;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EJSRegisterMethodType.UNRECOGNIZED;
  }
}

export function eJSRegisterMethodTypeToJSON(object: EJSRegisterMethodType): string {
  switch (object) {
    case EJSRegisterMethodType.k_EJSRegisterMethodType_Invalid:
      return "k_EJSRegisterMethodType_Invalid";
    case EJSRegisterMethodType.k_EJSRegisterMethodType_Function:
      return "k_EJSRegisterMethodType_Function";
    case EJSRegisterMethodType.k_EJSRegisterMethodType_Callback:
      return "k_EJSRegisterMethodType_Callback";
    case EJSRegisterMethodType.k_EJSRegisterMethodType_Promise:
      return "k_EJSRegisterMethodType_Promise";
    case EJSRegisterMethodType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CMsgKeyUp {
  browserHandle: number;
  keyCode: number;
  modifiers: number;
  nativeKeyCode: number;
}

export interface CMsgKeyDown {
  browserHandle: number;
  keyCode: number;
  modifiers: number;
  isSystemKey: boolean;
  nativeKeyCode: number;
}

export interface CMsgKeyChar {
  browserHandle: number;
  unichar: number;
  modifiers: number;
  keyCode: number;
  nativeKeyCode: number;
}

export interface CMsgMouseDown {
  browserHandle: number;
  mouseButton: number;
  modifiers: number;
}

export interface CMsgMouseUp {
  browserHandle: number;
  mouseButton: number;
  modifiers: number;
  isOffPanel: boolean;
  x: number;
  y: number;
}

export interface CMsgMouseDblClick {
  browserHandle: number;
  mouseButton: number;
  modifiers: number;
}

export interface CMsgMouseWheel {
  browserHandle: number;
  deltax: number;
  deltay: number;
  modifiers: number;
}

export interface CMsgMouseMove {
  browserHandle: number;
  x: number;
  y: number;
  modifiers: number;
}

export interface CMsgMouseLeave {
  browserHandle: number;
}

export interface CMsgBrowserCreate {
  requestId: number;
  useragent: string;
  userCss: string;
  nativeDropdowns: boolean;
  dpiScaling: number;
  offscreen: boolean;
  initialWidth: number;
  initialHeight: number;
  windowIcon: string;
  borderless: boolean;
  vroverlayKey: string;
  browserType: number;
  initialTop: number;
  initialLeft: number;
  onlyAllowTrustedPopups: boolean;
  initialUrl: string;
  hwndParent: number;
  creationFlags: number;
}

export interface CMsgBrowserCreateResponse {
  browserHandle: number;
  requestId: number;
}

export interface CMsgBrowserRemove {
  browserHandle: number;
}

export interface CMsgSetLocalFileRequestMapping {
  browserHandle: number;
  requestUrl: string;
  defaultLocalPath: string;
  routes: CMsgSetLocalFileRequestMapping_AdditionalRoute[];
}

export interface CMsgSetLocalFileRequestMapping_AdditionalRoute {
  relativeUrl: string;
  localPath: string;
  allowedExtensions: string;
  urlRewrite: boolean;
}

export interface CMsgBrowserErrorStrings {
  browserHandle: number;
  title: string;
  header: string;
  cacheMiss: string;
  badUrl: string;
  connectionProblem: string;
  proxyProblem: string;
  unknown: string;
}

export interface CMsgBrowserSetName {
  browserHandle: number;
  name: string;
}

export interface CMsgBrowserSize {
  browserHandle: number;
  width: number;
  height: number;
}

export interface CMsgBrowserSetMinSize {
  browserHandle: number;
  width: number;
  height: number;
}

export interface CMsgBrowserPosition {
  browserHandle: number;
  x: number;
  y: number;
  xLocal: number;
  yLocal: number;
}

export interface CMsgBrowserResized {
  browserHandle: number;
  x: number;
  y: number;
  width: number;
  height: number;
  dpiHorizontal: number;
  dpiVertical: number;
  displayName: string;
}

export interface CMsgPostURL {
  browserHandle: number;
  url: string;
  post: string;
  pageserial: number;
}

export interface CMsgAddHeader {
  browserHandle: number;
  key: string;
  value: string;
}

export interface CMsgStopLoad {
  browserHandle: number;
}

export interface CMsgReload {
  browserHandle: number;
}

export interface CMsgGoForward {
  browserHandle: number;
}

export interface CMsgGoBack {
  browserHandle: number;
}

export interface CMsgWasHidden {
  browserHandle: number;
  hidden: boolean;
}

export interface CMsgSetWindowVisibility {
  browserHandle: number;
  visible: boolean;
}

export interface CMsgClearHistory {
  browserHandle: number;
}

export interface CMsgClearAllBrowsingData {
  browserHandle: number;
}

export interface CMsgCopy {
  browserHandle: number;
}

export interface CMsgPaste {
  browserHandle: number;
}

export interface CMsgExecuteJavaScript {
  browserHandle: number;
  script: string;
}

export interface CMsgSetFocus {
  browserHandle: number;
  focus: boolean;
}

export interface CMsgHorizontalScrollBarSize {
  browserHandle: number;
}

export interface CMsgHorizontalScrollBarSizeResponse {
  browserHandle: number;
  scrollMax: number;
  scroll: number;
  zoom: number;
  visible: boolean;
  pageSize: number;
}

export interface CMsgVerticalScrollBarSize {
  browserHandle: number;
}

export interface CMsgVerticalScrollBarSizeResponse {
  browserHandle: number;
  scrollMax: number;
  scroll: number;
  zoom: number;
  visible: boolean;
  pageSize: number;
}

export interface CMsgFind {
  browserHandle: number;
  find: string;
  infind: boolean;
  reverse: boolean;
}

export interface CMsgStopFind {
  browserHandle: number;
}

export interface CMsgSetHorizontalScroll {
  browserHandle: number;
  scroll: number;
}

export interface CMsgSetVerticalScroll {
  browserHandle: number;
  scroll: number;
}

export interface CMsgSetZoomLevel {
  browserHandle: number;
  zoom: number;
}

export interface CMsgViewSource {
  browserHandle: number;
}

export interface CMsgBrowserReady {
  browserHandle: number;
  vrOverlayKey: string;
  hwndBrowser: number;
}

export interface CMsgURLChanged {
  browserHandle: number;
  url: string;
  postData: string;
  bIsRedirect: boolean;
  pagetitle: string;
  bNewNavigation: boolean;
}

export interface CHistoryEntry {
  url: string;
}

export interface CMsgHistoryChanged {
  browserHandle: number;
  index: number;
  entries: CHistoryEntry[];
}

export interface CMsgLoadError {
  browserHandle: number;
  errorCode: number;
  url: string;
  errorDescription: string;
}

export interface CHTMLHeader {
  key: string;
  value: string;
}

export interface CHTMLPageSecurityInfo {
  bIsSecure: boolean;
  bHasCertError: boolean;
  issuerName: string;
  certName: string;
  certExpiry: number;
  nCertBits: number;
  bIsEVCert: boolean;
}

export interface CMsgFinishedRequest {
  browserHandle: number;
  url: string;
  pageTitle: string;
}

export interface CMsgLoadedRequest {
  browserHandle: number;
  url: string;
  pageTitle: string;
  headers: CHTMLHeader[];
}

export interface CMsgPageSecurity {
  browserHandle: number;
  url: string;
  securityInfo: CHTMLPageSecurityInfo | undefined;
}

export interface CMsgStartRequest {
  browserHandle: number;
  url: string;
  target: string;
  postData: string;
  bIsRedirect: boolean;
}

export interface CMsgStartRequestResponse {
  browserHandle: number;
  bAllow: boolean;
}

export interface CMsgShowPopup {
  browserHandle: number;
}

export interface CMsgHidePopup {
  browserHandle: number;
}

export interface CMsgSizePopup {
  browserHandle: number;
  x: number;
  y: number;
  wide: number;
  tall: number;
}

export interface CMsgOpenNewTab {
  browserHandle: number;
  url: string;
  bForeground: boolean;
}

export interface CMsgPopupHTMLWindow {
  browserHandle: number;
  url: string;
  x: number;
  y: number;
  wide: number;
  tall: number;
  popupIndex: number;
  trustedCreator: boolean;
  name: string;
  hwnd: number;
  parentPopupIndex: number;
}

export interface CMsgPopupHTMLWindowResponse {
  browserHandle: number;
  bAllow: boolean;
}

export interface CMsgSetHTMLTitle {
  browserHandle: number;
  title: string;
}

export interface CMsgLoadingResource {
  browserHandle: number;
  url: string;
}

export interface CMsgStatusText {
  browserHandle: number;
  text: string;
}

export interface CMsgSetCursor {
  browserHandle: number;
  cursor: number;
  customData: Buffer;
  wide: number;
  tall: number;
  xhotspot: number;
  yhotspot: number;
}

export interface CMsgFileLoadDialog {
  browserHandle: number;
  title: string;
  initialFile: string;
  acceptTypes: string[];
  isSave: boolean;
}

export interface CMsgFileLoadDialogResponse {
  browserHandle: number;
  files: string[];
}

export interface CMsgShowToolTip {
  browserHandle: number;
  text: string;
}

export interface CMsgUpdateToolTip {
  browserHandle: number;
  text: string;
}

export interface CMsgHideToolTip {
  browserHandle: number;
}

export interface CMsgSearchResults {
  browserHandle: number;
  activeMatch: number;
  results: number;
}

export interface CMsgClose {
  browserHandle: number;
}

export interface CMsgSetSharedPaintBuffers {
  browserHandle: number;
  wide: number;
  tall: number;
  sourcePid: number;
  sourceHandle: number;
  handle: number;
}

export interface CMsgAckSharedPaintBuffers {
  browserHandle: number;
}

export interface CMsgNeedsPaint {
  browserHandle: number;
  scrollx: number;
  scrolly: number;
  pagescale: number;
  pageserial: number;
  avgFrameMs: number;
  stddevSumFrameMs: number;
  longFrameMs: number;
}

export interface CMsgComboNeedsPaint {
  browserHandle: number;
  rgba: number;
  comboboxWide: number;
  comboboxTall: number;
  sharedMemoryHandle: number;
  sharedMemorySize: number;
}

export interface CMsgNeedsSharedTexturePaint {
  browserHandle: number;
  shareHandle: number;
  width: number;
  height: number;
  scrollx: number;
  scrolly: number;
  pagescale: number;
  pageserial: number;
}

export interface CMsgGameOverlayTexturePaint {
  browserHandle: number;
  width: number;
  height: number;
  scrollx: number;
  scrolly: number;
  pagescale: number;
  pageserial: number;
}

export interface CMsgGetZoom {
  browserHandle: number;
}

export interface CMsgGetZoomResponse {
  browserHandle: number;
  zoom: number;
}

export interface CMsgLinkAtPosition {
  browserHandle: number;
  x: number;
  y: number;
}

export interface CMsgLinkAtPositionResponse {
  browserHandle: number;
  x: number;
  y: number;
  url: string;
  blivelink: boolean;
  binput: boolean;
}

export interface CMsgZoomToElementAtPosition {
  browserHandle: number;
  x: number;
  y: number;
}

export interface CMsgZoomToElementAtPositionResponse {
  browserHandle: number;
  scale: number;
  duration: number;
}

export interface CMsgScalePageToValue {
  browserHandle: number;
  scale: number;
  x: number;
  y: number;
}

export interface CMsgForcePopupsToDirectHWND {
  browserHandle: number;
  forceDirectHwndPopups: boolean;
}

export interface CMsgScalePageToValueResponse {
  browserHandle: number;
  zoom: number;
}

export interface CMsgSavePageToJPEG {
  browserHandle: number;
  url: string;
  filename: string;
  width: number;
  height: number;
}

export interface CMsgSavePageToJPEGResponse {
  browserHandle: number;
  url: string;
  filename: string;
}

export interface CMsgJSAlert {
  browserHandle: number;
  message: string;
}

export interface CMsgJSConfirm {
  browserHandle: number;
  message: string;
}

export interface CMsgJSDialogResponse {
  browserHandle: number;
  result: boolean;
}

export interface CMsgCanGoBackAndForward {
  browserHandle: number;
  bgoback: boolean;
  bgoforward: boolean;
}

export interface CMsgOpenSteamURL {
  browserHandle: number;
  url: string;
  referrer: string;
}

export interface CMsgSetCookie {
  key: string;
  value: string;
  path: string;
  host: string;
  expires: number;
  secure: boolean;
  httponly: boolean;
}

export interface CMsgSetTargetFrameRate {
  browserHandle: number;
  nTargetFrameRate: number;
}

export interface CMsgPauseRepaint {
  browserHandle: number;
}

export interface CMsgFullRepaint {
  browserHandle: number;
}

export interface CMsgRequestFullScreen {
  browserHandle: number;
}

export interface CMsgExitFullScreen {
  browserHandle: number;
}

export interface CMsgToggleFindInPageDialog {
  browserHandle: number;
}

export interface CMsgSetPIDShuttingDown {
  browserHandle: number;
}

export interface CMsgDisableBackgroundThrottling {
  browserHandle: number;
}

export interface CMsgAckPIDShuttingDown {
  browserHandle: number;
}

export interface CMsgGetCookiesForURL {
  browserHandle: number;
  url: string;
}

export interface CCookie {
  name: string;
  value: string;
  domain: string;
  path: string;
}

export interface CMsgGetCookiesForURLResponse {
  browserHandle: number;
  url: string;
  cookies: CCookie[];
}

export interface CMsgNodeHasFocus {
  browserHandle: number;
  bInput: boolean;
  name: string;
  elementtagname: string;
  searchbuttontext: string;
  bHasMultipleInputs: boolean;
  inputType: string;
  bIsMainFrame: boolean;
}

export interface CMsgZoomToFocusedElement {
  browserHandle: number;
}

export interface CMsgCloseFullScreenFlashIfOpen {
  browserHandle: number;
}

export interface CMsgPauseFullScreenFlashMovieIfOpen {
  browserHandle: number;
}

export interface CMsgFocusedNodeText {
  browserHandle: number;
}

export interface CMsgFocusedNodeTextResponse {
  browserHandle: number;
  value: string;
}

export interface CMsgBuildID {
  buildId: number;
}

export interface CMsgOpenDevTools {
  browserHandle: number;
}

export interface CMsgCloseDevTools {
  browserHandle: number;
}

export interface CMsgUnlockH264 {
  browserHandle: number;
  unlockCode: string;
}

export interface CMsgScreenInformationChanged {
  browserHandle: number;
  overrideWidth: number;
  overrideHeight: number;
  monitorLeft: number;
  monitorTop: number;
  monitorRight: number;
  monitorBottom: number;
  usableLeft: number;
  usableTop: number;
  usableRight: number;
  usableBottom: number;
}

export interface CMsgClearAllCookies {
  browserHandle: number;
}

export interface CMsgScreenDPI {
  browserHandle: number;
  dpiScaling: number;
}

export interface CMsgAckScreenDPI {
  browserHandle: number;
}

export interface CMsgAuthedSteamDomains {
  domains: string[];
}

export interface CMsgSteamAuthNeeded {
  filler: boolean;
}

export interface CMsgSteamAuthCookiesSet {
  success: boolean;
}

export interface CMsgJSRegisterMethod {
  browserHandle: number;
  name: string;
  methodType: EJSRegisterMethodType;
}

export interface CMsgJSValue {
  boolValue: boolean;
  intValue: number;
  uintValue: number;
  doubleValue: number;
  stringValue: string;
  functionHandle: number;
  bytesValue: Buffer;
  isArray: boolean;
  arrayValues: CMsgJSValue[];
  isObject: boolean;
  objectProperties: CMsgJSValue_JSObjectProperty[];
}

export interface CMsgJSValue_JSObjectProperty {
  name: string;
  value: CMsgJSValue | undefined;
}

export interface CMsgJSMethodCall {
  browserHandle: number;
  owningBrowserHandle: number;
  name: string;
  arguments: CMsgJSValue[];
}

export interface CMsgJSExecuteCallback {
  browserHandle: number;
  owningBrowserHandle: number;
  functionHandle: number;
  arguments: CMsgJSValue[];
}

export interface CMsgJSReleaseCallback {
  browserHandle: number;
  owningBrowserHandle: number;
  functionHandle: number;
}

export interface CMsgJSRaiseException {
  browserHandle: number;
  owningBrowserHandle: number;
  exception: string;
}

export interface CMsgLoadLocalization {
  browserHandle: number;
  localizationPath: string;
  language: string;
}

export interface CMsgNotifyUserActivation {
  browserHandle: number;
}

export interface CMsgSetNetFakeLocalSystemState {
  state: number;
}

export interface CMsgJumpListLink {
  displayName: string;
  urlLink: string;
  iconPath: string;
}

export interface CMSgJumpListMRUApp {
  appid: number;
  displayName: string;
  urlLink: string;
  iconPath: string;
}

export interface CMsgSetJumpList {
  steamPath: string;
  mruTitle: string;
  apps: CMSgJumpListMRUApp[];
  links: CMsgJumpListLink[];
}

export interface CMsgSetGameOverlayTargetPIDs {
  browserHandle: number;
  targetPid: number[];
}

export interface CMsgGameOverlayTargetTextureID {
  browserHandle: number;
  targetPid: number;
  textureHandle: number;
}

export interface CMsgDraggableRegionsChanged {
  browserHandle: number;
  rects: CMsgDraggableRegionsChanged_DraggableRects[];
}

export interface CMsgDraggableRegionsChanged_DraggableRects {
  x: number;
  y: number;
  width: number;
  height: number;
  draggable: boolean;
}

export interface CMsgResizeGripChanged {
  browserHandle: number;
  width: number;
  height: number;
}

export interface CMsgSetWindowPosition {
  browserHandle: number;
  x: number;
  y: number;
  width: number;
  height: number;
  minWidth: number;
  minHeight: number;
}

export interface CMsgShowWindow {
  browserHandle: number;
}

export interface CMsgHideWindow {
  browserHandle: number;
}

export interface CMsgBringWindowToFront {
  browserHandle: number;
}

export interface CMsgSetForegroundWindow {
  browserHandle: number;
}

export interface CMsgMaximizeRestoreWindow {
  browserHandle: number;
}

export interface CMsgMinimizeWindow {
  browserHandle: number;
}

export interface CMsgShowBrowserContextMenu {
  browserHandle: number;
  customCommands: CMsgShowBrowserContextMenu_ContextCommand[];
}

export interface CMsgShowBrowserContextMenu_ContextCommand {
  id: number;
  label: string;
}

export interface CMsgHandleContextMenuCommand {
  browserHandle: number;
  commandId: number;
}

export interface CMsgTouchGesture {
  browserHandle: number;
  id: number;
  gesture: number;
  x: number;
  y: number;
  width: number;
  height: number;
  tapCount: number;
  pinchScale: number;
}

export interface CMsgSetTouchGesturesToCancel {
  browserHandle: number;
  gestures: number[];
}

export interface CMsgImeSetComposition {
  browserHandle: number;
  text: string;
}

export interface CMsgImeCommitText {
  browserHandle: number;
  text: string;
}

export interface CMsgImeCancelComposition {
  browserHandle: number;
}

export interface CMsgImeCompositionRangeChanged {
  browserHandle: number;
  x: number;
  y: number;
}

export interface CMsgInspectElement {
  browserHandle: number;
  x: number;
  y: number;
}

export interface CMsgDisableF5 {
  browserHandle: number;
  disable: boolean;
}

export interface CMsgStartDownload {
  browserHandle: number;
  url: string;
}

export interface CMsgSetTopWindow {
  browserHandle: number;
}

export interface CMsgBrowserViewPostMessageToParentRequest {
  browserHandle: number;
  message: string;
  args: string;
  requestingUrl: string;
}

export interface CMsgBlockedRequest {
  browserHandle: number;
  url: string;
}

export interface CMsgBrowserFocusChanged {
  browserHandle: number;
  focused: boolean;
}

export interface CMsgSetProtocolBlockList {
  browserHandle: number;
  list: string;
}

export interface CMsgSetForceDeviceScaleFactors {
  dpiScale: number;
  browserScale: number;
}

export interface CMsgSetUIMode {
  uiMode: number;
}

export interface CMsgPopupCreated {
  browserHandle: number;
}

function createBaseCMsgKeyUp(): CMsgKeyUp {
  return { browserHandle: 0, keyCode: 0, modifiers: 0, nativeKeyCode: 0 };
}

export const CMsgKeyUp = {
  encode(message: CMsgKeyUp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.keyCode !== 0) {
      writer.uint32(16).uint32(message.keyCode);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    if (message.nativeKeyCode !== 0) {
      writer.uint32(32).uint32(message.nativeKeyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKeyUp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKeyUp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.keyCode = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        case 4:
          message.nativeKeyCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgKeyUp {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      keyCode: isSet(object.keyCode) ? Number(object.keyCode) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
      nativeKeyCode: isSet(object.nativeKeyCode) ? Number(object.nativeKeyCode) : 0,
    };
  },

  toJSON(message: CMsgKeyUp): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.keyCode !== undefined && (obj.keyCode = Math.round(message.keyCode));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    message.nativeKeyCode !== undefined && (obj.nativeKeyCode = Math.round(message.nativeKeyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgKeyUp>, I>>(base?: I): CMsgKeyUp {
    return CMsgKeyUp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgKeyUp>, I>>(object: I): CMsgKeyUp {
    const message = createBaseCMsgKeyUp();
    message.browserHandle = object.browserHandle ?? 0;
    message.keyCode = object.keyCode ?? 0;
    message.modifiers = object.modifiers ?? 0;
    message.nativeKeyCode = object.nativeKeyCode ?? 0;
    return message;
  },
};

function createBaseCMsgKeyDown(): CMsgKeyDown {
  return { browserHandle: 0, keyCode: 0, modifiers: 0, isSystemKey: false, nativeKeyCode: 0 };
}

export const CMsgKeyDown = {
  encode(message: CMsgKeyDown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.keyCode !== 0) {
      writer.uint32(16).uint32(message.keyCode);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    if (message.isSystemKey === true) {
      writer.uint32(32).bool(message.isSystemKey);
    }
    if (message.nativeKeyCode !== 0) {
      writer.uint32(40).uint32(message.nativeKeyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKeyDown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKeyDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.keyCode = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        case 4:
          message.isSystemKey = reader.bool();
          break;
        case 5:
          message.nativeKeyCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgKeyDown {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      keyCode: isSet(object.keyCode) ? Number(object.keyCode) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
      isSystemKey: isSet(object.isSystemKey) ? Boolean(object.isSystemKey) : false,
      nativeKeyCode: isSet(object.nativeKeyCode) ? Number(object.nativeKeyCode) : 0,
    };
  },

  toJSON(message: CMsgKeyDown): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.keyCode !== undefined && (obj.keyCode = Math.round(message.keyCode));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    message.isSystemKey !== undefined && (obj.isSystemKey = message.isSystemKey);
    message.nativeKeyCode !== undefined && (obj.nativeKeyCode = Math.round(message.nativeKeyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgKeyDown>, I>>(base?: I): CMsgKeyDown {
    return CMsgKeyDown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgKeyDown>, I>>(object: I): CMsgKeyDown {
    const message = createBaseCMsgKeyDown();
    message.browserHandle = object.browserHandle ?? 0;
    message.keyCode = object.keyCode ?? 0;
    message.modifiers = object.modifiers ?? 0;
    message.isSystemKey = object.isSystemKey ?? false;
    message.nativeKeyCode = object.nativeKeyCode ?? 0;
    return message;
  },
};

function createBaseCMsgKeyChar(): CMsgKeyChar {
  return { browserHandle: 0, unichar: 0, modifiers: 0, keyCode: 0, nativeKeyCode: 0 };
}

export const CMsgKeyChar = {
  encode(message: CMsgKeyChar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.unichar !== 0) {
      writer.uint32(16).uint32(message.unichar);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    if (message.keyCode !== 0) {
      writer.uint32(32).uint32(message.keyCode);
    }
    if (message.nativeKeyCode !== 0) {
      writer.uint32(40).uint32(message.nativeKeyCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgKeyChar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgKeyChar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.unichar = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        case 4:
          message.keyCode = reader.uint32();
          break;
        case 5:
          message.nativeKeyCode = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgKeyChar {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      unichar: isSet(object.unichar) ? Number(object.unichar) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
      keyCode: isSet(object.keyCode) ? Number(object.keyCode) : 0,
      nativeKeyCode: isSet(object.nativeKeyCode) ? Number(object.nativeKeyCode) : 0,
    };
  },

  toJSON(message: CMsgKeyChar): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.unichar !== undefined && (obj.unichar = Math.round(message.unichar));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    message.keyCode !== undefined && (obj.keyCode = Math.round(message.keyCode));
    message.nativeKeyCode !== undefined && (obj.nativeKeyCode = Math.round(message.nativeKeyCode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgKeyChar>, I>>(base?: I): CMsgKeyChar {
    return CMsgKeyChar.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgKeyChar>, I>>(object: I): CMsgKeyChar {
    const message = createBaseCMsgKeyChar();
    message.browserHandle = object.browserHandle ?? 0;
    message.unichar = object.unichar ?? 0;
    message.modifiers = object.modifiers ?? 0;
    message.keyCode = object.keyCode ?? 0;
    message.nativeKeyCode = object.nativeKeyCode ?? 0;
    return message;
  },
};

function createBaseCMsgMouseDown(): CMsgMouseDown {
  return { browserHandle: 0, mouseButton: 0, modifiers: 0 };
}

export const CMsgMouseDown = {
  encode(message: CMsgMouseDown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.mouseButton !== 0) {
      writer.uint32(16).uint32(message.mouseButton);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseDown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.mouseButton = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseDown {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      mouseButton: isSet(object.mouseButton) ? Number(object.mouseButton) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
    };
  },

  toJSON(message: CMsgMouseDown): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.mouseButton !== undefined && (obj.mouseButton = Math.round(message.mouseButton));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseDown>, I>>(base?: I): CMsgMouseDown {
    return CMsgMouseDown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseDown>, I>>(object: I): CMsgMouseDown {
    const message = createBaseCMsgMouseDown();
    message.browserHandle = object.browserHandle ?? 0;
    message.mouseButton = object.mouseButton ?? 0;
    message.modifiers = object.modifiers ?? 0;
    return message;
  },
};

function createBaseCMsgMouseUp(): CMsgMouseUp {
  return { browserHandle: 0, mouseButton: 0, modifiers: 0, isOffPanel: false, x: 0, y: 0 };
}

export const CMsgMouseUp = {
  encode(message: CMsgMouseUp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.mouseButton !== 0) {
      writer.uint32(16).uint32(message.mouseButton);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    if (message.isOffPanel === true) {
      writer.uint32(32).bool(message.isOffPanel);
    }
    if (message.x !== 0) {
      writer.uint32(40).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(48).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseUp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseUp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.mouseButton = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        case 4:
          message.isOffPanel = reader.bool();
          break;
        case 5:
          message.x = reader.int32();
          break;
        case 6:
          message.y = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseUp {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      mouseButton: isSet(object.mouseButton) ? Number(object.mouseButton) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
      isOffPanel: isSet(object.isOffPanel) ? Boolean(object.isOffPanel) : false,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgMouseUp): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.mouseButton !== undefined && (obj.mouseButton = Math.round(message.mouseButton));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    message.isOffPanel !== undefined && (obj.isOffPanel = message.isOffPanel);
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseUp>, I>>(base?: I): CMsgMouseUp {
    return CMsgMouseUp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseUp>, I>>(object: I): CMsgMouseUp {
    const message = createBaseCMsgMouseUp();
    message.browserHandle = object.browserHandle ?? 0;
    message.mouseButton = object.mouseButton ?? 0;
    message.modifiers = object.modifiers ?? 0;
    message.isOffPanel = object.isOffPanel ?? false;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgMouseDblClick(): CMsgMouseDblClick {
  return { browserHandle: 0, mouseButton: 0, modifiers: 0 };
}

export const CMsgMouseDblClick = {
  encode(message: CMsgMouseDblClick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.mouseButton !== 0) {
      writer.uint32(16).uint32(message.mouseButton);
    }
    if (message.modifiers !== 0) {
      writer.uint32(24).uint32(message.modifiers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseDblClick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseDblClick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.mouseButton = reader.uint32();
          break;
        case 3:
          message.modifiers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseDblClick {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      mouseButton: isSet(object.mouseButton) ? Number(object.mouseButton) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
    };
  },

  toJSON(message: CMsgMouseDblClick): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.mouseButton !== undefined && (obj.mouseButton = Math.round(message.mouseButton));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseDblClick>, I>>(base?: I): CMsgMouseDblClick {
    return CMsgMouseDblClick.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseDblClick>, I>>(object: I): CMsgMouseDblClick {
    const message = createBaseCMsgMouseDblClick();
    message.browserHandle = object.browserHandle ?? 0;
    message.mouseButton = object.mouseButton ?? 0;
    message.modifiers = object.modifiers ?? 0;
    return message;
  },
};

function createBaseCMsgMouseWheel(): CMsgMouseWheel {
  return { browserHandle: 0, deltax: 0, deltay: 0, modifiers: 0 };
}

export const CMsgMouseWheel = {
  encode(message: CMsgMouseWheel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.deltax !== 0) {
      writer.uint32(16).int32(message.deltax);
    }
    if (message.deltay !== 0) {
      writer.uint32(24).int32(message.deltay);
    }
    if (message.modifiers !== 0) {
      writer.uint32(32).uint32(message.modifiers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseWheel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseWheel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.deltax = reader.int32();
          break;
        case 3:
          message.deltay = reader.int32();
          break;
        case 4:
          message.modifiers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseWheel {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      deltax: isSet(object.deltax) ? Number(object.deltax) : 0,
      deltay: isSet(object.deltay) ? Number(object.deltay) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
    };
  },

  toJSON(message: CMsgMouseWheel): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.deltax !== undefined && (obj.deltax = Math.round(message.deltax));
    message.deltay !== undefined && (obj.deltay = Math.round(message.deltay));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseWheel>, I>>(base?: I): CMsgMouseWheel {
    return CMsgMouseWheel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseWheel>, I>>(object: I): CMsgMouseWheel {
    const message = createBaseCMsgMouseWheel();
    message.browserHandle = object.browserHandle ?? 0;
    message.deltax = object.deltax ?? 0;
    message.deltay = object.deltay ?? 0;
    message.modifiers = object.modifiers ?? 0;
    return message;
  },
};

function createBaseCMsgMouseMove(): CMsgMouseMove {
  return { browserHandle: 0, x: 0, y: 0, modifiers: 0 };
}

export const CMsgMouseMove = {
  encode(message: CMsgMouseMove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.modifiers !== 0) {
      writer.uint32(32).uint32(message.modifiers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.modifiers = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseMove {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      modifiers: isSet(object.modifiers) ? Number(object.modifiers) : 0,
    };
  },

  toJSON(message: CMsgMouseMove): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.modifiers !== undefined && (obj.modifiers = Math.round(message.modifiers));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseMove>, I>>(base?: I): CMsgMouseMove {
    return CMsgMouseMove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseMove>, I>>(object: I): CMsgMouseMove {
    const message = createBaseCMsgMouseMove();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.modifiers = object.modifiers ?? 0;
    return message;
  },
};

function createBaseCMsgMouseLeave(): CMsgMouseLeave {
  return { browserHandle: 0 };
}

export const CMsgMouseLeave = {
  encode(message: CMsgMouseLeave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMouseLeave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMouseLeave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMouseLeave {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgMouseLeave): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMouseLeave>, I>>(base?: I): CMsgMouseLeave {
    return CMsgMouseLeave.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMouseLeave>, I>>(object: I): CMsgMouseLeave {
    const message = createBaseCMsgMouseLeave();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserCreate(): CMsgBrowserCreate {
  return {
    requestId: 0,
    useragent: "",
    userCss: "",
    nativeDropdowns: false,
    dpiScaling: 0,
    offscreen: false,
    initialWidth: 0,
    initialHeight: 0,
    windowIcon: "",
    borderless: false,
    vroverlayKey: "",
    browserType: 0,
    initialTop: 0,
    initialLeft: 0,
    onlyAllowTrustedPopups: false,
    initialUrl: "",
    hwndParent: 0,
    creationFlags: 0,
  };
}

export const CMsgBrowserCreate = {
  encode(message: CMsgBrowserCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).uint32(message.requestId);
    }
    if (message.useragent !== "") {
      writer.uint32(26).string(message.useragent);
    }
    if (message.userCss !== "") {
      writer.uint32(42).string(message.userCss);
    }
    if (message.nativeDropdowns === true) {
      writer.uint32(48).bool(message.nativeDropdowns);
    }
    if (message.dpiScaling !== 0) {
      writer.uint32(61).float(message.dpiScaling);
    }
    if (message.offscreen === true) {
      writer.uint32(64).bool(message.offscreen);
    }
    if (message.initialWidth !== 0) {
      writer.uint32(72).uint32(message.initialWidth);
    }
    if (message.initialHeight !== 0) {
      writer.uint32(80).uint32(message.initialHeight);
    }
    if (message.windowIcon !== "") {
      writer.uint32(90).string(message.windowIcon);
    }
    if (message.borderless === true) {
      writer.uint32(96).bool(message.borderless);
    }
    if (message.vroverlayKey !== "") {
      writer.uint32(106).string(message.vroverlayKey);
    }
    if (message.browserType !== 0) {
      writer.uint32(112).uint32(message.browserType);
    }
    if (message.initialTop !== 0) {
      writer.uint32(120).int32(message.initialTop);
    }
    if (message.initialLeft !== 0) {
      writer.uint32(128).int32(message.initialLeft);
    }
    if (message.onlyAllowTrustedPopups === true) {
      writer.uint32(136).bool(message.onlyAllowTrustedPopups);
    }
    if (message.initialUrl !== "") {
      writer.uint32(146).string(message.initialUrl);
    }
    if (message.hwndParent !== 0) {
      writer.uint32(153).fixed64(message.hwndParent);
    }
    if (message.creationFlags !== 0) {
      writer.uint32(160).uint32(message.creationFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.uint32();
          break;
        case 3:
          message.useragent = reader.string();
          break;
        case 5:
          message.userCss = reader.string();
          break;
        case 6:
          message.nativeDropdowns = reader.bool();
          break;
        case 7:
          message.dpiScaling = reader.float();
          break;
        case 8:
          message.offscreen = reader.bool();
          break;
        case 9:
          message.initialWidth = reader.uint32();
          break;
        case 10:
          message.initialHeight = reader.uint32();
          break;
        case 11:
          message.windowIcon = reader.string();
          break;
        case 12:
          message.borderless = reader.bool();
          break;
        case 13:
          message.vroverlayKey = reader.string();
          break;
        case 14:
          message.browserType = reader.uint32();
          break;
        case 15:
          message.initialTop = reader.int32();
          break;
        case 16:
          message.initialLeft = reader.int32();
          break;
        case 17:
          message.onlyAllowTrustedPopups = reader.bool();
          break;
        case 18:
          message.initialUrl = reader.string();
          break;
        case 19:
          message.hwndParent = longToNumber(reader.fixed64() as Long);
          break;
        case 20:
          message.creationFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserCreate {
    return {
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
      useragent: isSet(object.useragent) ? String(object.useragent) : "",
      userCss: isSet(object.userCss) ? String(object.userCss) : "",
      nativeDropdowns: isSet(object.nativeDropdowns) ? Boolean(object.nativeDropdowns) : false,
      dpiScaling: isSet(object.dpiScaling) ? Number(object.dpiScaling) : 0,
      offscreen: isSet(object.offscreen) ? Boolean(object.offscreen) : false,
      initialWidth: isSet(object.initialWidth) ? Number(object.initialWidth) : 0,
      initialHeight: isSet(object.initialHeight) ? Number(object.initialHeight) : 0,
      windowIcon: isSet(object.windowIcon) ? String(object.windowIcon) : "",
      borderless: isSet(object.borderless) ? Boolean(object.borderless) : false,
      vroverlayKey: isSet(object.vroverlayKey) ? String(object.vroverlayKey) : "",
      browserType: isSet(object.browserType) ? Number(object.browserType) : 0,
      initialTop: isSet(object.initialTop) ? Number(object.initialTop) : 0,
      initialLeft: isSet(object.initialLeft) ? Number(object.initialLeft) : 0,
      onlyAllowTrustedPopups: isSet(object.onlyAllowTrustedPopups) ? Boolean(object.onlyAllowTrustedPopups) : false,
      initialUrl: isSet(object.initialUrl) ? String(object.initialUrl) : "",
      hwndParent: isSet(object.hwndParent) ? Number(object.hwndParent) : 0,
      creationFlags: isSet(object.creationFlags) ? Number(object.creationFlags) : 0,
    };
  },

  toJSON(message: CMsgBrowserCreate): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    message.useragent !== undefined && (obj.useragent = message.useragent);
    message.userCss !== undefined && (obj.userCss = message.userCss);
    message.nativeDropdowns !== undefined && (obj.nativeDropdowns = message.nativeDropdowns);
    message.dpiScaling !== undefined && (obj.dpiScaling = message.dpiScaling);
    message.offscreen !== undefined && (obj.offscreen = message.offscreen);
    message.initialWidth !== undefined && (obj.initialWidth = Math.round(message.initialWidth));
    message.initialHeight !== undefined && (obj.initialHeight = Math.round(message.initialHeight));
    message.windowIcon !== undefined && (obj.windowIcon = message.windowIcon);
    message.borderless !== undefined && (obj.borderless = message.borderless);
    message.vroverlayKey !== undefined && (obj.vroverlayKey = message.vroverlayKey);
    message.browserType !== undefined && (obj.browserType = Math.round(message.browserType));
    message.initialTop !== undefined && (obj.initialTop = Math.round(message.initialTop));
    message.initialLeft !== undefined && (obj.initialLeft = Math.round(message.initialLeft));
    message.onlyAllowTrustedPopups !== undefined && (obj.onlyAllowTrustedPopups = message.onlyAllowTrustedPopups);
    message.initialUrl !== undefined && (obj.initialUrl = message.initialUrl);
    message.hwndParent !== undefined && (obj.hwndParent = Math.round(message.hwndParent));
    message.creationFlags !== undefined && (obj.creationFlags = Math.round(message.creationFlags));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserCreate>, I>>(base?: I): CMsgBrowserCreate {
    return CMsgBrowserCreate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserCreate>, I>>(object: I): CMsgBrowserCreate {
    const message = createBaseCMsgBrowserCreate();
    message.requestId = object.requestId ?? 0;
    message.useragent = object.useragent ?? "";
    message.userCss = object.userCss ?? "";
    message.nativeDropdowns = object.nativeDropdowns ?? false;
    message.dpiScaling = object.dpiScaling ?? 0;
    message.offscreen = object.offscreen ?? false;
    message.initialWidth = object.initialWidth ?? 0;
    message.initialHeight = object.initialHeight ?? 0;
    message.windowIcon = object.windowIcon ?? "";
    message.borderless = object.borderless ?? false;
    message.vroverlayKey = object.vroverlayKey ?? "";
    message.browserType = object.browserType ?? 0;
    message.initialTop = object.initialTop ?? 0;
    message.initialLeft = object.initialLeft ?? 0;
    message.onlyAllowTrustedPopups = object.onlyAllowTrustedPopups ?? false;
    message.initialUrl = object.initialUrl ?? "";
    message.hwndParent = object.hwndParent ?? 0;
    message.creationFlags = object.creationFlags ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserCreateResponse(): CMsgBrowserCreateResponse {
  return { browserHandle: 0, requestId: 0 };
}

export const CMsgBrowserCreateResponse = {
  encode(message: CMsgBrowserCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.requestId !== 0) {
      writer.uint32(16).uint32(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.requestId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserCreateResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      requestId: isSet(object.requestId) ? Number(object.requestId) : 0,
    };
  },

  toJSON(message: CMsgBrowserCreateResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.requestId !== undefined && (obj.requestId = Math.round(message.requestId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserCreateResponse>, I>>(base?: I): CMsgBrowserCreateResponse {
    return CMsgBrowserCreateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserCreateResponse>, I>>(object: I): CMsgBrowserCreateResponse {
    const message = createBaseCMsgBrowserCreateResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.requestId = object.requestId ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserRemove(): CMsgBrowserRemove {
  return { browserHandle: 0 };
}

export const CMsgBrowserRemove = {
  encode(message: CMsgBrowserRemove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserRemove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserRemove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserRemove {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgBrowserRemove): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserRemove>, I>>(base?: I): CMsgBrowserRemove {
    return CMsgBrowserRemove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserRemove>, I>>(object: I): CMsgBrowserRemove {
    const message = createBaseCMsgBrowserRemove();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetLocalFileRequestMapping(): CMsgSetLocalFileRequestMapping {
  return { browserHandle: 0, requestUrl: "", defaultLocalPath: "", routes: [] };
}

export const CMsgSetLocalFileRequestMapping = {
  encode(message: CMsgSetLocalFileRequestMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.requestUrl !== "") {
      writer.uint32(18).string(message.requestUrl);
    }
    if (message.defaultLocalPath !== "") {
      writer.uint32(26).string(message.defaultLocalPath);
    }
    for (const v of message.routes) {
      CMsgSetLocalFileRequestMapping_AdditionalRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetLocalFileRequestMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetLocalFileRequestMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.requestUrl = reader.string();
          break;
        case 3:
          message.defaultLocalPath = reader.string();
          break;
        case 4:
          message.routes.push(CMsgSetLocalFileRequestMapping_AdditionalRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetLocalFileRequestMapping {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      requestUrl: isSet(object.requestUrl) ? String(object.requestUrl) : "",
      defaultLocalPath: isSet(object.defaultLocalPath) ? String(object.defaultLocalPath) : "",
      routes: Array.isArray(object?.routes)
        ? object.routes.map((e: any) => CMsgSetLocalFileRequestMapping_AdditionalRoute.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgSetLocalFileRequestMapping): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.requestUrl !== undefined && (obj.requestUrl = message.requestUrl);
    message.defaultLocalPath !== undefined && (obj.defaultLocalPath = message.defaultLocalPath);
    if (message.routes) {
      obj.routes = message.routes.map((e) => e ? CMsgSetLocalFileRequestMapping_AdditionalRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetLocalFileRequestMapping>, I>>(base?: I): CMsgSetLocalFileRequestMapping {
    return CMsgSetLocalFileRequestMapping.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetLocalFileRequestMapping>, I>>(
    object: I,
  ): CMsgSetLocalFileRequestMapping {
    const message = createBaseCMsgSetLocalFileRequestMapping();
    message.browserHandle = object.browserHandle ?? 0;
    message.requestUrl = object.requestUrl ?? "";
    message.defaultLocalPath = object.defaultLocalPath ?? "";
    message.routes = object.routes?.map((e) => CMsgSetLocalFileRequestMapping_AdditionalRoute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSetLocalFileRequestMapping_AdditionalRoute(): CMsgSetLocalFileRequestMapping_AdditionalRoute {
  return { relativeUrl: "", localPath: "", allowedExtensions: "", urlRewrite: false };
}

export const CMsgSetLocalFileRequestMapping_AdditionalRoute = {
  encode(
    message: CMsgSetLocalFileRequestMapping_AdditionalRoute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.relativeUrl !== "") {
      writer.uint32(10).string(message.relativeUrl);
    }
    if (message.localPath !== "") {
      writer.uint32(18).string(message.localPath);
    }
    if (message.allowedExtensions !== "") {
      writer.uint32(26).string(message.allowedExtensions);
    }
    if (message.urlRewrite === true) {
      writer.uint32(32).bool(message.urlRewrite);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetLocalFileRequestMapping_AdditionalRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetLocalFileRequestMapping_AdditionalRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relativeUrl = reader.string();
          break;
        case 2:
          message.localPath = reader.string();
          break;
        case 3:
          message.allowedExtensions = reader.string();
          break;
        case 4:
          message.urlRewrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetLocalFileRequestMapping_AdditionalRoute {
    return {
      relativeUrl: isSet(object.relativeUrl) ? String(object.relativeUrl) : "",
      localPath: isSet(object.localPath) ? String(object.localPath) : "",
      allowedExtensions: isSet(object.allowedExtensions) ? String(object.allowedExtensions) : "",
      urlRewrite: isSet(object.urlRewrite) ? Boolean(object.urlRewrite) : false,
    };
  },

  toJSON(message: CMsgSetLocalFileRequestMapping_AdditionalRoute): unknown {
    const obj: any = {};
    message.relativeUrl !== undefined && (obj.relativeUrl = message.relativeUrl);
    message.localPath !== undefined && (obj.localPath = message.localPath);
    message.allowedExtensions !== undefined && (obj.allowedExtensions = message.allowedExtensions);
    message.urlRewrite !== undefined && (obj.urlRewrite = message.urlRewrite);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetLocalFileRequestMapping_AdditionalRoute>, I>>(
    base?: I,
  ): CMsgSetLocalFileRequestMapping_AdditionalRoute {
    return CMsgSetLocalFileRequestMapping_AdditionalRoute.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetLocalFileRequestMapping_AdditionalRoute>, I>>(
    object: I,
  ): CMsgSetLocalFileRequestMapping_AdditionalRoute {
    const message = createBaseCMsgSetLocalFileRequestMapping_AdditionalRoute();
    message.relativeUrl = object.relativeUrl ?? "";
    message.localPath = object.localPath ?? "";
    message.allowedExtensions = object.allowedExtensions ?? "";
    message.urlRewrite = object.urlRewrite ?? false;
    return message;
  },
};

function createBaseCMsgBrowserErrorStrings(): CMsgBrowserErrorStrings {
  return {
    browserHandle: 0,
    title: "",
    header: "",
    cacheMiss: "",
    badUrl: "",
    connectionProblem: "",
    proxyProblem: "",
    unknown: "",
  };
}

export const CMsgBrowserErrorStrings = {
  encode(message: CMsgBrowserErrorStrings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.header !== "") {
      writer.uint32(26).string(message.header);
    }
    if (message.cacheMiss !== "") {
      writer.uint32(34).string(message.cacheMiss);
    }
    if (message.badUrl !== "") {
      writer.uint32(42).string(message.badUrl);
    }
    if (message.connectionProblem !== "") {
      writer.uint32(50).string(message.connectionProblem);
    }
    if (message.proxyProblem !== "") {
      writer.uint32(58).string(message.proxyProblem);
    }
    if (message.unknown !== "") {
      writer.uint32(66).string(message.unknown);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserErrorStrings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserErrorStrings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.header = reader.string();
          break;
        case 4:
          message.cacheMiss = reader.string();
          break;
        case 5:
          message.badUrl = reader.string();
          break;
        case 6:
          message.connectionProblem = reader.string();
          break;
        case 7:
          message.proxyProblem = reader.string();
          break;
        case 8:
          message.unknown = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserErrorStrings {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      header: isSet(object.header) ? String(object.header) : "",
      cacheMiss: isSet(object.cacheMiss) ? String(object.cacheMiss) : "",
      badUrl: isSet(object.badUrl) ? String(object.badUrl) : "",
      connectionProblem: isSet(object.connectionProblem) ? String(object.connectionProblem) : "",
      proxyProblem: isSet(object.proxyProblem) ? String(object.proxyProblem) : "",
      unknown: isSet(object.unknown) ? String(object.unknown) : "",
    };
  },

  toJSON(message: CMsgBrowserErrorStrings): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.title !== undefined && (obj.title = message.title);
    message.header !== undefined && (obj.header = message.header);
    message.cacheMiss !== undefined && (obj.cacheMiss = message.cacheMiss);
    message.badUrl !== undefined && (obj.badUrl = message.badUrl);
    message.connectionProblem !== undefined && (obj.connectionProblem = message.connectionProblem);
    message.proxyProblem !== undefined && (obj.proxyProblem = message.proxyProblem);
    message.unknown !== undefined && (obj.unknown = message.unknown);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserErrorStrings>, I>>(base?: I): CMsgBrowserErrorStrings {
    return CMsgBrowserErrorStrings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserErrorStrings>, I>>(object: I): CMsgBrowserErrorStrings {
    const message = createBaseCMsgBrowserErrorStrings();
    message.browserHandle = object.browserHandle ?? 0;
    message.title = object.title ?? "";
    message.header = object.header ?? "";
    message.cacheMiss = object.cacheMiss ?? "";
    message.badUrl = object.badUrl ?? "";
    message.connectionProblem = object.connectionProblem ?? "";
    message.proxyProblem = object.proxyProblem ?? "";
    message.unknown = object.unknown ?? "";
    return message;
  },
};

function createBaseCMsgBrowserSetName(): CMsgBrowserSetName {
  return { browserHandle: 0, name: "" };
}

export const CMsgBrowserSetName = {
  encode(message: CMsgBrowserSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserSetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserSetName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
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

  fromJSON(object: any): CMsgBrowserSetName {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CMsgBrowserSetName): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserSetName>, I>>(base?: I): CMsgBrowserSetName {
    return CMsgBrowserSetName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserSetName>, I>>(object: I): CMsgBrowserSetName {
    const message = createBaseCMsgBrowserSetName();
    message.browserHandle = object.browserHandle ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCMsgBrowserSize(): CMsgBrowserSize {
  return { browserHandle: 0, width: 0, height: 0 };
}

export const CMsgBrowserSize = {
  encode(message: CMsgBrowserSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(25).double(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.width = reader.double();
          break;
        case 3:
          message.height = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserSize {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CMsgBrowserSize): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserSize>, I>>(base?: I): CMsgBrowserSize {
    return CMsgBrowserSize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserSize>, I>>(object: I): CMsgBrowserSize {
    const message = createBaseCMsgBrowserSize();
    message.browserHandle = object.browserHandle ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserSetMinSize(): CMsgBrowserSetMinSize {
  return { browserHandle: 0, width: 0, height: 0 };
}

export const CMsgBrowserSetMinSize = {
  encode(message: CMsgBrowserSetMinSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(25).double(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserSetMinSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserSetMinSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.width = reader.double();
          break;
        case 3:
          message.height = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserSetMinSize {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CMsgBrowserSetMinSize): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserSetMinSize>, I>>(base?: I): CMsgBrowserSetMinSize {
    return CMsgBrowserSetMinSize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserSetMinSize>, I>>(object: I): CMsgBrowserSetMinSize {
    const message = createBaseCMsgBrowserSetMinSize();
    message.browserHandle = object.browserHandle ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserPosition(): CMsgBrowserPosition {
  return { browserHandle: 0, x: 0, y: 0, xLocal: 0, yLocal: 0 };
}

export const CMsgBrowserPosition = {
  encode(message: CMsgBrowserPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(17).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(25).double(message.y);
    }
    if (message.xLocal !== 0) {
      writer.uint32(33).double(message.xLocal);
    }
    if (message.yLocal !== 0) {
      writer.uint32(41).double(message.yLocal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.double();
          break;
        case 3:
          message.y = reader.double();
          break;
        case 4:
          message.xLocal = reader.double();
          break;
        case 5:
          message.yLocal = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserPosition {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      xLocal: isSet(object.xLocal) ? Number(object.xLocal) : 0,
      yLocal: isSet(object.yLocal) ? Number(object.yLocal) : 0,
    };
  },

  toJSON(message: CMsgBrowserPosition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.xLocal !== undefined && (obj.xLocal = message.xLocal);
    message.yLocal !== undefined && (obj.yLocal = message.yLocal);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserPosition>, I>>(base?: I): CMsgBrowserPosition {
    return CMsgBrowserPosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserPosition>, I>>(object: I): CMsgBrowserPosition {
    const message = createBaseCMsgBrowserPosition();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.xLocal = object.xLocal ?? 0;
    message.yLocal = object.yLocal ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserResized(): CMsgBrowserResized {
  return { browserHandle: 0, x: 0, y: 0, width: 0, height: 0, dpiHorizontal: 0, dpiVertical: 0, displayName: "" };
}

export const CMsgBrowserResized = {
  encode(message: CMsgBrowserResized, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(17).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(25).double(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(33).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(41).double(message.height);
    }
    if (message.dpiHorizontal !== 0) {
      writer.uint32(49).double(message.dpiHorizontal);
    }
    if (message.dpiVertical !== 0) {
      writer.uint32(57).double(message.dpiVertical);
    }
    if (message.displayName !== "") {
      writer.uint32(66).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserResized {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserResized();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.double();
          break;
        case 3:
          message.y = reader.double();
          break;
        case 4:
          message.width = reader.double();
          break;
        case 5:
          message.height = reader.double();
          break;
        case 6:
          message.dpiHorizontal = reader.double();
          break;
        case 7:
          message.dpiVertical = reader.double();
          break;
        case 8:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserResized {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      dpiHorizontal: isSet(object.dpiHorizontal) ? Number(object.dpiHorizontal) : 0,
      dpiVertical: isSet(object.dpiVertical) ? Number(object.dpiVertical) : 0,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: CMsgBrowserResized): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.dpiHorizontal !== undefined && (obj.dpiHorizontal = message.dpiHorizontal);
    message.dpiVertical !== undefined && (obj.dpiVertical = message.dpiVertical);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserResized>, I>>(base?: I): CMsgBrowserResized {
    return CMsgBrowserResized.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserResized>, I>>(object: I): CMsgBrowserResized {
    const message = createBaseCMsgBrowserResized();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.dpiHorizontal = object.dpiHorizontal ?? 0;
    message.dpiVertical = object.dpiVertical ?? 0;
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseCMsgPostURL(): CMsgPostURL {
  return { browserHandle: 0, url: "", post: "", pageserial: 0 };
}

export const CMsgPostURL = {
  encode(message: CMsgPostURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.post !== "") {
      writer.uint32(26).string(message.post);
    }
    if (message.pageserial !== 0) {
      writer.uint32(32).uint32(message.pageserial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPostURL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPostURL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.post = reader.string();
          break;
        case 4:
          message.pageserial = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPostURL {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      post: isSet(object.post) ? String(object.post) : "",
      pageserial: isSet(object.pageserial) ? Number(object.pageserial) : 0,
    };
  },

  toJSON(message: CMsgPostURL): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.post !== undefined && (obj.post = message.post);
    message.pageserial !== undefined && (obj.pageserial = Math.round(message.pageserial));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPostURL>, I>>(base?: I): CMsgPostURL {
    return CMsgPostURL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPostURL>, I>>(object: I): CMsgPostURL {
    const message = createBaseCMsgPostURL();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.post = object.post ?? "";
    message.pageserial = object.pageserial ?? 0;
    return message;
  },
};

function createBaseCMsgAddHeader(): CMsgAddHeader {
  return { browserHandle: 0, key: "", value: "" };
}

export const CMsgAddHeader = {
  encode(message: CMsgAddHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAddHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAddHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAddHeader {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgAddHeader): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAddHeader>, I>>(base?: I): CMsgAddHeader {
    return CMsgAddHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAddHeader>, I>>(object: I): CMsgAddHeader {
    const message = createBaseCMsgAddHeader();
    message.browserHandle = object.browserHandle ?? 0;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCMsgStopLoad(): CMsgStopLoad {
  return { browserHandle: 0 };
}

export const CMsgStopLoad = {
  encode(message: CMsgStopLoad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStopLoad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStopLoad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStopLoad {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgStopLoad): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStopLoad>, I>>(base?: I): CMsgStopLoad {
    return CMsgStopLoad.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStopLoad>, I>>(object: I): CMsgStopLoad {
    const message = createBaseCMsgStopLoad();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgReload(): CMsgReload {
  return { browserHandle: 0 };
}

export const CMsgReload = {
  encode(message: CMsgReload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgReload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgReload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgReload {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgReload): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgReload>, I>>(base?: I): CMsgReload {
    return CMsgReload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgReload>, I>>(object: I): CMsgReload {
    const message = createBaseCMsgReload();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgGoForward(): CMsgGoForward {
  return { browserHandle: 0 };
}

export const CMsgGoForward = {
  encode(message: CMsgGoForward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGoForward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGoForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGoForward {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgGoForward): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGoForward>, I>>(base?: I): CMsgGoForward {
    return CMsgGoForward.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGoForward>, I>>(object: I): CMsgGoForward {
    const message = createBaseCMsgGoForward();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgGoBack(): CMsgGoBack {
  return { browserHandle: 0 };
}

export const CMsgGoBack = {
  encode(message: CMsgGoBack, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGoBack {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGoBack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGoBack {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgGoBack): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGoBack>, I>>(base?: I): CMsgGoBack {
    return CMsgGoBack.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGoBack>, I>>(object: I): CMsgGoBack {
    const message = createBaseCMsgGoBack();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgWasHidden(): CMsgWasHidden {
  return { browserHandle: 0, hidden: false };
}

export const CMsgWasHidden = {
  encode(message: CMsgWasHidden, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.hidden === true) {
      writer.uint32(16).bool(message.hidden);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgWasHidden {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgWasHidden();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgWasHidden {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
    };
  },

  toJSON(message: CMsgWasHidden): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.hidden !== undefined && (obj.hidden = message.hidden);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgWasHidden>, I>>(base?: I): CMsgWasHidden {
    return CMsgWasHidden.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgWasHidden>, I>>(object: I): CMsgWasHidden {
    const message = createBaseCMsgWasHidden();
    message.browserHandle = object.browserHandle ?? 0;
    message.hidden = object.hidden ?? false;
    return message;
  },
};

function createBaseCMsgSetWindowVisibility(): CMsgSetWindowVisibility {
  return { browserHandle: 0, visible: false };
}

export const CMsgSetWindowVisibility = {
  encode(message: CMsgSetWindowVisibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.visible === true) {
      writer.uint32(16).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetWindowVisibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetWindowVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetWindowVisibility {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
    };
  },

  toJSON(message: CMsgSetWindowVisibility): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetWindowVisibility>, I>>(base?: I): CMsgSetWindowVisibility {
    return CMsgSetWindowVisibility.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetWindowVisibility>, I>>(object: I): CMsgSetWindowVisibility {
    const message = createBaseCMsgSetWindowVisibility();
    message.browserHandle = object.browserHandle ?? 0;
    message.visible = object.visible ?? false;
    return message;
  },
};

function createBaseCMsgClearHistory(): CMsgClearHistory {
  return { browserHandle: 0 };
}

export const CMsgClearHistory = {
  encode(message: CMsgClearHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClearHistory {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgClearHistory): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClearHistory>, I>>(base?: I): CMsgClearHistory {
    return CMsgClearHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClearHistory>, I>>(object: I): CMsgClearHistory {
    const message = createBaseCMsgClearHistory();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgClearAllBrowsingData(): CMsgClearAllBrowsingData {
  return { browserHandle: 0 };
}

export const CMsgClearAllBrowsingData = {
  encode(message: CMsgClearAllBrowsingData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearAllBrowsingData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearAllBrowsingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClearAllBrowsingData {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgClearAllBrowsingData): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClearAllBrowsingData>, I>>(base?: I): CMsgClearAllBrowsingData {
    return CMsgClearAllBrowsingData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClearAllBrowsingData>, I>>(object: I): CMsgClearAllBrowsingData {
    const message = createBaseCMsgClearAllBrowsingData();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgCopy(): CMsgCopy {
  return { browserHandle: 0 };
}

export const CMsgCopy = {
  encode(message: CMsgCopy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCopy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCopy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCopy {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgCopy): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCopy>, I>>(base?: I): CMsgCopy {
    return CMsgCopy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCopy>, I>>(object: I): CMsgCopy {
    const message = createBaseCMsgCopy();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgPaste(): CMsgPaste {
  return { browserHandle: 0 };
}

export const CMsgPaste = {
  encode(message: CMsgPaste, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPaste {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPaste();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPaste {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgPaste): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPaste>, I>>(base?: I): CMsgPaste {
    return CMsgPaste.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPaste>, I>>(object: I): CMsgPaste {
    const message = createBaseCMsgPaste();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgExecuteJavaScript(): CMsgExecuteJavaScript {
  return { browserHandle: 0, script: "" };
}

export const CMsgExecuteJavaScript = {
  encode(message: CMsgExecuteJavaScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.script !== "") {
      writer.uint32(18).string(message.script);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgExecuteJavaScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgExecuteJavaScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.script = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgExecuteJavaScript {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      script: isSet(object.script) ? String(object.script) : "",
    };
  },

  toJSON(message: CMsgExecuteJavaScript): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.script !== undefined && (obj.script = message.script);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgExecuteJavaScript>, I>>(base?: I): CMsgExecuteJavaScript {
    return CMsgExecuteJavaScript.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgExecuteJavaScript>, I>>(object: I): CMsgExecuteJavaScript {
    const message = createBaseCMsgExecuteJavaScript();
    message.browserHandle = object.browserHandle ?? 0;
    message.script = object.script ?? "";
    return message;
  },
};

function createBaseCMsgSetFocus(): CMsgSetFocus {
  return { browserHandle: 0, focus: false };
}

export const CMsgSetFocus = {
  encode(message: CMsgSetFocus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.focus === true) {
      writer.uint32(16).bool(message.focus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetFocus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetFocus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.focus = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetFocus {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      focus: isSet(object.focus) ? Boolean(object.focus) : false,
    };
  },

  toJSON(message: CMsgSetFocus): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.focus !== undefined && (obj.focus = message.focus);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetFocus>, I>>(base?: I): CMsgSetFocus {
    return CMsgSetFocus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetFocus>, I>>(object: I): CMsgSetFocus {
    const message = createBaseCMsgSetFocus();
    message.browserHandle = object.browserHandle ?? 0;
    message.focus = object.focus ?? false;
    return message;
  },
};

function createBaseCMsgHorizontalScrollBarSize(): CMsgHorizontalScrollBarSize {
  return { browserHandle: 0 };
}

export const CMsgHorizontalScrollBarSize = {
  encode(message: CMsgHorizontalScrollBarSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHorizontalScrollBarSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHorizontalScrollBarSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHorizontalScrollBarSize {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgHorizontalScrollBarSize): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHorizontalScrollBarSize>, I>>(base?: I): CMsgHorizontalScrollBarSize {
    return CMsgHorizontalScrollBarSize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHorizontalScrollBarSize>, I>>(object: I): CMsgHorizontalScrollBarSize {
    const message = createBaseCMsgHorizontalScrollBarSize();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgHorizontalScrollBarSizeResponse(): CMsgHorizontalScrollBarSizeResponse {
  return { browserHandle: 0, scrollMax: 0, scroll: 0, zoom: 0, visible: false, pageSize: 0 };
}

export const CMsgHorizontalScrollBarSizeResponse = {
  encode(message: CMsgHorizontalScrollBarSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scrollMax !== 0) {
      writer.uint32(48).uint32(message.scrollMax);
    }
    if (message.scroll !== 0) {
      writer.uint32(56).uint32(message.scroll);
    }
    if (message.zoom !== 0) {
      writer.uint32(69).float(message.zoom);
    }
    if (message.visible === true) {
      writer.uint32(72).bool(message.visible);
    }
    if (message.pageSize !== 0) {
      writer.uint32(80).uint32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHorizontalScrollBarSizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHorizontalScrollBarSizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 6:
          message.scrollMax = reader.uint32();
          break;
        case 7:
          message.scroll = reader.uint32();
          break;
        case 8:
          message.zoom = reader.float();
          break;
        case 9:
          message.visible = reader.bool();
          break;
        case 10:
          message.pageSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHorizontalScrollBarSizeResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scrollMax: isSet(object.scrollMax) ? Number(object.scrollMax) : 0,
      scroll: isSet(object.scroll) ? Number(object.scroll) : 0,
      zoom: isSet(object.zoom) ? Number(object.zoom) : 0,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: CMsgHorizontalScrollBarSizeResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scrollMax !== undefined && (obj.scrollMax = Math.round(message.scrollMax));
    message.scroll !== undefined && (obj.scroll = Math.round(message.scroll));
    message.zoom !== undefined && (obj.zoom = message.zoom);
    message.visible !== undefined && (obj.visible = message.visible);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHorizontalScrollBarSizeResponse>, I>>(
    base?: I,
  ): CMsgHorizontalScrollBarSizeResponse {
    return CMsgHorizontalScrollBarSizeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHorizontalScrollBarSizeResponse>, I>>(
    object: I,
  ): CMsgHorizontalScrollBarSizeResponse {
    const message = createBaseCMsgHorizontalScrollBarSizeResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.scrollMax = object.scrollMax ?? 0;
    message.scroll = object.scroll ?? 0;
    message.zoom = object.zoom ?? 0;
    message.visible = object.visible ?? false;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseCMsgVerticalScrollBarSize(): CMsgVerticalScrollBarSize {
  return { browserHandle: 0 };
}

export const CMsgVerticalScrollBarSize = {
  encode(message: CMsgVerticalScrollBarSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVerticalScrollBarSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVerticalScrollBarSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgVerticalScrollBarSize {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgVerticalScrollBarSize): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgVerticalScrollBarSize>, I>>(base?: I): CMsgVerticalScrollBarSize {
    return CMsgVerticalScrollBarSize.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgVerticalScrollBarSize>, I>>(object: I): CMsgVerticalScrollBarSize {
    const message = createBaseCMsgVerticalScrollBarSize();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgVerticalScrollBarSizeResponse(): CMsgVerticalScrollBarSizeResponse {
  return { browserHandle: 0, scrollMax: 0, scroll: 0, zoom: 0, visible: false, pageSize: 0 };
}

export const CMsgVerticalScrollBarSizeResponse = {
  encode(message: CMsgVerticalScrollBarSizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scrollMax !== 0) {
      writer.uint32(48).uint32(message.scrollMax);
    }
    if (message.scroll !== 0) {
      writer.uint32(56).uint32(message.scroll);
    }
    if (message.zoom !== 0) {
      writer.uint32(69).float(message.zoom);
    }
    if (message.visible === true) {
      writer.uint32(72).bool(message.visible);
    }
    if (message.pageSize !== 0) {
      writer.uint32(80).uint32(message.pageSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgVerticalScrollBarSizeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgVerticalScrollBarSizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 6:
          message.scrollMax = reader.uint32();
          break;
        case 7:
          message.scroll = reader.uint32();
          break;
        case 8:
          message.zoom = reader.float();
          break;
        case 9:
          message.visible = reader.bool();
          break;
        case 10:
          message.pageSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgVerticalScrollBarSizeResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scrollMax: isSet(object.scrollMax) ? Number(object.scrollMax) : 0,
      scroll: isSet(object.scroll) ? Number(object.scroll) : 0,
      zoom: isSet(object.zoom) ? Number(object.zoom) : 0,
      visible: isSet(object.visible) ? Boolean(object.visible) : false,
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
    };
  },

  toJSON(message: CMsgVerticalScrollBarSizeResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scrollMax !== undefined && (obj.scrollMax = Math.round(message.scrollMax));
    message.scroll !== undefined && (obj.scroll = Math.round(message.scroll));
    message.zoom !== undefined && (obj.zoom = message.zoom);
    message.visible !== undefined && (obj.visible = message.visible);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgVerticalScrollBarSizeResponse>, I>>(
    base?: I,
  ): CMsgVerticalScrollBarSizeResponse {
    return CMsgVerticalScrollBarSizeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgVerticalScrollBarSizeResponse>, I>>(
    object: I,
  ): CMsgVerticalScrollBarSizeResponse {
    const message = createBaseCMsgVerticalScrollBarSizeResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.scrollMax = object.scrollMax ?? 0;
    message.scroll = object.scroll ?? 0;
    message.zoom = object.zoom ?? 0;
    message.visible = object.visible ?? false;
    message.pageSize = object.pageSize ?? 0;
    return message;
  },
};

function createBaseCMsgFind(): CMsgFind {
  return { browserHandle: 0, find: "", infind: false, reverse: false };
}

export const CMsgFind = {
  encode(message: CMsgFind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.find !== "") {
      writer.uint32(18).string(message.find);
    }
    if (message.infind === true) {
      writer.uint32(24).bool(message.infind);
    }
    if (message.reverse === true) {
      writer.uint32(32).bool(message.reverse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFind {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.find = reader.string();
          break;
        case 3:
          message.infind = reader.bool();
          break;
        case 4:
          message.reverse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFind {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      find: isSet(object.find) ? String(object.find) : "",
      infind: isSet(object.infind) ? Boolean(object.infind) : false,
      reverse: isSet(object.reverse) ? Boolean(object.reverse) : false,
    };
  },

  toJSON(message: CMsgFind): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.find !== undefined && (obj.find = message.find);
    message.infind !== undefined && (obj.infind = message.infind);
    message.reverse !== undefined && (obj.reverse = message.reverse);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFind>, I>>(base?: I): CMsgFind {
    return CMsgFind.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFind>, I>>(object: I): CMsgFind {
    const message = createBaseCMsgFind();
    message.browserHandle = object.browserHandle ?? 0;
    message.find = object.find ?? "";
    message.infind = object.infind ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  },
};

function createBaseCMsgStopFind(): CMsgStopFind {
  return { browserHandle: 0 };
}

export const CMsgStopFind = {
  encode(message: CMsgStopFind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStopFind {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStopFind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStopFind {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgStopFind): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStopFind>, I>>(base?: I): CMsgStopFind {
    return CMsgStopFind.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStopFind>, I>>(object: I): CMsgStopFind {
    const message = createBaseCMsgStopFind();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetHorizontalScroll(): CMsgSetHorizontalScroll {
  return { browserHandle: 0, scroll: 0 };
}

export const CMsgSetHorizontalScroll = {
  encode(message: CMsgSetHorizontalScroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scroll !== 0) {
      writer.uint32(16).uint32(message.scroll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetHorizontalScroll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetHorizontalScroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.scroll = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetHorizontalScroll {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scroll: isSet(object.scroll) ? Number(object.scroll) : 0,
    };
  },

  toJSON(message: CMsgSetHorizontalScroll): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scroll !== undefined && (obj.scroll = Math.round(message.scroll));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetHorizontalScroll>, I>>(base?: I): CMsgSetHorizontalScroll {
    return CMsgSetHorizontalScroll.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetHorizontalScroll>, I>>(object: I): CMsgSetHorizontalScroll {
    const message = createBaseCMsgSetHorizontalScroll();
    message.browserHandle = object.browserHandle ?? 0;
    message.scroll = object.scroll ?? 0;
    return message;
  },
};

function createBaseCMsgSetVerticalScroll(): CMsgSetVerticalScroll {
  return { browserHandle: 0, scroll: 0 };
}

export const CMsgSetVerticalScroll = {
  encode(message: CMsgSetVerticalScroll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scroll !== 0) {
      writer.uint32(16).uint32(message.scroll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetVerticalScroll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetVerticalScroll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.scroll = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetVerticalScroll {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scroll: isSet(object.scroll) ? Number(object.scroll) : 0,
    };
  },

  toJSON(message: CMsgSetVerticalScroll): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scroll !== undefined && (obj.scroll = Math.round(message.scroll));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetVerticalScroll>, I>>(base?: I): CMsgSetVerticalScroll {
    return CMsgSetVerticalScroll.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetVerticalScroll>, I>>(object: I): CMsgSetVerticalScroll {
    const message = createBaseCMsgSetVerticalScroll();
    message.browserHandle = object.browserHandle ?? 0;
    message.scroll = object.scroll ?? 0;
    return message;
  },
};

function createBaseCMsgSetZoomLevel(): CMsgSetZoomLevel {
  return { browserHandle: 0, zoom: 0 };
}

export const CMsgSetZoomLevel = {
  encode(message: CMsgSetZoomLevel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.zoom !== 0) {
      writer.uint32(17).double(message.zoom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetZoomLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetZoomLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.zoom = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetZoomLevel {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      zoom: isSet(object.zoom) ? Number(object.zoom) : 0,
    };
  },

  toJSON(message: CMsgSetZoomLevel): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.zoom !== undefined && (obj.zoom = message.zoom);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetZoomLevel>, I>>(base?: I): CMsgSetZoomLevel {
    return CMsgSetZoomLevel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetZoomLevel>, I>>(object: I): CMsgSetZoomLevel {
    const message = createBaseCMsgSetZoomLevel();
    message.browserHandle = object.browserHandle ?? 0;
    message.zoom = object.zoom ?? 0;
    return message;
  },
};

function createBaseCMsgViewSource(): CMsgViewSource {
  return { browserHandle: 0 };
}

export const CMsgViewSource = {
  encode(message: CMsgViewSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgViewSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgViewSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgViewSource {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgViewSource): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgViewSource>, I>>(base?: I): CMsgViewSource {
    return CMsgViewSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgViewSource>, I>>(object: I): CMsgViewSource {
    const message = createBaseCMsgViewSource();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserReady(): CMsgBrowserReady {
  return { browserHandle: 0, vrOverlayKey: "", hwndBrowser: 0 };
}

export const CMsgBrowserReady = {
  encode(message: CMsgBrowserReady, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.vrOverlayKey !== "") {
      writer.uint32(18).string(message.vrOverlayKey);
    }
    if (message.hwndBrowser !== 0) {
      writer.uint32(25).fixed64(message.hwndBrowser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserReady {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserReady();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.vrOverlayKey = reader.string();
          break;
        case 3:
          message.hwndBrowser = longToNumber(reader.fixed64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserReady {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      vrOverlayKey: isSet(object.vrOverlayKey) ? String(object.vrOverlayKey) : "",
      hwndBrowser: isSet(object.hwndBrowser) ? Number(object.hwndBrowser) : 0,
    };
  },

  toJSON(message: CMsgBrowserReady): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.vrOverlayKey !== undefined && (obj.vrOverlayKey = message.vrOverlayKey);
    message.hwndBrowser !== undefined && (obj.hwndBrowser = Math.round(message.hwndBrowser));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserReady>, I>>(base?: I): CMsgBrowserReady {
    return CMsgBrowserReady.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserReady>, I>>(object: I): CMsgBrowserReady {
    const message = createBaseCMsgBrowserReady();
    message.browserHandle = object.browserHandle ?? 0;
    message.vrOverlayKey = object.vrOverlayKey ?? "";
    message.hwndBrowser = object.hwndBrowser ?? 0;
    return message;
  },
};

function createBaseCMsgURLChanged(): CMsgURLChanged {
  return { browserHandle: 0, url: "", postData: "", bIsRedirect: false, pagetitle: "", bNewNavigation: false };
}

export const CMsgURLChanged = {
  encode(message: CMsgURLChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.postData !== "") {
      writer.uint32(26).string(message.postData);
    }
    if (message.bIsRedirect === true) {
      writer.uint32(32).bool(message.bIsRedirect);
    }
    if (message.pagetitle !== "") {
      writer.uint32(42).string(message.pagetitle);
    }
    if (message.bNewNavigation === true) {
      writer.uint32(48).bool(message.bNewNavigation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgURLChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgURLChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.postData = reader.string();
          break;
        case 4:
          message.bIsRedirect = reader.bool();
          break;
        case 5:
          message.pagetitle = reader.string();
          break;
        case 6:
          message.bNewNavigation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgURLChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      postData: isSet(object.postData) ? String(object.postData) : "",
      bIsRedirect: isSet(object.bIsRedirect) ? Boolean(object.bIsRedirect) : false,
      pagetitle: isSet(object.pagetitle) ? String(object.pagetitle) : "",
      bNewNavigation: isSet(object.bNewNavigation) ? Boolean(object.bNewNavigation) : false,
    };
  },

  toJSON(message: CMsgURLChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.postData !== undefined && (obj.postData = message.postData);
    message.bIsRedirect !== undefined && (obj.bIsRedirect = message.bIsRedirect);
    message.pagetitle !== undefined && (obj.pagetitle = message.pagetitle);
    message.bNewNavigation !== undefined && (obj.bNewNavigation = message.bNewNavigation);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgURLChanged>, I>>(base?: I): CMsgURLChanged {
    return CMsgURLChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgURLChanged>, I>>(object: I): CMsgURLChanged {
    const message = createBaseCMsgURLChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.postData = object.postData ?? "";
    message.bIsRedirect = object.bIsRedirect ?? false;
    message.pagetitle = object.pagetitle ?? "";
    message.bNewNavigation = object.bNewNavigation ?? false;
    return message;
  },
};

function createBaseCHistoryEntry(): CHistoryEntry {
  return { url: "" };
}

export const CHistoryEntry = {
  encode(message: CHistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHistoryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHistoryEntry {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: CHistoryEntry): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHistoryEntry>, I>>(base?: I): CHistoryEntry {
    return CHistoryEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHistoryEntry>, I>>(object: I): CHistoryEntry {
    const message = createBaseCHistoryEntry();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCMsgHistoryChanged(): CMsgHistoryChanged {
  return { browserHandle: 0, index: 0, entries: [] };
}

export const CMsgHistoryChanged = {
  encode(message: CMsgHistoryChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    for (const v of message.entries) {
      CHistoryEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHistoryChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHistoryChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.entries.push(CHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHistoryChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      index: isSet(object.index) ? Number(object.index) : 0,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CHistoryEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgHistoryChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.index !== undefined && (obj.index = Math.round(message.index));
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? CHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHistoryChanged>, I>>(base?: I): CMsgHistoryChanged {
    return CMsgHistoryChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHistoryChanged>, I>>(object: I): CMsgHistoryChanged {
    const message = createBaseCMsgHistoryChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.index = object.index ?? 0;
    message.entries = object.entries?.map((e) => CHistoryEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgLoadError(): CMsgLoadError {
  return { browserHandle: 0, errorCode: 0, url: "", errorDescription: "" };
}

export const CMsgLoadError = {
  encode(message: CMsgLoadError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).int32(message.errorCode);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.errorDescription !== "") {
      writer.uint32(34).string(message.errorDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLoadError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLoadError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.errorCode = reader.int32();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.errorDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLoadError {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      errorCode: isSet(object.errorCode) ? Number(object.errorCode) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      errorDescription: isSet(object.errorDescription) ? String(object.errorDescription) : "",
    };
  },

  toJSON(message: CMsgLoadError): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.errorCode !== undefined && (obj.errorCode = Math.round(message.errorCode));
    message.url !== undefined && (obj.url = message.url);
    message.errorDescription !== undefined && (obj.errorDescription = message.errorDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLoadError>, I>>(base?: I): CMsgLoadError {
    return CMsgLoadError.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLoadError>, I>>(object: I): CMsgLoadError {
    const message = createBaseCMsgLoadError();
    message.browserHandle = object.browserHandle ?? 0;
    message.errorCode = object.errorCode ?? 0;
    message.url = object.url ?? "";
    message.errorDescription = object.errorDescription ?? "";
    return message;
  },
};

function createBaseCHTMLHeader(): CHTMLHeader {
  return { key: "", value: "" };
}

export const CHTMLHeader = {
  encode(message: CHTMLHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHTMLHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHTMLHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHTMLHeader {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CHTMLHeader): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHTMLHeader>, I>>(base?: I): CHTMLHeader {
    return CHTMLHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHTMLHeader>, I>>(object: I): CHTMLHeader {
    const message = createBaseCHTMLHeader();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCHTMLPageSecurityInfo(): CHTMLPageSecurityInfo {
  return {
    bIsSecure: false,
    bHasCertError: false,
    issuerName: "",
    certName: "",
    certExpiry: 0,
    nCertBits: 0,
    bIsEVCert: false,
  };
}

export const CHTMLPageSecurityInfo = {
  encode(message: CHTMLPageSecurityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bIsSecure === true) {
      writer.uint32(8).bool(message.bIsSecure);
    }
    if (message.bHasCertError === true) {
      writer.uint32(16).bool(message.bHasCertError);
    }
    if (message.issuerName !== "") {
      writer.uint32(26).string(message.issuerName);
    }
    if (message.certName !== "") {
      writer.uint32(34).string(message.certName);
    }
    if (message.certExpiry !== 0) {
      writer.uint32(40).int32(message.certExpiry);
    }
    if (message.nCertBits !== 0) {
      writer.uint32(48).int32(message.nCertBits);
    }
    if (message.bIsEVCert === true) {
      writer.uint32(56).bool(message.bIsEVCert);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CHTMLPageSecurityInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCHTMLPageSecurityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bIsSecure = reader.bool();
          break;
        case 2:
          message.bHasCertError = reader.bool();
          break;
        case 3:
          message.issuerName = reader.string();
          break;
        case 4:
          message.certName = reader.string();
          break;
        case 5:
          message.certExpiry = reader.int32();
          break;
        case 6:
          message.nCertBits = reader.int32();
          break;
        case 7:
          message.bIsEVCert = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CHTMLPageSecurityInfo {
    return {
      bIsSecure: isSet(object.bIsSecure) ? Boolean(object.bIsSecure) : false,
      bHasCertError: isSet(object.bHasCertError) ? Boolean(object.bHasCertError) : false,
      issuerName: isSet(object.issuerName) ? String(object.issuerName) : "",
      certName: isSet(object.certName) ? String(object.certName) : "",
      certExpiry: isSet(object.certExpiry) ? Number(object.certExpiry) : 0,
      nCertBits: isSet(object.nCertBits) ? Number(object.nCertBits) : 0,
      bIsEVCert: isSet(object.bIsEVCert) ? Boolean(object.bIsEVCert) : false,
    };
  },

  toJSON(message: CHTMLPageSecurityInfo): unknown {
    const obj: any = {};
    message.bIsSecure !== undefined && (obj.bIsSecure = message.bIsSecure);
    message.bHasCertError !== undefined && (obj.bHasCertError = message.bHasCertError);
    message.issuerName !== undefined && (obj.issuerName = message.issuerName);
    message.certName !== undefined && (obj.certName = message.certName);
    message.certExpiry !== undefined && (obj.certExpiry = Math.round(message.certExpiry));
    message.nCertBits !== undefined && (obj.nCertBits = Math.round(message.nCertBits));
    message.bIsEVCert !== undefined && (obj.bIsEVCert = message.bIsEVCert);
    return obj;
  },

  create<I extends Exact<DeepPartial<CHTMLPageSecurityInfo>, I>>(base?: I): CHTMLPageSecurityInfo {
    return CHTMLPageSecurityInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CHTMLPageSecurityInfo>, I>>(object: I): CHTMLPageSecurityInfo {
    const message = createBaseCHTMLPageSecurityInfo();
    message.bIsSecure = object.bIsSecure ?? false;
    message.bHasCertError = object.bHasCertError ?? false;
    message.issuerName = object.issuerName ?? "";
    message.certName = object.certName ?? "";
    message.certExpiry = object.certExpiry ?? 0;
    message.nCertBits = object.nCertBits ?? 0;
    message.bIsEVCert = object.bIsEVCert ?? false;
    return message;
  },
};

function createBaseCMsgFinishedRequest(): CMsgFinishedRequest {
  return { browserHandle: 0, url: "", pageTitle: "" };
}

export const CMsgFinishedRequest = {
  encode(message: CMsgFinishedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.pageTitle !== "") {
      writer.uint32(26).string(message.pageTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFinishedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFinishedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.pageTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFinishedRequest {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      pageTitle: isSet(object.pageTitle) ? String(object.pageTitle) : "",
    };
  },

  toJSON(message: CMsgFinishedRequest): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.pageTitle !== undefined && (obj.pageTitle = message.pageTitle);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFinishedRequest>, I>>(base?: I): CMsgFinishedRequest {
    return CMsgFinishedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFinishedRequest>, I>>(object: I): CMsgFinishedRequest {
    const message = createBaseCMsgFinishedRequest();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.pageTitle = object.pageTitle ?? "";
    return message;
  },
};

function createBaseCMsgLoadedRequest(): CMsgLoadedRequest {
  return { browserHandle: 0, url: "", pageTitle: "", headers: [] };
}

export const CMsgLoadedRequest = {
  encode(message: CMsgLoadedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.pageTitle !== "") {
      writer.uint32(26).string(message.pageTitle);
    }
    for (const v of message.headers) {
      CHTMLHeader.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLoadedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLoadedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.pageTitle = reader.string();
          break;
        case 5:
          message.headers.push(CHTMLHeader.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLoadedRequest {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      pageTitle: isSet(object.pageTitle) ? String(object.pageTitle) : "",
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => CHTMLHeader.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgLoadedRequest): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.pageTitle !== undefined && (obj.pageTitle = message.pageTitle);
    if (message.headers) {
      obj.headers = message.headers.map((e) => e ? CHTMLHeader.toJSON(e) : undefined);
    } else {
      obj.headers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLoadedRequest>, I>>(base?: I): CMsgLoadedRequest {
    return CMsgLoadedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLoadedRequest>, I>>(object: I): CMsgLoadedRequest {
    const message = createBaseCMsgLoadedRequest();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.pageTitle = object.pageTitle ?? "";
    message.headers = object.headers?.map((e) => CHTMLHeader.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgPageSecurity(): CMsgPageSecurity {
  return { browserHandle: 0, url: "", securityInfo: undefined };
}

export const CMsgPageSecurity = {
  encode(message: CMsgPageSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.securityInfo !== undefined) {
      CHTMLPageSecurityInfo.encode(message.securityInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPageSecurity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPageSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.securityInfo = CHTMLPageSecurityInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPageSecurity {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      securityInfo: isSet(object.securityInfo) ? CHTMLPageSecurityInfo.fromJSON(object.securityInfo) : undefined,
    };
  },

  toJSON(message: CMsgPageSecurity): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.securityInfo !== undefined &&
      (obj.securityInfo = message.securityInfo ? CHTMLPageSecurityInfo.toJSON(message.securityInfo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPageSecurity>, I>>(base?: I): CMsgPageSecurity {
    return CMsgPageSecurity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPageSecurity>, I>>(object: I): CMsgPageSecurity {
    const message = createBaseCMsgPageSecurity();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.securityInfo = (object.securityInfo !== undefined && object.securityInfo !== null)
      ? CHTMLPageSecurityInfo.fromPartial(object.securityInfo)
      : undefined;
    return message;
  },
};

function createBaseCMsgStartRequest(): CMsgStartRequest {
  return { browserHandle: 0, url: "", target: "", postData: "", bIsRedirect: false };
}

export const CMsgStartRequest = {
  encode(message: CMsgStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.target !== "") {
      writer.uint32(26).string(message.target);
    }
    if (message.postData !== "") {
      writer.uint32(34).string(message.postData);
    }
    if (message.bIsRedirect === true) {
      writer.uint32(40).bool(message.bIsRedirect);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.target = reader.string();
          break;
        case 4:
          message.postData = reader.string();
          break;
        case 5:
          message.bIsRedirect = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStartRequest {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      target: isSet(object.target) ? String(object.target) : "",
      postData: isSet(object.postData) ? String(object.postData) : "",
      bIsRedirect: isSet(object.bIsRedirect) ? Boolean(object.bIsRedirect) : false,
    };
  },

  toJSON(message: CMsgStartRequest): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.target !== undefined && (obj.target = message.target);
    message.postData !== undefined && (obj.postData = message.postData);
    message.bIsRedirect !== undefined && (obj.bIsRedirect = message.bIsRedirect);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStartRequest>, I>>(base?: I): CMsgStartRequest {
    return CMsgStartRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStartRequest>, I>>(object: I): CMsgStartRequest {
    const message = createBaseCMsgStartRequest();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.target = object.target ?? "";
    message.postData = object.postData ?? "";
    message.bIsRedirect = object.bIsRedirect ?? false;
    return message;
  },
};

function createBaseCMsgStartRequestResponse(): CMsgStartRequestResponse {
  return { browserHandle: 0, bAllow: false };
}

export const CMsgStartRequestResponse = {
  encode(message: CMsgStartRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.bAllow === true) {
      writer.uint32(16).bool(message.bAllow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStartRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStartRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.bAllow = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStartRequestResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      bAllow: isSet(object.bAllow) ? Boolean(object.bAllow) : false,
    };
  },

  toJSON(message: CMsgStartRequestResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.bAllow !== undefined && (obj.bAllow = message.bAllow);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStartRequestResponse>, I>>(base?: I): CMsgStartRequestResponse {
    return CMsgStartRequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStartRequestResponse>, I>>(object: I): CMsgStartRequestResponse {
    const message = createBaseCMsgStartRequestResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.bAllow = object.bAllow ?? false;
    return message;
  },
};

function createBaseCMsgShowPopup(): CMsgShowPopup {
  return { browserHandle: 0 };
}

export const CMsgShowPopup = {
  encode(message: CMsgShowPopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShowPopup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShowPopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShowPopup {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgShowPopup): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShowPopup>, I>>(base?: I): CMsgShowPopup {
    return CMsgShowPopup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShowPopup>, I>>(object: I): CMsgShowPopup {
    const message = createBaseCMsgShowPopup();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgHidePopup(): CMsgHidePopup {
  return { browserHandle: 0 };
}

export const CMsgHidePopup = {
  encode(message: CMsgHidePopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHidePopup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHidePopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHidePopup {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgHidePopup): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHidePopup>, I>>(base?: I): CMsgHidePopup {
    return CMsgHidePopup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHidePopup>, I>>(object: I): CMsgHidePopup {
    const message = createBaseCMsgHidePopup();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSizePopup(): CMsgSizePopup {
  return { browserHandle: 0, x: 0, y: 0, wide: 0, tall: 0 };
}

export const CMsgSizePopup = {
  encode(message: CMsgSizePopup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.wide !== 0) {
      writer.uint32(32).uint32(message.wide);
    }
    if (message.tall !== 0) {
      writer.uint32(40).uint32(message.tall);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSizePopup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSizePopup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.wide = reader.uint32();
          break;
        case 5:
          message.tall = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSizePopup {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      wide: isSet(object.wide) ? Number(object.wide) : 0,
      tall: isSet(object.tall) ? Number(object.tall) : 0,
    };
  },

  toJSON(message: CMsgSizePopup): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.wide !== undefined && (obj.wide = Math.round(message.wide));
    message.tall !== undefined && (obj.tall = Math.round(message.tall));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSizePopup>, I>>(base?: I): CMsgSizePopup {
    return CMsgSizePopup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSizePopup>, I>>(object: I): CMsgSizePopup {
    const message = createBaseCMsgSizePopup();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.wide = object.wide ?? 0;
    message.tall = object.tall ?? 0;
    return message;
  },
};

function createBaseCMsgOpenNewTab(): CMsgOpenNewTab {
  return { browserHandle: 0, url: "", bForeground: false };
}

export const CMsgOpenNewTab = {
  encode(message: CMsgOpenNewTab, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.bForeground === true) {
      writer.uint32(24).bool(message.bForeground);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgOpenNewTab {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgOpenNewTab();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.bForeground = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgOpenNewTab {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      bForeground: isSet(object.bForeground) ? Boolean(object.bForeground) : false,
    };
  },

  toJSON(message: CMsgOpenNewTab): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.bForeground !== undefined && (obj.bForeground = message.bForeground);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgOpenNewTab>, I>>(base?: I): CMsgOpenNewTab {
    return CMsgOpenNewTab.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgOpenNewTab>, I>>(object: I): CMsgOpenNewTab {
    const message = createBaseCMsgOpenNewTab();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.bForeground = object.bForeground ?? false;
    return message;
  },
};

function createBaseCMsgPopupHTMLWindow(): CMsgPopupHTMLWindow {
  return {
    browserHandle: 0,
    url: "",
    x: 0,
    y: 0,
    wide: 0,
    tall: 0,
    popupIndex: 0,
    trustedCreator: false,
    name: "",
    hwnd: 0,
    parentPopupIndex: 0,
  };
}

export const CMsgPopupHTMLWindow = {
  encode(message: CMsgPopupHTMLWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.x !== 0) {
      writer.uint32(24).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(32).int32(message.y);
    }
    if (message.wide !== 0) {
      writer.uint32(40).uint32(message.wide);
    }
    if (message.tall !== 0) {
      writer.uint32(48).uint32(message.tall);
    }
    if (message.popupIndex !== 0) {
      writer.uint32(56).uint32(message.popupIndex);
    }
    if (message.trustedCreator === true) {
      writer.uint32(64).bool(message.trustedCreator);
    }
    if (message.name !== "") {
      writer.uint32(74).string(message.name);
    }
    if (message.hwnd !== 0) {
      writer.uint32(80).uint64(message.hwnd);
    }
    if (message.parentPopupIndex !== 0) {
      writer.uint32(88).uint32(message.parentPopupIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPopupHTMLWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPopupHTMLWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.x = reader.int32();
          break;
        case 4:
          message.y = reader.int32();
          break;
        case 5:
          message.wide = reader.uint32();
          break;
        case 6:
          message.tall = reader.uint32();
          break;
        case 7:
          message.popupIndex = reader.uint32();
          break;
        case 8:
          message.trustedCreator = reader.bool();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.hwnd = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.parentPopupIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPopupHTMLWindow {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      wide: isSet(object.wide) ? Number(object.wide) : 0,
      tall: isSet(object.tall) ? Number(object.tall) : 0,
      popupIndex: isSet(object.popupIndex) ? Number(object.popupIndex) : 0,
      trustedCreator: isSet(object.trustedCreator) ? Boolean(object.trustedCreator) : false,
      name: isSet(object.name) ? String(object.name) : "",
      hwnd: isSet(object.hwnd) ? Number(object.hwnd) : 0,
      parentPopupIndex: isSet(object.parentPopupIndex) ? Number(object.parentPopupIndex) : 0,
    };
  },

  toJSON(message: CMsgPopupHTMLWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.wide !== undefined && (obj.wide = Math.round(message.wide));
    message.tall !== undefined && (obj.tall = Math.round(message.tall));
    message.popupIndex !== undefined && (obj.popupIndex = Math.round(message.popupIndex));
    message.trustedCreator !== undefined && (obj.trustedCreator = message.trustedCreator);
    message.name !== undefined && (obj.name = message.name);
    message.hwnd !== undefined && (obj.hwnd = Math.round(message.hwnd));
    message.parentPopupIndex !== undefined && (obj.parentPopupIndex = Math.round(message.parentPopupIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPopupHTMLWindow>, I>>(base?: I): CMsgPopupHTMLWindow {
    return CMsgPopupHTMLWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPopupHTMLWindow>, I>>(object: I): CMsgPopupHTMLWindow {
    const message = createBaseCMsgPopupHTMLWindow();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.wide = object.wide ?? 0;
    message.tall = object.tall ?? 0;
    message.popupIndex = object.popupIndex ?? 0;
    message.trustedCreator = object.trustedCreator ?? false;
    message.name = object.name ?? "";
    message.hwnd = object.hwnd ?? 0;
    message.parentPopupIndex = object.parentPopupIndex ?? 0;
    return message;
  },
};

function createBaseCMsgPopupHTMLWindowResponse(): CMsgPopupHTMLWindowResponse {
  return { browserHandle: 0, bAllow: false };
}

export const CMsgPopupHTMLWindowResponse = {
  encode(message: CMsgPopupHTMLWindowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.bAllow === true) {
      writer.uint32(16).bool(message.bAllow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPopupHTMLWindowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPopupHTMLWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.bAllow = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPopupHTMLWindowResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      bAllow: isSet(object.bAllow) ? Boolean(object.bAllow) : false,
    };
  },

  toJSON(message: CMsgPopupHTMLWindowResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.bAllow !== undefined && (obj.bAllow = message.bAllow);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPopupHTMLWindowResponse>, I>>(base?: I): CMsgPopupHTMLWindowResponse {
    return CMsgPopupHTMLWindowResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPopupHTMLWindowResponse>, I>>(object: I): CMsgPopupHTMLWindowResponse {
    const message = createBaseCMsgPopupHTMLWindowResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.bAllow = object.bAllow ?? false;
    return message;
  },
};

function createBaseCMsgSetHTMLTitle(): CMsgSetHTMLTitle {
  return { browserHandle: 0, title: "" };
}

export const CMsgSetHTMLTitle = {
  encode(message: CMsgSetHTMLTitle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetHTMLTitle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetHTMLTitle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetHTMLTitle {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: CMsgSetHTMLTitle): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetHTMLTitle>, I>>(base?: I): CMsgSetHTMLTitle {
    return CMsgSetHTMLTitle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetHTMLTitle>, I>>(object: I): CMsgSetHTMLTitle {
    const message = createBaseCMsgSetHTMLTitle();
    message.browserHandle = object.browserHandle ?? 0;
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseCMsgLoadingResource(): CMsgLoadingResource {
  return { browserHandle: 0, url: "" };
}

export const CMsgLoadingResource = {
  encode(message: CMsgLoadingResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLoadingResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLoadingResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLoadingResource {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CMsgLoadingResource): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLoadingResource>, I>>(base?: I): CMsgLoadingResource {
    return CMsgLoadingResource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLoadingResource>, I>>(object: I): CMsgLoadingResource {
    const message = createBaseCMsgLoadingResource();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCMsgStatusText(): CMsgStatusText {
  return { browserHandle: 0, text: "" };
}

export const CMsgStatusText = {
  encode(message: CMsgStatusText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStatusText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStatusText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStatusText {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgStatusText): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStatusText>, I>>(base?: I): CMsgStatusText {
    return CMsgStatusText.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStatusText>, I>>(object: I): CMsgStatusText {
    const message = createBaseCMsgStatusText();
    message.browserHandle = object.browserHandle ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgSetCursor(): CMsgSetCursor {
  return { browserHandle: 0, cursor: 0, customData: Buffer.alloc(0), wide: 0, tall: 0, xhotspot: 0, yhotspot: 0 };
}

export const CMsgSetCursor = {
  encode(message: CMsgSetCursor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.cursor !== 0) {
      writer.uint32(16).uint32(message.cursor);
    }
    if (message.customData.length !== 0) {
      writer.uint32(26).bytes(message.customData);
    }
    if (message.wide !== 0) {
      writer.uint32(32).uint32(message.wide);
    }
    if (message.tall !== 0) {
      writer.uint32(40).uint32(message.tall);
    }
    if (message.xhotspot !== 0) {
      writer.uint32(48).uint32(message.xhotspot);
    }
    if (message.yhotspot !== 0) {
      writer.uint32(56).uint32(message.yhotspot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetCursor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetCursor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.cursor = reader.uint32();
          break;
        case 3:
          message.customData = reader.bytes() as Buffer;
          break;
        case 4:
          message.wide = reader.uint32();
          break;
        case 5:
          message.tall = reader.uint32();
          break;
        case 6:
          message.xhotspot = reader.uint32();
          break;
        case 7:
          message.yhotspot = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetCursor {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      cursor: isSet(object.cursor) ? Number(object.cursor) : 0,
      customData: isSet(object.customData) ? Buffer.from(bytesFromBase64(object.customData)) : Buffer.alloc(0),
      wide: isSet(object.wide) ? Number(object.wide) : 0,
      tall: isSet(object.tall) ? Number(object.tall) : 0,
      xhotspot: isSet(object.xhotspot) ? Number(object.xhotspot) : 0,
      yhotspot: isSet(object.yhotspot) ? Number(object.yhotspot) : 0,
    };
  },

  toJSON(message: CMsgSetCursor): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.cursor !== undefined && (obj.cursor = Math.round(message.cursor));
    message.customData !== undefined &&
      (obj.customData = base64FromBytes(message.customData !== undefined ? message.customData : Buffer.alloc(0)));
    message.wide !== undefined && (obj.wide = Math.round(message.wide));
    message.tall !== undefined && (obj.tall = Math.round(message.tall));
    message.xhotspot !== undefined && (obj.xhotspot = Math.round(message.xhotspot));
    message.yhotspot !== undefined && (obj.yhotspot = Math.round(message.yhotspot));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetCursor>, I>>(base?: I): CMsgSetCursor {
    return CMsgSetCursor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetCursor>, I>>(object: I): CMsgSetCursor {
    const message = createBaseCMsgSetCursor();
    message.browserHandle = object.browserHandle ?? 0;
    message.cursor = object.cursor ?? 0;
    message.customData = object.customData ?? Buffer.alloc(0);
    message.wide = object.wide ?? 0;
    message.tall = object.tall ?? 0;
    message.xhotspot = object.xhotspot ?? 0;
    message.yhotspot = object.yhotspot ?? 0;
    return message;
  },
};

function createBaseCMsgFileLoadDialog(): CMsgFileLoadDialog {
  return { browserHandle: 0, title: "", initialFile: "", acceptTypes: [], isSave: false };
}

export const CMsgFileLoadDialog = {
  encode(message: CMsgFileLoadDialog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.initialFile !== "") {
      writer.uint32(26).string(message.initialFile);
    }
    for (const v of message.acceptTypes) {
      writer.uint32(34).string(v!);
    }
    if (message.isSave === true) {
      writer.uint32(40).bool(message.isSave);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFileLoadDialog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFileLoadDialog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.initialFile = reader.string();
          break;
        case 4:
          message.acceptTypes.push(reader.string());
          break;
        case 5:
          message.isSave = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFileLoadDialog {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      initialFile: isSet(object.initialFile) ? String(object.initialFile) : "",
      acceptTypes: Array.isArray(object?.acceptTypes) ? object.acceptTypes.map((e: any) => String(e)) : [],
      isSave: isSet(object.isSave) ? Boolean(object.isSave) : false,
    };
  },

  toJSON(message: CMsgFileLoadDialog): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.title !== undefined && (obj.title = message.title);
    message.initialFile !== undefined && (obj.initialFile = message.initialFile);
    if (message.acceptTypes) {
      obj.acceptTypes = message.acceptTypes.map((e) => e);
    } else {
      obj.acceptTypes = [];
    }
    message.isSave !== undefined && (obj.isSave = message.isSave);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFileLoadDialog>, I>>(base?: I): CMsgFileLoadDialog {
    return CMsgFileLoadDialog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFileLoadDialog>, I>>(object: I): CMsgFileLoadDialog {
    const message = createBaseCMsgFileLoadDialog();
    message.browserHandle = object.browserHandle ?? 0;
    message.title = object.title ?? "";
    message.initialFile = object.initialFile ?? "";
    message.acceptTypes = object.acceptTypes?.map((e) => e) || [];
    message.isSave = object.isSave ?? false;
    return message;
  },
};

function createBaseCMsgFileLoadDialogResponse(): CMsgFileLoadDialogResponse {
  return { browserHandle: 0, files: [] };
}

export const CMsgFileLoadDialogResponse = {
  encode(message: CMsgFileLoadDialogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    for (const v of message.files) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFileLoadDialogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFileLoadDialogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFileLoadDialogResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      files: Array.isArray(object?.files) ? object.files.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CMsgFileLoadDialogResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFileLoadDialogResponse>, I>>(base?: I): CMsgFileLoadDialogResponse {
    return CMsgFileLoadDialogResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFileLoadDialogResponse>, I>>(object: I): CMsgFileLoadDialogResponse {
    const message = createBaseCMsgFileLoadDialogResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgShowToolTip(): CMsgShowToolTip {
  return { browserHandle: 0, text: "" };
}

export const CMsgShowToolTip = {
  encode(message: CMsgShowToolTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShowToolTip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShowToolTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShowToolTip {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgShowToolTip): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShowToolTip>, I>>(base?: I): CMsgShowToolTip {
    return CMsgShowToolTip.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShowToolTip>, I>>(object: I): CMsgShowToolTip {
    const message = createBaseCMsgShowToolTip();
    message.browserHandle = object.browserHandle ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgUpdateToolTip(): CMsgUpdateToolTip {
  return { browserHandle: 0, text: "" };
}

export const CMsgUpdateToolTip = {
  encode(message: CMsgUpdateToolTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUpdateToolTip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUpdateToolTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgUpdateToolTip {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgUpdateToolTip): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgUpdateToolTip>, I>>(base?: I): CMsgUpdateToolTip {
    return CMsgUpdateToolTip.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgUpdateToolTip>, I>>(object: I): CMsgUpdateToolTip {
    const message = createBaseCMsgUpdateToolTip();
    message.browserHandle = object.browserHandle ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgHideToolTip(): CMsgHideToolTip {
  return { browserHandle: 0 };
}

export const CMsgHideToolTip = {
  encode(message: CMsgHideToolTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHideToolTip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHideToolTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHideToolTip {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgHideToolTip): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHideToolTip>, I>>(base?: I): CMsgHideToolTip {
    return CMsgHideToolTip.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHideToolTip>, I>>(object: I): CMsgHideToolTip {
    const message = createBaseCMsgHideToolTip();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSearchResults(): CMsgSearchResults {
  return { browserHandle: 0, activeMatch: 0, results: 0 };
}

export const CMsgSearchResults = {
  encode(message: CMsgSearchResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.activeMatch !== 0) {
      writer.uint32(16).int32(message.activeMatch);
    }
    if (message.results !== 0) {
      writer.uint32(24).int32(message.results);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSearchResults {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSearchResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.activeMatch = reader.int32();
          break;
        case 3:
          message.results = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSearchResults {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      activeMatch: isSet(object.activeMatch) ? Number(object.activeMatch) : 0,
      results: isSet(object.results) ? Number(object.results) : 0,
    };
  },

  toJSON(message: CMsgSearchResults): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.activeMatch !== undefined && (obj.activeMatch = Math.round(message.activeMatch));
    message.results !== undefined && (obj.results = Math.round(message.results));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSearchResults>, I>>(base?: I): CMsgSearchResults {
    return CMsgSearchResults.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSearchResults>, I>>(object: I): CMsgSearchResults {
    const message = createBaseCMsgSearchResults();
    message.browserHandle = object.browserHandle ?? 0;
    message.activeMatch = object.activeMatch ?? 0;
    message.results = object.results ?? 0;
    return message;
  },
};

function createBaseCMsgClose(): CMsgClose {
  return { browserHandle: 0 };
}

export const CMsgClose = {
  encode(message: CMsgClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClose {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgClose): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClose>, I>>(base?: I): CMsgClose {
    return CMsgClose.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClose>, I>>(object: I): CMsgClose {
    const message = createBaseCMsgClose();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetSharedPaintBuffers(): CMsgSetSharedPaintBuffers {
  return { browserHandle: 0, wide: 0, tall: 0, sourcePid: 0, sourceHandle: 0, handle: 0 };
}

export const CMsgSetSharedPaintBuffers = {
  encode(message: CMsgSetSharedPaintBuffers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.wide !== 0) {
      writer.uint32(16).uint32(message.wide);
    }
    if (message.tall !== 0) {
      writer.uint32(24).uint32(message.tall);
    }
    if (message.sourcePid !== 0) {
      writer.uint32(32).uint64(message.sourcePid);
    }
    if (message.sourceHandle !== 0) {
      writer.uint32(40).uint64(message.sourceHandle);
    }
    if (message.handle !== 0) {
      writer.uint32(48).uint64(message.handle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetSharedPaintBuffers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetSharedPaintBuffers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.wide = reader.uint32();
          break;
        case 3:
          message.tall = reader.uint32();
          break;
        case 4:
          message.sourcePid = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.sourceHandle = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.handle = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetSharedPaintBuffers {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      wide: isSet(object.wide) ? Number(object.wide) : 0,
      tall: isSet(object.tall) ? Number(object.tall) : 0,
      sourcePid: isSet(object.sourcePid) ? Number(object.sourcePid) : 0,
      sourceHandle: isSet(object.sourceHandle) ? Number(object.sourceHandle) : 0,
      handle: isSet(object.handle) ? Number(object.handle) : 0,
    };
  },

  toJSON(message: CMsgSetSharedPaintBuffers): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.wide !== undefined && (obj.wide = Math.round(message.wide));
    message.tall !== undefined && (obj.tall = Math.round(message.tall));
    message.sourcePid !== undefined && (obj.sourcePid = Math.round(message.sourcePid));
    message.sourceHandle !== undefined && (obj.sourceHandle = Math.round(message.sourceHandle));
    message.handle !== undefined && (obj.handle = Math.round(message.handle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetSharedPaintBuffers>, I>>(base?: I): CMsgSetSharedPaintBuffers {
    return CMsgSetSharedPaintBuffers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetSharedPaintBuffers>, I>>(object: I): CMsgSetSharedPaintBuffers {
    const message = createBaseCMsgSetSharedPaintBuffers();
    message.browserHandle = object.browserHandle ?? 0;
    message.wide = object.wide ?? 0;
    message.tall = object.tall ?? 0;
    message.sourcePid = object.sourcePid ?? 0;
    message.sourceHandle = object.sourceHandle ?? 0;
    message.handle = object.handle ?? 0;
    return message;
  },
};

function createBaseCMsgAckSharedPaintBuffers(): CMsgAckSharedPaintBuffers {
  return { browserHandle: 0 };
}

export const CMsgAckSharedPaintBuffers = {
  encode(message: CMsgAckSharedPaintBuffers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAckSharedPaintBuffers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAckSharedPaintBuffers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAckSharedPaintBuffers {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgAckSharedPaintBuffers): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAckSharedPaintBuffers>, I>>(base?: I): CMsgAckSharedPaintBuffers {
    return CMsgAckSharedPaintBuffers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAckSharedPaintBuffers>, I>>(object: I): CMsgAckSharedPaintBuffers {
    const message = createBaseCMsgAckSharedPaintBuffers();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgNeedsPaint(): CMsgNeedsPaint {
  return {
    browserHandle: 0,
    scrollx: 0,
    scrolly: 0,
    pagescale: 0,
    pageserial: 0,
    avgFrameMs: 0,
    stddevSumFrameMs: 0,
    longFrameMs: 0,
  };
}

export const CMsgNeedsPaint = {
  encode(message: CMsgNeedsPaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scrollx !== 0) {
      writer.uint32(80).uint32(message.scrollx);
    }
    if (message.scrolly !== 0) {
      writer.uint32(88).uint32(message.scrolly);
    }
    if (message.pagescale !== 0) {
      writer.uint32(101).float(message.pagescale);
    }
    if (message.pageserial !== 0) {
      writer.uint32(120).uint32(message.pageserial);
    }
    if (message.avgFrameMs !== 0) {
      writer.uint32(160).uint32(message.avgFrameMs);
    }
    if (message.stddevSumFrameMs !== 0) {
      writer.uint32(173).float(message.stddevSumFrameMs);
    }
    if (message.longFrameMs !== 0) {
      writer.uint32(176).uint32(message.longFrameMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNeedsPaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNeedsPaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 10:
          message.scrollx = reader.uint32();
          break;
        case 11:
          message.scrolly = reader.uint32();
          break;
        case 12:
          message.pagescale = reader.float();
          break;
        case 15:
          message.pageserial = reader.uint32();
          break;
        case 20:
          message.avgFrameMs = reader.uint32();
          break;
        case 21:
          message.stddevSumFrameMs = reader.float();
          break;
        case 22:
          message.longFrameMs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNeedsPaint {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scrollx: isSet(object.scrollx) ? Number(object.scrollx) : 0,
      scrolly: isSet(object.scrolly) ? Number(object.scrolly) : 0,
      pagescale: isSet(object.pagescale) ? Number(object.pagescale) : 0,
      pageserial: isSet(object.pageserial) ? Number(object.pageserial) : 0,
      avgFrameMs: isSet(object.avgFrameMs) ? Number(object.avgFrameMs) : 0,
      stddevSumFrameMs: isSet(object.stddevSumFrameMs) ? Number(object.stddevSumFrameMs) : 0,
      longFrameMs: isSet(object.longFrameMs) ? Number(object.longFrameMs) : 0,
    };
  },

  toJSON(message: CMsgNeedsPaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scrollx !== undefined && (obj.scrollx = Math.round(message.scrollx));
    message.scrolly !== undefined && (obj.scrolly = Math.round(message.scrolly));
    message.pagescale !== undefined && (obj.pagescale = message.pagescale);
    message.pageserial !== undefined && (obj.pageserial = Math.round(message.pageserial));
    message.avgFrameMs !== undefined && (obj.avgFrameMs = Math.round(message.avgFrameMs));
    message.stddevSumFrameMs !== undefined && (obj.stddevSumFrameMs = message.stddevSumFrameMs);
    message.longFrameMs !== undefined && (obj.longFrameMs = Math.round(message.longFrameMs));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNeedsPaint>, I>>(base?: I): CMsgNeedsPaint {
    return CMsgNeedsPaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNeedsPaint>, I>>(object: I): CMsgNeedsPaint {
    const message = createBaseCMsgNeedsPaint();
    message.browserHandle = object.browserHandle ?? 0;
    message.scrollx = object.scrollx ?? 0;
    message.scrolly = object.scrolly ?? 0;
    message.pagescale = object.pagescale ?? 0;
    message.pageserial = object.pageserial ?? 0;
    message.avgFrameMs = object.avgFrameMs ?? 0;
    message.stddevSumFrameMs = object.stddevSumFrameMs ?? 0;
    message.longFrameMs = object.longFrameMs ?? 0;
    return message;
  },
};

function createBaseCMsgComboNeedsPaint(): CMsgComboNeedsPaint {
  return { browserHandle: 0, rgba: 0, comboboxWide: 0, comboboxTall: 0, sharedMemoryHandle: 0, sharedMemorySize: 0 };
}

export const CMsgComboNeedsPaint = {
  encode(message: CMsgComboNeedsPaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.rgba !== 0) {
      writer.uint32(16).uint64(message.rgba);
    }
    if (message.comboboxWide !== 0) {
      writer.uint32(24).uint32(message.comboboxWide);
    }
    if (message.comboboxTall !== 0) {
      writer.uint32(32).uint32(message.comboboxTall);
    }
    if (message.sharedMemoryHandle !== 0) {
      writer.uint32(40).uint64(message.sharedMemoryHandle);
    }
    if (message.sharedMemorySize !== 0) {
      writer.uint32(56).uint64(message.sharedMemorySize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgComboNeedsPaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgComboNeedsPaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.rgba = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.comboboxWide = reader.uint32();
          break;
        case 4:
          message.comboboxTall = reader.uint32();
          break;
        case 5:
          message.sharedMemoryHandle = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.sharedMemorySize = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgComboNeedsPaint {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      rgba: isSet(object.rgba) ? Number(object.rgba) : 0,
      comboboxWide: isSet(object.comboboxWide) ? Number(object.comboboxWide) : 0,
      comboboxTall: isSet(object.comboboxTall) ? Number(object.comboboxTall) : 0,
      sharedMemoryHandle: isSet(object.sharedMemoryHandle) ? Number(object.sharedMemoryHandle) : 0,
      sharedMemorySize: isSet(object.sharedMemorySize) ? Number(object.sharedMemorySize) : 0,
    };
  },

  toJSON(message: CMsgComboNeedsPaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.rgba !== undefined && (obj.rgba = Math.round(message.rgba));
    message.comboboxWide !== undefined && (obj.comboboxWide = Math.round(message.comboboxWide));
    message.comboboxTall !== undefined && (obj.comboboxTall = Math.round(message.comboboxTall));
    message.sharedMemoryHandle !== undefined && (obj.sharedMemoryHandle = Math.round(message.sharedMemoryHandle));
    message.sharedMemorySize !== undefined && (obj.sharedMemorySize = Math.round(message.sharedMemorySize));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgComboNeedsPaint>, I>>(base?: I): CMsgComboNeedsPaint {
    return CMsgComboNeedsPaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgComboNeedsPaint>, I>>(object: I): CMsgComboNeedsPaint {
    const message = createBaseCMsgComboNeedsPaint();
    message.browserHandle = object.browserHandle ?? 0;
    message.rgba = object.rgba ?? 0;
    message.comboboxWide = object.comboboxWide ?? 0;
    message.comboboxTall = object.comboboxTall ?? 0;
    message.sharedMemoryHandle = object.sharedMemoryHandle ?? 0;
    message.sharedMemorySize = object.sharedMemorySize ?? 0;
    return message;
  },
};

function createBaseCMsgNeedsSharedTexturePaint(): CMsgNeedsSharedTexturePaint {
  return { browserHandle: 0, shareHandle: 0, width: 0, height: 0, scrollx: 0, scrolly: 0, pagescale: 0, pageserial: 0 };
}

export const CMsgNeedsSharedTexturePaint = {
  encode(message: CMsgNeedsSharedTexturePaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.shareHandle !== 0) {
      writer.uint32(16).uint32(message.shareHandle);
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint32(message.height);
    }
    if (message.scrollx !== 0) {
      writer.uint32(40).uint32(message.scrollx);
    }
    if (message.scrolly !== 0) {
      writer.uint32(48).uint32(message.scrolly);
    }
    if (message.pagescale !== 0) {
      writer.uint32(61).float(message.pagescale);
    }
    if (message.pageserial !== 0) {
      writer.uint32(64).uint32(message.pageserial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNeedsSharedTexturePaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNeedsSharedTexturePaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.shareHandle = reader.uint32();
          break;
        case 3:
          message.width = reader.uint32();
          break;
        case 4:
          message.height = reader.uint32();
          break;
        case 5:
          message.scrollx = reader.uint32();
          break;
        case 6:
          message.scrolly = reader.uint32();
          break;
        case 7:
          message.pagescale = reader.float();
          break;
        case 8:
          message.pageserial = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNeedsSharedTexturePaint {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      shareHandle: isSet(object.shareHandle) ? Number(object.shareHandle) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      scrollx: isSet(object.scrollx) ? Number(object.scrollx) : 0,
      scrolly: isSet(object.scrolly) ? Number(object.scrolly) : 0,
      pagescale: isSet(object.pagescale) ? Number(object.pagescale) : 0,
      pageserial: isSet(object.pageserial) ? Number(object.pageserial) : 0,
    };
  },

  toJSON(message: CMsgNeedsSharedTexturePaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.shareHandle !== undefined && (obj.shareHandle = Math.round(message.shareHandle));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.scrollx !== undefined && (obj.scrollx = Math.round(message.scrollx));
    message.scrolly !== undefined && (obj.scrolly = Math.round(message.scrolly));
    message.pagescale !== undefined && (obj.pagescale = message.pagescale);
    message.pageserial !== undefined && (obj.pageserial = Math.round(message.pageserial));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNeedsSharedTexturePaint>, I>>(base?: I): CMsgNeedsSharedTexturePaint {
    return CMsgNeedsSharedTexturePaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNeedsSharedTexturePaint>, I>>(object: I): CMsgNeedsSharedTexturePaint {
    const message = createBaseCMsgNeedsSharedTexturePaint();
    message.browserHandle = object.browserHandle ?? 0;
    message.shareHandle = object.shareHandle ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.scrollx = object.scrollx ?? 0;
    message.scrolly = object.scrolly ?? 0;
    message.pagescale = object.pagescale ?? 0;
    message.pageserial = object.pageserial ?? 0;
    return message;
  },
};

function createBaseCMsgGameOverlayTexturePaint(): CMsgGameOverlayTexturePaint {
  return { browserHandle: 0, width: 0, height: 0, scrollx: 0, scrolly: 0, pagescale: 0, pageserial: 0 };
}

export const CMsgGameOverlayTexturePaint = {
  encode(message: CMsgGameOverlayTexturePaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint32(message.height);
    }
    if (message.scrollx !== 0) {
      writer.uint32(40).uint32(message.scrollx);
    }
    if (message.scrolly !== 0) {
      writer.uint32(48).uint32(message.scrolly);
    }
    if (message.pagescale !== 0) {
      writer.uint32(61).float(message.pagescale);
    }
    if (message.pageserial !== 0) {
      writer.uint32(64).uint32(message.pageserial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameOverlayTexturePaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameOverlayTexturePaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 3:
          message.width = reader.uint32();
          break;
        case 4:
          message.height = reader.uint32();
          break;
        case 5:
          message.scrollx = reader.uint32();
          break;
        case 6:
          message.scrolly = reader.uint32();
          break;
        case 7:
          message.pagescale = reader.float();
          break;
        case 8:
          message.pageserial = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameOverlayTexturePaint {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      scrollx: isSet(object.scrollx) ? Number(object.scrollx) : 0,
      scrolly: isSet(object.scrolly) ? Number(object.scrolly) : 0,
      pagescale: isSet(object.pagescale) ? Number(object.pagescale) : 0,
      pageserial: isSet(object.pageserial) ? Number(object.pageserial) : 0,
    };
  },

  toJSON(message: CMsgGameOverlayTexturePaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.scrollx !== undefined && (obj.scrollx = Math.round(message.scrollx));
    message.scrolly !== undefined && (obj.scrolly = Math.round(message.scrolly));
    message.pagescale !== undefined && (obj.pagescale = message.pagescale);
    message.pageserial !== undefined && (obj.pageserial = Math.round(message.pageserial));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameOverlayTexturePaint>, I>>(base?: I): CMsgGameOverlayTexturePaint {
    return CMsgGameOverlayTexturePaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameOverlayTexturePaint>, I>>(object: I): CMsgGameOverlayTexturePaint {
    const message = createBaseCMsgGameOverlayTexturePaint();
    message.browserHandle = object.browserHandle ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.scrollx = object.scrollx ?? 0;
    message.scrolly = object.scrolly ?? 0;
    message.pagescale = object.pagescale ?? 0;
    message.pageserial = object.pageserial ?? 0;
    return message;
  },
};

function createBaseCMsgGetZoom(): CMsgGetZoom {
  return { browserHandle: 0 };
}

export const CMsgGetZoom = {
  encode(message: CMsgGetZoom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetZoom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetZoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGetZoom {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgGetZoom): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGetZoom>, I>>(base?: I): CMsgGetZoom {
    return CMsgGetZoom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGetZoom>, I>>(object: I): CMsgGetZoom {
    const message = createBaseCMsgGetZoom();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgGetZoomResponse(): CMsgGetZoomResponse {
  return { browserHandle: 0, zoom: 0 };
}

export const CMsgGetZoomResponse = {
  encode(message: CMsgGetZoomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.zoom !== 0) {
      writer.uint32(21).float(message.zoom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetZoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetZoomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.zoom = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGetZoomResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      zoom: isSet(object.zoom) ? Number(object.zoom) : 0,
    };
  },

  toJSON(message: CMsgGetZoomResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.zoom !== undefined && (obj.zoom = message.zoom);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGetZoomResponse>, I>>(base?: I): CMsgGetZoomResponse {
    return CMsgGetZoomResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGetZoomResponse>, I>>(object: I): CMsgGetZoomResponse {
    const message = createBaseCMsgGetZoomResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.zoom = object.zoom ?? 0;
    return message;
  },
};

function createBaseCMsgLinkAtPosition(): CMsgLinkAtPosition {
  return { browserHandle: 0, x: 0, y: 0 };
}

export const CMsgLinkAtPosition = {
  encode(message: CMsgLinkAtPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLinkAtPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLinkAtPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLinkAtPosition {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgLinkAtPosition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLinkAtPosition>, I>>(base?: I): CMsgLinkAtPosition {
    return CMsgLinkAtPosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLinkAtPosition>, I>>(object: I): CMsgLinkAtPosition {
    const message = createBaseCMsgLinkAtPosition();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgLinkAtPositionResponse(): CMsgLinkAtPositionResponse {
  return { browserHandle: 0, x: 0, y: 0, url: "", blivelink: false, binput: false };
}

export const CMsgLinkAtPositionResponse = {
  encode(message: CMsgLinkAtPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.blivelink === true) {
      writer.uint32(40).bool(message.blivelink);
    }
    if (message.binput === true) {
      writer.uint32(48).bool(message.binput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLinkAtPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLinkAtPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.blivelink = reader.bool();
          break;
        case 6:
          message.binput = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLinkAtPositionResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      blivelink: isSet(object.blivelink) ? Boolean(object.blivelink) : false,
      binput: isSet(object.binput) ? Boolean(object.binput) : false,
    };
  },

  toJSON(message: CMsgLinkAtPositionResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.url !== undefined && (obj.url = message.url);
    message.blivelink !== undefined && (obj.blivelink = message.blivelink);
    message.binput !== undefined && (obj.binput = message.binput);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLinkAtPositionResponse>, I>>(base?: I): CMsgLinkAtPositionResponse {
    return CMsgLinkAtPositionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLinkAtPositionResponse>, I>>(object: I): CMsgLinkAtPositionResponse {
    const message = createBaseCMsgLinkAtPositionResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.url = object.url ?? "";
    message.blivelink = object.blivelink ?? false;
    message.binput = object.binput ?? false;
    return message;
  },
};

function createBaseCMsgZoomToElementAtPosition(): CMsgZoomToElementAtPosition {
  return { browserHandle: 0, x: 0, y: 0 };
}

export const CMsgZoomToElementAtPosition = {
  encode(message: CMsgZoomToElementAtPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgZoomToElementAtPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgZoomToElementAtPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgZoomToElementAtPosition {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgZoomToElementAtPosition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgZoomToElementAtPosition>, I>>(base?: I): CMsgZoomToElementAtPosition {
    return CMsgZoomToElementAtPosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgZoomToElementAtPosition>, I>>(object: I): CMsgZoomToElementAtPosition {
    const message = createBaseCMsgZoomToElementAtPosition();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgZoomToElementAtPositionResponse(): CMsgZoomToElementAtPositionResponse {
  return { browserHandle: 0, scale: 0, duration: 0 };
}

export const CMsgZoomToElementAtPositionResponse = {
  encode(message: CMsgZoomToElementAtPositionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgZoomToElementAtPositionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgZoomToElementAtPositionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.scale = reader.float();
          break;
        case 3:
          message.duration = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgZoomToElementAtPositionResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: CMsgZoomToElementAtPositionResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scale !== undefined && (obj.scale = message.scale);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgZoomToElementAtPositionResponse>, I>>(
    base?: I,
  ): CMsgZoomToElementAtPositionResponse {
    return CMsgZoomToElementAtPositionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgZoomToElementAtPositionResponse>, I>>(
    object: I,
  ): CMsgZoomToElementAtPositionResponse {
    const message = createBaseCMsgZoomToElementAtPositionResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.scale = object.scale ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseCMsgScalePageToValue(): CMsgScalePageToValue {
  return { browserHandle: 0, scale: 0, x: 0, y: 0 };
}

export const CMsgScalePageToValue = {
  encode(message: CMsgScalePageToValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.scale !== 0) {
      writer.uint32(21).float(message.scale);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgScalePageToValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgScalePageToValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.scale = reader.float();
          break;
        case 3:
          message.x = reader.float();
          break;
        case 4:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgScalePageToValue {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgScalePageToValue): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.scale !== undefined && (obj.scale = message.scale);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgScalePageToValue>, I>>(base?: I): CMsgScalePageToValue {
    return CMsgScalePageToValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgScalePageToValue>, I>>(object: I): CMsgScalePageToValue {
    const message = createBaseCMsgScalePageToValue();
    message.browserHandle = object.browserHandle ?? 0;
    message.scale = object.scale ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgForcePopupsToDirectHWND(): CMsgForcePopupsToDirectHWND {
  return { browserHandle: 0, forceDirectHwndPopups: false };
}

export const CMsgForcePopupsToDirectHWND = {
  encode(message: CMsgForcePopupsToDirectHWND, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.forceDirectHwndPopups === true) {
      writer.uint32(16).bool(message.forceDirectHwndPopups);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgForcePopupsToDirectHWND {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgForcePopupsToDirectHWND();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.forceDirectHwndPopups = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgForcePopupsToDirectHWND {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      forceDirectHwndPopups: isSet(object.forceDirectHwndPopups) ? Boolean(object.forceDirectHwndPopups) : false,
    };
  },

  toJSON(message: CMsgForcePopupsToDirectHWND): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.forceDirectHwndPopups !== undefined && (obj.forceDirectHwndPopups = message.forceDirectHwndPopups);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgForcePopupsToDirectHWND>, I>>(base?: I): CMsgForcePopupsToDirectHWND {
    return CMsgForcePopupsToDirectHWND.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgForcePopupsToDirectHWND>, I>>(object: I): CMsgForcePopupsToDirectHWND {
    const message = createBaseCMsgForcePopupsToDirectHWND();
    message.browserHandle = object.browserHandle ?? 0;
    message.forceDirectHwndPopups = object.forceDirectHwndPopups ?? false;
    return message;
  },
};

function createBaseCMsgScalePageToValueResponse(): CMsgScalePageToValueResponse {
  return { browserHandle: 0, zoom: 0 };
}

export const CMsgScalePageToValueResponse = {
  encode(message: CMsgScalePageToValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.zoom !== 0) {
      writer.uint32(21).float(message.zoom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgScalePageToValueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgScalePageToValueResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.zoom = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgScalePageToValueResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      zoom: isSet(object.zoom) ? Number(object.zoom) : 0,
    };
  },

  toJSON(message: CMsgScalePageToValueResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.zoom !== undefined && (obj.zoom = message.zoom);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgScalePageToValueResponse>, I>>(base?: I): CMsgScalePageToValueResponse {
    return CMsgScalePageToValueResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgScalePageToValueResponse>, I>>(object: I): CMsgScalePageToValueResponse {
    const message = createBaseCMsgScalePageToValueResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.zoom = object.zoom ?? 0;
    return message;
  },
};

function createBaseCMsgSavePageToJPEG(): CMsgSavePageToJPEG {
  return { browserHandle: 0, url: "", filename: "", width: 0, height: 0 };
}

export const CMsgSavePageToJPEG = {
  encode(message: CMsgSavePageToJPEG, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    if (message.width !== 0) {
      writer.uint32(32).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(40).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSavePageToJPEG {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSavePageToJPEG();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.filename = reader.string();
          break;
        case 4:
          message.width = reader.uint32();
          break;
        case 5:
          message.height = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSavePageToJPEG {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CMsgSavePageToJPEG): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.filename !== undefined && (obj.filename = message.filename);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSavePageToJPEG>, I>>(base?: I): CMsgSavePageToJPEG {
    return CMsgSavePageToJPEG.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSavePageToJPEG>, I>>(object: I): CMsgSavePageToJPEG {
    const message = createBaseCMsgSavePageToJPEG();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.filename = object.filename ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCMsgSavePageToJPEGResponse(): CMsgSavePageToJPEGResponse {
  return { browserHandle: 0, url: "", filename: "" };
}

export const CMsgSavePageToJPEGResponse = {
  encode(message: CMsgSavePageToJPEGResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.filename !== "") {
      writer.uint32(26).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSavePageToJPEGResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSavePageToJPEGResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.filename = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSavePageToJPEGResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
    };
  },

  toJSON(message: CMsgSavePageToJPEGResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.filename !== undefined && (obj.filename = message.filename);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSavePageToJPEGResponse>, I>>(base?: I): CMsgSavePageToJPEGResponse {
    return CMsgSavePageToJPEGResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSavePageToJPEGResponse>, I>>(object: I): CMsgSavePageToJPEGResponse {
    const message = createBaseCMsgSavePageToJPEGResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseCMsgJSAlert(): CMsgJSAlert {
  return { browserHandle: 0, message: "" };
}

export const CMsgJSAlert = {
  encode(message: CMsgJSAlert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSAlert {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSAlert {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgJSAlert): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSAlert>, I>>(base?: I): CMsgJSAlert {
    return CMsgJSAlert.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSAlert>, I>>(object: I): CMsgJSAlert {
    const message = createBaseCMsgJSAlert();
    message.browserHandle = object.browserHandle ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCMsgJSConfirm(): CMsgJSConfirm {
  return { browserHandle: 0, message: "" };
}

export const CMsgJSConfirm = {
  encode(message: CMsgJSConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSConfirm {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: CMsgJSConfirm): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSConfirm>, I>>(base?: I): CMsgJSConfirm {
    return CMsgJSConfirm.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSConfirm>, I>>(object: I): CMsgJSConfirm {
    const message = createBaseCMsgJSConfirm();
    message.browserHandle = object.browserHandle ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCMsgJSDialogResponse(): CMsgJSDialogResponse {
  return { browserHandle: 0, result: false };
}

export const CMsgJSDialogResponse = {
  encode(message: CMsgJSDialogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.result === true) {
      writer.uint32(16).bool(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSDialogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSDialogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.result = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSDialogResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      result: isSet(object.result) ? Boolean(object.result) : false,
    };
  },

  toJSON(message: CMsgJSDialogResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSDialogResponse>, I>>(base?: I): CMsgJSDialogResponse {
    return CMsgJSDialogResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSDialogResponse>, I>>(object: I): CMsgJSDialogResponse {
    const message = createBaseCMsgJSDialogResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.result = object.result ?? false;
    return message;
  },
};

function createBaseCMsgCanGoBackAndForward(): CMsgCanGoBackAndForward {
  return { browserHandle: 0, bgoback: false, bgoforward: false };
}

export const CMsgCanGoBackAndForward = {
  encode(message: CMsgCanGoBackAndForward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.bgoback === true) {
      writer.uint32(16).bool(message.bgoback);
    }
    if (message.bgoforward === true) {
      writer.uint32(24).bool(message.bgoforward);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCanGoBackAndForward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCanGoBackAndForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.bgoback = reader.bool();
          break;
        case 3:
          message.bgoforward = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCanGoBackAndForward {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      bgoback: isSet(object.bgoback) ? Boolean(object.bgoback) : false,
      bgoforward: isSet(object.bgoforward) ? Boolean(object.bgoforward) : false,
    };
  },

  toJSON(message: CMsgCanGoBackAndForward): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.bgoback !== undefined && (obj.bgoback = message.bgoback);
    message.bgoforward !== undefined && (obj.bgoforward = message.bgoforward);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCanGoBackAndForward>, I>>(base?: I): CMsgCanGoBackAndForward {
    return CMsgCanGoBackAndForward.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCanGoBackAndForward>, I>>(object: I): CMsgCanGoBackAndForward {
    const message = createBaseCMsgCanGoBackAndForward();
    message.browserHandle = object.browserHandle ?? 0;
    message.bgoback = object.bgoback ?? false;
    message.bgoforward = object.bgoforward ?? false;
    return message;
  },
};

function createBaseCMsgOpenSteamURL(): CMsgOpenSteamURL {
  return { browserHandle: 0, url: "", referrer: "" };
}

export const CMsgOpenSteamURL = {
  encode(message: CMsgOpenSteamURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.referrer !== "") {
      writer.uint32(26).string(message.referrer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgOpenSteamURL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgOpenSteamURL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.referrer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgOpenSteamURL {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      referrer: isSet(object.referrer) ? String(object.referrer) : "",
    };
  },

  toJSON(message: CMsgOpenSteamURL): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    message.referrer !== undefined && (obj.referrer = message.referrer);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgOpenSteamURL>, I>>(base?: I): CMsgOpenSteamURL {
    return CMsgOpenSteamURL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgOpenSteamURL>, I>>(object: I): CMsgOpenSteamURL {
    const message = createBaseCMsgOpenSteamURL();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.referrer = object.referrer ?? "";
    return message;
  },
};

function createBaseCMsgSetCookie(): CMsgSetCookie {
  return { key: "", value: "", path: "", host: "", expires: 0, secure: false, httponly: false };
}

export const CMsgSetCookie = {
  encode(message: CMsgSetCookie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.host !== "") {
      writer.uint32(34).string(message.host);
    }
    if (message.expires !== 0) {
      writer.uint32(40).uint32(message.expires);
    }
    if (message.secure === true) {
      writer.uint32(48).bool(message.secure);
    }
    if (message.httponly === true) {
      writer.uint32(56).bool(message.httponly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetCookie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetCookie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.host = reader.string();
          break;
        case 5:
          message.expires = reader.uint32();
          break;
        case 6:
          message.secure = reader.bool();
          break;
        case 7:
          message.httponly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetCookie {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      path: isSet(object.path) ? String(object.path) : "",
      host: isSet(object.host) ? String(object.host) : "",
      expires: isSet(object.expires) ? Number(object.expires) : 0,
      secure: isSet(object.secure) ? Boolean(object.secure) : false,
      httponly: isSet(object.httponly) ? Boolean(object.httponly) : false,
    };
  },

  toJSON(message: CMsgSetCookie): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.path !== undefined && (obj.path = message.path);
    message.host !== undefined && (obj.host = message.host);
    message.expires !== undefined && (obj.expires = Math.round(message.expires));
    message.secure !== undefined && (obj.secure = message.secure);
    message.httponly !== undefined && (obj.httponly = message.httponly);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetCookie>, I>>(base?: I): CMsgSetCookie {
    return CMsgSetCookie.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetCookie>, I>>(object: I): CMsgSetCookie {
    const message = createBaseCMsgSetCookie();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.path = object.path ?? "";
    message.host = object.host ?? "";
    message.expires = object.expires ?? 0;
    message.secure = object.secure ?? false;
    message.httponly = object.httponly ?? false;
    return message;
  },
};

function createBaseCMsgSetTargetFrameRate(): CMsgSetTargetFrameRate {
  return { browserHandle: 0, nTargetFrameRate: 0 };
}

export const CMsgSetTargetFrameRate = {
  encode(message: CMsgSetTargetFrameRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.nTargetFrameRate !== 0) {
      writer.uint32(16).uint32(message.nTargetFrameRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetTargetFrameRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetTargetFrameRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.nTargetFrameRate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetTargetFrameRate {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      nTargetFrameRate: isSet(object.nTargetFrameRate) ? Number(object.nTargetFrameRate) : 0,
    };
  },

  toJSON(message: CMsgSetTargetFrameRate): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.nTargetFrameRate !== undefined && (obj.nTargetFrameRate = Math.round(message.nTargetFrameRate));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetTargetFrameRate>, I>>(base?: I): CMsgSetTargetFrameRate {
    return CMsgSetTargetFrameRate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetTargetFrameRate>, I>>(object: I): CMsgSetTargetFrameRate {
    const message = createBaseCMsgSetTargetFrameRate();
    message.browserHandle = object.browserHandle ?? 0;
    message.nTargetFrameRate = object.nTargetFrameRate ?? 0;
    return message;
  },
};

function createBaseCMsgPauseRepaint(): CMsgPauseRepaint {
  return { browserHandle: 0 };
}

export const CMsgPauseRepaint = {
  encode(message: CMsgPauseRepaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPauseRepaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPauseRepaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPauseRepaint {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgPauseRepaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPauseRepaint>, I>>(base?: I): CMsgPauseRepaint {
    return CMsgPauseRepaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPauseRepaint>, I>>(object: I): CMsgPauseRepaint {
    const message = createBaseCMsgPauseRepaint();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgFullRepaint(): CMsgFullRepaint {
  return { browserHandle: 0 };
}

export const CMsgFullRepaint = {
  encode(message: CMsgFullRepaint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFullRepaint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFullRepaint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFullRepaint {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgFullRepaint): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFullRepaint>, I>>(base?: I): CMsgFullRepaint {
    return CMsgFullRepaint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFullRepaint>, I>>(object: I): CMsgFullRepaint {
    const message = createBaseCMsgFullRepaint();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgRequestFullScreen(): CMsgRequestFullScreen {
  return { browserHandle: 0 };
}

export const CMsgRequestFullScreen = {
  encode(message: CMsgRequestFullScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgRequestFullScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgRequestFullScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgRequestFullScreen {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgRequestFullScreen): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgRequestFullScreen>, I>>(base?: I): CMsgRequestFullScreen {
    return CMsgRequestFullScreen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgRequestFullScreen>, I>>(object: I): CMsgRequestFullScreen {
    const message = createBaseCMsgRequestFullScreen();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgExitFullScreen(): CMsgExitFullScreen {
  return { browserHandle: 0 };
}

export const CMsgExitFullScreen = {
  encode(message: CMsgExitFullScreen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgExitFullScreen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgExitFullScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgExitFullScreen {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgExitFullScreen): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgExitFullScreen>, I>>(base?: I): CMsgExitFullScreen {
    return CMsgExitFullScreen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgExitFullScreen>, I>>(object: I): CMsgExitFullScreen {
    const message = createBaseCMsgExitFullScreen();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgToggleFindInPageDialog(): CMsgToggleFindInPageDialog {
  return { browserHandle: 0 };
}

export const CMsgToggleFindInPageDialog = {
  encode(message: CMsgToggleFindInPageDialog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgToggleFindInPageDialog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgToggleFindInPageDialog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgToggleFindInPageDialog {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgToggleFindInPageDialog): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgToggleFindInPageDialog>, I>>(base?: I): CMsgToggleFindInPageDialog {
    return CMsgToggleFindInPageDialog.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgToggleFindInPageDialog>, I>>(object: I): CMsgToggleFindInPageDialog {
    const message = createBaseCMsgToggleFindInPageDialog();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetPIDShuttingDown(): CMsgSetPIDShuttingDown {
  return { browserHandle: 0 };
}

export const CMsgSetPIDShuttingDown = {
  encode(message: CMsgSetPIDShuttingDown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetPIDShuttingDown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetPIDShuttingDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetPIDShuttingDown {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgSetPIDShuttingDown): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetPIDShuttingDown>, I>>(base?: I): CMsgSetPIDShuttingDown {
    return CMsgSetPIDShuttingDown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetPIDShuttingDown>, I>>(object: I): CMsgSetPIDShuttingDown {
    const message = createBaseCMsgSetPIDShuttingDown();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgDisableBackgroundThrottling(): CMsgDisableBackgroundThrottling {
  return { browserHandle: 0 };
}

export const CMsgDisableBackgroundThrottling = {
  encode(message: CMsgDisableBackgroundThrottling, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDisableBackgroundThrottling {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDisableBackgroundThrottling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDisableBackgroundThrottling {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgDisableBackgroundThrottling): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDisableBackgroundThrottling>, I>>(base?: I): CMsgDisableBackgroundThrottling {
    return CMsgDisableBackgroundThrottling.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDisableBackgroundThrottling>, I>>(
    object: I,
  ): CMsgDisableBackgroundThrottling {
    const message = createBaseCMsgDisableBackgroundThrottling();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgAckPIDShuttingDown(): CMsgAckPIDShuttingDown {
  return { browserHandle: 0 };
}

export const CMsgAckPIDShuttingDown = {
  encode(message: CMsgAckPIDShuttingDown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAckPIDShuttingDown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAckPIDShuttingDown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAckPIDShuttingDown {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgAckPIDShuttingDown): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAckPIDShuttingDown>, I>>(base?: I): CMsgAckPIDShuttingDown {
    return CMsgAckPIDShuttingDown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAckPIDShuttingDown>, I>>(object: I): CMsgAckPIDShuttingDown {
    const message = createBaseCMsgAckPIDShuttingDown();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgGetCookiesForURL(): CMsgGetCookiesForURL {
  return { browserHandle: 0, url: "" };
}

export const CMsgGetCookiesForURL = {
  encode(message: CMsgGetCookiesForURL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetCookiesForURL {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetCookiesForURL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGetCookiesForURL {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CMsgGetCookiesForURL): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGetCookiesForURL>, I>>(base?: I): CMsgGetCookiesForURL {
    return CMsgGetCookiesForURL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGetCookiesForURL>, I>>(object: I): CMsgGetCookiesForURL {
    const message = createBaseCMsgGetCookiesForURL();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCCookie(): CCookie {
  return { name: "", value: "", domain: "", path: "" };
}

export const CCookie = {
  encode(message: CCookie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCookie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCookie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.domain = reader.string();
          break;
        case 4:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CCookie {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: CCookie): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.domain !== undefined && (obj.domain = message.domain);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCookie>, I>>(base?: I): CCookie {
    return CCookie.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CCookie>, I>>(object: I): CCookie {
    const message = createBaseCCookie();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.domain = object.domain ?? "";
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseCMsgGetCookiesForURLResponse(): CMsgGetCookiesForURLResponse {
  return { browserHandle: 0, url: "", cookies: [] };
}

export const CMsgGetCookiesForURLResponse = {
  encode(message: CMsgGetCookiesForURLResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    for (const v of message.cookies) {
      CCookie.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGetCookiesForURLResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGetCookiesForURLResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.cookies.push(CCookie.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGetCookiesForURLResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      cookies: Array.isArray(object?.cookies) ? object.cookies.map((e: any) => CCookie.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgGetCookiesForURLResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    if (message.cookies) {
      obj.cookies = message.cookies.map((e) => e ? CCookie.toJSON(e) : undefined);
    } else {
      obj.cookies = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGetCookiesForURLResponse>, I>>(base?: I): CMsgGetCookiesForURLResponse {
    return CMsgGetCookiesForURLResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGetCookiesForURLResponse>, I>>(object: I): CMsgGetCookiesForURLResponse {
    const message = createBaseCMsgGetCookiesForURLResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    message.cookies = object.cookies?.map((e) => CCookie.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgNodeHasFocus(): CMsgNodeHasFocus {
  return {
    browserHandle: 0,
    bInput: false,
    name: "",
    elementtagname: "",
    searchbuttontext: "",
    bHasMultipleInputs: false,
    inputType: "",
    bIsMainFrame: false,
  };
}

export const CMsgNodeHasFocus = {
  encode(message: CMsgNodeHasFocus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.bInput === true) {
      writer.uint32(16).bool(message.bInput);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.elementtagname !== "") {
      writer.uint32(34).string(message.elementtagname);
    }
    if (message.searchbuttontext !== "") {
      writer.uint32(42).string(message.searchbuttontext);
    }
    if (message.bHasMultipleInputs === true) {
      writer.uint32(48).bool(message.bHasMultipleInputs);
    }
    if (message.inputType !== "") {
      writer.uint32(58).string(message.inputType);
    }
    if (message.bIsMainFrame === true) {
      writer.uint32(64).bool(message.bIsMainFrame);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNodeHasFocus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNodeHasFocus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.bInput = reader.bool();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.elementtagname = reader.string();
          break;
        case 5:
          message.searchbuttontext = reader.string();
          break;
        case 6:
          message.bHasMultipleInputs = reader.bool();
          break;
        case 7:
          message.inputType = reader.string();
          break;
        case 8:
          message.bIsMainFrame = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNodeHasFocus {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      bInput: isSet(object.bInput) ? Boolean(object.bInput) : false,
      name: isSet(object.name) ? String(object.name) : "",
      elementtagname: isSet(object.elementtagname) ? String(object.elementtagname) : "",
      searchbuttontext: isSet(object.searchbuttontext) ? String(object.searchbuttontext) : "",
      bHasMultipleInputs: isSet(object.bHasMultipleInputs) ? Boolean(object.bHasMultipleInputs) : false,
      inputType: isSet(object.inputType) ? String(object.inputType) : "",
      bIsMainFrame: isSet(object.bIsMainFrame) ? Boolean(object.bIsMainFrame) : false,
    };
  },

  toJSON(message: CMsgNodeHasFocus): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.bInput !== undefined && (obj.bInput = message.bInput);
    message.name !== undefined && (obj.name = message.name);
    message.elementtagname !== undefined && (obj.elementtagname = message.elementtagname);
    message.searchbuttontext !== undefined && (obj.searchbuttontext = message.searchbuttontext);
    message.bHasMultipleInputs !== undefined && (obj.bHasMultipleInputs = message.bHasMultipleInputs);
    message.inputType !== undefined && (obj.inputType = message.inputType);
    message.bIsMainFrame !== undefined && (obj.bIsMainFrame = message.bIsMainFrame);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNodeHasFocus>, I>>(base?: I): CMsgNodeHasFocus {
    return CMsgNodeHasFocus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNodeHasFocus>, I>>(object: I): CMsgNodeHasFocus {
    const message = createBaseCMsgNodeHasFocus();
    message.browserHandle = object.browserHandle ?? 0;
    message.bInput = object.bInput ?? false;
    message.name = object.name ?? "";
    message.elementtagname = object.elementtagname ?? "";
    message.searchbuttontext = object.searchbuttontext ?? "";
    message.bHasMultipleInputs = object.bHasMultipleInputs ?? false;
    message.inputType = object.inputType ?? "";
    message.bIsMainFrame = object.bIsMainFrame ?? false;
    return message;
  },
};

function createBaseCMsgZoomToFocusedElement(): CMsgZoomToFocusedElement {
  return { browserHandle: 0 };
}

export const CMsgZoomToFocusedElement = {
  encode(message: CMsgZoomToFocusedElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgZoomToFocusedElement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgZoomToFocusedElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgZoomToFocusedElement {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgZoomToFocusedElement): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgZoomToFocusedElement>, I>>(base?: I): CMsgZoomToFocusedElement {
    return CMsgZoomToFocusedElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgZoomToFocusedElement>, I>>(object: I): CMsgZoomToFocusedElement {
    const message = createBaseCMsgZoomToFocusedElement();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgCloseFullScreenFlashIfOpen(): CMsgCloseFullScreenFlashIfOpen {
  return { browserHandle: 0 };
}

export const CMsgCloseFullScreenFlashIfOpen = {
  encode(message: CMsgCloseFullScreenFlashIfOpen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCloseFullScreenFlashIfOpen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCloseFullScreenFlashIfOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCloseFullScreenFlashIfOpen {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgCloseFullScreenFlashIfOpen): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCloseFullScreenFlashIfOpen>, I>>(base?: I): CMsgCloseFullScreenFlashIfOpen {
    return CMsgCloseFullScreenFlashIfOpen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCloseFullScreenFlashIfOpen>, I>>(
    object: I,
  ): CMsgCloseFullScreenFlashIfOpen {
    const message = createBaseCMsgCloseFullScreenFlashIfOpen();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgPauseFullScreenFlashMovieIfOpen(): CMsgPauseFullScreenFlashMovieIfOpen {
  return { browserHandle: 0 };
}

export const CMsgPauseFullScreenFlashMovieIfOpen = {
  encode(message: CMsgPauseFullScreenFlashMovieIfOpen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPauseFullScreenFlashMovieIfOpen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPauseFullScreenFlashMovieIfOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPauseFullScreenFlashMovieIfOpen {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgPauseFullScreenFlashMovieIfOpen): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPauseFullScreenFlashMovieIfOpen>, I>>(
    base?: I,
  ): CMsgPauseFullScreenFlashMovieIfOpen {
    return CMsgPauseFullScreenFlashMovieIfOpen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPauseFullScreenFlashMovieIfOpen>, I>>(
    object: I,
  ): CMsgPauseFullScreenFlashMovieIfOpen {
    const message = createBaseCMsgPauseFullScreenFlashMovieIfOpen();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgFocusedNodeText(): CMsgFocusedNodeText {
  return { browserHandle: 0 };
}

export const CMsgFocusedNodeText = {
  encode(message: CMsgFocusedNodeText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFocusedNodeText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFocusedNodeText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFocusedNodeText {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgFocusedNodeText): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFocusedNodeText>, I>>(base?: I): CMsgFocusedNodeText {
    return CMsgFocusedNodeText.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFocusedNodeText>, I>>(object: I): CMsgFocusedNodeText {
    const message = createBaseCMsgFocusedNodeText();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgFocusedNodeTextResponse(): CMsgFocusedNodeTextResponse {
  return { browserHandle: 0, value: "" };
}

export const CMsgFocusedNodeTextResponse = {
  encode(message: CMsgFocusedNodeTextResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgFocusedNodeTextResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgFocusedNodeTextResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgFocusedNodeTextResponse {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CMsgFocusedNodeTextResponse): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgFocusedNodeTextResponse>, I>>(base?: I): CMsgFocusedNodeTextResponse {
    return CMsgFocusedNodeTextResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgFocusedNodeTextResponse>, I>>(object: I): CMsgFocusedNodeTextResponse {
    const message = createBaseCMsgFocusedNodeTextResponse();
    message.browserHandle = object.browserHandle ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCMsgBuildID(): CMsgBuildID {
  return { buildId: 0 };
}

export const CMsgBuildID = {
  encode(message: CMsgBuildID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buildId !== 0) {
      writer.uint32(8).uint64(message.buildId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBuildID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBuildID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBuildID {
    return { buildId: isSet(object.buildId) ? Number(object.buildId) : 0 };
  },

  toJSON(message: CMsgBuildID): unknown {
    const obj: any = {};
    message.buildId !== undefined && (obj.buildId = Math.round(message.buildId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBuildID>, I>>(base?: I): CMsgBuildID {
    return CMsgBuildID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBuildID>, I>>(object: I): CMsgBuildID {
    const message = createBaseCMsgBuildID();
    message.buildId = object.buildId ?? 0;
    return message;
  },
};

function createBaseCMsgOpenDevTools(): CMsgOpenDevTools {
  return { browserHandle: 0 };
}

export const CMsgOpenDevTools = {
  encode(message: CMsgOpenDevTools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgOpenDevTools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgOpenDevTools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgOpenDevTools {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgOpenDevTools): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgOpenDevTools>, I>>(base?: I): CMsgOpenDevTools {
    return CMsgOpenDevTools.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgOpenDevTools>, I>>(object: I): CMsgOpenDevTools {
    const message = createBaseCMsgOpenDevTools();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgCloseDevTools(): CMsgCloseDevTools {
  return { browserHandle: 0 };
}

export const CMsgCloseDevTools = {
  encode(message: CMsgCloseDevTools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgCloseDevTools {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgCloseDevTools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgCloseDevTools {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgCloseDevTools): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgCloseDevTools>, I>>(base?: I): CMsgCloseDevTools {
    return CMsgCloseDevTools.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgCloseDevTools>, I>>(object: I): CMsgCloseDevTools {
    const message = createBaseCMsgCloseDevTools();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgUnlockH264(): CMsgUnlockH264 {
  return { browserHandle: 0, unlockCode: "" };
}

export const CMsgUnlockH264 = {
  encode(message: CMsgUnlockH264, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.unlockCode !== "") {
      writer.uint32(18).string(message.unlockCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgUnlockH264 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgUnlockH264();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.unlockCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgUnlockH264 {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      unlockCode: isSet(object.unlockCode) ? String(object.unlockCode) : "",
    };
  },

  toJSON(message: CMsgUnlockH264): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.unlockCode !== undefined && (obj.unlockCode = message.unlockCode);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgUnlockH264>, I>>(base?: I): CMsgUnlockH264 {
    return CMsgUnlockH264.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgUnlockH264>, I>>(object: I): CMsgUnlockH264 {
    const message = createBaseCMsgUnlockH264();
    message.browserHandle = object.browserHandle ?? 0;
    message.unlockCode = object.unlockCode ?? "";
    return message;
  },
};

function createBaseCMsgScreenInformationChanged(): CMsgScreenInformationChanged {
  return {
    browserHandle: 0,
    overrideWidth: 0,
    overrideHeight: 0,
    monitorLeft: 0,
    monitorTop: 0,
    monitorRight: 0,
    monitorBottom: 0,
    usableLeft: 0,
    usableTop: 0,
    usableRight: 0,
    usableBottom: 0,
  };
}

export const CMsgScreenInformationChanged = {
  encode(message: CMsgScreenInformationChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.overrideWidth !== 0) {
      writer.uint32(16).uint32(message.overrideWidth);
    }
    if (message.overrideHeight !== 0) {
      writer.uint32(24).uint32(message.overrideHeight);
    }
    if (message.monitorLeft !== 0) {
      writer.uint32(32).uint32(message.monitorLeft);
    }
    if (message.monitorTop !== 0) {
      writer.uint32(40).uint32(message.monitorTop);
    }
    if (message.monitorRight !== 0) {
      writer.uint32(48).uint32(message.monitorRight);
    }
    if (message.monitorBottom !== 0) {
      writer.uint32(56).uint32(message.monitorBottom);
    }
    if (message.usableLeft !== 0) {
      writer.uint32(64).uint32(message.usableLeft);
    }
    if (message.usableTop !== 0) {
      writer.uint32(72).uint32(message.usableTop);
    }
    if (message.usableRight !== 0) {
      writer.uint32(80).uint32(message.usableRight);
    }
    if (message.usableBottom !== 0) {
      writer.uint32(88).uint32(message.usableBottom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgScreenInformationChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgScreenInformationChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.overrideWidth = reader.uint32();
          break;
        case 3:
          message.overrideHeight = reader.uint32();
          break;
        case 4:
          message.monitorLeft = reader.uint32();
          break;
        case 5:
          message.monitorTop = reader.uint32();
          break;
        case 6:
          message.monitorRight = reader.uint32();
          break;
        case 7:
          message.monitorBottom = reader.uint32();
          break;
        case 8:
          message.usableLeft = reader.uint32();
          break;
        case 9:
          message.usableTop = reader.uint32();
          break;
        case 10:
          message.usableRight = reader.uint32();
          break;
        case 11:
          message.usableBottom = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgScreenInformationChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      overrideWidth: isSet(object.overrideWidth) ? Number(object.overrideWidth) : 0,
      overrideHeight: isSet(object.overrideHeight) ? Number(object.overrideHeight) : 0,
      monitorLeft: isSet(object.monitorLeft) ? Number(object.monitorLeft) : 0,
      monitorTop: isSet(object.monitorTop) ? Number(object.monitorTop) : 0,
      monitorRight: isSet(object.monitorRight) ? Number(object.monitorRight) : 0,
      monitorBottom: isSet(object.monitorBottom) ? Number(object.monitorBottom) : 0,
      usableLeft: isSet(object.usableLeft) ? Number(object.usableLeft) : 0,
      usableTop: isSet(object.usableTop) ? Number(object.usableTop) : 0,
      usableRight: isSet(object.usableRight) ? Number(object.usableRight) : 0,
      usableBottom: isSet(object.usableBottom) ? Number(object.usableBottom) : 0,
    };
  },

  toJSON(message: CMsgScreenInformationChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.overrideWidth !== undefined && (obj.overrideWidth = Math.round(message.overrideWidth));
    message.overrideHeight !== undefined && (obj.overrideHeight = Math.round(message.overrideHeight));
    message.monitorLeft !== undefined && (obj.monitorLeft = Math.round(message.monitorLeft));
    message.monitorTop !== undefined && (obj.monitorTop = Math.round(message.monitorTop));
    message.monitorRight !== undefined && (obj.monitorRight = Math.round(message.monitorRight));
    message.monitorBottom !== undefined && (obj.monitorBottom = Math.round(message.monitorBottom));
    message.usableLeft !== undefined && (obj.usableLeft = Math.round(message.usableLeft));
    message.usableTop !== undefined && (obj.usableTop = Math.round(message.usableTop));
    message.usableRight !== undefined && (obj.usableRight = Math.round(message.usableRight));
    message.usableBottom !== undefined && (obj.usableBottom = Math.round(message.usableBottom));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgScreenInformationChanged>, I>>(base?: I): CMsgScreenInformationChanged {
    return CMsgScreenInformationChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgScreenInformationChanged>, I>>(object: I): CMsgScreenInformationChanged {
    const message = createBaseCMsgScreenInformationChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.overrideWidth = object.overrideWidth ?? 0;
    message.overrideHeight = object.overrideHeight ?? 0;
    message.monitorLeft = object.monitorLeft ?? 0;
    message.monitorTop = object.monitorTop ?? 0;
    message.monitorRight = object.monitorRight ?? 0;
    message.monitorBottom = object.monitorBottom ?? 0;
    message.usableLeft = object.usableLeft ?? 0;
    message.usableTop = object.usableTop ?? 0;
    message.usableRight = object.usableRight ?? 0;
    message.usableBottom = object.usableBottom ?? 0;
    return message;
  },
};

function createBaseCMsgClearAllCookies(): CMsgClearAllCookies {
  return { browserHandle: 0 };
}

export const CMsgClearAllCookies = {
  encode(message: CMsgClearAllCookies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgClearAllCookies {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgClearAllCookies();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgClearAllCookies {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgClearAllCookies): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgClearAllCookies>, I>>(base?: I): CMsgClearAllCookies {
    return CMsgClearAllCookies.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgClearAllCookies>, I>>(object: I): CMsgClearAllCookies {
    const message = createBaseCMsgClearAllCookies();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgScreenDPI(): CMsgScreenDPI {
  return { browserHandle: 0, dpiScaling: 0 };
}

export const CMsgScreenDPI = {
  encode(message: CMsgScreenDPI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.dpiScaling !== 0) {
      writer.uint32(21).float(message.dpiScaling);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgScreenDPI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgScreenDPI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.dpiScaling = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgScreenDPI {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      dpiScaling: isSet(object.dpiScaling) ? Number(object.dpiScaling) : 0,
    };
  },

  toJSON(message: CMsgScreenDPI): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.dpiScaling !== undefined && (obj.dpiScaling = message.dpiScaling);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgScreenDPI>, I>>(base?: I): CMsgScreenDPI {
    return CMsgScreenDPI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgScreenDPI>, I>>(object: I): CMsgScreenDPI {
    const message = createBaseCMsgScreenDPI();
    message.browserHandle = object.browserHandle ?? 0;
    message.dpiScaling = object.dpiScaling ?? 0;
    return message;
  },
};

function createBaseCMsgAckScreenDPI(): CMsgAckScreenDPI {
  return { browserHandle: 0 };
}

export const CMsgAckScreenDPI = {
  encode(message: CMsgAckScreenDPI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAckScreenDPI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAckScreenDPI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAckScreenDPI {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgAckScreenDPI): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAckScreenDPI>, I>>(base?: I): CMsgAckScreenDPI {
    return CMsgAckScreenDPI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAckScreenDPI>, I>>(object: I): CMsgAckScreenDPI {
    const message = createBaseCMsgAckScreenDPI();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgAuthedSteamDomains(): CMsgAuthedSteamDomains {
  return { domains: [] };
}

export const CMsgAuthedSteamDomains = {
  encode(message: CMsgAuthedSteamDomains, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.domains) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgAuthedSteamDomains {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgAuthedSteamDomains();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgAuthedSteamDomains {
    return { domains: Array.isArray(object?.domains) ? object.domains.map((e: any) => String(e)) : [] };
  },

  toJSON(message: CMsgAuthedSteamDomains): unknown {
    const obj: any = {};
    if (message.domains) {
      obj.domains = message.domains.map((e) => e);
    } else {
      obj.domains = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgAuthedSteamDomains>, I>>(base?: I): CMsgAuthedSteamDomains {
    return CMsgAuthedSteamDomains.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgAuthedSteamDomains>, I>>(object: I): CMsgAuthedSteamDomains {
    const message = createBaseCMsgAuthedSteamDomains();
    message.domains = object.domains?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgSteamAuthNeeded(): CMsgSteamAuthNeeded {
  return { filler: false };
}

export const CMsgSteamAuthNeeded = {
  encode(message: CMsgSteamAuthNeeded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filler === true) {
      writer.uint32(8).bool(message.filler);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamAuthNeeded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamAuthNeeded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filler = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamAuthNeeded {
    return { filler: isSet(object.filler) ? Boolean(object.filler) : false };
  },

  toJSON(message: CMsgSteamAuthNeeded): unknown {
    const obj: any = {};
    message.filler !== undefined && (obj.filler = message.filler);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamAuthNeeded>, I>>(base?: I): CMsgSteamAuthNeeded {
    return CMsgSteamAuthNeeded.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamAuthNeeded>, I>>(object: I): CMsgSteamAuthNeeded {
    const message = createBaseCMsgSteamAuthNeeded();
    message.filler = object.filler ?? false;
    return message;
  },
};

function createBaseCMsgSteamAuthCookiesSet(): CMsgSteamAuthCookiesSet {
  return { success: false };
}

export const CMsgSteamAuthCookiesSet = {
  encode(message: CMsgSteamAuthCookiesSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSteamAuthCookiesSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSteamAuthCookiesSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSteamAuthCookiesSet {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: CMsgSteamAuthCookiesSet): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSteamAuthCookiesSet>, I>>(base?: I): CMsgSteamAuthCookiesSet {
    return CMsgSteamAuthCookiesSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSteamAuthCookiesSet>, I>>(object: I): CMsgSteamAuthCookiesSet {
    const message = createBaseCMsgSteamAuthCookiesSet();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseCMsgJSRegisterMethod(): CMsgJSRegisterMethod {
  return { browserHandle: 0, name: "", methodType: 0 };
}

export const CMsgJSRegisterMethod = {
  encode(message: CMsgJSRegisterMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.methodType !== 0) {
      writer.uint32(24).int32(message.methodType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSRegisterMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSRegisterMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.methodType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSRegisterMethod {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      methodType: isSet(object.methodType) ? eJSRegisterMethodTypeFromJSON(object.methodType) : 0,
    };
  },

  toJSON(message: CMsgJSRegisterMethod): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.name !== undefined && (obj.name = message.name);
    message.methodType !== undefined && (obj.methodType = eJSRegisterMethodTypeToJSON(message.methodType));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSRegisterMethod>, I>>(base?: I): CMsgJSRegisterMethod {
    return CMsgJSRegisterMethod.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSRegisterMethod>, I>>(object: I): CMsgJSRegisterMethod {
    const message = createBaseCMsgJSRegisterMethod();
    message.browserHandle = object.browserHandle ?? 0;
    message.name = object.name ?? "";
    message.methodType = object.methodType ?? 0;
    return message;
  },
};

function createBaseCMsgJSValue(): CMsgJSValue {
  return {
    boolValue: false,
    intValue: 0,
    uintValue: 0,
    doubleValue: 0,
    stringValue: "",
    functionHandle: 0,
    bytesValue: Buffer.alloc(0),
    isArray: false,
    arrayValues: [],
    isObject: false,
    objectProperties: [],
  };
}

export const CMsgJSValue = {
  encode(message: CMsgJSValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boolValue === true) {
      writer.uint32(8).bool(message.boolValue);
    }
    if (message.intValue !== 0) {
      writer.uint32(16).int32(message.intValue);
    }
    if (message.uintValue !== 0) {
      writer.uint32(24).uint32(message.uintValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(33).double(message.doubleValue);
    }
    if (message.stringValue !== "") {
      writer.uint32(42).string(message.stringValue);
    }
    if (message.functionHandle !== 0) {
      writer.uint32(48).uint64(message.functionHandle);
    }
    if (message.bytesValue.length !== 0) {
      writer.uint32(98).bytes(message.bytesValue);
    }
    if (message.isArray === true) {
      writer.uint32(64).bool(message.isArray);
    }
    for (const v of message.arrayValues) {
      CMsgJSValue.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.isObject === true) {
      writer.uint32(80).bool(message.isObject);
    }
    for (const v of message.objectProperties) {
      CMsgJSValue_JSObjectProperty.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boolValue = reader.bool();
          break;
        case 2:
          message.intValue = reader.int32();
          break;
        case 3:
          message.uintValue = reader.uint32();
          break;
        case 4:
          message.doubleValue = reader.double();
          break;
        case 5:
          message.stringValue = reader.string();
          break;
        case 6:
          message.functionHandle = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.bytesValue = reader.bytes() as Buffer;
          break;
        case 8:
          message.isArray = reader.bool();
          break;
        case 9:
          message.arrayValues.push(CMsgJSValue.decode(reader, reader.uint32()));
          break;
        case 10:
          message.isObject = reader.bool();
          break;
        case 11:
          message.objectProperties.push(CMsgJSValue_JSObjectProperty.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSValue {
    return {
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : false,
      intValue: isSet(object.intValue) ? Number(object.intValue) : 0,
      uintValue: isSet(object.uintValue) ? Number(object.uintValue) : 0,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
      functionHandle: isSet(object.functionHandle) ? Number(object.functionHandle) : 0,
      bytesValue: isSet(object.bytesValue) ? Buffer.from(bytesFromBase64(object.bytesValue)) : Buffer.alloc(0),
      isArray: isSet(object.isArray) ? Boolean(object.isArray) : false,
      arrayValues: Array.isArray(object?.arrayValues)
        ? object.arrayValues.map((e: any) => CMsgJSValue.fromJSON(e))
        : [],
      isObject: isSet(object.isObject) ? Boolean(object.isObject) : false,
      objectProperties: Array.isArray(object?.objectProperties)
        ? object.objectProperties.map((e: any) => CMsgJSValue_JSObjectProperty.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgJSValue): unknown {
    const obj: any = {};
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.intValue !== undefined && (obj.intValue = Math.round(message.intValue));
    message.uintValue !== undefined && (obj.uintValue = Math.round(message.uintValue));
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.functionHandle !== undefined && (obj.functionHandle = Math.round(message.functionHandle));
    message.bytesValue !== undefined &&
      (obj.bytesValue = base64FromBytes(message.bytesValue !== undefined ? message.bytesValue : Buffer.alloc(0)));
    message.isArray !== undefined && (obj.isArray = message.isArray);
    if (message.arrayValues) {
      obj.arrayValues = message.arrayValues.map((e) => e ? CMsgJSValue.toJSON(e) : undefined);
    } else {
      obj.arrayValues = [];
    }
    message.isObject !== undefined && (obj.isObject = message.isObject);
    if (message.objectProperties) {
      obj.objectProperties = message.objectProperties.map((e) =>
        e ? CMsgJSValue_JSObjectProperty.toJSON(e) : undefined
      );
    } else {
      obj.objectProperties = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSValue>, I>>(base?: I): CMsgJSValue {
    return CMsgJSValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSValue>, I>>(object: I): CMsgJSValue {
    const message = createBaseCMsgJSValue();
    message.boolValue = object.boolValue ?? false;
    message.intValue = object.intValue ?? 0;
    message.uintValue = object.uintValue ?? 0;
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? "";
    message.functionHandle = object.functionHandle ?? 0;
    message.bytesValue = object.bytesValue ?? Buffer.alloc(0);
    message.isArray = object.isArray ?? false;
    message.arrayValues = object.arrayValues?.map((e) => CMsgJSValue.fromPartial(e)) || [];
    message.isObject = object.isObject ?? false;
    message.objectProperties = object.objectProperties?.map((e) => CMsgJSValue_JSObjectProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgJSValue_JSObjectProperty(): CMsgJSValue_JSObjectProperty {
  return { name: "", value: undefined };
}

export const CMsgJSValue_JSObjectProperty = {
  encode(message: CMsgJSValue_JSObjectProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      CMsgJSValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSValue_JSObjectProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSValue_JSObjectProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = CMsgJSValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSValue_JSObjectProperty {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? CMsgJSValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CMsgJSValue_JSObjectProperty): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value ? CMsgJSValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSValue_JSObjectProperty>, I>>(base?: I): CMsgJSValue_JSObjectProperty {
    return CMsgJSValue_JSObjectProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSValue_JSObjectProperty>, I>>(object: I): CMsgJSValue_JSObjectProperty {
    const message = createBaseCMsgJSValue_JSObjectProperty();
    message.name = object.name ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? CMsgJSValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCMsgJSMethodCall(): CMsgJSMethodCall {
  return { browserHandle: 0, owningBrowserHandle: 0, name: "", arguments: [] };
}

export const CMsgJSMethodCall = {
  encode(message: CMsgJSMethodCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.owningBrowserHandle !== 0) {
      writer.uint32(16).uint32(message.owningBrowserHandle);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.arguments) {
      CMsgJSValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSMethodCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSMethodCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.owningBrowserHandle = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.arguments.push(CMsgJSValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSMethodCall {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      owningBrowserHandle: isSet(object.owningBrowserHandle) ? Number(object.owningBrowserHandle) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => CMsgJSValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgJSMethodCall): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.owningBrowserHandle !== undefined && (obj.owningBrowserHandle = Math.round(message.owningBrowserHandle));
    message.name !== undefined && (obj.name = message.name);
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) => e ? CMsgJSValue.toJSON(e) : undefined);
    } else {
      obj.arguments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSMethodCall>, I>>(base?: I): CMsgJSMethodCall {
    return CMsgJSMethodCall.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSMethodCall>, I>>(object: I): CMsgJSMethodCall {
    const message = createBaseCMsgJSMethodCall();
    message.browserHandle = object.browserHandle ?? 0;
    message.owningBrowserHandle = object.owningBrowserHandle ?? 0;
    message.name = object.name ?? "";
    message.arguments = object.arguments?.map((e) => CMsgJSValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgJSExecuteCallback(): CMsgJSExecuteCallback {
  return { browserHandle: 0, owningBrowserHandle: 0, functionHandle: 0, arguments: [] };
}

export const CMsgJSExecuteCallback = {
  encode(message: CMsgJSExecuteCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.owningBrowserHandle !== 0) {
      writer.uint32(16).uint32(message.owningBrowserHandle);
    }
    if (message.functionHandle !== 0) {
      writer.uint32(24).uint64(message.functionHandle);
    }
    for (const v of message.arguments) {
      CMsgJSValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSExecuteCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSExecuteCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.owningBrowserHandle = reader.uint32();
          break;
        case 3:
          message.functionHandle = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.arguments.push(CMsgJSValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSExecuteCallback {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      owningBrowserHandle: isSet(object.owningBrowserHandle) ? Number(object.owningBrowserHandle) : 0,
      functionHandle: isSet(object.functionHandle) ? Number(object.functionHandle) : 0,
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => CMsgJSValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgJSExecuteCallback): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.owningBrowserHandle !== undefined && (obj.owningBrowserHandle = Math.round(message.owningBrowserHandle));
    message.functionHandle !== undefined && (obj.functionHandle = Math.round(message.functionHandle));
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) => e ? CMsgJSValue.toJSON(e) : undefined);
    } else {
      obj.arguments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSExecuteCallback>, I>>(base?: I): CMsgJSExecuteCallback {
    return CMsgJSExecuteCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSExecuteCallback>, I>>(object: I): CMsgJSExecuteCallback {
    const message = createBaseCMsgJSExecuteCallback();
    message.browserHandle = object.browserHandle ?? 0;
    message.owningBrowserHandle = object.owningBrowserHandle ?? 0;
    message.functionHandle = object.functionHandle ?? 0;
    message.arguments = object.arguments?.map((e) => CMsgJSValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgJSReleaseCallback(): CMsgJSReleaseCallback {
  return { browserHandle: 0, owningBrowserHandle: 0, functionHandle: 0 };
}

export const CMsgJSReleaseCallback = {
  encode(message: CMsgJSReleaseCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.owningBrowserHandle !== 0) {
      writer.uint32(16).uint32(message.owningBrowserHandle);
    }
    if (message.functionHandle !== 0) {
      writer.uint32(24).uint64(message.functionHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSReleaseCallback {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSReleaseCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.owningBrowserHandle = reader.uint32();
          break;
        case 3:
          message.functionHandle = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSReleaseCallback {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      owningBrowserHandle: isSet(object.owningBrowserHandle) ? Number(object.owningBrowserHandle) : 0,
      functionHandle: isSet(object.functionHandle) ? Number(object.functionHandle) : 0,
    };
  },

  toJSON(message: CMsgJSReleaseCallback): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.owningBrowserHandle !== undefined && (obj.owningBrowserHandle = Math.round(message.owningBrowserHandle));
    message.functionHandle !== undefined && (obj.functionHandle = Math.round(message.functionHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSReleaseCallback>, I>>(base?: I): CMsgJSReleaseCallback {
    return CMsgJSReleaseCallback.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSReleaseCallback>, I>>(object: I): CMsgJSReleaseCallback {
    const message = createBaseCMsgJSReleaseCallback();
    message.browserHandle = object.browserHandle ?? 0;
    message.owningBrowserHandle = object.owningBrowserHandle ?? 0;
    message.functionHandle = object.functionHandle ?? 0;
    return message;
  },
};

function createBaseCMsgJSRaiseException(): CMsgJSRaiseException {
  return { browserHandle: 0, owningBrowserHandle: 0, exception: "" };
}

export const CMsgJSRaiseException = {
  encode(message: CMsgJSRaiseException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.owningBrowserHandle !== 0) {
      writer.uint32(16).uint32(message.owningBrowserHandle);
    }
    if (message.exception !== "") {
      writer.uint32(26).string(message.exception);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJSRaiseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJSRaiseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.owningBrowserHandle = reader.uint32();
          break;
        case 3:
          message.exception = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJSRaiseException {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      owningBrowserHandle: isSet(object.owningBrowserHandle) ? Number(object.owningBrowserHandle) : 0,
      exception: isSet(object.exception) ? String(object.exception) : "",
    };
  },

  toJSON(message: CMsgJSRaiseException): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.owningBrowserHandle !== undefined && (obj.owningBrowserHandle = Math.round(message.owningBrowserHandle));
    message.exception !== undefined && (obj.exception = message.exception);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJSRaiseException>, I>>(base?: I): CMsgJSRaiseException {
    return CMsgJSRaiseException.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJSRaiseException>, I>>(object: I): CMsgJSRaiseException {
    const message = createBaseCMsgJSRaiseException();
    message.browserHandle = object.browserHandle ?? 0;
    message.owningBrowserHandle = object.owningBrowserHandle ?? 0;
    message.exception = object.exception ?? "";
    return message;
  },
};

function createBaseCMsgLoadLocalization(): CMsgLoadLocalization {
  return { browserHandle: 0, localizationPath: "", language: "" };
}

export const CMsgLoadLocalization = {
  encode(message: CMsgLoadLocalization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.localizationPath !== "") {
      writer.uint32(18).string(message.localizationPath);
    }
    if (message.language !== "") {
      writer.uint32(26).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgLoadLocalization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgLoadLocalization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.localizationPath = reader.string();
          break;
        case 3:
          message.language = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgLoadLocalization {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      localizationPath: isSet(object.localizationPath) ? String(object.localizationPath) : "",
      language: isSet(object.language) ? String(object.language) : "",
    };
  },

  toJSON(message: CMsgLoadLocalization): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.localizationPath !== undefined && (obj.localizationPath = message.localizationPath);
    message.language !== undefined && (obj.language = message.language);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgLoadLocalization>, I>>(base?: I): CMsgLoadLocalization {
    return CMsgLoadLocalization.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgLoadLocalization>, I>>(object: I): CMsgLoadLocalization {
    const message = createBaseCMsgLoadLocalization();
    message.browserHandle = object.browserHandle ?? 0;
    message.localizationPath = object.localizationPath ?? "";
    message.language = object.language ?? "";
    return message;
  },
};

function createBaseCMsgNotifyUserActivation(): CMsgNotifyUserActivation {
  return { browserHandle: 0 };
}

export const CMsgNotifyUserActivation = {
  encode(message: CMsgNotifyUserActivation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgNotifyUserActivation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgNotifyUserActivation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgNotifyUserActivation {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgNotifyUserActivation): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgNotifyUserActivation>, I>>(base?: I): CMsgNotifyUserActivation {
    return CMsgNotifyUserActivation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgNotifyUserActivation>, I>>(object: I): CMsgNotifyUserActivation {
    const message = createBaseCMsgNotifyUserActivation();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetNetFakeLocalSystemState(): CMsgSetNetFakeLocalSystemState {
  return { state: 0 };
}

export const CMsgSetNetFakeLocalSystemState = {
  encode(message: CMsgSetNetFakeLocalSystemState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).uint32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetNetFakeLocalSystemState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetNetFakeLocalSystemState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetNetFakeLocalSystemState {
    return { state: isSet(object.state) ? Number(object.state) : 0 };
  },

  toJSON(message: CMsgSetNetFakeLocalSystemState): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = Math.round(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetNetFakeLocalSystemState>, I>>(base?: I): CMsgSetNetFakeLocalSystemState {
    return CMsgSetNetFakeLocalSystemState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetNetFakeLocalSystemState>, I>>(
    object: I,
  ): CMsgSetNetFakeLocalSystemState {
    const message = createBaseCMsgSetNetFakeLocalSystemState();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseCMsgJumpListLink(): CMsgJumpListLink {
  return { displayName: "", urlLink: "", iconPath: "" };
}

export const CMsgJumpListLink = {
  encode(message: CMsgJumpListLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.urlLink !== "") {
      writer.uint32(18).string(message.urlLink);
    }
    if (message.iconPath !== "") {
      writer.uint32(26).string(message.iconPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgJumpListLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgJumpListLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        case 2:
          message.urlLink = reader.string();
          break;
        case 3:
          message.iconPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgJumpListLink {
    return {
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      urlLink: isSet(object.urlLink) ? String(object.urlLink) : "",
      iconPath: isSet(object.iconPath) ? String(object.iconPath) : "",
    };
  },

  toJSON(message: CMsgJumpListLink): unknown {
    const obj: any = {};
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.urlLink !== undefined && (obj.urlLink = message.urlLink);
    message.iconPath !== undefined && (obj.iconPath = message.iconPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgJumpListLink>, I>>(base?: I): CMsgJumpListLink {
    return CMsgJumpListLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgJumpListLink>, I>>(object: I): CMsgJumpListLink {
    const message = createBaseCMsgJumpListLink();
    message.displayName = object.displayName ?? "";
    message.urlLink = object.urlLink ?? "";
    message.iconPath = object.iconPath ?? "";
    return message;
  },
};

function createBaseCMSgJumpListMRUApp(): CMSgJumpListMRUApp {
  return { appid: 0, displayName: "", urlLink: "", iconPath: "" };
}

export const CMSgJumpListMRUApp = {
  encode(message: CMSgJumpListMRUApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appid !== 0) {
      writer.uint32(8).uint32(message.appid);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.urlLink !== "") {
      writer.uint32(26).string(message.urlLink);
    }
    if (message.iconPath !== "") {
      writer.uint32(34).string(message.iconPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMSgJumpListMRUApp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMSgJumpListMRUApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appid = reader.uint32();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.urlLink = reader.string();
          break;
        case 4:
          message.iconPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMSgJumpListMRUApp {
    return {
      appid: isSet(object.appid) ? Number(object.appid) : 0,
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      urlLink: isSet(object.urlLink) ? String(object.urlLink) : "",
      iconPath: isSet(object.iconPath) ? String(object.iconPath) : "",
    };
  },

  toJSON(message: CMSgJumpListMRUApp): unknown {
    const obj: any = {};
    message.appid !== undefined && (obj.appid = Math.round(message.appid));
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.urlLink !== undefined && (obj.urlLink = message.urlLink);
    message.iconPath !== undefined && (obj.iconPath = message.iconPath);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMSgJumpListMRUApp>, I>>(base?: I): CMSgJumpListMRUApp {
    return CMSgJumpListMRUApp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMSgJumpListMRUApp>, I>>(object: I): CMSgJumpListMRUApp {
    const message = createBaseCMSgJumpListMRUApp();
    message.appid = object.appid ?? 0;
    message.displayName = object.displayName ?? "";
    message.urlLink = object.urlLink ?? "";
    message.iconPath = object.iconPath ?? "";
    return message;
  },
};

function createBaseCMsgSetJumpList(): CMsgSetJumpList {
  return { steamPath: "", mruTitle: "", apps: [], links: [] };
}

export const CMsgSetJumpList = {
  encode(message: CMsgSetJumpList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.steamPath !== "") {
      writer.uint32(10).string(message.steamPath);
    }
    if (message.mruTitle !== "") {
      writer.uint32(18).string(message.mruTitle);
    }
    for (const v of message.apps) {
      CMSgJumpListMRUApp.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.links) {
      CMsgJumpListLink.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetJumpList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetJumpList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steamPath = reader.string();
          break;
        case 2:
          message.mruTitle = reader.string();
          break;
        case 3:
          message.apps.push(CMSgJumpListMRUApp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.links.push(CMsgJumpListLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetJumpList {
    return {
      steamPath: isSet(object.steamPath) ? String(object.steamPath) : "",
      mruTitle: isSet(object.mruTitle) ? String(object.mruTitle) : "",
      apps: Array.isArray(object?.apps) ? object.apps.map((e: any) => CMSgJumpListMRUApp.fromJSON(e)) : [],
      links: Array.isArray(object?.links) ? object.links.map((e: any) => CMsgJumpListLink.fromJSON(e)) : [],
    };
  },

  toJSON(message: CMsgSetJumpList): unknown {
    const obj: any = {};
    message.steamPath !== undefined && (obj.steamPath = message.steamPath);
    message.mruTitle !== undefined && (obj.mruTitle = message.mruTitle);
    if (message.apps) {
      obj.apps = message.apps.map((e) => e ? CMSgJumpListMRUApp.toJSON(e) : undefined);
    } else {
      obj.apps = [];
    }
    if (message.links) {
      obj.links = message.links.map((e) => e ? CMsgJumpListLink.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetJumpList>, I>>(base?: I): CMsgSetJumpList {
    return CMsgSetJumpList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetJumpList>, I>>(object: I): CMsgSetJumpList {
    const message = createBaseCMsgSetJumpList();
    message.steamPath = object.steamPath ?? "";
    message.mruTitle = object.mruTitle ?? "";
    message.apps = object.apps?.map((e) => CMSgJumpListMRUApp.fromPartial(e)) || [];
    message.links = object.links?.map((e) => CMsgJumpListLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgSetGameOverlayTargetPIDs(): CMsgSetGameOverlayTargetPIDs {
  return { browserHandle: 0, targetPid: [] };
}

export const CMsgSetGameOverlayTargetPIDs = {
  encode(message: CMsgSetGameOverlayTargetPIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    writer.uint32(18).fork();
    for (const v of message.targetPid) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetGameOverlayTargetPIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetGameOverlayTargetPIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targetPid.push(reader.uint32());
            }
          } else {
            message.targetPid.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetGameOverlayTargetPIDs {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      targetPid: Array.isArray(object?.targetPid) ? object.targetPid.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSetGameOverlayTargetPIDs): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    if (message.targetPid) {
      obj.targetPid = message.targetPid.map((e) => Math.round(e));
    } else {
      obj.targetPid = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetGameOverlayTargetPIDs>, I>>(base?: I): CMsgSetGameOverlayTargetPIDs {
    return CMsgSetGameOverlayTargetPIDs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetGameOverlayTargetPIDs>, I>>(object: I): CMsgSetGameOverlayTargetPIDs {
    const message = createBaseCMsgSetGameOverlayTargetPIDs();
    message.browserHandle = object.browserHandle ?? 0;
    message.targetPid = object.targetPid?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgGameOverlayTargetTextureID(): CMsgGameOverlayTargetTextureID {
  return { browserHandle: 0, targetPid: 0, textureHandle: 0 };
}

export const CMsgGameOverlayTargetTextureID = {
  encode(message: CMsgGameOverlayTargetTextureID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.targetPid !== 0) {
      writer.uint32(16).uint32(message.targetPid);
    }
    if (message.textureHandle !== 0) {
      writer.uint32(24).uint32(message.textureHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgGameOverlayTargetTextureID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgGameOverlayTargetTextureID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.targetPid = reader.uint32();
          break;
        case 3:
          message.textureHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgGameOverlayTargetTextureID {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      targetPid: isSet(object.targetPid) ? Number(object.targetPid) : 0,
      textureHandle: isSet(object.textureHandle) ? Number(object.textureHandle) : 0,
    };
  },

  toJSON(message: CMsgGameOverlayTargetTextureID): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.targetPid !== undefined && (obj.targetPid = Math.round(message.targetPid));
    message.textureHandle !== undefined && (obj.textureHandle = Math.round(message.textureHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgGameOverlayTargetTextureID>, I>>(base?: I): CMsgGameOverlayTargetTextureID {
    return CMsgGameOverlayTargetTextureID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgGameOverlayTargetTextureID>, I>>(
    object: I,
  ): CMsgGameOverlayTargetTextureID {
    const message = createBaseCMsgGameOverlayTargetTextureID();
    message.browserHandle = object.browserHandle ?? 0;
    message.targetPid = object.targetPid ?? 0;
    message.textureHandle = object.textureHandle ?? 0;
    return message;
  },
};

function createBaseCMsgDraggableRegionsChanged(): CMsgDraggableRegionsChanged {
  return { browserHandle: 0, rects: [] };
}

export const CMsgDraggableRegionsChanged = {
  encode(message: CMsgDraggableRegionsChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    for (const v of message.rects) {
      CMsgDraggableRegionsChanged_DraggableRects.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraggableRegionsChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraggableRegionsChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.rects.push(CMsgDraggableRegionsChanged_DraggableRects.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDraggableRegionsChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      rects: Array.isArray(object?.rects)
        ? object.rects.map((e: any) => CMsgDraggableRegionsChanged_DraggableRects.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgDraggableRegionsChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    if (message.rects) {
      obj.rects = message.rects.map((e) => e ? CMsgDraggableRegionsChanged_DraggableRects.toJSON(e) : undefined);
    } else {
      obj.rects = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDraggableRegionsChanged>, I>>(base?: I): CMsgDraggableRegionsChanged {
    return CMsgDraggableRegionsChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDraggableRegionsChanged>, I>>(object: I): CMsgDraggableRegionsChanged {
    const message = createBaseCMsgDraggableRegionsChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.rects = object.rects?.map((e) => CMsgDraggableRegionsChanged_DraggableRects.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgDraggableRegionsChanged_DraggableRects(): CMsgDraggableRegionsChanged_DraggableRects {
  return { x: 0, y: 0, width: 0, height: 0, draggable: false };
}

export const CMsgDraggableRegionsChanged_DraggableRects = {
  encode(message: CMsgDraggableRegionsChanged_DraggableRects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(24).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    if (message.draggable === true) {
      writer.uint32(40).bool(message.draggable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDraggableRegionsChanged_DraggableRects {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDraggableRegionsChanged_DraggableRects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.int32();
          break;
        case 2:
          message.y = reader.int32();
          break;
        case 3:
          message.width = reader.int32();
          break;
        case 4:
          message.height = reader.int32();
          break;
        case 5:
          message.draggable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDraggableRegionsChanged_DraggableRects {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      draggable: isSet(object.draggable) ? Boolean(object.draggable) : false,
    };
  },

  toJSON(message: CMsgDraggableRegionsChanged_DraggableRects): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.draggable !== undefined && (obj.draggable = message.draggable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDraggableRegionsChanged_DraggableRects>, I>>(
    base?: I,
  ): CMsgDraggableRegionsChanged_DraggableRects {
    return CMsgDraggableRegionsChanged_DraggableRects.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDraggableRegionsChanged_DraggableRects>, I>>(
    object: I,
  ): CMsgDraggableRegionsChanged_DraggableRects {
    const message = createBaseCMsgDraggableRegionsChanged_DraggableRects();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.draggable = object.draggable ?? false;
    return message;
  },
};

function createBaseCMsgResizeGripChanged(): CMsgResizeGripChanged {
  return { browserHandle: 0, width: 0, height: 0 };
}

export const CMsgResizeGripChanged = {
  encode(message: CMsgResizeGripChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgResizeGripChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgResizeGripChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.width = reader.int32();
          break;
        case 3:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgResizeGripChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: CMsgResizeGripChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgResizeGripChanged>, I>>(base?: I): CMsgResizeGripChanged {
    return CMsgResizeGripChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgResizeGripChanged>, I>>(object: I): CMsgResizeGripChanged {
    const message = createBaseCMsgResizeGripChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCMsgSetWindowPosition(): CMsgSetWindowPosition {
  return { browserHandle: 0, x: 0, y: 0, width: 0, height: 0, minWidth: 0, minHeight: 0 };
}

export const CMsgSetWindowPosition = {
  encode(message: CMsgSetWindowPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(17).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(25).double(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(33).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(41).double(message.height);
    }
    if (message.minWidth !== 0) {
      writer.uint32(49).double(message.minWidth);
    }
    if (message.minHeight !== 0) {
      writer.uint32(57).double(message.minHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetWindowPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetWindowPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.double();
          break;
        case 3:
          message.y = reader.double();
          break;
        case 4:
          message.width = reader.double();
          break;
        case 5:
          message.height = reader.double();
          break;
        case 6:
          message.minWidth = reader.double();
          break;
        case 7:
          message.minHeight = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetWindowPosition {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      minWidth: isSet(object.minWidth) ? Number(object.minWidth) : 0,
      minHeight: isSet(object.minHeight) ? Number(object.minHeight) : 0,
    };
  },

  toJSON(message: CMsgSetWindowPosition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.minWidth !== undefined && (obj.minWidth = message.minWidth);
    message.minHeight !== undefined && (obj.minHeight = message.minHeight);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetWindowPosition>, I>>(base?: I): CMsgSetWindowPosition {
    return CMsgSetWindowPosition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetWindowPosition>, I>>(object: I): CMsgSetWindowPosition {
    const message = createBaseCMsgSetWindowPosition();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.minWidth = object.minWidth ?? 0;
    message.minHeight = object.minHeight ?? 0;
    return message;
  },
};

function createBaseCMsgShowWindow(): CMsgShowWindow {
  return { browserHandle: 0 };
}

export const CMsgShowWindow = {
  encode(message: CMsgShowWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShowWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShowWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShowWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgShowWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShowWindow>, I>>(base?: I): CMsgShowWindow {
    return CMsgShowWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShowWindow>, I>>(object: I): CMsgShowWindow {
    const message = createBaseCMsgShowWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgHideWindow(): CMsgHideWindow {
  return { browserHandle: 0 };
}

export const CMsgHideWindow = {
  encode(message: CMsgHideWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHideWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHideWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHideWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgHideWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHideWindow>, I>>(base?: I): CMsgHideWindow {
    return CMsgHideWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHideWindow>, I>>(object: I): CMsgHideWindow {
    const message = createBaseCMsgHideWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBringWindowToFront(): CMsgBringWindowToFront {
  return { browserHandle: 0 };
}

export const CMsgBringWindowToFront = {
  encode(message: CMsgBringWindowToFront, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBringWindowToFront {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBringWindowToFront();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBringWindowToFront {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgBringWindowToFront): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBringWindowToFront>, I>>(base?: I): CMsgBringWindowToFront {
    return CMsgBringWindowToFront.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBringWindowToFront>, I>>(object: I): CMsgBringWindowToFront {
    const message = createBaseCMsgBringWindowToFront();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgSetForegroundWindow(): CMsgSetForegroundWindow {
  return { browserHandle: 0 };
}

export const CMsgSetForegroundWindow = {
  encode(message: CMsgSetForegroundWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetForegroundWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetForegroundWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetForegroundWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgSetForegroundWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetForegroundWindow>, I>>(base?: I): CMsgSetForegroundWindow {
    return CMsgSetForegroundWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetForegroundWindow>, I>>(object: I): CMsgSetForegroundWindow {
    const message = createBaseCMsgSetForegroundWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgMaximizeRestoreWindow(): CMsgMaximizeRestoreWindow {
  return { browserHandle: 0 };
}

export const CMsgMaximizeRestoreWindow = {
  encode(message: CMsgMaximizeRestoreWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMaximizeRestoreWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMaximizeRestoreWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMaximizeRestoreWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgMaximizeRestoreWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMaximizeRestoreWindow>, I>>(base?: I): CMsgMaximizeRestoreWindow {
    return CMsgMaximizeRestoreWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMaximizeRestoreWindow>, I>>(object: I): CMsgMaximizeRestoreWindow {
    const message = createBaseCMsgMaximizeRestoreWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgMinimizeWindow(): CMsgMinimizeWindow {
  return { browserHandle: 0 };
}

export const CMsgMinimizeWindow = {
  encode(message: CMsgMinimizeWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgMinimizeWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgMinimizeWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgMinimizeWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgMinimizeWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgMinimizeWindow>, I>>(base?: I): CMsgMinimizeWindow {
    return CMsgMinimizeWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgMinimizeWindow>, I>>(object: I): CMsgMinimizeWindow {
    const message = createBaseCMsgMinimizeWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgShowBrowserContextMenu(): CMsgShowBrowserContextMenu {
  return { browserHandle: 0, customCommands: [] };
}

export const CMsgShowBrowserContextMenu = {
  encode(message: CMsgShowBrowserContextMenu, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    for (const v of message.customCommands) {
      CMsgShowBrowserContextMenu_ContextCommand.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShowBrowserContextMenu {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShowBrowserContextMenu();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.customCommands.push(CMsgShowBrowserContextMenu_ContextCommand.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShowBrowserContextMenu {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      customCommands: Array.isArray(object?.customCommands)
        ? object.customCommands.map((e: any) => CMsgShowBrowserContextMenu_ContextCommand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CMsgShowBrowserContextMenu): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    if (message.customCommands) {
      obj.customCommands = message.customCommands.map((e) =>
        e ? CMsgShowBrowserContextMenu_ContextCommand.toJSON(e) : undefined
      );
    } else {
      obj.customCommands = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShowBrowserContextMenu>, I>>(base?: I): CMsgShowBrowserContextMenu {
    return CMsgShowBrowserContextMenu.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShowBrowserContextMenu>, I>>(object: I): CMsgShowBrowserContextMenu {
    const message = createBaseCMsgShowBrowserContextMenu();
    message.browserHandle = object.browserHandle ?? 0;
    message.customCommands =
      object.customCommands?.map((e) => CMsgShowBrowserContextMenu_ContextCommand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCMsgShowBrowserContextMenu_ContextCommand(): CMsgShowBrowserContextMenu_ContextCommand {
  return { id: 0, label: "" };
}

export const CMsgShowBrowserContextMenu_ContextCommand = {
  encode(message: CMsgShowBrowserContextMenu_ContextCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgShowBrowserContextMenu_ContextCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgShowBrowserContextMenu_ContextCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgShowBrowserContextMenu_ContextCommand {
    return { id: isSet(object.id) ? Number(object.id) : 0, label: isSet(object.label) ? String(object.label) : "" };
  },

  toJSON(message: CMsgShowBrowserContextMenu_ContextCommand): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgShowBrowserContextMenu_ContextCommand>, I>>(
    base?: I,
  ): CMsgShowBrowserContextMenu_ContextCommand {
    return CMsgShowBrowserContextMenu_ContextCommand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgShowBrowserContextMenu_ContextCommand>, I>>(
    object: I,
  ): CMsgShowBrowserContextMenu_ContextCommand {
    const message = createBaseCMsgShowBrowserContextMenu_ContextCommand();
    message.id = object.id ?? 0;
    message.label = object.label ?? "";
    return message;
  },
};

function createBaseCMsgHandleContextMenuCommand(): CMsgHandleContextMenuCommand {
  return { browserHandle: 0, commandId: 0 };
}

export const CMsgHandleContextMenuCommand = {
  encode(message: CMsgHandleContextMenuCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.commandId !== 0) {
      writer.uint32(16).int32(message.commandId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgHandleContextMenuCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgHandleContextMenuCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.commandId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgHandleContextMenuCommand {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      commandId: isSet(object.commandId) ? Number(object.commandId) : 0,
    };
  },

  toJSON(message: CMsgHandleContextMenuCommand): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.commandId !== undefined && (obj.commandId = Math.round(message.commandId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgHandleContextMenuCommand>, I>>(base?: I): CMsgHandleContextMenuCommand {
    return CMsgHandleContextMenuCommand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgHandleContextMenuCommand>, I>>(object: I): CMsgHandleContextMenuCommand {
    const message = createBaseCMsgHandleContextMenuCommand();
    message.browserHandle = object.browserHandle ?? 0;
    message.commandId = object.commandId ?? 0;
    return message;
  },
};

function createBaseCMsgTouchGesture(): CMsgTouchGesture {
  return { browserHandle: 0, id: 0, gesture: 0, x: 0, y: 0, width: 0, height: 0, tapCount: 0, pinchScale: 0 };
}

export const CMsgTouchGesture = {
  encode(message: CMsgTouchGesture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.gesture !== 0) {
      writer.uint32(24).uint32(message.gesture);
    }
    if (message.x !== 0) {
      writer.uint32(33).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(41).double(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(49).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(57).double(message.height);
    }
    if (message.tapCount !== 0) {
      writer.uint32(64).uint32(message.tapCount);
    }
    if (message.pinchScale !== 0) {
      writer.uint32(73).double(message.pinchScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgTouchGesture {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgTouchGesture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.gesture = reader.uint32();
          break;
        case 4:
          message.x = reader.double();
          break;
        case 5:
          message.y = reader.double();
          break;
        case 6:
          message.width = reader.double();
          break;
        case 7:
          message.height = reader.double();
          break;
        case 8:
          message.tapCount = reader.uint32();
          break;
        case 9:
          message.pinchScale = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgTouchGesture {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
      gesture: isSet(object.gesture) ? Number(object.gesture) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      tapCount: isSet(object.tapCount) ? Number(object.tapCount) : 0,
      pinchScale: isSet(object.pinchScale) ? Number(object.pinchScale) : 0,
    };
  },

  toJSON(message: CMsgTouchGesture): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.gesture !== undefined && (obj.gesture = Math.round(message.gesture));
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.tapCount !== undefined && (obj.tapCount = Math.round(message.tapCount));
    message.pinchScale !== undefined && (obj.pinchScale = message.pinchScale);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgTouchGesture>, I>>(base?: I): CMsgTouchGesture {
    return CMsgTouchGesture.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgTouchGesture>, I>>(object: I): CMsgTouchGesture {
    const message = createBaseCMsgTouchGesture();
    message.browserHandle = object.browserHandle ?? 0;
    message.id = object.id ?? 0;
    message.gesture = object.gesture ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.tapCount = object.tapCount ?? 0;
    message.pinchScale = object.pinchScale ?? 0;
    return message;
  },
};

function createBaseCMsgSetTouchGesturesToCancel(): CMsgSetTouchGesturesToCancel {
  return { browserHandle: 0, gestures: [] };
}

export const CMsgSetTouchGesturesToCancel = {
  encode(message: CMsgSetTouchGesturesToCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    writer.uint32(18).fork();
    for (const v of message.gestures) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetTouchGesturesToCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetTouchGesturesToCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gestures.push(reader.uint32());
            }
          } else {
            message.gestures.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetTouchGesturesToCancel {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      gestures: Array.isArray(object?.gestures) ? object.gestures.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: CMsgSetTouchGesturesToCancel): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    if (message.gestures) {
      obj.gestures = message.gestures.map((e) => Math.round(e));
    } else {
      obj.gestures = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetTouchGesturesToCancel>, I>>(base?: I): CMsgSetTouchGesturesToCancel {
    return CMsgSetTouchGesturesToCancel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetTouchGesturesToCancel>, I>>(object: I): CMsgSetTouchGesturesToCancel {
    const message = createBaseCMsgSetTouchGesturesToCancel();
    message.browserHandle = object.browserHandle ?? 0;
    message.gestures = object.gestures?.map((e) => e) || [];
    return message;
  },
};

function createBaseCMsgImeSetComposition(): CMsgImeSetComposition {
  return { browserHandle: 0, text: "" };
}

export const CMsgImeSetComposition = {
  encode(message: CMsgImeSetComposition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgImeSetComposition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgImeSetComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgImeSetComposition {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgImeSetComposition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgImeSetComposition>, I>>(base?: I): CMsgImeSetComposition {
    return CMsgImeSetComposition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgImeSetComposition>, I>>(object: I): CMsgImeSetComposition {
    const message = createBaseCMsgImeSetComposition();
    message.browserHandle = object.browserHandle ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgImeCommitText(): CMsgImeCommitText {
  return { browserHandle: 0, text: "" };
}

export const CMsgImeCommitText = {
  encode(message: CMsgImeCommitText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgImeCommitText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgImeCommitText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgImeCommitText {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: CMsgImeCommitText): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgImeCommitText>, I>>(base?: I): CMsgImeCommitText {
    return CMsgImeCommitText.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgImeCommitText>, I>>(object: I): CMsgImeCommitText {
    const message = createBaseCMsgImeCommitText();
    message.browserHandle = object.browserHandle ?? 0;
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseCMsgImeCancelComposition(): CMsgImeCancelComposition {
  return { browserHandle: 0 };
}

export const CMsgImeCancelComposition = {
  encode(message: CMsgImeCancelComposition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgImeCancelComposition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgImeCancelComposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgImeCancelComposition {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgImeCancelComposition): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgImeCancelComposition>, I>>(base?: I): CMsgImeCancelComposition {
    return CMsgImeCancelComposition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgImeCancelComposition>, I>>(object: I): CMsgImeCancelComposition {
    const message = createBaseCMsgImeCancelComposition();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgImeCompositionRangeChanged(): CMsgImeCompositionRangeChanged {
  return { browserHandle: 0, x: 0, y: 0 };
}

export const CMsgImeCompositionRangeChanged = {
  encode(message: CMsgImeCompositionRangeChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgImeCompositionRangeChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgImeCompositionRangeChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgImeCompositionRangeChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgImeCompositionRangeChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgImeCompositionRangeChanged>, I>>(base?: I): CMsgImeCompositionRangeChanged {
    return CMsgImeCompositionRangeChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgImeCompositionRangeChanged>, I>>(
    object: I,
  ): CMsgImeCompositionRangeChanged {
    const message = createBaseCMsgImeCompositionRangeChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgInspectElement(): CMsgInspectElement {
  return { browserHandle: 0, x: 0, y: 0 };
}

export const CMsgInspectElement = {
  encode(message: CMsgInspectElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.x !== 0) {
      writer.uint32(16).uint32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).uint32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgInspectElement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgInspectElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.x = reader.uint32();
          break;
        case 3:
          message.y = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgInspectElement {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CMsgInspectElement): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgInspectElement>, I>>(base?: I): CMsgInspectElement {
    return CMsgInspectElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgInspectElement>, I>>(object: I): CMsgInspectElement {
    const message = createBaseCMsgInspectElement();
    message.browserHandle = object.browserHandle ?? 0;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCMsgDisableF5(): CMsgDisableF5 {
  return { browserHandle: 0, disable: false };
}

export const CMsgDisableF5 = {
  encode(message: CMsgDisableF5, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.disable === true) {
      writer.uint32(16).bool(message.disable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDisableF5 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDisableF5();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.disable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgDisableF5 {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      disable: isSet(object.disable) ? Boolean(object.disable) : false,
    };
  },

  toJSON(message: CMsgDisableF5): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.disable !== undefined && (obj.disable = message.disable);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgDisableF5>, I>>(base?: I): CMsgDisableF5 {
    return CMsgDisableF5.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgDisableF5>, I>>(object: I): CMsgDisableF5 {
    const message = createBaseCMsgDisableF5();
    message.browserHandle = object.browserHandle ?? 0;
    message.disable = object.disable ?? false;
    return message;
  },
};

function createBaseCMsgStartDownload(): CMsgStartDownload {
  return { browserHandle: 0, url: "" };
}

export const CMsgStartDownload = {
  encode(message: CMsgStartDownload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgStartDownload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgStartDownload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgStartDownload {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CMsgStartDownload): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgStartDownload>, I>>(base?: I): CMsgStartDownload {
    return CMsgStartDownload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgStartDownload>, I>>(object: I): CMsgStartDownload {
    const message = createBaseCMsgStartDownload();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCMsgSetTopWindow(): CMsgSetTopWindow {
  return { browserHandle: 0 };
}

export const CMsgSetTopWindow = {
  encode(message: CMsgSetTopWindow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetTopWindow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetTopWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetTopWindow {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgSetTopWindow): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetTopWindow>, I>>(base?: I): CMsgSetTopWindow {
    return CMsgSetTopWindow.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetTopWindow>, I>>(object: I): CMsgSetTopWindow {
    const message = createBaseCMsgSetTopWindow();
    message.browserHandle = object.browserHandle ?? 0;
    return message;
  },
};

function createBaseCMsgBrowserViewPostMessageToParentRequest(): CMsgBrowserViewPostMessageToParentRequest {
  return { browserHandle: 0, message: "", args: "", requestingUrl: "" };
}

export const CMsgBrowserViewPostMessageToParentRequest = {
  encode(message: CMsgBrowserViewPostMessageToParentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.args !== "") {
      writer.uint32(26).string(message.args);
    }
    if (message.requestingUrl !== "") {
      writer.uint32(34).string(message.requestingUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserViewPostMessageToParentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserViewPostMessageToParentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.args = reader.string();
          break;
        case 4:
          message.requestingUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserViewPostMessageToParentRequest {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      args: isSet(object.args) ? String(object.args) : "",
      requestingUrl: isSet(object.requestingUrl) ? String(object.requestingUrl) : "",
    };
  },

  toJSON(message: CMsgBrowserViewPostMessageToParentRequest): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.message !== undefined && (obj.message = message.message);
    message.args !== undefined && (obj.args = message.args);
    message.requestingUrl !== undefined && (obj.requestingUrl = message.requestingUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserViewPostMessageToParentRequest>, I>>(
    base?: I,
  ): CMsgBrowserViewPostMessageToParentRequest {
    return CMsgBrowserViewPostMessageToParentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserViewPostMessageToParentRequest>, I>>(
    object: I,
  ): CMsgBrowserViewPostMessageToParentRequest {
    const message = createBaseCMsgBrowserViewPostMessageToParentRequest();
    message.browserHandle = object.browserHandle ?? 0;
    message.message = object.message ?? "";
    message.args = object.args ?? "";
    message.requestingUrl = object.requestingUrl ?? "";
    return message;
  },
};

function createBaseCMsgBlockedRequest(): CMsgBlockedRequest {
  return { browserHandle: 0, url: "" };
}

export const CMsgBlockedRequest = {
  encode(message: CMsgBlockedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBlockedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBlockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBlockedRequest {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: CMsgBlockedRequest): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBlockedRequest>, I>>(base?: I): CMsgBlockedRequest {
    return CMsgBlockedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBlockedRequest>, I>>(object: I): CMsgBlockedRequest {
    const message = createBaseCMsgBlockedRequest();
    message.browserHandle = object.browserHandle ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCMsgBrowserFocusChanged(): CMsgBrowserFocusChanged {
  return { browserHandle: 0, focused: false };
}

export const CMsgBrowserFocusChanged = {
  encode(message: CMsgBrowserFocusChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.focused === true) {
      writer.uint32(16).bool(message.focused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgBrowserFocusChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgBrowserFocusChanged();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.focused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgBrowserFocusChanged {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      focused: isSet(object.focused) ? Boolean(object.focused) : false,
    };
  },

  toJSON(message: CMsgBrowserFocusChanged): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.focused !== undefined && (obj.focused = message.focused);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgBrowserFocusChanged>, I>>(base?: I): CMsgBrowserFocusChanged {
    return CMsgBrowserFocusChanged.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgBrowserFocusChanged>, I>>(object: I): CMsgBrowserFocusChanged {
    const message = createBaseCMsgBrowserFocusChanged();
    message.browserHandle = object.browserHandle ?? 0;
    message.focused = object.focused ?? false;
    return message;
  },
};

function createBaseCMsgSetProtocolBlockList(): CMsgSetProtocolBlockList {
  return { browserHandle: 0, list: "" };
}

export const CMsgSetProtocolBlockList = {
  encode(message: CMsgSetProtocolBlockList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    if (message.list !== "") {
      writer.uint32(18).string(message.list);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetProtocolBlockList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetProtocolBlockList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        case 2:
          message.list = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetProtocolBlockList {
    return {
      browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0,
      list: isSet(object.list) ? String(object.list) : "",
    };
  },

  toJSON(message: CMsgSetProtocolBlockList): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    message.list !== undefined && (obj.list = message.list);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetProtocolBlockList>, I>>(base?: I): CMsgSetProtocolBlockList {
    return CMsgSetProtocolBlockList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetProtocolBlockList>, I>>(object: I): CMsgSetProtocolBlockList {
    const message = createBaseCMsgSetProtocolBlockList();
    message.browserHandle = object.browserHandle ?? 0;
    message.list = object.list ?? "";
    return message;
  },
};

function createBaseCMsgSetForceDeviceScaleFactors(): CMsgSetForceDeviceScaleFactors {
  return { dpiScale: 0, browserScale: 0 };
}

export const CMsgSetForceDeviceScaleFactors = {
  encode(message: CMsgSetForceDeviceScaleFactors, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dpiScale !== 0) {
      writer.uint32(9).double(message.dpiScale);
    }
    if (message.browserScale !== 0) {
      writer.uint32(17).double(message.browserScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetForceDeviceScaleFactors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetForceDeviceScaleFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dpiScale = reader.double();
          break;
        case 2:
          message.browserScale = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetForceDeviceScaleFactors {
    return {
      dpiScale: isSet(object.dpiScale) ? Number(object.dpiScale) : 0,
      browserScale: isSet(object.browserScale) ? Number(object.browserScale) : 0,
    };
  },

  toJSON(message: CMsgSetForceDeviceScaleFactors): unknown {
    const obj: any = {};
    message.dpiScale !== undefined && (obj.dpiScale = message.dpiScale);
    message.browserScale !== undefined && (obj.browserScale = message.browserScale);
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetForceDeviceScaleFactors>, I>>(base?: I): CMsgSetForceDeviceScaleFactors {
    return CMsgSetForceDeviceScaleFactors.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetForceDeviceScaleFactors>, I>>(
    object: I,
  ): CMsgSetForceDeviceScaleFactors {
    const message = createBaseCMsgSetForceDeviceScaleFactors();
    message.dpiScale = object.dpiScale ?? 0;
    message.browserScale = object.browserScale ?? 0;
    return message;
  },
};

function createBaseCMsgSetUIMode(): CMsgSetUIMode {
  return { uiMode: 0 };
}

export const CMsgSetUIMode = {
  encode(message: CMsgSetUIMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uiMode !== 0) {
      writer.uint32(8).int32(message.uiMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgSetUIMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgSetUIMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uiMode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgSetUIMode {
    return { uiMode: isSet(object.uiMode) ? Number(object.uiMode) : 0 };
  },

  toJSON(message: CMsgSetUIMode): unknown {
    const obj: any = {};
    message.uiMode !== undefined && (obj.uiMode = Math.round(message.uiMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgSetUIMode>, I>>(base?: I): CMsgSetUIMode {
    return CMsgSetUIMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgSetUIMode>, I>>(object: I): CMsgSetUIMode {
    const message = createBaseCMsgSetUIMode();
    message.uiMode = object.uiMode ?? 0;
    return message;
  },
};

function createBaseCMsgPopupCreated(): CMsgPopupCreated {
  return { browserHandle: 0 };
}

export const CMsgPopupCreated = {
  encode(message: CMsgPopupCreated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.browserHandle !== 0) {
      writer.uint32(8).uint32(message.browserHandle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgPopupCreated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgPopupCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserHandle = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CMsgPopupCreated {
    return { browserHandle: isSet(object.browserHandle) ? Number(object.browserHandle) : 0 };
  },

  toJSON(message: CMsgPopupCreated): unknown {
    const obj: any = {};
    message.browserHandle !== undefined && (obj.browserHandle = Math.round(message.browserHandle));
    return obj;
  },

  create<I extends Exact<DeepPartial<CMsgPopupCreated>, I>>(base?: I): CMsgPopupCreated {
    return CMsgPopupCreated.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CMsgPopupCreated>, I>>(object: I): CMsgPopupCreated {
    const message = createBaseCMsgPopupCreated();
    message.browserHandle = object.browserHandle ?? 0;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
