if (self.CavalryLogger) { CavalryLogger.start_js(["EwOG8"]); }

__d("ReactComposerJSONCollageLayoutData",[],(function(a,b,c,d,e,f){e.exports={1:[{validActors:3,photoLayouts:[[0,1,1,0]]}],2:[{validActors:3,photoLayouts:[[0,3,3,0],[0,6,3,3]]},{validActors:3,photoLayouts:[[0,6,3,0],[3,6,6,0]]},{validActors:3,photoLayouts:[[0,3,6,0],[0,6,6,3]]},{validActors:1,photoLayouts:[[0,6,2,0],[2,6,4,0]]}],3:[{validActors:3,photoLayouts:[[0,6,3,0],[3,3,6,0],[3,6,6,3]]},{validActors:3,photoLayouts:[[0,3,6,0],[0,6,3,3],[3,6,6,3]]},{validActors:2,photoLayouts:[[0,2,2,0],[0,4,2,2],[0,6,2,4]]},{validActors:1,photoLayouts:[[0,6,4,0],[4,3,6,0],[4,6,6,3]]},{validActors:1,photoLayouts:[[0,4,6,0],[0,6,3,4],[3,6,6,4]]},{validActors:1,photoLayouts:[[0,6,2,0],[2,6,4,0],[4,6,6,0]]},{validActors:1,photoLayouts:[[0,2,6,0],[0,4,6,2],[0,6,6,4]]}],4:[{validActors:3,photoLayouts:[[0,3,3,0],[0,6,3,3],[3,3,6,0],[3,6,6,3]]},{validActors:3,photoLayouts:[[0,6,4,0],[4,2,6,0],[4,4,6,2],[4,6,6,4]]},{validActors:3,photoLayouts:[[0,4,6,0],[0,6,2,4],[2,6,4,4],[4,6,6,4]]}],5:[{validActors:1,photoLayouts:[[0,3,3,0],[3,3,6,0],[0,6,2,3],[2,6,4,3],[4,6,6,3]]},{validActors:1,photoLayouts:[[0,3,3,0],[0,6,3,3],[3,2,5,0],[3,4,5,2],[3,6,5,4]]}]}}),null);
__d("VideoCopyrightRuleActionType",[],(function(a,b,c,d,e,f){e.exports={ALLOW:"ALLOW",MANUAL_REVIEW:"MANUAL_REVIEW",TRACK:"TRACK",BLOCK:"BLOCK",TAKEDOWN:"TAKEDOWN",MONETIZE:"MONETIZE",MUTE:"MUTE",ACQUIRE_VIEWS_AND_MONETIZE:"ACQUIRE_VIEWS_AND_MONETIZE"}}),null);
__d("FileInput.react",["cx","invariant","FileInput","InlineBlock.react","React","ReactDOM","joinClasses","nullthrows"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.getFileInput=function(){return b("nullthrows")(d.$1)},d.focus=function(){var a=b("ReactDOM").findDOMNode(d.refs.fileInput);a instanceof HTMLInputElement&&!a.disabled&&a.focus()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=b("joinClasses")("_m",this.props.containerClassName),c="container",d=b("React").createElement("input",babelHelpers["extends"]({},this.props,{type:"file",className:b("joinClasses")(this.props.className,"_n"),ref:"fileInput"}),void 0);if(this.props.display==="block")return b("React").createElement("div",{className:a,ref:c},this.props.children,d);else if(this.props.display==="inline-block")return b("React").createElement(b("InlineBlock.react"),{className:a,ref:c},this.props.children,d);else return b("React").createElement("span",{className:a,ref:c},this.props.children,d)};d.componentDidMount=function(){var a=b("ReactDOM").findDOMNode(this.refs.fileInput),c=b("ReactDOM").findDOMNode(this.refs.container);if(!(a instanceof HTMLInputElement)||!(c instanceof HTMLElement))return;var d=c.firstChild;d instanceof HTMLAnchorElement||h(0,5212);d.setAttribute("rel","ignore");this.$1=new(b("FileInput"))(c,d,a)};d.componentWillUnmount=function(){this.$1&&(this.$1.destroy(),this.$1=null)};return c}(b("React").Component);a.defaultProps={display:"inline-block"};e.exports=a}),null);
__d("FocusRelocator.react",["csx","CSS","Focus","React","getActiveElement"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){var c=this.props,d=c.from;c=c.to;var e=a.from;a=a.to;e&&a&&(d!==e||c!==a)&&(this.$1&&this.$1.remove(),this.$1=b("Focus").relocate(e,a))};d.componentDidUpdate=function(){this.$2()};d.componentWillUnmount=function(){this.$1&&this.$1.remove(),this.$1=null};d.render=function(){return this.props.children};d.$3=function(){var a=this.props,c=a.from;a=a.to;c&&a&&(b("Focus").performRelocation(c,a,b("getActiveElement")()===this.props.from),this.$2())};d.$2=function(){var a=this;this.props.to&&b("getActiveElement")()===this.props.from&&!b("CSS").matchesSelector(this.props.to,"._16jm")&&setTimeout(function(){a.$3()},0)};return c}(b("React").Component);e.exports=a}),null);
__d("BUIComponent",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").Component;c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("BUIProgressBar.react",["cx","BUIComponent","ErrorMarker.react","Image.react","LoadingMarker.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=248;c={background:"default",isBuffering:!1,isSuccess:!1,isError:!1,height:"medium",width:h,color:"blue",flexibleWidth:!1,padding:!0,representsWait:!0,isComplete:!1,useAltCompleteVisuals:!0};d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$BUIProgressBar3=function(){if(c.props.flexibleWidth)return{width:"100%"};var a=+c.props.width;return{width:(a>h?h:a)+"px"}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.$BUIProgressBar1=function(){if(!this.props.icon&&!this.props.message)return null;var a;this.props.icon&&(a=b("React").createElement(b("Image.react"),{className:"__q1",src:this.props.icon}));return b("React").createElement("div",{className:"__q2","data-testid":this.props.dataTestId},a,this.props.message)};d.$BUIProgressBar2=function(){var a=this.props.background;if(this.props.isBuffering)return b("React").createElement("div",{className:"__q3",style:{width:"100%"}});var c=this.props.percentage||0;c<0&&(c=0);c>100&&(c=100);return b("React").createElement("div",{className:"_65ab"+(a==="default"?" __q6":"")+(a==="transparent"?" _65ac":"")},b("React").createElement("div",{className:"__q7",style:{width:c+"%"}}))};d.render=function(){var a=b("joinClasses")("__qa"+(this.props.isComplete===!0?" __qb":"")+(this.props.isComplete===!0&&this.props.useAltCompleteVisuals?" _6age":"")+(this.props.isError===!0?" __qc":"")+(this.props.height==="small"?" _2tr-":"")+(this.props.color==="gray"?" _2tr_":"")+(this.props.padding===!0?" _2m-z":""),this.props.className);a=b("React").createElement("div",{className:a,style:this.$BUIProgressBar3()},this.$BUIProgressBar2(),this.$BUIProgressBar1());this.props.representsWait&&!this.props.isComplete&&(a=b("React").createElement(b("LoadingMarker.react"),null,a));this.props.isError&&(a=b("React").createElement(b("ErrorMarker.react"),null,a));return a};return c}(b("BUIComponent"));d.propTypes={background:a.oneOf(["default","transparent"]),dataTestId:a.string,icon:a.object,isBuffering:a.bool,isError:a.bool,isSuccess:a.bool,message:a.node,percentage:a.number,height:a.oneOf(["small","medium"]),width:a.number,color:a.oneOf(["gray","blue"]),flexibleWidth:a.bool,padding:a.bool,representsWait:a.bool,isComplete:a.bool,useAltCompleteVisuals:a.bool};d.defaultProps=c;e.exports=d}),null);
__d("SUIBusinessThemeContainer.react",["React","SUIBusinessTheme","SUIThemeContainer.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("SUIThemeContainer.react"),{theme:b("SUIBusinessTheme")},this.props.children)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("EmojiInputButton.react",["fbt","Bootloader","FocusRelocator.react","Link.react","React","createCancelableFunction","gkx","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=null,c.state={locked:!1,visible:!1,isVariationsShown:!1},c.$5=function(a){a.preventDefault(),a.stopPropagation(),c.props.onClick&&c.props.onClick(),c.setState(function(a){return{locked:!1,visible:a.locked?!1:!a.visible}})},c.$6=function(a){c.setState(function(a){return{locked:a.visible}})},c.$8=function(a){a||c.setState({visible:!1,isVariationsShown:!1})},c.$9=function(a){c.setState({isVariationsShown:a})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentWillUnmount=function(){this.$1&&this.$1.remove(),this.$1=null,this.$2&&this.$2.cancel(),this.$2=null};d.render=function(){var a=this,c=g._("Inserta un emoji"),d=this.state.visible?b("joinClasses")(this.props.iconActiveClassName,this.props.iconClassName):this.props.iconClassName;return b("React").createElement(b("FocusRelocator.react"),{from:this.$4,to:this.$3},b("React").createElement(b("Link.react"),{"aria-label":c,className:this.props.buttonClassName,"data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":c,onClick:this.$5,onDragStart:function(a){return a.preventDefault()},onMouseDown:this.$6,linkRef:function(b){return a.$4=b},role:"button"},b("React").createElement("div",{className:d,ref:function(b){return a.$3=b}}),this.$7()))};d.$7=function(){var a=this;if(!h){this.state.visible&&(this.$2=b("createCancelableFunction")(function(){a.forceUpdate()}),this.$1=b("Bootloader").loadModules(["EmojiPicker.react"],function(b){h=b,a.$2&&(a.$2(),a.$2=null)},"EmojiInputButton.react"));return null}return!this.state.visible&&b("gkx")("678295")?null:b("React").createElement(h,{context:this.$4,isVariationsShown:this.state.isVariationsShown,onToggle:this.$8,onSelect:this.props.onSelect,onVariationsShown:this.$9,shown:this.state.visible,position:this.props.position})};return c}(b("React").Component);e.exports=a}),null);
__d("ScrollableArea.react",["cx","Bootloader","React","ReactDOM","ScrollBoundaryContain","Style","SubscriptionsHandler","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h="uiScrollableArea native",i="uiScrollableAreaWrap scrollable",j="uiScrollableAreaBody",k="uiScrollableAreaContent";c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$4=function(a){if(d.$2)return;d.$1=a.fromNative(b("ReactDOM").findDOMNode(d.refs.root),{fade:d.props.fade,persistent:d.props.persistent,shadow:d.props.shadow===void 0?!0:d.props.shadow,tabIndex:d.props.tabIndex});d.$5();(d.props.onScroll||d.props.onEndReached||d.props.onTopReached)&&d.$1&&d.$1.subscribe("scroll",d.$6)};d.$6=function(){d.props.onScroll&&d.props.onScroll(),d.$1&&d.$1.isScrolledToBottom()?d.props.onEndReached&&d.props.onEndReached():d.$1&&d.$1.isScrolledToTop()&&(d.props.onTopReached&&d.props.onTopReached())};d.$3=new(b("SubscriptionsHandler"))();return d}var d=c.prototype;d.render=function(){var a={height:this.props.height},c=Object.assign({},this.props);delete c.maxHeight;delete c.fade;delete c.persistent;delete c.contain;return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,h),ref:"root",role:this.props.role,style:babelHelpers["extends"]({},this.props.style||{},a)}),b("React").createElement("div",{className:i,ref:"wrap",role:this.props.role,style:{maxHeight:this.props.maxHeight}},b("React").createElement("div",{className:j,ref:"body",role:this.props.role},b("React").createElement("div",{className:k,role:this.props.contentRole||this.props.role},this.props.children))))};d.getArea=function(){return this.$1};d.componentDidMount=function(){b("Bootloader").loadModules(["ScrollableArea"],this.$4,"ScrollableArea.react");var a=b("ReactDOM").findDOMNode(this.refs.wrap);if(a&&this.props.contain){a=b("ScrollBoundaryContain").applyToElem(a);a&&this.$3.addSubscriptions(a)}};d.componentDidUpdate=function(a){a.width!==this.props.width&&this.$5();a=this.getArea();a&&a.throttledAdjustGripper()};d.componentWillUnmount=function(){this.$1&&this.$1.destroy(),this.$2=!0,this.$3.release()};d.$5=function(){var a=b("ReactDOM").findDOMNode(this.refs.body);b("Style").set(a,"width",this.props.width+"px")};return c}(b("React").Component);c.propTypes={width:a.number,height:a.oneOfType([a.number,a.string]),maxHeight:a.oneOfType([a.number,a.string]),onScroll:a.func,onEndReached:a.func,onTopReached:a.func,shadow:a.bool,fade:a.bool,persistent:a.bool,role:a.string,contentRole:a.string,contain:a.bool};c.defaultProps={contain:!0};e.exports=c}),null);
__d("ExceptionDialog",["fbt","invariant","DialogX","FbtResultBase","LayerDestroyOnHide","LayerHideOnEscape","React","ServerHTML.react","XUIDialogBody.react","XUIDialogCloseButton.react","XUIDialogFooter.react","XUIDialogTitle.react","XUIGrayText.react","getViewportDimensions"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=900,j=40,k={};function l(a){a instanceof b("FbtResultBase")&&(a={__html:a});return a}var m={showAsyncError:function(a,c){__p&&__p();c===void 0&&(c="dev");try{var d=a.getErrorSummary(),e=a.getErrorDescription();a.silentError&&e===""&&(e=g._("Se produjo un error y estamos trabajando para solucionarlo lo antes posible. Pronto podr\u00e1s volver a intentarlo."));if(a.error){this.errorCode=a.error;if(k[this.errorCode])return;k[this.errorCode]=!0}var f=["always"],h=null;if(f.includes(c)&&(a.payload instanceof XMLHttpRequest&&a.payload.responseText)){f={width:"100%",height:window.innerHeight*.7+"px"};h=b("React").createElement("iframe",{style:f,srcDoc:a.payload.responseText});e=null}return m.show(d,e,h)}catch(b){alert(JSON.stringify(a))}},show:function(a,c,d){c=l(c);!c||!d||h(0,3624);var e=b("getViewportDimensions").withoutScrollbars().width;e=e>0?Math.min(e-j,i):i;e=new(b("DialogX"))({width:e,addedBehaviors:[b("LayerDestroyOnHide"),b("LayerHideOnEscape")]},b("React").createElement("div",{"data-testid":"exception_dialog",style:{maxHeight:"80vh",overflow:"auto"}},b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:!1},a),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement(b("XUIGrayText.react"),{shade:"medium",size:"body1"},c!=null&&b("React").createElement(b("ServerHTML.react"),{blob:c}),d)),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogCloseButton.react"),{use:"confirm",className:"autofocus"}))));e.subscribe(["hide"],function(a){this.errorCode&&delete k[this.errorCode]}.bind(this));e.show();return e}};e.exports=m}),null);
__d("ReactComposerCollageLayoutActor",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({USER:1,PAGE:2})}),null);
__d("ReactComposerMediaAspectTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LANDSCAPE:"landscape",PORTRAIT:"portrait",SQUARE:"square",PANORAMA_TESTING_ONLY:"panorama",VERTICAL_PANORAMA_TESTING_ONLY:"vertical_panorama"})}),null);
__d("ReactComposerMediaAspect",["ReactComposerMediaAspectTypes"],(function(a,b,c,d,e,f){"use strict";e.exports={fromRect:function(a){return this._fromWidthAndHeight(a.w(),a.h())},fromDimensions:function(a){return this._fromWidthAndHeight(a[0],a[1])},_fromWidthAndHeight:function(a,c){if(a>c)return b("ReactComposerMediaAspectTypes").LANDSCAPE;else if(a<c)return b("ReactComposerMediaAspectTypes").PORTRAIT;else return b("ReactComposerMediaAspectTypes").SQUARE}}}),null);
__d("ReactComposerCollageLayoutModel",["regeneratorRuntime","ReactComposerCollageLayoutActor","ReactComposerMediaAspect"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("regeneratorRuntime").mark(i),h=b("regeneratorRuntime").mark(j);function i(a,c){__p&&__p();var d,e;return b("regeneratorRuntime").wrap(function(b){__p&&__p();while(1)switch(b.prev=b.next){case 0:d=a.next();e=c.next();if(!(d.done||e.done)){b.next=5;break}return b.abrupt("break",9);case 5:b.next=7;return[d.value,e.value];case 7:b.next=0;break;case 9:case"end":return b.stop()}},g,this)}function j(a){__p&&__p();var c,d,e,f,g;return b("regeneratorRuntime").wrap(function(b){__p&&__p();while(1)switch(b.prev=b.next){case 0:c=a,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();case 1:if(!d){b.next=7;break}if(!(e>=c.length)){b.next=4;break}return b.abrupt("break",16);case 4:f=c[e++];b.next=11;break;case 7:e=c.next();if(!e.done){b.next=10;break}return b.abrupt("break",16);case 10:f=e.value;case 11:g=f;b.next=14;return g;case 14:b.next=1;break;case 16:case"end":return b.stop()}},h,this)}a=function(){__p&&__p();function a(a,c){this.$1=!!(a&b("ReactComposerCollageLayoutActor").USER),this.$2=!!(a&b("ReactComposerCollageLayoutActor").PAGE),this.$3=[],c&&this.addPhotoLayouts(c)}var c=a.prototype;c.addPhotoLayout=function(a){this.$3.push(a);return this};c.addPhotoLayouts=function(a){var b=this;a.forEach(function(a){return b.$3.push(a)});return this};c.getNumPhotoLayouts=function(){return this.$3.length};c.getPhotoLayouts=function(){return this.$3};c.getIsValidForPages=function(){return this.$2};c.getIsValidForUsers=function(){return this.$1};c.getIsValidFor=function(a){switch(a){case b("ReactComposerCollageLayoutActor").USER:return this.getIsValidForUsers();case b("ReactComposerCollageLayoutActor").PAGE:return this.getIsValidForPages()}return!1};c.hasMatchingCollagePhotoLayoutType=function(a){var c=b("ReactComposerMediaAspect").fromRect(this.$3[0]);a=b("ReactComposerMediaAspect").fromDimensions(a);return c===a};c.score=function(a){__p&&__p();var b=0;for(var a=i(j(this.getPhotoLayouts()),a.values()),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];if(!e)continue;var g=f.w();f=f.h();var h=e[0];e=e[1];var k=0;if(h===0||e===0)k=0;else if(g*e/h>=f){var l=g*e/h;k=(l-f)/l}else if(f*h/e>g){l=f*h/e;k=(l-g)/l}b-=k*100;e===h?b-=k*5:g>f?h>e?b+=k*25:b-=k*25:g<f?h<e?b+=k*25:b-=k*25:g===f&&(b-=k*5)}b+=200*this.getNumPhotoLayouts();return b};return a}();e.exports=a}),null);
__d("ReactComposerCollageLayoutData",["ReactComposerCollageLayoutModel","ReactComposerJSONCollageLayoutData","Rect"],(function(a,b,c,d,e,f){"use strict";var g=[];Object.keys(b("ReactComposerJSONCollageLayoutData")).forEach(function(a){b("ReactComposerJSONCollageLayoutData")[a].forEach(function(a){g.push(new(b("ReactComposerCollageLayoutModel"))(a.validActors,a.photoLayouts.map(function(a){return new(Function.prototype.bind.apply(b("Rect"),[null].concat(a)))()})))})});e.exports=g}),null);
__d("ReactComposerCollageLayoutSelection",["FBIDCheck","ReactComposerCollageLayoutActor","ReactComposerCollageLayoutData"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={MAX_NUM_COLS:6,MAX_NUM_ROWS:6,_getCollageLayoutsFor:function(a){return b("ReactComposerCollageLayoutData").filter(function(b){return b.getIsValidFor(a)})},getMaxPhotosSupported:function(){return Math.max.apply(Math,b("ReactComposerCollageLayoutData").map(function(a){return a.getNumPhotoLayouts()}))},getMaxPhotosSupportedFor:function(a){return Math.max.apply(Math,this._getCollageLayoutsFor(a).map(function(a){return a.getNumPhotoLayouts()}))},getCollageLayout:function(a,c){if(!c)return this.getBestUserCollageLayout(a);c=b("FBIDCheck").isUser_deprecated(c)?this.getBestUserCollageLayout(a):this.getBestPageCollageLayout(a);return c},getBestPageCollageLayout:function(a){__p&&__p();if(a.size==0)return new Map();var c=a.values().next().value,d=Math.min(this.getMaxPhotosSupportedFor(b("ReactComposerCollageLayoutActor").PAGE),a.size),e=this._getCollageLayoutsFor(b("ReactComposerCollageLayoutActor").PAGE).filter(function(a){return a.getNumPhotoLayouts()===d});if(!e.length)throw new Error("no valid layout for these media");e=e.filter(function(a){return a.hasMatchingCollagePhotoLayoutType(c)});if(!e.length)throw new Error("no valid layout for these media starts with a suitable aspect");e=e[0];var f=new Map(),g=0;e=e.getPhotoLayouts();for(var a=a.keys(),h=Array.isArray(a),i=0,a=h?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(h){if(i>=a.length)break;j=a[i++]}else{i=a.next();if(i.done)break;j=i.value}j=j;var k=e[g++];k&&f.set(j,k)}return f},getBestUserCollageLayout:function(a){__p&&__p();var c=this._getCollageLayoutsFor(b("ReactComposerCollageLayoutActor").USER).filter(function(b){return b.getNumPhotoLayouts()<=a.size});if(!c.length)throw new Error("no valid layout for these media");c=this._bestLayoutByScore(c,a);if(!c)throw new Error("no best layout? Should not happen!");var d=new Map(),e=0;c=c.getPhotoLayouts();for(var f=a.keys(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;var j=c[e++];j&&d.set(i,j)}return d},_bestLayoutByScore:function(a,b){__p&&__p();a=a.map(function(a){return[a,a.score(b)]});a=a.reduce(function(a,b){var c=a[0];a=a[1];var d=b[0];b=b[1];return a===null||b>a?[d,b]:[c,a]},[null,null]);a=a[0];return a}}}),null);
__d("CollageLayoutConfig",[],(function(a,b,c,d,e,f){__p&&__p();var g=4;a=function(){"use strict";__p&&__p();function a(a,b,c,d){c===void 0&&(c=g),this.$2=c,this.$3=b,this.$5=d,this.$6(a)}var b=a.prototype;b.getItemStyleInfos=function(){return this.$1};b.getIndexForPoint=function(a,b){var c=this.$1.findIndex(function(c){return c.left<=a&&c.top<=b&&c.left+c.width>=a&&c.top+c.height>=b});return c===-1?null:c};b.getCalculatedHeight=function(){return this.$4};b.getSpacing=function(){return this.$2};b.getWidth=function(){return this.$3};b.$6=function(a){var b=this,c=this.$7(a),d=this.$8(a),e=this.$2*(d-1),f=Math.ceil((this.$3-e)/d);this.$4=this.$5||(f+this.$2)*c-this.$2;e=this.$2*(c-1);var g=Math.ceil((this.$4-e)/c);this.$1=[];a.forEach(function(a){a={left:(f+b.$2)*a.x,top:(g+b.$2)*a.y,width:(f+b.$2)*a.width-b.$2,height:(g+b.$2)*a.height-b.$2};a.left+a.width>b.$3&&(a.width=b.$3-a.left);b.$1.push(a)})};b.$8=function(a){var b=0;a.forEach(function(a){b=Math.max(b,a.x+a.width)});return b};b.$7=function(a){var b=0;a.forEach(function(a){b=Math.max(b,a.y+a.height)});return b};return a}();e.exports=a}),null);
__d("XGroupsMembersAddedDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/groups/members/add_post/",{group_id:{type:"FBID"},refresh:{type:"Bool",defaultValue:!1},remove_dom:{type:"Bool",defaultValue:!1},message_id:{type:"String"},ref:{type:"String"},source:{type:"Enum",enumType:1},ignore:{type:"Bool",defaultValue:!1},block_user:{type:"Bool",defaultValue:!1},message:{type:"String"},recommendation_key:{type:"String"},members:{type:"StringKeyset"},freeform:{type:"StringKeyset"},free_member:{type:"Bool",defaultValue:!1},multi_company_confirm:{type:"Bool",defaultValue:!1}})}),null);