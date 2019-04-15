if (self.CavalryLogger) { CavalryLogger.start_js(["3rNG2"]); }

__d("ChatEmployeeAwayWarning",["MercuryIDs","MercuryViewer","MessengerParticipants.bs"],(function(a,b,c,d,e,f){__p&&__p();a={updateEmployeeAwayWarning:function(a,c,d){__p&&__p();b("MessengerParticipants.bs").get(b("MercuryViewer").getID(),function(e){e=e.employee;e&&b("MessengerParticipants.bs").getMulti(a.participants,function(e){var f=!1,g=b("MercuryIDs").getUserIDFromThreadID(a.thread_id);if(!g)return;g="fbid:"+g;for(var h in e)g==e[h].id&&e[h].is_employee_away&&(f=!0);f?c():d()})})}};e.exports=a}),null);
__d("WorkChatUtils",["CurrentUser","MessengerState.re","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={isComposingNewGroupChat:function(a){if(!b("CurrentUser").isWorkUser()||!b("gkx")("836564")||!a)return!1;var c=a.thread;a=a.typeahead;if(!c)return!0;var d=b("MessengerState.re").isEmptyLocalThread(b("CurrentUser").getID(),c.thread_id);a=a?a.getSelectedParticipantIDs().length:0;return d&&(c.participants.length>=3||a>=2)},shouldGiveGroupNameOption:function(a){if(!b("CurrentUser").isWorkUser()||!b("gkx")("836564")||!a)return!1;a=a.thread;if(!a)return!1;var c=b("MessengerState.re").isEmptyLocalThread(b("CurrentUser").getID(),a.thread_id);return!c&&a.participants.length>=3}};e.exports=a}),null);
__d("FantaReducersTabSheets",["Bootloader","ChatEmployeeAwayWarning","ChatPrivacyActionController","CurrentUser","FantaGetMessageActions","FantaMessageActions","FantaTabActions","FantaTabSheetActions","ImmutableObject","MercuryConfig","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercurySheetPolicy","MercuryThreadInfo","MercuryViewer","MessageThreadAssociatedObjectUtils","MessengerParticipants.bs","MessengerState.bs","RTCCallState","WorkChatUtils","emptyFunction","getPageIDFromThreadID","ifRequired","setImmediate","gkx","qex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaTabActions").Types,h=b("FantaGetMessageActions").Types,i=b("FantaMessageActions").Types,j=b("FantaTabSheetActions").Types;function a(a,b){switch(b.type){case g.CLOSE_TAB:case g.CLOSE_AND_TAB_NEXT:b=b.tabID;var c=a.mercury.tabContents.get(b);if(!c)return a;c=c.merge({typeahead:null});a=a.setIn(["mercury","tabContents",b],c);return k(a,b)}return a}function k(a,b,c){var d=a.mercury.tabContents.get(b);if(!d)return a;if(c&&d.openSheet!==c)return a;d=d.merge({openSheet:null});a=a.setIn(["mercury","tabContents",b],d);d.thread&&(a=O(a,b,d.thread));return a}function c(a,b){__p&&__p();switch(b.type){case g.CLOSE_ALL_TABS:for(var b=a.mercury.tabContents.values(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e.id;e=e.merge({typeahead:null});a=a.setIn(["mercury","tabContents",f],e);a=k(a,f)}}return a}function d(a,b){switch(b.type){case h.ON_GET_THREAD_RESPONSE:case h.ON_GET_THREAD_PREVIEW_RESPONSE:var c=b.thread;b=b.tabID||c.thread_id;a=l(a,c,b)}return a}function l(a,c,d){__p&&__p();var e=b("MercuryViewer").getID(),f=c.participants.filter(function(a){return a!==e});f.length<1&&!b("MessengerState.bs").isNewEmptyLocalThread(b("CurrentUser").getID(),d)&&!b("MessageThreadAssociatedObjectUtils").shouldRender(c.associated_object)?a=q(a,d,b("MercurySheetPolicy").sheets.ChatNoRecipientsTabSheet):a=k(a,d,b("MercurySheetPolicy").sheets.ChatNoRecipientsTabSheet);if(c.participants.length!==0){f=a.mercury.tabContents.get(d);f=f&&f.isNewMessageTab;f||(a=k(a,d,b("MercurySheetPolicy").sheets.FantaAddFriendsSheet));a=O(a,d,c)}return a}function f(a,c){switch(c.type){case h.THREADS_UPDATED:c.threads.forEach(function(c){a=l(a,new(b("ImmutableObject"))(c),c.thread_id)})}return a}function m(a,b){switch(b.type){case g.OPEN_TAB:case g.REPLACE_TAB:case i.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:case i.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:var c=b.tabID,d=b.newTabID,e=a.mercury.tabContents.get(c).thread;e&&(a=O(a,c,e));b.type===i.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB?a=X(a,d,e):b.type===i.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB&&(a=X(a,c,e))}return a}function n(a,c,d){if(!b("gkx")("697231")&&b("MercuryThreadInfo").isMuted(d))return q(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMutedTabSheet);else return k(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMutedTabSheet)}function o(a,c,d){var e=b("CurrentUser").getID(),f=a;b("MessengerState.bs").compute(e,function(g){g=g.blocked_ids;b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(e,g,d)&&b("qex")._("883660")===!1?f=q(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMessageBlockedSheet):f=k(a,c,b("MercurySheetPolicy").sheets.ChatThreadIsMessageBlockedSheet)});return f}function p(a,c,d){if(!b("gkx")("850972"))return a;var e=b("getPageIDFromThreadID")(d.thread_id);if(e===null)return a;return d.is_from_weak_entry_point?q(a,c,b("MercurySheetPolicy").sheets.ChatIntegrityLandingScreenSheet):a}function q(a,c,d){__p&&__p();var e=a.mercury.tabContents.get(c),f=a.tabGroup.tabs.get(c);if(!f||!e)return a;f=e;f=f.openSheet;if(f&&!b("MercurySheetPolicy").canReplaceOpenSheet(f,d))return a;e=e.merge({openSheet:d});a=a.setIn(["mercury","tabContents",c],e);return a}function r(a,b){return a}function s(a,c){switch(c.type){case j.OPEN_USER_FOCUS_SHEET:c=c.tabID;return q(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusSheet)}return a}function t(a,c){switch(c.type){case j.CLOSE_USER_FOCUS_AND_BYPASS_SHEET:c=c.tabID;a=k(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusSheet);a=k(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusBypassSheet)}return a}function u(a,c){switch(c.type){case j.OPEN_BYPASS_FOCUS_SHEET:c=c.tabID;return q(a,c,b("MercurySheetPolicy").sheets.ChatUserFocusBypassSheet)}return a}function v(a,c,d){b("ChatEmployeeAwayWarning").updateEmployeeAwayWarning(d,function(){return b("setImmediate")(function(){b("FantaTabSheetActions").openEmployeeAwaySheet(c)})},b("emptyFunction"));return a}function w(a,c){switch(c.type){case j.OPEN_EMPLOYEE_AWAY_SHEET:c=c.tabID;a=q(a,c,b("MercurySheetPolicy").sheets.ChatEmployeeAwaySheet)}return a}function x(a,c){switch(c.type){case j.OPEN_NAME_CONVERSATION_TAB_SHEET:return q(a,c.tabID,b("MercurySheetPolicy").sheets.ChatNameConversationTabSheet)}return a}function y(a,c){switch(c.type){case j.CLOSE_NAME_CONVERSATION_TAB_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatNameConversationTabSheet)}return a}function z(a,b){return a}function A(a,c){switch(c.type){case j.OPEN_READ_ONLY_PERMANENT_SHEET:return q(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyPermanentTabSheet)}return a}function B(a,c){switch(c.type){case j.CLOSE_READ_ONLY_PERMANENT_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyPermanentTabSheet)}return a}function C(a,c){switch(c.type){case j.OPEN_READ_ONLY_SHEET:return q(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyTabSheet)}return a}function D(a,c){switch(c.type){case j.CLOSE_READ_ONLY_SHEET:return k(a,c.tabID,b("MercurySheetPolicy").sheets.ChatReadOnlyTabSheet)}return a}function E(a,b){return a}function F(a,b){return a}function G(a,c){switch(c.type){case j.CLOSE_ADD_FRIENDS_SHEET:c=c.tabID;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({typeahead:null});a=a.setIn(["mercury","tabContents",c],d);return k(a,c,b("MercurySheetPolicy").sheets.FantaAddFriendsSheet)}return a}function H(a,c){switch(c.type){case j.CLOSE_ADD_MORE_FRIENDS_SHEET:c=c.tabID;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({typeahead:null});a=a.setIn(["mercury","tabContents",c],d);return k(a,c,b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)}return a}function I(a,c){switch(c.type){case i.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:c=c.fromTabID;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({typeahead:null});a=a.setIn(["mercury","tabContents",c],d);return k(a,c,b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)}return a}function J(a,c){switch(c.type){case i.ADD_GROUP_PARTICIPANTS:c=c.tabID||c.threadID;return k(a,c,b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)}return a}function K(a,c){switch(c.type){case i.RECEIVED_NEW_MESSAGE:c=c.tabID;var d=a.mercury.tabContents.get(c);d&&!d.isScrolledToBottom?a=q(a,c,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet):a=k(a,c,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet)}return a}function L(a,c){switch(c.type){case g.SCROLL_BOTTOM_CHANGED:var d=c.tabID;c=c.isScrolledToBottom;c&&(a=k(a,d,b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet));c=a.mercury.tabContents.get(d);c&&c.thread&&(a=Q(a,d,c.thread))}return a}function M(a,c){__p&&__p();switch(c.type){case h.ON_PRIVACY_STATE_CHANGE:var d=c.threadID;c=c.privacyState;switch(c){case b("ChatPrivacyActionController").OFFLINE:a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet);a=q(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);break;case b("ChatPrivacyActionController").NORMAL:a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet);a=k(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);break;case b("ChatPrivacyActionController").BLOCKED:a=k(a,d,b("MercurySheetPolicy").sheets.ChatOfflineTabSheet);c=b("MercuryIDs").getUserIDFromThreadID(d);if(c){c=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(c));c&&c.is_friend?a=q(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet):a=k(a,d,b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet)}break}}return a}function N(a,b){switch(b.type){case j.ON_IS_PAGE_TAB:var c=b.tabID;b=b.pageIndicator;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({pageIndicator:b});a=a.setIn(["mercury","tabContents",c],d)}return a}function O(a,b,c){__p&&__p();a=o(a,b,c);a=n(a,b,c);a=v(a,b,c);a=R(a,b,c);a=Q(a,b,c);a=P(a,b,c);a=V(a,b,c);a=W(a,b,c);a=U(a,b,c);a=p(a,b,c);return a}function P(a,c,d){var e=d.rtc_call_data;d=d.thread_fbid;e=e&&e.call_state!==b("RTCCallState").NO_ONGOING_CALL&&d;e?a=q(a,c,b("MercurySheetPolicy").sheets.ChatJoinCallSheet):a=k(a,c,b("MercurySheetPolicy").sheets.ChatJoinCallSheet);return a}function Q(a,c,d){d=d.has_montage&&b("MercuryConfig").MontageThreadViewer&&!b("gkx")("872091");var e=a.mercury.tabContents.get(c),f=a.tabGroup.tabs.get(c);if(!f||!e)return a;d?e=e.merge({isMontageOpen:!0}):e=e.merge({isMontageOpen:!1});return a.setIn(["mercury","tabContents",c],e)}function R(a,c,d){__p&&__p();b("ifRequired")("EventReminderActions",function(e){__p&&__p();var f;e.clearAllReminders(c);if(d.associated_object&&d.associated_object.room_type==="EVENT")f=d.associated_object,e.updateEventReminder(c,f,null,d.participants_event_status);else if(d.lightweight_event){f=d.lightweight_event;e.updateEventReminder(c,f);var g=d.lightweight_events;if(g&&Object.keys(g).length>0)for(var h in g)e.updateEventReminder(c,g[h],h)}f?a=q(a,c,b("MercurySheetPolicy").sheets.ChatEventReminderTabSheet):b("ifRequired")("EventReminderStateStore",function(d){d=d.getEvent(c);d&&d.exists&&e.deleteEventReminder(c);a=k(a,c,b("MercurySheetPolicy").sheets.ChatEventReminderTabSheet)},function(){return S(c)})},function(){return S(c)});return a}function S(a){b("Bootloader").loadModules(["EventReminderActions","EventReminderStateStore"],function(c,d){b("setImmediate")(function(){b("FantaTabSheetActions").onBootloadEventReminder(a)})},"FantaReducersTabSheets")}function T(a,b){switch(b.type){case j.ON_BOOTLOAD_EVENT_REMINDER:b=b.tabID;var c=a.mercury.tabContents.get(b);if(!c)return a;c=c.thread;c&&(a=R(a,b,c))}return a}function U(a,c,d){d=(d=d.linked_mentorship_programs)==null?void 0:d.nodes;if(d!=null&&d.length>0)return q(a,c,b("MercurySheetPolicy").sheets.ChatMentorshipProgramSheet);else return k(a,c,b("MercurySheetPolicy").sheets.ChatMentorshipProgramSheet)}function V(a,c,d){d=d.associated_object;b("MessageThreadAssociatedObjectUtils").shouldRender(d)&&(a=q(a,c,b("MercurySheetPolicy").sheets.ChatRoomAssociatedObjectSheet));return a}function W(a,c,d){if(d.work_associated_group!=null)return q(a,c,b("MercurySheetPolicy").sheets.ChatGroupsSyncTabSheet);else return k(a,c,b("MercurySheetPolicy").sheets.ChatGroupsSyncTabSheet)}function X(a,c,d){d=a.mercury.tabContents.get(c);return b("WorkChatUtils").isComposingNewGroupChat(d)?q(a,c,b("MercurySheetPolicy").sheets.ChatGroupNameComposerTabSheet):a}e.exports={closeAddFriends:G,closeAddMoreFriends:H,closeAddMoreFriendsFromID:I,closeAllTabs:c,closeFocusUserSheet:t,closeNameConversationSheet:y,closePermanentReadOnlySheet:B,closeReadOnlySheet:D,closeTab:a,onBootloadEventReminder:T,onGetThreadResponse:d,onIsPageTab:N,onPrivacyStateChange:M,openAddFriendsSheet:r,openBypassFocusSheet:u,openEmployeeAwaySheet:w,openFocusUserSheet:s,openNameConversationSheet:x,openNewMessagesSheet:z,openPermanentReadOnlySheet:A,openReadOnlySheet:C,openTab:m,openUploadWarningTabSheet:E,openUserFocusSheet:F,receivedNewMessage:K,scrollBottomChanged:L,sendGroupMessage:J,threadsUpdated:f}}),null);