if (self.CavalryLogger) { CavalryLogger.start_js(["zNsKp"]); }

__d("ChatTypeaheadConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_TYPE:"user",THREAD_TYPE:"thread",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",PAGE_TYPE:"page",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",HEADER_TYPE:"header",INTERNAL_BOT_PAGE_TYPE:"internal_bot_page",GAME_TYPE:"game"});e.exports=a}),null);
__d("MessengerParticipantPickerWrapper.react",["cx","Link.react","React","emptyFunction","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){var c=this.props.ParticipantRow,d=this.props.selectedEntries.has(a.getUniqueID()),e=a.getTitle();return b("React").createElement(c,{key:a.getUniqueID(),entry:a,selected:d,onClick:this.props.onClickEntry,onVisible:this.props.onVisibleEntry||b("emptyFunction"),onHidden:this.props.onHiddenEntry||b("emptyFunction"),children:this.$2(d,e)})};d.$2=function(a,c){return b("React").createElement(b("Link.react"),{"aria-checked":a,"aria-label":c,className:"_2elu"+(a?" _2elv":""),href:"#",label:"",role:"checkbox",tabIndex:"0"})};d.render=function(){var a=this,c=[];this.props.entries.forEach(function(b){return c.push(a.$1(b))});var d=this.props.ParticipantList;return b("React").createElement(d,{loading:this.props.loading,formattedEntries:c,role:this.props.role,config:this.props.config})};return c}(b("React").PureComponent);a.defaultProps={role:"listbox"};e.exports=a}),null);
__d("MessengerBootloadedSecondarySearchLogger",["Bootloader","MessengerSecondarySearchFunnelConstants","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]},j=!1;c=b("MessengerSecondarySearchFunnelConstants").EVENTS;var k=c.END,l=c.IMPRESSIONS,m=c.START,n=c.QUERY_CHANGED,o=c.RESULT_SELECTED,p=c.SOURCE_ENDED,q=c.SOURCE_STARTED;d=b("MessengerSecondarySearchFunnelConstants").END_ACTIONS;var r=d.ABANDON,s=d.SINGLE_RESULT_SELECTED;f=b("MessengerSecondarySearchFunnelConstants").SOURCES;var t=f.SERVER,u=f.SHORT_PROFILES,v=f.SUGGESTED_RECIPIENTS,w=f.LOCAL_AND_SERVER,x=f.ORDERED_GCF_FRIENDLIST;function y(a){if(i.SUGGESTED_RECIPIENTS.includes(a))return v;else if(i.ORDERED_GCF_FRIENDLIST.includes(a))return x;else if(i.SHORT_PROFILES.includes(a))return u;else return t}function a(a){__p&&__p();if(!b("gkx")("678592"))return;b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"],function(c){__p&&__p();switch(a.name){case m:j=!1;i={ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]};c.startFunnel(b("MessengerSecondarySearchFunnelConstants").CLIENTS.WWW,a.surface,a.surface,null,a.loggingID);break;case k:var d=a.end_reason;a.surface===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&(d=j?s:r);c.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION,d,a.loggingID,null,a.isNewThread);break;case l:d=a.entries.map(function(a){a.data_source=[y(a.result_fbid)];return a});g=a.entries.map(function(a){return a.result_fbid});c.impressions(a.query,d,w,a.loggingID);break;case n:h=a.query;c.queryChanged(a.query,a.loggingID);break;case o:j=!0;d=y(a.id);var e=g.indexOf(a.id);c.resultSelected(a.id,e,a.type,a.query,d,a.surface,a.loggingID,a.selectionType);break;case p:e=!a.query||a.query===h;switch(a.source){case v:i.SUGGESTED_RECIPIENTS=a.ids?a.ids:[];break;case u:i.SHORT_PROFILES=a.ids?a.ids:[];e=!0;break;case x:i.ORDERED_GCF_FRIENDLIST=a.ids?a.ids:[];e=!0;break;default:break}c.sourceEnded(a.query,a.numResults,a.source,a.status,e,a.loggingID);break;case q:c.sourceStarted(a.query,a.source,a.loggingID);break}},"MessengerBootloadedSecondarySearchLogger")}e.exports={logSearchEvent:a}}),null);
__d("ChatSearchSource",["AbstractSearchSource","AsyncRequest","Bootloader","CurrentUser","MercuryParticipantTypes","MessengerBootloadedSecondarySearchLogger","MessengerSearchFunnelLoggerConstants","MessengerSecondarySearchFunnelConstants","promiseDone","requireWeak","SearchableEntry","SearchSourceCallbackManager","ShortProfiles","TokenizeUtil","debounce","emptyFunction","isValidUniqueID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;b("requireWeak")("OrderedFriendsList",function(a){g=a});a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this)||this;d.$ChatSearchSource1=new(b("SearchSourceCallbackManager"))({parseFn:b("TokenizeUtil").parse,matchFn:b("TokenizeUtil").isQueryMatch,indexFn:c.indexFn,searchType:c.searchType||""});d.$ChatSearchSource2=c.queryRequests||[];d.$ChatSearchSource3=c.searchType||"";d.$ChatSearchSource4=!1;d.$ChatSearchSource5=b("debounce")(d.$ChatSearchSource5,100,babelHelpers.assertThisInitialized(d));d.$ChatSearchSource6=c.excludeMemorializedUsers||!1;d.$ChatSearchSource7="";return d}var d=c.prototype;d.bootstrapImpl=function(a){var c=this;b("promiseDone")(b("ShortProfiles").fetchAll(),function(){c.$ChatSearchSource4=!0,c.$ChatSearchSource8(),a()})};d.searchImpl=function(a,b,c){__p&&__p();var d=this,e=null,f={},g=c&&c.onQueryFinished,h=c&&c.onQueryStarted;h&&h(a);h=this.$ChatSearchSource1.search(a,function(c){!e?(e=c,e.forEach(function(a){return f[a.getUniqueID()]=!0})):c.forEach(function(a){var b=a.getUniqueID();f[b]||(e.push(a),f[b]=!0)}),b(e,a),a.length===1&&this.$ChatSearchSource4&&(g&&g(a))}.bind(this),c);if(!h||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||a.length===0){g&&g(a);return}if(a.length===1){this.$ChatSearchSource4&&(g&&g(a));return}var i={value:a,existing_ids:e&&e.map(function(a){return a.getUniqueID()}).join(","),limit:c&&c.threadLimit,exclude_memorialized_users:this.$ChatSearchSource6,logging_id:c&&c.loggingID},j=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach(function(b){var c=Date.now();d.$ChatSearchSource5(i,b,function(b){b=d.$ChatSearchSource9(d.$ChatSearchSource10(b)).filter(function(a){return!!a});d.$ChatSearchSource11(a,b.length,c);d.$ChatSearchSource12(b,a);j--;j===0&&(d.$ChatSearchSource1.setQueryStringAsExhausted(a),g&&g(a))})},this)};d.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries()};d.$ChatSearchSource11=function(a,c,d){var e=this;if(this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG){var f=Date.now();b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,g){b.logSourceEnded(a,g.SOURCES.SERVER,c,g.QUERY_PROGRESS.FINISHED),e.$ChatSearchSource13(b.getCurrentFunnelID(),d,f,a,c,"universal")},"ChatSearchSource")}else this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SERVER,query:a,numResults:c,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST})};d.$ChatSearchSource13=function(a,c,d,e,f,g){var h=this;b("Bootloader").loadModules(["MessengerSearchDataSourceLoadedEventTypedLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(b,i){new b().setSearchFunnelID(a).setStartTimeMs(c).setEndTimeMs(d).setQueryString(e).setDataSource(i.SOURCES.SERVER).setResultsCount(f).setLoadStatus(i.QUERY_PROGRESS.FINISHED).setIsResultUsed(h.$ChatSearchSource7===e).setSearchSurface(g).log()},"ChatSearchSource")};d.$ChatSearchSource8=function(){var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c.type===b("MercuryParticipantTypes").FRIEND||c.type===b("MercuryParticipantTypes").FB4C});var c=a.map(this.$ChatSearchSource14);c.length&&(this.$ChatSearchSource3===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SHORT_PROFILES,query:"",ids:a,numResults:c.length,status:b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST}),this.$ChatSearchSource1.addLocalEntries(c))};d.$ChatSearchSource9=function(a){return a.map(this.$ChatSearchSource15,this)};d.$ChatSearchSource15=function(a,c){if(a.mercury_thread)return!g?null:g.normalizeThreadEntry(a,c);var d=a.text,e=a.uid;if(!d||!b("isValidUniqueID")(e))return null;var f=g?g.getActiveRank(e):0;g&&!g.contains(e)&&(f+=c);return new(b("SearchableEntry"))({uniqueID:e,title:d,order:f,subtitle:a.subtext,type:a.render_type||a.type,photo:a.photo,uri:a.path,auxiliaryData:{isVerified:a.is_verified,isMessengerUser:a.is_messenger_user,alias:a.alias,workForeignEntityInfo:a.work_foreign_entity_info}})};d.$ChatSearchSource10=function(a){a=a.getPayload();if(Array.isArray(a))return a;else if(a&&a.entries)return a.entries;else return[]};d.$ChatSearchSource14=function(a){var c=b("ShortProfiles").getNow(a),d=a==b("CurrentUser").getID()?b("MercuryParticipantTypes").FRIEND:c.type,e=[c.additionalName,c.alternateName].concat(c.searchTokens||[]).join(" "),f=c.name,h=null;return new(b("SearchableEntry"))({uniqueID:a,title:f,order:g?g.getActiveRank(a):0,subtitle:h,keywordString:e,type:d,photo:c.thumbSrc,uri:c.uri,auxiliaryData:{isMessengerUser:c.is_messenger_user,alias:c.alias}})};d.$ChatSearchSource5=function(a,c,d,e){this.$ChatSearchSource3===b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG&&a.value!==this.$ChatSearchSource7&&(b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger","MessengerUniversalSearchFunnelLoggerConstants"],function(c,d,e){c.logStartQuery(b("MessengerSearchFunnelLoggerConstants").NAME,a.value),d.logSourceStarted(a.value,e.SOURCES.SERVER)},"ChatSearchSource"),this.$ChatSearchSource7=a.value),new(b("AsyncRequest"))(c.uri).setData(babelHelpers["extends"]({},a,c.data)).setMethod("GET").setReadOnly(!0).setHandler(d).setErrorHandler(e||b("emptyFunction")).setAllowCrossPageTransition(!0).send()};d.$ChatSearchSource12=function(a,b){a.length&&this.$ChatSearchSource1.addQueryEntries(a,b)};d.addLocalEntries=function(a){this.$ChatSearchSource1.addLocalEntries(a)};d.refreshData=function(){b("ShortProfiles").fetchAll()};return c}(b("AbstractSearchSource"));e.exports=a}),null);
__d("MessengerDestinationPickerParticipantItem.react",["cx","Badge.react","Keys","MercuryTypeaheadConstants","OnVisible.react","React","SplitImage.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=36;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$4=function(a){d.props.onClick(d.props.entry)},d.$5=function(a){(a.keyCode===b("Keys").SPACE||a.keyCode===b("Keys").RETURN)&&(a.preventDefault(),d.$4(a))},d.onVisible=function(){d.props.onVisible(d.props.entry)},d.willUnmount=function(){d.props.onHidden(d.props.entry)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){var a=this.props.entry,c=a.getPhoto();a=a.getAuxiliaryData();var d=[];!c&&a&&typeof a==="object"&&a.participantsToRender&&Array.isArray(a.participantsToRender)&&(d=a.participantsToRender.map(function(a){return a&&typeof a==="object"&&typeof a.image_src==="string"?a.image_src:""}));return c||d.length?b("React").createElement(b("SplitImage.react"),{srcs:c?[String(c)]:d,size:h,className:"_6c12"}):b("React").createElement("div",{className:"_3-w4"})};d.$2=function(){return this.props.entry.getTitle()};d.$3=function(){return this.props.entry.getSubtitle()};d.$6=function(){var a=this.props.entry.getType();return a===b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE?b("React").createElement(b("Badge.react"),{type:"bot",size:"medium"}):null};d.componentWillUnmount=function(){this.willUnmount()};d.render=function(){var a=b("joinClasses")("_599m _1sex _5mne"+(this.props.selected?" _1sfg":"")+" _6c13",this.props.className);return b("React").createElement(b("OnVisible.react"),{onVisible:this.onVisible,onHidden:this.willUnmount},b("React").createElement("li",{tabIndex:0,key:"messengerList","aria-checked":this.props.selected,className:a,onMouseDown:this.$4,onKeyDown:this.$5,role:"checkbox"},b("React").createElement("div",{className:"_1sez",key:"messengerListItem"},b("React").createElement("div",{className:"_1se-"},b("React").createElement("div",{className:"_1se_"})),this.$1(),b("React").createElement("div",{className:"_6c14"},b("React").createElement(b("XUIText.react"),{className:"_3qpq _3qps",size:"header3"},this.$2()),b("React").createElement(b("XUIText.react"),{size:"meta1",className:"_3-wf"},this.$3())))))};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerDestinationPickerParticipantPicker.react",["cx","fbt","CenteredContainer.react","DOMContainer.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.$1=null;return b}var d=c.prototype;d.render=function(){return this.props.formattedEntries.length===0&&!this.props.loading?b("React").createElement(b("CenteredContainer.react"),{className:"_2pi1"},h._("No hay resultados")):b("React").createElement("ol",{className:"_159h"},this.props.formattedEntries,this.props.loading?this.$2():null)};d.$2=function(){var a=this.props.config&&this.props.config.shimmer;if(a)return b("React").createElement("li",{className:"_6c0s"},this.props.formattedEntries.length>0?b("React").createElement(b("DOMContainer.react"),null,a):new Array(4).fill(0).map(function(c,d){return b("React").createElement(b("DOMContainer.react"),{key:d},a)}));else return b("React").createElement("div",null)};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSearch.react",["ix","cx","fbt","ChatSearchSource","Image.react","MessengerSecondarySearchFunnelConstants","React","SearchableTextInput.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=a.call(this,c)||this;c.$1=new(b("ChatSearchSource"))({queryRequests:[{uri:"/ajax/mercury/composer_query.php"}],excludeMemorializedUsers:!0,searchType:b("MessengerSecondarySearchFunnelConstants").ENTRY_SURFACES.COMPOSER});return c}var d=c.prototype;d.componentDidMount=function(){this.$2&&this.$2.focusInput()};d.render=function(){var a=this,c=i._("Busca amigos y grupos");return b("React").createElement("div",{className:"_6a8z"},b("React").createElement(b("Image.react"),{src:g("492644")}),b("React").createElement(b("SearchableTextInput.react"),{className:"_1-tt",ref:function(b){a.$2=b},onChange:this.props.onSearchChange,onEntriesFound:this.props.onSearchEntriesFound,placeholder:c,queryString:this.props.query,searchSource:this.$1,searchSourceOptions:{onQueryFinished:this.props.onSearchFinished}}))};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react",["cx","fbt","JSResource","LeftRight.react","MessengerGroupCreationEntryPoint","React","ReactComposerSharingSpacesSelectorMessengerSearch.react","SharingSpacesStrings","XUIText.react","isKeyActivation","lazyLoadComponent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("lazyLoadComponent")(b("JSResource")("MessengerGroupCreateDialogImpl.react").__setRef("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react")),j=422,k=477;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=b("React").createElement(b("XUIText.react"),{tabIndex:0,role:"button",onKeyDown:function(c){return b("isKeyActivation")(c)?a.props.onClickCreateGroup():null},onClick:this.props.onClickCreateGroup,className:"_1-tr"},h._("Crear grupo"));return b("React").createElement("div",{className:"_1shc _6c0r"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("XUIText.react"),{size:"body3",weight:"bold",className:"_1shd"},b("SharingSpacesStrings").SHARING_SPACES_SELECTOR_DESTINATION_MESSENGER),b("React").createElement("div",null,this.props.showSearch?null:b("React").createElement(b("XUIText.react"),{tabIndex:0,role:"button",onKeyDown:function(c){return b("isKeyActivation")(c)?a.props.onClickSearch():null},onClick:this.props.onClickSearch,className:"_1-tr"},h._("Buscar")," \xb7 "),c,b("React").createElement(b("React").Suspense,{fallback:b("React").createElement("div",null)},this.props.showCreateGroupDialog?b("React").createElement(i,{entryPoint:b("MessengerGroupCreationEntryPoint").GCF_SHARE_FLOW,dialogTitle:h._("Crear grupo"),pickerScrollAreaHeight:j,selectedSectionHeight:k,isShown:!0,onClose:this.props.onCreateGroupDialogClose,doNotCreateGroup:!0}):b("React").createElement("div",null)))),this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerSection.react",["cx","ChatTypeaheadConstants","ComposerDestinationsLoggingUtils","Focus","MessengerDestinationPickerParticipantItem.react","MessengerDestinationPickerParticipantPicker.react","MessengerParticipantPickerWrapper.react","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerLoggingStore","ReactComposerSharingSpacesSelectorMessengerSearch.react","ReactComposerSharingSpacesSelectorMessengerSectionHeader.react","ReactDOM","SharingSpacesStrings","Tooltip.react","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=20;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={loadingQuery:!1,query:"",searchResults:[],isMessengerListLoading:!0,messengerRecipientEntries:[],showSearch:!1,showCreateGroupDialog:!1},d.$9=function(a){var c=d.state.query?d.state.searchResults:d.state.messengerRecipientEntries;c=c.map(function(a){return a.getUniqueID()}).indexOf(a.getUniqueID());b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerThreadToggled(d.props.composerID,b("ReactComposerLoggingStore").getSessionID(d.props.composerID),!d.props.selectedEntries.flatten().has(a.getUniqueID()),a.getUniqueID(),d.$10(a),c);b("ReactComposerAudienceActions").toggleMessengerEntry(d.props.composerID,a.getUniqueID(),d.$10(a))},d.$4=function(a){if(a&&d.props.selectedEntries.isDuplicateNewGroup(a.getUniqueID())){d.setState({showCreateGroupDialog:!1});return}b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationFinished(d.props.composerID);a&&(b("ReactComposerAudienceActions").addNewGroup(d.props.composerID,a),d.$9(a));d.setState({showCreateGroupDialog:!1})},d.$2=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerSearchOpened(d.props.composerID),d.setState(function(a){return{showSearch:!a.showSearch}})},d.$3=function(){b("ComposerDestinationsLoggingUtils").logComposerDestinationsMessengerGroupCreationOpened(d.props.composerID),d.setState(function(a){return{showCreateGroupDialog:!0}})},d.$8=function(a){a===d.state.query&&d.setState({loadingQuery:!1})},d.$6=function(a){if(a.target instanceof HTMLInputElement){a=a.target.value;d.setState({loadingQuery:!0,query:a})}},d.$7=function(a){a=a.filter(function(a){return a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE||a.getType()===b("ChatTypeaheadConstants").FRIEND_TYPE});d.setState({searchResults:a})},d.$5=function(a){d.messengerSection=a},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){return b("React").createElement("li",{"aria-disabled":this.props.isDisabled,className:"_1pek"},this.props.isDisabled?b("React").createElement(b("Tooltip.react"),{display:"block",tooltip:b("SharingSpacesStrings").MESSENGER_DISABLED_TOOLTIP},this.$1()):this.$1())};d.$1=function(){return b("React").createElement("section",{className:this.props.isDisabled?"_3560":""},b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSectionHeader.react"),{showSearch:this.state.showSearch,onClickSearch:this.$2,onClickCreateGroup:this.$3,showCreateGroupDialog:this.state.showCreateGroupDialog,onCreateGroupDialogClose:this.$4,ref:this.$5},this.state.showSearch?b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSearch.react"),{onSearchChange:this.$6,onSearchEntriesFound:this.$7,query:this.state.query,onSearchFinished:this.$8}):null),b("React").createElement(b("MessengerParticipantPickerWrapper.react"),{ParticipantRow:b("MessengerDestinationPickerParticipantItem.react"),ParticipantList:b("MessengerDestinationPickerParticipantPicker.react"),onClickEntry:this.$9,loading:this.state.isMessengerListLoading||this.state.loadingQuery,entries:this.state.query?this.state.searchResults:Array.from(this.props.selectedEntries[b("ReactComposerAudienceMessengerTypes").ALL_NEW_GROUPS]).concat(this.state.messengerRecipientEntries),selectedEntries:this.props.selectedEntries.flatten(),config:this.props.config}))};d.$10=function(a){if(a.getType()===b("ChatTypeaheadConstants").THREAD_TYPE){a=a.getAuxiliaryData();return typeof a==="object"&&a!==null&&a.new_thread===!0?b("ReactComposerAudienceMessengerTypes").NEW_GROUP:b("ReactComposerAudienceMessengerTypes").EXISTING_GROUP}return b("ReactComposerAudienceMessengerTypes").INDIVIDUAL};d.componentDidMount=function(){var a=this;this.$11();b("ComposerDestinationsLoggingUtils").logComposerDestinationsBottomSheetOpened(this.context.composerID);b("requireWeak")("OrderedFriendsList",function(b){return b.getSearchableEntries(h,!0,function(b){a.setState({messengerRecipientEntries:b,isMessengerListLoading:!1})})})};d.$11=function(){if(this.messengerSection){var a=b("ReactDOM").findDOMNode(this.messengerSection);a instanceof HTMLElement&&b("Focus").set(a)}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("ReactComposerSharingSpacesSelectorMessengerContainer.react",["FluxContainer","React","ReactComposerAudienceActions","ReactComposerAudienceMessengerTypes","ReactComposerAudienceStore","ReactComposerMediaUploadStore","ReactComposerScrapedAttachmentStore","ReactComposerSharingSpacesSelectorMessengerSection.react","ReactComposerStatusStore","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isDisabled:!1},b)||babelHelpers.assertThisInitialized(c)}c.getStores=function(){return[b("ReactComposerTaggerStore"),b("ReactComposerStatusStore"),b("ReactComposerMediaUploadStore"),b("ReactComposerScrapedAttachmentStore"),b("ReactComposerAudienceStore")]};c.calculateState=function(a,c){__p&&__p();a=b("ReactComposerTaggerStore").isDisabled(c.composerID,b("ReactComposerTaggerType").MESSENGER);var d=b("ReactComposerAudienceStore").getSelectedMessengerRecipientEntries(c.composerID);if(a&&!d.isEmpty())b("ReactComposerAudienceActions").storeSelectedMessengerEntries(c.composerID);else if(!a&&!b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID).isEmpty()){d=b("ReactComposerAudienceStore").getStoredMessengerRecipientEntries(c.composerID);d.flatten().forEach(function(a){return b("ReactComposerAudienceActions").toggleMessengerEntry(c.composerID,a,b("ReactComposerAudienceMessengerTypes").INDIVIDUAL)});b("ReactComposerAudienceActions").clearStoredSelectedMessengerEntries(c.composerID)}return{isDisabled:a}};var d=c.prototype;d.render=function(){return b("React").createElement(b("ReactComposerSharingSpacesSelectorMessengerSection.react"),babelHelpers["extends"]({},this.props,{isDisabled:this.state.isDisabled}))};return c}(b("React").PureComponent);e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);