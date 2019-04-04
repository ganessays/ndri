/*!
  *  jQuery JavaScript Library v1.4.2
  *  http://jquery.com/
  *
  *  Copyright 2010, John Resig
  *  Dual licensed under the MIT or GPL Version 2 licenses.
  *  http://jquery.org/license
  *
  *  Includes Sizzle.js
  *  http://sizzlejs.com/
  *  Copyright 2010, The Dojo Foundation
  *  Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
(function(aO,I){function a0(){if(!ah.isReady){try{M.documentElement.doScroll("left")}catch(c){setTimeout(a0,1);return}ah.ready()}}function E(s,c){c.src?ah.ajax({url:c.src,async:false,dataType:"script"}):ah.globalEval(c.text||c.textContent||c.innerHTML||"");c.parentNode&&c.parentNode.removeChild(c)}function ap(s,c,K,F,G,w){var A=s.length;if(typeof c==="object"){for(var J in c){ap(s,J,c[J],F,G,K)}return s}if(K!==I){F=!w&&F&&ah.isFunction(K);for(J=0;J<A;J++){G(s[J],c,F?K.call(s[J],J,G(s[J],c)):K,w)}return s}return A?G(s[0],c):I}function aF(){return(new Date).getTime()}function ao(){return false}function am(){return true}function aK(s,c,w){w[0].type=s;return ah.event.handle.apply(c,w)}function ag(O){var N,L=[],J=[],K=arguments,F,G,s,A,w,c;G=ah.data(this,"events");if(!(O.liveFired===this||!G||!G.live||O.button&&O.type==="click")){O.liveFired=this;var P=G.live.slice(0);for(A=0;A<P.length;A++){G=P[A];G.origType.replace(az,"")===O.type?J.push(G.selector):P.splice(A--,1)}F=ah(O.target).closest(J,O.currentTarget);w=0;for(c=F.length;w<c;w++){for(A=0;A<P.length;A++){G=P[A];if(F[w].selector===G.selector){s=F[w].elem;J=null;if(G.preType==="mouseenter"||G.preType==="mouseleave"){J=ah(O.relatedTarget).closest(G.selector)[0]}if(!J||J!==s){L.push({elem:s,handleObj:G})}}}}w=0;for(c=L.length;w<c;w++){F=L[w];O.currentTarget=F.elem;O.data=F.handleObj.data;O.handleObj=F.handleObj;if(F.handleObj.origHandler.apply(F.elem,K)===false){N=false;break}}return N}}function z(s,c){return"live."+(s&&s!=="*"?s+".":"")+c.replace(/\./g,"`").replace(/ /g,"&")}function l(c){return !c||!c.parentNode||c.parentNode.nodeType===11}function bj(s,c){var w=0;c.each(function(){if(this.nodeName===(s[w]&&s[w].nodeName)){var G=ah.data(s[w++]),J=ah.data(this,G);if(G=G&&G.events){delete J.handle;J.events={};for(var A in G){for(var F in G[A]){ah.event.add(this,A,G[A][F],G[A][F].data)}}}}})}function a3(s,c,G){var A,F,w;c=c&&c[0]?c[0].ownerDocument||c[0]:M;if(s.length===1&&typeof s[0]==="string"&&s[0].length<512&&c===M&&!aP.test(s[0])&&(ah.support.checkClone||!ak.test(s[0]))){F=true;if(w=ah.fragments[s[0]]){if(w!==1){A=w}}}if(!A){A=c.createDocumentFragment();ah.clean(s,c,A,G)}if(F){ah.fragments[s[0]]=w?A:1}return{fragment:A,cacheable:F}}function aC(s,c){var w={};ah.each(D.concat.apply([],D.slice(0,c)),function(){w[this]=s});return w}function o(c){return"scrollTo" in c&&c.document?c:c.nodeType===9?c.defaultView||c.parentWindow:false}var ah=function(s,c){return new ah.fn.init(s,c)},p=aO.jQuery,d=aO.$,M=aO.document,at,a7=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,aT=/^.[^:#\[\.,]*$/,an=/\S/,H=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,q=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,ax=navigator.userAgent,b=false,av=[],aB,a1=Object.prototype.toString,aV=Object.prototype.hasOwnProperty,ay=Array.prototype.push,au=Array.prototype.slice,a6=Array.prototype.indexOf;ah.fn=ah.prototype={init:function(s,c){var A,w;if(!s){return this}if(s.nodeType){this.context=this[0]=s;this.length=1;return this}if(s==="body"&&!c){this.context=M;this[0]=M.body;this.selector="body";this.length=1;return this}if(typeof s==="string"){if((A=a7.exec(s))&&(A[1]||!c)){if(A[1]){w=c?c.ownerDocument||c:M;if(s=q.exec(s)){if(ah.isPlainObject(c)){s=[M.createElement(s[1])];ah.fn.attr.call(s,c,true)}else{s=[w.createElement(s[1])]}}else{s=a3([A[1]],[w]);s=(s.cacheable?s.fragment.cloneNode(true):s.fragment).childNodes}return ah.merge(this,s)}else{if(c=M.getElementById(A[2])){if(c.id!==A[2]){return at.find(s)}this.length=1;this[0]=c}this.context=M;this.selector=s;return this}}else{if(!c&&/^\w+$/.test(s)){this.selector=s;this.context=M;s=M.getElementsByTagName(s);return ah.merge(this,s)}else{return !c||c.jquery?(c||at).find(s):ah(c).find(s)}}}else{if(ah.isFunction(s)){return at.ready(s)}}if(s.selector!==I){this.selector=s.selector;this.context=s.context}return ah.makeArray(s,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return au.call(this,0)},get:function(c){return c==null?this.toArray():c<0?this.slice(c)[0]:this[c]},pushStack:function(s,c,A){var w=ah();ah.isArray(s)?ay.apply(w,s):ah.merge(w,s);w.prevObject=this;w.context=this.context;if(c==="find"){w.selector=this.selector+(this.selector?" ":"")+A}else{if(c){w.selector=this.selector+"."+c+"("+A+")"}}return w},each:function(s,c){return ah.each(this,s,c)},ready:function(c){ah.bindReady();if(ah.isReady){c.call(M,ah)}else{av&&av.push(c)}return this},eq:function(c){return c===-1?this.slice(c):this.slice(c,+c+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(au.apply(this,arguments),"slice",au.call(arguments).join(","))},map:function(c){return this.pushStack(ah.map(this,function(s,w){return c.call(s,w,s)}))},end:function(){return this.prevObject||ah(null)},push:ay,sort:[].sort,splice:[].splice};ah.fn.init.prototype=ah.fn;ah.extend=ah.fn.extend=function(){var s=arguments[0]||{},c=1,K=arguments.length,F=false,G,w,A,J;if(typeof s==="boolean"){F=s;s=arguments[1]||{};c=2}if(typeof s!=="object"&&!ah.isFunction(s)){s={}}if(K===c){s=this;--c}for(;c<K;c++){if((G=arguments[c])!=null){for(w in G){A=s[w];J=G[w];if(s!==J){if(F&&J&&(ah.isPlainObject(J)||ah.isArray(J))){A=A&&(ah.isPlainObject(A)||ah.isArray(A))?A:ah.isArray(J)?[]:{};s[w]=ah.extend(F,A,J)}else{if(J!==I){s[w]=J}}}}}}return s};ah.extend({noConflict:function(c){aO.$=d;if(c){aO.jQuery=p}return ah},isReady:false,ready:function(){if(!ah.isReady){if(!M.body){return setTimeout(ah.ready,13)}ah.isReady=true;if(av){for(var s,c=0;s=av[c++];){s.call(M,ah)}av=null}ah.fn.triggerHandler&&ah(M).triggerHandler("ready")}},bindReady:function(){if(!b){b=true;if(M.readyState==="complete"){return ah.ready()}if(M.addEventListener){M.addEventListener("DOMContentLoaded",aB,false);aO.addEventListener("load",ah.ready,false)}else{if(M.attachEvent){M.attachEvent("onreadystatechange",aB);aO.attachEvent("onload",ah.ready);var s=false;try{s=aO.frameElement==null}catch(c){}M.documentElement.doScroll&&s&&a0()}}}},isFunction:function(c){return a1.call(c)==="[object Function]"},isArray:function(c){return a1.call(c)==="[object Array]"},isPlainObject:function(s){if(!s||a1.call(s)!=="[object Object]"||s.nodeType||s.setInterval){return false}if(s.constructor&&!aV.call(s,"constructor")&&!aV.call(s.constructor.prototype,"isPrototypeOf")){return false}var c;for(c in s){}return c===I||aV.call(s,c)},isEmptyObject:function(s){for(var c in s){return false}return true},error:function(c){throw c},parseJSON:function(c){if(typeof c!=="string"||!c){return null}c=ah.trim(c);if(/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aO.JSON&&aO.JSON.parse?aO.JSON.parse(c):(new Function("return "+c))()}else{ah.error("Invalid JSON: "+c)}},noop:function(){},globalEval:function(s){if(s&&an.test(s)){var c=M.getElementsByTagName("head")[0]||M.documentElement,w=M.createElement("script");w.type="text/javascript";if(ah.support.scriptEval){w.appendChild(M.createTextNode(s))}else{w.text=s}c.insertBefore(w,c.firstChild);c.removeChild(w)}},nodeName:function(s,c){return s.nodeName&&s.nodeName.toUpperCase()===c.toUpperCase()},each:function(s,c,J){var F,G=0,w=s.length,A=w===I||ah.isFunction(s);if(J){if(A){for(F in s){if(c.apply(s[F],J)===false){break}}}else{for(;G<w;){if(c.apply(s[G++],J)===false){break}}}}else{if(A){for(F in s){if(c.call(s[F],F,s[F])===false){break}}}else{for(J=s[0];G<w&&c.call(J,G,J)!==false;J=s[++G]){}}}return s},trim:function(c){return(c||"").replace(H,"")},makeArray:function(s,c){c=c||[];if(s!=null){s.length==null||typeof s==="string"||ah.isFunction(s)||typeof s!=="function"&&s.setInterval?ay.call(c,s):ah.merge(c,s)}return c},inArray:function(s,c){if(c.indexOf){return c.indexOf(s)}for(var A=0,w=c.length;A<w;A++){if(c[A]===s){return A}}return -1},merge:function(s,c){var F=s.length,w=0;if(typeof c.length==="number"){for(var A=c.length;w<A;w++){s[F++]=c[w]}}else{for(;c[w]!==I;){s[F++]=c[w++]}}s.length=F;return s},grep:function(s,c,G){for(var A=[],F=0,w=s.length;F<w;F++){!G!==!c(s[F],F)&&A.push(s[F])}return A},map:function(s,c,J){for(var F=[],G,w=0,A=s.length;w<A;w++){G=c(s[w],w,J);if(G!=null){F[F.length]=G}}return F.concat.apply([],F)},guid:1,proxy:function(s,c,w){if(arguments.length===2){if(typeof c==="string"){w=s;s=w[c];c=I}else{if(c&&!ah.isFunction(c)){w=c;c=I}}}if(!c&&s){c=function(){return s.apply(w||this,arguments)}}if(s){c.guid=s.guid=s.guid||c.guid||ah.guid++}return c},uaMatch:function(c){c=c.toLowerCase();c=/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||!/compatible/.test(c)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(c)||[];return{browser:c[1]||"",version:c[2]||"0"}},browser:{}});ax=ah.uaMatch(ax);if(ax.browser){ah.browser[ax.browser]=true;ah.browser.version=ax.version}if(ah.browser.webkit){ah.browser.safari=true}if(a6){ah.inArray=function(s,c){return a6.call(c,s)}}at=ah(M);if(M.addEventListener){aB=function(){M.removeEventListener("DOMContentLoaded",aB,false);ah.ready()}}else{if(M.attachEvent){aB=function(){if(M.readyState==="complete"){M.detachEvent("onreadystatechange",aB);ah.ready()}}}}(function(){ah.support={};var L=M.documentElement,K=M.createElement("script"),J=M.createElement("div"),F="script"+aF();J.style.display="none";J.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var G=J.getElementsByTagName("*"),w=J.getElementsByTagName("a")[0];if(!(!G||!G.length||!w)){ah.support={leadingWhitespace:J.firstChild.nodeType===3,tbody:!J.getElementsByTagName("tbody").length,htmlSerialize:!!J.getElementsByTagName("link").length,style:/red/.test(w.getAttribute("style")),hrefNormalized:w.getAttribute("href")==="/a",opacity:/^0.55$/.test(w.style.opacity),cssFloat:!!w.style.cssFloat,checkOn:J.getElementsByTagName("input")[0].value==="on",optSelected:M.createElement("select").appendChild(M.createElement("option")).selected,parentNode:J.removeChild(J.appendChild(M.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};K.type="text/javascript";try{K.appendChild(M.createTextNode("window."+F+"=1;"))}catch(A){}L.insertBefore(K,L.firstChild);if(aO[F]){ah.support.scriptEval=true;delete aO[F]}try{delete K.test}catch(c){ah.support.deleteExpando=false}L.removeChild(K);if(J.attachEvent&&J.fireEvent){J.attachEvent("onclick",function s(){ah.support.noCloneEvent=false;J.detachEvent("onclick",s)});J.cloneNode(true).fireEvent("onclick")}J=M.createElement("div");J.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";L=M.createDocumentFragment();L.appendChild(J.firstChild);ah.support.checkClone=L.cloneNode(true).cloneNode(true).lastChild.checked;ah(function(){var N=M.createElement("div");N.style.width=N.style.paddingLeft="1px";M.body.appendChild(N);ah.boxModel=ah.support.boxModel=N.offsetWidth===2;M.body.removeChild(N).style.display="none"});L=function(N){var P=M.createElement("div");N="on"+N;var O=N in P;if(!O){P.setAttribute(N,"return;");O=typeof P[N]==="function"}return O};ah.support.submitBubbles=L("submit");ah.support.changeBubbles=L("change");L=K=J=G=w=null}})();ah.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var aH="jQuery"+aF(),e=0,aS={};ah.extend({cache:{},expando:aH,noData:{embed:true,object:true,applet:true},data:function(s,c,F){if(!(s.nodeName&&ah.noData[s.nodeName.toLowerCase()])){s=s==aO?aS:s;var w=s[aH],A=ah.cache;if(!w&&typeof c==="string"&&F===I){return null}w||(w=++e);if(typeof c==="object"){s[aH]=w;A[w]=ah.extend(true,{},c)}else{if(!A[w]){s[aH]=w;A[w]={}}}s=A[w];if(F!==I){s[c]=F}return typeof c==="string"?s[c]:s}},removeData:function(s,c){if(!(s.nodeName&&ah.noData[s.nodeName.toLowerCase()])){s=s==aO?aS:s;var F=s[aH],w=ah.cache,A=w[F];if(c){if(A){delete A[c];ah.isEmptyObject(A)&&ah.removeData(s)}}else{if(ah.support.deleteExpando){delete s[ah.expando]}else{s.removeAttribute&&s.removeAttribute(ah.expando)}delete w[F]}}}});ah.fn.extend({data:function(s,c){if(typeof s==="undefined"&&this.length){return ah.data(this[0])}else{if(typeof s==="object"){return this.each(function(){ah.data(this,s)})}}var A=s.split(".");A[1]=A[1]?"."+A[1]:"";if(c===I){var w=this.triggerHandler("getData"+A[1]+"!",[A[0]]);if(w===I&&this.length){w=ah.data(this[0],s)}return w===I&&A[1]?this.data(A[0]):w}else{return this.trigger("setData"+A[1]+"!",[A[0],c]).each(function(){ah.data(this,s,c)})}},removeData:function(c){return this.each(function(){ah.removeData(this,c)})}});ah.extend({queue:function(s,c,A){if(s){c=(c||"fx")+"queue";var w=ah.data(s,c);if(!A){return w||[]}if(!w||ah.isArray(A)){w=ah.data(s,c,ah.makeArray(A))}else{w.push(A)}return w}},dequeue:function(s,c){c=c||"fx";var A=ah.queue(s,c),w=A.shift();if(w==="inprogress"){w=A.shift()}if(w){c==="fx"&&A.unshift("inprogress");w.call(s,function(){ah.dequeue(s,c)})}}});ah.fn.extend({queue:function(s,c){if(typeof s!=="string"){c=s;s="fx"}if(c===I){return ah.queue(this[0],s)}return this.each(function(){var w=ah.queue(this,s,c);s==="fx"&&w[0]!=="inprogress"&&ah.dequeue(this,s)})},dequeue:function(c){return this.each(function(){ah.dequeue(this,c)})},delay:function(s,c){s=ah.fx?ah.fx.speeds[s]||s:s;c=c||"fx";return this.queue(c,function(){var w=this;setTimeout(function(){ah.dequeue(w,c)},s)})},clearQueue:function(c){return this.queue(c||"fx",[])}});var be=/[\n\t]/g,U=/\s+/,a8=/\r/g,aM=/href|src|style/,aU=/(button|input)/i,aw=/(button|input|object|select|textarea)/i,S=/^(a|area)$/i,aY=/radio|checkbox/;ah.fn.extend({attr:function(s,c){return ap(this,s,c,true,ah.attr)},removeAttr:function(c){return this.each(function(){ah.attr(this,c,"");this.nodeType===1&&this.removeAttribute(c)})},addClass:function(L){if(ah.isFunction(L)){return this.each(function(O){var N=ah(this);N.addClass(L.call(this,O,N.attr("class")))})}if(L&&typeof L==="string"){for(var K=(L||"").split(U),J=0,F=this.length;J<F;J++){var G=this[J];if(G.nodeType===1){if(G.className){for(var w=" "+G.className+" ",A=G.className,c=0,s=K.length;c<s;c++){if(w.indexOf(" "+K[c]+" ")<0){A+=" "+K[c]}}G.className=ah.trim(A)}else{G.className=L}}}}return this},removeClass:function(s){if(ah.isFunction(s)){return this.each(function(L){var N=ah(this);N.removeClass(s.call(this,L,N.attr("class")))})}if(s&&typeof s==="string"||s===I){for(var c=(s||"").split(U),K=0,F=this.length;K<F;K++){var G=this[K];if(G.nodeType===1&&G.className){if(s){for(var w=(" "+G.className+" ").replace(be," "),A=0,J=c.length;A<J;A++){w=w.replace(" "+c[A]+" "," ")}G.className=ah.trim(w)}else{G.className=""}}}}return this},toggleClass:function(s,c){var A=typeof s,w=typeof c==="boolean";if(ah.isFunction(s)){return this.each(function(G){var F=ah(this);F.toggleClass(s.call(this,G,F.attr("class"),c),c)})}return this.each(function(){if(A==="string"){for(var K,G=0,J=ah(this),L=c,F=s.split(U);K=F[G++];){L=w?L:!J.hasClass(K);J[L?"addClass":"removeClass"](K)}}else{if(A==="undefined"||A==="boolean"){this.className&&ah.data(this,"__className__",this.className);this.className=this.className||s===false?"":ah.data(this,"__className__")||""}}})},hasClass:function(s){s=" "+s+" ";for(var c=0,w=this.length;c<w;c++){if((" "+this[c].className+" ").replace(be," ").indexOf(s)>-1){return true}}return false},val:function(s){if(s===I){var c=this[0];if(c){if(ah.nodeName(c,"option")){return(c.attributes.value||{}).specified?c.value:c.text}if(ah.nodeName(c,"select")){var K=c.selectedIndex,F=[],G=c.options;c=c.type==="select-one";if(K<0){return null}var w=c?K:0;for(K=c?K+1:G.length;w<K;w++){var A=G[w];if(A.selected){s=ah(A).val();if(c){return s}F.push(s)}}return F}if(aY.test(c.type)&&!ah.support.checkOn){return c.getAttribute("value")===null?"on":c.value}return(c.value||"").replace(a8,"")}return I}var J=ah.isFunction(s);return this.each(function(L){var P=ah(this),O=s;if(this.nodeType===1){if(J){O=s.call(this,L,P.val())}if(typeof O==="number"){O+=""}if(ah.isArray(O)&&aY.test(this.type)){this.checked=ah.inArray(P.val(),O)>=0}else{if(ah.nodeName(this,"select")){var N=ah.makeArray(O);ah("option",this).each(function(){this.selected=ah.inArray(ah(this).val(),N)>=0});if(!N.length){this.selectedIndex=-1}}else{this.value=O}}}})}});ah.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(s,c,G,A){if(!s||s.nodeType===3||s.nodeType===8){return I}if(A&&c in ah.attrFn){return ah(s)[c](G)}A=s.nodeType!==1||!ah.isXMLDoc(s);var F=G!==I;c=A&&ah.props[c]||c;if(s.nodeType===1){var w=aM.test(c);if(c in s&&A&&!w){if(F){c==="type"&&aU.test(s.nodeName)&&s.parentNode&&ah.error("type property can't be changed");s[c]=G}if(ah.nodeName(s,"form")&&s.getAttributeNode(c)){return s.getAttributeNode(c).nodeValue}if(c==="tabIndex"){return(c=s.getAttributeNode("tabIndex"))&&c.specified?c.value:aw.test(s.nodeName)||S.test(s.nodeName)&&s.href?0:I}return s[c]}if(!ah.support.style&&A&&c==="style"){if(F){s.style.cssText=""+G}return s.style.cssText}F&&s.setAttribute(c,""+G);s=!ah.support.hrefNormalized&&A&&w?s.getAttribute(c,2):s.getAttribute(c);return s===null?I:s}return ah.style(s,c,G)}});var az=/\.(.*)$/,r=function(c){return c.replace(/[^\w\s\.\|`]/g,function(s){return"\\"+s})};ah.event={add:function(P,O,L,J){if(!(P.nodeType===3||P.nodeType===8)){if(P.setInterval&&P!==aO&&!P.frameElement){P=aO}var K,F;if(L.handler){K=L;L=K.handler}if(!L.guid){L.guid=ah.guid++}if(F=ah.data(P)){var G=F.events=F.events||{},s=F.handle;if(!s){F.handle=s=function(){return typeof ah!=="undefined"&&!ah.event.triggered?ah.event.handle.apply(s.elem,arguments):I}}s.elem=P;O=O.split(" ");for(var A,w=0,c;A=O[w++];){F=K?ah.extend({},K):{handler:L,data:J};if(A.indexOf(".")>-1){c=A.split(".");A=c.shift();F.namespace=c.slice(0).sort().join(".")}else{c=[];F.namespace=""}F.type=A;F.guid=L.guid;var Q=G[A],N=ah.event.special[A]||{};if(!Q){Q=G[A]=[];if(!N.setup||N.setup.call(P,J,c,s)===false){if(P.addEventListener){P.addEventListener(A,s,false)}else{P.attachEvent&&P.attachEvent("on"+A,s)}}}if(N.add){N.add.call(P,F);if(!F.handler.guid){F.handler.guid=L.guid}}Q.push(F);ah.event.global[A]=true}P=null}}},global:{},remove:function(R,Q,O,L){if(!(R.nodeType===3||R.nodeType===8)){var N,J=0,K,A,G,F,c,T,P=ah.data(R),s=P&&P.events;if(P&&s){if(Q&&Q.type){O=Q.handler;Q=Q.type}if(!Q||typeof Q==="string"&&Q.charAt(0)==="."){Q=Q||"";for(N in s){ah.event.remove(R,N+Q)}}else{for(Q=Q.split(" ");N=Q[J++];){F=N;K=N.indexOf(".")<0;A=[];if(!K){A=N.split(".");N=A.shift();G=new RegExp("(^|\\.)"+ah.map(A.slice(0).sort(),r).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(c=s[N]){if(O){F=ah.event.special[N]||{};for(w=L||0;w<c.length;w++){T=c[w];if(O.guid===T.guid){if(K||G.test(T.namespace)){L==null&&c.splice(w--,1);F.remove&&F.remove.call(R,T)}if(L!=null){break}}}if(c.length===0||L!=null&&c.length===1){if(!F.teardown||F.teardown.call(R,A)===false){aG(R,N,P.handle)}delete s[N]}}else{for(var w=0;w<c.length;w++){T=c[w];if(K||G.test(T.namespace)){ah.event.remove(R,F,T.handler,w);c.splice(w--,1)}}}}}if(ah.isEmptyObject(s)){if(Q=P.handle){Q.elem=null}delete P.events;delete P.handle;ah.isEmptyObject(P)&&ah.removeData(R)}}}}},trigger:function(N,L,K,G){var J=N.type||N;if(!G){N=typeof N==="object"?N[aH]?N:ah.extend(ah.Event(J),N):ah.Event(J);if(J.indexOf("!")>=0){N.type=J=J.slice(0,-1);N.exclusive=true}if(!K){N.stopPropagation();ah.event.global[J]&&ah.each(ah.cache,function(){this.events&&this.events[J]&&ah.event.trigger(N,L,this.handle.elem)})}if(!K||K.nodeType===3||K.nodeType===8){return I}N.result=I;N.target=K;L=ah.makeArray(L);L.unshift(N)}N.currentTarget=K;(G=ah.data(K,"handle"))&&G.apply(K,L);G=K.parentNode||K.ownerDocument;try{if(!(K&&K.nodeName&&ah.noData[K.nodeName.toLowerCase()])){if(K["on"+J]&&K["on"+J].apply(K,L)===false){N.result=false}}}catch(A){}if(!N.isPropagationStopped()&&G){ah.event.trigger(N,L,G,true)}else{if(!N.isDefaultPrevented()){G=N.target;var F,c=ah.nodeName(G,"a")&&J==="click",w=ah.event.special[J]||{};if((!w._default||w._default.call(K,N)===false)&&!c&&!(G&&G.nodeName&&ah.noData[G.nodeName.toLowerCase()])){try{if(G[J]){if(F=G["on"+J]){G["on"+J]=null}ah.event.triggered=true;G[J]()}}catch(s){}if(F){G["on"+J]=F}ah.event.triggered=false}}}},handle:function(s){var c,J,F,G;s=arguments[0]=ah.event.fix(s||aO.event);s.currentTarget=this;c=s.type.indexOf(".")<0&&!s.exclusive;if(!c){J=s.type.split(".");s.type=J.shift();F=new RegExp("(^|\\.)"+J.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}G=ah.data(this,"events");J=G[s.type];if(G&&J){J=J.slice(0);G=0;for(var w=J.length;G<w;G++){var A=J[G];if(c||F.test(A.namespace)){s.handler=A.handler;s.data=A.data;s.handleObj=A;A=A.handler.apply(this,arguments);if(A!==I){s.result=A;if(A===false){s.preventDefault();s.stopPropagation()}}if(s.isImmediatePropagationStopped()){break}}}}return s.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(s){if(s[aH]){return s}var c=s;s=ah.Event(c);for(var A=this.props.length,w;A;){w=this.props[--A];s[w]=c[w]}if(!s.target){s.target=s.srcElement||M}if(s.target.nodeType===3){s.target=s.target.parentNode}if(!s.relatedTarget&&s.fromElement){s.relatedTarget=s.fromElement===s.target?s.toElement:s.fromElement}if(s.pageX==null&&s.clientX!=null){c=M.documentElement;A=M.body;s.pageX=s.clientX+(c&&c.scrollLeft||A&&A.scrollLeft||0)-(c&&c.clientLeft||A&&A.clientLeft||0);s.pageY=s.clientY+(c&&c.scrollTop||A&&A.scrollTop||0)-(c&&c.clientTop||A&&A.clientTop||0)}if(!s.which&&(s.charCode||s.charCode===0?s.charCode:s.keyCode)){s.which=s.charCode||s.keyCode}if(!s.metaKey&&s.ctrlKey){s.metaKey=s.ctrlKey}if(!s.which&&s.button!==I){s.which=s.button&1?1:s.button&2?3:s.button&4?2:0}return s},guid:100000000,proxy:ah.proxy,special:{ready:{setup:ah.bindReady,teardown:ah.noop},live:{add:function(c){ah.event.add(this,c.origType,ah.extend({},c,{handler:ag}))},remove:function(s){var c=true,w=s.origType.replace(az,"");ah.each(ah.data(this,"events").live||[],function(){if(w===this.origType.replace(az,"")){return c=false}});c&&ah.event.remove(this,s.origType,ag)}},beforeunload:{setup:function(s,c,w){if(this.setInterval){this.onbeforeunload=w}return false},teardown:function(s,c){if(this.onbeforeunload===c){this.onbeforeunload=null}}}}};var aG=M.removeEventListener?function(s,c,w){s.removeEventListener(c,w,false)}:function(s,c,w){s.detachEvent("on"+c,w)};ah.Event=function(c){if(!this.preventDefault){return new ah.Event(c)}if(c&&c.type){this.originalEvent=c;this.type=c.type}else{this.type=c}this.timeStamp=aF();this[aH]=true};ah.Event.prototype={preventDefault:function(){this.isDefaultPrevented=am;var c=this.originalEvent;if(c){c.preventDefault&&c.preventDefault();c.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=am;var c=this.originalEvent;if(c){c.stopPropagation&&c.stopPropagation();c.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=am;this.stopPropagation()},isDefaultPrevented:ao,isPropagationStopped:ao,isImmediatePropagationStopped:ao};var ae=function(s){var c=s.relatedTarget;try{for(;c&&c!==this;){c=c.parentNode}if(c!==this){s.type=s.data;ah.event.handle.apply(this,arguments)}}catch(w){}},x=function(c){c.type=c.data;ah.event.handle.apply(this,arguments)};ah.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(s,c){ah.event.special[s]={setup:function(w){ah.event.add(this,c,w&&w.selector?x:ae,s)},teardown:function(w){ah.event.remove(this,c,w&&w.selector?x:ae)}}});if(!ah.support.submitBubbles){ah.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!=="form"){ah.event.add(this,"click.specialSubmit",function(s){var c=s.target,w=c.type;if((w==="submit"||w==="image")&&ah(c).closest("form").length){return aK("submit",this,arguments)}});ah.event.add(this,"keypress.specialSubmit",function(s){var c=s.target,w=c.type;if((w==="text"||w==="password")&&ah(c).closest("form").length&&s.keyCode===13){return aK("submit",this,arguments)}})}else{return false}},teardown:function(){ah.event.remove(this,".specialSubmit")}}}if(!ah.support.changeBubbles){var t=/textarea|input|select/i,g,j=function(s){var c=s.type,w=s.value;if(c==="radio"||c==="checkbox"){w=s.checked}else{if(c==="select-multiple"){w=s.selectedIndex>-1?ah.map(s.options,function(A){return A.selected}).join("-"):""}else{if(s.nodeName.toLowerCase()==="select"){w=s.selectedIndex}}}return w},bd=function(s,c){var F=s.target,w,A;if(!(!t.test(F.nodeName)||F.readOnly)){w=ah.data(F,"_change_data");A=j(F);if(s.type!=="focusout"||F.type!=="radio"){ah.data(F,"_change_data",A)}if(!(w===I||A===w)){if(w!=null||A){s.type="change";return ah.event.trigger(s,c,F)}}}};ah.event.special.change={filters:{focusout:bd,click:function(s){var c=s.target,w=c.type;if(w==="radio"||w==="checkbox"||c.nodeName.toLowerCase()==="select"){return bd.call(this,s)}},keydown:function(s){var c=s.target,w=c.type;if(s.keyCode===13&&c.nodeName.toLowerCase()!=="textarea"||s.keyCode===32&&(w==="checkbox"||w==="radio")||w==="select-multiple"){return bd.call(this,s)}},beforeactivate:function(c){c=c.target;ah.data(c,"_change_data",j(c))}},setup:function(){if(this.type==="file"){return false}for(var c in g){ah.event.add(this,c+".specialChange",g[c])}return t.test(this.nodeName)},teardown:function(){ah.event.remove(this,".specialChange");return t.test(this.nodeName)}};g=ah.event.special.change.filters}M.addEventListener&&ah.each({focus:"focusin",blur:"focusout"},function(s,c){function w(A){A=ah.event.fix(A);A.type=c;return ah.event.handle.call(this,A)}ah.event.special[c]={setup:function(){this.addEventListener(s,w,true)},teardown:function(){this.removeEventListener(s,w,true)}}});ah.each(["bind","one"],function(s,c){ah.fn[c]=function(K,F,G){if(typeof K==="object"){for(var w in K){this[c](w,F,K[w],G)}return this}if(ah.isFunction(F)){G=F;F=I}var A=c==="one"?ah.proxy(G,function(L){ah(this).unbind(L,A);return G.apply(this,arguments)}):G;if(K==="unload"&&c!=="one"){this.one(K,F,G)}else{w=0;for(var J=this.length;w<J;w++){ah.event.add(this[w],K,A,F)}}return this}});ah.fn.extend({unbind:function(s,c){if(typeof s==="object"&&!s.preventDefault){for(var A in s){this.unbind(A,s[A])}}else{A=0;for(var w=this.length;A<w;A++){ah.event.remove(this[A],s,c)}}return this},delegate:function(s,c,A,w){return this.live(c,A,w,s)},undelegate:function(s,c,w){return arguments.length===0?this.unbind("live"):this.die(c,null,w,s)},trigger:function(s,c){return this.each(function(){ah.event.trigger(s,c,this)})},triggerHandler:function(s,c){if(this[0]){s=ah.Event(s);s.preventDefault();s.stopPropagation();ah.event.trigger(s,c,this[0]);return s.result}},toggle:function(s){for(var c=arguments,w=1;w<c.length;){ah.proxy(s,c[w++])}return this.click(ah.proxy(s,function(A){var F=(ah.data(this,"lastToggle"+s.guid)||0)%w;ah.data(this,"lastToggle"+s.guid,F+1);A.preventDefault();return c[F].apply(this,arguments)||false}))},hover:function(s,c){return this.mouseenter(s).mouseleave(c||s)}});var bh={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};ah.each(["live","die"],function(s,c){ah.fn[c]=function(O,L,N,J){var K,A=0,G,F,w=J||this.selector,P=J?this:ah(this.context);if(ah.isFunction(L)){N=L;L=I}for(O=(O||"").split(" ");(K=O[A++])!=null;){J=az.exec(K);G="";if(J){G=J[0];K=K.replace(az,"")}if(K==="hover"){O.push("mouseenter"+G,"mouseleave"+G)}else{F=K;if(K==="focus"||K==="blur"){O.push(bh[K]+G);K+=G}else{K=(bh[K]||K)+G}c==="live"?P.each(function(){ah.event.add(this,z(K,w),{data:L,selector:w,handler:N,origType:K,origHandler:N,preType:F})}):P.unbind(z(K,w),N)}}return this}});ah.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(s,c){ah.fn[c]=function(w){return w?this.bind(c,w):this.trigger(c)};if(ah.attrFn){ah.attrFn[c]=true}});aO.attachEvent&&!aO.addEventListener&&aO.attachEvent("onunload",function(){for(var s in ah.cache){if(ah.cache[s].handle){try{ah.event.remove(ah.cache[s].handle.elem)}catch(c){}}}});(function(){function W(ab){for(var aa="",Z,Y=0;ab[Y];Y++){Z=ab[Y];if(Z.nodeType===3||Z.nodeType===4){aa+=Z.nodeValue}else{if(Z.nodeType!==8){aa+=W(Z.childNodes)}}}return aa}function V(bb,ba,ab,aa,Y,Z){Y=0;for(var bm=aa.length;Y<bm;Y++){var bn=aa[Y];if(bn){bn=bn[bb];for(var bl=false;bn;){if(bn.sizcache===ab){bl=aa[bn.sizset];break}if(bn.nodeType===1&&!Z){bn.sizcache=ab;bn.sizset=Y}if(bn.nodeName.toLowerCase()===ba){bl=bn;break}bn=bn[bb]}aa[Y]=bl}}}function T(bb,ba,ab,aa,Y,Z){Y=0;for(var bm=aa.length;Y<bm;Y++){var bn=aa[Y];if(bn){bn=bn[bb];for(var bl=false;bn;){if(bn.sizcache===ab){bl=aa[bn.sizset];break}if(bn.nodeType===1){if(!Z){bn.sizcache=ab;bn.sizset=Y}if(typeof ba!=="string"){if(bn===ba){bl=true;break}}else{if(N.filter(ba,[bn]).length>0){bl=bn;break}}}bn=bn[bb]}aa[Y]=bl}}}var Q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,R=0,O=Object.prototype.toString,P=false,K=true;[0,0].sort(function(){K=false;return 0});var N=function(bm,bl,ba,ab){ba=ba||[];var Z=bl=bl||M;if(bl.nodeType!==1&&bl.nodeType!==9){return[]}if(!bm||typeof bm!=="string"){return ba}for(var aa=[],br,bs,bo,bb,bq=true,bn=s(bl),bp=bm;(Q.exec(""),br=Q.exec(bp))!==null;){bp=br[3];aa.push(br[1]);if(br[2]){bb=br[3];break}}if(aa.length>1&&G.exec(bm)){if(aa.length===2&&L.relative[aa[0]]){bs=X(aa[0]+aa[1],bl)}else{for(bs=L.relative[aa[0]]?[bl]:N(aa.shift(),bl);aa.length;){bm=aa.shift();if(L.relative[bm]){bm+=aa.shift()}bs=X(bm,bs)}}}else{if(!ab&&aa.length>1&&bl.nodeType===9&&!bn&&L.match.ID.test(aa[0])&&!L.match.ID.test(aa[aa.length-1])){br=N.find(aa.shift(),bl,bn);bl=br.expr?N.filter(br.expr,br.set)[0]:br.set[0]}if(bl){br=ab?{expr:aa.pop(),set:c(ab)}:N.find(aa.pop(),aa.length===1&&(aa[0]==="~"||aa[0]==="+")&&bl.parentNode?bl.parentNode:bl,bn);bs=br.expr?N.filter(br.expr,br.set):br.set;if(aa.length>0){bo=c(bs)}else{bq=false}for(;aa.length;){var Y=aa.pop();br=Y;if(L.relative[Y]){br=aa.pop()}else{Y=""}if(br==null){br=bl}L.relative[Y](bo,br,bn)}}else{bo=[]}}bo||(bo=bs);bo||N.error(Y||bm);if(O.call(bo)==="[object Array]"){if(bq){if(bl&&bl.nodeType===1){for(bm=0;bo[bm]!=null;bm++){if(bo[bm]&&(bo[bm]===true||bo[bm].nodeType===1&&A(bl,bo[bm]))){ba.push(bs[bm])}}}else{for(bm=0;bo[bm]!=null;bm++){bo[bm]&&bo[bm].nodeType===1&&ba.push(bs[bm])}}}else{ba.push.apply(ba,bo)}}else{c(bo,ba)}if(bb){N(bb,Z,ba,ab);N.uniqueSort(ba)}return ba};N.uniqueSort=function(Z){if(J){P=K;Z.sort(J);if(P){for(var Y=1;Y<Z.length;Y++){Z[Y]===Z[Y-1]&&Z.splice(Y--,1)}}}return Z};N.matches=function(Z,Y){return N(Z,null,null,Y)};N.find=function(bb,ba,ab){var aa,Y;if(!bb){return[]}for(var Z=0,bm=L.order.length;Z<bm;Z++){var bn=L.order[Z];if(Y=L.leftMatch[bn].exec(bb)){var bl=Y[1];Y.splice(1,1);if(bl.substr(bl.length-1)!=="\\"){Y[1]=(Y[1]||"").replace(/\\/g,"");aa=L.find[bn](Y,ba,ab);if(aa!=null){bb=bb.replace(L.match[bn],"");break}}}}aa||(aa=ba.getElementsByTagName("*"));return{set:aa,expr:bb}};N.filter=function(bn,bm,bb,ab){for(var Z=bn,aa=[],bt=bm,bu,bq,bl=bm&&bm[0]&&s(bm[0]);bn&&bm.length;){for(var bs in L.filter){if((bu=L.leftMatch[bs].exec(bn))!=null&&bu[2]){var bo=L.filter[bs],br,Y;Y=bu[1];bq=false;bu.splice(1,1);if(Y.substr(Y.length-1)!=="\\"){if(bt===aa){aa=[]}if(L.preFilter[bs]){if(bu=L.preFilter[bs](bu,bt,bb,aa,ab,bl)){if(bu===true){continue}}else{bq=br=true}}if(bu){for(var ba=0;(Y=bt[ba])!=null;ba++){if(Y){br=bo(Y,bu,ba,bt);var bp=ab^!!br;if(bb&&br!=null){if(bp){bq=true}else{bt[ba]=false}}else{if(bp){aa.push(Y);bq=true}}}}}if(br!==I){bb||(bt=aa);bn=bn.replace(L.match[bs],"");if(!bq){return[]}break}}}}if(bn===Z){if(bq==null){N.error(bn)}else{break}}Z=bn}return bt};N.error=function(Y){throw"Syntax error, unrecognized expression: "+Y};var L=N.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(Y){return Y.getAttribute("href")}},relative:{"+":function(ab,aa){var Z=typeof aa==="string",Y=Z&&!/\W/.test(aa);Z=Z&&!Y;if(Y){aa=aa.toLowerCase()}Y=0;for(var ba=ab.length,bb;Y<ba;Y++){if(bb=ab[Y]){for(;(bb=bb.previousSibling)&&bb.nodeType!==1;){}ab[Y]=Z||bb&&bb.nodeName.toLowerCase()===aa?bb||false:bb===aa}}Z&&N.filter(aa,ab,true)},">":function(ab,aa){var Z=typeof aa==="string";if(Z&&!/\W/.test(aa)){aa=aa.toLowerCase();for(var Y=0,ba=ab.length;Y<ba;Y++){var bb=ab[Y];if(bb){Z=bb.parentNode;ab[Y]=Z.nodeName.toLowerCase()===aa?Z:false}}}else{Y=0;for(ba=ab.length;Y<ba;Y++){if(bb=ab[Y]){ab[Y]=Z?bb.parentNode:bb.parentNode===aa}}Z&&N.filter(aa,ab,true)}},"":function(ab,aa,Z){var Y=R++,ba=T;if(typeof aa==="string"&&!/\W/.test(aa)){var bb=aa=aa.toLowerCase();ba=V}ba("parentNode",aa,Y,ab,bb,Z)},"~":function(ab,aa,Z){var Y=R++,ba=T;if(typeof aa==="string"&&!/\W/.test(aa)){var bb=aa=aa.toLowerCase();ba=V}ba("previousSibling",aa,Y,ab,bb,Z)}},find:{ID:function(aa,Z,Y){if(typeof Z.getElementById!=="undefined"&&!Y){return(aa=Z.getElementById(aa[1]))?[aa]:[]}},NAME:function(ab,aa){if(typeof aa.getElementsByName!=="undefined"){var Z=[];aa=aa.getElementsByName(ab[1]);for(var Y=0,ba=aa.length;Y<ba;Y++){aa[Y].getAttribute("name")===ab[1]&&Z.push(aa[Y])}return Z.length===0?null:Z}},TAG:function(Z,Y){return Y.getElementsByTagName(Z[1])}},preFilter:{CLASS:function(ba,ab,Z,Y,bb,bl){ba=" "+ba[1].replace(/\\/g,"")+" ";if(bl){return ba}bl=0;for(var aa;(aa=ab[bl])!=null;bl++){if(aa){if(bb^(aa.className&&(" "+aa.className+" ").replace(/[\t\n]/g," ").indexOf(ba)>=0)){Z||Y.push(aa)}else{if(Z){ab[bl]=false}}}}return false},ID:function(Y){return Y[1].replace(/\\/g,"")},TAG:function(Y){return Y[1].toLowerCase()},CHILD:function(Z){if(Z[1]==="nth"){var Y=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(Z[2]==="even"&&"2n"||Z[2]==="odd"&&"2n+1"||!/\D/.test(Z[2])&&"0n+"+Z[2]||Z[2]);Z[2]=Y[1]+(Y[2]||1)-0;Z[3]=Y[3]-0}Z[0]=R++;return Z},ATTR:function(ab,aa,Z,Y,ba,bb){aa=ab[1].replace(/\\/g,"");if(!bb&&L.attrMap[aa]){ab[1]=L.attrMap[aa]}if(ab[2]==="~="){ab[4]=" "+ab[4]+" "}return ab},PSEUDO:function(ab,aa,Z,Y,ba){if(ab[1]==="not"){if((Q.exec(ab[3])||"").length>1||/^\w/.test(ab[3])){ab[3]=N(ab[3],null,null,aa)}else{ab=N.filter(ab[3],aa,Z,true^ba);Z||Y.push.apply(Y,ab);return false}}else{if(L.match.POS.test(ab[0])||L.match.CHILD.test(ab[0])){return true}}return ab},POS:function(Y){Y.unshift(true);return Y}},filters:{enabled:function(Y){return Y.disabled===false&&Y.type!=="hidden"},disabled:function(Y){return Y.disabled===true},checked:function(Y){return Y.checked===true},selected:function(Y){return Y.selected===true},parent:function(Y){return !!Y.firstChild},empty:function(Y){return !Y.firstChild},has:function(aa,Z,Y){return !!N(Y[3],aa).length},header:function(Y){return/h\d/i.test(Y.nodeName)},text:function(Y){return"text"===Y.type},radio:function(Y){return"radio"===Y.type},checkbox:function(Y){return"checkbox"===Y.type},file:function(Y){return"file"===Y.type},password:function(Y){return"password"===Y.type},submit:function(Y){return"submit"===Y.type},image:function(Y){return"image"===Y.type},reset:function(Y){return"reset"===Y.type},button:function(Y){return"button"===Y.type||Y.nodeName.toLowerCase()==="button"},input:function(Y){return/input|select|textarea|button/i.test(Y.nodeName)}},setFilters:{first:function(Z,Y){return Y===0},last:function(ab,aa,Z,Y){return aa===Y.length-1},even:function(Z,Y){return Y%2===0},odd:function(Z,Y){return Y%2===1},lt:function(aa,Z,Y){return Z<Y[3]-0},gt:function(aa,Z,Y){return Z>Y[3]-0},nth:function(aa,Z,Y){return Y[3]-0===Z},eq:function(aa,Z,Y){return Y[3]-0===Z}},filter:{PSEUDO:function(ab,aa,Z,Y){var ba=aa[1],bb=L.filters[ba];if(bb){return bb(ab,Z,aa,Y)}else{if(ba==="contains"){return(ab.textContent||ab.innerText||W([ab])||"").indexOf(aa[3])>=0}else{if(ba==="not"){aa=aa[3];Z=0;for(Y=aa.length;Z<Y;Z++){if(aa[Z]===ab){return false}}return true}else{N.error("Syntax error, unrecognized expression: "+ba)}}}},CHILD:function(ba,ab){var Z=ab[1],Y=ba;switch(Z){case"only":case"first":for(;Y=Y.previousSibling;){if(Y.nodeType===1){return false}}if(Z==="first"){return true}Y=ba;case"last":for(;Y=Y.nextSibling;){if(Y.nodeType===1){return false}}return true;case"nth":Z=ab[2];var bb=ab[3];if(Z===1&&bb===0){return true}ab=ab[0];var bl=ba.parentNode;if(bl&&(bl.sizcache!==ab||!ba.nodeIndex)){var aa=0;for(Y=bl.firstChild;Y;Y=Y.nextSibling){if(Y.nodeType===1){Y.nodeIndex=++aa}}bl.sizcache=ab}ba=ba.nodeIndex-bb;return Z===0?ba===0:ba%Z===0&&ba/Z>=0}},ID:function(Z,Y){return Z.nodeType===1&&Z.getAttribute("id")===Y},TAG:function(Z,Y){return Y==="*"&&Z.nodeType===1||Z.nodeName.toLowerCase()===Y},CLASS:function(Z,Y){return(" "+(Z.className||Z.getAttribute("class"))+" ").indexOf(Y)>-1},ATTR:function(ab,aa){var Z=aa[1];ab=L.attrHandle[Z]?L.attrHandle[Z](ab):ab[Z]!=null?ab[Z]:ab.getAttribute(Z);Z=ab+"";var Y=aa[2];aa=aa[4];return ab==null?Y==="!=":Y==="="?Z===aa:Y==="*="?Z.indexOf(aa)>=0:Y==="~="?(" "+Z+" ").indexOf(aa)>=0:!aa?Z&&ab!==false:Y==="!="?Z!==aa:Y==="^="?Z.indexOf(aa)===0:Y==="$="?Z.substr(Z.length-aa.length)===aa:Y==="|="?Z===aa||Z.substr(0,aa.length+1)===aa+"-":false},POS:function(ab,aa,Z,Y){var ba=L.setFilters[aa[2]];if(ba){return ba(ab,Z,aa,Y)}}}},G=L.match.POS;for(var w in L.match){L.match[w]=new RegExp(L.match[w].source+/(?![^\[]*\])(?![^\(]*\))/.source);L.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+L.match[w].source.replace(/\\(\d+)/g,function(Z,Y){return"\\"+(Y-0+1)}))}var c=function(Z,Y){Z=Array.prototype.slice.call(Z,0);if(Y){Y.push.apply(Y,Z);return Y}return Z};try{Array.prototype.slice.call(M.documentElement.childNodes,0)}catch(F){c=function(ab,aa){aa=aa||[];if(O.call(ab)==="[object Array]"){Array.prototype.push.apply(aa,ab)}else{if(typeof ab.length==="number"){for(var Z=0,Y=ab.length;Z<Y;Z++){aa.push(ab[Z])}}else{for(Z=0;ab[Z];Z++){aa.push(ab[Z])}}}return aa}}var J;if(M.documentElement.compareDocumentPosition){J=function(Z,Y){if(!Z.compareDocumentPosition||!Y.compareDocumentPosition){if(Z==Y){P=true}return Z.compareDocumentPosition?-1:1}Z=Z.compareDocumentPosition(Y)&4?-1:Z===Y?0:1;if(Z===0){P=true}return Z}}else{if("sourceIndex" in M.documentElement){J=function(Z,Y){if(!Z.sourceIndex||!Y.sourceIndex){if(Z==Y){P=true}return Z.sourceIndex?-1:1}Z=Z.sourceIndex-Y.sourceIndex;if(Z===0){P=true}return Z}}else{if(M.createRange){J=function(ab,aa){if(!ab.ownerDocument||!aa.ownerDocument){if(ab==aa){P=true}return ab.ownerDocument?-1:1}var Z=ab.ownerDocument.createRange(),Y=aa.ownerDocument.createRange();Z.setStart(ab,0);Z.setEnd(ab,0);Y.setStart(aa,0);Y.setEnd(aa,0);ab=Z.compareBoundaryPoints(Range.START_TO_END,Y);if(ab===0){P=true}return ab}}}}(function(){var aa=M.createElement("div"),Z="script"+(new Date).getTime();aa.innerHTML="<a name='"+Z+"'/>";var Y=M.documentElement;Y.insertBefore(aa,Y.firstChild);if(M.getElementById(Z)){L.find.ID=function(ab,ba,bb){if(typeof ba.getElementById!=="undefined"&&!bb){return(ba=ba.getElementById(ab[1]))?ba.id===ab[1]||typeof ba.getAttributeNode!=="undefined"&&ba.getAttributeNode("id").nodeValue===ab[1]?[ba]:I:[]}};L.filter.ID=function(ab,ba){var bb=typeof ab.getAttributeNode!=="undefined"&&ab.getAttributeNode("id");return ab.nodeType===1&&bb&&bb.nodeValue===ba}}Y.removeChild(aa);Y=aa=null})();(function(){var Y=M.createElement("div");Y.appendChild(M.createComment(""));if(Y.getElementsByTagName("*").length>0){L.find.TAG=function(ab,aa){aa=aa.getElementsByTagName(ab[1]);if(ab[1]==="*"){ab=[];for(var Z=0;aa[Z];Z++){aa[Z].nodeType===1&&ab.push(aa[Z])}aa=ab}return aa}}Y.innerHTML="<a href='#'></a>";if(Y.firstChild&&typeof Y.firstChild.getAttribute!=="undefined"&&Y.firstChild.getAttribute("href")!=="#"){L.attrHandle.href=function(Z){return Z.getAttribute("href",2)}}Y=null})();M.querySelectorAll&&function(){var aa=N,Z=M.createElement("div");Z.innerHTML="<p class='TEST'></p>";if(!(Z.querySelectorAll&&Z.querySelectorAll(".TEST").length===0)){N=function(ab,bl,bm,ba){bl=bl||M;if(!ba&&bl.nodeType===9&&!s(bl)){try{return c(bl.querySelectorAll(ab),bm)}catch(bb){}}return aa(ab,bl,bm,ba)};for(var Y in aa){N[Y]=aa[Y]}Z=null}}();(function(){var Y=M.createElement("div");Y.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!Y.getElementsByClassName||Y.getElementsByClassName("e").length===0)){Y.lastChild.className="e";if(Y.getElementsByClassName("e").length!==1){L.order.splice(1,0,"CLASS");L.find.CLASS=function(ab,aa,Z){if(typeof aa.getElementsByClassName!=="undefined"&&!Z){return aa.getElementsByClassName(ab[1])}};Y=null}}})();var A=M.compareDocumentPosition?function(Z,Y){return !!(Z.compareDocumentPosition(Y)&16)}:function(Z,Y){return Z!==Y&&(Z.contains?Z.contains(Y):true)},s=function(Y){return(Y=(Y?Y.ownerDocument||Y:0).documentElement)?Y.nodeName!=="HTML":false},X=function(ab,aa){var Z=[],Y="",ba;for(aa=aa.nodeType?[aa]:aa;ba=L.match.PSEUDO.exec(ab);){Y+=ba[0];ab=ab.replace(L.match.PSEUDO,"")}ab=L.relative[ab]?ab+"*":ab;ba=0;for(var bb=aa.length;ba<bb;ba++){N(ab,aa[ba],Z)}return N.filter(Y,Z)};ah.find=N;ah.expr=N.selectors;ah.expr[":"]=ah.expr.filters;ah.unique=N.uniqueSort;ah.text=W;ah.isXMLDoc=s;ah.contains=A})();var f=/Until$/,a9=/^(?:parents|prevUntil|prevAll)/,aW=/,/;au=Array.prototype.slice;var aL=function(s,c,A){if(ah.isFunction(c)){return ah.grep(s,function(G,F){return !!c.call(G,F,G)===A})}else{if(c.nodeType){return ah.grep(s,function(F){return F===c===A})}else{if(typeof c==="string"){var w=ah.grep(s,function(F){return F.nodeType===1});if(aT.test(c)){return ah.filter(c,w,!A)}else{c=ah.filter(c,w)}}}}return ah.grep(s,function(F){return ah.inArray(F,c)>=0===A})};ah.fn.extend({find:function(s){for(var c=this.pushStack("","find",s),J=0,F=0,G=this.length;F<G;F++){J=c.length;ah.find(s,this[F],c);if(F>0){for(var w=J;w<c.length;w++){for(var A=0;A<J;A++){if(c[A]===c[w]){c.splice(w--,1);break}}}}}return c},has:function(s){var c=ah(s);return this.filter(function(){for(var A=0,w=c.length;A<w;A++){if(ah.contains(this,c[A])){return true}}})},not:function(c){return this.pushStack(aL(this,c,false),"not",c)},filter:function(c){return this.pushStack(aL(this,c,true),"filter",c)},is:function(c){return !!c&&ah.filter(c,this).length>0},closest:function(L,K){if(ah.isArray(L)){var J=[],F=this[0],G,w={},A;if(F&&L.length){G=0;for(var c=L.length;G<c;G++){A=L[G];w[A]||(w[A]=ah.expr.match.POS.test(A)?ah(A,K||this.context):A)}for(;F&&F.ownerDocument&&F!==K;){for(A in w){G=w[A];if(G.jquery?G.index(F)>-1:ah(F).is(G)){J.push({selector:A,elem:F});delete w[A]}}F=F.parentNode}}return J}var s=ah.expr.match.POS.test(L)?ah(L,K||this.context):null;return this.map(function(O,N){for(;N&&N.ownerDocument&&N!==K;){if(s?s.index(N)>-1:ah(N).is(L)){return N}N=N.parentNode}return null})},index:function(c){if(!c||typeof c==="string"){return ah.inArray(this[0],c?ah(c):this.parent().children())}return ah.inArray(c.jquery?c[0]:c,this)},add:function(s,c){s=typeof s==="string"?ah(s,c||this.context):ah.makeArray(s);c=ah.merge(this.get(),s);return this.pushStack(l(s[0])||l(c[0])?c:ah.unique(c))},andSelf:function(){return this.add(this.prevObject)}});ah.each({parent:function(c){return(c=c.parentNode)&&c.nodeType!==11?c:null},parents:function(c){return ah.dir(c,"parentNode")},parentsUntil:function(s,c,w){return ah.dir(s,"parentNode",w)},next:function(c){return ah.nth(c,2,"nextSibling")},prev:function(c){return ah.nth(c,2,"previousSibling")},nextAll:function(c){return ah.dir(c,"nextSibling")},prevAll:function(c){return ah.dir(c,"previousSibling")},nextUntil:function(s,c,w){return ah.dir(s,"nextSibling",w)},prevUntil:function(s,c,w){return ah.dir(s,"previousSibling",w)},siblings:function(c){return ah.sibling(c.parentNode.firstChild,c)},children:function(c){return ah.sibling(c.firstChild)},contents:function(c){return ah.nodeName(c,"iframe")?c.contentDocument||c.contentWindow.document:ah.makeArray(c.childNodes)}},function(s,c){ah.fn[s]=function(F,w){var A=ah.map(this,c,F);f.test(s)||(w=F);if(w&&typeof w==="string"){A=ah.filter(w,A)}A=this.length>1?ah.unique(A):A;if((this.length>1||aW.test(w))&&a9.test(s)){A=A.reverse()}return this.pushStack(A,s,au.call(arguments).join(","))}});ah.extend({filter:function(s,c,w){if(w){s=":not("+s+")"}return ah.find.matches(s,c)},dir:function(s,c,A){var w=[];for(s=s[c];s&&s.nodeType!==9&&(A===I||s.nodeType!==1||!ah(s).is(A));){s.nodeType===1&&w.push(s);s=s[c]}return w},nth:function(s,c,A){c=c||1;for(var w=0;s;s=s[A]){if(s.nodeType===1&&++w===c){break}}return s},sibling:function(s,c){for(var w=[];s;s=s.nextSibling){s.nodeType===1&&s!==c&&w.push(s)}return w}});var ai=/ jQuery\d+="(?:\d+|null)"/g,ar=/^\s+/,B=/(<([\w:]+)[^>]*?)\/>/g,aD=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,m=/<([\w:]+)/,ac=/<tbody/i,u=/<|&#?\w+;/,aP=/<script|<object|<embed|<option|<style/i,ak=/checked\s*(?:[^=]|=\s*.checked.)/i,bk=function(s,c,w){return aD.test(w)?s:c+"></"+w+">"},aJ={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};aJ.optgroup=aJ.option;aJ.tbody=aJ.tfoot=aJ.colgroup=aJ.caption=aJ.thead;aJ.th=aJ.td;if(!ah.support.htmlSerialize){aJ._default=[1,"div<div>","</div>"]}ah.fn.extend({text:function(c){if(ah.isFunction(c)){return this.each(function(s){var w=ah(this);w.text(c.call(this,s,w.text()))})}if(typeof c!=="object"&&c!==I){return this.empty().append((this[0]&&this[0].ownerDocument||M).createTextNode(c))}return ah.text(this)},wrapAll:function(s){if(ah.isFunction(s)){return this.each(function(w){ah(this).wrapAll(s.call(this,w))})}if(this[0]){var c=ah(s,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&c.insertBefore(this[0]);c.map(function(){for(var w=this;w.firstChild&&w.firstChild.nodeType===1;){w=w.firstChild}return w}).append(this)}return this},wrapInner:function(c){if(ah.isFunction(c)){return this.each(function(s){ah(this).wrapInner(c.call(this,s))})}return this.each(function(){var s=ah(this),w=s.contents();w.length?w.wrapAll(c):s.append(c)})},wrap:function(c){return this.each(function(){ah(this).wrapAll(c)})},unwrap:function(){return this.parent().each(function(){ah.nodeName(this,"body")||ah(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.appendChild(c)})},prepend:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.insertBefore(c,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this)})}else{if(arguments.length){var c=ah(arguments[0]);c.push.apply(c,this.toArray());return this.pushStack(c,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(s){this.parentNode.insertBefore(s,this.nextSibling)})}else{if(arguments.length){var c=this.pushStack(this,"after",arguments);c.push.apply(c,ah(arguments[0]).toArray());return c}}},remove:function(s,c){for(var A=0,w;(w=this[A])!=null;A++){if(!s||ah.filter(s,[w]).length){if(!c&&w.nodeType===1){ah.cleanData(w.getElementsByTagName("*"));ah.cleanData([w])}w.parentNode&&w.parentNode.removeChild(w)}}return this},empty:function(){for(var s=0,c;(c=this[s])!=null;s++){for(c.nodeType===1&&ah.cleanData(c.getElementsByTagName("*"));c.firstChild;){c.removeChild(c.firstChild)}}return this},clone:function(s){var c=this.map(function(){if(!ah.support.noCloneEvent&&!ah.isXMLDoc(this)){var A=this.outerHTML,w=this.ownerDocument;if(!A){A=w.createElement("div");A.appendChild(this.cloneNode(true));A=A.innerHTML}return ah.clean([A.replace(ai,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(ar,"")],w)[0]}else{return this.cloneNode(true)}});if(s===true){bj(this,c);bj(this.find("*"),c.find("*"))}return c},html:function(s){if(s===I){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(ai,""):null}else{if(typeof s==="string"&&!aP.test(s)&&(ah.support.leadingWhitespace||!ar.test(s))&&!aJ[(m.exec(s)||["",""])[1].toLowerCase()]){s=s.replace(B,bk);try{for(var c=0,A=this.length;c<A;c++){if(this[c].nodeType===1){ah.cleanData(this[c].getElementsByTagName("*"));this[c].innerHTML=s}}}catch(w){this.empty().append(s)}}else{ah.isFunction(s)?this.each(function(J){var F=ah(this),G=F.html();F.empty().append(function(){return s.call(this,J,G)})}):this.empty().append(s)}}return this},replaceWith:function(c){if(this[0]&&this[0].parentNode){if(ah.isFunction(c)){return this.each(function(s){var A=ah(this),w=A.html();A.replaceWith(c.call(this,s,w))})}if(typeof c!=="string"){c=ah(c).detach()}return this.each(function(){var s=this.nextSibling,w=this.parentNode;ah(this).remove();s?ah(s).before(c):ah(w).append(c)})}else{return this.pushStack(ah(ah.isFunction(c)?c():c),"replaceWith",c)}},detach:function(c){return this.remove(c,true)},domManip:function(O,N,L){function J(P){return ah.nodeName(P,"table")?P.getElementsByTagName("tbody")[0]||P.appendChild(P.ownerDocument.createElement("tbody")):P}var K,F,G=O[0],s=[],A;if(!ah.support.checkClone&&arguments.length===3&&typeof G==="string"&&ak.test(G)){return this.each(function(){ah(this).domManip(O,N,L,true)})}if(ah.isFunction(G)){return this.each(function(P){var Q=ah(this);O[0]=G.call(this,P,N?Q.html():I);Q.domManip(O,N,L)})}if(this[0]){K=G&&G.parentNode;K=ah.support.parentNode&&K&&K.nodeType===11&&K.childNodes.length===this.length?{fragment:K}:a3(O,this,s);A=K.fragment;if(F=A.childNodes.length===1?(A=A.firstChild):A.firstChild){N=N&&ah.nodeName(F,"tr");for(var w=0,c=this.length;w<c;w++){L.call(N?J(this[w],F):this[w],w>0||K.cacheable||this.length>1?A.cloneNode(true):A)}}s.length&&ah.each(s,E)}return this}});ah.fragments={};ah.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,c){ah.fn[s]=function(J){var F=[];J=ah(J);var G=this.length===1&&this[0].parentNode;if(G&&G.nodeType===11&&G.childNodes.length===1&&J.length===1){J[c](this[0]);return this}else{G=0;for(var w=J.length;G<w;G++){var A=(G>0?this.clone(true):this).get();ah.fn[c].apply(ah(J[G]),A);F=F.concat(A)}return this.pushStack(F,s,J.selector)}}});ah.extend({clean:function(O,N,L,J){N=N||M;if(typeof N.createElement==="undefined"){N=N.ownerDocument||N[0]&&N[0].ownerDocument||M}for(var K=[],F=0,G;(G=O[F])!=null;F++){if(typeof G==="number"){G+=""}if(G){if(typeof G==="string"&&!u.test(G)){G=N.createTextNode(G)}else{if(typeof G==="string"){G=G.replace(B,bk);var s=(m.exec(G)||["",""])[1].toLowerCase(),A=aJ[s]||aJ._default,w=A[0],c=N.createElement("div");for(c.innerHTML=A[1]+G+A[2];w--;){c=c.lastChild}if(!ah.support.tbody){w=ac.test(G);s=s==="table"&&!w?c.firstChild&&c.firstChild.childNodes:A[1]==="<table>"&&!w?c.childNodes:[];for(A=s.length-1;A>=0;--A){ah.nodeName(s[A],"tbody")&&!s[A].childNodes.length&&s[A].parentNode.removeChild(s[A])}}!ah.support.leadingWhitespace&&ar.test(G)&&c.insertBefore(N.createTextNode(ar.exec(G)[0]),c.firstChild);G=c.childNodes}}if(G.nodeType){K.push(G)}else{K=ah.merge(K,G)}}}if(L){for(F=0;K[F];F++){if(J&&ah.nodeName(K[F],"script")&&(!K[F].type||K[F].type.toLowerCase()==="text/javascript")){J.push(K[F].parentNode?K[F].parentNode.removeChild(K[F]):K[F])}else{K[F].nodeType===1&&K.splice.apply(K,[F+1,0].concat(ah.makeArray(K[F].getElementsByTagName("script"))));L.appendChild(K[F])}}}return K},cleanData:function(L){for(var K,J,F=ah.cache,G=ah.event.special,w=ah.support.deleteExpando,A=0,c;(c=L[A])!=null;A++){if(J=c[ah.expando]){K=F[J];if(K.events){for(var s in K.events){G[s]?ah.event.remove(c,s):aG(c,s,K.handle)}}if(w){delete c[ah.expando]}else{c.removeAttribute&&c.removeAttribute(ah.expando)}delete F[J]}}}});var h=/z-?index|font-?weight|opacity|zoom|line-?height/i,a4=/alpha\([^)]*\)/,aQ=/opacity=([^)]*)/,aE=/float/i,ad=/-([a-z])/ig,bf=/([A-Z])/g,aZ=/^-?\d+(?:px)?$/i,aI=/^-?\d/,af={position:"absolute",visibility:"hidden",display:"block"},y=["Left","Right"],k=["Top","Bottom"],bi=M.defaultView&&M.defaultView.getComputedStyle,al=ah.support.cssFloat?"cssFloat":"styleFloat",v=function(s,c){return c.toUpperCase()};ah.fn.css=function(s,c){return ap(this,s,c,true,function(F,w,A){if(A===I){return ah.curCSS(F,w)}if(typeof A==="number"&&!h.test(w)){A+="px"}ah.style(F,w,A)})};ah.extend({style:function(s,c,F){if(!s||s.nodeType===3||s.nodeType===8){return I}if((c==="width"||c==="height")&&parseFloat(F)<0){F=I}var w=s.style||s,A=F!==I;if(!ah.support.opacity&&c==="opacity"){if(A){w.zoom=1;c=parseInt(F,10)+""==="NaN"?"":"alpha(opacity="+F*100+")";s=w.filter||ah.curCSS(s,"filter")||"";w.filter=a4.test(s)?s.replace(a4,c):c}return w.filter&&w.filter.indexOf("opacity=")>=0?parseFloat(aQ.exec(w.filter)[1])/100+"":""}if(aE.test(c)){c=al}c=c.replace(ad,v);if(A){w[c]=F}return w[c]},css:function(s,c,J,F){if(c==="width"||c==="height"){var G,w=c==="width"?y:k;function A(){G=c==="width"?s.offsetWidth:s.offsetHeight;F!=="border"&&ah.each(w,function(){F||(G-=parseFloat(ah.curCSS(s,"padding"+this,true))||0);if(F==="margin"){G+=parseFloat(ah.curCSS(s,"margin"+this,true))||0}else{G-=parseFloat(ah.curCSS(s,"border"+this+"Width",true))||0}})}s.offsetWidth!==0?A():ah.swap(s,af,A);return Math.max(0,Math.round(G))}return ah.curCSS(s,c,J)},curCSS:function(s,c,G){var A,F=s.style;if(!ah.support.opacity&&c==="opacity"&&s.currentStyle){A=aQ.test(s.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return A===""?"1":A}if(aE.test(c)){c=al}if(!G&&F&&F[c]){A=F[c]}else{if(bi){if(aE.test(c)){c="float"}c=c.replace(bf,"-$1").toLowerCase();F=s.ownerDocument.defaultView;if(!F){return null}if(s=F.getComputedStyle(s,null)){A=s.getPropertyValue(c)}if(c==="opacity"&&A===""){A="1"}}else{if(s.currentStyle){G=c.replace(ad,v);A=s.currentStyle[c]||s.currentStyle[G];if(!aZ.test(A)&&aI.test(A)){c=F.left;var w=s.runtimeStyle.left;s.runtimeStyle.left=s.currentStyle.left;F.left=G==="fontSize"?"1em":A||0;A=F.pixelLeft+"px";F.left=c;s.runtimeStyle.left=w}}}}return A},swap:function(s,c,F){var w={};for(var A in c){w[A]=s.style[A];s.style[A]=c[A]}F.call(s);for(A in c){s.style[A]=w[A]}}});if(ah.expr&&ah.expr.filters){ah.expr.filters.hidden=function(s){var c=s.offsetWidth,A=s.offsetHeight,w=s.nodeName.toLowerCase()==="tr";return c===0&&A===0&&!w?true:c>0&&A>0&&!w?false:ah.curCSS(s,"display")==="none"};ah.expr.filters.visible=function(c){return !ah.expr.filters.hidden(c)}}var a2=aF(),aN=/<script(.|\s)*?\/script>/gi,aj=/select|textarea/i,C=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,aA=/=\?(&|$)/,i=/\?/,n=/(\?|&)_=.*?(&|$)/,a=/^(\w+:)?\/\/([^\/?#]+)/,a5=/%20/g,aR=ah.fn.load;ah.fn.extend({load:function(s,c,G){if(typeof s!=="string"){return aR.call(this,s)}else{if(!this.length){return this}}var A=s.indexOf(" ");if(A>=0){var F=s.slice(A,s.length);s=s.slice(0,A)}A="GET";if(c){if(ah.isFunction(c)){G=c;c=null}else{if(typeof c==="object"){c=ah.param(c,ah.ajaxSettings.traditional);A="POST"}}}var w=this;ah.ajax({url:s,type:A,dataType:"html",data:c,complete:function(J,K){if(K==="success"||K==="notmodified"){w.html(F?ah("<div />").append(J.responseText.replace(aN,"")).find(F):J.responseText)}G&&w.each(G,[J.responseText,K,J])}});return this},serialize:function(){return ah.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?ah.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||aj.test(this.nodeName)||C.test(this.type))}).map(function(s,c){s=ah(this).val();return s==null?null:ah.isArray(s)?ah.map(s,function(w){return{name:c.name,value:w}}):{name:c.name,value:s}}).get()}});ah.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(s,c){ah.fn[c]=function(w){return this.bind(c,w)}});ah.extend({get:function(s,c,A,w){if(ah.isFunction(c)){w=w||A;A=c;c=null}return ah.ajax({type:"GET",url:s,data:c,success:A,dataType:w})},getScript:function(s,c){return ah.get(s,null,c,"script")},getJSON:function(s,c,w){return ah.get(s,c,w,"json")},post:function(s,c,A,w){if(ah.isFunction(c)){w=w||A;A=c;c={}}return ah.ajax({type:"POST",url:s,data:c,success:A,dataType:w})},ajaxSetup:function(c){ah.extend(ah.ajaxSettings,c)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:aO.XMLHttpRequest&&(aO.location.protocol!=="file:"||!aO.ActiveXObject)?function(){return new aO.XMLHttpRequest}:function(){try{return new aO.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(aa){function Z(){X.success&&X.success.call(P,K,R,s);X.global&&W("ajaxSuccess",[s,X])}function Y(){X.complete&&X.complete.call(P,s,R);X.global&&W("ajaxComplete",[s,X]);X.global&&!--ah.active&&ah.event.trigger("ajaxStop")}function W(ba,bb){(X.context?ah(X.context):ah.event).trigger(ba,bb)}var X=ah.extend(true,{},ah.ajaxSettings,aa),Q,R,K,P=aa&&aa.context||X,L=X.type.toUpperCase();if(X.data&&X.processData&&typeof X.data!=="string"){X.data=ah.param(X.data,X.traditional)}if(X.dataType==="jsonp"){if(L==="GET"){aA.test(X.url)||(X.url+=(i.test(X.url)?"&":"?")+(X.jsonp||"callback")+"=?")}else{if(!X.data||!aA.test(X.data)){X.data=(X.data?X.data+"&":"")+(X.jsonp||"callback")+"=?"}}X.dataType="json"}if(X.dataType==="json"&&(X.data&&aA.test(X.data)||aA.test(X.url))){Q=X.jsonpCallback||"jsonp"+a2++;if(X.data){X.data=(X.data+"").replace(aA,"="+Q+"$1")}X.url=X.url.replace(aA,"="+Q+"$1");X.dataType="script";aO[Q]=aO[Q]||function(ba){K=ba;Z();Y();aO[Q]=I;try{delete aO[Q]}catch(bb){}c&&c.removeChild(F)}}if(X.dataType==="script"&&X.cache===null){X.cache=false}if(X.cache===false&&L==="GET"){var G=aF(),w=X.url.replace(n,"$1_="+G+"$2");X.url=w+(w===X.url?(i.test(X.url)?"&":"?")+"_="+G:"")}if(X.data&&L==="GET"){X.url+=(i.test(X.url)?"&":"?")+X.data}X.global&&!ah.active++&&ah.event.trigger("ajaxStart");G=(G=a.exec(X.url))&&(G[1]&&G[1]!==location.protocol||G[2]!==location.host);if(X.dataType==="script"&&L==="GET"&&G){var c=M.getElementsByTagName("head")[0]||M.documentElement,F=M.createElement("script");F.src=X.url;if(X.scriptCharset){F.charset=X.scriptCharset}if(!Q){var J=false;F.onload=F.onreadystatechange=function(){if(!J&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){J=true;Z();Y();F.onload=F.onreadystatechange=null;c&&F.parentNode&&c.removeChild(F)}}}c.insertBefore(F,c.firstChild);return I}var A=false,s=X.xhr();if(s){X.username?s.open(L,X.url,X.async,X.username,X.password):s.open(L,X.url,X.async);try{if(X.data||aa&&aa.contentType){s.setRequestHeader("Content-Type",X.contentType)}if(X.ifModified){ah.lastModified[X.url]&&s.setRequestHeader("If-Modified-Since",ah.lastModified[X.url]);ah.etag[X.url]&&s.setRequestHeader("If-None-Match",ah.etag[X.url])}G||s.setRequestHeader("X-Requested-With","XMLHttpRequest");s.setRequestHeader("Accept",X.dataType&&X.accepts[X.dataType]?X.accepts[X.dataType]+", */*":X.accepts._default)}catch(ab){}if(X.beforeSend&&X.beforeSend.call(P,s,X)===false){X.global&&!--ah.active&&ah.event.trigger("ajaxStop");s.abort();return false}X.global&&W("ajaxSend",[s,X]);var V=s.onreadystatechange=function(bb){if(!s||s.readyState===0||bb==="abort"){A||Y();A=true;if(s){s.onreadystatechange=ah.noop}}else{if(!A&&s&&(s.readyState===4||bb==="timeout")){A=true;s.onreadystatechange=ah.noop;R=bb==="timeout"?"timeout":!ah.httpSuccess(s)?"error":X.ifModified&&ah.httpNotModified(s,X.url)?"notmodified":"success";var bl;if(R==="success"){try{K=ah.httpData(s,X.dataType,X)}catch(ba){R="parsererror";bl=ba}}if(R==="success"||R==="notmodified"){Q||Z()}else{ah.handleError(X,s,R,bl)}Y();bb==="timeout"&&s.abort();if(X.async){s=null}}}};try{var T=s.abort;s.abort=function(){s&&T.call(s);V("abort")}}catch(O){}X.async&&X.timeout>0&&setTimeout(function(){s&&!A&&V("timeout")},X.timeout);try{s.send(L==="POST"||L==="PUT"||L==="DELETE"?X.data:null)}catch(N){ah.handleError(X,s,null,N);Y()}X.async||V();return s}},handleError:function(s,c,A,w){if(s.error){s.error.call(s.context||s,c,A,w)}if(s.global){(s.context?ah(s.context):ah.event).trigger("ajaxError",[c,s,w])}},active:0,httpSuccess:function(s){try{return !s.status&&location.protocol==="file:"||s.status>=200&&s.status<300||s.status===304||s.status===1223||s.status===0}catch(c){}return false},httpNotModified:function(s,c){var A=s.getResponseHeader("Last-Modified"),w=s.getResponseHeader("Etag");if(A){ah.lastModified[c]=A}if(w){ah.etag[c]=w}return s.status===304||s.status===0},httpData:function(s,c,F){var w=s.getResponseHeader("content-type")||"",A=c==="xml"||!c&&w.indexOf("xml")>=0;s=A?s.responseXML:s.responseText;A&&s.documentElement.nodeName==="parsererror"&&ah.error("parsererror");if(F&&F.dataFilter){s=F.dataFilter(s,c)}if(typeof s==="string"){if(c==="json"||!c&&w.indexOf("json")>=0){s=ah.parseJSON(s)}else{if(c==="script"||!c&&w.indexOf("javascript")>=0){ah.globalEval(s)}}}return s},param:function(s,c){function G(J,K){if(ah.isArray(K)){ah.each(K,function(L,N){c||/\[\]$/.test(J)?A(J,N):G(J+"["+(typeof N==="object"||ah.isArray(N)?L:"")+"]",N)})}else{!c&&K!=null&&typeof K==="object"?ah.each(K,function(L,N){G(J+"["+L+"]",N)}):A(J,K)}}function A(J,K){K=ah.isFunction(K)?K():K;F[F.length]=encodeURIComponent(J)+"="+encodeURIComponent(K)}var F=[];if(c===I){c=ah.ajaxSettings.traditional}if(ah.isArray(s)||s.jquery){ah.each(s,function(){A(this.name,this.value)})}else{for(var w in s){G(w,s[w])}}return F.join("&").replace(a5,"+")}});var bg={},bc=/toggle|show|hide/,aX=/^([+-]=)?([\d+-.]+)(.*)$/,aq,D=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];ah.fn.extend({show:function(s,c){if(s||s===0){return this.animate(aC("show",3),s,c)}else{s=0;for(c=this.length;s<c;s++){var F=ah.data(this[s],"olddisplay");this[s].style.display=F||"";if(ah.css(this[s],"display")==="none"){F=this[s].nodeName;var w;if(bg[F]){w=bg[F]}else{var A=ah("<"+F+" />").appendTo("body");w=A.css("display");if(w==="none"){w="block"}A.remove();bg[F]=w}ah.data(this[s],"olddisplay",w)}}s=0;for(c=this.length;s<c;s++){this[s].style.display=ah.data(this[s],"olddisplay")||""}return this}},hide:function(s,c){if(s||s===0){return this.animate(aC("hide",3),s,c)}else{s=0;for(c=this.length;s<c;s++){var w=ah.data(this[s],"olddisplay");!w&&w!=="none"&&ah.data(this[s],"olddisplay",ah.css(this[s],"display"))}s=0;for(c=this.length;s<c;s++){this[s].style.display="none"}return this}},_toggle:ah.fn.toggle,toggle:function(s,c){var w=typeof s==="boolean";if(ah.isFunction(s)&&ah.isFunction(c)){this._toggle.apply(this,arguments)}else{s==null||w?this.each(function(){var A=w?s:ah(this).is(":hidden");ah(this)[A?"show":"hide"]()}):this.animate(aC("toggle",3),s,c)}return this},fadeTo:function(s,c,w){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},s,w)},animate:function(s,c,F,w){var A=ah.speed(c,F,w);if(ah.isEmptyObject(s)){return this.each(A.complete)}return this[A.queue===false?"each":"queue"](function(){var J=ah.extend({},A),K,L=this.nodeType===1&&ah(this).is(":hidden"),G=this;for(K in s){var N=K.replace(ad,v);if(K!==N){s[N]=s[K];delete s[K];K=N}if(s[K]==="hide"&&L||s[K]==="show"&&!L){return J.complete.call(this)}if((K==="height"||K==="width")&&this.style){J.display=ah.css(this,"display");J.overflow=this.style.overflow}if(ah.isArray(s[K])){(J.specialEasing=J.specialEasing||{})[K]=s[K][1];s[K]=s[K][0]}}if(J.overflow!=null){this.style.overflow="hidden"}J.curAnim=ah.extend({},s);ah.each(s,function(P,O){var T=new ah.fx(G,J,P);if(bc.test(O)){T[O==="toggle"?L?"show":"hide":O](s)}else{var R=aX.exec(O),V=T.cur(true)||0;if(R){O=parseFloat(R[2]);var Q=R[3]||"px";if(Q!=="px"){G.style[P]=(O||1)+Q;V=(O||1)/T.cur(true)*V;G.style[P]=V+Q}if(R[1]){O=(R[1]==="-="?-1:1)*O+V}T.custom(V,O,Q)}else{T.custom(V,O,"")}}});return true})},stop:function(s,c){var w=ah.timers;s&&this.queue([]);this.each(function(){for(var A=w.length-1;A>=0;A--){if(w[A].elem===this){c&&w[A](true);w.splice(A,1)}}});c||this.dequeue();return this}});ah.each({slideDown:aC("show",1),slideUp:aC("hide",1),slideToggle:aC("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(s,c){ah.fn[s]=function(A,w){return this.animate(c,A,w)}});ah.extend({speed:function(s,c,A){var w=s&&typeof s==="object"?s:{complete:A||!A&&c||ah.isFunction(s)&&s,duration:s,easing:A&&c||c&&!ah.isFunction(c)&&c};w.duration=ah.fx.off?0:typeof w.duration==="number"?w.duration:ah.fx.speeds[w.duration]||ah.fx.speeds._default;w.old=w.complete;w.complete=function(){w.queue!==false&&ah(this).dequeue();ah.isFunction(w.old)&&w.old.call(this)};return w},easing:{linear:function(s,c,A,w){return A+w*s},swing:function(s,c,A,w){return(-Math.cos(s*Math.PI)/2+0.5)*w+A}},timers:[],fx:function(s,c,w){this.options=c;this.elem=s;this.prop=w;if(!c.orig){c.orig={}}}});ah.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(ah.fx.step[this.prop]||ah.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(c){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}return(c=parseFloat(ah.css(this.elem,this.prop,c)))&&c>-10000?c:parseFloat(ah.curCSS(this.elem,this.prop))||0},custom:function(s,c,F){function w(G){return A.step(G)}this.startTime=aF();this.start=s;this.end=c;this.unit=F||this.unit||"px";this.now=this.start;this.pos=this.state=0;var A=this;w.elem=this.elem;if(w()&&ah.timers.push(w)&&!aq){aq=setInterval(ah.fx.tick,13)}},show:function(){this.options.orig[this.prop]=ah.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());ah(this.elem).show()},hide:function(){this.options.orig[this.prop]=ah.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(s){var c=aF(),F=true;if(s||c>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var w in this.options.curAnim){if(this.options.curAnim[w]!==true){F=false}}if(F){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;s=ah.data(this.elem,"olddisplay");this.elem.style.display=s?s:this.options.display;if(ah.css(this.elem,"display")==="none"){this.elem.style.display="block"}}this.options.hide&&ah(this.elem).hide();if(this.options.hide||this.options.show){for(var A in this.options.curAnim){ah.style(this.elem,A,this.options.orig[A])}}this.options.complete.call(this.elem)}return false}else{A=c-this.startTime;this.state=A/this.options.duration;s=this.options.easing||(ah.easing.swing?"swing":"linear");this.pos=ah.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||s](this.state,A,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};ah.extend(ah.fx,{tick:function(){for(var s=ah.timers,c=0;c<s.length;c++){s[c]()||s.splice(c--,1)}s.length||ah.fx.stop()},stop:function(){clearInterval(aq);aq=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(c){ah.style(c.elem,"opacity",c.now)},_default:function(c){if(c.elem.style&&c.elem.style[c.prop]!=null){c.elem.style[c.prop]=(c.prop==="width"||c.prop==="height"?Math.max(0,c.now):c.now)+c.unit}else{c.elem[c.prop]=c.now}}}});if(ah.expr&&ah.expr.filters){ah.expr.filters.animated=function(c){return ah.grep(ah.timers,function(s){return c===s.elem}).length}}ah.fn.offset="getBoundingClientRect" in M.documentElement?function(s){var c=this[0];if(s){return this.each(function(F){ah.offset.setOffset(this,s,F)})}if(!c||!c.ownerDocument){return null}if(c===c.ownerDocument.body){return ah.offset.bodyOffset(c)}var A=c.getBoundingClientRect(),w=c.ownerDocument;c=w.body;w=w.documentElement;return{top:A.top+(self.pageYOffset||ah.support.boxModel&&w.scrollTop||c.scrollTop)-(w.clientTop||c.clientTop||0),left:A.left+(self.pageXOffset||ah.support.boxModel&&w.scrollLeft||c.scrollLeft)-(w.clientLeft||c.clientLeft||0)}}:function(N){var L=this[0];if(N){return this.each(function(O){ah.offset.setOffset(this,N,O)})}if(!L||!L.ownerDocument){return null}if(L===L.ownerDocument.body){return ah.offset.bodyOffset(L)}ah.offset.initialize();var K=L.offsetParent,G=L,J=L.ownerDocument,A,F=J.documentElement,c=J.body;G=(J=J.defaultView)?J.getComputedStyle(L,null):L.currentStyle;for(var w=L.offsetTop,s=L.offsetLeft;(L=L.parentNode)&&L!==c&&L!==F;){if(ah.offset.supportsFixedPosition&&G.position==="fixed"){break}A=J?J.getComputedStyle(L,null):L.currentStyle;w-=L.scrollTop;s-=L.scrollLeft;if(L===K){w+=L.offsetTop;s+=L.offsetLeft;if(ah.offset.doesNotAddBorder&&!(ah.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(L.nodeName))){w+=parseFloat(A.borderTopWidth)||0;s+=parseFloat(A.borderLeftWidth)||0}G=K;K=L.offsetParent}if(ah.offset.subtractsBorderForOverflowNotVisible&&A.overflow!=="visible"){w+=parseFloat(A.borderTopWidth)||0;s+=parseFloat(A.borderLeftWidth)||0}G=A}if(G.position==="relative"||G.position==="static"){w+=c.offsetTop;s+=c.offsetLeft}if(ah.offset.supportsFixedPosition&&G.position==="fixed"){w+=Math.max(F.scrollTop,c.scrollTop);s+=Math.max(F.scrollLeft,c.scrollLeft)}return{top:w,left:s}};ah.offset={initialize:function(){var s=M.body,c=M.createElement("div"),G,A,F,w=parseFloat(ah.curCSS(s,"marginTop",true))||0;ah.extend(c.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});c.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";s.insertBefore(c,s.firstChild);G=c.firstChild;A=G.firstChild;F=G.nextSibling.firstChild.firstChild;this.doesNotAddBorder=A.offsetTop!==5;this.doesAddBorderForTableAndCells=F.offsetTop===5;A.style.position="fixed";A.style.top="20px";this.supportsFixedPosition=A.offsetTop===20||A.offsetTop===15;A.style.position=A.style.top="";G.style.overflow="hidden";G.style.position="relative";this.subtractsBorderForOverflowNotVisible=A.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=s.offsetTop!==w;s.removeChild(c);ah.offset.initialize=ah.noop},bodyOffset:function(s){var c=s.offsetTop,w=s.offsetLeft;ah.offset.initialize();if(ah.offset.doesNotIncludeMarginInBodyOffset){c+=parseFloat(ah.curCSS(s,"marginTop",true))||0;w+=parseFloat(ah.curCSS(s,"marginLeft",true))||0}return{top:c,left:w}},setOffset:function(s,c,J){if(/static/.test(ah.curCSS(s,"position"))){s.style.position="relative"}var F=ah(s),G=F.offset(),w=parseInt(ah.curCSS(s,"top",true),10)||0,A=parseInt(ah.curCSS(s,"left",true),10)||0;if(ah.isFunction(c)){c=c.call(s,J,G)}J={top:c.top-G.top+w,left:c.left-G.left+A};"using" in c?c.using.call(s,J):F.css(J)}};ah.fn.extend({position:function(){if(!this[0]){return null}var s=this[0],c=this.offsetParent(),A=this.offset(),w=/^body|html$/i.test(c[0].nodeName)?{top:0,left:0}:c.offset();A.top-=parseFloat(ah.curCSS(s,"marginTop",true))||0;A.left-=parseFloat(ah.curCSS(s,"marginLeft",true))||0;w.top+=parseFloat(ah.curCSS(c[0],"borderTopWidth",true))||0;w.left+=parseFloat(ah.curCSS(c[0],"borderLeftWidth",true))||0;return{top:A.top-w.top,left:A.left-w.left}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent||M.body;c&&!/^body|html$/i.test(c.nodeName)&&ah.css(c,"position")==="static";){c=c.offsetParent}return c})}});ah.each(["Left","Top"],function(s,c){var w="scroll"+c;ah.fn[w]=function(F){var G=this[0],A;if(!G){return null}if(F!==I){return this.each(function(){if(A=o(this)){A.scrollTo(!s?F:ah(A).scrollLeft(),s?F:ah(A).scrollTop())}else{this[w]=F}})}else{return(A=o(G))?"pageXOffset" in A?A[s?"pageYOffset":"pageXOffset"]:ah.support.boxModel&&A.document.documentElement[w]||A.document.body[w]:G[w]}}});ah.each(["Height","Width"],function(s,c){var w=c.toLowerCase();ah.fn["inner"+c]=function(){return this[0]?ah.css(this[0],w,false,"padding"):null};ah.fn["outer"+c]=function(A){return this[0]?ah.css(this[0],w,false,A?"margin":"border"):null};ah.fn[w]=function(A){var F=this[0];if(!F){return A==null?null:this}if(ah.isFunction(A)){return this.each(function(G){var J=ah(this);J[w](A.call(this,G,J[w]()))})}return"scrollTo" in F&&F.document?F.document.compatMode==="CSS1Compat"&&F.document.documentElement["client"+c]||F.document.body["client"+c]:F.nodeType===9?Math.max(F.documentElement["client"+c],F.body["scroll"+c],F.documentElement["scroll"+c],F.body["offset"+c],F.documentElement["offset"+c]):A===I?ah.css(F,w):this.css(w,typeof A==="string"?A:A+"px")}});aO.jQuery=aO.$=ah})(window);
/*!
 * jQuery UI 1.8.1
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||function(a){a.ui={version:"1.8.1",plugin:{add:function(f,c,h){f=a.ui[f].prototype;for(var g in h){f.plugins[g]=f.plugins[g]||[];f.plugins[g].push([c,h[g]])}},call:function(f,c,h){if((c=f.plugins[c])&&f.element[0].parentNode){for(var g=0;g<c.length;g++){f.options[c[g][0]]&&c[g][1].apply(f.element,h)}}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)},hasScroll:function(e,c){if(a(e).css("overflow")=="hidden"){return false}c=c&&c=="left"?"scrollLeft":"scrollTop";var f=false;if(e[c]>0){return true}e[c]=1;f=e[c]>0;e[c]=0;return f},isOverAxis:function(e,c,f){return e>c&&e<c+f},isOver:function(h,c,l,k,j,i){return a.ui.isOverAxis(h,l,j)&&a.ui.isOverAxis(c,k,i)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};a.fn.extend({_focus:a.fn.focus,focus:function(d,c){return typeof d==="number"?this.each(function(){var b=this;setTimeout(function(){a(b).focus();c&&c.call(b)},d)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var b;b=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(d){if(d!==undefined){return this.css("zIndex",d)}if(this.length){d=a(this[0]);for(var c;d.length&&d[0]!==document;){c=d.css("position");if(c=="absolute"||c=="relative"||c=="fixed"){c=parseInt(d.css("zIndex"));if(!isNaN(c)&&c!=0){return c}}d=d.parent()}}return 0}});a.extend(a.expr[":"],{data:function(e,c,f){return !!a.data(e,f[3])},focusable:function(e){var c=e.nodeName.toLowerCase(),f=a.attr(e,"tabindex");return(/input|select|textarea|button|object/.test(c)?!e.disabled:"a"==c||"area"==c?e.href||!isNaN(f):!isNaN(f))&&!a(e)["area"==c?"parents":"closest"](":hidden").length},tabbable:function(d){var c=a.attr(d,"tabindex");return(isNaN(c)||c>=0)&&a(d).is(":focusable")}})}(jQuery);

/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.88 (08-JUN-2010)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){var ver="2.88";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,(!opts2.rev&&!opts.backwards));},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,(!opts.rev&&!opts.backwards));}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:false};})(jQuery);
/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);  


/******* Easing Plugin***/
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});

/*!
 * jQuery UI Widget 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.12"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;

/*
 * jQuery UI Datepicker 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */

(function ($, undefined) {

	$.extend($.ui, { datepicker: { version: "1.8.17"} });

	var PROP_NAME = 'datepicker';
	var dpuuid = new Date().getTime();
	var instActive;

	/* Date picker manager.
	Use the singleton instance of this class, $.datepicker, to interact with the date picker.
	Settings for (groups of) date pickers are maintained in an instance object,
	allowing multiple different settings on the same page. */

	function Datepicker() {
		this.debug = false; // Change this to true to start debugging
		this._curInst = null; // The current instance in use
		this._keyEvent = false; // If the last event was a key event
		this._disabledInputs = []; // List of date picker inputs that have been disabled
		this._datepickerShowing = false; // True if the popup picker is showing , false if not
		this._inDialog = false; // True if showing within a "dialog", false if not
		this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
		this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
		this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
		this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
		this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
		this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
		this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
		this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
		this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			closeText: 'Done', // Display text for close link
			prevText: 'Prev', // Display text for previous month link
			nextText: 'Next', // Display text for next month link
			currentText: 'Today', // Display text for current month link
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'], // Names of months for drop-down and formatting
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
			dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], // Column headings for days starting at Sunday
			weekHeader: 'Wk', // Column header for week of the year
			dateFormat: 'mm/dd/yy', // See format options on parseDate
			firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
			isRTL: false, // True if right-to-left language, false if left-to-right
			showMonthAfterYear: false, // True if the year select precedes month, false for month then year
			yearSuffix: '' // Additional text to append to the year in the month headers
		};
		this._defaults = { // Global defaults for all the date picker instances
			showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
			showAnim: 'fadeIn', // Name of jQuery animation for popup
			showOptions: {}, // Options for enhanced animations
			defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
			appendText: '', // Display text following the input box, e.g. showing the format
			buttonText: '...', // Text for trigger button
			buttonImage: '', // URL for trigger button image
			buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
			hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
			navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
			gotoCurrent: false, // True if today link goes back to current selection instead
			changeMonth: false, // True if month can be selected directly, false if only prev/next
			changeYear: false, // True if year can be selected directly, false if only prev/next
			yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
			showOtherMonths: false, // True to show dates in other months, false to leave blank
			selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
			showWeek: false, // True to show week of the year, false to not show it
			calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
			shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
			minDate: null, // The earliest selectable date, or null for no limit
			maxDate: null, // The latest selectable date, or null for no limit
			duration: 'fast', // Duration of display/closure
			beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
			beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
			onSelect: null, // Define a callback function when a date is selected
			onChangeMonthYear: null, // Define a callback function when the month or year is changed
			onClose: null, // Define a callback function when the datepicker is closed
			numberOfMonths: 1, // Number of months to show at a time
			showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
			stepMonths: 1, // Number of months to step back/forward
			stepBigMonths: 12, // Number of months to step back/forward for the big links
			altField: '', // Selector for an alternate field to store selected dates into
			altFormat: '', // The date format to use for the alternate field
			constrainInput: true, // The input is constrained by the current date format
			showButtonPanel: false, // True to show button panel, false to not show it
			autoSize: false, // True to size the input for the date format, false to leave as is
			disabled: false // The initial disabled state
		};
		$.extend(this._defaults, this.regional['']);
		this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
	}

	$.extend(Datepicker.prototype, {
		/* Class name added to elements to indicate already configured with a date picker. */
		markerClassName: 'hasDatepicker',

		//Keep track of the maximum number of rows displayed (see #7043)
		maxRows: 4,

		/* Debug logging (if enabled). */
		log: function () {
			if (this.debug)
				console.log.apply('', arguments);
		},

		// TODO rename to "widget" when switching to widget factory
		_widgetDatepicker: function () {
			return this.dpDiv;
		},

		/* Override the default settings for all instances of the date picker.
		@param  settings  object - the new settings to use as defaults (anonymous object)
		@return the manager object */
		setDefaults: function (settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/* Attach the date picker to a jQuery selection.
		@param  target    element - the target input field or division or span
		@param  settings  object - the new settings to use for this date picker instance (anonymous) */
		_attachDatepicker: function (target, settings) {
			// check for settings on the control itself - in namespace 'date:'
			var inlineSettings = null;
			for (var attrName in this._defaults) {
				var attrValue = target.getAttribute('date:' + attrName);
				if (attrValue) {
					inlineSettings = inlineSettings || {};
					try {
						inlineSettings[attrName] = eval(attrValue);
					} catch (err) {
						inlineSettings[attrName] = attrValue;
					}
				}
			}
			var nodeName = target.nodeName.toLowerCase();
			var inline = (nodeName == 'div' || nodeName == 'span');
			if (!target.id) {
				this.uuid += 1;
				target.id = 'dp' + this.uuid;
			}
			var inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {}, inlineSettings || {});
			if (nodeName == 'input') {
				this._connectDatepicker(target, inst);
			} else if (inline) {
				this._inlineDatepicker(target, inst);
			}
		},

		/* Create a new instance object. */
		_newInst: function (target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
			return { id: id, input: target, // associated target
				selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
				drawMonth: 0, drawYear: 0, // month being drawn
				inline: inline, // is datepicker inline or not
				dpDiv: (!inline ? this.dpDiv : // presentation div
			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
			};
		},

		/* Attach the date picker to an input field. */
		_connectDatepicker: function (target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName))
				return;
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function (event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function (event, key) {
				return this._get(inst, key);
			});
			this._autoSize(inst);
			$.data(target, PROP_NAME, inst);
			//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}
		},

		/* Make attachments based on settings. */
		_attachments: function (input, inst) {
			var appendText = this._get(inst, 'appendText');
			var isRTL = this._get(inst, 'isRTL');
			if (inst.append)
				inst.append.remove();
			if (appendText) {
				inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
				input[isRTL ? 'before' : 'after'](inst.append);
			}
			input.unbind('focus', this._showDatepicker);
			if (inst.trigger)
				inst.trigger.remove();
			var showOn = this._get(inst, 'showOn');
			if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
				input.focus(this._showDatepicker);
			if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
				var buttonText = this._get(inst, 'buttonText');
				var buttonImage = this._get(inst, 'buttonImage');
				inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src: buttonImage, alt: buttonText, title: buttonText })));
				input[isRTL ? 'before' : 'after'](inst.trigger);
				inst.trigger.click(function () {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
						$.datepicker._hideDatepicker();
					else
						$.datepicker._showDatepicker(input[0]);
					return false;
				});
			}
		},

		/* Apply the maximum length for the date format. */
		_autoSize: function (inst) {
			if (this._get(inst, 'autoSize') && !inst.inline) {
				var date = new Date(2009, 12 - 1, 20); // Ensure double digits
				var dateFormat = this._get(inst, 'dateFormat');
				if (dateFormat.match(/[DM]/)) {
					var findMax = function (names) {
						var max = 0;
						var maxI = 0;
						for (var i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
				}
				inst.input.attr('size', this._formatDate(inst, date).length);
			}
		},

		/* Attach an inline date picker to a div. */
		_inlineDatepicker: function (target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName))
				return;
			divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function (event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function (event, key) {
				return this._get(inst, key);
			});
			$.data(target, PROP_NAME, inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
			if (inst.settings.disabled) {
				this._disableDatepicker(target);
			}
			// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
			// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
			inst.dpDiv.css("display", "block");
		},

		/* Pop-up the date picker in a "dialog" box.
		@param  input     element - ignored
		@param  date      string or Date - the initial date to display
		@param  onSelect  function - the function to call when a date is selected
		@param  settings  object - update the dialog date picker instance's settings (anonymous object)
		@param  pos       int[2] - coordinates for the dialog's position within the screen or
		event - with x/y coordinates or
		leave empty for default (screen centre)
		@return the manager object */
		_dialogDatepicker: function (input, date, onSelect, settings, pos) {
			var inst = this._dialogInst; // internal instance
			if (!inst) {
				this.uuid += 1;
				var id = 'dp' + this.uuid;
				this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
				this._dialogInput.keydown(this._doKeyDown);
				$('body').append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], PROP_NAME, inst);
			}
			extendRemove(inst.settings, settings || {});
			date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);

			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				var browserWidth = document.documentElement.clientWidth;
				var browserHeight = document.documentElement.clientHeight;
				var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
			}

			// move input on screen for focus, but hidden behind dialog
			this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI)
				$.blockUI(this.dpDiv);
			$.data(this._dialogInput[0], PROP_NAME, inst);
			return this;
		},

		/* Detach a datepicker from its control.
		@param  target    element - the target input field or division or span */
		_destroyDatepicker: function (target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			var nodeName = target.nodeName.toLowerCase();
			$.removeData(target, PROP_NAME);
			if (nodeName == 'input') {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
			} else if (nodeName == 'div' || nodeName == 'span')
				$target.removeClass(this.markerClassName).empty();
		},

		/* Enable the date picker to a jQuery selection.
		@param  target    element - the target input field or division or span */
		_enableDatepicker: function (target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == 'input') {
				target.disabled = false;
				inst.trigger.filter('button').
				each(function () { this.disabled = false; }).end().
				filter('img').css({ opacity: '1.0', cursor: '' });
			}
			else if (nodeName == 'div' || nodeName == 'span') {
				var inline = $target.children('.' + this._inlineClass);
				inline.children().removeClass('ui-state-disabled');
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				removeAttr("disabled");
			}
			this._disabledInputs = $.map(this._disabledInputs,
			function (value) { return (value == target ? null : value); }); // delete entry
		},

		/* Disable the date picker to a jQuery selection.
		@param  target    element - the target input field or division or span */
		_disableDatepicker: function (target) {
			var $target = $(target);
			var inst = $.data(target, PROP_NAME);
			if (!$target.hasClass(this.markerClassName)) {
				return;
			}
			var nodeName = target.nodeName.toLowerCase();
			if (nodeName == 'input') {
				target.disabled = true;
				inst.trigger.filter('button').
				each(function () { this.disabled = true; }).end().
				filter('img').css({ opacity: '0.5', cursor: 'default' });
			}
			else if (nodeName == 'div' || nodeName == 'span') {
				var inline = $target.children('.' + this._inlineClass);
				inline.children().addClass('ui-state-disabled');
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				attr("disabled", "disabled");
			}
			this._disabledInputs = $.map(this._disabledInputs,
			function (value) { return (value == target ? null : value); }); // delete entry
			this._disabledInputs[this._disabledInputs.length] = target;
		},

		/* Is the first field in a jQuery collection disabled as a datepicker?
		@param  target    element - the target input field or division or span
		@return boolean - true if disabled, false if enabled */
		_isDisabledDatepicker: function (target) {
			if (!target) {
				return false;
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] == target)
					return true;
			}
			return false;
		},

		/* Retrieve the instance data for the target control.
		@param  target  element - the target input field or division or span
		@return  object - the associated instance data
		@throws  error if a jQuery problem getting data */
		_getInst: function (target) {
			try {
				return $.data(target, PROP_NAME);
			}
			catch (err) {
				throw 'Missing instance data for this datepicker';
			}
		},

		/* Update or retrieve the settings for a date picker attached to an input field or division.
		@param  target  element - the target input field or division or span
		@param  name    object - the new settings to update or
		string - the name of the setting to change or retrieve,
		when retrieving also 'all' for all instance settings or
		'defaults' for all global defaults
		@param  value   any - the new value for the setting
		(omit if above is an object or to retrieve a value) */
		_optionDatepicker: function (target, name, value) {
			var inst = this._getInst(target);
			if (arguments.length == 2 && typeof name == 'string') {
				return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
			}
			var settings = name || {};
			if (typeof name == 'string') {
				settings = {};
				settings[name] = value;
			}
			if (inst) {
				if (this._curInst == inst) {
					this._hideDatepicker();
				}
				var date = this._getDateDatepicker(target, true);
				var minDate = this._getMinMaxDate(inst, 'min');
				var maxDate = this._getMinMaxDate(inst, 'max');
				extendRemove(inst.settings, settings);
				// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
				if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
					inst.settings.minDate = this._formatDate(inst, minDate);
				if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
					inst.settings.maxDate = this._formatDate(inst, maxDate);
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst);
			}
		},

		// change method deprecated
		_changeDatepicker: function (target, name, value) {
			this._optionDatepicker(target, name, value);
		},

		/* Redraw the date picker attached to an input field or division.
		@param  target  element - the target input field or division or span */
		_refreshDatepicker: function (target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst);
			}
		},

		/* Set the dates for a jQuery selection.
		@param  target   element - the target input field or division or span
		@param  date     Date - the new date */
		_setDateDatepicker: function (target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
			}
		},

		/* Get the date(s) for the first entry in a jQuery selection.
		@param  target     element - the target input field or division or span
		@param  noDefault  boolean - true if no default date is to be used
		@return Date - the current date */
		_getDateDatepicker: function (target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline)
				this._setDateFromField(inst, noDefault);
			return (inst ? this._getDate(inst) : null);
		},

		/* Handle keystrokes. */
		_doKeyDown: function (event) {
			var inst = $.datepicker._getInst(event.target);
			var handled = true;
			var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing)
				switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
					handled = false;
					break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' +
									$.datepicker._currentClass + ')', inst.dpDiv);
					if (sel[0])
						$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
					var onSelect = $.datepicker._get(inst, 'onSelect');
					if (onSelect) {
						var dateStr = $.datepicker._formatDate(inst);

						// trigger custom callback
						onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
					}
					else
						$.datepicker._hideDatepicker();
					return false; // don't submit the form
					break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
					break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
					break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
					break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
					handled = event.ctrlKey || event.metaKey;
					break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
					handled = event.ctrlKey || event.metaKey;
					break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
					handled = event.ctrlKey || event.metaKey;
					// -1 day on ctrl or command +left
					if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
					// next month/year on alt +left on Mac
					break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
					handled = event.ctrlKey || event.metaKey;
					break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
					handled = event.ctrlKey || event.metaKey;
					// +1 day on ctrl or command +right
					if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
					// next month/year on alt +right
					break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
					handled = event.ctrlKey || event.metaKey;
					break; // +1 week on ctrl or command +down
				default: handled = false;
			}
			else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
				$.datepicker._showDatepicker(this);
			else {
				handled = false;
			}
			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
		},

		/* Filter entered characters - based on date format. */
		_doKeyPress: function (event) {
			var inst = $.datepicker._getInst(event.target);
			if ($.datepicker._get(inst, 'constrainInput')) {
				var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
				var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
			}
		},

		/* Synchronise manual entry and field/alternate field. */
		_doKeyUp: function (event) {
			var inst = $.datepicker._getInst(event.target);
			if (inst.input.val() != inst.lastVal) {
				try {
					var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
					if (date) { // only if valid
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst);
					}
				}
				catch (event) {
					$.datepicker.log(event);
				}
			}
			return true;
		},

		/* Pop-up the date picker for a given input field.
		If false returned from beforeShow event handler do not show. 
		@param  input  element - the input field attached to the date picker or
		event - if triggered by focus */
		_showDatepicker: function (input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
				input = $('input', input.parentNode)[0];
			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
				return;
			var inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst != inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if (inst && $.datepicker._datepickerShowing) {
					$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
				}
			}
			var beforeShow = $.datepicker._get(inst, 'beforeShow');
			var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if (beforeShowSettings === false) {
				//false
				return;
			}
			extendRemove(inst.settings, beforeShowSettings);
			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);
			if ($.datepicker._inDialog) // hide cursor
				input.value = '';
			if (!$.datepicker._pos) { // position below input
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight; // add the height
			}
			var isFixed = false;
			$(input).parents().each(function () {
				isFixed |= $(this).css('position') == 'fixed';
				return !isFixed;
			});
			if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
				$.datepicker._pos[0] -= document.documentElement.scrollLeft;
				$.datepicker._pos[1] -= document.documentElement.scrollTop;
			}
			var offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
			$.datepicker._pos = null;
			//to avoid flashes on Firefox
			inst.dpDiv.empty();
			// determine sizing offscreen
			inst.dpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' });
			$.datepicker._updateDatepicker(inst);
			// fix width for dynamic number of date pickers
			// and adjust position before showing
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({ position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
				left: offset.left + 'px', top: offset.top + 'px'
			});
			if (!inst.inline) {
				var showAnim = $.datepicker._get(inst, 'showAnim');
				var duration = $.datepicker._get(inst, 'duration');
				var postProcess = function () {
					var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
					if (!!cover.length) {
						var borders = $.datepicker._getBorders(inst.dpDiv);
						cover.css({ left: -borders[0], top: -borders[1],
							width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()
						});
					}
				};
				inst.dpDiv.zIndex($(input).zIndex() + 1);
				$.datepicker._datepickerShowing = true;
				if ($.effects && $.effects[showAnim])
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
				else
					inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
				if (!showAnim || !duration)
					postProcess();
				if (inst.input.is(':visible') && !inst.input.is(':disabled'))
					inst.input.focus();
				$.datepicker._curInst = inst;
			}
		},

		/* Generate the date picker content. */
		_updateDatepicker: function (inst) {
			var self = this;
			self.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
			var borders = $.datepicker._getBorders(inst.dpDiv);
			instActive = inst; // for delegate hover events
			inst.dpDiv.empty().append(this._generateHTML(inst));
			var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
			if (!!cover.length) { //avoid call to outerXXXX() when not in IE6
				cover.css({ left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight() })
			}
			inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
			var numMonths = this._getNumberOfMonths(inst);
			var cols = numMonths[1];
			var width = 17;
			inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
			if (cols > 1)
				inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
			inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
			inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
			if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
			// #6694 - don't focus the input if it's already focused
			// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
				inst.input.focus();
			// deffered render of the years select (to avoid flashes on Firefox) 
			if (inst.yearshtml) {
				var origyearshtml = inst.yearshtml;
				setTimeout(function () {
					//assure that inst.yearshtml didn't change.
					if (origyearshtml === inst.yearshtml && inst.yearshtml) {
						inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
					}
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}
		},

		/* Retrieve the size of left and top borders for an element.
		@param  elem  (jQuery object) the element of interest
		@return  (number[2]) the left and top borders */
		_getBorders: function (elem) {
			var convert = function (value) {
				return { thin: 1, medium: 2, thick: 3}[value] || value;
			};
			return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
		},

		/* Check positioning to remain on screen. */
		_checkOffset: function (inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth();
			var dpHeight = inst.dpDiv.outerHeight();
			var inputWidth = inst.input ? inst.input.outerWidth() : 0;
			var inputHeight = inst.input ? inst.input.outerHeight() : 0;
			var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
			var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

			offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

			// now check if datepicker is showing outside window viewport - move to a better place if so.
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

			return offset;
		},

		/* Find an object's position on the screen. */
		_findPos: function (obj) {
			var inst = this._getInst(obj);
			var isRTL = this._get(inst, 'isRTL');
			while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
			}
			var position = $(obj).offset();
			return [position.left, position.top];
		},

		/* Hide the date picker from view.
		@param  input  element - the input field attached to the date picker */
		_hideDatepicker: function (input) {
			var inst = this._curInst;
			if (!inst || (input && inst != $.data(input, PROP_NAME)))
				return;
			if (this._datepickerShowing) {
				var showAnim = this._get(inst, 'showAnim');
				var duration = this._get(inst, 'duration');
				var self = this;
				var postProcess = function () {
					$.datepicker._tidyDialog(inst);
					self._curInst = null;
				};
				if ($.effects && $.effects[showAnim])
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
				else
					inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
				if (!showAnim)
					postProcess();
				this._datepickerShowing = false;
				var onClose = this._get(inst, 'onClose');
				if (onClose)
					onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);
				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
					if ($.blockUI) {
						$.unblockUI();
						$('body').append(this.dpDiv);
					}
				}
				this._inDialog = false;
			}
		},

		/* Tidy up after a dialog display. */
		_tidyDialog: function (inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
		},

		/* Close date picker if clicked elsewhere. */
		_checkExternalClick: function (event) {
			if (!$.datepicker._curInst)
				return;

			var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

			if ((($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) ||
			($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst))
				$.datepicker._hideDatepicker();
		},

		/* Adjust one of the date sub-fields. */
		_adjustDate: function (id, offset, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._isDisabledDatepicker(target[0])) {
				return;
			}
			this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
			this._updateDatepicker(inst);
		},

		/* Action for current link. */
		_gotoToday: function (id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear;
			}
			else {
				var date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
			}
			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a new month/year. */
		_selectMonthYear: function (id, select, period) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value, 10);
			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a day. */
		_selectDay: function (id, month, year, td) {
			var target = $(id);
			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return;
			}
			var inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $('a', td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
		},

		/* Erase the input field and hide the date picker. */
		_clearDate: function (id) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			this._selectDate(target, '');
		},

		/* Update the input field with the selected date. */
		_selectDate: function (id, dateStr) {
			var target = $(id);
			var inst = this._getInst(target[0]);
			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input)
				inst.input.val(dateStr);
			this._updateAlternate(inst);
			var onSelect = this._get(inst, 'onSelect');
			if (onSelect)
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
			else if (inst.input)
				inst.input.trigger('change'); // fire the change event
			if (inst.inline)
				this._updateDatepicker(inst);
			else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof (inst.input[0]) != 'object')
					inst.input.focus(); // restore focus
				this._lastInput = null;
			}
		},

		/* Update any alternate field to synchronise with the main field. */
		_updateAlternate: function (inst) {
			var altField = this._get(inst, 'altField');
			if (altField) { // update alternate field too
				var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
				var date = this._getDate(inst);
				var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function () { $(this).val(dateStr); });
			}
		},

		/* Set as beforeShowDay function to prevent selection of weekends.
		@param  date  Date - the date to customise
		@return [boolean, string] - is this date selectable?, what is its CSS class? */
		noWeekends: function (date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ''];
		},

		/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
		@param  date  Date - the date to get the week for
		@return  number - the number of the week within the year that contains this date */
		iso8601Week: function (date) {
			var checkDate = new Date(date.getTime());
			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
			var time = checkDate.getTime();
			checkDate.setMonth(0); // Compare with Jan 1
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},

		/* Parse a string value into a date object.
		See formatDate below for the possible formats.

		@param  format    string - the expected format of the date
		@param  value     string - the date in the above format
		@param  settings  Object - attributes include:
		shortYearCutoff  number - the cutoff year for determining the century (optional)
		dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
		dayNames         string[7] - names of the days from Sunday (optional)
		monthNamesShort  string[12] - abbreviated names of the months (optional)
		monthNames       string[12] - names of the months (optional)
		@return  Date - the extracted date value or null if value is blank */
		parseDate: function (format, value, settings) {
			if (format == null || value == null)
				throw 'Invalid arguments';
			value = (typeof value == 'object' ? value.toString() : value + '');
			if (value == '')
				return null;
			var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			var year = -1;
			var month = -1;
			var day = -1;
			var doy = -1;
			var literal = false;
			// Check whether a format character is doubled
			var lookAhead = function (match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
				if (matches)
					iFormat++;
				return matches;
			};
			// Extract a number from the string value
			var getNumber = function (match) {
				var isDoubled = lookAhead(match);
				var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
				var digits = new RegExp('^\\d{1,' + size + '}');
				var num = value.substring(iValue).match(digits);
				if (!num)
					throw 'Missing number at position ' + iValue;
				iValue += num[0].length;
				return parseInt(num[0], 10);
			};
			// Extract a name from the string value and convert to an index
			var getName = function (match, shortNames, longNames) {
				var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
					return [[k, v]];
				}).sort(function (a, b) {
					return -(a[1].length - b[1].length);
				});
				var index = -1;
				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index != -1)
					return index + 1;
				else
					throw 'Unknown name at position ' + iValue;
			};
			// Confirm that a literal character matches the string value
			var checkLiteral = function () {
				if (value.charAt(iValue) != format.charAt(iFormat))
					throw 'Unexpected literal at position ' + iValue;
				iValue++;
			};
			var iValue = 0;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						checkLiteral();
				else
					switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
			}
			if (iValue < value.length) {
				throw "Extra/unparsed characters found in date: " + value.substring(iValue);
			}
			if (year == -1)
				year = new Date().getFullYear();
			else if (year < 100)
				year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					var dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim)
						break;
					month++;
					day -= dim;
				} while (true);
			}
			var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
				throw 'Invalid date'; // E.g. 31/02/00
			return date;
		},

		/* Standard date formats. */
		ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
		COOKIE: 'D, dd M yy',
		ISO_8601: 'yy-mm-dd',
		RFC_822: 'D, d M y',
		RFC_850: 'DD, dd-M-y',
		RFC_1036: 'D, d M y',
		RFC_1123: 'D, d M yy',
		RFC_2822: 'D, d M yy',
		RSS: 'D, d M y', // RFC 822
		TICKS: '!',
		TIMESTAMP: '@',
		W3C: 'yy-mm-dd', // ISO 8601

		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

		/* Format a date object into a string value.
		The format can be combinations of the following:
		d  - day of month (no leading zero)
		dd - day of month (two digit)
		o  - day of year (no leading zeros)
		oo - day of year (three digit)
		D  - day name short
		DD - day name long
		m  - month of year (no leading zero)
		mm - month of year (two digit)
		M  - month name short
		MM - month name long
		y  - year (two digit)
		yy - year (four digit)
		@ - Unix timestamp (ms since 01/01/1970)
		! - Windows ticks (100ns since 01/01/0001)
		'...' - literal text
		'' - single quote

		@param  format    string - the desired format of the date
		@param  date      Date - the date value to format
		@param  settings  Object - attributes include:
		dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
		dayNames         string[7] - names of the days from Sunday (optional)
		monthNamesShort  string[12] - abbreviated names of the months (optional)
		monthNames       string[12] - names of the months (optional)
		@return  string - the date in the above format */
		formatDate: function (format, date, settings) {
			if (!date)
				return '';
			var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
			var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
			var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
			var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
			// Check whether a format character is doubled
			var lookAhead = function (match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
				if (matches)
					iFormat++;
				return matches;
			};
			// Format a number, with leading zero if necessary
			var formatNumber = function (match, value, len) {
				var num = '' + value;
				if (lookAhead(match))
					while (num.length < len)
						num = '0' + num;
				return num;
			};
			// Format a name, short or long as requested
			var formatName = function (match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			};
			var output = '';
			var literal = false;
			if (date)
				for (var iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal)
						if (format.charAt(iFormat) == "'" && !lookAhead("'"))
							literal = false;
						else
							output += format.charAt(iFormat);
					else
						switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			return output;
		},

		/* Extract all possible characters from the date format. */
		_possibleChars: function (format) {
			var chars = '';
			var literal = false;
			// Check whether a format character is doubled
			var lookAhead = function (match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
				if (matches)
					iFormat++;
				return matches;
			};
			for (var iFormat = 0; iFormat < format.length; iFormat++)
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						chars += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += format.charAt(iFormat);
				}
			return chars;
		},

		/* Get a setting value, defaulting if necessary. */
		_get: function (inst, name) {
			return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
		},

		/* Parse existing date and initialise date picker. */
		_setDateFromField: function (inst, noDefault) {
			if (inst.input.val() == inst.lastVal) {
				return;
			}
			var dateFormat = this._get(inst, 'dateFormat');
			var dates = inst.lastVal = inst.input ? inst.input.val() : null;
			var date, defaultDate;
			date = defaultDate = this._getDefaultDate(inst);
			var settings = this._getFormatConfig(inst);
			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate;
			} catch (event) {
				this.log(event);
				dates = (noDefault ? '' : dates);
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst);
		},

		/* Retrieve the default date shown on opening. */
		_getDefaultDate: function (inst) {
			return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
		},

		/* A date may be specified as an exact value or a relative one. */
		_determineDate: function (inst, date, defaultDate) {
			var offsetNumeric = function (offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			};
			var offsetString = function (offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}
				var date = (offset.toLowerCase().match(/^c/) ?
				$.datepicker._getDate(inst) : null) || new Date();
				var year = date.getFullYear();
				var month = date.getMonth();
				var day = date.getDate();
				var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
				var matches = pattern.exec(offset);
				while (matches) {
					switch (matches[2] || 'd') {
						case 'd': case 'D':
							day += parseInt(matches[1], 10); break;
						case 'w': case 'W':
							day += parseInt(matches[1], 10) * 7; break;
						case 'm': case 'M':
							month += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case 'y': case 'Y':
							year += parseInt(matches[1], 10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			};
			var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
			newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0);
			}
			return this._daylightSavingAdjust(newDate);
		},

		/* Handle switch to/from daylight saving.
		Hours may be non-zero on daylight saving cut-over:
		> 12 when midnight changeover, but then cannot generate
		midnight datetime, so jump to 1AM, otherwise reset.
		@param  date  (Date) the date to check
		@return  (Date) the corrected date */
		_daylightSavingAdjust: function (date) {
			if (!date) return null;
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date;
		},

		/* Set the date(s) directly. */
		_setDate: function (inst, date, noChange) {
			var clear = !date;
			var origMonth = inst.selectedMonth;
			var origYear = inst.selectedYear;
			var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
				this._notifyChange(inst);
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? '' : this._formatDate(inst));
			}
		},

		/* Retrieve the date(s) directly. */
		_getDate: function (inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
		},

		/* Generate the HTML for the current state of the date picker. */
		_generateHTML: function (inst) {
			var today = new Date();
			today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
			var isRTL = this._get(inst, 'isRTL');
			var showButtonPanel = this._get(inst, 'showButtonPanel');
			var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
			var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
			var numMonths = this._getNumberOfMonths(inst);
			var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
			var stepMonths = this._get(inst, 'stepMonths');
			var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
			var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			var drawMonth = inst.drawMonth - showCurrentAtPos;
			var drawYear = inst.drawYear;
			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--;
			}
			if (maxDate) {
				var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--;
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;
			var prevText = this._get(inst, 'prevText');
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
			var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' +
			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
			var nextText = this._get(inst, 'nextText');
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
			var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' +
			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
			var currentText = this._get(inst, 'currentText');
			var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
			var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._hideDatepicker();">' + this._get(inst, 'closeText') + '</button>' : '');
			var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid +
			'.datepicker._gotoToday(\'#' + inst.id + '\');"' +
			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
			var firstDay = parseInt(this._get(inst, 'firstDay'), 10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);
			var showWeek = this._get(inst, 'showWeek');
			var dayNames = this._get(inst, 'dayNames');
			var dayNamesShort = this._get(inst, 'dayNamesShort');
			var dayNamesMin = this._get(inst, 'dayNamesMin');
			var monthNames = this._get(inst, 'monthNames');
			var monthNamesShort = this._get(inst, 'monthNamesShort');
			var beforeShowDay = this._get(inst, 'beforeShowDay');
			var showOtherMonths = this._get(inst, 'showOtherMonths');
			var selectOtherMonths = this._get(inst, 'selectOtherMonths');
			var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
			var defaultDate = this._getDefaultDate(inst);
			var html = '';
			for (var row = 0; row < numMonths[0]; row++) {
				var group = '';
				this.maxRows = 4;
				for (var col = 0; col < numMonths[1]; col++) {
					var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					var cornerClass = ' ui-corner-all';
					var calender = '';
					if (isMultiMonth) {
						calender += '<div class="ui-datepicker-group';
						if (numMonths[1] > 1)
							switch (col) {
							case 0: calender += ' ui-datepicker-group-first';
								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
							case numMonths[1] - 1: calender += ' ui-datepicker-group-last';
								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
						}
						calender += '">';
					}
					calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					'</div><table class="ui-datepicker-calendar"><thead>' +
					'<tr>';
					var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
					for (var dow = 0; dow < 7; dow++) { // days of the week
						var day = (dow + firstDay) % 7;
						thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
					}
					calender += thead + '</tr></thead><tbody>';
					var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
					var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
					var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
					this.maxRows = numRows;
					var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
						calender += '<tr>';
						var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
						this._get(inst, 'calculateWeek')(printDate) + '</td>');
						for (var dow = 0; dow < 7; dow++) { // create date picker days
							var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
							var otherMonth = (printDate.getMonth() != drawMonth);
							var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += '<td class="' +
							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							' ' + this._dayOverClass : '') + // highlight selected day
							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
							(unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.datepicker._selectDay(\'#' +
							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate);
						}
						calender += tbody + '</tr>';
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++;
					}
					calender += '</tbody></table>' + (isMultiMonth ? '</div>' +
							((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
					group += calender;
				}
				html += group;
			}
			html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
			inst._keyEvent = false;
			return html;
		},

		/* Generate the month and year header. */
		_generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {
			var changeMonth = this._get(inst, 'changeMonth');
			var changeYear = this._get(inst, 'changeYear');
			var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
			var html = '<div class="ui-datepicker-title">';
			var monthHtml = '';
			// month selection
			if (secondary || !changeMonth)
				monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
			else {
				var inMinYear = (minDate && minDate.getFullYear() == drawYear);
				var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
				monthHtml += '<select class="ui-datepicker-month" ' +
				'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
			 	'>';
				for (var month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
						monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNamesShort[month] + '</option>';
				}
				monthHtml += '</select>';
			}
			if (!showMonthAfterYear)
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
			// year selection
			if (!inst.yearshtml) {
				inst.yearshtml = '';
				if (secondary || !changeYear)
					html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
				else {
					// determine range of years to display
					var years = this._get(inst, 'yearRange').split(':');
					var thisYear = new Date().getFullYear();
					var determineYear = function (value) {
						var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
						return (isNaN(year) ? thisYear : year);
					};
					var year = determineYear(years[0]);
					var endYear = Math.max(year, determineYear(years[1] || ''));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += '<select class="ui-datepicker-year" ' +
					'onchange="DP_jQuery_' + dpuuid + '.datepicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
					'>';
					for (; year <= endYear; year++) {
						inst.yearshtml += '<option value="' + year + '"' +
						(year == drawYear ? ' selected="selected"' : '') +
						'>' + year + '</option>';
					}
					inst.yearshtml += '</select>';

					html += inst.yearshtml;
					inst.yearshtml = null;
				}
			}
			html += this._get(inst, 'yearSuffix');
			if (showMonthAfterYear)
				html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
			html += '</div>'; // Close datepicker_header
			return html;
		},

		/* Adjust one of the date sub-fields. */
		_adjustInstDate: function (inst, offset, period) {
			var year = inst.drawYear + (period == 'Y' ? offset : 0);
			var month = inst.drawMonth + (period == 'M' ? offset : 0);
			var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
			var date = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period == 'M' || period == 'Y')
				this._notifyChange(inst);
		},

		/* Ensure a date is within any min/max bounds. */
		_restrictMinMax: function (inst, date) {
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			var newDate = (minDate && date < minDate ? minDate : date);
			newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
			return newDate;
		},

		/* Notify change of month/year. */
		_notifyChange: function (inst) {
			var onChange = this._get(inst, 'onChangeMonthYear');
			if (onChange)
				onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		},

		/* Determine the number of months to show. */
		_getNumberOfMonths: function (inst) {
			var numMonths = this._get(inst, 'numberOfMonths');
			return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
		},

		/* Determine the current maximum date - ensure no time components are set. */
		_getMinMaxDate: function (inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
		},

		/* Find the number of days in a given month. */
		_getDaysInMonth: function (year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
		},

		/* Find the day of the week of the first of a month. */
		_getFirstDayOfMonth: function (year, month) {
			return new Date(year, month, 1).getDay();
		},

		/* Determines if we should allow a "next/prev" month display change. */
		_canAdjustMonth: function (inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst);
			var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
			if (offset < 0)
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
			return this._isInRange(inst, date);
		},

		/* Is the given date in the accepted range? */
		_isInRange: function (inst, date) {
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()));
		},

		/* Provide the configuration settings for formatting/parsing. */
		_getFormatConfig: function (inst) {
			var shortYearCutoff = this._get(inst, 'shortYearCutoff');
			shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return { shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
				monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')
			};
		},

		/* Format the given date for display. */
		_formatDate: function (inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear;
			}
			var date = (day ? (typeof day == 'object' ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
		}
	});

	/*
	* Bind hover events for datepicker elements.
	* Done via delegate so the binding only occurs once in the lifetime of the parent div.
	* Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
	*/
	function bindHover(dpDiv) {
		var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
		return dpDiv.bind('mouseout', function (event) {
			var elem = $(event.target).closest(selector);
			if (!elem.length) {
				return;
			}
			elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
		})
		.bind('mouseover', function (event) {
			var elem = $(event.target).closest(selector);
			if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) ||
					!elem.length) {
				return;
			}
			elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
			elem.addClass('ui-state-hover');
			if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
			if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
		});
	}

	/* jQuery extend now ignores nulls! */
	function extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props)
			if (props[name] == null || props[name] == undefined)
				target[name] = props[name];
		return target;
	};

	/* Determine whether an object is an array. */
	function isArray(a) {
		return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
	};

	/* Invoke the datepicker functionality.
	@param  options  string - a command, optionally followed by additional parameters or
	Object - settings for attaching new datepicker functionality
	@return  jQuery object */
	$.fn.datepicker = function (options) {

		/* Verify an empty collection wasn't passed - Fixes #6976 */
		if (!this.length) {
			return this;
		}

		/* Initialise the date picker. */
		if (!$.datepicker.initialized) {
			$(document).mousedown($.datepicker._checkExternalClick).
			find('body').append($.datepicker.dpDiv);
			$.datepicker.initialized = true;
		}

		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
			return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
		if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
			return $.datepicker['_' + options + 'Datepicker'].
			apply($.datepicker, [this[0]].concat(otherArgs));
		return this.each(function () {
			typeof options == 'string' ?
			$.datepicker['_' + options + 'Datepicker'].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
		});
	};

	$.datepicker = new Datepicker(); // singleton instance
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "1.8.17";

	// Workaround for #4055
	// Add another global to avoid noConflict issues with inline event handlers
	window['DP_jQuery_' + dpuuid] = $;

})(jQuery);

/* END JS LIBRARIES  * * * * * * * * * * * * * * * */



/*!
  * BAIN.COM CORE JAVASCRIPT FUNCTIONS
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function($) { 

	$(document).ready( function() {
		
    // Fix background image caching problem
		if (jQuery.browser.msie) {
			try { 
				document.execCommand("BackgroundImageCache", false, true); 
			} catch(err) {}
		}

		var itemCount = $(".carousel-pagination ul > li").length;
    var itemLiCount = $(".carousel-items > li").length;

		var randomStartNumber = Math.floor(Math.random()*itemCount)
		//alert(randomStartNumber);

		//Featured Carousel
    $("#featured-carousel .carousel-items").cycle({ 
      fx: 'fade', 
      speed:  2000,         
      timeout: 5000,
      startingSlide: randomStartNumber,
      delay: -100,
      left: 0,
      pager:   ".carousel-pagination .wrap ul",
      pagerAnchorBuilder: function(idx, slide) {    
        // return sel string for existing anchor
        return '.carousel-pagination .wrap ul li:eq(' + (idx) + ') a';
      }       
    });
	
	//regular carousel
	$("#carousel .carousel-items").cycle({ 
      fx: 'fade', 
      speed:  2000,         
      timeout: 5000,
      startingSlide: randomStartNumber,
      delay: -100,
      left: 0,
      pager:   ".carousel-pagination ul",
      pagerAnchorBuilder: function(idx, slide) {    
        // return sel string for existing anchor
        return '.carousel-pagination ul li:eq(' + (idx) + ') a';
      }       
    });

    //disable featured carousel if three pack is 
    $("#featured-carousel .disabled").cycle('pause');
    //$("#featured-carousel .carousel-items").cycle('pause');

		//Fix IE7 Bug - Featured Carousel Fails to display on Interior Pages in IE7 and IE8 Compatibility mode.
		$('#featured-carousel').hide();
		
		$('#featured-carousel').show();
		$('#carousel').show();
		//END Fix


		//Double check that the spanning code is correct.
		//Check for left navigation, if it exists make sure the class is correct
		var div = $('.content-wrap');
		if($('div').hasClass('left-rail')) {
			var className = div.attr('class');
			//I have a left nav and a right rail, make me normal
			if(className.indexOf('wideLeft') != -1) {
				div.attr('class', 'content-wrap');
			}
			//I have a left nav and no right rail, make me wide right
			else if(className.indexOf('full') != -1) {
				div.attr('class', 'content-wrap wideRight');
			}

		} else {
			var className = div.attr('class');
			//I have no left nav or right rail so fix it so I am full
			if (className!=null) {
				if(className.indexOf('wideRight') != -1) {
					div.attr('class', 'content-wrap full');
				}
			}
		}

	  //commenting because ie7 renders red arrow without appending thru js
		//IE7 A.MORE Append Red arrow to Anchor links
		// if (jQuery.browser.msie) {
		// 	if(parseInt(jQuery.browser.version) == 7) {
				
		// 		$(".left-rail ul.sub-nav > li.active > a").append('<img src="/static/images/arrow-red-down.png" alt="arrow" class="red-arrow" />');
				
		// 		$("a.more").each(function(){
		// 			var more = $(this);
		// 			if (more.parents(".filter-module").length == 0 && 
		// 				more.parents("#featured-carousel").length == 0 && 
		// 				more.parents("#carousel").length == 0 && 
		// 				more.parents(".sub-nav-featured").length == 0) {
						
		// 				//more.parent().append('<img src="/static/images/arrow-red-right.png" alt="arrow" class="red-arrow" />');
		// 				more.append('<img src="/static/images/arrow-red-right.png" alt="arrow" class="red-arrow" />');

		// 			} else if (more.parents(".sub-nav-featured").length > 0 ||
		// 						more.parents("#featured-carousel").length > 0 ||
		// 						more.parents("#carousel").length > 0) {
		// 				more.parent().append('<img src="/static/images/arrow-white-right-small.png" alt="arrow" class="white-arrow" />');										
		// 			}

		// 		});
		// 	}
		// } 
	
		// Input focus toggle
		$("input[type=text]").inputFocusToggle();


		// Global tabbed containers
		$(".tab-module").tabbedContainer();


		// Navigation drop downs
		$("body .navigation > ul > li").hover(
			function() { // Hover in
        var $hovered = $(this);
				if ($(".navigation > ul > li").index($hovered) == 0) {
					$hovered.addClass("alt");
				}

				$hovered.addClass("hover");
				$hovered.parent().addClass("nav-hover");
        var min_width = 1040; // If window is smaller than this, then the first and last dropdowns will be cutoff
        var window_width = $(window).width();

        if (min_width > window_width) {
            $hovered.parent().addClass('small-window');     
        }
			},
			function() { // Hover out
        var $hovered = $(this);
				$hovered.parent().removeClass('small-window');
        $hovered.parent().removeClass("nav-hover");			
				$hovered.removeClass("hover");
				$hovered.removeClass("alt");
        $hovered.removeClass("fit");
			}
		);

    // Navigation dropdown tier 3
    $('#header.tier3 .navigation li .dropdown').each( function() {
        $(this).addClass('subnavs-'+$(this).find('.sub-nav').length);
    });

		//Navigation dropdown centering for tier 3 sites
		$('#header.tier3 .navigation > ul > li').each(function(){
      var $item = $(this);
			var $dropdown = $item.find('.dropdown');
      var width = $item.width() / 2 - ($dropdown.width() / 2);
			$dropdown.css('margin-left',width);
		});		
   
		// Collapse toggle
		$(".filter-module .more").collapseToggle();
		$(".filter-module .more-no-text").noTextChangeCollapseToggle();

		
		//Refine Search 
		$(".refine-search h3 a").click(function(e) {
			var me = $(this),
				h3 = me.parent();
			
			e.preventDefault();
			
			if(!h3.next().hasClass("search-fields-clientsuccess")){
				h3.next().slideToggle();
				h3.children().toggleClass('close');
				h3.children().text( h3.text() == 'Browse News' ? 'Close Refinements' : 'Browse News');
			}
		});
		
		//Browse Search Popup Window 
		$("#sub-search p span a.more").click(function(e) {
  			e.preventDefault();
  			$("#sub-search p").addClass("active").next().fadeIn('fast');
		}); 
		
		$(".dropdown-interior h6.close a").click(function(e) {
			e.preventDefault();
			$("#sub-search p").removeClass("active").next().hide();
		});
		
		//Subscribe Modal Window
		//$('a[href=#subscribe]').click(function(e){ e.preventDefault(); $('.subscribe-modal').fadeIn('fast'); });
		//$('.subscribe-modal h6.close a').click(function(e){e.preventDefault(); $($(this).parent()).parent().hide();});
		SubscribeModal=$('.subscribe-modal');
		$('a[href=#subscribe]').click(function(e){ 
			e.preventDefault(); 
			yE = e.pageY;
			yM = SubscribeModal.height();
			yP = yE - (yM/2);
			if (yP < 0) yP= 230;
			if ((yP +yM) > $('body').height()) yP = $('body').height() - yM - 50;
			//console.log('mouse: ' + yE + '; modalHeight/2: ' + (yM/2) + '; Offset: ' + yP);
			SubscribeModal.css('top',yP);
			SubscribeModal.css('left', ($('body').width() - SubscribeModal.width())/2-34 );
			$('html,body').animate({scrollTop: yP}, 1000);

			//SubscribeModal.animate({ scrollTop: SubscribeModal.attr("scrollHeight") - SubscribeModal.height() }, 3000);});
			SubscribeModal.fadeIn('fast'); 
			});
		$('.subscribe-modal h6.close a').click(function(e){e.preventDefault(); SubscribeModal.fadeOut('fast');});
				
		//Video Thumbnail Overlay
		$(".video-thumbnail").addPlayOverlay();
		
		/*----------- Map Zoom Feature ------------*/
		$('.offices-maps .map h4').hover(function(){$(this).prev().addClass('indicator-show');},function(){$(this).prev().removeClass('indicator-show');});
		$('.offices-maps .map h4').click(function(e) {
			e.preventDefault();
			$('.popup').fadeOut('fast').parent().removeClass('active');
			$(this).next().fadeIn('fast');
			$(this).parent().addClass('active');
		});
		
		$('.popup span.close').click(function(e){
			e.preventDefault();
			$(this).parent().fadeOut('fast').removeAttr("style");
			$('.popup').parent().removeClass('active');
		});
		
		//Insert Maps into Div
		$('.map .zoom1').append('<img src="/static/images/map-zoomed-out-indicators.png" class="map-image1" style="z-index:2;" />');
		$('.map .zoom2 .inner').append('<img src="/static/images/map-large.png" class="map-image2" style="z-index:1;" />');
		$('.map .zoom2 ul').hide();
		
		//Define Variables
		var imageHeight = 1164;
		var imageWidth = 2438;
		var wrapperWidth = $('.map .zoom2').width();
		var wrapperHeight = $('.map .zoom2').height();
		var inheight = imageHeight + (imageHeight - wrapperHeight);
		var inwidth =  imageWidth + (imageWidth - wrapperWidth);
		var topPosition = '-' + ((inheight - wrapperHeight)/2) + 'px';
		var leftPosition = '-' + ((inwidth - wrapperWidth)/2) + 'px';
		
		//Define width and height of Inner Div
		$('.map .zoom2 .inner').css({ width: inwidth, height: inheight, top: topPosition, left: leftPosition });
		
		//When Zoom In button is clicked
		$('.map ul li.zoom-in').click(function(e){
			e.preventDefault();
			$('.map-image1').animate({
				width: "235%",
				height: "235%",
				marginLeft: "-73.4%"
			} , 1200, "easeOutQuad").animate({ opacity:"0"}, 200, "swing", function(){
							$(this).hide(); $('.popup').hide();
							$('img.map-image2').draggable({ containment: '.map .zoom2 .inner', cursor: "move", drag: function(event,ui){
								var currentLoc = $(this).position();
            					var offsetLeft = currentLoc.left - 750;
            					var offsetTop = currentLoc.top - 662;
            					
            					$('.map .zoom2 ul').css({top: offsetTop, left: offsetLeft });

							}, stop: function(){
								var currentLoc = $(this).position();
            					var offsetLeft = currentLoc.left - 750;
            					var offsetTop = currentLoc.top - 662;
								$('.map .zoom2 ul').css({top: offsetTop, left: offsetLeft });
							}});							
							
							}); //end of Animation function
			$('.map .zoom1').fadeOut(1200);
			$('.map .zoom2 ul').fadeIn(1200);
		});
		
		//When Zoom Out button is clicked
		$('.map ul li.zoom-out').click(function(e){
			e.preventDefault();
			$('.map .zoom2 ul').fadeOut(1200);
			var imageMap = $('.map-image1').css('display');
			if( imageMap == "none") {
				$('.map .zoom1').show().children().hide();				
				$('.map-image1').css('margin-top','-5%').animate({
					width: "100%",
					height: "100%",
					marginLeft: "0",
					marginTop: "0",
					opacity: "1"
				}, 900, "easeOutQuad",function(){ $('.map .zoom1').children().fadeIn('fast'); $('.popup').hide();});
			}
		}); 
		//end Map Functions
		
		/** Shadowbox **/
		$('.popupImage').click(function(e){
			e.preventDefault();
			var fullImgPath = $(this).attr('src').replace('_embed','_full');
			Shadowbox.open({
				content: fullImgPath,
				player: 'img'
			});
		});

        $('.addButton').each(function() {
			$(this).after('<img src="/static/images/click_to_enlarge.png" alt="Click to enlarge" title="Click to enlarge" class="click-to-enlarge" />');
		});

        $('.click-to-enlarge').click(function(e){
			e.preventDefault();
			var fullImgPath = $(this).prev('.popupImage').attr('src').replace('_embed','_full');
			Shadowbox.open({
				content: fullImgPath,
				player: 'img'
			});
		});

		// Custom Dropdown Menu
		$(".custom-dd").customDD();

        // Click popup from link
        var image = getUrlVars()["i"];
        if (image != null && image != "") {
            var imageId = "#" + image;
            var fullImagePath = $(imageId).attr('src').replace('_embed','_full');
            $(function(){
                window.setTimeout(function(){
                    Shadowbox.open({
                        content: fullImagePath, 
                        player: 'img'
                    });
                }
                , 10);
            });
        }

        function getUrlVars() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        };

		// Date Range Picking
		$('.filter-module .custom-range').click(function(e){
			e.preventDefault();
			$(".custom-date-range").toggle("slow");
		});

		$(function() {
			$("#d").datepicker({changeMonth: true,changeYear: true});
		});

		$(function() {
			$("#de").datepicker({changeMonth: true,changeYear: true});
		});
		
		$('#DateRangeSubmit').click(function(e){
			e.preventDefault();
			var originalUrl = window.location.href;
			var startDate = $("#d").val();
			var endDate = $("#de").val();
			var newUrl = removeQueryParameter(originalUrl, "d");
			newUrl = removeQueryParameter(newUrl, "de");
			if (endDate != '' && startDate != '') {
				window.location.href = newUrl + "&d=" + startDate + "&de=" + endDate;
			} else {
				alert("Please select a start and an end date.");
			}
		});

		function removeQueryParameter(url, parameter) {
			var urlparts= url.split('?');
			if (urlparts.length>=2) {
				var urlBase=urlparts.shift(); //get first part, and remove from array
				var queryString=urlparts.join("?"); //join it back up
				var prefix = encodeURIComponent(parameter)+'=';
				var pars = queryString.split(/[&;]/g);
				for (var i= pars.length; i-->0;)               //reverse iteration as may be destructive
					if (pars[i].lastIndexOf(prefix, 0)!==-1)   //idiom for string.startsWith
						pars.splice(i, 1);
						url = urlBase+'?'+pars.join('&');
				}
			return url;
		}
}) // end document.ready
	
	
	
	
/* JS PLUGINS/FUNCTIONS * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

/*!
  *
  * Input Toggle Plugin
  *
  * This plugin handles text input blur/focus auto remove/addition
  *   of default text.
  *
  * On focus - default text is removed
  * On blur  - default text is added
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  	$.fn.inputFocusToggle = function(){$(this).each(function(){var a=$(this);var b=a.val();if(b!=""){a.focus(function(){if(a.val()==b){a.val("")}});a.blur(function(){if(a.val()==""){a.val(b)}})}})};


/*!
  *
  * Collapse Toggle Plugin
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$.fn.collapseToggle = function(){$(this).click(function(){var a=$(this);var b=a.parent().find(".collapse-toggle");if(a.hasClass("more")){a.removeClass("more").text("Less").addClass("less")}else{a.removeClass("less").text("More").addClass("more")}b.slideToggle("fast");return false})};
	$.fn.noTextChangeCollapseToggle = function(){$(this).click(function(){var a=$(this);var b=a.parent().find(".collapse-toggle");if(a.hasClass("more-no-text")){a.removeClass("more-no-text").addClass("less-no-text")}else{a.removeClass("less-no-text").addClass("more-no-text")}b.slideToggle("fast");return false})};




 /*!
  *
  * Tabbed Container Plugin
  *
  * This plugin creates a tabbed container.  Markup should be:
  *
  * <div class="tabs">
  *		<ul class="tab-nav">
  *			<li><a href="#tab1">Tab 1 Link </a></li>
  *			....
  *		</ul>
  *		<div class="tab" id="tab1">
  * 		...
  *		</div>
  *
  *     .........
  *
  * </div>
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	$.fn.tabbedContainer=function(){ var a=$(this); a.find(".active").removeClass("active"); if(a.find(".tab-nav").length==0) { var c=a.find(".tab"); var e="<ul class='tab-nav'>"; c.each(function(f) {e+="<li><a href='#tab"+(f+1)+"'><span>"+$(this).find(".tab-title").text()+"</span></a></li>"});e=e+"</ul>";a.prepend(e)}var d=a.find(".tab-nav");var b=window.location.hash;if(b){d.find("a[href="+b+"]").parent().addClass("active");a.find(b).addClass("active")}else{d.find("li:eq(0)").addClass("active");a.find(".tab:eq(0)").addClass("active")}d.find("a").click(function(){switchTabs(d,a,this.hash);$(this).parents("li").addClass("active");return false});a.find("span a.more").click(function(){if(this.hash.length>0){switchTabs(d,a,this.hash);d.find("a[href="+this.hash+"]").parent().addClass("active");return false}})};
	
	function switchTabs (tabs_nav, tab_container, goto_tab) {
		tabs_nav.find("li.active").removeClass("active");
		tab_container.find(".tab.active").removeClass("active");
		tab_container.find(goto_tab).addClass("active");
/* 		window.location.hash = goto_tab; */
		
		return false;
	} // switchTabs
	
 /*!
  * Slider Plugin
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $.fn.slider = function() {  
    var slider_wrap = $(this);
    var next = slider_wrap.find("a.next");
    
		
		slider_wrap.find(".slide-wrap").cycle({ 
    		fx:     'scrollHorz', 
    		speed:  500, 
    		next:   slider_wrap.find("a.next"), 
    		prev:   slider_wrap.find("a.prev"),     		
    		timeout: 0
		});
		
    } // $.fn.slider
    
    
 /*!
  * Accordion Plugin
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */  

	$.fn.accordion = function() {	

		$(this).each( function () {
			var accordion = $(this);
					
			$(this).find(".trigger").click( function() {
				
				var trigger = $(this);
				
				if (trigger.hasClass("active")) { // Accordion is open
				
					accordion.find(".content").slideUp();
					trigger.removeClass("active");
								
				} else { // Accordion is closed
				
					accordion.find(".content").slideDown();
					trigger.addClass("active");			
				}
			
				return false; // Prevent default action
			
			});

		});
		

	}  // $.fn.accordion
  
  
 /*!
  * Benefits show/hide Plugin
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */  

	$.fn.itemToggle = function() {	

		var list = $(this);
		
		list.find("li").each(		
			function () {			
				$(this).find("a").click( function() {
					
					var item = $(this).parents("li");
					var self = item.hasClass("active"); // Save if this item was clicked 
					
					list.find("li.active").removeClass("active");
					
					if (!self) {
						item.addClass("active");
					} else {
						item.removeClass("active");
					}
					
					return false; // prevent default action
				});			
			}
		);
	}  // $.fn.benefitsToggle

  /*!
  * Load an image using variable in url
  *
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */  

	$.fn.loadImageFromUrl = function(imageUrl) {	
		Shadowbox.open({
				content: imageUrl,
				player: 'img'
			});

	}  // $.fn.loadImageFromUrl
	
	$.fn.addPlayOverlay = function() {
	
		$(this).each( function() {
		
			var div = $(this);
			var img = div.find("img");
			var play_btn = "<span class='play-button'>Play</span>";
			div.append(play_btn);
			var overlay = $(this).find(".play-button");			
			var img_height = img.height();
			var img_width = img.width();
			
			if (img_height < 207) {
				overlay.addClass("small");
			} 	
			try {
			//console.log ('Video Overlay: [width:' + img_width + '] [height:' + img_height + '] [src:' + img.attr('src') + ']');
			}
			catch(err) {}
			//The following line was having overlap issues with chrome.
			//div.height(img_height+7).width(img_width);
			
			overlay.fadeIn("slow");
			
			div.hover(
				function() { // hover in
					overlay.fadeTo('fast',1);
				},
				function() { // hover out
					overlay.fadeTo('fast',0.7);				
				}
			);
		});
	
	} // $.fn.addPlayOverlay
	
/*!
  * Custom Drop Down Select box: Creates a custom styled dropdown box that will still function in forms
  *
  * All that is required is a normal select element within a div or fieldset with a class of 'custom-dd'. This function hides the select dropdown and creates
  * an unordered list (UL) of options.  Events are attached to the new UL so any change the user makes
  * to the UL will be reflected in the hidden dropdown. This way forms will still handle the dropdown.   
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
$.fn.customDD =

	function() {
	
		$(this).each(function() {
			var container = $(this);
			var select = container.find("select");
			select.hide();
			var default_option = select.find('option:selected');
			
			if ( default_option.text() == "")
                default_option = select.find('option:eq(0)').text();
            else   
                default_option = default_option.text();

            var title = '<h4><a href="javascript:void(0)">'+default_option+'</a></h4>';

			container.prepend(title);
			title = container.find("h4 a");
			
			var items = "";
							
			// Create UL from select dropdown
			select.children().each( function() {	
				items += '<li><a href="javascript:void(0)" name="'+$(this).val()+'">'+$(this).html()+'</a></li>';
			});
			
			container.append('<ul>'+items+'</ul>');
			var custom_ul = container.find('ul');
				
			// Attach event to drop down button
			title.click( function() {
				custom_ul.slideToggle("fast");
				
				return false;				
				
			});
		
			// Set hidden dropdown and dropdown title
			custom_ul.find("a").click( function() {
				var clicked = $(this);
				
				// Find the correspoding option in the hidden select and set to selected
				// Change the title text to the clicked elements
				select.find("option[value="+clicked.attr("name")+"]").attr("selected","true");
                select.change();				
				title.text(clicked.text());
				custom_ul.slideUp();
				
				return false;
			});
		});
	}	
	
})(jQuery);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
slider for .main-content , .client-results
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
$(document).ready( function() {
  
    var currentArray = {};

    $('.slides').each(function(){

      currentArray[$(this).attr('id')] = 1;

    });

    var slidebutton =  function () {
     
      var sliderUL = $(this).parent().prev();
      
      current = currentArray[$(sliderUL).attr('id')];
      list = sliderUL.find('li');
      listLen = sliderUL.children('li').length;
      listWidth = list.outerWidth(); 
      totalListWidth = listLen * listWidth;

      var direction = $(this).attr('data-dir');
      loc = listWidth; //624

      //update the current value
      (direction === 'next') ? ++current : --current;
      
      //if first list
      if ( current === 0) {
        current = listLen;
        loc = totalListWidth - listWidth;
        
        direction = 'next';

      }
      else if ( current - 1 === listLen ) {
        current = 1;
        loc = 0; 
      }

      currentArray[$(sliderUL).attr('id')] = current;

      transition(sliderUL, loc, direction);  
      
      return false;
    }

  $('.slider-button').show().find('a').click(slidebutton);

  function transition ( container, loc, direction ) {
    var unit; // -= +=

    if (direction && loc !== 0 ) {
      unit = (direction === 'next') ? '-=' : '+=';
    } 
    //to reset
    //if unit undefined we need to reset it
    container.animate({
      'margin-left': unit ? (unit + loc) : loc
    }, 'slow');

    //container.fadeIn('slow');

  }

  //autoslide slider 
  var CarouselInt = '';

  var clickAuto = function() {
    CarouselInt = window.setInterval(function() { 
      $('.autoSlide').click(); }, 5000);
  }

  clickAuto(); //initialize auto slide

  //stop the slider on hover
  $('.slider').hover(function() {
    clearInterval(CarouselInt);
  }, function(){
      clickAuto();
  });

});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
scroll up 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ready( function() {

  var index = 0; //to add height to index 

  var topArrow =
        function () {

          var box = $(this).parent().prev();

          box.scrollTop(0);

          index = 0;

          $('.more-link').show().find('a.more-arrow').click(moreEvent);

          return false;
        };

  var moreEvent = function (i, e) {

    var moreBox = $(this).parent().prev();
    index += 182;
    moreBox.scrollTop(index);
    // alert(moreBox[0].scrollHeight);

    if (moreBox[0].scrollHeight-182 === moreBox.scrollTop()) {
      index = 0;
      $(this).addClass('disabled');
      $(this).removeAttr('href');
      
      //$('.more-link').show().find('a.more-arrow').off('click');
      $(this).unbind('click');
    }
  
  return false;
  };


  var scrollEvent = function (i, e) {
     
    index += $(this).scrollTop();
   
    if ($(this)[0].scrollHeight-$(this).height() === $(this).scrollTop()) {
      // alert($(this).parent().children('div.more-link').children('a.more-arrow').attr('href'));
      
      $(this).parent().children('div.more-link').children('a.more-arrow').addClass('disabled');
      $(this).parent().children('div.more-link').children('a.more-arrow').removeAttr('href');
      
      //$('.more-link').show().find('a.more-arrow').off('click');
      $(this).parent().children('div.more-link').children('a.more-arrow').unbind('click');
    }
    else {
      $(this).parent().children('div.more-link').children('a.more-arrow').removeClass('disabled');
      $(this).parent().children('div.more-link').children('a.more-arrow').attr('href','#');
      $(this).parent().children('div.more-link').children('a.more-arrow').click(moreEvent);
    }

    return false;
  };
 
  $('.more-link').show().find('a.top-arrow').click(topArrow);

  $('.more-link').show().find('a.more-arrow').click(moreEvent);

  //alert($('.top-reads-wrap').children('ul'));
  $('.top-reads-wrap, .social-module').children('ul').scroll(scrollEvent); 
  // $('.top-reads-wrap').children('ul').scroll(scrollEvent); 

});


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
client results slider with details container
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
$(document).ready( function() { 
  var count = $('.details-wrap').children('.client-results-container').length;
  var resultNumber = 1 + Math.floor(Math.random() * count);
  $('.image-details[data="result'+resultNumber+'"]').parent().addClass('active');
  $('#result'+resultNumber).addClass('active-detail');

   $('a.image-details').click(function () {
  
    var clicked = $(this);
    var boxid = clicked.attr('data'); 
 
     $(this).parent().parent().children('li.active').removeClass('active');
     $(this).parent().addClass('active');

   $('div.client-results-container.active-detail').removeClass('active-detail');
   $('#'+boxid).addClass('active-detail'); 

   return false;
 });

});


/* ----------------------------------
  closeAlert 
 * --------------------------------- */ 
$(document).ready( function() {

  $('a.close').click(function () {
    $(this).parent().hide();
    return false;
  });
  
});

/* ----------------------------------
 news ticker slider, uses cycle plugin
 * --------------------------------- */ 
 $(document).ready( function() {
  $('.news-ticker-slides').cycle ({
    fx: 'fade',
    speed: 400,
    pause: 1,
    timeout: 4000,
    //timeout: 0,
    next: '#next',
    prev: '#previous'
  });
});


/* ----------------------------------
randomly select background images on page load 
* --------------------------------- */ 

// var carouselImages = $(".carousel-items > li").toArray();

$(document).ready( function() {
  var length = $(".carousel-items > li").length;

  $(".carousel-items li").hide();
  var ran = Math.floor(Math.random()*length) + 1;
  // alert(ran);
  $(".carousel-items li:nth-child(" + ran + ")").show().css('opacity', '1');
});

