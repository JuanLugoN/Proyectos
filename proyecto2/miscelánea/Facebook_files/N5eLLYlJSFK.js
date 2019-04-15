if (self.CavalryLogger) { CavalryLogger.start_js(["TICTD"]); }

__d("UFI2CommentReactionIconTooltipContentRendererQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"feedbackTargetID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"feedbackTargetID"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"UFI2CommentReactionIconTooltipContentRendererQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[{kind:"FragmentSpread",name:"UFI2CommentReactionIconTooltipContent_feedback",args:null}]}]},operation:{kind:"Operation",name:"UFI2CommentReactionIconTooltipContentRendererQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:b,concreteType:"Feedback",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"summary",storageKey:null,args:null,concreteType:"TopReactionSummaryPerReaction",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"reaction",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"reaction_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"localized_name",args:null,storageKey:null},c]},{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"reaction_count_reduced",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"interesting_reactors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},c]}]}]},c]}]},params:{operationKind:"query",name:"UFI2CommentReactionIconTooltipContentRendererQuery",id:"1614698308658177",text:null,metadata:{}}}}();e.exports=a}),null);
__d("UFI2CommentReactionIconTooltipContent_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"UFI2CommentReactionIconTooltipContent_feedback",type:"Feedback",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"top_reactions",storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])',args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"summary",storageKey:null,args:null,concreteType:"TopReactionSummaryPerReaction",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"reaction",storageKey:null,args:null,concreteType:"FeedbackReactionInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"reaction_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"localized_name",args:null,storageKey:null}]},{kind:"ScalarField",alias:null,name:"reaction_count",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"reaction_count_reduced",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"interesting_reactors",storageKey:null,args:null,concreteType:null,plural:!0,selections:[{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]}]}]}]};e.exports=a}),null);
__d("UFI2CommentReactionIconTooltipContent.react",["cx","fbt","invariant","React","RelayModern","UFI2TooltipNamesList.react","UFIReactionIconImpl.react","getReactionKeyFromType","withReflowOnMountOrUpdate","UFI2CommentReactionIconTooltipContent_feedback.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();b("RelayModern").graphql;a=b("RelayModern").createFragmentContainer;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a,c,d,e,f){d="UFI2CommentReactionIconTooltipContent/content_"+f;return b("React").createElement("div",{className:"_68ln","data-testid":d,key:d},b("React").createElement("div",{className:"_68lo"},b("React").createElement(b("UFIReactionIconImpl.react"),{className:"_68lp",key:"UFIReactionIcon:"+f,reaction:f}),b("React").createElement("span",{className:"_68lq",key:"count_reduced"},a)),e.length===0?null:b("React").createElement(b("UFI2TooltipNamesList.react"),{className:"_68lr",names:e,totalCount:c}))};d.render=function(){__p&&__p();var a=this,c=this.props,d=c.feedback;c=c.fetchError;if(c)return null;if(!d)return h._("Cargando\u2026");d=(c=d.top_reactions)==null?void 0:c.summary;d!=null||i(0,2164);return d.map(function(c){__p&&__p();var d=c.reaction_count_reduced;d||i(0,2165);var e=c.reaction;e||i(0,2166);var f=e.localized_name;f||i(0,2167);var g=c.reaction_count;g||i(0,2168);e=e.reaction_type;e!=null||i(0,2169);e=b("getReactionKeyFromType")(e);c=c.interesting_reactors;c!=null||i(0,2170);c=c.filter(Boolean).map(function(a){return a==null?void 0:a.name}).filter(Boolean);return a.$1(d,g,f,c,e)})};return c}(b("React").Component);c.displayName="UFI2CommentReactionIconTooltipContent";d=b("withReflowOnMountOrUpdate")(c);e.exports=a(d,{feedback:function(){return b("UFI2CommentReactionIconTooltipContent_feedback.graphql")}})}),null);
__d("UFI2CommentReactionIconTooltipContentRenderer.react",["React","RelayModern","UFI2CommentReactionIconTooltipContent.react","withRefetchOnVisible","UFI2CommentReactionIconTooltipContentRendererQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var h=function(){return b("UFI2CommentReactionIconTooltipContentRendererQuery.graphql")};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){var c=a.error;a=a.props;return b("React").createElement(b("UFI2CommentReactionIconTooltipContent.react"),{feedback:a&&a.feedback,fetchError:c})};d.render=function(){var a=this.props,c=a.environment;a=a.queryVariables;return b("React").createElement(g,{cacheConfig:{force:!0},dataFrom:"STORE_THEN_NETWORK",environment:c,query:h,render:this.$1,variables:a})};return c}(b("React").Component);a.displayName="UFI2CommentReactionIconTooltipContentRenderer";e.exports=b("withRefetchOnVisible")(a,h)}),null);