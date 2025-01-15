var f0=Object.defineProperty;var d0=(r,e,t)=>e in r?f0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ui=(r,e,t)=>d0(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function ru(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vc={exports:{}},Xo={},Gc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function h0(){if(dm)return dt;dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(U,te,Ne){this.props=U,this.context=te,this.refs=T,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function R(U,te,Ne){this.props=U,this.context=te,this.refs=T,this.updater=Ne||S}var L=R.prototype=new g;L.constructor=R,E(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(U,te,Ne){var Z,he={},Ee=null,xe=null;if(te!=null)for(Z in te.ref!==void 0&&(xe=te.ref),te.key!==void 0&&(Ee=""+te.key),te)V.call(te,Z)&&!N.hasOwnProperty(Z)&&(he[Z]=te[Z]);var we=arguments.length-2;if(we===1)he.children=Ne;else if(1<we){for(var Ue=Array(we),Je=0;Je<we;Je++)Ue[Je]=arguments[Je+2];he.children=Ue}if(U&&U.defaultProps)for(Z in we=U.defaultProps,we)he[Z]===void 0&&(he[Z]=we[Z]);return{$$typeof:r,type:U,key:Ee,ref:xe,props:he,_owner:k.current}}function P(U,te){return{$$typeof:r,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function B(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return te[Ne]})}var oe=/\/+/g;function ee(U,te){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):te.toString(36)}function fe(U,te,Ne,Z,he){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case r:case e:xe=!0}}if(xe)return xe=U,he=he(xe),U=Z===""?"."+ee(xe,0):Z,b(he)?(Ne="",U!=null&&(Ne=U.replace(oe,"$&/")+"/"),fe(he,te,Ne,"",function(Je){return Je})):he!=null&&(C(he)&&(he=P(he,Ne+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(oe,"$&/")+"/")+U)),te.push(he)),1;if(xe=0,Z=Z===""?".":Z+":",b(U))for(var we=0;we<U.length;we++){Ee=U[we];var Ue=Z+ee(Ee,we);xe+=fe(Ee,te,Ne,Ue,he)}else if(Ue=v(U),typeof Ue=="function")for(U=Ue.call(U),we=0;!(Ee=U.next()).done;)Ee=Ee.value,Ue=Z+ee(Ee,we++),xe+=fe(Ee,te,Ne,Ue,he);else if(Ee==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(U,te,Ne){if(U==null)return U;var Z=[],he=0;return fe(U,Z,"","",function(Ee){return te.call(Ne,Ee,he++)}),Z}function se(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},z={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:pe,forEach:function(U,te,Ne){pe(U,function(){te.apply(this,arguments)},Ne)},count:function(U){var te=0;return pe(U,function(){te++}),te},toArray:function(U){return pe(U,function(te){return te})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=y,dt.Fragment=t,dt.Profiler=a,dt.PureComponent=R,dt.StrictMode=s,dt.Suspense=d,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(U,te,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=E({},U.props),he=U.key,Ee=U.ref,xe=U._owner;if(te!=null){if(te.ref!==void 0&&(Ee=te.ref,xe=k.current),te.key!==void 0&&(he=""+te.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Ue in te)V.call(te,Ue)&&!N.hasOwnProperty(Ue)&&(Z[Ue]=te[Ue]===void 0&&we!==void 0?we[Ue]:te[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ne;else if(1<Ue){we=Array(Ue);for(var Je=0;Je<Ue;Je++)we[Je]=arguments[Je+2];Z.children=we}return{$$typeof:r,type:U.type,key:he,ref:Ee,props:Z,_owner:xe}},dt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},dt.createElement=X,dt.createFactory=function(U){var te=X.bind(null,U);return te.type=U,te},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:f,render:U}},dt.isValidElement=C,dt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},dt.memo=function(U,te){return{$$typeof:p,type:U,compare:te===void 0?null:te}},dt.startTransition=function(U){var te=z.transition;z.transition={};try{U()}finally{z.transition=te}},dt.unstable_act=re,dt.useCallback=function(U,te){return le.current.useCallback(U,te)},dt.useContext=function(U){return le.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},dt.useEffect=function(U,te){return le.current.useEffect(U,te)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(U,te,Ne){return le.current.useImperativeHandle(U,te,Ne)},dt.useInsertionEffect=function(U,te){return le.current.useInsertionEffect(U,te)},dt.useLayoutEffect=function(U,te){return le.current.useLayoutEffect(U,te)},dt.useMemo=function(U,te){return le.current.useMemo(U,te)},dt.useReducer=function(U,te,Ne){return le.current.useReducer(U,te,Ne)},dt.useRef=function(U){return le.current.useRef(U)},dt.useState=function(U){return le.current.useState(U)},dt.useSyncExternalStore=function(U,te,Ne){return le.current.useSyncExternalStore(U,te,Ne)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var hm;function Cd(){return hm||(hm=1,Gc.exports=h0()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function p0(){if(pm)return Xo;pm=1;var r=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var _,x={},v=null,S=null;p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(_ in d)s.call(d,_)&&!l.hasOwnProperty(_)&&(x[_]=d[_]);if(f&&f.defaultProps)for(_ in d=f.defaultProps,d)x[_]===void 0&&(x[_]=d[_]);return{$$typeof:e,type:f,key:v,ref:S,props:x,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=c,Xo.jsxs=c,Xo}var mm;function m0(){return mm||(mm=1,Vc.exports=p0()),Vc.exports}var Qe=m0(),ce=Cd();const Tr=ru(ce);var xl={},Wc={exports:{}},Pn={},Xc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function g0(){return gm||(gm=1,function(r){function e(z,ae){var re=z.length;z.push(ae);e:for(;0<re;){var U=re-1>>>1,te=z[U];if(0<a(te,ae))z[U]=ae,z[re]=te,re=U;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ae=z[0],re=z.pop();if(re!==ae){z[0]=re;e:for(var U=0,te=z.length,Ne=te>>>1;U<Ne;){var Z=2*(U+1)-1,he=z[Z],Ee=Z+1,xe=z[Ee];if(0>a(he,re))Ee<te&&0>a(xe,he)?(z[U]=xe,z[Ee]=re,U=Ee):(z[U]=he,z[Z]=re,U=Z);else if(Ee<te&&0>a(xe,re))z[U]=xe,z[Ee]=re,U=Ee;else break e}}return ae}function a(z,ae){var re=z.sortIndex-ae.sortIndex;return re!==0?re:z.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var d=[],p=[],_=1,x=null,v=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var ae=t(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=z)s(p),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(p)}}function b(z){if(T=!1,L(z),!E)if(t(d)!==null)E=!0,se(V);else{var ae=t(p);ae!==null&&le(b,ae.startTime-z)}}function V(z,ae){E=!1,T&&(T=!1,g(X),X=-1),S=!0;var re=v;try{for(L(ae),x=t(d);x!==null&&(!(x.expirationTime>ae)||z&&!B());){var U=x.callback;if(typeof U=="function"){x.callback=null,v=x.priorityLevel;var te=U(x.expirationTime<=ae);ae=r.unstable_now(),typeof te=="function"?x.callback=te:x===t(d)&&s(d),L(ae)}else s(d);x=t(d)}if(x!==null)var Ne=!0;else{var Z=t(p);Z!==null&&le(b,Z.startTime-ae),Ne=!1}return Ne}finally{x=null,v=re,S=!1}}var k=!1,N=null,X=-1,P=5,C=-1;function B(){return!(r.unstable_now()-C<P)}function oe(){if(N!==null){var z=r.unstable_now();C=z;var ae=!0;try{ae=N(!0,z)}finally{ae?ee():(k=!1,N=null)}}else k=!1}var ee;if(typeof R=="function")ee=function(){R(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=oe,ee=function(){pe.postMessage(null)}}else ee=function(){y(oe,0)};function se(z){N=z,k||(k=!0,ee())}function le(z,ae){X=y(function(){z(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){E||S||(E=!0,se(V))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var re=v;v=ae;try{return z()}finally{v=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,ae){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=v;v=z;try{return ae()}finally{v=re}},r.unstable_scheduleCallback=function(z,ae,re){var U=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,z={id:_++,callback:ae,priorityLevel:z,startTime:re,expirationTime:te,sortIndex:-1},re>U?(z.sortIndex=re,e(p,z),t(d)===null&&z===t(p)&&(T?(g(X),X=-1):T=!0,le(b,re-U))):(z.sortIndex=te,e(d,z),E||S||(E=!0,se(V))),z},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(z){var ae=v;return function(){var re=v;v=ae;try{return z.apply(this,arguments)}finally{v=re}}}}($c)),$c}var _m;function _0(){return _m||(_m=1,Xc.exports=g0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function v0(){if(vm)return Pn;vm=1;var r=Cd(),e=_0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(n){return d.call(x,n)?!0:d.call(_,n)?!1:p.test(n)?x[n]=!0:(_[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,h,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,R);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,R);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,R);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,h,u)&&(o=null),u||h===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),z=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function te(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ne=!1;function Z(n,i){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(n,[],i)}else{try{i.call()}catch(J){u=J}n.call(i.prototype)}else{try{throw Error()}catch(J){u=J}n()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var h=J.stack.split(`
`),m=u.stack.split(`
`),M=h.length-1,I=m.length-1;1<=M&&0<=I&&h[M]!==m[I];)I--;for(;1<=M&&0<=I;M--,I--)if(h[M]!==m[I]){if(M!==1||I!==1)do if(M--,I--,0>I||h[M]!==m[I]){var F=`
`+h[M].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=M&&0<=I);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function he(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case k:return"Portal";case P:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function At(n){n._valueTracker||(n._valueTracker=Je(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function vn(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ct(n,i){ht(n,i);var o=we(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&wt(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function wt(n,i,o){(i!=="number"||Lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function D(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function me(n,i){var o=we(i.value),u=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=qe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Be=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ie=null,de=null;function Le(n){if(n=Po(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),Ce(n.stateNode,n.type,i))}}function Pe(n){ie?de?de.push(n):de=[n]:ie=n}function st(){if(ie){var n=ie,i=de;if(de=ie=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function It(n,i){return n(i)}function qt(){}var xt=!1;function Tn(n,i,o){if(xt)return n(i,o);xt=!0;try{return It(n,i,o)}finally{xt=!1,(ie!==null||de!==null)&&(qt(),st())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var u=Ua(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ls=!1;if(f)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ls=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ls=!1}function Mi(n,i,o,u,h,m,M,I,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var Ti=!1,Pr=null,Lr=!1,Ki=null,da={onError:function(n){Ti=!0,Pr=n}};function us(n,i,o,u,h,m,M,I,F){Ti=!1,Pr=null,Mi.apply(da,arguments)}function ha(n,i,o,u,h,m,M,I,F){if(us.apply(this,arguments),Ti){if(Ti){var J=Pr;Ti=!1,Pr=null}else throw Error(t(198));Lr||(Lr=!0,Ki=J)}}function ci(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function pa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ma(n){if(ci(n)!==n)throw Error(t(188))}function fu(n){var i=n.alternate;if(!i){if(i=ci(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return ma(h),n;if(m===u)return ma(h),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=m;else{for(var M=!1,I=h.child;I;){if(I===o){M=!0,o=h,u=m;break}if(I===u){M=!0,u=h,o=m;break}I=I.sibling}if(!M){for(I=m.child;I;){if(I===o){M=!0,o=m,u=h;break}if(I===u){M=!0,u=m,o=h;break}I=I.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ga(n){return n=fu(n),n!==null?_a(n):null}function _a(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_a(n);if(i!==null)return i;n=n.sibling}return null}var va=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,W=e.unstable_shouldYield,Q=e.unstable_requestPaint,Y=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,et=null,Ve=null;function gt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:vt,Ht=Math.log,Ft=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(Ht(n)/Ft|0)|0}var Ye=64,Vt=4194304;function mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,m=n.pingedLanes,M=o&268435455;if(M!==0){var I=M&~h;I!==0?u=mt(I):(m&=M,m!==0&&(u=mt(m)))}else M=o&~h,M!==0?u=mt(M):m!==0&&(u=mt(m));if(u===0)return 0;if(i!==0&&i!==u&&!(i&h)&&(h=u&-u,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if(u&4&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-ot(i),h=1<<o,u|=n[o],i&=~h;return u}function Zi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-ot(m),I=1<<M,F=h[M];F===-1?(!(I&o)||I&u)&&(h[M]=Zi(I,i)):F<=i&&(n.expiredLanes|=I),m&=~I}}function wi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bt(){var n=Ye;return Ye<<=1,!(Ye&4194240)&&(Ye=64),n}function fn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function en(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=o}function an(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-ot(o),m=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~m}}function tn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-ot(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var yt=0;function fi(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xd,du,$d,jd,Yd,hu=!1,xa=[],Qi=null,Ji=null,er=null,po=new Map,mo=new Map,tr=[],U_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Po(i),i!==null&&du(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function N_(n,i,o,u,h){switch(i){case"focusin":return Qi=go(Qi,n,i,o,u,h),!0;case"dragenter":return Ji=go(Ji,n,i,o,u,h),!0;case"mouseover":return er=go(er,n,i,o,u,h),!0;case"pointerover":var m=h.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,u,h)),!0;case"gotpointercapture":return m=h.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,u,h)),!0}return!1}function Kd(n){var i=Dr(n.target);if(i!==null){var o=ci(i);if(o!==null){if(i=o.tag,i===13){if(i=pa(o),i!==null){n.blockedOn=i,Yd(n.priority,function(){$d(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ya(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Tt=u,o.target.dispatchEvent(u),Tt=null}else return i=Po(o),i!==null&&du(i),n.blockedOn=o,!1;i.shift()}return!0}function Zd(n,i,o){ya(n)&&o.delete(i)}function F_(){hu=!1,Qi!==null&&ya(Qi)&&(Qi=null),Ji!==null&&ya(Ji)&&(Ji=null),er!==null&&ya(er)&&(er=null),po.forEach(Zd),mo.forEach(Zd)}function _o(n,i){n.blockedOn===i&&(n.blockedOn=null,hu||(hu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,F_)))}function vo(n){function i(h){return _o(h,n)}if(0<xa.length){_o(xa[0],n);for(var o=1;o<xa.length;o++){var u=xa[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Qi!==null&&_o(Qi,n),Ji!==null&&_o(Ji,n),er!==null&&_o(er,n),po.forEach(i),mo.forEach(i),o=0;o<tr.length;o++)u=tr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<tr.length&&(o=tr[0],o.blockedOn===null);)Kd(o),o.blockedOn===null&&tr.shift()}var cs=b.ReactCurrentBatchConfig,Sa=!0;function O_(n,i,o,u){var h=yt,m=cs.transition;cs.transition=null;try{yt=1,pu(n,i,o,u)}finally{yt=h,cs.transition=m}}function k_(n,i,o,u){var h=yt,m=cs.transition;cs.transition=null;try{yt=4,pu(n,i,o,u)}finally{yt=h,cs.transition=m}}function pu(n,i,o,u){if(Sa){var h=mu(n,i,o,u);if(h===null)Du(n,i,u,Ea,o),qd(n,u);else if(N_(h,n,i,o,u))u.stopPropagation();else if(qd(n,u),i&4&&-1<U_.indexOf(n)){for(;h!==null;){var m=Po(h);if(m!==null&&Xd(m),m=mu(n,i,o,u),m===null&&Du(n,i,u,Ea,o),m===h)break;h=m}h!==null&&u.stopPropagation()}else Du(n,i,u,null,o)}}var Ea=null;function mu(n,i,o,u){if(Ea=null,n=G(u),n=Dr(n),n!==null)if(i=ci(n),i===null)n=null;else if(o=i.tag,o===13){if(n=pa(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function Qd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case Se:return 1;case Re:return 4;case De:case ze:return 16;case nt:return 536870912;default:return 16}default:return 16}}var nr=null,gu=null,Ma=null;function Jd(){if(Ma)return Ma;var n,i=gu,o=i.length,u,h="value"in nr?nr.value:nr.textContent,m=h.length;for(n=0;n<o&&i[n]===h[n];n++);var M=o-n;for(u=1;u<=M&&i[o-u]===h[m-u];u++);return Ma=h.slice(n,1<u?1-u:void 0)}function Ta(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wa(){return!0}function eh(){return!1}function Un(n){function i(o,u,h,m,M){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wa:eh,this.isPropagationStopped=eh,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Un(fs),xo=re({},fs,{view:0,detail:0}),B_=Un(xo),vu,xu,yo,Aa=re({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(vu=n.screenX-yo.screenX,xu=n.screenY-yo.screenY):xu=vu=0,yo=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:xu}}),th=Un(Aa),z_=re({},Aa,{dataTransfer:0}),H_=Un(z_),V_=re({},xo,{relatedTarget:0}),yu=Un(V_),G_=re({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),W_=Un(G_),X_=re({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$_=Un(X_),j_=re({},fs,{data:0}),nh=Un(j_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=K_[n])?!!i[n]:!1}function Su(){return Z_}var Q_=re({},xo,{key:function(n){if(n.key){var i=Y_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),J_=Un(Q_),ev=re({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=Un(ev),tv=re({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),nv=Un(tv),iv=re({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=Un(iv),sv=re({},Aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=Un(sv),av=[9,13,27,32],Eu=f&&"CompositionEvent"in window,So=null;f&&"documentMode"in document&&(So=document.documentMode);var lv=f&&"TextEvent"in window&&!So,rh=f&&(!Eu||So&&8<So&&11>=So),sh=" ",oh=!1;function ah(n,i){switch(n){case"keyup":return av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function uv(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(oh=!0,sh);case"textInput":return n=i.data,n===sh&&oh?null:n;default:return null}}function cv(n,i){if(ds)return n==="compositionend"||!Eu&&ah(n,i)?(n=Jd(),Ma=gu=nr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!fv[n.type]:i==="textarea"}function ch(n,i,o,u){Pe(u),i=La(i,"onChange"),0<i.length&&(o=new _u("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Eo=null,Mo=null;function dv(n){Rh(n,0)}function Ca(n){var i=_s(n);if(pt(i))return n}function hv(n,i){if(n==="change")return i}var fh=!1;if(f){var Mu;if(f){var Tu="oninput"in document;if(!Tu){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Tu=typeof dh.oninput=="function"}Mu=Tu}else Mu=!1;fh=Mu&&(!document.documentMode||9<document.documentMode)}function hh(){Eo&&(Eo.detachEvent("onpropertychange",ph),Mo=Eo=null)}function ph(n){if(n.propertyName==="value"&&Ca(Mo)){var i=[];ch(i,Mo,n,G(n)),Tn(dv,i)}}function pv(n,i,o){n==="focusin"?(hh(),Eo=i,Mo=o,Eo.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function mv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ca(Mo)}function gv(n,i){if(n==="click")return Ca(i)}function _v(n,i){if(n==="input"||n==="change")return Ca(i)}function vv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Zn=typeof Object.is=="function"?Object.is:vv;function To(n,i){if(Zn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!d.call(i,h)||!Zn(n[h],i[h]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var o=mh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mh(o)}}function _h(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?_h(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vh(){for(var n=window,i=Lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Lt(n.document)}return i}function wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xv(n){var i=vh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&_h(o.ownerDocument.documentElement,o)){if(u!==null&&wu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!n.extend&&m>u&&(h=u,u=m,m=h),h=gh(o,m);var M=gh(o,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yv=f&&"documentMode"in document&&11>=document.documentMode,hs=null,Au=null,wo=null,Cu=!1;function xh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Cu||hs==null||hs!==Lt(u)||(u=hs,"selectionStart"in u&&wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),wo&&To(wo,u)||(wo=u,u=La(Au,"onSelect"),0<u.length&&(i=new _u("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=hs)))}function Ra(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ps={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Ru={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function ba(n){if(Ru[n])return Ru[n];if(!ps[n])return n;var i=ps[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in yh)return Ru[n]=i[o];return n}var Sh=ba("animationend"),Eh=ba("animationiteration"),Mh=ba("animationstart"),Th=ba("transitionend"),wh=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){wh.set(n,i),l(i,[n])}for(var bu=0;bu<Ah.length;bu++){var Pu=Ah[bu],Sv=Pu.toLowerCase(),Ev=Pu[0].toUpperCase()+Pu.slice(1);ir(Sv,"on"+Ev)}ir(Sh,"onAnimationEnd"),ir(Eh,"onAnimationIteration"),ir(Mh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Ch(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ha(u,i,void 0,n),n.currentTarget=null}function Rh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],F=I.instance,J=I.currentTarget;if(I=I.listener,F!==m&&h.isPropagationStopped())break e;Ch(h,I,J),m=F}else for(M=0;M<u.length;M++){if(I=u[M],F=I.instance,J=I.currentTarget,I=I.listener,F!==m&&h.isPropagationStopped())break e;Ch(h,I,J),m=F}}}if(Lr)throw n=Ki,Lr=!1,Ki=null,n}function Ut(n,i){var o=i[ku];o===void 0&&(o=i[ku]=new Set);var u=n+"__bubble";o.has(u)||(bh(i,n,2,!1),o.add(u))}function Lu(n,i,o){var u=0;i&&(u|=4),bh(o,n,u,i)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[Pa]){n[Pa]=!0,s.forEach(function(o){o!=="selectionchange"&&(Mv.has(o)||Lu(o,!1,n),Lu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pa]||(i[Pa]=!0,Lu("selectionchange",!1,i))}}function bh(n,i,o,u){switch(Qd(i)){case 1:var h=O_;break;case 4:h=k_;break;default:h=pu}o=h.bind(null,i,o,n),h=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Du(n,i,o,u,h){var m=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===h||F.nodeType===8&&F.parentNode===h))return;M=M.return}for(;I!==null;){if(M=Dr(I),M===null)return;if(F=M.tag,F===5||F===6){u=m=M;continue e}I=I.parentNode}}u=u.return}Tn(function(){var J=m,ve=G(o),ye=[];e:{var ge=wh.get(n);if(ge!==void 0){var Ie=_u,He=n;switch(n){case"keypress":if(Ta(o)===0)break e;case"keydown":case"keyup":Ie=J_;break;case"focusin":He="focus",Ie=yu;break;case"focusout":He="blur",Ie=yu;break;case"beforeblur":case"afterblur":Ie=yu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=nv;break;case Sh:case Eh:case Mh:Ie=W_;break;case Th:Ie=rv;break;case"scroll":Ie=B_;break;case"wheel":Ie=ov;break;case"copy":case"cut":case"paste":Ie=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ih}var Ge=(i&4)!==0,Wt=!Ge&&n==="scroll",j=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var H=J,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,j!==null&&(Te=xn(H,j),Te!=null&&Ge.push(Ro(H,Te,q)))),Wt)break;H=H.return}0<Ge.length&&(ge=new Ie(ge,He,null,o,ve),ye.push({event:ge,listeners:Ge}))}}if(!(i&7)){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&o!==Tt&&(He=o.relatedTarget||o.fromElement)&&(Dr(He)||He[Ai]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(He=o.relatedTarget||o.toElement,Ie=J,He=He?Dr(He):null,He!==null&&(Wt=ci(He),He!==Wt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=J),Ie!==He)){if(Ge=th,Te="onMouseLeave",j="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=ih,Te="onPointerLeave",j="onPointerEnter",H="pointer"),Wt=Ie==null?ge:_s(Ie),q=He==null?ge:_s(He),ge=new Ge(Te,H+"leave",Ie,o,ve),ge.target=Wt,ge.relatedTarget=q,Te=null,Dr(ve)===J&&(Ge=new Ge(j,H+"enter",He,o,ve),Ge.target=q,Ge.relatedTarget=Wt,Te=Ge),Wt=Te,Ie&&He)t:{for(Ge=Ie,j=He,H=0,q=Ge;q;q=ms(q))H++;for(q=0,Te=j;Te;Te=ms(Te))q++;for(;0<H-q;)Ge=ms(Ge),H--;for(;0<q-H;)j=ms(j),q--;for(;H--;){if(Ge===j||j!==null&&Ge===j.alternate)break t;Ge=ms(Ge),j=ms(j)}Ge=null}else Ge=null;Ie!==null&&Ph(ye,ge,Ie,Ge,!1),He!==null&&Wt!==null&&Ph(ye,Wt,He,Ge,!0)}}e:{if(ge=J?_s(J):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var $e=hv;else if(uh(ge))if(fh)$e=_v;else{$e=mv;var Ke=pv}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=gv);if($e&&($e=$e(n,J))){ch(ye,$e,o,ve);break e}Ke&&Ke(n,ge,J),n==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ke=J?_s(J):window,n){case"focusin":(uh(Ke)||Ke.contentEditable==="true")&&(hs=Ke,Au=J,wo=null);break;case"focusout":wo=Au=hs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,xh(ye,o,ve);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":xh(ye,o,ve)}var Ze;if(Eu)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ds?ah(n,o)&&(it="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(rh&&o.locale!=="ko"&&(ds||it!=="onCompositionStart"?it==="onCompositionEnd"&&ds&&(Ze=Jd()):(nr=ve,gu="value"in nr?nr.value:nr.textContent,ds=!0)),Ke=La(J,it),0<Ke.length&&(it=new nh(it,n,null,o,ve),ye.push({event:it,listeners:Ke}),Ze?it.data=Ze:(Ze=lh(o),Ze!==null&&(it.data=Ze)))),(Ze=lv?uv(n,o):cv(n,o))&&(J=La(J,"onBeforeInput"),0<J.length&&(ve=new nh("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:J}),ve.data=Ze))}Rh(ye,i)})}function Ro(n,i,o){return{instance:n,listener:i,currentTarget:o}}function La(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=xn(n,o),m!=null&&u.unshift(Ro(n,m,h)),m=xn(n,i),m!=null&&u.push(Ro(n,m,h))),n=n.return}return u}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ph(n,i,o,u,h){for(var m=i._reactName,M=[];o!==null&&o!==u;){var I=o,F=I.alternate,J=I.stateNode;if(F!==null&&F===u)break;I.tag===5&&J!==null&&(I=J,h?(F=xn(o,m),F!=null&&M.unshift(Ro(o,F,I))):h||(F=xn(o,m),F!=null&&M.push(Ro(o,F,I)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var Tv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Lh(n){return(typeof n=="string"?n:""+n).replace(Tv,`
`).replace(wv,"")}function Da(n,i,o){if(i=Lh(i),Lh(n)!==i&&o)throw Error(t(425))}function Ia(){}var Iu=null,Uu=null;function Nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,Av=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(Rv)}:Fu;function Rv(n){setTimeout(function(){throw n})}function Ou(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),vo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);vo(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ih(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),di="__reactFiber$"+gs,bo="__reactProps$"+gs,Ai="__reactContainer$"+gs,ku="__reactEvents$"+gs,bv="__reactListeners$"+gs,Pv="__reactHandles$"+gs;function Dr(n){var i=n[di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ai]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Ih(n);n!==null;){if(o=n[di])return o;n=Ih(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[di]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[bo]||null}var Bu=[],vs=-1;function sr(n){return{current:n}}function Nt(n){0>vs||(n.current=Bu[vs],Bu[vs]=null,vs--)}function Dt(n,i){vs++,Bu[vs]=n.current,n.current=i}var or={},dn=sr(or),wn=sr(!1),Ir=or;function xs(n,i){var o=n.type.contextTypes;if(!o)return or;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in o)h[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function An(n){return n=n.childContextTypes,n!=null}function Na(){Nt(wn),Nt(dn)}function Uh(n,i,o){if(dn.current!==or)throw Error(t(168));Dt(dn,i),Dt(wn,o)}function Nh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,xe(n)||"Unknown",h));return re({},o,u)}function Fa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Ir=dn.current,Dt(dn,n),Dt(wn,wn.current),!0}function Fh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Nh(n,i,Ir),u.__reactInternalMemoizedMergedChildContext=n,Nt(wn),Nt(dn),Dt(dn,n)):Nt(wn),Dt(wn,o)}var Ci=null,Oa=!1,zu=!1;function Oh(n){Ci===null?Ci=[n]:Ci.push(n)}function Lv(n){Oa=!0,Oh(n)}function ar(){if(!zu&&Ci!==null){zu=!0;var n=0,i=yt;try{var o=Ci;for(yt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ci=null,Oa=!1}catch(h){throw Ci!==null&&(Ci=Ci.slice(n+1)),va(Se,ar),h}finally{yt=i,zu=!1}}return null}var ys=[],Ss=0,ka=null,Ba=0,Hn=[],Vn=0,Ur=null,Ri=1,bi="";function Nr(n,i){ys[Ss++]=Ba,ys[Ss++]=ka,ka=n,Ba=i}function kh(n,i,o){Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Ur,Ur=n;var u=Ri;n=bi;var h=32-ot(u)-1;u&=~(1<<h),o+=1;var m=32-ot(i)+h;if(30<m){var M=h-h%5;m=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Ri=1<<32-ot(i)+h|o<<h|u,bi=m+n}else Ri=1<<m|o<<h|u,bi=n}function Hu(n){n.return!==null&&(Nr(n,1),kh(n,1,0))}function Vu(n){for(;n===ka;)ka=ys[--Ss],ys[Ss]=null,Ba=ys[--Ss],ys[Ss]=null;for(;n===Ur;)Ur=Hn[--Vn],Hn[Vn]=null,bi=Hn[--Vn],Hn[Vn]=null,Ri=Hn[--Vn],Hn[Vn]=null}var Nn=null,Fn=null,Ot=!1,Qn=null;function Bh(n,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function zh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Nn=n,Fn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Nn=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ri,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Nn=n,Fn=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wu(n){if(Ot){var i=Fn;if(i){var o=i;if(!zh(n,i)){if(Gu(n))throw Error(t(418));i=rr(o.nextSibling);var u=Nn;i&&zh(n,i)?Bh(u,o):(n.flags=n.flags&-4097|2,Ot=!1,Nn=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ot=!1,Nn=n}}}function Hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function za(n){if(n!==Nn)return!1;if(!Ot)return Hh(n),Ot=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nu(n.type,n.memoizedProps)),i&&(i=Fn)){if(Gu(n))throw Vh(),Error(t(418));for(;i;)Bh(n,i),i=rr(i.nextSibling)}if(Hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Fn=rr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=Nn?rr(n.stateNode.nextSibling):null;return!0}function Vh(){for(var n=Fn;n;)n=rr(n.nextSibling)}function Es(){Fn=Nn=null,Ot=!1}function Xu(n){Qn===null?Qn=[n]:Qn.push(n)}var Dv=b.ReactCurrentBatchConfig;function Lo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var I=h.refs;M===null?delete I[m]:I[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ha(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function Wh(n){function i(j,H){if(n){var q=j.deletions;q===null?(j.deletions=[H],j.flags|=16):q.push(H)}}function o(j,H){if(!n)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function u(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function h(j,H){return j=mr(j,H),j.index=0,j.sibling=null,j}function m(j,H,q){return j.index=q,n?(q=j.alternate,q!==null?(q=q.index,q<H?(j.flags|=2,H):q):(j.flags|=2,H)):(j.flags|=1048576,H)}function M(j){return n&&j.alternate===null&&(j.flags|=2),j}function I(j,H,q,Te){return H===null||H.tag!==6?(H=Fc(q,j.mode,Te),H.return=j,H):(H=h(H,q),H.return=j,H)}function F(j,H,q,Te){var $e=q.type;return $e===N?ve(j,H,q.props.children,Te,q.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===se&&Gh($e)===H.type)?(Te=h(H,q.props),Te.ref=Lo(j,H,q),Te.return=j,Te):(Te=fl(q.type,q.key,q.props,null,j.mode,Te),Te.ref=Lo(j,H,q),Te.return=j,Te)}function J(j,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=Oc(q,j.mode,Te),H.return=j,H):(H=h(H,q.children||[]),H.return=j,H)}function ve(j,H,q,Te,$e){return H===null||H.tag!==7?(H=Gr(q,j.mode,Te,$e),H.return=j,H):(H=h(H,q),H.return=j,H)}function ye(j,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Fc(""+H,j.mode,q),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return q=fl(H.type,H.key,H.props,null,j.mode,q),q.ref=Lo(j,null,H),q.return=j,q;case k:return H=Oc(H,j.mode,q),H.return=j,H;case se:var Te=H._init;return ye(j,Te(H._payload),q)}if(We(H)||ae(H))return H=Gr(H,j.mode,q,null),H.return=j,H;Ha(j,H)}return null}function ge(j,H,q,Te){var $e=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return $e!==null?null:I(j,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return q.key===$e?F(j,H,q,Te):null;case k:return q.key===$e?J(j,H,q,Te):null;case se:return $e=q._init,ge(j,H,$e(q._payload),Te)}if(We(q)||ae(q))return $e!==null?null:ve(j,H,q,Te,null);Ha(j,q)}return null}function Ie(j,H,q,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return j=j.get(q)||null,I(H,j,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return j=j.get(Te.key===null?q:Te.key)||null,F(H,j,Te,$e);case k:return j=j.get(Te.key===null?q:Te.key)||null,J(H,j,Te,$e);case se:var Ke=Te._init;return Ie(j,H,q,Ke(Te._payload),$e)}if(We(Te)||ae(Te))return j=j.get(q)||null,ve(H,j,Te,$e,null);Ha(H,Te)}return null}function He(j,H,q,Te){for(var $e=null,Ke=null,Ze=H,it=H=0,sn=null;Ze!==null&&it<q.length;it++){Ze.index>it?(sn=Ze,Ze=null):sn=Ze.sibling;var Et=ge(j,Ze,q[it],Te);if(Et===null){Ze===null&&(Ze=sn);break}n&&Ze&&Et.alternate===null&&i(j,Ze),H=m(Et,H,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et,Ze=sn}if(it===q.length)return o(j,Ze),Ot&&Nr(j,it),$e;if(Ze===null){for(;it<q.length;it++)Ze=ye(j,q[it],Te),Ze!==null&&(H=m(Ze,H,it),Ke===null?$e=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&Nr(j,it),$e}for(Ze=u(j,Ze);it<q.length;it++)sn=Ie(Ze,j,it,q[it],Te),sn!==null&&(n&&sn.alternate!==null&&Ze.delete(sn.key===null?it:sn.key),H=m(sn,H,it),Ke===null?$e=sn:Ke.sibling=sn,Ke=sn);return n&&Ze.forEach(function(gr){return i(j,gr)}),Ot&&Nr(j,it),$e}function Ge(j,H,q,Te){var $e=ae(q);if(typeof $e!="function")throw Error(t(150));if(q=$e.call(q),q==null)throw Error(t(151));for(var Ke=$e=null,Ze=H,it=H=0,sn=null,Et=q.next();Ze!==null&&!Et.done;it++,Et=q.next()){Ze.index>it?(sn=Ze,Ze=null):sn=Ze.sibling;var gr=ge(j,Ze,Et.value,Te);if(gr===null){Ze===null&&(Ze=sn);break}n&&Ze&&gr.alternate===null&&i(j,Ze),H=m(gr,H,it),Ke===null?$e=gr:Ke.sibling=gr,Ke=gr,Ze=sn}if(Et.done)return o(j,Ze),Ot&&Nr(j,it),$e;if(Ze===null){for(;!Et.done;it++,Et=q.next())Et=ye(j,Et.value,Te),Et!==null&&(H=m(Et,H,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et);return Ot&&Nr(j,it),$e}for(Ze=u(j,Ze);!Et.done;it++,Et=q.next())Et=Ie(Ze,j,it,Et.value,Te),Et!==null&&(n&&Et.alternate!==null&&Ze.delete(Et.key===null?it:Et.key),H=m(Et,H,it),Ke===null?$e=Et:Ke.sibling=Et,Ke=Et);return n&&Ze.forEach(function(c0){return i(j,c0)}),Ot&&Nr(j,it),$e}function Wt(j,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case V:e:{for(var $e=q.key,Ke=H;Ke!==null;){if(Ke.key===$e){if($e=q.type,$e===N){if(Ke.tag===7){o(j,Ke.sibling),H=h(Ke,q.props.children),H.return=j,j=H;break e}}else if(Ke.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===se&&Gh($e)===Ke.type){o(j,Ke.sibling),H=h(Ke,q.props),H.ref=Lo(j,Ke,q),H.return=j,j=H;break e}o(j,Ke);break}else i(j,Ke);Ke=Ke.sibling}q.type===N?(H=Gr(q.props.children,j.mode,Te,q.key),H.return=j,j=H):(Te=fl(q.type,q.key,q.props,null,j.mode,Te),Te.ref=Lo(j,H,q),Te.return=j,j=Te)}return M(j);case k:e:{for(Ke=q.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){o(j,H.sibling),H=h(H,q.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=Oc(q,j.mode,Te),H.return=j,j=H}return M(j);case se:return Ke=q._init,Wt(j,H,Ke(q._payload),Te)}if(We(q))return He(j,H,q,Te);if(ae(q))return Ge(j,H,q,Te);Ha(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(o(j,H.sibling),H=h(H,q),H.return=j,j=H):(o(j,H),H=Fc(q,j.mode,Te),H.return=j,j=H),M(j)):o(j,H)}return Wt}var Ms=Wh(!0),Xh=Wh(!1),Va=sr(null),Ga=null,Ts=null,$u=null;function ju(){$u=Ts=Ga=null}function Yu(n){var i=Va.current;Nt(Va),n._currentValue=i}function qu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ws(n,i){Ga=n,$u=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Cn=!0),n.firstContext=null)}function Gn(n){var i=n._currentValue;if($u!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Ga===null)throw Error(t(308));Ts=n,Ga.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var Fr=null;function Ku(n){Fr===null?Fr=[n]:Fr.push(n)}function $h(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,Ku(i)):(o.next=h.next,h.next=o),i.interleaved=o,Pi(n,u)}function Pi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var lr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,St&2){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Pi(n,o)}return h=u.interleaved,h===null?(i.next=i,Ku(u)):(i.next=h.next,h.next=i),u.interleaved=i,Pi(n,o)}function Wa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tn(n,o)}}function Yh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?h=m=M:m=m.next=M,o=o.next}while(o!==null);m===null?h=m=i:m=m.next=i}else h=m=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Xa(n,i,o,u){var h=n.updateQueue;lr=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var F=I,J=F.next;F.next=null,M===null?m=J:M.next=J,M=F;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==M&&(I===null?ve.firstBaseUpdate=J:I.next=J,ve.lastBaseUpdate=F))}if(m!==null){var ye=h.baseState;M=0,ve=J=F=null,I=m;do{var ge=I.lane,Ie=I.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=n,Ge=I;switch(ge=i,Ie=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ie,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,ge=typeof He=="function"?He.call(Ie,ye,ge):He,ge==null)break e;ye=re({},ye,ge);break e;case 2:lr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(J=ve=Ie,F=ye):ve=ve.next=Ie,M|=ge;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(ve===null&&(F=ye),h.baseState=F,h.firstBaseUpdate=J,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do M|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Br|=M,n.lanes=M,n.memoizedState=ye}}function qh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Do={},hi=sr(Do),Io=sr(Do),Uo=sr(Do);function Or(n){if(n===Do)throw Error(t(174));return n}function Qu(n,i){switch(Dt(Uo,i),Dt(Io,n),Dt(hi,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Xe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Xe(i,n)}Nt(hi),Dt(hi,i)}function As(){Nt(hi),Nt(Io),Nt(Uo)}function Kh(n){Or(Uo.current);var i=Or(hi.current),o=Xe(i,n.type);i!==o&&(Dt(Io,n),Dt(hi,o))}function Ju(n){Io.current===n&&(Nt(hi),Nt(Io))}var kt=sr(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ec=[];function tc(){for(var n=0;n<ec.length;n++)ec[n]._workInProgressVersionPrimary=null;ec.length=0}var ja=b.ReactCurrentDispatcher,nc=b.ReactCurrentBatchConfig,kr=0,Bt=null,Kt=null,nn=null,Ya=!1,No=!1,Fo=0,Iv=0;function hn(){throw Error(t(321))}function ic(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Zn(n[o],i[o]))return!1;return!0}function rc(n,i,o,u,h,m){if(kr=m,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ja.current=n===null||n.memoizedState===null?Ov:kv,n=o(u,h),No){m=0;do{if(No=!1,Fo=0,25<=m)throw Error(t(301));m+=1,nn=Kt=null,i.updateQueue=null,ja.current=Bv,n=o(u,h)}while(No)}if(ja.current=Za,i=Kt!==null&&Kt.next!==null,kr=0,nn=Kt=Bt=null,Ya=!1,i)throw Error(t(300));return n}function sc(){var n=Fo!==0;return Fo=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Bt.memoizedState=nn=n:nn=nn.next=n,nn}function Wn(){if(Kt===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=nn===null?Bt.memoizedState:nn.next;if(i!==null)nn=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?Bt.memoizedState=nn=n:nn=nn.next=n}return nn}function Oo(n,i){return typeof i=="function"?i(n):i}function oc(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Kt,h=u.baseQueue,m=o.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}u.baseQueue=h=m,o.pending=null}if(h!==null){m=h.next,u=u.baseState;var I=M=null,F=null,J=m;do{var ve=J.lane;if((kr&ve)===ve)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:n(u,J.action);else{var ye={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(I=F=ye,M=u):F=F.next=ye,Bt.lanes|=ve,Br|=ve}J=J.next}while(J!==null&&J!==m);F===null?M=u:F.next=I,Zn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=F,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do m=h.lane,Bt.lanes|=m,Br|=m,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ac(n){var i=Wn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,m=i.memoizedState;if(h!==null){o.pending=null;var M=h=h.next;do m=n(m,M.action),M=M.next;while(M!==h);Zn(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function Zh(){}function Qh(n,i){var o=Bt,u=Wn(),h=i(),m=!Zn(u.memoizedState,h);if(m&&(u.memoizedState=h,Cn=!0),u=u.queue,lc(tp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,ko(9,ep.bind(null,o,u,h,i),void 0,null),rn===null)throw Error(t(349));kr&30||Jh(o,i,h)}return h}function Jh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function ep(n,i,o,u){i.value=o,i.getSnapshot=u,np(i)&&ip(n)}function tp(n,i,o){return o(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Zn(n,o)}catch{return!0}}function ip(n){var i=Pi(n,1);i!==null&&ni(i,n,1,-1)}function rp(n){var i=pi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=Fv.bind(null,Bt,n),[i.memoizedState,n]}function ko(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function sp(){return Wn().memoizedState}function qa(n,i,o,u){var h=pi();Bt.flags|=n,h.memoizedState=ko(1|i,o,void 0,u===void 0?null:u)}function Ka(n,i,o,u){var h=Wn();u=u===void 0?null:u;var m=void 0;if(Kt!==null){var M=Kt.memoizedState;if(m=M.destroy,u!==null&&ic(u,M.deps)){h.memoizedState=ko(i,o,m,u);return}}Bt.flags|=n,h.memoizedState=ko(1|i,o,m,u)}function op(n,i){return qa(8390656,8,n,i)}function lc(n,i){return Ka(2048,8,n,i)}function ap(n,i){return Ka(4,2,n,i)}function lp(n,i){return Ka(4,4,n,i)}function up(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cp(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4,4,up.bind(null,i,n),o)}function uc(){}function fp(n,i){var o=Wn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function dp(n,i){var o=Wn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&ic(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function hp(n,i,o){return kr&21?(Zn(o,i)||(o=bt(),Bt.lanes|=o,Br|=o,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=o)}function Uv(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var u=nc.transition;nc.transition={};try{n(!1),i()}finally{yt=o,nc.transition=u}}function pp(){return Wn().memoizedState}function Nv(n,i,o){var u=hr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,o);else if(o=$h(n,i,o,u),o!==null){var h=En();ni(o,n,u,h),_p(o,i,u)}}function Fv(n,i,o){var u=hr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,I=m(M,o);if(h.hasEagerState=!0,h.eagerState=I,Zn(I,M)){var F=i.interleaved;F===null?(h.next=h,Ku(i)):(h.next=F.next,F.next=h),i.interleaved=h;return}}catch{}finally{}o=$h(n,i,h,u),o!==null&&(h=En(),ni(o,n,u,h),_p(o,i,u))}}function mp(n){var i=n.alternate;return n===Bt||i!==null&&i===Bt}function gp(n,i){No=Ya=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function _p(n,i,o){if(o&4194240){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,tn(n,o)}}var Za={readContext:Gn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Ov={readContext:Gn,useCallback:function(n,i){return pi().memoizedState=[n,i===void 0?null:i],n},useContext:Gn,useEffect:op,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,qa(4194308,4,up.bind(null,i,n),o)},useLayoutEffect:function(n,i){return qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return qa(4,2,n,i)},useMemo:function(n,i){var o=pi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Nv.bind(null,Bt,n),[u.memoizedState,n]},useRef:function(n){var i=pi();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:uc,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=Uv.bind(null,n[1]),pi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Bt,h=pi();if(Ot){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));kr&30||Jh(u,i,o)}h.memoizedState=o;var m={value:o,getSnapshot:i};return h.queue=m,op(tp.bind(null,u,m,n),[n]),u.flags|=2048,ko(9,ep.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=pi(),i=rn.identifierPrefix;if(Ot){var o=bi,u=Ri;o=(u&~(1<<32-ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Iv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},kv={readContext:Gn,useCallback:fp,useContext:Gn,useEffect:lc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:oc,useRef:sp,useState:function(){return oc(Oo)},useDebugValue:uc,useDeferredValue:function(n){var i=Wn();return hp(i,Kt.memoizedState,n)},useTransition:function(){var n=oc(Oo)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1},Bv={readContext:Gn,useCallback:fp,useContext:Gn,useEffect:lc,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:dp,useReducer:ac,useRef:sp,useState:function(){return ac(Oo)},useDebugValue:uc,useDeferredValue:function(n){var i=Wn();return Kt===null?i.memoizedState=n:hp(i,Kt.memoizedState,n)},useTransition:function(){var n=ac(Oo)[0],i=Wn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1};function Jn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function cc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qa={isMounted:function(n){return(n=n._reactInternals)?ci(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=En(),h=hr(n),m=Li(u,h);m.payload=i,o!=null&&(m.callback=o),i=ur(n,m,h),i!==null&&(ni(i,n,h,u),Wa(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=En(),h=hr(n),m=Li(u,h);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=ur(n,m,h),i!==null&&(ni(i,n,h,u),Wa(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),u=hr(n),h=Li(o,u);h.tag=2,i!=null&&(h.callback=i),i=ur(n,h,u),i!==null&&(ni(i,n,u,o),Wa(i,n,u))}};function vp(n,i,o,u,h,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!To(o,u)||!To(h,m):!0}function xp(n,i,o){var u=!1,h=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Gn(m):(h=An(i)?Ir:dn.current,u=i.contextTypes,m=(u=u!=null)?xs(n,h):or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function yp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function fc(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Zu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Gn(m):(m=An(i)?Ir:dn.current,h.context=xs(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(cc(n,i,m,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Qa.enqueueReplaceState(h,h.state,null),Xa(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var h=o}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function dc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function hc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){sl||(sl=!0,Rc=u),hc(n,i)},o}function Ep(n,i,o){o=Li(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){hc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){hc(n,i),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Mp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new zv;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=e0.bind(null,n,i,o),i.then(n,n))}function Tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wp(n,i,o,u,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,ur(o,i,1))),o.lanes|=1),n)}var Hv=b.ReactCurrentOwner,Cn=!1;function Sn(n,i,o,u){i.child=n===null?Xh(i,null,o,u):Ms(i,n.child,o,u)}function Ap(n,i,o,u,h){o=o.render;var m=i.ref;return ws(i,h),u=rc(n,i,o,u,m,h),o=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&o&&Hu(i),i.flags|=1,Sn(n,i,u,h),i.child)}function Cp(n,i,o,u,h){if(n===null){var m=o.type;return typeof m=="function"&&!Nc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Rp(n,i,m,u,h)):(n=fl(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&h)){var M=m.memoizedProps;if(o=o.compare,o=o!==null?o:To,o(M,u)&&n.ref===i.ref)return Di(n,i,h)}return i.flags|=1,n=mr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Rp(n,i,o,u,h){if(n!==null){var m=n.memoizedProps;if(To(m,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=m,(n.lanes&h)!==0)n.flags&131072&&(Cn=!0);else return i.lanes=n.lanes,Di(n,i,h)}return pc(n,i,o,u,h)}function bp(n,i,o){var u=i.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(bs,On),On|=o;else{if(!(o&1073741824))return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(bs,On),On|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Dt(bs,On),On|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Dt(bs,On),On|=u;return Sn(n,i,h,o),i.child}function Pp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function pc(n,i,o,u,h){var m=An(o)?Ir:dn.current;return m=xs(i,m),ws(i,h),o=rc(n,i,o,u,m,h),u=sc(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Di(n,i,h)):(Ot&&u&&Hu(i),i.flags|=1,Sn(n,i,o,h),i.child)}function Lp(n,i,o,u,h){if(An(o)){var m=!0;Fa(i)}else m=!1;if(ws(i,h),i.stateNode===null)el(n,i),xp(i,o,u),fc(i,o,u,h),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var F=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Gn(J):(J=An(o)?Ir:dn.current,J=xs(i,J));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||F!==J)&&yp(i,M,u,J),lr=!1;var ge=i.memoizedState;M.state=ge,Xa(i,u,M,h),F=i.memoizedState,I!==u||ge!==F||wn.current||lr?(typeof ve=="function"&&(cc(i,o,ve,u),F=i.memoizedState),(I=lr||vp(i,o,I,u,ge,F,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=F),M.props=u,M.state=F,M.context=J,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,jh(n,i),I=i.memoizedProps,J=i.type===i.elementType?I:Jn(i.type,I),M.props=J,ye=i.pendingProps,ge=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=An(o)?Ir:dn.current,F=xs(i,F));var Ie=o.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||ge!==F)&&yp(i,M,u,F),lr=!1,ge=i.memoizedState,M.state=ge,Xa(i,u,M,h);var He=i.memoizedState;I!==ye||ge!==He||wn.current||lr?(typeof Ie=="function"&&(cc(i,o,Ie,u),He=i.memoizedState),(J=lr||vp(i,o,J,u,ge,He,F)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=F,u=J):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return mc(n,i,o,u,m,h)}function mc(n,i,o,u,h,m){Pp(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return h&&Fh(i,o,!1),Di(n,i,m);u=i.stateNode,Hv.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=Ms(i,n.child,null,m),i.child=Ms(i,null,I,m)):Sn(n,i,I,m),i.memoizedState=u.state,h&&Fh(i,o,!0),i.child}function Dp(n){var i=n.stateNode;i.pendingContext?Uh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Uh(n,i.context,!1),Qu(n,i.containerInfo)}function Ip(n,i,o,u,h){return Es(),Xu(h),i.flags|=256,Sn(n,i,o,u),i.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function _c(n){return{baseLanes:n,cachePool:null,transitions:null}}function Up(n,i,o){var u=i.pendingProps,h=kt.current,m=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Dt(kt,h&1),n===null)return Wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=u.children,n=u.fallback,m?(u=i.mode,m=i.child,M={mode:"hidden",children:M},!(u&1)&&m!==null?(m.childLanes=0,m.pendingProps=M):m=dl(M,u,0,null),n=Gr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=_c(o),i.memoizedState=gc,n):vc(i,M));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return Vv(n,i,M,u,I,h,o);if(m){m=u.fallback,M=i.mode,h=n.child,I=h.sibling;var F={mode:"hidden",children:u.children};return!(M&1)&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=F,i.deletions=null):(u=mr(h,F),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?m=mr(I,m):(m=Gr(m,M,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,M=n.child.memoizedState,M=M===null?_c(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~o,i.memoizedState=gc,u}return m=n.child,n=m.sibling,u=mr(m,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function vc(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,o,u){return u!==null&&Xu(u),Ms(i,n.child,null,o),n=vc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vv(n,i,o,u,h,m,M){if(o)return i.flags&256?(i.flags&=-257,u=dc(Error(t(422))),Ja(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,h=i.mode,u=dl({mode:"visible",children:u.children},h,0,null),m=Gr(m,h,M,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,i.mode&1&&Ms(i,n.child,null,M),i.child.memoizedState=_c(M),i.memoizedState=gc,m);if(!(i.mode&1))return Ja(n,i,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=dc(m,u,void 0),Ja(n,i,M,u)}if(I=(M&n.childLanes)!==0,Cn||I){if(u=rn,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(u.suspendedLanes|M)?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Pi(n,h),ni(u,n,h,-1))}return Uc(),u=dc(Error(t(421))),Ja(n,i,M,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=t0.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Fn=rr(h.nextSibling),Nn=i,Ot=!0,Qn=null,n!==null&&(Hn[Vn++]=Ri,Hn[Vn++]=bi,Hn[Vn++]=Ur,Ri=n.id,bi=n.overflow,Ur=i),i=vc(i,u.children),i.flags|=4096,i)}function Np(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),qu(n.return,i,o)}function xc(n,i,o,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=h)}function Fp(n,i,o){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Sn(n,i,u.children,o),u=kt.current,u&2)u=u&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,o,i);else if(n.tag===19)Np(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Dt(kt,u),!(i.mode&1))i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&$a(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),xc(i,!1,h,o,m);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&$a(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}xc(i,!0,o,null,m);break;case"together":xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Di(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,!(o&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Gv(n,i,o){switch(i.tag){case 3:Dp(i),Es();break;case 5:Kh(i);break;case 1:An(i.type)&&Fa(i);break;case 4:Qu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Dt(Va,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Dt(kt,kt.current&1),i.flags|=128,null):o&i.child.childLanes?Up(n,i,o):(Dt(kt,kt.current&1),n=Di(n,i,o),n!==null?n.sibling:null);Dt(kt,kt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,n.flags&128){if(u)return Fp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Dt(kt,kt.current),u)break;return null;case 22:case 23:return i.lanes=0,bp(n,i,o)}return Di(n,i,o)}var Op,yc,kp,Bp;Op=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},yc=function(){},kp=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Or(hi.current);var m=null;switch(o){case"input":h=O(n,h),u=O(n,u),m=[];break;case"select":h=re({},h,{value:void 0}),u=re({},u,{value:void 0}),m=[];break;case"textarea":h=w(n,h),u=w(n,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ia)}ft(o,u);var M;o=null;for(J in h)if(!u.hasOwnProperty(J)&&h.hasOwnProperty(J)&&h[J]!=null)if(J==="style"){var I=h[J];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?m||(m=[]):(m=m||[]).push(J,null));for(J in u){var F=u[J];if(I=h!=null?h[J]:void 0,u.hasOwnProperty(J)&&F!==I&&(F!=null||I!=null))if(J==="style")if(I){for(M in I)!I.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&I[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(m||(m=[]),m.push(J,o)),o=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,I=I?I.__html:void 0,F!=null&&I!==F&&(m=m||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(m=m||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&Ut("scroll",n),m||I===F||(m=[])):(m=m||[]).push(J,F))}o&&(m=m||[]).push("style",o);var J=m;(i.updateQueue=J)&&(i.flags|=4)}},Bp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Bo(n,i){if(!Ot)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function Wv(n,i,o){var u=i.pendingProps;switch(Vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return An(i.type)&&Na(),pn(i),null;case 3:return u=i.stateNode,As(),Nt(wn),Nt(dn),tc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Qn!==null&&(Lc(Qn),Qn=null))),yc(n,i),pn(i),null;case 5:Ju(i);var h=Or(Uo.current);if(o=i.type,n!==null&&i.stateNode!=null)kp(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Or(hi.current),za(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[di]=i,u[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(h=0;h<Ao.length;h++)Ut(Ao[h],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":vn(u,m),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",u);break;case"textarea":K(u,m),Ut("invalid",u)}ft(o,m),h=null;for(var M in m)if(m.hasOwnProperty(M)){var I=m[M];M==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Da(u.textContent,I,n),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Da(u.textContent,I,n),h=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":At(u),je(u,m,!0);break;case"textarea":At(u),_e(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ia)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(o,{is:u.is}):(n=M.createElement(o),o==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,o),n[di]=i,n[bo]=u,Op(n,i,!1,!1),i.stateNode=n;e:{switch(M=rt(o,u),o){case"dialog":Ut("cancel",n),Ut("close",n),h=u;break;case"iframe":case"object":case"embed":Ut("load",n),h=u;break;case"video":case"audio":for(h=0;h<Ao.length;h++)Ut(Ao[h],n);h=u;break;case"source":Ut("error",n),h=u;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),h=u;break;case"details":Ut("toggle",n),h=u;break;case"input":vn(n,u),h=O(n,u),Ut("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=re({},u,{value:void 0}),Ut("invalid",n);break;case"textarea":K(n,u),h=w(n,u),Ut("invalid",n);break;default:h=u}ft(o,h),I=h;for(m in I)if(I.hasOwnProperty(m)){var F=I[m];m==="style"?tt(n,F):m==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Fe(n,F)):m==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?F!=null&&m==="onScroll"&&Ut("scroll",n):F!=null&&L(n,m,F,M))}switch(o){case"input":At(n),je(n,u,!1);break;case"textarea":At(n),_e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?D(n,!!u.multiple,m,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Or(Uo.current),Or(hi.current),za(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(m=u.nodeValue!==o)&&(n=Nn,n!==null))switch(n.tag){case 3:Da(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return pn(i),null;case 13:if(Nt(kt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&i.mode&1&&!(i.flags&128))Vh(),Es(),i.flags|=98560,m=!1;else if(m=za(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[di]=i}else Es(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else Qn!==null&&(Lc(Qn),Qn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(n===null||kt.current&1?Zt===0&&(Zt=3):Uc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return As(),yc(n,i),n===null&&Co(i.stateNode.containerInfo),pn(i),null;case 10:return Yu(i.type._context),pn(i),null;case 17:return An(i.type)&&Na(),pn(i),null;case 19:if(Nt(kt),m=i.memoizedState,m===null)return pn(i),null;if(u=(i.flags&128)!==0,M=m.rendering,M===null)if(u)Bo(m,!1);else{if(Zt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(M=$a(n),M!==null){for(i.flags|=128,Bo(m,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Dt(kt,kt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Y()>Ps&&(i.flags|=128,u=!0,Bo(m,!1),i.lanes=4194304)}else{if(!u)if(n=$a(M),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Bo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Ot)return pn(i),null}else 2*Y()-m.renderingStartTime>Ps&&o!==1073741824&&(i.flags|=128,u=!0,Bo(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(o=m.last,o!==null?o.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Y(),i.sibling=null,o=kt.current,Dt(kt,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Ic(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?On&1073741824&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Xv(n,i){switch(Vu(i),i.tag){case 1:return An(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),Nt(wn),Nt(dn),tc(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Ju(i),null;case 13:if(Nt(kt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Nt(kt),null;case 4:return As(),null;case 10:return Yu(i.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var tl=!1,mn=!1,$v=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Rs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(n,i,u)}else o.current=null}function Sc(n,i,o){try{o()}catch(u){Gt(n,i,u)}}var zp=!1;function jv(n,i){if(Iu=Sa,n=vh(),wu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var M=0,I=-1,F=-1,J=0,ve=0,ye=n,ge=null;t:for(;;){for(var Ie;ye!==o||h!==0&&ye.nodeType!==3||(I=M+h),ye!==m||u!==0&&ye.nodeType!==3||(F=M+u),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)ge=ye,ye=Ie;for(;;){if(ye===n)break t;if(ge===o&&++J===h&&(I=M),ge===m&&++ve===u&&(F=M),(Ie=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ie}o=I===-1||F===-1?null:{start:I,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uu={focusedElem:n,selectionRange:o},Sa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,Wt=He.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:Jn(i.type,Ge),Wt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=zp,zp=!1,He}function zo(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Sc(i,o,m)}h=h.next}while(h!==u)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Ec(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[di],delete i[bo],delete i[ku],delete i[bv],delete i[Pv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(u!==4&&(n=n.child,n!==null))for(Mc(n,i,o),n=n.sibling;n!==null;)Mc(n,i,o),n=n.sibling}function Tc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,o),n=n.sibling;n!==null;)Tc(n,i,o),n=n.sibling}var ln=null,ei=!1;function cr(n,i,o){for(o=o.child;o!==null;)Wp(n,i,o),o=o.sibling}function Wp(n,i,o){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(et,o)}catch{}switch(o.tag){case 5:mn||Rs(o,i);case 6:var u=ln,h=ei;ln=null,cr(n,i,o),ln=u,ei=h,ln!==null&&(ei?(n=ln,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):ln.removeChild(o.stateNode));break;case 18:ln!==null&&(ei?(n=ln,o=o.stateNode,n.nodeType===8?Ou(n.parentNode,o):n.nodeType===1&&Ou(n,o),vo(n)):Ou(ln,o.stateNode));break;case 4:u=ln,h=ei,ln=o.stateNode.containerInfo,ei=!0,cr(n,i,o),ln=u,ei=h;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,M=m.destroy;m=m.tag,M!==void 0&&(m&2||m&4)&&Sc(o,i,M),h=h.next}while(h!==u)}cr(n,i,o);break;case 1:if(!mn&&(Rs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Gt(o,i,I)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,cr(n,i,o),mn=u):cr(n,i,o);break;default:cr(n,i,o)}}function Xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new $v),i.forEach(function(u){var h=n0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function ti(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var m=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,ei=!1;break e;case 3:ln=I.stateNode.containerInfo,ei=!0;break e;case 4:ln=I.stateNode.containerInfo,ei=!0;break e}I=I.return}if(ln===null)throw Error(t(160));Wp(m,M,h),ln=null,ei=!1;var F=h.alternate;F!==null&&(F.return=null),h.return=null}catch(J){Gt(h,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(i,n),mi(n),u&4){try{zo(3,n,n.return),nl(3,n)}catch(Ge){Gt(n,n.return,Ge)}try{zo(5,n,n.return)}catch(Ge){Gt(n,n.return,Ge)}}break;case 1:ti(i,n),mi(n),u&512&&o!==null&&Rs(o,o.return);break;case 5:if(ti(i,n),mi(n),u&512&&o!==null&&Rs(o,o.return),n.flags&32){var h=n.stateNode;try{ut(h,"")}catch(Ge){Gt(n,n.return,Ge)}}if(u&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,M=o!==null?o.memoizedProps:m,I=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ht(h,m),rt(I,M);var J=rt(I,m);for(M=0;M<F.length;M+=2){var ve=F[M],ye=F[M+1];ve==="style"?tt(h,ye):ve==="dangerouslySetInnerHTML"?Fe(h,ye):ve==="children"?ut(h,ye):L(h,ve,ye,J)}switch(I){case"input":ct(h,m);break;case"textarea":me(h,m);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?D(h,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?D(h,!!m.multiple,m.defaultValue,!0):D(h,!!m.multiple,m.multiple?[]:"",!1))}h[bo]=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 6:if(ti(i,n),mi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ge){Gt(n,n.return,Ge)}}break;case 3:if(ti(i,n),mi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(Ge){Gt(n,n.return,Ge)}break;case 4:ti(i,n),mi(n);break;case 13:ti(i,n),mi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Cc=Y())),u&4&&Xp(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(J=mn)||ve,ti(i,n),mn=J):ti(i,n),mi(n),u&8192){if(J=n.memoizedState!==null,(n.stateNode.isHidden=J)&&!ve&&n.mode&1)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:zo(4,ge,ge.return);break;case 1:Rs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Gt(u,o,Ge)}}break;case 5:Rs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){qp(ye);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):qp(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{h=ye.stateNode,J?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=ye.stateNode,F=ye.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,I.style.display=qe("display",M))}catch(Ge){Gt(n,n.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(Ge){Gt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ti(i,n),mi(n),u&4&&Xp(n);break;case 21:break;default:ti(i,n),mi(n)}}function mi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Vp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ut(h,""),u.flags&=-33);var m=Gp(n);Tc(n,m,h);break;case 3:case 4:var M=u.stateNode.containerInfo,I=Gp(n);Mc(n,I,M);break;default:throw Error(t(161))}}catch(F){Gt(n,n.return,F)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Yv(n,i,o){Oe=n,jp(n)}function jp(n,i,o){for(var u=(n.mode&1)!==0;Oe!==null;){var h=Oe,m=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||tl;if(!M){var I=h.alternate,F=I!==null&&I.memoizedState!==null||mn;I=tl;var J=mn;if(tl=M,(mn=F)&&!J)for(Oe=h;Oe!==null;)M=Oe,F=M.child,M.tag===22&&M.memoizedState!==null?Kp(h):F!==null?(F.return=M,Oe=F):Kp(h);for(;m!==null;)Oe=m,jp(m),m=m.sibling;Oe=h,tl=I,mn=J}Yp(n)}else h.subtreeFlags&8772&&m!==null?(m.return=h,Oe=m):Yp(n)}}function Yp(n){for(;Oe!==null;){var i=Oe;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:mn||nl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&qh(i,m,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}qh(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&vo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Ec(i)}catch(ge){Gt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function qp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Kp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{nl(4,i)}catch(F){Gt(i,o,F)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(F){Gt(i,h,F)}}var m=i.return;try{Ec(i)}catch(F){Gt(i,m,F)}break;case 5:var M=i.return;try{Ec(i)}catch(F){Gt(i,M,F)}}}catch(F){Gt(i,i.return,F)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var qv=Math.ceil,il=b.ReactCurrentDispatcher,wc=b.ReactCurrentOwner,Xn=b.ReactCurrentBatchConfig,St=0,rn=null,$t=null,un=0,On=0,bs=sr(0),Zt=0,Ho=null,Br=0,rl=0,Ac=0,Vo=null,Rn=null,Cc=0,Ps=1/0,Ii=null,sl=!1,Rc=null,fr=null,ol=!1,dr=null,al=0,Go=0,bc=null,ll=-1,ul=0;function En(){return St&6?Y():ll!==-1?ll:ll=Y()}function hr(n){return n.mode&1?St&2&&un!==0?un&-un:Dv.transition!==null?(ul===0&&(ul=bt()),ul):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Qd(n.type)),n):1}function ni(n,i,o,u){if(50<Go)throw Go=0,bc=null,Error(t(185));en(n,o,u),(!(St&2)||n!==rn)&&(n===rn&&(!(St&2)&&(rl|=o),Zt===4&&pr(n,un)),bn(n,u),o===1&&St===0&&!(i.mode&1)&&(Ps=Y()+500,Oa&&ar()))}function bn(n,i){var o=n.callbackNode;yn(n,i);var u=cn(n,n===rn?un:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?Lv(Qp.bind(null,n)):Oh(Qp.bind(null,n)),Cv(function(){!(St&6)&&ar()}),o=null;else{switch(fi(u)){case 1:o=Se;break;case 4:o=Re;break;case 16:o=De;break;case 536870912:o=nt;break;default:o=De}o=om(o,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Zp(n,i){if(ll=-1,ul=0,St&6)throw Error(t(327));var o=n.callbackNode;if(Ls()&&n.callbackNode!==o)return null;var u=cn(n,n===rn?un:0);if(u===0)return null;if(u&30||u&n.expiredLanes||i)i=cl(n,u);else{i=u;var h=St;St|=2;var m=em();(rn!==n||un!==i)&&(Ii=null,Ps=Y()+500,Hr(n,i));do try{Qv();break}catch(I){Jp(n,I)}while(!0);ju(),il.current=m,St=h,$t!==null?i=0:(rn=null,un=0,i=Zt)}if(i!==0){if(i===2&&(h=wi(n),h!==0&&(u=h,i=Pc(n,h))),i===1)throw o=Ho,Hr(n,0),pr(n,u),bn(n,Y()),o;if(i===6)pr(n,u);else{if(h=n.current.alternate,!(u&30)&&!Kv(h)&&(i=cl(n,u),i===2&&(m=wi(n),m!==0&&(u=m,i=Pc(n,m))),i===1))throw o=Ho,Hr(n,0),pr(n,u),bn(n,Y()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Rn,Ii);break;case 3:if(pr(n,u),(u&130023424)===u&&(i=Cc+500-Y(),10<i)){if(cn(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Fu(Vr.bind(null,n,Rn,Ii),i);break}Vr(n,Rn,Ii);break;case 4:if(pr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var M=31-ot(u);m=1<<M,M=i[M],M>h&&(h=M),u&=~m}if(u=h,u=Y()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*qv(u/1960))-u,10<u){n.timeoutHandle=Fu(Vr.bind(null,n,Rn,Ii),u);break}Vr(n,Rn,Ii);break;case 5:Vr(n,Rn,Ii);break;default:throw Error(t(329))}}}return bn(n,Y()),n.callbackNode===o?Zp.bind(null,n):null}function Pc(n,i){var o=Vo;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Rn,Rn=o,i!==null&&Lc(i)),n}function Lc(n){Rn===null?Rn=n:Rn.push.apply(Rn,n)}function Kv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],m=h.getSnapshot;h=h.value;try{if(!Zn(m(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~Ac,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ot(i),u=1<<o;n[o]=-1,i&=~u}}function Qp(n){if(St&6)throw Error(t(327));Ls();var i=cn(n,0);if(!(i&1))return bn(n,Y()),null;var o=cl(n,i);if(n.tag!==0&&o===2){var u=wi(n);u!==0&&(i=u,o=Pc(n,u))}if(o===1)throw o=Ho,Hr(n,0),pr(n,i),bn(n,Y()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Rn,Ii),bn(n,Y()),null}function Dc(n,i){var o=St;St|=1;try{return n(i)}finally{St=o,St===0&&(Ps=Y()+500,Oa&&ar())}}function zr(n){dr!==null&&dr.tag===0&&!(St&6)&&Ls();var i=St;St|=1;var o=Xn.transition,u=yt;try{if(Xn.transition=null,yt=1,n)return n()}finally{yt=u,Xn.transition=o,St=i,!(St&6)&&ar()}}function Ic(){On=bs.current,Nt(bs)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Av(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Na();break;case 3:As(),Nt(wn),Nt(dn),tc();break;case 5:Ju(u);break;case 4:As();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:Yu(u.type._context);break;case 22:case 23:Ic()}o=o.return}if(rn=n,$t=n=mr(n.current,null),un=On=i,Zt=0,Ho=null,Ac=rl=Br=0,Rn=Vo=null,Fr!==null){for(i=0;i<Fr.length;i++)if(o=Fr[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,m=o.pending;if(m!==null){var M=m.next;m.next=h,u.next=M}o.pending=u}Fr=null}return n}function Jp(n,i){do{var o=$t;try{if(ju(),ja.current=Za,Ya){for(var u=Bt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Ya=!1}if(kr=0,nn=Kt=Bt=null,No=!1,Fo=0,wc.current=null,o===null||o.return===null){Zt=1,Ho=i,$t=null;break}e:{var m=n,M=o.return,I=o,F=i;if(i=un,I.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,ve=I,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Tp(M);if(Ie!==null){Ie.flags&=-257,wp(Ie,M,I,m,i),Ie.mode&1&&Mp(m,J,i),i=Ie,F=J;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(F),i.updateQueue=Ge}else He.add(F);break e}else{if(!(i&1)){Mp(m,J,i),Uc();break e}F=Error(t(426))}}else if(Ot&&I.mode&1){var Wt=Tp(M);if(Wt!==null){!(Wt.flags&65536)&&(Wt.flags|=256),wp(Wt,M,I,m,i),Xu(Cs(F,I));break e}}m=F=Cs(F,I),Zt!==4&&(Zt=2),Vo===null?Vo=[m]:Vo.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=Sp(m,F,i);Yh(m,j);break e;case 1:I=F;var H=m.type,q=m.stateNode;if(!(m.flags&128)&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(fr===null||!fr.has(q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Ep(m,I,i);Yh(m,Te);break e}}m=m.return}while(m!==null)}nm(o)}catch($e){i=$e,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function em(){var n=il.current;return il.current=Za,n===null?Za:n}function Uc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),rn===null||!(Br&268435455)&&!(rl&268435455)||pr(rn,un)}function cl(n,i){var o=St;St|=2;var u=em();(rn!==n||un!==i)&&(Ii=null,Hr(n,i));do try{Zv();break}catch(h){Jp(n,h)}while(!0);if(ju(),St=o,il.current=u,$t!==null)throw Error(t(261));return rn=null,un=0,Zt}function Zv(){for(;$t!==null;)tm($t)}function Qv(){for(;$t!==null&&!W();)tm($t)}function tm(n){var i=sm(n.alternate,n,On);n.memoizedProps=n.pendingProps,i===null?nm(n):$t=i,wc.current=null}function nm(n){var i=n;do{var o=i.alternate;if(n=i.return,i.flags&32768){if(o=Xv(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,$t=null;return}}else if(o=Wv(o,i,On),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Zt===0&&(Zt=5)}function Vr(n,i,o){var u=yt,h=Xn.transition;try{Xn.transition=null,yt=1,Jv(n,i,o,u)}finally{Xn.transition=h,yt=u}return null}function Jv(n,i,o,u){do Ls();while(dr!==null);if(St&6)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(an(n,m),n===rn&&($t=rn=null,un=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ol||(ol=!0,om(De,function(){return Ls(),null})),m=(o.flags&15990)!==0,o.subtreeFlags&15990||m){m=Xn.transition,Xn.transition=null;var M=yt;yt=1;var I=St;St|=4,wc.current=null,jv(n,o),$p(o,n),xv(Uu),Sa=!!Iu,Uu=Iu=null,n.current=o,Yv(o),Q(),St=I,yt=M,Xn.transition=m}else n.current=o;if(ol&&(ol=!1,dr=n,al=h),m=n.pendingLanes,m===0&&(fr=null),gt(o.stateNode),bn(n,Y()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(sl)throw sl=!1,n=Rc,Rc=null,n;return al&1&&n.tag!==0&&Ls(),m=n.pendingLanes,m&1?n===bc?Go++:(Go=0,bc=n):Go=0,ar(),null}function Ls(){if(dr!==null){var n=fi(al),i=Xn.transition,o=yt;try{if(Xn.transition=null,yt=16>n?16:n,dr===null)var u=!1;else{if(n=dr,dr=null,al=0,St&6)throw Error(t(331));var h=St;for(St|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if(Oe.flags&16){var I=m.deletions;if(I!==null){for(var F=0;F<I.length;F++){var J=I[F];for(Oe=J;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:zo(8,ve,m)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if(Hp(ve),ve===J){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var He=m.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var Wt=Ge.sibling;Ge.sibling=null,Ge=Wt}while(Ge!==null)}}Oe=m}}if(m.subtreeFlags&2064&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:zo(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,Oe=j;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){M=Oe;var q=M.child;if(M.subtreeFlags&2064&&q!==null)q.return=M,Oe=q;else e:for(M=H;Oe!==null;){if(I=Oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:nl(9,I)}}catch($e){Gt(I,I.return,$e)}if(I===M){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(St=h,ar(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{yt=o,Xn.transition=i}}return!1}function im(n,i,o){i=Cs(o,i),i=Sp(n,i,1),n=ur(n,i,1),i=En(),n!==null&&(en(n,1,i),bn(n,i))}function Gt(n,i,o){if(n.tag===3)im(n,n,o);else for(;i!==null;){if(i.tag===3){im(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=Cs(o,n),n=Ep(i,n,1),i=ur(i,n,1),n=En(),i!==null&&(en(i,1,n),bn(i,n));break}}i=i.return}}function e0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(un&o)===o&&(Zt===4||Zt===3&&(un&130023424)===un&&500>Y()-Cc?Hr(n,0):Ac|=o),bn(n,i)}function rm(n,i){i===0&&(n.mode&1?(i=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):i=1);var o=En();n=Pi(n,i),n!==null&&(en(n,i,o),bn(n,o))}function t0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),rm(n,o)}function n0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),rm(n,o)}var sm;sm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||wn.current)Cn=!0;else{if(!(n.lanes&o)&&!(i.flags&128))return Cn=!1,Gv(n,i,o);Cn=!!(n.flags&131072)}else Cn=!1,Ot&&i.flags&1048576&&kh(i,Ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;el(n,i),n=i.pendingProps;var h=xs(i,dn.current);ws(i,o),h=rc(null,i,u,n,h,o);var m=sc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(u)?(m=!0,Fa(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Zu(i),h.updater=Qa,i.stateNode=h,h._reactInternals=i,fc(i,u,n,o),i=mc(null,i,u,!0,m,o)):(i.tag=0,Ot&&m&&Hu(i),Sn(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(el(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=r0(u),n=Jn(u,n),h){case 0:i=pc(null,i,u,n,o);break e;case 1:i=Lp(null,i,u,n,o);break e;case 11:i=Ap(null,i,u,n,o);break e;case 14:i=Cp(null,i,u,Jn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),pc(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),Lp(n,i,u,h,o);case 3:e:{if(Dp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,h=m.element,jh(n,i),Xa(i,u,null,o);var M=i.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Cs(Error(t(423)),i),i=Ip(n,i,u,o,h);break e}else if(u!==h){h=Cs(Error(t(424)),i),i=Ip(n,i,u,o,h);break e}else for(Fn=rr(i.stateNode.containerInfo.firstChild),Nn=i,Ot=!0,Qn=null,o=Xh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),u===h){i=Di(n,i,o);break e}Sn(n,i,u,o)}i=i.child}return i;case 5:return Kh(i),n===null&&Wu(i),u=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,M=h.children,Nu(u,h)?M=null:m!==null&&Nu(u,m)&&(i.flags|=32),Pp(n,i),Sn(n,i,M,o),i.child;case 6:return n===null&&Wu(i),null;case 13:return Up(n,i,o);case 4:return Qu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ms(i,null,u,o):Sn(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),Ap(n,i,u,h,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,m=i.memoizedProps,M=h.value,Dt(Va,u._currentValue),u._currentValue=M,m!==null)if(Zn(m.value,M)){if(m.children===h.children&&!wn.current){i=Di(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){M=m.child;for(var F=I.firstContext;F!==null;){if(F.context===u){if(m.tag===1){F=Li(-1,o&-o),F.tag=2;var J=m.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?F.next=F:(F.next=ve.next,ve.next=F),J.pending=F}}m.lanes|=o,F=m.alternate,F!==null&&(F.lanes|=o),qu(m.return,o,i),I.lanes|=o;break}F=F.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),qu(M,o,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Sn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,ws(i,o),h=Gn(h),u=u(h),i.flags|=1,Sn(n,i,u,o),i.child;case 14:return u=i.type,h=Jn(u,i.pendingProps),h=Jn(u.type,h),Cp(n,i,u,h,o);case 15:return Rp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:Jn(u,h),el(n,i),i.tag=1,An(u)?(n=!0,Fa(i)):n=!1,ws(i,o),xp(i,u,h),fc(i,u,h,o),mc(null,i,u,!0,n,o);case 19:return Fp(n,i,o);case 22:return bp(n,i,o)}throw Error(t(156,i.tag))};function om(n,i){return va(n,i)}function i0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,i,o,u){return new i0(n,i,o,u)}function Nc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function r0(n){if(typeof n=="function")return Nc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===pe)return 14}return 2}function mr(n,i){var o=n.alternate;return o===null?(o=$n(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,i,o,u,h,m){var M=2;if(u=n,typeof n=="function")Nc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return Gr(o.children,h,m,i);case X:M=8,h|=8;break;case P:return n=$n(12,o,i,h|2),n.elementType=P,n.lanes=m,n;case ee:return n=$n(13,o,i,h),n.elementType=ee,n.lanes=m,n;case fe:return n=$n(19,o,i,h),n.elementType=fe,n.lanes=m,n;case le:return dl(o,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:M=10;break e;case B:M=9;break e;case oe:M=11;break e;case pe:M=14;break e;case se:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=$n(M,o,i,h),i.elementType=n,i.type=u,i.lanes=m,i}function Gr(n,i,o,u){return n=$n(7,n,u,i),n.lanes=o,n}function dl(n,i,o,u){return n=$n(22,n,u,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function Fc(n,i,o){return n=$n(6,n,null,i),n.lanes=o,n}function Oc(n,i,o){return i=$n(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function s0(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function kc(n,i,o,u,h,m,M,I,F){return n=new s0(n,i,o,I,F),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$n(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(m),n}function o0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function am(n){if(!n)return or;n=n._reactInternals;e:{if(ci(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(An(o))return Nh(n,o,i)}return i}function lm(n,i,o,u,h,m,M,I,F){return n=kc(o,u,!0,n,h,m,M,I,F),n.context=am(null),o=n.current,u=En(),h=hr(o),m=Li(u,h),m.callback=i??null,ur(o,m,h),n.current.lanes=h,en(n,h,u),bn(n,u),n}function hl(n,i,o,u){var h=i.current,m=En(),M=hr(h);return o=am(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(m,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ur(h,i,M),n!==null&&(ni(n,h,M,m),Wa(n,h,M)),M}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Bc(n,i){um(n,i),(n=n.alternate)&&um(n,i)}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zc(n){this._internalRoot=n}ml.prototype.render=zc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){hl(null,n,null,null)}),i[Ai]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=jd();n={blockedOn:null,target:n,priority:i};for(var o=0;o<tr.length&&i!==0&&i<tr[o].priority;o++);tr.splice(o,0,n),o===0&&Kd(n)}};function Hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function a0(n,i,o,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var J=pl(M);m.call(J)}}var M=lm(i,u,n,0,null,!1,!1,"",fm);return n._reactRootContainer=M,n[Ai]=M.current,Co(n.nodeType===8?n.parentNode:n),zr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var J=pl(F);I.call(J)}}var F=kc(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=F,n[Ai]=F.current,Co(n.nodeType===8?n.parentNode:n),zr(function(){hl(i,F,o,u)}),F}function _l(n,i,o,u,h){var m=o._reactRootContainer;if(m){var M=m;if(typeof h=="function"){var I=h;h=function(){var F=pl(M);I.call(F)}}hl(i,M,n,h)}else M=a0(o,i,n,h,u);return pl(M)}Xd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(tn(i,o|1),bn(i,Y()),!(St&6)&&(Ps=Y()+500,ar()))}break;case 13:zr(function(){var u=Pi(n,1);if(u!==null){var h=En();ni(u,n,1,h)}}),Bc(n,1)}},du=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var o=En();ni(i,n,134217728,o)}Bc(n,134217728)}},$d=function(n){if(n.tag===13){var i=hr(n),o=Pi(n,i);if(o!==null){var u=En();ni(o,n,i,u)}Bc(n,i)}},jd=function(){return yt},Yd=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},Ce=function(n,i,o){switch(i){case"input":if(ct(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Ua(u);if(!h)throw Error(t(90));pt(u),ct(u,h)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},It=Dc,qt=zr;var l0={usingClientEntryPoint:!1,Events:[Po,_s,Ua,Pe,st,Dc]},Wo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u0={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ga(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{et=vl.inject(u0),Ve=vl}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0,Pn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(i))throw Error(t(200));return o0(n,i,null,o)},Pn.createRoot=function(n,i){if(!Hc(n))throw Error(t(299));var o=!1,u="",h=cm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=kc(n,1,!1,null,null,o,!1,u,h),n[Ai]=i.current,Co(n.nodeType===8?n.parentNode:n),new zc(i)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ga(i),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return zr(n)},Pn.hydrate=function(n,i,o){if(!gl(i))throw Error(t(200));return _l(null,n,i,!0,o)},Pn.hydrateRoot=function(n,i,o){if(!Hc(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,m="",M=cm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=lm(i,null,n,1,o??null,h,!1,m,M),n[Ai]=i.current,Co(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new ml(i)},Pn.render=function(n,i,o){if(!gl(i))throw Error(t(200));return _l(null,n,i,!1,o)},Pn.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Pn.unstable_batchedUpdates=Dc,Pn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!gl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,o,!1,u)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var xm;function x0(){if(xm)return Wc.exports;xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wc.exports=v0(),Wc.exports}var ym;function y0(){if(ym)return xl;ym=1;var r=x0();return xl.createRoot=r.createRoot,xl.hydrateRoot=r.hydrateRoot,xl}var S0=y0(),$o={},Sm;function E0(){if(Sm)return $o;Sm=1,Object.defineProperty($o,"__esModule",{value:!0}),$o.parse=c,$o.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,S){const E=new l,T=v.length;if(T<2)return E;const y=(S==null?void 0:S.decode)||_;let g=0;do{const R=v.indexOf("=",g);if(R===-1)break;const L=v.indexOf(";",g),b=L===-1?T:L;if(R>b){g=v.lastIndexOf(";",R-1)+1;continue}const V=f(v,g,R),k=d(v,R,V),N=v.slice(V,k);if(E[N]===void 0){let X=f(v,R+1,b),P=d(v,b,X);const C=y(v.slice(X,P));E[N]=C}g=b+1}while(g<T);return E}function f(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function d(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function p(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!r.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=T(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let g=v+"="+y;if(!E)return g;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);g+="; Max-Age="+E.maxAge}if(E.domain){if(!t.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);g+="; Domain="+E.domain}if(E.path){if(!s.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);g+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);g+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(g+="; HttpOnly"),E.secure&&(g+="; Secure"),E.partitioned&&(g+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return g}function _(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return a.call(v)==="[object Date]"}return $o}E0();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Em="popstate";function M0(r={}){function e(s,a){let{pathname:l,search:c,hash:f}=s.location;return Uf("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:na(a)}return w0(e,t,null,r)}function zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Si(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function T0(){return Math.random().toString(36).substring(2,10)}function Mm(r,e){return{usr:r.state,key:r.key,idx:e}}function Uf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?lo(e):e,state:t,key:e&&e.key||s||T0()}}function na({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function lo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function w0(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,f="POP",d=null,p=_();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function _(){return(c.state||{idx:null}).idx}function x(){f="POP";let y=_(),g=y==null?null:y-p;p=y,d&&d({action:f,location:T.location,delta:g})}function v(y,g){f="PUSH";let R=Uf(T.location,y,g);p=_()+1;let L=Mm(R,p),b=T.createHref(R);try{c.pushState(L,"",b)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;a.location.assign(b)}l&&d&&d({action:f,location:T.location,delta:1})}function S(y,g){f="REPLACE";let R=Uf(T.location,y,g);p=_();let L=Mm(R,p),b=T.createHref(R);c.replaceState(L,"",b),l&&d&&d({action:f,location:T.location,delta:0})}function E(y){let g=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof y=="string"?y:na(y);return R=R.replace(/ $/,"%20"),zt(g,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,g)}let T={get action(){return f},get location(){return r(a,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Em,x),d=y,()=>{a.removeEventListener(Em,x),d=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let g=E(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:S,go(y){return c.go(y)}};return T}function Dg(r,e,t="/"){return A0(r,e,t,!1)}function A0(r,e,t,s){let a=typeof e=="string"?lo(e):e,l=Cr(a.pathname||"/",t);if(l==null)return null;let c=Ig(r);C0(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let p=k0(l);f=F0(c[d],p,s)}return f}function Ig(r,e=[],t=[],s=""){let a=(l,c,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(zt(d.relativePath.startsWith(s),`Absolute route path "${d.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(s.length));let p=Wi([s,d.relativePath]),_=t.concat(d);l.children&&l.children.length>0&&(zt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Ig(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:U0(p,l.index),routesMeta:_})};return r.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))a(l,c);else for(let d of Ug(l.path))a(l,c,d)}),e}function Ug(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=Ug(s.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),a&&f.push(...c),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function C0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:N0(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var R0=/^:[\w-]+$/,b0=3,P0=2,L0=1,D0=10,I0=-2,Tm=r=>r==="*";function U0(r,e){let t=r.split("/"),s=t.length;return t.some(Tm)&&(s+=I0),e&&(s+=P0),t.filter(a=>!Tm(a)).reduce((a,l)=>a+(R0.test(l)?b0:l===""?L0:D0),s)}function N0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function F0(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",c=[];for(let f=0;f<s.length;++f){let d=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=eu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},_),v=d.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=eu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},_)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Wi([l,x.pathname]),pathnameBase:V0(Wi([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Wi([l,x.pathnameBase]))}return c}function eu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=O0(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:x},v)=>{if(_==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return x&&!S?p[_]=void 0:p[_]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function O0(r,e=!1,t=!0){Si(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d)=>(s.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function k0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Cr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function B0(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?lo(r):r;return{pathname:t?t.startsWith("/")?t:z0(t,e):e,search:G0(s),hash:W0(a)}}function z0(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function jc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function H0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ng(r){let e=H0(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Fg(r,e,t,s=!1){let a;typeof r=="string"?a=lo(r):(a={...r},zt(!a.pathname||!a.pathname.includes("?"),jc("?","pathname","search",a)),zt(!a.pathname||!a.pathname.includes("#"),jc("#","pathname","hash",a)),zt(!a.search||!a.search.includes("#"),jc("#","search","hash",a)));let l=r===""||a.pathname==="",c=l?"/":a.pathname,f;if(c==null)f=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;a.pathname=v.join("/")}f=x>=0?e[x]:"/"}let d=B0(a,f),p=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||_)&&(d.pathname+="/"),d}var Wi=r=>r.join("/").replace(/\/\/+/g,"/"),V0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),G0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,W0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function X0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Og=["POST","PUT","PATCH","DELETE"];new Set(Og);var $0=["GET",...Og];new Set($0);var uo=ce.createContext(null);uo.displayName="DataRouter";var su=ce.createContext(null);su.displayName="DataRouterState";var kg=ce.createContext({isTransitioning:!1});kg.displayName="ViewTransition";var j0=ce.createContext(new Map);j0.displayName="Fetchers";var Y0=ce.createContext(null);Y0.displayName="Await";var Ei=ce.createContext(null);Ei.displayName="Navigation";var sa=ce.createContext(null);sa.displayName="Location";var Yi=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Rd=ce.createContext(null);Rd.displayName="RouteError";function q0(r,{relative:e}={}){zt(oa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ce.useContext(Ei),{hash:a,pathname:l,search:c}=aa(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Wi([t,l])),s.createHref({pathname:f,search:c,hash:a})}function oa(){return ce.useContext(sa)!=null}function os(){return zt(oa(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(sa).location}var Bg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zg(r){ce.useContext(Ei).static||ce.useLayoutEffect(r)}function K0(){let{isDataRoute:r}=ce.useContext(Yi);return r?ux():Z0()}function Z0(){zt(oa(),"useNavigate() may be used only in the context of a <Router> component.");let r=ce.useContext(uo),{basename:e,navigator:t}=ce.useContext(Ei),{matches:s}=ce.useContext(Yi),{pathname:a}=os(),l=JSON.stringify(Ng(s)),c=ce.useRef(!1);return zg(()=>{c.current=!0}),ce.useCallback((d,p={})=>{if(Si(c.current,Bg),!c.current)return;if(typeof d=="number"){t.go(d);return}let _=Fg(d,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Wi([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,l,a,r])}ce.createContext(null);function aa(r,{relative:e}={}){let{matches:t}=ce.useContext(Yi),{pathname:s}=os(),a=JSON.stringify(Ng(t));return ce.useMemo(()=>Fg(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function Q0(r,e){return Hg(r,e)}function Hg(r,e,t,s){var g;zt(oa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ce.useContext(Ei),{matches:l}=ce.useContext(Yi),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",_=c&&c.route;{let R=_&&_.path||"";Vg(d,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=os(),v;if(e){let R=typeof e=="string"?lo(e):e;zt(p==="/"||((g=R.pathname)==null?void 0:g.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),v=R}else v=x;let S=v.pathname||"/",E=S;if(p!=="/"){let R=p.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(R.length).join("/")}let T=Dg(r,{pathname:E});Si(_||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Si(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=ix(T&&T.map(R=>Object.assign({},R,{params:Object.assign({},f,R.params),pathname:Wi([p,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:Wi([p,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),l,t,s);return e&&y?ce.createElement(sa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function J0(){let r=lx(),e=X0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:l},"ErrorBoundary")," or"," ",ce.createElement("code",{style:l},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),t?ce.createElement("pre",{style:a},t):null,c)}var ex=ce.createElement(J0,null),tx=class extends ce.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?ce.createElement(Yi.Provider,{value:this.props.routeContext},ce.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nx({routeContext:r,match:e,children:t}){let s=ce.useContext(uo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ce.createElement(Yi.Provider,{value:r},t)}function ix(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);zt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,f=-1;if(t)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:_,errors:x}=t,v=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){c=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((d,p,_)=>{let x,v=!1,S=null,E=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||ex,c&&(f<0&&_===0?(Vg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):f===_&&(v=!0,E=p.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,_+1)),y=()=>{let g;return x?g=S:v?g=E:p.route.Component?g=ce.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,ce.createElement(nx,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:t!=null},children:g})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?ce.createElement(tx,{location:t.location,revalidation:t.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}function bd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(r){let e=ce.useContext(uo);return zt(e,bd(r)),e}function sx(r){let e=ce.useContext(su);return zt(e,bd(r)),e}function ox(r){let e=ce.useContext(Yi);return zt(e,bd(r)),e}function Pd(r){let e=ox(r),t=e.matches[e.matches.length-1];return zt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function ax(){return Pd("useRouteId")}function lx(){var s;let r=ce.useContext(Rd),e=sx("useRouteError"),t=Pd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function ux(){let{router:r}=rx("useNavigate"),e=Pd("useNavigate"),t=ce.useRef(!1);return zg(()=>{t.current=!0}),ce.useCallback(async(a,l={})=>{Si(t.current,Bg),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var wm={};function Vg(r,e,t){!e&&!wm[r]&&(wm[r]=!0,Si(!1,t))}ce.memo(cx);function cx({routes:r,future:e,state:t}){return Hg(r,void 0,t,e)}function js(r){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){zt(!oa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=ce.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=lo(t));let{pathname:d="/",search:p="",hash:_="",state:x=null,key:v="default"}=t,S=ce.useMemo(()=>{let E=Cr(d,c);return E==null?null:{location:{pathname:E,search:p,hash:_,state:x,key:v},navigationType:s}},[c,d,p,_,x,v,s]);return Si(S!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ce.createElement(Ei.Provider,{value:f},ce.createElement(sa.Provider,{children:e,value:S}))}function dx({children:r,location:e}){return Q0(Nf(r),e)}function Nf(r,e=[]){let t=[];return ce.Children.forEach(r,(s,a)=>{if(!ce.isValidElement(s))return;let l=[...e,a];if(s.type===ce.Fragment){t.push.apply(t,Nf(s.props.children,l));return}zt(s.type===js,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Nf(s.props.children,l)),t.push(c)}),t}var Wl="get",Xl="application/x-www-form-urlencoded";function ou(r){return r!=null&&typeof r.tagName=="string"}function hx(r){return ou(r)&&r.tagName.toLowerCase()==="button"}function px(r){return ou(r)&&r.tagName.toLowerCase()==="form"}function mx(r){return ou(r)&&r.tagName.toLowerCase()==="input"}function gx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function _x(r,e){return r.button===0&&(!e||e==="_self")&&!gx(r)}var yl=null;function vx(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yc(r){return r!=null&&!xx.has(r)?(Si(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xl}"`),null):r}function yx(r,e){let t,s,a,l,c;if(px(r)){let f=r.getAttribute("action");s=f?Cr(f,e):null,t=r.getAttribute("method")||Wl,a=Yc(r.getAttribute("enctype"))||Xl,l=new FormData(r)}else if(hx(r)||mx(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(s=d?Cr(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Wl,a=Yc(r.getAttribute("formenctype"))||Yc(f.getAttribute("enctype"))||Xl,l=new FormData(f,r),!vx()){let{name:p,type:_,value:x}=r;if(_==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,x)}}else{if(ou(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wl,s=null,a=Xl,c=r}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Ld(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Sx(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ex(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Mx(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await Sx(l,t);return c.links?c.links():[]}return[]}));return Cx(s.flat(1).filter(Ex).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Am(r,e,t,s,a,l){let c=(d,p)=>t[p]?d.route.id!==t[p].route.id:!0,f=(d,p)=>{var _;return t[p].pathname!==d.pathname||((_=t[p].route.path)==null?void 0:_.endsWith("*"))&&t[p].params["*"]!==d.params["*"]};return l==="assets"?e.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?e.filter((d,p)=>{var x;let _=s.routes[d.route.id];if(!_||!_.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Tx(r,e){return wx(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function wx(r){return[...new Set(r)]}function Ax(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Cx(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(Ax(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function Rx(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function bx(){let r=ce.useContext(uo);return Ld(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Px(){let r=ce.useContext(su);return Ld(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Dd=ce.createContext(void 0);Dd.displayName="FrameworkContext";function Gg(){let r=ce.useContext(Dd);return Ld(r,"You must render this element inside a <HydratedRouter> element"),r}function Lx(r,e){let t=ce.useContext(Dd),[s,a]=ce.useState(!1),[l,c]=ce.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:_,onTouchStart:x}=e,v=ce.useRef(null);ce.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let T=g=>{g.forEach(R=>{c(R.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),ce.useEffect(()=>{if(s){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[s]);let S=()=>{a(!0)},E=()=>{a(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:jo(f,S),onBlur:jo(d,E),onMouseEnter:jo(p,S),onMouseLeave:jo(_,E),onTouchStart:jo(x,S)}]:[!1,v,{}]}function jo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Dx({page:r,...e}){let{router:t}=bx(),s=ce.useMemo(()=>Dg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?ce.createElement(Ux,{page:r,matches:s,...e}):null}function Ix(r){let{manifest:e,routeModules:t}=Gg(),[s,a]=ce.useState([]);return ce.useEffect(()=>{let l=!1;return Mx(r,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[r,e,t]),s}function Ux({page:r,matches:e,...t}){let s=os(),{manifest:a,routeModules:l}=Gg(),{loaderData:c,matches:f}=Px(),d=ce.useMemo(()=>Am(r,e,f,a,s,"data"),[r,e,f,a,s]),p=ce.useMemo(()=>Am(r,e,f,a,s,"assets"),[r,e,f,a,s]),_=ce.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let S=new Set,E=!1;if(e.forEach(y=>{var R;let g=a.routes[y.route.id];!g||!g.hasLoader||(!d.some(L=>L.route.id===y.route.id)&&y.route.id in c&&((R=l[y.route.id])!=null&&R.shouldRevalidate)||g.hasClientLoader?E=!0:S.add(y.route.id))}),S.size===0)return[];let T=Rx(r);return E&&S.size>0&&T.searchParams.set("_routes",e.filter(y=>S.has(y.route.id)).map(y=>y.route.id).join(",")),[T.pathname+T.search]},[c,s,a,d,e,r,l]),x=ce.useMemo(()=>Tx(p,a),[p,a]),v=Ix(p);return ce.createElement(ce.Fragment,null,_.map(S=>ce.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),x.map(S=>ce.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),v.map(({key:S,link:E})=>ce.createElement("link",{key:S,...E})))}function Nx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wg&&(window.__reactRouterVersion="7.1.1")}catch{}function Fx({basename:r,children:e,window:t}){let s=ce.useRef();s.current==null&&(s.current=M0({window:t,v5Compat:!0}));let a=s.current,[l,c]=ce.useState({action:a.action,location:a.location}),f=ce.useCallback(d=>{ce.startTransition(()=>c(d))},[c]);return ce.useLayoutEffect(()=>a.listen(f),[a,f]),ce.createElement(fx,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var Xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$g=ce.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:f,target:d,to:p,preventScrollReset:_,viewTransition:x,...v},S){let{basename:E}=ce.useContext(Ei),T=typeof p=="string"&&Xg.test(p),y,g=!1;if(typeof p=="string"&&T&&(y=p,Wg))try{let P=new URL(window.location.href),C=p.startsWith("//")?new URL(P.protocol+p):new URL(p),B=Cr(C.pathname,E);C.origin===P.origin&&B!=null?p=B+C.search+C.hash:g=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=q0(p,{relative:a}),[L,b,V]=Lx(s,v),k=Bx(p,{replace:c,state:f,target:d,preventScrollReset:_,relative:a,viewTransition:x});function N(P){e&&e(P),P.defaultPrevented||k(P)}let X=ce.createElement("a",{...v,...V,href:y||R,onClick:g||l?e:N,ref:Nx(S,b),target:d,"data-discover":!T&&t==="render"?"true":void 0});return L&&!T?ce.createElement(ce.Fragment,null,X,ce.createElement(Dx,{page:R})):X});$g.displayName="Link";var $l=ce.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:f,children:d,...p},_){let x=aa(c,{relative:p.relative}),v=os(),S=ce.useContext(su),{navigator:E,basename:T}=ce.useContext(Ei),y=S!=null&&Wx(x)&&f===!0,g=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,R=v.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(R=R.toLowerCase(),L=L?L.toLowerCase():null,g=g.toLowerCase()),L&&T&&(L=Cr(L,T)||L);const b=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let V=R===g||!a&&R.startsWith(g)&&R.charAt(b)==="/",k=L!=null&&(L===g||!a&&L.startsWith(g)&&L.charAt(g.length)==="/"),N={isActive:V,isPending:k,isTransitioning:y},X=V?e:void 0,P;typeof s=="function"?P=s(N):P=[s,V?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(N):l;return ce.createElement($g,{...p,"aria-current":X,className:P,ref:_,style:C,to:c,viewTransition:f},typeof d=="function"?d(N):d)});$l.displayName="NavLink";var Ox=ce.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Wl,action:f,onSubmit:d,relative:p,preventScrollReset:_,viewTransition:x,...v},S)=>{let E=Vx(),T=Gx(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",g=typeof f=="string"&&Xg.test(f),R=L=>{if(d&&d(L),L.defaultPrevented)return;L.preventDefault();let b=L.nativeEvent.submitter,V=(b==null?void 0:b.getAttribute("formmethod"))||c;E(b||L.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:a,state:l,relative:p,preventScrollReset:_,viewTransition:x})};return ce.createElement("form",{ref:S,method:y,action:T,onSubmit:s?d:R,...v,"data-discover":!g&&r==="render"?"true":void 0})});Ox.displayName="Form";function kx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(r){let e=ce.useContext(uo);return zt(e,kx(r)),e}function Bx(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let f=K0(),d=os(),p=aa(r,{relative:l});return ce.useCallback(_=>{if(_x(_,e)){_.preventDefault();let x=t!==void 0?t:na(d)===na(p);f(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[d,f,p,t,s,e,r,a,l,c])}var zx=0,Hx=()=>`__${String(++zx)}__`;function Vx(){let{router:r}=jg("useSubmit"),{basename:e}=ce.useContext(Ei),t=ax();return ce.useCallback(async(s,a={})=>{let{action:l,method:c,encType:f,formData:d,body:p}=yx(s,e);if(a.navigate===!1){let _=a.fetcherKey||Hx();await r.fetch(_,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||c,formEncType:a.encType||f,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:d,body:p,formMethod:a.method||c,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function Gx(r,{relative:e}={}){let{basename:t}=ce.useContext(Ei),s=ce.useContext(Yi);zt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...aa(r||".",{relative:e})},c=os();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(_=>_==="")){f.delete("index"),d.filter(x=>x).forEach(x=>f.append("index",x));let _=f.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Wi([t,l.pathname])),na(l)}function Wx(r,e={}){let t=ce.useContext(kg);zt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=jg("useViewTransitionState"),a=aa(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Cr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Cr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return eu(a.pathname,c)!=null||eu(a.pathname,l)!=null}new TextEncoder;var qc,Cm;function Xx(){if(Cm)return qc;Cm=1;var r=typeof Element<"u",e=typeof Map=="function",t=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function a(l,c){if(l===c)return!0;if(l&&c&&typeof l=="object"&&typeof c=="object"){if(l.constructor!==c.constructor)return!1;var f,d,p;if(Array.isArray(l)){if(f=l.length,f!=c.length)return!1;for(d=f;d--!==0;)if(!a(l[d],c[d]))return!1;return!0}var _;if(e&&l instanceof Map&&c instanceof Map){if(l.size!==c.size)return!1;for(_=l.entries();!(d=_.next()).done;)if(!c.has(d.value[0]))return!1;for(_=l.entries();!(d=_.next()).done;)if(!a(d.value[1],c.get(d.value[0])))return!1;return!0}if(t&&l instanceof Set&&c instanceof Set){if(l.size!==c.size)return!1;for(_=l.entries();!(d=_.next()).done;)if(!c.has(d.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(c)){if(f=l.length,f!=c.length)return!1;for(d=f;d--!==0;)if(l[d]!==c[d])return!1;return!0}if(l.constructor===RegExp)return l.source===c.source&&l.flags===c.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof c.valueOf=="function")return l.valueOf()===c.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof c.toString=="function")return l.toString()===c.toString();if(p=Object.keys(l),f=p.length,f!==Object.keys(c).length)return!1;for(d=f;d--!==0;)if(!Object.prototype.hasOwnProperty.call(c,p[d]))return!1;if(r&&l instanceof Element)return!1;for(d=f;d--!==0;)if(!((p[d]==="_owner"||p[d]==="__v"||p[d]==="__o")&&l.$$typeof)&&!a(l[p[d]],c[p[d]]))return!1;return!0}return l!==l&&c!==c}return qc=function(c,f){try{return a(c,f)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}},qc}var $x=Xx();const jx=ru($x);var Kc,Rm;function Yx(){if(Rm)return Kc;Rm=1;var r=function(e,t,s,a,l,c,f,d){if(!e){var p;if(t===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var _=[s,a,l,c,f,d],x=0;p=new Error(t.replace(/%s/g,function(){return _[x++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return Kc=r,Kc}var qx=Yx();const bm=ru(qx);var Zc,Pm;function Kx(){return Pm||(Pm=1,Zc=function(e,t,s,a){var l=s?s.call(a,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var c=Object.keys(e),f=Object.keys(t);if(c.length!==f.length)return!1;for(var d=Object.prototype.hasOwnProperty.bind(t),p=0;p<c.length;p++){var _=c[p];if(!d(_))return!1;var x=e[_],v=t[_];if(l=s?s.call(a,x,v,_):void 0,l===!1||l===void 0&&x!==v)return!1}return!0}),Zc}var Zx=Kx();const Qx=ru(Zx);var Yg=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(Yg||{}),Qc={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Lm=Object.values(Yg),Id={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Jx=Object.entries(Id).reduce((r,[e,t])=>(r[t]=e,r),{}),ai="data-rh",Ks={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Zs=(r,e)=>{for(let t=r.length-1;t>=0;t-=1){const s=r[t];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},ey=r=>{let e=Zs(r,"title");const t=Zs(r,Ks.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const s=Zs(r,Ks.DEFAULT_TITLE);return e||s||void 0},ty=r=>Zs(r,Ks.ON_CHANGE_CLIENT_STATE)||(()=>{}),Jc=(r,e)=>e.filter(t=>typeof t[r]<"u").map(t=>t[r]).reduce((t,s)=>({...t,...s}),{}),ny=(r,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,s)=>{if(!t.length){const a=Object.keys(s);for(let l=0;l<a.length;l+=1){const f=a[l].toLowerCase();if(r.indexOf(f)!==-1&&s[f])return t.concat(s)}}return t},[]),iy=r=>console&&typeof console.warn=="function"&&console.warn(r),Yo=(r,e,t)=>{const s={};return t.filter(a=>Array.isArray(a[r])?!0:(typeof a[r]<"u"&&iy(`Helmet: ${r} should be of type "Array". Instead found type "${typeof a[r]}"`),!1)).map(a=>a[r]).reverse().reduce((a,l)=>{const c={};l.filter(d=>{let p;const _=Object.keys(d);for(let v=0;v<_.length;v+=1){const S=_[v],E=S.toLowerCase();e.indexOf(E)!==-1&&!(p==="rel"&&d[p].toLowerCase()==="canonical")&&!(E==="rel"&&d[E].toLowerCase()==="stylesheet")&&(p=E),e.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(p=S)}if(!p||!d[p])return!1;const x=d[p].toLowerCase();return s[p]||(s[p]={}),c[p]||(c[p]={}),s[p][x]?!1:(c[p][x]=!0,!0)}).reverse().forEach(d=>a.push(d));const f=Object.keys(c);for(let d=0;d<f.length;d+=1){const p=f[d],_={...s[p],...c[p]};s[p]=_}return a},[]).reverse()},ry=(r,e)=>{if(Array.isArray(r)&&r.length){for(let t=0;t<r.length;t+=1)if(r[t][e])return!0}return!1},sy=r=>({baseTag:ny(["href"],r),bodyAttributes:Jc("bodyAttributes",r),defer:Zs(r,Ks.DEFER),encode:Zs(r,Ks.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Jc("htmlAttributes",r),linkTags:Yo("link",["rel","href"],r),metaTags:Yo("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Yo("noscript",["innerHTML"],r),onChangeClientState:ty(r),scriptTags:Yo("script",["src","innerHTML"],r),styleTags:Yo("style",["cssText"],r),title:ey(r),titleAttributes:Jc("titleAttributes",r),prioritizeSeoTags:ry(r,Ks.PRIORITIZE_SEO_TAGS)}),qg=r=>Array.isArray(r)?r.join(""):r,oy=(r,e)=>{const t=Object.keys(r);for(let s=0;s<t.length;s+=1)if(e[t[s]]&&e[t[s]].includes(r[t[s]]))return!0;return!1},ef=(r,e)=>Array.isArray(r)?r.reduce((t,s)=>(oy(s,e)?t.priority.push(s):t.default.push(s),t),{priority:[],default:[]}):{default:r,priority:[]},Dm=(r,e)=>({...r,[e]:void 0}),ay=["noscript","script","style"],Ff=(r,e=!0)=>e===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Kg=r=>Object.keys(r).reduce((e,t)=>{const s=typeof r[t]<"u"?`${t}="${r[t]}"`:`${t}`;return e?`${e} ${s}`:s},""),ly=(r,e,t,s)=>{const a=Kg(t),l=qg(e);return a?`<${r} ${ai}="true" ${a}>${Ff(l,s)}</${r}>`:`<${r} ${ai}="true">${Ff(l,s)}</${r}>`},uy=(r,e,t=!0)=>e.reduce((s,a)=>{const l=a,c=Object.keys(l).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,_)=>{const x=typeof l[_]>"u"?_:`${_}="${Ff(l[_],t)}"`;return p?`${p} ${x}`:x},""),f=l.innerHTML||l.cssText||"",d=ay.indexOf(r)===-1;return`${s}<${r} ${ai}="true" ${c}${d?"/>":`>${f}</${r}>`}`},""),Zg=(r,e={})=>Object.keys(r).reduce((t,s)=>{const a=Id[s];return t[a||s]=r[s],t},e),cy=(r,e,t)=>{const s={key:e,[ai]:!0},a=Zg(t,s);return[Tr.createElement("title",a,e)]},jl=(r,e)=>e.map((t,s)=>{const a={key:s,[ai]:!0};return Object.keys(t).forEach(l=>{const f=Id[l]||l;if(f==="innerHTML"||f==="cssText"){const d=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:d}}else a[f]=t[l]}),Tr.createElement(r,a)}),Yn=(r,e,t=!0)=>{switch(r){case"title":return{toComponent:()=>cy(r,e.title,e.titleAttributes),toString:()=>ly(r,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Zg(e),toString:()=>Kg(e)};default:return{toComponent:()=>jl(r,e),toString:()=>uy(r,e,t)}}},fy=({metaTags:r,linkTags:e,scriptTags:t,encode:s})=>{const a=ef(r,Qc.meta),l=ef(e,Qc.link),c=ef(t,Qc.script);return{priorityMethods:{toComponent:()=>[...jl("meta",a.priority),...jl("link",l.priority),...jl("script",c.priority)],toString:()=>`${Yn("meta",a.priority,s)} ${Yn("link",l.priority,s)} ${Yn("script",c.priority,s)}`},metaTags:a.default,linkTags:l.default,scriptTags:c.default}},dy=r=>{const{baseTag:e,bodyAttributes:t,encode:s=!0,htmlAttributes:a,noscriptTags:l,styleTags:c,title:f="",titleAttributes:d,prioritizeSeoTags:p}=r;let{linkTags:_,metaTags:x,scriptTags:v}=r,S={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:S,linkTags:_,metaTags:x,scriptTags:v}=fy(r)),{priority:S,base:Yn("base",e,s),bodyAttributes:Yn("bodyAttributes",t,s),htmlAttributes:Yn("htmlAttributes",a,s),link:Yn("link",_,s),meta:Yn("meta",x,s),noscript:Yn("noscript",l,s),script:Yn("script",v,s),style:Yn("style",c,s),title:Yn("title",{title:f,titleAttributes:d},s)}},Qg=dy,Sl=[],Jg=!!(typeof window<"u"&&window.document&&window.document.createElement),Of=class{constructor(r,e){Ui(this,"instances",[]);Ui(this,"canUseDOM",Jg);Ui(this,"context");Ui(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?Sl:this.instances,add:r=>{(this.canUseDOM?Sl:this.instances).push(r)},remove:r=>{const e=(this.canUseDOM?Sl:this.instances).indexOf(r);(this.canUseDOM?Sl:this.instances).splice(e,1)}}});this.context=r,this.canUseDOM=e||!1,e||(r.helmet=Qg({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},hy={},e_=Tr.createContext(hy),ns,t_=(ns=class extends ce.Component{constructor(t){super(t);Ui(this,"helmetData");this.helmetData=new Of(this.props.context||{},ns.canUseDOM)}render(){return Tr.createElement(e_.Provider,{value:this.helmetData.value},this.props.children)}},Ui(ns,"canUseDOM",Jg),ns),Ds=(r,e)=>{const t=document.head||document.querySelector("head"),s=t.querySelectorAll(`${r}[${ai}]`),a=[].slice.call(s),l=[];let c;return e&&e.length&&e.forEach(f=>{const d=document.createElement(r);for(const p in f)if(Object.prototype.hasOwnProperty.call(f,p))if(p==="innerHTML")d.innerHTML=f.innerHTML;else if(p==="cssText")d.styleSheet?d.styleSheet.cssText=f.cssText:d.appendChild(document.createTextNode(f.cssText));else{const _=p,x=typeof f[_]>"u"?"":f[_];d.setAttribute(p,x)}d.setAttribute(ai,"true"),a.some((p,_)=>(c=_,d.isEqualNode(p)))?a.splice(c,1):l.push(d)}),a.forEach(f=>{var d;return(d=f.parentNode)==null?void 0:d.removeChild(f)}),l.forEach(f=>t.appendChild(f)),{oldTags:a,newTags:l}},kf=(r,e)=>{const t=document.getElementsByTagName(r)[0];if(!t)return;const s=t.getAttribute(ai),a=s?s.split(","):[],l=[...a],c=Object.keys(e);for(const f of c){const d=e[f]||"";t.getAttribute(f)!==d&&t.setAttribute(f,d),a.indexOf(f)===-1&&a.push(f);const p=l.indexOf(f);p!==-1&&l.splice(p,1)}for(let f=l.length-1;f>=0;f-=1)t.removeAttribute(l[f]);a.length===l.length?t.removeAttribute(ai):t.getAttribute(ai)!==c.join(",")&&t.setAttribute(ai,c.join(","))},py=(r,e)=>{typeof r<"u"&&document.title!==r&&(document.title=qg(r)),kf("title",e)},Im=(r,e)=>{const{baseTag:t,bodyAttributes:s,htmlAttributes:a,linkTags:l,metaTags:c,noscriptTags:f,onChangeClientState:d,scriptTags:p,styleTags:_,title:x,titleAttributes:v}=r;kf("body",s),kf("html",a),py(x,v);const S={baseTag:Ds("base",t),linkTags:Ds("link",l),metaTags:Ds("meta",c),noscriptTags:Ds("noscript",f),scriptTags:Ds("script",p),styleTags:Ds("style",_)},E={},T={};Object.keys(S).forEach(y=>{const{newTags:g,oldTags:R}=S[y];g.length&&(E[y]=g),R.length&&(T[y]=S[y].oldTags)}),e&&e(),d(r,E,T)},qo=null,my=r=>{qo&&cancelAnimationFrame(qo),r.defer?qo=requestAnimationFrame(()=>{Im(r,()=>{qo=null})}):(Im(r),qo=null)},gy=my,Um=class extends ce.Component{constructor(){super(...arguments);Ui(this,"rendered",!1)}shouldComponentUpdate(e){return!Qx(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let s=null;const a=sy(e.get().map(l=>{const c={...l.props};return delete c.context,c}));t_.canUseDOM?gy(a):s=Qg(a),t(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},If,n_=(If=class extends ce.Component{shouldComponentUpdate(r){return!jx(Dm(this.props,"helmetData"),Dm(r,"helmetData"))}mapNestedChildrenToProps(r,e){if(!e)return null;switch(r.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,e,t,s){return{...e,[r.type]:[...e[r.type]||[],{...t,...this.mapNestedChildrenToProps(r,s)}]}}mapObjectTypeChildren(r,e,t,s){switch(r.type){case"title":return{...e,[r.type]:s,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[r.type]:{...t}}}}mapArrayTypeChildrenToProps(r,e){let t={...e};return Object.keys(r).forEach(s=>{t={...t,[s]:r[s]}}),t}warnOnInvalidChildren(r,e){return bm(Lm.some(t=>r.type===t),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Lm.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),bm(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,e){let t={};return Tr.Children.forEach(r,s=>{if(!s||!s.props)return;const{children:a,...l}=s.props,c=Object.keys(l).reduce((d,p)=>(d[Jx[p]||p]=l[p],d),{});let{type:f}=s;switch(typeof f=="symbol"?f=f.toString():this.warnOnInvalidChildren(s,a),f){case"Symbol(react.fragment)":e=this.mapChildrenToProps(a,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(s,t,c,a);break;default:e=this.mapObjectTypeChildren(s,e,c,a);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:r,...e}=this.props;let t={...e},{helmetData:s}=e;if(r&&(t=this.mapChildrenToProps(r,t)),s&&!(s instanceof Of)){const a=s;s=new Of(a.context,!0),delete t.helmetData}return s?Tr.createElement(Um,{...t,context:s.value}):Tr.createElement(e_.Consumer,null,a=>Tr.createElement(Um,{...t,context:a}))}},Ui(If,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),If);function _y(){return Qe.jsxs(Qe.Fragment,{children:[Qe.jsxs(n_,{children:[Qe.jsx("title",{children:"À propos de nous"}),Qe.jsx("meta",{name:"description",content:"À propos de nous"})]}),Qe.jsxs("div",{className:"about-hero",children:[Qe.jsx("h1",{className:"about-hero-title",children:"À propos de nous"}),Qe.jsxs("p",{className:"about-hero-text",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nunc ac vehicula ultricies,",Qe.jsx("br",{})]})]})]})}function vy(){return Qe.jsx("footer",{children:Qe.jsx("p",{children:"Footer"})})}function xy(){return Qe.jsx("nav",{children:Qe.jsxs("ul",{children:[Qe.jsx("li",{children:Qe.jsx($l,{to:"/",children:"Home"})}),Qe.jsx("li",{children:Qe.jsx($l,{to:"/about",children:"About"})}),Qe.jsx("li",{children:Qe.jsx($l,{to:"/contact",children:"Contact"})})]})})}function yy(){return Qe.jsxs("header",{children:[Qe.jsx("h1",{children:"My App"}),Qe.jsx(xy,{}),Qe.jsx("button",{children:"Login"})]})}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xi{constructor(e,t,s,a,l="div"){this.parent=e,this.object=t,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),xi.nextNameID=xi.nextNameID||0,this.$name.id=`lil-gui-name-${++xi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Sy extends xi{constructor(e,t,s){super(e,t,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Ey={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Bf,toHexString:Bf},ia={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},My={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const s=ia.fromHexString(r);e[0]=(s>>16&255)/255*t,e[1]=(s>>8&255)/255*t,e[2]=(s&255)/255*t},toHexString([r,e,t],s=1){s=255/s;const a=r*s<<16^e*s<<8^t*s<<0;return ia.toHexString(a)}},Ty={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const s=ia.fromHexString(r);e.r=(s>>16&255)/255*t,e.g=(s>>8&255)/255*t,e.b=(s&255)/255*t},toHexString({r,g:e,b:t},s=1){s=255/s;const a=r*s<<16^e*s<<8^t*s<<0;return ia.toHexString(a)}},wy=[Ey,ia,My,Ty];function Ay(r){return wy.find(e=>e.match(r))}class Cy extends xi{constructor(e,t,s,a){super(e,t,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ay(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const l=Bf(this.$text.value);l&&this._setValueFromHexString(l)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class tf extends xi{constructor(e,t,s){super(e,t,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ry extends xi{constructor(e,t,s,a,l,c){super(e,t,s,"number"),this._initInput(),this.min(a),this.max(l);const f=c!==void 0;this.step(f?c:this._getImplicitStep(),f),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let R=parseFloat(this.$input.value);isNaN(R)||(this._stepExplicit&&(R=this._snap(R)),this.setValue(this._clamp(R)))},s=R=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+R),this.$input.value=this.getValue())},a=R=>{R.key==="Enter"&&this.$input.blur(),R.code==="ArrowUp"&&(R.preventDefault(),s(this._step*this._arrowKeyMultiplier(R))),R.code==="ArrowDown"&&(R.preventDefault(),s(this._step*this._arrowKeyMultiplier(R)*-1))},l=R=>{this._inputFocused&&(R.preventDefault(),s(this._step*this._normalizeMouseWheel(R)))};let c=!1,f,d,p,_,x;const v=5,S=R=>{f=R.clientX,d=p=R.clientY,c=!0,_=this.getValue(),x=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",T)},E=R=>{if(c){const L=R.clientX-f,b=R.clientY-d;Math.abs(b)>v?(R.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>v&&T()}if(!c){const L=R.clientY-p;x-=L*this._step*this._arrowKeyMultiplier(R),_+x>this._max?x=this._max-_:_+x<this._min&&(x=this._min-_),this._snapClampSetValue(_+x)}p=R.clientY},T=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",T)},y=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",l,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,R,L,b,V)=>(g-R)/(L-R)*(V-b)+b,t=g=>{const R=this.$slider.getBoundingClientRect();let L=e(g,R.left,R.right,this._min,this._max);this._snapClampSetValue(L)},s=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",l)},a=g=>{t(g.clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l)};let c=!1,f,d;const p=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),c=!1},_=g=>{g.touches.length>1||(this._hasScrollBar?(f=g.touches[0].clientX,d=g.touches[0].clientY,c=!0):p(g),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",v))},x=g=>{if(c){const R=g.touches[0].clientX-f,L=g.touches[0].clientY-d;Math.abs(R)>Math.abs(L)?p(g):(window.removeEventListener("touchmove",x),window.removeEventListener("touchend",v))}else g.preventDefault(),t(g.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",v)},S=this._callOnFinishChange.bind(this),E=400;let T;const y=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const L=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(T),T=setTimeout(S,E)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",_,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:s}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,s=-e.wheelDelta/120,s*=this._stepExplicit?1:10),t+-s}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class by extends xi{constructor(e,t,s,a){super(e,t,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const s=document.createElement("option");s.textContent=t,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Py extends xi{constructor(e,t,s){super(e,t,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ly=`.lil-gui {
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
}`;function Dy(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Nm=!1;class Ud{constructor({parent:e,autoPlace:t=e===void 0,container:s,width:a,title:l="Controls",closeFolders:c=!1,injectStyles:f=!0,touchStyles:d=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(l),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),d&&this.domElement.classList.add("allow-touch-styles"),!Nm&&f&&(Dy(Ly),Nm=!0),s?s.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=c}add(e,t,s,a,l){if(Object(s)===s)return new by(this,e,t,s);const c=e[t];switch(typeof c){case"number":return new Ry(this,e,t,s,a,l);case"boolean":return new Sy(this,e,t);case"string":return new Py(this,e,t);case"function":return new tf(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,c)}addColor(e,t,s=1){return new Cy(this,e,t,s)}addFolder(e){const t=new Ud({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(s=>{s instanceof tf||s._name in e.controllers&&s.load(e.controllers[s._name])}),t&&e.folders&&this.folders.forEach(s=>{s._title in e.folders&&s.load(e.folders[s._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof tf)){if(s._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);t.controllers[s._name]=s.save()}}),e&&this.folders.forEach(s=>{if(s._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);t.folders[s._title]=s.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const s=l=>{l.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const a=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="172",Iy=0,Fm=1,Uy=2,i_=1,Ny=2,zi=3,Rr=0,Dn=1,Hi=2,wr=0,Qs=1,Om=2,km=3,Bm=4,Fy=5,Qr=100,Oy=101,ky=102,By=103,zy=104,Hy=200,Vy=201,Gy=202,Wy=203,zf=204,Hf=205,Xy=206,$y=207,jy=208,Yy=209,qy=210,Ky=211,Zy=212,Qy=213,Jy=214,Vf=0,Gf=1,Wf=2,to=3,Xf=4,$f=5,jf=6,Yf=7,r_=0,eS=1,tS=2,Ar=0,nS=1,iS=2,rS=3,sS=4,oS=5,aS=6,lS=7,s_=300,no=301,io=302,qf=303,Kf=304,au=306,Zf=1e3,es=1001,Qf=1002,ui=1003,uS=1004,El=1005,_i=1006,nf=1007,ts=1008,$i=1009,o_=1010,a_=1011,ra=1012,Fd=1013,rs=1014,Vi=1015,la=1016,Od=1017,kd=1018,ro=1020,l_=35902,u_=1021,c_=1022,li=1023,f_=1024,d_=1025,Js=1026,so=1027,h_=1028,Bd=1029,p_=1030,zd=1031,Hd=1033,Yl=33776,ql=33777,Kl=33778,Zl=33779,Jf=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,od=37808,ad=37809,ld=37810,ud=37811,cd=37812,fd=37813,dd=37814,hd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,xd=37821,Ql=36492,yd=36494,Sd=36495,m_=36283,Ed=36284,Md=36285,Td=36286,cS=3200,fS=3201,dS=0,hS=1,Mr="",qn="srgb",oo="srgb-linear",tu="linear",Ct="srgb",Is=7680,zm=519,pS=512,mS=513,gS=514,g_=515,_S=516,vS=517,xS=518,yS=519,Hm=35044,Vm="300 es",Gi=2e3,nu=2001;class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,wd=180/Math.PI;function ua(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function SS(r,e){return(r%e+e)%e}function sf(r,e,t){return(1-t)*r+t*e}function Ko(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,t=0){Pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,s,a,l,c,f,d,p){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p)}set(e,t,s,a,l,c,f,d,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=d,_[6]=s,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],p=s[1],_=s[4],x=s[7],v=s[2],S=s[5],E=s[8],T=a[0],y=a[3],g=a[6],R=a[1],L=a[4],b=a[7],V=a[2],k=a[5],N=a[8];return l[0]=c*T+f*R+d*V,l[3]=c*y+f*L+d*k,l[6]=c*g+f*b+d*N,l[1]=p*T+_*R+x*V,l[4]=p*y+_*L+x*k,l[7]=p*g+_*b+x*N,l[2]=v*T+S*R+E*V,l[5]=v*y+S*L+E*k,l[8]=v*g+S*b+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],_=e[8];return t*c*_-t*f*p-s*l*_+s*f*d+a*l*p-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],_=e[8],x=_*c-f*p,v=f*d-_*l,S=p*l-c*d,E=t*x+s*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*p-_*s)*T,e[2]=(f*s-a*c)*T,e[3]=v*T,e[4]=(_*t-a*d)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*d-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(s*d,s*p,-s*(d*c+p*f)+c+e,-a*p,a*d,-a*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new at;function __(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ES(){const r=iu("canvas");return r.style.display="block",r}const Gm={};function Ys(r){r in Gm||(Gm[r]=!0,console.warn(r))}function MS(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function TS(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const r={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ct&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(a.r=eo(a.r),a.g=eo(a.g),a.b=eo(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?tu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[oo]:{primaries:e,whitePoint:s,transfer:tu,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:s,transfer:Ct,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),r}const Mt=AS();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class CS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=iu("canvas")),Us.width=e.width,Us.height=e.height;const s=Us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=iu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Xi(t[s]/255)*255):t[s]=Xi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class v_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(af(a[c].image)):l.push(af(a[c]))}else l=af(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function af(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?CS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bS=0;class In extends co{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=es,a=es,l=_i,c=ts,f=li,d=$i,p=In.DEFAULT_ANISOTROPY,_=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ua(),this.name="",this.source=new v_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=s_;In.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,s=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,p=d[0],_=d[4],x=d[8],v=d[1],S=d[5],E=d[9],T=d[2],y=d[6],g=d[10];if(Math.abs(_-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,b=(S+1)/2,V=(g+1)/2,k=(_+v)/4,N=(x+T)/4,X=(E+y)/4;return L>b&&L>V?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=k/s,l=N/s):b>V?b<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),s=k/a,l=X/a):V<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),s=N/l,a=X/l),this.set(s,a,l,t),this}let R=Math.sqrt((y-E)*(y-E)+(x-T)*(x-T)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(x-T)/R,this.z=(v-_)/R,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends co{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new v_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends PS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class x_ extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];const v=l[c+0],S=l[c+1],E=l[c+2],T=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=T;return}if(x!==T||d!==v||p!==S||_!==E){let y=1-f;const g=d*v+p*S+_*E+x*T,R=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const V=Math.sqrt(L),k=Math.atan2(V,g*R);y=Math.sin(y*k)/V,f=Math.sin(f*k)/V}const b=f*R;if(d=d*y+v*b,p=p*y+S*b,_=_*y+E*b,x=x*y+T*b,y===1-f){const V=1/Math.sqrt(d*d+p*p+_*_+x*x);d*=V,p*=V,_*=V,x*=V}}e[t]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],p=s[a+2],_=s[a+3],x=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+_*x+d*S-p*v,e[t+1]=d*E+_*v+p*x-f*S,e[t+2]=p*E+_*S+f*v-d*x,e[t+3]=_*E-f*x-d*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(s/2),_=f(a/2),x=f(l/2),v=d(s/2),S=d(a/2),E=d(l/2);switch(c){case"XYZ":this._x=v*_*x+p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x-v*S*E;break;case"YXZ":this._x=v*_*x+p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x+v*S*E;break;case"ZXY":this._x=v*_*x-p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x-v*S*E;break;case"ZYX":this._x=v*_*x-p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x+v*S*E;break;case"YZX":this._x=v*_*x+p*S*E,this._y=p*S*x+v*_*E,this._z=p*_*E-v*S*x,this._w=p*_*x-v*S*E;break;case"XZY":this._x=v*_*x-p*S*E,this._y=p*S*x-v*_*E,this._z=p*_*E+v*S*x,this._w=p*_*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],_=t[6],x=t[10],v=s+f+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-d)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>x){const S=2*Math.sqrt(1+s-f-x);this._w=(_-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-s-x);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+_)/S}else{const S=2*Math.sqrt(1+x-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(d+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,_=t._w;return this._x=s*_+c*f+a*p-l*d,this._y=a*_+c*d+l*f-s*p,this._z=l*_+c*p+s*d-a*f,this._w=c*_-s*f-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),x=Math.sin((1-t)*_)/p,v=Math.sin(t*_)/p;return this._w=c*x+this._w*v,this._x=s*x+this._x*v,this._y=a*x+this._y*v,this._z=l*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,s=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($m.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*a-f*s),_=2*(f*t-l*a),x=2*(l*s-c*t);return this.x=t+d*p+c*x-f*_,this.y=s+d*_+f*p-l*x,this.z=a+d*x+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new ne,$m=new ca;class fa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ii):ii.fromBufferAttribute(l,c),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ml.copy(s.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Tl.subVectors(this.max,Zo),Ns.subVectors(e.a,Zo),Fs.subVectors(e.b,Zo),Os.subVectors(e.c,Zo),_r.subVectors(Fs,Ns),vr.subVectors(Os,Fs),Wr.subVectors(Ns,Os);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Wr.y,Wr.x,0];return!uf(t,Ns,Fs,Os,Tl)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,Ns,Fs,Os,Tl))?!1:(wl.crossVectors(_r,vr),t=[wl.x,wl.y,wl.z],uf(t,Ns,Fs,Os,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ii=new ne,Ml=new fa,Ns=new ne,Fs=new ne,Os=new ne,_r=new ne,vr=new ne,Wr=new ne,Zo=new ne,Tl=new ne,wl=new ne,Xr=new ne;function uf(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){Xr.fromArray(r,l);const f=a.x*Math.abs(Xr.x)+a.y*Math.abs(Xr.y)+a.z*Math.abs(Xr.z),d=e.dot(Xr),p=t.dot(Xr),_=s.dot(Xr);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const DS=new fa,Qo=new ne,cf=new ne;class Vd{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):DS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Qo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(cf)),this.expandByPoint(Qo.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new ne,ff=new ne,Al=new ne,xr=new ne,df=new ne,Cl=new ne,hf=new ne;class IS{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){ff.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Al),f=xr.dot(this.direction),d=-xr.dot(Al),p=xr.lengthSq(),_=Math.abs(1-c*c);let x,v,S,E;if(_>0)if(x=c*d-f,v=c*f-d,E=l*_,x>=0)if(v>=-E)if(v<=E){const T=1/_;x*=T,v*=T,S=x*(x+c*v+2*f)+v*(c*x+v+2*d)+p}else v=l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*d)+p;else v=-l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*d)+p;else v<=-E?(x=Math.max(0,-(-c*l+f)),v=x>0?-l:Math.min(Math.max(-l,-d),l),S=-x*x+v*(v+2*d)+p):v<=E?(x=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(x=Math.max(0,-(c*l+f)),v=x>0?l:Math.min(Math.max(-l,-d),l),S=-x*x+v*(v+2*d)+p);else v=c>0?-l:l,x=Math.max(0,-(c*v+f)),S=-x*x+v*(v+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(ff).addScaledVector(Al,v),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const s=Fi.dot(this.direction),a=Fi.dot(Fi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-v.z)*x,d=(e.max.z-v.z)*x):(f=(e.max.z-v.z)*x,d=(e.min.z-v.z)*x),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,s,a,l){df.subVectors(t,e),Cl.subVectors(s,e),hf.crossVectors(df,Cl);let c=this.direction.dot(hf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xr.subVectors(this.origin,e);const d=f*this.direction.dot(Cl.crossVectors(xr,Cl));if(d<0)return null;const p=f*this.direction.dot(df.cross(xr));if(p<0||d+p>c)return null;const _=-f*xr.dot(hf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,s,a,l,c,f,d,p,_,x,v,S,E,T,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,p,_,x,v,S,E,T,y)}set(e,t,s,a,l,c,f,d,p,_,x,v,S,E,T,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=s,g[12]=a,g[1]=l,g[5]=c,g[9]=f,g[13]=d,g[2]=p,g[6]=_,g[10]=x,g[14]=v,g[3]=S,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),c=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=c*_,S=c*x,E=f*_,T=f*x;t[0]=d*_,t[4]=-d*x,t[8]=p,t[1]=S+E*p,t[5]=v-T*p,t[9]=-f*d,t[2]=T-v*p,t[6]=E+S*p,t[10]=c*d}else if(e.order==="YXZ"){const v=d*_,S=d*x,E=p*_,T=p*x;t[0]=v+T*f,t[4]=E*f-S,t[8]=c*p,t[1]=c*x,t[5]=c*_,t[9]=-f,t[2]=S*f-E,t[6]=T+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*_,S=d*x,E=p*_,T=p*x;t[0]=v-T*f,t[4]=-c*x,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*_,t[9]=T-v*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*_,S=c*x,E=f*_,T=f*x;t[0]=d*_,t[4]=E*p-S,t[8]=v*p+T,t[1]=d*x,t[5]=T*p+v,t[9]=S*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*p,E=f*d,T=f*p;t[0]=d*_,t[4]=T-v*x,t[8]=E*x+S,t[1]=x,t[5]=c*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*x+E,t[10]=v-T*x}else if(e.order==="XZY"){const v=c*d,S=c*p,E=f*d,T=f*p;t[0]=d*_,t[4]=-x,t[8]=p*_,t[1]=v*x+T,t[5]=c*_,t[9]=S*x-E,t[2]=E*x-S,t[6]=f*_,t[10]=T*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,NS)}lookAt(e,t,s){const a=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),yr.crossVectors(s,kn),yr.lengthSq()===0&&(Math.abs(s.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),yr.crossVectors(s,kn)),yr.normalize(),Rl.crossVectors(kn,yr),a[0]=yr.x,a[4]=Rl.x,a[8]=kn.x,a[1]=yr.y,a[5]=Rl.y,a[9]=kn.y,a[2]=yr.z,a[6]=Rl.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],p=s[12],_=s[1],x=s[5],v=s[9],S=s[13],E=s[2],T=s[6],y=s[10],g=s[14],R=s[3],L=s[7],b=s[11],V=s[15],k=a[0],N=a[4],X=a[8],P=a[12],C=a[1],B=a[5],oe=a[9],ee=a[13],fe=a[2],pe=a[6],se=a[10],le=a[14],z=a[3],ae=a[7],re=a[11],U=a[15];return l[0]=c*k+f*C+d*fe+p*z,l[4]=c*N+f*B+d*pe+p*ae,l[8]=c*X+f*oe+d*se+p*re,l[12]=c*P+f*ee+d*le+p*U,l[1]=_*k+x*C+v*fe+S*z,l[5]=_*N+x*B+v*pe+S*ae,l[9]=_*X+x*oe+v*se+S*re,l[13]=_*P+x*ee+v*le+S*U,l[2]=E*k+T*C+y*fe+g*z,l[6]=E*N+T*B+y*pe+g*ae,l[10]=E*X+T*oe+y*se+g*re,l[14]=E*P+T*ee+y*le+g*U,l[3]=R*k+L*C+b*fe+V*z,l[7]=R*N+L*B+b*pe+V*ae,l[11]=R*X+L*oe+b*se+V*re,l[15]=R*P+L*ee+b*le+V*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],_=e[2],x=e[6],v=e[10],S=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*d*x-a*p*x-l*f*v+s*p*v+a*f*S-s*d*S)+T*(+t*d*S-t*p*v+l*c*v-a*c*S+a*p*_-l*d*_)+y*(+t*p*x-t*f*S-l*c*x+s*c*S+l*f*_-s*p*_)+g*(-a*f*_-t*d*x+t*f*v+a*c*x-s*c*v+s*d*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],_=e[8],x=e[9],v=e[10],S=e[11],E=e[12],T=e[13],y=e[14],g=e[15],R=x*y*p-T*v*p+T*d*S-f*y*S-x*d*g+f*v*g,L=E*v*p-_*y*p-E*d*S+c*y*S+_*d*g-c*v*g,b=_*T*p-E*x*p+E*f*S-c*T*S-_*f*g+c*x*g,V=E*x*d-_*T*d-E*f*v+c*T*v+_*f*y-c*x*y,k=t*R+s*L+a*b+l*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=R*N,e[1]=(T*v*l-x*y*l-T*a*S+s*y*S+x*a*g-s*v*g)*N,e[2]=(f*y*l-T*d*l+T*a*p-s*y*p-f*a*g+s*d*g)*N,e[3]=(x*d*l-f*v*l-x*a*p+s*v*p+f*a*S-s*d*S)*N,e[4]=L*N,e[5]=(_*y*l-E*v*l+E*a*S-t*y*S-_*a*g+t*v*g)*N,e[6]=(E*d*l-c*y*l-E*a*p+t*y*p+c*a*g-t*d*g)*N,e[7]=(c*v*l-_*d*l+_*a*p-t*v*p-c*a*S+t*d*S)*N,e[8]=b*N,e[9]=(E*x*l-_*T*l-E*s*S+t*T*S+_*s*g-t*x*g)*N,e[10]=(c*T*l-E*f*l+E*s*p-t*T*p-c*s*g+t*f*g)*N,e[11]=(_*f*l-c*x*l-_*s*p+t*x*p+c*s*S-t*f*S)*N,e[12]=V*N,e[13]=(_*T*a-E*x*a+E*s*v-t*T*v-_*s*y+t*x*y)*N,e[14]=(E*f*a-c*T*a-E*s*d+t*T*d+c*s*y-t*f*y)*N,e[15]=(c*x*a-_*f*a+_*s*d-t*x*d-c*s*v+t*f*v)*N,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,p=l*c,_=l*f;return this.set(p*c+s,p*f-a*d,p*d+a*f,0,p*f+a*d,_*f+s,_*d-a*c,0,p*d-a*f,_*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,_=c+c,x=f+f,v=l*p,S=l*_,E=l*x,T=c*_,y=c*x,g=f*x,R=d*p,L=d*_,b=d*x,V=s.x,k=s.y,N=s.z;return a[0]=(1-(T+g))*V,a[1]=(S+b)*V,a[2]=(E-L)*V,a[3]=0,a[4]=(S-b)*k,a[5]=(1-(v+g))*k,a[6]=(y+R)*k,a[7]=0,a[8]=(E+L)*N,a[9]=(y-R)*N,a[10]=(1-(v+T))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=ks.set(a[0],a[1],a[2]).length();const c=ks.set(a[4],a[5],a[6]).length(),f=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const p=1/l,_=1/c,x=1/f;return ri.elements[0]*=p,ri.elements[1]*=p,ri.elements[2]*=p,ri.elements[4]*=_,ri.elements[5]*=_,ri.elements[6]*=_,ri.elements[8]*=x,ri.elements[9]*=x,ri.elements[10]*=x,t.setFromRotationMatrix(ri),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Gi){const d=this.elements,p=2*l/(t-e),_=2*l/(s-a),x=(t+e)/(t-e),v=(s+a)/(s-a);let S,E;if(f===Gi)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===nu)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Gi){const d=this.elements,p=1/(t-e),_=1/(s-a),x=1/(c-l),v=(t+e)*p,S=(s+a)*_;let E,T;if(f===Gi)E=(c+l)*x,T=-2*x;else if(f===nu)E=l*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=T,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new ne,ri=new Yt,US=new ne(0,0,0),NS=new ne(1,1,1),yr=new ne,Rl=new ne,kn=new ne,jm=new Yt,Ym=new ca;class ji{constructor(e=0,t=0,s=0,a=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],p=a[5],_=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const qm=new ne,Bs=new ca,Oi=new Yt,bl=new ne,Jo=new ne,OS=new ne,kS=new ca,Km=new ne(1,0,0),Zm=new ne(0,1,0),Qm=new ne(0,0,1),Jm={type:"added"},BS={type:"removed"},zs={type:"childadded",child:null},pf={type:"childremoved",child:null};class zn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ne,t=new ji,s=new ca,a=new ne(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new at}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?bl.copy(e):bl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Jo,bl,this.up):Oi.lookAt(bl,Jo,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BS),pf.child=e,this.dispatchEvent(pf),pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,kS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const x=d[p];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),_=c(e.images),x=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=a,s;function c(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}zn.DEFAULT_UP=new ne(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new ne,ki=new ne,mf=new ne,Bi=new ne,Hs=new ne,Vs=new ne,eg=new ne,gf=new ne,_f=new ne,vf=new ne,xf=new Xt,yf=new Xt,Sf=new Xt;class oi{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),si.subVectors(e,t),a.cross(si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){si.subVectors(a,t),ki.subVectors(s,t),mf.subVectors(e,t);const c=si.dot(si),f=si.dot(ki),d=si.dot(mf),p=ki.dot(ki),_=ki.dot(mf),x=c*p-f*f;if(x===0)return l.set(0,0,0),null;const v=1/x,S=(p*d-f*_)*v,E=(c*_-f*d)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,Bi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Bi.x),d.addScaledVector(c,Bi.y),d.addScaledVector(f,Bi.z),d)}static getInterpolatedAttribute(e,t,s,a,l,c){return xf.setScalar(0),yf.setScalar(0),Sf.setScalar(0),xf.fromBufferAttribute(e,t),yf.fromBufferAttribute(e,s),Sf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(xf,l.x),c.addScaledVector(yf,l.y),c.addScaledVector(Sf,l.z),c}static isFrontFacing(e,t,s,a){return si.subVectors(s,t),ki.subVectors(e,t),si.cross(ki).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),si.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return oi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Hs.subVectors(a,s),Vs.subVectors(l,s),gf.subVectors(e,s);const d=Hs.dot(gf),p=Vs.dot(gf);if(d<=0&&p<=0)return t.copy(s);_f.subVectors(e,a);const _=Hs.dot(_f),x=Vs.dot(_f);if(_>=0&&x<=_)return t.copy(a);const v=d*x-_*p;if(v<=0&&d>=0&&_<=0)return c=d/(d-_),t.copy(s).addScaledVector(Hs,c);vf.subVectors(e,l);const S=Hs.dot(vf),E=Vs.dot(vf);if(E>=0&&S<=E)return t.copy(l);const T=S*p-d*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Vs,f);const y=_*E-S*x;if(y<=0&&x-_>=0&&S-E>=0)return eg.subVectors(l,a),f=(x-_)/(x-_+(S-E)),t.copy(a).addScaledVector(eg,f);const g=1/(y+T+v);return c=T*g,f=v*g,t.copy(s).addScaledVector(Hs,c).addScaledVector(Vs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Ef(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Mt.workingColorSpace){if(e=SS(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ef(c,l,e+1/3),this.g=Ef(c,l,e),this.b=Ef(c,l,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,t=qn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qn){const s=S_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_n.copy(this),t);const s=_n.r,a=_n.g,l=_n.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,p;const _=(f+c)/2;if(f===c)d=0,p=0;else{const x=c-f;switch(p=_<=.5?x/(c+f):x/(2-c-f),c){case s:d=(a-l)/x+(a<l?6:0);break;case a:d=(l-s)/x+2;break;case l:d=(s-a)/x+4;break}d/=6}return e.h=d,e.s=p,e.l=_,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=qn){Mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,a=_n.b;return e!==qn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Pl);const s=sf(Sr.h,Pl.h,t),a=sf(Sr.s,Pl.s,t),l=sf(Sr.l,Pl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Rt;Rt.NAMES=S_;let zS=0;class lu extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Qs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Hf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(s.blending=this.blending),this.side!==Rr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zf&&(s.blendSrc=this.blendSrc),this.blendDst!==Hf&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gd extends lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ne,Ll=new Pt;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Hm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),s=Ln(s,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}}class E_ extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class M_ extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class is extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let HS=0;const jn=new Yt,Mf=new zn,Gs=new ne,Bn=new fa,ea=new fa,on=new ne;class as extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?M_:E_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new at().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,s){return jn.makeTranslation(e,t,s),this.applyMatrix4(jn),this}scale(e,t,s){return jn.makeScale(e,t,s),this.applyMatrix4(jn),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new is(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Bn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ea.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Bn.min,ea.min),Bn.expandByPoint(on),on.addVectors(Bn.max,ea.max),Bn.expandByPoint(on)):(Bn.expandByPoint(ea.min),Bn.expandByPoint(ea.max))}Bn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)on.fromBufferAttribute(f,p),d&&(Gs.fromBufferAttribute(e,p),on.add(Gs)),a=Math.max(a,s.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<s.count;X++)f[X]=new ne,d[X]=new ne;const p=new ne,_=new ne,x=new ne,v=new Pt,S=new Pt,E=new Pt,T=new ne,y=new ne;function g(X,P,C){p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,P),x.fromBufferAttribute(s,C),v.fromBufferAttribute(l,X),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,C),_.sub(p),x.sub(p),S.sub(v),E.sub(v);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(B),y.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(B),f[X].add(T),f[P].add(T),f[C].add(T),d[X].add(y),d[P].add(y),d[C].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let X=0,P=R.length;X<P;++X){const C=R[X],B=C.start,oe=C.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const L=new ne,b=new ne,V=new ne,k=new ne;function N(X){V.fromBufferAttribute(a,X),k.copy(V);const P=f[X];L.copy(P),L.sub(V.multiplyScalar(V.dot(P))).normalize(),b.crossVectors(k,P);const B=b.dot(d[X])<0?-1:1;c.setXYZW(X,L.x,L.y,L.z,B)}for(let X=0,P=R.length;X<P;++X){const C=R[X],B=C.start,oe=C.count;for(let ee=B,fe=B+oe;ee<fe;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new ne,l=new ne,c=new ne,f=new ne,d=new ne,p=new ne,_=new ne,x=new ne;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),T=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),f.fromBufferAttribute(s,E),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),f.add(_),d.add(_),p.add(_),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),_.subVectors(c,l),x.subVectors(a,l),_.cross(x),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,d){const p=f.array,_=f.itemSize,x=f.normalized,v=new p.constructor(d.length*_);let S=0,E=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?S=d[T]*f.data.stride+f.offset:S=d[T]*_;for(let g=0;g<_;g++)v[E++]=p[S++]}return new yi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new as,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],p=e(d,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let _=0,x=p.length;_<x;_++){const v=p[_],S=e(v,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const p=s[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];_.push(S.toJSON(e.data))}_.length>0&&(a[d]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let v=0,S=x.length;v<S;v++)_.push(x[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new Yt,$r=new IS,Dl=new Vd,ng=new ne,Il=new ne,Ul=new ne,Nl=new ne,Tf=new ne,Fl=new ne,ig=new ne,Ol=new ne;class vi extends zn{constructor(e=new as,t=new Gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const _=f[d],x=l[d];_!==0&&(Tf.fromBufferAttribute(x,e),c?Fl.addScaledVector(Tf,_):Fl.addScaledVector(Tf.sub(t),_))}t.add(Fl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dl.copy(s.boundingSphere),Dl.applyMatrix4(l),$r.copy(e.ray).recast(e.near),!(Dl.containsPoint($r.origin)===!1&&($r.intersectSphere(Dl,ng)===null||$r.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),$r.copy(e.ray).applyMatrix4(tg),!(s.boundingBox!==null&&$r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],g=c[y.materialIndex],R=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=R,V=L;b<V;b+=3){const k=f.getX(b),N=f.getX(b+1),X=f.getX(b+2);a=kl(this,g,e,s,p,_,x,k,N,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const R=f.getX(y),L=f.getX(y+1),b=f.getX(y+2);a=kl(this,c,e,s,p,_,x,R,L,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,T=v.length;E<T;E++){const y=v[E],g=c[y.materialIndex],R=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=R,V=L;b<V;b+=3){const k=b,N=b+1,X=b+2;a=kl(this,g,e,s,p,_,x,k,N,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const R=y,L=y+1,b=y+2;a=kl(this,c,e,s,p,_,x,R,L,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function VS(r,e,t,s,a,l,c,f){let d;if(e.side===Dn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===Rr,f),d===null)return null;Ol.copy(f),Ol.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:r}}function kl(r,e,t,s,a,l,c,f,d,p){r.getVertexPosition(f,Il),r.getVertexPosition(d,Ul),r.getVertexPosition(p,Nl);const _=VS(r,e,t,s,Il,Ul,Nl,ig);if(_){const x=new ne;oi.getBarycoord(ig,Il,Ul,Nl,x),a&&(_.uv=oi.getInterpolatedAttribute(a,f,d,p,x,new Pt)),l&&(_.uv1=oi.getInterpolatedAttribute(l,f,d,p,x,new Pt)),c&&(_.normal=oi.getInterpolatedAttribute(c,f,d,p,x,new ne),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new ne,materialIndex:0};oi.getNormal(Il,Ul,Nl,v.normal),_.face=v,_.barycoord=x}return _}class fo extends as{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],_=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,a,c,2),E("x","z","y",1,-1,e,s,-t,a,c,3),E("x","y","z",1,-1,e,t,s,a,l,4),E("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new is(p,3)),this.setAttribute("normal",new is(_,3)),this.setAttribute("uv",new is(x,2));function E(T,y,g,R,L,b,V,k,N,X,P){const C=b/N,B=V/X,oe=b/2,ee=V/2,fe=k/2,pe=N+1,se=X+1;let le=0,z=0;const ae=new ne;for(let re=0;re<se;re++){const U=re*B-ee;for(let te=0;te<pe;te++){const Ne=te*C-oe;ae[T]=Ne*R,ae[y]=U*L,ae[g]=fe,p.push(ae.x,ae.y,ae.z),ae[T]=0,ae[y]=0,ae[g]=k>0?1:-1,_.push(ae.x,ae.y,ae.z),x.push(te/N),x.push(1-re/X),le+=1}}for(let re=0;re<X;re++)for(let U=0;U<N;U++){const te=v+U+pe*re,Ne=v+U+pe*(re+1),Z=v+(U+1)+pe*(re+1),he=v+(U+1)+pe*re;d.push(te,Ne,he),d.push(Ne,Z,he),z+=6}f.addGroup(S,z,P),S+=z,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const s=ao(r[t]);for(const a in s)e[a]=s[a]}return e}function GS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function T_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const WS={clone:ao,merge:Mn};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class w_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new ne,rg=new Pt,sg=new Pt;class Kn extends w_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,rg,sg),t.subVectors(sg,rg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/p,a*=c.width/d,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class jS extends zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new Kn(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const f=new Kn(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const d=new Kn(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const p=new Kn(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(x,v,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class A_ extends In{constructor(e,t,s,a,l,c,f,d,p,_){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,s,a,l,c,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YS extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new A_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new fo(5,5,5),l=new br({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:wr});l.uniforms.tEquirect.value=t;const c=new vi(a,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=_i),new jS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}let qS=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};const wf=new ne,KS=new ne,ZS=new at;class Kr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=wf.subVectors(s,t).cross(KS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(wf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ZS.getNormalMatrix(e),a=this.coplanarPoint(wf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Vd,Bl=new ne;class C_{constructor(e=new Kr,t=new Kr,s=new Kr,a=new Kr,l=new Kr,c=new Kr){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Gi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],_=a[5],x=a[6],v=a[7],S=a[8],E=a[9],T=a[10],y=a[11],g=a[12],R=a[13],L=a[14],b=a[15];if(s[0].setComponents(d-l,v-p,y-S,b-g).normalize(),s[1].setComponents(d+l,v+p,y+S,b+g).normalize(),s[2].setComponents(d+c,v+_,y+E,b+R).normalize(),s[3].setComponents(d-c,v-_,y-E,b-R).normalize(),s[4].setComponents(d-f,v-x,y-T,b-L).normalize(),t===Gi)s[5].setComponents(d+f,v+x,y+T,b+L).normalize();else if(t===nu)s[5].setComponents(f,x,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Bl.x=a.normal.x>0?e.max.x:e.min.x,Bl.y=a.normal.y>0?e.max.y:e.min.y,Bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zl extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class R_ extends In{constructor(e,t,s,a,l,c,f,d,p,_=Js){if(_!==Js&&_!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Js&&(s=rs),s===void 0&&_===so&&(s=ro),super(null,a,l,c,f,d,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:ui,this.minFilter=d!==void 0?d:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uu extends as{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),p=f+1,_=d+1,x=e/f,v=t/d,S=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const R=g*v-c;for(let L=0;L<p;L++){const b=L*x-l;E.push(b,-R,0),T.push(0,0,1),y.push(L/f),y.push(1-g/d)}}for(let g=0;g<d;g++)for(let R=0;R<f;R++){const L=R+p*g,b=R+p*(g+1),V=R+1+p*(g+1),k=R+1+p*g;S.push(L,b,k),S.push(b,V,k)}this.setIndex(S),this.setAttribute("position",new is(E,3)),this.setAttribute("normal",new is(T,3)),this.setAttribute("uv",new is(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class QS extends lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class eE extends w_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tE extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function og(r,e,t,s){const a=nE(s);switch(t){case u_:return r*e;case f_:return r*e;case d_:return r*e*2;case h_:return r*e/a.components*a.byteLength;case Bd:return r*e/a.components*a.byteLength;case p_:return r*e*2/a.components*a.byteLength;case zd:return r*e*2/a.components*a.byteLength;case c_:return r*e*3/a.components*a.byteLength;case li:return r*e*4/a.components*a.byteLength;case Hd:return r*e*4/a.components*a.byteLength;case Yl:case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(r,16)*Math.max(e,8)/4;case Jf:case td:return Math.max(r,8)*Math.max(e,8)/2;case id:case rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ql:case yd:case Sd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case m_:case Ed:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Md:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nE(r){switch(r){case $i:case o_:return{byteLength:1,components:1};case ra:case a_:case la:return{byteLength:2,components:1};case Od:case kd:return{byteLength:2,components:4};case rs:case Fd:case Vi:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b_(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function iE(r){const e=new WeakMap;function t(f,d){const p=f.array,_=f.usage,x=p.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,d,p){const _=d.array,x=d.updateRanges;if(r.bindBuffer(p,f),x.length===0)r.bufferSubData(p,0,_);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,x[v]=T)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,d),p.version=f.version}}return{get:a,remove:l,update:c}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
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
#endif`,oE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dE=`#ifdef USE_BATCHING
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
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,vE=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",NE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
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
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tM=`PhysicalMaterial material;
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
#endif`,nM=`struct PhysicalMaterial {
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
}`,iM=`
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
#endif`,rM=`#if defined( RE_IndirectDiffuse )
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
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hM=`#if defined( USE_POINTS_UV )
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
#endif`,pM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_M=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,yM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,EM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AM=`#ifdef USE_NORMALMAP
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
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VM=`float getShadowMask() {
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
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WM=`#ifdef USE_SKINNING
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
#endif`,XM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,fT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,ET=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,TT=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,AT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,bT=`#define TOON
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
}`,PT=`#define TOON
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
}`,LT=`uniform float size;
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
}`,DT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,UT=`uniform vec3 color;
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
}`,NT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:rE,alphahash_pars_fragment:sE,alphamap_fragment:oE,alphamap_pars_fragment:aE,alphatest_fragment:lE,alphatest_pars_fragment:uE,aomap_fragment:cE,aomap_pars_fragment:fE,batching_pars_vertex:dE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:_E,bumpmap_pars_fragment:vE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:EE,color_fragment:ME,color_pars_fragment:TE,color_pars_vertex:wE,color_vertex:AE,common:CE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:bE,displacementmap_pars_vertex:PE,displacementmap_vertex:LE,emissivemap_fragment:DE,emissivemap_pars_fragment:IE,colorspace_fragment:UE,colorspace_pars_fragment:NE,envmap_fragment:FE,envmap_common_pars_fragment:OE,envmap_pars_fragment:kE,envmap_pars_vertex:BE,envmap_physical_pars_fragment:KE,envmap_vertex:zE,fog_vertex:HE,fog_pars_vertex:VE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:$E,lights_lambert_fragment:jE,lights_lambert_pars_fragment:YE,lights_pars_begin:qE,lights_toon_fragment:ZE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:eM,lights_physical_fragment:tM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:aM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:uM,map_fragment:cM,map_pars_fragment:fM,map_particle_fragment:dM,map_particle_pars_fragment:hM,metalnessmap_fragment:pM,metalnessmap_pars_fragment:mM,morphinstance_vertex:gM,morphcolor_vertex:_M,morphnormal_vertex:vM,morphtarget_pars_vertex:xM,morphtarget_vertex:yM,normal_fragment_begin:SM,normal_fragment_maps:EM,normal_pars_fragment:MM,normal_pars_vertex:TM,normal_vertex:wM,normalmap_pars_fragment:AM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:PM,opaque_fragment:LM,packing:DM,premultiplied_alpha_fragment:IM,project_vertex:UM,dithering_fragment:NM,dithering_pars_fragment:FM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:kM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:zM,shadowmap_vertex:HM,shadowmask_pars_fragment:VM,skinbase_vertex:GM,skinning_pars_vertex:WM,skinning_vertex:XM,skinnormal_vertex:$M,specularmap_fragment:jM,specularmap_pars_fragment:YM,tonemapping_fragment:qM,tonemapping_pars_fragment:KM,transmission_fragment:ZM,transmission_pars_fragment:QM,uv_pars_fragment:JM,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:oT,cube_vert:aT,cube_frag:lT,depth_vert:uT,depth_frag:cT,distanceRGBA_vert:fT,distanceRGBA_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:_T,meshbasic_frag:vT,meshlambert_vert:xT,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:ET,meshnormal_vert:MT,meshnormal_frag:TT,meshphong_vert:wT,meshphong_frag:AT,meshphysical_vert:CT,meshphysical_frag:RT,meshtoon_vert:bT,meshtoon_frag:PT,points_vert:LT,points_frag:DT,shadow_vert:IT,shadow_frag:UT,sprite_vert:NT,sprite_frag:FT},be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},gi={basic:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Mn([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Mn([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Mn([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Mn([be.common,be.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Mn([be.lights,be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};gi.physical={uniforms:Mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Hl={r:0,b:0,g:0},Yr=new ji,OT=new Yt;function kT(r,e,t,s,a,l,c){const f=new Rt(0);let d=l===!0?0:1,p,_,x=null,v=0,S=null;function E(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function T(L){let b=!1;const V=E(L);V===null?g(f,d):V&&V.isColor&&(g(V,1),b=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,b){const V=E(b);V&&(V.isCubeTexture||V.mapping===au)?(_===void 0&&(_=new vi(new fo(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:ao(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Yr.copy(b.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Yr)),_.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Ct,(x!==V||v!==V.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,x=V,v=V.version,S=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new vi(new uu(2,2),new br({name:"BackgroundMaterial",uniforms:ao(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(V.colorSpace)!==Ct,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||v!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,x=V,v=V.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,b){L.getRGB(Hl,T_(r)),s.buffers.color.setClear(Hl.r,Hl.g,Hl.b,b,c)}function R(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),d=b,g(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,g(f,d)},render:T,addToRenderList:y,dispose:R}}function BT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(C,B,oe,ee,fe){let pe=!1;const se=x(ee,oe,B);l!==se&&(l=se,p(l.object)),pe=S(C,ee,oe,fe),pe&&E(C,ee,oe,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,b(C,B,oe,ee),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function d(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function x(C,B,oe){const ee=oe.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[B.id];pe===void 0&&(pe={},fe[B.id]=pe);let se=pe[ee];return se===void 0&&(se=v(d()),pe[ee]=se),se}function v(C){const B=[],oe=[],ee=[];for(let fe=0;fe<t;fe++)B[fe]=0,oe[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:ee,object:C,attributes:{},index:null}}function S(C,B,oe,ee){const fe=l.attributes,pe=B.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){const re=fe[z];let U=pe[z];if(U===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return l.attributesNum!==se||l.index!==ee}function E(C,B,oe,ee){const fe={},pe=B.attributes;let se=0;const le=oe.getAttributes();for(const z in le)if(le[z].location>=0){let re=pe[z];re===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[z]=U,se++}l.attributes=fe,l.attributesNum=se,l.index=ee}function T(){const C=l.newAttributes;for(let B=0,oe=C.length;B<oe;B++)C[B]=0}function y(C){g(C,0)}function g(C,B){const oe=l.newAttributes,ee=l.enabledAttributes,fe=l.attributeDivisors;oe[C]=1,ee[C]===0&&(r.enableVertexAttribArray(C),ee[C]=1),fe[C]!==B&&(r.vertexAttribDivisor(C,B),fe[C]=B)}function R(){const C=l.newAttributes,B=l.enabledAttributes;for(let oe=0,ee=B.length;oe<ee;oe++)B[oe]!==C[oe]&&(r.disableVertexAttribArray(oe),B[oe]=0)}function L(C,B,oe,ee,fe,pe,se){se===!0?r.vertexAttribIPointer(C,B,oe,fe,pe):r.vertexAttribPointer(C,B,oe,ee,fe,pe)}function b(C,B,oe,ee){T();const fe=ee.attributes,pe=oe.getAttributes(),se=B.defaultAttributeValues;for(const le in pe){const z=pe[le];if(z.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,te=e.get(ae);if(te===void 0)continue;const Ne=te.buffer,Z=te.type,he=te.bytesPerElement,Ee=Z===r.INT||Z===r.UNSIGNED_INT||ae.gpuType===Fd;if(ae.isInterleavedBufferAttribute){const xe=ae.data,we=xe.stride,Ue=ae.offset;if(xe.isInstancedInterleavedBuffer){for(let Je=0;Je<z.locationSize;Je++)g(z.location+Je,xe.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Je=0;Je<z.locationSize;Je++)y(z.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let Je=0;Je<z.locationSize;Je++)L(z.location+Je,U/z.locationSize,Z,re,we*he,(Ue+U/z.locationSize*Je)*he,Ee)}else{if(ae.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ne);for(let xe=0;xe<z.locationSize;xe++)L(z.location+xe,U/z.locationSize,Z,re,U*he,U/z.locationSize*xe*he,Ee)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}R()}function V(){X();for(const C in s){const B=s[C];for(const oe in B){const ee=B[oe];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete B[oe]}delete s[C]}}function k(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const oe in B){const ee=B[oe];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete B[oe]}delete s[C.id]}function N(C){for(const B in s){const oe=s[B];if(oe[C.id]===void 0)continue;const ee=oe[C.id];for(const fe in ee)_(ee[fe].object),delete ee[fe];delete oe[C.id]}}function X(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:y,disableUnusedAttributes:R}}function zT(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function c(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),t.update(_,s,x))}function f(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];t.update(S,s,1)}function d(p,_,x,v){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T]*v[T];t.update(E,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function HT(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==li&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const X=N===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==$i&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!X)}function d(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:V,maxSamples:k}}function VT(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new Kr,f=new at,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||a;return a=v,s=x.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=_(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,g=r.get(x);if(!a||E===null||E.length===0||l&&!y)l?_(null):p();else{const R=l?0:s,L=R*4;let b=g.clippingState||null;d.value=b,b=_(E,v,L,S);for(let V=0;V!==L;++V)b[V]=t[V];g.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,v,S,E){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,E!==!0||y===null){const g=S+T*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,b=S;L!==T;++L,b+=4)c.copy(x[L]).applyMatrix4(R,f),c.normal.toArray(y,b),y[b+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function GT(r){let e=new WeakMap;function t(c,f){return f===qf?c.mapping=no:f===Kf&&(c.mapping=io),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===qf||f===Kf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new YS(d.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const qs=4,ag=[.125,.215,.35,.446,.526,.582],Jr=20,Af=new eE,lg=new Rt;let Cf=null,Rf=0,bf=0,Pf=!1;const Zr=(1+Math.sqrt(5))/2,$s=1/Zr,ug=[new ne(-Zr,$s,0),new ne(Zr,$s,0),new ne(-$s,0,Zr),new ne($s,0,Zr),new ne(0,Zr,-$s),new ne(0,Zr,$s),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,bf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:la,format:li,colorSpace:oo,depthBuffer:!1},a=fg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(l)),this._blurMaterial=XT(l,e,t)}return a}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,s,a){const f=new Kn(90,1,t,s),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(lg),_.toneMapping=Ar,_.autoClear=!1;const S=new Gd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),E=new vi(new fo,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(lg),T=!0);for(let g=0;g<6;g++){const R=g%3;R===0?(f.up.set(0,d[g],0),f.lookAt(p[g],0,0)):R===1?(f.up.set(0,0,d[g]),f.lookAt(0,p[g],0)):(f.up.set(0,d[g],0),f.lookAt(0,0,p[g]));const L=this._cubeSize;Vl(a,R*L,g>2?L:0,L,L),_.setRenderTarget(a),T&&_.render(E,f),_.render(e,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===no||e.mapping===io;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Vl(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Af)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ug[(a-l-1)%ug.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new vi(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const g=[];let R=0;for(let N=0;N<Jr;++N){const X=N/T,P=Math.exp(-X*X/2);g.push(P),N===0?R+=P:N<y&&(R+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/R;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const b=this._sizeLods[a],V=3*b*(a>L-qs?a-L+qs:0),k=4*(this._cubeSize-b);Vl(t,V,k,3*b,2*b),d.setRenderTarget(t),d.render(x,Af)}}function WT(r){const e=[],t=[],s=[];let a=r;const l=r-qs+1+ag.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>r-qs?d=ag[c-r+qs-1]:c===0&&(d=0),s.push(d);const p=1/(f-2),_=-p,x=1+p,v=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,T=3,y=2,g=1,R=new Float32Array(T*E*S),L=new Float32Array(y*E*S),b=new Float32Array(g*E*S);for(let k=0;k<S;k++){const N=k%3*2/3-1,X=k>2?0:-1,P=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];R.set(P,T*E*k),L.set(v,y*E*k);const C=[k,k,k,k,k,k];b.set(C,g*E*k)}const V=new as;V.setAttribute("position",new yi(R,T)),V.setAttribute("uv",new yi(L,y)),V.setAttribute("faceIndex",new yi(b,g)),e.push(V),a>qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function fg(r,e,t){const s=new ss(r,e,t);return s.texture.mapping=au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function XT(r,e,t){const s=new Float32Array(Jr),a=new ne(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function dg(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function hg(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function $T(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,p=d===qf||d===Kf,_=d===no||d===io;if(p||_){let x=e.get(f);const v=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new cg(r)),x=p?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&a(S)?(t===null&&(t=new cg(r)),x=p?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function jT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ys("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function YT(r,e,t,s){const a={},l=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(x,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function d(x){const v=x.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const R=S.array;T=S.version;for(let L=0,b=R.length;L<b;L+=3){const V=R[L+0],k=R[L+1],N=R[L+2];v.push(V,k,k,N,N,V)}}else if(E!==void 0){const R=E.array;T=E.version;for(let L=0,b=R.length/3-1;L<b;L+=3){const V=L+0,k=L+1,N=L+2;v.push(V,k,k,N,N,V)}}else return;const y=new(__(v)?M_:E_)(v,1);y.version=T;const g=l.get(x);g&&e.remove(g),l.set(x,y)}function _(x){const v=l.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:_}}function qT(r,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,S){r.drawElements(s,S,l,v*c),t.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,l,v*c,E),t.update(S,s,E))}function _(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,v,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];t.update(y,s,1)}function x(v,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)p(v[g]/c,S[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,T,0,E);let g=0;for(let R=0;R<E;R++)g+=S[R]*T[R];t.update(g,s,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function KT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function ZT(r,e,t){const s=new WeakMap,a=new Xt;function l(c,f,d){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(f);if(v===void 0||v.count!==x){let C=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),y===!0&&(b=3);let V=f.attributes.position.count*b,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*k*4*x),X=new x_(N,V,k,x);X.type=Vi,X.needsUpdate=!0;const P=b*4;for(let B=0;B<x;B++){const oe=g[B],ee=R[B],fe=L[B],pe=V*k*4*B;for(let se=0;se<oe.count;se++){const le=se*P;E===!0&&(a.fromBufferAttribute(oe,se),N[pe+le+0]=a.x,N[pe+le+1]=a.y,N[pe+le+2]=a.z,N[pe+le+3]=0),T===!0&&(a.fromBufferAttribute(ee,se),N[pe+le+4]=a.x,N[pe+le+5]=a.y,N[pe+le+6]=a.z,N[pe+le+7]=0),y===!0&&(a.fromBufferAttribute(fe,se),N[pe+le+8]=a.x,N[pe+le+9]=a.y,N[pe+le+10]=a.z,N[pe+le+11]=fe.itemSize===4?a.w:1)}}v={count:x,texture:X,size:new Pt(V,k)},s.set(f,v),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const T=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",p)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function QT(r,e,t,s){let a=new WeakMap;function l(d){const p=s.render.frame,_=d.geometry,x=e.get(d,_);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return x}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const P_=new In,pg=new R_(1,1),L_=new x_,D_=new LS,I_=new A_,mg=[],gg=[],_g=new Float32Array(16),vg=new Float32Array(9),xg=new Float32Array(4);function ho(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=mg[a];if(l===void 0&&(l=new Float32Array(a),mg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function cu(r,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function JT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function iw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;xg.set(s),r.uniformMatrix2fv(this.addr,!1,xg),Jt(t,s)}}function rw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;vg.set(s),r.uniformMatrix3fv(this.addr,!1,vg),Jt(t,s)}}function sw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;_g.set(s),r.uniformMatrix4fv(this.addr,!1,_g),Jt(t,s)}}function ow(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function lw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function cw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function pw(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(pg.compareFunction=g_,l=pg):l=P_,t.setTexture2D(e||l,a)}function mw(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||D_,a)}function gw(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||I_,a)}function _w(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||L_,a)}function vw(r){switch(r){case 5126:return JT;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return uw;case 5125:return cw;case 36294:return fw;case 36295:return dw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(r,e){r.uniform1fv(this.addr,e)}function yw(r,e){const t=ho(e,this.size,2);r.uniform2fv(this.addr,t)}function Sw(r,e){const t=ho(e,this.size,3);r.uniform3fv(this.addr,t)}function Ew(r,e){const t=ho(e,this.size,4);r.uniform4fv(this.addr,t)}function Mw(r,e){const t=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tw(r,e){const t=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ww(r,e){const t=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Aw(r,e){r.uniform1iv(this.addr,e)}function Cw(r,e){r.uniform2iv(this.addr,e)}function Rw(r,e){r.uniform3iv(this.addr,e)}function bw(r,e){r.uniform4iv(this.addr,e)}function Pw(r,e){r.uniform1uiv(this.addr,e)}function Lw(r,e){r.uniform2uiv(this.addr,e)}function Dw(r,e){r.uniform3uiv(this.addr,e)}function Iw(r,e){r.uniform4uiv(this.addr,e)}function Uw(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||P_,l[c])}function Nw(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||D_,l[c])}function Fw(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||I_,l[c])}function Ow(r,e,t){const s=this.cache,a=e.length,l=cu(t,a);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||L_,l[c])}function kw(r){switch(r){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Ew;case 35674:return Mw;case 35675:return Tw;case 35676:return ww;case 5124:case 35670:return Aw;case 35667:case 35671:return Cw;case 35668:case 35672:return Rw;case 35669:case 35673:return bw;case 5125:return Pw;case 36294:return Lw;case 36295:return Dw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Ow}}class Bw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=vw(t.type)}}class zw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kw(t.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function yg(r,e){r.seq.push(e),r.map[e.id]=e}function Vw(r,e,t){const s=r.name,a=s.length;for(Lf.lastIndex=0;;){const l=Lf.exec(s),c=Lf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===a){yg(t,p===void 0?new Bw(f,r,e):new zw(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new Hw(f),yg(t,x)),t=x}}}class Jl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Vw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Sg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Gw=37297;let Ww=0;function Xw(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Eg=new at;function $w(r){Mt._getMatrix(Eg,Mt.workingColorSpace,r);const e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case tu:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Mg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Xw(r.getShaderSource(e),c)}else return a}function jw(r,e){const t=$w(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yw(r,e){let t;switch(e){case nS:t="Linear";break;case iS:t="Reinhard";break;case rS:t="Cineon";break;case sS:t="ACESFilmic";break;case aS:t="AgX";break;case lS:t="Neutral";break;case oS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new ne;function qw(){Mt.getLuminanceCoefficients(Gl);const r=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Zw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Qw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ta(r){return r!==""}function Tg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(Jw,tA)}const eA=new Map;function tA(r,e){let t=lt[e];if(t===void 0){const s=eA.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(r){return r.replace(nA,iA)}function iA(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Cg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function rA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function aA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case eS:e="ENVMAP_BLENDING_MIX";break;case tS:e="ENVMAP_BLENDING_ADD";break}return e}function lA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function uA(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=rA(t),p=sA(t),_=oA(t),x=aA(t),v=lA(t),S=Kw(t),E=Zw(l),T=a.createProgram();let y,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(y=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?Yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jw("linearToOutputTexel",t.outputColorSpace),qw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),c=Ad(c),c=Tg(c,t),c=wg(c,t),f=Ad(f),f=Tg(f,t),f=wg(f,t),c=Ag(c),f=Ag(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=R+y+c,b=R+g+f,V=Sg(a,a.VERTEX_SHADER,L),k=Sg(a,a.FRAGMENT_SHADER,b);a.attachShader(T,V),a.attachShader(T,k),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function N(B){if(r.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),ee=a.getShaderInfoLog(V).trim(),fe=a.getShaderInfoLog(k).trim();let pe=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,V,k);else{const le=Mg(a,V,"vertex"),z=Mg(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+le+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||fe==="")&&(se=!1);se&&(B.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ee,prefix:y},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(V),a.deleteShader(k),X=new Jl(a,T),P=Qw(a,T)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,Gw)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=k,this}let cA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new dA(e),t.set(e,s)),s}}class dA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function hA(r,e,t,s,a,l,c){const f=new y_,d=new fA,p=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,C,B,oe,ee){const fe=oe.fog,pe=ee.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||se),z=le&&le.mapping===au?le.image.height:null,ae=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let te=0;pe.morphAttributes.position!==void 0&&(te=1),pe.morphAttributes.normal!==void 0&&(te=2),pe.morphAttributes.color!==void 0&&(te=3);let Ne,Z,he,Ee;if(ae){const xt=gi[ae];Ne=xt.vertexShader,Z=xt.fragmentShader}else Ne=P.vertexShader,Z=P.fragmentShader,d.update(P),he=d.getVertexShaderID(P),Ee=d.getFragmentShaderID(P);const xe=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Je=ee.isBatchedMesh===!0,At=!!P.map,pt=!!P.matcap,Lt=!!le,O=!!P.aoMap,vn=!!P.lightMap,ht=!!P.bumpMap,ct=!!P.normalMap,je=!!P.displacementMap,wt=!!P.emissiveMap,We=!!P.metalnessMap,D=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,ue=P.sheen>0,Xe=P.transmission>0,Ae=w&&!!P.anisotropyMap,Fe=K&&!!P.clearcoatMap,ut=K&&!!P.clearcoatNormalMap,Me=K&&!!P.clearcoatRoughnessMap,ke=_e&&!!P.iridescenceMap,qe=_e&&!!P.iridescenceThicknessMap,tt=ue&&!!P.sheenColorMap,Be=ue&&!!P.sheenRoughnessMap,ft=!!P.specularMap,rt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,G=Xe&&!!P.transmissionMap,Ce=Xe&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,Le=P.alphaTest>0,Pe=!!P.alphaHash,st=!!P.extensions;let It=Ar;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(It=r.toneMapping);const qt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Z,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Je,batchingColor:Je&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:oo,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:pt,envMap:Lt,envMapMode:Lt&&le.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:vn,bumpMap:ht,normalMap:ct,displacementMap:v&&je,emissiveMap:wt,normalMapObjectSpace:ct&&P.normalMapType===hS,normalMapTangentSpace:ct&&P.normalMapType===dS,metalnessMap:We,roughnessMap:D,anisotropy:w,anisotropyMap:Ae,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:rt,specularIntensityMap:Tt,transmission:Xe,transmissionMap:G,thicknessMap:Ce,gradientMap:ie,opaque:P.transparent===!1&&P.blending===Qs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Pe,combine:P.combine,mapUv:At&&T(P.map.channel),aoMapUv:O&&T(P.aoMap.channel),lightMapUv:vn&&T(P.lightMap.channel),bumpMapUv:ht&&T(P.bumpMap.channel),normalMapUv:ct&&T(P.normalMap.channel),displacementMapUv:je&&T(P.displacementMap.channel),emissiveMapUv:wt&&T(P.emissiveMap.channel),metalnessMapUv:We&&T(P.metalnessMap.channel),roughnessMapUv:D&&T(P.roughnessMap.channel),anisotropyMapUv:Ae&&T(P.anisotropyMap.channel),clearcoatMapUv:Fe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(P.sheenRoughnessMap.channel),specularMapUv:ft&&T(P.specularMap.channel),specularColorMapUv:rt&&T(P.specularColorMap.channel),specularIntensityMapUv:Tt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:de&&T(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(At||de),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)C.push(B),C.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(R(C,P),L(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function R(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),P.push(f.mask)}function b(P){const C=E[P.type];let B;if(C){const oe=gi[C];B=WS.clone(oe.uniforms)}else B=P.uniforms;return B}function V(P,C){let B;for(let oe=0,ee=_.length;oe<ee;oe++){const fe=_[oe];if(fe.cacheKey===C){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new uA(r,C,P,l),_.push(B)),B}function k(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function N(P){d.remove(P)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:V,releaseProgram:k,releaseShaderCache:N,programs:_,dispose:X}}function pA(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function mA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Rg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(x,v,S,E,T,y){let g=r[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:y},r[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=S,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=T,g.group=y),e++,g}function f(x,v,S,E,T,y){const g=c(x,v,S,E,T,y);S.transmission>0?s.push(g):S.transparent===!0?a.push(g):t.push(g)}function d(x,v,S,E,T,y){const g=c(x,v,S,E,T,y);S.transmission>0?s.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function p(x,v){t.length>1&&t.sort(x||mA),s.length>1&&s.sort(v||Rg),a.length>1&&a.sort(v||Rg)}function _(){for(let x=e,v=r.length;x<v;x++){const S=r[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:_,sort:p}}function gA(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new bg,r.set(s,[c])):a>=l.length?(c=new bg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function _A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Rt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=t,t}}}function vA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xA=0;function yA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function SA(r){const e=new _A,t=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ne);const a=new ne,l=new Yt,c=new Yt;function f(p){let _=0,x=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,E=0,T=0,y=0,g=0,R=0,L=0,b=0,V=0,k=0,N=0;p.sort(yA);for(let P=0,C=p.length;P<C;P++){const B=p[P],oe=B.color,ee=B.intensity,fe=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=oe.r*ee,x+=oe.g*ee,v+=oe.b*ee;else if(B.isLightProbe){for(let se=0;se<9;se++)s.probe[se].addScaledVector(B.sh.coefficients[se],ee);N++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=B.shadow.matrix,R++}s.directional[S]=se,S++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,s.spot[T]=se;const le=B.shadow;if(B.map&&(s.spotLightMap[V]=B.map,V++,le.updateMatrices(B),B.castShadow&&k++),s.spotLightMatrix[T]=le.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,s.spotShadow[T]=z,s.spotShadowMap[T]=pe,b++}T++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=se,y++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const le=B.shadow,z=t.get(B);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,s.pointShadow[E]=z,s.pointShadowMap[E]=pe,s.pointShadowMatrix[E]=B.shadow.matrix,L++}s.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(ee),se.groundColor.copy(B.groundColor).multiplyScalar(ee),s.hemi[g]=se,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=v;const X=s.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==R||X.numPointShadows!==L||X.numSpotShadows!==b||X.numSpotMaps!==V||X.numLightProbes!==N)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=b+V-k,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=N,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=R,X.numPointShadows=L,X.numSpotShadows=b,X.numSpotMaps=V,X.numLightProbes=N,s.version=xA++)}function d(p,_){let x=0,v=0,S=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,R=p.length;g<R;g++){const L=p[g];if(L.isDirectionalLight){const b=s.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),x++}else if(L.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const b=s.point[v];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:s}}function Pg(r){const e=new SA(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function c(_){s.push(_)}function f(){e.setup(t)}function d(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function EA(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Pg(r),e.set(a,[f])):l>=c.length?(f=new Pg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`;function wA(r,e,t){let s=new C_;const a=new Pt,l=new Pt,c=new Xt,f=new QS({depthPacking:fS}),d=new JS,p={},_=t.maxTextureSize,x={[Rr]:Dn,[Dn]:Rr,[Hi]:Hi},v=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:MA,fragmentShader:TA}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new as;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i_;let g=this.type;this.render=function(k,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(wr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=g!==zi&&this.type===zi,fe=g===zi&&this.type!==zi;for(let pe=0,se=k.length;pe<se;pe++){const le=k[pe],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),l.copy(z.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ae.x),a.x=l.x*ae.x,z.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ae.y),a.y=l.y*ae.y,z.mapSize.y=l.y)),z.map===null||ee===!0||fe===!0){const U=this.type!==zi?{minFilter:ui,magFilter:ui}:{};z.map!==null&&z.map.dispose(),z.map=new ss(a.x,a.y,U),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let U=0;U<re;U++){const te=z.getViewport(U);c.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),oe.viewport(c),z.updateMatrices(le,U),s=z.getFrustum(),b(N,X,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===zi&&R(z,X),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(P,C,B)};function R(k,N){const X=e.update(T);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ss(a.x,a.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(N,null,X,v,T,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(N,null,X,S,T,null)}function L(k,N,X,P){let C=null;const B=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)C=B;else if(C=X.isPointLight===!0?d:f,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const oe=C.uuid,ee=N.uuid;let fe=p[oe];fe===void 0&&(fe={},p[oe]=fe);let pe=fe[ee];pe===void 0&&(pe=C.clone(),fe[ee]=pe,N.addEventListener("dispose",V)),C=pe}if(C.visible=N.visible,C.wireframe=N.wireframe,P===zi?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:x[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=r.properties.get(C);oe.light=X}return C}function b(k,N,X,P,C){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===zi)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),fe=k.material;if(Array.isArray(fe)){const pe=ee.groups;for(let se=0,le=pe.length;se<le;se++){const z=pe[se],ae=fe[z.materialIndex];if(ae&&ae.visible){const re=L(k,ae,P,C);k.onBeforeShadow(r,k,N,X,ee,re,z),r.renderBufferDirect(X,null,ee,re,k,z),k.onAfterShadow(r,k,N,X,ee,re,z)}}}else if(fe.visible){const pe=L(k,fe,P,C);k.onBeforeShadow(r,k,N,X,ee,pe,null),r.renderBufferDirect(X,null,ee,pe,k,null),k.onAfterShadow(r,k,N,X,ee,pe,null)}}const oe=k.children;for(let ee=0,fe=oe.length;ee<fe;ee++)b(oe[ee],N,X,P,C)}function V(k){k.target.removeEventListener("dispose",V);for(const X in p){const P=p[X],C=k.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const AA={[Vf]:Gf,[Wf]:jf,[Xf]:Yf,[to]:$f,[Gf]:Vf,[jf]:Wf,[Yf]:Xf,[$f]:to};function CA(r,e){function t(){let G=!1;const Ce=new Xt;let ie=null;const de=new Xt(0,0,0,0);return{setMask:function(Le){ie!==Le&&!G&&(r.colorMask(Le,Le,Le,Le),ie=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,st,It,qt){qt===!0&&(Le*=It,Pe*=It,st*=It),Ce.set(Le,Pe,st,It),de.equals(Ce)===!1&&(r.clearColor(Le,Pe,st,It),de.copy(Ce))},reset:function(){G=!1,ie=null,de.set(-1,0,0,0)}}}function s(){let G=!1,Ce=!1,ie=null,de=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const st=e.get("EXT_clip_control");Ce?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?xe(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!G&&(r.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ce&&(Pe=AA[Pe]),de!==Pe){switch(Pe){case Vf:r.depthFunc(r.NEVER);break;case Gf:r.depthFunc(r.ALWAYS);break;case Wf:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case Xf:r.depthFunc(r.EQUAL);break;case $f:r.depthFunc(r.GEQUAL);break;case jf:r.depthFunc(r.GREATER);break;case Yf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),r.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,ie=null,de=null,Le=null,Ce=!1}}}function a(){let G=!1,Ce=null,ie=null,de=null,Le=null,Pe=null,st=null,It=null,qt=null;return{setTest:function(xt){G||(xt?xe(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!G&&(r.stencilMask(xt),Ce=xt)},setFunc:function(xt,Tn,xn){(ie!==xt||de!==Tn||Le!==xn)&&(r.stencilFunc(xt,Tn,xn),ie=xt,de=Tn,Le=xn)},setOp:function(xt,Tn,xn){(Pe!==xt||st!==Tn||It!==xn)&&(r.stencilOp(xt,Tn,xn),Pe=xt,st=Tn,It=xn)},setLocked:function(xt){G=xt},setClear:function(xt){qt!==xt&&(r.clearStencil(xt),qt=xt)},reset:function(){G=!1,Ce=null,ie=null,de=null,Le=null,Pe=null,st=null,It=null,qt=null}}}const l=new t,c=new s,f=new a,d=new WeakMap,p=new WeakMap;let _={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,g=null,R=null,L=null,b=null,V=null,k=null,N=new Rt(0,0,0),X=0,P=!1,C=null,B=null,oe=null,ee=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),se=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),se=le>=2);let ae=null,re={};const U=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),Ne=new Xt().fromArray(U),Z=new Xt().fromArray(te);function he(G,Ce,ie,de){const Le=new Uint8Array(4),Pe=r.createTexture();r.bindTexture(G,Pe),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ie;st++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ce+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(r.DEPTH_TEST),c.setFunc(to),ht(!1),ct(Fm),xe(r.CULL_FACE),O(wr);function xe(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function we(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function Ue(G,Ce){return x[G]!==Ce?(r.bindFramebuffer(G,Ce),x[G]=Ce,G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Ce),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Je(G,Ce){let ie=S,de=!1;if(G){ie=v.get(Ce),ie===void 0&&(ie=[],v.set(Ce,ie));const Le=G.textures;if(ie.length!==Le.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Pe=0,st=Le.length;Pe<st;Pe++)ie[Pe]=r.COLOR_ATTACHMENT0+Pe;ie.length=Le.length,de=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,de=!0);de&&r.drawBuffers(ie)}function At(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const pt={[Qr]:r.FUNC_ADD,[Oy]:r.FUNC_SUBTRACT,[ky]:r.FUNC_REVERSE_SUBTRACT};pt[By]=r.MIN,pt[zy]=r.MAX;const Lt={[Hy]:r.ZERO,[Vy]:r.ONE,[Gy]:r.SRC_COLOR,[zf]:r.SRC_ALPHA,[qy]:r.SRC_ALPHA_SATURATE,[jy]:r.DST_COLOR,[Xy]:r.DST_ALPHA,[Wy]:r.ONE_MINUS_SRC_COLOR,[Hf]:r.ONE_MINUS_SRC_ALPHA,[Yy]:r.ONE_MINUS_DST_COLOR,[$y]:r.ONE_MINUS_DST_ALPHA,[Ky]:r.CONSTANT_COLOR,[Zy]:r.ONE_MINUS_CONSTANT_COLOR,[Qy]:r.CONSTANT_ALPHA,[Jy]:r.ONE_MINUS_CONSTANT_ALPHA};function O(G,Ce,ie,de,Le,Pe,st,It,qt,xt){if(G===wr){T===!0&&(we(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),G!==Fy){if(G!==y||xt!==P){if((g!==Qr||b!==Qr)&&(r.blendEquation(r.FUNC_ADD),g=Qr,b=Qr),xt)switch(G){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Om:r.blendFunc(r.ONE,r.ONE);break;case km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Om:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case km:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}R=null,L=null,V=null,k=null,N.set(0,0,0),X=0,y=G,P=xt}return}Le=Le||Ce,Pe=Pe||ie,st=st||de,(Ce!==g||Le!==b)&&(r.blendEquationSeparate(pt[Ce],pt[Le]),g=Ce,b=Le),(ie!==R||de!==L||Pe!==V||st!==k)&&(r.blendFuncSeparate(Lt[ie],Lt[de],Lt[Pe],Lt[st]),R=ie,L=de,V=Pe,k=st),(It.equals(N)===!1||qt!==X)&&(r.blendColor(It.r,It.g,It.b,qt),N.copy(It),X=qt),y=G,P=!1}function vn(G,Ce){G.side===Hi?we(r.CULL_FACE):xe(r.CULL_FACE);let ie=G.side===Dn;Ce&&(ie=!ie),ht(ie),G.blending===Qs&&G.transparent===!1?O(wr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const de=G.stencilWrite;f.setTest(de),de&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function ct(G){G!==Iy?(xe(r.CULL_FACE),G!==B&&(G===Fm?r.cullFace(r.BACK):G===Uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),B=G}function je(G){G!==oe&&(se&&r.lineWidth(G),oe=G)}function wt(G,Ce,ie){G?(xe(r.POLYGON_OFFSET_FILL),(ee!==Ce||fe!==ie)&&(r.polygonOffset(Ce,ie),ee=Ce,fe=ie)):we(r.POLYGON_OFFSET_FILL)}function We(G){G?xe(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function D(G){G===void 0&&(G=r.TEXTURE0+pe-1),ae!==G&&(r.activeTexture(G),ae=G)}function w(G,Ce,ie){ie===void 0&&(ae===null?ie=r.TEXTURE0+pe-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==G||de.texture!==Ce)&&(ae!==ie&&(r.activeTexture(ie),ae=ie),r.bindTexture(G,Ce||Ee[G]),de.type=G,de.texture=Ce)}function K(){const G=re[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){Ne.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function Be(G){Z.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ft(G,Ce){let ie=p.get(Ce);ie===void 0&&(ie=new WeakMap,p.set(Ce,ie));let de=ie.get(G);de===void 0&&(de=r.getUniformBlockIndex(Ce,G.name),ie.set(G,de))}function rt(G,Ce){const de=p.get(Ce).get(G);d.get(Ce)!==de&&(r.uniformBlockBinding(Ce,de,G.__bindingPointIndex),d.set(Ce,de))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ae=null,re={},x={},v=new WeakMap,S=[],E=null,T=!1,y=null,g=null,R=null,L=null,b=null,V=null,k=null,N=new Rt(0,0,0),X=0,P=!1,C=null,B=null,oe=null,ee=null,fe=null,Ne.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:xe,disable:we,bindFramebuffer:Ue,drawBuffers:Je,useProgram:At,setBlending:O,setMaterial:vn,setFlipSided:ht,setCullFace:ct,setLineWidth:je,setPolygonOffset:wt,setScissorTest:We,activeTexture:D,bindTexture:w,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:ut,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:Tt}}function RA(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,w){return S?new OffscreenCanvas(D,w):iu("canvas")}function T(D,w,K){let me=1;const _e=We(D);if((_e.width>K||_e.height>K)&&(me=K/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);x===void 0&&(x=E(ue,Xe));const Ae=w?E(ue,Xe):x;return Ae.width=ue,Ae.height=Xe,Ae.getContext("2d").drawImage(D,0,0,ue,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Xe+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function y(D){return D.generateMipmaps}function g(D){r.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,w,K,me,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=w;if(w===r.RED&&(K===r.FLOAT&&(ue=r.R32F),K===r.HALF_FLOAT&&(ue=r.R16F),K===r.UNSIGNED_BYTE&&(ue=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.R8UI),K===r.UNSIGNED_SHORT&&(ue=r.R16UI),K===r.UNSIGNED_INT&&(ue=r.R32UI),K===r.BYTE&&(ue=r.R8I),K===r.SHORT&&(ue=r.R16I),K===r.INT&&(ue=r.R32I)),w===r.RG&&(K===r.FLOAT&&(ue=r.RG32F),K===r.HALF_FLOAT&&(ue=r.RG16F),K===r.UNSIGNED_BYTE&&(ue=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RG8UI),K===r.UNSIGNED_SHORT&&(ue=r.RG16UI),K===r.UNSIGNED_INT&&(ue=r.RG32UI),K===r.BYTE&&(ue=r.RG8I),K===r.SHORT&&(ue=r.RG16I),K===r.INT&&(ue=r.RG32I)),w===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),K===r.UNSIGNED_INT&&(ue=r.RGB32UI),K===r.BYTE&&(ue=r.RGB8I),K===r.SHORT&&(ue=r.RGB16I),K===r.INT&&(ue=r.RGB32I)),w===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),K===r.UNSIGNED_INT&&(ue=r.RGBA32UI),K===r.BYTE&&(ue=r.RGBA8I),K===r.SHORT&&(ue=r.RGBA16I),K===r.INT&&(ue=r.RGBA32I)),w===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),w===r.RGBA){const Xe=_e?tu:Mt.getTransfer(me);K===r.FLOAT&&(ue=r.RGBA32F),K===r.HALF_FLOAT&&(ue=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ue=Xe===Ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(D,w){let K;return D?w===null||w===rs||w===ro?K=r.DEPTH24_STENCIL8:w===Vi?K=r.DEPTH32F_STENCIL8:w===ra&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rs||w===ro?K=r.DEPTH_COMPONENT24:w===Vi?K=r.DEPTH_COMPONENT32F:w===ra&&(K=r.DEPTH_COMPONENT16),K}function V(D,w){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ui&&D.minFilter!==_i?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function k(D){const w=D.target;w.removeEventListener("dispose",k),X(w),w.isVideoTexture&&_.delete(w)}function N(D){const w=D.target;w.removeEventListener("dispose",N),C(w)}function X(D){const w=s.get(D);if(w.__webglInit===void 0)return;const K=D.source,me=v.get(K);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(D),Object.keys(me).length===0&&v.delete(K)}s.remove(D)}function P(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const K=D.source,me=v.get(K);delete me[w.__cacheKey],c.memory.textures--}function C(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=D.textures;for(let me=0,_e=K.length;me<_e;me++){const ue=s.get(K[me]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),c.memory.textures--),s.remove(K[me])}s.remove(D)}let B=0;function oe(){B=0}function ee(){const D=B;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),B+=1,D}function fe(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function pe(D,w){const K=s.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,D,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function se(D,w){const K=s.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function le(D,w){const K=s.get(D);if(D.version>0&&K.__version!==D.version){Z(K,D,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function z(D,w){const K=s.get(D);if(D.version>0&&K.__version!==D.version){he(K,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const ae={[Zf]:r.REPEAT,[es]:r.CLAMP_TO_EDGE,[Qf]:r.MIRRORED_REPEAT},re={[ui]:r.NEAREST,[uS]:r.NEAREST_MIPMAP_NEAREST,[El]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[nf]:r.LINEAR_MIPMAP_NEAREST,[ts]:r.LINEAR_MIPMAP_LINEAR},U={[pS]:r.NEVER,[yS]:r.ALWAYS,[mS]:r.LESS,[g_]:r.LEQUAL,[gS]:r.EQUAL,[xS]:r.GEQUAL,[_S]:r.GREATER,[vS]:r.NOTEQUAL};function te(D,w){if(w.type===Vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_i||w.magFilter===nf||w.magFilter===El||w.magFilter===ts||w.minFilter===_i||w.minFilter===nf||w.minFilter===El||w.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ae[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ae[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ae[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,re[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==El&&w.minFilter!==ts||w.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(D,w){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const ue=fe(w);if(ue!==D.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,K=!0),_e[ue].usedTimes++;const Xe=_e[D.__cacheKey];Xe!==void 0&&(_e[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),D.__cacheKey=ue,D.__webglTexture=_e[ue].texture}return K}function Z(D,w,K){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const _e=Ne(D,w),ue=w.source;t.bindTexture(me,D.__webglTexture,r.TEXTURE0+K);const Xe=s.get(ue);if(ue.version!==Xe.__version||_e===!0){t.activeTexture(r.TEXTURE0+K);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===Mr?null:Mt.getPrimaries(w.colorSpace),ut=w.colorSpace===Mr||Ae===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=T(w.image,!1,a.maxTextureSize);Me=wt(w,Me);const ke=l.convert(w.format,w.colorSpace),qe=l.convert(w.type);let tt=L(w.internalFormat,ke,qe,w.colorSpace,w.isVideoTexture);te(me,w);let Be;const ft=w.mipmaps,rt=w.isVideoTexture!==!0,Tt=Xe.__version===void 0||_e===!0,G=ue.dataReady,Ce=V(w,Me);if(w.isDepthTexture)tt=b(w.format===so,w.type),Tt&&(rt?t.texStorage2D(r.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,qe,null));else if(w.isDataTexture)if(ft.length>0){rt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],rt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ie,tt,Be.width,Be.height,0,ke,qe,Be.data);w.generateMipmaps=!1}else rt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Ce,tt,Me.width,Me.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,qe,Me.data)):t.texImage2D(r.TEXTURE_2D,0,tt,Me.width,Me.height,0,ke,qe,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,tt,ft[0].width,ft[0].height,Me.depth);for(let ie=0,de=ft.length;ie<de;ie++)if(Be=ft[ie],w.format!==li)if(ke!==null)if(rt){if(G)if(w.layerUpdates.size>0){const Le=og(Be.width,Be.height,w.format,w.type);for(const Pe of w.layerUpdates){const st=Be.data.subarray(Pe*Le/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Pe,Be.width,Be.height,1,ke,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,tt,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Be.width,Be.height,Me.depth,ke,qe,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,tt,Be.width,Be.height,Me.depth,0,ke,qe,Be.data)}else{rt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],w.format!==li?ke!==null?rt?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(r.TEXTURE_2D,ie,tt,Be.width,Be.height,0,ke,qe,Be.data)}else if(w.isDataArrayTexture)if(rt){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,tt,Me.width,Me.height,Me.depth),G)if(w.layerUpdates.size>0){const ie=og(Me.width,Me.height,w.format,w.type);for(const de of w.layerUpdates){const Le=Me.data.subarray(de*ie/Me.data.BYTES_PER_ELEMENT,(de+1)*ie/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,ke,qe,Le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(w.isData3DTexture)rt?(Tt&&t.texStorage3D(r.TEXTURE_3D,Ce,tt,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,qe,Me.data)):t.texImage3D(r.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,ke,qe,Me.data);else if(w.isFramebufferTexture){if(Tt)if(rt)t.texStorage2D(r.TEXTURE_2D,Ce,tt,Me.width,Me.height);else{let ie=Me.width,de=Me.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(r.TEXTURE_2D,Le,tt,ie,de,0,ke,qe,null),ie>>=1,de>>=1}}else if(ft.length>0){if(rt&&Tt){const ie=We(ft[0]);t.texStorage2D(r.TEXTURE_2D,Ce,tt,ie.width,ie.height)}for(let ie=0,de=ft.length;ie<de;ie++)Be=ft[ie],rt?G&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke,qe,Be):t.texImage2D(r.TEXTURE_2D,ie,tt,ke,qe,Be);w.generateMipmaps=!1}else if(rt){if(Tt){const ie=We(Me);t.texStorage2D(r.TEXTURE_2D,Ce,tt,ie.width,ie.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,qe,Me)}else t.texImage2D(r.TEXTURE_2D,0,tt,ke,qe,Me);y(w)&&g(me),Xe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function he(D,w,K){if(w.image.length!==6)return;const me=Ne(D,w),_e=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+K);const ue=s.get(_e);if(_e.version!==ue.__version||me===!0){t.activeTexture(r.TEXTURE0+K);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ae=w.colorSpace===Mr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Mr||Xe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!ut&&!Me?ke[de]=T(w.image[de],!0,a.maxCubemapSize):ke[de]=Me?w.image[de].image:w.image[de],ke[de]=wt(w,ke[de]);const qe=ke[0],tt=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ft=L(w.internalFormat,tt,Be,w.colorSpace),rt=w.isVideoTexture!==!0,Tt=ue.__version===void 0||me===!0,G=_e.dataReady;let Ce=V(w,qe);te(r.TEXTURE_CUBE_MAP,w);let ie;if(ut){rt&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,qe.width,qe.height);for(let de=0;de<6;de++){ie=ke[de].mipmaps;for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];w.format!==li?tt!==null?rt?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,tt,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,tt,Be,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ft,Pe.width,Pe.height,0,tt,Be,Pe.data)}}}else{if(ie=w.mipmaps,rt&&Tt){ie.length>0&&Ce++;const de=We(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Me){rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,tt,Be,ke[de].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,ke[de].width,ke[de].height,0,tt,Be,ke[de].data);for(let Le=0;Le<ie.length;Le++){const st=ie[Le].image[de].image;rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,st.width,st.height,tt,Be,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ft,st.width,st.height,0,tt,Be,st.data)}}else{rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,tt,Be,ke[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,tt,Be,ke[de]);for(let Le=0;Le<ie.length;Le++){const Pe=ie[Le];rt?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,tt,Be,Pe.image[de]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ft,tt,Be,Pe.image[de])}}}y(w)&&g(r.TEXTURE_CUBE_MAP),ue.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,K,me,_e,ue){const Xe=l.convert(K.format,K.colorSpace),Ae=l.convert(K.type),Fe=L(K.internalFormat,Xe,Ae,K.colorSpace),ut=s.get(w),Me=s.get(K);if(Me.__renderTarget=w,!ut.__hasExternalTextures){const ke=Math.max(1,w.width>>ue),qe=Math.max(1,w.height>>ue);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,Fe,ke,qe,w.depth,0,Xe,Ae,null):t.texImage2D(_e,ue,Fe,ke,qe,0,Xe,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Me.__webglTexture,0,ht(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Me.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(D,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,ue=b(w.stencilBuffer,_e),Xe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=ht(w);ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ue,w.width,w.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ue,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ue,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,D)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const ue=me[_e],Xe=l.convert(ue.format,ue.colorSpace),Ae=l.convert(ue.type),Fe=L(ue.internalFormat,Xe,Ae,ue.colorSpace),ut=ht(w);K&&ct(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Fe,w.width,w.height):ct(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const _e=me.__webglTexture,ue=ht(w);if(w.depthTexture.format===Js)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(w.depthTexture.format===so)ct(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const w=s.get(D),K=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");we(w.__webglFramebuffer,D)}else if(K){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),xe(w.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),xe(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,_e)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(D,w,K){const me=s.get(D);w!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ue(D)}function At(D){const w=D.texture,K=s.get(D),me=s.get(w);D.addEventListener("dispose",N);const _e=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,c.memory.textures++),ue){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)K.__webglFramebuffer[Ae][Fe]=r.createFramebuffer()}else K.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ut=s.get(_e[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ct(D)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];K.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const ut=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=L(Fe.internalFormat,ut,Me,Fe.colorSpace,D.isXRRenderTarget===!0),qe=ht(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ke,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),te(r.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Ae][Fe],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(K.__webglFramebuffer[Ae],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(w)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const ut=_e[Ae],Me=s.get(ut);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),te(r.TEXTURE_2D,ut),Ee(K.__webglFramebuffer,D,ut,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),y(ut)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),te(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Fe],D,w,r.COLOR_ATTACHMENT0,Ae,Fe);else Ee(K.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,Ae,0);y(w)&&g(Ae),t.unbindTexture()}D.depthBuffer&&Ue(D)}function pt(D){const w=D.textures;for(let K=0,me=w.length;K<me;K++){const _e=w[K];if(y(_e)){const ue=R(D),Xe=s.get(_e).__webglTexture;t.bindTexture(ue,Xe),g(ue),t.unbindTexture()}}}const Lt=[],O=[];function vn(D){if(D.samples>0){if(ct(D)===!1){const w=D.textures,K=D.width,me=D.height;let _e=r.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(D),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ut=s.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,K,me,0,0,K,me,_e,r.NEAREST),d===!0&&(Lt.length=0,O.length=0,Lt.push(r.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Lt.push(ue),O.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const ut=s.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ut,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ht(D){return Math.min(a.maxSamples,D.samples)}function ct(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(D){const w=c.render.frame;_.get(D)!==w&&(_.set(D,w),D.update())}function wt(D,w){const K=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==oo&&K!==Mr&&(Mt.getTransfer(K)===Ct?(me!==li||_e!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Je,this.setupRenderTarget=At,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function bA(r,e){function t(s,a=Mr){let l;const c=Mt.getTransfer(a);if(s===$i)return r.UNSIGNED_BYTE;if(s===Od)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===l_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===o_)return r.BYTE;if(s===a_)return r.SHORT;if(s===ra)return r.UNSIGNED_SHORT;if(s===Fd)return r.INT;if(s===rs)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===la)return r.HALF_FLOAT;if(s===u_)return r.ALPHA;if(s===c_)return r.RGB;if(s===li)return r.RGBA;if(s===f_)return r.LUMINANCE;if(s===d_)return r.LUMINANCE_ALPHA;if(s===Js)return r.DEPTH_COMPONENT;if(s===so)return r.DEPTH_STENCIL;if(s===h_)return r.RED;if(s===Bd)return r.RED_INTEGER;if(s===p_)return r.RG;if(s===zd)return r.RG_INTEGER;if(s===Hd)return r.RGBA_INTEGER;if(s===Yl||s===ql||s===Kl||s===Zl)if(c===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jf||s===ed||s===td||s===nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Jf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===rd||s===sd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===id||s===rd)return c===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===sd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===od||s===ad||s===ld||s===ud||s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===od)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ad)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ud)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_d)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return c===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ql||s===yd||s===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Ql)return c===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===m_||s===Ed||s===Md||s===Td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ql)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ed)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Md)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ro?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const PA={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),g=this._getHandJoint(p,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=_.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new zl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new In,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new br({vertexShader:LA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends co{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,p=null,_=null,x=null,v=null,S=null,E=null;const T=new IA,y=t.getContextAttributes();let g=null,R=null;const L=[],b=[],V=new Pt;let k=null;const N=new Kn;N.viewport=new Xt;const X=new Kn;X.viewport=new Xt;const P=[N,X],C=new tE;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=L[Z];return he===void 0&&(he=new Df,L[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=L[Z];return he===void 0&&(he=new Df,L[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=L[Z];return he===void 0&&(he=new Df,L[Z]=he),he.getHandSpace()};function ee(Z){const he=b.indexOf(Z.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||c),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const he=b[Z];he!==null&&(b[Z]=null,L[Z].disconnect(he))}B=null,oe=null,T.reset(),e.setRenderTarget(g),S=null,v=null,x=null,a=null,R=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(V),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Ee=null,xe=null,we=null;y.depth&&(we=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?so:Js,xe=y.stencil?ro:rs);const Ue={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};x=new XRWebGLBinding(a,t),v=x.createProjectionLayer(Ue),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ss(v.textureWidth,v.textureHeight,{format:li,type:$i,depthTexture:new R_(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new ss(S.framebufferWidth,S.framebufferHeight,{format:li,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}R.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await a.requestReferenceSpace(f),Ne.setContext(a),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(Z){for(let he=0;he<Z.removed.length;he++){const Ee=Z.removed[he],xe=b.indexOf(Ee);xe>=0&&(b[xe]=null,L[xe].disconnect(Ee))}for(let he=0;he<Z.added.length;he++){const Ee=Z.added[he];let xe=b.indexOf(Ee);if(xe===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=b.length){b.push(Ee),xe=Ue;break}else if(b[Ue]===null){b[Ue]=Ee,xe=Ue;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const se=new ne,le=new ne;function z(Z,he,Ee){se.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const xe=se.distanceTo(le),we=he.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Je=we[14]/(we[10]-1),At=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],Lt=(we[9]-1)/we[5],O=(we[8]-1)/we[0],vn=(Ue[8]+1)/Ue[0],ht=Je*O,ct=Je*vn,je=xe/(-O+vn),wt=je*-O;if(he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Je+je,D=At+je,w=ht-wt,K=ct+(xe-wt),me=pt*At/D*We,_e=Lt*At/D*We;Z.projectionMatrix.makePerspective(w,K,me,_e,We,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let he=Z.near,Ee=Z.far;T.texture!==null&&(T.depthNear>0&&(he=T.depthNear),T.depthFar>0&&(Ee=T.depthFar)),C.near=X.near=N.near=he,C.far=X.far=N.far=Ee,(B!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,oe=C.far),N.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,C.layers.mask=N.layers.mask|X.layers.mask;const xe=Z.parent,we=C.cameras;ae(C,xe);for(let Ue=0;Ue<we.length;Ue++)ae(we[Ue],xe);we.length===2?z(C,N,X):C.projectionMatrix.copy(N.projectionMatrix),re(Z,C,xe)};function re(Z,he,Ee){Ee===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Z){d=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let U=null;function te(Z,he){if(_=he.getViewerPose(p||c),E=he,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Je=Ee[Ue];let At=null;if(S!==null)At=S.getViewport(Je);else{const Lt=x.getViewSubImage(v,Je);At=Lt.viewport,Ue===0&&(e.setRenderTargetTextures(R,Lt.colorTexture,v.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(R))}let pt=P[Ue];pt===void 0&&(pt=new Kn,pt.layers.enable(Ue),pt.viewport=new Xt,P[Ue]=pt),pt.matrix.fromArray(Je.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Je.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(At.x,At.y,At.width,At.height),Ue===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(pt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=x.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=b[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,he,p||c)}U&&U(Z,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ne=new b_;Ne.setAnimationLoop(te),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const qr=new ji,NA=new Yt;function FA(r,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,T_(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,R,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),x(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),v(y,g),g.isMeshPhysicalMaterial&&S(y,g,b)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(c(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?d(y,g,R,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Dn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Dn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const R=e.get(g),L=R.envMap,b=R.envMapRotation;L&&(y.envMap.value=L,qr.copy(b),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(qr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function c(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function d(y,g,R,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*R,y.scale.value=L*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,R){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const R=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function OA(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const b=L.program;s.uniformBlockBinding(R,b)}function p(R,L){let b=a[R.id];b===void 0&&(E(R),b=_(R),a[R.id]=b,R.addEventListener("dispose",y));const V=L.program;s.updateUBOMapping(R,V);const k=e.render.frame;l[R.id]!==k&&(v(R),l[R.id]=k)}function _(R){const L=x();R.__bindingPointIndex=L;const b=r.createBuffer(),V=R.__size,k=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,V,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function x(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const L=a[R.id],b=R.uniforms,V=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let k=0,N=b.length;k<N;k++){const X=Array.isArray(b[k])?b[k]:[b[k]];for(let P=0,C=X.length;P<C;P++){const B=X[P];if(S(B,k,P,V)===!0){const oe=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let pe=0;pe<ee.length;pe++){const se=ee[pe],le=T(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,oe+fe,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(R,L,b,V){const k=R.value,N=L+"_"+b;if(V[N]===void 0)return typeof k=="number"||typeof k=="boolean"?V[N]=k:V[N]=k.clone(),!0;{const X=V[N];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return V[N]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function E(R){const L=R.uniforms;let b=0;const V=16;for(let N=0,X=L.length;N<X;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let C=0,B=P.length;C<B;C++){const oe=P[C],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,pe=ee.length;fe<pe;fe++){const se=ee[fe],le=T(se),z=b%V,ae=z%le.boundary,re=z+ae;b+=ae,re!==0&&V-re<le.storage&&(b+=V-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=b,b+=le.storage}}}const k=b%V;return k>0&&(b+=V-k),R.__size=b,R.__cache={},this}function T(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),L}function y(R){const L=R.target;L.removeEventListener("dispose",y);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function g(){for(const R in a)r.deleteBuffer(a[R]);c=[],a={},l={}}return{bind:d,update:p,dispose:g}}class kA{constructor(e={}){const{canvas:t=ES(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const R=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=Ar,this.toneMappingExposure=1;const b=this;let V=!1,k=0,N=0,X=null,P=-1,C=null;const B=new Xt,oe=new Xt;let ee=null;const fe=new Rt(0);let pe=0,se=t.width,le=t.height,z=1,ae=null,re=null;const U=new Xt(0,0,se,le),te=new Xt(0,0,se,le);let Ne=!1;const Z=new C_;let he=!1,Ee=!1;this.transmissionResolutionScale=1;const xe=new Yt,we=new Yt,Ue=new ne,Je=new Xt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return X===null?z:1}let O=s;function vn(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=vn(W,A),O===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,ct,je,wt,We,D,w,K,me,_e,ue,Xe,Ae,Fe,ut,Me,ke,qe,tt,Be,ft,rt,Tt,G;function Ce(){ht=new jT(O),ht.init(),rt=new bA(O,ht),ct=new HT(O,ht,e,rt),je=new CA(O,ht),ct.reverseDepthBuffer&&v&&je.buffers.depth.setReversed(!0),wt=new KT(O),We=new pA,D=new RA(O,ht,je,We,ct,rt,wt),w=new GT(b),K=new $T(b),me=new iE(O),Tt=new BT(O,me),_e=new YT(O,me,wt,Tt),ue=new QT(O,_e,me,wt),tt=new ZT(O,ct,D),Me=new VT(We),Xe=new hA(b,w,K,ht,ct,Tt,Me),Ae=new FA(b,We),Fe=new gA,ut=new EA(ht),qe=new kT(b,w,K,je,ue,S,d),ke=new wA(b,ue,ct),G=new OA(O,wt,ct,je),Be=new zT(O,ht,wt),ft=new qT(O,ht,wt),wt.programs=Xe.programs,b.capabilities=ct,b.extensions=ht,b.properties=We,b.renderLists=Fe,b.shadowMap=ke,b.state=je,b.info=wt}Ce();const ie=new UA(b,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(se,le,!1))},this.getSize=function(A){return A.set(se,le)},this.setSize=function(A,W,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,le=W,t.width=Math.floor(A*z),t.height=Math.floor(W*z),Q===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*z,le*z).floor()},this.setDrawingBufferSize=function(A,W,Q){se=A,le=W,z=Q,t.width=Math.floor(A*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,W,Q,Y){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,W,Q,Y),je.viewport(B.copy(U).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,W,Q,Y){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,W,Q,Y),je.scissor(oe.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){je.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,W=!0,Q=!0){let Y=0;if(A){let $=!1;if(X!==null){const Se=X.texture.format;$=Se===Hd||Se===zd||Se===Bd}if($){const Se=X.texture.type,Re=Se===$i||Se===rs||Se===ra||Se===ro||Se===Od||Se===kd,De=qe.getClearColor(),ze=qe.getClearAlpha(),nt=De.r,et=De.g,Ve=De.b;Re?(E[0]=nt,E[1]=et,E[2]=Ve,E[3]=ze,O.clearBufferuiv(O.COLOR,0,E)):(T[0]=nt,T[1]=et,T[2]=Ve,T[3]=ze,O.clearBufferiv(O.COLOR,0,T))}else Y|=O.COLOR_BUFFER_BIT}W&&(Y|=O.DEPTH_BUFFER_BIT),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Fe.dispose(),ut.dispose(),We.dispose(),w.dispose(),K.dispose(),ue.dispose(),Tt.dispose(),G.dispose(),Xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ls),ie.removeEventListener("sessionend",qi),Mi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=wt.autoReset,W=ke.enabled,Q=ke.autoUpdate,Y=ke.needsUpdate,$=ke.type;Ce(),wt.autoReset=A,ke.enabled=W,ke.autoUpdate=Q,ke.needsUpdate=Y,ke.type=$}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){const W=A.target;W.removeEventListener("dispose",st),It(W)}function It(A){qt(A),We.remove(A)}function qt(A){const W=We.get(A).programs;W!==void 0&&(W.forEach(function(Q){Xe.releaseProgram(Q)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Q,Y,$,Se){W===null&&(W=At);const Re=$.isMesh&&$.matrixWorld.determinant()<0,De=pa(A,W,Q,Y,$);je.setMaterial(Y,Re);let ze=Q.index,nt=1;if(Y.wireframe===!0){if(ze=_e.getWireframeAttribute(Q),ze===void 0)return;nt=2}const et=Q.drawRange,Ve=Q.attributes.position;let gt=et.start*nt,ot=(et.start+et.count)*nt;Se!==null&&(gt=Math.max(gt,Se.start*nt),ot=Math.min(ot,(Se.start+Se.count)*nt)),ze!==null?(gt=Math.max(gt,0),ot=Math.min(ot,ze.count)):Ve!=null&&(gt=Math.max(gt,0),ot=Math.min(ot,Ve.count));const Ht=ot-gt;if(Ht<0||Ht===1/0)return;Tt.setup($,Y,De,Q,ze);let Ft,vt=Be;if(ze!==null&&(Ft=me.get(ze),vt=ft,vt.setIndex(Ft)),$.isMesh)Y.wireframe===!0?(je.setLineWidth(Y.wireframeLinewidth*Lt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if($.isLine){let Ye=Y.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Lt()),$.isLineSegments?vt.setMode(O.LINES):$.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else $.isPoints?vt.setMode(O.POINTS):$.isSprite&&vt.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)vt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ye=$._multiDrawStarts,Vt=$._multiDrawCounts,mt=$._multiDrawCount,cn=ze?me.get(ze).bytesPerElement:1,Zi=We.get(Y).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Zi.setValue(O,"_gl_DrawID",yn),vt.render(Ye[yn]/cn,Vt[yn])}else if($.isInstancedMesh)vt.renderInstances(gt,Ht,$.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Vt=Math.min(Q.instanceCount,Ye);vt.renderInstances(gt,Ht,Vt)}else vt.render(gt,Ht)};function xt(A,W,Q){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,us(A,W,Q),A.side=Rr,A.needsUpdate=!0,us(A,W,Q),A.side=Hi):us(A,W,Q)}this.compile=function(A,W,Q=null){Q===null&&(Q=A),g=ut.get(Q),g.init(W),L.push(g),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),A!==Q&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const Y=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Se=$.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];xt(De,Q,$),Y.add(De)}else xt(Se,Q,$),Y.add(Se)}),L.pop(),g=null,Y},this.compileAsync=function(A,W,Q=null){const Y=this.compile(A,W,Q);return new Promise($=>{function Se(){if(Y.forEach(function(Re){We.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){$(A);return}setTimeout(Se,10)}ht.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tn=null;function xn(A){Tn&&Tn(A)}function ls(){Mi.stop()}function qi(){Mi.start()}const Mi=new b_;Mi.setAnimationLoop(xn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Tn=A,ie.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},ie.addEventListener("sessionstart",ls),ie.addEventListener("sessionend",qi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,X),g=ut.get(A,L.length),g.init(W),L.push(g),we.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,he=Me.init(this.clippingPlanes,Ee),y=Fe.get(A,R.length),y.init(),R.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Ti(Se,W,-1/0,b.sortObjects)}Ti(A,W,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ae,re),pt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,pt&&qe.addToRenderList(y,A),this.info.render.frame++,he===!0&&Me.beginShadows();const Q=g.state.shadowsArray;ke.render(Q,A,W),he===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,$=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if($.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const ze=Se[Re];Lr(Y,$,A,ze)}pt&&qe.render(A);for(let Re=0,De=Se.length;Re<De;Re++){const ze=Se[Re];Pr(y,A,ze,ze.viewport)}}else $.length>0&&Lr(Y,$,A,W),pt&&qe.render(A),Pr(y,A,W);X!==null&&N===0&&(D.updateMultisampleRenderTarget(X),D.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(b,A,W),Tt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&Me.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Ti(A,W,Q,Y){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){Y&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Re=ue.update(A),De=A.material;De.visible&&y.push(A,Re,De,Q,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ue.update(A),De=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const ze=Re.groups;for(let nt=0,et=ze.length;nt<et;nt++){const Ve=ze[nt],gt=De[Ve.materialIndex];gt&&gt.visible&&y.push(A,Re,gt,Q,Je.z,Ve)}}else De.visible&&y.push(A,Re,De,Q,Je.z,null)}}const Se=A.children;for(let Re=0,De=Se.length;Re<De;Re++)Ti(Se[Re],W,Q,Y)}function Pr(A,W,Q,Y){const $=A.opaque,Se=A.transmissive,Re=A.transparent;g.setupLightsView(Q),he===!0&&Me.setGlobalState(b.clippingPlanes,Q),Y&&je.viewport(B.copy(Y)),$.length>0&&Ki($,W,Q),Se.length>0&&Ki(Se,W,Q),Re.length>0&&Ki(Re,W,Q),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Lr(A,W,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new ss(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?la:$i,minFilter:ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[Y.id],Re=Y.viewport||B;Se.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const De=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(fe),pe=b.getClearAlpha(),pe<1&&b.setClearColor(16777215,.5),b.clear(),pt&&qe.render(Q);const ze=b.toneMapping;b.toneMapping=Ar;const nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),he===!0&&Me.setGlobalState(b.clippingPlanes,Y),Ki(A,Q,Y),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,gt=W.length;Ve<gt;Ve++){const ot=W[Ve],Ht=ot.object,Ft=ot.geometry,vt=ot.material,Ye=ot.group;if(vt.side===Hi&&Ht.layers.test(Y.layers)){const Vt=vt.side;vt.side=Dn,vt.needsUpdate=!0,da(Ht,Q,Y,Ft,vt,Ye),vt.side=Vt,vt.needsUpdate=!0,et=!0}}et===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}b.setRenderTarget(De),b.setClearColor(fe,pe),nt!==void 0&&(Y.viewport=nt),b.toneMapping=ze}function Ki(A,W,Q){const Y=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Se=A.length;$<Se;$++){const Re=A[$],De=Re.object,ze=Re.geometry,nt=Y===null?Re.material:Y,et=Re.group;De.layers.test(Q.layers)&&da(De,W,Q,ze,nt,et)}}function da(A,W,Q,Y,$,Se){A.onBeforeRender(b,W,Q,Y,$,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(b,W,Q,Y,A,Se),$.transparent===!0&&$.side===Hi&&$.forceSinglePass===!1?($.side=Dn,$.needsUpdate=!0,b.renderBufferDirect(Q,W,Y,$,A,Se),$.side=Rr,$.needsUpdate=!0,b.renderBufferDirect(Q,W,Y,$,A,Se),$.side=Hi):b.renderBufferDirect(Q,W,Y,$,A,Se),A.onAfterRender(b,W,Q,Y,$,Se)}function us(A,W,Q){W.isScene!==!0&&(W=At);const Y=We.get(A),$=g.state.lights,Se=g.state.shadowsArray,Re=$.state.version,De=Xe.getParameters(A,$.state,Se,W,Q),ze=Xe.getProgramCacheKey(De);let nt=Y.programs;Y.environment=A.isMeshStandardMaterial?W.environment:null,Y.fog=W.fog,Y.envMap=(A.isMeshStandardMaterial?K:w).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",st),nt=new Map,Y.programs=nt);let et=nt.get(ze);if(et!==void 0){if(Y.currentProgram===et&&Y.lightsStateVersion===Re)return ci(A,De),et}else De.uniforms=Xe.getUniforms(A),A.onBeforeCompile(De,b),et=Xe.acquireProgram(De,ze),nt.set(ze,et),Y.uniforms=De.uniforms;const Ve=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),ci(A,De),Y.needsLights=fu(A),Y.lightsStateVersion=Re,Y.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.currentProgram=et,Y.uniformsList=null,et}function ha(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Jl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ci(A,W){const Q=We.get(A);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function pa(A,W,Q,Y,$){W.isScene!==!0&&(W=At),D.resetTextureUnits();const Se=W.fog,Re=Y.isMeshStandardMaterial?W.environment:null,De=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:oo,ze=(Y.isMeshStandardMaterial?K:w).get(Y.envMap||Re),nt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!Q.morphAttributes.position,gt=!!Q.morphAttributes.normal,ot=!!Q.morphAttributes.color;let Ht=Ar;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ht=b.toneMapping);const Ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=Ft!==void 0?Ft.length:0,Ye=We.get(Y),Vt=g.state.lights;if(he===!0&&(Ee===!0||A!==C)){const an=A===C&&Y.id===P;Me.setState(Y,A,an)}let mt=!1;Y.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Vt.state.version||Ye.outputColorSpace!==De||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==ze||Y.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==et||Ye.morphTargets!==Ve||Ye.morphNormals!==gt||Ye.morphColors!==ot||Ye.toneMapping!==Ht||Ye.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,Ye.__version=Y.version);let cn=Ye.currentProgram;mt===!0&&(cn=us(Y,W,$));let Zi=!1,yn=!1,wi=!1;const bt=cn.getUniforms(),fn=Ye.uniforms;if(je.useProgram(cn.program)&&(Zi=!0,yn=!0,wi=!0),Y.id!==P&&(P=Y.id,yn=!0),Zi||C!==A){je.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),TS(xe),wS(xe),bt.setValue(O,"projectionMatrix",xe)):bt.setValue(O,"projectionMatrix",A.projectionMatrix),bt.setValue(O,"viewMatrix",A.matrixWorldInverse);const tn=bt.map.cameraPosition;tn!==void 0&&tn.setValue(O,Ue.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,yn=!0,wi=!0)}if($.isSkinnedMesh){bt.setOptional(O,$,"bindMatrix"),bt.setOptional(O,$,"bindMatrixInverse");const an=$.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),bt.setValue(O,"boneTexture",an.boneTexture,D))}$.isBatchedMesh&&(bt.setOptional(O,$,"batchingTexture"),bt.setValue(O,"batchingTexture",$._matricesTexture,D),bt.setOptional(O,$,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",$._indirectTexture,D),bt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",$._colorsTexture,D));const en=Q.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&tt.update($,Q,cn),(yn||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,bt.setValue(O,"receiveShadow",$.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(fn.envMap.value=ze,fn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&W.environment!==null&&(fn.envMapIntensity.value=W.environmentIntensity),yn&&(bt.setValue(O,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&ma(fn,wi),Se&&Y.fog===!0&&Ae.refreshFogUniforms(fn,Se),Ae.refreshMaterialUniforms(fn,Y,z,le,g.state.transmissionRenderTarget[A.id]),Jl.upload(O,ha(Ye),fn,D)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Jl.upload(O,ha(Ye),fn,D),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(O,"center",$.center),bt.setValue(O,"modelViewMatrix",$.modelViewMatrix),bt.setValue(O,"normalMatrix",$.normalMatrix),bt.setValue(O,"modelMatrix",$.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let tn=0,yt=an.length;tn<yt;tn++){const fi=an[tn];G.update(fi,cn),G.bind(fi,cn)}}return cn}function ma(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function fu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,Q){We.get(A.texture).__webglTexture=W,We.get(A.depthTexture).__webglTexture=Q;const Y=We.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Q===void 0,Y.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Q=We.get(A);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const ga=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Q=0){X=A,k=W,N=Q;let Y=!0,$=null,Se=!1,Re=!1;if(A){const ze=We.get(A);if(ze.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(ze.__hasExternalTextures)D.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(ze.__boundDepthTexture!==Ve){if(Ve!==null&&We.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const et=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[W])?$=et[W][Q]:$=et[W],Se=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?$=We.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?$=et[Q]:$=et,B.copy(A.viewport),oe.copy(A.scissor),ee=A.scissorTest}else B.copy(U).multiplyScalar(z).floor(),oe.copy(te).multiplyScalar(z).floor(),ee=Ne;if(Q!==0&&($=ga),je.bindFramebuffer(O.FRAMEBUFFER,$)&&Y&&je.drawBuffers(A,$),je.viewport(B),je.scissor(oe),je.setScissorTest(ee),Se){const ze=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,Q)}else if(Re){const ze=We.get(A.texture),nt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,Q,nt)}else if(A!==null&&Q!==0){const ze=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ze.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(A,W,Q,Y,$,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){je.bindFramebuffer(O.FRAMEBUFFER,De);try{const ze=A.texture,nt=ze.format,et=ze.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Y&&Q>=0&&Q<=A.height-$&&O.readPixels(W,Q,Y,$,rt.convert(nt),rt.convert(et),Se)}finally{const ze=X!==null?We.get(X).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,Q,Y,$,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const ze=A.texture,nt=ze.format,et=ze.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Y&&Q>=0&&Q<=A.height-$){je.bindFramebuffer(O.FRAMEBUFFER,De);const Ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,Q,Y,$,rt.convert(nt),rt.convert(et),0);const gt=X!==null?We.get(X).__webglFramebuffer:null;je.bindFramebuffer(O.FRAMEBUFFER,gt);const ot=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await MS(O,ot,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(Ve),O.deleteSync(ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Q=0){A.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-Q),$=Math.floor(A.image.width*Y),Se=Math.floor(A.image.height*Y),Re=W!==null?W.x:0,De=W!==null?W.y:0;D.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Re,De,$,Se),je.unbindTexture()};const _a=O.createFramebuffer(),va=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Q=null,Y=null,$=0,Se=null){A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,Q=null),Se===null&&($!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Re,De,ze,nt,et,Ve,gt,ot,Ht;const Ft=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Re=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,nt=Q.min.x,et=Q.min.y,Ve=Q.isBox3?Q.min.z:0;else{const en=Math.pow(2,-$);Re=Math.floor(Ft.width*en),De=Math.floor(Ft.height*en),A.isDataArrayTexture?ze=Ft.depth:A.isData3DTexture?ze=Math.floor(Ft.depth*en):ze=1,nt=0,et=0,Ve=0}Y!==null?(gt=Y.x,ot=Y.y,Ht=Y.z):(gt=0,ot=0,Ht=0);const vt=rt.convert(W.format),Ye=rt.convert(W.type);let Vt;W.isData3DTexture?(D.setTexture3D(W,0),Vt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),Vt=O.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),Vt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zi=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),wi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const bt=A.isDataArrayTexture||A.isData3DTexture,fn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const en=We.get(A),an=We.get(W),tn=We.get(en.__renderTarget),yt=We.get(an.__renderTarget);je.bindFramebuffer(O.READ_FRAMEBUFFER,tn.__webglFramebuffer),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let fi=0;fi<ze;fi++)bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(A).__webglTexture,$,Ve+fi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Se,Ht+fi)),O.blitFramebuffer(nt,et,Re,De,gt,ot,Re,De,O.DEPTH_BUFFER_BIT,O.NEAREST);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||We.has(A)){const en=We.get(A),an=We.get(W);je.bindFramebuffer(O.READ_FRAMEBUFFER,_a),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,va);for(let tn=0;tn<ze;tn++)bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,$,Ve+tn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,$),fn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,an.__webglTexture,Se,Ht+tn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,an.__webglTexture,Se),$!==0?O.blitFramebuffer(nt,et,Re,De,gt,ot,Re,De,O.COLOR_BUFFER_BIT,O.NEAREST):fn?O.copyTexSubImage3D(Vt,Se,gt,ot,Ht+tn,nt,et,Re,De):O.copyTexSubImage2D(Vt,Se,gt,ot,nt,et,Re,De);je.bindFramebuffer(O.READ_FRAMEBUFFER,null),je.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Vt,Se,gt,ot,Ht,Re,De,ze,vt,Ye,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,Se,gt,ot,Ht,Re,De,ze,vt,Ft.data):O.texSubImage3D(Vt,Se,gt,ot,Ht,Re,De,ze,vt,Ye,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,gt,ot,Re,De,vt,Ye,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,gt,ot,Ft.width,Ft.height,vt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Se,gt,ot,Re,De,vt,Ye,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zi),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wi),Se===0&&W.generateMipmaps&&O.generateMipmap(Vt),je.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Q=null,Y=null,$=0){return A.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],W=arguments[3],$=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Q,Y,$)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){k=0,N=0,X=null,je.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const BA=()=>{const r=ce.useRef();return ce.useEffect(()=>{const e=new qS,t=new Kn(75,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=5;const s=new kA({canvas:r.current});s.setSize(window.innerWidth,window.innerHeight);const a=new fo,l=new Gd({color:65280}),c=new vi(a,l);e.add(c);const f=()=>{requestAnimationFrame(f),c.rotation.x+=.01,c.rotation.y+=.01,s.render(e,t)};f();{const d=new Ud;d.add(document,"title"),d.add(c.rotation,"x").min(-Math.PI).max(Math.PI).step(.01).name("Rotation X"),d.add(l,"wireframe")}},[]),Qe.jsx("canvas",{ref:r})};function zA(){return Qe.jsxs(Qe.Fragment,{children:[Qe.jsxs(n_,{children:[Qe.jsx("title",{children:"Accueil"}),Qe.jsx("meta",{name:"description",content:"Accueil"})]}),Qe.jsxs("div",{className:"hero",children:[Qe.jsx("h1",{children:"Accueil"}),Qe.jsx(BA,{})]})]})}function Lg(){return Qe.jsx("div",{children:Qe.jsx("h1",{children:"404"})})}function HA(){return Qe.jsxs(Qe.Fragment,{children:[Qe.jsx(yy,{}),Qe.jsxs(dx,{children:[Qe.jsx(js,{path:"/",element:Qe.jsx(zA,{})}),Qe.jsxs(js,{path:"patate",children:[Qe.jsx(js,{path:"",element:Qe.jsx(Lg,{})}),Qe.jsx(js,{path:"a-propos",element:Qe.jsx(_y,{})})]}),Qe.jsx(js,{path:"*",element:Qe.jsx(Lg,{})})]}),Qe.jsx(vy,{})]})}const VA={};S0.createRoot(document.getElementById("root")).render(Qe.jsx(ce.StrictMode,{children:Qe.jsx(t_,{context:VA,children:Qe.jsx(Fx,{children:Qe.jsx(HA,{})})})}));
