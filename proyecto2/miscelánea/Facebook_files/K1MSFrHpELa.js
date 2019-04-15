if (self.CavalryLogger) { CavalryLogger.start_js(["ssX49"]); }

__d("SubscribeStatuses",[],(function(a,b,c,d,e,f){e.exports={CANNOT_SUBSCRIBE:"CANNOT_SUBSCRIBE",IS_SUBSCRIBED:"IS_SUBSCRIBED",CAN_SUBSCRIBE:"CAN_SUBSCRIBE"}}),null);
__d("UFISearchInput.react",["ix","cx","fbt","AbstractButton.react","AbstractTextInput.react","FlexLayout.react","Image.react","React","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.focusInput()};d.render=function(){return b("React").createElement(b("FlexLayout.react"),{className:"_2pgc",align:"center",direction:"horizontal"},b("React").createElement(b("Image.react"),{className:"_2pgd",src:g("363738")}),b("React").createElement(b("AbstractTextInput.react"),{onChange:this.props.onChange,onClick:this.props.onClick,placeholder:this.props.placeholder,ref:"inputField",value:this.props.value}),b("React").createElement(b("AbstractButton.react"),{labelIsHidden:!0,onClick:this.props.onClear,label:i._("Borrar b\u00fasqueda"),className:(this.props.value.length===0?"hidden_elem":"")+" _2pge",image:b("React").createElement(b("Image.react"),{src:g("393092")})}))};d.focusInput=function(){this.refs.inputField.focusInput()};return c}(b("React").PureComponent);c.propTypes={onChange:a.func,onClear:a.func,onClick:a.func,placeholder:a.node,value:a.string.isRequired};e.exports=c}),null);
__d("GamesVideoStreamerHubComments",["csx","Arbiter","DOM","SubscriptionsHandler","UFIInstanceActionType","UFIOrderingModeStore","UFISharedDispatcher","UFIUIEvents","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=150;a=function(){__p&&__p();function a(a){__p&&__p();var c=this;this.$4=a.instanceID;this.$3=a.commentContainer;this.$1=!1;this.$2=new(b("SubscriptionsHandler"))();this.$2.addSubscriptions(b("Arbiter").subscribe(b("UFIUIEvents").Changed,function(){c.$5()}));b("UFISharedDispatcher").register(function(a){a.type===b("UFIInstanceActionType").CHANGE_ORDER_MODE&&c.$6()});this.$6();this.$5()}var c=a.prototype;c.$5=function(){var a=this,c,d=null;b("queryThenMutateDOM")(function(){var e=b("DOM").scry(a.$3,"._j6a");d=e?e[0]:null;d&&(c=d.scrollHeight-d.offsetHeight-d.scrollTop)},function(){if(d===null||b("UFIOrderingModeStore").getOrderingMode(a.$4)!=="live_streaming")return;(!a.$1||c<=h)&&(a.$1=!0,d.scrollTop=d.scrollHeight)})};c.$6=function(){this.$3.scrollTop=0,this.$1=!1,this.$5()};return a}();e.exports=a}),null);
__d("StreamerHubController",["Style"],(function(a,b,c,d,e,f){"use strict";var g=function(a){var c=document.getElementById("pagelet_bluebar"),d="0px";c&&(d=b("Style").get(c,"height"));b("Style").set(a,"height","calc(100vh - "+d+")")};e.exports={init:function(a){g(a)}}}),null);
__d("GamerGraphUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setContainerGameIds=function(a){this.$1.container_game_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setContainerID=function(a){this.$1.container_id=a;return this};c.setCount=function(a){this.$1.count=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setGameID=function(a){this.$1.game_id=a;return this};c.setItemID=function(a){this.$1.item_id=a;return this};c.setItemdefExtID=function(a){this.$1.itemdef_ext_id=a;return this};c.setItemdefType=function(a){this.$1.itemdef_type=a;return this};c.setMaxTime=function(a){this.$1.max_time=a;return this};c.setMinInterval=function(a){this.$1.min_interval=a;return this};c.setMinTime=function(a){this.$1.min_time=a;return this};c.setP50Time=function(a){this.$1.p50_time=a;return this};c.setSeconds=function(a){this.$1.seconds=a;return this};c.setStarTableValue=function(a){this.$1.star_table_value=a;return this};c.setTargetID=function(a){this.$1.target_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVideoType=function(a){this.$1.video_type=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={container_game_ids:!0,container_id:!0,count:!0,event:!0,game_id:!0,item_id:!0,itemdef_ext_id:!0,itemdef_type:!0,max_time:!0,min_interval:!0,min_time:!0,p50_time:!0,seconds:!0,star_table_value:!0,target_id:!0,time:!0,vc:!0,video_id:!0,video_type:!0,weight:!0};e.exports=a}),null);
__d("ReactAlbumPermalinkComposer.react",["cx","Arbiter","LitestandComposer","React","ReactComposerAttachmentType","ReactComposerAudienceActions","ReactComposerBodyContainer.react","ReactComposerContextProviderMixin","ReactComposerEvents","ReactComposerFeedMediaPostButtonContainer.react","ReactComposerFeedPostButtonContainer.react","ReactComposerFocusInit","ReactComposerLoggingName","ReactComposerMediaEagerAttachment.react","ReactComposerSproutsStatusAndMediaSelector.react","ReactComposerStatusEagerAttachment.react","ReactComposerWithSprouts.react","$"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getChildContext=function(){return b("ReactComposerContextProviderMixin").staticGetChildContext(this.props)};d.componentDidMount=function(){var a,c=this.props,d=c.collectionsID;c=c.contextConfig;b("LitestandComposer").initComposer(c.composerID);b("ReactComposerFocusInit").handler(b("$")("album_react_composer_container"),c.composerID,c.actorID,c.gks,(a=c)!=null?(a=a.jsModules)!=null?a.composerFocus:a:a,!0);b("ReactComposerAudienceActions").setCollectionIDWithoutLogging(c.composerID,d.toString());this.props.focus&&b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+c.composerID)};d.render=function(){var a=b("React").createElement(b("ReactComposerWithSprouts.react"),{defaultAttachmentOnExpand:b("ReactComposerAttachmentType").STATUS,innerProps:{className:"_292i",loggingConfig:this.props.config.loggingConfig,sproutsConfig:this.props.config.sproutsConfig},expandOnInit:!1},this.$1(),b("React").createElement(b("ReactComposerBodyContainer.react"),{expanded:this.props.config.showExpandedComposer},this.$2(),this.$3()));return a};d.$1=function(){var a=this.props.config.attachmentsConfig,c=[];a[b("ReactComposerAttachmentType").STATUS].enabled&&c.push(b("React").createElement(b("ReactComposerSproutsStatusAndMediaSelector.react"),{key:b("ReactComposerLoggingName").STATUS_TAB_SELECTOR,label:a[b("ReactComposerAttachmentType").STATUS].defaultTabTitle,statusOnly:!1}));return b("React").createElement("div",{className:"_3ubp _sg2"},c)};d.$2=function(){if(!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].enabled)return null;var a=this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").STATUS].placeholderText;return b("React").createElement(b("ReactComposerStatusEagerAttachment.react"),{key:"status",config:this.props.config,selected:!0,postButtonModule:b("ReactComposerFeedPostButtonContainer.react"),placeholder:a})};d.$3=function(){return!this.props.config.attachmentsConfig[b("ReactComposerAttachmentType").MEDIA].enabled?null:b("React").createElement(b("ReactComposerMediaEagerAttachment.react"),{key:"media",config:this.props.config,postButtonModule:b("ReactComposerFeedMediaPostButtonContainer.react"),selected:!1})};return c}(b("React").Component);a.childContextTypes=b("ReactComposerContextProviderMixin").childContextTypes;e.exports=a}),null);
__d("VideoWithTahoeExitAutoplay",["VideoPlayerReason"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();var c=this;this.$3=function(){c.$1.play(b("VideoPlayerReason").AUTOPLAY),c.$2||c.$1.unmute()};this.$1=a;a.addListener("TahoeController/exitTahoe",this.$3);a.addListener("unmuteVideo",function(){c.$2=!1});a.addListener("muteVideo",function(){c.$2=!0});this.$2=a.isMuted()||a.getVolume()===0};e.exports=a}),null);