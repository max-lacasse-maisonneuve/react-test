var y0=Object.defineProperty;var S0=(r,e,t)=>e in r?y0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ui=(r,e,t)=>S0(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function sa(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vc={exports:{}},Xo={},Gc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function E0(){if(vm)return dt;vm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(N,te,Te){this.props=N,this.context=te,this.refs=w,this.updater=Te||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function b(N,te,Te){this.props=N,this.context=te,this.refs=w,this.updater=Te||S}var L=b.prototype=new v;L.constructor=b,E(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,$=Object.prototype.hasOwnProperty,G={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function q(N,te,Te){var Q,de={},Se=null,ge=null;if(te!=null)for(Q in te.ref!==void 0&&(ge=te.ref),te.key!==void 0&&(Se=""+te.key),te)$.call(te,Q)&&!k.hasOwnProperty(Q)&&(de[Q]=te[Q]);var Ae=arguments.length-2;if(Ae===1)de.children=Te;else if(1<Ae){for(var Ne=Array(Ae),Je=0;Je<Ae;Je++)Ne[Je]=arguments[Je+2];de.children=Ne}if(N&&N.defaultProps)for(Q in Ae=N.defaultProps,Ae)de[Q]===void 0&&(de[Q]=Ae[Q]);return{$$typeof:r,type:N,key:Se,ref:ge,props:de,_owner:G.current}}function R(N,te){return{$$typeof:r,type:N.type,key:te,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function W(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Te){return te[Te]})}var ce=/\/+/g;function ae(N,te){return typeof N=="object"&&N!==null&&N.key!=null?W(""+N.key):te.toString(36)}function V(N,te,Te,Q,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ge=!1;if(N===null)ge=!0;else switch(Se){case"string":case"number":ge=!0;break;case"object":switch(N.$$typeof){case r:case e:ge=!0}}if(ge)return ge=N,de=de(ge),N=Q===""?"."+ae(ge,0):Q,P(de)?(Te="",N!=null&&(Te=N.replace(ce,"$&/")+"/"),V(de,te,Te,"",function(Je){return Je})):de!=null&&(C(de)&&(de=R(de,Te+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(ce,"$&/")+"/")+N)),te.push(de)),1;if(ge=0,Q=Q===""?".":Q+":",P(N))for(var Ae=0;Ae<N.length;Ae++){Se=N[Ae];var Ne=Q+ae(Se,Ae);ge+=V(Se,te,Te,Ne,de)}else if(Ne=_(N),typeof Ne=="function")for(N=Ne.call(N),Ae=0;!(Se=N.next()).done;)Se=Se.value,Ne=Q+ae(Se,Ae++),ge+=V(Se,te,Te,Ne,de);else if(Se==="object")throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return ge}function F(N,te,Te){if(N==null)return N;var Q=[],de=0;return V(N,Q,"","",function(Se){return te.call(Te,Se,de++)}),Q}function O(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(Te){(N._status===0||N._status===-1)&&(N._status=1,N._result=Te)},function(Te){(N._status===0||N._status===-1)&&(N._status=2,N._result=Te)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var B={current:null},I={transition:null},K={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:I,ReactCurrentOwner:G};function ie(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:F,forEach:function(N,te,Te){F(N,function(){te.apply(this,arguments)},Te)},count:function(N){var te=0;return F(N,function(){te++}),te},toArray:function(N){return F(N,function(te){return te})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=b,dt.StrictMode=s,dt.Suspense=d,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,dt.act=ie,dt.cloneElement=function(N,te,Te){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=E({},N.props),de=N.key,Se=N.ref,ge=N._owner;if(te!=null){if(te.ref!==void 0&&(Se=te.ref,ge=G.current),te.key!==void 0&&(de=""+te.key),N.type&&N.type.defaultProps)var Ae=N.type.defaultProps;for(Ne in te)$.call(te,Ne)&&!k.hasOwnProperty(Ne)&&(Q[Ne]=te[Ne]===void 0&&Ae!==void 0?Ae[Ne]:te[Ne])}var Ne=arguments.length-2;if(Ne===1)Q.children=Te;else if(1<Ne){Ae=Array(Ne);for(var Je=0;Je<Ne;Je++)Ae[Je]=arguments[Je+2];Q.children=Ae}return{$$typeof:r,type:N.type,key:de,ref:Se,props:Q,_owner:ge}},dt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},dt.createElement=q,dt.createFactory=function(N){var te=q.bind(null,N);return te.type=N,te},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:f,render:N}},dt.isValidElement=C,dt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:O}},dt.memo=function(N,te){return{$$typeof:p,type:N,compare:te===void 0?null:te}},dt.startTransition=function(N){var te=I.transition;I.transition={};try{N()}finally{I.transition=te}},dt.unstable_act=ie,dt.useCallback=function(N,te){return B.current.useCallback(N,te)},dt.useContext=function(N){return B.current.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N){return B.current.useDeferredValue(N)},dt.useEffect=function(N,te){return B.current.useEffect(N,te)},dt.useId=function(){return B.current.useId()},dt.useImperativeHandle=function(N,te,Te){return B.current.useImperativeHandle(N,te,Te)},dt.useInsertionEffect=function(N,te){return B.current.useInsertionEffect(N,te)},dt.useLayoutEffect=function(N,te){return B.current.useLayoutEffect(N,te)},dt.useMemo=function(N,te){return B.current.useMemo(N,te)},dt.useReducer=function(N,te,Te){return B.current.useReducer(N,te,Te)},dt.useRef=function(N){return B.current.useRef(N)},dt.useState=function(N){return B.current.useState(N)},dt.useSyncExternalStore=function(N,te,Te){return B.current.useSyncExternalStore(N,te,Te)},dt.useTransition=function(){return B.current.useTransition()},dt.version="18.3.1",dt}var _m;function Dd(){return _m||(_m=1,Gc.exports=E0()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function M0(){if(xm)return Xo;xm=1;var r=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var g,x={},_=null,S=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)s.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:_,ref:S,props:x,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=c,Xo.jsxs=c,Xo}var ym;function w0(){return ym||(ym=1,Vc.exports=M0()),Vc.exports}var Qe=w0(),fe=Dd();const wr=sa(fe);var yl={},Wc={exports:{}},Pn={},Xc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function T0(){return Sm||(Sm=1,function(r){function e(I,K){var ie=I.length;I.push(K);e:for(;0<ie;){var N=ie-1>>>1,te=I[N];if(0<a(te,K))I[N]=K,I[ie]=te,ie=N;else break e}}function t(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var K=I[0],ie=I.pop();if(ie!==K){I[0]=ie;e:for(var N=0,te=I.length,Te=te>>>1;N<Te;){var Q=2*(N+1)-1,de=I[Q],Se=Q+1,ge=I[Se];if(0>a(de,ie))Se<te&&0>a(ge,de)?(I[N]=ge,I[Se]=ie,N=Se):(I[N]=de,I[Q]=ie,N=Q);else if(Se<te&&0>a(ge,ie))I[N]=ge,I[Se]=ie,N=Se;else break e}}return K}function a(I,K){var ie=I.sortIndex-K.sortIndex;return ie!==0?ie:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],p=[],g=1,x=null,_=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(I){for(var K=t(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=I)s(p),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(p)}}function P(I){if(w=!1,L(I),!E)if(t(d)!==null)E=!0,O($);else{var K=t(p);K!==null&&B(P,K.startTime-I)}}function $(I,K){E=!1,w&&(w=!1,v(q),q=-1),S=!0;var ie=_;try{for(L(K),x=t(d);x!==null&&(!(x.expirationTime>K)||I&&!W());){var N=x.callback;if(typeof N=="function"){x.callback=null,_=x.priorityLevel;var te=N(x.expirationTime<=K);K=r.unstable_now(),typeof te=="function"?x.callback=te:x===t(d)&&s(d),L(K)}else s(d);x=t(d)}if(x!==null)var Te=!0;else{var Q=t(p);Q!==null&&B(P,Q.startTime-K),Te=!1}return Te}finally{x=null,_=ie,S=!1}}var G=!1,k=null,q=-1,R=5,C=-1;function W(){return!(r.unstable_now()-C<R)}function ce(){if(k!==null){var I=r.unstable_now();C=I;var K=!0;try{K=k(!0,I)}finally{K?ae():(G=!1,k=null)}}else G=!1}var ae;if(typeof b=="function")ae=function(){b(ce)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,F=V.port2;V.port1.onmessage=ce,ae=function(){F.postMessage(null)}}else ae=function(){y(ce,0)};function O(I){k=I,G||(G=!0,ae())}function B(I,K){q=y(function(){I(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,O($))},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(I){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var ie=_;_=K;try{return I()}finally{_=ie}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ie=_;_=I;try{return K()}finally{_=ie}},r.unstable_scheduleCallback=function(I,K,ie){var N=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,I){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ie+te,I={id:g++,callback:K,priorityLevel:I,startTime:ie,expirationTime:te,sortIndex:-1},ie>N?(I.sortIndex=ie,e(p,I),t(d)===null&&I===t(p)&&(w?(v(q),q=-1):w=!0,B(P,ie-N))):(I.sortIndex=te,e(d,I),E||S||(E=!0,O($))),I},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(I){var K=_;return function(){var ie=_;_=K;try{return I.apply(this,arguments)}finally{_=ie}}}}($c)),$c}var Em;function A0(){return Em||(Em=1,Xc.exports=T0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function C0(){if(Mm)return Pn;Mm=1;var r=Dd(),e=A0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function _(n){return d.call(x,n)?!0:d.call(g,n)?!1:p.test(n)?x[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,h,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,b);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,h,u)&&(o=null),u||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),G=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),W=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),I=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function te(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Te=!1;function Q(n,i){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var u=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){u=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var h=oe.stack.split(`
`),m=u.stack.split(`
`),M=h.length-1,U=m.length-1;1<=M&&0<=U&&h[M]!==m[U];)U--;for(;1<=M&&0<=U;M--,U--)if(h[M]!==m[U]){if(M!==1||U!==1)do if(M--,U--,0>U||h[M]!==m[U]){var z=`
`+h[M].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=M&&0<=U);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function de(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case G:return"Portal";case R:return"Profiler";case q:return"StrictMode";case ae:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case O:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(n){var i=Ne(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Je(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ne(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var o=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _n(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){ht(n,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||Lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function re(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function me(n,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Be=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ue=null,pe=null;function De(n){if(n=Po(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Na(i),Re(n.stateNode,n.type,i))}}function Le(n){ue?pe?pe.push(n):pe=[n]:ue=n}function st(){if(ue){var n=ue,i=pe;if(pe=ue=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function It(n,i){return n(i)}function qt(){}var xt=!1;function wn(n,i,o){if(xt)return n(i,o);xt=!0;try{return It(n,i,o)}finally{xt=!1,(ue!==null||pe!==null)&&(qt(),st())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var u=Na(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ls=!1;if(f)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ls=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ls=!1}function Mi(n,i,o,u,h,m,M,U,z){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(o,oe)}catch(xe){this.onError(xe)}}var wi=!1,Lr=null,Dr=!1,Ki=null,ha={onError:function(n){wi=!0,Lr=n}};function us(n,i,o,u,h,m,M,U,z){wi=!1,Lr=null,Mi.apply(ha,arguments)}function pa(n,i,o,u,h,m,M,U,z){if(us.apply(this,arguments),wi){if(wi){var oe=Lr;wi=!1,Lr=null}else throw Error(t(198));Dr||(Dr=!0,Ki=oe)}}function ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ma(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ga(n){if(ci(n)!==n)throw Error(t(188))}function fu(n){var i=n.alternate;if(!i){if(i=ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return ga(h),n;if(m===u)return ga(h),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=m;else{for(var M=!1,U=h.child;U;){if(U===o){M=!0,o=h,u=m;break}if(U===u){M=!0,u=h,o=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===o){M=!0,o=m,u=h;break}if(U===u){M=!0,u=m,o=h;break}U=U.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function va(n){return n=fu(n),n!==null?_a(n):null}function _a(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_a(n);if(i!==null)return i;n=n.sibling}return null}var xa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,se=e.unstable_requestPaint,ee=e.unstable_now,Z=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,et=null,Ve=null;function gt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:_t,Ht=Math.log,Ft=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(Ht(n)/Ft|0)|0}var Ye=64,Vt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var U=M&~h;U!==0?u=mt(U):(m&=M,m!==0&&(u=mt(m)))}else M=o&~h,M!==0?u=mt(M):m!==0&&(u=mt(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&h)&&(h=u&-u,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),h=1<<o,u|=n[o],i&=~h;return u}function Zi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ot(m),U=1<<M,z=h[M];z===-1?(!(U&o)||U&u)&&(h[M]=Zi(U,i)):z<=i&&(n.expiredLanes|=U),m&=~U}}function Ti(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function fn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function en(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function an(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-ot(o),m=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~m}}function tn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var yt=0;function fi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Kd,du,Zd,Qd,Jd,hu=!1,ya=[],Qi=null,Ji=null,er=null,po=new Map,mo=new Map,tr=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Po(i),i!==null&&du(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Wv(n,i,o,u,h){switch(i){case"focusin":return Qi=go(Qi,n,i,o,u,h),!0;case"dragenter":return Ji=go(Ji,n,i,o,u,h),!0;case"mouseover":return er=go(er,n,i,o,u,h),!0;case"pointerover":var m=h.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,u,h)),!0;case"gotpointercapture":return m=h.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,u,h)),!0}return!1}function th(n){var i=Ir(n.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=ma(o),i!==null){n.blockedOn=i,Jd(n.priority,function(){Zd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);wt=u,o.target.dispatchEvent(u),wt=null}else return i=Po(o),i!==null&&du(i),n.blockedOn=o,!1;i.shift()}return!0}function nh(n,i,o){Sa(n)&&o.delete(i)}function Xv(){hu=!1,Qi!==null&&Sa(Qi)&&(Qi=null),Ji!==null&&Sa(Ji)&&(Ji=null),er!==null&&Sa(er)&&(er=null),po.forEach(nh),mo.forEach(nh)}function vo(n,i){n.blockedOn===i&&(n.blockedOn=null,hu||(hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xv)))}function _o(n){function i(h){return vo(h,n)}if(0<ya.length){vo(ya[0],n);for(var o=1;o<ya.length;o++){var u=ya[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Qi!==null&&vo(Qi,n),Ji!==null&&vo(Ji,n),er!==null&&vo(er,n),po.forEach(i),mo.forEach(i),o=0;o<tr.length;o++)u=tr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)th(o),o.blockedOn===null&&tr.shift()}var cs=P.ReactCurrentBatchConfig,Ea=!0;function $v(n,i,o,u){var h=yt,m=cs.transition;cs.transition=null;try{yt=1,pu(n,i,o,u)}finally{yt=h,cs.transition=m}}function jv(n,i,o,u){var h=yt,m=cs.transition;cs.transition=null;try{yt=4,pu(n,i,o,u)}finally{yt=h,cs.transition=m}}function pu(n,i,o,u){if(Ea){var h=mu(n,i,o,u);if(h===null)Du(n,i,u,Ma,o),eh(n,u);else if(Wv(h,n,i,o,u))u.stopPropagation();else if(eh(n,u),i&4&&-1<Gv.indexOf(n)){for(;h!==null;){var m=Po(h);if(m!==null&&Kd(m),m=mu(n,i,o,u),m===null&&Du(n,i,u,Ma,o),m===h)break;h=m}h!==null&&u.stopPropagation()}else Du(n,i,u,null,o)}}var Ma=null;function mu(n,i,o,u){if(Ma=null,n=j(u),n=Ir(n),n!==null)if(i=ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ma(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ma=n,null}function ih(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z()){case Ee:return 1;case be:return 4;case Ie:case ze:return 16;case nt:return 536870912;default:return 16}default:return 16}}var nr=null,gu=null,wa=null;function rh(){if(wa)return wa;var n,i=gu,o=i.length,u,h="value"in nr?nr.value:nr.textContent,m=h.length;for(n=0;n<o&&i[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===h[m-u];u++);return wa=h.slice(n,1<u?1-u:void 0)}function Ta(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function sh(){return!1}function Un(n){function i(o,u,h,m,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Aa:sh,this.isPropagationStopped=sh,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Un(fs),xo=ie({},fs,{view:0,detail:0}),Yv=Un(xo),_u,xu,yo,Ca=ie({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(_u=n.screenX-yo.screenX,xu=n.screenY-yo.screenY):xu=_u=0,yo=n),_u)},movementY:function(n){return"movementY"in n?n.movementY:xu}}),oh=Un(Ca),qv=ie({},Ca,{dataTransfer:0}),Kv=Un(qv),Zv=ie({},xo,{relatedTarget:0}),yu=Un(Zv),Qv=ie({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Un(Qv),e_=ie({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),t_=Un(e_),n_=ie({},fs,{data:0}),ah=Un(n_),i_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=s_[n])?!!i[n]:!1}function Su(){return o_}var a_=ie({},xo,{key:function(n){if(n.key){var i=i_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?r_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),l_=Un(a_),u_=ie({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Un(u_),c_=ie({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),f_=Un(c_),d_=ie({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=Un(d_),p_=ie({},Ca,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),m_=Un(p_),g_=[9,13,27,32],Eu=f&&"CompositionEvent"in window,So=null;f&&"documentMode"in document&&(So=document.documentMode);var v_=f&&"TextEvent"in window&&!So,uh=f&&(!Eu||So&&8<So&&11>=So),ch=" ",fh=!1;function dh(n,i){switch(n){case"keyup":return g_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function __(n,i){switch(n){case"compositionend":return hh(i);case"keypress":return i.which!==32?null:(fh=!0,ch);case"textInput":return n=i.data,n===ch&&fh?null:n;default:return null}}function x_(n,i){if(ds)return n==="compositionend"||!Eu&&dh(n,i)?(n=rh(),wa=gu=nr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return uh&&i.locale!=="ko"?null:i.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!y_[n.type]:i==="textarea"}function mh(n,i,o,u){Le(u),i=Da(i,"onChange"),0<i.length&&(o=new vu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Eo=null,Mo=null;function S_(n){Ih(n,0)}function Ra(n){var i=vs(n);if(pt(i))return n}function E_(n,i){if(n==="change")return i}var gh=!1;if(f){var Mu;if(f){var wu="oninput"in document;if(!wu){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),wu=typeof vh.oninput=="function"}Mu=wu}else Mu=!1;gh=Mu&&(!document.documentMode||9<document.documentMode)}function _h(){Eo&&(Eo.detachEvent("onpropertychange",xh),Mo=Eo=null)}function xh(n){if(n.propertyName==="value"&&Ra(Mo)){var i=[];mh(i,Mo,n,j(n)),wn(S_,i)}}function M_(n,i,o){n==="focusin"?(_h(),Eo=i,Mo=o,Eo.attachEvent("onpropertychange",xh)):n==="focusout"&&_h()}function w_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ra(Mo)}function T_(n,i){if(n==="click")return Ra(i)}function A_(n,i){if(n==="input"||n==="change")return Ra(i)}function C_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Zn=typeof Object.is=="function"?Object.is:C_;function wo(n,i){if(Zn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(i,h)||!Zn(n[h],i[h]))return!1}return!0}function yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var o=yh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=yh(o)}}function Eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=Lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Lt(n.document)}return i}function Tu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function R_(n){var i=Mh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Eh(o.ownerDocument.documentElement,o)){if(u!==null&&Tu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!n.extend&&m>u&&(h=u,u=m,m=h),h=Sh(o,m);var M=Sh(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var b_=f&&"documentMode"in document&&11>=document.documentMode,hs=null,Au=null,To=null,Cu=!1;function wh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Cu||hs==null||hs!==Lt(u)||(u=hs,"selectionStart"in u&&Tu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),To&&wo(To,u)||(To=u,u=Da(Au,"onSelect"),0<u.length&&(i=new vu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=hs)))}function ba(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ps={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ru={},Th={};f&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Pa(n){if(Ru[n])return Ru[n];if(!ps[n])return n;var i=ps[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Th)return Ru[n]=i[o];return n}var Ah=Pa("animationend"),Ch=Pa("animationiteration"),Rh=Pa("animationstart"),bh=Pa("transitionend"),Ph=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){Ph.set(n,i),l(i,[n])}for(var bu=0;bu<Lh.length;bu++){var Pu=Lh[bu],P_=Pu.toLowerCase(),L_=Pu[0].toUpperCase()+Pu.slice(1);ir(P_,"on"+L_)}ir(Ah,"onAnimationEnd"),ir(Ch,"onAnimationIteration"),ir(Rh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(bh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Dh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,pa(u,i,void 0,n),n.currentTarget=null}function Ih(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var U=u[M],z=U.instance,oe=U.currentTarget;if(U=U.listener,z!==m&&h.isPropagationStopped())break e;Dh(h,U,oe),m=z}else for(M=0;M<u.length;M++){if(U=u[M],z=U.instance,oe=U.currentTarget,U=U.listener,z!==m&&h.isPropagationStopped())break e;Dh(h,U,oe),m=z}}}if(Dr)throw n=Ki,Dr=!1,Ki=null,n}function Ut(n,i){var o=i[ku];o===void 0&&(o=i[ku]=new Set);var u=n+"__bubble";o.has(u)||(Uh(i,n,2,!1),o.add(u))}function Lu(n,i,o){var u=0;i&&(u|=4),Uh(o,n,u,i)}var La="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[La]){n[La]=!0,s.forEach(function(o){o!=="selectionchange"&&(D_.has(o)||Lu(o,!1,n),Lu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[La]||(i[La]=!0,Lu("selectionchange",!1,i))}}function Uh(n,i,o,u){switch(ih(i)){case 1:var h=$v;break;case 4:h=jv;break;default:h=pu}o=h.bind(null,i,o,n),h=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Du(n,i,o,u,h){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var U=u.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;M=M.return}for(;U!==null;){if(M=Ir(U),M===null)return;if(z=M.tag,z===5||z===6){u=m=M;continue e}U=U.parentNode}}u=u.return}wn(function(){var oe=m,xe=j(o),ye=[];e:{var ve=Ph.get(n);if(ve!==void 0){var Ue=vu,He=n;switch(n){case"keypress":if(Ta(o)===0)break e;case"keydown":case"keyup":Ue=l_;break;case"focusin":He="focus",Ue=yu;break;case"focusout":He="blur",Ue=yu;break;case"beforeblur":case"afterblur":Ue=yu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=f_;break;case Ah:case Ch:case Rh:Ue=Jv;break;case bh:Ue=h_;break;case"scroll":Ue=Yv;break;case"wheel":Ue=m_;break;case"copy":case"cut":case"paste":Ue=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=lh}var Ge=(i&4)!==0,Wt=!Ge&&n==="scroll",J=Ge?ve!==null?ve+"Capture":null:ve;Ge=[];for(var X=oe,ne;X!==null;){ne=X;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,J!==null&&(we=xn(X,J),we!=null&&Ge.push(Ro(X,we,ne)))),Wt)break;X=X.return}0<Ge.length&&(ve=new Ue(ve,He,null,o,xe),ye.push({event:ve,listeners:Ge}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==wt&&(He=o.relatedTarget||o.fromElement)&&(Ir(He)||He[Ai]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(He=o.relatedTarget||o.toElement,Ue=oe,He=He?Ir(He):null,He!==null&&(Wt=ci(He),He!==Wt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=oe),Ue!==He)){if(Ge=oh,we="onMouseLeave",J="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=lh,we="onPointerLeave",J="onPointerEnter",X="pointer"),Wt=Ue==null?ve:vs(Ue),ne=He==null?ve:vs(He),ve=new Ge(we,X+"leave",Ue,o,xe),ve.target=Wt,ve.relatedTarget=ne,we=null,Ir(xe)===oe&&(Ge=new Ge(J,X+"enter",He,o,xe),Ge.target=ne,Ge.relatedTarget=Wt,we=Ge),Wt=we,Ue&&He)t:{for(Ge=Ue,J=He,X=0,ne=Ge;ne;ne=ms(ne))X++;for(ne=0,we=J;we;we=ms(we))ne++;for(;0<X-ne;)Ge=ms(Ge),X--;for(;0<ne-X;)J=ms(J),ne--;for(;X--;){if(Ge===J||J!==null&&Ge===J.alternate)break t;Ge=ms(Ge),J=ms(J)}Ge=null}else Ge=null;Ue!==null&&Nh(ye,ve,Ue,Ge,!1),He!==null&&Wt!==null&&Nh(ye,Wt,He,Ge,!0)}}e:{if(ve=oe?vs(oe):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var $e=E_;else if(ph(ve))if(gh)$e=A_;else{$e=w_;var Ke=M_}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=T_);if($e&&($e=$e(n,oe))){mh(ye,$e,o,xe);break e}Ke&&Ke(n,ve,oe),n==="focusout"&&(Ke=ve._wrapperState)&&Ke.controlled&&ve.type==="number"&&Tt(ve,"number",ve.value)}switch(Ke=oe?vs(oe):window,n){case"focusin":(ph(Ke)||Ke.contentEditable==="true")&&(hs=Ke,Au=oe,To=null);break;case"focusout":To=Au=hs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,wh(ye,o,xe);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":wh(ye,o,xe)}var Ze;if(Eu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ds?dh(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(uh&&o.locale!=="ko"&&(ds||it!=="onCompositionStart"?it==="onCompositionEnd"&&ds&&(Ze=rh()):(nr=xe,gu="value"in nr?nr.value:nr.textContent,ds=!0)),Ke=Da(oe,it),0<Ke.length&&(it=new ah(it,n,null,o,xe),ye.push({event:it,listeners:Ke}),Ze?it.data=Ze:(Ze=hh(o),Ze!==null&&(it.data=Ze)))),(Ze=v_?__(n,o):x_(n,o))&&(oe=Da(oe,"onBeforeInput"),0<oe.length&&(xe=new ah("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:oe}),xe.data=Ze))}Ih(ye,i)})}function Ro(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Da(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=xn(n,o),m!=null&&u.unshift(Ro(n,m,h)),m=xn(n,i),m!=null&&u.push(Ro(n,m,h))),n=n.return}return u}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,o,u,h){for(var m=i._reactName,M=[];o!==null&&o!==u;){var U=o,z=U.alternate,oe=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&oe!==null&&(U=oe,h?(z=xn(o,m),z!=null&&M.unshift(Ro(o,z,U))):h||(z=xn(o,m),z!=null&&M.push(Ro(o,z,U)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var I_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function Fh(n){return(typeof n=="string"?n:""+n).replace(I_,`
`).replace(U_,"")}function Ia(n,i,o){if(i=Fh(i),Fh(n)!==i&&o)throw Error(t(425))}function Ua(){}var Iu=null,Uu=null;function Nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,N_=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,F_=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(n){return Oh.resolve(null).then(n).catch(O_)}:Fu;function O_(n){setTimeout(function(){throw n})}function Ou(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),_o(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);_o(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function kh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),di="__reactFiber$"+gs,bo="__reactProps$"+gs,Ai="__reactContainer$"+gs,ku="__reactEvents$"+gs,k_="__reactListeners$"+gs,B_="__reactHandles$"+gs;function Ir(n){var i=n[di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ai]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=kh(n);n!==null;){if(o=n[di])return o;n=kh(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[di]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Na(n){return n[bo]||null}var Bu=[],_s=-1;function sr(n){return{current:n}}function Nt(n){0>_s||(n.current=Bu[_s],Bu[_s]=null,_s--)}function Dt(n,i){_s++,Bu[_s]=n.current,n.current=i}var or={},dn=sr(or),Tn=sr(!1),Ur=or;function xs(n,i){var o=n.type.contextTypes;if(!o)return or;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in o)h[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function An(n){return n=n.childContextTypes,n!=null}function Fa(){Nt(Tn),Nt(dn)}function Bh(n,i,o){if(dn.current!==or)throw Error(t(168));Dt(dn,i),Dt(Tn,o)}function zh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,ge(n)||"Unknown",h));return ie({},o,u)}function Oa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Ur=dn.current,Dt(dn,n),Dt(Tn,Tn.current),!0}function Hh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=zh(n,i,Ur),u.__reactInternalMemoizedMergedChildContext=n,Nt(Tn),Nt(dn),Dt(dn,n)):Nt(Tn),Dt(Tn,o)}var Ci=null,ka=!1,zu=!1;function Vh(n){Ci===null?Ci=[n]:Ci.push(n)}function z_(n){ka=!0,Vh(n)}function ar(){if(!zu&&Ci!==null){zu=!0;var n=0,i=yt;try{var o=Ci;for(yt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ci=null,ka=!1}catch(h){throw Ci!==null&&(Ci=Ci.slice(n+1)),xa(Ee,ar),h}finally{yt=i,zu=!1}}return null}var ys=[],Ss=0,Ba=null,za=0,Hn=[],Vn=0,Nr=null,Ri=1,bi="";function Fr(n,i){ys[Ss++]=za,ys[Ss++]=Ba,Ba=n,za=i}function Gh(n,i,o){Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Nr,Nr=n;var u=Ri;n=bi;var h=32-ot(u)-1;u&=~(1<<h),o+=1;var m=32-ot(i)+h;if(30<m){var M=h-h%5;m=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Ri=1<<32-ot(i)+h|o<<h|u,bi=m+n}else Ri=1<<m|o<<h|u,bi=n}function Hu(n){n.return!==null&&(Fr(n,1),Gh(n,1,0))}function Vu(n){for(;n===Ba;)Ba=ys[--Ss],ys[Ss]=null,za=ys[--Ss],ys[Ss]=null;for(;n===Nr;)Nr=Hn[--Vn],Hn[Vn]=null,bi=Hn[--Vn],Hn[Vn]=null,Ri=Hn[--Vn],Hn[Vn]=null}var Nn=null,Fn=null,Ot=!1,Qn=null;function Wh(n,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Xh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Nn=n,Fn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Nn=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Nr!==null?{id:Ri,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Nn=n,Fn=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wu(n){if(Ot){var i=Fn;if(i){var o=i;if(!Xh(n,i)){if(Gu(n))throw Error(t(418));i=rr(o.nextSibling);var u=Nn;i&&Xh(n,i)?Wh(u,o):(n.flags=n.flags&-4097|2,Ot=!1,Nn=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,Nn=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Ha(n){if(n!==Nn)return!1;if(!Ot)return $h(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nu(n.type,n.memoizedProps)),i&&(i=Fn)){if(Gu(n))throw jh(),Error(t(418));for(;i;)Wh(n,i),i=rr(i.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Fn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=Nn?rr(n.stateNode.nextSibling):null;return!0}function jh(){for(var n=Fn;n;)n=rr(n.nextSibling)}function Es(){Fn=Nn=null,Ot=!1}function Xu(n){Qn===null?Qn=[n]:Qn.push(n)}var H_=P.ReactCurrentBatchConfig;function Lo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var U=h.refs;M===null?delete U[m]:U[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Va(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function qh(n){function i(J,X){if(n){var ne=J.deletions;ne===null?(J.deletions=[X],J.flags|=16):ne.push(X)}}function o(J,X){if(!n)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function u(J,X){for(J=new Map;X!==null;)X.key!==null?J.set(X.key,X):J.set(X.index,X),X=X.sibling;return J}function h(J,X){return J=mr(J,X),J.index=0,J.sibling=null,J}function m(J,X,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<X?(J.flags|=2,X):ne):(J.flags|=2,X)):(J.flags|=1048576,X)}function M(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,X,ne,we){return X===null||X.tag!==6?(X=Fc(ne,J.mode,we),X.return=J,X):(X=h(X,ne),X.return=J,X)}function z(J,X,ne,we){var $e=ne.type;return $e===k?xe(J,X,ne.props.children,we,ne.key):X!==null&&(X.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===O&&Yh($e)===X.type)?(we=h(X,ne.props),we.ref=Lo(J,X,ne),we.return=J,we):(we=dl(ne.type,ne.key,ne.props,null,J.mode,we),we.ref=Lo(J,X,ne),we.return=J,we)}function oe(J,X,ne,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Oc(ne,J.mode,we),X.return=J,X):(X=h(X,ne.children||[]),X.return=J,X)}function xe(J,X,ne,we,$e){return X===null||X.tag!==7?(X=Wr(ne,J.mode,we,$e),X.return=J,X):(X=h(X,ne),X.return=J,X)}function ye(J,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Fc(""+X,J.mode,ne),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return ne=dl(X.type,X.key,X.props,null,J.mode,ne),ne.ref=Lo(J,null,X),ne.return=J,ne;case G:return X=Oc(X,J.mode,ne),X.return=J,X;case O:var we=X._init;return ye(J,we(X._payload),ne)}if(We(X)||K(X))return X=Wr(X,J.mode,ne,null),X.return=J,X;Va(J,X)}return null}function ve(J,X,ne,we){var $e=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:U(J,X,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:return ne.key===$e?z(J,X,ne,we):null;case G:return ne.key===$e?oe(J,X,ne,we):null;case O:return $e=ne._init,ve(J,X,$e(ne._payload),we)}if(We(ne)||K(ne))return $e!==null?null:xe(J,X,ne,we,null);Va(J,ne)}return null}function Ue(J,X,ne,we,$e){if(typeof we=="string"&&we!==""||typeof we=="number")return J=J.get(ne)||null,U(X,J,""+we,$e);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case $:return J=J.get(we.key===null?ne:we.key)||null,z(X,J,we,$e);case G:return J=J.get(we.key===null?ne:we.key)||null,oe(X,J,we,$e);case O:var Ke=we._init;return Ue(J,X,ne,Ke(we._payload),$e)}if(We(we)||K(we))return J=J.get(ne)||null,xe(X,J,we,$e,null);Va(X,we)}return null}function He(J,X,ne,we){for(var $e=null,Ke=null,Ze=X,it=X=0,sn=null;Ze!==null&&it<ne.length;it++){Ze.index>it?(sn=Ze,Ze=null):sn=Ze.sibling;var Et=ve(J,Ze,ne[it],we);if(Et===null){Ze===null&&(Ze=sn);break}n&&Ze&&Et.alternate===null&&i(J,Ze),X=m(Et,X,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et,Ze=sn}if(it===ne.length)return o(J,Ze),Ot&&Fr(J,it),$e;if(Ze===null){for(;it<ne.length;it++)Ze=ye(J,ne[it],we),Ze!==null&&(X=m(Ze,X,it),Ke===null?$e=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&Fr(J,it),$e}for(Ze=u(J,Ze);it<ne.length;it++)sn=Ue(Ze,J,it,ne[it],we),sn!==null&&(n&&sn.alternate!==null&&Ze.delete(sn.key===null?it:sn.key),X=m(sn,X,it),Ke===null?$e=sn:Ke.sibling=sn,Ke=sn);return n&&Ze.forEach(function(gr){return i(J,gr)}),Ot&&Fr(J,it),$e}function Ge(J,X,ne,we){var $e=K(ne);if(typeof $e!="function")throw Error(t(150));if(ne=$e.call(ne),ne==null)throw Error(t(151));for(var Ke=$e=null,Ze=X,it=X=0,sn=null,Et=ne.next();Ze!==null&&!Et.done;it++,Et=ne.next()){Ze.index>it?(sn=Ze,Ze=null):sn=Ze.sibling;var gr=ve(J,Ze,Et.value,we);if(gr===null){Ze===null&&(Ze=sn);break}n&&Ze&&gr.alternate===null&&i(J,Ze),X=m(gr,X,it),Ke===null?$e=gr:Ke.sibling=gr,Ke=gr,Ze=sn}if(Et.done)return o(J,Ze),Ot&&Fr(J,it),$e;if(Ze===null){for(;!Et.done;it++,Et=ne.next())Et=ye(J,Et.value,we),Et!==null&&(X=m(Et,X,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et);return Ot&&Fr(J,it),$e}for(Ze=u(J,Ze);!Et.done;it++,Et=ne.next())Et=Ue(Ze,J,it,Et.value,we),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?it:Et.key),X=m(Et,X,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et);return n&&Ze.forEach(function(x0){return i(J,x0)}),Ot&&Fr(J,it),$e}function Wt(J,X,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===k&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:e:{for(var $e=ne.key,Ke=X;Ke!==null;){if(Ke.key===$e){if($e=ne.type,$e===k){if(Ke.tag===7){o(J,Ke.sibling),X=h(Ke,ne.props.children),X.return=J,J=X;break e}}else if(Ke.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===O&&Yh($e)===Ke.type){o(J,Ke.sibling),X=h(Ke,ne.props),X.ref=Lo(J,Ke,ne),X.return=J,J=X;break e}o(J,Ke);break}else i(J,Ke);Ke=Ke.sibling}ne.type===k?(X=Wr(ne.props.children,J.mode,we,ne.key),X.return=J,J=X):(we=dl(ne.type,ne.key,ne.props,null,J.mode,we),we.ref=Lo(J,X,ne),we.return=J,J=we)}return M(J);case G:e:{for(Ke=ne.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){o(J,X.sibling),X=h(X,ne.children||[]),X.return=J,J=X;break e}else{o(J,X);break}else i(J,X);X=X.sibling}X=Oc(ne,J.mode,we),X.return=J,J=X}return M(J);case O:return Ke=ne._init,Wt(J,X,Ke(ne._payload),we)}if(We(ne))return He(J,X,ne,we);if(K(ne))return Ge(J,X,ne,we);Va(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,X!==null&&X.tag===6?(o(J,X.sibling),X=h(X,ne),X.return=J,J=X):(o(J,X),X=Fc(ne,J.mode,we),X.return=J,J=X),M(J)):o(J,X)}return Wt}var Ms=qh(!0),Kh=qh(!1),Ga=sr(null),Wa=null,ws=null,$u=null;function ju(){$u=ws=Wa=null}function Yu(n){var i=Ga.current;Nt(Ga),n._currentValue=i}function qu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ts(n,i){Wa=n,$u=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Cn=!0),n.firstContext=null)}function Gn(n){var i=n._currentValue;if($u!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Wa===null)throw Error(t(308));ws=n,Wa.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var Or=null;function Ku(n){Or===null?Or=[n]:Or.push(n)}function Zh(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,Ku(i)):(o.next=h.next,h.next=o),i.interleaved=o,Pi(n,u)}function Pi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,St&2){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Pi(n,o)}return h=u.interleaved,h===null?(i.next=i,Ku(u)):(i.next=h.next,h.next=i),u.interleaved=i,Pi(n,o)}function Xa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tn(n,o)}}function Jh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?h=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?h=m=i:m=m.next=i}else h=m=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function $a(n,i,o,u){var h=n.updateQueue;lr=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var z=U,oe=z.next;z.next=null,M===null?m=oe:M.next=oe,M=z;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==M&&(U===null?xe.firstBaseUpdate=oe:U.next=oe,xe.lastBaseUpdate=z))}if(m!==null){var ye=h.baseState;M=0,xe=oe=z=null,U=m;do{var ve=U.lane,Ue=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,Ge=U;switch(ve=i,Ue=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ue,ye,ve);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ve=typeof He=="function"?He.call(Ue,ye,ve):He,ve==null)break e;ye=ie({},ye,ve);break e;case 2:lr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[U]:ve.push(U))}else Ue={eventTime:Ue,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(oe=xe=Ue,z=ye):xe=xe.next=Ue,M|=ve;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(xe===null&&(z=ye),h.baseState=z,h.firstBaseUpdate=oe,h.lastBaseUpdate=xe,i=h.shared.interleaved,i!==null){h=i;do M|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);zr|=M,n.lanes=M,n.memoizedState=ye}}function ep(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Do={},hi=sr(Do),Io=sr(Do),Uo=sr(Do);function kr(n){if(n===Do)throw Error(t(174));return n}function Qu(n,i){switch(Dt(Uo,i),Dt(Io,n),Dt(hi,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Nt(hi),Dt(hi,i)}function As(){Nt(hi),Nt(Io),Nt(Uo)}function tp(n){kr(Uo.current);var i=kr(hi.current),o=Xe(i,n.type);i!==o&&(Dt(Io,n),Dt(hi,o))}function Ju(n){Io.current===n&&(Nt(hi),Nt(Io))}var kt=sr(0);function ja(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ec=[];function tc(){for(var n=0;n<ec.length;n++)ec[n]._workInProgressVersionPrimary=null;ec.length=0}var Ya=P.ReactCurrentDispatcher,nc=P.ReactCurrentBatchConfig,Br=0,Bt=null,Kt=null,nn=null,qa=!1,No=!1,Fo=0,V_=0;function hn(){throw Error(t(321))}function ic(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Zn(n[o],i[o]))return!1;return!0}function rc(n,i,o,u,h,m){if(Br=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?$_:j_,n=o(u,h),No){m=0;do{if(No=!1,Fo=0,25<=m)throw Error(t(301));m+=1,nn=Kt=null,i.updateQueue=null,Ya.current=Y_,n=o(u,h)}while(No)}if(Ya.current=Qa,i=Kt!==null&&Kt.next!==null,Br=0,nn=Kt=Bt=null,qa=!1,i)throw Error(t(300));return n}function sc(){var n=Fo!==0;return Fo=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Bt.memoizedState=nn=n:nn=nn.next=n,nn}function Wn(){if(Kt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=nn===null?Bt.memoizedState:nn.next;if(i!==null)nn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Bt.memoizedState=nn=n:nn=nn.next=n}return nn}function Oo(n,i){return typeof i=="function"?i(n):i}function oc(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,h=u.baseQueue,m=o.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}u.baseQueue=h=m,o.pending=null}if(h!==null){m=h.next,u=u.baseState;var U=M=null,z=null,oe=m;do{var xe=oe.lane;if((Br&xe)===xe)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var ye={lane:xe,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(U=z=ye,M=u):z=z.next=ye,Bt.lanes|=xe,zr|=xe}oe=oe.next}while(oe!==null&&oe!==m);z===null?M=u:z.next=U,Zn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do m=h.lane,Bt.lanes|=m,zr|=m,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ac(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,m=i.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do m=n(m,M.action),M=M.next;while(M!==h);Zn(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function np(){}function ip(n,i){var o=Bt,u=Wn(),h=i(),m=!Zn(u.memoizedState,h);if(m&&(u.memoizedState=h,Cn=!0),u=u.queue,lc(op.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,ko(9,sp.bind(null,o,u,h,i),void 0,null),rn===null)throw Error(t(349));Br&30||rp(o,i,h)}return h}function rp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function sp(n,i,o,u){i.value=o,i.getSnapshot=u,ap(i)&&lp(n)}function op(n,i,o){return o(function(){ap(i)&&lp(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Zn(n,o)}catch{return!0}}function lp(n){var i=Pi(n,1);i!==null&&ni(i,n,1,-1)}function up(n){var i=pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=X_.bind(null,Bt,n),[i.memoizedState,n]}function ko(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function cp(){return Wn().memoizedState}function Ka(n,i,o,u){var h=pi();Bt.flags|=n,h.memoizedState=ko(1|i,o,void 0,u===void 0?null:u)}function Za(n,i,o,u){var h=Wn();u=u===void 0?null:u;var m=void 0;if(Kt!==null){var M=Kt.memoizedState;if(m=M.destroy,u!==null&&ic(u,M.deps)){h.memoizedState=ko(i,o,m,u);return}}Bt.flags|=n,h.memoizedState=ko(1|i,o,m,u)}function fp(n,i){return Ka(8390656,8,n,i)}function lc(n,i){return Za(2048,8,n,i)}function dp(n,i){return Za(4,2,n,i)}function hp(n,i){return Za(4,4,n,i)}function pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mp(n,i,o){return o=o!=null?o.concat([n]):null,Za(4,4,pp.bind(null,i,n),o)}function uc(){}function gp(n,i){var o=Wn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function vp(n,i){var o=Wn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function _p(n,i,o){return Br&21?(Zn(o,i)||(o=bt(),Bt.lanes|=o,zr|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=o)}function G_(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var u=nc.transition;nc.transition={};try{n(!1),i()}finally{yt=o,nc.transition=u}}function xp(){return Wn().memoizedState}function W_(n,i,o){var u=hr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},yp(n))Sp(i,o);else if(o=Zh(n,i,o,u),o!==null){var h=En();ni(o,n,u,h),Ep(o,i,u)}}function X_(n,i,o){var u=hr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(yp(n))Sp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,o);if(h.hasEagerState=!0,h.eagerState=U,Zn(U,M)){var z=i.interleaved;z===null?(h.next=h,Ku(i)):(h.next=z.next,z.next=h),i.interleaved=h;return}}catch{}finally{}o=Zh(n,i,h,u),o!==null&&(h=En(),ni(o,n,u,h),Ep(o,i,u))}}function yp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function Sp(n,i){No=qa=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ep(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tn(n,o)}}var Qa={readContext:Gn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},$_={readContext:Gn,useCallback:function(n,i){return pi().memoizedState=[n,i===void 0?null:i],n},useContext:Gn,useEffect:fp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4194308,4,pp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ka(4,2,n,i)},useMemo:function(n,i){var o=pi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=W_.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=pi();return n={current:n},i.memoizedState=n},useState:up,useDebugValue:uc,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=up(!1),i=n[0];return n=G_.bind(null,n[1]),pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,h=pi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));Br&30||rp(u,i,o)}h.memoizedState=o;var m={value:o,getSnapshot:i};return h.queue=m,fp(op.bind(null,u,m,n),[n]),u.flags|=2048,ko(9,sp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=pi(),i=rn.identifierPrefix;if(Ot){var o=bi,u=Ri;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=V_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},j_={readContext:Gn,useCallback:gp,useContext:Gn,useEffect:lc,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:vp,useReducer:oc,useRef:cp,useState:function(){return oc(Oo)},useDebugValue:uc,useDeferredValue:function(n){var i=Wn();return _p(i,Kt.memoizedState,n)},useTransition:function(){var n=oc(Oo)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:xp,unstable_isNewReconciler:!1},Y_={readContext:Gn,useCallback:gp,useContext:Gn,useEffect:lc,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:hp,useMemo:vp,useReducer:ac,useRef:cp,useState:function(){return ac(Oo)},useDebugValue:uc,useDeferredValue:function(n){var i=Wn();return Kt===null?i.memoizedState=n:_p(i,Kt.memoizedState,n)},useTransition:function(){var n=ac(Oo)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:xp,unstable_isNewReconciler:!1};function Jn(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function cc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ie({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ja={isMounted:function(n){return(n=n._reactInternals)?ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=En(),h=hr(n),m=Li(u,h);m.payload=i,o!=null&&(m.callback=o),i=ur(n,m,h),i!==null&&(ni(i,n,h,u),Xa(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=En(),h=hr(n),m=Li(u,h);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ur(n,m,h),i!==null&&(ni(i,n,h,u),Xa(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),u=hr(n),h=Li(o,u);h.tag=2,i!=null&&(h.callback=i),i=ur(n,h,u),i!==null&&(ni(i,n,u,o),Xa(i,n,u))}};function Mp(n,i,o,u,h,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!wo(o,u)||!wo(h,m):!0}function wp(n,i,o){var u=!1,h=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Gn(m):(h=An(i)?Ur:dn.current,u=i.contextTypes,m=(u=u!=null)?xs(n,h):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ja,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function Tp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ja.enqueueReplaceState(i,i.state,null)}function fc(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Zu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Gn(m):(m=An(i)?Ur:dn.current,h.context=xs(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(cc(n,i,m,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ja.enqueueReplaceState(h,h.state,null),$a(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var h=o}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function dc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function hc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var q_=typeof WeakMap=="function"?WeakMap:Map;function Ap(n,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ol||(ol=!0,Rc=u),hc(n,i)},o}function Cp(n,i,o){o=Li(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){hc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){hc(n,i),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Rp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new q_;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=u0.bind(null,n,i,o),i.then(n,n))}function bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Pp(n,i,o,u,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,ur(o,i,1))),o.lanes|=1),n)}var K_=P.ReactCurrentOwner,Cn=!1;function Sn(n,i,o,u){i.child=n===null?Kh(i,null,o,u):Ms(i,n.child,o,u)}function Lp(n,i,o,u,h){o=o.render;var m=i.ref;return Ts(i,h),u=rc(n,i,o,u,m,h),o=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&o&&Hu(i),i.flags|=1,Sn(n,i,u,h),i.child)}function Dp(n,i,o,u,h){if(n===null){var m=o.type;return typeof m=="function"&&!Nc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Ip(n,i,m,u,h)):(n=dl(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&h)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(M,u)&&n.ref===i.ref)return Di(n,i,h)}return i.flags|=1,n=mr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Ip(n,i,o,u,h){if(n!==null){var m=n.memoizedProps;if(wo(m,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=m,(n.lanes&h)!==0)n.flags&131072&&(Cn=!0);else return i.lanes=n.lanes,Di(n,i,h)}return pc(n,i,o,u,h)}function Up(n,i,o){var u=i.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(bs,On),On|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(bs,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Dt(bs,On),On|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Dt(bs,On),On|=u;return Sn(n,i,h,o),i.child}function Np(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function pc(n,i,o,u,h){var m=An(o)?Ur:dn.current;return m=xs(i,m),Ts(i,h),o=rc(n,i,o,u,m,h),u=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&u&&Hu(i),i.flags|=1,Sn(n,i,o,h),i.child)}function Fp(n,i,o,u,h){if(An(o)){var m=!0;Oa(i)}else m=!1;if(Ts(i,h),i.stateNode===null)tl(n,i),wp(i,o,u),fc(i,o,u,h),u=!0;else if(n===null){var M=i.stateNode,U=i.memoizedProps;M.props=U;var z=M.context,oe=o.contextType;typeof oe=="object"&&oe!==null?oe=Gn(oe):(oe=An(o)?Ur:dn.current,oe=xs(i,oe));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==u||z!==oe)&&Tp(i,M,u,oe),lr=!1;var ve=i.memoizedState;M.state=ve,$a(i,u,M,h),z=i.memoizedState,U!==u||ve!==z||Tn.current||lr?(typeof xe=="function"&&(cc(i,o,xe,u),z=i.memoizedState),(U=lr||Mp(i,o,U,u,ve,z,oe))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),M.props=u,M.state=z,M.context=oe,u=U):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Qh(n,i),U=i.memoizedProps,oe=i.type===i.elementType?U:Jn(i.type,U),M.props=oe,ye=i.pendingProps,ve=M.context,z=o.contextType,typeof z=="object"&&z!==null?z=Gn(z):(z=An(o)?Ur:dn.current,z=xs(i,z));var Ue=o.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(U!==ye||ve!==z)&&Tp(i,M,u,z),lr=!1,ve=i.memoizedState,M.state=ve,$a(i,u,M,h);var He=i.memoizedState;U!==ye||ve!==He||Tn.current||lr?(typeof Ue=="function"&&(cc(i,o,Ue,u),He=i.memoizedState),(oe=lr||Mp(i,o,oe,u,ve,He,z)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=z,u=oe):(typeof M.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return mc(n,i,o,u,m,h)}function mc(n,i,o,u,h,m){Np(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return h&&Hh(i,o,!1),Di(n,i,m);u=i.stateNode,K_.current=i;var U=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,U,m)):Sn(n,i,U,m),i.memoizedState=u.state,h&&Hh(i,o,!0),i.child}function Op(n){var i=n.stateNode;i.pendingContext?Bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bh(n,i.context,!1),Qu(n,i.containerInfo)}function kp(n,i,o,u,h){return Es(),Xu(h),i.flags|=256,Sn(n,i,o,u),i.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function vc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,i,o){var u=i.pendingProps,h=kt.current,m=!1,M=(i.flags&128)!==0,U;if((U=M)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Dt(kt,h&1),n===null)return Wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=hl(M,u,0,null),n=Wr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=vc(o),i.memoizedState=gc,n):_c(i,M));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return Z_(n,i,M,u,U,h,o);if(m){m=u.fallback,M=i.mode,h=n.child,U=h.sibling;var z={mode:"hidden",children:u.children};return!(M&1)&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=mr(h,z),u.subtreeFlags=h.subtreeFlags&14680064),U!==null?m=mr(U,m):(m=Wr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?vc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=gc,u}return m=n.child,n=m.sibling,u=mr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function _c(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,o,u){return u!==null&&Xu(u),Ms(i,n.child,null,o),n=_c(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Z_(n,i,o,u,h,m,M){if(o)return i.flags&256?(i.flags&=-257,u=dc(Error(t(422))),el(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,h=i.mode,u=hl({mode:"visible",children:u.children},h,0,null),m=Wr(m,h,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&Ms(i,n.child,null,M),i.child.memoizedState=vc(M),i.memoizedState=gc,m);if(!(i.mode&1))return el(n,i,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=dc(m,u,void 0),el(n,i,M,u)}if(U=(M&n.childLanes)!==0,Cn||U){if(u=rn,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(u.suspendedLanes|M)?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Pi(n,h),ni(u,n,h,-1))}return Uc(),u=dc(Error(t(421))),el(n,i,M,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=c0.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Fn=rr(h.nextSibling),Nn=i,Ot=!0,Qn=null,n!==null&&(Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Nr,Ri=n.id,bi=n.overflow,Nr=i),i=_c(i,u.children),i.flags|=4096,i)}function zp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),qu(n.return,i,o)}function xc(n,i,o,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=h)}function Hp(n,i,o){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Sn(n,i,u.children,o),u=kt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zp(n,o,i);else if(n.tag===19)zp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(kt,u),!(i.mode&1))i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&ja(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),xc(i,!1,h,o,m);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&ja(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}xc(i,!0,o,null,m);break;case"together":xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Q_(n,i,o){switch(i.tag){case 3:Op(i),Es();break;case 5:tp(i);break;case 1:An(i.type)&&Oa(i);break;case 4:Qu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Dt(Ga,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?Bp(n,i,o):(Dt(kt,kt.current&1),n=Di(n,i,o),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return Hp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Dt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Up(n,i,o)}return Di(n,i,o)}var Vp,yc,Gp,Wp;Vp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},yc=function(){},Gp=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,kr(hi.current);var m=null;switch(o){case"input":h=H(n,h),u=H(n,u),m=[];break;case"select":h=ie({},h,{value:void 0}),u=ie({},u,{value:void 0}),m=[];break;case"textarea":h=T(n,h),u=T(n,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ua)}ft(o,u);var M;o=null;for(oe in h)if(!u.hasOwnProperty(oe)&&h.hasOwnProperty(oe)&&h[oe]!=null)if(oe==="style"){var U=h[oe];for(M in U)U.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in u){var z=u[oe];if(U=h!=null?h[oe]:void 0,u.hasOwnProperty(oe)&&z!==U&&(z!=null||U!=null))if(oe==="style")if(U){for(M in U)!U.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in z)z.hasOwnProperty(M)&&U[M]!==z[M]&&(o||(o={}),o[M]=z[M])}else o||(m||(m=[]),m.push(oe,o)),o=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(m=m||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Ut("scroll",n),m||U===z||(m=[])):(m=m||[]).push(oe,z))}o&&(m=m||[]).push("style",o);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Wp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Bo(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function J_(n,i,o){var u=i.pendingProps;switch(Vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return An(i.type)&&Fa(),pn(i),null;case 3:return u=i.stateNode,As(),Nt(Tn),Nt(dn),tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ha(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Qn!==null&&(Lc(Qn),Qn=null))),yc(n,i),pn(i),null;case 5:Ju(i);var h=kr(Uo.current);if(o=i.type,n!==null&&i.stateNode!=null)Gp(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=kr(hi.current),Ha(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[di]=i,u[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(h=0;h<Ao.length;h++)Ut(Ao[h],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":_n(u,m),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",u);break;case"textarea":re(u,m),Ut("invalid",u)}ft(o,m),h=null;for(var M in m)if(m.hasOwnProperty(M)){var U=m[M];M==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ia(u.textContent,U,n),h=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ia(u.textContent,U,n),h=["children",""+U]):a.hasOwnProperty(M)&&U!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),_e(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ua)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[di]=i,n[bo]=u,Vp(n,i,!1,!1),i.stateNode=n;e:{switch(M=rt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),h=u;break;case"iframe":case"object":case"embed":Ut("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ao.length;h++)Ut(Ao[h],n);h=u;break;case"source":Ut("error",n),h=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),h=u;break;case"details":Ut("toggle",n),h=u;break;case"input":_n(n,u),h=H(n,u),Ut("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=ie({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":re(n,u),h=T(n,u),Ut("invalid",n);break;default:h=u}ft(o,h),U=h;for(m in U)if(U.hasOwnProperty(m)){var z=U[m];m==="style"?tt(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Fe(n,z)):m==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&ut(n,z):typeof z=="number"&&ut(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Ut("scroll",n):z!=null&&L(n,m,z,M))}switch(o){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ua)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Wp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(Uo.current),kr(hi.current),Ha(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(m=u.nodeValue!==o)&&(n=Nn,n!==null))switch(n.tag){case 3:Ia(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ia(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return pn(i),null;case 13:if(Nt(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&i.mode&1&&!(i.flags&128))jh(),Es(),i.flags|=98560,m=!1;else if(m=Ha(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[di]=i}else Es(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else Qn!==null&&(Lc(Qn),Qn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Zt===0&&(Zt=3):Uc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return As(),yc(n,i),n===null&&Co(i.stateNode.containerInfo),pn(i),null;case 10:return Yu(i.type._context),pn(i),null;case 17:return An(i.type)&&Fa(),pn(i),null;case 19:if(Nt(kt),m=i.memoizedState,m===null)return pn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Bo(m,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=ja(n),M!==null){for(i.flags|=128,Bo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&ee()>Ps&&(i.flags|=128,u=!0,Bo(m,!1),i.lanes=4194304)}else{if(!u)if(n=ja(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Bo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ot)return pn(i),null}else 2*ee()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,Bo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ee(),i.sibling=null,o=kt.current,Dt(kt,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Ic(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?On&1073741824&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function e0(n,i){switch(Vu(i),i.tag){case 1:return An(i.type)&&Fa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),Nt(Tn),Nt(dn),tc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Ju(i),null;case 13:if(Nt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return As(),null;case 10:return Yu(i.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var nl=!1,mn=!1,t0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function Sc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var Xp=!1;function n0(n,i){if(Iu=Ea,n=Mh(),Tu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,U=-1,z=-1,oe=0,xe=0,ye=n,ve=null;t:for(;;){for(var Ue;ye!==o||h!==0&&ye.nodeType!==3||(U=M+h),ye!==m||u!==0&&ye.nodeType!==3||(z=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ve=ye,ye=Ue;for(;;){if(ye===n)break t;if(ve===o&&++oe===h&&(U=M),ve===m&&++xe===u&&(z=M),(Ue=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=Ue}o=U===-1||z===-1?null:{start:U,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uu={focusedElem:n,selectionRange:o},Ea=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Wt=He.memoizedState,J=i.stateNode,X=J.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:Jn(i.type,Ge),Wt);J.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Gt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=Xp,Xp=!1,He}function zo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Sc(i,o,m)}h=h.next}while(h!==u)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ec(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function $p(n){var i=n.alternate;i!==null&&(n.alternate=null,$p(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[di],delete i[bo],delete i[ku],delete i[k_],delete i[B_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ua));else if(u!==4&&(n=n.child,n!==null))for(Mc(n,i,o),n=n.sibling;n!==null;)Mc(n,i,o),n=n.sibling}function wc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(wc(n,i,o),n=n.sibling;n!==null;)wc(n,i,o),n=n.sibling}var ln=null,ei=!1;function cr(n,i,o){for(o=o.child;o!==null;)qp(n,i,o),o=o.sibling}function qp(n,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:mn||Rs(o,i);case 6:var u=ln,h=ei;ln=null,cr(n,i,o),ln=u,ei=h,ln!==null&&(ei?(n=ln,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):ln.removeChild(o.stateNode));break;case 18:ln!==null&&(ei?(n=ln,o=o.stateNode,n.nodeType===8?Ou(n.parentNode,o):n.nodeType===1&&Ou(n,o),_o(n)):Ou(ln,o.stateNode));break;case 4:u=ln,h=ei,ln=o.stateNode.containerInfo,ei=!0,cr(n,i,o),ln=u,ei=h;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&Sc(o,i,M),h=h.next}while(h!==u)}cr(n,i,o);break;case 1:if(!mn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(U){Gt(o,i,U)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,cr(n,i,o),mn=u):cr(n,i,o);break;default:cr(n,i,o)}}function Kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new t0),i.forEach(function(u){var h=f0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function ti(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var m=n,M=i,U=M;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,ei=!1;break e;case 3:ln=U.stateNode.containerInfo,ei=!0;break e;case 4:ln=U.stateNode.containerInfo,ei=!0;break e}U=U.return}if(ln===null)throw Error(t(160));qp(m,M,h),ln=null,ei=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(oe){Gt(h,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zp(i,n),i=i.sibling}function Zp(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(i,n),mi(n),u&4){try{zo(3,n,n.return),il(3,n)}catch(Ge){Gt(n,n.return,Ge)}try{zo(5,n,n.return)}catch(Ge){Gt(n,n.return,Ge)}}break;case 1:ti(i,n),mi(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(ti(i,n),mi(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var h=n.stateNode;try{ut(h,"")}catch(Ge){Gt(n,n.return,Ge)}}if(u&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ht(h,m),rt(U,M);var oe=rt(U,m);for(M=0;M<z.length;M+=2){var xe=z[M],ye=z[M+1];xe==="style"?tt(h,ye):xe==="dangerouslySetInnerHTML"?Fe(h,ye):xe==="children"?ut(h,ye):L(h,xe,ye,oe)}switch(U){case"input":ct(h,m);break;case"textarea":me(h,m);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?D(h,!!m.multiple,Ue,!1):ve!==!!m.multiple&&(m.defaultValue!=null?D(h,!!m.multiple,m.defaultValue,!0):D(h,!!m.multiple,m.multiple?[]:"",!1))}h[bo]=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 6:if(ti(i,n),mi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 3:if(ti(i,n),mi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{_o(i.containerInfo)}catch(Ge){Gt(n,n.return,Ge)}break;case 4:ti(i,n),mi(n);break;case 13:ti(i,n),mi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Cc=ee())),u&4&&Kp(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(oe=mn)||xe,ti(i,n),mn=oe):ti(i,n),mi(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!xe&&n.mode&1)for(Oe=n,xe=n.child;xe!==null;){for(ye=Oe=xe;Oe!==null;){switch(ve=Oe,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:zo(4,ve,ve.return);break;case 1:Rs(ve,ve.return);var He=ve.stateNode;if(typeof He.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Gt(u,o,Ge)}}break;case 5:Rs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){em(ye);continue}}Ue!==null?(Ue.return=ve,Oe=Ue):em(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{h=ye.stateNode,oe?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,z=ye.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=qe("display",M))}catch(Ge){Gt(n,n.return,Ge)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ge){Gt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,n),mi(n),u&4&&Kp(n);break;case 21:break;default:ti(i,n),mi(n)}}function mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(jp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ut(h,""),u.flags&=-33);var m=Yp(n);wc(n,m,h);break;case 3:case 4:var M=u.stateNode.containerInfo,U=Yp(n);Mc(n,U,M);break;default:throw Error(t(161))}}catch(z){Gt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function i0(n,i,o){Oe=n,Qp(n)}function Qp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var h=Oe,m=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||nl;if(!M){var U=h.alternate,z=U!==null&&U.memoizedState!==null||mn;U=nl;var oe=mn;if(nl=M,(mn=z)&&!oe)for(Oe=h;Oe!==null;)M=Oe,z=M.child,M.tag===22&&M.memoizedState!==null?tm(h):z!==null?(z.return=M,Oe=z):tm(h);for(;m!==null;)Oe=m,Qp(m),m=m.sibling;Oe=h,nl=U,mn=oe}Jp(n)}else h.subtreeFlags&8772&&m!==null?(m.return=h,Oe=m):Jp(n)}}function Jp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:mn||il(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ep(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ep(i,M,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var xe=oe.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&_o(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Ec(i)}catch(ve){Gt(i,i.return,ve)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function em(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function tm(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(z){Gt(i,o,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(z){Gt(i,h,z)}}var m=i.return;try{Ec(i)}catch(z){Gt(i,m,z)}break;case 5:var M=i.return;try{Ec(i)}catch(z){Gt(i,M,z)}}}catch(z){Gt(i,i.return,z)}if(i===n){Oe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Oe=U;break}Oe=i.return}}var r0=Math.ceil,rl=P.ReactCurrentDispatcher,Tc=P.ReactCurrentOwner,Xn=P.ReactCurrentBatchConfig,St=0,rn=null,$t=null,un=0,On=0,bs=sr(0),Zt=0,Ho=null,zr=0,sl=0,Ac=0,Vo=null,Rn=null,Cc=0,Ps=1/0,Ii=null,ol=!1,Rc=null,fr=null,al=!1,dr=null,ll=0,Go=0,bc=null,ul=-1,cl=0;function En(){return St&6?ee():ul!==-1?ul:ul=ee()}function hr(n){return n.mode&1?St&2&&un!==0?un&-un:H_.transition!==null?(cl===0&&(cl=bt()),cl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:ih(n.type)),n):1}function ni(n,i,o,u){if(50<Go)throw Go=0,bc=null,Error(t(185));en(n,o,u),(!(St&2)||n!==rn)&&(n===rn&&(!(St&2)&&(sl|=o),Zt===4&&pr(n,un)),bn(n,u),o===1&&St===0&&!(i.mode&1)&&(Ps=ee()+500,ka&&ar()))}function bn(n,i){var o=n.callbackNode;yn(n,i);var u=cn(n,n===rn?un:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?z_(im.bind(null,n)):Vh(im.bind(null,n)),F_(function(){!(St&6)&&ar()}),o=null;else{switch(fi(u)){case 1:o=Ee;break;case 4:o=be;break;case 16:o=Ie;break;case 536870912:o=nt;break;default:o=Ie}o=fm(o,nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function nm(n,i){if(ul=-1,cl=0,St&6)throw Error(t(327));var o=n.callbackNode;if(Ls()&&n.callbackNode!==o)return null;var u=cn(n,n===rn?un:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=fl(n,u);else{i=u;var h=St;St|=2;var m=sm();(rn!==n||un!==i)&&(Ii=null,Ps=ee()+500,Vr(n,i));do try{a0();break}catch(U){rm(n,U)}while(!0);ju(),rl.current=m,St=h,$t!==null?i=0:(rn=null,un=0,i=Zt)}if(i!==0){if(i===2&&(h=Ti(n),h!==0&&(u=h,i=Pc(n,h))),i===1)throw o=Ho,Vr(n,0),pr(n,u),bn(n,ee()),o;if(i===6)pr(n,u);else{if(h=n.current.alternate,!(u&30)&&!s0(h)&&(i=fl(n,u),i===2&&(m=Ti(n),m!==0&&(u=m,i=Pc(n,m))),i===1))throw o=Ho,Vr(n,0),pr(n,u),bn(n,ee()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Rn,Ii);break;case 3:if(pr(n,u),(u&130023424)===u&&(i=Cc+500-ee(),10<i)){if(cn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Fu(Gr.bind(null,n,Rn,Ii),i);break}Gr(n,Rn,Ii);break;case 4:if(pr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var M=31-ot(u);m=1<<M,M=i[M],M>h&&(h=M),u&=~m}if(u=h,u=ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*r0(u/1960))-u,10<u){n.timeoutHandle=Fu(Gr.bind(null,n,Rn,Ii),u);break}Gr(n,Rn,Ii);break;case 5:Gr(n,Rn,Ii);break;default:throw Error(t(329))}}}return bn(n,ee()),n.callbackNode===o?nm.bind(null,n):null}function Pc(n,i){var o=Vo;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Rn,Rn=o,i!==null&&Lc(i)),n}function Lc(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function s0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],m=h.getSnapshot;h=h.value;try{if(!Zn(m(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~Ac,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function im(n){if(St&6)throw Error(t(327));Ls();var i=cn(n,0);if(!(i&1))return bn(n,ee()),null;var o=fl(n,i);if(n.tag!==0&&o===2){var u=Ti(n);u!==0&&(i=u,o=Pc(n,u))}if(o===1)throw o=Ho,Vr(n,0),pr(n,i),bn(n,ee()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Rn,Ii),bn(n,ee()),null}function Dc(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(Ps=ee()+500,ka&&ar())}}function Hr(n){dr!==null&&dr.tag===0&&!(St&6)&&Ls();var i=St;St|=1;var o=Xn.transition,u=yt;try{if(Xn.transition=null,yt=1,n)return n()}finally{yt=u,Xn.transition=o,St=i,!(St&6)&&ar()}}function Ic(){On=bs.current,Nt(bs)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,N_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Fa();break;case 3:As(),Nt(Tn),Nt(dn),tc();break;case 5:Ju(u);break;case 4:As();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Yu(u.type._context);break;case 22:case 23:Ic()}o=o.return}if(rn=n,$t=n=mr(n.current,null),un=On=i,Zt=0,Ho=null,Ac=sl=zr=0,Rn=Vo=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=h,u.next=M}o.pending=u}Or=null}return n}function rm(n,i){do{var o=$t;try{if(ju(),Ya.current=Qa,qa){for(var u=Bt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}qa=!1}if(Br=0,nn=Kt=Bt=null,No=!1,Fo=0,Tc.current=null,o===null||o.return===null){Zt=1,Ho=i,$t=null;break}e:{var m=n,M=o.return,U=o,z=i;if(i=un,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,xe=U,ye=xe.tag;if(!(xe.mode&1)&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=bp(M);if(Ue!==null){Ue.flags&=-257,Pp(Ue,M,U,m,i),Ue.mode&1&&Rp(m,oe,i),i=Ue,z=oe;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(z),i.updateQueue=Ge}else He.add(z);break e}else{if(!(i&1)){Rp(m,oe,i),Uc();break e}z=Error(t(426))}}else if(Ot&&U.mode&1){var Wt=bp(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),Pp(Wt,M,U,m,i),Xu(Cs(z,U));break e}}m=z=Cs(z,U),Zt!==4&&(Zt=2),Vo===null?Vo=[m]:Vo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Ap(m,z,i);Jh(m,J);break e;case 1:U=z;var X=m.type,ne=m.stateNode;if(!(m.flags&128)&&(typeof X.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(fr===null||!fr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=Cp(m,U,i);Jh(m,we);break e}}m=m.return}while(m!==null)}am(o)}catch($e){i=$e,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function sm(){var n=rl.current;return rl.current=Qa,n===null?Qa:n}function Uc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||!(zr&268435455)&&!(sl&268435455)||pr(rn,un)}function fl(n,i){var o=St;St|=2;var u=sm();(rn!==n||un!==i)&&(Ii=null,Vr(n,i));do try{o0();break}catch(h){rm(n,h)}while(!0);if(ju(),St=o,rl.current=u,$t!==null)throw Error(t(261));return rn=null,un=0,Zt}function o0(){for(;$t!==null;)om($t)}function a0(){for(;$t!==null&&!Y();)om($t)}function om(n){var i=cm(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?am(n):$t=i,Tc.current=null}function am(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=e0(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,$t=null;return}}else if(o=J_(o,i,On),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Zt===0&&(Zt=5)}function Gr(n,i,o){var u=yt,h=Xn.transition;try{Xn.transition=null,yt=1,l0(n,i,o,u)}finally{Xn.transition=h,yt=u}return null}function l0(n,i,o,u){do Ls();while(dr!==null);if(St&6)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(an(n,m),n===rn&&($t=rn=null,un=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||al||(al=!0,fm(Ie,function(){return Ls(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=Xn.transition,Xn.transition=null;var M=yt;yt=1;var U=St;St|=4,Tc.current=null,n0(n,o),Zp(o,n),R_(Uu),Ea=!!Iu,Uu=Iu=null,n.current=o,i0(o),se(),St=U,yt=M,Xn.transition=m}else n.current=o;if(al&&(al=!1,dr=n,ll=h),m=n.pendingLanes,m===0&&(fr=null),gt(o.stateNode),bn(n,ee()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(ol)throw ol=!1,n=Rc,Rc=null,n;return ll&1&&n.tag!==0&&Ls(),m=n.pendingLanes,m&1?n===bc?Go++:(Go=0,bc=n):Go=0,ar(),null}function Ls(){if(dr!==null){var n=fi(ll),i=Xn.transition,o=yt;try{if(Xn.transition=null,yt=16>n?16:n,dr===null)var u=!1;else{if(n=dr,dr=null,ll=0,St&6)throw Error(t(331));var h=St;for(St|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if(Oe.flags&16){var U=m.deletions;if(U!==null){for(var z=0;z<U.length;z++){var oe=U[z];for(Oe=oe;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:zo(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Oe=ye;else for(;Oe!==null;){xe=Oe;var ve=xe.sibling,Ue=xe.return;if($p(xe),xe===oe){Oe=null;break}if(ve!==null){ve.return=Ue,Oe=ve;break}Oe=Ue}}}var He=m.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Wt=Ge.sibling;Ge.sibling=null,Ge=Wt}while(Ge!==null)}}Oe=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:zo(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,Oe=J;break e}Oe=m.return}}var X=n.current;for(Oe=X;Oe!==null;){M=Oe;var ne=M.child;if(M.subtreeFlags&2064&&ne!==null)ne.return=M,Oe=ne;else e:for(M=X;Oe!==null;){if(U=Oe,U.flags&2048)try{switch(U.tag){case 0:case 11:case 15:il(9,U)}}catch($e){Gt(U,U.return,$e)}if(U===M){Oe=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Oe=we;break e}Oe=U.return}}if(St=h,ar(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{yt=o,Xn.transition=i}}return!1}function lm(n,i,o){i=Cs(o,i),i=Ap(n,i,1),n=ur(n,i,1),i=En(),n!==null&&(en(n,1,i),bn(n,i))}function Gt(n,i,o){if(n.tag===3)lm(n,n,o);else for(;i!==null;){if(i.tag===3){lm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=Cs(o,n),n=Cp(i,n,1),i=ur(i,n,1),n=En(),i!==null&&(en(i,1,n),bn(i,n));break}}i=i.return}}function u0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(un&o)===o&&(Zt===4||Zt===3&&(un&130023424)===un&&500>ee()-Cc?Vr(n,0):Ac|=o),bn(n,i)}function um(n,i){i===0&&(n.mode&1?(i=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):i=1);var o=En();n=Pi(n,i),n!==null&&(en(n,i,o),bn(n,o))}function c0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),um(n,o)}function f0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),um(n,o)}var cm;cm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)Cn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Cn=!1,Q_(n,i,o);Cn=!!(n.flags&131072)}else Cn=!1,Ot&&i.flags&1048576&&Gh(i,za,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;tl(n,i),n=i.pendingProps;var h=xs(i,dn.current);Ts(i,o),h=rc(null,i,u,n,h,o);var m=sc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(m=!0,Oa(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Zu(i),h.updater=Ja,i.stateNode=h,h._reactInternals=i,fc(i,u,n,o),i=mc(null,i,u,!0,m,o)):(i.tag=0,Ot&&m&&Hu(i),Sn(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=h0(u),n=Jn(u,n),h){case 0:i=pc(null,i,u,n,o);break e;case 1:i=Fp(null,i,u,n,o);break e;case 11:i=Lp(null,i,u,n,o);break e;case 14:i=Dp(null,i,u,Jn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),pc(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),Fp(n,i,u,h,o);case 3:e:{if(Op(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,h=m.element,Qh(n,i),$a(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Cs(Error(t(423)),i),i=kp(n,i,u,o,h);break e}else if(u!==h){h=Cs(Error(t(424)),i),i=kp(n,i,u,o,h);break e}else for(Fn=rr(i.stateNode.containerInfo.firstChild),Nn=i,Ot=!0,Qn=null,o=Kh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),u===h){i=Di(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return tp(i),n===null&&Wu(i),u=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,M=h.children,Nu(u,h)?M=null:m!==null&&Nu(u,m)&&(i.flags|=32),Np(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&Wu(i),null;case 13:return Bp(n,i,o);case 4:return Qu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),Lp(n,i,u,h,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,m=i.memoizedProps,M=h.value,Dt(Ga,u._currentValue),u._currentValue=M,m!==null)if(Zn(m.value,M)){if(m.children===h.children&&!Tn.current){i=Di(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){M=m.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(m.tag===1){z=Li(-1,o&-o),z.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var xe=oe.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),oe.pending=z}}m.lanes|=o,z=m.alternate,z!==null&&(z.lanes|=o),qu(m.return,o,i),U.lanes|=o;break}z=z.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,U=M.alternate,U!==null&&(U.lanes|=o),qu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Sn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Ts(i,o),h=Gn(h),u=u(h),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,h=Jn(u,i.pendingProps),h=Jn(u.type,h),Dp(n,i,u,h,o);case 15:return Ip(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),tl(n,i),i.tag=1,An(u)?(n=!0,Oa(i)):n=!1,Ts(i,o),wp(i,u,h),fc(i,u,h,o),mc(null,i,u,!0,n,o);case 19:return Hp(n,i,o);case 22:return Up(n,i,o)}throw Error(t(156,i.tag))};function fm(n,i){return xa(n,i)}function d0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,o,u){return new d0(n,i,o,u)}function Nc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function h0(n){if(typeof n=="function")return Nc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===F)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=$n(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function dl(n,i,o,u,h,m){var M=2;if(u=n,typeof n=="function")Nc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case k:return Wr(o.children,h,m,i);case q:M=8,h|=8;break;case R:return n=$n(12,o,i,h|2),n.elementType=R,n.lanes=m,n;case ae:return n=$n(13,o,i,h),n.elementType=ae,n.lanes=m,n;case V:return n=$n(19,o,i,h),n.elementType=V,n.lanes=m,n;case B:return hl(o,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case W:M=9;break e;case ce:M=11;break e;case F:M=14;break e;case O:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(M,o,i,h),i.elementType=n,i.type=u,i.lanes=m,i}function Wr(n,i,o,u){return n=$n(7,n,u,i),n.lanes=o,n}function hl(n,i,o,u){return n=$n(22,n,u,i),n.elementType=B,n.lanes=o,n.stateNode={isHidden:!1},n}function Fc(n,i,o){return n=$n(6,n,null,i),n.lanes=o,n}function Oc(n,i,o){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function p0(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function kc(n,i,o,u,h,m,M,U,z){return n=new p0(n,i,o,U,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(m),n}function m0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function dm(n){if(!n)return or;n=n._reactInternals;e:{if(ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return zh(n,o,i)}return i}function hm(n,i,o,u,h,m,M,U,z){return n=kc(o,u,!0,n,h,m,M,U,z),n.context=dm(null),o=n.current,u=En(),h=hr(o),m=Li(u,h),m.callback=i??null,ur(o,m,h),n.current.lanes=h,en(n,h,u),bn(n,u),n}function pl(n,i,o,u){var h=i.current,m=En(),M=hr(h);return o=dm(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ur(h,i,M),n!==null&&(ni(n,h,M,m),Xa(n,h,M)),M}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Bc(n,i){pm(n,i),(n=n.alternate)&&pm(n,i)}var mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zc(n){this._internalRoot=n}gl.prototype.render=zc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hr(function(){pl(null,n,null,null)}),i[Ai]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Qd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&th(n)}};function Hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gm(){}function g0(n,i,o,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var oe=ml(M);m.call(oe)}}var M=hm(i,u,n,0,null,!1,!1,"",gm);return n._reactRootContainer=M,n[Ai]=M.current,Co(n.nodeType===8?n.parentNode:n),Hr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var U=u;u=function(){var oe=ml(z);U.call(oe)}}var z=kc(n,0,!1,null,null,!1,!1,"",gm);return n._reactRootContainer=z,n[Ai]=z.current,Co(n.nodeType===8?n.parentNode:n),Hr(function(){pl(i,z,o,u)}),z}function _l(n,i,o,u,h){var m=o._reactRootContainer;if(m){var M=m;if(typeof h=="function"){var U=h;h=function(){var z=ml(M);U.call(z)}}pl(i,M,n,h)}else M=g0(o,i,n,h,u);return ml(M)}Kd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(tn(i,o|1),bn(i,ee()),!(St&6)&&(Ps=ee()+500,ar()))}break;case 13:Hr(function(){var u=Pi(n,1);if(u!==null){var h=En();ni(u,n,1,h)}}),Bc(n,1)}},du=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var o=En();ni(i,n,134217728,o)}Bc(n,134217728)}},Zd=function(n){if(n.tag===13){var i=hr(n),o=Pi(n,i);if(o!==null){var u=En();ni(o,n,i,u)}Bc(n,i)}},Qd=function(){return yt},Jd=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},Re=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Na(u);if(!h)throw Error(t(90));pt(u),ct(u,h)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},It=Dc,qt=Hr;var v0={usingClientEntryPoint:!1,Events:[Po,vs,Na,Le,st,Dc]},Wo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_0={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=va(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{et=xl.inject(_0),Ve=xl}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0,Pn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(i))throw Error(t(200));return m0(n,i,null,o)},Pn.createRoot=function(n,i){if(!Hc(n))throw Error(t(299));var o=!1,u="",h=mm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=kc(n,1,!1,null,null,o,!1,u,h),n[Ai]=i.current,Co(n.nodeType===8?n.parentNode:n),new zc(i)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=va(i),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return Hr(n)},Pn.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,o)},Pn.hydrateRoot=function(n,i,o){if(!Hc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,m="",M=mm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=hm(i,null,n,1,o??null,h,!1,m,M),n[Ai]=i.current,Co(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new gl(i)},Pn.render=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,o)},Pn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Hr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Pn.unstable_batchedUpdates=Dc,Pn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,o,!1,u)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var wm;function R0(){if(wm)return Wc.exports;wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wc.exports=C0(),Wc.exports}var Tm;function b0(){if(Tm)return yl;Tm=1;var r=R0();return yl.createRoot=r.createRoot,yl.hydrateRoot=r.hydrateRoot,yl}var P0=b0(),$o={},Am;function L0(){if(Am)return $o;Am=1,Object.defineProperty($o,"__esModule",{value:!0}),$o.parse=c,$o.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function c(_,S){const E=new l,w=_.length;if(w<2)return E;const y=(S==null?void 0:S.decode)||g;let v=0;do{const b=_.indexOf("=",v);if(b===-1)break;const L=_.indexOf(";",v),P=L===-1?w:L;if(b>P){v=_.lastIndexOf(";",b-1)+1;continue}const $=f(_,v,b),G=d(_,b,$),k=_.slice($,G);if(E[k]===void 0){let q=f(_,b+1,P),R=d(_,P,q);const C=y(_.slice(q,R));E[k]=C}v=P+1}while(v<w);return E}function f(_,S,E){do{const w=_.charCodeAt(S);if(w!==32&&w!==9)return S}while(++S<E);return E}function d(_,S,E){for(;S>E;){const w=_.charCodeAt(--S);if(w!==32&&w!==9)return S+1}return E}function p(_,S,E){const w=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(_))throw new TypeError(`argument name is invalid: ${_}`);const y=w(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let v=_+"="+y;if(!E)return v;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);v+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);v+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);v+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);v+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(v+="; HttpOnly"),E.secure&&(v+="; Secure"),E.partitioned&&(v+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return v}function g(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function x(_){return a.call(_)==="[object Date]"}return $o}L0();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cm="popstate";function D0(r={}){function e(s,a){let{pathname:l,search:c,hash:f}=s.location;return kf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:na(a)}return U0(e,t,null,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Si(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I0(){return Math.random().toString(36).substring(2,10)}function Rm(r,e){return{usr:r.state,key:r.key,idx:e}}function kf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?lo(e):e,state:t,key:e&&e.key||s||I0()}}function na({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function lo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function U0(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=g(),v=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:v})}function _(y,v){f="PUSH";let b=kf(w.location,y,v);p=g()+1;let L=Rm(b,p),P=w.createHref(b);try{c.pushState(L,"",P)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;a.location.assign(P)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,v){f="REPLACE";let b=kf(w.location,y,v);p=g();let L=Rm(b,p),P=w.createHref(b);c.replaceState(L,"",P),l&&d&&d({action:f,location:w.location,delta:0})}function E(y){let v=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof y=="string"?y:na(y);return b=b.replace(/ $/,"%20"),zt(v,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,v)}let w={get action(){return f},get location(){return r(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Cm,x),d=y,()=>{a.removeEventListener(Cm,x),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let v=E(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:S,go(y){return c.go(y)}};return w}function Hg(r,e,t="/"){return N0(r,e,t,!1)}function N0(r,e,t,s){let a=typeof e=="string"?lo(e):e,l=Cr(a.pathname||"/",t);if(l==null)return null;let c=Vg(r);F0(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let p=j0(l);f=X0(c[d],p,s)}return f}function Vg(r,e=[],t=[],s=""){let a=(l,c,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(zt(d.relativePath.startsWith(s),`Absolute route path "${d.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(s.length));let p=Wi([s,d.relativePath]),g=t.concat(d);l.children&&l.children.length>0&&(zt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Vg(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:G0(p,l.index),routesMeta:g})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let d of Gg(l.path))a(l,c,d)}),e}function Gg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=Gg(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function F0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:W0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var O0=/^:[\w-]+$/,k0=3,B0=2,z0=1,H0=10,V0=-2,bm=r=>r==="*";function G0(r,e){let t=r.split("/"),s=t.length;return t.some(bm)&&(s+=V0),e&&(s+=B0),t.filter(a=>!bm(a)).reduce((a,l)=>a+(O0.test(l)?k0:l===""?z0:H0),s)}function W0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function X0(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",x=tu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},g),_=d.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=tu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Wi([l,x.pathname]),pathnameBase:Z0(Wi([l,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(l=Wi([l,x.pathnameBase]))}return c}function tu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=$0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:x},_)=>{if(g==="*"){let E=f[_]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[_];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function $0(r,e=!1,t=!0){Si(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d)=>(s.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function j0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Cr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Y0(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?lo(r):r;return{pathname:t?t.startsWith("/")?t:q0(t,e):e,search:Q0(s),hash:J0(a)}}function q0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function jc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function K0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Wg(r){let e=K0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Xg(r,e,t,s=!1){let a;typeof r=="string"?a=lo(r):(a={...r},zt(!a.pathname||!a.pathname.includes("?"),jc("?","pathname","search",a)),zt(!a.pathname||!a.pathname.includes("#"),jc("#","pathname","hash",a)),zt(!a.search||!a.search.includes("#"),jc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),x-=1;a.pathname=_.join("/")}f=x>=0?e[x]:"/"}let d=Y0(a,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}var Wi=r=>r.join("/").replace(/\/\/+/g,"/"),Z0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Q0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,J0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function ex(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var $g=["POST","PUT","PATCH","DELETE"];new Set($g);var tx=["GET",...$g];new Set(tx);var uo=fe.createContext(null);uo.displayName="DataRouter";var su=fe.createContext(null);su.displayName="DataRouterState";var jg=fe.createContext({isTransitioning:!1});jg.displayName="ViewTransition";var nx=fe.createContext(new Map);nx.displayName="Fetchers";var ix=fe.createContext(null);ix.displayName="Await";var Ei=fe.createContext(null);Ei.displayName="Navigation";var oa=fe.createContext(null);oa.displayName="Location";var Yi=fe.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Id=fe.createContext(null);Id.displayName="RouteError";function rx(r,{relative:e}={}){zt(aa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=fe.useContext(Ei),{hash:a,pathname:l,search:c}=la(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Wi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function aa(){return fe.useContext(oa)!=null}function Pr(){return zt(aa(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(oa).location}var Yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qg(r){fe.useContext(Ei).static||fe.useLayoutEffect(r)}function sx(){let{isDataRoute:r}=fe.useContext(Yi);return r?_x():ox()}function ox(){zt(aa(),"useNavigate() may be used only in the context of a <Router> component.");let r=fe.useContext(uo),{basename:e,navigator:t}=fe.useContext(Ei),{matches:s}=fe.useContext(Yi),{pathname:a}=Pr(),l=JSON.stringify(Wg(s)),c=fe.useRef(!1);return qg(()=>{c.current=!0}),fe.useCallback((d,p={})=>{if(Si(c.current,Yg),!c.current)return;if(typeof d=="number"){t.go(d);return}let g=Xg(d,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Wi([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,a,r])}fe.createContext(null);function la(r,{relative:e}={}){let{matches:t}=fe.useContext(Yi),{pathname:s}=Pr(),a=JSON.stringify(Wg(t));return fe.useMemo(()=>Xg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function ax(r,e){return Kg(r,e)}function Kg(r,e,t,s){var v;zt(aa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=fe.useContext(Ei),{matches:l}=fe.useContext(Yi),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let b=g&&g.path||"";Zg(d,!g||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let x=Pr(),_;if(e){let b=typeof e=="string"?lo(e):e;zt(p==="/"||((v=b.pathname)==null?void 0:v.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${b.pathname}" was given in the \`location\` prop.`),_=b}else _=x;let S=_.pathname||"/",E=S;if(p!=="/"){let b=p.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=Hg(r,{pathname:E});Si(g||w!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Si(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=dx(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:Wi([p,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?p:Wi([p,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,s);return e&&y?fe.createElement(oa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},y):y}function lx(){let r=vx(),e=ex(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:l},"ErrorBoundary")," or"," ",fe.createElement("code",{style:l},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),t?fe.createElement("pre",{style:a},t):null,c)}var ux=fe.createElement(lx,null),cx=class extends fe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?fe.createElement(Yi.Provider,{value:this.props.routeContext},fe.createElement(Id.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fx({routeContext:r,match:e,children:t}){let s=fe.useContext(uo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(Yi.Provider,{value:r},t)}function dx(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);zt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,f=-1;if(t)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:g,errors:x}=t,_=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||_){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((d,p,g)=>{let x,_=!1,S=null,E=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||ux,c&&(f<0&&g===0?(Zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,E=null):f===g&&(_=!0,E=p.route.hydrateFallbackElement||null)));let w=e.concat(a.slice(0,g+1)),y=()=>{let v;return x?v=S:_?v=E:p.route.Component?v=fe.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=d,fe.createElement(fx,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?fe.createElement(cx,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):y()},null)}function Ud(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hx(r){let e=fe.useContext(uo);return zt(e,Ud(r)),e}function px(r){let e=fe.useContext(su);return zt(e,Ud(r)),e}function mx(r){let e=fe.useContext(Yi);return zt(e,Ud(r)),e}function Nd(r){let e=mx(r),t=e.matches[e.matches.length-1];return zt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function gx(){return Nd("useRouteId")}function vx(){var s;let r=fe.useContext(Id),e=px("useRouteError"),t=Nd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function _x(){let{router:r}=hx("useNavigate"),e=Nd("useNavigate"),t=fe.useRef(!1);return qg(()=>{t.current=!0}),fe.useCallback(async(a,l={})=>{Si(t.current,Yg),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var Pm={};function Zg(r,e,t){!e&&!Pm[r]&&(Pm[r]=!0,Si(!1,t))}fe.memo(xx);function xx({routes:r,future:e,state:t}){return Kg(r,void 0,t,e)}function js(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){zt(!aa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=fe.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=lo(t));let{pathname:d="/",search:p="",hash:g="",state:x=null,key:_="default"}=t,S=fe.useMemo(()=>{let E=Cr(d,c);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:_},navigationType:s}},[c,d,p,g,x,_,s]);return Si(S!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:fe.createElement(Ei.Provider,{value:f},fe.createElement(oa.Provider,{children:e,value:S}))}function Sx({children:r,location:e}){return ax(Bf(r),e)}function Bf(r,e=[]){let t=[];return fe.Children.forEach(r,(s,a)=>{if(!fe.isValidElement(s))return;let l=[...e,a];if(s.type===fe.Fragment){t.push.apply(t,Bf(s.props.children,l));return}zt(s.type===js,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Bf(s.props.children,l)),t.push(c)}),t}var Xl="get",$l="application/x-www-form-urlencoded";function ou(r){return r!=null&&typeof r.tagName=="string"}function Ex(r){return ou(r)&&r.tagName.toLowerCase()==="button"}function Mx(r){return ou(r)&&r.tagName.toLowerCase()==="form"}function wx(r){return ou(r)&&r.tagName.toLowerCase()==="input"}function Tx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ax(r,e){return r.button===0&&(!e||e==="_self")&&!Tx(r)}var Sl=null;function Cx(){if(Sl===null)try{new FormData(document.createElement("form"),0),Sl=!1}catch{Sl=!0}return Sl}var Rx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yc(r){return r!=null&&!Rx.has(r)?(Si(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$l}"`),null):r}function bx(r,e){let t,s,a,l,c;if(Mx(r)){let f=r.getAttribute("action");s=f?Cr(f,e):null,t=r.getAttribute("method")||Xl,a=Yc(r.getAttribute("enctype"))||$l,l=new FormData(r)}else if(Ex(r)||wx(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(s=d?Cr(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Xl,a=Yc(r.getAttribute("formenctype"))||Yc(f.getAttribute("enctype"))||$l,l=new FormData(f,r),!Cx()){let{name:p,type:g,value:x}=r;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,x)}}else{if(ou(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xl,s=null,a=$l,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Fd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Px(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Dx(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Px(l,t);return c.links?c.links():[]}return[]}));return Fx(s.flat(1).filter(Lx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Lm(r,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>{var g;return t[p].pathname!==d.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==d.params["*"]};return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{var x;let g=s.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let _=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Ix(r,e){return Ux(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function Ux(r){return[...new Set(r)]}function Nx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Fx(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(Nx(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Ox(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function kx(){let r=fe.useContext(uo);return Fd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Bx(){let r=fe.useContext(su);return Fd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Od=fe.createContext(void 0);Od.displayName="FrameworkContext";function Qg(){let r=fe.useContext(Od);return Fd(r,"You must render this element inside a <HydratedRouter> element"),r}function zx(r,e){let t=fe.useContext(Od),[s,a]=fe.useState(!1),[l,c]=fe.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,_=fe.useRef(null);fe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let w=v=>{v.forEach(b=>{c(b.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[r]),fe.useEffect(()=>{if(s){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,_,{}]:[l,_,{onFocus:jo(f,S),onBlur:jo(d,E),onMouseEnter:jo(p,S),onMouseLeave:jo(g,E),onTouchStart:jo(x,S)}]:[!1,_,{}]}function jo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Hx({page:r,...e}){let{router:t}=kx(),s=fe.useMemo(()=>Hg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?fe.createElement(Gx,{page:r,matches:s,...e}):null}function Vx(r){let{manifest:e,routeModules:t}=Qg(),[s,a]=fe.useState([]);return fe.useEffect(()=>{let l=!1;return Dx(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function Gx({page:r,matches:e,...t}){let s=Pr(),{manifest:a,routeModules:l}=Qg(),{loaderData:c,matches:f}=Bx(),d=fe.useMemo(()=>Lm(r,e,f,a,s,"data"),[r,e,f,a,s]),p=fe.useMemo(()=>Lm(r,e,f,a,s,"assets"),[r,e,f,a,s]),g=fe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let S=new Set,E=!1;if(e.forEach(y=>{var b;let v=a.routes[y.route.id];!v||!v.hasLoader||(!d.some(L=>L.route.id===y.route.id)&&y.route.id in c&&((b=l[y.route.id])!=null&&b.shouldRevalidate)||v.hasClientLoader?E=!0:S.add(y.route.id))}),S.size===0)return[];let w=Ox(r);return E&&S.size>0&&w.searchParams.set("_routes",e.filter(y=>S.has(y.route.id)).map(y=>y.route.id).join(",")),[w.pathname+w.search]},[c,s,a,d,e,r,l]),x=fe.useMemo(()=>Ix(p,a),[p,a]),_=Vx(p);return fe.createElement(fe.Fragment,null,g.map(S=>fe.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),x.map(S=>fe.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),_.map(({key:S,link:E})=>fe.createElement("link",{key:S,...E})))}function Wx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jg&&(window.__reactRouterVersion="7.1.1")}catch{}function Xx({basename:r,children:e,window:t}){let s=fe.useRef();s.current==null&&(s.current=D0({window:t,v5Compat:!0}));let a=s.current,[l,c]=fe.useState({action:a.action,location:a.location}),f=fe.useCallback(d=>{fe.startTransition(()=>c(d))},[c]);return fe.useLayoutEffect(()=>a.listen(f),[a,f]),fe.createElement(yx,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tv=fe.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:f,target:d,to:p,preventScrollReset:g,viewTransition:x,..._},S){let{basename:E}=fe.useContext(Ei),w=typeof p=="string"&&ev.test(p),y,v=!1;if(typeof p=="string"&&w&&(y=p,Jg))try{let R=new URL(window.location.href),C=p.startsWith("//")?new URL(R.protocol+p):new URL(p),W=Cr(C.pathname,E);C.origin===R.origin&&W!=null?p=W+C.search+C.hash:v=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=rx(p,{relative:a}),[L,P,$]=zx(s,_),G=Yx(p,{replace:c,state:f,target:d,preventScrollReset:g,relative:a,viewTransition:x});function k(R){e&&e(R),R.defaultPrevented||G(R)}let q=fe.createElement("a",{..._,...$,href:y||b,onClick:v||l?e:k,ref:Wx(S,P),target:d,"data-discover":!w&&t==="render"?"true":void 0});return L&&!w?fe.createElement(fe.Fragment,null,q,fe.createElement(Hx,{page:b})):q});tv.displayName="Link";var jl=fe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},g){let x=la(c,{relative:p.relative}),_=Pr(),S=fe.useContext(su),{navigator:E,basename:w}=fe.useContext(Ei),y=S!=null&&Jx(x)&&f===!0,v=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,b=_.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&w&&(L=Cr(L,w)||L);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let $=b===v||!a&&b.startsWith(v)&&b.charAt(P)==="/",G=L!=null&&(L===v||!a&&L.startsWith(v)&&L.charAt(v.length)==="/"),k={isActive:$,isPending:G,isTransitioning:y},q=$?e:void 0,R;typeof s=="function"?R=s(k):R=[s,$?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(k):l;return fe.createElement(tv,{...p,"aria-current":q,className:R,ref:g,style:C,to:c,viewTransition:f},typeof d=="function"?d(k):d)});jl.displayName="NavLink";var $x=fe.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Xl,action:f,onSubmit:d,relative:p,preventScrollReset:g,viewTransition:x,..._},S)=>{let E=Zx(),w=Qx(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",v=typeof f=="string"&&ev.test(f),b=L=>{if(d&&d(L),L.defaultPrevented)return;L.preventDefault();let P=L.nativeEvent.submitter,$=(P==null?void 0:P.getAttribute("formmethod"))||c;E(P||L.currentTarget,{fetcherKey:e,method:$,navigate:t,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:x})};return fe.createElement("form",{ref:S,method:y,action:w,onSubmit:s?d:b,..._,"data-discover":!v&&r==="render"?"true":void 0})});$x.displayName="Form";function jx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nv(r){let e=fe.useContext(uo);return zt(e,jx(r)),e}function Yx(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=sx(),d=Pr(),p=la(r,{relative:l});return fe.useCallback(g=>{if(Ax(g,e)){g.preventDefault();let x=t!==void 0?t:na(d)===na(p);f(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[d,f,p,t,s,e,r,a,l,c])}var qx=0,Kx=()=>`__${String(++qx)}__`;function Zx(){let{router:r}=nv("useSubmit"),{basename:e}=fe.useContext(Ei),t=gx();return fe.useCallback(async(s,a={})=>{let{action:l,method:c,encType:f,formData:d,body:p}=bx(s,e);if(a.navigate===!1){let g=a.fetcherKey||Kx();await r.fetch(g,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function Qx(r,{relative:e}={}){let{basename:t}=fe.useContext(Ei),s=fe.useContext(Yi);zt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...la(r||".",{relative:e})},c=Pr();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Wi([t,l.pathname])),na(l)}function Jx(r,e={}){let t=fe.useContext(jg);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=nv("useViewTransitionState"),a=la(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Cr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Cr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return tu(a.pathname,c)!=null||tu(a.pathname,l)!=null}new TextEncoder;var qc,Dm;function ey(){if(Dm)return qc;Dm=1;var r=typeof Element<"u",e=typeof Map=="function",t=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function a(l,c){if(l===c)return!0;if(l&&c&&typeof l=="object"&&typeof c=="object"){if(l.constructor!==c.constructor)return!1;var f,d,p;if(Array.isArray(l)){if(f=l.length,f!=c.length)return!1;for(d=f;d--!==0;)if(!a(l[d],c[d]))return!1;return!0}var g;if(e&&l instanceof Map&&c instanceof Map){if(l.size!==c.size)return!1;for(g=l.entries();!(d=g.next()).done;)if(!c.has(d.value[0]))return!1;for(g=l.entries();!(d=g.next()).done;)if(!a(d.value[1],c.get(d.value[0])))return!1;return!0}if(t&&l instanceof Set&&c instanceof Set){if(l.size!==c.size)return!1;for(g=l.entries();!(d=g.next()).done;)if(!c.has(d.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(c)){if(f=l.length,f!=c.length)return!1;for(d=f;d--!==0;)if(l[d]!==c[d])return!1;return!0}if(l.constructor===RegExp)return l.source===c.source&&l.flags===c.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof c.valueOf=="function")return l.valueOf()===c.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof c.toString=="function")return l.toString()===c.toString();if(p=Object.keys(l),f=p.length,f!==Object.keys(c).length)return!1;for(d=f;d--!==0;)if(!Object.prototype.hasOwnProperty.call(c,p[d]))return!1;if(r&&l instanceof Element)return!1;for(d=f;d--!==0;)if(!((p[d]==="_owner"||p[d]==="__v"||p[d]==="__o")&&l.$$typeof)&&!a(l[p[d]],c[p[d]]))return!1;return!0}return l!==l&&c!==c}return qc=function(c,f){try{return a(c,f)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}},qc}var ty=ey();const ny=sa(ty);var Kc,Im;function iy(){if(Im)return Kc;Im=1;var r=function(e,t,s,a,l,c,f,d){if(!e){var p;if(t===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[s,a,l,c,f,d],x=0;p=new Error(t.replace(/%s/g,function(){return g[x++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return Kc=r,Kc}var ry=iy();const Um=sa(ry);var Zc,Nm;function sy(){return Nm||(Nm=1,Zc=function(e,t,s,a){var l=s?s.call(a,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var c=Object.keys(e),f=Object.keys(t);if(c.length!==f.length)return!1;for(var d=Object.prototype.hasOwnProperty.bind(t),p=0;p<c.length;p++){var g=c[p];if(!d(g))return!1;var x=e[g],_=t[g];if(l=s?s.call(a,x,_,g):void 0,l===!1||l===void 0&&x!==_)return!1}return!0}),Zc}var oy=sy();const ay=sa(oy);var iv=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(iv||{}),Qc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Fm=Object.values(iv),kd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ly=Object.entries(kd).reduce((r,[e,t])=>(r[t]=e,r),{}),ai="data-rh",Ks={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Zs=(r,e)=>{for(let t=r.length-1;t>=0;t-=1){const s=r[t];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},uy=r=>{let e=Zs(r,"title");const t=Zs(r,Ks.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const s=Zs(r,Ks.DEFAULT_TITLE);return e||s||void 0},cy=r=>Zs(r,Ks.ON_CHANGE_CLIENT_STATE)||(()=>{}),Jc=(r,e)=>e.filter(t=>typeof t[r]<"u").map(t=>t[r]).reduce((t,s)=>({...t,...s}),{}),fy=(r,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,s)=>{if(!t.length){const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const f=a[l].toLowerCase();if(r.indexOf(f)!==-1&&s[f])return t.concat(s)}}return t},[]),dy=r=>console&&typeof console.warn=="function"&&console.warn(r),Yo=(r,e,t)=>{const s={};return t.filter(a=>Array.isArray(a[r])?!0:(typeof a[r]<"u"&&dy(`Helmet: ${r} should be of type "Array". Instead found type "${typeof a[r]}"`),!1)).map(a=>a[r]).reverse().reduce((a,l)=>{const c={};l.filter(d=>{let p;const g=Object.keys(d);for(let _=0;_<g.length;_+=1){const S=g[_],E=S.toLowerCase();e.indexOf(E)!==-1&&!(p==="rel"&&d[p].toLowerCase()==="canonical")&&!(E==="rel"&&d[E].toLowerCase()==="stylesheet")&&(p=E),e.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(p=S)}if(!p||!d[p])return!1;const x=d[p].toLowerCase();return s[p]||(s[p]={}),c[p]||(c[p]={}),s[p][x]?!1:(c[p][x]=!0,!0)}).reverse().forEach(d=>a.push(d));const f=Object.keys(c);for(let d=0;d<f.length;d+=1){const p=f[d],g={...s[p],...c[p]};s[p]=g}return a},[]).reverse()},hy=(r,e)=>{if(Array.isArray(r)&&r.length){for(let t=0;t<r.length;t+=1)if(r[t][e])return!0}return!1},py=r=>({baseTag:fy(["href"],r),bodyAttributes:Jc("bodyAttributes",r),defer:Zs(r,Ks.DEFER),encode:Zs(r,Ks.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Jc("htmlAttributes",r),linkTags:Yo("link",["rel","href"],r),metaTags:Yo("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Yo("noscript",["innerHTML"],r),onChangeClientState:cy(r),scriptTags:Yo("script",["src","innerHTML"],r),styleTags:Yo("style",["cssText"],r),title:uy(r),titleAttributes:Jc("titleAttributes",r),prioritizeSeoTags:hy(r,Ks.PRIORITIZE_SEO_TAGS)}),rv=r=>Array.isArray(r)?r.join(""):r,my=(r,e)=>{const t=Object.keys(r);for(let s=0;s<t.length;s+=1)if(e[t[s]]&&e[t[s]].includes(r[t[s]]))return!0;return!1},ef=(r,e)=>Array.isArray(r)?r.reduce((t,s)=>(my(s,e)?t.priority.push(s):t.default.push(s),t),{priority:[],default:[]}):{default:r,priority:[]},Om=(r,e)=>({...r,[e]:void 0}),gy=["noscript","script","style"],zf=(r,e=!0)=>e===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),sv=r=>Object.keys(r).reduce((e,t)=>{const s=typeof r[t]<"u"?`${t}="${r[t]}"`:`${t}`;return e?`${e} ${s}`:s},""),vy=(r,e,t,s)=>{const a=sv(t),l=rv(e);return a?`<${r} ${ai}="true" ${a}>${zf(l,s)}</${r}>`:`<${r} ${ai}="true">${zf(l,s)}</${r}>`},_y=(r,e,t=!0)=>e.reduce((s,a)=>{const l=a,c=Object.keys(l).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,g)=>{const x=typeof l[g]>"u"?g:`${g}="${zf(l[g],t)}"`;return p?`${p} ${x}`:x},""),f=l.innerHTML||l.cssText||"",d=gy.indexOf(r)===-1;return`${s}<${r} ${ai}="true" ${c}${d?"/>":`>${f}</${r}>`}`},""),ov=(r,e={})=>Object.keys(r).reduce((t,s)=>{const a=kd[s];return t[a||s]=r[s],t},e),xy=(r,e,t)=>{const s={key:e,[ai]:!0},a=ov(t,s);return[wr.createElement("title",a,e)]},Yl=(r,e)=>e.map((t,s)=>{const a={key:s,[ai]:!0};return Object.keys(t).forEach(l=>{const f=kd[l]||l;if(f==="innerHTML"||f==="cssText"){const d=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:d}}else a[f]=t[l]}),wr.createElement(r,a)}),Yn=(r,e,t=!0)=>{switch(r){case"title":return{toComponent:()=>xy(r,e.title,e.titleAttributes),toString:()=>vy(r,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ov(e),toString:()=>sv(e)};default:return{toComponent:()=>Yl(r,e),toString:()=>_y(r,e,t)}}},yy=({metaTags:r,linkTags:e,scriptTags:t,encode:s})=>{const a=ef(r,Qc.meta),l=ef(e,Qc.link),c=ef(t,Qc.script);return{priorityMethods:{toComponent:()=>[...Yl("meta",a.priority),...Yl("link",l.priority),...Yl("script",c.priority)],toString:()=>`${Yn("meta",a.priority,s)} ${Yn("link",l.priority,s)} ${Yn("script",c.priority,s)}`},metaTags:a.default,linkTags:l.default,scriptTags:c.default}},Sy=r=>{const{baseTag:e,bodyAttributes:t,encode:s=!0,htmlAttributes:a,noscriptTags:l,styleTags:c,title:f="",titleAttributes:d,prioritizeSeoTags:p}=r;let{linkTags:g,metaTags:x,scriptTags:_}=r,S={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:S,linkTags:g,metaTags:x,scriptTags:_}=yy(r)),{priority:S,base:Yn("base",e,s),bodyAttributes:Yn("bodyAttributes",t,s),htmlAttributes:Yn("htmlAttributes",a,s),link:Yn("link",g,s),meta:Yn("meta",x,s),noscript:Yn("noscript",l,s),script:Yn("script",_,s),style:Yn("style",c,s),title:Yn("title",{title:f,titleAttributes:d},s)}},av=Sy,El=[],lv=!!(typeof window<"u"&&window.document&&window.document.createElement),Hf=class{constructor(r,e){Ui(this,"instances",[]);Ui(this,"canUseDOM",lv);Ui(this,"context");Ui(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?El:this.instances,add:r=>{(this.canUseDOM?El:this.instances).push(r)},remove:r=>{const e=(this.canUseDOM?El:this.instances).indexOf(r);(this.canUseDOM?El:this.instances).splice(e,1)}}});this.context=r,this.canUseDOM=e||!1,e||(r.helmet=av({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Ey={},uv=wr.createContext(Ey),is,cv=(is=class extends fe.Component{constructor(t){super(t);Ui(this,"helmetData");this.helmetData=new Hf(this.props.context||{},is.canUseDOM)}render(){return wr.createElement(uv.Provider,{value:this.helmetData.value},this.props.children)}},Ui(is,"canUseDOM",lv),is),Ds=(r,e)=>{const t=document.head||document.querySelector("head"),s=t.querySelectorAll(`${r}[${ai}]`),a=[].slice.call(s),l=[];let c;return e&&e.length&&e.forEach(f=>{const d=document.createElement(r);for(const p in f)if(Object.prototype.hasOwnProperty.call(f,p))if(p==="innerHTML")d.innerHTML=f.innerHTML;else if(p==="cssText")d.styleSheet?d.styleSheet.cssText=f.cssText:d.appendChild(document.createTextNode(f.cssText));else{const g=p,x=typeof f[g]>"u"?"":f[g];d.setAttribute(p,x)}d.setAttribute(ai,"true"),a.some((p,g)=>(c=g,d.isEqualNode(p)))?a.splice(c,1):l.push(d)}),a.forEach(f=>{var d;return(d=f.parentNode)==null?void 0:d.removeChild(f)}),l.forEach(f=>t.appendChild(f)),{oldTags:a,newTags:l}},Vf=(r,e)=>{const t=document.getElementsByTagName(r)[0];if(!t)return;const s=t.getAttribute(ai),a=s?s.split(","):[],l=[...a],c=Object.keys(e);for(const f of c){const d=e[f]||"";t.getAttribute(f)!==d&&t.setAttribute(f,d),a.indexOf(f)===-1&&a.push(f);const p=l.indexOf(f);p!==-1&&l.splice(p,1)}for(let f=l.length-1;f>=0;f-=1)t.removeAttribute(l[f]);a.length===l.length?t.removeAttribute(ai):t.getAttribute(ai)!==c.join(",")&&t.setAttribute(ai,c.join(","))},My=(r,e)=>{typeof r<"u"&&document.title!==r&&(document.title=rv(r)),Vf("title",e)},km=(r,e)=>{const{baseTag:t,bodyAttributes:s,htmlAttributes:a,linkTags:l,metaTags:c,noscriptTags:f,onChangeClientState:d,scriptTags:p,styleTags:g,title:x,titleAttributes:_}=r;Vf("body",s),Vf("html",a),My(x,_);const S={baseTag:Ds("base",t),linkTags:Ds("link",l),metaTags:Ds("meta",c),noscriptTags:Ds("noscript",f),scriptTags:Ds("script",p),styleTags:Ds("style",g)},E={},w={};Object.keys(S).forEach(y=>{const{newTags:v,oldTags:b}=S[y];v.length&&(E[y]=v),b.length&&(w[y]=S[y].oldTags)}),e&&e(),d(r,E,w)},qo=null,wy=r=>{qo&&cancelAnimationFrame(qo),r.defer?qo=requestAnimationFrame(()=>{km(r,()=>{qo=null})}):(km(r),qo=null)},Ty=wy,Bm=class extends fe.Component{constructor(){super(...arguments);Ui(this,"rendered",!1)}shouldComponentUpdate(e){return!ay(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let s=null;const a=py(e.get().map(l=>{const c={...l.props};return delete c.context,c}));cv.canUseDOM?Ty(a):s=av(a),t(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Of,fv=(Of=class extends fe.Component{shouldComponentUpdate(r){return!ny(Om(this.props,"helmetData"),Om(r,"helmetData"))}mapNestedChildrenToProps(r,e){if(!e)return null;switch(r.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,e,t,s){return{...e,[r.type]:[...e[r.type]||[],{...t,...this.mapNestedChildrenToProps(r,s)}]}}mapObjectTypeChildren(r,e,t,s){switch(r.type){case"title":return{...e,[r.type]:s,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[r.type]:{...t}}}}mapArrayTypeChildrenToProps(r,e){let t={...e};return Object.keys(r).forEach(s=>{t={...t,[s]:r[s]}}),t}warnOnInvalidChildren(r,e){return Um(Fm.some(t=>r.type===t),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Fm.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),Um(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,e){let t={};return wr.Children.forEach(r,s=>{if(!s||!s.props)return;const{children:a,...l}=s.props,c=Object.keys(l).reduce((d,p)=>(d[ly[p]||p]=l[p],d),{});let{type:f}=s;switch(typeof f=="symbol"?f=f.toString():this.warnOnInvalidChildren(s,a),f){case"Symbol(react.fragment)":e=this.mapChildrenToProps(a,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(s,t,c,a);break;default:e=this.mapObjectTypeChildren(s,e,c,a);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:r,...e}=this.props;let t={...e},{helmetData:s}=e;if(r&&(t=this.mapChildrenToProps(r,t)),s&&!(s instanceof Hf)){const a=s;s=new Hf(a.context,!0),delete t.helmetData}return s?wr.createElement(Bm,{...t,context:s.value}):wr.createElement(uv.Consumer,null,a=>wr.createElement(Bm,{...t,context:a}))}},Ui(Of,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Of);function Ay(){return Qe.jsxs(Qe.Fragment,{children:[Qe.jsxs(fv,{children:[Qe.jsx("title",{children:"À propos de nous"}),Qe.jsx("meta",{name:"description",content:"À propos de nous"})]}),Qe.jsxs("div",{className:"about-hero",children:[Qe.jsx("h1",{className:"about-hero-title",children:"À propos de nous"}),Qe.jsxs("p",{className:"about-hero-text",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nunc ac vehicula ultricies,",Qe.jsx("br",{})]})]})]})}function Cy(){return Qe.jsx("footer",{children:Qe.jsx("p",{children:"Footer"})})}function Ry(){return Qe.jsx("nav",{children:Qe.jsxs("ul",{children:[Qe.jsx("li",{children:Qe.jsx(jl,{to:"/",children:"Home"})}),Qe.jsx("li",{children:Qe.jsx(jl,{to:"/about",children:"About"})}),Qe.jsx("li",{children:Qe.jsx(jl,{to:"/contact",children:"Contact"})})]})})}function by(){return Qe.jsxs("header",{children:[Qe.jsx("h1",{children:"My App"}),Qe.jsx(Ry,{}),Qe.jsx("button",{children:"Login"})]})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xi{constructor(e,t,s,a,l="div"){this.parent=e,this.object=t,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),xi.nextNameID=xi.nextNameID||0,this.$name.id=`lil-gui-name-${++xi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Py extends xi{constructor(e,t,s){super(e,t,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Gf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Ly={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Gf,toHexString:Gf},ia={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Dy={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const s=ia.fromHexString(r);e[0]=(s>>16&255)/255*t,e[1]=(s>>8&255)/255*t,e[2]=(s&255)/255*t},toHexString([r,e,t],s=1){s=255/s;const a=r*s<<16^e*s<<8^t*s<<0;return ia.toHexString(a)}},Iy={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const s=ia.fromHexString(r);e.r=(s>>16&255)/255*t,e.g=(s>>8&255)/255*t,e.b=(s&255)/255*t},toHexString({r,g:e,b:t},s=1){s=255/s;const a=r*s<<16^e*s<<8^t*s<<0;return ia.toHexString(a)}},Uy=[Ly,ia,Dy,Iy];function Ny(r){return Uy.find(e=>e.match(r))}class Fy extends xi{constructor(e,t,s,a){super(e,t,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ny(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const l=Gf(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class tf extends xi{constructor(e,t,s){super(e,t,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Oy extends xi{constructor(e,t,s,a,l,c){super(e,t,s,"number"),this._initInput(),this.min(a),this.max(l);const f=c!==void 0;this.step(f?c:this._getImplicitStep(),f),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},s=b=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+b),this.$input.value=this.getValue())},a=b=>{b.key==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),s(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),s(this._step*this._arrowKeyMultiplier(b)*-1))},l=b=>{this._inputFocused&&(b.preventDefault(),s(this._step*this._normalizeMouseWheel(b)))};let c=!1,f,d,p,g,x;const _=5,S=b=>{f=b.clientX,d=p=b.clientY,c=!0,g=this.getValue(),x=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",w)},E=b=>{if(c){const L=b.clientX-f,P=b.clientY-d;Math.abs(P)>_?(b.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>_&&w()}if(!c){const L=b.clientY-p;x-=L*this._step*this._arrowKeyMultiplier(b),g+x>this._max?x=this._max-g:g+x<this._min&&(x=this._min-g),this._snapClampSetValue(g+x)}p=b.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",w)},y=()=>{this._inputFocused=!0},v=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",v)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(v,b,L,P,$)=>(v-b)/(L-b)*($-P)+P,t=v=>{const b=this.$slider.getBoundingClientRect();let L=e(v,b.left,b.right,this._min,this._max);this._snapClampSetValue(L)},s=v=>{this._setDraggingStyle(!0),t(v.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",l)},a=v=>{t(v.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l)};let c=!1,f,d;const p=v=>{v.preventDefault(),this._setDraggingStyle(!0),t(v.touches[0].clientX),c=!1},g=v=>{v.touches.length>1||(this._hasScrollBar?(f=v.touches[0].clientX,d=v.touches[0].clientY,c=!0):p(v),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",_))},x=v=>{if(c){const b=v.touches[0].clientX-f,L=v.touches[0].clientY-d;Math.abs(b)>Math.abs(L)?p(v):(window.removeEventListener("touchmove",x),window.removeEventListener("touchend",_))}else v.preventDefault(),t(v.touches[0].clientX)},_=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",_)},S=this._callOnFinishChange.bind(this),E=400;let w;const y=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const L=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(S,E)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:s}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,s=-e.wheelDelta/120,s*=this._stepExplicit?1:10),t+-s}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ky extends xi{constructor(e,t,s,a){super(e,t,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const s=document.createElement("option");s.textContent=t,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class By extends xi{constructor(e,t,s){super(e,t,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var zy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Hy(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let zm=!1;class Bd{constructor({parent:e,autoPlace:t=e===void 0,container:s,width:a,title:l="Controls",closeFolders:c=!1,injectStyles:f=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!zm&&f&&(Hy(zy),zm=!0),s?s.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,s,a,l){if(Object(s)===s)return new ky(this,e,t,s);const c=e[t];switch(typeof c){case"number":return new Oy(this,e,t,s,a,l);case"boolean":return new Py(this,e,t);case"string":return new By(this,e,t);case"function":return new tf(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,s=1){return new Fy(this,e,t,s)}addFolder(e){const t=new Bd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(s=>{s instanceof tf||s._name in e.controllers&&s.load(e.controllers[s._name])}),t&&e.folders&&this.folders.forEach(s=>{s._title in e.folders&&s.load(e.folders[s._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof tf)){if(s._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);t.controllers[s._name]=s.save()}}),e&&this.folders.forEach(s=>{if(s._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);t.folders[s._title]=s.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const s=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="172",Vy=0,Hm=1,Gy=2,dv=1,Wy=2,zi=3,Rr=0,Dn=1,Hi=2,Tr=0,Qs=1,Vm=2,Gm=3,Wm=4,Xy=5,Jr=100,$y=101,jy=102,Yy=103,qy=104,Ky=200,Zy=201,Qy=202,Jy=203,Wf=204,Xf=205,eS=206,tS=207,nS=208,iS=209,rS=210,sS=211,oS=212,aS=213,lS=214,$f=0,jf=1,Yf=2,to=3,qf=4,Kf=5,Zf=6,Qf=7,hv=0,uS=1,cS=2,Ar=0,fS=1,dS=2,hS=3,pS=4,mS=5,gS=6,vS=7,pv=300,no=301,io=302,Jf=303,ed=304,au=306,td=1e3,ts=1001,nd=1002,ui=1003,_S=1004,Ml=1005,vi=1006,nf=1007,ns=1008,$i=1009,mv=1010,gv=1011,ra=1012,Hd=1013,ss=1014,Vi=1015,ua=1016,Vd=1017,Gd=1018,ro=1020,vv=35902,_v=1021,xv=1022,li=1023,yv=1024,Sv=1025,Js=1026,so=1027,Ev=1028,Wd=1029,Mv=1030,Xd=1031,$d=1033,ql=33776,Kl=33777,Zl=33778,Ql=33779,id=35840,rd=35841,sd=35842,od=35843,ad=36196,ld=37492,ud=37496,cd=37808,fd=37809,dd=37810,hd=37811,pd=37812,md=37813,gd=37814,vd=37815,_d=37816,xd=37817,yd=37818,Sd=37819,Ed=37820,Md=37821,Jl=36492,wd=36494,Td=36495,wv=36283,Ad=36284,Cd=36285,Rd=36286,xS=3200,yS=3201,SS=0,ES=1,Mr="",qn="srgb",oo="srgb-linear",nu="linear",Ct="srgb",Is=7680,Xm=519,MS=512,wS=513,TS=514,Tv=515,AS=516,CS=517,RS=518,bS=519,$m=35044,jm="300 es",Gi=2e3,iu=2001;class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,bd=180/Math.PI;function ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function PS(r,e){return(r%e+e)%e}function sf(r,e,t){return(1-t)*r+t*e}function Ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,s,a,l,c,f,d,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=s,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],g=s[4],x=s[7],_=s[2],S=s[5],E=s[8],w=a[0],y=a[3],v=a[6],b=a[1],L=a[4],P=a[7],$=a[2],G=a[5],k=a[8];return l[0]=c*w+f*b+d*$,l[3]=c*y+f*L+d*G,l[6]=c*v+f*P+d*k,l[1]=p*w+g*b+x*$,l[4]=p*y+g*L+x*G,l[7]=p*v+g*P+x*k,l[2]=_*w+S*b+E*$,l[5]=_*y+S*L+E*G,l[8]=_*v+S*P+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-s*l*g+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=g*c-f*p,_=f*d-g*l,S=p*l-c*d,E=t*x+s*_+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(a*p-g*s)*w,e[2]=(f*s-a*c)*w,e[3]=_*w,e[4]=(g*t-a*d)*w,e[5]=(a*l-f*t)*w,e[6]=S*w,e[7]=(s*d-p*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new at;function Av(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function LS(){const r=ru("canvas");return r.style.display="block",r}const Ym={};function Ys(r){r in Ym||(Ym[r]=!0,console.warn(r))}function DS(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function IS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function US(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const r={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ct&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(a.r=eo(a.r),a.g=eo(a.g),a.b=eo(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?nu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[oo]:{primaries:e,whitePoint:s,transfer:nu,toXYZ:qm,fromXYZ:Km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:s,transfer:Ct,toXYZ:qm,fromXYZ:Km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const Mt=NS();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class FS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=ru("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Xi(t[s]/255)*255):t[s]=Xi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OS=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(af(a[c].image)):l.push(af(a[c]))}else l=af(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function af(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;class In extends co{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=ts,a=ts,l=vi,c=ns,f=li,d=$i,p=In.DEFAULT_ANISOTROPY,g=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=ca(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=pv;In.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,s=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],g=d[4],x=d[8],_=d[1],S=d[5],E=d[9],w=d[2],y=d[6],v=d[10];if(Math.abs(g-_)<.01&&Math.abs(x-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,P=(S+1)/2,$=(v+1)/2,G=(g+_)/4,k=(x+w)/4,q=(E+y)/4;return L>P&&L>$?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=G/s,l=k/s):P>$?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=G/a,l=q/a):$<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt($),s=k/l,a=q/l),this.set(s,a,l,t),this}let b=Math.sqrt((y-E)*(y-E)+(x-w)*(x-w)+(_-g)*(_-g));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(x-w)/b,this.z=(_-g)/b,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends co{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Cv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends BS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Rv extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];const _=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(x!==w||d!==_||p!==S||g!==E){let y=1-f;const v=d*_+p*S+g*E+x*w,b=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const $=Math.sqrt(L),G=Math.atan2($,v*b);y=Math.sin(y*G)/$,f=Math.sin(f*G)/$}const P=f*b;if(d=d*y+_*P,p=p*y+S*P,g=g*y+E*P,x=x*y+w*P,y===1-f){const $=1/Math.sqrt(d*d+p*p+g*g+x*x);d*=$,p*=$,g*=$,x*=$}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],g=s[a+3],x=l[c],_=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+g*x+d*S-p*_,e[t+1]=d*E+g*_+p*x-f*S,e[t+2]=p*E+g*S+f*_-d*x,e[t+3]=g*E-f*x-d*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),g=f(a/2),x=f(l/2),_=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"YXZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"ZXY":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"ZYX":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"YZX":this._x=_*g*x+p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x-_*S*E;break;case"XZY":this._x=_*g*x-p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],g=t[6],x=t[10],_=s+f+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(g-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,g=t._w;return this._x=s*g+c*f+a*p-l*d,this._y=a*g+c*d+l*f-s*p,this._z=l*g+c*p+s*d-a*f,this._w=c*g-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),x=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=c*x+this._w*_,this._x=s*x+this._x*_,this._y=a*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),g=2*(f*t-l*a),x=2*(l*s-c*t);return this.x=t+d*p+c*x-f*g,this.y=s+d*g+f*p-l*x,this.z=a+d*x+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(vt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(vt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new le,Zm=new fa;class da{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ii):ii.fromBufferAttribute(l,c),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wl.copy(s.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Tl.subVectors(this.max,Zo),Ns.subVectors(e.a,Zo),Fs.subVectors(e.b,Zo),Os.subVectors(e.c,Zo),vr.subVectors(Fs,Ns),_r.subVectors(Os,Fs),Xr.subVectors(Ns,Os);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Xr.z,Xr.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Xr.z,0,-Xr.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Xr.y,Xr.x,0];return!uf(t,Ns,Fs,Os,Tl)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,Ns,Fs,Os,Tl))?!1:(Al.crossVectors(vr,_r),t=[Al.x,Al.y,Al.z],uf(t,Ns,Fs,Os,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new le,new le,new le,new le,new le,new le,new le,new le],ii=new le,wl=new da,Ns=new le,Fs=new le,Os=new le,vr=new le,_r=new le,Xr=new le,Zo=new le,Tl=new le,Al=new le,$r=new le;function uf(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){$r.fromArray(r,l);const f=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),d=e.dot($r),p=t.dot($r),g=s.dot($r);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const HS=new da,Qo=new le,cf=new le;class jd{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):HS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Qo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(cf)),this.expandByPoint(Qo.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new le,ff=new le,Cl=new le,xr=new le,df=new le,Rl=new le,hf=new le;class VS{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ff.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Cl),f=xr.dot(this.direction),d=-xr.dot(Cl),p=xr.lengthSq(),g=Math.abs(1-c*c);let x,_,S,E;if(g>0)if(x=c*d-f,_=c*f-d,E=l*g,x>=0)if(_>=-E)if(_<=E){const w=1/g;x*=w,_*=w,S=x*(x+c*_+2*f)+_*(c*x+_+2*d)+p}else _=l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+p;else _=-l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+p;else _<=-E?(x=Math.max(0,-(-c*l+f)),_=x>0?-l:Math.min(Math.max(-l,-d),l),S=-x*x+_*(_+2*d)+p):_<=E?(x=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(x=Math.max(0,-(c*l+f)),_=x>0?l:Math.min(Math.max(-l,-d),l),S=-x*x+_*(_+2*d)+p);else _=c>0?-l:l,x=Math.max(0,-(c*_+f)),S=-x*x+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(ff).addScaledVector(Cl,_),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const s=Fi.dot(this.direction),a=Fi.dot(Fi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-_.z)*x,d=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,d=(e.min.z-_.z)*x),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,s,a,l){df.subVectors(t,e),Rl.subVectors(s,e),hf.crossVectors(df,Rl);let c=this.direction.dot(hf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xr.subVectors(this.origin,e);const d=f*this.direction.dot(Rl.crossVectors(xr,Rl));if(d<0)return null;const p=f*this.direction.dot(df.cross(xr));if(p<0||d+p>c)return null;const g=-f*xr.dot(hf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,s,a,l,c,f,d,p,g,x,_,S,E,w,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,g,x,_,S,E,w,y)}set(e,t,s,a,l,c,f,d,p,g,x,_,S,E,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=c,v[9]=f,v[13]=d,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=E,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=c*g,S=c*x,E=f*g,w=f*x;t[0]=d*g,t[4]=-d*x,t[8]=p,t[1]=S+E*p,t[5]=_-w*p,t[9]=-f*d,t[2]=w-_*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const _=d*g,S=d*x,E=p*g,w=p*x;t[0]=_+w*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=S*f-E,t[6]=w+_*f,t[10]=c*d}else if(e.order==="ZXY"){const _=d*g,S=d*x,E=p*g,w=p*x;t[0]=_-w*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*g,t[9]=w-_*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const _=c*g,S=c*x,E=f*g,w=f*x;t[0]=d*g,t[4]=E*p-S,t[8]=_*p+w,t[1]=d*x,t[5]=w*p+_,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*g,t[4]=w-_*x,t[8]=E*x+S,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*x+E,t[10]=_-w*x}else if(e.order==="XZY"){const _=c*d,S=c*p,E=f*d,w=f*p;t[0]=d*g,t[4]=-x,t[8]=p*g,t[1]=_*x+w,t[5]=c*g,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*g,t[10]=w*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GS,e,WS)}lookAt(e,t,s){const a=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),yr.crossVectors(s,kn),yr.lengthSq()===0&&(Math.abs(s.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),yr.crossVectors(s,kn)),yr.normalize(),bl.crossVectors(kn,yr),a[0]=yr.x,a[4]=bl.x,a[8]=kn.x,a[1]=yr.y,a[5]=bl.y,a[9]=kn.y,a[2]=yr.z,a[6]=bl.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],g=s[1],x=s[5],_=s[9],S=s[13],E=s[2],w=s[6],y=s[10],v=s[14],b=s[3],L=s[7],P=s[11],$=s[15],G=a[0],k=a[4],q=a[8],R=a[12],C=a[1],W=a[5],ce=a[9],ae=a[13],V=a[2],F=a[6],O=a[10],B=a[14],I=a[3],K=a[7],ie=a[11],N=a[15];return l[0]=c*G+f*C+d*V+p*I,l[4]=c*k+f*W+d*F+p*K,l[8]=c*q+f*ce+d*O+p*ie,l[12]=c*R+f*ae+d*B+p*N,l[1]=g*G+x*C+_*V+S*I,l[5]=g*k+x*W+_*F+S*K,l[9]=g*q+x*ce+_*O+S*ie,l[13]=g*R+x*ae+_*B+S*N,l[2]=E*G+w*C+y*V+v*I,l[6]=E*k+w*W+y*F+v*K,l[10]=E*q+w*ce+y*O+v*ie,l[14]=E*R+w*ae+y*B+v*N,l[3]=b*G+L*C+P*V+$*I,l[7]=b*k+L*W+P*F+$*K,l[11]=b*q+L*ce+P*O+$*ie,l[15]=b*R+L*ae+P*B+$*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],g=e[2],x=e[6],_=e[10],S=e[14],E=e[3],w=e[7],y=e[11],v=e[15];return E*(+l*d*x-a*p*x-l*f*_+s*p*_+a*f*S-s*d*S)+w*(+t*d*S-t*p*_+l*c*_-a*c*S+a*p*g-l*d*g)+y*(+t*p*x-t*f*S-l*c*x+s*c*S+l*f*g-s*p*g)+v*(-a*f*g-t*d*x+t*f*_+a*c*x-s*c*_+s*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],x=e[9],_=e[10],S=e[11],E=e[12],w=e[13],y=e[14],v=e[15],b=x*y*p-w*_*p+w*d*S-f*y*S-x*d*v+f*_*v,L=E*_*p-g*y*p-E*d*S+c*y*S+g*d*v-c*_*v,P=g*w*p-E*x*p+E*f*S-c*w*S-g*f*v+c*x*v,$=E*x*d-g*w*d-E*f*_+c*w*_+g*f*y-c*x*y,G=t*b+s*L+a*P+l*$;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=b*k,e[1]=(w*_*l-x*y*l-w*a*S+s*y*S+x*a*v-s*_*v)*k,e[2]=(f*y*l-w*d*l+w*a*p-s*y*p-f*a*v+s*d*v)*k,e[3]=(x*d*l-f*_*l-x*a*p+s*_*p+f*a*S-s*d*S)*k,e[4]=L*k,e[5]=(g*y*l-E*_*l+E*a*S-t*y*S-g*a*v+t*_*v)*k,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*v-t*d*v)*k,e[7]=(c*_*l-g*d*l+g*a*p-t*_*p-c*a*S+t*d*S)*k,e[8]=P*k,e[9]=(E*x*l-g*w*l-E*s*S+t*w*S+g*s*v-t*x*v)*k,e[10]=(c*w*l-E*f*l+E*s*p-t*w*p-c*s*v+t*f*v)*k,e[11]=(g*f*l-c*x*l-g*s*p+t*x*p+c*s*S-t*f*S)*k,e[12]=$*k,e[13]=(g*w*a-E*x*a+E*s*_-t*w*_-g*s*y+t*x*y)*k,e[14]=(E*f*a-c*w*a-E*s*d+t*w*d+c*s*y-t*f*y)*k,e[15]=(c*x*a-g*f*a+g*s*d-t*x*d-c*s*_+t*f*_)*k,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,g=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,g*f+s,g*d-a*c,0,p*d-a*f,g*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,g=c+c,x=f+f,_=l*p,S=l*g,E=l*x,w=c*g,y=c*x,v=f*x,b=d*p,L=d*g,P=d*x,$=s.x,G=s.y,k=s.z;return a[0]=(1-(w+v))*$,a[1]=(S+P)*$,a[2]=(E-L)*$,a[3]=0,a[4]=(S-P)*G,a[5]=(1-(_+v))*G,a[6]=(y+b)*G,a[7]=0,a[8]=(E+L)*k,a[9]=(y-b)*k,a[10]=(1-(_+w))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=ks.set(a[0],a[1],a[2]).length();const c=ks.set(a[4],a[5],a[6]).length(),f=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const p=1/l,g=1/c,x=1/f;return ri.elements[0]*=p,ri.elements[1]*=p,ri.elements[2]*=p,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=x,ri.elements[9]*=x,ri.elements[10]*=x,t.setFromRotationMatrix(ri),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Gi){const d=this.elements,p=2*l/(t-e),g=2*l/(s-a),x=(t+e)/(t-e),_=(s+a)/(s-a);let S,E;if(f===Gi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===iu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Gi){const d=this.elements,p=1/(t-e),g=1/(s-a),x=1/(c-l),_=(t+e)*p,S=(s+a)*g;let E,w;if(f===Gi)E=(c+l)*x,w=-2*x;else if(f===iu)E=l*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new le,ri=new Yt,GS=new le(0,0,0),WS=new le(1,1,1),yr=new le,bl=new le,kn=new le,Qm=new Yt,Jm=new fa;class ji{constructor(e=0,t=0,s=0,a=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],g=a[9],x=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XS=0;const eg=new le,Bs=new fa,Oi=new Yt,Pl=new le,Jo=new le,$S=new le,jS=new fa,tg=new le(1,0,0),ng=new le(0,1,0),ig=new le(0,0,1),rg={type:"added"},YS={type:"removed"},zs={type:"childadded",child:null},pf={type:"childremoved",child:null};class zn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new le,t=new ji,s=new fa,a=new le(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new at}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,t){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Pl.copy(e):Pl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Jo,Pl,this.up):Oi.lookAt(Pl,Jo,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YS),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,$S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const x=d[p];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),x=c(e.shapes),_=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}zn.DEFAULT_UP=new le(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new le,ki=new le,mf=new le,Bi=new le,Hs=new le,Vs=new le,sg=new le,gf=new le,vf=new le,_f=new le,xf=new Xt,yf=new Xt,Sf=new Xt;class oi{constructor(e=new le,t=new le,s=new le){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),si.subVectors(e,t),a.cross(si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){si.subVectors(a,t),ki.subVectors(s,t),mf.subVectors(e,t);const c=si.dot(si),f=si.dot(ki),d=si.dot(mf),p=ki.dot(ki),g=ki.dot(mf),x=c*p-f*f;if(x===0)return l.set(0,0,0),null;const _=1/x,S=(p*d-f*g)*_,E=(c*g-f*d)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,Bi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Bi.x),d.addScaledVector(c,Bi.y),d.addScaledVector(f,Bi.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return xf.setScalar(0),yf.setScalar(0),Sf.setScalar(0),xf.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,s),Sf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(xf,l.x),c.addScaledVector(yf,l.y),c.addScaledVector(Sf,l.z),c}static isFrontFacing(e,t,s,a){return si.subVectors(s,t),ki.subVectors(e,t),si.cross(ki).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return oi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Hs.subVectors(a,s),Vs.subVectors(l,s),gf.subVectors(e,s);const d=Hs.dot(gf),p=Vs.dot(gf);if(d<=0&&p<=0)return t.copy(s);vf.subVectors(e,a);const g=Hs.dot(vf),x=Vs.dot(vf);if(g>=0&&x<=g)return t.copy(a);const _=d*x-g*p;if(_<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(s).addScaledVector(Hs,c);_f.subVectors(e,l);const S=Hs.dot(_f),E=Vs.dot(_f);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Vs,f);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return sg.subVectors(l,a),f=(x-g)/(x-g+(S-E)),t.copy(a).addScaledVector(sg,f);const v=1/(y+w+_);return c=w*v,f=_*v,t.copy(s).addScaledVector(Hs,c).addScaledVector(Vs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function Ef(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Mt.workingColorSpace){if(e=PS(e,1),t=vt(t,0,1),s=vt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ef(c,l,e+1/3),this.g=Ef(c,l,e),this.b=Ef(c,l,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=qn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const s=Pv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Mt.fromWorkingColorSpace(vn.copy(this),e),Math.round(vt(vn.r*255,0,255))*65536+Math.round(vt(vn.g*255,0,255))*256+Math.round(vt(vn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(vn.copy(this),t);const s=vn.r,a=vn.g,l=vn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const g=(f+c)/2;if(f===c)d=0,p=0;else{const x=c-f;switch(p=g<=.5?x/(c+f):x/(2-c-f),c){case s:d=(a-l)/x+(a<l?6:0);break;case a:d=(l-s)/x+2;break;case l:d=(s-a)/x+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=qn){Mt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,s=vn.g,a=vn.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Ll);const s=sf(Sr.h,Ll.h,t),a=sf(Sr.s,Ll.s,t),l=sf(Sr.l,Ll.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Rt;Rt.NAMES=Pv;let qS=0;class lu extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Qs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wf,this.blendDst=Xf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==Rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wf&&(s.blendSrc=this.blendSrc),this.blendDst!==Xf&&(s.blendDst=this.blendDst),this.blendEquation!==Jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yd extends lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new le,Dl=new Pt;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=$m,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}}class Lv extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Dv extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class rs extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let KS=0;const jn=new Yt,Mf=new zn,Gs=new le,Bn=new da,ea=new da,on=new le;class as extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Dv:Lv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new at().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,s){return jn.makeTranslation(e,t,s),this.applyMatrix4(jn),this}scale(e,t,s){return jn.makeScale(e,t,s),this.applyMatrix4(jn),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new rs(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Bn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ea.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Bn.min,ea.min),Bn.expandByPoint(on),on.addVectors(Bn.max,ea.max),Bn.expandByPoint(on)):(Bn.expandByPoint(ea.min),Bn.expandByPoint(ea.max))}Bn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)on.fromBufferAttribute(f,p),d&&(Gs.fromBufferAttribute(e,p),on.add(Gs)),a=Math.max(a,s.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let q=0;q<s.count;q++)f[q]=new le,d[q]=new le;const p=new le,g=new le,x=new le,_=new Pt,S=new Pt,E=new Pt,w=new le,y=new le;function v(q,R,C){p.fromBufferAttribute(s,q),g.fromBufferAttribute(s,R),x.fromBufferAttribute(s,C),_.fromBufferAttribute(l,q),S.fromBufferAttribute(l,R),E.fromBufferAttribute(l,C),g.sub(p),x.sub(p),S.sub(_),E.sub(_);const W=1/(S.x*E.y-E.x*S.y);isFinite(W)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(W),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(W),f[q].add(w),f[R].add(w),f[C].add(w),d[q].add(y),d[R].add(y),d[C].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let q=0,R=b.length;q<R;++q){const C=b[q],W=C.start,ce=C.count;for(let ae=W,V=W+ce;ae<V;ae+=3)v(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new le,P=new le,$=new le,G=new le;function k(q){$.fromBufferAttribute(a,q),G.copy($);const R=f[q];L.copy(R),L.sub($.multiplyScalar($.dot(R))).normalize(),P.crossVectors(G,R);const W=P.dot(d[q])<0?-1:1;c.setXYZW(q,L.x,L.y,L.z,W)}for(let q=0,R=b.length;q<R;++q){const C=b[q],W=C.start,ce=C.count;for(let ae=W,V=W+ce;ae<V;ae+=3)k(e.getX(ae+0)),k(e.getX(ae+1)),k(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new le,l=new le,c=new le,f=new le,d=new le,p=new le,g=new le,x=new le;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(a,l),g.cross(x),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),f.add(g),d.add(g),p.add(g),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),x.subVectors(a,l),g.cross(x),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,d){const p=f.array,g=f.itemSize,x=f.normalized,_=new p.constructor(d.length*g);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*g;for(let v=0;v<g;v++)_[E++]=p[S++]}return new yi(_,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new as,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=e(_,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(e.data))}g.length>0&&(a[d]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new Yt,jr=new VS,Il=new jd,ag=new le,Ul=new le,Nl=new le,Fl=new le,wf=new le,Ol=new le,lg=new le,kl=new le;class _i extends zn{constructor(e=new as,t=new Yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],x=l[d];g!==0&&(wf.fromBufferAttribute(x,e),c?Ol.addScaledVector(wf,g):Ol.addScaledVector(wf.sub(t),g))}t.add(Ol)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Il.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Il,ag)===null||jr.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(l).invert(),jr.copy(e.ray).applyMatrix4(og),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,$=L;P<$;P+=3){const G=f.getX(P),k=f.getX(P+1),q=f.getX(P+2);a=Bl(this,v,e,s,p,g,x,G,k,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const b=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);a=Bl(this,c,e,s,p,g,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=_.length;E<w;E++){const y=_[E],v=c[y.materialIndex],b=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=b,$=L;P<$;P+=3){const G=P,k=P+1,q=P+2;a=Bl(this,v,e,s,p,g,x,G,k,q),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const b=y,L=y+1,P=y+2;a=Bl(this,c,e,s,p,g,x,b,L,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function ZS(r,e,t,s,a,l,c,f){let d;if(e.side===Dn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Rr,f),d===null)return null;kl.copy(f),kl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(kl);return p<t.near||p>t.far?null:{distance:p,point:kl.clone(),object:r}}function Bl(r,e,t,s,a,l,c,f,d,p){r.getVertexPosition(f,Ul),r.getVertexPosition(d,Nl),r.getVertexPosition(p,Fl);const g=ZS(r,e,t,s,Ul,Nl,Fl,lg);if(g){const x=new le;oi.getBarycoord(lg,Ul,Nl,Fl,x),a&&(g.uv=oi.getInterpolatedAttribute(a,f,d,p,x,new Pt)),l&&(g.uv1=oi.getInterpolatedAttribute(l,f,d,p,x,new Pt)),c&&(g.normal=oi.getInterpolatedAttribute(c,f,d,p,x,new le),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new le,materialIndex:0};oi.getNormal(Ul,Nl,Fl,_.normal),g.face=_,g.barycoord=x}return g}class fo extends as{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],g=[],x=[];let _=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new rs(p,3)),this.setAttribute("normal",new rs(g,3)),this.setAttribute("uv",new rs(x,2));function E(w,y,v,b,L,P,$,G,k,q,R){const C=P/k,W=$/q,ce=P/2,ae=$/2,V=G/2,F=k+1,O=q+1;let B=0,I=0;const K=new le;for(let ie=0;ie<O;ie++){const N=ie*W-ae;for(let te=0;te<F;te++){const Te=te*C-ce;K[w]=Te*b,K[y]=N*L,K[v]=V,p.push(K.x,K.y,K.z),K[w]=0,K[y]=0,K[v]=G>0?1:-1,g.push(K.x,K.y,K.z),x.push(te/k),x.push(1-ie/q),B+=1}}for(let ie=0;ie<q;ie++)for(let N=0;N<k;N++){const te=_+N+F*ie,Te=_+N+F*(ie+1),Q=_+(N+1)+F*(ie+1),de=_+(N+1)+F*ie;d.push(te,Te,de),d.push(Te,Q,de),I+=6}f.addGroup(S,I,R),S+=I,_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const s=ao(r[t]);for(const a in s)e[a]=s[a]}return e}function QS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Iv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const JS={clone:ao,merge:Mn};var eE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eE,this.fragmentShader=tE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=QS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Uv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new le,ug=new Pt,cg=new Pt;class Kn extends Uv{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,ug,cg),t.subVectors(cg,ug)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class nE extends zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new Kn(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const f=new Kn(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const d=new Kn(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const p=new Kn(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===iu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(x,_,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Nv extends In{constructor(e,t,s,a,l,c,f,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,s,a,l,c,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iE extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Nv(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new fo(5,5,5),l=new br({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:Tr});l.uniforms.tEquirect.value=t;const c=new _i(a,l),f=t.minFilter;return t.minFilter===ns&&(t.minFilter=vi),new nE(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}let rE=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const Tf=new le,sE=new le,oE=new at;class Zr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Tf.subVectors(s,t).cross(sE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Tf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||oE.getNormalMatrix(e),a=this.coplanarPoint(Tf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new jd,zl=new le;class Fv{constructor(e=new Zr,t=new Zr,s=new Zr,a=new Zr,l=new Zr,c=new Zr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Gi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],g=a[5],x=a[6],_=a[7],S=a[8],E=a[9],w=a[10],y=a[11],v=a[12],b=a[13],L=a[14],P=a[15];if(s[0].setComponents(d-l,_-p,y-S,P-v).normalize(),s[1].setComponents(d+l,_+p,y+S,P+v).normalize(),s[2].setComponents(d+c,_+g,y+E,P+b).normalize(),s[3].setComponents(d-c,_-g,y-E,P-b).normalize(),s[4].setComponents(d-f,_-x,y-w,P-L).normalize(),t===Gi)s[5].setComponents(d+f,_+x,y+w,P+L).normalize();else if(t===iu)s[5].setComponents(f,x,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(zl.x=a.normal.x>0?e.max.x:e.min.x,zl.y=a.normal.y>0?e.max.y:e.min.y,zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ov extends In{constructor(e,t,s,a,l,c,f,d,p,g=Js){if(g!==Js&&g!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Js&&(s=ss),s===void 0&&g===so&&(s=ro),super(null,a,l,c,f,d,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ui,this.minFilter=d!==void 0?d:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uu extends as{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,g=d+1,x=e/f,_=t/d,S=[],E=[],w=[],y=[];for(let v=0;v<g;v++){const b=v*_-c;for(let L=0;L<p;L++){const P=L*x-l;E.push(P,-b,0),w.push(0,0,1),y.push(L/f),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let b=0;b<f;b++){const L=b+p*v,P=b+p*(v+1),$=b+1+p*(v+1),G=b+1+p*v;S.push(L,P,G),S.push(P,$,G)}this.setIndex(S),this.setAttribute("position",new rs(E,3)),this.setAttribute("normal",new rs(w,3)),this.setAttribute("uv",new rs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class aE extends lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lE extends lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uE extends Uv{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cE extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function fg(r,e,t,s){const a=fE(s);switch(t){case _v:return r*e;case yv:return r*e;case Sv:return r*e*2;case Ev:return r*e/a.components*a.byteLength;case Wd:return r*e/a.components*a.byteLength;case Mv:return r*e*2/a.components*a.byteLength;case Xd:return r*e*2/a.components*a.byteLength;case xv:return r*e*3/a.components*a.byteLength;case li:return r*e*4/a.components*a.byteLength;case $d:return r*e*4/a.components*a.byteLength;case ql:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(r,16)*Math.max(e,8)/4;case id:case sd:return Math.max(r,8)*Math.max(e,8)/2;case ad:case ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jl:case wd:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wv:case Ad:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Cd:case Rd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fE(r){switch(r){case $i:case mv:return{byteLength:1,components:1};case ra:case gv:case ua:return{byteLength:2,components:1};case Vd:case Gd:return{byteLength:2,components:4};case ss:case Hd:case Vi:return{byteLength:4,components:1};case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kv(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function dE(r){const e=new WeakMap;function t(f,d){const p=f.array,g=f.usage,x=p.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,d,p){const g=d.array,x=d.updateRanges;if(r.bindBuffer(p,f),x.length===0)r.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<x.length;S++){const E=x[_],w=x[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++_,x[_]=w)}x.length=_+1;for(let S=0,E=x.length;S<E;S++){const w=x[S];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ow=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ww=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:vE,alphatest_pars_fragment:_E,aomap_fragment:xE,aomap_pars_fragment:yE,batching_pars_vertex:SE,batching_vertex:EE,begin_vertex:ME,beginnormal_vertex:wE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:CE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:LE,color_fragment:DE,color_pars_fragment:IE,color_pars_vertex:UE,color_vertex:NE,common:FE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:kE,displacementmap_pars_vertex:BE,displacementmap_vertex:zE,emissivemap_fragment:HE,emissivemap_pars_fragment:VE,colorspace_fragment:GE,colorspace_pars_fragment:WE,envmap_fragment:XE,envmap_common_pars_fragment:$E,envmap_pars_fragment:jE,envmap_pars_vertex:YE,envmap_physical_pars_fragment:sM,envmap_vertex:qE,fog_vertex:KE,fog_pars_vertex:ZE,fog_fragment:QE,fog_pars_fragment:JE,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:uM,lights_physical_fragment:cM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:SM,map_particle_pars_fragment:EM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:wM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:CM,morphtarget_pars_vertex:RM,morphtarget_vertex:bM,normal_fragment_begin:PM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:BM,opaque_fragment:zM,packing:HM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:ew,skinnormal_vertex:tw,specularmap_fragment:nw,specularmap_pars_fragment:iw,tonemapping_fragment:rw,tonemapping_pars_fragment:sw,transmission_fragment:ow,transmission_pars_fragment:aw,uv_pars_fragment:lw,uv_pars_vertex:uw,uv_vertex:cw,worldpos_vertex:fw,background_vert:dw,background_frag:hw,backgroundCube_vert:pw,backgroundCube_frag:mw,cube_vert:gw,cube_frag:vw,depth_vert:_w,depth_frag:xw,distanceRGBA_vert:yw,distanceRGBA_frag:Sw,equirect_vert:Ew,equirect_frag:Mw,linedashed_vert:ww,linedashed_frag:Tw,meshbasic_vert:Aw,meshbasic_frag:Cw,meshlambert_vert:Rw,meshlambert_frag:bw,meshmatcap_vert:Pw,meshmatcap_frag:Lw,meshnormal_vert:Dw,meshnormal_frag:Iw,meshphong_vert:Uw,meshphong_frag:Nw,meshphysical_vert:Fw,meshphysical_frag:Ow,meshtoon_vert:kw,meshtoon_frag:Bw,points_vert:zw,points_frag:Hw,shadow_vert:Vw,shadow_frag:Gw,sprite_vert:Ww,sprite_frag:Xw},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gi.physical={uniforms:Mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Vl={r:0,b:0,g:0},qr=new ji,$w=new Yt;function jw(r,e,t,s,a,l,c){const f=new Rt(0);let d=l===!0?0:1,p,g,x=null,_=0,S=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function w(L){let P=!1;const $=E(L);$===null?v(f,d):$&&$.isColor&&(v($,1),P=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,P){const $=E(P);$&&($.isCubeTexture||$.mapping===au)?(g===void 0&&(g=new _i(new fo(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:ao(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,k,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),qr.copy(P.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,$.isCubeTexture&&$.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),g.material.uniforms.envMap.value=$,g.material.uniforms.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($w.makeRotationFromEuler(qr)),g.material.toneMapped=Mt.getTransfer($.colorSpace)!==Ct,(x!==$||_!==$.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,x=$,_=$.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):$&&$.isTexture&&(p===void 0&&(p=new _i(new uu(2,2),new br({name:"BackgroundMaterial",uniforms:ao(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=$,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Mt.getTransfer($.colorSpace)!==Ct,$.matrixAutoUpdate===!0&&$.updateMatrix(),p.material.uniforms.uvTransform.value.copy($.matrix),(x!==$||_!==$.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=$,_=$.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,P){L.getRGB(Vl,Iv(r)),s.buffers.color.setClear(Vl.r,Vl.g,Vl.b,P,c)}function b(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),d=P,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,v(f,d)},render:w,addToRenderList:y,dispose:b}}function Yw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,c=!1;function f(C,W,ce,ae,V){let F=!1;const O=x(ae,ce,W);l!==O&&(l=O,p(l.object)),F=S(C,ae,ce,V),F&&E(C,ae,ce,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,P(C,W,ce,ae),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function d(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function x(C,W,ce){const ae=ce.wireframe===!0;let V=s[C.id];V===void 0&&(V={},s[C.id]=V);let F=V[W.id];F===void 0&&(F={},V[W.id]=F);let O=F[ae];return O===void 0&&(O=_(d()),F[ae]=O),O}function _(C){const W=[],ce=[],ae=[];for(let V=0;V<t;V++)W[V]=0,ce[V]=0,ae[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ce,attributeDivisors:ae,object:C,attributes:{},index:null}}function S(C,W,ce,ae){const V=l.attributes,F=W.attributes;let O=0;const B=ce.getAttributes();for(const I in B)if(B[I].location>=0){const ie=V[I];let N=F[I];if(N===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;O++}return l.attributesNum!==O||l.index!==ae}function E(C,W,ce,ae){const V={},F=W.attributes;let O=0;const B=ce.getAttributes();for(const I in B)if(B[I].location>=0){let ie=F[I];ie===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),V[I]=N,O++}l.attributes=V,l.attributesNum=O,l.index=ae}function w(){const C=l.newAttributes;for(let W=0,ce=C.length;W<ce;W++)C[W]=0}function y(C){v(C,0)}function v(C,W){const ce=l.newAttributes,ae=l.enabledAttributes,V=l.attributeDivisors;ce[C]=1,ae[C]===0&&(r.enableVertexAttribArray(C),ae[C]=1),V[C]!==W&&(r.vertexAttribDivisor(C,W),V[C]=W)}function b(){const C=l.newAttributes,W=l.enabledAttributes;for(let ce=0,ae=W.length;ce<ae;ce++)W[ce]!==C[ce]&&(r.disableVertexAttribArray(ce),W[ce]=0)}function L(C,W,ce,ae,V,F,O){O===!0?r.vertexAttribIPointer(C,W,ce,V,F):r.vertexAttribPointer(C,W,ce,ae,V,F)}function P(C,W,ce,ae){w();const V=ae.attributes,F=ce.getAttributes(),O=W.defaultAttributeValues;for(const B in F){const I=F[B];if(I.location>=0){let K=V[B];if(K===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){const ie=K.normalized,N=K.itemSize,te=e.get(K);if(te===void 0)continue;const Te=te.buffer,Q=te.type,de=te.bytesPerElement,Se=Q===r.INT||Q===r.UNSIGNED_INT||K.gpuType===Hd;if(K.isInterleavedBufferAttribute){const ge=K.data,Ae=ge.stride,Ne=K.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<I.locationSize;Je++)v(I.location+Je,ge.meshPerAttribute);C.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<I.locationSize;Je++)y(I.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Je=0;Je<I.locationSize;Je++)L(I.location+Je,N/I.locationSize,Q,ie,Ae*de,(Ne+N/I.locationSize*Je)*de,Se)}else{if(K.isInstancedBufferAttribute){for(let ge=0;ge<I.locationSize;ge++)v(I.location+ge,K.meshPerAttribute);C.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<I.locationSize;ge++)y(I.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let ge=0;ge<I.locationSize;ge++)L(I.location+ge,N/I.locationSize,Q,ie,N*de,N/I.locationSize*ge*de,Se)}}else if(O!==void 0){const ie=O[B];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(I.location,ie);break;case 3:r.vertexAttrib3fv(I.location,ie);break;case 4:r.vertexAttrib4fv(I.location,ie);break;default:r.vertexAttrib1fv(I.location,ie)}}}}b()}function $(){q();for(const C in s){const W=s[C];for(const ce in W){const ae=W[ce];for(const V in ae)g(ae[V].object),delete ae[V];delete W[ce]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const W=s[C.id];for(const ce in W){const ae=W[ce];for(const V in ae)g(ae[V].object),delete ae[V];delete W[ce]}delete s[C.id]}function k(C){for(const W in s){const ce=s[W];if(ce[C.id]===void 0)continue;const ae=ce[C.id];for(const V in ae)g(ae[V].object),delete ae[V];delete ce[C.id]}}function q(){R(),c=!0,l!==a&&(l=a,p(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:q,resetDefaultState:R,dispose:$,releaseStatesOfGeometry:G,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:y,disableUnusedAttributes:b}}function qw(r,e,t){let s;function a(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function c(p,g,x){x!==0&&(r.drawArraysInstanced(s,p,g,x),t.update(g,s,x))}function f(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];t.update(S,s,1)}function d(p,g,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,x);let E=0;for(let w=0;w<x;w++)E+=g[w]*_[w];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Kw(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==li&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const q=k===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==$i&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Vi&&!q)}function d(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:$,maxSamples:G}}function Zw(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Zr,f=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||s!==0||a;return a=_,s=x.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=g(x,_,0)},this.setState=function(x,_,S){const E=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!a||E===null||E.length===0||l&&!y)l?g(null):p();else{const b=l?0:s,L=b*4;let P=v.clippingState||null;d.value=P,P=g(E,_,L,S);for(let $=0;$!==L;++$)P[$]=t[$];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,_,S,E){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const v=S+w*4,b=_.matrixWorldInverse;f.getNormalMatrix(b),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,P=S;L!==w;++L,P+=4)c.copy(x[L]).applyMatrix4(b,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function Qw(r){let e=new WeakMap;function t(c,f){return f===Jf?c.mapping=no:f===ed&&(c.mapping=io),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Jf||f===ed)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new iE(d.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const qs=4,dg=[.125,.215,.35,.446,.526,.582],es=20,Af=new uE,hg=new Rt;let Cf=null,Rf=0,bf=0,Pf=!1;const Qr=(1+Math.sqrt(5))/2,$s=1/Qr,pg=[new le(-Qr,$s,0),new le(Qr,$s,0),new le(-$s,0,Qr),new le($s,0,Qr),new le(0,Qr,-$s),new le(0,Qr,$s),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,bf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:ua,format:li,colorSpace:oo,depthBuffer:!1},a=gg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(l)),this._blurMaterial=eT(l,e,t)}return a}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,s,a){const f=new Kn(90,1,t,s),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,_=g.toneMapping;g.getClearColor(hg),g.toneMapping=Ar,g.autoClear=!1;const S=new Yd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),E=new _i(new fo,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(hg),w=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(f.up.set(0,d[v],0),f.lookAt(p[v],0,0)):b===1?(f.up.set(0,0,d[v]),f.lookAt(0,p[v],0)):(f.up.set(0,d[v],0),f.lookAt(0,0,p[v]));const L=this._cubeSize;Gl(a,b*L,v>2?L:0,L,L),g.setRenderTarget(a),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===no||e.mapping===io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new _i(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Gl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Af)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=pg[(a-l-1)%pg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new _i(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*es-1),w=l/E,y=isFinite(l)?1+Math.floor(g*w):es;y>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const v=[];let b=0;for(let k=0;k<es;++k){const q=k/w,R=Math.exp(-q*q/2);v.push(R),k===0?b+=R:k<y&&(b+=2*R)}for(let k=0;k<v.length;k++)v[k]=v[k]/b;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-s;const P=this._sizeLods[a],$=3*P*(a>L-qs?a-L+qs:0),G=4*(this._cubeSize-P);Gl(t,$,G,3*P,2*P),d.setRenderTarget(t),d.render(x,Af)}}function Jw(r){const e=[],t=[],s=[];let a=r;const l=r-qs+1+dg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>r-qs?d=dg[c-r+qs-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,w=3,y=2,v=1,b=new Float32Array(w*E*S),L=new Float32Array(y*E*S),P=new Float32Array(v*E*S);for(let G=0;G<S;G++){const k=G%3*2/3-1,q=G>2?0:-1,R=[k,q,0,k+2/3,q,0,k+2/3,q+1,0,k,q,0,k+2/3,q+1,0,k,q+1,0];b.set(R,w*E*G),L.set(_,y*E*G);const C=[G,G,G,G,G,G];P.set(C,v*E*G)}const $=new as;$.setAttribute("position",new yi(b,w)),$.setAttribute("uv",new yi(L,y)),$.setAttribute("faceIndex",new yi(P,v)),e.push($),a>qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function gg(r,e,t){const s=new os(r,e,t);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function eT(r,e,t){const s=new Float32Array(es),a=new le(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function vg(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function _g(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tT(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===Jf||d===ed,g=d===no||d===io;if(p||g){let x=e.get(f);const _=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new mg(r)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new mg(r)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function nT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ys("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function iT(r,e,t,s){const a={},l=new WeakMap;function c(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(x,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(x){const _=x.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,E=x.attributes.position;let w=0;if(S!==null){const b=S.array;w=S.version;for(let L=0,P=b.length;L<P;L+=3){const $=b[L+0],G=b[L+1],k=b[L+2];_.push($,G,G,k,k,$)}}else if(E!==void 0){const b=E.array;w=E.version;for(let L=0,P=b.length/3-1;L<P;L+=3){const $=L+0,G=L+1,k=L+2;_.push($,G,G,k,k,$)}}else return;const y=new(Av(_)?Dv:Lv)(_,1);y.version=w;const v=l.get(x);v&&e.remove(v),l.set(x,y)}function g(x){const _=l.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function rT(r,e,t){let s;function a(_){s=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,S){r.drawElements(s,S,l,_*c),t.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,_*c,E),t.update(S,s,E))}function g(_,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,s,1)}function x(_,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)p(_[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,w,0,E);let v=0;for(let b=0;b<E;b++)v+=S[b]*w[b];t.update(v,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function sT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function oT(r,e,t){const s=new WeakMap,a=new Xt;function l(c,f,d){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==x){let C=function(){q.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),w===!0&&(P=2),y===!0&&(P=3);let $=f.attributes.position.count*P,G=1;$>e.maxTextureSize&&(G=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*G*4*x),q=new Rv(k,$,G,x);q.type=Vi,q.needsUpdate=!0;const R=P*4;for(let W=0;W<x;W++){const ce=v[W],ae=b[W],V=L[W],F=$*G*4*W;for(let O=0;O<ce.count;O++){const B=O*R;E===!0&&(a.fromBufferAttribute(ce,O),k[F+B+0]=a.x,k[F+B+1]=a.y,k[F+B+2]=a.z,k[F+B+3]=0),w===!0&&(a.fromBufferAttribute(ae,O),k[F+B+4]=a.x,k[F+B+5]=a.y,k[F+B+6]=a.z,k[F+B+7]=0),y===!0&&(a.fromBufferAttribute(V,O),k[F+B+8]=a.x,k[F+B+9]=a.y,k[F+B+10]=a.z,k[F+B+11]=V.itemSize===4?a.w:1)}}_={count:x,texture:q,size:new Pt($,G)},s.set(f,_),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function aT(r,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,g=d.geometry,x=e.get(d,g);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return x}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Bv=new In,xg=new Ov(1,1),zv=new Rv,Hv=new zS,Vv=new Nv,yg=[],Sg=[],Eg=new Float32Array(16),Mg=new Float32Array(9),wg=new Float32Array(4);function ho(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=yg[a];if(l===void 0&&(l=new Float32Array(a),yg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function cu(r,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function lT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function dT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;wg.set(s),r.uniformMatrix2fv(this.addr,!1,wg),Jt(t,s)}}function hT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;Mg.set(s),r.uniformMatrix3fv(this.addr,!1,Mg),Jt(t,s)}}function pT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;Eg.set(s),r.uniformMatrix4fv(this.addr,!1,Eg),Jt(t,s)}}function mT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function _T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function xT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function ST(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function MT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(xg.compareFunction=Tv,l=xg):l=Bv,t.setTexture2D(e||l,a)}function wT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Hv,a)}function TT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Vv,a)}function AT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||zv,a)}function CT(r){switch(r){case 5126:return lT;case 35664:return uT;case 35665:return cT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return _T;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(r,e){r.uniform1fv(this.addr,e)}function bT(r,e){const t=ho(e,this.size,2);r.uniform2fv(this.addr,t)}function PT(r,e){const t=ho(e,this.size,3);r.uniform3fv(this.addr,t)}function LT(r,e){const t=ho(e,this.size,4);r.uniform4fv(this.addr,t)}function DT(r,e){const t=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IT(r,e){const t=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function UT(r,e){const t=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function NT(r,e){r.uniform1iv(this.addr,e)}function FT(r,e){r.uniform2iv(this.addr,e)}function OT(r,e){r.uniform3iv(this.addr,e)}function kT(r,e){r.uniform4iv(this.addr,e)}function BT(r,e){r.uniform1uiv(this.addr,e)}function zT(r,e){r.uniform2uiv(this.addr,e)}function HT(r,e){r.uniform3uiv(this.addr,e)}function VT(r,e){r.uniform4uiv(this.addr,e)}function GT(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Bv,l[c])}function WT(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Hv,l[c])}function XT(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Vv,l[c])}function $T(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||zv,l[c])}function jT(r){switch(r){case 5126:return RT;case 35664:return bT;case 35665:return PT;case 35666:return LT;case 35674:return DT;case 35675:return IT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return kT;case 5125:return BT;case 36294:return zT;case 36295:return HT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return $T}}class YT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=CT(t.type)}}class qT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jT(t.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function Tg(r,e){r.seq.push(e),r.map[e.id]=e}function ZT(r,e,t){const s=r.name,a=s.length;for(Lf.lastIndex=0;;){const l=Lf.exec(s),c=Lf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){Tg(t,p===void 0?new YT(f,r,e):new qT(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new KT(f),Tg(t,x)),t=x}}}class eu{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);ZT(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Ag(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const QT=37297;let JT=0;function eA(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Cg=new at;function tA(r){Mt._getMatrix(Cg,Mt.workingColorSpace,r);const e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case nu:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Rg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eA(r.getShaderSource(e),c)}else return a}function nA(r,e){const t=tA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iA(r,e){let t;switch(e){case fS:t="Linear";break;case dS:t="Reinhard";break;case hS:t="Cineon";break;case pS:t="ACESFilmic";break;case gS:t="AgX";break;case vS:t="Neutral";break;case mS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new le;function rA(){Mt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function oA(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function aA(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ta(r){return r!==""}function bg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(r){return r.replace(lA,cA)}const uA=new Map;function cA(r,e){let t=lt[e];if(t===void 0){const s=uA.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(r){return r.replace(fA,dA)}function dA(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Dg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function pA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function gA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hv:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function vA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function _A(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=hA(t),p=pA(t),g=mA(t),x=gA(t),_=vA(t),S=sA(t),E=oA(l),w=a.createProgram();let y,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),v.length>0&&(v+=`
`)):(y=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),v=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?iA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,nA("linearToOutputTexel",t.outputColorSpace),rA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),c=Pd(c),c=bg(c,t),c=Pg(c,t),f=Pd(f),f=bg(f,t),f=Pg(f,t),c=Lg(c),f=Lg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=b+y+c,P=b+v+f,$=Ag(a,a.VERTEX_SHADER,L),G=Ag(a,a.FRAGMENT_SHADER,P);a.attachShader(w,$),a.attachShader(w,G),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function k(W){if(r.debug.checkShaderErrors){const ce=a.getProgramInfoLog(w).trim(),ae=a.getShaderInfoLog($).trim(),V=a.getShaderInfoLog(G).trim();let F=!0,O=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,$,G);else{const B=Rg(a,$,"vertex"),I=Rg(a,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ce+`
`+B+`
`+I)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ae===""||V==="")&&(O=!1);O&&(W.diagnostics={runnable:F,programLog:ce,vertexShader:{log:ae,prefix:y},fragmentShader:{log:V,prefix:v}})}a.deleteShader($),a.deleteShader(G),q=new eu(a,w),R=aA(a,w)}let q;this.getUniforms=function(){return q===void 0&&k(this),q};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,QT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=$,this.fragmentShader=G,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new SA(e),t.set(e,s)),s}}class SA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function EA(r,e,t,s,a,l,c){const f=new bv,d=new yA,p=new Set,g=[],x=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,C,W,ce,ae){const V=ce.fog,F=ae.geometry,O=R.isMeshStandardMaterial?ce.environment:null,B=(R.isMeshStandardMaterial?t:e).get(R.envMap||O),I=B&&B.mapping===au?B.image.height:null,K=E[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,N=ie!==void 0?ie.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let Te,Q,de,Se;if(K){const xt=gi[K];Te=xt.vertexShader,Q=xt.fragmentShader}else Te=R.vertexShader,Q=R.fragmentShader,d.update(R),de=d.getVertexShaderID(R),Se=d.getFragmentShaderID(R);const ge=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ne=ae.isInstancedMesh===!0,Je=ae.isBatchedMesh===!0,At=!!R.map,pt=!!R.matcap,Lt=!!B,H=!!R.aoMap,_n=!!R.lightMap,ht=!!R.bumpMap,ct=!!R.normalMap,je=!!R.displacementMap,Tt=!!R.emissiveMap,We=!!R.metalnessMap,D=!!R.roughnessMap,T=R.anisotropy>0,re=R.clearcoat>0,me=R.dispersion>0,_e=R.iridescence>0,he=R.sheen>0,Xe=R.transmission>0,Ce=T&&!!R.anisotropyMap,Fe=re&&!!R.clearcoatMap,ut=re&&!!R.clearcoatNormalMap,Me=re&&!!R.clearcoatRoughnessMap,ke=_e&&!!R.iridescenceMap,qe=_e&&!!R.iridescenceThicknessMap,tt=he&&!!R.sheenColorMap,Be=he&&!!R.sheenRoughnessMap,ft=!!R.specularMap,rt=!!R.specularColorMap,wt=!!R.specularIntensityMap,j=Xe&&!!R.transmissionMap,Re=Xe&&!!R.thicknessMap,ue=!!R.gradientMap,pe=!!R.alphaMap,De=R.alphaTest>0,Le=!!R.alphaHash,st=!!R.extensions;let It=Ar;R.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(It=r.toneMapping);const qt={shaderID:K,shaderType:R.type,shaderName:R.name,vertexShader:Te,fragmentShader:Q,defines:R.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Je,batchingColor:Je&&ae._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ae.instanceColor!==null,instancingMorph:Ne&&ae.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:oo,alphaToCoverage:!!R.alphaToCoverage,map:At,matcap:pt,envMap:Lt,envMapMode:Lt&&B.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:_n,bumpMap:ht,normalMap:ct,displacementMap:_&&je,emissiveMap:Tt,normalMapObjectSpace:ct&&R.normalMapType===ES,normalMapTangentSpace:ct&&R.normalMapType===SS,metalnessMap:We,roughnessMap:D,anisotropy:T,anisotropyMap:Ce,clearcoat:re,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:he,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:rt,specularIntensityMap:wt,transmission:Xe,transmissionMap:j,thicknessMap:Re,gradientMap:ue,opaque:R.transparent===!1&&R.blending===Qs&&R.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:R.combine,mapUv:At&&w(R.map.channel),aoMapUv:H&&w(R.aoMap.channel),lightMapUv:_n&&w(R.lightMap.channel),bumpMapUv:ht&&w(R.bumpMap.channel),normalMapUv:ct&&w(R.normalMap.channel),displacementMapUv:je&&w(R.displacementMap.channel),emissiveMapUv:Tt&&w(R.emissiveMap.channel),metalnessMapUv:We&&w(R.metalnessMap.channel),roughnessMapUv:D&&w(R.roughnessMap.channel),anisotropyMapUv:Ce&&w(R.anisotropyMap.channel),clearcoatMapUv:Fe&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ut&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(R.sheenRoughnessMap.channel),specularMapUv:ft&&w(R.specularMap.channel),specularColorMapUv:rt&&w(R.specularColorMap.channel),specularIntensityMapUv:wt&&w(R.specularIntensityMap.channel),transmissionMapUv:j&&w(R.transmissionMap.channel),thicknessMapUv:Re&&w(R.thicknessMap.channel),alphaMapUv:pe&&w(R.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ct||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!F.attributes.uv&&(At||pe),fog:!!V,useFog:R.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:ae.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:At&&R.map.isVideoTexture===!0&&Mt.getTransfer(R.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&R.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(R.emissiveMap.colorSpace)===Ct,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:st&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&R.extensions.multiDraw===!0||Je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function v(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const W in R.defines)C.push(W),C.push(R.defines[W]);return R.isRawShaderMaterial===!1&&(b(C,R),L(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function b(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function L(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=E[R.type];let W;if(C){const ce=gi[C];W=JS.clone(ce.uniforms)}else W=R.uniforms;return W}function $(R,C){let W;for(let ce=0,ae=g.length;ce<ae;ce++){const V=g[ce];if(V.cacheKey===C){W=V,++W.usedTimes;break}}return W===void 0&&(W=new _A(r,C,R,l),g.push(W)),W}function G(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function k(R){d.remove(R)}function q(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:$,releaseProgram:G,releaseShaderCache:k,programs:g,dispose:q}}function MA(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function wA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ug(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(x,_,S,E,w,y){let v=r[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:E,renderOrder:x.renderOrder,z:w,group:y},r[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=w,v.group=y),e++,v}function f(x,_,S,E,w,y){const v=c(x,_,S,E,w,y);S.transmission>0?s.push(v):S.transparent===!0?a.push(v):t.push(v)}function d(x,_,S,E,w,y){const v=c(x,_,S,E,w,y);S.transmission>0?s.unshift(v):S.transparent===!0?a.unshift(v):t.unshift(v)}function p(x,_){t.length>1&&t.sort(x||wA),s.length>1&&s.sort(_||Ig),a.length>1&&a.sort(_||Ig)}function g(){for(let x=e,_=r.length;x<_;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:g,sort:p}}function TA(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new Ug,r.set(s,[c])):a>=l.length?(c=new Ug,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function AA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Rt};break;case"SpotLight":t={position:new le,direction:new le,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=t,t}}}function CA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let RA=0;function bA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PA(r){const e=new AA,t=CA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const a=new le,l=new Yt,c=new Yt;function f(p){let g=0,x=0,_=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let S=0,E=0,w=0,y=0,v=0,b=0,L=0,P=0,$=0,G=0,k=0;p.sort(bA);for(let R=0,C=p.length;R<C;R++){const W=p[R],ce=W.color,ae=W.intensity,V=W.distance,F=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)g+=ce.r*ae,x+=ce.g*ae,_+=ce.b*ae;else if(W.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(W.sh.coefficients[O],ae);k++}else if(W.isDirectionalLight){const O=e.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const B=W.shadow,I=t.get(W);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,s.directionalShadow[S]=I,s.directionalShadowMap[S]=F,s.directionalShadowMatrix[S]=W.shadow.matrix,b++}s.directional[S]=O,S++}else if(W.isSpotLight){const O=e.get(W);O.position.setFromMatrixPosition(W.matrixWorld),O.color.copy(ce).multiplyScalar(ae),O.distance=V,O.coneCos=Math.cos(W.angle),O.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),O.decay=W.decay,s.spot[w]=O;const B=W.shadow;if(W.map&&(s.spotLightMap[$]=W.map,$++,B.updateMatrices(W),W.castShadow&&G++),s.spotLightMatrix[w]=B.matrix,W.castShadow){const I=t.get(W);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,s.spotShadow[w]=I,s.spotShadowMap[w]=F,P++}w++}else if(W.isRectAreaLight){const O=e.get(W);O.color.copy(ce).multiplyScalar(ae),O.halfWidth.set(W.width*.5,0,0),O.halfHeight.set(0,W.height*.5,0),s.rectArea[y]=O,y++}else if(W.isPointLight){const O=e.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity),O.distance=W.distance,O.decay=W.decay,W.castShadow){const B=W.shadow,I=t.get(W);I.shadowIntensity=B.intensity,I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,I.shadowCameraNear=B.camera.near,I.shadowCameraFar=B.camera.far,s.pointShadow[E]=I,s.pointShadowMap[E]=F,s.pointShadowMatrix[E]=W.shadow.matrix,L++}s.point[E]=O,E++}else if(W.isHemisphereLight){const O=e.get(W);O.skyColor.copy(W.color).multiplyScalar(ae),O.groundColor.copy(W.groundColor).multiplyScalar(ae),s.hemi[v]=O,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=_;const q=s.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==w||q.rectAreaLength!==y||q.hemiLength!==v||q.numDirectionalShadows!==b||q.numPointShadows!==L||q.numSpotShadows!==P||q.numSpotMaps!==$||q.numLightProbes!==k)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+$-G,s.spotLightMap.length=$,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=k,q.directionalLength=S,q.pointLength=E,q.spotLength=w,q.rectAreaLength=y,q.hemiLength=v,q.numDirectionalShadows=b,q.numPointShadows=L,q.numSpotShadows=P,q.numSpotMaps=$,q.numLightProbes=k,s.version=RA++)}function d(p,g){let x=0,_=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let v=0,b=p.length;v<b;v++){const L=p[v];if(L.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),x++}else if(L.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const P=s.point[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const P=s.hemi[w];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:s}}function Ng(r){const e=new PA(r),t=[],s=[];function a(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function LA(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Ng(r),e.set(a,[f])):l>=c.length?(f=new Ng(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const DA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UA(r,e,t){let s=new Fv;const a=new Pt,l=new Pt,c=new Xt,f=new aE({depthPacking:yS}),d=new lE,p={},g=t.maxTextureSize,x={[Rr]:Dn,[Dn]:Rr,[Hi]:Hi},_=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:DA,fragmentShader:IA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new as;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new _i(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let v=this.type;this.render=function(G,k,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),ce=r.state;ce.setBlending(Tr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ae=v!==zi&&this.type===zi,V=v===zi&&this.type!==zi;for(let F=0,O=G.length;F<O;F++){const B=G[F],I=B.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const K=I.getFrameExtents();if(a.multiply(K),l.copy(I.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/K.x),a.x=l.x*K.x,I.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/K.y),a.y=l.y*K.y,I.mapSize.y=l.y)),I.map===null||ae===!0||V===!0){const N=this.type!==zi?{minFilter:ui,magFilter:ui}:{};I.map!==null&&I.map.dispose(),I.map=new os(a.x,a.y,N),I.map.texture.name=B.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const ie=I.getViewportCount();for(let N=0;N<ie;N++){const te=I.getViewport(N);c.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),ce.viewport(c),I.updateMatrices(B,N),s=I.getFrustum(),P(k,q,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===zi&&b(I,q),I.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(R,C,W)};function b(G,k){const q=e.update(w);_.defines.VSM_SAMPLES!==G.blurSamples&&(_.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new os(a.x,a.y)),_.uniforms.shadow_pass.value=G.map.texture,_.uniforms.resolution.value=G.mapSize,_.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(k,null,q,_,w,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(k,null,q,S,w,null)}function L(G,k,q,R){let C=null;const W=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(W!==void 0)C=W;else if(C=q.isPointLight===!0?d:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const ce=C.uuid,ae=k.uuid;let V=p[ce];V===void 0&&(V={},p[ce]=V);let F=V[ae];F===void 0&&(F=C.clone(),V[ae]=F,k.addEventListener("dispose",$)),C=F}if(C.visible=k.visible,C.wireframe=k.wireframe,R===zi?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:x[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ce=r.properties.get(C);ce.light=q}return C}function P(G,k,q,R,C){if(G.visible===!1)return;if(G.layers.test(k.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===zi)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const ae=e.update(G),V=G.material;if(Array.isArray(V)){const F=ae.groups;for(let O=0,B=F.length;O<B;O++){const I=F[O],K=V[I.materialIndex];if(K&&K.visible){const ie=L(G,K,R,C);G.onBeforeShadow(r,G,k,q,ae,ie,I),r.renderBufferDirect(q,null,ae,ie,G,I),G.onAfterShadow(r,G,k,q,ae,ie,I)}}}else if(V.visible){const F=L(G,V,R,C);G.onBeforeShadow(r,G,k,q,ae,F,null),r.renderBufferDirect(q,null,ae,F,G,null),G.onAfterShadow(r,G,k,q,ae,F,null)}}const ce=G.children;for(let ae=0,V=ce.length;ae<V;ae++)P(ce[ae],k,q,R,C)}function $(G){G.target.removeEventListener("dispose",$);for(const q in p){const R=p[q],C=G.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const NA={[$f]:jf,[Yf]:Zf,[qf]:Qf,[to]:Kf,[jf]:$f,[Zf]:Yf,[Qf]:qf,[Kf]:to};function FA(r,e){function t(){let j=!1;const Re=new Xt;let ue=null;const pe=new Xt(0,0,0,0);return{setMask:function(De){ue!==De&&!j&&(r.colorMask(De,De,De,De),ue=De)},setLocked:function(De){j=De},setClear:function(De,Le,st,It,qt){qt===!0&&(De*=It,Le*=It,st*=It),Re.set(De,Le,st,It),pe.equals(Re)===!1&&(r.clearColor(De,Le,st,It),pe.copy(Re))},reset:function(){j=!1,ue=null,pe.set(-1,0,0,0)}}}function s(){let j=!1,Re=!1,ue=null,pe=null,De=null;return{setReversed:function(Le){if(Re!==Le){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=De;De=null,this.setClear(It)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?ge(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Le){ue!==Le&&!j&&(r.depthMask(Le),ue=Le)},setFunc:function(Le){if(Re&&(Le=NA[Le]),pe!==Le){switch(Le){case $f:r.depthFunc(r.NEVER);break;case jf:r.depthFunc(r.ALWAYS);break;case Yf:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case qf:r.depthFunc(r.EQUAL);break;case Kf:r.depthFunc(r.GEQUAL);break;case Zf:r.depthFunc(r.GREATER);break;case Qf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Le}},setLocked:function(Le){j=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),r.clearDepth(Le),De=Le)},reset:function(){j=!1,ue=null,pe=null,De=null,Re=!1}}}function a(){let j=!1,Re=null,ue=null,pe=null,De=null,Le=null,st=null,It=null,qt=null;return{setTest:function(xt){j||(xt?ge(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!j&&(r.stencilMask(xt),Re=xt)},setFunc:function(xt,wn,xn){(ue!==xt||pe!==wn||De!==xn)&&(r.stencilFunc(xt,wn,xn),ue=xt,pe=wn,De=xn)},setOp:function(xt,wn,xn){(Le!==xt||st!==wn||It!==xn)&&(r.stencilOp(xt,wn,xn),Le=xt,st=wn,It=xn)},setLocked:function(xt){j=xt},setClear:function(xt){qt!==xt&&(r.clearStencil(xt),qt=xt)},reset:function(){j=!1,Re=null,ue=null,pe=null,De=null,Le=null,st=null,It=null,qt=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,b=null,L=null,P=null,$=null,G=null,k=new Rt(0,0,0),q=0,R=!1,C=null,W=null,ce=null,ae=null,V=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=B>=1):I.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=B>=2);let K=null,ie={};const N=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),Te=new Xt().fromArray(N),Q=new Xt().fromArray(te);function de(j,Re,ue,pe){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(j,Le),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ue;st++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return Le}const Se={};Se[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ge(r.DEPTH_TEST),c.setFunc(to),ht(!1),ct(Hm),ge(r.CULL_FACE),H(Tr);function ge(j){g[j]!==!0&&(r.enable(j),g[j]=!0)}function Ae(j){g[j]!==!1&&(r.disable(j),g[j]=!1)}function Ne(j,Re){return x[j]!==Re?(r.bindFramebuffer(j,Re),x[j]=Re,j===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Re),j===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(j,Re){let ue=S,pe=!1;if(j){ue=_.get(Re),ue===void 0&&(ue=[],_.set(Re,ue));const De=j.textures;if(ue.length!==De.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,st=De.length;Le<st;Le++)ue[Le]=r.COLOR_ATTACHMENT0+Le;ue.length=De.length,pe=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ue)}function At(j){return E!==j?(r.useProgram(j),E=j,!0):!1}const pt={[Jr]:r.FUNC_ADD,[$y]:r.FUNC_SUBTRACT,[jy]:r.FUNC_REVERSE_SUBTRACT};pt[Yy]=r.MIN,pt[qy]=r.MAX;const Lt={[Ky]:r.ZERO,[Zy]:r.ONE,[Qy]:r.SRC_COLOR,[Wf]:r.SRC_ALPHA,[rS]:r.SRC_ALPHA_SATURATE,[nS]:r.DST_COLOR,[eS]:r.DST_ALPHA,[Jy]:r.ONE_MINUS_SRC_COLOR,[Xf]:r.ONE_MINUS_SRC_ALPHA,[iS]:r.ONE_MINUS_DST_COLOR,[tS]:r.ONE_MINUS_DST_ALPHA,[sS]:r.CONSTANT_COLOR,[oS]:r.ONE_MINUS_CONSTANT_COLOR,[aS]:r.CONSTANT_ALPHA,[lS]:r.ONE_MINUS_CONSTANT_ALPHA};function H(j,Re,ue,pe,De,Le,st,It,qt,xt){if(j===Tr){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(ge(r.BLEND),w=!0),j!==Xy){if(j!==y||xt!==R){if((v!==Jr||P!==Jr)&&(r.blendEquation(r.FUNC_ADD),v=Jr,P=Jr),xt)switch(j){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vm:r.blendFunc(r.ONE,r.ONE);break;case Gm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,L=null,$=null,G=null,k.set(0,0,0),q=0,y=j,R=xt}return}De=De||Re,Le=Le||ue,st=st||pe,(Re!==v||De!==P)&&(r.blendEquationSeparate(pt[Re],pt[De]),v=Re,P=De),(ue!==b||pe!==L||Le!==$||st!==G)&&(r.blendFuncSeparate(Lt[ue],Lt[pe],Lt[Le],Lt[st]),b=ue,L=pe,$=Le,G=st),(It.equals(k)===!1||qt!==q)&&(r.blendColor(It.r,It.g,It.b,qt),k.copy(It),q=qt),y=j,R=!1}function _n(j,Re){j.side===Hi?Ae(r.CULL_FACE):ge(r.CULL_FACE);let ue=j.side===Dn;Re&&(ue=!ue),ht(ue),j.blending===Qs&&j.transparent===!1?H(Tr):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const pe=j.stencilWrite;f.setTest(pe),pe&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Tt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){C!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),C=j)}function ct(j){j!==Vy?(ge(r.CULL_FACE),j!==W&&(j===Hm?r.cullFace(r.BACK):j===Gy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),W=j}function je(j){j!==ce&&(O&&r.lineWidth(j),ce=j)}function Tt(j,Re,ue){j?(ge(r.POLYGON_OFFSET_FILL),(ae!==Re||V!==ue)&&(r.polygonOffset(Re,ue),ae=Re,V=ue)):Ae(r.POLYGON_OFFSET_FILL)}function We(j){j?ge(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function D(j){j===void 0&&(j=r.TEXTURE0+F-1),K!==j&&(r.activeTexture(j),K=j)}function T(j,Re,ue){ue===void 0&&(K===null?ue=r.TEXTURE0+F-1:ue=K);let pe=ie[ue];pe===void 0&&(pe={type:void 0,texture:void 0},ie[ue]=pe),(pe.type!==j||pe.texture!==Re)&&(K!==ue&&(r.activeTexture(ue),K=ue),r.bindTexture(j,Re||Se[j]),pe.type=j,pe.texture=Re)}function re(){const j=ie[K];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{r.texSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{r.texStorage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function tt(j){Te.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Te.copy(j))}function Be(j){Q.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function ft(j,Re){let ue=p.get(Re);ue===void 0&&(ue=new WeakMap,p.set(Re,ue));let pe=ue.get(j);pe===void 0&&(pe=r.getUniformBlockIndex(Re,j.name),ue.set(j,pe))}function rt(j,Re){const pe=p.get(Re).get(j);d.get(Re)!==pe&&(r.uniformBlockBinding(Re,pe,j.__bindingPointIndex),d.set(Re,pe))}function wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},K=null,ie={},x={},_=new WeakMap,S=[],E=null,w=!1,y=null,v=null,b=null,L=null,P=null,$=null,G=null,k=new Rt(0,0,0),q=0,R=!1,C=null,W=null,ce=null,ae=null,V=null,Te.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ge,disable:Ae,bindFramebuffer:Ne,drawBuffers:Je,useProgram:At,setBlending:H,setMaterial:_n,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:Tt,setScissorTest:We,activeTexture:D,bindTexture:T,unbindTexture:re,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:he,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:wt}}function OA(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):ru("canvas")}function w(D,T,re){let me=1;const _e=We(D);if((_e.width>re||_e.height>re)&&(me=re/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);x===void 0&&(x=E(he,Xe));const Ce=T?E(he,Xe):x;return Ce.width=he,Ce.height=Xe,Ce.getContext("2d").drawImage(D,0,0,he,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+he+"x"+Xe+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,T,re,me,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=T;if(T===r.RED&&(re===r.FLOAT&&(he=r.R32F),re===r.HALF_FLOAT&&(he=r.R16F),re===r.UNSIGNED_BYTE&&(he=r.R8)),T===r.RED_INTEGER&&(re===r.UNSIGNED_BYTE&&(he=r.R8UI),re===r.UNSIGNED_SHORT&&(he=r.R16UI),re===r.UNSIGNED_INT&&(he=r.R32UI),re===r.BYTE&&(he=r.R8I),re===r.SHORT&&(he=r.R16I),re===r.INT&&(he=r.R32I)),T===r.RG&&(re===r.FLOAT&&(he=r.RG32F),re===r.HALF_FLOAT&&(he=r.RG16F),re===r.UNSIGNED_BYTE&&(he=r.RG8)),T===r.RG_INTEGER&&(re===r.UNSIGNED_BYTE&&(he=r.RG8UI),re===r.UNSIGNED_SHORT&&(he=r.RG16UI),re===r.UNSIGNED_INT&&(he=r.RG32UI),re===r.BYTE&&(he=r.RG8I),re===r.SHORT&&(he=r.RG16I),re===r.INT&&(he=r.RG32I)),T===r.RGB_INTEGER&&(re===r.UNSIGNED_BYTE&&(he=r.RGB8UI),re===r.UNSIGNED_SHORT&&(he=r.RGB16UI),re===r.UNSIGNED_INT&&(he=r.RGB32UI),re===r.BYTE&&(he=r.RGB8I),re===r.SHORT&&(he=r.RGB16I),re===r.INT&&(he=r.RGB32I)),T===r.RGBA_INTEGER&&(re===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),re===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),re===r.UNSIGNED_INT&&(he=r.RGBA32UI),re===r.BYTE&&(he=r.RGBA8I),re===r.SHORT&&(he=r.RGBA16I),re===r.INT&&(he=r.RGBA32I)),T===r.RGB&&re===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),T===r.RGBA){const Xe=_e?nu:Mt.getTransfer(me);re===r.FLOAT&&(he=r.RGBA32F),re===r.HALF_FLOAT&&(he=r.RGBA16F),re===r.UNSIGNED_BYTE&&(he=Xe===Ct?r.SRGB8_ALPHA8:r.RGBA8),re===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),re===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(D,T){let re;return D?T===null||T===ss||T===ro?re=r.DEPTH24_STENCIL8:T===Vi?re=r.DEPTH32F_STENCIL8:T===ra&&(re=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ss||T===ro?re=r.DEPTH_COMPONENT24:T===Vi?re=r.DEPTH_COMPONENT32F:T===ra&&(re=r.DEPTH_COMPONENT16),re}function $(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ui&&D.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function G(D){const T=D.target;T.removeEventListener("dispose",G),q(T),T.isVideoTexture&&g.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),C(T)}function q(D){const T=s.get(D);if(T.__webglInit===void 0)return;const re=D.source,me=_.get(re);if(me){const _e=me[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(D),Object.keys(me).length===0&&_.delete(re)}s.remove(D)}function R(D){const T=s.get(D);r.deleteTexture(T.__webglTexture);const re=D.source,me=_.get(re);delete me[T.__cacheKey],c.memory.textures--}function C(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let _e=0;_e<T.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(T.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=D.textures;for(let me=0,_e=re.length;me<_e;me++){const he=s.get(re[me]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),c.memory.textures--),s.remove(re[me])}s.remove(D)}let W=0;function ce(){W=0}function ae(){const D=W;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),W+=1,D}function V(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function F(D,T){const re=s.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.version>0&&re.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(re,D,T);return}}t.bindTexture(r.TEXTURE_2D,re.__webglTexture,r.TEXTURE0+T)}function O(D,T){const re=s.get(D);if(D.version>0&&re.__version!==D.version){Q(re,D,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,re.__webglTexture,r.TEXTURE0+T)}function B(D,T){const re=s.get(D);if(D.version>0&&re.__version!==D.version){Q(re,D,T);return}t.bindTexture(r.TEXTURE_3D,re.__webglTexture,r.TEXTURE0+T)}function I(D,T){const re=s.get(D);if(D.version>0&&re.__version!==D.version){de(re,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture,r.TEXTURE0+T)}const K={[td]:r.REPEAT,[ts]:r.CLAMP_TO_EDGE,[nd]:r.MIRRORED_REPEAT},ie={[ui]:r.NEAREST,[_S]:r.NEAREST_MIPMAP_NEAREST,[Ml]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[nf]:r.LINEAR_MIPMAP_NEAREST,[ns]:r.LINEAR_MIPMAP_LINEAR},N={[MS]:r.NEVER,[bS]:r.ALWAYS,[wS]:r.LESS,[Tv]:r.LEQUAL,[TS]:r.EQUAL,[RS]:r.GEQUAL,[AS]:r.GREATER,[CS]:r.NOTEQUAL};function te(D,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===nf||T.magFilter===Ml||T.magFilter===ns||T.minFilter===vi||T.minFilter===nf||T.minFilter===Ml||T.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,K[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,K[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,K[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ie[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ie[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==Ml&&T.minFilter!==ns||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Te(D,T){let re=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",G));const me=T.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const he=V(T);if(he!==D.__cacheKey){_e[he]===void 0&&(_e[he]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,re=!0),_e[he].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(T)),D.__cacheKey=he,D.__webglTexture=_e[he].texture}return re}function Q(D,T,re){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Te(D,T),he=T.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+re);const Xe=s.get(he);if(he.version!==Xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+re);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Fe=T.colorSpace===Mr?null:Mt.getPrimaries(T.colorSpace),ut=T.colorSpace===Mr||Ce===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=w(T.image,!1,a.maxTextureSize);Me=Tt(T,Me);const ke=l.convert(T.format,T.colorSpace),qe=l.convert(T.type);let tt=L(T.internalFormat,ke,qe,T.colorSpace,T.isVideoTexture);te(me,T);let Be;const ft=T.mipmaps,rt=T.isVideoTexture!==!0,wt=Xe.__version===void 0||_e===!0,j=he.dataReady,Re=$(T,Me);if(T.isDepthTexture)tt=P(T.format===so,T.type),wt&&(rt?t.texStorage2D(r.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,qe,null));else if(T.isDataTexture)if(ft.length>0){rt&&wt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)Be=ft[ue],rt?j&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ue,tt,Be.width,Be.height,0,ke,qe,Be.data);T.generateMipmaps=!1}else rt?(wt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,Me.width,Me.height),j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,qe,Me.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,qe,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&wt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,tt,ft[0].width,ft[0].height,Me.depth);for(let ue=0,pe=ft.length;ue<pe;ue++)if(Be=ft[ue],T.format!==li)if(ke!==null)if(rt){if(j)if(T.layerUpdates.size>0){const De=fg(Be.width,Be.height,T.format,T.type);for(const Le of T.layerUpdates){const st=Be.data.subarray(Le*De/Be.data.BYTES_PER_ELEMENT,(Le+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Le,Be.width,Be.height,1,ke,st)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,tt,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?j&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Be.width,Be.height,Me.depth,ke,qe,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,tt,Be.width,Be.height,Me.depth,0,ke,qe,Be.data)}else{rt&&wt&&t.texStorage2D(r.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let ue=0,pe=ft.length;ue<pe;ue++)Be=ft[ue],T.format!==li?ke!==null?rt?j&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?j&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ue,tt,Be.width,Be.height,0,ke,qe,Be.data)}else if(T.isDataArrayTexture)if(rt){if(wt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,tt,Me.width,Me.height,Me.depth),j)if(T.layerUpdates.size>0){const ue=fg(Me.width,Me.height,T.format,T.type);for(const pe of T.layerUpdates){const De=Me.data.subarray(pe*ue/Me.data.BYTES_PER_ELEMENT,(pe+1)*ue/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ke,qe,De)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(T.isData3DTexture)rt?(wt&&t.texStorage3D(r.TEXTURE_3D,Re,tt,Me.width,Me.height,Me.depth),j&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(T.isFramebufferTexture){if(wt)if(rt)t.texStorage2D(r.TEXTURE_2D,Re,tt,Me.width,Me.height);else{let ue=Me.width,pe=Me.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,tt,ue,pe,0,ke,qe,null),ue>>=1,pe>>=1}}else if(ft.length>0){if(rt&&wt){const ue=We(ft[0]);t.texStorage2D(r.TEXTURE_2D,Re,tt,ue.width,ue.height)}for(let ue=0,pe=ft.length;ue<pe;ue++)Be=ft[ue],rt?j&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ke,qe,Be):t.texImage2D(r.TEXTURE_2D,ue,tt,ke,qe,Be);T.generateMipmaps=!1}else if(rt){if(wt){const ue=We(Me);t.texStorage2D(r.TEXTURE_2D,Re,tt,ue.width,ue.height)}j&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,qe,Me)}else t.texImage2D(r.TEXTURE_2D,0,tt,ke,qe,Me);y(T)&&v(me),Xe.__version=he.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,re){if(T.image.length!==6)return;const me=Te(D,T),_e=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+re);const he=s.get(_e);if(_e.version!==he.__version||me===!0){t.activeTexture(r.TEXTURE0+re);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ce=T.colorSpace===Mr?null:Mt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Mr||Xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ut&&!Me?ke[pe]=w(T.image[pe],!0,a.maxCubemapSize):ke[pe]=Me?T.image[pe].image:T.image[pe],ke[pe]=Tt(T,ke[pe]);const qe=ke[0],tt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),ft=L(T.internalFormat,tt,Be,T.colorSpace),rt=T.isVideoTexture!==!0,wt=he.__version===void 0||me===!0,j=_e.dataReady;let Re=$(T,qe);te(r.TEXTURE_CUBE_MAP,T);let ue;if(ut){rt&&wt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,qe.width,qe.height);for(let pe=0;pe<6;pe++){ue=ke[pe].mipmaps;for(let De=0;De<ue.length;De++){const Le=ue[De];T.format!==li?tt!==null?rt?j&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,tt,Be,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,ft,Le.width,Le.height,0,tt,Be,Le.data)}}}else{if(ue=T.mipmaps,rt&&wt){ue.length>0&&Re++;const pe=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){rt?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,tt,Be,ke[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,ke[pe].width,ke[pe].height,0,tt,Be,ke[pe].data);for(let De=0;De<ue.length;De++){const st=ue[De].image[pe].image;rt?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,st.width,st.height,tt,Be,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,st.width,st.height,0,tt,Be,st.data)}}else{rt?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,tt,Be,ke[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,tt,Be,ke[pe]);for(let De=0;De<ue.length;De++){const Le=ue[De];rt?j&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,tt,Be,Le.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,ft,tt,Be,Le.image[pe])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),he.__version=_e.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Se(D,T,re,me,_e,he){const Xe=l.convert(re.format,re.colorSpace),Ce=l.convert(re.type),Fe=L(re.internalFormat,Xe,Ce,re.colorSpace),ut=s.get(T),Me=s.get(re);if(Me.__renderTarget=T,!ut.__hasExternalTextures){const ke=Math.max(1,T.width>>he),qe=Math.max(1,T.height>>he);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,he,Fe,ke,qe,T.depth,0,Xe,Ce,null):t.texImage2D(_e,he,Fe,ke,qe,0,Xe,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Me.__webglTexture,0,ht(T)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Me.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(D,T,re){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const me=T.depthTexture,_e=me&&me.isDepthTexture?me.type:null,he=P(T.stencilBuffer,_e),Xe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=ht(T);ct(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,he,T.width,T.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,he,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,he,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,D)}else{const me=T.textures;for(let _e=0;_e<me.length;_e++){const he=me[_e],Xe=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),Fe=L(he.internalFormat,Xe,Ce,he.colorSpace),ut=ht(T);re&&ct(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Fe,T.width,T.height):ct(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const _e=me.__webglTexture,he=ht(T);if(T.depthTexture.format===Js)ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(T.depthTexture.format===so)ct(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const T=s.get(D),re=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=me}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,D)}else if(re){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),ge(T.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,he)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ge(T.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(D,T,re){const me=s.get(D);T!==void 0&&Se(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),re!==void 0&&Ne(D)}function At(D){const T=D.texture,re=s.get(D),me=s.get(T);D.addEventListener("dispose",k);const _e=D.textures,he=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,c.memory.textures++),he){re.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)re.__webglFramebuffer[Ce][Fe]=r.createFramebuffer()}else re.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)re.__webglFramebuffer[Ce]=r.createFramebuffer()}else re.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const ut=s.get(_e[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ct(D)===!1){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];re.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,re.__webglColorRenderbuffer[Ce]);const ut=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=L(Fe.internalFormat,ut,Me,Fe.colorSpace,D.isXRRenderTarget===!0),qe=ht(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ke,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,re.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),ge(re.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),te(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Se(re.__webglFramebuffer[Ce][Fe],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Se(re.__webglFramebuffer[Ce],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const ut=_e[Ce],Me=s.get(ut);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),te(r.TEXTURE_2D,ut),Se(re.__webglFramebuffer,D,ut,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(ut)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),te(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Se(re.__webglFramebuffer[Fe],D,T,r.COLOR_ATTACHMENT0,Ce,Fe);else Se(re.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&v(Ce),t.unbindTexture()}D.depthBuffer&&Ne(D)}function pt(D){const T=D.textures;for(let re=0,me=T.length;re<me;re++){const _e=T[re];if(y(_e)){const he=b(D),Xe=s.get(_e).__webglTexture;t.bindTexture(he,Xe),v(he),t.unbindTexture()}}}const Lt=[],H=[];function _n(D){if(D.samples>0){if(ct(D)===!1){const T=D.textures,re=D.width,me=D.height;let _e=r.COLOR_BUFFER_BIT;const he=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(D),Ce=T.length>1;if(Ce)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ut=s.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,re,me,0,0,re,me,_e,r.NEAREST),d===!0&&(Lt.length=0,H.length=0,Lt.push(r.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Lt.push(he),H.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ut=s.get(T[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ut,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const T=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(D){const T=c.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Tt(D,T){const re=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||re!==oo&&re!==Mr&&(Mt.getTransfer(re)===Ct?(me!==li||_e!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),T}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=ce,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=I,this.rebindTextures=Je,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct}function kA(r,e){function t(s,a=Mr){let l;const c=Mt.getTransfer(a);if(s===$i)return r.UNSIGNED_BYTE;if(s===Vd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return r.BYTE;if(s===gv)return r.SHORT;if(s===ra)return r.UNSIGNED_SHORT;if(s===Hd)return r.INT;if(s===ss)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===ua)return r.HALF_FLOAT;if(s===_v)return r.ALPHA;if(s===xv)return r.RGB;if(s===li)return r.RGBA;if(s===yv)return r.LUMINANCE;if(s===Sv)return r.LUMINANCE_ALPHA;if(s===Js)return r.DEPTH_COMPONENT;if(s===so)return r.DEPTH_STENCIL;if(s===Ev)return r.RED;if(s===Wd)return r.RED_INTEGER;if(s===Mv)return r.RG;if(s===Xd)return r.RG_INTEGER;if(s===$d)return r.RGBA_INTEGER;if(s===ql||s===Kl||s===Zl||s===Ql)if(c===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===rd||s===sd||s===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad||s===ld||s===ud)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ad||s===ld)return c===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ud)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===yd||s===Sd||s===Ed||s===Md)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===cd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_d)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Md)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jl||s===wd||s===Td)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Jl)return c===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wv||s===Ad||s===Cd||s===Rd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Jl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ro?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const BA={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BA)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Hl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new In,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new br({vertexShader:zA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends co{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,g=null,x=null,_=null,S=null,E=null;const w=new VA,y=t.getContextAttributes();let v=null,b=null;const L=[],P=[],$=new Pt;let G=null;const k=new Kn;k.viewport=new Xt;const q=new Kn;q.viewport=new Xt;const R=[k,q],C=new cE;let W=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=L[Q];return de===void 0&&(de=new Df,L[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=L[Q];return de===void 0&&(de=new Df,L[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=L[Q];return de===void 0&&(de=new Df,L[Q]=de),de.getHandSpace()};function ae(Q){const de=P.indexOf(Q.inputSource);if(de===-1)return;const Se=L[de];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,p||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){a.removeEventListener("select",ae),a.removeEventListener("selectstart",ae),a.removeEventListener("selectend",ae),a.removeEventListener("squeeze",ae),a.removeEventListener("squeezestart",ae),a.removeEventListener("squeezeend",ae),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",F);for(let Q=0;Q<L.length;Q++){const de=P[Q];de!==null&&(P[Q]=null,L[Q].disconnect(de))}W=null,ce=null,w.reset(),e.setRenderTarget(v),S=null,_=null,x=null,a=null,b=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize($.width,$.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",ae),a.addEventListener("selectstart",ae),a.addEventListener("selectend",ae),a.addEventListener("squeeze",ae),a.addEventListener("squeezestart",ae),a.addEventListener("squeezeend",ae),a.addEventListener("end",V),a.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize($),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Se=null,ge=null,Ae=null;y.depth&&(Ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?so:Js,ge=y.stencil?ro:ss);const Ne={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};x=new XRWebGLBinding(a,t),_=x.createProjectionLayer(Ne),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new os(_.textureWidth,_.textureHeight,{format:li,type:$i,depthTexture:new Ov(_.textureWidth,_.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new os(S.framebufferWidth,S.framebufferHeight,{format:li,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}b.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Te.setContext(a),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function F(Q){for(let de=0;de<Q.removed.length;de++){const Se=Q.removed[de],ge=P.indexOf(Se);ge>=0&&(P[ge]=null,L[ge].disconnect(Se))}for(let de=0;de<Q.added.length;de++){const Se=Q.added[de];let ge=P.indexOf(Se);if(ge===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=P.length){P.push(Se),ge=Ne;break}else if(P[Ne]===null){P[Ne]=Se,ge=Ne;break}if(ge===-1)break}const Ae=L[ge];Ae&&Ae.connect(Se)}}const O=new le,B=new le;function I(Q,de,Se){O.setFromMatrixPosition(de.matrixWorld),B.setFromMatrixPosition(Se.matrixWorld);const ge=O.distanceTo(B),Ae=de.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Je=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],_n=(Ne[8]+1)/Ne[0],ht=Je*H,ct=Je*_n,je=ge/(-H+_n),Tt=je*-H;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=Je+je,D=At+je,T=ht-Tt,re=ct+(ge-Tt),me=pt*At/D*We,_e=Lt*At/D*We;Q.projectionMatrix.makePerspective(T,re,me,_e,We,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function K(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let de=Q.near,Se=Q.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Se=w.depthFar)),C.near=q.near=k.near=de,C.far=q.far=k.far=Se,(W!==C.near||ce!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),W=C.near,ce=C.far),k.layers.mask=Q.layers.mask|2,q.layers.mask=Q.layers.mask|4,C.layers.mask=k.layers.mask|q.layers.mask;const ge=Q.parent,Ae=C.cameras;K(C,ge);for(let Ne=0;Ne<Ae.length;Ne++)K(Ae[Ne],ge);Ae.length===2?I(C,k,q):C.projectionMatrix.copy(k.projectionMatrix),ie(Q,C,ge)};function ie(Q,de,Se){Se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=bd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(Q){d=Q,_!==null&&(_.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let N=null;function te(Q,de){if(g=de.getViewerPose(p||c),E=de,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let ge=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,ge=!0);for(let Ne=0;Ne<Se.length;Ne++){const Je=Se[Ne];let At=null;if(S!==null)At=S.getViewport(Je);else{const Lt=x.getViewSubImage(_,Je);At=Lt.viewport,Ne===0&&(e.setRenderTargetTextures(b,Lt.colorTexture,_.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(b))}let pt=R[Ne];pt===void 0&&(pt=new Kn,pt.layers.enable(Ne),pt.viewport=new Xt,R[Ne]=pt),pt.matrix.fromArray(Je.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Je.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Ne===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ge===!0&&C.cameras.push(pt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=x.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&w.init(e,Ne,a.renderState)}}for(let Se=0;Se<L.length;Se++){const ge=P[Se],Ae=L[Se];ge!==null&&Ae!==void 0&&Ae.update(ge,de,p||c)}N&&N(Q,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),E=null}const Te=new kv;Te.setAnimationLoop(te),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const Kr=new ji,WA=new Yt;function XA(r,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Iv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,b,L,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),x(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),_(y,v),v.isMeshPhysicalMaterial&&S(y,v,P)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?d(y,v,b,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Dn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Dn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const b=e.get(v),L=b.envMap,P=b.envMapRotation;L&&(y.envMap.value=L,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.envMapRotation.value.setFromMatrix4(WA.makeRotationFromEuler(Kr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,b,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*b,y.scale.value=L*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,b){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const b=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function $A(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,L){const P=L.program;s.uniformBlockBinding(b,P)}function p(b,L){let P=a[b.id];P===void 0&&(E(b),P=g(b),a[b.id]=P,b.addEventListener("dispose",y));const $=L.program;s.updateUBOMapping(b,$);const G=e.render.frame;l[b.id]!==G&&(_(b),l[b.id]=G)}function g(b){const L=x();b.__bindingPointIndex=L;const P=r.createBuffer(),$=b.__size,G=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,$,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function x(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const L=a[b.id],P=b.uniforms,$=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let G=0,k=P.length;G<k;G++){const q=Array.isArray(P[G])?P[G]:[P[G]];for(let R=0,C=q.length;R<C;R++){const W=q[R];if(S(W,G,R,$)===!0){const ce=W.__offset,ae=Array.isArray(W.value)?W.value:[W.value];let V=0;for(let F=0;F<ae.length;F++){const O=ae[F],B=w(O);typeof O=="number"||typeof O=="boolean"?(W.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,ce+V,W.__data)):O.isMatrix3?(W.__data[0]=O.elements[0],W.__data[1]=O.elements[1],W.__data[2]=O.elements[2],W.__data[3]=0,W.__data[4]=O.elements[3],W.__data[5]=O.elements[4],W.__data[6]=O.elements[5],W.__data[7]=0,W.__data[8]=O.elements[6],W.__data[9]=O.elements[7],W.__data[10]=O.elements[8],W.__data[11]=0):(O.toArray(W.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ce,W.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,L,P,$){const G=b.value,k=L+"_"+P;if($[k]===void 0)return typeof G=="number"||typeof G=="boolean"?$[k]=G:$[k]=G.clone(),!0;{const q=$[k];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return $[k]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function E(b){const L=b.uniforms;let P=0;const $=16;for(let k=0,q=L.length;k<q;k++){const R=Array.isArray(L[k])?L[k]:[L[k]];for(let C=0,W=R.length;C<W;C++){const ce=R[C],ae=Array.isArray(ce.value)?ce.value:[ce.value];for(let V=0,F=ae.length;V<F;V++){const O=ae[V],B=w(O),I=P%$,K=I%B.boundary,ie=I+K;P+=K,ie!==0&&$-ie<B.storage&&(P+=$-ie),ce.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=P,P+=B.storage}}}const G=P%$;return G>0&&(P+=$-G),b.__size=P,b.__cache={},this}function w(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),L}function y(b){const L=b.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function v(){for(const b in a)r.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:d,update:p,dispose:v}}class jA{constructor(e={}){const{canvas:t=LS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const b=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Ar,this.toneMappingExposure=1;const P=this;let $=!1,G=0,k=0,q=null,R=-1,C=null;const W=new Xt,ce=new Xt;let ae=null;const V=new Rt(0);let F=0,O=t.width,B=t.height,I=1,K=null,ie=null;const N=new Xt(0,0,O,B),te=new Xt(0,0,O,B);let Te=!1;const Q=new Fv;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ge=new Yt,Ae=new Yt,Ne=new le,Je=new Xt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return q===null?I:1}let H=s;function _n(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const Y="webgl2";if(H=_n(Y,A),H===null)throw _n(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,je,Tt,We,D,T,re,me,_e,he,Xe,Ce,Fe,ut,Me,ke,qe,tt,Be,ft,rt,wt,j;function Re(){ht=new nT(H),ht.init(),rt=new kA(H,ht),ct=new Kw(H,ht,e,rt),je=new FA(H,ht),ct.reverseDepthBuffer&&_&&je.buffers.depth.setReversed(!0),Tt=new sT(H),We=new MA,D=new OA(H,ht,je,We,ct,rt,Tt),T=new Qw(P),re=new tT(P),me=new dE(H),wt=new Yw(H,me),_e=new iT(H,me,Tt,wt),he=new aT(H,_e,me,Tt),tt=new oT(H,ct,D),Me=new Zw(We),Xe=new EA(P,T,re,ht,ct,wt,Me),Ce=new XA(P,We),Fe=new TA,ut=new LA(ht),qe=new jw(P,T,re,je,he,S,d),ke=new UA(P,he,ct),j=new $A(H,Tt,ct,je),Be=new qw(H,ht,Tt),ft=new rT(H,ht,Tt),Tt.programs=Xe.programs,P.capabilities=ct,P.extensions=ht,P.properties=We,P.renderLists=Fe,P.shadowMap=ke,P.state=je,P.info=Tt}Re();const ue=new GA(P,H);this.xr=ue,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(O,B,!1))},this.getSize=function(A){return A.set(O,B)},this.setSize=function(A,Y,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,B=Y,t.width=Math.floor(A*I),t.height=Math.floor(Y*I),se===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(O*I,B*I).floor()},this.setDrawingBufferSize=function(A,Y,se){O=A,B=Y,I=se,t.width=Math.floor(A*se),t.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,Y,se,ee){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,Y,se,ee),je.viewport(W.copy(N).multiplyScalar(I).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,Y,se,ee){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,Y,se,ee),je.scissor(ce.copy(te).multiplyScalar(I).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){je.setScissorTest(Te=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,Y=!0,se=!0){let ee=0;if(A){let Z=!1;if(q!==null){const Ee=q.texture.format;Z=Ee===$d||Ee===Xd||Ee===Wd}if(Z){const Ee=q.texture.type,be=Ee===$i||Ee===ss||Ee===ra||Ee===ro||Ee===Vd||Ee===Gd,Ie=qe.getClearColor(),ze=qe.getClearAlpha(),nt=Ie.r,et=Ie.g,Ve=Ie.b;be?(E[0]=nt,E[1]=et,E[2]=Ve,E[3]=ze,H.clearBufferuiv(H.COLOR,0,E)):(w[0]=nt,w[1]=et,w[2]=Ve,w[3]=ze,H.clearBufferiv(H.COLOR,0,w))}else ee|=H.COLOR_BUFFER_BIT}Y&&(ee|=H.DEPTH_BUFFER_BIT),se&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),qe.dispose(),Fe.dispose(),ut.dispose(),We.dispose(),T.dispose(),re.dispose(),he.dispose(),wt.dispose(),j.dispose(),Xe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ls),ue.removeEventListener("sessionend",qi),Mi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const A=Tt.autoReset,Y=ke.enabled,se=ke.autoUpdate,ee=ke.needsUpdate,Z=ke.type;Re(),Tt.autoReset=A,ke.enabled=Y,ke.autoUpdate=se,ke.needsUpdate=ee,ke.type=Z}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const Y=A.target;Y.removeEventListener("dispose",st),It(Y)}function It(A){qt(A),We.remove(A)}function qt(A){const Y=We.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Xe.releaseProgram(se)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,ee,Z,Ee){Y===null&&(Y=At);const be=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=ma(A,Y,se,ee,Z);je.setMaterial(ee,be);let ze=se.index,nt=1;if(ee.wireframe===!0){if(ze=_e.getWireframeAttribute(se),ze===void 0)return;nt=2}const et=se.drawRange,Ve=se.attributes.position;let gt=et.start*nt,ot=(et.start+et.count)*nt;Ee!==null&&(gt=Math.max(gt,Ee.start*nt),ot=Math.min(ot,(Ee.start+Ee.count)*nt)),ze!==null?(gt=Math.max(gt,0),ot=Math.min(ot,ze.count)):Ve!=null&&(gt=Math.max(gt,0),ot=Math.min(ot,Ve.count));const Ht=ot-gt;if(Ht<0||Ht===1/0)return;wt.setup(Z,ee,Ie,se,ze);let Ft,_t=Be;if(ze!==null&&(Ft=me.get(ze),_t=ft,_t.setIndex(Ft)),Z.isMesh)ee.wireframe===!0?(je.setLineWidth(ee.wireframeLinewidth*Lt()),_t.setMode(H.LINES)):_t.setMode(H.TRIANGLES);else if(Z.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Lt()),Z.isLineSegments?_t.setMode(H.LINES):Z.isLineLoop?_t.setMode(H.LINE_LOOP):_t.setMode(H.LINE_STRIP)}else Z.isPoints?_t.setMode(H.POINTS):Z.isSprite&&_t.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)_t.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,Vt=Z._multiDrawCounts,mt=Z._multiDrawCount,cn=ze?me.get(ze).bytesPerElement:1,Zi=We.get(ee).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Zi.setValue(H,"_gl_DrawID",yn),_t.render(Ye[yn]/cn,Vt[yn])}else if(Z.isInstancedMesh)_t.renderInstances(gt,Ht,Z.count);else if(se.isInstancedBufferGeometry){const Ye=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Vt=Math.min(se.instanceCount,Ye);_t.renderInstances(gt,Ht,Vt)}else _t.render(gt,Ht)};function xt(A,Y,se){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,us(A,Y,se),A.side=Rr,A.needsUpdate=!0,us(A,Y,se),A.side=Hi):us(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),v=ut.get(se),v.init(Y),L.push(v),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==se&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ee=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ee=Z.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Ie=Ee[be];xt(Ie,se,Z),ee.add(Ie)}else xt(Ee,se,Z),ee.add(Ee)}),L.pop(),v=null,ee},this.compileAsync=function(A,Y,se=null){const ee=this.compile(A,Y,se);return new Promise(Z=>{function Ee(){if(ee.forEach(function(be){We.get(be).currentProgram.isReady()&&ee.delete(be)}),ee.size===0){Z(A);return}setTimeout(Ee,10)}ht.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wn=null;function xn(A){wn&&wn(A)}function ls(){Mi.stop()}function qi(){Mi.start()}const Mi=new kv;Mi.setAnimationLoop(xn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){wn=A,ue.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ue.addEventListener("sessionstart",ls),ue.addEventListener("sessionend",qi),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,Y,q),v=ut.get(A,L.length),v.init(Y),L.push(v),Ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),y=Fe.get(A,b.length),y.init(),b.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&wi(Ee,Y,-1/0,P.sortObjects)}wi(A,Y,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(K,ie),pt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,pt&&qe.addToRenderList(y,A),this.info.render.frame++,de===!0&&Me.beginShadows();const se=v.state.shadowsArray;ke.render(se,A,Y),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,Z=y.transmissive;if(v.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if(Z.length>0)for(let be=0,Ie=Ee.length;be<Ie;be++){const ze=Ee[be];Dr(ee,Z,A,ze)}pt&&qe.render(A);for(let be=0,Ie=Ee.length;be<Ie;be++){const ze=Ee[be];Lr(y,A,ze,ze.viewport)}}else Z.length>0&&Dr(ee,Z,A,Y),pt&&qe.render(A),Lr(y,A,Y);q!==null&&k===0&&(D.updateMultisampleRenderTarget(q),D.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(P,A,Y),wt.resetDefaultState(),R=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],de===!0&&Me.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function wi(A,Y,se,ee){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ee&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=he.update(A),Ie=A.material;Ie.visible&&y.push(A,be,Ie,se,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const be=he.update(A),Ie=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Je.copy(be.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ie)){const ze=be.groups;for(let nt=0,et=ze.length;nt<et;nt++){const Ve=ze[nt],gt=Ie[Ve.materialIndex];gt&&gt.visible&&y.push(A,be,gt,se,Je.z,Ve)}}else Ie.visible&&y.push(A,be,Ie,se,Je.z,null)}}const Ee=A.children;for(let be=0,Ie=Ee.length;be<Ie;be++)wi(Ee[be],Y,se,ee)}function Lr(A,Y,se,ee){const Z=A.opaque,Ee=A.transmissive,be=A.transparent;v.setupLightsView(se),de===!0&&Me.setGlobalState(P.clippingPlanes,se),ee&&je.viewport(W.copy(ee)),Z.length>0&&Ki(Z,Y,se),Ee.length>0&&Ki(Ee,Y,se),be.length>0&&Ki(be,Y,se),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Dr(A,Y,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ee.id]===void 0&&(v.state.transmissionRenderTarget[ee.id]=new os(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ua:$i,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[ee.id],be=ee.viewport||W;Ee.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const Ie=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(V),F=P.getClearAlpha(),F<1&&P.setClearColor(16777215,.5),P.clear(),pt&&qe.render(se);const ze=P.toneMapping;P.toneMapping=Ar;const nt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),v.setupLightsView(ee),de===!0&&Me.setGlobalState(P.clippingPlanes,ee),Ki(A,se,ee),D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,gt=Y.length;Ve<gt;Ve++){const ot=Y[Ve],Ht=ot.object,Ft=ot.geometry,_t=ot.material,Ye=ot.group;if(_t.side===Hi&&Ht.layers.test(ee.layers)){const Vt=_t.side;_t.side=Dn,_t.needsUpdate=!0,ha(Ht,se,ee,Ft,_t,Ye),_t.side=Vt,_t.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(Ee),D.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Ie),P.setClearColor(V,F),nt!==void 0&&(ee.viewport=nt),P.toneMapping=ze}function Ki(A,Y,se){const ee=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ee=A.length;Z<Ee;Z++){const be=A[Z],Ie=be.object,ze=be.geometry,nt=ee===null?be.material:ee,et=be.group;Ie.layers.test(se.layers)&&ha(Ie,Y,se,ze,nt,et)}}function ha(A,Y,se,ee,Z,Ee){A.onBeforeRender(P,Y,se,ee,Z,Ee),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(P,Y,se,ee,A,Ee),Z.transparent===!0&&Z.side===Hi&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,P.renderBufferDirect(se,Y,ee,Z,A,Ee),Z.side=Rr,Z.needsUpdate=!0,P.renderBufferDirect(se,Y,ee,Z,A,Ee),Z.side=Hi):P.renderBufferDirect(se,Y,ee,Z,A,Ee),A.onAfterRender(P,Y,se,ee,Z,Ee)}function us(A,Y,se){Y.isScene!==!0&&(Y=At);const ee=We.get(A),Z=v.state.lights,Ee=v.state.shadowsArray,be=Z.state.version,Ie=Xe.getParameters(A,Z.state,Ee,Y,se),ze=Xe.getProgramCacheKey(Ie);let nt=ee.programs;ee.environment=A.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(A.isMeshStandardMaterial?re:T).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,ee.programs=nt);let et=nt.get(ze);if(et!==void 0){if(ee.currentProgram===et&&ee.lightsStateVersion===be)return ci(A,Ie),et}else Ie.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Ie,P),et=Xe.acquireProgram(Ie,ze),nt.set(ze,et),ee.uniforms=Ie.uniforms;const Ve=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),ci(A,Ie),ee.needsLights=fu(A),ee.lightsStateVersion=be,ee.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMap.value=Z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotShadowMap.value=Z.state.spotShadowMap,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMap.value=Z.state.pointShadowMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=et,ee.uniformsList=null,et}function pa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=eu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ci(A,Y){const se=We.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function ma(A,Y,se,ee,Z){Y.isScene!==!0&&(Y=At),D.resetTextureUnits();const Ee=Y.fog,be=ee.isMeshStandardMaterial?Y.environment:null,Ie=q===null?P.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:oo,ze=(ee.isMeshStandardMaterial?re:T).get(ee.envMap||be),nt=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,et=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!se.morphAttributes.position,gt=!!se.morphAttributes.normal,ot=!!se.morphAttributes.color;let Ht=Ar;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ht=P.toneMapping);const Ft=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,Ye=We.get(ee),Vt=v.state.lights;if(de===!0&&(Se===!0||A!==C)){const an=A===C&&ee.id===R;Me.setState(ee,A,an)}let mt=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Vt.state.version||Ye.outputColorSpace!==Ie||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==ze||ee.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==et||Ye.morphTargets!==Ve||Ye.morphNormals!==gt||Ye.morphColors!==ot||Ye.toneMapping!==Ht||Ye.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,Ye.__version=ee.version);let cn=Ye.currentProgram;mt===!0&&(cn=us(ee,Y,Z));let Zi=!1,yn=!1,Ti=!1;const bt=cn.getUniforms(),fn=Ye.uniforms;if(je.useProgram(cn.program)&&(Zi=!0,yn=!0,Ti=!0),ee.id!==R&&(R=ee.id,yn=!0),Zi||C!==A){je.buffers.depth.getReversed()?(ge.copy(A.projectionMatrix),IS(ge),US(ge),bt.setValue(H,"projectionMatrix",ge)):bt.setValue(H,"projectionMatrix",A.projectionMatrix),bt.setValue(H,"viewMatrix",A.matrixWorldInverse);const tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(H,Ne.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,yn=!0,Ti=!0)}if(Z.isSkinnedMesh){bt.setOptional(H,Z,"bindMatrix"),bt.setOptional(H,Z,"bindMatrixInverse");const an=Z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),bt.setValue(H,"boneTexture",an.boneTexture,D))}Z.isBatchedMesh&&(bt.setOptional(H,Z,"batchingTexture"),bt.setValue(H,"batchingTexture",Z._matricesTexture,D),bt.setOptional(H,Z,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",Z._indirectTexture,D),bt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",Z._colorsTexture,D));const en=se.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&tt.update(Z,se,cn),(yn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,bt.setValue(H,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(fn.envMap.value=ze,fn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Y.environment!==null&&(fn.envMapIntensity.value=Y.environmentIntensity),yn&&(bt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&ga(fn,Ti),Ee&&ee.fog===!0&&Ce.refreshFogUniforms(fn,Ee),Ce.refreshMaterialUniforms(fn,ee,I,B,v.state.transmissionRenderTarget[A.id]),eu.upload(H,pa(Ye),fn,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(eu.upload(H,pa(Ye),fn,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(H,"center",Z.center),bt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),bt.setValue(H,"normalMatrix",Z.normalMatrix),bt.setValue(H,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const an=ee.uniformsGroups;for(let tn=0,yt=an.length;tn<yt;tn++){const fi=an[tn];j.update(fi,cn),j.bind(fi,cn)}}return cn}function ga(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function fu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,se){We.get(A.texture).__webglTexture=Y,We.get(A.depthTexture).__webglTexture=se;const ee=We.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=se===void 0,ee.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Y){const se=We.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const va=H.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){q=A,G=Y,k=se;let ee=!0,Z=null,Ee=!1,be=!1;if(A){const ze=We.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),ee=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ze.__hasExternalTextures)D.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(ze.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?Z=et[Y][se]:Z=et[Y],Ee=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?Z=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?Z=et[se]:Z=et,W.copy(A.viewport),ce.copy(A.scissor),ae=A.scissorTest}else W.copy(N).multiplyScalar(I).floor(),ce.copy(te).multiplyScalar(I).floor(),ae=Te;if(se!==0&&(Z=va),je.bindFramebuffer(H.FRAMEBUFFER,Z)&&ee&&je.drawBuffers(A,Z),je.viewport(W),je.scissor(ce),je.setScissorTest(ae),Ee){const ze=We.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,se)}else if(be){const ze=We.get(A.texture),nt=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,se,nt)}else if(A!==null&&se!==0){const ze=We.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,se)}R=-1},this.readRenderTargetPixels=function(A,Y,se,ee,Z,Ee,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){je.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const ze=A.texture,nt=ze.format,et=ze.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ee&&se>=0&&se<=A.height-Z&&H.readPixels(Y,se,ee,Z,rt.convert(nt),rt.convert(et),Ee)}finally{const ze=q!==null?We.get(q).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,ee,Z,Ee,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const ze=A.texture,nt=ze.format,et=ze.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=A.width-ee&&se>=0&&se<=A.height-Z){je.bindFramebuffer(H.FRAMEBUFFER,Ie);const Ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(Y,se,ee,Z,rt.convert(nt),rt.convert(et),0);const gt=q!==null?We.get(q).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,gt);const ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await DS(H,ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(Ve),H.deleteSync(ot),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Y=null,se=0){A.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-se),Z=Math.floor(A.image.width*ee),Ee=Math.floor(A.image.height*ee),be=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;D.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,be,Ie,Z,Ee),je.unbindTexture()};const _a=H.createFramebuffer(),xa=H.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,ee=null,Z=0,Ee=null){A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],Y=arguments[2],Ee=arguments[3]||0,se=null),Ee===null&&(Z!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Z,Z=0):Ee=0);let be,Ie,ze,nt,et,Ve,gt,ot,Ht;const Ft=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(se!==null)be=se.max.x-se.min.x,Ie=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,nt=se.min.x,et=se.min.y,Ve=se.isBox3?se.min.z:0;else{const en=Math.pow(2,-Z);be=Math.floor(Ft.width*en),Ie=Math.floor(Ft.height*en),A.isDataArrayTexture?ze=Ft.depth:A.isData3DTexture?ze=Math.floor(Ft.depth*en):ze=1,nt=0,et=0,Ve=0}ee!==null?(gt=ee.x,ot=ee.y,Ht=ee.z):(gt=0,ot=0,Ht=0);const _t=rt.convert(Y.format),Ye=rt.convert(Y.type);let Vt;Y.isData3DTexture?(D.setTexture3D(Y,0),Vt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),Vt=H.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),Vt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const mt=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),Ti=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ve);const bt=A.isDataArrayTexture||A.isData3DTexture,fn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const en=We.get(A),an=We.get(Y),tn=We.get(en.__renderTarget),yt=We.get(an.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let fi=0;fi<ze;fi++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Z,Ve+fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(Y).__webglTexture,Ee,Ht+fi)),H.blitFramebuffer(nt,et,be,Ie,gt,ot,be,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||We.has(A)){const en=We.get(A),an=We.get(Y);je.bindFramebuffer(H.READ_FRAMEBUFFER,_a),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,xa);for(let tn=0;tn<ze;tn++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Z,Ve+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Z),fn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,an.__webglTexture,Ee,Ht+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,an.__webglTexture,Ee),Z!==0?H.blitFramebuffer(nt,et,be,Ie,gt,ot,be,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):fn?H.copyTexSubImage3D(Vt,Ee,gt,ot,Ht+tn,nt,et,be,Ie):H.copyTexSubImage2D(Vt,Ee,gt,ot,nt,et,be,Ie);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else fn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Vt,Ee,gt,ot,Ht,be,Ie,ze,_t,Ye,Ft.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Vt,Ee,gt,ot,Ht,be,Ie,ze,_t,Ft.data):H.texSubImage3D(Vt,Ee,gt,ot,Ht,be,Ie,ze,_t,Ye,Ft):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,gt,ot,be,Ie,_t,Ye,Ft.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,gt,ot,Ft.width,Ft.height,_t,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Ee,gt,ot,be,Ie,_t,Ye,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,mt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ti),Ee===0&&Y.generateMipmaps&&H.generateMipmap(Vt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,se=null,ee=null,Z=0){return A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],Y=arguments[3],Z=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,se,ee,Z)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){G=0,k=0,q=null,je.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const YA=()=>{const r=fe.useRef();return fe.useEffect(()=>{const e=new rE,t=new Kn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;const s=new jA({canvas:r.current});s.setSize(window.innerWidth,window.innerHeight);const a=new fo,l=new Yd({color:65280}),c=new _i(a,l);e.add(c);const f=()=>{requestAnimationFrame(f),c.rotation.x+=.01,c.rotation.y+=.01,s.render(e,t)};f();{const d=new Bd;d.add(document,"title"),d.add(c.rotation,"x").min(-Math.PI).max(Math.PI).step(.01).name("Rotation X"),d.add(l,"wireframe")}},[]),Qe.jsx("canvas",{ref:r})};var If={},Uf={},Nf={},Fg;function qA(){return Fg||(Fg=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];if(typeof window<"u"){var f;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(f=window).gtag.apply(f,l)}},t=e;r.default=t}(Nf)),Nf}var Ff={},Og;function KA(){return Og||(Og=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=c;var e=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function t(f){return f.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(d,p,g){return p>0&&p+d.length!==g.length&&d.search(e)>-1&&g.charAt(p-2)!==":"&&(g.charAt(p+d.length)!=="-"||g.charAt(p-1)==="-")&&g.charAt(p-1).search(/[^\s-]/)<0?d.toLowerCase():d.substr(1).search(/[A-Z]|\../)>-1?d:d.charAt(0).toUpperCase()+d.substr(1)})}function s(f){return typeof f=="string"&&f.indexOf("@")!==-1}var a="REDACTED (Potential Email Address)";function l(f){return s(f)?(console.warn("This arg looks like an email address, redacting."),a):f}function c(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,g=f||"";return d&&(g=t(f)),p&&(g=l(g)),g}}(Ff)),Ff}var kg;function ZA(){return kg||(kg=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.GA4=void 0;var e=c(qA()),t=c(KA()),s=["eventCategory","eventAction","eventLabel","eventValue","hitType"],a=["title","location"],l=["page","hitType"];function c(V){return V&&V.__esModule?V:{default:V}}function f(V,F){if(V==null)return{};var O=d(V,F),B,I;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(V);for(I=0;I<K.length;I++)B=K[I],!(F.indexOf(B)>=0)&&Object.prototype.propertyIsEnumerable.call(V,B)&&(O[B]=V[B])}return O}function d(V,F){if(V==null)return{};var O={},B=Object.keys(V),I,K;for(K=0;K<B.length;K++)I=B[K],!(F.indexOf(I)>=0)&&(O[I]=V[I]);return O}function p(V){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},p(V)}function g(V){return S(V)||_(V)||b(V)||x()}function x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(V){if(typeof Symbol<"u"&&V[Symbol.iterator]!=null||V["@@iterator"]!=null)return Array.from(V)}function S(V){if(Array.isArray(V))return L(V)}function E(V,F){var O=Object.keys(V);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(V);F&&(B=B.filter(function(I){return Object.getOwnPropertyDescriptor(V,I).enumerable})),O.push.apply(O,B)}return O}function w(V){for(var F=1;F<arguments.length;F++){var O=arguments[F]!=null?arguments[F]:{};F%2?E(Object(O),!0).forEach(function(B){R(V,B,O[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(O)):E(Object(O)).forEach(function(B){Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(O,B))})}return V}function y(V,F){return $(V)||P(V,F)||b(V,F)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(V,F){if(V){if(typeof V=="string")return L(V,F);var O=Object.prototype.toString.call(V).slice(8,-1);if(O==="Object"&&V.constructor&&(O=V.constructor.name),O==="Map"||O==="Set")return Array.from(V);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return L(V,F)}}function L(V,F){(F==null||F>V.length)&&(F=V.length);for(var O=0,B=new Array(F);O<F;O++)B[O]=V[O];return B}function P(V,F){var O=V==null?null:typeof Symbol<"u"&&V[Symbol.iterator]||V["@@iterator"];if(O!=null){var B,I,K,ie,N=[],te=!0,Te=!1;try{if(K=(O=O.call(V)).next,F!==0)for(;!(te=(B=K.call(O)).done)&&(N.push(B.value),N.length!==F);te=!0);}catch(Q){Te=!0,I=Q}finally{try{if(!te&&O.return!=null&&(ie=O.return(),Object(ie)!==ie))return}finally{if(Te)throw I}}return N}}function $(V){if(Array.isArray(V))return V}function G(V,F){if(!(V instanceof F))throw new TypeError("Cannot call a class as a function")}function k(V,F){for(var O=0;O<F.length;O++){var B=F[O];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(V,C(B.key),B)}}function q(V,F,O){return k(V.prototype,F),Object.defineProperty(V,"prototype",{writable:!1}),V}function R(V,F,O){return F=C(F),F in V?Object.defineProperty(V,F,{value:O,enumerable:!0,configurable:!0,writable:!0}):V[F]=O,V}function C(V){var F=W(V,"string");return p(F)==="symbol"?F:String(F)}function W(V,F){if(p(V)!=="object"||V===null)return V;var O=V[Symbol.toPrimitive];if(O!==void 0){var B=O.call(V,F||"default");if(p(B)!=="object")return B;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(V)}var ce=function(){function V(){var F=this;G(this,V),R(this,"reset",function(){F.isInitialized=!1,F._testMode=!1,F._currentMeasurementId,F._hasLoadedGA=!1,F._isQueuing=!1,F._queueGtag=[]}),R(this,"_gtag",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];F._testMode||F._isQueuing?F._queueGtag.push(B):e.default.apply(void 0,B)}),R(this,"_loadGA",function(O,B){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!F._hasLoadedGA){var K=document.createElement("script");K.async=!0,K.src="".concat(I,"?id=").concat(O),B&&K.setAttribute("nonce",B),document.body.appendChild(K),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},F._hasLoadedGA=!0}}),R(this,"_toGtagOptions",function(O){if(O){var B={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},I=Object.entries(O).reduce(function(K,ie){var N=y(ie,2),te=N[0],Te=N[1];return B[te]?K[B[te]]=Te:K[te]=Te,K},{});return I}}),R(this,"initialize",function(O){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!O)throw new Error("Require GA_MEASUREMENT_ID");var I=typeof O=="string"?[{trackingId:O}]:O;F._currentMeasurementId=I[0].trackingId;var K=B.gaOptions,ie=B.gtagOptions,N=B.nonce,te=B.testMode,Te=te===void 0?!1:te,Q=B.gtagUrl;if(F._testMode=Te,Te||F._loadGA(F._currentMeasurementId,N,Q),F.isInitialized||(F._gtag("js",new Date),I.forEach(function(ge){var Ae=w(w(w({},F._toGtagOptions(w(w({},K),ge.gaOptions))),ie),ge.gtagOptions);Object.keys(Ae).length?F._gtag("config",ge.trackingId,Ae):F._gtag("config",ge.trackingId)})),F.isInitialized=!0,!Te){var de=g(F._queueGtag);for(F._queueGtag=[],F._isQueuing=!1;de.length;){var Se=de.shift();F._gtag.apply(F,g(Se)),Se[0]==="get"&&(F._isQueuing=!0)}}}),R(this,"set",function(O){if(!O){console.warn("`fieldsObject` is required in .set()");return}if(p(O)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(O).length===0&&console.warn("empty `fieldsObject` given to .set()"),F._gaCommand("set",O)}),R(this,"_gaCommandSendEvent",function(O,B,I,K,ie){F._gtag("event",B,w(w({event_category:O,event_label:I,value:K},ie&&{non_interaction:ie.nonInteraction}),F._toGtagOptions(ie)))}),R(this,"_gaCommandSendEventParameters",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];if(typeof B[0]=="string")F._gaCommandSendEvent.apply(F,g(B.slice(1)));else{var K=B[0],ie=K.eventCategory,N=K.eventAction,te=K.eventLabel,Te=K.eventValue;K.hitType;var Q=f(K,s);F._gaCommandSendEvent(ie,N,te,Te,Q)}}),R(this,"_gaCommandSendTiming",function(O,B,I,K){F._gtag("event","timing_complete",{name:B,value:I,event_category:O,event_label:K})}),R(this,"_gaCommandSendPageview",function(O,B){if(B&&Object.keys(B).length){var I=F._toGtagOptions(B),K=I.title,ie=I.location,N=f(I,a);F._gtag("event","page_view",w(w(w(w({},O&&{page_path:O}),K&&{page_title:K}),ie&&{page_location:ie}),N))}else O?F._gtag("event","page_view",{page_path:O}):F._gtag("event","page_view")}),R(this,"_gaCommandSendPageviewParameters",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];if(typeof B[0]=="string")F._gaCommandSendPageview.apply(F,g(B.slice(1)));else{var K=B[0],ie=K.page;K.hitType;var N=f(K,l);F._gaCommandSendPageview(ie,N)}}),R(this,"_gaCommandSend",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];var K=typeof B[0]=="string"?B[0]:B[0].hitType;switch(K){case"event":F._gaCommandSendEventParameters.apply(F,B);break;case"pageview":F._gaCommandSendPageviewParameters.apply(F,B);break;case"timing":F._gaCommandSendTiming.apply(F,g(B.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(K));break;default:console.warn("Send command doesn't exist: ".concat(K))}}),R(this,"_gaCommandSet",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];typeof B[0]=="string"&&(B[0]=R({},B[0],B[1])),F._gtag("set",F._toGtagOptions(B[0]))}),R(this,"_gaCommand",function(O){for(var B=arguments.length,I=new Array(B>1?B-1:0),K=1;K<B;K++)I[K-1]=arguments[K];switch(O){case"send":F._gaCommandSend.apply(F,I);break;case"set":F._gaCommandSet.apply(F,I);break;default:console.warn("Command doesn't exist: ".concat(O))}}),R(this,"ga",function(){for(var O=arguments.length,B=new Array(O),I=0;I<O;I++)B[I]=arguments[I];if(typeof B[0]=="string")F._gaCommand.apply(F,B);else{var K=B[0];F._gtag("get",F._currentMeasurementId,"client_id",function(ie){F._isQueuing=!1;var N=F._queueGtag;for(K({get:function(Q){return Q==="clientId"?ie:Q==="trackingId"?F._currentMeasurementId:Q==="apiVersion"?"1":void 0}});N.length;){var te=N.shift();F._gtag.apply(F,g(te))}}),F._isQueuing=!0}return F.ga}),R(this,"event",function(O,B){if(typeof O=="string")F._gtag("event",O,F._toGtagOptions(B));else{var I=O.action,K=O.category,ie=O.label,N=O.value,te=O.nonInteraction,Te=O.transport;if(!K||!I){console.warn("args.category AND args.action are required in event()");return}var Q={hitType:"event",eventCategory:(0,t.default)(K),eventAction:(0,t.default)(I)};ie&&(Q.eventLabel=(0,t.default)(ie)),typeof N<"u"&&(typeof N!="number"?console.warn("Expected `args.value` arg to be a Number."):Q.eventValue=N),typeof te<"u"&&(typeof te!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):Q.nonInteraction=te),typeof Te<"u"&&(typeof Te!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(Te)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),Q.transport=Te)),F._gaCommand("send",Q)}}),R(this,"send",function(O){F._gaCommand("send",O)}),this.reset()}return q(V,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),V}();r.GA4=ce;var ae=new ce;r.default=ae}(Uf)),Uf}var Bg;function QA(){return Bg||(Bg=1,function(r){function e(f){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},e(f)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.ReactGAImplementation=void 0;var t=a(ZA());function s(f){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(s=function(x){return x?p:d})(f)}function a(f,d){if(f&&f.__esModule)return f;if(f===null||e(f)!=="object"&&typeof f!="function")return{default:f};var p=s(d);if(p&&p.has(f))return p.get(f);var g={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in f)if(_!=="default"&&Object.prototype.hasOwnProperty.call(f,_)){var S=x?Object.getOwnPropertyDescriptor(f,_):null;S&&(S.get||S.set)?Object.defineProperty(g,_,S):g[_]=f[_]}return g.default=f,p&&p.set(f,g),g}var l=t.GA4;r.ReactGAImplementation=l;var c=t.default;r.default=c}(If)),If}var JA=QA();const Ld=sa(JA);function e1(){const r=()=>{console.log("click"),Ld.event({category:"Button",action:"Click",label:"Bouton Cliqué"})};return Qe.jsxs(Qe.Fragment,{children:[Qe.jsxs(fv,{children:[Qe.jsx("title",{children:"Accueil"}),Qe.jsx("meta",{name:"description",content:"Accueil"})]}),Qe.jsxs("div",{className:"hero",children:[Qe.jsx("h1",{onClick:r,children:"Accueil"}),Qe.jsx(YA,{})]})]})}function zg(){return Qe.jsx("div",{children:Qe.jsx("h1",{children:"404"})})}function t1(){const r=Pr();return Ld.initialize("G-S698NH91GB"),fe.useEffect(()=>{console.log(r.pathname),Ld.send({hitType:"pageview",page:r.pathname,title:r.title})},[r]),Qe.jsxs(Qe.Fragment,{children:[Qe.jsx(by,{}),Qe.jsxs(Sx,{children:[Qe.jsx(js,{path:"/",element:Qe.jsx(e1,{})}),Qe.jsxs(js,{path:"patate",children:[Qe.jsx(js,{path:"",element:Qe.jsx(zg,{})}),Qe.jsx(js,{path:"a-propos",element:Qe.jsx(Ay,{})})]}),Qe.jsx(js,{path:"*",element:Qe.jsx(zg,{})})]}),Qe.jsx(Cy,{})]})}const n1={};P0.createRoot(document.getElementById("root")).render(Qe.jsx(fe.StrictMode,{children:Qe.jsx(cv,{context:n1,children:Qe.jsx(Xx,{children:Qe.jsx(t1,{})})})}));
