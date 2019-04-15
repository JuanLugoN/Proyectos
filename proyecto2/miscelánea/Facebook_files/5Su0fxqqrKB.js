if (self.CavalryLogger) { CavalryLogger.start_js(["vOhC7"]); }

__d("ShareMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ShareMenuLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ShareMenuLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ShareMenuLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setComposerSessionID=function(a){this.$1.composer_session_id=a;return this};c.setCountry=function(a){this.$1.country=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setErrorMsg=function(a){this.$1.error_msg=a;return this};c.setExtraClientData=function(a){this.$1.extra_client_data=a;return this};c.setFbAudience=function(a){this.$1.fb_audience=a;return this};c.setFbEntryPoint=function(a){this.$1.fb_entry_point=a;return this};c.setFbShareType=function(a){this.$1.fb_share_type=a;return this};c.setFbSignificance=function(a){this.$1.fb_significance=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setOrcaEntryPoint=function(a){this.$1.orca_entry_point=a;return this};c.setOrcaSignificance=function(a){this.$1.orca_significance=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setShareButtonType=function(a){this.$1.share_button_type=a;return this};c.setShareMenuOptionsAvailable=function(a){this.$1.share_menu_options_available=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setShareSourceFeedType=function(a){this.$1.share_source_feed_type=a;return this};c.setShareableID=function(a){this.$1.shareable_id=a;return this};c.setStoryID=function(a){this.$1.story_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,clienttime:!0,composer_session_id:!0,country:!0,deviceid:!0,error_msg:!0,extra_client_data:!0,fb_audience:!0,fb_entry_point:!0,fb_share_type:!0,fb_significance:!0,name:!0,orca_entry_point:!0,orca_significance:!0,sessionid:!0,share_button_type:!0,share_menu_options_available:!0,share_source_feed_type:!0,shareable_id:!0,story_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ComposerShareNowEntryPoints",[],(function(a,b,c,d,e,f){"use strict";e.exports={ADD_TO_STORY:"add_to_story",ADD_TO_STORY_NOW:"add_to_story_now",INVITE_FRIENDS_TO_DONATE:"invite_friends_to_donate",SEND_IN_MESSAGE:"send_in_message",SHARE_NOW:"share_now",SHARE_TO_FRIEND_TIMELINE:"share_to_friend_timeline",SHARE_TO_GROUP:"share_to_group",SHARE_TO_PAGE:"share_to_page",WRITE_POST:"write_post"}}),null);
__d("ShareAudience",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.freeze({EVERYONE:"everyone",FRIENDS:"friends",FOF:"fof",SELF:"self",CUSTOM:"custom",PAGE:"page",GROUP:"group",MESSENGER:"messenger",FRIEND_TIMELINE:"friend_timeline",UNKNOWN:"unknown",fromPrivacyString:function(a){switch(a){case null:case void 0:case g.UNKNOWN:return g.UNKNOWN;case"286958161406148":return g.SELF;case"300645083384735":return g.EVERYONE;case"368493386561757":case"275425949243301":return g.FOF;case"123780391104836":case"291667064279714":return g.FRIENDS;default:return g.CUSTOM}}});e.exports=g}),null);
__d("ShareMenuEventShareType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SHARE_FLOW_STARTED:"share_flow_started",SHARE_OPTION_SELECTED:"share_option_selected",SHARE_PUBLISH_STARTED:"share_publish_started",SHARE_CREATED:"share_created",SHARE_ABANDONED:"share_abandoned",SHARE_FAILURE:"share_failure"})}),null);
__d("ShareSignificance",[],(function(a,b,c,d,e,f){"use strict";var g=Object.freeze({SIGNIFICANT:"significant",NOT_SIGNIFICANT:"not_significant",NO_TEXT:"no_text",calculate:function(a){if(!a)return g.NO_TEXT;var b=new Set();(a||"").toLowerCase().split(" ").forEach(function(a){return b.add(a)});return b.size>5?g.SIGNIFICANT:g.NOT_SIGNIFICANT}});e.exports=g}),null);
__d("ShareMetricsLoggingController",["ComposerShareNowEntryPoints","ReactComposerLoggingName","ShareAudience","ShareMenuEventShareType","ShareMenuTypedLogger","ShareSignificance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={logShareNowResponsePayload:function(a){if(!a)return;var c="unknown";a.audience==="own"?c=a.privacy:a==="friend"?c="friend_timeline":c=a.audience;a=a.add_to_story?b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW:b("ComposerShareNowEntryPoints").SHARE_NOW;this._logImpl(b("ShareMenuEventShareType").SHARE_CREATED,a,c,b("ShareSignificance").NO_TEXT)},logShareNowFailure:function(a){if(!a)return;a=a.responseURL&&a.responseURL.includes("add_to_story")?b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW:b("ComposerShareNowEntryPoints").SHARE_NOW;this._logImpl(b("ShareMenuEventShareType").SHARE_FAILURE,a,null,b("ShareSignificance").NO_TEXT)},logReactComposerEvent:function(a,c,d,e,f){__p&&__p();var g=b("ShareAudience").UNKNOWN;switch(c){case"self":g=b("ShareAudience").fromPrivacyString(f);break;case"friend":g=b("ShareAudience").FRIEND_TIMELINE;break;case"message":g=b("ShareAudience").MESSENGER;break;case"group":g=b("ShareAudience").GROUP;break;case"page":g=b("ShareAudience").PAGE;break}var h;switch(e){case b("ReactComposerLoggingName").SHARE_NOW_MENU_SHARE_TO_PAGE:h=b("ComposerShareNowEntryPoints").SHARE_TO_PAGE;break;case b("ReactComposerLoggingName").SHARE_NOW_MENU_POST_TO_GROUP:h=b("ComposerShareNowEntryPoints").SHARE_TO_GROUP;break;case b("ReactComposerLoggingName").SHARE_NOW_MENU_SEND_MESSAGE:h=b("ComposerShareNowEntryPoints").SEND_IN_MESSAGE;break;case b("ReactComposerLoggingName").SHARE_NOW_MENU_SHARE_FRIEND_TIMELINE:h=b("ComposerShareNowEntryPoints").SHARE_TO_FRIEND_TIMELINE;break;case b("ReactComposerLoggingName").SHARE_NOW_MENU_WRITE_POST:h=b("ComposerShareNowEntryPoints").WRITE_POST;break;case b("ReactComposerLoggingName").SHARE_NOW_MENU_ADD_TO_STORY:h=b("ComposerShareNowEntryPoints").ADD_TO_STORY;break;default:h="unknown";break}c=b("ShareSignificance").calculate(d);this._logImpl(a,h,g,c)},log:function(a,b,c,d){this._logImpl(a,b,c,d)},_logImpl:function(a,c,d,e){a=new(b("ShareMenuTypedLogger"))().setName("feed_share_action").setFbShareType(a).setFbEntryPoint(c);d&&a.setFbAudience(d);e&&a.setFbSignificance(e);a.log()}};e.exports=a}),null);
__d("ReactShareDialogLoggingStore",["ComposerShareNowEntryPoints","FunnelLogger","MessengerBootloadedSecondarySearchLogger","MessengerSecondarySearchFunnelConstants","ReactComposerActionTypes","ReactComposerAudienceActionTypes","ReactComposerLoggingName","ReactComposerShareNowActionTypes","ReactComposerStatusActionType","ReactComposerStoreBase","ReactComposerTaggerActionType","ReactComposerTaggerType","ReactShareDialogComposerActionType","ReactShareDialogComposerStore","ReactComposerStatusStore","ShareAudience","ShareMenuEventShareType","ShareMetricsLoggingController"],(function(a,b,c,d,e,f){__p&&__p();var g="WWW_FEED_SHARE_DIALOG_FUNNEL";a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;c=a.call(this,function(){return{audience:b("ShareAudience").UNKNOWN,triggeredFrom:b("ReactComposerLoggingName").OTHERS}},function(a){d.__onDispatch(a)})||this;d=babelHelpers.assertThisInitialized(c);c.$ReactShareDialogLoggingStore2=0;c.$ReactShareDialogLoggingStore3=!1;return c}var d=c.prototype;d.__onDispatch=function(a){__p&&__p();switch(a.type){case b("ReactComposerShareNowActionTypes").ADD_TO_STORY_NOW:this.$ReactShareDialogLoggingStore4(a);break;case b("ReactComposerShareNowActionTypes").ADD_TO_STORY:this.$ReactShareDialogLoggingStore5(a);break;case b("ReactComposerShareNowActionTypes").CANCEL_SHARE:this.$ReactShareDialogLoggingStore6(a);break;case b("ReactComposerShareNowActionTypes").SHOW_SHARENOW_MENU:this.$ReactShareDialogLoggingStore7(a);break;case b("ReactComposerShareNowActionTypes").SHARE_NOW:this.$ReactShareDialogLoggingStore8(a);break;case b("ReactComposerShareNowActionTypes").OPEN_FRIEND_TIMELINE_DIALOG:this.$ReactShareDialogLoggingStore9(a);break;case b("ReactComposerShareNowActionTypes").OPEN_INVITE_FRIENDS_TO_DONATE:this.$ReactShareDialogLoggingStore10(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_TO_PAGE:this.$ReactShareDialogLoggingStore11(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_TO_GROUP:this.$ReactShareDialogLoggingStore12(a);break;case b("ReactComposerShareNowActionTypes").OPEN_MESSAGE_DIALOG:this.$ReactShareDialogLoggingStore13(a);break;case b("ReactComposerShareNowActionTypes").OPEN_SHARE_DIALOG:this.$ReactShareDialogLoggingStore14(a);break;case b("ReactComposerTaggerActionType").SET_SELECTED_TAGGER:this.$ReactShareDialogLoggingStore15(a);break;case b("ReactComposerStatusActionType").SET_EDITOR_STATE:this.$ReactShareDialogLoggingStore16(a);break;case b("ReactComposerTaggerActionType").SET_TAGGER_DATA:this.$ReactShareDialogLoggingStore17(a);break;case b("ReactComposerActionTypes").INIT_CONFIG:this.$ReactShareDialogLoggingStore18(a);break;case b("ReactComposerActionTypes").POST_INTENDED:this.$ReactShareDialogLoggingStore19(a);break;case b("ReactComposerActionTypes").POST_SUCCEEDED:this.$ReactShareDialogLoggingStore20(a);break;case b("ReactComposerActionTypes").POST_ERROR:this.$ReactShareDialogLoggingStore21(a);break;case b("ReactComposerShareNowActionTypes").SHARE_PUBLISH_STARTED:this.$ReactShareDialogLoggingStore22(a);break;case b("ReactComposerAudienceActionTypes").SET_AUDIENCE:this.$ReactShareDialogLoggingStore23(a);break;case b("ReactShareDialogComposerActionType").SET_SHARE_DIALOG_TARGET:this.$ReactShareDialogLoggingStore24(a);break;default:}};d.$ReactShareDialogLoggingStore25=function(a){return this.$ReactShareDialogLoggingStore1===a.composerID};d.$ReactShareDialogLoggingStore9=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_FRIEND_TIMELINE),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_FRIEND_TIMELINE)};d.$ReactShareDialogLoggingStore10=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"share_invite_friends_to_donate"),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").INVITE_FRIENDS_TO_DONATE)};d.$ReactShareDialogLoggingStore11=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_PAGE),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_PAGE)};d.$ReactShareDialogLoggingStore12=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_TO_GROUP),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_TO_GROUP)};d.$ReactShareDialogLoggingStore7=function(a){b("FunnelLogger").startFunnel(g),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_FLOW_STARTED)};d.$ReactShareDialogLoggingStore8=function(a){b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").SHARE_NOW),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SHARE_NOW),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ComposerShareNowEntryPoints").SHARE_NOW),delete this.$ReactShareDialogLoggingStore1};d.$ReactShareDialogLoggingStore4=function(a){b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY_NOW),delete this.$ReactShareDialogLoggingStore1};d.$ReactShareDialogLoggingStore5=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,b("ComposerShareNowEntryPoints").ADD_TO_STORY),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").ADD_TO_STORY)};d.$ReactShareDialogLoggingStore13=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"start_send_message"),b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.START,surface:b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST}),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").SEND_IN_MESSAGE)};d.$ReactShareDialogLoggingStore14=function(a){this.$ReactShareDialogLoggingStore3=!0,b("FunnelLogger").appendAction(g,"start_share"),b("ShareMetricsLoggingController").log(b("ShareMenuEventShareType").SHARE_OPTION_SELECTED,b("ComposerShareNowEntryPoints").WRITE_POST)};d.$ReactShareDialogLoggingStore18=function(a){this.$ReactShareDialogLoggingStore3&&(this.$ReactShareDialogLoggingStore3=!1,b("FunnelLogger").appendAction(g,"load_composer"),this.$ReactShareDialogLoggingStore1=a.composerID,this.getComposerData(a.composerID).triggeredFrom=a.triggeredFrom)};d.$ReactShareDialogLoggingStore20=function(a){this.$ReactShareDialogLoggingStore25(a)&&(b("FunnelLogger").appendAction(g,"success"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_CREATED,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore21=function(a){this.$ReactShareDialogLoggingStore25(a)&&(b("FunnelLogger").appendAction(g,"failure"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_FAILURE,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore19=function(a){this.$ReactShareDialogLoggingStore25(a)&&b("FunnelLogger").appendAction(g,"start_post")};d.$ReactShareDialogLoggingStore16=function(a){this.$ReactShareDialogLoggingStore25(a)&&(a.editorState.getLastChangeType()==="insert-characters"&&b("FunnelLogger").appendActionIfNew(g,"edit_text"))};d.$ReactShareDialogLoggingStore15=function(a){if(this.$ReactShareDialogLoggingStore25(a))switch(a.taggerID){case b("ReactComposerTaggerType").PEOPLE:b("FunnelLogger").appendAction(g,"peopletag_click");break;case b("ReactComposerTaggerType").LOCATION:b("FunnelLogger").appendAction(g,"locationtag_click");break;case b("ReactComposerTaggerType").ACTIVITY:b("FunnelLogger").appendAction(g,"activitytag_click");break;default:}};d.$ReactShareDialogLoggingStore17=function(a){if(this.$ReactShareDialogLoggingStore25(a))switch(a.taggerID){case b("ReactComposerTaggerType").PEOPLE:this.$ReactShareDialogLoggingStore26(a);break;case b("ReactComposerTaggerType").LOCATION:this.$ReactShareDialogLoggingStore27(a);break;case b("ReactComposerTaggerType").ACTIVITY:this.$ReactShareDialogLoggingStore28(a);break;default:}};d.$ReactShareDialogLoggingStore26=function(a){a.taggerData.length>this.$ReactShareDialogLoggingStore2?b("FunnelLogger").appendActionIfNew(g,"peopletag_add"):b("FunnelLogger").appendActionIfNew(g,"peopletag_remove"),this.$ReactShareDialogLoggingStore2=a.taggerData.length};d.$ReactShareDialogLoggingStore27=function(a){a.taggerData.place?b("FunnelLogger").appendAction(g,"locationtag_add"):b("FunnelLogger").appendAction(g,"locationtag_remove")};d.$ReactShareDialogLoggingStore28=function(a){!a.taggerData.action?b("FunnelLogger").appendAction(g,"activitytag_clear"):!a.taggerData.object?b("FunnelLogger").appendAction(g,"activitytag_select"):b("FunnelLogger").appendAction(g,"activitytag_addobject")};d.$ReactShareDialogLoggingStore6=function(a){this.$ReactShareDialogLoggingStore25(a)&&(b("FunnelLogger").appendAction(g,"cancel_post"),b("FunnelLogger").endFunnel(g),b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_ABANDONED,b("ReactShareDialogComposerStore").getTarget(a.composerID),b("ReactComposerStatusStore").getMessageText(a.composerID),this.getComposerData(a.composerID).triggeredFrom,this.getComposerData(a.composerID).audience),delete this.$ReactShareDialogLoggingStore1)};d.$ReactShareDialogLoggingStore23=function(a){(!this.$ReactShareDialogLoggingStore1||this.$ReactShareDialogLoggingStore1===a.composerID)&&(this.getComposerData(a.composerID).audience=a.audience||a.legacyAudience),this.$ReactShareDialogLoggingStore25(a)&&b("FunnelLogger").appendActionWithTag(g,"set_audience",a.audience||a.legacyAudience)};d.$ReactShareDialogLoggingStore24=function(a){this.$ReactShareDialogLoggingStore25(a)&&b("FunnelLogger").appendAction(g,"set_dialog_target")};d.$ReactShareDialogLoggingStore22=function(a){if(this.$ReactShareDialogLoggingStore25(a)){a=a.composerID;b("ShareMetricsLoggingController").logReactComposerEvent(b("ShareMenuEventShareType").SHARE_PUBLISH_STARTED,b("ReactShareDialogComposerStore").getTarget(a),b("ReactComposerStatusStore").getMessageText(a),this.getComposerData(a).triggeredFrom,this.getComposerData(a).audience)}};return c}(b("ReactComposerStoreBase"));e.exports=new a()}),null);
__d("ShareNowController",["csx","Dialog","DOM","Event","ReactComposerShareNowActions","ShareConfirmationController","ShareMetricsLoggingController","ShareNowConstants","ReactShareDialogLoggingStore"],(function(a,b,c,d,e,f,g){__p&&__p();b("ReactShareDialogLoggingStore");var h;a={initMenu:function(a){__p&&__p();var c=this,d=a.getTriggerElem();b("Event").listen(d,"success",function(a){try{a=a.data.response.payload;a.share_now_succeeded&&(c.showSuccess(a.message),b("ShareMetricsLoggingController").logShareNowResponsePayload(a),b("ShareConfirmationController").tryDisplayShareInFeed(a,d))}catch(a){}});b("Event").listen(d,"error",function(a){try{var d=a.data.response.payload;b("ShareMetricsLoggingController").logShareNowFailure(d);c.showError(a.data.response.errorDescription)}catch(a){c.showError()}});a.getPopover().subscribe("show",this._logMenuShown)},showSuccess:function(a){this.showDialog(a||b("ShareNowConstants").success)},showError:function(a){this.showDialog(a||b("ShareNowConstants").error)},showDialog:function(a){h&&h.destroy(),h=new(b("Dialog"))().setBody(a).setAutohide(2500).setModal(!0).show()},_logMenuShown:function(){b("ReactComposerShareNowActions").showShareNowMenu()},attachMenuItemListeners:function(a){__p&&__p();var c=b("DOM").scry(a.getRoot(),"._2al7")[0],d=b("DOM").scry(a.getRoot(),"._2al8")[0],e=b("DOM").scry(a.getRoot(),"._7ii_")[0],f=b("DOM").scry(a.getRoot(),"._7u72")[0],g=b("DOM").scry(a.getRoot(),"._2al9")[0],h=b("DOM").scry(a.getRoot(),"._1n80")[0],i=b("DOM").scry(a.getRoot(),"._3gc-")[0],j=b("DOM").scry(a.getRoot(),"._3gc_")[0];a=b("DOM").scry(a.getRoot(),"._3gcz")[0];c&&c.addEventListener("click",b("ReactComposerShareNowActions").clickShareNow);d&&d.addEventListener("click",b("ReactComposerShareNowActions").clickWritePost);e&&e.addEventListener("click",b("ReactComposerShareNowActions").clickAddToStoryNow);f&&f.addEventListener("click",b("ReactComposerShareNowActions").clickAddToStory);g&&g.addEventListener("click",b("ReactComposerShareNowActions").clickSendMessage);h&&h.addEventListener("click",b("ReactComposerShareNowActions").clickShareFriendTimeline);i&&i.addEventListener("click",b("ReactComposerShareNowActions").clickShareToPage);j&&j.addEventListener("click",b("ReactComposerShareNowActions").clickShareToGroup);a&&a.addEventListener("click",b("ReactComposerShareNowActions").clickInviteFriendsToDonate)}};e.exports=a}),null);