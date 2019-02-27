﻿
		/*
 * Copyright (C) 2007 Trivantis Corporation
 */

	
function jsWndQuestion(){jsWndOther.prototype.constructor.call(this);};jsWndQuestion.prototype=new jsWndOther();jsWndQuestion.prototype.constructor=jsWndQuestion;jsWndQuestion.prototype.postAttach=function(A){jsWndOther.prototype.postAttach.call(this,A);if (this.initQuestion) this.initQuestion(A);};jsWndQuestion.prototype.initQuestion=function(A){this.checkQuestionAttempts(f);if (this.readyToProcess()&&!A) this.hasBeenProcessed=true;};jsWndQuestion.prototype.questionUpdated=function(){var A=this,B=A.cwObj,C=B.varQuest;C.set(A.getQuestionValue());if (A.updateUI) A.updateUI();A.hasBeenProcessed=false;trivExitPage.afterFeedBackCallback=n;if (B.doImmFeedback){if (A.readyToProcess()) A.processQuestion();}};jsWndQuestion.prototype.processQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest,E=D.getValue(),F=C.varAttempts;A=typeof A!=='undefined'?A:true;if(E!='~~~null~~~'&&!B.hasBeenProcessed&&!B.disabled){if (F) F.add('1');B.hasBeenProcessed=true;if(B.isCorrectlyAnswered()){if (A&&C.correctFeedbackFunc){window[C.correctFeedbackFunc](trivExitPage.afterFeedBackCallback);trivExitPage.afterFeedBackCallback="called";}else B.perChoiceFeedback(A);B.checkQuestionAttempts(f);}else{B.checkQuestionAttempts(A);if (!B.disabled||!B.cwObj.attemptsFeedbackFunc){if (A&&C.incorrectFeedbackFunc){window[C.incorrectFeedbackFunc](trivExitPage.afterFeedBackCallback);trivExitPage.afterFeedBackCallback="called";}else B.perChoiceFeedback(A);}}};return (trivExitPage.afterFeedBackCallback=="called"?1:0);};jsWndQuestion.prototype.perChoiceFeedback=function(A){var B=this,C=B.cwObj,D=C.arChoiceFeedback,E=C.varQuest.getValue();if (A&&D&&(!B.disabled||!B.cwObj.attemptsFeedbackFunc)){trivArExec(D,function(G){var F=eval("'"+G[0]+"'");if (E==F){window[G[1]](trivExitPage.afterFeedBackCallback);trivExitPage.afterFeedBackCallback="called";return false;}});}};jsWndQuestion.prototype.readyToProcess=function(){var A=this.cwObj.varQuest;if (A.isNullOrEmpty()) return false;var B=A.getValue().match(/-/g);return (B.length>=this.cwObj.arrAns.length);};jsWndQuestion.prototype.isCorrectlyAnswered=function(){var A=this,B=A.cwObj,C=B.varQuest.getValue(),D=B.arrAns,E=0,F=false;for(var G=0;G<D.length&&!F;G++){var H=eval("'"+D[G]+"'");E=C.indexOf(H,E);if(E<0) F=true;else E=E+H.length;};return!F;};jsWndQuestion.prototype.resetQuestion=function(){var A=this,B=this.cwObj,C=B.varQuest;C.reset();B.hasBeenProcessed=false;if (B.varAttempts){B.varAttempts.set("0");A.checkQuestionAttempts(t);}};jsWndQuestion.prototype.disableQuestion=function(A){var B=this;B.disabled=A;trivArExec(B.arChld,function(o){if (o.div) o.div.disabled=A;if (o.dCtrl) o.dCtrl.disabled=A;if (o.dCon) o.dCon.disabled=A;});};jsWndQuestion.prototype.checkQuestionAttempts=function(A){var B=this,C=B.cwObj.varAttempts;if (C&&B.cwObj.maxAllowedAttempts){var D=C.getValue()>=B.cwObj.maxAllowedAttempts;if (D&&!B.disabled&&B.cwObj.attemptsFeedbackFunc&&A){window[B.cwObj.attemptsFeedbackFunc](trivExitPage.afterFeedBackCallback);trivExitPage.afterFeedBackCallback="called";};B.disableQuestion(D);}};jsWndQuestion.prototype.randomize=function() {var A;var B=[];var C=[];var D=[];var E=[];var F=[];var G=[];var H=[];var I=2;var J=getDisplayDocument();for (var i=0;i<this.arChoices.length;i++) {var K=J.getElementById(this.arChoices[i].btn);if (K) {if (this.arChoices[i].btnnm.indexOf("check")!=-1||this.arChoices[i].btnnm.indexOf("radio")!=-1||this.arChoices[i].btnnm.indexOf("combo")!=-1) {A={};var L={};L.y=K.offsetTop;L.x=K.offsetLeft;A.btnRect=L;F[i]=K;var M={};A.txtRect=M;K=J.getElementById(this.arChoices[i].txt?this.arChoices[i].txt:null);if (K) {M.y=K.offsetTop;M.x=K.offsetLeft;}else {M.y=0;M.x=0;};G[i]=K;var N={};A.imgRect=N;K=J.getElementById(this.arChoices[i].img?this.arChoices[i].img:null);if (K) {N.y=K.offsetTop;N.x=K.offsetLeft;}else {N.y=0;N.x=0;};H[i]=K;if(this.arChoices[i].txt&&this.arChoices[i].img&&M&&N){A.type=I;if(M.x<=N.x) A.firstPos=0;else A.firstPos=1;}else if(this.arChoices[i].txt){A.type=0;A.firstPos=0;}else{A.type=1;A.firstPos=1;};if(A.firstPos==0) A.firstRect=M;else A.firstRect=N;if(A.type==I){if(A.firstPos==0) A.secondRect=N;else A.secondRect=M;};C.push(i);B.push(A);D.push(A.btnRect.y);var O=document.createElement('span');E.push(O);F[i].parentNode.insertBefore(O,F[i]);}}};C=this.shuffle(C);for (var i=0;i<C.length;i++) {var P=C[i];var Q=B[P];var R=Q.txtRect.y-Q.btnRect.y;var S=Q.imgRect.y-Q.btnRect.y;var T=n;if(this.arChoices[P].btn){T=F[P];if(T) T.style.top=D[i]+"px";if (E[i]){var U=T.parentNode;triv$(T).remove();U.insertBefore(T,E[i]);triv$(E[i]).remove();}};if(Q.type==I){T=G[P];if(T){if(Q.firstPos==0){T.style.top=D[i]+R+"px";T=H[P];if(T) T.style.top=D[i]+S+"px";}else{var W=T;T=H[P];if(T) T.style.top=D[i]+S+"px";if(W) W.style.top=D[i]+R+"px";}}}else if(Q.type==0){T=G[P];if(T) T.style.top=D[i]+R+"px";}else{T=H[P];if(T) T.style.top=D[i]+S+"px";}}};jsWndQuestion.prototype.shuffle=function(A) {var B,C,D=A.length;if (D) while (--D) {C=Math.floor(Math.random()*(D+1));B=A[C];A[C]=A[D];A[D]=B;};return A;};jsWndQuestion.prototype.valueInQuestionVariable=function(A){var B=A.replace(/(?=[+.$^*?,() ])/g,'\\');var C=new RegExp('(^|\\,)'+B+'($|\\,)');return C.test(this.cwObj.varQuest.getValue());};function jsWndMatchingQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndMatchingQuestion.prototype=new jsWndQuestion();jsWndMatchingQuestion.prototype.constructor=jsWndMatchingQuestion;jsWndMatchingQuestion.prototype.initQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest;trivArExec(B.arChld,function(J){if (J.reset&&(typeof J.reset=='function')) J.reset();});if (!D.isNullOrEmpty()){var E=D.getValue(),F=E.split(',');trivArExec(F,function(K){var G=false,H=false,I=K.split('-');trivArExec(B.arChld,function(L){if (L.leftSel==I[0]) G=L;else if (L.rightSel==I[1]) H=L;});if (G&&H){G.matchObj=H;H.matchObj=G;G.drawLine();}});};jsWndQuestion.prototype.initQuestion.call(B,A);};jsWndMatchingQuestion.prototype.getQuestionValue=function(){var A='';trivArExec(this.arChld,function(B){if (B.leftSel&&B.matchObj) A+=B.leftSel+"-"+B.matchObj.rightSel+",";});return A.substring(0,A.length-1);};jsWndMatchingQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);this.initQuestion(f);};jsWndMatchingQuestion.prototype.disableQuestion=function(A){jsWndQuestion.prototype.disableQuestion.call(this,A);trivArExec(this.arChld,function(B){ B.dis=A;});};function jsWndDragDropQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndDragDropQuestion.prototype=new jsWndQuestion();jsWndDragDropQuestion.prototype.constructor=jsWndDragDropQuestion;jsWndDragDropQuestion.prototype.attach=function(A){dragMgr=new DragMgr();jsWndQuestion.prototype.attach.call(this,A);};jsWndDragDropQuestion.prototype.postAttach=function(A){if (this.cwObj.dragDropInitFunc) this.cwObj.dragDropInitFunc();jsWndQuestion.prototype.postAttach.call(this,A);};jsWndDragDropQuestion.prototype.initQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest,E=D.getValue();dragMgr.reset(B);if (!D.isNullOrEmpty()){var F=E.split(',');trivArExec(dragMgr.arrDragItems,function(H){trivArExec(F,function(I){var G=I.split('-');if (H.lyr.dragId==G[0]){dragMgr.setDropById(G[0],G[1],B);}});});};jsWndQuestion.prototype.initQuestion.call(B,A);};jsWndDragDropQuestion.prototype.getQuestionValue=function(){var A='';trivArExec(this.arChld,function(B){if (B.dropObj) A+=B.dragId+"-"+B.dropObj.dropId+",";});return A.substring(0,A.length-1);};jsWndDragDropQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);dragMgr.reset(this);this.initQuestion(f);};jsWndDragDropQuestion.prototype.readyToProcess=function(){var A=this.cwObj.varQuest;if (A.isNullOrEmpty()) return false;var B=A.getValue().match(/-/g);return (B.length>=this.cwObj.correctAnswerNum);};jsWndDragDropQuestion.prototype.isCorrectlyAnswered=function(){var A=this,B=A.cwObj,C=B.varQuest.getValue(),D=[],E={},F=-1;for(var G=0;G<B.arrAns.length;G++){var H=eval("'"+B.arrAns[G]+"'");D.push(H);var I=H.indexOf("-");if(H.slice(I)!=="(na)") E[H.slice(0,I)]=null;};var J=C.split(",");var K=Object.keys(E);if(K.length>J.length) return false;for(var G=0;G<J.length;G++){F=D.indexOf(J[G]);if(F<0) return false;};return true;};function jsWndMultiChoiceQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndMultiChoiceQuestion.prototype=new jsWndQuestion();jsWndMultiChoiceQuestion.prototype.constructor=jsWndMultiChoiceQuestion;jsWndMultiChoiceQuestion.prototype.initQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest,E=D.getValue();trivArExec(B.arChld,function(F){if (F.set) F.set(F.dCtrl&&F.dCtrl.value==E);if (F.setCheck) F.setCheck(F.dCtrl&&F.dCtrl.value==E);else if (F.setSel){F.setSel(E);return false;}});jsWndQuestion.prototype.initQuestion.call(B,A);B.updateUI();};jsWndMultiChoiceQuestion.prototype.getQuestionValue=function(){var A=this;var B=(A.cwObj.varQuest?A.cwObj.varQuest.getValue():'');trivArExec(A.arChld,function(C){if (C.dCtrl&&C.dCtrl.checked){B=C.dCtrl.value;return false;}else if (C.dCon&&C.dCon.tagName&&C.dCon.tagName.toLowerCase()=='select'){B=C.dCon.options[C.dCon.selectedIndex].value;return false;}});return B;};jsWndMultiChoiceQuestion.prototype.readyToProcess=function(){return (!this.cwObj.varQuest.isNullOrEmpty());};jsWndMultiChoiceQuestion.prototype.isCorrectlyAnswered=function(){var A=this.cwObj,B=eval("'"+A.arrAns[0]+"'");return A.varQuest.getValue()==B;};jsWndMultiChoiceQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);this.initQuestion(f);};jsWndMultiChoiceQuestion.prototype.updateUI=function(){var A=this,B=this.cwObj;if ([1,2,14,9].indexOf(B.questType)>=0){if (9==B.questType&&B.dwQuestFlags&0x40000000){if (!B.varQuest.isNullOrEmpty()){trivArExec(A.arChld,function(C){if (C.dCtrl) C.dCon.style.border=(B.varQuest.getValue().split(",").indexOf(C.dCtrl.value)>=0?('2px solid '+B.crLineColor):'');});}}else{trivArExec(A.arChld,function(D){if ([1,2].indexOf(B.questType)>=0){if (D.dCtrl&&D instanceof jsWndFormRadio) D.setCheck(B.varQuest.getValue()==D.dCtrl.value);}else{if ([14,9].indexOf(B.questType)>=0){if (D.dCtrl&&D instanceof jsWndFormRadio){D.setCheck(A.valueInQuestionVariable(D.dCtrl.value));}}}});}}};function jsWndHotSpotQuestion(){jsWndMultiChoiceQuestion.prototype.constructor.call(this);};jsWndHotSpotQuestion.prototype=new jsWndMultiChoiceQuestion();jsWndHotSpotQuestion.prototype.constructor=jsWndHotSpotQuestion;jsWndHotSpotQuestion.prototype.getQuestionValue=function(){return this.cwObj.varQuest.getValue();};jsWndHotSpotQuestion.prototype.initQuestion=function(A){var B=this;jsWndMultiChoiceQuestion.prototype.initQuestion.call(B,A);if (B.cwObj.dwQuestFlags&0x40000000) trivArExec(B.arChld,function(C){if (C.dCtrl) C.dCon.style.border='';});jsWndMultiChoiceQuestion.prototype.updateUI.call(B);};function jsWndMultiResponseQuestion(){jsWndMultiChoiceQuestion.prototype.constructor.call(this);};jsWndMultiResponseQuestion.prototype=new jsWndMultiChoiceQuestion();jsWndMultiResponseQuestion.prototype.constructor=jsWndMultiResponseQuestion;jsWndMultiResponseQuestion.prototype.initQuestion=function(A){var B=this;trivArExec(B.arChld,function(C){if (C.dCtrl) C.dCtrl.checked=B.valueInQuestionVariable(C.dCtrl.value);else if (C.dCon&&C.dCon.tagName&&C.dCon.tagName.toLowerCase()=='select'){trivArExec(C.dCon.options,function(D){D.selected=B.valueInQuestionVariable(D.value);});}});jsWndQuestion.prototype.initQuestion.call(B,A);B.updateUI();};jsWndMultiResponseQuestion.prototype.getQuestionValue=function(){var A=this,B='';trivArExec(A.arChld,function(C){if (C.dCtrl&&C.dCtrl.checked){B+=C.dCtrl.value+",";}else if (C.dCon&&C.dCon.tagName&&C.dCon.tagName.toLowerCase()=='select'){trivArExec(C.dCon.options,function(D){if (D.selected) B+=D.value+",";});}});return B.substring(0,B.length-1);};jsWndMultiResponseQuestion.prototype.readyToProcess=function(){var A=this.cwObj;if (A.varQuest.isNullOrEmpty()) return false;return (A.varQuest.getValue().split(",").length>=eval("'"+A.arrAns[0]+"'").split(",").length);};jsWndMultiResponseQuestion.prototype.isCorrectlyAnswered=function(){var A=this.cwObj,B=eval("'"+A.arrAns[0]+"'"),C=true,D=B.split(","),E=A.varQuest.getValue().split(",");if (D.length!=E.length) return false;trivArExec(D,function(B){if (E.indexOf(B)<0){C=false;return false;}});return C;};jsWndMultiResponseQuestion.prototype.updateUI=function(){return jsWndHotSpotQuestion.prototype.updateUI.call(this);};function jsWndFillBlankQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndFillBlankQuestion.prototype=new jsWndQuestion();jsWndFillBlankQuestion.prototype.constructor=jsWndFillBlankQuestion;jsWndFillBlankQuestion.prototype.initQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest,E=D.getValue();trivArExec(B.arChld,function(F){if (F.dCon&&F.dCon.tagName&&['input','textarea'].indexOf(F.dCon.tagName.toLowerCase())>=0){F.dCon.value=D.isNullOrEmpty()?'':E;return false;}});jsWndQuestion.prototype.initQuestion.call(B,A);};jsWndFillBlankQuestion.prototype.getQuestionValue=function(){var A=this,B='';trivArExec(A.arChld,function(C){if (C.dCon&&C.dCon.tagName&&['input','textarea'].indexOf(C.dCon.tagName.toLowerCase())>=0){B=C.dCon.value;return false;}});return B;};jsWndFillBlankQuestion.prototype.readyToProcess=function(){return!this.cwObj.varQuest.isNullOrEmpty();};jsWndFillBlankQuestion.prototype.isCorrectlyAnswered=function(){var A=this.cwObj,B=A.varQuest,C=B.getValue()+'',D=A.dwQuestFlags&0x400000,E=A.dwQuestFlags&0x800000,F=E?false:true;if (!D) C=C.toLowerCase();trivArExec(A.arAnswers,function(G){G=eval("'"+G+"'");if (!D) G=G.toLowerCase();if (E&&G==C){F=true;return false;}else if (!E&&C.indexOf(G)<0){F=false;return false;}});return F;};jsWndFillBlankQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);this.initQuestion(f);};function jsWndNumberEntryQuestion(){jsWndFillBlankQuestion.prototype.constructor.call(this);};jsWndNumberEntryQuestion.prototype=new jsWndFillBlankQuestion();jsWndNumberEntryQuestion.prototype.constructor=jsWndNumberEntryQuestion;jsWndNumberEntryQuestion.prototype.isCorrectlyAnswered=function(){return this.cwObj.numberEntryFunc();};function jsWndOrdinalQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndOrdinalQuestion.prototype=new jsWndQuestion();jsWndOrdinalQuestion.prototype.constructor=jsWndFillBlankQuestion;jsWndOrdinalQuestion.prototype.initQuestion=function(A){var B=this,C=this.cwObj,D=C.varQuest,E=D.isNullOrEmpty()?[]:D.getValue().split(",");trivArExec(B.arChoices,function(F){window[F.btnnm].dCon.selectedIndex=E.indexOf(F.val+'');});jsWndQuestion.prototype.initQuestion.call(B,A);};jsWndOrdinalQuestion.prototype.questionUpdated=function(A){var B=this;trivArExec(B.arChoices,function(C){if (window[C.btnnm].dCon!==A&&window[C.btnnm].dCon.selectedIndex==A.selectedIndex) window[C.btnnm].dCon.selectedIndex=-1;});jsWndQuestion.prototype.questionUpdated.call(this);};jsWndOrdinalQuestion.prototype.getQuestionValue=function(){var A=this,B='',C=n;for (var i=0;i<A.arChoices.length;i++){C=window[A.arChoices[i].btnnm].dCon;B+=(C.selectedIndex<0?'':(A.arChoices[C.selectedIndex].val+''))+',';};return B.substring(0,B.length-1);};jsWndOrdinalQuestion.prototype.readyToProcess=function(){var A=this,B=true;trivArExec(A.arChoices,function(C){if (window[C.btnnm].dCon.selectedIndex<0){B=false;return false;}});return B;};jsWndOrdinalQuestion.prototype.isCorrectlyAnswered=function(){return jsWndMultiChoiceQuestion.prototype.isCorrectlyAnswered.call(this);};jsWndOrdinalQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);trivArExec(this.arChoices,function(A){window[A.btnnm].dCon.value=-1;});};function jsWndEssayQuestion(){jsWndFillBlankQuestion.prototype.constructor.call(this);};jsWndEssayQuestion.prototype=new jsWndFillBlankQuestion();jsWndEssayQuestion.prototype.constructor=jsWndNumberEntryQuestion;jsWndEssayQuestion.prototype.isCorrectlyAnswered=function(){return true;};function jsWndLikertQuestion(){jsWndQuestion.prototype.constructor.call(this);};jsWndLikertQuestion.prototype=new jsWndQuestion();jsWndLikertQuestion.prototype.constructor=jsWndLikertQuestion;jsWndLikertQuestion.prototype.initQuestion=function(A){var B=this,C=B.cwObj,D=C.varQuest,E=D.getValue();if (D.isNullOrEmpty()){trivArExec(B.arChld,function(G){if (G instanceof jsWndFormRadio) G.setCheck(f);});}else{var F=E.split(',');trivArExec(F,function(H){trivArExec(B.arChld,function(I){if(I instanceof jsWndFormRadio&&I.dCtrl.defaultValue.split('-')[0]==H.split('-')[0]) I.setCheck(H==I.dCtrl.defaultValue);});});};jsWndQuestion.prototype.initQuestion.call(B,A);};jsWndLikertQuestion.prototype.getQuestionValue=function(){var A=this;var B='';trivArExec(A.arChld,function(C){if (C instanceof jsWndFormRadio){C.setCheck(C.dCtrl.checked);if (C.getCheck()){if (B.length) B+=',';B+=C.dCtrl.defaultValue;}}});return B;};jsWndLikertQuestion.prototype.readyToProcess=function(){return true;};jsWndLikertQuestion.prototype.isCorrectlyAnswered=function(){return true;};jsWndLikertQuestion.prototype.resetQuestion=function(){jsWndQuestion.prototype.resetQuestion.call(this);this.initQuestion(f);};wndPagePublished.prototype.resetQuestions=function(){trivArExec(window.arQuest,function(A){ A.resetQuestion();});};
