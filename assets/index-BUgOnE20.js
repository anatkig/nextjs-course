function dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},wo={},Dl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ir=Symbol.for("react.element"),fd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),Cd=Symbol.for("react.lazy"),ci=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=ci&&e[ci]||e["@@iterator"],typeof e=="function"?e:null)}var Ul={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ml={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Ml,this.updater=n||Ul}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zl(){}zl.prototype=gn.prototype;function fa(e,t,n){this.props=e,this.context=t,this.refs=Ml,this.updater=n||Ul}var ma=fa.prototype=new zl;ma.constructor=fa;_l(ma,gn.prototype);ma.isPureReactComponent=!0;var di=Array.isArray,Fl=Object.prototype.hasOwnProperty,ha={current:null},Bl={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,t,n){var r,o={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Fl.call(t,r)&&!Bl.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:ir,type:e,key:s,ref:a,props:o,_owner:ha.current}}function Rd(e,t){return{$$typeof:ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===ir}function Pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pi=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pd(""+e.key):t.toString(36)}function qr(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ir:case fd:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Wo(a,0):r,di(o)?(n="",e!=null&&(n=e.replace(pi,"$&/")+"/"),qr(o,t,n,"",function(u){return u})):o!=null&&(ga(o)&&(o=Rd(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(pi,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",di(e))for(var i=0;i<e.length;i++){s=e[i];var l=r+Wo(s,i);a+=qr(s,t,n,l,o)}else if(l=kd(e),typeof l=="function")for(e=l.call(e),i=0;!(s=e.next()).done;)s=s.value,l=r+Wo(s,i++),a+=qr(s,t,n,l,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],o=0;return qr(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Or={transition:null},Td={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Or,ReactCurrentOwner:ha};function Hl(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=gn;L.Fragment=md;L.Profiler=gd;L.PureComponent=fa;L.StrictMode=hd;L.Suspense=wd;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Td;L.act=Hl;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_l({},e.props),o=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=ha.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)Fl.call(t,l)&&!Bl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&i!==void 0?i[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:ir,type:e.type,key:o,ref:s,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};L.createElement=Wl;L.createFactory=function(e){var t=Wl.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:xd,render:e}};L.isValidElement=ga;L.lazy=function(e){return{$$typeof:Cd,_payload:{_status:-1,_result:e},_init:Nd}};L.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};L.unstable_act=Hl;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";Dl.exports=L;var S=Dl.exports;const $l=pd(S),Ed=dd({__proto__:null,default:$l},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=S,jd=Symbol.for("react.element"),Ad=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Ld=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Vl(e,t,n){var r,o={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Id.call(t,r)&&!qd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jd,type:e,key:s,ref:a,props:o,_owner:Ld.current}}wo.Fragment=Ad;wo.jsx=Vl;wo.jsxs=Vl;Ol.exports=wo;var c=Ol.exports,gs={},Gl={exports:{}},ke={},Ql={exports:{}},Jl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,j){var I=N.length;N.push(j);e:for(;0<I;){var V=I-1>>>1,K=N[V];if(0<o(K,j))N[V]=j,N[I]=K,I=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],I=N.pop();if(I!==j){N[0]=I;e:for(var V=0,K=N.length,mr=K>>>1;V<mr;){var Rt=2*(V+1)-1,Bo=N[Rt],Pt=Rt+1,hr=N[Pt];if(0>o(Bo,I))Pt<K&&0>o(hr,Bo)?(N[V]=hr,N[Pt]=I,V=Pt):(N[V]=Bo,N[Rt]=I,V=Rt);else if(Pt<K&&0>o(hr,I))N[V]=hr,N[Pt]=I,V=Pt;else break e}}return j}function o(N,j){var I=N.sortIndex-j.sortIndex;return I!==0?I:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var l=[],u=[],h=1,f=null,g=3,x=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=N)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function y(N){if(w=!1,m(N),!v)if(n(l)!==null)v=!0,zo(R);else{var j=n(u);j!==null&&Fo(y,j.startTime-N)}}function R(N,j){v=!1,w&&(w=!1,p(b),b=-1),x=!0;var I=g;try{for(m(j),f=n(l);f!==null&&(!(f.expirationTime>j)||N&&!ve());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var K=V(f.expirationTime<=j);j=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&r(l),m(j)}else r(l);f=n(l)}if(f!==null)var mr=!0;else{var Rt=n(u);Rt!==null&&Fo(y,Rt.startTime-j),mr=!1}return mr}finally{f=null,g=I,x=!1}}var T=!1,E=null,b=-1,z=5,A=-1;function ve(){return!(e.unstable_now()-A<z)}function xn(){if(E!==null){var N=e.unstable_now();A=N;var j=!0;try{j=E(!0,N)}finally{j?wn():(T=!1,E=null)}}else T=!1}var wn;if(typeof d=="function")wn=function(){d(xn)};else if(typeof MessageChannel<"u"){var ui=new MessageChannel,cd=ui.port2;ui.port1.onmessage=xn,wn=function(){cd.postMessage(null)}}else wn=function(){k(xn,0)};function zo(N){E=N,T||(T=!0,wn())}function Fo(N,j){b=k(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,zo(R))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var I=g;g=j;try{return N()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=g;g=N;try{return j()}finally{g=I}},e.unstable_scheduleCallback=function(N,j,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,N){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,N={id:h++,callback:j,priorityLevel:N,startTime:I,expirationTime:K,sortIndex:-1},I>V?(N.sortIndex=I,t(u,N),n(l)===null&&N===n(u)&&(w?(p(b),b=-1):w=!0,Fo(y,I-V))):(N.sortIndex=K,t(l,N),v||x||(v=!0,zo(R))),N},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(N){var j=g;return function(){var I=g;g=j;try{return N.apply(this,arguments)}finally{g=I}}}})(Jl);Ql.exports=Jl;var Od=Ql.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=S,Ce=Od;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yl=new Set,Bn={};function Mt(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Yl.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fi={},mi={};function _d(e){return vs.call(mi,e)?!0:vs.call(fi,e)?!1:Ud.test(e)?mi[e]=!0:(fi[e]=!0,!1)}function Md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zd(e,t,n,r){if(t===null||typeof t>"u"||Md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,ya);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function xa(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zd(t,n,o,r)&&(n=null),r||o===null?_d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),wa=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),Kl=Symbol.for("react.provider"),Xl=Symbol.for("react.context"),Sa=Symbol.for("react.forward_ref"),xs=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Ca=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Zl=Symbol.for("react.offscreen"),hi=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=hi&&e[hi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ho;function bn(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var $o=!1;function Vo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,i=s.length-1;1<=a&&0<=i&&o[a]!==s[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==s[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==s[i]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=i);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Fd(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case ys:return"Profiler";case wa:return"StrictMode";case xs:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xl:return(e.displayName||"Context")+".Consumer";case Kl:return(e._context.displayName||"Context")+".Provider";case Sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ca:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function Bd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wd(e){var t=eu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Wd(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nu(e,t){t=t.checked,t!=null&&xa(e,"checked",t,!1)}function ks(e,t){nu(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(jn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function ru(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var $d=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ts(e,t){if(t){if($d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bs=null;function ka(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,nn=null,rn=null;function wi(e){if(e=cr(e)){if(typeof js!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Po(t),js(e.stateNode,e.type,t))}}function lu(e){nn?rn?rn.push(e):rn=[e]:nn=e}function uu(){if(nn){var e=nn,t=rn;if(rn=nn=null,wi(e),t)for(e=0;e<t.length;e++)wi(t[e])}}function cu(e,t){return e(t)}function du(){}var Go=!1;function pu(e,t,n){if(Go)return e(t,n);Go=!0;try{return cu(e,t,n)}finally{Go=!1,(nn!==null||rn!==null)&&(du(),uu())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var As=!1;if(Qe)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){As=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{As=!1}function Vd(e,t,n,r,o,s,a,i,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var qn=!1,Gr=null,Qr=!1,Is=null,Gd={onError:function(e){qn=!0,Gr=e}};function Qd(e,t,n,r,o,s,a,i,l){qn=!1,Gr=null,Vd.apply(Gd,arguments)}function Jd(e,t,n,r,o,s,a,i,l){if(Qd.apply(this,arguments),qn){if(qn){var u=Gr;qn=!1,Gr=null}else throw Error(C(198));Qr||(Qr=!0,Is=u)}}function zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Si(e){if(zt(e)!==e)throw Error(C(188))}function Yd(e){var t=e.alternate;if(!t){if(t=zt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Si(o),e;if(s===r)return Si(o),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=s;else{for(var a=!1,i=o.child;i;){if(i===n){a=!0,n=o,r=s;break}if(i===r){a=!0,r=o,n=s;break}i=i.sibling}if(!a){for(i=s.child;i;){if(i===n){a=!0,n=s,r=o;break}if(i===r){a=!0,r=s,n=o;break}i=i.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function mu(e){return e=Yd(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var gu=Ce.unstable_scheduleCallback,Ci=Ce.unstable_cancelCallback,Kd=Ce.unstable_shouldYield,Xd=Ce.unstable_requestPaint,G=Ce.unstable_now,Zd=Ce.unstable_getCurrentPriorityLevel,Ra=Ce.unstable_ImmediatePriority,vu=Ce.unstable_UserBlockingPriority,Jr=Ce.unstable_NormalPriority,ep=Ce.unstable_LowPriority,yu=Ce.unstable_IdlePriority,So=null,Fe=null;function tp(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:op,np=Math.log,rp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(np(e)/rp|0)|0}var wr=64,Sr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~o;i!==0?r=An(i):(s&=a,s!==0&&(r=An(s)))}else a=n&~o,a!==0?r=An(a):s!==0&&(r=An(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),o=1<<n,r|=e[n],t&=~o;return r}function sp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Oe(s),i=1<<a,l=o[a];l===-1?(!(i&n)||i&r)&&(o[a]=sp(i,t)):l<=t&&(e.expiredLanes|=i),s&=~i}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Oe(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var O=0;function wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Su,Na,Cu,ku,Ru,qs=!1,Cr=[],it=null,lt=null,ut=null,$n=new Map,Vn=new Map,nt=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ki(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function kn(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function up(e,t,n,r,o){switch(t){case"focusin":return it=kn(it,e,t,n,r,o),!0;case"dragenter":return lt=kn(lt,e,t,n,r,o),!0;case"mouseover":return ut=kn(ut,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return $n.set(s,kn($n.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Vn.set(s,kn(Vn.get(s)||null,e,t,n,r,o)),!0}return!1}function Pu(e){var t=bt(e.target);if(t!==null){var n=zt(t);if(n!==null){if(t=n.tag,t===13){if(t=fu(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bs=r,n.target.dispatchEvent(r),bs=null}else return t=cr(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function Ri(e,t,n){Dr(e)&&n.delete(t)}function cp(){qs=!1,it!==null&&Dr(it)&&(it=null),lt!==null&&Dr(lt)&&(lt=null),ut!==null&&Dr(ut)&&(ut=null),$n.forEach(Ri),Vn.forEach(Ri)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,cp)))}function Gn(e){function t(o){return Rn(o,e)}if(0<Cr.length){Rn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&Rn(it,e),lt!==null&&Rn(lt,e),ut!==null&&Rn(ut,e),$n.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Pu(n),n.blockedOn===null&&nt.shift()}var on=Xe.ReactCurrentBatchConfig,Kr=!0;function dp(e,t,n,r){var o=O,s=on.transition;on.transition=null;try{O=1,Ta(e,t,n,r)}finally{O=o,on.transition=s}}function pp(e,t,n,r){var o=O,s=on.transition;on.transition=null;try{O=4,Ta(e,t,n,r)}finally{O=o,on.transition=s}}function Ta(e,t,n,r){if(Kr){var o=Os(e,t,n,r);if(o===null)os(e,t,r,Xr,n),ki(e,r);else if(up(o,e,t,n,r))r.stopPropagation();else if(ki(e,r),t&4&&-1<lp.indexOf(e)){for(;o!==null;){var s=cr(o);if(s!==null&&Su(s),s=Os(e,t,n,r),s===null&&os(e,t,r,Xr,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Xr=null;function Os(e,t,n,r){if(Xr=null,e=ka(r),e=bt(e),e!==null)if(t=zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zd()){case Ra:return 1;case vu:return 4;case Jr:case ep:return 16;case yu:return 536870912;default:return 16}default:return 16}}var ot=null,Ea=null,Ur=null;function Tu(){if(Ur)return Ur;var e,t=Ea,n=t.length,r,o="value"in ot?ot.value:ot.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[s-r];r++);return Ur=o.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Pi(){return!1}function Re(e){function t(n,r,o,s,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(s):s[i]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kr:Pi,this.isPropagationStopped=Pi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ba=Re(vn),ur=W({},vn,{view:0,detail:0}),fp=Re(ur),Jo,Yo,Pn,Co=W({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Jo=e.screenX-Pn.screenX,Yo=e.screenY-Pn.screenY):Yo=Jo=0,Pn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),Ni=Re(Co),mp=W({},Co,{dataTransfer:0}),hp=Re(mp),gp=W({},ur,{relatedTarget:0}),Ko=Re(gp),vp=W({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=Re(vp),xp=W({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wp=Re(xp),Sp=W({},vn,{data:0}),Ti=Re(Sp),Cp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function ja(){return Pp}var Np=W({},ur,{key:function(e){if(e.key){var t=Cp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tp=Re(Np),Ep=W({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ei=Re(Ep),bp=W({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),jp=Re(bp),Ap=W({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=Re(Ap),Lp=W({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=Re(Lp),Op=[9,13,27,32],Aa=Qe&&"CompositionEvent"in window,On=null;Qe&&"documentMode"in document&&(On=document.documentMode);var Dp=Qe&&"TextEvent"in window&&!On,Eu=Qe&&(!Aa||On&&8<On&&11>=On),bi=" ",ji=!1;function bu(e,t){switch(e){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Up(e,t){switch(e){case"compositionend":return ju(t);case"keypress":return t.which!==32?null:(ji=!0,bi);case"textInput":return e=t.data,e===bi&&ji?null:e;default:return null}}function _p(e,t){if($t)return e==="compositionend"||!Aa&&bu(e,t)?(e=Tu(),Ur=Ea=ot=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function Au(e,t,n,r){lu(r),t=Zr(t,"onChange"),0<t.length&&(n=new ba("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Qn=null;function zp(e){Bu(e,0)}function ko(e){var t=Qt(e);if(tu(t))return e}function Fp(e,t){if(e==="change")return t}var Iu=!1;if(Qe){var Xo;if(Qe){var Zo="oninput"in document;if(!Zo){var Ii=document.createElement("div");Ii.setAttribute("oninput","return;"),Zo=typeof Ii.oninput=="function"}Xo=Zo}else Xo=!1;Iu=Xo&&(!document.documentMode||9<document.documentMode)}function Li(){Dn&&(Dn.detachEvent("onpropertychange",Lu),Qn=Dn=null)}function Lu(e){if(e.propertyName==="value"&&ko(Qn)){var t=[];Au(t,Qn,e,ka(e)),pu(zp,t)}}function Bp(e,t,n){e==="focusin"?(Li(),Dn=t,Qn=n,Dn.attachEvent("onpropertychange",Lu)):e==="focusout"&&Li()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Qn)}function Hp(e,t){if(e==="click")return ko(t)}function $p(e,t){if(e==="input"||e==="change")return ko(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Vp;function Jn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vs.call(t,o)||!Ue(e[o],t[o]))return!1}return!0}function qi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oi(e,t){var n=qi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qi(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gp(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(r!==null&&Ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Oi(n,s);var a=Oi(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=Qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,Ds=null,Un=null,Us=!1;function Di(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Us||Vt==null||Vt!==Vr(r)||(r=Vt,"selectionStart"in r&&Ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Jn(Un,r)||(Un=r,r=Zr(Ds,"onSelect"),0<r.length&&(t=new ba("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},es={},Du={};Qe&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ro(e){if(es[e])return es[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return es[e]=t[n];return e}var Uu=Ro("animationend"),_u=Ro("animationiteration"),Mu=Ro("animationstart"),zu=Ro("transitionend"),Fu=new Map,Ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Fu.set(e,t),Mt(t,[e])}for(var ts=0;ts<Ui.length;ts++){var ns=Ui[ts],Jp=ns.toLowerCase(),Yp=ns[0].toUpperCase()+ns.slice(1);yt(Jp,"on"+Yp)}yt(Uu,"onAnimationEnd");yt(_u,"onAnimationIteration");yt(Mu,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(zu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function _i(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function Bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],l=i.instance,u=i.currentTarget;if(i=i.listener,l!==s&&o.isPropagationStopped())break e;_i(o,i,u),s=l}else for(a=0;a<r.length;a++){if(i=r[a],l=i.instance,u=i.currentTarget,i=i.listener,l!==s&&o.isPropagationStopped())break e;_i(o,i,u),s=l}}}if(Qr)throw e=Is,Qr=!1,Is=null,e}function U(e,t){var n=t[Bs];n===void 0&&(n=t[Bs]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Pr]){e[Pr]=!0,Yl.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,rs("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(Nu(t)){case 1:var o=dp;break;case 4:o=pp;break;default:o=Ta}n=o.bind(null,t,n,e),o=void 0,!As||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function os(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;i!==null;){if(a=bt(i),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}i=i.parentNode}}r=r.return}pu(function(){var u=s,h=ka(n),f=[];e:{var g=Fu.get(e);if(g!==void 0){var x=ba,v=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":x=Tp;break;case"focusin":v="focus",x=Ko;break;case"focusout":v="blur",x=Ko;break;case"beforeblur":case"afterblur":x=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ni;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=jp;break;case Uu:case _u:case Mu:x=yp;break;case zu:x=Ip;break;case"scroll":x=fp;break;case"wheel":x=qp;break;case"copy":case"cut":case"paste":x=wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ei}var w=(t&4)!==0,k=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Hn(d,p),y!=null&&w.push(Kn(d,y,m)))),k)break;d=d.return}0<w.length&&(g=new x(g,v,null,n,h),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==bs&&(v=n.relatedTarget||n.fromElement)&&(bt(v)||v[Je]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?bt(v):null,v!==null&&(k=zt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Ni,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ei,y="onPointerLeave",p="onPointerEnter",d="pointer"),k=x==null?g:Qt(x),m=v==null?g:Qt(v),g=new w(y,d+"leave",x,n,h),g.target=k,g.relatedTarget=m,y=null,bt(h)===u&&(w=new w(p,d+"enter",v,n,h),w.target=m,w.relatedTarget=k,y=w),k=y,x&&v)t:{for(w=x,p=v,d=0,m=w;m;m=Bt(m))d++;for(m=0,y=p;y;y=Bt(y))m++;for(;0<d-m;)w=Bt(w),d--;for(;0<m-d;)p=Bt(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Bt(w),p=Bt(p)}w=null}else w=null;x!==null&&Mi(f,g,x,w,!1),v!==null&&k!==null&&Mi(f,k,v,w,!0)}}e:{if(g=u?Qt(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var R=Fp;else if(Ai(g))if(Iu)R=$p;else{R=Wp;var T=Bp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=Hp);if(R&&(R=R(e,u))){Au(f,R,n,h);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Rs(g,"number",g.value)}switch(T=u?Qt(u):window,e){case"focusin":(Ai(T)||T.contentEditable==="true")&&(Vt=T,Ds=u,Un=null);break;case"focusout":Un=Ds=Vt=null;break;case"mousedown":Us=!0;break;case"contextmenu":case"mouseup":case"dragend":Us=!1,Di(f,n,h);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Di(f,n,h)}var E;if(Aa)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $t?bu(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Eu&&n.locale!=="ko"&&($t||b!=="onCompositionStart"?b==="onCompositionEnd"&&$t&&(E=Tu()):(ot=h,Ea="value"in ot?ot.value:ot.textContent,$t=!0)),T=Zr(u,b),0<T.length&&(b=new Ti(b,e,null,n,h),f.push({event:b,listeners:T}),E?b.data=E:(E=ju(n),E!==null&&(b.data=E)))),(E=Dp?Up(e,n):_p(e,n))&&(u=Zr(u,"onBeforeInput"),0<u.length&&(h=new Ti("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=E))}Bu(f,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Hn(e,n),s!=null&&r.unshift(Kn(e,s,o)),s=Hn(e,t),s!=null&&r.push(Kn(e,s,o))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mi(e,t,n,r,o){for(var s=t._reactName,a=[];n!==null&&n!==r;){var i=n,l=i.alternate,u=i.stateNode;if(l!==null&&l===r)break;i.tag===5&&u!==null&&(i=u,o?(l=Hn(n,s),l!=null&&a.unshift(Kn(n,l,i))):o||(l=Hn(n,s),l!=null&&a.push(Kn(n,l,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Xp=/\r\n?/g,Zp=/\u0000|\uFFFD/g;function zi(e){return(typeof e=="string"?e:""+e).replace(Xp,`
`).replace(Zp,"")}function Nr(e,t,n){if(t=zi(t),zi(e)!==t&&n)throw Error(C(425))}function eo(){}var _s=null,Ms=null;function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,ef=typeof clearTimeout=="function"?clearTimeout:void 0,Fi=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Fi<"u"?function(e){return Fi.resolve(null).then(e).catch(nf)}:Fs;function nf(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ze="__reactFiber$"+yn,Xn="__reactProps$"+yn,Je="__reactContainer$"+yn,Bs="__reactEvents$"+yn,rf="__reactListeners$"+yn,of="__reactHandles$"+yn;function bt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bi(e);e!==null;){if(n=e[ze])return n;e=Bi(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[ze]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Po(e){return e[Xn]||null}var Ws=[],Jt=-1;function xt(e){return{current:e}}function _(e){0>Jt||(e.current=Ws[Jt],Ws[Jt]=null,Jt--)}function D(e,t){Jt++,Ws[Jt]=e.current,e.current=t}var vt={},ie=xt(vt),me=xt(!1),qt=vt;function un(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function he(e){return e=e.childContextTypes,e!=null}function to(){_(me),_(ie)}function Wi(e,t,n){if(ie.current!==vt)throw Error(C(168));D(ie,t),D(me,n)}function Hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Bd(e)||"Unknown",o));return W({},n,r)}function no(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,qt=ie.current,D(ie,e),D(me,me.current),!0}function Hi(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Hu(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,_(me),_(ie),D(ie,e)):_(me),D(me,n)}var He=null,No=!1,as=!1;function $u(e){He===null?He=[e]:He.push(e)}function sf(e){No=!0,$u(e)}function wt(){if(!as&&He!==null){as=!0;var e=0,t=O;try{var n=He;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,No=!1}catch(o){throw He!==null&&(He=He.slice(e+1)),gu(Ra,wt),o}finally{O=t,as=!1}}return null}var Yt=[],Kt=0,ro=null,oo=0,Pe=[],Ne=0,Ot=null,$e=1,Ve="";function Nt(e,t){Yt[Kt++]=oo,Yt[Kt++]=ro,ro=e,oo=t}function Vu(e,t,n){Pe[Ne++]=$e,Pe[Ne++]=Ve,Pe[Ne++]=Ot,Ot=e;var r=$e;e=Ve;var o=32-Oe(r)-1;r&=~(1<<o),n+=1;var s=32-Oe(t)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,$e=1<<32-Oe(t)+o|n<<o|r,Ve=s+e}else $e=1<<s|n<<o|r,Ve=e}function La(e){e.return!==null&&(Nt(e,1),Vu(e,1,0))}function qa(e){for(;e===ro;)ro=Yt[--Kt],Yt[Kt]=null,oo=Yt[--Kt],Yt[Kt]=null;for(;e===Ot;)Ot=Pe[--Ne],Pe[Ne]=null,Ve=Pe[--Ne],Pe[Ne]=null,$e=Pe[--Ne],Pe[Ne]=null}var Se=null,xe=null,M=!1,qe=null;function Gu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $i(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,xe=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:$e,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,xe=null,!0):!1;default:return!1}}function Hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(M){var t=xe;if(t){var n=t;if(!$i(e,t)){if(Hs(e))throw Error(C(418));t=ct(n.nextSibling);var r=Se;t&&$i(e,t)?Gu(r,n):(e.flags=e.flags&-4097|2,M=!1,Se=e)}}else{if(Hs(e))throw Error(C(418));e.flags=e.flags&-4097|2,M=!1,Se=e}}}function Vi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Tr(e){if(e!==Se)return!1;if(!M)return Vi(e),M=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zs(e.type,e.memoizedProps)),t&&(t=xe)){if(Hs(e))throw Qu(),Error(C(418));for(;t;)Gu(e,t),t=ct(t.nextSibling)}if(Vi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Se?ct(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=xe;e;)e=ct(e.nextSibling)}function cn(){xe=Se=null,M=!1}function Oa(e){qe===null?qe=[e]:qe.push(e)}var af=Xe.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var i=o.refs;a===null?delete i[s]:i[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gi(e){var t=e._init;return t(e._payload)}function Ju(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=mt(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,d,m,y){return d===null||d.tag!==6?(d=fs(m,p.mode,y),d.return=p,d):(d=o(d,m),d.return=p,d)}function l(p,d,m,y){var R=m.type;return R===Ht?h(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===et&&Gi(R)===d.type)?(y=o(d,m.props),y.ref=Nn(p,d,m),y.return=p,y):(y=$r(m.type,m.key,m.props,null,p.mode,y),y.ref=Nn(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ms(m,p.mode,y),d.return=p,d):(d=o(d,m.children||[]),d.return=p,d)}function h(p,d,m,y,R){return d===null||d.tag!==7?(d=Lt(m,p.mode,y,R),d.return=p,d):(d=o(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return m=$r(d.type,d.key,d.props,null,p.mode,m),m.ref=Nn(p,null,d),m.return=p,m;case Wt:return d=ms(d,p.mode,m),d.return=p,d;case et:var y=d._init;return f(p,y(d._payload),m)}if(jn(d)||Sn(d))return d=Lt(d,p.mode,m,null),d.return=p,d;Er(p,d)}return null}function g(p,d,m,y){var R=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:i(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vr:return m.key===R?l(p,d,m,y):null;case Wt:return m.key===R?u(p,d,m,y):null;case et:return R=m._init,g(p,d,R(m._payload),y)}if(jn(m)||Sn(m))return R!==null?null:h(p,d,m,y,null);Er(p,m)}return null}function x(p,d,m,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,i(d,p,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vr:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,R);case Wt:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,R);case et:var T=y._init;return x(p,d,m,T(y._payload),R)}if(jn(y)||Sn(y))return p=p.get(m)||null,h(d,p,y,R,null);Er(d,y)}return null}function v(p,d,m,y){for(var R=null,T=null,E=d,b=d=0,z=null;E!==null&&b<m.length;b++){E.index>b?(z=E,E=null):z=E.sibling;var A=g(p,E,m[b],y);if(A===null){E===null&&(E=z);break}e&&E&&A.alternate===null&&t(p,E),d=s(A,d,b),T===null?R=A:T.sibling=A,T=A,E=z}if(b===m.length)return n(p,E),M&&Nt(p,b),R;if(E===null){for(;b<m.length;b++)E=f(p,m[b],y),E!==null&&(d=s(E,d,b),T===null?R=E:T.sibling=E,T=E);return M&&Nt(p,b),R}for(E=r(p,E);b<m.length;b++)z=x(E,p,b,m[b],y),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?b:z.key),d=s(z,d,b),T===null?R=z:T.sibling=z,T=z);return e&&E.forEach(function(ve){return t(p,ve)}),M&&Nt(p,b),R}function w(p,d,m,y){var R=Sn(m);if(typeof R!="function")throw Error(C(150));if(m=R.call(m),m==null)throw Error(C(151));for(var T=R=null,E=d,b=d=0,z=null,A=m.next();E!==null&&!A.done;b++,A=m.next()){E.index>b?(z=E,E=null):z=E.sibling;var ve=g(p,E,A.value,y);if(ve===null){E===null&&(E=z);break}e&&E&&ve.alternate===null&&t(p,E),d=s(ve,d,b),T===null?R=ve:T.sibling=ve,T=ve,E=z}if(A.done)return n(p,E),M&&Nt(p,b),R;if(E===null){for(;!A.done;b++,A=m.next())A=f(p,A.value,y),A!==null&&(d=s(A,d,b),T===null?R=A:T.sibling=A,T=A);return M&&Nt(p,b),R}for(E=r(p,E);!A.done;b++,A=m.next())A=x(E,p,b,A.value,y),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?b:A.key),d=s(A,d,b),T===null?R=A:T.sibling=A,T=A);return e&&E.forEach(function(xn){return t(p,xn)}),M&&Nt(p,b),R}function k(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vr:e:{for(var R=m.key,T=d;T!==null;){if(T.key===R){if(R=m.type,R===Ht){if(T.tag===7){n(p,T.sibling),d=o(T,m.props.children),d.return=p,p=d;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===et&&Gi(R)===T.type){n(p,T.sibling),d=o(T,m.props),d.ref=Nn(p,T,m),d.return=p,p=d;break e}n(p,T);break}else t(p,T);T=T.sibling}m.type===Ht?(d=Lt(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=$r(m.type,m.key,m.props,null,p.mode,y),y.ref=Nn(p,d,m),y.return=p,p=y)}return a(p);case Wt:e:{for(T=m.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=o(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ms(m,p.mode,y),d.return=p,p=d}return a(p);case et:return T=m._init,k(p,d,T(m._payload),y)}if(jn(m))return v(p,d,m,y);if(Sn(m))return w(p,d,m,y);Er(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,m),d.return=p,p=d):(n(p,d),d=fs(m,p.mode,y),d.return=p,p=d),a(p)):n(p,d)}return k}var dn=Ju(!0),Yu=Ju(!1),so=xt(null),ao=null,Xt=null,Da=null;function Ua(){Da=Xt=ao=null}function _a(e){var t=so.current;_(so),e._currentValue=t}function Vs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){ao=e,Da=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(Da!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ao===null)throw Error(C(308));Xt=e,ao.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var jt=null;function Ma(e){jt===null?jt=[e]:jt.push(e)}function Ku(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ma(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ye(e,n)}return o=r.interleaved,o===null?(t.next=t,Ma(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ye(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}function Qi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var o=e.updateQueue;tt=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var l=i,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==a&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=o.baseState;a=0,h=u=l=null,i=s;do{var g=i.lane,x=i.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,w=i;switch(g=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(x,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(x,f,g):v,g==null)break e;f=W({},f,g);break e;case 2:tt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[i]:g.push(i))}else x={eventTime:x,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=x,l=f):h=h.next=x,a|=g;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;g=i,i=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);Ut|=a,e.lanes=a,e.memoizedState=f}}function Ji(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var dr={},Be=xt(dr),Zn=xt(dr),er=xt(dr);function At(e){if(e===dr)throw Error(C(174));return e}function Fa(e,t){switch(D(er,t),D(Zn,e),D(Be,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ns(t,e)}_(Be),D(Be,t)}function pn(){_(Be),_(Zn),_(er)}function Zu(e){At(er.current);var t=At(Be.current),n=Ns(t,e.type);t!==n&&(D(Zn,e),D(Be,n))}function Ba(e){Zn.current===e&&(_(Be),_(Zn))}var F=xt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=[];function Wa(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var zr=Xe.ReactCurrentDispatcher,ls=Xe.ReactCurrentBatchConfig,Dt=0,B=null,J=null,X=null,uo=!1,_n=!1,tr=0,lf=0;function oe(){throw Error(C(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function $a(e,t,n,r,o,s){if(Dt=s,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?pf:ff,e=n(r,o),_n){s=0;do{if(_n=!1,tr=0,25<=s)throw Error(C(301));s+=1,X=J=null,t.updateQueue=null,zr.current=mf,e=n(r,o)}while(_n)}if(zr.current=co,t=J!==null&&J.next!==null,Dt=0,X=J=B=null,uo=!1,t)throw Error(C(300));return e}function Va(){var e=tr!==0;return tr=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?B.memoizedState=X=e:X=X.next=e,X}function je(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=X===null?B.memoizedState:X.next;if(t!==null)X=t,J=e;else{if(e===null)throw Error(C(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},X===null?B.memoizedState=X=e:X=X.next=e}return X}function nr(e,t){return typeof t=="function"?t(e):t}function us(e){var t=je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=J,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var i=a=null,l=null,u=s;do{var h=u.lane;if((Dt&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(i=l=f,a=r):l=l.next=f,B.lanes|=h,Ut|=h}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=i,Ue(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,B.lanes|=s,Ut|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cs(e){var t=je(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);Ue(s,t.memoizedState)||(fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ec(){}function tc(e,t){var n=B,r=je(),o=t(),s=!Ue(r.memoizedState,o);if(s&&(r.memoizedState=o,fe=!0),r=r.queue,Ga(oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,rr(9,rc.bind(null,n,r,o,t),void 0,null),Z===null)throw Error(C(349));Dt&30||nc(n,t,o)}return o}function nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rc(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&ac(e)}function oc(e,t,n){return n(function(){sc(t)&&ac(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function ac(e){var t=Ye(e,1);t!==null&&De(t,e,1,-1)}function Yi(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=df.bind(null,B,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ic(){return je().memoizedState}function Fr(e,t,n,r){var o=Me();B.flags|=e,o.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var o=je();r=r===void 0?null:r;var s=void 0;if(J!==null){var a=J.memoizedState;if(s=a.destroy,r!==null&&Ha(r,a.deps)){o.memoizedState=rr(t,n,s,r);return}}B.flags|=e,o.memoizedState=rr(1|t,n,s,r)}function Ki(e,t){return Fr(8390656,8,e,t)}function Ga(e,t){return To(2048,8,e,t)}function lc(e,t){return To(4,2,e,t)}function uc(e,t){return To(4,4,e,t)}function cc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dc(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,cc.bind(null,t,e),n)}function Qa(){}function pc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mc(e,t,n){return Dt&21?(Ue(n,t)||(n=xu(),B.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function uf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ls.transition;ls.transition={};try{e(!1),t()}finally{O=n,ls.transition=r}}function hc(){return je().memoizedState}function cf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))vc(t,n);else if(n=Ku(e,t,n,r),n!==null){var o=ue();De(n,e,r,o),yc(n,t,r)}}function df(e,t,n){var r=ft(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))vc(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,i=s(a,n);if(o.hasEagerState=!0,o.eagerState=i,Ue(i,a)){var l=t.interleaved;l===null?(o.next=o,Ma(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Ku(e,t,o,r),n!==null&&(o=ue(),De(n,e,r,o),yc(n,t,r))}}function gc(e){var t=e.alternate;return e===B||t!==null&&t===B}function vc(e,t){_n=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pa(e,n)}}var co={readContext:be,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},pf={readContext:be,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Ki,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,cc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Yi,useDebugValue:Qa,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Yi(!1),t=e[0];return e=uf.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,o=Me();if(M){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Z===null)throw Error(C(349));Dt&30||nc(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Ki(oc.bind(null,r,s,e),[e]),r.flags|=2048,rr(9,rc.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Me(),t=Z.identifierPrefix;if(M){var n=Ve,r=$e;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:be,useCallback:pc,useContext:be,useEffect:Ga,useImperativeHandle:dc,useInsertionEffect:lc,useLayoutEffect:uc,useMemo:fc,useReducer:us,useRef:ic,useState:function(){return us(nr)},useDebugValue:Qa,useDeferredValue:function(e){var t=je();return mc(t,J.memoizedState,e)},useTransition:function(){var e=us(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1},mf={readContext:be,useCallback:pc,useContext:be,useEffect:Ga,useImperativeHandle:dc,useInsertionEffect:lc,useLayoutEffect:uc,useMemo:fc,useReducer:cs,useRef:ic,useState:function(){return cs(nr)},useDebugValue:Qa,useDeferredValue:function(e){var t=je();return J===null?t.memoizedState=e:mc(t,J.memoizedState,e)},useTransition:function(){var e=cs(nr)[0],t=je().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),s=Ge(r,o);s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,o),t!==null&&(De(t,e,o,r),Mr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=ft(e),s=Ge(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=dt(e,s,o),t!==null&&(De(t,e,o,r),Mr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),o=Ge(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(De(t,e,r,n),Mr(t,e,r))}};function Xi(e,t,n,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,s):!0}function xc(e,t,n){var r=!1,o=vt,s=t.contextType;return typeof s=="object"&&s!==null?s=be(s):(o=he(t)?qt:ie.current,r=t.contextTypes,s=(r=r!=null)?un(e,o):vt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Zi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Qs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},za(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=be(s):(s=he(t)?qt:ie.current,o.context=un(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Gs(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),io(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Fd(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,sa=r),Js(e,t)},n}function Sc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Js(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Js(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function el(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=bf.bind(null,e,t,n),t.then(e,e))}function tl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var gf=Xe.ReactCurrentOwner,fe=!1;function le(e,t,n,r){t.child=e===null?Yu(t,null,n,r):dn(t,e.child,n,r)}function rl(e,t,n,r,o){n=n.render;var s=t.ref;return sn(t,o),r=$a(e,t,n,r,s,o),n=Va(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(M&&n&&La(t),t.flags|=1,le(e,t,r,o),t.child)}function ol(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!ni(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Cc(e,t,s,r,o)):(e=$r(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(a,r)&&e.ref===t.ref)return Ke(e,t,o)}return t.flags|=1,e=mt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Cc(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(Jn(s,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ke(e,t,o)}return Ys(e,t,n,r,o)}function kc(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(en,ye),ye|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(en,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,D(en,ye),ye|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,D(en,ye),ye|=r;return le(e,t,o,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ys(e,t,n,r,o){var s=he(n)?qt:ie.current;return s=un(t,s),sn(t,o),n=$a(e,t,n,r,s,o),r=Va(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(M&&r&&La(t),t.flags|=1,le(e,t,n,o),t.child)}function sl(e,t,n,r,o){if(he(n)){var s=!0;no(t)}else s=!1;if(sn(t,o),t.stateNode===null)Br(e,t),xc(t,n,r),Qs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=he(n)?qt:ie.current,u=un(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||l!==u)&&Zi(t,a,r,u),tt=!1;var g=t.memoizedState;a.state=g,io(t,r,a,o),l=t.memoizedState,i!==r||g!==l||me.current||tt?(typeof h=="function"&&(Gs(t,n,h,r),l=t.memoizedState),(i=tt||Xi(t,n,i,r,g,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Ie(t.type,i),a.props=u,f=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=be(l):(l=he(n)?qt:ie.current,l=un(t,l));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==f||g!==l)&&Zi(t,a,r,l),tt=!1,g=t.memoizedState,a.state=g,io(t,r,a,o);var v=t.memoizedState;i!==f||g!==v||me.current||tt?(typeof x=="function"&&(Gs(t,n,x,r),v=t.memoizedState),(u=tt||Xi(t,n,u,r,g,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,s,o)}function Ks(e,t,n,r,o,s){Rc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Hi(t,n,!1),Ke(e,t,s);r=t.stateNode,gf.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=dn(t,e.child,null,s),t.child=dn(t,null,i,s)):le(e,t,i,s),t.memoizedState=r.state,o&&Hi(t,n,!0),t.child}function Pc(e){var t=e.stateNode;t.pendingContext?Wi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wi(e,t.context,!1),Fa(e,t.containerInfo)}function al(e,t,n,r,o){return cn(),Oa(o),t.flags|=256,le(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,t,n){var r=t.pendingProps,o=F.current,s=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(F,o&1),e===null)return $s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ao(a,r,0,null),e=Lt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Zs(n),t.memoizedState=Xs,e):Ja(t,a));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return vf(e,t,a,r,i,o,n);if(s){s=r.fallback,a=t.mode,o=e.child,i=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mt(o,l),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?s=mt(i,s):(s=Lt(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Zs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return s=e.child,e=s.sibling,r=mt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ja(e,t){return t=Ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&Oa(r),dn(t,e.child,null,n),e=Ja(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vf(e,t,n,r,o,s,a){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(C(422))),br(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Ao({mode:"visible",children:r.children},o,0,null),s=Lt(s,o,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&dn(t,e.child,null,a),t.child.memoizedState=Zs(a),t.memoizedState=Xs,s);if(!(t.mode&1))return br(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,s=Error(C(419)),r=ds(s,r,void 0),br(e,t,a,r)}if(i=(a&e.childLanes)!==0,fe||i){if(r=Z,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Ye(e,o),De(r,e,o,-1))}return ti(),r=ds(Error(C(421))),br(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jf.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,xe=ct(o.nextSibling),Se=t,M=!0,qe=null,e!==null&&(Pe[Ne++]=$e,Pe[Ne++]=Ve,Pe[Ne++]=Ot,$e=e.id,Ve=e.overflow,Ot=t),t=Ja(t,r.children),t.flags|=4096,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vs(e.return,t,n)}function ps(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function Tc(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(le(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(F,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ps(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ps(t,!0,n,null,s);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Pc(t),cn();break;case 5:Zu(t);break;case 1:he(t.type)&&no(t);break;case 4:Fa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Nc(e,t,n):(D(F,F.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,n)}return Ke(e,t,n)}var Ec,ea,bc,jc;Ec=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ea=function(){};bc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(Be.current);var s=null;switch(n){case"input":o=Cs(e,o),r=Cs(e,r),s=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":o=Ps(e,o),r=Ps(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=eo)}Ts(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var i=o[u];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(i=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==i&&(l!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&i[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,i=i?i.__html:void 0,l!=null&&i!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),s||i===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};jc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tn(e,t){if(!M)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(qa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return he(t.type)&&to(),se(t),null;case 3:return r=t.stateNode,pn(),_(me),_(ie),Wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(la(qe),qe=null))),ea(e,t),se(t),null;case 5:Ba(t);var o=At(er.current);if(n=t.type,e!==null&&t.stateNode!=null)bc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return se(t),null}if(e=At(Be.current),Tr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ze]=t,r[Xn]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(o=0;o<In.length;o++)U(In[o],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":gi(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":yi(r,s),U("invalid",r)}Ts(n,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var i=s[a];a==="children"?typeof i=="string"?r.textContent!==i&&(s.suppressHydrationWarning!==!0&&Nr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(s.suppressHydrationWarning!==!0&&Nr(r.textContent,i,e),o=["children",""+i]):Bn.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&U("scroll",r)}switch(n){case"input":yr(r),vi(r,s,!0);break;case"textarea":yr(r),xi(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=eo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ze]=t,e[Xn]=r,Ec(e,t,!1,!1),t.stateNode=e;e:{switch(a=Es(n,r),n){case"dialog":U("cancel",e),U("close",e),o=r;break;case"iframe":case"object":case"embed":U("load",e),o=r;break;case"video":case"audio":for(o=0;o<In.length;o++)U(In[o],e);o=r;break;case"source":U("error",e),o=r;break;case"img":case"image":case"link":U("error",e),U("load",e),o=r;break;case"details":U("toggle",e),o=r;break;case"input":gi(e,r),o=Cs(e,r),U("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),U("invalid",e);break;case"textarea":yi(e,r),o=Ps(e,r),U("invalid",e);break;default:o=r}Ts(n,o),i=o;for(s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="style"?iu(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&su(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wn(e,l):typeof l=="number"&&Wn(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&U("scroll",e):l!=null&&xa(e,s,l,a))}switch(n){case"input":yr(e),vi(e,r,!1);break;case"textarea":yr(e),xi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?tn(e,!!r.multiple,s,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)jc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=At(er.current),At(Be.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,(s=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return se(t),null;case 13:if(_(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&xe!==null&&t.mode&1&&!(t.flags&128))Qu(),cn(),t.flags|=98560,s=!1;else if(s=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[ze]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),s=!1}else qe!==null&&(la(qe),qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):ti())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return pn(),ea(e,t),e===null&&Yn(t.stateNode.containerInfo),se(t),null;case 10:return _a(t.type._context),se(t),null;case 17:return he(t.type)&&to(),se(t),null;case 19:if(_(F),s=t.memoizedState,s===null)return se(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Tn(s,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=lo(e),a!==null){for(t.flags|=128,Tn(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(F,F.current&1|2),t.child}e=e.sibling}s.tail!==null&&G()>mn&&(t.flags|=128,r=!0,Tn(s,!1),t.lanes=4194304)}else{if(!r)if(e=lo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!M)return se(t),null}else 2*G()-s.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Tn(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,n=F.current,D(F,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ei(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function wf(e,t){switch(qa(t),t.tag){case 1:return he(t.type)&&to(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),_(me),_(ie),Wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ba(t),null;case 13:if(_(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(F),null;case 4:return pn(),null;case 10:return _a(t.type._context),null;case 22:case 23:return ei(),null;case 24:return null;default:return null}}var jr=!1,ae=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,P=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ta(e,t,n){try{n()}catch(r){H(e,t,r)}}var ll=!1;function Cf(e,t){if(_s=Kr,e=Ou(),Ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,i=-1,l=-1,u=0,h=0,f=e,g=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(i=a+o),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++u===o&&(i=a),g===s&&++h===r&&(l=a),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=i===-1||l===-1?null:{start:i,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},Kr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ie(t.type,w),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=ll,ll=!1,v}function Mn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ta(t,n,s)}o=o.next}while(o!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[Xn],delete t[Bs],delete t[rf],delete t[of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ic(e){return e.tag===5||e.tag===3||e.tag===4}function ul(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=eo));else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var ee=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Lc(e,t,n),n=n.sibling}function Lc(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:ae||Zt(n,t);case 6:var r=ee,o=Le;ee=null,Ze(e,t,n),ee=r,Le=o,ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Le?(e=ee,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Gn(e)):ss(ee,n.stateNode));break;case 4:r=ee,o=Le,ee=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),ee=r,Le=o;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ta(n,t,a),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!ae&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){H(n,t,i)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,Ze(e,t,n),ae=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function cl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var o=Af.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,Le=!1;break e;case 3:ee=i.stateNode.containerInfo,Le=!0;break e;case 4:ee=i.stateNode.containerInfo,Le=!0;break e}i=i.return}if(ee===null)throw Error(C(160));Lc(s,a,o),ee=null,Le=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){H(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qc(t,e),t=t.sibling}function qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),_e(e),r&4){try{Mn(3,e,e.return),bo(3,e)}catch(w){H(e,e.return,w)}try{Mn(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Ae(t,e),_e(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Ae(t,e),_e(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var o=e.stateNode;try{Wn(o,"")}catch(w){H(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,i=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{i==="input"&&s.type==="radio"&&s.name!=null&&nu(o,s),Es(i,a);var u=Es(i,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?iu(o,f):h==="dangerouslySetInnerHTML"?su(o,f):h==="children"?Wn(o,f):xa(o,h,f,u)}switch(i){case"input":ks(o,s);break;case"textarea":ru(o,s);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?tn(o,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?tn(o,!!s.multiple,s.defaultValue,!0):tn(o,!!s.multiple,s.multiple?[]:"",!1))}o[Xn]=s}catch(w){H(e,e.return,w)}}break;case 6:if(Ae(t,e),_e(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(w){H(e,e.return,w)}}break;case 3:if(Ae(t,e),_e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Ae(t,e),_e(e);break;case 13:Ae(t,e),_e(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Xa=G())),r&4&&cl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||h,Ae(t,e),ae=u):Ae(t,e),_e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(f=P=h;P!==null;){switch(g=P,x=g.child,g.tag){case 0:case 11:case 14:case 15:Mn(4,g,g.return);break;case 1:Zt(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:Zt(g,g.return);break;case 22:if(g.memoizedState!==null){pl(f);continue}}x!==null?(x.return=g,P=x):pl(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(i=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,i.style.display=au("display",a))}catch(w){H(e,e.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){H(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(t,e),_e(e),r&4&&cl(e);break;case 21:break;default:Ae(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ic(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wn(o,""),r.flags&=-33);var s=ul(e);oa(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,i=ul(e);ra(e,i,a);break;default:throw Error(C(161))}}catch(l){H(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){P=e,Oc(e)}function Oc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||jr;if(!a){var i=o.alternate,l=i!==null&&i.memoizedState!==null||ae;i=jr;var u=ae;if(jr=a,(ae=l)&&!u)for(P=o;P!==null;)a=P,l=a.child,a.tag===22&&a.memoizedState!==null?fl(o):l!==null?(l.return=a,P=l):fl(o);for(;s!==null;)P=s,Oc(s),s=s.sibling;P=o,jr=i,ae=u}dl(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,P=s):dl(e)}}function dl(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ji(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ji(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Gn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ae||t.flags&512&&na(t)}catch(g){H(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function pl(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fl(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(l){H(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){H(t,o,l)}}var s=t.return;try{na(t)}catch(l){H(t,s,l)}break;case 5:var a=t.return;try{na(t)}catch(l){H(t,a,l)}}}catch(l){H(t,t.return,l)}if(t===e){P=null;break}var i=t.sibling;if(i!==null){i.return=t.return,P=i;break}P=t.return}}var Rf=Math.ceil,po=Xe.ReactCurrentDispatcher,Ya=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,q=0,Z=null,Q=null,ne=0,ye=0,en=xt(0),Y=0,or=null,Ut=0,jo=0,Ka=0,zn=null,pe=null,Xa=0,mn=1/0,We=null,fo=!1,sa=null,pt=null,Ar=!1,st=null,mo=0,Fn=0,aa=null,Wr=-1,Hr=0;function ue(){return q&6?G():Wr!==-1?Wr:Wr=G()}function ft(e){return e.mode&1?q&2&&ne!==0?ne&-ne:af.transition!==null?(Hr===0&&(Hr=xu()),Hr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function De(e,t,n,r){if(50<Fn)throw Fn=0,aa=null,Error(C(185));lr(e,n,r),(!(q&2)||e!==Z)&&(e===Z&&(!(q&2)&&(jo|=n),Y===4&&rt(e,ne)),ge(e,r),n===1&&q===0&&!(t.mode&1)&&(mn=G()+500,No&&wt()))}function ge(e,t){var n=e.callbackNode;ap(e,t);var r=Yr(e,e===Z?ne:0);if(r===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?sf(ml.bind(null,e)):$u(ml.bind(null,e)),tf(function(){!(q&6)&&wt()}),n=null;else{switch(wu(r)){case 1:n=Ra;break;case 4:n=vu;break;case 16:n=Jr;break;case 536870912:n=yu;break;default:n=Jr}n=Wc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(Wr=-1,Hr=0,q&6)throw Error(C(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Yr(e,e===Z?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var o=q;q|=2;var s=_c();(Z!==e||ne!==t)&&(We=null,mn=G()+500,It(e,t));do try{Tf();break}catch(i){Uc(e,i)}while(!0);Ua(),po.current=s,q=o,Q!==null?t=0:(Z=null,ne=0,t=Y)}if(t!==0){if(t===2&&(o=Ls(e),o!==0&&(r=o,t=ia(e,o))),t===1)throw n=or,It(e,0),rt(e,r),ge(e,G()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Pf(o)&&(t=ho(e,r),t===2&&(s=Ls(e),s!==0&&(r=s,t=ia(e,s))),t===1))throw n=or,It(e,0),rt(e,r),ge(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Tt(e,pe,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Xa+500-G(),10<t)){if(Yr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Fs(Tt.bind(null,e,pe,We),t);break}Tt(e,pe,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Oe(r);s=1<<a,a=t[a],a>o&&(o=a),r&=~s}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rf(r/1960))-r,10<r){e.timeoutHandle=Fs(Tt.bind(null,e,pe,We),r);break}Tt(e,pe,We);break;case 5:Tt(e,pe,We);break;default:throw Error(C(329))}}}return ge(e,G()),e.callbackNode===n?Dc.bind(null,e):null}function ia(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=ho(e,t),e!==2&&(t=pe,pe=n,t!==null&&la(t)),e}function la(e){pe===null?pe=e:pe.push.apply(pe,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Ue(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ka,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ml(e){if(q&6)throw Error(C(327));an();var t=Yr(e,0);if(!(t&1))return ge(e,G()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=Ls(e);r!==0&&(t=r,n=ia(e,r))}if(n===1)throw n=or,It(e,0),rt(e,t),ge(e,G()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,pe,We),ge(e,G()),null}function Za(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(mn=G()+500,No&&wt())}}function _t(e){st!==null&&st.tag===0&&!(q&6)&&an();var t=q;q|=1;var n=Ee.transition,r=O;try{if(Ee.transition=null,O=1,e)return e()}finally{O=r,Ee.transition=n,q=t,!(q&6)&&wt()}}function ei(){ye=en.current,_(en)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ef(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(qa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&to();break;case 3:pn(),_(me),_(ie),Wa();break;case 5:Ba(r);break;case 4:pn();break;case 13:_(F);break;case 19:_(F);break;case 10:_a(r.type._context);break;case 22:case 23:ei()}n=n.return}if(Z=e,Q=e=mt(e.current,null),ne=ye=t,Y=0,or=null,Ka=jo=Ut=0,pe=zn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}n.pending=r}jt=null}return e}function Uc(e,t){do{var n=Q;try{if(Ua(),zr.current=co,uo){for(var r=B.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(Dt=0,X=J=B=null,_n=!1,tr=0,Ya.current=null,n===null||n.return===null){Y=1,or=t,Q=null;break}e:{var s=e,a=n.return,i=n,l=t;if(t=ne,i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=i,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=tl(a);if(x!==null){x.flags&=-257,nl(x,a,i,s,t),x.mode&1&&el(s,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){el(s,u,t),ti();break e}l=Error(C(426))}}else if(M&&i.mode&1){var k=tl(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),nl(k,a,i,s,t),Oa(fn(l,i));break e}}s=l=fn(l,i),Y!==4&&(Y=2),zn===null?zn=[s]:zn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=wc(s,l,t);Qi(s,p);break e;case 1:i=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pt===null||!pt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Sc(s,i,t);Qi(s,y);break e}}s=s.return}while(s!==null)}zc(n)}catch(R){t=R,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function _c(){var e=po.current;return po.current=co,e===null?co:e}function ti(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(Ut&268435455)&&!(jo&268435455)||rt(Z,ne)}function ho(e,t){var n=q;q|=2;var r=_c();(Z!==e||ne!==t)&&(We=null,It(e,t));do try{Nf();break}catch(o){Uc(e,o)}while(!0);if(Ua(),q=n,po.current=r,Q!==null)throw Error(C(261));return Z=null,ne=0,Y}function Nf(){for(;Q!==null;)Mc(Q)}function Tf(){for(;Q!==null&&!Kd();)Mc(Q)}function Mc(e){var t=Bc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?zc(e):Q=t,Ya.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=xf(n,t,ye),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function Tt(e,t,n){var r=O,o=Ee.transition;try{Ee.transition=null,O=1,Ef(e,t,n,r)}finally{Ee.transition=o,O=r}return null}function Ef(e,t,n,r){do an();while(st!==null);if(q&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(ip(e,s),e===Z&&(Q=Z=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ar||(Ar=!0,Wc(Jr,function(){return an(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ee.transition,Ee.transition=null;var a=O;O=1;var i=q;q|=4,Ya.current=null,Cf(e,n),qc(n,e),Gp(Ms),Kr=!!_s,Ms=_s=null,e.current=n,kf(n),Xd(),q=i,O=a,Ee.transition=s}else e.current=n;if(Ar&&(Ar=!1,st=e,mo=o),s=e.pendingLanes,s===0&&(pt=null),tp(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=sa,sa=null,e;return mo&1&&e.tag!==0&&an(),s=e.pendingLanes,s&1?e===aa?Fn++:(Fn=0,aa=e):Fn=0,wt(),null}function an(){if(st!==null){var e=wu(mo),t=Ee.transition,n=O;try{if(Ee.transition=null,O=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,mo=0,q&6)throw Error(C(331));var o=q;for(q|=4,P=e.current;P!==null;){var s=P,a=s.child;if(P.flags&16){var i=s.deletions;if(i!==null){for(var l=0;l<i.length;l++){var u=i[l];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Mn(8,h,s)}var f=h.child;if(f!==null)f.return=h,P=f;else for(;P!==null;){h=P;var g=h.sibling,x=h.return;if(Ac(h),h===u){P=null;break}if(g!==null){g.return=x,P=g;break}P=x}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,P=a;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Mn(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,P=p;break e}P=s.return}}var d=e.current;for(P=d;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=d;P!==null;){if(i=P,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:bo(9,i)}}catch(R){H(i,i.return,R)}if(i===a){P=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,P=y;break e}P=i.return}}if(q=o,wt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{O=n,Ee.transition=t}}return!1}function hl(e,t,n){t=fn(n,t),t=wc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(lr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)hl(e,e,n);else for(;t!==null;){if(t.tag===3){hl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=fn(n,e),e=Sc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(lr(t,1,e),ge(t,e));break}}t=t.return}}function bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ne&n)===n&&(Y===4||Y===3&&(ne&130023424)===ne&&500>G()-Xa?It(e,0):Ka|=n),ge(e,t)}function Fc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(lr(e,t,n),ge(e,n))}function jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fc(e,n)}function Af(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Fc(e,n)}var Bc;Bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,yf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,M&&t.flags&1048576&&Vu(t,oo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var o=un(t,ie.current);sn(t,n),o=$a(null,t,r,e,o,n);var s=Va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(s=!0,no(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,za(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Qs(t,r,e,n),t=Ks(null,t,r,!0,s,n)):(t.tag=0,M&&s&&La(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Lf(r),e=Ie(r,e),o){case 0:t=Ys(null,t,r,e,n);break e;case 1:t=sl(null,t,r,e,n);break e;case 11:t=rl(null,t,r,e,n);break e;case 14:t=ol(null,t,r,Ie(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),sl(e,t,r,o,n);case 3:e:{if(Pc(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Xu(e,t),io(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=fn(Error(C(423)),t),t=al(e,t,r,n,o);break e}else if(r!==o){o=fn(Error(C(424)),t),t=al(e,t,r,n,o);break e}else for(xe=ct(t.stateNode.containerInfo.firstChild),Se=t,M=!0,qe=null,n=Yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===o){t=Ke(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return Zu(t),e===null&&$s(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,zs(r,o)?a=null:s!==null&&zs(r,s)&&(t.flags|=32),Rc(e,t),le(e,t,a,n),t.child;case 6:return e===null&&$s(t),null;case 13:return Nc(e,t,n);case 4:return Fa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),rl(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,a=o.value,D(so,r._currentValue),r._currentValue=a,s!==null)if(Ue(s.value,a)){if(s.children===o.children&&!me.current){t=Ke(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var i=s.dependencies;if(i!==null){a=s.child;for(var l=i.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ge(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vs(s.return,n,t),i.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(C(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),Vs(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=be(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Ie(r,t.pendingProps),o=Ie(r.type,o),ol(e,t,r,o,n);case 15:return Cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ie(r,o),Br(e,t),t.tag=1,he(r)?(e=!0,no(t)):e=!1,sn(t,n),xc(t,r,o),Qs(t,r,o,n),Ks(null,t,r,!0,e,n);case 19:return Tc(e,t,n);case 22:return kc(e,t,n)}throw Error(C(156,t.tag))};function Wc(e,t){return gu(e,t)}function If(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new If(e,t,n,r)}function ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return ni(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Sa)return 11;if(e===Ca)return 14}return 2}function mt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,o,s){var a=2;if(r=e,typeof e=="function")ni(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ht:return Lt(n.children,o,s,t);case wa:a=8,o|=8;break;case ys:return e=Te(12,n,t,o|2),e.elementType=ys,e.lanes=s,e;case xs:return e=Te(13,n,t,o),e.elementType=xs,e.lanes=s,e;case ws:return e=Te(19,n,t,o),e.elementType=ws,e.lanes=s,e;case Zl:return Ao(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kl:a=10;break e;case Xl:a=9;break e;case Sa:a=11;break e;case Ca:a=14;break e;case et:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Te(a,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function Lt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Ao(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Zl,e.lanes=n,e.stateNode={isHidden:!1},e}function fs(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ri(e,t,n,r,o,s,a,i,l){return e=new qf(e,t,n,i,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Te(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(s),e}function Of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hc(e){if(!e)return vt;e=e._reactInternals;e:{if(zt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(he(n))return Hu(e,n,t)}return t}function $c(e,t,n,r,o,s,a,i,l){return e=ri(n,r,!0,e,o,s,a,i,l),e.context=Hc(null),n=e.current,r=ue(),o=ft(n),s=Ge(r,o),s.callback=t??null,dt(n,s,o),e.current.lanes=o,lr(e,o,r),ge(e,r),e}function Io(e,t,n,r){var o=t.current,s=ue(),a=ft(o);return n=Hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,a),e!==null&&(De(e,o,a,s),Mr(e,o,a)),a}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oi(e,t){gl(e,t),(e=e.alternate)&&gl(e,t)}function Df(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function si(e){this._internalRoot=e}Lo.prototype.render=si.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Io(e,t,null,null)};Lo.prototype.unmount=si.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_t(function(){Io(null,e,null,null)}),t[Je]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Pu(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vl(){}function Uf(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=go(a);s.call(u)}}var a=$c(t,r,e,0,null,!1,!1,"",vl);return e._reactRootContainer=a,e[Je]=a.current,Yn(e.nodeType===8?e.parentNode:e),_t(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var u=go(l);i.call(u)}}var l=ri(e,0,!1,null,null,!1,!1,"",vl);return e._reactRootContainer=l,e[Je]=l.current,Yn(e.nodeType===8?e.parentNode:e),_t(function(){Io(t,l,n,r)}),l}function Oo(e,t,n,r,o){var s=n._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var i=o;o=function(){var l=go(a);i.call(l)}}Io(t,a,e,o)}else a=Uf(n,t,e,o,r);return go(a)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(Pa(t,n|1),ge(t,G()),!(q&6)&&(mn=G()+500,wt()))}break;case 13:_t(function(){var r=Ye(e,1);if(r!==null){var o=ue();De(r,e,1,o)}}),oi(e,1)}};Na=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();De(t,e,134217728,n)}oi(e,134217728)}};Cu=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ue();De(n,e,t,r)}oi(e,t)}};ku=function(){return O};Ru=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};js=function(e,t,n){switch(t){case"input":if(ks(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Po(r);if(!o)throw Error(C(90));tu(r),ks(r,o)}}}break;case"textarea":ru(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};cu=Za;du=_t;var _f={usingClientEntryPoint:!1,Events:[cr,Qt,Po,lu,uu,Za]},En={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mu(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{So=Ir.inject(Mf),Fe=Ir}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(C(200));return Of(e,t,null,n)};ke.createRoot=function(e,t){if(!ai(e))throw Error(C(299));var n=!1,r="",o=Vc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ri(e,1,!1,null,null,n,!1,r,o),e[Je]=t.current,Yn(e.nodeType===8?e.parentNode:e),new si(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=mu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return _t(e)};ke.hydrate=function(e,t,n){if(!qo(t))throw Error(C(200));return Oo(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!ai(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",a=Vc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=$c(t,null,e,1,n??null,o,!1,s,a),e[Je]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)};ke.render=function(e,t,n){if(!qo(t))throw Error(C(200));return Oo(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!qo(e))throw Error(C(40));return e._reactRootContainer?(_t(function(){Oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};ke.unstable_batchedUpdates=Za;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Oo(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Gl.exports=ke;var zf=Gl.exports,yl=zf;gs.createRoot=yl.createRoot,gs.hydrateRoot=yl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const xl="popstate";function Ff(e){e===void 0&&(e={});function t(o,s){let{pathname:a="/",search:i="",hash:l=""}=Ft(o.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ua("",{pathname:a,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){let a=o.document.querySelector("base"),i="";if(a&&a.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");i=u===-1?l:l.slice(0,u)}return i+"#"+(typeof s=="string"?s:vo(s))}function r(o,s){Do(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Wf(t,n,r,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Do(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bf(){return Math.random().toString(36).substr(2,8)}function wl(e,t){return{usr:e.state,key:e.key,idx:t}}function ua(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||Bf()})}function vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wf(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,a=o.history,i=at.Pop,l=null,u=h();u==null&&(u=0,a.replaceState(sr({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function f(){i=at.Pop;let k=h(),p=k==null?null:k-u;u=k,l&&l({action:i,location:w.location,delta:p})}function g(k,p){i=at.Push;let d=ua(w.location,k,p);n&&n(d,k),u=h()+1;let m=wl(d,u),y=w.createHref(d);try{a.pushState(m,"",y)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(y)}s&&l&&l({action:i,location:w.location,delta:1})}function x(k,p){i=at.Replace;let d=ua(w.location,k,p);n&&n(d,k),u=h();let m=wl(d,u),y=w.createHref(d);a.replaceState(m,"",y),s&&l&&l({action:i,location:w.location,delta:0})}function v(k){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof k=="string"?k:vo(k);return d=d.replace(/ $/,"%20"),$(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return i},get location(){return e(o,a)},listen(k){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(xl,f),l=k,()=>{o.removeEventListener(xl,f),l=null}},createHref(k){return t(o,k)},createURL:v,encodeLocation(k){let p=v(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:x,go(k){return a.go(k)}};return w}var Sl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sl||(Sl={}));function Hf(e,t,n){return n===void 0&&(n="/"),$f(e,t,n)}function $f(e,t,n,r){let o=typeof t=="string"?Ft(t):t,s=hn(o.pathname||"/",n);if(s==null)return null;let a=Qc(e);Vf(a);let i=null;for(let l=0;i==null&&l<a.length;++l){let u=rm(s);i=tm(a[l],u)}return i}function Qc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,a,i)=>{let l={relativePath:i===void 0?s.path||"":i,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&($(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ht([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&($(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qc(s.children,t,h,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zf(u,s.index),routesMeta:h})};return e.forEach((s,a)=>{var i;if(s.path===""||!((i=s.path)!=null&&i.includes("?")))o(s,a);else for(let l of Jc(s.path))o(s,a,l)}),t}function Jc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let a=Jc(r.join("/")),i=[];return i.push(...a.map(l=>l===""?s:[s,l].join("/"))),o&&i.push(...a),i.map(l=>e.startsWith("/")&&l===""?"/":l)}function Vf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:em(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gf=/^:[\w-]+$/,Qf=3,Jf=2,Yf=1,Kf=10,Xf=-2,Cl=e=>e==="*";function Zf(e,t){let n=e.split("/"),r=n.length;return n.some(Cl)&&(r+=Xf),t&&(r+=Jf),n.filter(o=>!Cl(o)).reduce((o,s)=>o+(Gf.test(s)?Qf:s===""?Yf:Kf),r)}function em(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function tm(e,t,n){let{routesMeta:r}=e,o={},s="/",a=[];for(let i=0;i<r.length;++i){let l=r[i],u=i===r.length-1,h=s==="/"?t:t.slice(s.length)||"/",f=ca({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),g=l.route;if(!f)return null;Object.assign(o,f.params),a.push({params:o,pathname:ht([s,f.pathname]),pathnameBase:lm(ht([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=ht([s,f.pathnameBase]))}return a}function ca(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],a=s.replace(/(.)\/+$/,"$1"),i=o.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let w=i[f]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=i[f];return x&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function nm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Do(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,l)=>(r.push({paramName:i,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function rm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Do(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sm=e=>om.test(e);function am(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ft(e):e,s;if(n)if(sm(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Do(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=kl(n.substring(1),"/"):s=kl(n,t)}else s=t;return{pathname:s,search:um(r),hash:cm(o)}}function kl(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function hs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function im(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yc(e,t){let n=im(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ft(e):(o=sr({},e),$(!o.pathname||!o.pathname.includes("?"),hs("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),hs("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),hs("#","search","hash",o)));let s=e===""||o.pathname==="",a=s?"/":o.pathname,i;if(a==null)i=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}i=f>=0?t[f]:"/"}let l=am(o,i),u=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),lm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),um=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xc=["post","put","patch","delete"];new Set(Xc);const pm=["get",...Xc];new Set(pm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const Uo=S.createContext(null),Zc=S.createContext(null),St=S.createContext(null),_o=S.createContext(null),Ct=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=S.createContext(null);function fm(e,t){let{relative:n}=t===void 0?{}:t;pr()||$(!1);let{basename:r,navigator:o}=S.useContext(St),{hash:s,pathname:a,search:i}=Mo(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:ht([r,a])),o.createHref({pathname:l,search:i,hash:s})}function pr(){return S.useContext(_o)!=null}function fr(){return pr()||$(!1),S.useContext(_o).location}function td(e){S.useContext(St).static||S.useLayoutEffect(e)}function ii(){let{isDataRoute:e}=S.useContext(Ct);return e?Nm():mm()}function mm(){pr()||$(!1);let e=S.useContext(Uo),{basename:t,future:n,navigator:r}=S.useContext(St),{matches:o}=S.useContext(Ct),{pathname:s}=fr(),a=JSON.stringify(Yc(o,n.v7_relativeSplatPath)),i=S.useRef(!1);return td(()=>{i.current=!0}),S.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let f=Kc(u,JSON.parse(a),s,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:ht([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,a,s,e])}function nd(){let{matches:e}=S.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function Mo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(St),{matches:o}=S.useContext(Ct),{pathname:s}=fr(),a=JSON.stringify(Yc(o,r.v7_relativeSplatPath));return S.useMemo(()=>Kc(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function hm(e,t){return gm(e,t)}function gm(e,t,n,r){pr()||$(!1);let{navigator:o}=S.useContext(St),{matches:s}=S.useContext(Ct),a=s[s.length-1],i=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=fr(),h;if(t){var f;let k=typeof t=="string"?Ft(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||$(!1),h=k}else h=u;let g=h.pathname||"/",x=g;if(l!=="/"){let k=l.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=Hf(e,{pathname:x}),w=Sm(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:ht([l,o.encodeLocation?o.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:ht([l,o.encodeLocation?o.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&w?S.createElement(_o.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:at.Pop}},w):w}function vm(){let e=Pm(),t=dm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const ym=S.createElement(vm,null);class xm extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Ct.Provider,{value:this.props.routeContext},S.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wm(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(Uo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ct.Provider,{value:t},r)}function Sm(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=(o=n)==null?void 0:o.errors;if(i!=null){let h=a.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);h>=0||$(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:g,errors:x}=n,v=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,f,g)=>{let x,v=!1,w=null,k=null;n&&(x=i&&f.route.id?i[f.route.id]:void 0,w=f.route.errorElement||ym,l&&(u<0&&g===0?(Tm("route-fallback"),v=!0,k=null):u===g&&(v=!0,k=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,g+1)),d=()=>{let m;return x?m=w:v?m=k:f.route.Component?m=S.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,S.createElement(wm,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?S.createElement(xm,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var rd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rd||{}),od=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(od||{});function Cm(e){let t=S.useContext(Uo);return t||$(!1),t}function km(e){let t=S.useContext(Zc);return t||$(!1),t}function Rm(e){let t=S.useContext(Ct);return t||$(!1),t}function sd(e){let t=Rm(),n=t.matches[t.matches.length-1];return n.route.id||$(!1),n.route.id}function Pm(){var e;let t=S.useContext(ed),n=km(),r=sd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Nm(){let{router:e}=Cm(rd.UseNavigateStable),t=sd(od.UseNavigateStable),n=S.useRef(!1);return td(()=>{n.current=!0}),S.useCallback(function(o,s){s===void 0&&(s={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ar({fromRouteId:t},s)))},[e,t])}const Rl={};function Tm(e,t,n){Rl[e]||(Rl[e]=!0)}function Em(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Et(e){$(!1)}function bm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=at.Pop,navigator:s,static:a=!1,future:i}=e;pr()&&$(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:a,future:ar({v7_relativeSplatPath:!1},i)}),[l,i,s,a]);typeof r=="string"&&(r=Ft(r));let{pathname:h="/",search:f="",hash:g="",state:x=null,key:v="default"}=r,w=S.useMemo(()=>{let k=hn(h,l);return k==null?null:{location:{pathname:k,search:f,hash:g,state:x,key:v},navigationType:o}},[l,h,f,g,x,v,o]);return w==null?null:S.createElement(St.Provider,{value:u},S.createElement(_o.Provider,{children:n,value:w}))}function jm(e){let{children:t,location:n}=e;return hm(da(t),n)}new Promise(()=>{});function da(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let s=[...t,o];if(r.type===S.Fragment){n.push.apply(n,da(r.props.children,s));return}r.type!==Et&&$(!1),!r.props.index||!r.props.children||$(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=da(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yo.apply(this,arguments)}function ad(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,s;for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Am(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Im(e,t){return e.button===0&&(!t||t==="_self")&&!Am(e)}const Lm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Om="6";try{window.__reactRouterVersion=Om}catch{}const Dm=S.createContext({isTransitioning:!1}),Um="startTransition",Pl=Ed[Um];function _m(e){let{basename:t,children:n,future:r,window:o}=e,s=S.useRef();s.current==null&&(s.current=Ff({window:o,v5Compat:!0}));let a=s.current,[i,l]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},h=S.useCallback(f=>{u&&Pl?Pl(()=>l(f)):l(f)},[l,u]);return S.useLayoutEffect(()=>a.listen(h),[a,h]),S.useEffect(()=>Em(r),[r]),S.createElement(bm,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a,future:r})}const Mm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:s,replace:a,state:i,target:l,to:u,preventScrollReset:h,viewTransition:f}=t,g=ad(t,Lm),{basename:x}=S.useContext(St),v,w=!1;if(typeof u=="string"&&zm.test(u)&&(v=u,Mm))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),R=hn(y.pathname,x);y.origin===m.origin&&R!=null?u=R+y.search+y.hash:w=!0}catch{}let k=fm(u,{relative:o}),p=Bm(u,{replace:a,state:i,target:l,preventScrollReset:h,relative:o,viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",yo({},g,{href:v||k,onClick:w||s?r:d,ref:n,target:l}))}),Lr=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:s="",end:a=!1,style:i,to:l,viewTransition:u,children:h}=t,f=ad(t,qm),g=Mo(l,{relative:f.relative}),x=fr(),v=S.useContext(Zc),{navigator:w,basename:k}=S.useContext(St),p=v!=null&&Wm(g)&&u===!0,d=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,m=x.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(m=m.toLowerCase(),y=y?y.toLowerCase():null,d=d.toLowerCase()),y&&k&&(y=hn(y,k)||y);const R=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=m===d||!a&&m.startsWith(d)&&m.charAt(R)==="/",E=y!=null&&(y===d||!a&&y.startsWith(d)&&y.charAt(d.length)==="/"),b={isActive:T,isPending:E,isTransitioning:p},z=T?r:void 0,A;typeof s=="function"?A=s(b):A=[s,T?"active":null,E?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ve=typeof i=="function"?i(b):i;return S.createElement(we,yo({},f,{"aria-current":z,className:A,ref:n,style:ve,to:l,viewTransition:u}),typeof h=="function"?h(b):h)});var pa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pa||(pa={}));var Nl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nl||(Nl={}));function Fm(e){let t=S.useContext(Uo);return t||$(!1),t}function Bm(e,t){let{target:n,replace:r,state:o,preventScrollReset:s,relative:a,viewTransition:i}=t===void 0?{}:t,l=ii(),u=fr(),h=Mo(e,{relative:a});return S.useCallback(f=>{if(Im(f,n)){f.preventDefault();let g=r!==void 0?r:vo(u)===vo(h);l(e,{replace:g,state:o,preventScrollReset:s,relative:a,viewTransition:i})}},[u,l,h,r,o,n,e,s,a,i])}function Wm(e,t){t===void 0&&(t={});let n=S.useContext(Dm);n==null&&$(!1);let{basename:r}=Fm(pa.useViewTransitionState),o=Mo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ca(o.pathname,a)!=null||ca(o.pathname,s)!=null}const id="nextjs-course-progress",xo={attempts:0,correct:0,bestStreak:0},ld={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null,randomQuestionStats:{...xo},quickLineStats:{...xo}};function Hm(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TOPIC":return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:!0,taskCompleted:!0}}};case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RECORD_RANDOM_QUESTION":{const n=e.randomQuestionStats??xo;return{...e,randomQuestionStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RECORD_QUICK_LINE":{const n=e.quickLineStats??xo;return{...e,quickLineStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RESET":return ld;default:return e}}function $m(){try{const e=localStorage.getItem(id);if(e)return JSON.parse(e)}catch{}return ld}const ud=S.createContext(null);function Vm({children:e}){const[t,n]=S.useReducer(Hm,void 0,$m);return S.useEffect(()=>{localStorage.setItem(id,JSON.stringify(t))},[t]),c.jsx(ud.Provider,{value:{progress:t,dispatch:n},children:e})}function kt(){const e=S.useContext(ud);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const Gm={id:"mod-1",title:"Next.js Fundamentals",description:"Project setup, folder structure, and core concepts that make Next.js different from plain React. Learn how the App Router works, understand the rendering strategies (SSR, SSG, ISR, CSR), and grasp the fundamental distinction between Server and Client Components.",topics:[{id:"mod1-t1",title:"What is Next.js & Why Use It",explanation:`## What is Next.js?

Next.js is a **React framework** built by Vercel that adds server-side rendering, static site generation, file-based routing, and many production-grade features on top of React.

### React vs Next.js

| Feature | React (CRA/Vite) | Next.js |
|---------|------------------|---------|
| Rendering | Client-side only | SSR, SSG, ISR, CSR |
| Routing | Manual (react-router) | File-based (automatic) |
| SEO | Poor (empty HTML) | Excellent (pre-rendered) |
| API Routes | Separate backend | Built-in API routes |
| Code Splitting | Manual | Automatic |
| Image Optimization | Manual | Built-in \`next/image\` |

### How SSR Solves the SPA Problem

A traditional React SPA sends an **empty HTML shell** to the browser:

\`\`\`html
<!-- SPA sends an empty shell — nothing visible until JS loads -->
<div id="root"></div>
<script src="/bundle.js"><\/script>
\`\`\`

The browser must download, parse, and execute JavaScript before any content appears. This causes:
- **Poor SEO** — search engines see an empty page
- **Slow First Contentful Paint** — users see a blank screen
- **No content without JavaScript**

Next.js **pre-renders** pages on the server, sending fully-formed HTML:

\`\`\`html
<!-- SSR sends fully-formed HTML — content is visible immediately -->
<div id="root">
  <h1>Welcome to My Site</h1>
  <p>This content is immediately visible!</p>
</div>
<!-- JS bundle hydrates the page after the initial render -->
<script src="/bundle.js"><\/script>
\`\`\`

### Rendering Strategies

\`\`\`
SSR (Server-Side Rendering)
  → HTML generated on EVERY request
  → Always fresh data
  → Slower TTFB

SSG (Static Site Generation)
  → HTML generated at BUILD time
  → Fastest possible response
  → Data can become stale

ISR (Incremental Static Regeneration)
  → SSG + revalidation after N seconds
  → Best of both worlds

CSR (Client-Side Rendering)
  → Traditional React behavior
  → Good for authenticated/dynamic content
\`\`\``,task:{description:'Create a simple Next.js page component that would be placed at `app/page.tsx`. It should render an h1 with "Welcome to Next.js", a paragraph explaining SSR benefits, and a list of 3 rendering strategies.',starterCode:`// app/page.tsx
export default function HomePage() {
  // TODO: Return JSX with:
  // - h1: "Welcome to Next.js"
  // - p: explaining SSR benefits
  // - ul with 3 li items for SSR, SSG, ISR
  return null;
}`,solution:`// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>
      <p>
        Next.js pre-renders pages on the server, providing excellent SEO,
        fast initial page loads, and content visible without JavaScript.
      </p>
      <ul>
        <li>SSR — Server-Side Rendering: Fresh HTML on every request</li>
        <li>SSG — Static Site Generation: Pre-built HTML at build time</li>
        <li>ISR — Incremental Static Regeneration: Static + revalidation</li>
      </ul>
    </main>
  );
}`,hints:["Next.js page components are default exports","In the App Router, pages go in app/page.tsx","No special imports needed for a basic server component"]}},{id:"mod1-t2",title:"Project Structure & Configuration",explanation:`## Next.js Project Structure (App Router)

\`\`\`
my-app/
├── app/
│   ├── layout.tsx        # Root layout (wraps all pages)
│   ├── page.tsx           # Home page (/)
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.tsx       # /about
│   └── blog/
│       ├── page.tsx       # /blog
│       └── [slug]/
│           └── page.tsx   # /blog/:slug
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── package.json
└── tsconfig.json
\`\`\`

### Key Files

**\`app/layout.tsx\`** — The root layout wraps every page:

\`\`\`tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

**\`next.config.js\`** — Configuration file:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables stricter checks during development
  images: {
    domains: ['example.com'], // Whitelist external image domains for next/image
  },
};

module.exports = nextConfig;
\`\`\`

### Special Files in the App Router

| File | Purpose |
|------|---------|
| \`page.tsx\` | The UI for a route |
| \`layout.tsx\` | Shared layout that wraps children |
| \`loading.tsx\` | Loading UI (Suspense boundary) |
| \`error.tsx\` | Error UI (Error boundary) |
| \`not-found.tsx\` | 404 UI |
| \`template.tsx\` | Like layout but re-mounts on navigation |
| \`route.ts\` | API endpoint |

### Layout vs Template

- **Layout**: Persists across navigations, state is preserved
- **Template**: Re-creates on every navigation, state resets

\`\`\`tsx
// app/dashboard/layout.tsx — state persists
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}

// app/dashboard/template.tsx — re-mounts each time
export default function DashboardTemplate({ children }) {
  return <div className="fade-in">{children}</div>;
}
\`\`\``,task:{description:"Create a root layout component (`app/layout.tsx`) that includes an HTML structure with a header containing navigation links (Home, About, Blog), a main area for children, and a footer.",starterCode:`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Return <html> with <body> containing:
  // - <header> with <nav> containing links to /, /about, /blog
  // - <main> wrapping {children}
  // - <footer> with copyright text
  return null;
}`,solution:`// app/layout.tsx
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}`,hints:["Use next/link for client-side navigation instead of <a> tags","The layout must return <html> and <body> tags","children prop contains the page content"]}},{id:"mod1-t3",title:"Server Components vs Client Components",explanation:`## React Server Components (RSC)

In Next.js App Router, **all components are Server Components by default**. This is a fundamental shift from traditional React.

### Server Components

\`\`\`tsx
// This runs ONLY on the server — no "use client" directive needed
async function ProductList() {
  // Direct database access — this code never reaches the browser bundle
  const products = await db.query('SELECT * FROM products');

  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.name} - \${p.price}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Benefits:**
- Direct database/filesystem access
- Zero bundle size (code stays on server)
- Automatic code splitting
- Can use \`async/await\` directly

**Limitations:**
- No \`useState\`, \`useEffect\`, or other hooks
- No browser APIs (\`window\`, \`document\`)
- No event handlers (\`onClick\`, \`onChange\`)

### Client Components

Add \`"use client"\` at the top of the file:

\`\`\`tsx
"use client"; // Required directive to use hooks and event handlers

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0); // State lives in the browser

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\`

### The Boundary Rule

> A Client Component can only import other Client Components. But a Server Component can render both Server and Client Components.

\`\`\`tsx
// app/page.tsx (Server Component) — can render both Server and Client Components
import { Counter } from './Counter';      // Client Component ✓
import { ProductList } from './Products'; // Server Component ✓

export default function Page() {
  return (
    <div>
      <ProductList />   {/* Server: fetches data */}
      <Counter />       {/* Client: handles interaction */}
    </div>
  );
}
\`\`\`

### When to Use Each

| Use Server Component | Use Client Component |
|---------------------|---------------------|
| Fetch data | Interactive UI (forms, buttons) |
| Access backend resources | useState / useEffect |
| Keep sensitive data on server | Browser APIs |
| Reduce client bundle | Event listeners |
| Heavy dependencies | Real-time updates |`,task:{description:"Create a page that uses both a Server Component (to display a list of items fetched from an async function) and a Client Component (an interactive search filter with useState).",starterCode:`// components/SearchFilter.tsx
// TODO: Make this a Client Component with useState
// Accept items[] and render filtered results

// app/page.tsx
// TODO: Fetch items (simulate with async function)
// Render both the static list and the SearchFilter`,solution:`// components/SearchFilter.tsx
"use client";

import { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

export function SearchFilter({ items }: { items: Item[] }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filtered.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// app/page.tsx
import { SearchFilter } from '../components/SearchFilter';

async function getItems() {
  return [
    { id: 1, name: 'Next.js' },
    { id: 2, name: 'React' },
    { id: 3, name: 'TypeScript' },
  ];
}

export default async function Page() {
  const items = await getItems();

  return (
    <main>
      <h1>Items</h1>
      <SearchFilter items={items} />
    </main>
  );
}`,hints:['Client Components need "use client" at the top of the file',"Server Components can be async functions","Pass data from Server to Client Components via props"]}}],test:[{id:"mod1-q1",question:"What is the primary advantage of Server-Side Rendering (SSR) over Client-Side Rendering?",options:["Faster JavaScript execution","Pre-rendered HTML for better SEO and faster FCP","Smaller bundle sizes","No need for a server"],correctAnswer:1,explanation:"SSR sends fully-rendered HTML from the server, which search engines can index immediately and users can see before JavaScript loads."},{id:"mod1-q2",question:"In the Next.js App Router, what is the purpose of layout.tsx?",options:["Defines API routes","Provides shared UI that wraps child pages and persists across navigations","Handles error boundaries","Configures the build process"],correctAnswer:1,explanation:"layout.tsx defines shared UI structure that wraps child segments. Unlike templates, layouts persist state across navigations."},{id:"mod1-q3",question:"By default, components in the Next.js App Router are:",options:["Client Components","Server Components","Static Components","Hybrid Components"],correctAnswer:1,explanation:'In the App Router, all components are Server Components by default. You must add "use client" to make them Client Components.'},{id:"mod1-q4",question:"Which directive turns a Server Component into a Client Component?",options:['"use strict"','"use client"','"use browser"','"use interactive"'],correctAnswer:1,explanation:'The "use client" directive at the top of a file marks it as a Client Component, enabling hooks and browser APIs.'},{id:"mod1-q5",question:"What can a Server Component do that a Client Component cannot?",options:["Use useState","Directly access databases and the filesystem","Handle click events","Use browser APIs"],correctAnswer:1,explanation:"Server Components run only on the server, so they can directly access databases, file systems, and other server-only resources."}]},Qm={id:"mod-2",title:"File-Based Routing",description:"Master Next.js automatic routing: nested routes, dynamic segments, route groups, and parallel routes. Explore how the file system maps to URLs, how to capture dynamic parameters, and how to organize complex layouts without affecting the URL structure.",topics:[{id:"mod2-t1",title:"Basic & Nested Routes",explanation:`## File-Based Routing

Next.js uses the **file system** to define routes. Each folder in \`app/\` becomes a URL segment.

\`\`\`
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── blog/
│   ├── page.tsx          → /blog
│   └── categories/
│       └── page.tsx      → /blog/categories
└── dashboard/
    ├── page.tsx          → /dashboard
    ├── settings/
    │   └── page.tsx      → /dashboard/settings
    └── analytics/
        └── page.tsx      → /dashboard/analytics
\`\`\`

### Rules

1. **Only \`page.tsx\` makes a route accessible** — folders without \`page.tsx\` are just organizational
2. **Layouts cascade** — each segment can have its own \`layout.tsx\`
3. **Colocation** — you can put components, tests, styles alongside pages

### Nested Layouts

\`\`\`tsx
// app/dashboard/layout.tsx — shared wrapper for all /dashboard/* pages
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <aside>
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/settings">Settings</a>
          <a href="/dashboard/analytics">Analytics</a>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
\`\`\`

The layout wraps all child pages under \`/dashboard/*\`.

### Navigation with \`next/link\`

\`\`\`tsx
import Link from 'next/link'; // Enables SPA-like navigation without full page reload

function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog" prefetch={false}>Blog</Link>
    </nav>
  );
}
\`\`\`

> \`Link\` automatically prefetches linked pages in production for instant navigation.`,task:{description:"Create a dashboard layout with a sidebar navigation containing links to /dashboard, /dashboard/settings, and /dashboard/analytics. The layout should wrap children in a flex container.",starterCode:`// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Create a flex layout with:
  // - sidebar with 3 navigation links
  // - main area showing {children}
  return null;
}`,solution:`// app/dashboard/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 240, borderRight: '1px solid #ccc', padding: 16 }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Link href="/dashboard">Overview</Link>
          <Link href="/dashboard/settings">Settings</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 16 }}>
        {children}
      </main>
    </div>
  );
}`,hints:["Use Link from next/link for client-side navigation","The layout receives children as a prop","Layouts persist across child page navigations"]}},{id:"mod2-t2",title:"Dynamic Routes & Params",explanation:`## Dynamic Route Segments

Use **square brackets** to create dynamic routes:

\`\`\`
app/
├── blog/
│   ├── page.tsx              → /blog
│   └── [slug]/
│       └── page.tsx          → /blog/hello-world, /blog/my-post
├── users/
│   └── [id]/
│       └── page.tsx          → /users/1, /users/42
└── shop/
    └── [...categories]/
        └── page.tsx          → /shop/a, /shop/a/b, /shop/a/b/c
\`\`\`

### Accessing Parameters

\`\`\`tsx
// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

// Dynamic param from URL is passed as props.params
export default function BlogPost({ params }: Props) {
  return <h1>Post: {params.slug}</h1>;
}
\`\`\`

### Catch-All Segments

\`\`\`tsx
// app/docs/[...slug]/page.tsx
// Matches /docs/a, /docs/a/b, /docs/a/b/c

interface Props {
  params: { slug: string[] };
}

export default function Docs({ params }: Props) {
  // /docs/react/hooks → params.slug = ['react', 'hooks']
  return <p>Path: {params.slug.join(' / ')}</p>;
}
\`\`\`

### Optional Catch-All

\`\`\`tsx
// app/docs/[[...slug]]/page.tsx
// Also matches /docs (slug = undefined)
\`\`\`

### generateStaticParams

Pre-render dynamic routes at build time:

\`\`\`tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>{params.slug}</h1>;
}
\`\`\``,task:{description:'Create a dynamic product page at `app/products/[id]/page.tsx` that displays the product ID from params and a "Back to Products" link. Also implement `generateStaticParams` to pre-render products with IDs 1-5.',starterCode:`// app/products/[id]/page.tsx

// TODO: Add generateStaticParams for IDs 1-5

// TODO: Create the product page component
// Display "Product #ID" as heading
// Show a link back to /products`,solution:`// app/products/[id]/page.tsx
import Link from 'next/link';

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5].map(id => ({
    id: String(id),
  }));
}

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>Product #{params.id}</h1>
      <p>Detailed information about product {params.id}.</p>
      <Link href="/products">← Back to Products</Link>
    </div>
  );
}`,hints:["Dynamic parameters are always strings","generateStaticParams returns an array of param objects","Each param object should match the dynamic segment name"]}},{id:"mod2-t3",title:"Route Groups & Parallel Routes",explanation:`## Route Groups

Use **parentheses** to organize routes without affecting the URL:

\`\`\`
app/
├── (marketing)/
│   ├── layout.tsx         # Layout for marketing pages
│   ├── about/page.tsx     # /about
│   └── pricing/page.tsx   # /pricing
├── (dashboard)/
│   ├── layout.tsx         # Layout for dashboard pages
│   ├── overview/page.tsx  # /overview
│   └── settings/page.tsx  # /settings
└── page.tsx               # /
\`\`\`

The parenthesized folder name is **not included in the URL**.

### Multiple Root Layouts

Route groups can have their own root layouts:

\`\`\`tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }) {
  return (
    <html>
      <body className="marketing">{children}</body>
    </html>
  );
}

// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <html>
      <body className="dashboard">{children}</body>
    </html>
  );
}
\`\`\`

### Parallel Routes

Render multiple pages simultaneously in the **same layout** using **named slots**:

\`\`\`
app/
├── layout.tsx
├── page.tsx
├── @analytics/
│   └── page.tsx
├── @team/
│   └── page.tsx
└── @revenue/
    └── page.tsx
\`\`\`

\`\`\`tsx
// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid">
        {analytics}
        {team}
        {revenue}
      </div>
    </div>
  );
}
\`\`\`

### Intercepting Routes

Use \`(.)\`, \`(..)\`, \`(...)\` to intercept navigation:

\`\`\`
app/
├── feed/
│   └── page.tsx
├── photo/[id]/
│   └── page.tsx           # Full page view
└── @modal/
    └── (..)photo/[id]/
        └── page.tsx       # Modal view when navigating from feed
\`\`\``,task:{description:"Create a route group structure with (marketing) and (app) groups. The marketing group should have its own layout with a public navbar, and the app group should have a layout with an authenticated sidebar.",starterCode:`// app/(marketing)/layout.tsx
// TODO: Create marketing layout with public navbar

// app/(app)/layout.tsx
// TODO: Create app layout with authenticated sidebar`,solution:`// app/(marketing)/layout.tsx
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

// app/(app)/layout.tsx
import Link from 'next/link';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>
        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}`,hints:["Route groups use parentheses: (groupName)","The group name does not appear in the URL","Each group can have its own layout.tsx"]}}],test:[{id:"mod2-q1",question:"Which file makes a route accessible in the Next.js App Router?",options:["index.tsx","route.tsx","page.tsx","view.tsx"],correctAnswer:2,explanation:"In the App Router, only page.tsx files create accessible routes. Folders without page.tsx only serve as organizational structure."},{id:"mod2-q2",question:"How do you create a dynamic route segment in Next.js?",options:["Using :param syntax","Using [param] folder name","Using {param} syntax","Using $param syntax"],correctAnswer:1,explanation:"Dynamic route segments use square brackets in folder names, like [id] or [slug]."},{id:"mod2-q3",question:"What does a Route Group (parenthesized folder) do?",options:["Creates a new URL segment","Organizes routes without affecting the URL path","Makes routes private","Adds authentication"],correctAnswer:1,explanation:"Route groups use parentheses like (marketing) to organize files without adding the group name to the URL path."},{id:"mod2-q4",question:"What is [...slug] in a folder name?",options:["Spread operator","Catch-all segment matching multiple path parts","Optional parameter","Regex pattern"],correctAnswer:1,explanation:'[...slug] is a catch-all segment that matches one or more path segments. /docs/a/b/c would give slug: ["a", "b", "c"].'},{id:"mod2-q5",question:"What does the Link component from next/link do in production?",options:["Creates anchor tags only","Prefetches linked pages automatically for instant navigation","Reloads the page","Downloads the page as PDF"],correctAnswer:1,explanation:"The Link component automatically prefetches linked pages when they appear in the viewport, enabling instant client-side navigation."}]},Jm={id:"mod-3",title:"Server-Side Rendering (SSR)",description:"Deep dive into SSR with the App Router: async components, streaming, and request-time data fetching. Understand how Suspense boundaries enable progressive rendering, loading states, and error handling for a smoother user experience.",topics:[{id:"mod3-t1",title:"Async Server Components",explanation:`## Server Components Are Async

In the App Router, Server Components can be **async functions** that fetch data directly:

\`\`\`tsx
// app/users/page.tsx — this is a Server Component
// Data fetching runs on the server — result is sent as HTML
async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

### How It Works

1. User requests \`/users\`
2. Next.js runs the component **on the server**
3. The \`await\` resolves with data
4. HTML is generated with the data
5. HTML is sent to the client
6. React hydrates for interactivity

### Fetch Caching Behavior

Next.js extends \`fetch\` with caching options:

\`\`\`tsx
// Cached by default (similar to SSG)
fetch('https://api.example.com/data');

// No cache — fresh data every request (SSR)
fetch('https://api.example.com/data', { cache: 'no-store' });

// Revalidate every 60 seconds (ISR)
fetch('https://api.example.com/data', { next: { revalidate: 60 } });
\`\`\`

### Dynamic Rendering

Using \`cache: 'no-store'\` or accessing dynamic functions makes a page dynamically rendered:

\`\`\`tsx
import { cookies, headers } from 'next/headers';

export default async function Page() {
  // Any of these make the page dynamic:
  const cookieStore = cookies();
  const headersList = headers();
  const data = await fetch(url, { cache: 'no-store' });

  return <div>Dynamic content</div>;
}
\`\`\``,task:{description:"Create a Server Component that fetches a list of posts from a REST API (simulate with an async function). Display each post title and body. Use the no-cache fetch option to ensure fresh data on every request.",starterCode:`// app/posts/page.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

// TODO: Create an async function to fetch posts
// TODO: Create an async Server Component that renders the posts`,solution:`// app/posts/page.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}`,hints:["Server Components can be async functions",'Use cache: "no-store" for SSR behavior',"Always handle the error case with res.ok"]}},{id:"mod3-t2",title:"Loading & Error States",explanation:`## Built-in Loading UI

Create \`loading.tsx\` for automatic Suspense boundaries:

\`\`\`tsx
// app/dashboard/loading.tsx — automatically wraps the page in a Suspense boundary
export default function Loading() {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-header" />
      <div className="skeleton-content" />
    </div>
  );
}
\`\`\`

This automatically wraps the page in a Suspense boundary:

\`\`\`tsx
// What Next.js does internally:
<Suspense fallback={<Loading />}>
  <Page />
</Suspense>
\`\`\`

### Error Handling

Create \`error.tsx\` for automatic error boundaries:

\`\`\`tsx
"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
\`\`\`

### Not Found

\`\`\`tsx
// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
\`\`\`

Trigger it programmatically:

\`\`\`tsx
import { notFound } from 'next/navigation';

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    notFound(); // Renders the nearest not-found.tsx
  }

  return <h1>{user.name}</h1>;
}
\`\`\`

### Hierarchy

\`\`\`
app/
├── error.tsx         → Catches errors in all child routes
├── loading.tsx       → Shows loading for all child routes
├── dashboard/
│   ├── error.tsx     → Overrides parent error for /dashboard/*
│   ├── loading.tsx   → Overrides parent loading for /dashboard/*
│   └── page.tsx
\`\`\``,task:{description:"Create a loading.tsx skeleton UI with animated placeholders, and an error.tsx component that shows the error message with a retry button.",starterCode:`// app/dashboard/loading.tsx
// TODO: Create a skeleton loading UI

// app/dashboard/error.tsx
// TODO: Create an error boundary component
// Remember: error.tsx must be a Client Component`,solution:`// app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div style={{ padding: 20 }}>
      <div style={{
        height: 32, width: 200, background: '#e0e0e0',
        borderRadius: 4, marginBottom: 16, animation: 'pulse 1.5s infinite'
      }} />
      <div style={{
        height: 200, background: '#e0e0e0',
        borderRadius: 8, animation: 'pulse 1.5s infinite'
      }} />
    </div>
  );
}

// app/dashboard/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <p style={{ color: '#666' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '8px 16px', background: '#0070f3',
          color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}`,hints:['loading.tsx is a Server Component (no "use client" needed)','error.tsx MUST be a Client Component — add "use client"',"The error component receives error and reset props"]}},{id:"mod3-t3",title:"Streaming & Suspense",explanation:`## Streaming SSR

Instead of waiting for ALL data before sending HTML, streaming sends parts of the page as they become ready.

### Without Streaming

\`\`\`
Request → Wait for ALL data → Send complete HTML → Display
\`\`\`

### With Streaming

\`\`\`
Request → Send shell HTML immediately
        → Stream component 1 when ready
        → Stream component 2 when ready
        → All content displayed progressively
\`\`\`

### Using Suspense for Streaming

\`\`\`tsx
import { Suspense } from 'react';

// This component loads independently — Suspense shows a fallback while it resolves
async function SlowData() {
  const data = await fetch('/api/slow-endpoint');
  const json = await data.json();
  return <div>{json.result}</div>;
}

async function FastData() {
  const data = await fetch('/api/fast-endpoint');
  const json = await data.json();
  return <div>{json.result}</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This renders immediately */}
      <Suspense fallback={<p>Loading fast data...</p>}>
        <FastData />
      </Suspense>

      {/* This streams in when ready */}
      <Suspense fallback={<p>Loading slow data...</p>}>
        <SlowData />
      </Suspense>
    </div>
  );
}
\`\`\`

### Nested Suspense Boundaries

\`\`\`tsx
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<StatsSkeleton />}>
        <StatsPanel />

        <Suspense fallback={<ChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      </Suspense>
    </div>
  );
}
\`\`\`

The outer Suspense resolves first (StatsPanel), then the inner one (RevenueChart) streams in. This creates a **progressive loading experience**.

### Benefits of Streaming

- **Faster TTFB** — shell renders immediately
- **Progressive rendering** — users see content as it becomes available
- **No waterfall** — parallel data fetching
- **Better user experience** — no blank screens`,task:{description:"Build a dashboard page with three async data sections wrapped in their own Suspense boundaries. Each section should have different loading skeletons and simulate different fetch times.",starterCode:`// app/dashboard/page.tsx
import { Suspense } from 'react';

// TODO: Create 3 async components that simulate different load times
// TODO: Wrap each in Suspense with appropriate fallbacks`,solution:`// app/dashboard/page.tsx
import { Suspense } from 'react';

async function QuickStats() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return (
    <div>
      <h2>Quick Stats</h2>
      <p>Users: 1,234 | Revenue: $45,678</p>
    </div>
  );
}

async function RecentOrders() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return (
    <div>
      <h2>Recent Orders</h2>
      <ul>
        <li>Order #1001 — $99.99</li>
        <li>Order #1002 — $149.99</li>
        <li>Order #1003 — $29.99</li>
      </ul>
    </div>
  );
}

async function AnalyticsChart() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <div>
      <h2>Analytics</h2>
      <p>[Chart rendered with full data]</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<p>Loading stats...</p>}>
        <QuickStats />
      </Suspense>

      <Suspense fallback={<p>Loading recent orders...</p>}>
        <RecentOrders />
      </Suspense>

      <Suspense fallback={<p>Loading analytics chart...</p>}>
        <AnalyticsChart />
      </Suspense>
    </div>
  );
}`,hints:["Each async component can simulate delay with setTimeout in a Promise","Wrap each section in its own Suspense boundary","Suspense fallback shows while the async component is loading"]}}],test:[{id:"mod3-q1",question:"How do you make a fetch call in Next.js behave like SSR (fresh data every request)?",options:["fetch(url)",'fetch(url, { cache: "force-cache" })','fetch(url, { cache: "no-store" })','fetch(url, { mode: "ssr" })'],correctAnswer:2,explanation:'Using cache: "no-store" tells Next.js not to cache the response, resulting in fresh data on every request (SSR behavior).'},{id:"mod3-q2",question:"What kind of component must error.tsx be?",options:["Server Component","Client Component","Async Component","Static Component"],correctAnswer:1,explanation:'error.tsx must be a Client Component (with "use client" directive) because it needs to use the reset function and handle user interactions.'},{id:"mod3-q3",question:"What is the benefit of Streaming SSR?",options:["Smaller bundle size","Progressive rendering — users see content as parts become ready","Better TypeScript support","Automatic error handling"],correctAnswer:1,explanation:"Streaming sends parts of the HTML as async components resolve, so users see content progressively instead of waiting for everything."},{id:"mod3-q4",question:"What does loading.tsx automatically create?",options:["An error boundary","A Suspense boundary wrapping the page","A cache layer","A redirect"],correctAnswer:1,explanation:"loading.tsx automatically wraps the page in a React Suspense boundary, showing the loading UI while the page component is resolving."},{id:"mod3-q5",question:"How do you trigger the nearest not-found.tsx in a Server Component?",options:['throw new Error("404")',"return null","notFound() from next/navigation",'redirect("/404")'],correctAnswer:2,explanation:"Calling notFound() from next/navigation renders the nearest not-found.tsx boundary."}]},Ym={id:"mod-4",title:"Static Site Generation (SSG)",description:"Pre-render pages at build time for maximum performance: generateStaticParams, revalidation, and ISR. Learn when to choose static generation over SSR, how to combine both strategies in a single app, and how to manage SEO metadata dynamically.",topics:[{id:"mod4-t1",title:"Static Rendering & Build-Time Data",explanation:`## Static Site Generation

By default, Next.js **statically renders** pages that don't use dynamic functions. The HTML is generated at **build time** and reused on every request.

\`\`\`tsx
// This page is statically rendered by default
export default async function AboutPage() {
  const content = await fetch('https://cms.example.com/about', {
    cache: 'force-cache', // default behavior
  });
  const data = await content.json();

  return <div>{data.text}</div>;
}
\`\`\`

### Static vs Dynamic Determination

Next.js automatically determines rendering strategy:

| Condition | Strategy |
|-----------|----------|
| No dynamic functions used | Static (SSG) |
| \`cookies()\` or \`headers()\` called | Dynamic (SSR) |
| \`cache: 'no-store'\` fetch | Dynamic (SSR) |
| \`searchParams\` accessed | Dynamic (SSR) |
| \`revalidate: N\` set | ISR |

### generateStaticParams

Pre-render dynamic routes at build time:

\`\`\`tsx
// app/blog/[slug]/page.tsx
// Runs at build time to pre-generate all possible route params
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### dynamicParams

Control what happens for paths not returned by \`generateStaticParams\`:

\`\`\`tsx
// Allow dynamic rendering for unknown slugs
export const dynamicParams = true; // default

// Return 404 for unknown slugs
export const dynamicParams = false;
\`\`\``,task:{description:"Create a statically generated blog page with generateStaticParams. Define 3 blog posts and pre-render their pages. Set dynamicParams to false so unknown slugs return 404.",starterCode:`// app/blog/[slug]/page.tsx
// TODO: Set dynamicParams to false
// TODO: Implement generateStaticParams with 3 posts
// TODO: Create the page component`,solution:`// app/blog/[slug]/page.tsx
export const dynamicParams = false;

const posts = [
  { slug: 'getting-started', title: 'Getting Started with Next.js', content: 'Next.js is a React framework...' },
  { slug: 'ssr-vs-ssg', title: 'SSR vs SSG', content: 'Understanding rendering strategies...' },
  { slug: 'deployment', title: 'Deploying Next.js', content: 'Deploy to Vercel or self-host...' },
];

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)!;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`,hints:["generateStaticParams must return an array of param objects","Set dynamicParams = false to 404 on unknown slugs","Each param object should have the same keys as the dynamic segment"]}},{id:"mod4-t2",title:"Incremental Static Regeneration (ISR)",explanation:`## ISR: Best of SSG + SSR

ISR lets you serve **static pages** but **update them** after a specified time interval.

### Route Segment Config

\`\`\`tsx
// app/products/page.tsx
export const // ISR: page is static but regenerates in the background after this interval
revalidate = 60; // Revalidate every 60 seconds

export default async function Products() {
  const products = await fetch('https://api.example.com/products');
  const data = await products.json();

  return (
    <ul>
      {data.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
\`\`\`

### How ISR Works

\`\`\`
1. First request → serve static page (built at build time)
2. Subsequent requests within revalidate window → serve cached static page
3. After revalidate time expires:
   a. Next request still serves stale page (instant response)
   b. Background regeneration starts
   c. Once regeneration succeeds, future requests get the new page
\`\`\`

### Per-Fetch Revalidation

\`\`\`tsx
export default async function Page() {
  // Each fetch can have its own revalidation
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }, // 1 hour
  });

  const categories = await fetch('https://api.example.com/categories', {
    next: { revalidate: 86400 }, // 1 day
  });

  // Page revalidates at the shortest interval (1 hour)
}
\`\`\`

### On-Demand Revalidation

Revalidate specific pages programmatically:

\`\`\`tsx
// app/api/revalidate/route.ts
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const { path, tag } = await request.json();

  if (path) {
    revalidatePath(path); // Revalidate a specific path
  }

  if (tag) {
    revalidateTag(tag); // Revalidate all fetches with this tag
  }

  return Response.json({ revalidated: true });
}
\`\`\`

### Cache Tags

\`\`\`tsx
// Tag your fetches
const products = await fetch('https://api.example.com/products', {
  next: { tags: ['products'] },
});

// Later, revalidate all fetches tagged 'products'
revalidateTag('products');
\`\`\``,task:{description:"Create a products page with ISR that revalidates every 5 minutes. Also create an API route that can trigger on-demand revalidation using revalidateTag.",starterCode:`// app/products/page.tsx
// TODO: Set revalidate to 300 (5 minutes)
// TODO: Fetch products with a cache tag

// app/api/revalidate/route.ts
// TODO: Create an API route for on-demand revalidation`,solution:`// app/products/page.tsx
export const revalidate = 300;

async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { tags: ['products'] },
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <p>Updated every 5 minutes or on-demand</p>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - \${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { tag } = await request.json();

  if (!tag) {
    return Response.json({ error: 'Tag is required' }, { status: 400 });
  }

  revalidateTag(tag);
  return Response.json({ revalidated: true, tag });
}`,hints:["Export revalidate as a number (seconds) from the page","Use next: { tags: [...] } in fetch options for cache tagging","revalidateTag() purges all fetches with that tag"]}},{id:"mod4-t3",title:"generateMetadata & SEO",explanation:`## Dynamic Metadata

Next.js provides a powerful metadata API for SEO:

### Static Metadata

\`\`\`tsx
// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company',
  openGraph: {
    title: 'About Us',
    description: 'Learn about our company',
    images: ['/og-about.png'],
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}
\`\`\`

### Dynamic Metadata

\`\`\`tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return <article><h1>{post.title}</h1></article>;
}
\`\`\`

### Metadata Inheritance

Child layouts/pages inherit and override parent metadata:

\`\`\`tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'My Site',
    template: '%s | My Site', // %s replaced by child title
  },
  description: 'The best site ever',
};

// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About', // Renders as "About | My Site"
};
\`\`\`

### Sitemap & Robots

\`\`\`tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
    { url: 'https://example.com/blog', lastModified: new Date() },
  ];
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://example.com/sitemap.xml',
  };
}
\`\`\``,task:{description:"Create a dynamic blog post page with generateMetadata that sets the title, description, and Open Graph tags based on the fetched post data.",starterCode:`// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

// TODO: Implement generateMetadata
// TODO: Implement the page component`,solution:`// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

interface Post {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(\`https://api.example.com/posts/\${slug}\`);
  return res.json();
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}`,hints:["generateMetadata is an async function that receives the same props as the page","Next.js deduplicates fetch calls — the same URL is only fetched once","Return a Metadata object matching the Next.js Metadata type"]}}],test:[{id:"mod4-q1",question:"When does Static Site Generation (SSG) generate HTML?",options:["On every request","At build time","On the client side","When the CDN cache expires"],correctAnswer:1,explanation:"SSG generates HTML at build time. The pre-rendered HTML is then served from CDN on every request for maximum performance."},{id:"mod4-q2",question:"What does ISR (Incremental Static Regeneration) do?",options:["Renders on every request","Serves static pages but regenerates them after a specified time interval","Only renders on the client","Rebuilds the entire site"],correctAnswer:1,explanation:"ISR serves cached static pages but regenerates them in the background after a revalidation period, combining speed with freshness."},{id:"mod4-q3",question:"What does dynamicParams = false do?",options:["Disables all dynamic routes","Returns 404 for paths not in generateStaticParams","Makes all pages static","Removes URL parameters"],correctAnswer:1,explanation:"Setting dynamicParams = false makes Next.js return 404 for any dynamic route path not included in generateStaticParams."},{id:"mod4-q4",question:"How do you trigger on-demand revalidation for tagged fetches?",options:["revalidateCache(tag)","revalidateTag(tag)","clearCache(tag)","invalidate(tag)"],correctAnswer:1,explanation:"revalidateTag() from next/cache purges all cached fetch responses that were tagged with the specified tag name."},{id:"mod4-q5",question:'What does the metadata title template "%s | My Site" do?',options:['Sets all page titles to "My Site"',"Replaces %s with the child page title","Adds a suffix to the URL","Creates a dynamic sitemap"],correctAnswer:1,explanation:`The title template uses %s as a placeholder that gets replaced by the child page's title, e.g., "About | My Site".`}]},Km={id:"mod-5",title:"Data Fetching Patterns",description:"Master data fetching in Next.js: parallel fetching, sequential fetching, request deduplication, and caching. Discover how React cache() and Server Actions streamline server-side logic, reducing client-side complexity and improving performance.",topics:[{id:"mod5-t1",title:"Parallel & Sequential Data Fetching",explanation:`## Parallel vs Sequential Fetching

### Sequential (Waterfall)

\`\`\`tsx
// ❌ Sequential — each await blocks the next
export default async function Page() {
  const user = await getUser(); // 500ms
  const posts = await getPosts(user.id); // 300ms — waits for user
  // Total: 800ms
}
\`\`\`

### Parallel

\`\`\`tsx
// ✅ Parallel — both start simultaneously
export default async function Page() {
  const userPromise = getUser();
  const postsPromise = getPosts();

  // Both requests fire simultaneously — total wait = slowest request, not sum
  const [user, posts] = await Promise.all([
    userPromise,
    postsPromise,
  ]);
  // Total: max(500ms, 300ms) = 500ms
}
\`\`\`

### Preloading Data

\`\`\`tsx
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
});

// Preload in layout
export default function Layout({ children }) {
  // Start fetching early — component that needs it
  // will use the cached result
  getUser('123');
  return <>{children}</>;
}
\`\`\`

### Request Deduplication

Next.js automatically deduplicates \`fetch\` calls with the same URL and options during a single render:

\`\`\`tsx
// Both components call the same URL — only ONE network request is made
async function Header() {
  const user = await fetch('/api/user').then(r => r.json());
  return <h1>Hi, {user.name}</h1>;
}

async function Sidebar() {
  const user = await fetch('/api/user').then(r => r.json());
  return <aside>Role: {user.role}</aside>;
}
\`\`\``,task:{description:"Refactor a sequential data fetching page to use parallel fetching with Promise.all. The page should fetch user data, posts, and stats simultaneously.",starterCode:`// app/dashboard/page.tsx
async function getUser() {
  return fetch('/api/user').then(r => r.json());
}

async function getPosts() {
  return fetch('/api/posts').then(r => r.json());
}

async function getStats() {
  return fetch('/api/stats').then(r => r.json());
}

export default async function Dashboard() {
  // TODO: Fetch all three in parallel
  // Currently sequential (slow):
  const user = await getUser();
  const posts = await getPosts();
  const stats = await getStats();

  return <div>{/* render data */}</div>;
}`,solution:`// app/dashboard/page.tsx
async function getUser() {
  return fetch('/api/user').then(r => r.json());
}

async function getPosts() {
  return fetch('/api/posts').then(r => r.json());
}

async function getStats() {
  return fetch('/api/stats').then(r => r.json());
}

export default async function Dashboard() {
  const [user, posts, stats] = await Promise.all([
    getUser(),
    getPosts(),
    getStats(),
  ]);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>{posts.length} posts</p>
      <p>{stats.views} total views</p>
    </div>
  );
}`,hints:["Use Promise.all to run multiple async operations in parallel","Destructure the result array to get each value","This reduces total wait time to the slowest request"]}},{id:"mod5-t2",title:"Server Actions & Mutations",explanation:`## Server Actions

Server Actions let you run server-side code from Client or Server Components. They replace API routes for mutations.

\`\`\`tsx
// app/actions.ts
"use server"; // This function runs on the server, even when called from client code

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await db.post.create({
    data: { title, content },
  });

  revalidatePath('/posts');
}
\`\`\`

### Using in a Form

\`\`\`tsx
// app/posts/new/page.tsx
import { createPost } from '../actions';

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}
\`\`\`

### Using in Client Components

\`\`\`tsx
"use client";
import { useTransition } from 'react';
import { deletePost } from '../actions';

export function DeleteButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => deletePost(postId))}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
\`\`\`

### useFormState & useFormStatus

\`\`\`tsx
"use client";
import { useFormState, useFormStatus } from 'react-dom';
import { submitForm } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitForm, { message: '' });

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <SubmitButton />
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
\`\`\``,task:{description:"Create a Server Action for adding a todo item and a form component that uses it with useFormStatus for a pending state indicator.",starterCode:`// app/actions.ts
"use server";
// TODO: Create addTodo server action

// app/todos/page.tsx
// TODO: Create a form with a submit button that shows pending state`,solution:`// app/actions.ts
"use server";

import { revalidatePath } from 'next/cache';

const todos: { id: number; text: string }[] = [];
let nextId = 1;

export async function addTodo(formData: FormData) {
  const text = formData.get('text') as string;
  if (!text) return { error: 'Text is required' };

  todos.push({ id: nextId++, text });
  revalidatePath('/todos');
  return { success: true };
}

export async function getTodos() {
  return todos;
}

// components/SubmitButton.tsx
"use client";
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Adding...' : 'Add Todo'}
    </button>
  );
}

// app/todos/page.tsx
import { addTodo, getTodos } from '../actions';
import { SubmitButton } from '../../components/SubmitButton';

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>
      <form action={addTodo}>
        <input name="text" placeholder="New todo..." required />
        <SubmitButton />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,hints:['Server Actions must have "use server" at the top',"useFormStatus must be in a component INSIDE the form","Use revalidatePath to refresh page data after mutation"]}},{id:"mod5-t3",title:"React Cache & Deduplication",explanation:`## React cache() Function

Wrap data fetching functions with \`cache()\` to ensure they run only once per request:

\`\`\`tsx
import { cache } from 'react';

export const getUser = cache(async (id: string) => {
  console.log('Fetching user', id); // Logs only once per request
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
});
\`\`\`

### When to Use cache()

- **Non-fetch data access** (database queries, file reads)
- fetch() is already deduplicated automatically
- Useful when passing data between components without prop drilling

### Unstable_cache (Data Cache)

For caching non-fetch data across requests:

\`\`\`tsx
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id: string) => {
    return db.user.findUnique({ where: { id } });
  },
  ['user-cache'], // cache key
  {
    revalidate: 3600, // 1 hour
    tags: ['users'],  // for on-demand revalidation
  }
);
\`\`\`

### Data Access Patterns

\`\`\`tsx
// Pattern 1: Fetch in the component that needs data
// ✅ Recommended — simple, declarative
async function UserProfile({ id }) {
  const user = await getUser(id);
  return <h1>{user.name}</h1>;
}

// Pattern 2: Fetch in parent, pass as props
// ✅ Also fine — explicit data dependencies
async function Page({ params }) {
  const user = await getUser(params.id);
  return <UserProfile user={user} />;
}

// Pattern 3: Fetch in layout
// ⚠️ Use with caution — layouts can't pass data to pages
\`\`\``,task:{description:"Use the React cache() function to create a cached getUser function, then use it in two different Server Components that render on the same page without duplicating the database call.",starterCode:`// lib/data.ts
// TODO: Create a cached getUser function using React cache()

// components/UserHeader.tsx
// TODO: Use getUser to display the user's name

// components/UserSidebar.tsx
// TODO: Use getUser to display the user's role`,solution:`// lib/data.ts
import { cache } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
}

export const getUser = cache(async (id: string): Promise<User> => {
  // This only runs ONCE even if called multiple times
  const res = await fetch(\`https://api.example.com/users/\${id}\`);
  return res.json();
});

// components/UserHeader.tsx
import { getUser } from '../lib/data';

export async function UserHeader({ userId }: { userId: string }) {
  const user = await getUser(userId); // Uses cached result
  return <header><h1>Welcome, {user.name}</h1></header>;
}

// components/UserSidebar.tsx
import { getUser } from '../lib/data';

export async function UserSidebar({ userId }: { userId: string }) {
  const user = await getUser(userId); // Same cached result
  return <aside><p>Role: {user.role}</p><p>{user.email}</p></aside>;
}`,hints:['Import cache from "react", not from "next/cache"',"cache() returns a memoized version of the function","The cached result is per-request — cleared between requests"]}}],test:[{id:"mod5-q1",question:"What is the benefit of using Promise.all for data fetching?",options:["It makes requests smaller","It runs multiple requests in parallel, reducing total wait time","It caches all responses","It retries failed requests"],correctAnswer:1,explanation:"Promise.all starts all requests simultaneously, so total time equals the slowest single request rather than the sum of all request times."},{id:"mod5-q2",question:'Where must "use server" be placed for Server Actions?',options:["At the bottom of the file","In the function body","At the top of the file or at the top of the function","In the import statement"],correctAnswer:2,explanation:'"use server" goes at the top of a file to make all exports Server Actions, or at the top of an individual async function.'},{id:"mod5-q3",question:"How does Next.js handle duplicate fetch calls in the same render?",options:["It throws an error","It deduplicates them — same URL makes only one request","It runs them all separately","It queues them"],correctAnswer:1,explanation:"Next.js automatically deduplicates fetch calls with the same URL and options during a single server render, making only one network request."},{id:"mod5-q4",question:"What does useFormStatus provide?",options:["Form validation errors","The pending state of the parent form submission","Form field values","HTTP status code"],correctAnswer:1,explanation:"useFormStatus returns an object with a pending boolean indicating whether the form (that the component is nested inside) is currently being submitted."},{id:"mod5-q5",question:"What is the scope of React cache() deduplication?",options:["Global — across all requests","Per-request — cleared between requests","Per-component","Per-session"],correctAnswer:1,explanation:"React cache() memoizes function results for the duration of a single server request. Each new request starts with a fresh cache."}]},Xm={id:"mod-6",title:"API Routes & Route Handlers",description:"Build backend APIs with Next.js Route Handlers: HTTP methods, request/response handling, and middleware patterns. Learn how to create RESTful endpoints, validate incoming data, handle dynamic route parameters, and return properly structured JSON responses.",topics:[{id:"mod6-t1",title:"Route Handlers Basics",explanation:`## Route Handlers

Define API endpoints using \`route.ts\` files in the \`app\` directory:

\`\`\`tsx
// app/api/hello/route.ts — each exported function handles its HTTP method
export async function GET() {
  return Response.json({ message: 'Hello, World!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ received: body }, { status: 201 }); // 201 Created
}
\`\`\`

### HTTP Methods

Supported: \`GET\`, \`POST\`, \`PUT\`, \`PATCH\`, \`DELETE\`, \`HEAD\`, \`OPTIONS\`

\`\`\`tsx
// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({ where: { id: params.id } });
  if (!user) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
  return Response.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.user.delete({ where: { id: params.id } });
  return new Response(null, { status: 204 });
}
\`\`\`

### Request Helpers

\`\`\`tsx
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // URL params
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  // Headers
  const contentType = request.headers.get('content-type');

  // Cookies
  const token = request.cookies.get('token')?.value;

  return Response.json({ query, contentType });
}
\`\`\`

### Response Options

\`\`\`tsx
// Setting headers
return new Response(JSON.stringify(data), {
  status: 200,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600',
  },
});

// Redirecting
import { redirect } from 'next/navigation';
redirect('/login');

// Streaming
return new Response(readableStream, {
  headers: { 'Content-Type': 'text/event-stream' },
});
\`\`\``,task:{description:"Create a Route Handler at app/api/users/route.ts with GET (return list of users) and POST (create a new user from request body) methods.",starterCode:`// app/api/users/route.ts
// TODO: Implement GET and POST handlers`,solution:`// app/api/users/route.ts
import { NextRequest } from 'next/server';

const users = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');

  const filtered = name
    ? users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))
    : users;

  return Response.json(filtered);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.email) {
    return Response.json(
      { error: 'Name and email are required' },
      { status: 400 }
    );
  }

  const newUser = {
    id: String(users.length + 1),
    name: body.name,
    email: body.email,
  };

  users.push(newUser);
  return Response.json(newUser, { status: 201 });
}`,hints:["Export named functions matching HTTP methods: GET, POST","Use Request.json() to parse the request body","Return Response.json() with data and optional status"]}},{id:"mod6-t2",title:"Dynamic Route Handlers & Validation",explanation:`## Dynamic API Routes

\`\`\`tsx
// app/api/posts/[id]/route.ts
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await getPost(params.id);
  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 });
  }
  return Response.json(post);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const updated = await updatePost(params.id, body);
  return Response.json(updated);
}
\`\`\`

### Input Validation Pattern

\`\`\`tsx
interface CreatePostBody {
  title: string;
  content: string;
}

function validatePost(data: unknown): data is CreatePostBody {
  if (typeof data !== 'object' || data === null) return false;
  const obj = data as Record<string, unknown>;
  return typeof obj.title === 'string' && obj.title.length > 0
    && typeof obj.content === 'string' && obj.content.length > 0;
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!validatePost(body)) {
    return Response.json(
      { error: 'Invalid input: title and content required' },
      { status: 400 }
    );
  }

  const post = await createPost(body);
  return Response.json(post, { status: 201 });
}
\`\`\`

### CORS Headers

\`\`\`tsx
export async function GET() {
  const data = await getData();

  return Response.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  });
}

// Handle preflight
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
\`\`\``,task:{description:"Create a dynamic route handler at app/api/products/[id]/route.ts with GET, PUT, and DELETE methods. Include input validation for the PUT method.",starterCode:`// app/api/products/[id]/route.ts
// TODO: GET — return product by id or 404
// TODO: PUT — validate and update product
// TODO: DELETE — delete product`,solution:`// app/api/products/[id]/route.ts
import { NextRequest } from 'next/server';

const products = new Map([
  ['1', { id: '1', name: 'Widget', price: 9.99 }],
  ['2', { id: '2', name: 'Gadget', price: 19.99 }],
]);

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = products.get(params.id);
  if (!product) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }
  return Response.json(product);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = products.get(params.id);
  if (!product) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }

  const body = await request.json();
  if (body.price !== undefined && (typeof body.price !== 'number' || body.price < 0)) {
    return Response.json({ error: 'Invalid price' }, { status: 400 });
  }

  const updated = { ...product, ...body, id: params.id };
  products.set(params.id, updated);
  return Response.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!products.has(params.id)) {
    return Response.json({ error: 'Product not found' }, { status: 404 });
  }
  products.delete(params.id);
  return new Response(null, { status: 204 });
}`,hints:["Access dynamic params from the second argument { params }","Always validate input before processing","Use appropriate HTTP status codes: 200, 201, 204, 400, 404"]}}],test:[{id:"mod6-q1",question:"What file name creates an API route in the App Router?",options:["api.ts","handler.ts","route.ts","endpoint.ts"],correctAnswer:2,explanation:"Route Handlers are defined in route.ts files. The file must export functions named after HTTP methods (GET, POST, etc.)."},{id:"mod6-q2",question:"How do you access URL search parameters in a Route Handler?",options:["request.query","request.params","request.nextUrl.searchParams","request.search"],correctAnswer:2,explanation:"Use request.nextUrl.searchParams (a URLSearchParams object) to access query string parameters in a NextRequest."},{id:"mod6-q3",question:"What HTTP status code should a DELETE endpoint return on success?",options:["200 with body","201 Created","204 No Content","301 Redirect"],correctAnswer:2,explanation:"204 No Content is the standard response for successful DELETE operations where no response body is needed."},{id:"mod6-q4",question:"Can a route.ts and page.tsx exist in the same directory?",options:["Yes, always","No, they conflict — only one allowed per directory","Yes, but only for GET","Only in the pages directory"],correctAnswer:1,explanation:"route.ts and page.tsx cannot coexist in the same directory in the App Router because they would conflict on the same URL path."},{id:"mod6-q5",question:"How do you read the request body in a POST handler?",options:["request.body","await request.json()","request.data","request.payload"],correctAnswer:1,explanation:"Use await request.json() to parse the request body as JSON. For other types, use request.text(), request.formData(), etc."}]},Zm={id:"mod-7",title:"Middleware & Edge Runtime",description:"Intercept requests with middleware: redirects, rewrites, authentication checks, and the Edge Runtime. Learn how middleware runs before a request completes, how to apply it selectively with matchers, and when to leverage the lightweight Edge Runtime for low-latency responses.",topics:[{id:"mod7-t1",title:"Middleware Fundamentals",explanation:`## Next.js Middleware

Middleware runs **before** a request is completed, allowing you to modify the response by rewriting, redirecting, or modifying request/response headers.

\`\`\`tsx
// middleware.ts — must be at the project root (runs before every matched request)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check auth token
  const token = request.cookies.get('auth-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Specify which paths middleware runs on
export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'], // Only run middleware for these paths
};
\`\`\`

### Matcher Patterns

\`\`\`tsx
export const config = {
  matcher: [
    '/api/:path*',                    // All API routes
    '/dashboard/:path*',              // Dashboard and children
    '/((?!_next/static|favicon.ico).*)', // Everything except static
  ],
};
\`\`\`

### Middleware Actions

\`\`\`tsx
// Redirect
return NextResponse.redirect(new URL('/login', request.url));

// Rewrite (URL stays same, content changes)
return NextResponse.rewrite(new URL('/api/proxy', request.url));

// Set headers
const response = NextResponse.next();
response.headers.set('x-custom-header', 'value');
return response;

// Set cookies
const response = NextResponse.next();
response.cookies.set('theme', 'dark');
return response;
\`\`\`

### Important: Middleware runs on the Edge Runtime

- No Node.js APIs (no \`fs\`, no \`path\`)
- Maximum 1MB code size
- Only Web APIs available
- Runs on CDN edge nodes (fast, close to users)`,task:{description:"Create a middleware that checks for an auth token cookie. If no token exists and the path starts with /dashboard, redirect to /login. Also add a custom header to all responses.",starterCode:`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // TODO: Check auth cookie
  // TODO: Redirect unauthenticated users
  // TODO: Add custom header
}

export const config = {
  // TODO: Define matcher
};`,solution:`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-middleware-processed', 'true');
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};`,hints:["Middleware file must be at the project root (next to app/)","Use request.cookies.get() to read cookies","Use NextResponse.redirect() for redirecting"]}},{id:"mod7-t2",title:"Edge Runtime & Geolocation",explanation:`## Edge Runtime

The Edge Runtime is a lightweight JavaScript runtime designed for middleware and edge functions.

### Choosing a Runtime

\`\`\`tsx
// app/api/fast/route.ts
export const runtime = 'edge'; // Run on edge

export async function GET() {
  return Response.json({ fast: true });
}

// app/api/heavy/route.ts
export const runtime = 'nodejs'; // Default — run on Node.js

export async function GET() {
  const fs = await import('fs');
  const data = fs.readFileSync('./data.json', 'utf8');
  return Response.json(JSON.parse(data));
}
\`\`\`

| Feature | Edge Runtime | Node.js Runtime |
|---------|-------------|----------------|
| Cold start | ~1ms | ~250ms |
| APIs | Web APIs only | Full Node.js |
| Code size | 1MB limit | No limit |
| Location | CDN edge | Server region |
| Streaming | ✓ | ✓ |
| DB access | Via HTTP | Direct or HTTP |

### Geolocation in Middleware

\`\`\`tsx
export function middleware(request: NextRequest) {
  const country = request.geo?.country ?? 'US';
  const city = request.geo?.city ?? 'Unknown';

  // Rewrite to localized content
  if (country === 'DE') {
    return NextResponse.rewrite(new URL('/de' + request.nextUrl.pathname, request.url));
  }

  const response = NextResponse.next();
  response.headers.set('x-user-country', country);
  return response;
}
\`\`\`

### A/B Testing with Middleware

\`\`\`tsx
export function middleware(request: NextRequest) {
  const bucket = request.cookies.get('ab-bucket')?.value;

  if (!bucket) {
    const newBucket = Math.random() < 0.5 ? 'a' : 'b';
    const response = NextResponse.rewrite(
      new URL(\`/variant-\${newBucket}\${request.nextUrl.pathname}\`, request.url)
    );
    response.cookies.set('ab-bucket', newBucket, { maxAge: 86400 });
    return response;
  }

  return NextResponse.rewrite(
    new URL(\`/variant-\${bucket}\${request.nextUrl.pathname}\`, request.url)
  );
}
\`\`\``,task:{description:'Create a middleware that implements simple A/B testing by assigning users to variant "a" or "b" via a cookie, then rewriting the URL to serve the appropriate variant page.',starterCode:`// middleware.ts
// TODO: Implement A/B testing middleware`,solution:`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only A/B test the home page
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  let bucket = request.cookies.get('ab-bucket')?.value;

  if (!bucket) {
    bucket = Math.random() < 0.5 ? 'a' : 'b';
    const response = NextResponse.rewrite(
      new URL(\`/variant-\${bucket}\`, request.url)
    );
    response.cookies.set('ab-bucket', bucket, {
      maxAge: 60 * 60 * 24, // 24 hours
      httpOnly: true,
    });
    return response;
  }

  return NextResponse.rewrite(
    new URL(\`/variant-\${bucket}\`, request.url)
  );
}

export const config = {
  matcher: ['/'],
};`,hints:["Use cookies to persist the variant assignment","NextResponse.rewrite changes the served content without changing the URL","Set httpOnly on cookies for security"]}}],test:[{id:"mod7-q1",question:"Where must the middleware.ts file be placed?",options:["In the app/ directory","In api/ folder","At the project root (same level as app/)","In the components/ folder"],correctAnswer:2,explanation:"middleware.ts must be placed at the project root, at the same level as the app/ directory."},{id:"mod7-q2",question:"What is the difference between redirect and rewrite in middleware?",options:["No difference","Redirect changes the URL, rewrite serves different content without changing the URL","Redirect is faster","Rewrite only works with POST"],correctAnswer:1,explanation:"A redirect sends the browser to a new URL (302/301), while a rewrite serves content from a different path without changing the URL the user sees."},{id:"mod7-q3",question:"What runtime does middleware use?",options:["Node.js Runtime","Edge Runtime","Browser Runtime","Deno Runtime"],correctAnswer:1,explanation:"Middleware always runs on the Edge Runtime, which provides Web APIs but not Node.js-specific APIs like fs or path."},{id:"mod7-q4",question:"What is the maximum code size for Edge Runtime?",options:["256KB","512KB","1MB","4MB"],correctAnswer:2,explanation:"The Edge Runtime has a 1MB code size limit, which encourages lightweight middleware functions."},{id:"mod7-q5",question:"How do you specify which paths middleware runs on?",options:["By the folder it is placed in","Using the config.matcher export","By importing it in pages","Using a routing table"],correctAnswer:1,explanation:"Export a config object with a matcher array to specify path patterns where middleware should run."}]},eh={id:"mod-8",title:"Styling in Next.js",description:"CSS Modules, Tailwind CSS, CSS-in-JS, and styling patterns optimized for Server Components. Explore scoped styling, global CSS setup, Google Fonts integration with next/font, and theme switching patterns using CSS custom properties.",topics:[{id:"mod8-t1",title:"CSS Modules & Global Styles",explanation:`## CSS Modules

CSS Modules scope styles to components automatically:

\`\`\`css
/* Button.module.css */
.button {
  padding: 8px 16px;
  border-radius: 4px;
  background: #0070f3;
  color: white;
  border: none;
}

.button:hover {
  background: #0060df;
}

.danger {
  background: #e00;
}
\`\`\`

\`\`\`tsx
// CSS Module import — class names are auto-scoped to prevent conflicts
import styles from './Button.module.css';

export function Button({ variant, children }) {
  const className = variant === 'danger'
    ? \`\${styles.button} \${styles.danger}\`
    : styles.button;

  return <button className={className}>{children}</button>;
}
\`\`\`

### Global Styles

\`\`\`tsx
// app/layout.tsx
import './globals.css'; // Global styles imported in root layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

### Tailwind CSS Integration

\`\`\`tsx
// tailwind.config.ts
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};

// Usage in components
export function Card({ title, children }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
\`\`\``,task:{description:"Create a Card component using CSS Modules with styles for the card container, title, and description. Include hover state.",starterCode:`/* Card.module.css */
/* TODO: Define .card, .title, .description with hover */

// components/Card.tsx
// TODO: Import CSS Module and create Card component`,solution:`/* Card.module.css */
.card {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.description {
  color: #666;
  line-height: 1.5;
}

// components/Card.tsx
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}`,hints:['Import CSS Modules as an object: import styles from "./X.module.css"',"Access classes as properties: styles.className","CSS Modules auto-scope classes to prevent conflicts"]}},{id:"mod8-t2",title:"Fonts & Themes",explanation:`## next/font

Next.js provides automatic font optimization:

\`\`\`tsx
// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Only load Latin character set
  display: 'swap', // Show fallback font until loaded
  variable: '--font-inter', // CSS variable for use in stylesheets
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${firaCode.variable}\`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
\`\`\`

### Local Fonts

\`\`\`tsx
import localFont from 'next/font/local';

const myFont = localFont({
  src: './fonts/MyFont.woff2',
  display: 'swap',
});
\`\`\`

### Benefits

- **Self-hosted** — fonts are served from your domain (no Google requests)
- **No layout shift** — font loading is optimized
- **CSS variables** — easy integration with CSS frameworks

### Theme Pattern with CSS Variables

\`\`\`css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --primary: #0070f3;
}

[data-theme='dark'] {
  --bg: #0d1117;
  --text: #e2e8f0;
  --primary: #58a6ff;
}
\`\`\`

\`\`\`tsx
"use client";
import { useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => {
      setDark(!dark);
      document.documentElement.dataset.theme = dark ? '' : 'dark';
    }}>
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
\`\`\``,task:{description:"Set up Google Fonts (Inter and Fira Code) in the root layout using next/font, with CSS variables for use in stylesheets.",starterCode:`// app/layout.tsx
// TODO: Import and configure Inter and Fira_Code
// TODO: Apply fonts via className and CSS variables`,solution:`// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${firaCode.variable}\`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}`,hints:["Import fonts from next/font/google","Use the variable option to create CSS custom properties","Apply className for the default font and variable for CSS access"]}}],test:[{id:"mod8-q1",question:"What is the benefit of CSS Modules in Next.js?",options:["Faster build times","Automatic class name scoping to prevent conflicts","Better SEO","Smaller file sizes"],correctAnswer:1,explanation:"CSS Modules automatically scope class names to the component, preventing style conflicts between components."},{id:"mod8-q2",question:"How does next/font optimize font loading?",options:["Lazy loading fonts","Self-hosting fonts and eliminating layout shift","Compressing fonts","Using system fonts"],correctAnswer:1,explanation:"next/font downloads Google Fonts at build time and self-hosts them, eliminating external requests and preventing layout shift."},{id:"mod8-q3",question:"Where should global CSS be imported in the App Router?",options:["In every page","In the root layout.tsx","In middleware.ts","In next.config.js"],correctAnswer:1,explanation:"Global CSS should be imported in the root layout (app/layout.tsx) to be available across all pages."},{id:"mod8-q4",question:"Can you use CSS-in-JS libraries with Server Components?",options:["Yes, all libraries work",'No, most CSS-in-JS libraries require "use client"',"Only Tailwind works","Only styled-components works"],correctAnswer:1,explanation:'Most CSS-in-JS libraries use runtime JavaScript and require client-side rendering, so they need "use client" and cannot be used in Server Components.'},{id:"mod8-q5",question:'What does the display: "swap" option do in next/font?',options:["Swaps the font family","Shows fallback text immediately, then swaps to the custom font when loaded","Disables font loading","Uses the next available font"],correctAnswer:1,explanation:'display: "swap" uses the CSS font-display: swap property, showing fallback text immediately and swapping in the custom font once loaded.'}]},th={id:"mod-9",title:"Image & Performance Optimization",description:"Optimize images, fonts, scripts, and Core Web Vitals with built-in Next.js tools. Learn how next/image handles lazy loading and format conversion, how next/script controls third-party load priorities, and how to measure and improve LCP, INP, and CLS.",topics:[{id:"mod9-t1",title:"next/image Component",explanation:`## next/image

Automatic image optimization:

\`\`\`tsx
import Image from 'next/image'; // Automatic optimization: lazy loading, format conversion, sizing

// Local image — Next.js generates blur placeholder and determines dimensions at build
import heroImg from '../public/hero.jpg';

export function Hero() {
  return (
    <Image
      src={heroImg}
      alt="Hero banner"
      priority // Load immediately (above-the-fold)
      placeholder="blur" // Blur placeholder
    />
  );
}

// Remote image
export function Avatar({ src, name }) {
  return (
    <Image
      src={src}
      alt={name}
      width={48}
      height={48}
      className="rounded-full"
    />
  );
}
\`\`\`

### Key Props

| Prop | Purpose |
|------|--------|
| \`src\` | Image source (local import or URL) |
| \`width/height\` | Required for remote images |
| \`alt\` | Accessibility text |
| \`priority\` | Preload for LCP images |
| \`placeholder\` | "blur" or "empty" |
| \`fill\` | Fill parent container |
| \`sizes\` | Responsive size hints |
| \`quality\` | 1-100, default 75 |

### Responsive Images

\`\`\`tsx
<Image
  src="/banner.jpg"
  alt="Banner"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  style={{ objectFit: 'cover' }}
/>
\`\`\`

### Remote Image Configuration

\`\`\`js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
\`\`\`

### Benefits

- **Automatic format** — serves WebP/AVIF when supported
- **Lazy loading** — images below the fold load on scroll
- **Size optimization** — generates multiple sizes
- **Prevents CLS** — reserves space before loading`,task:{description:"Create an image gallery component using next/image. Include a hero image with priority loading and blur placeholder, plus a grid of thumbnails with lazy loading.",starterCode:`// components/Gallery.tsx
import Image from 'next/image';

// TODO: Create a hero image with priority
// TODO: Create a thumbnail grid with lazy loading`,solution:`// components/Gallery.tsx
import Image from 'next/image';

interface GalleryProps {
  heroSrc: string;
  thumbnails: { src: string; alt: string }[];
}

export function Gallery({ heroSrc, thumbnails }: GalleryProps) {
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 400 }}>
        <Image
          src={heroSrc}
          alt="Featured image"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', borderRadius: 8 }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
        {thumbnails.map((thumb, i) => (
          <div key={i} style={{ position: 'relative', aspectRatio: '1' }}>
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              sizes="(max-width: 768px) 33vw, 200px"
              style={{ objectFit: 'cover', borderRadius: 4 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}`,hints:["Use priority for above-the-fold images to improve LCP","Use fill prop with a positioned parent for responsive images","Always provide sizes prop with fill for proper responsive behavior"]}},{id:"mod9-t2",title:"Script Optimization & Web Vitals",explanation:`## next/script

Optimize third-party script loading:

\`\`\`tsx
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Load after page is interactive */}
        <Script
          src="https://analytics.example.com/script.js"
          strategy="afterInteractive" // Loads after the page becomes interactive
        />

        {/* Load during idle time */}
        <Script
          src="https://chat-widget.example.com/chat.js"
          strategy="lazyOnload" // Loads during browser idle time (lowest priority)
        />
      </body>
    </html>
  );
}
\`\`\`

### Loading Strategies

| Strategy | When |
|----------|------|
| \`beforeInteractive\` | Before hydration (in <head>) |
| \`afterInteractive\` | After hydration (default) |
| \`lazyOnload\` | During browser idle time |
| \`worker\` | In a web worker (experimental) |

### Core Web Vitals

\`\`\`
LCP (Largest Contentful Paint) — < 2.5s
  → Use priority on hero images
  → Preload fonts with next/font

FID/INP (Interaction to Next Paint) — < 200ms
  → Minimize client-side JavaScript
  → Use Server Components

CLS (Cumulative Layout Shift) — < 0.1
  → Always set width/height on images
  → Use next/font to prevent font shift
\`\`\`

### Performance Tips

- Use \`next/dynamic\` for code splitting Client Components
- Minimize \`"use client"\` boundaries
- Prefer CSS Modules/Tailwind over CSS-in-JS
- Use \`<Suspense>\` for streaming`,task:{description:"Set up analytics and chat scripts with appropriate loading strategies. Configure the analytics to load afterInteractive and the chat widget to load lazyOnload.",starterCode:`// app/layout.tsx
import Script from 'next/script';

// TODO: Add scripts with proper loading strategies`,solution:`// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://analytics.example.com/script.js"
          strategy="afterInteractive"
          id="analytics"
        />

        <Script
          src="https://chat.example.com/widget.js"
          strategy="lazyOnload"
          id="chat-widget"
          onLoad={() => console.log('Chat widget loaded')}
        />
      </body>
    </html>
  );
}`,hints:["Use afterInteractive for essential analytics","Use lazyOnload for non-critical scripts like chat widgets","Always add an id prop to Script components"]}}],test:[{id:"mod9-q1",question:"What does the priority prop do on next/image?",options:["Makes the image load first (preload for LCP)","Increases image quality","Changes z-index","Makes it responsive"],correctAnswer:0,explanation:"The priority prop preloads the image, making it ideal for Largest Contentful Paint (LCP) elements like hero images."},{id:"mod9-q2",question:"What image format does next/image automatically serve when supported?",options:["PNG","JPEG","WebP/AVIF","SVG"],correctAnswer:2,explanation:"next/image automatically serves modern formats like WebP and AVIF when the browser supports them, significantly reducing file sizes."},{id:"mod9-q3",question:'When does a script with strategy="lazyOnload" execute?',options:["Before page renders","After hydration","During browser idle time","Never"],correctAnswer:2,explanation:"lazyOnload defers script loading until the browser is idle, ideal for non-essential scripts like chat widgets."},{id:"mod9-q4",question:"What is LCP in Core Web Vitals?",options:["Largest Code Package","Largest Contentful Paint — time until the biggest visual element renders","Last CSS Processed","Lazy Component Preload"],correctAnswer:1,explanation:"LCP measures the time from page load to when the largest visible element (image, text block) finishes rendering."},{id:"mod9-q5",question:"How does next/image prevent Cumulative Layout Shift (CLS)?",options:["By hiding images","By reserving exact space with width/height before the image loads","By loading all images at once","By using fixed positioning"],correctAnswer:1,explanation:"next/image reserves the exact dimensions in the layout before the image loads, preventing content from shifting when images appear."}]},nh={id:"mod-10",title:"Authentication & Sessions",description:"Implement authentication patterns: NextAuth.js, JWT sessions, middleware protection, and role-based access. Cover the full auth lifecycle from login forms and OAuth providers to secure cookie handling, token verification, and protecting routes via middleware.",topics:[{id:"mod10-t1",title:"Auth Patterns & NextAuth.js",explanation:`## Authentication in Next.js

### NextAuth.js (Auth.js) Setup

\`\`\`tsx
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

// Configure authentication providers and session strategy
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await validateUser(credentials);
        return user ?? null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
\`\`\`

### Server-Side Session Access

\`\`\`tsx
// In a Server Component
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return <h1>Welcome, {session.user.name}</h1>;
}
\`\`\`

### Client-Side Session

\`\`\`tsx
"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}
\`\`\`

### Middleware Protection

\`\`\`tsx
// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: { signIn: '/login' },
});

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};
\`\`\``,task:{description:"Create a login page with a sign-in form and an auth button component that shows the user name or a sign-in prompt based on session state.",starterCode:`// components/AuthButton.tsx
"use client";
// TODO: Create auth button showing session state

// app/login/page.tsx
// TODO: Create login page with credentials form`,solution:`// components/AuthButton.tsx
"use client";
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <span>Loading...</span>;

  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>Hi, {session.user?.name}</span>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}

// app/login/page.tsx
"use client";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
      <button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
        Sign in with GitHub
      </button>
    </form>
  );
}`,hints:["useSession returns data (session), status (loading/authenticated/unauthenticated)","signIn() without args shows the default sign-in page","Use callbackUrl to redirect after login"]}},{id:"mod10-t2",title:"JWT Tokens & Cookies",explanation:`## JWT Sessions

JWT (JSON Web Tokens) store session data in an encrypted cookie:

\`\`\`tsx
// Custom JWT handling
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function createToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' }) // HMAC-SHA256 signing algorithm
    .setExpirationTime('24h') // Token expires after 24 hours
    .sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload;
}
\`\`\`

### Setting Auth Cookies

\`\`\`tsx
import { cookies } from 'next/headers';

export async function login(email: string, password: string) {
  const user = await authenticate(email, password);
  if (!user) throw new Error('Invalid credentials');

  const token = await createToken({ userId: user.id, role: user.role });

  cookies().set('session', token, {
    httpOnly: true, // Prevents JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'lax', // CSRF protection
    maxAge: 60 * 60 * 24, // Auto-expire after 24 hours
    path: '/', // Available on all routes
  });
}
\`\`\`

### Reading Session in Server Components

\`\`\`tsx
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export default async function DashboardPage() {
  const token = cookies().get('session')?.value;
  if (!token) redirect('/login');

  const session = await verifyToken(token);
  return <h1>Welcome user {session.userId}</h1>;
}
\`\`\`

### Cookie Security Best Practices

| Flag | Purpose |
|------|--------|
| \`httpOnly\` | Prevents JavaScript access (XSS protection) |
| \`secure\` | Only sent over HTTPS |
| \`sameSite: 'lax'\` | CSRF protection |
| \`maxAge\` | Auto-expiration |
| \`path: '/'\` | Available on all routes |`,task:{description:"Create helper functions for JWT token creation and verification using jose. Then create a Server Action for login that sets a secure httpOnly cookie.",starterCode:`// lib/auth.ts
// TODO: Create createToken and verifyToken functions

// app/actions/auth.ts
"use server";
// TODO: Create login server action`,solution:`// lib/auth.ts
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function createToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

// app/actions/auth.ts
"use server";
import { cookies } from 'next/headers';
import { createToken } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Validate credentials (simplified)
  if (email === 'user@example.com' && password === 'password') {
    const token = await createToken({ userId: '1', email, role: 'user' });

    cookies().set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    redirect('/dashboard');
  }

  return { error: 'Invalid credentials' };
}`,hints:["Use jose library for JWT operations (works in Edge Runtime)","Always set httpOnly and secure flags on auth cookies","verifyToken should handle errors gracefully — return null if invalid"]}}],test:[{id:"mod10-q1",question:"What does the httpOnly cookie flag prevent?",options:["Cookie from being sent","JavaScript from accessing the cookie (XSS protection)","Cookie from expiring","Cross-origin requests"],correctAnswer:1,explanation:"httpOnly prevents client-side JavaScript from reading the cookie via document.cookie, protecting against XSS attacks."},{id:"mod10-q2",question:"In NextAuth.js, how do you access the session in a Server Component?",options:["useSession()","getServerSession()","req.session",'cookies().get("session")'],correctAnswer:1,explanation:"getServerSession() is used in Server Components to access the session. useSession() is for Client Components only."},{id:"mod10-q3",question:'What does sameSite: "lax" protect against?',options:["XSS attacks","CSRF attacks — prevents cookies from being sent in cross-site requests","SQL injection","Man-in-the-middle attacks"],correctAnswer:1,explanation:'sameSite: "lax" prevents the cookie from being sent in cross-site requests (CSRF protection) while still allowing top-level navigations.'},{id:"mod10-q4",question:"Why is jose preferred over jsonwebtoken in Next.js?",options:["It is faster","It works in both Node.js and Edge Runtime (uses Web Crypto API)","It is more secure","It is the default"],correctAnswer:1,explanation:"jose uses the Web Crypto API and works in both Node.js and Edge Runtime, while jsonwebtoken requires Node.js-only APIs."},{id:"mod10-q5",question:"Where should the Session Provider be placed in a Next.js app?",options:["In every page","In the root layout wrapping children","In middleware","In next.config.js"],correctAnswer:1,explanation:"The SessionProvider from next-auth/react should wrap the app in the root layout to make session data available to all Client Components."}]},rh={id:"mod-11",title:"Caching Deep Dive",description:"Understand the four caching layers: Request Memoization, Data Cache, Full Route Cache, and Router Cache. Learn how each layer affects your app's freshness vs. speed trade-off and how to opt out of caching when real-time data is critical.",topics:[{id:"mod11-t1",title:"Next.js Caching Layers",explanation:`## The Four Caching Layers

### 1. Request Memoization

- Deduplicates \`fetch\` calls with same URL during a single render
- Automatic for \`fetch()\`, manual for others via \`cache()\`
- Scope: single server request

### 2. Data Cache

- Persists fetch results **across requests and deployments**
- Controlled by \`cache\` and \`revalidate\` options

\`\`\`tsx
// Cached indefinitely (default) — good for static data
fetch(url);

// Never cached — fresh data on every request (like SSR)
fetch(url, { cache: 'no-store' });

// Cached with ISR — serves stale then revalidates in background
fetch(url, { next: { revalidate: 3600 } }); // Revalidates after 1 hour
\`\`\`

### 3. Full Route Cache

- Caches the rendered HTML and RSC payload at **build time**
- Only for statically rendered routes
- Invalidated by revalidation or redeployment

### 4. Router Cache (Client-side)

- Caches RSC payloads in the browser during navigation
- Pre-fetched routes are cached for 30 seconds
- Visited routes are cached for 5 minutes
- Cleared by: \`router.refresh()\`, \`revalidatePath()\`, \`cookies.set()\`

### Opting Out of Caching

\`\`\`tsx
// Route segment config
export const dynamic = 'force-dynamic'; // Always render on the server (never cached statically)
export const revalidate = 0; // Disable the Data Cache layer
export const fetchCache = 'force-no-store'; // Override all fetch caching in this route
\`\`\`

### Cache Hierarchy

\`\`\`
Request → Router Cache (client)
       → Full Route Cache (server)
       → Data Cache (server)
       → Data Source
\`\`\``,task:{description:"Create a page that demonstrates different caching strategies: one section with cached data, one with no-store, and one with ISR revalidation.",starterCode:`// app/cache-demo/page.tsx
// TODO: Fetch data with 3 different caching strategies`,solution:`// app/cache-demo/page.tsx
import { Suspense } from 'react';

async function CachedData() {
  const res = await fetch('https://api.example.com/cached', {
    cache: 'force-cache',
  });
  const data = await res.json();
  return <section><h2>Cached (Static)</h2><p>Fetched at build time: {data.timestamp}</p></section>;
}

async function DynamicData() {
  const res = await fetch('https://api.example.com/dynamic', {
    cache: 'no-store',
  });
  const data = await res.json();
  return <section><h2>Dynamic (SSR)</h2><p>Fresh every request: {data.timestamp}</p></section>;
}

async function RevalidatingData() {
  const res = await fetch('https://api.example.com/revalidating', {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return <section><h2>ISR (60s)</h2><p>Revalidates every 60s: {data.timestamp}</p></section>;
}

export default function CacheDemoPage() {
  return (
    <div>
      <h1>Caching Strategies Demo</h1>
      <Suspense fallback={<p>Loading cached...</p>}><CachedData /></Suspense>
      <Suspense fallback={<p>Loading dynamic...</p>}><DynamicData /></Suspense>
      <Suspense fallback={<p>Loading ISR...</p>}><RevalidatingData /></Suspense>
    </div>
  );
}`,hints:["force-cache is the default — data is cached indefinitely","no-store means fresh data on every request","next: { revalidate: N } gives ISR behavior with background revalidation"]}}],test:[{id:"mod11-q1",question:"Which caching layer is client-side?",options:["Data Cache","Request Memoization","Full Route Cache","Router Cache"],correctAnswer:3,explanation:"The Router Cache operates on the client side, caching RSC payloads for visited and prefetched routes."},{id:"mod11-q2",question:"How long are prefetched routes cached in the Router Cache?",options:["5 seconds","30 seconds","5 minutes","1 hour"],correctAnswer:1,explanation:"Prefetched routes are cached in the Router Cache for 30 seconds. Routes visited by the user are cached for 5 minutes."},{id:"mod11-q3",question:'What does export const dynamic = "force-dynamic" do?',options:["Enables client-side rendering","Forces the route to be dynamically rendered on every request","Adds dynamic imports","Enables lazy loading"],correctAnswer:1,explanation:"force-dynamic opts the route out of static rendering, ensuring it is dynamically rendered on every request."},{id:"mod11-q4",question:"How do you clear the client-side Router Cache?",options:["localStorage.clear()","router.refresh()","window.location.reload()","fetch with no-cache"],correctAnswer:1,explanation:"router.refresh() from useRouter() invalidates the Router Cache and re-fetches data from the server without losing client state."},{id:"mod11-q5",question:"What is Request Memoization?",options:["Caching across deployments","Deduplicating identical fetch calls within a single server render","Browser HTTP cache","Service worker cache"],correctAnswer:1,explanation:"Request Memoization automatically deduplicates fetch() calls with identical URLs during a single server render pass."}]},oh={id:"mod-12",title:"Internationalization (i18n)",description:"Build multilingual Next.js apps with URL-based locale detection and server-side translations. Set up middleware to detect the user's preferred language, organize routes by locale, and load translations efficiently in Server Components.",topics:[{id:"mod12-t1",title:"i18n Routing & Locale Detection",explanation:`## Internationalized Routing

### URL Structure

\`\`\`
/en/about    → English
/fr/about    → French
/de/about    → German
\`\`\`

### Middleware for Locale Detection

\`\`\`tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'de'];
const defaultLocale = 'en';

// Detect the user's preferred language from the Accept-Language header
function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang) {
    for (const locale of locales) {
      if (acceptLang.includes(locale)) return locale;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if locale is in the URL
  const hasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );

  if (hasLocale) return;

  // Redirect to default locale
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(\`/\${locale}\${pathname}\`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
\`\`\`

### Route Structure

\`\`\`
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── about/
│       └── page.tsx
\`\`\`

### Loading Translations

\`\`\`tsx
// dictionaries/en.json
{ "welcome": "Welcome", "about": "About Us" }

// dictionaries/fr.json
{ "welcome": "Bienvenue", "about": "À propos" }

// lib/dictionaries.ts
// Lazy-load translations — only the requested locale's JSON is bundled
const dictionaries = {
  en: () => import('../dictionaries/en.json').then(m => m.default),
  fr: () => import('../dictionaries/fr.json').then(m => m.default),
};

export async function getDictionary(locale: string) {
  return dictionaries[locale as keyof typeof dictionaries]();
}

// app/[locale]/page.tsx
import { getDictionary } from '../../lib/dictionaries';

export default async function Page({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale);
  return <h1>{dict.welcome}</h1>;
}
\`\`\``,task:{description:"Set up an i18n routing system with middleware that detects the user locale and redirects. Create a page that loads translations based on the locale param.",starterCode:`// middleware.ts
// TODO: Detect locale and redirect

// app/[locale]/page.tsx
// TODO: Load translations and render`,solution:`// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'de'];

function getLocale(request: NextRequest): string {
  const lang = request.headers.get('accept-language') ?? '';
  for (const locale of locales) {
    if (lang.includes(locale)) return locale;
  }
  return 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(l => pathname.startsWith(\`/\${l}/\`) || pathname === \`/\${l}\`);
  if (hasLocale) return;

  const locale = getLocale(request);
  return NextResponse.redirect(new URL(\`/\${locale}\${pathname}\`, request.url));
}

export const config = { matcher: ['/((?!api|_next|favicon.ico).*)'] };

// app/[locale]/page.tsx
const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome!', description: 'This is our Next.js app.' },
  fr: { welcome: 'Bienvenue!', description: 'Ceci est notre application Next.js.' },
  de: { welcome: 'Willkommen!', description: 'Dies ist unsere Next.js-App.' },
};

export default function Page({ params }: { params: { locale: string } }) {
  const t = translations[params.locale] ?? translations.en;
  return (
    <div>
      <h1>{t.welcome}</h1>
      <p>{t.description}</p>
    </div>
  );
}`,hints:["Use [locale] as a dynamic route segment","Check accept-language header for preferred locale","Load translations server-side for SSR benefits"]}}],test:[{id:"mod12-q1",question:"How is locale-based routing typically implemented in the App Router?",options:["Using query params","Using a [locale] dynamic segment under app/","Using cookies only","Using subdomains"],correctAnswer:1,explanation:"The common pattern is using app/[locale]/ as a dynamic route segment that captures the locale from the URL."},{id:"mod12-q2",question:"Where should locale detection happen?",options:["In the page component","In middleware for automatic redirect","In the API route","In the browser only"],correctAnswer:1,explanation:"Middleware runs before routes, making it the ideal place to detect locale and redirect users to the correct localized URL."},{id:"mod12-q3",question:"What HTTP header indicates the user preferred language?",options:["Content-Language","Accept-Language","X-Locale","User-Agent"],correctAnswer:1,explanation:"The Accept-Language header is sent by browsers to indicate the user's preferred languages."},{id:"mod12-q4",question:"How should translations be loaded in Server Components?",options:["Using useEffect","Using dynamic import on the server","Using localStorage","Using fetch to a translation API"],correctAnswer:1,explanation:"Server Components can use dynamic import or direct file reads to load translation files, keeping everything server-side."},{id:"mod12-q5",question:"What is the benefit of URL-based i18n over cookie-based?",options:["Faster loading","Better SEO — search engines can index each locale separately","Less code required","Better security"],correctAnswer:1,explanation:"URL-based localization creates distinct URLs for each language (/en/about, /fr/about), allowing search engines to index and rank each version."}]},sh={id:"mod-13",title:"Testing Next.js Apps",description:"Unit testing, integration testing, and E2E testing with Jest, React Testing Library, and Playwright. Write tests for Server Components, Client Components, Route Handlers, and full user flows to ensure reliability across your entire Next.js application.",topics:[{id:"mod13-t1",title:"Unit & Integration Testing",explanation:`## Testing Setup

### Jest + React Testing Library

\`\`\`bash
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
\`\`\`

### Testing Server Components

\`\`\`tsx
// __tests__/page.test.tsx
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

// Mock fetch for Server Components — required since tests run in Node, not a browser
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'Test Post' }]),
  })
) as jest.Mock;

describe('Home Page', () => {
  it('renders posts', async () => {
    const page = await Page();
    render(page);
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });
});
\`\`\`

### Testing Client Components

\`\`\`tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';

describe('Counter', () => {
  it('increments on click', () => {
    render(<Counter />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Count: 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
  });
});
\`\`\`

### Testing Server Actions

\`\`\`tsx
import { createPost } from '../app/actions';

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

describe('createPost', () => {
  it('creates a post and revalidates', async () => {
    const formData = new FormData();
    formData.set('title', 'Test');
    formData.set('content', 'Content');

    const result = await createPost(formData);
    expect(result.success).toBe(true);
  });
});
\`\`\`

### Testing Route Handlers

\`\`\`tsx
import { GET, POST } from '../app/api/users/route';

describe('/api/users', () => {
  it('GET returns users', async () => {
    const response = await GET();
    const data = await response.json();
    expect(data).toHaveLength(2);
  });

  it('POST creates a user', async () => {
    const request = new Request('http://localhost/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'test@test.com' }),
    });
    const response = await POST(request);
    expect(response.status).toBe(201);
  });
});
\`\`\``,task:{description:"Write tests for a Counter Client Component (with click handling) and a Route Handler (GET endpoint that returns a list of items).",starterCode:`// __tests__/Counter.test.tsx
// TODO: Test that Counter renders and increments

// __tests__/api.test.ts
// TODO: Test GET route handler`,solution:`// __tests__/Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Assume Counter component
function Counter() {
  const [count, setCount] = require('react').useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}

describe('Counter', () => {
  it('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByRole('button')).toHaveTextContent('Count: 0');
  });

  it('increments count on click', () => {
    render(<Counter />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 2');
  });
});

// __tests__/api.test.ts
describe('/api/items', () => {
  it('GET returns a list of items', async () => {
    const response = await fetch('http://localhost:3000/api/items');
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(response.status).toBe(200);
  });
});`,hints:["Import @testing-library/jest-dom for custom matchers like toHaveTextContent","Use fireEvent.click to simulate user clicks","Test Route Handlers by calling the exported function directly"]}},{id:"mod13-t2",title:"E2E Testing with Playwright",explanation:`## Playwright for E2E Testing

\`\`\`bash
npm install -D @playwright/test
npx playwright install
\`\`\`

### Configuration

\`\`\`ts
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  // Automatically start the dev server before running E2E tests
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI, // Skip startup if server already running locally
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
\`\`\`

### Writing E2E Tests

\`\`\`ts
import { test, expect } from '@playwright/test';

test('homepage loads and navigation works', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome');

  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  await expect(page.locator('h1')).toContainText('About');
});

test('form submission works', async ({ page }) => {
  await page.goto('/contact');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'Hello!');
  await page.click('button[type="submit"]');

  await expect(page.locator('.success')).toBeVisible();
});

test('authentication flow', async ({ page }) => {
  await page.goto('/dashboard');
  // Should redirect to login
  await expect(page).toHaveURL('/login');

  await page.fill('input[name="email"]', 'user@test.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');

  // Should redirect to dashboard
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
});
\`\`\``,task:{description:"Write a Playwright E2E test that navigates to the homepage, verifies the heading, clicks a navigation link, and verifies the new page content.",starterCode:`// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

// TODO: Write navigation E2E test`,solution:`// e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('can navigate from home to about page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Welcome');

    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
  });

  test('can navigate back to home', async ({ page }) => {
    await page.goto('/about');
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
  });

  test('404 page shows for unknown routes', async ({ page }) => {
    const response = await page.goto('/unknown-route');
    expect(response?.status()).toBe(404);
  });
});`,hints:["Use page.goto() to navigate to URLs","Use expect(page.locator(...)) for assertions","Use page.click() and page.fill() for interactions"]}}],test:[{id:"mod13-q1",question:"How do you test an async Server Component?",options:["render(<Component />)","const result = await Component(); render(result)","mount(<Component />)","shallow(<Component />)"],correctAnswer:1,explanation:"Server Components are async functions. You need to await them first, then render the result in the test."},{id:"mod13-q2",question:"What library provides toHaveTextContent and toBeInTheDocument matchers?",options:["jest","@testing-library/react","@testing-library/jest-dom","playwright"],correctAnswer:2,explanation:"@testing-library/jest-dom provides custom DOM matchers like toHaveTextContent, toBeInTheDocument, toBeVisible, etc."},{id:"mod13-q3",question:"What does Playwright's webServer config option do?",options:["Mocks the server","Starts the dev server before running tests","Creates a test database","Deploys the app"],correctAnswer:1,explanation:"The webServer option automatically starts the Next.js dev server before running tests and shuts it down afterwards."},{id:"mod13-q4",question:"How do you test a Server Action?",options:["Import and call it directly with mock data","Use Playwright","Use Cypress","You cannot test Server Actions"],correctAnswer:0,explanation:"Server Actions can be tested directly by importing and calling them with FormData, while mocking dependencies like revalidatePath."},{id:"mod13-q5",question:"What is the difference between unit tests and E2E tests?",options:["No difference","Unit tests test isolated functions; E2E tests test the full app flow in a browser","Unit tests are slower","E2E tests only test APIs"],correctAnswer:1,explanation:"Unit tests verify individual functions/components in isolation, while E2E tests verify complete user flows in a real browser environment."}]},ah={id:"mod-14",title:"Deployment & Production",description:"Deploy Next.js apps: Vercel, Docker, self-hosting, environment variables, and production best practices. Learn the differences between standalone output and static export, configure security headers, set up bundle analysis, and monitor performance in production.",topics:[{id:"mod14-t1",title:"Vercel & Self-Hosting",explanation:`## Deployment Options

### Vercel (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
\`\`\`

Vercel provides:
- Automatic SSL
- Edge Network CDN
- Preview deployments for PRs
- Serverless functions for API routes
- Edge Functions for middleware

### Docker Self-Hosting

\`\`\`dockerfile
# Dockerfile
# Stage 1: Install dependencies in an isolated layer
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Stage 2: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production image — only includes what's needed to run
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

### Standalone Output

\`\`\`js
// next.config.js
module.exports = {
  output: 'standalone', // Creates a minimal self-contained folder for Docker/VPS deployment
};
\`\`\`

### Static Export

\`\`\`js
// next.config.js
module.exports = {
  output: 'export', // Pure static HTML — no Node.js server required (S3, GitHub Pages) — no Node.js server required (S3, GitHub Pages)
};
\`\`\`

### Environment Variables

\`\`\`bash
# .env.local (not committed)
DATABASE_URL=postgresql://...
API_SECRET=my-secret-key

# .env.production
NEXT_PUBLIC_API_URL=https://api.prod.com
\`\`\`

| Prefix | Available |
|--------|----------|
| None | Server-side only |
| \`NEXT_PUBLIC_\` | Client and server |`,task:{description:"Create a next.config.js with standalone output, redirect rules, and image optimization settings. Also set up a .env.local file with server-side and public environment variables.",starterCode:`// next.config.js
// TODO: Configure standalone output, redirects, images

// .env.local
// TODO: Define server and public env vars`,solution:`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.example.com' },
    ],
  },
  async redirects() {
    return [
      { source: '/old-blog/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/docs', destination: '/documentation', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// .env.local
// DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
// API_SECRET=super-secret-key
// NEXT_PUBLIC_API_URL=http://localhost:3000/api
// NEXT_PUBLIC_APP_NAME=My Next.js App`,hints:['Use output: "standalone" for Docker deployments',"Only NEXT_PUBLIC_ prefixed vars are exposed to the client","permanent: true creates a 301 redirect; false creates 302"]}},{id:"mod14-t2",title:"Performance & Monitoring",explanation:`## Production Performance

### Bundle Analysis

\`\`\`bash
npm install @next/bundle-analyzer
\`\`\`

\`\`\`js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({ /* config */ });
\`\`\`

### Dynamic Imports for Code Splitting

\`\`\`tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // Don't render on server
});

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart /> {/* Loaded only when needed */}
    </div>
  );
}
\`\`\`

### Performance Monitoring

\`\`\`tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
\`\`\`

### Production Checklist

- ✅ Set \`output: 'standalone'\` for Docker
- ✅ Use \`next/image\` for all images
- ✅ Use \`next/font\` for fonts
- ✅ Minimize Client Components
- ✅ Add security headers
- ✅ Set up error monitoring (Sentry, etc.)
- ✅ Configure caching strategies
- ✅ Enable bundle analyzer to check sizes
- ✅ Test Core Web Vitals`,task:{description:"Use next/dynamic to lazy-load a heavy chart component with a loading fallback and no SSR. Set up the bundle analyzer in next.config.js.",starterCode:`// components/DashboardWithChart.tsx
// TODO: Dynamically import Chart with loading fallback and ssr: false`,solution:`// components/DashboardWithChart.tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(
  () => import('./HeavyChart'),
  {
    loading: () => (
      <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: 8 }}>
        <p>Loading chart...</p>
      </div>
    ),
    ssr: false,
  }
);

export function DashboardWithChart() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  );
}`,hints:["next/dynamic is the Next.js version of React.lazy","ssr: false prevents the component from rendering during SSR","loading provides a fallback UI while the component loads"]}}],test:[{id:"mod14-q1",question:'What does output: "standalone" do in next.config.js?',options:["Exports static HTML","Creates a minimal self-contained build for Docker deployment","Enables SSR","Disables ISR"],correctAnswer:1,explanation:"standalone output creates a minimal build that includes only the necessary files, ideal for Docker containers."},{id:"mod14-q2",question:"Which environment variables are exposed to the client?",options:["All of them","Only those prefixed with NEXT_PUBLIC_","Only those in .env.production","None"],correctAnswer:1,explanation:"Only environment variables prefixed with NEXT_PUBLIC_ are available in client-side code. Others are server-only."},{id:"mod14-q3",question:"What does dynamic import with ssr: false do?",options:["Disables the component","Loads the component only on the client side, not during SSR","Makes it cached","Preloads the component"],correctAnswer:1,explanation:"ssr: false tells Next.js to skip rendering the component during server-side rendering and only load it on the client."},{id:"mod14-q4",question:"What is a permanent redirect status code?",options:["200","302","301","404"],correctAnswer:2,explanation:"301 is a permanent redirect, telling browsers and search engines that the URL has permanently moved. 302 is temporary."},{id:"mod14-q5",question:'What is output: "export" used for?',options:["API-only deployment","Pure static HTML export with no server features","Edge deployment","PWA export"],correctAnswer:1,explanation:'output: "export" generates a pure static HTML export that can be hosted on any static file server, but disables server features like SSR and API routes.'}]},ih={id:"mod-15",title:"Advanced Patterns & Architecture",description:"Parallel routes, intercepting routes, composition patterns, monorepos, and large-scale Next.js architecture. Explore advanced layout techniques, the Provider and Donut patterns for mixing server and client code, and Turborepo for managing multi-app repositories.",topics:[{id:"mod15-t1",title:"Parallel & Intercepting Routes",explanation:`## Parallel Routes

Parallel routes let you render multiple pages simultaneously in the same layout.

### Defining Slots

\`\`\`
app/
  @dashboard/
    page.tsx        # Dashboard slot
  @analytics/
    page.tsx        # Analytics slot
  layout.tsx        # Receives both as props
\`\`\`

\`\`\`tsx
// app/layout.tsx
// Each @slot folder is passed as a named prop to the layout
export default function Layout({
  children,
  dashboard, // Comes from @dashboard/page.tsx
  analytics, // Comes from @analytics/page.tsx
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2">
      <div>{dashboard}</div>
      <div>{analytics}</div>
    </div>
  );
}
\`\`\`

### Conditional Slots

\`\`\`tsx
import { getUser } from '@/lib/auth';

export default async function Layout({ admin, user }) {
  const role = await getUser();
  return role === 'admin' ? admin : user;
}
\`\`\`

## Intercepting Routes

Intercepting routes let you load a route within the current layout — perfect for modals.

\`\`\`
app/
  feed/
    page.tsx
    @modal/
      (..)photo/[id]/    # Intercepts /photo/[id]
        page.tsx          # Shows in modal
  photo/[id]/
    page.tsx              # Full page (direct navigation)
\`\`\`

### Convention:

| Pattern | Matches |
|---------|---------|
| \`(.)\` | Same level |
| \`(..)\` | One level up |
| \`(..)(..)\` | Two levels up |
| \`(...)\` | From root |`,task:{description:"Create a layout that uses parallel routes for a dashboard with @team and @projects slots. Add a default.tsx for unmatched routes.",starterCode:`// app/dashboard/layout.tsx
// TODO: Accept and render @team and @projects slots

// app/dashboard/@team/default.tsx
// TODO: Return a default UI for unmatched team slot`,solution:`// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  team,
  projects,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  projects: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <section>
          <h2>Team</h2>
          {team}
        </section>
        <section>
          <h2>Projects</h2>
          {projects}
        </section>
      </div>
    </div>
  );
}

// app/dashboard/@team/default.tsx
export default function DefaultTeam() {
  return <p>Select a team to view details</p>;
}`,hints:["Slots are defined by @folder convention","Each slot is passed as a prop to the parent layout","default.tsx provides fallback UI for unmatched parallel routes"]}},{id:"mod15-t2",title:"Composition & Monorepo Patterns",explanation:`## Server-Client Composition

### The "Donut" Pattern

Wrap client interactivity around server-rendered content:

\`\`\`tsx
// Server Component (outer shell)
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Server-rendered content passed INTO client component */}
      <AddToCartButton productId={product.id}>
        <PriceDisplay price={product.price} />
      </AddToCartButton>
    </div>
  );
}
\`\`\`

\`\`\`tsx
'use client';
export function AddToCartButton({ productId, children }) {
  return (
    <div>
      {children} {/* Server-rendered PriceDisplay */}
      <button onClick={() => addToCart(productId)}>Add to Cart</button>
    </div>
  );
}
\`\`\`

### Provider Pattern

\`\`\`tsx
// app/providers.tsx
'use client'; // Providers use React Context which requires client-side rendering
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

// Wrap all client-side providers in one component for the root layout
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
\`\`\`

\`\`\`tsx
// app/layout.tsx (Server Component)
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
\`\`\`

### Monorepo with Turborepo

\`\`\`
my-monorepo/
  apps/
    web/          # Next.js app
    docs/         # Docs site
  packages/
    ui/           # Shared UI components
    config/       # Shared configs
    tsconfig/     # Shared tsconfig
  turbo.json
  package.json
\`\`\`

\`\`\`json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": { "cache": false }
  }
}
\`\`\``,task:{description:"Implement the Provider pattern: create a client Providers component that wraps children with ThemeProvider and a custom CartProvider. Use it in a server layout.",starterCode:`// app/providers.tsx
// TODO: Create client-side Providers wrapper

// app/layout.tsx
// TODO: Use Providers in the server layout`,solution:`// app/providers.tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  items: string[];
  addItem: (id: string) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  return (
    <CartContext.Provider value={{ items, addItem: (id) => setItems((p) => [...p, id]) }}>
      {children}
    </CartContext.Provider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`,hints:['Mark providers.tsx with "use client" at the top',"The layout.tsx stays as a Server Component","Pass children through the Providers wrapper"]}}],test:[{id:"mod15-q1",question:"How are parallel route slots defined?",options:["With [slot] folders","With @slot folders","In next.config.js","With route.slot.tsx files"],correctAnswer:1,explanation:"Parallel routes use the @folder convention. Each @folder becomes a slot that is passed as a prop to the parent layout."},{id:"mod15-q2",question:"What is the purpose of default.tsx in parallel routes?",options:["To define the home page","To provide fallback UI for unmatched parallel routes","To set default props","To handle errors"],correctAnswer:1,explanation:"default.tsx provides a fallback UI when a parallel route slot doesn't have a match for the current URL."},{id:"mod15-q3",question:'What is the "donut" pattern?',options:["Circular imports","A Server Component wrapping client interactivity around server-rendered content","A caching strategy","A circular layout"],correctAnswer:1,explanation:"The donut pattern wraps client components around server-rendered children, maximizing server rendering while enabling interactivity."},{id:"mod15-q4",question:"How do you intercept a route one level up?",options:["(.)","(..)","(...)","(@)"],correctAnswer:1,explanation:"(..) matches one level up from the current segment. (.) is same level, (...) is from root."},{id:"mod15-q5",question:"Why should Providers be a Client Component while layout stays a Server Component?",options:["Performance: it reduces the client bundle","Server Components cannot have children","Layouts must be client components","It's a Next.js requirement"],correctAnswer:0,explanation:"By isolating client-side providers in a Client Component, the layout itself remains a Server Component, reducing the client JS bundle."}]},lh=[{id:"ft-1",question:"What is the default rendering strategy for components in the App Router?",options:["Client-side rendering","Server-side rendering (Server Components)","Static HTML","Hybrid"],correctAnswer:1,explanation:'In the App Router, all components are Server Components by default unless marked with "use client".'},{id:"ft-2",question:"You need a component with onClick handlers. What do you add?",options:['"use server"','"use client"',"Nothing",'"use interactive"'],correctAnswer:1,explanation:'Event handlers require client-side JavaScript, so the component must be a Client Component with "use client".'},{id:"ft-3",question:"How do you pre-render a dynamic route like /blog/[slug] at build time?",options:["Use getServerSideProps","Export generateStaticParams","Add static: true to config","Use ISR"],correctAnswer:1,explanation:"generateStaticParams returns the list of slug values to pre-render at build time."},{id:"ft-4",question:'What happens when you call revalidatePath("/blog") in a Server Action?',options:["Deletes the blog page","Purges the cached version so it regenerates on next request","Refreshes the browser","Resets the database"],correctAnswer:1,explanation:"revalidatePath purges the cached page, triggering regeneration on the next request (on-demand ISR)."},{id:"ft-5",question:"A form submits data without client-side JS. What feature enables this?",options:["AJAX","Server Actions with <form action={serverAction}>","fetch API","WebSockets"],correctAnswer:1,explanation:"Server Actions can be passed directly to form action, enabling progressive enhancement without client JS."},{id:"ft-6",question:"You want to show a skeleton while a slow data fetch completes. What do you use?",options:["loading.tsx + Suspense","useState + useEffect","setTimeout","CSS animations only"],correctAnswer:0,explanation:"loading.tsx creates an automatic Suspense boundary, showing a loading UI while the async component resolves."},{id:"ft-7",question:"A middleware needs to redirect unauthenticated users. What does it return?",options:["throw new Error()",'NextResponse.redirect(new URL("/login", request.url))',"return false","Response.redirect()"],correctAnswer:1,explanation:"NextResponse.redirect() creates a redirect response in Next.js middleware."},{id:"ft-8",question:"What is wrong with this? fetch(url) in a Server Component without cache options.",options:["It will error","It caches by default, which may serve stale data","Nothing, it works fine","It will not compile"],correctAnswer:1,explanation:'In Next.js, fetch in Server Components caches by default. You need cache: "no-store" for always-fresh data.'},{id:"ft-9",question:"You need to share a layout between /marketing and /shop without a URL prefix. How?",options:["Use a shared component","Use a Route Group: (marketing) and (shop) folders","Use middleware","Use redirects"],correctAnswer:1,explanation:"Route Groups with (folderName) convention allow shared layouts without affecting the URL path."},{id:"ft-10",question:"A Client Component needs data from a Server Component. How do you pass it?",options:["Through context","As serializable props","Via global state","Through the URL"],correctAnswer:1,explanation:"Server Components pass data to Client Components via serializable props (no functions or class instances)."},{id:"ft-11",question:"What's the difference between redirect() and rewrite() in middleware?",options:["No difference","redirect changes the URL in browser; rewrite proxies without changing URL","rewrite is faster","redirect is deprecated"],correctAnswer:1,explanation:"redirect() changes the browser URL (visible to user). rewrite() serves different content at the same URL."},{id:"ft-12",question:"How do you opt a dynamic route into static generation?",options:['Set dynamic = "force-static"',"export const revalidate = Infinity","Both A and B work","It's not possible"],correctAnswer:2,explanation:"Both force-static and revalidate = Infinity force a route to be statically generated."},{id:"ft-13",question:"What does next/image automatically do for you?",options:["Lazy loading, responsive sizing, format optimization, and cache headers","Only lazy loading","Only compression","Only responsive sizing"],correctAnswer:0,explanation:"next/image handles lazy loading, responsive images, WebP/AVIF conversion, and caching automatically."},{id:"ft-14",question:`You see "Error: useState is not a function". The component is in the app/ directory. What's wrong?`,options:["Wrong import",'Missing "use client" directive',"React version too old","TypeScript error"],correctAnswer:1,explanation:'useState is a hook that requires client-side React. Add "use client" to use hooks in App Router components.'},{id:"ft-15",question:"How do you create an API endpoint that handles POST requests?",options:["Create pages/api/route.ts","Export async function POST from route.ts in app/","Use express.post()","Create a Server Action"],correctAnswer:1,explanation:"In the App Router, export named functions (GET, POST, etc.) from route.ts files."},{id:"ft-16",question:"What does the @ prefix mean in the app/ directory?",options:["Private folder","Parallel route slot","API route","Middleware"],correctAnswer:1,explanation:"@folder defines a parallel route slot that renders alongside other slots in the same layout."},{id:"ft-17",question:"You want a photo modal that opens over the feed but also works as a standalone page. What pattern?",options:["Client-side modal only","Intercepting routes with (..) convention","Two separate pages","iframe"],correctAnswer:1,explanation:"Intercepting routes show the photo as a modal when navigating from the feed, but as a full page when accessed directly."},{id:"ft-18",question:"What is the benefit of using next/font over a <link> to Google Fonts?",options:["More font choices","Self-hosted, no external requests, zero layout shift","Smaller file size","Better color support"],correctAnswer:1,explanation:"next/font self-hosts fonts at build time, eliminating external network requests and layout shift."},{id:"ft-19",question:"How do you test that a Next.js page renders correctly in an E2E test?",options:["Jest snapshot test","Playwright with page.goto() and assertions","Manual testing only","TypeScript compiler"],correctAnswer:1,explanation:"Playwright navigates to pages in a real browser and makes assertions about rendered content."},{id:"ft-20",question:"Your app needs i18n. How does Next.js handle locale routing?",options:["Only with third-party libraries","Through middleware that detects locale and rewrites to prefixed paths","Automatic browser detection","URL query parameters"],correctAnswer:1,explanation:"Next.js i18n typically uses middleware to detect the locale and rewrite to locale-prefixed paths like /en/about."}],uh=[{id:"lt-1",question:"What command creates a new Next.js project?",options:["npx create-next-app@latest","npm init next","next new app","npx next-init"],correctAnswer:0,explanation:"npx create-next-app@latest is the official scaffolding command."},{id:"lt-2",question:"Which directory defines routes in the App Router?",options:["pages/","routes/","app/","src/views/"],correctAnswer:2,explanation:"The app/ directory is used for file-based routing in the App Router."},{id:"lt-3",question:"What is a Server Component?",options:["A component that runs on the client","A component rendered on the server with zero client-side JS","A REST API endpoint","A WebSocket handler"],correctAnswer:1,explanation:"Server Components render on the server and send only HTML, with no JavaScript shipped to the client."},{id:"lt-4",question:"How do you make a component a Client Component?",options:['Add "use client" at the top',"Export it as default","Wrap it in ClientBoundary","Add client: true to props"],correctAnswer:0,explanation:'"use client" directive at the top of the file marks it as a Client Component.'},{id:"lt-5",question:"What does layout.tsx do?",options:["Defines a test layout","Wraps child routes, persists across navigations","Defines API routes","Handles errors"],correctAnswer:1,explanation:"layout.tsx defines shared UI that wraps child routes and persists its state across navigations."},{id:"lt-6",question:"What file defines a loading state for a route segment?",options:["loading.tsx","spinner.tsx","wait.tsx","pending.tsx"],correctAnswer:0,explanation:"loading.tsx creates an instant loading UI using React Suspense."},{id:"lt-7",question:"How do you create a dynamic route in the App Router?",options:['<Route path=":id">',"Using [param] folder naming","With dynamic.config.js","Using ?param query"],correctAnswer:1,explanation:"Dynamic segments use [param] folder naming convention, e.g., [id]/ or [slug]/."},{id:"lt-8",question:"What does generateStaticParams do?",options:["Generates URL query strings","Pre-renders dynamic routes at build time","Creates API parameters","Validates request params"],correctAnswer:1,explanation:"generateStaticParams defines the list of dynamic params to statically generate at build time."},{id:"lt-9",question:"What is ISR?",options:["Internal Server Routing","Incremental Static Regeneration","Inline Style Rendering","Initial State Resolution"],correctAnswer:1,explanation:"ISR lets you update static pages after build time by revalidating at a specified interval."},{id:"lt-10",question:"Which function triggers ISR on-demand?",options:["revalidateTag()","revalidatePath()","Both A and B","refreshCache()"],correctAnswer:2,explanation:"Both revalidateTag() and revalidatePath() can trigger on-demand ISR."},{id:"lt-11",question:"What is a Server Action?",options:["A REST endpoint","An async function that runs on the server, callable from client","A middleware function","A database trigger"],correctAnswer:1,explanation:'Server Actions are async functions marked with "use server" that execute on the server side.'},{id:"lt-12",question:"How do you define a Server Action?",options:["export const action = serverAction()",'Add "use server" at function or file level',"Use createServerAction()","In server.config.ts"],correctAnswer:1,explanation:'"use server" directive marks functions as Server Actions.'},{id:"lt-13",question:"What HTTP method does route.ts handle by default?",options:["GET only","All exported methods (GET, POST, etc.)","POST only","It depends on the filename"],correctAnswer:1,explanation:"route.ts exports named functions for each HTTP method: GET, POST, PUT, DELETE, etc."},{id:"lt-14",question:"Can a route.ts file coexist with page.tsx in the same folder?",options:["Yes","No","Only in production","Only with middleware"],correctAnswer:1,explanation:"route.ts and page.tsx cannot coexist in the same route segment. The route handler takes precedence."},{id:"lt-15",question:"What does middleware.ts do?",options:["Handles database queries","Runs code before a request is completed","Defines API schemas","Manages state"],correctAnswer:1,explanation:"Middleware runs before a request is completed, allowing redirects, rewrites, and header modifications."},{id:"lt-16",question:"Where should middleware.ts be placed?",options:["In any route folder","In the project root (next to app/)","In the api/ folder","In node_modules/"],correctAnswer:1,explanation:"middleware.ts must be placed at the root of the project, at the same level as app/ or pages/."},{id:"lt-17",question:"What is the Edge Runtime?",options:["A browser API","A lightweight runtime for middleware and edge functions","A CSS framework","A build tool"],correctAnswer:1,explanation:"The Edge Runtime is a lightweight V8-based runtime for running code at the edge, closer to users."},{id:"lt-18",question:"Which component optimizes images in Next.js?",options:["<Img>","<Picture>","<Image> from next/image","<OptimizedImage>"],correctAnswer:2,explanation:"next/image provides automatic image optimization, lazy loading, and responsive sizing."},{id:"lt-19",question:"What does next/font do?",options:["Adds icon fonts","Automatically optimizes and self-hosts fonts with zero layout shift","Manages font licenses","Creates custom fonts"],correctAnswer:1,explanation:"next/font optimizes fonts at build time, self-hosts them, and eliminates layout shift."},{id:"lt-20",question:"What are CSS Modules in Next.js?",options:["Global CSS files","Scoped CSS files with .module.css extension","CSS-in-JS library","Tailwind plugins"],correctAnswer:1,explanation:"CSS Modules scope CSS to a component by default, preventing naming conflicts."},{id:"lt-21",question:"What is NextAuth.js?",options:["A CSS library","An authentication solution for Next.js","A database ORM","A testing framework"],correctAnswer:1,explanation:"NextAuth.js (now Auth.js) provides a complete authentication solution for Next.js apps."},{id:"lt-22",question:"What are the 4 caching layers in Next.js?",options:["Browser, CDN, Server, DB","Request Memoization, Data Cache, Full Route Cache, Router Cache","L1, L2, L3, L4","HTML, CSS, JS, Image"],correctAnswer:1,explanation:"Next.js has 4 caching layers: Request Memoization, Data Cache, Full Route Cache, and Router Cache."},{id:"lt-23",question:'What does fetch cache: "no-store" do?',options:["Stores data permanently","Disables caching for the fetch request","Stores in localStorage","Enables edge caching"],correctAnswer:1,explanation:'cache: "no-store" opts out of caching, making the fetch request dynamic on every request.'},{id:"lt-24",question:"What is Streaming in Next.js?",options:["Video streaming","Progressively sending rendered HTML chunks to the client","WebSocket connections","File upload"],correctAnswer:1,explanation:"Streaming progressively sends UI from the server, allowing users to see parts of the page before everything loads."},{id:"lt-25",question:"What React feature enables Streaming in Next.js?",options:["useEffect","Suspense","useMemo","forwardRef"],correctAnswer:1,explanation:"React Suspense boundaries enable streaming by marking parts of the UI that can load independently."},{id:"lt-26",question:"How do you create a catch-all route?",options:["[...slug]/","[*]/",'<Route path="*">',"/catch-all/"],correctAnswer:0,explanation:"[...slug] creates a catch-all route that matches any number of segments."},{id:"lt-27",question:'What does output: "standalone" do?',options:["Creates a static site","Creates a minimal self-contained build","Enables SSR","Disables caching"],correctAnswer:1,explanation:"standalone output creates a minimal build that only includes necessary files, ideal for Docker."},{id:"lt-28",question:"Which env var prefix exposes variables to the client?",options:["REACT_APP_","NEXT_PUBLIC_","CLIENT_","PUBLIC_"],correctAnswer:1,explanation:"Only variables prefixed with NEXT_PUBLIC_ are exposed to the client-side bundle."},{id:"lt-29",question:"What is a Route Group?",options:["A folder with () that organizes routes without affecting the URL","A REST API group","A testing group","A middleware group"],correctAnswer:0,explanation:"Route Groups use (folderName) convention to organize routes without adding segments to the URL."},{id:"lt-30",question:"What does the not-found.tsx file do?",options:["Returns a 500 error","Renders a custom 404 page","Redirects to home","Logs errors"],correctAnswer:1,explanation:"not-found.tsx defines a custom 404 page for when a route or resource is not found."},{id:"lt-31",question:"How do parallel routes define slots?",options:["With [slot] folders","With @slot folders","In route.config.ts","With slot= prop"],correctAnswer:1,explanation:"Parallel routes use @folder convention to define named slots."},{id:"lt-32",question:"What intercepting route pattern matches one level up?",options:["(.)","(..)","(...)","(@)"],correctAnswer:1,explanation:"(..) matches one segment level up from the current route."},{id:"lt-33",question:'What is the "donut" pattern?',options:["A caching strategy","Server Component wrapping client interactivity around server content","A routing pattern","An auth flow"],correctAnswer:1,explanation:"The donut pattern passes server-rendered children into client components as props."},{id:"lt-34",question:"Why use React.cache() with Server Components?",options:["For client state","To deduplicate identical fetch calls in a single render","For CSS caching","For image optimization"],correctAnswer:1,explanation:"React.cache() memoizes function results during a single server render pass."},{id:"lt-35",question:"What is next/dynamic used for?",options:["Dynamic routing","Dynamic imports / code splitting","Dynamic typing","Dynamic CSS"],correctAnswer:1,explanation:"next/dynamic enables dynamic imports for code splitting and lazy loading components."},{id:"lt-36",question:"What does error.tsx do?",options:["Logs errors to console","Creates an error boundary for a route segment","Validates input","Sends error emails"],correctAnswer:1,explanation:"error.tsx creates a React error boundary, catching runtime errors and showing a fallback UI."},{id:"lt-37",question:"Can Server Components use useState?",options:["Yes","No",'Only with "use state" directive',"Only in production"],correctAnswer:1,explanation:"Server Components cannot use React hooks like useState. They render only on the server."},{id:"lt-38",question:"What does useRouter() come from in the App Router?",options:["react-router-dom","next/router","next/navigation","next/link"],correctAnswer:2,explanation:"In the App Router, useRouter() comes from next/navigation (not next/router which is Pages Router)."},{id:"lt-39",question:"What Next.js component enables client-side navigation?",options:["<a>","<Navigate>","<Link> from next/link","<Router>"],correctAnswer:2,explanation:"next/link provides client-side navigation with prefetching support."},{id:"lt-40",question:"What does template.tsx do vs layout.tsx?",options:["Same thing","template.tsx re-creates on navigation; layout.tsx persists","template.tsx is for APIs","layout.tsx is deprecated"],correctAnswer:1,explanation:"template.tsx re-mounts on navigation (new instance each time), while layout.tsx persists state."},{id:"lt-41",question:"How do you validate request bodies in Route Handlers?",options:["Zod or manual validation","Automatic validation","TypeScript only","JSON schema files"],correctAnswer:0,explanation:"Next.js doesn't auto-validate. Libraries like Zod are commonly used for request validation."},{id:"lt-42",question:"What does useFormStatus() provide?",options:["Form CSS classes","Pending state during Server Action submission","Validation errors","Form data"],correctAnswer:1,explanation:"useFormStatus() from react-dom returns pending state when a form is being submitted via Server Action."},{id:"lt-43",question:"What does useOptimistic do?",options:["Optimizes images","Shows optimistic UI updates during Server Actions","Caches data","Preloads routes"],correctAnswer:1,explanation:"useOptimistic shows temporary optimistic values while a Server Action is in progress."},{id:"lt-44",question:"Where does the Router Cache live?",options:["On the server","In the browser memory","In a database","In cookies"],correctAnswer:1,explanation:"The Router Cache is an in-memory, client-side cache that stores prefetched and visited route data."},{id:"lt-45",question:"What is the default revalidation strategy for static routes?",options:["No caching","Cache until revalidated","Cache for 60 seconds","Never cache"],correctAnswer:1,explanation:"Static routes are cached indefinitely until explicitly revalidated via revalidatePath/revalidateTag."},{id:"lt-46",question:"What does the matcher config in middleware do?",options:["Matches database queries","Specifies which routes the middleware applies to","Matches regex in URLs","Matches API versions"],correctAnswer:1,explanation:"The matcher config limits middleware execution to specific route patterns."},{id:"lt-47",question:"Can you use cookies() in Server Components?",options:["Yes, it's a server-only function","No","Only with middleware","Only in API routes"],correctAnswer:0,explanation:"cookies() from next/headers is available in Server Components and Route Handlers."},{id:"lt-48",question:"What test runner does Next.js recommend?",options:["Mocha","Jest or Vitest","Jasmine","Karma"],correctAnswer:1,explanation:"Next.js officially supports Jest and Vitest for unit/integration testing."},{id:"lt-49",question:"What does Playwright test in a Next.js app?",options:["Unit tests only","End-to-end tests in a real browser","API tests only","Type checking"],correctAnswer:1,explanation:"Playwright runs end-to-end tests in real browsers, testing the full user experience."},{id:"lt-50",question:"What does priority prop on next/image do?",options:["Sets z-index","Preloads the image (for LCP images)","Sets quality","Sets file format"],correctAnswer:1,explanation:"priority tells Next.js to preload the image, useful for Largest Contentful Paint (LCP) images."},{id:"lt-51",question:"What is the Pages Router?",options:["The new routing system","The legacy file-based router using pages/ directory","A third-party plugin","A mobile-only router"],correctAnswer:1,explanation:"The Pages Router is the original Next.js routing system using the pages/ directory, now superseded by the App Router."},{id:"lt-52",question:"What is the purpose of next.config.js redirects?",options:["Redirect imports","Define URL redirects (301/302)","Redirect build output","Redirect error pages"],correctAnswer:1,explanation:"redirects() in next.config.js defines server-side URL redirects with permanent or temporary status."},{id:"lt-53",question:"What does Turbopack do?",options:["Bundles CSS","Next.js's Rust-based successor to Webpack for faster builds","Manages packages","Runs tests"],correctAnswer:1,explanation:"Turbopack is a Rust-based bundler that replaces Webpack for faster development builds in Next.js."},{id:"lt-54",question:"What does the sizes prop on next/image specify?",options:["File sizes","The expected display size at different breakpoints","Number of variants","Compression ratio"],correctAnswer:1,explanation:"sizes tells the browser how wide the image will be at various breakpoints for responsive loading."},{id:"lt-55",question:"How do you pass server data to Client Components?",options:["Global variables","As serializable props","Through localStorage","Via WebSockets"],correctAnswer:1,explanation:"Server Components pass data to Client Components via props, which must be serializable (no functions, classes, etc)."},{id:"lt-56",question:"What does generateMetadata do?",options:["Generates database metadata","Dynamically generates page SEO metadata","Creates API docs","Generates TypeScript types"],correctAnswer:1,explanation:"generateMetadata generates dynamic <head> metadata (title, description, og tags) per page."},{id:"lt-57",question:"What is a catch-all vs optional catch-all route?",options:["[...slug] requires 1+ segments; [[...slug]] matches 0+","They are the same","[...slug] is for APIs","[[...slug]] requires params"],correctAnswer:0,explanation:"[...slug] requires at least one segment. [[...slug]] (double brackets) also matches the parent route with no segments."},{id:"lt-58",question:"What does NextResponse.rewrite() do?",options:["Rewrites the file","Proxies the request to a different URL without changing the browser URL","Rewrites headers","Rewrites cookies"],correctAnswer:1,explanation:"rewrite() serves content from a different URL while keeping the browser URL unchanged."},{id:"lt-59",question:'When should you use "use client" vs "use server"?',options:['"use client" for interactivity; "use server" for Server Actions',"They are interchangeable",'"use server" for all components','"use client" for API calls'],correctAnswer:0,explanation:'"use client" marks Client Components with interactivity. "use server" marks Server Actions callable from client code.'},{id:"lt-60",question:"What output mode creates a pure static export?",options:['output: "standalone"','output: "export"','output: "static"','output: "html"'],correctAnswer:1,explanation:'output: "export" generates a fully static HTML export with no server-side capabilities.'}];function Tl(e=30){const t=[...uh].sort(()=>Math.random()-.5);return t.slice(0,Math.min(e,t.length))}const te={title:"Next.js & SSR Mastery",description:"A comprehensive course covering Next.js App Router, Server Components, SSR, SSG, ISR, data fetching, caching, middleware, authentication, deployment, and advanced architectural patterns.",modules:[Gm,Qm,Jm,Ym,Km,Xm,Zm,eh,th,nh,rh,oh,sh,ah,ih],finalTest:lh};function ch(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function dh({onRandomQuestion:e,onQuickLine:t,isOpen:n,onClose:r}){const{progress:o}=kt(),s=a=>{const i=te.modules.find(u=>u.id===a);if(!i)return 0;const l=i.topics.filter(u=>{var h;return(h=o.topicProgress[u.id])==null?void 0:h.completed}).length;return Math.round(l/i.topics.length*100)};return c.jsxs("aside",{className:`sidebar ${n?"open":""}`,children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsxs("h2",{children:["▲ ",te.title]}),r&&c.jsx("button",{className:"sidebar-close",onClick:r,children:"✕"})]}),c.jsxs("nav",{className:"sidebar-nav",children:[c.jsx(Lr,{to:"/",end:!0,className:"nav-item",onClick:r,children:"🏠 Dashboard"}),c.jsxs(Lr,{to:"/level-test",className:"nav-item",onClick:r,children:["📋 Level Evaluation",o.levelTestResult&&c.jsx("span",{className:"badge",children:ch(Math.round(o.levelTestResult.score/o.levelTestResult.total*100))})]}),e&&c.jsx("button",{className:"nav-item random-q-btn",onClick:e,children:"🎲 Random Question"}),t&&c.jsx("button",{className:"nav-item random-q-btn",onClick:t,children:"⚡ Quick Line"}),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Modules"})}),te.modules.map((a,i)=>c.jsx("div",{className:"module-nav",children:c.jsxs(Lr,{to:`/module/${a.id}`,className:"nav-item module-link",onClick:r,children:[c.jsxs("span",{children:[i+1,". ",a.title]}),c.jsxs("span",{className:"progress-badge",children:[s(a.id),"%"]})]})},a.id)),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Assessment"})}),c.jsxs(Lr,{to:"/final-test",className:"nav-item",onClick:r,children:["🏆 Final Test",o.finalTestResult&&c.jsxs("span",{className:"badge",children:[o.finalTestResult.score,"/",o.finalTestResult.total]})]})]})]})}function ph(){const e=[],t=new Map;for(const n of te.modules)for(const r of n.test){e.push(r);const o=n.topics[0];t.set(r.id,{moduleId:n.id,moduleTitle:n.title,topicId:(o==null?void 0:o.id)??"",topicTitle:(o==null?void 0:o.title)??""})}for(const n of te.finalTest)e.push(n);return{questions:e,sourceMap:t}}const{questions:El,sourceMap:fh}=ph();function bl(){return El[Math.floor(Math.random()*El.length)]}function mh({onClose:e}){const{dispatch:t}=kt(),[n,r]=S.useState(bl),[o,s]=S.useState(null),[a,i]=S.useState(!1),[l,u]=S.useState(0),[h,f]=S.useState(!1),[g,x]=S.useState(0),v=S.useMemo(()=>fh.get(n.id),[n.id]),w=S.useCallback(()=>{r(bl()),s(null),i(!1),f(!1)},[]),k=p=>{if(!a)if(s(p),i(!0),p===n.correctAnswer){const d=l+1;u(d),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!0,streak:d}})}else x(l),f(!0),u(0),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!1,streak:0}})};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"rq-question",children:n.question}),!h&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rq-options",children:n.options.map((p,d)=>{let m="option";return o===d&&(m+=" selected"),a&&(d===n.correctAnswer?m+=" correct":o===d&&(m+=" incorrect")),c.jsx("button",{className:m,onClick:()=>k(d),children:p},d)})}),a&&o===n.correctAnswer&&c.jsx("p",{className:"rq-explanation",children:n.explanation}),a&&o===n.correctAnswer&&v&&c.jsxs(we,{to:`/module/${v.moduleId}/topic/${v.topicId}`,className:"rq-topic-link",onClick:e,children:["📚 ",v.moduleTitle," → ",v.topicTitle]}),a&&o===n.correctAnswer&&c.jsxs("div",{className:"rq-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",l]}),c.jsx("button",{className:"btn btn-primary",onClick:w,children:"Next Random Question →"})]})]}),h&&c.jsxs("div",{className:"rq-streak-end",children:[c.jsxs("p",{children:["OK. This one is incorrect. However, that was ",c.jsx("strong",{children:g})," correct answer",g!==1?"s":""," in a row. Congrats!"]}),v&&c.jsxs(we,{to:`/module/${v.moduleId}/topic/${v.topicId}`,className:"rq-topic-link",onClick:e,children:["📚 Review: ",v.moduleTitle," → ",v.topicTitle]}),c.jsx("button",{className:"btn btn-primary",onClick:w,children:"Continue →"})]})]})})}const jl=[{prompt:"Mark this component as a Client Component",codeBefore:[],codeAfter:["","export default function Counter() {","  const [count, setCount] = useState(0);","  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;","}"],answer:'"use client"',hint:"Directive that enables hooks and event handlers",moduleId:"mod-1",topicId:"mod1-t3"},{prompt:"Mark this function as a Server Action",codeBefore:[],codeAfter:["","async function createUser(formData: FormData) {",'  const name = formData.get("name");',"  await db.user.create({ data: { name } });","}"],answer:'"use server"',hint:"Directive for server-side execution",moduleId:"mod-5",topicId:"mod5-t3"},{prompt:"Set up the dynamic segment for a blog post page",codeBefore:["// File: app/blog/"],codeAfter:["/page.tsx"],answer:"[slug]",hint:"Square bracket syntax for dynamic routes",moduleId:"mod-2",topicId:"mod2-t2"},{prompt:"Export the function to pre-generate dynamic params",codeBefore:["// app/blog/[slug]/page.tsx"],codeAfter:["() {","  const posts = await getPosts();","  return posts.map(p => ({ slug: p.slug }));","}"],answer:"export async function generateStaticParams",hint:"Next.js function for static generation of dynamic routes",moduleId:"mod-4",topicId:"mod4-t1"},{prompt:"Disable caching for this fetch call",codeBefore:["const data = await fetch(url, {"],codeAfter:["});"],answer:'cache: "no-store"',hint:"Fetch option that opts out of caching",moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Set revalidation interval to 60 seconds",codeBefore:["const data = await fetch(url, {","  next: {"],codeAfter:["  }","});"],answer:"revalidate: 60",hint:"ISR interval in seconds",moduleId:"mod-4",topicId:"mod4-t2"},{prompt:"Import the Link component for client-side navigation",codeBefore:[],codeAfter:["","export default function Nav() {",'  return <Link href="/about">About</Link>;',"}"],answer:'import Link from "next/link"',hint:"Next.js navigation component",moduleId:"mod-2",topicId:"mod2-t1"},{prompt:"Import the Image component",codeBefore:[],codeAfter:["","export default function Avatar() {",'  return <Image src="/me.png" alt="Me" width={64} height={64} />;',"}"],answer:'import Image from "next/image"',hint:"Next.js optimized image component",moduleId:"mod-9",topicId:"mod9-t1"},{prompt:"Get the route params in a Server Component",codeBefore:["// app/products/[id]/page.tsx","export default async function Page("],codeAfter:[") {","  const product = await getProduct(props.params.id);","  return <h1>{product.name}</h1>;","}"],answer:"props: { params: { id: string } }",hint:"Props include params object with dynamic segments",moduleId:"mod-2",topicId:"mod2-t2"},{prompt:"Export a GET handler in a Route Handler",codeBefore:["// app/api/users/route.ts",'import { NextResponse } from "next/server";',""],codeAfter:["  const users = await getUsers();","  return NextResponse.json(users);","}"],answer:"export async function GET() {",hint:"Named export matching the HTTP method",moduleId:"mod-6",topicId:"mod6-t1"},{prompt:"Create a POST route handler",codeBefore:["// app/api/items/route.ts",'import { NextResponse } from "next/server";',""],codeAfter:["  const body = await request.json();","  const item = await createItem(body);","  return NextResponse.json(item, { status: 201 });","}"],answer:"export async function POST(request: Request) {",hint:"HTTP method as function name, Request as parameter",moduleId:"mod-6",topicId:"mod6-t1"},{prompt:"Redirect in middleware",codeBefore:['import { NextResponse } from "next/server";','import type { NextRequest } from "next/server";',"","export function middleware(request: NextRequest) {",'  if (!request.cookies.get("token")) {'],codeAfter:["  }","}"],answer:'return NextResponse.redirect(new URL("/login", request.url));',hint:"NextResponse.redirect with URL constructor",moduleId:"mod-7",topicId:"mod7-t1"},{prompt:"Define the middleware matcher config",codeBefore:["// middleware.ts","// ... middleware function above","","export const config = {"],codeAfter:["};"],answer:'matcher: ["/dashboard/:path*", "/api/:path*"]',hint:"Specify which routes middleware applies to",moduleId:"mod-7",topicId:"mod7-t1"},{prompt:"Add a loading UI for a route segment",codeBefore:["// app/dashboard/loading.tsx"],codeAfter:['  return <div className="skeleton">Loading dashboard...</div>;',"}"],answer:"export default function Loading() {",hint:"Default export in loading.tsx",moduleId:"mod-3",topicId:"mod3-t2"},{prompt:"Add an error boundary for a route segment",codeBefore:['"use client";',""],codeAfter:["  error,","  reset,","}: {","  error: Error;","  reset: () => void;","}) {","  return <button onClick={reset}>Try again</button>;","}"],answer:"export default function ErrorBoundary({",hint:"Client Component that catches errors",moduleId:"mod-3",topicId:"mod3-t2"},{prompt:"Generate dynamic metadata for a page",codeBefore:["// app/blog/[slug]/page.tsx"],codeAfter:["  params,","}: {","  params: { slug: string };","}) {","  const post = await getPost(params.slug);","  return { title: post.title, description: post.excerpt };","}"],answer:"export async function generateMetadata({",hint:"Next.js function for dynamic SEO metadata",moduleId:"mod-4",topicId:"mod4-t3"},{prompt:"Import the useRouter hook in the App Router",codeBefore:['"use client";'],codeAfter:["","export default function BackButton() {","  const router = useRouter();","  return <button onClick={() => router.back()}>Back</button>;","}"],answer:'import { useRouter } from "next/navigation";',hint:"App Router uses next/navigation, not next/router",moduleId:"mod-2",topicId:"mod2-t1"},{prompt:"Import useSearchParams hook",codeBefore:['"use client";'],codeAfter:["","export default function Search() {","  const searchParams = useSearchParams();",'  const query = searchParams.get("q");',"  return <p>Searching: {query}</p>;","}"],answer:'import { useSearchParams } from "next/navigation";',hint:"Hook for reading URL search parameters",moduleId:"mod-2",topicId:"mod2-t1"},{prompt:"Import and use the Inter font",codeBefore:[],codeAfter:["",'const inter = Inter({ subsets: ["latin"] });',"","export default function RootLayout({ children }) {","  return <html className={inter.className}><body>{children}</body></html>;","}"],answer:'import { Inter } from "next/font/google";',hint:"Google font import from next/font",moduleId:"mod-8",topicId:"mod8-t2"},{prompt:"Dynamically import a component with no SSR",codeBefore:['import dynamic from "next/dynamic";',""],codeAfter:["  loading: () => <p>Loading map...</p>,","  ssr: false,","});"],answer:'const Map = dynamic(() => import("./Map"), {',hint:"next/dynamic for lazy loading",moduleId:"mod-14",topicId:"mod14-t2"},{prompt:"Create a rewrite in middleware",codeBefore:["export function middleware(request: NextRequest) {",'  if (request.nextUrl.pathname.startsWith("/old-api")) {'],codeAfter:["  }","}"],answer:'return NextResponse.rewrite(new URL("/new-api" + request.nextUrl.pathname.slice(8), request.url));',hint:"Rewrite proxies content without changing the URL",moduleId:"mod-7",topicId:"mod7-t1"},{prompt:"Read cookies in a Server Component",codeBefore:[],codeAfter:["","export default function Page() {","  const cookieStore = cookies();",'  const theme = cookieStore.get("theme")?.value;',"  return <div data-theme={theme}>Content</div>;","}"],answer:'import { cookies } from "next/headers";',hint:"Server-only function from next/headers",moduleId:"mod-10",topicId:"mod10-t2"},{prompt:"Set the Edge Runtime for a route",codeBefore:["// app/api/fast/route.ts"],codeAfter:["","export async function GET() {",'  return new Response("Hello from the edge!");',"}"],answer:'export const runtime = "edge";',hint:"Export config to use Edge Runtime",moduleId:"mod-7",topicId:"mod7-t2"},{prompt:"Force a route to be dynamic (never cached)",codeBefore:["// app/dashboard/page.tsx"],codeAfter:["","export default async function Dashboard() {","  const data = await getRealTimeData();","  return <div>{JSON.stringify(data)}</div>;","}"],answer:'export const dynamic = "force-dynamic";',hint:"Route segment config that opts out of caching",moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Use Suspense to stream part of the UI",codeBefore:['import { Suspense } from "react";',"","export default function Page() {","  return (","    <div>","      <h1>Dashboard</h1>"],codeAfter:["        <SlowDataComponent />","      </Suspense>","    </div>","  );","}"],answer:"      <Suspense fallback={<p>Loading data...</p>}>",hint:"React feature for streaming UI",moduleId:"mod-3",topicId:"mod3-t2"},{prompt:"Tag a fetch for on-demand revalidation",codeBefore:["const data = await fetch(url, {","  next: {"],codeAfter:["  }","});"],answer:'tags: ["posts"]',hint:"Tag for use with revalidateTag()",moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Trigger on-demand revalidation by tag",codeBefore:['"use server";','import { revalidateTag } from "next/cache";',"","export async function refreshPosts() {"],codeAfter:["}"],answer:'  revalidateTag("posts");',hint:"Purge all fetches tagged with this name",moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Access search params in a Server Component",codeBefore:["// app/search/page.tsx","export default function SearchPage({"],codeAfter:["}: {","  searchParams: { q?: string };","}) {","  return <p>Results for: {searchParams.q}</p>;","}"],answer:"  searchParams,",hint:"Server Components receive searchParams as a prop",moduleId:"mod-2",topicId:"mod2-t2"},{prompt:"Create a catch-all route segment",codeBefore:["// File: app/docs/"],codeAfter:["/page.tsx","","// Matches /docs/a, /docs/a/b, /docs/a/b/c, etc."],answer:"[...slug]",hint:"Three dots for catch-all segments",moduleId:"mod-2",topicId:"mod2-t2"},{prompt:"Create a parallel route slot for notifications",codeBefore:["// Folder name inside app/dashboard/"],codeAfter:["/page.tsx","","// This slot will be passed as a prop to the dashboard layout"],answer:"@notifications",hint:"@ prefix defines a parallel route slot",moduleId:"mod-15",topicId:"mod15-t1"},{prompt:"Set the standalone output mode",codeBefore:["// next.config.js",'/** @type {import("next").NextConfig} */',"const nextConfig = {"],codeAfter:["};","module.exports = nextConfig;"],answer:'  output: "standalone",',hint:"Output mode for Docker deployment",moduleId:"mod-14",topicId:"mod14-t1"},{prompt:"Import the usePathname hook",codeBefore:['"use client";'],codeAfter:["","export default function NavLink({ href, children }) {","  const pathname = usePathname();","  const isActive = pathname === href;",'  return <a href={href} className={isActive ? "active" : ""}>{children}</a>;',"}"],answer:'import { usePathname } from "next/navigation";',hint:"Hook for reading the current pathname",moduleId:"mod-2",topicId:"mod2-t1"},{prompt:"Return a JSON response with status 201",codeBefore:["export async function POST(request: Request) {","  const data = await request.json();","  const item = await db.create(data);"],codeAfter:["}"],answer:"  return NextResponse.json(item, { status: 201 });",hint:"NextResponse.json with status option",moduleId:"mod-6",topicId:"mod6-t1"},{prompt:"Define a permanent redirect in next.config.js",codeBefore:["async redirects() {","  return [","    {",'      source: "/old-page",','      destination: "/new-page",'],codeAfter:["    },","  ];","},"],answer:"      permanent: true,",hint:"true for 301, false for 302",moduleId:"mod-14",topicId:"mod14-t1"},{prompt:"Add security headers in next.config.js",codeBefore:["async headers() {","  return [","    {",'      source: "/(.*)",',"      headers: [","        {",'          key: "X-Frame-Options",'],codeAfter:["        },","      ],","    },","  ];","},"],answer:'          value: "DENY",',hint:"Prevents clickjacking by denying iframe embedding",moduleId:"mod-14",topicId:"mod14-t1"},{prompt:"Use the form action with a Server Action",codeBefore:["async function addTodo(formData: FormData) {",'  "use server";','  await db.todo.create({ data: { text: formData.get("text") } });',"}","","export default function Page() {","  return ("],codeAfter:['      <input name="text" />','      <button type="submit">Add</button>',"    </form>","  );","}"],answer:"    <form action={addTodo}>",hint:"Pass the Server Action directly to form action",moduleId:"mod-5",topicId:"mod5-t3"},{prompt:"Get the pending status during form submission",codeBefore:['"use client";','import { useFormStatus } from "react-dom";',"","function SubmitButton() {"],codeAfter:["  return <button disabled={pending}>Submit</button>;","}"],answer:"  const { pending } = useFormStatus();",hint:"Hook that returns form submission state",moduleId:"mod-5",topicId:"mod5-t3"},{prompt:"Create an optional catch-all route",codeBefore:["// File: app/docs/"],codeAfter:["/page.tsx","","// Matches /docs, /docs/a, /docs/a/b, etc."],answer:"[[...slug]]",hint:"Double brackets for optional catch-all",moduleId:"mod-2",topicId:"mod2-t2"},{prompt:"Import notFound to trigger a 404",codeBefore:[],codeAfter:["","export default async function Page({ params }) {","  const post = await getPost(params.slug);","  if (!post) notFound();","  return <h1>{post.title}</h1>;","}"],answer:'import { notFound } from "next/navigation";',hint:"Function that throws a 404 Not Found response",moduleId:"mod-2",topicId:"mod2-t1"},{prompt:"Use the Image component with fill mode",codeBefore:['import Image from "next/image";',"","export default function Hero() {","  return (",'    <div style={{ position: "relative", width: "100%", height: 400 }}>'],codeAfter:["    </div>","  );","}"],answer:'      <Image src="/hero.jpg" alt="Hero" fill style={{ objectFit: "cover" }} />',hint:"fill makes the image fill its parent container",moduleId:"mod-9",topicId:"mod9-t1"},{prompt:"Configure remote image patterns",codeBefore:["// next.config.js","const nextConfig = {","  images: {","    remotePatterns: ["],codeAfter:["    ],","  },","};"],answer:'      { protocol: "https", hostname: "images.unsplash.com" },',hint:"Allow external image domains",moduleId:"mod-9",topicId:"mod9-t1"},{prompt:"Create a route that serves as both a page and an API endpoint",codeBefore:["// This is NOT possible because:"],codeAfter:["// You must choose either page.tsx OR route.ts in the same folder."],answer:"// route.ts and page.tsx cannot coexist in the same route segment",hint:"A fundamental App Router constraint",moduleId:"mod-6",topicId:"mod6-t1"},{prompt:"Set a custom not-found page",codeBefore:["// app/not-found.tsx"],codeAfter:["  return (","    <div>","      <h2>404 - Page Not Found</h2>","      <p>Could not find the requested resource.</p>","    </div>","  );","}"],answer:"export default function NotFound() {",hint:"Default export in not-found.tsx",moduleId:"mod-1",topicId:"mod1-t2"},{prompt:"Use React cache to deduplicate server requests",codeBefore:['import { cache } from "react";',""],codeAfter:["  const res = await fetch(`/api/user/${id}`);","  return res.json();","});"],answer:"export const getUser = cache(async (id: string) => {",hint:"Wraps an async function to memoize results in a render pass",moduleId:"mod-5",topicId:"mod5-t1"},{prompt:"Add the priority flag to preload an LCP image",codeBefore:["<Image",'  src="/banner.jpg"','  alt="Banner"',"  width={1200}","  height={400}"],codeAfter:["/>"],answer:"  priority",hint:"Preloads the image to improve LCP score",moduleId:"mod-9",topicId:"mod9-t1"},{prompt:"Configure Playwright to start the Next dev server before E2E tests",codeBefore:["// playwright.config.ts",'import { defineConfig } from "@playwright/test";',"","export default defineConfig({"],codeAfter:['  use: { baseURL: "http://localhost:3000" },',"});"],answer:'  webServer: { command: "npm run dev", port: 3000 },',hint:"Playwright config to auto-start the dev server",moduleId:"mod-13",topicId:"mod13-t2"},{prompt:"Template file that re-mounts on every navigation",codeBefore:["// app/dashboard/template.tsx"],codeAfter:["  children,","}: {","  children: React.ReactNode;","}) {",'  return <div className="fade-in">{children}</div>;',"}"],answer:"export default function Template({",hint:"template.tsx re-creates instance on each navigation, unlike layout.tsx",moduleId:"mod-1",topicId:"mod1-t2"},{prompt:"Import and use the headers function in a Server Component",codeBefore:[],codeAfter:["","export default function Page() {","  const headersList = headers();",'  const userAgent = headersList.get("user-agent");',"  return <p>User Agent: {userAgent}</p>;","}"],answer:'import { headers } from "next/headers";',hint:"Read request headers in Server Components",moduleId:"mod-3",topicId:"mod3-t1"},{prompt:"Set metadata for a page using static export",codeBefore:["// app/about/page.tsx"],codeAfter:["","export default function About() {","  return <h1>About Us</h1>;","}"],answer:'export const metadata = { title: "About Us", description: "Learn more about us" };',hint:"Static metadata export from a page",moduleId:"mod-4",topicId:"mod4-t3"},{prompt:"Import useFormState for Server Action form handling",codeBefore:['"use client";'],codeAfter:["","function Form() {",'  const [state, formAction] = useActionState(submitForm, { message: "" });','  return <form action={formAction}><input name="email" /><p>{state.message}</p></form>;',"}"],answer:'import { useActionState } from "react";',hint:"React 19 hook for managing Server Action responses",moduleId:"mod-5",topicId:"mod5-t3"},{prompt:"Revalidate a specific path in a Server Action",codeBefore:['"use server";','import { revalidatePath } from "next/cache";',"","export async function updatePost(id: string, data: FormData) {",'  await db.post.update({ where: { id }, data: { title: data.get("title") } });'],codeAfter:["}"],answer:"  revalidatePath(`/blog/${id}`);",hint:"Purge the cached page for the updated post",moduleId:"mod-5",topicId:"mod5-t3"},{prompt:"Set up a locale-based redirect in middleware",codeBefore:["export function middleware(request: NextRequest) {",'  const locale = request.headers.get("accept-language")?.split(",")[0] || "en";',"  if (!request.nextUrl.pathname.startsWith(`/${locale}`)) {"],codeAfter:["  }","}"],answer:"    return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}`, request.url));",hint:"Redirect to locale-prefixed path",moduleId:"mod-12",topicId:"mod12-t1"},{prompt:"Create a Suspense boundary with a custom fallback",codeBefore:['import { Suspense } from "react";','import Comments from "./Comments";',"","export default function Post() {","  return (","    <article>","      <h1>Post Title</h1>"],codeAfter:["      </Suspense>","    </article>","  );","}"],answer:"      <Suspense fallback={<div>Loading comments...</div>}><Comments />",hint:"Wrap async components in Suspense",moduleId:"mod-3",topicId:"mod3-t2"},{prompt:"Export runtime config for the Edge Runtime",codeBefore:["// app/api/geo/route.ts"],codeAfter:["","export function GET(request: Request) {",'  return new Response("Edge response");',"}"],answer:'export const runtime = "edge";',hint:"Config export to run on the Edge Runtime",moduleId:"mod-7",topicId:"mod7-t2"},{prompt:"Fetch with ISR tag for selective revalidation",codeBefore:['const posts = await fetch("https://api.example.com/posts", {',"  next: {"],codeAfter:["    revalidate: 3600,","  },","});"],answer:'    tags: ["posts"],',hint:'Tag for use with revalidateTag("posts")',moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Configure the bundler analyzer",codeBefore:["// next.config.js",'const withBundleAnalyzer = require("@next/bundle-analyzer")({'],codeAfter:["});","","module.exports = withBundleAnalyzer({});"],answer:'  enabled: process.env.ANALYZE === "true",',hint:"Enable based on environment variable",moduleId:"mod-14",topicId:"mod14-t2"},{prompt:"Add a global error handler for the entire app",codeBefore:["// app/global-error.tsx",'"use client";',""],codeAfter:["  error,","  reset,","}: {","  error: Error;","  reset: () => void;","}) {","  return (","    <html><body>","      <h2>Something went wrong!</h2>","      <button onClick={reset}>Try again</button>","    </body></html>","  );","}"],answer:"export default function GlobalError({",hint:"Root-level error boundary (must include html and body)",moduleId:"mod-3",topicId:"mod3-t2"},{prompt:"Use unstable_cache for data caching with tags",codeBefore:['import { unstable_cache } from "next/cache";',""],codeAfter:["  return db.post.findMany();",'}, ["all-posts"], { tags: ["posts"], revalidate: 3600 });'],answer:"const getCachedPosts = unstable_cache(async () => {",hint:"Cache function results with tags and TTL",moduleId:"mod-11",topicId:"mod11-t1"},{prompt:"Provide search params to a page component",codeBefore:["export default function ProductsPage({","  searchParams,","}: {"],codeAfter:["}) {",'  const category = searchParams.category ?? "all";',"  return <ProductList category={category} />;","}"],answer:"  searchParams: { category?: string; sort?: string };",hint:"Type the searchParams prop for the page",moduleId:"mod-2",topicId:"mod2-t2"}];function hh(e){const t=te.modules.find(r=>r.id===e.moduleId);if(!t)return null;const n=t.topics.find(r=>r.id===e.topicId);return n?{moduleTitle:t.title,topicTitle:n.title}:null}function Al(){return jl[Math.floor(Math.random()*jl.length)]}function gh({onClose:e}){const{dispatch:t}=kt(),[n,r]=S.useState(Al),[o,s]=S.useState(""),[a,i]=S.useState(null),[l,u]=S.useState(!1),[h,f]=S.useState(0),[g,x]=S.useState(!1),[v,w]=S.useState(0),k=S.useMemo(()=>hh(n),[n]),p=S.useCallback(()=>{r(Al()),s(""),i(null),u(!1),x(!1)},[]),d=()=>{if(a)return;const y=o.trim();if(y)if(y.replace(/\s+/g,"")===n.answer.trim().replace(/\s+/g,"")){i("correct");const R=h+1;f(R),t({type:"RECORD_QUICK_LINE",payload:{correct:!0,streak:R}})}else i("incorrect"),w(h),x(!0),f(0),t({type:"RECORD_QUICK_LINE",payload:{correct:!1,streak:0}})},m=y=>{y.key==="Enter"&&d()};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content ql-modal",onClick:y=>y.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"ql-prompt",children:n.prompt}),!g&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"ql-code-block",children:[n.codeBefore.map((y,R)=>c.jsx("div",{className:"ql-code-line",children:y||" "},"b"+R)),c.jsxs("div",{className:"ql-code-input-row",children:[c.jsx("span",{className:"ql-blank-marker",children:"→"}),c.jsx("input",{className:"ql-input"+(a==="correct"?" correct":a==="incorrect"?" incorrect":""),value:o,onChange:y=>s(y.target.value),onKeyDown:m,placeholder:"Type your one line here...",disabled:a!==null,autoFocus:!0})]}),n.codeAfter.map((y,R)=>c.jsx("div",{className:"ql-code-line",children:y||" "},"a"+R))]}),!a&&c.jsxs("div",{className:"ql-actions",children:[!l&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!0),children:"💡 Hint"}),c.jsx("button",{className:"btn btn-primary",onClick:d,children:"Check ✓"})]}),l&&!a&&c.jsxs("p",{className:"ql-hint",children:["💡 ",n.hint]}),a==="correct"&&c.jsxs("div",{className:"ql-result correct",children:[c.jsx("p",{children:"✅ Correct!"}),k&&c.jsxs(we,{to:`/module/${n.moduleId}/topic/${n.topicId}`,className:"rq-topic-link",onClick:e,children:["📚 ",k.moduleTitle," → ",k.topicTitle]}),c.jsxs("div",{className:"ql-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",h]}),c.jsx("button",{className:"btn btn-primary",onClick:p,children:"Next Quick Line →"})]})]})]}),g&&c.jsxs("div",{className:"ql-streak-end",children:[c.jsx("p",{children:"❌ Not quite. The correct line was:"}),c.jsx("div",{className:"ql-answer-reveal",children:c.jsx("code",{children:n.answer})}),k&&c.jsxs(we,{to:`/module/${n.moduleId}/topic/${n.topicId}`,className:"rq-topic-link",onClick:e,children:["📚 Review: ",k.moduleTitle," → ",k.topicTitle]}),c.jsxs("p",{className:"ql-streak-msg",children:["That was ",c.jsx("strong",{children:v})," correct answer",v!==1?"s":""," in a row. Keep going!"]}),c.jsx("button",{className:"btn btn-primary",onClick:p,children:"Continue →"})]})]})})}function vh(){const{progress:e,dispatch:t}=kt(),n=te.modules.reduce((x,v)=>x+v.topics.length,0),r=Object.values(e.topicProgress).filter(x=>x.completed).length,o=n>0?Math.round(r/n*100):0,s=Object.values(e.moduleTestResults).filter(x=>x.passed).length,a=e.randomQuestionStats??{attempts:0,correct:0,bestStreak:0},i=e.quickLineStats??{attempts:0,correct:0,bestStreak:0},l=a.attempts>0?Math.round(a.correct/a.attempts*100):0,u=i.attempts>0?Math.round(i.correct/i.attempts*100):0,h=e.levelTestResult,f=h?Math.round(h.score/h.total*100):0;function g(x){return x>=90?"Highly Proficient":x>=75?"Proficient":x>=55?"Advanced":x>=35?"Intermediate":"Beginner"}return c.jsxs("div",{className:"page dashboard",children:[c.jsx("h1",{children:te.title}),c.jsx("p",{className:"subtitle",children:te.description}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[o,"%"]}),c.jsx("div",{className:"stat-label",children:"Overall Progress"}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${o}%`}})})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[r,"/",n]}),c.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[s,"/",te.modules.length]}),c.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),c.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),c.jsx("h2",{children:"Activity Stats"}),c.jsxs("div",{className:"stats-grid",children:[h&&c.jsxs("div",{className:"stat-card activity-card level-card",children:[c.jsx("div",{className:"activity-icon",children:"📋"}),c.jsx("div",{className:"stat-value",children:g(f)}),c.jsx("div",{className:"stat-label",children:"Level Test Result"}),c.jsxs("div",{className:"activity-detail",children:[h.score,"/",h.total," (",f,"%)"]})]}),c.jsxs("div",{className:"stat-card activity-card rq-card",children:[c.jsx("div",{className:"activity-icon",children:"🎲"}),c.jsx("div",{className:"stat-value",children:a.attempts>0?`${l}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Random Questions"}),a.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[a.correct,"/",a.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",a.bestStreak]})]}),a.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]}),c.jsxs("div",{className:"stat-card activity-card ql-card",children:[c.jsx("div",{className:"activity-icon",children:"⚡"}),c.jsx("div",{className:"stat-value",children:i.attempts>0?`${u}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Quick Lines"}),i.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[i.correct,"/",i.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",i.bestStreak]})]}),i.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]})]}),!e.levelTestResult&&c.jsxs("div",{className:"cta-card",children:[c.jsx("h2",{children:"Start Here"}),c.jsx("p",{children:"Take the level evaluation test to assess your current Next.js & SSR knowledge."}),c.jsx(we,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),c.jsx("h2",{children:"Course Modules"}),c.jsx("div",{className:"modules-grid",children:te.modules.map((x,v)=>{const w=x.topics.length,k=x.topics.filter(m=>{var y;return(y=e.topicProgress[m.id])==null?void 0:y.completed}).length,p=Math.round(k/w*100),d=e.moduleTestResults[x.id];return c.jsxs(we,{to:`/module/${x.id}`,className:"module-card",children:[c.jsx("div",{className:"module-number",children:v+1}),c.jsx("h3",{children:x.title}),c.jsx("p",{children:x.description}),c.jsxs("div",{className:"module-meta",children:[c.jsxs("span",{children:[w," topics"]}),c.jsxs("span",{children:[p,"% done"]}),d&&c.jsxs("span",{className:d.passed?"pass":"fail",children:["Test: ",d.score,"/",d.total]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})})]},x.id)})}),r>0&&c.jsx("div",{className:"reset-section",children:c.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function li({title:e,questions:t,onComplete:n,previousResult:r,renderResult:o}){const[s,a]=S.useState({}),[i,l]=S.useState(!1),[u,h]=S.useState(r??null);if(u&&!i){const v=c.jsx("div",{className:"result-banner",children:c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})});return c.jsxs("div",{className:"quiz completed-quiz",children:[c.jsx("h2",{children:e}),o?o(u):v,c.jsx("button",{className:"btn",onClick:()=>{h(null),a({})},children:"Retake Test"})]})}const f=(v,w)=>{i||a(k=>({...k,[v]:w}))},g=()=>{let v=0;for(const k of t)s[k.id]===k.correctAnswer&&v++;const w={score:v,total:t.length,passed:v>=Math.ceil(t.length*.7),answers:s};h(w),l(!0),n(w)},x=t.every(v=>s[v.id]!==void 0);return c.jsxs("div",{className:"quiz",children:[c.jsx("h2",{children:e}),c.jsxs("p",{className:"quiz-progress",children:[Object.keys(s).length," of ",t.length," answered"]}),c.jsx("div",{className:"questions",children:t.map((v,w)=>c.jsxs("div",{className:`question ${i?"revealed":""}`,children:[c.jsxs("h3",{children:[w+1,". ",v.question]}),c.jsx("div",{className:"options",children:v.options.map((k,p)=>{let d="option";return s[v.id]===p&&(d+=" selected"),i&&(p===v.correctAnswer?d+=" correct":s[v.id]===p&&(d+=" incorrect")),c.jsx("button",{className:d,onClick:()=>f(v.id,p),disabled:i,children:k},p)})}),i&&c.jsx("p",{className:"explanation",children:v.explanation})]},v.id))}),!i&&c.jsx("button",{className:"btn btn-primary submit-btn",onClick:g,disabled:!x,children:"Submit Answers"}),i&&u&&(o?o(u):c.jsx("div",{className:"result-banner",children:c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})}))]})}function yh(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const xh={Beginner:"You're just getting started with Next.js. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 3–6 to strengthen your SSR/SSG understanding and data fetching.",Advanced:"Solid foundation! Check out Modules 7–10 covering API routes, middleware, and optimization.",Proficient:"You have strong Next.js skills. Review Modules 11–15 for advanced patterns, then take the final test.","Highly Proficient":"Excellent Next.js knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Il={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function Ll({result:e}){const t=Math.round(e.score/e.total*100),n=yh(t),r=Il[n];return c.jsxs("div",{className:"level-result",children:[c.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),c.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),c.jsx("p",{className:"level-description",children:xh[n]}),c.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(o=>c.jsx("div",{className:`level-dot ${o===n?"active":""}`,style:o===n?{background:Il[o]}:{},children:c.jsx("span",{className:"level-dot-label",children:o})},o))})]})}function wh(){var a;const{progress:e,dispatch:t}=kt(),[n,r]=S.useState(()=>Tl()),o=i=>{t({type:"SET_LEVEL_TEST",payload:i})},s=()=>{t({type:"RESET_LEVEL_TEST"}),r(Tl())};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Level Evaluation Test"}),c.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your Next.js & SSR proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&c.jsxs(c.Fragment,{children:[c.jsx(Ll,{result:e.levelTestResult}),c.jsx("div",{className:"retake-section",children:c.jsx("button",{className:"btn",onClick:s,children:"Retake with New Questions"})})]}),!e.levelTestResult&&c.jsx(li,{title:"Next.js Knowledge Assessment",questions:n,onComplete:o,renderResult:i=>c.jsx(Ll,{result:i})},(a=n[0])==null?void 0:a.id)]})}function Sh(){const{moduleId:e}=nd(),t=ii(),{progress:n,dispatch:r}=kt(),o=te.modules.findIndex(u=>u.id===e),s=te.modules[o];if(!s)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(we,{to:"/",className:"btn",children:"Back to Dashboard"})]});const a=u=>{r({type:"SET_MODULE_TEST",payload:{moduleId:s.id,result:u}})},i=te.modules[o+1],l=te.modules[o-1];return c.jsxs("div",{className:"page module-page",children:[c.jsxs("div",{className:"module-header",children:[c.jsxs("span",{className:"module-badge",children:["Module ",o+1]}),c.jsx("h1",{children:s.title}),c.jsx("p",{className:"subtitle",children:s.description})]}),c.jsxs("div",{className:"topics-list",children:[c.jsx("h2",{children:"Topics"}),s.topics.map((u,h)=>{const f=n.topicProgress[u.id];return c.jsxs(we,{to:`/module/${s.id}/topic/${u.id}`,className:`topic-card ${f!=null&&f.completed?"completed":""}`,children:[c.jsx("span",{className:"topic-number",children:h+1}),c.jsx("span",{className:"topic-title",children:u.title}),(f==null?void 0:f.completed)&&c.jsx("span",{className:"check",children:"✓"})]},u.id)})]}),c.jsxs("div",{className:"module-test-section",children:[c.jsx("h2",{children:"Module Test"}),s.topics.every(u=>{var h;return(h=n.topicProgress[u.id])==null?void 0:h.completed})?c.jsx(li,{title:`${s.title} — Test`,questions:s.test,onComplete:a,previousResult:n.moduleTestResults[s.id]}):c.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),c.jsxs("div",{className:"module-navigation",children:[l&&c.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),i&&c.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${i.id}`),children:[i.title," →"]})]})]})}function Ch({content:e}){const t=kh(e);return c.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function kh(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,o)=>{const s=ql(o.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${s}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${ql(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,o,s)=>{const a=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),i=s.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(h=>h.trim()).map(h=>`<td>${h.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${a}</tr></thead><tbody>${i}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,o=>o==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function ql(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Rh({code:e,language:t="tsx"}){const[n,r]=S.useState(!1),o=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return c.jsxs("div",{className:"code-block",children:[c.jsxs("div",{className:"code-header",children:[c.jsx("span",{className:"code-lang",children:t}),c.jsx("button",{className:"copy-btn",onClick:o,children:n?"✓ Copied":"Copy"})]}),c.jsx("pre",{children:c.jsx("code",{children:e})})]})}function Ph({task:e,onComplete:t,completed:n}){const[r,o]=S.useState(!1),[s,a]=S.useState(!1),[i,l]=S.useState(e.starterCode),[u,h]=S.useState(!!n),f=()=>{h(!0),t()};return c.jsxs("div",{className:"task-view",children:[c.jsx("h3",{children:"📝 Practice Task"}),c.jsx("p",{className:"task-description",children:e.description}),c.jsxs("div",{className:"task-code",children:[c.jsx("h4",{children:"Your Code"}),c.jsx("textarea",{className:"code-editor",value:i,onChange:g=>l(g.target.value),rows:i.split(`
`).length+2,spellCheck:!1})]}),c.jsxs("div",{className:"task-actions",children:[c.jsx("button",{className:"btn",onClick:()=>o(!r),children:r?"Hide Hints":"Show Hints"}),c.jsx("button",{className:"btn",onClick:()=>a(!s),children:s?"Hide Solution":"Show Solution"}),!u&&c.jsx("button",{className:"btn btn-primary",onClick:f,children:"Mark as Completed ✓"}),u&&c.jsx("span",{className:"completed-badge",children:"✓ Completed"})]}),r&&c.jsxs("div",{className:"hints",children:[c.jsx("h4",{children:"Hints"}),c.jsx("ul",{children:e.hints.map((g,x)=>c.jsx("li",{children:g},x))})]}),s&&c.jsxs("div",{className:"solution",children:[c.jsx("h4",{children:"Solution"}),c.jsx(Rh,{code:e.solution})]})]})}function Nh(){const{moduleId:e,topicId:t}=nd(),n=ii(),{progress:r,dispatch:o}=kt(),s=te.modules.find(g=>g.id===e);if(!s)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(we,{to:"/",className:"btn",children:"Back to Dashboard"})]});const a=s.topics.findIndex(g=>g.id===t),i=s.topics[a];if(!i)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Topic Not Found"}),c.jsx(we,{to:`/module/${s.id}`,className:"btn",children:"Back to Module"})]});const l=()=>{o({type:"COMPLETE_TOPIC",payload:{topicId:i.id}})},u=r.topicProgress[i.id],h=s.topics[a+1],f=s.topics[a-1];return c.jsxs("div",{className:"page topic-page",children:[c.jsxs("div",{className:"breadcrumb",children:[c.jsx(we,{to:"/",children:"Dashboard"}),c.jsx("span",{children:" / "}),c.jsx(we,{to:`/module/${s.id}`,children:s.title}),c.jsx("span",{children:" / "}),c.jsx("span",{children:i.title})]}),c.jsx("h1",{children:i.title}),c.jsx("div",{className:"topic-content",children:c.jsx(Ch,{content:i.explanation})}),c.jsx("hr",{}),c.jsx(Ph,{task:i.task,onComplete:l,completed:!!(u!=null&&u.completed)},i.id),c.jsxs("div",{className:"topic-navigation",children:[f&&c.jsxs("button",{className:"btn",onClick:()=>n(`/module/${s.id}/topic/${f.id}`),children:["← ",f.title]}),h?c.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${s.id}/topic/${h.id}`),children:[h.title," →"]}):c.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${s.id}`),children:"Back to Module →"})]})]})}function Th(){const{progress:e,dispatch:t}=kt(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"🏆 Final Test"}),c.jsx("p",{className:"subtitle",children:"This comprehensive test covers all modules. You need 70% to pass. Take your time!"}),c.jsx(li,{title:"Next.js & SSR Mastery — Final Assessment",questions:te.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function Eh(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1),[o,s]=S.useState(!1),a=S.useCallback(()=>s(!1),[]);return c.jsxs("div",{className:"app-layout",children:[c.jsx("button",{className:"mobile-menu-btn",onClick:()=>s(!0),"aria-label":"Open menu",children:"☰"}),o&&c.jsx("div",{className:"sidebar-overlay",onClick:a}),c.jsx(dh,{onRandomQuestion:()=>{t(!0),a()},onQuickLine:()=>{r(!0),a()},isOpen:o,onClose:a}),e&&c.jsx(mh,{onClose:()=>t(!1)}),n&&c.jsx(gh,{onClose:()=>r(!1)}),c.jsx("main",{className:"main-content",children:c.jsxs(jm,{children:[c.jsx(Et,{path:"/",element:c.jsx(vh,{})}),c.jsx(Et,{path:"/level-test",element:c.jsx(wh,{})}),c.jsx(Et,{path:"/module/:moduleId",element:c.jsx(Sh,{})}),c.jsx(Et,{path:"/module/:moduleId/topic/:topicId",element:c.jsx(Nh,{})}),c.jsx(Et,{path:"/final-test",element:c.jsx(Th,{})}),c.jsx(Et,{path:"*",element:c.jsx("div",{className:"page",children:c.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})}function bh(){return c.jsx(_m,{children:c.jsx(Vm,{children:c.jsx(Eh,{})})})}gs.createRoot(document.getElementById("root")).render(c.jsx($l.StrictMode,{children:c.jsx(bh,{})}));
