if (self.CavalryLogger) { CavalryLogger.start_js(["XaLMs"]); }

__d("clearUFIComposerInputState",["EditorState"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.inputState;switch(c.__type){case"editor-state-based":return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},c,{editorState:b("EditorState").moveFocusToEnd(b("EditorState").createEmpty())})});case"plain-text":default:return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},c,{selectionOffsets:{end:0,start:0},text:""})})}};e.exports=a}),null);