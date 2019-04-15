if (self.CavalryLogger) { CavalryLogger.start_js(["iSO0o"]); }

__d("AdsTestedFBTStrings",["fbt"],(function(a,b,c,d,e,f,g){e.exports={PLACING_ORDER:g._("Realizando pedido..."),CREATIVE:g._("Contenido"),OPTIMIZATION:g._("Optimizaci\u00f3n de entrega"),TARGETING:g._("P\u00fablico"),PLACEMENT:g._("Ubicaci\u00f3n"),PRODUCT_SET:g._("Conjunto de productos"),FREEFORM:g._("M\u00e1s de una variable"),EVEN_SPLIT:g._("Distribuci\u00f3n uniforme"),WEIGHTED_SPLIT:g._("Distribuci\u00f3n ponderada")}}),null);
__d("DefaultSettingsValues",[],(function(a,b,c,d,e,f){e.exports={ASSET_SECTION_TYPE:"OWNED",PANE:"CampaignGroupPane"}}),null);
__d("GraphSort",[],(function(a,b,c,d,e,f){e.exports={ASC:"_ascending",DESC:"_descending"}}),null);
__d("AdsSplitTestConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADPUBLISHER_BUFFER_MINUTES:15,ADPUBLISHER_BUFFER_SECONDS:900,SPLIT_TEST_BUCKETS:1e4,MAX_CONFIDENCE_THRESHOLD:95,MAX_LENGTH_DAYS:30,MIN_LENGTH_DAYS:1})}),null);
__d("AdsSplitTestStrings",["fbt","AdsSplitTestConstants","AdsSplitTestVariable","AdsTestedFBTStrings"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=g._("No volver a mostrar");d=g._("Completa la configuraci\u00f3n de la prueba A\/B");f=g._("Crear prueba A\/B");var i=g._("Crear prueba A\/B"),j=g._("Probar otro anuncio"),k=g._("Anuncio predeterminado"),l=g._("\u00bfQu\u00e9 quieres probar?"),m=g._("No se pueden editar las variables de pruebas A\/B activas, que est\u00e1n a punto de activarse o que se completaron"),n=g._("Configuraci\u00f3n de la prueba A\/B incorrecta"),o=g._("Eficacia estimada de la prueba:"),p=g._("Reduce tu costo por resultado"),q=g._("Parte de tu selecci\u00f3n no est\u00e1 incluida en ninguna prueba A\/B."),r=g._("Si eliges una sola variable, sabr\u00e1s por qu\u00e9 el rendimiento del conjunto de anuncios ganador es mejor y obtendr\u00e1s estad\u00edsticas para futuras pruebas. Si pruebas m\u00e1s de una variable, sabr\u00e1s qu\u00e9 conjunto de anuncios tiene un mejor rendimiento."),s=g._("Prueba A\/B creada"),t=g._("Los presupuestos distribuidos se calculan de la siguiente manera: el presupuesto total se multiplica por el porcentaje que quieres distribuir."),u=g._("Las pruebas A\/B est\u00e1n en circulaci\u00f3n entre {min test length} y {max test length} d\u00edas.",[g._param("min test length",b("AdsSplitTestConstants").MIN_LENGTH_DAYS),g._param("max test length",b("AdsSplitTestConstants").MAX_LENGTH_DAYS)]),v=g._("No puedes guardar las pruebas A\/B como borradores. Si necesitas salir, aseg\u00farate de haber almacenado los detalles de la prueba en alg\u00fan otro lugar para poder volverla a crear m\u00e1s tarde."),w=g._("Define cu\u00e1nto quieres gastar y cu\u00e1ndo quieres que se muestren tus anuncios."),x=g._("Presupuesto y calendario de la prueba A\/B"),y=g._("Resumen de la prueba A\/B"),z=g._("Prueba A\/B"),A=g._("Entiende c\u00f3mo influyen distintas estrategias en el rendimiento de tus anuncios. La prueba A\/B te ofrece una idea clara de los resultados con estos beneficios:"),B=g._("Selecciona una variable para probar c\u00f3mo afectan las distintas estrategias al rendimiento del anuncio."),C=g._("Variable"),D=g._("No puedes editar esta secci\u00f3n porque forma parte de una prueba A\/B que ya no est\u00e1 en circulaci\u00f3n"),E=g._("No puedes editar esta secci\u00f3n porque forma parte de una prueba A\/B en circulaci\u00f3n"),F=g._("Para editar esta secci\u00f3n, selecciona todos los conjuntos de anuncios de la prueba A\/B"),G=g._("Para editar esta secci\u00f3n, selecciona todos los anuncios de la prueba A\/B"),H=g._("Anular prueba A\/B"),I=g._("Enviar comentarios"),J=g._("Usar prueba A\/B");b=(h={},h[b("AdsSplitTestVariable").CREATIVE]={key:b("AdsSplitTestVariable").CREATIVE,label:b("AdsTestedFBTStrings").CREATIVE,pluralLabel:g._("contenidos"),longLabel:"",description:g._("Entiende con qu\u00e9 tipos de contenido es m\u00e1s probable que interact\u00fae tu p\u00fablico.")},h[b("AdsSplitTestVariable").OPTIMIZATION]={key:b("AdsSplitTestVariable").OPTIMIZATION,label:b("AdsTestedFBTStrings").OPTIMIZATION,pluralLabel:g._("optimizaciones de entrega"),longLabel:g._("Optimizaci\u00f3n de entrega (variable)"),description:g._("Entiende qu\u00e9 eventos de optimizaci\u00f3n generan mejores resultados.")},h[b("AdsSplitTestVariable").TARGETING]={key:b("AdsSplitTestVariable").TARGETING,label:b("AdsTestedFBTStrings").TARGETING,pluralLabel:g._("p\u00fablicos"),longLabel:g._("P\u00fablico (variable)"),description:g._("Entiende qu\u00e9 grupos de personas tienen m\u00e1s probabilidades de responder a tus anuncios.")},h[b("AdsSplitTestVariable").PLACEMENT]={key:b("AdsSplitTestVariable").PLACEMENT,label:b("AdsTestedFBTStrings").PLACEMENT,pluralLabel:g._("ubicaciones"),longLabel:g._("Ubicaci\u00f3n (variable)"),description:g._("Entiende qu\u00e9 plataformas son las m\u00e1s efectivas para tus anuncios.")},h[b("AdsSplitTestVariable").PRODUCT_SET]={key:b("AdsSplitTestVariable").PRODUCT_SET,label:b("AdsTestedFBTStrings").PRODUCT_SET,pluralLabel:g._("conjuntos de productos"),longLabel:g._("Conjunto de productos (variable)"),description:g._("Entiende con qu\u00e9 productos es m\u00e1s probable que interact\u00fae tu p\u00fablico.")},h[b("AdsSplitTestVariable").FREEFORM]={key:b("AdsSplitTestVariable").FREEFORM,label:b("AdsTestedFBTStrings").FREEFORM,pluralLabel:"",longLabel:"",description:""},h);function a(a){try{return g._({"0":"A","1":"B","2":"C","3":"D","4":"E","5":"F","6":"G","7":"H","8":"I","9":"J"},[g._enum(a,{0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J"})])}catch(a){return""}}e.exports={CHECKBOX_LABEL_DO_NOT_SHOW_MODAL_AGAIN:c,COMPLETE_SPLIT_TEST_SETUP:d,CREATE_SPLIT_TEST:f,CREATE_AB_TEST:i,CREATIVE_SPLIT_TEST_ADD_VARIANT:j,DEFAULT_ADGROUP_NAME:k,DEFAULT_SPLIT_TEST_VARIABLE_SELECTOR_LABEL:l,DISABLED_SPLIT_TESTING_TOOLTIP:m,INCORRECT_SPLIT_TEST_SETTINGS_MESSAGE:n,LABEL_FOR_ESTIMATED_TEST_POWER:o,LOWER_COST_PER_RESULTS:p,NON_SPLIT_TEST_SELECTED_MESSAGE:q,SINGLE_VARIABLE_VS_FREEFORM_DESCRIPTON:r,SPLIT_TEST_BUDGET_HELP_TEXT:t,SPLIT_TEST_CREATED:s,SPLIT_TEST_GIVE_FEEDBACK:I,SPLIT_TEST_LENGTH_DESCRIPTION:u,SPLIT_TEST_NO_DRAFT_TIP:v,SPLIT_TEST_PRICING_SECTION_DESCRIPTION:w,SPLIT_TEST_PRICING_SECTION_TITLE:x,SPLIT_TEST_SUMMARY:y,SPLIT_TEST_TOGGLE_LABEL:z,SPLIT_TEST_UNDO_BUTTON:H,SPLIT_TEST_VARIABLE_SECTION_DESCRIPTION:A,SPLIT_TEST_VARIABLE_SECTION_DESCRIPTION_SIMPLE:B,SPLIT_TEST_VARIABLE_SECTION_TITLE:C,TOOLTIP_FOR_COMPLETED_SPLIT_TEST_DISABLED_SECTION:D,TOOLTIP_FOR_RUNNING_SPLIT_TEST_DISABLED_SECTION:E,TOOLTIP_FOR_SPLIT_TEST_DISABLED_ADGROUP_SECTION:G,TOOLTIP_FOR_SPLIT_TEST_DISABLED_CAMPAIGN_SECTION:F,UPSELL_BUTTON_TEXT:J,getLetterForIndex:a,testVariables:b}}),null);
__d("adsUEditorCampaignGroupErrorsSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignGroupErrorsSelector;return a.getStores()},function(a){var b=a.campaignGroupID;a=a.campaignGroupErrorsSelector;return a(b)},e.id+".adsUEditorCampaignGroupErrorsSelector");e.exports=a}),null);
__d("adsUEditorSelectedCampaignGroupIDsSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.selectedCampaignGroupIDsSelector;return a.getStores()},function(a){a=a.selectedCampaignGroupIDsSelector;return a()},e.id+".adsUEditorSelectedCampaignGroupIDsSelector");e.exports=a}),null);
__d("adsUEditorCampaignGroupErrorsForSelectedCampaignGroupsSelector",["adsCreateSelector","adsCreateStoreSelector","adsUEditorCampaignGroupErrorsSelector","adsUEditorSelectedCampaignGroupIDsSelector","concatArrays"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("adsCreateStoreSelector")(function(a){return b("adsUEditorCampaignGroupErrorsSelector").getStores(a)},function(a){return function(c){return b("adsUEditorCampaignGroupErrorsSelector")(babelHelpers["extends"]({},a,{campaignGroupID:c}))}},e.id+".getContextBoundErrorSelector");c=b("adsCreateSelector")([b("adsUEditorSelectedCampaignGroupIDsSelector"),a],function(a,c){a=a.map(function(a){return c(a)});return b("concatArrays")(a)},{name:e.id+".adsUEditorCampaignGroupErrorsForSelectedCampaignGroupsSelector"});e.exports=c}),null);
__d("adsUEditorCampaignGroupPublishStatusSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignGroupPublishStatusSelector;return a.getStores()},function(a){a=a.campaignGroupPublishStatusSelector;return a()},e.id+".adsUEditorCampaignGroupPublishStatusSelector");e.exports=a}),null);
__d("adsUEditorSelectedCampaignGroupsSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.selectedCampaignGroupsSelector;return a.getStores()},function(a){a=a.selectedCampaignGroupsSelector;return a()},e.id+".adsUEditorSelectedCampaignGroupsSelector");e.exports=a}),null);
__d("AdsUEditorCampaignGroupBulkSelectors",["AdsUEditorSelectorUtils","adsCreateSelector","adsMemoizeByReference","adsMemoizeWithArgs","adsUEditorCampaignGroupErrorsForSelectedCampaignGroupsSelector","adsUEditorCampaignGroupPublishStatusSelector","adsUEditorSelectedCampaignGroupIDsSelector","adsUEditorSelectedCampaignGroupsSelector","shallowArrayEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,c){return b("adsCreateSelector")([b("adsUEditorSelectedCampaignGroupsSelector")],b("AdsUEditorSelectorUtils").memoizeBulkAggregation(function(b){return b.map(function(b){return b.getIn(a)})},c),{name:e.id})};c=b("adsMemoizeWithArgs")(a,function(a,b){return(b?[].concat(a,[b.getKey()]):a).join(".")},"AdsUEditorCampaignGroupBulkSelectors.selectorByPath");d=function(a){return b("adsCreateSelector")([b("adsUEditorSelectedCampaignGroupsSelector")],b("AdsUEditorSelectorUtils").memoizeBulkAggregation(function(b){return b.map(a)}),{name:e.id})};f=function(a){return b("adsCreateSelector")([b("adsUEditorCampaignGroupErrorsForSelectedCampaignGroupsSelector")],b("AdsUEditorSelectorUtils").memoizeBulkAggregation(function(c){return c.filter(function(c){return c.path&&b("shallowArrayEqual")(c.path,a)}).map(function(a){return a.message})}),{name:e.id})};a=b("adsMemoizeWithArgs")(f,function(a){return a.join(".")},"AdsUEditorCampaignGroupBulkSelectors.errorMessageSelectorByPath");f=b("adsCreateSelector")([b("adsUEditorSelectedCampaignGroupIDsSelector"),b("adsUEditorCampaignGroupPublishStatusSelector")],b("AdsUEditorSelectorUtils").memoizeBulkAggregation(function(a,b){return a.map(function(a){a=b.get(a);return a?a.isNew:!1})}),{name:e.id+".isObjectNew"});a={errorMessageSelectorByPath:a,isObjectNew:f,selectorByCampaignGroupFn:b("adsMemoizeByReference")(d,e.id),selectorByPath:c};e.exports=a}),null);
__d("adsUEditorCampaignGroupSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignGroupSelector;return a.getStores()},function(a){var b=a.campaignGroupID;a=a.campaignGroupSelector;return a(b)},e.id+".selector");e.exports=a}),null);
__d("adsUEditorCampaignSelector",["adsCreateStoreSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateStoreSelector")(function(a){a=a.campaignSelector;return a.getStores()},function(a){var b=a.campaignID;a=a.campaignSelector;return a(b)},e.id+".selector");e.exports=a}),null);
__d("AdsUEditorContextType",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c={hostID:a.string.isRequired,adgroupIDsForSelectedCampaignGroupsSelector:a.func.isRequired,adgroupsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignIDsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignsForSelectedCampaignGroupsSelector:a.func.isRequired,campaignGroupSelector:a.func.isRequired,campaignGroupCombinedErrorsSelector:a.func.isRequired,campaignGroupCrossValidationErrorsSelector:a.func.isRequired,campaignGroupErrorsSelector:a.func.isRequired,campaignGroupPublishStatusSelector:a.func.isRequired,selectedCampaignGroupIDsSelector:a.func.isRequired,selectedCampaignGroupsSelector:a.func.isRequired};d=babelHelpers["extends"]({},c,{adgroupIDsForSelectedCampaignsSelector:a.func.isRequired,adgroupsForSelectedCampaignsSelector:a.func.isRequired,campaignSelector:a.func.isRequired,campaignCombinedErrorsSelector:a.func.isRequired,campaignErrorsSelector:a.func.isRequired,campaignPublishStatusSelector:a.func.isRequired,selectedCampaignIDsSelector:a.func.isRequired,selectedCampaignsSelector:a.func.isRequired,selectedRawCampaignsSelector:a.func.isRequired});f=babelHelpers["extends"]({},d,{adgroupSelector:a.func.isRequired,adgroupPublishStatusSelector:a.func.isRequired,adgroupCombinedErrorsSelector:a.func.isRequired,adgroupErrorsSelector:a.func.isRequired,adgroupErrorMessageSpecSelector_DEPRECATED:a.func.isRequired,customSelectors_ASK_ACE_TEAM_BEFORE_USING:a.shape({isSlideshowSelectedSelector:a.func.isRequired}),selectedAdgroupIDsSelector:a.func.isRequired,selectedAdgroupsSelector:a.func.isRequired});e.exports=babelHelpers["extends"]({campaignGroup:{campaignGroupEditorContext:a.shape(c)},campaign:{campaignEditorContext:a.shape(d)},adgroup:{adgroupEditorContext:a.shape(f)}},{})}),null);
__d("AdsCallToActionTypesUtils",["AdsCallToActionTypes","AdsLegacyObjectivesUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){__p&&__p();var a={},c=function(c){if(!Object.prototype.hasOwnProperty.call(b("AdsCallToActionTypes").TYPES,c))return"continue";var d=b("AdsCallToActionTypes").TYPES[c];c=d.objectives;c.forEach(function(b){a[b]||(a[b]=[]),a[b].push(d)})};for(var d in b("AdsCallToActionTypes").TYPES){var e=c(d);if(e==="continue")continue}for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&a[f].sort(function(a,b){return a.name.localeCompare(b.name)});return a}var g=a();c={typesForObjective:function(a,c,d,e){if(a==null||a==="")return[];d=b("AdsLegacyObjectivesUtils").convertToLegacyAppObjectives_HACK(a,c,e);return g[d]?g[d].slice(0):[]}};e.exports=c}),null);
__d("promiseStoreGet",["Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){__p&&__p();return new(b("Promise"))(function(b,e){__p&&__p();var f=a.addListener(g);g();function g(){var a=c();if(a.isDone()&&a.hasError())e(a.error||a.value),f.remove();else if(a.isDone()&&a.hasValue()){a=a.getValueEnforcing();(!d||d(a))&&(b(a),f.remove())}}})}a.all=function(a,c,d){__p&&__p();return new(b("Promise"))(function(b,e){__p&&__p();var f=a.addListener(g);g();function g(){__p&&__p();var a=c(),g=new Map();for(var a=a,h=Array.isArray(a),i=0,a=h?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(h){if(i>=a.length)break;j=a[i++]}else{i=a.next();if(i.done)break;j=i.value}j=j;var k=j[0];j=j[1];if(!j.isDone())return;if(j.hasError()){e(j.error||j.value);f.remove();return}if(!j.hasValue())return;j=j.getValueEnforcing();if(d&&!d(j))return;g.set(k,j)}b(g);f.remove()}})};e.exports=a}),null);
__d("AdsPixelConversionEventsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIEW_CONTENT:"ViewContent",SEARCH:"Search",ADD_TO_CART:"AddToCart",ADD_TO_WISHLIST:"AddToWishlist",INITIATE_CHECKOUT:"InitiateCheckout",ADD_PAYMENT_INFO:"AddPaymentInfo",PURCHASE:"Purchase",LEAD:"Lead",COMPLETE_REGISTRATION:"CompleteRegistration",CUSTOM_CONVERSION:"CustomConversion",AGGREGATE_CUSTOM_CONVERSION:"AggregateCustomConversion",OTHER:"Other"})}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);