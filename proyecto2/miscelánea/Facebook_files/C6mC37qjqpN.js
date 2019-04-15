if (self.CavalryLogger) { CavalryLogger.start_js(["o+AeN"]); }

__d("MNCommerceBlockTypeJSInstance",[],(function(a,b,c,d,e,f){e.exports={ALL:"all",PROMOTION:"promotion",NONE:"none"}}),null);
__d("FBRTCAvailability",["ChannelConstants","PresenceStatus"],(function(a,b,c,d,e,f){"use strict";a={isCallable:function(a){a=b("PresenceStatus").getCapabilities(a);var c=b("ChannelConstants").CAPABILITY_VOIP_INTEROP;return!!(a&c)}};e.exports=a}),null);
__d("FBRTCCallUIWrapper",["regeneratorRuntime","Bootloader","CurrentUser","FBRTCUtils","RTWebExperiments","UserAgent","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={openGroupCallUI:function(a,c,d,e,f,h,i){return b("regeneratorRuntime").async(function(j){while(1)switch(j.prev=j.next){case 0:g=this._openWindow("Group Call"),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openGroupCallUI(a,c,d,e,f,h,g,i)},"FBRTCCallUIWrapper");case 2:case"end":return j.stop()}},null,this)},openGroupCallURI:function(a,c,d,e,f,h,i,j,k){return b("regeneratorRuntime").async(function(l){while(1)switch(l.prev=l.next){case 0:g=this._openWindow("Group Call"),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openGroupCallURI({conferenceName:a,callID:c,hasVideo:d,initializeVideo:e,serverInfoData:i,trigger:j,callSummary:k,callWindow:g,multiwayWwwTier:h,multiwayCoreTier:f})},"FBRTCCallUIWrapper");case 2:case"end":return l.stop()}},null,this)},openAsCaller:function(a,c,d,e){!g&&window.rtcCallChildWindow&&(g=window.rtcCallChildWindow,window.rtcCallChildWindow=null);if(this._shouldFocusCallWindow(a)){g&&g.focus();return}this._shouldCloseCallWindow()&&(g&&g.close());g=this._openWindow("Video Call",{isP2P:!0,isVCCall:b("FBRTCUtils").isPeerVCEndpoint(a)||b("FBRTCUtils").isCollabTrigger(d)});b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openAsCaller(a,c,d,e,g)},"FBRTCCallUIWrapper")},openAsCallee:function(a,c,d,e,f){g=this._openWindow("Video Call",{isP2P:!0,isVCCall:b("FBRTCUtils").isPeerVCEndpoint(a)}),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openAsCallee(a,c,d,e,g,f)},"FBRTCCallUIWrapper")},_shouldFocusCallWindow:function(a){return!!g&&!g.closed&&g.rtcCallInProgessWith===a},_shouldCloseCallWindow:function(){return!!g&&!g.closed&&!g.rtcCallInProgessWith},_openWindow:function(a,c){__p&&__p();c=c===void 0?{isP2P:!1,isVCCall:!1}:c;var d=c.isP2P;d=d===void 0?!1:d;c=c.isVCCall;c=c===void 0?!1:c;d=this._windowPosition({isP2P:d,isVCCall:c});c=["menubar=no","location=no","scrollbars=no","status=no","personalbar=no",d.height,d.width,d.top,d.left].join(",");this._isSparkBrowser()&&(c="");b("gkx")("859726")&&b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:"rtc_www_new_tab"})},"FBRTCCallUIWrapper");d=b("gkx")("859726")?window.open("","_blank"):window.open("",a,c);window.callWindow=d;return d},_windowDimension:function(a){__p&&__p();var c=a.isP2P;a=a.isVCCall;var d=960,e=540;if(screen&&screen.width>1280){var f=!1,g=!1;c&&(f=b("RTWebExperiments").forceSmallWindow(a,b("CurrentUser").isWorkUser()));!c&&!f&&(g=b("RTWebExperiments").fixedHeightGridView(a,b("CurrentUser").isWorkUser()));g?(d=b("RTWebExperiments").fixedHeightGridViewOuterWindowWidth(),e=b("RTWebExperiments").fixedHeightGridViewOuterWindowHeight()):f||(d=1280,e=720)}return{height:e,width:d}},_windowPosition:function(a){__p&&__p();var b=a.isP2P;b=b===void 0?!1:b;a=a.isVCCall;a=a===void 0?!1:a;var c,d,e,f;b=h._windowDimension({isP2P:b,isVCCall:a});a=b.height;b=b.width;window.innerWidth!==void 0?(d=window.innerWidth,c=window.innerHeight):(d=screen.width,c=screen.height);window.screenLeft!==void 0?(e=window.screenLeft,f=window.screenTop):(e=window.screenX,f=window.screenY);d=Math.floor(d/2-b/2+e);e=Math.floor(c/2-a/2+f);return{height:"height="+a.toString(),width:"width="+b.toString(),top:"top="+e.toString(),left:"left="+d.toString()}},_isSparkBrowser:function(){return b("UserAgent").isBrowser("Chrome < 34")&&b("UserAgent").isBrowser("Chrome > 33")}};e.exports=h}),null);
__d("RTWebCallTriggerMapping",["RTWebLoggingComponent","RTWebLoggingSurface","deepFreezeValue"],(function(a,b,c,d,e,f){"use strict";a={chat_sidebar:{surface:b("RTWebLoggingSurface").CHAT_SIDEBAR,component:b("RTWebLoggingComponent").RECENT_CALLS},chattab_audio_button:{surface:b("RTWebLoggingSurface").CHAT_TAB,component:b("RTWebLoggingComponent").AUDIO_CALL},chattab_video_button:{surface:b("RTWebLoggingSurface").CHAT_TAB,component:b("RTWebLoggingComponent").VIDEO_CALL},messenger_bubble_free_call:{surface:b("RTWebLoggingSurface").MESSENGER_BUBBLE,component:b("RTWebLoggingComponent").FREE_CALL},messenger_dot_com_missed_call_dialog:{surface:b("RTWebLoggingSurface").MISSED_CALL_DIALOG,component:b("RTWebLoggingComponent").START_CALL},messenger_dot_com_video_call:{surface:b("RTWebLoggingSurface").MESSENGER_HEADER,component:b("RTWebLoggingComponent").VIDEO_CALL},messenger_dot_com_audio_call:{surface:b("RTWebLoggingSurface").MESSENGER_HEADER,component:b("RTWebLoggingComponent").AUDIO_CALL},timeline:{surface:b("RTWebLoggingSurface").DROPDOWN_CALL_MENU,component:b("RTWebLoggingComponent").START_CALL},messenger_dot_com_work_hovercard:{surface:b("RTWebLoggingSurface").WORK_HOVERCARD,component:b("RTWebLoggingComponent").START_CALL},admin_message:{surface:b("RTWebLoggingSurface").ADMIN_MESSAGE,component:b("RTWebLoggingComponent").START_CALL},return_call:{surface:b("RTWebLoggingSurface").MISSED_CALL_DIALOG,component:b("RTWebLoggingComponent").START_CALL},popup_start_call_button:{surface:b("RTWebLoggingSurface").CALL_CONTAINER,component:b("RTWebLoggingComponent").START_CALL},redial_button:{surface:b("RTWebLoggingSurface").CALL_CONTAINER,component:b("RTWebLoggingComponent").REDIAL}};b("deepFreezeValue")(a);e.exports=a}),null);
__d("FBRTCCore",["invariant","Bootloader","FBLogger","FBRTCAvailability","FBRTCCallUIWrapper","FBRTCSupport","RTWebCallTriggerMapping","RTWebLoggingCallType","RTWebUserActionLogger","generateRTCCallID","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!1;a={startOutgoingCall:function(a,c,d,e){__p&&__p();e===void 0&&(e=!1);/\D/.test(a)&&g(0,2478);var f=b("generateRTCCallID")(),i=b("RTWebCallTriggerMapping")[c];(i===null||i===void 0)&&b("FBLogger")("rtweb").mustfix("Unexpected or unknown call trigger: %s",c);b("RTWebUserActionLogger").logPreCallClick(babelHelpers["extends"]({},i,{callID:f.toString(),mediaType:b("RTWebUserActionLogger").getMediaType(d),callType:b("RTWebLoggingCallType").P2P}));if(h)return;h=!0;b("setTimeout")(function(){h=!1},1e3);e&&!b("FBRTCSupport").isCollabSupported()?b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],function(b,c){b.showForUnsupportedCollabCall(),c.logBrowserNotSupported({peerID:a})},"FBRTCCore"):!b("FBRTCSupport").isWebrtcSupported()?b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage"],function(a){a.showForOutgoingCall(),b("RTWebUserActionLogger").logError({callID:f.toString(),callType:b("RTWebLoggingCallType").P2P,mediaType:b("RTWebUserActionLogger").getMediaType(d),errorDomain:"unsupported browser"})},"FBRTCCore"):b("FBRTCCallUIWrapper").openAsCaller(a,f,c,d)},startGroupCall:function(a){__p&&__p();var c=a.conferenceName,d=a.hasVideo,e=a.serverInfoData,f=a.trigger;a=a.usersToRing;a=a===void 0?[]:a;if(h)return;h=!0;b("setTimeout")(function(){h=!1},1e3);if(!b("FBRTCSupport").isGroupCallWebtrcSupported()){b("Bootloader").loadModules(["MessengerRTCUnsupportedBrowserDialogController"],function(a){b("RTWebUserActionLogger").logError({callType:b("RTWebLoggingCallType").MW,conferenceName:c,mediaType:b("RTWebUserActionLogger").getMediaType(!d),errorDomain:"unsupported browser"}),a.render({hasVideo:d,isGroupCall:!0})},"FBRTCCore");return}b("FBRTCCallUIWrapper").openGroupCallUI(c,b("generateRTCCallID")(),a,d,d,f,e)},isAvailableForWebrtcCalling:function(a){return b("FBRTCAvailability").isCallable(a)}};e.exports=a}),null);
__d("MessengerMenu.react",["cx","Keys","MenuSeparator.react","MessengerDotComAndInboxM4Check.bs","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a.isReactLegacyFactory={},a.type=a}c=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d=c.className;c=babelHelpers.objectWithoutPropertiesLoose(c,["className"]);return a.call(this,babelHelpers["extends"]({className:b("joinClasses")(d,"_2i-c"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _6_n0":"")+" _150g")},c))||this}var d=c.prototype;d.handleKeydown=function(c,d){return c===b("Keys").DOWN||c===b("Keys").UP||c===b("Keys").SPACE?a.prototype.handleKeydown.call(this,c,d):!0};return c}(b("ReactXUIMenu"));a(c);c.Item=b("ReactXUIMenu").Item;c.Separator=b("MenuSeparator.react");e.exports=c}),null);
__d("XSettingsEmployeeBetaController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/settings/employee/beta_mode/",{enabled:{type:"Bool",defaultValue:!1}})}),null);
__d("MessengerBugNub.react",["cx","fbt","ix","AsyncRequest","CurrentUser","Image.react","Link.react","MessengerEnvironment","MessengerMenu.react","MessengerPopoverMenu.react","React","Tooltip","URI","WorkModeConfig","XSettingsEmployeeBetaController","gkx","goURI"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=i("86836"),k=i("86835"),l=i("86837");a=b("React").PropTypes;var m=b("MessengerMenu.react").Item,n=b("MessengerMenu.react").Separator,o=h._("Reportar un error");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("CurrentUser").isEmployee()?b("React").createElement("div",{className:"_4_xe"+(b("gkx")("678606")?" _2jqn":"")},this.$1(),b("React").createElement(b("Link.react"),babelHelpers["extends"]({"aria-label":o,href:"#",ajaxify:"/ajax/bugs/employee_report",className:"_1fr8",rel:"dialog"},b("Tooltip").propsFor(o)),b("React").createElement("div",{className:"_1gng"},b("React").createElement(b("Image.react"),{src:j})))):null};d.$1=function(){var a=this.props.isBetaEnabled?k:l,c=h._("Preferencias internas");return b("React").createElement(b("MessengerPopoverMenu.react"),babelHelpers["extends"]({className:"_1fr8",menu:this.$2()},b("Tooltip").propsFor(c)),b("React").createElement(b("Link.react"),{"aria-haspopup":"true","aria-label":c,className:"_1gng",href:"#",role:"button"},b("React").createElement(b("Image.react"),{src:a})))};d.$2=function(){__p&&__p();var a=this,c=null;if(this.props.unixName){var d=this.props.unixName+".sb";c=b("React").createElement(m,{label:"Sandbox",onclick:function(){return a.$3(d)}})}return b("React").createElement(b("MessengerMenu.react"),null,b("React").createElement(m,{label:"Public",onclick:function(){return a.$4(!1)}}),b("React").createElement(m,{label:"Beta",onclick:function(){return a.$4(!0)}}),b("React").createElement(n,null),b("React").createElement(m,{label:"C1 (trunkstable)",onclick:function(){return a.$3()}}),b("React").createElement(m,{label:"Intern",onclick:function(){return a.$3("intern")}}),b("React").createElement(m,{label:"Production",onclick:function(){return a.$3("prod")}}),c)};d.$4=function(a){var c=b("XSettingsEmployeeBetaController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({enabled:a}).setMethod("POST").setAllowCrossPageTransition(!0).send()};d.$3=function(a){var c=b("MessengerEnvironment").facebookdotcom?".facebook.com":".messenger.com",d=b("WorkModeConfig").company_subdomain;d=d?d:"www";d=d+(a?"."+a:"")+c;b("goURI")(b("URI").getRequestURI().getQualifiedURI().setDomain(d))};return c}(b("React").PureComponent);c.propTypes={isBetaEnabled:a.bool,unixName:a.string};e.exports=c}),null);
__d("MessengerResponsiveBlock.react",["React","createCancelableFunction","requestAnimationFrame","shallowEqual","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;var g={bottom:0,left:0,overflow:"hidden",position:"absolute",right:0,top:0,visibility:"hidden",zIndex:-1},h={left:0,position:"absolute",top:0,transition:"0s"},i={height:"200%",left:0,position:"absolute",top:0,transition:"0s",width:"200%"};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.dirty=!1,d.lastWidth=null,d.lastHeight=null,d.lastBreakpointsToggles=null,d.setupWeirdScrollTracking=function(){d.refs.expandChild.style.width="10000px",d.refs.expandChild.style.height="10000px",d.refs.expand.scrollLeft=1e5,d.refs.expand.scrollTop=1e5,d.refs.shrink.scrollLeft=1e5,d.refs.shrink.scrollTop=1e5},d.$2=function(){__p&&__p();var a=d.refs.outer.offsetWidth,c=d.refs.outer.offsetHeight;if((a!=d.lastWidth||c!=d.lastHeight)&&!d.dirty){if(Math.abs(a-(d.lastWidth||0))<10&&Math.abs(c-(d.lastHeight||0))<16)return;d.dirty=!0;d.lastWidth=a;d.lastHeight=c;a=d.props.breakpointsToggles(a,c);b("shallowEqual")(d.lastBreakpointsToggles,a)?d.dirty=!1:d.forceUpdate(function(){b("requestAnimationFrame")(function(){d.dirty=!1})});d.lastBreakpointsToggles=a}d.setupWeirdScrollTracking()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("createCancelableFunction")(this.$2),this.onScroll=b("throttle")(this.$1,50),this.setupWeirdScrollTracking(),this.onScroll()};d.componentWillUnmount=function(){this.$1.cancel()};d.render=function(){return b("React").createElement("div",{ref:"outer"},this.props.children(this.props.breakpointsToggles(this.lastWidth,this.lastHeight)),b("React").createElement("div",{style:g,onScroll:this.onScroll,ref:"expand"},b("React").createElement("div",{style:h,ref:"expandChild"})),b("React").createElement("div",{style:g,onScroll:this.onScroll,ref:"shrink"},b("React").createElement("div",{style:i})))};return c}(b("React").Component);c.propTypes={children:a.func.isRequired,breakpointsToggles:a.func.isRequired};e.exports=c}),null);
__d("MessengerContextualDialog.react",["cx","AccessibleLayer","ContextualLayerAutoFlipHorizontal","ContextualLayerUpdateOnScroll","LayerHideOnEscape","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";a=12;c=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("ContextualLayerAutoFlipHorizontal"),b("ContextualLayerUpdateOnScroll"),b("LayerHideOnEscape"),b("AccessibleLayer")],displayName:"MessengerContextualDialog",shouldSetARIAProperties:!1,theme:{wrapperClassName:"_1r_9",arrowDimensions:{offset:a,length:16}}}));e.exports=c}),null);
__d("MessengerConstants",[],(function(a,b,c,d,e,f){"use strict";a={NEW_THREAD_KEY:"new",BROWSER_EXTENSIONS_DIALOG_DIMENSIONS:{HEIGHT:604,WIDTH:405}};e.exports=a}),null);
__d("MessengerAddIconSVGReact.bs",["fbt","React","ReasonReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=g._("agregar al grupo"),i=b("ReasonReact.bs").statelessComponent("MessengerAddIconSVGReact");function j(a,c,d){return[i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7],function(){return b("React").createElement("div",{className:a},b("React").createElement("svg",{viewBox:"-8 -8 48 48"},b("React").createElement("title",void 0,h),b("React").createElement("path",{clipRule:"evenodd",d:"M16,0 V32 M0,16 H32",fill:"none",fillRule:"evenodd",stroke:c,strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2"})))},i[9],i[10],i[11],i[12]]}a=b("ReasonReact.bs").wrapReasonForJs(i,function(a){return j(a.className,a.customColor,[])});f.addToGroup=h;f.component=i;f.make=j;f.jsComponent=a}),null);
__d("MessengerDeliveryReceipt.bs",["bs_belt_Option","bs_belt_MapString"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("bs_belt_Option").getWithDefault(b("bs_belt_MapString").get(a,c),0)}c=b("bs_belt_Option").getWithDefault;f.$pipe$unknown=c;f.getDeliveryTimeOfThread=a}),null);
__d("MessengerReasonDialogContainerReact.bs",["bs_list","bs_array","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogs.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").reducerComponent("MessengerReasonDialogContainer");function h(){__p&&__p();return[g[0],g[1],g[2],g[3],function(a){return b("MessengerDialogs.bs").addHandler(function(c){return b("bs_curry")._1(a[3],[c])})},g[5],g[6],g[7],function(a){a=a[1];if(a!==void 0)return b("React").createElement("div",void 0,b("bs_array").mapi(function(a,c){return b("React").createElement("span",{key:String(a)},b("bs_curry")._1(c,0))},b("bs_array").of_list(b("bs_list").rev(a))));else return null},function(){return void 0},g[10],function(a,c){return b("bs_block").__(0,[a[0]])},g[12]]}a=b("ReasonReact.bs").wrapReasonForJs(g,function(){return h([])});f.component=g;f.make=h;f.jsComponent=a}),null);
__d("MercuryMessageStore",["CurrentUser","LogHistory","MercuryAPIArgsSource","MercuryThreadInformer","MercuryThreadlistConstants","MessengerState.bs","SubscriptionsHandler","mixInEventEmitter","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("LogHistory").getInstance("mercury_message_store");a=function(){__p&&__p();function a(a,c,d){__p&&__p();var e=this;this.$5=a;this.$1=d||b("CurrentUser").getID();this.$2=1;this.$3=c||b("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;this.$6=d?b("MercuryThreadInformer").getForFBID(d):b("MercuryThreadInformer").get();this.$4=new(b("SubscriptionsHandler"))();this.$4.addSubscriptions(this.$6.subscribe("messages-received",function(a,b){return e.$7(b)}),this.$6.subscribe("messages-updated",function(a,b){return b[e.$5]&&e.$8(b[e.$5])}),this.$6.subscribe("messages-reordered",function(a,b){return b[e.$5]&&e.$9()}),this.$6.subscribe("thread-invalidated",function(a,b){return b[e.$5]&&e.$10()}));a=this.$11();g.debug("constructed",JSON.stringify({threadID:this.$5,messageCount:a}));a<this.$3?this.$12():b("setImmediate")(function(){e.$9()})}var c=a.prototype;c.destroy=function(){this.$4&&this.$4.release(),g.debug("destroyed",JSON.stringify({threadID:this.$5}))};c.subscribe=function(a){return this.addRetroactiveListener("updated",a)};c.fetchMoreMessages=function(){if(this.hasFetchedAll())return!1;this.$12();return!0};c.hasFetchedAll=function(){return b("MessengerState.bs").hasLoadedAllMessages(this.$1,this.$5)||b("MessengerState.bs").isNewEmptyLocalThread(this.$1,this.$5)};c.$11=function(){return b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5).length};c.$12=function(){var a=this,c=this.$3;b("MessengerState.bs").getThreadMessagesRange(this.$1,this.$5,this.$11(),c,this.$13.bind(this),null,b("MercuryAPIArgsSource").MERCURY);this.$2<10&&(this.$2+=1);b("MessengerState.bs").hasLoadedNMessages(this.$1,this.$5,c+this.$11())&&b("setImmediate")(function(){a.$9()})};c.$13=function(b){g.debug("fetch_messages",JSON.stringify({threadID:this.$5,fetchedMessagesCount:b&&b.length||0,messageCount:this.$11()})),b&&!b.length&&!this.$11()&&this.$14(a.THREAD_IS_EMPTY)};c.$7=function(b){var c=[];b=b[this.$5];b&&b.length&&(c=c.concat(b.filter(function(a){return!!a})));c.length&&this.$14(a.MESSAGES_RECEIVED)};c.$8=function(b){this.$14(a.MESSAGES_CHANGED)};c.$9=function(){this.$14(a.MESSAGES_REORDERED)};c.$10=function(){this.$2=1,this.$12()};c.$14=function(a){var c=b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5);this.releaseHeldEventType("updated");this.emitAndHold("updated",{messages:c,eventType:a})};return a}();Object.assign(a,{MESSAGES_FETCHED:"fetched",MESSAGES_CHANGED:"changed",MESSAGES_RECEIVED:"received",MESSAGES_REORDERED:"reordered",THREAD_IS_EMPTY:"thread-is-empty"});b("mixInEventEmitter")(a,{updated:!0});e.exports=a}),null);
__d("MNCommerceDialogStateActions",["MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";a={showDialog:function(a,c){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.SHOW,dialogContainer:a,state:c})},hideDialog:function(){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.HIDE})}};e.exports=a}),null);
__d("MessengerRTCGroupCallRingParticipantsRow.react",["cx","fbt","React","intlList"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){a=a.names;return b("React").createElement("div",{className:"_1wsd"},b("React").createElement("div",{className:"_1wse"},h._("Llamar:")),b("React").createElement("div",{className:"_1wsg"},b("intlList")(a,b("intlList").CONJUNCTIONS.NONE)))};e.exports=a}),null);
__d("MessengerRTCGroupCallParticipantsPickerDialog.react",["cx","fbt","invariant","FBRTCCore","ImmutableObject","MessengerDialog.react","MessengerDialogButton.react","MessengerDialogCancelButton.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","MessengerRTCGroupCallContactList.react","MessengerRTCGroupCallRingParticipantsRow.react","MessengerRTCGroupCallThreadRow.react","React","RTCUser","RTWebLoggingCallType","RTWebLoggingComponent","RTWebLoggingSurface","RTWebUserActionLogger","URI","VideoCallWebDriverIDs","gkx","immutable"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=b("MessengerDialogHeaderReact.re").component,k=b("MessengerDialogTitleReact.re").component;a=b("React").PropTypes;var l=460,m=5;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.state={isParticipantSelected:d.props.participants.mapEntries(function(a){var b=a[0];a=a[1];return[a.fbid?a.fbid:b,d.props.participants.size<=m]})};d.$3=function(){b("RTWebUserActionLogger").logPreCallClick({mediaType:b("RTWebUserActionLogger").getMediaType(!d.props.hasVideo),callType:b("RTWebLoggingCallType").MW,conferenceName:d.props.conferenceName,surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG,component:b("RTWebLoggingComponent").CANCEL})};d.$6=function(a){var c=!d.state.isParticipantSelected.get(a);d.setState(function(b){return{isParticipantSelected:b.isParticipantSelected.set(a,c)}});b("RTWebUserActionLogger").logPreCallClick({mediaType:b("RTWebUserActionLogger").getMediaType(!d.props.hasVideo),callType:b("RTWebLoggingCallType").MW,conferenceName:d.props.conferenceName,surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG,component:c?b("RTWebLoggingComponent").PARTICIPANT_ROW_SELECT:b("RTWebLoggingComponent").PARTICIPANT_ROW_UNSELECT})};d.$4=function(){var a=d.$2().map(function(a){return a.fbid});b("RTWebUserActionLogger").logPreCallClick({mediaType:b("RTWebUserActionLogger").getMediaType(!d.props.hasVideo),callType:b("RTWebLoggingCallType").MW,conferenceName:d.props.conferenceName,surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG,component:b("RTWebLoggingComponent").START_CALL});d.props.handleCall?d.props.handleCall(a):b("FBRTCCore").startGroupCall({conferenceName:d.props.conferenceName,hasVideo:d.props.hasVideo,trigger:d.props.trigger,usersToRing:a});d.props.onUnmount()};c=d.props.participants.valueSeq().toArray().map(function(a){var c=a.big_image_src||a.image_src;a.fbid||i(0,1174);return new(b("RTCUser"))({FBID:a.fbid,profileUrl:new(b("URI"))(a.href),profilePictureUrl:c,isMessengerUser:!!a.is_messenger_user,isPartiesUser:!!a.is_parties_user,userName:a.name,userShortName:a.short_name,vanity:a.vanity||""})});d.$1=c.sort(function(a,b){return a.userName.localeCompare(b.userName)});return d}var d=c.prototype;d.componentDidMount=function(){b("RTWebUserActionLogger").logPreCallImpression({mediaType:b("RTWebUserActionLogger").getMediaType(!this.props.hasVideo),callType:b("RTWebLoggingCallType").MW,conferenceName:this.props.conferenceName,surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG}),b("RTWebUserActionLogger").logImpression({surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG,component:b("RTWebLoggingComponent").CANCEL}),b("RTWebUserActionLogger").logImpression({surface:b("RTWebLoggingSurface").GROUP_CALL_PARTICIPANT_PICKER_DIALOG,component:b("RTWebLoggingComponent").START_CALL})};d.render=function(){var a=this,c=this.props,d=c.participants,e=c.thread;c=c.viewerID;var f=this.$2();return b("React").createElement(b("MessengerDialog.react"),{onToggle:function(){a.props.onUnmount&&a.props.onUnmount()},type:"default",width:l},b("React").createElement("div",{className:"_2m1r"},b("React").createElement(j,null,b("React").createElement(b("MessengerDialogCancelButton.react"),{onClick:this.$3,dataTestID:b("VideoCallWebDriverIDs").RTC_PICKER_DIALOG_CANCEL_BUTTON}),b("React").createElement(k,{autofocus:!0},h._("Llamar a miembros del grupo")),b("React").createElement(b("MessengerDialogButton.react"),{label:h._("Llamar"),onClick:this.$4,dataTestID:b("VideoCallWebDriverIDs").RTC_PICKER_DIALOG_CALL_BUTTON,disabled:f.length===0,type:"primary",use:"default"})),b("React").createElement(b("MessengerRTCGroupCallThreadRow.react"),{displayBlockedMemberWarning:b("gkx")("678352")?this.$5(f):!1,participants:d,thread:e,viewerID:c}),b("React").createElement(b("MessengerRTCGroupCallRingParticipantsRow.react"),{names:f.map(function(a){a=a.name;return a}).sort(function(a,b){return a.localeCompare(b)})}),b("React").createElement(b("MessengerRTCGroupCallContactList.react"),{remoteUsers:this.$1,isParticipantSelected:this.state.isParticipantSelected,onClick:this.$6})))};d.$5=function(a){return a.some(function(a){return a.is_messenger_blocked||a.is_facebook_blocked})};d.$2=function(){var a=this;return this.props.participants.filter(function(b,c){return a.state.isParticipantSelected.get(b.fbid?b.fbid:c)}).toArray()};return c}(b("React").Component);c.propTypes={participants:a.instanceOf(b("immutable").Map).isRequired,thread:a.instanceOf(b("ImmutableObject")),viewerID:a.string.isRequired,trigger:a.string.isRequired,conferenceName:a.string.isRequired,hasVideo:a.bool.isRequired,handleCall:a.func,onUnmount:a.func.isRequired};e.exports=c}),null);
__d("MessengerRTCGroupCallParticipantsPickerDialogController",["DOM","MessengerRTCGroupCallParticipantsPickerDialog.react","React","ReactDOM"],(function(a,b,c,d,e,f){"use strict";a={_container:b("DOM").create("div"),render:function(a){var c=this,d=a.participants,e=a.thread,f=a.viewerID,g=a.trigger,h=a.conferenceName,i=a.hasVideo;a=a.handleCall;b("ReactDOM").render(b("React").createElement(b("MessengerRTCGroupCallParticipantsPickerDialog.react"),{participants:d,thread:e,viewerID:f,trigger:g,conferenceName:h,hasVideo:i,handleCall:a,onUnmount:function(){return c._onUnmount()}}),this._container)},_onUnmount:function(){b("ReactDOM").unmountComponentAtNode(this._container)}};e.exports=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};return c}(b("React").Component);e.exports=a}),null);
__d("SpotlightViewerClose",["cx","fbt","React","TooltipLink.react","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.position=="left"?"_5wx3":"_5wx4",c=b("React").createElement("span",null,h._("Presiona Esc para cerrar"));return b("React").createElement(b("TooltipLink.react"),{className:b("joinClasses")("_4-o9 _50-m _51an",a,this.props.isFixed?"_2chv":""),onClick:this.props.onClick,onKeyPress:this.props.onKeyPress,tooltip:c,tabIndex:"0"})};return c}(b("React").Component);c.propTypes={position:a.oneOf(["left","right"]),isFixed:a.bool,onKeyPress:a.func};c.defaultProps={position:"right",isFixed:!1,onKeyPress:b("emptyFunction")};e.exports=c}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.$3=function(){c.setState({loading:!1})};c.state={loading:!0};return c}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){a.src!==this.props.src&&this.setState({loading:!0})};d.render=function(){return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};d.$1=function(){return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};d.$2=function(){return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};return c}(b("React").Component);e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(a){var c=b("ReactDOM").findDOMNode(this);a=b("Vector").getEventPosition(a.nativeEvent);var d=b("Vector").getElementPosition(c);c=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(c).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(a)?clearTimeout(this.timer):this._onMouseEnter());a=a.x-d.x;d=a/c;b("Locale").isRTL()?a=d>1-this.PAGE_TO_PREV_PERCENTAGE:a=d<this.PAGE_TO_PREV_PERCENTAGE;a?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(a){var c=this.state.currentActiveSection==this.sections.FORWARD,d=a.target;b("Parent").bySelector(d,"._51an")||this.props.onClick&&this.props.onClick(c,a)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("RTCCallState",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NO_ONGOING_CALL:"NO_ONGOING_CALL",AUDIO_GROUP_CALL:"AUDIO_GROUP_CALL",VIDEO_GROUP_CALL:"VIDEO_GROUP_CALL"})}),null);
__d("PhotosphereMetadata",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";a=b("ImmutableRecordWithV4Types").Record;c=a({CroppedAreaImageHeightPixels:0,CroppedAreaImageWidthPixels:0,CroppedAreaLeftPixels:0,CroppedAreaTopPixels:0,FullPanoHeightPixels:0,FullPanoWidthPixels:0,InitialViewHeadingDegrees:0,InitialViewPitchDegrees:0,InitialViewRollDegrees:0,InitialViewVerticalFOVDegrees:0,PoseHeadingDegrees:0,PosePitchDegrees:0,PoseRollDegrees:0,PreProcessCropLeftPixels:0,PreProcessCropRightPixels:0,ProjectionType:"equirectangular",RendererProjectionType:"equirectangular"});e.exports={makePhotosphereMetadata:c}}),null);
__d("SphericalPhotoUtils",["PhotoRendererProjection","PhotosphereMetadata","SphericalPhotoPartialLimits"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PhotoRendererProjection").PERSPECTIVE,h=b("PhotosphereMetadata").makePhotosphereMetadata,i=b("SphericalPhotoPartialLimits").makePartialLimits,j={getMetadataFromGraphQLResult:function(a){return{CroppedAreaImageHeightPixels:a.cropped_area_image_height_pixels!=null?a.cropped_area_image_height_pixels.toString():null,CroppedAreaImageWidthPixels:a.cropped_area_image_width_pixels!=null?a.cropped_area_image_width_pixels.toString():null,CroppedAreaLeftPixels:a.cropped_area_left_pixels!=null?a.cropped_area_left_pixels.toString():null,CroppedAreaTopPixels:a.cropped_area_top_pixels!=null?a.cropped_area_top_pixels.toString():null,FullPanoHeightPixels:a.full_pano_height_pixels!=null?a.full_pano_height_pixels.toString():null,FullPanoWidthPixels:a.full_pano_width_pixels!=null?a.full_pano_width_pixels.toString():null,InitialViewHeadingDegrees:a.initial_view_heading_degrees!=null?a.initial_view_heading_degrees.toString():null,InitialViewPitchDegrees:a.initial_view_pitch_degrees!=null?a.initial_view_pitch_degrees.toString():null,InitialViewRollDegrees:a.initial_view_roll_degrees!=null?a.initial_view_roll_degrees.toString():null,InitialViewVerticalFOVDegrees:a.initial_view_vertical_fov_degrees!=null?a.initial_view_vertical_fov_degrees.toString():null,PoseHeadingDegrees:a.pose_heading_degrees!=null?a.pose_heading_degrees.toString():null,PosePitchDegrees:a.pose_pitch_degrees!=null?a.pose_pitch_degrees.toString():null,PoseRollDegrees:a.pose_roll_degrees!=null?a.pose_roll_degrees.toString():null,PreProcessCropLeftPixels:null,PreProcessCropRightPixels:null,ProjectionType:a.projection_type,RendererProjectionType:g}},calculatePartialLimits:function(a){__p&&__p();var b=a.FullPanoHeightPixels,c=a.FullPanoWidthPixels,d=a.CroppedAreaImageWidthPixels,e=a.CroppedAreaImageHeightPixels,f=a.CroppedAreaLeftPixels;a=a.CroppedAreaTopPixels;b=j.parseNumber(b);c=j.parseNumber(c);d=j.parseNumber(d);e=j.parseNumber(e);f=j.parseNumber(f);a=j.parseNumber(a);var g,h,k,l;if(d!==0&&d!==c){d=360*d/c;d<350&&(g=180*(1-2*f/c),h=d-g)}e!==0&&e!==b&&(a!==0&&(k=90*(1-2*a/b)),a+e!==b&&(l=180*(a+e-b/2)/b));f=null;c=null;d=null;a=null;k&&k<87.5&&(c=k);l&&l<87.5&&(f=l);g&&(d=g);h&&(a=h);return i({partialTopDegrees:c,partialBottomDegrees:f,partialLeftDegrees:d,partialRightDegrees:a})},parseNumber:function(a){return a?Number(a):0},getThumbnailsFromPhotoEncodings:function(a){a=a.find(function(a){return a.projection_type===g});var b=null,c=null;if(a&&a.thumbnails&&a.thumbnails.length>0){a=a.thumbnails;b=a[0]?a[0].uri:null;c=a[1]?a[1].uri:null}return{smallThumbnail:b,largeThumbnail:c}},photosphereMetadataStringToNumber:function(a){var b={};Object.keys(a).forEach(function(c){switch(c){case"ProjectionType":b.ProjectionType=a.ProjectionType;break;case"RendererProjectionType":b.RendererProjectionType=a.RendererProjectionType;break;default:b[c]=parseInt(a[c],10)}});return h(b)}};e.exports=j}),null);
__d("XMessengerDotComNUXLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logging/promotion/",{promotion_id:{type:"Int",required:!0},instance_log_data:{type:"StringToStringMap",defaultValue:{}}})}),null);